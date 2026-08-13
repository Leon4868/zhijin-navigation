export type Project = {
  name: string
  path: string
  displayUrl: string
  category: string
  description: string
  technologies: string[]
  status: 'online' | 'building'
  sequence: string
}

export const projects: Project[] = [
  {
    name: 'Chain Notebook',
    path: '/chain-notebook/',
    displayUrl: 'zhijin.fun/chain-notebook',
    category: 'Web3 · DApp',
    description:
      '把想法写进区块链。连接钱包后，可在 Sepolia 上创建、修改和删除自己的链上笔记。',
    technologies: ['React', 'Solidity', 'Sepolia'],
    status: 'online',
    sequence: '01',
  },
]
