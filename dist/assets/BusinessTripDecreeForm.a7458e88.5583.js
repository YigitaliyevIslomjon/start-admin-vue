import{_ as ce}from"./BaseRow.67b29117.5583.js";import{_ as Pe}from"./BaseInput.ec8afce1.5583.js";import{_ as ue}from"./BaseCol.2a709b0c.5583.js";import{v as Q,b9 as oo,a1 as to,o as h,c as R,i as o,z as d,h as e,b6 as He,d as ne,dr as Oe,a as w,t as I,F as J,e as qe,a3 as me,g as ae,f as K,B as Eo,dw as So,bh as Co,n as Fe,r as ko,G as Ne,as as ve,cK as X,cL as ee,ci as re,u as te,b as se,ao as ie,bc as Re,a5 as j,ac as ke,a8 as Lo,cW as Je,dx as Ro,_ as ge,dy as Do,dz as po,dA as To,dB as mo,dC as _o,dD as qo,b5 as Mo,br as je,b_ as Be,dE as Oo,dp as Po,E as No}from"./index.fb7c31aa.9830.js";import{c as y,r as k,u as Z}from"./index.60536893.5583.js";import{_ as Ao,a as Io}from"./BranchMultiSelect.69557052.5583.js";import{j as Fo,k as jo,l as Bo,_ as $e,a as zo,h as Go,f as Wo,b as Yo,c as Ho,d as Ko,e as $o,i as Qo,m as Jo,g as Xo}from"./BasePOA.62664b49.5583.js";import"./BaseTabMenu.d095511d.5583.js";import"./dialog.esm.19b411c3.5583.js";import"./tabpanel.esm.577714a5.5583.js";import"./FileSaver.min.2f88ec2e.5583.js";import{x as fo,s as he,v as G,y as Zo,z as Ae,A as oe,B as Le,C as bo,D as no,E as We,o as go}from"./index.d268f4c2.5583.js";import"./BaseTabView.8e7e960b.5583.js";import"./FileTabs.d832f8a7.5583.js";import{_ as W}from"./UserMultiSelect.37b4d0b6.5583.js";import{c as et,u as le,w as xe,d as B}from"./axios.config.2251048a.5583.js";import{u as De}from"./common.3c619cee.5583.js";import{u as de}from"./count.store.62202a8a.5583.js";import{u as ao,a as Ve,b as be,c as Ue,d as ot,f as tt}from"./index.store.50cc8d73.5583.js";import{j as wo,k as Te,i as Ee,c as _e,b as Ye,l as Ke,m as lo,n as so,o as eo,a as lt,B as xo,M as ro,O as nt,T as rt,C as at,P as st,p as it}from"./index.bd76a17d.5583.js";import{F,a as Qe}from"./constants.63630c17.5583.js";import{_ as Xe}from"./BaseDropdown.c792dd70.5583.js";import{_ as ze}from"./BaseCalendar.8da58ded.5583.js";import{_ as io}from"./BaseMultiSelect.e37e2edf.5583.js";import{f as dt,a as fe}from"./formatDate.b2f15b97.5583.js";import{Q as ho}from"./qrcode.vue.esm.1386caf1.5583.js";import{_ as Vo}from"./ShortDescription.35c93cb0.5583.js";import"./dayjs.min.70973e19.5583.js";/* empty css                                                                                    */import{c as ct}from"./Dropdown.8d25c5db.5583.js";import"./menu.esm.733eca7d.5583.js";/* empty css                                                      */import"./avatar.esm.aac3bdc5.5583.js";/* empty css                                                      *//* empty css                                                            */import"./accordiontab.esm.3e43973d.5583.js";import"./common.store.2f570967.5583.js";import{_ as we}from"./WithRadio.313a98d1.5583.js";import"./radiobutton.esm.057a1fb3.5583.js";import"./checkbox.esm.1a4dc87f.5583.js";import"./index.es6.f9050ba3.5583.js";import{_ as yo}from"./BaseBrickRadio.15d8f586.5583.js";import{_ as ut}from"./BaseLabel.d1d41899.5583.js";import{K as pt}from"./main.308c4186.5583.js";import{_ as mt}from"./WithSelectable.f649f642.5583.js";import{_ as _t}from"./BaseBrickTab.d2c7e45b.5583.js";import{_ as qt}from"./BaseFileUpload.f9d9fd9b.5583.js";import{_ as ft}from"./BaseFroalaEditor.9c6e8cc3.5583.js";import{_ as bt}from"./BaseDialog.557bca88.5583.js";const gt={class:"user-select"},ye={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(p,{emit:a}){const r=p,t=Q([]),f=oo(r,"modelValue"),s=async l=>{let{data:u}=await et.get(`${r.apiUrl}/`,l);u.hasOwnProperty("results")?t.value=u.results:t.value=u};return to(async()=>{await s(r.apiParams)}),(l,u)=>(h(),R("div",gt,[o(Xe,{modelValue:e(f),"onUpdate:modelValue":u[0]||(u[0]=n=>He(f)?f.value=n:null),options:t.value,"onUpdate:options":u[1]||(u[1]=n=>t.value=n),error:r.error,"api-url":r.apiUrl,"api-params":r.apiParams,"option-label":"full_name",label:r.label,placeholder:r.placeholder,required:r.required,searchable:"","onEmit:change":u[2]||(u[2]=n=>a("emit:change",n))},{option:d(({option:n})=>[o(e(mt),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},wt={class:"business-trip-decree-template-view letter-template"},ht={class:"flex flex-col text-sm font-medium mt-4"},yt=w("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),vt=["innerHTML"],kt=["innerHTML"],$t={class:"employees-table text-sm mt-4"},xt={class:"w-full"},Vt=w("tr",{class:"text-center"},[w("td",{class:"border-2 p-1"},"№"),w("td",{class:"border-2 p-1"},"F.I.SH"),w("td",{class:"border-2 p-1"},"Departament va lavozim"),w("td",{class:"border-2 p-1"},"Yo'nalish"),w("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Ut={class:"text-center"},Et={class:"border-2 p-1"},St={class:"border-2 p-1"},Ct={class:"border-2 p-1"},Lt=w("br",null,null,-1),Rt={class:"border-2 p-1"},Dt={class:"flex flex-col gap-y-1"},Tt={key:0},Mt={class:"border-2 p-1 w-[100px]"},Ot=w("br",null,null,-1),Pt={class:"indent-8 mt-2 text-sm text-justify"},Nt=w("div",null,"xizmat safariga yuborilsin.",-1),At=w("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),It=w("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),Ft=w("div",null," Buxgalteriya hisobi va moliyaviy menejment departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),jt={key:0},Bt=w("span",{class:"font-semibold"},"Asos: ",-1),zt=w("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),Gt=w("div",null," O‘zR MKning 287-moddasi; ",-1),Wt=w("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),Yt={class:"mt-6 pb-2 px-4"},Ht={class:"text-sm font-semibold block"},Kt={class:"text-sm font-semibold block"},Qt={class:"text-sm font-semibold block"},Jt={class:"text-sm font-semibold block"},Xt={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(p){const a=p,r=ao(),t=ne(()=>{var u;return a.preview?le().currentUser:(u=a.composeModel)==null?void 0:u.author}),f=ne(()=>{var u,n,q;return a.preview?(u=a.composeModel)==null?void 0:u.__employees.map(b=>({empFullName:b.full_name,empDepName:b.top_level_department.name,empPositionName:b.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(q=(n=a.composeModel)==null?void 0:n.notices)==null?void 0:q.map(b=>({empFullName:b.user.full_name,empDepName:b.user.top_level_department.name,empPositionName:b.user.position.name,destinations:b.destinations,startDate:b.start_date,endDate:b.end_date}))}),s=ne(()=>{var n,q,b;if(a.preview)return[(n=a.composeModel)==null?void 0:n.__curator];const u=(q=a.composeModel)==null?void 0:q.signers.find(M=>M.type===Oe.BASIC_SIGNER);return u?[u]:[(b=a.composeModel)==null?void 0:b.curator].filter(Boolean)}),l=ne(()=>{var u,n;return a.preview?(u=a.composeModel)==null?void 0:u.__signers:(n=a.composeModel)==null?void 0:n.signers.filter(q=>q.type===Oe.SIGNER)});return(u,n)=>{var M,L,C,T,z,$,m,E;const q=ue,b=ce;return h(),R("div",wt,[o(e(Fo)),o(e(jo),{"dep-name":(L=(M=t.value)==null?void 0:M.top_level_department)==null?void 0:L.name},null,8,["dep-name"]),w("div",ht,[w("span",null," № "+I((C=a.composeModel)==null?void 0:C.register_number),1),w("span",null,I(((T=a.composeModel)==null?void 0:T.register_date)&&e(dt)((z=a.composeModel)==null?void 0:z.register_date)),1)]),yt,e(r).historyShow?(h(),R("div",{key:0,class:"text-justify",innerHTML:e(r).historyContent},null,8,vt)):(h(),R("div",{key:1,class:"text-justify",innerHTML:($=a.composeModel)==null?void 0:$.content},null,8,kt)),w("div",$t,[w("table",xt,[Vt,f.value&&f.value.length?(h(!0),R(J,{key:0},qe(f.value,(i,c)=>(h(),R("tr",Ut,[w("td",Et,I(c+1),1),w("td",St,I(i.empFullName),1),w("td",Ct,[me(I(i.empDepName)+" ",1),Lt,me(" "+I(i.empPositionName),1)]),w("td",Rt,[w("div",Dt,[(h(!0),R(J,null,qe(i.destinations,(g,_)=>(h(),R("span",null,[me(I(g.name)+" ",1),_!==i.destinations.length-1?(h(),R("span",Tt,",")):ae("",!0)]))),256))])]),w("td",Mt,[me(I(i.startDate)+" ",1),Ot,me(" "+I(i.endDate),1)])]))),256)):ae("",!0)])]),w("div",Pt,[Nt,At,It,Ft,(m=p.composeModel)!=null&&m.trip_notice_register_number?(h(),R("div",jt,[Bt,me(I((E=p.composeModel)==null?void 0:E.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):ae("",!0),zt,Gt,Wt]),w("div",Yt,[(h(!0),R(J,null,qe(s.value,i=>(h(),K(b,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[o(q,{"col-class":"w-1/3"},{default:d(()=>[w("span",Ht,I(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(q,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?(h(),K(ho,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(q,{"col-class":"w-1/3"},{default:d(()=>[w("span",Kt,I(e(fo)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(h(!0),R(J,null,qe(l.value,i=>(h(),K(b,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[o(q,{"col-class":"w-1/3"},{default:d(()=>[w("span",Qt,I(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(q,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?(h(),K(ho,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(q,{"col-class":"w-1/3"},{default:d(()=>[w("span",Jt,I(e(fo)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),o(e(Bo),{"compose-model":a.composeModel,author:t.value},null,8,["compose-model","author"])])}}};var Zt=`
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
`,el={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Eo.extend({name:"editor",css:Zt,classes:el});(function(){try{return window.Quill}catch{return null}})();const Se={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(p){return["froala","tiny"].includes(p)}}},emits:["update:modelValue","emit:fileUpload"],setup(p,{emit:a}){const r=p,t=oo(r,"modelValue"),f=Q([{title:"text",slot:"editor",icon:So},{title:"file",slot:"file",icon:Co}]);return(s,l)=>(h(),K(_t,{"tab-panel-list":f.value,"panel-container-class":"px-0"},{editor:d(()=>[p.editor==="froala"?(h(),K(ft,{key:0,modelValue:e(t),"onUpdate:modelValue":l[0]||(l[0]=u=>He(t)?t.value=u:null)},null,8,["modelValue"])):(h(),K(ct,{key:1,modelValue:e(t),"onUpdate:modelValue":l[1]||(l[1]=u=>He(t)?t.value=u:null)},null,8,["modelValue"]))]),file:d(()=>[w("div",{class:Fe(r.fileUploadContainerClasses)},[o(qt,{files:r.files,"onEmit:fileUpload":l[2]||(l[2]=u=>a("emit:fileUpload",u))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ol={class:"flex flex-col justify-between h-full"},tl={class:"px-6 py-4 overflow-y-auto"},ll={class:"actions p-6"},Me={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(p,{emit:a}){return(r,t)=>{const f=Ne;return h(),R("div",ol,[w("div",tl,[ko(r.$slots,"default")]),w("div",ll,[o(f,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:t[0]||(t[0]=s=>a("emit:clearForm"))}),o(f,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:t[1]||(t[1]=s=>a("emit:preview"))})])])}}},nl=ve("sd-stores-inner",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=le().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,document_type:X.INNER,document_sub_type:ee.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:re.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:y.withMessage("Поле не должен быть пустым",k)},content:{required:y.withMessage("Поле не должен быть пустым",k)},__departments:{required:y.withMessage("Поле не должен быть пустым",k)},__approvers:{},__signers:{required:y.withMessage("Поле не должен быть пустым",k)}}}},actions:{async actionCreateDocument(p){let a={...p,type:wo,sub_type:wo};this.buttonLoading=!0;const{response:r,error:t}=await xe(Ue,a);return r?(this.buttonLoading=!1,Promise.resolve(r)):Promise.reject(t)},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__approvers=await G(a.approvers),this.model.__signers=await G(a.signers),this.model.__departments=await Zo(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),rl={class:"font-semibold text-xl"},Ce={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(p,{emit:a}){const t=oo(p,"modelValue"),{t:f}=te();return(s,l)=>{const u=Ne,n=bt;return h(),K(n,{modelValue:e(t),"onUpdate:modelValue":l[1]||(l[1]=q=>He(t)?t.value=q:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[w("span",rl,I(e(f)("preview")),1)]),content:d(()=>[ko(s.$slots,"content")]),footer:d(()=>[o(u,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(u,{label:p.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:p.sendButtonLoading,onClick:l[0]||(l[0]=q=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},cr={__name:"InnerForm",props:{formType:{type:String,default:F}},setup(p){const a=p,r=le(),t=nl();De();const f=de(),s=Q(!1);Q(null);const{t:l}=te(),u=se(),n=ie(),q=Z(t.rules,t.model),b=async()=>{await q.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.departments=[],t.model.departments=t.model.__departments.map(m=>m.id),t.model.files=[],t.model.files=t.model.__files.map(m=>({id:m.id})),t.model.journal=re.INNER,t.model.sender=r.currentUser.top_level_department.id,t.model.approvers=oe(t.model.__approvers),t.model.signers=oe(t.model.__signers),t.model.document_type=n.params.document_type,t.model.document_sub_type=n.params.document_sub_type,t.model.receiver&&delete t.model.receiver)},M=()=>{a.formType===F?L():C()},L=async()=>{const $=await t.actionCreateDocument(t.model);await f.actionCountList(),$?(s.value=!1,B(null,l("document-sent"),j.SUCCESS),await u.replace({name:Te,query:{document_type:X.INNER}})):B(null,l("error-occurred"),j.ERROR)},C=async()=>{await t.actionUpdateDocument({id:n.params.id,body:t.model}),await f.actionCountList(),B(null,l("document-sent"),j.SUCCESS),await u.replace({name:Ee,params:{id:n.params.id,document_type:X.INNER,document_sub_type:ee.SERVICE_LETTER}})},T=()=>{console.log("Clear Form")},z=$=>{t.model.__files=[],$.forEach(m=>{t.model.__files.push(m)})};return to(async()=>{n.params.id&&await t.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Ae(t.model)}),($,m)=>{const E=ke,i=ue,c=Pe,g=ce;return e(t).detailLoading?(h(),K(E,{key:0})):(h(),R(J,{key:1},[o(e($e),{title:a.formType===e(F)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[o(Me,{"onEmit:preview":b,"onEmit:clearForm":T},{default:d(()=>[o(g,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(Ao,{modelValue:e(q).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=_=>e(q).__departments.$model=_),error:e(q).__departments},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(c,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=_=>e(q).short_description.$model=_),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=_=>e(q).__approvers.$model=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=_=>e(q).__signers.$model=_),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=_=>e(q).content.$model=_),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=_=>s.value=_),"send-button-loading":e(t).buttonLoading,"onEmit:send":M},{content:d(()=>{var _,v;return[o(zo,{"compose-model":{...e(t).model,signers:e(t).model.__signers,approvers:e(t).model.__approvers,author:e(t).model.__signers[0],sender:{name:(v=(_=e(r).currentUser)==null?void 0:_.top_level_department)==null?void 0:v.name},receiver:{departments:e(t).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},al=ve("sd-store-application",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=le().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__approvers:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{}}}},actions:{async actionCreateDocument(p){let a={...p};this.buttonLoading=!0;const{response:r,error:t}=await xe(Ue,a);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__approvers=await G(a.approvers),this.model.__signers=await G(a.signers.filter(r=>r.type===Oe.SIGNER)),this.model.__curator=await Le([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Uo=ve("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:le().currentUser.company.id,curator:null,document_type:X.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:re.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:y.withMessage("Поле не должен быть пустым",k)},register_date:{required:y.withMessage("Поле не должен быть пустым",k)},content:{required:y.withMessage("Поле не должен быть пустым",k)},__negotiators:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__signers=await G(a.signers.filter(r=>r.type!==Oe.NEGOTIATOR)),this.model.__negotiators=await G(a.signers.filter(r=>r.type===Oe.NEGOTIATOR)),this.model.__approvers=await G(a.approvers),this.model.__curator=await Le([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),ur={__name:"ApplicationForm",props:{formType:{type:String,default:F}},setup(p){const a=p,r=le(),t=al();De();const f=de();Uo();const s=Q(!1);Q(null);const{t:l}=te(),u=se(),n=ie(),q=Z(t.rules,t.model),b=async()=>{var m,E,i,c,g;await q.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.signers=[{user:(m=r==null?void 0:r.currentUser)==null?void 0:m.id}],t.model.sender=(i=(E=r==null?void 0:r.currentUser)==null?void 0:E.top_level_department)==null?void 0:i.id,t.model.curator=(g=(c=t==null?void 0:t.model)==null?void 0:c.__curator)==null?void 0:g.user_id,t.model.journal=re.APPLICATION,t.model.document_type=n.params.document_type,t.model.document_sub_type=n.params.document_sub_type,t.model.approvers=oe(t.model.__approvers))},M=async()=>{},L=()=>{a.formType===F?C():T()},C=async()=>{const $=await t.actionCreateDocument(t.model);await f.actionCountList(),$?(s.value=!1,B(null,l("document-sent"),j.SUCCESS),await u.replace({name:Te,query:{document_type:X.APPLICATION}})):B(null,l("error-occurred"),j.ERROR)},T=async()=>{await t.actionUpdateDocument({id:n.params.id,body:t.model}),await f.actionCountList(),B(null,l("document-sent"),j.SUCCESS),await u.replace({name:Ee,params:{id:n.params.id,document_type:X.APPLICATION,document_sub_type:ee.LABOR_LEAVE}})},z=$=>{t.model.__files=[],$.forEach(m=>{t.model.__files.push(m)})};return to(async()=>{n.params.id&&await t.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Ae(t.model)}),($,m)=>{const E=ke,i=ue,c=ce;return e(t).detailLoading?(h(),K(E,{key:0})):(h(),R(J,{key:1},[o(e($e),{title:a.formType===e(F)?"create-sd-application":"update-sd-application"},{content:d(()=>[o(Me,{"onEmit:preview":b,"onEmit:clearForm":M},{default:d(()=>[o(c,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=g=>e(q).__curator.$model=g),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[1]||(m[1]=g=>e(q).__approvers.$model=g),error:e(q).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[2]||(m[2]=g=>e(q).__signers.$model=g),disabled:"",label:"signers",placeholder:e(r).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[3]||(m[3]=g=>e(q).content.$model=g),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=g=>s.value=g),"send-button-loading":e(t).buttonLoading,"onEmit:send":L},{content:d(()=>[o(Go,{"compose-model":{...e(t).model,curator:e(t).model.__curator,author:a.formType===e(F)?e(r).currentUser:e(t).model.__signers[0].user,signers:a.formType===e(F)?[e(r).currentUser]:e(t).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},sl=ve("sd-notice-store",{state:()=>(le(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:X.NOTICE,document_sub_type:ee.BUSINESS_TRIP,journal:re.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",k)},start_date:{required:y.withMessage("Поле не должен быть пустым",k)},route:{required:y.withMessage("Поле не должен быть пустым",k)},content:{required:y.withMessage("Поле не должен быть пустым",k)},__companies:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__employees:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},__tags:{required:y.withMessage("Поле не должен быть пустым",k)},short_description:{required:y.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,a=!1){try{this.detailLoading=!0;const{data:r}=await be(p);he(this.model,r),this.model.__companies=[],this.model.__curator=await Le([],r.curator.id,!1),this.model.__employees=await G(r.notices),a?(this.model.__approvers=await G(r.approvers.filter(t=>{var f,s;return((f=t==null?void 0:t.user)==null?void 0:f.id)!==((s=r==null?void 0:r.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await G(r.approvers),this.model.__signers=await G(r.signers),this.model.__companies=await bo(r.notices[0].destinations),this.model.__tags=await no(r.tags),this.model.start_date=r.notices[0].start_date,this.model.end_date=r.notices[0].end_date,this.model.__tags=r.tags,this.model.route=r.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(p,a){try{this.detailLoading=!0;const{data:r}=await be(p),t=await be(a);he(this.model,r),this.model.__companies=[],this.model.__curator=await Le([],r.curator.id,!1),this.model.__employees=await G(t.data.notices),this.model.__approvers=await G(r.approvers),this.model.__signers=await G(r.signers),this.model.__companies=await bo(t.data.notices[0].destinations),this.model.__tags=await no(r.tags),this.model.start_date=t.data.notices[0].start_date,this.model.end_date=t.data.notices[0].end_date,this.model.__tags=r.tags,this.model.route=t.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),il={class:"flex w-full gap-x-4"},pr={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:F}},setup(p){const a=p,{t:r}=te(),t=ie(),f=se(),s=le(),l=sl(),u=de();De();const n=Z(l.rules,l.model),q=Q(!1),b=ne(()=>{const i=a.formType===F,c=t.params.document_sub_type;return c===ee.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":c===ee.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),M=ne(()=>{var i,c;return t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((i=t==null?void 0:t.query)==null?void 0:i.compose_id)&&((c=t==null?void 0:t.query)==null?void 0:c.document_sub_type)===ee.BUSINESS_TRIP}),L=ne(()=>{var i;return!!(t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((i=l==null?void 0:l.model)!=null&&i.trip_notice_id))});Lo(()=>l.model.__tags,i=>{if(a.formType===F)if(i&&i.length){let c=`${i.map(g=>g.name_uz).join(", ")} yuzasidan`;l.model.short_description=c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()}else l.model.short_description=null});const C=async()=>{var c,g,_,v,x;await n.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.approvers=oe(l.model.__approvers),l.model.signers=oe(l.model.__signers),l.model.curator=(g=(c=l==null?void 0:l.model)==null?void 0:c.__curator)==null?void 0:g.user_id,l.model.journal=t.params.document_type===X.DECREE||t.params.document_type===X.ORDER?re.ORDERS_PROTOCOLS:re.INNER,l.model.company=s.currentUser.company.id,l.model.notices=l.model.__employees.map(A=>({start_date:l.model.start_date,end_date:l.model.end_date,user:A.id,route:l.model.route,companies:l.model.__companies.map(S=>S.id)})),l.model.sender=(v=(_=s==null?void 0:s.currentUser)==null?void 0:_.top_level_department)==null?void 0:v.id,l.model.tags=l.model.__tags.map(A=>({id:A.id})),l.model.files=l.model.__files.map(A=>({id:A.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,M.value&&(l.model.trip_notice_id=(x=t==null?void 0:t.query)==null?void 0:x.compose_id),q.value=!0)},T=()=>{},z=i=>{l.model.__files=[],i.forEach(c=>{l.model.__files.push(c)})},$=async()=>{M.value&&(l.model.notices=[]);const i=await l.actionCreateDocument(l.model);await u.actionCountList(),i?(q.value=!1,B(null,r("document-sent"),j.SUCCESS),await f.replace({name:Te,query:{document_type:t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?X.DECREE:t.params.document_sub_type===ee.BUSINESS_TRIP_ORDER_LOCAL?X.ORDER:X.NOTICE}})):B(null,r("error-occurred"),j.ERROR)},m=async()=>{(M.value||L.value)&&(l.model.notices=[]),await l.actionUpdateDocument({id:t.params.id,body:l.model}),await u.actionCountList(),B(null,r("changed"),j.SUCCESS),await f.replace({name:Ee,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},E=()=>{a.formType===F?$():m()};return Je(async()=>{t.params.id&&t.query.trip_notice_id&&t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?await l.actionGetDocumentDetailForUpdateForCustomUse(t.params.id,t.query.trip_notice_id):t.params.id?await l.actionGetDocumentDetailForUpdate(t.params.id):M.value&&await l.actionGetDocumentDetailForUpdate(t.query.compose_id,!0)}),Re(()=>{Ae(l.model)}),(i,c)=>{const g=ke,_=ue,v=ze,x=Xe,A=Pe,S=ce;return e(l).detailLoading?(h(),K(g,{key:0})):(h(),R(J,{key:1},[o(e($e),{title:b.value},{content:d(()=>[o(Me,{"onEmit:preview":C,"onEmit:clearForm":T},{default:d(()=>[o(S,null,{default:d(()=>[o(_,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=V=>e(n).__curator.$model=V),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":c[1]||(c[1]=V=>e(n).__employees.$model=V),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:M.value||L.value},null,8,["modelValue","error","disabled"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(Io,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":c[2]||(c[2]=V=>e(n).__companies.$model=V),error:e(n).__companies,"text-truncate":"",disabled:M.value||L.value},null,8,["modelValue","error","disabled"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(io,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":c[3]||(c[3]=V=>e(n).__tags.$model=V),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:V})=>[me(I(V.name),1)]),option:d(({value:V})=>[o(e(we),{title:V.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[w("div",il,[o(v,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[c[4]||(c[4]=V=>e(n).start_date.$model=V),c[5]||(c[5]=V=>e(n).start_date.$model=e(fe)(V))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:M.value||L.value},null,8,["modelValue","error","min-date","disabled"]),o(v,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[c[6]||(c[6]=V=>e(n).end_date.$model=V),c[7]||(c[7]=V=>e(n).end_date.$model=e(fe)(V))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:M.value||L.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(x,{modelValue:e(n).route.$model,"onUpdate:modelValue":c[8]||(c[8]=V=>e(n).route.$model=V),error:e(n).route,options:e(Ro),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:M.value||L.value},null,8,["modelValue","error","options","disabled"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":c[9]||(c[9]=V=>e(l).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":c[10]||(c[10]=V=>e(n).__signers.$model=V),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(A,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":c[11]||(c[11]=V=>e(n).short_description.$model=V),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(_,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(n).content.$model,"onUpdate:modelValue":c[12]||(c[12]=V=>e(n).content.$model=V),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:q.value,"onUpdate:modelValue":c[13]||(c[13]=V=>q.value=V),"send-button-loading":e(l).buttonLoading,"onEmit:send":E},{content:d(()=>[e(t).params.document_sub_type===e(ee).BUSINESS_TRIP_DECREE_LOCAL?(h(),K(e(Xt),{key:0,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):e(t).params.document_sub_type===e(ee).BUSINESS_TRIP_ORDER_LOCAL?(h(),K(e(Wo),{key:1,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):(h(),K(e(Yo),{key:2,"compose-model":e(l).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},mr={__name:"OrderForm",props:{formType:{type:String,default:F}},setup(p){const a=p,r=Uo(),t=de(),f=le(),s=ie(),l=se(),u=Z(r.rules,r.model),{t:n}=te(),q=Q(!1),b=async()=>{var m,E,i,c;await u.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=oe(r.model.__approvers),r.model.curator=(E=(m=r==null?void 0:r.model)==null?void 0:m.__curator)==null?void 0:E.user_id,r.model.sender=(c=(i=f==null?void 0:f.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,r.model.files=r.model.__files.map(g=>({id:g.id})),r.model.document_type=s.params.document_type,r.model.document_sub_type=s.params.document_sub_type,r.model.journal=re.ORDERS_PROTOCOLS,r.model.register_date=fe(r.model.register_date),r.model.__negotiators.forEach(g=>{r.model.signers.push(g.hasOwnProperty("user")?{id:g.id,user:g.user.id,type:Oe.NEGOTIATOR}:{user:g.id,type:Oe.NEGOTIATOR})}),s.query.compose_id&&(r.model.trip_notice_id=s.query.compose_id),q.value=!0)},M=()=>{},L=async()=>{try{const $=await r.actionCreateDocument(r.model);await t.actionCountList(),$&&(q.value=!1,B(null,n("document-sent"),j.SUCCESS),await l.replace({name:Te,query:{document_type:X.ORDER}}))}catch{B(null,n("error-occurred"),j.ERROR)}},C=async()=>{try{const $=await r.actionUpdateDocument({id:s.params.id,body:r.model});await t.actionCountList(),B(null,n("changed"),j.SUCCESS),await l.replace({name:Ee,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{B(null,n("error-occurred"),j.ERROR)}},T=()=>{a.formType===F?L():C()},z=$=>{r.model.__files=[],$.forEach(m=>{r.model.__files.push(m)})};return to(async()=>{s.params.id&&await r.actionGetDocumentDetailForUpdate(s.params.id)}),Re(()=>{Ae(r.model)}),($,m)=>{const E=ke,i=ue,c=Pe,g=ze,_=ce;return e(r).detailLoading?(h(),K(E,{key:0})):(h(),R(J,{key:1},[o(e($e),{title:a.formType===e(F)?"create-order":"update-order"},{content:d(()=>[o(Me,{"onEmit:preview":b,"onEmit:clearForm":M},{default:d(()=>[o(_,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=v=>e(u).__curator.$model=v),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(c,{modelValue:e(u).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=v=>e(u).register_number.$model=v),error:e(u).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(g,{modelValue:e(u).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=v=>e(u).register_date.$model=v),error:e(u).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=v=>e(r).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(u).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=v=>e(u).__negotiators.$model=v),error:e(u).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(u).content.$model,"onUpdate:modelValue":m[5]||(m[5]=v=>e(u).content.$model=v),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:q.value,"onUpdate:modelValue":m[6]||(m[6]=v=>q.value=v),"send-button-loading":e(r).buttonLoading,"onEmit:send":T},{content:d(()=>[o(e(Ho),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},dl=ve("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},short_description:{required:y.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await G(a.approvers),this.model.__signers=await G(a.signers)}catch{}finally{this.detailLoading=!1}}}}),_r={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:F}},setup(p){const a=p,{t:r}=te(),t=ie(),f=se(),s=le(),l=dl(),u=de();De();const n=Q(!1),q=Z(l.rules,l.model),b=async()=>{var m,E,i,c;await q.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=oe(l.model.__approvers),l.model.signers=oe(l.model.__signers),l.model.curator=(E=(m=l==null?void 0:l.model)==null?void 0:m.__curator)==null?void 0:E.user_id,l.model.journal=re.INNER,l.model.company=s.currentUser.company.id,l.model.sender=(c=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,l.model.files=l.model.__files.map(g=>({id:g.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,n.value=!0)},M=()=>{},L=$=>{l.model.__files=[],$.forEach(m=>{l.model.__files.push(m)})},C=async()=>{const $=await l.actionCreateDocument(l.model);await u.actionCountList(),$?(n.value=!1,B(null,r("document-sent"),j.SUCCESS),await f.replace({name:Te,query:{document_type:X.NOTICE}})):B(null,r("error-occurred"),j.ERROR)},T=async()=>{await l.actionUpdateDocument({id:t.params.id,body:l.model}),await u.actionCountList(),B(null,r("changed"),j.SUCCESS),await f.replace({name:Ee,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},z=()=>{a.formType===F?C():T()};return Je(async()=>{t.params.id&&await l.actionGetDocumentDetailForUpdate(t.params.id)}),Re(()=>{Ae(l.model)}),($,m)=>{const E=ke,i=ue,c=Pe,g=ce;return e(l).detailLoading?(h(),K(E,{key:0})):(h(),R(J,{key:1},[o(e($e),{title:a.formType===e(F)?"create-notice":"update-notice"},{content:d(()=>[o(Me,{"onEmit:preview":b,"onEmit:clearForm":M},{default:d(()=>[o(g,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=_=>e(q).__curator.$model=_),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(c,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=_=>e(q).short_description.$model=_),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=_=>e(l).model.__approvers=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=_=>e(q).__signers.$model=_),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=_=>e(q).content.$model=_),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:n.value,"onUpdate:modelValue":m[5]||(m[5]=_=>n.value=_),"send-button-loading":e(l).buttonLoading,"onEmit:send":z},{content:d(()=>[o(e(Ko),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},cl=ve("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},short_description:{required:y.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(p){const a={...p};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:r,error:t}=await xe(Ue,a);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:a}){const r={...a};delete r.bookings,delete r.notices,delete r.trip_plans;try{this.buttonLoading=!0;const{data:t}=await Ve({id:p,body:r});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,a){try{this.detailLoading=!0;const{data:r}=await be(p);he(this.model,r),this.model.__curator=await Le([],r.curator.id,!1),this.model.__approvers=await G(r.approvers),this.model.__signers=await G(r.signers)}catch{}finally{this.detailLoading=!1}}}}),qr={__name:"DecreeForm",props:{formType:{type:String,default:F}},setup(p){const a=p,{t:r}=te(),t=ie(),f=se(),s=le(),l=de();De();const u=Q(!1),n=cl(),q=ao(),b=Z(n.rules,n.model),M=async()=>{var i,c,g,_;await b.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=oe(n.model.__approvers),n.model.signers=oe(n.model.__signers),n.model.curator=(c=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:c.user_id,n.model.journal=re.ORDERS_PROTOCOLS,n.model.company=s.currentUser.company.id,n.model.sender=(_=(g=s==null?void 0:s.currentUser)==null?void 0:g.top_level_department)==null?void 0:_.id,n.model.files=n.model.__files.map(v=>({id:v.id})),n.model.document_type=t.params.document_type,n.model.document_sub_type=t.params.document_sub_type,t.query.compose_id&&(n.model.trip_notice_id=t.query.compose_id),u.value=!0)},L=()=>{},C=E=>{n.model.__files=[],E.forEach(i=>{n.model.__files.push(i)})},T=async()=>{const E=await n.actionCreateDocument(n.model);await l.actionCountList(),E?(u.value=!1,B(null,r("document-sent"),j.SUCCESS),await f.replace({name:Te,query:{document_type:t.params.document_type}})):B(null,r("error-occurred"),j.ERROR)},z=async()=>{await n.actionUpdateDocument({id:t.params.id,body:n.model}),await l.actionCountList(),B(null,r("changed"),j.SUCCESS),await f.replace({name:Ee,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},$=()=>{a.formType===F?T():z()},m=async E=>{const{data:i}=await q.actionGetDocumentDetail(E);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return Je(async()=>{a.formType===F&&t.query.compose_id?await m(t.query.compose_id):a.formType===Qe&&t.query.trip_notice_id&&t.params.id?(await n.actionGetDocumentDetailForUpdate(t.params.id,null),await m(t.query.trip_notice_id)):a.formType===Qe&&t.params.id&&await n.actionGetDocumentDetailForUpdate(t.params.id,null)}),Re(()=>{Ae(n.model)}),(E,i)=>{const c=ke,g=ue,_=Pe,v=ce;return e(n).detailLoading?(h(),K(c,{key:0})):(h(),R(J,{key:1},[o(e($e),{title:a.formType===e(F)?"create-decree":"update-decree"},{content:d(()=>[o(Me,{"onEmit:preview":M,"onEmit:clearForm":L},{default:d(()=>[o(v,null,{default:d(()=>[o(g,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(b).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=x=>e(b).__curator.$model=x),error:e(b).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:d(()=>[o(_,{modelValue:e(b).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=x=>e(b).short_description.$model=x),error:e(b).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=x=>e(n).model.__approvers=x),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(b).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=x=>e(b).__signers.$model=x),error:e(b).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(g,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(b).content.$model,"onUpdate:modelValue":i[4]||(i[4]=x=>e(b).content.$model=x),error:e(b).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":C},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:u.value,"onUpdate:modelValue":i[5]||(i[5]=x=>u.value=x),"send-button-loading":e(n).buttonLoading,"onEmit:send":$},{content:d(()=>[o(e($o),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ul=ve("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",k)},start_date:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},__user:{required:y.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);return he(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await G(a.approvers),this.model.__signers=await G(a.signers),this.model.__user=await We("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),fr={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:F}},setup(p){const a=p,r=ie(),t=se(),f=le(),s=ul();ao();const l=de(),{t:u}=te(),n=Z(s.rules,s.model),q=Q(!1),b=Q([]),M=ne(()=>a.formType===F?"create-poa":"update-poa"),L=ne(()=>s.model.start_date?new Date(s.model.start_date):new Date),C=async()=>{var c,g,_,v,x,A,S,V,U,O,D,Y,pe,P,H,N,Ge,Ie,co,uo;if(await n.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=oe(s.model.__approvers),s.model.signers=oe(s.model.__signers),s.model.curator=(g=(c=s==null?void 0:s.model)==null?void 0:c.__curator)==null?void 0:g.user_id,s.model.user=(v=(_=s==null?void 0:s.model)==null?void 0:_.__user)==null?void 0:v.id,s.model.journal=re.POWER_OF_ATTORNEY,s.model.company=(A=(x=f.currentUser)==null?void 0:x.company)==null?void 0:A.id,s.model.sender=(V=(S=f==null?void 0:f.currentUser)==null?void 0:S.top_level_department)==null?void 0:V.id,s.model.document_type=r.params.document_type,s.model.document_sub_type=r.params.document_sub_type,s.model.content=".",s.model.parent=(O=(U=s.model)==null?void 0:U.__parent)==null?void 0:O.id,!((Y=(D=s==null?void 0:s.model)==null?void 0:D.__user)!=null&&Y.passport_seria||(P=(pe=s==null?void 0:s.model)==null?void 0:pe.__user)!=null&&P.passport_number||(N=(H=s==null?void 0:s.model)==null?void 0:H.__user)!=null&&N.passport_issue_date||(Ie=(Ge=s==null?void 0:s.model)==null?void 0:Ge.__user)!=null&&Ie.passport_issued_by)){B(null,`${(uo=(co=s.model)==null?void 0:co.__user)==null?void 0:uo.full_name}: ${u("passport-details-error")}`,j.WARNING);return}q.value=!0}},T=()=>{},z=async()=>{const i=await s.actionCreateDocument(s.model);await l.actionCountList(),i?(q.value=!1,B(null,u("document-sent"),j.SUCCESS),await t.replace({name:Te,query:{document_type:X.POWER_OF_ATTORNEY}})):B(null,u("error-occurred"),j.ERROR)},$=async()=>{await s.actionUpdateDocument({id:r.params.id,body:s.model}),await l.actionCountList(),B(null,u("changed"),j.SUCCESS),await t.replace({name:Ee,params:{id:r.params.id,document_type:r.params.document_type,document_sub_type:r.params.document_sub_type}})},m=()=>{a.formType===F?z():$()},E=async i=>{const{data:c}=await ot({user:i.id,document_sub_type:r.params.document_sub_type,status:5});b.value=c.results};return Je(async()=>{if(r.params.id){const i=await s.actionGetDocumentDetailForUpdate(r.params.id);i.parent&&(b.value=[i.parent])}}),Re(()=>{Ae(s.model)}),(i,c)=>{const g=ke,_=ue,v=ze,x=Xe,A=ce;return e(s).detailLoading?(h(),K(g,{key:0})):(h(),R(J,{key:1},[o(e($e),{title:M.value},{content:d(()=>[o(Me,{"onEmit:preview":C,"onEmit:clearForm":T},{default:d(()=>[o(A,null,{default:d(()=>[o(_,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=S=>e(n).__curator.$model=S),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(n).__user.$model,"onUpdate:modelValue":c[1]||(c[1]=S=>e(n).__user.$model=S),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":c[2]||(c[2]=S=>E(S))},null,8,["modelValue","error"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(v,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[c[3]||(c[3]=S=>e(n).start_date.$model=S),c[4]||(c[4]=S=>e(n).start_date.$model=e(fe)(S))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(v,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[c[5]||(c[5]=S=>e(n).end_date.$model=S),c[6]||(c[6]=S=>e(n).end_date.$model=e(fe)(S))],error:e(n).end_date,"min-date":L.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":c[7]||(c[7]=S=>e(s).model.__approvers=S),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":c[8]||(c[8]=S=>e(n).__signers.$model=S),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(x,{modelValue:e(s).model.__parent,"onUpdate:modelValue":c[9]||(c[9]=S=>e(s).model.__parent=S),options:b.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:q.value,"onUpdate:modelValue":c[10]||(c[10]=S=>q.value=S),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:d(()=>[o(Qo,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},pl={class:"base-stepper-component flex items-center select-none"},ml=["onClick"],_l={key:0,class:"flex h-1 bg-greyscale-200 w-8"},ql={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(p,{emit:a}){const{t:r}=te(),t=f=>{a("emit:stepClick",f)};return(f,s)=>{const l=ge;return h(),R("div",pl,[(h(!0),R(J,null,qe(p.items,(u,n)=>(h(),R("div",{key:u.id,class:"flex items-center"},[w("div",{class:Fe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",u.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:q=>t(u)},[o(l,{icon:u.icon,class:Fe(u.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),w("span",null,I(e(r)(u.label)),1)],10,ml),n<p.items.length-1?(h(),R("div",_l)):ae("",!0)]))),128))])}}},Ze=ve("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:y.withMessage("Поле не должен быть пустым",k)}},rules:{content:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},short_description:{required:y.withMessage("Поле не должен быть пустым",k)},__groups:{$each:y.forEach({__users:{required:y.withMessage("Поле не должен быть пустым",k)},__tags:{required:y.withMessage("Поле не должен быть пустым",k)},__regions:{required:y.withMessage("Поле не должен быть пустым",k)},__start_date:{required:y.withMessage("Поле не должен быть пустым",k)},__end_date:{required:y.withMessage("Поле не должен быть пустым",k)},__company:{required:y.withMessage("Поле не должен быть пустым",k)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:y.forEach({users:{required:y.withMessage("Поле не должен быть пустым",k)},text:{required:y.withMessage("Поле не должен быть пустым",k)}})}},booking_model:{bookings:[{type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:y.forEach({segments:{$each:y.forEach({departure_city:{required:y.withMessage("Поле не должен быть пустым",k)},arrival_city:{required:y.withMessage("Поле не должен быть пустым",k)},date:{required:y.withMessage("Поле не должен быть пустым",k)},time:{required:y.withMessage("Поле не должен быть пустым",k)},segment_class:{required:y.withMessage("Поле не должен быть пустым",k)}})},passengers:{required:y.withMessage("Поле не должен быть пустым",k)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Do,active:!0,value:Ke},{id:2,label:"work-plan",icon:po,active:!1,value:lo},{id:3,label:"route",icon:To,active:!1,value:so},{id:4,label:"decree",icon:po,active:!0,value:eo}],routeTabItems:[{id:1,title:"airplane",icon:mo,value:Ye},{id:2,title:"train",icon:_o,value:lt},{id:3,title:"taxi",icon:qo,value:xo}],routeTypeTabItems:[{id:1,title:"there-back",icon:mo,value:_e},{id:2,title:"complex-route",icon:_o,value:ro},{id:3,title:"one-way",icon:qo,value:nt}]}),actions:{async actionCreateDocument(p){const a=go(p);this.buttonLoading=!0;const{response:r,error:t}=await xe(Ue,a);return r?(this.buttonLoading=!1,await de().actionCountList(),Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:a}){const r=await go(a);try{this.buttonLoading=!0;const{data:t}=await Ve({id:p,body:r});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{await de().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){var a,r;try{this.detailLoading=!0;const{data:t}=await be(p),f=await tt(t.id);this.decreeModel=(r=(a=f==null?void 0:f.data)==null?void 0:a.to_composes[0])==null?void 0:r.from_compose,he(this.model,t),this.model.__curator=await Le([],t.curator.id,!1),this.model.__signers=await G(t.signers),this.model.__approvers=await G(t.approvers);const s=Object.values(t.notices.reduce((l,u)=>{const n=u.group_id;return l[n]=l[n]||{group_id:n,items:[]},l[n].items.push(u),l},{}));this.model.__groups=await Promise.all(s.map(async l=>{const u=await Promise.all(l.items.map(async C=>({...await G([],C.user.id,!1),business_trip_id:C.id}))),n=await no(l.items[0].tags),q=await We("regions",l.items[0].locations),b=await We("companies",[],!1,l.items[0].sender_company),M=l.items[0].start_date,L=l.items[0].end_date;return{__users:u,__tags:n,__regions:q,__start_date:M,__end_date:L,__company:b}})),this.trip_plan_model.trip_plans=await Promise.all(t.trip_plans.map(async(l,u)=>({...l,users:await G(l.users)}))),this.booking_model.bookings=await Promise.all(t.bookings.map(async l=>({type:l.type,route:l.route,segments:await Promise.all(l.segments.map(async u=>({departure_city:await We("regions",[],!1,u.departure_city.id),arrival_city:await We("regions",[],!1,u.arrival_city.id),segment_class:await rt.find(n=>n.value===u.segment_class),date:fe(u.departure_date),time:await Jo(u.departure_date,u.departure_end_date)}))),passengers:await G(l.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null})},actionDeleteGroupBlock(p){this.model.__groups.splice(p,1)},async actionStepClick(p,a,r){await p.replace({query:{...a.query,step:r}}),this.stepperItems.forEach(f=>f.active=f.value===r),await Mo();const t=document.querySelector(".document-view-aside");t&&t.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(p){this.trip_plan_model.trip_plans.splice(p,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(p){this.booking_model.bookings.splice(p,1)},actionChangeRouteSegment(p,a){const r=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=p===_e?[r(),r()]:[r()]},async actionAddRouteLine(p){this.booking_model.bookings[p].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(p,a){this.booking_model.bookings[p].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),fl={class:"trip-info-components"},bl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},gl={class:"flex justify-between"},wl={class:"text-base text-primary-900 font-semibold mb-1"},hl=["onClick"],yl={class:"flex align-center gap-x-4"},vl={class:"flex w-full gap-x-4"},kl={class:"text-base text-primary-900 font-semibold mb-2"},$l={class:"flex items-center justify-between"},vo={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},setup(p,{expose:a}){const r=ie(),t=se(),f=Ze(),s=De(),{t:l}=te(),u=Z(f.rules,f.model),n=Q(!1),q=L=>{f.model.__files=[],L.forEach(C=>{f.model.__files.push(C)})},b=()=>{f.actionAddGroupBlock()},M=async L=>{const C=await u.value.$validate();if(n.value=!0,!C){B(null,l("fill-required-fields"),j.WARNING);return}await f.actionStepClick(t,r,L)};return a({stepClick:M}),(L,C)=>{const T=ue,z=Pe,$=ge,m=Xe,E=io,i=ze,c=ce,g=Ne;return h(),R("div",fl,[o(c,null,{default:d(()=>[o(T,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":C[0]||(C[0]=_=>e(u).__curator.$model=_),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(T,{"col-class":"w-1/2"},{default:d(()=>[o(z,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":C[1]||(C[1]=_=>e(u).short_description.$model=_),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(T,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[(h(!0),R(J,null,qe(e(f).model.__groups,(_,v)=>(h(),R("div",bl,[w("div",gl,[w("span",wl,I(e(l)("group"))+"-"+I(v+1),1),v!==0?(h(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:x=>e(f).actionDeleteGroupBlock(v)},[o($,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,hl)):ae("",!0)]),o(c,null,{default:d(()=>[o(T,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:_.__users,"onUpdate:modelValue":x=>_.__users=x,error:e(u).__groups.$each.$response.$data[v].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(T,{"col-class":"w-1/2"},{default:d(()=>[w("div",yl,[o(m,{modelValue:_.__company,"onUpdate:modelValue":x=>_.__company=x,error:e(u).__groups.$each.$response.$data[v].__company,options:e(s).filialList,"onUpdate:options":C[2]||(C[2]=x=>e(s).filialList=x),required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":n.value,class:"w-1/2"},{option:d(({option:x})=>[o(e(we),{title:x.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error"]),o(E,{modelValue:_.__regions,"onUpdate:modelValue":x=>_.__regions=x,error:e(u).__groups.$each.$response.$data[v].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":n.value,class:"w-1/2"},{chip:d(({value:x})=>[me(I(x.name),1)]),option:d(({value:x})=>[o(e(we),{title:x.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])])]),_:2},1024),o(T,{"col-class":"w-1/2"},{default:d(()=>[o(E,{modelValue:_.__tags,"onUpdate:modelValue":x=>_.__tags=x,error:e(u).__groups.$each.$response.$data[v].__tags,"api-url":"tags","api-params":{document_sub_type:e(r).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":n.value},{chip:d(({value:x})=>[me(I(x.name),1)]),option:d(({value:x})=>[o(e(we),{title:x.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),o(T,{"col-class":"w-1/2"},{default:d(()=>[w("div",vl,[o(i,{modelValue:_.__start_date,"onUpdate:modelValue":[x=>_.__start_date=x,x=>_.__start_date=e(fe)(x)],error:e(u).__groups.$each.$response.$data[v].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(i,{modelValue:_.__end_date,"onUpdate:modelValue":[x=>_.__end_date=x,x=>_.__end_date=e(fe)(x)],error:e(u).__groups.$each.$response.$data[v].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(g,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:b},null,8,["icon-left"])]),_:1}),o(T,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(f).model.__approvers,"onUpdate:modelValue":C[3]||(C[3]=_=>e(f).model.__approvers=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(T,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":C[4]||(C[4]=_=>e(u).__signers.$model=_),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(T,{"col-class":"w-full"},{default:d(()=>[w("div",{class:Fe(["border-[1.5px] rounded-2xl px-5 py-4",n.value&&!e(f).model.content?"border-critic-500":"border-greyscale-200"])},[w("div",kl,I(e(l)("notice")),1),o(Se,{modelValue:e(u).content.$model,"onUpdate:modelValue":C[5]||(C[5]=_=>e(u).content.$model=_),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(f).model.__files,"onEmit:fileUpload":q},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),w("div",$l,[o(g,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(g,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:C[6]||(C[6]=_=>M(e(lo)))})])])}}},xl={class:"work-plan-component"},Vl={class:"flex flex-col gap-y-3"},Ul={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},El={class:"flex justify-between"},Sl={class:"text-base text-primary-900 font-semibold mb-1"},Cl=["onClick"],Ll={class:"flex items-center justify-between mt-10"},Rl={class:"flex items-center gap-x-1"},Dl={__name:"WorkPlan",setup(p,{expose:a}){const{t:r}=te(),t=ie(),f=se(),s=Ze(),l=Z(s.trip_plan_rules,s.trip_plan_model),u=Q(!1),n=ne(()=>{const M=new Set;return s.model.__groups.reduce((L,C)=>C.__users&&Array.isArray(C.__users)?L.concat(C.__users):L,[]).filter(L=>M.has(L.id)?!1:(M.add(L.id),!0))}),q=async M=>{const L=await l.value.$validate();if(u.value=!0,!L){B(null,r("fill-required-fields"),j.WARNING);return}await s.actionStepClick(f,t,M)},b=()=>{s.actionAddWorkPlanRow(),u.value=!1};return a({stepClick:q}),(M,L)=>{const C=ge,T=Vo,z=ue,$=ce,m=Ne;return h(),R("div",xl,[w("div",Vl,[(h(!0),R(J,null,qe(e(s).trip_plan_model.trip_plans,(E,i)=>(h(),R("div",Ul,[w("div",El,[w("span",Sl,I(e(r)("plan"))+"-"+I(i+1),1),i!==0?(h(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:c=>e(s).actionDeleteWorkPlanRow(i)},[o(C,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Cl)):ae("",!0)]),o($,null,{default:d(()=>[o(z,{"col-class":"w-1/2"},{default:d(()=>[o(T,{modelValue:E.text,"onUpdate:modelValue":c=>E.text=c,error:e(l).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":u.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(z,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:E.users,"onUpdate:modelValue":c=>E.users=c,options:n.value,error:e(l).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":u.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:b},null,8,["icon-left"]),w("div",Ll,[o(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",Rl,[o(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:L[0]||(L[0]=E=>q(e(Ke)))}),o(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:L[1]||(L[1]=E=>q(e(so)))})])])])}}};const Tl={class:"base-time-picker"},Ml={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(p){const a=p,r=oo(a,"modelValue"),{t}=te();return(f,s)=>{var n;const l=ut,u=ge;return h(),R("div",Tl,[o(l,{label:a.label,required:a.required},null,8,["label","required"]),o(e(pt),{modelValue:e(r),"onUpdate:modelValue":s[0]||(s[0]=q=>He(r)?r.value=q:null),"time-picker":"",range:p.range,"cancel-text":e(t)("cancel"),"select-text":e(t)("select"),placeholder:e(t)(p.placeholder),ref:"datePicker",class:Fe({"input-error":((n=p.error)==null?void 0:n.$error)&&p.showNestedError})},{"input-icon":d(()=>[o(u,{icon:e(Oo),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Ol={class:"route-component flex flex-col gap-y-3"},Pl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Nl={class:"flex items-center justify-between"},Al={class:"flex items-center gap-x-4"},Il={class:"text-base text-primary-900 font-semibold mb-1"},Fl={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},jl={class:"text-xs text-greyscale-900 font-medium"},Bl=["onClick"],zl=["onClick"],Gl={class:"text-sm text-primary-500 font-semibold"},Wl={class:"flex items-center justify-between mt-10"},Yl={class:"flex items-center gap-x-1"},Hl={__name:"Route",props:{formType:{type:String,default:F}},emits:["emit:onValidateAndSend"],setup(p,{expose:a,emit:r}){const{t}=te(),f=ie(),s=se(),l=Ze(),u=De();le(),de();const n=Z(l.booking_model_rules,l.booking_model);Q(!1);const q=Q(!1),b=ne(()=>{const i=new Set;return l.model.__groups.reduce((c,g)=>g.__users&&Array.isArray(g.__users)?c.concat(g.__users):c,[]).filter(c=>i.has(c.id)?!1:(i.add(c.id),!0))}),M=i=>{l.routeTabItems.forEach(c=>c.active=c.id===i.id)},L=(i,c)=>{l.routeTypeTabItems.forEach(g=>g.active=g.id===i.id),l.actionChangeRouteSegment(i.value,c)},C=async i=>{const c=await n.value.$validate();if(q.value=!0,!c){B(null,t("fill-required-fields"),j.WARNING);return}await l.actionStepClick(s,f,i)},T=()=>{l.actionAddRouteRow(),q.value=!1},z=(i,c,g,_)=>{_.type===_e&&(l.booking_model.bookings[c].segments[g+1].arrival_city=i)},$=(i,c,g,_)=>{_.type===_e&&(l.booking_model.bookings[c].segments[g+1].departure_city=i)},m=(i,c,g,_)=>{_.type===_e&&(l.booking_model.bookings[c].segments[g+1].segment_class=i)},E=()=>{C(eo),r("emit:onValidateAndSend")};return a({stepClick:C}),(i,c)=>{const g=Xe,_=ue,v=ze,x=ce,A=Ne;return h(),R("div",Ol,[(h(!0),R(J,null,qe(e(l).booking_model.bookings,(S,V)=>(h(),R("div",Pl,[w("div",Nl,[w("div",Al,[w("span",Il,I(e(t)("route"))+"-"+I(V+1),1),o(yo,{modelValue:S.route,"onUpdate:modelValue":U=>S.route=U,items:e(l).routeTabItems,"onEmit:onChange":c[0]||(c[0]=U=>M(U))},null,8,["modelValue","onUpdate:modelValue","items"]),o(yo,{modelValue:S.type,"onUpdate:modelValue":U=>S.type=U,items:e(l).routeTypeTabItems,"onEmit:onChange":U=>L(U,V)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),V!==0?(h(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:c[1]||(c[1]=(...U)=>e(l).actionDeleteRouteRow&&e(l).actionDeleteRouteRow(...U))},[o(ge,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):ae("",!0)]),w("div",Fl,[o(ge,{icon:e(Po),class:"text-warning-500"},null,8,["icon"]),w("span",jl,I(e(t)("route-warning")),1)]),(h(!0),R(J,null,qe(S.segments,(U,O)=>(h(),R("div",null,[o(x,null,{default:d(()=>[o(_,{"col-class":"w-1/5"},{default:d(()=>[o(g,{modelValue:U.departure_city,"onUpdate:modelValue":D=>U.departure_city=D,error:e(n).bookings.$each.$response.$data[V].segments.$each.$data[O].departure_city,options:e(u).regionsList,"onUpdate:options":c[2]||(c[2]=D=>e(u).regionsList=D),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:S.type===e(_e)&&O%2!==0,"onEmit:change":D=>z(D,V,O,S)},{option:d(({option:D})=>[o(e(we),{title:D.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(_,{"col-class":"w-1/5"},{default:d(()=>[o(g,{modelValue:U.arrival_city,"onUpdate:modelValue":D=>U.arrival_city=D,error:e(n).bookings.$each.$response.$data[V].segments.$each.$data[O].arrival_city,options:e(u).regionsList,"onUpdate:options":c[3]||(c[3]=D=>e(u).regionsList=D),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:S.type===e(_e)&&O%2!==0,"onEmit:change":D=>$(D,V,O,S)},{option:d(({option:D})=>[o(e(we),{title:D.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(_,{"col-class":"w-1/5"},{default:d(()=>[o(g,{modelValue:U.segment_class,"onUpdate:modelValue":D=>U.segment_class=D,error:e(n).bookings.$each.$response.$data[V].segments.$each.$data[O].segment_class,options:S.route===e(xo)?e(at):S.route===e(Ye)?e(st):e(it),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":q.value,translatable:"",disabled:S.type===e(_e)&&O%2!==0,"onEmit:change":D=>m(D,V,O,S)},{option:d(({option:D})=>[o(e(we),{title:D.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(_,{"col-class":"w-1/5"},{default:d(()=>[o(v,{modelValue:U.date,"onUpdate:modelValue":[D=>U.date=D,D=>U.date=e(fe)(D)],error:e(n).bookings.$each.$response.$data[V].segments.$each.$data[O].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),o(_,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:d(()=>[o(Ml,{modelValue:U.time,"onUpdate:modelValue":D=>U.time=D,error:e(n).bookings.$each.$response.$data[V].segments.$each.$data[O].time,label:"time",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),S.type===e(ro)&&O!==0?(h(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:D=>e(l).actionDeleteRouteLine(V,O)},[o(ge,{icon:e(je),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Bl)):ae("",!0)]),_:2},1024)]),_:2},1024)]))),256)),S.type===e(ro)?(h(),R("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:U=>e(l).actionAddRouteLine(V)},[o(ge,{icon:e(Be),class:"text-primary-500"},null,8,["icon"]),w("span",Gl,I(e(t)("add-line")),1)],8,zl)):ae("",!0),o(x,null,{default:d(()=>[o(_,{"col-class":"w-full"},{default:d(()=>[o(W,{modelValue:S.passengers,"onUpdate:modelValue":U=>S.passengers=U,options:b.value,error:e(n).bookings.$each.$response.$data[V].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),o(A,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:T},null,8,["icon-left"]),w("div",Wl,[o(A,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",Yl,[o(A,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:c[4]||(c[4]=S=>C(e(lo)))}),o(A,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(l).buttonLoading,onClick:E},null,8,["loading"])])])])}}},Kl={class:"decree-component"},Ql={class:"flex items-center justify-between mt-10"},Jl={class:"flex items-center gap-x-1"},Xl={__name:"Decree",props:{formType:{type:String,default:F}},setup(p,{expose:a}){const r=p,t=ie(),f=se(),s=Ze(),l=Z(s.decreeRules,s.decreeModel),{t:u}=te(),n=le(),q=de(),b=Q(!1),M=async $=>{await s.actionStepClick(f,t,$)},L=$=>{s.decreeModel.__files=[],$.forEach(m=>{s.decreeModel.__files.push(m)})},C=async()=>{var m,E,i,c;if(!await l.value.$validate()){B(null,u("fill-required-fields"),j.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(E=(m=s.model)==null?void 0:m.__curator)==null?void 0:E.user_id,s.decreeModel.journal=re.ORDERS_PROTOCOLS,s.decreeModel.company=n.currentUser.company.id,s.decreeModel.sender=(c=(i=n==null?void 0:n.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,s.decreeModel.document_type=X.DECREE,s.decreeModel.document_sub_type=ee.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,b.value=!0},T=async($,m)=>{try{await s.actionUpdateDocument({id:m,body:{...s.decreeModel,trip_notice_id:$}}),await q.actionCountList(),B(null,u("successfully-saved"),j.SUCCESS)}catch{}},z=async()=>{var m;let $=null;r.formType===F&&t.query.notice_id?$=t.query.notice_id:r.formType===Qe&&t.params.id&&($=t.params.id);try{await T($,(m=s.decreeModel)==null?void 0:m.id),await f.replace({name:Ee,params:{id:$,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})}catch{}};return a({stepClick:M}),($,m)=>{const E=Ne;return h(),R("div",Kl,[o(Se,{modelValue:e(l).content.$model,"onUpdate:modelValue":m[0]||(m[0]=i=>e(l).content.$model=i),error:e(l).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"]),w("div",Ql,[o(E,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",Jl,[o(E,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:m[1]||(m[1]=i=>M(e(Ke)))}),o(E,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:C})])]),o(Ce,{modelValue:b.value,"onUpdate:modelValue":m[2]||(m[2]=i=>b.value=i),"send-button-loading":e(s).buttonLoading,"onEmit:send":z,"content-classes":"p-0"},{content:d(()=>[o(e(Xo),{"compose-model":{...e(s).model,bookings:e(s).booking_model.bookings,trip_plans:e(s).trip_plan_model.trip_plans,decree_content:e(s).decreeModel.content},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},Zl={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},en={class:"px-6 py-4"},br={__name:"BusinessTripForm",props:{formType:{type:String,default:F}},setup(p){const a=p,{t:r}=te(),t=ie(),f=se(),s=le(),l=Ze();Z(l.rules,l.model),Z(l.trip_plan_rules,l.trip_plan_model),Z(l.booking_model_rules,l.booking_model),Z(l.decreeRules,l.decreeModel);const u=Q(null),n=ne(()=>a.formType===F?"create-business-trip-notice":"update-business-trip-notice"),q=ne(()=>{switch(t.query.step){case Ke:return vo;case eo:return Xl;case lo:return Dl;case so:return Hl;default:return vo}}),b=async T=>{var $;const z=e(u);(($=t.query)==null?void 0:$.step)!==T.value&&(await z.stepClick(T.value),T.value===eo&&(await L(),await B(null,r("notice-saved-successfully"),j.SUCCESS)))},M=async()=>{t.query.step||await f.replace({query:{...t.query,step:Ke}}),l.stepperItems.forEach(T=>T.active=T.value===t.query.step)},L=async()=>{var $,m,E,i,c,g,_,v,x,A,S,V;const T=oe(l.model.__approvers),z=oe(l.model.__signers);if(l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.bookings=[],l.model.trip_plans=[],l.model.approvers=T,l.model.signers=z,l.model.curator=(m=($=l.model)==null?void 0:$.__curator)==null?void 0:m.user_id,l.model.journal=re.INNER,l.model.company=(i=(E=s.currentUser)==null?void 0:E.company)==null?void 0:i.id,l.model.__groups.forEach((U,O)=>{const D=O+1;l.model.notices.push(...U.__users.map(Y=>{var pe,P,H;return{start_date:U.__start_date,end_date:U.__end_date,user:Y.id,company:(P=(pe=s.currentUser)==null?void 0:pe.company)==null?void 0:P.id,sender_company:(H=U.__company)==null?void 0:H.id,regions:U.__regions.map(N=>N.id),tags:U.__tags.map(N=>({id:N.id})),group_id:D,...Y.business_trip_id?{id:Y.business_trip_id}:{}}}))}),l.model.sender=(g=(c=s==null?void 0:s.currentUser)==null?void 0:c.top_level_department)==null?void 0:g.id,l.model.files=l.model.__files.map(U=>({id:U.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,l.model.bookings=l.booking_model.bookings.map(U=>({...U,segments:U.segments.map(O=>{var D,Y;return{departure_city:O.departure_city.id,arrival_city:O.arrival_city.id,departure_date:`${O.date}T${(D=O.time)==null?void 0:D.hours}:${(Y=O.time)==null?void 0:Y.minutes}:00+05:00`,departure_end_date:null,segment_class:O.segment_class.value}}),passengers:U.passengers.map(O=>({user:O.id}))})),l.model.trip_plans=l.trip_plan_model.trip_plans.map(U=>({users:U.users.map(O=>({id:O.id})),text:U.text})),a.formType===F&&t.query.notice_id)try{await l.actionUpdateDocument({id:t.query.notice_id,body:l.model})}catch{}else if(a.formType===F)try{const{data:U}=await l.actionCreateDocument(l.model),O={approvers:[],signers:[],curator:(v=(_=l.model)==null?void 0:_.__curator)==null?void 0:v.user_id,journal:re.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:(A=(x=s==null?void 0:s.currentUser)==null?void 0:x.top_level_department)==null?void 0:A.id,document_type:X.DECREE,document_sub_type:ee.BUSINESS_TRIP_DECREE_V2,short_description:(S=l.model)==null?void 0:S.short_description,trip_notice_id:U.id,content:U.content};l.decreeModel.content=U.content;try{const D=await l.actionCreateDocument(O);l.decreeModel.id=(V=D==null?void 0:D.data)==null?void 0:V.id,await f.replace({query:{...t.query,notice_id:U.id}}),await l.actionGetDocumentDetailForUpdate(U.id)}catch{}}catch{}else if(a.formType===Qe&&t.params.id)try{await l.actionUpdateDocument({id:t.params.id,body:l.model})}catch{}},C=async()=>{try{await L(),await B(null,r("notice-saved-successfully"),j.SUCCESS)}catch{}};return Je(async()=>{await M(),a.formType===Qe?await l.actionGetDocumentDetailForUpdate(t.params.id):t.query.notice_id&&await l.actionGetDocumentDetailForUpdate(t.query.notice_id)}),Re(()=>{l.actionResetBTModel()}),(T,z)=>{const $=ke,m=ql;return h(),R("div",{class:Fe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(l).detailLoading}])},[e(l).detailLoading?(h(),K($,{key:0})):(h(),K(e($e),{key:1,title:n.value},{content:d(()=>[w("div",Zl,[o(m,{items:e(l).stepperItems,"onEmit:stepClick":b},null,8,["items"])]),w("div",en,[(h(),K(No(q.value),{"form-type":p.formType,ref_key:"childComponent",ref:u,"onEmit:onValidateAndSend":C},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},on=ve("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},short_description:{required:y.withMessage("Поле не должен быть пустым",k)},__groups:{$each:y.forEach({__users:{required:y.withMessage("Поле не должен быть пустым",k)},__tags:{required:y.withMessage("Поле не должен быть пустым",k)},__regions:{required:y.withMessage("Поле не должен быть пустым",k)},__start_date:{required:y.withMessage("Поле не должен быть пустым",k)},__end_date:{required:y.withMessage("Поле не должен быть пустым",k)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:y.forEach({users:{required:y.withMessage("Поле не должен быть пустым",k)},text:{required:y.withMessage("Поле не должен быть пустым",k)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(p){this.model.__groups.splice(p,1)},actionDeleteWorkPlanRow(p){this.trip_plan_model.trip_plans.splice(p,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),tn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},ln={class:"flex justify-between"},nn={class:"text-base text-primary-900 font-semibold mb-1"},rn=["onClick"],an={class:"flex w-full gap-x-4"},sn={class:"flex flex-col gap-y-3"},dn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},cn={class:"flex justify-between"},un={class:"text-base text-primary-900 font-semibold mb-1"},pn=["onClick"],mn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},_n={class:"text-base text-primary-900 font-semibold mb-2"},gr={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:F}},setup(p){const a=p,r=Q(!1),t=Q(!1),{t:f}=te(),s=ie(),l=se(),u=le(),n=on(),q=de();De();const b=Z(n.rules,n.model),M=Z(n.trip_plan_rules,n.trip_plan_model),L=ne(()=>a.formType===F?"create-decree":"update-decree"),C=ne(()=>{const _=new Set;return n.model.__groups.reduce((v,x)=>x.__users&&Array.isArray(x.__users)?v.concat(x.__users):v,[]).filter(v=>_.has(v.id)?!1:(_.add(v.id),!0))}),T=async()=>{var A,S,V,U,O,D;if(r.value=!0,!await b.value.$validate()){B(null,f("fill-required-fields"),j.WARNING);return}const v=oe(n.model.__approvers),x=oe(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=v,n.model.signers=x,n.model.curator=(S=(A=n.model)==null?void 0:A.__curator)==null?void 0:S.user_id,n.model.journal=re.ORDERS_PROTOCOLS,n.model.company=(U=(V=u.currentUser)==null?void 0:V.company)==null?void 0:U.id,n.model.__groups.forEach((Y,pe)=>{const P=pe+1;n.model.notices.push(...Y.__users.map(H=>{var N,Ge;return{start_date:Y.__start_date,end_date:Y.__end_date,user:H.id,company:(Ge=(N=u.currentUser)==null?void 0:N.company)==null?void 0:Ge.id,regions:Y.__regions.map(Ie=>Ie.id),tags:Y.__tags.map(Ie=>({id:Ie.id})),group_id:P}}))}),n.model.sender=(D=(O=u==null?void 0:u.currentUser)==null?void 0:O.top_level_department)==null?void 0:D.id,n.model.files=n.model.__files.map(Y=>({id:Y.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(Y=>({users:Y.users.map(pe=>({id:pe.id})),text:Y.text})),t.value=!0},z=()=>{},$=()=>{n.actionAddGroupBlock()},m=()=>{n.actionAddWorkPlanRow(),r.value=!1},E=_=>{n.model.__files=[],_.forEach(v=>{n.model.__files.push(v)})},i=async()=>{const _=await n.actionCreateDocument(n.model);await q.actionCountList(),_?(t.value=!1,B(null,f("document-sent"),j.SUCCESS),await l.replace({name:Te,query:{document_type:s.params.document_type}})):B(null,f("error-occurred"),j.ERROR)},c=async()=>{await n.actionUpdateDocument({id:s.params.id,body:n.model}),await q.actionCountList(),B(null,f("changed"),j.SUCCESS),await l.replace({name:Ee,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},g=()=>{a.formType===F?i():c()};return(_,v)=>{const x=ke,A=ue,S=Pe,V=ge,U=io,O=ze,D=ce,Y=Ne,pe=Vo;return e(n).detailLoading?(h(),K(x,{key:0})):(h(),R(J,{key:1},[o(e($e),{title:L.value},{content:d(()=>[o(Me,{"onEmit:preview":T,"onEmit:clearForm":z},{default:d(()=>[o(D,null,{default:d(()=>[o(A,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(b).__curator.$model,"onUpdate:modelValue":v[0]||(v[0]=P=>e(b).__curator.$model=P),error:e(b).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(A,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:e(b).short_description.$model,"onUpdate:modelValue":v[1]||(v[1]=P=>e(b).short_description.$model=P),error:e(b).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(A,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[(h(!0),R(J,null,qe(e(n).model.__groups,(P,H)=>(h(),R("div",tn,[w("div",ln,[w("span",nn,I(e(f)("group"))+"-"+I(H+1),1),H!==0?(h(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:N=>e(n).actionDeleteGroupBlock(H)},[o(V,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,rn)):ae("",!0)]),o(D,null,{default:d(()=>[o(A,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:P.__users,"onUpdate:modelValue":N=>P.__users=N,error:e(b).__groups.$each.$response.$data[H].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(A,{"col-class":"w-1/2"},{default:d(()=>[o(U,{modelValue:P.__regions,"onUpdate:modelValue":N=>P.__regions=N,error:e(b).__groups.$each.$response.$data[H].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":r.value},{chip:d(({value:N})=>[me(I(N.name),1)]),option:d(({value:N})=>[o(e(we),{title:N.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(A,{"col-class":"w-1/2"},{default:d(()=>[o(U,{modelValue:P.__tags,"onUpdate:modelValue":N=>P.__tags=N,error:e(b).__groups.$each.$response.$data[H].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":r.value},{chip:d(({value:N})=>[me(I(N.name),1)]),option:d(({value:N})=>[o(e(we),{title:N.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),o(A,{"col-class":"w-1/2"},{default:d(()=>[w("div",an,[o(O,{modelValue:P.__start_date,"onUpdate:modelValue":[N=>P.__start_date=N,N=>P.__start_date=e(fe)(N)],error:e(b).__groups.$each.$response.$data[H].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(O,{modelValue:P.__end_date,"onUpdate:modelValue":[N=>P.__end_date=N,N=>P.__end_date=e(fe)(N)],error:e(b).__groups.$each.$response.$data[H].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(Y,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:$},null,8,["icon-left"])]),_:1})]),_:1}),w("div",sn,[(h(!0),R(J,null,qe(e(n).trip_plan_model.trip_plans,(P,H)=>(h(),R("div",dn,[w("div",cn,[w("span",un,I(e(f)("plan"))+"-"+I(H+1),1),H!==0?(h(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:N=>e(n).actionDeleteWorkPlanRow(H)},[o(V,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,pn)):ae("",!0)]),o(D,null,{default:d(()=>[o(A,{"col-class":"w-1/2"},{default:d(()=>[o(pe,{modelValue:P.text,"onUpdate:modelValue":N=>P.text=N,error:e(M).trip_plans.$each.$response.$data[H].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(A,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:P.users,"onUpdate:modelValue":N=>P.users=N,options:C.value,error:e(M).trip_plans.$each.$response.$data[H].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(Y,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:m},null,8,["icon-left"]),o(D,null,{default:d(()=>[o(A,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":v[2]||(v[2]=P=>e(n).model.__approvers=P),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(A,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(b).__signers.$model,"onUpdate:modelValue":v[3]||(v[3]=P=>e(b).__signers.$model=P),error:e(b).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(A,{"col-class":"w-full"},{default:d(()=>[w("div",mn,[w("div",_n,I(e(f)("decree")),1),o(Se,{modelValue:e(b).content.$model,"onUpdate:modelValue":v[4]||(v[4]=P=>e(b).content.$model=P),error:e(b).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":E},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:t.value,"onUpdate:modelValue":v[5]||(v[5]=P=>t.value=P),"send-button-loading":e(n).buttonLoading,"onEmit:send":g},{content:d(()=>[o(e($o),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{cr as _,mr as a,_r as b,qr as c,br as d,gr as e,ur as f,pr as g,fr as h};
