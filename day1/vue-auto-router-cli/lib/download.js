const {promisify} = require('util')
//to do
module.exports.clone = async function (repo,desc) {
    const download = promisify(require('download-git-reop'))
    const ora = require('ora')
    const process = ora('下载中...$(repo)')
    await download(repo,desc)
}