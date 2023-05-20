import{l as e,a as s,m as t,n as a,f as n,o,g as r,p as c,F as i,h as u,b as l,q as d,w as m,u as h,I as p,k as g,d as b,t as k}from"./index-34e23d97.js";import{e as x}from"./env.fe161e27.js";import{r as v,_ as f}from"./_plugin-vue_export-helper.15909a20.js";let y;function T(e){return v({url:"/user/logout",method:"GET",data:{username:e}})}const w=f({data:()=>({messageList:[],userInput:""}),onLoad(){const a=e("expireTime"),n=e("username");e("key"),a||s({url:"/pages/index/login"}),Date.now()>a&&(t("expireTime"),t("key"),t("username"),T({username:n}).then((()=>{s({url:"/pages/index/login"})})))},mounted(){const e=localStorage.getItem("messageList");e&&(this.messageList=JSON.parse(e)),this.$router.beforeEach(((e,s,t)=>{"Chat"===e.name&&this.connectWebSocket(),t()}))},beforeUnmount(){this.socket&&this.socket.close()},onShow(){const n=e("expireTime"),o=e("username"),r=e("key");var c;n||s({url:"/pages/index/login"}),Date.now()>n?(t("expireTime"),t("key"),t("username"),T({username:o}).then((()=>{s({url:"/pages/index/login"})}))):(c={username:o,key:r},v({url:"/user/checkUserKey",method:"POST",data:c})).then((e=>{e.code>=200?function(e){return new Promise(((s,t)=>{y&&y.close();const a=x.BASE_WS+e;y=new WebSocket(a),y.onopen=()=>{console.log("WebSocket 已连接"),s()},y.onmessage=e=>{console.log("收到消息：",e.data);const s={text:e.data,sender:"bot"};messageList=localStorage.getItem("messageList"),this.messageList.push(s)},y.onclose=()=>{console.log("WebSocket 断开连接")},y.onerror=()=>{t(new Error("WebSocket 连接错误"))}}))}(o).then((()=>{a({title:"建立会话成功",icon:"success",duration:500})})):(t("expireTime"),t("key"),t("username"),s({url:"/pages/index/login"}))}))},methods:{copyText(e){const s=document.createElement("textarea");s.value=e,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),a({title:"复制成功",icon:"none"})},connectWebSocket(){},sendMessage(){if(""!==this.userInput){this.messageList.push({text:this.userInput,sender:"user"});const e=this.messageList.map((e=>e.text)),s=this.userInput;this.sendChatMessage(e,s),this.userInput=""}},sendChatMessage(e,s){const t=this;var a;y.onmessage=e=>{console.log("收到消息：",e.data);const s={text:e.data,sender:"bot"};t.messageList.push(s),t.$nextTick((()=>{const e=t.$refs.chatWindow;e.scrollTop=e.scrollHeight}))},a=s,y&&y.readyState===WebSocket.OPEN&&y.send(a),this.$nextTick((()=>{const e=this.$refs.chatWindow;e.scrollTop=e.scrollHeight}))}},setup(){const e=n("chat");return{currentTab:e,switchTab:function(t){e.value=t,"chat"===t?s({url:"/pages/chat/chat"}):"user"===t&&s({url:"/pages/user/user"})}}}},[["render",function(e,s,t,a,n,x){const v=p,f=g;return o(),r("div",{class:"container"},[c("div",{class:"chat-window",ref:"chatWindow"},[(o(!0),r(i,null,u(n.messageList,((e,s)=>(o(),r("div",{class:h(["message",{"user-message":"user"===e.sender,"bot-message":"bot"===e.sender}]),key:"message"+s,ref_for:!0,ref:"message",onDblclick:s=>x.copyText(e.text)},["bot"===e.sender?(o(),r("span",{key:0,class:"sender-name"},"智能助手：")):(o(),r("span",{key:1,class:"sender-name"},"我：")),b(" "+k(e.text),1)],42,["onDblclick"])))),128))],512),c("div",{class:"input-box"},[l(v,{type:"text",class:"message-input",modelValue:n.userInput,"onUpdate:modelValue":s[0]||(s[0]=e=>n.userInput=e),onKeyup:d(x.sendMessage,["enter","native"]),placeholder:"输入你的消息"},null,8,["modelValue","onKeyup"]),l(f,{class:"send-button",onClick:x.sendMessage},{default:m((()=>[b("发送")])),_:1},8,["onClick"])]),c("div",{class:"nav-bar"},[c("div",{class:h(["nav-item",{active:"chat"===a.currentTab}]),onClick:s[1]||(s[1]=e=>a.switchTab("chat"))}," 聊天 ",2),c("div",{class:h(["nav-item",{active:"user"===a.currentTab}]),onClick:s[2]||(s[2]=e=>a.switchTab("user"))}," 我的 ",2)])])}],["__scopeId","data-v-29eae91c"]]);export{w as default};
