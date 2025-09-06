export default [
  {
    url: '/api/rtdm/cxzt-screen',
    method: 'post',
    response: ({ body }) => {
      const { rptDt = '2025-09-06', mode } = typeof body === 'string' ? JSON.parse(body) : (body || {});
      return {
        resultcode: '00000000',
        data: {
            result: [
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
                    indicator_value: `${rptDt} 00:02:42`,
                    kpi_rn: "",
                    mail_city: "",
                    mail_prov: "",
                    mode: mode,
                    rpt_dt: rptDt,
                },
                {
                    indicator_name: "当日第一笔申请卡版",
                    indicator_dt: rptDt, 
                    indicator_value: `${rptDt} 00:11:42`,
                    kpi_rn: "",
                    mail_city: "",
                    mail_prov: "",
                    mode: mode,
                    rpt_dt: rptDt,
                },
                {
                    indicator_name: "当日累计进件",
                    indicator_dt: rptDt, 
                    indicator_value: Math.floor(Math.random() * 1000) + 5000,
                    kpi_rn: "",
                    mail_city: "",
                    mail_prov: "",
                    mode: mode,
                    rpt_dt: rptDt,
                }
            ]
        }
      }
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