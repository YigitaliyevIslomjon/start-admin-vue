import{_ as me}from"./BaseRow.b14c8ed7.8678.js";import{_ as Oe}from"./BaseInput.c20f42db.8678.js";import{_ as _e}from"./BaseCol.ecf32354.8678.js";import{v as Z,b9 as at,a1 as lt,o as h,c as C,i as t,z as u,h as e,b6 as ot,d as ee,dw as Ge,a as y,t as j,F as J,e as de,a3 as re,g as oe,f as W,B as Nt,dB as Mt,bh as It,n as Ne,r as wt,G as Pe,as as Ee,cL as ae,cM as H,cg as se,u as ne,b as ue,ao as pe,bc as Ue,a5 as A,ac as ve,a8 as Ot,cW as We,dC as Pt,_ as ge,dD as Bt,dE as At,dF as Ft,dG as jt,dH as zt,$ as Gt,dI as Wt,dJ as Yt,aV as vt,br as He,bY as Xe,dK as Ht,du as it,E as Xt,cG as Kt,cP as Qt,aE as Jt}from"./index.4eda51c6.7821.js";import{c as E,r as S,u as le}from"./index.b96ff6d8.8678.js";import{_ as Zt,a as eo}from"./BranchMultiSelect.c75532e0.8678.js";import{j as to,k as oo,l as lo,_ as Ve,a as no,h as ro,g as ao,b as so,c as io,d as co,e as kt,i as xt,m as uo,f as po}from"./BasePOA.599ce359.8678.js";import"./BaseTabMenu.e035766e.8678.js";import"./dialog.esm.c2ddfc07.8678.js";import"./tabpanel.esm.15811c96.8678.js";import"./FileSaver.min.2c55bace.8678.js";import{j as mo,u as ie,a3 as ft,N as Se,s as Me,a1 as Q,a5 as _o,a6 as je,a7 as te,d as F,a8 as Ie,a9 as gt,aa as dt,ab as ze,W as rt}from"./axios.config.44922c21.8678.js";import"./BaseTabView.d9b5b72a.8678.js";import"./FileTabs.d6d91ad0.8678.js";import{_ as K}from"./UserMultiSelect.d2f8081c.8678.js";import{u as be}from"./common.9778b719.8678.js";import{u as ce}from"./count.store.fcbc1276.8678.js";import{u as ut,e as qt,g as Ce,h as ye,i as Te,j as Be,c as Re,k as Vt,l as xe,B as tt,m as Ke,n as Qe,o as fo,p as $t,M as ct,O as go,f as Et,T as qo,q as pt,r as Ut,C as bo,P as yo,s as ho}from"./index.store.f2082729.8678.js";import{F as G,a as De}from"./constants.50c90617.8678.js";import{_ as Je}from"./BaseDropdown.c3ba6bf5.8678.js";import{_ as Ye}from"./BaseCalendar.d0d630c8.8678.js";import{_ as st}from"./BaseMultiSelect.e7e23105.8678.js";import{f as wo,a as he}from"./formatDate.98f59cb4.8678.js";import{Q as bt}from"./qrcode.vue.esm.1f8efd9d.8678.js";import"./divider.esm.65b4b9e7.8678.js";import"./dayjs.min.212098f7.8678.js";/* empty css                                                                                         */import{c as vo}from"./Dropdown.8f19e814.8678.js";import"./menu.esm.eeeaa367.8678.js";/* empty css                                                      */import"./avatar.esm.7232ce53.8678.js";/* empty css                                                      */import"./businessTrip.store.5da7148e.8678.js";/* empty css                                                            */import"./accordiontab.esm.3c934a3c.8678.js";import"./common.store.c4af1597.8678.js";import{_ as qe}from"./WithRadio.0eedba08.8678.js";import"./radiobutton.esm.0be61947.8678.js";import"./checkbox.esm.b852ccfd.8678.js";import{_ as St,a as ko}from"./ShortDescription.49859e0e.8678.js";import{_ as yt}from"./BaseBrickRadio.b847700c.8678.js";import{_ as xo}from"./BaseLabel.6c98afb8.8678.js";import{K as Vo}from"./main.c0a57980.8678.js";import{a as $o}from"./index.417f21b4.8678.js";import"./BaseCalendar.vue_vue_type_style_index_0_lang.28e542d6.8678.js";import"./multiselect.esm.59cbea96.8678.js";/* empty css                                                             */import"./dropdown.esm.ba9675e7.8678.js";/* empty css                                                          */import"./textarea.esm.d9eaaa30.8678.js";import"./overlaypanel.esm.b3490cd1.8678.js";/* empty css                                                              */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang.d2ae5af5.8678.js";/* empty css                                                                            */import"./review.store.99ebe5fa.8678.js";/* empty css                                                       */import{_ as Ct}from"./BaseDialog.06a65e20.8678.js";import{_ as Eo}from"./WithSelectable.8e809687.8678.js";import{_ as Uo}from"./BaseBrickTab.fc28d168.8678.js";import{_ as So}from"./BaseFileUpload.80be448e.8678.js";import{_ as Co}from"./BaseFroalaEditor.a90d0e32.8678.js";const To={class:"user-select"},we={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(m,{emit:n}){const r=m,o=Z([]),s=at(r,"modelValue"),d=n,a=async _=>{let{data:l}=await mo.get(`${r.apiUrl}/`,_);l.hasOwnProperty("results")?o.value=l.results:o.value=l};return lt(async()=>{await a(r.apiParams)}),(_,l)=>(h(),C("div",To,[t(Je,{modelValue:e(s),"onUpdate:modelValue":l[0]||(l[0]=p=>ot(s)?s.value=p:null),options:o.value,"onUpdate:options":l[1]||(l[1]=p=>o.value=p),error:r.error,"api-url":r.apiUrl,"api-params":r.apiParams,"option-label":"full_name",label:r.label,placeholder:r.placeholder,required:r.required,searchable:"","onEmit:change":l[2]||(l[2]=p=>d("emit:change",p))},{option:u(({option:p})=>[t(e(Eo),{items:[p]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},Ro={class:"business-trip-decree-template-view letter-template"},Lo={class:"flex flex-col text-sm font-medium mt-4"},Do=["innerHTML"],No=["innerHTML"],Mo={class:"employees-table text-sm mt-4"},Io={class:"w-full"},Oo={class:"text-center"},Po={class:"border-2 p-1"},Bo={class:"border-2 p-1"},Ao={class:"border-2 p-1"},Fo={class:"border-2 p-1"},jo={class:"flex flex-col gap-y-1"},zo={key:0},Go={class:"border-2 p-1 w-[100px]"},Wo={class:"indent-8 mt-2 text-sm text-justify"},Yo={key:0},Ho={class:"mt-6 pb-2 px-4"},Xo={class:"text-sm font-semibold block"},Ko={class:"text-sm font-semibold block"},Qo={class:"text-sm font-semibold block"},Jo={class:"text-sm font-semibold block"},Zo={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(m){const n=m,r=ut(),o=ee(()=>{var _;return n.preview?ie().currentUser:(_=n.composeModel)==null?void 0:_.author}),s=ee(()=>{var _,l,p;return n.preview?(_=n.composeModel)==null?void 0:_.__employees.map(x=>({empFullName:x.full_name,empDepName:x.top_level_department.name,empPositionName:x.position.name,destinations:n.composeModel.__companies,startDate:n.composeModel.start_date,endDate:n.composeModel.end_date})):(p=(l=n.composeModel)==null?void 0:l.notices)==null?void 0:p.map(x=>({empFullName:x.user.full_name,empDepName:x.user.top_level_department.name,empPositionName:x.user.position.name,destinations:x.destinations,startDate:x.start_date,endDate:x.end_date}))}),d=ee(()=>{var l,p,x;if(n.preview)return[(l=n.composeModel)==null?void 0:l.__curator];const _=(p=n.composeModel)==null?void 0:p.signers.find(T=>T.type===Ge.BASIC_SIGNER);return _?[_]:[(x=n.composeModel)==null?void 0:x.curator].filter(Boolean)}),a=ee(()=>{var _,l;return n.preview?(_=n.composeModel)==null?void 0:_.__signers:(l=n.composeModel)==null?void 0:l.signers.filter(p=>p.type===Ge.SIGNER)});return(_,l)=>{var T,I,L,M,O,$,q,k;const p=_e,x=me;return h(),C("div",Ro,[t(e(to)),t(e(oo),{"dep-name":(I=(T=o.value)==null?void 0:T.top_level_department)==null?void 0:I.name},null,8,["dep-name"]),y("div",Lo,[y("span",null," № "+j((L=n.composeModel)==null?void 0:L.register_number),1),y("span",null,j(((M=n.composeModel)==null?void 0:M.register_date)&&e(wo)((O=n.composeModel)==null?void 0:O.register_date)),1)]),l[11]||(l[11]=y("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1)),e(r).historyShow?(h(),C("div",{key:0,class:"text-justify",innerHTML:e(r).historyContent},null,8,Do)):(h(),C("div",{key:1,class:"text-justify",innerHTML:($=n.composeModel)==null?void 0:$.content},null,8,No)),y("div",Mo,[y("table",Io,[l[2]||(l[2]=y("tr",{class:"text-center"},[y("td",{class:"border-2 p-1"},"№"),y("td",{class:"border-2 p-1"},"F.I.SH"),y("td",{class:"border-2 p-1"},"Departament va lavozim"),y("td",{class:"border-2 p-1"},"Yo'nalish"),y("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1)),s.value&&s.value.length?(h(!0),C(J,{key:0},de(s.value,(i,c)=>(h(),C("tr",Oo,[y("td",Po,j(c+1),1),y("td",Bo,j(i.empFullName),1),y("td",Ao,[re(j(i.empDepName)+" ",1),l[0]||(l[0]=y("br",null,null,-1)),re(" "+j(i.empPositionName),1)]),y("td",Fo,[y("div",jo,[(h(!0),C(J,null,de(i.destinations,(g,f)=>(h(),C("span",null,[re(j(g.name)+" ",1),f!==i.destinations.length-1?(h(),C("span",zo,",")):oe("",!0)]))),256))])]),y("td",Go,[re(j(i.startDate)+" ",1),l[1]||(l[1]=y("br",null,null,-1)),re(" "+j(i.endDate),1)])]))),256)):oe("",!0)])]),y("div",Wo,[l[4]||(l[4]=y("div",null,"xizmat safariga yuborilsin.",-1)),l[5]||(l[5]=y("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1)),l[6]||(l[6]=y("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1)),l[7]||(l[7]=y("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1)),(q=m.composeModel)!=null&&q.trip_notice_register_number?(h(),C("div",Yo,[l[3]||(l[3]=y("span",{class:"font-semibold"},"Asos: ",-1)),re(j((k=m.composeModel)==null?void 0:k.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):oe("",!0),l[8]||(l[8]=y("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1)),l[9]||(l[9]=y("div",null," O‘zR MKning 287-moddasi; ",-1)),l[10]||(l[10]=y("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1))]),y("div",Ho,[(h(!0),C(J,null,de(d.value,i=>(h(),W(x,{key:i.id,class:"mb-2 items-center"},{default:u(()=>[t(p,{"col-class":"w-1/3"},{default:u(()=>[y("span",Xo,j(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),t(p,{"col-class":"w-1/3"},{default:u(()=>[i.is_signed?(h(),W(bt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):oe("",!0)]),_:2},1024),t(p,{"col-class":"w-1/3"},{default:u(()=>[y("span",Ko,j(e(ft)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(h(!0),C(J,null,de(a.value,i=>(h(),W(x,{key:i.id,class:"mb-2 items-center"},{default:u(()=>[t(p,{"col-class":"w-1/3"},{default:u(()=>[y("span",Qo,j(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),t(p,{"col-class":"w-1/3"},{default:u(()=>[i.is_signed?(h(),W(bt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):oe("",!0)]),_:2},1024),t(p,{"col-class":"w-1/3"},{default:u(()=>[y("span",Jo,j(e(ft)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),t(e(lo),{"compose-model":n.composeModel,author:o.value},null,8,["compose-model","author"])])}}};var el=`
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
`,tl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Nt.extend({name:"editor",css:el,classes:tl});(function(){try{return window.Quill}catch{return null}})();const $e={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(m){return["froala","tiny"].includes(m)}}},emits:["update:modelValue","emit:fileUpload"],setup(m,{emit:n}){const r=m,o=at(r,"modelValue"),s=n,d=Z([{title:"text",slot:"editor",icon:Mt},{title:"file",slot:"file",icon:It}]);return(a,_)=>(h(),W(Uo,{"tab-panel-list":d.value,"panel-container-class":"px-0"},{editor:u(()=>[m.editor==="froala"?(h(),W(Co,{key:0,modelValue:e(o),"onUpdate:modelValue":_[0]||(_[0]=l=>ot(o)?o.value=l:null)},null,8,["modelValue"])):(h(),W(vo,{key:1,modelValue:e(o),"onUpdate:modelValue":_[1]||(_[1]=l=>ot(o)?o.value=l:null)},null,8,["modelValue"]))]),file:u(()=>[y("div",{class:Ne(r.fileUploadContainerClasses)},[t(So,{files:r.files,"onEmit:fileUpload":_[2]||(_[2]=l=>s("emit:fileUpload",l))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ol={class:"flex flex-col justify-between h-full"},ll={class:"px-6 py-4 overflow-y-auto"},nl={class:"actions p-6"},Ae={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(m,{emit:n}){const r=n;return(o,s)=>{const d=Pe;return h(),C("div",ol,[y("div",ll,[wt(o.$slots,"default")]),y("div",nl,[t(d,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:s[0]||(s[0]=a=>r("emit:clearForm"))}),t(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:s[1]||(s[1]=a=>r("emit:preview"))})])])}}},rl=Ee("sd-stores-inner",{state:()=>{var m,n;return{buttonLoading:!1,detailLoading:!1,model:{company:(n=(m=ie().currentUser)==null?void 0:m.company)==null?void 0:n.id,content:null,document_type:ae.INNER,document_sub_type:H.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:se.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:E.withMessage("Поле не должен быть пустым",S)},content:{required:E.withMessage("Поле не должен быть пустым",S)},__departments:{required:E.withMessage("Поле не должен быть пустым",S)},__approvers:{},__signers:{required:E.withMessage("Поле не должен быть пустым",S)}}}},actions:{async actionCreateDocument(m){let n={...m,type:qt,sub_type:qt};this.buttonLoading=!0;const{response:r,error:o}=await Se(Te,n);return r?(this.buttonLoading=!1,Promise.resolve(r)):Promise.reject(o)},async actionUpdateDocument({id:m,body:n}){try{this.buttonLoading=!0;const{data:r}=await Ce({id:m,body:n});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(m){try{this.detailLoading=!0;const{data:n}=await ye(m);Me(this.model,n),this.model.__approvers=await Q(n.approvers),this.model.__signers=await Q(n.signers),this.model.__departments=await _o(n.receiver.departments),this.model.__files=n.files}catch{}finally{this.detailLoading=!1}}}}),al={class:"font-semibold text-xl"},Le={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(m,{emit:n}){const o=at(m,"modelValue"),{t:s}=ne(),d=n;return(a,_)=>{const l=Pe,p=Ct;return h(),W(p,{modelValue:e(o),"onUpdate:modelValue":_[1]||(_[1]=x=>ot(o)?o.value=x:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:u(()=>[y("span",al,j(e(s)("preview")),1)]),content:u(()=>[wt(a.$slots,"content")]),footer:u(()=>[t(l,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(l,{label:m.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:m.sendButtonLoading,onClick:_[0]||(_[0]=x=>d("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},Xr={__name:"InnerForm",props:{formType:{type:String,default:G}},setup(m){const n=m,r=ie(),o=rl();be();const s=ce(),d=Z(!1);Z(null);const{t:a}=ne(),_=ue(),l=pe(),p=le(o.rules,o.model),x=async()=>{await p.value.$validate()&&(d.value=!0,o.model.approvers=[],o.model.signers=[],o.model.departments=[],o.model.departments=o.model.__departments.map(q=>q.id),o.model.files=[],o.model.files=o.model.__files.map(q=>({id:q.id})),o.model.journal=se.INNER,o.model.sender=r.currentUser.top_level_department.id,o.model.approvers=te(o.model.__approvers),o.model.signers=te(o.model.__signers),o.model.document_type=l.params.document_type,o.model.document_sub_type=l.params.document_sub_type,o.model.receiver&&delete o.model.receiver)},T=()=>{n.formType===G?I():L()},I=async()=>{const $=await o.actionCreateDocument(o.model);await s.actionCountList(),$?(d.value=!1,F(null,a("document-sent"),A.SUCCESS),await _.replace({name:Be,query:{document_type:ae.INNER}})):F(null,a("error-occurred"),A.ERROR)},L=async()=>{await o.actionUpdateDocument({id:l.params.id,body:o.model}),await s.actionCountList(),F(null,a("document-sent"),A.SUCCESS),await _.replace({name:Re,params:{id:l.params.id,document_type:ae.INNER,document_sub_type:H.SERVICE_LETTER}})},M=()=>{console.log("Clear Form")},O=$=>{o.model.__files=[],$.forEach(q=>{o.model.__files.push(q)})};return lt(async()=>{l.params.id&&await o.actionGetDocumentDetailForUpdate(l.params.id)}),Ue(()=>{je(o.model)}),($,q)=>{const k=ve,i=_e,c=Oe,g=me;return e(o).detailLoading?(h(),W(k,{key:0})):(h(),C(J,{key:1},[t(e(Ve),{title:n.formType===e(G)?"create-sd-inner":"update-sd-inner"},{content:u(()=>[t(Ae,{"onEmit:preview":x,"onEmit:clearForm":M},{default:u(()=>[t(g,null,{default:u(()=>[t(i,{"col-class":"w-1/2"},{default:u(()=>[t(Zt,{modelValue:e(p).__departments.$model,"onUpdate:modelValue":q[0]||(q[0]=f=>e(p).__departments.$model=f),error:e(p).__departments},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:u(()=>[t(c,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":q[1]||(q[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":q[2]||(q[2]=f=>e(p).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":q[3]||(q[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-full"},{default:u(()=>[t($e,{modelValue:e(p).content.$model,"onUpdate:modelValue":q[4]||(q[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Le,{modelValue:d.value,"onUpdate:modelValue":q[5]||(q[5]=f=>d.value=f),"send-button-loading":e(o).buttonLoading,"onEmit:send":T},{content:u(()=>{var f,w;return[t(no,{"compose-model":{...e(o).model,signers:e(o).model.__signers,approvers:e(o).model.__approvers,author:e(o).model.__signers[0],sender:{name:(w=(f=e(r).currentUser)==null?void 0:f.top_level_department)==null?void 0:w.name},receiver:{departments:e(o).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},sl=Ee("sd-stores-application",{state:()=>{var m,n;return{buttonLoading:!1,detailLoading:!1,model:{company:(n=(m=ie().currentUser)==null?void 0:m.company)==null?void 0:n.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{}}}},actions:{async actionCreateDocument(m){let n={...m};this.buttonLoading=!0;const{response:r,error:o}=await Se(Te,n);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:m,body:n}){try{this.buttonLoading=!0;const{data:r}=await Ce({id:m,body:n});return Promise.resolve(r)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(m){try{this.detailLoading=!0;const{data:n}=await ye(m);Me(this.model,n),this.model.__approvers=await Q(n.approvers),this.model.__signers=await Q(n.signers.filter(r=>r.type===Ge.SIGNER)),this.model.__curator=await Ie([],n.curator.id,!1),this.model.__files=n.files}catch{}finally{this.detailLoading=!1}}}}),Tt=Ee("order-stores",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:ie().currentUser.company.id,curator:null,document_type:ae.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:se.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:E.withMessage("Поле не должен быть пустым",S)},register_date:{required:E.withMessage("Поле не должен быть пустым",S)},content:{required:E.withMessage("Поле не должен быть пустым",S)},__negotiators:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(m){this.buttonLoading=!0;const{response:n,error:r}=await Se(Te,m);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:m,body:n}){try{this.buttonLoading=!0;const{data:r}=await Ce({id:m,body:n});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(m){try{this.detailLoading=!0;const{data:n}=await ye(m);Me(this.model,n),this.model.__signers=await Q(n.signers.filter(r=>r.type!==Ge.NEGOTIATOR)),this.model.__negotiators=await Q(n.signers.filter(r=>r.type===Ge.NEGOTIATOR)),this.model.__approvers=await Q(n.approvers),this.model.__curator=await Ie([],n.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),Kr={__name:"ApplicationForm",props:{formType:{type:String,default:G}},setup(m){const n=m,r=ie(),o=sl();be();const s=ce();Tt();const d=Z(!1);Z(null);const{t:a}=ne(),_=ue(),l=pe(),p=le(o.rules,o.model),x=ee(()=>l.params.document_sub_type===H.EXPLANATION_LETTER?n.formType===G?"create-explanation-letter":"update-explanation-letter":n.formType===G?"create-sd-application":"update-sd-application"),T=async()=>{var k,i,c,g,f;await p.value.$validate()&&(d.value=!0,o.model.approvers=[],o.model.signers=[],o.model.signers=[{user:(k=r==null?void 0:r.currentUser)==null?void 0:k.id}],o.model.sender=(c=(i=r==null?void 0:r.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,o.model.curator=(f=(g=o==null?void 0:o.model)==null?void 0:g.__curator)==null?void 0:f.user_id,o.model.journal=se.APPLICATION,o.model.document_type=l.params.document_type,o.model.document_sub_type=l.params.document_sub_type,o.model.approvers=te(o.model.__approvers))},I=async()=>{},L=()=>{n.formType===G?M():O()},M=async()=>{const q=await o.actionCreateDocument(o.model);await s.actionCountList(),q?(d.value=!1,F(null,a("document-sent"),A.SUCCESS),await _.replace({name:Be,query:{document_type:ae.APPLICATION}})):F(null,a("error-occurred"),A.ERROR)},O=async()=>{await o.actionUpdateDocument({id:l.params.id,body:o.model}),await s.actionCountList(),F(null,a("document-sent"),A.SUCCESS),await _.replace({name:Re,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},$=q=>{o.model.__files=[],q.forEach(k=>{o.model.__files.push(k)})};return lt(async()=>{l.params.id&&await o.actionGetDocumentDetailForUpdate(l.params.id)}),Ue(()=>{je(o.model)}),(q,k)=>{const i=ve,c=_e,g=me;return e(o).detailLoading?(h(),W(i,{key:0})):(h(),C(J,{key:1},[t(e(Ve),{title:x.value},{content:u(()=>[t(Ae,{"onEmit:preview":T,"onEmit:clearForm":I},{default:u(()=>[t(g,null,{default:u(()=>[t(c,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":k[0]||(k[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(c,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":k[1]||(k[1]=f=>e(o).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(c,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":k[2]||(k[2]=f=>e(p).__signers.$model=f),disabled:"",label:"signers",placeholder:e(r).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(c,{"col-class":"w-full"},{default:u(()=>[t($e,{modelValue:e(p).content.$model,"onUpdate:modelValue":k[3]||(k[3]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":$},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Le,{modelValue:d.value,"onUpdate:modelValue":k[4]||(k[4]=f=>d.value=f),"send-button-loading":e(o).buttonLoading,"onEmit:send":L},{content:u(()=>[t(ro,{"compose-model":{...e(o).model,curator:e(o).model.__curator,author:n.formType===e(G)?e(r).currentUser:e(o).model.__signers[0].user,signers:n.formType===e(G)?[e(r).currentUser]:e(o).model.__signers},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},il=Ee("sd-notice-stores",{state:()=>(ie(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:ae.NOTICE,document_sub_type:H.BUSINESS_TRIP,journal:se.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:E.withMessage("Поле не должен быть пустым",S)},start_date:{required:E.withMessage("Поле не должен быть пустым",S)},route:{required:E.withMessage("Поле не должен быть пустым",S)},content:{required:E.withMessage("Поле не должен быть пустым",S)},__companies:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__employees:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},__tags:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(m){this.buttonLoading=!0;const{response:n,error:r}=await Se(Te,m);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:m,body:n}){try{this.buttonLoading=!0;const{data:r}=await Ce({id:m,body:n});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(m,n=!1){try{this.detailLoading=!0;const{data:r}=await ye(m);Me(this.model,r),this.model.__companies=[],this.model.__curator=await Ie([],r.curator.id,!1),this.model.__employees=await Q(r.notices),n?(this.model.__approvers=await Q(r.approvers.filter(o=>{var s,d;return((s=o==null?void 0:o.user)==null?void 0:s.id)!==((d=r==null?void 0:r.curator)==null?void 0:d.assistant)})),this.model.register_number=null):this.model.__approvers=await Q(r.approvers),this.model.__signers=await Q(r.signers),this.model.__companies=await gt(r.notices[0].destinations),this.model.__tags=await dt(r.tags),this.model.start_date=r.notices[0].start_date,this.model.end_date=r.notices[0].end_date,this.model.__tags=r.tags,this.model.route=r.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(m,n){try{this.detailLoading=!0;const{data:r}=await ye(m),o=await ye(n);Me(this.model,r),this.model.__companies=[],this.model.__curator=await Ie([],r.curator.id,!1),this.model.__employees=await Q(o.data.notices),this.model.__approvers=await Q(r.approvers),this.model.__signers=await Q(r.signers),this.model.__companies=await gt(o.data.notices[0].destinations),this.model.__tags=await dt(r.tags),this.model.start_date=o.data.notices[0].start_date,this.model.end_date=o.data.notices[0].end_date,this.model.__tags=r.tags,this.model.route=o.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),dl={class:"flex w-full gap-x-4"},Qr={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:G}},setup(m){const n=m,{t:r}=ne(),o=pe(),s=ue(),d=ie(),a=il(),_=ce();be();const l=le(a.rules,a.model),p=Z(!1),x=ee(()=>{const i=n.formType===G,c=o.params.document_sub_type;return c===H.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":c===H.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),T=ee(()=>{var i,c;return o.params.document_sub_type===H.BUSINESS_TRIP_DECREE_LOCAL&&((i=o==null?void 0:o.query)==null?void 0:i.compose_id)&&((c=o==null?void 0:o.query)==null?void 0:c.document_sub_type)===H.BUSINESS_TRIP}),I=ee(()=>{var i;return!!(o.params.document_sub_type===H.BUSINESS_TRIP_DECREE_LOCAL&&((i=a==null?void 0:a.model)!=null&&i.trip_notice_id))});Ot(()=>a.model.__tags,i=>{if(n.formType===G)if(i&&i.length){let c=`${i.map(g=>g.name_uz).join(", ")} yuzasidan`;a.model.short_description=c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()}else a.model.short_description=null});const L=async()=>{var c,g,f,w,D;await l.value.$validate()&&(a.model.approvers=[],a.model.signers=[],a.model.notices=[],a.model.approvers=te(a.model.__approvers),a.model.signers=te(a.model.__signers),a.model.curator=(g=(c=a==null?void 0:a.model)==null?void 0:c.__curator)==null?void 0:g.user_id,a.model.journal=o.params.document_type===ae.DECREE||o.params.document_type===ae.ORDER?se.ORDERS_PROTOCOLS:se.INNER,a.model.company=d.currentUser.company.id,a.model.notices=a.model.__employees.map(P=>({start_date:a.model.start_date,end_date:a.model.end_date,user:P.id,route:a.model.route,companies:a.model.__companies.map(U=>U.id)})),a.model.sender=(w=(f=d==null?void 0:d.currentUser)==null?void 0:f.top_level_department)==null?void 0:w.id,a.model.tags=a.model.__tags.map(P=>({id:P.id})),a.model.files=a.model.__files.map(P=>({id:P.id})),a.model.document_type=o.params.document_type,a.model.document_sub_type=o.params.document_sub_type,T.value&&(a.model.trip_notice_id=(D=o==null?void 0:o.query)==null?void 0:D.compose_id),p.value=!0)},M=()=>{},O=i=>{a.model.__files=[],i.forEach(c=>{a.model.__files.push(c)})},$=async()=>{T.value&&(a.model.notices=[]);const i=await a.actionCreateDocument(a.model);await _.actionCountList(),i?(p.value=!1,F(null,r("document-sent"),A.SUCCESS),await s.replace({name:Be,query:{document_type:o.params.document_sub_type===H.BUSINESS_TRIP_DECREE_LOCAL?ae.DECREE:o.params.document_sub_type===H.BUSINESS_TRIP_ORDER_LOCAL?ae.ORDER:ae.NOTICE}})):F(null,r("error-occurred"),A.ERROR)},q=async()=>{(T.value||I.value)&&(a.model.notices=[]),await a.actionUpdateDocument({id:o.params.id,body:a.model}),await _.actionCountList(),F(null,r("changed"),A.SUCCESS),await s.replace({name:Re,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},k=()=>{n.formType===G?$():q()};return We(async()=>{o.params.id&&o.query.trip_notice_id&&o.params.document_sub_type===H.BUSINESS_TRIP_DECREE_LOCAL?await a.actionGetDocumentDetailForUpdateForCustomUse(o.params.id,o.query.trip_notice_id):o.params.id?await a.actionGetDocumentDetailForUpdate(o.params.id):T.value&&await a.actionGetDocumentDetailForUpdate(o.query.compose_id,!0)}),Ue(()=>{je(a.model)}),(i,c)=>{const g=ve,f=_e,w=Ye,D=Je,P=Oe,U=me;return e(a).detailLoading?(h(),W(g,{key:0})):(h(),C(J,{key:1},[t(e(Ve),{title:x.value},{content:u(()=>[t(Ae,{"onEmit:preview":L,"onEmit:clearForm":M},{default:u(()=>[t(U,null,{default:u(()=>[t(f,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(l).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=b=>e(l).__curator.$model=b),error:e(l).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(l).__employees.$model,"onUpdate:modelValue":c[1]||(c[1]=b=>e(l).__employees.$model=b),error:e(l).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:T.value||I.value},null,8,["modelValue","error","disabled"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(eo,{modelValue:e(l).__companies.$model,"onUpdate:modelValue":c[2]||(c[2]=b=>e(l).__companies.$model=b),error:e(l).__companies,"text-truncate":"",disabled:T.value||I.value},null,8,["modelValue","error","disabled"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(st,{modelValue:e(l).__tags.$model,"onUpdate:modelValue":c[3]||(c[3]=b=>e(l).__tags.$model=b),error:e(l).__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:u(({value:b})=>[re(j(b.name),1)]),option:u(({value:b})=>[t(e(qe),{title:b.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[y("div",dl,[t(w,{modelValue:e(l).start_date.$model,"onUpdate:modelValue":[c[4]||(c[4]=b=>e(l).start_date.$model=b),c[5]||(c[5]=b=>e(l).start_date.$model=e(he)(b))],error:e(l).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:T.value||I.value},null,8,["modelValue","error","min-date","disabled"]),t(w,{modelValue:e(l).end_date.$model,"onUpdate:modelValue":[c[6]||(c[6]=b=>e(l).end_date.$model=b),c[7]||(c[7]=b=>e(l).end_date.$model=e(he)(b))],error:e(l).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:T.value||I.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(D,{modelValue:e(l).route.$model,"onUpdate:modelValue":c[8]||(c[8]=b=>e(l).route.$model=b),error:e(l).route,options:e(Pt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:T.value||I.value},null,8,["modelValue","error","options","disabled"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":c[9]||(c[9]=b=>e(a).model.__approvers=b),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(l).__signers.$model,"onUpdate:modelValue":c[10]||(c[10]=b=>e(l).__signers.$model=b),error:e(l).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(P,{modelValue:e(l).short_description.$model,"onUpdate:modelValue":c[11]||(c[11]=b=>e(l).short_description.$model=b),error:e(l).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(f,{"col-class":"w-full"},{default:u(()=>[t($e,{modelValue:e(l).content.$model,"onUpdate:modelValue":c[12]||(c[12]=b=>e(l).content.$model=b),error:e(l).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Le,{modelValue:p.value,"onUpdate:modelValue":c[13]||(c[13]=b=>p.value=b),"send-button-loading":e(a).buttonLoading,"onEmit:send":k},{content:u(()=>[e(o).params.document_sub_type===e(H).BUSINESS_TRIP_DECREE_LOCAL?(h(),W(e(Zo),{key:0,"compose-model":e(a).model,preview:!0},null,8,["compose-model"])):e(o).params.document_sub_type===e(H).BUSINESS_TRIP_ORDER_LOCAL?(h(),W(e(ao),{key:1,"compose-model":e(a).model,preview:!0},null,8,["compose-model"])):(h(),W(e(so),{key:2,"compose-model":e(a).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},Jr={__name:"OrderForm",props:{formType:{type:String,default:G}},setup(m){const n=m,r=Tt(),o=ce(),s=ie(),d=pe(),a=ue(),_=le(r.rules,r.model),{t:l}=ne(),p=Z(!1),x=async()=>{var q,k,i,c;await _.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=te(r.model.__approvers),r.model.curator=(k=(q=r==null?void 0:r.model)==null?void 0:q.__curator)==null?void 0:k.user_id,r.model.sender=(c=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,r.model.files=r.model.__files.map(g=>({id:g.id})),r.model.document_type=d.params.document_type,r.model.document_sub_type=d.params.document_sub_type,r.model.journal=se.ORDERS_PROTOCOLS,r.model.register_date=he(r.model.register_date),r.model.__negotiators.forEach(g=>{r.model.signers.push(g.hasOwnProperty("user")?{id:g.id,user:g.user.id,type:Ge.NEGOTIATOR}:{user:g.id,type:Ge.NEGOTIATOR})}),d.query.compose_id&&(r.model.trip_notice_id=d.query.compose_id),p.value=!0)},T=()=>{},I=async()=>{try{const $=await r.actionCreateDocument(r.model);await o.actionCountList(),$&&(p.value=!1,F(null,l("document-sent"),A.SUCCESS),await a.replace({name:Be,query:{document_type:ae.ORDER}}))}catch{F(null,l("error-occurred"),A.ERROR)}},L=async()=>{try{const $=await r.actionUpdateDocument({id:d.params.id,body:r.model});await o.actionCountList(),F(null,l("changed"),A.SUCCESS),await a.replace({name:Re,params:{id:d.params.id,document_type:d.params.document_type,document_sub_type:d.params.document_sub_type}})}catch{F(null,l("error-occurred"),A.ERROR)}},M=()=>{n.formType===G?I():L()},O=$=>{r.model.__files=[],$.forEach(q=>{r.model.__files.push(q)})};return lt(async()=>{d.params.id&&await r.actionGetDocumentDetailForUpdate(d.params.id)}),Ue(()=>{je(r.model)}),($,q)=>{const k=ve,i=_e,c=Oe,g=Ye,f=me;return e(r).detailLoading?(h(),W(k,{key:0})):(h(),C(J,{key:1},[t(e(Ve),{title:n.formType===e(G)?"create-order":"update-order"},{content:u(()=>[t(Ae,{"onEmit:preview":x,"onEmit:clearForm":T},{default:u(()=>[t(f,null,{default:u(()=>[t(i,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":q[0]||(q[0]=w=>e(_).__curator.$model=w),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(d).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:u(()=>[t(c,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":q[1]||(q[1]=w=>e(_).register_number.$model=w),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:u(()=>[t(g,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":q[2]||(q[2]=w=>e(_).register_date.$model=w),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":q[3]||(q[3]=w=>e(r).model.__approvers=w),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":q[4]||(q[4]=w=>e(_).__negotiators.$model=w),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-full"},{default:u(()=>[t($e,{modelValue:e(_).content.$model,"onUpdate:modelValue":q[5]||(q[5]=w=>e(_).content.$model=w),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Le,{modelValue:p.value,"onUpdate:modelValue":q[6]||(q[6]=w=>p.value=w),"send-button-loading":e(r).buttonLoading,"onEmit:send":M},{content:u(()=>[t(e(io),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},cl=Ee("notice-stores",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(m){this.buttonLoading=!0;const{response:n,error:r}=await Se(Te,m);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:m,body:n}){try{this.buttonLoading=!0;const{data:r}=await Ce({id:m,body:n});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(m){try{this.detailLoading=!0;const{data:n}=await ye(m);Me(this.model,n),this.model.__curator=await Ie([],n.curator.id,!1),this.model.__approvers=await Q(n.approvers),this.model.__signers=await Q(n.signers)}catch{}finally{this.detailLoading=!1}}}}),Zr={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:G}},setup(m){const n=m,{t:r}=ne(),o=pe(),s=ue(),d=ie(),a=cl(),_=ce();be();const l=Z(!1),p=le(a.rules,a.model),x=async()=>{var q,k,i,c;await p.value.$validate()&&(a.model.approvers=[],a.model.signers=[],a.model.approvers=te(a.model.__approvers),a.model.signers=te(a.model.__signers),a.model.curator=(k=(q=a==null?void 0:a.model)==null?void 0:q.__curator)==null?void 0:k.user_id,a.model.journal=se.INNER,a.model.company=d.currentUser.company.id,a.model.sender=(c=(i=d==null?void 0:d.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,a.model.files=a.model.__files.map(g=>({id:g.id})),a.model.document_type=o.params.document_type,a.model.document_sub_type=o.params.document_sub_type,l.value=!0)},T=()=>{},I=$=>{a.model.__files=[],$.forEach(q=>{a.model.__files.push(q)})},L=async()=>{const $=await a.actionCreateDocument(a.model);await _.actionCountList(),$?(l.value=!1,F(null,r("document-sent"),A.SUCCESS),await s.replace({name:Be,query:{document_type:ae.NOTICE}})):F(null,r("error-occurred"),A.ERROR)},M=async()=>{await a.actionUpdateDocument({id:o.params.id,body:a.model}),await _.actionCountList(),F(null,r("changed"),A.SUCCESS),await s.replace({name:Re,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},O=()=>{n.formType===G?L():M()};return We(async()=>{o.params.id&&await a.actionGetDocumentDetailForUpdate(o.params.id)}),Ue(()=>{je(a.model)}),($,q)=>{const k=ve,i=_e,c=Oe,g=me;return e(a).detailLoading?(h(),W(k,{key:0})):(h(),C(J,{key:1},[t(e(Ve),{title:n.formType===e(G)?"create-notice":"update-notice"},{content:u(()=>[t(Ae,{"onEmit:preview":x,"onEmit:clearForm":T},{default:u(()=>[t(g,null,{default:u(()=>[t(i,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":q[0]||(q[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:u(()=>[t(c,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":q[1]||(q[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":q[2]||(q[2]=f=>e(a).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":q[3]||(q[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-full"},{default:u(()=>[t($e,{modelValue:e(p).content.$model,"onUpdate:modelValue":q[4]||(q[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Le,{modelValue:l.value,"onUpdate:modelValue":q[5]||(q[5]=f=>l.value=f),"send-button-loading":e(a).buttonLoading,"onEmit:send":O},{content:u(()=>[t(e(co),{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ul=Ee("decree-stores",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(m){const n={...m};delete n.bookings,delete n.notices,delete n.trip_plans,this.buttonLoading=!0;const{response:r,error:o}=await Se(Te,n);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:m,body:n}){const r={...n};delete r.bookings,delete r.notices,delete r.trip_plans;try{this.buttonLoading=!0;const{data:o}=await Ce({id:m,body:r});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(m,n){try{this.detailLoading=!0;const{data:r}=await ye(m);Me(this.model,r),this.model.__curator=await Ie([],r.curator.id,!1),this.model.__approvers=await Q(r.approvers),this.model.__signers=await Q(r.signers)}catch{}finally{this.detailLoading=!1}}}}),ea={__name:"DecreeForm",props:{formType:{type:String,default:G}},setup(m){const n=m,{t:r}=ne(),o=pe(),s=ue(),d=ie(),a=ce();be();const _=Z(!1),l=ul(),p=ut(),x=le(l.rules,l.model),T=async()=>{var i,c,g,f;await x.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=te(l.model.__approvers),l.model.signers=te(l.model.__signers),l.model.curator=(c=(i=l==null?void 0:l.model)==null?void 0:i.__curator)==null?void 0:c.user_id,l.model.journal=se.ORDERS_PROTOCOLS,l.model.company=d.currentUser.company.id,l.model.sender=(f=(g=d==null?void 0:d.currentUser)==null?void 0:g.top_level_department)==null?void 0:f.id,l.model.files=l.model.__files.map(w=>({id:w.id})),l.model.document_type=o.params.document_type,l.model.document_sub_type=o.params.document_sub_type,o.query.compose_id&&(l.model.trip_notice_id=o.query.compose_id),_.value=!0)},I=()=>{},L=k=>{l.model.__files=[],k.forEach(i=>{l.model.__files.push(i)})},M=async()=>{const k=await l.actionCreateDocument(l.model);await a.actionCountList(),k?(_.value=!1,F(null,r("document-sent"),A.SUCCESS),await s.replace({name:Be,query:{document_type:o.params.document_type}})):F(null,r("error-occurred"),A.ERROR)},O=async()=>{await l.actionUpdateDocument({id:o.params.id,body:l.model}),await a.actionCountList(),F(null,r("changed"),A.SUCCESS),await s.replace({name:Re,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},$=()=>{n.formType===G?M():O()},q=async k=>{const{data:i}=await p.actionGetDocumentDetail(k);l.model.notices=i==null?void 0:i.notices,l.model.trip_plans=i==null?void 0:i.trip_plans,l.model.bookings=i==null?void 0:i.bookings,l.model.short_description=i==null?void 0:i.short_description,l.model.trip_notice_register_number=i==null?void 0:i.register_number};return We(async()=>{n.formType===G&&o.query.compose_id?await q(o.query.compose_id):n.formType===De&&o.query.trip_notice_id&&o.params.id?(await l.actionGetDocumentDetailForUpdate(o.params.id,null),await q(o.query.trip_notice_id)):n.formType===De&&o.params.id&&await l.actionGetDocumentDetailForUpdate(o.params.id,null)}),Ue(()=>{je(l.model)}),(k,i)=>{const c=ve,g=_e,f=Oe,w=me;return e(l).detailLoading?(h(),W(c,{key:0})):(h(),C(J,{key:1},[t(e(Ve),{title:n.formType===e(G)?"create-decree":"update-decree"},{content:u(()=>[t(Ae,{"onEmit:preview":T,"onEmit:clearForm":I},{default:u(()=>[t(w,null,{default:u(()=>[t(g,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(x).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=D=>e(x).__curator.$model=D),error:e(x).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(g,{"col-class":"w-1/2"},{default:u(()=>[t(f,{modelValue:e(x).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=D=>e(x).short_description.$model=D),error:e(x).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(g,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=D=>e(l).model.__approvers=D),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(g,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(x).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=D=>e(x).__signers.$model=D),error:e(x).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(g,{"col-class":"w-full"},{default:u(()=>[t($e,{modelValue:e(x).content.$model,"onUpdate:modelValue":i[4]||(i[4]=D=>e(x).content.$model=D),error:e(x).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Le,{modelValue:_.value,"onUpdate:modelValue":i[5]||(i[5]=D=>_.value=D),"send-button-loading":e(l).buttonLoading,"onEmit:send":$},{content:u(()=>[t(e(kt),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Rt=Ee("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:E.withMessage("Поле не должен быть пустым",S)},start_date:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},__user:{required:E.withMessage("Поле не должен быть пустым",S)}},secondRules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},__user:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionCreateDocument(m){this.buttonLoading=!0;const{response:n,error:r}=await Se(Te,m);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(r))},async actionGetDocumentDetailForUpdate(m){try{this.detailLoading=!0;const{data:n}=await ye(m);return Me(this.model,n),this.model.__curator=await Ie([],n.curator.id,!1),this.model.__approvers=await Q(n.approvers),this.model.__signers=await Q(n.signers),this.model.__user=await ze("users/personal-information",[],!1,n.user.id),this.model.__parent=n.parent,Promise.resolve(n)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:m,body:n}){try{this.buttonLoading=!0;const{data:r}=await Ce({id:m,body:n});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),ta={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:G}},setup(m){const n=pe(),r=ue(),o=ie(),s=Rt();ut();const d=ce(),{t:a}=ne(),_=le(s.rules,s.model),l=m,p=Z(!1),x=Z([]),T=ee(()=>l.formType===G?"create-poa":"update-poa"),I=ee(()=>s.model.start_date?new Date(s.model.start_date):new Date),L=async()=>{var c,g,f,w,D,P,U,b,v,R,V,N,X,B,Y,z,ke,fe,Ze,et;if(await _.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=te(s.model.__approvers),s.model.signers=te(s.model.__signers),s.model.curator=(g=(c=s==null?void 0:s.model)==null?void 0:c.__curator)==null?void 0:g.user_id,s.model.user=(w=(f=s==null?void 0:s.model)==null?void 0:f.__user)==null?void 0:w.id,s.model.journal=se.POWER_OF_ATTORNEY,s.model.company=(P=(D=o.currentUser)==null?void 0:D.company)==null?void 0:P.id,s.model.sender=(b=(U=o==null?void 0:o.currentUser)==null?void 0:U.top_level_department)==null?void 0:b.id,s.model.document_type=n.params.document_type,s.model.document_sub_type=n.params.document_sub_type,s.model.content=".",s.model.parent=(R=(v=s.model)==null?void 0:v.__parent)==null?void 0:R.id,!((N=(V=s==null?void 0:s.model)==null?void 0:V.__user)!=null&&N.passport_seria||(B=(X=s==null?void 0:s.model)==null?void 0:X.__user)!=null&&B.passport_number||(z=(Y=s==null?void 0:s.model)==null?void 0:Y.__user)!=null&&z.passport_issue_date||(fe=(ke=s==null?void 0:s.model)==null?void 0:ke.__user)!=null&&fe.passport_issued_by)){F(null,`${(et=(Ze=s.model)==null?void 0:Ze.__user)==null?void 0:et.full_name}: ${a("passport-details-error")}`,A.WARNING);return}p.value=!0}},M=()=>{},O=async()=>{const i=await s.actionCreateDocument(s.model);await d.actionCountList(),i?(p.value=!1,F(null,a("document-sent"),A.SUCCESS),await r.replace({name:Be,query:{document_type:ae.POWER_OF_ATTORNEY}})):F(null,a("error-occurred"),A.ERROR)},$=async()=>{await s.actionUpdateDocument({id:n.params.id,body:s.model}),await d.actionCountList(),F(null,a("changed"),A.SUCCESS),await r.replace({name:Re,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},q=()=>{l.formType===G?O():$()},k=async i=>{const{data:c}=await Vt({user:i.id,document_sub_type:n.params.document_sub_type,status:5});x.value=c.results};return We(async()=>{if(n.params.id){const i=await s.actionGetDocumentDetailForUpdate(n.params.id);i.parent&&(x.value=[i.parent])}}),Ue(()=>{je(s.model)}),(i,c)=>{const g=ve,f=_e,w=Ye,D=Je,P=me;return e(s).detailLoading?(h(),W(g,{key:0})):(h(),C(J,{key:1},[t(e(Ve),{title:T.value},{content:u(()=>[t(Ae,{"onEmit:preview":L,"onEmit:clearForm":M},{default:u(()=>[t(P,null,{default:u(()=>[t(f,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=U=>e(_).__curator.$model=U),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(_).__user.$model,"onUpdate:modelValue":c[1]||(c[1]=U=>e(_).__user.$model=U),error:e(_).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":c[2]||(c[2]=U=>k(U))},null,8,["modelValue","error"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(w,{modelValue:e(_).start_date.$model,"onUpdate:modelValue":[c[3]||(c[3]=U=>e(_).start_date.$model=U),c[4]||(c[4]=U=>e(_).start_date.$model=e(he)(U))],error:e(_).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(w,{modelValue:e(_).end_date.$model,"onUpdate:modelValue":[c[5]||(c[5]=U=>e(_).end_date.$model=U),c[6]||(c[6]=U=>e(_).end_date.$model=e(he)(U))],error:e(_).end_date,"min-date":I.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":c[7]||(c[7]=U=>e(s).model.__approvers=U),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":c[8]||(c[8]=U=>e(_).__signers.$model=U),error:e(_).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:u(()=>[t(D,{modelValue:e(s).model.__parent,"onUpdate:modelValue":c[9]||(c[9]=U=>e(s).model.__parent=U),options:x.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Le,{modelValue:p.value,"onUpdate:modelValue":c[10]||(c[10]=U=>p.value=U),"send-button-loading":e(s).buttonLoading,"onEmit:send":q},{content:u(()=>[t(xt,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},pl={class:"base-stepper-component flex items-center select-none"},ml=["onClick"],_l={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Lt={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(m,{emit:n}){const{t:r}=ne(),o=d=>{s("emit:stepClick",d)},s=n;return(d,a)=>{const _=ge;return h(),C("div",pl,[(h(!0),C(J,null,de(m.items,(l,p)=>(h(),C("div",{key:l.id,class:"flex items-center"},[y("div",{class:Ne(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",l.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:x=>o(l)},[t(_,{icon:l.icon,class:Ne(l.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),y("span",null,j(e(r)(l.label)),1)],10,ml),p<m.items.length-1?(h(),C("div",_l)):oe("",!0)]))),128))])}}},Fe=Ee("sd-business-trip-stores",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__countries:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...be().filialList],__users_to_extend:null,__regions_to_extend:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:E.withMessage("Поле не должен быть пустым",S)}},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)},__groups:{$each:E.forEach({__users:{required:E.withMessage("Поле не должен быть пустым",S)},__tags:{required:E.withMessage("Поле не должен быть пустым",S)},__start_date:{required:E.withMessage("Поле не должен быть пустым",S)},__end_date:{required:E.withMessage("Поле не должен быть пустым",S)},__company:{required:E.withMessage("Поле не должен быть пустым",S)},__route:{required:E.withMessage("Поле не должен быть пустым",S)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:E.forEach({users:{required:E.withMessage("Поле не должен быть пустым",S)},text:{required:E.withMessage("Поле не должен быть пустым",S)}})}},booking_model:{bookings:[{type:xe,route:tt,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:E.forEach({segments:{$each:E.forEach({departure_city:{required:E.withMessage("Поле не должен быть пустым",S)},arrival_city:{required:E.withMessage("Поле не должен быть пустым",S)},date:{required:E.withMessage("Поле не должен быть пустым",S)},time:{required:E.withMessage("Поле не должен быть пустым",S)},segment_class:{required:E.withMessage("Поле не должен быть пустым",S)}})},passengers:{required:E.withMessage("Поле не должен быть пустым",S)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Bt,active:!0,value:Ke},{id:4,label:"decree",icon:At,active:!0,value:Qe}],routeTabItems:[{id:1,title:"airplane",icon:Ft,value:tt,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:jt,value:fo,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:zt,value:$t,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:Gt,value:xe},{id:2,title:"complex-route",icon:Wt,value:ct},{id:3,title:"one-way",icon:Yt,value:go}]}),actions:{async actionCreateDocument(m){const n=rt(m);this.buttonLoading=!0;const{response:r,error:o}=await Se(Te,n);return r?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:m,body:n}){const r=await rt(n);try{this.buttonLoading=!0;const{data:o}=await Ce({id:m,body:r});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(m){var n,r;try{this.detailLoading=!0;const{data:o}=await ye(m),s=await Et(o.id);this.decreeModel=(r=(n=s==null?void 0:s.data)==null?void 0:n.to_composes[0])==null?void 0:r.from_compose,Me(this.model,o),this.model.__curator=await Ie([],o.curator.id,!1),this.model.__signers=await Q(o.signers),this.model.__approvers=await Q(o.approvers);const d=Object.values(o.notices.reduce((a,_)=>{const l=_.group_id;return a[l]=a[l]||{group_id:l,items:[]},a[l].items.push(_),a},{}));this.model.__groups=await Promise.all(d.map(async a=>{var O;const _=await Promise.all(a.items.map(async $=>({...await Q([],$.user.id,!1),business_trip_id:$.id}))),l=await dt(a.items[0].tags),p=await ze("regions",a.items[0].locations),x=await ze("countries",a.items[0].countries),T=await ze("companies",[],!1,(O=a.items[0].sender_company)==null?void 0:O.id),I=a.items[0].start_date,L=a.items[0].end_date,M=a.items[0].route;return{__users:_,__tags:l,__regions:p,__countries:x,__start_date:I,__end_date:L,__company:T,__route:M,__filialList:be().filialList}})),this.trip_plan_model.trip_plans=await Promise.all(o.trip_plans.map(async(a,_)=>({...a,users:await Q(a.users)}))),this.booking_model.bookings=await Promise.all(o.bookings.map(async a=>({type:a.type,route:a.route,segments:await Promise.all(a.segments.map(async _=>({departure_city:await ze("regions",[],!1,_.departure_city.id),arrival_city:await ze("regions",[],!1,_.arrival_city.id),segment_class:await qo.find(l=>l.value===_.segment_class),date:he(_.departure_date),time:await uo(_.departure_date,_.departure_end_date)}))),passengers:await Q(a.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...be().filialList]})},actionDeleteGroupBlock(m){this.model.__groups.splice(m,1)},async actionStepClick(m,n,r){await m.replace({query:{...n.query,step:r}}),this.stepperItems.forEach(s=>s.active=s.value===r),await vt();const o=document.querySelector(".document-view-aside");o&&o.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(m){this.trip_plan_model.trip_plans.splice(m,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:xe,route:tt,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(m){this.booking_model.bookings.splice(m,1)},actionChangeRouteSegment(m,n){const r=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[n].segments=m===xe?[r(),r()]:[r()]},async actionAddRouteLine(m){this.booking_model.bookings[m].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(m,n){this.booking_model.bookings[m].segments.splice(n,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...be().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:xe,route:tt,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),fl={class:"trip-info-components"},gl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},ql={class:"flex justify-between"},bl={class:"text-base text-primary-900 font-semibold mb-1"},yl=["onClick"],hl={class:"flex align-center gap-x-4"},wl={class:"flex w-full gap-x-4"},vl={class:"flex w-full gap-x-4"},kl={class:"text-base text-primary-900 font-semibold mb-2"},xl={class:"flex items-center justify-between"},ht={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(m,{expose:n,emit:r}){const o=pe(),s=ue(),d=Fe();be();const{t:a,locale:_}=ne(),l=le(d.rules,d.model),p=Z(!1),x=Z(!1),T=ee(()=>({region_type:"local"})),I=k=>{d.model.__files=[],k.forEach(i=>{d.model.__files.push(i)})},L=()=>{d.actionAddGroupBlock()},M=async k=>{const i=await l.value.$validate();if(p.value=!0,!i){F(null,a("fill-required-fields"),A.WARNING);return}if(o.params.document_sub_type===H.BUSINESS_TRIP_NOTICE_FOREIGN){if(d.model.__groups.find(f=>!f.__countries||f.__countries.length===0)){F(null,a("fill-required-fields"),A.WARNING);return}d.model.__groups.forEach(f=>{f.__regions=[]})}if(o.params.document_sub_type===H.BUSINESS_TRIP_NOTICE_V2){if(d.model.__groups.find(f=>!f.__regions||f.__regions.length===0)){F(null,a("fill-required-fields"),A.WARNING);return}d.model.__groups.forEach(f=>{f.__countries=[]})}x.value=!0,await new Promise(g=>{q("emit:onValidateAndSend",g)})&&await d.actionStepClick(s,o,"decree"),x.value=!1},O=(k,i)=>{d.model.__groups[i].__regions=[]},$=(k,i)=>{k.value.forEach(c=>{var g,f,w,D;if(c.id===((D=(w=(f=(g=d.model)==null?void 0:g.__groups[i])==null?void 0:f.__company)==null?void 0:w.region)==null?void 0:D.id)){const P=d.model.__groups[i].__regions.findIndex(U=>U.id===c.id);(P||P===0)&&d.model.__groups[i].__regions.splice(P,1)}})};n({stepClick:M});const q=r;return(k,i)=>{const c=_e,g=Oe,f=ge,w=Je,D=st,P=Ye,U=me,b=Pe;return h(),C("div",fl,[t(U,null,{default:u(()=>[t(c,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(l).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=v=>e(l).__curator.$model=v),error:e(l).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(c,{"col-class":"w-1/2"},{default:u(()=>[t(g,{modelValue:e(l).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=v=>e(l).short_description.$model=v),error:e(l).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(c,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:u(()=>[(h(!0),C(J,null,de(e(d).model.__groups,(v,R)=>(h(),C("div",gl,[y("div",ql,[y("span",bl,j(e(a)("group"))+"-"+j(R+1),1),R!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:V=>e(d).actionDeleteGroupBlock(R)},[t(f,{icon:e(He),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,yl)):oe("",!0)]),t(U,null,{default:u(()=>[t(c,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:v.__users,"onUpdate:modelValue":V=>v.__users=V,error:e(l).__groups.$each.$response.$data[R].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"",allSelectable:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(c,{"col-class":"w-1/2"},{default:u(()=>[y("div",hl,[t(w,{modelValue:v.__company,"onUpdate:modelValue":V=>v.__company=V,error:e(l).__groups.$each.$response.$data[R].__company,options:v.__filialList,"onUpdate:options":V=>v.__filialList=V,required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":V=>O(V,R)},{option:u(({option:V})=>[t(e(qe),{title:V.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","onUpdate:options","show-nested-error","onEmit:change"]),e(o).params.document_sub_type===e(H).BUSINESS_TRIP_NOTICE_V2?(h(),W(D,{key:0,modelValue:v.__regions,"onUpdate:modelValue":V=>v.__regions=V,"api-url":"regions","api-params":T.value,"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":V=>$(V,R)},{chip:u(({value:V})=>[re(j(V.name),1)]),option:u(({value:V})=>[t(e(qe),{title:V.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","api-params","show-nested-error","onEmit:change"])):oe("",!0),e(o).params.document_sub_type===e(H).BUSINESS_TRIP_NOTICE_FOREIGN?(h(),W(D,{key:1,modelValue:v.__countries,"onUpdate:modelValue":V=>v.__countries=V,"api-url":"countries","api-params":{country_type:"foreign"},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where-country",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,"all-selectable":"",class:"w-1/2"},{chip:u(({value:V})=>[re(j(V.name),1)]),option:u(({value:V})=>[t(e(qe),{title:V.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","show-nested-error"])):oe("",!0)])]),_:2},1024),t(c,{"col-class":"w-1/2"},{default:u(()=>[y("div",wl,[t(D,{modelValue:v.__tags,"onUpdate:modelValue":V=>v.__tags=V,error:e(l).__groups.$each.$response.$data[R].__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":p.value,class:"w-1/2"},{chip:u(({value:V})=>[re(j(V.name),1)]),option:u(({value:V})=>[t(e(qe),{title:V.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),t(w,{modelValue:v.__route,"onUpdate:modelValue":V=>v.__route=V,error:e(l).__groups.$each.$response.$data[R].__route,options:e(d).routeTabItems,"onUpdate:options":i[2]||(i[2]=V=>e(d).routeTabItems=V),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(_)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":p.value,class:"w-1/2"},{option:u(({option:V})=>[t(e(qe),{title:e(a)(V.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),t(c,{"col-class":"w-1/2"},{default:u(()=>[y("div",vl,[t(P,{modelValue:v.__start_date,"onUpdate:modelValue":[V=>v.__start_date=V,V=>v.__start_date=e(he)(V)],error:e(l).__groups.$each.$response.$data[R].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),t(P,{modelValue:v.__end_date,"onUpdate:modelValue":[V=>v.__end_date=V,V=>v.__end_date=e(he)(V)],error:e(l).__groups.$each.$response.$data[R].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),t(b,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:L},null,8,["icon-left"])]),_:1}),t(c,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(d).model.__approvers,"onUpdate:modelValue":i[3]||(i[3]=v=>e(d).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(c,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(l).__signers.$model,"onUpdate:modelValue":i[4]||(i[4]=v=>e(l).__signers.$model=v),error:e(l).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(c,{"col-class":"w-full"},{default:u(()=>[y("div",{class:Ne(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(d).model.content?"border-critic-500":"border-greyscale-200"])},[y("div",kl,j(e(a)("notice")),1),t($e,{modelValue:e(l).content.$model,"onUpdate:modelValue":i[5]||(i[5]=v=>e(l).content.$model=v),error:e(l).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(d).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),y("div",xl,[t(b,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(b,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:x.value,onClick:i[6]||(i[6]=v=>M(e(pt)))},null,8,["loading"])])])}}},Vl={class:"work-plan-component"},$l={class:"flex flex-col gap-y-3"},El={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ul={class:"flex justify-between"},Sl={class:"text-base text-primary-900 font-semibold mb-1"},Cl=["onClick"],Tl={class:"flex items-center justify-between mt-10"},Rl={class:"flex items-center gap-x-1"},Ll={__name:"WorkPlan",setup(m,{expose:n}){const{t:r}=ne(),o=pe(),s=ue(),d=Fe(),a=le(d.trip_plan_rules,d.trip_plan_model),_=Z(!1),l=ee(()=>{const T=new Set;return d.model.__groups.reduce((I,L)=>L.__users&&Array.isArray(L.__users)?I.concat(L.__users):I,[]).filter(I=>T.has(I.id)?!1:(T.add(I.id),!0))}),p=async T=>{const I=await a.value.$validate();if(_.value=!0,!I){F(null,r("fill-required-fields"),A.WARNING);return}const L=d.trip_plan_model.trip_plans.flatMap(O=>{var $;return($=O.users)==null?void 0:$.map(q=>q.id)}),M=l.value.filter(O=>!L.includes(O.id));M.length?(F(null,`У следующих сотрудников нет плана работы: ${M==null?void 0:M.map(O=>O.first_name+" "+O.last_name).join(", ")}.`,A.WARNING),F(null,"У всех сотрудников должен быть назначен рабочий план.",A.WARNING)):await d.actionStepClick(s,o,T)},x=()=>{d.actionAddWorkPlanRow(),_.value=!1};return n({stepClick:p}),(T,I)=>{const L=ge,M=St,O=_e,$=me,q=Pe;return h(),C("div",Vl,[y("div",$l,[(h(!0),C(J,null,de(e(d).trip_plan_model.trip_plans,(k,i)=>(h(),C("div",El,[y("div",Ul,[y("span",Sl,j(e(r)("plan"))+"-"+j(i+1),1),i!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:c=>e(d).actionDeleteWorkPlanRow(i)},[t(L,{icon:e(He),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Cl)):oe("",!0)]),t($,null,{default:u(()=>[t(O,{"col-class":"w-1/2"},{default:u(()=>[t(M,{modelValue:k.text,"onUpdate:modelValue":c=>k.text=c,error:e(a).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(O,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:k.users,"onUpdate:modelValue":c=>k.users=c,options:l.value,error:e(a).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),t(q,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:x},null,8,["icon-left"]),y("div",Tl,[t(q,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",Rl,[t(q,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:I[0]||(I[0]=k=>p(e(Ke)))}),t(q,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:I[1]||(I[1]=k=>p(e(Ut)))})])])])}}};const Dl={class:"base-time-picker"},Nl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(m){const n=m,r=at(n,"modelValue"),{t:o}=ne();return(s,d)=>{var l;const a=xo,_=ge;return h(),C("div",Dl,[t(a,{label:n.label,required:n.required},null,8,["label","required"]),t(e(Vo),{modelValue:e(r),"onUpdate:modelValue":d[0]||(d[0]=p=>ot(r)?r.value=p:null),"time-picker":"",range:m.range,"cancel-text":e(o)("cancel"),"select-text":e(o)("select"),placeholder:e(o)(m.placeholder),ref:"datePicker",class:Ne({"input-error":((l=m.error)==null?void 0:l.$error)&&m.showNestedError})},{"input-icon":u(()=>[t(_,{icon:e(Ht),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Ml={class:"route-component flex flex-col gap-y-3"},Il={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ol={class:"flex items-center justify-between"},Pl={class:"flex items-center gap-x-4"},Bl={class:"text-base text-primary-900 font-semibold mb-1"},Al={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Fl={class:"text-xs text-greyscale-900 font-medium"},jl=["onClick"],zl=["onClick"],Gl={class:"text-sm text-primary-500 font-semibold"},Wl={class:"flex items-center justify-between mt-10"},Yl={class:"flex items-center gap-x-1"},Hl={__name:"Route",props:{formType:{type:String,default:G}},emits:["emit:onValidateAndSend"],setup(m,{expose:n,emit:r}){const{t:o}=ne(),s=pe(),d=ue(),a=Fe(),_=be();ie(),ce();const l=le(a.booking_model_rules,a.booking_model);Z(!1);const p=Z(!1),x=ee(()=>{const c=new Set;return a.model.__groups.reduce((g,f)=>f.__users&&Array.isArray(f.__users)?g.concat(f.__users):g,[]).filter(g=>c.has(g.id)?!1:(c.add(g.id),!0))}),T=c=>{a.routeTabItems.forEach(g=>g.active=g.id===c.id)},I=(c,g)=>{a.routeTypeTabItems.forEach(f=>f.active=f.id===c.id),a.actionChangeRouteSegment(c.value,g)},L=async(c,g=!1)=>{var P,U;const f=await l.value.$validate();if(p.value=!0,!f){F(null,o("fill-required-fields"),A.WARNING);return}const w=(P=a.booking_model.bookings)==null?void 0:P.flatMap(b=>{var v;return(v=b.passengers)==null?void 0:v.map(R=>R==null?void 0:R.id)}),D=(U=x.value)==null?void 0:U.filter(b=>!(w!=null&&w.includes(b.id)));D.length?(F(null,`У следующих сотрудников не назначен маршрут: ${D.map(b=>b.first_name+" "+b.last_name).join(", ")}.`,A.WARNING),F(null,"У всех сотрудников должен быть назначен маршрут",A.WARNING)):(g&&i("emit:onValidateAndSend"),await a.actionStepClick(d,s,c))},M=()=>{a.actionAddRouteRow(),p.value=!1},O=(c,g,f,w)=>{w.type===xe&&(a.booking_model.bookings[g].segments[f+1].arrival_city=c)},$=(c,g,f,w)=>{w.type===xe&&(a.booking_model.bookings[g].segments[f+1].departure_city=c)},q=(c,g,f,w)=>{w.type===xe&&(a.booking_model.bookings[g].segments[f+1].segment_class=c)},k=()=>{L(Qe,!0)},i=r;return n({stepClick:L}),(c,g)=>{const f=Je,w=_e,D=Ye,P=me,U=Pe;return h(),C("div",Ml,[(h(!0),C(J,null,de(e(a).booking_model.bookings,(b,v)=>(h(),C("div",Il,[y("div",Ol,[y("div",Pl,[y("span",Bl,j(e(o)("route"))+"-"+j(v+1),1),t(yt,{modelValue:b.route,"onUpdate:modelValue":R=>b.route=R,items:e(a).routeTabItems,"onEmit:onChange":g[0]||(g[0]=R=>T(R))},null,8,["modelValue","onUpdate:modelValue","items"]),t(yt,{modelValue:b.type,"onUpdate:modelValue":R=>b.type=R,items:e(a).routeTypeTabItems,"onEmit:onChange":R=>I(R,v)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),v!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:g[1]||(g[1]=(...R)=>e(a).actionDeleteRouteRow&&e(a).actionDeleteRouteRow(...R))},[t(ge,{icon:e(He),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):oe("",!0)]),y("div",Al,[t(ge,{icon:e(it),class:"text-warning-500"},null,8,["icon"]),y("span",Fl,j(e(o)("route-warning")),1)]),(h(!0),C(J,null,de(b.segments,(R,V)=>(h(),C("div",null,[t(P,null,{default:u(()=>[t(w,{"col-class":"w-1/5"},{default:u(()=>[t(f,{modelValue:R.departure_city,"onUpdate:modelValue":N=>R.departure_city=N,error:e(l).bookings.$each.$response.$data[v].segments.$each.$data[V].departure_city,options:e(_).regionsList,"onUpdate:options":g[2]||(g[2]=N=>e(_).regionsList=N),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:b.type===e(xe)&&V%2!==0,"onEmit:change":N=>O(N,v,V,b)},{option:u(({option:N})=>[t(e(qe),{title:N.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(w,{"col-class":"w-1/5"},{default:u(()=>[t(f,{modelValue:R.arrival_city,"onUpdate:modelValue":N=>R.arrival_city=N,error:e(l).bookings.$each.$response.$data[v].segments.$each.$data[V].arrival_city,options:e(_).regionsList.filter(N=>{var X;return(N==null?void 0:N.id)!=((X=R.departure_city)==null?void 0:X.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:b.type===e(xe)&&V%2!==0,"onEmit:change":N=>$(N,v,V,b)},{option:u(({option:N})=>[t(e(qe),{title:N.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(w,{"col-class":"w-1/5"},{default:u(()=>[t(f,{modelValue:R.segment_class,"onUpdate:modelValue":N=>R.segment_class=N,error:e(l).bookings.$each.$response.$data[v].segments.$each.$data[V].segment_class,options:b.route===e($t)?e(bo):b.route===e(tt)?e(yo):e(ho),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":p.value,translatable:"",disabled:b.type===e(xe)&&V%2!==0,"onEmit:change":N=>q(N,v,V,b)},{option:u(({option:N})=>[t(e(qe),{title:N.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(w,{"col-class":"w-1/5"},{default:u(()=>[t(D,{modelValue:R.date,"onUpdate:modelValue":[N=>R.date=N,N=>R.date=e(he)(N)],error:e(l).bookings.$each.$response.$data[v].segments.$each.$data[V].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),t(w,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:u(()=>[t(Nl,{modelValue:R.time,"onUpdate:modelValue":N=>R.time=N,error:e(l).bookings.$each.$response.$data[v].segments.$each.$data[V].time,label:"time",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),b.type===e(ct)&&V!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:N=>e(a).actionDeleteRouteLine(v,V)},[t(ge,{icon:e(He),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,jl)):oe("",!0)]),_:2},1024)]),_:2},1024)]))),256)),b.type===e(ct)?(h(),C("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:R=>e(a).actionAddRouteLine(v)},[t(ge,{icon:e(Xe),class:"text-primary-500"},null,8,["icon"]),y("span",Gl,j(e(o)("add-line")),1)],8,zl)):oe("",!0),t(P,null,{default:u(()=>[t(w,{"col-class":"w-full"},{default:u(()=>[t(K,{modelValue:b.passengers,"onUpdate:modelValue":R=>b.passengers=R,options:x.value,error:e(l).bookings.$each.$response.$data[v].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),t(U,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:M},null,8,["icon-left"]),y("div",Wl,[t(U,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",Yl,[t(U,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:g[3]||(g[3]=b=>L(e(pt)))}),t(U,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(a).buttonLoading,onClick:k},null,8,["loading"])])])])}}},mt=Ee("sd-extend-business-trip-stores",{state:()=>({buttonLoading:!1,userTripUpdateButtonLoading:!1,detailLoading:!1,changingBTDialog:!1,changingBTLoading:!1,changingBTModel:null,tempVerifications:[],tempRegions:[],tempGroupIndex:null,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)}}}),actions:{async actionGetParentDocumentDetail(m){try{this.detailLoading=!0;const{data:n}=await ye(m);await this.actionAdjustModel(n)}catch{}finally{this.detailLoading=!1}},async actionAdjustModel(m){this.model.__notices=m.notices;const n=Object.values(m.notices.reduce((r,o)=>{const s=o.group_id;return r[s]=r[s]||{group_id:s,items:[]},r[s].items.push(o),r},{}));this.model.__groups=await Promise.all(n.map(async r=>({__users:await Promise.all(r.items.map(async s=>({...await Q([],s.user.id,!1),business_trip_id:s.id}))),__notices_to_change:[],group_id:r.group_id})))},async actionAddUsersToExtend(m,n){var _;await vt();const r=this.model.__groups[n].__users_to_extend||[],o=this.model.__notices.find(l=>r.some(p=>p.id===l.user.id&&l.group_id===m.group_id));if(!o)return;const s=this.model.__groups[n];if(Array.isArray(s.__notices_to_change)||this.$set(s,"__notices_to_change",[]),s.__notices_to_change.some(l=>l.id===o.id||l.parent_id===o.id)){this.tempGroupIndex=n,this.actionClearTempModel();return}this.changingBTModel=o,this.tempGroupIndex=n,this.changingBTLoading=!0,this.changingBTDialog=!0,setTimeout(()=>{this.changingBTLoading=!1},2e3);const a=await $o(o.id);this.tempVerifications=(_=a==null?void 0:a.data)==null?void 0:_.verifications.filter(l=>!l.is_sender).map(l=>({...l,is_visited:l.arrived_at||l.left_at}))},actionDeleteNoticeToChange(m,n,r){this.model.__groups[r].__notices_to_change.splice(n,1)},actionFillNoticesToChange(){var m,n,r,o,s,d;(r=(n=(m=this.model)==null?void 0:m.__groups)==null?void 0:n[this.tempGroupIndex])!=null&&r.__notices_to_change?this.model.__groups[this.tempGroupIndex].__notices_to_change.push({...this.changingBTModel,__regions:this.tempVerifications.map(a=>({...a.region})),__start_date:(o=this.changingBTModel)==null?void 0:o.start_date,__end_date:(s=this.changingBTModel)==null?void 0:s.end_date,__sender_company:(d=this.changingBTModel)==null?void 0:d.sender_company}):console.warn("Target group or __notices_to_change array not found.")},async actionCreateDocument(m){const n=rt(m);this.buttonLoading=!0;const{response:r,error:o}=await Se(Te,n);return r?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:m,body:n}){const r=await rt(n);try{this.buttonLoading=!0;const{data:o}=await Ce({id:m,body:r});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(m,n){var r,o,s,d,a,_;try{this.detailLoading=!0,await this.actionGetParentDocumentDetail(n);const{data:l}=await ye(m),p=await Et(l.id);Fe().decreeModel.content=((s=(o=(r=p==null?void 0:p.data)==null?void 0:r.to_composes[0])==null?void 0:o.from_compose)==null?void 0:s.content)||"",Fe().decreeModel.id=((_=(a=(d=p==null?void 0:p.data)==null?void 0:d.to_composes[0])==null?void 0:a.from_compose)==null?void 0:_.id)||null;const x=await Promise.all(this.model.__groups.map(async T=>{const I=l.notices.filter(L=>T.__users.some(M=>{var O;return M.id===((O=L.user)==null?void 0:O.id)&&L.group_id===T.group_id}));return I.length&&(T.__notices_to_change=await Promise.all(I.map(async L=>({user:L.user,__regions:await ze("regions",L.locations),__start_date:L.start_date,__end_date:L.end_date,tags:L.tags,__sender_company:L.sender_company,business_trip_id:L.id,parent_id:L.parent})))),T}));this.model.__curator=await Ie([],l.curator.id,!1),this.model.__signers=await Q(l.signers),this.model.__approvers=await Q(l.approvers),this.model.short_description=l.short_description,this.model.content=l.content}catch(l){return console.error(l),Promise.reject(l)}finally{this.detailLoading=!1}},async actionUpdateUserTrip(){this.actionFillNoticesToChange(),this.actionClearTempModel()},actionResetBTModel(){this.model={approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]}},actionClearTempModel(){this.changingBTDialog=!1,this.changingBTLoading=!1,this.changingBTModel=null,this.tempVerifications=[],this.tempRegions=[],this.model.__groups[this.tempGroupIndex].__users_to_extend=[]},actionClearUserToExtend(){const m=this.model.__groups[this.tempGroupIndex].__users_to_extend.findIndex(n=>{var r,o;return n.id===((o=(r=this.changingBTModel)==null?void 0:r.user)==null?void 0:o.id)});this.model.__groups[this.tempGroupIndex].__users_to_extend.splice(m,1)}}}),Xl={class:"decree-component"},Kl={class:"flex items-center justify-between mt-10"},Ql={class:"flex items-center gap-x-1"},Dt={__name:"Decree",props:{formType:{type:String,default:G}},setup(m,{expose:n}){const r=m,o=pe(),s=ue(),d=Fe(),a=mt(),_=le(d.decreeRules,d.decreeModel),{t:l}=ne(),p=ie(),x=ce(),T=Z(!1),I=ee(()=>({...o.params.document_sub_type===H.EXTEND_BUSINESS_TRIP_NOTICE?a.model:d.model,bookings:d.booking_model.bookings,trip_plans:d.trip_plan_model.trip_plans,decree_content:d.decreeModel.content})),L=async k=>{await d.actionStepClick(s,o,k)},M=k=>{d.decreeModel.__files=[],k.forEach(i=>{d.decreeModel.__files.push(i)})},O=async()=>{var i,c,g,f;if(!await _.value.$validate()){F(null,l("fill-required-fields"),A.WARNING);return}d.decreeModel.approvers=[],d.decreeModel.signers=[],d.decreeModel.curator=(c=(i=d.model)==null?void 0:i.__curator)==null?void 0:c.user_id,d.decreeModel.journal=se.ORDERS_PROTOCOLS,d.decreeModel.company=p.currentUser.company.id,d.decreeModel.sender=(f=(g=p==null?void 0:p.currentUser)==null?void 0:g.top_level_department)==null?void 0:f.id,d.decreeModel.document_type=ae.DECREE,d.decreeModel.document_sub_type=o.params.document_sub_type===H.EXTEND_BUSINESS_TRIP_NOTICE?H.EXTEND_BUSINESS_TRIP_DECREE:o.params.document_sub_type===H.BUSINESS_TRIP_NOTICE_FOREIGN?H.BUSINESS_TRIP_DECREE_FOREIGN:H.BUSINESS_TRIP_DECREE_V2,d.decreeModel.short_description=d.model.short_description,T.value=!0},$=async(k,i)=>{try{await d.actionUpdateDocument({id:i,body:{...d.decreeModel,trip_notice_id:k}}),await x.actionCountList(),F(null,l("successfully-saved"),A.SUCCESS)}catch{}},q=async()=>{var i;let k=null;r.formType===G&&o.query.notice_id?k=o.query.notice_id:r.formType===De&&o.params.id&&(k=o.params.id);try{await $(k,(i=d.decreeModel)==null?void 0:i.id),await s.replace({name:Re,params:{id:k,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type},query:{parent_id:o.query.parent_id}})}catch{}};return n({stepClick:L}),(k,i)=>{const c=Pe;return h(),C("div",Xl,[t($e,{modelValue:e(_).content.$model,"onUpdate:modelValue":i[0]||(i[0]=g=>e(_).content.$model=g),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(d).decreeModel.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"]),y("div",Kl,[t(c,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",Ql,[t(c,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:i[1]||(i[1]=g=>L(e(Ke)))}),t(c,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:O})])]),t(Le,{modelValue:T.value,"onUpdate:modelValue":i[2]||(i[2]=g=>T.value=g),"send-button-loading":e(d).buttonLoading,"onEmit:send":q,"content-classes":"p-0"},{content:u(()=>[t(e(po),{"compose-model":I.value,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},Jl={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},Zl={class:"px-6 py-4"},oa={__name:"BusinessTripForm",props:{formType:{type:String,default:G}},setup(m){const n=m,{t:r}=ne(),o=pe(),s=ue(),d=ie(),a=Fe();le(a.rules,a.model),le(a.trip_plan_rules,a.trip_plan_model),le(a.booking_model_rules,a.booking_model),le(a.decreeRules,a.decreeModel);const _=Z(null),l=ee(()=>n.formType===G?o.params.document_sub_type===H.BUSINESS_TRIP_NOTICE_V2?"create-business-trip-notice":"create-business-trip-notice-foreign":o.params.document_sub_type===H.BUSINESS_TRIP_NOTICE_V2?"update-business-trip-notice":"update-business-trip-notice-foreign"),p=ee(()=>{switch(o.query.step){case Ke:return ht;case Qe:return Dt;case pt:return Ll;case Ut:return Hl;default:return ht}}),x=async M=>{var $;const O=e(_);(($=o.query)==null?void 0:$.step)!==M.value&&(await O.stepClick(M.value),M.value,Qe)},T=async()=>{o.query.step||await s.replace({query:{...o.query,step:Ke}}),a.stepperItems.forEach(M=>M.active=M.value===o.query.step)},I=async()=>{var $,q,k,i,c,g,f,w,D,P,U,b;const M=te(a.model.__approvers),O=te(a.model.__signers);if(a.model.approvers=[],a.model.signers=[],a.model.notices=[],a.model.bookings=[],a.model.trip_plans=[],a.model.approvers=M,a.model.signers=O,a.model.curator=(q=($=a.model)==null?void 0:$.__curator)==null?void 0:q.user_id,a.model.journal=se.INNER,a.model.company=(i=(k=d.currentUser)==null?void 0:k.company)==null?void 0:i.id,a.model.__groups.forEach((v,R)=>{const V=R+1;a.model.notices.push(...v.__users.map(N=>{var X,B,Y;return{start_date:v.__start_date,end_date:v.__end_date,end_date_2:v.__end_date,user:N.id,company:(B=(X=d.currentUser)==null?void 0:X.company)==null?void 0:B.id,sender_company:(Y=v.__company)==null?void 0:Y.id,regions:v.__regions.map(z=>z.id),countries:v.__countries.map(z=>({id:z.id})),tags:v.__tags.map(z=>({id:z.id})),route:v.__route,group_id:V,trip_type:o.params.document_sub_type===H.BUSINESS_TRIP_NOTICE_FOREIGN?"foreign":"local",...N.business_trip_id?{id:N.business_trip_id}:{}}}))}),a.model.sender=(g=(c=d==null?void 0:d.currentUser)==null?void 0:c.top_level_department)==null?void 0:g.id,a.model.files=a.model.__files.map(v=>({id:v.id})),a.model.document_type=o.params.document_type,a.model.document_sub_type=o.params.document_sub_type,n.formType===G&&o.query.notice_id)try{await a.actionUpdateDocument({id:o.query.notice_id,body:a.model})}catch(v){throw v}else if(n.formType===G)try{const{data:v}=await a.actionCreateDocument(a.model),R={approvers:[],signers:[],curator:(w=(f=a.model)==null?void 0:f.__curator)==null?void 0:w.user_id,journal:se.ORDERS_PROTOCOLS,company:d.currentUser.company.id,sender:(P=(D=d==null?void 0:d.currentUser)==null?void 0:D.top_level_department)==null?void 0:P.id,document_type:ae.DECREE,document_sub_type:o.params.document_sub_type===H.EXTEND_BUSINESS_TRIP_NOTICE?H.EXTEND_BUSINESS_TRIP_DECREE:o.params.document_sub_type===H.BUSINESS_TRIP_NOTICE_FOREIGN?H.BUSINESS_TRIP_DECREE_FOREIGN:H.BUSINESS_TRIP_DECREE_V2,short_description:(U=a.model)==null?void 0:U.short_description,trip_notice_id:v.id,content:v.content};a.decreeModel.content=v.content;try{const V=await a.actionCreateDocument(R);a.decreeModel.id=(b=V==null?void 0:V.data)==null?void 0:b.id,await s.replace({query:{...o.query,notice_id:v.id}}),await a.actionGetDocumentDetailForUpdate(v.id)}catch(V){throw V}}catch(v){throw v}else if(n.formType===De&&o.params.id)try{await a.actionUpdateDocument({id:o.params.id,body:a.model})}catch(v){throw v}},L=async M=>{try{await I(),await F(null,r("notice-saved-successfully"),A.SUCCESS),M(!0)}catch{M(!1)}};return We(async()=>{await T(),n.formType===De?await a.actionGetDocumentDetailForUpdate(o.params.id):o.query.notice_id&&await a.actionGetDocumentDetailForUpdate(o.query.notice_id)}),Ue(()=>{a.actionResetBTModel()}),(M,O)=>{const $=ve,q=Lt;return h(),C("div",{class:Ne(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(a).detailLoading}])},[e(a).detailLoading?(h(),W($,{key:0})):(h(),W(e(Ve),{key:1,title:l.value},{content:u(()=>[y("div",Jl,[t(q,{items:e(a).stepperItems,"onEmit:stepClick":x},null,8,["items"])]),y("div",Zl,[(h(),W(Xt(p.value),{"form-type":m.formType,ref_key:"childComponent",ref:_,"onEmit:onValidateAndSend":L},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},en=Ee("sd-decree-stores",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",S)},__curator:{required:E.withMessage("Поле не должен быть пустым",S)},__signers:{required:E.withMessage("Поле не должен быть пустым",S)},short_description:{required:E.withMessage("Поле не должен быть пустым",S)},__groups:{$each:E.forEach({__users:{required:E.withMessage("Поле не должен быть пустым",S)},__tags:{required:E.withMessage("Поле не должен быть пустым",S)},__regions:{required:E.withMessage("Поле не должен быть пустым",S)},__start_date:{required:E.withMessage("Поле не должен быть пустым",S)},__end_date:{required:E.withMessage("Поле не должен быть пустым",S)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:E.forEach({users:{required:E.withMessage("Поле не должен быть пустым",S)},text:{required:E.withMessage("Поле не должен быть пустым",S)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(m){this.model.__groups.splice(m,1)},actionDeleteWorkPlanRow(m){this.trip_plan_model.trip_plans.splice(m,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(m){this.buttonLoading=!0;const{response:n,error:r}=await Se(Te,m);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:m,body:n}){try{this.buttonLoading=!0;const{data:r}=await Ce({id:m,body:n});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),tn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},on={class:"flex justify-between"},ln={class:"text-base text-primary-900 font-semibold mb-1"},nn=["onClick"],rn={class:"flex w-full gap-x-4"},an={class:"flex flex-col gap-y-3"},sn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},dn={class:"flex justify-between"},cn={class:"text-base text-primary-900 font-semibold mb-1"},un=["onClick"],pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"text-base text-primary-900 font-semibold mb-2"},la={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:G}},setup(m){const n=m,r=Z(!1),o=Z(!1),{t:s}=ne(),d=pe(),a=ue(),_=ie(),l=en(),p=ce();be();const x=le(l.rules,l.model),T=le(l.trip_plan_rules,l.trip_plan_model),I=ee(()=>n.formType===G?"create-decree":"update-decree"),L=ee(()=>{const f=new Set;return l.model.__groups.reduce((w,D)=>D.__users&&Array.isArray(D.__users)?w.concat(D.__users):w,[]).filter(w=>f.has(w.id)?!1:(f.add(w.id),!0))}),M=async()=>{var P,U,b,v,R,V;if(r.value=!0,!await x.value.$validate()){F(null,s("fill-required-fields"),A.WARNING);return}const w=te(l.model.__approvers),D=te(l.model.__signers);l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.bookings=[],l.model.trip_plans=[],l.model.approvers=w,l.model.signers=D,l.model.curator=(U=(P=l.model)==null?void 0:P.__curator)==null?void 0:U.user_id,l.model.journal=se.ORDERS_PROTOCOLS,l.model.company=(v=(b=_.currentUser)==null?void 0:b.company)==null?void 0:v.id,l.model.__groups.forEach((N,X)=>{const B=X+1;l.model.notices.push(...N.__users.map(Y=>{var z,ke;return{start_date:N.__start_date,end_date:N.__end_date,user:Y.id,company:(ke=(z=_.currentUser)==null?void 0:z.company)==null?void 0:ke.id,regions:N.__regions.map(fe=>fe.id),tags:N.__tags.map(fe=>({id:fe.id})),group_id:B}}))}),l.model.sender=(V=(R=_==null?void 0:_.currentUser)==null?void 0:R.top_level_department)==null?void 0:V.id,l.model.files=l.model.__files.map(N=>({id:N.id})),l.model.document_type=d.params.document_type,l.model.document_sub_type=d.params.document_sub_type,l.model.trip_plans=l.trip_plan_model.trip_plans.map(N=>({users:N.users.map(X=>({id:X.id})),text:N.text})),o.value=!0},O=()=>{},$=()=>{l.actionAddGroupBlock()},q=()=>{l.actionAddWorkPlanRow(),r.value=!1},k=f=>{l.model.__files=[],f.forEach(w=>{l.model.__files.push(w)})},i=async()=>{const f=await l.actionCreateDocument(l.model);await p.actionCountList(),f?(o.value=!1,F(null,s("document-sent"),A.SUCCESS),await a.replace({name:Be,query:{document_type:d.params.document_type}})):F(null,s("error-occurred"),A.ERROR)},c=async()=>{await l.actionUpdateDocument({id:d.params.id,body:l.model}),await p.actionCountList(),F(null,s("changed"),A.SUCCESS),await a.replace({name:Re,params:{id:d.params.id,document_type:d.params.document_type,document_sub_type:d.params.document_sub_type}})},g=()=>{n.formType===G?i():c()};return(f,w)=>{const D=ve,P=_e,U=Oe,b=ge,v=st,R=Ye,V=me,N=Pe,X=St;return e(l).detailLoading?(h(),W(D,{key:0})):(h(),C(J,{key:1},[t(e(Ve),{title:I.value},{content:u(()=>[t(Ae,{"onEmit:preview":M,"onEmit:clearForm":O},{default:u(()=>[t(V,null,{default:u(()=>[t(P,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(x).__curator.$model,"onUpdate:modelValue":w[0]||(w[0]=B=>e(x).__curator.$model=B),error:e(x).__curator,"api-url":"top-signers","api-params":{doc_types:e(d).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(P,{"col-class":"w-1/2"},{default:u(()=>[t(U,{modelValue:e(x).short_description.$model,"onUpdate:modelValue":w[1]||(w[1]=B=>e(x).short_description.$model=B),error:e(x).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(P,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:u(()=>[(h(!0),C(J,null,de(e(l).model.__groups,(B,Y)=>(h(),C("div",tn,[y("div",on,[y("span",ln,j(e(s)("group"))+"-"+j(Y+1),1),Y!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(l).actionDeleteGroupBlock(Y)},[t(b,{icon:e(He),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,nn)):oe("",!0)]),t(V,null,{default:u(()=>[t(P,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:B.__users,"onUpdate:modelValue":z=>B.__users=z,error:e(x).__groups.$each.$response.$data[Y].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:u(()=>[t(v,{modelValue:B.__regions,"onUpdate:modelValue":z=>B.__regions=z,error:e(x).__groups.$each.$response.$data[Y].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":r.value},{chip:u(({value:z})=>[re(j(z.name),1)]),option:u(({value:z})=>[t(e(qe),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:u(()=>[t(v,{modelValue:B.__tags,"onUpdate:modelValue":z=>B.__tags=z,error:e(x).__groups.$each.$response.$data[Y].__tags,"api-url":"tags","api-params":{document_sub_type:e(d).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":r.value},{chip:u(({value:z})=>[re(j(z.name),1)]),option:u(({value:z})=>[t(e(qe),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:u(()=>[y("div",rn,[t(R,{modelValue:B.__start_date,"onUpdate:modelValue":[z=>B.__start_date=z,z=>B.__start_date=e(he)(z)],error:e(x).__groups.$each.$response.$data[Y].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),t(R,{modelValue:B.__end_date,"onUpdate:modelValue":[z=>B.__end_date=z,z=>B.__end_date=e(he)(z)],error:e(x).__groups.$each.$response.$data[Y].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),t(N,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:$},null,8,["icon-left"])]),_:1})]),_:1}),y("div",an,[(h(!0),C(J,null,de(e(l).trip_plan_model.trip_plans,(B,Y)=>(h(),C("div",sn,[y("div",dn,[y("span",cn,j(e(s)("plan"))+"-"+j(Y+1),1),Y!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(l).actionDeleteWorkPlanRow(Y)},[t(b,{icon:e(He),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,un)):oe("",!0)]),t(V,null,{default:u(()=>[t(P,{"col-class":"w-1/2"},{default:u(()=>[t(X,{modelValue:B.text,"onUpdate:modelValue":z=>B.text=z,error:e(T).trip_plans.$each.$response.$data[Y].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:B.users,"onUpdate:modelValue":z=>B.users=z,options:L.value,error:e(T).trip_plans.$each.$response.$data[Y].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),t(N,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Xe),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:q},null,8,["icon-left"]),t(V,null,{default:u(()=>[t(P,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":w[2]||(w[2]=B=>e(l).model.__approvers=B),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(P,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(x).__signers.$model,"onUpdate:modelValue":w[3]||(w[3]=B=>e(x).__signers.$model=B),error:e(x).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(P,{"col-class":"w-full"},{default:u(()=>[y("div",pn,[y("div",mn,j(e(s)("decree")),1),t($e,{modelValue:e(x).content.$model,"onUpdate:modelValue":w[4]||(w[4]=B=>e(x).content.$model=B),error:e(x).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":k},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Le,{modelValue:o.value,"onUpdate:modelValue":w[5]||(w[5]=B=>o.value=B),"send-button-loading":e(l).buttonLoading,"onEmit:send":g},{content:u(()=>[t(e(kt),{"compose-model":{...e(l).model,trip_plans:e(l).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},_n={class:"flex gap-x-[6px] items-center px-2 py-1 bg-greyscale-50 rounded-[90px] border-b border-greyscale-200"},fn={key:0,class:"w-6 h-6 rounded-full flex items-center justify-center text-xs text-white bg-primary-500"},gn={class:"text-greyscale-900 text-sm font-medium"},nt={__name:"BaseChip",props:{item:{type:Object,default:()=>({})},label:{type:String,default:"Example"},type:{type:String,default:"user",validator(m){return["user","location","other"].includes(m)}},clearable:{type:Boolean,default:!1}},emits:["emit:clear"],setup(m,{emit:n}){const r=s=>{o("emit:clear",s)},o=n;return(s,d)=>(h(),C("div",_n,[m.type==="user"?(h(),C("div",fn,j(m.label[0]),1)):m.type==="location"?(h(),W(ge,{key:1,icon:e(Kt),class:"text-greyscale-400"},null,8,["icon"])):oe("",!0),y("div",gn,j(m.label),1),m.clearable?(h(),C("div",{key:2,class:"flex justify-center items-center w-5 h-5 rounded-full bg-critic-500 cursor-pointer",onClick:d[0]||(d[0]=a=>r(m.item))},[t(ge,{icon:e(Qt),class:"text-white"},null,8,["icon"])])):oe("",!0)]))}},qn={key:0,class:"flex flex-col gap-y-5"},bn={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},yn={class:"text-sm font-medium text-greyscale-500"},hn={class:"text-green-900"},wn={class:"flex flex-col gap-y-2"},vn={class:"text-sm font-medium text-greyscale-500"},kn={class:"flex flex-wrap gap-3"},xn={class:"flex flex-col gap-y-2"},Vn={key:1,class:"flex flex-col gap-y-5"},$n={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},En={class:"text-sm font-medium text-greyscale-500"},Un={class:"text-green-900"},Sn={__name:"ChangingBusinessTripModal",setup(m){const n=mt(),{t:r}=ne(),o=ee(()=>{var l;return["reporting","closed"].includes((l=n==null?void 0:n.changingBTModel)==null?void 0:l.trip_status)}),s=()=>{var p;if(!(((p=n.tempVerifications)==null?void 0:p.length)>0)){F(null,"Kamida bitta hudud qo'shing!",A.WARNING);return}n.actionUpdateUserTrip()},d=()=>{n.actionClearTempModel()},a=(l,p)=>{n.tempVerifications.splice(p,1)},_=l=>{l.value.forEach(p=>{n.tempVerifications.some(T=>T.region.id===p.id)||n.tempVerifications.push({region:p,is_visited:!1}),n.tempRegions=[]})};return(l,p)=>{const x=ve,T=st,I=Ye,L=Pe,M=Ct;return h(),W(M,{modelValue:e(n).changingBTDialog,"onUpdate:modelValue":p[4]||(p[4]=O=>e(n).changingBTDialog=O),label:"confirm","max-width":"max-w-[631px]",closable:!1},Jt({content:u(()=>{var O,$,q,k;return[e(n).changingBTLoading?(h(),W(x,{key:0,class:"my-16"})):(h(),C(J,{key:1},[o.value?(h(),C("div",Vn,[y("div",$n,[t(ge,{icon:e(it),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),y("div",En,[y("span",Un,j((k=(q=e(n).changingBTModel)==null?void 0:q.user)==null?void 0:k.full_name),1),p[10]||(p[10]=re("ga tegishli bo'lgan xizmat safari yakunlangan! ",-1))])])])):(h(),C("div",qn,[y("div",bn,[t(ge,{icon:e(it),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),y("div",yn,[p[5]||(p[5]=re("Siz rostdan ham ",-1)),y("span",hn,j(($=(O=e(n).changingBTModel)==null?void 0:O.user)==null?void 0:$.full_name),1),p[6]||(p[6]=re("ga tegishli bo'lgan xizmat safarini o'zgartirmoqchimisiz? ",-1)),p[7]||(p[7]=y("br",null,null,-1)),p[8]||(p[8]=re(" Bunda xizmat safari bilan vaqtinchalik amaliyot bajarish to'xtatiladi! ",-1))])]),y("div",wn,[y("span",vn,[re(j(e(r)("trip-place"))+" ",1),p[9]||(p[9]=y("span",{class:"text-red-500"},"*",-1))]),y("div",kn,[(h(!0),C(J,null,de(e(n).tempVerifications,(i,c)=>{var g;return h(),W(nt,{key:i.id,label:(g=i==null?void 0:i.region)==null?void 0:g.name_uz,clearable:!i.is_visited,type:"location",class:"w-fit","onEmit:clear":f=>a(i,c)},null,8,["label","clearable","onEmit:clear"])}),128))]),t(T,{modelValue:e(n).tempRegions,"onUpdate:modelValue":p[0]||(p[0]=i=>e(n).tempRegions=i),"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",type:"department",placeholder:"add-trip-place",required:"","onEmit:change":p[1]||(p[1]=i=>_(i))},{chip:u(({value:i})=>[re(j(i.name),1)]),option:u(({value:i})=>[t(e(qe),{title:i.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue"])]),y("div",xn,[t(I,{modelValue:e(n).changingBTModel.end_date,"onUpdate:modelValue":[p[2]||(p[2]=i=>e(n).changingBTModel.end_date=i),p[3]||(p[3]=i=>e(n).changingBTModel.end_date=e(he)(i))],"min-date":new Date(e(n).changingBTModel.start_date),required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","min-date"])])]))],64))]}),_:2},[e(n).changingBTLoading?void 0:{name:"footer",fn:u(()=>[t(L,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:d}),o.value?oe("",!0):(h(),W(L,{key:0,loading:e(n).userTripUpdateButtonLoading,label:"update",rounded:"",shadow:"",type:"button",onClick:s},null,8,["loading"]))]),key:"0"}]),1032,["modelValue"])}}},Cn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},Tn={class:"px-6 py-4"},Rn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ln={class:"flex justify-between"},Dn={class:"text-base text-primary-900 font-semibold mb-1"},Nn={class:"text-sm text-greyscale-500 font-medium"},Mn={class:"text-sm text-greyscale-500 font-medium"},In={class:"flex flex-wrap gap-3 mt-1"},On={class:"flex justify-between items-center"},Pn={class:"text-sm text-greyscale-500 font-medium"},Bn={class:"text-base text-primary-900 font-semibold mb-2"},An={class:"flex items-center justify-between"},na={__name:"ExtendBusinessTripForm",props:{formType:{type:String,default:G}},setup(m){const n=mt(),r=Fe(),o=ie(),s=le(n.rules,n.model),d=pe(),a=ue(),{t:_}=ne(),l=m,p=Z(!1);Z(!1);const x=ee(()=>{const $=l.formType===G;return"trip-notice-for-change"}),T=async()=>{var i,c,g,f,w,D,P,U,b,v,R,V,N;const $=te(n.model.__approvers),q=te(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.approvers=$,n.model.signers=q,n.model.curator=(c=(i=n.model)==null?void 0:i.__curator)==null?void 0:c.user_id,n.model.journal=se.INNER,n.model.company=(f=(g=o.currentUser)==null?void 0:g.company)==null?void 0:f.id;let k=1;if(n.model.__groups.forEach(X=>{Array.isArray(X.__notices_to_change)&&n.model.notices.push(...X.__notices_to_change.map(B=>{var Y,z,ke;return{...l.formType===De?{id:B.id}:{},start_date:B.__start_date,end_date:B.__end_date,user:B.user.id,company:(z=(Y=o.currentUser)==null?void 0:Y.company)==null?void 0:z.id,sender_company:(ke=B.sender_company)==null?void 0:ke.id,regions:B.__regions.map(fe=>fe.id),tags:B.tags.map(fe=>({id:fe.id})),route:B.route,group_id:k++,trip_type:"changed_local",parent:B.id,...B.business_trip_id?{id:B.business_trip_id}:{}}}))}),n.model.sender=(D=(w=o==null?void 0:o.currentUser)==null?void 0:w.top_level_department)==null?void 0:D.id,n.model.files=n.model.__files.map(X=>({id:X.id})),n.model.document_type=d.params.document_type,n.model.document_sub_type=d.params.document_sub_type,n.model.trip_notice_id=((P=d.query)==null?void 0:P.parent_id)||null,l.formType===G&&d.query.notice_id)try{await n.actionUpdateDocument({id:d.query.notice_id,body:n.model}),await F(null,_("notice-saved-successfully"),A.SUCCESS)}catch{}else if(l.formType===G)try{const{data:X}=await n.actionCreateDocument(n.model),B={approvers:[],signers:[],curator:(b=(U=n.model)==null?void 0:U.__curator)==null?void 0:b.user_id,journal:se.ORDERS_PROTOCOLS,company:o.currentUser.company.id,sender:(R=(v=o==null?void 0:o.currentUser)==null?void 0:v.top_level_department)==null?void 0:R.id,document_type:ae.DECREE,document_sub_type:H.EXTEND_BUSINESS_TRIP_DECREE,short_description:(V=n.model)==null?void 0:V.short_description,trip_notice_id:X.id,content:X.content};r.decreeModel.content=X.content;try{const Y=await n.actionCreateDocument(B);r.decreeModel.id=(N=Y==null?void 0:Y.data)==null?void 0:N.id,await a.replace({query:{...d.query,notice_id:X.id,parent_id:d.query.parent_id}}),await F(null,_("notice-saved-successfully"),A.SUCCESS),await n.actionGetDocumentDetailForUpdate(X.id,d.query.parent_id)}catch(Y){console.error(Y)}}catch(X){console.error(X)}else if(l.formType===De&&d.params.id)try{await n.actionUpdateDocument({id:d.params.id,body:n.model}),await F(null,_("notice-saved-successfully"),A.SUCCESS)}catch{}},I=$=>{n.model.__files=[],$.forEach(q=>{n.model.__files.push(q)})},L=async $=>{var q;try{((q=d.query)==null?void 0:q.step)!==$.value&&($.value===Qe&&(await M(),await T()),await r.actionStepClick(a,d,$.value))}catch(k){console.error(k)}},M=async()=>{const $=await s.value.$validate();if(p.value=!0,!$)return F(null,_("fill-required-fields"),A.WARNING),Promise.reject();if(!n.model.__groups.some(k=>Array.isArray(k.__notices_to_change)&&k.__notices_to_change.length>0))return F(null,"Kamida bitta xodim o'zgartirish uchun tanlanishi kerak!",A.WARNING),Promise.reject()},O=async()=>{d.query.step||await a.replace({query:{...d.query,step:Ke}}),r.stepperItems.forEach($=>$.active=$.value===d.query.step)};return lt(async()=>{await O()}),We(async()=>{var $,q,k,i,c,g;l.formType===G&&(($=d.query)!=null&&$.notice_id)&&((q=d.query)!=null&&q.parent_id)?await n.actionGetDocumentDetailForUpdate((k=d.query)==null?void 0:k.notice_id,(i=d.query)==null?void 0:i.parent_id):l.formType===G&&((c=d.query)!=null&&c.parent_id)?await n.actionGetParentDocumentDetail(d.query.parent_id):l.formType===De&&await n.actionGetDocumentDetailForUpdate(d.params.id,(g=d.query)==null?void 0:g.parent_id)}),Ue(()=>{n.actionResetBTModel()}),($,q)=>{const k=ve,i=Lt,c=_e,g=Oe,f=me,w=Pe;return h(),C("div",{class:Ne(["extend-business-trip-form",{"h-[calc(100vh-200px)]":e(n).detailLoading}])},[e(n).detailLoading?(h(),W(k,{key:0})):(h(),W(e(Ve),{key:1,title:x.value},{content:u(()=>{var D,P;return[y("div",Cn,[t(i,{items:e(r).stepperItems,"onEmit:stepClick":L},null,8,["items"])]),y("div",Tn,[((D=e(d).query)==null?void 0:D.step)==="trip_info"?(h(),C(J,{key:0},[t(f,null,{default:u(()=>[t(c,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":q[0]||(q[0]=U=>e(s).__curator.$model=U),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(d).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(c,{"col-class":"w-1/2"},{default:u(()=>[t(g,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":q[1]||(q[1]=U=>e(s).short_description.$model=U),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(c,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:u(()=>[(h(!0),C(J,null,de(e(n).model.__groups,(U,b)=>(h(),C("div",Rn,[y("div",Ln,[y("span",Dn,j(e(_)("group"))+"-"+j(b+1),1)]),t(f,null,{default:u(()=>[t(c,{"col-class":"w-full"},{default:u(()=>[t(K,{modelValue:U.__users_to_extend,"onUpdate:modelValue":[v=>U.__users_to_extend=v,v=>e(n).actionAddUsersToExtend(U,b)],label:"select-employees-in-business-trip",options:U.__users,searchable:!1,placeholder:"select-employees","show-nested-error":p.value,disabled:m.formType===e(De),allSelectable:""},null,8,["modelValue","onUpdate:modelValue","options","show-nested-error","disabled"])]),_:2},1024),t(c,{"col-class":"w-full"},{default:u(()=>[(h(!0),C(J,null,de(U.__notices_to_change,(v,R)=>(h(),W(f,null,{default:u(()=>[t(c,{"col-class":"w-1/3"},{default:u(()=>{var V;return[y("span",Nn,j(e(_)("employees-in-business-trip")),1),t(nt,{label:(V=v.user)==null?void 0:V.full_name,class:"w-fit mt-1"},null,8,["label"])]}),_:2},1024),t(c,{"col-class":"w-1/3"},{default:u(()=>[y("span",Mn,j(e(_)("trip-place")),1),y("div",In,[(h(!0),C(J,null,de(v.__regions,V=>(h(),W(nt,{key:v.id,label:V.name_uz,type:"location",class:"w-fit"},null,8,["label"]))),128))])]),_:2},1024),t(c,{"col-class":"w-1/3"},{default:u(()=>[y("div",On,[y("div",null,[y("span",Pn,j(e(_)("end-date")),1),t(nt,{label:v.__end_date,type:"other",class:"w-fit mt-1"},null,8,["label"])])])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]))),256))]),_:1}),t(c,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":q[2]||(q[2]=U=>e(n).model.__approvers=U),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(c,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":q[3]||(q[3]=U=>e(s).__signers.$model=U),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(c,{"col-class":"w-full"},{default:u(()=>[y("div",{class:Ne(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(n).model.content?"border-critic-500":"border-greyscale-200"])},[y("div",Bn,j(e(_)("notice")),1),t($e,{modelValue:e(s).content.$model,"onUpdate:modelValue":q[4]||(q[4]=U=>e(s).content.$model=U),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),y("div",An,[t(w,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(w,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:q[5]||(q[5]=U=>L({value:e(Qe)}))})])],64)):((P=e(d).query)==null?void 0:P.step)==="decree"?(h(),W(e(Dt),{key:1,"form-type":m.formType},null,8,["form-type"])):oe("",!0)])]}),_:1},8,["title"])),t(Sn,{modelValue:e(n).changingBTDialog,"onUpdate:modelValue":q[6]||(q[6]=D=>e(n).changingBTDialog=D)},null,8,["modelValue"])],2)}}},ra={__name:"PowerOfAttorneySecondForm",props:{formType:{type:String,default:G}},setup(m){const n=pe(),r=ue(),o=ie(),s=Rt(),d=ce(),{t:a}=ne(),_=le(s.secondRules,s.model),l=m,p=Z(!1),x=Z(!1),T=Z([]),I=ee(()=>l.formType===G?"create-poa":"update-poa");ee(()=>s.model.start_date?new Date(s.model.start_date):new Date);const L=async()=>{var g,f,w,D,P,U,b,v,R,V,N,X,B,Y,z,ke,fe,Ze,et,_t;if(x.value=!0,!!await _.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=te(s.model.__approvers),s.model.signers=te(s.model.__signers),s.model.curator=(f=(g=s==null?void 0:s.model)==null?void 0:g.__curator)==null?void 0:f.user_id,s.model.user=(D=(w=s==null?void 0:s.model)==null?void 0:w.__user)==null?void 0:D.id,s.model.journal=se.POWER_OF_ATTORNEY,s.model.company=(U=(P=o.currentUser)==null?void 0:P.company)==null?void 0:U.id,s.model.sender=(v=(b=o==null?void 0:o.currentUser)==null?void 0:b.top_level_department)==null?void 0:v.id,s.model.document_type=n.params.document_type,s.model.document_sub_type=n.params.document_sub_type,s.model.parent=(V=(R=s.model)==null?void 0:R.__parent)==null?void 0:V.id,!((X=(N=s==null?void 0:s.model)==null?void 0:N.__user)!=null&&X.passport_seria||(Y=(B=s==null?void 0:s.model)==null?void 0:B.__user)!=null&&Y.passport_number||(ke=(z=s==null?void 0:s.model)==null?void 0:z.__user)!=null&&ke.passport_issue_date||(Ze=(fe=s==null?void 0:s.model)==null?void 0:fe.__user)!=null&&Ze.passport_issued_by)){F(null,`${(_t=(et=s.model)==null?void 0:et.__user)==null?void 0:_t.full_name}: ${a("passport-details-error")}`,A.WARNING);return}p.value=!0}},M=()=>{},O=async()=>{const c=await s.actionCreateDocument(s.model);await d.actionCountList(),c?(p.value=!1,F(null,a("document-sent"),A.SUCCESS),await r.replace({name:Be,query:{document_type:ae.POWER_OF_ATTORNEY}})):F(null,a("error-occurred"),A.ERROR)},$=async()=>{await s.actionUpdateDocument({id:n.params.id,body:s.model}),await d.actionCountList(),F(null,a("changed"),A.SUCCESS),await r.replace({name:Re,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},q=()=>{l.formType===G?O():$()},k=c=>{s.model.__files=[],c.forEach(g=>{s.model.__files.push(g)})},i=async c=>{const{data:g}=await Vt({user:c.id,document_sub_type:n.params.document_sub_type,status:5});T.value=g.results};return We(async()=>{if(n.params.id){const c=await s.actionGetDocumentDetailForUpdate(n.params.id);c.parent&&(T.value=[c.parent])}}),Ue(()=>{je(s.model)}),(c,g)=>{const f=ve,w=_e,D=Oe,P=Je,U=me;return e(s).detailLoading?(h(),W(f,{key:0})):(h(),C(J,{key:1},[t(e(Ve),{title:I.value},{content:u(()=>[t(Ae,{"onEmit:preview":L,"onEmit:clearForm":M},{default:u(()=>[t(U,null,{default:u(()=>[t(w,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":g[0]||(g[0]=b=>e(_).__curator.$model=b),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(w,{"col-class":"w-1/2"},{default:u(()=>[t(we,{modelValue:e(_).__user.$model,"onUpdate:modelValue":g[1]||(g[1]=b=>e(_).__user.$model=b),error:e(_).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":g[2]||(g[2]=b=>i(b))},null,8,["modelValue","error"])]),_:1}),t(w,{"col-class":"w-full"},{default:u(()=>[y("div",{class:Ne(["border-[1.5px] rounded-2xl px-5 py-4",x.value&&!e(s).model.content?"border-critic-500":"border-greyscale-200"])},[t($e,{modelValue:e(_).content.$model,"onUpdate:modelValue":g[3]||(g[3]=b=>e(_).content.$model=b),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).model.__files,"onEmit:fileUpload":k},null,8,["modelValue","error","files"]),t(e(ko),{"onEmit:selected":g[4]||(g[4]=b=>e(s).model.content=b)})],2)]),_:1}),t(w,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":g[5]||(g[5]=b=>e(s).model.__approvers=b),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(w,{"col-class":"w-1/2"},{default:u(()=>[t(K,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":g[6]||(g[6]=b=>e(_).__signers.$model=b),error:e(_).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(w,{"col-class":"w-1/2"},{default:u(()=>[t(D,{modelValue:e(_).short_description.$model,"onUpdate:modelValue":g[7]||(g[7]=b=>e(_).short_description.$model=b),error:e(_).short_description,required:"",label:"basis",placeholder:"enter-basis"},null,8,["modelValue","error"])]),_:1}),t(w,{"col-class":"w-1/2"},{default:u(()=>[t(P,{modelValue:e(s).model.__parent,"onUpdate:modelValue":g[8]||(g[8]=b=>e(s).model.__parent=b),options:T.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Le,{modelValue:p.value,"onUpdate:modelValue":g[9]||(g[9]=b=>p.value=b),"send-button-loading":e(s).buttonLoading,"onEmit:send":q},{content:u(()=>[t(xt,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{Xr as _,Jr as a,Zr as b,ea as c,oa as d,la as e,na as f,ra as g,Kr as h,Qr as i,ta as j};
