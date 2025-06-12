import{_ as _e}from"./BaseRow.d98b6585.133.js";import{_ as Ie}from"./BaseInput.712a9f4f.133.js";import{_ as fe}from"./BaseCol.e52ada20.133.js";import{v as J,bb as nt,a1 as et,o as v,c as S,i as l,z as c,h as e,b8 as Ze,d as te,du as je,a as y,t as O,F as K,e as de,a3 as re,g as ae,f as W,B as Tt,dz as Lt,bj as Rt,n as Pe,r as yt,G as Re,as as ke,cM as ee,cN as Z,ck as se,u as ne,b as ue,ao as pe,be as De,a5 as B,ac as we,a8 as Dt,cY as Qe,dA as Mt,_ as me,dB as Nt,dC as Pt,dD as Ot,dE as It,dF as Bt,$ as At,dG as jt,dH as zt,aX as wt,bt as Ye,c0 as He,dI as Ft,ds as at,E as Gt,cH as Wt,cR as Yt,aE as Ht}from"./index.66e17547.6427.js";import{c as $,r as E,u as oe}from"./index.90d5a2fa.133.js";import{_ as Xt,a as Kt}from"./BranchMultiSelect.33e995c7.133.js";import{j as Qt,k as Jt,l as Zt,_ as xe,a as eo,h as to,g as oo,b as lo,c as no,d as ro,e as vt,i as ao,m as so,f as io}from"./BasePOA.c1ae3a1a.133.js";import"./BaseTabMenu.9a7ab6af.133.js";import"./dialog.esm.410edf64.133.js";import"./tabpanel.esm.218cb466.133.js";import"./FileSaver.min.90a7b1f9.133.js";import{X as _t,s as Te,V as Y,Y as co,Z as ze,_ as le,$ as Le,a0 as ft,a1 as st,a2 as We,O as lt}from"./index.f19306b0.133.js";import"./BaseTabView.628b0261.133.js";import"./FileTabs.13b44a1c.133.js";import{_ as H}from"./UserMultiSelect.eff5f79b.133.js";import{c as uo,u as ie,w as $e,d as A}from"./axios.config.efebc550.133.js";import{u as ye}from"./common.2deac1e9.133.js";import{u as ce}from"./count.store.32b91165.133.js";import{u as dt,a as Ve,b as qe,c as Ue,d as po,f as kt}from"./index.store.26bba6a5.133.js";import{d as qt,e as Be,c as Me,f as be,B as Je,g as Xe,h as Ke,i as mo,j as xt,M as it,O as _o,T as fo,k as ct,l as $t,C as qo,P as go,m as bo}from"./index.3493ff30.133.js";import{F as j,a as Se}from"./constants.50c90617.133.js";import{_ as tt}from"./BaseDropdown.f3e82734.133.js";import{_ as Fe}from"./BaseCalendar.e3d10765.133.js";import{_ as rt}from"./BaseMultiSelect.7a624ead.133.js";import{f as ho,a as ge}from"./formatDate.7860ee63.133.js";import{Q as gt}from"./qrcode.vue.esm.6d4504b5.133.js";import"./divider.esm.5e9843cb.133.js";import"./dayjs.min.51c275a1.133.js";/* empty css                                                                                        */import{c as yo}from"./Dropdown.30f32914.133.js";import"./menu.esm.c681676a.133.js";/* empty css                                                     */import"./avatar.esm.fda5c3fe.133.js";/* empty css                                                     */import"./businessTrip.store.4829cf26.133.js";/* empty css                                                           */import"./accordiontab.esm.e9fbe489.133.js";import"./common.store.2d802e79.133.js";import{_ as he}from"./WithRadio.0e94fe9d.133.js";import"./radiobutton.esm.de7e952c.133.js";import"./checkbox.esm.91a311cf.133.js";import"./index.es6.f9050ba3.133.js";import{_ as Vt}from"./ShortDescription.2085f638.133.js";import{_ as bt}from"./BaseBrickRadio.d48b3b81.133.js";import{_ as wo}from"./BaseLabel.af00e8a7.133.js";import{K as vo}from"./main.f80652aa.133.js";import{a as ko,e as xo}from"./index.c1db7995.133.js";import{_ as $o}from"./WithSelectable.5650f0b0.133.js";import{_ as Vo}from"./BaseBrickTab.1de0c67a.133.js";import{_ as Uo}from"./BaseFileUpload.80c4c446.133.js";import{_ as Eo}from"./BaseFroalaEditor.8187555e.133.js";import"./BaseCalendar.vue_vue_type_style_index_0_lang.f6dab0e9.133.js";import"./multiselect.esm.66f23758.133.js";/* empty css                                                            */import"./dropdown.esm.57f0e80b.133.js";/* empty css                                                         */import"./textarea.esm.281b3f35.133.js";import"./overlaypanel.esm.f36c5ff0.133.js";/* empty css                                                             */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang.5e77a540.133.js";/* empty css                                                                           */import"./review.store.30c753e6.133.js";/* empty css                                                      */import{_ as Ut}from"./BaseDialog.a4c57530.133.js";const Co={class:"user-select"},ve={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(u,{emit:a}){const t=u,o=J([]),f=nt(t,"modelValue"),s=async n=>{let{data:_}=await uo.get(`${t.apiUrl}/`,n);_.hasOwnProperty("results")?o.value=_.results:o.value=_};return et(async()=>{await s(t.apiParams)}),(n,_)=>(v(),S("div",Co,[l(tt,{modelValue:e(f),"onUpdate:modelValue":_[0]||(_[0]=r=>Ze(f)?f.value=r:null),options:o.value,"onUpdate:options":_[1]||(_[1]=r=>o.value=r),error:t.error,"api-url":t.apiUrl,"api-params":t.apiParams,"option-label":"full_name",label:t.label,placeholder:t.placeholder,required:t.required,searchable:"","onEmit:change":_[2]||(_[2]=r=>a("emit:change",r))},{option:c(({option:r})=>[l(e($o),{items:[r]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},So={class:"business-trip-decree-template-view letter-template"},To={class:"flex flex-col text-sm font-medium mt-4"},Lo=y("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),Ro=["innerHTML"],Do=["innerHTML"],Mo={class:"employees-table text-sm mt-4"},No={class:"w-full"},Po=y("tr",{class:"text-center"},[y("td",{class:"border-2 p-1"},"№"),y("td",{class:"border-2 p-1"},"F.I.SH"),y("td",{class:"border-2 p-1"},"Departament va lavozim"),y("td",{class:"border-2 p-1"},"Yo'nalish"),y("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Oo={class:"text-center"},Io={class:"border-2 p-1"},Bo={class:"border-2 p-1"},Ao={class:"border-2 p-1"},jo=y("br",null,null,-1),zo={class:"border-2 p-1"},Fo={class:"flex flex-col gap-y-1"},Go={key:0},Wo={class:"border-2 p-1 w-[100px]"},Yo=y("br",null,null,-1),Ho={class:"indent-8 mt-2 text-sm text-justify"},Xo=y("div",null,"xizmat safariga yuborilsin.",-1),Ko=y("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Qo=y("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),Jo=y("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Zo={key:0},el=y("span",{class:"font-semibold"},"Asos: ",-1),tl=y("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),ol=y("div",null," O‘zR MKning 287-moddasi; ",-1),ll=y("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),nl={class:"mt-6 pb-2 px-4"},rl={class:"text-sm font-semibold block"},al={class:"text-sm font-semibold block"},sl={class:"text-sm font-semibold block"},il={class:"text-sm font-semibold block"},dl={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(u){const a=u,t=dt(),o=te(()=>{var _;return a.preview?ie().currentUser:(_=a.composeModel)==null?void 0:_.author}),f=te(()=>{var _,r,p;return a.preview?(_=a.composeModel)==null?void 0:_.__employees.map(k=>({empFullName:k.full_name,empDepName:k.top_level_department.name,empPositionName:k.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(p=(r=a.composeModel)==null?void 0:r.notices)==null?void 0:p.map(k=>({empFullName:k.user.full_name,empDepName:k.user.top_level_department.name,empPositionName:k.user.position.name,destinations:k.destinations,startDate:k.start_date,endDate:k.end_date}))}),s=te(()=>{var r,p,k;if(a.preview)return[(r=a.composeModel)==null?void 0:r.__curator];const _=(p=a.composeModel)==null?void 0:p.signers.find(T=>T.type===je.BASIC_SIGNER);return _?[_]:[(k=a.composeModel)==null?void 0:k.curator].filter(Boolean)}),n=te(()=>{var _,r;return a.preview?(_=a.composeModel)==null?void 0:_.__signers:(r=a.composeModel)==null?void 0:r.signers.filter(p=>p.type===je.SIGNER)});return(_,r)=>{var T,D,R,M,L,b,m,x;const p=fe,k=_e;return v(),S("div",So,[l(e(Qt)),l(e(Jt),{"dep-name":(D=(T=o.value)==null?void 0:T.top_level_department)==null?void 0:D.name},null,8,["dep-name"]),y("div",To,[y("span",null," № "+O((R=a.composeModel)==null?void 0:R.register_number),1),y("span",null,O(((M=a.composeModel)==null?void 0:M.register_date)&&e(ho)((L=a.composeModel)==null?void 0:L.register_date)),1)]),Lo,e(t).historyShow?(v(),S("div",{key:0,class:"text-justify",innerHTML:e(t).historyContent},null,8,Ro)):(v(),S("div",{key:1,class:"text-justify",innerHTML:(b=a.composeModel)==null?void 0:b.content},null,8,Do)),y("div",Mo,[y("table",No,[Po,f.value&&f.value.length?(v(!0),S(K,{key:0},de(f.value,(i,d)=>(v(),S("tr",Oo,[y("td",Io,O(d+1),1),y("td",Bo,O(i.empFullName),1),y("td",Ao,[re(O(i.empDepName)+" ",1),jo,re(" "+O(i.empPositionName),1)]),y("td",zo,[y("div",Fo,[(v(!0),S(K,null,de(i.destinations,(h,q)=>(v(),S("span",null,[re(O(h.name)+" ",1),q!==i.destinations.length-1?(v(),S("span",Go,",")):ae("",!0)]))),256))])]),y("td",Wo,[re(O(i.startDate)+" ",1),Yo,re(" "+O(i.endDate),1)])]))),256)):ae("",!0)])]),y("div",Ho,[Xo,Ko,Qo,Jo,(m=u.composeModel)!=null&&m.trip_notice_register_number?(v(),S("div",Zo,[el,re(O((x=u.composeModel)==null?void 0:x.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):ae("",!0),tl,ol,ll]),y("div",nl,[(v(!0),S(K,null,de(s.value,i=>(v(),W(k,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",rl,O(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(v(),W(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",al,O(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(v(!0),S(K,null,de(n.value,i=>(v(),W(k,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[l(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",sl,O(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(v(),W(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),l(p,{"col-class":"w-1/3"},{default:c(()=>[y("span",il,O(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),l(e(Zt),{"compose-model":a.composeModel,author:o.value},null,8,["compose-model","author"])])}}};var cl=`
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
`,ul={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Tt.extend({name:"editor",css:cl,classes:ul});(function(){try{return window.Quill}catch{return null}})();const Ee={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(u){return["froala","tiny"].includes(u)}}},emits:["update:modelValue","emit:fileUpload"],setup(u,{emit:a}){const t=u,o=nt(t,"modelValue"),f=J([{title:"text",slot:"editor",icon:Lt},{title:"file",slot:"file",icon:Rt}]);return(s,n)=>(v(),W(Vo,{"tab-panel-list":f.value,"panel-container-class":"px-0"},{editor:c(()=>[u.editor==="froala"?(v(),W(Eo,{key:0,modelValue:e(o),"onUpdate:modelValue":n[0]||(n[0]=_=>Ze(o)?o.value=_:null)},null,8,["modelValue"])):(v(),W(yo,{key:1,modelValue:e(o),"onUpdate:modelValue":n[1]||(n[1]=_=>Ze(o)?o.value=_:null)},null,8,["modelValue"]))]),file:c(()=>[y("div",{class:Pe(t.fileUploadContainerClasses)},[l(Uo,{files:t.files,"onEmit:fileUpload":n[2]||(n[2]=_=>a("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},pl={class:"flex flex-col justify-between h-full"},ml={class:"px-6 py-4 overflow-y-auto"},_l={class:"actions p-6"},Ae={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(u,{emit:a}){return(t,o)=>{const f=Re;return v(),S("div",pl,[y("div",ml,[yt(t.$slots,"default")]),y("div",_l,[l(f,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:o[0]||(o[0]=s=>a("emit:clearForm"))}),l(f,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:o[1]||(o[1]=s=>a("emit:preview"))})])])}}},fl=ke("sd-stores-inner",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,document_type:ee.INNER,document_sub_type:Z.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:se.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__departments:{required:$.withMessage("Поле не должен быть пустым",E)},__approvers:{},__signers:{required:$.withMessage("Поле не должен быть пустым",E)}}}},actions:{async actionCreateDocument(u){let a={...u,type:qt,sub_type:qt};this.buttonLoading=!0;const{response:t,error:o}=await $e(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):Promise.reject(o)},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers),this.model.__departments=await co(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),ql={class:"font-semibold text-xl"},Ne={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(u,{emit:a}){const o=nt(u,"modelValue"),{t:f}=ne();return(s,n)=>{const _=Re,r=Ut;return v(),W(r,{modelValue:e(o),"onUpdate:modelValue":n[1]||(n[1]=p=>Ze(o)?o.value=p:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[y("span",ql,O(e(f)("preview")),1)]),content:c(()=>[yt(s.$slots,"content")]),footer:c(()=>[l(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(_,{label:u.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:u.sendButtonLoading,onClick:n[0]||(n[0]=p=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},ca={__name:"InnerForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ie(),o=fl();ye();const f=ce(),s=J(!1);J(null);const{t:n}=ne(),_=ue(),r=pe(),p=oe(o.rules,o.model),k=async()=>{await p.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.departments=[],o.model.departments=o.model.__departments.map(m=>m.id),o.model.files=[],o.model.files=o.model.__files.map(m=>({id:m.id})),o.model.journal=se.INNER,o.model.sender=t.currentUser.top_level_department.id,o.model.approvers=le(o.model.__approvers),o.model.signers=le(o.model.__signers),o.model.document_type=r.params.document_type,o.model.document_sub_type=r.params.document_sub_type,o.model.receiver&&delete o.model.receiver)},T=()=>{a.formType===j?D():R()},D=async()=>{const b=await o.actionCreateDocument(o.model);await f.actionCountList(),b?(s.value=!1,A(null,n("document-sent"),B.SUCCESS),await _.replace({name:Be,query:{document_type:ee.INNER}})):A(null,n("error-occurred"),B.ERROR)},R=async()=>{await o.actionUpdateDocument({id:r.params.id,body:o.model}),await f.actionCountList(),A(null,n("document-sent"),B.SUCCESS),await _.replace({name:Me,params:{id:r.params.id,document_type:ee.INNER,document_sub_type:Z.SERVICE_LETTER}})},M=()=>{console.log("Clear Form")},L=b=>{o.model.__files=[],b.forEach(m=>{o.model.__files.push(m)})};return et(async()=>{r.params.id&&await o.actionGetDocumentDetailForUpdate(r.params.id)}),De(()=>{ze(o.model)}),(b,m)=>{const x=we,i=fe,d=Ie,h=_e;return e(o).detailLoading?(v(),W(x,{key:0})):(v(),S(K,{key:1},[l(e(xe),{title:a.formType===e(j)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[l(Ae,{"onEmit:preview":k,"onEmit:clearForm":M},{default:c(()=>[l(h,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(Xt,{modelValue:e(p).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=q=>e(p).__departments.$model=q),error:e(p).__departments},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=q=>e(p).short_description.$model=q),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=q=>e(p).__approvers.$model=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=q=>e(p).__signers.$model=q),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[4]||(m[4]=q=>e(p).content.$model=q),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=q=>s.value=q),"send-button-loading":e(o).buttonLoading,"onEmit:send":T},{content:c(()=>{var q,U;return[l(eo,{"compose-model":{...e(o).model,signers:e(o).model.__signers,approvers:e(o).model.__approvers,author:e(o).model.__signers[0],sender:{name:(U=(q=e(t).currentUser)==null?void 0:q.top_level_department)==null?void 0:U.name},receiver:{departments:e(o).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=ke("sd-store-application",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__approvers:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{}}}},actions:{async actionCreateDocument(u){let a={...u};this.buttonLoading=!0;const{response:t,error:o}=await $e(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers.filter(t=>t.type===je.SIGNER)),this.model.__curator=await Le([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Et=ke("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:ie().currentUser.company.id,curator:null,document_type:ee.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:se.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:$.withMessage("Поле не должен быть пустым",E)},register_date:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__negotiators:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__signers=await Y(a.signers.filter(t=>t.type!==je.NEGOTIATOR)),this.model.__negotiators=await Y(a.signers.filter(t=>t.type===je.NEGOTIATOR)),this.model.__approvers=await Y(a.approvers),this.model.__curator=await Le([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),ua={__name:"ApplicationForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ie(),o=gl();ye();const f=ce();Et();const s=J(!1);J(null);const{t:n}=ne(),_=ue(),r=pe(),p=oe(o.rules,o.model),k=async()=>{var m,x,i,d,h;await p.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.signers=[{user:(m=t==null?void 0:t.currentUser)==null?void 0:m.id}],o.model.sender=(i=(x=t==null?void 0:t.currentUser)==null?void 0:x.top_level_department)==null?void 0:i.id,o.model.curator=(h=(d=o==null?void 0:o.model)==null?void 0:d.__curator)==null?void 0:h.user_id,o.model.journal=se.APPLICATION,o.model.document_type=r.params.document_type,o.model.document_sub_type=r.params.document_sub_type,o.model.approvers=le(o.model.__approvers))},T=async()=>{},D=()=>{a.formType===j?R():M()},R=async()=>{const b=await o.actionCreateDocument(o.model);await f.actionCountList(),b?(s.value=!1,A(null,n("document-sent"),B.SUCCESS),await _.replace({name:Be,query:{document_type:ee.APPLICATION}})):A(null,n("error-occurred"),B.ERROR)},M=async()=>{await o.actionUpdateDocument({id:r.params.id,body:o.model}),await f.actionCountList(),A(null,n("document-sent"),B.SUCCESS),await _.replace({name:Me,params:{id:r.params.id,document_type:ee.APPLICATION,document_sub_type:Z.LABOR_LEAVE}})},L=b=>{o.model.__files=[],b.forEach(m=>{o.model.__files.push(m)})};return et(async()=>{r.params.id&&await o.actionGetDocumentDetailForUpdate(r.params.id)}),De(()=>{ze(o.model)}),(b,m)=>{const x=we,i=fe,d=_e;return e(o).detailLoading?(v(),W(x,{key:0})):(v(),S(K,{key:1},[l(e(xe),{title:a.formType===e(j)?"create-sd-application":"update-sd-application"},{content:c(()=>[l(Ae,{"onEmit:preview":k,"onEmit:clearForm":T},{default:c(()=>[l(d,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=h=>e(p).__curator.$model=h),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":m[1]||(m[1]=h=>e(p).__approvers.$model=h),error:e(p).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[2]||(m[2]=h=>e(p).__signers.$model=h),disabled:"",label:"signers",placeholder:e(t).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[3]||(m[3]=h=>e(p).content.$model=h),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=h=>s.value=h),"send-button-loading":e(o).buttonLoading,"onEmit:send":D},{content:c(()=>[l(to,{"compose-model":{...e(o).model,curator:e(o).model.__curator,author:a.formType===e(j)?e(t).currentUser:e(o).model.__signers[0].user,signers:a.formType===e(j)?[e(t).currentUser]:e(o).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},bl=ke("sd-notice-store",{state:()=>(ie(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:ee.NOTICE,document_sub_type:Z.BUSINESS_TRIP,journal:se.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:$.withMessage("Поле не должен быть пустым",E)},start_date:{required:$.withMessage("Поле не должен быть пустым",E)},route:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__companies:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__employees:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a=!1){try{this.detailLoading=!0;const{data:t}=await qe(u);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Le([],t.curator.id,!1),this.model.__employees=await Y(t.notices),a?(this.model.__approvers=await Y(t.approvers.filter(o=>{var f,s;return((f=o==null?void 0:o.user)==null?void 0:f.id)!==((s=t==null?void 0:t.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers),this.model.__companies=await ft(t.notices[0].destinations),this.model.__tags=await st(t.tags),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(u,a){try{this.detailLoading=!0;const{data:t}=await qe(u),o=await qe(a);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Le([],t.curator.id,!1),this.model.__employees=await Y(o.data.notices),this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers),this.model.__companies=await ft(o.data.notices[0].destinations),this.model.__tags=await st(t.tags),this.model.start_date=o.data.notices[0].start_date,this.model.end_date=o.data.notices[0].end_date,this.model.__tags=t.tags,this.model.route=o.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),hl={class:"flex w-full gap-x-4"},pa={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=ne(),o=pe(),f=ue(),s=ie(),n=bl(),_=ce();ye();const r=oe(n.rules,n.model),p=J(!1),k=te(()=>{const i=a.formType===j,d=o.params.document_sub_type;return d===Z.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":d===Z.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),T=te(()=>{var i,d;return o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL&&((i=o==null?void 0:o.query)==null?void 0:i.compose_id)&&((d=o==null?void 0:o.query)==null?void 0:d.document_sub_type)===Z.BUSINESS_TRIP}),D=te(()=>{var i;return!!(o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL&&((i=n==null?void 0:n.model)!=null&&i.trip_notice_id))});Dt(()=>n.model.__tags,i=>{if(a.formType===j)if(i&&i.length){let d=`${i.map(h=>h.name_uz).join(", ")} yuzasidan`;n.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else n.model.short_description=null});const R=async()=>{var d,h,q,U,P;await r.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.approvers=le(n.model.__approvers),n.model.signers=le(n.model.__signers),n.model.curator=(h=(d=n==null?void 0:n.model)==null?void 0:d.__curator)==null?void 0:h.user_id,n.model.journal=o.params.document_type===ee.DECREE||o.params.document_type===ee.ORDER?se.ORDERS_PROTOCOLS:se.INNER,n.model.company=s.currentUser.company.id,n.model.notices=n.model.__employees.map(V=>({start_date:n.model.start_date,end_date:n.model.end_date,user:V.id,route:n.model.route,companies:n.model.__companies.map(w=>w.id)})),n.model.sender=(U=(q=s==null?void 0:s.currentUser)==null?void 0:q.top_level_department)==null?void 0:U.id,n.model.tags=n.model.__tags.map(V=>({id:V.id})),n.model.files=n.model.__files.map(V=>({id:V.id})),n.model.document_type=o.params.document_type,n.model.document_sub_type=o.params.document_sub_type,T.value&&(n.model.trip_notice_id=(P=o==null?void 0:o.query)==null?void 0:P.compose_id),p.value=!0)},M=()=>{},L=i=>{n.model.__files=[],i.forEach(d=>{n.model.__files.push(d)})},b=async()=>{T.value&&(n.model.notices=[]);const i=await n.actionCreateDocument(n.model);await _.actionCountList(),i?(p.value=!1,A(null,t("document-sent"),B.SUCCESS),await f.replace({name:Be,query:{document_type:o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL?ee.DECREE:o.params.document_sub_type===Z.BUSINESS_TRIP_ORDER_LOCAL?ee.ORDER:ee.NOTICE}})):A(null,t("error-occurred"),B.ERROR)},m=async()=>{(T.value||D.value)&&(n.model.notices=[]),await n.actionUpdateDocument({id:o.params.id,body:n.model}),await _.actionCountList(),A(null,t("changed"),B.SUCCESS),await f.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},x=()=>{a.formType===j?b():m()};return Qe(async()=>{o.params.id&&o.query.trip_notice_id&&o.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL?await n.actionGetDocumentDetailForUpdateForCustomUse(o.params.id,o.query.trip_notice_id):o.params.id?await n.actionGetDocumentDetailForUpdate(o.params.id):T.value&&await n.actionGetDocumentDetailForUpdate(o.query.compose_id,!0)}),De(()=>{ze(n.model)}),(i,d)=>{const h=we,q=fe,U=Fe,P=tt,V=Ie,w=_e;return e(n).detailLoading?(v(),W(h,{key:0})):(v(),S(K,{key:1},[l(e(xe),{title:k.value},{content:c(()=>[l(Ae,{"onEmit:preview":R,"onEmit:clearForm":M},{default:c(()=>[l(w,null,{default:c(()=>[l(q,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=g=>e(r).__curator.$model=g),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(r).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=g=>e(r).__employees.$model=g),error:e(r).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:T.value||D.value},null,8,["modelValue","error","disabled"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(Kt,{modelValue:e(r).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=g=>e(r).__companies.$model=g),error:e(r).__companies,"text-truncate":"",disabled:T.value||D.value},null,8,["modelValue","error","disabled"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(rt,{modelValue:e(r).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=g=>e(r).__tags.$model=g),error:e(r).__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:g})=>[re(O(g.name),1)]),option:c(({value:g})=>[l(e(he),{title:g.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[y("div",hl,[l(U,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=g=>e(r).start_date.$model=g),d[5]||(d[5]=g=>e(r).start_date.$model=e(ge)(g))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:T.value||D.value},null,8,["modelValue","error","min-date","disabled"]),l(U,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=g=>e(r).end_date.$model=g),d[7]||(d[7]=g=>e(r).end_date.$model=e(ge)(g))],error:e(r).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:T.value||D.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(P,{modelValue:e(r).route.$model,"onUpdate:modelValue":d[8]||(d[8]=g=>e(r).route.$model=g),error:e(r).route,options:e(Mt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:T.value||D.value},null,8,["modelValue","error","options","disabled"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=g=>e(n).model.__approvers=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=g=>e(r).__signers.$model=g),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(V,{modelValue:e(r).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=g=>e(r).short_description.$model=g),error:e(r).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(q,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(r).content.$model,"onUpdate:modelValue":d[12]||(d[12]=g=>e(r).content.$model=g),error:e(r).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:p.value,"onUpdate:modelValue":d[13]||(d[13]=g=>p.value=g),"send-button-loading":e(n).buttonLoading,"onEmit:send":x},{content:c(()=>[e(o).params.document_sub_type===e(Z).BUSINESS_TRIP_DECREE_LOCAL?(v(),W(e(dl),{key:0,"compose-model":e(n).model,preview:!0},null,8,["compose-model"])):e(o).params.document_sub_type===e(Z).BUSINESS_TRIP_ORDER_LOCAL?(v(),W(e(oo),{key:1,"compose-model":e(n).model,preview:!0},null,8,["compose-model"])):(v(),W(e(lo),{key:2,"compose-model":e(n).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},ma={__name:"OrderForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=Et(),o=ce(),f=ie(),s=pe(),n=ue(),_=oe(t.rules,t.model),{t:r}=ne(),p=J(!1),k=async()=>{var m,x,i,d;await _.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.approvers=le(t.model.__approvers),t.model.curator=(x=(m=t==null?void 0:t.model)==null?void 0:m.__curator)==null?void 0:x.user_id,t.model.sender=(d=(i=f==null?void 0:f.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,t.model.files=t.model.__files.map(h=>({id:h.id})),t.model.document_type=s.params.document_type,t.model.document_sub_type=s.params.document_sub_type,t.model.journal=se.ORDERS_PROTOCOLS,t.model.register_date=ge(t.model.register_date),t.model.__negotiators.forEach(h=>{t.model.signers.push(h.hasOwnProperty("user")?{id:h.id,user:h.user.id,type:je.NEGOTIATOR}:{user:h.id,type:je.NEGOTIATOR})}),s.query.compose_id&&(t.model.trip_notice_id=s.query.compose_id),p.value=!0)},T=()=>{},D=async()=>{try{const b=await t.actionCreateDocument(t.model);await o.actionCountList(),b&&(p.value=!1,A(null,r("document-sent"),B.SUCCESS),await n.replace({name:Be,query:{document_type:ee.ORDER}}))}catch{A(null,r("error-occurred"),B.ERROR)}},R=async()=>{try{const b=await t.actionUpdateDocument({id:s.params.id,body:t.model});await o.actionCountList(),A(null,r("changed"),B.SUCCESS),await n.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{A(null,r("error-occurred"),B.ERROR)}},M=()=>{a.formType===j?D():R()},L=b=>{t.model.__files=[],b.forEach(m=>{t.model.__files.push(m)})};return et(async()=>{s.params.id&&await t.actionGetDocumentDetailForUpdate(s.params.id)}),De(()=>{ze(t.model)}),(b,m)=>{const x=we,i=fe,d=Ie,h=Fe,q=_e;return e(t).detailLoading?(v(),W(x,{key:0})):(v(),S(K,{key:1},[l(e(xe),{title:a.formType===e(j)?"create-order":"update-order"},{content:c(()=>[l(Ae,{"onEmit:preview":k,"onEmit:clearForm":T},{default:c(()=>[l(q,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=U=>e(_).__curator.$model=U),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=U=>e(_).register_number.$model=U),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(h,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=U=>e(_).register_date.$model=U),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=U=>e(t).model.__approvers=U),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=U=>e(_).__negotiators.$model=U),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(_).content.$model,"onUpdate:modelValue":m[5]||(m[5]=U=>e(_).content.$model=U),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:p.value,"onUpdate:modelValue":m[6]||(m[6]=U=>p.value=U),"send-button-loading":e(t).buttonLoading,"onEmit:send":M},{content:c(()=>[l(e(no),{"compose-model":e(t).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},yl=ke("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers)}catch{}finally{this.detailLoading=!1}}}}),_a={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=ne(),o=pe(),f=ue(),s=ie(),n=yl(),_=ce();ye();const r=J(!1),p=oe(n.rules,n.model),k=async()=>{var m,x,i,d;await p.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=le(n.model.__approvers),n.model.signers=le(n.model.__signers),n.model.curator=(x=(m=n==null?void 0:n.model)==null?void 0:m.__curator)==null?void 0:x.user_id,n.model.journal=se.INNER,n.model.company=s.currentUser.company.id,n.model.sender=(d=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,n.model.files=n.model.__files.map(h=>({id:h.id})),n.model.document_type=o.params.document_type,n.model.document_sub_type=o.params.document_sub_type,r.value=!0)},T=()=>{},D=b=>{n.model.__files=[],b.forEach(m=>{n.model.__files.push(m)})},R=async()=>{const b=await n.actionCreateDocument(n.model);await _.actionCountList(),b?(r.value=!1,A(null,t("document-sent"),B.SUCCESS),await f.replace({name:Be,query:{document_type:ee.NOTICE}})):A(null,t("error-occurred"),B.ERROR)},M=async()=>{await n.actionUpdateDocument({id:o.params.id,body:n.model}),await _.actionCountList(),A(null,t("changed"),B.SUCCESS),await f.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},L=()=>{a.formType===j?R():M()};return Qe(async()=>{o.params.id&&await n.actionGetDocumentDetailForUpdate(o.params.id)}),De(()=>{ze(n.model)}),(b,m)=>{const x=we,i=fe,d=Ie,h=_e;return e(n).detailLoading?(v(),W(x,{key:0})):(v(),S(K,{key:1},[l(e(xe),{title:a.formType===e(j)?"create-notice":"update-notice"},{content:c(()=>[l(Ae,{"onEmit:preview":k,"onEmit:clearForm":T},{default:c(()=>[l(h,null,{default:c(()=>[l(i,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=q=>e(p).__curator.$model=q),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=q=>e(p).short_description.$model=q),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=q=>e(n).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(i,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=q=>e(p).__signers.$model=q),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(i,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[4]||(m[4]=q=>e(p).content.$model=q),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:r.value,"onUpdate:modelValue":m[5]||(m[5]=q=>r.value=q),"send-button-loading":e(n).buttonLoading,"onEmit:send":L},{content:c(()=>[l(e(ro),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wl=ke("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){const a={...u};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:t,error:o}=await $e(Ue,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t={...a};delete t.bookings,delete t.notices,delete t.trip_plans;try{this.buttonLoading=!0;const{data:o}=await Ve({id:u,body:t});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){try{this.detailLoading=!0;const{data:t}=await qe(u);Te(this.model,t),this.model.__curator=await Le([],t.curator.id,!1),this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers)}catch{}finally{this.detailLoading=!1}}}}),fa={__name:"DecreeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=ne(),o=pe(),f=ue(),s=ie(),n=ce();ye();const _=J(!1),r=wl(),p=dt(),k=oe(r.rules,r.model),T=async()=>{var i,d,h,q;await k.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=le(r.model.__approvers),r.model.signers=le(r.model.__signers),r.model.curator=(d=(i=r==null?void 0:r.model)==null?void 0:i.__curator)==null?void 0:d.user_id,r.model.journal=se.ORDERS_PROTOCOLS,r.model.company=s.currentUser.company.id,r.model.sender=(q=(h=s==null?void 0:s.currentUser)==null?void 0:h.top_level_department)==null?void 0:q.id,r.model.files=r.model.__files.map(U=>({id:U.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,o.query.compose_id&&(r.model.trip_notice_id=o.query.compose_id),_.value=!0)},D=()=>{},R=x=>{r.model.__files=[],x.forEach(i=>{r.model.__files.push(i)})},M=async()=>{const x=await r.actionCreateDocument(r.model);await n.actionCountList(),x?(_.value=!1,A(null,t("document-sent"),B.SUCCESS),await f.replace({name:Be,query:{document_type:o.params.document_type}})):A(null,t("error-occurred"),B.ERROR)},L=async()=>{await r.actionUpdateDocument({id:o.params.id,body:r.model}),await n.actionCountList(),A(null,t("changed"),B.SUCCESS),await f.replace({name:Me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},b=()=>{a.formType===j?M():L()},m=async x=>{const{data:i}=await p.actionGetDocumentDetail(x);r.model.notices=i==null?void 0:i.notices,r.model.trip_plans=i==null?void 0:i.trip_plans,r.model.bookings=i==null?void 0:i.bookings,r.model.short_description=i==null?void 0:i.short_description,r.model.trip_notice_register_number=i==null?void 0:i.register_number};return Qe(async()=>{a.formType===j&&o.query.compose_id?await m(o.query.compose_id):a.formType===Se&&o.query.trip_notice_id&&o.params.id?(await r.actionGetDocumentDetailForUpdate(o.params.id,null),await m(o.query.trip_notice_id)):a.formType===Se&&o.params.id&&await r.actionGetDocumentDetailForUpdate(o.params.id,null)}),De(()=>{ze(r.model)}),(x,i)=>{const d=we,h=fe,q=Ie,U=_e;return e(r).detailLoading?(v(),W(d,{key:0})):(v(),S(K,{key:1},[l(e(xe),{title:a.formType===e(j)?"create-decree":"update-decree"},{content:c(()=>[l(Ae,{"onEmit:preview":T,"onEmit:clearForm":D},{default:c(()=>[l(U,null,{default:c(()=>[l(h,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=P=>e(k).__curator.$model=P),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(h,{"col-class":"w-1/2"},{default:c(()=>[l(q,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=P=>e(k).short_description.$model=P),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(h,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=P=>e(r).model.__approvers=P),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(h,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=P=>e(k).__signers.$model=P),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(h,{"col-class":"w-full"},{default:c(()=>[l(Ee,{modelValue:e(k).content.$model,"onUpdate:modelValue":i[4]||(i[4]=P=>e(k).content.$model=P),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:_.value,"onUpdate:modelValue":i[5]||(i[5]=P=>_.value=P),"send-button-loading":e(r).buttonLoading,"onEmit:send":b},{content:c(()=>[l(e(vt),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vl=ke("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:$.withMessage("Поле не должен быть пустым",E)},start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},__user:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);return Te(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers),this.model.__user=await We("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),qa={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=pe(),o=ue(),f=ie(),s=vl();dt();const n=ce(),{t:_}=ne(),r=oe(s.rules,s.model),p=J(!1),k=J([]),T=te(()=>a.formType===j?"create-poa":"update-poa"),D=te(()=>s.model.start_date?new Date(s.model.start_date):new Date),R=async()=>{var d,h,q,U,P,V,w,g,C,G,N,F,Q,I,X,z,Ce,Ge,pt,mt;if(await r.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=le(s.model.__approvers),s.model.signers=le(s.model.__signers),s.model.curator=(h=(d=s==null?void 0:s.model)==null?void 0:d.__curator)==null?void 0:h.user_id,s.model.user=(U=(q=s==null?void 0:s.model)==null?void 0:q.__user)==null?void 0:U.id,s.model.journal=se.POWER_OF_ATTORNEY,s.model.company=(V=(P=f.currentUser)==null?void 0:P.company)==null?void 0:V.id,s.model.sender=(g=(w=f==null?void 0:f.currentUser)==null?void 0:w.top_level_department)==null?void 0:g.id,s.model.document_type=t.params.document_type,s.model.document_sub_type=t.params.document_sub_type,s.model.content=".",s.model.parent=(G=(C=s.model)==null?void 0:C.__parent)==null?void 0:G.id,!((F=(N=s==null?void 0:s.model)==null?void 0:N.__user)!=null&&F.passport_seria||(I=(Q=s==null?void 0:s.model)==null?void 0:Q.__user)!=null&&I.passport_number||(z=(X=s==null?void 0:s.model)==null?void 0:X.__user)!=null&&z.passport_issue_date||(Ge=(Ce=s==null?void 0:s.model)==null?void 0:Ce.__user)!=null&&Ge.passport_issued_by)){A(null,`${(mt=(pt=s.model)==null?void 0:pt.__user)==null?void 0:mt.full_name}: ${_("passport-details-error")}`,B.WARNING);return}p.value=!0}},M=()=>{},L=async()=>{const i=await s.actionCreateDocument(s.model);await n.actionCountList(),i?(p.value=!1,A(null,_("document-sent"),B.SUCCESS),await o.replace({name:Be,query:{document_type:ee.POWER_OF_ATTORNEY}})):A(null,_("error-occurred"),B.ERROR)},b=async()=>{await s.actionUpdateDocument({id:t.params.id,body:s.model}),await n.actionCountList(),A(null,_("changed"),B.SUCCESS),await o.replace({name:Me,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},m=()=>{a.formType===j?L():b()},x=async i=>{const{data:d}=await po({user:i.id,document_sub_type:t.params.document_sub_type,status:5});k.value=d.results};return Qe(async()=>{if(t.params.id){const i=await s.actionGetDocumentDetailForUpdate(t.params.id);i.parent&&(k.value=[i.parent])}}),De(()=>{ze(s.model)}),(i,d)=>{const h=we,q=fe,U=Fe,P=tt,V=_e;return e(s).detailLoading?(v(),W(h,{key:0})):(v(),S(K,{key:1},[l(e(xe),{title:T.value},{content:c(()=>[l(Ae,{"onEmit:preview":R,"onEmit:clearForm":M},{default:c(()=>[l(V,null,{default:c(()=>[l(q,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=w=>e(r).__curator.$model=w),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(r).__user.$model,"onUpdate:modelValue":d[1]||(d[1]=w=>e(r).__user.$model=w),error:e(r).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":d[2]||(d[2]=w=>x(w))},null,8,["modelValue","error"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(U,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[d[3]||(d[3]=w=>e(r).start_date.$model=w),d[4]||(d[4]=w=>e(r).start_date.$model=e(ge)(w))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(U,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[d[5]||(d[5]=w=>e(r).end_date.$model=w),d[6]||(d[6]=w=>e(r).end_date.$model=e(ge)(w))],error:e(r).end_date,"min-date":D.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":d[7]||(d[7]=w=>e(s).model.__approvers=w),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":d[8]||(d[8]=w=>e(r).__signers.$model=w),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(q,{"col-class":"w-1/2"},{default:c(()=>[l(P,{modelValue:e(s).model.__parent,"onUpdate:modelValue":d[9]||(d[9]=w=>e(s).model.__parent=w),options:k.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:p.value,"onUpdate:modelValue":d[10]||(d[10]=w=>p.value=w),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:c(()=>[l(ao,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},kl={class:"base-stepper-component flex items-center select-none"},xl=["onClick"],$l={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Ct={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(u,{emit:a}){const{t}=ne(),o=f=>{a("emit:stepClick",f)};return(f,s)=>{const n=me;return v(),S("div",kl,[(v(!0),S(K,null,de(u.items,(_,r)=>(v(),S("div",{key:_.id,class:"flex items-center"},[y("div",{class:Pe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",_.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:p=>o(_)},[l(n,{icon:_.icon,class:Pe(_.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),y("span",null,O(e(t)(_.label)),1)],10,xl),r<u.items.length-1?(v(),S("div",$l)):ae("",!0)]))),128))])}}},Oe=ke("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList],__users_to_extend:null,__regions_to_extend:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:$.withMessage("Поле не должен быть пустым",E)}},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)},__groups:{$each:$.forEach({__users:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},__regions:{required:$.withMessage("Поле не должен быть пустым",E)},__start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__end_date:{required:$.withMessage("Поле не должен быть пустым",E)},__company:{required:$.withMessage("Поле не должен быть пустым",E)},__route:{required:$.withMessage("Поле не должен быть пустым",E)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:$.forEach({users:{required:$.withMessage("Поле не должен быть пустым",E)},text:{required:$.withMessage("Поле не должен быть пустым",E)}})}},booking_model:{bookings:[{type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:$.forEach({segments:{$each:$.forEach({departure_city:{required:$.withMessage("Поле не должен быть пустым",E)},arrival_city:{required:$.withMessage("Поле не должен быть пустым",E)},date:{required:$.withMessage("Поле не должен быть пустым",E)},time:{required:$.withMessage("Поле не должен быть пустым",E)},segment_class:{required:$.withMessage("Поле не должен быть пустым",E)}})},passengers:{required:$.withMessage("Поле не должен быть пустым",E)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Nt,active:!0,value:Xe},{id:4,label:"decree",icon:Pt,active:!0,value:Ke}],routeTabItems:[{id:1,title:"airplane",icon:Ot,value:Je,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:It,value:mo,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:Bt,value:xt,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:At,value:be},{id:2,title:"complex-route",icon:jt,value:it},{id:3,title:"one-way",icon:zt,value:_o}]}),actions:{async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:t,error:o}=await $e(Ue,a);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t=await lt(a);try{this.buttonLoading=!0;const{data:o}=await Ve({id:u,body:t});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){var a,t;try{this.detailLoading=!0;const{data:o}=await qe(u),f=await kt(o.id);this.decreeModel=(t=(a=f==null?void 0:f.data)==null?void 0:a.to_composes[0])==null?void 0:t.from_compose,Te(this.model,o),this.model.__curator=await Le([],o.curator.id,!1),this.model.__signers=await Y(o.signers),this.model.__approvers=await Y(o.approvers);const s=Object.values(o.notices.reduce((n,_)=>{const r=_.group_id;return n[r]=n[r]||{group_id:r,items:[]},n[r].items.push(_),n},{}));this.model.__groups=await Promise.all(s.map(async n=>{var M;const _=await Promise.all(n.items.map(async L=>({...await Y([],L.user.id,!1),business_trip_id:L.id}))),r=await st(n.items[0].tags),p=await We("regions",n.items[0].locations),k=await We("companies",[],!1,(M=n.items[0].sender_company)==null?void 0:M.id),T=n.items[0].start_date,D=n.items[0].end_date,R=n.items[0].route;return{__users:_,__tags:r,__regions:p,__start_date:T,__end_date:D,__company:k,__route:R}})),this.trip_plan_model.trip_plans=await Promise.all(o.trip_plans.map(async(n,_)=>({...n,users:await Y(n.users)}))),this.booking_model.bookings=await Promise.all(o.bookings.map(async n=>({type:n.type,route:n.route,segments:await Promise.all(n.segments.map(async _=>({departure_city:await We("regions",[],!1,_.departure_city.id),arrival_city:await We("regions",[],!1,_.arrival_city.id),segment_class:await fo.find(r=>r.value===_.segment_class),date:ge(_.departure_date),time:await so(_.departure_date,_.departure_end_date)}))),passengers:await Y(n.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},async actionStepClick(u,a,t){await u.replace({query:{...a.query,step:t}}),this.stepperItems.forEach(f=>f.active=f.value===t),await wt();const o=document.querySelector(".document-view-aside");o&&o.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(u){this.booking_model.bookings.splice(u,1)},actionChangeRouteSegment(u,a){const t=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=u===be?[t(),t()]:[t()]},async actionAddRouteLine(u){this.booking_model.bookings[u].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(u,a){this.booking_model.bookings[u].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),Vl={class:"trip-info-components"},Ul={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},El={class:"flex justify-between"},Cl={class:"text-base text-primary-900 font-semibold mb-1"},Sl=["onClick"],Tl={class:"flex align-center gap-x-4"},Ll={class:"flex w-full gap-x-4"},Rl={class:"flex w-full gap-x-4"},Dl={class:"text-base text-primary-900 font-semibold mb-2"},Ml={class:"flex items-center justify-between"},ht={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:t}){const o=pe(),f=ue(),s=Oe();ye();const{t:n,locale:_}=ne(),r=oe(s.rules,s.model),p=J(!1),k=L=>{s.model.__files=[],L.forEach(b=>{s.model.__files.push(b)})},T=()=>{s.actionAddGroupBlock()},D=async L=>{const b=await r.value.$validate();if(p.value=!0,!b){A(null,n("fill-required-fields"),B.WARNING);return}t("emit:onValidateAndSend"),await s.actionStepClick(f,o,"decree")},R=(L,b)=>{s.model.__groups[b].__regions=[]},M=(L,b)=>{L.value.forEach(m=>{var x,i,d,h;if(m.id===((h=(d=(i=(x=s.model)==null?void 0:x.__groups[b])==null?void 0:i.__company)==null?void 0:d.region)==null?void 0:h.id)){const q=s.model.__groups[b].__regions.findIndex(U=>U.id===m.id);(q||q===0)&&s.model.__groups[b].__regions.splice(q,1)}})};return a({stepClick:D}),(L,b)=>{const m=fe,x=Ie,i=me,d=tt,h=rt,q=Fe,U=_e,P=Re;return v(),S("div",Vl,[l(U,null,{default:c(()=>[l(m,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":b[0]||(b[0]=V=>e(r).__curator.$model=V),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(m,{"col-class":"w-1/2"},{default:c(()=>[l(x,{modelValue:e(r).short_description.$model,"onUpdate:modelValue":b[1]||(b[1]=V=>e(r).short_description.$model=V),error:e(r).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(m,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(v(!0),S(K,null,de(e(s).model.__groups,(V,w)=>(v(),S("div",Ul,[y("div",El,[y("span",Cl,O(e(n)("group"))+"-"+O(w+1),1),w!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:g=>e(s).actionDeleteGroupBlock(w)},[l(i,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Sl)):ae("",!0)]),l(U,null,{default:c(()=>[l(m,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:V.__users,"onUpdate:modelValue":g=>V.__users=g,error:e(r).__groups.$each.$response.$data[w].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(m,{"col-class":"w-1/2"},{default:c(()=>[y("div",Tl,[l(d,{modelValue:V.__company,"onUpdate:modelValue":g=>V.__company=g,error:e(r).__groups.$each.$response.$data[w].__company,options:V.__filialList,"onUpdate:options":g=>V.__filialList=g,required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":g=>R(g,w)},{option:c(({option:g})=>[l(e(he),{title:g.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","onUpdate:options","show-nested-error","onEmit:change"]),l(h,{modelValue:V.__regions,"onUpdate:modelValue":g=>V.__regions=g,error:e(r).__groups.$each.$response.$data[w].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":g=>M(g,w)},{chip:c(({value:g})=>[re(O(g.name),1)]),option:c(({value:g})=>[l(e(he),{title:g.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error","onEmit:change"])])]),_:2},1024),l(m,{"col-class":"w-1/2"},{default:c(()=>[y("div",Ll,[l(h,{modelValue:V.__tags,"onUpdate:modelValue":g=>V.__tags=g,error:e(r).__groups.$each.$response.$data[w].__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":p.value,class:"w-1/2"},{chip:c(({value:g})=>[re(O(g.name),1)]),option:c(({value:g})=>[l(e(he),{title:g.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),l(d,{modelValue:V.__route,"onUpdate:modelValue":g=>V.__route=g,error:e(r).__groups.$each.$response.$data[w].__route,options:e(s).routeTabItems,"onUpdate:options":b[2]||(b[2]=g=>e(s).routeTabItems=g),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(_)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":p.value,class:"w-1/2"},{option:c(({option:g})=>[l(e(he),{title:e(n)(g.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),l(m,{"col-class":"w-1/2"},{default:c(()=>[y("div",Rl,[l(q,{modelValue:V.__start_date,"onUpdate:modelValue":[g=>V.__start_date=g,g=>V.__start_date=e(ge)(g)],error:e(r).__groups.$each.$response.$data[w].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(q,{modelValue:V.__end_date,"onUpdate:modelValue":[g=>V.__end_date=g,g=>V.__end_date=e(ge)(g)],error:e(r).__groups.$each.$response.$data[w].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(P,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:T},null,8,["icon-left"])]),_:1}),l(m,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":b[3]||(b[3]=V=>e(s).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(m,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":b[4]||(b[4]=V=>e(r).__signers.$model=V),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(m,{"col-class":"w-full"},{default:c(()=>[y("div",{class:Pe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(s).model.content?"border-critic-500":"border-greyscale-200"])},[y("div",Dl,O(e(n)("notice")),1),l(Ee,{modelValue:e(r).content.$model,"onUpdate:modelValue":b[5]||(b[5]=V=>e(r).content.$model=V),error:e(r).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).model.__files,"onEmit:fileUpload":k},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),y("div",Ml,[l(P,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(P,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:b[6]||(b[6]=V=>D(e(ct)))})])])}}},Nl={class:"work-plan-component"},Pl={class:"flex flex-col gap-y-3"},Ol={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Il={class:"flex justify-between"},Bl={class:"text-base text-primary-900 font-semibold mb-1"},Al=["onClick"],jl={class:"flex items-center justify-between mt-10"},zl={class:"flex items-center gap-x-1"},Fl={__name:"WorkPlan",setup(u,{expose:a}){const{t}=ne(),o=pe(),f=ue(),s=Oe(),n=oe(s.trip_plan_rules,s.trip_plan_model),_=J(!1),r=te(()=>{const T=new Set;return s.model.__groups.reduce((D,R)=>R.__users&&Array.isArray(R.__users)?D.concat(R.__users):D,[]).filter(D=>T.has(D.id)?!1:(T.add(D.id),!0))}),p=async T=>{const D=await n.value.$validate();if(_.value=!0,!D){A(null,t("fill-required-fields"),B.WARNING);return}const R=s.trip_plan_model.trip_plans.flatMap(L=>{var b;return(b=L.users)==null?void 0:b.map(m=>m.id)}),M=r.value.filter(L=>!R.includes(L.id));M.length?(A(null,`У следующих сотрудников нет плана работы: ${M==null?void 0:M.map(L=>L.first_name+" "+L.last_name).join(", ")}.`,B.WARNING),A(null,"У всех сотрудников должен быть назначен рабочий план.",B.WARNING)):await s.actionStepClick(f,o,T)},k=()=>{s.actionAddWorkPlanRow(),_.value=!1};return a({stepClick:p}),(T,D)=>{const R=me,M=Vt,L=fe,b=_e,m=Re;return v(),S("div",Nl,[y("div",Pl,[(v(!0),S(K,null,de(e(s).trip_plan_model.trip_plans,(x,i)=>(v(),S("div",Ol,[y("div",Il,[y("span",Bl,O(e(t)("plan"))+"-"+O(i+1),1),i!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d=>e(s).actionDeleteWorkPlanRow(i)},[l(R,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Al)):ae("",!0)]),l(b,null,{default:c(()=>[l(L,{"col-class":"w-1/2"},{default:c(()=>[l(M,{modelValue:x.text,"onUpdate:modelValue":d=>x.text=d,error:e(n).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(L,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:x.users,"onUpdate:modelValue":d=>x.users=d,options:r.value,error:e(n).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:k},null,8,["icon-left"]),y("div",jl,[l(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",zl,[l(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:D[0]||(D[0]=x=>p(e(Xe)))}),l(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:D[1]||(D[1]=x=>p(e($t)))})])])])}}};const Gl={class:"base-time-picker"},Wl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(u){const a=u,t=nt(a,"modelValue"),{t:o}=ne();return(f,s)=>{var r;const n=wo,_=me;return v(),S("div",Gl,[l(n,{label:a.label,required:a.required},null,8,["label","required"]),l(e(vo),{modelValue:e(t),"onUpdate:modelValue":s[0]||(s[0]=p=>Ze(t)?t.value=p:null),"time-picker":"",range:u.range,"cancel-text":e(o)("cancel"),"select-text":e(o)("select"),placeholder:e(o)(u.placeholder),ref:"datePicker",class:Pe({"input-error":((r=u.error)==null?void 0:r.$error)&&u.showNestedError})},{"input-icon":c(()=>[l(_,{icon:e(Ft),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Yl={class:"route-component flex flex-col gap-y-3"},Hl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Xl={class:"flex items-center justify-between"},Kl={class:"flex items-center gap-x-4"},Ql={class:"text-base text-primary-900 font-semibold mb-1"},Jl={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Zl={class:"text-xs text-greyscale-900 font-medium"},en=["onClick"],tn=["onClick"],on={class:"text-sm text-primary-500 font-semibold"},ln={class:"flex items-center justify-between mt-10"},nn={class:"flex items-center gap-x-1"},rn={__name:"Route",props:{formType:{type:String,default:j}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:t}){const{t:o}=ne(),f=pe(),s=ue(),n=Oe(),_=ye();ie(),ce();const r=oe(n.booking_model_rules,n.booking_model);J(!1);const p=J(!1),k=te(()=>{const i=new Set;return n.model.__groups.reduce((d,h)=>h.__users&&Array.isArray(h.__users)?d.concat(h.__users):d,[]).filter(d=>i.has(d.id)?!1:(i.add(d.id),!0))}),T=i=>{n.routeTabItems.forEach(d=>d.active=d.id===i.id)},D=(i,d)=>{n.routeTypeTabItems.forEach(h=>h.active=h.id===i.id),n.actionChangeRouteSegment(i.value,d)},R=async(i,d=!1)=>{var P,V;const h=await r.value.$validate();if(p.value=!0,!h){A(null,o("fill-required-fields"),B.WARNING);return}const q=(P=n.booking_model.bookings)==null?void 0:P.flatMap(w=>{var g;return(g=w.passengers)==null?void 0:g.map(C=>C==null?void 0:C.id)}),U=(V=k.value)==null?void 0:V.filter(w=>!(q!=null&&q.includes(w.id)));U.length?(A(null,`У следующих сотрудников не назначен маршрут: ${U.map(w=>w.first_name+" "+w.last_name).join(", ")}.`,B.WARNING),A(null,"У всех сотрудников должен быть назначен маршрут",B.WARNING)):(d&&t("emit:onValidateAndSend"),await n.actionStepClick(s,f,i))},M=()=>{n.actionAddRouteRow(),p.value=!1},L=(i,d,h,q)=>{q.type===be&&(n.booking_model.bookings[d].segments[h+1].arrival_city=i)},b=(i,d,h,q)=>{q.type===be&&(n.booking_model.bookings[d].segments[h+1].departure_city=i)},m=(i,d,h,q)=>{q.type===be&&(n.booking_model.bookings[d].segments[h+1].segment_class=i)},x=()=>{R(Ke,!0)};return a({stepClick:R}),(i,d)=>{const h=tt,q=fe,U=Fe,P=_e,V=Re;return v(),S("div",Yl,[(v(!0),S(K,null,de(e(n).booking_model.bookings,(w,g)=>(v(),S("div",Hl,[y("div",Xl,[y("div",Kl,[y("span",Ql,O(e(o)("route"))+"-"+O(g+1),1),l(bt,{modelValue:w.route,"onUpdate:modelValue":C=>w.route=C,items:e(n).routeTabItems,"onEmit:onChange":d[0]||(d[0]=C=>T(C))},null,8,["modelValue","onUpdate:modelValue","items"]),l(bt,{modelValue:w.type,"onUpdate:modelValue":C=>w.type=C,items:e(n).routeTypeTabItems,"onEmit:onChange":C=>D(C,g)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),g!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d[1]||(d[1]=(...C)=>e(n).actionDeleteRouteRow&&e(n).actionDeleteRouteRow(...C))},[l(me,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):ae("",!0)]),y("div",Jl,[l(me,{icon:e(at),class:"text-warning-500"},null,8,["icon"]),y("span",Zl,O(e(o)("route-warning")),1)]),(v(!0),S(K,null,de(w.segments,(C,G)=>(v(),S("div",null,[l(P,null,{default:c(()=>[l(q,{"col-class":"w-1/5"},{default:c(()=>[l(h,{modelValue:C.departure_city,"onUpdate:modelValue":N=>C.departure_city=N,error:e(r).bookings.$each.$response.$data[g].segments.$each.$data[G].departure_city,options:e(_).regionsList,"onUpdate:options":d[2]||(d[2]=N=>e(_).regionsList=N),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:w.type===e(be)&&G%2!==0,"onEmit:change":N=>L(N,g,G,w)},{option:c(({option:N})=>[l(e(he),{title:N.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(q,{"col-class":"w-1/5"},{default:c(()=>[l(h,{modelValue:C.arrival_city,"onUpdate:modelValue":N=>C.arrival_city=N,error:e(r).bookings.$each.$response.$data[g].segments.$each.$data[G].arrival_city,options:e(_).regionsList.filter(N=>{var F;return(N==null?void 0:N.id)!=((F=C.departure_city)==null?void 0:F.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:w.type===e(be)&&G%2!==0,"onEmit:change":N=>b(N,g,G,w)},{option:c(({option:N})=>[l(e(he),{title:N.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(q,{"col-class":"w-1/5"},{default:c(()=>[l(h,{modelValue:C.segment_class,"onUpdate:modelValue":N=>C.segment_class=N,error:e(r).bookings.$each.$response.$data[g].segments.$each.$data[G].segment_class,options:w.route===e(xt)?e(qo):w.route===e(Je)?e(go):e(bo),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":p.value,translatable:"",disabled:w.type===e(be)&&G%2!==0,"onEmit:change":N=>m(N,g,G,w)},{option:c(({option:N})=>[l(e(he),{title:N.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(q,{"col-class":"w-1/5"},{default:c(()=>[l(U,{modelValue:C.date,"onUpdate:modelValue":[N=>C.date=N,N=>C.date=e(ge)(N)],error:e(r).bookings.$each.$response.$data[g].segments.$each.$data[G].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),l(q,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[l(Wl,{modelValue:C.time,"onUpdate:modelValue":N=>C.time=N,error:e(r).bookings.$each.$response.$data[g].segments.$each.$data[G].time,label:"time",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),w.type===e(it)&&G!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:N=>e(n).actionDeleteRouteLine(g,G)},[l(me,{icon:e(Ye),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,en)):ae("",!0)]),_:2},1024)]),_:2},1024)]))),256)),w.type===e(it)?(v(),S("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:C=>e(n).actionAddRouteLine(g)},[l(me,{icon:e(He),class:"text-primary-500"},null,8,["icon"]),y("span",on,O(e(o)("add-line")),1)],8,tn)):ae("",!0),l(P,null,{default:c(()=>[l(q,{"col-class":"w-full"},{default:c(()=>[l(H,{modelValue:w.passengers,"onUpdate:modelValue":C=>w.passengers=C,options:k.value,error:e(r).bookings.$each.$response.$data[g].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),l(V,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:M},null,8,["icon-left"]),y("div",ln,[l(V,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",nn,[l(V,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:d[3]||(d[3]=w=>R(e(ct)))}),l(V,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(n).buttonLoading,onClick:x},null,8,["loading"])])])])}}},ut=ke("sd-extend-business-trip-store",{state:()=>({buttonLoading:!1,userTripUpdateButtonLoading:!1,detailLoading:!1,changingBTDialog:!1,changingBTLoading:!1,changingBTModel:null,tempVerifications:[],tempRegions:[],tempGroupIndex:null,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionGetParentDocumentDetail(u){try{this.detailLoading=!0;const{data:a}=await qe(u);await this.actionAdjustModel(a)}catch{}finally{this.detailLoading=!1}},async actionAdjustModel(u){this.model.__notices=u.notices;const a=Object.values(u.notices.reduce((t,o)=>{const f=o.group_id;return t[f]=t[f]||{group_id:f,items:[]},t[f].items.push(o),t},{}));this.model.__groups=await Promise.all(a.map(async t=>({__users:await Promise.all(t.items.map(async f=>({...await Y([],f.user.id,!1),business_trip_id:f.id}))),__notices_to_change:[]})))},async actionAddUsersToExtend(u,a){var s;await wt();const t=this.model.__groups[a].__users_to_extend||[],o=this.model.__notices.find(n=>t.some(_=>_.id===n.user.id));this.changingBTModel=o,this.tempGroupIndex=a,this.changingBTLoading=!0,this.changingBTDialog=!0,setTimeout(()=>{this.changingBTLoading=!1},2e3);const f=await ko(o.id);this.tempVerifications=(s=f==null?void 0:f.data)==null?void 0:s.verifications.filter(n=>!n.is_sender).map(n=>({...n,is_visited:n.arrived_at||n.left_at}))},actionFillNoticesToChange(){var u,a,t,o,f,s;console.log(this.tempRegions),console.log(this.tempVerifications),(t=(a=(u=this.model)==null?void 0:u.__groups)==null?void 0:a[this.tempGroupIndex])!=null&&t.__notices_to_change?this.model.__groups[this.tempGroupIndex].__notices_to_change.push({...this.changingBTModel,__regions:this.tempVerifications.map(n=>({...n.region})),__start_date:(o=this.changingBTModel)==null?void 0:o.start_date,__end_date:(f=this.changingBTModel)==null?void 0:f.end_date,__sender_company:(s=this.changingBTModel)==null?void 0:s.sender_company}):console.warn("Target group or __notices_to_change array not found.")},async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:t,error:o}=await $e(Ue,a);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:u,body:a}){const t=await lt(a);try{this.buttonLoading=!0;const{data:o}=await Ve({id:u,body:t});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){var t,o,f,s,n,_;try{this.detailLoading=!0,await this.actionGetParentDocumentDetail(a);const{data:r}=await qe(u),p=await kt(r.id);Oe().decreeModel.content=((f=(o=(t=p==null?void 0:p.data)==null?void 0:t.to_composes[0])==null?void 0:o.from_compose)==null?void 0:f.content)||"",Oe().decreeModel.id=((_=(n=(s=p==null?void 0:p.data)==null?void 0:s.to_composes[0])==null?void 0:n.from_compose)==null?void 0:_.id)||null;const k=await Promise.all(this.model.__groups.map(async T=>{const D=r.notices.filter(R=>T.__users.some(M=>{var L;return M.id===((L=R.user)==null?void 0:L.id)}));return D.length&&(T.__users_to_extend=T.__users,T.__notices_to_change=await Promise.all(D.map(async R=>({user:R.user,__regions:await We("regions",R.locations),__start_date:R.start_date,__end_date:R.end_date,tags:R.tags,__sender_company:R.sender_company,business_trip_id:R.id})))),T}));this.model.__groups=k.filter(T=>T.__users_to_extend&&T.__users_to_extend.length>0),this.model.__curator=await Le([],r.curator.id,!1),this.model.__signers=await Y(r.signers),this.model.__approvers=await Y(r.approvers),this.model.short_description=r.short_description,this.model.content=r.content}catch(r){return console.error(r),Promise.reject(r)}finally{this.detailLoading=!1}},async actionUpdateUserTrip(){var a,t;this.userTripUpdateButtonLoading=!0;const u={regions:this.tempVerifications.map(o=>{var f;return((f=o==null?void 0:o.region)==null?void 0:f.id)||null}),end_date:(a=this.changingBTModel)==null?void 0:a.end_date};try{await xo({id:(t=this.changingBTModel)==null?void 0:t.id,body:u}),this.actionFillNoticesToChange(),this.actionClearTempModel(),A(null,"Muvaffaqiyatli!",B.SUCCESS)}catch(o){console.error(o)}finally{this.userTripUpdateButtonLoading=!1}},actionResetBTModel(){this.model={approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]}},actionClearTempModel(){this.changingBTDialog=!1,this.changingBTLoading=!1,this.changingBTModel=null,this.tempVerifications=[],this.tempRegions=[],this.model.__groups[this.tempGroupIndex].__users_to_extend=[]},actionClearUserToExtend(){const u=this.model.__groups[this.tempGroupIndex].__users_to_extend.findIndex(a=>{var t,o;return a.id===((o=(t=this.changingBTModel)==null?void 0:t.user)==null?void 0:o.id)});this.model.__groups[this.tempGroupIndex].__users_to_extend.splice(u,1)}}}),an={class:"decree-component"},sn={class:"flex items-center justify-between mt-10"},dn={class:"flex items-center gap-x-1"},St={__name:"Decree",props:{formType:{type:String,default:j}},setup(u,{expose:a}){const t=u,o=pe(),f=ue(),s=Oe(),n=ut(),_=oe(s.decreeRules,s.decreeModel),{t:r}=ne(),p=ie(),k=ce(),T=J(!1),D=te(()=>({...o.params.document_sub_type===Z.EXTEND_BUSINESS_TRIP_NOTICE?n.model:s.model,bookings:s.booking_model.bookings,trip_plans:s.trip_plan_model.trip_plans,decree_content:s.decreeModel.content})),R=async x=>{await s.actionStepClick(f,o,x)},M=x=>{s.decreeModel.__files=[],x.forEach(i=>{s.decreeModel.__files.push(i)})},L=async()=>{var i,d,h,q;if(!await _.value.$validate()){A(null,r("fill-required-fields"),B.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(d=(i=s.model)==null?void 0:i.__curator)==null?void 0:d.user_id,s.decreeModel.journal=se.ORDERS_PROTOCOLS,s.decreeModel.company=p.currentUser.company.id,s.decreeModel.sender=(q=(h=p==null?void 0:p.currentUser)==null?void 0:h.top_level_department)==null?void 0:q.id,s.decreeModel.document_type=ee.DECREE,s.decreeModel.document_sub_type=o.params.document_sub_type===Z.EXTEND_BUSINESS_TRIP_NOTICE?Z.EXTEND_BUSINESS_TRIP_DECREE:Z.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,T.value=!0},b=async(x,i)=>{try{await s.actionUpdateDocument({id:i,body:{...s.decreeModel,trip_notice_id:x}}),await k.actionCountList(),A(null,r("successfully-saved"),B.SUCCESS)}catch{}},m=async()=>{var i;let x=null;t.formType===j&&o.query.notice_id?x=o.query.notice_id:t.formType===Se&&o.params.id&&(x=o.params.id);try{await b(x,(i=s.decreeModel)==null?void 0:i.id),await f.replace({name:Me,params:{id:x,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type},query:{parent_id:o.query.parent_id}})}catch{}};return a({stepClick:R}),(x,i)=>{const d=Re;return v(),S("div",an,[l(Ee,{modelValue:e(_).content.$model,"onUpdate:modelValue":i[0]||(i[0]=h=>e(_).content.$model=h),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"]),y("div",sn,[l(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",dn,[l(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:i[1]||(i[1]=h=>R(e(Xe)))}),l(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:L})])]),l(Ne,{modelValue:T.value,"onUpdate:modelValue":i[2]||(i[2]=h=>T.value=h),"send-button-loading":e(s).buttonLoading,"onEmit:send":m,"content-classes":"p-0"},{content:c(()=>[l(e(io),{"compose-model":D.value,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},cn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},un={class:"px-6 py-4"},ga={__name:"BusinessTripForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=ne(),o=pe(),f=ue(),s=ie(),n=Oe();oe(n.rules,n.model),oe(n.trip_plan_rules,n.trip_plan_model),oe(n.booking_model_rules,n.booking_model),oe(n.decreeRules,n.decreeModel);const _=J(null),r=te(()=>a.formType===j?"create-business-trip-notice":"update-business-trip-notice"),p=te(()=>{switch(o.query.step){case Xe:return ht;case Ke:return St;case ct:return Fl;case $t:return rn;default:return ht}}),k=async M=>{var b;const L=e(_);((b=o.query)==null?void 0:b.step)!==M.value&&(await L.stepClick(M.value),M.value,Ke)},T=async()=>{o.query.step||await f.replace({query:{...o.query,step:Xe}}),n.stepperItems.forEach(M=>M.active=M.value===o.query.step)},D=async()=>{var b,m,x,i,d,h,q,U,P,V,w,g;const M=le(n.model.__approvers),L=le(n.model.__signers);if(n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=M,n.model.signers=L,n.model.curator=(m=(b=n.model)==null?void 0:b.__curator)==null?void 0:m.user_id,n.model.journal=se.INNER,n.model.company=(i=(x=s.currentUser)==null?void 0:x.company)==null?void 0:i.id,n.model.__groups.forEach((C,G)=>{const N=G+1;n.model.notices.push(...C.__users.map(F=>{var Q,I,X;return{start_date:C.__start_date,end_date:C.__end_date,user:F.id,company:(I=(Q=s.currentUser)==null?void 0:Q.company)==null?void 0:I.id,sender_company:(X=C.__company)==null?void 0:X.id,regions:C.__regions.map(z=>z.id),tags:C.__tags.map(z=>({id:z.id})),route:C.__route,group_id:N,...F.business_trip_id?{id:F.business_trip_id}:{}}}))}),n.model.sender=(h=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:h.id,n.model.files=n.model.__files.map(C=>({id:C.id})),n.model.document_type=o.params.document_type,n.model.document_sub_type=o.params.document_sub_type,a.formType===j&&o.query.notice_id)try{await n.actionUpdateDocument({id:o.query.notice_id,body:n.model})}catch{}else if(a.formType===j)try{const{data:C}=await n.actionCreateDocument(n.model),G={approvers:[],signers:[],curator:(U=(q=n.model)==null?void 0:q.__curator)==null?void 0:U.user_id,journal:se.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:(V=(P=s==null?void 0:s.currentUser)==null?void 0:P.top_level_department)==null?void 0:V.id,document_type:ee.DECREE,document_sub_type:Z.BUSINESS_TRIP_DECREE_V2,short_description:(w=n.model)==null?void 0:w.short_description,trip_notice_id:C.id,content:C.content};n.decreeModel.content=C.content;try{const N=await n.actionCreateDocument(G);n.decreeModel.id=(g=N==null?void 0:N.data)==null?void 0:g.id,await f.replace({query:{...o.query,notice_id:C.id}}),await n.actionGetDocumentDetailForUpdate(C.id)}catch{}}catch{}else if(a.formType===Se&&o.params.id)try{await n.actionUpdateDocument({id:o.params.id,body:n.model})}catch{}},R=async()=>{try{await D(),await A(null,t("notice-saved-successfully"),B.SUCCESS)}catch{}};return Qe(async()=>{await T(),a.formType===Se?await n.actionGetDocumentDetailForUpdate(o.params.id):o.query.notice_id&&await n.actionGetDocumentDetailForUpdate(o.query.notice_id)}),De(()=>{n.actionResetBTModel()}),(M,L)=>{const b=we,m=Ct;return v(),S("div",{class:Pe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(n).detailLoading}])},[e(n).detailLoading?(v(),W(b,{key:0})):(v(),W(e(xe),{key:1,title:r.value},{content:c(()=>[y("div",cn,[l(m,{items:e(n).stepperItems,"onEmit:stepClick":k},null,8,["items"])]),y("div",un,[(v(),W(Gt(p.value),{"form-type":u.formType,ref_key:"childComponent",ref:_,"onEmit:onValidateAndSend":R},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},pn=ke("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)},__groups:{$each:$.forEach({__users:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},__regions:{required:$.withMessage("Поле не должен быть пустым",E)},__start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__end_date:{required:$.withMessage("Поле не должен быть пустым",E)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:$.forEach({users:{required:$.withMessage("Поле не должен быть пустым",E)},text:{required:$.withMessage("Поле не должен быть пустым",E)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await $e(Ue,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ve({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),mn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},_n={class:"flex justify-between"},fn={class:"text-base text-primary-900 font-semibold mb-1"},qn=["onClick"],gn={class:"flex w-full gap-x-4"},bn={class:"flex flex-col gap-y-3"},hn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},yn={class:"flex justify-between"},wn={class:"text-base text-primary-900 font-semibold mb-1"},vn=["onClick"],kn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},xn={class:"text-base text-primary-900 font-semibold mb-2"},ba={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=J(!1),o=J(!1),{t:f}=ne(),s=pe(),n=ue(),_=ie(),r=pn(),p=ce();ye();const k=oe(r.rules,r.model),T=oe(r.trip_plan_rules,r.trip_plan_model),D=te(()=>a.formType===j?"create-decree":"update-decree"),R=te(()=>{const q=new Set;return r.model.__groups.reduce((U,P)=>P.__users&&Array.isArray(P.__users)?U.concat(P.__users):U,[]).filter(U=>q.has(U.id)?!1:(q.add(U.id),!0))}),M=async()=>{var V,w,g,C,G,N;if(t.value=!0,!await k.value.$validate()){A(null,f("fill-required-fields"),B.WARNING);return}const U=le(r.model.__approvers),P=le(r.model.__signers);r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.bookings=[],r.model.trip_plans=[],r.model.approvers=U,r.model.signers=P,r.model.curator=(w=(V=r.model)==null?void 0:V.__curator)==null?void 0:w.user_id,r.model.journal=se.ORDERS_PROTOCOLS,r.model.company=(C=(g=_.currentUser)==null?void 0:g.company)==null?void 0:C.id,r.model.__groups.forEach((F,Q)=>{const I=Q+1;r.model.notices.push(...F.__users.map(X=>{var z,Ce;return{start_date:F.__start_date,end_date:F.__end_date,user:X.id,company:(Ce=(z=_.currentUser)==null?void 0:z.company)==null?void 0:Ce.id,regions:F.__regions.map(Ge=>Ge.id),tags:F.__tags.map(Ge=>({id:Ge.id})),group_id:I}}))}),r.model.sender=(N=(G=_==null?void 0:_.currentUser)==null?void 0:G.top_level_department)==null?void 0:N.id,r.model.files=r.model.__files.map(F=>({id:F.id})),r.model.document_type=s.params.document_type,r.model.document_sub_type=s.params.document_sub_type,r.model.trip_plans=r.trip_plan_model.trip_plans.map(F=>({users:F.users.map(Q=>({id:Q.id})),text:F.text})),o.value=!0},L=()=>{},b=()=>{r.actionAddGroupBlock()},m=()=>{r.actionAddWorkPlanRow(),t.value=!1},x=q=>{r.model.__files=[],q.forEach(U=>{r.model.__files.push(U)})},i=async()=>{const q=await r.actionCreateDocument(r.model);await p.actionCountList(),q?(o.value=!1,A(null,f("document-sent"),B.SUCCESS),await n.replace({name:Be,query:{document_type:s.params.document_type}})):A(null,f("error-occurred"),B.ERROR)},d=async()=>{await r.actionUpdateDocument({id:s.params.id,body:r.model}),await p.actionCountList(),A(null,f("changed"),B.SUCCESS),await n.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},h=()=>{a.formType===j?i():d()};return(q,U)=>{const P=we,V=fe,w=Ie,g=me,C=rt,G=Fe,N=_e,F=Re,Q=Vt;return e(r).detailLoading?(v(),W(P,{key:0})):(v(),S(K,{key:1},[l(e(xe),{title:D.value},{content:c(()=>[l(Ae,{"onEmit:preview":M,"onEmit:clearForm":L},{default:c(()=>[l(N,null,{default:c(()=>[l(V,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":U[0]||(U[0]=I=>e(k).__curator.$model=I),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(V,{"col-class":"w-1/2"},{default:c(()=>[l(w,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":U[1]||(U[1]=I=>e(k).short_description.$model=I),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(V,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(v(!0),S(K,null,de(e(r).model.__groups,(I,X)=>(v(),S("div",mn,[y("div",_n,[y("span",fn,O(e(f)("group"))+"-"+O(X+1),1),X!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(r).actionDeleteGroupBlock(X)},[l(g,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,qn)):ae("",!0)]),l(N,null,{default:c(()=>[l(V,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:I.__users,"onUpdate:modelValue":z=>I.__users=z,error:e(k).__groups.$each.$response.$data[X].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(V,{"col-class":"w-1/2"},{default:c(()=>[l(C,{modelValue:I.__regions,"onUpdate:modelValue":z=>I.__regions=z,error:e(k).__groups.$each.$response.$data[X].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":t.value},{chip:c(({value:z})=>[re(O(z.name),1)]),option:c(({value:z})=>[l(e(he),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(V,{"col-class":"w-1/2"},{default:c(()=>[l(C,{modelValue:I.__tags,"onUpdate:modelValue":z=>I.__tags=z,error:e(k).__groups.$each.$response.$data[X].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":t.value},{chip:c(({value:z})=>[re(O(z.name),1)]),option:c(({value:z})=>[l(e(he),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),l(V,{"col-class":"w-1/2"},{default:c(()=>[y("div",gn,[l(G,{modelValue:I.__start_date,"onUpdate:modelValue":[z=>I.__start_date=z,z=>I.__start_date=e(ge)(z)],error:e(k).__groups.$each.$response.$data[X].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(G,{modelValue:I.__end_date,"onUpdate:modelValue":[z=>I.__end_date=z,z=>I.__end_date=e(ge)(z)],error:e(k).__groups.$each.$response.$data[X].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(F,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:b},null,8,["icon-left"])]),_:1})]),_:1}),y("div",bn,[(v(!0),S(K,null,de(e(r).trip_plan_model.trip_plans,(I,X)=>(v(),S("div",hn,[y("div",yn,[y("span",wn,O(e(f)("plan"))+"-"+O(X+1),1),X!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(r).actionDeleteWorkPlanRow(X)},[l(g,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,vn)):ae("",!0)]),l(N,null,{default:c(()=>[l(V,{"col-class":"w-1/2"},{default:c(()=>[l(Q,{modelValue:I.text,"onUpdate:modelValue":z=>I.text=z,error:e(T).trip_plans.$each.$response.$data[X].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(V,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:I.users,"onUpdate:modelValue":z=>I.users=z,options:R.value,error:e(T).trip_plans.$each.$response.$data[X].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(F,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:m},null,8,["icon-left"]),l(N,null,{default:c(()=>[l(V,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":U[2]||(U[2]=I=>e(r).model.__approvers=I),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(V,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":U[3]||(U[3]=I=>e(k).__signers.$model=I),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(V,{"col-class":"w-full"},{default:c(()=>[y("div",kn,[y("div",xn,O(e(f)("decree")),1),l(Ee,{modelValue:e(k).content.$model,"onUpdate:modelValue":U[4]||(U[4]=I=>e(k).content.$model=I),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":x},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ne,{modelValue:o.value,"onUpdate:modelValue":U[5]||(U[5]=I=>o.value=I),"send-button-loading":e(r).buttonLoading,"onEmit:send":h},{content:c(()=>[l(e(vt),{"compose-model":{...e(r).model,trip_plans:e(r).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},$n={class:"flex gap-x-[6px] items-center px-2 py-1 bg-greyscale-50 rounded-[90px] border-b border-greyscale-200"},Vn={key:0,class:"w-6 h-6 rounded-full flex items-center justify-center text-xs text-white bg-primary-500"},Un={class:"text-greyscale-900 text-sm font-medium"},ot={__name:"BaseChip",props:{item:{type:Object,default:()=>({})},label:{type:String,default:"Example"},type:{type:String,default:"user",validator(u){return["user","location","other"].includes(u)}},clearable:{type:Boolean,default:!1}},emits:["emit:clear"],setup(u,{emit:a}){const t=o=>{a("emit:clear",o)};return(o,f)=>(v(),S("div",$n,[u.type==="user"?(v(),S("div",Vn,O(u.label[0]),1)):u.type==="location"?(v(),W(me,{key:1,icon:e(Wt),class:"text-greyscale-400"},null,8,["icon"])):ae("",!0),y("div",Un,O(u.label),1),u.clearable?(v(),S("div",{key:2,class:"flex justify-center items-center w-5 h-5 rounded-full bg-critic-500 cursor-pointer",onClick:f[0]||(f[0]=s=>t(u.item))},[l(me,{icon:e(Yt),class:"text-white"},null,8,["icon"])])):ae("",!0)]))}},En={key:0,class:"flex flex-col gap-y-5"},Cn={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Sn={class:"text-sm font-medium text-greyscale-500"},Tn={class:"text-green-900"},Ln=y("br",null,null,-1),Rn={class:"flex flex-col gap-y-2"},Dn={class:"text-sm font-medium text-greyscale-500"},Mn=y("span",{class:"text-red-500"},"*",-1),Nn={class:"flex flex-wrap gap-3"},Pn={class:"flex flex-col gap-y-2"},On={key:1,class:"flex flex-col gap-y-5"},In={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Bn={class:"text-sm font-medium text-greyscale-500"},An={class:"text-green-900"},jn={__name:"ChangingBusinessTripModal",setup(u){const a=ut(),{t}=ne(),o=te(()=>{var r;return["reporting","closed"].includes((r=a==null?void 0:a.changingBTModel)==null?void 0:r.trip_status)}),f=()=>{var p;if(!(((p=a.tempVerifications)==null?void 0:p.length)>0)){A(null,"Kamida bitta hudud qo'shing!",B.WARNING);return}a.actionUpdateUserTrip()},s=()=>{a.actionClearTempModel()},n=(r,p)=>{a.tempVerifications.splice(p,1)},_=r=>{r.value.forEach(p=>{a.tempVerifications.some(T=>T.region.id===p.id)||a.tempVerifications.push({region:p,is_visited:!1}),a.tempRegions=[]})};return(r,p)=>{const k=we,T=rt,D=Fe,R=Re,M=Ut;return v(),W(M,{modelValue:e(a).changingBTDialog,"onUpdate:modelValue":p[4]||(p[4]=L=>e(a).changingBTDialog=L),label:"confirm","max-width":"max-w-[631px]",closable:!1},Ht({content:c(()=>{var L,b,m,x;return[e(a).changingBTLoading?(v(),W(k,{key:0,class:"my-16"})):(v(),S(K,{key:1},[o.value?(v(),S("div",On,[y("div",In,[l(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),y("div",Bn,[y("span",An,O((x=(m=e(a).changingBTModel)==null?void 0:m.user)==null?void 0:x.full_name),1),re("ga tegishli bo'lgan xizmat safari yakunlangan! ")])])])):(v(),S("div",En,[y("div",Cn,[l(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),y("div",Sn,[re("Siz rostdan ham "),y("span",Tn,O((b=(L=e(a).changingBTModel)==null?void 0:L.user)==null?void 0:b.full_name),1),re("ga tegishli bo'lgan xizmat safarini o'zgartirmoqchimisiz? "),Ln,re(" Bunda xizmat safari bilan vaqtinchalik amaliyot bajarish to'xtatiladi! ")])]),y("div",Rn,[y("span",Dn,[re(O(e(t)("trip-place"))+" ",1),Mn]),y("div",Nn,[(v(!0),S(K,null,de(e(a).tempVerifications,(i,d)=>{var h;return v(),W(ot,{key:i.id,label:(h=i==null?void 0:i.region)==null?void 0:h.name_uz,clearable:!i.is_visited,type:"location",class:"w-fit","onEmit:clear":q=>n(i,d)},null,8,["label","clearable","onEmit:clear"])}),128))]),l(T,{modelValue:e(a).tempRegions,"onUpdate:modelValue":p[0]||(p[0]=i=>e(a).tempRegions=i),"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",type:"department",placeholder:"add-trip-place",required:"","onEmit:change":p[1]||(p[1]=i=>_(i))},{chip:c(({value:i})=>[re(O(i.name),1)]),option:c(({value:i})=>[l(e(he),{title:i.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue"])]),y("div",Pn,[l(D,{modelValue:e(a).changingBTModel.end_date,"onUpdate:modelValue":[p[2]||(p[2]=i=>e(a).changingBTModel.end_date=i),p[3]||(p[3]=i=>e(a).changingBTModel.end_date=e(ge)(i))],"min-date":new Date(e(a).changingBTModel.start_date),required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","min-date"])])]))],64))]}),_:2},[e(a).changingBTLoading?void 0:{name:"footer",fn:c(()=>[l(R,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:s}),o.value?ae("",!0):(v(),W(R,{key:0,loading:e(a).userTripUpdateButtonLoading,label:"update",rounded:"",shadow:"",type:"button",onClick:f},null,8,["loading"]))]),key:"0"}]),1032,["modelValue"])}}},zn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},Fn={class:"px-6 py-4"},Gn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Wn={class:"flex justify-between"},Yn={class:"text-base text-primary-900 font-semibold mb-1"},Hn={class:"text-sm text-greyscale-500 font-medium"},Xn={class:"text-sm text-greyscale-500 font-medium"},Kn={class:"flex flex-wrap gap-3 mt-1"},Qn={class:"text-sm text-greyscale-500 font-medium"},Jn={class:"text-base text-primary-900 font-semibold mb-2"},Zn={class:"flex items-center justify-between"},ha={__name:"ExtendBusinessTripForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ut(),o=Oe(),f=ie(),s=oe(t.rules,t.model),n=pe(),_=ue(),{t:r}=ne(),p=J(!1);J(!1);const k=te(()=>{const b=a.formType===j;return"trip-notice-for-change"}),T=async()=>{var x,i,d,h,q,U,P,V,w,g,C,G,N;const b=le(t.model.__approvers),m=le(t.model.__signers);if(t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.approvers=b,t.model.signers=m,t.model.curator=(i=(x=t.model)==null?void 0:x.__curator)==null?void 0:i.user_id,t.model.journal=se.INNER,t.model.company=(h=(d=f.currentUser)==null?void 0:d.company)==null?void 0:h.id,t.model.__groups.forEach(F=>{Array.isArray(F.__notices_to_change)&&t.model.notices.push(...F.__notices_to_change.map(Q=>{var I,X,z;return{...a.formType===Se?{id:Q.id}:{},start_date:Q.__start_date,end_date:Q.__end_date,user:Q.user.id,company:(X=(I=f.currentUser)==null?void 0:I.company)==null?void 0:X.id,sender_company:(z=Q.sender_company)==null?void 0:z.id,regions:Q.__regions.map(Ce=>Ce.id),tags:Q.tags.map(Ce=>({id:Ce.id})),route:Q.route,group_id:1,trip_type:"changed_local",...Q.business_trip_id?{id:Q.business_trip_id}:{}}}))}),t.model.sender=(U=(q=f==null?void 0:f.currentUser)==null?void 0:q.top_level_department)==null?void 0:U.id,t.model.files=t.model.__files.map(F=>({id:F.id})),t.model.document_type=n.params.document_type,t.model.document_sub_type=n.params.document_sub_type,t.model.trip_notice_id=((P=n.query)==null?void 0:P.parent_id)||null,a.formType===j&&n.query.notice_id)try{await t.actionUpdateDocument({id:n.query.notice_id,body:t.model}),await A(null,r("notice-saved-successfully"),B.SUCCESS)}catch{}else if(a.formType===j)try{const{data:F}=await t.actionCreateDocument(t.model),Q={approvers:[],signers:[],curator:(w=(V=t.model)==null?void 0:V.__curator)==null?void 0:w.user_id,journal:se.ORDERS_PROTOCOLS,company:f.currentUser.company.id,sender:(C=(g=f==null?void 0:f.currentUser)==null?void 0:g.top_level_department)==null?void 0:C.id,document_type:ee.DECREE,document_sub_type:Z.EXTEND_BUSINESS_TRIP_DECREE,short_description:(G=t.model)==null?void 0:G.short_description,trip_notice_id:F.id,content:F.content};o.decreeModel.content=F.content;try{const I=await t.actionCreateDocument(Q);o.decreeModel.id=(N=I==null?void 0:I.data)==null?void 0:N.id,await _.replace({query:{...n.query,notice_id:F.id,parent_id:n.query.parent_id}}),await A(null,r("notice-saved-successfully"),B.SUCCESS),await t.actionGetDocumentDetailForUpdate(F.id,n.query.parent_id)}catch(I){console.error(I)}}catch(F){console.error(F)}else if(a.formType===Se&&n.params.id)try{await t.actionUpdateDocument({id:n.params.id,body:t.model}),await A(null,r("notice-saved-successfully"),B.SUCCESS)}catch{}},D=b=>{t.model.__files=[],b.forEach(m=>{t.model.__files.push(m)})},R=async b=>{var m;try{((m=n.query)==null?void 0:m.step)!==b.value&&(b.value===Ke&&(await M(),await T()),await o.actionStepClick(_,n,b.value))}catch(x){console.error(x)}},M=async()=>{const b=await s.value.$validate();if(p.value=!0,!b)return A(null,r("fill-required-fields"),B.WARNING),Promise.reject();if(!t.model.__groups.some(x=>Array.isArray(x.__notices_to_change)&&x.__notices_to_change.length>0))return A(null,"Kamida bitta xodim o'zgartirish uchun tanlanishi kerak!",B.WARNING),Promise.reject()},L=async()=>{n.query.step||await _.replace({query:{...n.query,step:Xe}}),o.stepperItems.forEach(b=>b.active=b.value===n.query.step)};return et(async()=>{await L()}),Qe(async()=>{var b,m,x,i,d,h;a.formType===j&&((b=n.query)!=null&&b.notice_id)&&((m=n.query)!=null&&m.parent_id)?await t.actionGetDocumentDetailForUpdate((x=n.query)==null?void 0:x.notice_id,(i=n.query)==null?void 0:i.parent_id):a.formType===j&&((d=n.query)!=null&&d.parent_id)?await t.actionGetParentDocumentDetail(n.query.parent_id):a.formType===Se&&await t.actionGetDocumentDetailForUpdate(n.params.id,(h=n.query)==null?void 0:h.parent_id)}),De(()=>{t.actionResetBTModel()}),(b,m)=>{const x=we,i=Ct,d=fe,h=Ie,q=_e,U=Re;return v(),S("div",{class:Pe(["extend-business-trip-form",{"h-[calc(100vh-200px)]":e(t).detailLoading}])},[e(t).detailLoading?(v(),W(x,{key:0})):(v(),W(e(xe),{key:1,title:k.value},{content:c(()=>{var P,V;return[y("div",zn,[l(i,{items:e(o).stepperItems,"onEmit:stepClick":R},null,8,["items"])]),y("div",Fn,[((P=e(n).query)==null?void 0:P.step)==="trip_info"?(v(),S(K,{key:0},[l(q,null,{default:c(()=>[l(d,{"col-class":"w-1/2"},{default:c(()=>[l(ve,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=w=>e(s).__curator.$model=w),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(h,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=w=>e(s).short_description.$model=w),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(v(!0),S(K,null,de(e(t).model.__groups,(w,g)=>(v(),S("div",Gn,[y("div",Wn,[y("span",Yn,O(e(r)("group"))+"-"+O(g+1),1)]),l(q,null,{default:c(()=>[l(d,{"col-class":"w-full"},{default:c(()=>[l(H,{modelValue:w.__users_to_extend,"onUpdate:modelValue":[C=>w.__users_to_extend=C,C=>e(t).actionAddUsersToExtend(w,g)],label:"select-employees-in-business-trip",options:w.__users,searchable:!1,placeholder:"select-employees","show-nested-error":p.value,disabled:u.formType===e(Se)||e(n).query.notice_id},null,8,["modelValue","onUpdate:modelValue","options","show-nested-error","disabled"])]),_:2},1024),l(d,{"col-class":"w-full"},{default:c(()=>[(v(!0),S(K,null,de(w.__notices_to_change,C=>(v(),W(q,null,{default:c(()=>[l(d,{"col-class":"w-1/3"},{default:c(()=>{var G;return[y("span",Hn,O(e(r)("employees-in-business-trip")),1),l(ot,{label:(G=C.user)==null?void 0:G.full_name,class:"w-fit mt-1"},null,8,["label"])]}),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[y("span",Xn,O(e(r)("trip-place")),1),y("div",Kn,[(v(!0),S(K,null,de(C.__regions,G=>(v(),W(ot,{key:C.id,label:G.name_uz,type:"location",class:"w-fit"},null,8,["label"]))),128))])]),_:2},1024),l(d,{"col-class":"w-1/3"},{default:c(()=>[y("span",Qn,O(e(r)("end-date")),1),l(ot,{label:C.__end_date,type:"other",class:"w-fit mt-1"},null,8,["label"])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]))),256))]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=w=>e(t).model.__approvers=w),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:c(()=>[l(H,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=w=>e(s).__signers.$model=w),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:c(()=>[y("div",{class:Pe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(t).model.content?"border-critic-500":"border-greyscale-200"])},[y("div",Jn,O(e(r)("notice")),1),l(Ee,{modelValue:e(s).content.$model,"onUpdate:modelValue":m[4]||(m[4]=w=>e(s).content.$model=w),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),y("div",Zn,[l(U,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(U,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:m[5]||(m[5]=w=>R({value:e(Ke)}))})])],64)):((V=e(n).query)==null?void 0:V.step)==="decree"?(v(),W(e(St),{key:1,"form-type":u.formType},null,8,["form-type"])):ae("",!0)])]}),_:1},8,["title"])),l(jn,{modelValue:e(t).changingBTDialog,"onUpdate:modelValue":m[6]||(m[6]=P=>e(t).changingBTDialog=P)},null,8,["modelValue"])],2)}}};export{ua as _,pa as a,qa as b,ca as c,ma as d,_a as e,fa as f,ga as g,ba as h,ha as i};
