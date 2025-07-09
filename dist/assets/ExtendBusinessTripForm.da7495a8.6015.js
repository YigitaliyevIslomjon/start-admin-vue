import{_ as _e}from"./BaseRow.d68be8c9.6015.js";import{_ as Ae}from"./BaseInput.992f8f6b.6015.js";import{_ as fe}from"./BaseCol.233aad6f.6015.js";import{v as J,bb as nt,a1 as et,o as v,c as S,i as o,z as c,h as e,b8 as Ze,d as te,du as ze,a as h,t as I,F as Q,e as de,a3 as re,g as ae,f as F,B as Tt,dz as Lt,bj as Dt,n as Oe,r as yt,G as De,as as xe,cN as ee,cO as Z,cl as se,u as ne,b as ue,ao as pe,be as Re,a5 as A,ac as we,a8 as Rt,cY as Qe,dA as Mt,_ as me,dB as Nt,dC as Pt,dD as Ot,dE as It,dF as At,$ as Bt,dG as jt,dH as zt,aX as wt,bt as Ye,c1 as He,dI as Ft,ds as at,E as Gt,cI as Wt,cR as Yt,aE as Ht}from"./index.45af8965.2642.js";import{c as $,r as E,u as oe}from"./index.fd0dbf19.6015.js";import{_ as Xt,a as Kt}from"./BranchMultiSelect.1016df67.6015.js";import{j as Qt,k as Jt,l as Zt,_ as $e,a as eo,h as to,g as oo,b as lo,c as no,d as ro,e as vt,i as ao,m as so,f as io}from"./BasePOA.e6703e04.6015.js";import"./BaseTabMenu.43f95251.6015.js";import"./dialog.esm.fcdc275d.6015.js";import"./tabpanel.esm.92e485c2.6015.js";import"./FileSaver.min.9d1aad1e.6015.js";import{X as _t,s as Te,V as Y,Y as co,Z as Fe,_ as le,$ as Le,a0 as ft,a1 as st,a2 as We,O as lt}from"./index.085662fb.6015.js";import"./BaseTabView.4ad8109e.6015.js";import"./FileTabs.9cb370b4.6015.js";import{_ as H}from"./UserMultiSelect.a82edc11.6015.js";import{c as uo,u as ie,w as Ve,d as B}from"./axios.config.f8351b75.6015.js";import{u as ye}from"./common.777330a0.6015.js";import{u as ce}from"./count.store.1b2f0b23.6015.js";import{u as dt,b as Ue,c as qe,d as Ee,e as po,f as kt}from"./index.store.4d2e034c.6015.js";import{d as qt,e as Be,c as Me,f as be,B as Je,g as Xe,h as Ke,i as mo,j as xt,M as it,O as _o,T as fo,k as ct,l as $t,C as qo,P as go,m as bo}from"./index.3493ff30.6015.js";import{F as j,a as Se}from"./constants.50c90617.6015.js";import{_ as tt}from"./BaseDropdown.cced2f35.6015.js";import{_ as Ge}from"./BaseCalendar.3dcfabc4.6015.js";import{_ as rt}from"./BaseMultiSelect.34abff61.6015.js";import{f as ho,a as ge}from"./formatDate.492ae28a.6015.js";import{Q as gt}from"./qrcode.vue.esm.f1715608.6015.js";import"./divider.esm.93f693c4.6015.js";import"./dayjs.min.27029bab.6015.js";/* empty css                                                                                         */import{c as yo}from"./Dropdown.eb2cf41c.6015.js";import"./menu.esm.e2b84c85.6015.js";/* empty css                                                      */import"./avatar.esm.35c89024.6015.js";/* empty css                                                      */import"./businessTrip.store.6d88980c.6015.js";/* empty css                                                            */import"./accordiontab.esm.575b3dd7.6015.js";import"./common.store.d107e4aa.6015.js";import{_ as he}from"./WithRadio.7192eae1.6015.js";import"./radiobutton.esm.cd6f4839.6015.js";import"./checkbox.esm.05cb5dce.6015.js";import"./index.es6.f9050ba3.6015.js";import{_ as Vt}from"./ShortDescription.eed9b688.6015.js";import{_ as bt}from"./BaseBrickRadio.df9f3079.6015.js";import{_ as wo}from"./BaseLabel.915c7d47.6015.js";import{K as vo}from"./main.3743be2c.6015.js";import{a as ko}from"./index.bfaf4adb.6015.js";import{_ as xo}from"./WithSelectable.67e46005.6015.js";import{_ as $o}from"./BaseBrickTab.edf70088.6015.js";import{_ as Vo}from"./BaseFileUpload.69ac23b1.6015.js";import{_ as Uo}from"./BaseFroalaEditor.18fedce4.6015.js";import"./BaseCalendar.vue_vue_type_style_index_0_lang.33b18346.6015.js";import"./multiselect.esm.5b91e7d5.6015.js";/* empty css                                                             */import"./dropdown.esm.152da9c9.6015.js";/* empty css                                                          */import"./textarea.esm.642c0667.6015.js";import"./overlaypanel.esm.d5a0c07c.6015.js";/* empty css                                                              */import"./BaseTinyEditor.vue_vue_type_style_index_0_lang.1cce55de.6015.js";/* empty css                                                                            */import"./review.store.47d4a0bb.6015.js";/* empty css                                                       */import{_ as Ut}from"./BaseDialog.99d516bc.6015.js";const Eo={class:"user-select"},ke={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(u,{emit:a}){const t=u,l=J([]),g=nt(t,"modelValue"),s=async r=>{let{data:_}=await uo.get(`${t.apiUrl}/`,r);_.hasOwnProperty("results")?l.value=_.results:l.value=_};return et(async()=>{await s(t.apiParams)}),(r,_)=>(v(),S("div",Eo,[o(tt,{modelValue:e(g),"onUpdate:modelValue":_[0]||(_[0]=n=>Ze(g)?g.value=n:null),options:l.value,"onUpdate:options":_[1]||(_[1]=n=>l.value=n),error:t.error,"api-url":t.apiUrl,"api-params":t.apiParams,"option-label":"full_name",label:t.label,placeholder:t.placeholder,required:t.required,searchable:"","onEmit:change":_[2]||(_[2]=n=>a("emit:change",n))},{option:c(({option:n})=>[o(e(xo),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},Co={class:"business-trip-decree-template-view letter-template"},So={class:"flex flex-col text-sm font-medium mt-4"},To=h("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),Lo=["innerHTML"],Do=["innerHTML"],Ro={class:"employees-table text-sm mt-4"},Mo={class:"w-full"},No=h("tr",{class:"text-center"},[h("td",{class:"border-2 p-1"},"№"),h("td",{class:"border-2 p-1"},"F.I.SH"),h("td",{class:"border-2 p-1"},"Departament va lavozim"),h("td",{class:"border-2 p-1"},"Yo'nalish"),h("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Po={class:"text-center"},Oo={class:"border-2 p-1"},Io={class:"border-2 p-1"},Ao={class:"border-2 p-1"},Bo=h("br",null,null,-1),jo={class:"border-2 p-1"},zo={class:"flex flex-col gap-y-1"},Fo={key:0},Go={class:"border-2 p-1 w-[100px]"},Wo=h("br",null,null,-1),Yo={class:"indent-8 mt-2 text-sm text-justify"},Ho=h("div",null,"xizmat safariga yuborilsin.",-1),Xo=h("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),Ko=h("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),Qo=h("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Jo={key:0},Zo=h("span",{class:"font-semibold"},"Asos: ",-1),el=h("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),tl=h("div",null," O‘zR MKning 287-moddasi; ",-1),ol=h("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),ll={class:"mt-6 pb-2 px-4"},nl={class:"text-sm font-semibold block"},rl={class:"text-sm font-semibold block"},al={class:"text-sm font-semibold block"},sl={class:"text-sm font-semibold block"},il={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(u){const a=u,t=dt(),l=te(()=>{var _;return a.preview?ie().currentUser:(_=a.composeModel)==null?void 0:_.author}),g=te(()=>{var _,n,p;return a.preview?(_=a.composeModel)==null?void 0:_.__employees.map(k=>({empFullName:k.full_name,empDepName:k.top_level_department.name,empPositionName:k.position.name,destinations:a.composeModel.__companies,startDate:a.composeModel.start_date,endDate:a.composeModel.end_date})):(p=(n=a.composeModel)==null?void 0:n.notices)==null?void 0:p.map(k=>({empFullName:k.user.full_name,empDepName:k.user.top_level_department.name,empPositionName:k.user.position.name,destinations:k.destinations,startDate:k.start_date,endDate:k.end_date}))}),s=te(()=>{var n,p,k;if(a.preview)return[(n=a.composeModel)==null?void 0:n.__curator];const _=(p=a.composeModel)==null?void 0:p.signers.find(T=>T.type===ze.BASIC_SIGNER);return _?[_]:[(k=a.composeModel)==null?void 0:k.curator].filter(Boolean)}),r=te(()=>{var _,n;return a.preview?(_=a.composeModel)==null?void 0:_.__signers:(n=a.composeModel)==null?void 0:n.signers.filter(p=>p.type===ze.SIGNER)});return(_,n)=>{var T,M,L,N,D,b,m,x;const p=fe,k=_e;return v(),S("div",Co,[o(e(Qt)),o(e(Jt),{"dep-name":(M=(T=l.value)==null?void 0:T.top_level_department)==null?void 0:M.name},null,8,["dep-name"]),h("div",So,[h("span",null," № "+I((L=a.composeModel)==null?void 0:L.register_number),1),h("span",null,I(((N=a.composeModel)==null?void 0:N.register_date)&&e(ho)((D=a.composeModel)==null?void 0:D.register_date)),1)]),To,e(t).historyShow?(v(),S("div",{key:0,class:"text-justify",innerHTML:e(t).historyContent},null,8,Lo)):(v(),S("div",{key:1,class:"text-justify",innerHTML:(b=a.composeModel)==null?void 0:b.content},null,8,Do)),h("div",Ro,[h("table",Mo,[No,g.value&&g.value.length?(v(!0),S(Q,{key:0},de(g.value,(i,d)=>(v(),S("tr",Po,[h("td",Oo,I(d+1),1),h("td",Io,I(i.empFullName),1),h("td",Ao,[re(I(i.empDepName)+" ",1),Bo,re(" "+I(i.empPositionName),1)]),h("td",jo,[h("div",zo,[(v(!0),S(Q,null,de(i.destinations,(y,f)=>(v(),S("span",null,[re(I(y.name)+" ",1),f!==i.destinations.length-1?(v(),S("span",Fo,",")):ae("",!0)]))),256))])]),h("td",Go,[re(I(i.startDate)+" ",1),Wo,re(" "+I(i.endDate),1)])]))),256)):ae("",!0)])]),h("div",Yo,[Ho,Xo,Ko,Qo,(m=u.composeModel)!=null&&m.trip_notice_register_number?(v(),S("div",Jo,[Zo,re(I((x=u.composeModel)==null?void 0:x.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):ae("",!0),el,tl,ol]),h("div",ll,[(v(!0),S(Q,null,de(s.value,i=>(v(),F(k,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[o(p,{"col-class":"w-1/3"},{default:c(()=>[h("span",nl,I(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(v(),F(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:c(()=>[h("span",rl,I(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(v(!0),S(Q,null,de(r.value,i=>(v(),F(k,{key:i.id,class:"mb-2 items-center"},{default:c(()=>[o(p,{"col-class":"w-1/3"},{default:c(()=>[h("span",al,I(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:c(()=>[i.is_signed?(v(),F(gt,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(p,{"col-class":"w-1/3"},{default:c(()=>[h("span",sl,I(e(_t)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),o(e(Zt),{"compose-model":a.composeModel,author:l.value},null,8,["compose-model","author"])])}}};var dl=`
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
`,cl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Tt.extend({name:"editor",css:dl,classes:cl});(function(){try{return window.Quill}catch{return null}})();const Ce={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(u){return["froala","tiny"].includes(u)}}},emits:["update:modelValue","emit:fileUpload"],setup(u,{emit:a}){const t=u,l=nt(t,"modelValue"),g=J([{title:"text",slot:"editor",icon:Lt},{title:"file",slot:"file",icon:Dt}]);return(s,r)=>(v(),F($o,{"tab-panel-list":g.value,"panel-container-class":"px-0"},{editor:c(()=>[u.editor==="froala"?(v(),F(Uo,{key:0,modelValue:e(l),"onUpdate:modelValue":r[0]||(r[0]=_=>Ze(l)?l.value=_:null)},null,8,["modelValue"])):(v(),F(yo,{key:1,modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=_=>Ze(l)?l.value=_:null)},null,8,["modelValue"]))]),file:c(()=>[h("div",{class:Oe(t.fileUploadContainerClasses)},[o(Vo,{files:t.files,"onEmit:fileUpload":r[2]||(r[2]=_=>a("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ul={class:"flex flex-col justify-between h-full"},pl={class:"px-6 py-4 overflow-y-auto"},ml={class:"actions p-6"},je={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(u,{emit:a}){return(t,l)=>{const g=De;return v(),S("div",ul,[h("div",pl,[yt(t.$slots,"default")]),h("div",ml,[o(g,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=s=>a("emit:clearForm"))}),o(g,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=s=>a("emit:preview"))})])])}}},_l=xe("sd-stores-inner",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,document_type:ee.INNER,document_sub_type:Z.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:se.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__departments:{required:$.withMessage("Поле не должен быть пустым",E)},__approvers:{},__signers:{required:$.withMessage("Поле не должен быть пустым",E)}}}},actions:{async actionCreateDocument(u){let a={...u,type:qt,sub_type:qt};this.buttonLoading=!0;const{response:t,error:l}=await Ve(Ee,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):Promise.reject(l)},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers),this.model.__departments=await co(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),fl={class:"font-semibold text-xl"},Ne={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(u,{emit:a}){const l=nt(u,"modelValue"),{t:g}=ne();return(s,r)=>{const _=De,n=Ut;return v(),F(n,{modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=p=>Ze(l)?l.value=p:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[h("span",fl,I(e(g)("preview")),1)]),content:c(()=>[yt(s.$slots,"content")]),footer:c(()=>[o(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(_,{label:u.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:u.sendButtonLoading,onClick:r[0]||(r[0]=p=>a("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},ca={__name:"InnerForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ie(),l=_l();ye();const g=ce(),s=J(!1);J(null);const{t:r}=ne(),_=ue(),n=pe(),p=oe(l.rules,l.model),k=async()=>{await p.value.$validate()&&(s.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(m=>m.id),l.model.files=[],l.model.files=l.model.__files.map(m=>({id:m.id})),l.model.journal=se.INNER,l.model.sender=t.currentUser.top_level_department.id,l.model.approvers=le(l.model.__approvers),l.model.signers=le(l.model.__signers),l.model.document_type=n.params.document_type,l.model.document_sub_type=n.params.document_sub_type,l.model.receiver&&delete l.model.receiver)},T=()=>{a.formType===j?M():L()},M=async()=>{const b=await l.actionCreateDocument(l.model);await g.actionCountList(),b?(s.value=!1,B(null,r("document-sent"),A.SUCCESS),await _.replace({name:Be,query:{document_type:ee.INNER}})):B(null,r("error-occurred"),A.ERROR)},L=async()=>{await l.actionUpdateDocument({id:n.params.id,body:l.model}),await g.actionCountList(),B(null,r("document-sent"),A.SUCCESS),await _.replace({name:Me,params:{id:n.params.id,document_type:ee.INNER,document_sub_type:Z.SERVICE_LETTER}})},N=()=>{console.log("Clear Form")},D=b=>{l.model.__files=[],b.forEach(m=>{l.model.__files.push(m)})};return et(async()=>{n.params.id&&await l.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Fe(l.model)}),(b,m)=>{const x=we,i=fe,d=Ae,y=_e;return e(l).detailLoading?(v(),F(x,{key:0})):(v(),S(Q,{key:1},[o(e($e),{title:a.formType===e(j)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[o(je,{"onEmit:preview":k,"onEmit:clearForm":N},{default:c(()=>[o(y,null,{default:c(()=>[o(i,{"col-class":"w-1/2"},{default:c(()=>[o(Xt,{modelValue:e(p).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(p).__departments.$model=f),error:e(p).__departments},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=f=>e(p).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:c(()=>[o(Ce,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[4]||(m[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=f=>s.value=f),"send-button-loading":e(l).buttonLoading,"onEmit:send":T},{content:c(()=>{var f,U;return[o(eo,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(U=(f=e(t).currentUser)==null?void 0:f.top_level_department)==null?void 0:U.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},ql=xe("sd-store-application",{state:()=>{var u,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(u=ie().currentUser)==null?void 0:u.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__approvers:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{}}}},actions:{async actionCreateDocument(u){let a={...u};this.buttonLoading=!0;const{response:t,error:l}=await Ve(Ee,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers.filter(t=>t.type===ze.SIGNER)),this.model.__curator=await Le([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Et=xe("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:ie().currentUser.company.id,curator:null,document_type:ee.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:se.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:$.withMessage("Поле не должен быть пустым",E)},register_date:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__negotiators:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ee,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__signers=await Y(a.signers.filter(t=>t.type!==ze.NEGOTIATOR)),this.model.__negotiators=await Y(a.signers.filter(t=>t.type===ze.NEGOTIATOR)),this.model.__approvers=await Y(a.approvers),this.model.__curator=await Le([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),ua={__name:"ApplicationForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ie(),l=ql();ye();const g=ce();Et();const s=J(!1);J(null);const{t:r}=ne(),_=ue(),n=pe(),p=oe(l.rules,l.model),k=async()=>{var m,x,i,d,y;await p.value.$validate()&&(s.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(m=t==null?void 0:t.currentUser)==null?void 0:m.id}],l.model.sender=(i=(x=t==null?void 0:t.currentUser)==null?void 0:x.top_level_department)==null?void 0:i.id,l.model.curator=(y=(d=l==null?void 0:l.model)==null?void 0:d.__curator)==null?void 0:y.user_id,l.model.journal=se.APPLICATION,l.model.document_type=n.params.document_type,l.model.document_sub_type=n.params.document_sub_type,l.model.approvers=le(l.model.__approvers))},T=async()=>{},M=()=>{a.formType===j?L():N()},L=async()=>{const b=await l.actionCreateDocument(l.model);await g.actionCountList(),b?(s.value=!1,B(null,r("document-sent"),A.SUCCESS),await _.replace({name:Be,query:{document_type:ee.APPLICATION}})):B(null,r("error-occurred"),A.ERROR)},N=async()=>{await l.actionUpdateDocument({id:n.params.id,body:l.model}),await g.actionCountList(),B(null,r("document-sent"),A.SUCCESS),await _.replace({name:Me,params:{id:n.params.id,document_type:ee.APPLICATION,document_sub_type:Z.LABOR_LEAVE}})},D=b=>{l.model.__files=[],b.forEach(m=>{l.model.__files.push(m)})};return et(async()=>{n.params.id&&await l.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Fe(l.model)}),(b,m)=>{const x=we,i=fe,d=_e;return e(l).detailLoading?(v(),F(x,{key:0})):(v(),S(Q,{key:1},[o(e($e),{title:a.formType===e(j)?"create-sd-application":"update-sd-application"},{content:c(()=>[o(je,{"onEmit:preview":k,"onEmit:clearForm":T},{default:c(()=>[o(d,null,{default:c(()=>[o(i,{"col-class":"w-1/2"},{default:c(()=>[o(ke,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=y=>e(p).__curator.$model=y),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":m[1]||(m[1]=y=>e(p).__approvers.$model=y),error:e(p).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[2]||(m[2]=y=>e(p).__signers.$model=y),disabled:"",label:"signers",placeholder:e(t).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),o(i,{"col-class":"w-full"},{default:c(()=>[o(Ce,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[3]||(m[3]=y=>e(p).content.$model=y),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=y=>s.value=y),"send-button-loading":e(l).buttonLoading,"onEmit:send":M},{content:c(()=>[o(to,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:a.formType===e(j)?e(t).currentUser:e(l).model.__signers[0].user,signers:a.formType===e(j)?[e(t).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=xe("sd-notice-store",{state:()=>(ie(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:ee.NOTICE,document_sub_type:Z.BUSINESS_TRIP,journal:se.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:$.withMessage("Поле не должен быть пустым",E)},start_date:{required:$.withMessage("Поле не должен быть пустым",E)},route:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__companies:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__employees:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ee,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a=!1){try{this.detailLoading=!0;const{data:t}=await qe(u);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Le([],t.curator.id,!1),this.model.__employees=await Y(t.notices),a?(this.model.__approvers=await Y(t.approvers.filter(l=>{var g,s;return((g=l==null?void 0:l.user)==null?void 0:g.id)!==((s=t==null?void 0:t.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers),this.model.__companies=await ft(t.notices[0].destinations),this.model.__tags=await st(t.tags),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(u,a){try{this.detailLoading=!0;const{data:t}=await qe(u),l=await qe(a);Te(this.model,t),this.model.__companies=[],this.model.__curator=await Le([],t.curator.id,!1),this.model.__employees=await Y(l.data.notices),this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers),this.model.__companies=await ft(l.data.notices[0].destinations),this.model.__tags=await st(t.tags),this.model.start_date=l.data.notices[0].start_date,this.model.end_date=l.data.notices[0].end_date,this.model.__tags=t.tags,this.model.route=l.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),bl={class:"flex w-full gap-x-4"},pa={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=ne(),l=pe(),g=ue(),s=ie(),r=gl(),_=ce();ye();const n=oe(r.rules,r.model),p=J(!1),k=te(()=>{const i=a.formType===j,d=l.params.document_sub_type;return d===Z.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":d===Z.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),T=te(()=>{var i,d;return l.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL&&((i=l==null?void 0:l.query)==null?void 0:i.compose_id)&&((d=l==null?void 0:l.query)==null?void 0:d.document_sub_type)===Z.BUSINESS_TRIP}),M=te(()=>{var i;return!!(l.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL&&((i=r==null?void 0:r.model)!=null&&i.trip_notice_id))});Rt(()=>r.model.__tags,i=>{if(a.formType===j)if(i&&i.length){let d=`${i.map(y=>y.name_uz).join(", ")} yuzasidan`;r.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else r.model.short_description=null});const L=async()=>{var d,y,f,U,O;await n.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=le(r.model.__approvers),r.model.signers=le(r.model.__signers),r.model.curator=(y=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:y.user_id,r.model.journal=l.params.document_type===ee.DECREE||l.params.document_type===ee.ORDER?se.ORDERS_PROTOCOLS:se.INNER,r.model.company=s.currentUser.company.id,r.model.notices=r.model.__employees.map(V=>({start_date:r.model.start_date,end_date:r.model.end_date,user:V.id,route:r.model.route,companies:r.model.__companies.map(w=>w.id)})),r.model.sender=(U=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:U.id,r.model.tags=r.model.__tags.map(V=>({id:V.id})),r.model.files=r.model.__files.map(V=>({id:V.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,T.value&&(r.model.trip_notice_id=(O=l==null?void 0:l.query)==null?void 0:O.compose_id),p.value=!0)},N=()=>{},D=i=>{r.model.__files=[],i.forEach(d=>{r.model.__files.push(d)})},b=async()=>{T.value&&(r.model.notices=[]);const i=await r.actionCreateDocument(r.model);await _.actionCountList(),i?(p.value=!1,B(null,t("document-sent"),A.SUCCESS),await g.replace({name:Be,query:{document_type:l.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL?ee.DECREE:l.params.document_sub_type===Z.BUSINESS_TRIP_ORDER_LOCAL?ee.ORDER:ee.NOTICE}})):B(null,t("error-occurred"),A.ERROR)},m=async()=>{(T.value||M.value)&&(r.model.notices=[]),await r.actionUpdateDocument({id:l.params.id,body:r.model}),await _.actionCountList(),B(null,t("changed"),A.SUCCESS),await g.replace({name:Me,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},x=()=>{a.formType===j?b():m()};return Qe(async()=>{l.params.id&&l.query.trip_notice_id&&l.params.document_sub_type===Z.BUSINESS_TRIP_DECREE_LOCAL?await r.actionGetDocumentDetailForUpdateForCustomUse(l.params.id,l.query.trip_notice_id):l.params.id?await r.actionGetDocumentDetailForUpdate(l.params.id):T.value&&await r.actionGetDocumentDetailForUpdate(l.query.compose_id,!0)}),Re(()=>{Fe(r.model)}),(i,d)=>{const y=we,f=fe,U=Ge,O=tt,V=Ae,w=_e;return e(r).detailLoading?(v(),F(y,{key:0})):(v(),S(Q,{key:1},[o(e($e),{title:k.value},{content:c(()=>[o(je,{"onEmit:preview":L,"onEmit:clearForm":N},{default:c(()=>[o(w,null,{default:c(()=>[o(f,{"col-class":"w-1/2"},{default:c(()=>[o(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=q=>e(n).__curator.$model=q),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=q=>e(n).__employees.$model=q),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:T.value||M.value},null,8,["modelValue","error","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(Kt,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=q=>e(n).__companies.$model=q),error:e(n).__companies,"text-truncate":"",disabled:T.value||M.value},null,8,["modelValue","error","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(rt,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=q=>e(n).__tags.$model=q),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:q})=>[re(I(q.name),1)]),option:c(({value:q})=>[o(e(he),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[h("div",bl,[o(U,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=q=>e(n).start_date.$model=q),d[5]||(d[5]=q=>e(n).start_date.$model=e(ge)(q))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:T.value||M.value},null,8,["modelValue","error","min-date","disabled"]),o(U,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=q=>e(n).end_date.$model=q),d[7]||(d[7]=q=>e(n).end_date.$model=e(ge)(q))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:T.value||M.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(O,{modelValue:e(n).route.$model,"onUpdate:modelValue":d[8]||(d[8]=q=>e(n).route.$model=q),error:e(n).route,options:e(Mt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:T.value||M.value},null,8,["modelValue","error","options","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=q=>e(r).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=q=>e(n).__signers.$model=q),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(V,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=q=>e(n).short_description.$model=q),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:c(()=>[o(Ce,{modelValue:e(n).content.$model,"onUpdate:modelValue":d[12]||(d[12]=q=>e(n).content.$model=q),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:p.value,"onUpdate:modelValue":d[13]||(d[13]=q=>p.value=q),"send-button-loading":e(r).buttonLoading,"onEmit:send":x},{content:c(()=>[e(l).params.document_sub_type===e(Z).BUSINESS_TRIP_DECREE_LOCAL?(v(),F(e(il),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(Z).BUSINESS_TRIP_ORDER_LOCAL?(v(),F(e(oo),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(v(),F(e(lo),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},ma={__name:"OrderForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=Et(),l=ce(),g=ie(),s=pe(),r=ue(),_=oe(t.rules,t.model),{t:n}=ne(),p=J(!1),k=async()=>{var m,x,i,d;await _.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.approvers=le(t.model.__approvers),t.model.curator=(x=(m=t==null?void 0:t.model)==null?void 0:m.__curator)==null?void 0:x.user_id,t.model.sender=(d=(i=g==null?void 0:g.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,t.model.files=t.model.__files.map(y=>({id:y.id})),t.model.document_type=s.params.document_type,t.model.document_sub_type=s.params.document_sub_type,t.model.journal=se.ORDERS_PROTOCOLS,t.model.register_date=ge(t.model.register_date),t.model.__negotiators.forEach(y=>{t.model.signers.push(y.hasOwnProperty("user")?{id:y.id,user:y.user.id,type:ze.NEGOTIATOR}:{user:y.id,type:ze.NEGOTIATOR})}),s.query.compose_id&&(t.model.trip_notice_id=s.query.compose_id),p.value=!0)},T=()=>{},M=async()=>{try{const b=await t.actionCreateDocument(t.model);await l.actionCountList(),b&&(p.value=!1,B(null,n("document-sent"),A.SUCCESS),await r.replace({name:Be,query:{document_type:ee.ORDER}}))}catch{B(null,n("error-occurred"),A.ERROR)}},L=async()=>{try{const b=await t.actionUpdateDocument({id:s.params.id,body:t.model});await l.actionCountList(),B(null,n("changed"),A.SUCCESS),await r.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{B(null,n("error-occurred"),A.ERROR)}},N=()=>{a.formType===j?M():L()},D=b=>{t.model.__files=[],b.forEach(m=>{t.model.__files.push(m)})};return et(async()=>{s.params.id&&await t.actionGetDocumentDetailForUpdate(s.params.id)}),Re(()=>{Fe(t.model)}),(b,m)=>{const x=we,i=fe,d=Ae,y=Ge,f=_e;return e(t).detailLoading?(v(),F(x,{key:0})):(v(),S(Q,{key:1},[o(e($e),{title:a.formType===e(j)?"create-order":"update-order"},{content:c(()=>[o(je,{"onEmit:preview":k,"onEmit:clearForm":T},{default:c(()=>[o(f,null,{default:c(()=>[o(i,{"col-class":"w-1/2"},{default:c(()=>[o(ke,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=U=>e(_).__curator.$model=U),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(d,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=U=>e(_).register_number.$model=U),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(y,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=U=>e(_).register_date.$model=U),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=U=>e(t).model.__approvers=U),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=U=>e(_).__negotiators.$model=U),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:c(()=>[o(Ce,{modelValue:e(_).content.$model,"onUpdate:modelValue":m[5]||(m[5]=U=>e(_).content.$model=U),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:p.value,"onUpdate:modelValue":m[6]||(m[6]=U=>p.value=U),"send-button-loading":e(t).buttonLoading,"onEmit:send":N},{content:c(()=>[o(e(no),{"compose-model":e(t).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},hl=xe("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ee,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);Te(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers)}catch{}finally{this.detailLoading=!1}}}}),_a={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=ne(),l=pe(),g=ue(),s=ie(),r=hl(),_=ce();ye();const n=J(!1),p=oe(r.rules,r.model),k=async()=>{var m,x,i,d;await p.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=le(r.model.__approvers),r.model.signers=le(r.model.__signers),r.model.curator=(x=(m=r==null?void 0:r.model)==null?void 0:m.__curator)==null?void 0:x.user_id,r.model.journal=se.INNER,r.model.company=s.currentUser.company.id,r.model.sender=(d=(i=s==null?void 0:s.currentUser)==null?void 0:i.top_level_department)==null?void 0:d.id,r.model.files=r.model.__files.map(y=>({id:y.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,n.value=!0)},T=()=>{},M=b=>{r.model.__files=[],b.forEach(m=>{r.model.__files.push(m)})},L=async()=>{const b=await r.actionCreateDocument(r.model);await _.actionCountList(),b?(n.value=!1,B(null,t("document-sent"),A.SUCCESS),await g.replace({name:Be,query:{document_type:ee.NOTICE}})):B(null,t("error-occurred"),A.ERROR)},N=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await _.actionCountList(),B(null,t("changed"),A.SUCCESS),await g.replace({name:Me,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},D=()=>{a.formType===j?L():N()};return Qe(async()=>{l.params.id&&await r.actionGetDocumentDetailForUpdate(l.params.id)}),Re(()=>{Fe(r.model)}),(b,m)=>{const x=we,i=fe,d=Ae,y=_e;return e(r).detailLoading?(v(),F(x,{key:0})):(v(),S(Q,{key:1},[o(e($e),{title:a.formType===e(j)?"create-notice":"update-notice"},{content:c(()=>[o(je,{"onEmit:preview":k,"onEmit:clearForm":T},{default:c(()=>[o(y,null,{default:c(()=>[o(i,{"col-class":"w-1/2"},{default:c(()=>[o(ke,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(p).__curator.$model=f),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(d,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(p).short_description.$model=f),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=f=>e(r).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(p).__signers.$model=f),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:c(()=>[o(Ce,{modelValue:e(p).content.$model,"onUpdate:modelValue":m[4]||(m[4]=f=>e(p).content.$model=f),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:n.value,"onUpdate:modelValue":m[5]||(m[5]=f=>n.value=f),"send-button-loading":e(r).buttonLoading,"onEmit:send":D},{content:c(()=>[o(e(ro),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},yl=xe("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){const a={...u};delete a.bookings,delete a.notices,delete a.trip_plans,this.buttonLoading=!0;const{response:t,error:l}=await Ve(Ee,a);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:u,body:a}){const t={...a};delete t.bookings,delete t.notices,delete t.trip_plans;try{this.buttonLoading=!0;const{data:l}=await Ue({id:u,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){try{this.detailLoading=!0;const{data:t}=await qe(u);Te(this.model,t),this.model.__curator=await Le([],t.curator.id,!1),this.model.__approvers=await Y(t.approvers),this.model.__signers=await Y(t.signers)}catch{}finally{this.detailLoading=!1}}}}),fa={__name:"DecreeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=ne(),l=pe(),g=ue(),s=ie(),r=ce();ye();const _=J(!1),n=yl(),p=dt(),k=oe(n.rules,n.model),T=async()=>{var i,d,y,f;await k.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=le(n.model.__approvers),n.model.signers=le(n.model.__signers),n.model.curator=(d=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:d.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=s.currentUser.company.id,n.model.sender=(f=(y=s==null?void 0:s.currentUser)==null?void 0:y.top_level_department)==null?void 0:f.id,n.model.files=n.model.__files.map(U=>({id:U.id})),n.model.document_type=l.params.document_type,n.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(n.model.trip_notice_id=l.query.compose_id),_.value=!0)},M=()=>{},L=x=>{n.model.__files=[],x.forEach(i=>{n.model.__files.push(i)})},N=async()=>{const x=await n.actionCreateDocument(n.model);await r.actionCountList(),x?(_.value=!1,B(null,t("document-sent"),A.SUCCESS),await g.replace({name:Be,query:{document_type:l.params.document_type}})):B(null,t("error-occurred"),A.ERROR)},D=async()=>{await n.actionUpdateDocument({id:l.params.id,body:n.model}),await r.actionCountList(),B(null,t("changed"),A.SUCCESS),await g.replace({name:Me,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},b=()=>{a.formType===j?N():D()},m=async x=>{const{data:i}=await p.actionGetDocumentDetail(x);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return Qe(async()=>{a.formType===j&&l.query.compose_id?await m(l.query.compose_id):a.formType===Se&&l.query.trip_notice_id&&l.params.id?(await n.actionGetDocumentDetailForUpdate(l.params.id,null),await m(l.query.trip_notice_id)):a.formType===Se&&l.params.id&&await n.actionGetDocumentDetailForUpdate(l.params.id,null)}),Re(()=>{Fe(n.model)}),(x,i)=>{const d=we,y=fe,f=Ae,U=_e;return e(n).detailLoading?(v(),F(d,{key:0})):(v(),S(Q,{key:1},[o(e($e),{title:a.formType===e(j)?"create-decree":"update-decree"},{content:c(()=>[o(je,{"onEmit:preview":T,"onEmit:clearForm":M},{default:c(()=>[o(U,null,{default:c(()=>[o(y,{"col-class":"w-1/2"},{default:c(()=>[o(ke,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=O=>e(k).__curator.$model=O),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(y,{"col-class":"w-1/2"},{default:c(()=>[o(f,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=O=>e(k).short_description.$model=O),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(y,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=O=>e(n).model.__approvers=O),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(y,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=O=>e(k).__signers.$model=O),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(y,{"col-class":"w-full"},{default:c(()=>[o(Ce,{modelValue:e(k).content.$model,"onUpdate:modelValue":i[4]||(i[4]=O=>e(k).content.$model=O),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:_.value,"onUpdate:modelValue":i[5]||(i[5]=O=>_.value=O),"send-button-loading":e(n).buttonLoading,"onEmit:send":b},{content:c(()=>[o(e(vt),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wl=xe("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:$.withMessage("Поле не должен быть пустым",E)},start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},__user:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ee,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:a}=await qe(u);return Te(this.model,a),this.model.__curator=await Le([],a.curator.id,!1),this.model.__approvers=await Y(a.approvers),this.model.__signers=await Y(a.signers),this.model.__user=await We("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),qa={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=pe(),l=ue(),g=ie(),s=wl();dt();const r=ce(),{t:_}=ne(),n=oe(s.rules,s.model),p=J(!1),k=J([]),T=te(()=>a.formType===j?"create-poa":"update-poa"),M=te(()=>s.model.start_date?new Date(s.model.start_date):new Date),L=async()=>{var d,y,f,U,O,V,w,q,C,W,R,X,K,P,G,z,Pe,ve,pt,mt;if(await n.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=le(s.model.__approvers),s.model.signers=le(s.model.__signers),s.model.curator=(y=(d=s==null?void 0:s.model)==null?void 0:d.__curator)==null?void 0:y.user_id,s.model.user=(U=(f=s==null?void 0:s.model)==null?void 0:f.__user)==null?void 0:U.id,s.model.journal=se.POWER_OF_ATTORNEY,s.model.company=(V=(O=g.currentUser)==null?void 0:O.company)==null?void 0:V.id,s.model.sender=(q=(w=g==null?void 0:g.currentUser)==null?void 0:w.top_level_department)==null?void 0:q.id,s.model.document_type=t.params.document_type,s.model.document_sub_type=t.params.document_sub_type,s.model.content=".",s.model.parent=(W=(C=s.model)==null?void 0:C.__parent)==null?void 0:W.id,!((X=(R=s==null?void 0:s.model)==null?void 0:R.__user)!=null&&X.passport_seria||(P=(K=s==null?void 0:s.model)==null?void 0:K.__user)!=null&&P.passport_number||(z=(G=s==null?void 0:s.model)==null?void 0:G.__user)!=null&&z.passport_issue_date||(ve=(Pe=s==null?void 0:s.model)==null?void 0:Pe.__user)!=null&&ve.passport_issued_by)){B(null,`${(mt=(pt=s.model)==null?void 0:pt.__user)==null?void 0:mt.full_name}: ${_("passport-details-error")}`,A.WARNING);return}p.value=!0}},N=()=>{},D=async()=>{const i=await s.actionCreateDocument(s.model);await r.actionCountList(),i?(p.value=!1,B(null,_("document-sent"),A.SUCCESS),await l.replace({name:Be,query:{document_type:ee.POWER_OF_ATTORNEY}})):B(null,_("error-occurred"),A.ERROR)},b=async()=>{await s.actionUpdateDocument({id:t.params.id,body:s.model}),await r.actionCountList(),B(null,_("changed"),A.SUCCESS),await l.replace({name:Me,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},m=()=>{a.formType===j?D():b()},x=async i=>{const{data:d}=await po({user:i.id,document_sub_type:t.params.document_sub_type,status:5});k.value=d.results};return Qe(async()=>{if(t.params.id){const i=await s.actionGetDocumentDetailForUpdate(t.params.id);i.parent&&(k.value=[i.parent])}}),Re(()=>{Fe(s.model)}),(i,d)=>{const y=we,f=fe,U=Ge,O=tt,V=_e;return e(s).detailLoading?(v(),F(y,{key:0})):(v(),S(Q,{key:1},[o(e($e),{title:T.value},{content:c(()=>[o(je,{"onEmit:preview":L,"onEmit:clearForm":N},{default:c(()=>[o(V,null,{default:c(()=>[o(f,{"col-class":"w-1/2"},{default:c(()=>[o(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=w=>e(n).__curator.$model=w),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(ke,{modelValue:e(n).__user.$model,"onUpdate:modelValue":d[1]||(d[1]=w=>e(n).__user.$model=w),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":d[2]||(d[2]=w=>x(w))},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(U,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[3]||(d[3]=w=>e(n).start_date.$model=w),d[4]||(d[4]=w=>e(n).start_date.$model=e(ge)(w))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(U,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[5]||(d[5]=w=>e(n).end_date.$model=w),d[6]||(d[6]=w=>e(n).end_date.$model=e(ge)(w))],error:e(n).end_date,"min-date":M.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":d[7]||(d[7]=w=>e(s).model.__approvers=w),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[8]||(d[8]=w=>e(n).__signers.$model=w),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(O,{modelValue:e(s).model.__parent,"onUpdate:modelValue":d[9]||(d[9]=w=>e(s).model.__parent=w),options:k.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:p.value,"onUpdate:modelValue":d[10]||(d[10]=w=>p.value=w),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:c(()=>[o(ao,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vl={class:"base-stepper-component flex items-center select-none"},kl=["onClick"],xl={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Ct={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(u,{emit:a}){const{t}=ne(),l=g=>{a("emit:stepClick",g)};return(g,s)=>{const r=me;return v(),S("div",vl,[(v(!0),S(Q,null,de(u.items,(_,n)=>(v(),S("div",{key:_.id,class:"flex items-center"},[h("div",{class:Oe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",_.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:p=>l(_)},[o(r,{icon:_.icon,class:Oe(_.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),h("span",null,I(e(t)(_.label)),1)],10,kl),n<u.items.length-1?(v(),S("div",xl)):ae("",!0)]))),128))])}}},Ie=xe("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList],__users_to_extend:null,__regions_to_extend:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:$.withMessage("Поле не должен быть пустым",E)}},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)},__groups:{$each:$.forEach({__users:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},__regions:{required:$.withMessage("Поле не должен быть пустым",E)},__start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__end_date:{required:$.withMessage("Поле не должен быть пустым",E)},__company:{required:$.withMessage("Поле не должен быть пустым",E)},__route:{required:$.withMessage("Поле не должен быть пустым",E)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:$.forEach({users:{required:$.withMessage("Поле не должен быть пустым",E)},text:{required:$.withMessage("Поле не должен быть пустым",E)}})}},booking_model:{bookings:[{type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:$.forEach({segments:{$each:$.forEach({departure_city:{required:$.withMessage("Поле не должен быть пустым",E)},arrival_city:{required:$.withMessage("Поле не должен быть пустым",E)},date:{required:$.withMessage("Поле не должен быть пустым",E)},time:{required:$.withMessage("Поле не должен быть пустым",E)},segment_class:{required:$.withMessage("Поле не должен быть пустым",E)}})},passengers:{required:$.withMessage("Поле не должен быть пустым",E)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Nt,active:!0,value:Xe},{id:4,label:"decree",icon:Pt,active:!0,value:Ke}],routeTabItems:[{id:1,title:"airplane",icon:Ot,value:Je,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:It,value:mo,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:At,value:xt,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:Bt,value:be},{id:2,title:"complex-route",icon:jt,value:it},{id:3,title:"one-way",icon:zt,value:_o}]}),actions:{async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:t,error:l}=await Ve(Ee,a);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:u,body:a}){const t=await lt(a);try{this.buttonLoading=!0;const{data:l}=await Ue({id:u,body:t});return Promise.resolve(l)}catch(l){return Promise.reject(l)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){var a,t;try{this.detailLoading=!0;const{data:l}=await qe(u),g=await kt(l.id);this.decreeModel=(t=(a=g==null?void 0:g.data)==null?void 0:a.to_composes[0])==null?void 0:t.from_compose,Te(this.model,l),this.model.__curator=await Le([],l.curator.id,!1),this.model.__signers=await Y(l.signers),this.model.__approvers=await Y(l.approvers);const s=Object.values(l.notices.reduce((r,_)=>{const n=_.group_id;return r[n]=r[n]||{group_id:n,items:[]},r[n].items.push(_),r},{}));this.model.__groups=await Promise.all(s.map(async r=>{var N;const _=await Promise.all(r.items.map(async D=>({...await Y([],D.user.id,!1),business_trip_id:D.id}))),n=await st(r.items[0].tags),p=await We("regions",r.items[0].locations),k=await We("companies",[],!1,(N=r.items[0].sender_company)==null?void 0:N.id),T=r.items[0].start_date,M=r.items[0].end_date,L=r.items[0].route;return{__users:_,__tags:n,__regions:p,__start_date:T,__end_date:M,__company:k,__route:L}})),this.trip_plan_model.trip_plans=await Promise.all(l.trip_plans.map(async(r,_)=>({...r,users:await Y(r.users)}))),this.booking_model.bookings=await Promise.all(l.bookings.map(async r=>({type:r.type,route:r.route,segments:await Promise.all(r.segments.map(async _=>({departure_city:await We("regions",[],!1,_.departure_city.id),arrival_city:await We("regions",[],!1,_.arrival_city.id),segment_class:await fo.find(n=>n.value===_.segment_class),date:ge(_.departure_date),time:await so(_.departure_date,_.departure_end_date)}))),passengers:await Y(r.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},async actionStepClick(u,a,t){await u.replace({query:{...a.query,step:t}}),this.stepperItems.forEach(g=>g.active=g.value===t),await wt();const l=document.querySelector(".document-view-aside");l&&l.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(u){this.booking_model.bookings.splice(u,1)},actionChangeRouteSegment(u,a){const t=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[a].segments=u===be?[t(),t()]:[t()]},async actionAddRouteLine(u){this.booking_model.bookings[u].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(u,a){this.booking_model.bookings[u].segments.splice(a,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null,__filialList:[...ye().filialList]}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:be,route:Je,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),$l={class:"trip-info-components"},Vl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ul={class:"flex justify-between"},El={class:"text-base text-primary-900 font-semibold mb-1"},Cl=["onClick"],Sl={class:"flex align-center gap-x-4"},Tl={class:"flex w-full gap-x-4"},Ll={class:"flex w-full gap-x-4"},Dl={class:"text-base text-primary-900 font-semibold mb-2"},Rl={class:"flex items-center justify-between"},ht={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:t}){const l=pe(),g=ue(),s=Ie();ye();const{t:r,locale:_}=ne(),n=oe(s.rules,s.model),p=J(!1),k=D=>{s.model.__files=[],D.forEach(b=>{s.model.__files.push(b)})},T=()=>{s.actionAddGroupBlock()},M=async D=>{const b=await n.value.$validate();if(p.value=!0,!b){B(null,r("fill-required-fields"),A.WARNING);return}t("emit:onValidateAndSend"),await s.actionStepClick(g,l,"decree")},L=(D,b)=>{s.model.__groups[b].__regions=[]},N=(D,b)=>{D.value.forEach(m=>{var x,i,d,y;if(m.id===((y=(d=(i=(x=s.model)==null?void 0:x.__groups[b])==null?void 0:i.__company)==null?void 0:d.region)==null?void 0:y.id)){const f=s.model.__groups[b].__regions.findIndex(U=>U.id===m.id);(f||f===0)&&s.model.__groups[b].__regions.splice(f,1)}})};return a({stepClick:M}),(D,b)=>{const m=fe,x=Ae,i=me,d=tt,y=rt,f=Ge,U=_e,O=De;return v(),S("div",$l,[o(U,null,{default:c(()=>[o(m,{"col-class":"w-1/2"},{default:c(()=>[o(ke,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":b[0]||(b[0]=V=>e(n).__curator.$model=V),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:c(()=>[o(x,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":b[1]||(b[1]=V=>e(n).short_description.$model=V),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(v(!0),S(Q,null,de(e(s).model.__groups,(V,w)=>(v(),S("div",Vl,[h("div",Ul,[h("span",El,I(e(r)("group"))+"-"+I(w+1),1),w!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:q=>e(s).actionDeleteGroupBlock(w)},[o(i,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Cl)):ae("",!0)]),o(U,null,{default:c(()=>[o(m,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:V.__users,"onUpdate:modelValue":q=>V.__users=q,error:e(n).__groups.$each.$response.$data[w].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(m,{"col-class":"w-1/2"},{default:c(()=>[h("div",Sl,[o(d,{modelValue:V.__company,"onUpdate:modelValue":q=>V.__company=q,error:e(n).__groups.$each.$response.$data[w].__company,options:V.__filialList,"onUpdate:options":q=>V.__filialList=q,required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":q=>L(q,w)},{option:c(({option:q})=>[o(e(he),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","onUpdate:options","show-nested-error","onEmit:change"]),o(y,{modelValue:V.__regions,"onUpdate:modelValue":q=>V.__regions=q,error:e(n).__groups.$each.$response.$data[w].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":p.value,class:"w-1/2","onEmit:change":q=>N(q,w)},{chip:c(({value:q})=>[re(I(q.name),1)]),option:c(({value:q})=>[o(e(he),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error","onEmit:change"])])]),_:2},1024),o(m,{"col-class":"w-1/2"},{default:c(()=>[h("div",Tl,[o(y,{modelValue:V.__tags,"onUpdate:modelValue":q=>V.__tags=q,error:e(n).__groups.$each.$response.$data[w].__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":p.value,class:"w-1/2"},{chip:c(({value:q})=>[re(I(q.name),1)]),option:c(({value:q})=>[o(e(he),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),o(d,{modelValue:V.__route,"onUpdate:modelValue":q=>V.__route=q,error:e(n).__groups.$each.$response.$data[w].__route,options:e(s).routeTabItems,"onUpdate:options":b[2]||(b[2]=q=>e(s).routeTabItems=q),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(_)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":p.value,class:"w-1/2"},{option:c(({option:q})=>[o(e(he),{title:e(r)(q.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),o(m,{"col-class":"w-1/2"},{default:c(()=>[h("div",Ll,[o(f,{modelValue:V.__start_date,"onUpdate:modelValue":[q=>V.__start_date=q,q=>V.__start_date=e(ge)(q)],error:e(n).__groups.$each.$response.$data[w].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(f,{modelValue:V.__end_date,"onUpdate:modelValue":[q=>V.__end_date=q,q=>V.__end_date=e(ge)(q)],error:e(n).__groups.$each.$response.$data[w].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(O,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:T},null,8,["icon-left"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":b[3]||(b[3]=V=>e(s).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":b[4]||(b[4]=V=>e(n).__signers.$model=V),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-full"},{default:c(()=>[h("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(s).model.content?"border-critic-500":"border-greyscale-200"])},[h("div",Dl,I(e(r)("notice")),1),o(Ce,{modelValue:e(n).content.$model,"onUpdate:modelValue":b[5]||(b[5]=V=>e(n).content.$model=V),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).model.__files,"onEmit:fileUpload":k},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),h("div",Rl,[o(O,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(O,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:b[6]||(b[6]=V=>M(e(ct)))})])])}}},Ml={class:"work-plan-component"},Nl={class:"flex flex-col gap-y-3"},Pl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ol={class:"flex justify-between"},Il={class:"text-base text-primary-900 font-semibold mb-1"},Al=["onClick"],Bl={class:"flex items-center justify-between mt-10"},jl={class:"flex items-center gap-x-1"},zl={__name:"WorkPlan",setup(u,{expose:a}){const{t}=ne(),l=pe(),g=ue(),s=Ie(),r=oe(s.trip_plan_rules,s.trip_plan_model),_=J(!1),n=te(()=>{const T=new Set;return s.model.__groups.reduce((M,L)=>L.__users&&Array.isArray(L.__users)?M.concat(L.__users):M,[]).filter(M=>T.has(M.id)?!1:(T.add(M.id),!0))}),p=async T=>{const M=await r.value.$validate();if(_.value=!0,!M){B(null,t("fill-required-fields"),A.WARNING);return}const L=s.trip_plan_model.trip_plans.flatMap(D=>{var b;return(b=D.users)==null?void 0:b.map(m=>m.id)}),N=n.value.filter(D=>!L.includes(D.id));N.length?(B(null,`У следующих сотрудников нет плана работы: ${N==null?void 0:N.map(D=>D.first_name+" "+D.last_name).join(", ")}.`,A.WARNING),B(null,"У всех сотрудников должен быть назначен рабочий план.",A.WARNING)):await s.actionStepClick(g,l,T)},k=()=>{s.actionAddWorkPlanRow(),_.value=!1};return a({stepClick:p}),(T,M)=>{const L=me,N=Vt,D=fe,b=_e,m=De;return v(),S("div",Ml,[h("div",Nl,[(v(!0),S(Q,null,de(e(s).trip_plan_model.trip_plans,(x,i)=>(v(),S("div",Pl,[h("div",Ol,[h("span",Il,I(e(t)("plan"))+"-"+I(i+1),1),i!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d=>e(s).actionDeleteWorkPlanRow(i)},[o(L,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Al)):ae("",!0)]),o(b,null,{default:c(()=>[o(D,{"col-class":"w-1/2"},{default:c(()=>[o(N,{modelValue:x.text,"onUpdate:modelValue":d=>x.text=d,error:e(r).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(D,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:x.users,"onUpdate:modelValue":d=>x.users=d,options:n.value,error:e(r).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:k},null,8,["icon-left"]),h("div",Bl,[o(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",jl,[o(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:M[0]||(M[0]=x=>p(e(Xe)))}),o(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:M[1]||(M[1]=x=>p(e($t)))})])])])}}};const Fl={class:"base-time-picker"},Gl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(u){const a=u,t=nt(a,"modelValue"),{t:l}=ne();return(g,s)=>{var n;const r=wo,_=me;return v(),S("div",Fl,[o(r,{label:a.label,required:a.required},null,8,["label","required"]),o(e(vo),{modelValue:e(t),"onUpdate:modelValue":s[0]||(s[0]=p=>Ze(t)?t.value=p:null),"time-picker":"",range:u.range,"cancel-text":e(l)("cancel"),"select-text":e(l)("select"),placeholder:e(l)(u.placeholder),ref:"datePicker",class:Oe({"input-error":((n=u.error)==null?void 0:n.$error)&&u.showNestedError})},{"input-icon":c(()=>[o(_,{icon:e(Ft),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Wl={class:"route-component flex flex-col gap-y-3"},Yl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Hl={class:"flex items-center justify-between"},Xl={class:"flex items-center gap-x-4"},Kl={class:"text-base text-primary-900 font-semibold mb-1"},Ql={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Jl={class:"text-xs text-greyscale-900 font-medium"},Zl=["onClick"],en=["onClick"],tn={class:"text-sm text-primary-500 font-semibold"},on={class:"flex items-center justify-between mt-10"},ln={class:"flex items-center gap-x-1"},nn={__name:"Route",props:{formType:{type:String,default:j}},emits:["emit:onValidateAndSend"],setup(u,{expose:a,emit:t}){const{t:l}=ne(),g=pe(),s=ue(),r=Ie(),_=ye();ie(),ce();const n=oe(r.booking_model_rules,r.booking_model);J(!1);const p=J(!1),k=te(()=>{const i=new Set;return r.model.__groups.reduce((d,y)=>y.__users&&Array.isArray(y.__users)?d.concat(y.__users):d,[]).filter(d=>i.has(d.id)?!1:(i.add(d.id),!0))}),T=i=>{r.routeTabItems.forEach(d=>d.active=d.id===i.id)},M=(i,d)=>{r.routeTypeTabItems.forEach(y=>y.active=y.id===i.id),r.actionChangeRouteSegment(i.value,d)},L=async(i,d=!1)=>{var O,V;const y=await n.value.$validate();if(p.value=!0,!y){B(null,l("fill-required-fields"),A.WARNING);return}const f=(O=r.booking_model.bookings)==null?void 0:O.flatMap(w=>{var q;return(q=w.passengers)==null?void 0:q.map(C=>C==null?void 0:C.id)}),U=(V=k.value)==null?void 0:V.filter(w=>!(f!=null&&f.includes(w.id)));U.length?(B(null,`У следующих сотрудников не назначен маршрут: ${U.map(w=>w.first_name+" "+w.last_name).join(", ")}.`,A.WARNING),B(null,"У всех сотрудников должен быть назначен маршрут",A.WARNING)):(d&&t("emit:onValidateAndSend"),await r.actionStepClick(s,g,i))},N=()=>{r.actionAddRouteRow(),p.value=!1},D=(i,d,y,f)=>{f.type===be&&(r.booking_model.bookings[d].segments[y+1].arrival_city=i)},b=(i,d,y,f)=>{f.type===be&&(r.booking_model.bookings[d].segments[y+1].departure_city=i)},m=(i,d,y,f)=>{f.type===be&&(r.booking_model.bookings[d].segments[y+1].segment_class=i)},x=()=>{L(Ke,!0)};return a({stepClick:L}),(i,d)=>{const y=tt,f=fe,U=Ge,O=_e,V=De;return v(),S("div",Wl,[(v(!0),S(Q,null,de(e(r).booking_model.bookings,(w,q)=>(v(),S("div",Yl,[h("div",Hl,[h("div",Xl,[h("span",Kl,I(e(l)("route"))+"-"+I(q+1),1),o(bt,{modelValue:w.route,"onUpdate:modelValue":C=>w.route=C,items:e(r).routeTabItems,"onEmit:onChange":d[0]||(d[0]=C=>T(C))},null,8,["modelValue","onUpdate:modelValue","items"]),o(bt,{modelValue:w.type,"onUpdate:modelValue":C=>w.type=C,items:e(r).routeTypeTabItems,"onEmit:onChange":C=>M(C,q)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),q!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d[1]||(d[1]=(...C)=>e(r).actionDeleteRouteRow&&e(r).actionDeleteRouteRow(...C))},[o(me,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):ae("",!0)]),h("div",Ql,[o(me,{icon:e(at),class:"text-warning-500"},null,8,["icon"]),h("span",Jl,I(e(l)("route-warning")),1)]),(v(!0),S(Q,null,de(w.segments,(C,W)=>(v(),S("div",null,[o(O,null,{default:c(()=>[o(f,{"col-class":"w-1/5"},{default:c(()=>[o(y,{modelValue:C.departure_city,"onUpdate:modelValue":R=>C.departure_city=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[W].departure_city,options:e(_).regionsList,"onUpdate:options":d[2]||(d[2]=R=>e(_).regionsList=R),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:w.type===e(be)&&W%2!==0,"onEmit:change":R=>D(R,q,W,w)},{option:c(({option:R})=>[o(e(he),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:c(()=>[o(y,{modelValue:C.arrival_city,"onUpdate:modelValue":R=>C.arrival_city=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[W].arrival_city,options:e(_).regionsList.filter(R=>{var X;return(R==null?void 0:R.id)!=((X=C.departure_city)==null?void 0:X.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":p.value,disabled:w.type===e(be)&&W%2!==0,"onEmit:change":R=>b(R,q,W,w)},{option:c(({option:R})=>[o(e(he),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:c(()=>[o(y,{modelValue:C.segment_class,"onUpdate:modelValue":R=>C.segment_class=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[W].segment_class,options:w.route===e(xt)?e(qo):w.route===e(Je)?e(go):e(bo),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":p.value,translatable:"",disabled:w.type===e(be)&&W%2!==0,"onEmit:change":R=>m(R,q,W,w)},{option:c(({option:R})=>[o(e(he),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:c(()=>[o(U,{modelValue:C.date,"onUpdate:modelValue":[R=>C.date=R,R=>C.date=e(ge)(R)],error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[W].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),o(f,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[o(Gl,{modelValue:C.time,"onUpdate:modelValue":R=>C.time=R,error:e(n).bookings.$each.$response.$data[q].segments.$each.$data[W].time,label:"time",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),w.type===e(it)&&W!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:R=>e(r).actionDeleteRouteLine(q,W)},[o(me,{icon:e(Ye),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Zl)):ae("",!0)]),_:2},1024)]),_:2},1024)]))),256)),w.type===e(it)?(v(),S("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:C=>e(r).actionAddRouteLine(q)},[o(me,{icon:e(He),class:"text-primary-500"},null,8,["icon"]),h("span",tn,I(e(l)("add-line")),1)],8,en)):ae("",!0),o(O,null,{default:c(()=>[o(f,{"col-class":"w-full"},{default:c(()=>[o(H,{modelValue:w.passengers,"onUpdate:modelValue":C=>w.passengers=C,options:k.value,error:e(n).bookings.$each.$response.$data[q].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":p.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),o(V,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:N},null,8,["icon-left"]),h("div",on,[o(V,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",ln,[o(V,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:d[3]||(d[3]=w=>L(e(ct)))}),o(V,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(r).buttonLoading,onClick:x},null,8,["loading"])])])])}}},ut=xe("sd-extend-business-trip-store",{state:()=>({buttonLoading:!1,userTripUpdateButtonLoading:!1,detailLoading:!1,changingBTDialog:!1,changingBTLoading:!1,changingBTModel:null,tempVerifications:[],tempRegions:[],tempGroupIndex:null,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionGetParentDocumentDetail(u){try{this.detailLoading=!0;const{data:a}=await qe(u);await this.actionAdjustModel(a)}catch{}finally{this.detailLoading=!1}},async actionAdjustModel(u){this.model.__notices=u.notices;const a=Object.values(u.notices.reduce((t,l)=>{const g=l.group_id;return t[g]=t[g]||{group_id:g,items:[]},t[g].items.push(l),t},{}));this.model.__groups=await Promise.all(a.map(async t=>({__users:await Promise.all(t.items.map(async g=>({...await Y([],g.user.id,!1),business_trip_id:g.id}))),__notices_to_change:[],group_id:t.group_id})))},async actionAddUsersToExtend(u,a){var _;await wt();const t=this.model.__groups[a].__users_to_extend||[],l=this.model.__notices.find(n=>t.some(p=>p.id===n.user.id&&n.group_id===u.group_id));if(!l)return;const g=this.model.__groups[a];if(Array.isArray(g.__notices_to_change)||this.$set(g,"__notices_to_change",[]),g.__notices_to_change.some(n=>n.id===l.id||n.parent_id===l.id)){this.tempGroupIndex=a,this.actionClearTempModel();return}this.changingBTModel=l,this.tempGroupIndex=a,this.changingBTLoading=!0,this.changingBTDialog=!0,setTimeout(()=>{this.changingBTLoading=!1},2e3);const r=await ko(l.id);this.tempVerifications=(_=r==null?void 0:r.data)==null?void 0:_.verifications.filter(n=>!n.is_sender).map(n=>({...n,is_visited:n.arrived_at||n.left_at}))},actionDeleteNoticeToChange(u,a,t){this.model.__groups[t].__notices_to_change.splice(a,1)},actionFillNoticesToChange(){var u,a,t,l,g,s;(t=(a=(u=this.model)==null?void 0:u.__groups)==null?void 0:a[this.tempGroupIndex])!=null&&t.__notices_to_change?this.model.__groups[this.tempGroupIndex].__notices_to_change.push({...this.changingBTModel,__regions:this.tempVerifications.map(r=>({...r.region})),__start_date:(l=this.changingBTModel)==null?void 0:l.start_date,__end_date:(g=this.changingBTModel)==null?void 0:g.end_date,__sender_company:(s=this.changingBTModel)==null?void 0:s.sender_company}):console.warn("Target group or __notices_to_change array not found.")},async actionCreateDocument(u){const a=lt(u);this.buttonLoading=!0;const{response:t,error:l}=await Ve(Ee,a);return t?(this.buttonLoading=!1,await ce().actionCountList(),Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:u,body:a}){const t=await lt(a);try{this.buttonLoading=!0;const{data:l}=await Ue({id:u,body:t});return Promise.resolve(l)}catch(l){return Promise.reject(l)}finally{await ce().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,a){var t,l,g,s,r,_;try{this.detailLoading=!0,await this.actionGetParentDocumentDetail(a);const{data:n}=await qe(u),p=await kt(n.id);Ie().decreeModel.content=((g=(l=(t=p==null?void 0:p.data)==null?void 0:t.to_composes[0])==null?void 0:l.from_compose)==null?void 0:g.content)||"",Ie().decreeModel.id=((_=(r=(s=p==null?void 0:p.data)==null?void 0:s.to_composes[0])==null?void 0:r.from_compose)==null?void 0:_.id)||null;const k=await Promise.all(this.model.__groups.map(async T=>{const M=n.notices.filter(L=>T.__users.some(N=>{var D;return N.id===((D=L.user)==null?void 0:D.id)&&L.group_id===T.group_id}));return M.length&&(T.__notices_to_change=await Promise.all(M.map(async L=>({user:L.user,__regions:await We("regions",L.locations),__start_date:L.start_date,__end_date:L.end_date,tags:L.tags,__sender_company:L.sender_company,business_trip_id:L.id,parent_id:L.parent})))),T}));this.model.__curator=await Le([],n.curator.id,!1),this.model.__signers=await Y(n.signers),this.model.__approvers=await Y(n.approvers),this.model.short_description=n.short_description,this.model.content=n.content}catch(n){return console.error(n),Promise.reject(n)}finally{this.detailLoading=!1}},async actionUpdateUserTrip(){this.actionFillNoticesToChange(),this.actionClearTempModel()},actionResetBTModel(){this.model={approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safarini o'zgartirish to'g'risida",sender:null,signers:[],files:[],__files:[],__usersList:[],__users:[],__notices:[],__groups:[{__notices_to_change:[]}],__curator:null,__approvers:[],__signers:[]}},actionClearTempModel(){this.changingBTDialog=!1,this.changingBTLoading=!1,this.changingBTModel=null,this.tempVerifications=[],this.tempRegions=[],this.model.__groups[this.tempGroupIndex].__users_to_extend=[]},actionClearUserToExtend(){const u=this.model.__groups[this.tempGroupIndex].__users_to_extend.findIndex(a=>{var t,l;return a.id===((l=(t=this.changingBTModel)==null?void 0:t.user)==null?void 0:l.id)});this.model.__groups[this.tempGroupIndex].__users_to_extend.splice(u,1)}}}),rn={class:"decree-component"},an={class:"flex items-center justify-between mt-10"},sn={class:"flex items-center gap-x-1"},St={__name:"Decree",props:{formType:{type:String,default:j}},setup(u,{expose:a}){const t=u,l=pe(),g=ue(),s=Ie(),r=ut(),_=oe(s.decreeRules,s.decreeModel),{t:n}=ne(),p=ie(),k=ce(),T=J(!1),M=te(()=>({...l.params.document_sub_type===Z.EXTEND_BUSINESS_TRIP_NOTICE?r.model:s.model,bookings:s.booking_model.bookings,trip_plans:s.trip_plan_model.trip_plans,decree_content:s.decreeModel.content})),L=async x=>{await s.actionStepClick(g,l,x)},N=x=>{s.decreeModel.__files=[],x.forEach(i=>{s.decreeModel.__files.push(i)})},D=async()=>{var i,d,y,f;if(!await _.value.$validate()){B(null,n("fill-required-fields"),A.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(d=(i=s.model)==null?void 0:i.__curator)==null?void 0:d.user_id,s.decreeModel.journal=se.ORDERS_PROTOCOLS,s.decreeModel.company=p.currentUser.company.id,s.decreeModel.sender=(f=(y=p==null?void 0:p.currentUser)==null?void 0:y.top_level_department)==null?void 0:f.id,s.decreeModel.document_type=ee.DECREE,s.decreeModel.document_sub_type=l.params.document_sub_type===Z.EXTEND_BUSINESS_TRIP_NOTICE?Z.EXTEND_BUSINESS_TRIP_DECREE:Z.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,T.value=!0},b=async(x,i)=>{try{await s.actionUpdateDocument({id:i,body:{...s.decreeModel,trip_notice_id:x}}),await k.actionCountList(),B(null,n("successfully-saved"),A.SUCCESS)}catch{}},m=async()=>{var i;let x=null;t.formType===j&&l.query.notice_id?x=l.query.notice_id:t.formType===Se&&l.params.id&&(x=l.params.id);try{await b(x,(i=s.decreeModel)==null?void 0:i.id),await g.replace({name:Me,params:{id:x,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type},query:{parent_id:l.query.parent_id}})}catch{}};return a({stepClick:L}),(x,i)=>{const d=De;return v(),S("div",rn,[o(Ce,{modelValue:e(_).content.$model,"onUpdate:modelValue":i[0]||(i[0]=y=>e(_).content.$model=y),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"]),h("div",an,[o(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),h("div",sn,[o(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:i[1]||(i[1]=y=>L(e(Xe)))}),o(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:D})])]),o(Ne,{modelValue:T.value,"onUpdate:modelValue":i[2]||(i[2]=y=>T.value=y),"send-button-loading":e(s).buttonLoading,"onEmit:send":m,"content-classes":"p-0"},{content:c(()=>[o(e(io),{"compose-model":M.value,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},dn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},cn={class:"px-6 py-4"},ga={__name:"BusinessTripForm",props:{formType:{type:String,default:j}},setup(u){const a=u,{t}=ne(),l=pe(),g=ue(),s=ie(),r=Ie();oe(r.rules,r.model),oe(r.trip_plan_rules,r.trip_plan_model),oe(r.booking_model_rules,r.booking_model),oe(r.decreeRules,r.decreeModel);const _=J(null),n=te(()=>a.formType===j?"create-business-trip-notice":"update-business-trip-notice"),p=te(()=>{switch(l.query.step){case Xe:return ht;case Ke:return St;case ct:return zl;case $t:return nn;default:return ht}}),k=async N=>{var b;const D=e(_);((b=l.query)==null?void 0:b.step)!==N.value&&(await D.stepClick(N.value),N.value,Ke)},T=async()=>{l.query.step||await g.replace({query:{...l.query,step:Xe}}),r.stepperItems.forEach(N=>N.active=N.value===l.query.step)},M=async()=>{var b,m,x,i,d,y,f,U,O,V,w,q;const N=le(r.model.__approvers),D=le(r.model.__signers);if(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.bookings=[],r.model.trip_plans=[],r.model.approvers=N,r.model.signers=D,r.model.curator=(m=(b=r.model)==null?void 0:b.__curator)==null?void 0:m.user_id,r.model.journal=se.INNER,r.model.company=(i=(x=s.currentUser)==null?void 0:x.company)==null?void 0:i.id,r.model.__groups.forEach((C,W)=>{const R=W+1;r.model.notices.push(...C.__users.map(X=>{var K,P,G;return{start_date:C.__start_date,end_date:C.__end_date,end_date_2:C.__end_date,user:X.id,company:(P=(K=s.currentUser)==null?void 0:K.company)==null?void 0:P.id,sender_company:(G=C.__company)==null?void 0:G.id,regions:C.__regions.map(z=>z.id),tags:C.__tags.map(z=>({id:z.id})),route:C.__route,group_id:R,...X.business_trip_id?{id:X.business_trip_id}:{}}}))}),r.model.sender=(y=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:y.id,r.model.files=r.model.__files.map(C=>({id:C.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,a.formType===j&&l.query.notice_id)try{await r.actionUpdateDocument({id:l.query.notice_id,body:r.model})}catch{}else if(a.formType===j)try{const{data:C}=await r.actionCreateDocument(r.model),W={approvers:[],signers:[],curator:(U=(f=r.model)==null?void 0:f.__curator)==null?void 0:U.user_id,journal:se.ORDERS_PROTOCOLS,company:s.currentUser.company.id,sender:(V=(O=s==null?void 0:s.currentUser)==null?void 0:O.top_level_department)==null?void 0:V.id,document_type:ee.DECREE,document_sub_type:Z.BUSINESS_TRIP_DECREE_V2,short_description:(w=r.model)==null?void 0:w.short_description,trip_notice_id:C.id,content:C.content};r.decreeModel.content=C.content;try{const R=await r.actionCreateDocument(W);r.decreeModel.id=(q=R==null?void 0:R.data)==null?void 0:q.id,await g.replace({query:{...l.query,notice_id:C.id}}),await r.actionGetDocumentDetailForUpdate(C.id)}catch{}}catch{}else if(a.formType===Se&&l.params.id)try{await r.actionUpdateDocument({id:l.params.id,body:r.model})}catch{}},L=async()=>{try{await M(),await B(null,t("notice-saved-successfully"),A.SUCCESS)}catch{}};return Qe(async()=>{await T(),a.formType===Se?await r.actionGetDocumentDetailForUpdate(l.params.id):l.query.notice_id&&await r.actionGetDocumentDetailForUpdate(l.query.notice_id)}),Re(()=>{r.actionResetBTModel()}),(N,D)=>{const b=we,m=Ct;return v(),S("div",{class:Oe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(r).detailLoading}])},[e(r).detailLoading?(v(),F(b,{key:0})):(v(),F(e($e),{key:1,title:n.value},{content:c(()=>[h("div",dn,[o(m,{items:e(r).stepperItems,"onEmit:stepClick":k},null,8,["items"])]),h("div",cn,[(v(),F(Gt(p.value),{"form-type":u.formType,ref_key:"childComponent",ref:_,"onEmit:onValidateAndSend":L},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},un=xe("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)},__groups:{$each:$.forEach({__users:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},__regions:{required:$.withMessage("Поле не должен быть пустым",E)},__start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__end_date:{required:$.withMessage("Поле не должен быть пустым",E)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:$.forEach({users:{required:$.withMessage("Поле не должен быть пустым",E)},text:{required:$.withMessage("Поле не должен быть пустым",E)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(u){this.buttonLoading=!0;const{response:a,error:t}=await Ve(Ee,u);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:a}){try{this.buttonLoading=!0;const{data:t}=await Ue({id:u,body:a});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}}}}),pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"flex justify-between"},_n={class:"text-base text-primary-900 font-semibold mb-1"},fn=["onClick"],qn={class:"flex w-full gap-x-4"},gn={class:"flex flex-col gap-y-3"},bn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},hn={class:"flex justify-between"},yn={class:"text-base text-primary-900 font-semibold mb-1"},wn=["onClick"],vn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},kn={class:"text-base text-primary-900 font-semibold mb-2"},ba={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=J(!1),l=J(!1),{t:g}=ne(),s=pe(),r=ue(),_=ie(),n=un(),p=ce();ye();const k=oe(n.rules,n.model),T=oe(n.trip_plan_rules,n.trip_plan_model),M=te(()=>a.formType===j?"create-decree":"update-decree"),L=te(()=>{const f=new Set;return n.model.__groups.reduce((U,O)=>O.__users&&Array.isArray(O.__users)?U.concat(O.__users):U,[]).filter(U=>f.has(U.id)?!1:(f.add(U.id),!0))}),N=async()=>{var V,w,q,C,W,R;if(t.value=!0,!await k.value.$validate()){B(null,g("fill-required-fields"),A.WARNING);return}const U=le(n.model.__approvers),O=le(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=U,n.model.signers=O,n.model.curator=(w=(V=n.model)==null?void 0:V.__curator)==null?void 0:w.user_id,n.model.journal=se.ORDERS_PROTOCOLS,n.model.company=(C=(q=_.currentUser)==null?void 0:q.company)==null?void 0:C.id,n.model.__groups.forEach((X,K)=>{const P=K+1;n.model.notices.push(...X.__users.map(G=>{var z,Pe;return{start_date:X.__start_date,end_date:X.__end_date,user:G.id,company:(Pe=(z=_.currentUser)==null?void 0:z.company)==null?void 0:Pe.id,regions:X.__regions.map(ve=>ve.id),tags:X.__tags.map(ve=>({id:ve.id})),group_id:P}}))}),n.model.sender=(R=(W=_==null?void 0:_.currentUser)==null?void 0:W.top_level_department)==null?void 0:R.id,n.model.files=n.model.__files.map(X=>({id:X.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(X=>({users:X.users.map(K=>({id:K.id})),text:X.text})),l.value=!0},D=()=>{},b=()=>{n.actionAddGroupBlock()},m=()=>{n.actionAddWorkPlanRow(),t.value=!1},x=f=>{n.model.__files=[],f.forEach(U=>{n.model.__files.push(U)})},i=async()=>{const f=await n.actionCreateDocument(n.model);await p.actionCountList(),f?(l.value=!1,B(null,g("document-sent"),A.SUCCESS),await r.replace({name:Be,query:{document_type:s.params.document_type}})):B(null,g("error-occurred"),A.ERROR)},d=async()=>{await n.actionUpdateDocument({id:s.params.id,body:n.model}),await p.actionCountList(),B(null,g("changed"),A.SUCCESS),await r.replace({name:Me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})},y=()=>{a.formType===j?i():d()};return(f,U)=>{const O=we,V=fe,w=Ae,q=me,C=rt,W=Ge,R=_e,X=De,K=Vt;return e(n).detailLoading?(v(),F(O,{key:0})):(v(),S(Q,{key:1},[o(e($e),{title:M.value},{content:c(()=>[o(je,{"onEmit:preview":N,"onEmit:clearForm":D},{default:c(()=>[o(R,null,{default:c(()=>[o(V,{"col-class":"w-1/2"},{default:c(()=>[o(ke,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":U[0]||(U[0]=P=>e(k).__curator.$model=P),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(V,{"col-class":"w-1/2"},{default:c(()=>[o(w,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":U[1]||(U[1]=P=>e(k).short_description.$model=P),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(V,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(v(!0),S(Q,null,de(e(n).model.__groups,(P,G)=>(v(),S("div",pn,[h("div",mn,[h("span",_n,I(e(g)("group"))+"-"+I(G+1),1),G!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(n).actionDeleteGroupBlock(G)},[o(q,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,fn)):ae("",!0)]),o(R,null,{default:c(()=>[o(V,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:P.__users,"onUpdate:modelValue":z=>P.__users=z,error:e(k).__groups.$each.$response.$data[G].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(V,{"col-class":"w-1/2"},{default:c(()=>[o(C,{modelValue:P.__regions,"onUpdate:modelValue":z=>P.__regions=z,error:e(k).__groups.$each.$response.$data[G].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":t.value},{chip:c(({value:z})=>[re(I(z.name),1)]),option:c(({value:z})=>[o(e(he),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(V,{"col-class":"w-1/2"},{default:c(()=>[o(C,{modelValue:P.__tags,"onUpdate:modelValue":z=>P.__tags=z,error:e(k).__groups.$each.$response.$data[G].__tags,"api-url":"tags","api-params":{document_sub_type:e(s).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":t.value},{chip:c(({value:z})=>[re(I(z.name),1)]),option:c(({value:z})=>[o(e(he),{title:z.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),o(V,{"col-class":"w-1/2"},{default:c(()=>[h("div",qn,[o(W,{modelValue:P.__start_date,"onUpdate:modelValue":[z=>P.__start_date=z,z=>P.__start_date=e(ge)(z)],error:e(k).__groups.$each.$response.$data[G].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(W,{modelValue:P.__end_date,"onUpdate:modelValue":[z=>P.__end_date=z,z=>P.__end_date=e(ge)(z)],error:e(k).__groups.$each.$response.$data[G].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(X,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:b},null,8,["icon-left"])]),_:1})]),_:1}),h("div",gn,[(v(!0),S(Q,null,de(e(n).trip_plan_model.trip_plans,(P,G)=>(v(),S("div",bn,[h("div",hn,[h("span",yn,I(e(g)("plan"))+"-"+I(G+1),1),G!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:z=>e(n).actionDeleteWorkPlanRow(G)},[o(q,{icon:e(Ye),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,wn)):ae("",!0)]),o(R,null,{default:c(()=>[o(V,{"col-class":"w-1/2"},{default:c(()=>[o(K,{modelValue:P.text,"onUpdate:modelValue":z=>P.text=z,error:e(T).trip_plans.$each.$response.$data[G].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(V,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:P.users,"onUpdate:modelValue":z=>P.users=z,options:L.value,error:e(T).trip_plans.$each.$response.$data[G].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":t.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(X,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(He),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:m},null,8,["icon-left"]),o(R,null,{default:c(()=>[o(V,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":U[2]||(U[2]=P=>e(n).model.__approvers=P),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(V,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":U[3]||(U[3]=P=>e(k).__signers.$model=P),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(V,{"col-class":"w-full"},{default:c(()=>[h("div",vn,[h("div",kn,I(e(g)("decree")),1),o(Ce,{modelValue:e(k).content.$model,"onUpdate:modelValue":U[4]||(U[4]=P=>e(k).content.$model=P),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":x},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ne,{modelValue:l.value,"onUpdate:modelValue":U[5]||(U[5]=P=>l.value=P),"send-button-loading":e(n).buttonLoading,"onEmit:send":y},{content:c(()=>[o(e(vt),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},xn={class:"flex gap-x-[6px] items-center px-2 py-1 bg-greyscale-50 rounded-[90px] border-b border-greyscale-200"},$n={key:0,class:"w-6 h-6 rounded-full flex items-center justify-center text-xs text-white bg-primary-500"},Vn={class:"text-greyscale-900 text-sm font-medium"},ot={__name:"BaseChip",props:{item:{type:Object,default:()=>({})},label:{type:String,default:"Example"},type:{type:String,default:"user",validator(u){return["user","location","other"].includes(u)}},clearable:{type:Boolean,default:!1}},emits:["emit:clear"],setup(u,{emit:a}){const t=l=>{a("emit:clear",l)};return(l,g)=>(v(),S("div",xn,[u.type==="user"?(v(),S("div",$n,I(u.label[0]),1)):u.type==="location"?(v(),F(me,{key:1,icon:e(Wt),class:"text-greyscale-400"},null,8,["icon"])):ae("",!0),h("div",Vn,I(u.label),1),u.clearable?(v(),S("div",{key:2,class:"flex justify-center items-center w-5 h-5 rounded-full bg-critic-500 cursor-pointer",onClick:g[0]||(g[0]=s=>t(u.item))},[o(me,{icon:e(Yt),class:"text-white"},null,8,["icon"])])):ae("",!0)]))}},Un={key:0,class:"flex flex-col gap-y-5"},En={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},Cn={class:"text-sm font-medium text-greyscale-500"},Sn={class:"text-green-900"},Tn=h("br",null,null,-1),Ln={class:"flex flex-col gap-y-2"},Dn={class:"text-sm font-medium text-greyscale-500"},Rn=h("span",{class:"text-red-500"},"*",-1),Mn={class:"flex flex-wrap gap-3"},Nn={class:"flex flex-col gap-y-2"},Pn={key:1,class:"flex flex-col gap-y-5"},On={class:"flex gap-x-3 py-3 px-4 bg-warning-50 border border-warning-100 rounded-xl"},In={class:"text-sm font-medium text-greyscale-500"},An={class:"text-green-900"},Bn={__name:"ChangingBusinessTripModal",setup(u){const a=ut(),{t}=ne(),l=te(()=>{var n;return["reporting","closed"].includes((n=a==null?void 0:a.changingBTModel)==null?void 0:n.trip_status)}),g=()=>{var p;if(!(((p=a.tempVerifications)==null?void 0:p.length)>0)){B(null,"Kamida bitta hudud qo'shing!",A.WARNING);return}a.actionUpdateUserTrip()},s=()=>{a.actionClearTempModel()},r=(n,p)=>{a.tempVerifications.splice(p,1)},_=n=>{n.value.forEach(p=>{a.tempVerifications.some(T=>T.region.id===p.id)||a.tempVerifications.push({region:p,is_visited:!1}),a.tempRegions=[]})};return(n,p)=>{const k=we,T=rt,M=Ge,L=De,N=Ut;return v(),F(N,{modelValue:e(a).changingBTDialog,"onUpdate:modelValue":p[4]||(p[4]=D=>e(a).changingBTDialog=D),label:"confirm","max-width":"max-w-[631px]",closable:!1},Ht({content:c(()=>{var D,b,m,x;return[e(a).changingBTLoading?(v(),F(k,{key:0,class:"my-16"})):(v(),S(Q,{key:1},[l.value?(v(),S("div",Pn,[h("div",On,[o(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),h("div",In,[h("span",An,I((x=(m=e(a).changingBTModel)==null?void 0:m.user)==null?void 0:x.full_name),1),re("ga tegishli bo'lgan xizmat safari yakunlangan! ")])])])):(v(),S("div",Un,[h("div",En,[o(me,{icon:e(at),class:"text-warning-500 !w-6 !h-6"},null,8,["icon"]),h("div",Cn,[re("Siz rostdan ham "),h("span",Sn,I((b=(D=e(a).changingBTModel)==null?void 0:D.user)==null?void 0:b.full_name),1),re("ga tegishli bo'lgan xizmat safarini o'zgartirmoqchimisiz? "),Tn,re(" Bunda xizmat safari bilan vaqtinchalik amaliyot bajarish to'xtatiladi! ")])]),h("div",Ln,[h("span",Dn,[re(I(e(t)("trip-place"))+" ",1),Rn]),h("div",Mn,[(v(!0),S(Q,null,de(e(a).tempVerifications,(i,d)=>{var y;return v(),F(ot,{key:i.id,label:(y=i==null?void 0:i.region)==null?void 0:y.name_uz,clearable:!i.is_visited,type:"location",class:"w-fit","onEmit:clear":f=>r(i,d)},null,8,["label","clearable","onEmit:clear"])}),128))]),o(T,{modelValue:e(a).tempRegions,"onUpdate:modelValue":p[0]||(p[0]=i=>e(a).tempRegions=i),"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",type:"department",placeholder:"add-trip-place",required:"","onEmit:change":p[1]||(p[1]=i=>_(i))},{chip:c(({value:i})=>[re(I(i.name),1)]),option:c(({value:i})=>[o(e(he),{title:i.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue"])]),h("div",Nn,[o(M,{modelValue:e(a).changingBTModel.end_date,"onUpdate:modelValue":[p[2]||(p[2]=i=>e(a).changingBTModel.end_date=i),p[3]||(p[3]=i=>e(a).changingBTModel.end_date=e(ge)(i))],"min-date":new Date(e(a).changingBTModel.start_date),required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","min-date"])])]))],64))]}),_:2},[e(a).changingBTLoading?void 0:{name:"footer",fn:c(()=>[o(L,{color:"bg-white hover:bg-greyscale-100 text-primary-dark","border-color":"border-transparent",label:"cancel",rounded:"",shadow:"",type:"button",onClick:s}),l.value?ae("",!0):(v(),F(L,{key:0,loading:e(a).userTripUpdateButtonLoading,label:"update",rounded:"",shadow:"",type:"button",onClick:g},null,8,["loading"]))]),key:"0"}]),1032,["modelValue"])}}},jn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},zn={class:"px-6 py-4"},Fn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Gn={class:"flex justify-between"},Wn={class:"text-base text-primary-900 font-semibold mb-1"},Yn={class:"text-sm text-greyscale-500 font-medium"},Hn={class:"text-sm text-greyscale-500 font-medium"},Xn={class:"flex flex-wrap gap-3 mt-1"},Kn={class:"flex justify-between items-center"},Qn={class:"text-sm text-greyscale-500 font-medium"},Jn={class:"text-base text-primary-900 font-semibold mb-2"},Zn={class:"flex items-center justify-between"},ha={__name:"ExtendBusinessTripForm",props:{formType:{type:String,default:j}},setup(u){const a=u,t=ut(),l=Ie(),g=ie(),s=oe(t.rules,t.model),r=pe(),_=ue(),{t:n}=ne(),p=J(!1);J(!1);const k=te(()=>{const b=a.formType===j;return"trip-notice-for-change"}),T=async()=>{var i,d,y,f,U,O,V,w,q,C,W,R,X;const b=le(t.model.__approvers),m=le(t.model.__signers);t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.approvers=b,t.model.signers=m,t.model.curator=(d=(i=t.model)==null?void 0:i.__curator)==null?void 0:d.user_id,t.model.journal=se.INNER,t.model.company=(f=(y=g.currentUser)==null?void 0:y.company)==null?void 0:f.id;let x=1;if(t.model.__groups.forEach(K=>{Array.isArray(K.__notices_to_change)&&t.model.notices.push(...K.__notices_to_change.map(P=>{var G,z,Pe;return{...a.formType===Se?{id:P.id}:{},start_date:P.__start_date,end_date:P.__end_date,user:P.user.id,company:(z=(G=g.currentUser)==null?void 0:G.company)==null?void 0:z.id,sender_company:(Pe=P.sender_company)==null?void 0:Pe.id,regions:P.__regions.map(ve=>ve.id),tags:P.tags.map(ve=>({id:ve.id})),route:P.route,group_id:x++,trip_type:"changed_local",parent:P.id,...P.business_trip_id?{id:P.business_trip_id}:{}}}))}),t.model.sender=(O=(U=g==null?void 0:g.currentUser)==null?void 0:U.top_level_department)==null?void 0:O.id,t.model.files=t.model.__files.map(K=>({id:K.id})),t.model.document_type=r.params.document_type,t.model.document_sub_type=r.params.document_sub_type,t.model.trip_notice_id=((V=r.query)==null?void 0:V.parent_id)||null,a.formType===j&&r.query.notice_id)try{await t.actionUpdateDocument({id:r.query.notice_id,body:t.model}),await B(null,n("notice-saved-successfully"),A.SUCCESS)}catch{}else if(a.formType===j)try{const{data:K}=await t.actionCreateDocument(t.model),P={approvers:[],signers:[],curator:(q=(w=t.model)==null?void 0:w.__curator)==null?void 0:q.user_id,journal:se.ORDERS_PROTOCOLS,company:g.currentUser.company.id,sender:(W=(C=g==null?void 0:g.currentUser)==null?void 0:C.top_level_department)==null?void 0:W.id,document_type:ee.DECREE,document_sub_type:Z.EXTEND_BUSINESS_TRIP_DECREE,short_description:(R=t.model)==null?void 0:R.short_description,trip_notice_id:K.id,content:K.content};l.decreeModel.content=K.content;try{const G=await t.actionCreateDocument(P);l.decreeModel.id=(X=G==null?void 0:G.data)==null?void 0:X.id,await _.replace({query:{...r.query,notice_id:K.id,parent_id:r.query.parent_id}}),await B(null,n("notice-saved-successfully"),A.SUCCESS),await t.actionGetDocumentDetailForUpdate(K.id,r.query.parent_id)}catch(G){console.error(G)}}catch(K){console.error(K)}else if(a.formType===Se&&r.params.id)try{await t.actionUpdateDocument({id:r.params.id,body:t.model}),await B(null,n("notice-saved-successfully"),A.SUCCESS)}catch{}},M=b=>{t.model.__files=[],b.forEach(m=>{t.model.__files.push(m)})},L=async b=>{var m;try{((m=r.query)==null?void 0:m.step)!==b.value&&(b.value===Ke&&(await N(),await T()),await l.actionStepClick(_,r,b.value))}catch(x){console.error(x)}},N=async()=>{const b=await s.value.$validate();if(p.value=!0,!b)return B(null,n("fill-required-fields"),A.WARNING),Promise.reject();if(!t.model.__groups.some(x=>Array.isArray(x.__notices_to_change)&&x.__notices_to_change.length>0))return B(null,"Kamida bitta xodim o'zgartirish uchun tanlanishi kerak!",A.WARNING),Promise.reject()},D=async()=>{r.query.step||await _.replace({query:{...r.query,step:Xe}}),l.stepperItems.forEach(b=>b.active=b.value===r.query.step)};return et(async()=>{await D()}),Qe(async()=>{var b,m,x,i,d,y;a.formType===j&&((b=r.query)!=null&&b.notice_id)&&((m=r.query)!=null&&m.parent_id)?await t.actionGetDocumentDetailForUpdate((x=r.query)==null?void 0:x.notice_id,(i=r.query)==null?void 0:i.parent_id):a.formType===j&&((d=r.query)!=null&&d.parent_id)?await t.actionGetParentDocumentDetail(r.query.parent_id):a.formType===Se&&await t.actionGetDocumentDetailForUpdate(r.params.id,(y=r.query)==null?void 0:y.parent_id)}),Re(()=>{t.actionResetBTModel()}),(b,m)=>{const x=we,i=Ct,d=fe,y=Ae,f=_e,U=De;return v(),S("div",{class:Oe(["extend-business-trip-form",{"h-[calc(100vh-200px)]":e(t).detailLoading}])},[e(t).detailLoading?(v(),F(x,{key:0})):(v(),F(e($e),{key:1,title:k.value},{content:c(()=>{var O,V;return[h("div",jn,[o(i,{items:e(l).stepperItems,"onEmit:stepClick":L},null,8,["items"])]),h("div",zn,[((O=e(r).query)==null?void 0:O.step)==="trip_info"?(v(),S(Q,{key:0},[o(f,null,{default:c(()=>[o(d,{"col-class":"w-1/2"},{default:c(()=>[o(ke,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=w=>e(s).__curator.$model=w),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(d,{"col-class":"w-1/2"},{default:c(()=>[o(y,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=w=>e(s).short_description.$model=w),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(d,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(v(!0),S(Q,null,de(e(t).model.__groups,(w,q)=>(v(),S("div",Fn,[h("div",Gn,[h("span",Wn,I(e(n)("group"))+"-"+I(q+1),1)]),o(f,null,{default:c(()=>[o(d,{"col-class":"w-full"},{default:c(()=>[o(H,{modelValue:w.__users_to_extend,"onUpdate:modelValue":[C=>w.__users_to_extend=C,C=>e(t).actionAddUsersToExtend(w,q)],label:"select-employees-in-business-trip",options:w.__users,searchable:!1,placeholder:"select-employees","show-nested-error":p.value,disabled:u.formType===e(Se)},null,8,["modelValue","onUpdate:modelValue","options","show-nested-error","disabled"])]),_:2},1024),o(d,{"col-class":"w-full"},{default:c(()=>[(v(!0),S(Q,null,de(w.__notices_to_change,(C,W)=>(v(),F(f,null,{default:c(()=>[o(d,{"col-class":"w-1/3"},{default:c(()=>{var R;return[h("span",Yn,I(e(n)("employees-in-business-trip")),1),o(ot,{label:(R=C.user)==null?void 0:R.full_name,class:"w-fit mt-1"},null,8,["label"])]}),_:2},1024),o(d,{"col-class":"w-1/3"},{default:c(()=>[h("span",Hn,I(e(n)("trip-place")),1),h("div",Xn,[(v(!0),S(Q,null,de(C.__regions,R=>(v(),F(ot,{key:C.id,label:R.name_uz,type:"location",class:"w-fit"},null,8,["label"]))),128))])]),_:2},1024),o(d,{"col-class":"w-1/3"},{default:c(()=>[h("div",Kn,[h("div",null,[h("span",Qn,I(e(n)("end-date")),1),o(ot,{label:C.__end_date,type:"other",class:"w-fit mt-1"},null,8,["label"])])])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)]))),256))]),_:1}),o(d,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=w=>e(t).model.__approvers=w),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(d,{"col-class":"w-1/2"},{default:c(()=>[o(H,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=w=>e(s).__signers.$model=w),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(d,{"col-class":"w-full"},{default:c(()=>[h("div",{class:Oe(["border-[1.5px] rounded-2xl px-5 py-4",p.value&&!e(t).model.content?"border-critic-500":"border-greyscale-200"])},[h("div",Jn,I(e(n)("notice")),1),o(Ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":m[4]||(m[4]=w=>e(s).content.$model=w),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),h("div",Zn,[o(U,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(U,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:m[5]||(m[5]=w=>L({value:e(Ke)}))})])],64)):((V=e(r).query)==null?void 0:V.step)==="decree"?(v(),F(e(St),{key:1,"form-type":u.formType},null,8,["form-type"])):ae("",!0)])]}),_:1},8,["title"])),o(Bn,{modelValue:e(t).changingBTDialog,"onUpdate:modelValue":m[6]||(m[6]=O=>e(t).changingBTDialog=O)},null,8,["modelValue"])],2)}}};export{ca as _,ma as a,_a as b,fa as c,ga as d,ba as e,ha as f,ua as g,pa as h,qa as i};
