import{r as s,e,o as a,c as t,w as l,i as o,a as n,b as c,f as u,g as A,t as r,F as i,s as m,n as g,h as p,j as f,d}from"./index-aea97389.js";import{o as x}from"./uni-app.es.eb796e50.js";import{q as C,r as v,t as k}from"./index.fa80ff81.js";import{_ as b}from"./_plugin-vue_export-helper.83a1fa4b.js";const h=b({__name:"index",setup(b){const h=s([]),S=s([]);x((()=>{C().then((s=>{let e=v(s.data,4);h.push(...e)}))}));const Q=e("");function w(){if(!Q.value)return k("请输入问题");m("tmpContent",Q.value),g({url:"/pages/issureTmp/issureTmp"})}function B(){Q.value=""}e(!1);const R=()=>{h.length=0,S.length=0,C().then((s=>{let e=v(s.data,4);h.push(...e)}))};return(s,e)=>{const x=o,C=p,v=f,k=d;return a(),t(x,{class:"content pad"},{default:l((()=>[n(x,{class:"pt-20"},{default:l((()=>[c(" 📝 直接提问 ")])),_:1}),n(x,{class:"input-box mt-16 pad-16"},{default:l((()=>[n(C,{rows:4,class:"input-text-area font-26",placeholder:"请输入问题",modelValue:Q.value,"onUpdate:modelValue":e[0]||(e[0]=s=>Q.value=s)},null,8,["modelValue"]),n(x,{class:"sumbit-box flex-row flex-end mt-10"},{default:l((()=>[n(v,{class:"btn",onClick:B},{default:l((()=>[c("清空")])),_:1}),n(v,{class:"btn primary ml-20",onClick:w},{default:l((()=>[c("提交问题")])),_:1})])),_:1})])),_:1}),n(x,{class:"flex space-between mt-30"},{default:l((()=>[n(x,{class:"left"},{default:l((()=>[c(" 🔥 热门提问 ")])),_:1}),n(x,{class:"flex-row flex-align c-9",onClick:R},{default:l((()=>[c(" 换一换"),n(k,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA65JREFUWEfFl01oHVUUx///mQRCSZBi7bqoWHQl+KS0jcncmVAV7EqtH4GagjRFoeCmCxWsYJCCuPCr0FWoH9QPBLGKksk9Q7VJFxG7sPYJunDdjfiqi8jcI/f1TRjzvpPXeGE2c+855zd37jn3f4gNjoWFhVtGRkZuXV1d3TE0NFSrVqu/zs7O/tOvO/ZqYK29D8B+kvsAHACwvWxLctU59xPJBQDnjDGXe/HdFcAHDoLgqKoe9Q5J/g3gYp7nS+UAYRh6sP2quq3x/jPn3OkkSWwnkI4A1to3Sb7QcPApgLNjY2O2Uql4iKaxsrKyrVarxQAOA3i8seDU8PDw3Pj4eK1sICKRMSZrC5Bl2ZKq7vXbmef5W1NTU8u9bGmxJk3TvWEYengPcjkMw+mJiYmf/fzi4uLJIAheAWBaAoiINrb7vSiKnu8n8Pq1IvJJA+JKGIaHPERHgCzLPlTVp1X1kTiOv9pM8MK2FPAKgIecc8+23AEReQ3ASwCOGGPmBxG8BcQbzrm/mgCstT7Fvgcwb4w5MsjghS8R+ZLkgTzPX28CEJFzAJ7I83xfvweuV1gReQyAzya/uzNrh9Ba+yDJb/ykMeZQrw43sk5EvgMw3rC9kQXW2jmSLwI4aIw5vxHH621KB6+TuxsAInIBQAXATmPM9UEA+Aqqqgc7+UqS5GQBoCQvRFE0OYjg/figiOwAcM0596on6sd4EGtprd1Nsvp/AtTzfysBRGSXc26mfgbSNL09DMPfthIgy7JTqnpirQ6IyHWSS1EUeaFx04e19guSE8aY7UUWrJC8e3R09LZ2d/0gqUSkCmDZl/wCoLiEBlaI2gFba/eQvETycBRF79cB0jS9KwxDr+HOb0Ep/gDAtHNuV5Ikv68JEhE5DeDYzbyMsix7WFW/VtWzcRw/Uxc9pfv6Dl8N/WOMeWqQ/7x0HV8CsCcIgmRycrIuVv8jyay1z5F8l+Smpdj6DxCR+taT/DyKokeL+SZNWGi4QUoya21CMgVw1RhzTxmunSgthOSmpZmIHAPgzxeMaRbBbWV5Sc3Oq+o7cRz/0M+5aHRSx326kfwoiqLpVvbdGpMTJH2NGCZ5xjl3phtIlmW+l5gpOikAc8aYl9vBd23Nsix7QFWPA/B6zo9fVNU/P5adBkFQIXm/qu5svP9YVd+O4/hip53rClBKoXsBPOkbU5K7Sz1gfYmq/kly2Tnnq9xyHMff9vLLegZokVZ3BkHgv9aLmWvGmD96Cbh+zb/X1KWVbv3whwAAAABJRU5ErkJggg==",class:"icon-refresh",mode:""})])),_:1})])),_:1}),n(x,{class:"list-content mt-16"},{default:l((()=>[(a(!0),u(i,null,A(h,(s=>(a(),t(x,{class:"item text-line1 bg-gray",onClick:e=>(s=>{console.log("item.hotQs: ",s.hotQs),m("tmpContent",s.hotQs),g({url:"/pages/issureTmp/issureTmp"})})(s),key:s.id},{default:l((()=>[c(r(s.hotQs),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-8d075e42"]]);export{h as default};