import{_ as _e}from"./BaseRow.c37374f5.1283.js";import{_ as Be}from"./BaseInput.a2962c27.1283.js";import{_ as fe}from"./BaseCol.0a40a239.1283.js";import{v as Z,bb as nt,a1 as et,o as y,c as C,i as l,z as c,h as e,b8 as Ze,d as ee,du as Fe,a as b,t as B,F as J,e as de,a3 as re,g as te,f as G,B as Rt,dz as Lt,bj as Dt,n as Oe,r as yt,G as Le,as as xe,cN as ae,cO as Y,cl as se,u as ne,b as ue,ao as pe,be as De,a5 as A,ac as we,a8 as wt,cY as Qe,dA as Mt,_ as me,dB as Nt,dC as It,dD as Ot,dE as Pt,dF as Bt,$ as At,dG as jt,dH as Ft,aX as vt,bt as Ye,c1 as He,dI as zt,ds as at,E as Gt,cI as Wt,cR as Yt,aE as Ht}from"./index.9f47e17f.8663.js";import{c as E,r as S,u as oe}from"./index.a0a937b3.1283.js";import{_ as Xt,a as Kt}from"./BranchMultiSelect.c3b55a1a.1283.js";import{j as Qt,k as Jt,l as Zt,_ as $e,a as eo,h as to,g as oo,b as lo,c as no,d as ro,e as kt,i as ao,m as so,f as io}from"./BasePOA.3a475f7e.1283.js";import"./BaseTabMenu.5b49ef79.1283.js";import"./dialog.esm.3f0d8f83.1283.js";import"./tabpanel.esm.c627ce43.1283.js";import"./FileSaver.min.b905712d.1283.js";import{e as co,u as ie,a4 as _t,O as Ve,s as Te,a2 as H,a5 as uo,a6 as ze,a7 as le,d as j,a8 as Re,a9 as ft,aa as st,ab as We,X as lt}from"./axios.config.d9e7634a.1283.js";import"./BaseTabView.0499fb02.1283.js";import"./FileTabs.bd6753ca.1283.js";import{_ as X}from"./UserMultiSelect.8040fec8.1283.js";import{u as ye}from"./common.234f9bea.1283.js";import{u as ce}from"./count.store.67a67efa.1283.js";import{u as dt,b as Ee,c as ge,d as Ue,e as po,f as xt}from"./index.store.2e5de6e1.1283.js";import{d as gt,e as Ae,c as Me,f as be,B as Je,g as Xe,h as Ke,i as mo,j as $t,M as it,O as _o,T as fo,k as ct,l as Vt,C as go,P as qo,m as bo}from"./index.3493ff30.1283.js";import{F,a as Ce}from"./constants.50c90617.1283.js";import{_ as tt}from"./BaseDropdown.5d151f06.1283.js";import{_ as Ge}from"./BaseCalendar.ee80b296.1283.js";import{_ as rt}from"./BaseMultiSelect.0440cdff.1283.js";import{f as ho,a as qe}from"./formatDate.3b67631d.1283.js";import{Q as qt}from"./qrcode.vue.esm.6e3d67d8.1283.js";import"./divider.esm.b690ee50.1283.js";import"./dayjs.min.58f4ab63.1283.js";/* empty css                                                                                         */import{c as yo}from"./Dropdown.b0df51b0.1283.js";import"./menu.esm.066016f9.1283.js";/* empty css                                                      */import"./avatar.esm.9dbf6a24.1283.js";/* empty css                                                      */import"./businessTrip.store.45ccefa1.1283.js";/* empty css                                                            */import"./accordiontab.esm.5e468d1d.1283.js";import"./common.store.633543ec.1283.js";import{_ as he}from"./WithRadio.321d5e82.1283.js";import"./radiobutton.esm.e844be9d.1283.js";import"./checkbox.esm.98705134.1283.js";import{_ as Et}from"./ShortDescription.436f8d4f.1283.js";import{_ as bt}from"./BaseBrickRadio.f6b56d83.1283.js";import{_ as wo}from"./BaseLabel.dcb8c418.1283.js";import{K as vo}from"./main.ecd40ede.1283.js";import{a as ko}from"./index.28d122a8.1283.js";import{_ as xo}from"./WithSelectable.c7b8d8d1.1283.js";import{_ as $o}from"./BaseBrickTab.bcf22559.1283.js";import{_ as Vo}from"./BaseFileUpload.9eef9cc3.1283.js";import{_ as Eo}from"./BaseFroalaEditor.7ac6d0b0.1283.js";import"./BaseCalendar.vue_vue_type_style_index_0_lang.7d9f6279.1283.js";import"./multiselect.esm.74047fda.1283.js";/* empty css                                                             */import"./dropdown.esm.444d4466.1283.js";/* empty css                                                          */import"./textarea.esm.7756ba91.1283.js";import"./overlaypanel.esm.2238afad.1283.js";/* empty css                                                              */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang.fb2e019b.1283.js";/* empty css                                                                            */import"./review.store.4bcfcbcc.1283.js";/* empty css                                                       */import{_ as Ut}from"./BaseDialog.83764b76.1283.js";const Uo={class:"user-select"},ke={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(u,{emit:a}){const t=u,o=Z([]),q=nt(t,"modelValue"),s=async r=>{let{data:m}=await co.get(`${t.apiUrl}/`,r);m.hasOwnProperty("results")?o.value=m.results:o.value=m};return et(async()=>{await s(t.apiParams)}),(r,m)=>(y(),C("div",Uo,[l(tt,{modelValue:e(q),"onUpdate:modelValue":m[0]||(m[0]=n=>Ze(q)?q.value=n:null),options:o.value,"onUpdate:options":m[1]||(m[1]=n=>o.value=n),error:t.error,"api-url":t.apiUrl,"api-params":t.apiParams,"option-label":"full_name",label:t.label,placeholder:t.placeholder,required:t.required,searchable:"","onEmit:change":m[2]||(m[2]=n=>a("emit:change",n))},{option:c(({option:n})=>[l(e(xo),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},So={class:"business-trip-decree-template-view letter-template"},Co={class:"flex flex-col text-sm font-medium mt-4"},To=b("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),Ro=["innerHTML"],Lo=["innerHTML"],Do={class:"employees-table text-sm mt-4"},Mo={class:"w-full"},No=b("tr",{class:"text-center"},[b("td",{class:"border-2 p-1"},"№"),b("td",{class:"border-2 p-1"},"F.I.SH"),b("td",{class:"border-2 p-1"},"Departament va lavozim"),b("td",{class:"border-2 p-1"},"Yo'nalish"),b("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Io={class:"text-center"},Oo={class:"border-2 p-1"},Po={class:"border-2 p-1"},Bo={class:"border-2 p-1"},Ao=b("br",null,null,-1),jo={class:"border-2 p-1"},Fo={class:"flex flex-col gap-y-1"},zo={key:0},Go={class:"border-2 p-1 w-[100px]"},Wo=b("br",null,null,-1),Yo={class:"indent-8 mt-2 text-sm text-justify"},Ho=b("div",null,"xizmat safariga yuborilsin.",-1),Xo=b("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Ko=b("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),Qo=b("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Jo={key:0},Zo=b("span",{class:"font-semibold"},"Asos: ",-1),el=b("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),tl=b("div",null," O‘zR MKning 287-moddasi; ",-1),ol=b("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),ll={class:"mt-6 pb-2 px-4"},nl={class:"text-sm font-semibold block"},rl={class:"text-sm font-semibold block"},al={class:"text-sm font-semibold block"},sl={class:"text-sm font-semibold block"},il={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(u){const a=u,t=dt(),o=ee(()=>{var m;return a.preview?ie().currentUser:(m=a.composeModel)==null?void 0:m.author}),q=ee(()=>{var m,n,p;return a.preview?(m=a.composeModel)==null?void 0:m.__employees.map(k=>({empFullName:k.full_name,empDepName:k.top_level_department.name,empPositionName:k.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(p=(n=a.composeModel)==null?void 0:n.notices)==null?void 0:p.map(k=>({empFullName:k.user.full_name,empDepName:k.user.top_level_department.name,empPositionName:k.user.position.name,destinations:k.destinations,startDate:k.start_date,endDate:k.end_date}))}),s=ee(()=>{var n,p,k;if(a.preview)return[(n=a.composeModel)==null?void 0:n.__curator];const m=(p=a.composeModel)==null?void 0:p.signers.find(T=>T.type===Fe.BASIC_SIGNER);return m?[m]:[(k=a.composeModel)==null?void 0:k.curator].filter(Boolean)}),r=ee(()=>{var m,n;return a.preview?(m=a.composeModel)==null?void 0:m.__signers:(n=a.composeModel)==null?void 0:n.signers.filter(p=>p.type===Fe.SIGNER)});return(m,n)=>{var T,D,R,M,I,$,_,g;const p=fe,k=_e;return y(),C("div",So,[l(e(Qt)),l(e(Jt),{"dep-name":(D=(T=o.value)==null?void 0:T.top_level_department)==null?void 0:D.name},null,8,["dep-name"]),b("div",Co,[b("span",null," № "+B((R=a.composeModel)==null?void 0:R.register_number),1),b("span",null,B(((M=a.composeModel)==null?void 0:M.register_date)&&e(ho)((I=a.composeModel)==null?void 0:I.register_date)),1)]),To,e(t).historyShow?(y(),C("div",{key:0,class:"text-justify",innerHTML:e(t).historyContent},null,8,Ro)):(y(),C("div",{key:1,class:"text-justify",innerHTML:($=a.composeModel)==null?void 0:$.content},null,8,Lo)),b("div",Do,[b("table",Mo,[No,q.value&&q.value.length?(y(!0),C(J,{key:0},de(q.value,(i,d)=>(y(),C("tr",Io,[b("td",Oo,B(d+1),1),b("td",Po,B(i.empFullName),1),b("td",Bo,[re(B(i.empDepName)+" ",1),Ao,re(" "+B(i.empPositionName),1)]),b("td",jo,[b("div",Fo,[(y(!0),C(J,null,de(i.destinations,(w,f)=>(y(),C("span",null,[re(B(w.name)+" ",1),f!==i.destinations.length-1?(y(),C("span",zo,",")):te("",!0)]))),256))])]),b("td",Go,[re(B(i.startDate)+" ",1),Wo,re(" "+B(i.endDate),1)])]))),256)):te("",!0)])]),b("div",Yo,[Ho,Xo,Ko,Qo,(_=u.composeModel)!=null&&_.trip_notice_register_number?(y(),C("div",Jo,[Zo,re(B((g=u.composeModel)==null?void 0:g.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):te("",!0),el,tl,ol]),b("div",ll,[(y(!0),C(J,null,de(s.value,i=>(y(),G(k,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(p,{"col-class":"w-1/3"},{default:c(()=>[b("span",nl,B(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(y(),G(qt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):te("",!0)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[b("span",rl,B(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(y(!0),C(J,null,de(r.value,i=>(y(),G(k,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(p,{"col-class":"w-1/3"},{default:c(()=>[b("span",al,B(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(y(),G(qt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):te("",!0)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[b("span",sl,B(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),l(e(Zt),{"compose-model":a.composeModel,author:o.value},null,8,["compose-model","author"])])}}};var dl=`
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
`,cl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Rt.extend({name:"editor",css:dl,classes:cl});(function(){try{return window.Quill}catch{return null}})();const Se={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(u){return["froala","tiny"].includes(u)}}},emits:["update:modelValue","emit:fileUpload"],setup(u,{emit:a}){const t=u,o=nt(t,"modelValue"),q=Z([{title:"text",slot:"editor",icon:Lt},{title:"file",slot:"file",icon:Dt}]);return(s,r)=>(y(),G($o,{"tab-panel-list":q.value,"panel-container-class":"px-0"},{editor:c(()=>[u.editor==="froala"?(y(),G(Eo,{key:0,modelValue:e(o),"onUpdate:modelValue":r[0]||(r[0]=m=>Ze(o)?o.value=m:null)},null,8,["modelValue"])):(y(),G(yo,{key:1,modelValue:e(o),"onUpdate:modelValue":r[1]||(r[1]=m=>Ze(o)?o.value=m:null)},null,8,["modelValue"]))]),file:c(()=>[b("div",{class:Oe(t.fileUploadContainerClasses)},[l(Vo,{files:t.files,"onEmit:fileUpload":r[2]||(r[2]=m=>a("emit:fileUpload",m))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ul={class:"flex flex-col justify-between h-full"},pl={class:"px-6 py-4 overflow-y-auto"},ml={class:"actions p-6"},je={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(u,{emit:a}){return(t,o)=>{const q=Le;return y(),C("div",ul,[b("div",pl,[yt(t.$slots,"default")]),b("div",ml,[l(q,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:o[0]||(o[0]=s=>a("emit:clearForm"))}),l(q,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:o[1]||(o[1]=s=>a("emit:preview"))})])])}}},_l=xe("sd-stores-inner",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,document_type:ae.INNER,document_sub_type:Y.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:se.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:E.withMessage("Поле не должен быть пустым",S)},content:{required:E.withMessage("Поле не должен быть пустым",S)},__departments:{required:E.withMessage("Поле не должен быть пустым",S)},__approvers:{},__signers:{required:E.withMessage("Поле не должен быть пустым",S)}}}},actions:{async actionCreateDocument(u){let a={...u,type:gt,sub_type:gt};this.buttonLoading=!0;const{response:t,error:o}=await Ve(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):Promise.reject(o)},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await ge(u);Te(this.model,a),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers),this.model.__departments=await uo(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),fl={class:"font-semibold text-xl"},Ne={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(u,{emit:a}){const o=nt(u,"modelValue"),{t:q}=ne();return(s,r)=>{const m=Le,n=Ut;return y(),G(n,{modelValue:e(o),"onUpdate:modelValue":r[1]||(r[1]=p=>Ze(o)?o.value=p:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[b("span",fl,B(e(q)("preview")),1)]),content:c(()=>[yt(s.$slots,"content")]),footer:c(()=>[l(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(m,{label:u.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:u.sendButtonLoading,onClick:r[0]||(r[0]=p=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},ia={__name:"InnerForm",props:{formType:{type:String,default:F}},setup(u){const a=u,t=ie(),o=_l();ye();const q=ce(),s=Z(!1);Z(null);const{t:r}=ne(),m=ue(),n=pe(),p=oe(o.rules,o.model),k=async()=>{await p.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.departments=[],o.model.departments=o.model.__departments.map(_=>_.id),o.model.files=[],o.model.files=o.model.__files.map(_=>({id:_.id})),o.model.journal=se.INNER,o.model.sender=t.currentUser.top_level_department.id,o.model.approvers=le(o.model.__approvers),o.model.signers=le(o.model.__signers),o.model.document_type=n.params.document_type,o.model.document_sub_type=n.params.document_sub_type,o.model.receiver&&delete o.model.receiver)},T=()=>{a.formType===F?D():R()},D=async()=>{const $=await o.actionCreateDocument(o.model);await q.actionCountList(),$?(s.value=!1,j(null,r("document-sent"),A.SUCCESS),await m.replace({name:Ae,query:{document_type:ae.INNER}})):j(null,r("error-occurred"),A.ERROR)},R=async()=>{await o.actionUpdateDocument({id:n.params.id,body:o.model}),await q.actionCountList(),j(null,r("document-sent"),A.SUCCESS),await m.replace({name:Me,params:{id:n.params.id,document_type:ae.INNER,document_sub_type:Y.SERVICE_LETTER}})},M=()=>{console.log("Clear Form")},I=$=>{o.model.__files=[],$.forEach(_=>{o.model.__files.push(_)})};return et(async()=>{n.params.id&&await o.actionGetDocumentDetailForUpdate(n.params.id)}),De(()=>{ze(o.model)}),($,_)=>{const g=we,i=fe,d=Be,w=_e;return e(o).detailLoading?(y(),G(g,{key:0})):(y(),C(J,{key:1},[l(e($e),{title:a.formType===e(F)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[l(je,{"onEmit:preview":k,"onEmit:clearForm":M},{default:c(()=>[l(w,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(Xt,{modelValue:e(p).__departments.$model,"onUpdate:modelValue":_[0]||(_[0]=f=>e(p).__departments.$model=f),error:e(p).__departments},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":_[2]||(_[2]=f=>e(p).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(p).content.$model,"onUpdate:modelValue":_[4]||(_[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:s.value,"onUpdate:modelValue":_[5]||(_[5]=f=>s.value=f),"send-button-loading":e(o).buttonLoading,"onEmit:send":T},{content:c(()=>{var f,V;return[l(eo,{"compose-model":{...e(o).model,signers:e(o).model.__signers,approvers:e(o).model.__approvers,author:e(o).model.__signers[0],sender:{name:(V=(f=e(t).currentUser)==null?void 0:f.top_level_department)==null?void 0:V.name},receiver:{departments:e(o).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=xe("sd-store-application",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{}}}},actions:{async actionCreateDocument(u){let a={...u};this.buttonLoading=!0;const{response:t,error:o}=await Ve(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:a});return Promise.resolve(t)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await ge(u);Te(this.model,a),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers.filter(t=>t.type===Fe.SIGNER)),this.model.__curator=await Re([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),St=xe("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:ie().currentUser.company.id,curator:null,document_type:ae.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:se.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:E.withMessage("Поле не должен быть пустым",S)},register_date:{required:E.withMessage("Поле не должен быть пустым",S)},content:{required:E.withMessage("Поле не должен быть пустым",S)},__negotiators:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await ge(u);Te(this.model,a),this.model.__signers=await H(a.signers.filter(t=>t.type!==Fe.NEGOTIATOR)),this.model.__negotiators=await H(a.signers.filter(t=>t.type===Fe.NEGOTIATOR)),this.model.__approvers=await H(a.approvers),this.model.__curator=await Re([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),da={__name:"ApplicationForm",props:{formType:{type:String,default:F}},setup(u){const a=u,t=ie(),o=gl();ye();const q=ce();St();const s=Z(!1);Z(null);const{t:r}=ne(),m=ue(),n=pe(),p=oe(o.rules,o.model),k=ee(()=>n.params.document_sub_type===Y.EXPLANATION_LETTER?a.formType===F?"create-explanation-letter":"update-explanation-letter":a.formType===F?"create-sd-application":"update-sd-application"),T=async()=>{var g,i,d,w,f;await p.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.signers=[{user:(g=t==null?void 0:t.currentUser)==null?void 0:g.id}],o.model.sender=(d=(i=t==null?void 0:t.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,o.model.curator=(f=(w=o==null?void 0:o.model)==null?void 0:w.__curator)==null?void 0:f.user_id,o.model.journal=se.APPLICATION,o.model.document_type=n.params.document_type,o.model.document_sub_type=n.params.document_sub_type,o.model.approvers=le(o.model.__approvers))},D=async()=>{},R=()=>{a.formType===F?M():I()},M=async()=>{const _=await o.actionCreateDocument(o.model);await q.actionCountList(),_?(s.value=!1,j(null,r("document-sent"),A.SUCCESS),await m.replace({name:Ae,query:{document_type:ae.APPLICATION}})):j(null,r("error-occurred"),A.ERROR)},I=async()=>{await o.actionUpdateDocument({id:n.params.id,body:o.model}),await q.actionCountList(),j(null,r("document-sent"),A.SUCCESS),await m.replace({name:Me,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},$=_=>{o.model.__files=[],_.forEach(g=>{o.model.__files.push(g)})};return et(async()=>{n.params.id&&await o.actionGetDocumentDetailForUpdate(n.params.id)}),De(()=>{ze(o.model)}),(_,g)=>{const i=we,d=fe,w=_e;return e(o).detailLoading?(y(),G(i,{key:0})):(y(),C(J,{key:1},[l(e($e),{title:k.value},{content:c(()=>[l(je,{"onEmit:preview":T,"onEmit:clearForm":D},{default:c(()=>[l(w,null,{default:c(()=>[l(d,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":g[0]||(g[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":g[1]||(g[1]=f=>e(o).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":g[2]||(g[2]=f=>e(p).__signers.$model=f),disabled:"",label:"signers",placeholder:e(t).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),l(d,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(p).content.$model,"onUpdate:modelValue":g[3]||(g[3]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":$},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:s.value,"onUpdate:modelValue":g[4]||(g[4]=f=>s.value=f),"send-button-loading":e(o).buttonLoading,"onEmit:send":R},{content:c(()=>[l(to,{"compose-model":{...e(o).model,curator:e(o).model.__curator,author:a.formType===e(F)?e(t).currentUser:e(o).model.__signers[0].user,signers:a.formType===e(F)?[e(t).currentUser]:e(o).model.__signers},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ql=xe("sd-notice-store",{state:()=>(ie(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:ae.NOTICE,document_sub_type:Y.BUSINESS_TRIP,journal:se.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:E.withMessage("Поле не должен быть пустым",S)},start_date:{required:E.withMessage("Поле не должен быть пустым",S)},route:{required:E.withMessage("Поле не должен быть пустым",S)},content:{required:E.withMessage("Поле не должен быть пустым",S)},__companies:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__employees:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},__tags:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a=!1){try{this.detailLoading=!0;const{data:t}=await ge(u);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Re([],t.curator.id,!1),this.model.__employees=await H(t.notices),a?(this.model.__approvers=await H(t.approvers.filter(o=>{var q,s;return((q=o==null?void 0:o.user)==null?void 0:q.id)!==((s=t==null?void 0:t.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await H(t.approvers),this.model.__signers=await H(t.signers),this.model.__companies=await ft(t.notices[0].destinations),this.model.__tags=await st(t.tags),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(u,a){try{this.detailLoading=!0;const{data:t}=await ge(u),o=await ge(a);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Re([],t.curator.id,!1),this.model.__employees=await H(o.data.notices),this.model.__approvers=await H(t.approvers),this.model.__signers=await H(t.signers),this.model.__companies=await ft(o.data.notices[0].destinations),this.model.__tags=await st(t.tags),this.model.start_date=o.data.notices[0].start_date,this.model.end_date=o.data.notices[0].end_date,this.model.__tags=t.tags,this.model.route=o.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),bl={class:"flex w-full gap-x-4"},ca={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:F}},setup(u){const a=u,{t}=ne(),o=pe(),q=ue(),s=ie(),r=ql(),m=ce();ye();const n=oe(r.rules,r.model),p=Z(!1),k=ee(()=>{const i=a.formType===F,d=o.params.document_sub_type;return d===Y.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":d===Y.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),T=ee(()=>{var i,d;return o.params.document_sub_type===Y.BUSINESS_TRIP_DECREE_LOCAL&&((i=o==null?void 0:o.query)==null?void 0:i.compose_id)&&((d=o==null?void 0:o.query)==null?void 0:d.document_sub_type)===Y.BUSINESS_TRIP}),D=ee(()=>{var i;return!!(o.params.document_sub_type===Y.BUSINESS_TRIP_DECREE_LOCAL&&((i=r==null?void 0:r.model)!=null&&i.trip_notice_id))});wt(()=>r.model.__tags,i=>{if(a.formType===F)if(i&&i.length){let d=`${i.map(w=>w.name_uz).join(", ")} yuzasidan`;r.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else r.model.short_description=null});const R=async()=>{var d,w,f,V,N;await n.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=le(r.model.__approvers),r.model.signers=le(r.model.__signers),r.model.curator=(w=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:w.user_id,r.model.journal=o.params.document_type===ae.DECREE||o.params.document_type===ae.ORDER?se.ORDERS_PROTOCOLS:se.INNER,r.model.company=s.currentUser.company.id,r.model.notices=r.model.__employees.map(P=>({start_date:r.model.start_date,end_date:r.model.end_date,user:P.id,route:r.model.route,companies:r.model.__companies.map(v=>v.id)})),r.model.sender=(V=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:V.id,r.model.tags=r.model.__tags.map(P=>({id:P.id})),r.model.files=r.model.__files.map(P=>({id:P.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,T.value&&(r.model.trip_notice_id=(N=o==null?void 0:o.query)==null?void 0:N.compose_id),p.value=!0)},M=()=>{},I=i=>{r.model.__files=[],i.forEach(d=>{r.model.__files.push(d)})},$=async()=>{T.value&&(r.model.notices=[]);const i=await r.actionCreateDocument(r.model);await m.actionCountList(),i?(p.value=!1,j(null,t("document-sent"),A.SUCCESS),await q.replace({name:Ae,query:{document_type:o.params.document_sub_type===Y.BUSINESS_TRIP_DECREE_LOCAL?ae.DECREE:o.params.document_sub_type===Y.BUSINESS_TRIP_ORDER_LOCAL?ae.ORDER:ae.NOTICE}})):j(null,t("error-occurred"),A.ERROR)},_=async()=>{(T.value||D.value)&&(r.model.notices=[]),await r.actionUpdateDocument({id:o.params.id,body:r.model}),await m.actionCountList(),j(null,t("changed"),A.SUCCESS),await q.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},g=()=>{a.formType===F?$():_()};return Qe(async()=>{o.params.id&&o.query.trip_notice_id&&o.params.document_sub_type===Y.BUSINESS_TRIP_DECREE_LOCAL?await r.actionGetDocumentDetailForUpdateForCustomUse(o.params.id,o.query.trip_notice_id):o.params.id?await r.actionGetDocumentDetailForUpdate(o.params.id):T.value&&await r.actionGetDocumentDetailForUpdate(o.query.compose_id,!0)}),De(()=>{ze(r.model)}),(i,d)=>{const w=we,f=fe,V=Ge,N=tt,P=Be,v=_e;return e(r).detailLoading?(y(),G(w,{key:0})):(y(),C(J,{key:1},[l(e($e),{title:k.value},{content:c(()=>[l(je,{"onEmit:preview":R,"onEmit:clearForm":M},{default:c(()=>[l(v,null,{default:c(()=>[l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=h=>e(n).__curator.$model=h),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=h=>e(n).__employees.$model=h),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:T.value||D.value},null,8,["modelValue","error","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(Kt,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=h=>e(n).__companies.$model=h),error:e(n).__companies,"text-truncate":"",disabled:T.value||D.value},null,8,["modelValue","error","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(rt,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=h=>e(n).__tags.$model=h),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:h})=>[re(B(h.name),1)]),option:c(({value:h})=>[l(e(he),{title:h.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[b("div",bl,[l(V,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=h=>e(n).start_date.$model=h),d[5]||(d[5]=h=>e(n).start_date.$model=e(qe)(h))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:T.value||D.value},null,8,["modelValue","error","min-date","disabled"]),l(V,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=h=>e(n).end_date.$model=h),d[7]||(d[7]=h=>e(n).end_date.$model=e(qe)(h))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:T.value||D.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(N,{modelValue:e(n).route.$model,"onUpdate:modelValue":d[8]||(d[8]=h=>e(n).route.$model=h),error:e(n).route,options:e(Mt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:T.value||D.value},null,8,["modelValue","error","options","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=h=>e(r).model.__approvers=h),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=h=>e(n).__signers.$model=h),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(P,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=h=>e(n).short_description.$model=h),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(n).content.$model,"onUpdate:modelValue":d[12]||(d[12]=h=>e(n).content.$model=h),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:p.value,"onUpdate:modelValue":d[13]||(d[13]=h=>p.value=h),"send-button-loading":e(r).buttonLoading,"onEmit:send":g},{content:c(()=>[e(o).params.document_sub_type===e(Y).BUSINESS_TRIP_DECREE_LOCAL?(y(),G(e(il),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(o).params.document_sub_type===e(Y).BUSINESS_TRIP_ORDER_LOCAL?(y(),G(e(oo),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(y(),G(e(lo),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},ua={__name:"OrderForm",props:{formType:{type:String,default:F}},setup(u){const a=u,t=St(),o=ce(),q=ie(),s=pe(),r=ue(),m=oe(t.rules,t.model),{t:n}=ne(),p=Z(!1),k=async()=>{var _,g,i,d;await m.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.approvers=le(t.model.__approvers),t.model.curator=(g=(_=t==null?void 0:t.model)==null?void 0:_.__curator)==null?void 0:g.user_id,t.model.sender=(d=(i=q==null?void 0:q.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,t.model.files=t.model.__files.map(w=>({id:w.id})),t.model.document_type=s.params.document_type,t.model.document_sub_type=s.params.document_sub_type,t.model.journal=se.ORDERS_PROTOCOLS,t.model.register_date=qe(t.model.register_date),t.model.__negotiators.forEach(w=>{t.model.signers.push(w.hasOwnProperty("user")?{id:w.id,user:w.user.id,type:Fe.NEGOTIATOR}:{user:w.id,type:Fe.NEGOTIATOR})}),s.query.compose_id&&(t.model.trip_notice_id=s.query.compose_id),p.value=!0)},T=()=>{},D=async()=>{try{const $=await t.actionCreateDocument(t.model);await o.actionCountList(),$&&(p.value=!1,j(null,n("document-sent"),A.SUCCESS),await r.replace({name:Ae,query:{document_type:ae.ORDER}}))}catch{j(null,n("error-occurred"),A.ERROR)}},R=async()=>{try{const $=await t.actionUpdateDocument({id:s.params.id,body:t.model});await o.actionCountList(),j(null,n("changed"),A.SUCCESS),await r.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{j(null,n("error-occurred"),A.ERROR)}},M=()=>{a.formType===F?D():R()},I=$=>{t.model.__files=[],$.forEach(_=>{t.model.__files.push(_)})};return et(async()=>{s.params.id&&await t.actionGetDocumentDetailForUpdate(s.params.id)}),De(()=>{ze(t.model)}),($,_)=>{const g=we,i=fe,d=Be,w=Ge,f=_e;return e(t).detailLoading?(y(),G(g,{key:0})):(y(),C(J,{key:1},[l(e($e),{title:a.formType===e(F)?"create-order":"update-order"},{content:c(()=>[l(je,{"onEmit:preview":k,"onEmit:clearForm":T},{default:c(()=>[l(f,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=V=>e(m).__curator.$model=V),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(m).register_number.$model,"onUpdate:modelValue":_[1]||(_[1]=V=>e(m).register_number.$model=V),error:e(m).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(w,{modelValue:e(m).register_date.$model,"onUpdate:modelValue":_[2]||(_[2]=V=>e(m).register_date.$model=V),error:e(m).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":_[3]||(_[3]=V=>e(t).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(m).__negotiators.$model,"onUpdate:modelValue":_[4]||(_[4]=V=>e(m).__negotiators.$model=V),error:e(m).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(m).content.$model,"onUpdate:modelValue":_[5]||(_[5]=V=>e(m).content.$model=V),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:p.value,"onUpdate:modelValue":_[6]||(_[6]=V=>p.value=V),"send-button-loading":e(t).buttonLoading,"onEmit:send":M},{content:c(()=>[l(e(no),{"compose-model":e(t).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},hl=xe("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await ge(u);Te(this.model,a),this.model.__curator=await Re([],a.curator.id,!1),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers)}catch{}finally{this.detailLoading=!1}}}}),pa={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:F}},setup(u){const a=u,{t}=ne(),o=pe(),q=ue(),s=ie(),r=hl(),m=ce();ye();const n=Z(!1),p=oe(r.rules,r.model),k=async()=>{var _,g,i,d;await p.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=le(r.model.__approvers),r.model.signers=le(r.model.__signers),r.model.curator=(g=(_=r==null?void 0:r.model)==null?void 0:_.__curator)==null?void 0:g.user_id,r.model.journal=se.INNER,r.model.company=s.currentUser.company.id,r.model.sender=(d=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,r.model.files=r.model.__files.map(w=>({id:w.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,n.value=!0)},T=()=>{},D=$=>{r.model.__files=[],$.forEach(_=>{r.model.__files.push(_)})},R=async()=>{const $=await r.actionCreateDocument(r.model);await m.actionCountList(),$?(n.value=!1,j(null,t("document-sent"),A.SUCCESS),await q.replace({name:Ae,query:{document_type:ae.NOTICE}})):j(null,t("error-occurred"),A.ERROR)},M=async()=>{await r.actionUpdateDocument({id:o.params.id,body:r.model}),await m.actionCountList(),j(null,t("changed"),A.SUCCESS),await q.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},I=()=>{a.formType===F?R():M()};return Qe(async()=>{o.params.id&&await r.actionGetDocumentDetailForUpdate(o.params.id)}),De(()=>{ze(r.model)}),($,_)=>{const g=we,i=fe,d=Be,w=_e;return e(r).detailLoading?(y(),G(g,{key:0})):(y(),C(J,{key:1},[l(e($e),{title:a.formType===e(F)?"create-notice":"update-notice"},{content:c(()=>[l(je,{"onEmit:preview":k,"onEmit:clearForm":T},{default:c(()=>[l(w,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":_[2]||(_[2]=f=>e(r).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(p).content.$model,"onUpdate:modelValue":_[4]||(_[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:n.value,"onUpdate:modelValue":_[5]||(_[5]=f=>n.value=f),"send-button-loading":e(r).buttonLoading,"onEmit:send":I},{content:c(()=>[l(e(ro),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},yl=xe("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){const a={...u};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:t,error:o}=await Ve(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t={...a};delete t.bookings,delete t.notices,delete t.trip_plans;try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:t});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){try{this.detailLoading=!0;const{data:t}=await ge(u);Te(this.model,t),this.model.__curator=await Re([],t.curator.id,!1),this.model.__approvers=await H(t.approvers),this.model.__signers=await H(t.signers)}catch{}finally{this.detailLoading=!1}}}}),ma={__name:"DecreeForm",props:{formType:{type:String,default:F}},setup(u){const a=u,{t}=ne(),o=pe(),q=ue(),s=ie(),r=ce();ye();const m=Z(!1),n=yl(),p=dt(),k=oe(n.rules,n.model),T=async()=>{var i,d,w,f;await k.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=le(n.model.__approvers),n.model.signers=le(n.model.__signers),n.model.curator=(d=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:d.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=s.currentUser.company.id,n.model.sender=(f=(w=s==null?void 0:s.currentUser)==null?void 0:w.top_level_department)==null?void 0:f.id,n.model.files=n.model.__files.map(V=>({id:V.id})),n.model.document_type=o.params.document_type,n.model.document_sub_type=o.params.document_sub_type,o.query.compose_id&&(n.model.trip_notice_id=o.query.compose_id),m.value=!0)},D=()=>{},R=g=>{n.model.__files=[],g.forEach(i=>{n.model.__files.push(i)})},M=async()=>{const g=await n.actionCreateDocument(n.model);await r.actionCountList(),g?(m.value=!1,j(null,t("document-sent"),A.SUCCESS),await q.replace({name:Ae,query:{document_type:o.params.document_type}})):j(null,t("error-occurred"),A.ERROR)},I=async()=>{await n.actionUpdateDocument({id:o.params.id,body:n.model}),await r.actionCountList(),j(null,t("changed"),A.SUCCESS),await q.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},$=()=>{a.formType===F?M():I()},_=async g=>{const{data:i}=await p.actionGetDocumentDetail(g);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return Qe(async()=>{a.formType===F&&o.query.compose_id?await _(o.query.compose_id):a.formType===Ce&&o.query.trip_notice_id&&o.params.id?(await n.actionGetDocumentDetailForUpdate(o.params.id,null),await _(o.query.trip_notice_id)):a.formType===Ce&&o.params.id&&await n.actionGetDocumentDetailForUpdate(o.params.id,null)}),De(()=>{ze(n.model)}),(g,i)=>{const d=we,w=fe,f=Be,V=_e;return e(n).detailLoading?(y(),G(d,{key:0})):(y(),C(J,{key:1},[l(e($e),{title:a.formType===e(F)?"create-decree":"update-decree"},{content:c(()=>[l(je,{"onEmit:preview":T,"onEmit:clearForm":D},{default:c(()=>[l(V,null,{default:c(()=>[l(w,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=N=>e(k).__curator.$model=N),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(w,{"col-class":"w-1/2"},{default:c(()=>[l(f,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=N=>e(k).short_description.$model=N),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(w,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=N=>e(n).model.__approvers=N),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(w,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=N=>e(k).__signers.$model=N),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(w,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(k).content.$model,"onUpdate:modelValue":i[4]||(i[4]=N=>e(k).content.$model=N),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:m.value,"onUpdate:modelValue":i[5]||(i[5]=N=>m.value=N),"send-button-loading":e(n).buttonLoading,"onEmit:send":$},{content:c(()=>[l(e(kt),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wl=xe("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:E.withMessage("Поле не должен быть пустым",S)},start_date:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},__user:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await ge(u);return Te(this.model,a),this.model.__curator=await Re([],a.curator.id,!1),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers),this.model.__user=await We("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),_a={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:F}},setup(u){const a=u,t=pe(),o=ue(),q=ie(),s=wl();dt();const r=ce(),{t:m}=ne(),n=oe(s.rules,s.model),p=Z(!1),k=Z([]),T=ee(()=>a.formType===F?"create-poa":"update-poa"),D=ee(()=>s.model.start_date?new Date(s.model.start_date):new Date),R=async()=>{var d,w,f,V,N,P,v,h,x,U,L,K,Q,O,W,z,Ie,ve,pt,mt;if(await n.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=le(s.model.__approvers),s.model.signers=le(s.model.__signers),s.model.curator=(w=(d=s==null?void 0:s.model)==null?void 0:d.__curator)==null?void 0:w.user_id,s.model.user=(V=(f=s==null?void 0:s.model)==null?void 0:f.__user)==null?void 0:V.id,s.model.journal=se.POWER_OF_ATTORNEY,s.model.company=(P=(N=q.currentUser)==null?void 0:N.company)==null?void 0:P.id,s.model.sender=(h=(v=q==null?void 0:q.currentUser)==null?void 0:v.top_level_department)==null?void 0:h.id,s.model.document_type=t.params.document_type,s.model.document_sub_type=t.params.document_sub_type,s.model.content=".",s.model.parent=(U=(x=s.model)==null?void 0:x.__parent)==null?void 0:U.id,!((K=(L=s==null?void 0:s.model)==null?void 0:L.__user)!=null&&K.passport_seria||(O=(Q=s==null?void 0:s.model)==null?void 0:Q.__user)!=null&&O.passport_number||(z=(W=s==null?void 0:s.model)==null?void 0:W.__user)!=null&&z.passport_issue_date||(ve=(Ie=s==null?void 0:s.model)==null?void 0:Ie.__user)!=null&&ve.passport_issued_by)){j(null,`${(mt=(pt=s.model)==null?void 0:pt.__user)==null?void 0:mt.full_name}: ${m("passport-details-error")}`,A.WARNING);return}p.value=!0}},M=()=>{},I=async()=>{const i=await s.actionCreateDocument(s.model);await r.actionCountList(),i?(p.value=!1,j(null,m("document-sent"),A.SUCCESS),await o.replace({name:Ae,query:{document_type:ae.POWER_OF_ATTORNEY}})):j(null,m("error-occurred"),A.ERROR)},$=async()=>{await s.actionUpdateDocument({id:t.params.id,body:s.model}),await r.actionCountList(),j(null,m("changed"),A.SUCCESS),await o.replace({name:Me,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},_=()=>{a.formType===F?I():$()},g=async i=>{const{data:d}=await po({user:i.id,document_sub_type:t.params.document_sub_type,status:5});k.value=d.results};return Qe(async()=>{if(t.params.id){const i=await s.actionGetDocumentDetailForUpdate(t.params.id);i.parent&&(k.value=[i.parent])}}),De(()=>{ze(s.model)}),(i,d)=>{const w=we,f=fe,V=Ge,N=tt,P=_e;return e(s).detailLoading?(y(),G(w,{key:0})):(y(),C(J,{key:1},[l(e($e),{title:T.value},{content:c(()=>[l(je,{"onEmit:preview":R,"onEmit:clearForm":M},{default:c(()=>[l(P,null,{default:c(()=>[l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=v=>e(n).__curator.$model=v),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__user.$model,"onUpdate:modelValue":d[1]||(d[1]=v=>e(n).__user.$model=v),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":d[2]||(d[2]=v=>g(v))},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(V,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[3]||(d[3]=v=>e(n).start_date.$model=v),d[4]||(d[4]=v=>e(n).start_date.$model=e(qe)(v))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(V,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[5]||(d[5]=v=>e(n).end_date.$model=v),d[6]||(d[6]=v=>e(n).end_date.$model=e(qe)(v))],error:e(n).end_date,"min-date":D.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":d[7]||(d[7]=v=>e(s).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[8]||(d[8]=v=>e(n).__signers.$model=v),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(N,{modelValue:e(s).model.__parent,"onUpdate:modelValue":d[9]||(d[9]=v=>e(s).model.__parent=v),options:k.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:p.value,"onUpdate:modelValue":d[10]||(d[10]=v=>p.value=v),"send-button-loading":e(s).buttonLoading,"onEmit:send":_},{content:c(()=>[l(ao,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vl={class:"base-stepper-component flex items-center select-none"},kl=["onClick"],xl={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Ct={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(u,{emit:a}){const{t}=ne(),o=q=>{a("emit:stepClick",q)};return(q,s)=>{const r=me;return y(),C("div",vl,[(y(!0),C(J,null,de(u.items,(m,n)=>(y(),C("div",{key:m.id,class:"flex items-center"},[b("div",{class:Oe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",m.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:p=>o(m)},[l(r,{icon:m.icon,class:Oe(m.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),b("span",null,B(e(t)(m.label)),1)],10,kl),n<u.items.length-1?(y(),C("div",xl)):te("",!0)]))),128))])}}},Pe=xe("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList],__users_to_extend:null,__regions_to_extend:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:E.withMessage("Поле не должен быть пустым",S)}},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)},__groups:{$each:E.forEach({__users:{required:E.withMessage("Поле не должен быть пустым",S)},__tags:{required:E.withMessage("Поле не должен быть пустым",S)},__regions:{required:E.withMessage("Поле не должен быть пустым",S)},__start_date:{required:E.withMessage("Поле не должен быть пустым",S)},__end_date:{required:E.withMessage("Поле не должен быть пустым",S)},__company:{required:E.withMessage("Поле не должен быть пустым",S)},__route:{required:E.withMessage("Поле не должен быть пустым",S)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:E.forEach({users:{required:E.withMessage("Поле не должен быть пустым",S)},text:{required:E.withMessage("Поле не должен быть пустым",S)}})}},booking_model:{bookings:[{type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:E.forEach({segments:{$each:E.forEach({departure_city:{required:E.withMessage("Поле не должен быть пустым",S)},arrival_city:{required:E.withMessage("Поле не должен быть пустым",S)},date:{required:E.withMessage("Поле не должен быть пустым",S)},time:{required:E.withMessage("Поле не должен быть пустым",S)},segment_class:{required:E.withMessage("Поле не должен быть пустым",S)}})},passengers:{required:E.withMessage("Поле не должен быть пустым",S)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Nt,active:!0,value:Xe},{id:4,label:"decree",icon:It,active:!0,value:Ke}],routeTabItems:[{id:1,title:"airplane",icon:Ot,value:Je,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:Pt,value:mo,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:Bt,value:$t,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:At,value:be},{id:2,title:"complex-route",icon:jt,value:it},{id:3,title:"one-way",icon:Ft,value:_o}]}),actions:{async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:t,error:o}=await Ve(Ue,a);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t=await lt(a);try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:t});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){var a,t;try{this.detailLoading=!0;const{data:o}=await ge(u),q=await xt(o.id);this.decreeModel=(t=(a=q==null?void 0:q.data)==null?void 0:a.to_composes[0])==null?void 0:t.from_compose,Te(this.model,o),this.model.__curator=await Re([],o.curator.id,!1),this.model.__signers=await H(o.signers),this.model.__approvers=await H(o.approvers);const s=Object.values(o.notices.reduce((r,m)=>{const n=m.group_id;return r[n]=r[n]||{group_id:n,items:[]},r[n].items.push(m),r},{}));this.model.__groups=await Promise.all(s.map(async r=>{var M;const m=await Promise.all(r.items.map(async I=>({...await H([],I.user.id,!1),business_trip_id:I.id}))),n=await st(r.items[0].tags),p=await We("regions",r.items[0].locations),k=await We("companies",[],!1,(M=r.items[0].sender_company)==null?void 0:M.id),T=r.items[0].start_date,D=r.items[0].end_date,R=r.items[0].route;return{__users:m,__tags:n,__regions:p,__start_date:T,__end_date:D,__company:k,__route:R}})),this.trip_plan_model.trip_plans=await Promise.all(o.trip_plans.map(async(r,m)=>({...r,users:await H(r.users)}))),this.booking_model.bookings=await Promise.all(o.bookings.map(async r=>({type:r.type,route:r.route,segments:await Promise.all(r.segments.map(async m=>({departure_city:await We("regions",[],!1,m.departure_city.id),arrival_city:await We("regions",[],!1,m.arrival_city.id),segment_class:await fo.find(n=>n.value===m.segment_class),date:qe(m.departure_date),time:await so(m.departure_date,m.departure_end_date)}))),passengers:await H(r.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},async actionStepClick(u,a,t){await u.replace({query:{...a.query,step:t}}),this.stepperItems.forEach(q=>q.active=q.value===t),await vt();const o=document.querySelector(".document-view-aside");o&&o.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(u){this.booking_model.bookings.splice(u,1)},actionChangeRouteSegment(u,a){const t=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=u===be?[t(),t()]:[t()]},async actionAddRouteLine(u){this.booking_model.bookings[u].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(u,a){this.booking_model.bookings[u].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),$l={class:"trip-info-components"},Vl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},El={class:"flex justify-between"},Ul={class:"text-base text-primary-900 font-semibold mb-1"},Sl=["onClick"],Cl={class:"flex align-center gap-x-4"},Tl={class:"flex w-full gap-x-4"},Rl={class:"flex w-full gap-x-4"},Ll={class:"text-base text-primary-900 font-semibold mb-2"},Dl={class:"flex items-center justify-between"},ht={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:t}){const o=pe(),q=ue(),s=Pe();ye();const{t:r,locale:m}=ne(),n=oe(s.rules,s.model),p=Z(!1),k=Z(!0);wt(()=>o.params.document_sub_type,_=>{k.value=!1,setTimeout(()=>{k.value=!0},50)});const T=ee(()=>o.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_FOREIGN?{region_type:"foreign"}:{region_type:"local"}),D=_=>{s.model.__files=[],_.forEach(g=>{s.model.__files.push(g)})},R=()=>{s.actionAddGroupBlock()},M=async _=>{const g=await n.value.$validate();if(p.value=!0,!g){j(null,r("fill-required-fields"),A.WARNING);return}t("emit:onValidateAndSend"),await s.actionStepClick(q,o,"decree")},I=(_,g)=>{s.model.__groups[g].__regions=[]},$=(_,g)=>{_.value.forEach(i=>{var d,w,f,V;if(i.id===((V=(f=(w=(d=s.model)==null?void 0:d.__groups[g])==null?void 0:w.__company)==null?void 0:f.region)==null?void 0:V.id)){const N=s.model.__groups[g].__regions.findIndex(P=>P.id===i.id);(N||N===0)&&s.model.__groups[g].__regions.splice(N,1)}})};return a({stepClick:M}),(_,g)=>{const i=fe,d=Be,w=me,f=tt,V=rt,N=Ge,P=_e,v=Le;return y(),C("div",$l,[l(P,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":g[0]||(g[0]=h=>e(n).__curator.$model=h),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":g[1]||(g[1]=h=>e(n).short_description.$model=h),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(y(!0),C(J,null,de(e(s).model.__groups,(h,x)=>(y(),C("div",Vl,[b("div",El,[b("span",Ul,B(e(r)("group"))+"-"+B(x+1),1),x!==0?(y(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:U=>e(s).actionDeleteGroupBlock(x)},[l(w,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Sl)):te("",!0)]),l(P,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:h.__users,"onUpdate:modelValue":U=>h.__users=U,error:e(n).__groups.$each.$response.$data[x].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"",allSelectable:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(i,{"col-class":"w-1/2"},{default:c(()=>[b("div",Cl,[l(f,{modelValue:h.__company,"onUpdate:modelValue":U=>h.__company=U,error:e(n).__groups.$each.$response.$data[x].__company,options:h.__filialList,"onUpdate:options":U=>h.__filialList=U,required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":U=>I(U,x)},{option:c(({option:U})=>[l(e(he),{title:U.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","onUpdate:options","show-nested-error","onEmit:change"]),k.value?(y(),G(V,{key:0,modelValue:h.__regions,"onUpdate:modelValue":U=>h.__regions=U,error:e(n).__groups.$each.$response.$data[x].__regions,"api-url":"regions","api-params":T.value,"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":U=>$(U,x)},{chip:c(({value:U})=>[re(B(U.name),1)]),option:c(({value:U})=>[l(e(he),{title:U.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error","onEmit:change"])):te("",!0)])]),_:2},1024),l(i,{"col-class":"w-1/2"},{default:c(()=>[b("div",Tl,[l(V,{modelValue:h.__tags,"onUpdate:modelValue":U=>h.__tags=U,error:e(n).__groups.$each.$response.$data[x].__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":p.value,class:"w-1/2"},{chip:c(({value:U})=>[re(B(U.name),1)]),option:c(({value:U})=>[l(e(he),{title:U.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),l(f,{modelValue:h.__route,"onUpdate:modelValue":U=>h.__route=U,error:e(n).__groups.$each.$response.$data[x].__route,options:e(s).routeTabItems,"onUpdate:options":g[2]||(g[2]=U=>e(s).routeTabItems=U),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(m)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":p.value,class:"w-1/2"},{option:c(({option:U})=>[l(e(he),{title:e(r)(U.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),l(i,{"col-class":"w-1/2"},{default:c(()=>[b("div",Rl,[l(N,{modelValue:h.__start_date,"onUpdate:modelValue":[U=>h.__start_date=U,U=>h.__start_date=e(qe)(U)],error:e(n).__groups.$each.$response.$data[x].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(N,{modelValue:h.__end_date,"onUpdate:modelValue":[U=>h.__end_date=U,U=>h.__end_date=e(qe)(U)],error:e(n).__groups.$each.$response.$data[x].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(v,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:R},null,8,["icon-left"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":g[3]||(g[3]=h=>e(s).model.__approvers=h),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":g[4]||(g[4]=h=>e(n).__signers.$model=h),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[b("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(s).model.content?"border-critic-500":"border-greyscale-200"])},[b("div",Ll,B(e(r)("notice")),1),l(Se,{modelValue:e(n).content.$model,"onUpdate:modelValue":g[5]||(g[5]=h=>e(n).content.$model=h),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),b("div",Dl,[l(v,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(v,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:g[6]||(g[6]=h=>M(e(ct)))})])])}}},Ml={class:"work-plan-component"},Nl={class:"flex flex-col gap-y-3"},Il={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ol={class:"flex justify-between"},Pl={class:"text-base text-primary-900 font-semibold mb-1"},Bl=["onClick"],Al={class:"flex items-center justify-between mt-10"},jl={class:"flex items-center gap-x-1"},Fl={__name:"WorkPlan",setup(u,{expose:a}){const{t}=ne(),o=pe(),q=ue(),s=Pe(),r=oe(s.trip_plan_rules,s.trip_plan_model),m=Z(!1),n=ee(()=>{const T=new Set;return s.model.__groups.reduce((D,R)=>R.__users&&Array.isArray(R.__users)?D.concat(R.__users):D,[]).filter(D=>T.has(D.id)?!1:(T.add(D.id),!0))}),p=async T=>{const D=await r.value.$validate();if(m.value=!0,!D){j(null,t("fill-required-fields"),A.WARNING);return}const R=s.trip_plan_model.trip_plans.flatMap(I=>{var $;return($=I.users)==null?void 0:$.map(_=>_.id)}),M=n.value.filter(I=>!R.includes(I.id));M.length?(j(null,`У следующих сотрудников нет плана работы: ${M==null?void 0:M.map(I=>I.first_name+" "+I.last_name).join(", ")}.`,A.WARNING),j(null,"У всех сотрудников должен быть назначен рабочий план.",A.WARNING)):await s.actionStepClick(q,o,T)},k=()=>{s.actionAddWorkPlanRow(),m.value=!1};return a({stepClick:p}),(T,D)=>{const R=me,M=Et,I=fe,$=_e,_=Le;return y(),C("div",Ml,[b("div",Nl,[(y(!0),C(J,null,de(e(s).trip_plan_model.trip_plans,(g,i)=>(y(),C("div",Il,[b("div",Ol,[b("span",Pl,B(e(t)("plan"))+"-"+B(i+1),1),i!==0?(y(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d=>e(s).actionDeleteWorkPlanRow(i)},[l(R,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Bl)):te("",!0)]),l($,null,{default:c(()=>[l(I,{"col-class":"w-1/2"},{default:c(()=>[l(M,{modelValue:g.text,"onUpdate:modelValue":d=>g.text=d,error:e(r).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(I,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:g.users,"onUpdate:modelValue":d=>g.users=d,options:n.value,error:e(r).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(_,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:k},null,8,["icon-left"]),b("div",Al,[l(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),b("div",jl,[l(_,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:D[0]||(D[0]=g=>p(e(Xe)))}),l(_,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:D[1]||(D[1]=g=>p(e(Vt)))})])])])}}};const zl={class:"base-time-picker"},Gl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(u){const a=u,t=nt(a,"modelValue"),{t:o}=ne();return(q,s)=>{var n;const r=wo,m=me;return y(),C("div",zl,[l(r,{label:a.label,required:a.required},null,8,["label","required"]),l(e(vo),{modelValue:e(t),"onUpdate:modelValue":s[0]||(s[0]=p=>Ze(t)?t.value=p:null),"time-picker":"",range:u.range,"cancel-text":e(o)("cancel"),"select-text":e(o)("select"),placeholder:e(o)(u.placeholder),ref:"datePicker",class:Oe({"input-error":((n=u.error)==null?void 0:n.$error)&&u.showNestedError})},{"input-icon":c(()=>[l(m,{icon:e(zt),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Wl={class:"route-component flex flex-col gap-y-3"},Yl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Hl={class:"flex items-center justify-between"},Xl={class:"flex items-center gap-x-4"},Kl={class:"text-base text-primary-900 font-semibold mb-1"},Ql={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Jl={class:"text-xs text-greyscale-900 font-medium"},Zl=["onClick"],en=["onClick"],tn={class:"text-sm text-primary-500 font-semibold"},on={class:"flex items-center justify-between mt-10"},ln={class:"flex items-center gap-x-1"},nn={__name:"Route",props:{formType:{type:String,default:F}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:t}){const{t:o}=ne(),q=pe(),s=ue(),r=Pe(),m=ye();ie(),ce();const n=oe(r.booking_model_rules,r.booking_model);Z(!1);const p=Z(!1),k=ee(()=>{const i=new Set;return r.model.__groups.reduce((d,w)=>w.__users&&Array.isArray(w.__users)?d.concat(w.__users):d,[]).filter(d=>i.has(d.id)?!1:(i.add(d.id),!0))}),T=i=>{r.routeTabItems.forEach(d=>d.active=d.id===i.id)},D=(i,d)=>{r.routeTypeTabItems.forEach(w=>w.active=w.id===i.id),r.actionChangeRouteSegment(i.value,d)},R=async(i,d=!1)=>{var N,P;const w=await n.value.$validate();if(p.value=!0,!w){j(null,o("fill-required-fields"),A.WARNING);return}const f=(N=r.booking_model.bookings)==null?void 0:N.flatMap(v=>{var h;return(h=v.passengers)==null?void 0:h.map(x=>x==null?void 0:x.id)}),V=(P=k.value)==null?void 0:P.filter(v=>!(f!=null&&f.includes(v.id)));V.length?(j(null,`У следующих сотрудников не назначен маршрут: ${V.map(v=>v.first_name+" "+v.last_name).join(", ")}.`,A.WARNING),j(null,"У всех сотрудников должен быть назначен маршрут",A.WARNING)):(d&&t("emit:onValidateAndSend"),await r.actionStepClick(s,q,i))},M=()=>{r.actionAddRouteRow(),p.value=!1},I=(i,d,w,f)=>{f.type===be&&(r.booking_model.bookings[d].segments[w+1].arrival_city=i)},$=(i,d,w,f)=>{f.type===be&&(r.booking_model.bookings[d].segments[w+1].departure_city=i)},_=(i,d,w,f)=>{f.type===be&&(r.booking_model.bookings[d].segments[w+1].segment_class=i)},g=()=>{R(Ke,!0)};return a({stepClick:R}),(i,d)=>{const w=tt,f=fe,V=Ge,N=_e,P=Le;return y(),C("div",Wl,[(y(!0),C(J,null,de(e(r).booking_model.bookings,(v,h)=>(y(),C("div",Yl,[b("div",Hl,[b("div",Xl,[b("span",Kl,B(e(o)("route"))+"-"+B(h+1),1),l(bt,{modelValue:v.route,"onUpdate:modelValue":x=>v.route=x,items:e(r).routeTabItems,"onEmit:onChange":d[0]||(d[0]=x=>T(x))},null,8,["modelValue","onUpdate:modelValue","items"]),l(bt,{modelValue:v.type,"onUpdate:modelValue":x=>v.type=x,items:e(r).routeTypeTabItems,"onEmit:onChange":x=>D(x,h)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),h!==0?(y(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d[1]||(d[1]=(...x)=>e(r).actionDeleteRouteRow&&e(r).actionDeleteRouteRow(...x))},[l(me,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):te("",!0)]),b("div",Ql,[l(me,{icon:e(at),class:"text-warning-500"},null,8,["icon"]),b("span",Jl,B(e(o)("route-warning")),1)]),(y(!0),C(J,null,de(v.segments,(x,U)=>(y(),C("div",null,[l(N,null,{default:c(()=>[l(f,{"col-class":"w-1/5"},{default:c(()=>[l(w,{modelValue:x.departure_city,"onUpdate:modelValue":L=>x.departure_city=L,error:e(n).bookings.$each.$response.$data[h].segments.$each.$data[U].departure_city,options:e(m).regionsList,"onUpdate:options":d[2]||(d[2]=L=>e(m).regionsList=L),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:v.type===e(be)&&U%2!==0,"onEmit:change":L=>I(L,h,U,v)},{option:c(({option:L})=>[l(e(he),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(w,{modelValue:x.arrival_city,"onUpdate:modelValue":L=>x.arrival_city=L,error:e(n).bookings.$each.$response.$data[h].segments.$each.$data[U].arrival_city,options:e(m).regionsList.filter(L=>{var K;return(L==null?void 0:L.id)!=((K=x.departure_city)==null?void 0:K.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:v.type===e(be)&&U%2!==0,"onEmit:change":L=>$(L,h,U,v)},{option:c(({option:L})=>[l(e(he),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(w,{modelValue:x.segment_class,"onUpdate:modelValue":L=>x.segment_class=L,error:e(n).bookings.$each.$response.$data[h].segments.$each.$data[U].segment_class,options:v.route===e($t)?e(go):v.route===e(Je)?e(qo):e(bo),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":p.value,translatable:"",disabled:v.type===e(be)&&U%2!==0,"onEmit:change":L=>_(L,h,U,v)},{option:c(({option:L})=>[l(e(he),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(V,{modelValue:x.date,"onUpdate:modelValue":[L=>x.date=L,L=>x.date=e(qe)(L)],error:e(n).bookings.$each.$response.$data[h].segments.$each.$data[U].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),l(f,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[l(Gl,{modelValue:x.time,"onUpdate:modelValue":L=>x.time=L,error:e(n).bookings.$each.$response.$data[h].segments.$each.$data[U].time,label:"time",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),v.type===e(it)&&U!==0?(y(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:L=>e(r).actionDeleteRouteLine(h,U)},[l(me,{icon:e(Ye),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Zl)):te("",!0)]),_:2},1024)]),_:2},1024)]))),256)),v.type===e(it)?(y(),C("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:x=>e(r).actionAddRouteLine(h)},[l(me,{icon:e(He),class:"text-primary-500"},null,8,["icon"]),b("span",tn,B(e(o)("add-line")),1)],8,en)):te("",!0),l(N,null,{default:c(()=>[l(f,{"col-class":"w-full"},{default:c(()=>[l(X,{modelValue:v.passengers,"onUpdate:modelValue":x=>v.passengers=x,options:k.value,error:e(n).bookings.$each.$response.$data[h].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),l(P,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:M},null,8,["icon-left"]),b("div",on,[l(P,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),b("div",ln,[l(P,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:d[3]||(d[3]=v=>R(e(ct)))}),l(P,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(r).buttonLoading,onClick:g},null,8,["loading"])])])])}}},ut=xe("sd-extend-business-trip-store",{state:()=>({buttonLoading:!1,userTripUpdateButtonLoading:!1,detailLoading:!1,changingBTDialog:!1,changingBTLoading:!1,changingBTModel:null,tempVerifications:[],tempRegions:[],tempGroupIndex:null,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionGetParentDocumentDetail(u){try{this.detailLoading=!0;const{data:a}=await ge(u);await this.actionAdjustModel(a)}catch{}finally{this.detailLoading=!1}},async actionAdjustModel(u){this.model.__notices=u.notices;const a=Object.values(u.notices.reduce((t,o)=>{const q=o.group_id;return t[q]=t[q]||{group_id:q,items:[]},t[q].items.push(o),t},{}));this.model.__groups=await Promise.all(a.map(async t=>({__users:await Promise.all(t.items.map(async q=>({...await H([],q.user.id,!1),business_trip_id:q.id}))),__notices_to_change:[],group_id:t.group_id})))},async actionAddUsersToExtend(u,a){var m;await vt();const t=this.model.__groups[a].__users_to_extend||[],o=this.model.__notices.find(n=>t.some(p=>p.id===n.user.id&&n.group_id===u.group_id));if(!o)return;const q=this.model.__groups[a];if(Array.isArray(q.__notices_to_change)||this.$set(q,"__notices_to_change",[]),q.__notices_to_change.some(n=>n.id===o.id||n.parent_id===o.id)){this.tempGroupIndex=a,this.actionClearTempModel();return}this.changingBTModel=o,this.tempGroupIndex=a,this.changingBTLoading=!0,this.changingBTDialog=!0,setTimeout(()=>{this.changingBTLoading=!1},2e3);const r=await ko(o.id);this.tempVerifications=(m=r==null?void 0:r.data)==null?void 0:m.verifications.filter(n=>!n.is_sender).map(n=>({...n,is_visited:n.arrived_at||n.left_at}))},actionDeleteNoticeToChange(u,a,t){this.model.__groups[t].__notices_to_change.splice(a,1)},actionFillNoticesToChange(){var u,a,t,o,q,s;(t=(a=(u=this.model)==null?void 0:u.__groups)==null?void 0:a[this.tempGroupIndex])!=null&&t.__notices_to_change?this.model.__groups[this.tempGroupIndex].__notices_to_change.push({...this.changingBTModel,__regions:this.tempVerifications.map(r=>({...r.region})),__start_date:(o=this.changingBTModel)==null?void 0:o.start_date,__end_date:(q=this.changingBTModel)==null?void 0:q.end_date,__sender_company:(s=this.changingBTModel)==null?void 0:s.sender_company}):console.warn("Target group or __notices_to_change array not found.")},async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:t,error:o}=await Ve(Ue,a);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t=await lt(a);try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:t});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){var t,o,q,s,r,m;try{this.detailLoading=!0,await this.actionGetParentDocumentDetail(a);const{data:n}=await ge(u),p=await xt(n.id);Pe().decreeModel.content=((q=(o=(t=p==null?void 0:p.data)==null?void 0:t.to_composes[0])==null?void 0:o.from_compose)==null?void 0:q.content)||"",Pe().decreeModel.id=((m=(r=(s=p==null?void 0:p.data)==null?void 0:s.to_composes[0])==null?void 0:r.from_compose)==null?void 0:m.id)||null;const k=await Promise.all(this.model.__groups.map(async T=>{const D=n.notices.filter(R=>T.__users.some(M=>{var I;return M.id===((I=R.user)==null?void 0:I.id)&&R.group_id===T.group_id}));return D.length&&(T.__notices_to_change=await Promise.all(D.map(async R=>({user:R.user,__regions:await We("regions",R.locations),__start_date:R.start_date,__end_date:R.end_date,tags:R.tags,__sender_company:R.sender_company,business_trip_id:R.id,parent_id:R.parent})))),T}));this.model.__curator=await Re([],n.curator.id,!1),this.model.__signers=await H(n.signers),this.model.__approvers=await H(n.approvers),this.model.short_description=n.short_description,this.model.content=n.content}catch(n){return console.error(n),Promise.reject(n)}finally{this.detailLoading=!1}},async actionUpdateUserTrip(){this.actionFillNoticesToChange(),this.actionClearTempModel()},actionResetBTModel(){this.model={approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]}},actionClearTempModel(){this.changingBTDialog=!1,this.changingBTLoading=!1,this.changingBTModel=null,this.tempVerifications=[],this.tempRegions=[],this.model.__groups[this.tempGroupIndex].__users_to_extend=[]},actionClearUserToExtend(){const u=this.model.__groups[this.tempGroupIndex].__users_to_extend.findIndex(a=>{var t,o;return a.id===((o=(t=this.changingBTModel)==null?void 0:t.user)==null?void 0:o.id)});this.model.__groups[this.tempGroupIndex].__users_to_extend.splice(u,1)}}}),rn={class:"decree-component"},an={class:"flex items-center justify-between mt-10"},sn={class:"flex items-center gap-x-1"},Tt={__name:"Decree",props:{formType:{type:String,default:F}},setup(u,{expose:a}){const t=u,o=pe(),q=ue(),s=Pe(),r=ut(),m=oe(s.decreeRules,s.decreeModel),{t:n}=ne(),p=ie(),k=ce(),T=Z(!1),D=ee(()=>({...o.params.document_sub_type===Y.EXTEND_BUSINESS_TRIP_NOTICE?r.model:s.model,bookings:s.booking_model.bookings,trip_plans:s.trip_plan_model.trip_plans,decree_content:s.decreeModel.content})),R=async g=>{await s.actionStepClick(q,o,g)},M=g=>{s.decreeModel.__files=[],g.forEach(i=>{s.decreeModel.__files.push(i)})},I=async()=>{var i,d,w,f;if(!await m.value.$validate()){j(null,n("fill-required-fields"),A.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(d=(i=s.model)==null?void 0:i.__curator)==null?void 0:d.user_id,s.decreeModel.journal=se.ORDERS_PROTOCOLS,s.decreeModel.company=p.currentUser.company.id,s.decreeModel.sender=(f=(w=p==null?void 0:p.currentUser)==null?void 0:w.top_level_department)==null?void 0:f.id,s.decreeModel.document_type=ae.DECREE,s.decreeModel.document_sub_type=o.params.document_sub_type===Y.EXTEND_BUSINESS_TRIP_NOTICE?Y.EXTEND_BUSINESS_TRIP_DECREE:o.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_FOREIGN?Y.BUSINESS_TRIP_DECREE_FOREIGN:Y.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,T.value=!0},$=async(g,i)=>{try{await s.actionUpdateDocument({id:i,body:{...s.decreeModel,trip_notice_id:g}}),await k.actionCountList(),j(null,n("successfully-saved"),A.SUCCESS)}catch{}},_=async()=>{var i;let g=null;t.formType===F&&o.query.notice_id?g=o.query.notice_id:t.formType===Ce&&o.params.id&&(g=o.params.id);try{await $(g,(i=s.decreeModel)==null?void 0:i.id),await q.replace({name:Me,params:{id:g,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type},query:{parent_id:o.query.parent_id}})}catch{}};return a({stepClick:R}),(g,i)=>{const d=Le;return y(),C("div",rn,[l(Se,{modelValue:e(m).content.$model,"onUpdate:modelValue":i[0]||(i[0]=w=>e(m).content.$model=w),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"]),b("div",an,[l(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),b("div",sn,[l(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:i[1]||(i[1]=w=>R(e(Xe)))}),l(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:I})])]),l(Ne,{modelValue:T.value,"onUpdate:modelValue":i[2]||(i[2]=w=>T.value=w),"send-button-loading":e(s).buttonLoading,"onEmit:send":_,"content-classes":"p-0"},{content:c(()=>[l(e(io),{"compose-model":D.value,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},dn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},cn={class:"px-6 py-4"},fa={__name:"BusinessTripForm",props:{formType:{type:String,default:F}},setup(u){const a=u,{t}=ne(),o=pe(),q=ue(),s=ie(),r=Pe();oe(r.rules,r.model),oe(r.trip_plan_rules,r.trip_plan_model),oe(r.booking_model_rules,r.booking_model),oe(r.decreeRules,r.decreeModel);const m=Z(null),n=ee(()=>a.formType===F?o.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_V2?"create-business-trip-notice":"create-business-trip-notice-foreign":o.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_V2?"update-business-trip-notice":"update-business-trip-notice-foreign"),p=ee(()=>{switch(o.query.step){case Xe:return ht;case Ke:return Tt;case ct:return Fl;case Vt:return nn;default:return ht}}),k=async M=>{var $;const I=e(m);(($=o.query)==null?void 0:$.step)!==M.value&&(await I.stepClick(M.value),M.value,Ke)},T=async()=>{o.query.step||await q.replace({query:{...o.query,step:Xe}}),r.stepperItems.forEach(M=>M.active=M.value===o.query.step)},D=async()=>{var $,_,g,i,d,w,f,V,N,P,v,h;const M=le(r.model.__approvers),I=le(r.model.__signers);if(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.bookings=[],r.model.trip_plans=[],r.model.approvers=M,r.model.signers=I,r.model.curator=(_=($=r.model)==null?void 0:$.__curator)==null?void 0:_.user_id,r.model.journal=se.INNER,r.model.company=(i=(g=s.currentUser)==null?void 0:g.company)==null?void 0:i.id,r.model.__groups.forEach((x,U)=>{const L=U+1;r.model.notices.push(...x.__users.map(K=>{var Q,O,W;return{start_date:x.__start_date,end_date:x.__end_date,end_date_2:x.__end_date,user:K.id,company:(O=(Q=s.currentUser)==null?void 0:Q.company)==null?void 0:O.id,sender_company:(W=x.__company)==null?void 0:W.id,regions:x.__regions.map(z=>z.id),tags:x.__tags.map(z=>({id:z.id})),route:x.__route,group_id:L,trip_type:o.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_FOREIGN?"foreign":"local",...K.business_trip_id?{id:K.business_trip_id}:{}}}))}),r.model.sender=(w=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:w.id,r.model.files=r.model.__files.map(x=>({id:x.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,a.formType===F&&o.query.notice_id)try{await r.actionUpdateDocument({id:o.query.notice_id,body:r.model})}catch{}else if(a.formType===F)try{const{data:x}=await r.actionCreateDocument(r.model),U={approvers:[],signers:[],curator:(V=(f=r.model)==null?void 0:f.__curator)==null?void 0:V.user_id,journal:se.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:(P=(N=s==null?void 0:s.currentUser)==null?void 0:N.top_level_department)==null?void 0:P.id,document_type:ae.DECREE,document_sub_type:o.params.document_sub_type===Y.EXTEND_BUSINESS_TRIP_NOTICE?Y.EXTEND_BUSINESS_TRIP_DECREE:o.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_FOREIGN?Y.BUSINESS_TRIP_DECREE_FOREIGN:Y.BUSINESS_TRIP_DECREE_V2,short_description:(v=r.model)==null?void 0:v.short_description,trip_notice_id:x.id,content:x.content};r.decreeModel.content=x.content;try{const L=await r.actionCreateDocument(U);r.decreeModel.id=(h=L==null?void 0:L.data)==null?void 0:h.id,await q.replace({query:{...o.query,notice_id:x.id}}),await r.actionGetDocumentDetailForUpdate(x.id)}catch{}}catch{}else if(a.formType===Ce&&o.params.id)try{await r.actionUpdateDocument({id:o.params.id,body:r.model})}catch{}},R=async()=>{try{await D(),await j(null,t("notice-saved-successfully"),A.SUCCESS)}catch{}};return Qe(async()=>{await T(),a.formType===Ce?await r.actionGetDocumentDetailForUpdate(o.params.id):o.query.notice_id&&await r.actionGetDocumentDetailForUpdate(o.query.notice_id)}),De(()=>{r.actionResetBTModel()}),(M,I)=>{const $=we,_=Ct;return y(),C("div",{class:Oe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(r).detailLoading}])},[e(r).detailLoading?(y(),G($,{key:0})):(y(),G(e($e),{key:1,title:n.value},{content:c(()=>[b("div",dn,[l(_,{items:e(r).stepperItems,"onEmit:stepClick":k},null,8,["items"])]),b("div",cn,[(y(),G(Gt(p.value),{"form-type":u.formType,ref_key:"childComponent",ref:m,"onEmit:onValidateAndSend":R},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},un=xe("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)},__groups:{$each:E.forEach({__users:{required:E.withMessage("Поле не должен быть пустым",S)},__tags:{required:E.withMessage("Поле не должен быть пустым",S)},__regions:{required:E.withMessage("Поле не должен быть пустым",S)},__start_date:{required:E.withMessage("Поле не должен быть пустым",S)},__end_date:{required:E.withMessage("Поле не должен быть пустым",S)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:E.forEach({users:{required:E.withMessage("Поле не должен быть пустым",S)},text:{required:E.withMessage("Поле не должен быть пустым",S)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"flex justify-between"},_n={class:"text-base text-primary-900 font-semibold mb-1"},fn=["onClick"],gn={class:"flex w-full gap-x-4"},qn={class:"flex flex-col gap-y-3"},bn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},hn={class:"flex justify-between"},yn={class:"text-base text-primary-900 font-semibold mb-1"},wn=["onClick"],vn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},kn={class:"text-base text-primary-900 font-semibold mb-2"},ga={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:F}},setup(u){const a=u,t=Z(!1),o=Z(!1),{t:q}=ne(),s=pe(),r=ue(),m=ie(),n=un(),p=ce();ye();const k=oe(n.rules,n.model),T=oe(n.trip_plan_rules,n.trip_plan_model),D=ee(()=>a.formType===F?"create-decree":"update-decree"),R=ee(()=>{const f=new Set;return n.model.__groups.reduce((V,N)=>N.__users&&Array.isArray(N.__users)?V.concat(N.__users):V,[]).filter(V=>f.has(V.id)?!1:(f.add(V.id),!0))}),M=async()=>{var P,v,h,x,U,L;if(t.value=!0,!await k.value.$validate()){j(null,q("fill-required-fields"),A.WARNING);return}const V=le(n.model.__approvers),N=le(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=V,n.model.signers=N,n.model.curator=(v=(P=n.model)==null?void 0:P.__curator)==null?void 0:v.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=(x=(h=m.currentUser)==null?void 0:h.company)==null?void 0:x.id,n.model.__groups.forEach((K,Q)=>{const O=Q+1;n.model.notices.push(...K.__users.map(W=>{var z,Ie;return{start_date:K.__start_date,end_date:K.__end_date,user:W.id,company:(Ie=(z=m.currentUser)==null?void 0:z.company)==null?void 0:Ie.id,regions:K.__regions.map(ve=>ve.id),tags:K.__tags.map(ve=>({id:ve.id})),group_id:O}}))}),n.model.sender=(L=(U=m==null?void 0:m.currentUser)==null?void 0:U.top_level_department)==null?void 0:L.id,n.model.files=n.model.__files.map(K=>({id:K.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(K=>({users:K.users.map(Q=>({id:Q.id})),text:K.text})),o.value=!0},I=()=>{},$=()=>{n.actionAddGroupBlock()},_=()=>{n.actionAddWorkPlanRow(),t.value=!1},g=f=>{n.model.__files=[],f.forEach(V=>{n.model.__files.push(V)})},i=async()=>{const f=await n.actionCreateDocument(n.model);await p.actionCountList(),f?(o.value=!1,j(null,q("document-sent"),A.SUCCESS),await r.replace({name:Ae,query:{document_type:s.params.document_type}})):j(null,q("error-occurred"),A.ERROR)},d=async()=>{await n.actionUpdateDocument({id:s.params.id,body:n.model}),await p.actionCountList(),j(null,q("changed"),A.SUCCESS),await r.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},w=()=>{a.formType===F?i():d()};return(f,V)=>{const N=we,P=fe,v=Be,h=me,x=rt,U=Ge,L=_e,K=Le,Q=Et;return e(n).detailLoading?(y(),G(N,{key:0})):(y(),C(J,{key:1},[l(e($e),{title:D.value},{content:c(()=>[l(je,{"onEmit:preview":M,"onEmit:clearForm":I},{default:c(()=>[l(L,null,{default:c(()=>[l(P,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":V[0]||(V[0]=O=>e(k).__curator.$model=O),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(P,{"col-class":"w-1/2"},{default:c(()=>[l(v,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":V[1]||(V[1]=O=>e(k).short_description.$model=O),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(P,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(y(!0),C(J,null,de(e(n).model.__groups,(O,W)=>(y(),C("div",pn,[b("div",mn,[b("span",_n,B(e(q)("group"))+"-"+B(W+1),1),W!==0?(y(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(n).actionDeleteGroupBlock(W)},[l(h,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,fn)):te("",!0)]),l(L,null,{default:c(()=>[l(P,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:O.__users,"onUpdate:modelValue":z=>O.__users=z,error:e(k).__groups.$each.$response.$data[W].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(P,{"col-class":"w-1/2"},{default:c(()=>[l(x,{modelValue:O.__regions,"onUpdate:modelValue":z=>O.__regions=z,error:e(k).__groups.$each.$response.$data[W].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":t.value},{chip:c(({value:z})=>[re(B(z.name),1)]),option:c(({value:z})=>[l(e(he),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(P,{"col-class":"w-1/2"},{default:c(()=>[l(x,{modelValue:O.__tags,"onUpdate:modelValue":z=>O.__tags=z,error:e(k).__groups.$each.$response.$data[W].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":t.value},{chip:c(({value:z})=>[re(B(z.name),1)]),option:c(({value:z})=>[l(e(he),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),l(P,{"col-class":"w-1/2"},{default:c(()=>[b("div",gn,[l(U,{modelValue:O.__start_date,"onUpdate:modelValue":[z=>O.__start_date=z,z=>O.__start_date=e(qe)(z)],error:e(k).__groups.$each.$response.$data[W].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(U,{modelValue:O.__end_date,"onUpdate:modelValue":[z=>O.__end_date=z,z=>O.__end_date=e(qe)(z)],error:e(k).__groups.$each.$response.$data[W].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(K,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:$},null,8,["icon-left"])]),_:1})]),_:1}),b("div",qn,[(y(!0),C(J,null,de(e(n).trip_plan_model.trip_plans,(O,W)=>(y(),C("div",bn,[b("div",hn,[b("span",yn,B(e(q)("plan"))+"-"+B(W+1),1),W!==0?(y(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(n).actionDeleteWorkPlanRow(W)},[l(h,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,wn)):te("",!0)]),l(L,null,{default:c(()=>[l(P,{"col-class":"w-1/2"},{default:c(()=>[l(Q,{modelValue:O.text,"onUpdate:modelValue":z=>O.text=z,error:e(T).trip_plans.$each.$response.$data[W].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(P,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:O.users,"onUpdate:modelValue":z=>O.users=z,options:R.value,error:e(T).trip_plans.$each.$response.$data[W].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(K,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:_},null,8,["icon-left"]),l(L,null,{default:c(()=>[l(P,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":V[2]||(V[2]=O=>e(n).model.__approvers=O),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(P,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":V[3]||(V[3]=O=>e(k).__signers.$model=O),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(P,{"col-class":"w-full"},{default:c(()=>[b("div",vn,[b("div",kn,B(e(q)("decree")),1),l(Se,{modelValue:e(k).content.$model,"onUpdate:modelValue":V[4]||(V[4]=O=>e(k).content.$model=O),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":g},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:o.value,"onUpdate:modelValue":V[5]||(V[5]=O=>o.value=O),"send-button-loading":e(n).buttonLoading,"onEmit:send":w},{content:c(()=>[l(e(kt),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},xn={class:"flex gap-x-[6px] items-center px-2 py-1 bg-greyscale-50 rounded-[90px] border-b border-greyscale-200"},$n={key:0,class:"w-6 h-6 rounded-full flex items-center justify-center text-xs text-white bg-primary-500"},Vn={class:"text-greyscale-900 text-sm font-medium"},ot={__name:"BaseChip",props:{item:{type:Object,default:()=>({})},label:{type:String,default:"Example"},type:{type:String,default:"user",validator(u){return["user","location","other"].includes(u)}},clearable:{type:Boolean,default:!1}},emits:["emit:clear"],setup(u,{emit:a}){const t=o=>{a("emit:clear",o)};return(o,q)=>(y(),C("div",xn,[u.type==="user"?(y(),C("div",$n,B(u.label[0]),1)):u.type==="location"?(y(),G(me,{key:1,icon:e(Wt),class:"text-greyscale-400"},null,8,["icon"])):te("",!0),b("div",Vn,B(u.label),1),u.clearable?(y(),C("div",{key:2,class:"flex justify-center items-center w-5 h-5 rounded-full bg-critic-500 cursor-pointer",onClick:q[0]||(q[0]=s=>t(u.item))},[l(me,{icon:e(Yt),class:"text-white"},null,8,["icon"])])):te("",!0)]))}},En={key:0,class:"flex flex-col gap-y-5"},Un={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Sn={class:"text-sm font-medium text-greyscale-500"},Cn={class:"text-green-900"},Tn=b("br",null,null,-1),Rn={class:"flex flex-col gap-y-2"},Ln={class:"text-sm font-medium text-greyscale-500"},Dn=b("span",{class:"text-red-500"},"*",-1),Mn={class:"flex flex-wrap gap-3"},Nn={class:"flex flex-col gap-y-2"},In={key:1,class:"flex flex-col gap-y-5"},On={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Pn={class:"text-sm font-medium text-greyscale-500"},Bn={class:"text-green-900"},An={__name:"ChangingBusinessTripModal",setup(u){const a=ut(),{t}=ne(),o=ee(()=>{var n;return["reporting","closed"].includes((n=a==null?void 0:a.changingBTModel)==null?void 0:n.trip_status)}),q=()=>{var p;if(!(((p=a.tempVerifications)==null?void 0:p.length)>0)){j(null,"Kamida bitta hudud qo'shing!",A.WARNING);return}a.actionUpdateUserTrip()},s=()=>{a.actionClearTempModel()},r=(n,p)=>{a.tempVerifications.splice(p,1)},m=n=>{n.value.forEach(p=>{a.tempVerifications.some(T=>T.region.id===p.id)||a.tempVerifications.push({region:p,is_visited:!1}),a.tempRegions=[]})};return(n,p)=>{const k=we,T=rt,D=Ge,R=Le,M=Ut;return y(),G(M,{modelValue:e(a).changingBTDialog,"onUpdate:modelValue":p[4]||(p[4]=I=>e(a).changingBTDialog=I),label:"confirm","max-width":"max-w-[631px]",closable:!1},Ht({content:c(()=>{var I,$,_,g;return[e(a).changingBTLoading?(y(),G(k,{key:0,class:"my-16"})):(y(),C(J,{key:1},[o.value?(y(),C("div",In,[b("div",On,[l(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),b("div",Pn,[b("span",Bn,B((g=(_=e(a).changingBTModel)==null?void 0:_.user)==null?void 0:g.full_name),1),re("ga tegishli bo'lgan xizmat safari yakunlangan! ")])])])):(y(),C("div",En,[b("div",Un,[l(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),b("div",Sn,[re("Siz rostdan ham "),b("span",Cn,B(($=(I=e(a).changingBTModel)==null?void 0:I.user)==null?void 0:$.full_name),1),re("ga tegishli bo'lgan xizmat safarini o'zgartirmoqchimisiz? "),Tn,re(" Bunda xizmat safari bilan vaqtinchalik amaliyot bajarish to'xtatiladi! ")])]),b("div",Rn,[b("span",Ln,[re(B(e(t)("trip-place"))+" ",1),Dn]),b("div",Mn,[(y(!0),C(J,null,de(e(a).tempVerifications,(i,d)=>{var w;return y(),G(ot,{key:i.id,label:(w=i==null?void 0:i.region)==null?void 0:w.name_uz,clearable:!i.is_visited,type:"location",class:"w-fit","onEmit:clear":f=>r(i,d)},null,8,["label","clearable","onEmit:clear"])}),128))]),l(T,{modelValue:e(a).tempRegions,"onUpdate:modelValue":p[0]||(p[0]=i=>e(a).tempRegions=i),"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",type:"department",placeholder:"add-trip-place",required:"","onEmit:change":p[1]||(p[1]=i=>m(i))},{chip:c(({value:i})=>[re(B(i.name),1)]),option:c(({value:i})=>[l(e(he),{title:i.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue"])]),b("div",Nn,[l(D,{modelValue:e(a).changingBTModel.end_date,"onUpdate:modelValue":[p[2]||(p[2]=i=>e(a).changingBTModel.end_date=i),p[3]||(p[3]=i=>e(a).changingBTModel.end_date=e(qe)(i))],"min-date":new Date(e(a).changingBTModel.start_date),required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","min-date"])])]))],64))]}),_:2},[e(a).changingBTLoading?void 0:{name:"footer",fn:c(()=>[l(R,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:s}),o.value?te("",!0):(y(),G(R,{key:0,loading:e(a).userTripUpdateButtonLoading,label:"update",rounded:"",shadow:"",type:"button",onClick:q},null,8,["loading"]))]),key:"0"}]),1032,["modelValue"])}}},jn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},Fn={class:"px-6 py-4"},zn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Gn={class:"flex justify-between"},Wn={class:"text-base text-primary-900 font-semibold mb-1"},Yn={class:"text-sm text-greyscale-500 font-medium"},Hn={class:"text-sm text-greyscale-500 font-medium"},Xn={class:"flex flex-wrap gap-3 mt-1"},Kn={class:"flex justify-between items-center"},Qn={class:"text-sm text-greyscale-500 font-medium"},Jn={class:"text-base text-primary-900 font-semibold mb-2"},Zn={class:"flex items-center justify-between"},qa={__name:"ExtendBusinessTripForm",props:{formType:{type:String,default:F}},setup(u){const a=u,t=ut(),o=Pe(),q=ie(),s=oe(t.rules,t.model),r=pe(),m=ue(),{t:n}=ne(),p=Z(!1);Z(!1);const k=ee(()=>{const $=a.formType===F;return"trip-notice-for-change"}),T=async()=>{var i,d,w,f,V,N,P,v,h,x,U,L,K;const $=le(t.model.__approvers),_=le(t.model.__signers);t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.approvers=$,t.model.signers=_,t.model.curator=(d=(i=t.model)==null?void 0:i.__curator)==null?void 0:d.user_id,t.model.journal=se.INNER,t.model.company=(f=(w=q.currentUser)==null?void 0:w.company)==null?void 0:f.id;let g=1;if(t.model.__groups.forEach(Q=>{Array.isArray(Q.__notices_to_change)&&t.model.notices.push(...Q.__notices_to_change.map(O=>{var W,z,Ie;return{...a.formType===Ce?{id:O.id}:{},start_date:O.__start_date,end_date:O.__end_date,user:O.user.id,company:(z=(W=q.currentUser)==null?void 0:W.company)==null?void 0:z.id,sender_company:(Ie=O.sender_company)==null?void 0:Ie.id,regions:O.__regions.map(ve=>ve.id),tags:O.tags.map(ve=>({id:ve.id})),route:O.route,group_id:g++,trip_type:"changed_local",parent:O.id,...O.business_trip_id?{id:O.business_trip_id}:{}}}))}),t.model.sender=(N=(V=q==null?void 0:q.currentUser)==null?void 0:V.top_level_department)==null?void 0:N.id,t.model.files=t.model.__files.map(Q=>({id:Q.id})),t.model.document_type=r.params.document_type,t.model.document_sub_type=r.params.document_sub_type,t.model.trip_notice_id=((P=r.query)==null?void 0:P.parent_id)||null,a.formType===F&&r.query.notice_id)try{await t.actionUpdateDocument({id:r.query.notice_id,body:t.model}),await j(null,n("notice-saved-successfully"),A.SUCCESS)}catch{}else if(a.formType===F)try{const{data:Q}=await t.actionCreateDocument(t.model),O={approvers:[],signers:[],curator:(h=(v=t.model)==null?void 0:v.__curator)==null?void 0:h.user_id,journal:se.ORDERS_PROTOCOLS,company:q.currentUser.company.id,sender:(U=(x=q==null?void 0:q.currentUser)==null?void 0:x.top_level_department)==null?void 0:U.id,document_type:ae.DECREE,document_sub_type:Y.EXTEND_BUSINESS_TRIP_DECREE,short_description:(L=t.model)==null?void 0:L.short_description,trip_notice_id:Q.id,content:Q.content};o.decreeModel.content=Q.content;try{const W=await t.actionCreateDocument(O);o.decreeModel.id=(K=W==null?void 0:W.data)==null?void 0:K.id,await m.replace({query:{...r.query,notice_id:Q.id,parent_id:r.query.parent_id}}),await j(null,n("notice-saved-successfully"),A.SUCCESS),await t.actionGetDocumentDetailForUpdate(Q.id,r.query.parent_id)}catch(W){console.error(W)}}catch(Q){console.error(Q)}else if(a.formType===Ce&&r.params.id)try{await t.actionUpdateDocument({id:r.params.id,body:t.model}),await j(null,n("notice-saved-successfully"),A.SUCCESS)}catch{}},D=$=>{t.model.__files=[],$.forEach(_=>{t.model.__files.push(_)})},R=async $=>{var _;try{((_=r.query)==null?void 0:_.step)!==$.value&&($.value===Ke&&(await M(),await T()),await o.actionStepClick(m,r,$.value))}catch(g){console.error(g)}},M=async()=>{const $=await s.value.$validate();if(p.value=!0,!$)return j(null,n("fill-required-fields"),A.WARNING),Promise.reject();if(!t.model.__groups.some(g=>Array.isArray(g.__notices_to_change)&&g.__notices_to_change.length>0))return j(null,"Kamida bitta xodim o'zgartirish uchun tanlanishi kerak!",A.WARNING),Promise.reject()},I=async()=>{r.query.step||await m.replace({query:{...r.query,step:Xe}}),o.stepperItems.forEach($=>$.active=$.value===r.query.step)};return et(async()=>{await I()}),Qe(async()=>{var $,_,g,i,d,w;a.formType===F&&(($=r.query)!=null&&$.notice_id)&&((_=r.query)!=null&&_.parent_id)?await t.actionGetDocumentDetailForUpdate((g=r.query)==null?void 0:g.notice_id,(i=r.query)==null?void 0:i.parent_id):a.formType===F&&((d=r.query)!=null&&d.parent_id)?await t.actionGetParentDocumentDetail(r.query.parent_id):a.formType===Ce&&await t.actionGetDocumentDetailForUpdate(r.params.id,(w=r.query)==null?void 0:w.parent_id)}),De(()=>{t.actionResetBTModel()}),($,_)=>{const g=we,i=Ct,d=fe,w=Be,f=_e,V=Le;return y(),C("div",{class:Oe(["extend-business-trip-form",{"h-[calc(100vh-200px)]":e(t).detailLoading}])},[e(t).detailLoading?(y(),G(g,{key:0})):(y(),G(e($e),{key:1,title:k.value},{content:c(()=>{var N,P;return[b("div",jn,[l(i,{items:e(o).stepperItems,"onEmit:stepClick":R},null,8,["items"])]),b("div",Fn,[((N=e(r).query)==null?void 0:N.step)==="trip_info"?(y(),C(J,{key:0},[l(f,null,{default:c(()=>[l(d,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=v=>e(s).__curator.$model=v),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(w,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=v=>e(s).short_description.$model=v),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(y(!0),C(J,null,de(e(t).model.__groups,(v,h)=>(y(),C("div",zn,[b("div",Gn,[b("span",Wn,B(e(n)("group"))+"-"+B(h+1),1)]),l(f,null,{default:c(()=>[l(d,{"col-class":"w-full"},{default:c(()=>[l(X,{modelValue:v.__users_to_extend,"onUpdate:modelValue":[x=>v.__users_to_extend=x,x=>e(t).actionAddUsersToExtend(v,h)],label:"select-employees-in-business-trip",options:v.__users,searchable:!1,placeholder:"select-employees","show-nested-error":p.value,disabled:u.formType===e(Ce),allSelectable:""},null,8,["modelValue","onUpdate:modelValue","options","show-nested-error","disabled"])]),_:2},1024),l(d,{"col-class":"w-full"},{default:c(()=>[(y(!0),C(J,null,de(v.__notices_to_change,(x,U)=>(y(),G(f,null,{default:c(()=>[l(d,{"col-class":"w-1/3"},{default:c(()=>{var L;return[b("span",Yn,B(e(n)("employees-in-business-trip")),1),l(ot,{label:(L=x.user)==null?void 0:L.full_name,class:"w-fit mt-1"},null,8,["label"])]}),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[b("span",Hn,B(e(n)("trip-place")),1),b("div",Xn,[(y(!0),C(J,null,de(x.__regions,L=>(y(),G(ot,{key:x.id,label:L.name_uz,type:"location",class:"w-fit"},null,8,["label"]))),128))])]),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[b("div",Kn,[b("div",null,[b("span",Qn,B(e(n)("end-date")),1),l(ot,{label:x.__end_date,type:"other",class:"w-fit mt-1"},null,8,["label"])])])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]))),256))]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":_[2]||(_[2]=v=>e(t).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=v=>e(s).__signers.$model=v),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:c(()=>[b("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(t).model.content?"border-critic-500":"border-greyscale-200"])},[b("div",Jn,B(e(n)("notice")),1),l(Se,{modelValue:e(s).content.$model,"onUpdate:modelValue":_[4]||(_[4]=v=>e(s).content.$model=v),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),b("div",Zn,[l(V,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(V,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:_[5]||(_[5]=v=>R({value:e(Ke)}))})])],64)):((P=e(r).query)==null?void 0:P.step)==="decree"?(y(),G(e(Tt),{key:1,"form-type":u.formType},null,8,["form-type"])):te("",!0)])]}),_:1},8,["title"])),l(An,{modelValue:e(t).changingBTDialog,"onUpdate:modelValue":_[6]||(_[6]=N=>e(t).changingBTDialog=N)},null,8,["modelValue"])],2)}}};export{ia as _,ua as a,pa as b,ma as c,fa as d,ga as e,qa as f,da as g,ca as h,_a as i};
