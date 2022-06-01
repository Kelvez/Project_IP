<script>
import authApi from "@/apis/auth";
export default {
  data() {
    return {
      isLogged: false,
      signInLogout: "sign-out",
      backgroundBanner: 'linear-gradient(rgba(80, 95, 153, 0.2),rgba(4,9,30,0.2)),url("src/assets/Images/',
    };
  },
  async mounted() {
    if (this.$route.name == "about") {
      document.getElementsByClassName("header")[0].style.height="320px";
      document.getElementsByClassName("header")[0].style.backgroundImage=this.backgroundBanner+'mainpage/background.jpg")';
    } else if (this.$route.name == "contact" || this.$route.name == "profile") {
      document.getElementsByClassName("header")[0].style.height="320px";
      document.getElementsByClassName("header")[0].style.backgroundImage=this.backgroundBanner+'header/R4.jpg")';
    } else {
      document.getElementsByClassName("header")[0].style.height="0px";
      document.getElementsByClassName("header")[0].style.backgroundImage="";
    }
    const me = await authApi.getMe();
    if (!me) {
      this.signInLogout= "sign-in";
    } else {
      this.isLogged = true;
    }
  },
  methods: {
    async onLogout() {
      const me = await authApi.getMe();
      if (!me) {
        this.$router.push({name: "login"});
      } else {
        await authApi.logout();
        this.signInLogout= "sign-in";
        this.isLogged = false; 
        this.$router.push({name: "main"});
        document.getElementsByClassName("header")[0].style.backgroundImage="";
      }
    },
  }
}
</script>

<template>
  <section class="header">
    <head>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap" rel="stylesheet">
    </head>
    <div class="navbar">
        <div class="logo">
          <a href="/">
            <img class="logoHeader" src="../assets/Images/artsLogo.png">
          </a>
          <a href="/" class="artsHeader">Arts</a>
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="#">View</a></li>
            <li><a href="#">Category</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="#"><font-awesome-icon :icon="['fas', 'bell']"/></a></li>
            <li v-if="isLogged"><a href="profile"><font-awesome-icon :icon="['fas', 'user']"/></a></li>
            <!-- <li><a href="#"><font-awesome-icon :icon="['fas', 'user']"/></a></li> -->
            <li><font-awesome-icon class="menuLogout" v-on:click="onLogout()" :icon="['fas', this.signInLogout]" /></li>
        </ul>
    </div>
  </section>
</template> 

<style scoped>
.header {
    height: 320px;
    background-image: linear-gradient(rgba(80, 95, 153, 0.2),rgba(4,9,30,0.2)),url(../assets/Images/mainpage/background.jpg);
    background-position: center;
    background-size: cover;
    position: relative;
}

.navbar{
    /* background-color: rgb(0, 0, 0, 0.4); */
    width: 100%;
    /* margin: auto; */
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 3;
    padding-bottom: 20px;
    border-bottom: 2px solid #fff;
}

.navbar ul li{
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    position: relative;
}
.navbar ul li a{
      text-decoration: solid;
    color: white;
    font-size: 18px;
}
.navbar ul li::after{
    content: '';
    height: 3px;
    width: 0;
    background: #f44336;
    position: absolute;
    left: 0;
    bottom: -3px;
    transition: 0.5s;

}
.navbar ul li:hover::after{
    width: 100%;

}

.menuLogout{
  color: white;
}

.artsHeader {
  font-family:Cinzel Decorative; 
  margin-left: 3.5em;
  font-size: 40px;
  color: white;
  font-weight: bold;
  margin-top: 0;
  text-decoration: none;
}

.logoHeader {
  position: absolute;
  height: 100px;
  margin-top: -15px;

}
</style>