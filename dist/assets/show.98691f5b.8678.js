import{B as f,o as r,c as s,m as a,r as b,a3 as c,t as h,g as m,a as t,s as v,i as l,z as y,h as d,e7 as w,e6 as x,F as _,e as k,_ as B,f as S}from"./index.4eda51c6.7821.js";/* empty css                                                      */import"./common.9778b719.8678.js";import{_ as $}from"./Status.2854eece.8678.js";import"./dayjs.min.212098f7.8678.js";import"./axios.config.44922c21.8678.js";import"./businessTrip.store.5da7148e.8678.js";import"./user-permissions.store.9caf75dc.8678.js";import"./collect-requests.store.1ce65187.8678.js";import"./permissions.store.8fdb63b9.8678.js";import"./index.417f21b4.8678.js";import"./file.service.d2295d20.8678.js";var V=`
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
`,z={root:function(i){var n=i.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},container:"p-progressbar-indeterminate-container",value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label"},C=f.extend({name:"progressbar",css:V,classes:z}),N={name:"BaseProgressBar",extends:v,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:C,provide:function(){return{$parentInstance:this}}},g={name:"ProgressBar",extends:N,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},P=["aria-valuenow"];function D(e,i,n,p,u,o){return r(),s("div",a({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptm("root")),[o.determinate?(r(),s("div",a({key:0,class:e.cx("value"),style:o.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(r(),s("div",a({key:0,class:e.cx("label")},e.ptm("label")),[b(e.$slots,"default",{},function(){return[c(h(e.value+"%"),1)]})],16)):m("",!0)],16)):m("",!0),o.indeterminate?(r(),s("div",a({key:1,class:e.cx("container")},e.ptm("container")),[t("div",a({class:e.cx("value")},e.ptm("value")),null,16)],16)):m("",!0)],16,P)}g.render=D;const I={class:"bg-white shadow-button rounded-2xl"},j={class:"flex items-center gap-6 py-8 px-12"},F={class:"max-w-[1055px] w-full"},L={class:"flex items-center justify-end flex-1 gap-6"},W={class:"flex items-center gap-2.5"},E={class:"flex items-center gap-2.5"},T={class:"border-y border-y-greyscale-200 py-6 px-12"},q={class:"text-3xl"},A={__name:"ShowWrap",setup(e){return(i,n)=>{const p=B,u=g;return r(),s("div",I,[t("header",j,[t("div",F,[n[1]||(n[1]=t("h1",{class:"font-semibold text-2xl text-greyscale-900 mb-2"},"Тест на определение психологического состояния",-1)),l(d($),{border:"",circle:"",status:{id:13}},{default:y(()=>n[0]||(n[0]=[c(" Психологический тест ",-1)])),_:1,__:[0]})]),t("div",L,[t("div",null,[n[3]||(n[3]=t("h1",{class:"font-medium text-greyscale-400 mb-2"},"Завершение теста",-1)),t("div",W,[l(p,{icon:d(w),class:"!w-7 !h-7 text-info-500"},null,8,["icon"]),n[2]||(n[2]=t("h1",{class:"text-3xl font-medium text-greyscale-900"},"35%",-1))])]),n[6]||(n[6]=t("div",{class:"w-[1px] h-12 bg-greyscale-200"},null,-1)),t("div",null,[n[5]||(n[5]=t("h1",{class:"font-medium text-greyscale-400 mb-2"},"Оставшееся время",-1)),t("div",E,[l(p,{icon:d(x),class:"!w-7 !h-7 text-warning-500"},null,8,["icon"]),n[4]||(n[4]=t("h1",{class:"text-3xl font-medium text-greyscale-900"},"09:25",-1))])])])]),t("div",T,[l(u,{value:50,"show-value":!1,pt:{root:{class:"h-2"},value:{class:"bg-success-500"}}})]),t("main",null,[t("div",null,[(r(),s(_,null,k(20,o=>t("h1",q,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga?")),64))])])])}}},ee={__name:"show",setup(e){return(i,n)=>(r(),S(A))}};export{ee as default};
