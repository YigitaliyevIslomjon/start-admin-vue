import{_ as ce}from"./BaseRow.2f964d6e.3350.js";import{_ as Oe}from"./BaseInput.f047e8f3.3350.js";import{_ as ue}from"./BaseCol.5590c599.3350.js";import{v as Q,bc as et,a1 as tt,o as h,c as S,i as t,z as c,h as e,b9 as Ye,d as ne,dq as Me,a as w,t as A,F as J,e as qe,a3 as me,g as ae,f as H,B as Ut,dv as Et,bi as Ct,n as je,r as vt,G as Pe,aw as ye,cK as X,cL as ee,cj as re,u as oe,b as se,as as ie,bf as Re,a5 as j,ag as ve,aA as St,cV as Qe,dw as Lt,_ as ge,dx as Rt,dy as ut,dz as Dt,dA as pt,dB as mt,dC as _t,b8 as Tt,bs as Fe,c0 as Be,dD as Mt,dn as Ot,E as Pt}from"./index.b34e845f.1854.js";import{c as y,r as k,u as Z}from"./index.4ec9e798.3350.js";import{_ as Nt,a as At}from"./BranchMultiSelect.5cfa6ab5.3350.js";import{j as It,k as jt,l as Ft,_ as ke,a as Bt,h as zt,f as Gt,b as Wt,c as Yt,d as Ht,e as kt,i as Kt,m as Qt,g as Jt}from"./BasePOA.b0863535.3350.js";import"./BaseTabMenu.7d07f8b1.3350.js";import"./dialog.esm.039d8bc8.3350.js";import"./tabpanel.esm.0e818d7b.3350.js";import"./FileSaver.min.b1bac0dc.3350.js";import{x as qt,s as we,v as G,y as Xt,z as Ne,A as te,B as Le,C as ft,D as nt,E as Xe,o as bt}from"./index.ca043dc5.3350.js";import"./BaseTabView.bd2a9fef.3350.js";import"./FileTabs.f022e22a.3350.js";import{_ as W}from"./UserMultiSelect.81ffa62a.3350.js";import{c as Zt,u as le,w as $e,d as F}from"./axios.config.705bd3af.3350.js";import{u as Ae}from"./common.ab61b6d0.3350.js";import{u as de}from"./count.store.6e99f900.3350.js";import{u as at,a as xe,b as be,c as Ve,d as eo,f as to}from"./index.store.88aee2b0.3350.js";import{j as gt,k as De,i as Ue,c as _e,b as We,l as He,m as ot,n as st,o as Ze,a as oo,B as $t,M as rt,O as lo,T as no,C as ro,P as ao,p as so}from"./index.bd76a17d.3350.js";import{F as I,a as Ke}from"./constants.63630c17.3350.js";import{_ as lt}from"./BaseDropdown.e8bf53af.3350.js";import{_ as ze}from"./BaseCalendar.b1b256cf.3350.js";import{_ as it}from"./BaseMultiSelect.b5f44a4b.3350.js";import{f as io,a as fe}from"./formatDate.70b1f7f7.3350.js";import{Q as wt}from"./qrcode.vue.esm.246699bc.3350.js";import{_ as xt}from"./ShortDescription.d8079ff2.3350.js";import"./dayjs.min.6c16389a.3350.js";/* empty css                                                                                    */import{c as co}from"./Dropdown.b530e428.3350.js";import"./menu.esm.536a375e.3350.js";/* empty css                                                      */import"./avatar.esm.8182ded3.3350.js";/* empty css                                                      *//* empty css                                                            */import"./accordiontab.esm.b24dc4cc.3350.js";import"./common.store.fcd15723.3350.js";import{_ as Se}from"./WithRadio.a8ec7f82.3350.js";import"./radiobutton.esm.97b45846.3350.js";import"./checkbox.esm.5570d1d0.3350.js";import"./index.es6.f9050ba3.3350.js";import{_ as ht}from"./BaseBrickRadio.a48a49a5.3350.js";import{_ as uo}from"./BaseLabel.6e125ec0.3350.js";import{K as po}from"./main.bce2f582.3350.js";import{_ as mo}from"./WithSelectable.e8f8433a.3350.js";import{_ as _o}from"./BaseBrickTab.e2a4e66e.3350.js";import{_ as qo}from"./BaseFileUpload.f7ab9281.3350.js";import{_ as fo}from"./BaseFroalaEditor.7bc1b5ca.3350.js";import{_ as bo}from"./BaseDialog.db0beb43.3350.js";const go={class:"user-select"},he={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(u,{emit:a}){const n=u,l=Q([]),f=et(n,"modelValue"),s=async o=>{let{data:p}=await Zt.get(`${n.apiUrl}/`,o);p.hasOwnProperty("results")?l.value=p.results:l.value=p};return tt(async()=>{await s(n.apiParams)}),(o,p)=>(h(),S("div",go,[t(lt,{modelValue:e(f),"onUpdate:modelValue":p[0]||(p[0]=r=>Ye(f)?f.value=r:null),options:l.value,"onUpdate:options":p[1]||(p[1]=r=>l.value=r),error:n.error,"api-url":n.apiUrl,"api-params":n.apiParams,"option-label":"full_name",label:n.label,placeholder:n.placeholder,required:n.required,searchable:"","onEmit:change":p[2]||(p[2]=r=>a("emit:change",r))},{option:c(({option:r})=>[t(e(mo),{items:[r]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},wo={class:"business-trip-decree-template-view letter-template"},ho={class:"flex flex-col text-sm font-medium mt-4"},yo=w("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),vo=["innerHTML"],ko=["innerHTML"],$o={class:"employees-table text-sm mt-4"},xo={class:"w-full"},Vo=w("tr",{class:"text-center"},[w("td",{class:"border-2 p-1"},"№"),w("td",{class:"border-2 p-1"},"F.I.SH"),w("td",{class:"border-2 p-1"},"Departament va lavozim"),w("td",{class:"border-2 p-1"},"Yo'nalish"),w("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Uo={class:"text-center"},Eo={class:"border-2 p-1"},Co={class:"border-2 p-1"},So={class:"border-2 p-1"},Lo=w("br",null,null,-1),Ro={class:"border-2 p-1"},Do={class:"flex flex-col gap-y-1"},To={key:0},Mo={class:"border-2 p-1 w-[100px]"},Oo=w("br",null,null,-1),Po={class:"indent-8 mt-2 text-sm text-justify"},No=w("div",null,"xizmat safariga yuborilsin.",-1),Ao=w("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Io=w("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),jo=w("div",null," Buxgalteriya hisobi va moliyaviy menejment departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Fo={key:0},Bo=w("span",{class:"font-semibold"},"Asos: ",-1),zo=w("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),Go=w("div",null," O‘zR MKning 287-moddasi; ",-1),Wo=w("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),Yo={class:"mt-6 pb-2 px-4"},Ho={class:"text-sm font-semibold block"},Ko={class:"text-sm font-semibold block"},Qo={class:"text-sm font-semibold block"},Jo={class:"text-sm font-semibold block"},Xo={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(u){const a=u,n=at(),l=ne(()=>{var p;return a.preview?le().currentUser:(p=a.composeModel)==null?void 0:p.author}),f=ne(()=>{var p,r,q;return a.preview?(p=a.composeModel)==null?void 0:p.__employees.map(g=>({empFullName:g.full_name,empDepName:g.top_level_department.name,empPositionName:g.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(q=(r=a.composeModel)==null?void 0:r.notices)==null?void 0:q.map(g=>({empFullName:g.user.full_name,empDepName:g.user.top_level_department.name,empPositionName:g.user.position.name,destinations:g.destinations,startDate:g.start_date,endDate:g.end_date}))}),s=ne(()=>{var r,q,g;if(a.preview)return[(r=a.composeModel)==null?void 0:r.__curator];const p=(q=a.composeModel)==null?void 0:q.signers.find(L=>L.type===Me.BASIC_SIGNER);return p?[p]:[(g=a.composeModel)==null?void 0:g.curator].filter(Boolean)}),o=ne(()=>{var p,r;return a.preview?(p=a.composeModel)==null?void 0:p.__signers:(r=a.composeModel)==null?void 0:r.signers.filter(q=>q.type===Me.SIGNER)});return(p,r)=>{var L,$,D,T,z,v,m,U;const q=ue,g=ce;return h(),S("div",wo,[t(e(It)),t(e(jt),{"dep-name":($=(L=l.value)==null?void 0:L.top_level_department)==null?void 0:$.name},null,8,["dep-name"]),w("div",ho,[w("span",null," № "+A((D=a.composeModel)==null?void 0:D.register_number),1),w("span",null,A(((T=a.composeModel)==null?void 0:T.register_date)&&e(io)((z=a.composeModel)==null?void 0:z.register_date)),1)]),yo,e(n).historyShow?(h(),S("div",{key:0,class:"text-justify",innerHTML:e(n).historyContent},null,8,vo)):(h(),S("div",{key:1,class:"text-justify",innerHTML:(v=a.composeModel)==null?void 0:v.content},null,8,ko)),w("div",$o,[w("table",xo,[Vo,f.value&&f.value.length?(h(!0),S(J,{key:0},qe(f.value,(d,i)=>(h(),S("tr",Uo,[w("td",Eo,A(i+1),1),w("td",Co,A(d.empFullName),1),w("td",So,[me(A(d.empDepName)+" ",1),Lo,me(" "+A(d.empPositionName),1)]),w("td",Ro,[w("div",Do,[(h(!0),S(J,null,qe(d.destinations,(b,_)=>(h(),S("span",null,[me(A(b.name)+" ",1),_!==d.destinations.length-1?(h(),S("span",To,",")):ae("",!0)]))),256))])]),w("td",Mo,[me(A(d.startDate)+" ",1),Oo,me(" "+A(d.endDate),1)])]))),256)):ae("",!0)])]),w("div",Po,[No,Ao,Io,jo,(m=u.composeModel)!=null&&m.trip_notice_register_number?(h(),S("div",Fo,[Bo,me(A((U=u.composeModel)==null?void 0:U.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):ae("",!0),zo,Go,Wo]),w("div",Yo,[(h(!0),S(J,null,qe(s.value,d=>(h(),H(g,{key:d.id,class:"mb-2 items-center"},{default:c(()=>[t(q,{"col-class":"w-1/3"},{default:c(()=>[w("span",Ho,A(d.user?d.user.position.name:d.position.name),1)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:c(()=>[d.is_signed?(h(),H(wt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:c(()=>[w("span",Ko,A(e(qt)(d)),1)]),_:2},1024)]),_:2},1024))),128)),(h(!0),S(J,null,qe(o.value,d=>(h(),H(g,{key:d.id,class:"mb-2 items-center"},{default:c(()=>[t(q,{"col-class":"w-1/3"},{default:c(()=>[w("span",Qo,A(d.user?d.user.position.name:d.position.name),1)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:c(()=>[d.is_signed?(h(),H(wt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),t(q,{"col-class":"w-1/3"},{default:c(()=>[w("span",Jo,A(e(qt)(d)),1)]),_:2},1024)]),_:2},1024))),128))]),t(e(Ft),{"compose-model":a.composeModel,author:l.value},null,8,["compose-model","author"])])}}};var Zo=`
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
`,el={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Ut.extend({name:"editor",css:Zo,classes:el});(function(){try{return window.Quill}catch{return null}})();const Ee={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(u){return["froala","tiny"].includes(u)}}},emits:["update:modelValue","emit:fileUpload"],setup(u,{emit:a}){const n=u,l=et(n,"modelValue"),f=Q([{title:"text",slot:"editor",icon:Et},{title:"file",slot:"file",icon:Ct}]);return(s,o)=>(h(),H(_o,{"tab-panel-list":f.value,"panel-container-class":"px-0"},{editor:c(()=>[u.editor==="froala"?(h(),H(fo,{key:0,modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=p=>Ye(l)?l.value=p:null)},null,8,["modelValue"])):(h(),H(co,{key:1,modelValue:e(l),"onUpdate:modelValue":o[1]||(o[1]=p=>Ye(l)?l.value=p:null)},null,8,["modelValue"]))]),file:c(()=>[w("div",{class:je(n.fileUploadContainerClasses)},[t(qo,{files:n.files,"onEmit:fileUpload":o[2]||(o[2]=p=>a("emit:fileUpload",p))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},tl={class:"flex flex-col justify-between h-full"},ol={class:"px-6 py-4 overflow-y-auto"},ll={class:"actions p-6"},Te={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(u,{emit:a}){return(n,l)=>{const f=Pe;return h(),S("div",tl,[w("div",ol,[vt(n.$slots,"default")]),w("div",ll,[t(f,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=s=>a("emit:clearForm"))}),t(f,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=s=>a("emit:preview"))})])])}}},nl=ye("sd-stores-inner",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=le().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,document_type:X.INNER,document_sub_type:ee.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:re.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:y.withMessage("Поле не должен быть пустым",k)},content:{required:y.withMessage("Поле не должен быть пустым",k)},__departments:{required:y.withMessage("Поле не должен быть пустым",k)},__approvers:{},__signers:{required:y.withMessage("Поле не должен быть пустым",k)}}}},actions:{async actionCreateDocument(u){let a={...u,type:gt,sub_type:gt};this.buttonLoading=!0;const{response:n,error:l}=await $e(Ve,a);return n?(this.buttonLoading=!1,Promise.resolve(n)):Promise.reject(l)},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await xe({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await be(u);we(this.model,a),this.model.__approvers=await G(a.approvers),this.model.__signers=await G(a.signers),this.model.__departments=await Xt(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),rl={class:"font-semibold text-xl"},Ce={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(u,{emit:a}){const l=et(u,"modelValue"),{t:f}=oe();return(s,o)=>{const p=Pe,r=bo;return h(),H(r,{modelValue:e(l),"onUpdate:modelValue":o[1]||(o[1]=q=>Ye(l)?l.value=q:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[w("span",rl,A(e(f)("preview")),1)]),content:c(()=>[vt(s.$slots,"content")]),footer:c(()=>[t(p,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(p,{label:u.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:u.sendButtonLoading,onClick:o[0]||(o[0]=q=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},dr={__name:"InnerForm",props:{formType:{type:String,default:I}},setup(u){const a=u,n=le(),l=nl();Ae();const f=de(),s=Q(!1);Q(null);const{t:o}=oe(),p=se(),r=ie(),q=Z(l.rules,l.model),g=async()=>{await q.value.$validate()&&(s.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(m=>m.id),l.model.files=[],l.model.files=l.model.__files.map(m=>({id:m.id})),l.model.journal=re.INNER,l.model.sender=n.currentUser.top_level_department.id,l.model.approvers=te(l.model.__approvers),l.model.signers=te(l.model.__signers),l.model.document_type=r.params.document_type,l.model.document_sub_type=r.params.document_sub_type,l.model.receiver&&delete l.model.receiver)},L=()=>{a.formType===I?$():D()},$=async()=>{const v=await l.actionCreateDocument(l.model);await f.actionCountList(),v?(s.value=!1,F(null,o("document-sent"),j.SUCCESS),await p.replace({name:De,query:{document_type:X.INNER}})):F(null,o("error-occurred"),j.ERROR)},D=async()=>{await l.actionUpdateDocument({id:r.params.id,body:l.model}),await f.actionCountList(),F(null,o("document-sent"),j.SUCCESS),await p.replace({name:Ue,params:{id:r.params.id,document_type:X.INNER,document_sub_type:ee.SERVICE_LETTER}})},T=()=>{console.log("Clear Form")},z=v=>{l.model.__files=[],v.forEach(m=>{l.model.__files.push(m)})};return tt(async()=>{r.params.id&&await l.actionGetDocumentDetailForUpdate(r.params.id)}),Re(()=>{Ne(l.model)}),(v,m)=>{const U=ve,d=ue,i=Oe,b=ce;return e(l).detailLoading?(h(),H(U,{key:0})):(h(),S(J,{key:1},[t(e(ke),{title:a.formType===e(I)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[t(Te,{"onEmit:preview":g,"onEmit:clearForm":T},{default:c(()=>[t(b,null,{default:c(()=>[t(d,{"col-class":"w-1/2"},{default:c(()=>[t(Nt,{modelValue:e(q).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=_=>e(q).__departments.$model=_),error:e(q).__departments},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(i,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=_=>e(q).short_description.$model=_),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=_=>e(q).__approvers.$model=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=_=>e(q).__signers.$model=_),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=_=>e(q).content.$model=_),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=_=>s.value=_),"send-button-loading":e(l).buttonLoading,"onEmit:send":L},{content:c(()=>{var _,x;return[t(Bt,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(x=(_=e(n).currentUser)==null?void 0:_.top_level_department)==null?void 0:x.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},al=ye("sd-store-application",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=le().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__approvers:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{}}}},actions:{async actionCreateDocument(u){let a={...u};this.buttonLoading=!0;const{response:n,error:l}=await $e(Ve,a);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await xe({id:u,body:a});return Promise.resolve(n)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await be(u);we(this.model,a),this.model.__approvers=await G(a.approvers),this.model.__signers=await G(a.signers.filter(n=>n.type===Me.SIGNER)),this.model.__curator=await Le([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Vt=ye("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:le().currentUser.company.id,curator:null,document_type:X.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:re.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:y.withMessage("Поле не должен быть пустым",k)},register_date:{required:y.withMessage("Поле не должен быть пустым",k)},content:{required:y.withMessage("Поле не должен быть пустым",k)},__negotiators:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:n}=await $e(Ve,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await xe({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await be(u);we(this.model,a),this.model.__signers=await G(a.signers.filter(n=>n.type!==Me.NEGOTIATOR)),this.model.__negotiators=await G(a.signers.filter(n=>n.type===Me.NEGOTIATOR)),this.model.__approvers=await G(a.approvers),this.model.__curator=await Le([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),cr={__name:"ApplicationForm",props:{formType:{type:String,default:I}},setup(u){const a=u,n=le(),l=al();Ae();const f=de();Vt();const s=Q(!1);Q(null);const{t:o}=oe(),p=se(),r=ie(),q=Z(l.rules,l.model),g=async()=>{var m,U,d,i,b;await q.value.$validate()&&(s.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(m=n==null?void 0:n.currentUser)==null?void 0:m.id}],l.model.sender=(d=(U=n==null?void 0:n.currentUser)==null?void 0:U.top_level_department)==null?void 0:d.id,l.model.curator=(b=(i=l==null?void 0:l.model)==null?void 0:i.__curator)==null?void 0:b.user_id,l.model.journal=re.APPLICATION,l.model.document_type=r.params.document_type,l.model.document_sub_type=r.params.document_sub_type,l.model.approvers=te(l.model.__approvers))},L=async()=>{},$=()=>{a.formType===I?D():T()},D=async()=>{const v=await l.actionCreateDocument(l.model);await f.actionCountList(),v?(s.value=!1,F(null,o("document-sent"),j.SUCCESS),await p.replace({name:De,query:{document_type:X.APPLICATION}})):F(null,o("error-occurred"),j.ERROR)},T=async()=>{await l.actionUpdateDocument({id:r.params.id,body:l.model}),await f.actionCountList(),F(null,o("document-sent"),j.SUCCESS),await p.replace({name:Ue,params:{id:r.params.id,document_type:X.APPLICATION,document_sub_type:ee.LABOR_LEAVE}})},z=v=>{l.model.__files=[],v.forEach(m=>{l.model.__files.push(m)})};return tt(async()=>{r.params.id&&await l.actionGetDocumentDetailForUpdate(r.params.id)}),Re(()=>{Ne(l.model)}),(v,m)=>{const U=ve,d=ue,i=ce;return e(l).detailLoading?(h(),H(U,{key:0})):(h(),S(J,{key:1},[t(e(ke),{title:a.formType===e(I)?"create-sd-application":"update-sd-application"},{content:c(()=>[t(Te,{"onEmit:preview":g,"onEmit:clearForm":L},{default:c(()=>[t(i,null,{default:c(()=>[t(d,{"col-class":"w-1/2"},{default:c(()=>[t(he,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=b=>e(q).__curator.$model=b),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[1]||(m[1]=b=>e(q).__approvers.$model=b),error:e(q).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[2]||(m[2]=b=>e(q).__signers.$model=b),disabled:"",label:"signers",placeholder:e(n).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(d,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[3]||(m[3]=b=>e(q).content.$model=b),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=b=>s.value=b),"send-button-loading":e(l).buttonLoading,"onEmit:send":$},{content:c(()=>[t(zt,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:a.formType===e(I)?e(n).currentUser:e(l).model.__signers[0].user,signers:a.formType===e(I)?[e(n).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},sl=ye("sd-notice-store",{state:()=>(le(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:X.NOTICE,document_sub_type:ee.BUSINESS_TRIP,journal:re.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",k)},start_date:{required:y.withMessage("Поле не должен быть пустым",k)},route:{required:y.withMessage("Поле не должен быть пустым",k)},content:{required:y.withMessage("Поле не должен быть пустым",k)},__companies:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__employees:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},__tags:{required:y.withMessage("Поле не должен быть пустым",k)},short_description:{required:y.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:n}=await $e(Ve,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await xe({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a=!1){try{this.detailLoading=!0;const{data:n}=await be(u);we(this.model,n),this.model.__companies=[],this.model.__curator=await Le([],n.curator.id,!1),this.model.__employees=await G(n.notices),a?(this.model.__approvers=await G(n.approvers.filter(l=>{var f,s;return((f=l==null?void 0:l.user)==null?void 0:f.id)!==((s=n==null?void 0:n.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await G(n.approvers),this.model.__signers=await G(n.signers),this.model.__companies=await ft(n.notices[0].destinations),this.model.__tags=await nt(n.tags),this.model.start_date=n.notices[0].start_date,this.model.end_date=n.notices[0].end_date,this.model.__tags=n.tags,this.model.route=n.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(u,a){try{this.detailLoading=!0;const{data:n}=await be(u),l=await be(a);we(this.model,n),this.model.__companies=[],this.model.__curator=await Le([],n.curator.id,!1),this.model.__employees=await G(l.data.notices),this.model.__approvers=await G(n.approvers),this.model.__signers=await G(n.signers),this.model.__companies=await ft(l.data.notices[0].destinations),this.model.__tags=await nt(n.tags),this.model.start_date=l.data.notices[0].start_date,this.model.end_date=l.data.notices[0].end_date,this.model.__tags=n.tags,this.model.route=l.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),il={class:"flex w-full gap-x-4"},ur={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:I}},setup(u){const a=u,{t:n}=oe(),l=ie(),f=se(),s=le(),o=sl(),p=de();Ae();const r=Z(o.rules,o.model),q=Q(!1),g=ne(()=>{const d=a.formType===I,i=l.params.document_sub_type;return i===ee.BUSINESS_TRIP_DECREE_LOCAL?d?"create-decree":"update-decree":i===ee.BUSINESS_TRIP_ORDER_LOCAL?d?"create-order":"update-order":d?"create-business-trip-notice":"update-business-trip-notice"}),L=ne(()=>{var d,i;return l.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((d=l==null?void 0:l.query)==null?void 0:d.compose_id)&&((i=l==null?void 0:l.query)==null?void 0:i.document_sub_type)===ee.BUSINESS_TRIP}),$=ne(()=>{var d;return!!(l.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((d=o==null?void 0:o.model)!=null&&d.trip_notice_id))});St(()=>o.model.__tags,d=>{if(a.formType===I)if(d&&d.length){let i=`${d.map(b=>b.name_uz).join(", ")} yuzasidan`;o.model.short_description=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase()}else o.model.short_description=null});const D=async()=>{var i,b,_,x,N;await r.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.notices=[],o.model.approvers=te(o.model.__approvers),o.model.signers=te(o.model.__signers),o.model.curator=(b=(i=o==null?void 0:o.model)==null?void 0:i.__curator)==null?void 0:b.user_id,o.model.journal=l.params.document_type===X.DECREE||l.params.document_type===X.ORDER?re.ORDERS_PROTOCOLS:re.INNER,o.model.company=s.currentUser.company.id,o.model.notices=o.model.__employees.map(P=>({start_date:o.model.start_date,end_date:o.model.end_date,user:P.id,route:o.model.route,companies:o.model.__companies.map(C=>C.id)})),o.model.sender=(x=(_=s==null?void 0:s.currentUser)==null?void 0:_.top_level_department)==null?void 0:x.id,o.model.tags=o.model.__tags.map(P=>({id:P.id})),o.model.files=o.model.__files.map(P=>({id:P.id})),o.model.document_type=l.params.document_type,o.model.document_sub_type=l.params.document_sub_type,L.value&&(o.model.trip_notice_id=(N=l==null?void 0:l.query)==null?void 0:N.compose_id),q.value=!0)},T=()=>{},z=d=>{o.model.__files=[],d.forEach(i=>{o.model.__files.push(i)})},v=async()=>{L.value&&(o.model.notices=[]);const d=await o.actionCreateDocument(o.model);await p.actionCountList(),d?(q.value=!1,F(null,n("document-sent"),j.SUCCESS),await f.replace({name:De,query:{document_type:l.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?X.DECREE:l.params.document_sub_type===ee.BUSINESS_TRIP_ORDER_LOCAL?X.ORDER:X.NOTICE}})):F(null,n("error-occurred"),j.ERROR)},m=async()=>{(L.value||$.value)&&(o.model.notices=[]),await o.actionUpdateDocument({id:l.params.id,body:o.model}),await p.actionCountList(),F(null,n("changed"),j.SUCCESS),await f.replace({name:Ue,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},U=()=>{a.formType===I?v():m()};return Qe(async()=>{l.params.id&&l.query.trip_notice_id&&l.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?await o.actionGetDocumentDetailForUpdateForCustomUse(l.params.id,l.query.trip_notice_id):l.params.id?await o.actionGetDocumentDetailForUpdate(l.params.id):L.value&&await o.actionGetDocumentDetailForUpdate(l.query.compose_id,!0)}),Re(()=>{Ne(o.model)}),(d,i)=>{const b=ve,_=ue,x=ze,N=lt,P=Oe,C=ce;return e(o).detailLoading?(h(),H(b,{key:0})):(h(),S(J,{key:1},[t(e(ke),{title:g.value},{content:c(()=>[t(Te,{"onEmit:preview":D,"onEmit:clearForm":T},{default:c(()=>[t(C,null,{default:c(()=>[t(_,{"col-class":"w-1/2"},{default:c(()=>[t(he,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=V=>e(r).__curator.$model=V),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(r).__employees.$model,"onUpdate:modelValue":i[1]||(i[1]=V=>e(r).__employees.$model=V),error:e(r).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:L.value||$.value},null,8,["modelValue","error","disabled"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(At,{modelValue:e(r).__companies.$model,"onUpdate:modelValue":i[2]||(i[2]=V=>e(r).__companies.$model=V),error:e(r).__companies,"text-truncate":"",disabled:L.value||$.value},null,8,["modelValue","error","disabled"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(it,{modelValue:e(r).__tags.$model,"onUpdate:modelValue":i[3]||(i[3]=V=>e(r).__tags.$model=V),error:e(r).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:V})=>[me(A(V.name),1)]),option:c(({value:V})=>[t(e(Se),{title:V.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[w("div",il,[t(x,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[i[4]||(i[4]=V=>e(r).start_date.$model=V),i[5]||(i[5]=V=>e(r).start_date.$model=e(fe)(V))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:L.value||$.value},null,8,["modelValue","error","min-date","disabled"]),t(x,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[i[6]||(i[6]=V=>e(r).end_date.$model=V),i[7]||(i[7]=V=>e(r).end_date.$model=e(fe)(V))],error:e(r).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:L.value||$.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(N,{modelValue:e(r).route.$model,"onUpdate:modelValue":i[8]||(i[8]=V=>e(r).route.$model=V),error:e(r).route,options:e(Lt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:L.value||$.value},null,8,["modelValue","error","options","disabled"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":i[9]||(i[9]=V=>e(o).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":i[10]||(i[10]=V=>e(r).__signers.$model=V),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(P,{modelValue:e(r).short_description.$model,"onUpdate:modelValue":i[11]||(i[11]=V=>e(r).short_description.$model=V),error:e(r).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(r).content.$model,"onUpdate:modelValue":i[12]||(i[12]=V=>e(r).content.$model=V),error:e(r).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:q.value,"onUpdate:modelValue":i[13]||(i[13]=V=>q.value=V),"send-button-loading":e(o).buttonLoading,"onEmit:send":U},{content:c(()=>[e(l).params.document_sub_type===e(ee).BUSINESS_TRIP_DECREE_LOCAL?(h(),H(e(Xo),{key:0,"compose-model":e(o).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(ee).BUSINESS_TRIP_ORDER_LOCAL?(h(),H(e(Gt),{key:1,"compose-model":e(o).model,preview:!0},null,8,["compose-model"])):(h(),H(e(Wt),{key:2,"compose-model":e(o).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},pr={__name:"OrderForm",props:{formType:{type:String,default:I}},setup(u){const a=u,n=Vt(),l=de(),f=le(),s=ie(),o=se(),p=Z(n.rules,n.model),{t:r}=oe(),q=Q(!1),g=async()=>{var m,U,d,i;await p.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=te(n.model.__approvers),n.model.curator=(U=(m=n==null?void 0:n.model)==null?void 0:m.__curator)==null?void 0:U.user_id,n.model.sender=(i=(d=f==null?void 0:f.currentUser)==null?void 0:d.top_level_department)==null?void 0:i.id,n.model.files=n.model.__files.map(b=>({id:b.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.journal=re.ORDERS_PROTOCOLS,n.model.register_date=fe(n.model.register_date),n.model.__negotiators.forEach(b=>{n.model.signers.push(b.hasOwnProperty("user")?{id:b.id,user:b.user.id,type:Me.NEGOTIATOR}:{user:b.id,type:Me.NEGOTIATOR})}),s.query.compose_id&&(n.model.trip_notice_id=s.query.compose_id),q.value=!0)},L=()=>{},$=async()=>{try{const v=await n.actionCreateDocument(n.model);await l.actionCountList(),v&&(q.value=!1,F(null,r("document-sent"),j.SUCCESS),await o.replace({name:De,query:{document_type:X.ORDER}}))}catch{F(null,r("error-occurred"),j.ERROR)}},D=async()=>{try{const v=await n.actionUpdateDocument({id:s.params.id,body:n.model});await l.actionCountList(),F(null,r("changed"),j.SUCCESS),await o.replace({name:Ue,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{F(null,r("error-occurred"),j.ERROR)}},T=()=>{a.formType===I?$():D()},z=v=>{n.model.__files=[],v.forEach(m=>{n.model.__files.push(m)})};return tt(async()=>{s.params.id&&await n.actionGetDocumentDetailForUpdate(s.params.id)}),Re(()=>{Ne(n.model)}),(v,m)=>{const U=ve,d=ue,i=Oe,b=ze,_=ce;return e(n).detailLoading?(h(),H(U,{key:0})):(h(),S(J,{key:1},[t(e(ke),{title:a.formType===e(I)?"create-order":"update-order"},{content:c(()=>[t(Te,{"onEmit:preview":g,"onEmit:clearForm":L},{default:c(()=>[t(_,null,{default:c(()=>[t(d,{"col-class":"w-1/2"},{default:c(()=>[t(he,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=x=>e(p).__curator.$model=x),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(i,{modelValue:e(p).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=x=>e(p).register_number.$model=x),error:e(p).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(b,{modelValue:e(p).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=x=>e(p).register_date.$model=x),error:e(p).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=x=>e(n).model.__approvers=x),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(p).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=x=>e(p).__negotiators.$model=x),error:e(p).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[5]||(m[5]=x=>e(p).content.$model=x),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:q.value,"onUpdate:modelValue":m[6]||(m[6]=x=>q.value=x),"send-button-loading":e(n).buttonLoading,"onEmit:send":T},{content:c(()=>[t(e(Yt),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},dl=ye("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},short_description:{required:y.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:n}=await $e(Ve,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await xe({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await be(u);we(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await G(a.approvers),this.model.__signers=await G(a.signers)}catch{}finally{this.detailLoading=!1}}}}),mr={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:I}},setup(u){const a=u,{t:n}=oe(),l=ie(),f=se(),s=le(),o=dl(),p=de();Ae();const r=Q(!1),q=Z(o.rules,o.model),g=async()=>{var m,U,d,i;await q.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=te(o.model.__approvers),o.model.signers=te(o.model.__signers),o.model.curator=(U=(m=o==null?void 0:o.model)==null?void 0:m.__curator)==null?void 0:U.user_id,o.model.journal=re.INNER,o.model.company=s.currentUser.company.id,o.model.sender=(i=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:i.id,o.model.files=o.model.__files.map(b=>({id:b.id})),o.model.document_type=l.params.document_type,o.model.document_sub_type=l.params.document_sub_type,r.value=!0)},L=()=>{},$=v=>{o.model.__files=[],v.forEach(m=>{o.model.__files.push(m)})},D=async()=>{const v=await o.actionCreateDocument(o.model);await p.actionCountList(),v?(r.value=!1,F(null,n("document-sent"),j.SUCCESS),await f.replace({name:De,query:{document_type:X.NOTICE}})):F(null,n("error-occurred"),j.ERROR)},T=async()=>{await o.actionUpdateDocument({id:l.params.id,body:o.model}),await p.actionCountList(),F(null,n("changed"),j.SUCCESS),await f.replace({name:Ue,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},z=()=>{a.formType===I?D():T()};return Qe(async()=>{l.params.id&&await o.actionGetDocumentDetailForUpdate(l.params.id)}),Re(()=>{Ne(o.model)}),(v,m)=>{const U=ve,d=ue,i=Oe,b=ce;return e(o).detailLoading?(h(),H(U,{key:0})):(h(),S(J,{key:1},[t(e(ke),{title:a.formType===e(I)?"create-notice":"update-notice"},{content:c(()=>[t(Te,{"onEmit:preview":g,"onEmit:clearForm":L},{default:c(()=>[t(b,null,{default:c(()=>[t(d,{"col-class":"w-1/2"},{default:c(()=>[t(he,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=_=>e(q).__curator.$model=_),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(i,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=_=>e(q).short_description.$model=_),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=_=>e(o).model.__approvers=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(d,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=_=>e(q).__signers.$model=_),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(d,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=_=>e(q).content.$model=_),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":$},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:r.value,"onUpdate:modelValue":m[5]||(m[5]=_=>r.value=_),"send-button-loading":e(o).buttonLoading,"onEmit:send":z},{content:c(()=>[t(e(Ht),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},cl=ye("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},short_description:{required:y.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(u){const a={...u};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:n,error:l}=await $e(Ve,a);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:u,body:a}){const n={...a};delete n.bookings,delete n.notices,delete n.trip_plans;try{this.buttonLoading=!0;const{data:l}=await xe({id:u,body:n});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){try{this.detailLoading=!0;const{data:n}=await be(u);we(this.model,n),this.model.__curator=await Le([],n.curator.id,!1),this.model.__approvers=await G(n.approvers),this.model.__signers=await G(n.signers)}catch{}finally{this.detailLoading=!1}}}}),_r={__name:"DecreeForm",props:{formType:{type:String,default:I}},setup(u){const a=u,{t:n}=oe(),l=ie(),f=se(),s=le(),o=de();Ae();const p=Q(!1),r=cl(),q=at(),g=Z(r.rules,r.model),L=async()=>{var d,i,b,_;await g.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=te(r.model.__approvers),r.model.signers=te(r.model.__signers),r.model.curator=(i=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:i.user_id,r.model.journal=re.ORDERS_PROTOCOLS,r.model.company=s.currentUser.company.id,r.model.sender=(_=(b=s==null?void 0:s.currentUser)==null?void 0:b.top_level_department)==null?void 0:_.id,r.model.files=r.model.__files.map(x=>({id:x.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(r.model.trip_notice_id=l.query.compose_id),p.value=!0)},$=()=>{},D=U=>{r.model.__files=[],U.forEach(d=>{r.model.__files.push(d)})},T=async()=>{const U=await r.actionCreateDocument(r.model);await o.actionCountList(),U?(p.value=!1,F(null,n("document-sent"),j.SUCCESS),await f.replace({name:De,query:{document_type:l.params.document_type}})):F(null,n("error-occurred"),j.ERROR)},z=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await o.actionCountList(),F(null,n("changed"),j.SUCCESS),await f.replace({name:Ue,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},v=()=>{a.formType===I?T():z()},m=async U=>{const{data:d}=await q.actionGetDocumentDetail(U);r.model.notices=d==null?void 0:d.notices,r.model.trip_plans=d==null?void 0:d.trip_plans,r.model.bookings=d==null?void 0:d.bookings,r.model.short_description=d==null?void 0:d.short_description,r.model.trip_notice_register_number=d==null?void 0:d.register_number};return Qe(async()=>{a.formType===I&&l.query.compose_id?await m(l.query.compose_id):a.formType===Ke&&l.query.trip_notice_id&&l.params.id?(await r.actionGetDocumentDetailForUpdate(l.params.id,null),await m(l.query.trip_notice_id)):a.formType===Ke&&l.params.id&&await r.actionGetDocumentDetailForUpdate(l.params.id,null)}),Re(()=>{Ne(r.model)}),(U,d)=>{const i=ve,b=ue,_=Oe,x=ce;return e(r).detailLoading?(h(),H(i,{key:0})):(h(),S(J,{key:1},[t(e(ke),{title:a.formType===e(I)?"create-decree":"update-decree"},{content:c(()=>[t(Te,{"onEmit:preview":L,"onEmit:clearForm":$},{default:c(()=>[t(x,null,{default:c(()=>[t(b,{"col-class":"w-1/2"},{default:c(()=>[t(he,{modelValue:e(g).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=N=>e(g).__curator.$model=N),error:e(g).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:c(()=>[t(_,{modelValue:e(g).short_description.$model,"onUpdate:modelValue":d[1]||(d[1]=N=>e(g).short_description.$model=N),error:e(g).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[2]||(d[2]=N=>e(r).model.__approvers=N),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(g).__signers.$model,"onUpdate:modelValue":d[3]||(d[3]=N=>e(g).__signers.$model=N),error:e(g).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(b,{"col-class":"w-full"},{default:c(()=>[t(Ee,{modelValue:e(g).content.$model,"onUpdate:modelValue":d[4]||(d[4]=N=>e(g).content.$model=N),error:e(g).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:p.value,"onUpdate:modelValue":d[5]||(d[5]=N=>p.value=N),"send-button-loading":e(r).buttonLoading,"onEmit:send":v},{content:c(()=>[t(e(kt),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ul=ye("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",k)},start_date:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},__user:{required:y.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:n}=await $e(Ve,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(n))},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await be(u);return we(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await G(a.approvers),this.model.__signers=await G(a.signers),this.model.__user=await Xe("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await xe({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}}}}),qr={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:I}},setup(u){const a=u,n=ie(),l=se(),f=le(),s=ul();at();const o=de(),{t:p}=oe(),r=Z(s.rules,s.model),q=Q(!1),g=Q([]),L=ne(()=>a.formType===I?"create-poa":"update-poa"),$=ne(()=>s.model.start_date?new Date(s.model.start_date):new Date),D=async()=>{var i,b,_,x,N,P,C,V,E,M,R,K,pe,O,Y,B,Ge,Ie,dt,ct;if(await r.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=te(s.model.__approvers),s.model.signers=te(s.model.__signers),s.model.curator=(b=(i=s==null?void 0:s.model)==null?void 0:i.__curator)==null?void 0:b.user_id,s.model.user=(x=(_=s==null?void 0:s.model)==null?void 0:_.__user)==null?void 0:x.id,s.model.journal=re.POWER_OF_ATTORNEY,s.model.company=(P=(N=f.currentUser)==null?void 0:N.company)==null?void 0:P.id,s.model.sender=(V=(C=f==null?void 0:f.currentUser)==null?void 0:C.top_level_department)==null?void 0:V.id,s.model.document_type=n.params.document_type,s.model.document_sub_type=n.params.document_sub_type,s.model.content=".",s.model.parent=(M=(E=s.model)==null?void 0:E.__parent)==null?void 0:M.id,!((K=(R=s==null?void 0:s.model)==null?void 0:R.__user)!=null&&K.passport_seria||(O=(pe=s==null?void 0:s.model)==null?void 0:pe.__user)!=null&&O.passport_number||(B=(Y=s==null?void 0:s.model)==null?void 0:Y.__user)!=null&&B.passport_issue_date||(Ie=(Ge=s==null?void 0:s.model)==null?void 0:Ge.__user)!=null&&Ie.passport_issued_by)){F(null,`${(ct=(dt=s.model)==null?void 0:dt.__user)==null?void 0:ct.full_name}: ${p("passport-details-error")}`,j.WARNING);return}q.value=!0}},T=()=>{},z=async()=>{const d=await s.actionCreateDocument(s.model);await o.actionCountList(),d?(q.value=!1,F(null,p("document-sent"),j.SUCCESS),await l.replace({name:De,query:{document_type:X.POWER_OF_ATTORNEY}})):F(null,p("error-occurred"),j.ERROR)},v=async()=>{await s.actionUpdateDocument({id:n.params.id,body:s.model}),await o.actionCountList(),F(null,p("changed"),j.SUCCESS),await l.replace({name:Ue,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},m=()=>{a.formType===I?z():v()},U=async d=>{const{data:i}=await eo({user:d.id,document_sub_type:n.params.document_sub_type,status:5});g.value=i.results};return Qe(async()=>{if(n.params.id){const d=await s.actionGetDocumentDetailForUpdate(n.params.id);d.parent&&(g.value=[d.parent])}}),Re(()=>{Ne(s.model)}),(d,i)=>{const b=ve,_=ue,x=ze,N=lt,P=ce;return e(s).detailLoading?(h(),H(b,{key:0})):(h(),S(J,{key:1},[t(e(ke),{title:L.value},{content:c(()=>[t(Te,{"onEmit:preview":D,"onEmit:clearForm":T},{default:c(()=>[t(P,null,{default:c(()=>[t(_,{"col-class":"w-1/2"},{default:c(()=>[t(he,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=C=>e(r).__curator.$model=C),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(he,{modelValue:e(r).__user.$model,"onUpdate:modelValue":i[1]||(i[1]=C=>e(r).__user.$model=C),error:e(r).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":i[2]||(i[2]=C=>U(C))},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(x,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[i[3]||(i[3]=C=>e(r).start_date.$model=C),i[4]||(i[4]=C=>e(r).start_date.$model=e(fe)(C))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(x,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[i[5]||(i[5]=C=>e(r).end_date.$model=C),i[6]||(i[6]=C=>e(r).end_date.$model=e(fe)(C))],error:e(r).end_date,"min-date":$.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":i[7]||(i[7]=C=>e(s).model.__approvers=C),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":i[8]||(i[8]=C=>e(r).__signers.$model=C),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(N,{modelValue:e(s).model.__parent,"onUpdate:modelValue":i[9]||(i[9]=C=>e(s).model.__parent=C),options:g.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:q.value,"onUpdate:modelValue":i[10]||(i[10]=C=>q.value=C),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:c(()=>[t(Kt,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},pl={class:"base-stepper-component flex items-center select-none"},ml=["onClick"],_l={key:0,class:"flex h-1 bg-greyscale-200 w-8"},ql={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(u,{emit:a}){const{t:n}=oe(),l=f=>{a("emit:stepClick",f)};return(f,s)=>{const o=ge;return h(),S("div",pl,[(h(!0),S(J,null,qe(u.items,(p,r)=>(h(),S("div",{key:p.id,class:"flex items-center"},[w("div",{class:je(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",p.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:q=>l(p)},[t(o,{icon:p.icon,class:je(p.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),w("span",null,A(e(n)(p.label)),1)],10,ml),r<u.items.length-1?(h(),S("div",_l)):ae("",!0)]))),128))])}}},Je=ye("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:y.withMessage("Поле не должен быть пустым",k)}},rules:{content:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},short_description:{required:y.withMessage("Поле не должен быть пустым",k)},__groups:{$each:y.forEach({__users:{required:y.withMessage("Поле не должен быть пустым",k)},__tags:{required:y.withMessage("Поле не должен быть пустым",k)},__regions:{required:y.withMessage("Поле не должен быть пустым",k)},__start_date:{required:y.withMessage("Поле не должен быть пустым",k)},__end_date:{required:y.withMessage("Поле не должен быть пустым",k)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:y.forEach({users:{required:y.withMessage("Поле не должен быть пустым",k)},text:{required:y.withMessage("Поле не должен быть пустым",k)}})}},booking_model:{bookings:[{type:_e,route:We,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:y.forEach({segments:{$each:y.forEach({departure_city:{required:y.withMessage("Поле не должен быть пустым",k)},arrival_city:{required:y.withMessage("Поле не должен быть пустым",k)},date:{required:y.withMessage("Поле не должен быть пустым",k)},time:{required:y.withMessage("Поле не должен быть пустым",k)},segment_class:{required:y.withMessage("Поле не должен быть пустым",k)}})},passengers:{required:y.withMessage("Поле не должен быть пустым",k)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Rt,active:!0,value:He},{id:2,label:"work-plan",icon:ut,active:!1,value:ot},{id:3,label:"route",icon:Dt,active:!1,value:st},{id:4,label:"decree",icon:ut,active:!0,value:Ze}],routeTabItems:[{id:1,title:"airplane",icon:pt,value:We},{id:2,title:"train",icon:mt,value:oo},{id:3,title:"taxi",icon:_t,value:$t}],routeTypeTabItems:[{id:1,title:"there-back",icon:pt,value:_e},{id:2,title:"complex-route",icon:mt,value:rt},{id:3,title:"one-way",icon:_t,value:lo}]}),actions:{async actionCreateDocument(u){const a=bt(u);this.buttonLoading=!0;const{response:n,error:l}=await $e(Ve,a);return n?(this.buttonLoading=!1,await de().actionCountList(),Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:u,body:a}){const n=await bt(a);try{this.buttonLoading=!0;const{data:l}=await xe({id:u,body:n});return Promise.resolve(l)}catch(l){return Promise.reject(l)}finally{await de().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){var a,n;try{this.detailLoading=!0;const{data:l}=await be(u),f=await to(l.id);this.decreeModel=(n=(a=f==null?void 0:f.data)==null?void 0:a.to_composes[0])==null?void 0:n.from_compose,we(this.model,l),this.model.__curator=await Le([],l.curator.id,!1),this.model.__signers=await G(l.signers),this.model.__approvers=await G(l.approvers);const s=Object.values(l.notices.reduce((o,p)=>{const r=p.group_id;return o[r]=o[r]||{group_id:r,items:[]},o[r].items.push(p),o},{}));this.model.__groups=await Promise.all(s.map(async o=>{const p=await Promise.all(o.items.map($=>G([],$.user.id,!1))),r=await nt(o.items[0].tags),q=await Xe("regions",o.items[0].locations),g=o.items[0].start_date,L=o.items[0].end_date;return{__users:p,__tags:r,__regions:q,__start_date:g,__end_date:L}})),this.trip_plan_model.trip_plans=await Promise.all(l.trip_plans.map(async(o,p)=>({...o,users:await G(o.users)}))),this.booking_model.bookings=await Promise.all(l.bookings.map(async o=>({type:o.type,route:o.route,segments:await Promise.all(o.segments.map(async p=>({departure_city:await Xe("regions",[],!1,p.departure_city.id),arrival_city:await Xe("regions",[],!1,p.arrival_city.id),segment_class:await no.find(r=>r.value===p.segment_class),date:fe(p.departure_date),time:await Qt(p.departure_date,p.departure_end_date)}))),passengers:await G(o.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},async actionStepClick(u,a,n){await u.replace({query:{...a.query,step:n}}),this.stepperItems.forEach(f=>f.active=f.value===n),await Tt();const l=document.querySelector(".document-view-aside");l&&l.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:_e,route:We,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(u){this.booking_model.bookings.splice(u,1)},actionChangeRouteSegment(u,a){const n=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=u===_e?[n(),n()]:[n()]},async actionAddRouteLine(u){this.booking_model.bookings[u].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(u,a){this.booking_model.bookings[u].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:_e,route:We,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),fl={class:"trip-info-components"},bl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},gl={class:"flex justify-between"},wl={class:"text-base text-primary-900 font-semibold mb-1"},hl=["onClick"],yl={class:"flex w-full gap-x-4"},vl={class:"text-base text-primary-900 font-semibold mb-2"},kl={class:"flex items-center justify-between"},yt={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},setup(u,{expose:a}){const n=ie(),l=se(),f=Je(),{t:s}=oe(),o=Z(f.rules,f.model),p=Q(!1),r=L=>{f.model.__files=[],L.forEach($=>{f.model.__files.push($)})},q=()=>{f.actionAddGroupBlock()},g=async L=>{const $=await o.value.$validate();if(p.value=!0,!$){F(null,s("fill-required-fields"),j.WARNING);return}await f.actionStepClick(l,n,L)};return a({stepClick:g}),(L,$)=>{const D=ue,T=Oe,z=ge,v=it,m=ze,U=ce,d=Pe;return h(),S("div",fl,[t(U,null,{default:c(()=>[t(D,{"col-class":"w-1/2"},{default:c(()=>[t(he,{modelValue:e(o).__curator.$model,"onUpdate:modelValue":$[0]||($[0]=i=>e(o).__curator.$model=i),error:e(o).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(D,{"col-class":"w-1/2"},{default:c(()=>[t(T,{modelValue:e(o).short_description.$model,"onUpdate:modelValue":$[1]||($[1]=i=>e(o).short_description.$model=i),error:e(o).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(D,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(h(!0),S(J,null,qe(e(f).model.__groups,(i,b)=>(h(),S("div",bl,[w("div",gl,[w("span",wl,A(e(s)("group"))+"-"+A(b+1),1),b!==0?(h(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:_=>e(f).actionDeleteGroupBlock(b)},[t(z,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,hl)):ae("",!0)]),t(U,null,{default:c(()=>[t(D,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:i.__users,"onUpdate:modelValue":_=>i.__users=_,error:e(o).__groups.$each.$response.$data[b].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(D,{"col-class":"w-1/2"},{default:c(()=>[t(v,{modelValue:i.__regions,"onUpdate:modelValue":_=>i.__regions=_,error:e(o).__groups.$each.$response.$data[b].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value},{chip:c(({value:_})=>[me(A(_.name),1)]),option:c(({value:_})=>[t(e(Se),{title:_.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(D,{"col-class":"w-1/2"},{default:c(()=>[t(v,{modelValue:i.__tags,"onUpdate:modelValue":_=>i.__tags=_,error:e(o).__groups.$each.$response.$data[b].__tags,"api-url":"tags","api-params":{document_sub_type:e(n).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":p.value},{chip:c(({value:_})=>[me(A(_.name),1)]),option:c(({value:_})=>[t(e(Se),{title:_.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),t(D,{"col-class":"w-1/2"},{default:c(()=>[w("div",yl,[t(m,{modelValue:i.__start_date,"onUpdate:modelValue":[_=>i.__start_date=_,_=>i.__start_date=e(fe)(_)],error:e(o).__groups.$each.$response.$data[b].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),t(m,{modelValue:i.__end_date,"onUpdate:modelValue":[_=>i.__end_date=_,_=>i.__end_date=e(fe)(_)],error:e(o).__groups.$each.$response.$data[b].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),t(d,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:q},null,8,["icon-left"])]),_:1}),t(D,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(f).model.__approvers,"onUpdate:modelValue":$[2]||($[2]=i=>e(f).model.__approvers=i),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(D,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(o).__signers.$model,"onUpdate:modelValue":$[3]||($[3]=i=>e(o).__signers.$model=i),error:e(o).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(D,{"col-class":"w-full"},{default:c(()=>[w("div",{class:je(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(f).model.content?"border-critic-500":"border-greyscale-200"])},[w("div",vl,A(e(s)("notice")),1),t(Ee,{modelValue:e(o).content.$model,"onUpdate:modelValue":$[4]||($[4]=i=>e(o).content.$model=i),error:e(o).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(f).model.__files,"onEmit:fileUpload":r},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),w("div",kl,[t(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(d,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:$[5]||($[5]=i=>g(e(ot)))})])])}}},$l={class:"work-plan-component"},xl={class:"flex flex-col gap-y-3"},Vl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ul={class:"flex justify-between"},El={class:"text-base text-primary-900 font-semibold mb-1"},Cl=["onClick"],Sl={class:"flex items-center justify-between mt-10"},Ll={class:"flex items-center gap-x-1"},Rl={__name:"WorkPlan",setup(u,{expose:a}){const{t:n}=oe(),l=ie(),f=se(),s=Je(),o=Z(s.trip_plan_rules,s.trip_plan_model),p=Q(!1),r=ne(()=>{const L=new Set;return s.model.__groups.reduce(($,D)=>D.__users&&Array.isArray(D.__users)?$.concat(D.__users):$,[]).filter($=>L.has($.id)?!1:(L.add($.id),!0))}),q=async L=>{const $=await o.value.$validate();if(p.value=!0,!$){F(null,n("fill-required-fields"),j.WARNING);return}await s.actionStepClick(f,l,L)},g=()=>{s.actionAddWorkPlanRow(),p.value=!1};return a({stepClick:q}),(L,$)=>{const D=ge,T=xt,z=ue,v=ce,m=Pe;return h(),S("div",$l,[w("div",xl,[(h(!0),S(J,null,qe(e(s).trip_plan_model.trip_plans,(U,d)=>(h(),S("div",Vl,[w("div",Ul,[w("span",El,A(e(n)("plan"))+"-"+A(d+1),1),d!==0?(h(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:i=>e(s).actionDeleteWorkPlanRow(d)},[t(D,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Cl)):ae("",!0)]),t(v,null,{default:c(()=>[t(z,{"col-class":"w-1/2"},{default:c(()=>[t(T,{modelValue:U.text,"onUpdate:modelValue":i=>U.text=i,error:e(o).trip_plans.$each.$response.$data[d].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(z,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:U.users,"onUpdate:modelValue":i=>U.users=i,options:r.value,error:e(o).trip_plans.$each.$response.$data[d].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),t(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:g},null,8,["icon-left"]),w("div",Sl,[t(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",Ll,[t(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:$[0]||($[0]=U=>q(e(He)))}),t(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:$[1]||($[1]=U=>q(e(st)))})])])])}}};const Dl={class:"base-time-picker"},Tl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(u){const a=u,n=et(a,"modelValue"),{t:l}=oe();return(f,s)=>{var r;const o=uo,p=ge;return h(),S("div",Dl,[t(o,{label:a.label,required:a.required},null,8,["label","required"]),t(e(po),{modelValue:e(n),"onUpdate:modelValue":s[0]||(s[0]=q=>Ye(n)?n.value=q:null),"time-picker":"",range:u.range,"cancel-text":e(l)("cancel"),"select-text":e(l)("select"),placeholder:e(l)(u.placeholder),ref:"datePicker",class:je({"input-error":((r=u.error)==null?void 0:r.$error)&&u.showNestedError})},{"input-icon":c(()=>[t(p,{icon:e(Mt),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Ml={class:"route-component flex flex-col gap-y-3"},Ol={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Pl={class:"flex items-center justify-between"},Nl={class:"flex items-center gap-x-4"},Al={class:"text-base text-primary-900 font-semibold mb-1"},Il={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},jl={class:"text-xs text-greyscale-900 font-medium"},Fl=["onClick"],Bl=["onClick"],zl={class:"text-sm text-primary-500 font-semibold"},Gl={class:"flex items-center justify-between mt-10"},Wl={class:"flex items-center gap-x-1"},Yl={__name:"Route",props:{formType:{type:String,default:I}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:n}){const{t:l}=oe(),f=ie(),s=se(),o=Je(),p=Ae();le(),de();const r=Z(o.booking_model_rules,o.booking_model);Q(!1);const q=Q(!1),g=ne(()=>{const d=new Set;return o.model.__groups.reduce((i,b)=>b.__users&&Array.isArray(b.__users)?i.concat(b.__users):i,[]).filter(i=>d.has(i.id)?!1:(d.add(i.id),!0))}),L=d=>{o.routeTabItems.forEach(i=>i.active=i.id===d.id)},$=(d,i)=>{o.routeTypeTabItems.forEach(b=>b.active=b.id===d.id),o.actionChangeRouteSegment(d.value,i)},D=async d=>{const i=await r.value.$validate();if(q.value=!0,!i){F(null,l("fill-required-fields"),j.WARNING);return}await o.actionStepClick(s,f,d)},T=()=>{o.actionAddRouteRow(),q.value=!1},z=(d,i,b,_)=>{_.type===_e&&(o.booking_model.bookings[i].segments[b+1].arrival_city=d)},v=(d,i,b,_)=>{_.type===_e&&(o.booking_model.bookings[i].segments[b+1].departure_city=d)},m=(d,i,b,_)=>{_.type===_e&&(o.booking_model.bookings[i].segments[b+1].segment_class=d)},U=()=>{D(Ze),n("emit:onValidateAndSend")};return a({stepClick:D}),(d,i)=>{const b=lt,_=ue,x=ze,N=ce,P=Pe;return h(),S("div",Ml,[(h(!0),S(J,null,qe(e(o).booking_model.bookings,(C,V)=>(h(),S("div",Ol,[w("div",Pl,[w("div",Nl,[w("span",Al,A(e(l)("route"))+"-"+A(V+1),1),t(ht,{modelValue:C.route,"onUpdate:modelValue":E=>C.route=E,items:e(o).routeTabItems,"onEmit:onChange":i[0]||(i[0]=E=>L(E))},null,8,["modelValue","onUpdate:modelValue","items"]),t(ht,{modelValue:C.type,"onUpdate:modelValue":E=>C.type=E,items:e(o).routeTypeTabItems,"onEmit:onChange":E=>$(E,V)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),V!==0?(h(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:i[1]||(i[1]=(...E)=>e(o).actionDeleteRouteRow&&e(o).actionDeleteRouteRow(...E))},[t(ge,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):ae("",!0)]),w("div",Il,[t(ge,{icon:e(Ot),class:"text-warning-500"},null,8,["icon"]),w("span",jl,A(e(l)("route-warning")),1)]),(h(!0),S(J,null,qe(C.segments,(E,M)=>(h(),S("div",null,[t(N,null,{default:c(()=>[t(_,{"col-class":"w-1/5"},{default:c(()=>[t(b,{modelValue:E.departure_city,"onUpdate:modelValue":R=>E.departure_city=R,error:e(r).bookings.$each.$response.$data[V].segments.$each.$data[M].departure_city,options:e(p).regionsList,"onUpdate:options":i[2]||(i[2]=R=>e(p).regionsList=R),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:C.type===e(_e)&&M%2!==0,"onEmit:change":R=>z(R,V,M,C)},{option:c(({option:R})=>[t(e(Se),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(_,{"col-class":"w-1/5"},{default:c(()=>[t(b,{modelValue:E.arrival_city,"onUpdate:modelValue":R=>E.arrival_city=R,error:e(r).bookings.$each.$response.$data[V].segments.$each.$data[M].arrival_city,options:e(p).regionsList,"onUpdate:options":i[3]||(i[3]=R=>e(p).regionsList=R),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:C.type===e(_e)&&M%2!==0,"onEmit:change":R=>v(R,V,M,C)},{option:c(({option:R})=>[t(e(Se),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(_,{"col-class":"w-1/5"},{default:c(()=>[t(b,{modelValue:E.segment_class,"onUpdate:modelValue":R=>E.segment_class=R,error:e(r).bookings.$each.$response.$data[V].segments.$each.$data[M].segment_class,options:C.route===e($t)?e(ro):C.route===e(We)?e(ao):e(so),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":q.value,translatable:"",disabled:C.type===e(_e)&&M%2!==0,"onEmit:change":R=>m(R,V,M,C)},{option:c(({option:R})=>[t(e(Se),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),t(_,{"col-class":"w-1/5"},{default:c(()=>[t(x,{modelValue:E.date,"onUpdate:modelValue":[R=>E.date=R,R=>E.date=e(fe)(R)],error:e(r).bookings.$each.$response.$data[V].segments.$each.$data[M].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),t(_,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[t(Tl,{modelValue:E.time,"onUpdate:modelValue":R=>E.time=R,error:e(r).bookings.$each.$response.$data[V].segments.$each.$data[M].time,label:"time",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),C.type===e(rt)&&M!==0?(h(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:R=>e(o).actionDeleteRouteLine(V,M)},[t(ge,{icon:e(Fe),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Fl)):ae("",!0)]),_:2},1024)]),_:2},1024)]))),256)),C.type===e(rt)?(h(),S("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:E=>e(o).actionAddRouteLine(V)},[t(ge,{icon:e(Be),class:"text-primary-500"},null,8,["icon"]),w("span",zl,A(e(l)("add-line")),1)],8,Bl)):ae("",!0),t(N,null,{default:c(()=>[t(_,{"col-class":"w-full"},{default:c(()=>[t(W,{modelValue:C.passengers,"onUpdate:modelValue":E=>C.passengers=E,options:g.value,error:e(r).bookings.$each.$response.$data[V].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),t(P,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:T},null,8,["icon-left"]),w("div",Gl,[t(P,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",Wl,[t(P,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:i[4]||(i[4]=C=>D(e(ot)))}),t(P,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(o).buttonLoading,onClick:U},null,8,["loading"])])])])}}},Hl={class:"decree-component"},Kl={class:"flex items-center justify-between mt-10"},Ql={class:"flex items-center gap-x-1"},Jl={__name:"Decree",props:{formType:{type:String,default:I}},setup(u,{expose:a}){const n=u,l=ie(),f=se(),s=Je(),o=Z(s.decreeRules,s.decreeModel),{t:p}=oe(),r=le(),q=de(),g=Q(!1),L=async v=>{await s.actionStepClick(f,l,v)},$=v=>{s.decreeModel.__files=[],v.forEach(m=>{s.decreeModel.__files.push(m)})},D=async()=>{var m,U,d,i;if(!await o.value.$validate()){F(null,p("fill-required-fields"),j.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(U=(m=s.model)==null?void 0:m.__curator)==null?void 0:U.user_id,s.decreeModel.journal=re.ORDERS_PROTOCOLS,s.decreeModel.company=r.currentUser.company.id,s.decreeModel.sender=(i=(d=r==null?void 0:r.currentUser)==null?void 0:d.top_level_department)==null?void 0:i.id,s.decreeModel.document_type=X.DECREE,s.decreeModel.document_sub_type=ee.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,g.value=!0},T=async(v,m)=>{try{await s.actionUpdateDocument({id:m,body:{...s.decreeModel,trip_notice_id:v}}),await q.actionCountList(),F(null,p("successfully-saved"),j.SUCCESS)}catch{}},z=async()=>{var m;let v=null;n.formType===I&&l.query.notice_id?v=l.query.notice_id:n.formType===Ke&&l.params.id&&(v=l.params.id);try{await T(v,(m=s.decreeModel)==null?void 0:m.id),await f.replace({name:Ue,params:{id:v,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})}catch{}};return a({stepClick:L}),(v,m)=>{const U=Pe;return h(),S("div",Hl,[t(Ee,{modelValue:e(o).content.$model,"onUpdate:modelValue":m[0]||(m[0]=d=>e(o).content.$model=d),error:e(o).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":$},null,8,["modelValue","error","files"]),w("div",Kl,[t(U,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),w("div",Ql,[t(U,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:m[1]||(m[1]=d=>L(e(He)))}),t(U,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:D})])]),t(Ce,{modelValue:g.value,"onUpdate:modelValue":m[2]||(m[2]=d=>g.value=d),"send-button-loading":e(s).buttonLoading,"onEmit:send":z,"content-classes":"p-0"},{content:c(()=>[t(e(Jt),{"compose-model":{...e(s).model,bookings:e(s).booking_model.bookings,trip_plans:e(s).trip_plan_model.trip_plans,decree_content:e(s).decreeModel.content},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},Xl={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},Zl={class:"px-6 py-4"},fr={__name:"BusinessTripForm",props:{formType:{type:String,default:I}},setup(u){const a=u,{t:n}=oe(),l=ie(),f=se(),s=le(),o=Je();Z(o.rules,o.model),Z(o.trip_plan_rules,o.trip_plan_model),Z(o.booking_model_rules,o.booking_model),Z(o.decreeRules,o.decreeModel);const p=Q(null),r=ne(()=>a.formType===I?"create-business-trip-notice":"update-business-trip-notice"),q=ne(()=>{switch(l.query.step){case He:return yt;case Ze:return Jl;case ot:return Rl;case st:return Yl;default:return yt}}),g=async T=>{var v;const z=e(p);((v=l.query)==null?void 0:v.step)!==T.value&&(await z.stepClick(T.value),T.value===Ze&&(await $(),await F(null,n("notice-saved-successfully"),j.SUCCESS)))},L=async()=>{l.query.step||await f.replace({query:{...l.query,step:He}}),o.stepperItems.forEach(T=>T.active=T.value===l.query.step)},$=async()=>{var v,m,U,d,i,b,_,x,N,P,C,V;const T=te(o.model.__approvers),z=te(o.model.__signers);if(o.model.approvers=[],o.model.signers=[],o.model.notices=[],o.model.bookings=[],o.model.trip_plans=[],o.model.approvers=T,o.model.signers=z,o.model.curator=(m=(v=o.model)==null?void 0:v.__curator)==null?void 0:m.user_id,o.model.journal=re.INNER,o.model.company=(d=(U=s.currentUser)==null?void 0:U.company)==null?void 0:d.id,o.model.__groups.forEach((E,M)=>{const R=M+1;o.model.notices.push(...E.__users.map(K=>{var pe,O;return{start_date:E.__start_date,end_date:E.__end_date,user:K.id,company:(O=(pe=s.currentUser)==null?void 0:pe.company)==null?void 0:O.id,regions:E.__regions.map(Y=>Y.id),tags:E.__tags.map(Y=>({id:Y.id})),group_id:R}}))}),o.model.sender=(b=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:b.id,o.model.files=o.model.__files.map(E=>({id:E.id})),o.model.document_type=l.params.document_type,o.model.document_sub_type=l.params.document_sub_type,o.model.bookings=o.booking_model.bookings.map(E=>({...E,segments:E.segments.map(M=>{var R,K;return{departure_city:M.departure_city.id,arrival_city:M.arrival_city.id,departure_date:`${M.date}T${(R=M.time)==null?void 0:R.hours}:${(K=M.time)==null?void 0:K.minutes}:00+05:00`,departure_end_date:null,segment_class:M.segment_class.value}}),passengers:E.passengers.map(M=>({user:M.id}))})),o.model.trip_plans=o.trip_plan_model.trip_plans.map(E=>({users:E.users.map(M=>({id:M.id})),text:E.text})),a.formType===I&&l.query.notice_id)try{await o.actionUpdateDocument({id:l.query.notice_id,body:o.model})}catch{}else if(a.formType===I)try{const{data:E}=await o.actionCreateDocument(o.model),M={approvers:[],signers:[],curator:(x=(_=o.model)==null?void 0:_.__curator)==null?void 0:x.user_id,journal:re.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:(P=(N=s==null?void 0:s.currentUser)==null?void 0:N.top_level_department)==null?void 0:P.id,document_type:X.DECREE,document_sub_type:ee.BUSINESS_TRIP_DECREE_V2,short_description:(C=o.model)==null?void 0:C.short_description,trip_notice_id:E.id,content:E.content};o.decreeModel.content=E.content;try{const R=await o.actionCreateDocument(M);o.decreeModel.id=(V=R==null?void 0:R.data)==null?void 0:V.id,await f.replace({query:{...l.query,notice_id:E.id}})}catch{}}catch{}else if(a.formType===Ke&&l.params.id)try{await o.actionUpdateDocument({id:l.params.id,body:o.model})}catch{}},D=async()=>{try{await $(),await F(null,n("notice-saved-successfully"),j.SUCCESS)}catch{}};return Qe(async()=>{await L(),a.formType===Ke?await o.actionGetDocumentDetailForUpdate(l.params.id):l.query.notice_id&&await o.actionGetDocumentDetailForUpdate(l.query.notice_id)}),Re(()=>{o.actionResetBTModel()}),(T,z)=>{const v=ve,m=ql;return h(),S("div",{class:je(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(o).detailLoading}])},[e(o).detailLoading?(h(),H(v,{key:0})):(h(),H(e(ke),{key:1,title:r.value},{content:c(()=>[w("div",Xl,[t(m,{items:e(o).stepperItems,"onEmit:stepClick":g},null,8,["items"])]),w("div",Zl,[(h(),H(Pt(q.value),{"form-type":u.formType,ref_key:"childComponent",ref:p,"onEmit:onValidateAndSend":D},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},en=ye("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",k)},__curator:{required:y.withMessage("Поле не должен быть пустым",k)},__signers:{required:y.withMessage("Поле не должен быть пустым",k)},short_description:{required:y.withMessage("Поле не должен быть пустым",k)},__groups:{$each:y.forEach({__users:{required:y.withMessage("Поле не должен быть пустым",k)},__tags:{required:y.withMessage("Поле не должен быть пустым",k)},__regions:{required:y.withMessage("Поле не должен быть пустым",k)},__start_date:{required:y.withMessage("Поле не должен быть пустым",k)},__end_date:{required:y.withMessage("Поле не должен быть пустым",k)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:y.forEach({users:{required:y.withMessage("Поле не должен быть пустым",k)},text:{required:y.withMessage("Поле не должен быть пустым",k)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:n}=await $e(Ve,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:n}=await xe({id:u,body:a});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}}}}),tn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},on={class:"flex justify-between"},ln={class:"text-base text-primary-900 font-semibold mb-1"},nn=["onClick"],rn={class:"flex w-full gap-x-4"},an={class:"flex flex-col gap-y-3"},sn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},dn={class:"flex justify-between"},cn={class:"text-base text-primary-900 font-semibold mb-1"},un=["onClick"],pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"text-base text-primary-900 font-semibold mb-2"},br={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:I}},setup(u){const a=u,n=Q(!1),l=Q(!1),{t:f}=oe(),s=ie(),o=se(),p=le(),r=en(),q=de();Ae();const g=Z(r.rules,r.model),L=Z(r.trip_plan_rules,r.trip_plan_model),$=ne(()=>a.formType===I?"create-decree":"update-decree"),D=ne(()=>{const _=new Set;return r.model.__groups.reduce((x,N)=>N.__users&&Array.isArray(N.__users)?x.concat(N.__users):x,[]).filter(x=>_.has(x.id)?!1:(_.add(x.id),!0))}),T=async()=>{var P,C,V,E,M,R;if(n.value=!0,!await g.value.$validate()){F(null,f("fill-required-fields"),j.WARNING);return}const x=te(r.model.__approvers),N=te(r.model.__signers);r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.bookings=[],r.model.trip_plans=[],r.model.approvers=x,r.model.signers=N,r.model.curator=(C=(P=r.model)==null?void 0:P.__curator)==null?void 0:C.user_id,r.model.journal=re.ORDERS_PROTOCOLS,r.model.company=(E=(V=p.currentUser)==null?void 0:V.company)==null?void 0:E.id,r.model.__groups.forEach((K,pe)=>{const O=pe+1;r.model.notices.push(...K.__users.map(Y=>{var B,Ge;return{start_date:K.__start_date,end_date:K.__end_date,user:Y.id,company:(Ge=(B=p.currentUser)==null?void 0:B.company)==null?void 0:Ge.id,regions:K.__regions.map(Ie=>Ie.id),tags:K.__tags.map(Ie=>({id:Ie.id})),group_id:O}}))}),r.model.sender=(R=(M=p==null?void 0:p.currentUser)==null?void 0:M.top_level_department)==null?void 0:R.id,r.model.files=r.model.__files.map(K=>({id:K.id})),r.model.document_type=s.params.document_type,r.model.document_sub_type=s.params.document_sub_type,r.model.trip_plans=r.trip_plan_model.trip_plans.map(K=>({users:K.users.map(pe=>({id:pe.id})),text:K.text})),l.value=!0},z=()=>{},v=()=>{r.actionAddGroupBlock()},m=()=>{r.actionAddWorkPlanRow(),n.value=!1},U=_=>{r.model.__files=[],_.forEach(x=>{r.model.__files.push(x)})},d=async()=>{const _=await r.actionCreateDocument(r.model);await q.actionCountList(),_?(l.value=!1,F(null,f("document-sent"),j.SUCCESS),await o.replace({name:De,query:{document_type:s.params.document_type}})):F(null,f("error-occurred"),j.ERROR)},i=async()=>{await r.actionUpdateDocument({id:s.params.id,body:r.model}),await q.actionCountList(),F(null,f("changed"),j.SUCCESS),await o.replace({name:Ue,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},b=()=>{a.formType===I?d():i()};return(_,x)=>{const N=ve,P=ue,C=Oe,V=ge,E=it,M=ze,R=ce,K=Pe,pe=xt;return e(r).detailLoading?(h(),H(N,{key:0})):(h(),S(J,{key:1},[t(e(ke),{title:$.value},{content:c(()=>[t(Te,{"onEmit:preview":T,"onEmit:clearForm":z},{default:c(()=>[t(R,null,{default:c(()=>[t(P,{"col-class":"w-1/2"},{default:c(()=>[t(he,{modelValue:e(g).__curator.$model,"onUpdate:modelValue":x[0]||(x[0]=O=>e(g).__curator.$model=O),error:e(g).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(P,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(g).short_description.$model,"onUpdate:modelValue":x[1]||(x[1]=O=>e(g).short_description.$model=O),error:e(g).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(P,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(h(!0),S(J,null,qe(e(r).model.__groups,(O,Y)=>(h(),S("div",tn,[w("div",on,[w("span",ln,A(e(f)("group"))+"-"+A(Y+1),1),Y!==0?(h(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:B=>e(r).actionDeleteGroupBlock(Y)},[t(V,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,nn)):ae("",!0)]),t(R,null,{default:c(()=>[t(P,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:O.__users,"onUpdate:modelValue":B=>O.__users=B,error:e(g).__groups.$each.$response.$data[Y].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:c(()=>[t(E,{modelValue:O.__regions,"onUpdate:modelValue":B=>O.__regions=B,error:e(g).__groups.$each.$response.$data[Y].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":n.value},{chip:c(({value:B})=>[me(A(B.name),1)]),option:c(({value:B})=>[t(e(Se),{title:B.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:c(()=>[t(E,{modelValue:O.__tags,"onUpdate:modelValue":B=>O.__tags=B,error:e(g).__groups.$each.$response.$data[Y].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":n.value},{chip:c(({value:B})=>[me(A(B.name),1)]),option:c(({value:B})=>[t(e(Se),{title:B.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:c(()=>[w("div",rn,[t(M,{modelValue:O.__start_date,"onUpdate:modelValue":[B=>O.__start_date=B,B=>O.__start_date=e(fe)(B)],error:e(g).__groups.$each.$response.$data[Y].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),t(M,{modelValue:O.__end_date,"onUpdate:modelValue":[B=>O.__end_date=B,B=>O.__end_date=e(fe)(B)],error:e(g).__groups.$each.$response.$data[Y].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),t(K,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:v},null,8,["icon-left"])]),_:1})]),_:1}),w("div",an,[(h(!0),S(J,null,qe(e(r).trip_plan_model.trip_plans,(O,Y)=>(h(),S("div",sn,[w("div",dn,[w("span",cn,A(e(f)("plan"))+"-"+A(Y+1),1),Y!==0?(h(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:B=>e(r).actionDeleteWorkPlanRow(Y)},[t(V,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,un)):ae("",!0)]),t(R,null,{default:c(()=>[t(P,{"col-class":"w-1/2"},{default:c(()=>[t(pe,{modelValue:O.text,"onUpdate:modelValue":B=>O.text=B,error:e(L).trip_plans.$each.$response.$data[Y].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),t(P,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:O.users,"onUpdate:modelValue":B=>O.users=B,options:D.value,error:e(L).trip_plans.$each.$response.$data[Y].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":n.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),t(K,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:m},null,8,["icon-left"]),t(R,null,{default:c(()=>[t(P,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":x[2]||(x[2]=O=>e(r).model.__approvers=O),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(P,{"col-class":"w-1/2"},{default:c(()=>[t(W,{modelValue:e(g).__signers.$model,"onUpdate:modelValue":x[3]||(x[3]=O=>e(g).__signers.$model=O),error:e(g).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(P,{"col-class":"w-full"},{default:c(()=>[w("div",pn,[w("div",mn,A(e(f)("decree")),1),t(Ee,{modelValue:e(g).content.$model,"onUpdate:modelValue":x[4]||(x[4]=O=>e(g).content.$model=O),error:e(g).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":U},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(Ce,{modelValue:l.value,"onUpdate:modelValue":x[5]||(x[5]=O=>l.value=O),"send-button-loading":e(r).buttonLoading,"onEmit:send":b},{content:c(()=>[t(e(kt),{"compose-model":{...e(r).model,trip_plans:e(r).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{dr as _,pr as a,mr as b,_r as c,fr as d,br as e,cr as f,ur as g,qr as h};
