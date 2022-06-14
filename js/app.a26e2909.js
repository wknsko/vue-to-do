(function(){"use strict";var e={417:function(e,t,n){var o=n(963),l=n(252);function i(e,t,n,o,i,a){const s=(0,l.up)("TheHead"),u=(0,l.up)("TheBody");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s),(0,l.Wm)(u)],64)}var a=n(577);const s={class:"card"},u=(0,l._)("h2",null,"Your Tasks",-1),r=(0,l._)("hr",null,null,-1),c={class:"list d-flex justify-content-between"},d=(0,l._)("strong",null,"Type: ",-1),p=(0,l._)("strong",null,"Deadline: ",-1),y=["onClick"];function v(e,t,n,o,i,v){const f=(0,l.up)("app-task-body");return(0,l.wg)(),(0,l.iD)("div",s,[u,(0,l._)("h5",null,"Active tasks: "+(0,a.zw)(o.active),1),r,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.notes,((e,n)=>((0,l.wg)(),(0,l.iD)("div",{key:n},[(0,l._)("h3",null,(0,a.zw)(e.title),1),(0,l._)("div",c,[(0,l._)("div",null,[d,(0,l._)("p",{class:(0,a.C_)(["type",e.type.toLowerCase()])},(0,a.zw)(e.type),3)]),(0,l._)("div",null,[p,(0,l._)("p",null,(0,a.zw)(e.date),1)])]),(0,l._)("button",{class:"btn btn-list",onClick:e=>o.click(n)},"Show",8,y),o.modal?((0,l.wg)(),(0,l.j4)(f,{key:0,selectedPost:o.thisPost,onClose:t[0]||(t[0]=e=>o.modal=!1)},null,8,["selectedPost"])):(0,l.kq)("",!0)])))),128))])}var f=n(262);const m=e=>((0,l.dD)("data-v-c4ddde94"),e=e(),(0,l.Cn)(),e),g={class:"modal-mask"},b={class:"modal-wrapper"},h={class:"modal-container"},w={key:0},_=m((()=>(0,l._)("option",{value:"",selected:"",disabled:"",hidden:""},"Change type of this task",-1))),k=["value"];function T(e,t,n,i,s,u){return(0,l.wg)(),(0,l.iD)("div",{id:"modal-template",onClick:t[3]||(t[3]=(0,o.iM)(((...t)=>e.close&&e.close(...t)),["self"]))},[(0,l._)("div",g,[(0,l._)("div",b,[(0,l._)("div",h,[(0,l._)("div",{onClick:t[0]||(t[0]=t=>e.$emit("close")),class:"close"}),(0,l._)("h4",null,(0,a.zw)(n.selectedPost.title),1),(0,l._)("div",{class:(0,a.C_)(["type",n.selectedPost.type.toLowerCase()])},(0,a.zw)(n.selectedPost.type),3),(0,l._)("p",null,(0,a.zw)(n.selectedPost.body),1),(0,l._)("button",{onClick:t[1]||(t[1]=(...e)=>i.changeType&&i.changeType(...e)),class:"btn btn-modal"},(0,a.zw)(i.change?"OK":"Change Type"),1),i.change?((0,l.wg)(),(0,l.iD)("form",w,[(0,l.wy)((0,l._)("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=e=>i.typeInput=e)},[_,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.types,(e=>((0,l.wg)(),(0,l.iD)("option",{value:e.id,key:e},(0,a.zw)(e.name),9,k)))),128))],512),[[o.bM,i.typeInput]])])):(0,l.kq)("",!0)])])])])}var C={props:{selectedPost:{type:Object}},setup(e){let t=(0,l.f3)("notes");const n=(0,l.f3)("types");let o=(0,l.f3)("active"),i=(0,f.iH)(!1),a=(0,f.BK)(e.selectedPost),s=(0,f.iH)("");function u(){this.change?(a.type.value=this.types.find((e=>e.id===s.value)).name,o.value=t.filter((e=>"Active"===e.type)).length):this.change=!0}return{notes:t,types:n,change:i,props:e,active:o,typeInput:s,changeType:u}}},O=n(744);const D=(0,O.Z)(C,[["render",T],["__scopeId","data-v-c4ddde94"]]);var P=D,S={setup(){let e=(0,l.f3)("notes"),t=(0,l.f3)("types"),n=(0,l.f3)("active"),o=(0,f.iH)(!1);const i=(0,f.iH)(!1);let a=(0,f.iH)({});function s(t){o.value=!0,a.value=e[t]}return(0,l.JJ)("active",n),{notes:e,types:t,active:n,click:s,modal:o,thisPost:a,change:i}},components:{AppTaskBody:P}};const H=(0,O.Z)(S,[["render",v]]);var q=H;const j=(0,l._)("h2",null,"Add to To do List",-1),A=(0,l._)("label",{for:"input-title"},"Add your title of the task",-1),z=(0,l._)("label",{for:"input-due-date"},"Deadline of the task",-1),I=(0,l._)("label",{for:"input-body"},"Add more info about the task",-1),x=(0,l._)("label",{for:"input-type"},"Type of the task",-1),J=(0,l._)("option",{value:"",disabled:"",hidden:""},"Change type of this task",-1),M=["value"],N=(0,l._)("button",{type:"submit",class:"btn btn-add"},"Send Task",-1);function Y(e,t,n,i,s,u){return(0,l.wg)(),(0,l.iD)("form",{onSubmit:t[4]||(t[4]=(0,o.iM)(((...e)=>i.submit&&i.submit(...e)),["prevent"])),class:"card pt-5"},[j,A,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.title=e),id:"input-title"},null,512),[[o.nr,i.title]]),z,(0,l.wy)((0,l._)("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=e=>i.date=e),id:"input-due-date"},null,512),[[o.nr,i.date]]),I,(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>i.body=e),id:"input-body"},null,512),[[o.nr,i.body]]),x,(0,l.wy)((0,l._)("select",{class:"form-select","onUpdate:modelValue":t[3]||(t[3]=e=>i.type=e),id:"type"},[J,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.types,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.id,value:e.name},(0,a.zw)(e.name),9,M)))),128))],512),[[o.bM,i.type]]),N],32)}var K={setup(){const e=(0,l.f3)("types");let t=(0,l.f3)("notes");const n=(0,f.iH)(""),o=(0,f.iH)(""),i=(0,f.iH)(""),a=(0,f.iH)("");let s=(0,l.f3)("active");function u(){console.group(),console.log("Title: "+n.value),console.log("Date: "+o.value),console.log("Info: "+i.value),console.log("Type: "+a.value),console.groupEnd(),t.unshift({title:n.value,date:o.value,body:i.value,type:a.value}),s.value=t.filter((e=>"Active"===e.type)).length,n.value=o.value=i.value=a.value="",localStorage.setItem("notes",JSON.stringify(t))}return(0,l.YP)(t,(()=>{localStorage.setItem("notes",JSON.stringify(t))})),{types:e,title:n,date:o,body:i,type:a,submit:u}}};const U=(0,O.Z)(K,[["render",Y]]);var V=U,B={setup(){let e=(0,l.f3)("notes"),t=(0,f.iH)(e.filter((e=>"Active"===e.type)).length);return(0,l.JJ)("active",t),{active:t,notes:e}},components:{TheBody:q,TheHead:V}};const L=(0,O.Z)(B,[["render",i]]);var Z=L;n(244);const W=[{title:"Deep Clean Apartment",date:"12.06.2022",body:"Reiciendis suscipit harum iusto sunt eaque fuga error veniam facilis culpa vero.",type:"Active"},{title:"Write resigntion letter",date:"20.04.2022",body:" Numquam dolor quibusdam dolore iste optio possimus repudiandae culpa tenetur nisi, obcaecati cumque qui molestiae labore illo eaque, ea quod voluptates ipsa.",type:"Cancelled"},{title:"Go play football",date:"05.09.2022",body:" Impedit eius autem, laboriosam aut neque amet nostrum consequatur! Odio, neque aut.",type:"Active"},{title:"Clean physical workspace",date:"29.06.2022",body:"Tempora ea, tenetur sit repellat exercitationem impedit ducimus dolorum reprehenderit iste fugit.",type:"Done"},{title:"Send flowers to mom",date:"01.07.2022",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, reprehenderit!",type:"Pending"}];window.localStorage.setItem("notes",JSON.stringify(W));let E=(0,f.qj)(JSON.parse(localStorage.getItem("notes")));const F=[{name:"Active",class:"active",id:"act"},{name:"Cancelled",class:"cancelled",id:"can"},{name:"Done",class:"done",id:"done"},{name:"Pending",class:"pending",id:"pend"}],G=(0,o.ri)(Z);G.provide("notes",E),G.provide("types",F),G.mount("#app")}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,l,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],l=e[c][1],i=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var r=l();void 0!==r&&(t=r)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,l,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,i,a=o[0],s=o[1],u=o[2],r=0;if(a.some((function(t){return 0!==e[t]}))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(u)var c=u(n)}for(t&&t(o);r<a.length;r++)i=a[r],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkvue_to_do"]=self["webpackChunkvue_to_do"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(417)}));o=n.O(o)})();
//# sourceMappingURL=app.a26e2909.js.map