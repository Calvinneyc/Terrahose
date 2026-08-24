const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  const pages = [
    ["/", "home"],
    ["/products", "products"],
    ["/services", "services"],
    ["/industries", "industries"],
    ["/products/hydraulic-hose", "product-hydraulic-hose"],
    ["/services/hydraulic-hose-assembly", "service-assembly"],
    ["/about", "about"],
  ];
  for (const [path, name] of pages) {
    await page.goto("http://localhost:3080" + path, { waitUntil: "domcontentloaded", timeout: 15000 });
    await page.screenshot({ path: "C:/Users/USER/.qclaw-oversea/workspace/qa_" + name + ".png", fullPage: false });
    console.log("📸 qa_" + name + ".png");
  }
  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:3080/", { waitUntil: "domcontentloaded", timeout: 15000 });
  await page.screenshot({ path: "C:/Users/USER/.qclaw-oversea/workspace/qa_mobile_home.png", fullPage: false });
  console.log("📸 qa_mobile_home.png (390x844)");
  await browser.close();
})();
