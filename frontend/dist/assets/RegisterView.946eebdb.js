import{_,o as c,c as m,a as s,w as l,b as a,v as n,d,e as p,t as g,F as h,f as w,g as y,h as f}from"./index.d440fdb5.js";const v={data(){return{dataRegister:{email:"",username:"",password:"",repeatPassword:""},error:"",passwordFieldType1:"password",passwordFieldType2:"password"}},methods:{submitRegister(){this.$http.post("http://localhost:3001/auth/register",this.dataRegister).then(r=>{console.log(r.data),r.data.success?this.$router.push({name:"login"}):this.error=r.data.error}).catch(r=>{console.log(r)})},switchVisibility(r){let e=document.getElementById("seePass1");r==1?this.passwordFieldType1=this.passwordFieldType1==="password"?"text":"password":(this.passwordFieldType2=this.passwordFieldType2==="password"?"text":"password",e=document.getElementById("seePass2")),e.getAttribute("src")=="/src/assets/Images/seePassword.png"?e.setAttribute("src","/src/assets/Images/doNotSeePassword.png"):e.setAttribute("src","/src/assets/Images/seePassword.png")}}},b=s("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"},null,-1),R=s("link",{href:"https://fonts.googleapis.com/css?family=Cinzel Decorative",rel:"stylesheet"},null,-1),T={class:"rightLeft"},P={class:"blocLeft"},x={class:"border"},V=s("p",{class:"welcome"},"Welcome !",-1),F=s("p",{class:"signInUp"},"Sign up to ARTS",-1),U=s("p",{class:"happyTo"},"Happy to meet you !",-1),B={class:"form-group"},D=s("label",null,"Email",-1),E={class:"form-group"},M=s("label",null,"Username",-1),S={class:"form-group"},k=s("label",null,"Password",-1),A={class:"passwordDiv"},C=["type"],I={class:"form-group"},L=s("label",null,"Confirm Password",-1),N={class:"passwordDiv"},Q=["type"],j=s("button",{class:"submitButton",type:"submit"},"Sign Up",-1),H=s("div",{id:"textUnderLoginRegisterButton"},[s("p",{class:"greyText"},[w("Already have an account ? "),s("a",{id:"switchRegisterLogin",href:"/"},"Login")])],-1),J={class:"errorMsg"},O=s("div",{class:"blocRight"},[s("p",{class:"arts"},"ARTS"),s("img",{class:"artsLogo",src:y})],-1);function W(r,e,u,z,t,i){return c(),m(h,null,[b,R,s("div",T,[s("div",P,[s("form",{method:"post",onSubmit:e[6]||(e[6]=l((...o)=>i.submitRegister&&i.submitRegister(...o),["prevent"]))},[s("div",x,[V,F,U,s("div",B,[D,a(s("input",{class:"form-control",type:"email","onUpdate:modelValue":e[0]||(e[0]=o=>t.dataRegister.email=o),placeholder:"Enter your email"},null,512),[[n,t.dataRegister.email]])]),s("div",E,[M,a(s("input",{class:"form-control","onUpdate:modelValue":e[1]||(e[1]=o=>t.dataRegister.username=o),placeholder:"Enter yout username"},null,512),[[n,t.dataRegister.username]])]),s("div",S,[k,s("div",A,[a(s("input",{class:"form-control",type:t.passwordFieldType1,"onUpdate:modelValue":e[2]||(e[2]=o=>t.dataRegister.password=o),placeholder:"Enter your password"},null,8,C),[[d,t.dataRegister.password]]),s("img",{id:"seePass1",class:"seePass",alt:"seePass",onClick:e[3]||(e[3]=l(o=>i.switchVisibility(1),["prevent"])),src:p})])]),s("div",I,[L,s("div",N,[a(s("input",{class:"form-control",type:t.passwordFieldType2,"onUpdate:modelValue":e[4]||(e[4]=o=>t.dataRegister.repeatPassword=o),placeholder:"Confirm your password"},null,8,Q),[[d,t.dataRegister.repeatPassword]]),s("img",{id:"seePass2",class:"seePass",alt:"seePass",onClick:e[5]||(e[5]=l(o=>i.switchVisibility(2),["prevent"])),src:p})])]),j,H,s("p",J,g(t.error),1)])],32)]),O])],64)}var X=_(v,[["render",W]]);const Z={setup(r){return(e,u)=>(c(),m("main",null,[f(X)]))}};export{Z as default};
