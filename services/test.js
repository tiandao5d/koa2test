const { Builder, By, Key, until } = require("selenium-webdriver");
const open = require("open");
const fetch = require("node-fetch");
const path = require("path");
const fs = require("fs");
const { eachDir } = require("./fsformat");
async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://www.baidu.com");
    await driver.findElement(By.id("kw")).sendKeys("webdriver", Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    // await driver.quit();
  }
}
function init() {
}

// 十方crm-fe项目文件对比
function ac(){
  const sarr = eachDir("/Users/linxu/work/SF/crm-fe/src/page/course/");
  let arr = fs.readFileSync(path.join(__dirname, "./abc.json")).toString();
  arr = JSON.parse(arr);
  arr = arr.filter((s) => {
    if (s.includes("/Users/linxu/work/SF/crm-fe/src/page/course/")) {
      return true;
    }
    return false;
  });

  // 存在的文件
  console.log(sarr.length);
  // 引用的文件
  console.log(arr.length, arr);
}
module.exports = init;
