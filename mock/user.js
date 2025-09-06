export default [
  {
    url: '/api/rtdm/cxzt-screen',
    method: 'post',
    response: () => {
      return {
        resultcode: '00000000',
        data: {
            result: [
                {
                    indicator_name: "当日第一笔进件时间",
                    indicator_dt: "2025-09-06", 
                    indicator_value: "2025-09-06 00:21:42",
                    kpi_rn: "",
                    mail_city: "",
                    mail_prov: "",
                    mode: "1" ,
                    rpt_dt: "2025-09-06",
                }
            ]
        }
      }
    }
  }
];
