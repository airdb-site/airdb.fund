# airdb.fund — AirDB 公益基金官网

AirDB 公益基金的官网(Astro 静态站点,中文):介绍项目方向、志愿者招募与账目透明披露。
首页承诺"项目与成本 100% 公开、季度披露账目",披露数据以 `transparency` 页为准。

> 注意:`src/pages/transparency/index.astro` 里的账目条目目前标注为「示例」,
> 上线真实披露前需要替换为实际数据。

## 开发

```bash
pnpm install
pnpm dev      # 或 make run
pnpm build    # 构建产物输出到 dist/
```

## 目录结构

- `src/pages/index.astro` — 首页(项目方向 / 数据概览)
- `src/pages/join/` — 志愿者 / 合作申请
- `src/pages/transparency/` — 账目透明披露
- `src/layouts/ProductLayout.astro` — 站点外壳
- `src/styles/product.css` — 设计体系
- `static/` — 静态资源(`publicDir`)

## 归档

原公益组织站点(Hugo 迁移内容、`content/` Markdown、BaseLayout 渲染链路、
中文菜单与路由映射)已整体移入 `archive/legacy-nonprofit/`,不参与构建。
如需恢复参考,直接从该目录取。
