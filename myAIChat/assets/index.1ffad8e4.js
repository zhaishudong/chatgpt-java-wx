import{N as e,n as o,a as t}from"./index-34e23d97.js";import{r as n}from"./_plugin-vue_export-helper.15909a20.js";const r=()=>{console.log("set navigation"),e({frontColor:"#ffffff",backgroundColor:"#26b3a0"})},a=e=>{o({title:e,icon:"none"})},s=(e,o)=>{let t=[];for(var n=0;n<o;n++){let o=Math.floor(Math.random()*e.length);var r=e[o];t.push(r),e.splice(o,1)}return t},l=e=>{let t=document.createElement("textarea");t.value=e,t.readOnly="readOnly",document.body.appendChild(t),t.select(),t.setSelectionRange(0,e.length),o({title:"复制成功",icon:"none"}),document.execCommand("copy"),t.remove()};function u(e){console.log("utils tologin"),console.log("h5登录"),"micromessenger"==navigator.userAgent.match(/MicroMessenger/i)||console.log("h5登录 不是微信"),t({url:"/pages/login/login"})}function i(e){return n({url:"/user/login",method:"post",data:e})}function c(e){return n({url:"/api/other/queryHotQs",method:"get",data:e})}function d(e){return n({url:"/api/user/userInfo",method:"get",data:e})}function g(e){return n({url:"/api/user/update",method:"post",data:e})}function m(e){return n({url:"/api/user/queryQuestionAnswerList",method:"get",data:e})}export{u as a,r as b,l as c,m as d,g as e,c as q,s as r,i as s,a as t,d as u};
