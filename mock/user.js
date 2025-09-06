export default [
  {
    url: '/api/rtdm/cxzt-screen',
    method: 'post',
    response: ({ body }) => {
      const { rptDt = '2025-09-06', mode, indicatorName } = typeof body === 'string' ? JSON.parse(body) : (body || {});
      // 全部 mock 数据
      const allResults = [
          {
              indicator_name: "随机一名批核客户信息",
              indicator_dt: rptDt,
              indicator_value: JSON.stringify({
                  "住宅城市": ["杭州", "北京", "上海", "广州", "深圳"][Math.floor(Math.random() * 5)],
                  "信用分": Math.floor(Math.random() * 41) + 60, // 60~100
                  "单位城市": ["杭州", "北京", "上海", "广州", "深圳"][Math.floor(Math.random() * 5)],
                  "学历": ["本科", "硕士", "博士", "大专"][Math.floor(Math.random() * 4)],
                  "年龄": Math.floor(Math.random() * 22) + 20, // 20~41
                  "申请卡版": ["中信银行美国运通金卡", "中信银行白金卡", "中信银行普卡"][Math.floor(Math.random() * 3)],
                  "申请时间": `${rptDt} ${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
                  "职务": ["一般职员", "主管", "经理", "总监"][Math.floor(Math.random() * 4)]
              }),
              kpi_rn: "",
              mail_city: "",
              mail_prov: "",
              mode: mode,
              rpt_dt: rptDt,
          },
          {
              indicator_name: "当日第一笔进件时间",
              indicator_dt: rptDt, 
              indicator_value: `${rptDt} 00:21:42`,
              kpi_rn: "",
              mail_city: "",
              mail_prov: "",
              mode: mode,
              rpt_dt: rptDt,
          },
          {
              indicator_name: "当日第一笔进件渠道",
              indicator_dt: rptDt, 
              indicator_value: `线上`,
              kpi_rn: "",
              mail_city: "",
              mail_prov: "",
              mode: mode,
              rpt_dt: rptDt,
          },
          {
              indicator_name: "当日第一笔申请卡版",
              indicator_dt: rptDt, 
              indicator_value: `中信红`,
              kpi_rn: "",
              mail_city: "",
              mail_prov: "",
              mode: mode,
              rpt_dt: rptDt,
          },
          {
              indicator_name: "当日累计进件量",
              indicator_dt: rptDt, 
              indicator_value: Math.floor(Math.random() * 1000) + 5000,
              kpi_rn: "",
              mail_city: "",
              mail_prov: "",
              mode: mode,
              rpt_dt: rptDt,
          },
          {
                indicator_name: "实时运算次数",
                indicator_dt: rptDt, 
                indicator_value: Math.floor(Math.random() * 1000000000) + 50000000,
                kpi_rn: "",
                mail_city: "",
                mail_prov: "全球",
                mode: mode,
                rpt_dt: rptDt,
          },
          {
              indicator_name: "当天交易笔数",
              indicator_dt: rptDt, 
              indicator_value: Math.floor(Math.random() * 100000) + 5000,
              kpi_rn: "",
              mail_city: "",
              mail_prov: "全球",
              mode: mode,
              rpt_dt: rptDt,
          },
          {
              indicator_name: "当天交易金额",
              indicator_dt: rptDt, 
              indicator_value: Math.floor(Math.random() * 100000000) + 5000,
              kpi_rn: "",
              mail_city: "",
              mail_prov: "全球",
              mode: mode,
              rpt_dt: rptDt,
          },
          {
              indicator_name: "当日第一笔交易地",
              indicator_dt: rptDt, 
              indicator_value: `苏州市`,
              kpi_rn: "",
              mail_city: "",
              mail_prov: "",
              mode: mode,
              rpt_dt: rptDt,
          },
          { // mode = 0,indicatorName = 30天日均交易金额
              indicator_name: "30天日均交易金额",
              indicator_dt: rptDt, 
              indicator_value: `${rptDt} 00:31:42`,
              kpi_rn: "",
              mail_city: "",
              mail_prov: "",
              mode: mode,
              rpt_dt: rptDt,
          },
          { // mode = 0,indicatorName = 30天日均交易笔数
              indicator_name: "30天日均交易笔数",
              indicator_dt: rptDt, 
              indicator_value: `${rptDt} 00:31:42`,
              kpi_rn: "",
              mail_city: "",
              mail_prov: "",
              mode: mode,
              rpt_dt: rptDt,
          },
                    { // mode = 0,indicatorName = 30天日均交易笔数
              indicator_name: "卡产品大类不良率G01口径",
              indicator_dt: rptDt, 
              indicator_value: `${rptDt} 00:31:42`,
              kpi_rn: "",
              mail_city: "",
              mail_prov: "",
              mode: mode,
              rpt_dt: rptDt,
          }
      ];
      let result = allResults;
      if (+mode === 0 && indicatorName) {
        result = allResults.filter(item => item.indicator_name === indicatorName);
      }
      return {
        resultcode: '00000000',
        data: {
          result
        }
      };
    }
  }
];

// // 当日第一笔进件时间
// const firstInputTime = returnData("当日第一笔进件时间");
// console.log(firstInputTime, "firstInputTime");

// const firstInputChannle = resultData("当日第一笔进件渠道");
// console.log(firstInputChannle, "firstInputChannle"); // 当日第一笔申请卡版

// const firstqueryCardType = resultData("当日第一笔申请卡版");
// console.log(firstqueryCardType, "firstqueryCardType");

// const totalInput = resultData("当日累计进件");
// console.log(totalInput, "totalInput");