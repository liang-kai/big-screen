// uat环境	http://dsi.uatapps.oa.citicbank.com/dsi-spring-cloud-gateway/dsi-data-api/v1/data/api/rtdm/cxzt-screen 生产环境	http://prod-ocp-gw.dsi.eprod-kzx1.cncb/dsi-data-api/v1/data/api/rtdm/cxzt-screen
// appid：4p1rAHEm 密钥：MzM2MjEzNWQ5ODA1NGNhNWI2M2VlZDNjZjk2OGQ2NWQ=

import CryptoJS from 'crypto-js'
import { useFetch } from '@vueuse/core'

const isProd = import.meta.env.PROD;
let url = isProd ? 'http://prod-ocp-gw.dsi.eprod-kzx1.cncb/dsi-data-api/v1/data/api/rtdm/cxzt-screen' : 'http://dsi.uatapps.oa.citicbank.com/dsi-spring-cloud-gateway/dsi-data-api/v1/data/api/rtdm/cxzt-screen'

const appid = isProd ? '4p1rAHEm' : 'lX6ATEWf'
const secret = isProd ? 'MzM2MjEzNWQ5ODA1NGNhNWI2M2VlZDNjZjk2OGQ2NWQ=' : 'MzBhYzY0M2RjNjkwNDBlY2E3MzcyNzhkNTAyZTg1OGY='

url = '/api/rtdm/cxzt-screen';

export const getData = async (params) => {
    const timestamp = new Date().getTime();
    const s = `appid=${appid}&secret=${secret}&timestamp=${timestamp}`;
    const sign = CryptoJS.MD5(s).toString().toUpperCase();
    try {
        const { data, error, isFetching } = await useFetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'appid': appid,
                'timestamp': timestamp,
                'signature': sign
            },
            body: JSON.stringify(params)
        });
        let jsonData = null;
        if (data && data.value) {
            if (typeof data.value === 'string') {
                try {
                    jsonData = JSON.parse(data.value);
                } catch (e) {
                    jsonData = data.value;
                }
            } else {
                jsonData = data.value;
            }
        }
        return { data: jsonData, error: error?.value ?? null, isFetching: isFetching?.value ?? false };
    } catch (err) {
        return { data: null, error: err, isFetching: false };
    }
}


// const returnData = (indicator_name) => {
//   const resultData = JSON.parse(sessionStorage.RESULT).data.result;
//   console.log(resultData);
//   return resultData.filter((item) => {
//     if (item.indicator_name === indicator_name) {
//       return item.indicator_value;
//     }
//   });
// };
// const resultCode = JSON.parse(data.value).data.returnCode === "00000000";
// if (resultCode) {
//   sessionStorage.setItem("RESULT", data.value);
// } else {
//   if (!sessionStorage.RESULT) {
//     sessionStorage.setItem("RESULT", []);
//   }
// }
// // 当日第一笔进件时间
// const firstInputTime = returnData("当日第一笔进件时间");
// console.log(firstInputTime, "firstInputTime");

// const firstInputChannle = resultData("当日第一笔进件渠道");
// console.log(firstInputChannle, "firstInputChannle"); // 当日第一笔申请卡版

// const firstqueryCardType = resultData("当日第一笔申请卡版");
// console.log(firstqueryCardType, "firstqueryCardType");

// const totalInput = resultData("当日累计进件");
// console.log(totalInput, "totalInput");
