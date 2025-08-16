import{_ as me}from"./BaseRow.61697735.5001.js";import{_ as Oe}from"./BaseInput.3a57e4bd.5001.js";import{_ as _e}from"./BaseCol.6dd249ca.5001.js";import{v as Z,bb as at,a1 as lt,o as w,c as C,i as o,z as c,h as e,b8 as ot,d as ee,dy as Ge,a as y,t as j,F as J,e as de,a3 as re,g as oe,f as G,B as Nt,dD as Mt,bj as It,n as Ne,r as wt,G as Pe,as as Ee,cN as ae,cO as Y,cl as se,u as ne,b as ue,ao as pe,be as Ue,a5 as B,ac as ve,a8 as Ot,cY as We,dE as Pt,_ as ge,dF as Bt,dG as At,dH as jt,dI as Ft,dJ as zt,$ as Gt,dK as Wt,dL as Yt,aX as vt,bt as He,c1 as Xe,dM as Ht,dw as it,E as Xt,cI as Kt,cR as Qt,aE as Jt}from"./index.a6d6c356.73.js";import{c as E,r as S,u as le}from"./index.335436e3.5001.js";import{_ as Zt,a as eo}from"./BranchMultiSelect.7fd66adb.5001.js";import{j as to,k as oo,l as lo,_ as Ve,a as no,h as ro,g as ao,b as so,c as io,d as co,e as kt,i as xt,m as uo,f as po}from"./BasePOA.daeeed8e.5001.js";import"./BaseTabMenu.de01b979.5001.js";import"./dialog.esm.38ebe282.5001.js";import"./tabpanel.esm.18b97668.5001.js";import"./FileSaver.min.50d1a5f0.5001.js";import{j as mo,u as ie,a3 as ft,N as Se,s as Me,a1 as Q,a5 as _o,a6 as Fe,a7 as te,d as A,a8 as Ie,a9 as gt,aa as dt,ab as ze,W as rt}from"./axios.config.309db4e8.5001.js";import"./BaseTabView.30f7d93e.5001.js";import"./FileTabs.1dbaca74.5001.js";import{_ as K}from"./UserMultiSelect.bbc18280.5001.js";import{u as be}from"./common.335212bd.5001.js";import{u as ce}from"./count.store.f324945f.5001.js";import{u as ut,e as qt,g as Ce,h as he,i as Te,j as Be,c as Re,k as Vt,l as xe,B as tt,m as Ke,n as Qe,o as fo,p as $t,M as ct,O as go,f as Et,T as qo,q as pt,r as Ut,C as bo,P as ho,s as yo}from"./index.store.ec75b6cf.5001.js";import{F as z,a as De}from"./constants.50c90617.5001.js";import{_ as Je}from"./BaseDropdown.f4887708.5001.js";import{_ as Ye}from"./BaseCalendar.1e84fa83.5001.js";import{_ as st}from"./BaseMultiSelect.17740ef7.5001.js";import{f as wo,a as ye}from"./formatDate.b602bb3c.5001.js";import{Q as bt}from"./qrcode.vue.esm.a5da3dc1.5001.js";import"./divider.esm.270fe8d3.5001.js";import"./dayjs.min.0d16018a.5001.js";/* empty css                                                                                         */import{c as vo}from"./Dropdown.87f79d47.5001.js";import"./menu.esm.a48820c9.5001.js";/* empty css                                                      */import"./avatar.esm.77a06bf0.5001.js";/* empty css                                                      */import"./businessTrip.store.2f8d5d04.5001.js";/* empty css                                                            */import"./accordiontab.esm.f85ef776.5001.js";import"./common.store.ae50d2f1.5001.js";import{_ as qe}from"./WithRadio.9614ce62.5001.js";import"./radiobutton.esm.66171a47.5001.js";import"./checkbox.esm.4b1ac87d.5001.js";import{_ as St,a as ko}from"./ShortDescription.ce4dc788.5001.js";import{_ as ht}from"./BaseBrickRadio.5e35792d.5001.js";import{_ as xo}from"./BaseLabel.195f0753.5001.js";import{K as Vo}from"./main.5f3d9a03.5001.js";import{a as $o}from"./index.0b240654.5001.js";import"./BaseCalendar.vue_vue_type_style_index_0_lang.bf8a275a.5001.js";import"./multiselect.esm.836c8026.5001.js";/* empty css                                                             */import"./dropdown.esm.63a3932a.5001.js";/* empty css                                                          */import"./textarea.esm.83b5ae9c.5001.js";import"./overlaypanel.esm.a891ee63.5001.js";/* empty css                                                              */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang.cac9920a.5001.js";/* empty css                                                                            */import"./review.store.2158b61d.5001.js";/* empty css                                                       */import{_ as Ct}from"./BaseDialog.7090336c.5001.js";import{_ as Eo}from"./WithSelectable.108784bf.5001.js";import{_ as Uo}from"./BaseBrickTab.62f609e7.5001.js";import{_ as So}from"./BaseFileUpload.5f7a81ae.5001.js";import{_ as Co}from"./BaseFroalaEditor.047d74f2.5001.js";const To={class:"user-select"},we={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(u,{emit:s}){const t=u,l=Z([]),h=at(t,"modelValue"),a=async r=>{let{data:m}=await mo.get(`${t.apiUrl}/`,r);m.hasOwnProperty("results")?l.value=m.results:l.value=m};return lt(async()=>{await a(t.apiParams)}),(r,m)=>(w(),C("div",To,[o(Je,{modelValue:e(h),"onUpdate:modelValue":m[0]||(m[0]=n=>ot(h)?h.value=n:null),options:l.value,"onUpdate:options":m[1]||(m[1]=n=>l.value=n),error:t.error,"api-url":t.apiUrl,"api-params":t.apiParams,"option-label":"full_name",label:t.label,placeholder:t.placeholder,required:t.required,searchable:"","onEmit:change":m[2]||(m[2]=n=>s("emit:change",n))},{option:c(({option:n})=>[o(e(Eo),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},Ro={class:"business-trip-decree-template-view letter-template"},Lo={class:"flex flex-col text-sm font-medium mt-4"},Do=y("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),No=["innerHTML"],Mo=["innerHTML"],Io={class:"employees-table text-sm mt-4"},Oo={class:"w-full"},Po=y("tr",{class:"text-center"},[y("td",{class:"border-2 p-1"},"№"),y("td",{class:"border-2 p-1"},"F.I.SH"),y("td",{class:"border-2 p-1"},"Departament va lavozim"),y("td",{class:"border-2 p-1"},"Yo'nalish"),y("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Bo={class:"text-center"},Ao={class:"border-2 p-1"},jo={class:"border-2 p-1"},Fo={class:"border-2 p-1"},zo=y("br",null,null,-1),Go={class:"border-2 p-1"},Wo={class:"flex flex-col gap-y-1"},Yo={key:0},Ho={class:"border-2 p-1 w-[100px]"},Xo=y("br",null,null,-1),Ko={class:"indent-8 mt-2 text-sm text-justify"},Qo=y("div",null,"xizmat safariga yuborilsin.",-1),Jo=y("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Zo=y("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),el=y("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),tl={key:0},ol=y("span",{class:"font-semibold"},"Asos: ",-1),ll=y("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),nl=y("div",null," O‘zR MKning 287-moddasi; ",-1),rl=y("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),al={class:"mt-6 pb-2 px-4"},sl={class:"text-sm font-semibold block"},il={class:"text-sm font-semibold block"},dl={class:"text-sm font-semibold block"},cl={class:"text-sm font-semibold block"},ul={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(u){const s=u,t=ut(),l=ee(()=>{var m;return s.preview?ie().currentUser:(m=s.composeModel)==null?void 0:m.author}),h=ee(()=>{var m,n,p;return s.preview?(m=s.composeModel)==null?void 0:m.__employees.map(x=>({empFullName:x.full_name,empDepName:x.top_level_department.name,empPositionName:x.position.name,destinations:s.composeModel.__companies,startDate:s.composeModel.start_date,endDate:s.composeModel.end_date})):(p=(n=s.composeModel)==null?void 0:n.notices)==null?void 0:p.map(x=>({empFullName:x.user.full_name,empDepName:x.user.top_level_department.name,empPositionName:x.user.position.name,destinations:x.destinations,startDate:x.start_date,endDate:x.end_date}))}),a=ee(()=>{var n,p,x;if(s.preview)return[(n=s.composeModel)==null?void 0:n.__curator];const m=(p=s.composeModel)==null?void 0:p.signers.find(T=>T.type===Ge.BASIC_SIGNER);return m?[m]:[(x=s.composeModel)==null?void 0:x.curator].filter(Boolean)}),r=ee(()=>{var m,n;return s.preview?(m=s.composeModel)==null?void 0:m.__signers:(n=s.composeModel)==null?void 0:n.signers.filter(p=>p.type===Ge.SIGNER)});return(m,n)=>{var T,M,L,N,I,$,_,b;const p=_e,x=me;return w(),C("div",Ro,[o(e(to)),o(e(oo),{"dep-name":(M=(T=l.value)==null?void 0:T.top_level_department)==null?void 0:M.name},null,8,["dep-name"]),y("div",Lo,[y("span",null," № "+j((L=s.composeModel)==null?void 0:L.register_number),1),y("span",null,j(((N=s.composeModel)==null?void 0:N.register_date)&&e(wo)((I=s.composeModel)==null?void 0:I.register_date)),1)]),Do,e(t).historyShow?(w(),C("div",{key:0,class:"text-justify",innerHTML:e(t).historyContent},null,8,No)):(w(),C("div",{key:1,class:"text-justify",innerHTML:($=s.composeModel)==null?void 0:$.content},null,8,Mo)),y("div",Io,[y("table",Oo,[Po,h.value&&h.value.length?(w(!0),C(J,{key:0},de(h.value,(i,d)=>(w(),C("tr",Bo,[y("td",Ao,j(d+1),1),y("td",jo,j(i.empFullName),1),y("td",Fo,[re(j(i.empDepName)+" ",1),zo,re(" "+j(i.empPositionName),1)]),y("td",Go,[y("div",Wo,[(w(!0),C(J,null,de(i.destinations,(f,g)=>(w(),C("span",null,[re(j(f.name)+" ",1),g!==i.destinations.length-1?(w(),C("span",Yo,",")):oe("",!0)]))),256))])]),y("td",Ho,[re(j(i.startDate)+" ",1),Xo,re(" "+j(i.endDate),1)])]))),256)):oe("",!0)])]),y("div",Ko,[Qo,Jo,Zo,el,(_=u.composeModel)!=null&&_.trip_notice_register_number?(w(),C("div",tl,[ol,re(j((b=u.composeModel)==null?void 0:b.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):oe("",!0),ll,nl,rl]),y("div",al,[(w(!0),C(J,null,de(a.value,i=>(w(),G(x,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[o(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",sl,j(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(w(),G(bt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):oe("",!0)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",il,j(e(ft)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(w(!0),C(J,null,de(r.value,i=>(w(),G(x,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[o(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",dl,j(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(w(),G(bt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):oe("",!0)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",cl,j(e(ft)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),o(e(lo),{"compose-model":s.composeModel,author:l.value},null,8,["compose-model","author"])])}}};var pl=`
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
`,ml={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Nt.extend({name:"editor",css:pl,classes:ml});(function(){try{return window.Quill}catch{return null}})();const $e={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(u){return["froala","tiny"].includes(u)}}},emits:["update:modelValue","emit:fileUpload"],setup(u,{emit:s}){const t=u,l=at(t,"modelValue"),h=Z([{title:"text",slot:"editor",icon:Mt},{title:"file",slot:"file",icon:It}]);return(a,r)=>(w(),G(Uo,{"tab-panel-list":h.value,"panel-container-class":"px-0"},{editor:c(()=>[u.editor==="froala"?(w(),G(Co,{key:0,modelValue:e(l),"onUpdate:modelValue":r[0]||(r[0]=m=>ot(l)?l.value=m:null)},null,8,["modelValue"])):(w(),G(vo,{key:1,modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=m=>ot(l)?l.value=m:null)},null,8,["modelValue"]))]),file:c(()=>[y("div",{class:Ne(t.fileUploadContainerClasses)},[o(So,{files:t.files,"onEmit:fileUpload":r[2]||(r[2]=m=>s("emit:fileUpload",m))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},_l={class:"flex flex-col justify-between h-full"},fl={class:"px-6 py-4 overflow-y-auto"},gl={class:"actions p-6"},Ae={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(u,{emit:s}){return(t,l)=>{const h=Pe;return w(),C("div",_l,[y("div",fl,[wt(t.$slots,"default")]),y("div",gl,[o(h,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=a=>s("emit:clearForm"))}),o(h,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=a=>s("emit:preview"))})])])}}},ql=Ee("sd-stores-inner",{state:()=>{var u,s;return{buttonLoading:!1,detailLoading:!1,model:{company:(s=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:s.id,content:null,document_type:ae.INNER,document_sub_type:Y.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:se.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:E.withMessage("Поле не должен быть пустым",S)},content:{required:E.withMessage("Поле не должен быть пустым",S)},__departments:{required:E.withMessage("Поле не должен быть пустым",S)},__approvers:{},__signers:{required:E.withMessage("Поле не должен быть пустым",S)}}}},actions:{async actionCreateDocument(u){let s={...u,type:qt,sub_type:qt};this.buttonLoading=!0;const{response:t,error:l}=await Se(Te,s);return t?(this.buttonLoading=!1,Promise.resolve(t)):Promise.reject(l)},async actionUpdateDocument({id:u,body:s}){try{this.buttonLoading=!0;const{data:t}=await Ce({id:u,body:s});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:s}=await he(u);Me(this.model,s),this.model.__approvers=await Q(s.approvers),this.model.__signers=await Q(s.signers),this.model.__departments=await _o(s.receiver.departments),this.model.__files=s.files}catch{}finally{this.detailLoading=!1}}}}),bl={class:"font-semibold text-xl"},Le={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(u,{emit:s}){const l=at(u,"modelValue"),{t:h}=ne();return(a,r)=>{const m=Pe,n=Ct;return w(),G(n,{modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=p=>ot(l)?l.value=p:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[y("span",bl,j(e(h)("preview")),1)]),content:c(()=>[wt(a.$slots,"content")]),footer:c(()=>[o(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(m,{label:u.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:u.sendButtonLoading,onClick:r[0]||(r[0]=p=>s("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},da={__name:"InnerForm",props:{formType:{type:String,default:z}},setup(u){const s=u,t=ie(),l=ql();be();const h=ce(),a=Z(!1);Z(null);const{t:r}=ne(),m=ue(),n=pe(),p=le(l.rules,l.model),x=async()=>{await p.value.$validate()&&(a.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(_=>_.id),l.model.files=[],l.model.files=l.model.__files.map(_=>({id:_.id})),l.model.journal=se.INNER,l.model.sender=t.currentUser.top_level_department.id,l.model.approvers=te(l.model.__approvers),l.model.signers=te(l.model.__signers),l.model.document_type=n.params.document_type,l.model.document_sub_type=n.params.document_sub_type,l.model.receiver&&delete l.model.receiver)},T=()=>{s.formType===z?M():L()},M=async()=>{const $=await l.actionCreateDocument(l.model);await h.actionCountList(),$?(a.value=!1,A(null,r("document-sent"),B.SUCCESS),await m.replace({name:Be,query:{document_type:ae.INNER}})):A(null,r("error-occurred"),B.ERROR)},L=async()=>{await l.actionUpdateDocument({id:n.params.id,body:l.model}),await h.actionCountList(),A(null,r("document-sent"),B.SUCCESS),await m.replace({name:Re,params:{id:n.params.id,document_type:ae.INNER,document_sub_type:Y.SERVICE_LETTER}})},N=()=>{console.log("Clear Form")},I=$=>{l.model.__files=[],$.forEach(_=>{l.model.__files.push(_)})};return lt(async()=>{n.params.id&&await l.actionGetDocumentDetailForUpdate(n.params.id)}),Ue(()=>{Fe(l.model)}),($,_)=>{const b=ve,i=_e,d=Oe,f=me;return e(l).detailLoading?(w(),G(b,{key:0})):(w(),C(J,{key:1},[o(e(Ve),{title:s.formType===e(z)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[o(Ae,{"onEmit:preview":x,"onEmit:clearForm":N},{default:c(()=>[o(f,null,{default:c(()=>[o(i,{"col-class":"w-1/2"},{default:c(()=>[o(Zt,{modelValue:e(p).__departments.$model,"onUpdate:modelValue":_[0]||(_[0]=g=>e(p).__departments.$model=g),error:e(p).__departments},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=g=>e(p).short_description.$model=g),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":_[2]||(_[2]=g=>e(p).__approvers.$model=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=g=>e(p).__signers.$model=g),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:c(()=>[o($e,{modelValue:e(p).content.$model,"onUpdate:modelValue":_[4]||(_[4]=g=>e(p).content.$model=g),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:a.value,"onUpdate:modelValue":_[5]||(_[5]=g=>a.value=g),"send-button-loading":e(l).buttonLoading,"onEmit:send":T},{content:c(()=>{var g,V;return[o(no,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(V=(g=e(t).currentUser)==null?void 0:g.top_level_department)==null?void 0:V.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},hl=Ee("sd-stores-application",{state:()=>{var u,s;return{buttonLoading:!1,detailLoading:!1,model:{company:(s=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:s.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{}}}},actions:{async actionCreateDocument(u){let s={...u};this.buttonLoading=!0;const{response:t,error:l}=await Se(Te,s);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:u,body:s}){try{this.buttonLoading=!0;const{data:t}=await Ce({id:u,body:s});return Promise.resolve(t)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:s}=await he(u);Me(this.model,s),this.model.__approvers=await Q(s.approvers),this.model.__signers=await Q(s.signers.filter(t=>t.type===Ge.SIGNER)),this.model.__curator=await Ie([],s.curator.id,!1),this.model.__files=s.files}catch{}finally{this.detailLoading=!1}}}}),Tt=Ee("order-stores",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:ie().currentUser.company.id,curator:null,document_type:ae.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:se.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:E.withMessage("Поле не должен быть пустым",S)},register_date:{required:E.withMessage("Поле не должен быть пустым",S)},content:{required:E.withMessage("Поле не должен быть пустым",S)},__negotiators:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:s,error:t}=await Se(Te,u);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:s}){try{this.buttonLoading=!0;const{data:t}=await Ce({id:u,body:s});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:s}=await he(u);Me(this.model,s),this.model.__signers=await Q(s.signers.filter(t=>t.type!==Ge.NEGOTIATOR)),this.model.__negotiators=await Q(s.signers.filter(t=>t.type===Ge.NEGOTIATOR)),this.model.__approvers=await Q(s.approvers),this.model.__curator=await Ie([],s.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),ca={__name:"ApplicationForm",props:{formType:{type:String,default:z}},setup(u){const s=u,t=ie(),l=hl();be();const h=ce();Tt();const a=Z(!1);Z(null);const{t:r}=ne(),m=ue(),n=pe(),p=le(l.rules,l.model),x=ee(()=>n.params.document_sub_type===Y.EXPLANATION_LETTER?s.formType===z?"create-explanation-letter":"update-explanation-letter":s.formType===z?"create-sd-application":"update-sd-application"),T=async()=>{var b,i,d,f,g;await p.value.$validate()&&(a.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(b=t==null?void 0:t.currentUser)==null?void 0:b.id}],l.model.sender=(d=(i=t==null?void 0:t.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,l.model.curator=(g=(f=l==null?void 0:l.model)==null?void 0:f.__curator)==null?void 0:g.user_id,l.model.journal=se.APPLICATION,l.model.document_type=n.params.document_type,l.model.document_sub_type=n.params.document_sub_type,l.model.approvers=te(l.model.__approvers))},M=async()=>{},L=()=>{s.formType===z?N():I()},N=async()=>{const _=await l.actionCreateDocument(l.model);await h.actionCountList(),_?(a.value=!1,A(null,r("document-sent"),B.SUCCESS),await m.replace({name:Be,query:{document_type:ae.APPLICATION}})):A(null,r("error-occurred"),B.ERROR)},I=async()=>{await l.actionUpdateDocument({id:n.params.id,body:l.model}),await h.actionCountList(),A(null,r("document-sent"),B.SUCCESS),await m.replace({name:Re,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},$=_=>{l.model.__files=[],_.forEach(b=>{l.model.__files.push(b)})};return lt(async()=>{n.params.id&&await l.actionGetDocumentDetailForUpdate(n.params.id)}),Ue(()=>{Fe(l.model)}),(_,b)=>{const i=ve,d=_e,f=me;return e(l).detailLoading?(w(),G(i,{key:0})):(w(),C(J,{key:1},[o(e(Ve),{title:x.value},{content:c(()=>[o(Ae,{"onEmit:preview":T,"onEmit:clearForm":M},{default:c(()=>[o(f,null,{default:c(()=>[o(d,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":b[0]||(b[0]=g=>e(p).__curator.$model=g),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(d,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":b[1]||(b[1]=g=>e(l).model.__approvers=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(d,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":b[2]||(b[2]=g=>e(p).__signers.$model=g),disabled:"",label:"signers",placeholder:e(t).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),o(d,{"col-class":"w-full"},{default:c(()=>[o($e,{modelValue:e(p).content.$model,"onUpdate:modelValue":b[3]||(b[3]=g=>e(p).content.$model=g),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":$},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:a.value,"onUpdate:modelValue":b[4]||(b[4]=g=>a.value=g),"send-button-loading":e(l).buttonLoading,"onEmit:send":L},{content:c(()=>[o(ro,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:s.formType===e(z)?e(t).currentUser:e(l).model.__signers[0].user,signers:s.formType===e(z)?[e(t).currentUser]:e(l).model.__signers},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},yl=Ee("sd-notice-stores",{state:()=>(ie(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:ae.NOTICE,document_sub_type:Y.BUSINESS_TRIP,journal:se.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:E.withMessage("Поле не должен быть пустым",S)},start_date:{required:E.withMessage("Поле не должен быть пустым",S)},route:{required:E.withMessage("Поле не должен быть пустым",S)},content:{required:E.withMessage("Поле не должен быть пустым",S)},__companies:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__employees:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},__tags:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:s,error:t}=await Se(Te,u);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:s}){try{this.buttonLoading=!0;const{data:t}=await Ce({id:u,body:s});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,s=!1){try{this.detailLoading=!0;const{data:t}=await he(u);Me(this.model,t),this.model.__companies=[],this.model.__curator=await Ie([],t.curator.id,!1),this.model.__employees=await Q(t.notices),s?(this.model.__approvers=await Q(t.approvers.filter(l=>{var h,a;return((h=l==null?void 0:l.user)==null?void 0:h.id)!==((a=t==null?void 0:t.curator)==null?void 0:a.assistant)})),this.model.register_number=null):this.model.__approvers=await Q(t.approvers),this.model.__signers=await Q(t.signers),this.model.__companies=await gt(t.notices[0].destinations),this.model.__tags=await dt(t.tags),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(u,s){try{this.detailLoading=!0;const{data:t}=await he(u),l=await he(s);Me(this.model,t),this.model.__companies=[],this.model.__curator=await Ie([],t.curator.id,!1),this.model.__employees=await Q(l.data.notices),this.model.__approvers=await Q(t.approvers),this.model.__signers=await Q(t.signers),this.model.__companies=await gt(l.data.notices[0].destinations),this.model.__tags=await dt(t.tags),this.model.start_date=l.data.notices[0].start_date,this.model.end_date=l.data.notices[0].end_date,this.model.__tags=t.tags,this.model.route=l.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),wl={class:"flex w-full gap-x-4"},ua={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:z}},setup(u){const s=u,{t}=ne(),l=pe(),h=ue(),a=ie(),r=yl(),m=ce();be();const n=le(r.rules,r.model),p=Z(!1),x=ee(()=>{const i=s.formType===z,d=l.params.document_sub_type;return d===Y.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":d===Y.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),T=ee(()=>{var i,d;return l.params.document_sub_type===Y.BUSINESS_TRIP_DECREE_LOCAL&&((i=l==null?void 0:l.query)==null?void 0:i.compose_id)&&((d=l==null?void 0:l.query)==null?void 0:d.document_sub_type)===Y.BUSINESS_TRIP}),M=ee(()=>{var i;return!!(l.params.document_sub_type===Y.BUSINESS_TRIP_DECREE_LOCAL&&((i=r==null?void 0:r.model)!=null&&i.trip_notice_id))});Ot(()=>r.model.__tags,i=>{if(s.formType===z)if(i&&i.length){let d=`${i.map(f=>f.name_uz).join(", ")} yuzasidan`;r.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else r.model.short_description=null});const L=async()=>{var d,f,g,V,D;await n.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=te(r.model.__approvers),r.model.signers=te(r.model.__signers),r.model.curator=(f=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:f.user_id,r.model.journal=l.params.document_type===ae.DECREE||l.params.document_type===ae.ORDER?se.ORDERS_PROTOCOLS:se.INNER,r.model.company=a.currentUser.company.id,r.model.notices=r.model.__employees.map(O=>({start_date:r.model.start_date,end_date:r.model.end_date,user:O.id,route:r.model.route,companies:r.model.__companies.map(v=>v.id)})),r.model.sender=(V=(g=a==null?void 0:a.currentUser)==null?void 0:g.top_level_department)==null?void 0:V.id,r.model.tags=r.model.__tags.map(O=>({id:O.id})),r.model.files=r.model.__files.map(O=>({id:O.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,T.value&&(r.model.trip_notice_id=(D=l==null?void 0:l.query)==null?void 0:D.compose_id),p.value=!0)},N=()=>{},I=i=>{r.model.__files=[],i.forEach(d=>{r.model.__files.push(d)})},$=async()=>{T.value&&(r.model.notices=[]);const i=await r.actionCreateDocument(r.model);await m.actionCountList(),i?(p.value=!1,A(null,t("document-sent"),B.SUCCESS),await h.replace({name:Be,query:{document_type:l.params.document_sub_type===Y.BUSINESS_TRIP_DECREE_LOCAL?ae.DECREE:l.params.document_sub_type===Y.BUSINESS_TRIP_ORDER_LOCAL?ae.ORDER:ae.NOTICE}})):A(null,t("error-occurred"),B.ERROR)},_=async()=>{(T.value||M.value)&&(r.model.notices=[]),await r.actionUpdateDocument({id:l.params.id,body:r.model}),await m.actionCountList(),A(null,t("changed"),B.SUCCESS),await h.replace({name:Re,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},b=()=>{s.formType===z?$():_()};return We(async()=>{l.params.id&&l.query.trip_notice_id&&l.params.document_sub_type===Y.BUSINESS_TRIP_DECREE_LOCAL?await r.actionGetDocumentDetailForUpdateForCustomUse(l.params.id,l.query.trip_notice_id):l.params.id?await r.actionGetDocumentDetailForUpdate(l.params.id):T.value&&await r.actionGetDocumentDetailForUpdate(l.query.compose_id,!0)}),Ue(()=>{Fe(r.model)}),(i,d)=>{const f=ve,g=_e,V=Ye,D=Je,O=Oe,v=me;return e(r).detailLoading?(w(),G(f,{key:0})):(w(),C(J,{key:1},[o(e(Ve),{title:x.value},{content:c(()=>[o(Ae,{"onEmit:preview":L,"onEmit:clearForm":N},{default:c(()=>[o(v,null,{default:c(()=>[o(g,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=q=>e(n).__curator.$model=q),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=q=>e(n).__employees.$model=q),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:T.value||M.value},null,8,["modelValue","error","disabled"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(eo,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=q=>e(n).__companies.$model=q),error:e(n).__companies,"text-truncate":"",disabled:T.value||M.value},null,8,["modelValue","error","disabled"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(st,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=q=>e(n).__tags.$model=q),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:q})=>[re(j(q.name),1)]),option:c(({value:q})=>[o(e(qe),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[y("div",wl,[o(V,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=q=>e(n).start_date.$model=q),d[5]||(d[5]=q=>e(n).start_date.$model=e(ye)(q))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:T.value||M.value},null,8,["modelValue","error","min-date","disabled"]),o(V,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=q=>e(n).end_date.$model=q),d[7]||(d[7]=q=>e(n).end_date.$model=e(ye)(q))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:T.value||M.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(D,{modelValue:e(n).route.$model,"onUpdate:modelValue":d[8]||(d[8]=q=>e(n).route.$model=q),error:e(n).route,options:e(Pt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:T.value||M.value},null,8,["modelValue","error","options","disabled"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=q=>e(r).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=q=>e(n).__signers.$model=q),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(O,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=q=>e(n).short_description.$model=q),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(g,{"col-class":"w-full"},{default:c(()=>[o($e,{modelValue:e(n).content.$model,"onUpdate:modelValue":d[12]||(d[12]=q=>e(n).content.$model=q),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:p.value,"onUpdate:modelValue":d[13]||(d[13]=q=>p.value=q),"send-button-loading":e(r).buttonLoading,"onEmit:send":b},{content:c(()=>[e(l).params.document_sub_type===e(Y).BUSINESS_TRIP_DECREE_LOCAL?(w(),G(e(ul),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(Y).BUSINESS_TRIP_ORDER_LOCAL?(w(),G(e(ao),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(w(),G(e(so),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},pa={__name:"OrderForm",props:{formType:{type:String,default:z}},setup(u){const s=u,t=Tt(),l=ce(),h=ie(),a=pe(),r=ue(),m=le(t.rules,t.model),{t:n}=ne(),p=Z(!1),x=async()=>{var _,b,i,d;await m.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.approvers=te(t.model.__approvers),t.model.curator=(b=(_=t==null?void 0:t.model)==null?void 0:_.__curator)==null?void 0:b.user_id,t.model.sender=(d=(i=h==null?void 0:h.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,t.model.files=t.model.__files.map(f=>({id:f.id})),t.model.document_type=a.params.document_type,t.model.document_sub_type=a.params.document_sub_type,t.model.journal=se.ORDERS_PROTOCOLS,t.model.register_date=ye(t.model.register_date),t.model.__negotiators.forEach(f=>{t.model.signers.push(f.hasOwnProperty("user")?{id:f.id,user:f.user.id,type:Ge.NEGOTIATOR}:{user:f.id,type:Ge.NEGOTIATOR})}),a.query.compose_id&&(t.model.trip_notice_id=a.query.compose_id),p.value=!0)},T=()=>{},M=async()=>{try{const $=await t.actionCreateDocument(t.model);await l.actionCountList(),$&&(p.value=!1,A(null,n("document-sent"),B.SUCCESS),await r.replace({name:Be,query:{document_type:ae.ORDER}}))}catch{A(null,n("error-occurred"),B.ERROR)}},L=async()=>{try{const $=await t.actionUpdateDocument({id:a.params.id,body:t.model});await l.actionCountList(),A(null,n("changed"),B.SUCCESS),await r.replace({name:Re,params:{id:a.params.id,document_type:a.params.document_type,document_sub_type:a.params.document_sub_type}})}catch{A(null,n("error-occurred"),B.ERROR)}},N=()=>{s.formType===z?M():L()},I=$=>{t.model.__files=[],$.forEach(_=>{t.model.__files.push(_)})};return lt(async()=>{a.params.id&&await t.actionGetDocumentDetailForUpdate(a.params.id)}),Ue(()=>{Fe(t.model)}),($,_)=>{const b=ve,i=_e,d=Oe,f=Ye,g=me;return e(t).detailLoading?(w(),G(b,{key:0})):(w(),C(J,{key:1},[o(e(Ve),{title:s.formType===e(z)?"create-order":"update-order"},{content:c(()=>[o(Ae,{"onEmit:preview":x,"onEmit:clearForm":T},{default:c(()=>[o(g,null,{default:c(()=>[o(i,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=V=>e(m).__curator.$model=V),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(d,{modelValue:e(m).register_number.$model,"onUpdate:modelValue":_[1]||(_[1]=V=>e(m).register_number.$model=V),error:e(m).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(f,{modelValue:e(m).register_date.$model,"onUpdate:modelValue":_[2]||(_[2]=V=>e(m).register_date.$model=V),error:e(m).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":_[3]||(_[3]=V=>e(t).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(m).__negotiators.$model,"onUpdate:modelValue":_[4]||(_[4]=V=>e(m).__negotiators.$model=V),error:e(m).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:c(()=>[o($e,{modelValue:e(m).content.$model,"onUpdate:modelValue":_[5]||(_[5]=V=>e(m).content.$model=V),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:p.value,"onUpdate:modelValue":_[6]||(_[6]=V=>p.value=V),"send-button-loading":e(t).buttonLoading,"onEmit:send":N},{content:c(()=>[o(e(io),{"compose-model":e(t).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vl=Ee("notice-stores",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:s,error:t}=await Se(Te,u);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:s}){try{this.buttonLoading=!0;const{data:t}=await Ce({id:u,body:s});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:s}=await he(u);Me(this.model,s),this.model.__curator=await Ie([],s.curator.id,!1),this.model.__approvers=await Q(s.approvers),this.model.__signers=await Q(s.signers)}catch{}finally{this.detailLoading=!1}}}}),ma={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:z}},setup(u){const s=u,{t}=ne(),l=pe(),h=ue(),a=ie(),r=vl(),m=ce();be();const n=Z(!1),p=le(r.rules,r.model),x=async()=>{var _,b,i,d;await p.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=te(r.model.__approvers),r.model.signers=te(r.model.__signers),r.model.curator=(b=(_=r==null?void 0:r.model)==null?void 0:_.__curator)==null?void 0:b.user_id,r.model.journal=se.INNER,r.model.company=a.currentUser.company.id,r.model.sender=(d=(i=a==null?void 0:a.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,r.model.files=r.model.__files.map(f=>({id:f.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,n.value=!0)},T=()=>{},M=$=>{r.model.__files=[],$.forEach(_=>{r.model.__files.push(_)})},L=async()=>{const $=await r.actionCreateDocument(r.model);await m.actionCountList(),$?(n.value=!1,A(null,t("document-sent"),B.SUCCESS),await h.replace({name:Be,query:{document_type:ae.NOTICE}})):A(null,t("error-occurred"),B.ERROR)},N=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await m.actionCountList(),A(null,t("changed"),B.SUCCESS),await h.replace({name:Re,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},I=()=>{s.formType===z?L():N()};return We(async()=>{l.params.id&&await r.actionGetDocumentDetailForUpdate(l.params.id)}),Ue(()=>{Fe(r.model)}),($,_)=>{const b=ve,i=_e,d=Oe,f=me;return e(r).detailLoading?(w(),G(b,{key:0})):(w(),C(J,{key:1},[o(e(Ve),{title:s.formType===e(z)?"create-notice":"update-notice"},{content:c(()=>[o(Ae,{"onEmit:preview":x,"onEmit:clearForm":T},{default:c(()=>[o(f,null,{default:c(()=>[o(i,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=g=>e(p).__curator.$model=g),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=g=>e(p).short_description.$model=g),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":_[2]||(_[2]=g=>e(r).model.__approvers=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=g=>e(p).__signers.$model=g),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:c(()=>[o($e,{modelValue:e(p).content.$model,"onUpdate:modelValue":_[4]||(_[4]=g=>e(p).content.$model=g),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:n.value,"onUpdate:modelValue":_[5]||(_[5]=g=>n.value=g),"send-button-loading":e(r).buttonLoading,"onEmit:send":I},{content:c(()=>[o(e(co),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},kl=Ee("decree-stores",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){const s={...u};delete s.bookings,delete s.notices,delete s.trip_plans,this.buttonLoading=!0;const{response:t,error:l}=await Se(Te,s);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:u,body:s}){const t={...s};delete t.bookings,delete t.notices,delete t.trip_plans;try{this.buttonLoading=!0;const{data:l}=await Ce({id:u,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,s){try{this.detailLoading=!0;const{data:t}=await he(u);Me(this.model,t),this.model.__curator=await Ie([],t.curator.id,!1),this.model.__approvers=await Q(t.approvers),this.model.__signers=await Q(t.signers)}catch{}finally{this.detailLoading=!1}}}}),_a={__name:"DecreeForm",props:{formType:{type:String,default:z}},setup(u){const s=u,{t}=ne(),l=pe(),h=ue(),a=ie(),r=ce();be();const m=Z(!1),n=kl(),p=ut(),x=le(n.rules,n.model),T=async()=>{var i,d,f,g;await x.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=te(n.model.__approvers),n.model.signers=te(n.model.__signers),n.model.curator=(d=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:d.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=a.currentUser.company.id,n.model.sender=(g=(f=a==null?void 0:a.currentUser)==null?void 0:f.top_level_department)==null?void 0:g.id,n.model.files=n.model.__files.map(V=>({id:V.id})),n.model.document_type=l.params.document_type,n.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(n.model.trip_notice_id=l.query.compose_id),m.value=!0)},M=()=>{},L=b=>{n.model.__files=[],b.forEach(i=>{n.model.__files.push(i)})},N=async()=>{const b=await n.actionCreateDocument(n.model);await r.actionCountList(),b?(m.value=!1,A(null,t("document-sent"),B.SUCCESS),await h.replace({name:Be,query:{document_type:l.params.document_type}})):A(null,t("error-occurred"),B.ERROR)},I=async()=>{await n.actionUpdateDocument({id:l.params.id,body:n.model}),await r.actionCountList(),A(null,t("changed"),B.SUCCESS),await h.replace({name:Re,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},$=()=>{s.formType===z?N():I()},_=async b=>{const{data:i}=await p.actionGetDocumentDetail(b);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return We(async()=>{s.formType===z&&l.query.compose_id?await _(l.query.compose_id):s.formType===De&&l.query.trip_notice_id&&l.params.id?(await n.actionGetDocumentDetailForUpdate(l.params.id,null),await _(l.query.trip_notice_id)):s.formType===De&&l.params.id&&await n.actionGetDocumentDetailForUpdate(l.params.id,null)}),Ue(()=>{Fe(n.model)}),(b,i)=>{const d=ve,f=_e,g=Oe,V=me;return e(n).detailLoading?(w(),G(d,{key:0})):(w(),C(J,{key:1},[o(e(Ve),{title:s.formType===e(z)?"create-decree":"update-decree"},{content:c(()=>[o(Ae,{"onEmit:preview":T,"onEmit:clearForm":M},{default:c(()=>[o(V,null,{default:c(()=>[o(f,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(x).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=D=>e(x).__curator.$model=D),error:e(x).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(g,{modelValue:e(x).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=D=>e(x).short_description.$model=D),error:e(x).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=D=>e(n).model.__approvers=D),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(x).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=D=>e(x).__signers.$model=D),error:e(x).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:c(()=>[o($e,{modelValue:e(x).content.$model,"onUpdate:modelValue":i[4]||(i[4]=D=>e(x).content.$model=D),error:e(x).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:m.value,"onUpdate:modelValue":i[5]||(i[5]=D=>m.value=D),"send-button-loading":e(n).buttonLoading,"onEmit:send":$},{content:c(()=>[o(e(kt),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Rt=Ee("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:E.withMessage("Поле не должен быть пустым",S)},start_date:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},__user:{required:E.withMessage("Поле не должен быть пустым",S)}},secondRules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},__user:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:s,error:t}=await Se(Te,u);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(t))},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:s}=await he(u);return Me(this.model,s),this.model.__curator=await Ie([],s.curator.id,!1),this.model.__approvers=await Q(s.approvers),this.model.__signers=await Q(s.signers),this.model.__user=await ze("users/personal-information",[],!1,s.user.id),this.model.__parent=s.parent,Promise.resolve(s)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:u,body:s}){try{this.buttonLoading=!0;const{data:t}=await Ce({id:u,body:s});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),fa={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:z}},setup(u){const s=u,t=pe(),l=ue(),h=ie(),a=Rt();ut();const r=ce(),{t:m}=ne(),n=le(a.rules,a.model),p=Z(!1),x=Z([]),T=ee(()=>s.formType===z?"create-poa":"update-poa"),M=ee(()=>a.model.start_date?new Date(a.model.start_date):new Date),L=async()=>{var d,f,g,V,D,O,v,q,k,U,R,H,X,P,W,F,ke,fe,Ze,et;if(await n.value.$validate()){if(a.model.approvers=[],a.model.signers=[],a.model.approvers=te(a.model.__approvers),a.model.signers=te(a.model.__signers),a.model.curator=(f=(d=a==null?void 0:a.model)==null?void 0:d.__curator)==null?void 0:f.user_id,a.model.user=(V=(g=a==null?void 0:a.model)==null?void 0:g.__user)==null?void 0:V.id,a.model.journal=se.POWER_OF_ATTORNEY,a.model.company=(O=(D=h.currentUser)==null?void 0:D.company)==null?void 0:O.id,a.model.sender=(q=(v=h==null?void 0:h.currentUser)==null?void 0:v.top_level_department)==null?void 0:q.id,a.model.document_type=t.params.document_type,a.model.document_sub_type=t.params.document_sub_type,a.model.content=".",a.model.parent=(U=(k=a.model)==null?void 0:k.__parent)==null?void 0:U.id,!((H=(R=a==null?void 0:a.model)==null?void 0:R.__user)!=null&&H.passport_seria||(P=(X=a==null?void 0:a.model)==null?void 0:X.__user)!=null&&P.passport_number||(F=(W=a==null?void 0:a.model)==null?void 0:W.__user)!=null&&F.passport_issue_date||(fe=(ke=a==null?void 0:a.model)==null?void 0:ke.__user)!=null&&fe.passport_issued_by)){A(null,`${(et=(Ze=a.model)==null?void 0:Ze.__user)==null?void 0:et.full_name}: ${m("passport-details-error")}`,B.WARNING);return}p.value=!0}},N=()=>{},I=async()=>{const i=await a.actionCreateDocument(a.model);await r.actionCountList(),i?(p.value=!1,A(null,m("document-sent"),B.SUCCESS),await l.replace({name:Be,query:{document_type:ae.POWER_OF_ATTORNEY}})):A(null,m("error-occurred"),B.ERROR)},$=async()=>{await a.actionUpdateDocument({id:t.params.id,body:a.model}),await r.actionCountList(),A(null,m("changed"),B.SUCCESS),await l.replace({name:Re,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},_=()=>{s.formType===z?I():$()},b=async i=>{const{data:d}=await Vt({user:i.id,document_sub_type:t.params.document_sub_type,status:5});x.value=d.results};return We(async()=>{if(t.params.id){const i=await a.actionGetDocumentDetailForUpdate(t.params.id);i.parent&&(x.value=[i.parent])}}),Ue(()=>{Fe(a.model)}),(i,d)=>{const f=ve,g=_e,V=Ye,D=Je,O=me;return e(a).detailLoading?(w(),G(f,{key:0})):(w(),C(J,{key:1},[o(e(Ve),{title:T.value},{content:c(()=>[o(Ae,{"onEmit:preview":L,"onEmit:clearForm":N},{default:c(()=>[o(O,null,{default:c(()=>[o(g,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=v=>e(n).__curator.$model=v),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(n).__user.$model,"onUpdate:modelValue":d[1]||(d[1]=v=>e(n).__user.$model=v),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":d[2]||(d[2]=v=>b(v))},null,8,["modelValue","error"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(V,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[3]||(d[3]=v=>e(n).start_date.$model=v),d[4]||(d[4]=v=>e(n).start_date.$model=e(ye)(v))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(V,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[5]||(d[5]=v=>e(n).end_date.$model=v),d[6]||(d[6]=v=>e(n).end_date.$model=e(ye)(v))],error:e(n).end_date,"min-date":M.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":d[7]||(d[7]=v=>e(a).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[8]||(d[8]=v=>e(n).__signers.$model=v),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:c(()=>[o(D,{modelValue:e(a).model.__parent,"onUpdate:modelValue":d[9]||(d[9]=v=>e(a).model.__parent=v),options:x.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:p.value,"onUpdate:modelValue":d[10]||(d[10]=v=>p.value=v),"send-button-loading":e(a).buttonLoading,"onEmit:send":_},{content:c(()=>[o(xt,{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},xl={class:"base-stepper-component flex items-center select-none"},Vl=["onClick"],$l={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Lt={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(u,{emit:s}){const{t}=ne(),l=h=>{s("emit:stepClick",h)};return(h,a)=>{const r=ge;return w(),C("div",xl,[(w(!0),C(J,null,de(u.items,(m,n)=>(w(),C("div",{key:m.id,class:"flex items-center"},[y("div",{class:Ne(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",m.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:p=>l(m)},[o(r,{icon:m.icon,class:Ne(m.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),y("span",null,j(e(t)(m.label)),1)],10,Vl),n<u.items.length-1?(w(),C("div",$l)):oe("",!0)]))),128))])}}},je=Ee("sd-business-trip-stores",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__countries:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...be().filialList],__users_to_extend:null,__regions_to_extend:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:E.withMessage("Поле не должен быть пустым",S)}},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)},__groups:{$each:E.forEach({__users:{required:E.withMessage("Поле не должен быть пустым",S)},__tags:{required:E.withMessage("Поле не должен быть пустым",S)},__start_date:{required:E.withMessage("Поле не должен быть пустым",S)},__end_date:{required:E.withMessage("Поле не должен быть пустым",S)},__company:{required:E.withMessage("Поле не должен быть пустым",S)},__route:{required:E.withMessage("Поле не должен быть пустым",S)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:E.forEach({users:{required:E.withMessage("Поле не должен быть пустым",S)},text:{required:E.withMessage("Поле не должен быть пустым",S)}})}},booking_model:{bookings:[{type:xe,route:tt,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:E.forEach({segments:{$each:E.forEach({departure_city:{required:E.withMessage("Поле не должен быть пустым",S)},arrival_city:{required:E.withMessage("Поле не должен быть пустым",S)},date:{required:E.withMessage("Поле не должен быть пустым",S)},time:{required:E.withMessage("Поле не должен быть пустым",S)},segment_class:{required:E.withMessage("Поле не должен быть пустым",S)}})},passengers:{required:E.withMessage("Поле не должен быть пустым",S)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Bt,active:!0,value:Ke},{id:4,label:"decree",icon:At,active:!0,value:Qe}],routeTabItems:[{id:1,title:"airplane",icon:jt,value:tt,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:Ft,value:fo,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:zt,value:$t,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:Gt,value:xe},{id:2,title:"complex-route",icon:Wt,value:ct},{id:3,title:"one-way",icon:Yt,value:go}]}),actions:{async actionCreateDocument(u){const s=rt(u);this.buttonLoading=!0;const{response:t,error:l}=await Se(Te,s);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:u,body:s}){const t=await rt(s);try{this.buttonLoading=!0;const{data:l}=await Ce({id:u,body:t});return Promise.resolve(l)}catch(l){return Promise.reject(l)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){var s,t;try{this.detailLoading=!0;const{data:l}=await he(u),h=await Et(l.id);this.decreeModel=(t=(s=h==null?void 0:h.data)==null?void 0:s.to_composes[0])==null?void 0:t.from_compose,Me(this.model,l),this.model.__curator=await Ie([],l.curator.id,!1),this.model.__signers=await Q(l.signers),this.model.__approvers=await Q(l.approvers);const a=Object.values(l.notices.reduce((r,m)=>{const n=m.group_id;return r[n]=r[n]||{group_id:n,items:[]},r[n].items.push(m),r},{}));this.model.__groups=await Promise.all(a.map(async r=>{var I;const m=await Promise.all(r.items.map(async $=>({...await Q([],$.user.id,!1),business_trip_id:$.id}))),n=await dt(r.items[0].tags),p=await ze("regions",r.items[0].locations),x=await ze("countries",r.items[0].countries),T=await ze("companies",[],!1,(I=r.items[0].sender_company)==null?void 0:I.id),M=r.items[0].start_date,L=r.items[0].end_date,N=r.items[0].route;return{__users:m,__tags:n,__regions:p,__countries:x,__start_date:M,__end_date:L,__company:T,__route:N,__filialList:be().filialList}})),this.trip_plan_model.trip_plans=await Promise.all(l.trip_plans.map(async(r,m)=>({...r,users:await Q(r.users)}))),this.booking_model.bookings=await Promise.all(l.bookings.map(async r=>({type:r.type,route:r.route,segments:await Promise.all(r.segments.map(async m=>({departure_city:await ze("regions",[],!1,m.departure_city.id),arrival_city:await ze("regions",[],!1,m.arrival_city.id),segment_class:await qo.find(n=>n.value===m.segment_class),date:ye(m.departure_date),time:await uo(m.departure_date,m.departure_end_date)}))),passengers:await Q(r.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...be().filialList]})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},async actionStepClick(u,s,t){await u.replace({query:{...s.query,step:t}}),this.stepperItems.forEach(h=>h.active=h.value===t),await vt();const l=document.querySelector(".document-view-aside");l&&l.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:xe,route:tt,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(u){this.booking_model.bookings.splice(u,1)},actionChangeRouteSegment(u,s){const t=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[s].segments=u===xe?[t(),t()]:[t()]},async actionAddRouteLine(u){this.booking_model.bookings[u].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(u,s){this.booking_model.bookings[u].segments.splice(s,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...be().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:xe,route:tt,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),El={class:"trip-info-components"},Ul={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Sl={class:"flex justify-between"},Cl={class:"text-base text-primary-900 font-semibold mb-1"},Tl=["onClick"],Rl={class:"flex align-center gap-x-4"},Ll={class:"flex w-full gap-x-4"},Dl={class:"flex w-full gap-x-4"},Nl={class:"text-base text-primary-900 font-semibold mb-2"},Ml={class:"flex items-center justify-between"},yt={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(u,{expose:s,emit:t}){const l=pe(),h=ue(),a=je();be();const{t:r,locale:m}=ne(),n=le(a.rules,a.model),p=Z(!1),x=Z(!1),T=ee(()=>({region_type:"local"})),M=_=>{a.model.__files=[],_.forEach(b=>{a.model.__files.push(b)})},L=()=>{a.actionAddGroupBlock()},N=async _=>{const b=await n.value.$validate();if(p.value=!0,!b){A(null,r("fill-required-fields"),B.WARNING);return}if(l.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_FOREIGN){if(a.model.__groups.find(f=>!f.__countries||f.__countries.length===0)){A(null,r("fill-required-fields"),B.WARNING);return}a.model.__groups.forEach(f=>{f.__regions=[]})}if(l.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_V2){if(a.model.__groups.find(f=>!f.__regions||f.__regions.length===0)){A(null,r("fill-required-fields"),B.WARNING);return}a.model.__groups.forEach(f=>{f.__countries=[]})}x.value=!0,await new Promise(d=>{t("emit:onValidateAndSend",d)})&&await a.actionStepClick(h,l,"decree"),x.value=!1},I=(_,b)=>{a.model.__groups[b].__regions=[]},$=(_,b)=>{_.value.forEach(i=>{var d,f,g,V;if(i.id===((V=(g=(f=(d=a.model)==null?void 0:d.__groups[b])==null?void 0:f.__company)==null?void 0:g.region)==null?void 0:V.id)){const D=a.model.__groups[b].__regions.findIndex(O=>O.id===i.id);(D||D===0)&&a.model.__groups[b].__regions.splice(D,1)}})};return s({stepClick:N}),(_,b)=>{const i=_e,d=Oe,f=ge,g=Je,V=st,D=Ye,O=me,v=Pe;return w(),C("div",El,[o(O,null,{default:c(()=>[o(i,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":b[0]||(b[0]=q=>e(n).__curator.$model=q),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(d,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":b[1]||(b[1]=q=>e(n).short_description.$model=q),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),C(J,null,de(e(a).model.__groups,(q,k)=>(w(),C("div",Ul,[y("div",Sl,[y("span",Cl,j(e(r)("group"))+"-"+j(k+1),1),k!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:U=>e(a).actionDeleteGroupBlock(k)},[o(f,{icon:e(He),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Tl)):oe("",!0)]),o(O,null,{default:c(()=>[o(i,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:q.__users,"onUpdate:modelValue":U=>q.__users=U,error:e(n).__groups.$each.$response.$data[k].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"",allSelectable:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(i,{"col-class":"w-1/2"},{default:c(()=>[y("div",Rl,[o(g,{modelValue:q.__company,"onUpdate:modelValue":U=>q.__company=U,error:e(n).__groups.$each.$response.$data[k].__company,options:q.__filialList,"onUpdate:options":U=>q.__filialList=U,required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":U=>I(U,k)},{option:c(({option:U})=>[o(e(qe),{title:U.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","onUpdate:options","show-nested-error","onEmit:change"]),e(l).params.document_sub_type===e(Y).BUSINESS_TRIP_NOTICE_V2?(w(),G(V,{key:0,modelValue:q.__regions,"onUpdate:modelValue":U=>q.__regions=U,"api-url":"regions","api-params":T.value,"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":U=>$(U,k)},{chip:c(({value:U})=>[re(j(U.name),1)]),option:c(({value:U})=>[o(e(qe),{title:U.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","api-params","show-nested-error","onEmit:change"])):oe("",!0),e(l).params.document_sub_type===e(Y).BUSINESS_TRIP_NOTICE_FOREIGN?(w(),G(V,{key:1,modelValue:q.__countries,"onUpdate:modelValue":U=>q.__countries=U,"api-url":"countries","api-params":{country_type:"foreign"},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where-country",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,"all-selectable":"",class:"w-1/2"},{chip:c(({value:U})=>[re(j(U.name),1)]),option:c(({value:U})=>[o(e(qe),{title:U.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","show-nested-error"])):oe("",!0)])]),_:2},1024),o(i,{"col-class":"w-1/2"},{default:c(()=>[y("div",Ll,[o(V,{modelValue:q.__tags,"onUpdate:modelValue":U=>q.__tags=U,error:e(n).__groups.$each.$response.$data[k].__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":p.value,class:"w-1/2"},{chip:c(({value:U})=>[re(j(U.name),1)]),option:c(({value:U})=>[o(e(qe),{title:U.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),o(g,{modelValue:q.__route,"onUpdate:modelValue":U=>q.__route=U,error:e(n).__groups.$each.$response.$data[k].__route,options:e(a).routeTabItems,"onUpdate:options":b[2]||(b[2]=U=>e(a).routeTabItems=U),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(m)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":p.value,class:"w-1/2"},{option:c(({option:U})=>[o(e(qe),{title:e(r)(U.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),o(i,{"col-class":"w-1/2"},{default:c(()=>[y("div",Dl,[o(D,{modelValue:q.__start_date,"onUpdate:modelValue":[U=>q.__start_date=U,U=>q.__start_date=e(ye)(U)],error:e(n).__groups.$each.$response.$data[k].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(D,{modelValue:q.__end_date,"onUpdate:modelValue":[U=>q.__end_date=U,U=>q.__end_date=e(ye)(U)],error:e(n).__groups.$each.$response.$data[k].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(v,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:L},null,8,["icon-left"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":b[3]||(b[3]=q=>e(a).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":b[4]||(b[4]=q=>e(n).__signers.$model=q),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:c(()=>[y("div",{class:Ne(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(a).model.content?"border-critic-500":"border-greyscale-200"])},[y("div",Nl,j(e(r)("notice")),1),o($e,{modelValue:e(n).content.$model,"onUpdate:modelValue":b[5]||(b[5]=q=>e(n).content.$model=q),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),y("div",Ml,[o(v,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(v,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:x.value,onClick:b[6]||(b[6]=q=>N(e(pt)))},null,8,["loading"])])])}}},Il={class:"work-plan-component"},Ol={class:"flex flex-col gap-y-3"},Pl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Bl={class:"flex justify-between"},Al={class:"text-base text-primary-900 font-semibold mb-1"},jl=["onClick"],Fl={class:"flex items-center justify-between mt-10"},zl={class:"flex items-center gap-x-1"},Gl={__name:"WorkPlan",setup(u,{expose:s}){const{t}=ne(),l=pe(),h=ue(),a=je(),r=le(a.trip_plan_rules,a.trip_plan_model),m=Z(!1),n=ee(()=>{const T=new Set;return a.model.__groups.reduce((M,L)=>L.__users&&Array.isArray(L.__users)?M.concat(L.__users):M,[]).filter(M=>T.has(M.id)?!1:(T.add(M.id),!0))}),p=async T=>{const M=await r.value.$validate();if(m.value=!0,!M){A(null,t("fill-required-fields"),B.WARNING);return}const L=a.trip_plan_model.trip_plans.flatMap(I=>{var $;return($=I.users)==null?void 0:$.map(_=>_.id)}),N=n.value.filter(I=>!L.includes(I.id));N.length?(A(null,`У следующих сотрудников нет плана работы: ${N==null?void 0:N.map(I=>I.first_name+" "+I.last_name).join(", ")}.`,B.WARNING),A(null,"У всех сотрудников должен быть назначен рабочий план.",B.WARNING)):await a.actionStepClick(h,l,T)},x=()=>{a.actionAddWorkPlanRow(),m.value=!1};return s({stepClick:p}),(T,M)=>{const L=ge,N=St,I=_e,$=me,_=Pe;return w(),C("div",Il,[y("div",Ol,[(w(!0),C(J,null,de(e(a).trip_plan_model.trip_plans,(b,i)=>(w(),C("div",Pl,[y("div",Bl,[y("span",Al,j(e(t)("plan"))+"-"+j(i+1),1),i!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d=>e(a).actionDeleteWorkPlanRow(i)},[o(L,{icon:e(He),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,jl)):oe("",!0)]),o($,null,{default:c(()=>[o(I,{"col-class":"w-1/2"},{default:c(()=>[o(N,{modelValue:b.text,"onUpdate:modelValue":d=>b.text=d,error:e(r).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(I,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:b.users,"onUpdate:modelValue":d=>b.users=d,options:n.value,error:e(r).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(_,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:x},null,8,["icon-left"]),y("div",Fl,[o(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",zl,[o(_,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:M[0]||(M[0]=b=>p(e(Ke)))}),o(_,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:M[1]||(M[1]=b=>p(e(Ut)))})])])])}}};const Wl={class:"base-time-picker"},Yl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(u){const s=u,t=at(s,"modelValue"),{t:l}=ne();return(h,a)=>{var n;const r=xo,m=ge;return w(),C("div",Wl,[o(r,{label:s.label,required:s.required},null,8,["label","required"]),o(e(Vo),{modelValue:e(t),"onUpdate:modelValue":a[0]||(a[0]=p=>ot(t)?t.value=p:null),"time-picker":"",range:u.range,"cancel-text":e(l)("cancel"),"select-text":e(l)("select"),placeholder:e(l)(u.placeholder),ref:"datePicker",class:Ne({"input-error":((n=u.error)==null?void 0:n.$error)&&u.showNestedError})},{"input-icon":c(()=>[o(m,{icon:e(Ht),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Hl={class:"route-component flex flex-col gap-y-3"},Xl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Kl={class:"flex items-center justify-between"},Ql={class:"flex items-center gap-x-4"},Jl={class:"text-base text-primary-900 font-semibold mb-1"},Zl={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},en={class:"text-xs text-greyscale-900 font-medium"},tn=["onClick"],on=["onClick"],ln={class:"text-sm text-primary-500 font-semibold"},nn={class:"flex items-center justify-between mt-10"},rn={class:"flex items-center gap-x-1"},an={__name:"Route",props:{formType:{type:String,default:z}},emits:["emit:onValidateAndSend"],setup(u,{expose:s,emit:t}){const{t:l}=ne(),h=pe(),a=ue(),r=je(),m=be();ie(),ce();const n=le(r.booking_model_rules,r.booking_model);Z(!1);const p=Z(!1),x=ee(()=>{const i=new Set;return r.model.__groups.reduce((d,f)=>f.__users&&Array.isArray(f.__users)?d.concat(f.__users):d,[]).filter(d=>i.has(d.id)?!1:(i.add(d.id),!0))}),T=i=>{r.routeTabItems.forEach(d=>d.active=d.id===i.id)},M=(i,d)=>{r.routeTypeTabItems.forEach(f=>f.active=f.id===i.id),r.actionChangeRouteSegment(i.value,d)},L=async(i,d=!1)=>{var D,O;const f=await n.value.$validate();if(p.value=!0,!f){A(null,l("fill-required-fields"),B.WARNING);return}const g=(D=r.booking_model.bookings)==null?void 0:D.flatMap(v=>{var q;return(q=v.passengers)==null?void 0:q.map(k=>k==null?void 0:k.id)}),V=(O=x.value)==null?void 0:O.filter(v=>!(g!=null&&g.includes(v.id)));V.length?(A(null,`У следующих сотрудников не назначен маршрут: ${V.map(v=>v.first_name+" "+v.last_name).join(", ")}.`,B.WARNING),A(null,"У всех сотрудников должен быть назначен маршрут",B.WARNING)):(d&&t("emit:onValidateAndSend"),await r.actionStepClick(a,h,i))},N=()=>{r.actionAddRouteRow(),p.value=!1},I=(i,d,f,g)=>{g.type===xe&&(r.booking_model.bookings[d].segments[f+1].arrival_city=i)},$=(i,d,f,g)=>{g.type===xe&&(r.booking_model.bookings[d].segments[f+1].departure_city=i)},_=(i,d,f,g)=>{g.type===xe&&(r.booking_model.bookings[d].segments[f+1].segment_class=i)},b=()=>{L(Qe,!0)};return s({stepClick:L}),(i,d)=>{const f=Je,g=_e,V=Ye,D=me,O=Pe;return w(),C("div",Hl,[(w(!0),C(J,null,de(e(r).booking_model.bookings,(v,q)=>(w(),C("div",Xl,[y("div",Kl,[y("div",Ql,[y("span",Jl,j(e(l)("route"))+"-"+j(q+1),1),o(ht,{modelValue:v.route,"onUpdate:modelValue":k=>v.route=k,items:e(r).routeTabItems,"onEmit:onChange":d[0]||(d[0]=k=>T(k))},null,8,["modelValue","onUpdate:modelValue","items"]),o(ht,{modelValue:v.type,"onUpdate:modelValue":k=>v.type=k,items:e(r).routeTypeTabItems,"onEmit:onChange":k=>M(k,q)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),q!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d[1]||(d[1]=(...k)=>e(r).actionDeleteRouteRow&&e(r).actionDeleteRouteRow(...k))},[o(ge,{icon:e(He),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):oe("",!0)]),y("div",Zl,[o(ge,{icon:e(it),class:"text-warning-500"},null,8,["icon"]),y("span",en,j(e(l)("route-warning")),1)]),(w(!0),C(J,null,de(v.segments,(k,U)=>(w(),C("div",null,[o(D,null,{default:c(()=>[o(g,{"col-class":"w-1/5"},{default:c(()=>[o(f,{modelValue:k.departure_city,"onUpdate:modelValue":R=>k.departure_city=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[U].departure_city,options:e(m).regionsList,"onUpdate:options":d[2]||(d[2]=R=>e(m).regionsList=R),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:v.type===e(xe)&&U%2!==0,"onEmit:change":R=>I(R,q,U,v)},{option:c(({option:R})=>[o(e(qe),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(g,{"col-class":"w-1/5"},{default:c(()=>[o(f,{modelValue:k.arrival_city,"onUpdate:modelValue":R=>k.arrival_city=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[U].arrival_city,options:e(m).regionsList.filter(R=>{var H;return(R==null?void 0:R.id)!=((H=k.departure_city)==null?void 0:H.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:v.type===e(xe)&&U%2!==0,"onEmit:change":R=>$(R,q,U,v)},{option:c(({option:R})=>[o(e(qe),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(g,{"col-class":"w-1/5"},{default:c(()=>[o(f,{modelValue:k.segment_class,"onUpdate:modelValue":R=>k.segment_class=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[U].segment_class,options:v.route===e($t)?e(bo):v.route===e(tt)?e(ho):e(yo),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":p.value,translatable:"",disabled:v.type===e(xe)&&U%2!==0,"onEmit:change":R=>_(R,q,U,v)},{option:c(({option:R})=>[o(e(qe),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(g,{"col-class":"w-1/5"},{default:c(()=>[o(V,{modelValue:k.date,"onUpdate:modelValue":[R=>k.date=R,R=>k.date=e(ye)(R)],error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[U].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),o(g,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[o(Yl,{modelValue:k.time,"onUpdate:modelValue":R=>k.time=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[U].time,label:"time",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),v.type===e(ct)&&U!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:R=>e(r).actionDeleteRouteLine(q,U)},[o(ge,{icon:e(He),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,tn)):oe("",!0)]),_:2},1024)]),_:2},1024)]))),256)),v.type===e(ct)?(w(),C("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:k=>e(r).actionAddRouteLine(q)},[o(ge,{icon:e(Xe),class:"text-primary-500"},null,8,["icon"]),y("span",ln,j(e(l)("add-line")),1)],8,on)):oe("",!0),o(D,null,{default:c(()=>[o(g,{"col-class":"w-full"},{default:c(()=>[o(K,{modelValue:v.passengers,"onUpdate:modelValue":k=>v.passengers=k,options:x.value,error:e(n).bookings.$each.$response.$data[q].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),o(O,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:N},null,8,["icon-left"]),y("div",nn,[o(O,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",rn,[o(O,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:d[3]||(d[3]=v=>L(e(pt)))}),o(O,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(r).buttonLoading,onClick:b},null,8,["loading"])])])])}}},mt=Ee("sd-extend-business-trip-stores",{state:()=>({buttonLoading:!1,userTripUpdateButtonLoading:!1,detailLoading:!1,changingBTDialog:!1,changingBTLoading:!1,changingBTModel:null,tempVerifications:[],tempRegions:[],tempGroupIndex:null,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionGetParentDocumentDetail(u){try{this.detailLoading=!0;const{data:s}=await he(u);await this.actionAdjustModel(s)}catch{}finally{this.detailLoading=!1}},async actionAdjustModel(u){this.model.__notices=u.notices;const s=Object.values(u.notices.reduce((t,l)=>{const h=l.group_id;return t[h]=t[h]||{group_id:h,items:[]},t[h].items.push(l),t},{}));this.model.__groups=await Promise.all(s.map(async t=>({__users:await Promise.all(t.items.map(async h=>({...await Q([],h.user.id,!1),business_trip_id:h.id}))),__notices_to_change:[],group_id:t.group_id})))},async actionAddUsersToExtend(u,s){var m;await vt();const t=this.model.__groups[s].__users_to_extend||[],l=this.model.__notices.find(n=>t.some(p=>p.id===n.user.id&&n.group_id===u.group_id));if(!l)return;const h=this.model.__groups[s];if(Array.isArray(h.__notices_to_change)||this.$set(h,"__notices_to_change",[]),h.__notices_to_change.some(n=>n.id===l.id||n.parent_id===l.id)){this.tempGroupIndex=s,this.actionClearTempModel();return}this.changingBTModel=l,this.tempGroupIndex=s,this.changingBTLoading=!0,this.changingBTDialog=!0,setTimeout(()=>{this.changingBTLoading=!1},2e3);const r=await $o(l.id);this.tempVerifications=(m=r==null?void 0:r.data)==null?void 0:m.verifications.filter(n=>!n.is_sender).map(n=>({...n,is_visited:n.arrived_at||n.left_at}))},actionDeleteNoticeToChange(u,s,t){this.model.__groups[t].__notices_to_change.splice(s,1)},actionFillNoticesToChange(){var u,s,t,l,h,a;(t=(s=(u=this.model)==null?void 0:u.__groups)==null?void 0:s[this.tempGroupIndex])!=null&&t.__notices_to_change?this.model.__groups[this.tempGroupIndex].__notices_to_change.push({...this.changingBTModel,__regions:this.tempVerifications.map(r=>({...r.region})),__start_date:(l=this.changingBTModel)==null?void 0:l.start_date,__end_date:(h=this.changingBTModel)==null?void 0:h.end_date,__sender_company:(a=this.changingBTModel)==null?void 0:a.sender_company}):console.warn("Target group or __notices_to_change array not found.")},async actionCreateDocument(u){const s=rt(u);this.buttonLoading=!0;const{response:t,error:l}=await Se(Te,s);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:u,body:s}){const t=await rt(s);try{this.buttonLoading=!0;const{data:l}=await Ce({id:u,body:t});return Promise.resolve(l)}catch(l){return Promise.reject(l)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,s){var t,l,h,a,r,m;try{this.detailLoading=!0,await this.actionGetParentDocumentDetail(s);const{data:n}=await he(u),p=await Et(n.id);je().decreeModel.content=((h=(l=(t=p==null?void 0:p.data)==null?void 0:t.to_composes[0])==null?void 0:l.from_compose)==null?void 0:h.content)||"",je().decreeModel.id=((m=(r=(a=p==null?void 0:p.data)==null?void 0:a.to_composes[0])==null?void 0:r.from_compose)==null?void 0:m.id)||null;const x=await Promise.all(this.model.__groups.map(async T=>{const M=n.notices.filter(L=>T.__users.some(N=>{var I;return N.id===((I=L.user)==null?void 0:I.id)&&L.group_id===T.group_id}));return M.length&&(T.__notices_to_change=await Promise.all(M.map(async L=>({user:L.user,__regions:await ze("regions",L.locations),__start_date:L.start_date,__end_date:L.end_date,tags:L.tags,__sender_company:L.sender_company,business_trip_id:L.id,parent_id:L.parent})))),T}));this.model.__curator=await Ie([],n.curator.id,!1),this.model.__signers=await Q(n.signers),this.model.__approvers=await Q(n.approvers),this.model.short_description=n.short_description,this.model.content=n.content}catch(n){return console.error(n),Promise.reject(n)}finally{this.detailLoading=!1}},async actionUpdateUserTrip(){this.actionFillNoticesToChange(),this.actionClearTempModel()},actionResetBTModel(){this.model={approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]}},actionClearTempModel(){this.changingBTDialog=!1,this.changingBTLoading=!1,this.changingBTModel=null,this.tempVerifications=[],this.tempRegions=[],this.model.__groups[this.tempGroupIndex].__users_to_extend=[]},actionClearUserToExtend(){const u=this.model.__groups[this.tempGroupIndex].__users_to_extend.findIndex(s=>{var t,l;return s.id===((l=(t=this.changingBTModel)==null?void 0:t.user)==null?void 0:l.id)});this.model.__groups[this.tempGroupIndex].__users_to_extend.splice(u,1)}}}),sn={class:"decree-component"},dn={class:"flex items-center justify-between mt-10"},cn={class:"flex items-center gap-x-1"},Dt={__name:"Decree",props:{formType:{type:String,default:z}},setup(u,{expose:s}){const t=u,l=pe(),h=ue(),a=je(),r=mt(),m=le(a.decreeRules,a.decreeModel),{t:n}=ne(),p=ie(),x=ce(),T=Z(!1),M=ee(()=>({...l.params.document_sub_type===Y.EXTEND_BUSINESS_TRIP_NOTICE?r.model:a.model,bookings:a.booking_model.bookings,trip_plans:a.trip_plan_model.trip_plans,decree_content:a.decreeModel.content})),L=async b=>{await a.actionStepClick(h,l,b)},N=b=>{a.decreeModel.__files=[],b.forEach(i=>{a.decreeModel.__files.push(i)})},I=async()=>{var i,d,f,g;if(!await m.value.$validate()){A(null,n("fill-required-fields"),B.WARNING);return}a.decreeModel.approvers=[],a.decreeModel.signers=[],a.decreeModel.curator=(d=(i=a.model)==null?void 0:i.__curator)==null?void 0:d.user_id,a.decreeModel.journal=se.ORDERS_PROTOCOLS,a.decreeModel.company=p.currentUser.company.id,a.decreeModel.sender=(g=(f=p==null?void 0:p.currentUser)==null?void 0:f.top_level_department)==null?void 0:g.id,a.decreeModel.document_type=ae.DECREE,a.decreeModel.document_sub_type=l.params.document_sub_type===Y.EXTEND_BUSINESS_TRIP_NOTICE?Y.EXTEND_BUSINESS_TRIP_DECREE:l.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_FOREIGN?Y.BUSINESS_TRIP_DECREE_FOREIGN:Y.BUSINESS_TRIP_DECREE_V2,a.decreeModel.short_description=a.model.short_description,T.value=!0},$=async(b,i)=>{try{await a.actionUpdateDocument({id:i,body:{...a.decreeModel,trip_notice_id:b}}),await x.actionCountList(),A(null,n("successfully-saved"),B.SUCCESS)}catch{}},_=async()=>{var i;let b=null;t.formType===z&&l.query.notice_id?b=l.query.notice_id:t.formType===De&&l.params.id&&(b=l.params.id);try{await $(b,(i=a.decreeModel)==null?void 0:i.id),await h.replace({name:Re,params:{id:b,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type},query:{parent_id:l.query.parent_id}})}catch{}};return s({stepClick:L}),(b,i)=>{const d=Pe;return w(),C("div",sn,[o($e,{modelValue:e(m).content.$model,"onUpdate:modelValue":i[0]||(i[0]=f=>e(m).content.$model=f),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).decreeModel.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"]),y("div",dn,[o(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",cn,[o(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:i[1]||(i[1]=f=>L(e(Ke)))}),o(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:I})])]),o(Le,{modelValue:T.value,"onUpdate:modelValue":i[2]||(i[2]=f=>T.value=f),"send-button-loading":e(a).buttonLoading,"onEmit:send":_,"content-classes":"p-0"},{content:c(()=>[o(e(po),{"compose-model":M.value,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},un={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},pn={class:"px-6 py-4"},ga={__name:"BusinessTripForm",props:{formType:{type:String,default:z}},setup(u){const s=u,{t}=ne(),l=pe(),h=ue(),a=ie(),r=je();le(r.rules,r.model),le(r.trip_plan_rules,r.trip_plan_model),le(r.booking_model_rules,r.booking_model),le(r.decreeRules,r.decreeModel);const m=Z(null),n=ee(()=>s.formType===z?l.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_V2?"create-business-trip-notice":"create-business-trip-notice-foreign":l.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_V2?"update-business-trip-notice":"update-business-trip-notice-foreign"),p=ee(()=>{switch(l.query.step){case Ke:return yt;case Qe:return Dt;case pt:return Gl;case Ut:return an;default:return yt}}),x=async N=>{var $;const I=e(m);(($=l.query)==null?void 0:$.step)!==N.value&&(await I.stepClick(N.value),N.value,Qe)},T=async()=>{l.query.step||await h.replace({query:{...l.query,step:Ke}}),r.stepperItems.forEach(N=>N.active=N.value===l.query.step)},M=async()=>{var $,_,b,i,d,f,g,V,D,O,v,q;const N=te(r.model.__approvers),I=te(r.model.__signers);if(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.bookings=[],r.model.trip_plans=[],r.model.approvers=N,r.model.signers=I,r.model.curator=(_=($=r.model)==null?void 0:$.__curator)==null?void 0:_.user_id,r.model.journal=se.INNER,r.model.company=(i=(b=a.currentUser)==null?void 0:b.company)==null?void 0:i.id,r.model.__groups.forEach((k,U)=>{const R=U+1;r.model.notices.push(...k.__users.map(H=>{var X,P,W;return{start_date:k.__start_date,end_date:k.__end_date,end_date_2:k.__end_date,user:H.id,company:(P=(X=a.currentUser)==null?void 0:X.company)==null?void 0:P.id,sender_company:(W=k.__company)==null?void 0:W.id,regions:k.__regions.map(F=>F.id),countries:k.__countries.map(F=>({id:F.id})),tags:k.__tags.map(F=>({id:F.id})),route:k.__route,group_id:R,trip_type:l.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_FOREIGN?"foreign":"local",...H.business_trip_id?{id:H.business_trip_id}:{}}}))}),r.model.sender=(f=(d=a==null?void 0:a.currentUser)==null?void 0:d.top_level_department)==null?void 0:f.id,r.model.files=r.model.__files.map(k=>({id:k.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,s.formType===z&&l.query.notice_id)try{await r.actionUpdateDocument({id:l.query.notice_id,body:r.model})}catch(k){throw k}else if(s.formType===z)try{const{data:k}=await r.actionCreateDocument(r.model),U={approvers:[],signers:[],curator:(V=(g=r.model)==null?void 0:g.__curator)==null?void 0:V.user_id,journal:se.ORDERS_PROTOCOLS,company:a.currentUser.company.id,sender:(O=(D=a==null?void 0:a.currentUser)==null?void 0:D.top_level_department)==null?void 0:O.id,document_type:ae.DECREE,document_sub_type:l.params.document_sub_type===Y.EXTEND_BUSINESS_TRIP_NOTICE?Y.EXTEND_BUSINESS_TRIP_DECREE:l.params.document_sub_type===Y.BUSINESS_TRIP_NOTICE_FOREIGN?Y.BUSINESS_TRIP_DECREE_FOREIGN:Y.BUSINESS_TRIP_DECREE_V2,short_description:(v=r.model)==null?void 0:v.short_description,trip_notice_id:k.id,content:k.content};r.decreeModel.content=k.content;try{const R=await r.actionCreateDocument(U);r.decreeModel.id=(q=R==null?void 0:R.data)==null?void 0:q.id,await h.replace({query:{...l.query,notice_id:k.id}}),await r.actionGetDocumentDetailForUpdate(k.id)}catch(R){throw R}}catch(k){throw k}else if(s.formType===De&&l.params.id)try{await r.actionUpdateDocument({id:l.params.id,body:r.model})}catch(k){throw k}},L=async N=>{try{await M(),await A(null,t("notice-saved-successfully"),B.SUCCESS),N(!0)}catch{N(!1)}};return We(async()=>{await T(),s.formType===De?await r.actionGetDocumentDetailForUpdate(l.params.id):l.query.notice_id&&await r.actionGetDocumentDetailForUpdate(l.query.notice_id)}),Ue(()=>{r.actionResetBTModel()}),(N,I)=>{const $=ve,_=Lt;return w(),C("div",{class:Ne(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(r).detailLoading}])},[e(r).detailLoading?(w(),G($,{key:0})):(w(),G(e(Ve),{key:1,title:n.value},{content:c(()=>[y("div",un,[o(_,{items:e(r).stepperItems,"onEmit:stepClick":x},null,8,["items"])]),y("div",pn,[(w(),G(Xt(p.value),{"form-type":u.formType,ref_key:"childComponent",ref:m,"onEmit:onValidateAndSend":L},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},mn=Ee("sd-decree-stores",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)},__groups:{$each:E.forEach({__users:{required:E.withMessage("Поле не должен быть пустым",S)},__tags:{required:E.withMessage("Поле не должен быть пустым",S)},__regions:{required:E.withMessage("Поле не должен быть пустым",S)},__start_date:{required:E.withMessage("Поле не должен быть пустым",S)},__end_date:{required:E.withMessage("Поле не должен быть пустым",S)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:E.forEach({users:{required:E.withMessage("Поле не должен быть пустым",S)},text:{required:E.withMessage("Поле не должен быть пустым",S)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(u){this.buttonLoading=!0;const{response:s,error:t}=await Se(Te,u);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:s}){try{this.buttonLoading=!0;const{data:t}=await Ce({id:u,body:s});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),_n={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},fn={class:"flex justify-between"},gn={class:"text-base text-primary-900 font-semibold mb-1"},qn=["onClick"],bn={class:"flex w-full gap-x-4"},hn={class:"flex flex-col gap-y-3"},yn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},wn={class:"flex justify-between"},vn={class:"text-base text-primary-900 font-semibold mb-1"},kn=["onClick"],xn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Vn={class:"text-base text-primary-900 font-semibold mb-2"},qa={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:z}},setup(u){const s=u,t=Z(!1),l=Z(!1),{t:h}=ne(),a=pe(),r=ue(),m=ie(),n=mn(),p=ce();be();const x=le(n.rules,n.model),T=le(n.trip_plan_rules,n.trip_plan_model),M=ee(()=>s.formType===z?"create-decree":"update-decree"),L=ee(()=>{const g=new Set;return n.model.__groups.reduce((V,D)=>D.__users&&Array.isArray(D.__users)?V.concat(D.__users):V,[]).filter(V=>g.has(V.id)?!1:(g.add(V.id),!0))}),N=async()=>{var O,v,q,k,U,R;if(t.value=!0,!await x.value.$validate()){A(null,h("fill-required-fields"),B.WARNING);return}const V=te(n.model.__approvers),D=te(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=V,n.model.signers=D,n.model.curator=(v=(O=n.model)==null?void 0:O.__curator)==null?void 0:v.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=(k=(q=m.currentUser)==null?void 0:q.company)==null?void 0:k.id,n.model.__groups.forEach((H,X)=>{const P=X+1;n.model.notices.push(...H.__users.map(W=>{var F,ke;return{start_date:H.__start_date,end_date:H.__end_date,user:W.id,company:(ke=(F=m.currentUser)==null?void 0:F.company)==null?void 0:ke.id,regions:H.__regions.map(fe=>fe.id),tags:H.__tags.map(fe=>({id:fe.id})),group_id:P}}))}),n.model.sender=(R=(U=m==null?void 0:m.currentUser)==null?void 0:U.top_level_department)==null?void 0:R.id,n.model.files=n.model.__files.map(H=>({id:H.id})),n.model.document_type=a.params.document_type,n.model.document_sub_type=a.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(H=>({users:H.users.map(X=>({id:X.id})),text:H.text})),l.value=!0},I=()=>{},$=()=>{n.actionAddGroupBlock()},_=()=>{n.actionAddWorkPlanRow(),t.value=!1},b=g=>{n.model.__files=[],g.forEach(V=>{n.model.__files.push(V)})},i=async()=>{const g=await n.actionCreateDocument(n.model);await p.actionCountList(),g?(l.value=!1,A(null,h("document-sent"),B.SUCCESS),await r.replace({name:Be,query:{document_type:a.params.document_type}})):A(null,h("error-occurred"),B.ERROR)},d=async()=>{await n.actionUpdateDocument({id:a.params.id,body:n.model}),await p.actionCountList(),A(null,h("changed"),B.SUCCESS),await r.replace({name:Re,params:{id:a.params.id,document_type:a.params.document_type,document_sub_type:a.params.document_sub_type}})},f=()=>{s.formType===z?i():d()};return(g,V)=>{const D=ve,O=_e,v=Oe,q=ge,k=st,U=Ye,R=me,H=Pe,X=St;return e(n).detailLoading?(w(),G(D,{key:0})):(w(),C(J,{key:1},[o(e(Ve),{title:M.value},{content:c(()=>[o(Ae,{"onEmit:preview":N,"onEmit:clearForm":I},{default:c(()=>[o(R,null,{default:c(()=>[o(O,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(x).__curator.$model,"onUpdate:modelValue":V[0]||(V[0]=P=>e(x).__curator.$model=P),error:e(x).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(O,{"col-class":"w-1/2"},{default:c(()=>[o(v,{modelValue:e(x).short_description.$model,"onUpdate:modelValue":V[1]||(V[1]=P=>e(x).short_description.$model=P),error:e(x).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(O,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),C(J,null,de(e(n).model.__groups,(P,W)=>(w(),C("div",_n,[y("div",fn,[y("span",gn,j(e(h)("group"))+"-"+j(W+1),1),W!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:F=>e(n).actionDeleteGroupBlock(W)},[o(q,{icon:e(He),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,qn)):oe("",!0)]),o(R,null,{default:c(()=>[o(O,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:P.__users,"onUpdate:modelValue":F=>P.__users=F,error:e(x).__groups.$each.$response.$data[W].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(O,{"col-class":"w-1/2"},{default:c(()=>[o(k,{modelValue:P.__regions,"onUpdate:modelValue":F=>P.__regions=F,error:e(x).__groups.$each.$response.$data[W].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":t.value},{chip:c(({value:F})=>[re(j(F.name),1)]),option:c(({value:F})=>[o(e(qe),{title:F.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(O,{"col-class":"w-1/2"},{default:c(()=>[o(k,{modelValue:P.__tags,"onUpdate:modelValue":F=>P.__tags=F,error:e(x).__groups.$each.$response.$data[W].__tags,"api-url":"tags","api-params":{document_sub_type:e(a).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":t.value},{chip:c(({value:F})=>[re(j(F.name),1)]),option:c(({value:F})=>[o(e(qe),{title:F.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),o(O,{"col-class":"w-1/2"},{default:c(()=>[y("div",bn,[o(U,{modelValue:P.__start_date,"onUpdate:modelValue":[F=>P.__start_date=F,F=>P.__start_date=e(ye)(F)],error:e(x).__groups.$each.$response.$data[W].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(U,{modelValue:P.__end_date,"onUpdate:modelValue":[F=>P.__end_date=F,F=>P.__end_date=e(ye)(F)],error:e(x).__groups.$each.$response.$data[W].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(H,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:$},null,8,["icon-left"])]),_:1})]),_:1}),y("div",hn,[(w(!0),C(J,null,de(e(n).trip_plan_model.trip_plans,(P,W)=>(w(),C("div",yn,[y("div",wn,[y("span",vn,j(e(h)("plan"))+"-"+j(W+1),1),W!==0?(w(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:F=>e(n).actionDeleteWorkPlanRow(W)},[o(q,{icon:e(He),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,kn)):oe("",!0)]),o(R,null,{default:c(()=>[o(O,{"col-class":"w-1/2"},{default:c(()=>[o(X,{modelValue:P.text,"onUpdate:modelValue":F=>P.text=F,error:e(T).trip_plans.$each.$response.$data[W].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(O,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:P.users,"onUpdate:modelValue":F=>P.users=F,options:L.value,error:e(T).trip_plans.$each.$response.$data[W].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(H,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:_},null,8,["icon-left"]),o(R,null,{default:c(()=>[o(O,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":V[2]||(V[2]=P=>e(n).model.__approvers=P),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(O,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(x).__signers.$model,"onUpdate:modelValue":V[3]||(V[3]=P=>e(x).__signers.$model=P),error:e(x).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(O,{"col-class":"w-full"},{default:c(()=>[y("div",xn,[y("div",Vn,j(e(h)("decree")),1),o($e,{modelValue:e(x).content.$model,"onUpdate:modelValue":V[4]||(V[4]=P=>e(x).content.$model=P),error:e(x).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":b},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:l.value,"onUpdate:modelValue":V[5]||(V[5]=P=>l.value=P),"send-button-loading":e(n).buttonLoading,"onEmit:send":f},{content:c(()=>[o(e(kt),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},$n={class:"flex gap-x-[6px] items-center px-2 py-1 bg-greyscale-50 rounded-[90px] border-b border-greyscale-200"},En={key:0,class:"w-6 h-6 rounded-full flex items-center justify-center text-xs text-white bg-primary-500"},Un={class:"text-greyscale-900 text-sm font-medium"},nt={__name:"BaseChip",props:{item:{type:Object,default:()=>({})},label:{type:String,default:"Example"},type:{type:String,default:"user",validator(u){return["user","location","other"].includes(u)}},clearable:{type:Boolean,default:!1}},emits:["emit:clear"],setup(u,{emit:s}){const t=l=>{s("emit:clear",l)};return(l,h)=>(w(),C("div",$n,[u.type==="user"?(w(),C("div",En,j(u.label[0]),1)):u.type==="location"?(w(),G(ge,{key:1,icon:e(Kt),class:"text-greyscale-400"},null,8,["icon"])):oe("",!0),y("div",Un,j(u.label),1),u.clearable?(w(),C("div",{key:2,class:"flex justify-center items-center w-5 h-5 rounded-full bg-critic-500 cursor-pointer",onClick:h[0]||(h[0]=a=>t(u.item))},[o(ge,{icon:e(Qt),class:"text-white"},null,8,["icon"])])):oe("",!0)]))}},Sn={key:0,class:"flex flex-col gap-y-5"},Cn={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Tn={class:"text-sm font-medium text-greyscale-500"},Rn={class:"text-green-900"},Ln=y("br",null,null,-1),Dn={class:"flex flex-col gap-y-2"},Nn={class:"text-sm font-medium text-greyscale-500"},Mn=y("span",{class:"text-red-500"},"*",-1),In={class:"flex flex-wrap gap-3"},On={class:"flex flex-col gap-y-2"},Pn={key:1,class:"flex flex-col gap-y-5"},Bn={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},An={class:"text-sm font-medium text-greyscale-500"},jn={class:"text-green-900"},Fn={__name:"ChangingBusinessTripModal",setup(u){const s=mt(),{t}=ne(),l=ee(()=>{var n;return["reporting","closed"].includes((n=s==null?void 0:s.changingBTModel)==null?void 0:n.trip_status)}),h=()=>{var p;if(!(((p=s.tempVerifications)==null?void 0:p.length)>0)){A(null,"Kamida bitta hudud qo'shing!",B.WARNING);return}s.actionUpdateUserTrip()},a=()=>{s.actionClearTempModel()},r=(n,p)=>{s.tempVerifications.splice(p,1)},m=n=>{n.value.forEach(p=>{s.tempVerifications.some(T=>T.region.id===p.id)||s.tempVerifications.push({region:p,is_visited:!1}),s.tempRegions=[]})};return(n,p)=>{const x=ve,T=st,M=Ye,L=Pe,N=Ct;return w(),G(N,{modelValue:e(s).changingBTDialog,"onUpdate:modelValue":p[4]||(p[4]=I=>e(s).changingBTDialog=I),label:"confirm","max-width":"max-w-[631px]",closable:!1},Jt({content:c(()=>{var I,$,_,b;return[e(s).changingBTLoading?(w(),G(x,{key:0,class:"my-16"})):(w(),C(J,{key:1},[l.value?(w(),C("div",Pn,[y("div",Bn,[o(ge,{icon:e(it),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),y("div",An,[y("span",jn,j((b=(_=e(s).changingBTModel)==null?void 0:_.user)==null?void 0:b.full_name),1),re("ga tegishli bo'lgan xizmat safari yakunlangan! ")])])])):(w(),C("div",Sn,[y("div",Cn,[o(ge,{icon:e(it),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),y("div",Tn,[re("Siz rostdan ham "),y("span",Rn,j(($=(I=e(s).changingBTModel)==null?void 0:I.user)==null?void 0:$.full_name),1),re("ga tegishli bo'lgan xizmat safarini o'zgartirmoqchimisiz? "),Ln,re(" Bunda xizmat safari bilan vaqtinchalik amaliyot bajarish to'xtatiladi! ")])]),y("div",Dn,[y("span",Nn,[re(j(e(t)("trip-place"))+" ",1),Mn]),y("div",In,[(w(!0),C(J,null,de(e(s).tempVerifications,(i,d)=>{var f;return w(),G(nt,{key:i.id,label:(f=i==null?void 0:i.region)==null?void 0:f.name_uz,clearable:!i.is_visited,type:"location",class:"w-fit","onEmit:clear":g=>r(i,d)},null,8,["label","clearable","onEmit:clear"])}),128))]),o(T,{modelValue:e(s).tempRegions,"onUpdate:modelValue":p[0]||(p[0]=i=>e(s).tempRegions=i),"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",type:"department",placeholder:"add-trip-place",required:"","onEmit:change":p[1]||(p[1]=i=>m(i))},{chip:c(({value:i})=>[re(j(i.name),1)]),option:c(({value:i})=>[o(e(qe),{title:i.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue"])]),y("div",On,[o(M,{modelValue:e(s).changingBTModel.end_date,"onUpdate:modelValue":[p[2]||(p[2]=i=>e(s).changingBTModel.end_date=i),p[3]||(p[3]=i=>e(s).changingBTModel.end_date=e(ye)(i))],"min-date":new Date(e(s).changingBTModel.start_date),required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","min-date"])])]))],64))]}),_:2},[e(s).changingBTLoading?void 0:{name:"footer",fn:c(()=>[o(L,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:a}),l.value?oe("",!0):(w(),G(L,{key:0,loading:e(s).userTripUpdateButtonLoading,label:"update",rounded:"",shadow:"",type:"button",onClick:h},null,8,["loading"]))]),key:"0"}]),1032,["modelValue"])}}},zn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},Gn={class:"px-6 py-4"},Wn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Yn={class:"flex justify-between"},Hn={class:"text-base text-primary-900 font-semibold mb-1"},Xn={class:"text-sm text-greyscale-500 font-medium"},Kn={class:"text-sm text-greyscale-500 font-medium"},Qn={class:"flex flex-wrap gap-3 mt-1"},Jn={class:"flex justify-between items-center"},Zn={class:"text-sm text-greyscale-500 font-medium"},er={class:"text-base text-primary-900 font-semibold mb-2"},tr={class:"flex items-center justify-between"},ba={__name:"ExtendBusinessTripForm",props:{formType:{type:String,default:z}},setup(u){const s=u,t=mt(),l=je(),h=ie(),a=le(t.rules,t.model),r=pe(),m=ue(),{t:n}=ne(),p=Z(!1);Z(!1);const x=ee(()=>{const $=s.formType===z;return"trip-notice-for-change"}),T=async()=>{var i,d,f,g,V,D,O,v,q,k,U,R,H;const $=te(t.model.__approvers),_=te(t.model.__signers);t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.approvers=$,t.model.signers=_,t.model.curator=(d=(i=t.model)==null?void 0:i.__curator)==null?void 0:d.user_id,t.model.journal=se.INNER,t.model.company=(g=(f=h.currentUser)==null?void 0:f.company)==null?void 0:g.id;let b=1;if(t.model.__groups.forEach(X=>{Array.isArray(X.__notices_to_change)&&t.model.notices.push(...X.__notices_to_change.map(P=>{var W,F,ke;return{...s.formType===De?{id:P.id}:{},start_date:P.__start_date,end_date:P.__end_date,user:P.user.id,company:(F=(W=h.currentUser)==null?void 0:W.company)==null?void 0:F.id,sender_company:(ke=P.sender_company)==null?void 0:ke.id,regions:P.__regions.map(fe=>fe.id),tags:P.tags.map(fe=>({id:fe.id})),route:P.route,group_id:b++,trip_type:"changed_local",parent:P.id,...P.business_trip_id?{id:P.business_trip_id}:{}}}))}),t.model.sender=(D=(V=h==null?void 0:h.currentUser)==null?void 0:V.top_level_department)==null?void 0:D.id,t.model.files=t.model.__files.map(X=>({id:X.id})),t.model.document_type=r.params.document_type,t.model.document_sub_type=r.params.document_sub_type,t.model.trip_notice_id=((O=r.query)==null?void 0:O.parent_id)||null,s.formType===z&&r.query.notice_id)try{await t.actionUpdateDocument({id:r.query.notice_id,body:t.model}),await A(null,n("notice-saved-successfully"),B.SUCCESS)}catch{}else if(s.formType===z)try{const{data:X}=await t.actionCreateDocument(t.model),P={approvers:[],signers:[],curator:(q=(v=t.model)==null?void 0:v.__curator)==null?void 0:q.user_id,journal:se.ORDERS_PROTOCOLS,company:h.currentUser.company.id,sender:(U=(k=h==null?void 0:h.currentUser)==null?void 0:k.top_level_department)==null?void 0:U.id,document_type:ae.DECREE,document_sub_type:Y.EXTEND_BUSINESS_TRIP_DECREE,short_description:(R=t.model)==null?void 0:R.short_description,trip_notice_id:X.id,content:X.content};l.decreeModel.content=X.content;try{const W=await t.actionCreateDocument(P);l.decreeModel.id=(H=W==null?void 0:W.data)==null?void 0:H.id,await m.replace({query:{...r.query,notice_id:X.id,parent_id:r.query.parent_id}}),await A(null,n("notice-saved-successfully"),B.SUCCESS),await t.actionGetDocumentDetailForUpdate(X.id,r.query.parent_id)}catch(W){console.error(W)}}catch(X){console.error(X)}else if(s.formType===De&&r.params.id)try{await t.actionUpdateDocument({id:r.params.id,body:t.model}),await A(null,n("notice-saved-successfully"),B.SUCCESS)}catch{}},M=$=>{t.model.__files=[],$.forEach(_=>{t.model.__files.push(_)})},L=async $=>{var _;try{((_=r.query)==null?void 0:_.step)!==$.value&&($.value===Qe&&(await N(),await T()),await l.actionStepClick(m,r,$.value))}catch(b){console.error(b)}},N=async()=>{const $=await a.value.$validate();if(p.value=!0,!$)return A(null,n("fill-required-fields"),B.WARNING),Promise.reject();if(!t.model.__groups.some(b=>Array.isArray(b.__notices_to_change)&&b.__notices_to_change.length>0))return A(null,"Kamida bitta xodim o'zgartirish uchun tanlanishi kerak!",B.WARNING),Promise.reject()},I=async()=>{r.query.step||await m.replace({query:{...r.query,step:Ke}}),l.stepperItems.forEach($=>$.active=$.value===r.query.step)};return lt(async()=>{await I()}),We(async()=>{var $,_,b,i,d,f;s.formType===z&&(($=r.query)!=null&&$.notice_id)&&((_=r.query)!=null&&_.parent_id)?await t.actionGetDocumentDetailForUpdate((b=r.query)==null?void 0:b.notice_id,(i=r.query)==null?void 0:i.parent_id):s.formType===z&&((d=r.query)!=null&&d.parent_id)?await t.actionGetParentDocumentDetail(r.query.parent_id):s.formType===De&&await t.actionGetDocumentDetailForUpdate(r.params.id,(f=r.query)==null?void 0:f.parent_id)}),Ue(()=>{t.actionResetBTModel()}),($,_)=>{const b=ve,i=Lt,d=_e,f=Oe,g=me,V=Pe;return w(),C("div",{class:Ne(["extend-business-trip-form",{"h-[calc(100vh-200px)]":e(t).detailLoading}])},[e(t).detailLoading?(w(),G(b,{key:0})):(w(),G(e(Ve),{key:1,title:x.value},{content:c(()=>{var D,O;return[y("div",zn,[o(i,{items:e(l).stepperItems,"onEmit:stepClick":L},null,8,["items"])]),y("div",Gn,[((D=e(r).query)==null?void 0:D.step)==="trip_info"?(w(),C(J,{key:0},[o(g,null,{default:c(()=>[o(d,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=v=>e(a).__curator.$model=v),error:e(a).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(d,{"col-class":"w-1/2"},{default:c(()=>[o(f,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=v=>e(a).short_description.$model=v),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(d,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),C(J,null,de(e(t).model.__groups,(v,q)=>(w(),C("div",Wn,[y("div",Yn,[y("span",Hn,j(e(n)("group"))+"-"+j(q+1),1)]),o(g,null,{default:c(()=>[o(d,{"col-class":"w-full"},{default:c(()=>[o(K,{modelValue:v.__users_to_extend,"onUpdate:modelValue":[k=>v.__users_to_extend=k,k=>e(t).actionAddUsersToExtend(v,q)],label:"select-employees-in-business-trip",options:v.__users,searchable:!1,placeholder:"select-employees","show-nested-error":p.value,disabled:u.formType===e(De),allSelectable:""},null,8,["modelValue","onUpdate:modelValue","options","show-nested-error","disabled"])]),_:2},1024),o(d,{"col-class":"w-full"},{default:c(()=>[(w(!0),C(J,null,de(v.__notices_to_change,(k,U)=>(w(),G(g,null,{default:c(()=>[o(d,{"col-class":"w-1/3"},{default:c(()=>{var R;return[y("span",Xn,j(e(n)("employees-in-business-trip")),1),o(nt,{label:(R=k.user)==null?void 0:R.full_name,class:"w-fit mt-1"},null,8,["label"])]}),_:2},1024),o(d,{"col-class":"w-1/3"},{default:c(()=>[y("span",Kn,j(e(n)("trip-place")),1),y("div",Qn,[(w(!0),C(J,null,de(k.__regions,R=>(w(),G(nt,{key:k.id,label:R.name_uz,type:"location",class:"w-fit"},null,8,["label"]))),128))])]),_:2},1024),o(d,{"col-class":"w-1/3"},{default:c(()=>[y("div",Jn,[y("div",null,[y("span",Zn,j(e(n)("end-date")),1),o(nt,{label:k.__end_date,type:"other",class:"w-fit mt-1"},null,8,["label"])])])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]))),256))]),_:1}),o(d,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":_[2]||(_[2]=v=>e(t).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(d,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=v=>e(a).__signers.$model=v),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(d,{"col-class":"w-full"},{default:c(()=>[y("div",{class:Ne(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(t).model.content?"border-critic-500":"border-greyscale-200"])},[y("div",er,j(e(n)("notice")),1),o($e,{modelValue:e(a).content.$model,"onUpdate:modelValue":_[4]||(_[4]=v=>e(a).content.$model=v),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),y("div",tr,[o(V,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(V,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:_[5]||(_[5]=v=>L({value:e(Qe)}))})])],64)):((O=e(r).query)==null?void 0:O.step)==="decree"?(w(),G(e(Dt),{key:1,"form-type":u.formType},null,8,["form-type"])):oe("",!0)])]}),_:1},8,["title"])),o(Fn,{modelValue:e(t).changingBTDialog,"onUpdate:modelValue":_[6]||(_[6]=D=>e(t).changingBTDialog=D)},null,8,["modelValue"])],2)}}},ha={__name:"PowerOfAttorneySecondForm",props:{formType:{type:String,default:z}},setup(u){const s=u,t=pe(),l=ue(),h=ie(),a=Rt(),r=ce(),{t:m}=ne(),n=le(a.secondRules,a.model),p=Z(!1),x=Z(!1),T=Z([]),M=ee(()=>s.formType===z?"create-poa":"update-poa");ee(()=>a.model.start_date?new Date(a.model.start_date):new Date);const L=async()=>{var f,g,V,D,O,v,q,k,U,R,H,X,P,W,F,ke,fe,Ze,et,_t;if(x.value=!0,!!await n.value.$validate()){if(a.model.approvers=[],a.model.signers=[],a.model.approvers=te(a.model.__approvers),a.model.signers=te(a.model.__signers),a.model.curator=(g=(f=a==null?void 0:a.model)==null?void 0:f.__curator)==null?void 0:g.user_id,a.model.user=(D=(V=a==null?void 0:a.model)==null?void 0:V.__user)==null?void 0:D.id,a.model.journal=se.POWER_OF_ATTORNEY,a.model.company=(v=(O=h.currentUser)==null?void 0:O.company)==null?void 0:v.id,a.model.sender=(k=(q=h==null?void 0:h.currentUser)==null?void 0:q.top_level_department)==null?void 0:k.id,a.model.document_type=t.params.document_type,a.model.document_sub_type=t.params.document_sub_type,a.model.parent=(R=(U=a.model)==null?void 0:U.__parent)==null?void 0:R.id,!((X=(H=a==null?void 0:a.model)==null?void 0:H.__user)!=null&&X.passport_seria||(W=(P=a==null?void 0:a.model)==null?void 0:P.__user)!=null&&W.passport_number||(ke=(F=a==null?void 0:a.model)==null?void 0:F.__user)!=null&&ke.passport_issue_date||(Ze=(fe=a==null?void 0:a.model)==null?void 0:fe.__user)!=null&&Ze.passport_issued_by)){A(null,`${(_t=(et=a.model)==null?void 0:et.__user)==null?void 0:_t.full_name}: ${m("passport-details-error")}`,B.WARNING);return}p.value=!0}},N=()=>{},I=async()=>{const d=await a.actionCreateDocument(a.model);await r.actionCountList(),d?(p.value=!1,A(null,m("document-sent"),B.SUCCESS),await l.replace({name:Be,query:{document_type:ae.POWER_OF_ATTORNEY}})):A(null,m("error-occurred"),B.ERROR)},$=async()=>{await a.actionUpdateDocument({id:t.params.id,body:a.model}),await r.actionCountList(),A(null,m("changed"),B.SUCCESS),await l.replace({name:Re,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},_=()=>{s.formType===z?I():$()},b=d=>{a.model.__files=[],d.forEach(f=>{a.model.__files.push(f)})},i=async d=>{const{data:f}=await Vt({user:d.id,document_sub_type:t.params.document_sub_type,status:5});T.value=f.results};return We(async()=>{if(t.params.id){const d=await a.actionGetDocumentDetailForUpdate(t.params.id);d.parent&&(T.value=[d.parent])}}),Ue(()=>{Fe(a.model)}),(d,f)=>{const g=ve,V=_e,D=Oe,O=Je,v=me;return e(a).detailLoading?(w(),G(g,{key:0})):(w(),C(J,{key:1},[o(e(Ve),{title:M.value},{content:c(()=>[o(Ae,{"onEmit:preview":L,"onEmit:clearForm":N},{default:c(()=>[o(v,null,{default:c(()=>[o(V,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":f[0]||(f[0]=q=>e(n).__curator.$model=q),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(V,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(n).__user.$model,"onUpdate:modelValue":f[1]||(f[1]=q=>e(n).__user.$model=q),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":f[2]||(f[2]=q=>i(q))},null,8,["modelValue","error"])]),_:1}),o(V,{"col-class":"w-full"},{default:c(()=>[y("div",{class:Ne(["border-[1.5px] rounded-2xl px-5 py-4",x.value&&!e(a).model.content?"border-critic-500":"border-greyscale-200"])},[o($e,{modelValue:e(n).content.$model,"onUpdate:modelValue":f[3]||(f[3]=q=>e(n).content.$model=q),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":b},null,8,["modelValue","error","files"]),o(e(ko),{"onEmit:selected":f[4]||(f[4]=q=>e(a).model.content=q)})],2)]),_:1}),o(V,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":f[5]||(f[5]=q=>e(a).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(V,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":f[6]||(f[6]=q=>e(n).__signers.$model=q),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(V,{"col-class":"w-1/2"},{default:c(()=>[o(D,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":f[7]||(f[7]=q=>e(n).short_description.$model=q),error:e(n).short_description,required:"",label:"basis",placeholder:"enter-basis"},null,8,["modelValue","error"])]),_:1}),o(V,{"col-class":"w-1/2"},{default:c(()=>[o(O,{modelValue:e(a).model.__parent,"onUpdate:modelValue":f[8]||(f[8]=q=>e(a).model.__parent=q),options:T.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:p.value,"onUpdate:modelValue":f[9]||(f[9]=q=>p.value=q),"send-button-loading":e(a).buttonLoading,"onEmit:send":_},{content:c(()=>[o(xt,{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{da as _,pa as a,ma as b,_a as c,ga as d,qa as e,ba as f,ha as g,ca as h,ua as i,fa as j};
