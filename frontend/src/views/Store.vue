<script>
import artsApi from "@/apis/arts";

export default {
    data() {
        return {
            imgData: null,
        };
    },
    methods: {
    },
    async mounted() {
        const arts = await artsApi.getAll();
        console.log(arts.data.data[0].image.data);
        this.imgData = artsApi.arrayBufferToBase64(arts.data.data[0].image.data);
    },
}
</script>

<template>
    <h1>Maybe it will looks like something in the future but now we 
        need to succeed to display image uploaded in the backend</h1>
    <img :src="'data:image/png;base64,'+this.imgData" />
</template>

<style scoped>
h1 {
    margin-top: 200px;
}
</style>
