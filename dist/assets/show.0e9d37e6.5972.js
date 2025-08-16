import{B as h,o as t,c as r,m as a,r as f,a3 as u,t as b,g as c,a as n,s as v,i as l,z as _,h as m,e9 as y,e8 as w,F as x,e as k,_ as B,f as S}from"./index.caa61809.58.js";/* empty css                                                      */import"./common.0ff45f14.5972.js";import{_ as $}from"./Status.e1b84db5.5972.js";import"./dayjs.min.ca90bfe6.5972.js";import"./axios.config.a9fa6ced.5972.js";import"./businessTrip.store.d375bc33.5972.js";import"./user-permissions.store.449d6abe.5972.js";import"./collect-requests.store.822cee92.5972.js";import"./permissions.store.188ed26e.5972.js";import"./index.7df3f42d.5972.js";import"./file.service.c7d3307e.5972.js";var V=`
@layer primevue {
    .p-progressbar {
        position: relative;
        overflow: hidden;
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        border: 0 none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-determinate .p-progressbar-value-animate {
        transition: width 1s ease-in-out;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        -webkit-animation-delay: 1.15s;
        animation-delay: 1.15s;
    }

    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }
    @keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }

    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
    }
    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            left: -200%;
            right: 100%;
        }
        60% {
            left: 107%;
            right: -8%;
        }
        100% {
            left: 107%;
            right: -8%;
        }
    }
}
`,z={root:function(i){var s=i.instance;return["p-progressbar p-component",{"p-progressbar-determinate":s.determinate,"p-progressbar-indeterminate":s.indeterminate}]},container:"p-progressbar-indeterminate-container",value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label"},C=h.extend({name:"progressbar",css:V,classes:z}),N={name:"BaseProgressBar",extends:v,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:C,provide:function(){return{$parentInstance:this}}},g={name:"ProgressBar",extends:N,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},P=["aria-valuenow"];function D(e,i,s,p,d,o){return t(),r("div",a({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptm("root")),[o.determinate?(t(),r("div",a({key:0,class:e.cx("value"),style:o.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(t(),r("div",a({key:0,class:e.cx("label")},e.ptm("label")),[f(e.$slots,"default",{},function(){return[u(b(e.value+"%"),1)]})],16)):c("",!0)],16)):c("",!0),o.indeterminate?(t(),r("div",a({key:1,class:e.cx("container")},e.ptm("container")),[n("div",a({class:e.cx("value")},e.ptm("value")),null,16)],16)):c("",!0)],16,P)}g.render=D;const I={class:"bg-white shadow-button rounded-2xl"},j={class:"flex items-center gap-6 py-8 px-12"},F={class:"max-w-[1055px] w-full"},L=n("h1",{class:"font-semibold text-2xl text-greyscale-900 mb-2"},"Тест на определение психологического состояния",-1),W={class:"flex items-center justify-end flex-1 gap-6"},E=n("h1",{class:"font-medium text-greyscale-400 mb-2"},"Завершение теста",-1),T={class:"flex items-center gap-2.5"},q=n("h1",{class:"text-3xl font-medium text-greyscale-900"},"35%",-1),A=n("div",{class:"w-[1px] h-12 bg-greyscale-200"},null,-1),G=n("h1",{class:"font-medium text-greyscale-400 mb-2"},"Оставшееся время",-1),H={class:"flex items-center gap-2.5"},J=n("h1",{class:"text-3xl font-medium text-greyscale-900"},"09:25",-1),K={class:"border-y border-y-greyscale-200 py-6 px-12"},M={class:"text-3xl"},O={__name:"ShowWrap",setup(e){return(i,s)=>{const p=B,d=g;return t(),r("div",I,[n("header",j,[n("div",F,[L,l(m($),{border:"",circle:"",status:{id:13}},{default:_(()=>[u(" Психологический тест ")]),_:1})]),n("div",W,[n("div",null,[E,n("div",T,[l(p,{icon:m(y),class:"!w-7 !h-7 text-info-500"},null,8,["icon"]),q])]),A,n("div",null,[G,n("div",H,[l(p,{icon:m(w),class:"!w-7 !h-7 text-warning-500"},null,8,["icon"]),J])])])]),n("div",K,[l(d,{value:50,"show-value":!1,pt:{root:{class:"h-2"},value:{class:"bg-success-500"}}})]),n("main",null,[n("div",null,[(t(),r(x,null,k(20,o=>n("h1",M,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga?")),64))])])])}}},ie={__name:"show",setup(e){return(i,s)=>(t(),S(O))}};export{ie as default};
