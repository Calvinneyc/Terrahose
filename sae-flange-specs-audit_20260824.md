# SAE Flange Specs Table — 完整核对报告
**文件：** `app/technical/sae-flange/page.tsx`
**时间：** 2026-08-24
**状态：** 只读报告，无修改

---

## 当前 specs 数组完整导出

| # | label | Code | Flange Size | value（原始内容） |
|---|---|---|---|---|
| 1 | Code 61 — 3000 PSI | — | — | Standard pressure series. BCD smaller, flange OD smaller, bolt holes smaller. Used in general mobile hydraulics: excavators, tractors, trucks. Common sizes: 8 to 48. |
| 2 | Code 62 — 6000 PSI | — | — | High pressure series. BCD larger, flange OD larger, thicker material, larger bolt holes. Used in severe-duty: mining, marine, high-pressure presses. NOT interchangeable with Code 61. |
| 3 | Flange Size 8 | 61 & 62 | 8 | 1/2" bore. Code 61 BCD: 40.5mm, OD: 53mm. Code 62 BCD: 40.5mm, OD: 56mm. |
| 4 | Flange Size 12 | 61 & 62 | 12 | 3/4" bore. Code 61 BCD: 50.8mm, OD: 63mm. Code 62 BCD: 50.8mm, OD: 63mm. |
| 5 | Flange Size 16 | 61 & 62 | 16 | 1" bore. Code 61 BCD: 52.4mm, OD: 63mm. Code 62 BCD: 56.3mm, OD: 70mm. |
| 6 | Flange Size 20 | 61 & 62 | 20 | 1-1/4" bore. Code 61 BCD: 58.7mm, OD: 70mm. Code 62 BCD: 58.7mm, OD: 79mm. |
| 7 | Flange Size 24 | 61 & 62 | 24 | 1-1/2" bore. Code 61 BCD: 70.0mm, OD: 80mm. Code 62 BCD: 69.9mm, OD: 94mm. |
| 8 | Flange Size 32 | 61 & 62 | 32 | 2" bore. Code 61 BCD: 77.8mm, OD: 88mm. Code 62 BCD: 77.8mm, OD: 101mm. |
| 9 | Config: Straight (C) | — | — | Flange face perpendicular to hose axis. Used to connect to a port or in-line connection. |
| 10 | Config: 45° Elbow (A) | — | — | Flange face at 45° to hose axis. Used to change direction with minimum bending stress. |
| 11 | Config: 90° Elbow (B) | — | — | Flange face at 90° to hose axis. Most common elbow configuration. |
| 12 | Port Standard | — | — | SAE J518 (Code 61/62 flanges). ISO 6162-1 (Code 61). ISO 6162-2 (Code 62). BSPP flange ports also exist (ISO 6164). |

---

## 尺寸类型关键词标注

### 条目 #1 — Code 61 — 3000 PSI
**尺寸关键词：** BCD, flange OD, bolt holes
- **BCD** = Bolt Circle Diameter（螺栓孔中心圆直径）
- **flange OD** = Flange Outer Diameter（法兰外径）
- **bolt holes** = 螺栓孔直径

---

### 条目 #2 — Code 62 — 6000 PSI
**尺寸关键词：** BCD, flange OD, bolt holes（thicker material 无需尺寸标注）
- **BCD** = Bolt Circle Diameter（螺栓孔中心圆直径）
- **flange OD** = Flange Outer Diameter（法兰外径）
- **bolt holes** = 螺栓孔直径

---

### 条目 #3 — Flange Size 8（1/2" bore）
**尺寸关键词：** BCD, OD

| Code | BCD | OD |
|---|---|---|
| 61 | 40.5mm | 53mm |
| 62 | 40.5mm | 56mm |

- **BCD** = Bolt Circle Diameter
- **OD** = Flange Outer Diameter

> ⚠️ 注意：Code 61 与 Code 62 在 Size 8 上 BCD 相同（40.5mm），仅 OD 不同（53 vs 56mm）

---

### 条目 #4 — Flange Size 12（3/4" bore）
**尺寸关键词：** BCD, OD

