#!/usr/bin/env node
//定制命令行界面
const program = require('commander')
//策略模式
program.version(require('../package.json').version)
program
    .command('init <name>')
    .description('init project')//子命令的描述
    .action(require('../lib/init'))//子命令的功能

program.parse(process.argv)
// console.log(process.argv)

// program.command('refresh').description('refresh routers...').action(require('../lib/refresh'))


