//打开界面
const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = (content) => console.log(chalk.green(content))
// const {clone} = require('./download')
// const { spawn } = require('child_process')

module.exprots = async name => {
    clear()
    const data = await figlet('Hello ByteDance')
    log(data)

    //创建项目
    log(`创建项目:` + name)

    //克隆代码
    await clone('git@github.com:zzy1157654912/bytedance-project.git',name)

    log('安装依赖')
    await spawn('npm', ['install'], { cwd: `./${name}` })
    log(`
    🆗安装完成：
    To get Start:
    ===========================
        cd ${name}
        npm run serve
    ===========================
                `)
    const open = require('open')
    open('http://localhost:8080')
    await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
}
