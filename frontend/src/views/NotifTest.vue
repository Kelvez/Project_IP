<script>
import authApi from "@/apis/auth";
import notifApi from "@/apis/notif";
import userApi from "@/apis/user";
export default {
    data() {
        return {
        notifs: [],
        error: '',
        me: undefined,
        }
    },
    async mounted() {
        this.me = await authApi.getMe();
        if (this.me) {
            await this.requestNotifs();
        }
    },
    methods:{
        
    }
}
</script>

<template>
<section>
      
</section>
</template>

<style scoped>



</style>