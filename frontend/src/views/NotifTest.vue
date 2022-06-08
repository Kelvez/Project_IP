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
        async deleteOneNotif(idNotif, notifCpt) {
            await notifApi.delete(idNotif);
            await this.requestNotifs();
        },
        async requestNotifs() {
            const notifsResp = await notifApi.get5LastNotifs(this.me.data.data._id);
            if (notifsResp.data.success) {
                this.notifs = notifsResp.data.data;
                for (let notif of this.notifs) {
                    let user = await userApi.getUser(notif.otherUser);
                    notif.username = user.data.data.username;
                }
            } 
            if (this.notifs.length == 0) {
                this.notifs.push({type: "nothing"});
            }
        }
    }
}
</script>

<template>
<section>
    <div class="notifPage">
        <font-awesome-icon id="closeNotifs" :icon="['fas', 'xmark']"/>
        <p class="notifTitle">Notifications: </p>
        <div v-for="notif in this.notifs" class="notif" :key="notif._id">
            <div v-if="notif.type == 'newFollower'">
                <font-awesome-icon class="closeOneNotif" v-on:click="deleteOneNotif(notif._id, notif.cpt)" :icon="['fas', 'xmark']"/>
                <p class="textNotif"> <a class="linkOtherUser" :href="'/user/'+notif.otherUser">{{notif.username}}</a> is now following you ! </p>
            </div>
            <div v-if="notif.type == 'newArt'">
                <font-awesome-icon class="closeOneNotif" v-on:click="deleteOneNotif(notif._id, notif.cpt)" :icon="['fas', 'xmark']"/>
                <p class="textNotif"> <a class="linkOtherUser" :href="'/user/'+notif.otherUser">{{notif.username}}</a> uploaded a new <a class="linkOtherUser" :href="'#'">Art</a> ! </p>
            </div>
            <div v-if="notif.type == 'nothing'">
                <p class="textNoNotif"> No notification ! </p>
            </div>
        </div>
    </div>  
</section>
</template>

<style scoped>

.notif {
    background-color: white;
    height: 40px;
    border-bottom: 1px solid grey;
}

.notifPage {
    background-color: white;
    width: 280px;
    padding: 15px;
    border-radius: 15px;
}

.linkOtherUser {
    color: black;
    text-decoration: none;
    font-weight: bold;
}

.textNotif {
    color: black;
    padding: 10px;
    margin-right: 15px;
    text-align: center;
}

.textNoNotif {
    color: black;
    padding: 10px;
    text-align: center;
}

#closeNotifs {
    width: 20px;
    height: 20px;
    position: absolute;
    color: black;
    margin-left: 230px;
    z-index: 5;
}

.closeOneNotif {
    position: absolute;
    margin-left: 235px;
    margin-top: 13px;
    color: red;
    z-index: 5;
}

.notifTitle {
    color: black;
    text-align: center;
    margin-bottom: 5px;
    font-size: 20px;
}

</style>