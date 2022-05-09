<script>
export default {
  name: 'app',
  components: {
    
  },
  mounted() {
    let externalScript = document.createElement('script');
    externalScript.setAttribute('src', 'https://kit.fontawesome.com/2d0ee610a6.js');
    let externalScript2 = document.createElement('script');
    externalScript2.setAttribute('src', 'https://unpkg.com/ionicons@5.4.0/dist/ionicons.js');    
    document.head.appendChild(externalScript);
    document.head.appendChild(externalScript2);
  },
}
</script>

<template>
    <head>
        <title>Main page</title>
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap" rel="stylesheet">
        <!-- font awesome cdn link  -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    </head>
    <body>
    <!--Home page-->
        <section>
        <div class="banner">
            <div class="navbar">
                <div class="logo">    
                    <h1 style="font-family:Cinzel Decorative">Arts</h1>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">View</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a class="fa-solid fa-bell"></a></li>
                    <li><a class="fa-solid fa-user"></a></li>
                </ul>
            </div>
            <div class="content">
                <h1>SHARE YOUR ARTWORKS</h1>
                <div>
                    <button type="button"><span></span>GET STARTED</button>
                </div>
            </div>
        </div>
        </section>
    <!---About US-->
    <section>
        <div class="containerabout">
            <div class="left"></div>
            <div class="right">
              <div class="content-about">
                <h1>About US</h1>
                <p>Website for artist to share their works</p>
                <a href="#" class="btn">More</a>
              </div>
            </div>
          </div>
    </section>

    <!--View-->

        <div class="container">
            <h1 class="heading"> View </h1>
        
            <div class="box-container">
        
                <div class="box">
                    <div class="image"> 
                        <img src="../assets/Images/plant.jpg" alt="">
                    </div>
                    <div class="content-view">
                        <h3>Plant</h3>
                    </div>
                </div>
        
                <div class="box" >
                    <div class="image">
                        <img src="../assets/Images/art.jpg" alt="">
                    </div>
                    <div class="content-view">
                        <h3>Art</h3>
                    </div>
                </div>
        
                <div class="box">
                    <div class="image">
                        <img src="../assets/Images/wall.jpg
                        " alt="">
                    </div>
                    <div class="content-view">
                        <h3>Wall art</h3>
                    </div>
                </div>   
        
            </div>
        
        </div>

        <!--Category-->
        <div class="container">
            <h1 class="heading"> Category </h1>
        
            <div class="box-container">
        
                <div class="box">
                    <div class="image"> 
                        <img src="../assets/Images/black.png" alt="">
                    </div>
                    <div class="content-view">
                        <h3>Website</h3>
                    </div>
                </div>
        
                <div class="box" >
                    <div class="image">
                        <img src="../assets/Images/logo.png" alt="">
                    </div>
                    <div class="content-view">
                        <h3>Logo Maker</h3>
                    </div>
                </div>
        
                <div class="box">
                    <div class="image">
                        <img src="../assets/Images/squid.png" alt="">
                    </div>
                    <div class="content-view">
                        <h3>Squid Game</h3>
                    </div>
                </div>   
        
            </div>
        
        </div>

    <!--Contact-->
    <section>
        <div class="contact">
            <h1> Sharing experice</h1>
            <div>
                <button type="button"><span></span>Contact</button>
            </div>
        </div>

    </section>

    <!--Footer-->
    <section>
       <!--- <div class="footer">
            <h4>Contact</h4>
            <ul>
                <li><a class="fa-solid fa-phone"></a>&nbsp;&nbsp;0123456789</li>
                <li><a class="fa-solid fa-envelope"></a>&nbsp;&nbsp;arts@gmail.com</li>
            </ul>

        </div>-->
        <div class="footer">
            <div class="display">
                <div>
                    <div>Contact</div>
                        <img src="../assets/Images/call.png"> 089705730 
                    <div style="padding-top:20px;">
                        <img src="../assets/Images/message.png" > arts@gmail.com
                    </div>
                </div>
                <div>
                    <div>Social media</div>
                    <div class="icon" >
                        <a href="###"><font-awesome-icon :icon="['fab', 'font-awesome']" /></a>
                        <a href="###"><font-awesome-icon :icon="['fab', 'fab fa-instagram']" /></a>
                        <a href="###"><font-awesome-icon :icon="['fab', 'fa-twitter']" /></a>
                       </div>
                </div>
               <div>
                <div>Stay in touch!</div>
                    <div class="display1">
                        <div id="box1">
                            <input type="text" value="E-mail">
                            
                        </div>
                        <div id="box2">
                            <input type="button" value="send">
                        </div>
                    </div>
               </div>
                
            </div>
        </div>
    </section>
    </body>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
