import{b$ as M,u as U,o as r,c as n,i as d,a as m,h as u,bc as j,f as V,g,r as D,F as $,e as w,t as k,an as N,B as G,s as H,m as S,v as f,aF as z,a6 as O,ai as P,M as B,Z as R,a8 as Z,z as C,G as A}from"./index-0b48b1b7.js";import{_ as J}from"./BaseLabel-77b4d60c.js";import{s as K}from"./textarea.esm-d6b233c1.js";import"./dialog.esm-b02cc6c0.js";import"./overlaypanel.esm-ede42fb6.js";/* empty css                                                         */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang-8ff23b4b.js";import"./axios.config-072a3da1.js";import"./dayjs.min-5efef3b4.js";import"./index-45265774.js";/* empty css                                                                       */import"./inputtext.esm-1b20ee74.js";/* empty css                                                  */import{u as Q}from"./common-bb5cd2ab.js";import"./count.store-672d406b.js";import"./review.store-f682039b.js";import"./avatar.esm-b4f3cc9a.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-79904b81.js";import"./common.store-c5ab7191.js";import"./formatDate-d7f6ca26.js";import"./radiobutton.esm-52fdc118.js";import"./checkbox.esm-fda953c1.js";import{_ as W}from"./BaseDialog-01250f4c.js";import{_ as X}from"./BaseRadio-953229f9.js";import{_ as Y}from"./BaseInput-80c0a46f.js";import{r as ee}from"./index-e3f91807.js";const te={class:"app-input"},oe={class:"relative"},re={class:"flex items-center gap-3 absolute top-[10px] right-[10px]"},ne={key:0,class:"space-y-1 mt-1"},ie={class:"block text-sm font-medium text-red-500"},We={__name:"BaseTextarea",props:{modelValue:{type:[String]},disabled:{type:Boolean},label:{type:String,default:null},placeholder:{type:String,default:"enter-content"},rows:{type:[Number,String],default:5},required:{type:Boolean},loading:{type:Boolean},rootClass:{type:String},error:{type:Object,default:()=>({$error:!1,$errors:[]})},setFromTemplate:{type:Boolean},maxLength:{type:[Number]},showNestedError:{type:Boolean,default:!0}},setup(o){const t=o,e=M(t,"modelValue"),{t:l}=U();return(c,s)=>{var y,b;const h=J,v=N;return r(),n("div",te,[d(h,{label:t.label,required:t.required},null,8,["label","required"]),m("div",oe,[d(u(K),{modelValue:u(e),"onUpdate:modelValue":s[0]||(s[0]=a=>j(e)?e.value=a:null),disabled:t.disabled,rows:t.rows,maxlength:t.maxLength,cols:"30",placeholder:u(l)(t.placeholder),"auto-resize":"",pt:{root:{class:["flex w-full text-greyscale-900 rounded-xl bg-greyscale-50 text-sm border-greyscale-50 focus:border-primary-500 placeholder:text-sm placeholder:font-regular placeholder:text-greyscale-400",t.rootClass,{"p-invalid !shadow-none":t.error.$error&&t.showNestedError}]}}},null,8,["modelValue","disabled","rows","maxlength","placeholder","pt"]),m("div",re,[t.loading?(r(),V(v,{key:0,"root-classes":"!w-6 !h-6"})):g("",!0),D(c.$slots,"append")])]),(b=(y=t.error)==null?void 0:y.$errors)!=null&&b.length?(r(),n("div",ne,[(r(!0),n($,null,w(t.error.$errors,a=>(r(),n("div",{key:a.$uid},[m("span",ie,k(a.$message),1)]))),128))])):g("",!0),t.setFromTemplate?(r(),V(u(xe),{key:1,"onEmit:selected":s[1]||(s[1]=a=>e.value=a)})):g("",!0)])}}};var le=`
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
`,se={root:function(t){var e=t.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},ae={root:function(t){var e=t.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},de=G.extend({name:"divider",css:le,classes:ae,inlineStyles:se}),pe={name:"BaseDivider",extends:H,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:de,provide:function(){return{$parentInstance:this}}},ce={name:"Divider",extends:pe},ue=["aria-orientation"];function me(o,t,e,l,c,s){return r(),n("div",S({class:o.cx("root"),style:o.sx("root"),role:"separator","aria-orientation":o.layout},o.ptm("root"),{"data-pc-name":"divider"}),[o.$slots.default?(r(),n("div",S({key:0,class:o.cx("content")},o.ptm("content")),[D(o.$slots,"default")],16)):g("",!0)],16,ue)}ce.render=me;const ve={class:"short-description-modal mt-3"},fe={class:"flex flex-wrap items-center gap-1 max-h-[140px] overflow-hidden"},he=["onClick"],ye={class:"my-3"},be={key:0,class:"h-[200px]"},ge={class:"flex items-center flex-1 gap-1 border-b border-b-greyscale-200"},_e=["for"],xe={__name:"ShortDescription",emits:["emit:selected"],setup(o,{emit:t}){const e=f(!1),l=f(null),c=f(""),s=f(!1),h=f([]),v=Q(),y=ee(l,750);z(()=>l.value,()=>{s.value=!0}),z(y,async()=>{await v.actionShortDescriptionList({search:l.value}),setTimeout(()=>{s.value=!1},250)});const b=()=>{t("emit:selected",c.value),a()},a=()=>{e.value=!1,setTimeout(()=>{l.value="",c.value=""},250)};return O(()=>{h.value=v.shortDescriptionList}),($e,p)=>{const _=A,I=Y,L=N,T=X,F=W,q=P("tooltip");return r(),n("div",ve,[m("div",fe,[d(_,{"border-color":"border-transparent",label:"Поиск по названию","icon-left":u(B),"icon-width":"!w-4","icon-height":"!h-4",size:"small",type:"button",rounded:"",shadow:"",onClick:p[0]||(p[0]=i=>e.value=!0)},null,8,["icon-left"]),(r(!0),n($,null,w(h.value,i=>R((r(),n("div",{class:"max-w-[225px] truncate bg-greyscale-50 hover:bg-primary-500 transition-colors border border-greyscale-200 text-greyscale-500 hover:text-white text-xs rounded-[6px] py-[7px] px-2 cursor-pointer",onClick:x=>t("emit:selected",i.description)},[Z(k(i.description),1)],8,he)),[[q,{value:`<h4 class='text-xs text-white -my-1 text-center line-clamp-4'>${i.description}</h4>`,escape:!0,autoHide:!1},void 0,{top:!0}]])),256))]),d(F,{modelValue:e.value,"onUpdate:modelValue":p[3]||(p[3]=i=>e.value=i),"max-width":"max-w-[672px]",label:"Cодержание"},{content:C(()=>[d(I,{modelValue:l.value,"onUpdate:modelValue":p[1]||(p[1]=i=>l.value=i),"icon-left":u(B),placeholder:"Поиск содержание",class:"flex p-input-icon-left p-input-icon-right","input-class":"border-transparent !focus:outline-none focus:ring-0 focus:border-inherit focus-visible:border-inherit !pl-10","icon-left-class":"!mt-[-10px]"},null,8,["modelValue","icon-left"]),m("div",ye,[s.value?(r(),n("div",be,[d(L)])):(r(!0),n($,{key:1},w(u(v).shortDescriptionList,(i,x)=>(r(),n("div",ge,[d(T,{modelValue:c.value,"onUpdate:modelValue":p[2]||(p[2]=E=>c.value=E),"input-id":`short-description-item-${x}`,name:"short-description-item",value:i.description},null,8,["modelValue","input-id","value"]),m("label",{for:`short-description-item-${x}`,class:"flex-1 text-sm font-medium text-greyscale-900 cursor-pointer py-[14px]"},k(i.description),9,_e)]))),256))])]),footer:C(()=>[d(_,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:a}),d(_,{label:"Выбрать",rounded:"",shadow:"",type:"button",onClick:b})]),_:1},8,["modelValue"])])}}};export{We as _,ce as s};
