import{b$ as U,u as j,o as r,c as n,i as s,a as m,h as u,bb as E,f as k,g as b,r as C,F as _,e as x,t as $,an as D,B as G,s as H,m as V,v as f,aF as S,a6 as O,ai as P,M as z,Z as R,a8 as Z,z as B,G as A}from"./index-594c7030.js";import{_ as J}from"./BaseLabel-745dbdc0.js";import{s as K}from"./textarea.esm-f1579964.js";import"./dialog.esm-ded1cc7f.js";import"./overlaypanel.esm-becc59f6.js";/* empty css                                                         */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang-0df6d61a.js";import"./axios.config-d0de0a6e.js";import"./dayjs.min-69b27e0d.js";import"./index-e5311b46.js";/* empty css                                                                       */import"./inputtext.esm-633aecb1.js";/* empty css                                                  */import{u as Q}from"./common-b4d0f4d2.js";import"./count.store-c823a813.js";import"./review.store-2aa0d11b.js";import"./avatar.esm-1b60f466.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-da1d25d9.js";import"./common.store-a9e30135.js";import"./formatDate-b1a23f8b.js";import"./radiobutton.esm-ecda08ff.js";import"./checkbox.esm-94343426.js";import{_ as W}from"./BaseDialog-d983be5a.js";import{_ as X}from"./BaseRadio-d4ec0202.js";import{_ as Y}from"./BaseInput-bc1b3729.js";import{r as ee}from"./index-88543960.js";const te={class:"app-input"},oe={class:"relative"},re={class:"flex items-center gap-3 absolute top-[10px] right-[10px]"},ne={key:0,class:"space-y-1 mt-1"},ie={class:"block text-sm font-medium text-red-500"},We={__name:"BaseTextarea",props:{modelValue:{type:[String]},disabled:{type:Boolean},label:{type:String,default:null},placeholder:{type:String,default:"enter-content"},rows:{type:[Number,String],default:5},required:{type:Boolean},loading:{type:Boolean},rootClass:{type:String},error:{type:Object,default:()=>({$error:!1,$errors:[]})},setFromTemplate:{type:Boolean},maxLength:{type:[Number]}},setup(o){const t=o,e=U(t,"modelValue"),{t:l}=j();return(c,a)=>{const h=J,v=D;return r(),n("div",te,[s(h,{label:t.label,required:t.required},null,8,["label","required"]),m("div",oe,[s(u(K),{modelValue:u(e),"onUpdate:modelValue":a[0]||(a[0]=d=>E(e)?e.value=d:null),disabled:t.disabled,rows:t.rows,maxlength:t.maxLength,cols:"30",placeholder:u(l)(t.placeholder),"auto-resize":"",pt:{root:{class:["flex w-full text-greyscale-900 rounded-xl bg-greyscale-50 text-sm border-greyscale-50 focus:border-primary-500 placeholder:text-sm placeholder:font-regular placeholder:text-greyscale-400",t.rootClass,{"p-invalid !shadow-none":t.error.$error}]}}},null,8,["modelValue","disabled","rows","maxlength","placeholder","pt"]),m("div",re,[t.loading?(r(),k(v,{key:0,"root-classes":"!w-6 !h-6"})):b("",!0),C(c.$slots,"append")])]),t.error.$errors.length?(r(),n("div",ne,[(r(!0),n(_,null,x(t.error.$errors,d=>(r(),n("div",{key:d.$uid},[m("span",ie,$(d.$message),1)]))),128))])):b("",!0),t.setFromTemplate?(r(),k(u(xe),{key:1,"onEmit:selected":a[1]||(a[1]=d=>e.value=d)})):b("",!0)])}}};var le=`
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
`,ae={root:function(t){var e=t.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},se={root:function(t){var e=t.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},de=G.extend({name:"divider",css:le,classes:se,inlineStyles:ae}),pe={name:"BaseDivider",extends:H,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:de,provide:function(){return{$parentInstance:this}}},ce={name:"Divider",extends:pe},ue=["aria-orientation"];function me(o,t,e,l,c,a){return r(),n("div",V({class:o.cx("root"),style:o.sx("root"),role:"separator","aria-orientation":o.layout},o.ptm("root"),{"data-pc-name":"divider"}),[o.$slots.default?(r(),n("div",V({key:0,class:o.cx("content")},o.ptm("content")),[C(o.$slots,"default")],16)):b("",!0)],16,ue)}ce.render=me;const ve={class:"short-description-modal mt-3"},fe={class:"flex flex-wrap items-center gap-1 max-h-[140px] overflow-hidden"},he=["onClick"],be={class:"my-3"},ye={key:0,class:"h-[200px]"},ge={class:"flex items-center flex-1 gap-1 border-b border-b-greyscale-200"},_e=["for"],xe={__name:"ShortDescription",emits:["emit:selected"],setup(o,{emit:t}){const e=f(!1),l=f(null),c=f(""),a=f(!1),h=f([]),v=Q(),d=ee(l,750);S(()=>l.value,()=>{a.value=!0}),S(d,async()=>{await v.actionShortDescriptionList({search:l.value}),setTimeout(()=>{a.value=!1},250)});const I=()=>{t("emit:selected",c.value),w()},w=()=>{e.value=!1,setTimeout(()=>{l.value="",c.value=""},250)};return O(()=>{h.value=v.shortDescriptionList}),($e,p)=>{const y=A,L=Y,N=D,T=X,F=W,q=P("tooltip");return r(),n("div",ve,[m("div",fe,[s(y,{"border-color":"border-transparent",label:"Поиск по названию","icon-left":u(z),"icon-width":"!w-4","icon-height":"!h-4",size:"small",type:"button",rounded:"",shadow:"",onClick:p[0]||(p[0]=i=>e.value=!0)},null,8,["icon-left"]),(r(!0),n(_,null,x(h.value,i=>R((r(),n("div",{class:"max-w-[225px] truncate bg-greyscale-50 hover:bg-primary-500 transition-colors border border-greyscale-200 text-greyscale-500 hover:text-white text-xs rounded-[6px] py-[7px] px-2 cursor-pointer",onClick:g=>t("emit:selected",i.description)},[Z($(i.description),1)],8,he)),[[q,{value:`<h4 class='text-xs text-white -my-1 text-center line-clamp-4'>${i.description}</h4>`,escape:!0,autoHide:!1},void 0,{top:!0}]])),256))]),s(F,{modelValue:e.value,"onUpdate:modelValue":p[3]||(p[3]=i=>e.value=i),"max-width":"max-w-[672px]",label:"Cодержание"},{content:B(()=>[s(L,{modelValue:l.value,"onUpdate:modelValue":p[1]||(p[1]=i=>l.value=i),"icon-left":u(z),placeholder:"Поиск содержание",class:"flex p-input-icon-left p-input-icon-right","input-class":"border-transparent !focus:outline-none focus:ring-0 focus:border-inherit focus-visible:border-inherit !pl-10","icon-left-class":"!mt-[-10px]"},null,8,["modelValue","icon-left"]),m("div",be,[a.value?(r(),n("div",ye,[s(N)])):(r(!0),n(_,{key:1},x(u(v).shortDescriptionList,(i,g)=>(r(),n("div",ge,[s(T,{modelValue:c.value,"onUpdate:modelValue":p[2]||(p[2]=M=>c.value=M),"input-id":`short-description-item-${g}`,name:"short-description-item",value:i.description},null,8,["modelValue","input-id","value"]),m("label",{for:`short-description-item-${g}`,class:"flex-1 text-sm font-medium text-greyscale-900 cursor-pointer py-[14px]"},$(i.description),9,_e)]))),256))])]),footer:B(()=>[s(y,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:w}),s(y,{label:"Выбрать",rounded:"",shadow:"",type:"button",onClick:I})]),_:1},8,["modelValue"])])}}};export{We as _,ce as s};
