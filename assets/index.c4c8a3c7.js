import{d as c,c as f,u as g,R as p,o as l,a as m,b as h,e as a,t as b,f as x,g as _,h as y,i as w}from"./vendor.cff1c43a.js";const v=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};v();const k=c({setup(o){return(s,i)=>(l(),f(g(p)))}});var d=(o,s)=>{const i=o.__vccOpts||o;for(const[r,e]of s)i[r]=e;return i};const D={};function $(o,s){return l(),m("div",null,"aa")}var L=d(D,[["render",$]]),N="/static/img/pfp_500px.png",O="/static/img/gabu-ref-sheet-2022.jpg";const j=c({components:{Links:L},computed:{age(){return h(new Date,new Date(1991,12,11))}}}),A={class:"text-slate-900 font-light tracking-wide"},B={class:"flex grow flex-col items-center justify-center p-5"},R={class:"container max-w-screen-lg p-10 rounded-2xl bg-gradient-to-b from-indigo-50 to-indigo-200 text-center"},S=a("img",{class:"mx-auto rounded-xl max-w-[300px] mb-4 border-slate-100",src:N},null,-1),V=a("h1",{class:"text-6xl text-indigo-600 mb-2"},"hi!! i'm gabu!!",-1),C={class:"text-2xl mb-3"},E=x('<p class="mb-16">social links \u2193\u2193\u2193 after my cool ref sheet :3</p><a href="/static/img/gabu-ref-sheet-2022.jpg"><img class="mx-auto mb-2 rounded-lg border-2 border-slate-100" src="'+O+'"></a><p class="text-xl mb-16"> ref sheet art by <a class="text-indigo-600" href="https://twitter.com/DDen009">@DDen009</a></p><p class="text-2xl mb-8"> you can find me on these websites </p><ul class="flex flex-col justify-center max-w-xl mx-auto text-xl"><a href="https://cohost.org/gabu"><li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">cohost!!! <br><small>(my new home!)</small></li></a><a href="https://chitter.xyz/@gabu"><li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">mastodon! <br><small>(my other new home!)</small></li></a><a href="https://twitch.tv/gabubarks"><li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">twitch! <br><small>(I STREAM!!! come watch me sometime!)</small></li></a><small class="mb-2">also there&#39;s these sites i guess</small><a href="https://twitter.com/gabubarks"><li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600 line-through">twitter <br><small>(leaving!! bye!!!!)</small></li></a><a href="https://www.furaffinity.net/user/wildgabu/"><li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">furaffinity</li></a><a href="https://toyhou.se/gabubarks"><li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">toyhouse</li></a><a href="https://www.tumblr.com/gabubarks"><li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">tumblr</li></a><a href="https://www.instagram.com/gabubarks/"><li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">instagram</li></a><a href="https://github.com/gabubarks"><li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">github</li></a></ul>',5);function I(o,s,i,r,e,t){return l(),m("main",A,[a("div",B,[a("div",R,[S,V,a("p",C,b(o.age)+" \u22C5 he/him \u22C5 samoyed taur furry ",1),E])])])}var H=d(j,[["render",I]]);const M=_({history:y("/"),routes:[{path:"/",name:"home",component:H}]});const u=w(k);u.use(M);u.mount("#app");
