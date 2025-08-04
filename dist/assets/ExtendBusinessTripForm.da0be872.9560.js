import{_ as _e}from"./BaseRow.84426174.9560.js";import{_ as Be}from"./BaseInput.4e60731a.9560.js";import{_ as fe}from"./BaseCol.3b112d19.9560.js";import{v as Z,bb as nt,a1 as et,o as w,c as S,i as l,z as c,h as e,b8 as Ze,d as ee,du as Fe,a as y,t as P,F as J,e as de,a3 as oe,g as te,f as z,B as Tt,dz as Rt,bj as Lt,n as Oe,r as yt,G as Le,as as xe,cN as ae,cO as G,cl as se,u as re,b as ue,ao as pe,be as De,a5 as B,ac as we,a8 as Dt,cY as Qe,dA as Nt,_ as me,dB as It,dC as Mt,dD as Ot,dE as Pt,dF as Bt,$ as At,dG as jt,dH as Ft,aX as wt,bt as Ye,c1 as He,dI as zt,ds as at,E as Gt,cI as Wt,cR as Yt,aE as Ht}from"./index.6ee790c7.3815.js";import{c as E,r as U,u as le}from"./index.2da13f1f.9560.js";import{_ as Xt,a as Kt}from"./BranchMultiSelect.92b06cb5.9560.js";import{j as Qt,k as Jt,l as Zt,_ as $e,a as eo,h as to,g as oo,b as lo,c as no,d as ro,e as vt,i as ao,m as so,f as io}from"./BasePOA.35330af1.9560.js";import"./BaseTabMenu.ce88c8fa.9560.js";import"./dialog.esm.88c8fcd7.9560.js";import"./tabpanel.esm.5678c017.9560.js";import"./FileSaver.min.547a5a4b.9560.js";import{e as co,u as ie,a4 as _t,O as Ve,s as Te,a2 as H,a5 as uo,a6 as ze,a7 as ne,d as A,a8 as Re,a9 as ft,aa as st,ab as We,X as lt}from"./axios.config.837460a5.9560.js";import"./BaseTabView.45ac706c.9560.js";import"./FileTabs.5fd32cca.9560.js";import{_ as X}from"./UserMultiSelect.2399963e.9560.js";import{u as ye}from"./common.7d4a8a60.9560.js";import{u as ce}from"./count.store.3dc152db.9560.js";import{u as dt,b as Ee,c as ge,d as Ue,e as po,f as kt}from"./index.store.db8e0404.9560.js";import{d as qt,e as Ae,c as Ne,f as he,B as Je,g as Xe,h as Ke,i as mo,j as xt,M as it,O as _o,T as fo,k as ct,l as $t,C as qo,P as go,m as bo}from"./index.3493ff30.9560.js";import{F,a as Ce}from"./constants.50c90617.9560.js";import{_ as tt}from"./BaseDropdown.f1df56dc.9560.js";import{_ as Ge}from"./BaseCalendar.91a82a9b.9560.js";import{_ as rt}from"./BaseMultiSelect.e38495d1.9560.js";import{f as ho,a as be}from"./formatDate.45b59f33.9560.js";import{Q as gt}from"./qrcode.vue.esm.d86e5cae.9560.js";import"./divider.esm.048ba554.9560.js";import"./dayjs.min.94231c83.9560.js";/* empty css                                                                                         */import{c as yo}from"./Dropdown.7c134781.9560.js";import"./menu.esm.14024df7.9560.js";/* empty css                                                      */import"./avatar.esm.b6b5e760.9560.js";/* empty css                                                      */import"./businessTrip.store.e7c3b922.9560.js";/* empty css                                                            */import"./accordiontab.esm.a533bbda.9560.js";import"./common.store.1ccda6d6.9560.js";import{_ as qe}from"./WithRadio.b52bb476.9560.js";import"./radiobutton.esm.4dd46efd.9560.js";import"./checkbox.esm.c262acc5.9560.js";import{_ as Vt}from"./ShortDescription.4c077f1f.9560.js";import{_ as bt}from"./BaseBrickRadio.d5512732.9560.js";import{_ as wo}from"./BaseLabel.3b6b51b4.9560.js";import{K as vo}from"./main.7beb6af2.9560.js";import{a as ko}from"./index.249c6b5e.9560.js";import{_ as xo}from"./WithSelectable.498d572c.9560.js";import{_ as $o}from"./BaseBrickTab.1c5275b2.9560.js";import{_ as Vo}from"./BaseFileUpload.0776b1a2.9560.js";import{_ as Eo}from"./BaseFroalaEditor.1c7a701e.9560.js";import"./BaseCalendar.vue_vue_type_style_index_0_lang.8b2e47a8.9560.js";import"./multiselect.esm.ae6e679f.9560.js";/* empty css                                                             */import"./dropdown.esm.e3d4335a.9560.js";/* empty css                                                          */import"./textarea.esm.08de0c0a.9560.js";import"./overlaypanel.esm.8b2ce1b5.9560.js";/* empty css                                                              */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang.c8abf322.9560.js";/* empty css                                                                            */import"./review.store.95dd758f.9560.js";/* empty css                                                       */import{_ as Et}from"./BaseDialog.c1df52ff.9560.js";const Uo={class:"user-select"},ke={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(u,{emit:a}){const o=u,t=Z([]),b=nt(o,"modelValue"),s=async r=>{let{data:_}=await co.get(`${o.apiUrl}/`,r);_.hasOwnProperty("results")?t.value=_.results:t.value=_};return et(async()=>{await s(o.apiParams)}),(r,_)=>(w(),S("div",Uo,[l(tt,{modelValue:e(b),"onUpdate:modelValue":_[0]||(_[0]=n=>Ze(b)?b.value=n:null),options:t.value,"onUpdate:options":_[1]||(_[1]=n=>t.value=n),error:o.error,"api-url":o.apiUrl,"api-params":o.apiParams,"option-label":"full_name",label:o.label,placeholder:o.placeholder,required:o.required,searchable:"","onEmit:change":_[2]||(_[2]=n=>a("emit:change",n))},{option:c(({option:n})=>[l(e(xo),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},So={class:"business-trip-decree-template-view letter-template"},Co={class:"flex flex-col text-sm font-medium mt-4"},To=y("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),Ro=["innerHTML"],Lo=["innerHTML"],Do={class:"employees-table text-sm mt-4"},No={class:"w-full"},Io=y("tr",{class:"text-center"},[y("td",{class:"border-2 p-1"},"№"),y("td",{class:"border-2 p-1"},"F.I.SH"),y("td",{class:"border-2 p-1"},"Departament va lavozim"),y("td",{class:"border-2 p-1"},"Yo'nalish"),y("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Mo={class:"text-center"},Oo={class:"border-2 p-1"},Po={class:"border-2 p-1"},Bo={class:"border-2 p-1"},Ao=y("br",null,null,-1),jo={class:"border-2 p-1"},Fo={class:"flex flex-col gap-y-1"},zo={key:0},Go={class:"border-2 p-1 w-[100px]"},Wo=y("br",null,null,-1),Yo={class:"indent-8 mt-2 text-sm text-justify"},Ho=y("div",null,"xizmat safariga yuborilsin.",-1),Xo=y("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Ko=y("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),Qo=y("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Jo={key:0},Zo=y("span",{class:"font-semibold"},"Asos: ",-1),el=y("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),tl=y("div",null," O‘zR MKning 287-moddasi; ",-1),ol=y("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),ll={class:"mt-6 pb-2 px-4"},nl={class:"text-sm font-semibold block"},rl={class:"text-sm font-semibold block"},al={class:"text-sm font-semibold block"},sl={class:"text-sm font-semibold block"},il={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(u){const a=u,o=dt(),t=ee(()=>{var _;return a.preview?ie().currentUser:(_=a.composeModel)==null?void 0:_.author}),b=ee(()=>{var _,n,p;return a.preview?(_=a.composeModel)==null?void 0:_.__employees.map(k=>({empFullName:k.full_name,empDepName:k.top_level_department.name,empPositionName:k.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(p=(n=a.composeModel)==null?void 0:n.notices)==null?void 0:p.map(k=>({empFullName:k.user.full_name,empDepName:k.user.top_level_department.name,empPositionName:k.user.position.name,destinations:k.destinations,startDate:k.start_date,endDate:k.end_date}))}),s=ee(()=>{var n,p,k;if(a.preview)return[(n=a.composeModel)==null?void 0:n.__curator];const _=(p=a.composeModel)==null?void 0:p.signers.find(C=>C.type===Fe.BASIC_SIGNER);return _?[_]:[(k=a.composeModel)==null?void 0:k.curator].filter(Boolean)}),r=ee(()=>{var _,n;return a.preview?(_=a.composeModel)==null?void 0:_.__signers:(n=a.composeModel)==null?void 0:n.signers.filter(p=>p.type===Fe.SIGNER)});return(_,n)=>{var C,L,T,D,N,x,m,h;const p=fe,k=_e;return w(),S("div",So,[l(e(Qt)),l(e(Jt),{"dep-name":(L=(C=t.value)==null?void 0:C.top_level_department)==null?void 0:L.name},null,8,["dep-name"]),y("div",Co,[y("span",null," № "+P((T=a.composeModel)==null?void 0:T.register_number),1),y("span",null,P(((D=a.composeModel)==null?void 0:D.register_date)&&e(ho)((N=a.composeModel)==null?void 0:N.register_date)),1)]),To,e(o).historyShow?(w(),S("div",{key:0,class:"text-justify",innerHTML:e(o).historyContent},null,8,Ro)):(w(),S("div",{key:1,class:"text-justify",innerHTML:(x=a.composeModel)==null?void 0:x.content},null,8,Lo)),y("div",Do,[y("table",No,[Io,b.value&&b.value.length?(w(!0),S(J,{key:0},de(b.value,(i,d)=>(w(),S("tr",Mo,[y("td",Oo,P(d+1),1),y("td",Po,P(i.empFullName),1),y("td",Bo,[oe(P(i.empDepName)+" ",1),Ao,oe(" "+P(i.empPositionName),1)]),y("td",jo,[y("div",Fo,[(w(!0),S(J,null,de(i.destinations,(v,f)=>(w(),S("span",null,[oe(P(v.name)+" ",1),f!==i.destinations.length-1?(w(),S("span",zo,",")):te("",!0)]))),256))])]),y("td",Go,[oe(P(i.startDate)+" ",1),Wo,oe(" "+P(i.endDate),1)])]))),256)):te("",!0)])]),y("div",Yo,[Ho,Xo,Ko,Qo,(m=u.composeModel)!=null&&m.trip_notice_register_number?(w(),S("div",Jo,[Zo,oe(P((h=u.composeModel)==null?void 0:h.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):te("",!0),el,tl,ol]),y("div",ll,[(w(!0),S(J,null,de(s.value,i=>(w(),z(k,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",nl,P(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(w(),z(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):te("",!0)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",rl,P(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(w(!0),S(J,null,de(r.value,i=>(w(),z(k,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",al,P(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(w(),z(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):te("",!0)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",sl,P(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),l(e(Zt),{"compose-model":a.composeModel,author:t.value},null,8,["compose-model","author"])])}}};var dl=`
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
`,cl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Tt.extend({name:"editor",css:dl,classes:cl});(function(){try{return window.Quill}catch{return null}})();const Se={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(u){return["froala","tiny"].includes(u)}}},emits:["update:modelValue","emit:fileUpload"],setup(u,{emit:a}){const o=u,t=nt(o,"modelValue"),b=Z([{title:"text",slot:"editor",icon:Rt},{title:"file",slot:"file",icon:Lt}]);return(s,r)=>(w(),z($o,{"tab-panel-list":b.value,"panel-container-class":"px-0"},{editor:c(()=>[u.editor==="froala"?(w(),z(Eo,{key:0,modelValue:e(t),"onUpdate:modelValue":r[0]||(r[0]=_=>Ze(t)?t.value=_:null)},null,8,["modelValue"])):(w(),z(yo,{key:1,modelValue:e(t),"onUpdate:modelValue":r[1]||(r[1]=_=>Ze(t)?t.value=_:null)},null,8,["modelValue"]))]),file:c(()=>[y("div",{class:Oe(o.fileUploadContainerClasses)},[l(Vo,{files:o.files,"onEmit:fileUpload":r[2]||(r[2]=_=>a("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ul={class:"flex flex-col justify-between h-full"},pl={class:"px-6 py-4 overflow-y-auto"},ml={class:"actions p-6"},je={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(u,{emit:a}){return(o,t)=>{const b=Le;return w(),S("div",ul,[y("div",pl,[yt(o.$slots,"default")]),y("div",ml,[l(b,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:t[0]||(t[0]=s=>a("emit:clearForm"))}),l(b,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:t[1]||(t[1]=s=>a("emit:preview"))})])])}}},_l=xe("sd-stores-inner",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,document_type:ae.INNER,document_sub_type:G.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:se.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:E.withMessage("Поле не должен быть пустым",U)},content:{required:E.withMessage("Поле не должен быть пустым",U)},__departments:{required:E.withMessage("Поле не должен быть пустым",U)},__approvers:{},__signers:{required:E.withMessage("Поле не должен быть пустым",U)}}}},actions:{async actionCreateDocument(u){let a={...u,type:qt,sub_type:qt};this.buttonLoading=!0;const{response:o,error:t}=await Ve(Ue,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):Promise.reject(t)},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await ge(u);Te(this.model,a),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers),this.model.__departments=await uo(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),fl={class:"font-semibold text-xl"},Ie={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(u,{emit:a}){const t=nt(u,"modelValue"),{t:b}=re();return(s,r)=>{const _=Le,n=Et;return w(),z(n,{modelValue:e(t),"onUpdate:modelValue":r[1]||(r[1]=p=>Ze(t)?t.value=p:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[y("span",fl,P(e(b)("preview")),1)]),content:c(()=>[yt(s.$slots,"content")]),footer:c(()=>[l(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(_,{label:u.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:u.sendButtonLoading,onClick:r[0]||(r[0]=p=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},ia={__name:"InnerForm",props:{formType:{type:String,default:F}},setup(u){const a=u,o=ie(),t=_l();ye();const b=ce(),s=Z(!1);Z(null);const{t:r}=re(),_=ue(),n=pe(),p=le(t.rules,t.model),k=async()=>{await p.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.departments=[],t.model.departments=t.model.__departments.map(m=>m.id),t.model.files=[],t.model.files=t.model.__files.map(m=>({id:m.id})),t.model.journal=se.INNER,t.model.sender=o.currentUser.top_level_department.id,t.model.approvers=ne(t.model.__approvers),t.model.signers=ne(t.model.__signers),t.model.document_type=n.params.document_type,t.model.document_sub_type=n.params.document_sub_type,t.model.receiver&&delete t.model.receiver)},C=()=>{a.formType===F?L():T()},L=async()=>{const x=await t.actionCreateDocument(t.model);await b.actionCountList(),x?(s.value=!1,A(null,r("document-sent"),B.SUCCESS),await _.replace({name:Ae,query:{document_type:ae.INNER}})):A(null,r("error-occurred"),B.ERROR)},T=async()=>{await t.actionUpdateDocument({id:n.params.id,body:t.model}),await b.actionCountList(),A(null,r("document-sent"),B.SUCCESS),await _.replace({name:Ne,params:{id:n.params.id,document_type:ae.INNER,document_sub_type:G.SERVICE_LETTER}})},D=()=>{console.log("Clear Form")},N=x=>{t.model.__files=[],x.forEach(m=>{t.model.__files.push(m)})};return et(async()=>{n.params.id&&await t.actionGetDocumentDetailForUpdate(n.params.id)}),De(()=>{ze(t.model)}),(x,m)=>{const h=we,i=fe,d=Be,v=_e;return e(t).detailLoading?(w(),z(h,{key:0})):(w(),S(J,{key:1},[l(e($e),{title:a.formType===e(F)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[l(je,{"onEmit:preview":k,"onEmit:clearForm":D},{default:c(()=>[l(v,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(Xt,{modelValue:e(p).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(p).__departments.$model=f),error:e(p).__departments},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=f=>e(p).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[4]||(m[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=f=>s.value=f),"send-button-loading":e(t).buttonLoading,"onEmit:send":C},{content:c(()=>{var f,V;return[l(eo,{"compose-model":{...e(t).model,signers:e(t).model.__signers,approvers:e(t).model.__approvers,author:e(t).model.__signers[0],sender:{name:(V=(f=e(o).currentUser)==null?void 0:f.top_level_department)==null?void 0:V.name},receiver:{departments:e(t).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},ql=xe("sd-store-application",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",U)},__curator:{required:E.withMessage("Поле не должен быть пустым",U)},__signers:{}}}},actions:{async actionCreateDocument(u){let a={...u};this.buttonLoading=!0;const{response:o,error:t}=await Ve(Ue,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await ge(u);Te(this.model,a),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers.filter(o=>o.type===Fe.SIGNER)),this.model.__curator=await Re([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Ut=xe("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:ie().currentUser.company.id,curator:null,document_type:ae.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:se.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:E.withMessage("Поле не должен быть пустым",U)},register_date:{required:E.withMessage("Поле не должен быть пустым",U)},content:{required:E.withMessage("Поле не должен быть пустым",U)},__negotiators:{required:E.withMessage("Поле не должен быть пустым",U)},__curator:{required:E.withMessage("Поле не должен быть пустым",U)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:o}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await ge(u);Te(this.model,a),this.model.__signers=await H(a.signers.filter(o=>o.type!==Fe.NEGOTIATOR)),this.model.__negotiators=await H(a.signers.filter(o=>o.type===Fe.NEGOTIATOR)),this.model.__approvers=await H(a.approvers),this.model.__curator=await Re([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),da={__name:"ApplicationForm",props:{formType:{type:String,default:F}},setup(u){const a=u,o=ie(),t=ql();ye();const b=ce();Ut();const s=Z(!1);Z(null);const{t:r}=re(),_=ue(),n=pe(),p=le(t.rules,t.model),k=ee(()=>n.params.document_sub_type===G.EXPLANATION_LETTER?a.formType===F?"create-explanation-letter":"update-explanation-letter":a.formType===F?"create-sd-application":"update-sd-application"),C=async()=>{var h,i,d,v,f;await p.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.signers=[{user:(h=o==null?void 0:o.currentUser)==null?void 0:h.id}],t.model.sender=(d=(i=o==null?void 0:o.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,t.model.curator=(f=(v=t==null?void 0:t.model)==null?void 0:v.__curator)==null?void 0:f.user_id,t.model.journal=se.APPLICATION,t.model.document_type=n.params.document_type,t.model.document_sub_type=n.params.document_sub_type,t.model.approvers=ne(t.model.__approvers))},L=async()=>{},T=()=>{a.formType===F?D():N()},D=async()=>{const m=await t.actionCreateDocument(t.model);await b.actionCountList(),m?(s.value=!1,A(null,r("document-sent"),B.SUCCESS),await _.replace({name:Ae,query:{document_type:ae.APPLICATION}})):A(null,r("error-occurred"),B.ERROR)},N=async()=>{await t.actionUpdateDocument({id:n.params.id,body:t.model}),await b.actionCountList(),A(null,r("document-sent"),B.SUCCESS),await _.replace({name:Ne,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},x=m=>{t.model.__files=[],m.forEach(h=>{t.model.__files.push(h)})};return et(async()=>{n.params.id&&await t.actionGetDocumentDetailForUpdate(n.params.id)}),De(()=>{ze(t.model)}),(m,h)=>{const i=we,d=fe,v=_e;return e(t).detailLoading?(w(),z(i,{key:0})):(w(),S(J,{key:1},[l(e($e),{title:k.value},{content:c(()=>[l(je,{"onEmit:preview":C,"onEmit:clearForm":L},{default:c(()=>[l(v,null,{default:c(()=>[l(d,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":h[0]||(h[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":h[1]||(h[1]=f=>e(t).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":h[2]||(h[2]=f=>e(p).__signers.$model=f),disabled:"",label:"signers",placeholder:e(o).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),l(d,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(p).content.$model,"onUpdate:modelValue":h[3]||(h[3]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":x},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:s.value,"onUpdate:modelValue":h[4]||(h[4]=f=>s.value=f),"send-button-loading":e(t).buttonLoading,"onEmit:send":T},{content:c(()=>[l(to,{"compose-model":{...e(t).model,curator:e(t).model.__curator,author:a.formType===e(F)?e(o).currentUser:e(t).model.__signers[0].user,signers:a.formType===e(F)?[e(o).currentUser]:e(t).model.__signers},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=xe("sd-notice-store",{state:()=>(ie(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:ae.NOTICE,document_sub_type:G.BUSINESS_TRIP,journal:se.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:E.withMessage("Поле не должен быть пустым",U)},start_date:{required:E.withMessage("Поле не должен быть пустым",U)},route:{required:E.withMessage("Поле не должен быть пустым",U)},content:{required:E.withMessage("Поле не должен быть пустым",U)},__companies:{required:E.withMessage("Поле не должен быть пустым",U)},__curator:{required:E.withMessage("Поле не должен быть пустым",U)},__employees:{required:E.withMessage("Поле не должен быть пустым",U)},__signers:{required:E.withMessage("Поле не должен быть пустым",U)},__tags:{required:E.withMessage("Поле не должен быть пустым",U)},short_description:{required:E.withMessage("Поле не должен быть пустым",U)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:o}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a=!1){try{this.detailLoading=!0;const{data:o}=await ge(u);Te(this.model,o),this.model.__companies=[],this.model.__curator=await Re([],o.curator.id,!1),this.model.__employees=await H(o.notices),a?(this.model.__approvers=await H(o.approvers.filter(t=>{var b,s;return((b=t==null?void 0:t.user)==null?void 0:b.id)!==((s=o==null?void 0:o.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await H(o.approvers),this.model.__signers=await H(o.signers),this.model.__companies=await ft(o.notices[0].destinations),this.model.__tags=await st(o.tags),this.model.start_date=o.notices[0].start_date,this.model.end_date=o.notices[0].end_date,this.model.__tags=o.tags,this.model.route=o.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(u,a){try{this.detailLoading=!0;const{data:o}=await ge(u),t=await ge(a);Te(this.model,o),this.model.__companies=[],this.model.__curator=await Re([],o.curator.id,!1),this.model.__employees=await H(t.data.notices),this.model.__approvers=await H(o.approvers),this.model.__signers=await H(o.signers),this.model.__companies=await ft(t.data.notices[0].destinations),this.model.__tags=await st(o.tags),this.model.start_date=t.data.notices[0].start_date,this.model.end_date=t.data.notices[0].end_date,this.model.__tags=o.tags,this.model.route=t.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),bl={class:"flex w-full gap-x-4"},ca={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:F}},setup(u){const a=u,{t:o}=re(),t=pe(),b=ue(),s=ie(),r=gl(),_=ce();ye();const n=le(r.rules,r.model),p=Z(!1),k=ee(()=>{const i=a.formType===F,d=t.params.document_sub_type;return d===G.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":d===G.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),C=ee(()=>{var i,d;return t.params.document_sub_type===G.BUSINESS_TRIP_DECREE_LOCAL&&((i=t==null?void 0:t.query)==null?void 0:i.compose_id)&&((d=t==null?void 0:t.query)==null?void 0:d.document_sub_type)===G.BUSINESS_TRIP}),L=ee(()=>{var i;return!!(t.params.document_sub_type===G.BUSINESS_TRIP_DECREE_LOCAL&&((i=r==null?void 0:r.model)!=null&&i.trip_notice_id))});Dt(()=>r.model.__tags,i=>{if(a.formType===F)if(i&&i.length){let d=`${i.map(v=>v.name_uz).join(", ")} yuzasidan`;r.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else r.model.short_description=null});const T=async()=>{var d,v,f,V,I;await n.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=ne(r.model.__approvers),r.model.signers=ne(r.model.__signers),r.model.curator=(v=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:v.user_id,r.model.journal=t.params.document_type===ae.DECREE||t.params.document_type===ae.ORDER?se.ORDERS_PROTOCOLS:se.INNER,r.model.company=s.currentUser.company.id,r.model.notices=r.model.__employees.map(O=>({start_date:r.model.start_date,end_date:r.model.end_date,user:O.id,route:r.model.route,companies:r.model.__companies.map(g=>g.id)})),r.model.sender=(V=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:V.id,r.model.tags=r.model.__tags.map(O=>({id:O.id})),r.model.files=r.model.__files.map(O=>({id:O.id})),r.model.document_type=t.params.document_type,r.model.document_sub_type=t.params.document_sub_type,C.value&&(r.model.trip_notice_id=(I=t==null?void 0:t.query)==null?void 0:I.compose_id),p.value=!0)},D=()=>{},N=i=>{r.model.__files=[],i.forEach(d=>{r.model.__files.push(d)})},x=async()=>{C.value&&(r.model.notices=[]);const i=await r.actionCreateDocument(r.model);await _.actionCountList(),i?(p.value=!1,A(null,o("document-sent"),B.SUCCESS),await b.replace({name:Ae,query:{document_type:t.params.document_sub_type===G.BUSINESS_TRIP_DECREE_LOCAL?ae.DECREE:t.params.document_sub_type===G.BUSINESS_TRIP_ORDER_LOCAL?ae.ORDER:ae.NOTICE}})):A(null,o("error-occurred"),B.ERROR)},m=async()=>{(C.value||L.value)&&(r.model.notices=[]),await r.actionUpdateDocument({id:t.params.id,body:r.model}),await _.actionCountList(),A(null,o("changed"),B.SUCCESS),await b.replace({name:Ne,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},h=()=>{a.formType===F?x():m()};return Qe(async()=>{t.params.id&&t.query.trip_notice_id&&t.params.document_sub_type===G.BUSINESS_TRIP_DECREE_LOCAL?await r.actionGetDocumentDetailForUpdateForCustomUse(t.params.id,t.query.trip_notice_id):t.params.id?await r.actionGetDocumentDetailForUpdate(t.params.id):C.value&&await r.actionGetDocumentDetailForUpdate(t.query.compose_id,!0)}),De(()=>{ze(r.model)}),(i,d)=>{const v=we,f=fe,V=Ge,I=tt,O=Be,g=_e;return e(r).detailLoading?(w(),z(v,{key:0})):(w(),S(J,{key:1},[l(e($e),{title:k.value},{content:c(()=>[l(je,{"onEmit:preview":T,"onEmit:clearForm":D},{default:c(()=>[l(g,null,{default:c(()=>[l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=$=>e(n).__curator.$model=$),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=$=>e(n).__employees.$model=$),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:C.value||L.value},null,8,["modelValue","error","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(Kt,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=$=>e(n).__companies.$model=$),error:e(n).__companies,"text-truncate":"",disabled:C.value||L.value},null,8,["modelValue","error","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(rt,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=$=>e(n).__tags.$model=$),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:$})=>[oe(P($.name),1)]),option:c(({value:$})=>[l(e(qe),{title:$.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[y("div",bl,[l(V,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=$=>e(n).start_date.$model=$),d[5]||(d[5]=$=>e(n).start_date.$model=e(be)($))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:C.value||L.value},null,8,["modelValue","error","min-date","disabled"]),l(V,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=$=>e(n).end_date.$model=$),d[7]||(d[7]=$=>e(n).end_date.$model=e(be)($))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:C.value||L.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(I,{modelValue:e(n).route.$model,"onUpdate:modelValue":d[8]||(d[8]=$=>e(n).route.$model=$),error:e(n).route,options:e(Nt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:C.value||L.value},null,8,["modelValue","error","options","disabled"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=$=>e(r).model.__approvers=$),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=$=>e(n).__signers.$model=$),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(O,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=$=>e(n).short_description.$model=$),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(n).content.$model,"onUpdate:modelValue":d[12]||(d[12]=$=>e(n).content.$model=$),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:p.value,"onUpdate:modelValue":d[13]||(d[13]=$=>p.value=$),"send-button-loading":e(r).buttonLoading,"onEmit:send":h},{content:c(()=>[e(t).params.document_sub_type===e(G).BUSINESS_TRIP_DECREE_LOCAL?(w(),z(e(il),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(t).params.document_sub_type===e(G).BUSINESS_TRIP_ORDER_LOCAL?(w(),z(e(oo),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(w(),z(e(lo),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},ua={__name:"OrderForm",props:{formType:{type:String,default:F}},setup(u){const a=u,o=Ut(),t=ce(),b=ie(),s=pe(),r=ue(),_=le(o.rules,o.model),{t:n}=re(),p=Z(!1),k=async()=>{var m,h,i,d;await _.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=ne(o.model.__approvers),o.model.curator=(h=(m=o==null?void 0:o.model)==null?void 0:m.__curator)==null?void 0:h.user_id,o.model.sender=(d=(i=b==null?void 0:b.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,o.model.files=o.model.__files.map(v=>({id:v.id})),o.model.document_type=s.params.document_type,o.model.document_sub_type=s.params.document_sub_type,o.model.journal=se.ORDERS_PROTOCOLS,o.model.register_date=be(o.model.register_date),o.model.__negotiators.forEach(v=>{o.model.signers.push(v.hasOwnProperty("user")?{id:v.id,user:v.user.id,type:Fe.NEGOTIATOR}:{user:v.id,type:Fe.NEGOTIATOR})}),s.query.compose_id&&(o.model.trip_notice_id=s.query.compose_id),p.value=!0)},C=()=>{},L=async()=>{try{const x=await o.actionCreateDocument(o.model);await t.actionCountList(),x&&(p.value=!1,A(null,n("document-sent"),B.SUCCESS),await r.replace({name:Ae,query:{document_type:ae.ORDER}}))}catch{A(null,n("error-occurred"),B.ERROR)}},T=async()=>{try{const x=await o.actionUpdateDocument({id:s.params.id,body:o.model});await t.actionCountList(),A(null,n("changed"),B.SUCCESS),await r.replace({name:Ne,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{A(null,n("error-occurred"),B.ERROR)}},D=()=>{a.formType===F?L():T()},N=x=>{o.model.__files=[],x.forEach(m=>{o.model.__files.push(m)})};return et(async()=>{s.params.id&&await o.actionGetDocumentDetailForUpdate(s.params.id)}),De(()=>{ze(o.model)}),(x,m)=>{const h=we,i=fe,d=Be,v=Ge,f=_e;return e(o).detailLoading?(w(),z(h,{key:0})):(w(),S(J,{key:1},[l(e($e),{title:a.formType===e(F)?"create-order":"update-order"},{content:c(()=>[l(je,{"onEmit:preview":k,"onEmit:clearForm":C},{default:c(()=>[l(f,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=V=>e(_).__curator.$model=V),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=V=>e(_).register_number.$model=V),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(v,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=V=>e(_).register_date.$model=V),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=V=>e(o).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=V=>e(_).__negotiators.$model=V),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(_).content.$model,"onUpdate:modelValue":m[5]||(m[5]=V=>e(_).content.$model=V),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:p.value,"onUpdate:modelValue":m[6]||(m[6]=V=>p.value=V),"send-button-loading":e(o).buttonLoading,"onEmit:send":D},{content:c(()=>[l(e(no),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},hl=xe("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",U)},__curator:{required:E.withMessage("Поле не должен быть пустым",U)},__signers:{required:E.withMessage("Поле не должен быть пустым",U)},short_description:{required:E.withMessage("Поле не должен быть пустым",U)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:o}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await ge(u);Te(this.model,a),this.model.__curator=await Re([],a.curator.id,!1),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers)}catch{}finally{this.detailLoading=!1}}}}),pa={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:F}},setup(u){const a=u,{t:o}=re(),t=pe(),b=ue(),s=ie(),r=hl(),_=ce();ye();const n=Z(!1),p=le(r.rules,r.model),k=async()=>{var m,h,i,d;await p.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=ne(r.model.__approvers),r.model.signers=ne(r.model.__signers),r.model.curator=(h=(m=r==null?void 0:r.model)==null?void 0:m.__curator)==null?void 0:h.user_id,r.model.journal=se.INNER,r.model.company=s.currentUser.company.id,r.model.sender=(d=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,r.model.files=r.model.__files.map(v=>({id:v.id})),r.model.document_type=t.params.document_type,r.model.document_sub_type=t.params.document_sub_type,n.value=!0)},C=()=>{},L=x=>{r.model.__files=[],x.forEach(m=>{r.model.__files.push(m)})},T=async()=>{const x=await r.actionCreateDocument(r.model);await _.actionCountList(),x?(n.value=!1,A(null,o("document-sent"),B.SUCCESS),await b.replace({name:Ae,query:{document_type:ae.NOTICE}})):A(null,o("error-occurred"),B.ERROR)},D=async()=>{await r.actionUpdateDocument({id:t.params.id,body:r.model}),await _.actionCountList(),A(null,o("changed"),B.SUCCESS),await b.replace({name:Ne,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},N=()=>{a.formType===F?T():D()};return Qe(async()=>{t.params.id&&await r.actionGetDocumentDetailForUpdate(t.params.id)}),De(()=>{ze(r.model)}),(x,m)=>{const h=we,i=fe,d=Be,v=_e;return e(r).detailLoading?(w(),z(h,{key:0})):(w(),S(J,{key:1},[l(e($e),{title:a.formType===e(F)?"create-notice":"update-notice"},{content:c(()=>[l(je,{"onEmit:preview":k,"onEmit:clearForm":C},{default:c(()=>[l(v,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=f=>e(r).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[4]||(m[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:n.value,"onUpdate:modelValue":m[5]||(m[5]=f=>n.value=f),"send-button-loading":e(r).buttonLoading,"onEmit:send":N},{content:c(()=>[l(e(ro),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},yl=xe("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",U)},__curator:{required:E.withMessage("Поле не должен быть пустым",U)},__signers:{required:E.withMessage("Поле не должен быть пустым",U)},short_description:{required:E.withMessage("Поле не должен быть пустым",U)}}}),actions:{async actionCreateDocument(u){const a={...u};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:o,error:t}=await Ve(Ue,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){const o={...a};delete o.bookings,delete o.notices,delete o.trip_plans;try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:o});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){try{this.detailLoading=!0;const{data:o}=await ge(u);Te(this.model,o),this.model.__curator=await Re([],o.curator.id,!1),this.model.__approvers=await H(o.approvers),this.model.__signers=await H(o.signers)}catch{}finally{this.detailLoading=!1}}}}),ma={__name:"DecreeForm",props:{formType:{type:String,default:F}},setup(u){const a=u,{t:o}=re(),t=pe(),b=ue(),s=ie(),r=ce();ye();const _=Z(!1),n=yl(),p=dt(),k=le(n.rules,n.model),C=async()=>{var i,d,v,f;await k.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=ne(n.model.__approvers),n.model.signers=ne(n.model.__signers),n.model.curator=(d=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:d.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=s.currentUser.company.id,n.model.sender=(f=(v=s==null?void 0:s.currentUser)==null?void 0:v.top_level_department)==null?void 0:f.id,n.model.files=n.model.__files.map(V=>({id:V.id})),n.model.document_type=t.params.document_type,n.model.document_sub_type=t.params.document_sub_type,t.query.compose_id&&(n.model.trip_notice_id=t.query.compose_id),_.value=!0)},L=()=>{},T=h=>{n.model.__files=[],h.forEach(i=>{n.model.__files.push(i)})},D=async()=>{const h=await n.actionCreateDocument(n.model);await r.actionCountList(),h?(_.value=!1,A(null,o("document-sent"),B.SUCCESS),await b.replace({name:Ae,query:{document_type:t.params.document_type}})):A(null,o("error-occurred"),B.ERROR)},N=async()=>{await n.actionUpdateDocument({id:t.params.id,body:n.model}),await r.actionCountList(),A(null,o("changed"),B.SUCCESS),await b.replace({name:Ne,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},x=()=>{a.formType===F?D():N()},m=async h=>{const{data:i}=await p.actionGetDocumentDetail(h);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return Qe(async()=>{a.formType===F&&t.query.compose_id?await m(t.query.compose_id):a.formType===Ce&&t.query.trip_notice_id&&t.params.id?(await n.actionGetDocumentDetailForUpdate(t.params.id,null),await m(t.query.trip_notice_id)):a.formType===Ce&&t.params.id&&await n.actionGetDocumentDetailForUpdate(t.params.id,null)}),De(()=>{ze(n.model)}),(h,i)=>{const d=we,v=fe,f=Be,V=_e;return e(n).detailLoading?(w(),z(d,{key:0})):(w(),S(J,{key:1},[l(e($e),{title:a.formType===e(F)?"create-decree":"update-decree"},{content:c(()=>[l(je,{"onEmit:preview":C,"onEmit:clearForm":L},{default:c(()=>[l(V,null,{default:c(()=>[l(v,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=I=>e(k).__curator.$model=I),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(v,{"col-class":"w-1/2"},{default:c(()=>[l(f,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=I=>e(k).short_description.$model=I),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(v,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=I=>e(n).model.__approvers=I),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(v,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=I=>e(k).__signers.$model=I),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(v,{"col-class":"w-full"},{default:c(()=>[l(Se,{modelValue:e(k).content.$model,"onUpdate:modelValue":i[4]||(i[4]=I=>e(k).content.$model=I),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":T},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:_.value,"onUpdate:modelValue":i[5]||(i[5]=I=>_.value=I),"send-button-loading":e(n).buttonLoading,"onEmit:send":x},{content:c(()=>[l(e(vt),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wl=xe("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:E.withMessage("Поле не должен быть пустым",U)},start_date:{required:E.withMessage("Поле не должен быть пустым",U)},__curator:{required:E.withMessage("Поле не должен быть пустым",U)},__signers:{required:E.withMessage("Поле не должен быть пустым",U)},__user:{required:E.withMessage("Поле не должен быть пустым",U)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:o}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await ge(u);return Te(this.model,a),this.model.__curator=await Re([],a.curator.id,!1),this.model.__approvers=await H(a.approvers),this.model.__signers=await H(a.signers),this.model.__user=await We("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}}}}),_a={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:F}},setup(u){const a=u,o=pe(),t=ue(),b=ie(),s=wl();dt();const r=ce(),{t:_}=re(),n=le(s.rules,s.model),p=Z(!1),k=Z([]),C=ee(()=>a.formType===F?"create-poa":"update-poa"),L=ee(()=>s.model.start_date?new Date(s.model.start_date):new Date),T=async()=>{var d,v,f,V,I,O,g,$,q,Y,R,K,Q,M,W,j,Me,ve,pt,mt;if(await n.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=ne(s.model.__approvers),s.model.signers=ne(s.model.__signers),s.model.curator=(v=(d=s==null?void 0:s.model)==null?void 0:d.__curator)==null?void 0:v.user_id,s.model.user=(V=(f=s==null?void 0:s.model)==null?void 0:f.__user)==null?void 0:V.id,s.model.journal=se.POWER_OF_ATTORNEY,s.model.company=(O=(I=b.currentUser)==null?void 0:I.company)==null?void 0:O.id,s.model.sender=($=(g=b==null?void 0:b.currentUser)==null?void 0:g.top_level_department)==null?void 0:$.id,s.model.document_type=o.params.document_type,s.model.document_sub_type=o.params.document_sub_type,s.model.content=".",s.model.parent=(Y=(q=s.model)==null?void 0:q.__parent)==null?void 0:Y.id,!((K=(R=s==null?void 0:s.model)==null?void 0:R.__user)!=null&&K.passport_seria||(M=(Q=s==null?void 0:s.model)==null?void 0:Q.__user)!=null&&M.passport_number||(j=(W=s==null?void 0:s.model)==null?void 0:W.__user)!=null&&j.passport_issue_date||(ve=(Me=s==null?void 0:s.model)==null?void 0:Me.__user)!=null&&ve.passport_issued_by)){A(null,`${(mt=(pt=s.model)==null?void 0:pt.__user)==null?void 0:mt.full_name}: ${_("passport-details-error")}`,B.WARNING);return}p.value=!0}},D=()=>{},N=async()=>{const i=await s.actionCreateDocument(s.model);await r.actionCountList(),i?(p.value=!1,A(null,_("document-sent"),B.SUCCESS),await t.replace({name:Ae,query:{document_type:ae.POWER_OF_ATTORNEY}})):A(null,_("error-occurred"),B.ERROR)},x=async()=>{await s.actionUpdateDocument({id:o.params.id,body:s.model}),await r.actionCountList(),A(null,_("changed"),B.SUCCESS),await t.replace({name:Ne,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},m=()=>{a.formType===F?N():x()},h=async i=>{const{data:d}=await po({user:i.id,document_sub_type:o.params.document_sub_type,status:5});k.value=d.results};return Qe(async()=>{if(o.params.id){const i=await s.actionGetDocumentDetailForUpdate(o.params.id);i.parent&&(k.value=[i.parent])}}),De(()=>{ze(s.model)}),(i,d)=>{const v=we,f=fe,V=Ge,I=tt,O=_e;return e(s).detailLoading?(w(),z(v,{key:0})):(w(),S(J,{key:1},[l(e($e),{title:C.value},{content:c(()=>[l(je,{"onEmit:preview":T,"onEmit:clearForm":D},{default:c(()=>[l(O,null,{default:c(()=>[l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=g=>e(n).__curator.$model=g),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__user.$model,"onUpdate:modelValue":d[1]||(d[1]=g=>e(n).__user.$model=g),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":d[2]||(d[2]=g=>h(g))},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(V,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[3]||(d[3]=g=>e(n).start_date.$model=g),d[4]||(d[4]=g=>e(n).start_date.$model=e(be)(g))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(V,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[5]||(d[5]=g=>e(n).end_date.$model=g),d[6]||(d[6]=g=>e(n).end_date.$model=e(be)(g))],error:e(n).end_date,"min-date":L.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":d[7]||(d[7]=g=>e(s).model.__approvers=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[8]||(d[8]=g=>e(n).__signers.$model=g),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:c(()=>[l(I,{modelValue:e(s).model.__parent,"onUpdate:modelValue":d[9]||(d[9]=g=>e(s).model.__parent=g),options:k.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:p.value,"onUpdate:modelValue":d[10]||(d[10]=g=>p.value=g),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:c(()=>[l(ao,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vl={class:"base-stepper-component flex items-center select-none"},kl=["onClick"],xl={key:0,class:"flex h-1 bg-greyscale-200 w-8"},St={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(u,{emit:a}){const{t:o}=re(),t=b=>{a("emit:stepClick",b)};return(b,s)=>{const r=me;return w(),S("div",vl,[(w(!0),S(J,null,de(u.items,(_,n)=>(w(),S("div",{key:_.id,class:"flex items-center"},[y("div",{class:Oe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",_.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:p=>t(_)},[l(r,{icon:_.icon,class:Oe(_.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),y("span",null,P(e(o)(_.label)),1)],10,kl),n<u.items.length-1?(w(),S("div",xl)):te("",!0)]))),128))])}}},Pe=xe("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__countries:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList],__users_to_extend:null,__regions_to_extend:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:E.withMessage("Поле не должен быть пустым",U)}},rules:{content:{required:E.withMessage("Поле не должен быть пустым",U)},__curator:{required:E.withMessage("Поле не должен быть пустым",U)},__signers:{required:E.withMessage("Поле не должен быть пустым",U)},short_description:{required:E.withMessage("Поле не должен быть пустым",U)},__groups:{$each:E.forEach({__users:{required:E.withMessage("Поле не должен быть пустым",U)},__tags:{required:E.withMessage("Поле не должен быть пустым",U)},__start_date:{required:E.withMessage("Поле не должен быть пустым",U)},__end_date:{required:E.withMessage("Поле не должен быть пустым",U)},__company:{required:E.withMessage("Поле не должен быть пустым",U)},__route:{required:E.withMessage("Поле не должен быть пустым",U)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:E.forEach({users:{required:E.withMessage("Поле не должен быть пустым",U)},text:{required:E.withMessage("Поле не должен быть пустым",U)}})}},booking_model:{bookings:[{type:he,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:E.forEach({segments:{$each:E.forEach({departure_city:{required:E.withMessage("Поле не должен быть пустым",U)},arrival_city:{required:E.withMessage("Поле не должен быть пустым",U)},date:{required:E.withMessage("Поле не должен быть пустым",U)},time:{required:E.withMessage("Поле не должен быть пустым",U)},segment_class:{required:E.withMessage("Поле не должен быть пустым",U)}})},passengers:{required:E.withMessage("Поле не должен быть пустым",U)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:It,active:!0,value:Xe},{id:4,label:"decree",icon:Mt,active:!0,value:Ke}],routeTabItems:[{id:1,title:"airplane",icon:Ot,value:Je,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:Pt,value:mo,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:Bt,value:xt,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:At,value:he},{id:2,title:"complex-route",icon:jt,value:it},{id:3,title:"one-way",icon:Ft,value:_o}]}),actions:{async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:o,error:t}=await Ve(Ue,a);return o?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){const o=await lt(a);try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:o});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){var a,o;try{this.detailLoading=!0;const{data:t}=await ge(u),b=await kt(t.id);this.decreeModel=(o=(a=b==null?void 0:b.data)==null?void 0:a.to_composes[0])==null?void 0:o.from_compose,Te(this.model,t),this.model.__curator=await Re([],t.curator.id,!1),this.model.__signers=await H(t.signers),this.model.__approvers=await H(t.approvers);const s=Object.values(t.notices.reduce((r,_)=>{const n=_.group_id;return r[n]=r[n]||{group_id:n,items:[]},r[n].items.push(_),r},{}));this.model.__groups=await Promise.all(s.map(async r=>{var D;const _=await Promise.all(r.items.map(async N=>({...await H([],N.user.id,!1),business_trip_id:N.id}))),n=await st(r.items[0].tags),p=await We("regions",r.items[0].locations),k=await We("companies",[],!1,(D=r.items[0].sender_company)==null?void 0:D.id),C=r.items[0].start_date,L=r.items[0].end_date,T=r.items[0].route;return{__users:_,__tags:n,__regions:p,__start_date:C,__end_date:L,__company:k,__route:T}})),this.trip_plan_model.trip_plans=await Promise.all(t.trip_plans.map(async(r,_)=>({...r,users:await H(r.users)}))),this.booking_model.bookings=await Promise.all(t.bookings.map(async r=>({type:r.type,route:r.route,segments:await Promise.all(r.segments.map(async _=>({departure_city:await We("regions",[],!1,_.departure_city.id),arrival_city:await We("regions",[],!1,_.arrival_city.id),segment_class:await fo.find(n=>n.value===_.segment_class),date:be(_.departure_date),time:await so(_.departure_date,_.departure_end_date)}))),passengers:await H(r.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},async actionStepClick(u,a,o){await u.replace({query:{...a.query,step:o}}),this.stepperItems.forEach(b=>b.active=b.value===o),await wt();const t=document.querySelector(".document-view-aside");t&&t.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:he,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(u){this.booking_model.bookings.splice(u,1)},actionChangeRouteSegment(u,a){const o=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=u===he?[o(),o()]:[o()]},async actionAddRouteLine(u){this.booking_model.bookings[u].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(u,a){this.booking_model.bookings[u].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:he,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),$l={class:"trip-info-components"},Vl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},El={class:"flex justify-between"},Ul={class:"text-base text-primary-900 font-semibold mb-1"},Sl=["onClick"],Cl={class:"flex align-center gap-x-4"},Tl={class:"flex w-full gap-x-4"},Rl={class:"flex w-full gap-x-4"},Ll={class:"text-base text-primary-900 font-semibold mb-2"},Dl={class:"flex items-center justify-between"},ht={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:o}){const t=pe(),b=ue(),s=Pe();ye();const{t:r,locale:_}=re(),n=le(s.rules,s.model),p=Z(!1),k=ee(()=>({region_type:"local"})),C=x=>{s.model.__files=[],x.forEach(m=>{s.model.__files.push(m)})},L=()=>{s.actionAddGroupBlock()},T=async x=>{const m=await n.value.$validate();if(p.value=!0,!m){A(null,r("fill-required-fields"),B.WARNING);return}if(t.params.document_sub_type===G.BUSINESS_TRIP_NOTICE_FOREIGN){if(s.model.__groups.find(i=>!i.__countries||i.__countries.length===0)){A(null,r("fill-required-fields"),B.WARNING);return}s.model.__groups.forEach(i=>{i.__regions=[]})}if(t.params.document_sub_type===G.BUSINESS_TRIP_NOTICE_V2){if(s.model.__groups.find(i=>!i.__regions||i.__regions.length===0)){A(null,r("fill-required-fields"),B.WARNING);return}s.model.__groups.forEach(i=>{i.__countries=[]})}o("emit:onValidateAndSend"),await s.actionStepClick(b,t,"decree")},D=(x,m)=>{s.model.__groups[m].__regions=[]},N=(x,m)=>{x.value.forEach(h=>{var i,d,v,f;if(h.id===((f=(v=(d=(i=s.model)==null?void 0:i.__groups[m])==null?void 0:d.__company)==null?void 0:v.region)==null?void 0:f.id)){const V=s.model.__groups[m].__regions.findIndex(I=>I.id===h.id);(V||V===0)&&s.model.__groups[m].__regions.splice(V,1)}})};return a({stepClick:T}),(x,m)=>{const h=fe,i=Be,d=me,v=tt,f=rt,V=Ge,I=_e,O=Le;return w(),S("div",$l,[l(I,null,{default:c(()=>[l(h,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=g=>e(n).__curator.$model=g),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(h,{"col-class":"w-1/2"},{default:c(()=>[l(i,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=g=>e(n).short_description.$model=g),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(h,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),S(J,null,de(e(s).model.__groups,(g,$)=>(w(),S("div",Vl,[y("div",El,[y("span",Ul,P(e(r)("group"))+"-"+P($+1),1),$!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:q=>e(s).actionDeleteGroupBlock($)},[l(d,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Sl)):te("",!0)]),l(I,null,{default:c(()=>[l(h,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:g.__users,"onUpdate:modelValue":q=>g.__users=q,error:e(n).__groups.$each.$response.$data[$].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"",allSelectable:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(h,{"col-class":"w-1/2"},{default:c(()=>[y("div",Cl,[l(v,{modelValue:g.__company,"onUpdate:modelValue":q=>g.__company=q,error:e(n).__groups.$each.$response.$data[$].__company,options:g.__filialList,"onUpdate:options":q=>g.__filialList=q,required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":q=>D(q,$)},{option:c(({option:q})=>[l(e(qe),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","onUpdate:options","show-nested-error","onEmit:change"]),e(t).params.document_sub_type===e(G).BUSINESS_TRIP_NOTICE_V2?(w(),z(f,{key:0,modelValue:g.__regions,"onUpdate:modelValue":q=>g.__regions=q,"api-url":"regions","api-params":k.value,"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":q=>N(q,$)},{chip:c(({value:q})=>[oe(P(q.name),1)]),option:c(({value:q})=>[l(e(qe),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","api-params","show-nested-error","onEmit:change"])):te("",!0),e(t).params.document_sub_type===e(G).BUSINESS_TRIP_NOTICE_FOREIGN?(w(),z(f,{key:1,modelValue:g.__countries,"onUpdate:modelValue":q=>g.__countries=q,"api-url":"countries","api-params":{country_type:"foreign"},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where-country",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,"all-selectable":"",class:"w-1/2"},{chip:c(({value:q})=>[oe(P(q.name),1)]),option:c(({value:q})=>[l(e(qe),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","show-nested-error"])):te("",!0)])]),_:2},1024),l(h,{"col-class":"w-1/2"},{default:c(()=>[y("div",Tl,[l(f,{modelValue:g.__tags,"onUpdate:modelValue":q=>g.__tags=q,error:e(n).__groups.$each.$response.$data[$].__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":p.value,class:"w-1/2"},{chip:c(({value:q})=>[oe(P(q.name),1)]),option:c(({value:q})=>[l(e(qe),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),l(v,{modelValue:g.__route,"onUpdate:modelValue":q=>g.__route=q,error:e(n).__groups.$each.$response.$data[$].__route,options:e(s).routeTabItems,"onUpdate:options":m[2]||(m[2]=q=>e(s).routeTabItems=q),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(_)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":p.value,class:"w-1/2"},{option:c(({option:q})=>[l(e(qe),{title:e(r)(q.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),l(h,{"col-class":"w-1/2"},{default:c(()=>[y("div",Rl,[l(V,{modelValue:g.__start_date,"onUpdate:modelValue":[q=>g.__start_date=q,q=>g.__start_date=e(be)(q)],error:e(n).__groups.$each.$response.$data[$].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(V,{modelValue:g.__end_date,"onUpdate:modelValue":[q=>g.__end_date=q,q=>g.__end_date=e(be)(q)],error:e(n).__groups.$each.$response.$data[$].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(O,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:L},null,8,["icon-left"])]),_:1}),l(h,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=g=>e(s).model.__approvers=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(h,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":m[4]||(m[4]=g=>e(n).__signers.$model=g),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(h,{"col-class":"w-full"},{default:c(()=>[y("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(s).model.content?"border-critic-500":"border-greyscale-200"])},[y("div",Ll,P(e(r)("notice")),1),l(Se,{modelValue:e(n).content.$model,"onUpdate:modelValue":m[5]||(m[5]=g=>e(n).content.$model=g),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).model.__files,"onEmit:fileUpload":C},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),y("div",Dl,[l(O,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(O,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:m[6]||(m[6]=g=>T(e(ct)))})])])}}},Nl={class:"work-plan-component"},Il={class:"flex flex-col gap-y-3"},Ml={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ol={class:"flex justify-between"},Pl={class:"text-base text-primary-900 font-semibold mb-1"},Bl=["onClick"],Al={class:"flex items-center justify-between mt-10"},jl={class:"flex items-center gap-x-1"},Fl={__name:"WorkPlan",setup(u,{expose:a}){const{t:o}=re(),t=pe(),b=ue(),s=Pe(),r=le(s.trip_plan_rules,s.trip_plan_model),_=Z(!1),n=ee(()=>{const C=new Set;return s.model.__groups.reduce((L,T)=>T.__users&&Array.isArray(T.__users)?L.concat(T.__users):L,[]).filter(L=>C.has(L.id)?!1:(C.add(L.id),!0))}),p=async C=>{const L=await r.value.$validate();if(_.value=!0,!L){A(null,o("fill-required-fields"),B.WARNING);return}const T=s.trip_plan_model.trip_plans.flatMap(N=>{var x;return(x=N.users)==null?void 0:x.map(m=>m.id)}),D=n.value.filter(N=>!T.includes(N.id));D.length?(A(null,`У следующих сотрудников нет плана работы: ${D==null?void 0:D.map(N=>N.first_name+" "+N.last_name).join(", ")}.`,B.WARNING),A(null,"У всех сотрудников должен быть назначен рабочий план.",B.WARNING)):await s.actionStepClick(b,t,C)},k=()=>{s.actionAddWorkPlanRow(),_.value=!1};return a({stepClick:p}),(C,L)=>{const T=me,D=Vt,N=fe,x=_e,m=Le;return w(),S("div",Nl,[y("div",Il,[(w(!0),S(J,null,de(e(s).trip_plan_model.trip_plans,(h,i)=>(w(),S("div",Ml,[y("div",Ol,[y("span",Pl,P(e(o)("plan"))+"-"+P(i+1),1),i!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d=>e(s).actionDeleteWorkPlanRow(i)},[l(T,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Bl)):te("",!0)]),l(x,null,{default:c(()=>[l(N,{"col-class":"w-1/2"},{default:c(()=>[l(D,{modelValue:h.text,"onUpdate:modelValue":d=>h.text=d,error:e(r).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(N,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:h.users,"onUpdate:modelValue":d=>h.users=d,options:n.value,error:e(r).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:k},null,8,["icon-left"]),y("div",Al,[l(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",jl,[l(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:L[0]||(L[0]=h=>p(e(Xe)))}),l(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:L[1]||(L[1]=h=>p(e($t)))})])])])}}};const zl={class:"base-time-picker"},Gl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(u){const a=u,o=nt(a,"modelValue"),{t}=re();return(b,s)=>{var n;const r=wo,_=me;return w(),S("div",zl,[l(r,{label:a.label,required:a.required},null,8,["label","required"]),l(e(vo),{modelValue:e(o),"onUpdate:modelValue":s[0]||(s[0]=p=>Ze(o)?o.value=p:null),"time-picker":"",range:u.range,"cancel-text":e(t)("cancel"),"select-text":e(t)("select"),placeholder:e(t)(u.placeholder),ref:"datePicker",class:Oe({"input-error":((n=u.error)==null?void 0:n.$error)&&u.showNestedError})},{"input-icon":c(()=>[l(_,{icon:e(zt),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Wl={class:"route-component flex flex-col gap-y-3"},Yl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Hl={class:"flex items-center justify-between"},Xl={class:"flex items-center gap-x-4"},Kl={class:"text-base text-primary-900 font-semibold mb-1"},Ql={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Jl={class:"text-xs text-greyscale-900 font-medium"},Zl=["onClick"],en=["onClick"],tn={class:"text-sm text-primary-500 font-semibold"},on={class:"flex items-center justify-between mt-10"},ln={class:"flex items-center gap-x-1"},nn={__name:"Route",props:{formType:{type:String,default:F}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:o}){const{t}=re(),b=pe(),s=ue(),r=Pe(),_=ye();ie(),ce();const n=le(r.booking_model_rules,r.booking_model);Z(!1);const p=Z(!1),k=ee(()=>{const i=new Set;return r.model.__groups.reduce((d,v)=>v.__users&&Array.isArray(v.__users)?d.concat(v.__users):d,[]).filter(d=>i.has(d.id)?!1:(i.add(d.id),!0))}),C=i=>{r.routeTabItems.forEach(d=>d.active=d.id===i.id)},L=(i,d)=>{r.routeTypeTabItems.forEach(v=>v.active=v.id===i.id),r.actionChangeRouteSegment(i.value,d)},T=async(i,d=!1)=>{var I,O;const v=await n.value.$validate();if(p.value=!0,!v){A(null,t("fill-required-fields"),B.WARNING);return}const f=(I=r.booking_model.bookings)==null?void 0:I.flatMap(g=>{var $;return($=g.passengers)==null?void 0:$.map(q=>q==null?void 0:q.id)}),V=(O=k.value)==null?void 0:O.filter(g=>!(f!=null&&f.includes(g.id)));V.length?(A(null,`У следующих сотрудников не назначен маршрут: ${V.map(g=>g.first_name+" "+g.last_name).join(", ")}.`,B.WARNING),A(null,"У всех сотрудников должен быть назначен маршрут",B.WARNING)):(d&&o("emit:onValidateAndSend"),await r.actionStepClick(s,b,i))},D=()=>{r.actionAddRouteRow(),p.value=!1},N=(i,d,v,f)=>{f.type===he&&(r.booking_model.bookings[d].segments[v+1].arrival_city=i)},x=(i,d,v,f)=>{f.type===he&&(r.booking_model.bookings[d].segments[v+1].departure_city=i)},m=(i,d,v,f)=>{f.type===he&&(r.booking_model.bookings[d].segments[v+1].segment_class=i)},h=()=>{T(Ke,!0)};return a({stepClick:T}),(i,d)=>{const v=tt,f=fe,V=Ge,I=_e,O=Le;return w(),S("div",Wl,[(w(!0),S(J,null,de(e(r).booking_model.bookings,(g,$)=>(w(),S("div",Yl,[y("div",Hl,[y("div",Xl,[y("span",Kl,P(e(t)("route"))+"-"+P($+1),1),l(bt,{modelValue:g.route,"onUpdate:modelValue":q=>g.route=q,items:e(r).routeTabItems,"onEmit:onChange":d[0]||(d[0]=q=>C(q))},null,8,["modelValue","onUpdate:modelValue","items"]),l(bt,{modelValue:g.type,"onUpdate:modelValue":q=>g.type=q,items:e(r).routeTypeTabItems,"onEmit:onChange":q=>L(q,$)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),$!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d[1]||(d[1]=(...q)=>e(r).actionDeleteRouteRow&&e(r).actionDeleteRouteRow(...q))},[l(me,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):te("",!0)]),y("div",Ql,[l(me,{icon:e(at),class:"text-warning-500"},null,8,["icon"]),y("span",Jl,P(e(t)("route-warning")),1)]),(w(!0),S(J,null,de(g.segments,(q,Y)=>(w(),S("div",null,[l(I,null,{default:c(()=>[l(f,{"col-class":"w-1/5"},{default:c(()=>[l(v,{modelValue:q.departure_city,"onUpdate:modelValue":R=>q.departure_city=R,error:e(n).bookings.$each.$response.$data[$].segments.$each.$data[Y].departure_city,options:e(_).regionsList,"onUpdate:options":d[2]||(d[2]=R=>e(_).regionsList=R),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:g.type===e(he)&&Y%2!==0,"onEmit:change":R=>N(R,$,Y,g)},{option:c(({option:R})=>[l(e(qe),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(v,{modelValue:q.arrival_city,"onUpdate:modelValue":R=>q.arrival_city=R,error:e(n).bookings.$each.$response.$data[$].segments.$each.$data[Y].arrival_city,options:e(_).regionsList.filter(R=>{var K;return(R==null?void 0:R.id)!=((K=q.departure_city)==null?void 0:K.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:g.type===e(he)&&Y%2!==0,"onEmit:change":R=>x(R,$,Y,g)},{option:c(({option:R})=>[l(e(qe),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(v,{modelValue:q.segment_class,"onUpdate:modelValue":R=>q.segment_class=R,error:e(n).bookings.$each.$response.$data[$].segments.$each.$data[Y].segment_class,options:g.route===e(xt)?e(qo):g.route===e(Je)?e(go):e(bo),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":p.value,translatable:"",disabled:g.type===e(he)&&Y%2!==0,"onEmit:change":R=>m(R,$,Y,g)},{option:c(({option:R})=>[l(e(qe),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(f,{"col-class":"w-1/5"},{default:c(()=>[l(V,{modelValue:q.date,"onUpdate:modelValue":[R=>q.date=R,R=>q.date=e(be)(R)],error:e(n).bookings.$each.$response.$data[$].segments.$each.$data[Y].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),l(f,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[l(Gl,{modelValue:q.time,"onUpdate:modelValue":R=>q.time=R,error:e(n).bookings.$each.$response.$data[$].segments.$each.$data[Y].time,label:"time",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),g.type===e(it)&&Y!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:R=>e(r).actionDeleteRouteLine($,Y)},[l(me,{icon:e(Ye),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Zl)):te("",!0)]),_:2},1024)]),_:2},1024)]))),256)),g.type===e(it)?(w(),S("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:q=>e(r).actionAddRouteLine($)},[l(me,{icon:e(He),class:"text-primary-500"},null,8,["icon"]),y("span",tn,P(e(t)("add-line")),1)],8,en)):te("",!0),l(I,null,{default:c(()=>[l(f,{"col-class":"w-full"},{default:c(()=>[l(X,{modelValue:g.passengers,"onUpdate:modelValue":q=>g.passengers=q,options:k.value,error:e(n).bookings.$each.$response.$data[$].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),l(O,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:D},null,8,["icon-left"]),y("div",on,[l(O,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",ln,[l(O,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:d[3]||(d[3]=g=>T(e(ct)))}),l(O,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(r).buttonLoading,onClick:h},null,8,["loading"])])])])}}},ut=xe("sd-extend-business-trip-store",{state:()=>({buttonLoading:!1,userTripUpdateButtonLoading:!1,detailLoading:!1,changingBTDialog:!1,changingBTLoading:!1,changingBTModel:null,tempVerifications:[],tempRegions:[],tempGroupIndex:null,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",U)},__curator:{required:E.withMessage("Поле не должен быть пустым",U)},__signers:{required:E.withMessage("Поле не должен быть пустым",U)},short_description:{required:E.withMessage("Поле не должен быть пустым",U)}}}),actions:{async actionGetParentDocumentDetail(u){try{this.detailLoading=!0;const{data:a}=await ge(u);await this.actionAdjustModel(a)}catch{}finally{this.detailLoading=!1}},async actionAdjustModel(u){this.model.__notices=u.notices;const a=Object.values(u.notices.reduce((o,t)=>{const b=t.group_id;return o[b]=o[b]||{group_id:b,items:[]},o[b].items.push(t),o},{}));this.model.__groups=await Promise.all(a.map(async o=>({__users:await Promise.all(o.items.map(async b=>({...await H([],b.user.id,!1),business_trip_id:b.id}))),__notices_to_change:[],group_id:o.group_id})))},async actionAddUsersToExtend(u,a){var _;await wt();const o=this.model.__groups[a].__users_to_extend||[],t=this.model.__notices.find(n=>o.some(p=>p.id===n.user.id&&n.group_id===u.group_id));if(!t)return;const b=this.model.__groups[a];if(Array.isArray(b.__notices_to_change)||this.$set(b,"__notices_to_change",[]),b.__notices_to_change.some(n=>n.id===t.id||n.parent_id===t.id)){this.tempGroupIndex=a,this.actionClearTempModel();return}this.changingBTModel=t,this.tempGroupIndex=a,this.changingBTLoading=!0,this.changingBTDialog=!0,setTimeout(()=>{this.changingBTLoading=!1},2e3);const r=await ko(t.id);this.tempVerifications=(_=r==null?void 0:r.data)==null?void 0:_.verifications.filter(n=>!n.is_sender).map(n=>({...n,is_visited:n.arrived_at||n.left_at}))},actionDeleteNoticeToChange(u,a,o){this.model.__groups[o].__notices_to_change.splice(a,1)},actionFillNoticesToChange(){var u,a,o,t,b,s;(o=(a=(u=this.model)==null?void 0:u.__groups)==null?void 0:a[this.tempGroupIndex])!=null&&o.__notices_to_change?this.model.__groups[this.tempGroupIndex].__notices_to_change.push({...this.changingBTModel,__regions:this.tempVerifications.map(r=>({...r.region})),__start_date:(t=this.changingBTModel)==null?void 0:t.start_date,__end_date:(b=this.changingBTModel)==null?void 0:b.end_date,__sender_company:(s=this.changingBTModel)==null?void 0:s.sender_company}):console.warn("Target group or __notices_to_change array not found.")},async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:o,error:t}=await Ve(Ue,a);return o?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){const o=await lt(a);try{this.buttonLoading=!0;const{data:t}=await Ee({id:u,body:o});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){var o,t,b,s,r,_;try{this.detailLoading=!0,await this.actionGetParentDocumentDetail(a);const{data:n}=await ge(u),p=await kt(n.id);Pe().decreeModel.content=((b=(t=(o=p==null?void 0:p.data)==null?void 0:o.to_composes[0])==null?void 0:t.from_compose)==null?void 0:b.content)||"",Pe().decreeModel.id=((_=(r=(s=p==null?void 0:p.data)==null?void 0:s.to_composes[0])==null?void 0:r.from_compose)==null?void 0:_.id)||null;const k=await Promise.all(this.model.__groups.map(async C=>{const L=n.notices.filter(T=>C.__users.some(D=>{var N;return D.id===((N=T.user)==null?void 0:N.id)&&T.group_id===C.group_id}));return L.length&&(C.__notices_to_change=await Promise.all(L.map(async T=>({user:T.user,__regions:await We("regions",T.locations),__start_date:T.start_date,__end_date:T.end_date,tags:T.tags,__sender_company:T.sender_company,business_trip_id:T.id,parent_id:T.parent})))),C}));this.model.__curator=await Re([],n.curator.id,!1),this.model.__signers=await H(n.signers),this.model.__approvers=await H(n.approvers),this.model.short_description=n.short_description,this.model.content=n.content}catch(n){return console.error(n),Promise.reject(n)}finally{this.detailLoading=!1}},async actionUpdateUserTrip(){this.actionFillNoticesToChange(),this.actionClearTempModel()},actionResetBTModel(){this.model={approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]}},actionClearTempModel(){this.changingBTDialog=!1,this.changingBTLoading=!1,this.changingBTModel=null,this.tempVerifications=[],this.tempRegions=[],this.model.__groups[this.tempGroupIndex].__users_to_extend=[]},actionClearUserToExtend(){const u=this.model.__groups[this.tempGroupIndex].__users_to_extend.findIndex(a=>{var o,t;return a.id===((t=(o=this.changingBTModel)==null?void 0:o.user)==null?void 0:t.id)});this.model.__groups[this.tempGroupIndex].__users_to_extend.splice(u,1)}}}),rn={class:"decree-component"},an={class:"flex items-center justify-between mt-10"},sn={class:"flex items-center gap-x-1"},Ct={__name:"Decree",props:{formType:{type:String,default:F}},setup(u,{expose:a}){const o=u,t=pe(),b=ue(),s=Pe(),r=ut(),_=le(s.decreeRules,s.decreeModel),{t:n}=re(),p=ie(),k=ce(),C=Z(!1),L=ee(()=>({...t.params.document_sub_type===G.EXTEND_BUSINESS_TRIP_NOTICE?r.model:s.model,bookings:s.booking_model.bookings,trip_plans:s.trip_plan_model.trip_plans,decree_content:s.decreeModel.content})),T=async h=>{await s.actionStepClick(b,t,h)},D=h=>{s.decreeModel.__files=[],h.forEach(i=>{s.decreeModel.__files.push(i)})},N=async()=>{var i,d,v,f;if(!await _.value.$validate()){A(null,n("fill-required-fields"),B.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(d=(i=s.model)==null?void 0:i.__curator)==null?void 0:d.user_id,s.decreeModel.journal=se.ORDERS_PROTOCOLS,s.decreeModel.company=p.currentUser.company.id,s.decreeModel.sender=(f=(v=p==null?void 0:p.currentUser)==null?void 0:v.top_level_department)==null?void 0:f.id,s.decreeModel.document_type=ae.DECREE,s.decreeModel.document_sub_type=t.params.document_sub_type===G.EXTEND_BUSINESS_TRIP_NOTICE?G.EXTEND_BUSINESS_TRIP_DECREE:t.params.document_sub_type===G.BUSINESS_TRIP_NOTICE_FOREIGN?G.BUSINESS_TRIP_DECREE_FOREIGN:G.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,C.value=!0},x=async(h,i)=>{try{await s.actionUpdateDocument({id:i,body:{...s.decreeModel,trip_notice_id:h}}),await k.actionCountList(),A(null,n("successfully-saved"),B.SUCCESS)}catch{}},m=async()=>{var i;let h=null;o.formType===F&&t.query.notice_id?h=t.query.notice_id:o.formType===Ce&&t.params.id&&(h=t.params.id);try{await x(h,(i=s.decreeModel)==null?void 0:i.id),await b.replace({name:Ne,params:{id:h,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type},query:{parent_id:t.query.parent_id}})}catch{}};return a({stepClick:T}),(h,i)=>{const d=Le;return w(),S("div",rn,[l(Se,{modelValue:e(_).content.$model,"onUpdate:modelValue":i[0]||(i[0]=v=>e(_).content.$model=v),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"]),y("div",an,[l(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",sn,[l(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:i[1]||(i[1]=v=>T(e(Xe)))}),l(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:N})])]),l(Ie,{modelValue:C.value,"onUpdate:modelValue":i[2]||(i[2]=v=>C.value=v),"send-button-loading":e(s).buttonLoading,"onEmit:send":m,"content-classes":"p-0"},{content:c(()=>[l(e(io),{"compose-model":L.value,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},dn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},cn={class:"px-6 py-4"},fa={__name:"BusinessTripForm",props:{formType:{type:String,default:F}},setup(u){const a=u,{t:o}=re(),t=pe(),b=ue(),s=ie(),r=Pe();le(r.rules,r.model),le(r.trip_plan_rules,r.trip_plan_model),le(r.booking_model_rules,r.booking_model),le(r.decreeRules,r.decreeModel);const _=Z(null),n=ee(()=>a.formType===F?t.params.document_sub_type===G.BUSINESS_TRIP_NOTICE_V2?"create-business-trip-notice":"create-business-trip-notice-foreign":t.params.document_sub_type===G.BUSINESS_TRIP_NOTICE_V2?"update-business-trip-notice":"update-business-trip-notice-foreign"),p=ee(()=>{switch(t.query.step){case Xe:return ht;case Ke:return Ct;case ct:return Fl;case $t:return nn;default:return ht}}),k=async D=>{var x;const N=e(_);((x=t.query)==null?void 0:x.step)!==D.value&&(await N.stepClick(D.value),D.value,Ke)},C=async()=>{t.query.step||await b.replace({query:{...t.query,step:Xe}}),r.stepperItems.forEach(D=>D.active=D.value===t.query.step)},L=async()=>{var x,m,h,i,d,v,f,V,I,O,g,$;const D=ne(r.model.__approvers),N=ne(r.model.__signers);if(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.bookings=[],r.model.trip_plans=[],r.model.approvers=D,r.model.signers=N,r.model.curator=(m=(x=r.model)==null?void 0:x.__curator)==null?void 0:m.user_id,r.model.journal=se.INNER,r.model.company=(i=(h=s.currentUser)==null?void 0:h.company)==null?void 0:i.id,r.model.__groups.forEach((q,Y)=>{const R=Y+1;r.model.notices.push(...q.__users.map(K=>{var Q,M,W;return{start_date:q.__start_date,end_date:q.__end_date,end_date_2:q.__end_date,user:K.id,company:(M=(Q=s.currentUser)==null?void 0:Q.company)==null?void 0:M.id,sender_company:(W=q.__company)==null?void 0:W.id,regions:q.__regions.map(j=>j.id),countries:q.__countries.map(j=>({id:j.id})),tags:q.__tags.map(j=>({id:j.id})),route:q.__route,group_id:R,trip_type:t.params.document_sub_type===G.BUSINESS_TRIP_NOTICE_FOREIGN?"foreign":"local",...K.business_trip_id?{id:K.business_trip_id}:{}}}))}),r.model.sender=(v=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:v.id,r.model.files=r.model.__files.map(q=>({id:q.id})),r.model.document_type=t.params.document_type,r.model.document_sub_type=t.params.document_sub_type,a.formType===F&&t.query.notice_id)try{await r.actionUpdateDocument({id:t.query.notice_id,body:r.model})}catch{}else if(a.formType===F)try{const{data:q}=await r.actionCreateDocument(r.model),Y={approvers:[],signers:[],curator:(V=(f=r.model)==null?void 0:f.__curator)==null?void 0:V.user_id,journal:se.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:(O=(I=s==null?void 0:s.currentUser)==null?void 0:I.top_level_department)==null?void 0:O.id,document_type:ae.DECREE,document_sub_type:t.params.document_sub_type===G.EXTEND_BUSINESS_TRIP_NOTICE?G.EXTEND_BUSINESS_TRIP_DECREE:t.params.document_sub_type===G.BUSINESS_TRIP_NOTICE_FOREIGN?G.BUSINESS_TRIP_DECREE_FOREIGN:G.BUSINESS_TRIP_DECREE_V2,short_description:(g=r.model)==null?void 0:g.short_description,trip_notice_id:q.id,content:q.content};r.decreeModel.content=q.content;try{const R=await r.actionCreateDocument(Y);r.decreeModel.id=($=R==null?void 0:R.data)==null?void 0:$.id,await b.replace({query:{...t.query,notice_id:q.id}}),await r.actionGetDocumentDetailForUpdate(q.id)}catch{}}catch{}else if(a.formType===Ce&&t.params.id)try{await r.actionUpdateDocument({id:t.params.id,body:r.model})}catch{}},T=async()=>{try{await L(),await A(null,o("notice-saved-successfully"),B.SUCCESS)}catch{}};return Qe(async()=>{await C(),a.formType===Ce?await r.actionGetDocumentDetailForUpdate(t.params.id):t.query.notice_id&&await r.actionGetDocumentDetailForUpdate(t.query.notice_id)}),De(()=>{r.actionResetBTModel()}),(D,N)=>{const x=we,m=St;return w(),S("div",{class:Oe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(r).detailLoading}])},[e(r).detailLoading?(w(),z(x,{key:0})):(w(),z(e($e),{key:1,title:n.value},{content:c(()=>[y("div",dn,[l(m,{items:e(r).stepperItems,"onEmit:stepClick":k},null,8,["items"])]),y("div",cn,[(w(),z(Gt(p.value),{"form-type":u.formType,ref_key:"childComponent",ref:_,"onEmit:onValidateAndSend":T},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},un=xe("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:E.withMessage("Поле не должен быть пустым",U)},__curator:{required:E.withMessage("Поле не должен быть пустым",U)},__signers:{required:E.withMessage("Поле не должен быть пустым",U)},short_description:{required:E.withMessage("Поле не должен быть пустым",U)},__groups:{$each:E.forEach({__users:{required:E.withMessage("Поле не должен быть пустым",U)},__tags:{required:E.withMessage("Поле не должен быть пустым",U)},__regions:{required:E.withMessage("Поле не должен быть пустым",U)},__start_date:{required:E.withMessage("Поле не должен быть пустым",U)},__end_date:{required:E.withMessage("Поле не должен быть пустым",U)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:E.forEach({users:{required:E.withMessage("Поле не должен быть пустым",U)},text:{required:E.withMessage("Поле не должен быть пустым",U)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:o}=await Ve(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:o}=await Ee({id:u,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}}}}),pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"flex justify-between"},_n={class:"text-base text-primary-900 font-semibold mb-1"},fn=["onClick"],qn={class:"flex w-full gap-x-4"},gn={class:"flex flex-col gap-y-3"},bn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},hn={class:"flex justify-between"},yn={class:"text-base text-primary-900 font-semibold mb-1"},wn=["onClick"],vn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},kn={class:"text-base text-primary-900 font-semibold mb-2"},qa={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:F}},setup(u){const a=u,o=Z(!1),t=Z(!1),{t:b}=re(),s=pe(),r=ue(),_=ie(),n=un(),p=ce();ye();const k=le(n.rules,n.model),C=le(n.trip_plan_rules,n.trip_plan_model),L=ee(()=>a.formType===F?"create-decree":"update-decree"),T=ee(()=>{const f=new Set;return n.model.__groups.reduce((V,I)=>I.__users&&Array.isArray(I.__users)?V.concat(I.__users):V,[]).filter(V=>f.has(V.id)?!1:(f.add(V.id),!0))}),D=async()=>{var O,g,$,q,Y,R;if(o.value=!0,!await k.value.$validate()){A(null,b("fill-required-fields"),B.WARNING);return}const V=ne(n.model.__approvers),I=ne(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=V,n.model.signers=I,n.model.curator=(g=(O=n.model)==null?void 0:O.__curator)==null?void 0:g.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=(q=($=_.currentUser)==null?void 0:$.company)==null?void 0:q.id,n.model.__groups.forEach((K,Q)=>{const M=Q+1;n.model.notices.push(...K.__users.map(W=>{var j,Me;return{start_date:K.__start_date,end_date:K.__end_date,user:W.id,company:(Me=(j=_.currentUser)==null?void 0:j.company)==null?void 0:Me.id,regions:K.__regions.map(ve=>ve.id),tags:K.__tags.map(ve=>({id:ve.id})),group_id:M}}))}),n.model.sender=(R=(Y=_==null?void 0:_.currentUser)==null?void 0:Y.top_level_department)==null?void 0:R.id,n.model.files=n.model.__files.map(K=>({id:K.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(K=>({users:K.users.map(Q=>({id:Q.id})),text:K.text})),t.value=!0},N=()=>{},x=()=>{n.actionAddGroupBlock()},m=()=>{n.actionAddWorkPlanRow(),o.value=!1},h=f=>{n.model.__files=[],f.forEach(V=>{n.model.__files.push(V)})},i=async()=>{const f=await n.actionCreateDocument(n.model);await p.actionCountList(),f?(t.value=!1,A(null,b("document-sent"),B.SUCCESS),await r.replace({name:Ae,query:{document_type:s.params.document_type}})):A(null,b("error-occurred"),B.ERROR)},d=async()=>{await n.actionUpdateDocument({id:s.params.id,body:n.model}),await p.actionCountList(),A(null,b("changed"),B.SUCCESS),await r.replace({name:Ne,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},v=()=>{a.formType===F?i():d()};return(f,V)=>{const I=we,O=fe,g=Be,$=me,q=rt,Y=Ge,R=_e,K=Le,Q=Vt;return e(n).detailLoading?(w(),z(I,{key:0})):(w(),S(J,{key:1},[l(e($e),{title:L.value},{content:c(()=>[l(je,{"onEmit:preview":D,"onEmit:clearForm":N},{default:c(()=>[l(R,null,{default:c(()=>[l(O,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":V[0]||(V[0]=M=>e(k).__curator.$model=M),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(O,{"col-class":"w-1/2"},{default:c(()=>[l(g,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":V[1]||(V[1]=M=>e(k).short_description.$model=M),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(O,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),S(J,null,de(e(n).model.__groups,(M,W)=>(w(),S("div",pn,[y("div",mn,[y("span",_n,P(e(b)("group"))+"-"+P(W+1),1),W!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:j=>e(n).actionDeleteGroupBlock(W)},[l($,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,fn)):te("",!0)]),l(R,null,{default:c(()=>[l(O,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:M.__users,"onUpdate:modelValue":j=>M.__users=j,error:e(k).__groups.$each.$response.$data[W].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":o.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(O,{"col-class":"w-1/2"},{default:c(()=>[l(q,{modelValue:M.__regions,"onUpdate:modelValue":j=>M.__regions=j,error:e(k).__groups.$each.$response.$data[W].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":o.value},{chip:c(({value:j})=>[oe(P(j.name),1)]),option:c(({value:j})=>[l(e(qe),{title:j.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(O,{"col-class":"w-1/2"},{default:c(()=>[l(q,{modelValue:M.__tags,"onUpdate:modelValue":j=>M.__tags=j,error:e(k).__groups.$each.$response.$data[W].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":o.value},{chip:c(({value:j})=>[oe(P(j.name),1)]),option:c(({value:j})=>[l(e(qe),{title:j.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),l(O,{"col-class":"w-1/2"},{default:c(()=>[y("div",qn,[l(Y,{modelValue:M.__start_date,"onUpdate:modelValue":[j=>M.__start_date=j,j=>M.__start_date=e(be)(j)],error:e(k).__groups.$each.$response.$data[W].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":o.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(Y,{modelValue:M.__end_date,"onUpdate:modelValue":[j=>M.__end_date=j,j=>M.__end_date=e(be)(j)],error:e(k).__groups.$each.$response.$data[W].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":o.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(K,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:x},null,8,["icon-left"])]),_:1})]),_:1}),y("div",gn,[(w(!0),S(J,null,de(e(n).trip_plan_model.trip_plans,(M,W)=>(w(),S("div",bn,[y("div",hn,[y("span",yn,P(e(b)("plan"))+"-"+P(W+1),1),W!==0?(w(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:j=>e(n).actionDeleteWorkPlanRow(W)},[l($,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,wn)):te("",!0)]),l(R,null,{default:c(()=>[l(O,{"col-class":"w-1/2"},{default:c(()=>[l(Q,{modelValue:M.text,"onUpdate:modelValue":j=>M.text=j,error:e(C).trip_plans.$each.$response.$data[W].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":o.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(O,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:M.users,"onUpdate:modelValue":j=>M.users=j,options:T.value,error:e(C).trip_plans.$each.$response.$data[W].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":o.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(K,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:m},null,8,["icon-left"]),l(R,null,{default:c(()=>[l(O,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":V[2]||(V[2]=M=>e(n).model.__approvers=M),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(O,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":V[3]||(V[3]=M=>e(k).__signers.$model=M),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(O,{"col-class":"w-full"},{default:c(()=>[y("div",vn,[y("div",kn,P(e(b)("decree")),1),l(Se,{modelValue:e(k).content.$model,"onUpdate:modelValue":V[4]||(V[4]=M=>e(k).content.$model=M),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":h},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ie,{modelValue:t.value,"onUpdate:modelValue":V[5]||(V[5]=M=>t.value=M),"send-button-loading":e(n).buttonLoading,"onEmit:send":v},{content:c(()=>[l(e(vt),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},xn={class:"flex gap-x-[6px] items-center px-2 py-1 bg-greyscale-50 rounded-[90px] border-b border-greyscale-200"},$n={key:0,class:"w-6 h-6 rounded-full flex items-center justify-center text-xs text-white bg-primary-500"},Vn={class:"text-greyscale-900 text-sm font-medium"},ot={__name:"BaseChip",props:{item:{type:Object,default:()=>({})},label:{type:String,default:"Example"},type:{type:String,default:"user",validator(u){return["user","location","other"].includes(u)}},clearable:{type:Boolean,default:!1}},emits:["emit:clear"],setup(u,{emit:a}){const o=t=>{a("emit:clear",t)};return(t,b)=>(w(),S("div",xn,[u.type==="user"?(w(),S("div",$n,P(u.label[0]),1)):u.type==="location"?(w(),z(me,{key:1,icon:e(Wt),class:"text-greyscale-400"},null,8,["icon"])):te("",!0),y("div",Vn,P(u.label),1),u.clearable?(w(),S("div",{key:2,class:"flex justify-center items-center w-5 h-5 rounded-full bg-critic-500 cursor-pointer",onClick:b[0]||(b[0]=s=>o(u.item))},[l(me,{icon:e(Yt),class:"text-white"},null,8,["icon"])])):te("",!0)]))}},En={key:0,class:"flex flex-col gap-y-5"},Un={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Sn={class:"text-sm font-medium text-greyscale-500"},Cn={class:"text-green-900"},Tn=y("br",null,null,-1),Rn={class:"flex flex-col gap-y-2"},Ln={class:"text-sm font-medium text-greyscale-500"},Dn=y("span",{class:"text-red-500"},"*",-1),Nn={class:"flex flex-wrap gap-3"},In={class:"flex flex-col gap-y-2"},Mn={key:1,class:"flex flex-col gap-y-5"},On={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Pn={class:"text-sm font-medium text-greyscale-500"},Bn={class:"text-green-900"},An={__name:"ChangingBusinessTripModal",setup(u){const a=ut(),{t:o}=re(),t=ee(()=>{var n;return["reporting","closed"].includes((n=a==null?void 0:a.changingBTModel)==null?void 0:n.trip_status)}),b=()=>{var p;if(!(((p=a.tempVerifications)==null?void 0:p.length)>0)){A(null,"Kamida bitta hudud qo'shing!",B.WARNING);return}a.actionUpdateUserTrip()},s=()=>{a.actionClearTempModel()},r=(n,p)=>{a.tempVerifications.splice(p,1)},_=n=>{n.value.forEach(p=>{a.tempVerifications.some(C=>C.region.id===p.id)||a.tempVerifications.push({region:p,is_visited:!1}),a.tempRegions=[]})};return(n,p)=>{const k=we,C=rt,L=Ge,T=Le,D=Et;return w(),z(D,{modelValue:e(a).changingBTDialog,"onUpdate:modelValue":p[4]||(p[4]=N=>e(a).changingBTDialog=N),label:"confirm","max-width":"max-w-[631px]",closable:!1},Ht({content:c(()=>{var N,x,m,h;return[e(a).changingBTLoading?(w(),z(k,{key:0,class:"my-16"})):(w(),S(J,{key:1},[t.value?(w(),S("div",Mn,[y("div",On,[l(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),y("div",Pn,[y("span",Bn,P((h=(m=e(a).changingBTModel)==null?void 0:m.user)==null?void 0:h.full_name),1),oe("ga tegishli bo'lgan xizmat safari yakunlangan! ")])])])):(w(),S("div",En,[y("div",Un,[l(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),y("div",Sn,[oe("Siz rostdan ham "),y("span",Cn,P((x=(N=e(a).changingBTModel)==null?void 0:N.user)==null?void 0:x.full_name),1),oe("ga tegishli bo'lgan xizmat safarini o'zgartirmoqchimisiz? "),Tn,oe(" Bunda xizmat safari bilan vaqtinchalik amaliyot bajarish to'xtatiladi! ")])]),y("div",Rn,[y("span",Ln,[oe(P(e(o)("trip-place"))+" ",1),Dn]),y("div",Nn,[(w(!0),S(J,null,de(e(a).tempVerifications,(i,d)=>{var v;return w(),z(ot,{key:i.id,label:(v=i==null?void 0:i.region)==null?void 0:v.name_uz,clearable:!i.is_visited,type:"location",class:"w-fit","onEmit:clear":f=>r(i,d)},null,8,["label","clearable","onEmit:clear"])}),128))]),l(C,{modelValue:e(a).tempRegions,"onUpdate:modelValue":p[0]||(p[0]=i=>e(a).tempRegions=i),"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",type:"department",placeholder:"add-trip-place",required:"","onEmit:change":p[1]||(p[1]=i=>_(i))},{chip:c(({value:i})=>[oe(P(i.name),1)]),option:c(({value:i})=>[l(e(qe),{title:i.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue"])]),y("div",In,[l(L,{modelValue:e(a).changingBTModel.end_date,"onUpdate:modelValue":[p[2]||(p[2]=i=>e(a).changingBTModel.end_date=i),p[3]||(p[3]=i=>e(a).changingBTModel.end_date=e(be)(i))],"min-date":new Date(e(a).changingBTModel.start_date),required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","min-date"])])]))],64))]}),_:2},[e(a).changingBTLoading?void 0:{name:"footer",fn:c(()=>[l(T,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:s}),t.value?te("",!0):(w(),z(T,{key:0,loading:e(a).userTripUpdateButtonLoading,label:"update",rounded:"",shadow:"",type:"button",onClick:b},null,8,["loading"]))]),key:"0"}]),1032,["modelValue"])}}},jn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},Fn={class:"px-6 py-4"},zn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Gn={class:"flex justify-between"},Wn={class:"text-base text-primary-900 font-semibold mb-1"},Yn={class:"text-sm text-greyscale-500 font-medium"},Hn={class:"text-sm text-greyscale-500 font-medium"},Xn={class:"flex flex-wrap gap-3 mt-1"},Kn={class:"flex justify-between items-center"},Qn={class:"text-sm text-greyscale-500 font-medium"},Jn={class:"text-base text-primary-900 font-semibold mb-2"},Zn={class:"flex items-center justify-between"},ga={__name:"ExtendBusinessTripForm",props:{formType:{type:String,default:F}},setup(u){const a=u,o=ut(),t=Pe(),b=ie(),s=le(o.rules,o.model),r=pe(),_=ue(),{t:n}=re(),p=Z(!1);Z(!1);const k=ee(()=>{const x=a.formType===F;return"trip-notice-for-change"}),C=async()=>{var i,d,v,f,V,I,O,g,$,q,Y,R,K;const x=ne(o.model.__approvers),m=ne(o.model.__signers);o.model.approvers=[],o.model.signers=[],o.model.notices=[],o.model.approvers=x,o.model.signers=m,o.model.curator=(d=(i=o.model)==null?void 0:i.__curator)==null?void 0:d.user_id,o.model.journal=se.INNER,o.model.company=(f=(v=b.currentUser)==null?void 0:v.company)==null?void 0:f.id;let h=1;if(o.model.__groups.forEach(Q=>{Array.isArray(Q.__notices_to_change)&&o.model.notices.push(...Q.__notices_to_change.map(M=>{var W,j,Me;return{...a.formType===Ce?{id:M.id}:{},start_date:M.__start_date,end_date:M.__end_date,user:M.user.id,company:(j=(W=b.currentUser)==null?void 0:W.company)==null?void 0:j.id,sender_company:(Me=M.sender_company)==null?void 0:Me.id,regions:M.__regions.map(ve=>ve.id),tags:M.tags.map(ve=>({id:ve.id})),route:M.route,group_id:h++,trip_type:"changed_local",parent:M.id,...M.business_trip_id?{id:M.business_trip_id}:{}}}))}),o.model.sender=(I=(V=b==null?void 0:b.currentUser)==null?void 0:V.top_level_department)==null?void 0:I.id,o.model.files=o.model.__files.map(Q=>({id:Q.id})),o.model.document_type=r.params.document_type,o.model.document_sub_type=r.params.document_sub_type,o.model.trip_notice_id=((O=r.query)==null?void 0:O.parent_id)||null,a.formType===F&&r.query.notice_id)try{await o.actionUpdateDocument({id:r.query.notice_id,body:o.model}),await A(null,n("notice-saved-successfully"),B.SUCCESS)}catch{}else if(a.formType===F)try{const{data:Q}=await o.actionCreateDocument(o.model),M={approvers:[],signers:[],curator:($=(g=o.model)==null?void 0:g.__curator)==null?void 0:$.user_id,journal:se.ORDERS_PROTOCOLS,company:b.currentUser.company.id,sender:(Y=(q=b==null?void 0:b.currentUser)==null?void 0:q.top_level_department)==null?void 0:Y.id,document_type:ae.DECREE,document_sub_type:G.EXTEND_BUSINESS_TRIP_DECREE,short_description:(R=o.model)==null?void 0:R.short_description,trip_notice_id:Q.id,content:Q.content};t.decreeModel.content=Q.content;try{const W=await o.actionCreateDocument(M);t.decreeModel.id=(K=W==null?void 0:W.data)==null?void 0:K.id,await _.replace({query:{...r.query,notice_id:Q.id,parent_id:r.query.parent_id}}),await A(null,n("notice-saved-successfully"),B.SUCCESS),await o.actionGetDocumentDetailForUpdate(Q.id,r.query.parent_id)}catch(W){console.error(W)}}catch(Q){console.error(Q)}else if(a.formType===Ce&&r.params.id)try{await o.actionUpdateDocument({id:r.params.id,body:o.model}),await A(null,n("notice-saved-successfully"),B.SUCCESS)}catch{}},L=x=>{o.model.__files=[],x.forEach(m=>{o.model.__files.push(m)})},T=async x=>{var m;try{((m=r.query)==null?void 0:m.step)!==x.value&&(x.value===Ke&&(await D(),await C()),await t.actionStepClick(_,r,x.value))}catch(h){console.error(h)}},D=async()=>{const x=await s.value.$validate();if(p.value=!0,!x)return A(null,n("fill-required-fields"),B.WARNING),Promise.reject();if(!o.model.__groups.some(h=>Array.isArray(h.__notices_to_change)&&h.__notices_to_change.length>0))return A(null,"Kamida bitta xodim o'zgartirish uchun tanlanishi kerak!",B.WARNING),Promise.reject()},N=async()=>{r.query.step||await _.replace({query:{...r.query,step:Xe}}),t.stepperItems.forEach(x=>x.active=x.value===r.query.step)};return et(async()=>{await N()}),Qe(async()=>{var x,m,h,i,d,v;a.formType===F&&((x=r.query)!=null&&x.notice_id)&&((m=r.query)!=null&&m.parent_id)?await o.actionGetDocumentDetailForUpdate((h=r.query)==null?void 0:h.notice_id,(i=r.query)==null?void 0:i.parent_id):a.formType===F&&((d=r.query)!=null&&d.parent_id)?await o.actionGetParentDocumentDetail(r.query.parent_id):a.formType===Ce&&await o.actionGetDocumentDetailForUpdate(r.params.id,(v=r.query)==null?void 0:v.parent_id)}),De(()=>{o.actionResetBTModel()}),(x,m)=>{const h=we,i=St,d=fe,v=Be,f=_e,V=Le;return w(),S("div",{class:Oe(["extend-business-trip-form",{"h-[calc(100vh-200px)]":e(o).detailLoading}])},[e(o).detailLoading?(w(),z(h,{key:0})):(w(),z(e($e),{key:1,title:k.value},{content:c(()=>{var I,O;return[y("div",jn,[l(i,{items:e(t).stepperItems,"onEmit:stepClick":T},null,8,["items"])]),y("div",Fn,[((I=e(r).query)==null?void 0:I.step)==="trip_info"?(w(),S(J,{key:0},[l(f,null,{default:c(()=>[l(d,{"col-class":"w-1/2"},{default:c(()=>[l(ke,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=g=>e(s).__curator.$model=g),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(v,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=g=>e(s).short_description.$model=g),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(w(!0),S(J,null,de(e(o).model.__groups,(g,$)=>(w(),S("div",zn,[y("div",Gn,[y("span",Wn,P(e(n)("group"))+"-"+P($+1),1)]),l(f,null,{default:c(()=>[l(d,{"col-class":"w-full"},{default:c(()=>[l(X,{modelValue:g.__users_to_extend,"onUpdate:modelValue":[q=>g.__users_to_extend=q,q=>e(o).actionAddUsersToExtend(g,$)],label:"select-employees-in-business-trip",options:g.__users,searchable:!1,placeholder:"select-employees","show-nested-error":p.value,disabled:u.formType===e(Ce),allSelectable:""},null,8,["modelValue","onUpdate:modelValue","options","show-nested-error","disabled"])]),_:2},1024),l(d,{"col-class":"w-full"},{default:c(()=>[(w(!0),S(J,null,de(g.__notices_to_change,(q,Y)=>(w(),z(f,null,{default:c(()=>[l(d,{"col-class":"w-1/3"},{default:c(()=>{var R;return[y("span",Yn,P(e(n)("employees-in-business-trip")),1),l(ot,{label:(R=q.user)==null?void 0:R.full_name,class:"w-fit mt-1"},null,8,["label"])]}),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[y("span",Hn,P(e(n)("trip-place")),1),y("div",Xn,[(w(!0),S(J,null,de(q.__regions,R=>(w(),z(ot,{key:q.id,label:R.name_uz,type:"location",class:"w-fit"},null,8,["label"]))),128))])]),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[y("div",Kn,[y("div",null,[y("span",Qn,P(e(n)("end-date")),1),l(ot,{label:q.__end_date,type:"other",class:"w-fit mt-1"},null,8,["label"])])])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]))),256))]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=g=>e(o).model.__approvers=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(X,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=g=>e(s).__signers.$model=g),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:c(()=>[y("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(o).model.content?"border-critic-500":"border-greyscale-200"])},[y("div",Jn,P(e(n)("notice")),1),l(Se,{modelValue:e(s).content.$model,"onUpdate:modelValue":m[4]||(m[4]=g=>e(s).content.$model=g),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),y("div",Zn,[l(V,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(V,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:m[5]||(m[5]=g=>T({value:e(Ke)}))})])],64)):((O=e(r).query)==null?void 0:O.step)==="decree"?(w(),z(e(Ct),{key:1,"form-type":u.formType},null,8,["form-type"])):te("",!0)])]}),_:1},8,["title"])),l(An,{modelValue:e(o).changingBTDialog,"onUpdate:modelValue":m[6]||(m[6]=I=>e(o).changingBTDialog=I)},null,8,["modelValue"])],2)}}};export{ia as _,ua as a,pa as b,ma as c,fa as d,qa as e,ga as f,da as g,ca as h,_a as i};
