import{o as a,c as s,w as t,i as e,f as l,g as o,a as n,b as c,t as d,u as r,z as f,A as i,F as u,B as p}from"./index-10f7d50b.js";import{c as g,b as m,d as _}from"./index.deb588f5.js";import{_ as b}from"./_plugin-vue_export-helper.022b36be.js";const x=b({data:()=>({dataArray:[]}),methods:{copyContentBtn(a){g(a)},toggleFlag(a){a.flag=!a.flag}},onReady(){m(),_().then((a=>{a.data.map((a=>{a.flag=!1})),this.dataArray.push(...a.data),console.log(this.dataArray)}))}},[["render",function(g,m,_,b,x,y){const h=e,k=p;return a(),s(h,{class:"pad page page-top"},{default:t((()=>[(a(!0),l(u,null,o(x.dataArray,(e=>(a(),s(h,{class:"issure-item bg-white radius-20 px-20 py-20 bg-white",key:e},{default:t((()=>[n(h,{class:"issure-title"},{default:t((()=>[c(" 问："+d(e.question),1)])),_:2},1024),n(h,{class:"content-box"},{default:t((()=>[n(h,{class:r(["content-info",{lock:!e.flag&&e.answer.length>150}])},{default:t((()=>[n(k,{class:"c-6 font-24"},{default:t((()=>[c(d(e.answer),1)])),_:2},1024)])),_:2},1032,["class"]),n(h,{class:"mask-box"},{default:t((()=>[f(n(h,{class:"mask-shadow"},null,512),[[i,!e.flag]]),n(h,{class:"mask-title",onClick:a=>y.toggleFlag(e)},{default:t((()=>[c(d(e.flag?"收起全文":"展开阅读全文"),1)])),_:2},1032,["onClick"])])),_:2},1024),n(h,{class:"tips-box"},{default:t((()=>[c(" AI智能回答时间："+d(e.createTime),1)])),_:2},1024),n(h,{class:"sumbit-box mt-20 flex-end flex-row"},{default:t((()=>[n(h,{class:"btn copy-btn primary",onClick:a=>y.copyContentBtn(e.answer)},{default:t((()=>[c(" 一键复制 ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})}],["__scopeId","data-v-00933ff4"]]);export{x as default};
