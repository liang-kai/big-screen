// uat环境	http://dsi.uatapps.oa.citicbank.com/dsi-spring-cloud-gateway/dsi-data-api/v1/data/api/rtdm/cxzt-screen 生产环境	http://prod-ocp-gw.dsi.eprod-kzx1.cncb/dsi-data-api/v1/data/api/rtdm/cxzt-screen
// appid：4p1rAHEm 密钥：MzM2MjEzNWQ5ODA1NGNhNWI2M2VlZDNjZjk2OGQ2NWQ=

const returnData = (indicator_name) => {
  const resultData = JSON.parse(sessionStorage.RESULT).data.result;
  console.log(resultData);
  return resultData.filter((item) => {
    if (item.indicator_name === indicator_name) {
      return item.indicator_value;
    }
  });
};
const resultCode = JSON.parse(data.value).data.returnCode === "00000000";
if (resultCode) {
  sessionStorage.setItem("RESULT", data.value);
} else {
  if (!sessionStorage.RESULT) {
    sessionStorage.setItem("RESULT", []);
  }
}
// 当日第一笔进件时间
const firstInputTime = returnData("当日第一笔进件时间");
console.log(firstInputTime, "firstInputTime");
const firstInputChannle = resultData("当日第一笔进件渠道");
console.log(firstInputChannle, "firstInputChannle"); // 当日第一笔申请卡版
const firstqueryCardType = resultData("当日第一笔申请卡版");
console.log(firstqueryCardType, "firstqueryCardType");
const totalInput = resultData("当日累计进件");
console.log(totalInput, "totalInput");
