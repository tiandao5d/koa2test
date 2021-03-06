const data = {
  code: 0,
  msg: "ok",
  data: [
    {
      course_id: 1286,
      course_name: "test_直播课_liuke",
      content_id: 6259,
      content_name: "实操2.0",
      camp_id: 763,
      camp_period: 1,
      user_info: {
        id: 9809,
        name: "似水流年",
        avatar_url: null,
        mobile_phone: null,
        network_latency: 0,
        packet_loss_rate: 0,
        computer_info: "电脑/chrome/带宽0.9/Windows",
      },
      vm_id: "60b0a6aea5c04d2a3a372dad",
      sfbard_domain: "wss://txgz-bard-stage.nuwaclass.net",
      sfcloud_domain: "wss://cloud-test.shifang-edu.com",
      homework: null,
      live_number: 847841085060419584,
      created_at: 1622189771.0,
      updated_at: 1622189771.0,
      last_call_record: null,
      sales_id: null,
      sales_name: null,
      order_group_id: null,
      order_group_name: null,
      order_group_period_id: null,
      order_group_period: null,
    },
    {
      course_id: 1214,
      course_name: "children of lesser god",
      content_id: 6268,
      content_name: "lesser",
      camp_id: 700,
      camp_period: 1,
      user_info: {
        id: 7794,
        name: "钓到一只猫",
        avatar_url: null,
        mobile_phone: null,
        network_latency: 0,
        packet_loss_rate: 0,
        computer_info: "电脑/edge/带宽1.0/Windows",
      },
      vm_id: "60b0a226a5c04d2a3a372da9",
      sfbard_domain: "wss://txgz-bard-stage.nuwaclass.net",
      sfcloud_domain: "wss://cloud-test.shifang-edu.com",
      homework: null,
      live_number: 847856911075381248,
      created_at: 1622188590.0,
      updated_at: 1622188590.0,
      last_call_record: null,
      sales_id: null,
      sales_name: null,
      order_group_id: null,
      order_group_name: null,
      order_group_period_id: null,
      order_group_period: null,
    },
    {
      course_id: 1553,
      course_name: "志君的测试课程",
      content_id: 6271,
      content_name: "test-06",
      camp_id: 973,
      camp_period: 1,
      user_info: {
        id: 9854,
        name: "潭风",
        avatar_url: null,
        mobile_phone: null,
        network_latency: 0,
        packet_loss_rate: 0,
        computer_info: "电脑/chrome/带宽0.9/Windows",
      },
      vm_id: "60b0a1faa5c04d2a3a372da8",
      sfbard_domain: "wss://txgz-bard-stage.nuwaclass.net",
      sfcloud_domain: "wss://cloud-test.shifang-edu.com",
      homework: null,
      live_number: 847865374585262080,
      created_at: 1622188586.0,
      updated_at: 1622188586.0,
      last_call_record: null,
      sales_id: null,
      sales_name: null,
      order_group_id: null,
      order_group_name: null,
      order_group_period_id: null,
      order_group_period: null,
    },
    {
      course_id: 1593,
      course_name: "直播实操顶部UI优化",
      content_id: 6257,
      content_name: "直播实操测试UI部分..",
      camp_id: 1006,
      camp_period: 1,
      user_info: {
        id: 6591,
        name: "王莉莎",
        avatar_url: null,
        mobile_phone: null,
        network_latency: 0,
        packet_loss_rate: 0,
        computer_info: "电脑/chrome/带宽1.2/Windows",
      },
      vm_id: "60b08a44a5c04d2a3a372d14",
      sfbard_domain: "wss://txgz-bard-stage.nuwaclass.net",
      sfcloud_domain: "wss://cloud-test.shifang-edu.com",
      homework: null,
      live_number: 847839928401399808,
      created_at: 1622182678.0,
      updated_at: 1622182678.0,
      last_call_record: null,
      sales_id: null,
      sales_name: null,
      order_group_id: null,
      order_group_name: null,
      order_group_period_id: null,
      order_group_period: null,
    },
  ],
};

const getList = (() => {
  let _id = 1;
  // 'accepted'
  let arr = ["waiting", "rejected", "canceled", "hanguped"]; // 随机状态
  return function getList(num: number = 30) {
    function fn() {
      let a = [];
      for (let i = 0; i < num; i++) {
        a.push({
          course_id: 1553,
          content_id: 6232,
          content_name: "test-05",
          camp_id: 973,
          camp_period: 1,
          user_info: {
            id: 9854,
            name: "潭风",
            avatar_url: null,
            mobile_phone: null,
            network_latency: 0,
            packet_loss_rate: 0,
            computer_info: "电脑/chrome/带宽1.1/macOS",
          },
          vm_id: _id++,
          sfbard_domain: "wss://txgz-bard-stage.nuwaclass.net",
          sfcloud_domain: "wss://cloud-test.shifang-edu.com",
          homework: null,
          live_number: 847775585672499200,
          created_at: null,
          updated_at: null,
          last_call_record: {
            id: 1,
            status: arr[Math.floor(Math.random() * arr.length)],
          },
          sales_id: null,
          sales_name: null,
          order_group_id: null,
          order_group_name: null,
          order_group_period_id: null,
          order_group_period: null,
        });
      }
      return a;
    }
    return fn();
  };
})();
