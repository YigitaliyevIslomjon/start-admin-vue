import{_ as _e}from"./BaseRow.d9c7d968.6746.js";import{_ as Ae}from"./BaseInput.ca1c40b6.6746.js";import{_ as fe}from"./BaseCol.a42d6c26.6746.js";import{v as J,bb as nt,a1 as et,o as w,c as S,i as l,z as c,h as e,b8 as Ze,d as ee,du as ze,a as b,t as I,F as Q,e as de,a3 as ne,g as re,f as F,B as Tt,dz as Lt,bj as Dt,n as Oe,r as yt,G as De,as as xe,cN as ae,cO as Z,cl as se,u as le,b as ue,ao as pe,be as Re,a5 as A,ac as we,a8 as Rt,cY as Qe,dA as Mt,_ as me,dB as Nt,dC as Pt,dD as Ot,dE as It,dF as At,$ as Bt,dG as jt,dH as zt,aX as wt,bt as Ye,c1 as He,dI as Ft,ds as at,E as Gt,cI as Wt,cR as Yt,aE as Ht}from"./index.e72fa3e7.7480.js";import{c as V,r as C,u as te}from"./index.2d90abb8.6746.js";import{_ as Xt,a as Kt}from"./BranchMultiSelect.64c734c0.6746.js";import{j as Qt,k as Jt,l as Zt,_ as $e,a as eo,h as to,g as oo,b as lo,c as no,d as ro,e as vt,i as ao,m as so,f as io}from"./BasePOA.6d8c95e7.6746.js";import"./BaseTabMenu.05472c16.6746.js";import"./dialog.esm.d53c9958.6746.js";import"./tabpanel.esm.75381044.6746.js";import"./FileSaver.min.246152ca.6746.js";import{X as _t,s as Te,V as Y,Y as co,Z as Fe,_ as oe,$ as Le,a0 as ft,a1 as st,a2 as We,O as lt}from"./index.76d56af2.6746.js";import"./BaseTabView.dcc8932c.6746.js";import"./FileTabs.f1b2197d.6746.js";import{_ as H}from"./UserMultiSelect.94f3b10d.6746.js";import{c as uo,u as ie,w as Ve,d as B}from"./axios.config.a9c6f9ae.6746.js";import{u as ye}from"./common.4fc5ce86.6746.js";import{u as ce}from"./count.store.0ab99b59.6746.js";import{u as dt,b as Ue,c as qe,d as Ee,e as po,f as kt}from"./index.store.6f9c6bdf.6746.js";import{d as qt,e as Be,c as Me,f as be,B as Je,g as Xe,h as Ke,i as mo,j as xt,M as it,O as _o,T as fo,k as ct,l as $t,C as qo,P as go,m as bo}from"./index.3493ff30.6746.js";import{F as j,a as Se}from"./constants.50c90617.6746.js";import{_ as tt}from"./BaseDropdown.a585f142.6746.js";import{_ as Ge}from"./BaseCalendar.a208552e.6746.js";import{_ as rt}from"./BaseMultiSelect.e0ef9674.6746.js";import{f as ho,a as ge}from"./formatDate.d91e7ec3.6746.js";import{Q as gt}from"./qrcode.vue.esm.2d2980fc.6746.js";import"./divider.esm.51ccea7f.6746.js";import"./dayjs.min.15202202.6746.js";/* empty css                                                                                         */import{c as yo}from"./Dropdown.6e9c03c4.6746.js";import"./menu.esm.bc5eac67.6746.js";/* empty css                                                      */import"./avatar.esm.709abe87.6746.js";/* empty css                                                      */import"./businessTrip.store.ffb37d44.6746.js";/* empty css                                                            */import"./accordiontab.esm.375dc8ee.6746.js";import"./common.store.1a56fc73.6746.js";import{_ as he}from"./WithRadio.bd4dcf0a.6746.js";import"./radiobutton.esm.b6956f77.6746.js";import"./checkbox.esm.5cd46a31.6746.js";import"./index.es6.f9050ba3.6746.js";import{_ as Vt}from"./ShortDescription.5b5c11a7.6746.js";import{_ as bt}from"./BaseBrickRadio.60701797.6746.js";import{_ as wo}from"./BaseLabel.64c1c0d1.6746.js";import{K as vo}from"./main.b58a1311.6746.js";import{a as ko}from"./index.6875a6e0.6746.js";import{_ as xo}from"./WithSelectable.183b5b50.6746.js";import{_ as $o}from"./BaseBrickTab.a467d3e6.6746.js";import{_ as Vo}from"./BaseFileUpload.7c334e32.6746.js";import{_ as Uo}from"./BaseFroalaEditor.1db3705e.6746.js";import"./BaseCalendar.vue_vue_type_style_index_0_lang.3166dab7.6746.js";import"./multiselect.esm.3ca9e81a.6746.js";/* empty css                                                             */import"./dropdown.esm.12a95bac.6746.js";/* empty css                                                          */import"./textarea.esm.40b8b69e.6746.js";import"./overlaypanel.esm.3e309665.6746.js";/* empty css                                                              */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang.489fb8a1.6746.js";/* empty css                                                                            */import"./review.store.da8700cc.6746.js";/* empty css                                                       */import{_ as Ut}from"./BaseDialog.423aeb91.6746.js";const Eo={class:"user-select"},ke={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(u,{emit:a}){const t=u,o=J([]),g=nt(t,"modelValue"),s=async r=>{let{data:_}=await uo.get(`${t.apiUrl}/`,r);_.hasOwnProperty("results")?o.value=_.results:o.value=_};return et(async()=>{await s(t.apiParams)}),(r,_)=>(w(),S("div",Eo,[l(tt,{modelValue:e(g),"onUpdate:modelValue":_[0]||(_[0]=n=>Ze(g)?g.value=n:null),options:o.value,"onUpdate:options":_[1]||(_[1]=n=>o.value=n),error:t.error,"api-url":t.apiUrl,"api-params":t.apiParams,"option-label":"full_name",label:t.label,placeholder:t.placeholder,required:t.required,searchable:"","onEmit:change":_[2]||(_[2]=n=>a("emit:change",n))},{option:c(({option:n})=>[l(e(xo),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},Co={class:"business-trip-decree-template-view letter-template"},So={class:"flex flex-col text-sm font-medium mt-4"},To=b("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),Lo=["innerHTML"],Do=["innerHTML"],Ro={class:"employees-table text-sm mt-4"},Mo={class:"w-full"},No=b("tr",{class:"text-center"},[b("td",{class:"border-2 p-1"},"№"),b("td",{class:"border-2 p-1"},"F.I.SH"),b("td",{class:"border-2 p-1"},"Departament va lavozim"),b("td",{class:"border-2 p-1"},"Yo'nalish"),b("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Po={class:"text-center"},Oo={class:"border-2 p-1"},Io={class:"border-2 p-1"},Ao={class:"border-2 p-1"},Bo=b("br",null,null,-1),jo={class:"border-2 p-1"},zo={class:"flex flex-col gap-y-1"},Fo={key:0},Go={class:"border-2 p-1 w-[100px]"},Wo=b("br",null,null,-1),Yo={class:"indent-8 mt-2 text-sm text-justify"},Ho=b("div",null,"xizmat safariga yuborilsin.",-1),Xo=b("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Ko=b("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),Qo=b("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Jo={key:0},Zo=b("span",{class:"font-semibold"},"Asos: ",-1),el=b("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),tl=b("div",null," O‘zR MKning 287-moddasi; ",-1),ol=b("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),ll={class:"mt-6 pb-2 px-4"},nl={class:"text-sm font-semibold block"},rl={class:"text-sm font-semibold block"},al={class:"text-sm font-semibold block"},sl={class:"text-sm font-semibold block"},il={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(u){const a=u,t=dt(),o=ee(()=>{var _;return a.preview?ie().currentUser:(_=a.composeModel)==null?void 0:_.author}),g=ee(()=>{var _,n,p;return a.preview?(_=a.composeModel)==null?void 0:_.__employees.map(x=>({empFullName:x.full_name,empDepName:x.top_level_department.name,empPositionName:x.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(p=(n=a.composeModel)==null?void 0:n.notices)==null?void 0:p.map(x=>({empFullName:x.user.full_name,empDepName:x.user.top_level_department.name,empPositionName:x.user.position.name,destinations:x.destinations,startDate:x.start_date,endDate:x.end_date}))}),s=ee(()=>{var n,p,x;if(a.preview)return[(n=a.composeModel)==null?void 0:n.__curator];const _=(p=a.composeModel)==null?void 0:p.signers.find(T=>T.type===ze.BASIC_SIGNER);return _?[_]:[(x=a.composeModel)==null?void 0:x.curator].filter(Boolean)}),r=ee(()=>{var _,n;return a.preview?(_=a.composeModel)==null?void 0:_.__signers:(n=a.composeModel)==null?void 0:n.signers.filter(p=>p.type===ze.SIGNER)});return(_,n)=>{var T,M,L,N,D,h,m,k;const p=fe,x=_e;return w(),S("div",Co,[l(e(Qt)),l(e(Jt),{"dep-name":(M=(T=o.value)==null?void 0:T.top_level_department)==null?void 0:M.name},null,8,["dep-name"]),b("div",So,[b("span",null," № "+I((L=a.composeModel)==null?void 0:L.register_number),1),b("span",null,I(((N=a.composeModel)==null?void 0:N.register_date)&&e(ho)((D=a.composeModel)==null?void 0:D.register_date)),1)]),To,e(t).historyShow?(w(),S("div",{key:0,class:"text-justify",innerHTML:e(t).historyContent},null,8,Lo)):(w(),S("div",{key:1,class:"text-justify",innerHTML:(h=a.composeModel)==null?void 0:h.content},null,8,Do)),b("div",Ro,[b("table",Mo,[No,g.value&&g.value.length?(w(!0),S(Q,{key:0},de(g.value,(i,d)=>(w(),S("tr",Po,[b("td",Oo,I(d+1),1),b("td",Io,I(i.empFullName),1),b("td",Ao,[ne(I(i.empDepName)+" ",1),Bo,ne(" "+I(i.empPositionName),1)]),b("td",jo,[b("div",zo,[(w(!0),S(Q,null,de(i.destinations,(v,f)=>(w(),S("span",null,[ne(I(v.name)+" ",1),f!==i.destinations.length-1?(w(),S("span",Fo,",")):re("",!0)]))),256))])]),b("td",Go,[ne(I(i.startDate)+" ",1),Wo,ne(" "+I(i.endDate),1)])]))),256)):re("",!0)])]),b("div",Yo,[Ho,Xo,Ko,Qo,(m=u.composeModel)!=null&&m.trip_notice_register_number?(w(),S("div",Jo,[Zo,ne(I((k=u.composeModel)==null?void 0:k.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):re("",!0),el,tl,ol]),b("div",ll,[(w(!0),S(Q,null,de(s.value,i=>(w(),F(x,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(p,{"col-class":"w-1/3"},{default:c(()=>[b("span",nl,I(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(w(),F(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):re("",!0)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[b("span",rl,I(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(w(!0),S(Q,null,de(r.value,i=>(w(),F(x,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(p,{"col-class":"w-1/3"},{default:c(()=>[b("span",al,I(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(w(),F(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):re("",!0)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[b("span",sl,I(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),l(e(Zt),{"compose-model":a.composeModel,author:o.value},null,8,["compose-model","author"])])}}};var dl=`
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
`,cl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Tt.extend({name:"editor",css:dl,classes:cl});(function(){try{return window.Quill}catch{return null}})();const Ce={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(u){return["froala","tiny"].includes(u)}}},emits:["update:modelValue","emit:fileUpload"],setup(u,{emit:a}){const t=u,o=nt(t,"modelValue"),g=J([{title:"text",slot:"editor",icon:Lt},{title:"file",slot:"file",icon:Dt}]);return(s,r)=>(w(),F($o,{"tab-panel-list":g.value,"panel-container-class":"px-0"},{editor:c(()=>[u.editor==="froala"?(w(),F(Uo,{key:0,modelValue:e(o),"onUpdate:modelValue":r[0]||(r[0]=_=>Ze(o)?o.value=_:null)},null,8,["modelValue"])):(w(),F(yo,{key:1,modelValue:e(o),"onUpdate:modelValue":r[1]||(r[1]=_=>Ze(o)?o.value=_:null)},null,8,["modelValue"]))]),file:c(()=>[b("div",{class:Oe(t.fileUploadContainerClasses)},[l(Vo,{files:t.files,"onEmit:fileUpload":r[2]||(r[2]=_=>a("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ul={class:"flex flex-col justify-between h-full"},pl={class:"px-6 py-4 overflow-y-auto"},ml={class:"actions p-6"},je={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(u,{emit:a}){return(t,o)=>{const g=De;return w(),S("div",ul,[b("div",pl,[yt(t.$slots,"default")]),b("div",ml,[l(g,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:o[0]||(o[0]=s=>a("emit:clearForm"))}),l(g,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:o[1]||(o[1]=s=>a("emit:preview"))})])])}}},_l=xe("sd-stores-inner",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,document_type:ae.INNER,document_sub_type:Z.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:se.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:V.withMessage("Поле не должен быть пустым",C)},content:{required:V.withMessage("Поле не должен быть пустым",C)},__departments:{required:V.withMessage("Поле не должен быть пустым",C)},__approvers:{},__signers:{required:V.withMessage("Поле не должен быть пустым",C)}}}},actions:{async actionCreateDocument(u){let a={...u,type:qt,sub_type:qt};this.buttonLoading=!0;const{response:t,error:o}=await Ve(Ee,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):Promise.reject(o)},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers),this.model.__departments=await co(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),fl={class:"font-semibold text-xl"},Ne={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(u,{emit:a}){const o=nt(u,"modelValue"),{t:g}=le();return(s,r)=>{const _=De,n=Ut;return w(),F(n,{modelValue:e(o),"onUpdate:modelValue":r[1]||(r[1]=p=>Ze(o)?o.value=p:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[b("span",fl,I(e(g)("preview")),1)]),content:c(()=>[yt(s.$slots,"content")]),footer:c(()=>[l(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(_,{label:u.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:u.sendButtonLoading,onClick:r[0]||(r[0]=p=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},ca={__name:"InnerForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ie(),o=_l();ye();const g=ce(),s=J(!1);J(null);const{t:r}=le(),_=ue(),n=pe(),p=te(o.rules,o.model),x=async()=>{await p.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.departments=[],o.model.departments=o.model.__departments.map(m=>m.id),o.model.files=[],o.model.files=o.model.__files.map(m=>({id:m.id})),o.model.journal=se.INNER,o.model.sender=t.currentUser.top_level_department.id,o.model.approvers=oe(o.model.__approvers),o.model.signers=oe(o.model.__signers),o.model.document_type=n.params.document_type,o.model.document_sub_type=n.params.document_sub_type,o.model.receiver&&delete o.model.receiver)},T=()=>{a.formType===j?M():L()},M=async()=>{const h=await o.actionCreateDocument(o.model);await g.actionCountList(),h?(s.value=!1,B(null,r("document-sent"),A.SUCCESS),await _.replace({name:Be,query:{document_type:ae.INNER}})):B(null,r("error-occurred"),A.ERROR)},L=async()=>{await o.actionUpdateDocument({id:n.params.id,body:o.model}),await g.actionCountList(),B(null,r("document-sent"),A.SUCCESS),await _.replace({name:Me,params:{id:n.params.id,document_type:ae.INNER,document_sub_type:Z.SERVICE_LETTER}})},N=()=>{console.log("Clear Form")},D=h=>{o.model.__files=[],h.forEach(m=>{o.model.__files.push(m)})};return et(async()=>{n.params.id&&await o.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Fe(o.model)}),(h,m)=>{const k=we,i=fe,d=Ae,v=_e;return e(o).detailLoading?(w(),F(k,{key:0})):(w(),S(Q,{key:1},[l(e($e),{title:a.formType===e(j)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[l(je,{"onEmit:preview":x,"onEmit:clearForm":N},{default:c(()=>[l(v,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(Xt,{modelValue:e(p).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(p).__departments.$model=f),error:e(p).__departments},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=f=>e(p).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Ce,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[4]||(m[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=f=>s.value=f),"send-button-loading":e(o).buttonLoading,"onEmit:send":T},{content:c(()=>{var f,U;return[l(eo,{"compose-model":{...e(o).model,signers:e(o).model.__signers,approvers:e(o).model.__approvers,author:e(o).model.__signers[0],sender:{name:(U=(f=e(t).currentUser)==null?void 0:f.top_level_department)==null?void 0:U.name},receiver:{departments:e(o).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},ql=xe("sd-store-application",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{}}}},actions:{async actionCreateDocument(u){let a={...u};this.buttonLoading=!0;const{response:t,error:o}=await Ve(Ee,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers.filter(t=>t.type===ze.SIGNER)),this.model.__curator=await Le([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Et=xe("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:ie().currentUser.company.id,curator:null,document_type:ae.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:se.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:V.withMessage("Поле не должен быть пустым",C)},register_date:{required:V.withMessage("Поле не должен быть пустым",C)},content:{required:V.withMessage("Поле не должен быть пустым",C)},__negotiators:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ee,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__signers=await Y(a.signers.filter(t=>t.type!==ze.NEGOTIATOR)),this.model.__negotiators=await Y(a.signers.filter(t=>t.type===ze.NEGOTIATOR)),this.model.__approvers=await Y(a.approvers),this.model.__curator=await Le([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),ua={__name:"ApplicationForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ie(),o=ql();ye();const g=ce();Et();const s=J(!1);J(null);const{t:r}=le(),_=ue(),n=pe(),p=te(o.rules,o.model),x=ee(()=>n.params.document_sub_type===Z.EXPLANATION_LETTER?a.formType===j?"create-explanation-letter":"update-explanation-letter":a.formType===j?"create-sd-application":"update-sd-application"),T=async()=>{var k,i,d,v,f;await p.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.signers=[{user:(k=t==null?void 0:t.currentUser)==null?void 0:k.id}],o.model.sender=(d=(i=t==null?void 0:t.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,o.model.curator=(f=(v=o==null?void 0:o.model)==null?void 0:v.__curator)==null?void 0:f.user_id,o.model.journal=se.APPLICATION,o.model.document_type=n.params.document_type,o.model.document_sub_type=n.params.document_sub_type,o.model.approvers=oe(o.model.__approvers))},M=async()=>{},L=()=>{a.formType===j?N():D()},N=async()=>{const m=await o.actionCreateDocument(o.model);await g.actionCountList(),m?(s.value=!1,B(null,r("document-sent"),A.SUCCESS),await _.replace({name:Be,query:{document_type:ae.APPLICATION}})):B(null,r("error-occurred"),A.ERROR)},D=async()=>{await o.actionUpdateDocument({id:n.params.id,body:o.model}),await g.actionCountList(),B(null,r("document-sent"),A.SUCCESS),await _.replace({name:Me,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},h=m=>{o.model.__files=[],m.forEach(k=>{o.model.__files.push(k)})};return et(async()=>{n.params.id&&await o.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Fe(o.model)}),(m,k)=>{const i=we,d=fe,v=_e;return e(o).detailLoading?(w(),F(i,{key:0})):(w(),S(Q,{key:1},[l(e($e),{title:x.value},{content:c(()=>[l(je,{"onEmit:preview":T,"onEmit:clearForm":M},{default:c(()=>[l(v,null,{default:c(()=>[l(d,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":k[0]||(k[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":k[1]||(k[1]=f=>e(o).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":k[2]||(k[2]=f=>e(p).__signers.$model=f),disabled:"",label:"signers",placeholder:e(t).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),l(d,{"col-class":"w-full"},{default:c(()=>[l(Ce,{modelValue:e(p).content.$model,"onUpdate:modelValue":k[3]||(k[3]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":h},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:s.value,"onUpdate:modelValue":k[4]||(k[4]=f=>s.value=f),"send-button-loading":e(o).buttonLoading,"onEmit:send":L},{content:c(()=>[l(to,{"compose-model":{...e(o).model,curator:e(o).model.__curator,author:a.formType===e(j)?e(t).currentUser:e(o).model.__signers[0].user,signers:a.formType===e(j)?[e(t).currentUser]:e(o).model.__signers},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=xe("sd-notice-store",{state:()=>(ie(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:ae.NOTICE,document_sub_type:Z.BUSINESS_TRIP,journal:se.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:V.withMessage("Поле не должен быть пустым",C)},start_date:{required:V.withMessage("Поле не должен быть пустым",C)},route:{required:V.withMessage("Поле не должен быть пустым",C)},content:{required:V.withMessage("Поле не должен быть пустым",C)},__companies:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__employees:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},__tags:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ee,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a=!1){try{this.detailLoading=!0;const{data:t}=await qe(u);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Le([],t.curator.id,!1),this.model.__employees=await Y(t.notices),a?(this.model.__approvers=await Y(t.approvers.filter(o=>{var g,s;return((g=o==null?void 0:o.user)==null?void 0:g.id)!==((s=t==null?void 0:t.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers),this.model.__companies=await ft(t.notices[0].destinations),this.model.__tags=await st(t.tags),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(u,a){try{this.detailLoading=!0;const{data:t}=await qe(u),o=await qe(a);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Le([],t.curator.id,!1),this.model.__employees=await Y(o.data.notices),this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers),this.model.__companies=await ft(o.data.notices[0].destinations),this.model.__tags=await st(t.tags),this.model.start_date=o.data.notices[0].start_date,this.model.end_date=o.data.notices[0].end_date,this.model.__tags=t.tags,this.model.route=o.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),bl={class:"flex w-full gap-x-4"},pa={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=le(),o=pe(),g=ue(),s=ie(),r=gl(),_=ce();ye();const n=te(r.rules,r.model),p=J(!1),x=ee(()=>{const i=a.formType===j,d=o.params.document_sub_type;return d===Z.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":d===Z.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),T=ee(()=>{var i,d;return o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL&&((i=o==null?void 0:o.query)==null?void 0:i.compose_id)&&((d=o==null?void 0:o.query)==null?void 0:d.document_sub_type)===Z.BUSINESS_TRIP}),M=ee(()=>{var i;return!!(o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL&&((i=r==null?void 0:r.model)!=null&&i.trip_notice_id))});Rt(()=>r.model.__tags,i=>{if(a.formType===j)if(i&&i.length){let d=`${i.map(v=>v.name_uz).join(", ")} yuzasidan`;r.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else r.model.short_description=null});const L=async()=>{var d,v,f,U,O;await n.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=oe(r.model.__approvers),r.model.signers=oe(r.model.__signers),r.model.curator=(v=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:v.user_id,r.model.journal=o.params.document_type===ae.DECREE||o.params.document_type===ae.ORDER?se.ORDERS_PROTOCOLS:se.INNER,r.model.company=s.currentUser.company.id,r.model.notices=r.model.__employees.map($=>({start_date:r.model.start_date,end_date:r.model.end_date,user:$.id,route:r.model.route,companies:r.model.__companies.map(y=>y.id)})),r.model.sender=(U=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:U.id,r.model.tags=r.model.__tags.map($=>({id:$.id})),r.model.files=r.model.__files.map($=>({id:$.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,T.value&&(r.model.trip_notice_id=(O=o==null?void 0:o.query)==null?void 0:O.compose_id),p.value=!0)},N=()=>{},D=i=>{r.model.__files=[],i.forEach(d=>{r.model.__files.push(d)})},h=async()=>{T.value&&(r.model.notices=[]);const i=await r.actionCreateDocument(r.model);await _.actionCountList(),i?(p.value=!1,B(null,t("document-sent"),A.SUCCESS),await g.replace({name:Be,query:{document_type:o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL?ae.DECREE:o.params.document_sub_type===Z.BUSINESS_TRIP_ORDER_LOCAL?ae.ORDER:ae.NOTICE}})):B(null,t("error-occurred"),A.ERROR)},m=async()=>{(T.value||M.value)&&(r.model.notices=[]),await r.actionUpdateDocument({id:o.params.id,body:r.model}),await _.actionCountList(),B(null,t("changed"),A.SUCCESS),await g.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},k=()=>{a.formType===j?h():m()};return Qe(async()=>{o.params.id&&o.query.trip_notice_id&&o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL?await r.actionGetDocumentDetailForUpdateForCustomUse(o.params.id,o.query.trip_notice_id):o.params.id?await r.actionGetDocumentDetailForUpdate(o.params.id):T.value&&await r.actionGetDocumentDetailForUpdate(o.query.compose_id,!0)}),Re(()=>{Fe(r.model)}),(i,d)=>{const v=we,f=fe,U=Ge,O=tt,$=Ae,y=_e;return e(r).detailLoading?(w(),F(v,{key:0})):(w(),S(Q,{key:1},[l(e($e),{title:x.value},{content:c(()=>[l(je,{"onEmit:preview":L,"onEmit:clearForm":N},{default:c(()=>[l(y,null,{default:c(()=>[l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=q=>e(n).__curator.$model=q),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=q=>e(n).__employees.$model=q),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:T.value||M.value},null,8,["modelValue","error","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(Kt,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=q=>e(n).__companies.$model=q),error:e(n).__companies,"text-truncate":"",disabled:T.value||M.value},null,8,["modelValue","error","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(rt,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=q=>e(n).__tags.$model=q),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:q})=>[ne(I(q.name),1)]),option:c(({value:q})=>[l(e(he),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[b("div",bl,[l(U,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=q=>e(n).start_date.$model=q),d[5]||(d[5]=q=>e(n).start_date.$model=e(ge)(q))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:T.value||M.value},null,8,["modelValue","error","min-date","disabled"]),l(U,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=q=>e(n).end_date.$model=q),d[7]||(d[7]=q=>e(n).end_date.$model=e(ge)(q))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:T.value||M.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(O,{modelValue:e(n).route.$model,"onUpdate:modelValue":d[8]||(d[8]=q=>e(n).route.$model=q),error:e(n).route,options:e(Mt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:T.value||M.value},null,8,["modelValue","error","options","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=q=>e(r).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=q=>e(n).__signers.$model=q),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l($,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=q=>e(n).short_description.$model=q),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-full"},{default:c(()=>[l(Ce,{modelValue:e(n).content.$model,"onUpdate:modelValue":d[12]||(d[12]=q=>e(n).content.$model=q),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:p.value,"onUpdate:modelValue":d[13]||(d[13]=q=>p.value=q),"send-button-loading":e(r).buttonLoading,"onEmit:send":k},{content:c(()=>[e(o).params.document_sub_type===e(Z).BUSINESS_TRIP_DECREE_LOCAL?(w(),F(e(il),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(o).params.document_sub_type===e(Z).BUSINESS_TRIP_ORDER_LOCAL?(w(),F(e(oo),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(w(),F(e(lo),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},ma={__name:"OrderForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=Et(),o=ce(),g=ie(),s=pe(),r=ue(),_=te(t.rules,t.model),{t:n}=le(),p=J(!1),x=async()=>{var m,k,i,d;await _.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.approvers=oe(t.model.__approvers),t.model.curator=(k=(m=t==null?void 0:t.model)==null?void 0:m.__curator)==null?void 0:k.user_id,t.model.sender=(d=(i=g==null?void 0:g.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,t.model.files=t.model.__files.map(v=>({id:v.id})),t.model.document_type=s.params.document_type,t.model.document_sub_type=s.params.document_sub_type,t.model.journal=se.ORDERS_PROTOCOLS,t.model.register_date=ge(t.model.register_date),t.model.__negotiators.forEach(v=>{t.model.signers.push(v.hasOwnProperty("user")?{id:v.id,user:v.user.id,type:ze.NEGOTIATOR}:{user:v.id,type:ze.NEGOTIATOR})}),s.query.compose_id&&(t.model.trip_notice_id=s.query.compose_id),p.value=!0)},T=()=>{},M=async()=>{try{const h=await t.actionCreateDocument(t.model);await o.actionCountList(),h&&(p.value=!1,B(null,n("document-sent"),A.SUCCESS),await r.replace({name:Be,query:{document_type:ae.ORDER}}))}catch{B(null,n("error-occurred"),A.ERROR)}},L=async()=>{try{const h=await t.actionUpdateDocument({id:s.params.id,body:t.model});await o.actionCountList(),B(null,n("changed"),A.SUCCESS),await r.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{B(null,n("error-occurred"),A.ERROR)}},N=()=>{a.formType===j?M():L()},D=h=>{t.model.__files=[],h.forEach(m=>{t.model.__files.push(m)})};return et(async()=>{s.params.id&&await t.actionGetDocumentDetailForUpdate(s.params.id)}),Re(()=>{Fe(t.model)}),(h,m)=>{const k=we,i=fe,d=Ae,v=Ge,f=_e;return e(t).detailLoading?(w(),F(k,{key:0})):(w(),S(Q,{key:1},[l(e($e),{title:a.formType===e(j)?"create-order":"update-order"},{content:c(()=>[l(je,{"onEmit:preview":x,"onEmit:clearForm":T},{default:c(()=>[l(f,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=U=>e(_).__curator.$model=U),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=U=>e(_).register_number.$model=U),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(v,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=U=>e(_).register_date.$model=U),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=U=>e(t).model.__approvers=U),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=U=>e(_).__negotiators.$model=U),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Ce,{modelValue:e(_).content.$model,"onUpdate:modelValue":m[5]||(m[5]=U=>e(_).content.$model=U),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:p.value,"onUpdate:modelValue":m[6]||(m[6]=U=>p.value=U),"send-button-loading":e(t).buttonLoading,"onEmit:send":N},{content:c(()=>[l(e(no),{"compose-model":e(t).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},hl=xe("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ee,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers)}catch{}finally{this.detailLoading=!1}}}}),_a={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=le(),o=pe(),g=ue(),s=ie(),r=hl(),_=ce();ye();const n=J(!1),p=te(r.rules,r.model),x=async()=>{var m,k,i,d;await p.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=oe(r.model.__approvers),r.model.signers=oe(r.model.__signers),r.model.curator=(k=(m=r==null?void 0:r.model)==null?void 0:m.__curator)==null?void 0:k.user_id,r.model.journal=se.INNER,r.model.company=s.currentUser.company.id,r.model.sender=(d=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,r.model.files=r.model.__files.map(v=>({id:v.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,n.value=!0)},T=()=>{},M=h=>{r.model.__files=[],h.forEach(m=>{r.model.__files.push(m)})},L=async()=>{const h=await r.actionCreateDocument(r.model);await _.actionCountList(),h?(n.value=!1,B(null,t("document-sent"),A.SUCCESS),await g.replace({name:Be,query:{document_type:ae.NOTICE}})):B(null,t("error-occurred"),A.ERROR)},N=async()=>{await r.actionUpdateDocument({id:o.params.id,body:r.model}),await _.actionCountList(),B(null,t("changed"),A.SUCCESS),await g.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},D=()=>{a.formType===j?L():N()};return Qe(async()=>{o.params.id&&await r.actionGetDocumentDetailForUpdate(o.params.id)}),Re(()=>{Fe(r.model)}),(h,m)=>{const k=we,i=fe,d=Ae,v=_e;return e(r).detailLoading?(w(),F(k,{key:0})):(w(),S(Q,{key:1},[l(e($e),{title:a.formType===e(j)?"create-notice":"update-notice"},{content:c(()=>[l(je,{"onEmit:preview":x,"onEmit:clearForm":T},{default:c(()=>[l(v,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=f=>e(r).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Ce,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[4]||(m[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:n.value,"onUpdate:modelValue":m[5]||(m[5]=f=>n.value=f),"send-button-loading":e(r).buttonLoading,"onEmit:send":D},{content:c(()=>[l(e(ro),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},yl=xe("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionCreateDocument(u){const a={...u};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:t,error:o}=await Ve(Ee,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t={...a};delete t.bookings,delete t.notices,delete t.trip_plans;try{this.buttonLoading=!0;const{data:o}=await Ue({id:u,body:t});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){try{this.detailLoading=!0;const{data:t}=await qe(u);Te(this.model,t),this.model.__curator=await Le([],t.curator.id,!1),this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers)}catch{}finally{this.detailLoading=!1}}}}),fa={__name:"DecreeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=le(),o=pe(),g=ue(),s=ie(),r=ce();ye();const _=J(!1),n=yl(),p=dt(),x=te(n.rules,n.model),T=async()=>{var i,d,v,f;await x.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=oe(n.model.__approvers),n.model.signers=oe(n.model.__signers),n.model.curator=(d=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:d.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=s.currentUser.company.id,n.model.sender=(f=(v=s==null?void 0:s.currentUser)==null?void 0:v.top_level_department)==null?void 0:f.id,n.model.files=n.model.__files.map(U=>({id:U.id})),n.model.document_type=o.params.document_type,n.model.document_sub_type=o.params.document_sub_type,o.query.compose_id&&(n.model.trip_notice_id=o.query.compose_id),_.value=!0)},M=()=>{},L=k=>{n.model.__files=[],k.forEach(i=>{n.model.__files.push(i)})},N=async()=>{const k=await n.actionCreateDocument(n.model);await r.actionCountList(),k?(_.value=!1,B(null,t("document-sent"),A.SUCCESS),await g.replace({name:Be,query:{document_type:o.params.document_type}})):B(null,t("error-occurred"),A.ERROR)},D=async()=>{await n.actionUpdateDocument({id:o.params.id,body:n.model}),await r.actionCountList(),B(null,t("changed"),A.SUCCESS),await g.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},h=()=>{a.formType===j?N():D()},m=async k=>{const{data:i}=await p.actionGetDocumentDetail(k);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return Qe(async()=>{a.formType===j&&o.query.compose_id?await m(o.query.compose_id):a.formType===Se&&o.query.trip_notice_id&&o.params.id?(await n.actionGetDocumentDetailForUpdate(o.params.id,null),await m(o.query.trip_notice_id)):a.formType===Se&&o.params.id&&await n.actionGetDocumentDetailForUpdate(o.params.id,null)}),Re(()=>{Fe(n.model)}),(k,i)=>{const d=we,v=fe,f=Ae,U=_e;return e(n).detailLoading?(w(),F(d,{key:0})):(w(),S(Q,{key:1},[l(e($e),{title:a.formType===e(j)?"create-decree":"update-decree"},{content:c(()=>[l(je,{"onEmit:preview":T,"onEmit:clearForm":M},{default:c(()=>[l(U,null,{default:c(()=>[l(v,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(x).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=O=>e(x).__curator.$model=O),error:e(x).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(v,{"col-class":"w-1/2"},{default:c(()=>[l(f,{modelValue:e(x).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=O=>e(x).short_description.$model=O),error:e(x).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(v,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=O=>e(n).model.__approvers=O),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(v,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(x).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=O=>e(x).__signers.$model=O),error:e(x).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(v,{"col-class":"w-full"},{default:c(()=>[l(Ce,{modelValue:e(x).content.$model,"onUpdate:modelValue":i[4]||(i[4]=O=>e(x).content.$model=O),error:e(x).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:_.value,"onUpdate:modelValue":i[5]||(i[5]=O=>_.value=O),"send-button-loading":e(n).buttonLoading,"onEmit:send":h},{content:c(()=>[l(e(vt),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wl=xe("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:V.withMessage("Поле не должен быть пустым",C)},start_date:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},__user:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ee,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);return Te(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers),this.model.__user=await We("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),qa={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=pe(),o=ue(),g=ie(),s=wl();dt();const r=ce(),{t:_}=le(),n=te(s.rules,s.model),p=J(!1),x=J([]),T=ee(()=>a.formType===j?"create-poa":"update-poa"),M=ee(()=>s.model.start_date?new Date(s.model.start_date):new Date),L=async()=>{var d,v,f,U,O,$,y,q,E,W,R,X,K,P,G,z,Pe,ve,pt,mt;if(await n.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=oe(s.model.__approvers),s.model.signers=oe(s.model.__signers),s.model.curator=(v=(d=s==null?void 0:s.model)==null?void 0:d.__curator)==null?void 0:v.user_id,s.model.user=(U=(f=s==null?void 0:s.model)==null?void 0:f.__user)==null?void 0:U.id,s.model.journal=se.POWER_OF_ATTORNEY,s.model.company=($=(O=g.currentUser)==null?void 0:O.company)==null?void 0:$.id,s.model.sender=(q=(y=g==null?void 0:g.currentUser)==null?void 0:y.top_level_department)==null?void 0:q.id,s.model.document_type=t.params.document_type,s.model.document_sub_type=t.params.document_sub_type,s.model.content=".",s.model.parent=(W=(E=s.model)==null?void 0:E.__parent)==null?void 0:W.id,!((X=(R=s==null?void 0:s.model)==null?void 0:R.__user)!=null&&X.passport_seria||(P=(K=s==null?void 0:s.model)==null?void 0:K.__user)!=null&&P.passport_number||(z=(G=s==null?void 0:s.model)==null?void 0:G.__user)!=null&&z.passport_issue_date||(ve=(Pe=s==null?void 0:s.model)==null?void 0:Pe.__user)!=null&&ve.passport_issued_by)){B(null,`${(mt=(pt=s.model)==null?void 0:pt.__user)==null?void 0:mt.full_name}: ${_("passport-details-error")}`,A.WARNING);return}p.value=!0}},N=()=>{},D=async()=>{const i=await s.actionCreateDocument(s.model);await r.actionCountList(),i?(p.value=!1,B(null,_("document-sent"),A.SUCCESS),await o.replace({name:Be,query:{document_type:ae.POWER_OF_ATTORNEY}})):B(null,_("error-occurred"),A.ERROR)},h=async()=>{await s.actionUpdateDocument({id:t.params.id,body:s.model}),await r.actionCountList(),B(null,_("changed"),A.SUCCESS),await o.replace({name:Me,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},m=()=>{a.formType===j?D():h()},k=async i=>{const{data:d}=await po({user:i.id,document_sub_type:t.params.document_sub_type,status:5});x.value=d.results};return Qe(async()=>{if(t.params.id){const i=await s.actionGetDocumentDetailForUpdate(t.params.id);i.parent&&(x.value=[i.parent])}}),Re(()=>{Fe(s.model)}),(i,d)=>{const v=we,f=fe,U=Ge,O=tt,$=_e;return e(s).detailLoading?(w(),F(v,{key:0})):(w(),S(Q,{key:1},[l(e($e),{title:T.value},{content:c(()=>[l(je,{"onEmit:preview":L,"onEmit:clearForm":N},{default:c(()=>[l($,null,{default:c(()=>[l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=y=>e(n).__curator.$model=y),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__user.$model,"onUpdate:modelValue":d[1]||(d[1]=y=>e(n).__user.$model=y),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":d[2]||(d[2]=y=>k(y))},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(U,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[3]||(d[3]=y=>e(n).start_date.$model=y),d[4]||(d[4]=y=>e(n).start_date.$model=e(ge)(y))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(U,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[5]||(d[5]=y=>e(n).end_date.$model=y),d[6]||(d[6]=y=>e(n).end_date.$model=e(ge)(y))],error:e(n).end_date,"min-date":M.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":d[7]||(d[7]=y=>e(s).model.__approvers=y),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[8]||(d[8]=y=>e(n).__signers.$model=y),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(O,{modelValue:e(s).model.__parent,"onUpdate:modelValue":d[9]||(d[9]=y=>e(s).model.__parent=y),options:x.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:p.value,"onUpdate:modelValue":d[10]||(d[10]=y=>p.value=y),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:c(()=>[l(ao,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vl={class:"base-stepper-component flex items-center select-none"},kl=["onClick"],xl={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Ct={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(u,{emit:a}){const{t}=le(),o=g=>{a("emit:stepClick",g)};return(g,s)=>{const r=me;return w(),S("div",vl,[(w(!0),S(Q,null,de(u.items,(_,n)=>(w(),S("div",{key:_.id,class:"flex items-center"},[b("div",{class:Oe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",_.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:p=>o(_)},[l(r,{icon:_.icon,class:Oe(_.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),b("span",null,I(e(t)(_.label)),1)],10,kl),n<u.items.length-1?(w(),S("div",xl)):re("",!0)]))),128))])}}},Ie=xe("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList],__users_to_extend:null,__regions_to_extend:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:V.withMessage("Поле не должен быть пустым",C)}},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)},__groups:{$each:V.forEach({__users:{required:V.withMessage("Поле не должен быть пустым",C)},__tags:{required:V.withMessage("Поле не должен быть пустым",C)},__regions:{required:V.withMessage("Поле не должен быть пустым",C)},__start_date:{required:V.withMessage("Поле не должен быть пустым",C)},__end_date:{required:V.withMessage("Поле не должен быть пустым",C)},__company:{required:V.withMessage("Поле не должен быть пустым",C)},__route:{required:V.withMessage("Поле не должен быть пустым",C)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:V.forEach({users:{required:V.withMessage("Поле не должен быть пустым",C)},text:{required:V.withMessage("Поле не должен быть пустым",C)}})}},booking_model:{bookings:[{type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:V.forEach({segments:{$each:V.forEach({departure_city:{required:V.withMessage("Поле не должен быть пустым",C)},arrival_city:{required:V.withMessage("Поле не должен быть пустым",C)},date:{required:V.withMessage("Поле не должен быть пустым",C)},time:{required:V.withMessage("Поле не должен быть пустым",C)},segment_class:{required:V.withMessage("Поле не должен быть пустым",C)}})},passengers:{required:V.withMessage("Поле не должен быть пустым",C)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Nt,active:!0,value:Xe},{id:4,label:"decree",icon:Pt,active:!0,value:Ke}],routeTabItems:[{id:1,title:"airplane",icon:Ot,value:Je,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:It,value:mo,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:At,value:xt,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:Bt,value:be},{id:2,title:"complex-route",icon:jt,value:it},{id:3,title:"one-way",icon:zt,value:_o}]}),actions:{async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:t,error:o}=await Ve(Ee,a);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t=await lt(a);try{this.buttonLoading=!0;const{data:o}=await Ue({id:u,body:t});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){var a,t;try{this.detailLoading=!0;const{data:o}=await qe(u),g=await kt(o.id);this.decreeModel=(t=(a=g==null?void 0:g.data)==null?void 0:a.to_composes[0])==null?void 0:t.from_compose,Te(this.model,o),this.model.__curator=await Le([],o.curator.id,!1),this.model.__signers=await Y(o.signers),this.model.__approvers=await Y(o.approvers);const s=Object.values(o.notices.reduce((r,_)=>{const n=_.group_id;return r[n]=r[n]||{group_id:n,items:[]},r[n].items.push(_),r},{}));this.model.__groups=await Promise.all(s.map(async r=>{var N;const _=await Promise.all(r.items.map(async D=>({...await Y([],D.user.id,!1),business_trip_id:D.id}))),n=await st(r.items[0].tags),p=await We("regions",r.items[0].locations),x=await We("companies",[],!1,(N=r.items[0].sender_company)==null?void 0:N.id),T=r.items[0].start_date,M=r.items[0].end_date,L=r.items[0].route;return{__users:_,__tags:n,__regions:p,__start_date:T,__end_date:M,__company:x,__route:L}})),this.trip_plan_model.trip_plans=await Promise.all(o.trip_plans.map(async(r,_)=>({...r,users:await Y(r.users)}))),this.booking_model.bookings=await Promise.all(o.bookings.map(async r=>({type:r.type,route:r.route,segments:await Promise.all(r.segments.map(async _=>({departure_city:await We("regions",[],!1,_.departure_city.id),arrival_city:await We("regions",[],!1,_.arrival_city.id),segment_class:await fo.find(n=>n.value===_.segment_class),date:ge(_.departure_date),time:await so(_.departure_date,_.departure_end_date)}))),passengers:await Y(r.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},async actionStepClick(u,a,t){await u.replace({query:{...a.query,step:t}}),this.stepperItems.forEach(g=>g.active=g.value===t),await wt();const o=document.querySelector(".document-view-aside");o&&o.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(u){this.booking_model.bookings.splice(u,1)},actionChangeRouteSegment(u,a){const t=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=u===be?[t(),t()]:[t()]},async actionAddRouteLine(u){this.booking_model.bookings[u].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(u,a){this.booking_model.bookings[u].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),$l={class:"trip-info-components"},Vl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ul={class:"flex justify-between"},El={class:"text-base text-primary-900 font-semibold mb-1"},Cl=["onClick"],Sl={class:"flex align-center gap-x-4"},Tl={class:"flex w-full gap-x-4"},Ll={class:"flex w-full gap-x-4"},Dl={class:"text-base text-primary-900 font-semibold mb-2"},Rl={class:"flex items-center justify-between"},ht={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:t}){const o=pe(),g=ue(),s=Ie();ye();const{t:r,locale:_}=le(),n=te(s.rules,s.model),p=J(!1),x=D=>{s.model.__files=[],D.forEach(h=>{s.model.__files.push(h)})},T=()=>{s.actionAddGroupBlock()},M=async D=>{const h=await n.value.$validate();if(p.value=!0,!h){B(null,r("fill-required-fields"),A.WARNING);return}t("emit:onValidateAndSend"),await s.actionStepClick(g,o,"decree")},L=(D,h)=>{s.model.__groups[h].__regions=[]},N=(D,h)=>{D.value.forEach(m=>{var k,i,d,v;if(m.id===((v=(d=(i=(k=s.model)==null?void 0:k.__groups[h])==null?void 0:i.__company)==null?void 0:d.region)==null?void 0:v.id)){const f=s.model.__groups[h].__regions.findIndex(U=>U.id===m.id);(f||f===0)&&s.model.__groups[h].__regions.splice(f,1)}})};return a({stepClick:M}),(D,h)=>{const m=fe,k=Ae,i=me,d=tt,v=rt,f=Ge,U=_e,O=De;return w(),S("div",$l,[l(U,null,{default:c(()=>[l(m,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":h[0]||(h[0]=$=>e(n).__curator.$model=$),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(m,{"col-class":"w-1/2"},{default:c(()=>[l(k,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":h[1]||(h[1]=$=>e(n).short_description.$model=$),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(m,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),S(Q,null,de(e(s).model.__groups,($,y)=>(w(),S("div",Vl,[b("div",Ul,[b("span",El,I(e(r)("group"))+"-"+I(y+1),1),y!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:q=>e(s).actionDeleteGroupBlock(y)},[l(i,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Cl)):re("",!0)]),l(U,null,{default:c(()=>[l(m,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:$.__users,"onUpdate:modelValue":q=>$.__users=q,error:e(n).__groups.$each.$response.$data[y].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"",allSelectable:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(m,{"col-class":"w-1/2"},{default:c(()=>[b("div",Sl,[l(d,{modelValue:$.__company,"onUpdate:modelValue":q=>$.__company=q,error:e(n).__groups.$each.$response.$data[y].__company,options:$.__filialList,"onUpdate:options":q=>$.__filialList=q,required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":q=>L(q,y)},{option:c(({option:q})=>[l(e(he),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","onUpdate:options","show-nested-error","onEmit:change"]),l(v,{modelValue:$.__regions,"onUpdate:modelValue":q=>$.__regions=q,error:e(n).__groups.$each.$response.$data[y].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":q=>N(q,y)},{chip:c(({value:q})=>[ne(I(q.name),1)]),option:c(({value:q})=>[l(e(he),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error","onEmit:change"])])]),_:2},1024),l(m,{"col-class":"w-1/2"},{default:c(()=>[b("div",Tl,[l(v,{modelValue:$.__tags,"onUpdate:modelValue":q=>$.__tags=q,error:e(n).__groups.$each.$response.$data[y].__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":p.value,class:"w-1/2"},{chip:c(({value:q})=>[ne(I(q.name),1)]),option:c(({value:q})=>[l(e(he),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),l(d,{modelValue:$.__route,"onUpdate:modelValue":q=>$.__route=q,error:e(n).__groups.$each.$response.$data[y].__route,options:e(s).routeTabItems,"onUpdate:options":h[2]||(h[2]=q=>e(s).routeTabItems=q),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(_)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":p.value,class:"w-1/2"},{option:c(({option:q})=>[l(e(he),{title:e(r)(q.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),l(m,{"col-class":"w-1/2"},{default:c(()=>[b("div",Ll,[l(f,{modelValue:$.__start_date,"onUpdate:modelValue":[q=>$.__start_date=q,q=>$.__start_date=e(ge)(q)],error:e(n).__groups.$each.$response.$data[y].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(f,{modelValue:$.__end_date,"onUpdate:modelValue":[q=>$.__end_date=q,q=>$.__end_date=e(ge)(q)],error:e(n).__groups.$each.$response.$data[y].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(O,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:T},null,8,["icon-left"])]),_:1}),l(m,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":h[3]||(h[3]=$=>e(s).model.__approvers=$),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(m,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":h[4]||(h[4]=$=>e(n).__signers.$model=$),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(m,{"col-class":"w-full"},{default:c(()=>[b("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(s).model.content?"border-critic-500":"border-greyscale-200"])},[b("div",Dl,I(e(r)("notice")),1),l(Ce,{modelValue:e(n).content.$model,"onUpdate:modelValue":h[5]||(h[5]=$=>e(n).content.$model=$),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).model.__files,"onEmit:fileUpload":x},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),b("div",Rl,[l(O,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(O,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:h[6]||(h[6]=$=>M(e(ct)))})])])}}},Ml={class:"work-plan-component"},Nl={class:"flex flex-col gap-y-3"},Pl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ol={class:"flex justify-between"},Il={class:"text-base text-primary-900 font-semibold mb-1"},Al=["onClick"],Bl={class:"flex items-center justify-between mt-10"},jl={class:"flex items-center gap-x-1"},zl={__name:"WorkPlan",setup(u,{expose:a}){const{t}=le(),o=pe(),g=ue(),s=Ie(),r=te(s.trip_plan_rules,s.trip_plan_model),_=J(!1),n=ee(()=>{const T=new Set;return s.model.__groups.reduce((M,L)=>L.__users&&Array.isArray(L.__users)?M.concat(L.__users):M,[]).filter(M=>T.has(M.id)?!1:(T.add(M.id),!0))}),p=async T=>{const M=await r.value.$validate();if(_.value=!0,!M){B(null,t("fill-required-fields"),A.WARNING);return}const L=s.trip_plan_model.trip_plans.flatMap(D=>{var h;return(h=D.users)==null?void 0:h.map(m=>m.id)}),N=n.value.filter(D=>!L.includes(D.id));N.length?(B(null,`У следующих сотрудников нет плана работы: ${N==null?void 0:N.map(D=>D.first_name+" "+D.last_name).join(", ")}.`,A.WARNING),B(null,"У всех сотрудников должен быть назначен рабочий план.",A.WARNING)):await s.actionStepClick(g,o,T)},x=()=>{s.actionAddWorkPlanRow(),_.value=!1};return a({stepClick:p}),(T,M)=>{const L=me,N=Vt,D=fe,h=_e,m=De;return w(),S("div",Ml,[b("div",Nl,[(w(!0),S(Q,null,de(e(s).trip_plan_model.trip_plans,(k,i)=>(w(),S("div",Pl,[b("div",Ol,[b("span",Il,I(e(t)("plan"))+"-"+I(i+1),1),i!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d=>e(s).actionDeleteWorkPlanRow(i)},[l(L,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Al)):re("",!0)]),l(h,null,{default:c(()=>[l(D,{"col-class":"w-1/2"},{default:c(()=>[l(N,{modelValue:k.text,"onUpdate:modelValue":d=>k.text=d,error:e(r).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(D,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:k.users,"onUpdate:modelValue":d=>k.users=d,options:n.value,error:e(r).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:x},null,8,["icon-left"]),b("div",Bl,[l(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),b("div",jl,[l(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:M[0]||(M[0]=k=>p(e(Xe)))}),l(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:M[1]||(M[1]=k=>p(e($t)))})])])])}}};const Fl={class:"base-time-picker"},Gl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(u){const a=u,t=nt(a,"modelValue"),{t:o}=le();return(g,s)=>{var n;const r=wo,_=me;return w(),S("div",Fl,[l(r,{label:a.label,required:a.required},null,8,["label","required"]),l(e(vo),{modelValue:e(t),"onUpdate:modelValue":s[0]||(s[0]=p=>Ze(t)?t.value=p:null),"time-picker":"",range:u.range,"cancel-text":e(o)("cancel"),"select-text":e(o)("select"),placeholder:e(o)(u.placeholder),ref:"datePicker",class:Oe({"input-error":((n=u.error)==null?void 0:n.$error)&&u.showNestedError})},{"input-icon":c(()=>[l(_,{icon:e(Ft),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Wl={class:"route-component flex flex-col gap-y-3"},Yl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Hl={class:"flex items-center justify-between"},Xl={class:"flex items-center gap-x-4"},Kl={class:"text-base text-primary-900 font-semibold mb-1"},Ql={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Jl={class:"text-xs text-greyscale-900 font-medium"},Zl=["onClick"],en=["onClick"],tn={class:"text-sm text-primary-500 font-semibold"},on={class:"flex items-center justify-between mt-10"},ln={class:"flex items-center gap-x-1"},nn={__name:"Route",props:{formType:{type:String,default:j}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:t}){const{t:o}=le(),g=pe(),s=ue(),r=Ie(),_=ye();ie(),ce();const n=te(r.booking_model_rules,r.booking_model);J(!1);const p=J(!1),x=ee(()=>{const i=new Set;return r.model.__groups.reduce((d,v)=>v.__users&&Array.isArray(v.__users)?d.concat(v.__users):d,[]).filter(d=>i.has(d.id)?!1:(i.add(d.id),!0))}),T=i=>{r.routeTabItems.forEach(d=>d.active=d.id===i.id)},M=(i,d)=>{r.routeTypeTabItems.forEach(v=>v.active=v.id===i.id),r.actionChangeRouteSegment(i.value,d)},L=async(i,d=!1)=>{var O,$;const v=await n.value.$validate();if(p.value=!0,!v){B(null,o("fill-required-fields"),A.WARNING);return}const f=(O=r.booking_model.bookings)==null?void 0:O.flatMap(y=>{var q;return(q=y.passengers)==null?void 0:q.map(E=>E==null?void 0:E.id)}),U=($=x.value)==null?void 0:$.filter(y=>!(f!=null&&f.includes(y.id)));U.length?(B(null,`У следующих сотрудников не назначен маршрут: ${U.map(y=>y.first_name+" "+y.last_name).join(", ")}.`,A.WARNING),B(null,"У всех сотрудников должен быть назначен маршрут",A.WARNING)):(d&&t("emit:onValidateAndSend"),await r.actionStepClick(s,g,i))},N=()=>{r.actionAddRouteRow(),p.value=!1},D=(i,d,v,f)=>{f.type===be&&(r.booking_model.bookings[d].segments[v+1].arrival_city=i)},h=(i,d,v,f)=>{f.type===be&&(r.booking_model.bookings[d].segments[v+1].departure_city=i)},m=(i,d,v,f)=>{f.type===be&&(r.booking_model.bookings[d].segments[v+1].segment_class=i)},k=()=>{L(Ke,!0)};return a({stepClick:L}),(i,d)=>{const v=tt,f=fe,U=Ge,O=_e,$=De;return w(),S("div",Wl,[(w(!0),S(Q,null,de(e(r).booking_model.bookings,(y,q)=>(w(),S("div",Yl,[b("div",Hl,[b("div",Xl,[b("span",Kl,I(e(o)("route"))+"-"+I(q+1),1),l(bt,{modelValue:y.route,"onUpdate:modelValue":E=>y.route=E,items:e(r).routeTabItems,"onEmit:onChange":d[0]||(d[0]=E=>T(E))},null,8,["modelValue","onUpdate:modelValue","items"]),l(bt,{modelValue:y.type,"onUpdate:modelValue":E=>y.type=E,items:e(r).routeTypeTabItems,"onEmit:onChange":E=>M(E,q)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),q!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d[1]||(d[1]=(...E)=>e(r).actionDeleteRouteRow&&e(r).actionDeleteRouteRow(...E))},[l(me,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):re("",!0)]),b("div",Ql,[l(me,{icon:e(at),class:"text-warning-500"},null,8,["icon"]),b("span",Jl,I(e(o)("route-warning")),1)]),(w(!0),S(Q,null,de(y.segments,(E,W)=>(w(),S("div",null,[l(O,null,{default:c(()=>[l(f,{"col-class":"w-1/5"},{default:c(()=>[l(v,{modelValue:E.departure_city,"onUpdate:modelValue":R=>E.departure_city=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[W].departure_city,options:e(_).regionsList,"onUpdate:options":d[2]||(d[2]=R=>e(_).regionsList=R),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:y.type===e(be)&&W%2!==0,"onEmit:change":R=>D(R,q,W,y)},{option:c(({option:R})=>[l(e(he),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(v,{modelValue:E.arrival_city,"onUpdate:modelValue":R=>E.arrival_city=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[W].arrival_city,options:e(_).regionsList.filter(R=>{var X;return(R==null?void 0:R.id)!=((X=E.departure_city)==null?void 0:X.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:y.type===e(be)&&W%2!==0,"onEmit:change":R=>h(R,q,W,y)},{option:c(({option:R})=>[l(e(he),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(v,{modelValue:E.segment_class,"onUpdate:modelValue":R=>E.segment_class=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[W].segment_class,options:y.route===e(xt)?e(qo):y.route===e(Je)?e(go):e(bo),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":p.value,translatable:"",disabled:y.type===e(be)&&W%2!==0,"onEmit:change":R=>m(R,q,W,y)},{option:c(({option:R})=>[l(e(he),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(U,{modelValue:E.date,"onUpdate:modelValue":[R=>E.date=R,R=>E.date=e(ge)(R)],error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[W].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),l(f,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[l(Gl,{modelValue:E.time,"onUpdate:modelValue":R=>E.time=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[W].time,label:"time",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),y.type===e(it)&&W!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:R=>e(r).actionDeleteRouteLine(q,W)},[l(me,{icon:e(Ye),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Zl)):re("",!0)]),_:2},1024)]),_:2},1024)]))),256)),y.type===e(it)?(w(),S("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:E=>e(r).actionAddRouteLine(q)},[l(me,{icon:e(He),class:"text-primary-500"},null,8,["icon"]),b("span",tn,I(e(o)("add-line")),1)],8,en)):re("",!0),l(O,null,{default:c(()=>[l(f,{"col-class":"w-full"},{default:c(()=>[l(H,{modelValue:y.passengers,"onUpdate:modelValue":E=>y.passengers=E,options:x.value,error:e(n).bookings.$each.$response.$data[q].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),l($,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:N},null,8,["icon-left"]),b("div",on,[l($,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),b("div",ln,[l($,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:d[3]||(d[3]=y=>L(e(ct)))}),l($,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(r).buttonLoading,onClick:k},null,8,["loading"])])])])}}},ut=xe("sd-extend-business-trip-store",{state:()=>({buttonLoading:!1,userTripUpdateButtonLoading:!1,detailLoading:!1,changingBTDialog:!1,changingBTLoading:!1,changingBTModel:null,tempVerifications:[],tempRegions:[],tempGroupIndex:null,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)}}}),actions:{async actionGetParentDocumentDetail(u){try{this.detailLoading=!0;const{data:a}=await qe(u);await this.actionAdjustModel(a)}catch{}finally{this.detailLoading=!1}},async actionAdjustModel(u){this.model.__notices=u.notices;const a=Object.values(u.notices.reduce((t,o)=>{const g=o.group_id;return t[g]=t[g]||{group_id:g,items:[]},t[g].items.push(o),t},{}));this.model.__groups=await Promise.all(a.map(async t=>({__users:await Promise.all(t.items.map(async g=>({...await Y([],g.user.id,!1),business_trip_id:g.id}))),__notices_to_change:[],group_id:t.group_id})))},async actionAddUsersToExtend(u,a){var _;await wt();const t=this.model.__groups[a].__users_to_extend||[],o=this.model.__notices.find(n=>t.some(p=>p.id===n.user.id&&n.group_id===u.group_id));if(!o)return;const g=this.model.__groups[a];if(Array.isArray(g.__notices_to_change)||this.$set(g,"__notices_to_change",[]),g.__notices_to_change.some(n=>n.id===o.id||n.parent_id===o.id)){this.tempGroupIndex=a,this.actionClearTempModel();return}this.changingBTModel=o,this.tempGroupIndex=a,this.changingBTLoading=!0,this.changingBTDialog=!0,setTimeout(()=>{this.changingBTLoading=!1},2e3);const r=await ko(o.id);this.tempVerifications=(_=r==null?void 0:r.data)==null?void 0:_.verifications.filter(n=>!n.is_sender).map(n=>({...n,is_visited:n.arrived_at||n.left_at}))},actionDeleteNoticeToChange(u,a,t){this.model.__groups[t].__notices_to_change.splice(a,1)},actionFillNoticesToChange(){var u,a,t,o,g,s;(t=(a=(u=this.model)==null?void 0:u.__groups)==null?void 0:a[this.tempGroupIndex])!=null&&t.__notices_to_change?this.model.__groups[this.tempGroupIndex].__notices_to_change.push({...this.changingBTModel,__regions:this.tempVerifications.map(r=>({...r.region})),__start_date:(o=this.changingBTModel)==null?void 0:o.start_date,__end_date:(g=this.changingBTModel)==null?void 0:g.end_date,__sender_company:(s=this.changingBTModel)==null?void 0:s.sender_company}):console.warn("Target group or __notices_to_change array not found.")},async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:t,error:o}=await Ve(Ee,a);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t=await lt(a);try{this.buttonLoading=!0;const{data:o}=await Ue({id:u,body:t});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){var t,o,g,s,r,_;try{this.detailLoading=!0,await this.actionGetParentDocumentDetail(a);const{data:n}=await qe(u),p=await kt(n.id);Ie().decreeModel.content=((g=(o=(t=p==null?void 0:p.data)==null?void 0:t.to_composes[0])==null?void 0:o.from_compose)==null?void 0:g.content)||"",Ie().decreeModel.id=((_=(r=(s=p==null?void 0:p.data)==null?void 0:s.to_composes[0])==null?void 0:r.from_compose)==null?void 0:_.id)||null;const x=await Promise.all(this.model.__groups.map(async T=>{const M=n.notices.filter(L=>T.__users.some(N=>{var D;return N.id===((D=L.user)==null?void 0:D.id)&&L.group_id===T.group_id}));return M.length&&(T.__notices_to_change=await Promise.all(M.map(async L=>({user:L.user,__regions:await We("regions",L.locations),__start_date:L.start_date,__end_date:L.end_date,tags:L.tags,__sender_company:L.sender_company,business_trip_id:L.id,parent_id:L.parent})))),T}));this.model.__curator=await Le([],n.curator.id,!1),this.model.__signers=await Y(n.signers),this.model.__approvers=await Y(n.approvers),this.model.short_description=n.short_description,this.model.content=n.content}catch(n){return console.error(n),Promise.reject(n)}finally{this.detailLoading=!1}},async actionUpdateUserTrip(){this.actionFillNoticesToChange(),this.actionClearTempModel()},actionResetBTModel(){this.model={approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]}},actionClearTempModel(){this.changingBTDialog=!1,this.changingBTLoading=!1,this.changingBTModel=null,this.tempVerifications=[],this.tempRegions=[],this.model.__groups[this.tempGroupIndex].__users_to_extend=[]},actionClearUserToExtend(){const u=this.model.__groups[this.tempGroupIndex].__users_to_extend.findIndex(a=>{var t,o;return a.id===((o=(t=this.changingBTModel)==null?void 0:t.user)==null?void 0:o.id)});this.model.__groups[this.tempGroupIndex].__users_to_extend.splice(u,1)}}}),rn={class:"decree-component"},an={class:"flex items-center justify-between mt-10"},sn={class:"flex items-center gap-x-1"},St={__name:"Decree",props:{formType:{type:String,default:j}},setup(u,{expose:a}){const t=u,o=pe(),g=ue(),s=Ie(),r=ut(),_=te(s.decreeRules,s.decreeModel),{t:n}=le(),p=ie(),x=ce(),T=J(!1),M=ee(()=>({...o.params.document_sub_type===Z.EXTEND_BUSINESS_TRIP_NOTICE?r.model:s.model,bookings:s.booking_model.bookings,trip_plans:s.trip_plan_model.trip_plans,decree_content:s.decreeModel.content})),L=async k=>{await s.actionStepClick(g,o,k)},N=k=>{s.decreeModel.__files=[],k.forEach(i=>{s.decreeModel.__files.push(i)})},D=async()=>{var i,d,v,f;if(!await _.value.$validate()){B(null,n("fill-required-fields"),A.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(d=(i=s.model)==null?void 0:i.__curator)==null?void 0:d.user_id,s.decreeModel.journal=se.ORDERS_PROTOCOLS,s.decreeModel.company=p.currentUser.company.id,s.decreeModel.sender=(f=(v=p==null?void 0:p.currentUser)==null?void 0:v.top_level_department)==null?void 0:f.id,s.decreeModel.document_type=ae.DECREE,s.decreeModel.document_sub_type=o.params.document_sub_type===Z.EXTEND_BUSINESS_TRIP_NOTICE?Z.EXTEND_BUSINESS_TRIP_DECREE:Z.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,T.value=!0},h=async(k,i)=>{try{await s.actionUpdateDocument({id:i,body:{...s.decreeModel,trip_notice_id:k}}),await x.actionCountList(),B(null,n("successfully-saved"),A.SUCCESS)}catch{}},m=async()=>{var i;let k=null;t.formType===j&&o.query.notice_id?k=o.query.notice_id:t.formType===Se&&o.params.id&&(k=o.params.id);try{await h(k,(i=s.decreeModel)==null?void 0:i.id),await g.replace({name:Me,params:{id:k,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type},query:{parent_id:o.query.parent_id}})}catch{}};return a({stepClick:L}),(k,i)=>{const d=De;return w(),S("div",rn,[l(Ce,{modelValue:e(_).content.$model,"onUpdate:modelValue":i[0]||(i[0]=v=>e(_).content.$model=v),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"]),b("div",an,[l(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),b("div",sn,[l(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:i[1]||(i[1]=v=>L(e(Xe)))}),l(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:D})])]),l(Ne,{modelValue:T.value,"onUpdate:modelValue":i[2]||(i[2]=v=>T.value=v),"send-button-loading":e(s).buttonLoading,"onEmit:send":m,"content-classes":"p-0"},{content:c(()=>[l(e(io),{"compose-model":M.value,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},dn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},cn={class:"px-6 py-4"},ga={__name:"BusinessTripForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=le(),o=pe(),g=ue(),s=ie(),r=Ie();te(r.rules,r.model),te(r.trip_plan_rules,r.trip_plan_model),te(r.booking_model_rules,r.booking_model),te(r.decreeRules,r.decreeModel);const _=J(null),n=ee(()=>a.formType===j?"create-business-trip-notice":"update-business-trip-notice"),p=ee(()=>{switch(o.query.step){case Xe:return ht;case Ke:return St;case ct:return zl;case $t:return nn;default:return ht}}),x=async N=>{var h;const D=e(_);((h=o.query)==null?void 0:h.step)!==N.value&&(await D.stepClick(N.value),N.value,Ke)},T=async()=>{o.query.step||await g.replace({query:{...o.query,step:Xe}}),r.stepperItems.forEach(N=>N.active=N.value===o.query.step)},M=async()=>{var h,m,k,i,d,v,f,U,O,$,y,q;const N=oe(r.model.__approvers),D=oe(r.model.__signers);if(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.bookings=[],r.model.trip_plans=[],r.model.approvers=N,r.model.signers=D,r.model.curator=(m=(h=r.model)==null?void 0:h.__curator)==null?void 0:m.user_id,r.model.journal=se.INNER,r.model.company=(i=(k=s.currentUser)==null?void 0:k.company)==null?void 0:i.id,r.model.__groups.forEach((E,W)=>{const R=W+1;r.model.notices.push(...E.__users.map(X=>{var K,P,G;return{start_date:E.__start_date,end_date:E.__end_date,end_date_2:E.__end_date,user:X.id,company:(P=(K=s.currentUser)==null?void 0:K.company)==null?void 0:P.id,sender_company:(G=E.__company)==null?void 0:G.id,regions:E.__regions.map(z=>z.id),tags:E.__tags.map(z=>({id:z.id})),route:E.__route,group_id:R,...X.business_trip_id?{id:X.business_trip_id}:{}}}))}),r.model.sender=(v=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:v.id,r.model.files=r.model.__files.map(E=>({id:E.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,a.formType===j&&o.query.notice_id)try{await r.actionUpdateDocument({id:o.query.notice_id,body:r.model})}catch{}else if(a.formType===j)try{const{data:E}=await r.actionCreateDocument(r.model),W={approvers:[],signers:[],curator:(U=(f=r.model)==null?void 0:f.__curator)==null?void 0:U.user_id,journal:se.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:($=(O=s==null?void 0:s.currentUser)==null?void 0:O.top_level_department)==null?void 0:$.id,document_type:ae.DECREE,document_sub_type:Z.BUSINESS_TRIP_DECREE_V2,short_description:(y=r.model)==null?void 0:y.short_description,trip_notice_id:E.id,content:E.content};r.decreeModel.content=E.content;try{const R=await r.actionCreateDocument(W);r.decreeModel.id=(q=R==null?void 0:R.data)==null?void 0:q.id,await g.replace({query:{...o.query,notice_id:E.id}}),await r.actionGetDocumentDetailForUpdate(E.id)}catch{}}catch{}else if(a.formType===Se&&o.params.id)try{await r.actionUpdateDocument({id:o.params.id,body:r.model})}catch{}},L=async()=>{try{await M(),await B(null,t("notice-saved-successfully"),A.SUCCESS)}catch{}};return Qe(async()=>{await T(),a.formType===Se?await r.actionGetDocumentDetailForUpdate(o.params.id):o.query.notice_id&&await r.actionGetDocumentDetailForUpdate(o.query.notice_id)}),Re(()=>{r.actionResetBTModel()}),(N,D)=>{const h=we,m=Ct;return w(),S("div",{class:Oe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(r).detailLoading}])},[e(r).detailLoading?(w(),F(h,{key:0})):(w(),F(e($e),{key:1,title:n.value},{content:c(()=>[b("div",dn,[l(m,{items:e(r).stepperItems,"onEmit:stepClick":x},null,8,["items"])]),b("div",cn,[(w(),F(Gt(p.value),{"form-type":u.formType,ref_key:"childComponent",ref:_,"onEmit:onValidateAndSend":L},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},un=xe("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:V.withMessage("Поле не должен быть пустым",C)},__curator:{required:V.withMessage("Поле не должен быть пустым",C)},__signers:{required:V.withMessage("Поле не должен быть пустым",C)},short_description:{required:V.withMessage("Поле не должен быть пустым",C)},__groups:{$each:V.forEach({__users:{required:V.withMessage("Поле не должен быть пустым",C)},__tags:{required:V.withMessage("Поле не должен быть пустым",C)},__regions:{required:V.withMessage("Поле не должен быть пустым",C)},__start_date:{required:V.withMessage("Поле не должен быть пустым",C)},__end_date:{required:V.withMessage("Поле не должен быть пустым",C)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:V.forEach({users:{required:V.withMessage("Поле не должен быть пустым",C)},text:{required:V.withMessage("Поле не должен быть пустым",C)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ee,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"flex justify-between"},_n={class:"text-base text-primary-900 font-semibold mb-1"},fn=["onClick"],qn={class:"flex w-full gap-x-4"},gn={class:"flex flex-col gap-y-3"},bn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},hn={class:"flex justify-between"},yn={class:"text-base text-primary-900 font-semibold mb-1"},wn=["onClick"],vn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},kn={class:"text-base text-primary-900 font-semibold mb-2"},ba={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=J(!1),o=J(!1),{t:g}=le(),s=pe(),r=ue(),_=ie(),n=un(),p=ce();ye();const x=te(n.rules,n.model),T=te(n.trip_plan_rules,n.trip_plan_model),M=ee(()=>a.formType===j?"create-decree":"update-decree"),L=ee(()=>{const f=new Set;return n.model.__groups.reduce((U,O)=>O.__users&&Array.isArray(O.__users)?U.concat(O.__users):U,[]).filter(U=>f.has(U.id)?!1:(f.add(U.id),!0))}),N=async()=>{var $,y,q,E,W,R;if(t.value=!0,!await x.value.$validate()){B(null,g("fill-required-fields"),A.WARNING);return}const U=oe(n.model.__approvers),O=oe(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=U,n.model.signers=O,n.model.curator=(y=($=n.model)==null?void 0:$.__curator)==null?void 0:y.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=(E=(q=_.currentUser)==null?void 0:q.company)==null?void 0:E.id,n.model.__groups.forEach((X,K)=>{const P=K+1;n.model.notices.push(...X.__users.map(G=>{var z,Pe;return{start_date:X.__start_date,end_date:X.__end_date,user:G.id,company:(Pe=(z=_.currentUser)==null?void 0:z.company)==null?void 0:Pe.id,regions:X.__regions.map(ve=>ve.id),tags:X.__tags.map(ve=>({id:ve.id})),group_id:P}}))}),n.model.sender=(R=(W=_==null?void 0:_.currentUser)==null?void 0:W.top_level_department)==null?void 0:R.id,n.model.files=n.model.__files.map(X=>({id:X.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(X=>({users:X.users.map(K=>({id:K.id})),text:X.text})),o.value=!0},D=()=>{},h=()=>{n.actionAddGroupBlock()},m=()=>{n.actionAddWorkPlanRow(),t.value=!1},k=f=>{n.model.__files=[],f.forEach(U=>{n.model.__files.push(U)})},i=async()=>{const f=await n.actionCreateDocument(n.model);await p.actionCountList(),f?(o.value=!1,B(null,g("document-sent"),A.SUCCESS),await r.replace({name:Be,query:{document_type:s.params.document_type}})):B(null,g("error-occurred"),A.ERROR)},d=async()=>{await n.actionUpdateDocument({id:s.params.id,body:n.model}),await p.actionCountList(),B(null,g("changed"),A.SUCCESS),await r.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},v=()=>{a.formType===j?i():d()};return(f,U)=>{const O=we,$=fe,y=Ae,q=me,E=rt,W=Ge,R=_e,X=De,K=Vt;return e(n).detailLoading?(w(),F(O,{key:0})):(w(),S(Q,{key:1},[l(e($e),{title:M.value},{content:c(()=>[l(je,{"onEmit:preview":N,"onEmit:clearForm":D},{default:c(()=>[l(R,null,{default:c(()=>[l($,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(x).__curator.$model,"onUpdate:modelValue":U[0]||(U[0]=P=>e(x).__curator.$model=P),error:e(x).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l($,{"col-class":"w-1/2"},{default:c(()=>[l(y,{modelValue:e(x).short_description.$model,"onUpdate:modelValue":U[1]||(U[1]=P=>e(x).short_description.$model=P),error:e(x).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l($,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),S(Q,null,de(e(n).model.__groups,(P,G)=>(w(),S("div",pn,[b("div",mn,[b("span",_n,I(e(g)("group"))+"-"+I(G+1),1),G!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(n).actionDeleteGroupBlock(G)},[l(q,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,fn)):re("",!0)]),l(R,null,{default:c(()=>[l($,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:P.__users,"onUpdate:modelValue":z=>P.__users=z,error:e(x).__groups.$each.$response.$data[G].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l($,{"col-class":"w-1/2"},{default:c(()=>[l(E,{modelValue:P.__regions,"onUpdate:modelValue":z=>P.__regions=z,error:e(x).__groups.$each.$response.$data[G].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":t.value},{chip:c(({value:z})=>[ne(I(z.name),1)]),option:c(({value:z})=>[l(e(he),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l($,{"col-class":"w-1/2"},{default:c(()=>[l(E,{modelValue:P.__tags,"onUpdate:modelValue":z=>P.__tags=z,error:e(x).__groups.$each.$response.$data[G].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":t.value},{chip:c(({value:z})=>[ne(I(z.name),1)]),option:c(({value:z})=>[l(e(he),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),l($,{"col-class":"w-1/2"},{default:c(()=>[b("div",qn,[l(W,{modelValue:P.__start_date,"onUpdate:modelValue":[z=>P.__start_date=z,z=>P.__start_date=e(ge)(z)],error:e(x).__groups.$each.$response.$data[G].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(W,{modelValue:P.__end_date,"onUpdate:modelValue":[z=>P.__end_date=z,z=>P.__end_date=e(ge)(z)],error:e(x).__groups.$each.$response.$data[G].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(X,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:h},null,8,["icon-left"])]),_:1})]),_:1}),b("div",gn,[(w(!0),S(Q,null,de(e(n).trip_plan_model.trip_plans,(P,G)=>(w(),S("div",bn,[b("div",hn,[b("span",yn,I(e(g)("plan"))+"-"+I(G+1),1),G!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(n).actionDeleteWorkPlanRow(G)},[l(q,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,wn)):re("",!0)]),l(R,null,{default:c(()=>[l($,{"col-class":"w-1/2"},{default:c(()=>[l(K,{modelValue:P.text,"onUpdate:modelValue":z=>P.text=z,error:e(T).trip_plans.$each.$response.$data[G].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l($,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:P.users,"onUpdate:modelValue":z=>P.users=z,options:L.value,error:e(T).trip_plans.$each.$response.$data[G].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(X,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:m},null,8,["icon-left"]),l(R,null,{default:c(()=>[l($,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":U[2]||(U[2]=P=>e(n).model.__approvers=P),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l($,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(x).__signers.$model,"onUpdate:modelValue":U[3]||(U[3]=P=>e(x).__signers.$model=P),error:e(x).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l($,{"col-class":"w-full"},{default:c(()=>[b("div",vn,[b("div",kn,I(e(g)("decree")),1),l(Ce,{modelValue:e(x).content.$model,"onUpdate:modelValue":U[4]||(U[4]=P=>e(x).content.$model=P),error:e(x).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":k},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:o.value,"onUpdate:modelValue":U[5]||(U[5]=P=>o.value=P),"send-button-loading":e(n).buttonLoading,"onEmit:send":v},{content:c(()=>[l(e(vt),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},xn={class:"flex gap-x-[6px] items-center px-2 py-1 bg-greyscale-50 rounded-[90px] border-b border-greyscale-200"},$n={key:0,class:"w-6 h-6 rounded-full flex items-center justify-center text-xs text-white bg-primary-500"},Vn={class:"text-greyscale-900 text-sm font-medium"},ot={__name:"BaseChip",props:{item:{type:Object,default:()=>({})},label:{type:String,default:"Example"},type:{type:String,default:"user",validator(u){return["user","location","other"].includes(u)}},clearable:{type:Boolean,default:!1}},emits:["emit:clear"],setup(u,{emit:a}){const t=o=>{a("emit:clear",o)};return(o,g)=>(w(),S("div",xn,[u.type==="user"?(w(),S("div",$n,I(u.label[0]),1)):u.type==="location"?(w(),F(me,{key:1,icon:e(Wt),class:"text-greyscale-400"},null,8,["icon"])):re("",!0),b("div",Vn,I(u.label),1),u.clearable?(w(),S("div",{key:2,class:"flex justify-center items-center w-5 h-5 rounded-full bg-critic-500 cursor-pointer",onClick:g[0]||(g[0]=s=>t(u.item))},[l(me,{icon:e(Yt),class:"text-white"},null,8,["icon"])])):re("",!0)]))}},Un={key:0,class:"flex flex-col gap-y-5"},En={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Cn={class:"text-sm font-medium text-greyscale-500"},Sn={class:"text-green-900"},Tn=b("br",null,null,-1),Ln={class:"flex flex-col gap-y-2"},Dn={class:"text-sm font-medium text-greyscale-500"},Rn=b("span",{class:"text-red-500"},"*",-1),Mn={class:"flex flex-wrap gap-3"},Nn={class:"flex flex-col gap-y-2"},Pn={key:1,class:"flex flex-col gap-y-5"},On={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},In={class:"text-sm font-medium text-greyscale-500"},An={class:"text-green-900"},Bn={__name:"ChangingBusinessTripModal",setup(u){const a=ut(),{t}=le(),o=ee(()=>{var n;return["reporting","closed"].includes((n=a==null?void 0:a.changingBTModel)==null?void 0:n.trip_status)}),g=()=>{var p;if(!(((p=a.tempVerifications)==null?void 0:p.length)>0)){B(null,"Kamida bitta hudud qo'shing!",A.WARNING);return}a.actionUpdateUserTrip()},s=()=>{a.actionClearTempModel()},r=(n,p)=>{a.tempVerifications.splice(p,1)},_=n=>{n.value.forEach(p=>{a.tempVerifications.some(T=>T.region.id===p.id)||a.tempVerifications.push({region:p,is_visited:!1}),a.tempRegions=[]})};return(n,p)=>{const x=we,T=rt,M=Ge,L=De,N=Ut;return w(),F(N,{modelValue:e(a).changingBTDialog,"onUpdate:modelValue":p[4]||(p[4]=D=>e(a).changingBTDialog=D),label:"confirm","max-width":"max-w-[631px]",closable:!1},Ht({content:c(()=>{var D,h,m,k;return[e(a).changingBTLoading?(w(),F(x,{key:0,class:"my-16"})):(w(),S(Q,{key:1},[o.value?(w(),S("div",Pn,[b("div",On,[l(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),b("div",In,[b("span",An,I((k=(m=e(a).changingBTModel)==null?void 0:m.user)==null?void 0:k.full_name),1),ne("ga tegishli bo'lgan xizmat safari yakunlangan! ")])])])):(w(),S("div",Un,[b("div",En,[l(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),b("div",Cn,[ne("Siz rostdan ham "),b("span",Sn,I((h=(D=e(a).changingBTModel)==null?void 0:D.user)==null?void 0:h.full_name),1),ne("ga tegishli bo'lgan xizmat safarini o'zgartirmoqchimisiz? "),Tn,ne(" Bunda xizmat safari bilan vaqtinchalik amaliyot bajarish to'xtatiladi! ")])]),b("div",Ln,[b("span",Dn,[ne(I(e(t)("trip-place"))+" ",1),Rn]),b("div",Mn,[(w(!0),S(Q,null,de(e(a).tempVerifications,(i,d)=>{var v;return w(),F(ot,{key:i.id,label:(v=i==null?void 0:i.region)==null?void 0:v.name_uz,clearable:!i.is_visited,type:"location",class:"w-fit","onEmit:clear":f=>r(i,d)},null,8,["label","clearable","onEmit:clear"])}),128))]),l(T,{modelValue:e(a).tempRegions,"onUpdate:modelValue":p[0]||(p[0]=i=>e(a).tempRegions=i),"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",type:"department",placeholder:"add-trip-place",required:"","onEmit:change":p[1]||(p[1]=i=>_(i))},{chip:c(({value:i})=>[ne(I(i.name),1)]),option:c(({value:i})=>[l(e(he),{title:i.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue"])]),b("div",Nn,[l(M,{modelValue:e(a).changingBTModel.end_date,"onUpdate:modelValue":[p[2]||(p[2]=i=>e(a).changingBTModel.end_date=i),p[3]||(p[3]=i=>e(a).changingBTModel.end_date=e(ge)(i))],"min-date":new Date(e(a).changingBTModel.start_date),required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","min-date"])])]))],64))]}),_:2},[e(a).changingBTLoading?void 0:{name:"footer",fn:c(()=>[l(L,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:s}),o.value?re("",!0):(w(),F(L,{key:0,loading:e(a).userTripUpdateButtonLoading,label:"update",rounded:"",shadow:"",type:"button",onClick:g},null,8,["loading"]))]),key:"0"}]),1032,["modelValue"])}}},jn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},zn={class:"px-6 py-4"},Fn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Gn={class:"flex justify-between"},Wn={class:"text-base text-primary-900 font-semibold mb-1"},Yn={class:"text-sm text-greyscale-500 font-medium"},Hn={class:"text-sm text-greyscale-500 font-medium"},Xn={class:"flex flex-wrap gap-3 mt-1"},Kn={class:"flex justify-between items-center"},Qn={class:"text-sm text-greyscale-500 font-medium"},Jn={class:"text-base text-primary-900 font-semibold mb-2"},Zn={class:"flex items-center justify-between"},ha={__name:"ExtendBusinessTripForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ut(),o=Ie(),g=ie(),s=te(t.rules,t.model),r=pe(),_=ue(),{t:n}=le(),p=J(!1);J(!1);const x=ee(()=>{const h=a.formType===j;return"trip-notice-for-change"}),T=async()=>{var i,d,v,f,U,O,$,y,q,E,W,R,X;const h=oe(t.model.__approvers),m=oe(t.model.__signers);t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.approvers=h,t.model.signers=m,t.model.curator=(d=(i=t.model)==null?void 0:i.__curator)==null?void 0:d.user_id,t.model.journal=se.INNER,t.model.company=(f=(v=g.currentUser)==null?void 0:v.company)==null?void 0:f.id;let k=1;if(t.model.__groups.forEach(K=>{Array.isArray(K.__notices_to_change)&&t.model.notices.push(...K.__notices_to_change.map(P=>{var G,z,Pe;return{...a.formType===Se?{id:P.id}:{},start_date:P.__start_date,end_date:P.__end_date,user:P.user.id,company:(z=(G=g.currentUser)==null?void 0:G.company)==null?void 0:z.id,sender_company:(Pe=P.sender_company)==null?void 0:Pe.id,regions:P.__regions.map(ve=>ve.id),tags:P.tags.map(ve=>({id:ve.id})),route:P.route,group_id:k++,trip_type:"changed_local",parent:P.id,...P.business_trip_id?{id:P.business_trip_id}:{}}}))}),t.model.sender=(O=(U=g==null?void 0:g.currentUser)==null?void 0:U.top_level_department)==null?void 0:O.id,t.model.files=t.model.__files.map(K=>({id:K.id})),t.model.document_type=r.params.document_type,t.model.document_sub_type=r.params.document_sub_type,t.model.trip_notice_id=(($=r.query)==null?void 0:$.parent_id)||null,a.formType===j&&r.query.notice_id)try{await t.actionUpdateDocument({id:r.query.notice_id,body:t.model}),await B(null,n("notice-saved-successfully"),A.SUCCESS)}catch{}else if(a.formType===j)try{const{data:K}=await t.actionCreateDocument(t.model),P={approvers:[],signers:[],curator:(q=(y=t.model)==null?void 0:y.__curator)==null?void 0:q.user_id,journal:se.ORDERS_PROTOCOLS,company:g.currentUser.company.id,sender:(W=(E=g==null?void 0:g.currentUser)==null?void 0:E.top_level_department)==null?void 0:W.id,document_type:ae.DECREE,document_sub_type:Z.EXTEND_BUSINESS_TRIP_DECREE,short_description:(R=t.model)==null?void 0:R.short_description,trip_notice_id:K.id,content:K.content};o.decreeModel.content=K.content;try{const G=await t.actionCreateDocument(P);o.decreeModel.id=(X=G==null?void 0:G.data)==null?void 0:X.id,await _.replace({query:{...r.query,notice_id:K.id,parent_id:r.query.parent_id}}),await B(null,n("notice-saved-successfully"),A.SUCCESS),await t.actionGetDocumentDetailForUpdate(K.id,r.query.parent_id)}catch(G){console.error(G)}}catch(K){console.error(K)}else if(a.formType===Se&&r.params.id)try{await t.actionUpdateDocument({id:r.params.id,body:t.model}),await B(null,n("notice-saved-successfully"),A.SUCCESS)}catch{}},M=h=>{t.model.__files=[],h.forEach(m=>{t.model.__files.push(m)})},L=async h=>{var m;try{((m=r.query)==null?void 0:m.step)!==h.value&&(h.value===Ke&&(await N(),await T()),await o.actionStepClick(_,r,h.value))}catch(k){console.error(k)}},N=async()=>{const h=await s.value.$validate();if(p.value=!0,!h)return B(null,n("fill-required-fields"),A.WARNING),Promise.reject();if(!t.model.__groups.some(k=>Array.isArray(k.__notices_to_change)&&k.__notices_to_change.length>0))return B(null,"Kamida bitta xodim o'zgartirish uchun tanlanishi kerak!",A.WARNING),Promise.reject()},D=async()=>{r.query.step||await _.replace({query:{...r.query,step:Xe}}),o.stepperItems.forEach(h=>h.active=h.value===r.query.step)};return et(async()=>{await D()}),Qe(async()=>{var h,m,k,i,d,v;a.formType===j&&((h=r.query)!=null&&h.notice_id)&&((m=r.query)!=null&&m.parent_id)?await t.actionGetDocumentDetailForUpdate((k=r.query)==null?void 0:k.notice_id,(i=r.query)==null?void 0:i.parent_id):a.formType===j&&((d=r.query)!=null&&d.parent_id)?await t.actionGetParentDocumentDetail(r.query.parent_id):a.formType===Se&&await t.actionGetDocumentDetailForUpdate(r.params.id,(v=r.query)==null?void 0:v.parent_id)}),Re(()=>{t.actionResetBTModel()}),(h,m)=>{const k=we,i=Ct,d=fe,v=Ae,f=_e,U=De;return w(),S("div",{class:Oe(["extend-business-trip-form",{"h-[calc(100vh-200px)]":e(t).detailLoading}])},[e(t).detailLoading?(w(),F(k,{key:0})):(w(),F(e($e),{key:1,title:x.value},{content:c(()=>{var O,$;return[b("div",jn,[l(i,{items:e(o).stepperItems,"onEmit:stepClick":L},null,8,["items"])]),b("div",zn,[((O=e(r).query)==null?void 0:O.step)==="trip_info"?(w(),S(Q,{key:0},[l(f,null,{default:c(()=>[l(d,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=y=>e(s).__curator.$model=y),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(v,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=y=>e(s).short_description.$model=y),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),S(Q,null,de(e(t).model.__groups,(y,q)=>(w(),S("div",Fn,[b("div",Gn,[b("span",Wn,I(e(n)("group"))+"-"+I(q+1),1)]),l(f,null,{default:c(()=>[l(d,{"col-class":"w-full"},{default:c(()=>[l(H,{modelValue:y.__users_to_extend,"onUpdate:modelValue":[E=>y.__users_to_extend=E,E=>e(t).actionAddUsersToExtend(y,q)],label:"select-employees-in-business-trip",options:y.__users,searchable:!1,placeholder:"select-employees","show-nested-error":p.value,disabled:u.formType===e(Se),allSelectable:""},null,8,["modelValue","onUpdate:modelValue","options","show-nested-error","disabled"])]),_:2},1024),l(d,{"col-class":"w-full"},{default:c(()=>[(w(!0),S(Q,null,de(y.__notices_to_change,(E,W)=>(w(),F(f,null,{default:c(()=>[l(d,{"col-class":"w-1/3"},{default:c(()=>{var R;return[b("span",Yn,I(e(n)("employees-in-business-trip")),1),l(ot,{label:(R=E.user)==null?void 0:R.full_name,class:"w-fit mt-1"},null,8,["label"])]}),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[b("span",Hn,I(e(n)("trip-place")),1),b("div",Xn,[(w(!0),S(Q,null,de(E.__regions,R=>(w(),F(ot,{key:E.id,label:R.name_uz,type:"location",class:"w-fit"},null,8,["label"]))),128))])]),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[b("div",Kn,[b("div",null,[b("span",Qn,I(e(n)("end-date")),1),l(ot,{label:E.__end_date,type:"other",class:"w-fit mt-1"},null,8,["label"])])])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]))),256))]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=y=>e(t).model.__approvers=y),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=y=>e(s).__signers.$model=y),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:c(()=>[b("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(t).model.content?"border-critic-500":"border-greyscale-200"])},[b("div",Jn,I(e(n)("notice")),1),l(Ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":m[4]||(m[4]=y=>e(s).content.$model=y),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),b("div",Zn,[l(U,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(U,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:m[5]||(m[5]=y=>L({value:e(Ke)}))})])],64)):(($=e(r).query)==null?void 0:$.step)==="decree"?(w(),F(e(St),{key:1,"form-type":u.formType},null,8,["form-type"])):re("",!0)])]}),_:1},8,["title"])),l(Bn,{modelValue:e(t).changingBTDialog,"onUpdate:modelValue":m[6]||(m[6]=O=>e(t).changingBTDialog=O)},null,8,["modelValue"])],2)}}};export{ca as _,ma as a,_a as b,fa as c,ga as d,ba as e,ha as f,ua as g,pa as h,qa as i};