| Code | BCD | OD |
|---|---|---|
| 61 | 50.8mm | 63mm |
| 62 | 50.8mm | 63mm |

- **BCD** = Bolt Circle Diameter
- **OD** = Flange Outer Diameter

> ⚠️ 注意：Size 12 的 Code 61 与 Code 62 BCD 完全相同（50.8mm），OD 也相同（63mm）。这是整个表中 BUG-001 修复的目标行（BCD: 46.0mm → 50.8mm），修复已完成 ✅

---

### 条目 #5 — Flange Size 16（1" bore）
**尺寸关键词：** BCD, OD

| Code | BCD | OD |
|---|---|---|
| 61 | 52.4mm | 63mm |
| 62 | 56.3mm | 70mm |

- **BCD** = Bolt Circle Diameter
- **OD** = Flange Outer Diameter

> 💡 观察：Size 16 是 Code 61/62 差异最明显的尺寸之一（BCD 差 3.9mm，OD 差 7mm）

---

### 条目 #6 — Flange Size 20（1-1/4" bore）
**尺寸关键词：** BCD, OD

| Code | BCD | OD |
|---|---|---|
| 61 | 58.7mm | 70mm |
| 62 | 58.7mm | 79mm |

- **BCD** = Bolt Circle Diameter
- **OD** = Flange Outer Diameter

---

### 条目 #7 — Flange Size 24（1-1/2" bore）
**尺寸关键词：** BCD, OD

| Code | BCD | OD |
|---|---|---|
| 61 | 70.0mm | 80mm |
| 62 | 69.9mm | 94mm |

- **BCD** = Bolt Circle Diameter
- **OD** = Flange Outer Diameter

> ⚠️ 注意：Code 61 BCD = 70.0mm，Code 62 BCD = 69.9mm——几乎相同但 Code 61 略大 0.1mm（可能是四舍五入差异，真实性存疑，建议核实）

---

### 条目 #8 — Flange Size 32（2" bore）
**尺寸关键词：** BCD, OD

| Code | BCD | OD |
|---|---|---|
| 61 | 77.8mm | 88mm |
| 62 | 77.8mm | 101mm |

- **BCD** = Bolt Circle Diameter
- **OD** = Flange Outer Diameter

---

### 条目 #9 — Config: Straight (C)
无尺寸关键词（配置说明）

---

### 条目 #10 — Config: 45° Elbow (A)
无尺寸关键词（配置说明）

---

### 条目 #11 — Config: 90° Elbow (B)
无尺寸关键词（配置说明）

---

### 条目 #12 — Port Standard
无尺寸关键词（标准引用）

---

## 数据完整性检查

| 检查项 | 状态 |
|---|---|
| specs 数组总数 | 12 条 ✅ |
| Code 61 总述条目 | 1 条 ✅ |
| Code 62 总述条目 | 1 条 ✅ |
| Size 8–32 数值条目 | 6 条 ✅ |
| 配置说明条目 | 3 条 ✅ |
| 标准引用条目 | 1 条 ✅ |
| BUG-001 修复验证（Size 12 BCD: 50.8mm） | ✅ 已修复 |
| WARN-002 BSPT 修正 | ✅ 已完成 |
| WARN-003 冻结 | ✅ 未触碰 |

---

## 观察到的潜在问题（供主 agent 参考）

1. **Size 24 BCD 异常：** Code 61 BCD = 70.0mm，Code 62 BCD = 69.9mm——Code 62 反而略小 0.1mm，不符合"Code 62 BCD ≥ Code 61 BCD"的逻辑。建议核实 ISO 6162 标准原文。

2. **缺少尺寸类型：** 表中只记录了 BCD 和 OD，缺少以下标准字段：
   - **Bolt Hole Diameter（螺栓孔径）** — Code 61 用 M8，Code 62 用 M10
   - **A dimension（轴向尺寸/厚度）** — 仅在 sections 表格中提到 material thickness
   - **Flange thickness（法兰厚度）**

3. **Size 8 Code 61/62 BCD 相同：** 40.5mm 在两边都一致，与其他尺寸逻辑不一致，建议核实。
