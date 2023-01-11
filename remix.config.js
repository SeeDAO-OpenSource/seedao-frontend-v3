/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "netlify",
  ignoredRouteFiles: ['**/.*'],
  future: {},
  appDirectory: "app",
  assetsBuildDirectory: "build",
  serverBuildPath: "build/index.js",
  publicPath: "/build/",
}
