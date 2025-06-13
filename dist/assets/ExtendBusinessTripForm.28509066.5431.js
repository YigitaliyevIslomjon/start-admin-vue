import{_ as _e}from"./BaseRow.cf9f943b.5431.js";import{_ as Ae}from"./BaseInput.6e9ee7ec.5431.js";import{_ as fe}from"./BaseCol.e1f9c152.5431.js";import{v as Q,bb as rt,a1 as tt,o as w,c as T,i as o,z as d,h as e,b8 as et,d as te,du as ze,a as h,t as I,F as K,e as de,a3 as re,g as ae,f as W,B as Tt,dz as Lt,bj as Dt,n as Oe,r as yt,G as De,as as ke,cM as ee,cN as Z,ck as se,u as ne,b as pe,ao as me,be as Re,a5 as B,ac as we,a8 as Rt,cY as Je,dA as Mt,_ as ce,dB as Nt,dC as Pt,dD as Ot,dE as It,dF as At,$ as Bt,dG as jt,dH as zt,aX as wt,bt as Fe,c0 as Xe,dI as Ft,ds as st,E as Gt,cH as Wt,cR as Yt,aE as Ht}from"./index.9e5102a6.4623.js";import{c as V,r as C,u as oe}from"./index.dd93cff1.5431.js";import{_ as Xt,a as Kt}from"./BranchMultiSelect.f115fab2.5431.js";import{j as Qt,k as Jt,l as Zt,_ as xe,a as eo,h as to,g as oo,b as lo,c as no,d as ro,e as vt,i as ao,m as so,f as io}from"./BasePOA.787ecbaf.5431.js";import"./BaseTabMenu.8099aa73.5431.js";import"./dialog.esm.e844c8f0.5431.js";import"./tabpanel.esm.e7804ae1.5431.js";import"./FileSaver.min.9c4bc8a6.5431.js";import{X as _t,s as Te,V as H,Y as co,Z as Ge,_ as le,$ as Le,a0 as ft,a1 as it,a2 as He,O as nt}from"./index.079bb9e1.5431.js";import"./BaseTabView.959d9a08.5431.js";import"./FileTabs.782ee35b.5431.js";import{_ as X}from"./UserMultiSelect.31928db3.5431.js";import{c as uo,u as ie,w as $e,d as j}from"./axios.config.1a275c1b.5431.js";import{u as ye}from"./common.a960723b.5431.js";import{u as ue}from"./count.store.fe8c68fc.5431.js";import{u as ct,a as Ve,b as qe,c as Ue,d as po,f as kt}from"./index.store.36142d9f.5431.js";import{d as qt,e as Be,c as Me,f as be,B as Ze,g as Ke,h as Qe,i as mo,j as xt,M as dt,O as _o,T as fo,k as ut,l as $t,C as qo,P as go,m as bo}from"./index.3493ff30.5431.js";import{F as z,a as Se}from"./constants.50c90617.5431.js";import{_ as ot}from"./BaseDropdown.2d8be4db.5431.js";import{_ as We}from"./BaseCalendar.b592f39b.5431.js";import{_ as at}from"./BaseMultiSelect.be4ebc37.5431.js";import{f as ho,a as ge}from"./formatDate.4ce2e1df.5431.js";import{Q as gt}from"./qrcode.vue.esm.64ad141c.5431.js";import"./divider.esm.548274a6.5431.js";import"./dayjs.min.6b5d15de.5431.js";/* empty css                                                                                         */import{c as yo}from"./Dropdown.10c7ea1b.5431.js";import"./menu.esm.0232ff8b.5431.js";/* empty css                                                      */import"./avatar.esm.3d27419b.5431.js";/* empty css                                                      */import"./businessTrip.store.03abb213.5431.js";/* empty css                                                            */import"./accordiontab.esm.44613659.5431.js";import"./common.store.d50eb778.5431.js";import{_ as he}from"./WithRadio.ddda3be8.5431.js";import"./radiobutton.esm.7a5f5945.5431.js";import"./checkbox.esm.be93b1d2.5431.js";import"./index.es6.f9050ba3.5431.js";import{_ as Vt}from"./ShortDescription.f70ea03c.5431.js";import{_ as bt}from"./BaseBrickRadio.f7bcd26b.5431.js";import{_ as wo}from"./BaseLabel.d8eea409.5431.js";import{K as vo}from"./main.0fcdc612.5431.js";import{a as ko}from"./index.b4290019.5431.js";import{_ as xo}from"./WithSelectable.3e29646c.5431.js";import{_ as $o}from"./BaseBrickTab.d99391ea.5431.js";import{_ as Vo}from"./BaseFileUpload.eb5fcc60.5431.js";import{_ as Uo}from"./BaseFroalaEditor.a413d75b.5431.js";import"./BaseCalendar.vue_vue_type_style_index_0_lang.7393c087.5431.js";import"./multiselect.esm.0021af57.5431.js";/* empty css                                                             */import"./dropdown.esm.89512876.5431.js";/* empty css                                                          */import"./textarea.esm.a82312de.5431.js";import"./overlaypanel.esm.ee52661b.5431.js";/* empty css                                                              */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang.0097ac02.5431.js";/* empty css                                                                            */import"./review.store.c81af072.5431.js";/* empty css                                                       */import{_ as Ut}from"./BaseDialog.1b602f22.5431.js";const Eo={class:"user-select"},ve={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(c,{emit:a}){const t=c,l=Q([]),b=rt(t,"modelValue"),s=async r=>{let{data:_}=await uo.get(`${t.apiUrl}/`,r);_.hasOwnProperty("results")?l.value=_.results:l.value=_};return tt(async()=>{await s(t.apiParams)}),(r,_)=>(w(),T("div",Eo,[o(ot,{modelValue:e(b),"onUpdate:modelValue":_[0]||(_[0]=n=>et(b)?b.value=n:null),options:l.value,"onUpdate:options":_[1]||(_[1]=n=>l.value=n),error:t.error,"api-url":t.apiUrl,"api-params":t.apiParams,"option-label":"full_name",label:t.label,placeholder:t.placeholder,required:t.required,searchable:"","onEmit:change":_[2]||(_[2]=n=>a("emit:change",n))},{option:d(({option:n})=>[o(e(xo),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},Co={class:"business-trip-decree-template-view letter-template"},So={class:"flex flex-col text-sm font-medium mt-4"},To=h("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),Lo=["innerHTML"],Do=["innerHTML"],Ro={class:"employees-table text-sm mt-4"},Mo={class:"w-full"},No=h("tr",{class:"text-center"},[h("td",{class:"border-2 p-1"},"№"),h("td",{class:"border-2 p-1"},"F.I.SH"),h("td",{class:"border-2 p-1"},"Departament va lavozim"),h("td",{class:"border-2 p-1"},"Yo'nalish"),h("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Po={class:"text-center"},Oo={class:"border-2 p-1"},Io={class:"border-2 p-1"},Ao={class:"border-2 p-1"},Bo=h("br",null,null,-1),jo={class:"border-2 p-1"},zo={class:"flex flex-col gap-y-1"},Fo={key:0},Go={class:"border-2 p-1 w-[100px]"},Wo=h("br",null,null,-1),Yo={class:"indent-8 mt-2 text-sm text-justify"},Ho=h("div",null,"xizmat safariga yuborilsin.",-1),Xo=h("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Ko=h("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),Qo=h("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Jo={key:0},Zo=h("span",{class:"font-semibold"},"Asos: ",-1),el=h("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),tl=h("div",null," O‘zR MKning 287-moddasi; ",-1),ol=h("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),ll={class:"mt-6 pb-2 px-4"},nl={class:"text-sm font-semibold block"},rl={class:"text-sm font-semibold block"},al={class:"text-sm font-semibold block"},sl={class:"text-sm font-semibold block"},il={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(c){const a=c,t=ct(),l=te(()=>{var _;return a.preview?ie().currentUser:(_=a.composeModel)==null?void 0:_.author}),b=te(()=>{var _,n,p;return a.preview?(_=a.composeModel)==null?void 0:_.__employees.map(k=>({empFullName:k.full_name,empDepName:k.top_level_department.name,empPositionName:k.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(p=(n=a.composeModel)==null?void 0:n.notices)==null?void 0:p.map(k=>({empFullName:k.user.full_name,empDepName:k.user.top_level_department.name,empPositionName:k.user.position.name,destinations:k.destinations,startDate:k.start_date,endDate:k.end_date}))}),s=te(()=>{var n,p,k;if(a.preview)return[(n=a.composeModel)==null?void 0:n.__curator];const _=(p=a.composeModel)==null?void 0:p.signers.find(S=>S.type===ze.BASIC_SIGNER);return _?[_]:[(k=a.composeModel)==null?void 0:k.curator].filter(Boolean)}),r=te(()=>{var _,n;return a.preview?(_=a.composeModel)==null?void 0:_.__signers:(n=a.composeModel)==null?void 0:n.signers.filter(p=>p.type===ze.SIGNER)});return(_,n)=>{var S,M,R,N,D,v,m,y;const p=fe,k=_e;return w(),T("div",Co,[o(e(Qt)),o(e(Jt),{"dep-name":(M=(S=l.value)==null?void 0:S.top_level_department)==null?void 0:M.name},null,8,["dep-name"]),h("div",So,[h("span",null," № "+I((R=a.composeModel)==null?void 0:R.register_number),1),h("span",null,I(((N=a.composeModel)==null?void 0:N.register_date)&&e(ho)((D=a.composeModel)==null?void 0:D.register_date)),1)]),To,e(t).historyShow?(w(),T("div",{key:0,class:"text-justify",innerHTML:e(t).historyContent},null,8,Lo)):(w(),T("div",{key:1,class:"text-justify",innerHTML:(v=a.composeModel)==null?void 0:v.content},null,8,Do)),h("div",Ro,[h("table",Mo,[No,b.value&&b.value.length?(w(!0),T(K,{key:0},de(b.value,(i,u)=>(w(),T("tr",Po,[h("td",Oo,I(u+1),1),h("td",Io,I(i.empFullName),1),h("td",Ao,[re(I(i.empDepName)+" ",1),Bo,re(" "+I(i.empPositionName),1)]),h("td",jo,[h("div",zo,[(w(!0),T(K,null,de(i.destinations,(f,q)=>(w(),T("span",null,[re(I(f.name)+" ",1),q!==i.destinations.length-1?(w(),T("span",Fo,",")):ae("",!0)]))),256))])]),h("td",Go,[re(I(i.startDate)+" ",1),Wo,re(" "+I(i.endDate),1)])]))),256)):ae("",!0)])]),h("div",Yo,[Ho,Xo,Ko,Qo,(m=c.composeModel)!=null&&m.trip_notice_register_number?(w(),T("div",Jo,[Zo,re(I((y=c.composeModel)==null?void 0:y.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):ae("",!0),el,tl,ol]),h("div",ll,[(w(!0),T(K,null,de(s.value,i=>(w(),W(k,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[o(p,{"col-class":"w-1/3"},{default:d(()=>[h("span",nl,I(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?(w(),W(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:d(()=>[h("span",rl,I(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(w(!0),T(K,null,de(r.value,i=>(w(),W(k,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[o(p,{"col-class":"w-1/3"},{default:d(()=>[h("span",al,I(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?(w(),W(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:d(()=>[h("span",sl,I(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),o(e(Zt),{"compose-model":a.composeModel,author:l.value},null,8,["compose-model","author"])])}}};var dl=`
/*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5rem;
    margin-right: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3rem;
    margin-right: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3rem;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5rem;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3rem;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5rem;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6rem;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5rem;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6rem;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5rem;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9rem;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5rem;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9rem;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5rem;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12rem;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5rem;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12rem;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5rem;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15rem;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5rem;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15rem;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5rem;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18rem;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5rem;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18rem;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5rem;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21rem;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5rem;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21rem;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5rem;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24rem;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5rem;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24rem;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5rem;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27rem;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5rem;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27rem;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5rem;
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background-color: #000;
}
.ql-editor .ql-bg-red {
    background-color: #e60000;
}
.ql-editor .ql-bg-orange {
    background-color: #f90;
}
.ql-editor .ql-bg-yellow {
    background-color: #ff0;
}
.ql-editor .ql-bg-green {
    background-color: #008a00;
}
.ql-editor .ql-bg-blue {
    background-color: #06c;
}
.ql-editor .ql-bg-purple {
    background-color: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}
`,cl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Tt.extend({name:"editor",css:dl,classes:cl});(function(){try{return window.Quill}catch{return null}})();const Ee={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(c){return["froala","tiny"].includes(c)}}},emits:["update:modelValue","emit:fileUpload"],setup(c,{emit:a}){const t=c,l=rt(t,"modelValue"),b=Q([{title:"text",slot:"editor",icon:Lt},{title:"file",slot:"file",icon:Dt}]);return(s,r)=>(w(),W($o,{"tab-panel-list":b.value,"panel-container-class":"px-0"},{editor:d(()=>[c.editor==="froala"?(w(),W(Uo,{key:0,modelValue:e(l),"onUpdate:modelValue":r[0]||(r[0]=_=>et(l)?l.value=_:null)},null,8,["modelValue"])):(w(),W(yo,{key:1,modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=_=>et(l)?l.value=_:null)},null,8,["modelValue"]))]),file:d(()=>[h("div",{class:Oe(t.fileUploadContainerClasses)},[o(Vo,{files:t.files,"onEmit:fileUpload":r[2]||(r[2]=_=>a("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ul={class:"flex flex-col justify-between h-full"},pl={class:"px-6 py-4 overflow-y-auto"},ml={class:"actions p-6"},je={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(c,{emit:a}){return(t,l)=>{const b=De;return w(),T("div",ul,[h("div",pl,[yt(t.$slots,"default")]),h("div",ml,[o(b,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=s=>a("emit:clearForm"))}),o(b,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=s=>a("emit:preview"))})])])}}},_l=ke("sd-stores-inner",{state:()=>{var c,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(c=ie().currentUser)==null?void 0:c.company)==null?void 0:a.id,content:null,document_type:ee.INNER,document_sub_type:Z.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:se.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:V.withMessage("Поле не должен быть пустым",C)},content:{required:V.withMessage("Поле не должен быть пустым",C)},__departments:{required:V.withMessage("Поле не должен быть пустым",C)},__approvers:{},__signers:{required:V.withMessage("Поле не должен быть пустым",C)}}}},actions:{async actionCreateDocument(c){let a={...c,type:qt,sub_type:qt};this.buttonLoading=!0;const{response:t,error:l}=await $e(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):Promise.reject(l)},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:c,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await qe(c);Te(this.model,a),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers),this.model.__departments=await co(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),fl={class:"font-semibold text-xl"},Ne={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(c,{emit:a}){const l=rt(c,"modelValue"),{t:b}=ne();return(s,r)=>{const _=De,n=Ut;return w(),W(n,{modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=p=>et(l)?l.value=p:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[h("span",fl,I(e(b)("preview")),1)]),content:d(()=>[yt(s.$slots,"content")]),footer:d(()=>[o(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(_,{label:c.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:c.sendButtonLoading,onClick:r[0]||(r[0]=p=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},ua={__name:"InnerForm",props:{formType:{type:String,default:z}},setup(c){const a=c,t=ie(),l=_l();ye();const b=ue(),s=Q(!1);Q(null);const{t:r}=ne(),_=pe(),n=me(),p=oe(l.rules,l.model),k=async()=>{await p.value.$validate()&&(s.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(m=>m.id),l.model.files=[],l.model.files=l.model.__files.map(m=>({id:m.id})),l.model.journal=se.INNER,l.model.sender=t.currentUser.top_level_department.id,l.model.approvers=le(l.model.__approvers),l.model.signers=le(l.model.__signers),l.model.document_type=n.params.document_type,l.model.document_sub_type=n.params.document_sub_type,l.model.receiver&&delete l.model.receiver)},S=()=>{a.formType===z?M():R()},M=async()=>{const v=await l.actionCreateDocument(l.model);await b.actionCountList(),v?(s.value=!1,j(null,r("document-sent"),B.SUCCESS),await _.replace({name:Be,query:{document_type:ee.INNER}})):j(null,r("error-occurred"),B.ERROR)},R=async()=>{await l.actionUpdateDocument({id:n.params.id,body:l.model}),await b.actionCountList(),j(null,r("document-sent"),B.SUCCESS),await _.replace({name:Me,params:{id:n.params.id,document_type:ee.INNER,document_sub_type:Z.SERVICE_LETTER}})},N=()=>{console.log("Clear Form")},D=v=>{l.model.__files=[],v.forEach(m=>{l.model.__files.push(m)})};return tt(async()=>{n.params.id&&await l.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Ge(l.model)}),(v,m)=>{const y=we,i=fe,u=Ae,f=_e;return e(l).detailLoading?(w(),W(y,{key:0})):(w(),T(K,{key:1},[o(e(xe),{title:a.formType===e(z)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[o(je,{"onEmit:preview":k,"onEmit:clearForm":N},{default:d(()=>[o(f,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(Xt,{modelValue:e(p).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=q=>e(p).__departments.$model=q),error:e(p).__departments},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(u,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=q=>e(p).short_description.$model=q),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=q=>e(p).__approvers.$model=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=q=>e(p).__signers.$model=q),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ee,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[4]||(m[4]=q=>e(p).content.$model=q),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=q=>s.value=q),"send-button-loading":e(l).buttonLoading,"onEmit:send":S},{content:d(()=>{var q,E;return[o(eo,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(E=(q=e(t).currentUser)==null?void 0:q.top_level_department)==null?void 0:E.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},ql=ke("sd-store-application",{state:()=>{var c,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(c=ie().currentUser)==null?void 0:c.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__approvers:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{}}}},actions:{async actionCreateDocument(c){let a={...c};this.buttonLoading=!0;const{response:t,error:l}=await $e(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:c,body:a});return Promise.resolve(t)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await qe(c);Te(this.model,a),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers.filter(t=>t.type===ze.SIGNER)),this.model.__curator=await Le([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Et=ke("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:ie().currentUser.company.id,curator:null,document_type:ee.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:se.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:V.withMessage("Поле не должен быть пустым",C)},register_date:{required:V.withMessage("Поле не должен быть пустым",C)},content:{required:V.withMessage("Поле не должен быть пустым",C)},__negotiators:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:c,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await qe(c);Te(this.model,a),this.model.__signers=await H(a.signers.filter(t=>t.type!==ze.NEGOTIATOR)),this.model.__negotiators=await H(a.signers.filter(t=>t.type===ze.NEGOTIATOR)),this.model.__approvers=await H(a.approvers),this.model.__curator=await Le([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),pa={__name:"ApplicationForm",props:{formType:{type:String,default:z}},setup(c){const a=c,t=ie(),l=ql();ye();const b=ue();Et();const s=Q(!1);Q(null);const{t:r}=ne(),_=pe(),n=me(),p=oe(l.rules,l.model),k=async()=>{var m,y,i,u,f;await p.value.$validate()&&(s.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(m=t==null?void 0:t.currentUser)==null?void 0:m.id}],l.model.sender=(i=(y=t==null?void 0:t.currentUser)==null?void 0:y.top_level_department)==null?void 0:i.id,l.model.curator=(f=(u=l==null?void 0:l.model)==null?void 0:u.__curator)==null?void 0:f.user_id,l.model.journal=se.APPLICATION,l.model.document_type=n.params.document_type,l.model.document_sub_type=n.params.document_sub_type,l.model.approvers=le(l.model.__approvers))},S=async()=>{},M=()=>{a.formType===z?R():N()},R=async()=>{const v=await l.actionCreateDocument(l.model);await b.actionCountList(),v?(s.value=!1,j(null,r("document-sent"),B.SUCCESS),await _.replace({name:Be,query:{document_type:ee.APPLICATION}})):j(null,r("error-occurred"),B.ERROR)},N=async()=>{await l.actionUpdateDocument({id:n.params.id,body:l.model}),await b.actionCountList(),j(null,r("document-sent"),B.SUCCESS),await _.replace({name:Me,params:{id:n.params.id,document_type:ee.APPLICATION,document_sub_type:Z.LABOR_LEAVE}})},D=v=>{l.model.__files=[],v.forEach(m=>{l.model.__files.push(m)})};return tt(async()=>{n.params.id&&await l.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Ge(l.model)}),(v,m)=>{const y=we,i=fe,u=_e;return e(l).detailLoading?(w(),W(y,{key:0})):(w(),T(K,{key:1},[o(e(xe),{title:a.formType===e(z)?"create-sd-application":"update-sd-application"},{content:d(()=>[o(je,{"onEmit:preview":k,"onEmit:clearForm":S},{default:d(()=>[o(u,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(p).__approvers.$model=f),error:e(p).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[2]||(m[2]=f=>e(p).__signers.$model=f),disabled:"",label:"signers",placeholder:e(t).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ee,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=f=>s.value=f),"send-button-loading":e(l).buttonLoading,"onEmit:send":M},{content:d(()=>[o(to,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:a.formType===e(z)?e(t).currentUser:e(l).model.__signers[0].user,signers:a.formType===e(z)?[e(t).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=ke("sd-notice-store",{state:()=>(ie(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:ee.NOTICE,document_sub_type:Z.BUSINESS_TRIP,journal:se.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:V.withMessage("Поле не должен быть пустым",C)},start_date:{required:V.withMessage("Поле не должен быть пустым",C)},route:{required:V.withMessage("Поле не должен быть пустым",C)},content:{required:V.withMessage("Поле не должен быть пустым",C)},__companies:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__employees:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},__tags:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:c,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c,a=!1){try{this.detailLoading=!0;const{data:t}=await qe(c);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Le([],t.curator.id,!1),this.model.__employees=await H(t.notices),a?(this.model.__approvers=await H(t.approvers.filter(l=>{var b,s;return((b=l==null?void 0:l.user)==null?void 0:b.id)!==((s=t==null?void 0:t.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await H(t.approvers),this.model.__signers=await H(t.signers),this.model.__companies=await ft(t.notices[0].destinations),this.model.__tags=await it(t.tags),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(c,a){try{this.detailLoading=!0;const{data:t}=await qe(c),l=await qe(a);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Le([],t.curator.id,!1),this.model.__employees=await H(l.data.notices),this.model.__approvers=await H(t.approvers),this.model.__signers=await H(t.signers),this.model.__companies=await ft(l.data.notices[0].destinations),this.model.__tags=await it(t.tags),this.model.start_date=l.data.notices[0].start_date,this.model.end_date=l.data.notices[0].end_date,this.model.__tags=t.tags,this.model.route=l.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),bl={class:"flex w-full gap-x-4"},ma={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:z}},setup(c){const a=c,{t}=ne(),l=me(),b=pe(),s=ie(),r=gl(),_=ue();ye();const n=oe(r.rules,r.model),p=Q(!1),k=te(()=>{const i=a.formType===z,u=l.params.document_sub_type;return u===Z.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":u===Z.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),S=te(()=>{var i,u;return l.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL&&((i=l==null?void 0:l.query)==null?void 0:i.compose_id)&&((u=l==null?void 0:l.query)==null?void 0:u.document_sub_type)===Z.BUSINESS_TRIP}),M=te(()=>{var i;return!!(l.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL&&((i=r==null?void 0:r.model)!=null&&i.trip_notice_id))});Rt(()=>r.model.__tags,i=>{if(a.formType===z)if(i&&i.length){let u=`${i.map(f=>f.name_uz).join(", ")} yuzasidan`;r.model.short_description=u.charAt(0).toUpperCase()+u.slice(1).toLowerCase()}else r.model.short_description=null});const R=async()=>{var u,f,q,E,O;await n.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=le(r.model.__approvers),r.model.signers=le(r.model.__signers),r.model.curator=(f=(u=r==null?void 0:r.model)==null?void 0:u.__curator)==null?void 0:f.user_id,r.model.journal=l.params.document_type===ee.DECREE||l.params.document_type===ee.ORDER?se.ORDERS_PROTOCOLS:se.INNER,r.model.company=s.currentUser.company.id,r.model.notices=r.model.__employees.map(U=>({start_date:r.model.start_date,end_date:r.model.end_date,user:U.id,route:r.model.route,companies:r.model.__companies.map(x=>x.id)})),r.model.sender=(E=(q=s==null?void 0:s.currentUser)==null?void 0:q.top_level_department)==null?void 0:E.id,r.model.tags=r.model.__tags.map(U=>({id:U.id})),r.model.files=r.model.__files.map(U=>({id:U.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,S.value&&(r.model.trip_notice_id=(O=l==null?void 0:l.query)==null?void 0:O.compose_id),p.value=!0)},N=()=>{},D=i=>{r.model.__files=[],i.forEach(u=>{r.model.__files.push(u)})},v=async()=>{S.value&&(r.model.notices=[]);const i=await r.actionCreateDocument(r.model);await _.actionCountList(),i?(p.value=!1,j(null,t("document-sent"),B.SUCCESS),await b.replace({name:Be,query:{document_type:l.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL?ee.DECREE:l.params.document_sub_type===Z.BUSINESS_TRIP_ORDER_LOCAL?ee.ORDER:ee.NOTICE}})):j(null,t("error-occurred"),B.ERROR)},m=async()=>{(S.value||M.value)&&(r.model.notices=[]),await r.actionUpdateDocument({id:l.params.id,body:r.model}),await _.actionCountList(),j(null,t("changed"),B.SUCCESS),await b.replace({name:Me,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},y=()=>{a.formType===z?v():m()};return Je(async()=>{l.params.id&&l.query.trip_notice_id&&l.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL?await r.actionGetDocumentDetailForUpdateForCustomUse(l.params.id,l.query.trip_notice_id):l.params.id?await r.actionGetDocumentDetailForUpdate(l.params.id):S.value&&await r.actionGetDocumentDetailForUpdate(l.query.compose_id,!0)}),Re(()=>{Ge(r.model)}),(i,u)=>{const f=we,q=fe,E=We,O=ot,U=Ae,x=_e;return e(r).detailLoading?(w(),W(f,{key:0})):(w(),T(K,{key:1},[o(e(xe),{title:k.value},{content:d(()=>[o(je,{"onEmit:preview":R,"onEmit:clearForm":N},{default:d(()=>[o(x,null,{default:d(()=>[o(q,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=g=>e(n).__curator.$model=g),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":u[1]||(u[1]=g=>e(n).__employees.$model=g),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:S.value||M.value},null,8,["modelValue","error","disabled"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(Kt,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":u[2]||(u[2]=g=>e(n).__companies.$model=g),error:e(n).__companies,"text-truncate":"",disabled:S.value||M.value},null,8,["modelValue","error","disabled"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(at,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":u[3]||(u[3]=g=>e(n).__tags.$model=g),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:g})=>[re(I(g.name),1)]),option:d(({value:g})=>[o(e(he),{title:g.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[h("div",bl,[o(E,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[u[4]||(u[4]=g=>e(n).start_date.$model=g),u[5]||(u[5]=g=>e(n).start_date.$model=e(ge)(g))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:S.value||M.value},null,8,["modelValue","error","min-date","disabled"]),o(E,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[u[6]||(u[6]=g=>e(n).end_date.$model=g),u[7]||(u[7]=g=>e(n).end_date.$model=e(ge)(g))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:S.value||M.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(O,{modelValue:e(n).route.$model,"onUpdate:modelValue":u[8]||(u[8]=g=>e(n).route.$model=g),error:e(n).route,options:e(Mt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:S.value||M.value},null,8,["modelValue","error","options","disabled"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":u[9]||(u[9]=g=>e(r).model.__approvers=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":u[10]||(u[10]=g=>e(n).__signers.$model=g),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(U,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":u[11]||(u[11]=g=>e(n).short_description.$model=g),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(q,{"col-class":"w-full"},{default:d(()=>[o(Ee,{modelValue:e(n).content.$model,"onUpdate:modelValue":u[12]||(u[12]=g=>e(n).content.$model=g),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:p.value,"onUpdate:modelValue":u[13]||(u[13]=g=>p.value=g),"send-button-loading":e(r).buttonLoading,"onEmit:send":y},{content:d(()=>[e(l).params.document_sub_type===e(Z).BUSINESS_TRIP_DECREE_LOCAL?(w(),W(e(il),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(Z).BUSINESS_TRIP_ORDER_LOCAL?(w(),W(e(oo),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(w(),W(e(lo),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},_a={__name:"OrderForm",props:{formType:{type:String,default:z}},setup(c){const a=c,t=Et(),l=ue(),b=ie(),s=me(),r=pe(),_=oe(t.rules,t.model),{t:n}=ne(),p=Q(!1),k=async()=>{var m,y,i,u;await _.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.approvers=le(t.model.__approvers),t.model.curator=(y=(m=t==null?void 0:t.model)==null?void 0:m.__curator)==null?void 0:y.user_id,t.model.sender=(u=(i=b==null?void 0:b.currentUser)==null?void 0:i.top_level_department)==null?void 0:u.id,t.model.files=t.model.__files.map(f=>({id:f.id})),t.model.document_type=s.params.document_type,t.model.document_sub_type=s.params.document_sub_type,t.model.journal=se.ORDERS_PROTOCOLS,t.model.register_date=ge(t.model.register_date),t.model.__negotiators.forEach(f=>{t.model.signers.push(f.hasOwnProperty("user")?{id:f.id,user:f.user.id,type:ze.NEGOTIATOR}:{user:f.id,type:ze.NEGOTIATOR})}),s.query.compose_id&&(t.model.trip_notice_id=s.query.compose_id),p.value=!0)},S=()=>{},M=async()=>{try{const v=await t.actionCreateDocument(t.model);await l.actionCountList(),v&&(p.value=!1,j(null,n("document-sent"),B.SUCCESS),await r.replace({name:Be,query:{document_type:ee.ORDER}}))}catch{j(null,n("error-occurred"),B.ERROR)}},R=async()=>{try{const v=await t.actionUpdateDocument({id:s.params.id,body:t.model});await l.actionCountList(),j(null,n("changed"),B.SUCCESS),await r.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{j(null,n("error-occurred"),B.ERROR)}},N=()=>{a.formType===z?M():R()},D=v=>{t.model.__files=[],v.forEach(m=>{t.model.__files.push(m)})};return tt(async()=>{s.params.id&&await t.actionGetDocumentDetailForUpdate(s.params.id)}),Re(()=>{Ge(t.model)}),(v,m)=>{const y=we,i=fe,u=Ae,f=We,q=_e;return e(t).detailLoading?(w(),W(y,{key:0})):(w(),T(K,{key:1},[o(e(xe),{title:a.formType===e(z)?"create-order":"update-order"},{content:d(()=>[o(je,{"onEmit:preview":k,"onEmit:clearForm":S},{default:d(()=>[o(q,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=E=>e(_).__curator.$model=E),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(u,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=E=>e(_).register_number.$model=E),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(f,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=E=>e(_).register_date.$model=E),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=E=>e(t).model.__approvers=E),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=E=>e(_).__negotiators.$model=E),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ee,{modelValue:e(_).content.$model,"onUpdate:modelValue":m[5]||(m[5]=E=>e(_).content.$model=E),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:p.value,"onUpdate:modelValue":m[6]||(m[6]=E=>p.value=E),"send-button-loading":e(t).buttonLoading,"onEmit:send":N},{content:d(()=>[o(e(no),{"compose-model":e(t).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},hl=ke("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:c,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await qe(c);Te(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers)}catch{}finally{this.detailLoading=!1}}}}),fa={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:z}},setup(c){const a=c,{t}=ne(),l=me(),b=pe(),s=ie(),r=hl(),_=ue();ye();const n=Q(!1),p=oe(r.rules,r.model),k=async()=>{var m,y,i,u;await p.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=le(r.model.__approvers),r.model.signers=le(r.model.__signers),r.model.curator=(y=(m=r==null?void 0:r.model)==null?void 0:m.__curator)==null?void 0:y.user_id,r.model.journal=se.INNER,r.model.company=s.currentUser.company.id,r.model.sender=(u=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:u.id,r.model.files=r.model.__files.map(f=>({id:f.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,n.value=!0)},S=()=>{},M=v=>{r.model.__files=[],v.forEach(m=>{r.model.__files.push(m)})},R=async()=>{const v=await r.actionCreateDocument(r.model);await _.actionCountList(),v?(n.value=!1,j(null,t("document-sent"),B.SUCCESS),await b.replace({name:Be,query:{document_type:ee.NOTICE}})):j(null,t("error-occurred"),B.ERROR)},N=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await _.actionCountList(),j(null,t("changed"),B.SUCCESS),await b.replace({name:Me,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},D=()=>{a.formType===z?R():N()};return Je(async()=>{l.params.id&&await r.actionGetDocumentDetailForUpdate(l.params.id)}),Re(()=>{Ge(r.model)}),(v,m)=>{const y=we,i=fe,u=Ae,f=_e;return e(r).detailLoading?(w(),W(y,{key:0})):(w(),T(K,{key:1},[o(e(xe),{title:a.formType===e(z)?"create-notice":"update-notice"},{content:d(()=>[o(je,{"onEmit:preview":k,"onEmit:clearForm":S},{default:d(()=>[o(f,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=q=>e(p).__curator.$model=q),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(u,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=q=>e(p).short_description.$model=q),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=q=>e(r).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=q=>e(p).__signers.$model=q),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ee,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[4]||(m[4]=q=>e(p).content.$model=q),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:n.value,"onUpdate:modelValue":m[5]||(m[5]=q=>n.value=q),"send-button-loading":e(r).buttonLoading,"onEmit:send":D},{content:d(()=>[o(e(ro),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},yl=ke("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionCreateDocument(c){const a={...c};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:t,error:l}=await $e(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:a}){const t={...a};delete t.bookings,delete t.notices,delete t.trip_plans;try{this.buttonLoading=!0;const{data:l}=await Ve({id:c,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c,a){try{this.detailLoading=!0;const{data:t}=await qe(c);Te(this.model,t),this.model.__curator=await Le([],t.curator.id,!1),this.model.__approvers=await H(t.approvers),this.model.__signers=await H(t.signers)}catch{}finally{this.detailLoading=!1}}}}),qa={__name:"DecreeForm",props:{formType:{type:String,default:z}},setup(c){const a=c,{t}=ne(),l=me(),b=pe(),s=ie(),r=ue();ye();const _=Q(!1),n=yl(),p=ct(),k=oe(n.rules,n.model),S=async()=>{var i,u,f,q;await k.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=le(n.model.__approvers),n.model.signers=le(n.model.__signers),n.model.curator=(u=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:u.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=s.currentUser.company.id,n.model.sender=(q=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:q.id,n.model.files=n.model.__files.map(E=>({id:E.id})),n.model.document_type=l.params.document_type,n.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(n.model.trip_notice_id=l.query.compose_id),_.value=!0)},M=()=>{},R=y=>{n.model.__files=[],y.forEach(i=>{n.model.__files.push(i)})},N=async()=>{const y=await n.actionCreateDocument(n.model);await r.actionCountList(),y?(_.value=!1,j(null,t("document-sent"),B.SUCCESS),await b.replace({name:Be,query:{document_type:l.params.document_type}})):j(null,t("error-occurred"),B.ERROR)},D=async()=>{await n.actionUpdateDocument({id:l.params.id,body:n.model}),await r.actionCountList(),j(null,t("changed"),B.SUCCESS),await b.replace({name:Me,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},v=()=>{a.formType===z?N():D()},m=async y=>{const{data:i}=await p.actionGetDocumentDetail(y);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return Je(async()=>{a.formType===z&&l.query.compose_id?await m(l.query.compose_id):a.formType===Se&&l.query.trip_notice_id&&l.params.id?(await n.actionGetDocumentDetailForUpdate(l.params.id,null),await m(l.query.trip_notice_id)):a.formType===Se&&l.params.id&&await n.actionGetDocumentDetailForUpdate(l.params.id,null)}),Re(()=>{Ge(n.model)}),(y,i)=>{const u=we,f=fe,q=Ae,E=_e;return e(n).detailLoading?(w(),W(u,{key:0})):(w(),T(K,{key:1},[o(e(xe),{title:a.formType===e(z)?"create-decree":"update-decree"},{content:d(()=>[o(je,{"onEmit:preview":S,"onEmit:clearForm":M},{default:d(()=>[o(E,null,{default:d(()=>[o(f,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=O=>e(k).__curator.$model=O),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(q,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=O=>e(k).short_description.$model=O),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=O=>e(n).model.__approvers=O),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=O=>e(k).__signers.$model=O),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:d(()=>[o(Ee,{modelValue:e(k).content.$model,"onUpdate:modelValue":i[4]||(i[4]=O=>e(k).content.$model=O),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:_.value,"onUpdate:modelValue":i[5]||(i[5]=O=>_.value=O),"send-button-loading":e(n).buttonLoading,"onEmit:send":v},{content:d(()=>[o(e(vt),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wl=ke("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:V.withMessage("Поле не должен быть пустым",C)},start_date:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},__user:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await qe(c);return Te(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers),this.model.__user=await He("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:c,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),ga={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:z}},setup(c){const a=c,t=me(),l=pe(),b=ie(),s=wl();ct();const r=ue(),{t:_}=ne(),n=oe(s.rules,s.model),p=Q(!1),k=Q([]),S=te(()=>a.formType===z?"create-poa":"update-poa"),M=te(()=>s.model.start_date?new Date(s.model.start_date):new Date),R=async()=>{var u,f,q,E,O,U,x,g,$,G,L,Y,J,P,F,A,Pe,Ce,Ye,mt;if(await n.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=le(s.model.__approvers),s.model.signers=le(s.model.__signers),s.model.curator=(f=(u=s==null?void 0:s.model)==null?void 0:u.__curator)==null?void 0:f.user_id,s.model.user=(E=(q=s==null?void 0:s.model)==null?void 0:q.__user)==null?void 0:E.id,s.model.journal=se.POWER_OF_ATTORNEY,s.model.company=(U=(O=b.currentUser)==null?void 0:O.company)==null?void 0:U.id,s.model.sender=(g=(x=b==null?void 0:b.currentUser)==null?void 0:x.top_level_department)==null?void 0:g.id,s.model.document_type=t.params.document_type,s.model.document_sub_type=t.params.document_sub_type,s.model.content=".",s.model.parent=(G=($=s.model)==null?void 0:$.__parent)==null?void 0:G.id,!((Y=(L=s==null?void 0:s.model)==null?void 0:L.__user)!=null&&Y.passport_seria||(P=(J=s==null?void 0:s.model)==null?void 0:J.__user)!=null&&P.passport_number||(A=(F=s==null?void 0:s.model)==null?void 0:F.__user)!=null&&A.passport_issue_date||(Ce=(Pe=s==null?void 0:s.model)==null?void 0:Pe.__user)!=null&&Ce.passport_issued_by)){j(null,`${(mt=(Ye=s.model)==null?void 0:Ye.__user)==null?void 0:mt.full_name}: ${_("passport-details-error")}`,B.WARNING);return}p.value=!0}},N=()=>{},D=async()=>{const i=await s.actionCreateDocument(s.model);await r.actionCountList(),i?(p.value=!1,j(null,_("document-sent"),B.SUCCESS),await l.replace({name:Be,query:{document_type:ee.POWER_OF_ATTORNEY}})):j(null,_("error-occurred"),B.ERROR)},v=async()=>{await s.actionUpdateDocument({id:t.params.id,body:s.model}),await r.actionCountList(),j(null,_("changed"),B.SUCCESS),await l.replace({name:Me,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},m=()=>{a.formType===z?D():v()},y=async i=>{const{data:u}=await po({user:i.id,document_sub_type:t.params.document_sub_type,status:5});k.value=u.results};return Je(async()=>{if(t.params.id){const i=await s.actionGetDocumentDetailForUpdate(t.params.id);i.parent&&(k.value=[i.parent])}}),Re(()=>{Ge(s.model)}),(i,u)=>{const f=we,q=fe,E=We,O=ot,U=_e;return e(s).detailLoading?(w(),W(f,{key:0})):(w(),T(K,{key:1},[o(e(xe),{title:S.value},{content:d(()=>[o(je,{"onEmit:preview":R,"onEmit:clearForm":N},{default:d(()=>[o(U,null,{default:d(()=>[o(q,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=x=>e(n).__curator.$model=x),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(n).__user.$model,"onUpdate:modelValue":u[1]||(u[1]=x=>e(n).__user.$model=x),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":u[2]||(u[2]=x=>y(x))},null,8,["modelValue","error"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(E,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[u[3]||(u[3]=x=>e(n).start_date.$model=x),u[4]||(u[4]=x=>e(n).start_date.$model=e(ge)(x))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(E,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[u[5]||(u[5]=x=>e(n).end_date.$model=x),u[6]||(u[6]=x=>e(n).end_date.$model=e(ge)(x))],error:e(n).end_date,"min-date":M.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":u[7]||(u[7]=x=>e(s).model.__approvers=x),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":u[8]||(u[8]=x=>e(n).__signers.$model=x),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(q,{"col-class":"w-1/2"},{default:d(()=>[o(O,{modelValue:e(s).model.__parent,"onUpdate:modelValue":u[9]||(u[9]=x=>e(s).model.__parent=x),options:k.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:p.value,"onUpdate:modelValue":u[10]||(u[10]=x=>p.value=x),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:d(()=>[o(ao,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vl={class:"base-stepper-component flex items-center select-none"},kl=["onClick"],xl={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Ct={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(c,{emit:a}){const{t}=ne(),l=b=>{a("emit:stepClick",b)};return(b,s)=>{const r=ce;return w(),T("div",vl,[(w(!0),T(K,null,de(c.items,(_,n)=>(w(),T("div",{key:_.id,class:"flex items-center"},[h("div",{class:Oe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",_.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:p=>l(_)},[o(r,{icon:_.icon,class:Oe(_.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),h("span",null,I(e(t)(_.label)),1)],10,kl),n<c.items.length-1?(w(),T("div",xl)):ae("",!0)]))),128))])}}},Ie=ke("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList],__users_to_extend:null,__regions_to_extend:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:V.withMessage("Поле не должен быть пустым",C)}},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)},__groups:{$each:V.forEach({__users:{required:V.withMessage("Поле не должен быть пустым",C)},__tags:{required:V.withMessage("Поле не должен быть пустым",C)},__regions:{required:V.withMessage("Поле не должен быть пустым",C)},__start_date:{required:V.withMessage("Поле не должен быть пустым",C)},__end_date:{required:V.withMessage("Поле не должен быть пустым",C)},__company:{required:V.withMessage("Поле не должен быть пустым",C)},__route:{required:V.withMessage("Поле не должен быть пустым",C)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:V.forEach({users:{required:V.withMessage("Поле не должен быть пустым",C)},text:{required:V.withMessage("Поле не должен быть пустым",C)}})}},booking_model:{bookings:[{type:be,route:Ze,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:V.forEach({segments:{$each:V.forEach({departure_city:{required:V.withMessage("Поле не должен быть пустым",C)},arrival_city:{required:V.withMessage("Поле не должен быть пустым",C)},date:{required:V.withMessage("Поле не должен быть пустым",C)},time:{required:V.withMessage("Поле не должен быть пустым",C)},segment_class:{required:V.withMessage("Поле не должен быть пустым",C)}})},passengers:{required:V.withMessage("Поле не должен быть пустым",C)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Nt,active:!0,value:Ke},{id:4,label:"decree",icon:Pt,active:!0,value:Qe}],routeTabItems:[{id:1,title:"airplane",icon:Ot,value:Ze,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:It,value:mo,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:At,value:xt,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:Bt,value:be},{id:2,title:"complex-route",icon:jt,value:dt},{id:3,title:"one-way",icon:zt,value:_o}]}),actions:{async actionCreateDocument(c){const a=nt(c);this.buttonLoading=!0;const{response:t,error:l}=await $e(Ue,a);return t?(this.buttonLoading=!1,await ue().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:a}){const t=await nt(a);try{this.buttonLoading=!0;const{data:l}=await Ve({id:c,body:t});return Promise.resolve(l)}catch(l){return Promise.reject(l)}finally{await ue().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){var a,t;try{this.detailLoading=!0;const{data:l}=await qe(c),b=await kt(l.id);this.decreeModel=(t=(a=b==null?void 0:b.data)==null?void 0:a.to_composes[0])==null?void 0:t.from_compose,Te(this.model,l),this.model.__curator=await Le([],l.curator.id,!1),this.model.__signers=await H(l.signers),this.model.__approvers=await H(l.approvers);const s=Object.values(l.notices.reduce((r,_)=>{const n=_.group_id;return r[n]=r[n]||{group_id:n,items:[]},r[n].items.push(_),r},{}));this.model.__groups=await Promise.all(s.map(async r=>{var N;const _=await Promise.all(r.items.map(async D=>({...await H([],D.user.id,!1),business_trip_id:D.id}))),n=await it(r.items[0].tags),p=await He("regions",r.items[0].locations),k=await He("companies",[],!1,(N=r.items[0].sender_company)==null?void 0:N.id),S=r.items[0].start_date,M=r.items[0].end_date,R=r.items[0].route;return{__users:_,__tags:n,__regions:p,__start_date:S,__end_date:M,__company:k,__route:R}})),this.trip_plan_model.trip_plans=await Promise.all(l.trip_plans.map(async(r,_)=>({...r,users:await H(r.users)}))),this.booking_model.bookings=await Promise.all(l.bookings.map(async r=>({type:r.type,route:r.route,segments:await Promise.all(r.segments.map(async _=>({departure_city:await He("regions",[],!1,_.departure_city.id),arrival_city:await He("regions",[],!1,_.arrival_city.id),segment_class:await fo.find(n=>n.value===_.segment_class),date:ge(_.departure_date),time:await so(_.departure_date,_.departure_end_date)}))),passengers:await H(r.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]})},actionDeleteGroupBlock(c){this.model.__groups.splice(c,1)},async actionStepClick(c,a,t){await c.replace({query:{...a.query,step:t}}),this.stepperItems.forEach(b=>b.active=b.value===t),await wt();const l=document.querySelector(".document-view-aside");l&&l.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(c){this.trip_plan_model.trip_plans.splice(c,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:be,route:Ze,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(c){this.booking_model.bookings.splice(c,1)},actionChangeRouteSegment(c,a){const t=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=c===be?[t(),t()]:[t()]},async actionAddRouteLine(c){this.booking_model.bookings[c].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(c,a){this.booking_model.bookings[c].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:be,route:Ze,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),$l={class:"trip-info-components"},Vl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ul={class:"flex justify-between"},El={class:"text-base text-primary-900 font-semibold mb-1"},Cl=["onClick"],Sl={class:"flex align-center gap-x-4"},Tl={class:"flex w-full gap-x-4"},Ll={class:"flex w-full gap-x-4"},Dl={class:"text-base text-primary-900 font-semibold mb-2"},Rl={class:"flex items-center justify-between"},ht={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(c,{expose:a,emit:t}){const l=me(),b=pe(),s=Ie();ye();const{t:r,locale:_}=ne(),n=oe(s.rules,s.model),p=Q(!1),k=D=>{s.model.__files=[],D.forEach(v=>{s.model.__files.push(v)})},S=()=>{s.actionAddGroupBlock()},M=async D=>{const v=await n.value.$validate();if(p.value=!0,!v){j(null,r("fill-required-fields"),B.WARNING);return}t("emit:onValidateAndSend"),await s.actionStepClick(b,l,"decree")},R=(D,v)=>{s.model.__groups[v].__regions=[]},N=(D,v)=>{D.value.forEach(m=>{var y,i,u,f;if(m.id===((f=(u=(i=(y=s.model)==null?void 0:y.__groups[v])==null?void 0:i.__company)==null?void 0:u.region)==null?void 0:f.id)){const q=s.model.__groups[v].__regions.findIndex(E=>E.id===m.id);(q||q===0)&&s.model.__groups[v].__regions.splice(q,1)}})};return a({stepClick:M}),(D,v)=>{const m=fe,y=Ae,i=ce,u=ot,f=at,q=We,E=_e,O=De;return w(),T("div",$l,[o(E,null,{default:d(()=>[o(m,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":v[0]||(v[0]=U=>e(n).__curator.$model=U),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:d(()=>[o(y,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":v[1]||(v[1]=U=>e(n).short_description.$model=U),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[(w(!0),T(K,null,de(e(s).model.__groups,(U,x)=>(w(),T("div",Vl,[h("div",Ul,[h("span",El,I(e(r)("group"))+"-"+I(x+1),1),x!==0?(w(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:g=>e(s).actionDeleteGroupBlock(x)},[o(i,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Cl)):ae("",!0)]),o(E,null,{default:d(()=>[o(m,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:U.__users,"onUpdate:modelValue":g=>U.__users=g,error:e(n).__groups.$each.$response.$data[x].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(m,{"col-class":"w-1/2"},{default:d(()=>[h("div",Sl,[o(u,{modelValue:U.__company,"onUpdate:modelValue":g=>U.__company=g,error:e(n).__groups.$each.$response.$data[x].__company,options:U.__filialList,"onUpdate:options":g=>U.__filialList=g,required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":g=>R(g,x)},{option:d(({option:g})=>[o(e(he),{title:g.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","onUpdate:options","show-nested-error","onEmit:change"]),o(f,{modelValue:U.__regions,"onUpdate:modelValue":g=>U.__regions=g,error:e(n).__groups.$each.$response.$data[x].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":g=>N(g,x)},{chip:d(({value:g})=>[re(I(g.name),1)]),option:d(({value:g})=>[o(e(he),{title:g.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error","onEmit:change"])])]),_:2},1024),o(m,{"col-class":"w-1/2"},{default:d(()=>[h("div",Tl,[o(f,{modelValue:U.__tags,"onUpdate:modelValue":g=>U.__tags=g,error:e(n).__groups.$each.$response.$data[x].__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":p.value,class:"w-1/2"},{chip:d(({value:g})=>[re(I(g.name),1)]),option:d(({value:g})=>[o(e(he),{title:g.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),o(u,{modelValue:U.__route,"onUpdate:modelValue":g=>U.__route=g,error:e(n).__groups.$each.$response.$data[x].__route,options:e(s).routeTabItems,"onUpdate:options":v[2]||(v[2]=g=>e(s).routeTabItems=g),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(_)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":p.value,class:"w-1/2"},{option:d(({option:g})=>[o(e(he),{title:e(r)(g.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),o(m,{"col-class":"w-1/2"},{default:d(()=>[h("div",Ll,[o(q,{modelValue:U.__start_date,"onUpdate:modelValue":[g=>U.__start_date=g,g=>U.__start_date=e(ge)(g)],error:e(n).__groups.$each.$response.$data[x].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(q,{modelValue:U.__end_date,"onUpdate:modelValue":[g=>U.__end_date=g,g=>U.__end_date=e(ge)(g)],error:e(n).__groups.$each.$response.$data[x].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(O,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:S},null,8,["icon-left"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":v[3]||(v[3]=U=>e(s).model.__approvers=U),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":v[4]||(v[4]=U=>e(n).__signers.$model=U),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-full"},{default:d(()=>[h("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(s).model.content?"border-critic-500":"border-greyscale-200"])},[h("div",Dl,I(e(r)("notice")),1),o(Ee,{modelValue:e(n).content.$model,"onUpdate:modelValue":v[5]||(v[5]=U=>e(n).content.$model=U),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).model.__files,"onEmit:fileUpload":k},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),h("div",Rl,[o(O,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(O,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:v[6]||(v[6]=U=>M(e(ut)))})])])}}},Ml={class:"work-plan-component"},Nl={class:"flex flex-col gap-y-3"},Pl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ol={class:"flex justify-between"},Il={class:"text-base text-primary-900 font-semibold mb-1"},Al=["onClick"],Bl={class:"flex items-center justify-between mt-10"},jl={class:"flex items-center gap-x-1"},zl={__name:"WorkPlan",setup(c,{expose:a}){const{t}=ne(),l=me(),b=pe(),s=Ie(),r=oe(s.trip_plan_rules,s.trip_plan_model),_=Q(!1),n=te(()=>{const S=new Set;return s.model.__groups.reduce((M,R)=>R.__users&&Array.isArray(R.__users)?M.concat(R.__users):M,[]).filter(M=>S.has(M.id)?!1:(S.add(M.id),!0))}),p=async S=>{const M=await r.value.$validate();if(_.value=!0,!M){j(null,t("fill-required-fields"),B.WARNING);return}const R=s.trip_plan_model.trip_plans.flatMap(D=>{var v;return(v=D.users)==null?void 0:v.map(m=>m.id)}),N=n.value.filter(D=>!R.includes(D.id));N.length?(j(null,`У следующих сотрудников нет плана работы: ${N==null?void 0:N.map(D=>D.first_name+" "+D.last_name).join(", ")}.`,B.WARNING),j(null,"У всех сотрудников должен быть назначен рабочий план.",B.WARNING)):await s.actionStepClick(b,l,S)},k=()=>{s.actionAddWorkPlanRow(),_.value=!1};return a({stepClick:p}),(S,M)=>{const R=ce,N=Vt,D=fe,v=_e,m=De;return w(),T("div",Ml,[h("div",Nl,[(w(!0),T(K,null,de(e(s).trip_plan_model.trip_plans,(y,i)=>(w(),T("div",Pl,[h("div",Ol,[h("span",Il,I(e(t)("plan"))+"-"+I(i+1),1),i!==0?(w(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:u=>e(s).actionDeleteWorkPlanRow(i)},[o(R,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Al)):ae("",!0)]),o(v,null,{default:d(()=>[o(D,{"col-class":"w-1/2"},{default:d(()=>[o(N,{modelValue:y.text,"onUpdate:modelValue":u=>y.text=u,error:e(r).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(D,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:y.users,"onUpdate:modelValue":u=>y.users=u,options:n.value,error:e(r).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:k},null,8,["icon-left"]),h("div",Bl,[o(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",jl,[o(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:M[0]||(M[0]=y=>p(e(Ke)))}),o(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:M[1]||(M[1]=y=>p(e($t)))})])])])}}};const Fl={class:"base-time-picker"},Gl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(c){const a=c,t=rt(a,"modelValue"),{t:l}=ne();return(b,s)=>{var n;const r=wo,_=ce;return w(),T("div",Fl,[o(r,{label:a.label,required:a.required},null,8,["label","required"]),o(e(vo),{modelValue:e(t),"onUpdate:modelValue":s[0]||(s[0]=p=>et(t)?t.value=p:null),"time-picker":"",range:c.range,"cancel-text":e(l)("cancel"),"select-text":e(l)("select"),placeholder:e(l)(c.placeholder),ref:"datePicker",class:Oe({"input-error":((n=c.error)==null?void 0:n.$error)&&c.showNestedError})},{"input-icon":d(()=>[o(_,{icon:e(Ft),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Wl={class:"route-component flex flex-col gap-y-3"},Yl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Hl={class:"flex items-center justify-between"},Xl={class:"flex items-center gap-x-4"},Kl={class:"text-base text-primary-900 font-semibold mb-1"},Ql={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Jl={class:"text-xs text-greyscale-900 font-medium"},Zl=["onClick"],en=["onClick"],tn={class:"text-sm text-primary-500 font-semibold"},on={class:"flex items-center justify-between mt-10"},ln={class:"flex items-center gap-x-1"},nn={__name:"Route",props:{formType:{type:String,default:z}},emits:["emit:onValidateAndSend"],setup(c,{expose:a,emit:t}){const{t:l}=ne(),b=me(),s=pe(),r=Ie(),_=ye();ie(),ue();const n=oe(r.booking_model_rules,r.booking_model);Q(!1);const p=Q(!1),k=te(()=>{const i=new Set;return r.model.__groups.reduce((u,f)=>f.__users&&Array.isArray(f.__users)?u.concat(f.__users):u,[]).filter(u=>i.has(u.id)?!1:(i.add(u.id),!0))}),S=i=>{r.routeTabItems.forEach(u=>u.active=u.id===i.id)},M=(i,u)=>{r.routeTypeTabItems.forEach(f=>f.active=f.id===i.id),r.actionChangeRouteSegment(i.value,u)},R=async(i,u=!1)=>{var O,U;const f=await n.value.$validate();if(p.value=!0,!f){j(null,l("fill-required-fields"),B.WARNING);return}const q=(O=r.booking_model.bookings)==null?void 0:O.flatMap(x=>{var g;return(g=x.passengers)==null?void 0:g.map($=>$==null?void 0:$.id)}),E=(U=k.value)==null?void 0:U.filter(x=>!(q!=null&&q.includes(x.id)));E.length?(j(null,`У следующих сотрудников не назначен маршрут: ${E.map(x=>x.first_name+" "+x.last_name).join(", ")}.`,B.WARNING),j(null,"У всех сотрудников должен быть назначен маршрут",B.WARNING)):(u&&t("emit:onValidateAndSend"),await r.actionStepClick(s,b,i))},N=()=>{r.actionAddRouteRow(),p.value=!1},D=(i,u,f,q)=>{q.type===be&&(r.booking_model.bookings[u].segments[f+1].arrival_city=i)},v=(i,u,f,q)=>{q.type===be&&(r.booking_model.bookings[u].segments[f+1].departure_city=i)},m=(i,u,f,q)=>{q.type===be&&(r.booking_model.bookings[u].segments[f+1].segment_class=i)},y=()=>{R(Qe,!0)};return a({stepClick:R}),(i,u)=>{const f=ot,q=fe,E=We,O=_e,U=De;return w(),T("div",Wl,[(w(!0),T(K,null,de(e(r).booking_model.bookings,(x,g)=>(w(),T("div",Yl,[h("div",Hl,[h("div",Xl,[h("span",Kl,I(e(l)("route"))+"-"+I(g+1),1),o(bt,{modelValue:x.route,"onUpdate:modelValue":$=>x.route=$,items:e(r).routeTabItems,"onEmit:onChange":u[0]||(u[0]=$=>S($))},null,8,["modelValue","onUpdate:modelValue","items"]),o(bt,{modelValue:x.type,"onUpdate:modelValue":$=>x.type=$,items:e(r).routeTypeTabItems,"onEmit:onChange":$=>M($,g)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),g!==0?(w(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:u[1]||(u[1]=(...$)=>e(r).actionDeleteRouteRow&&e(r).actionDeleteRouteRow(...$))},[o(ce,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):ae("",!0)]),h("div",Ql,[o(ce,{icon:e(st),class:"text-warning-500"},null,8,["icon"]),h("span",Jl,I(e(l)("route-warning")),1)]),(w(!0),T(K,null,de(x.segments,($,G)=>(w(),T("div",null,[o(O,null,{default:d(()=>[o(q,{"col-class":"w-1/5"},{default:d(()=>[o(f,{modelValue:$.departure_city,"onUpdate:modelValue":L=>$.departure_city=L,error:e(n).bookings.$each.$response.$data[g].segments.$each.$data[G].departure_city,options:e(_).regionsList,"onUpdate:options":u[2]||(u[2]=L=>e(_).regionsList=L),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:x.type===e(be)&&G%2!==0,"onEmit:change":L=>D(L,g,G,x)},{option:d(({option:L})=>[o(e(he),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(q,{"col-class":"w-1/5"},{default:d(()=>[o(f,{modelValue:$.arrival_city,"onUpdate:modelValue":L=>$.arrival_city=L,error:e(n).bookings.$each.$response.$data[g].segments.$each.$data[G].arrival_city,options:e(_).regionsList.filter(L=>{var Y;return(L==null?void 0:L.id)!=((Y=$.departure_city)==null?void 0:Y.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:x.type===e(be)&&G%2!==0,"onEmit:change":L=>v(L,g,G,x)},{option:d(({option:L})=>[o(e(he),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(q,{"col-class":"w-1/5"},{default:d(()=>[o(f,{modelValue:$.segment_class,"onUpdate:modelValue":L=>$.segment_class=L,error:e(n).bookings.$each.$response.$data[g].segments.$each.$data[G].segment_class,options:x.route===e(xt)?e(qo):x.route===e(Ze)?e(go):e(bo),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":p.value,translatable:"",disabled:x.type===e(be)&&G%2!==0,"onEmit:change":L=>m(L,g,G,x)},{option:d(({option:L})=>[o(e(he),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(q,{"col-class":"w-1/5"},{default:d(()=>[o(E,{modelValue:$.date,"onUpdate:modelValue":[L=>$.date=L,L=>$.date=e(ge)(L)],error:e(n).bookings.$each.$response.$data[g].segments.$each.$data[G].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),o(q,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:d(()=>[o(Gl,{modelValue:$.time,"onUpdate:modelValue":L=>$.time=L,error:e(n).bookings.$each.$response.$data[g].segments.$each.$data[G].time,label:"time",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),x.type===e(dt)&&G!==0?(w(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:L=>e(r).actionDeleteRouteLine(g,G)},[o(ce,{icon:e(Fe),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Zl)):ae("",!0)]),_:2},1024)]),_:2},1024)]))),256)),x.type===e(dt)?(w(),T("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:$=>e(r).actionAddRouteLine(g)},[o(ce,{icon:e(Xe),class:"text-primary-500"},null,8,["icon"]),h("span",tn,I(e(l)("add-line")),1)],8,en)):ae("",!0),o(O,null,{default:d(()=>[o(q,{"col-class":"w-full"},{default:d(()=>[o(X,{modelValue:x.passengers,"onUpdate:modelValue":$=>x.passengers=$,options:k.value,error:e(n).bookings.$each.$response.$data[g].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),o(U,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:N},null,8,["icon-left"]),h("div",on,[o(U,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",ln,[o(U,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:u[3]||(u[3]=x=>R(e(ut)))}),o(U,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(r).buttonLoading,onClick:y},null,8,["loading"])])])])}}},pt=ke("sd-extend-business-trip-store",{state:()=>({buttonLoading:!1,userTripUpdateButtonLoading:!1,detailLoading:!1,changingBTDialog:!1,changingBTLoading:!1,changingBTModel:null,tempVerifications:[],tempRegions:[],tempGroupIndex:null,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionGetParentDocumentDetail(c){try{this.detailLoading=!0;const{data:a}=await qe(c);await this.actionAdjustModel(a)}catch{}finally{this.detailLoading=!1}},async actionAdjustModel(c){this.model.__notices=c.notices;const a=Object.values(c.notices.reduce((t,l)=>{const b=l.group_id;return t[b]=t[b]||{group_id:b,items:[]},t[b].items.push(l),t},{}));this.model.__groups=await Promise.all(a.map(async t=>({__users:await Promise.all(t.items.map(async b=>({...await H([],b.user.id,!1),business_trip_id:b.id}))),__notices_to_change:[],group_id:t.group_id})))},async actionAddUsersToExtend(c,a){var _;await wt();const t=this.model.__groups[a].__users_to_extend||[],l=this.model.__notices.find(n=>t.some(p=>p.id===n.user.id&&n.group_id===c.group_id));if(!l)return;const b=this.model.__groups[a];if(Array.isArray(b.__notices_to_change)||this.$set(b,"__notices_to_change",[]),b.__notices_to_change.some(n=>n.id===l.id)){this.actionClearTempModel();return}this.changingBTModel=l,this.tempGroupIndex=a,this.changingBTLoading=!0,this.changingBTDialog=!0,setTimeout(()=>{this.changingBTLoading=!1},2e3);const r=await ko(l.id);this.tempVerifications=(_=r==null?void 0:r.data)==null?void 0:_.verifications.filter(n=>!n.is_sender).map(n=>({...n,is_visited:n.arrived_at||n.left_at}))},actionDeleteNoticeToChange(c,a,t){this.model.__groups[t].__notices_to_change.splice(a,1)},actionFillNoticesToChange(){var c,a,t,l,b,s;(t=(a=(c=this.model)==null?void 0:c.__groups)==null?void 0:a[this.tempGroupIndex])!=null&&t.__notices_to_change?this.model.__groups[this.tempGroupIndex].__notices_to_change.push({...this.changingBTModel,__regions:this.tempVerifications.map(r=>({...r.region})),__start_date:(l=this.changingBTModel)==null?void 0:l.start_date,__end_date:(b=this.changingBTModel)==null?void 0:b.end_date,__sender_company:(s=this.changingBTModel)==null?void 0:s.sender_company}):console.warn("Target group or __notices_to_change array not found.")},async actionCreateDocument(c){const a=nt(c);this.buttonLoading=!0;const{response:t,error:l}=await $e(Ue,a);return t?(this.buttonLoading=!1,await ue().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:a}){const t=await nt(a);try{this.buttonLoading=!0;const{data:l}=await Ve({id:c,body:t});return Promise.resolve(l)}catch(l){return Promise.reject(l)}finally{await ue().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c,a){var t,l,b,s,r,_;try{this.detailLoading=!0,await this.actionGetParentDocumentDetail(a);const{data:n}=await qe(c),p=await kt(n.id);Ie().decreeModel.content=((b=(l=(t=p==null?void 0:p.data)==null?void 0:t.to_composes[0])==null?void 0:l.from_compose)==null?void 0:b.content)||"",Ie().decreeModel.id=((_=(r=(s=p==null?void 0:p.data)==null?void 0:s.to_composes[0])==null?void 0:r.from_compose)==null?void 0:_.id)||null;const k=await Promise.all(this.model.__groups.map(async S=>{const M=n.notices.filter(R=>S.__users.some(N=>{var D;return N.id===((D=R.user)==null?void 0:D.id)&&R.group_id===S.group_id}));return M.length&&(S.__users_to_extend=S.__users,S.__notices_to_change=await Promise.all(M.map(async R=>({user:R.user,__regions:await He("regions",R.locations),__start_date:R.start_date,__end_date:R.end_date,tags:R.tags,__sender_company:R.sender_company,business_trip_id:R.id})))),S}));this.model.__groups=k.filter(S=>S.__users_to_extend&&S.__users_to_extend.length>0),this.model.__curator=await Le([],n.curator.id,!1),this.model.__signers=await H(n.signers),this.model.__approvers=await H(n.approvers),this.model.short_description=n.short_description,this.model.content=n.content}catch(n){return console.error(n),Promise.reject(n)}finally{this.detailLoading=!1}},async actionUpdateUserTrip(){this.actionFillNoticesToChange(),this.actionClearTempModel()},actionResetBTModel(){this.model={approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]}},actionClearTempModel(){this.changingBTDialog=!1,this.changingBTLoading=!1,this.changingBTModel=null,this.tempVerifications=[],this.tempRegions=[],this.model.__groups[this.tempGroupIndex].__users_to_extend=[]},actionClearUserToExtend(){const c=this.model.__groups[this.tempGroupIndex].__users_to_extend.findIndex(a=>{var t,l;return a.id===((l=(t=this.changingBTModel)==null?void 0:t.user)==null?void 0:l.id)});this.model.__groups[this.tempGroupIndex].__users_to_extend.splice(c,1)}}}),rn={class:"decree-component"},an={class:"flex items-center justify-between mt-10"},sn={class:"flex items-center gap-x-1"},St={__name:"Decree",props:{formType:{type:String,default:z}},setup(c,{expose:a}){const t=c,l=me(),b=pe(),s=Ie(),r=pt(),_=oe(s.decreeRules,s.decreeModel),{t:n}=ne(),p=ie(),k=ue(),S=Q(!1),M=te(()=>({...l.params.document_sub_type===Z.EXTEND_BUSINESS_TRIP_NOTICE?r.model:s.model,bookings:s.booking_model.bookings,trip_plans:s.trip_plan_model.trip_plans,decree_content:s.decreeModel.content})),R=async y=>{await s.actionStepClick(b,l,y)},N=y=>{s.decreeModel.__files=[],y.forEach(i=>{s.decreeModel.__files.push(i)})},D=async()=>{var i,u,f,q;if(!await _.value.$validate()){j(null,n("fill-required-fields"),B.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(u=(i=s.model)==null?void 0:i.__curator)==null?void 0:u.user_id,s.decreeModel.journal=se.ORDERS_PROTOCOLS,s.decreeModel.company=p.currentUser.company.id,s.decreeModel.sender=(q=(f=p==null?void 0:p.currentUser)==null?void 0:f.top_level_department)==null?void 0:q.id,s.decreeModel.document_type=ee.DECREE,s.decreeModel.document_sub_type=l.params.document_sub_type===Z.EXTEND_BUSINESS_TRIP_NOTICE?Z.EXTEND_BUSINESS_TRIP_DECREE:Z.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,S.value=!0},v=async(y,i)=>{try{await s.actionUpdateDocument({id:i,body:{...s.decreeModel,trip_notice_id:y}}),await k.actionCountList(),j(null,n("successfully-saved"),B.SUCCESS)}catch{}},m=async()=>{var i;let y=null;t.formType===z&&l.query.notice_id?y=l.query.notice_id:t.formType===Se&&l.params.id&&(y=l.params.id);try{await v(y,(i=s.decreeModel)==null?void 0:i.id),await b.replace({name:Me,params:{id:y,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type},query:{parent_id:l.query.parent_id}})}catch{}};return a({stepClick:R}),(y,i)=>{const u=De;return w(),T("div",rn,[o(Ee,{modelValue:e(_).content.$model,"onUpdate:modelValue":i[0]||(i[0]=f=>e(_).content.$model=f),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"]),h("div",an,[o(u,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",sn,[o(u,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:i[1]||(i[1]=f=>R(e(Ke)))}),o(u,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:D})])]),o(Ne,{modelValue:S.value,"onUpdate:modelValue":i[2]||(i[2]=f=>S.value=f),"send-button-loading":e(s).buttonLoading,"onEmit:send":m,"content-classes":"p-0"},{content:d(()=>[o(e(io),{"compose-model":M.value,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},dn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},cn={class:"px-6 py-4"},ba={__name:"BusinessTripForm",props:{formType:{type:String,default:z}},setup(c){const a=c,{t}=ne(),l=me(),b=pe(),s=ie(),r=Ie();oe(r.rules,r.model),oe(r.trip_plan_rules,r.trip_plan_model),oe(r.booking_model_rules,r.booking_model),oe(r.decreeRules,r.decreeModel);const _=Q(null),n=te(()=>a.formType===z?"create-business-trip-notice":"update-business-trip-notice"),p=te(()=>{switch(l.query.step){case Ke:return ht;case Qe:return St;case ut:return zl;case $t:return nn;default:return ht}}),k=async N=>{var v;const D=e(_);((v=l.query)==null?void 0:v.step)!==N.value&&(await D.stepClick(N.value),N.value,Qe)},S=async()=>{l.query.step||await b.replace({query:{...l.query,step:Ke}}),r.stepperItems.forEach(N=>N.active=N.value===l.query.step)},M=async()=>{var v,m,y,i,u,f,q,E,O,U,x,g;const N=le(r.model.__approvers),D=le(r.model.__signers);if(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.bookings=[],r.model.trip_plans=[],r.model.approvers=N,r.model.signers=D,r.model.curator=(m=(v=r.model)==null?void 0:v.__curator)==null?void 0:m.user_id,r.model.journal=se.INNER,r.model.company=(i=(y=s.currentUser)==null?void 0:y.company)==null?void 0:i.id,r.model.__groups.forEach(($,G)=>{const L=G+1;r.model.notices.push(...$.__users.map(Y=>{var J,P,F;return{start_date:$.__start_date,end_date:$.__end_date,user:Y.id,company:(P=(J=s.currentUser)==null?void 0:J.company)==null?void 0:P.id,sender_company:(F=$.__company)==null?void 0:F.id,regions:$.__regions.map(A=>A.id),tags:$.__tags.map(A=>({id:A.id})),route:$.__route,group_id:L,...Y.business_trip_id?{id:Y.business_trip_id}:{}}}))}),r.model.sender=(f=(u=s==null?void 0:s.currentUser)==null?void 0:u.top_level_department)==null?void 0:f.id,r.model.files=r.model.__files.map($=>({id:$.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,a.formType===z&&l.query.notice_id)try{await r.actionUpdateDocument({id:l.query.notice_id,body:r.model})}catch{}else if(a.formType===z)try{const{data:$}=await r.actionCreateDocument(r.model),G={approvers:[],signers:[],curator:(E=(q=r.model)==null?void 0:q.__curator)==null?void 0:E.user_id,journal:se.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:(U=(O=s==null?void 0:s.currentUser)==null?void 0:O.top_level_department)==null?void 0:U.id,document_type:ee.DECREE,document_sub_type:Z.BUSINESS_TRIP_DECREE_V2,short_description:(x=r.model)==null?void 0:x.short_description,trip_notice_id:$.id,content:$.content};r.decreeModel.content=$.content;try{const L=await r.actionCreateDocument(G);r.decreeModel.id=(g=L==null?void 0:L.data)==null?void 0:g.id,await b.replace({query:{...l.query,notice_id:$.id}}),await r.actionGetDocumentDetailForUpdate($.id)}catch{}}catch{}else if(a.formType===Se&&l.params.id)try{await r.actionUpdateDocument({id:l.params.id,body:r.model})}catch{}},R=async()=>{try{await M(),await j(null,t("notice-saved-successfully"),B.SUCCESS)}catch{}};return Je(async()=>{await S(),a.formType===Se?await r.actionGetDocumentDetailForUpdate(l.params.id):l.query.notice_id&&await r.actionGetDocumentDetailForUpdate(l.query.notice_id)}),Re(()=>{r.actionResetBTModel()}),(N,D)=>{const v=we,m=Ct;return w(),T("div",{class:Oe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(r).detailLoading}])},[e(r).detailLoading?(w(),W(v,{key:0})):(w(),W(e(xe),{key:1,title:n.value},{content:d(()=>[h("div",dn,[o(m,{items:e(r).stepperItems,"onEmit:stepClick":k},null,8,["items"])]),h("div",cn,[(w(),W(Gt(p.value),{"form-type":c.formType,ref_key:"childComponent",ref:_,"onEmit:onValidateAndSend":R},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},un=ke("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)},__groups:{$each:V.forEach({__users:{required:V.withMessage("Поле не должен быть пустым",C)},__tags:{required:V.withMessage("Поле не должен быть пустым",C)},__regions:{required:V.withMessage("Поле не должен быть пустым",C)},__start_date:{required:V.withMessage("Поле не должен быть пустым",C)},__end_date:{required:V.withMessage("Поле не должен быть пустым",C)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:V.forEach({users:{required:V.withMessage("Поле не должен быть пустым",C)},text:{required:V.withMessage("Поле не должен быть пустым",C)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(c){this.model.__groups.splice(c,1)},actionDeleteWorkPlanRow(c){this.trip_plan_model.trip_plans.splice(c,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:c,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"flex justify-between"},_n={class:"text-base text-primary-900 font-semibold mb-1"},fn=["onClick"],qn={class:"flex w-full gap-x-4"},gn={class:"flex flex-col gap-y-3"},bn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},hn={class:"flex justify-between"},yn={class:"text-base text-primary-900 font-semibold mb-1"},wn=["onClick"],vn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},kn={class:"text-base text-primary-900 font-semibold mb-2"},ha={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:z}},setup(c){const a=c,t=Q(!1),l=Q(!1),{t:b}=ne(),s=me(),r=pe(),_=ie(),n=un(),p=ue();ye();const k=oe(n.rules,n.model),S=oe(n.trip_plan_rules,n.trip_plan_model),M=te(()=>a.formType===z?"create-decree":"update-decree"),R=te(()=>{const q=new Set;return n.model.__groups.reduce((E,O)=>O.__users&&Array.isArray(O.__users)?E.concat(O.__users):E,[]).filter(E=>q.has(E.id)?!1:(q.add(E.id),!0))}),N=async()=>{var U,x,g,$,G,L;if(t.value=!0,!await k.value.$validate()){j(null,b("fill-required-fields"),B.WARNING);return}const E=le(n.model.__approvers),O=le(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=E,n.model.signers=O,n.model.curator=(x=(U=n.model)==null?void 0:U.__curator)==null?void 0:x.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=($=(g=_.currentUser)==null?void 0:g.company)==null?void 0:$.id,n.model.__groups.forEach((Y,J)=>{const P=J+1;n.model.notices.push(...Y.__users.map(F=>{var A,Pe;return{start_date:Y.__start_date,end_date:Y.__end_date,user:F.id,company:(Pe=(A=_.currentUser)==null?void 0:A.company)==null?void 0:Pe.id,regions:Y.__regions.map(Ce=>Ce.id),tags:Y.__tags.map(Ce=>({id:Ce.id})),group_id:P}}))}),n.model.sender=(L=(G=_==null?void 0:_.currentUser)==null?void 0:G.top_level_department)==null?void 0:L.id,n.model.files=n.model.__files.map(Y=>({id:Y.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(Y=>({users:Y.users.map(J=>({id:J.id})),text:Y.text})),l.value=!0},D=()=>{},v=()=>{n.actionAddGroupBlock()},m=()=>{n.actionAddWorkPlanRow(),t.value=!1},y=q=>{n.model.__files=[],q.forEach(E=>{n.model.__files.push(E)})},i=async()=>{const q=await n.actionCreateDocument(n.model);await p.actionCountList(),q?(l.value=!1,j(null,b("document-sent"),B.SUCCESS),await r.replace({name:Be,query:{document_type:s.params.document_type}})):j(null,b("error-occurred"),B.ERROR)},u=async()=>{await n.actionUpdateDocument({id:s.params.id,body:n.model}),await p.actionCountList(),j(null,b("changed"),B.SUCCESS),await r.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},f=()=>{a.formType===z?i():u()};return(q,E)=>{const O=we,U=fe,x=Ae,g=ce,$=at,G=We,L=_e,Y=De,J=Vt;return e(n).detailLoading?(w(),W(O,{key:0})):(w(),T(K,{key:1},[o(e(xe),{title:M.value},{content:d(()=>[o(je,{"onEmit:preview":N,"onEmit:clearForm":D},{default:d(()=>[o(L,null,{default:d(()=>[o(U,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":E[0]||(E[0]=P=>e(k).__curator.$model=P),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(U,{"col-class":"w-1/2"},{default:d(()=>[o(x,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":E[1]||(E[1]=P=>e(k).short_description.$model=P),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(U,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[(w(!0),T(K,null,de(e(n).model.__groups,(P,F)=>(w(),T("div",pn,[h("div",mn,[h("span",_n,I(e(b)("group"))+"-"+I(F+1),1),F!==0?(w(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:A=>e(n).actionDeleteGroupBlock(F)},[o(g,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,fn)):ae("",!0)]),o(L,null,{default:d(()=>[o(U,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:P.__users,"onUpdate:modelValue":A=>P.__users=A,error:e(k).__groups.$each.$response.$data[F].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(U,{"col-class":"w-1/2"},{default:d(()=>[o($,{modelValue:P.__regions,"onUpdate:modelValue":A=>P.__regions=A,error:e(k).__groups.$each.$response.$data[F].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":t.value},{chip:d(({value:A})=>[re(I(A.name),1)]),option:d(({value:A})=>[o(e(he),{title:A.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(U,{"col-class":"w-1/2"},{default:d(()=>[o($,{modelValue:P.__tags,"onUpdate:modelValue":A=>P.__tags=A,error:e(k).__groups.$each.$response.$data[F].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":t.value},{chip:d(({value:A})=>[re(I(A.name),1)]),option:d(({value:A})=>[o(e(he),{title:A.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),o(U,{"col-class":"w-1/2"},{default:d(()=>[h("div",qn,[o(G,{modelValue:P.__start_date,"onUpdate:modelValue":[A=>P.__start_date=A,A=>P.__start_date=e(ge)(A)],error:e(k).__groups.$each.$response.$data[F].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(G,{modelValue:P.__end_date,"onUpdate:modelValue":[A=>P.__end_date=A,A=>P.__end_date=e(ge)(A)],error:e(k).__groups.$each.$response.$data[F].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(Y,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:v},null,8,["icon-left"])]),_:1})]),_:1}),h("div",gn,[(w(!0),T(K,null,de(e(n).trip_plan_model.trip_plans,(P,F)=>(w(),T("div",bn,[h("div",hn,[h("span",yn,I(e(b)("plan"))+"-"+I(F+1),1),F!==0?(w(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:A=>e(n).actionDeleteWorkPlanRow(F)},[o(g,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,wn)):ae("",!0)]),o(L,null,{default:d(()=>[o(U,{"col-class":"w-1/2"},{default:d(()=>[o(J,{modelValue:P.text,"onUpdate:modelValue":A=>P.text=A,error:e(S).trip_plans.$each.$response.$data[F].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(U,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:P.users,"onUpdate:modelValue":A=>P.users=A,options:R.value,error:e(S).trip_plans.$each.$response.$data[F].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(Y,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:m},null,8,["icon-left"]),o(L,null,{default:d(()=>[o(U,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":E[2]||(E[2]=P=>e(n).model.__approvers=P),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(U,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":E[3]||(E[3]=P=>e(k).__signers.$model=P),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(U,{"col-class":"w-full"},{default:d(()=>[h("div",vn,[h("div",kn,I(e(b)("decree")),1),o(Ee,{modelValue:e(k).content.$model,"onUpdate:modelValue":E[4]||(E[4]=P=>e(k).content.$model=P),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":y},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:l.value,"onUpdate:modelValue":E[5]||(E[5]=P=>l.value=P),"send-button-loading":e(n).buttonLoading,"onEmit:send":f},{content:d(()=>[o(e(vt),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},xn={class:"flex gap-x-[6px] items-center px-2 py-1 bg-greyscale-50 rounded-[90px] border-b border-greyscale-200"},$n={key:0,class:"w-6 h-6 rounded-full flex items-center justify-center text-xs text-white bg-primary-500"},Vn={class:"text-greyscale-900 text-sm font-medium"},lt={__name:"BaseChip",props:{item:{type:Object,default:()=>({})},label:{type:String,default:"Example"},type:{type:String,default:"user",validator(c){return["user","location","other"].includes(c)}},clearable:{type:Boolean,default:!1}},emits:["emit:clear"],setup(c,{emit:a}){const t=l=>{a("emit:clear",l)};return(l,b)=>(w(),T("div",xn,[c.type==="user"?(w(),T("div",$n,I(c.label[0]),1)):c.type==="location"?(w(),W(ce,{key:1,icon:e(Wt),class:"text-greyscale-400"},null,8,["icon"])):ae("",!0),h("div",Vn,I(c.label),1),c.clearable?(w(),T("div",{key:2,class:"flex justify-center items-center w-5 h-5 rounded-full bg-critic-500 cursor-pointer",onClick:b[0]||(b[0]=s=>t(c.item))},[o(ce,{icon:e(Yt),class:"text-white"},null,8,["icon"])])):ae("",!0)]))}},Un={key:0,class:"flex flex-col gap-y-5"},En={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Cn={class:"text-sm font-medium text-greyscale-500"},Sn={class:"text-green-900"},Tn=h("br",null,null,-1),Ln={class:"flex flex-col gap-y-2"},Dn={class:"text-sm font-medium text-greyscale-500"},Rn=h("span",{class:"text-red-500"},"*",-1),Mn={class:"flex flex-wrap gap-3"},Nn={class:"flex flex-col gap-y-2"},Pn={key:1,class:"flex flex-col gap-y-5"},On={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},In={class:"text-sm font-medium text-greyscale-500"},An={class:"text-green-900"},Bn={__name:"ChangingBusinessTripModal",setup(c){const a=pt(),{t}=ne(),l=te(()=>{var n;return["reporting","closed"].includes((n=a==null?void 0:a.changingBTModel)==null?void 0:n.trip_status)}),b=()=>{var p;if(!(((p=a.tempVerifications)==null?void 0:p.length)>0)){j(null,"Kamida bitta hudud qo'shing!",B.WARNING);return}a.actionUpdateUserTrip()},s=()=>{a.actionClearTempModel()},r=(n,p)=>{a.tempVerifications.splice(p,1)},_=n=>{n.value.forEach(p=>{a.tempVerifications.some(S=>S.region.id===p.id)||a.tempVerifications.push({region:p,is_visited:!1}),a.tempRegions=[]})};return(n,p)=>{const k=we,S=at,M=We,R=De,N=Ut;return w(),W(N,{modelValue:e(a).changingBTDialog,"onUpdate:modelValue":p[4]||(p[4]=D=>e(a).changingBTDialog=D),label:"confirm","max-width":"max-w-[631px]",closable:!1},Ht({content:d(()=>{var D,v,m,y;return[e(a).changingBTLoading?(w(),W(k,{key:0,class:"my-16"})):(w(),T(K,{key:1},[l.value?(w(),T("div",Pn,[h("div",On,[o(ce,{icon:e(st),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),h("div",In,[h("span",An,I((y=(m=e(a).changingBTModel)==null?void 0:m.user)==null?void 0:y.full_name),1),re("ga tegishli bo'lgan xizmat safari yakunlangan! ")])])])):(w(),T("div",Un,[h("div",En,[o(ce,{icon:e(st),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),h("div",Cn,[re("Siz rostdan ham "),h("span",Sn,I((v=(D=e(a).changingBTModel)==null?void 0:D.user)==null?void 0:v.full_name),1),re("ga tegishli bo'lgan xizmat safarini o'zgartirmoqchimisiz? "),Tn,re(" Bunda xizmat safari bilan vaqtinchalik amaliyot bajarish to'xtatiladi! ")])]),h("div",Ln,[h("span",Dn,[re(I(e(t)("trip-place"))+" ",1),Rn]),h("div",Mn,[(w(!0),T(K,null,de(e(a).tempVerifications,(i,u)=>{var f;return w(),W(lt,{key:i.id,label:(f=i==null?void 0:i.region)==null?void 0:f.name_uz,clearable:!i.is_visited,type:"location",class:"w-fit","onEmit:clear":q=>r(i,u)},null,8,["label","clearable","onEmit:clear"])}),128))]),o(S,{modelValue:e(a).tempRegions,"onUpdate:modelValue":p[0]||(p[0]=i=>e(a).tempRegions=i),"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",type:"department",placeholder:"add-trip-place",required:"","onEmit:change":p[1]||(p[1]=i=>_(i))},{chip:d(({value:i})=>[re(I(i.name),1)]),option:d(({value:i})=>[o(e(he),{title:i.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue"])]),h("div",Nn,[o(M,{modelValue:e(a).changingBTModel.end_date,"onUpdate:modelValue":[p[2]||(p[2]=i=>e(a).changingBTModel.end_date=i),p[3]||(p[3]=i=>e(a).changingBTModel.end_date=e(ge)(i))],"min-date":new Date(e(a).changingBTModel.start_date),required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","min-date"])])]))],64))]}),_:2},[e(a).changingBTLoading?void 0:{name:"footer",fn:d(()=>[o(R,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:s}),l.value?ae("",!0):(w(),W(R,{key:0,loading:e(a).userTripUpdateButtonLoading,label:"update",rounded:"",shadow:"",type:"button",onClick:b},null,8,["loading"]))]),key:"0"}]),1032,["modelValue"])}}},jn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},zn={class:"px-6 py-4"},Fn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Gn={class:"flex justify-between"},Wn={class:"text-base text-primary-900 font-semibold mb-1"},Yn={class:"text-sm text-greyscale-500 font-medium"},Hn={class:"text-sm text-greyscale-500 font-medium"},Xn={class:"flex flex-wrap gap-3 mt-1"},Kn={class:"flex justify-between items-center"},Qn={class:"text-sm text-greyscale-500 font-medium"},Jn=["onClick"],Zn={class:"text-base text-primary-900 font-semibold mb-2"},er={class:"flex items-center justify-between"},ya={__name:"ExtendBusinessTripForm",props:{formType:{type:String,default:z}},setup(c){const a=c,t=pt(),l=Ie(),b=ie(),s=oe(t.rules,t.model),r=me(),_=pe(),{t:n}=ne(),p=Q(!1);Q(!1);const k=te(()=>{const m=a.formType===z;return"trip-notice-for-change"}),S=async()=>{var u,f,q,E,O,U,x,g,$,G,L,Y,J;const m=le(t.model.__approvers),y=le(t.model.__signers);t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.approvers=m,t.model.signers=y,t.model.curator=(f=(u=t.model)==null?void 0:u.__curator)==null?void 0:f.user_id,t.model.journal=se.INNER,t.model.company=(E=(q=b.currentUser)==null?void 0:q.company)==null?void 0:E.id;let i=1;if(t.model.__groups.forEach(P=>{Array.isArray(P.__notices_to_change)&&t.model.notices.push(...P.__notices_to_change.map(F=>{var A,Pe,Ce;return{...a.formType===Se?{id:F.id}:{},start_date:F.__start_date,end_date:F.__end_date,user:F.user.id,company:(Pe=(A=b.currentUser)==null?void 0:A.company)==null?void 0:Pe.id,sender_company:(Ce=F.sender_company)==null?void 0:Ce.id,regions:F.__regions.map(Ye=>Ye.id),tags:F.tags.map(Ye=>({id:Ye.id})),route:F.route,group_id:i++,trip_type:"changed_local",parent:F.id,...F.business_trip_id?{id:F.business_trip_id}:{}}}))}),t.model.sender=(U=(O=b==null?void 0:b.currentUser)==null?void 0:O.top_level_department)==null?void 0:U.id,t.model.files=t.model.__files.map(P=>({id:P.id})),t.model.document_type=r.params.document_type,t.model.document_sub_type=r.params.document_sub_type,t.model.trip_notice_id=((x=r.query)==null?void 0:x.parent_id)||null,a.formType===z&&r.query.notice_id)try{await t.actionUpdateDocument({id:r.query.notice_id,body:t.model}),await j(null,n("notice-saved-successfully"),B.SUCCESS)}catch{}else if(a.formType===z)try{const{data:P}=await t.actionCreateDocument(t.model),F={approvers:[],signers:[],curator:($=(g=t.model)==null?void 0:g.__curator)==null?void 0:$.user_id,journal:se.ORDERS_PROTOCOLS,company:b.currentUser.company.id,sender:(L=(G=b==null?void 0:b.currentUser)==null?void 0:G.top_level_department)==null?void 0:L.id,document_type:ee.DECREE,document_sub_type:Z.EXTEND_BUSINESS_TRIP_DECREE,short_description:(Y=t.model)==null?void 0:Y.short_description,trip_notice_id:P.id,content:P.content};l.decreeModel.content=P.content;try{const A=await t.actionCreateDocument(F);l.decreeModel.id=(J=A==null?void 0:A.data)==null?void 0:J.id,await _.replace({query:{...r.query,notice_id:P.id,parent_id:r.query.parent_id}}),await j(null,n("notice-saved-successfully"),B.SUCCESS),await t.actionGetDocumentDetailForUpdate(P.id,r.query.parent_id)}catch(A){console.error(A)}}catch(P){console.error(P)}else if(a.formType===Se&&r.params.id)try{await t.actionUpdateDocument({id:r.params.id,body:t.model}),await j(null,n("notice-saved-successfully"),B.SUCCESS)}catch{}},M=m=>{t.model.__files=[],m.forEach(y=>{t.model.__files.push(y)})},R=async m=>{var y;try{((y=r.query)==null?void 0:y.step)!==m.value&&(m.value===Qe&&(await N(),await S()),await l.actionStepClick(_,r,m.value))}catch(i){console.error(i)}},N=async()=>{const m=await s.value.$validate();if(p.value=!0,!m)return j(null,n("fill-required-fields"),B.WARNING),Promise.reject();if(!t.model.__groups.some(i=>Array.isArray(i.__notices_to_change)&&i.__notices_to_change.length>0))return j(null,"Kamida bitta xodim o'zgartirish uchun tanlanishi kerak!",B.WARNING),Promise.reject()},D=async()=>{r.query.step||await _.replace({query:{...r.query,step:Ke}}),l.stepperItems.forEach(m=>m.active=m.value===r.query.step)},v=(m,y,i)=>{t.actionDeleteNoticeToChange(m,y,i)};return tt(async()=>{await D()}),Je(async()=>{var m,y,i,u,f,q;a.formType===z&&((m=r.query)!=null&&m.notice_id)&&((y=r.query)!=null&&y.parent_id)?await t.actionGetDocumentDetailForUpdate((i=r.query)==null?void 0:i.notice_id,(u=r.query)==null?void 0:u.parent_id):a.formType===z&&((f=r.query)!=null&&f.parent_id)?await t.actionGetParentDocumentDetail(r.query.parent_id):a.formType===Se&&await t.actionGetDocumentDetailForUpdate(r.params.id,(q=r.query)==null?void 0:q.parent_id)}),Re(()=>{t.actionResetBTModel()}),(m,y)=>{const i=we,u=Ct,f=fe,q=Ae,E=ce,O=_e,U=De;return w(),T("div",{class:Oe(["extend-business-trip-form",{"h-[calc(100vh-200px)]":e(t).detailLoading}])},[e(t).detailLoading?(w(),W(i,{key:0})):(w(),W(e(xe),{key:1,title:k.value},{content:d(()=>{var x,g;return[h("div",jn,[o(u,{items:e(l).stepperItems,"onEmit:stepClick":R},null,8,["items"])]),h("div",zn,[((x=e(r).query)==null?void 0:x.step)==="trip_info"?(w(),T(K,{key:0},[o(O,null,{default:d(()=>[o(f,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":y[0]||(y[0]=$=>e(s).__curator.$model=$),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(q,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":y[1]||(y[1]=$=>e(s).short_description.$model=$),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[(w(!0),T(K,null,de(e(t).model.__groups,($,G)=>(w(),T("div",Fn,[h("div",Gn,[h("span",Wn,I(e(n)("group"))+"-"+I(G+1),1)]),o(O,null,{default:d(()=>[o(f,{"col-class":"w-full"},{default:d(()=>[o(X,{modelValue:$.__users_to_extend,"onUpdate:modelValue":[L=>$.__users_to_extend=L,L=>e(t).actionAddUsersToExtend($,G)],label:"select-employees-in-business-trip",options:$.__users,searchable:!1,placeholder:"select-employees","show-nested-error":p.value,disabled:c.formType===e(Se)||e(r).query.notice_id},null,8,["modelValue","onUpdate:modelValue","options","show-nested-error","disabled"])]),_:2},1024),o(f,{"col-class":"w-full"},{default:d(()=>[(w(!0),T(K,null,de($.__notices_to_change,(L,Y)=>(w(),W(O,null,{default:d(()=>[o(f,{"col-class":"w-1/3"},{default:d(()=>{var J;return[h("span",Yn,I(e(n)("employees-in-business-trip")),1),o(lt,{label:(J=L.user)==null?void 0:J.full_name,class:"w-fit mt-1"},null,8,["label"])]}),_:2},1024),o(f,{"col-class":"w-1/3"},{default:d(()=>[h("span",Hn,I(e(n)("trip-place")),1),h("div",Xn,[(w(!0),T(K,null,de(L.__regions,J=>(w(),W(lt,{key:L.id,label:J.name_uz,type:"location",class:"w-fit"},null,8,["label"]))),128))])]),_:2},1024),o(f,{"col-class":"w-1/3"},{default:d(()=>[h("div",Kn,[h("div",null,[h("span",Qn,I(e(n)("end-date")),1),o(lt,{label:L.__end_date,type:"other",class:"w-fit mt-1"},null,8,["label"])]),h("div",{class:"cursor-pointer",onClick:J=>v(L,Y,G)},[o(E,{icon:e(Fe),class:"text-critic-500"},null,8,["icon"])],8,Jn)])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]))),256))]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":y[2]||(y[2]=$=>e(t).model.__approvers=$),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(X,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":y[3]||(y[3]=$=>e(s).__signers.$model=$),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:d(()=>[h("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(t).model.content?"border-critic-500":"border-greyscale-200"])},[h("div",Zn,I(e(n)("notice")),1),o(Ee,{modelValue:e(s).content.$model,"onUpdate:modelValue":y[4]||(y[4]=$=>e(s).content.$model=$),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),h("div",er,[o(U,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(U,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:y[5]||(y[5]=$=>R({value:e(Qe)}))})])],64)):((g=e(r).query)==null?void 0:g.step)==="decree"?(w(),W(e(St),{key:1,"form-type":c.formType},null,8,["form-type"])):ae("",!0)])]}),_:1},8,["title"])),o(Bn,{modelValue:e(t).changingBTDialog,"onUpdate:modelValue":y[6]||(y[6]=x=>e(t).changingBTDialog=x)},null,8,["modelValue"])],2)}}};export{pa as _,ma as a,ga as b,ua as c,_a as d,fa as e,qa as f,ba as g,ha as h,ya as i};
