import{_ as ce}from"./BaseRow.b1851c6a.4299.js";import{_ as Pe}from"./BaseInput.d7047d2d.4299.js";import{_ as ue}from"./BaseCol.98940a87.4299.js";import{v as Q,b9 as oo,a1 as to,o as v,c as T,i as o,z as d,h as e,b6 as He,d as ne,ds as Oe,a as y,t as B,F as J,e as qe,a3 as me,g as ae,f as K,B as xo,dx as Vo,bh as Uo,n as Fe,r as ho,G as Ne,as as ve,cK as X,cL as ee,ci as re,u as te,b as se,ao as ie,bc as Re,a5 as N,ac as ke,a8 as Eo,cW as Je,dy as Co,_ as ge,dz as So,dA as po,dB as Lo,dC as Ro,dD as Do,dE as To,$ as Mo,dF as Oo,dG as Po,b5 as No,br as je,b_ as Be,dH as Ao,dq as Io,E as Fo}from"./index.3192cd0c.1850.js";import{c as k,r as x,u as Z}from"./index.42d029f7.4299.js";import{_ as jo,a as Bo}from"./BranchMultiSelect.d7e792ee.4299.js";import{j as zo,k as Go,l as Wo,_ as $e,a as Yo,h as Ho,f as Ko,b as Qo,c as Jo,d as Xo,e as yo,i as Zo,m as et,g as ot}from"./BasePOA.df4aedf8.4299.js";import"./BaseTabMenu.577c210e.4299.js";import"./dialog.esm.9221f12c.4299.js";import"./tabpanel.esm.c94dfd66.4299.js";import"./FileSaver.min.2f878b51.4299.js";import{x as mo,s as he,v as W,y as tt,z as Ae,A as oe,B as Le,C as _o,D as no,E as We,o as qo}from"./index.e42b828c.4299.js";import"./BaseTabView.fe1f3068.4299.js";import"./FileTabs.ca71e07f.4299.js";import{_ as Y}from"./UserMultiSelect.047b26e0.4299.js";import{c as lt,u as le,w as xe,d as A}from"./axios.config.622bc432.4299.js";import{u as De}from"./common.e30fa1df.4299.js";import{u as de}from"./count.store.fa83016f.4299.js";import{u as ao,a as Ve,b as be,c as Ue,d as nt,f as rt}from"./index.store.547a35d2.4299.js";import{j as fo,k as Te,i as Ee,c as _e,b as Ye,l as Ke,m as lo,n as so,o as eo,a as at,B as vo,M as ro,O as st,T as it,C as dt,P as ct,p as ut}from"./index.bd76a17d.4299.js";import{F as z,a as Qe}from"./constants.50c90617.4299.js";import{_ as Xe}from"./BaseDropdown.a003ca19.4299.js";import{_ as ze}from"./BaseCalendar.8ac5962d.4299.js";import{_ as io}from"./BaseMultiSelect.37f79897.4299.js";import{f as pt,a as fe}from"./formatDate.10c05a6d.4299.js";import{Q as bo}from"./qrcode.vue.esm.2bff2ef6.4299.js";import{_ as ko}from"./ShortDescription.fbc920a4.4299.js";import"./dayjs.min.3cfdace7.4299.js";/* empty css                                                                                    */import{c as mt}from"./Dropdown.87cdd40c.4299.js";import"./menu.esm.2f250bcd.4299.js";/* empty css                                                      */import"./avatar.esm.0cfab942.4299.js";/* empty css                                                      */import"./businessTrip.store.7a573cce.4299.js";/* empty css                                                            */import"./accordiontab.esm.350b3f1a.4299.js";import"./common.store.1673cc73.4299.js";import{_ as we}from"./WithRadio.d68d7ce8.4299.js";import"./radiobutton.esm.88b0e454.4299.js";import"./checkbox.esm.a021f060.4299.js";import"./index.es6.f9050ba3.4299.js";import{_ as go}from"./BaseBrickRadio.56a5d19e.4299.js";import{_ as _t}from"./BaseLabel.3981fefb.4299.js";import{K as qt}from"./main.88b587a1.4299.js";import{_ as ft}from"./WithSelectable.929b9eb7.4299.js";import{_ as bt}from"./BaseBrickTab.f4ae7ca2.4299.js";import{_ as gt}from"./BaseFileUpload.b9d22da8.4299.js";import{_ as wt}from"./BaseFroalaEditor.8b03b1a9.4299.js";import{_ as ht}from"./BaseDialog.f42f2212.4299.js";const yt={class:"user-select"},ye={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(p,{emit:a}){const r=p,t=Q([]),b=oo(r,"modelValue"),s=async l=>{let{data:u}=await lt.get(`${r.apiUrl}/`,l);u.hasOwnProperty("results")?t.value=u.results:t.value=u};return to(async()=>{await s(r.apiParams)}),(l,u)=>(v(),T("div",yt,[o(Xe,{modelValue:e(b),"onUpdate:modelValue":u[0]||(u[0]=n=>He(b)?b.value=n:null),options:t.value,"onUpdate:options":u[1]||(u[1]=n=>t.value=n),error:r.error,"api-url":r.apiUrl,"api-params":r.apiParams,"option-label":"full_name",label:r.label,placeholder:r.placeholder,required:r.required,searchable:"","onEmit:change":u[2]||(u[2]=n=>a("emit:change",n))},{option:d(({option:n})=>[o(e(ft),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},vt={class:"business-trip-decree-template-view letter-template"},kt={class:"flex flex-col text-sm font-medium mt-4"},$t=y("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),xt=["innerHTML"],Vt=["innerHTML"],Ut={class:"employees-table text-sm mt-4"},Et={class:"w-full"},Ct=y("tr",{class:"text-center"},[y("td",{class:"border-2 p-1"},"№"),y("td",{class:"border-2 p-1"},"F.I.SH"),y("td",{class:"border-2 p-1"},"Departament va lavozim"),y("td",{class:"border-2 p-1"},"Yo'nalish"),y("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),St={class:"text-center"},Lt={class:"border-2 p-1"},Rt={class:"border-2 p-1"},Dt={class:"border-2 p-1"},Tt=y("br",null,null,-1),Mt={class:"border-2 p-1"},Ot={class:"flex flex-col gap-y-1"},Pt={key:0},Nt={class:"border-2 p-1 w-[100px]"},At=y("br",null,null,-1),It={class:"indent-8 mt-2 text-sm text-justify"},Ft=y("div",null,"xizmat safariga yuborilsin.",-1),jt=y("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Bt=y("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),zt=y("div",null," Buxgalteriya hisobi va moliyaviy menejment departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Gt={key:0},Wt=y("span",{class:"font-semibold"},"Asos: ",-1),Yt=y("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),Ht=y("div",null," O‘zR MKning 287-moddasi; ",-1),Kt=y("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),Qt={class:"mt-6 pb-2 px-4"},Jt={class:"text-sm font-semibold block"},Xt={class:"text-sm font-semibold block"},Zt={class:"text-sm font-semibold block"},el={class:"text-sm font-semibold block"},ol={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(p){const a=p,r=ao(),t=ne(()=>{var u;return a.preview?le().currentUser:(u=a.composeModel)==null?void 0:u.author}),b=ne(()=>{var u,n,_;return a.preview?(u=a.composeModel)==null?void 0:u.__employees.map(h=>({empFullName:h.full_name,empDepName:h.top_level_department.name,empPositionName:h.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(_=(n=a.composeModel)==null?void 0:n.notices)==null?void 0:_.map(h=>({empFullName:h.user.full_name,empDepName:h.user.top_level_department.name,empPositionName:h.user.position.name,destinations:h.destinations,startDate:h.start_date,endDate:h.end_date}))}),s=ne(()=>{var n,_,h;if(a.preview)return[(n=a.composeModel)==null?void 0:n.__curator];const u=(_=a.composeModel)==null?void 0:_.signers.find(M=>M.type===Oe.BASIC_SIGNER);return u?[u]:[(h=a.composeModel)==null?void 0:h.curator].filter(Boolean)}),l=ne(()=>{var u,n;return a.preview?(u=a.composeModel)==null?void 0:u.__signers:(n=a.composeModel)==null?void 0:n.signers.filter(_=>_.type===Oe.SIGNER)});return(u,n)=>{var M,O,P,D,E,w,m,S;const _=ue,h=ce;return v(),T("div",vt,[o(e(zo)),o(e(Go),{"dep-name":(O=(M=t.value)==null?void 0:M.top_level_department)==null?void 0:O.name},null,8,["dep-name"]),y("div",kt,[y("span",null," № "+B((P=a.composeModel)==null?void 0:P.register_number),1),y("span",null,B(((D=a.composeModel)==null?void 0:D.register_date)&&e(pt)((E=a.composeModel)==null?void 0:E.register_date)),1)]),$t,e(r).historyShow?(v(),T("div",{key:0,class:"text-justify",innerHTML:e(r).historyContent},null,8,xt)):(v(),T("div",{key:1,class:"text-justify",innerHTML:(w=a.composeModel)==null?void 0:w.content},null,8,Vt)),y("div",Ut,[y("table",Et,[Ct,b.value&&b.value.length?(v(!0),T(J,{key:0},qe(b.value,(i,c)=>(v(),T("tr",St,[y("td",Lt,B(c+1),1),y("td",Rt,B(i.empFullName),1),y("td",Dt,[me(B(i.empDepName)+" ",1),Tt,me(" "+B(i.empPositionName),1)]),y("td",Mt,[y("div",Ot,[(v(!0),T(J,null,qe(i.destinations,(g,f)=>(v(),T("span",null,[me(B(g.name)+" ",1),f!==i.destinations.length-1?(v(),T("span",Pt,",")):ae("",!0)]))),256))])]),y("td",Nt,[me(B(i.startDate)+" ",1),At,me(" "+B(i.endDate),1)])]))),256)):ae("",!0)])]),y("div",It,[Ft,jt,Bt,zt,(m=p.composeModel)!=null&&m.trip_notice_register_number?(v(),T("div",Gt,[Wt,me(B((S=p.composeModel)==null?void 0:S.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):ae("",!0),Yt,Ht,Kt]),y("div",Qt,[(v(!0),T(J,null,qe(s.value,i=>(v(),K(h,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[o(_,{"col-class":"w-1/3"},{default:d(()=>[y("span",Jt,B(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(_,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?(v(),K(bo,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(_,{"col-class":"w-1/3"},{default:d(()=>[y("span",Xt,B(e(mo)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(v(!0),T(J,null,qe(l.value,i=>(v(),K(h,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[o(_,{"col-class":"w-1/3"},{default:d(()=>[y("span",Zt,B(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(_,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?(v(),K(bo,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(_,{"col-class":"w-1/3"},{default:d(()=>[y("span",el,B(e(mo)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),o(e(Wo),{"compose-model":a.composeModel,author:t.value},null,8,["compose-model","author"])])}}};var tl=`
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
`,ll={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};xo.extend({name:"editor",css:tl,classes:ll});(function(){try{return window.Quill}catch{return null}})();const Ce={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(p){return["froala","tiny"].includes(p)}}},emits:["update:modelValue","emit:fileUpload"],setup(p,{emit:a}){const r=p,t=oo(r,"modelValue"),b=Q([{title:"text",slot:"editor",icon:Vo},{title:"file",slot:"file",icon:Uo}]);return(s,l)=>(v(),K(bt,{"tab-panel-list":b.value,"panel-container-class":"px-0"},{editor:d(()=>[p.editor==="froala"?(v(),K(wt,{key:0,modelValue:e(t),"onUpdate:modelValue":l[0]||(l[0]=u=>He(t)?t.value=u:null)},null,8,["modelValue"])):(v(),K(mt,{key:1,modelValue:e(t),"onUpdate:modelValue":l[1]||(l[1]=u=>He(t)?t.value=u:null)},null,8,["modelValue"]))]),file:d(()=>[y("div",{class:Fe(r.fileUploadContainerClasses)},[o(gt,{files:r.files,"onEmit:fileUpload":l[2]||(l[2]=u=>a("emit:fileUpload",u))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},nl={class:"flex flex-col justify-between h-full"},rl={class:"px-6 py-4 overflow-y-auto"},al={class:"actions p-6"},Me={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(p,{emit:a}){return(r,t)=>{const b=Ne;return v(),T("div",nl,[y("div",rl,[ho(r.$slots,"default")]),y("div",al,[o(b,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:t[0]||(t[0]=s=>a("emit:clearForm"))}),o(b,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:t[1]||(t[1]=s=>a("emit:preview"))})])])}}},sl=ve("sd-stores-inner",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=le().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,document_type:X.INNER,document_sub_type:ee.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:re.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:k.withMessage("Поле не должен быть пустым",x)},content:{required:k.withMessage("Поле не должен быть пустым",x)},__departments:{required:k.withMessage("Поле не должен быть пустым",x)},__approvers:{},__signers:{required:k.withMessage("Поле не должен быть пустым",x)}}}},actions:{async actionCreateDocument(p){let a={...p,type:fo,sub_type:fo};this.buttonLoading=!0;const{response:r,error:t}=await xe(Ue,a);return r?(this.buttonLoading=!1,Promise.resolve(r)):Promise.reject(t)},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__approvers=await W(a.approvers),this.model.__signers=await W(a.signers),this.model.__departments=await tt(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),il={class:"font-semibold text-xl"},Se={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(p,{emit:a}){const t=oo(p,"modelValue"),{t:b}=te();return(s,l)=>{const u=Ne,n=ht;return v(),K(n,{modelValue:e(t),"onUpdate:modelValue":l[1]||(l[1]=_=>He(t)?t.value=_:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[y("span",il,B(e(b)("preview")),1)]),content:d(()=>[ho(s.$slots,"content")]),footer:d(()=>[o(u,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(u,{label:p.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:p.sendButtonLoading,onClick:l[0]||(l[0]=_=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},_r={__name:"InnerForm",props:{formType:{type:String,default:z}},setup(p){const a=p,r=le(),t=sl();De();const b=de(),s=Q(!1);Q(null);const{t:l}=te(),u=se(),n=ie(),_=Z(t.rules,t.model),h=async()=>{await _.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.departments=[],t.model.departments=t.model.__departments.map(m=>m.id),t.model.files=[],t.model.files=t.model.__files.map(m=>({id:m.id})),t.model.journal=re.INNER,t.model.sender=r.currentUser.top_level_department.id,t.model.approvers=oe(t.model.__approvers),t.model.signers=oe(t.model.__signers),t.model.document_type=n.params.document_type,t.model.document_sub_type=n.params.document_sub_type,t.model.receiver&&delete t.model.receiver)},M=()=>{a.formType===z?O():P()},O=async()=>{const w=await t.actionCreateDocument(t.model);await b.actionCountList(),w?(s.value=!1,A(null,l("document-sent"),N.SUCCESS),await u.replace({name:Te,query:{document_type:X.INNER}})):A(null,l("error-occurred"),N.ERROR)},P=async()=>{await t.actionUpdateDocument({id:n.params.id,body:t.model}),await b.actionCountList(),A(null,l("document-sent"),N.SUCCESS),await u.replace({name:Ee,params:{id:n.params.id,document_type:X.INNER,document_sub_type:ee.SERVICE_LETTER}})},D=()=>{console.log("Clear Form")},E=w=>{t.model.__files=[],w.forEach(m=>{t.model.__files.push(m)})};return to(async()=>{n.params.id&&await t.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Ae(t.model)}),(w,m)=>{const S=ke,i=ue,c=Pe,g=ce;return e(t).detailLoading?(v(),K(S,{key:0})):(v(),T(J,{key:1},[o(e($e),{title:a.formType===e(z)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[o(Me,{"onEmit:preview":h,"onEmit:clearForm":D},{default:d(()=>[o(g,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(jo,{modelValue:e(_).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(_).__departments.$model=f),error:e(_).__departments},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(c,{modelValue:e(_).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(_).short_description.$model=f),error:e(_).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(_).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=f=>e(_).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(_).__signers.$model=f),error:e(_).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(_).content.$model,"onUpdate:modelValue":m[4]||(m[4]=f=>e(_).content.$model=f),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":E},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=f=>s.value=f),"send-button-loading":e(t).buttonLoading,"onEmit:send":M},{content:d(()=>{var f,$;return[o(Yo,{"compose-model":{...e(t).model,signers:e(t).model.__signers,approvers:e(t).model.__approvers,author:e(t).model.__signers[0],sender:{name:($=(f=e(r).currentUser)==null?void 0:f.top_level_department)==null?void 0:$.name},receiver:{departments:e(t).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},dl=ve("sd-store-application",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=le().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:k.withMessage("Поле не должен быть пустым",x)},__curator:{required:k.withMessage("Поле не должен быть пустым",x)},__approvers:{required:k.withMessage("Поле не должен быть пустым",x)},__signers:{}}}},actions:{async actionCreateDocument(p){let a={...p};this.buttonLoading=!0;const{response:r,error:t}=await xe(Ue,a);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__approvers=await W(a.approvers),this.model.__signers=await W(a.signers.filter(r=>r.type===Oe.SIGNER)),this.model.__curator=await Le([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),$o=ve("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:le().currentUser.company.id,curator:null,document_type:X.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:re.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:k.withMessage("Поле не должен быть пустым",x)},register_date:{required:k.withMessage("Поле не должен быть пустым",x)},content:{required:k.withMessage("Поле не должен быть пустым",x)},__negotiators:{required:k.withMessage("Поле не должен быть пустым",x)},__curator:{required:k.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__signers=await W(a.signers.filter(r=>r.type!==Oe.NEGOTIATOR)),this.model.__negotiators=await W(a.signers.filter(r=>r.type===Oe.NEGOTIATOR)),this.model.__approvers=await W(a.approvers),this.model.__curator=await Le([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),qr={__name:"ApplicationForm",props:{formType:{type:String,default:z}},setup(p){const a=p,r=le(),t=dl();De();const b=de();$o();const s=Q(!1);Q(null);const{t:l}=te(),u=se(),n=ie(),_=Z(t.rules,t.model),h=async()=>{var m,S,i,c,g;await _.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.signers=[{user:(m=r==null?void 0:r.currentUser)==null?void 0:m.id}],t.model.sender=(i=(S=r==null?void 0:r.currentUser)==null?void 0:S.top_level_department)==null?void 0:i.id,t.model.curator=(g=(c=t==null?void 0:t.model)==null?void 0:c.__curator)==null?void 0:g.user_id,t.model.journal=re.APPLICATION,t.model.document_type=n.params.document_type,t.model.document_sub_type=n.params.document_sub_type,t.model.approvers=oe(t.model.__approvers))},M=async()=>{},O=()=>{a.formType===z?P():D()},P=async()=>{const w=await t.actionCreateDocument(t.model);await b.actionCountList(),w?(s.value=!1,A(null,l("document-sent"),N.SUCCESS),await u.replace({name:Te,query:{document_type:X.APPLICATION}})):A(null,l("error-occurred"),N.ERROR)},D=async()=>{await t.actionUpdateDocument({id:n.params.id,body:t.model}),await b.actionCountList(),A(null,l("document-sent"),N.SUCCESS),await u.replace({name:Ee,params:{id:n.params.id,document_type:X.APPLICATION,document_sub_type:ee.LABOR_LEAVE}})},E=w=>{t.model.__files=[],w.forEach(m=>{t.model.__files.push(m)})};return to(async()=>{n.params.id&&await t.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Ae(t.model)}),(w,m)=>{const S=ke,i=ue,c=ce;return e(t).detailLoading?(v(),K(S,{key:0})):(v(),T(J,{key:1},[o(e($e),{title:a.formType===e(z)?"create-sd-application":"update-sd-application"},{content:d(()=>[o(Me,{"onEmit:preview":h,"onEmit:clearForm":M},{default:d(()=>[o(c,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=g=>e(_).__curator.$model=g),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(_).__approvers.$model,"onUpdate:modelValue":m[1]||(m[1]=g=>e(_).__approvers.$model=g),error:e(_).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":m[2]||(m[2]=g=>e(_).__signers.$model=g),disabled:"",label:"signers",placeholder:e(r).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(_).content.$model,"onUpdate:modelValue":m[3]||(m[3]=g=>e(_).content.$model=g),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":E},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=g=>s.value=g),"send-button-loading":e(t).buttonLoading,"onEmit:send":O},{content:d(()=>[o(Ho,{"compose-model":{...e(t).model,curator:e(t).model.__curator,author:a.formType===e(z)?e(r).currentUser:e(t).model.__signers[0].user,signers:a.formType===e(z)?[e(r).currentUser]:e(t).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},cl=ve("sd-notice-store",{state:()=>(le(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:X.NOTICE,document_sub_type:ee.BUSINESS_TRIP,journal:re.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:k.withMessage("Поле не должен быть пустым",x)},start_date:{required:k.withMessage("Поле не должен быть пустым",x)},route:{required:k.withMessage("Поле не должен быть пустым",x)},content:{required:k.withMessage("Поле не должен быть пустым",x)},__companies:{required:k.withMessage("Поле не должен быть пустым",x)},__curator:{required:k.withMessage("Поле не должен быть пустым",x)},__employees:{required:k.withMessage("Поле не должен быть пустым",x)},__signers:{required:k.withMessage("Поле не должен быть пустым",x)},__tags:{required:k.withMessage("Поле не должен быть пустым",x)},short_description:{required:k.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,a=!1){try{this.detailLoading=!0;const{data:r}=await be(p);he(this.model,r),this.model.__companies=[],this.model.__curator=await Le([],r.curator.id,!1),this.model.__employees=await W(r.notices),a?(this.model.__approvers=await W(r.approvers.filter(t=>{var b,s;return((b=t==null?void 0:t.user)==null?void 0:b.id)!==((s=r==null?void 0:r.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await W(r.approvers),this.model.__signers=await W(r.signers),this.model.__companies=await _o(r.notices[0].destinations),this.model.__tags=await no(r.tags),this.model.start_date=r.notices[0].start_date,this.model.end_date=r.notices[0].end_date,this.model.__tags=r.tags,this.model.route=r.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(p,a){try{this.detailLoading=!0;const{data:r}=await be(p),t=await be(a);he(this.model,r),this.model.__companies=[],this.model.__curator=await Le([],r.curator.id,!1),this.model.__employees=await W(t.data.notices),this.model.__approvers=await W(r.approvers),this.model.__signers=await W(r.signers),this.model.__companies=await _o(t.data.notices[0].destinations),this.model.__tags=await no(r.tags),this.model.start_date=t.data.notices[0].start_date,this.model.end_date=t.data.notices[0].end_date,this.model.__tags=r.tags,this.model.route=t.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),ul={class:"flex w-full gap-x-4"},fr={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:z}},setup(p){const a=p,{t:r}=te(),t=ie(),b=se(),s=le(),l=cl(),u=de();De();const n=Z(l.rules,l.model),_=Q(!1),h=ne(()=>{const i=a.formType===z,c=t.params.document_sub_type;return c===ee.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":c===ee.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),M=ne(()=>{var i,c;return t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((i=t==null?void 0:t.query)==null?void 0:i.compose_id)&&((c=t==null?void 0:t.query)==null?void 0:c.document_sub_type)===ee.BUSINESS_TRIP}),O=ne(()=>{var i;return!!(t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((i=l==null?void 0:l.model)!=null&&i.trip_notice_id))});Eo(()=>l.model.__tags,i=>{if(a.formType===z)if(i&&i.length){let c=`${i.map(g=>g.name_uz).join(", ")} yuzasidan`;l.model.short_description=c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()}else l.model.short_description=null});const P=async()=>{var c,g,f,$,V;await n.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.approvers=oe(l.model.__approvers),l.model.signers=oe(l.model.__signers),l.model.curator=(g=(c=l==null?void 0:l.model)==null?void 0:c.__curator)==null?void 0:g.user_id,l.model.journal=t.params.document_type===X.DECREE||t.params.document_type===X.ORDER?re.ORDERS_PROTOCOLS:re.INNER,l.model.company=s.currentUser.company.id,l.model.notices=l.model.__employees.map(L=>({start_date:l.model.start_date,end_date:l.model.end_date,user:L.id,route:l.model.route,companies:l.model.__companies.map(q=>q.id)})),l.model.sender=($=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:$.id,l.model.tags=l.model.__tags.map(L=>({id:L.id})),l.model.files=l.model.__files.map(L=>({id:L.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,M.value&&(l.model.trip_notice_id=(V=t==null?void 0:t.query)==null?void 0:V.compose_id),_.value=!0)},D=()=>{},E=i=>{l.model.__files=[],i.forEach(c=>{l.model.__files.push(c)})},w=async()=>{M.value&&(l.model.notices=[]);const i=await l.actionCreateDocument(l.model);await u.actionCountList(),i?(_.value=!1,A(null,r("document-sent"),N.SUCCESS),await b.replace({name:Te,query:{document_type:t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?X.DECREE:t.params.document_sub_type===ee.BUSINESS_TRIP_ORDER_LOCAL?X.ORDER:X.NOTICE}})):A(null,r("error-occurred"),N.ERROR)},m=async()=>{(M.value||O.value)&&(l.model.notices=[]),await l.actionUpdateDocument({id:t.params.id,body:l.model}),await u.actionCountList(),A(null,r("changed"),N.SUCCESS),await b.replace({name:Ee,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},S=()=>{a.formType===z?w():m()};return Je(async()=>{t.params.id&&t.query.trip_notice_id&&t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?await l.actionGetDocumentDetailForUpdateForCustomUse(t.params.id,t.query.trip_notice_id):t.params.id?await l.actionGetDocumentDetailForUpdate(t.params.id):M.value&&await l.actionGetDocumentDetailForUpdate(t.query.compose_id,!0)}),Re(()=>{Ae(l.model)}),(i,c)=>{const g=ke,f=ue,$=ze,V=Xe,L=Pe,q=ce;return e(l).detailLoading?(v(),K(g,{key:0})):(v(),T(J,{key:1},[o(e($e),{title:h.value},{content:d(()=>[o(Me,{"onEmit:preview":P,"onEmit:clearForm":D},{default:d(()=>[o(q,null,{default:d(()=>[o(f,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=C=>e(n).__curator.$model=C),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":c[1]||(c[1]=C=>e(n).__employees.$model=C),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:M.value||O.value},null,8,["modelValue","error","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(Bo,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":c[2]||(c[2]=C=>e(n).__companies.$model=C),error:e(n).__companies,"text-truncate":"",disabled:M.value||O.value},null,8,["modelValue","error","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(io,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":c[3]||(c[3]=C=>e(n).__tags.$model=C),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:C})=>[me(B(C.name),1)]),option:d(({value:C})=>[o(e(we),{title:C.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[y("div",ul,[o($,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[c[4]||(c[4]=C=>e(n).start_date.$model=C),c[5]||(c[5]=C=>e(n).start_date.$model=e(fe)(C))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:M.value||O.value},null,8,["modelValue","error","min-date","disabled"]),o($,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[c[6]||(c[6]=C=>e(n).end_date.$model=C),c[7]||(c[7]=C=>e(n).end_date.$model=e(fe)(C))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:M.value||O.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(V,{modelValue:e(n).route.$model,"onUpdate:modelValue":c[8]||(c[8]=C=>e(n).route.$model=C),error:e(n).route,options:e(Co),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:M.value||O.value},null,8,["modelValue","error","options","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":c[9]||(c[9]=C=>e(l).model.__approvers=C),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":c[10]||(c[10]=C=>e(n).__signers.$model=C),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(L,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":c[11]||(c[11]=C=>e(n).short_description.$model=C),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(n).content.$model,"onUpdate:modelValue":c[12]||(c[12]=C=>e(n).content.$model=C),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":E},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:_.value,"onUpdate:modelValue":c[13]||(c[13]=C=>_.value=C),"send-button-loading":e(l).buttonLoading,"onEmit:send":S},{content:d(()=>[e(t).params.document_sub_type===e(ee).BUSINESS_TRIP_DECREE_LOCAL?(v(),K(e(ol),{key:0,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):e(t).params.document_sub_type===e(ee).BUSINESS_TRIP_ORDER_LOCAL?(v(),K(e(Ko),{key:1,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):(v(),K(e(Qo),{key:2,"compose-model":e(l).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},br={__name:"OrderForm",props:{formType:{type:String,default:z}},setup(p){const a=p,r=$o(),t=de(),b=le(),s=ie(),l=se(),u=Z(r.rules,r.model),{t:n}=te(),_=Q(!1),h=async()=>{var m,S,i,c;await u.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=oe(r.model.__approvers),r.model.curator=(S=(m=r==null?void 0:r.model)==null?void 0:m.__curator)==null?void 0:S.user_id,r.model.sender=(c=(i=b==null?void 0:b.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,r.model.files=r.model.__files.map(g=>({id:g.id})),r.model.document_type=s.params.document_type,r.model.document_sub_type=s.params.document_sub_type,r.model.journal=re.ORDERS_PROTOCOLS,r.model.register_date=fe(r.model.register_date),r.model.__negotiators.forEach(g=>{r.model.signers.push(g.hasOwnProperty("user")?{id:g.id,user:g.user.id,type:Oe.NEGOTIATOR}:{user:g.id,type:Oe.NEGOTIATOR})}),s.query.compose_id&&(r.model.trip_notice_id=s.query.compose_id),_.value=!0)},M=()=>{},O=async()=>{try{const w=await r.actionCreateDocument(r.model);await t.actionCountList(),w&&(_.value=!1,A(null,n("document-sent"),N.SUCCESS),await l.replace({name:Te,query:{document_type:X.ORDER}}))}catch{A(null,n("error-occurred"),N.ERROR)}},P=async()=>{try{const w=await r.actionUpdateDocument({id:s.params.id,body:r.model});await t.actionCountList(),A(null,n("changed"),N.SUCCESS),await l.replace({name:Ee,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{A(null,n("error-occurred"),N.ERROR)}},D=()=>{a.formType===z?O():P()},E=w=>{r.model.__files=[],w.forEach(m=>{r.model.__files.push(m)})};return to(async()=>{s.params.id&&await r.actionGetDocumentDetailForUpdate(s.params.id)}),Re(()=>{Ae(r.model)}),(w,m)=>{const S=ke,i=ue,c=Pe,g=ze,f=ce;return e(r).detailLoading?(v(),K(S,{key:0})):(v(),T(J,{key:1},[o(e($e),{title:a.formType===e(z)?"create-order":"update-order"},{content:d(()=>[o(Me,{"onEmit:preview":h,"onEmit:clearForm":M},{default:d(()=>[o(f,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=$=>e(u).__curator.$model=$),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(c,{modelValue:e(u).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=$=>e(u).register_number.$model=$),error:e(u).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(g,{modelValue:e(u).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=$=>e(u).register_date.$model=$),error:e(u).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=$=>e(r).model.__approvers=$),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(u).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=$=>e(u).__negotiators.$model=$),error:e(u).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(u).content.$model,"onUpdate:modelValue":m[5]||(m[5]=$=>e(u).content.$model=$),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":E},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:_.value,"onUpdate:modelValue":m[6]||(m[6]=$=>_.value=$),"send-button-loading":e(r).buttonLoading,"onEmit:send":D},{content:d(()=>[o(e(Jo),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},pl=ve("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:k.withMessage("Поле не должен быть пустым",x)},__curator:{required:k.withMessage("Поле не должен быть пустым",x)},__signers:{required:k.withMessage("Поле не должен быть пустым",x)},short_description:{required:k.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);he(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await W(a.approvers),this.model.__signers=await W(a.signers)}catch{}finally{this.detailLoading=!1}}}}),gr={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:z}},setup(p){const a=p,{t:r}=te(),t=ie(),b=se(),s=le(),l=pl(),u=de();De();const n=Q(!1),_=Z(l.rules,l.model),h=async()=>{var m,S,i,c;await _.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=oe(l.model.__approvers),l.model.signers=oe(l.model.__signers),l.model.curator=(S=(m=l==null?void 0:l.model)==null?void 0:m.__curator)==null?void 0:S.user_id,l.model.journal=re.INNER,l.model.company=s.currentUser.company.id,l.model.sender=(c=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,l.model.files=l.model.__files.map(g=>({id:g.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,n.value=!0)},M=()=>{},O=w=>{l.model.__files=[],w.forEach(m=>{l.model.__files.push(m)})},P=async()=>{const w=await l.actionCreateDocument(l.model);await u.actionCountList(),w?(n.value=!1,A(null,r("document-sent"),N.SUCCESS),await b.replace({name:Te,query:{document_type:X.NOTICE}})):A(null,r("error-occurred"),N.ERROR)},D=async()=>{await l.actionUpdateDocument({id:t.params.id,body:l.model}),await u.actionCountList(),A(null,r("changed"),N.SUCCESS),await b.replace({name:Ee,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},E=()=>{a.formType===z?P():D()};return Je(async()=>{t.params.id&&await l.actionGetDocumentDetailForUpdate(t.params.id)}),Re(()=>{Ae(l.model)}),(w,m)=>{const S=ke,i=ue,c=Pe,g=ce;return e(l).detailLoading?(v(),K(S,{key:0})):(v(),T(J,{key:1},[o(e($e),{title:a.formType===e(z)?"create-notice":"update-notice"},{content:d(()=>[o(Me,{"onEmit:preview":h,"onEmit:clearForm":M},{default:d(()=>[o(g,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(_).__curator.$model=f),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(c,{modelValue:e(_).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(_).short_description.$model=f),error:e(_).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=f=>e(l).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(_).__signers.$model=f),error:e(_).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(_).content.$model,"onUpdate:modelValue":m[4]||(m[4]=f=>e(_).content.$model=f),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:n.value,"onUpdate:modelValue":m[5]||(m[5]=f=>n.value=f),"send-button-loading":e(l).buttonLoading,"onEmit:send":E},{content:d(()=>[o(e(Xo),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ml=ve("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:k.withMessage("Поле не должен быть пустым",x)},__curator:{required:k.withMessage("Поле не должен быть пустым",x)},__signers:{required:k.withMessage("Поле не должен быть пустым",x)},short_description:{required:k.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(p){const a={...p};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:r,error:t}=await xe(Ue,a);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:a}){const r={...a};delete r.bookings,delete r.notices,delete r.trip_plans;try{this.buttonLoading=!0;const{data:t}=await Ve({id:p,body:r});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,a){try{this.detailLoading=!0;const{data:r}=await be(p);he(this.model,r),this.model.__curator=await Le([],r.curator.id,!1),this.model.__approvers=await W(r.approvers),this.model.__signers=await W(r.signers)}catch{}finally{this.detailLoading=!1}}}}),wr={__name:"DecreeForm",props:{formType:{type:String,default:z}},setup(p){const a=p,{t:r}=te(),t=ie(),b=se(),s=le(),l=de();De();const u=Q(!1),n=ml(),_=ao(),h=Z(n.rules,n.model),M=async()=>{var i,c,g,f;await h.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=oe(n.model.__approvers),n.model.signers=oe(n.model.__signers),n.model.curator=(c=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:c.user_id,n.model.journal=re.ORDERS_PROTOCOLS,n.model.company=s.currentUser.company.id,n.model.sender=(f=(g=s==null?void 0:s.currentUser)==null?void 0:g.top_level_department)==null?void 0:f.id,n.model.files=n.model.__files.map($=>({id:$.id})),n.model.document_type=t.params.document_type,n.model.document_sub_type=t.params.document_sub_type,t.query.compose_id&&(n.model.trip_notice_id=t.query.compose_id),u.value=!0)},O=()=>{},P=S=>{n.model.__files=[],S.forEach(i=>{n.model.__files.push(i)})},D=async()=>{const S=await n.actionCreateDocument(n.model);await l.actionCountList(),S?(u.value=!1,A(null,r("document-sent"),N.SUCCESS),await b.replace({name:Te,query:{document_type:t.params.document_type}})):A(null,r("error-occurred"),N.ERROR)},E=async()=>{await n.actionUpdateDocument({id:t.params.id,body:n.model}),await l.actionCountList(),A(null,r("changed"),N.SUCCESS),await b.replace({name:Ee,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},w=()=>{a.formType===z?D():E()},m=async S=>{const{data:i}=await _.actionGetDocumentDetail(S);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return Je(async()=>{a.formType===z&&t.query.compose_id?await m(t.query.compose_id):a.formType===Qe&&t.query.trip_notice_id&&t.params.id?(await n.actionGetDocumentDetailForUpdate(t.params.id,null),await m(t.query.trip_notice_id)):a.formType===Qe&&t.params.id&&await n.actionGetDocumentDetailForUpdate(t.params.id,null)}),Re(()=>{Ae(n.model)}),(S,i)=>{const c=ke,g=ue,f=Pe,$=ce;return e(n).detailLoading?(v(),K(c,{key:0})):(v(),T(J,{key:1},[o(e($e),{title:a.formType===e(z)?"create-decree":"update-decree"},{content:d(()=>[o(Me,{"onEmit:preview":M,"onEmit:clearForm":O},{default:d(()=>[o($,null,{default:d(()=>[o(g,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(h).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=V=>e(h).__curator.$model=V),error:e(h).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:d(()=>[o(f,{modelValue:e(h).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=V=>e(h).short_description.$model=V),error:e(h).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=V=>e(n).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(h).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=V=>e(h).__signers.$model=V),error:e(h).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(g,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(h).content.$model,"onUpdate:modelValue":i[4]||(i[4]=V=>e(h).content.$model=V),error:e(h).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":P},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:u.value,"onUpdate:modelValue":i[5]||(i[5]=V=>u.value=V),"send-button-loading":e(n).buttonLoading,"onEmit:send":w},{content:d(()=>[o(e(yo),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},_l=ve("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:k.withMessage("Поле не должен быть пустым",x)},start_date:{required:k.withMessage("Поле не должен быть пустым",x)},__curator:{required:k.withMessage("Поле не должен быть пустым",x)},__signers:{required:k.withMessage("Поле не должен быть пустым",x)},__user:{required:k.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await be(p);return he(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await W(a.approvers),this.model.__signers=await W(a.signers),this.model.__user=await We("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),hr={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:z}},setup(p){const a=p,r=ie(),t=se(),b=le(),s=_l();ao();const l=de(),{t:u}=te(),n=Z(s.rules,s.model),_=Q(!1),h=Q([]),M=ne(()=>a.formType===z?"create-poa":"update-poa"),O=ne(()=>s.model.start_date?new Date(s.model.start_date):new Date),P=async()=>{var c,g,f,$,V,L,q,C,U,I,R,G,pe,F,H,j,Ge,Ie,co,uo;if(await n.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=oe(s.model.__approvers),s.model.signers=oe(s.model.__signers),s.model.curator=(g=(c=s==null?void 0:s.model)==null?void 0:c.__curator)==null?void 0:g.user_id,s.model.user=($=(f=s==null?void 0:s.model)==null?void 0:f.__user)==null?void 0:$.id,s.model.journal=re.POWER_OF_ATTORNEY,s.model.company=(L=(V=b.currentUser)==null?void 0:V.company)==null?void 0:L.id,s.model.sender=(C=(q=b==null?void 0:b.currentUser)==null?void 0:q.top_level_department)==null?void 0:C.id,s.model.document_type=r.params.document_type,s.model.document_sub_type=r.params.document_sub_type,s.model.content=".",s.model.parent=(I=(U=s.model)==null?void 0:U.__parent)==null?void 0:I.id,!((G=(R=s==null?void 0:s.model)==null?void 0:R.__user)!=null&&G.passport_seria||(F=(pe=s==null?void 0:s.model)==null?void 0:pe.__user)!=null&&F.passport_number||(j=(H=s==null?void 0:s.model)==null?void 0:H.__user)!=null&&j.passport_issue_date||(Ie=(Ge=s==null?void 0:s.model)==null?void 0:Ge.__user)!=null&&Ie.passport_issued_by)){A(null,`${(uo=(co=s.model)==null?void 0:co.__user)==null?void 0:uo.full_name}: ${u("passport-details-error")}`,N.WARNING);return}_.value=!0}},D=()=>{},E=async()=>{const i=await s.actionCreateDocument(s.model);await l.actionCountList(),i?(_.value=!1,A(null,u("document-sent"),N.SUCCESS),await t.replace({name:Te,query:{document_type:X.POWER_OF_ATTORNEY}})):A(null,u("error-occurred"),N.ERROR)},w=async()=>{await s.actionUpdateDocument({id:r.params.id,body:s.model}),await l.actionCountList(),A(null,u("changed"),N.SUCCESS),await t.replace({name:Ee,params:{id:r.params.id,document_type:r.params.document_type,document_sub_type:r.params.document_sub_type}})},m=()=>{a.formType===z?E():w()},S=async i=>{const{data:c}=await nt({user:i.id,document_sub_type:r.params.document_sub_type,status:5});h.value=c.results};return Je(async()=>{if(r.params.id){const i=await s.actionGetDocumentDetailForUpdate(r.params.id);i.parent&&(h.value=[i.parent])}}),Re(()=>{Ae(s.model)}),(i,c)=>{const g=ke,f=ue,$=ze,V=Xe,L=ce;return e(s).detailLoading?(v(),K(g,{key:0})):(v(),T(J,{key:1},[o(e($e),{title:M.value},{content:d(()=>[o(Me,{"onEmit:preview":P,"onEmit:clearForm":D},{default:d(()=>[o(L,null,{default:d(()=>[o(f,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=q=>e(n).__curator.$model=q),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(n).__user.$model,"onUpdate:modelValue":c[1]||(c[1]=q=>e(n).__user.$model=q),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":c[2]||(c[2]=q=>S(q))},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o($,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[c[3]||(c[3]=q=>e(n).start_date.$model=q),c[4]||(c[4]=q=>e(n).start_date.$model=e(fe)(q))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o($,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[c[5]||(c[5]=q=>e(n).end_date.$model=q),c[6]||(c[6]=q=>e(n).end_date.$model=e(fe)(q))],error:e(n).end_date,"min-date":O.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":c[7]||(c[7]=q=>e(s).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":c[8]||(c[8]=q=>e(n).__signers.$model=q),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(V,{modelValue:e(s).model.__parent,"onUpdate:modelValue":c[9]||(c[9]=q=>e(s).model.__parent=q),options:h.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:_.value,"onUpdate:modelValue":c[10]||(c[10]=q=>_.value=q),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:d(()=>[o(Zo,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ql={class:"base-stepper-component flex items-center select-none"},fl=["onClick"],bl={key:0,class:"flex h-1 bg-greyscale-200 w-8"},gl={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(p,{emit:a}){const{t:r}=te(),t=b=>{a("emit:stepClick",b)};return(b,s)=>{const l=ge;return v(),T("div",ql,[(v(!0),T(J,null,qe(p.items,(u,n)=>(v(),T("div",{key:u.id,class:"flex items-center"},[y("div",{class:Fe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",u.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:_=>t(u)},[o(l,{icon:u.icon,class:Fe(u.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),y("span",null,B(e(r)(u.label)),1)],10,fl),n<p.items.length-1?(v(),T("div",bl)):ae("",!0)]))),128))])}}},Ze=ve("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:k.withMessage("Поле не должен быть пустым",x)}},rules:{content:{required:k.withMessage("Поле не должен быть пустым",x)},__curator:{required:k.withMessage("Поле не должен быть пустым",x)},__signers:{required:k.withMessage("Поле не должен быть пустым",x)},short_description:{required:k.withMessage("Поле не должен быть пустым",x)},__groups:{$each:k.forEach({__users:{required:k.withMessage("Поле не должен быть пустым",x)},__tags:{required:k.withMessage("Поле не должен быть пустым",x)},__regions:{required:k.withMessage("Поле не должен быть пустым",x)},__start_date:{required:k.withMessage("Поле не должен быть пустым",x)},__end_date:{required:k.withMessage("Поле не должен быть пустым",x)},__company:{required:k.withMessage("Поле не должен быть пустым",x)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:k.forEach({users:{required:k.withMessage("Поле не должен быть пустым",x)},text:{required:k.withMessage("Поле не должен быть пустым",x)}})}},booking_model:{bookings:[{type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:k.forEach({segments:{$each:k.forEach({departure_city:{required:k.withMessage("Поле не должен быть пустым",x)},arrival_city:{required:k.withMessage("Поле не должен быть пустым",x)},date:{required:k.withMessage("Поле не должен быть пустым",x)},time:{required:k.withMessage("Поле не должен быть пустым",x)},segment_class:{required:k.withMessage("Поле не должен быть пустым",x)}})},passengers:{required:k.withMessage("Поле не должен быть пустым",x)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:So,active:!0,value:Ke},{id:2,label:"work-plan",icon:po,active:!1,value:lo},{id:3,label:"route",icon:Lo,active:!1,value:so},{id:4,label:"decree",icon:po,active:!0,value:eo}],routeTabItems:[{id:1,title:"airplane",icon:Ro,value:Ye},{id:2,title:"train",icon:Do,value:at},{id:3,title:"taxi",icon:To,value:vo}],routeTypeTabItems:[{id:1,title:"there-back",icon:Mo,value:_e},{id:2,title:"complex-route",icon:Oo,value:ro},{id:3,title:"one-way",icon:Po,value:st}]}),actions:{async actionCreateDocument(p){const a=qo(p);this.buttonLoading=!0;const{response:r,error:t}=await xe(Ue,a);return r?(this.buttonLoading=!1,await de().actionCountList(),Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:a}){const r=await qo(a);try{this.buttonLoading=!0;const{data:t}=await Ve({id:p,body:r});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{await de().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){var a,r;try{this.detailLoading=!0;const{data:t}=await be(p),b=await rt(t.id);this.decreeModel=(r=(a=b==null?void 0:b.data)==null?void 0:a.to_composes[0])==null?void 0:r.from_compose,he(this.model,t),this.model.__curator=await Le([],t.curator.id,!1),this.model.__signers=await W(t.signers),this.model.__approvers=await W(t.approvers);const s=Object.values(t.notices.reduce((l,u)=>{const n=u.group_id;return l[n]=l[n]||{group_id:n,items:[]},l[n].items.push(u),l},{}));this.model.__groups=await Promise.all(s.map(async l=>{const u=await Promise.all(l.items.map(async P=>({...await W([],P.user.id,!1),business_trip_id:P.id}))),n=await no(l.items[0].tags),_=await We("regions",l.items[0].locations),h=await We("companies",[],!1,l.items[0].sender_company),M=l.items[0].start_date,O=l.items[0].end_date;return{__users:u,__tags:n,__regions:_,__start_date:M,__end_date:O,__company:h}})),this.trip_plan_model.trip_plans=await Promise.all(t.trip_plans.map(async(l,u)=>({...l,users:await W(l.users)}))),this.booking_model.bookings=await Promise.all(t.bookings.map(async l=>({type:l.type,route:l.route,segments:await Promise.all(l.segments.map(async u=>({departure_city:await We("regions",[],!1,u.departure_city.id),arrival_city:await We("regions",[],!1,u.arrival_city.id),segment_class:await it.find(n=>n.value===u.segment_class),date:fe(u.departure_date),time:await et(u.departure_date,u.departure_end_date)}))),passengers:await W(l.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null})},actionDeleteGroupBlock(p){this.model.__groups.splice(p,1)},async actionStepClick(p,a,r){await p.replace({query:{...a.query,step:r}}),this.stepperItems.forEach(b=>b.active=b.value===r),await No();const t=document.querySelector(".document-view-aside");t&&t.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(p){this.trip_plan_model.trip_plans.splice(p,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(p){this.booking_model.bookings.splice(p,1)},actionChangeRouteSegment(p,a){const r=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=p===_e?[r(),r()]:[r()]},async actionAddRouteLine(p){this.booking_model.bookings[p].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(p,a){this.booking_model.bookings[p].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),wl={class:"trip-info-components"},hl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},yl={class:"flex justify-between"},vl={class:"text-base text-primary-900 font-semibold mb-1"},kl=["onClick"],$l={class:"flex align-center gap-x-4"},xl={class:"flex w-full gap-x-4"},Vl={class:"text-base text-primary-900 font-semibold mb-2"},Ul={class:"flex items-center justify-between"},wo={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},setup(p,{expose:a}){const r=ie(),t=se(),b=Ze(),s=De(),{t:l}=te(),u=Z(b.rules,b.model),n=Q(!1),_=D=>{b.model.__files=[],D.forEach(E=>{b.model.__files.push(E)})},h=()=>{b.actionAddGroupBlock()},M=async D=>{const E=await u.value.$validate();if(n.value=!0,!E){A(null,l("fill-required-fields"),N.WARNING);return}await b.actionStepClick(t,r,D)},O=(D,E)=>{b.model.__groups[E].__regions=[]},P=(D,E)=>{D.value.forEach(w=>{var m,S,i,c;if(w.id===((c=(i=(S=(m=b.model)==null?void 0:m.__groups[E])==null?void 0:S.__company)==null?void 0:i.region)==null?void 0:c.id)){const g=b.model.__groups[E].__regions.findIndex(f=>f.id===w.id);(g||g===0)&&b.model.__groups[E].__regions.splice(g,1)}})};return a({stepClick:M}),(D,E)=>{const w=ue,m=Pe,S=ge,i=Xe,c=io,g=ze,f=ce,$=Ne;return v(),T("div",wl,[o(f,null,{default:d(()=>[o(w,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":E[0]||(E[0]=V=>e(u).__curator.$model=V),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(w,{"col-class":"w-1/2"},{default:d(()=>[o(m,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":E[1]||(E[1]=V=>e(u).short_description.$model=V),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(w,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[(v(!0),T(J,null,qe(e(b).model.__groups,(V,L)=>(v(),T("div",hl,[y("div",yl,[y("span",vl,B(e(l)("group"))+"-"+B(L+1),1),L!==0?(v(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:q=>e(b).actionDeleteGroupBlock(L)},[o(S,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,kl)):ae("",!0)]),o(f,null,{default:d(()=>[o(w,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:V.__users,"onUpdate:modelValue":q=>V.__users=q,error:e(u).__groups.$each.$response.$data[L].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(w,{"col-class":"w-1/2"},{default:d(()=>[y("div",$l,[o(i,{modelValue:V.__company,"onUpdate:modelValue":q=>V.__company=q,error:e(u).__groups.$each.$response.$data[L].__company,options:e(s).filialList,"onUpdate:options":E[2]||(E[2]=q=>e(s).filialList=q),required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":n.value,class:"w-1/2","onEmit:change":q=>O(q,L)},{option:d(({option:q})=>[o(e(we),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","onEmit:change"]),o(c,{modelValue:V.__regions,"onUpdate:modelValue":q=>V.__regions=q,error:e(u).__groups.$each.$response.$data[L].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":n.value,class:"w-1/2","onEmit:change":q=>P(q,L)},{chip:d(({value:q})=>[me(B(q.name),1)]),option:d(({value:q})=>[o(e(we),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error","onEmit:change"])])]),_:2},1024),o(w,{"col-class":"w-1/2"},{default:d(()=>[o(c,{modelValue:V.__tags,"onUpdate:modelValue":q=>V.__tags=q,error:e(u).__groups.$each.$response.$data[L].__tags,"api-url":"tags","api-params":{document_sub_type:e(r).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":n.value},{chip:d(({value:q})=>[me(B(q.name),1)]),option:d(({value:q})=>[o(e(we),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),o(w,{"col-class":"w-1/2"},{default:d(()=>[y("div",xl,[o(g,{modelValue:V.__start_date,"onUpdate:modelValue":[q=>V.__start_date=q,q=>V.__start_date=e(fe)(q)],error:e(u).__groups.$each.$response.$data[L].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(g,{modelValue:V.__end_date,"onUpdate:modelValue":[q=>V.__end_date=q,q=>V.__end_date=e(fe)(q)],error:e(u).__groups.$each.$response.$data[L].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o($,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:h},null,8,["icon-left"])]),_:1}),o(w,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(b).model.__approvers,"onUpdate:modelValue":E[3]||(E[3]=V=>e(b).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(w,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":E[4]||(E[4]=V=>e(u).__signers.$model=V),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(w,{"col-class":"w-full"},{default:d(()=>[y("div",{class:Fe(["border-[1.5px] rounded-2xl px-5 py-4",n.value&&!e(b).model.content?"border-critic-500":"border-greyscale-200"])},[y("div",Vl,B(e(l)("notice")),1),o(Ce,{modelValue:e(u).content.$model,"onUpdate:modelValue":E[5]||(E[5]=V=>e(u).content.$model=V),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(b).model.__files,"onEmit:fileUpload":_},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),y("div",Ul,[o($,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o($,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:E[6]||(E[6]=V=>M(e(lo)))})])])}}},El={class:"work-plan-component"},Cl={class:"flex flex-col gap-y-3"},Sl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ll={class:"flex justify-between"},Rl={class:"text-base text-primary-900 font-semibold mb-1"},Dl=["onClick"],Tl={class:"flex items-center justify-between mt-10"},Ml={class:"flex items-center gap-x-1"},Ol={__name:"WorkPlan",setup(p,{expose:a}){const{t:r}=te(),t=ie(),b=se(),s=Ze(),l=Z(s.trip_plan_rules,s.trip_plan_model),u=Q(!1),n=ne(()=>{const M=new Set;return s.model.__groups.reduce((O,P)=>P.__users&&Array.isArray(P.__users)?O.concat(P.__users):O,[]).filter(O=>M.has(O.id)?!1:(M.add(O.id),!0))}),_=async M=>{const O=await l.value.$validate();if(u.value=!0,!O){A(null,r("fill-required-fields"),N.WARNING);return}const P=s.trip_plan_model.trip_plans.flatMap(E=>{var w;return(w=E.users)==null?void 0:w.map(m=>m.id)}),D=n.value.filter(E=>!P.includes(E.id));D.length?(A(null,`У следующих сотрудников нет плана работы: ${D==null?void 0:D.map(E=>E.first_name+" "+E.last_name).join(", ")}.`,N.WARNING),A(null,"У всех сотрудников должен быть назначен рабочий план.",N.WARNING)):await s.actionStepClick(b,t,M)},h=()=>{s.actionAddWorkPlanRow(),u.value=!1};return a({stepClick:_}),(M,O)=>{const P=ge,D=ko,E=ue,w=ce,m=Ne;return v(),T("div",El,[y("div",Cl,[(v(!0),T(J,null,qe(e(s).trip_plan_model.trip_plans,(S,i)=>(v(),T("div",Sl,[y("div",Ll,[y("span",Rl,B(e(r)("plan"))+"-"+B(i+1),1),i!==0?(v(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:c=>e(s).actionDeleteWorkPlanRow(i)},[o(P,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Dl)):ae("",!0)]),o(w,null,{default:d(()=>[o(E,{"col-class":"w-1/2"},{default:d(()=>[o(D,{modelValue:S.text,"onUpdate:modelValue":c=>S.text=c,error:e(l).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":u.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(E,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:S.users,"onUpdate:modelValue":c=>S.users=c,options:n.value,error:e(l).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":u.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:h},null,8,["icon-left"]),y("div",Tl,[o(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",Ml,[o(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:O[0]||(O[0]=S=>_(e(Ke)))}),o(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:O[1]||(O[1]=S=>_(e(so)))})])])])}}};const Pl={class:"base-time-picker"},Nl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(p){const a=p,r=oo(a,"modelValue"),{t}=te();return(b,s)=>{var n;const l=_t,u=ge;return v(),T("div",Pl,[o(l,{label:a.label,required:a.required},null,8,["label","required"]),o(e(qt),{modelValue:e(r),"onUpdate:modelValue":s[0]||(s[0]=_=>He(r)?r.value=_:null),"time-picker":"",range:p.range,"cancel-text":e(t)("cancel"),"select-text":e(t)("select"),placeholder:e(t)(p.placeholder),ref:"datePicker",class:Fe({"input-error":((n=p.error)==null?void 0:n.$error)&&p.showNestedError})},{"input-icon":d(()=>[o(u,{icon:e(Ao),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Al={class:"route-component flex flex-col gap-y-3"},Il={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Fl={class:"flex items-center justify-between"},jl={class:"flex items-center gap-x-4"},Bl={class:"text-base text-primary-900 font-semibold mb-1"},zl={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Gl={class:"text-xs text-greyscale-900 font-medium"},Wl=["onClick"],Yl=["onClick"],Hl={class:"text-sm text-primary-500 font-semibold"},Kl={class:"flex items-center justify-between mt-10"},Ql={class:"flex items-center gap-x-1"},Jl={__name:"Route",props:{formType:{type:String,default:z}},emits:["emit:onValidateAndSend"],setup(p,{expose:a,emit:r}){const{t}=te(),b=ie(),s=se(),l=Ze(),u=De();le(),de();const n=Z(l.booking_model_rules,l.booking_model);Q(!1);const _=Q(!1),h=ne(()=>{const i=new Set;return l.model.__groups.reduce((c,g)=>g.__users&&Array.isArray(g.__users)?c.concat(g.__users):c,[]).filter(c=>i.has(c.id)?!1:(i.add(c.id),!0))}),M=i=>{l.routeTabItems.forEach(c=>c.active=c.id===i.id)},O=(i,c)=>{l.routeTypeTabItems.forEach(g=>g.active=g.id===i.id),l.actionChangeRouteSegment(i.value,c)},P=async(i,c=!1)=>{var V,L;const g=await n.value.$validate();if(_.value=!0,!g){A(null,t("fill-required-fields"),N.WARNING);return}const f=(V=l.booking_model.bookings)==null?void 0:V.flatMap(q=>{var C;return(C=q.passengers)==null?void 0:C.map(U=>U==null?void 0:U.id)}),$=(L=h.value)==null?void 0:L.filter(q=>!(f!=null&&f.includes(q.id)));$.length?(A(null,`У следующих сотрудников не назначен маршрут: ${$.map(q=>q.first_name+" "+q.last_name).join(", ")}.`,N.WARNING),A(null,"У всех сотрудников должен быть назначен маршрут",N.WARNING)):(c&&r("emit:onValidateAndSend"),await l.actionStepClick(s,b,i))},D=()=>{l.actionAddRouteRow(),_.value=!1},E=(i,c,g,f)=>{f.type===_e&&(l.booking_model.bookings[c].segments[g+1].arrival_city=i)},w=(i,c,g,f)=>{f.type===_e&&(l.booking_model.bookings[c].segments[g+1].departure_city=i)},m=(i,c,g,f)=>{f.type===_e&&(l.booking_model.bookings[c].segments[g+1].segment_class=i)},S=()=>{P(eo,!0)};return a({stepClick:P}),(i,c)=>{const g=Xe,f=ue,$=ze,V=ce,L=Ne;return v(),T("div",Al,[(v(!0),T(J,null,qe(e(l).booking_model.bookings,(q,C)=>(v(),T("div",Il,[y("div",Fl,[y("div",jl,[y("span",Bl,B(e(t)("route"))+"-"+B(C+1),1),o(go,{modelValue:q.route,"onUpdate:modelValue":U=>q.route=U,items:e(l).routeTabItems,"onEmit:onChange":c[0]||(c[0]=U=>M(U))},null,8,["modelValue","onUpdate:modelValue","items"]),o(go,{modelValue:q.type,"onUpdate:modelValue":U=>q.type=U,items:e(l).routeTypeTabItems,"onEmit:onChange":U=>O(U,C)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),C!==0?(v(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:c[1]||(c[1]=(...U)=>e(l).actionDeleteRouteRow&&e(l).actionDeleteRouteRow(...U))},[o(ge,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):ae("",!0)]),y("div",zl,[o(ge,{icon:e(Io),class:"text-warning-500"},null,8,["icon"]),y("span",Gl,B(e(t)("route-warning")),1)]),(v(!0),T(J,null,qe(q.segments,(U,I)=>(v(),T("div",null,[o(V,null,{default:d(()=>[o(f,{"col-class":"w-1/5"},{default:d(()=>[o(g,{modelValue:U.departure_city,"onUpdate:modelValue":R=>U.departure_city=R,error:e(n).bookings.$each.$response.$data[C].segments.$each.$data[I].departure_city,options:e(u).regionsList,"onUpdate:options":c[2]||(c[2]=R=>e(u).regionsList=R),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":_.value,disabled:q.type===e(_e)&&I%2!==0,"onEmit:change":R=>E(R,C,I,q)},{option:d(({option:R})=>[o(e(we),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:d(()=>[o(g,{modelValue:U.arrival_city,"onUpdate:modelValue":R=>U.arrival_city=R,error:e(n).bookings.$each.$response.$data[C].segments.$each.$data[I].arrival_city,options:e(u).regionsList.filter(R=>{var G;return(R==null?void 0:R.id)!=((G=U.departure_city)==null?void 0:G.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":_.value,disabled:q.type===e(_e)&&I%2!==0,"onEmit:change":R=>w(R,C,I,q)},{option:d(({option:R})=>[o(e(we),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:d(()=>[o(g,{modelValue:U.segment_class,"onUpdate:modelValue":R=>U.segment_class=R,error:e(n).bookings.$each.$response.$data[C].segments.$each.$data[I].segment_class,options:q.route===e(vo)?e(dt):q.route===e(Ye)?e(ct):e(ut),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":_.value,translatable:"",disabled:q.type===e(_e)&&I%2!==0,"onEmit:change":R=>m(R,C,I,q)},{option:d(({option:R})=>[o(e(we),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:d(()=>[o($,{modelValue:U.date,"onUpdate:modelValue":[R=>U.date=R,R=>U.date=e(fe)(R)],error:e(n).bookings.$each.$response.$data[C].segments.$each.$data[I].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),o(f,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:d(()=>[o(Nl,{modelValue:U.time,"onUpdate:modelValue":R=>U.time=R,error:e(n).bookings.$each.$response.$data[C].segments.$each.$data[I].time,label:"time",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),q.type===e(ro)&&I!==0?(v(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:R=>e(l).actionDeleteRouteLine(C,I)},[o(ge,{icon:e(je),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Wl)):ae("",!0)]),_:2},1024)]),_:2},1024)]))),256)),q.type===e(ro)?(v(),T("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:U=>e(l).actionAddRouteLine(C)},[o(ge,{icon:e(Be),class:"text-primary-500"},null,8,["icon"]),y("span",Hl,B(e(t)("add-line")),1)],8,Yl)):ae("",!0),o(V,null,{default:d(()=>[o(f,{"col-class":"w-full"},{default:d(()=>[o(Y,{modelValue:q.passengers,"onUpdate:modelValue":U=>q.passengers=U,options:h.value,error:e(n).bookings.$each.$response.$data[C].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),o(L,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:D},null,8,["icon-left"]),y("div",Kl,[o(L,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",Ql,[o(L,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:c[3]||(c[3]=q=>P(e(lo)))}),o(L,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(l).buttonLoading,onClick:S},null,8,["loading"])])])])}}},Xl={class:"decree-component"},Zl={class:"flex items-center justify-between mt-10"},en={class:"flex items-center gap-x-1"},on={__name:"Decree",props:{formType:{type:String,default:z}},setup(p,{expose:a}){const r=p,t=ie(),b=se(),s=Ze(),l=Z(s.decreeRules,s.decreeModel),{t:u}=te(),n=le(),_=de(),h=Q(!1),M=async w=>{await s.actionStepClick(b,t,w)},O=w=>{s.decreeModel.__files=[],w.forEach(m=>{s.decreeModel.__files.push(m)})},P=async()=>{var m,S,i,c;if(!await l.value.$validate()){A(null,u("fill-required-fields"),N.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(S=(m=s.model)==null?void 0:m.__curator)==null?void 0:S.user_id,s.decreeModel.journal=re.ORDERS_PROTOCOLS,s.decreeModel.company=n.currentUser.company.id,s.decreeModel.sender=(c=(i=n==null?void 0:n.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,s.decreeModel.document_type=X.DECREE,s.decreeModel.document_sub_type=ee.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,h.value=!0},D=async(w,m)=>{try{await s.actionUpdateDocument({id:m,body:{...s.decreeModel,trip_notice_id:w}}),await _.actionCountList(),A(null,u("successfully-saved"),N.SUCCESS)}catch{}},E=async()=>{var m;let w=null;r.formType===z&&t.query.notice_id?w=t.query.notice_id:r.formType===Qe&&t.params.id&&(w=t.params.id);try{await D(w,(m=s.decreeModel)==null?void 0:m.id),await b.replace({name:Ee,params:{id:w,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})}catch{}};return a({stepClick:M}),(w,m)=>{const S=Ne;return v(),T("div",Xl,[o(Ce,{modelValue:e(l).content.$model,"onUpdate:modelValue":m[0]||(m[0]=i=>e(l).content.$model=i),error:e(l).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"]),y("div",Zl,[o(S,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",en,[o(S,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:m[1]||(m[1]=i=>M(e(Ke)))}),o(S,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:P})])]),o(Se,{modelValue:h.value,"onUpdate:modelValue":m[2]||(m[2]=i=>h.value=i),"send-button-loading":e(s).buttonLoading,"onEmit:send":E,"content-classes":"p-0"},{content:d(()=>[o(e(ot),{"compose-model":{...e(s).model,bookings:e(s).booking_model.bookings,trip_plans:e(s).trip_plan_model.trip_plans,decree_content:e(s).decreeModel.content},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},tn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},ln={class:"px-6 py-4"},yr={__name:"BusinessTripForm",props:{formType:{type:String,default:z}},setup(p){const a=p,{t:r}=te(),t=ie(),b=se(),s=le(),l=Ze();Z(l.rules,l.model),Z(l.trip_plan_rules,l.trip_plan_model),Z(l.booking_model_rules,l.booking_model),Z(l.decreeRules,l.decreeModel);const u=Q(null),n=ne(()=>a.formType===z?"create-business-trip-notice":"update-business-trip-notice"),_=ne(()=>{switch(t.query.step){case Ke:return wo;case eo:return on;case lo:return Ol;case so:return Jl;default:return wo}}),h=async D=>{var w;const E=e(u);((w=t.query)==null?void 0:w.step)!==D.value&&(await E.stepClick(D.value),D.value===eo&&(await O(),await A(null,r("notice-saved-successfully"),N.SUCCESS)))},M=async()=>{t.query.step||await b.replace({query:{...t.query,step:Ke}}),l.stepperItems.forEach(D=>D.active=D.value===t.query.step)},O=async()=>{var w,m,S,i,c,g,f,$,V,L,q,C;const D=oe(l.model.__approvers),E=oe(l.model.__signers);if(l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.bookings=[],l.model.trip_plans=[],l.model.approvers=D,l.model.signers=E,l.model.curator=(m=(w=l.model)==null?void 0:w.__curator)==null?void 0:m.user_id,l.model.journal=re.INNER,l.model.company=(i=(S=s.currentUser)==null?void 0:S.company)==null?void 0:i.id,l.model.__groups.forEach((U,I)=>{const R=I+1;l.model.notices.push(...U.__users.map(G=>{var pe,F,H;return{start_date:U.__start_date,end_date:U.__end_date,user:G.id,company:(F=(pe=s.currentUser)==null?void 0:pe.company)==null?void 0:F.id,sender_company:(H=U.__company)==null?void 0:H.id,regions:U.__regions.map(j=>j.id),tags:U.__tags.map(j=>({id:j.id})),group_id:R,...G.business_trip_id?{id:G.business_trip_id}:{}}}))}),l.model.sender=(g=(c=s==null?void 0:s.currentUser)==null?void 0:c.top_level_department)==null?void 0:g.id,l.model.files=l.model.__files.map(U=>({id:U.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,l.model.bookings=l.booking_model.bookings.map(U=>({...U,segments:U.segments.map(I=>{var R,G;return{departure_city:I.departure_city.id,arrival_city:I.arrival_city.id,departure_date:`${I.date}T${(R=I.time)==null?void 0:R.hours}:${(G=I.time)==null?void 0:G.minutes}:00+05:00`,departure_end_date:null,segment_class:I.segment_class.value}}),passengers:U.passengers.map(I=>({user:I.id}))})),l.model.trip_plans=l.trip_plan_model.trip_plans.map(U=>({users:U.users.map(I=>({id:I.id})),text:U.text})),a.formType===z&&t.query.notice_id)try{await l.actionUpdateDocument({id:t.query.notice_id,body:l.model})}catch{}else if(a.formType===z)try{const{data:U}=await l.actionCreateDocument(l.model),I={approvers:[],signers:[],curator:($=(f=l.model)==null?void 0:f.__curator)==null?void 0:$.user_id,journal:re.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:(L=(V=s==null?void 0:s.currentUser)==null?void 0:V.top_level_department)==null?void 0:L.id,document_type:X.DECREE,document_sub_type:ee.BUSINESS_TRIP_DECREE_V2,short_description:(q=l.model)==null?void 0:q.short_description,trip_notice_id:U.id,content:U.content};l.decreeModel.content=U.content;try{const R=await l.actionCreateDocument(I);l.decreeModel.id=(C=R==null?void 0:R.data)==null?void 0:C.id,await b.replace({query:{...t.query,notice_id:U.id}}),await l.actionGetDocumentDetailForUpdate(U.id)}catch{}}catch{}else if(a.formType===Qe&&t.params.id)try{await l.actionUpdateDocument({id:t.params.id,body:l.model})}catch{}},P=async()=>{try{await O(),await A(null,r("notice-saved-successfully"),N.SUCCESS)}catch{}};return Je(async()=>{await M(),a.formType===Qe?await l.actionGetDocumentDetailForUpdate(t.params.id):t.query.notice_id&&await l.actionGetDocumentDetailForUpdate(t.query.notice_id)}),Re(()=>{l.actionResetBTModel()}),(D,E)=>{const w=ke,m=gl;return v(),T("div",{class:Fe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(l).detailLoading}])},[e(l).detailLoading?(v(),K(w,{key:0})):(v(),K(e($e),{key:1,title:n.value},{content:d(()=>[y("div",tn,[o(m,{items:e(l).stepperItems,"onEmit:stepClick":h},null,8,["items"])]),y("div",ln,[(v(),K(Fo(_.value),{"form-type":p.formType,ref_key:"childComponent",ref:u,"onEmit:onValidateAndSend":P},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},nn=ve("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:k.withMessage("Поле не должен быть пустым",x)},__curator:{required:k.withMessage("Поле не должен быть пустым",x)},__signers:{required:k.withMessage("Поле не должен быть пустым",x)},short_description:{required:k.withMessage("Поле не должен быть пустым",x)},__groups:{$each:k.forEach({__users:{required:k.withMessage("Поле не должен быть пустым",x)},__tags:{required:k.withMessage("Поле не должен быть пустым",x)},__regions:{required:k.withMessage("Поле не должен быть пустым",x)},__start_date:{required:k.withMessage("Поле не должен быть пустым",x)},__end_date:{required:k.withMessage("Поле не должен быть пустым",x)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:k.forEach({users:{required:k.withMessage("Поле не должен быть пустым",x)},text:{required:k.withMessage("Поле не должен быть пустым",x)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(p){this.model.__groups.splice(p,1)},actionDeleteWorkPlanRow(p){this.trip_plan_model.trip_plans.splice(p,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:r}=await xe(Ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:r}=await Ve({id:p,body:a});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),rn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},an={class:"flex justify-between"},sn={class:"text-base text-primary-900 font-semibold mb-1"},dn=["onClick"],cn={class:"flex w-full gap-x-4"},un={class:"flex flex-col gap-y-3"},pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"flex justify-between"},_n={class:"text-base text-primary-900 font-semibold mb-1"},qn=["onClick"],fn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},bn={class:"text-base text-primary-900 font-semibold mb-2"},vr={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:z}},setup(p){const a=p,r=Q(!1),t=Q(!1),{t:b}=te(),s=ie(),l=se(),u=le(),n=nn(),_=de();De();const h=Z(n.rules,n.model),M=Z(n.trip_plan_rules,n.trip_plan_model),O=ne(()=>a.formType===z?"create-decree":"update-decree"),P=ne(()=>{const f=new Set;return n.model.__groups.reduce(($,V)=>V.__users&&Array.isArray(V.__users)?$.concat(V.__users):$,[]).filter($=>f.has($.id)?!1:(f.add($.id),!0))}),D=async()=>{var L,q,C,U,I,R;if(r.value=!0,!await h.value.$validate()){A(null,b("fill-required-fields"),N.WARNING);return}const $=oe(n.model.__approvers),V=oe(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=$,n.model.signers=V,n.model.curator=(q=(L=n.model)==null?void 0:L.__curator)==null?void 0:q.user_id,n.model.journal=re.ORDERS_PROTOCOLS,n.model.company=(U=(C=u.currentUser)==null?void 0:C.company)==null?void 0:U.id,n.model.__groups.forEach((G,pe)=>{const F=pe+1;n.model.notices.push(...G.__users.map(H=>{var j,Ge;return{start_date:G.__start_date,end_date:G.__end_date,user:H.id,company:(Ge=(j=u.currentUser)==null?void 0:j.company)==null?void 0:Ge.id,regions:G.__regions.map(Ie=>Ie.id),tags:G.__tags.map(Ie=>({id:Ie.id})),group_id:F}}))}),n.model.sender=(R=(I=u==null?void 0:u.currentUser)==null?void 0:I.top_level_department)==null?void 0:R.id,n.model.files=n.model.__files.map(G=>({id:G.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(G=>({users:G.users.map(pe=>({id:pe.id})),text:G.text})),t.value=!0},E=()=>{},w=()=>{n.actionAddGroupBlock()},m=()=>{n.actionAddWorkPlanRow(),r.value=!1},S=f=>{n.model.__files=[],f.forEach($=>{n.model.__files.push($)})},i=async()=>{const f=await n.actionCreateDocument(n.model);await _.actionCountList(),f?(t.value=!1,A(null,b("document-sent"),N.SUCCESS),await l.replace({name:Te,query:{document_type:s.params.document_type}})):A(null,b("error-occurred"),N.ERROR)},c=async()=>{await n.actionUpdateDocument({id:s.params.id,body:n.model}),await _.actionCountList(),A(null,b("changed"),N.SUCCESS),await l.replace({name:Ee,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},g=()=>{a.formType===z?i():c()};return(f,$)=>{const V=ke,L=ue,q=Pe,C=ge,U=io,I=ze,R=ce,G=Ne,pe=ko;return e(n).detailLoading?(v(),K(V,{key:0})):(v(),T(J,{key:1},[o(e($e),{title:O.value},{content:d(()=>[o(Me,{"onEmit:preview":D,"onEmit:clearForm":E},{default:d(()=>[o(R,null,{default:d(()=>[o(L,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(h).__curator.$model,"onUpdate:modelValue":$[0]||($[0]=F=>e(h).__curator.$model=F),error:e(h).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(L,{"col-class":"w-1/2"},{default:d(()=>[o(q,{modelValue:e(h).short_description.$model,"onUpdate:modelValue":$[1]||($[1]=F=>e(h).short_description.$model=F),error:e(h).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(L,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[(v(!0),T(J,null,qe(e(n).model.__groups,(F,H)=>(v(),T("div",rn,[y("div",an,[y("span",sn,B(e(b)("group"))+"-"+B(H+1),1),H!==0?(v(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:j=>e(n).actionDeleteGroupBlock(H)},[o(C,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,dn)):ae("",!0)]),o(R,null,{default:d(()=>[o(L,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:F.__users,"onUpdate:modelValue":j=>F.__users=j,error:e(h).__groups.$each.$response.$data[H].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(L,{"col-class":"w-1/2"},{default:d(()=>[o(U,{modelValue:F.__regions,"onUpdate:modelValue":j=>F.__regions=j,error:e(h).__groups.$each.$response.$data[H].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":r.value},{chip:d(({value:j})=>[me(B(j.name),1)]),option:d(({value:j})=>[o(e(we),{title:j.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(L,{"col-class":"w-1/2"},{default:d(()=>[o(U,{modelValue:F.__tags,"onUpdate:modelValue":j=>F.__tags=j,error:e(h).__groups.$each.$response.$data[H].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":r.value},{chip:d(({value:j})=>[me(B(j.name),1)]),option:d(({value:j})=>[o(e(we),{title:j.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),o(L,{"col-class":"w-1/2"},{default:d(()=>[y("div",cn,[o(I,{modelValue:F.__start_date,"onUpdate:modelValue":[j=>F.__start_date=j,j=>F.__start_date=e(fe)(j)],error:e(h).__groups.$each.$response.$data[H].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(I,{modelValue:F.__end_date,"onUpdate:modelValue":[j=>F.__end_date=j,j=>F.__end_date=e(fe)(j)],error:e(h).__groups.$each.$response.$data[H].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(G,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:w},null,8,["icon-left"])]),_:1})]),_:1}),y("div",un,[(v(!0),T(J,null,qe(e(n).trip_plan_model.trip_plans,(F,H)=>(v(),T("div",pn,[y("div",mn,[y("span",_n,B(e(b)("plan"))+"-"+B(H+1),1),H!==0?(v(),T("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:j=>e(n).actionDeleteWorkPlanRow(H)},[o(C,{icon:e(je),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,qn)):ae("",!0)]),o(R,null,{default:d(()=>[o(L,{"col-class":"w-1/2"},{default:d(()=>[o(pe,{modelValue:F.text,"onUpdate:modelValue":j=>F.text=j,error:e(M).trip_plans.$each.$response.$data[H].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(L,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:F.users,"onUpdate:modelValue":j=>F.users=j,options:P.value,error:e(M).trip_plans.$each.$response.$data[H].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(G,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:m},null,8,["icon-left"]),o(R,null,{default:d(()=>[o(L,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":$[2]||($[2]=F=>e(n).model.__approvers=F),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(L,{"col-class":"w-1/2"},{default:d(()=>[o(Y,{modelValue:e(h).__signers.$model,"onUpdate:modelValue":$[3]||($[3]=F=>e(h).__signers.$model=F),error:e(h).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(L,{"col-class":"w-full"},{default:d(()=>[y("div",fn,[y("div",bn,B(e(b)("decree")),1),o(Ce,{modelValue:e(h).content.$model,"onUpdate:modelValue":$[4]||($[4]=F=>e(h).content.$model=F),error:e(h).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":S},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:t.value,"onUpdate:modelValue":$[5]||($[5]=F=>t.value=F),"send-button-loading":e(n).buttonLoading,"onEmit:send":g},{content:d(()=>[o(e(yo),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{_r as _,br as a,gr as b,wr as c,yr as d,vr as e,qr as f,fr as g,hr as h};
