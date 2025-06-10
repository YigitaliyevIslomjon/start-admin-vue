import{_ as me}from"./BaseRow.0b170f06.1487.js";import{_ as Ie}from"./BaseInput.d5fc9578.1487.js";import{_ as _e}from"./BaseCol.d6d5a70c.1487.js";import{v as J,bb as nt,a1 as et,o as v,c as S,i as l,z as c,h as e,b8 as Ze,d as ne,du as je,a as w,t as I,F as Q,e as de,a3 as se,g as ie,f as W,B as Tt,dz as Lt,bj as Rt,n as Pe,r as ht,G as Re,as as ke,cM as ee,cN as Z,ck as re,u as le,b as ue,ao as pe,be as De,a5 as B,ac as we,a8 as Dt,cY as Qe,dA as Mt,_ as fe,dB as Nt,dC as Pt,dD as Ot,dE as It,dF as Bt,$ as At,dG as jt,dH as zt,aX as yt,bt as Ye,c0 as He,dI as Ft,ds as wt,E as Gt,cH as Wt,cR as Yt,aE as Ht}from"./index.5576c43c.425.js";import{c as $,r as E,u as te}from"./index.c1a9d8c0.1487.js";import{_ as Xt,a as Kt}from"./BranchMultiSelect.b771fd7c.1487.js";import{j as Qt,k as Jt,l as Zt,_ as xe,a as eo,h as to,g as oo,b as lo,c as no,d as ro,e as vt,i as ao,m as so,f as io}from"./BasePOA.3c8ed34f.1487.js";import"./BaseTabMenu.vue_vue_type_style_index_0_scoped_b0c8bdfd_lang.553ff79e.1487.js";import"./dialog.esm.44881500.1487.js";import"./tabpanel.esm.d3ef7bff.1487.js";import"./FileSaver.min.fff9aab2.1487.js";import{X as mt,s as Te,V as Y,Y as co,Z as ze,_ as oe,$ as Le,a0 as _t,a1 as at,a2 as We,O as lt}from"./index.9595d1f7.1487.js";import"./BaseTabView.6bca6817.1487.js";import"./FileTabs.fa5ccec7.1487.js";import{_ as H}from"./UserMultiSelect.b9532db9.1487.js";import{c as uo,u as ae,w as $e,d as A}from"./axios.config.cb77915e.1487.js";import{u as ye}from"./common.a5ee8b08.1487.js";import{u as ce}from"./count.store.a9b2a325.1487.js";import{u as it,a as Ve,b as qe,c as Ue,d as po,f as kt}from"./index.store.6c1365cd.1487.js";import{d as ft,e as Be,c as Me,f as be,B as Je,g as Xe,h as Ke,i as mo,j as xt,M as st,O as _o,T as fo,k as dt,l as $t,C as qo,P as go,m as bo}from"./index.3493ff30.1487.js";import{F as j,a as Se}from"./constants.50c90617.1487.js";import{_ as tt}from"./BaseDropdown.354ddba1.1487.js";import{_ as Fe}from"./BaseCalendar.0335deb3.1487.js";import{_ as rt}from"./BaseMultiSelect.bd48c4b9.1487.js";import{f as ho,a as ge}from"./formatDate.a76cd3c6.1487.js";import{Q as qt}from"./qrcode.vue.esm.37ff0e6c.1487.js";import"./divider.esm.7ca2ef52.1487.js";import"./dayjs.min.9e643bd1.1487.js";/* empty css                                                                                         */import{c as yo}from"./Dropdown.cf141c75.1487.js";import"./menu.esm.d2d779a2.1487.js";/* empty css                                                      */import"./avatar.esm.a5be4c15.1487.js";/* empty css                                                      */import"./businessTrip.store.4089e75d.1487.js";/* empty css                                                            */import"./accordiontab.esm.a5114239.1487.js";import"./common.store.c8f54e6d.1487.js";import{_ as he}from"./WithRadio.e0f05db3.1487.js";import"./radiobutton.esm.5ed65a5f.1487.js";import"./checkbox.esm.4dd8e79e.1487.js";import"./index.es6.f9050ba3.1487.js";import{_ as Vt}from"./ShortDescription.b71c5dea.1487.js";import{_ as gt}from"./BaseBrickRadio.431f989a.1487.js";import{_ as wo}from"./BaseLabel.7c8b426f.1487.js";import{K as vo}from"./main.afec739b.1487.js";import{a as ko,e as xo}from"./index.b0079af4.1487.js";import{_ as $o}from"./WithSelectable.e5c98db8.1487.js";import{_ as Vo}from"./BaseBrickTab.b0ef52c1.1487.js";import{_ as Uo}from"./BaseFileUpload.33f443e7.1487.js";import{_ as Eo}from"./BaseFroalaEditor.0aaded30.1487.js";import"./BaseCalendar.vue_vue_type_style_index_0_lang.9dec603f.1487.js";import"./multiselect.esm.7c687a00.1487.js";/* empty css                                                             */import"./dropdown.esm.e48792df.1487.js";/* empty css                                                          */import"./textarea.esm.3b4d6c84.1487.js";import"./overlaypanel.esm.2e22d8f6.1487.js";/* empty css                                                              */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang.bf1dd0f7.1487.js";/* empty css                                                                            */import"./review.store.d668a1d2.1487.js";/* empty css                                                       */import{_ as Ut}from"./BaseDialog.00193fec.1487.js";const Co={class:"user-select"},ve={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(u,{emit:a}){const t=u,o=J([]),q=nt(t,"modelValue"),s=async r=>{let{data:m}=await uo.get(`${t.apiUrl}/`,r);m.hasOwnProperty("results")?o.value=m.results:o.value=m};return et(async()=>{await s(t.apiParams)}),(r,m)=>(v(),S("div",Co,[l(tt,{modelValue:e(q),"onUpdate:modelValue":m[0]||(m[0]=n=>Ze(q)?q.value=n:null),options:o.value,"onUpdate:options":m[1]||(m[1]=n=>o.value=n),error:t.error,"api-url":t.apiUrl,"api-params":t.apiParams,"option-label":"full_name",label:t.label,placeholder:t.placeholder,required:t.required,searchable:"","onEmit:change":m[2]||(m[2]=n=>a("emit:change",n))},{option:c(({option:n})=>[l(e($o),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},So={class:"business-trip-decree-template-view letter-template"},To={class:"flex flex-col text-sm font-medium mt-4"},Lo=w("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),Ro=["innerHTML"],Do=["innerHTML"],Mo={class:"employees-table text-sm mt-4"},No={class:"w-full"},Po=w("tr",{class:"text-center"},[w("td",{class:"border-2 p-1"},"№"),w("td",{class:"border-2 p-1"},"F.I.SH"),w("td",{class:"border-2 p-1"},"Departament va lavozim"),w("td",{class:"border-2 p-1"},"Yo'nalish"),w("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Oo={class:"text-center"},Io={class:"border-2 p-1"},Bo={class:"border-2 p-1"},Ao={class:"border-2 p-1"},jo=w("br",null,null,-1),zo={class:"border-2 p-1"},Fo={class:"flex flex-col gap-y-1"},Go={key:0},Wo={class:"border-2 p-1 w-[100px]"},Yo=w("br",null,null,-1),Ho={class:"indent-8 mt-2 text-sm text-justify"},Xo=w("div",null,"xizmat safariga yuborilsin.",-1),Ko=w("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Qo=w("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),Jo=w("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Zo={key:0},el=w("span",{class:"font-semibold"},"Asos: ",-1),tl=w("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),ol=w("div",null," O‘zR MKning 287-moddasi; ",-1),ll=w("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),nl={class:"mt-6 pb-2 px-4"},rl={class:"text-sm font-semibold block"},al={class:"text-sm font-semibold block"},sl={class:"text-sm font-semibold block"},il={class:"text-sm font-semibold block"},dl={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(u){const a=u,t=it(),o=ne(()=>{var m;return a.preview?ae().currentUser:(m=a.composeModel)==null?void 0:m.author}),q=ne(()=>{var m,n,_;return a.preview?(m=a.composeModel)==null?void 0:m.__employees.map(k=>({empFullName:k.full_name,empDepName:k.top_level_department.name,empPositionName:k.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(_=(n=a.composeModel)==null?void 0:n.notices)==null?void 0:_.map(k=>({empFullName:k.user.full_name,empDepName:k.user.top_level_department.name,empPositionName:k.user.position.name,destinations:k.destinations,startDate:k.start_date,endDate:k.end_date}))}),s=ne(()=>{var n,_,k;if(a.preview)return[(n=a.composeModel)==null?void 0:n.__curator];const m=(_=a.composeModel)==null?void 0:_.signers.find(T=>T.type===je.BASIC_SIGNER);return m?[m]:[(k=a.composeModel)==null?void 0:k.curator].filter(Boolean)}),r=ne(()=>{var m,n;return a.preview?(m=a.composeModel)==null?void 0:m.__signers:(n=a.composeModel)==null?void 0:n.signers.filter(_=>_.type===je.SIGNER)});return(m,n)=>{var T,L,M,R,D,f,p,x;const _=_e,k=me;return v(),S("div",So,[l(e(Qt)),l(e(Jt),{"dep-name":(L=(T=o.value)==null?void 0:T.top_level_department)==null?void 0:L.name},null,8,["dep-name"]),w("div",To,[w("span",null," № "+I((M=a.composeModel)==null?void 0:M.register_number),1),w("span",null,I(((R=a.composeModel)==null?void 0:R.register_date)&&e(ho)((D=a.composeModel)==null?void 0:D.register_date)),1)]),Lo,e(t).historyShow?(v(),S("div",{key:0,class:"text-justify",innerHTML:e(t).historyContent},null,8,Ro)):(v(),S("div",{key:1,class:"text-justify",innerHTML:(f=a.composeModel)==null?void 0:f.content},null,8,Do)),w("div",Mo,[w("table",No,[Po,q.value&&q.value.length?(v(!0),S(Q,{key:0},de(q.value,(i,d)=>(v(),S("tr",Oo,[w("td",Io,I(d+1),1),w("td",Bo,I(i.empFullName),1),w("td",Ao,[se(I(i.empDepName)+" ",1),jo,se(" "+I(i.empPositionName),1)]),w("td",zo,[w("div",Fo,[(v(!0),S(Q,null,de(i.destinations,(h,g)=>(v(),S("span",null,[se(I(h.name)+" ",1),g!==i.destinations.length-1?(v(),S("span",Go,",")):ie("",!0)]))),256))])]),w("td",Wo,[se(I(i.startDate)+" ",1),Yo,se(" "+I(i.endDate),1)])]))),256)):ie("",!0)])]),w("div",Ho,[Xo,Ko,Qo,Jo,(p=u.composeModel)!=null&&p.trip_notice_register_number?(v(),S("div",Zo,[el,se(I((x=u.composeModel)==null?void 0:x.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):ie("",!0),tl,ol,ll]),w("div",nl,[(v(!0),S(Q,null,de(s.value,i=>(v(),W(k,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(_,{"col-class":"w-1/3"},{default:c(()=>[w("span",rl,I(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(_,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(v(),W(qt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ie("",!0)]),_:2},1024),l(_,{"col-class":"w-1/3"},{default:c(()=>[w("span",al,I(e(mt)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(v(!0),S(Q,null,de(r.value,i=>(v(),W(k,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(_,{"col-class":"w-1/3"},{default:c(()=>[w("span",sl,I(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(_,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(v(),W(qt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ie("",!0)]),_:2},1024),l(_,{"col-class":"w-1/3"},{default:c(()=>[w("span",il,I(e(mt)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),l(e(Zt),{"compose-model":a.composeModel,author:o.value},null,8,["compose-model","author"])])}}};var cl=`
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
`,ul={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Tt.extend({name:"editor",css:cl,classes:ul});(function(){try{return window.Quill}catch{return null}})();const Ee={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(u){return["froala","tiny"].includes(u)}}},emits:["update:modelValue","emit:fileUpload"],setup(u,{emit:a}){const t=u,o=nt(t,"modelValue"),q=J([{title:"text",slot:"editor",icon:Lt},{title:"file",slot:"file",icon:Rt}]);return(s,r)=>(v(),W(Vo,{"tab-panel-list":q.value,"panel-container-class":"px-0"},{editor:c(()=>[u.editor==="froala"?(v(),W(Eo,{key:0,modelValue:e(o),"onUpdate:modelValue":r[0]||(r[0]=m=>Ze(o)?o.value=m:null)},null,8,["modelValue"])):(v(),W(yo,{key:1,modelValue:e(o),"onUpdate:modelValue":r[1]||(r[1]=m=>Ze(o)?o.value=m:null)},null,8,["modelValue"]))]),file:c(()=>[w("div",{class:Pe(t.fileUploadContainerClasses)},[l(Uo,{files:t.files,"onEmit:fileUpload":r[2]||(r[2]=m=>a("emit:fileUpload",m))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},pl={class:"flex flex-col justify-between h-full"},ml={class:"px-6 py-4 overflow-y-auto"},_l={class:"actions p-6"},Ae={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(u,{emit:a}){return(t,o)=>{const q=Re;return v(),S("div",pl,[w("div",ml,[ht(t.$slots,"default")]),w("div",_l,[l(q,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:o[0]||(o[0]=s=>a("emit:clearForm"))}),l(q,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:o[1]||(o[1]=s=>a("emit:preview"))})])])}}},fl=ke("sd-stores-inner",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ae().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,document_type:ee.INNER,document_sub_type:Z.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:re.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__departments:{required:$.withMessage("Поле не должен быть пустым",E)},__approvers:{},__signers:{required:$.withMessage("Поле не должен быть пустым",E)}}}},actions:{async actionCreateDocument(u){let a={...u,type:ft,sub_type:ft};this.buttonLoading=!0;const{response:t,error:o}=await $e(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):Promise.reject(o)},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers),this.model.__departments=await co(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),ql={class:"font-semibold text-xl"},Ne={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(u,{emit:a}){const o=nt(u,"modelValue"),{t:q}=le();return(s,r)=>{const m=Re,n=Ut;return v(),W(n,{modelValue:e(o),"onUpdate:modelValue":r[1]||(r[1]=_=>Ze(o)?o.value=_:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[w("span",ql,I(e(q)("preview")),1)]),content:c(()=>[ht(s.$slots,"content")]),footer:c(()=>[l(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(m,{label:u.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:u.sendButtonLoading,onClick:r[0]||(r[0]=_=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},aa={__name:"InnerForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ae(),o=fl();ye();const q=ce(),s=J(!1);J(null);const{t:r}=le(),m=ue(),n=pe(),_=te(o.rules,o.model),k=async()=>{await _.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.departments=[],o.model.departments=o.model.__departments.map(p=>p.id),o.model.files=[],o.model.files=o.model.__files.map(p=>({id:p.id})),o.model.journal=re.INNER,o.model.sender=t.currentUser.top_level_department.id,o.model.approvers=oe(o.model.__approvers),o.model.signers=oe(o.model.__signers),o.model.document_type=n.params.document_type,o.model.document_sub_type=n.params.document_sub_type,o.model.receiver&&delete o.model.receiver)},T=()=>{a.formType===j?L():M()},L=async()=>{const f=await o.actionCreateDocument(o.model);await q.actionCountList(),f?(s.value=!1,A(null,r("document-sent"),B.SUCCESS),await m.replace({name:Be,query:{document_type:ee.INNER}})):A(null,r("error-occurred"),B.ERROR)},M=async()=>{await o.actionUpdateDocument({id:n.params.id,body:o.model}),await q.actionCountList(),A(null,r("document-sent"),B.SUCCESS),await m.replace({name:Me,params:{id:n.params.id,document_type:ee.INNER,document_sub_type:Z.SERVICE_LETTER}})},R=()=>{console.log("Clear Form")},D=f=>{o.model.__files=[],f.forEach(p=>{o.model.__files.push(p)})};return et(async()=>{n.params.id&&await o.actionGetDocumentDetailForUpdate(n.params.id)}),De(()=>{ze(o.model)}),(f,p)=>{const x=we,i=_e,d=Ie,h=me;return e(o).detailLoading?(v(),W(x,{key:0})):(v(),S(Q,{key:1},[l(e(xe),{title:a.formType===e(j)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[l(Ae,{"onEmit:preview":k,"onEmit:clearForm":R},{default:c(()=>[l(h,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(Xt,{modelValue:e(_).__departments.$model,"onUpdate:modelValue":p[0]||(p[0]=g=>e(_).__departments.$model=g),error:e(_).__departments},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(_).short_description.$model,"onUpdate:modelValue":p[1]||(p[1]=g=>e(_).short_description.$model=g),error:e(_).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(_).__approvers.$model,"onUpdate:modelValue":p[2]||(p[2]=g=>e(_).__approvers.$model=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":p[3]||(p[3]=g=>e(_).__signers.$model=g),error:e(_).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(_).content.$model,"onUpdate:modelValue":p[4]||(p[4]=g=>e(_).content.$model=g),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:s.value,"onUpdate:modelValue":p[5]||(p[5]=g=>s.value=g),"send-button-loading":e(o).buttonLoading,"onEmit:send":T},{content:c(()=>{var g,U;return[l(eo,{"compose-model":{...e(o).model,signers:e(o).model.__signers,approvers:e(o).model.__approvers,author:e(o).model.__signers[0],sender:{name:(U=(g=e(t).currentUser)==null?void 0:g.top_level_department)==null?void 0:U.name},receiver:{departments:e(o).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=ke("sd-store-application",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ae().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__approvers:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{}}}},actions:{async actionCreateDocument(u){let a={...u};this.buttonLoading=!0;const{response:t,error:o}=await $e(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers.filter(t=>t.type===je.SIGNER)),this.model.__curator=await Le([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Et=ke("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:ae().currentUser.company.id,curator:null,document_type:ee.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:re.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:$.withMessage("Поле не должен быть пустым",E)},register_date:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__negotiators:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__signers=await Y(a.signers.filter(t=>t.type!==je.NEGOTIATOR)),this.model.__negotiators=await Y(a.signers.filter(t=>t.type===je.NEGOTIATOR)),this.model.__approvers=await Y(a.approvers),this.model.__curator=await Le([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),sa={__name:"ApplicationForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ae(),o=gl();ye();const q=ce();Et();const s=J(!1);J(null);const{t:r}=le(),m=ue(),n=pe(),_=te(o.rules,o.model),k=async()=>{var p,x,i,d,h;await _.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.signers=[{user:(p=t==null?void 0:t.currentUser)==null?void 0:p.id}],o.model.sender=(i=(x=t==null?void 0:t.currentUser)==null?void 0:x.top_level_department)==null?void 0:i.id,o.model.curator=(h=(d=o==null?void 0:o.model)==null?void 0:d.__curator)==null?void 0:h.user_id,o.model.journal=re.APPLICATION,o.model.document_type=n.params.document_type,o.model.document_sub_type=n.params.document_sub_type,o.model.approvers=oe(o.model.__approvers))},T=async()=>{},L=()=>{a.formType===j?M():R()},M=async()=>{const f=await o.actionCreateDocument(o.model);await q.actionCountList(),f?(s.value=!1,A(null,r("document-sent"),B.SUCCESS),await m.replace({name:Be,query:{document_type:ee.APPLICATION}})):A(null,r("error-occurred"),B.ERROR)},R=async()=>{await o.actionUpdateDocument({id:n.params.id,body:o.model}),await q.actionCountList(),A(null,r("document-sent"),B.SUCCESS),await m.replace({name:Me,params:{id:n.params.id,document_type:ee.APPLICATION,document_sub_type:Z.LABOR_LEAVE}})},D=f=>{o.model.__files=[],f.forEach(p=>{o.model.__files.push(p)})};return et(async()=>{n.params.id&&await o.actionGetDocumentDetailForUpdate(n.params.id)}),De(()=>{ze(o.model)}),(f,p)=>{const x=we,i=_e,d=me;return e(o).detailLoading?(v(),W(x,{key:0})):(v(),S(Q,{key:1},[l(e(xe),{title:a.formType===e(j)?"create-sd-application":"update-sd-application"},{content:c(()=>[l(Ae,{"onEmit:preview":k,"onEmit:clearForm":T},{default:c(()=>[l(d,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":p[0]||(p[0]=h=>e(_).__curator.$model=h),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(_).__approvers.$model,"onUpdate:modelValue":p[1]||(p[1]=h=>e(_).__approvers.$model=h),error:e(_).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":p[2]||(p[2]=h=>e(_).__signers.$model=h),disabled:"",label:"signers",placeholder:e(t).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(_).content.$model,"onUpdate:modelValue":p[3]||(p[3]=h=>e(_).content.$model=h),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:s.value,"onUpdate:modelValue":p[4]||(p[4]=h=>s.value=h),"send-button-loading":e(o).buttonLoading,"onEmit:send":L},{content:c(()=>[l(to,{"compose-model":{...e(o).model,curator:e(o).model.__curator,author:a.formType===e(j)?e(t).currentUser:e(o).model.__signers[0].user,signers:a.formType===e(j)?[e(t).currentUser]:e(o).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},bl=ke("sd-notice-store",{state:()=>(ae(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:ee.NOTICE,document_sub_type:Z.BUSINESS_TRIP,journal:re.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:$.withMessage("Поле не должен быть пустым",E)},start_date:{required:$.withMessage("Поле не должен быть пустым",E)},route:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__companies:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__employees:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a=!1){try{this.detailLoading=!0;const{data:t}=await qe(u);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Le([],t.curator.id,!1),this.model.__employees=await Y(t.notices),a?(this.model.__approvers=await Y(t.approvers.filter(o=>{var q,s;return((q=o==null?void 0:o.user)==null?void 0:q.id)!==((s=t==null?void 0:t.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers),this.model.__companies=await _t(t.notices[0].destinations),this.model.__tags=await at(t.tags),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(u,a){try{this.detailLoading=!0;const{data:t}=await qe(u),o=await qe(a);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Le([],t.curator.id,!1),this.model.__employees=await Y(o.data.notices),this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers),this.model.__companies=await _t(o.data.notices[0].destinations),this.model.__tags=await at(t.tags),this.model.start_date=o.data.notices[0].start_date,this.model.end_date=o.data.notices[0].end_date,this.model.__tags=t.tags,this.model.route=o.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),hl={class:"flex w-full gap-x-4"},ia={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=le(),o=pe(),q=ue(),s=ae(),r=bl(),m=ce();ye();const n=te(r.rules,r.model),_=J(!1),k=ne(()=>{const i=a.formType===j,d=o.params.document_sub_type;return d===Z.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":d===Z.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),T=ne(()=>{var i,d;return o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL&&((i=o==null?void 0:o.query)==null?void 0:i.compose_id)&&((d=o==null?void 0:o.query)==null?void 0:d.document_sub_type)===Z.BUSINESS_TRIP}),L=ne(()=>{var i;return!!(o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL&&((i=r==null?void 0:r.model)!=null&&i.trip_notice_id))});Dt(()=>r.model.__tags,i=>{if(a.formType===j)if(i&&i.length){let d=`${i.map(h=>h.name_uz).join(", ")} yuzasidan`;r.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else r.model.short_description=null});const M=async()=>{var d,h,g,U,P;await n.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=oe(r.model.__approvers),r.model.signers=oe(r.model.__signers),r.model.curator=(h=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:h.user_id,r.model.journal=o.params.document_type===ee.DECREE||o.params.document_type===ee.ORDER?re.ORDERS_PROTOCOLS:re.INNER,r.model.company=s.currentUser.company.id,r.model.notices=r.model.__employees.map(V=>({start_date:r.model.start_date,end_date:r.model.end_date,user:V.id,route:r.model.route,companies:r.model.__companies.map(y=>y.id)})),r.model.sender=(U=(g=s==null?void 0:s.currentUser)==null?void 0:g.top_level_department)==null?void 0:U.id,r.model.tags=r.model.__tags.map(V=>({id:V.id})),r.model.files=r.model.__files.map(V=>({id:V.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,T.value&&(r.model.trip_notice_id=(P=o==null?void 0:o.query)==null?void 0:P.compose_id),_.value=!0)},R=()=>{},D=i=>{r.model.__files=[],i.forEach(d=>{r.model.__files.push(d)})},f=async()=>{T.value&&(r.model.notices=[]);const i=await r.actionCreateDocument(r.model);await m.actionCountList(),i?(_.value=!1,A(null,t("document-sent"),B.SUCCESS),await q.replace({name:Be,query:{document_type:o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL?ee.DECREE:o.params.document_sub_type===Z.BUSINESS_TRIP_ORDER_LOCAL?ee.ORDER:ee.NOTICE}})):A(null,t("error-occurred"),B.ERROR)},p=async()=>{(T.value||L.value)&&(r.model.notices=[]),await r.actionUpdateDocument({id:o.params.id,body:r.model}),await m.actionCountList(),A(null,t("changed"),B.SUCCESS),await q.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},x=()=>{a.formType===j?f():p()};return Qe(async()=>{o.params.id&&o.query.trip_notice_id&&o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL?await r.actionGetDocumentDetailForUpdateForCustomUse(o.params.id,o.query.trip_notice_id):o.params.id?await r.actionGetDocumentDetailForUpdate(o.params.id):T.value&&await r.actionGetDocumentDetailForUpdate(o.query.compose_id,!0)}),De(()=>{ze(r.model)}),(i,d)=>{const h=we,g=_e,U=Fe,P=tt,V=Ie,y=me;return e(r).detailLoading?(v(),W(h,{key:0})):(v(),S(Q,{key:1},[l(e(xe),{title:k.value},{content:c(()=>[l(Ae,{"onEmit:preview":M,"onEmit:clearForm":R},{default:c(()=>[l(y,null,{default:c(()=>[l(g,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=b=>e(n).__curator.$model=b),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=b=>e(n).__employees.$model=b),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:T.value||L.value},null,8,["modelValue","error","disabled"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(Kt,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=b=>e(n).__companies.$model=b),error:e(n).__companies,"text-truncate":"",disabled:T.value||L.value},null,8,["modelValue","error","disabled"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(rt,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=b=>e(n).__tags.$model=b),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:b})=>[se(I(b.name),1)]),option:c(({value:b})=>[l(e(he),{title:b.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[w("div",hl,[l(U,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=b=>e(n).start_date.$model=b),d[5]||(d[5]=b=>e(n).start_date.$model=e(ge)(b))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:T.value||L.value},null,8,["modelValue","error","min-date","disabled"]),l(U,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=b=>e(n).end_date.$model=b),d[7]||(d[7]=b=>e(n).end_date.$model=e(ge)(b))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:T.value||L.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(P,{modelValue:e(n).route.$model,"onUpdate:modelValue":d[8]||(d[8]=b=>e(n).route.$model=b),error:e(n).route,options:e(Mt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:T.value||L.value},null,8,["modelValue","error","options","disabled"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=b=>e(r).model.__approvers=b),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=b=>e(n).__signers.$model=b),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(V,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=b=>e(n).short_description.$model=b),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(g,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(n).content.$model,"onUpdate:modelValue":d[12]||(d[12]=b=>e(n).content.$model=b),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:_.value,"onUpdate:modelValue":d[13]||(d[13]=b=>_.value=b),"send-button-loading":e(r).buttonLoading,"onEmit:send":x},{content:c(()=>[e(o).params.document_sub_type===e(Z).BUSINESS_TRIP_DECREE_LOCAL?(v(),W(e(dl),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(o).params.document_sub_type===e(Z).BUSINESS_TRIP_ORDER_LOCAL?(v(),W(e(oo),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(v(),W(e(lo),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},da={__name:"OrderForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=Et(),o=ce(),q=ae(),s=pe(),r=ue(),m=te(t.rules,t.model),{t:n}=le(),_=J(!1),k=async()=>{var p,x,i,d;await m.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.approvers=oe(t.model.__approvers),t.model.curator=(x=(p=t==null?void 0:t.model)==null?void 0:p.__curator)==null?void 0:x.user_id,t.model.sender=(d=(i=q==null?void 0:q.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,t.model.files=t.model.__files.map(h=>({id:h.id})),t.model.document_type=s.params.document_type,t.model.document_sub_type=s.params.document_sub_type,t.model.journal=re.ORDERS_PROTOCOLS,t.model.register_date=ge(t.model.register_date),t.model.__negotiators.forEach(h=>{t.model.signers.push(h.hasOwnProperty("user")?{id:h.id,user:h.user.id,type:je.NEGOTIATOR}:{user:h.id,type:je.NEGOTIATOR})}),s.query.compose_id&&(t.model.trip_notice_id=s.query.compose_id),_.value=!0)},T=()=>{},L=async()=>{try{const f=await t.actionCreateDocument(t.model);await o.actionCountList(),f&&(_.value=!1,A(null,n("document-sent"),B.SUCCESS),await r.replace({name:Be,query:{document_type:ee.ORDER}}))}catch{A(null,n("error-occurred"),B.ERROR)}},M=async()=>{try{const f=await t.actionUpdateDocument({id:s.params.id,body:t.model});await o.actionCountList(),A(null,n("changed"),B.SUCCESS),await r.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{A(null,n("error-occurred"),B.ERROR)}},R=()=>{a.formType===j?L():M()},D=f=>{t.model.__files=[],f.forEach(p=>{t.model.__files.push(p)})};return et(async()=>{s.params.id&&await t.actionGetDocumentDetailForUpdate(s.params.id)}),De(()=>{ze(t.model)}),(f,p)=>{const x=we,i=_e,d=Ie,h=Fe,g=me;return e(t).detailLoading?(v(),W(x,{key:0})):(v(),S(Q,{key:1},[l(e(xe),{title:a.formType===e(j)?"create-order":"update-order"},{content:c(()=>[l(Ae,{"onEmit:preview":k,"onEmit:clearForm":T},{default:c(()=>[l(g,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":p[0]||(p[0]=U=>e(m).__curator.$model=U),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(m).register_number.$model,"onUpdate:modelValue":p[1]||(p[1]=U=>e(m).register_number.$model=U),error:e(m).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(h,{modelValue:e(m).register_date.$model,"onUpdate:modelValue":p[2]||(p[2]=U=>e(m).register_date.$model=U),error:e(m).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":p[3]||(p[3]=U=>e(t).model.__approvers=U),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(m).__negotiators.$model,"onUpdate:modelValue":p[4]||(p[4]=U=>e(m).__negotiators.$model=U),error:e(m).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(m).content.$model,"onUpdate:modelValue":p[5]||(p[5]=U=>e(m).content.$model=U),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:_.value,"onUpdate:modelValue":p[6]||(p[6]=U=>_.value=U),"send-button-loading":e(t).buttonLoading,"onEmit:send":R},{content:c(()=>[l(e(no),{"compose-model":e(t).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},yl=ke("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers)}catch{}finally{this.detailLoading=!1}}}}),ca={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=le(),o=pe(),q=ue(),s=ae(),r=yl(),m=ce();ye();const n=J(!1),_=te(r.rules,r.model),k=async()=>{var p,x,i,d;await _.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=oe(r.model.__approvers),r.model.signers=oe(r.model.__signers),r.model.curator=(x=(p=r==null?void 0:r.model)==null?void 0:p.__curator)==null?void 0:x.user_id,r.model.journal=re.INNER,r.model.company=s.currentUser.company.id,r.model.sender=(d=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,r.model.files=r.model.__files.map(h=>({id:h.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,n.value=!0)},T=()=>{},L=f=>{r.model.__files=[],f.forEach(p=>{r.model.__files.push(p)})},M=async()=>{const f=await r.actionCreateDocument(r.model);await m.actionCountList(),f?(n.value=!1,A(null,t("document-sent"),B.SUCCESS),await q.replace({name:Be,query:{document_type:ee.NOTICE}})):A(null,t("error-occurred"),B.ERROR)},R=async()=>{await r.actionUpdateDocument({id:o.params.id,body:r.model}),await m.actionCountList(),A(null,t("changed"),B.SUCCESS),await q.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},D=()=>{a.formType===j?M():R()};return Qe(async()=>{o.params.id&&await r.actionGetDocumentDetailForUpdate(o.params.id)}),De(()=>{ze(r.model)}),(f,p)=>{const x=we,i=_e,d=Ie,h=me;return e(r).detailLoading?(v(),W(x,{key:0})):(v(),S(Q,{key:1},[l(e(xe),{title:a.formType===e(j)?"create-notice":"update-notice"},{content:c(()=>[l(Ae,{"onEmit:preview":k,"onEmit:clearForm":T},{default:c(()=>[l(h,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":p[0]||(p[0]=g=>e(_).__curator.$model=g),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(_).short_description.$model,"onUpdate:modelValue":p[1]||(p[1]=g=>e(_).short_description.$model=g),error:e(_).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":p[2]||(p[2]=g=>e(r).model.__approvers=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":p[3]||(p[3]=g=>e(_).__signers.$model=g),error:e(_).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(_).content.$model,"onUpdate:modelValue":p[4]||(p[4]=g=>e(_).content.$model=g),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:n.value,"onUpdate:modelValue":p[5]||(p[5]=g=>n.value=g),"send-button-loading":e(r).buttonLoading,"onEmit:send":D},{content:c(()=>[l(e(ro),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wl=ke("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){const a={...u};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:t,error:o}=await $e(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t={...a};delete t.bookings,delete t.notices,delete t.trip_plans;try{this.buttonLoading=!0;const{data:o}=await Ve({id:u,body:t});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){try{this.detailLoading=!0;const{data:t}=await qe(u);Te(this.model,t),this.model.__curator=await Le([],t.curator.id,!1),this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers)}catch{}finally{this.detailLoading=!1}}}}),ua={__name:"DecreeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=le(),o=pe(),q=ue(),s=ae(),r=ce();ye();const m=J(!1),n=wl(),_=it(),k=te(n.rules,n.model),T=async()=>{var i,d,h,g;await k.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=oe(n.model.__approvers),n.model.signers=oe(n.model.__signers),n.model.curator=(d=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:d.user_id,n.model.journal=re.ORDERS_PROTOCOLS,n.model.company=s.currentUser.company.id,n.model.sender=(g=(h=s==null?void 0:s.currentUser)==null?void 0:h.top_level_department)==null?void 0:g.id,n.model.files=n.model.__files.map(U=>({id:U.id})),n.model.document_type=o.params.document_type,n.model.document_sub_type=o.params.document_sub_type,o.query.compose_id&&(n.model.trip_notice_id=o.query.compose_id),m.value=!0)},L=()=>{},M=x=>{n.model.__files=[],x.forEach(i=>{n.model.__files.push(i)})},R=async()=>{const x=await n.actionCreateDocument(n.model);await r.actionCountList(),x?(m.value=!1,A(null,t("document-sent"),B.SUCCESS),await q.replace({name:Be,query:{document_type:o.params.document_type}})):A(null,t("error-occurred"),B.ERROR)},D=async()=>{await n.actionUpdateDocument({id:o.params.id,body:n.model}),await r.actionCountList(),A(null,t("changed"),B.SUCCESS),await q.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},f=()=>{a.formType===j?R():D()},p=async x=>{const{data:i}=await _.actionGetDocumentDetail(x);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return Qe(async()=>{a.formType===j&&o.query.compose_id?await p(o.query.compose_id):a.formType===Se&&o.query.trip_notice_id&&o.params.id?(await n.actionGetDocumentDetailForUpdate(o.params.id,null),await p(o.query.trip_notice_id)):a.formType===Se&&o.params.id&&await n.actionGetDocumentDetailForUpdate(o.params.id,null)}),De(()=>{ze(n.model)}),(x,i)=>{const d=we,h=_e,g=Ie,U=me;return e(n).detailLoading?(v(),W(d,{key:0})):(v(),S(Q,{key:1},[l(e(xe),{title:a.formType===e(j)?"create-decree":"update-decree"},{content:c(()=>[l(Ae,{"onEmit:preview":T,"onEmit:clearForm":L},{default:c(()=>[l(U,null,{default:c(()=>[l(h,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=P=>e(k).__curator.$model=P),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(h,{"col-class":"w-1/2"},{default:c(()=>[l(g,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=P=>e(k).short_description.$model=P),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(h,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=P=>e(n).model.__approvers=P),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(h,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=P=>e(k).__signers.$model=P),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(h,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(k).content.$model,"onUpdate:modelValue":i[4]||(i[4]=P=>e(k).content.$model=P),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:m.value,"onUpdate:modelValue":i[5]||(i[5]=P=>m.value=P),"send-button-loading":e(n).buttonLoading,"onEmit:send":f},{content:c(()=>[l(e(vt),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vl=ke("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:$.withMessage("Поле не должен быть пустым",E)},start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},__user:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);return Te(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers),this.model.__user=await We("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),pa={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=pe(),o=ue(),q=ae(),s=vl();it();const r=ce(),{t:m}=le(),n=te(s.rules,s.model),_=J(!1),k=J([]),T=ne(()=>a.formType===j?"create-poa":"update-poa"),L=ne(()=>s.model.start_date?new Date(s.model.start_date):new Date),M=async()=>{var d,h,g,U,P,V,y,b,C,G,N,F,K,O,X,z,Ce,Ge,ut,pt;if(await n.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=oe(s.model.__approvers),s.model.signers=oe(s.model.__signers),s.model.curator=(h=(d=s==null?void 0:s.model)==null?void 0:d.__curator)==null?void 0:h.user_id,s.model.user=(U=(g=s==null?void 0:s.model)==null?void 0:g.__user)==null?void 0:U.id,s.model.journal=re.POWER_OF_ATTORNEY,s.model.company=(V=(P=q.currentUser)==null?void 0:P.company)==null?void 0:V.id,s.model.sender=(b=(y=q==null?void 0:q.currentUser)==null?void 0:y.top_level_department)==null?void 0:b.id,s.model.document_type=t.params.document_type,s.model.document_sub_type=t.params.document_sub_type,s.model.content=".",s.model.parent=(G=(C=s.model)==null?void 0:C.__parent)==null?void 0:G.id,!((F=(N=s==null?void 0:s.model)==null?void 0:N.__user)!=null&&F.passport_seria||(O=(K=s==null?void 0:s.model)==null?void 0:K.__user)!=null&&O.passport_number||(z=(X=s==null?void 0:s.model)==null?void 0:X.__user)!=null&&z.passport_issue_date||(Ge=(Ce=s==null?void 0:s.model)==null?void 0:Ce.__user)!=null&&Ge.passport_issued_by)){A(null,`${(pt=(ut=s.model)==null?void 0:ut.__user)==null?void 0:pt.full_name}: ${m("passport-details-error")}`,B.WARNING);return}_.value=!0}},R=()=>{},D=async()=>{const i=await s.actionCreateDocument(s.model);await r.actionCountList(),i?(_.value=!1,A(null,m("document-sent"),B.SUCCESS),await o.replace({name:Be,query:{document_type:ee.POWER_OF_ATTORNEY}})):A(null,m("error-occurred"),B.ERROR)},f=async()=>{await s.actionUpdateDocument({id:t.params.id,body:s.model}),await r.actionCountList(),A(null,m("changed"),B.SUCCESS),await o.replace({name:Me,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},p=()=>{a.formType===j?D():f()},x=async i=>{const{data:d}=await po({user:i.id,document_sub_type:t.params.document_sub_type,status:5});k.value=d.results};return Qe(async()=>{if(t.params.id){const i=await s.actionGetDocumentDetailForUpdate(t.params.id);i.parent&&(k.value=[i.parent])}}),De(()=>{ze(s.model)}),(i,d)=>{const h=we,g=_e,U=Fe,P=tt,V=me;return e(s).detailLoading?(v(),W(h,{key:0})):(v(),S(Q,{key:1},[l(e(xe),{title:T.value},{content:c(()=>[l(Ae,{"onEmit:preview":M,"onEmit:clearForm":R},{default:c(()=>[l(V,null,{default:c(()=>[l(g,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=y=>e(n).__curator.$model=y),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(n).__user.$model,"onUpdate:modelValue":d[1]||(d[1]=y=>e(n).__user.$model=y),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":d[2]||(d[2]=y=>x(y))},null,8,["modelValue","error"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(U,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[3]||(d[3]=y=>e(n).start_date.$model=y),d[4]||(d[4]=y=>e(n).start_date.$model=e(ge)(y))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(U,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[5]||(d[5]=y=>e(n).end_date.$model=y),d[6]||(d[6]=y=>e(n).end_date.$model=e(ge)(y))],error:e(n).end_date,"min-date":L.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":d[7]||(d[7]=y=>e(s).model.__approvers=y),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[8]||(d[8]=y=>e(n).__signers.$model=y),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(g,{"col-class":"w-1/2"},{default:c(()=>[l(P,{modelValue:e(s).model.__parent,"onUpdate:modelValue":d[9]||(d[9]=y=>e(s).model.__parent=y),options:k.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:_.value,"onUpdate:modelValue":d[10]||(d[10]=y=>_.value=y),"send-button-loading":e(s).buttonLoading,"onEmit:send":p},{content:c(()=>[l(ao,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},kl={class:"base-stepper-component flex items-center select-none"},xl=["onClick"],$l={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Ct={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(u,{emit:a}){const{t}=le(),o=q=>{a("emit:stepClick",q)};return(q,s)=>{const r=fe;return v(),S("div",kl,[(v(!0),S(Q,null,de(u.items,(m,n)=>(v(),S("div",{key:m.id,class:"flex items-center"},[w("div",{class:Pe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",m.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:_=>o(m)},[l(r,{icon:m.icon,class:Pe(m.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),w("span",null,I(e(t)(m.label)),1)],10,xl),n<u.items.length-1?(v(),S("div",$l)):ie("",!0)]))),128))])}}},Oe=ke("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList],__users_to_extend:null,__regions_to_extend:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:$.withMessage("Поле не должен быть пустым",E)}},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)},__groups:{$each:$.forEach({__users:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},__regions:{required:$.withMessage("Поле не должен быть пустым",E)},__start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__end_date:{required:$.withMessage("Поле не должен быть пустым",E)},__company:{required:$.withMessage("Поле не должен быть пустым",E)},__route:{required:$.withMessage("Поле не должен быть пустым",E)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:$.forEach({users:{required:$.withMessage("Поле не должен быть пустым",E)},text:{required:$.withMessage("Поле не должен быть пустым",E)}})}},booking_model:{bookings:[{type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:$.forEach({segments:{$each:$.forEach({departure_city:{required:$.withMessage("Поле не должен быть пустым",E)},arrival_city:{required:$.withMessage("Поле не должен быть пустым",E)},date:{required:$.withMessage("Поле не должен быть пустым",E)},time:{required:$.withMessage("Поле не должен быть пустым",E)},segment_class:{required:$.withMessage("Поле не должен быть пустым",E)}})},passengers:{required:$.withMessage("Поле не должен быть пустым",E)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Nt,active:!0,value:Xe},{id:4,label:"decree",icon:Pt,active:!0,value:Ke}],routeTabItems:[{id:1,title:"airplane",icon:Ot,value:Je,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:It,value:mo,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:Bt,value:xt,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:At,value:be},{id:2,title:"complex-route",icon:jt,value:st},{id:3,title:"one-way",icon:zt,value:_o}]}),actions:{async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:t,error:o}=await $e(Ue,a);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t=await lt(a);try{this.buttonLoading=!0;const{data:o}=await Ve({id:u,body:t});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){var a,t;try{this.detailLoading=!0;const{data:o}=await qe(u),q=await kt(o.id);this.decreeModel=(t=(a=q==null?void 0:q.data)==null?void 0:a.to_composes[0])==null?void 0:t.from_compose,Te(this.model,o),this.model.__curator=await Le([],o.curator.id,!1),this.model.__signers=await Y(o.signers),this.model.__approvers=await Y(o.approvers);const s=Object.values(o.notices.reduce((r,m)=>{const n=m.group_id;return r[n]=r[n]||{group_id:n,items:[]},r[n].items.push(m),r},{}));this.model.__groups=await Promise.all(s.map(async r=>{var R;const m=await Promise.all(r.items.map(async D=>({...await Y([],D.user.id,!1),business_trip_id:D.id}))),n=await at(r.items[0].tags),_=await We("regions",r.items[0].locations),k=await We("companies",[],!1,(R=r.items[0].sender_company)==null?void 0:R.id),T=r.items[0].start_date,L=r.items[0].end_date,M=r.items[0].route;return{__users:m,__tags:n,__regions:_,__start_date:T,__end_date:L,__company:k,__route:M}})),this.trip_plan_model.trip_plans=await Promise.all(o.trip_plans.map(async(r,m)=>({...r,users:await Y(r.users)}))),this.booking_model.bookings=await Promise.all(o.bookings.map(async r=>({type:r.type,route:r.route,segments:await Promise.all(r.segments.map(async m=>({departure_city:await We("regions",[],!1,m.departure_city.id),arrival_city:await We("regions",[],!1,m.arrival_city.id),segment_class:await fo.find(n=>n.value===m.segment_class),date:ge(m.departure_date),time:await so(m.departure_date,m.departure_end_date)}))),passengers:await Y(r.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},async actionStepClick(u,a,t){await u.replace({query:{...a.query,step:t}}),this.stepperItems.forEach(q=>q.active=q.value===t),await yt();const o=document.querySelector(".document-view-aside");o&&o.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(u){this.booking_model.bookings.splice(u,1)},actionChangeRouteSegment(u,a){const t=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=u===be?[t(),t()]:[t()]},async actionAddRouteLine(u){this.booking_model.bookings[u].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(u,a){this.booking_model.bookings[u].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),Vl={class:"trip-info-components"},Ul={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},El={class:"flex justify-between"},Cl={class:"text-base text-primary-900 font-semibold mb-1"},Sl=["onClick"],Tl={class:"flex align-center gap-x-4"},Ll={class:"flex w-full gap-x-4"},Rl={class:"flex w-full gap-x-4"},Dl={class:"text-base text-primary-900 font-semibold mb-2"},Ml={class:"flex items-center justify-between"},bt={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:t}){const o=pe(),q=ue(),s=Oe();ye();const{t:r,locale:m}=le(),n=te(s.rules,s.model),_=J(!1),k=D=>{s.model.__files=[],D.forEach(f=>{s.model.__files.push(f)})},T=()=>{s.actionAddGroupBlock()},L=async D=>{const f=await n.value.$validate();if(_.value=!0,!f){A(null,r("fill-required-fields"),B.WARNING);return}t("emit:onValidateAndSend"),await s.actionStepClick(q,o,"decree")},M=(D,f)=>{s.model.__groups[f].__regions=[]},R=(D,f)=>{D.value.forEach(p=>{var x,i,d,h;if(p.id===((h=(d=(i=(x=s.model)==null?void 0:x.__groups[f])==null?void 0:i.__company)==null?void 0:d.region)==null?void 0:h.id)){const g=s.model.__groups[f].__regions.findIndex(U=>U.id===p.id);(g||g===0)&&s.model.__groups[f].__regions.splice(g,1)}})};return a({stepClick:L}),(D,f)=>{const p=_e,x=Ie,i=fe,d=tt,h=rt,g=Fe,U=me,P=Re;return v(),S("div",Vl,[l(U,null,{default:c(()=>[l(p,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":f[0]||(f[0]=V=>e(n).__curator.$model=V),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(p,{"col-class":"w-1/2"},{default:c(()=>[l(x,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":f[1]||(f[1]=V=>e(n).short_description.$model=V),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(p,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(v(!0),S(Q,null,de(e(s).model.__groups,(V,y)=>(v(),S("div",Ul,[w("div",El,[w("span",Cl,I(e(r)("group"))+"-"+I(y+1),1),y!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:b=>e(s).actionDeleteGroupBlock(y)},[l(i,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Sl)):ie("",!0)]),l(U,null,{default:c(()=>[l(p,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:V.__users,"onUpdate:modelValue":b=>V.__users=b,error:e(n).__groups.$each.$response.$data[y].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(p,{"col-class":"w-1/2"},{default:c(()=>[w("div",Tl,[l(d,{modelValue:V.__company,"onUpdate:modelValue":b=>V.__company=b,error:e(n).__groups.$each.$response.$data[y].__company,options:V.__filialList,"onUpdate:options":b=>V.__filialList=b,required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":_.value,class:"w-1/2","onEmit:change":b=>M(b,y)},{option:c(({option:b})=>[l(e(he),{title:b.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","onUpdate:options","show-nested-error","onEmit:change"]),l(h,{modelValue:V.__regions,"onUpdate:modelValue":b=>V.__regions=b,error:e(n).__groups.$each.$response.$data[y].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":_.value,class:"w-1/2","onEmit:change":b=>R(b,y)},{chip:c(({value:b})=>[se(I(b.name),1)]),option:c(({value:b})=>[l(e(he),{title:b.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error","onEmit:change"])])]),_:2},1024),l(p,{"col-class":"w-1/2"},{default:c(()=>[w("div",Ll,[l(h,{modelValue:V.__tags,"onUpdate:modelValue":b=>V.__tags=b,error:e(n).__groups.$each.$response.$data[y].__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":_.value,class:"w-1/2"},{chip:c(({value:b})=>[se(I(b.name),1)]),option:c(({value:b})=>[l(e(he),{title:b.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),l(d,{modelValue:V.__route,"onUpdate:modelValue":b=>V.__route=b,error:e(n).__groups.$each.$response.$data[y].__route,options:e(s).routeTabItems,"onUpdate:options":f[2]||(f[2]=b=>e(s).routeTabItems=b),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(m)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":_.value,class:"w-1/2"},{option:c(({option:b})=>[l(e(he),{title:e(r)(b.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),l(p,{"col-class":"w-1/2"},{default:c(()=>[w("div",Rl,[l(g,{modelValue:V.__start_date,"onUpdate:modelValue":[b=>V.__start_date=b,b=>V.__start_date=e(ge)(b)],error:e(n).__groups.$each.$response.$data[y].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(g,{modelValue:V.__end_date,"onUpdate:modelValue":[b=>V.__end_date=b,b=>V.__end_date=e(ge)(b)],error:e(n).__groups.$each.$response.$data[y].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(P,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:T},null,8,["icon-left"])]),_:1}),l(p,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":f[3]||(f[3]=V=>e(s).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(p,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":f[4]||(f[4]=V=>e(n).__signers.$model=V),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(p,{"col-class":"w-full"},{default:c(()=>[w("div",{class:Pe(["border-[1.5px] rounded-2xl px-5 py-4",_.value&&!e(s).model.content?"border-critic-500":"border-greyscale-200"])},[w("div",Dl,I(e(r)("notice")),1),l(Ee,{modelValue:e(n).content.$model,"onUpdate:modelValue":f[5]||(f[5]=V=>e(n).content.$model=V),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).model.__files,"onEmit:fileUpload":k},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),w("div",Ml,[l(P,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(P,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:f[6]||(f[6]=V=>L(e(dt)))})])])}}},Nl={class:"work-plan-component"},Pl={class:"flex flex-col gap-y-3"},Ol={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Il={class:"flex justify-between"},Bl={class:"text-base text-primary-900 font-semibold mb-1"},Al=["onClick"],jl={class:"flex items-center justify-between mt-10"},zl={class:"flex items-center gap-x-1"},Fl={__name:"WorkPlan",setup(u,{expose:a}){const{t}=le(),o=pe(),q=ue(),s=Oe(),r=te(s.trip_plan_rules,s.trip_plan_model),m=J(!1),n=ne(()=>{const T=new Set;return s.model.__groups.reduce((L,M)=>M.__users&&Array.isArray(M.__users)?L.concat(M.__users):L,[]).filter(L=>T.has(L.id)?!1:(T.add(L.id),!0))}),_=async T=>{const L=await r.value.$validate();if(m.value=!0,!L){A(null,t("fill-required-fields"),B.WARNING);return}const M=s.trip_plan_model.trip_plans.flatMap(D=>{var f;return(f=D.users)==null?void 0:f.map(p=>p.id)}),R=n.value.filter(D=>!M.includes(D.id));R.length?(A(null,`У следующих сотрудников нет плана работы: ${R==null?void 0:R.map(D=>D.first_name+" "+D.last_name).join(", ")}.`,B.WARNING),A(null,"У всех сотрудников должен быть назначен рабочий план.",B.WARNING)):await s.actionStepClick(q,o,T)},k=()=>{s.actionAddWorkPlanRow(),m.value=!1};return a({stepClick:_}),(T,L)=>{const M=fe,R=Vt,D=_e,f=me,p=Re;return v(),S("div",Nl,[w("div",Pl,[(v(!0),S(Q,null,de(e(s).trip_plan_model.trip_plans,(x,i)=>(v(),S("div",Ol,[w("div",Il,[w("span",Bl,I(e(t)("plan"))+"-"+I(i+1),1),i!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d=>e(s).actionDeleteWorkPlanRow(i)},[l(M,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Al)):ie("",!0)]),l(f,null,{default:c(()=>[l(D,{"col-class":"w-1/2"},{default:c(()=>[l(R,{modelValue:x.text,"onUpdate:modelValue":d=>x.text=d,error:e(r).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(D,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:x.users,"onUpdate:modelValue":d=>x.users=d,options:n.value,error:e(r).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(p,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:k},null,8,["icon-left"]),w("div",jl,[l(p,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",zl,[l(p,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:L[0]||(L[0]=x=>_(e(Xe)))}),l(p,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:L[1]||(L[1]=x=>_(e($t)))})])])])}}};const Gl={class:"base-time-picker"},Wl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(u){const a=u,t=nt(a,"modelValue"),{t:o}=le();return(q,s)=>{var n;const r=wo,m=fe;return v(),S("div",Gl,[l(r,{label:a.label,required:a.required},null,8,["label","required"]),l(e(vo),{modelValue:e(t),"onUpdate:modelValue":s[0]||(s[0]=_=>Ze(t)?t.value=_:null),"time-picker":"",range:u.range,"cancel-text":e(o)("cancel"),"select-text":e(o)("select"),placeholder:e(o)(u.placeholder),ref:"datePicker",class:Pe({"input-error":((n=u.error)==null?void 0:n.$error)&&u.showNestedError})},{"input-icon":c(()=>[l(m,{icon:e(Ft),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Yl={class:"route-component flex flex-col gap-y-3"},Hl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Xl={class:"flex items-center justify-between"},Kl={class:"flex items-center gap-x-4"},Ql={class:"text-base text-primary-900 font-semibold mb-1"},Jl={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Zl={class:"text-xs text-greyscale-900 font-medium"},en=["onClick"],tn=["onClick"],on={class:"text-sm text-primary-500 font-semibold"},ln={class:"flex items-center justify-between mt-10"},nn={class:"flex items-center gap-x-1"},rn={__name:"Route",props:{formType:{type:String,default:j}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:t}){const{t:o}=le(),q=pe(),s=ue(),r=Oe(),m=ye();ae(),ce();const n=te(r.booking_model_rules,r.booking_model);J(!1);const _=J(!1),k=ne(()=>{const i=new Set;return r.model.__groups.reduce((d,h)=>h.__users&&Array.isArray(h.__users)?d.concat(h.__users):d,[]).filter(d=>i.has(d.id)?!1:(i.add(d.id),!0))}),T=i=>{r.routeTabItems.forEach(d=>d.active=d.id===i.id)},L=(i,d)=>{r.routeTypeTabItems.forEach(h=>h.active=h.id===i.id),r.actionChangeRouteSegment(i.value,d)},M=async(i,d=!1)=>{var P,V;const h=await n.value.$validate();if(_.value=!0,!h){A(null,o("fill-required-fields"),B.WARNING);return}const g=(P=r.booking_model.bookings)==null?void 0:P.flatMap(y=>{var b;return(b=y.passengers)==null?void 0:b.map(C=>C==null?void 0:C.id)}),U=(V=k.value)==null?void 0:V.filter(y=>!(g!=null&&g.includes(y.id)));U.length?(A(null,`У следующих сотрудников не назначен маршрут: ${U.map(y=>y.first_name+" "+y.last_name).join(", ")}.`,B.WARNING),A(null,"У всех сотрудников должен быть назначен маршрут",B.WARNING)):(d&&t("emit:onValidateAndSend"),await r.actionStepClick(s,q,i))},R=()=>{r.actionAddRouteRow(),_.value=!1},D=(i,d,h,g)=>{g.type===be&&(r.booking_model.bookings[d].segments[h+1].arrival_city=i)},f=(i,d,h,g)=>{g.type===be&&(r.booking_model.bookings[d].segments[h+1].departure_city=i)},p=(i,d,h,g)=>{g.type===be&&(r.booking_model.bookings[d].segments[h+1].segment_class=i)},x=()=>{M(Ke,!0)};return a({stepClick:M}),(i,d)=>{const h=tt,g=_e,U=Fe,P=me,V=Re;return v(),S("div",Yl,[(v(!0),S(Q,null,de(e(r).booking_model.bookings,(y,b)=>(v(),S("div",Hl,[w("div",Xl,[w("div",Kl,[w("span",Ql,I(e(o)("route"))+"-"+I(b+1),1),l(gt,{modelValue:y.route,"onUpdate:modelValue":C=>y.route=C,items:e(r).routeTabItems,"onEmit:onChange":d[0]||(d[0]=C=>T(C))},null,8,["modelValue","onUpdate:modelValue","items"]),l(gt,{modelValue:y.type,"onUpdate:modelValue":C=>y.type=C,items:e(r).routeTypeTabItems,"onEmit:onChange":C=>L(C,b)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),b!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d[1]||(d[1]=(...C)=>e(r).actionDeleteRouteRow&&e(r).actionDeleteRouteRow(...C))},[l(fe,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):ie("",!0)]),w("div",Jl,[l(fe,{icon:e(wt),class:"text-warning-500"},null,8,["icon"]),w("span",Zl,I(e(o)("route-warning")),1)]),(v(!0),S(Q,null,de(y.segments,(C,G)=>(v(),S("div",null,[l(P,null,{default:c(()=>[l(g,{"col-class":"w-1/5"},{default:c(()=>[l(h,{modelValue:C.departure_city,"onUpdate:modelValue":N=>C.departure_city=N,error:e(n).bookings.$each.$response.$data[b].segments.$each.$data[G].departure_city,options:e(m).regionsList,"onUpdate:options":d[2]||(d[2]=N=>e(m).regionsList=N),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":_.value,disabled:y.type===e(be)&&G%2!==0,"onEmit:change":N=>D(N,b,G,y)},{option:c(({option:N})=>[l(e(he),{title:N.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(g,{"col-class":"w-1/5"},{default:c(()=>[l(h,{modelValue:C.arrival_city,"onUpdate:modelValue":N=>C.arrival_city=N,error:e(n).bookings.$each.$response.$data[b].segments.$each.$data[G].arrival_city,options:e(m).regionsList.filter(N=>{var F;return(N==null?void 0:N.id)!=((F=C.departure_city)==null?void 0:F.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":_.value,disabled:y.type===e(be)&&G%2!==0,"onEmit:change":N=>f(N,b,G,y)},{option:c(({option:N})=>[l(e(he),{title:N.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(g,{"col-class":"w-1/5"},{default:c(()=>[l(h,{modelValue:C.segment_class,"onUpdate:modelValue":N=>C.segment_class=N,error:e(n).bookings.$each.$response.$data[b].segments.$each.$data[G].segment_class,options:y.route===e(xt)?e(qo):y.route===e(Je)?e(go):e(bo),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":_.value,translatable:"",disabled:y.type===e(be)&&G%2!==0,"onEmit:change":N=>p(N,b,G,y)},{option:c(({option:N})=>[l(e(he),{title:N.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(g,{"col-class":"w-1/5"},{default:c(()=>[l(U,{modelValue:C.date,"onUpdate:modelValue":[N=>C.date=N,N=>C.date=e(ge)(N)],error:e(n).bookings.$each.$response.$data[b].segments.$each.$data[G].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),l(g,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[l(Wl,{modelValue:C.time,"onUpdate:modelValue":N=>C.time=N,error:e(n).bookings.$each.$response.$data[b].segments.$each.$data[G].time,label:"time",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),y.type===e(st)&&G!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:N=>e(r).actionDeleteRouteLine(b,G)},[l(fe,{icon:e(Ye),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,en)):ie("",!0)]),_:2},1024)]),_:2},1024)]))),256)),y.type===e(st)?(v(),S("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:C=>e(r).actionAddRouteLine(b)},[l(fe,{icon:e(He),class:"text-primary-500"},null,8,["icon"]),w("span",on,I(e(o)("add-line")),1)],8,tn)):ie("",!0),l(P,null,{default:c(()=>[l(g,{"col-class":"w-full"},{default:c(()=>[l(H,{modelValue:y.passengers,"onUpdate:modelValue":C=>y.passengers=C,options:k.value,error:e(n).bookings.$each.$response.$data[b].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),l(V,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:R},null,8,["icon-left"]),w("div",ln,[l(V,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",nn,[l(V,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:d[3]||(d[3]=y=>M(e(dt)))}),l(V,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(r).buttonLoading,onClick:x},null,8,["loading"])])])])}}},ct=ke("sd-extend-business-trip-store",{state:()=>({buttonLoading:!1,userTripUpdateButtonLoading:!1,detailLoading:!1,changingBTDialog:!1,changingBTLoading:!1,changingBTModel:null,tempVerifications:[],tempRegions:[],tempGroupIndex:null,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionGetParentDocumentDetail(u){try{this.detailLoading=!0;const{data:a}=await qe(u);await this.actionAdjustModel(a)}catch{}finally{this.detailLoading=!1}},async actionAdjustModel(u){this.model.__notices=u.notices;const a=Object.values(u.notices.reduce((t,o)=>{const q=o.group_id;return t[q]=t[q]||{group_id:q,items:[]},t[q].items.push(o),t},{}));this.model.__groups=await Promise.all(a.map(async t=>({__users:await Promise.all(t.items.map(async q=>({...await Y([],q.user.id,!1),business_trip_id:q.id}))),__notices_to_change:[]})))},async actionAddUsersToExtend(u,a){var s;await yt();const t=this.model.__groups[a].__users_to_extend||[],o=this.model.__notices.find(r=>t.some(m=>m.id===r.user.id));this.changingBTModel=o,this.tempGroupIndex=a,this.changingBTLoading=!0,this.changingBTDialog=!0,setTimeout(()=>{this.changingBTLoading=!1},2e3);const q=await ko(o.id);this.tempVerifications=(s=q==null?void 0:q.data)==null?void 0:s.verifications.filter(r=>!r.is_sender).map(r=>({...r,is_visited:r.arrived_at||r.left_at}))},actionFillNoticesToChange(){var u,a,t,o,q,s;console.log(this.tempRegions),console.log(this.tempVerifications),(t=(a=(u=this.model)==null?void 0:u.__groups)==null?void 0:a[this.tempGroupIndex])!=null&&t.__notices_to_change?this.model.__groups[this.tempGroupIndex].__notices_to_change.push({...this.changingBTModel,__regions:this.tempVerifications.map(r=>({...r.region})),__start_date:(o=this.changingBTModel)==null?void 0:o.start_date,__end_date:(q=this.changingBTModel)==null?void 0:q.end_date,__sender_company:(s=this.changingBTModel)==null?void 0:s.sender_company}):console.warn("Target group or __notices_to_change array not found.")},async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:t,error:o}=await $e(Ue,a);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t=await lt(a);try{this.buttonLoading=!0;const{data:o}=await Ve({id:u,body:t});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){var t,o,q,s,r,m;try{this.detailLoading=!0,await this.actionGetParentDocumentDetail(a);const{data:n}=await qe(u),_=await kt(n.id);Oe().decreeModel.content=((q=(o=(t=_==null?void 0:_.data)==null?void 0:t.to_composes[0])==null?void 0:o.from_compose)==null?void 0:q.content)||"",Oe().decreeModel.id=((m=(r=(s=_==null?void 0:_.data)==null?void 0:s.to_composes[0])==null?void 0:r.from_compose)==null?void 0:m.id)||null;const k=await Promise.all(this.model.__groups.map(async T=>{const L=n.notices.filter(M=>T.__users.some(R=>{var D;return R.id===((D=M.user)==null?void 0:D.id)}));return L.length&&(T.__users_to_extend=T.__users,T.__notices_to_change=await Promise.all(L.map(async M=>({user:M.user,__regions:await We("regions",M.locations),__start_date:M.start_date,__end_date:M.end_date,tags:M.tags,__sender_company:M.sender_company,business_trip_id:M.id})))),T}));this.model.__groups=k.filter(T=>T.__users_to_extend&&T.__users_to_extend.length>0),this.model.__curator=await Le([],n.curator.id,!1),this.model.__signers=await Y(n.signers),this.model.__approvers=await Y(n.approvers),this.model.short_description=n.short_description,this.model.content=n.content}catch(n){return console.error(n),Promise.reject(n)}finally{this.detailLoading=!1}},async actionUpdateUserTrip(){var a,t;this.userTripUpdateButtonLoading=!0;const u={regions:this.tempVerifications.map(o=>{var q;return((q=o==null?void 0:o.region)==null?void 0:q.id)||null}),end_date:(a=this.changingBTModel)==null?void 0:a.end_date};try{await xo({id:(t=this.changingBTModel)==null?void 0:t.id,body:u}),this.actionFillNoticesToChange(),this.actionClearTempModel(),A(null,"Muvaffaqiyatli!",B.SUCCESS)}catch(o){console.error(o)}finally{this.userTripUpdateButtonLoading=!1}},actionResetBTModel(){this.model={approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]}},actionClearTempModel(){this.changingBTDialog=!1,this.changingBTLoading=!1,this.changingBTModel=null,this.tempVerifications=[],this.tempRegions=[],this.model.__groups[this.tempGroupIndex].__users_to_extend=[]},actionClearUserToExtend(){const u=this.model.__groups[this.tempGroupIndex].__users_to_extend.findIndex(a=>{var t,o;return a.id===((o=(t=this.changingBTModel)==null?void 0:t.user)==null?void 0:o.id)});this.model.__groups[this.tempGroupIndex].__users_to_extend.splice(u,1)}}}),an={class:"decree-component"},sn={class:"flex items-center justify-between mt-10"},dn={class:"flex items-center gap-x-1"},St={__name:"Decree",props:{formType:{type:String,default:j}},setup(u,{expose:a}){const t=u,o=pe(),q=ue(),s=Oe(),r=ct(),m=te(s.decreeRules,s.decreeModel),{t:n}=le(),_=ae(),k=ce(),T=J(!1),L=ne(()=>({...o.params.document_sub_type===Z.EXTEND_BUSINESS_TRIP_NOTICE?r.model:s.model,bookings:s.booking_model.bookings,trip_plans:s.trip_plan_model.trip_plans,decree_content:s.decreeModel.content})),M=async x=>{await s.actionStepClick(q,o,x)},R=x=>{s.decreeModel.__files=[],x.forEach(i=>{s.decreeModel.__files.push(i)})},D=async()=>{var i,d,h,g;if(!await m.value.$validate()){A(null,n("fill-required-fields"),B.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(d=(i=s.model)==null?void 0:i.__curator)==null?void 0:d.user_id,s.decreeModel.journal=re.ORDERS_PROTOCOLS,s.decreeModel.company=_.currentUser.company.id,s.decreeModel.sender=(g=(h=_==null?void 0:_.currentUser)==null?void 0:h.top_level_department)==null?void 0:g.id,s.decreeModel.document_type=ee.DECREE,s.decreeModel.document_sub_type=o.params.document_sub_type===Z.EXTEND_BUSINESS_TRIP_NOTICE?Z.EXTEND_BUSINESS_TRIP_DECREE:Z.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,T.value=!0},f=async(x,i)=>{try{await s.actionUpdateDocument({id:i,body:{...s.decreeModel,trip_notice_id:x}}),await k.actionCountList(),A(null,n("successfully-saved"),B.SUCCESS)}catch{}},p=async()=>{var i;let x=null;t.formType===j&&o.query.notice_id?x=o.query.notice_id:t.formType===Se&&o.params.id&&(x=o.params.id);try{await f(x,(i=s.decreeModel)==null?void 0:i.id),await q.replace({name:Me,params:{id:x,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type},query:{parent_id:o.query.parent_id}})}catch{}};return a({stepClick:M}),(x,i)=>{const d=Re;return v(),S("div",an,[l(Ee,{modelValue:e(m).content.$model,"onUpdate:modelValue":i[0]||(i[0]=h=>e(m).content.$model=h),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"]),w("div",sn,[l(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",dn,[l(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:i[1]||(i[1]=h=>M(e(Xe)))}),l(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:D})])]),l(Ne,{modelValue:T.value,"onUpdate:modelValue":i[2]||(i[2]=h=>T.value=h),"send-button-loading":e(s).buttonLoading,"onEmit:send":p,"content-classes":"p-0"},{content:c(()=>[l(e(io),{"compose-model":L.value,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},cn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},un={class:"px-6 py-4"},ma={__name:"BusinessTripForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=le(),o=pe(),q=ue(),s=ae(),r=Oe();te(r.rules,r.model),te(r.trip_plan_rules,r.trip_plan_model),te(r.booking_model_rules,r.booking_model),te(r.decreeRules,r.decreeModel);const m=J(null),n=ne(()=>a.formType===j?"create-business-trip-notice":"update-business-trip-notice"),_=ne(()=>{switch(o.query.step){case Xe:return bt;case Ke:return St;case dt:return Fl;case $t:return rn;default:return bt}}),k=async R=>{var f;const D=e(m);((f=o.query)==null?void 0:f.step)!==R.value&&(await D.stepClick(R.value),R.value,Ke)},T=async()=>{o.query.step||await q.replace({query:{...o.query,step:Xe}}),r.stepperItems.forEach(R=>R.active=R.value===o.query.step)},L=async()=>{var f,p,x,i,d,h,g,U,P,V,y,b;const R=oe(r.model.__approvers),D=oe(r.model.__signers);if(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.bookings=[],r.model.trip_plans=[],r.model.approvers=R,r.model.signers=D,r.model.curator=(p=(f=r.model)==null?void 0:f.__curator)==null?void 0:p.user_id,r.model.journal=re.INNER,r.model.company=(i=(x=s.currentUser)==null?void 0:x.company)==null?void 0:i.id,r.model.__groups.forEach((C,G)=>{const N=G+1;r.model.notices.push(...C.__users.map(F=>{var K,O,X;return{start_date:C.__start_date,end_date:C.__end_date,user:F.id,company:(O=(K=s.currentUser)==null?void 0:K.company)==null?void 0:O.id,sender_company:(X=C.__company)==null?void 0:X.id,regions:C.__regions.map(z=>z.id),tags:C.__tags.map(z=>({id:z.id})),route:C.__route,group_id:N,...F.business_trip_id?{id:F.business_trip_id}:{}}}))}),r.model.sender=(h=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:h.id,r.model.files=r.model.__files.map(C=>({id:C.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,a.formType===j&&o.query.notice_id)try{await r.actionUpdateDocument({id:o.query.notice_id,body:r.model})}catch{}else if(a.formType===j)try{const{data:C}=await r.actionCreateDocument(r.model),G={approvers:[],signers:[],curator:(U=(g=r.model)==null?void 0:g.__curator)==null?void 0:U.user_id,journal:re.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:(V=(P=s==null?void 0:s.currentUser)==null?void 0:P.top_level_department)==null?void 0:V.id,document_type:ee.DECREE,document_sub_type:Z.BUSINESS_TRIP_DECREE_V2,short_description:(y=r.model)==null?void 0:y.short_description,trip_notice_id:C.id,content:C.content};r.decreeModel.content=C.content;try{const N=await r.actionCreateDocument(G);r.decreeModel.id=(b=N==null?void 0:N.data)==null?void 0:b.id,await q.replace({query:{...o.query,notice_id:C.id}}),await r.actionGetDocumentDetailForUpdate(C.id)}catch{}}catch{}else if(a.formType===Se&&o.params.id)try{await r.actionUpdateDocument({id:o.params.id,body:r.model})}catch{}},M=async()=>{try{await L(),await A(null,t("notice-saved-successfully"),B.SUCCESS)}catch{}};return Qe(async()=>{await T(),a.formType===Se?await r.actionGetDocumentDetailForUpdate(o.params.id):o.query.notice_id&&await r.actionGetDocumentDetailForUpdate(o.query.notice_id)}),De(()=>{r.actionResetBTModel()}),(R,D)=>{const f=we,p=Ct;return v(),S("div",{class:Pe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(r).detailLoading}])},[e(r).detailLoading?(v(),W(f,{key:0})):(v(),W(e(xe),{key:1,title:n.value},{content:c(()=>[w("div",cn,[l(p,{items:e(r).stepperItems,"onEmit:stepClick":k},null,8,["items"])]),w("div",un,[(v(),W(Gt(_.value),{"form-type":u.formType,ref_key:"childComponent",ref:m,"onEmit:onValidateAndSend":M},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},pn=ke("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)},__groups:{$each:$.forEach({__users:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},__regions:{required:$.withMessage("Поле не должен быть пустым",E)},__start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__end_date:{required:$.withMessage("Поле не должен быть пустым",E)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:$.forEach({users:{required:$.withMessage("Поле не должен быть пустым",E)},text:{required:$.withMessage("Поле не должен быть пустым",E)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),mn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},_n={class:"flex justify-between"},fn={class:"text-base text-primary-900 font-semibold mb-1"},qn=["onClick"],gn={class:"flex w-full gap-x-4"},bn={class:"flex flex-col gap-y-3"},hn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},yn={class:"flex justify-between"},wn={class:"text-base text-primary-900 font-semibold mb-1"},vn=["onClick"],kn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},xn={class:"text-base text-primary-900 font-semibold mb-2"},_a={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=J(!1),o=J(!1),{t:q}=le(),s=pe(),r=ue(),m=ae(),n=pn(),_=ce();ye();const k=te(n.rules,n.model),T=te(n.trip_plan_rules,n.trip_plan_model),L=ne(()=>a.formType===j?"create-decree":"update-decree"),M=ne(()=>{const g=new Set;return n.model.__groups.reduce((U,P)=>P.__users&&Array.isArray(P.__users)?U.concat(P.__users):U,[]).filter(U=>g.has(U.id)?!1:(g.add(U.id),!0))}),R=async()=>{var V,y,b,C,G,N;if(t.value=!0,!await k.value.$validate()){A(null,q("fill-required-fields"),B.WARNING);return}const U=oe(n.model.__approvers),P=oe(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=U,n.model.signers=P,n.model.curator=(y=(V=n.model)==null?void 0:V.__curator)==null?void 0:y.user_id,n.model.journal=re.ORDERS_PROTOCOLS,n.model.company=(C=(b=m.currentUser)==null?void 0:b.company)==null?void 0:C.id,n.model.__groups.forEach((F,K)=>{const O=K+1;n.model.notices.push(...F.__users.map(X=>{var z,Ce;return{start_date:F.__start_date,end_date:F.__end_date,user:X.id,company:(Ce=(z=m.currentUser)==null?void 0:z.company)==null?void 0:Ce.id,regions:F.__regions.map(Ge=>Ge.id),tags:F.__tags.map(Ge=>({id:Ge.id})),group_id:O}}))}),n.model.sender=(N=(G=m==null?void 0:m.currentUser)==null?void 0:G.top_level_department)==null?void 0:N.id,n.model.files=n.model.__files.map(F=>({id:F.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(F=>({users:F.users.map(K=>({id:K.id})),text:F.text})),o.value=!0},D=()=>{},f=()=>{n.actionAddGroupBlock()},p=()=>{n.actionAddWorkPlanRow(),t.value=!1},x=g=>{n.model.__files=[],g.forEach(U=>{n.model.__files.push(U)})},i=async()=>{const g=await n.actionCreateDocument(n.model);await _.actionCountList(),g?(o.value=!1,A(null,q("document-sent"),B.SUCCESS),await r.replace({name:Be,query:{document_type:s.params.document_type}})):A(null,q("error-occurred"),B.ERROR)},d=async()=>{await n.actionUpdateDocument({id:s.params.id,body:n.model}),await _.actionCountList(),A(null,q("changed"),B.SUCCESS),await r.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},h=()=>{a.formType===j?i():d()};return(g,U)=>{const P=we,V=_e,y=Ie,b=fe,C=rt,G=Fe,N=me,F=Re,K=Vt;return e(n).detailLoading?(v(),W(P,{key:0})):(v(),S(Q,{key:1},[l(e(xe),{title:L.value},{content:c(()=>[l(Ae,{"onEmit:preview":R,"onEmit:clearForm":D},{default:c(()=>[l(N,null,{default:c(()=>[l(V,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":U[0]||(U[0]=O=>e(k).__curator.$model=O),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(V,{"col-class":"w-1/2"},{default:c(()=>[l(y,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":U[1]||(U[1]=O=>e(k).short_description.$model=O),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(V,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(v(!0),S(Q,null,de(e(n).model.__groups,(O,X)=>(v(),S("div",mn,[w("div",_n,[w("span",fn,I(e(q)("group"))+"-"+I(X+1),1),X!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(n).actionDeleteGroupBlock(X)},[l(b,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,qn)):ie("",!0)]),l(N,null,{default:c(()=>[l(V,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:O.__users,"onUpdate:modelValue":z=>O.__users=z,error:e(k).__groups.$each.$response.$data[X].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(V,{"col-class":"w-1/2"},{default:c(()=>[l(C,{modelValue:O.__regions,"onUpdate:modelValue":z=>O.__regions=z,error:e(k).__groups.$each.$response.$data[X].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":t.value},{chip:c(({value:z})=>[se(I(z.name),1)]),option:c(({value:z})=>[l(e(he),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(V,{"col-class":"w-1/2"},{default:c(()=>[l(C,{modelValue:O.__tags,"onUpdate:modelValue":z=>O.__tags=z,error:e(k).__groups.$each.$response.$data[X].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":t.value},{chip:c(({value:z})=>[se(I(z.name),1)]),option:c(({value:z})=>[l(e(he),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),l(V,{"col-class":"w-1/2"},{default:c(()=>[w("div",gn,[l(G,{modelValue:O.__start_date,"onUpdate:modelValue":[z=>O.__start_date=z,z=>O.__start_date=e(ge)(z)],error:e(k).__groups.$each.$response.$data[X].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(G,{modelValue:O.__end_date,"onUpdate:modelValue":[z=>O.__end_date=z,z=>O.__end_date=e(ge)(z)],error:e(k).__groups.$each.$response.$data[X].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(F,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:f},null,8,["icon-left"])]),_:1})]),_:1}),w("div",bn,[(v(!0),S(Q,null,de(e(n).trip_plan_model.trip_plans,(O,X)=>(v(),S("div",hn,[w("div",yn,[w("span",wn,I(e(q)("plan"))+"-"+I(X+1),1),X!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(n).actionDeleteWorkPlanRow(X)},[l(b,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,vn)):ie("",!0)]),l(N,null,{default:c(()=>[l(V,{"col-class":"w-1/2"},{default:c(()=>[l(K,{modelValue:O.text,"onUpdate:modelValue":z=>O.text=z,error:e(T).trip_plans.$each.$response.$data[X].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(V,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:O.users,"onUpdate:modelValue":z=>O.users=z,options:M.value,error:e(T).trip_plans.$each.$response.$data[X].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(F,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:p},null,8,["icon-left"]),l(N,null,{default:c(()=>[l(V,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":U[2]||(U[2]=O=>e(n).model.__approvers=O),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(V,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":U[3]||(U[3]=O=>e(k).__signers.$model=O),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(V,{"col-class":"w-full"},{default:c(()=>[w("div",kn,[w("div",xn,I(e(q)("decree")),1),l(Ee,{modelValue:e(k).content.$model,"onUpdate:modelValue":U[4]||(U[4]=O=>e(k).content.$model=O),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":x},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:o.value,"onUpdate:modelValue":U[5]||(U[5]=O=>o.value=O),"send-button-loading":e(n).buttonLoading,"onEmit:send":h},{content:c(()=>[l(e(vt),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},$n={class:"flex gap-x-[6px] items-center px-2 py-1 bg-greyscale-50 rounded-[90px] border-b border-greyscale-200"},Vn={key:0,class:"w-6 h-6 rounded-full flex items-center justify-center text-xs text-white bg-primary-500"},Un={class:"text-greyscale-900 text-sm font-medium"},ot={__name:"BaseChip",props:{item:{type:Object,default:()=>({})},label:{type:String,default:"Example"},type:{type:String,default:"user",validator(u){return["user","location","other"].includes(u)}},clearable:{type:Boolean,default:!1}},emits:["emit:clear"],setup(u,{emit:a}){const t=o=>{a("emit:clear",o)};return(o,q)=>(v(),S("div",$n,[u.type==="user"?(v(),S("div",Vn,I(u.label[0]),1)):u.type==="location"?(v(),W(fe,{key:1,icon:e(Wt),class:"text-greyscale-400"},null,8,["icon"])):ie("",!0),w("div",Un,I(u.label),1),u.clearable?(v(),S("div",{key:2,class:"flex justify-center items-center w-5 h-5 rounded-full bg-critic-500 cursor-pointer",onClick:q[0]||(q[0]=s=>t(u.item))},[l(fe,{icon:e(Yt),class:"text-white"},null,8,["icon"])])):ie("",!0)]))}},En={key:1,class:"flex flex-col gap-y-5"},Cn={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Sn={class:"text-sm font-medium text-greyscale-500"},Tn={class:"text-green-900"},Ln=w("br",null,null,-1),Rn={class:"flex flex-col gap-y-2"},Dn={class:"text-sm font-medium text-greyscale-500"},Mn=w("span",{class:"text-red-500"},"*",-1),Nn={class:"flex flex-wrap gap-3"},Pn={class:"flex flex-col gap-y-2"},On={__name:"ChangingBusinessTripModal",setup(u){const a=ct(),{t}=le(),o=()=>{var n;if(!(((n=a.tempVerifications)==null?void 0:n.length)>0)){A(null,"Kamida bitta hudud qo'shing!",B.WARNING);return}a.actionUpdateUserTrip()},q=()=>{a.actionClearTempModel()},s=(m,n)=>{a.tempVerifications.splice(n,1)},r=m=>{m.value.forEach(n=>{a.tempVerifications.some(k=>k.region.id===n.id)||a.tempVerifications.push({region:n,is_visited:!1}),a.tempRegions=[]})};return(m,n)=>{const _=we,k=rt,T=Fe,L=Re,M=Ut;return v(),W(M,{modelValue:e(a).changingBTDialog,"onUpdate:modelValue":n[4]||(n[4]=R=>e(a).changingBTDialog=R),label:"confirm","max-width":"max-w-[631px]",closable:!1},Ht({content:c(()=>{var R,D;return[e(a).changingBTLoading?(v(),W(_,{key:0,class:"my-16"})):(v(),S("div",En,[w("div",Cn,[l(fe,{icon:e(wt),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),w("div",Sn,[se("Siz rostdan ham "),w("span",Tn,I((D=(R=e(a).changingBTModel)==null?void 0:R.user)==null?void 0:D.full_name),1),se("ga tegishli bo'lgan xizmat safarini o'zgartirmoqchimisiz? "),Ln,se(" Bunda xizmat safari bilan vaqtinchalik amaliyot bajarish to'xtatiladi! ")])]),w("div",Rn,[w("span",Dn,[se(I(e(t)("trip-place"))+" ",1),Mn]),w("div",Nn,[(v(!0),S(Q,null,de(e(a).tempVerifications,(f,p)=>{var x;return v(),W(ot,{key:f.id,label:(x=f==null?void 0:f.region)==null?void 0:x.name_uz,clearable:!f.is_visited,type:"location",class:"w-fit","onEmit:clear":i=>s(f,p)},null,8,["label","clearable","onEmit:clear"])}),128))]),l(k,{modelValue:e(a).tempRegions,"onUpdate:modelValue":n[0]||(n[0]=f=>e(a).tempRegions=f),"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",type:"department",placeholder:"add-trip-place",required:"","onEmit:change":n[1]||(n[1]=f=>r(f))},{chip:c(({value:f})=>[se(I(f.name),1)]),option:c(({value:f})=>[l(e(he),{title:f.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue"])]),w("div",Pn,[l(T,{modelValue:e(a).changingBTModel.end_date,"onUpdate:modelValue":[n[2]||(n[2]=f=>e(a).changingBTModel.end_date=f),n[3]||(n[3]=f=>e(a).changingBTModel.end_date=e(ge)(f))],"min-date":new Date(e(a).changingBTModel.start_date),required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","min-date"])])]))]}),_:2},[e(a).changingBTLoading?void 0:{name:"footer",fn:c(()=>[l(L,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:q}),l(L,{loading:e(a).userTripUpdateButtonLoading,label:"update",rounded:"",shadow:"",type:"button",onClick:o},null,8,["loading"])]),key:"0"}]),1032,["modelValue"])}}},In={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},Bn={class:"px-6 py-4"},An={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},jn={class:"flex justify-between"},zn={class:"text-base text-primary-900 font-semibold mb-1"},Fn={class:"text-sm text-greyscale-500 font-medium"},Gn={class:"text-sm text-greyscale-500 font-medium"},Wn={class:"flex flex-wrap gap-3 mt-1"},Yn={class:"text-sm text-greyscale-500 font-medium"},Hn={class:"text-base text-primary-900 font-semibold mb-2"},Xn={class:"flex items-center justify-between"},fa={__name:"ExtendBusinessTripForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ct(),o=Oe(),q=ae(),s=te(t.rules,t.model),r=pe(),m=ue(),{t:n}=le(),_=J(!1);J(!1);const k=ne(()=>{const f=a.formType===j;return"trip-notice-for-change"}),T=async()=>{var x,i,d,h,g,U,P,V,y,b,C,G,N;const f=oe(t.model.__approvers),p=oe(t.model.__signers);if(t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.approvers=f,t.model.signers=p,t.model.curator=(i=(x=t.model)==null?void 0:x.__curator)==null?void 0:i.user_id,t.model.journal=re.INNER,t.model.company=(h=(d=q.currentUser)==null?void 0:d.company)==null?void 0:h.id,t.model.__groups.forEach(F=>{Array.isArray(F.__notices_to_change)&&t.model.notices.push(...F.__notices_to_change.map(K=>{var O,X,z;return{...a.formType===Se?{id:K.id}:{},start_date:K.__start_date,end_date:K.__end_date,user:K.user.id,company:(X=(O=q.currentUser)==null?void 0:O.company)==null?void 0:X.id,sender_company:(z=K.sender_company)==null?void 0:z.id,regions:K.__regions.map(Ce=>Ce.id),tags:K.tags.map(Ce=>({id:Ce.id})),route:K.route,group_id:1,trip_type:"changed_local",...K.business_trip_id?{id:K.business_trip_id}:{}}}))}),t.model.sender=(U=(g=q==null?void 0:q.currentUser)==null?void 0:g.top_level_department)==null?void 0:U.id,t.model.files=t.model.__files.map(F=>({id:F.id})),t.model.document_type=r.params.document_type,t.model.document_sub_type=r.params.document_sub_type,t.model.trip_notice_id=((P=r.query)==null?void 0:P.parent_id)||null,a.formType===j&&r.query.notice_id)try{await t.actionUpdateDocument({id:r.query.notice_id,body:t.model}),await A(null,n("notice-saved-successfully"),B.SUCCESS)}catch{}else if(a.formType===j)try{const{data:F}=await t.actionCreateDocument(t.model),K={approvers:[],signers:[],curator:(y=(V=t.model)==null?void 0:V.__curator)==null?void 0:y.user_id,journal:re.ORDERS_PROTOCOLS,company:q.currentUser.company.id,sender:(C=(b=q==null?void 0:q.currentUser)==null?void 0:b.top_level_department)==null?void 0:C.id,document_type:ee.DECREE,document_sub_type:Z.EXTEND_BUSINESS_TRIP_DECREE,short_description:(G=t.model)==null?void 0:G.short_description,trip_notice_id:F.id,content:F.content};o.decreeModel.content=F.content;try{const O=await t.actionCreateDocument(K);o.decreeModel.id=(N=O==null?void 0:O.data)==null?void 0:N.id,await m.replace({query:{...r.query,notice_id:F.id,parent_id:r.query.parent_id}}),await A(null,n("notice-saved-successfully"),B.SUCCESS),await t.actionGetDocumentDetailForUpdate(F.id,r.query.parent_id)}catch(O){console.error(O)}}catch(F){console.error(F)}else if(a.formType===Se&&r.params.id)try{await t.actionUpdateDocument({id:r.params.id,body:t.model}),await A(null,n("notice-saved-successfully"),B.SUCCESS)}catch{}},L=f=>{t.model.__files=[],f.forEach(p=>{t.model.__files.push(p)})},M=async f=>{var p;try{((p=r.query)==null?void 0:p.step)!==f.value&&(f.value===Ke&&(await R(),await T()),await o.actionStepClick(m,r,f.value))}catch(x){console.error(x)}},R=async()=>{const f=await s.value.$validate();if(_.value=!0,!f)return A(null,n("fill-required-fields"),B.WARNING),Promise.reject();if(!t.model.__groups.some(x=>Array.isArray(x.__notices_to_change)&&x.__notices_to_change.length>0))return A(null,"Kamida bitta xodim o'zgartirish uchun tanlanishi kerak!",B.WARNING),Promise.reject()},D=async()=>{r.query.step||await m.replace({query:{...r.query,step:Xe}}),o.stepperItems.forEach(f=>f.active=f.value===r.query.step)};return et(async()=>{await D()}),Qe(async()=>{var f,p,x,i,d,h;a.formType===j&&((f=r.query)!=null&&f.notice_id)&&((p=r.query)!=null&&p.parent_id)?await t.actionGetDocumentDetailForUpdate((x=r.query)==null?void 0:x.notice_id,(i=r.query)==null?void 0:i.parent_id):a.formType===j&&((d=r.query)!=null&&d.parent_id)?await t.actionGetParentDocumentDetail(r.query.parent_id):a.formType===Se&&await t.actionGetDocumentDetailForUpdate(r.params.id,(h=r.query)==null?void 0:h.parent_id)}),De(()=>{t.actionResetBTModel()}),(f,p)=>{const x=we,i=Ct,d=_e,h=Ie,g=me,U=Re;return v(),S("div",{class:Pe(["extend-business-trip-form",{"h-[calc(100vh-200px)]":e(t).detailLoading}])},[e(t).detailLoading?(v(),W(x,{key:0})):(v(),W(e(xe),{key:1,title:k.value},{content:c(()=>{var P,V;return[w("div",In,[l(i,{items:e(o).stepperItems,"onEmit:stepClick":M},null,8,["items"])]),w("div",Bn,[((P=e(r).query)==null?void 0:P.step)==="trip_info"?(v(),S(Q,{key:0},[l(g,null,{default:c(()=>[l(d,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":p[0]||(p[0]=y=>e(s).__curator.$model=y),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(h,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":p[1]||(p[1]=y=>e(s).short_description.$model=y),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(v(!0),S(Q,null,de(e(t).model.__groups,(y,b)=>(v(),S("div",An,[w("div",jn,[w("span",zn,I(e(n)("group"))+"-"+I(b+1),1)]),l(g,null,{default:c(()=>[l(d,{"col-class":"w-full"},{default:c(()=>[l(H,{modelValue:y.__users_to_extend,"onUpdate:modelValue":[C=>y.__users_to_extend=C,C=>e(t).actionAddUsersToExtend(y,b)],label:"select-employees-in-business-trip",options:y.__users,searchable:!1,placeholder:"select-employees","show-nested-error":_.value,disabled:u.formType===e(Se)||e(r).query.notice_id},null,8,["modelValue","onUpdate:modelValue","options","show-nested-error","disabled"])]),_:2},1024),l(d,{"col-class":"w-full"},{default:c(()=>[(v(!0),S(Q,null,de(y.__notices_to_change,C=>(v(),W(g,null,{default:c(()=>[l(d,{"col-class":"w-1/3"},{default:c(()=>{var G;return[w("span",Fn,I(e(n)("employees-in-business-trip")),1),l(ot,{label:(G=C.user)==null?void 0:G.full_name,class:"w-fit mt-1"},null,8,["label"])]}),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[w("span",Gn,I(e(n)("trip-place")),1),w("div",Wn,[(v(!0),S(Q,null,de(C.__regions,G=>(v(),W(ot,{key:C.id,label:G.name_uz,type:"location",class:"w-fit"},null,8,["label"]))),128))])]),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[w("span",Yn,I(e(n)("end-date")),1),l(ot,{label:C.__end_date,type:"other",class:"w-fit mt-1"},null,8,["label"])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]))),256))]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":p[2]||(p[2]=y=>e(t).model.__approvers=y),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":p[3]||(p[3]=y=>e(s).__signers.$model=y),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:c(()=>[w("div",{class:Pe(["border-[1.5px] rounded-2xl px-5 py-4",_.value&&!e(t).model.content?"border-critic-500":"border-greyscale-200"])},[w("div",Hn,I(e(n)("notice")),1),l(Ee,{modelValue:e(s).content.$model,"onUpdate:modelValue":p[4]||(p[4]=y=>e(s).content.$model=y),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),w("div",Xn,[l(U,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(U,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:p[5]||(p[5]=y=>M({value:e(Ke)}))})])],64)):((V=e(r).query)==null?void 0:V.step)==="decree"?(v(),W(e(St),{key:1,"form-type":u.formType},null,8,["form-type"])):ie("",!0)])]}),_:1},8,["title"])),l(On,{modelValue:e(t).changingBTDialog,"onUpdate:modelValue":p[6]||(p[6]=P=>e(t).changingBTDialog=P)},null,8,["modelValue"])],2)}}};export{sa as _,ia as a,pa as b,aa as c,da as d,ca as e,ua as f,ma as g,_a as h,fa as i};
