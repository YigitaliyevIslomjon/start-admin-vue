import{bZ as U,u as j,o as r,c as n,i as s,a as m,h as u,ba as E,f as k,g as b,r as C,F as _,e as x,t as $,an as D,B as Z,s as G,m as V,v as f,aE as S,a6 as H,ai as O,M as z,Z as P,a8 as R,z as B,G as A}from"./index-3b56d048.js";import{_ as J}from"./BaseLabel-2313b4ec.js";import{s as K}from"./textarea.esm-2810f284.js";import"./dialog.esm-e702c462.js";import"./overlaypanel.esm-47940be2.js";/* empty css                                                         */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang-5c2dcda0.js";import"./axios.config-e7cce331.js";import"./dayjs.min-763b998a.js";import"./index-6290cfdd.js";/* empty css                                                                       */import"./inputtext.esm-e58c6664.js";/* empty css                                                  */import{u as Q}from"./common-27be701f.js";import"./count.store-3c543820.js";import"./review.store-42bf1df1.js";import"./avatar.esm-e38054e7.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-494eb5d7.js";import"./common.store-8b8d4855.js";import"./formatDate-4ae27d1f.js";import"./radiobutton.esm-f8d59ab8.js";import"./checkbox.esm-3711d584.js";import{_ as W}from"./BaseDialog-1d428e39.js";import{_ as X}from"./BaseRadio-34cc8648.js";import{_ as Y}from"./BaseInput-2899e372.js";import{r as ee}from"./index-40988580.js";const te={class:"app-input"},oe={class:"relative"},re={class:"flex items-center gap-3 absolute top-[10px] right-[10px]"},ne={key:0,class:"space-y-1 mt-1"},ie={class:"block text-sm font-medium text-red-500"},We={__name:"BaseTextarea",props:{modelValue:{type:[String]},disabled:{type:Boolean},label:{type:String,default:null},placeholder:{type:String,default:"enter-content"},rows:{type:[Number,String],default:5},required:{type:Boolean},loading:{type:Boolean},rootClass:{type:String},error:{type:Object,default:()=>({$error:!1,$errors:[]})},setFromTemplate:{type:Boolean},maxLength:{type:[Number]}},setup(o){const t=o,e=U(t,"modelValue"),{t:l}=j();return(c,a)=>{const h=J,v=D;return r(),n("div",te,[s(h,{label:t.label,required:t.required},null,8,["label","required"]),m("div",oe,[s(u(K),{modelValue:u(e),"onUpdate:modelValue":a[0]||(a[0]=d=>E(e)?e.value=d:null),disabled:t.disabled,rows:t.rows,maxlength:t.maxLength,cols:"30",placeholder:u(l)(t.placeholder),"auto-resize":"",pt:{root:{class:["flex w-full text-greyscale-900 rounded-xl bg-greyscale-50 text-sm border-greyscale-50 focus:border-primary-500 placeholder:text-sm placeholder:font-regular placeholder:text-greyscale-400",t.rootClass,{"p-invalid !shadow-none":t.error.$error}]}}},null,8,["modelValue","disabled","rows","maxlength","placeholder","pt"]),m("div",re,[t.loading?(r(),k(v,{key:0,"root-classes":"!w-6 !h-6"})):b("",!0),C(c.$slots,"append")])]),t.error.$errors.length?(r(),n("div",ne,[(r(!0),n(_,null,x(t.error.$errors,d=>(r(),n("div",{key:d.$uid},[m("span",ie,$(d.$message),1)]))),128))])):b("",!0),t.setFromTemplate?(r(),k(u(xe),{key:1,"onEmit:selected":a[1]||(a[1]=d=>e.value=d)})):b("",!0)])}}};var le=`
@layer primevue {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: '';
    }

    .p-divider-content {
        z-index: 1;
    }

    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: '';
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-left-style: dotted;
    }
}
`,ae={root:function(t){var e=t.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},se={root:function(t){var e=t.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},de=Z.extend({name:"divider",css:le,classes:se,inlineStyles:ae}),pe={name:"BaseDivider",extends:G,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:de,provide:function(){return{$parentInstance:this}}},ce={name:"Divider",extends:pe},ue=["aria-orientation"];function me(o,t,e,l,c,a){return r(),n("div",V({class:o.cx("root"),style:o.sx("root"),role:"separator","aria-orientation":o.layout},o.ptm("root"),{"data-pc-name":"divider"}),[o.$slots.default?(r(),n("div",V({key:0,class:o.cx("content")},o.ptm("content")),[C(o.$slots,"default")],16)):b("",!0)],16,ue)}ce.render=me;const ve={class:"short-description-modal mt-3"},fe={class:"flex flex-wrap items-center gap-1 max-h-[140px] overflow-hidden"},he=["onClick"],be={class:"my-3"},ye={key:0,class:"h-[200px]"},ge={class:"flex items-center flex-1 gap-1 border-b border-b-greyscale-200"},_e=["for"],xe={__name:"ShortDescription",emits:["emit:selected"],setup(o,{emit:t}){const e=f(!1),l=f(null),c=f(""),a=f(!1),h=f([]),v=Q(),d=ee(l,750);S(()=>l.value,()=>{a.value=!0}),S(d,async()=>{await v.actionShortDescriptionList({search:l.value}),setTimeout(()=>{a.value=!1},250)});const I=()=>{t("emit:selected",c.value),w()},w=()=>{e.value=!1,setTimeout(()=>{l.value="",c.value=""},250)};return H(()=>{h.value=v.shortDescriptionList}),($e,p)=>{const y=A,L=Y,N=D,T=X,q=W,F=O("tooltip");return r(),n("div",ve,[m("div",fe,[s(y,{"border-color":"border-transparent",label:"Поиск по названию","icon-left":u(z),"icon-width":"!w-4","icon-height":"!h-4",size:"small",type:"button",rounded:"",shadow:"",onClick:p[0]||(p[0]=i=>e.value=!0)},null,8,["icon-left"]),(r(!0),n(_,null,x(h.value,i=>P((r(),n("div",{class:"max-w-[225px] truncate bg-greyscale-50 hover:bg-primary-500 transition-colors border border-greyscale-200 text-greyscale-500 hover:text-white text-xs rounded-[6px] py-[7px] px-2 cursor-pointer",onClick:g=>t("emit:selected",i.description)},[R($(i.description),1)],8,he)),[[F,{value:`<h4 class='text-xs text-white -my-1 text-center line-clamp-4'>${i.description}</h4>`,escape:!0,autoHide:!1},void 0,{top:!0}]])),256))]),s(q,{modelValue:e.value,"onUpdate:modelValue":p[3]||(p[3]=i=>e.value=i),"max-width":"max-w-[672px]",label:"Cодержание"},{content:B(()=>[s(L,{modelValue:l.value,"onUpdate:modelValue":p[1]||(p[1]=i=>l.value=i),"icon-left":u(z),placeholder:"Поиск содержание",class:"flex p-input-icon-left p-input-icon-right","input-class":"border-transparent !focus:outline-none focus:ring-0 focus:border-inherit focus-visible:border-inherit !pl-10","icon-left-class":"!mt-[-10px]"},null,8,["modelValue","icon-left"]),m("div",be,[a.value?(r(),n("div",ye,[s(N)])):(r(!0),n(_,{key:1},x(u(v).shortDescriptionList,(i,g)=>(r(),n("div",ge,[s(T,{modelValue:c.value,"onUpdate:modelValue":p[2]||(p[2]=M=>c.value=M),"input-id":`short-description-item-${g}`,name:"short-description-item",value:i.description},null,8,["modelValue","input-id","value"]),m("label",{for:`short-description-item-${g}`,class:"flex-1 text-sm font-medium text-greyscale-900 cursor-pointer py-[14px]"},$(i.description),9,_e)]))),256))])]),footer:B(()=>[s(y,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:w}),s(y,{label:"Выбрать",rounded:"",shadow:"",type:"button",onClick:I})]),_:1},8,["modelValue"])])}}};export{We as _,ce as s};