.banner{
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.74),rgba(0,0,0,0.75)),url(../assets/Images/background.jpg);
    background-size: cover;
    background-position: center;
}
.navbar{
    background-color: rgb(2, 51, 51);
    width: 100%;
    margin: auto;
    padding: 35px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
}
.logo{
    width: 120px;
    color: white;
    cursor: pointer;
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
}
.navbar ul li::after{
    content: '';
    height: 3px;
    width: 0;
    background:blue;
    position: absolute;
    left: 0;
    bottom: -10px;
    transition: 0.5s;

}
.navbar ul li:hover::after{
    width: 100%;

}
.content{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    color: #fff;
}
.content h1{
    font-size: 70px;
    margin-top: 80px;
}
button{
    width: 200px;
    padding: 15px 0;
    text-align: center;
    margin: 20px 10px;
    font-weight: bold;
    border: 2px solid blue;
    background: transparent;
    color: #fff;
    cursor: pointer;
    position:relative;
    overflow: hidden;
}

span{
    background: blue;
    height: 100%;
    width: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: 0.5s;
}
button:hover span{
    width: 100%;
}
button:hover{
    border: none;
}

html {
  font-family: "Montserrat";
}
section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1f26;
}
.containerabout {
  width: 90%;
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: aqua; */
}
.left {
  width: 50%;
  height: 600px;
  background: url(https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80)
    no-repeat center / cover;
  border-radius: 8px;
}
.right {
  width: 50%;
  min-height: 400px;
  background-color: #303137;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 8px;
  color: white;
  margin-left: -150px;
}
.right h1 {
  font-size: 40px;
  font-weight: lighter;
}
.right p {
  margin: 20px 0;
  font-weight: 500;
  line-height: 25px;
}
.right a {
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  color: black;
  padding: 20px 30px;
  display: inline-block;
  letter-spacing: 2px;
}

@media only screen and (max-width: 768px) {
  .containerabout {
    flex-direction: column;
    width: 100%;
    margin: 0 20px;
  }
  .left {
    width: 100%;
    height: 400px;
  }
  .right {
    width: 90%;
    margin: 0;
    margin-top: -100px;
  }
}
/*-- View --*/

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');

*{
  font-family: 'Poppins', sans-serif;
  margin:0; padding:0;
  box-sizing: border-box;
  outline: none; border:none;
  text-transform: capitalize;
  text-decoration: none;
  transition: .2s linear;
}

.container .heading{
  text-align: center;
  padding:10px;
  color:#333;
  font-size: 35px;
  border-bottom: 3px solid #333;
}

.container .box-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap:20px;
  padding:20px 9%;
  background: #eee;
}

.container .box-container.active{
  padding-bottom: 150px;
}

.container .box-container .box{
  border-radius: 10px;
  background:#fff;
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
  padding:15px;
  cursor: pointer;
}

.container .box-container .box .image{
  height:400px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
}

.container .box-container .box .image img{
  height:100%;
  width:100%;
  object-fit: cover;
}

.container .box-container .box .image .play{
  position: absolute;
  top:0; left:0;
  height: 100%;
  width:100%;
  background: rgba(0,0,0,.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  display: none;
}

.container .box-container .box:hover .image .play{
  display: grid;
}

.container .box-container .box .image .play i{
  font-size: 100px;
  color:#fff;
}

.container .box-container .box .content{
  padding-top: 15px;
}

.container .box-container .box .content h3{
  font-size: 20px;
  color:#333;
}



@media (max-width:768px) {
  .container .box-container{
    padding:20px;
  }
}

@media (max-width:450px) {
  .container .box-container{
    grid-template-columns: 1fr;
  }

  .container .box-container .box .image{
    height: 300px;
  }
}

/*-- Contact --*/

.contact{
    margin: 100px auto;
    width: 80%;
    background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(../assets/Images/banner.jpg);
    background-size: cover;
    text-align: center;
    padding: 100px 0;
}
.contact h1{
    color: #fff;
    margin-bottom: 40px;
    padding:0;

}
/* Footer */
.footer{
            
    width: 100%;
    height: 200px;
    margin-top: 20px;
    background-color: rgb(66, 63, 63);
    color:aliceblue   
}
.display{
display: flex;
justify-content: space-between;
padding-top: 20px;
padding-left: 30px;
padding-right: 30px;
}

.icon a{
   color: aliceblue;
   text-decoration: none;
    font-size: 40px;
}
img{
  width: 20px;
  height: 20px;
  color: aliceblue;
  text-decoration: none;
}
.icon{
   padding-top: 50px;
}
#box1 input{
    background-color: black;
    color: aliceblue;
    height: 30px;
}
#box2 input {
   height: 35px;
}
.display1{
   display: flex;
   padding-top: 40px;
   flex-direction: row;
}
</style>