import{r as a,D as e,o as s,c as t,w as c,i as l,a as r,b as A,x as o,t as i,E as n,G as p,H as d,k as u,J as m,v as f,d as x,I as g}from"./index-aea97389.js";import{o as w,a as C}from"./uni-app.es.eb796e50.js";import{b as N,u as b,t as q,e as Q}from"./index.fa80ff81.js";import{a as h}from"./avatar_deft.83ee10ff.js";import{e as k}from"./env.5550a020.js";import{_ as v}from"./_plugin-vue_export-helper.83a1fa4b.js";const E=v({__name:"editInfo",setup(v){const E=a({avatar:"",nickName:"",id:""});let R="";w((a=>{N(),R=a.type,"login"==R&&e({title:"完善资料"})})),C((()=>{b().then((a=>{let e=a.data;E.avatar=e.avatar,E.nickName=e.nickName,E.id=e.id}))}));const B=()=>{n({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:a=>{var e;p({title:"上传中..."}),e=a.tempFilePaths,d({url:k.BASE_URL+"/api/upload/merChantupload",header:{token:u("token")},filePath:e[0],name:"file",success:a=>{let e=JSON.parse(a.data);"success"===e.msg&&(E.avatar=e.data.src),m()}})}})};function S(){return E.avatar?E.nickName?void Q(E).then((a=>{q("login"===R?"编辑成功":"修改成功"),setTimeout((()=>{f({url:"login"===R?"/pages/index/index":"/pages/user/user"})}),1200)})):q("昵称不能为空"):q("请上传头像")}return(a,e)=>{const n=l,p=x,d=g;return s(),t(n,{class:"page pad page-top"},{default:c((()=>[r(n,{class:"bg-white radius-10 list-box"},{default:c((()=>[r(n,{class:"item px-20 py-30 flex space-between"},{default:c((()=>[r(n,{class:"c-3"},{default:c((()=>[A(" 头像 ")])),_:1}),r(p,{onClick:B,src:E.avatar||o(h),class:"avatar-img",mode:""},null,8,["src"])])),_:1}),r(n,{class:"item px-20 py-30 flex space-between"},{default:c((()=>[r(n,{class:"c-3"},{default:c((()=>[A(" 昵称 ")])),_:1}),r(d,{placeholder:"请输入昵称",modelValue:E.nickName,"onUpdate:modelValue":e[0]||(e[0]=a=>E.nickName=a),"placeholder-class":"c-9 font-24",class:"form-input c-6 font-28"},null,8,["modelValue"])])),_:1}),r(n,{class:"item px-20 py-30 flex space-between"},{default:c((()=>[r(n,{class:"c-3"},{default:c((()=>[A(" ID号 ")])),_:1}),r(n,{class:"c-6 font-28 flex-row flex-align"},{default:c((()=>[A(i(E.id)+" ",1),r(p,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA/1JREFUaEPtWV1oXEUU/k4SAlL0SSuCFdFSCUJ9sOhLpRaqAS0+SCuKDwqFVmrXeyYktg+CFnywa8mcGxGxSGufqhQVqaK0Dw0UsRUDtqWCfwiNPxQFweJTwh6ZZVbWuPfuzN67dw1kYGHZnJ/vm3PmnDMTwjJftMzxY4XAoCNYegRqtdp1IyMj96jqvQDc51pP8gsA54jonLX257KIl0ogSZLtRPQKgNvyAKrqvjRND5RBojQCzPwRgIc9qCsAzgO4AOAvAKsArAdwF4AbvcxlItpqrb1YhEgpBJj5ewC3eyAHRWQqCxQzWwDc+ruIFMJQSNmBMMa8rqq73fdQMMaYtar6nSfxrog83msUChEwxmxR1VPe+ZSIHAwFMjExsbXRaJxw8kQ0bq09GarbLleUwE5VfRPAH6o6lqapy/3gxcwO9AMAosiXSaCuqlOq+l6aptuCkXtBY8xrqrpHVd9J0/SJWP1m9HpRaukkSfIxET0EYLeIvBFryxjTiuC8iNwSq1+YgDHGRWD70NDQ+PT09LexAJj5fgCnYwrAUh+FIhALeKn8QAl4501MIjLbCxlv40Wv+4KIfBZrJzcC3sHLAO4AcH2s8YLy80R01lr7WJ6dTALGmB2q+lZBEGWo/y4iN2QZyiTAzGcAbAQw22g0JmdmZubKQBNqY0mjO2Ct3ddJN4/An34U3txrjoeCzZJj5pcAuDNyQkQeiSWgRcpbUfBOv61KzYrI5hUCZexqjI2BRqBWq908PDy8RlXdheZK7KA3sBRKkmQ9Eb0K4MH23Sai491qek6nruYMMPPzANrvupf8/fgaD+43EVkdmkaVplCSJONE9KkH514dnhOR9ycnJ1ctLi4+20YsczcHGgFmdhebnQB+EpE1HcDcCuBH9zsRPWqt/aBbJCqNADO7O+5aAHtFpN4JHDN/CMA1pP0i4ppU7qqaQLPxAcjs3G2dNSiNfCWbV1WbpulEXxsZM/+LADM/DeApAEdF5G3n3BjzpareHRoBX0pvEpFfs0KVNwsVGiXadruZLsw8BuDrmDPQLcWatrKEWjsa+tbT4dC2BrH9qvo5EbkHrTEimrPWbggBFyJTBQE3lt/XAkNEu6y1h0LAhchUQaCF4wcimgopnyHA/9mQfqWQf6m+U1WvurQZHR2dq9frV2PAhcj2LQIhzsuQ+V8TcGPIwsLCM0T0i4gc62sfKGM3O1Sy1sNXNdNo2SSKjhLfAFgX0zX7QMA9O7ooHBKRXbEpdASAGwfc9HhcVZtdtMK1yYN3LneIyOEoAk6Ymc/6/zRWiPs/rnIn166Pu8z8JIAtANw8X+X6CsBJEfkkz2lXAlUi7sXXCoFedq1MnWUfgb8BcofwQAQh6DkAAAAASUVORK5CYII=",class:"icon-pwd",mode:""})])),_:1})])),_:1})])),_:1}),r(n,{class:"mt-40 save-btn btn primary flex flex-center radius-12",onClick:S},{default:c((()=>[A(" 保存资料 ")])),_:1})])),_:1})}}},[["__scopeId","data-v-b6ae5052"]]);export{E as default};
