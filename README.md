# Zhijin Navigation

> `zhijin.fun` 的个人项目目录。把分散的实验、DApp 和产品原型，整理成一个清晰的入口。

[在线访问](https://zhijin.fun/) · [Chain Notebook](https://zhijin.fun/chain-notebook/) · [Blockchain Homework](https://zhijin.fun/blockchain-homework/)

## ✦ 当前项目

| 状态 | 项目 | 入口 | 简介 |
| --- | --- | --- | --- |
| 🟢 在线 | **Chain Notebook** | [`/chain-notebook/`](https://zhijin.fun/chain-notebook/) | 基于 Sepolia 的链上笔记 DApp |
| 🟢 在线 | **Blockchain Homework** | [`/blockchain-homework/`](https://zhijin.fun/blockchain-homework/) | Cosmos 与 EVM 链上开发作业演示 |

项目卡片统一维护在 [`src/projects.ts`](src/projects.ts)，导航首页会根据这份数据自动渲染。

## 🧭 路由与请求链路

```text
访问 zhijin.fun
        │
        ▼
Cloudflare Worker（zhijin-aws-proxy）
        ├── /                  → Vite 静态资源（dist）
        └── /chain-notebook/*  → AWS S3 项目源站
                                  └─ 重写页面中的 href / src 前缀
        └── /blockchain-homework/* → 302 跳转到 AWS EC2 临时演示源站
                                      ├─ /         → 项目总览
                                      ├─ :5174/    → Cosmos 钱包、转账、挖矿
                                      └─ :5173/    → EVM RPC、ethers.js、The Graph
```

Worker 还负责两项入口规范化：

- `www.zhijin.fun` 永久重定向到 `zhijin.fun`
- 项目路径自动补齐结尾 `/`，保持子路径资源和路由稳定

## 🧰 技术栈

| 层级 | 技术 |
| --- | --- |
| 页面 | React · TypeScript · Vite |
| 边缘路由 | Cloudflare Workers · Wrangler |
| 项目源站 | AWS S3 Website |
| 代码检查 | TypeScript · Oxlint |

## 📁 项目结构

```text
.
├── src/
│   ├── App.tsx          # 导航页布局与项目卡片
│   ├── projects.ts      # 项目目录数据
│   ├── main.tsx         # React 入口
│   └── styles.css       # 页面视觉样式与响应式布局
├── worker/
│   └── index.ts         # 首页静态资源与项目源站代理
├── index.html           # 页面元信息与 Vite 入口
├── vite.config.ts       # Vite 配置
└── wrangler.jsonc       # Worker、静态资源和观测配置
```

## 🚀 本地开发

```bash
npm install
npm run dev
```

开发服务器启动后，打开终端输出的本地地址即可预览导航页。

### 常用命令

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run build` | 类型检查并构建生产资源 |
| `npm run typecheck` | 仅执行 TypeScript 检查 |
| `npm run lint` | 检查 `src` 与 `worker` |
| `npm run preview` | 预览构建后的静态资源 |
| `npm run deploy:check` | 构建并执行 Wrangler dry-run |
| `npm run deploy` | 构建并部署到 Cloudflare Worker |

提交或部署前建议至少执行：

```bash
npm run typecheck
npm run lint
npm run deploy:check
```

## ➕ 添加一个项目

### 1. 添加导航卡片

在 [`src/projects.ts`](src/projects.ts) 的 `projects` 数组中加入项目数据：

```ts
{
  name: 'Project Name',
  path: '/project-name/',
  displayUrl: 'zhijin.fun/project-name',
  category: '项目分类',
  description: '项目说明',
  technologies: ['React'],
  status: 'online',
  sequence: '02',
}
```

### 2. 添加 Worker 路由

在 [`worker/index.ts`](worker/index.ts) 的 `PROJECTS` 中增加相同 slug 与 AWS 源站地址：

```ts
'project-name': {
  origin: 'http://your-s3-website-origin',
},
```

其中 `project-name` 必须与 `/project-name/` 的路径保持一致。完成后运行检查命令，再通过部署命令发布。

## ☁️ 部署说明

部署配置集中在 [`wrangler.jsonc`](wrangler.jsonc)：

- `worker/index.ts` 是 Worker 入口
- `dist` 是由 Vite 构建出的静态资源目录
- `run_worker_first` 确保项目路径先经过 Worker 路由判断
- Worker 与导航页静态资源会在同一次 Wrangler 部署中发布
- `blockchain-homework` 通过 302 网关跳转到临时 AWS EC2 源站，避免 Worker 直接回源公网 IP 时被边缘网络拦截

```bash
npm run deploy:check
npm run deploy
```

`npm run deploy` 需要本机 Wrangler 已完成 Cloudflare 认证，并具备目标 Worker 的部署权限。

## 📍 线上入口

- 首页：<https://zhijin.fun/>
- Chain Notebook：<https://zhijin.fun/chain-notebook/>
- Blockchain Homework：<https://zhijin.fun/blockchain-homework/>

### Blockchain Homework 临时入口

本次作业部署在一个限时 AWS EC2 演示实例上，直接地址如下：

- 总览：<http://35.93.216.60/>
- Cosmos：<http://35.93.216.60:5174/>
- EVM：<http://35.93.216.60:5173/>

实例按本次“一小时演示”要求自动释放；如果实例已释放，域名入口会暂时返回不可用，需要重新部署后更新 `worker/index.ts` 中的源站地址。
