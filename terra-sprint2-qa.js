const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const BASE = "http://localhost:3080";

  const pages = [
    "/",
    "/products",
    "/products/hydraulic-hose",
    "/products/hydraulic-fittings",
    "/products/accessories",
    "/services",
    "/services/hydraulic-hose-assembly",
    "/services/hose-crimping",
    "/industries",
    "/industries/construction",
    "/about",
    "/contact",
  ];

  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`[${msg.location().url}] ${msg.text()}`);
  });

  for (const path of pages) {
    const url = BASE + path;
    errors.length = 0;
    const res = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
    const status = res.status();
    const title = await page.title();
    const h1 = await page.$eval("h1", (el) => el.textContent).catch(() => "(no h1)");
    console.log(`${status === 200 ? "✅" : "❌"} ${status} ${path} | "${title}" | h1: "${h1.trim()}"`);
    if (errors.length) {
      errors.forEach((e) => console.log(`   ⚠️  ${e}`));
    }
  }

  // Check nav links on homepage
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const navLinks = await page.$$eval("header a", (links) =>
    links.map((a) => ({ href: a.href, text: a.textContent.trim() }))
  );
  console.log("\n📍 Header nav links:");
  navLinks.forEach((l) => console.log(`  ${l.href.replace(BASE, "")} → "${l.text}"`));

  // Check footer links
  const footerLinks = await page.$$eval("footer a[href]", (links) =>
    links.filter((a) => a.href.startsWith(BASE)).map((a) => a.href.replace(BASE, ""))
  );
  console.log(`\n📍 Footer links (${footerLinks.length}): ${footerLinks.slice(0, 8).join(", ")}${footerLinks.length > 8 ? "..." : ""}`);

  await browser.close();
})();
