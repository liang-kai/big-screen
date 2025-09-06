<template>
    <div>test</div>
</template>

<script>
import { getData } from '../utils';
//   onMounted(() => {
const getD = async () => {
    const data = await getData({
        rptDt: '2025-09-06',
        mode: '1'
    })
    console.log(data, data.data.value, '===data');
}

getD()

</script>