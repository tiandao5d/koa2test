const { Builder, By, Key, until } = require("selenium-webdriver");
const open = require("open");
const fetch = require("node-fetch");
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
  const a = `
  apply_time	string	
非必须
申请通话时间	
format: date-time

call_number	integer	
必须
通话房间号	
format: int64

call_room_id	integer	
非必须
通话房间id	
format: int64

call_token	string	
非必须
通话token	
camp_id	integer	
非必须
营期期数id	
format: int64

camp_period	integer	
非必须
营期期数	
format: int32

content_id	integer	
必须
内容id	
format: int64

content_name	string	
非必须
内容名称	
course_id	integer	
必须
课程id	
format: int64

course_name	string	
非必须
课程名称	
created_at	string	
必须
创建时间	
format: date-time

deal_duration	integer	
非必须
处理时长	
format: int64

deal_end_time	string	
非必须
通话结束时间	
format: date-time

deal_start_time	string	
非必须
通话开始时间	
format: date-time

deal_user_id	integer	
非必须
处理用户id	
format: int64

deal_user_name	string	
非必须
处理用户名称	
非必须
format: int64

live_number	integer	
必须
直播间号	
format: int64

live_user_id	string	
非必须
通话用户id	
order_group_id	integer	
非必须
接单小组id	
format: int64

order_group_name	string	
非必须
接单小组名称	
order_group_period	integer	
非必须
接单小组期数	
format: int32

order_group_period_id	integer	
非必须
接单小组期数id	
format: int64

sales_id	integer	
非必须
销售id	
format: int64

sales_name	string	
非必须
销售名称
status	string	
必须
处理状态	

status_name	string	
非必须
处理状态名称	
updated_at	string	
非必须
更新时间	
format: date-time

user_avatar	string	
非必须
用户头像	
user_id	integer	
必须
申请连线用户id	
format: int64

user_name	string	
非必须
用户名称
  `;
  const arr = ["非必须", "必须", "format: int32", "format: int64", "format: date-time"];
  let b = a
    .split("\n")
    .filter((s) => {
      s = s.trim();
      if (s) {
        return !arr.includes(s);
      }
    })
    .map((s) => s.trim())
    .reduce((t, s, i) => {
      if (i % 2) {
        t[t.length - 1] += "// " + s;
      } else {
        t.push(s.replace("integer", ": number").replace("string", ": string"));
      }
      return t;
    }, [])
    .join("\n");
  // console.log(b);
  // example()
  // open('http://www.baidu.com', {app: {
  //   name: open.apps.chrome
  // }})
  // console.log(process.execPath,  process.argv)
}
fetch(
  `https://live-stage.nuwaclass.com/live/c/room/v1/event/496?token=00607cdd6d1749d882d01423014e4391`,
  {
    method: "post",
    body: JSON.stringify({
      event: "REMOTE_ENTER_ROOM",
      live_user_id: "4d46c35e5c54bc5da5e9583906e014c8",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }
)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });
module.exports = init;
