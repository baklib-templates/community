# Community 主题设计规范（Pinterest 适配）

本主题视觉对齐 [DESIGN-pinterest.md](../../../awesome-design-md/DESIGN-pinterest.md) 的 **chrome 气质**，信息架构仍为论坛（列表 / 详情 / 侧栏），**不做**图片瀑布流。

## 表面层级（必读）

| 层级 | daisyUI | 用途 |
|------|---------|------|
| 画布 Canvas | `base-100` | 页面底色（带色调 wash，三套色板各不同） |
| 抬升 Surface | `base-200` | 帖卡、详情正文、评论区、顶栏、页脚（通常近白） |
| 分割线 | `base-300` | 边框 / hairline |
| 内嵌凹槽 | 卡片内再用 `base-100` | 审核提示等 inset 区块 |

**纪律**：不要把所有区域都刷成 `base-100`。正文区用 `.pin-card`（`bg-base-200` + 边框 + 轻阴影）与画布拉开。

## 三套推荐色板差异

| 键 | 显示名 | Primary | 画布 `base-100` | 卡片 `base-200` |
|----|--------|---------|-----------------|-----------------|
| `baklib` | Mintlify | `#00b48a` 青绿 | `#e8f5f1` mint wash | `#ffffff` |
| `pinterest` | Pinterest | `#e60023` 红 | `#f0efe9` 暖灰纸感 | `#ffffff` |
| `old_school` | Intercom | `#ff5600` 橙 | `#ebe4db` 沙色纸感 | `#ffffff` |

站点已写入的色值不会随 schema 自动更新；改色板后请在 Desk `/!admin` **重新选择**对应色板再验收。

## 用色纪律

1. `primary` 仅用于主 CTA（加入 / 发帖 / 提交）与 active 底边指示，禁止大面积 `bg-primary/10` 装饰。
2. 导航、侧栏、表单：画布上抬升用 `base-200`；层级用 `text-base-content/60` 等透明度。
3. Badge：默认中性；置顶用 `neutral` 实心；审核用 `warning` / `success`。
4. 圆角：主表面 `16px`（`rounded-2xl`）；搜索与 chip `rounded-full`；大卡/弹层可 `32px`。
5. 阴影：卡片默认 `shadow-sm`；hover / dropdown 可略加重。

## 字体

不嵌入 Pin Sans。使用 system UI 栈：

`-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, Roboto, "Helvetica Neue", Arial, sans-serif`

## 组件约定

- 主按钮：`.btn2` → `bg-primary`，hover 加深（非 secondary）
- 次按钮：`.btn2-secondary` → `bg-secondary text-secondary-content`
- 幽灵：`.btn2-ghost` → 透明边框 / ink 文字
- 表单：`.form-*` → `rounded-2xl`、`bg-base-200`、focus ring `info`
- 抬升卡：`.pin-card` / `.pin-card-soft`
