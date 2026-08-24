# Terra Hose Website — Audit #2 Report

**Date:** 2026-08-24
**Auditor:** Subagent
**Scope:** Fix confirmation + Regression check + Build validation + Route spot-check

---

## Section 1: Fix Confirmation — SAE Flange Page

File: `app/technical/sae-flange/page.tsx`

| # | Check Item | Expected | Found | Status |
|---|-----------|----------|-------|--------|
| 1 | Code 62 Size 8 BCD/OD | BCD=40.5mm, OD=56mm | `Code 62 BCD: 40.5mm, OD: 56mm` | **PASS** |
| 2 | Code 62 Size 12 BCD/OD | BCD=50.8mm, OD=63mm | `Code 62 BCD: 50.8mm, OD: 63mm` | **PASS** |
| 3 | Code 62 Size 16 BCD/OD | BCD=57.2mm, OD=70mm | `Code 62 BCD: 57.2mm, OD: 70mm` | **PASS** |
| 4 | Code 62 Size 20 BCD/OD | BCD=66.7mm, OD=79mm | `Code 62 BCD: 66.7mm, OD: 79mm` | **PASS** |
| 5 | Code 62 Size 24 BCD/OD | BCD=79.4mm, OD=94mm | `Code 62 BCD: 79.4mm, OD: 94mm` | **PASS** |
| 6 | Code 62 Size 32 BCD/OD | BCD=96.8mm, OD=101mm | `Code 62 BCD: 77.8mm, OD: 101mm` | **FAIL** |
| 7 | Table note (BCD/OD definitions) | Present | `"BCD = Bolt Circle Diameter (centre-to-centre of opposite bolt holes). OD = Flange Outside Diameter (overall face diameter)."` | **PASS** |
| 8 | Technical Disclaimer (SAE J518/ISO 6162) | Present | `"Dimensions shown are representative SAE J518 / ISO 6162 interface dimensions. Actual fitting/component geometry may vary by manufacturer and design."` | **PASS** |
| 9 | "How to Identify an SAE Flange" checklist | Present in sections | Section exists with 6-step numbered checklist | **PASS** |
| 10 | No manufacturer-specific values claimed as absolute | No brand claiming | All dimensions labelled as "representative" / "interface dimensions"; disclaimer present | **PASS** |

### FAIL Detail — Item #6 (Code 62 Size 32 BCD)

| | Expected | Found |
|---|----------|-------|
| **BCD** | 96.8mm | **77.8mm** |
| **OD** | 101mm | **101mm** |

The OD is correct but the **BCD for Code 62 Size 32 is wrong (77.8mm is the Code 61 value)**. The correct Code 62 Size 32 BCD should be 96.8mm.

Source: SAE J518 / ISO 6162-2
- Code 61 Size 32 (2"): BCD = 77.8mm, OD = 88mm
- Code 62 Size 32 (2"): BCD = 96.8mm, OD = 101mm

The current code has the Code 61 BCD value under the Code 62 row. This is a data error.

---

## Section 2: Regression Checks

### 2a. Crimping Guide — Brand Difference Warning

File: `app/technical/crimping-guide/page.tsx`

- **Check:** Brand-specific crimp diameter warning exists (Gates/Parker/Semperit example)
- **Found:** Section "⚠️ Why Crimp Diameter Is NOT One Number for All Brands" with explicit example:
  - Gates G2: crimp OD = 27.0mm
  - Parker Parkerflex: crimp OD = 27.4mm
  - Semperit: crimp OD = 26.9mm
- **Status: PASS** ✅

### 2b. BSP vs JIS — BSPT Description

File: `app/technical/bsp-vs-jis/page.tsx`

- **Check:** BSPT description contains "55° Whitworth thread form"
- **Found:** `{ label: "BSPT (British Standard Pipe Taper)", value: "55° Whitworth thread form (tapered, seals on thread flanks). ISO 7-1 / BS 21. Sizes: 1/4\" to 2\"." }`
- **Status: PASS** ✅

---

## Section 3: Build Validation

```
Command: npm run build
Result:  ✓ Compiled successfully
         ✓ TypeScript passed (2.1s)
         ✓ All 31 static pages generated successfully
         No errors, no warnings
```

**Status: PASS** ✅

---

## Section 4: Route Spot-Check

All 31 routes confirmed in build output:

| Route | Status |
|-------|--------|
| `/` | ✅ Static — present |
| `/products/hydraulic-hose` | ✅ Static — present |
| `/technical/crimping-guide` | ✅ Static — present |

**Status: PASS** ✅

---

## Section 5: Overall Audit #2 Conclusion

| Category | Result |
|----------|--------|
| 10-item fix confirmation | **9 PASS, 1 FAIL** |
| Regression checks | **2/2 PASS** |
| Build | **PASS** |
| Route spot-check | **PASS** |

### Overall: **CONDITIONAL**

**Reason:** Code 62 Size 32 BCD is incorrect (77.8mm instead of 96.8mm). This is the same class of error as the original BUG-001 (wrong BCD value), just on a different size. The Code 61 value (77.8mm) is being used where Code 62 (96.8mm) should appear.

**Required fix:** Update the `specs` array in `app/technical/sae-flange/page.tsx` — change the `Flange Size 32` spec line so that `Code 62 BCD: 77.8mm` becomes `Code 62 BCD: 96.8mm`.

---

*Audit #2 — 2026-08-24*
