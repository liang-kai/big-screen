<template>
    <div>test</div>
</template>

<script>
// uat环境	http://dsi.uatapps.oa.citicbank.com/dsi-spring-cloud-gateway/dsi-data-api/v1/data/api/rtdm/cxzt-screen 生产环境	http://prod-ocp-gw.dsi.eprod-kzx1.cncb/dsi-data-api/v1/data/api/rtdm/cxzt-screen
// appid：4p1rAHEm 密钥：MzM2MjEzNWQ5ODA1NGNhNWI2M2VlZDNjZjk2OGQ2NWQ=
import CryptoJS from 'crypto-js'
import { useFetch } from '@vueuse/core'
import { onMounted } from 'vue'

const isProd = import.meta.env.PROD;
const url = isProd ? 'http://prod-ocp-gw.dsi.eprod-kzx1.cncb/dsi-data-api/v1/data/api/rtdm/cxzt-screen' : 'http://dsi.uatapps.oa.citicbank.com/dsi-spring-cloud-gateway/dsi-data-api/v1/data/api/rtdm/cxzt-screen'


const appid = '4p1rAHEm'
const secret = 'MzM2MjEzNWQ5ODA1NGNhNWI2M2VlZDNjZjk2OGQ2NWQ='
const timestamp = new Date().getTime()
const s = `appid=${appid}&secret=${secret}&timestamp=${timestamp}`
const sign = CryptoJS.MD5(s).toString().toUpperCase()

const getData = async () => {
  const { data, error, isFetching } = await useFetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      appid,
      timestamp,
      signature: sign
    },
    body: JSON.stringify({
        rptDt: '2025-09-06',
        mode: '1'
    })})

  return { data, error, isFetching }
}

//   onMounted(() => {
    getData()
//   })

</script>