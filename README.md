# ZHJIN AI Studio

`zhijin.fun` 的个人公司官网。面向电商与出海内容团队，展示 AI Skill、工作流试点、企业 AI 中台技术评估，以及公开工程实践。

## 技术栈

- Next.js App Router + React + TypeScript
- Tailwind CSS + 自定义设计令牌
- Framer Motion（少量渐进式动效，兼容 reduced motion）
- Next.js 静态导出 + Cloudflare Worker Assets
- Wrangler + Oxlint

站点使用静态导出，不依赖常驻 Node.js 服务。Cloudflare Worker 保留原有项目子路径代理能力。

## 页面与路由

| 路径 | 内容 |
| --- | --- |
| `/` | 公司定位、能力、产品阶梯、试点流程与 FAQ |
| `/services/` | 服务总览 |
| `/services/workflow-pilot/` | 7–14 天工作流试点 |
| `/services/enterprise-ai-platform/` | 企业 AI 中台技术评估 |
| `/products/` | 虚拟产品与 AI Skill 方法 |
| `/products/ecommerce-ai-skills/` | 电商 AI Skill 套装规划 |
| `/cases/` | 自研原型与公开工程实践 |
| `/insights/` | 内容选题规划 |
| `/about/` | 工作室定位与原则 |
| `/contact/` | 合作前置清单与通道状态 |
| `/privacy/` | 当前版本隐私说明 |

Worker 继续处理：

- `/chain-notebook/*` → AWS S3 项目源站，并重写页面资源前缀
- `/blockchain-homework/*` → AWS EC2 临时演示源站
- `www.zhijin.fun` → `zhijin.fun` 308 永久重定向

## 本地开发

```bash
npm install
npm run dev
```

开发服务器默认地址为 <http://localhost:3000>。

### 常用命令

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 启动 Next.js 开发服务器 |
| `npm run build` | 使用 Webpack 生成静态站点到 `out/` |
| `npm run typecheck` | 检查官网与 Cloudflare Worker 类型 |
| `npm run lint` | 检查 App、组件、数据和 Worker 代码 |
| `npm run preview` | 本地预览 `out/` 静态产物 |
| `npm run deploy:check` | 构建并执行 Wrangler dry-run |
| `npm run deploy` | 构建并部署到 Cloudflare Worker |

提交或部署前至少执行：

```bash
npm run lint
npm run typecheck
npm run deploy:check
```

## SEO / GEO 基础

- 每个商业页面拥有独立标题、描述和 canonical
- 首页输出 `ProfessionalService` JSON-LD
- 自动生成 `sitemap.xml`、`robots.txt` 与 Web App Manifest
- 允许主流搜索爬虫和 `OAI-SearchBot` 抓取
- 关键业务信息直接存在于静态 HTML，使用语义标题与内部链接
- 产品原型、规划中产品和公开项目均明确标注状态，避免未验证宣传

SEO/GEO 仍依赖后续持续发布真实、原创、可引用的案例和文章；技术标记不能替代内容可信度。

## 内容与素材

- 站点配置与导航：`lib/site.ts`
- 页面元信息辅助：`lib/metadata.ts`
- 全局视觉与响应式：`app/globals.css`
- 中台原型截图：`public/images/system/`
- 社交分享图：`public/og/zhijin-ai-og.svg`

联系页目前不会提交任何数据。部署前需要补充已经验证可达的企业邮箱、微信二维码或表单服务，并同步更新隐私说明。

## 部署

静态产物目录为 `out/`，配置位于 `wrangler.jsonc`：

```bash
npm run deploy:check
npm run deploy
```

`npm run deploy` 会产生真实外部变更，需要本机已完成 Cloudflare 认证并拥有目标 Worker 权限。

## 设计稿

- Stitch 项目：[ZHJIN AI Studio · 个人公司官网](https://stitch.withgoogle.com/projects/11733419885945959107)

生产代码根据设计稿重新实现，没有直接复制 Stitch 的演示 HTML。
