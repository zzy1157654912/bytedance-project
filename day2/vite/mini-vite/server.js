const Koa = require("koa");
const app = new Koa();

const fs = require("fs");
const path = require("path");

const { parse } = require("@vue/compiler-sfc");
const { compile } = require("@vue/compiler-dom");

function rewriteImport(content) {
  return content
    .replace(/(from\s+['"])(?![\.\/])/g, "$1/@modules/")
    .replace(/process\.env\.NODE_ENV/g, '"development"');
}

app.use(async (ctx) => {
  const url = ctx.request.url;
  if (url === "/") {
    ctx.type = "text/html";
    console.log(ctx.path)
    ctx.body = fs.readFileSync("./index.html", "utf-8");
  } else if (url.endsWith(".js")) {
    const p = path.resolve(__dirname, url.slice(1));
    ctx.type = "text/javascript";
    const ret = fs.readFileSync(p, "utf-8");
    ctx.body = rewriteImport(ret);
  } else if (url.startsWith("/@modules")) {
    const moduleName = url.replace("/@modules/", "");
    const prefix = path.resolve(__dirname, "node_modules", moduleName);
    const module = require(prefix + "/package.json").module;
    const filePath = path.join(prefix, module);
    const ret = fs.readFileSync(filePath, "utf8");
    ctx.type = "text/javascript";
    ctx.body = rewriteImport(ret);
  } else if (url.endsWith(".vue")) {
    const p = path.resolve(__dirname, url.slice(1));
    const ret = parse(fs.readFileSync(p, "utf-8"));
    const scriptContent = ret.descriptor.script.content;
    const script = scriptContent.replace(
      "export default ",
      "const __script = "
    );

    ctx.type = "text/javascript";
    ctx.body = `
      ${rewriteImport(script)}
      import { render as __render } from '${url}?type=template'
      __script.render = __render
      export default __script
    `;
  } else if (url.endsWith("?type=template")) {
    const p = path.resolve(__dirname, url.split("?")[0].slice(1));
    const ret = parse(fs.readFileSync(p, "utf-8"));
    const template = ret.descriptor.template.content;
    const render = compile(template, { mode: "module" }).code;
    ctx.type = "text/javascript";
    ctx.body = rewriteImport(render);
  } else if (url.endsWith(".png")) {
    ctx.body = fs.readFileSync("src" + url);
  }
});

app.listen(3000, () => {
  console.log("vite start");
});
