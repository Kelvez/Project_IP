<script>
import likesApi from "@/apis/likes";
import userApi from "@/apis/user";
import artsApi from "@/apis/arts";
export default {
    data() {
        return {
        dataUser: {
            firstName: '',
            lastName: '',
            aboutMeDesc: '',
        },
        profilPic: null,
        error: '',
        artsOfUser: []
        }
    },
    async mounted() { 
        const user = await userApi.getUser(this.$route.params.id);
        if (user) {
            this.dataUser.firstName = user.data.data.firstName;
            this.dataUser.lastName = user.data.data.lastName;
            this.dataUser.aboutMeDesc = user.data.data.aboutMeDesc;
            if (user.data.data.imageProfil == "" || user.data.data.imageProfil == undefined) {
                this.profilPic = "src/assets/Images/profile/noProfilePic.webp"
            } else {
                let imageImported = await artsApi.arrayBufferToBase64(user.data.data.imageProfil.data);
                this.profilPic= 'data:image/png;base64,' + imageImported
            }
            this.showArts(user.data.data._id);
        }
    },
    methods:{
        async showArts(idUser) {
            const arts = await artsApi.getArtsOfUser(idUser);
            this.artsOfUser = arts.data.data;
            for (let art of this.artsOfUser) {
                art.image = await artsApi.arrayBufferToBase64(art.image.data);
                art.likes = await likesApi.likesArt(art._id);
            }
        }
    }
}
</script>

<template>
    <section class="profile">
     
        <div class="row">
            <div class="p-col1">
                <img class="imgProfil" :src="profilPic">
                <p class="namesProfil">{{this.dataUser.firstName}} {{this.dataUser.lastName}}</p>
                <p class="description">{{this.dataUser.aboutMeDesc}}</p>
                <div class="follow">
                    <p>Follower&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</p>
                    <p>Following&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</p>
                </div>
            </div>
            <div class="rows">
                <div v-for="art in this.artsOfUser" class="pics" :key="art._id">
                    <img class="imgArts" :src='"data:image/png;base64," + art.image'>
                    <div class="position">
                        <div class="names">{{art.name}}</div>
                        <div class="views">
                            <font-awesome-icon :icon="['fas', 'thumbs-up']"/> &nbsp;{{art.likes}}&nbsp;&nbsp;&nbsp;
                            <font-awesome-icon :icon="['fas', 'eye']"/>&nbsp;{{art.views}}
                        </div>
                    </div>
                    <br>
                </div>
            </div>
            <!-- <h1> No arts uploaded </h1> -->
        </div>

        
    </section>
</template>

<style scoped>

h2 {
    color: black;
    text-align: center;
}

h1 {
    color: black;
}

label {
    color: black;
}

.namesProfil {
    font-size: 25px;
    text-align: center;
    color: black;
    font-weight: bold;
}

.description {
    text-align: center;
    color: grey;
    font-size: 20px;
}


.imgProfil {
    height: 400px;
    width: 400px;
    margin-top: 20px;
    margin-left: 8px;
}

.profile{
    background-color: #f4f5f0;
   
}
.row{
    display:flex;
    justify-content:flex-start;
    margin-left: 50px;
    margin-right:50px;
    /* margin-top:100px; */
}
.p-col1{
    background:#fff;
    margin-top:50px;
    margin-bottom:5%;
    padding: 20px 20px;
    box-sizing: border-box;
    height:650px;
    width: 456px;
    margin-right: 50px;
    align-items: center;
   
    transition: 0.5s;
     
}
.p-col1:hover{
    box-shadow:0 0 20px 0px rgba(0,0,0,0.2);

}

.p-col1 .fa{
    display:block;
    color:blue;
    margin-left:170px;
    margin-top:10px;
   
    font-size:18px ;   
}
.p-col1 .follow{
    margin-top:30px;
    margin-left:175px;
    color: black;
}

h3{
    text-align: center;
    font-weight: 600;
    margin: 10px 0;
    font-family: 'Poppins', sans-serif;
}



/*---item feature---*/

.rows {
    margin-top: 50px;
    width: fit-content;
    /* background-color:#fff; */
    /* justify-content: space-between; */
    /* align-items:flex-start; */
    display:flex;
    /* flex-wrap: wrap; */
    flex-flow: row wrap;
}
/*----image---*/
.pics{
    margin-top:10px;
    margin-bottom:10px;
    margin-left:20px;
    width: 250px;
    height:290px;
    background-color:#fff;
}
.pics:hover{
    box-shadow:0 0 20px 0px rgba(17, 15, 15, 0.2);  
    
}
 
.imgArts {
    width: 250px;
    height:250px;
    position: relative;
   
}

.position{
    color:#000;
    font-size:14px;
    background-color: #fff;
    width:250px;
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
      

</style>