<script>
import userApi from "@/apis/user";
import authApi from "@/apis/auth";
export default {
    data() {
        return {
        dataUpdateUser: {
            firstName: '',
            lastName: '',
            occupation: '',
            aboutMeTitle: '',
            aboutMeDesc: '',
        },
        error: '',
        }
    },
    async mounted() {
        const me = await authApi.getMe();
        if (me) {
            this.dataUpdateUser.firstName = me.data.data.firstName;
            this.dataUpdateUser.lastName = me.data.data.lastName;
            this.dataUpdateUser.occupation = me.data.data.occupation;
            this.dataUpdateUser.aboutMeTitle = me.data.data.aboutMeTitle;
            this.dataUpdateUser.aboutMeDesc = me.data.data.aboutMeDesc;
        } 
    },
    methods:{
        async submitUpdate(){
            const updatedUser = await userApi.updateUser(this.dataUpdateUser);
            console.log(updatedUser);
            if (!updatedUser.data.success) {
                this.error = updatedUser.data.error;
            }
        }
    }
}
</script>

<template>
    <section class="profile">
     
        <div class="row">
            <div class="p-col1">
            
                <!-- <img src="image/Project/people1.png"> -->
                <font-awesome-icon class="faUpload" :icon="['fas', 'upload']"/>
                <a href="" >Upload</a>
                <div class="follow">
                    <p>Follower&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</p>
                    <p>Following&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</p>
                </div>
                
                
            </div>
            <div class="p-col2">
                <form method="post" @submit.prevent="submitUpdate">
                    <div class="p-table1">
                        <div class="p-header">
                            <h4>BASIC INFORMATION</h4>
                        </div>
                        <div class="row1">
                            <div class="f-name">
                                <label>First name</label>
                                <input type="text" v-model="dataUpdateUser.firstName" :v-bind="dataUpdateUser.firstName">
                            </div>
                            <div class="l-name">
                                <label>Last name</label>
                                <input type="text" v-model="dataUpdateUser.lastName" :v-bind="dataUpdateUser.lastName">
                            </div>
                        </div>
                        <div class="row2">
                            <div class="occupation">
                                <label>Occupation</label>
                                <textarea id="occupation" v-model="dataUpdateUser.occupation" :v-bind="dataUpdateUser.occupation"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="p-table2">
                        <div class="p-header">
                            <h4>ABOUT ME</h4>
                        </div>
                        <div class="row1">
                            <div class="title">
                                <label>Title</label>
                                <input type="text" v-model="dataUpdateUser.aboutMeTitle" :v-bind="dataUpdateUser.aboutMeTitle">
                            </div>
                        </div>

                        <div class="row2">
                            <div class="description">
                                <label>Description</label>
                                <textarea v-model="dataUpdateUser.aboutMeDesc" :v-bind="dataUpdateUser.aboutMeDesc"></textarea>
                            </div>
                        </div>
                    </div>
                    <button class="updateButton" type="submit">Update informations</button>
                    <p class="errorMsg">{{error}}</p>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>

label {
    color: black;
}

.updateButton {
    background-color: rgb(20, 199, 199);
    border-color: grey;
    border-radius: 10px;
    border-style: solid;
    color: white;
    width: 100%;
    height: 40px;
    font-size: 20px; 
    margin-bottom: 20px;
}

.faUpload {
    color: black;
}

.profile{
    background-color: #f4f5f0;
   
}
.row{
    display:flex;
    justify-content:flex-start;
     margin-left: 100px;
     margin-right:100px;


}
.p-col1{
   
    background:#fff;
    margin-top:5%;
    margin-bottom:5%;
    padding: 20px 20px;
    box-sizing: border-box;
    height:520px;
    width: 456px;
    margin-right: 100px;
    align-items: center;
   
    transition: 0.5s;
     
}
.p-col1:hover{
    box-shadow:0 0 20px 0px rgba(0,0,0,0.1);

}
.p-col1 img{
   
    margin-left:135px;
    margin-top:44px;
    border: 0px;
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
}
.p-table1{
   
    background:#fff;
    margin-top:2%;
    width: 769px;
    height: 312px;
    margin-bottom:5%;
   
    box-sizing: border-box;
    transition: 0.5s;
}
.p-table1:hover{
    box-shadow:0 0 20px 0px rgba(0,0,0,0.2);

}
.row1{
    display:flex;
    justify-content:flex-start;
     margin-left: 0px;
     margin-right:0px;


}
.p-table1 .p-header{
    background-color:dimgray;
    
}
.p-table1 .p-header h4{
 padding:12px 12px;
    
}
.f-name{
    margin-top:30px;
    margin-left: 66px;
    margin-right:65px;

}
.f-name input{
    margin-top:10px;
    width:250px;
    height:30px;
}
.l-name{
    margin-top:30px;
    margin-left: 65px;
    margin-right:65px;
   
}
.l-name input{
    margin-top:10px;
    width:250px;
    height:30px;
}
.occupation{
    margin-top:30px;
    margin-left:65px;
}
.occupation textarea{
    margin-top:30px;
    width:635px;
    height:60px;
}


.p-table2{
   
    background:#fff;
    margin-top:2%;
    width: 769px;
    height: 312px;
    margin-bottom:5%;
    transition: 0.5s;
    box-sizing: border-box;
   
   
}
.p-table2:hover{
    box-shadow:0 0 20px 0px rgba(0,0,0,0.2);

}
.p-table2 .p-header{
    background-color:dimgray;
    
}
.p-table2 .p-header h4{
 padding:12px 12px;
    
}
.title{
    margin-top:30px;
    margin-left: 65px;
    margin-right:65px;  
}
.title input{
    margin-top:10px;
    width:635px;
    height:30px;
}

.description{
    margin-top:30px;
    margin-left:65px;
}
.description textarea{
    margin-top:30px;
    width:635px;
    height:60px;
}

h3{
    text-align: center;
    font-weight: 600;
    margin: 10px 0;
    font-family: 'Poppins', sans-serif;
}


</style>