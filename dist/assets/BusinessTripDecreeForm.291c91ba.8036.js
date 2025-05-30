import{_ as ce}from"./BaseRow.04a79cf2.8036.js";import{_ as Pe}from"./BaseInput.8b007e4a.8036.js";import{_ as ue}from"./BaseCol.260f5c15.8036.js";import{v as X,ba as oo,a1 as to,o as $,c as C,i as o,z as d,h as e,b7 as He,d as ne,dt as Oe,a as y,t as F,F as Q,e as qe,a3 as me,g as ae,f as K,B as $o,dy as Vo,bi as xo,n as ze,r as go,G as Ne,as as ke,cL as J,cM as ee,cj as re,u as te,b as se,ao as ie,bd as De,a5 as I,ac as $e,a8 as Uo,cX as Qe,dz as Eo,_ as he,dA as So,dB as Co,dC as Lo,dD as Ro,dE as Do,$ as To,dF as Mo,dG as Oo,b6 as Po,bs as Fe,b$ as je,dH as No,dr as Ao,E as Io}from"./index.2ce1b89b.2981.js";import{c as k,r as U,u as Z}from"./index.1e4f26ad.8036.js";import{_ as zo,a as Fo}from"./BranchMultiSelect.489640c7.8036.js";import{j as jo,k as Bo,l as Go,_ as Ve,a as Wo,h as Yo,f as Ho,b as Ko,c as Xo,d as Qo,e as wo,i as Jo,m as Zo,g as et}from"./BasePOA.e4982c2a.8036.js";import"./BaseTabMenu.vue_vue_type_style_index_0_scoped_b0c8bdfd_lang.ad2e8002.8036.js";import"./dialog.esm.1afc6c41.8036.js";import"./tabpanel.esm.229cc9fc.8036.js";import"./FileSaver.min.4ce6d00d.8036.js";import{X as uo,s as ye,V as G,Y as ot,Z as Ae,_ as oe,$ as Re,a0 as po,a1 as lo,a2 as We,O as mo}from"./index.0f51cfc5.8036.js";import"./BaseTabView.cf01b000.8036.js";import"./FileTabs.263f3144.8036.js";import{_ as W}from"./UserMultiSelect.16b0115b.8036.js";import{c as tt,u as le,w as xe,d as z}from"./axios.config.f0d6561e.8036.js";import{u as fe}from"./common.d6168239.8036.js";import{u as de}from"./count.store.09c5daea.8036.js";import{u as ro,a as Ue,b as we,c as Ee,d as lt,f as nt}from"./index.store.bcfa6f84.8036.js";import{d as _o,e as Te,c as Se,f as _e,B as Ye,g as Ke,h as eo,i as rt,j as ho,M as no,O as at,T as st,k as ao,l as yo,C as it,P as dt,m as ct}from"./index.3493ff30.8036.js";import{F as j,a as Xe}from"./constants.50c90617.8036.js";import{_ as Je}from"./BaseDropdown.66361f82.8036.js";import{_ as Be}from"./BaseCalendar.9ffbfff2.8036.js";import{_ as so}from"./BaseMultiSelect.157228ed.8036.js";import{f as ut,a as be}from"./formatDate.fd421aa3.8036.js";import{Q as qo}from"./qrcode.vue.esm.c6384439.8036.js";import"./divider.esm.f8ffbcca.8036.js";import"./dayjs.min.163ab041.8036.js";/* empty css                                                                                    */import{c as pt}from"./Dropdown.990935a8.8036.js";import"./menu.esm.c204bf89.8036.js";/* empty css                                                      */import"./avatar.esm.2adad419.8036.js";/* empty css                                                      */import"./businessTrip.store.4d88e946.8036.js";/* empty css                                                            */import"./accordiontab.esm.7edd086d.8036.js";import"./common.store.c4cbb0cf.8036.js";import{_ as ge}from"./WithRadio.241e47c0.8036.js";import"./radiobutton.esm.637aef82.8036.js";import"./checkbox.esm.02c80e3d.8036.js";import"./index.es6.f9050ba3.8036.js";import{_ as vo}from"./ShortDescription.abe32bc1.8036.js";import{_ as fo}from"./BaseBrickRadio.74b2831e.8036.js";import{_ as mt}from"./BaseLabel.6cbc74db.8036.js";import{K as _t}from"./main.0446a376.8036.js";import{_ as qt}from"./WithSelectable.11084399.8036.js";import{_ as ft}from"./BaseBrickTab.c4583919.8036.js";import{_ as bt}from"./BaseFileUpload.66e78063.8036.js";import{_ as gt}from"./BaseFroalaEditor.2cf11741.8036.js";import{_ as wt}from"./BaseDialog.c95eaa57.8036.js";const ht={class:"user-select"},ve={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(p,{emit:s}){const r=p,t=X([]),v=oo(r,"modelValue"),a=async n=>{let{data:m}=await tt.get(`${r.apiUrl}/`,n);m.hasOwnProperty("results")?t.value=m.results:t.value=m};return to(async()=>{await a(r.apiParams)}),(n,m)=>($(),C("div",ht,[o(Je,{modelValue:e(v),"onUpdate:modelValue":m[0]||(m[0]=l=>He(v)?v.value=l:null),options:t.value,"onUpdate:options":m[1]||(m[1]=l=>t.value=l),error:r.error,"api-url":r.apiUrl,"api-params":r.apiParams,"option-label":"full_name",label:r.label,placeholder:r.placeholder,required:r.required,searchable:"","onEmit:change":m[2]||(m[2]=l=>s("emit:change",l))},{option:d(({option:l})=>[o(e(qt),{items:[l]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},yt={class:"business-trip-decree-template-view letter-template"},vt={class:"flex flex-col text-sm font-medium mt-4"},kt=y("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),$t=["innerHTML"],Vt=["innerHTML"],xt={class:"employees-table text-sm mt-4"},Ut={class:"w-full"},Et=y("tr",{class:"text-center"},[y("td",{class:"border-2 p-1"},"№"),y("td",{class:"border-2 p-1"},"F.I.SH"),y("td",{class:"border-2 p-1"},"Departament va lavozim"),y("td",{class:"border-2 p-1"},"Yo'nalish"),y("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),St={class:"text-center"},Ct={class:"border-2 p-1"},Lt={class:"border-2 p-1"},Rt={class:"border-2 p-1"},Dt=y("br",null,null,-1),Tt={class:"border-2 p-1"},Mt={class:"flex flex-col gap-y-1"},Ot={key:0},Pt={class:"border-2 p-1 w-[100px]"},Nt=y("br",null,null,-1),At={class:"indent-8 mt-2 text-sm text-justify"},It=y("div",null,"xizmat safariga yuborilsin.",-1),zt=y("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Ft=y("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),jt=y("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Bt={key:0},Gt=y("span",{class:"font-semibold"},"Asos: ",-1),Wt=y("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),Yt=y("div",null," O‘zR MKning 287-moddasi; ",-1),Ht=y("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),Kt={class:"mt-6 pb-2 px-4"},Xt={class:"text-sm font-semibold block"},Qt={class:"text-sm font-semibold block"},Jt={class:"text-sm font-semibold block"},Zt={class:"text-sm font-semibold block"},el={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(p){const s=p,r=ro(),t=ne(()=>{var m;return s.preview?le().currentUser:(m=s.composeModel)==null?void 0:m.author}),v=ne(()=>{var m,l,_;return s.preview?(m=s.composeModel)==null?void 0:m.__employees.map(w=>({empFullName:w.full_name,empDepName:w.top_level_department.name,empPositionName:w.position.name,destinations:s.composeModel.__companies,startDate:s.composeModel.start_date,endDate:s.composeModel.end_date})):(_=(l=s.composeModel)==null?void 0:l.notices)==null?void 0:_.map(w=>({empFullName:w.user.full_name,empDepName:w.user.top_level_department.name,empPositionName:w.user.position.name,destinations:w.destinations,startDate:w.start_date,endDate:w.end_date}))}),a=ne(()=>{var l,_,w;if(s.preview)return[(l=s.composeModel)==null?void 0:l.__curator];const m=(_=s.composeModel)==null?void 0:_.signers.find(T=>T.type===Oe.BASIC_SIGNER);return m?[m]:[(w=s.composeModel)==null?void 0:w.curator].filter(Boolean)}),n=ne(()=>{var m,l;return s.preview?(m=s.composeModel)==null?void 0:m.__signers:(l=s.composeModel)==null?void 0:l.signers.filter(_=>_.type===Oe.SIGNER)});return(m,l)=>{var T,R,P,M,D,b,u,E;const _=ue,w=ce;return $(),C("div",yt,[o(e(jo)),o(e(Bo),{"dep-name":(R=(T=t.value)==null?void 0:T.top_level_department)==null?void 0:R.name},null,8,["dep-name"]),y("div",vt,[y("span",null," № "+F((P=s.composeModel)==null?void 0:P.register_number),1),y("span",null,F(((M=s.composeModel)==null?void 0:M.register_date)&&e(ut)((D=s.composeModel)==null?void 0:D.register_date)),1)]),kt,e(r).historyShow?($(),C("div",{key:0,class:"text-justify",innerHTML:e(r).historyContent},null,8,$t)):($(),C("div",{key:1,class:"text-justify",innerHTML:(b=s.composeModel)==null?void 0:b.content},null,8,Vt)),y("div",xt,[y("table",Ut,[Et,v.value&&v.value.length?($(!0),C(Q,{key:0},qe(v.value,(i,c)=>($(),C("tr",St,[y("td",Ct,F(c+1),1),y("td",Lt,F(i.empFullName),1),y("td",Rt,[me(F(i.empDepName)+" ",1),Dt,me(" "+F(i.empPositionName),1)]),y("td",Tt,[y("div",Mt,[($(!0),C(Q,null,qe(i.destinations,(g,f)=>($(),C("span",null,[me(F(g.name)+" ",1),f!==i.destinations.length-1?($(),C("span",Ot,",")):ae("",!0)]))),256))])]),y("td",Pt,[me(F(i.startDate)+" ",1),Nt,me(" "+F(i.endDate),1)])]))),256)):ae("",!0)])]),y("div",At,[It,zt,Ft,jt,(u=p.composeModel)!=null&&u.trip_notice_register_number?($(),C("div",Bt,[Gt,me(F((E=p.composeModel)==null?void 0:E.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):ae("",!0),Wt,Yt,Ht]),y("div",Kt,[($(!0),C(Q,null,qe(a.value,i=>($(),K(w,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[o(_,{"col-class":"w-1/3"},{default:d(()=>[y("span",Xt,F(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(_,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?($(),K(qo,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(_,{"col-class":"w-1/3"},{default:d(()=>[y("span",Qt,F(e(uo)(i)),1)]),_:2},1024)]),_:2},1024))),128)),($(!0),C(Q,null,qe(n.value,i=>($(),K(w,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[o(_,{"col-class":"w-1/3"},{default:d(()=>[y("span",Jt,F(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(_,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?($(),K(qo,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(_,{"col-class":"w-1/3"},{default:d(()=>[y("span",Zt,F(e(uo)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),o(e(Go),{"compose-model":s.composeModel,author:t.value},null,8,["compose-model","author"])])}}};var ol=`
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
`,tl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};$o.extend({name:"editor",css:ol,classes:tl});(function(){try{return window.Quill}catch{return null}})();const Ce={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(p){return["froala","tiny"].includes(p)}}},emits:["update:modelValue","emit:fileUpload"],setup(p,{emit:s}){const r=p,t=oo(r,"modelValue"),v=X([{title:"text",slot:"editor",icon:Vo},{title:"file",slot:"file",icon:xo}]);return(a,n)=>($(),K(ft,{"tab-panel-list":v.value,"panel-container-class":"px-0"},{editor:d(()=>[p.editor==="froala"?($(),K(gt,{key:0,modelValue:e(t),"onUpdate:modelValue":n[0]||(n[0]=m=>He(t)?t.value=m:null)},null,8,["modelValue"])):($(),K(pt,{key:1,modelValue:e(t),"onUpdate:modelValue":n[1]||(n[1]=m=>He(t)?t.value=m:null)},null,8,["modelValue"]))]),file:d(()=>[y("div",{class:ze(r.fileUploadContainerClasses)},[o(bt,{files:r.files,"onEmit:fileUpload":n[2]||(n[2]=m=>s("emit:fileUpload",m))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ll={class:"flex flex-col justify-between h-full"},nl={class:"px-6 py-4 overflow-y-auto"},rl={class:"actions p-6"},Me={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(p,{emit:s}){return(r,t)=>{const v=Ne;return $(),C("div",ll,[y("div",nl,[go(r.$slots,"default")]),y("div",rl,[o(v,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:t[0]||(t[0]=a=>s("emit:clearForm"))}),o(v,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:t[1]||(t[1]=a=>s("emit:preview"))})])])}}},al=ke("sd-stores-inner",{state:()=>{var p,s;return{buttonLoading:!1,detailLoading:!1,model:{company:(s=(p=le().currentUser)==null?void 0:p.company)==null?void 0:s.id,content:null,document_type:J.INNER,document_sub_type:ee.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:re.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:k.withMessage("Поле не должен быть пустым",U)},content:{required:k.withMessage("Поле не должен быть пустым",U)},__departments:{required:k.withMessage("Поле не должен быть пустым",U)},__approvers:{},__signers:{required:k.withMessage("Поле не должен быть пустым",U)}}}},actions:{async actionCreateDocument(p){let s={...p,type:_o,sub_type:_o};this.buttonLoading=!0;const{response:r,error:t}=await xe(Ee,s);return r?(this.buttonLoading=!1,Promise.resolve(r)):Promise.reject(t)},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await Ue({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:s}=await we(p);ye(this.model,s),this.model.__approvers=await G(s.approvers),this.model.__signers=await G(s.signers),this.model.__departments=await ot(s.receiver.departments),this.model.__files=s.files}catch{}finally{this.detailLoading=!1}}}}),sl={class:"font-semibold text-xl"},Le={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(p,{emit:s}){const t=oo(p,"modelValue"),{t:v}=te();return(a,n)=>{const m=Ne,l=wt;return $(),K(l,{modelValue:e(t),"onUpdate:modelValue":n[1]||(n[1]=_=>He(t)?t.value=_:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[y("span",sl,F(e(v)("preview")),1)]),content:d(()=>[go(a.$slots,"content")]),footer:d(()=>[o(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(m,{label:p.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:p.sendButtonLoading,onClick:n[0]||(n[0]=_=>s("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},qr={__name:"InnerForm",props:{formType:{type:String,default:j}},setup(p){const s=p,r=le(),t=al();fe();const v=de(),a=X(!1);X(null);const{t:n}=te(),m=se(),l=ie(),_=Z(t.rules,t.model),w=async()=>{await _.value.$validate()&&(a.value=!0,t.model.approvers=[],t.model.signers=[],t.model.departments=[],t.model.departments=t.model.__departments.map(u=>u.id),t.model.files=[],t.model.files=t.model.__files.map(u=>({id:u.id})),t.model.journal=re.INNER,t.model.sender=r.currentUser.top_level_department.id,t.model.approvers=oe(t.model.__approvers),t.model.signers=oe(t.model.__signers),t.model.document_type=l.params.document_type,t.model.document_sub_type=l.params.document_sub_type,t.model.receiver&&delete t.model.receiver)},T=()=>{s.formType===j?R():P()},R=async()=>{const b=await t.actionCreateDocument(t.model);await v.actionCountList(),b?(a.value=!1,z(null,n("document-sent"),I.SUCCESS),await m.replace({name:Te,query:{document_type:J.INNER}})):z(null,n("error-occurred"),I.ERROR)},P=async()=>{await t.actionUpdateDocument({id:l.params.id,body:t.model}),await v.actionCountList(),z(null,n("document-sent"),I.SUCCESS),await m.replace({name:Se,params:{id:l.params.id,document_type:J.INNER,document_sub_type:ee.SERVICE_LETTER}})},M=()=>{console.log("Clear Form")},D=b=>{t.model.__files=[],b.forEach(u=>{t.model.__files.push(u)})};return to(async()=>{l.params.id&&await t.actionGetDocumentDetailForUpdate(l.params.id)}),De(()=>{Ae(t.model)}),(b,u)=>{const E=$e,i=ue,c=Pe,g=ce;return e(t).detailLoading?($(),K(E,{key:0})):($(),C(Q,{key:1},[o(e(Ve),{title:s.formType===e(j)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[o(Me,{"onEmit:preview":w,"onEmit:clearForm":M},{default:d(()=>[o(g,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(zo,{modelValue:e(_).__departments.$model,"onUpdate:modelValue":u[0]||(u[0]=f=>e(_).__departments.$model=f),error:e(_).__departments},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(c,{modelValue:e(_).short_description.$model,"onUpdate:modelValue":u[1]||(u[1]=f=>e(_).short_description.$model=f),error:e(_).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(_).__approvers.$model,"onUpdate:modelValue":u[2]||(u[2]=f=>e(_).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":u[3]||(u[3]=f=>e(_).__signers.$model=f),error:e(_).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(_).content.$model,"onUpdate:modelValue":u[4]||(u[4]=f=>e(_).content.$model=f),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:a.value,"onUpdate:modelValue":u[5]||(u[5]=f=>a.value=f),"send-button-loading":e(t).buttonLoading,"onEmit:send":T},{content:d(()=>{var f,x;return[o(Wo,{"compose-model":{...e(t).model,signers:e(t).model.__signers,approvers:e(t).model.__approvers,author:e(t).model.__signers[0],sender:{name:(x=(f=e(r).currentUser)==null?void 0:f.top_level_department)==null?void 0:x.name},receiver:{departments:e(t).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},il=ke("sd-store-application",{state:()=>{var p,s;return{buttonLoading:!1,detailLoading:!1,model:{company:(s=(p=le().currentUser)==null?void 0:p.company)==null?void 0:s.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:k.withMessage("Поле не должен быть пустым",U)},__curator:{required:k.withMessage("Поле не должен быть пустым",U)},__approvers:{required:k.withMessage("Поле не должен быть пустым",U)},__signers:{}}}},actions:{async actionCreateDocument(p){let s={...p};this.buttonLoading=!0;const{response:r,error:t}=await xe(Ee,s);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await Ue({id:p,body:s});return Promise.resolve(r)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:s}=await we(p);ye(this.model,s),this.model.__approvers=await G(s.approvers),this.model.__signers=await G(s.signers.filter(r=>r.type===Oe.SIGNER)),this.model.__curator=await Re([],s.curator.id,!1),this.model.__files=s.files}catch{}finally{this.detailLoading=!1}}}}),ko=ke("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:le().currentUser.company.id,curator:null,document_type:J.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:re.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:k.withMessage("Поле не должен быть пустым",U)},register_date:{required:k.withMessage("Поле не должен быть пустым",U)},content:{required:k.withMessage("Поле не должен быть пустым",U)},__negotiators:{required:k.withMessage("Поле не должен быть пустым",U)},__curator:{required:k.withMessage("Поле не должен быть пустым",U)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:s,error:r}=await xe(Ee,p);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await Ue({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:s}=await we(p);ye(this.model,s),this.model.__signers=await G(s.signers.filter(r=>r.type!==Oe.NEGOTIATOR)),this.model.__negotiators=await G(s.signers.filter(r=>r.type===Oe.NEGOTIATOR)),this.model.__approvers=await G(s.approvers),this.model.__curator=await Re([],s.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),fr={__name:"ApplicationForm",props:{formType:{type:String,default:j}},setup(p){const s=p,r=le(),t=il();fe();const v=de();ko();const a=X(!1);X(null);const{t:n}=te(),m=se(),l=ie(),_=Z(t.rules,t.model),w=async()=>{var u,E,i,c,g;await _.value.$validate()&&(a.value=!0,t.model.approvers=[],t.model.signers=[],t.model.signers=[{user:(u=r==null?void 0:r.currentUser)==null?void 0:u.id}],t.model.sender=(i=(E=r==null?void 0:r.currentUser)==null?void 0:E.top_level_department)==null?void 0:i.id,t.model.curator=(g=(c=t==null?void 0:t.model)==null?void 0:c.__curator)==null?void 0:g.user_id,t.model.journal=re.APPLICATION,t.model.document_type=l.params.document_type,t.model.document_sub_type=l.params.document_sub_type,t.model.approvers=oe(t.model.__approvers))},T=async()=>{},R=()=>{s.formType===j?P():M()},P=async()=>{const b=await t.actionCreateDocument(t.model);await v.actionCountList(),b?(a.value=!1,z(null,n("document-sent"),I.SUCCESS),await m.replace({name:Te,query:{document_type:J.APPLICATION}})):z(null,n("error-occurred"),I.ERROR)},M=async()=>{await t.actionUpdateDocument({id:l.params.id,body:t.model}),await v.actionCountList(),z(null,n("document-sent"),I.SUCCESS),await m.replace({name:Se,params:{id:l.params.id,document_type:J.APPLICATION,document_sub_type:ee.LABOR_LEAVE}})},D=b=>{t.model.__files=[],b.forEach(u=>{t.model.__files.push(u)})};return to(async()=>{l.params.id&&await t.actionGetDocumentDetailForUpdate(l.params.id)}),De(()=>{Ae(t.model)}),(b,u)=>{const E=$e,i=ue,c=ce;return e(t).detailLoading?($(),K(E,{key:0})):($(),C(Q,{key:1},[o(e(Ve),{title:s.formType===e(j)?"create-sd-application":"update-sd-application"},{content:d(()=>[o(Me,{"onEmit:preview":w,"onEmit:clearForm":T},{default:d(()=>[o(c,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=g=>e(_).__curator.$model=g),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(_).__approvers.$model,"onUpdate:modelValue":u[1]||(u[1]=g=>e(_).__approvers.$model=g),error:e(_).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":u[2]||(u[2]=g=>e(_).__signers.$model=g),disabled:"",label:"signers",placeholder:e(r).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(_).content.$model,"onUpdate:modelValue":u[3]||(u[3]=g=>e(_).content.$model=g),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:a.value,"onUpdate:modelValue":u[4]||(u[4]=g=>a.value=g),"send-button-loading":e(t).buttonLoading,"onEmit:send":R},{content:d(()=>[o(Yo,{"compose-model":{...e(t).model,curator:e(t).model.__curator,author:s.formType===e(j)?e(r).currentUser:e(t).model.__signers[0].user,signers:s.formType===e(j)?[e(r).currentUser]:e(t).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},dl=ke("sd-notice-store",{state:()=>(le(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:J.NOTICE,document_sub_type:ee.BUSINESS_TRIP,journal:re.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:k.withMessage("Поле не должен быть пустым",U)},start_date:{required:k.withMessage("Поле не должен быть пустым",U)},route:{required:k.withMessage("Поле не должен быть пустым",U)},content:{required:k.withMessage("Поле не должен быть пустым",U)},__companies:{required:k.withMessage("Поле не должен быть пустым",U)},__curator:{required:k.withMessage("Поле не должен быть пустым",U)},__employees:{required:k.withMessage("Поле не должен быть пустым",U)},__signers:{required:k.withMessage("Поле не должен быть пустым",U)},__tags:{required:k.withMessage("Поле не должен быть пустым",U)},short_description:{required:k.withMessage("Поле не должен быть пустым",U)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:s,error:r}=await xe(Ee,p);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await Ue({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,s=!1){try{this.detailLoading=!0;const{data:r}=await we(p);ye(this.model,r),this.model.__companies=[],this.model.__curator=await Re([],r.curator.id,!1),this.model.__employees=await G(r.notices),s?(this.model.__approvers=await G(r.approvers.filter(t=>{var v,a;return((v=t==null?void 0:t.user)==null?void 0:v.id)!==((a=r==null?void 0:r.curator)==null?void 0:a.assistant)})),this.model.register_number=null):this.model.__approvers=await G(r.approvers),this.model.__signers=await G(r.signers),this.model.__companies=await po(r.notices[0].destinations),this.model.__tags=await lo(r.tags),this.model.start_date=r.notices[0].start_date,this.model.end_date=r.notices[0].end_date,this.model.__tags=r.tags,this.model.route=r.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(p,s){try{this.detailLoading=!0;const{data:r}=await we(p),t=await we(s);ye(this.model,r),this.model.__companies=[],this.model.__curator=await Re([],r.curator.id,!1),this.model.__employees=await G(t.data.notices),this.model.__approvers=await G(r.approvers),this.model.__signers=await G(r.signers),this.model.__companies=await po(t.data.notices[0].destinations),this.model.__tags=await lo(r.tags),this.model.start_date=t.data.notices[0].start_date,this.model.end_date=t.data.notices[0].end_date,this.model.__tags=r.tags,this.model.route=t.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),cl={class:"flex w-full gap-x-4"},br={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:j}},setup(p){const s=p,{t:r}=te(),t=ie(),v=se(),a=le(),n=dl(),m=de();fe();const l=Z(n.rules,n.model),_=X(!1),w=ne(()=>{const i=s.formType===j,c=t.params.document_sub_type;return c===ee.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":c===ee.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),T=ne(()=>{var i,c;return t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((i=t==null?void 0:t.query)==null?void 0:i.compose_id)&&((c=t==null?void 0:t.query)==null?void 0:c.document_sub_type)===ee.BUSINESS_TRIP}),R=ne(()=>{var i;return!!(t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((i=n==null?void 0:n.model)!=null&&i.trip_notice_id))});Uo(()=>n.model.__tags,i=>{if(s.formType===j)if(i&&i.length){let c=`${i.map(g=>g.name_uz).join(", ")} yuzasidan`;n.model.short_description=c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()}else n.model.short_description=null});const P=async()=>{var c,g,f,x,O;await l.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.approvers=oe(n.model.__approvers),n.model.signers=oe(n.model.__signers),n.model.curator=(g=(c=n==null?void 0:n.model)==null?void 0:c.__curator)==null?void 0:g.user_id,n.model.journal=t.params.document_type===J.DECREE||t.params.document_type===J.ORDER?re.ORDERS_PROTOCOLS:re.INNER,n.model.company=a.currentUser.company.id,n.model.notices=n.model.__employees.map(V=>({start_date:n.model.start_date,end_date:n.model.end_date,user:V.id,route:n.model.route,companies:n.model.__companies.map(h=>h.id)})),n.model.sender=(x=(f=a==null?void 0:a.currentUser)==null?void 0:f.top_level_department)==null?void 0:x.id,n.model.tags=n.model.__tags.map(V=>({id:V.id})),n.model.files=n.model.__files.map(V=>({id:V.id})),n.model.document_type=t.params.document_type,n.model.document_sub_type=t.params.document_sub_type,T.value&&(n.model.trip_notice_id=(O=t==null?void 0:t.query)==null?void 0:O.compose_id),_.value=!0)},M=()=>{},D=i=>{n.model.__files=[],i.forEach(c=>{n.model.__files.push(c)})},b=async()=>{T.value&&(n.model.notices=[]);const i=await n.actionCreateDocument(n.model);await m.actionCountList(),i?(_.value=!1,z(null,r("document-sent"),I.SUCCESS),await v.replace({name:Te,query:{document_type:t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?J.DECREE:t.params.document_sub_type===ee.BUSINESS_TRIP_ORDER_LOCAL?J.ORDER:J.NOTICE}})):z(null,r("error-occurred"),I.ERROR)},u=async()=>{(T.value||R.value)&&(n.model.notices=[]),await n.actionUpdateDocument({id:t.params.id,body:n.model}),await m.actionCountList(),z(null,r("changed"),I.SUCCESS),await v.replace({name:Se,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},E=()=>{s.formType===j?b():u()};return Qe(async()=>{t.params.id&&t.query.trip_notice_id&&t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?await n.actionGetDocumentDetailForUpdateForCustomUse(t.params.id,t.query.trip_notice_id):t.params.id?await n.actionGetDocumentDetailForUpdate(t.params.id):T.value&&await n.actionGetDocumentDetailForUpdate(t.query.compose_id,!0)}),De(()=>{Ae(n.model)}),(i,c)=>{const g=$e,f=ue,x=Be,O=Je,V=Pe,h=ce;return e(n).detailLoading?($(),K(g,{key:0})):($(),C(Q,{key:1},[o(e(Ve),{title:w.value},{content:d(()=>[o(Me,{"onEmit:preview":P,"onEmit:clearForm":M},{default:d(()=>[o(h,null,{default:d(()=>[o(f,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(l).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=q=>e(l).__curator.$model=q),error:e(l).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(l).__employees.$model,"onUpdate:modelValue":c[1]||(c[1]=q=>e(l).__employees.$model=q),error:e(l).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:T.value||R.value},null,8,["modelValue","error","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(Fo,{modelValue:e(l).__companies.$model,"onUpdate:modelValue":c[2]||(c[2]=q=>e(l).__companies.$model=q),error:e(l).__companies,"text-truncate":"",disabled:T.value||R.value},null,8,["modelValue","error","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(so,{modelValue:e(l).__tags.$model,"onUpdate:modelValue":c[3]||(c[3]=q=>e(l).__tags.$model=q),error:e(l).__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:q})=>[me(F(q.name),1)]),option:d(({value:q})=>[o(e(ge),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[y("div",cl,[o(x,{modelValue:e(l).start_date.$model,"onUpdate:modelValue":[c[4]||(c[4]=q=>e(l).start_date.$model=q),c[5]||(c[5]=q=>e(l).start_date.$model=e(be)(q))],error:e(l).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:T.value||R.value},null,8,["modelValue","error","min-date","disabled"]),o(x,{modelValue:e(l).end_date.$model,"onUpdate:modelValue":[c[6]||(c[6]=q=>e(l).end_date.$model=q),c[7]||(c[7]=q=>e(l).end_date.$model=e(be)(q))],error:e(l).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:T.value||R.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(O,{modelValue:e(l).route.$model,"onUpdate:modelValue":c[8]||(c[8]=q=>e(l).route.$model=q),error:e(l).route,options:e(Eo),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:T.value||R.value},null,8,["modelValue","error","options","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":c[9]||(c[9]=q=>e(n).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(l).__signers.$model,"onUpdate:modelValue":c[10]||(c[10]=q=>e(l).__signers.$model=q),error:e(l).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(V,{modelValue:e(l).short_description.$model,"onUpdate:modelValue":c[11]||(c[11]=q=>e(l).short_description.$model=q),error:e(l).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(l).content.$model,"onUpdate:modelValue":c[12]||(c[12]=q=>e(l).content.$model=q),error:e(l).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:_.value,"onUpdate:modelValue":c[13]||(c[13]=q=>_.value=q),"send-button-loading":e(n).buttonLoading,"onEmit:send":E},{content:d(()=>[e(t).params.document_sub_type===e(ee).BUSINESS_TRIP_DECREE_LOCAL?($(),K(e(el),{key:0,"compose-model":e(n).model,preview:!0},null,8,["compose-model"])):e(t).params.document_sub_type===e(ee).BUSINESS_TRIP_ORDER_LOCAL?($(),K(e(Ho),{key:1,"compose-model":e(n).model,preview:!0},null,8,["compose-model"])):($(),K(e(Ko),{key:2,"compose-model":e(n).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},gr={__name:"OrderForm",props:{formType:{type:String,default:j}},setup(p){const s=p,r=ko(),t=de(),v=le(),a=ie(),n=se(),m=Z(r.rules,r.model),{t:l}=te(),_=X(!1),w=async()=>{var u,E,i,c;await m.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=oe(r.model.__approvers),r.model.curator=(E=(u=r==null?void 0:r.model)==null?void 0:u.__curator)==null?void 0:E.user_id,r.model.sender=(c=(i=v==null?void 0:v.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,r.model.files=r.model.__files.map(g=>({id:g.id})),r.model.document_type=a.params.document_type,r.model.document_sub_type=a.params.document_sub_type,r.model.journal=re.ORDERS_PROTOCOLS,r.model.register_date=be(r.model.register_date),r.model.__negotiators.forEach(g=>{r.model.signers.push(g.hasOwnProperty("user")?{id:g.id,user:g.user.id,type:Oe.NEGOTIATOR}:{user:g.id,type:Oe.NEGOTIATOR})}),a.query.compose_id&&(r.model.trip_notice_id=a.query.compose_id),_.value=!0)},T=()=>{},R=async()=>{try{const b=await r.actionCreateDocument(r.model);await t.actionCountList(),b&&(_.value=!1,z(null,l("document-sent"),I.SUCCESS),await n.replace({name:Te,query:{document_type:J.ORDER}}))}catch{z(null,l("error-occurred"),I.ERROR)}},P=async()=>{try{const b=await r.actionUpdateDocument({id:a.params.id,body:r.model});await t.actionCountList(),z(null,l("changed"),I.SUCCESS),await n.replace({name:Se,params:{id:a.params.id,document_type:a.params.document_type,document_sub_type:a.params.document_sub_type}})}catch{z(null,l("error-occurred"),I.ERROR)}},M=()=>{s.formType===j?R():P()},D=b=>{r.model.__files=[],b.forEach(u=>{r.model.__files.push(u)})};return to(async()=>{a.params.id&&await r.actionGetDocumentDetailForUpdate(a.params.id)}),De(()=>{Ae(r.model)}),(b,u)=>{const E=$e,i=ue,c=Pe,g=Be,f=ce;return e(r).detailLoading?($(),K(E,{key:0})):($(),C(Q,{key:1},[o(e(Ve),{title:s.formType===e(j)?"create-order":"update-order"},{content:d(()=>[o(Me,{"onEmit:preview":w,"onEmit:clearForm":T},{default:d(()=>[o(f,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=x=>e(m).__curator.$model=x),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(c,{modelValue:e(m).register_number.$model,"onUpdate:modelValue":u[1]||(u[1]=x=>e(m).register_number.$model=x),error:e(m).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(g,{modelValue:e(m).register_date.$model,"onUpdate:modelValue":u[2]||(u[2]=x=>e(m).register_date.$model=x),error:e(m).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":u[3]||(u[3]=x=>e(r).model.__approvers=x),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(m).__negotiators.$model,"onUpdate:modelValue":u[4]||(u[4]=x=>e(m).__negotiators.$model=x),error:e(m).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(m).content.$model,"onUpdate:modelValue":u[5]||(u[5]=x=>e(m).content.$model=x),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:_.value,"onUpdate:modelValue":u[6]||(u[6]=x=>_.value=x),"send-button-loading":e(r).buttonLoading,"onEmit:send":M},{content:d(()=>[o(e(Xo),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ul=ke("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:k.withMessage("Поле не должен быть пустым",U)},__curator:{required:k.withMessage("Поле не должен быть пустым",U)},__signers:{required:k.withMessage("Поле не должен быть пустым",U)},short_description:{required:k.withMessage("Поле не должен быть пустым",U)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:s,error:r}=await xe(Ee,p);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await Ue({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:s}=await we(p);ye(this.model,s),this.model.__curator=await Re([],s.curator.id,!1),this.model.__approvers=await G(s.approvers),this.model.__signers=await G(s.signers)}catch{}finally{this.detailLoading=!1}}}}),wr={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:j}},setup(p){const s=p,{t:r}=te(),t=ie(),v=se(),a=le(),n=ul(),m=de();fe();const l=X(!1),_=Z(n.rules,n.model),w=async()=>{var u,E,i,c;await _.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=oe(n.model.__approvers),n.model.signers=oe(n.model.__signers),n.model.curator=(E=(u=n==null?void 0:n.model)==null?void 0:u.__curator)==null?void 0:E.user_id,n.model.journal=re.INNER,n.model.company=a.currentUser.company.id,n.model.sender=(c=(i=a==null?void 0:a.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,n.model.files=n.model.__files.map(g=>({id:g.id})),n.model.document_type=t.params.document_type,n.model.document_sub_type=t.params.document_sub_type,l.value=!0)},T=()=>{},R=b=>{n.model.__files=[],b.forEach(u=>{n.model.__files.push(u)})},P=async()=>{const b=await n.actionCreateDocument(n.model);await m.actionCountList(),b?(l.value=!1,z(null,r("document-sent"),I.SUCCESS),await v.replace({name:Te,query:{document_type:J.NOTICE}})):z(null,r("error-occurred"),I.ERROR)},M=async()=>{await n.actionUpdateDocument({id:t.params.id,body:n.model}),await m.actionCountList(),z(null,r("changed"),I.SUCCESS),await v.replace({name:Se,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},D=()=>{s.formType===j?P():M()};return Qe(async()=>{t.params.id&&await n.actionGetDocumentDetailForUpdate(t.params.id)}),De(()=>{Ae(n.model)}),(b,u)=>{const E=$e,i=ue,c=Pe,g=ce;return e(n).detailLoading?($(),K(E,{key:0})):($(),C(Q,{key:1},[o(e(Ve),{title:s.formType===e(j)?"create-notice":"update-notice"},{content:d(()=>[o(Me,{"onEmit:preview":w,"onEmit:clearForm":T},{default:d(()=>[o(g,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=f=>e(_).__curator.$model=f),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(c,{modelValue:e(_).short_description.$model,"onUpdate:modelValue":u[1]||(u[1]=f=>e(_).short_description.$model=f),error:e(_).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":u[2]||(u[2]=f=>e(n).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":u[3]||(u[3]=f=>e(_).__signers.$model=f),error:e(_).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(_).content.$model,"onUpdate:modelValue":u[4]||(u[4]=f=>e(_).content.$model=f),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:l.value,"onUpdate:modelValue":u[5]||(u[5]=f=>l.value=f),"send-button-loading":e(n).buttonLoading,"onEmit:send":D},{content:d(()=>[o(e(Qo),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},pl=ke("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:k.withMessage("Поле не должен быть пустым",U)},__curator:{required:k.withMessage("Поле не должен быть пустым",U)},__signers:{required:k.withMessage("Поле не должен быть пустым",U)},short_description:{required:k.withMessage("Поле не должен быть пустым",U)}}}),actions:{async actionCreateDocument(p){const s={...p};delete s.bookings,delete s.notices,delete s.trip_plans,this.buttonLoading=!0;const{response:r,error:t}=await xe(Ee,s);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:s}){const r={...s};delete r.bookings,delete r.notices,delete r.trip_plans;try{this.buttonLoading=!0;const{data:t}=await Ue({id:p,body:r});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,s){try{this.detailLoading=!0;const{data:r}=await we(p);ye(this.model,r),this.model.__curator=await Re([],r.curator.id,!1),this.model.__approvers=await G(r.approvers),this.model.__signers=await G(r.signers)}catch{}finally{this.detailLoading=!1}}}}),hr={__name:"DecreeForm",props:{formType:{type:String,default:j}},setup(p){const s=p,{t:r}=te(),t=ie(),v=se(),a=le(),n=de();fe();const m=X(!1),l=pl(),_=ro(),w=Z(l.rules,l.model),T=async()=>{var i,c,g,f;await w.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=oe(l.model.__approvers),l.model.signers=oe(l.model.__signers),l.model.curator=(c=(i=l==null?void 0:l.model)==null?void 0:i.__curator)==null?void 0:c.user_id,l.model.journal=re.ORDERS_PROTOCOLS,l.model.company=a.currentUser.company.id,l.model.sender=(f=(g=a==null?void 0:a.currentUser)==null?void 0:g.top_level_department)==null?void 0:f.id,l.model.files=l.model.__files.map(x=>({id:x.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,t.query.compose_id&&(l.model.trip_notice_id=t.query.compose_id),m.value=!0)},R=()=>{},P=E=>{l.model.__files=[],E.forEach(i=>{l.model.__files.push(i)})},M=async()=>{const E=await l.actionCreateDocument(l.model);await n.actionCountList(),E?(m.value=!1,z(null,r("document-sent"),I.SUCCESS),await v.replace({name:Te,query:{document_type:t.params.document_type}})):z(null,r("error-occurred"),I.ERROR)},D=async()=>{await l.actionUpdateDocument({id:t.params.id,body:l.model}),await n.actionCountList(),z(null,r("changed"),I.SUCCESS),await v.replace({name:Se,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},b=()=>{s.formType===j?M():D()},u=async E=>{const{data:i}=await _.actionGetDocumentDetail(E);l.model.notices=i==null?void 0:i.notices,l.model.trip_plans=i==null?void 0:i.trip_plans,l.model.bookings=i==null?void 0:i.bookings,l.model.short_description=i==null?void 0:i.short_description,l.model.trip_notice_register_number=i==null?void 0:i.register_number};return Qe(async()=>{s.formType===j&&t.query.compose_id?await u(t.query.compose_id):s.formType===Xe&&t.query.trip_notice_id&&t.params.id?(await l.actionGetDocumentDetailForUpdate(t.params.id,null),await u(t.query.trip_notice_id)):s.formType===Xe&&t.params.id&&await l.actionGetDocumentDetailForUpdate(t.params.id,null)}),De(()=>{Ae(l.model)}),(E,i)=>{const c=$e,g=ue,f=Pe,x=ce;return e(l).detailLoading?($(),K(c,{key:0})):($(),C(Q,{key:1},[o(e(Ve),{title:s.formType===e(j)?"create-decree":"update-decree"},{content:d(()=>[o(Me,{"onEmit:preview":T,"onEmit:clearForm":R},{default:d(()=>[o(x,null,{default:d(()=>[o(g,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(w).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=O=>e(w).__curator.$model=O),error:e(w).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:d(()=>[o(f,{modelValue:e(w).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=O=>e(w).short_description.$model=O),error:e(w).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=O=>e(l).model.__approvers=O),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(g,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(w).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=O=>e(w).__signers.$model=O),error:e(w).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(g,{"col-class":"w-full"},{default:d(()=>[o(Ce,{modelValue:e(w).content.$model,"onUpdate:modelValue":i[4]||(i[4]=O=>e(w).content.$model=O),error:e(w).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":P},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:m.value,"onUpdate:modelValue":i[5]||(i[5]=O=>m.value=O),"send-button-loading":e(l).buttonLoading,"onEmit:send":b},{content:d(()=>[o(e(wo),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ml=ke("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:k.withMessage("Поле не должен быть пустым",U)},start_date:{required:k.withMessage("Поле не должен быть пустым",U)},__curator:{required:k.withMessage("Поле не должен быть пустым",U)},__signers:{required:k.withMessage("Поле не должен быть пустым",U)},__user:{required:k.withMessage("Поле не должен быть пустым",U)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:s,error:r}=await xe(Ee,p);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(r))},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:s}=await we(p);return ye(this.model,s),this.model.__curator=await Re([],s.curator.id,!1),this.model.__approvers=await G(s.approvers),this.model.__signers=await G(s.signers),this.model.__user=await We("users/personal-information",[],!1,s.user.id),this.model.__parent=s.parent,Promise.resolve(s)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await Ue({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),yr={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:j}},setup(p){const s=p,r=ie(),t=se(),v=le(),a=ml();ro();const n=de(),{t:m}=te(),l=Z(a.rules,a.model),_=X(!1),w=X([]),T=ne(()=>s.formType===j?"create-poa":"update-poa"),R=ne(()=>a.model.start_date?new Date(a.model.start_date):new Date),P=async()=>{var c,g,f,x,O,V,h,q,S,B,L,Y,pe,N,H,A,Ge,Ie,io,co;if(await l.value.$validate()){if(a.model.approvers=[],a.model.signers=[],a.model.approvers=oe(a.model.__approvers),a.model.signers=oe(a.model.__signers),a.model.curator=(g=(c=a==null?void 0:a.model)==null?void 0:c.__curator)==null?void 0:g.user_id,a.model.user=(x=(f=a==null?void 0:a.model)==null?void 0:f.__user)==null?void 0:x.id,a.model.journal=re.POWER_OF_ATTORNEY,a.model.company=(V=(O=v.currentUser)==null?void 0:O.company)==null?void 0:V.id,a.model.sender=(q=(h=v==null?void 0:v.currentUser)==null?void 0:h.top_level_department)==null?void 0:q.id,a.model.document_type=r.params.document_type,a.model.document_sub_type=r.params.document_sub_type,a.model.content=".",a.model.parent=(B=(S=a.model)==null?void 0:S.__parent)==null?void 0:B.id,!((Y=(L=a==null?void 0:a.model)==null?void 0:L.__user)!=null&&Y.passport_seria||(N=(pe=a==null?void 0:a.model)==null?void 0:pe.__user)!=null&&N.passport_number||(A=(H=a==null?void 0:a.model)==null?void 0:H.__user)!=null&&A.passport_issue_date||(Ie=(Ge=a==null?void 0:a.model)==null?void 0:Ge.__user)!=null&&Ie.passport_issued_by)){z(null,`${(co=(io=a.model)==null?void 0:io.__user)==null?void 0:co.full_name}: ${m("passport-details-error")}`,I.WARNING);return}_.value=!0}},M=()=>{},D=async()=>{const i=await a.actionCreateDocument(a.model);await n.actionCountList(),i?(_.value=!1,z(null,m("document-sent"),I.SUCCESS),await t.replace({name:Te,query:{document_type:J.POWER_OF_ATTORNEY}})):z(null,m("error-occurred"),I.ERROR)},b=async()=>{await a.actionUpdateDocument({id:r.params.id,body:a.model}),await n.actionCountList(),z(null,m("changed"),I.SUCCESS),await t.replace({name:Se,params:{id:r.params.id,document_type:r.params.document_type,document_sub_type:r.params.document_sub_type}})},u=()=>{s.formType===j?D():b()},E=async i=>{const{data:c}=await lt({user:i.id,document_sub_type:r.params.document_sub_type,status:5});w.value=c.results};return Qe(async()=>{if(r.params.id){const i=await a.actionGetDocumentDetailForUpdate(r.params.id);i.parent&&(w.value=[i.parent])}}),De(()=>{Ae(a.model)}),(i,c)=>{const g=$e,f=ue,x=Be,O=Je,V=ce;return e(a).detailLoading?($(),K(g,{key:0})):($(),C(Q,{key:1},[o(e(Ve),{title:T.value},{content:d(()=>[o(Me,{"onEmit:preview":P,"onEmit:clearForm":M},{default:d(()=>[o(V,null,{default:d(()=>[o(f,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(l).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=h=>e(l).__curator.$model=h),error:e(l).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(l).__user.$model,"onUpdate:modelValue":c[1]||(c[1]=h=>e(l).__user.$model=h),error:e(l).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":c[2]||(c[2]=h=>E(h))},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(x,{modelValue:e(l).start_date.$model,"onUpdate:modelValue":[c[3]||(c[3]=h=>e(l).start_date.$model=h),c[4]||(c[4]=h=>e(l).start_date.$model=e(be)(h))],error:e(l).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(x,{modelValue:e(l).end_date.$model,"onUpdate:modelValue":[c[5]||(c[5]=h=>e(l).end_date.$model=h),c[6]||(c[6]=h=>e(l).end_date.$model=e(be)(h))],error:e(l).end_date,"min-date":R.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":c[7]||(c[7]=h=>e(a).model.__approvers=h),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(l).__signers.$model,"onUpdate:modelValue":c[8]||(c[8]=h=>e(l).__signers.$model=h),error:e(l).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(O,{modelValue:e(a).model.__parent,"onUpdate:modelValue":c[9]||(c[9]=h=>e(a).model.__parent=h),options:w.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:_.value,"onUpdate:modelValue":c[10]||(c[10]=h=>_.value=h),"send-button-loading":e(a).buttonLoading,"onEmit:send":u},{content:d(()=>[o(Jo,{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},_l={class:"base-stepper-component flex items-center select-none"},ql=["onClick"],fl={key:0,class:"flex h-1 bg-greyscale-200 w-8"},bl={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(p,{emit:s}){const{t:r}=te(),t=v=>{s("emit:stepClick",v)};return(v,a)=>{const n=he;return $(),C("div",_l,[($(!0),C(Q,null,qe(p.items,(m,l)=>($(),C("div",{key:m.id,class:"flex items-center"},[y("div",{class:ze(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",m.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:_=>t(m)},[o(n,{icon:m.icon,class:ze(m.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),y("span",null,F(e(r)(m.label)),1)],10,ql),l<p.items.length-1?($(),C("div",fl)):ae("",!0)]))),128))])}}},Ze=ke("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...fe().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:k.withMessage("Поле не должен быть пустым",U)}},rules:{content:{required:k.withMessage("Поле не должен быть пустым",U)},__curator:{required:k.withMessage("Поле не должен быть пустым",U)},__signers:{required:k.withMessage("Поле не должен быть пустым",U)},short_description:{required:k.withMessage("Поле не должен быть пустым",U)},__groups:{$each:k.forEach({__users:{required:k.withMessage("Поле не должен быть пустым",U)},__tags:{required:k.withMessage("Поле не должен быть пустым",U)},__regions:{required:k.withMessage("Поле не должен быть пустым",U)},__start_date:{required:k.withMessage("Поле не должен быть пустым",U)},__end_date:{required:k.withMessage("Поле не должен быть пустым",U)},__company:{required:k.withMessage("Поле не должен быть пустым",U)},__route:{required:k.withMessage("Поле не должен быть пустым",U)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:k.forEach({users:{required:k.withMessage("Поле не должен быть пустым",U)},text:{required:k.withMessage("Поле не должен быть пустым",U)}})}},booking_model:{bookings:[{type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:k.forEach({segments:{$each:k.forEach({departure_city:{required:k.withMessage("Поле не должен быть пустым",U)},arrival_city:{required:k.withMessage("Поле не должен быть пустым",U)},date:{required:k.withMessage("Поле не должен быть пустым",U)},time:{required:k.withMessage("Поле не должен быть пустым",U)},segment_class:{required:k.withMessage("Поле не должен быть пустым",U)}})},passengers:{required:k.withMessage("Поле не должен быть пустым",U)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:So,active:!0,value:Ke},{id:4,label:"decree",icon:Co,active:!0,value:eo}],routeTabItems:[{id:1,title:"airplane",icon:Lo,value:Ye,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:Ro,value:rt,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:Do,value:ho,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:To,value:_e},{id:2,title:"complex-route",icon:Mo,value:no},{id:3,title:"one-way",icon:Oo,value:at}]}),actions:{async actionCreateDocument(p){const s=mo(p);this.buttonLoading=!0;const{response:r,error:t}=await xe(Ee,s);return r?(this.buttonLoading=!1,await de().actionCountList(),Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:s}){const r=await mo(s);try{this.buttonLoading=!0;const{data:t}=await Ue({id:p,body:r});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{await de().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){var s,r;try{this.detailLoading=!0;const{data:t}=await we(p),v=await nt(t.id);this.decreeModel=(r=(s=v==null?void 0:v.data)==null?void 0:s.to_composes[0])==null?void 0:r.from_compose,ye(this.model,t),this.model.__curator=await Re([],t.curator.id,!1),this.model.__signers=await G(t.signers),this.model.__approvers=await G(t.approvers);const a=Object.values(t.notices.reduce((n,m)=>{const l=m.group_id;return n[l]=n[l]||{group_id:l,items:[]},n[l].items.push(m),n},{}));this.model.__groups=await Promise.all(a.map(async n=>{var M;const m=await Promise.all(n.items.map(async D=>({...await G([],D.user.id,!1),business_trip_id:D.id}))),l=await lo(n.items[0].tags),_=await We("regions",n.items[0].locations),w=await We("companies",[],!1,(M=n.items[0].sender_company)==null?void 0:M.id),T=n.items[0].start_date,R=n.items[0].end_date,P=n.items[0].route;return{__users:m,__tags:l,__regions:_,__start_date:T,__end_date:R,__company:w,__route:P}})),this.trip_plan_model.trip_plans=await Promise.all(t.trip_plans.map(async(n,m)=>({...n,users:await G(n.users)}))),this.booking_model.bookings=await Promise.all(t.bookings.map(async n=>({type:n.type,route:n.route,segments:await Promise.all(n.segments.map(async m=>({departure_city:await We("regions",[],!1,m.departure_city.id),arrival_city:await We("regions",[],!1,m.arrival_city.id),segment_class:await st.find(l=>l.value===m.segment_class),date:be(m.departure_date),time:await Zo(m.departure_date,m.departure_end_date)}))),passengers:await G(n.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...fe().filialList]})},actionDeleteGroupBlock(p){this.model.__groups.splice(p,1)},async actionStepClick(p,s,r){await p.replace({query:{...s.query,step:r}}),this.stepperItems.forEach(v=>v.active=v.value===r),await Po();const t=document.querySelector(".document-view-aside");t&&t.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(p){this.trip_plan_model.trip_plans.splice(p,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(p){this.booking_model.bookings.splice(p,1)},actionChangeRouteSegment(p,s){const r=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[s].segments=p===_e?[r(),r()]:[r()]},async actionAddRouteLine(p){this.booking_model.bookings[p].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(p,s){this.booking_model.bookings[p].segments.splice(s,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...fe().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),gl={class:"trip-info-components"},wl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},hl={class:"flex justify-between"},yl={class:"text-base text-primary-900 font-semibold mb-1"},vl=["onClick"],kl={class:"flex align-center gap-x-4"},$l={class:"flex w-full gap-x-4"},Vl={class:"flex w-full gap-x-4"},xl={class:"text-base text-primary-900 font-semibold mb-2"},Ul={class:"flex items-center justify-between"},bo={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(p,{expose:s,emit:r}){const t=ie(),v=se(),a=Ze();fe();const{t:n,locale:m}=te(),l=Z(a.rules,a.model),_=X(!1),w=D=>{a.model.__files=[],D.forEach(b=>{a.model.__files.push(b)})},T=()=>{a.actionAddGroupBlock()},R=async D=>{const b=await l.value.$validate();if(_.value=!0,!b){z(null,n("fill-required-fields"),I.WARNING);return}r("emit:onValidateAndSend"),await a.actionStepClick(v,t,"decree")},P=(D,b)=>{a.model.__groups[b].__regions=[]},M=(D,b)=>{D.value.forEach(u=>{var E,i,c,g;if(u.id===((g=(c=(i=(E=a.model)==null?void 0:E.__groups[b])==null?void 0:i.__company)==null?void 0:c.region)==null?void 0:g.id)){const f=a.model.__groups[b].__regions.findIndex(x=>x.id===u.id);(f||f===0)&&a.model.__groups[b].__regions.splice(f,1)}})};return s({stepClick:R}),(D,b)=>{const u=ue,E=Pe,i=he,c=Je,g=so,f=Be,x=ce,O=Ne;return $(),C("div",gl,[o(x,null,{default:d(()=>[o(u,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(l).__curator.$model,"onUpdate:modelValue":b[0]||(b[0]=V=>e(l).__curator.$model=V),error:e(l).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(u,{"col-class":"w-1/2"},{default:d(()=>[o(E,{modelValue:e(l).short_description.$model,"onUpdate:modelValue":b[1]||(b[1]=V=>e(l).short_description.$model=V),error:e(l).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(u,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[($(!0),C(Q,null,qe(e(a).model.__groups,(V,h)=>($(),C("div",wl,[y("div",hl,[y("span",yl,F(e(n)("group"))+"-"+F(h+1),1),h!==0?($(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:q=>e(a).actionDeleteGroupBlock(h)},[o(i,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,vl)):ae("",!0)]),o(x,null,{default:d(()=>[o(u,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:V.__users,"onUpdate:modelValue":q=>V.__users=q,error:e(l).__groups.$each.$response.$data[h].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(u,{"col-class":"w-1/2"},{default:d(()=>[y("div",kl,[o(c,{modelValue:V.__company,"onUpdate:modelValue":q=>V.__company=q,error:e(l).__groups.$each.$response.$data[h].__company,options:V.__filialList,"onUpdate:options":q=>V.__filialList=q,required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":_.value,class:"w-1/2","onEmit:change":q=>P(q,h)},{option:d(({option:q})=>[o(e(ge),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","onUpdate:options","show-nested-error","onEmit:change"]),o(g,{modelValue:V.__regions,"onUpdate:modelValue":q=>V.__regions=q,error:e(l).__groups.$each.$response.$data[h].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":_.value,class:"w-1/2","onEmit:change":q=>M(q,h)},{chip:d(({value:q})=>[me(F(q.name),1)]),option:d(({value:q})=>[o(e(ge),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error","onEmit:change"])])]),_:2},1024),o(u,{"col-class":"w-1/2"},{default:d(()=>[y("div",$l,[o(g,{modelValue:V.__tags,"onUpdate:modelValue":q=>V.__tags=q,error:e(l).__groups.$each.$response.$data[h].__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":_.value,class:"w-1/2"},{chip:d(({value:q})=>[me(F(q.name),1)]),option:d(({value:q})=>[o(e(ge),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),o(c,{modelValue:V.__route,"onUpdate:modelValue":q=>V.__route=q,error:e(l).__groups.$each.$response.$data[h].__route,options:e(a).routeTabItems,"onUpdate:options":b[2]||(b[2]=q=>e(a).routeTabItems=q),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(m)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":_.value,class:"w-1/2"},{option:d(({option:q})=>[o(e(ge),{title:e(n)(q.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),o(u,{"col-class":"w-1/2"},{default:d(()=>[y("div",Vl,[o(f,{modelValue:V.__start_date,"onUpdate:modelValue":[q=>V.__start_date=q,q=>V.__start_date=e(be)(q)],error:e(l).__groups.$each.$response.$data[h].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(f,{modelValue:V.__end_date,"onUpdate:modelValue":[q=>V.__end_date=q,q=>V.__end_date=e(be)(q)],error:e(l).__groups.$each.$response.$data[h].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(O,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(je),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:T},null,8,["icon-left"])]),_:1}),o(u,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":b[3]||(b[3]=V=>e(a).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(u,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(l).__signers.$model,"onUpdate:modelValue":b[4]||(b[4]=V=>e(l).__signers.$model=V),error:e(l).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(u,{"col-class":"w-full"},{default:d(()=>[y("div",{class:ze(["border-[1.5px] rounded-2xl px-5 py-4",_.value&&!e(a).model.content?"border-critic-500":"border-greyscale-200"])},[y("div",xl,F(e(n)("notice")),1),o(Ce,{modelValue:e(l).content.$model,"onUpdate:modelValue":b[5]||(b[5]=V=>e(l).content.$model=V),error:e(l).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":w},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),y("div",Ul,[o(O,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(O,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:b[6]||(b[6]=V=>R(e(ao)))})])])}}},El={class:"work-plan-component"},Sl={class:"flex flex-col gap-y-3"},Cl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ll={class:"flex justify-between"},Rl={class:"text-base text-primary-900 font-semibold mb-1"},Dl=["onClick"],Tl={class:"flex items-center justify-between mt-10"},Ml={class:"flex items-center gap-x-1"},Ol={__name:"WorkPlan",setup(p,{expose:s}){const{t:r}=te(),t=ie(),v=se(),a=Ze(),n=Z(a.trip_plan_rules,a.trip_plan_model),m=X(!1),l=ne(()=>{const T=new Set;return a.model.__groups.reduce((R,P)=>P.__users&&Array.isArray(P.__users)?R.concat(P.__users):R,[]).filter(R=>T.has(R.id)?!1:(T.add(R.id),!0))}),_=async T=>{const R=await n.value.$validate();if(m.value=!0,!R){z(null,r("fill-required-fields"),I.WARNING);return}const P=a.trip_plan_model.trip_plans.flatMap(D=>{var b;return(b=D.users)==null?void 0:b.map(u=>u.id)}),M=l.value.filter(D=>!P.includes(D.id));M.length?(z(null,`У следующих сотрудников нет плана работы: ${M==null?void 0:M.map(D=>D.first_name+" "+D.last_name).join(", ")}.`,I.WARNING),z(null,"У всех сотрудников должен быть назначен рабочий план.",I.WARNING)):await a.actionStepClick(v,t,T)},w=()=>{a.actionAddWorkPlanRow(),m.value=!1};return s({stepClick:_}),(T,R)=>{const P=he,M=vo,D=ue,b=ce,u=Ne;return $(),C("div",El,[y("div",Sl,[($(!0),C(Q,null,qe(e(a).trip_plan_model.trip_plans,(E,i)=>($(),C("div",Cl,[y("div",Ll,[y("span",Rl,F(e(r)("plan"))+"-"+F(i+1),1),i!==0?($(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:c=>e(a).actionDeleteWorkPlanRow(i)},[o(P,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Dl)):ae("",!0)]),o(b,null,{default:d(()=>[o(D,{"col-class":"w-1/2"},{default:d(()=>[o(M,{modelValue:E.text,"onUpdate:modelValue":c=>E.text=c,error:e(n).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(D,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:E.users,"onUpdate:modelValue":c=>E.users=c,options:l.value,error:e(n).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(u,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(je),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:w},null,8,["icon-left"]),y("div",Tl,[o(u,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",Ml,[o(u,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:R[0]||(R[0]=E=>_(e(Ke)))}),o(u,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:R[1]||(R[1]=E=>_(e(yo)))})])])])}}};const Pl={class:"base-time-picker"},Nl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(p){const s=p,r=oo(s,"modelValue"),{t}=te();return(v,a)=>{var l;const n=mt,m=he;return $(),C("div",Pl,[o(n,{label:s.label,required:s.required},null,8,["label","required"]),o(e(_t),{modelValue:e(r),"onUpdate:modelValue":a[0]||(a[0]=_=>He(r)?r.value=_:null),"time-picker":"",range:p.range,"cancel-text":e(t)("cancel"),"select-text":e(t)("select"),placeholder:e(t)(p.placeholder),ref:"datePicker",class:ze({"input-error":((l=p.error)==null?void 0:l.$error)&&p.showNestedError})},{"input-icon":d(()=>[o(m,{icon:e(No),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Al={class:"route-component flex flex-col gap-y-3"},Il={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},zl={class:"flex items-center justify-between"},Fl={class:"flex items-center gap-x-4"},jl={class:"text-base text-primary-900 font-semibold mb-1"},Bl={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Gl={class:"text-xs text-greyscale-900 font-medium"},Wl=["onClick"],Yl=["onClick"],Hl={class:"text-sm text-primary-500 font-semibold"},Kl={class:"flex items-center justify-between mt-10"},Xl={class:"flex items-center gap-x-1"},Ql={__name:"Route",props:{formType:{type:String,default:j}},emits:["emit:onValidateAndSend"],setup(p,{expose:s,emit:r}){const{t}=te(),v=ie(),a=se(),n=Ze(),m=fe();le(),de();const l=Z(n.booking_model_rules,n.booking_model);X(!1);const _=X(!1),w=ne(()=>{const i=new Set;return n.model.__groups.reduce((c,g)=>g.__users&&Array.isArray(g.__users)?c.concat(g.__users):c,[]).filter(c=>i.has(c.id)?!1:(i.add(c.id),!0))}),T=i=>{n.routeTabItems.forEach(c=>c.active=c.id===i.id)},R=(i,c)=>{n.routeTypeTabItems.forEach(g=>g.active=g.id===i.id),n.actionChangeRouteSegment(i.value,c)},P=async(i,c=!1)=>{var O,V;const g=await l.value.$validate();if(_.value=!0,!g){z(null,t("fill-required-fields"),I.WARNING);return}const f=(O=n.booking_model.bookings)==null?void 0:O.flatMap(h=>{var q;return(q=h.passengers)==null?void 0:q.map(S=>S==null?void 0:S.id)}),x=(V=w.value)==null?void 0:V.filter(h=>!(f!=null&&f.includes(h.id)));x.length?(z(null,`У следующих сотрудников не назначен маршрут: ${x.map(h=>h.first_name+" "+h.last_name).join(", ")}.`,I.WARNING),z(null,"У всех сотрудников должен быть назначен маршрут",I.WARNING)):(c&&r("emit:onValidateAndSend"),await n.actionStepClick(a,v,i))},M=()=>{n.actionAddRouteRow(),_.value=!1},D=(i,c,g,f)=>{f.type===_e&&(n.booking_model.bookings[c].segments[g+1].arrival_city=i)},b=(i,c,g,f)=>{f.type===_e&&(n.booking_model.bookings[c].segments[g+1].departure_city=i)},u=(i,c,g,f)=>{f.type===_e&&(n.booking_model.bookings[c].segments[g+1].segment_class=i)},E=()=>{P(eo,!0)};return s({stepClick:P}),(i,c)=>{const g=Je,f=ue,x=Be,O=ce,V=Ne;return $(),C("div",Al,[($(!0),C(Q,null,qe(e(n).booking_model.bookings,(h,q)=>($(),C("div",Il,[y("div",zl,[y("div",Fl,[y("span",jl,F(e(t)("route"))+"-"+F(q+1),1),o(fo,{modelValue:h.route,"onUpdate:modelValue":S=>h.route=S,items:e(n).routeTabItems,"onEmit:onChange":c[0]||(c[0]=S=>T(S))},null,8,["modelValue","onUpdate:modelValue","items"]),o(fo,{modelValue:h.type,"onUpdate:modelValue":S=>h.type=S,items:e(n).routeTypeTabItems,"onEmit:onChange":S=>R(S,q)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),q!==0?($(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:c[1]||(c[1]=(...S)=>e(n).actionDeleteRouteRow&&e(n).actionDeleteRouteRow(...S))},[o(he,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):ae("",!0)]),y("div",Bl,[o(he,{icon:e(Ao),class:"text-warning-500"},null,8,["icon"]),y("span",Gl,F(e(t)("route-warning")),1)]),($(!0),C(Q,null,qe(h.segments,(S,B)=>($(),C("div",null,[o(O,null,{default:d(()=>[o(f,{"col-class":"w-1/5"},{default:d(()=>[o(g,{modelValue:S.departure_city,"onUpdate:modelValue":L=>S.departure_city=L,error:e(l).bookings.$each.$response.$data[q].segments.$each.$data[B].departure_city,options:e(m).regionsList,"onUpdate:options":c[2]||(c[2]=L=>e(m).regionsList=L),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":_.value,disabled:h.type===e(_e)&&B%2!==0,"onEmit:change":L=>D(L,q,B,h)},{option:d(({option:L})=>[o(e(ge),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:d(()=>[o(g,{modelValue:S.arrival_city,"onUpdate:modelValue":L=>S.arrival_city=L,error:e(l).bookings.$each.$response.$data[q].segments.$each.$data[B].arrival_city,options:e(m).regionsList.filter(L=>{var Y;return(L==null?void 0:L.id)!=((Y=S.departure_city)==null?void 0:Y.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":_.value,disabled:h.type===e(_e)&&B%2!==0,"onEmit:change":L=>b(L,q,B,h)},{option:d(({option:L})=>[o(e(ge),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:d(()=>[o(g,{modelValue:S.segment_class,"onUpdate:modelValue":L=>S.segment_class=L,error:e(l).bookings.$each.$response.$data[q].segments.$each.$data[B].segment_class,options:h.route===e(ho)?e(it):h.route===e(Ye)?e(dt):e(ct),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":_.value,translatable:"",disabled:h.type===e(_e)&&B%2!==0,"onEmit:change":L=>u(L,q,B,h)},{option:d(({option:L})=>[o(e(ge),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:d(()=>[o(x,{modelValue:S.date,"onUpdate:modelValue":[L=>S.date=L,L=>S.date=e(be)(L)],error:e(l).bookings.$each.$response.$data[q].segments.$each.$data[B].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),o(f,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:d(()=>[o(Nl,{modelValue:S.time,"onUpdate:modelValue":L=>S.time=L,error:e(l).bookings.$each.$response.$data[q].segments.$each.$data[B].time,label:"time",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),h.type===e(no)&&B!==0?($(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:L=>e(n).actionDeleteRouteLine(q,B)},[o(he,{icon:e(Fe),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Wl)):ae("",!0)]),_:2},1024)]),_:2},1024)]))),256)),h.type===e(no)?($(),C("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:S=>e(n).actionAddRouteLine(q)},[o(he,{icon:e(je),class:"text-primary-500"},null,8,["icon"]),y("span",Hl,F(e(t)("add-line")),1)],8,Yl)):ae("",!0),o(O,null,{default:d(()=>[o(f,{"col-class":"w-full"},{default:d(()=>[o(W,{modelValue:h.passengers,"onUpdate:modelValue":S=>h.passengers=S,options:w.value,error:e(l).bookings.$each.$response.$data[q].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),o(V,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(je),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:M},null,8,["icon-left"]),y("div",Kl,[o(V,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",Xl,[o(V,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:c[3]||(c[3]=h=>P(e(ao)))}),o(V,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(n).buttonLoading,onClick:E},null,8,["loading"])])])])}}},Jl={class:"decree-component"},Zl={class:"flex items-center justify-between mt-10"},en={class:"flex items-center gap-x-1"},on={__name:"Decree",props:{formType:{type:String,default:j}},setup(p,{expose:s}){const r=p,t=ie(),v=se(),a=Ze(),n=Z(a.decreeRules,a.decreeModel),{t:m}=te(),l=le(),_=de(),w=X(!1),T=async b=>{await a.actionStepClick(v,t,b)},R=b=>{a.decreeModel.__files=[],b.forEach(u=>{a.decreeModel.__files.push(u)})},P=async()=>{var u,E,i,c;if(!await n.value.$validate()){z(null,m("fill-required-fields"),I.WARNING);return}a.decreeModel.approvers=[],a.decreeModel.signers=[],a.decreeModel.curator=(E=(u=a.model)==null?void 0:u.__curator)==null?void 0:E.user_id,a.decreeModel.journal=re.ORDERS_PROTOCOLS,a.decreeModel.company=l.currentUser.company.id,a.decreeModel.sender=(c=(i=l==null?void 0:l.currentUser)==null?void 0:i.top_level_department)==null?void 0:c.id,a.decreeModel.document_type=J.DECREE,a.decreeModel.document_sub_type=ee.BUSINESS_TRIP_DECREE_V2,a.decreeModel.short_description=a.model.short_description,w.value=!0},M=async(b,u)=>{try{await a.actionUpdateDocument({id:u,body:{...a.decreeModel,trip_notice_id:b}}),await _.actionCountList(),z(null,m("successfully-saved"),I.SUCCESS)}catch{}},D=async()=>{var u;let b=null;r.formType===j&&t.query.notice_id?b=t.query.notice_id:r.formType===Xe&&t.params.id&&(b=t.params.id);try{await M(b,(u=a.decreeModel)==null?void 0:u.id),await v.replace({name:Se,params:{id:b,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})}catch{}};return s({stepClick:T}),(b,u)=>{const E=Ne;return $(),C("div",Jl,[o(Ce,{modelValue:e(n).content.$model,"onUpdate:modelValue":u[0]||(u[0]=i=>e(n).content.$model=i),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).decreeModel.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"]),y("div",Zl,[o(E,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",en,[o(E,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:u[1]||(u[1]=i=>T(e(Ke)))}),o(E,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:P})])]),o(Le,{modelValue:w.value,"onUpdate:modelValue":u[2]||(u[2]=i=>w.value=i),"send-button-loading":e(a).buttonLoading,"onEmit:send":D,"content-classes":"p-0"},{content:d(()=>[o(e(et),{"compose-model":{...e(a).model,bookings:e(a).booking_model.bookings,trip_plans:e(a).trip_plan_model.trip_plans,decree_content:e(a).decreeModel.content},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},tn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},ln={class:"px-6 py-4"},vr={__name:"BusinessTripForm",props:{formType:{type:String,default:j}},setup(p){const s=p,{t:r}=te(),t=ie(),v=se(),a=le(),n=Ze();Z(n.rules,n.model),Z(n.trip_plan_rules,n.trip_plan_model),Z(n.booking_model_rules,n.booking_model),Z(n.decreeRules,n.decreeModel);const m=X(null),l=ne(()=>s.formType===j?"create-business-trip-notice":"update-business-trip-notice"),_=ne(()=>{switch(t.query.step){case Ke:return bo;case eo:return on;case ao:return Ol;case yo:return Ql;default:return bo}}),w=async M=>{var b;const D=e(m);((b=t.query)==null?void 0:b.step)!==M.value&&(await D.stepClick(M.value),M.value,eo)},T=async()=>{t.query.step||await v.replace({query:{...t.query,step:Ke}}),n.stepperItems.forEach(M=>M.active=M.value===t.query.step)},R=async()=>{var b,u,E,i,c,g,f,x,O,V,h,q;const M=oe(n.model.__approvers),D=oe(n.model.__signers);if(n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=M,n.model.signers=D,n.model.curator=(u=(b=n.model)==null?void 0:b.__curator)==null?void 0:u.user_id,n.model.journal=re.INNER,n.model.company=(i=(E=a.currentUser)==null?void 0:E.company)==null?void 0:i.id,n.model.__groups.forEach((S,B)=>{const L=B+1;n.model.notices.push(...S.__users.map(Y=>{var pe,N,H;return{start_date:S.__start_date,end_date:S.__end_date,user:Y.id,company:(N=(pe=a.currentUser)==null?void 0:pe.company)==null?void 0:N.id,sender_company:(H=S.__company)==null?void 0:H.id,regions:S.__regions.map(A=>A.id),tags:S.__tags.map(A=>({id:A.id})),route:S.__route,group_id:L,...Y.business_trip_id?{id:Y.business_trip_id}:{}}}))}),n.model.sender=(g=(c=a==null?void 0:a.currentUser)==null?void 0:c.top_level_department)==null?void 0:g.id,n.model.files=n.model.__files.map(S=>({id:S.id})),n.model.document_type=t.params.document_type,n.model.document_sub_type=t.params.document_sub_type,s.formType===j&&t.query.notice_id)try{await n.actionUpdateDocument({id:t.query.notice_id,body:n.model})}catch{}else if(s.formType===j)try{const{data:S}=await n.actionCreateDocument(n.model),B={approvers:[],signers:[],curator:(x=(f=n.model)==null?void 0:f.__curator)==null?void 0:x.user_id,journal:re.ORDERS_PROTOCOLS,company:a.currentUser.company.id,sender:(V=(O=a==null?void 0:a.currentUser)==null?void 0:O.top_level_department)==null?void 0:V.id,document_type:J.DECREE,document_sub_type:ee.BUSINESS_TRIP_DECREE_V2,short_description:(h=n.model)==null?void 0:h.short_description,trip_notice_id:S.id,content:S.content};n.decreeModel.content=S.content;try{const L=await n.actionCreateDocument(B);n.decreeModel.id=(q=L==null?void 0:L.data)==null?void 0:q.id,await v.replace({query:{...t.query,notice_id:S.id}}),await n.actionGetDocumentDetailForUpdate(S.id)}catch{}}catch{}else if(s.formType===Xe&&t.params.id)try{await n.actionUpdateDocument({id:t.params.id,body:n.model})}catch{}},P=async()=>{try{await R(),await z(null,r("notice-saved-successfully"),I.SUCCESS)}catch{}};return Qe(async()=>{await T(),s.formType===Xe?await n.actionGetDocumentDetailForUpdate(t.params.id):t.query.notice_id&&await n.actionGetDocumentDetailForUpdate(t.query.notice_id)}),De(()=>{n.actionResetBTModel()}),(M,D)=>{const b=$e,u=bl;return $(),C("div",{class:ze(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(n).detailLoading}])},[e(n).detailLoading?($(),K(b,{key:0})):($(),K(e(Ve),{key:1,title:l.value},{content:d(()=>[y("div",tn,[o(u,{items:e(n).stepperItems,"onEmit:stepClick":w},null,8,["items"])]),y("div",ln,[($(),K(Io(_.value),{"form-type":p.formType,ref_key:"childComponent",ref:m,"onEmit:onValidateAndSend":P},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},nn=ke("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:k.withMessage("Поле не должен быть пустым",U)},__curator:{required:k.withMessage("Поле не должен быть пустым",U)},__signers:{required:k.withMessage("Поле не должен быть пустым",U)},short_description:{required:k.withMessage("Поле не должен быть пустым",U)},__groups:{$each:k.forEach({__users:{required:k.withMessage("Поле не должен быть пустым",U)},__tags:{required:k.withMessage("Поле не должен быть пустым",U)},__regions:{required:k.withMessage("Поле не должен быть пустым",U)},__start_date:{required:k.withMessage("Поле не должен быть пустым",U)},__end_date:{required:k.withMessage("Поле не должен быть пустым",U)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:k.forEach({users:{required:k.withMessage("Поле не должен быть пустым",U)},text:{required:k.withMessage("Поле не должен быть пустым",U)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(p){this.model.__groups.splice(p,1)},actionDeleteWorkPlanRow(p){this.trip_plan_model.trip_plans.splice(p,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(p){this.buttonLoading=!0;const{response:s,error:r}=await xe(Ee,p);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await Ue({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),rn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},an={class:"flex justify-between"},sn={class:"text-base text-primary-900 font-semibold mb-1"},dn=["onClick"],cn={class:"flex w-full gap-x-4"},un={class:"flex flex-col gap-y-3"},pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"flex justify-between"},_n={class:"text-base text-primary-900 font-semibold mb-1"},qn=["onClick"],fn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},bn={class:"text-base text-primary-900 font-semibold mb-2"},kr={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:j}},setup(p){const s=p,r=X(!1),t=X(!1),{t:v}=te(),a=ie(),n=se(),m=le(),l=nn(),_=de();fe();const w=Z(l.rules,l.model),T=Z(l.trip_plan_rules,l.trip_plan_model),R=ne(()=>s.formType===j?"create-decree":"update-decree"),P=ne(()=>{const f=new Set;return l.model.__groups.reduce((x,O)=>O.__users&&Array.isArray(O.__users)?x.concat(O.__users):x,[]).filter(x=>f.has(x.id)?!1:(f.add(x.id),!0))}),M=async()=>{var V,h,q,S,B,L;if(r.value=!0,!await w.value.$validate()){z(null,v("fill-required-fields"),I.WARNING);return}const x=oe(l.model.__approvers),O=oe(l.model.__signers);l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.bookings=[],l.model.trip_plans=[],l.model.approvers=x,l.model.signers=O,l.model.curator=(h=(V=l.model)==null?void 0:V.__curator)==null?void 0:h.user_id,l.model.journal=re.ORDERS_PROTOCOLS,l.model.company=(S=(q=m.currentUser)==null?void 0:q.company)==null?void 0:S.id,l.model.__groups.forEach((Y,pe)=>{const N=pe+1;l.model.notices.push(...Y.__users.map(H=>{var A,Ge;return{start_date:Y.__start_date,end_date:Y.__end_date,user:H.id,company:(Ge=(A=m.currentUser)==null?void 0:A.company)==null?void 0:Ge.id,regions:Y.__regions.map(Ie=>Ie.id),tags:Y.__tags.map(Ie=>({id:Ie.id})),group_id:N}}))}),l.model.sender=(L=(B=m==null?void 0:m.currentUser)==null?void 0:B.top_level_department)==null?void 0:L.id,l.model.files=l.model.__files.map(Y=>({id:Y.id})),l.model.document_type=a.params.document_type,l.model.document_sub_type=a.params.document_sub_type,l.model.trip_plans=l.trip_plan_model.trip_plans.map(Y=>({users:Y.users.map(pe=>({id:pe.id})),text:Y.text})),t.value=!0},D=()=>{},b=()=>{l.actionAddGroupBlock()},u=()=>{l.actionAddWorkPlanRow(),r.value=!1},E=f=>{l.model.__files=[],f.forEach(x=>{l.model.__files.push(x)})},i=async()=>{const f=await l.actionCreateDocument(l.model);await _.actionCountList(),f?(t.value=!1,z(null,v("document-sent"),I.SUCCESS),await n.replace({name:Te,query:{document_type:a.params.document_type}})):z(null,v("error-occurred"),I.ERROR)},c=async()=>{await l.actionUpdateDocument({id:a.params.id,body:l.model}),await _.actionCountList(),z(null,v("changed"),I.SUCCESS),await n.replace({name:Se,params:{id:a.params.id,document_type:a.params.document_type,document_sub_type:a.params.document_sub_type}})},g=()=>{s.formType===j?i():c()};return(f,x)=>{const O=$e,V=ue,h=Pe,q=he,S=so,B=Be,L=ce,Y=Ne,pe=vo;return e(l).detailLoading?($(),K(O,{key:0})):($(),C(Q,{key:1},[o(e(Ve),{title:R.value},{content:d(()=>[o(Me,{"onEmit:preview":M,"onEmit:clearForm":D},{default:d(()=>[o(L,null,{default:d(()=>[o(V,{"col-class":"w-1/2"},{default:d(()=>[o(ve,{modelValue:e(w).__curator.$model,"onUpdate:modelValue":x[0]||(x[0]=N=>e(w).__curator.$model=N),error:e(w).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(V,{"col-class":"w-1/2"},{default:d(()=>[o(h,{modelValue:e(w).short_description.$model,"onUpdate:modelValue":x[1]||(x[1]=N=>e(w).short_description.$model=N),error:e(w).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(V,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[($(!0),C(Q,null,qe(e(l).model.__groups,(N,H)=>($(),C("div",rn,[y("div",an,[y("span",sn,F(e(v)("group"))+"-"+F(H+1),1),H!==0?($(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:A=>e(l).actionDeleteGroupBlock(H)},[o(q,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,dn)):ae("",!0)]),o(L,null,{default:d(()=>[o(V,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:N.__users,"onUpdate:modelValue":A=>N.__users=A,error:e(w).__groups.$each.$response.$data[H].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(V,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:N.__regions,"onUpdate:modelValue":A=>N.__regions=A,error:e(w).__groups.$each.$response.$data[H].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":r.value},{chip:d(({value:A})=>[me(F(A.name),1)]),option:d(({value:A})=>[o(e(ge),{title:A.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(V,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:N.__tags,"onUpdate:modelValue":A=>N.__tags=A,error:e(w).__groups.$each.$response.$data[H].__tags,"api-url":"tags","api-params":{document_sub_type:e(a).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":r.value},{chip:d(({value:A})=>[me(F(A.name),1)]),option:d(({value:A})=>[o(e(ge),{title:A.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),o(V,{"col-class":"w-1/2"},{default:d(()=>[y("div",cn,[o(B,{modelValue:N.__start_date,"onUpdate:modelValue":[A=>N.__start_date=A,A=>N.__start_date=e(be)(A)],error:e(w).__groups.$each.$response.$data[H].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(B,{modelValue:N.__end_date,"onUpdate:modelValue":[A=>N.__end_date=A,A=>N.__end_date=e(be)(A)],error:e(w).__groups.$each.$response.$data[H].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(Y,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(je),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:b},null,8,["icon-left"])]),_:1})]),_:1}),y("div",un,[($(!0),C(Q,null,qe(e(l).trip_plan_model.trip_plans,(N,H)=>($(),C("div",pn,[y("div",mn,[y("span",_n,F(e(v)("plan"))+"-"+F(H+1),1),H!==0?($(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:A=>e(l).actionDeleteWorkPlanRow(H)},[o(q,{icon:e(Fe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,qn)):ae("",!0)]),o(L,null,{default:d(()=>[o(V,{"col-class":"w-1/2"},{default:d(()=>[o(pe,{modelValue:N.text,"onUpdate:modelValue":A=>N.text=A,error:e(T).trip_plans.$each.$response.$data[H].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(V,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:N.users,"onUpdate:modelValue":A=>N.users=A,options:P.value,error:e(T).trip_plans.$each.$response.$data[H].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(Y,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(je),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:u},null,8,["icon-left"]),o(L,null,{default:d(()=>[o(V,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":x[2]||(x[2]=N=>e(l).model.__approvers=N),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(V,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(w).__signers.$model,"onUpdate:modelValue":x[3]||(x[3]=N=>e(w).__signers.$model=N),error:e(w).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(V,{"col-class":"w-full"},{default:d(()=>[y("div",fn,[y("div",bn,F(e(v)("decree")),1),o(Ce,{modelValue:e(w).content.$model,"onUpdate:modelValue":x[4]||(x[4]=N=>e(w).content.$model=N),error:e(w).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":E},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Le,{modelValue:t.value,"onUpdate:modelValue":x[5]||(x[5]=N=>t.value=N),"send-button-loading":e(l).buttonLoading,"onEmit:send":g},{content:d(()=>[o(e(wo),{"compose-model":{...e(l).model,trip_plans:e(l).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{qr as _,gr as a,wr as b,hr as c,vr as d,kr as e,fr as f,br as g,yr as h};
