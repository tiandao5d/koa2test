const fs = require('fs')
const path = require('path')

let a = fs.readFileSync('./abc.json')
a = JSON.parse(a)
console.log(a.length)
console.log(a.slice(0, 10))

let relyOnFiles = null
diffNotRelyOn('/Users/linxu/work/SF/crm-fe/src/api')

// 对比文件夹中没有被当前项目依赖的文件
// 返回未被依赖的文件，也就是冗余文件
function diffNotRelyOn(src) {
  // src 需要查询是否存在冗余文件的目录
  const arr = eachDir(src).map(o => o.src)
  // 所有被依赖的文件
  const fls = getRelyOn()

  // 未被引用的冗余文件
  const notRelyOnFile = arr.forEach(s => !fls.includes(s))
  console.log(notRelyOnFile)
  return notRelyOnFile
}

// 获取依赖文件
function getRelyOn() {
  if (relyOnFiles) {
    return relyOnFiles
  }
  try {
    let a = fs.readFileSync('./abc.json')
    relyOnFiles = JSON.parse(a)
  } catch (error) {
    relyOnFiles = []
  }
}

// nodejs 遍历文件夹
// 如果options只是一个路径地址的话，会直接遍历递归返回所有文件，不包括文件夹
// options.src 表示文件夹路径
// options.onlyFile 是否只需要返回文件路径列表，不需要文件夹路径列表
// options.level 循环层级必须大于0，不传，传0或传其他值表示一直递归
// 如果options只是个字符串的话，则相当于是 只传了 {src}
// const fs = require('fs');
// const path = require('path');
function eachDir(options) {
  if (typeof options === 'string') {
    options = { src: options }
  }
  let { src: dirstr, onlyFile = true, level = 0 } = options
  let arr = []
  level = parseInt(level) // 最大层级
  level = level > 0 ? level : 0
  aa(dirstr)
  function aa(dirs) {
    // 当前层级
    let dlevel =
      dirs
        .replace(dirstr, '')
        .split(/\/|\\/g)
        .filter((s) => s).length + 1
    let list = fs.readdirSync(dirs)
    list.forEach((s) => {
      let o = { src: path.join(dirs, s), name: s, type: 'file' }
      let stat = fs.statSync(o.src)
      if (stat.isDirectory()) {
        if (onlyFile === false) {
          o.type = 'dir'
          arr.push(o)
        }
        if (level === 0 || level > dlevel) {
          // 文件夹
          aa(o.src)
        }
      } else {
        arr.push(o)
      }
    })
  }
  return arr
}

// "diff": "npx cross-env diff_file=1 npm run build && node ./script/diff_file.js"
// // 获取当前引入文件
// // webpack plugin，运行build，给一个环境变量diff_file=1
// // 会将依赖文件打印出来输出abc.json文件
// class FileIncludesPlugin {
//   apply(compiler) {
//     if (process.env.diff_file + '' !== '1') {
//       return
//     }
//     compiler.hooks.done.tap('FileIncludesPlugin', (stats) => {
//       try {
//         const arr = []
//         stats.compilation.fileDependencies.forEach((s) => {
//           if (!s.includes('node_modules')) {
//             arr.push(s)
//           }
//         })
//         fs.writeFileSync('./abc.json', JSON.stringify(arr))
//       } catch (error) {}
//     })
//   }
// }