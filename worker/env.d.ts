// 工作台源站的地址和它认的凭据都用 Wrangler secret 下发，不写进仓库：源站是
// 一个带登录的应用，地址进了公开仓库等于把绕过本入口的直连路径一并交出去。
// secret 不在 wrangler.jsonc 里，`wrangler types` 看不到，所以在这里补声明。
interface Env {
  AI_PLATFORM_ORIGIN: string
  AI_PLATFORM_ORIGIN_TOKEN: string
}
