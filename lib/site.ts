export const siteConfig = {
  name: 'ZHJIN AI',
  legalName: 'ZHJIN AI Studio',
  url: 'https://zhijin.fun',
  description:
    '面向电商与出海内容团队的 AI 工作流工程服务：从可复用 Skill、7–14 天工作流试点，到企业 AI 中台技术评估与分阶段落地。',
  github: 'https://github.com/Leon4868',
  stitch: 'https://stitch.withgoogle.com/projects/11733419885945959107',
}

export const navigation = [
  { href: '/services/', label: '服务' },
  { href: '/products/', label: '产品' },
  { href: '/cases/', label: '实践' },
  { href: '/insights/', label: '洞察' },
  { href: '/about/', label: '关于' },
]

export const productLadder = [
  {
    eyebrow: '01 / 轻量产品',
    title: '电商 AI Skill 套装',
    description: '把选品分析、卖点提炼、标题与多渠道文案等高频任务，封装成可配置、可复用的工作步骤。',
    status: '首批套装规划中',
    href: '/products/ecommerce-ai-skills/',
  },
  {
    eyebrow: '02 / 核心服务',
    title: '7–14 天工作流试点',
    description: '选一个真实业务流程，以可验收的小范围试点验证效果、成本与协作边界，再决定是否扩大投入。',
    status: '开放首批共创名额',
    href: '/services/workflow-pilot/',
  },
  {
    eyebrow: '03 / 企业方案',
    title: 'AI 中台技术评估',
    description: '围绕模型接入、Agent 编排、知识库、素材生产、权限和审计，给出分阶段落地路线。',
    status: '按需求评估',
    href: '/services/enterprise-ai-platform/',
  },
]

export const capabilities = [
  {
    index: '01',
    title: '把业务讲清楚',
    description: '先识别任务、角色、输入输出和验收标准，避免从“先接一个模型”开始。',
  },
  {
    index: '02',
    title: '把流程跑起来',
    description: '将知识检索、工具调用、人工审批和内容生成组织成可观察的 Agent 工作流。',
  },
  {
    index: '03',
    title: '把风险关进系统',
    description: '在设计阶段考虑权限、敏感数据、成本、失败重试与人工兜底，而非上线后补洞。',
  },
]

export const faq = [
  {
    question: '为什么先做 7–14 天试点？',
    answer:
      'AI 项目的不确定性往往来自业务数据、流程边界和团队协作。短周期试点可以用一个真实场景验证价值，同时控制前期投入。',
  },
  {
    question: '你们提供现成 SaaS 吗？',
    answer:
      '当前以 Skill 产品和定向工作流试点为主。成熟能力会逐步产品化；需要复杂系统时，先进行技术评估，再决定定制或私有化路径。',
  },
  {
    question: '企业数据如何处理？',
    answer:
      '试点开始前会明确数据范围、模型供应商与保留策略。涉及敏感数据时，优先采用最小授权、脱敏、隔离环境或客户指定基础设施。',
  },
  {
    question: '怎样判断是否适合合作？',
    answer:
      '如果你的团队有重复、可描述、结果可检验的内容或运营流程，并愿意提供真实样本，通常适合从试点开始。',
  },
]

export const allRoutes = [
  '/',
  '/services/',
  '/services/workflow-pilot/',
  '/services/enterprise-ai-platform/',
  '/products/',
  '/products/ecommerce-ai-skills/',
  '/cases/',
  '/insights/',
  '/about/',
  '/contact/',
  '/privacy/',
  '/chain-notebook/',
  '/blockchain-homework/',
]
