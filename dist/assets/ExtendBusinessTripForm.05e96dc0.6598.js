import{_ as _e}from"./BaseRow.417a818f.6598.js";import{_ as Be}from"./BaseInput.f0eac26f.6598.js";import{_ as fe}from"./BaseCol.f1675679.6598.js";import{v as Z,bb as nt,a1 as et,o as w,c as C,i as l,z as c,h as e,b8 as Ze,d as ee,du as ze,a as h,t as B,F as J,e as de,a3 as oe,g as te,f as G,B as Tt,dz as Rt,bj as Lt,n as Oe,r as yt,G as Le,as as xe,cN as ae,cO as W,cl as se,u as re,b as ue,ao as pe,be as De,a5 as A,ac as we,a8 as Dt,cY as Qe,dA as Nt,_ as me,dB as It,dC as Mt,dD as Ot,dE as Pt,dF as Bt,$ as At,dG as jt,dH as Ft,aX as wt,bt as Ye,c1 as He,dI as zt,ds as at,E as Gt,cI as Wt,cR as Yt,aE as Ht}from"./index.4fbcd687.7046.js";import{c as U,r as S,u as le}from"./index.5aa89607.6598.js";import{_ as Xt,a as Kt}from"./BranchMultiSelect.ae323f11.6598.js";import{j as Qt,k as Jt,l as Zt,_ as $e,a as eo,h as to,g as oo,b as lo,c as no,d as ro,e as vt,i as ao,m as so,f as io}from"./BasePOA.754e4b29.6598.js";import"./BaseTabMenu.54a2078f.6598.js";import"./dialog.esm.274b6460.6598.js";import"./tabpanel.esm.fb14fdc9.6598.js";import"./FileSaver.min.93c84db0.6598.js";import{e as co,u as ie,a4 as _t,O as Ve,s as Te,a2 as H,a5 as uo,a6 as Ge,a7 as ne,d as j,a8 as Re,a9 as ft,aa as st,ab as Fe,X as lt}from"./axios.config.b0c8e9d8.6598.js";import"./BaseTabView.00b7b2a9.6598.js";import"./FileTabs.f2f9d9ef.6598.js";import{_ as X}from"./UserMultiSelect.cf09a282.6598.js";import{u as ge}from"./common.1f596a44.6598.js";import{u as ce}from"./count.store.ab65fded.6598.js";import{u as dt,e as qt,g as Ee,h as be,i as Ue,j as Ae,c as Ne,k as po,l as ye,B as Je,m as Xe,n as Ke,o as mo,p as kt,M as it,O as _o,f as xt,T as fo,q as ct,r as $t,C as qo,P as go,s as bo}from"./index.store.f86623e3.6598.js";import{F as z,a as Ce}from"./constants.50c90617.6598.js";import{_ as tt}from"./BaseDropdown.cff91e0a.6598.js";import{_ as We}from"./BaseCalendar.94f6ae9d.6598.js";import{_ as rt}from"./BaseMultiSelect.0fe6782e.6598.js";import{f as ho,a as he}from"./formatDate.e738ecc7.6598.js";import{Q as gt}from"./qrcode.vue.esm.7744ee5a.6598.js";import"./divider.esm.ac144c72.6598.js";import"./dayjs.min.bd0cc12e.6598.js";/* empty css                                                                                         */import{c as yo}from"./Dropdown.81f5037e.6598.js";import"./menu.esm.76d6c80d.6598.js";/* empty css                                                      */import"./avatar.esm.fed63ea4.6598.js";/* empty css                                                      */import"./businessTrip.store.e93d1c80.6598.js";/* empty css                                                            */import"./accordiontab.esm.ca3a43a4.6598.js";import"./common.store.3185a891.6598.js";import{_ as qe}from"./WithRadio.53f7e67d.6598.js";import"./radiobutton.esm.108e612d.6598.js";import"./checkbox.esm.2075f2d3.6598.js";import{_ as Vt}from"./ShortDescription.5e86827a.6598.js";import{_ as bt}from"./BaseBrickRadio.28dd11d6.6598.js";import{_ as wo}from"./BaseLabel.5863fdb7.6598.js";import{K as vo}from"./main.a1571b8b.6598.js";import{a as ko}from"./index.ff5d4a3f.6598.js";import{_ as xo}from"./WithSelectable.2bae61fe.6598.js";import{_ as $o}from"./BaseBrickTab.a7cc134c.6598.js";import{_ as Vo}from"./BaseFileUpload.a353deef.6598.js";import{_ as Eo}from"./BaseFroalaEditor.95b2d6bd.6598.js";import"./BaseCalendar.vue_vue_type_style_index_0_lang.1cdd0e79.6598.js";import"./multiselect.esm.bcfa516b.6598.js";/* empty css                                                             */import"./dropdown.esm.36ca1ead.6598.js";/* empty css                                                          */import"./textarea.esm.4fd31877.6598.js";import"./overlaypanel.esm.104bd437.6598.js";/* empty css                                                              */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang.9f4e3571.6598.js";/* empty css                                                                            */import"./review.store.33900bb5.6598.js";/* empty css                                                       */import{_ as Et}from"./BaseDialog.77f21078.6598.js";const Uo={class:"user-select"},ke={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(u,{emit:a}){const o=u,t=Z([]),g=nt(o,"modelValue"),s=async r=>{let{data:m}=await co.get(`${o.apiUrl}/`,r);m.hasOwnProperty("results")?t.value=m.results:t.value=m};return et(async()=>{await s(o.apiParams)}),(r,m)=>(w(),C("div",Uo,[l(tt,{modelValue:e(g),"onUpdate:modelValue":m[0]||(m[0]=n=>Ze(g)?g.value=n:null),options:t.value,"onUpdate:options":m[1]||(m[1]=n=>t.value=n),error:o.error,"api-url":o.apiUrl,"api-params":o.apiParams,"option-label":"full_name",label:o.label,placeholder:o.placeholder,required:o.required,searchable:"","onEmit:change":m[2]||(m[2]=n=>a("emit:change",n))},{option:c(({option:n})=>[l(e(xo),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},So={class:"business-trip-decree-template-view letter-template"},Co={class:"flex flex-col text-sm font-medium mt-4"},To=h("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),Ro=["innerHTML"],Lo=["innerHTML"],Do={class:"employees-table text-sm mt-4"},No={class:"w-full"},Io=h("tr",{class:"text-center"},[h("td",{class:"border-2 p-1"},"№"),h("td",{class:"border-2 p-1"},"F.I.SH"),h("td",{class:"border-2 p-1"},"Departament va lavozim"),h("td",{class:"border-2 p-1"},"Yo'nalish"),h("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Mo={class:"text-center"},Oo={class:"border-2 p-1"},Po={class:"border-2 p-1"},Bo={class:"border-2 p-1"},Ao=h("br",null,null,-1),jo={class:"border-2 p-1"},Fo={class:"flex flex-col gap-y-1"},zo={key:0},Go={class:"border-2 p-1 w-[100px]"},Wo=h("br",null,null,-1),Yo={class:"indent-8 mt-2 text-sm text-justify"},Ho=h("div",null,"xizmat safariga yuborilsin.",-1),Xo=h("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Ko=h("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),Qo=h("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Jo={key:0},Zo=h("span",{class:"font-semibold"},"Asos: ",-1),el=h("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),tl=h("div",null," O‘zR MKning 287-moddasi; ",-1),ol=h("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),ll={class:"mt-6 pb-2 px-4"},nl={class:"text-sm font-semibold block"},rl={class:"text-sm font-semibold block"},al={class:"text-sm font-semibold block"},sl={class:"text-sm font-semibold block"},il={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(u){const a=u,o=dt(),t=ee(()=>{var m;return a.preview?ie().currentUser:(m=a.composeModel)==null?void 0:m.author}),g=ee(()=>{var m,n,p;return a.preview?(m=a.composeModel)==null?void 0:m.__employees.map(x=>({empFullName:x.full_name,empDepName:x.top_level_department.name,empPositionName:x.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(p=(n=a.composeModel)==null?void 0:n.notices)==null?void 0:p.map(x=>({empFullName:x.user.full_name,empDepName:x.user.top_level_department.name,empPositionName:x.user.position.name,destinations:x.destinations,startDate:x.start_date,endDate:x.end_date}))}),s=ee(()=>{var n,p,x;if(a.preview)return[(n=a.composeModel)==null?void 0:n.__curator];const m=(p=a.composeModel)==null?void 0:p.signers.find(T=>T.type===ze.BASIC_SIGNER);return m?[m]:[(x=a.composeModel)==null?void 0:x.curator].filter(Boolean)}),r=ee(()=>{var m,n;return a.preview?(m=a.composeModel)==null?void 0:m.__signers:(n=a.composeModel)==null?void 0:n.signers.filter(p=>p.type===ze.SIGNER)});return(m,n)=>{var T,N,R,D,I,$,_,q;const p=fe,x=_e;return w(),C("div",So,[l(e(Qt)),l(e(Jt),{"dep-name":(N=(T=t.value)==null?void 0:T.top_level_department)==null?void 0:N.name},null,8,["dep-name"]),h("div",Co,[h("span",null," № "+B((R=a.composeModel)==null?void 0:R.register_number),1),h("span",null,B(((D=a.composeModel)==null?void 0:D.register_date)&&e(ho)((I=a.composeModel)==null?void 0:I.register_date)),1)]),To,e(o).historyShow?(w(),C("div",{key:0,class:"text-justify",innerHTML:e(o).historyContent},null,8,Ro)):(w(),C("div",{key:1,class:"text-justify",innerHTML:($=a.composeModel)==null?void 0:$.content},null,8,Lo)),h("div",Do,[h("table",No,[Io,g.value&&g.value.length?(w(!0),C(J,{key:0},de(g.value,(i,d)=>(w(),C("tr",Mo,[h("td",Oo,B(d+1),1),h("td",Po,B(i.empFullName),1),h("td",Bo,[oe(B(i.empDepName)+" ",1),Ao,oe(" "+B(i.empPositionName),1)]),h("td",jo,[h("div",Fo,[(w(!0),C(J,null,de(i.destinations,(b,f)=>(w(),C("span",null,[oe(B(b.name)+" ",1),f!==i.destinations.length-1?(w(),C("span",zo,",")):te("",!0)]))),256))])]),h("td",Go,[oe(B(i.startDate)+" ",1),Wo,oe(" "+B(i.endDate),1)])]))),256)):te("",!0)])]),h("div",Yo,[Ho,Xo,Ko,Qo,(_=u.composeModel)!=null&&_.trip_notice_register_number?(w(),C("div",Jo,[Zo,oe(B((q=u.composeModel)==null?void 0:q.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):te("",!0),el,tl,ol]),h("div",ll,[(w(!0),C(J,null,de(s.value,i=>(w(),G(x,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(p,{"col-class":"w-1/3"},{default:c(()=>[h("span",nl,B(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(w(),G(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):te("",!0)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[h("span",rl,B(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(w(!0),C(J,null,de(r.value,i=>(w(),G(x,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(p,{"col-class":"w-1/3"},{default:c(()=>[h("span",al,B(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(w(),G(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):te("",!0)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[h("span",sl,B(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),l(e(Zt),{"compose-model":a.composeModel,author:t.value},null,8,["compose-model","author"])])}}};var dl=`
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
`,cl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Tt.extend({name:"editor",css:dl,classes:cl});(function(){try{return window.Quill}catch{return null}})();const Se={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(u){return["froala","tiny"].includes(u)}}},emits:["update:modelValue","emit:fileUpload"],setup(u,{emit:a}){const o=u,t=nt(o,"modelValue"),g=Z([{title:"text",slot:"editor",icon:Rt},{title:"file",slot:"file",icon:Lt}]);return(s,r)=>(w(),G($o,{"tab-panel-list":g.value,"panel-container-class":"px-0"},{editor:c(()=>[u.editor==="froala"?(w(),G(Eo,{key:0,modelValue:e(t),"onUpdate:modelValue":r[0]||(r[0]=m=>Ze(t)?t.value=m:null)},null,8,["modelValue"])):(w(),G(yo,{key:1,modelValue:e(t),"onUpdate:modelValue":r[1]||(r[1]=m=>Ze(t)?t.value=m:null)},null,8,["modelValue"]))]),file:c(()=>[h("div",{class:Oe(o.fileUploadContainerClasses)},[l(Vo,{files:o.files,"onEmit:fileUpload":r[2]||(r[2]=m=>a("emit:fileUpload",m))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ul={class:"flex flex-col justify-between h-full"},pl={class:"px-6 py-4 overflow-y-auto"},ml={class:"actions p-6"},je={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(u,{emit:a}){return(o,t)=>{const g=Le;return w(),C("div",ul,[h("div",pl,[yt(o.$slots,"default")]),h("div",ml,[l(g,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:t[0]||(t[0]=s=>a("emit:clearForm"))}),l(g,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:t[1]||(t[1]=s=>a("emit:preview"))})])])}}},_l=xe("sd-stores-inner",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,document_type:ae.INNER,document_sub_type:W.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:se.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:U.withMessage("Поле не должен быть пустым",S)},content:{required:U.withMessage("Поле не должен быть пустым",S)},__departments:{required:U.withMessage("Поле не должен быть пустым",S)},__approvers:{},__signers:{required:U.withMessage("Поле не должен быть пустым",S)}}}},actions:{async actionCreateDocument(u){let a={...u,type:qt,sub_type:qt};this.buttonLoading=!0;const{response:o,error:t}=await Ve(Ue,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):Promise.reject(t)},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await be(u);Te(this.model,a),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers),this.model.__departments=await uo(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),fl={class:"font-semibold text-xl"},Ie={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(u,{emit:a}){const t=nt(u,"modelValue"),{t:g}=re();return(s,r)=>{const m=Le,n=Et;return w(),G(n,{modelValue:e(t),"onUpdate:modelValue":r[1]||(r[1]=p=>Ze(t)?t.value=p:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[h("span",fl,B(e(g)("preview")),1)]),content:c(()=>[yt(s.$slots,"content")]),footer:c(()=>[l(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(m,{label:u.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:u.sendButtonLoading,onClick:r[0]||(r[0]=p=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},sa={__name:"InnerForm",props:{formType:{type:String,default:z}},setup(u){const a=u,o=ie(),t=_l();ge();const g=ce(),s=Z(!1);Z(null);const{t:r}=re(),m=ue(),n=pe(),p=le(t.rules,t.model),x=async()=>{await p.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.departments=[],t.model.departments=t.model.__departments.map(_=>_.id),t.model.files=[],t.model.files=t.model.__files.map(_=>({id:_.id})),t.model.journal=se.INNER,t.model.sender=o.currentUser.top_level_department.id,t.model.approvers=ne(t.model.__approvers),t.model.signers=ne(t.model.__signers),t.model.document_type=n.params.document_type,t.model.document_sub_type=n.params.document_sub_type,t.model.receiver&&delete t.model.receiver)},T=()=>{a.formType===z?N():R()},N=async()=>{const $=await t.actionCreateDocument(t.model);await g.actionCountList(),$?(s.value=!1,j(null,r("document-sent"),A.SUCCESS),await m.replace({name:Ae,query:{document_type:ae.INNER}})):j(null,r("error-occurred"),A.ERROR)},R=async()=>{await t.actionUpdateDocument({id:n.params.id,body:t.model}),await g.actionCountList(),j(null,r("document-sent"),A.SUCCESS),await m.replace({name:Ne,params:{id:n.params.id,document_type:ae.INNER,document_sub_type:W.SERVICE_LETTER}})},D=()=>{console.log("Clear Form")},I=$=>{t.model.__files=[],$.forEach(_=>{t.model.__files.push(_)})};return et(async()=>{n.params.id&&await t.actionGetDocumentDetailForUpdate(n.params.id)}),De(()=>{Ge(t.model)}),($,_)=>{const q=we,i=fe,d=Be,b=_e;return e(t).detailLoading?(w(),G(q,{key:0})):(w(),C(J,{key:1},[l(e($e),{title:a.formType===e(z)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[l(je,{"onEmit:preview":x,"onEmit:clearForm":D},{default:c(()=>[l(b,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(Xt,{modelValue:e(p).__departments.$model,"onUpdate:modelValue":_[0]||(_[0]=f=>e(p).__departments.$model=f),error:e(p).__departments},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":_[2]||(_[2]=f=>e(p).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(p).content.$model,"onUpdate:modelValue":_[4]||(_[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:s.value,"onUpdate:modelValue":_[5]||(_[5]=f=>s.value=f),"send-button-loading":e(t).buttonLoading,"onEmit:send":T},{content:c(()=>{var f,V;return[l(eo,{"compose-model":{...e(t).model,signers:e(t).model.__signers,approvers:e(t).model.__approvers,author:e(t).model.__signers[0],sender:{name:(V=(f=e(o).currentUser)==null?void 0:f.top_level_department)==null?void 0:V.name},receiver:{departments:e(t).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},ql=xe("sd-store-application",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:U.withMessage("Поле не должен быть пустым",S)},__curator:{required:U.withMessage("Поле не должен быть пустым",S)},__signers:{}}}},actions:{async actionCreateDocument(u){let a={...u};this.buttonLoading=!0;const{response:o,error:t}=await Ve(Ue,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await be(u);Te(this.model,a),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers.filter(o=>o.type===ze.SIGNER)),this.model.__curator=await Re([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Ut=xe("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:ie().currentUser.company.id,curator:null,document_type:ae.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:se.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:U.withMessage("Поле не должен быть пустым",S)},register_date:{required:U.withMessage("Поле не должен быть пустым",S)},content:{required:U.withMessage("Поле не должен быть пустым",S)},__negotiators:{required:U.withMessage("Поле не должен быть пустым",S)},__curator:{required:U.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:o}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await be(u);Te(this.model,a),this.model.__signers=await H(a.signers.filter(o=>o.type!==ze.NEGOTIATOR)),this.model.__negotiators=await H(a.signers.filter(o=>o.type===ze.NEGOTIATOR)),this.model.__approvers=await H(a.approvers),this.model.__curator=await Re([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),ia={__name:"ApplicationForm",props:{formType:{type:String,default:z}},setup(u){const a=u,o=ie(),t=ql();ge();const g=ce();Ut();const s=Z(!1);Z(null);const{t:r}=re(),m=ue(),n=pe(),p=le(t.rules,t.model),x=ee(()=>n.params.document_sub_type===W.EXPLANATION_LETTER?a.formType===z?"create-explanation-letter":"update-explanation-letter":a.formType===z?"create-sd-application":"update-sd-application"),T=async()=>{var q,i,d,b,f;await p.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.signers=[{user:(q=o==null?void 0:o.currentUser)==null?void 0:q.id}],t.model.sender=(d=(i=o==null?void 0:o.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,t.model.curator=(f=(b=t==null?void 0:t.model)==null?void 0:b.__curator)==null?void 0:f.user_id,t.model.journal=se.APPLICATION,t.model.document_type=n.params.document_type,t.model.document_sub_type=n.params.document_sub_type,t.model.approvers=ne(t.model.__approvers))},N=async()=>{},R=()=>{a.formType===z?D():I()},D=async()=>{const _=await t.actionCreateDocument(t.model);await g.actionCountList(),_?(s.value=!1,j(null,r("document-sent"),A.SUCCESS),await m.replace({name:Ae,query:{document_type:ae.APPLICATION}})):j(null,r("error-occurred"),A.ERROR)},I=async()=>{await t.actionUpdateDocument({id:n.params.id,body:t.model}),await g.actionCountList(),j(null,r("document-sent"),A.SUCCESS),await m.replace({name:Ne,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},$=_=>{t.model.__files=[],_.forEach(q=>{t.model.__files.push(q)})};return et(async()=>{n.params.id&&await t.actionGetDocumentDetailForUpdate(n.params.id)}),De(()=>{Ge(t.model)}),(_,q)=>{const i=we,d=fe,b=_e;return e(t).detailLoading?(w(),G(i,{key:0})):(w(),C(J,{key:1},[l(e($e),{title:x.value},{content:c(()=>[l(je,{"onEmit:preview":T,"onEmit:clearForm":N},{default:c(()=>[l(b,null,{default:c(()=>[l(d,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":q[0]||(q[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":q[1]||(q[1]=f=>e(t).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":q[2]||(q[2]=f=>e(p).__signers.$model=f),disabled:"",label:"signers",placeholder:e(o).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),l(d,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(p).content.$model,"onUpdate:modelValue":q[3]||(q[3]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":$},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:s.value,"onUpdate:modelValue":q[4]||(q[4]=f=>s.value=f),"send-button-loading":e(t).buttonLoading,"onEmit:send":R},{content:c(()=>[l(to,{"compose-model":{...e(t).model,curator:e(t).model.__curator,author:a.formType===e(z)?e(o).currentUser:e(t).model.__signers[0].user,signers:a.formType===e(z)?[e(o).currentUser]:e(t).model.__signers},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=xe("sd-notice-store",{state:()=>(ie(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:ae.NOTICE,document_sub_type:W.BUSINESS_TRIP,journal:se.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:U.withMessage("Поле не должен быть пустым",S)},start_date:{required:U.withMessage("Поле не должен быть пустым",S)},route:{required:U.withMessage("Поле не должен быть пустым",S)},content:{required:U.withMessage("Поле не должен быть пустым",S)},__companies:{required:U.withMessage("Поле не должен быть пустым",S)},__curator:{required:U.withMessage("Поле не должен быть пустым",S)},__employees:{required:U.withMessage("Поле не должен быть пустым",S)},__signers:{required:U.withMessage("Поле не должен быть пустым",S)},__tags:{required:U.withMessage("Поле не должен быть пустым",S)},short_description:{required:U.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:o}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a=!1){try{this.detailLoading=!0;const{data:o}=await be(u);Te(this.model,o),this.model.__companies=[],this.model.__curator=await Re([],o.curator.id,!1),this.model.__employees=await H(o.notices),a?(this.model.__approvers=await H(o.approvers.filter(t=>{var g,s;return((g=t==null?void 0:t.user)==null?void 0:g.id)!==((s=o==null?void 0:o.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await H(o.approvers),this.model.__signers=await H(o.signers),this.model.__companies=await ft(o.notices[0].destinations),this.model.__tags=await st(o.tags),this.model.start_date=o.notices[0].start_date,this.model.end_date=o.notices[0].end_date,this.model.__tags=o.tags,this.model.route=o.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(u,a){try{this.detailLoading=!0;const{data:o}=await be(u),t=await be(a);Te(this.model,o),this.model.__companies=[],this.model.__curator=await Re([],o.curator.id,!1),this.model.__employees=await H(t.data.notices),this.model.__approvers=await H(o.approvers),this.model.__signers=await H(o.signers),this.model.__companies=await ft(t.data.notices[0].destinations),this.model.__tags=await st(o.tags),this.model.start_date=t.data.notices[0].start_date,this.model.end_date=t.data.notices[0].end_date,this.model.__tags=o.tags,this.model.route=t.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),bl={class:"flex w-full gap-x-4"},da={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:z}},setup(u){const a=u,{t:o}=re(),t=pe(),g=ue(),s=ie(),r=gl(),m=ce();ge();const n=le(r.rules,r.model),p=Z(!1),x=ee(()=>{const i=a.formType===z,d=t.params.document_sub_type;return d===W.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":d===W.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),T=ee(()=>{var i,d;return t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL&&((i=t==null?void 0:t.query)==null?void 0:i.compose_id)&&((d=t==null?void 0:t.query)==null?void 0:d.document_sub_type)===W.BUSINESS_TRIP}),N=ee(()=>{var i;return!!(t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL&&((i=r==null?void 0:r.model)!=null&&i.trip_notice_id))});Dt(()=>r.model.__tags,i=>{if(a.formType===z)if(i&&i.length){let d=`${i.map(b=>b.name_uz).join(", ")} yuzasidan`;r.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else r.model.short_description=null});const R=async()=>{var d,b,f,V,M;await n.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=ne(r.model.__approvers),r.model.signers=ne(r.model.__signers),r.model.curator=(b=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:b.user_id,r.model.journal=t.params.document_type===ae.DECREE||t.params.document_type===ae.ORDER?se.ORDERS_PROTOCOLS:se.INNER,r.model.company=s.currentUser.company.id,r.model.notices=r.model.__employees.map(P=>({start_date:r.model.start_date,end_date:r.model.end_date,user:P.id,route:r.model.route,companies:r.model.__companies.map(v=>v.id)})),r.model.sender=(V=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:V.id,r.model.tags=r.model.__tags.map(P=>({id:P.id})),r.model.files=r.model.__files.map(P=>({id:P.id})),r.model.document_type=t.params.document_type,r.model.document_sub_type=t.params.document_sub_type,T.value&&(r.model.trip_notice_id=(M=t==null?void 0:t.query)==null?void 0:M.compose_id),p.value=!0)},D=()=>{},I=i=>{r.model.__files=[],i.forEach(d=>{r.model.__files.push(d)})},$=async()=>{T.value&&(r.model.notices=[]);const i=await r.actionCreateDocument(r.model);await m.actionCountList(),i?(p.value=!1,j(null,o("document-sent"),A.SUCCESS),await g.replace({name:Ae,query:{document_type:t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL?ae.DECREE:t.params.document_sub_type===W.BUSINESS_TRIP_ORDER_LOCAL?ae.ORDER:ae.NOTICE}})):j(null,o("error-occurred"),A.ERROR)},_=async()=>{(T.value||N.value)&&(r.model.notices=[]),await r.actionUpdateDocument({id:t.params.id,body:r.model}),await m.actionCountList(),j(null,o("changed"),A.SUCCESS),await g.replace({name:Ne,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},q=()=>{a.formType===z?$():_()};return Qe(async()=>{t.params.id&&t.query.trip_notice_id&&t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL?await r.actionGetDocumentDetailForUpdateForCustomUse(t.params.id,t.query.trip_notice_id):t.params.id?await r.actionGetDocumentDetailForUpdate(t.params.id):T.value&&await r.actionGetDocumentDetailForUpdate(t.query.compose_id,!0)}),De(()=>{Ge(r.model)}),(i,d)=>{const b=we,f=fe,V=We,M=tt,P=Be,v=_e;return e(r).detailLoading?(w(),G(b,{key:0})):(w(),C(J,{key:1},[l(e($e),{title:x.value},{content:c(()=>[l(je,{"onEmit:preview":R,"onEmit:clearForm":D},{default:c(()=>[l(v,null,{default:c(()=>[l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=y=>e(n).__curator.$model=y),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=y=>e(n).__employees.$model=y),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:T.value||N.value},null,8,["modelValue","error","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(Kt,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=y=>e(n).__companies.$model=y),error:e(n).__companies,"text-truncate":"",disabled:T.value||N.value},null,8,["modelValue","error","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(rt,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=y=>e(n).__tags.$model=y),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:y})=>[oe(B(y.name),1)]),option:c(({value:y})=>[l(e(qe),{title:y.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[h("div",bl,[l(V,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=y=>e(n).start_date.$model=y),d[5]||(d[5]=y=>e(n).start_date.$model=e(he)(y))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:T.value||N.value},null,8,["modelValue","error","min-date","disabled"]),l(V,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=y=>e(n).end_date.$model=y),d[7]||(d[7]=y=>e(n).end_date.$model=e(he)(y))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:T.value||N.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(M,{modelValue:e(n).route.$model,"onUpdate:modelValue":d[8]||(d[8]=y=>e(n).route.$model=y),error:e(n).route,options:e(Nt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:T.value||N.value},null,8,["modelValue","error","options","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=y=>e(r).model.__approvers=y),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=y=>e(n).__signers.$model=y),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(P,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=y=>e(n).short_description.$model=y),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(n).content.$model,"onUpdate:modelValue":d[12]||(d[12]=y=>e(n).content.$model=y),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:p.value,"onUpdate:modelValue":d[13]||(d[13]=y=>p.value=y),"send-button-loading":e(r).buttonLoading,"onEmit:send":q},{content:c(()=>[e(t).params.document_sub_type===e(W).BUSINESS_TRIP_DECREE_LOCAL?(w(),G(e(il),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(t).params.document_sub_type===e(W).BUSINESS_TRIP_ORDER_LOCAL?(w(),G(e(oo),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(w(),G(e(lo),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},ca={__name:"OrderForm",props:{formType:{type:String,default:z}},setup(u){const a=u,o=Ut(),t=ce(),g=ie(),s=pe(),r=ue(),m=le(o.rules,o.model),{t:n}=re(),p=Z(!1),x=async()=>{var _,q,i,d;await m.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=ne(o.model.__approvers),o.model.curator=(q=(_=o==null?void 0:o.model)==null?void 0:_.__curator)==null?void 0:q.user_id,o.model.sender=(d=(i=g==null?void 0:g.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,o.model.files=o.model.__files.map(b=>({id:b.id})),o.model.document_type=s.params.document_type,o.model.document_sub_type=s.params.document_sub_type,o.model.journal=se.ORDERS_PROTOCOLS,o.model.register_date=he(o.model.register_date),o.model.__negotiators.forEach(b=>{o.model.signers.push(b.hasOwnProperty("user")?{id:b.id,user:b.user.id,type:ze.NEGOTIATOR}:{user:b.id,type:ze.NEGOTIATOR})}),s.query.compose_id&&(o.model.trip_notice_id=s.query.compose_id),p.value=!0)},T=()=>{},N=async()=>{try{const $=await o.actionCreateDocument(o.model);await t.actionCountList(),$&&(p.value=!1,j(null,n("document-sent"),A.SUCCESS),await r.replace({name:Ae,query:{document_type:ae.ORDER}}))}catch{j(null,n("error-occurred"),A.ERROR)}},R=async()=>{try{const $=await o.actionUpdateDocument({id:s.params.id,body:o.model});await t.actionCountList(),j(null,n("changed"),A.SUCCESS),await r.replace({name:Ne,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{j(null,n("error-occurred"),A.ERROR)}},D=()=>{a.formType===z?N():R()},I=$=>{o.model.__files=[],$.forEach(_=>{o.model.__files.push(_)})};return et(async()=>{s.params.id&&await o.actionGetDocumentDetailForUpdate(s.params.id)}),De(()=>{Ge(o.model)}),($,_)=>{const q=we,i=fe,d=Be,b=We,f=_e;return e(o).detailLoading?(w(),G(q,{key:0})):(w(),C(J,{key:1},[l(e($e),{title:a.formType===e(z)?"create-order":"update-order"},{content:c(()=>[l(je,{"onEmit:preview":x,"onEmit:clearForm":T},{default:c(()=>[l(f,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=V=>e(m).__curator.$model=V),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(m).register_number.$model,"onUpdate:modelValue":_[1]||(_[1]=V=>e(m).register_number.$model=V),error:e(m).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(b,{modelValue:e(m).register_date.$model,"onUpdate:modelValue":_[2]||(_[2]=V=>e(m).register_date.$model=V),error:e(m).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":_[3]||(_[3]=V=>e(o).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(m).__negotiators.$model,"onUpdate:modelValue":_[4]||(_[4]=V=>e(m).__negotiators.$model=V),error:e(m).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(m).content.$model,"onUpdate:modelValue":_[5]||(_[5]=V=>e(m).content.$model=V),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:p.value,"onUpdate:modelValue":_[6]||(_[6]=V=>p.value=V),"send-button-loading":e(o).buttonLoading,"onEmit:send":D},{content:c(()=>[l(e(no),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},hl=xe("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:U.withMessage("Поле не должен быть пустым",S)},__curator:{required:U.withMessage("Поле не должен быть пустым",S)},__signers:{required:U.withMessage("Поле не должен быть пустым",S)},short_description:{required:U.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:o}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await be(u);Te(this.model,a),this.model.__curator=await Re([],a.curator.id,!1),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers)}catch{}finally{this.detailLoading=!1}}}}),ua={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:z}},setup(u){const a=u,{t:o}=re(),t=pe(),g=ue(),s=ie(),r=hl(),m=ce();ge();const n=Z(!1),p=le(r.rules,r.model),x=async()=>{var _,q,i,d;await p.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=ne(r.model.__approvers),r.model.signers=ne(r.model.__signers),r.model.curator=(q=(_=r==null?void 0:r.model)==null?void 0:_.__curator)==null?void 0:q.user_id,r.model.journal=se.INNER,r.model.company=s.currentUser.company.id,r.model.sender=(d=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,r.model.files=r.model.__files.map(b=>({id:b.id})),r.model.document_type=t.params.document_type,r.model.document_sub_type=t.params.document_sub_type,n.value=!0)},T=()=>{},N=$=>{r.model.__files=[],$.forEach(_=>{r.model.__files.push(_)})},R=async()=>{const $=await r.actionCreateDocument(r.model);await m.actionCountList(),$?(n.value=!1,j(null,o("document-sent"),A.SUCCESS),await g.replace({name:Ae,query:{document_type:ae.NOTICE}})):j(null,o("error-occurred"),A.ERROR)},D=async()=>{await r.actionUpdateDocument({id:t.params.id,body:r.model}),await m.actionCountList(),j(null,o("changed"),A.SUCCESS),await g.replace({name:Ne,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},I=()=>{a.formType===z?R():D()};return Qe(async()=>{t.params.id&&await r.actionGetDocumentDetailForUpdate(t.params.id)}),De(()=>{Ge(r.model)}),($,_)=>{const q=we,i=fe,d=Be,b=_e;return e(r).detailLoading?(w(),G(q,{key:0})):(w(),C(J,{key:1},[l(e($e),{title:a.formType===e(z)?"create-notice":"update-notice"},{content:c(()=>[l(je,{"onEmit:preview":x,"onEmit:clearForm":T},{default:c(()=>[l(b,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":_[2]||(_[2]=f=>e(r).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(p).content.$model,"onUpdate:modelValue":_[4]||(_[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:n.value,"onUpdate:modelValue":_[5]||(_[5]=f=>n.value=f),"send-button-loading":e(r).buttonLoading,"onEmit:send":I},{content:c(()=>[l(e(ro),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},yl=xe("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:U.withMessage("Поле не должен быть пустым",S)},__curator:{required:U.withMessage("Поле не должен быть пустым",S)},__signers:{required:U.withMessage("Поле не должен быть пустым",S)},short_description:{required:U.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){const a={...u};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:o,error:t}=await Ve(Ue,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){const o={...a};delete o.bookings,delete o.notices,delete o.trip_plans;try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:o});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){try{this.detailLoading=!0;const{data:o}=await be(u);Te(this.model,o),this.model.__curator=await Re([],o.curator.id,!1),this.model.__approvers=await H(o.approvers),this.model.__signers=await H(o.signers)}catch{}finally{this.detailLoading=!1}}}}),pa={__name:"DecreeForm",props:{formType:{type:String,default:z}},setup(u){const a=u,{t:o}=re(),t=pe(),g=ue(),s=ie(),r=ce();ge();const m=Z(!1),n=yl(),p=dt(),x=le(n.rules,n.model),T=async()=>{var i,d,b,f;await x.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=ne(n.model.__approvers),n.model.signers=ne(n.model.__signers),n.model.curator=(d=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:d.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=s.currentUser.company.id,n.model.sender=(f=(b=s==null?void 0:s.currentUser)==null?void 0:b.top_level_department)==null?void 0:f.id,n.model.files=n.model.__files.map(V=>({id:V.id})),n.model.document_type=t.params.document_type,n.model.document_sub_type=t.params.document_sub_type,t.query.compose_id&&(n.model.trip_notice_id=t.query.compose_id),m.value=!0)},N=()=>{},R=q=>{n.model.__files=[],q.forEach(i=>{n.model.__files.push(i)})},D=async()=>{const q=await n.actionCreateDocument(n.model);await r.actionCountList(),q?(m.value=!1,j(null,o("document-sent"),A.SUCCESS),await g.replace({name:Ae,query:{document_type:t.params.document_type}})):j(null,o("error-occurred"),A.ERROR)},I=async()=>{await n.actionUpdateDocument({id:t.params.id,body:n.model}),await r.actionCountList(),j(null,o("changed"),A.SUCCESS),await g.replace({name:Ne,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},$=()=>{a.formType===z?D():I()},_=async q=>{const{data:i}=await p.actionGetDocumentDetail(q);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return Qe(async()=>{a.formType===z&&t.query.compose_id?await _(t.query.compose_id):a.formType===Ce&&t.query.trip_notice_id&&t.params.id?(await n.actionGetDocumentDetailForUpdate(t.params.id,null),await _(t.query.trip_notice_id)):a.formType===Ce&&t.params.id&&await n.actionGetDocumentDetailForUpdate(t.params.id,null)}),De(()=>{Ge(n.model)}),(q,i)=>{const d=we,b=fe,f=Be,V=_e;return e(n).detailLoading?(w(),G(d,{key:0})):(w(),C(J,{key:1},[l(e($e),{title:a.formType===e(z)?"create-decree":"update-decree"},{content:c(()=>[l(je,{"onEmit:preview":T,"onEmit:clearForm":N},{default:c(()=>[l(V,null,{default:c(()=>[l(b,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(x).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=M=>e(x).__curator.$model=M),error:e(x).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(b,{"col-class":"w-1/2"},{default:c(()=>[l(f,{modelValue:e(x).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=M=>e(x).short_description.$model=M),error:e(x).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(b,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=M=>e(n).model.__approvers=M),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(b,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(x).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=M=>e(x).__signers.$model=M),error:e(x).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(b,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(x).content.$model,"onUpdate:modelValue":i[4]||(i[4]=M=>e(x).content.$model=M),error:e(x).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:m.value,"onUpdate:modelValue":i[5]||(i[5]=M=>m.value=M),"send-button-loading":e(n).buttonLoading,"onEmit:send":$},{content:c(()=>[l(e(vt),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wl=xe("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:U.withMessage("Поле не должен быть пустым",S)},start_date:{required:U.withMessage("Поле не должен быть пустым",S)},__curator:{required:U.withMessage("Поле не должен быть пустым",S)},__signers:{required:U.withMessage("Поле не должен быть пустым",S)},__user:{required:U.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:o}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await be(u);return Te(this.model,a),this.model.__curator=await Re([],a.curator.id,!1),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers),this.model.__user=await Fe("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}}}}),ma={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:z}},setup(u){const a=u,o=pe(),t=ue(),g=ie(),s=wl();dt();const r=ce(),{t:m}=re(),n=le(s.rules,s.model),p=Z(!1),x=Z([]),T=ee(()=>a.formType===z?"create-poa":"update-poa"),N=ee(()=>s.model.start_date?new Date(s.model.start_date):new Date),R=async()=>{var d,b,f,V,M,P,v,y,k,E,L,K,Q,O,Y,F,Me,ve,pt,mt;if(await n.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=ne(s.model.__approvers),s.model.signers=ne(s.model.__signers),s.model.curator=(b=(d=s==null?void 0:s.model)==null?void 0:d.__curator)==null?void 0:b.user_id,s.model.user=(V=(f=s==null?void 0:s.model)==null?void 0:f.__user)==null?void 0:V.id,s.model.journal=se.POWER_OF_ATTORNEY,s.model.company=(P=(M=g.currentUser)==null?void 0:M.company)==null?void 0:P.id,s.model.sender=(y=(v=g==null?void 0:g.currentUser)==null?void 0:v.top_level_department)==null?void 0:y.id,s.model.document_type=o.params.document_type,s.model.document_sub_type=o.params.document_sub_type,s.model.content=".",s.model.parent=(E=(k=s.model)==null?void 0:k.__parent)==null?void 0:E.id,!((K=(L=s==null?void 0:s.model)==null?void 0:L.__user)!=null&&K.passport_seria||(O=(Q=s==null?void 0:s.model)==null?void 0:Q.__user)!=null&&O.passport_number||(F=(Y=s==null?void 0:s.model)==null?void 0:Y.__user)!=null&&F.passport_issue_date||(ve=(Me=s==null?void 0:s.model)==null?void 0:Me.__user)!=null&&ve.passport_issued_by)){j(null,`${(mt=(pt=s.model)==null?void 0:pt.__user)==null?void 0:mt.full_name}: ${m("passport-details-error")}`,A.WARNING);return}p.value=!0}},D=()=>{},I=async()=>{const i=await s.actionCreateDocument(s.model);await r.actionCountList(),i?(p.value=!1,j(null,m("document-sent"),A.SUCCESS),await t.replace({name:Ae,query:{document_type:ae.POWER_OF_ATTORNEY}})):j(null,m("error-occurred"),A.ERROR)},$=async()=>{await s.actionUpdateDocument({id:o.params.id,body:s.model}),await r.actionCountList(),j(null,m("changed"),A.SUCCESS),await t.replace({name:Ne,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},_=()=>{a.formType===z?I():$()},q=async i=>{const{data:d}=await po({user:i.id,document_sub_type:o.params.document_sub_type,status:5});x.value=d.results};return Qe(async()=>{if(o.params.id){const i=await s.actionGetDocumentDetailForUpdate(o.params.id);i.parent&&(x.value=[i.parent])}}),De(()=>{Ge(s.model)}),(i,d)=>{const b=we,f=fe,V=We,M=tt,P=_e;return e(s).detailLoading?(w(),G(b,{key:0})):(w(),C(J,{key:1},[l(e($e),{title:T.value},{content:c(()=>[l(je,{"onEmit:preview":R,"onEmit:clearForm":D},{default:c(()=>[l(P,null,{default:c(()=>[l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=v=>e(n).__curator.$model=v),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__user.$model,"onUpdate:modelValue":d[1]||(d[1]=v=>e(n).__user.$model=v),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":d[2]||(d[2]=v=>q(v))},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(V,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[3]||(d[3]=v=>e(n).start_date.$model=v),d[4]||(d[4]=v=>e(n).start_date.$model=e(he)(v))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(V,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[5]||(d[5]=v=>e(n).end_date.$model=v),d[6]||(d[6]=v=>e(n).end_date.$model=e(he)(v))],error:e(n).end_date,"min-date":N.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":d[7]||(d[7]=v=>e(s).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[8]||(d[8]=v=>e(n).__signers.$model=v),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(M,{modelValue:e(s).model.__parent,"onUpdate:modelValue":d[9]||(d[9]=v=>e(s).model.__parent=v),options:x.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:p.value,"onUpdate:modelValue":d[10]||(d[10]=v=>p.value=v),"send-button-loading":e(s).buttonLoading,"onEmit:send":_},{content:c(()=>[l(ao,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vl={class:"base-stepper-component flex items-center select-none"},kl=["onClick"],xl={key:0,class:"flex h-1 bg-greyscale-200 w-8"},St={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(u,{emit:a}){const{t:o}=re(),t=g=>{a("emit:stepClick",g)};return(g,s)=>{const r=me;return w(),C("div",vl,[(w(!0),C(J,null,de(u.items,(m,n)=>(w(),C("div",{key:m.id,class:"flex items-center"},[h("div",{class:Oe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",m.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:p=>t(m)},[l(r,{icon:m.icon,class:Oe(m.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),h("span",null,B(e(o)(m.label)),1)],10,kl),n<u.items.length-1?(w(),C("div",xl)):te("",!0)]))),128))])}}},Pe=xe("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__countries:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ge().filialList],__users_to_extend:null,__regions_to_extend:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:U.withMessage("Поле не должен быть пустым",S)}},rules:{content:{required:U.withMessage("Поле не должен быть пустым",S)},__curator:{required:U.withMessage("Поле не должен быть пустым",S)},__signers:{required:U.withMessage("Поле не должен быть пустым",S)},short_description:{required:U.withMessage("Поле не должен быть пустым",S)},__groups:{$each:U.forEach({__users:{required:U.withMessage("Поле не должен быть пустым",S)},__tags:{required:U.withMessage("Поле не должен быть пустым",S)},__start_date:{required:U.withMessage("Поле не должен быть пустым",S)},__end_date:{required:U.withMessage("Поле не должен быть пустым",S)},__company:{required:U.withMessage("Поле не должен быть пустым",S)},__route:{required:U.withMessage("Поле не должен быть пустым",S)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:U.forEach({users:{required:U.withMessage("Поле не должен быть пустым",S)},text:{required:U.withMessage("Поле не должен быть пустым",S)}})}},booking_model:{bookings:[{type:ye,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:U.forEach({segments:{$each:U.forEach({departure_city:{required:U.withMessage("Поле не должен быть пустым",S)},arrival_city:{required:U.withMessage("Поле не должен быть пустым",S)},date:{required:U.withMessage("Поле не должен быть пустым",S)},time:{required:U.withMessage("Поле не должен быть пустым",S)},segment_class:{required:U.withMessage("Поле не должен быть пустым",S)}})},passengers:{required:U.withMessage("Поле не должен быть пустым",S)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:It,active:!0,value:Xe},{id:4,label:"decree",icon:Mt,active:!0,value:Ke}],routeTabItems:[{id:1,title:"airplane",icon:Ot,value:Je,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:Pt,value:mo,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:Bt,value:kt,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:At,value:ye},{id:2,title:"complex-route",icon:jt,value:it},{id:3,title:"one-way",icon:Ft,value:_o}]}),actions:{async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:o,error:t}=await Ve(Ue,a);return o?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){const o=await lt(a);try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:o});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){var a,o;try{this.detailLoading=!0;const{data:t}=await be(u),g=await xt(t.id);this.decreeModel=(o=(a=g==null?void 0:g.data)==null?void 0:a.to_composes[0])==null?void 0:o.from_compose,Te(this.model,t),this.model.__curator=await Re([],t.curator.id,!1),this.model.__signers=await H(t.signers),this.model.__approvers=await H(t.approvers);const s=Object.values(t.notices.reduce((r,m)=>{const n=m.group_id;return r[n]=r[n]||{group_id:n,items:[]},r[n].items.push(m),r},{}));this.model.__groups=await Promise.all(s.map(async r=>{var I;const m=await Promise.all(r.items.map(async $=>({...await H([],$.user.id,!1),business_trip_id:$.id}))),n=await st(r.items[0].tags),p=await Fe("regions",r.items[0].locations),x=await Fe("countries",r.items[0].countries),T=await Fe("companies",[],!1,(I=r.items[0].sender_company)==null?void 0:I.id),N=r.items[0].start_date,R=r.items[0].end_date,D=r.items[0].route;return{__users:m,__tags:n,__regions:p,__countries:x,__start_date:N,__end_date:R,__company:T,__route:D,__filialList:ge().filialList}})),this.trip_plan_model.trip_plans=await Promise.all(t.trip_plans.map(async(r,m)=>({...r,users:await H(r.users)}))),this.booking_model.bookings=await Promise.all(t.bookings.map(async r=>({type:r.type,route:r.route,segments:await Promise.all(r.segments.map(async m=>({departure_city:await Fe("regions",[],!1,m.departure_city.id),arrival_city:await Fe("regions",[],!1,m.arrival_city.id),segment_class:await fo.find(n=>n.value===m.segment_class),date:he(m.departure_date),time:await so(m.departure_date,m.departure_end_date)}))),passengers:await H(r.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ge().filialList]})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},async actionStepClick(u,a,o){await u.replace({query:{...a.query,step:o}}),this.stepperItems.forEach(g=>g.active=g.value===o),await wt();const t=document.querySelector(".document-view-aside");t&&t.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:ye,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(u){this.booking_model.bookings.splice(u,1)},actionChangeRouteSegment(u,a){const o=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=u===ye?[o(),o()]:[o()]},async actionAddRouteLine(u){this.booking_model.bookings[u].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(u,a){this.booking_model.bookings[u].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ge().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:ye,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),$l={class:"trip-info-components"},Vl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},El={class:"flex justify-between"},Ul={class:"text-base text-primary-900 font-semibold mb-1"},Sl=["onClick"],Cl={class:"flex align-center gap-x-4"},Tl={class:"flex w-full gap-x-4"},Rl={class:"flex w-full gap-x-4"},Ll={class:"text-base text-primary-900 font-semibold mb-2"},Dl={class:"flex items-center justify-between"},ht={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:o}){const t=pe(),g=ue(),s=Pe();ge();const{t:r,locale:m}=re(),n=le(s.rules,s.model),p=Z(!1),x=Z(!1),T=ee(()=>({region_type:"local"})),N=_=>{s.model.__files=[],_.forEach(q=>{s.model.__files.push(q)})},R=()=>{s.actionAddGroupBlock()},D=async _=>{const q=await n.value.$validate();if(p.value=!0,!q){j(null,r("fill-required-fields"),A.WARNING);return}if(t.params.document_sub_type===W.BUSINESS_TRIP_NOTICE_FOREIGN){if(s.model.__groups.find(b=>!b.__countries||b.__countries.length===0)){j(null,r("fill-required-fields"),A.WARNING);return}s.model.__groups.forEach(b=>{b.__regions=[]})}if(t.params.document_sub_type===W.BUSINESS_TRIP_NOTICE_V2){if(s.model.__groups.find(b=>!b.__regions||b.__regions.length===0)){j(null,r("fill-required-fields"),A.WARNING);return}s.model.__groups.forEach(b=>{b.__countries=[]})}x.value=!0,await new Promise(d=>{o("emit:onValidateAndSend",d)})&&await s.actionStepClick(g,t,"decree"),x.value=!1},I=(_,q)=>{s.model.__groups[q].__regions=[]},$=(_,q)=>{_.value.forEach(i=>{var d,b,f,V;if(i.id===((V=(f=(b=(d=s.model)==null?void 0:d.__groups[q])==null?void 0:b.__company)==null?void 0:f.region)==null?void 0:V.id)){const M=s.model.__groups[q].__regions.findIndex(P=>P.id===i.id);(M||M===0)&&s.model.__groups[q].__regions.splice(M,1)}})};return a({stepClick:D}),(_,q)=>{const i=fe,d=Be,b=me,f=tt,V=rt,M=We,P=_e,v=Le;return w(),C("div",$l,[l(P,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":q[0]||(q[0]=y=>e(n).__curator.$model=y),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":q[1]||(q[1]=y=>e(n).short_description.$model=y),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),C(J,null,de(e(s).model.__groups,(y,k)=>(w(),C("div",Vl,[h("div",El,[h("span",Ul,B(e(r)("group"))+"-"+B(k+1),1),k!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:E=>e(s).actionDeleteGroupBlock(k)},[l(b,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Sl)):te("",!0)]),l(P,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:y.__users,"onUpdate:modelValue":E=>y.__users=E,error:e(n).__groups.$each.$response.$data[k].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"",allSelectable:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(i,{"col-class":"w-1/2"},{default:c(()=>[h("div",Cl,[l(f,{modelValue:y.__company,"onUpdate:modelValue":E=>y.__company=E,error:e(n).__groups.$each.$response.$data[k].__company,options:y.__filialList,"onUpdate:options":E=>y.__filialList=E,required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":E=>I(E,k)},{option:c(({option:E})=>[l(e(qe),{title:E.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","onUpdate:options","show-nested-error","onEmit:change"]),e(t).params.document_sub_type===e(W).BUSINESS_TRIP_NOTICE_V2?(w(),G(V,{key:0,modelValue:y.__regions,"onUpdate:modelValue":E=>y.__regions=E,"api-url":"regions","api-params":T.value,"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":E=>$(E,k)},{chip:c(({value:E})=>[oe(B(E.name),1)]),option:c(({value:E})=>[l(e(qe),{title:E.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","api-params","show-nested-error","onEmit:change"])):te("",!0),e(t).params.document_sub_type===e(W).BUSINESS_TRIP_NOTICE_FOREIGN?(w(),G(V,{key:1,modelValue:y.__countries,"onUpdate:modelValue":E=>y.__countries=E,"api-url":"countries","api-params":{country_type:"foreign"},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where-country",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,"all-selectable":"",class:"w-1/2"},{chip:c(({value:E})=>[oe(B(E.name),1)]),option:c(({value:E})=>[l(e(qe),{title:E.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","show-nested-error"])):te("",!0)])]),_:2},1024),l(i,{"col-class":"w-1/2"},{default:c(()=>[h("div",Tl,[l(V,{modelValue:y.__tags,"onUpdate:modelValue":E=>y.__tags=E,error:e(n).__groups.$each.$response.$data[k].__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":p.value,class:"w-1/2"},{chip:c(({value:E})=>[oe(B(E.name),1)]),option:c(({value:E})=>[l(e(qe),{title:E.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),l(f,{modelValue:y.__route,"onUpdate:modelValue":E=>y.__route=E,error:e(n).__groups.$each.$response.$data[k].__route,options:e(s).routeTabItems,"onUpdate:options":q[2]||(q[2]=E=>e(s).routeTabItems=E),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(m)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":p.value,class:"w-1/2"},{option:c(({option:E})=>[l(e(qe),{title:e(r)(E.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),l(i,{"col-class":"w-1/2"},{default:c(()=>[h("div",Rl,[l(M,{modelValue:y.__start_date,"onUpdate:modelValue":[E=>y.__start_date=E,E=>y.__start_date=e(he)(E)],error:e(n).__groups.$each.$response.$data[k].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(M,{modelValue:y.__end_date,"onUpdate:modelValue":[E=>y.__end_date=E,E=>y.__end_date=e(he)(E)],error:e(n).__groups.$each.$response.$data[k].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(v,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:R},null,8,["icon-left"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":q[3]||(q[3]=y=>e(s).model.__approvers=y),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":q[4]||(q[4]=y=>e(n).__signers.$model=y),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[h("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(s).model.content?"border-critic-500":"border-greyscale-200"])},[h("div",Ll,B(e(r)("notice")),1),l(Se,{modelValue:e(n).content.$model,"onUpdate:modelValue":q[5]||(q[5]=y=>e(n).content.$model=y),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),h("div",Dl,[l(v,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(v,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:x.value,onClick:q[6]||(q[6]=y=>D(e(ct)))},null,8,["loading"])])])}}},Nl={class:"work-plan-component"},Il={class:"flex flex-col gap-y-3"},Ml={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ol={class:"flex justify-between"},Pl={class:"text-base text-primary-900 font-semibold mb-1"},Bl=["onClick"],Al={class:"flex items-center justify-between mt-10"},jl={class:"flex items-center gap-x-1"},Fl={__name:"WorkPlan",setup(u,{expose:a}){const{t:o}=re(),t=pe(),g=ue(),s=Pe(),r=le(s.trip_plan_rules,s.trip_plan_model),m=Z(!1),n=ee(()=>{const T=new Set;return s.model.__groups.reduce((N,R)=>R.__users&&Array.isArray(R.__users)?N.concat(R.__users):N,[]).filter(N=>T.has(N.id)?!1:(T.add(N.id),!0))}),p=async T=>{const N=await r.value.$validate();if(m.value=!0,!N){j(null,o("fill-required-fields"),A.WARNING);return}const R=s.trip_plan_model.trip_plans.flatMap(I=>{var $;return($=I.users)==null?void 0:$.map(_=>_.id)}),D=n.value.filter(I=>!R.includes(I.id));D.length?(j(null,`У следующих сотрудников нет плана работы: ${D==null?void 0:D.map(I=>I.first_name+" "+I.last_name).join(", ")}.`,A.WARNING),j(null,"У всех сотрудников должен быть назначен рабочий план.",A.WARNING)):await s.actionStepClick(g,t,T)},x=()=>{s.actionAddWorkPlanRow(),m.value=!1};return a({stepClick:p}),(T,N)=>{const R=me,D=Vt,I=fe,$=_e,_=Le;return w(),C("div",Nl,[h("div",Il,[(w(!0),C(J,null,de(e(s).trip_plan_model.trip_plans,(q,i)=>(w(),C("div",Ml,[h("div",Ol,[h("span",Pl,B(e(o)("plan"))+"-"+B(i+1),1),i!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d=>e(s).actionDeleteWorkPlanRow(i)},[l(R,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Bl)):te("",!0)]),l($,null,{default:c(()=>[l(I,{"col-class":"w-1/2"},{default:c(()=>[l(D,{modelValue:q.text,"onUpdate:modelValue":d=>q.text=d,error:e(r).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(I,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:q.users,"onUpdate:modelValue":d=>q.users=d,options:n.value,error:e(r).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(_,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:x},null,8,["icon-left"]),h("div",Al,[l(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",jl,[l(_,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:N[0]||(N[0]=q=>p(e(Xe)))}),l(_,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:N[1]||(N[1]=q=>p(e($t)))})])])])}}};const zl={class:"base-time-picker"},Gl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(u){const a=u,o=nt(a,"modelValue"),{t}=re();return(g,s)=>{var n;const r=wo,m=me;return w(),C("div",zl,[l(r,{label:a.label,required:a.required},null,8,["label","required"]),l(e(vo),{modelValue:e(o),"onUpdate:modelValue":s[0]||(s[0]=p=>Ze(o)?o.value=p:null),"time-picker":"",range:u.range,"cancel-text":e(t)("cancel"),"select-text":e(t)("select"),placeholder:e(t)(u.placeholder),ref:"datePicker",class:Oe({"input-error":((n=u.error)==null?void 0:n.$error)&&u.showNestedError})},{"input-icon":c(()=>[l(m,{icon:e(zt),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Wl={class:"route-component flex flex-col gap-y-3"},Yl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Hl={class:"flex items-center justify-between"},Xl={class:"flex items-center gap-x-4"},Kl={class:"text-base text-primary-900 font-semibold mb-1"},Ql={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Jl={class:"text-xs text-greyscale-900 font-medium"},Zl=["onClick"],en=["onClick"],tn={class:"text-sm text-primary-500 font-semibold"},on={class:"flex items-center justify-between mt-10"},ln={class:"flex items-center gap-x-1"},nn={__name:"Route",props:{formType:{type:String,default:z}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:o}){const{t}=re(),g=pe(),s=ue(),r=Pe(),m=ge();ie(),ce();const n=le(r.booking_model_rules,r.booking_model);Z(!1);const p=Z(!1),x=ee(()=>{const i=new Set;return r.model.__groups.reduce((d,b)=>b.__users&&Array.isArray(b.__users)?d.concat(b.__users):d,[]).filter(d=>i.has(d.id)?!1:(i.add(d.id),!0))}),T=i=>{r.routeTabItems.forEach(d=>d.active=d.id===i.id)},N=(i,d)=>{r.routeTypeTabItems.forEach(b=>b.active=b.id===i.id),r.actionChangeRouteSegment(i.value,d)},R=async(i,d=!1)=>{var M,P;const b=await n.value.$validate();if(p.value=!0,!b){j(null,t("fill-required-fields"),A.WARNING);return}const f=(M=r.booking_model.bookings)==null?void 0:M.flatMap(v=>{var y;return(y=v.passengers)==null?void 0:y.map(k=>k==null?void 0:k.id)}),V=(P=x.value)==null?void 0:P.filter(v=>!(f!=null&&f.includes(v.id)));V.length?(j(null,`У следующих сотрудников не назначен маршрут: ${V.map(v=>v.first_name+" "+v.last_name).join(", ")}.`,A.WARNING),j(null,"У всех сотрудников должен быть назначен маршрут",A.WARNING)):(d&&o("emit:onValidateAndSend"),await r.actionStepClick(s,g,i))},D=()=>{r.actionAddRouteRow(),p.value=!1},I=(i,d,b,f)=>{f.type===ye&&(r.booking_model.bookings[d].segments[b+1].arrival_city=i)},$=(i,d,b,f)=>{f.type===ye&&(r.booking_model.bookings[d].segments[b+1].departure_city=i)},_=(i,d,b,f)=>{f.type===ye&&(r.booking_model.bookings[d].segments[b+1].segment_class=i)},q=()=>{R(Ke,!0)};return a({stepClick:R}),(i,d)=>{const b=tt,f=fe,V=We,M=_e,P=Le;return w(),C("div",Wl,[(w(!0),C(J,null,de(e(r).booking_model.bookings,(v,y)=>(w(),C("div",Yl,[h("div",Hl,[h("div",Xl,[h("span",Kl,B(e(t)("route"))+"-"+B(y+1),1),l(bt,{modelValue:v.route,"onUpdate:modelValue":k=>v.route=k,items:e(r).routeTabItems,"onEmit:onChange":d[0]||(d[0]=k=>T(k))},null,8,["modelValue","onUpdate:modelValue","items"]),l(bt,{modelValue:v.type,"onUpdate:modelValue":k=>v.type=k,items:e(r).routeTypeTabItems,"onEmit:onChange":k=>N(k,y)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),y!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d[1]||(d[1]=(...k)=>e(r).actionDeleteRouteRow&&e(r).actionDeleteRouteRow(...k))},[l(me,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):te("",!0)]),h("div",Ql,[l(me,{icon:e(at),class:"text-warning-500"},null,8,["icon"]),h("span",Jl,B(e(t)("route-warning")),1)]),(w(!0),C(J,null,de(v.segments,(k,E)=>(w(),C("div",null,[l(M,null,{default:c(()=>[l(f,{"col-class":"w-1/5"},{default:c(()=>[l(b,{modelValue:k.departure_city,"onUpdate:modelValue":L=>k.departure_city=L,error:e(n).bookings.$each.$response.$data[y].segments.$each.$data[E].departure_city,options:e(m).regionsList,"onUpdate:options":d[2]||(d[2]=L=>e(m).regionsList=L),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:v.type===e(ye)&&E%2!==0,"onEmit:change":L=>I(L,y,E,v)},{option:c(({option:L})=>[l(e(qe),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(b,{modelValue:k.arrival_city,"onUpdate:modelValue":L=>k.arrival_city=L,error:e(n).bookings.$each.$response.$data[y].segments.$each.$data[E].arrival_city,options:e(m).regionsList.filter(L=>{var K;return(L==null?void 0:L.id)!=((K=k.departure_city)==null?void 0:K.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:v.type===e(ye)&&E%2!==0,"onEmit:change":L=>$(L,y,E,v)},{option:c(({option:L})=>[l(e(qe),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(b,{modelValue:k.segment_class,"onUpdate:modelValue":L=>k.segment_class=L,error:e(n).bookings.$each.$response.$data[y].segments.$each.$data[E].segment_class,options:v.route===e(kt)?e(qo):v.route===e(Je)?e(go):e(bo),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":p.value,translatable:"",disabled:v.type===e(ye)&&E%2!==0,"onEmit:change":L=>_(L,y,E,v)},{option:c(({option:L})=>[l(e(qe),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(V,{modelValue:k.date,"onUpdate:modelValue":[L=>k.date=L,L=>k.date=e(he)(L)],error:e(n).bookings.$each.$response.$data[y].segments.$each.$data[E].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),l(f,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[l(Gl,{modelValue:k.time,"onUpdate:modelValue":L=>k.time=L,error:e(n).bookings.$each.$response.$data[y].segments.$each.$data[E].time,label:"time",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),v.type===e(it)&&E!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:L=>e(r).actionDeleteRouteLine(y,E)},[l(me,{icon:e(Ye),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Zl)):te("",!0)]),_:2},1024)]),_:2},1024)]))),256)),v.type===e(it)?(w(),C("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:k=>e(r).actionAddRouteLine(y)},[l(me,{icon:e(He),class:"text-primary-500"},null,8,["icon"]),h("span",tn,B(e(t)("add-line")),1)],8,en)):te("",!0),l(M,null,{default:c(()=>[l(f,{"col-class":"w-full"},{default:c(()=>[l(X,{modelValue:v.passengers,"onUpdate:modelValue":k=>v.passengers=k,options:x.value,error:e(n).bookings.$each.$response.$data[y].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),l(P,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:D},null,8,["icon-left"]),h("div",on,[l(P,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",ln,[l(P,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:d[3]||(d[3]=v=>R(e(ct)))}),l(P,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(r).buttonLoading,onClick:q},null,8,["loading"])])])])}}},ut=xe("sd-extend-business-trip-store",{state:()=>({buttonLoading:!1,userTripUpdateButtonLoading:!1,detailLoading:!1,changingBTDialog:!1,changingBTLoading:!1,changingBTModel:null,tempVerifications:[],tempRegions:[],tempGroupIndex:null,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]},rules:{content:{required:U.withMessage("Поле не должен быть пустым",S)},__curator:{required:U.withMessage("Поле не должен быть пустым",S)},__signers:{required:U.withMessage("Поле не должен быть пустым",S)},short_description:{required:U.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionGetParentDocumentDetail(u){try{this.detailLoading=!0;const{data:a}=await be(u);await this.actionAdjustModel(a)}catch{}finally{this.detailLoading=!1}},async actionAdjustModel(u){this.model.__notices=u.notices;const a=Object.values(u.notices.reduce((o,t)=>{const g=t.group_id;return o[g]=o[g]||{group_id:g,items:[]},o[g].items.push(t),o},{}));this.model.__groups=await Promise.all(a.map(async o=>({__users:await Promise.all(o.items.map(async g=>({...await H([],g.user.id,!1),business_trip_id:g.id}))),__notices_to_change:[],group_id:o.group_id})))},async actionAddUsersToExtend(u,a){var m;await wt();const o=this.model.__groups[a].__users_to_extend||[],t=this.model.__notices.find(n=>o.some(p=>p.id===n.user.id&&n.group_id===u.group_id));if(!t)return;const g=this.model.__groups[a];if(Array.isArray(g.__notices_to_change)||this.$set(g,"__notices_to_change",[]),g.__notices_to_change.some(n=>n.id===t.id||n.parent_id===t.id)){this.tempGroupIndex=a,this.actionClearTempModel();return}this.changingBTModel=t,this.tempGroupIndex=a,this.changingBTLoading=!0,this.changingBTDialog=!0,setTimeout(()=>{this.changingBTLoading=!1},2e3);const r=await ko(t.id);this.tempVerifications=(m=r==null?void 0:r.data)==null?void 0:m.verifications.filter(n=>!n.is_sender).map(n=>({...n,is_visited:n.arrived_at||n.left_at}))},actionDeleteNoticeToChange(u,a,o){this.model.__groups[o].__notices_to_change.splice(a,1)},actionFillNoticesToChange(){var u,a,o,t,g,s;(o=(a=(u=this.model)==null?void 0:u.__groups)==null?void 0:a[this.tempGroupIndex])!=null&&o.__notices_to_change?this.model.__groups[this.tempGroupIndex].__notices_to_change.push({...this.changingBTModel,__regions:this.tempVerifications.map(r=>({...r.region})),__start_date:(t=this.changingBTModel)==null?void 0:t.start_date,__end_date:(g=this.changingBTModel)==null?void 0:g.end_date,__sender_company:(s=this.changingBTModel)==null?void 0:s.sender_company}):console.warn("Target group or __notices_to_change array not found.")},async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:o,error:t}=await Ve(Ue,a);return o?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){const o=await lt(a);try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:o});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){var o,t,g,s,r,m;try{this.detailLoading=!0,await this.actionGetParentDocumentDetail(a);const{data:n}=await be(u),p=await xt(n.id);Pe().decreeModel.content=((g=(t=(o=p==null?void 0:p.data)==null?void 0:o.to_composes[0])==null?void 0:t.from_compose)==null?void 0:g.content)||"",Pe().decreeModel.id=((m=(r=(s=p==null?void 0:p.data)==null?void 0:s.to_composes[0])==null?void 0:r.from_compose)==null?void 0:m.id)||null;const x=await Promise.all(this.model.__groups.map(async T=>{const N=n.notices.filter(R=>T.__users.some(D=>{var I;return D.id===((I=R.user)==null?void 0:I.id)&&R.group_id===T.group_id}));return N.length&&(T.__notices_to_change=await Promise.all(N.map(async R=>({user:R.user,__regions:await Fe("regions",R.locations),__start_date:R.start_date,__end_date:R.end_date,tags:R.tags,__sender_company:R.sender_company,business_trip_id:R.id,parent_id:R.parent})))),T}));this.model.__curator=await Re([],n.curator.id,!1),this.model.__signers=await H(n.signers),this.model.__approvers=await H(n.approvers),this.model.short_description=n.short_description,this.model.content=n.content}catch(n){return console.error(n),Promise.reject(n)}finally{this.detailLoading=!1}},async actionUpdateUserTrip(){this.actionFillNoticesToChange(),this.actionClearTempModel()},actionResetBTModel(){this.model={approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]}},actionClearTempModel(){this.changingBTDialog=!1,this.changingBTLoading=!1,this.changingBTModel=null,this.tempVerifications=[],this.tempRegions=[],this.model.__groups[this.tempGroupIndex].__users_to_extend=[]},actionClearUserToExtend(){const u=this.model.__groups[this.tempGroupIndex].__users_to_extend.findIndex(a=>{var o,t;return a.id===((t=(o=this.changingBTModel)==null?void 0:o.user)==null?void 0:t.id)});this.model.__groups[this.tempGroupIndex].__users_to_extend.splice(u,1)}}}),rn={class:"decree-component"},an={class:"flex items-center justify-between mt-10"},sn={class:"flex items-center gap-x-1"},Ct={__name:"Decree",props:{formType:{type:String,default:z}},setup(u,{expose:a}){const o=u,t=pe(),g=ue(),s=Pe(),r=ut(),m=le(s.decreeRules,s.decreeModel),{t:n}=re(),p=ie(),x=ce(),T=Z(!1),N=ee(()=>({...t.params.document_sub_type===W.EXTEND_BUSINESS_TRIP_NOTICE?r.model:s.model,bookings:s.booking_model.bookings,trip_plans:s.trip_plan_model.trip_plans,decree_content:s.decreeModel.content})),R=async q=>{await s.actionStepClick(g,t,q)},D=q=>{s.decreeModel.__files=[],q.forEach(i=>{s.decreeModel.__files.push(i)})},I=async()=>{var i,d,b,f;if(!await m.value.$validate()){j(null,n("fill-required-fields"),A.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(d=(i=s.model)==null?void 0:i.__curator)==null?void 0:d.user_id,s.decreeModel.journal=se.ORDERS_PROTOCOLS,s.decreeModel.company=p.currentUser.company.id,s.decreeModel.sender=(f=(b=p==null?void 0:p.currentUser)==null?void 0:b.top_level_department)==null?void 0:f.id,s.decreeModel.document_type=ae.DECREE,s.decreeModel.document_sub_type=t.params.document_sub_type===W.EXTEND_BUSINESS_TRIP_NOTICE?W.EXTEND_BUSINESS_TRIP_DECREE:t.params.document_sub_type===W.BUSINESS_TRIP_NOTICE_FOREIGN?W.BUSINESS_TRIP_DECREE_FOREIGN:W.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,T.value=!0},$=async(q,i)=>{try{await s.actionUpdateDocument({id:i,body:{...s.decreeModel,trip_notice_id:q}}),await x.actionCountList(),j(null,n("successfully-saved"),A.SUCCESS)}catch{}},_=async()=>{var i;let q=null;o.formType===z&&t.query.notice_id?q=t.query.notice_id:o.formType===Ce&&t.params.id&&(q=t.params.id);try{await $(q,(i=s.decreeModel)==null?void 0:i.id),await g.replace({name:Ne,params:{id:q,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type},query:{parent_id:t.query.parent_id}})}catch{}};return a({stepClick:R}),(q,i)=>{const d=Le;return w(),C("div",rn,[l(Se,{modelValue:e(m).content.$model,"onUpdate:modelValue":i[0]||(i[0]=b=>e(m).content.$model=b),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"]),h("div",an,[l(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",sn,[l(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:i[1]||(i[1]=b=>R(e(Xe)))}),l(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:I})])]),l(Ie,{modelValue:T.value,"onUpdate:modelValue":i[2]||(i[2]=b=>T.value=b),"send-button-loading":e(s).buttonLoading,"onEmit:send":_,"content-classes":"p-0"},{content:c(()=>[l(e(io),{"compose-model":N.value,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},dn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},cn={class:"px-6 py-4"},_a={__name:"BusinessTripForm",props:{formType:{type:String,default:z}},setup(u){const a=u,{t:o}=re(),t=pe(),g=ue(),s=ie(),r=Pe();le(r.rules,r.model),le(r.trip_plan_rules,r.trip_plan_model),le(r.booking_model_rules,r.booking_model),le(r.decreeRules,r.decreeModel);const m=Z(null),n=ee(()=>a.formType===z?t.params.document_sub_type===W.BUSINESS_TRIP_NOTICE_V2?"create-business-trip-notice":"create-business-trip-notice-foreign":t.params.document_sub_type===W.BUSINESS_TRIP_NOTICE_V2?"update-business-trip-notice":"update-business-trip-notice-foreign"),p=ee(()=>{switch(t.query.step){case Xe:return ht;case Ke:return Ct;case ct:return Fl;case $t:return nn;default:return ht}}),x=async D=>{var $;const I=e(m);(($=t.query)==null?void 0:$.step)!==D.value&&(await I.stepClick(D.value),D.value,Ke)},T=async()=>{t.query.step||await g.replace({query:{...t.query,step:Xe}}),r.stepperItems.forEach(D=>D.active=D.value===t.query.step)},N=async()=>{var $,_,q,i,d,b,f,V,M,P,v,y;const D=ne(r.model.__approvers),I=ne(r.model.__signers);if(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.bookings=[],r.model.trip_plans=[],r.model.approvers=D,r.model.signers=I,r.model.curator=(_=($=r.model)==null?void 0:$.__curator)==null?void 0:_.user_id,r.model.journal=se.INNER,r.model.company=(i=(q=s.currentUser)==null?void 0:q.company)==null?void 0:i.id,r.model.__groups.forEach((k,E)=>{const L=E+1;r.model.notices.push(...k.__users.map(K=>{var Q,O,Y;return{start_date:k.__start_date,end_date:k.__end_date,end_date_2:k.__end_date,user:K.id,company:(O=(Q=s.currentUser)==null?void 0:Q.company)==null?void 0:O.id,sender_company:(Y=k.__company)==null?void 0:Y.id,regions:k.__regions.map(F=>F.id),countries:k.__countries.map(F=>({id:F.id})),tags:k.__tags.map(F=>({id:F.id})),route:k.__route,group_id:L,trip_type:t.params.document_sub_type===W.BUSINESS_TRIP_NOTICE_FOREIGN?"foreign":"local",...K.business_trip_id?{id:K.business_trip_id}:{}}}))}),r.model.sender=(b=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:b.id,r.model.files=r.model.__files.map(k=>({id:k.id})),r.model.document_type=t.params.document_type,r.model.document_sub_type=t.params.document_sub_type,a.formType===z&&t.query.notice_id)try{await r.actionUpdateDocument({id:t.query.notice_id,body:r.model})}catch(k){throw k}else if(a.formType===z)try{const{data:k}=await r.actionCreateDocument(r.model),E={approvers:[],signers:[],curator:(V=(f=r.model)==null?void 0:f.__curator)==null?void 0:V.user_id,journal:se.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:(P=(M=s==null?void 0:s.currentUser)==null?void 0:M.top_level_department)==null?void 0:P.id,document_type:ae.DECREE,document_sub_type:t.params.document_sub_type===W.EXTEND_BUSINESS_TRIP_NOTICE?W.EXTEND_BUSINESS_TRIP_DECREE:t.params.document_sub_type===W.BUSINESS_TRIP_NOTICE_FOREIGN?W.BUSINESS_TRIP_DECREE_FOREIGN:W.BUSINESS_TRIP_DECREE_V2,short_description:(v=r.model)==null?void 0:v.short_description,trip_notice_id:k.id,content:k.content};r.decreeModel.content=k.content;try{const L=await r.actionCreateDocument(E);r.decreeModel.id=(y=L==null?void 0:L.data)==null?void 0:y.id,await g.replace({query:{...t.query,notice_id:k.id}}),await r.actionGetDocumentDetailForUpdate(k.id)}catch(L){throw L}}catch(k){throw k}else if(a.formType===Ce&&t.params.id)try{await r.actionUpdateDocument({id:t.params.id,body:r.model})}catch(k){throw k}},R=async D=>{try{await N(),await j(null,o("notice-saved-successfully"),A.SUCCESS),D(!0)}catch{D(!1)}};return Qe(async()=>{await T(),a.formType===Ce?await r.actionGetDocumentDetailForUpdate(t.params.id):t.query.notice_id&&await r.actionGetDocumentDetailForUpdate(t.query.notice_id)}),De(()=>{r.actionResetBTModel()}),(D,I)=>{const $=we,_=St;return w(),C("div",{class:Oe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(r).detailLoading}])},[e(r).detailLoading?(w(),G($,{key:0})):(w(),G(e($e),{key:1,title:n.value},{content:c(()=>[h("div",dn,[l(_,{items:e(r).stepperItems,"onEmit:stepClick":x},null,8,["items"])]),h("div",cn,[(w(),G(Gt(p.value),{"form-type":u.formType,ref_key:"childComponent",ref:m,"onEmit:onValidateAndSend":R},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},un=xe("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:U.withMessage("Поле не должен быть пустым",S)},__curator:{required:U.withMessage("Поле не должен быть пустым",S)},__signers:{required:U.withMessage("Поле не должен быть пустым",S)},short_description:{required:U.withMessage("Поле не должен быть пустым",S)},__groups:{$each:U.forEach({__users:{required:U.withMessage("Поле не должен быть пустым",S)},__tags:{required:U.withMessage("Поле не должен быть пустым",S)},__regions:{required:U.withMessage("Поле не должен быть пустым",S)},__start_date:{required:U.withMessage("Поле не должен быть пустым",S)},__end_date:{required:U.withMessage("Поле не должен быть пустым",S)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:U.forEach({users:{required:U.withMessage("Поле не должен быть пустым",S)},text:{required:U.withMessage("Поле не должен быть пустым",S)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:o}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}}}}),pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"flex justify-between"},_n={class:"text-base text-primary-900 font-semibold mb-1"},fn=["onClick"],qn={class:"flex w-full gap-x-4"},gn={class:"flex flex-col gap-y-3"},bn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},hn={class:"flex justify-between"},yn={class:"text-base text-primary-900 font-semibold mb-1"},wn=["onClick"],vn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},kn={class:"text-base text-primary-900 font-semibold mb-2"},fa={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:z}},setup(u){const a=u,o=Z(!1),t=Z(!1),{t:g}=re(),s=pe(),r=ue(),m=ie(),n=un(),p=ce();ge();const x=le(n.rules,n.model),T=le(n.trip_plan_rules,n.trip_plan_model),N=ee(()=>a.formType===z?"create-decree":"update-decree"),R=ee(()=>{const f=new Set;return n.model.__groups.reduce((V,M)=>M.__users&&Array.isArray(M.__users)?V.concat(M.__users):V,[]).filter(V=>f.has(V.id)?!1:(f.add(V.id),!0))}),D=async()=>{var P,v,y,k,E,L;if(o.value=!0,!await x.value.$validate()){j(null,g("fill-required-fields"),A.WARNING);return}const V=ne(n.model.__approvers),M=ne(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=V,n.model.signers=M,n.model.curator=(v=(P=n.model)==null?void 0:P.__curator)==null?void 0:v.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=(k=(y=m.currentUser)==null?void 0:y.company)==null?void 0:k.id,n.model.__groups.forEach((K,Q)=>{const O=Q+1;n.model.notices.push(...K.__users.map(Y=>{var F,Me;return{start_date:K.__start_date,end_date:K.__end_date,user:Y.id,company:(Me=(F=m.currentUser)==null?void 0:F.company)==null?void 0:Me.id,regions:K.__regions.map(ve=>ve.id),tags:K.__tags.map(ve=>({id:ve.id})),group_id:O}}))}),n.model.sender=(L=(E=m==null?void 0:m.currentUser)==null?void 0:E.top_level_department)==null?void 0:L.id,n.model.files=n.model.__files.map(K=>({id:K.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(K=>({users:K.users.map(Q=>({id:Q.id})),text:K.text})),t.value=!0},I=()=>{},$=()=>{n.actionAddGroupBlock()},_=()=>{n.actionAddWorkPlanRow(),o.value=!1},q=f=>{n.model.__files=[],f.forEach(V=>{n.model.__files.push(V)})},i=async()=>{const f=await n.actionCreateDocument(n.model);await p.actionCountList(),f?(t.value=!1,j(null,g("document-sent"),A.SUCCESS),await r.replace({name:Ae,query:{document_type:s.params.document_type}})):j(null,g("error-occurred"),A.ERROR)},d=async()=>{await n.actionUpdateDocument({id:s.params.id,body:n.model}),await p.actionCountList(),j(null,g("changed"),A.SUCCESS),await r.replace({name:Ne,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},b=()=>{a.formType===z?i():d()};return(f,V)=>{const M=we,P=fe,v=Be,y=me,k=rt,E=We,L=_e,K=Le,Q=Vt;return e(n).detailLoading?(w(),G(M,{key:0})):(w(),C(J,{key:1},[l(e($e),{title:N.value},{content:c(()=>[l(je,{"onEmit:preview":D,"onEmit:clearForm":I},{default:c(()=>[l(L,null,{default:c(()=>[l(P,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(x).__curator.$model,"onUpdate:modelValue":V[0]||(V[0]=O=>e(x).__curator.$model=O),error:e(x).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(P,{"col-class":"w-1/2"},{default:c(()=>[l(v,{modelValue:e(x).short_description.$model,"onUpdate:modelValue":V[1]||(V[1]=O=>e(x).short_description.$model=O),error:e(x).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(P,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),C(J,null,de(e(n).model.__groups,(O,Y)=>(w(),C("div",pn,[h("div",mn,[h("span",_n,B(e(g)("group"))+"-"+B(Y+1),1),Y!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:F=>e(n).actionDeleteGroupBlock(Y)},[l(y,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,fn)):te("",!0)]),l(L,null,{default:c(()=>[l(P,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:O.__users,"onUpdate:modelValue":F=>O.__users=F,error:e(x).__groups.$each.$response.$data[Y].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":o.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(P,{"col-class":"w-1/2"},{default:c(()=>[l(k,{modelValue:O.__regions,"onUpdate:modelValue":F=>O.__regions=F,error:e(x).__groups.$each.$response.$data[Y].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":o.value},{chip:c(({value:F})=>[oe(B(F.name),1)]),option:c(({value:F})=>[l(e(qe),{title:F.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(P,{"col-class":"w-1/2"},{default:c(()=>[l(k,{modelValue:O.__tags,"onUpdate:modelValue":F=>O.__tags=F,error:e(x).__groups.$each.$response.$data[Y].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":o.value},{chip:c(({value:F})=>[oe(B(F.name),1)]),option:c(({value:F})=>[l(e(qe),{title:F.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),l(P,{"col-class":"w-1/2"},{default:c(()=>[h("div",qn,[l(E,{modelValue:O.__start_date,"onUpdate:modelValue":[F=>O.__start_date=F,F=>O.__start_date=e(he)(F)],error:e(x).__groups.$each.$response.$data[Y].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":o.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(E,{modelValue:O.__end_date,"onUpdate:modelValue":[F=>O.__end_date=F,F=>O.__end_date=e(he)(F)],error:e(x).__groups.$each.$response.$data[Y].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":o.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(K,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:$},null,8,["icon-left"])]),_:1})]),_:1}),h("div",gn,[(w(!0),C(J,null,de(e(n).trip_plan_model.trip_plans,(O,Y)=>(w(),C("div",bn,[h("div",hn,[h("span",yn,B(e(g)("plan"))+"-"+B(Y+1),1),Y!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:F=>e(n).actionDeleteWorkPlanRow(Y)},[l(y,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,wn)):te("",!0)]),l(L,null,{default:c(()=>[l(P,{"col-class":"w-1/2"},{default:c(()=>[l(Q,{modelValue:O.text,"onUpdate:modelValue":F=>O.text=F,error:e(T).trip_plans.$each.$response.$data[Y].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":o.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(P,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:O.users,"onUpdate:modelValue":F=>O.users=F,options:R.value,error:e(T).trip_plans.$each.$response.$data[Y].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":o.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(K,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:_},null,8,["icon-left"]),l(L,null,{default:c(()=>[l(P,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":V[2]||(V[2]=O=>e(n).model.__approvers=O),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(P,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(x).__signers.$model,"onUpdate:modelValue":V[3]||(V[3]=O=>e(x).__signers.$model=O),error:e(x).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(P,{"col-class":"w-full"},{default:c(()=>[h("div",vn,[h("div",kn,B(e(g)("decree")),1),l(Se,{modelValue:e(x).content.$model,"onUpdate:modelValue":V[4]||(V[4]=O=>e(x).content.$model=O),error:e(x).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":q},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:t.value,"onUpdate:modelValue":V[5]||(V[5]=O=>t.value=O),"send-button-loading":e(n).buttonLoading,"onEmit:send":b},{content:c(()=>[l(e(vt),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},xn={class:"flex gap-x-[6px] items-center px-2 py-1 bg-greyscale-50 rounded-[90px] border-b border-greyscale-200"},$n={key:0,class:"w-6 h-6 rounded-full flex items-center justify-center text-xs text-white bg-primary-500"},Vn={class:"text-greyscale-900 text-sm font-medium"},ot={__name:"BaseChip",props:{item:{type:Object,default:()=>({})},label:{type:String,default:"Example"},type:{type:String,default:"user",validator(u){return["user","location","other"].includes(u)}},clearable:{type:Boolean,default:!1}},emits:["emit:clear"],setup(u,{emit:a}){const o=t=>{a("emit:clear",t)};return(t,g)=>(w(),C("div",xn,[u.type==="user"?(w(),C("div",$n,B(u.label[0]),1)):u.type==="location"?(w(),G(me,{key:1,icon:e(Wt),class:"text-greyscale-400"},null,8,["icon"])):te("",!0),h("div",Vn,B(u.label),1),u.clearable?(w(),C("div",{key:2,class:"flex justify-center items-center w-5 h-5 rounded-full bg-critic-500 cursor-pointer",onClick:g[0]||(g[0]=s=>o(u.item))},[l(me,{icon:e(Yt),class:"text-white"},null,8,["icon"])])):te("",!0)]))}},En={key:0,class:"flex flex-col gap-y-5"},Un={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Sn={class:"text-sm font-medium text-greyscale-500"},Cn={class:"text-green-900"},Tn=h("br",null,null,-1),Rn={class:"flex flex-col gap-y-2"},Ln={class:"text-sm font-medium text-greyscale-500"},Dn=h("span",{class:"text-red-500"},"*",-1),Nn={class:"flex flex-wrap gap-3"},In={class:"flex flex-col gap-y-2"},Mn={key:1,class:"flex flex-col gap-y-5"},On={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Pn={class:"text-sm font-medium text-greyscale-500"},Bn={class:"text-green-900"},An={__name:"ChangingBusinessTripModal",setup(u){const a=ut(),{t:o}=re(),t=ee(()=>{var n;return["reporting","closed"].includes((n=a==null?void 0:a.changingBTModel)==null?void 0:n.trip_status)}),g=()=>{var p;if(!(((p=a.tempVerifications)==null?void 0:p.length)>0)){j(null,"Kamida bitta hudud qo'shing!",A.WARNING);return}a.actionUpdateUserTrip()},s=()=>{a.actionClearTempModel()},r=(n,p)=>{a.tempVerifications.splice(p,1)},m=n=>{n.value.forEach(p=>{a.tempVerifications.some(T=>T.region.id===p.id)||a.tempVerifications.push({region:p,is_visited:!1}),a.tempRegions=[]})};return(n,p)=>{const x=we,T=rt,N=We,R=Le,D=Et;return w(),G(D,{modelValue:e(a).changingBTDialog,"onUpdate:modelValue":p[4]||(p[4]=I=>e(a).changingBTDialog=I),label:"confirm","max-width":"max-w-[631px]",closable:!1},Ht({content:c(()=>{var I,$,_,q;return[e(a).changingBTLoading?(w(),G(x,{key:0,class:"my-16"})):(w(),C(J,{key:1},[t.value?(w(),C("div",Mn,[h("div",On,[l(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),h("div",Pn,[h("span",Bn,B((q=(_=e(a).changingBTModel)==null?void 0:_.user)==null?void 0:q.full_name),1),oe("ga tegishli bo'lgan xizmat safari yakunlangan! ")])])])):(w(),C("div",En,[h("div",Un,[l(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),h("div",Sn,[oe("Siz rostdan ham "),h("span",Cn,B(($=(I=e(a).changingBTModel)==null?void 0:I.user)==null?void 0:$.full_name),1),oe("ga tegishli bo'lgan xizmat safarini o'zgartirmoqchimisiz? "),Tn,oe(" Bunda xizmat safari bilan vaqtinchalik amaliyot bajarish to'xtatiladi! ")])]),h("div",Rn,[h("span",Ln,[oe(B(e(o)("trip-place"))+" ",1),Dn]),h("div",Nn,[(w(!0),C(J,null,de(e(a).tempVerifications,(i,d)=>{var b;return w(),G(ot,{key:i.id,label:(b=i==null?void 0:i.region)==null?void 0:b.name_uz,clearable:!i.is_visited,type:"location",class:"w-fit","onEmit:clear":f=>r(i,d)},null,8,["label","clearable","onEmit:clear"])}),128))]),l(T,{modelValue:e(a).tempRegions,"onUpdate:modelValue":p[0]||(p[0]=i=>e(a).tempRegions=i),"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",type:"department",placeholder:"add-trip-place",required:"","onEmit:change":p[1]||(p[1]=i=>m(i))},{chip:c(({value:i})=>[oe(B(i.name),1)]),option:c(({value:i})=>[l(e(qe),{title:i.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue"])]),h("div",In,[l(N,{modelValue:e(a).changingBTModel.end_date,"onUpdate:modelValue":[p[2]||(p[2]=i=>e(a).changingBTModel.end_date=i),p[3]||(p[3]=i=>e(a).changingBTModel.end_date=e(he)(i))],"min-date":new Date(e(a).changingBTModel.start_date),required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","min-date"])])]))],64))]}),_:2},[e(a).changingBTLoading?void 0:{name:"footer",fn:c(()=>[l(R,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:s}),t.value?te("",!0):(w(),G(R,{key:0,loading:e(a).userTripUpdateButtonLoading,label:"update",rounded:"",shadow:"",type:"button",onClick:g},null,8,["loading"]))]),key:"0"}]),1032,["modelValue"])}}},jn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},Fn={class:"px-6 py-4"},zn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Gn={class:"flex justify-between"},Wn={class:"text-base text-primary-900 font-semibold mb-1"},Yn={class:"text-sm text-greyscale-500 font-medium"},Hn={class:"text-sm text-greyscale-500 font-medium"},Xn={class:"flex flex-wrap gap-3 mt-1"},Kn={class:"flex justify-between items-center"},Qn={class:"text-sm text-greyscale-500 font-medium"},Jn={class:"text-base text-primary-900 font-semibold mb-2"},Zn={class:"flex items-center justify-between"},qa={__name:"ExtendBusinessTripForm",props:{formType:{type:String,default:z}},setup(u){const a=u,o=ut(),t=Pe(),g=ie(),s=le(o.rules,o.model),r=pe(),m=ue(),{t:n}=re(),p=Z(!1);Z(!1);const x=ee(()=>{const $=a.formType===z;return"trip-notice-for-change"}),T=async()=>{var i,d,b,f,V,M,P,v,y,k,E,L,K;const $=ne(o.model.__approvers),_=ne(o.model.__signers);o.model.approvers=[],o.model.signers=[],o.model.notices=[],o.model.approvers=$,o.model.signers=_,o.model.curator=(d=(i=o.model)==null?void 0:i.__curator)==null?void 0:d.user_id,o.model.journal=se.INNER,o.model.company=(f=(b=g.currentUser)==null?void 0:b.company)==null?void 0:f.id;let q=1;if(o.model.__groups.forEach(Q=>{Array.isArray(Q.__notices_to_change)&&o.model.notices.push(...Q.__notices_to_change.map(O=>{var Y,F,Me;return{...a.formType===Ce?{id:O.id}:{},start_date:O.__start_date,end_date:O.__end_date,user:O.user.id,company:(F=(Y=g.currentUser)==null?void 0:Y.company)==null?void 0:F.id,sender_company:(Me=O.sender_company)==null?void 0:Me.id,regions:O.__regions.map(ve=>ve.id),tags:O.tags.map(ve=>({id:ve.id})),route:O.route,group_id:q++,trip_type:"changed_local",parent:O.id,...O.business_trip_id?{id:O.business_trip_id}:{}}}))}),o.model.sender=(M=(V=g==null?void 0:g.currentUser)==null?void 0:V.top_level_department)==null?void 0:M.id,o.model.files=o.model.__files.map(Q=>({id:Q.id})),o.model.document_type=r.params.document_type,o.model.document_sub_type=r.params.document_sub_type,o.model.trip_notice_id=((P=r.query)==null?void 0:P.parent_id)||null,a.formType===z&&r.query.notice_id)try{await o.actionUpdateDocument({id:r.query.notice_id,body:o.model}),await j(null,n("notice-saved-successfully"),A.SUCCESS)}catch{}else if(a.formType===z)try{const{data:Q}=await o.actionCreateDocument(o.model),O={approvers:[],signers:[],curator:(y=(v=o.model)==null?void 0:v.__curator)==null?void 0:y.user_id,journal:se.ORDERS_PROTOCOLS,company:g.currentUser.company.id,sender:(E=(k=g==null?void 0:g.currentUser)==null?void 0:k.top_level_department)==null?void 0:E.id,document_type:ae.DECREE,document_sub_type:W.EXTEND_BUSINESS_TRIP_DECREE,short_description:(L=o.model)==null?void 0:L.short_description,trip_notice_id:Q.id,content:Q.content};t.decreeModel.content=Q.content;try{const Y=await o.actionCreateDocument(O);t.decreeModel.id=(K=Y==null?void 0:Y.data)==null?void 0:K.id,await m.replace({query:{...r.query,notice_id:Q.id,parent_id:r.query.parent_id}}),await j(null,n("notice-saved-successfully"),A.SUCCESS),await o.actionGetDocumentDetailForUpdate(Q.id,r.query.parent_id)}catch(Y){console.error(Y)}}catch(Q){console.error(Q)}else if(a.formType===Ce&&r.params.id)try{await o.actionUpdateDocument({id:r.params.id,body:o.model}),await j(null,n("notice-saved-successfully"),A.SUCCESS)}catch{}},N=$=>{o.model.__files=[],$.forEach(_=>{o.model.__files.push(_)})},R=async $=>{var _;try{((_=r.query)==null?void 0:_.step)!==$.value&&($.value===Ke&&(await D(),await T()),await t.actionStepClick(m,r,$.value))}catch(q){console.error(q)}},D=async()=>{const $=await s.value.$validate();if(p.value=!0,!$)return j(null,n("fill-required-fields"),A.WARNING),Promise.reject();if(!o.model.__groups.some(q=>Array.isArray(q.__notices_to_change)&&q.__notices_to_change.length>0))return j(null,"Kamida bitta xodim o'zgartirish uchun tanlanishi kerak!",A.WARNING),Promise.reject()},I=async()=>{r.query.step||await m.replace({query:{...r.query,step:Xe}}),t.stepperItems.forEach($=>$.active=$.value===r.query.step)};return et(async()=>{await I()}),Qe(async()=>{var $,_,q,i,d,b;a.formType===z&&(($=r.query)!=null&&$.notice_id)&&((_=r.query)!=null&&_.parent_id)?await o.actionGetDocumentDetailForUpdate((q=r.query)==null?void 0:q.notice_id,(i=r.query)==null?void 0:i.parent_id):a.formType===z&&((d=r.query)!=null&&d.parent_id)?await o.actionGetParentDocumentDetail(r.query.parent_id):a.formType===Ce&&await o.actionGetDocumentDetailForUpdate(r.params.id,(b=r.query)==null?void 0:b.parent_id)}),De(()=>{o.actionResetBTModel()}),($,_)=>{const q=we,i=St,d=fe,b=Be,f=_e,V=Le;return w(),C("div",{class:Oe(["extend-business-trip-form",{"h-[calc(100vh-200px)]":e(o).detailLoading}])},[e(o).detailLoading?(w(),G(q,{key:0})):(w(),G(e($e),{key:1,title:x.value},{content:c(()=>{var M,P;return[h("div",jn,[l(i,{items:e(t).stepperItems,"onEmit:stepClick":R},null,8,["items"])]),h("div",Fn,[((M=e(r).query)==null?void 0:M.step)==="trip_info"?(w(),C(J,{key:0},[l(f,null,{default:c(()=>[l(d,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=v=>e(s).__curator.$model=v),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(b,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=v=>e(s).short_description.$model=v),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),C(J,null,de(e(o).model.__groups,(v,y)=>(w(),C("div",zn,[h("div",Gn,[h("span",Wn,B(e(n)("group"))+"-"+B(y+1),1)]),l(f,null,{default:c(()=>[l(d,{"col-class":"w-full"},{default:c(()=>[l(X,{modelValue:v.__users_to_extend,"onUpdate:modelValue":[k=>v.__users_to_extend=k,k=>e(o).actionAddUsersToExtend(v,y)],label:"select-employees-in-business-trip",options:v.__users,searchable:!1,placeholder:"select-employees","show-nested-error":p.value,disabled:u.formType===e(Ce),allSelectable:""},null,8,["modelValue","onUpdate:modelValue","options","show-nested-error","disabled"])]),_:2},1024),l(d,{"col-class":"w-full"},{default:c(()=>[(w(!0),C(J,null,de(v.__notices_to_change,(k,E)=>(w(),G(f,null,{default:c(()=>[l(d,{"col-class":"w-1/3"},{default:c(()=>{var L;return[h("span",Yn,B(e(n)("employees-in-business-trip")),1),l(ot,{label:(L=k.user)==null?void 0:L.full_name,class:"w-fit mt-1"},null,8,["label"])]}),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[h("span",Hn,B(e(n)("trip-place")),1),h("div",Xn,[(w(!0),C(J,null,de(k.__regions,L=>(w(),G(ot,{key:k.id,label:L.name_uz,type:"location",class:"w-fit"},null,8,["label"]))),128))])]),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[h("div",Kn,[h("div",null,[h("span",Qn,B(e(n)("end-date")),1),l(ot,{label:k.__end_date,type:"other",class:"w-fit mt-1"},null,8,["label"])])])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]))),256))]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":_[2]||(_[2]=v=>e(o).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=v=>e(s).__signers.$model=v),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:c(()=>[h("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(o).model.content?"border-critic-500":"border-greyscale-200"])},[h("div",Jn,B(e(n)("notice")),1),l(Se,{modelValue:e(s).content.$model,"onUpdate:modelValue":_[4]||(_[4]=v=>e(s).content.$model=v),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),h("div",Zn,[l(V,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(V,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:_[5]||(_[5]=v=>R({value:e(Ke)}))})])],64)):((P=e(r).query)==null?void 0:P.step)==="decree"?(w(),G(e(Ct),{key:1,"form-type":u.formType},null,8,["form-type"])):te("",!0)])]}),_:1},8,["title"])),l(An,{modelValue:e(o).changingBTDialog,"onUpdate:modelValue":_[6]||(_[6]=M=>e(o).changingBTDialog=M)},null,8,["modelValue"])],2)}}};export{sa as _,ca as a,ua as b,pa as c,_a as d,fa as e,qa as f,ia as g,da as h,ma as i};
