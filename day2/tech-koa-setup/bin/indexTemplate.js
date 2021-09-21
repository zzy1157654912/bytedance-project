import ejs from "ejs";
import fs from "fs";
import { format } from "path";
import prettier from "prettier";
import { fileURLToPath, pathToFileURL } from "url";
import path from "path";


// 问题驱动
// 1. 手动创建
// 模板
// 开发思想  - 小步骤的开发思想
// 动态生成代码模板
export function createIndexTemplate(config) {

  const _dirname = fileURLToPath(import.meta.url);

  const template = fs.readFileSync( path.resolve(_dirname,"../template/index.ejs") , "utf-8");

  const code = ejs.render(template, {
    router: config.middleware.router,
    static: config.middleware.static,
    port: config.port,
  });

  return prettier.format(code, {
    parser: "babel",
  });
}
