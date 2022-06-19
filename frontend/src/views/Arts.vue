<script>
import $ from "jquery";
import authApi from "@/apis/auth";
import userApi from "@/apis/user";
import likesApi from "@/apis/likes";
import artsApi from "@/apis/arts";
export default {
    data() {
        return {
        error: '',
        arts: []
        }
    },
    async mounted() {
        await this.showArts();  
        $('.carousel').flipster({

            style:'carousel' ,
            spacing: -0.3,

        });
    },
    methods:{
        async showArts() {
            const myArts = await artsApi.getAll();
            const me = await authApi.getMe();
            this.arts = myArts.data.data;
            let cpt = 0;
            for (let art of this.arts) {
                art.image = "http://localhost:3001/artsImage/" + art.image;
                art.likes = await likesApi.likesArt(art._id);
                art.cpt = cpt;
                let userImage = await userApi.getUser(art.user);
                if (userImage.data.data.imageProfil == "" || userImage.data.data.imageProfil == undefined) {
                    art.imageProfilUser = "/src/assets/Images/profile/noProfilePic.webp"
                } else {
                    art.imageProfilUser= 'http://localhost:3001/profileImage/' + userImage.data.data.imageProfil
                }
                art.username = userImage.data.data.username;
                
                if (me) {
                    let liked = await likesApi.isLiked(art._id, me.data.data._id)
                    if (liked.data.data) {
                        document.getElementsByClassName('iLike')[cpt].style.color = "grey";
                    }
                }
                cpt++;
            }
        },
        async artClicked (art) {
            await artsApi.oneMoreViewOnArt(art._id);
            art.views++;
            this.$router.push({name: "art", params: {id: art._id}});
        },
        async iLikeButton (art) {
            const me = await authApi.getMe();
            if (me) {
                const liked = await likesApi.isLiked(art._id, me.data.data._id)
                if (!liked.data.data) {
                    await likesApi.create(art._id, me.data.data._id);
                    document.getElementsByClassName('iLike')[art.cpt].style.color = "grey";
                    art.likes++;
                } else {
                    await likesApi.delete(art._id, me.data.data._id);
                    document.getElementsByClassName('iLike')[art.cpt].style.color = "black";
                    art.likes--;
                }
            } else {
                clearTimeout();
                document.getElementsByClassName('errorMsg')[art.cpt].style.opacity = "1";
                setTimeout(this.youMustLoginDispear, 3000, art.cpt);
            }
        },
        youMustLoginDispear(nb) {
            document.getElementsByClassName('errorMsg')[nb].style.opacity = "0";
        },
        async userClicked(user) {
            this.$router.push({name: "user", params: {id: user}});
        }
    }
}
</script>

<template>
    <section class="profile">
        <div class="rows">
            <div v-for="art in this.arts" class="pics" :key="art._id">
                <img class="imgArts" @click="artClicked(art)" :src="art.image">
                <div class="position">
                    <img class="profilPicture" :title="art.username" :src="art.imageProfilUser" @click="userClicked(art.user)">
                    <div class="names">{{art.name}}</div>
                    <div class="views">
                        <font-awesome-icon class="iLike" :icon="['fas', 'thumbs-up']" @click="iLikeButton(art)"/> &nbsp;{{art.likes}}&nbsp;&nbsp;&nbsp;
                        <font-awesome-icon :icon="['fas', 'eye']"/>&nbsp;{{art.views}}
                    </div>
                </div>
                <p class="errorMsg">You must login to like</p>
                <br>
            </div>            
        </div>        
    </section>
</template>

<style scoped>
@import '@/assets/Style/jquery.flipster.min.css';

#ux-ui
{
    margin-top: -160px;
    margin-left: 140px;  
}
#nft
{
    margin-top: -160px;
    margin-left: 150px;  
}
#graphic
{
    margin-top: -160px;
    margin-left: 70px;  
}


#contant_art
{
    color: black;
    text-align: center;
    padding-top: 170px;
    font-size: 15px;
    margin-top:0;
}

.name_type
{
    
    color: rgb(255, 255, 255);
    margin-top: -160px;
    margin-left: 110px;
    position: relative;
    font-size: 20px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
}
.errorMsg {
    opacity: 0;
    position: absolute;
    margin-top: -62px;
    margin-left: 40px;
    border-radius: 10px;
    padding: 2px;
    background-color: white;
    transition: 0.5s;
    z-index: 5;
}

html {
    background-color: white;
}

.profile{
    background-color: white;
   
}

.rows {
    /* margin-top: 50px; */
    width: fit-content;
    /* background-color:#fff; */
    justify-content:center;
    /* align-items:flex-start; */
    display:flex;
    /* flex-wrap: wrap; */
    flex-flow: row wrap;
    margin-right: 50px;
    margin-left: 30px;

}
/*----image---*/
.pics{
    margin-top:10px;
    margin-bottom:10px;
    margin-left:20px;
    /* width: 257px; */
    height:291px;
    background-color:rgb(233, 233, 233);
    border: 3px solid rgb(187, 186, 186);

}
.pics:hover{
    box-shadow:0 0 50px 0px rgba(17, 15, 15, 0.4);  
    
}
 
.imgArts {
    /* width: 250px; */
    height:250px;
    position: relative;
   
}

.profilPicture {
    width: 30px;
    height: 30px;
    margin-left: 2px;
    margin-bottom: 4px;
    border-radius: 8px;
    background-color: black;
    object-fit: cover;
    cursor: pointer;
}

.position{
    color:#000;
    font-size:14px;
    /* width:250px; */
    height:25px;
    display:flex; 
    justify-content: space-between;
    align-items:center;
    
}

.position .names{
    font-size:14px;
    margin-left: 10px;
}
.position .views{
    font-size:14px;
    margin-right: 10px;
}
.rows .cols2{
   margin-top:50px;
    width: 1100px;
    height:231px;
    background-color:#fff;
    justify-content: space-between;
    align-items:flex-start;
    display:flex;
}
        /*------icon hover------*/
.iLike{
    /* color: rgb(73, 73, 73); */

}
.iLike:hover{
    color:blue;
    font-size: 16px;
}



</style>