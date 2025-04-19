import{_ as ce}from"./BaseRow.90fe0d08.6837.js";import{_ as Pe}from"./BaseInput.f44b1556.6837.js";import{_ as ue}from"./BaseCol.7f8f4146.6837.js";import{v as Q,b9 as tt,a1 as ot,o as y,c as T,i as t,z as d,h as e,b6 as He,d as ne,ds as Oe,a as h,t as B,F as J,e as qe,a3 as me,g as ae,f as K,B as $t,dx as xt,bh as Vt,n as Fe,r as wt,G as Ne,as as ve,cK as X,cL as ee,ci as re,u as oe,b as se,ao as ie,bc as Re,a5 as N,ac as ke,a8 as Ut,cW as Je,dy as Et,_ as ge,dz as St,dA as ut,dB as Ct,dC as Lt,dD as Rt,dE as Dt,$ as Tt,dF as Mt,dG as Ot,b5 as Pt,br as je,b_ as Be,dH as Nt,dq as At,E as It}from"./index.1ec5564d.6901.js";import{c as v,r as x,u as Z}from"./index.5a96dff8.6837.js";import{_ as Ft,a as jt}from"./BranchMultiSelect.5c253c03.6837.js";import{j as Bt,k as zt,l as Gt,_ as $e,a as Wt,h as Yt,f as Ht,b as Kt,c as Qt,d as Jt,e as ht,i as Xt,m as Zt,g as eo}from"./BasePOA.ef23ef0b.6837.js";import"./BaseTabMenu.9e89f419.6837.js";import"./dialog.esm.8a0818e7.6837.js";import"./tabpanel.esm.2e3c334e.6837.js";import"./FileSaver.min.a3ced9dd.6837.js";import{x as pt,s as he,v as W,y as to,z as Ae,A as te,B as Le,C as mt,D as nt,E as We,o as _t}from"./index.2e3dd464.6837.js";import"./BaseTabView.da65ff94.6837.js";import"./FileTabs.d1cc12d1.6837.js";import{_ as Y}from"./UserMultiSelect.6c92de88.6837.js";import{c as oo,u as le,w as xe,d as A}from"./axios.config.4038dfe8.6837.js";import{u as De}from"./common.ff62d8c2.6837.js";import{u as de}from"./count.store.305553f0.6837.js";import{u as at,a as Ve,b as be,c as Ue,d as lo,f as no}from"./index.store.3831aebe.6837.js";import{j as qt,k as Te,i as Ee,c as _e,b as Ye,l as Ke,m as lt,n as st,o as et,a as ro,B as yt,M as rt,O as ao,T as so,C as io,P as co,p as uo}from"./index.bd76a17d.6837.js";import{F as z,a as Qe}from"./constants.50c90617.6837.js";import{_ as Xe}from"./BaseDropdown.6d4e5dfb.6837.js";import{_ as ze}from"./BaseCalendar.2e8ac43b.6837.js";import{_ as it}from"./BaseMultiSelect.83ebdfe6.6837.js";import{f as po,a as fe}from"./formatDate.9426f241.6837.js";import{Q as ft}from"./qrcode.vue.esm.d83099c8.6837.js";import{_ as vt}from"./ShortDescription.bce6ff47.6837.js";import"./dayjs.min.7763f03c.6837.js";/* empty css                                                                                    */import{c as mo}from"./Dropdown.14a3f589.6837.js";import"./menu.esm.64df57f1.6837.js";/* empty css                                                      */import"./avatar.esm.58a17cb9.6837.js";/* empty css                                                      */import"./businessTrip.store.057997ea.6837.js";/* empty css                                                            */import"./accordiontab.esm.cb1ebe91.6837.js";import"./common.store.e541ed6d.6837.js";import{_ as we}from"./WithRadio.81d38d99.6837.js";import"./radiobutton.esm.a59cc216.6837.js";import"./checkbox.esm.d6717842.6837.js";import"./index.es6.f9050ba3.6837.js";import{_ as bt}from"./BaseBrickRadio.65f17699.6837.js";import{_ as _o}from"./BaseLabel.611ffb07.6837.js";import{K as qo}from"./main.4eb0a930.6837.js";import{_ as fo}from"./WithSelectable.28a8676b.6837.js";import{_ as bo}from"./BaseBrickTab.4510da07.6837.js";import{_ as go}from"./BaseFileUpload.d7e903bf.6837.js";import{_ as wo}from"./BaseFroalaEditor.1698405c.6837.js";import{_ as ho}from"./BaseDialog.46bb69b7.6837.js";const yo={class:"user-select"},ye={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(p,{emit:a}){const r=p,o=Q([]),f=tt(r,"modelValue"),s=async l=>{let{data:u}=await oo.get(`${r.apiUrl}/`,l);u.hasOwnProperty("results")?o.value=u.results:o.value=u};return ot(async()=>{await s(r.apiParams)}),(l,u)=>(y(),T("div",yo,[t(Xe,{modelValue:e(f),"onUpdate:modelValue":u[0]||(u[0]=n=>He(f)?f.value=n:null),options:o.value,"onUpdate:options":u[1]||(u[1]=n=>o.value=n),error:r.error,"api-url":r.apiUrl,"api-params":r.apiParams,"option-label":"full_name",label:r.label,placeholder:r.placeholder,required:r.required,searchable:"","onEmit:change":u[2]||(u[2]=n=>a("emit:change",n))},{option:d(({option:n})=>[t(e(fo),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},vo={class:"business-trip-decree-template-view letter-template"},ko={class:"flex flex-col text-sm font-medium mt-4"},$o=h("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),xo=["innerHTML"],Vo=["innerHTML"],Uo={class:"employees-table text-sm mt-4"},Eo={class:"w-full"},So=h("tr",{class:"text-center"},[h("td",{class:"border-2 p-1"},"№"),h("td",{class:"border-2 p-1"},"F.I.SH"),h("td",{class:"border-2 p-1"},"Departament va lavozim"),h("td",{class:"border-2 p-1"},"Yo'nalish"),h("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Co={class:"text-center"},Lo={class:"border-2 p-1"},Ro={class:"border-2 p-1"},Do={class:"border-2 p-1"},To=h("br",null,null,-1),Mo={class:"border-2 p-1"},Oo={class:"flex flex-col gap-y-1"},Po={key:0},No={class:"border-2 p-1 w-[100px]"},Ao=h("br",null,null,-1),Io={class:"indent-8 mt-2 text-sm text-justify"},Fo=h("div",null,"xizmat safariga yuborilsin.",-1),jo=h("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Bo=h("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),zo=h("div",null," Buxgalteriya hisobi va moliyaviy menejment departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Go={key:0},Wo=h("span",{class:"font-semibold"},"Asos: ",-1),Yo=h("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),Ho=h("div",null," O‘zR MKning 287-moddasi; ",-1),Ko=h("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),Qo={class:"mt-6 pb-2 px-4"},Jo={class:"text-sm font-semibold block"},Xo={class:"text-sm font-semibold block"},Zo={class:"text-sm font-semibold block"},el={class:"text-sm font-semibold block"},tl={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(p){const a=p,r=at(),o=ne(()=>{var u;return a.preview?le().currentUser:(u=a.composeModel)==null?void 0:u.author}),f=ne(()=>{var u,n,q;return a.preview?(u=a.composeModel)==null?void 0:u.__employees.map(b=>({empFullName:b.full_name,empDepName:b.top_level_department.name,empPositionName:b.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(q=(n=a.composeModel)==null?void 0:n.notices)==null?void 0:q.map(b=>({empFullName:b.user.full_name,empDepName:b.user.top_level_department.name,empPositionName:b.user.position.name,destinations:b.destinations,startDate:b.start_date,endDate:b.end_date}))}),s=ne(()=>{var n,q,b;if(a.preview)return[(n=a.composeModel)==null?void 0:n.__curator];const u=(q=a.composeModel)==null?void 0:q.signers.find(M=>M.type===Oe.BASIC_SIGNER);return u?[u]:[(b=a.composeModel)==null?void 0:b.curator].filter(Boolean)}),l=ne(()=>{var u,n;return a.preview?(u=a.composeModel)==null?void 0:u.__signers:(n=a.composeModel)==null?void 0:n.signers.filter(q=>q.type===Oe.SIGNER)});return(u,n)=>{var M,D,C,L,O,k,m,S;const q=ue,b=ce;return y(),T("div",vo,[t(e(Bt)),t(e(zt),{"dep-name":(D=(M=o.value)==null?void 0:M.top_level_department)==null?void 0:D.name},null,8,["dep-name"]),h("div",ko,[h("span",null," № "+B((C=a.composeModel)==null?void 0:C.register_number),1),h("span",null,B(((L=a.composeModel)==null?void 0:L.register_date)&&e(po)((O=a.composeModel)==null?void 0:O.register_date)),1)]),$o,e(r).historyShow?(y(),T("div",{key:0,class:"text-justify",innerHTML:e(r).historyContent},null,8,xo)):(y(),T("div",{key:1,class:"text-justify",innerHTML:(k=a.composeModel)==null?void 0:k.content},null,8,Vo)),h("div",Uo,[h("table",Eo,[So,f.value&&f.value.length?(y(!0),T(J,{key:0},qe(f.value,(i,c)=>(y(),T("tr",Co,[h("td",Lo,B(c+1),1),h("td",Ro,B(i.empFullName),1),h("td",Do,[me(B(i.empDepName)+" ",1),To,me(" "+B(i.empPositionName),1)]),h("td",Mo,[h("div",Oo,[(y(!0),T(J,null,qe(i.destinations,(g,_)=>(y(),T("span",null,[me(B(g.name)+" ",1),_!==i.destinations.length-1?(y(),T("span",Po,",")):ae("",!0)]))),256))])]),h("td",No,[me(B(i.startDate)+" ",1),Ao,me(" "+B(i.endDate),1)])]))),256)):ae("",!0)])]),h("div",Io,[Fo,jo,Bo,zo,(m=p.composeModel)!=null&&m.trip_notice_register_number?(y(),T("div",Go,[Wo,me(B((S=p.composeModel)==null?void 0:S.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):ae("",!0),Yo,Ho,Ko]),h("div",Qo,[(y(!0),T(J,null,qe(s.value,i=>(y(),K(b,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[t(q,{"col-class":"w-1/3"},{default:d(()=>[h("span",Jo,B(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?(y(),K(ft,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:d(()=>[h("span",Xo,B(e(pt)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(y(!0),T(J,null,qe(l.value,i=>(y(),K(b,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[t(q,{"col-class":"w-1/3"},{default:d(()=>[h("span",Zo,B(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?(y(),K(ft,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:d(()=>[h("span",el,B(e(pt)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),t(e(Gt),{"compose-model":a.composeModel,author:o.value},null,8,["compose-model","author"])])}}};var ol=`
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
`,ll={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};$t.extend({name:"editor",css:ol,classes:ll});(function(){try{return window.Quill}catch{return null}})();const Se={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(p){return["froala","tiny"].includes(p)}}},emits:["update:modelValue","emit:fileUpload"],setup(p,{emit:a}){const r=p,o=tt(r,"modelValue"),f=Q([{title:"text",slot:"editor",icon:xt},{title:"file",slot:"file",icon:Vt}]);return(s,l)=>(y(),K(bo,{"tab-panel-list":f.value,"panel-container-class":"px-0"},{editor:d(()=>[p.editor==="froala"?(y(),K(wo,{key:0,modelValue:e(o),"onUpdate:modelValue":l[0]||(l[0]=u=>He(o)?o.value=u:null)},null,8,["modelValue"])):(y(),K(mo,{key:1,modelValue:e(o),"onUpdate:modelValue":l[1]||(l[1]=u=>He(o)?o.value=u:null)},null,8,["modelValue"]))]),file:d(()=>[h("div",{class:Fe(r.fileUploadContainerClasses)},[t(go,{files:r.files,"onEmit:fileUpload":l[2]||(l[2]=u=>a("emit:fileUpload",u))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},nl={class:"flex flex-col justify-between h-full"},rl={class:"px-6 py-4 overflow-y-auto"},al={class:"actions p-6"},Me={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(p,{emit:a}){return(r,o)=>{const f=Ne;return y(),T("div",nl,[h("div",rl,[wt(r.$slots,"default")]),h("div",al,[t(f,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:o[0]||(o[0]=s=>a("emit:clearForm"))}),t(f,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:o[1]||(o[1]=s=>a("emit:preview"))})])])}}},sl=ve("sd-stores-inner",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=le().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,document_type:X.INNER,document_sub_type:ee.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:re.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:v.withMessage("Поле не должен быть пустым",x)},content:{required:v.withMessage("Поле не должен быть пустым",x)},__departments:{required:v.withMessage("Поле не должен быть пустым",x)},__approvers:{},__signers:{required:v.withMessage("Поле не должен быть пустым",x)}}}},actions:{async actionCreateDocument(p){let a={...p,type:qt,sub_type:qt};this.buttonLoading=!0;const{response:r,error:o}=await xe(Ue,a);return r?(this.buttonLoading=!1,Promise.resolve(r)):Promise.reject(o)},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__approvers=await W(a.approvers),this.model.__signers=await W(a.signers),this.model.__departments=await to(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),il={class:"font-semibold text-xl"},Ce={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(p,{emit:a}){const o=tt(p,"modelValue"),{t:f}=oe();return(s,l)=>{const u=Ne,n=ho;return y(),K(n,{modelValue:e(o),"onUpdate:modelValue":l[1]||(l[1]=q=>He(o)?o.value=q:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[h("span",il,B(e(f)("preview")),1)]),content:d(()=>[wt(s.$slots,"content")]),footer:d(()=>[t(u,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(u,{label:p.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:p.sendButtonLoading,onClick:l[0]||(l[0]=q=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},_r={__name:"InnerForm",props:{formType:{type:String,default:z}},setup(p){const a=p,r=le(),o=sl();De();const f=de(),s=Q(!1);Q(null);const{t:l}=oe(),u=se(),n=ie(),q=Z(o.rules,o.model),b=async()=>{await q.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.departments=[],o.model.departments=o.model.__departments.map(m=>m.id),o.model.files=[],o.model.files=o.model.__files.map(m=>({id:m.id})),o.model.journal=re.INNER,o.model.sender=r.currentUser.top_level_department.id,o.model.approvers=te(o.model.__approvers),o.model.signers=te(o.model.__signers),o.model.document_type=n.params.document_type,o.model.document_sub_type=n.params.document_sub_type,o.model.receiver&&delete o.model.receiver)},M=()=>{a.formType===z?D():C()},D=async()=>{const k=await o.actionCreateDocument(o.model);await f.actionCountList(),k?(s.value=!1,A(null,l("document-sent"),N.SUCCESS),await u.replace({name:Te,query:{document_type:X.INNER}})):A(null,l("error-occurred"),N.ERROR)},C=async()=>{await o.actionUpdateDocument({id:n.params.id,body:o.model}),await f.actionCountList(),A(null,l("document-sent"),N.SUCCESS),await u.replace({name:Ee,params:{id:n.params.id,document_type:X.INNER,document_sub_type:ee.SERVICE_LETTER}})},L=()=>{console.log("Clear Form")},O=k=>{o.model.__files=[],k.forEach(m=>{o.model.__files.push(m)})};return ot(async()=>{n.params.id&&await o.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Ae(o.model)}),(k,m)=>{const S=ke,i=ue,c=Pe,g=ce;return e(o).detailLoading?(y(),K(S,{key:0})):(y(),T(J,{key:1},[t(e($e),{title:a.formType===e(z)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[t(Me,{"onEmit:preview":b,"onEmit:clearForm":L},{default:d(()=>[t(g,null,{default:d(()=>[t(i,{"col-class":"w-1/2"},{default:d(()=>[t(Ft,{modelValue:e(q).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=_=>e(q).__departments.$model=_),error:e(q).__departments},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(c,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=_=>e(q).short_description.$model=_),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=_=>e(q).__approvers.$model=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=_=>e(q).__signers.$model=_),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-full"},{default:d(()=>[t(Se,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=_=>e(q).content.$model=_),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=_=>s.value=_),"send-button-loading":e(o).buttonLoading,"onEmit:send":M},{content:d(()=>{var _,w;return[t(Wt,{"compose-model":{...e(o).model,signers:e(o).model.__signers,approvers:e(o).model.__approvers,author:e(o).model.__signers[0],sender:{name:(w=(_=e(r).currentUser)==null?void 0:_.top_level_department)==null?void 0:w.name},receiver:{departments:e(o).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},dl=ve("sd-store-application",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=le().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:v.withMessage("Поле не должен быть пустым",x)},__curator:{required:v.withMessage("Поле не должен быть пустым",x)},__approvers:{required:v.withMessage("Поле не должен быть пустым",x)},__signers:{}}}},actions:{async actionCreateDocument(p){let a={...p};this.buttonLoading=!0;const{response:r,error:o}=await xe(Ue,a);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__approvers=await W(a.approvers),this.model.__signers=await W(a.signers.filter(r=>r.type===Oe.SIGNER)),this.model.__curator=await Le([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),kt=ve("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:le().currentUser.company.id,curator:null,document_type:X.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:re.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:v.withMessage("Поле не должен быть пустым",x)},register_date:{required:v.withMessage("Поле не должен быть пустым",x)},content:{required:v.withMessage("Поле не должен быть пустым",x)},__negotiators:{required:v.withMessage("Поле не должен быть пустым",x)},__curator:{required:v.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__signers=await W(a.signers.filter(r=>r.type!==Oe.NEGOTIATOR)),this.model.__negotiators=await W(a.signers.filter(r=>r.type===Oe.NEGOTIATOR)),this.model.__approvers=await W(a.approvers),this.model.__curator=await Le([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),qr={__name:"ApplicationForm",props:{formType:{type:String,default:z}},setup(p){const a=p,r=le(),o=dl();De();const f=de();kt();const s=Q(!1);Q(null);const{t:l}=oe(),u=se(),n=ie(),q=Z(o.rules,o.model),b=async()=>{var m,S,i,c,g;await q.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.signers=[{user:(m=r==null?void 0:r.currentUser)==null?void 0:m.id}],o.model.sender=(i=(S=r==null?void 0:r.currentUser)==null?void 0:S.top_level_department)==null?void 0:i.id,o.model.curator=(g=(c=o==null?void 0:o.model)==null?void 0:c.__curator)==null?void 0:g.user_id,o.model.journal=re.APPLICATION,o.model.document_type=n.params.document_type,o.model.document_sub_type=n.params.document_sub_type,o.model.approvers=te(o.model.__approvers))},M=async()=>{},D=()=>{a.formType===z?C():L()},C=async()=>{const k=await o.actionCreateDocument(o.model);await f.actionCountList(),k?(s.value=!1,A(null,l("document-sent"),N.SUCCESS),await u.replace({name:Te,query:{document_type:X.APPLICATION}})):A(null,l("error-occurred"),N.ERROR)},L=async()=>{await o.actionUpdateDocument({id:n.params.id,body:o.model}),await f.actionCountList(),A(null,l("document-sent"),N.SUCCESS),await u.replace({name:Ee,params:{id:n.params.id,document_type:X.APPLICATION,document_sub_type:ee.LABOR_LEAVE}})},O=k=>{o.model.__files=[],k.forEach(m=>{o.model.__files.push(m)})};return ot(async()=>{n.params.id&&await o.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Ae(o.model)}),(k,m)=>{const S=ke,i=ue,c=ce;return e(o).detailLoading?(y(),K(S,{key:0})):(y(),T(J,{key:1},[t(e($e),{title:a.formType===e(z)?"create-sd-application":"update-sd-application"},{content:d(()=>[t(Me,{"onEmit:preview":b,"onEmit:clearForm":M},{default:d(()=>[t(c,null,{default:d(()=>[t(i,{"col-class":"w-1/2"},{default:d(()=>[t(ye,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=g=>e(q).__curator.$model=g),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[1]||(m[1]=g=>e(q).__approvers.$model=g),error:e(q).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[2]||(m[2]=g=>e(q).__signers.$model=g),disabled:"",label:"signers",placeholder:e(r).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(i,{"col-class":"w-full"},{default:d(()=>[t(Se,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[3]||(m[3]=g=>e(q).content.$model=g),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=g=>s.value=g),"send-button-loading":e(o).buttonLoading,"onEmit:send":D},{content:d(()=>[t(Yt,{"compose-model":{...e(o).model,curator:e(o).model.__curator,author:a.formType===e(z)?e(r).currentUser:e(o).model.__signers[0].user,signers:a.formType===e(z)?[e(r).currentUser]:e(o).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},cl=ve("sd-notice-store",{state:()=>(le(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:X.NOTICE,document_sub_type:ee.BUSINESS_TRIP,journal:re.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:v.withMessage("Поле не должен быть пустым",x)},start_date:{required:v.withMessage("Поле не должен быть пустым",x)},route:{required:v.withMessage("Поле не должен быть пустым",x)},content:{required:v.withMessage("Поле не должен быть пустым",x)},__companies:{required:v.withMessage("Поле не должен быть пустым",x)},__curator:{required:v.withMessage("Поле не должен быть пустым",x)},__employees:{required:v.withMessage("Поле не должен быть пустым",x)},__signers:{required:v.withMessage("Поле не должен быть пустым",x)},__tags:{required:v.withMessage("Поле не должен быть пустым",x)},short_description:{required:v.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,a=!1){try{this.detailLoading=!0;const{data:r}=await be(p);he(this.model,r),this.model.__companies=[],this.model.__curator=await Le([],r.curator.id,!1),this.model.__employees=await W(r.notices),a?(this.model.__approvers=await W(r.approvers.filter(o=>{var f,s;return((f=o==null?void 0:o.user)==null?void 0:f.id)!==((s=r==null?void 0:r.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await W(r.approvers),this.model.__signers=await W(r.signers),this.model.__companies=await mt(r.notices[0].destinations),this.model.__tags=await nt(r.tags),this.model.start_date=r.notices[0].start_date,this.model.end_date=r.notices[0].end_date,this.model.__tags=r.tags,this.model.route=r.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(p,a){try{this.detailLoading=!0;const{data:r}=await be(p),o=await be(a);he(this.model,r),this.model.__companies=[],this.model.__curator=await Le([],r.curator.id,!1),this.model.__employees=await W(o.data.notices),this.model.__approvers=await W(r.approvers),this.model.__signers=await W(r.signers),this.model.__companies=await mt(o.data.notices[0].destinations),this.model.__tags=await nt(r.tags),this.model.start_date=o.data.notices[0].start_date,this.model.end_date=o.data.notices[0].end_date,this.model.__tags=r.tags,this.model.route=o.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),ul={class:"flex w-full gap-x-4"},fr={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:z}},setup(p){const a=p,{t:r}=oe(),o=ie(),f=se(),s=le(),l=cl(),u=de();De();const n=Z(l.rules,l.model),q=Q(!1),b=ne(()=>{const i=a.formType===z,c=o.params.document_sub_type;return c===ee.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":c===ee.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),M=ne(()=>{var i,c;return o.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((i=o==null?void 0:o.query)==null?void 0:i.compose_id)&&((c=o==null?void 0:o.query)==null?void 0:c.document_sub_type)===ee.BUSINESS_TRIP}),D=ne(()=>{var i;return!!(o.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((i=l==null?void 0:l.model)!=null&&i.trip_notice_id))});Ut(()=>l.model.__tags,i=>{if(a.formType===z)if(i&&i.length){let c=`${i.map(g=>g.name_uz).join(", ")} yuzasidan`;l.model.short_description=c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()}else l.model.short_description=null});const C=async()=>{var c,g,_,w,$;await n.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.approvers=te(l.model.__approvers),l.model.signers=te(l.model.__signers),l.model.curator=(g=(c=l==null?void 0:l.model)==null?void 0:c.__curator)==null?void 0:g.user_id,l.model.journal=o.params.document_type===X.DECREE||o.params.document_type===X.ORDER?re.ORDERS_PROTOCOLS:re.INNER,l.model.company=s.currentUser.company.id,l.model.notices=l.model.__employees.map(P=>({start_date:l.model.start_date,end_date:l.model.end_date,user:P.id,route:l.model.route,companies:l.model.__companies.map(U=>U.id)})),l.model.sender=(w=(_=s==null?void 0:s.currentUser)==null?void 0:_.top_level_department)==null?void 0:w.id,l.model.tags=l.model.__tags.map(P=>({id:P.id})),l.model.files=l.model.__files.map(P=>({id:P.id})),l.model.document_type=o.params.document_type,l.model.document_sub_type=o.params.document_sub_type,M.value&&(l.model.trip_notice_id=($=o==null?void 0:o.query)==null?void 0:$.compose_id),q.value=!0)},L=()=>{},O=i=>{l.model.__files=[],i.forEach(c=>{l.model.__files.push(c)})},k=async()=>{M.value&&(l.model.notices=[]);const i=await l.actionCreateDocument(l.model);await u.actionCountList(),i?(q.value=!1,A(null,r("document-sent"),N.SUCCESS),await f.replace({name:Te,query:{document_type:o.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?X.DECREE:o.params.document_sub_type===ee.BUSINESS_TRIP_ORDER_LOCAL?X.ORDER:X.NOTICE}})):A(null,r("error-occurred"),N.ERROR)},m=async()=>{(M.value||D.value)&&(l.model.notices=[]),await l.actionUpdateDocument({id:o.params.id,body:l.model}),await u.actionCountList(),A(null,r("changed"),N.SUCCESS),await f.replace({name:Ee,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},S=()=>{a.formType===z?k():m()};return Je(async()=>{o.params.id&&o.query.trip_notice_id&&o.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?await l.actionGetDocumentDetailForUpdateForCustomUse(o.params.id,o.query.trip_notice_id):o.params.id?await l.actionGetDocumentDetailForUpdate(o.params.id):M.value&&await l.actionGetDocumentDetailForUpdate(o.query.compose_id,!0)}),Re(()=>{Ae(l.model)}),(i,c)=>{const g=ke,_=ue,w=ze,$=Xe,P=Pe,U=ce;return e(l).detailLoading?(y(),K(g,{key:0})):(y(),T(J,{key:1},[t(e($e),{title:b.value},{content:d(()=>[t(Me,{"onEmit:preview":C,"onEmit:clearForm":L},{default:d(()=>[t(U,null,{default:d(()=>[t(_,{"col-class":"w-1/2"},{default:d(()=>[t(ye,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=E=>e(n).__curator.$model=E),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":c[1]||(c[1]=E=>e(n).__employees.$model=E),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:M.value||D.value},null,8,["modelValue","error","disabled"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t(jt,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":c[2]||(c[2]=E=>e(n).__companies.$model=E),error:e(n).__companies,"text-truncate":"",disabled:M.value||D.value},null,8,["modelValue","error","disabled"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t(it,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":c[3]||(c[3]=E=>e(n).__tags.$model=E),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:E})=>[me(B(E.name),1)]),option:d(({value:E})=>[t(e(we),{title:E.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[h("div",ul,[t(w,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[c[4]||(c[4]=E=>e(n).start_date.$model=E),c[5]||(c[5]=E=>e(n).start_date.$model=e(fe)(E))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:M.value||D.value},null,8,["modelValue","error","min-date","disabled"]),t(w,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[c[6]||(c[6]=E=>e(n).end_date.$model=E),c[7]||(c[7]=E=>e(n).end_date.$model=e(fe)(E))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:M.value||D.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t($,{modelValue:e(n).route.$model,"onUpdate:modelValue":c[8]||(c[8]=E=>e(n).route.$model=E),error:e(n).route,options:e(Et),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:M.value||D.value},null,8,["modelValue","error","options","disabled"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":c[9]||(c[9]=E=>e(l).model.__approvers=E),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":c[10]||(c[10]=E=>e(n).__signers.$model=E),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t(P,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":c[11]||(c[11]=E=>e(n).short_description.$model=E),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-full"},{default:d(()=>[t(Se,{modelValue:e(n).content.$model,"onUpdate:modelValue":c[12]||(c[12]=E=>e(n).content.$model=E),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:q.value,"onUpdate:modelValue":c[13]||(c[13]=E=>q.value=E),"send-button-loading":e(l).buttonLoading,"onEmit:send":S},{content:d(()=>[e(o).params.document_sub_type===e(ee).BUSINESS_TRIP_DECREE_LOCAL?(y(),K(e(tl),{key:0,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):e(o).params.document_sub_type===e(ee).BUSINESS_TRIP_ORDER_LOCAL?(y(),K(e(Ht),{key:1,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):(y(),K(e(Kt),{key:2,"compose-model":e(l).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},br={__name:"OrderForm",props:{formType:{type:String,default:z}},setup(p){const a=p,r=kt(),o=de(),f=le(),s=ie(),l=se(),u=Z(r.rules,r.model),{t:n}=oe(),q=Q(!1),b=async()=>{var m,S,i,c;await u.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=te(r.model.__approvers),r.model.curator=(S=(m=r==null?void 0:r.model)==null?void 0:m.__curator)==null?void 0:S.user_id,r.model.sender=(c=(i=f==null?void 0:f.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,r.model.files=r.model.__files.map(g=>({id:g.id})),r.model.document_type=s.params.document_type,r.model.document_sub_type=s.params.document_sub_type,r.model.journal=re.ORDERS_PROTOCOLS,r.model.register_date=fe(r.model.register_date),r.model.__negotiators.forEach(g=>{r.model.signers.push(g.hasOwnProperty("user")?{id:g.id,user:g.user.id,type:Oe.NEGOTIATOR}:{user:g.id,type:Oe.NEGOTIATOR})}),s.query.compose_id&&(r.model.trip_notice_id=s.query.compose_id),q.value=!0)},M=()=>{},D=async()=>{try{const k=await r.actionCreateDocument(r.model);await o.actionCountList(),k&&(q.value=!1,A(null,n("document-sent"),N.SUCCESS),await l.replace({name:Te,query:{document_type:X.ORDER}}))}catch{A(null,n("error-occurred"),N.ERROR)}},C=async()=>{try{const k=await r.actionUpdateDocument({id:s.params.id,body:r.model});await o.actionCountList(),A(null,n("changed"),N.SUCCESS),await l.replace({name:Ee,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{A(null,n("error-occurred"),N.ERROR)}},L=()=>{a.formType===z?D():C()},O=k=>{r.model.__files=[],k.forEach(m=>{r.model.__files.push(m)})};return ot(async()=>{s.params.id&&await r.actionGetDocumentDetailForUpdate(s.params.id)}),Re(()=>{Ae(r.model)}),(k,m)=>{const S=ke,i=ue,c=Pe,g=ze,_=ce;return e(r).detailLoading?(y(),K(S,{key:0})):(y(),T(J,{key:1},[t(e($e),{title:a.formType===e(z)?"create-order":"update-order"},{content:d(()=>[t(Me,{"onEmit:preview":b,"onEmit:clearForm":M},{default:d(()=>[t(_,null,{default:d(()=>[t(i,{"col-class":"w-1/2"},{default:d(()=>[t(ye,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=w=>e(u).__curator.$model=w),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(c,{modelValue:e(u).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=w=>e(u).register_number.$model=w),error:e(u).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(g,{modelValue:e(u).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=w=>e(u).register_date.$model=w),error:e(u).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=w=>e(r).model.__approvers=w),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(u).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=w=>e(u).__negotiators.$model=w),error:e(u).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-full"},{default:d(()=>[t(Se,{modelValue:e(u).content.$model,"onUpdate:modelValue":m[5]||(m[5]=w=>e(u).content.$model=w),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:q.value,"onUpdate:modelValue":m[6]||(m[6]=w=>q.value=w),"send-button-loading":e(r).buttonLoading,"onEmit:send":L},{content:d(()=>[t(e(Qt),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},pl=ve("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:v.withMessage("Поле не должен быть пустым",x)},__curator:{required:v.withMessage("Поле не должен быть пустым",x)},__signers:{required:v.withMessage("Поле не должен быть пустым",x)},short_description:{required:v.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await W(a.approvers),this.model.__signers=await W(a.signers)}catch{}finally{this.detailLoading=!1}}}}),gr={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:z}},setup(p){const a=p,{t:r}=oe(),o=ie(),f=se(),s=le(),l=pl(),u=de();De();const n=Q(!1),q=Z(l.rules,l.model),b=async()=>{var m,S,i,c;await q.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=te(l.model.__approvers),l.model.signers=te(l.model.__signers),l.model.curator=(S=(m=l==null?void 0:l.model)==null?void 0:m.__curator)==null?void 0:S.user_id,l.model.journal=re.INNER,l.model.company=s.currentUser.company.id,l.model.sender=(c=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,l.model.files=l.model.__files.map(g=>({id:g.id})),l.model.document_type=o.params.document_type,l.model.document_sub_type=o.params.document_sub_type,n.value=!0)},M=()=>{},D=k=>{l.model.__files=[],k.forEach(m=>{l.model.__files.push(m)})},C=async()=>{const k=await l.actionCreateDocument(l.model);await u.actionCountList(),k?(n.value=!1,A(null,r("document-sent"),N.SUCCESS),await f.replace({name:Te,query:{document_type:X.NOTICE}})):A(null,r("error-occurred"),N.ERROR)},L=async()=>{await l.actionUpdateDocument({id:o.params.id,body:l.model}),await u.actionCountList(),A(null,r("changed"),N.SUCCESS),await f.replace({name:Ee,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},O=()=>{a.formType===z?C():L()};return Je(async()=>{o.params.id&&await l.actionGetDocumentDetailForUpdate(o.params.id)}),Re(()=>{Ae(l.model)}),(k,m)=>{const S=ke,i=ue,c=Pe,g=ce;return e(l).detailLoading?(y(),K(S,{key:0})):(y(),T(J,{key:1},[t(e($e),{title:a.formType===e(z)?"create-notice":"update-notice"},{content:d(()=>[t(Me,{"onEmit:preview":b,"onEmit:clearForm":M},{default:d(()=>[t(g,null,{default:d(()=>[t(i,{"col-class":"w-1/2"},{default:d(()=>[t(ye,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=_=>e(q).__curator.$model=_),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(c,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=_=>e(q).short_description.$model=_),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=_=>e(l).model.__approvers=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(i,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=_=>e(q).__signers.$model=_),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(i,{"col-class":"w-full"},{default:d(()=>[t(Se,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=_=>e(q).content.$model=_),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:n.value,"onUpdate:modelValue":m[5]||(m[5]=_=>n.value=_),"send-button-loading":e(l).buttonLoading,"onEmit:send":O},{content:d(()=>[t(e(Jt),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ml=ve("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:v.withMessage("Поле не должен быть пустым",x)},__curator:{required:v.withMessage("Поле не должен быть пустым",x)},__signers:{required:v.withMessage("Поле не должен быть пустым",x)},short_description:{required:v.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(p){const a={...p};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:r,error:o}=await xe(Ue,a);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){const r={...a};delete r.bookings,delete r.notices,delete r.trip_plans;try{this.buttonLoading=!0;const{data:o}=await Ve({id:p,body:r});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,a){try{this.detailLoading=!0;const{data:r}=await be(p);he(this.model,r),this.model.__curator=await Le([],r.curator.id,!1),this.model.__approvers=await W(r.approvers),this.model.__signers=await W(r.signers)}catch{}finally{this.detailLoading=!1}}}}),wr={__name:"DecreeForm",props:{formType:{type:String,default:z}},setup(p){const a=p,{t:r}=oe(),o=ie(),f=se(),s=le(),l=de();De();const u=Q(!1),n=ml(),q=at(),b=Z(n.rules,n.model),M=async()=>{var i,c,g,_;await b.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=te(n.model.__approvers),n.model.signers=te(n.model.__signers),n.model.curator=(c=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:c.user_id,n.model.journal=re.ORDERS_PROTOCOLS,n.model.company=s.currentUser.company.id,n.model.sender=(_=(g=s==null?void 0:s.currentUser)==null?void 0:g.top_level_department)==null?void 0:_.id,n.model.files=n.model.__files.map(w=>({id:w.id})),n.model.document_type=o.params.document_type,n.model.document_sub_type=o.params.document_sub_type,o.query.compose_id&&(n.model.trip_notice_id=o.query.compose_id),u.value=!0)},D=()=>{},C=S=>{n.model.__files=[],S.forEach(i=>{n.model.__files.push(i)})},L=async()=>{const S=await n.actionCreateDocument(n.model);await l.actionCountList(),S?(u.value=!1,A(null,r("document-sent"),N.SUCCESS),await f.replace({name:Te,query:{document_type:o.params.document_type}})):A(null,r("error-occurred"),N.ERROR)},O=async()=>{await n.actionUpdateDocument({id:o.params.id,body:n.model}),await l.actionCountList(),A(null,r("changed"),N.SUCCESS),await f.replace({name:Ee,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},k=()=>{a.formType===z?L():O()},m=async S=>{const{data:i}=await q.actionGetDocumentDetail(S);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return Je(async()=>{a.formType===z&&o.query.compose_id?await m(o.query.compose_id):a.formType===Qe&&o.query.trip_notice_id&&o.params.id?(await n.actionGetDocumentDetailForUpdate(o.params.id,null),await m(o.query.trip_notice_id)):a.formType===Qe&&o.params.id&&await n.actionGetDocumentDetailForUpdate(o.params.id,null)}),Re(()=>{Ae(n.model)}),(S,i)=>{const c=ke,g=ue,_=Pe,w=ce;return e(n).detailLoading?(y(),K(c,{key:0})):(y(),T(J,{key:1},[t(e($e),{title:a.formType===e(z)?"create-decree":"update-decree"},{content:d(()=>[t(Me,{"onEmit:preview":M,"onEmit:clearForm":D},{default:d(()=>[t(w,null,{default:d(()=>[t(g,{"col-class":"w-1/2"},{default:d(()=>[t(ye,{modelValue:e(b).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=$=>e(b).__curator.$model=$),error:e(b).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(g,{"col-class":"w-1/2"},{default:d(()=>[t(_,{modelValue:e(b).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=$=>e(b).short_description.$model=$),error:e(b).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(g,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=$=>e(n).model.__approvers=$),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(g,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(b).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=$=>e(b).__signers.$model=$),error:e(b).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(g,{"col-class":"w-full"},{default:d(()=>[t(Se,{modelValue:e(b).content.$model,"onUpdate:modelValue":i[4]||(i[4]=$=>e(b).content.$model=$),error:e(b).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":C},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:u.value,"onUpdate:modelValue":i[5]||(i[5]=$=>u.value=$),"send-button-loading":e(n).buttonLoading,"onEmit:send":k},{content:d(()=>[t(e(ht),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},_l=ve("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:v.withMessage("Поле не должен быть пустым",x)},start_date:{required:v.withMessage("Поле не должен быть пустым",x)},__curator:{required:v.withMessage("Поле не должен быть пустым",x)},__signers:{required:v.withMessage("Поле не должен быть пустым",x)},__user:{required:v.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);return he(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await W(a.approvers),this.model.__signers=await W(a.signers),this.model.__user=await We("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),hr={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:z}},setup(p){const a=p,r=ie(),o=se(),f=le(),s=_l();at();const l=de(),{t:u}=oe(),n=Z(s.rules,s.model),q=Q(!1),b=Q([]),M=ne(()=>a.formType===z?"create-poa":"update-poa"),D=ne(()=>s.model.start_date?new Date(s.model.start_date):new Date),C=async()=>{var c,g,_,w,$,P,U,E,V,I,R,G,pe,F,H,j,Ge,Ie,dt,ct;if(await n.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=te(s.model.__approvers),s.model.signers=te(s.model.__signers),s.model.curator=(g=(c=s==null?void 0:s.model)==null?void 0:c.__curator)==null?void 0:g.user_id,s.model.user=(w=(_=s==null?void 0:s.model)==null?void 0:_.__user)==null?void 0:w.id,s.model.journal=re.POWER_OF_ATTORNEY,s.model.company=(P=($=f.currentUser)==null?void 0:$.company)==null?void 0:P.id,s.model.sender=(E=(U=f==null?void 0:f.currentUser)==null?void 0:U.top_level_department)==null?void 0:E.id,s.model.document_type=r.params.document_type,s.model.document_sub_type=r.params.document_sub_type,s.model.content=".",s.model.parent=(I=(V=s.model)==null?void 0:V.__parent)==null?void 0:I.id,!((G=(R=s==null?void 0:s.model)==null?void 0:R.__user)!=null&&G.passport_seria||(F=(pe=s==null?void 0:s.model)==null?void 0:pe.__user)!=null&&F.passport_number||(j=(H=s==null?void 0:s.model)==null?void 0:H.__user)!=null&&j.passport_issue_date||(Ie=(Ge=s==null?void 0:s.model)==null?void 0:Ge.__user)!=null&&Ie.passport_issued_by)){A(null,`${(ct=(dt=s.model)==null?void 0:dt.__user)==null?void 0:ct.full_name}: ${u("passport-details-error")}`,N.WARNING);return}q.value=!0}},L=()=>{},O=async()=>{const i=await s.actionCreateDocument(s.model);await l.actionCountList(),i?(q.value=!1,A(null,u("document-sent"),N.SUCCESS),await o.replace({name:Te,query:{document_type:X.POWER_OF_ATTORNEY}})):A(null,u("error-occurred"),N.ERROR)},k=async()=>{await s.actionUpdateDocument({id:r.params.id,body:s.model}),await l.actionCountList(),A(null,u("changed"),N.SUCCESS),await o.replace({name:Ee,params:{id:r.params.id,document_type:r.params.document_type,document_sub_type:r.params.document_sub_type}})},m=()=>{a.formType===z?O():k()},S=async i=>{const{data:c}=await lo({user:i.id,document_sub_type:r.params.document_sub_type,status:5});b.value=c.results};return Je(async()=>{if(r.params.id){const i=await s.actionGetDocumentDetailForUpdate(r.params.id);i.parent&&(b.value=[i.parent])}}),Re(()=>{Ae(s.model)}),(i,c)=>{const g=ke,_=ue,w=ze,$=Xe,P=ce;return e(s).detailLoading?(y(),K(g,{key:0})):(y(),T(J,{key:1},[t(e($e),{title:M.value},{content:d(()=>[t(Me,{"onEmit:preview":C,"onEmit:clearForm":L},{default:d(()=>[t(P,null,{default:d(()=>[t(_,{"col-class":"w-1/2"},{default:d(()=>[t(ye,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=U=>e(n).__curator.$model=U),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t(ye,{modelValue:e(n).__user.$model,"onUpdate:modelValue":c[1]||(c[1]=U=>e(n).__user.$model=U),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":c[2]||(c[2]=U=>S(U))},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t(w,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[c[3]||(c[3]=U=>e(n).start_date.$model=U),c[4]||(c[4]=U=>e(n).start_date.$model=e(fe)(U))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t(w,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[c[5]||(c[5]=U=>e(n).end_date.$model=U),c[6]||(c[6]=U=>e(n).end_date.$model=e(fe)(U))],error:e(n).end_date,"min-date":D.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":c[7]||(c[7]=U=>e(s).model.__approvers=U),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":c[8]||(c[8]=U=>e(n).__signers.$model=U),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:d(()=>[t($,{modelValue:e(s).model.__parent,"onUpdate:modelValue":c[9]||(c[9]=U=>e(s).model.__parent=U),options:b.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:q.value,"onUpdate:modelValue":c[10]||(c[10]=U=>q.value=U),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:d(()=>[t(Xt,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ql={class:"base-stepper-component flex items-center select-none"},fl=["onClick"],bl={key:0,class:"flex h-1 bg-greyscale-200 w-8"},gl={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(p,{emit:a}){const{t:r}=oe(),o=f=>{a("emit:stepClick",f)};return(f,s)=>{const l=ge;return y(),T("div",ql,[(y(!0),T(J,null,qe(p.items,(u,n)=>(y(),T("div",{key:u.id,class:"flex items-center"},[h("div",{class:Fe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",u.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:q=>o(u)},[t(l,{icon:u.icon,class:Fe(u.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),h("span",null,B(e(r)(u.label)),1)],10,fl),n<p.items.length-1?(y(),T("div",bl)):ae("",!0)]))),128))])}}},Ze=ve("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:v.withMessage("Поле не должен быть пустым",x)}},rules:{content:{required:v.withMessage("Поле не должен быть пустым",x)},__curator:{required:v.withMessage("Поле не должен быть пустым",x)},__signers:{required:v.withMessage("Поле не должен быть пустым",x)},short_description:{required:v.withMessage("Поле не должен быть пустым",x)},__groups:{$each:v.forEach({__users:{required:v.withMessage("Поле не должен быть пустым",x)},__tags:{required:v.withMessage("Поле не должен быть пустым",x)},__regions:{required:v.withMessage("Поле не должен быть пустым",x)},__start_date:{required:v.withMessage("Поле не должен быть пустым",x)},__end_date:{required:v.withMessage("Поле не должен быть пустым",x)},__company:{required:v.withMessage("Поле не должен быть пустым",x)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:v.forEach({users:{required:v.withMessage("Поле не должен быть пустым",x)},text:{required:v.withMessage("Поле не должен быть пустым",x)}})}},booking_model:{bookings:[{type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:v.forEach({segments:{$each:v.forEach({departure_city:{required:v.withMessage("Поле не должен быть пустым",x)},arrival_city:{required:v.withMessage("Поле не должен быть пустым",x)},date:{required:v.withMessage("Поле не должен быть пустым",x)},time:{required:v.withMessage("Поле не должен быть пустым",x)},segment_class:{required:v.withMessage("Поле не должен быть пустым",x)}})},passengers:{required:v.withMessage("Поле не должен быть пустым",x)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:St,active:!0,value:Ke},{id:2,label:"work-plan",icon:ut,active:!1,value:lt},{id:3,label:"route",icon:Ct,active:!1,value:st},{id:4,label:"decree",icon:ut,active:!0,value:et}],routeTabItems:[{id:1,title:"airplane",icon:Lt,value:Ye},{id:2,title:"train",icon:Rt,value:ro},{id:3,title:"taxi",icon:Dt,value:yt}],routeTypeTabItems:[{id:1,title:"there-back",icon:Tt,value:_e},{id:2,title:"complex-route",icon:Mt,value:rt},{id:3,title:"one-way",icon:Ot,value:ao}]}),actions:{async actionCreateDocument(p){const a=_t(p);this.buttonLoading=!0;const{response:r,error:o}=await xe(Ue,a);return r?(this.buttonLoading=!1,await de().actionCountList(),Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){const r=await _t(a);try{this.buttonLoading=!0;const{data:o}=await Ve({id:p,body:r});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await de().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){var a,r;try{this.detailLoading=!0;const{data:o}=await be(p),f=await no(o.id);this.decreeModel=(r=(a=f==null?void 0:f.data)==null?void 0:a.to_composes[0])==null?void 0:r.from_compose,he(this.model,o),this.model.__curator=await Le([],o.curator.id,!1),this.model.__signers=await W(o.signers),this.model.__approvers=await W(o.approvers);const s=Object.values(o.notices.reduce((l,u)=>{const n=u.group_id;return l[n]=l[n]||{group_id:n,items:[]},l[n].items.push(u),l},{}));this.model.__groups=await Promise.all(s.map(async l=>{const u=await Promise.all(l.items.map(async C=>({...await W([],C.user.id,!1),business_trip_id:C.id}))),n=await nt(l.items[0].tags),q=await We("regions",l.items[0].locations),b=await We("companies",[],!1,l.items[0].sender_company),M=l.items[0].start_date,D=l.items[0].end_date;return{__users:u,__tags:n,__regions:q,__start_date:M,__end_date:D,__company:b}})),this.trip_plan_model.trip_plans=await Promise.all(o.trip_plans.map(async(l,u)=>({...l,users:await W(l.users)}))),this.booking_model.bookings=await Promise.all(o.bookings.map(async l=>({type:l.type,route:l.route,segments:await Promise.all(l.segments.map(async u=>({departure_city:await We("regions",[],!1,u.departure_city.id),arrival_city:await We("regions",[],!1,u.arrival_city.id),segment_class:await so.find(n=>n.value===u.segment_class),date:fe(u.departure_date),time:await Zt(u.departure_date,u.departure_end_date)}))),passengers:await W(l.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null})},actionDeleteGroupBlock(p){this.model.__groups.splice(p,1)},async actionStepClick(p,a,r){await p.replace({query:{...a.query,step:r}}),this.stepperItems.forEach(f=>f.active=f.value===r),await Pt();const o=document.querySelector(".document-view-aside");o&&o.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(p){this.trip_plan_model.trip_plans.splice(p,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(p){this.booking_model.bookings.splice(p,1)},actionChangeRouteSegment(p,a){const r=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=p===_e?[r(),r()]:[r()]},async actionAddRouteLine(p){this.booking_model.bookings[p].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(p,a){this.booking_model.bookings[p].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),wl={class:"trip-info-components"},hl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},yl={class:"flex justify-between"},vl={class:"text-base text-primary-900 font-semibold mb-1"},kl=["onClick"],$l={class:"flex align-center gap-x-4"},xl={class:"flex w-full gap-x-4"},Vl={class:"text-base text-primary-900 font-semibold mb-2"},Ul={class:"flex items-center justify-between"},gt={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},setup(p,{expose:a}){const r=ie(),o=se(),f=Ze(),s=De(),{t:l}=oe(),u=Z(f.rules,f.model),n=Q(!1),q=D=>{f.model.__files=[],D.forEach(C=>{f.model.__files.push(C)})},b=()=>{f.actionAddGroupBlock()},M=async D=>{const C=await u.value.$validate();if(n.value=!0,!C){A(null,l("fill-required-fields"),N.WARNING);return}await f.actionStepClick(o,r,D)};return a({stepClick:M}),(D,C)=>{const L=ue,O=Pe,k=ge,m=Xe,S=it,i=ze,c=ce,g=Ne;return y(),T("div",wl,[t(c,null,{default:d(()=>[t(L,{"col-class":"w-1/2"},{default:d(()=>[t(ye,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":C[0]||(C[0]=_=>e(u).__curator.$model=_),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(L,{"col-class":"w-1/2"},{default:d(()=>[t(O,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":C[1]||(C[1]=_=>e(u).short_description.$model=_),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(L,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[(y(!0),T(J,null,qe(e(f).model.__groups,(_,w)=>(y(),T("div",hl,[h("div",yl,[h("span",vl,B(e(l)("group"))+"-"+B(w+1),1),w!==0?(y(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:$=>e(f).actionDeleteGroupBlock(w)},[t(k,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,kl)):ae("",!0)]),t(c,null,{default:d(()=>[t(L,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:_.__users,"onUpdate:modelValue":$=>_.__users=$,error:e(u).__groups.$each.$response.$data[w].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(L,{"col-class":"w-1/2"},{default:d(()=>[h("div",$l,[t(m,{modelValue:_.__company,"onUpdate:modelValue":$=>_.__company=$,error:e(u).__groups.$each.$response.$data[w].__company,options:e(s).filialList,"onUpdate:options":C[2]||(C[2]=$=>e(s).filialList=$),required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":n.value,class:"w-1/2"},{option:d(({option:$})=>[t(e(we),{title:$.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error"]),t(S,{modelValue:_.__regions,"onUpdate:modelValue":$=>_.__regions=$,error:e(u).__groups.$each.$response.$data[w].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":n.value,class:"w-1/2"},{chip:d(({value:$})=>[me(B($.name),1)]),option:d(({value:$})=>[t(e(we),{title:$.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])])]),_:2},1024),t(L,{"col-class":"w-1/2"},{default:d(()=>[t(S,{modelValue:_.__tags,"onUpdate:modelValue":$=>_.__tags=$,error:e(u).__groups.$each.$response.$data[w].__tags,"api-url":"tags","api-params":{document_sub_type:e(r).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":n.value},{chip:d(({value:$})=>[me(B($.name),1)]),option:d(({value:$})=>[t(e(we),{title:$.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),t(L,{"col-class":"w-1/2"},{default:d(()=>[h("div",xl,[t(i,{modelValue:_.__start_date,"onUpdate:modelValue":[$=>_.__start_date=$,$=>_.__start_date=e(fe)($)],error:e(u).__groups.$each.$response.$data[w].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),t(i,{modelValue:_.__end_date,"onUpdate:modelValue":[$=>_.__end_date=$,$=>_.__end_date=e(fe)($)],error:e(u).__groups.$each.$response.$data[w].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),t(g,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:b},null,8,["icon-left"])]),_:1}),t(L,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(f).model.__approvers,"onUpdate:modelValue":C[3]||(C[3]=_=>e(f).model.__approvers=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(L,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":C[4]||(C[4]=_=>e(u).__signers.$model=_),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(L,{"col-class":"w-full"},{default:d(()=>[h("div",{class:Fe(["border-[1.5px] rounded-2xl px-5 py-4",n.value&&!e(f).model.content?"border-critic-500":"border-greyscale-200"])},[h("div",Vl,B(e(l)("notice")),1),t(Se,{modelValue:e(u).content.$model,"onUpdate:modelValue":C[5]||(C[5]=_=>e(u).content.$model=_),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(f).model.__files,"onEmit:fileUpload":q},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),h("div",Ul,[t(g,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(g,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:C[6]||(C[6]=_=>M(e(lt)))})])])}}},El={class:"work-plan-component"},Sl={class:"flex flex-col gap-y-3"},Cl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ll={class:"flex justify-between"},Rl={class:"text-base text-primary-900 font-semibold mb-1"},Dl=["onClick"],Tl={class:"flex items-center justify-between mt-10"},Ml={class:"flex items-center gap-x-1"},Ol={__name:"WorkPlan",setup(p,{expose:a}){const{t:r}=oe(),o=ie(),f=se(),s=Ze(),l=Z(s.trip_plan_rules,s.trip_plan_model),u=Q(!1),n=ne(()=>{const M=new Set;return s.model.__groups.reduce((D,C)=>C.__users&&Array.isArray(C.__users)?D.concat(C.__users):D,[]).filter(D=>M.has(D.id)?!1:(M.add(D.id),!0))}),q=async M=>{const D=await l.value.$validate();if(u.value=!0,!D){A(null,r("fill-required-fields"),N.WARNING);return}const C=s.trip_plan_model.trip_plans.flatMap(O=>{var k;return(k=O.users)==null?void 0:k.map(m=>m.id)}),L=n.value.filter(O=>!C.includes(O.id));L.length?(A(null,`У следующих сотрудников нет плана работы: ${L==null?void 0:L.map(O=>O.first_name+" "+O.last_name).join(", ")}.`,N.WARNING),A(null,"У всех сотрудников должен быть назначен рабочий план.",N.WARNING)):await s.actionStepClick(f,o,M)},b=()=>{s.actionAddWorkPlanRow(),u.value=!1};return a({stepClick:q}),(M,D)=>{const C=ge,L=vt,O=ue,k=ce,m=Ne;return y(),T("div",El,[h("div",Sl,[(y(!0),T(J,null,qe(e(s).trip_plan_model.trip_plans,(S,i)=>(y(),T("div",Cl,[h("div",Ll,[h("span",Rl,B(e(r)("plan"))+"-"+B(i+1),1),i!==0?(y(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:c=>e(s).actionDeleteWorkPlanRow(i)},[t(C,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Dl)):ae("",!0)]),t(k,null,{default:d(()=>[t(O,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:S.text,"onUpdate:modelValue":c=>S.text=c,error:e(l).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":u.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(O,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:S.users,"onUpdate:modelValue":c=>S.users=c,options:n.value,error:e(l).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":u.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),t(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:b},null,8,["icon-left"]),h("div",Tl,[t(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",Ml,[t(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:D[0]||(D[0]=S=>q(e(Ke)))}),t(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:D[1]||(D[1]=S=>q(e(st)))})])])])}}};const Pl={class:"base-time-picker"},Nl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(p){const a=p,r=tt(a,"modelValue"),{t:o}=oe();return(f,s)=>{var n;const l=_o,u=ge;return y(),T("div",Pl,[t(l,{label:a.label,required:a.required},null,8,["label","required"]),t(e(qo),{modelValue:e(r),"onUpdate:modelValue":s[0]||(s[0]=q=>He(r)?r.value=q:null),"time-picker":"",range:p.range,"cancel-text":e(o)("cancel"),"select-text":e(o)("select"),placeholder:e(o)(p.placeholder),ref:"datePicker",class:Fe({"input-error":((n=p.error)==null?void 0:n.$error)&&p.showNestedError})},{"input-icon":d(()=>[t(u,{icon:e(Nt),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Al={class:"route-component flex flex-col gap-y-3"},Il={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Fl={class:"flex items-center justify-between"},jl={class:"flex items-center gap-x-4"},Bl={class:"text-base text-primary-900 font-semibold mb-1"},zl={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Gl={class:"text-xs text-greyscale-900 font-medium"},Wl=["onClick"],Yl=["onClick"],Hl={class:"text-sm text-primary-500 font-semibold"},Kl={class:"flex items-center justify-between mt-10"},Ql={class:"flex items-center gap-x-1"},Jl={__name:"Route",props:{formType:{type:String,default:z}},emits:["emit:onValidateAndSend"],setup(p,{expose:a,emit:r}){const{t:o}=oe(),f=ie(),s=se(),l=Ze(),u=De();le(),de();const n=Z(l.booking_model_rules,l.booking_model);Q(!1);const q=Q(!1),b=ne(()=>{const i=new Set;return l.model.__groups.reduce((c,g)=>g.__users&&Array.isArray(g.__users)?c.concat(g.__users):c,[]).filter(c=>i.has(c.id)?!1:(i.add(c.id),!0))}),M=i=>{l.routeTabItems.forEach(c=>c.active=c.id===i.id)},D=(i,c)=>{l.routeTypeTabItems.forEach(g=>g.active=g.id===i.id),l.actionChangeRouteSegment(i.value,c)},C=async(i,c=!1)=>{var $,P;const g=await n.value.$validate();if(q.value=!0,!g){A(null,o("fill-required-fields"),N.WARNING);return}const _=($=l.booking_model.bookings)==null?void 0:$.flatMap(U=>{var E;return(E=U.passengers)==null?void 0:E.map(V=>V==null?void 0:V.id)}),w=(P=b.value)==null?void 0:P.filter(U=>!(_!=null&&_.includes(U.id)));w.length?(A(null,`У следующих сотрудников не назначен маршрут: ${w.map(U=>U.first_name+" "+U.last_name).join(", ")}.`,N.WARNING),A(null,"У всех сотрудников должен быть назначен маршрут",N.WARNING)):(c&&r("emit:onValidateAndSend"),await l.actionStepClick(s,f,i))},L=()=>{l.actionAddRouteRow(),q.value=!1},O=(i,c,g,_)=>{_.type===_e&&(l.booking_model.bookings[c].segments[g+1].arrival_city=i)},k=(i,c,g,_)=>{_.type===_e&&(l.booking_model.bookings[c].segments[g+1].departure_city=i)},m=(i,c,g,_)=>{_.type===_e&&(l.booking_model.bookings[c].segments[g+1].segment_class=i)},S=()=>{C(et,!0)};return a({stepClick:C}),(i,c)=>{const g=Xe,_=ue,w=ze,$=ce,P=Ne;return y(),T("div",Al,[(y(!0),T(J,null,qe(e(l).booking_model.bookings,(U,E)=>(y(),T("div",Il,[h("div",Fl,[h("div",jl,[h("span",Bl,B(e(o)("route"))+"-"+B(E+1),1),t(bt,{modelValue:U.route,"onUpdate:modelValue":V=>U.route=V,items:e(l).routeTabItems,"onEmit:onChange":c[0]||(c[0]=V=>M(V))},null,8,["modelValue","onUpdate:modelValue","items"]),t(bt,{modelValue:U.type,"onUpdate:modelValue":V=>U.type=V,items:e(l).routeTypeTabItems,"onEmit:onChange":V=>D(V,E)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),E!==0?(y(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:c[1]||(c[1]=(...V)=>e(l).actionDeleteRouteRow&&e(l).actionDeleteRouteRow(...V))},[t(ge,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):ae("",!0)]),h("div",zl,[t(ge,{icon:e(At),class:"text-warning-500"},null,8,["icon"]),h("span",Gl,B(e(o)("route-warning")),1)]),(y(!0),T(J,null,qe(U.segments,(V,I)=>(y(),T("div",null,[t($,null,{default:d(()=>[t(_,{"col-class":"w-1/5"},{default:d(()=>[t(g,{modelValue:V.departure_city,"onUpdate:modelValue":R=>V.departure_city=R,error:e(n).bookings.$each.$response.$data[E].segments.$each.$data[I].departure_city,options:e(u).regionsList,"onUpdate:options":c[2]||(c[2]=R=>e(u).regionsList=R),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:U.type===e(_e)&&I%2!==0,"onEmit:change":R=>O(R,E,I,U)},{option:d(({option:R})=>[t(e(we),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(_,{"col-class":"w-1/5"},{default:d(()=>[t(g,{modelValue:V.arrival_city,"onUpdate:modelValue":R=>V.arrival_city=R,error:e(n).bookings.$each.$response.$data[E].segments.$each.$data[I].arrival_city,options:e(u).regionsList.filter(R=>{var G;return(R==null?void 0:R.id)!=((G=V.departure_city)==null?void 0:G.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:U.type===e(_e)&&I%2!==0,"onEmit:change":R=>k(R,E,I,U)},{option:d(({option:R})=>[t(e(we),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(_,{"col-class":"w-1/5"},{default:d(()=>[t(g,{modelValue:V.segment_class,"onUpdate:modelValue":R=>V.segment_class=R,error:e(n).bookings.$each.$response.$data[E].segments.$each.$data[I].segment_class,options:U.route===e(yt)?e(io):U.route===e(Ye)?e(co):e(uo),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":q.value,translatable:"",disabled:U.type===e(_e)&&I%2!==0,"onEmit:change":R=>m(R,E,I,U)},{option:d(({option:R})=>[t(e(we),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(_,{"col-class":"w-1/5"},{default:d(()=>[t(w,{modelValue:V.date,"onUpdate:modelValue":[R=>V.date=R,R=>V.date=e(fe)(R)],error:e(n).bookings.$each.$response.$data[E].segments.$each.$data[I].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),t(_,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:d(()=>[t(Nl,{modelValue:V.time,"onUpdate:modelValue":R=>V.time=R,error:e(n).bookings.$each.$response.$data[E].segments.$each.$data[I].time,label:"time",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),U.type===e(rt)&&I!==0?(y(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:R=>e(l).actionDeleteRouteLine(E,I)},[t(ge,{icon:e(je),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Wl)):ae("",!0)]),_:2},1024)]),_:2},1024)]))),256)),U.type===e(rt)?(y(),T("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:V=>e(l).actionAddRouteLine(E)},[t(ge,{icon:e(Be),class:"text-primary-500"},null,8,["icon"]),h("span",Hl,B(e(o)("add-line")),1)],8,Yl)):ae("",!0),t($,null,{default:d(()=>[t(_,{"col-class":"w-full"},{default:d(()=>[t(Y,{modelValue:U.passengers,"onUpdate:modelValue":V=>U.passengers=V,options:b.value,error:e(n).bookings.$each.$response.$data[E].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),t(P,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:L},null,8,["icon-left"]),h("div",Kl,[t(P,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",Ql,[t(P,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:c[3]||(c[3]=U=>C(e(lt)))}),t(P,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(l).buttonLoading,onClick:S},null,8,["loading"])])])])}}},Xl={class:"decree-component"},Zl={class:"flex items-center justify-between mt-10"},en={class:"flex items-center gap-x-1"},tn={__name:"Decree",props:{formType:{type:String,default:z}},setup(p,{expose:a}){const r=p,o=ie(),f=se(),s=Ze(),l=Z(s.decreeRules,s.decreeModel),{t:u}=oe(),n=le(),q=de(),b=Q(!1),M=async k=>{await s.actionStepClick(f,o,k)},D=k=>{s.decreeModel.__files=[],k.forEach(m=>{s.decreeModel.__files.push(m)})},C=async()=>{var m,S,i,c;if(!await l.value.$validate()){A(null,u("fill-required-fields"),N.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(S=(m=s.model)==null?void 0:m.__curator)==null?void 0:S.user_id,s.decreeModel.journal=re.ORDERS_PROTOCOLS,s.decreeModel.company=n.currentUser.company.id,s.decreeModel.sender=(c=(i=n==null?void 0:n.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,s.decreeModel.document_type=X.DECREE,s.decreeModel.document_sub_type=ee.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,b.value=!0},L=async(k,m)=>{try{await s.actionUpdateDocument({id:m,body:{...s.decreeModel,trip_notice_id:k}}),await q.actionCountList(),A(null,u("successfully-saved"),N.SUCCESS)}catch{}},O=async()=>{var m;let k=null;r.formType===z&&o.query.notice_id?k=o.query.notice_id:r.formType===Qe&&o.params.id&&(k=o.params.id);try{await L(k,(m=s.decreeModel)==null?void 0:m.id),await f.replace({name:Ee,params:{id:k,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})}catch{}};return a({stepClick:M}),(k,m)=>{const S=Ne;return y(),T("div",Xl,[t(Se,{modelValue:e(l).content.$model,"onUpdate:modelValue":m[0]||(m[0]=i=>e(l).content.$model=i),error:e(l).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"]),h("div",Zl,[t(S,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",en,[t(S,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:m[1]||(m[1]=i=>M(e(Ke)))}),t(S,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:C})])]),t(Ce,{modelValue:b.value,"onUpdate:modelValue":m[2]||(m[2]=i=>b.value=i),"send-button-loading":e(s).buttonLoading,"onEmit:send":O,"content-classes":"p-0"},{content:d(()=>[t(e(eo),{"compose-model":{...e(s).model,bookings:e(s).booking_model.bookings,trip_plans:e(s).trip_plan_model.trip_plans,decree_content:e(s).decreeModel.content},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},on={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},ln={class:"px-6 py-4"},yr={__name:"BusinessTripForm",props:{formType:{type:String,default:z}},setup(p){const a=p,{t:r}=oe(),o=ie(),f=se(),s=le(),l=Ze();Z(l.rules,l.model),Z(l.trip_plan_rules,l.trip_plan_model),Z(l.booking_model_rules,l.booking_model),Z(l.decreeRules,l.decreeModel);const u=Q(null),n=ne(()=>a.formType===z?"create-business-trip-notice":"update-business-trip-notice"),q=ne(()=>{switch(o.query.step){case Ke:return gt;case et:return tn;case lt:return Ol;case st:return Jl;default:return gt}}),b=async L=>{var k;const O=e(u);((k=o.query)==null?void 0:k.step)!==L.value&&(await O.stepClick(L.value),L.value===et&&(await D(),await A(null,r("notice-saved-successfully"),N.SUCCESS)))},M=async()=>{o.query.step||await f.replace({query:{...o.query,step:Ke}}),l.stepperItems.forEach(L=>L.active=L.value===o.query.step)},D=async()=>{var k,m,S,i,c,g,_,w,$,P,U,E;const L=te(l.model.__approvers),O=te(l.model.__signers);if(l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.bookings=[],l.model.trip_plans=[],l.model.approvers=L,l.model.signers=O,l.model.curator=(m=(k=l.model)==null?void 0:k.__curator)==null?void 0:m.user_id,l.model.journal=re.INNER,l.model.company=(i=(S=s.currentUser)==null?void 0:S.company)==null?void 0:i.id,l.model.__groups.forEach((V,I)=>{const R=I+1;l.model.notices.push(...V.__users.map(G=>{var pe,F,H;return{start_date:V.__start_date,end_date:V.__end_date,user:G.id,company:(F=(pe=s.currentUser)==null?void 0:pe.company)==null?void 0:F.id,sender_company:(H=V.__company)==null?void 0:H.id,regions:V.__regions.map(j=>j.id),tags:V.__tags.map(j=>({id:j.id})),group_id:R,...G.business_trip_id?{id:G.business_trip_id}:{}}}))}),l.model.sender=(g=(c=s==null?void 0:s.currentUser)==null?void 0:c.top_level_department)==null?void 0:g.id,l.model.files=l.model.__files.map(V=>({id:V.id})),l.model.document_type=o.params.document_type,l.model.document_sub_type=o.params.document_sub_type,l.model.bookings=l.booking_model.bookings.map(V=>({...V,segments:V.segments.map(I=>{var R,G;return{departure_city:I.departure_city.id,arrival_city:I.arrival_city.id,departure_date:`${I.date}T${(R=I.time)==null?void 0:R.hours}:${(G=I.time)==null?void 0:G.minutes}:00+05:00`,departure_end_date:null,segment_class:I.segment_class.value}}),passengers:V.passengers.map(I=>({user:I.id}))})),l.model.trip_plans=l.trip_plan_model.trip_plans.map(V=>({users:V.users.map(I=>({id:I.id})),text:V.text})),a.formType===z&&o.query.notice_id)try{await l.actionUpdateDocument({id:o.query.notice_id,body:l.model})}catch{}else if(a.formType===z)try{const{data:V}=await l.actionCreateDocument(l.model),I={approvers:[],signers:[],curator:(w=(_=l.model)==null?void 0:_.__curator)==null?void 0:w.user_id,journal:re.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:(P=($=s==null?void 0:s.currentUser)==null?void 0:$.top_level_department)==null?void 0:P.id,document_type:X.DECREE,document_sub_type:ee.BUSINESS_TRIP_DECREE_V2,short_description:(U=l.model)==null?void 0:U.short_description,trip_notice_id:V.id,content:V.content};l.decreeModel.content=V.content;try{const R=await l.actionCreateDocument(I);l.decreeModel.id=(E=R==null?void 0:R.data)==null?void 0:E.id,await f.replace({query:{...o.query,notice_id:V.id}}),await l.actionGetDocumentDetailForUpdate(V.id)}catch{}}catch{}else if(a.formType===Qe&&o.params.id)try{await l.actionUpdateDocument({id:o.params.id,body:l.model})}catch{}},C=async()=>{try{await D(),await A(null,r("notice-saved-successfully"),N.SUCCESS)}catch{}};return Je(async()=>{await M(),a.formType===Qe?await l.actionGetDocumentDetailForUpdate(o.params.id):o.query.notice_id&&await l.actionGetDocumentDetailForUpdate(o.query.notice_id)}),Re(()=>{l.actionResetBTModel()}),(L,O)=>{const k=ke,m=gl;return y(),T("div",{class:Fe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(l).detailLoading}])},[e(l).detailLoading?(y(),K(k,{key:0})):(y(),K(e($e),{key:1,title:n.value},{content:d(()=>[h("div",on,[t(m,{items:e(l).stepperItems,"onEmit:stepClick":b},null,8,["items"])]),h("div",ln,[(y(),K(It(q.value),{"form-type":p.formType,ref_key:"childComponent",ref:u,"onEmit:onValidateAndSend":C},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},nn=ve("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:v.withMessage("Поле не должен быть пустым",x)},__curator:{required:v.withMessage("Поле не должен быть пустым",x)},__signers:{required:v.withMessage("Поле не должен быть пустым",x)},short_description:{required:v.withMessage("Поле не должен быть пустым",x)},__groups:{$each:v.forEach({__users:{required:v.withMessage("Поле не должен быть пустым",x)},__tags:{required:v.withMessage("Поле не должен быть пустым",x)},__regions:{required:v.withMessage("Поле не должен быть пустым",x)},__start_date:{required:v.withMessage("Поле не должен быть пустым",x)},__end_date:{required:v.withMessage("Поле не должен быть пустым",x)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:v.forEach({users:{required:v.withMessage("Поле не должен быть пустым",x)},text:{required:v.withMessage("Поле не должен быть пустым",x)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(p){this.model.__groups.splice(p,1)},actionDeleteWorkPlanRow(p){this.trip_plan_model.trip_plans.splice(p,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),rn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},an={class:"flex justify-between"},sn={class:"text-base text-primary-900 font-semibold mb-1"},dn=["onClick"],cn={class:"flex w-full gap-x-4"},un={class:"flex flex-col gap-y-3"},pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"flex justify-between"},_n={class:"text-base text-primary-900 font-semibold mb-1"},qn=["onClick"],fn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},bn={class:"text-base text-primary-900 font-semibold mb-2"},vr={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:z}},setup(p){const a=p,r=Q(!1),o=Q(!1),{t:f}=oe(),s=ie(),l=se(),u=le(),n=nn(),q=de();De();const b=Z(n.rules,n.model),M=Z(n.trip_plan_rules,n.trip_plan_model),D=ne(()=>a.formType===z?"create-decree":"update-decree"),C=ne(()=>{const _=new Set;return n.model.__groups.reduce((w,$)=>$.__users&&Array.isArray($.__users)?w.concat($.__users):w,[]).filter(w=>_.has(w.id)?!1:(_.add(w.id),!0))}),L=async()=>{var P,U,E,V,I,R;if(r.value=!0,!await b.value.$validate()){A(null,f("fill-required-fields"),N.WARNING);return}const w=te(n.model.__approvers),$=te(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=w,n.model.signers=$,n.model.curator=(U=(P=n.model)==null?void 0:P.__curator)==null?void 0:U.user_id,n.model.journal=re.ORDERS_PROTOCOLS,n.model.company=(V=(E=u.currentUser)==null?void 0:E.company)==null?void 0:V.id,n.model.__groups.forEach((G,pe)=>{const F=pe+1;n.model.notices.push(...G.__users.map(H=>{var j,Ge;return{start_date:G.__start_date,end_date:G.__end_date,user:H.id,company:(Ge=(j=u.currentUser)==null?void 0:j.company)==null?void 0:Ge.id,regions:G.__regions.map(Ie=>Ie.id),tags:G.__tags.map(Ie=>({id:Ie.id})),group_id:F}}))}),n.model.sender=(R=(I=u==null?void 0:u.currentUser)==null?void 0:I.top_level_department)==null?void 0:R.id,n.model.files=n.model.__files.map(G=>({id:G.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(G=>({users:G.users.map(pe=>({id:pe.id})),text:G.text})),o.value=!0},O=()=>{},k=()=>{n.actionAddGroupBlock()},m=()=>{n.actionAddWorkPlanRow(),r.value=!1},S=_=>{n.model.__files=[],_.forEach(w=>{n.model.__files.push(w)})},i=async()=>{const _=await n.actionCreateDocument(n.model);await q.actionCountList(),_?(o.value=!1,A(null,f("document-sent"),N.SUCCESS),await l.replace({name:Te,query:{document_type:s.params.document_type}})):A(null,f("error-occurred"),N.ERROR)},c=async()=>{await n.actionUpdateDocument({id:s.params.id,body:n.model}),await q.actionCountList(),A(null,f("changed"),N.SUCCESS),await l.replace({name:Ee,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},g=()=>{a.formType===z?i():c()};return(_,w)=>{const $=ke,P=ue,U=Pe,E=ge,V=it,I=ze,R=ce,G=Ne,pe=vt;return e(n).detailLoading?(y(),K($,{key:0})):(y(),T(J,{key:1},[t(e($e),{title:D.value},{content:d(()=>[t(Me,{"onEmit:preview":L,"onEmit:clearForm":O},{default:d(()=>[t(R,null,{default:d(()=>[t(P,{"col-class":"w-1/2"},{default:d(()=>[t(ye,{modelValue:e(b).__curator.$model,"onUpdate:modelValue":w[0]||(w[0]=F=>e(b).__curator.$model=F),error:e(b).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(P,{"col-class":"w-1/2"},{default:d(()=>[t(U,{modelValue:e(b).short_description.$model,"onUpdate:modelValue":w[1]||(w[1]=F=>e(b).short_description.$model=F),error:e(b).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(P,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[(y(!0),T(J,null,qe(e(n).model.__groups,(F,H)=>(y(),T("div",rn,[h("div",an,[h("span",sn,B(e(f)("group"))+"-"+B(H+1),1),H!==0?(y(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:j=>e(n).actionDeleteGroupBlock(H)},[t(E,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,dn)):ae("",!0)]),t(R,null,{default:d(()=>[t(P,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:F.__users,"onUpdate:modelValue":j=>F.__users=j,error:e(b).__groups.$each.$response.$data[H].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:d(()=>[t(V,{modelValue:F.__regions,"onUpdate:modelValue":j=>F.__regions=j,error:e(b).__groups.$each.$response.$data[H].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":r.value},{chip:d(({value:j})=>[me(B(j.name),1)]),option:d(({value:j})=>[t(e(we),{title:j.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:d(()=>[t(V,{modelValue:F.__tags,"onUpdate:modelValue":j=>F.__tags=j,error:e(b).__groups.$each.$response.$data[H].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":r.value},{chip:d(({value:j})=>[me(B(j.name),1)]),option:d(({value:j})=>[t(e(we),{title:j.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:d(()=>[h("div",cn,[t(I,{modelValue:F.__start_date,"onUpdate:modelValue":[j=>F.__start_date=j,j=>F.__start_date=e(fe)(j)],error:e(b).__groups.$each.$response.$data[H].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),t(I,{modelValue:F.__end_date,"onUpdate:modelValue":[j=>F.__end_date=j,j=>F.__end_date=e(fe)(j)],error:e(b).__groups.$each.$response.$data[H].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),t(G,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:k},null,8,["icon-left"])]),_:1})]),_:1}),h("div",un,[(y(!0),T(J,null,qe(e(n).trip_plan_model.trip_plans,(F,H)=>(y(),T("div",pn,[h("div",mn,[h("span",_n,B(e(f)("plan"))+"-"+B(H+1),1),H!==0?(y(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:j=>e(n).actionDeleteWorkPlanRow(H)},[t(E,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,qn)):ae("",!0)]),t(R,null,{default:d(()=>[t(P,{"col-class":"w-1/2"},{default:d(()=>[t(pe,{modelValue:F.text,"onUpdate:modelValue":j=>F.text=j,error:e(M).trip_plans.$each.$response.$data[H].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:F.users,"onUpdate:modelValue":j=>F.users=j,options:C.value,error:e(M).trip_plans.$each.$response.$data[H].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),t(G,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:m},null,8,["icon-left"]),t(R,null,{default:d(()=>[t(P,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":w[2]||(w[2]=F=>e(n).model.__approvers=F),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(P,{"col-class":"w-1/2"},{default:d(()=>[t(Y,{modelValue:e(b).__signers.$model,"onUpdate:modelValue":w[3]||(w[3]=F=>e(b).__signers.$model=F),error:e(b).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(P,{"col-class":"w-full"},{default:d(()=>[h("div",fn,[h("div",bn,B(e(f)("decree")),1),t(Se,{modelValue:e(b).content.$model,"onUpdate:modelValue":w[4]||(w[4]=F=>e(b).content.$model=F),error:e(b).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":S},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:o.value,"onUpdate:modelValue":w[5]||(w[5]=F=>o.value=F),"send-button-loading":e(n).buttonLoading,"onEmit:send":g},{content:d(()=>[t(e(ht),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{_r as _,br as a,gr as b,wr as c,yr as d,vr as e,qr as f,fr as g,hr as h};
