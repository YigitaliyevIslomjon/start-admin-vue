import{_ as ce}from"./BaseRow.3348b365.1299.js";import{_ as Oe}from"./BaseInput.2cc802cf.1299.js";import{_ as ue}from"./BaseCol.fa06071b.1299.js";import{v as H,bd as et,a1 as tt,o as h,c as C,i as t,z as c,h as e,ba as We,d as ne,dq as Me,a as w,t as A,F as Q,e as _e,a3 as pe,g as ae,f as Y,B as Et,dv as Ct,bj as St,n as Ye,r as kt,G as Pe,ay as he,cK as Z,cL as le,ck as re,u as te,b as se,au as ie,bg as De,a5 as O,ai as ye,af as Lt,cV as Qe,dw as Rt,_ as be,dx as Dt,dy as ut,dz as Tt,dA as pt,dB as mt,dC as _t,b9 as Mt,bt as je,c0 as Fe,dD as Ot,dn as Pt,E as Nt}from"./index.497d8160.4863.js";import{c as v,r as $,u as J}from"./index.b1d08d72.1299.js";import{_ as At,a as It}from"./BranchMultiSelect.ad049c51.1299.js";import{j as jt,k as Ft,l as zt,_ as ve,a as Bt,h as Gt,f as Wt,b as Yt,c as Ht,d as Kt,e as $t,i as Qt,m as Jt,g as Xt,n as qt}from"./BasePOA.7983287d.1299.js";import"./BaseTabMenu.19f16361.1299.js";import"./dialog.esm.6ea0d20e.1299.js";import"./tabpanel.esm.81f680db.1299.js";import"./FileSaver.min.8ac2b28e.1299.js";import{x as ft,s as ge,v as B,y as Zt,z as Ne,A as ee,B as Re,C as bt,D as nt,E as Xe,o as gt}from"./index.30436a27.1299.js";import"./BaseTabView.1717e55d.1299.js";import"./FileTabs.0a8a3741.1299.js";import{_ as G}from"./UserMultiSelect.7d5ad1cd.1299.js";import{c as eo,u as oe,w as ke,d as P}from"./axios.config.a3869875.1299.js";import{u as Ae}from"./common.cacc0132.1299.js";import{u as de}from"./count.store.8e1dfadf.1299.js";import{u as at,a as $e,b as fe,c as xe,d as to,f as oo}from"./index.store.0fa93bfc.1299.js";import{j as wt,k as Ve,i as Ue,c as me,b as Ge,l as He,m as ot,n as st,o as Ze,a as lo,B as xt,M as rt,O as no,T as ro,C as ao,P as so,p as io}from"./index.bd76a17d.1299.js";import{F as M,a as Ke}from"./constants.63630c17.1299.js";import{_ as lt}from"./BaseDropdown.745576ad.1299.js";import{_ as ze}from"./BaseCalendar.a070617b.1299.js";import{_ as it}from"./BaseMultiSelect.fe722546.1299.js";import{f as co,a as qe}from"./formatDate.7c969f0d.1299.js";import{Q as ht}from"./qrcode.vue.esm.60bfa576.1299.js";import{_ as Vt}from"./ShortDescription.a28a6f94.1299.js";import"./dayjs.min.fcbff96e.1299.js";/* empty css                                                                                    */import{c as uo}from"./Dropdown.814f720d.1299.js";import"./menu.esm.7e9ad945.1299.js";/* empty css                                                      */import"./avatar.esm.56b25d2b.1299.js";/* empty css                                                      *//* empty css                                                            */import"./accordiontab.esm.bc78f328.1299.js";import"./common.store.44f08be0.1299.js";import{_ as Le}from"./WithRadio.2328abf7.1299.js";import"./radiobutton.esm.e60a51a1.1299.js";import"./checkbox.esm.cdf991ca.1299.js";import"./index.es6.f9050ba3.1299.js";import{_ as yt}from"./BaseBrickRadio.9b285d60.1299.js";import{_ as po}from"./BaseLabel.0aa831a4.1299.js";import{K as mo}from"./main.37e84b5d.1299.js";import{_ as _o}from"./WithSelectable.3bef78bd.1299.js";import{_ as qo}from"./BaseBrickTab.4a15fb18.1299.js";import{_ as fo}from"./BaseFileUpload.d8e10e6d.1299.js";import{_ as bo}from"./BaseFroalaEditor.1a53fd4a.1299.js";import{_ as go}from"./BaseDialog.eabeb630.1299.js";const wo={class:"user-select"},we={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(u,{emit:a}){const n=u,o=H([]),b=et(n,"modelValue"),i=async l=>{let{data:m}=await eo.get(`${n.apiUrl}/`,l);m.hasOwnProperty("results")?o.value=m.results:o.value=m};return tt(async()=>{await i(n.apiParams)}),(l,m)=>(h(),C("div",wo,[t(lt,{modelValue:e(b),"onUpdate:modelValue":m[0]||(m[0]=r=>We(b)?b.value=r:null),options:o.value,"onUpdate:options":m[1]||(m[1]=r=>o.value=r),error:n.error,"api-url":n.apiUrl,"api-params":n.apiParams,"option-label":"full_name",label:n.label,placeholder:n.placeholder,required:n.required,searchable:"","onEmit:change":m[2]||(m[2]=r=>a("emit:change",r))},{option:c(({option:r})=>[t(e(_o),{items:[r]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},ho={class:"business-trip-decree-template-view letter-template"},yo={class:"flex flex-col text-sm font-medium mt-4"},vo=w("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),ko=["innerHTML"],$o=["innerHTML"],xo={class:"employees-table text-sm mt-4"},Vo={class:"w-full"},Uo=w("tr",{class:"text-center"},[w("td",{class:"border-2 p-1"},"№"),w("td",{class:"border-2 p-1"},"F.I.SH"),w("td",{class:"border-2 p-1"},"Departament va lavozim"),w("td",{class:"border-2 p-1"},"Yo'nalish"),w("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Eo={class:"text-center"},Co={class:"border-2 p-1"},So={class:"border-2 p-1"},Lo={class:"border-2 p-1"},Ro=w("br",null,null,-1),Do={class:"border-2 p-1"},To={class:"flex flex-col gap-y-1"},Mo={key:0},Oo={class:"border-2 p-1 w-[100px]"},Po=w("br",null,null,-1),No={class:"indent-8 mt-2 text-sm text-justify"},Ao=w("div",null,"xizmat safariga yuborilsin.",-1),Io=w("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),jo=w("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),Fo=w("div",null," Buxgalteriya hisobi va moliyaviy menejment departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),zo={key:0},Bo=w("span",{class:"font-semibold"},"Asos: ",-1),Go=w("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),Wo=w("div",null," O‘zR MKning 287-moddasi; ",-1),Yo=w("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),Ho={class:"mt-6 pb-2 px-4"},Ko={class:"text-sm font-semibold block"},Qo={class:"text-sm font-semibold block"},Jo={class:"text-sm font-semibold block"},Xo={class:"text-sm font-semibold block"},Zo={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(u){const a=u,n=at(),o=ne(()=>{var m;return a.preview?oe().currentUser:(m=a.composeModel)==null?void 0:m.author}),b=ne(()=>{var m,r,q;return a.preview?(m=a.composeModel)==null?void 0:m.__employees.map(g=>({empFullName:g.full_name,empDepName:g.top_level_department.name,empPositionName:g.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(q=(r=a.composeModel)==null?void 0:r.notices)==null?void 0:q.map(g=>({empFullName:g.user.full_name,empDepName:g.user.top_level_department.name,empPositionName:g.user.position.name,destinations:g.destinations,startDate:g.start_date,endDate:g.end_date}))}),i=ne(()=>{var r,q,g;if(a.preview)return[(r=a.composeModel)==null?void 0:r.__curator];const m=(q=a.composeModel)==null?void 0:q.signers.find(S=>S.type===Me.BASIC_SIGNER);return m?[m]:[(g=a.composeModel)==null?void 0:g.curator].filter(Boolean)}),l=ne(()=>{var m,r;return a.preview?(m=a.composeModel)==null?void 0:m.__signers:(r=a.composeModel)==null?void 0:r.signers.filter(q=>q.type===Me.SIGNER)});return(m,r)=>{var S,x,L,D,z,E,_,k;const q=ue,g=ce;return h(),C("div",ho,[t(e(jt)),t(e(Ft),{"dep-name":(x=(S=o.value)==null?void 0:S.top_level_department)==null?void 0:x.name},null,8,["dep-name"]),w("div",yo,[w("span",null," № "+A((L=a.composeModel)==null?void 0:L.register_number),1),w("span",null,A(((D=a.composeModel)==null?void 0:D.register_date)&&e(co)((z=a.composeModel)==null?void 0:z.register_date)),1)]),vo,e(n).historyShow?(h(),C("div",{key:0,class:"text-justify",innerHTML:e(n).historyContent},null,8,ko)):(h(),C("div",{key:1,class:"text-justify",innerHTML:(E=a.composeModel)==null?void 0:E.content},null,8,$o)),w("div",xo,[w("table",Vo,[Uo,b.value&&b.value.length?(h(!0),C(Q,{key:0},_e(b.value,(d,s)=>(h(),C("tr",Eo,[w("td",Co,A(s+1),1),w("td",So,A(d.empFullName),1),w("td",Lo,[pe(A(d.empDepName)+" ",1),Ro,pe(" "+A(d.empPositionName),1)]),w("td",Do,[w("div",To,[(h(!0),C(Q,null,_e(d.destinations,(f,p)=>(h(),C("span",null,[pe(A(f.name)+" ",1),p!==d.destinations.length-1?(h(),C("span",Mo,",")):ae("",!0)]))),256))])]),w("td",Oo,[pe(A(d.startDate)+" ",1),Po,pe(" "+A(d.endDate),1)])]))),256)):ae("",!0)])]),w("div",No,[Ao,Io,jo,Fo,(_=u.composeModel)!=null&&_.trip_notice_register_number?(h(),C("div",zo,[Bo,pe(A((k=u.composeModel)==null?void 0:k.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):ae("",!0),Go,Wo,Yo]),w("div",Ho,[(h(!0),C(Q,null,_e(i.value,d=>(h(),Y(g,{key:d.id,class:"mb-2 items-center"},{default:c(()=>[t(q,{"col-class":"w-1/3"},{default:c(()=>[w("span",Ko,A(d.user?d.user.position.name:d.position.name),1)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:c(()=>[d.is_signed?(h(),Y(ht,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:c(()=>[w("span",Qo,A(e(ft)(d)),1)]),_:2},1024)]),_:2},1024))),128)),(h(!0),C(Q,null,_e(l.value,d=>(h(),Y(g,{key:d.id,class:"mb-2 items-center"},{default:c(()=>[t(q,{"col-class":"w-1/3"},{default:c(()=>[w("span",Jo,A(d.user?d.user.position.name:d.position.name),1)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:c(()=>[d.is_signed?(h(),Y(ht,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:c(()=>[w("span",Xo,A(e(ft)(d)),1)]),_:2},1024)]),_:2},1024))),128))]),t(e(zt),{"compose-model":a.composeModel,author:o.value},null,8,["compose-model","author"])])}}};var el=`
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
`,tl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Et.extend({name:"editor",css:el,classes:tl});(function(){try{return window.Quill}catch{return null}})();const Ee={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(u){return["froala","tiny"].includes(u)}}},emits:["update:modelValue","emit:fileUpload"],setup(u,{emit:a}){const n=u,o=et(n,"modelValue"),b=H([{title:"text",slot:"editor",icon:Ct},{title:"file",slot:"file",icon:St}]);return(i,l)=>(h(),Y(qo,{"tab-panel-list":b.value,"panel-container-class":"px-0"},{editor:c(()=>[u.editor==="froala"?(h(),Y(bo,{key:0,modelValue:e(o),"onUpdate:modelValue":l[0]||(l[0]=m=>We(o)?o.value=m:null)},null,8,["modelValue"])):(h(),Y(uo,{key:1,modelValue:e(o),"onUpdate:modelValue":l[1]||(l[1]=m=>We(o)?o.value=m:null)},null,8,["modelValue"]))]),file:c(()=>[w("div",{class:Ye(n.fileUploadContainerClasses)},[t(fo,{files:n.files,"onEmit:fileUpload":l[2]||(l[2]=m=>a("emit:fileUpload",m))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ol={class:"flex flex-col justify-between h-full"},ll={class:"px-6 py-4 overflow-y-auto"},nl={class:"actions p-6"},Te={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(u,{emit:a}){return(n,o)=>{const b=Pe;return h(),C("div",ol,[w("div",ll,[kt(n.$slots,"default")]),w("div",nl,[t(b,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:o[0]||(o[0]=i=>a("emit:clearForm"))}),t(b,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:o[1]||(o[1]=i=>a("emit:preview"))})])])}}},rl=he("sd-stores-inner",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=oe().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,document_type:Z.INNER,document_sub_type:le.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:re.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:v.withMessage("Поле не должен быть пустым",$)},content:{required:v.withMessage("Поле не должен быть пустым",$)},__departments:{required:v.withMessage("Поле не должен быть пустым",$)},__approvers:{},__signers:{required:v.withMessage("Поле не должен быть пустым",$)}}}},actions:{async actionCreateDocument(u){let a={...u,type:wt,sub_type:wt};this.buttonLoading=!0;const{response:n,error:o}=await ke(xe,a);return n?(this.buttonLoading=!1,Promise.resolve(n)):Promise.reject(o)},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await $e({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await fe(u);ge(this.model,a),this.model.__approvers=await B(a.approvers),this.model.__signers=await B(a.signers),this.model.__departments=await Zt(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),al={class:"font-semibold text-xl"},Ce={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(u,{emit:a}){const o=et(u,"modelValue"),{t:b}=te();return(i,l)=>{const m=Pe,r=go;return h(),Y(r,{modelValue:e(o),"onUpdate:modelValue":l[1]||(l[1]=q=>We(o)?o.value=q:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[w("span",al,A(e(b)("preview")),1)]),content:c(()=>[kt(i.$slots,"content")]),footer:c(()=>[t(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(m,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:u.sendButtonLoading,onClick:l[0]||(l[0]=q=>a("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},ur={__name:"InnerForm",props:{formType:{type:String,default:M}},setup(u){const a=u,n=oe(),o=rl();Ae();const b=de(),i=H(!1);H(null);const{t:l}=te(),m=se(),r=ie(),q=J(o.rules,o.model),g=async()=>{await q.value.$validate()&&(i.value=!0,o.model.approvers=[],o.model.signers=[],o.model.departments=[],o.model.departments=o.model.__departments.map(_=>_.id),o.model.files=[],o.model.files=o.model.__files.map(_=>({id:_.id})),o.model.journal=re.INNER,o.model.sender=n.currentUser.top_level_department.id,o.model.approvers=ee(o.model.__approvers),o.model.signers=ee(o.model.__signers),o.model.document_type=r.params.document_type,o.model.document_sub_type=r.params.document_sub_type,o.model.receiver&&delete o.model.receiver)},S=()=>{a.formType===M?x():L()},x=async()=>{const E=await o.actionCreateDocument(o.model);await b.actionCountList(),E?(i.value=!1,P(null,l("document-sent"),O.SUCCESS),await m.replace({name:Ve,query:{document_type:Z.INNER}})):P(null,l("error-occurred"),O.ERROR)},L=async()=>{await o.actionUpdateDocument({id:r.params.id,body:o.model}),await b.actionCountList(),P(null,l("document-sent"),O.SUCCESS),await m.replace({name:Ue,params:{id:r.params.id,document_type:Z.INNER,document_sub_type:le.SERVICE_LETTER}})},D=()=>{console.log("Clear Form")},z=E=>{o.model.__files=[],E.forEach(_=>{o.model.__files.push(_)})};return tt(async()=>{r.params.id&&await o.actionGetDocumentDetailForUpdate(r.params.id)}),De(()=>{Ne(o.model)}),(E,_)=>{const k=ye,d=ue,s=Oe,f=ce;return e(o).detailLoading?(h(),Y(k,{key:0})):(h(),C(Q,{key:1},[t(e(ve),{title:a.formType===e(M)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[t(Te,{"onEmit:preview":g,"onEmit:clearForm":D},{default:c(()=>[t(f,null,{default:c(()=>[t(d,{"col-class":"w-1/2"},{default:c(()=>[t(At,{modelValue:e(q).__departments.$model,"onUpdate:modelValue":_[0]||(_[0]=p=>e(q).__departments.$model=p),error:e(q).__departments},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(s,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=p=>e(q).short_description.$model=p),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":_[2]||(_[2]=p=>e(q).__approvers.$model=p),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=p=>e(q).__signers.$model=p),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(q).content.$model,"onUpdate:modelValue":_[4]||(_[4]=p=>e(q).content.$model=p),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:i.value,"onUpdate:modelValue":_[5]||(_[5]=p=>i.value=p),"send-button-loading":e(o).buttonLoading,"onEmit:send":S},{content:c(()=>{var p,y;return[t(Bt,{"compose-model":{...e(o).model,signers:e(o).model.__signers,approvers:e(o).model.__approvers,author:e(o).model.__signers[0],sender:{name:(y=(p=e(n).currentUser)==null?void 0:p.top_level_department)==null?void 0:y.name},receiver:{departments:e(o).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},sl=he("sd-store-application",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=oe().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:v.withMessage("Поле не должен быть пустым",$)},__curator:{required:v.withMessage("Поле не должен быть пустым",$)},__approvers:{required:v.withMessage("Поле не должен быть пустым",$)},__signers:{}}}},actions:{async actionCreateDocument(u){let a={...u};this.buttonLoading=!0;const{response:n,error:o}=await ke(xe,a);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await $e({id:u,body:a});return Promise.resolve(n)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await fe(u);ge(this.model,a),this.model.__approvers=await B(a.approvers),this.model.__signers=await B(a.signers.filter(n=>n.type===Me.SIGNER)),this.model.__curator=await Re([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Ut=he("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:oe().currentUser.company.id,curator:null,document_type:Z.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:re.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:v.withMessage("Поле не должен быть пустым",$)},register_date:{required:v.withMessage("Поле не должен быть пустым",$)},content:{required:v.withMessage("Поле не должен быть пустым",$)},__negotiators:{required:v.withMessage("Поле не должен быть пустым",$)},__curator:{required:v.withMessage("Поле не должен быть пустым",$)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:n}=await ke(xe,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await $e({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await fe(u);ge(this.model,a),this.model.__signers=await B(a.signers.filter(n=>n.type!==Me.NEGOTIATOR)),this.model.__negotiators=await B(a.signers.filter(n=>n.type===Me.NEGOTIATOR)),this.model.__approvers=await B(a.approvers),this.model.__curator=await Re([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),pr={__name:"ApplicationForm",props:{formType:{type:String,default:M}},setup(u){const a=u,n=oe(),o=sl();Ae();const b=de();Ut();const i=H(!1);H(null);const{t:l}=te(),m=se(),r=ie(),q=J(o.rules,o.model),g=async()=>{var _,k,d,s,f;await q.value.$validate()&&(i.value=!0,o.model.approvers=[],o.model.signers=[],o.model.signers=[{user:(_=n==null?void 0:n.currentUser)==null?void 0:_.id}],o.model.sender=(d=(k=n==null?void 0:n.currentUser)==null?void 0:k.top_level_department)==null?void 0:d.id,o.model.curator=(f=(s=o==null?void 0:o.model)==null?void 0:s.__curator)==null?void 0:f.user_id,o.model.journal=re.APPLICATION,o.model.document_type=r.params.document_type,o.model.document_sub_type=r.params.document_sub_type,o.model.approvers=ee(o.model.__approvers))},S=async()=>{},x=()=>{a.formType===M?L():D()},L=async()=>{const E=await o.actionCreateDocument(o.model);await b.actionCountList(),E?(i.value=!1,P(null,l("document-sent"),O.SUCCESS),await m.replace({name:Ve,query:{document_type:Z.APPLICATION}})):P(null,l("error-occurred"),O.ERROR)},D=async()=>{await o.actionUpdateDocument({id:r.params.id,body:o.model}),await b.actionCountList(),P(null,l("document-sent"),O.SUCCESS),await m.replace({name:Ue,params:{id:r.params.id,document_type:Z.APPLICATION,document_sub_type:le.LABOR_LEAVE}})},z=E=>{o.model.__files=[],E.forEach(_=>{o.model.__files.push(_)})};return tt(async()=>{r.params.id&&await o.actionGetDocumentDetailForUpdate(r.params.id)}),De(()=>{Ne(o.model)}),(E,_)=>{const k=ye,d=ue,s=ce;return e(o).detailLoading?(h(),Y(k,{key:0})):(h(),C(Q,{key:1},[t(e(ve),{title:a.formType===e(M)?"create-sd-application":"update-sd-application"},{content:c(()=>[t(Te,{"onEmit:preview":g,"onEmit:clearForm":S},{default:c(()=>[t(s,null,{default:c(()=>[t(d,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=f=>e(q).__curator.$model=f),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":_[1]||(_[1]=f=>e(q).__approvers.$model=f),error:e(q).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":_[2]||(_[2]=f=>e(q).__signers.$model=f),disabled:"",label:"signers",placeholder:e(n).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(d,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(q).content.$model,"onUpdate:modelValue":_[3]||(_[3]=f=>e(q).content.$model=f),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:i.value,"onUpdate:modelValue":_[4]||(_[4]=f=>i.value=f),"send-button-loading":e(o).buttonLoading,"onEmit:send":x},{content:c(()=>[t(Gt,{"compose-model":{...e(o).model,curator:e(o).model.__curator,author:a.formType===e(M)?e(n).currentUser:e(o).model.__signers[0].user,signers:a.formType===e(M)?[e(n).currentUser]:e(o).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},il=he("sd-notice-store",{state:()=>(oe(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:Z.NOTICE,document_sub_type:le.BUSINESS_TRIP,journal:re.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:v.withMessage("Поле не должен быть пустым",$)},start_date:{required:v.withMessage("Поле не должен быть пустым",$)},route:{required:v.withMessage("Поле не должен быть пустым",$)},content:{required:v.withMessage("Поле не должен быть пустым",$)},__companies:{required:v.withMessage("Поле не должен быть пустым",$)},__curator:{required:v.withMessage("Поле не должен быть пустым",$)},__employees:{required:v.withMessage("Поле не должен быть пустым",$)},__signers:{required:v.withMessage("Поле не должен быть пустым",$)},__tags:{required:v.withMessage("Поле не должен быть пустым",$)},short_description:{required:v.withMessage("Поле не должен быть пустым",$)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:n}=await ke(xe,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await $e({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a=!1){try{this.detailLoading=!0;const{data:n}=await fe(u);ge(this.model,n),this.model.__companies=[],this.model.__curator=await Re([],n.curator.id,!1),this.model.__employees=await B(n.notices),a?(this.model.__approvers=await B(n.approvers.filter(o=>{var b,i;return((b=o==null?void 0:o.user)==null?void 0:b.id)!==((i=n==null?void 0:n.curator)==null?void 0:i.assistant)})),this.model.register_number=null):this.model.__approvers=await B(n.approvers),this.model.__signers=await B(n.signers),this.model.__companies=await bt(n.notices[0].destinations),this.model.__tags=await nt(n.tags),this.model.start_date=n.notices[0].start_date,this.model.end_date=n.notices[0].end_date,this.model.__tags=n.tags,this.model.route=n.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(u,a){try{this.detailLoading=!0;const{data:n}=await fe(u),o=await fe(a);ge(this.model,n),this.model.__companies=[],this.model.__curator=await Re([],n.curator.id,!1),this.model.__employees=await B(o.data.notices),this.model.__approvers=await B(n.approvers),this.model.__signers=await B(n.signers),this.model.__companies=await bt(o.data.notices[0].destinations),this.model.__tags=await nt(n.tags),this.model.start_date=o.data.notices[0].start_date,this.model.end_date=o.data.notices[0].end_date,this.model.__tags=n.tags,this.model.route=o.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),dl={class:"flex w-full gap-x-4"},mr={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:M}},setup(u){const a=u,{t:n}=te(),o=ie(),b=se(),i=oe(),l=il(),m=de();Ae();const r=J(l.rules,l.model),q=H(!1),g=ne(()=>{const d=a.formType===M,s=o.params.document_sub_type;return s===le.BUSINESS_TRIP_DECREE_LOCAL?d?"create-decree":"update-decree":s===le.BUSINESS_TRIP_ORDER_LOCAL?d?"create-order":"update-order":d?"create-business-trip-notice":"update-business-trip-notice"}),S=ne(()=>{var d,s;return o.params.document_sub_type===le.BUSINESS_TRIP_DECREE_LOCAL&&((d=o==null?void 0:o.query)==null?void 0:d.compose_id)&&((s=o==null?void 0:o.query)==null?void 0:s.document_sub_type)===le.BUSINESS_TRIP}),x=ne(()=>{var d;return!!(o.params.document_sub_type===le.BUSINESS_TRIP_DECREE_LOCAL&&((d=l==null?void 0:l.model)!=null&&d.trip_notice_id))});Lt(()=>l.model.__tags,d=>{if(a.formType===M)if(d&&d.length){let s=`${d.map(f=>f.name_uz).join(", ")} yuzasidan`;l.model.short_description=s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()}else l.model.short_description=null});const L=async()=>{var s,f,p,y,I;await r.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.approvers=ee(l.model.__approvers),l.model.signers=ee(l.model.__signers),l.model.curator=(f=(s=l==null?void 0:l.model)==null?void 0:s.__curator)==null?void 0:f.user_id,l.model.journal=o.params.document_type===Z.DECREE||o.params.document_type===Z.ORDER?re.ORDERS_PROTOCOLS:re.INNER,l.model.company=i.currentUser.company.id,l.model.notices=l.model.__employees.map(N=>({start_date:l.model.start_date,end_date:l.model.end_date,user:N.id,route:l.model.route,companies:l.model.__companies.map(U=>U.id)})),l.model.sender=(y=(p=i==null?void 0:i.currentUser)==null?void 0:p.top_level_department)==null?void 0:y.id,l.model.tags=l.model.__tags.map(N=>({id:N.id})),l.model.files=l.model.__files.map(N=>({id:N.id})),l.model.document_type=o.params.document_type,l.model.document_sub_type=o.params.document_sub_type,S.value&&(l.model.trip_notice_id=(I=o==null?void 0:o.query)==null?void 0:I.compose_id),q.value=!0)},D=()=>{},z=d=>{l.model.__files=[],d.forEach(s=>{l.model.__files.push(s)})},E=async()=>{S.value&&(l.model.notices=[]);const d=await l.actionCreateDocument(l.model);await m.actionCountList(),d?(q.value=!1,P(null,n("document-sent"),O.SUCCESS),await b.replace({name:Ve,query:{document_type:o.params.document_sub_type===le.BUSINESS_TRIP_DECREE_LOCAL?Z.DECREE:o.params.document_sub_type===le.BUSINESS_TRIP_ORDER_LOCAL?Z.ORDER:Z.NOTICE}})):P(null,n("error-occurred"),O.ERROR)},_=async()=>{(S.value||x.value)&&(l.model.notices=[]),await l.actionUpdateDocument({id:o.params.id,body:l.model}),await m.actionCountList(),P(null,n("changed"),O.SUCCESS),await b.replace({name:Ue,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},k=()=>{a.formType===M?E():_()};return Qe(async()=>{o.params.id&&o.query.trip_notice_id&&o.params.document_sub_type===le.BUSINESS_TRIP_DECREE_LOCAL?await l.actionGetDocumentDetailForUpdateForCustomUse(o.params.id,o.query.trip_notice_id):o.params.id?await l.actionGetDocumentDetailForUpdate(o.params.id):S.value&&await l.actionGetDocumentDetailForUpdate(o.query.compose_id,!0)}),De(()=>{Ne(l.model)}),(d,s)=>{const f=ye,p=ue,y=ze,I=lt,N=Oe,U=ce;return e(l).detailLoading?(h(),Y(f,{key:0})):(h(),C(Q,{key:1},[t(e(ve),{title:g.value},{content:c(()=>[t(Te,{"onEmit:preview":L,"onEmit:clearForm":D},{default:c(()=>[t(U,null,{default:c(()=>[t(p,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=V=>e(r).__curator.$model=V),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(r).__employees.$model,"onUpdate:modelValue":s[1]||(s[1]=V=>e(r).__employees.$model=V),error:e(r).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:S.value||x.value},null,8,["modelValue","error","disabled"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(It,{modelValue:e(r).__companies.$model,"onUpdate:modelValue":s[2]||(s[2]=V=>e(r).__companies.$model=V),error:e(r).__companies,"text-truncate":"",disabled:S.value||x.value},null,8,["modelValue","error","disabled"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(it,{modelValue:e(r).__tags.$model,"onUpdate:modelValue":s[3]||(s[3]=V=>e(r).__tags.$model=V),error:e(r).__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:V})=>[pe(A(V.name),1)]),option:c(({value:V})=>[t(e(Le),{title:V.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[w("div",dl,[t(y,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[s[4]||(s[4]=V=>e(r).start_date.$model=V),s[5]||(s[5]=V=>e(r).start_date.$model=e(qe)(V))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:S.value||x.value},null,8,["modelValue","error","min-date","disabled"]),t(y,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[s[6]||(s[6]=V=>e(r).end_date.$model=V),s[7]||(s[7]=V=>e(r).end_date.$model=e(qe)(V))],error:e(r).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:S.value||x.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(I,{modelValue:e(r).route.$model,"onUpdate:modelValue":s[8]||(s[8]=V=>e(r).route.$model=V),error:e(r).route,options:e(Rt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:S.value||x.value},null,8,["modelValue","error","options","disabled"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":s[9]||(s[9]=V=>e(l).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":s[10]||(s[10]=V=>e(r).__signers.$model=V),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(N,{modelValue:e(r).short_description.$model,"onUpdate:modelValue":s[11]||(s[11]=V=>e(r).short_description.$model=V),error:e(r).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(r).content.$model,"onUpdate:modelValue":s[12]||(s[12]=V=>e(r).content.$model=V),error:e(r).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:q.value,"onUpdate:modelValue":s[13]||(s[13]=V=>q.value=V),"send-button-loading":e(l).buttonLoading,"onEmit:send":k},{content:c(()=>[e(o).params.document_sub_type===e(le).BUSINESS_TRIP_DECREE_LOCAL?(h(),Y(e(Zo),{key:0,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):e(o).params.document_sub_type===e(le).BUSINESS_TRIP_ORDER_LOCAL?(h(),Y(e(Wt),{key:1,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):(h(),Y(e(Yt),{key:2,"compose-model":e(l).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},_r={__name:"OrderForm",props:{formType:{type:String,default:M}},setup(u){const a=u,n=Ut(),o=de(),b=oe(),i=ie(),l=se(),m=J(n.rules,n.model),{t:r}=te(),q=H(!1),g=async()=>{var _,k,d,s;await m.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=ee(n.model.__approvers),n.model.curator=(k=(_=n==null?void 0:n.model)==null?void 0:_.__curator)==null?void 0:k.user_id,n.model.sender=(s=(d=b==null?void 0:b.currentUser)==null?void 0:d.top_level_department)==null?void 0:s.id,n.model.files=n.model.__files.map(f=>({id:f.id})),n.model.document_type=i.params.document_type,n.model.document_sub_type=i.params.document_sub_type,n.model.journal=re.ORDERS_PROTOCOLS,n.model.register_date=qe(n.model.register_date),n.model.__negotiators.forEach(f=>{n.model.signers.push(f.hasOwnProperty("user")?{id:f.id,user:f.user.id,type:Me.NEGOTIATOR}:{user:f.id,type:Me.NEGOTIATOR})}),i.query.compose_id&&(n.model.trip_notice_id=i.query.compose_id),q.value=!0)},S=()=>{},x=async()=>{try{const E=await n.actionCreateDocument(n.model);await o.actionCountList(),E&&(q.value=!1,P(null,r("document-sent"),O.SUCCESS),await l.replace({name:Ve,query:{document_type:Z.ORDER}}))}catch{P(null,r("error-occurred"),O.ERROR)}},L=async()=>{try{const E=await n.actionUpdateDocument({id:i.params.id,body:n.model});await o.actionCountList(),P(null,r("changed"),O.SUCCESS),await l.replace({name:Ue,params:{id:i.params.id,document_type:i.params.document_type,document_sub_type:i.params.document_sub_type}})}catch{P(null,r("error-occurred"),O.ERROR)}},D=()=>{a.formType===M?x():L()},z=E=>{n.model.__files=[],E.forEach(_=>{n.model.__files.push(_)})};return tt(async()=>{i.params.id&&await n.actionGetDocumentDetailForUpdate(i.params.id)}),De(()=>{Ne(n.model)}),(E,_)=>{const k=ye,d=ue,s=Oe,f=ze,p=ce;return e(n).detailLoading?(h(),Y(k,{key:0})):(h(),C(Q,{key:1},[t(e(ve),{title:a.formType===e(M)?"create-order":"update-order"},{content:c(()=>[t(Te,{"onEmit:preview":g,"onEmit:clearForm":S},{default:c(()=>[t(p,null,{default:c(()=>[t(d,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=y=>e(m).__curator.$model=y),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(i).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(s,{modelValue:e(m).register_number.$model,"onUpdate:modelValue":_[1]||(_[1]=y=>e(m).register_number.$model=y),error:e(m).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(f,{modelValue:e(m).register_date.$model,"onUpdate:modelValue":_[2]||(_[2]=y=>e(m).register_date.$model=y),error:e(m).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":_[3]||(_[3]=y=>e(n).model.__approvers=y),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(m).__negotiators.$model,"onUpdate:modelValue":_[4]||(_[4]=y=>e(m).__negotiators.$model=y),error:e(m).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(m).content.$model,"onUpdate:modelValue":_[5]||(_[5]=y=>e(m).content.$model=y),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:q.value,"onUpdate:modelValue":_[6]||(_[6]=y=>q.value=y),"send-button-loading":e(n).buttonLoading,"onEmit:send":D},{content:c(()=>[t(e(Ht),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},cl=he("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:v.withMessage("Поле не должен быть пустым",$)},__curator:{required:v.withMessage("Поле не должен быть пустым",$)},__signers:{required:v.withMessage("Поле не должен быть пустым",$)},short_description:{required:v.withMessage("Поле не должен быть пустым",$)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:n}=await ke(xe,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await $e({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await fe(u);ge(this.model,a),this.model.__curator=await Re([],a.curator.id,!1),this.model.__approvers=await B(a.approvers),this.model.__signers=await B(a.signers)}catch{}finally{this.detailLoading=!1}}}}),qr={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:M}},setup(u){const a=u,{t:n}=te(),o=ie(),b=se(),i=oe(),l=cl(),m=de();Ae();const r=H(!1),q=J(l.rules,l.model),g=async()=>{var _,k,d,s;await q.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=ee(l.model.__approvers),l.model.signers=ee(l.model.__signers),l.model.curator=(k=(_=l==null?void 0:l.model)==null?void 0:_.__curator)==null?void 0:k.user_id,l.model.journal=re.INNER,l.model.company=i.currentUser.company.id,l.model.sender=(s=(d=i==null?void 0:i.currentUser)==null?void 0:d.top_level_department)==null?void 0:s.id,l.model.files=l.model.__files.map(f=>({id:f.id})),l.model.document_type=o.params.document_type,l.model.document_sub_type=o.params.document_sub_type,r.value=!0)},S=()=>{},x=E=>{l.model.__files=[],E.forEach(_=>{l.model.__files.push(_)})},L=async()=>{const E=await l.actionCreateDocument(l.model);await m.actionCountList(),E?(r.value=!1,P(null,n("document-sent"),O.SUCCESS),await b.replace({name:Ve,query:{document_type:Z.NOTICE}})):P(null,n("error-occurred"),O.ERROR)},D=async()=>{await l.actionUpdateDocument({id:o.params.id,body:l.model}),await m.actionCountList(),P(null,n("changed"),O.SUCCESS),await b.replace({name:Ue,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},z=()=>{a.formType===M?L():D()};return Qe(async()=>{o.params.id&&await l.actionGetDocumentDetailForUpdate(o.params.id)}),De(()=>{Ne(l.model)}),(E,_)=>{const k=ye,d=ue,s=Oe,f=ce;return e(l).detailLoading?(h(),Y(k,{key:0})):(h(),C(Q,{key:1},[t(e(ve),{title:a.formType===e(M)?"create-notice":"update-notice"},{content:c(()=>[t(Te,{"onEmit:preview":g,"onEmit:clearForm":S},{default:c(()=>[t(f,null,{default:c(()=>[t(d,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=p=>e(q).__curator.$model=p),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(s,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=p=>e(q).short_description.$model=p),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":_[2]||(_[2]=p=>e(l).model.__approvers=p),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=p=>e(q).__signers.$model=p),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(q).content.$model,"onUpdate:modelValue":_[4]||(_[4]=p=>e(q).content.$model=p),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":x},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:r.value,"onUpdate:modelValue":_[5]||(_[5]=p=>r.value=p),"send-button-loading":e(l).buttonLoading,"onEmit:send":z},{content:c(()=>[t(e(Kt),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ul=he("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:v.withMessage("Поле не должен быть пустым",$)},__curator:{required:v.withMessage("Поле не должен быть пустым",$)},__signers:{required:v.withMessage("Поле не должен быть пустым",$)},short_description:{required:v.withMessage("Поле не должен быть пустым",$)}}}),actions:{async actionCreateDocument(u){const a={...u};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:n,error:o}=await ke(xe,a);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const n={...a};delete n.bookings,delete n.notices,delete n.trip_plans;try{this.buttonLoading=!0;const{data:o}=await $e({id:u,body:n});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){try{this.detailLoading=!0;const{data:n}=await fe(u);ge(this.model,n),this.model.__curator=await Re([],n.curator.id,!1),this.model.__approvers=await B(n.approvers),this.model.__signers=await B(n.signers)}catch{}finally{this.detailLoading=!1}}}}),fr={__name:"DecreeForm",props:{formType:{type:String,default:M}},setup(u){const a=u,{t:n}=te(),o=ie(),b=se(),i=oe(),l=de();Ae();const m=H(!1),r=ul(),q=at(),g=J(r.rules,r.model),S=async()=>{var d,s,f,p;await g.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=ee(r.model.__approvers),r.model.signers=ee(r.model.__signers),r.model.curator=(s=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:s.user_id,r.model.journal=re.ORDERS_PROTOCOLS,r.model.company=i.currentUser.company.id,r.model.sender=(p=(f=i==null?void 0:i.currentUser)==null?void 0:f.top_level_department)==null?void 0:p.id,r.model.files=r.model.__files.map(y=>({id:y.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,o.query.compose_id&&(r.model.trip_notice_id=o.query.compose_id),m.value=!0)},x=()=>{},L=k=>{r.model.__files=[],k.forEach(d=>{r.model.__files.push(d)})},D=async()=>{const k=await r.actionCreateDocument(r.model);await l.actionCountList(),k?(m.value=!1,P(null,n("document-sent"),O.SUCCESS),await b.replace({name:Ve,query:{document_type:o.params.document_type}})):P(null,n("error-occurred"),O.ERROR)},z=async()=>{await r.actionUpdateDocument({id:o.params.id,body:r.model}),await l.actionCountList(),P(null,n("changed"),O.SUCCESS),await b.replace({name:Ue,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},E=()=>{a.formType===M?D():z()},_=async k=>{const{data:d}=await q.actionGetDocumentDetail(k);r.model.notices=d==null?void 0:d.notices,r.model.trip_plans=d==null?void 0:d.trip_plans,r.model.bookings=d==null?void 0:d.bookings,r.model.short_description=d==null?void 0:d.short_description,r.model.trip_notice_register_number=d==null?void 0:d.register_number};return Qe(async()=>{a.formType===M&&o.query.compose_id?await _(o.query.compose_id):a.formType===Ke&&o.query.trip_notice_id&&o.params.id?(await r.actionGetDocumentDetailForUpdate(o.params.id,null),await _(o.query.trip_notice_id)):a.formType===Ke&&o.params.id&&await r.actionGetDocumentDetailForUpdate(o.params.id,null)}),De(()=>{Ne(r.model)}),(k,d)=>{const s=ye,f=ue,p=Oe,y=ce;return e(r).detailLoading?(h(),Y(s,{key:0})):(h(),C(Q,{key:1},[t(e(ve),{title:a.formType===e(M)?"create-decree":"update-decree"},{content:c(()=>[t(Te,{"onEmit:preview":S,"onEmit:clearForm":x},{default:c(()=>[t(y,null,{default:c(()=>[t(f,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(g).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=I=>e(g).__curator.$model=I),error:e(g).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:c(()=>[t(p,{modelValue:e(g).short_description.$model,"onUpdate:modelValue":d[1]||(d[1]=I=>e(g).short_description.$model=I),error:e(g).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[2]||(d[2]=I=>e(r).model.__approvers=I),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(g).__signers.$model,"onUpdate:modelValue":d[3]||(d[3]=I=>e(g).__signers.$model=I),error:e(g).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(f,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(g).content.$model,"onUpdate:modelValue":d[4]||(d[4]=I=>e(g).content.$model=I),error:e(g).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:m.value,"onUpdate:modelValue":d[5]||(d[5]=I=>m.value=I),"send-button-loading":e(r).buttonLoading,"onEmit:send":E},{content:c(()=>[t(e($t),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},pl=he("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:v.withMessage("Поле не должен быть пустым",$)},start_date:{required:v.withMessage("Поле не должен быть пустым",$)},__curator:{required:v.withMessage("Поле не должен быть пустым",$)},__signers:{required:v.withMessage("Поле не должен быть пустым",$)},__user:{required:v.withMessage("Поле не должен быть пустым",$)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:n}=await ke(xe,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(n))},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await fe(u);return ge(this.model,a),this.model.__curator=await Re([],a.curator.id,!1),this.model.__approvers=await B(a.approvers),this.model.__signers=await B(a.signers),this.model.__user=await Xe("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await $e({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}}}}),br={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:M}},setup(u){const a=u,n=ie(),o=se(),b=oe(),i=pl();at();const l=de(),{t:m}=te(),r=J(i.rules,i.model),q=H(!1),g=H([]),S=ne(()=>a.formType===M?"create-poa":"update-poa"),x=ne(()=>i.model.start_date?new Date(i.model.start_date):new Date),L=async()=>{var s,f,p,y,I,N,U,V,T,W,R,X,Se,j,K,F,Be,Ie,dt,ct;if(await r.value.$validate()){if(i.model.approvers=[],i.model.signers=[],i.model.approvers=ee(i.model.__approvers),i.model.signers=ee(i.model.__signers),i.model.curator=(f=(s=i==null?void 0:i.model)==null?void 0:s.__curator)==null?void 0:f.user_id,i.model.user=(y=(p=i==null?void 0:i.model)==null?void 0:p.__user)==null?void 0:y.id,i.model.journal=re.POWER_OF_ATTORNEY,i.model.company=(N=(I=b.currentUser)==null?void 0:I.company)==null?void 0:N.id,i.model.sender=(V=(U=b==null?void 0:b.currentUser)==null?void 0:U.top_level_department)==null?void 0:V.id,i.model.document_type=n.params.document_type,i.model.document_sub_type=n.params.document_sub_type,i.model.content=".",i.model.parent=(W=(T=i.model)==null?void 0:T.__parent)==null?void 0:W.id,!((X=(R=i==null?void 0:i.model)==null?void 0:R.__user)!=null&&X.passport_seria||(j=(Se=i==null?void 0:i.model)==null?void 0:Se.__user)!=null&&j.passport_number||(F=(K=i==null?void 0:i.model)==null?void 0:K.__user)!=null&&F.passport_issue_date||(Ie=(Be=i==null?void 0:i.model)==null?void 0:Be.__user)!=null&&Ie.passport_issued_by)){P(null,`${(ct=(dt=i.model)==null?void 0:dt.__user)==null?void 0:ct.full_name}: ${m("passport-details-error")}`,O.WARNING);return}q.value=!0}},D=()=>{},z=async()=>{const d=await i.actionCreateDocument(i.model);await l.actionCountList(),d?(q.value=!1,P(null,m("document-sent"),O.SUCCESS),await o.replace({name:Ve,query:{document_type:Z.POWER_OF_ATTORNEY}})):P(null,m("error-occurred"),O.ERROR)},E=async()=>{await i.actionUpdateDocument({id:n.params.id,body:i.model}),await l.actionCountList(),P(null,m("changed"),O.SUCCESS),await o.replace({name:Ue,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},_=()=>{a.formType===M?z():E()},k=async d=>{const{data:s}=await to({user:d.id,document_sub_type:n.params.document_sub_type,status:5});g.value=s.results};return Qe(async()=>{if(n.params.id){const d=await i.actionGetDocumentDetailForUpdate(n.params.id);d.parent&&(g.value=[d.parent])}}),De(()=>{Ne(i.model)}),(d,s)=>{const f=ye,p=ue,y=ze,I=lt,N=ce;return e(i).detailLoading?(h(),Y(f,{key:0})):(h(),C(Q,{key:1},[t(e(ve),{title:S.value},{content:c(()=>[t(Te,{"onEmit:preview":L,"onEmit:clearForm":D},{default:c(()=>[t(N,null,{default:c(()=>[t(p,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=U=>e(r).__curator.$model=U),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(r).__user.$model,"onUpdate:modelValue":s[1]||(s[1]=U=>e(r).__user.$model=U),error:e(r).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":s[2]||(s[2]=U=>k(U))},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(y,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[s[3]||(s[3]=U=>e(r).start_date.$model=U),s[4]||(s[4]=U=>e(r).start_date.$model=e(qe)(U))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(y,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[s[5]||(s[5]=U=>e(r).end_date.$model=U),s[6]||(s[6]=U=>e(r).end_date.$model=e(qe)(U))],error:e(r).end_date,"min-date":x.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(i).model.__approvers,"onUpdate:modelValue":s[7]||(s[7]=U=>e(i).model.__approvers=U),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":s[8]||(s[8]=U=>e(r).__signers.$model=U),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:c(()=>[t(I,{modelValue:e(i).model.__parent,"onUpdate:modelValue":s[9]||(s[9]=U=>e(i).model.__parent=U),options:g.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:q.value,"onUpdate:modelValue":s[10]||(s[10]=U=>q.value=U),"send-button-loading":e(i).buttonLoading,"onEmit:send":_},{content:c(()=>[t(Qt,{"compose-model":e(i).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ml={class:"base-stepper-component flex items-center select-none"},_l=["onClick"],ql={key:0,class:"flex h-1 bg-greyscale-200 w-8"},fl={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(u,{emit:a}){const{t:n}=te(),o=b=>{a("emit:stepClick",b)};return(b,i)=>{const l=be;return h(),C("div",ml,[(h(!0),C(Q,null,_e(u.items,(m,r)=>(h(),C("div",{key:m.id,class:"flex items-center"},[w("div",{class:Ye(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",m.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:q=>o(m)},[t(l,{icon:m.icon,class:Ye(m.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),w("span",null,A(e(n)(m.label)),1)],10,_l),r<u.items.length-1?(h(),C("div",ql)):ae("",!0)]))),128))])}}},Je=he("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:v.withMessage("Поле не должен быть пустым",$)}},rules:{content:{required:v.withMessage("Поле не должен быть пустым",$)},__curator:{required:v.withMessage("Поле не должен быть пустым",$)},__signers:{required:v.withMessage("Поле не должен быть пустым",$)},short_description:{required:v.withMessage("Поле не должен быть пустым",$)},__groups:{$each:v.forEach({__users:{required:v.withMessage("Поле не должен быть пустым",$)},__tags:{required:v.withMessage("Поле не должен быть пустым",$)},__regions:{required:v.withMessage("Поле не должен быть пустым",$)},__start_date:{required:v.withMessage("Поле не должен быть пустым",$)},__end_date:{required:v.withMessage("Поле не должен быть пустым",$)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:v.forEach({users:{required:v.withMessage("Поле не должен быть пустым",$)},text:{required:v.withMessage("Поле не должен быть пустым",$)}})}},booking_model:{bookings:[{type:me,route:Ge,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:v.forEach({segments:{$each:v.forEach({departure_city:{required:v.withMessage("Поле не должен быть пустым",$)},arrival_city:{required:v.withMessage("Поле не должен быть пустым",$)},date:{required:v.withMessage("Поле не должен быть пустым",$)},time:{required:v.withMessage("Поле не должен быть пустым",$)},segment_class:{required:v.withMessage("Поле не должен быть пустым",$)}})},passengers:{required:v.withMessage("Поле не должен быть пустым",$)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Dt,active:!0,value:He},{id:2,label:"work-plan",icon:ut,active:!1,value:ot},{id:3,label:"route",icon:Tt,active:!1,value:st},{id:4,label:"decree",icon:ut,active:!0,value:Ze}],routeTabItems:[{id:1,title:"airplane",icon:pt,value:Ge},{id:2,title:"train",icon:mt,value:lo},{id:3,title:"taxi",icon:_t,value:xt}],routeTypeTabItems:[{id:1,title:"there-back",icon:pt,value:me},{id:2,title:"complex-route",icon:mt,value:rt},{id:3,title:"one-way",icon:_t,value:no}]}),actions:{async actionCreateDocument(u){const a=gt(u);this.buttonLoading=!0;const{response:n,error:o}=await ke(xe,a);return n?(this.buttonLoading=!1,await de().actionCountList(),Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const n=await gt(a);try{this.buttonLoading=!0;const{data:o}=await $e({id:u,body:n});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await de().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){var a,n;try{this.detailLoading=!0;const{data:o}=await fe(u),b=await oo(o.id);this.decreeModel=(n=(a=b==null?void 0:b.data)==null?void 0:a.to_composes[0])==null?void 0:n.from_compose,ge(this.model,o),this.model.__curator=await Re([],o.curator.id,!1),this.model.__signers=await B(o.signers),this.model.__approvers=await B(o.approvers);const i=Object.values(o.notices.reduce((l,m)=>{const r=m.group_id;return l[r]=l[r]||{group_id:r,items:[]},l[r].items.push(m),l},{}));this.model.__groups=await Promise.all(i.map(async l=>{const m=await Promise.all(l.items.map(x=>B([],x.user.id,!1))),r=await nt(l.items[0].tags),q=await Xe("regions",l.items[0].locations),g=l.items[0].start_date,S=l.items[0].end_date;return{__users:m,__tags:r,__regions:q,__start_date:g,__end_date:S}})),this.trip_plan_model.trip_plans=await Promise.all(o.trip_plans.map(async(l,m)=>({...l,users:await B(l.users)}))),this.booking_model.bookings=await Promise.all(o.bookings.map(async l=>({type:l.type,route:l.route,segments:await Promise.all(l.segments.map(async m=>({departure_city:await Xe("regions",[],!1,m.departure_city.id),arrival_city:await Xe("regions",[],!1,m.arrival_city.id),segment_class:await ro.find(r=>r.value===m.segment_class),date:qe(m.departure_date),time:await Jt(m.departure_date,m.departure_end_date)}))),passengers:await B(l.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},async actionStepClick(u,a,n){await u.replace({query:{...a.query,step:n}}),this.stepperItems.forEach(b=>b.active=b.value===n),await Mt();const o=document.querySelector(".document-view-aside");o&&o.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:me,route:Ge,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(u){this.booking_model.bookings.splice(u,1)},actionChangeRouteSegment(u,a){const n=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=u===me?[n(),n()]:[n()]},async actionAddRouteLine(u){this.booking_model.bookings[u].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(u,a){this.booking_model.bookings[u].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:me,route:Ge,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),bl={class:"trip-info-components"},gl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},wl={class:"flex justify-between"},hl={class:"text-base text-primary-900 font-semibold mb-1"},yl=["onClick"],vl={class:"flex w-full gap-x-4"},kl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},$l={class:"text-base text-primary-900 font-semibold mb-2"},xl={class:"flex items-center justify-between"},vt={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},setup(u,{expose:a}){const n=ie(),o=se(),b=Je(),{t:i}=te(),l=J(b.rules,b.model),m=H(!1),r=S=>{b.model.__files=[],S.forEach(x=>{b.model.__files.push(x)})},q=()=>{b.actionAddGroupBlock()},g=async S=>{const x=await l.value.$validate();if(m.value=!0,!x){P(null,i("fill-required-fields"),O.WARNING);return}await b.actionStepClick(o,n,S)};return a({stepClick:g}),(S,x)=>{const L=ue,D=Oe,z=be,E=it,_=ze,k=ce,d=Pe;return h(),C("div",bl,[t(k,null,{default:c(()=>[t(L,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(l).__curator.$model,"onUpdate:modelValue":x[0]||(x[0]=s=>e(l).__curator.$model=s),error:e(l).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(L,{"col-class":"w-1/2"},{default:c(()=>[t(D,{modelValue:e(l).short_description.$model,"onUpdate:modelValue":x[1]||(x[1]=s=>e(l).short_description.$model=s),error:e(l).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(L,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(h(!0),C(Q,null,_e(e(b).model.__groups,(s,f)=>(h(),C("div",gl,[w("div",wl,[w("span",hl,A(e(i)("group"))+"-"+A(f+1),1),f!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:p=>e(b).actionDeleteGroupBlock(f)},[t(z,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,yl)):ae("",!0)]),t(k,null,{default:c(()=>[t(L,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:s.__users,"onUpdate:modelValue":p=>s.__users=p,error:e(l).__groups.$each.$response.$data[f].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(L,{"col-class":"w-1/2"},{default:c(()=>[t(E,{modelValue:s.__regions,"onUpdate:modelValue":p=>s.__regions=p,error:e(l).__groups.$each.$response.$data[f].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":m.value},{chip:c(({value:p})=>[pe(A(p.name),1)]),option:c(({value:p})=>[t(e(Le),{title:p.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(L,{"col-class":"w-1/2"},{default:c(()=>[t(E,{modelValue:s.__tags,"onUpdate:modelValue":p=>s.__tags=p,error:e(l).__groups.$each.$response.$data[f].__tags,"api-url":"tags","api-params":{document_sub_type:e(n).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":m.value},{chip:c(({value:p})=>[pe(A(p.name),1)]),option:c(({value:p})=>[t(e(Le),{title:p.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),t(L,{"col-class":"w-1/2"},{default:c(()=>[w("div",vl,[t(_,{modelValue:s.__start_date,"onUpdate:modelValue":[p=>s.__start_date=p,p=>s.__start_date=e(qe)(p)],error:e(l).__groups.$each.$response.$data[f].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),t(_,{modelValue:s.__end_date,"onUpdate:modelValue":[p=>s.__end_date=p,p=>s.__end_date=e(qe)(p)],error:e(l).__groups.$each.$response.$data[f].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),t(d,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Fe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:q},null,8,["icon-left"])]),_:1}),t(L,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(b).model.__approvers,"onUpdate:modelValue":x[2]||(x[2]=s=>e(b).model.__approvers=s),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(L,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(l).__signers.$model,"onUpdate:modelValue":x[3]||(x[3]=s=>e(l).__signers.$model=s),error:e(l).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(L,{"col-class":"w-full"},{default:c(()=>[w("div",kl,[w("div",$l,A(e(i)("notice")),1),t(Ee,{modelValue:e(l).content.$model,"onUpdate:modelValue":x[4]||(x[4]=s=>e(l).content.$model=s),error:e(l).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(b).model.__files,"onEmit:fileUpload":r},null,8,["modelValue","error","files"])])]),_:1})]),_:1}),w("div",xl,[t(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(d,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:x[5]||(x[5]=s=>g(e(ot)))})])])}}},Vl={class:"work-plan-component"},Ul={class:"flex flex-col gap-y-3"},El={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Cl={class:"flex justify-between"},Sl={class:"text-base text-primary-900 font-semibold mb-1"},Ll=["onClick"],Rl={class:"flex items-center justify-between mt-10"},Dl={class:"flex items-center gap-x-1"},Tl={__name:"WorkPlan",setup(u,{expose:a}){const{t:n}=te(),o=ie(),b=se(),i=Je(),l=J(i.trip_plan_rules,i.trip_plan_model),m=H(!1),r=ne(()=>{const S=new Set;return i.model.__groups.reduce((x,L)=>L.__users&&Array.isArray(L.__users)?x.concat(L.__users):x,[]).filter(x=>S.has(x.id)?!1:(S.add(x.id),!0))}),q=async S=>{const x=await l.value.$validate();if(m.value=!0,!x){P(null,n("fill-required-fields"),O.WARNING);return}await i.actionStepClick(b,o,S)},g=()=>{i.actionAddWorkPlanRow(),m.value=!1};return a({stepClick:q}),(S,x)=>{const L=be,D=Vt,z=ue,E=ce,_=Pe;return h(),C("div",Vl,[w("div",Ul,[(h(!0),C(Q,null,_e(e(i).trip_plan_model.trip_plans,(k,d)=>(h(),C("div",El,[w("div",Cl,[w("span",Sl,A(e(n)("plan"))+"-"+A(d+1),1),d!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:s=>e(i).actionDeleteWorkPlanRow(d)},[t(L,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Ll)):ae("",!0)]),t(E,null,{default:c(()=>[t(z,{"col-class":"w-1/2"},{default:c(()=>[t(D,{modelValue:k.text,"onUpdate:modelValue":s=>k.text=s,error:e(l).trip_plans.$each.$response.$data[d].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(z,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:k.users,"onUpdate:modelValue":s=>k.users=s,options:r.value,error:e(l).trip_plans.$each.$response.$data[d].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),t(_,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Fe),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:g},null,8,["icon-left"]),w("div",Rl,[t(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",Dl,[t(_,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:x[0]||(x[0]=k=>q(e(He)))}),t(_,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:x[1]||(x[1]=k=>q(e(st)))})])])])}}};const Ml={class:"base-time-picker"},Ol={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(u){const a=u,n=et(a,"modelValue"),{t:o}=te();return(b,i)=>{var r;const l=po,m=be;return h(),C("div",Ml,[t(l,{label:a.label,required:a.required},null,8,["label","required"]),t(e(mo),{modelValue:e(n),"onUpdate:modelValue":i[0]||(i[0]=q=>We(n)?n.value=q:null),"time-picker":"",range:u.range,"cancel-text":e(o)("cancel"),"select-text":e(o)("select"),placeholder:e(o)(u.placeholder),ref:"datePicker",class:Ye({"input-error":((r=u.error)==null?void 0:r.$error)&&u.showNestedError})},{"input-icon":c(()=>[t(m,{icon:e(Ot),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Pl={class:"route-component flex flex-col gap-y-3"},Nl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Al={class:"flex items-center justify-between"},Il={class:"flex items-center gap-x-4"},jl={class:"text-base text-primary-900 font-semibold mb-1"},Fl={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},zl={class:"text-xs text-greyscale-900 font-medium"},Bl=["onClick"],Gl=["onClick"],Wl={class:"text-sm text-primary-500 font-semibold"},Yl={class:"flex items-center justify-between mt-10"},Hl={class:"flex items-center gap-x-1"},Kl={__name:"Route",props:{formType:{type:String,default:M}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:n}){const{t:o}=te(),b=ie(),i=se(),l=Je(),m=Ae();oe(),de();const r=J(l.booking_model_rules,l.booking_model);H(!1);const q=H(!1),g=ne(()=>{const d=new Set;return l.model.__groups.reduce((s,f)=>f.__users&&Array.isArray(f.__users)?s.concat(f.__users):s,[]).filter(s=>d.has(s.id)?!1:(d.add(s.id),!0))}),S=d=>{l.routeTabItems.forEach(s=>s.active=s.id===d.id)},x=(d,s)=>{l.routeTypeTabItems.forEach(f=>f.active=f.id===d.id),l.actionChangeRouteSegment(d.value,s)},L=async d=>{const s=await r.value.$validate();if(q.value=!0,!s){P(null,o("fill-required-fields"),O.WARNING);return}await l.actionStepClick(i,b,d)},D=()=>{l.actionAddRouteRow(),q.value=!1},z=(d,s,f,p)=>{p.type===me&&(l.booking_model.bookings[s].segments[f+1].arrival_city=d)},E=(d,s,f,p)=>{p.type===me&&(l.booking_model.bookings[s].segments[f+1].departure_city=d)},_=(d,s,f,p)=>{p.type===me&&(l.booking_model.bookings[s].segments[f+1].segment_class=d)},k=()=>{L(Ze),n("emit:onValidateAndSend")};return a({stepClick:L}),(d,s)=>{const f=lt,p=ue,y=ze,I=ce,N=Pe;return h(),C("div",Pl,[(h(!0),C(Q,null,_e(e(l).booking_model.bookings,(U,V)=>(h(),C("div",Nl,[w("div",Al,[w("div",Il,[w("span",jl,A(e(o)("route"))+"-"+A(V+1),1),t(yt,{modelValue:U.route,"onUpdate:modelValue":T=>U.route=T,items:e(l).routeTabItems,"onEmit:onChange":s[0]||(s[0]=T=>S(T))},null,8,["modelValue","onUpdate:modelValue","items"]),t(yt,{modelValue:U.type,"onUpdate:modelValue":T=>U.type=T,items:e(l).routeTypeTabItems,"onEmit:onChange":T=>x(T,V)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),V!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:s[1]||(s[1]=(...T)=>e(l).actionDeleteRouteRow&&e(l).actionDeleteRouteRow(...T))},[t(be,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):ae("",!0)]),w("div",Fl,[t(be,{icon:e(Pt),class:"text-warning-500"},null,8,["icon"]),w("span",zl,A(e(o)("route-warning")),1)]),(h(!0),C(Q,null,_e(U.segments,(T,W)=>(h(),C("div",null,[t(I,null,{default:c(()=>[t(p,{"col-class":"w-1/5"},{default:c(()=>[t(f,{modelValue:T.departure_city,"onUpdate:modelValue":R=>T.departure_city=R,error:e(r).bookings.$each.$response.$data[V].segments.$each.$data[W].departure_city,options:e(m).regionsList,"onUpdate:options":s[2]||(s[2]=R=>e(m).regionsList=R),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:U.type===e(me)&&W%2!==0,"onEmit:change":R=>z(R,V,W,U)},{option:c(({option:R})=>[t(e(Le),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(p,{"col-class":"w-1/5"},{default:c(()=>[t(f,{modelValue:T.arrival_city,"onUpdate:modelValue":R=>T.arrival_city=R,error:e(r).bookings.$each.$response.$data[V].segments.$each.$data[W].arrival_city,options:e(m).regionsList,"onUpdate:options":s[3]||(s[3]=R=>e(m).regionsList=R),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:U.type===e(me)&&W%2!==0,"onEmit:change":R=>E(R,V,W,U)},{option:c(({option:R})=>[t(e(Le),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(p,{"col-class":"w-1/5"},{default:c(()=>[t(f,{modelValue:T.segment_class,"onUpdate:modelValue":R=>T.segment_class=R,error:e(r).bookings.$each.$response.$data[V].segments.$each.$data[W].segment_class,options:U.route===e(xt)?e(ao):U.route===e(Ge)?e(so):e(io),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":q.value,translatable:"",disabled:U.type===e(me)&&W%2!==0,"onEmit:change":R=>_(R,V,W,U)},{option:c(({option:R})=>[t(e(Le),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(p,{"col-class":"w-1/5"},{default:c(()=>[t(y,{modelValue:T.date,"onUpdate:modelValue":[R=>T.date=R,R=>T.date=e(qe)(R)],error:e(r).bookings.$each.$response.$data[V].segments.$each.$data[W].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),t(p,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[t(Ol,{modelValue:T.time,"onUpdate:modelValue":R=>T.time=R,error:e(r).bookings.$each.$response.$data[V].segments.$each.$data[W].time,label:"time",required:"",range:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),U.type===e(rt)&&W!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:R=>e(l).actionDeleteRouteLine(V,W)},[t(be,{icon:e(je),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Bl)):ae("",!0)]),_:2},1024)]),_:2},1024)]))),256)),U.type===e(rt)?(h(),C("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:T=>e(l).actionAddRouteLine(V)},[t(be,{icon:e(Fe),class:"text-primary-500"},null,8,["icon"]),w("span",Wl,A(e(o)("add-line")),1)],8,Gl)):ae("",!0),t(I,null,{default:c(()=>[t(p,{"col-class":"w-full"},{default:c(()=>[t(G,{modelValue:U.passengers,"onUpdate:modelValue":T=>U.passengers=T,options:g.value,error:e(r).bookings.$each.$response.$data[V].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),t(N,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Fe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:D},null,8,["icon-left"]),w("div",Yl,[t(N,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",Hl,[t(N,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:s[4]||(s[4]=U=>L(e(ot)))}),t(N,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(l).buttonLoading,onClick:k},null,8,["loading"])])])])}}},Ql={class:"decree-component"},Jl={class:"flex items-center justify-between mt-10"},Xl={class:"flex items-center gap-x-1"},Zl={__name:"Decree",props:{formType:{type:String,default:M}},setup(u,{expose:a}){const n=u,o=ie(),b=se(),i=Je(),l=J(i.decreeRules,i.decreeModel),{t:m}=te(),r=oe(),q=de(),g=H(!1),S=async _=>{await i.actionStepClick(b,o,_)},x=_=>{i.decreeModel.__files=[],_.forEach(k=>{i.decreeModel.__files.push(k)})},L=async()=>{var k,d,s,f;if(!await l.value.$validate()){P(null,m("fill-required-fields"),O.WARNING);return}i.decreeModel.approvers=[],i.decreeModel.signers=[],i.decreeModel.curator=(d=(k=i.model)==null?void 0:k.__curator)==null?void 0:d.user_id,i.decreeModel.journal=re.ORDERS_PROTOCOLS,i.decreeModel.company=r.currentUser.company.id,i.decreeModel.sender=(f=(s=r==null?void 0:r.currentUser)==null?void 0:s.top_level_department)==null?void 0:f.id,i.decreeModel.document_type=Z.DECREE,i.decreeModel.document_sub_type=le.BUSINESS_TRIP_DECREE_V2,i.decreeModel.short_description=i.model.short_description,g.value=!0},D=async(_,k)=>{let d={...i.decreeModel,trip_notice_id:_};await i.actionCreateDocument(d)?(g.value=!1,P(null,m("document-sent"),O.SUCCESS),await b.replace({name:Ve,query:{document_type:o.query.document_type}})):P(null,m("error-occurred"),O.ERROR)},z=async(_,k)=>{try{await i.actionUpdateDocument({id:k,body:{...i.decreeModel,trip_notice_id:_}}),await q.actionCountList(),P(null,m("changed"),O.SUCCESS),await b.replace({name:Ue,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})}catch{}},E=()=>{var k;let _=null;n.formType===M&&o.query.notice_id?_=o.query.notice_id:n.formType===Ke&&o.params.id&&(_=o.params.id),n.formType===M?D(_):z(_,(k=i.decreeModel)==null?void 0:k.id)};return a({stepClick:S}),(_,k)=>{const d=Pe;return h(),C("div",Ql,[t(Ee,{modelValue:e(l).content.$model,"onUpdate:modelValue":k[0]||(k[0]=s=>e(l).content.$model=s),error:e(l).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(i).decreeModel.__files,"onEmit:fileUpload":x},null,8,["modelValue","error","files"]),w("div",Jl,[t(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",Xl,[t(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:k[1]||(k[1]=s=>S(e(He)))}),t(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:L})])]),t(Ce,{modelValue:g.value,"onUpdate:modelValue":k[2]||(k[2]=s=>g.value=s),"send-button-loading":e(i).buttonLoading,"onEmit:send":E,"content-classes":"p-0"},{content:c(()=>[t(e(Xt),{"compose-model":{...e(i).model,bookings:e(i).booking_model.bookings,trip_plans:e(i).trip_plan_model.trip_plans,decree_content:e(i).decreeModel.content},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},en={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},tn={class:"px-6 py-4"},gr={__name:"BusinessTripForm",props:{formType:{type:String,default:M}},setup(u){const a=u,{t:n}=te(),o=ie(),b=se(),i=oe(),l=Je();J(l.rules,l.model),J(l.trip_plan_rules,l.trip_plan_model),J(l.booking_model_rules,l.booking_model),J(l.decreeRules,l.decreeModel);const m=H(null),r=ne(()=>a.formType===M?"create-business-trip-notice":"update-business-trip-notice"),q=ne(()=>{switch(o.query.step){case He:return vt;case Ze:return Zl;case ot:return Tl;case st:return Kl;default:return vt}}),g=async D=>{var E;const z=e(m);((E=o.query)==null?void 0:E.step)!==D.value&&(await z.stepClick(D.value),D.value===Ze&&(await x(),await P(null,n("notice-saved-successfully"),O.SUCCESS)))},S=async()=>{o.query.step||await b.replace({query:{...o.query,step:He}}),l.stepperItems.forEach(D=>D.active=D.value===o.query.step)},x=async()=>{var E,_,k,d,s,f;const D=ee(l.model.__approvers),z=ee(l.model.__signers);if(l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.bookings=[],l.model.trip_plans=[],l.model.approvers=D,l.model.signers=z,l.model.curator=(_=(E=l.model)==null?void 0:E.__curator)==null?void 0:_.user_id,l.model.journal=re.INNER,l.model.company=(d=(k=i.currentUser)==null?void 0:k.company)==null?void 0:d.id,l.model.__groups.forEach((p,y)=>{const I=y+1;l.model.notices.push(...p.__users.map(N=>{var U,V;return{start_date:p.__start_date,end_date:p.__end_date,user:N.id,company:(V=(U=i.currentUser)==null?void 0:U.company)==null?void 0:V.id,regions:p.__regions.map(T=>T.id),tags:p.__tags.map(T=>({id:T.id})),group_id:I}}))}),l.model.sender=(f=(s=i==null?void 0:i.currentUser)==null?void 0:s.top_level_department)==null?void 0:f.id,l.model.files=l.model.__files.map(p=>({id:p.id})),l.model.document_type=o.params.document_type,l.model.document_sub_type=o.params.document_sub_type,l.model.bookings=l.booking_model.bookings.map(p=>({...p,segments:p.segments.map(y=>({departure_city:y.departure_city.id,arrival_city:y.arrival_city.id,departure_date:qt(y.date,y.time,0),departure_end_date:qt(y.date,y.time,1),segment_class:y.segment_class.value})),passengers:p.passengers.map(y=>({user:y.id}))})),l.model.trip_plans=l.trip_plan_model.trip_plans.map(p=>({users:p.users.map(y=>({id:y.id})),text:p.text})),a.formType===M&&o.query.notice_id)try{await l.actionUpdateDocument({id:o.query.notice_id,body:l.model})}catch{}else if(a.formType===M)try{const{data:p}=await l.actionCreateDocument(l.model);await b.replace({query:{...o.query,notice_id:p.id}})}catch{}else if(a.formType===Ke&&o.params.id)try{await l.actionUpdateDocument({id:o.params.id,body:l.model})}catch{}},L=async()=>{try{await x(),await P(null,n("notice-saved-successfully"),O.SUCCESS)}catch{}};return Qe(async()=>{await S(),a.formType===Ke?await l.actionGetDocumentDetailForUpdate(o.params.id):o.query.notice_id&&await l.actionGetDocumentDetailForUpdate(o.query.notice_id)}),De(()=>{l.actionResetBTModel()}),(D,z)=>{const E=ye,_=fl;return h(),C("div",{class:Ye(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(l).detailLoading}])},[e(l).detailLoading?(h(),Y(E,{key:0})):(h(),Y(e(ve),{key:1,title:r.value},{content:c(()=>[w("div",en,[t(_,{items:e(l).stepperItems,"onEmit:stepClick":g},null,8,["items"])]),w("div",tn,[(h(),Y(Nt(q.value),{"form-type":u.formType,ref_key:"childComponent",ref:m,"onEmit:onValidateAndSend":L},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},on=he("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:v.withMessage("Поле не должен быть пустым",$)},__curator:{required:v.withMessage("Поле не должен быть пустым",$)},__signers:{required:v.withMessage("Поле не должен быть пустым",$)},short_description:{required:v.withMessage("Поле не должен быть пустым",$)},__groups:{$each:v.forEach({__users:{required:v.withMessage("Поле не должен быть пустым",$)},__tags:{required:v.withMessage("Поле не должен быть пустым",$)},__regions:{required:v.withMessage("Поле не должен быть пустым",$)},__start_date:{required:v.withMessage("Поле не должен быть пустым",$)},__end_date:{required:v.withMessage("Поле не должен быть пустым",$)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:v.forEach({users:{required:v.withMessage("Поле не должен быть пустым",$)},text:{required:v.withMessage("Поле не должен быть пустым",$)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:n}=await ke(xe,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await $e({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}}}}),ln={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},nn={class:"flex justify-between"},rn={class:"text-base text-primary-900 font-semibold mb-1"},an=["onClick"],sn={class:"flex w-full gap-x-4"},dn={class:"flex flex-col gap-y-3"},cn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},un={class:"flex justify-between"},pn={class:"text-base text-primary-900 font-semibold mb-1"},mn=["onClick"],_n={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},qn={class:"text-base text-primary-900 font-semibold mb-2"},wr={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:M}},setup(u){const a=u,n=H(!1),o=H(!1),{t:b}=te(),i=ie(),l=se(),m=oe(),r=on(),q=de();Ae();const g=J(r.rules,r.model),S=J(r.trip_plan_rules,r.trip_plan_model),x=ne(()=>a.formType===M?"create-decree":"update-decree"),L=ne(()=>{const p=new Set;return r.model.__groups.reduce((y,I)=>I.__users&&Array.isArray(I.__users)?y.concat(I.__users):y,[]).filter(y=>p.has(y.id)?!1:(p.add(y.id),!0))}),D=async()=>{var N,U,V,T,W,R;if(n.value=!0,!await g.value.$validate()){P(null,b("fill-required-fields"),O.WARNING);return}const y=ee(r.model.__approvers),I=ee(r.model.__signers);r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.bookings=[],r.model.trip_plans=[],r.model.approvers=y,r.model.signers=I,r.model.curator=(U=(N=r.model)==null?void 0:N.__curator)==null?void 0:U.user_id,r.model.journal=re.ORDERS_PROTOCOLS,r.model.company=(T=(V=m.currentUser)==null?void 0:V.company)==null?void 0:T.id,r.model.__groups.forEach((X,Se)=>{const j=Se+1;r.model.notices.push(...X.__users.map(K=>{var F,Be;return{start_date:X.__start_date,end_date:X.__end_date,user:K.id,company:(Be=(F=m.currentUser)==null?void 0:F.company)==null?void 0:Be.id,regions:X.__regions.map(Ie=>Ie.id),tags:X.__tags.map(Ie=>({id:Ie.id})),group_id:j}}))}),r.model.sender=(R=(W=m==null?void 0:m.currentUser)==null?void 0:W.top_level_department)==null?void 0:R.id,r.model.files=r.model.__files.map(X=>({id:X.id})),r.model.document_type=i.params.document_type,r.model.document_sub_type=i.params.document_sub_type,r.model.trip_plans=r.trip_plan_model.trip_plans.map(X=>({users:X.users.map(Se=>({id:Se.id})),text:X.text})),o.value=!0},z=()=>{},E=()=>{r.actionAddGroupBlock()},_=()=>{r.actionAddWorkPlanRow(),n.value=!1},k=p=>{r.model.__files=[],p.forEach(y=>{r.model.__files.push(y)})},d=async()=>{const p=await r.actionCreateDocument(r.model);await q.actionCountList(),p?(o.value=!1,P(null,b("document-sent"),O.SUCCESS),await l.replace({name:Ve,query:{document_type:i.params.document_type}})):P(null,b("error-occurred"),O.ERROR)},s=async()=>{await r.actionUpdateDocument({id:i.params.id,body:r.model}),await q.actionCountList(),P(null,b("changed"),O.SUCCESS),await l.replace({name:Ue,params:{id:i.params.id,document_type:i.params.document_type,document_sub_type:i.params.document_sub_type}})},f=()=>{a.formType===M?d():s()};return(p,y)=>{const I=ye,N=ue,U=Oe,V=be,T=it,W=ze,R=ce,X=Pe,Se=Vt;return e(r).detailLoading?(h(),Y(I,{key:0})):(h(),C(Q,{key:1},[t(e(ve),{title:x.value},{content:c(()=>[t(Te,{"onEmit:preview":D,"onEmit:clearForm":z},{default:c(()=>[t(R,null,{default:c(()=>[t(N,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(g).__curator.$model,"onUpdate:modelValue":y[0]||(y[0]=j=>e(g).__curator.$model=j),error:e(g).__curator,"api-url":"top-signers","api-params":{doc_types:e(i).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(N,{"col-class":"w-1/2"},{default:c(()=>[t(U,{modelValue:e(g).short_description.$model,"onUpdate:modelValue":y[1]||(y[1]=j=>e(g).short_description.$model=j),error:e(g).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(N,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(h(!0),C(Q,null,_e(e(r).model.__groups,(j,K)=>(h(),C("div",ln,[w("div",nn,[w("span",rn,A(e(b)("group"))+"-"+A(K+1),1),K!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:F=>e(r).actionDeleteGroupBlock(K)},[t(V,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,an)):ae("",!0)]),t(R,null,{default:c(()=>[t(N,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:j.__users,"onUpdate:modelValue":F=>j.__users=F,error:e(g).__groups.$each.$response.$data[K].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(N,{"col-class":"w-1/2"},{default:c(()=>[t(T,{modelValue:j.__regions,"onUpdate:modelValue":F=>j.__regions=F,error:e(g).__groups.$each.$response.$data[K].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":n.value},{chip:c(({value:F})=>[pe(A(F.name),1)]),option:c(({value:F})=>[t(e(Le),{title:F.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(N,{"col-class":"w-1/2"},{default:c(()=>[t(T,{modelValue:j.__tags,"onUpdate:modelValue":F=>j.__tags=F,error:e(g).__groups.$each.$response.$data[K].__tags,"api-url":"tags","api-params":{document_sub_type:e(i).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":n.value},{chip:c(({value:F})=>[pe(A(F.name),1)]),option:c(({value:F})=>[t(e(Le),{title:F.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),t(N,{"col-class":"w-1/2"},{default:c(()=>[w("div",sn,[t(W,{modelValue:j.__start_date,"onUpdate:modelValue":[F=>j.__start_date=F,F=>j.__start_date=e(qe)(F)],error:e(g).__groups.$each.$response.$data[K].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),t(W,{modelValue:j.__end_date,"onUpdate:modelValue":[F=>j.__end_date=F,F=>j.__end_date=e(qe)(F)],error:e(g).__groups.$each.$response.$data[K].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),t(X,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Fe),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:E},null,8,["icon-left"])]),_:1})]),_:1}),w("div",dn,[(h(!0),C(Q,null,_e(e(r).trip_plan_model.trip_plans,(j,K)=>(h(),C("div",cn,[w("div",un,[w("span",pn,A(e(b)("plan"))+"-"+A(K+1),1),K!==0?(h(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:F=>e(r).actionDeleteWorkPlanRow(K)},[t(V,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,mn)):ae("",!0)]),t(R,null,{default:c(()=>[t(N,{"col-class":"w-1/2"},{default:c(()=>[t(Se,{modelValue:j.text,"onUpdate:modelValue":F=>j.text=F,error:e(S).trip_plans.$each.$response.$data[K].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(N,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:j.users,"onUpdate:modelValue":F=>j.users=F,options:L.value,error:e(S).trip_plans.$each.$response.$data[K].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),t(X,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Fe),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:_},null,8,["icon-left"]),t(R,null,{default:c(()=>[t(N,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":y[2]||(y[2]=j=>e(r).model.__approvers=j),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(N,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(g).__signers.$model,"onUpdate:modelValue":y[3]||(y[3]=j=>e(g).__signers.$model=j),error:e(g).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(N,{"col-class":"w-full"},{default:c(()=>[w("div",_n,[w("div",qn,A(e(b)("decree")),1),t(Ee,{modelValue:e(g).content.$model,"onUpdate:modelValue":y[4]||(y[4]=j=>e(g).content.$model=j),error:e(g).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":k},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:o.value,"onUpdate:modelValue":y[5]||(y[5]=j=>o.value=j),"send-button-loading":e(r).buttonLoading,"onEmit:send":f},{content:c(()=>[t(e($t),{"compose-model":{...e(r).model,trip_plans:e(r).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{ur as _,_r as a,qr as b,fr as c,gr as d,wr as e,pr as f,mr as g,br as h};
