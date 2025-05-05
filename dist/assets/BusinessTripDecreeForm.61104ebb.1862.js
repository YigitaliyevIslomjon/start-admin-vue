import{_ as ce}from"./BaseRow.f1f69713.1862.js";import{_ as Pe}from"./BaseInput.e430f3d2.1862.js";import{_ as ue}from"./BaseCol.e8f3d7cd.1862.js";import{v as Q,b9 as oo,a1 as to,o as V,c as S,i as o,z as d,h as e,b6 as He,d as ne,ds as Oe,a as y,t as z,F as X,e as qe,a3 as me,g as ae,f as K,B as $o,dx as Vo,bh as xo,n as Fe,r as go,G as Ne,as as ve,cK as J,cL as ee,ci as re,u as te,b as se,ao as ie,bc as Re,a5 as I,ac as ke,a8 as Uo,cW as Xe,dy as Eo,_ as we,dz as So,dA as Co,dB as Lo,dC as Ro,dD as Do,$ as To,dE as Mo,dF as Oo,b5 as Po,br as ze,b_ as je,dG as No,dq as Ao,E as Io}from"./index.0c079d39.685.js";import{c as $,r as E,u as Z}from"./index.c6aa2d07.1862.js";import{_ as Fo,a as zo}from"./BranchMultiSelect.a993ecfd.1862.js";import{j as jo,k as Bo,l as Go,_ as $e,a as Wo,h as Yo,f as Ho,b as Ko,c as Qo,d as Xo,e as wo,i as Jo,m as Zo,g as et}from"./BasePOA.c90ed0cd.1862.js";import"./BaseTabMenu.b9b49268.1862.js";import"./dialog.esm.523027ba.1862.js";import"./tabpanel.esm.4e8bb457.1862.js";import"./FileSaver.min.fe6f1566.1862.js";import{X as uo,s as he,V as G,Y as ot,Z as Ae,_ as oe,$ as Le,a0 as po,a1 as lo,a2 as We,O as mo}from"./index.2e01487f.1862.js";import"./BaseTabView.95893650.1862.js";import"./FileTabs.8d7dc527.1862.js";import{_ as W}from"./UserMultiSelect.7fac352c.1862.js";import{c as tt,u as le,w as Ve,d as F}from"./axios.config.8cecf9a6.1862.js";import{u as De}from"./common.c9aa8859.1862.js";import{u as de}from"./count.store.6a6615de.1862.js";import{u as ro,a as xe,b as ge,c as Ue,d as lt,f as nt}from"./index.store.d6613c31.1862.js";import{d as _o,e as Te,c as Ee,f as _e,B as Ye,g as Ke,h as eo,i as rt,j as ho,M as no,O as at,T as st,k as ao,l as yo,C as it,P as dt,m as ct}from"./index.3493ff30.1862.js";import{F as j,a as Qe}from"./constants.50c90617.1862.js";import{_ as Je}from"./BaseDropdown.2e0a124f.1862.js";import{_ as Be}from"./BaseCalendar.f7bfea85.1862.js";import{_ as so}from"./BaseMultiSelect.b9fc9118.1862.js";import{f as ut,a as fe}from"./formatDate.f18e0544.1862.js";import{Q as qo}from"./qrcode.vue.esm.9b03b89a.1862.js";import"./divider.esm.bb9d62d3.1862.js";import"./dayjs.min.58415b5f.1862.js";/* empty css                                                                                    */import{c as pt}from"./Dropdown.80d69e3c.1862.js";import"./menu.esm.fc30cc71.1862.js";/* empty css                                                      */import"./avatar.esm.772b441b.1862.js";/* empty css                                                      */import"./businessTrip.store.26774752.1862.js";/* empty css                                                            */import"./accordiontab.esm.c0de0785.1862.js";import"./common.store.dfea1bf5.1862.js";import{_ as be}from"./WithRadio.53294ded.1862.js";import"./radiobutton.esm.abac97f2.1862.js";import"./checkbox.esm.55206665.1862.js";import"./index.es6.f9050ba3.1862.js";import{_ as vo}from"./ShortDescription.36abde2f.1862.js";import{_ as fo}from"./BaseBrickRadio.c334a95b.1862.js";import{_ as mt}from"./BaseLabel.42cc7512.1862.js";import{K as _t}from"./main.b450f0b1.1862.js";import{_ as qt}from"./WithSelectable.4d62d751.1862.js";import{_ as ft}from"./BaseBrickTab.364ee58a.1862.js";import{_ as bt}from"./BaseFileUpload.f94f8f20.1862.js";import{_ as gt}from"./BaseFroalaEditor.14e00823.1862.js";import{_ as wt}from"./BaseDialog.ddafcfec.1862.js";const ht={class:"user-select"},ye={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(p,{emit:s}){const r=p,t=Q([]),v=oo(r,"modelValue"),a=async l=>{let{data:_}=await tt.get(`${r.apiUrl}/`,l);_.hasOwnProperty("results")?t.value=_.results:t.value=_};return to(async()=>{await a(r.apiParams)}),(l,_)=>(V(),S("div",ht,[o(Je,{modelValue:e(v),"onUpdate:modelValue":_[0]||(_[0]=n=>He(v)?v.value=n:null),options:t.value,"onUpdate:options":_[1]||(_[1]=n=>t.value=n),error:r.error,"api-url":r.apiUrl,"api-params":r.apiParams,"option-label":"full_name",label:r.label,placeholder:r.placeholder,required:r.required,searchable:"","onEmit:change":_[2]||(_[2]=n=>s("emit:change",n))},{option:d(({option:n})=>[o(e(qt),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}},yt={class:"business-trip-decree-template-view letter-template"},vt={class:"flex flex-col text-sm font-medium mt-4"},kt=y("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),$t=["innerHTML"],Vt=["innerHTML"],xt={class:"employees-table text-sm mt-4"},Ut={class:"w-full"},Et=y("tr",{class:"text-center"},[y("td",{class:"border-2 p-1"},"№"),y("td",{class:"border-2 p-1"},"F.I.SH"),y("td",{class:"border-2 p-1"},"Departament va lavozim"),y("td",{class:"border-2 p-1"},"Yo'nalish"),y("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),St={class:"text-center"},Ct={class:"border-2 p-1"},Lt={class:"border-2 p-1"},Rt={class:"border-2 p-1"},Dt=y("br",null,null,-1),Tt={class:"border-2 p-1"},Mt={class:"flex flex-col gap-y-1"},Ot={key:0},Pt={class:"border-2 p-1 w-[100px]"},Nt=y("br",null,null,-1),At={class:"indent-8 mt-2 text-sm text-justify"},It=y("div",null,"xizmat safariga yuborilsin.",-1),Ft=y("div",null," Xizmat safarida bo‘lgan xodimga u yuborilgan Bank tarmog‘i/tashkilotdagi ish vaqti rejimi va dam olish vaqtlari tadbiq etilsin. ",-1),zt=y("div",null," Xizmat safariga yuborilgan xodim safardan qaytgandan so‘ng 3 ish kuni ichida xizmat safari natijalari to‘g‘risida xisobot topshirsin. ",-1),jt=y("div",null," Buxgalteriya hisobi va hisoboti departamenti tomonidan xizmat safari bilan bog‘liq xarajatlar uchun to‘lovlar belgilangan tartibda amalga oshirilsin. ",-1),Bt={key:0},Gt=y("span",{class:"font-semibold"},"Asos: ",-1),Wt=y("div",null," “O‘zsanoatqurilishbank” ATB xodimlarini xizmat safariga yuborish to‘g‘risidagi Tartib; ",-1),Yt=y("div",null," O‘zR MKning 287-moddasi; ",-1),Ht=y("div",null," Vazirlar Mahkamasining 2022-yil 2-avgustdagi “O‘zbekiston Respublikasi hududida xizmat safarlari to‘g‘risidagi” 424-sonli Nizom. ",-1),Kt={class:"mt-6 pb-2 px-4"},Qt={class:"text-sm font-semibold block"},Xt={class:"text-sm font-semibold block"},Jt={class:"text-sm font-semibold block"},Zt={class:"text-sm font-semibold block"},el={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(p){const s=p,r=ro(),t=ne(()=>{var _;return s.preview?le().currentUser:(_=s.composeModel)==null?void 0:_.author}),v=ne(()=>{var _,n,m;return s.preview?(_=s.composeModel)==null?void 0:_.__employees.map(g=>({empFullName:g.full_name,empDepName:g.top_level_department.name,empPositionName:g.position.name,destinations:s.composeModel.__companies,startDate:s.composeModel.start_date,endDate:s.composeModel.end_date})):(m=(n=s.composeModel)==null?void 0:n.notices)==null?void 0:m.map(g=>({empFullName:g.user.full_name,empDepName:g.user.top_level_department.name,empPositionName:g.user.position.name,destinations:g.destinations,startDate:g.start_date,endDate:g.end_date}))}),a=ne(()=>{var n,m,g;if(s.preview)return[(n=s.composeModel)==null?void 0:n.__curator];const _=(m=s.composeModel)==null?void 0:m.signers.find(L=>L.type===Oe.BASIC_SIGNER);return _?[_]:[(g=s.composeModel)==null?void 0:g.curator].filter(Boolean)}),l=ne(()=>{var _,n;return s.preview?(_=s.composeModel)==null?void 0:_.__signers:(n=s.composeModel)==null?void 0:n.signers.filter(m=>m.type===Oe.SIGNER)});return(_,n)=>{var L,R,P,D,O,k,c,U;const m=ue,g=ce;return V(),S("div",yt,[o(e(jo)),o(e(Bo),{"dep-name":(R=(L=t.value)==null?void 0:L.top_level_department)==null?void 0:R.name},null,8,["dep-name"]),y("div",vt,[y("span",null," № "+z((P=s.composeModel)==null?void 0:P.register_number),1),y("span",null,z(((D=s.composeModel)==null?void 0:D.register_date)&&e(ut)((O=s.composeModel)==null?void 0:O.register_date)),1)]),kt,e(r).historyShow?(V(),S("div",{key:0,class:"text-justify",innerHTML:e(r).historyContent},null,8,$t)):(V(),S("div",{key:1,class:"text-justify",innerHTML:(k=s.composeModel)==null?void 0:k.content},null,8,Vt)),y("div",xt,[y("table",Ut,[Et,v.value&&v.value.length?(V(!0),S(X,{key:0},qe(v.value,(i,u)=>(V(),S("tr",St,[y("td",Ct,z(u+1),1),y("td",Lt,z(i.empFullName),1),y("td",Rt,[me(z(i.empDepName)+" ",1),Dt,me(" "+z(i.empPositionName),1)]),y("td",Tt,[y("div",Mt,[(V(!0),S(X,null,qe(i.destinations,(w,f)=>(V(),S("span",null,[me(z(w.name)+" ",1),f!==i.destinations.length-1?(V(),S("span",Ot,",")):ae("",!0)]))),256))])]),y("td",Pt,[me(z(i.startDate)+" ",1),Nt,me(" "+z(i.endDate),1)])]))),256)):ae("",!0)])]),y("div",At,[It,Ft,zt,jt,(c=p.composeModel)!=null&&c.trip_notice_register_number?(V(),S("div",Bt,[Gt,me(z((U=p.composeModel)==null?void 0:U.trip_notice_register_number)+"-sonli bildirishnnoma; ",1)])):ae("",!0),Wt,Yt,Ht]),y("div",Kt,[(V(!0),S(X,null,qe(a.value,i=>(V(),K(g,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[o(m,{"col-class":"w-1/3"},{default:d(()=>[y("span",Qt,z(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(m,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?(V(),K(qo,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(m,{"col-class":"w-1/3"},{default:d(()=>[y("span",Xt,z(e(uo)(i)),1)]),_:2},1024)]),_:2},1024))),128)),(V(!0),S(X,null,qe(l.value,i=>(V(),K(g,{key:i.id,class:"mb-2 items-center"},{default:d(()=>[o(m,{"col-class":"w-1/3"},{default:d(()=>[y("span",Jt,z(i.user?i.user.position.name:i.position.name),1)]),_:2},1024),o(m,{"col-class":"w-1/3"},{default:d(()=>[i.is_signed?(V(),K(qo,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):ae("",!0)]),_:2},1024),o(m,{"col-class":"w-1/3"},{default:d(()=>[y("span",Zt,z(e(uo)(i)),1)]),_:2},1024)]),_:2},1024))),128))]),o(e(Go),{"compose-model":s.composeModel,author:t.value},null,8,["compose-model","author"])])}}};var ol=`
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
`,tl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};$o.extend({name:"editor",css:ol,classes:tl});(function(){try{return window.Quill}catch{return null}})();const Se={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(p){return["froala","tiny"].includes(p)}}},emits:["update:modelValue","emit:fileUpload"],setup(p,{emit:s}){const r=p,t=oo(r,"modelValue"),v=Q([{title:"text",slot:"editor",icon:Vo},{title:"file",slot:"file",icon:xo}]);return(a,l)=>(V(),K(ft,{"tab-panel-list":v.value,"panel-container-class":"px-0"},{editor:d(()=>[p.editor==="froala"?(V(),K(gt,{key:0,modelValue:e(t),"onUpdate:modelValue":l[0]||(l[0]=_=>He(t)?t.value=_:null)},null,8,["modelValue"])):(V(),K(pt,{key:1,modelValue:e(t),"onUpdate:modelValue":l[1]||(l[1]=_=>He(t)?t.value=_:null)},null,8,["modelValue"]))]),file:d(()=>[y("div",{class:Fe(r.fileUploadContainerClasses)},[o(bt,{files:r.files,"onEmit:fileUpload":l[2]||(l[2]=_=>s("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ll={class:"flex flex-col justify-between h-full"},nl={class:"px-6 py-4 overflow-y-auto"},rl={class:"actions p-6"},Me={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(p,{emit:s}){return(r,t)=>{const v=Ne;return V(),S("div",ll,[y("div",nl,[go(r.$slots,"default")]),y("div",rl,[o(v,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:t[0]||(t[0]=a=>s("emit:clearForm"))}),o(v,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:t[1]||(t[1]=a=>s("emit:preview"))})])])}}},al=ve("sd-stores-inner",{state:()=>{var p,s;return{buttonLoading:!1,detailLoading:!1,model:{company:(s=(p=le().currentUser)==null?void 0:p.company)==null?void 0:s.id,content:null,document_type:J.INNER,document_sub_type:ee.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:re.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__departments:{required:$.withMessage("Поле не должен быть пустым",E)},__approvers:{},__signers:{required:$.withMessage("Поле не должен быть пустым",E)}}}},actions:{async actionCreateDocument(p){let s={...p,type:_o,sub_type:_o};this.buttonLoading=!0;const{response:r,error:t}=await Ve(Ue,s);return r?(this.buttonLoading=!1,Promise.resolve(r)):Promise.reject(t)},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await xe({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:s}=await ge(p);he(this.model,s),this.model.__approvers=await G(s.approvers),this.model.__signers=await G(s.signers),this.model.__departments=await ot(s.receiver.departments),this.model.__files=s.files}catch{}finally{this.detailLoading=!1}}}}),sl={class:"font-semibold text-xl"},Ce={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1},sendButtonLabel:{type:String,default:"send"}},emits:["update:modelValue","emit:send"],setup(p,{emit:s}){const t=oo(p,"modelValue"),{t:v}=te();return(a,l)=>{const _=Ne,n=wt;return V(),K(n,{modelValue:e(t),"onUpdate:modelValue":l[1]||(l[1]=m=>He(t)?t.value=m:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[y("span",sl,z(e(v)("preview")),1)]),content:d(()=>[go(a.$slots,"content")]),footer:d(()=>[o(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(_,{label:p.sendButtonLabel,rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:p.sendButtonLoading,onClick:l[0]||(l[0]=m=>s("emit:send"))},null,8,["label","loading"])]),_:3},8,["modelValue"])}}},qr={__name:"InnerForm",props:{formType:{type:String,default:j}},setup(p){const s=p,r=le(),t=al();De();const v=de(),a=Q(!1);Q(null);const{t:l}=te(),_=se(),n=ie(),m=Z(t.rules,t.model),g=async()=>{await m.value.$validate()&&(a.value=!0,t.model.approvers=[],t.model.signers=[],t.model.departments=[],t.model.departments=t.model.__departments.map(c=>c.id),t.model.files=[],t.model.files=t.model.__files.map(c=>({id:c.id})),t.model.journal=re.INNER,t.model.sender=r.currentUser.top_level_department.id,t.model.approvers=oe(t.model.__approvers),t.model.signers=oe(t.model.__signers),t.model.document_type=n.params.document_type,t.model.document_sub_type=n.params.document_sub_type,t.model.receiver&&delete t.model.receiver)},L=()=>{s.formType===j?R():P()},R=async()=>{const k=await t.actionCreateDocument(t.model);await v.actionCountList(),k?(a.value=!1,F(null,l("document-sent"),I.SUCCESS),await _.replace({name:Te,query:{document_type:J.INNER}})):F(null,l("error-occurred"),I.ERROR)},P=async()=>{await t.actionUpdateDocument({id:n.params.id,body:t.model}),await v.actionCountList(),F(null,l("document-sent"),I.SUCCESS),await _.replace({name:Ee,params:{id:n.params.id,document_type:J.INNER,document_sub_type:ee.SERVICE_LETTER}})},D=()=>{console.log("Clear Form")},O=k=>{t.model.__files=[],k.forEach(c=>{t.model.__files.push(c)})};return to(async()=>{n.params.id&&await t.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Ae(t.model)}),(k,c)=>{const U=ke,i=ue,u=Pe,w=ce;return e(t).detailLoading?(V(),K(U,{key:0})):(V(),S(X,{key:1},[o(e($e),{title:s.formType===e(j)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[o(Me,{"onEmit:preview":g,"onEmit:clearForm":D},{default:d(()=>[o(w,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(Fo,{modelValue:e(m).__departments.$model,"onUpdate:modelValue":c[0]||(c[0]=f=>e(m).__departments.$model=f),error:e(m).__departments},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(u,{modelValue:e(m).short_description.$model,"onUpdate:modelValue":c[1]||(c[1]=f=>e(m).short_description.$model=f),error:e(m).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(m).__approvers.$model,"onUpdate:modelValue":c[2]||(c[2]=f=>e(m).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(m).__signers.$model,"onUpdate:modelValue":c[3]||(c[3]=f=>e(m).__signers.$model=f),error:e(m).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(m).content.$model,"onUpdate:modelValue":c[4]||(c[4]=f=>e(m).content.$model=f),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:a.value,"onUpdate:modelValue":c[5]||(c[5]=f=>a.value=f),"send-button-loading":e(t).buttonLoading,"onEmit:send":L},{content:d(()=>{var f,x;return[o(Wo,{"compose-model":{...e(t).model,signers:e(t).model.__signers,approvers:e(t).model.__approvers,author:e(t).model.__signers[0],sender:{name:(x=(f=e(r).currentUser)==null?void 0:f.top_level_department)==null?void 0:x.name},receiver:{departments:e(t).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},il=ve("sd-store-application",{state:()=>{var p,s;return{buttonLoading:!1,detailLoading:!1,model:{company:(s=(p=le().currentUser)==null?void 0:p.company)==null?void 0:s.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__approvers:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{}}}},actions:{async actionCreateDocument(p){let s={...p};this.buttonLoading=!0;const{response:r,error:t}=await Ve(Ue,s);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await xe({id:p,body:s});return Promise.resolve(r)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:s}=await ge(p);he(this.model,s),this.model.__approvers=await G(s.approvers),this.model.__signers=await G(s.signers.filter(r=>r.type===Oe.SIGNER)),this.model.__curator=await Le([],s.curator.id,!1),this.model.__files=s.files}catch{}finally{this.detailLoading=!1}}}}),ko=ve("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:le().currentUser.company.id,curator:null,document_type:J.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:re.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:$.withMessage("Поле не должен быть пустым",E)},register_date:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__negotiators:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:s,error:r}=await Ve(Ue,p);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await xe({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:s}=await ge(p);he(this.model,s),this.model.__signers=await G(s.signers.filter(r=>r.type!==Oe.NEGOTIATOR)),this.model.__negotiators=await G(s.signers.filter(r=>r.type===Oe.NEGOTIATOR)),this.model.__approvers=await G(s.approvers),this.model.__curator=await Le([],s.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),fr={__name:"ApplicationForm",props:{formType:{type:String,default:j}},setup(p){const s=p,r=le(),t=il();De();const v=de();ko();const a=Q(!1);Q(null);const{t:l}=te(),_=se(),n=ie(),m=Z(t.rules,t.model),g=async()=>{var c,U,i,u,w;await m.value.$validate()&&(a.value=!0,t.model.approvers=[],t.model.signers=[],t.model.signers=[{user:(c=r==null?void 0:r.currentUser)==null?void 0:c.id}],t.model.sender=(i=(U=r==null?void 0:r.currentUser)==null?void 0:U.top_level_department)==null?void 0:i.id,t.model.curator=(w=(u=t==null?void 0:t.model)==null?void 0:u.__curator)==null?void 0:w.user_id,t.model.journal=re.APPLICATION,t.model.document_type=n.params.document_type,t.model.document_sub_type=n.params.document_sub_type,t.model.approvers=oe(t.model.__approvers))},L=async()=>{},R=()=>{s.formType===j?P():D()},P=async()=>{const k=await t.actionCreateDocument(t.model);await v.actionCountList(),k?(a.value=!1,F(null,l("document-sent"),I.SUCCESS),await _.replace({name:Te,query:{document_type:J.APPLICATION}})):F(null,l("error-occurred"),I.ERROR)},D=async()=>{await t.actionUpdateDocument({id:n.params.id,body:t.model}),await v.actionCountList(),F(null,l("document-sent"),I.SUCCESS),await _.replace({name:Ee,params:{id:n.params.id,document_type:J.APPLICATION,document_sub_type:ee.LABOR_LEAVE}})},O=k=>{t.model.__files=[],k.forEach(c=>{t.model.__files.push(c)})};return to(async()=>{n.params.id&&await t.actionGetDocumentDetailForUpdate(n.params.id)}),Re(()=>{Ae(t.model)}),(k,c)=>{const U=ke,i=ue,u=ce;return e(t).detailLoading?(V(),K(U,{key:0})):(V(),S(X,{key:1},[o(e($e),{title:s.formType===e(j)?"create-sd-application":"update-sd-application"},{content:d(()=>[o(Me,{"onEmit:preview":g,"onEmit:clearForm":L},{default:d(()=>[o(u,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=w=>e(m).__curator.$model=w),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(m).__approvers.$model,"onUpdate:modelValue":c[1]||(c[1]=w=>e(m).__approvers.$model=w),error:e(m).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(m).__signers.$model,"onUpdate:modelValue":c[2]||(c[2]=w=>e(m).__signers.$model=w),disabled:"",label:"signers",placeholder:e(r).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(m).content.$model,"onUpdate:modelValue":c[3]||(c[3]=w=>e(m).content.$model=w),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:a.value,"onUpdate:modelValue":c[4]||(c[4]=w=>a.value=w),"send-button-loading":e(t).buttonLoading,"onEmit:send":R},{content:d(()=>[o(Yo,{"compose-model":{...e(t).model,curator:e(t).model.__curator,author:s.formType===e(j)?e(r).currentUser:e(t).model.__signers[0].user,signers:s.formType===e(j)?[e(r).currentUser]:e(t).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},dl=ve("sd-notice-store",{state:()=>(le(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:J.NOTICE,document_sub_type:ee.BUSINESS_TRIP,journal:re.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:$.withMessage("Поле не должен быть пустым",E)},start_date:{required:$.withMessage("Поле не должен быть пустым",E)},route:{required:$.withMessage("Поле не должен быть пустым",E)},content:{required:$.withMessage("Поле не должен быть пустым",E)},__companies:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__employees:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:s,error:r}=await Ve(Ue,p);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await xe({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,s=!1){try{this.detailLoading=!0;const{data:r}=await ge(p);he(this.model,r),this.model.__companies=[],this.model.__curator=await Le([],r.curator.id,!1),this.model.__employees=await G(r.notices),s?(this.model.__approvers=await G(r.approvers.filter(t=>{var v,a;return((v=t==null?void 0:t.user)==null?void 0:v.id)!==((a=r==null?void 0:r.curator)==null?void 0:a.assistant)})),this.model.register_number=null):this.model.__approvers=await G(r.approvers),this.model.__signers=await G(r.signers),this.model.__companies=await po(r.notices[0].destinations),this.model.__tags=await lo(r.tags),this.model.start_date=r.notices[0].start_date,this.model.end_date=r.notices[0].end_date,this.model.__tags=r.tags,this.model.route=r.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(p,s){try{this.detailLoading=!0;const{data:r}=await ge(p),t=await ge(s);he(this.model,r),this.model.__companies=[],this.model.__curator=await Le([],r.curator.id,!1),this.model.__employees=await G(t.data.notices),this.model.__approvers=await G(r.approvers),this.model.__signers=await G(r.signers),this.model.__companies=await po(t.data.notices[0].destinations),this.model.__tags=await lo(r.tags),this.model.start_date=t.data.notices[0].start_date,this.model.end_date=t.data.notices[0].end_date,this.model.__tags=r.tags,this.model.route=t.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),cl={class:"flex w-full gap-x-4"},br={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:j}},setup(p){const s=p,{t:r}=te(),t=ie(),v=se(),a=le(),l=dl(),_=de();De();const n=Z(l.rules,l.model),m=Q(!1),g=ne(()=>{const i=s.formType===j,u=t.params.document_sub_type;return u===ee.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":u===ee.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"}),L=ne(()=>{var i,u;return t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((i=t==null?void 0:t.query)==null?void 0:i.compose_id)&&((u=t==null?void 0:t.query)==null?void 0:u.document_sub_type)===ee.BUSINESS_TRIP}),R=ne(()=>{var i;return!!(t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL&&((i=l==null?void 0:l.model)!=null&&i.trip_notice_id))});Uo(()=>l.model.__tags,i=>{if(s.formType===j)if(i&&i.length){let u=`${i.map(w=>w.name_uz).join(", ")} yuzasidan`;l.model.short_description=u.charAt(0).toUpperCase()+u.slice(1).toLowerCase()}else l.model.short_description=null});const P=async()=>{var u,w,f,x,T;await n.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.approvers=oe(l.model.__approvers),l.model.signers=oe(l.model.__signers),l.model.curator=(w=(u=l==null?void 0:l.model)==null?void 0:u.__curator)==null?void 0:w.user_id,l.model.journal=t.params.document_type===J.DECREE||t.params.document_type===J.ORDER?re.ORDERS_PROTOCOLS:re.INNER,l.model.company=a.currentUser.company.id,l.model.notices=l.model.__employees.map(M=>({start_date:l.model.start_date,end_date:l.model.end_date,user:M.id,route:l.model.route,companies:l.model.__companies.map(b=>b.id)})),l.model.sender=(x=(f=a==null?void 0:a.currentUser)==null?void 0:f.top_level_department)==null?void 0:x.id,l.model.tags=l.model.__tags.map(M=>({id:M.id})),l.model.files=l.model.__files.map(M=>({id:M.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,L.value&&(l.model.trip_notice_id=(T=t==null?void 0:t.query)==null?void 0:T.compose_id),m.value=!0)},D=()=>{},O=i=>{l.model.__files=[],i.forEach(u=>{l.model.__files.push(u)})},k=async()=>{L.value&&(l.model.notices=[]);const i=await l.actionCreateDocument(l.model);await _.actionCountList(),i?(m.value=!1,F(null,r("document-sent"),I.SUCCESS),await v.replace({name:Te,query:{document_type:t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?J.DECREE:t.params.document_sub_type===ee.BUSINESS_TRIP_ORDER_LOCAL?J.ORDER:J.NOTICE}})):F(null,r("error-occurred"),I.ERROR)},c=async()=>{(L.value||R.value)&&(l.model.notices=[]),await l.actionUpdateDocument({id:t.params.id,body:l.model}),await _.actionCountList(),F(null,r("changed"),I.SUCCESS),await v.replace({name:Ee,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},U=()=>{s.formType===j?k():c()};return Xe(async()=>{t.params.id&&t.query.trip_notice_id&&t.params.document_sub_type===ee.BUSINESS_TRIP_DECREE_LOCAL?await l.actionGetDocumentDetailForUpdateForCustomUse(t.params.id,t.query.trip_notice_id):t.params.id?await l.actionGetDocumentDetailForUpdate(t.params.id):L.value&&await l.actionGetDocumentDetailForUpdate(t.query.compose_id,!0)}),Re(()=>{Ae(l.model)}),(i,u)=>{const w=ke,f=ue,x=Be,T=Je,M=Pe,b=ce;return e(l).detailLoading?(V(),K(w,{key:0})):(V(),S(X,{key:1},[o(e($e),{title:g.value},{content:d(()=>[o(Me,{"onEmit:preview":P,"onEmit:clearForm":D},{default:d(()=>[o(b,null,{default:d(()=>[o(f,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=h=>e(n).__curator.$model=h),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":u[1]||(u[1]=h=>e(n).__employees.$model=h),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:L.value||R.value},null,8,["modelValue","error","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(zo,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":u[2]||(u[2]=h=>e(n).__companies.$model=h),error:e(n).__companies,"text-truncate":"",disabled:L.value||R.value},null,8,["modelValue","error","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(so,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":u[3]||(u[3]=h=>e(n).__tags.$model=h),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:h})=>[me(z(h.name),1)]),option:d(({value:h})=>[o(e(be),{title:h.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[y("div",cl,[o(x,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[u[4]||(u[4]=h=>e(n).start_date.$model=h),u[5]||(u[5]=h=>e(n).start_date.$model=e(fe)(h))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:L.value||R.value},null,8,["modelValue","error","min-date","disabled"]),o(x,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[u[6]||(u[6]=h=>e(n).end_date.$model=h),u[7]||(u[7]=h=>e(n).end_date.$model=e(fe)(h))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:L.value||R.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(T,{modelValue:e(n).route.$model,"onUpdate:modelValue":u[8]||(u[8]=h=>e(n).route.$model=h),error:e(n).route,options:e(Eo),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:L.value||R.value},null,8,["modelValue","error","options","disabled"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":u[9]||(u[9]=h=>e(l).model.__approvers=h),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":u[10]||(u[10]=h=>e(n).__signers.$model=h),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(M,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":u[11]||(u[11]=h=>e(n).short_description.$model=h),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(n).content.$model,"onUpdate:modelValue":u[12]||(u[12]=h=>e(n).content.$model=h),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:m.value,"onUpdate:modelValue":u[13]||(u[13]=h=>m.value=h),"send-button-loading":e(l).buttonLoading,"onEmit:send":U},{content:d(()=>[e(t).params.document_sub_type===e(ee).BUSINESS_TRIP_DECREE_LOCAL?(V(),K(e(el),{key:0,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):e(t).params.document_sub_type===e(ee).BUSINESS_TRIP_ORDER_LOCAL?(V(),K(e(Ho),{key:1,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):(V(),K(e(Ko),{key:2,"compose-model":e(l).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},gr={__name:"OrderForm",props:{formType:{type:String,default:j}},setup(p){const s=p,r=ko(),t=de(),v=le(),a=ie(),l=se(),_=Z(r.rules,r.model),{t:n}=te(),m=Q(!1),g=async()=>{var c,U,i,u;await _.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=oe(r.model.__approvers),r.model.curator=(U=(c=r==null?void 0:r.model)==null?void 0:c.__curator)==null?void 0:U.user_id,r.model.sender=(u=(i=v==null?void 0:v.currentUser)==null?void 0:i.top_level_department)==null?void 0:u.id,r.model.files=r.model.__files.map(w=>({id:w.id})),r.model.document_type=a.params.document_type,r.model.document_sub_type=a.params.document_sub_type,r.model.journal=re.ORDERS_PROTOCOLS,r.model.register_date=fe(r.model.register_date),r.model.__negotiators.forEach(w=>{r.model.signers.push(w.hasOwnProperty("user")?{id:w.id,user:w.user.id,type:Oe.NEGOTIATOR}:{user:w.id,type:Oe.NEGOTIATOR})}),a.query.compose_id&&(r.model.trip_notice_id=a.query.compose_id),m.value=!0)},L=()=>{},R=async()=>{try{const k=await r.actionCreateDocument(r.model);await t.actionCountList(),k&&(m.value=!1,F(null,n("document-sent"),I.SUCCESS),await l.replace({name:Te,query:{document_type:J.ORDER}}))}catch{F(null,n("error-occurred"),I.ERROR)}},P=async()=>{try{const k=await r.actionUpdateDocument({id:a.params.id,body:r.model});await t.actionCountList(),F(null,n("changed"),I.SUCCESS),await l.replace({name:Ee,params:{id:a.params.id,document_type:a.params.document_type,document_sub_type:a.params.document_sub_type}})}catch{F(null,n("error-occurred"),I.ERROR)}},D=()=>{s.formType===j?R():P()},O=k=>{r.model.__files=[],k.forEach(c=>{r.model.__files.push(c)})};return to(async()=>{a.params.id&&await r.actionGetDocumentDetailForUpdate(a.params.id)}),Re(()=>{Ae(r.model)}),(k,c)=>{const U=ke,i=ue,u=Pe,w=Be,f=ce;return e(r).detailLoading?(V(),K(U,{key:0})):(V(),S(X,{key:1},[o(e($e),{title:s.formType===e(j)?"create-order":"update-order"},{content:d(()=>[o(Me,{"onEmit:preview":g,"onEmit:clearForm":L},{default:d(()=>[o(f,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=x=>e(_).__curator.$model=x),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(u,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":c[1]||(c[1]=x=>e(_).register_number.$model=x),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(w,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":c[2]||(c[2]=x=>e(_).register_date.$model=x),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":c[3]||(c[3]=x=>e(r).model.__approvers=x),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":c[4]||(c[4]=x=>e(_).__negotiators.$model=x),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(_).content.$model,"onUpdate:modelValue":c[5]||(c[5]=x=>e(_).content.$model=x),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:m.value,"onUpdate:modelValue":c[6]||(c[6]=x=>m.value=x),"send-button-loading":e(r).buttonLoading,"onEmit:send":D},{content:d(()=>[o(e(Qo),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ul=ve("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:s,error:r}=await Ve(Ue,p);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await xe({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:s}=await ge(p);he(this.model,s),this.model.__curator=await Le([],s.curator.id,!1),this.model.__approvers=await G(s.approvers),this.model.__signers=await G(s.signers)}catch{}finally{this.detailLoading=!1}}}}),wr={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:j}},setup(p){const s=p,{t:r}=te(),t=ie(),v=se(),a=le(),l=ul(),_=de();De();const n=Q(!1),m=Z(l.rules,l.model),g=async()=>{var c,U,i,u;await m.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=oe(l.model.__approvers),l.model.signers=oe(l.model.__signers),l.model.curator=(U=(c=l==null?void 0:l.model)==null?void 0:c.__curator)==null?void 0:U.user_id,l.model.journal=re.INNER,l.model.company=a.currentUser.company.id,l.model.sender=(u=(i=a==null?void 0:a.currentUser)==null?void 0:i.top_level_department)==null?void 0:u.id,l.model.files=l.model.__files.map(w=>({id:w.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,n.value=!0)},L=()=>{},R=k=>{l.model.__files=[],k.forEach(c=>{l.model.__files.push(c)})},P=async()=>{const k=await l.actionCreateDocument(l.model);await _.actionCountList(),k?(n.value=!1,F(null,r("document-sent"),I.SUCCESS),await v.replace({name:Te,query:{document_type:J.NOTICE}})):F(null,r("error-occurred"),I.ERROR)},D=async()=>{await l.actionUpdateDocument({id:t.params.id,body:l.model}),await _.actionCountList(),F(null,r("changed"),I.SUCCESS),await v.replace({name:Ee,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},O=()=>{s.formType===j?P():D()};return Xe(async()=>{t.params.id&&await l.actionGetDocumentDetailForUpdate(t.params.id)}),Re(()=>{Ae(l.model)}),(k,c)=>{const U=ke,i=ue,u=Pe,w=ce;return e(l).detailLoading?(V(),K(U,{key:0})):(V(),S(X,{key:1},[o(e($e),{title:s.formType===e(j)?"create-notice":"update-notice"},{content:d(()=>[o(Me,{"onEmit:preview":g,"onEmit:clearForm":L},{default:d(()=>[o(w,null,{default:d(()=>[o(i,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=f=>e(m).__curator.$model=f),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(u,{modelValue:e(m).short_description.$model,"onUpdate:modelValue":c[1]||(c[1]=f=>e(m).short_description.$model=f),error:e(m).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":c[2]||(c[2]=f=>e(l).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(i,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(m).__signers.$model,"onUpdate:modelValue":c[3]||(c[3]=f=>e(m).__signers.$model=f),error:e(m).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(i,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(m).content.$model,"onUpdate:modelValue":c[4]||(c[4]=f=>e(m).content.$model=f),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:n.value,"onUpdate:modelValue":c[5]||(c[5]=f=>n.value=f),"send-button-loading":e(l).buttonLoading,"onEmit:send":O},{content:d(()=>[o(e(Xo),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},pl=ve("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(p){const s={...p};delete s.bookings,delete s.notices,delete s.trip_plans,this.buttonLoading=!0;const{response:r,error:t}=await Ve(Ue,s);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:s}){const r={...s};delete r.bookings,delete r.notices,delete r.trip_plans;try{this.buttonLoading=!0;const{data:t}=await xe({id:p,body:r});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,s){try{this.detailLoading=!0;const{data:r}=await ge(p);he(this.model,r),this.model.__curator=await Le([],r.curator.id,!1),this.model.__approvers=await G(r.approvers),this.model.__signers=await G(r.signers)}catch{}finally{this.detailLoading=!1}}}}),hr={__name:"DecreeForm",props:{formType:{type:String,default:j}},setup(p){const s=p,{t:r}=te(),t=ie(),v=se(),a=le(),l=de();De();const _=Q(!1),n=pl(),m=ro(),g=Z(n.rules,n.model),L=async()=>{var i,u,w,f;await g.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=oe(n.model.__approvers),n.model.signers=oe(n.model.__signers),n.model.curator=(u=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:u.user_id,n.model.journal=re.ORDERS_PROTOCOLS,n.model.company=a.currentUser.company.id,n.model.sender=(f=(w=a==null?void 0:a.currentUser)==null?void 0:w.top_level_department)==null?void 0:f.id,n.model.files=n.model.__files.map(x=>({id:x.id})),n.model.document_type=t.params.document_type,n.model.document_sub_type=t.params.document_sub_type,t.query.compose_id&&(n.model.trip_notice_id=t.query.compose_id),_.value=!0)},R=()=>{},P=U=>{n.model.__files=[],U.forEach(i=>{n.model.__files.push(i)})},D=async()=>{const U=await n.actionCreateDocument(n.model);await l.actionCountList(),U?(_.value=!1,F(null,r("document-sent"),I.SUCCESS),await v.replace({name:Te,query:{document_type:t.params.document_type}})):F(null,r("error-occurred"),I.ERROR)},O=async()=>{await n.actionUpdateDocument({id:t.params.id,body:n.model}),await l.actionCountList(),F(null,r("changed"),I.SUCCESS),await v.replace({name:Ee,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},k=()=>{s.formType===j?D():O()},c=async U=>{const{data:i}=await m.actionGetDocumentDetail(U);n.model.notices=i==null?void 0:i.notices,n.model.trip_plans=i==null?void 0:i.trip_plans,n.model.bookings=i==null?void 0:i.bookings,n.model.short_description=i==null?void 0:i.short_description,n.model.trip_notice_register_number=i==null?void 0:i.register_number};return Xe(async()=>{s.formType===j&&t.query.compose_id?await c(t.query.compose_id):s.formType===Qe&&t.query.trip_notice_id&&t.params.id?(await n.actionGetDocumentDetailForUpdate(t.params.id,null),await c(t.query.trip_notice_id)):s.formType===Qe&&t.params.id&&await n.actionGetDocumentDetailForUpdate(t.params.id,null)}),Re(()=>{Ae(n.model)}),(U,i)=>{const u=ke,w=ue,f=Pe,x=ce;return e(n).detailLoading?(V(),K(u,{key:0})):(V(),S(X,{key:1},[o(e($e),{title:s.formType===e(j)?"create-decree":"update-decree"},{content:d(()=>[o(Me,{"onEmit:preview":L,"onEmit:clearForm":R},{default:d(()=>[o(x,null,{default:d(()=>[o(w,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(g).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=T=>e(g).__curator.$model=T),error:e(g).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(w,{"col-class":"w-1/2"},{default:d(()=>[o(f,{modelValue:e(g).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=T=>e(g).short_description.$model=T),error:e(g).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(w,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=T=>e(n).model.__approvers=T),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(w,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(g).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=T=>e(g).__signers.$model=T),error:e(g).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(w,{"col-class":"w-full"},{default:d(()=>[o(Se,{modelValue:e(g).content.$model,"onUpdate:modelValue":i[4]||(i[4]=T=>e(g).content.$model=T),error:e(g).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":P},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:_.value,"onUpdate:modelValue":i[5]||(i[5]=T=>_.value=T),"send-button-loading":e(n).buttonLoading,"onEmit:send":k},{content:d(()=>[o(e(wo),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ml=ve("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:$.withMessage("Поле не должен быть пустым",E)},start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},__user:{required:$.withMessage("Поле не должен быть пустым",E)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:s,error:r}=await Ve(Ue,p);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(r))},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:s}=await ge(p);return he(this.model,s),this.model.__curator=await Le([],s.curator.id,!1),this.model.__approvers=await G(s.approvers),this.model.__signers=await G(s.signers),this.model.__user=await We("users/personal-information",[],!1,s.user.id),this.model.__parent=s.parent,Promise.resolve(s)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await xe({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),yr={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:j}},setup(p){const s=p,r=ie(),t=se(),v=le(),a=ml();ro();const l=de(),{t:_}=te(),n=Z(a.rules,a.model),m=Q(!1),g=Q([]),L=ne(()=>s.formType===j?"create-poa":"update-poa"),R=ne(()=>a.model.start_date?new Date(a.model.start_date):new Date),P=async()=>{var u,w,f,x,T,M,b,h,q,B,C,Y,pe,N,H,A,Ge,Ie,io,co;if(await n.value.$validate()){if(a.model.approvers=[],a.model.signers=[],a.model.approvers=oe(a.model.__approvers),a.model.signers=oe(a.model.__signers),a.model.curator=(w=(u=a==null?void 0:a.model)==null?void 0:u.__curator)==null?void 0:w.user_id,a.model.user=(x=(f=a==null?void 0:a.model)==null?void 0:f.__user)==null?void 0:x.id,a.model.journal=re.POWER_OF_ATTORNEY,a.model.company=(M=(T=v.currentUser)==null?void 0:T.company)==null?void 0:M.id,a.model.sender=(h=(b=v==null?void 0:v.currentUser)==null?void 0:b.top_level_department)==null?void 0:h.id,a.model.document_type=r.params.document_type,a.model.document_sub_type=r.params.document_sub_type,a.model.content=".",a.model.parent=(B=(q=a.model)==null?void 0:q.__parent)==null?void 0:B.id,!((Y=(C=a==null?void 0:a.model)==null?void 0:C.__user)!=null&&Y.passport_seria||(N=(pe=a==null?void 0:a.model)==null?void 0:pe.__user)!=null&&N.passport_number||(A=(H=a==null?void 0:a.model)==null?void 0:H.__user)!=null&&A.passport_issue_date||(Ie=(Ge=a==null?void 0:a.model)==null?void 0:Ge.__user)!=null&&Ie.passport_issued_by)){F(null,`${(co=(io=a.model)==null?void 0:io.__user)==null?void 0:co.full_name}: ${_("passport-details-error")}`,I.WARNING);return}m.value=!0}},D=()=>{},O=async()=>{const i=await a.actionCreateDocument(a.model);await l.actionCountList(),i?(m.value=!1,F(null,_("document-sent"),I.SUCCESS),await t.replace({name:Te,query:{document_type:J.POWER_OF_ATTORNEY}})):F(null,_("error-occurred"),I.ERROR)},k=async()=>{await a.actionUpdateDocument({id:r.params.id,body:a.model}),await l.actionCountList(),F(null,_("changed"),I.SUCCESS),await t.replace({name:Ee,params:{id:r.params.id,document_type:r.params.document_type,document_sub_type:r.params.document_sub_type}})},c=()=>{s.formType===j?O():k()},U=async i=>{const{data:u}=await lt({user:i.id,document_sub_type:r.params.document_sub_type,status:5});g.value=u.results};return Xe(async()=>{if(r.params.id){const i=await a.actionGetDocumentDetailForUpdate(r.params.id);i.parent&&(g.value=[i.parent])}}),Re(()=>{Ae(a.model)}),(i,u)=>{const w=ke,f=ue,x=Be,T=Je,M=ce;return e(a).detailLoading?(V(),K(w,{key:0})):(V(),S(X,{key:1},[o(e($e),{title:L.value},{content:d(()=>[o(Me,{"onEmit:preview":P,"onEmit:clearForm":D},{default:d(()=>[o(M,null,{default:d(()=>[o(f,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=b=>e(n).__curator.$model=b),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(n).__user.$model,"onUpdate:modelValue":u[1]||(u[1]=b=>e(n).__user.$model=b),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":u[2]||(u[2]=b=>U(b))},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(x,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[u[3]||(u[3]=b=>e(n).start_date.$model=b),u[4]||(u[4]=b=>e(n).start_date.$model=e(fe)(b))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(x,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[u[5]||(u[5]=b=>e(n).end_date.$model=b),u[6]||(u[6]=b=>e(n).end_date.$model=e(fe)(b))],error:e(n).end_date,"min-date":R.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":u[7]||(u[7]=b=>e(a).model.__approvers=b),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":u[8]||(u[8]=b=>e(n).__signers.$model=b),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(T,{modelValue:e(a).model.__parent,"onUpdate:modelValue":u[9]||(u[9]=b=>e(a).model.__parent=b),options:g.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:m.value,"onUpdate:modelValue":u[10]||(u[10]=b=>m.value=b),"send-button-loading":e(a).buttonLoading,"onEmit:send":c},{content:d(()=>[o(Jo,{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},_l={class:"base-stepper-component flex items-center select-none"},ql=["onClick"],fl={key:0,class:"flex h-1 bg-greyscale-200 w-8"},bl={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(p,{emit:s}){const{t:r}=te(),t=v=>{s("emit:stepClick",v)};return(v,a)=>{const l=we;return V(),S("div",_l,[(V(!0),S(X,null,qe(p.items,(_,n)=>(V(),S("div",{key:_.id,class:"flex items-center"},[y("div",{class:Fe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",_.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:m=>t(_)},[o(l,{icon:_.icon,class:Fe(_.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),y("span",null,z(e(r)(_.label)),1)],10,ql),n<p.items.length-1?(V(),S("div",fl)):ae("",!0)]))),128))])}}},Ze=ve("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:"Xizmat safariga yuborish  to‘g‘risida",sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:$.withMessage("Поле не должен быть пустым",E)}},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)},__groups:{$each:$.forEach({__users:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},__regions:{required:$.withMessage("Поле не должен быть пустым",E)},__start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__end_date:{required:$.withMessage("Поле не должен быть пустым",E)},__company:{required:$.withMessage("Поле не должен быть пустым",E)},__route:{required:$.withMessage("Поле не должен быть пустым",E)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:$.forEach({users:{required:$.withMessage("Поле не должен быть пустым",E)},text:{required:$.withMessage("Поле не должен быть пустым",E)}})}},booking_model:{bookings:[{type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:$.forEach({segments:{$each:$.forEach({departure_city:{required:$.withMessage("Поле не должен быть пустым",E)},arrival_city:{required:$.withMessage("Поле не должен быть пустым",E)},date:{required:$.withMessage("Поле не должен быть пустым",E)},time:{required:$.withMessage("Поле не должен быть пустым",E)},segment_class:{required:$.withMessage("Поле не должен быть пустым",E)}})},passengers:{required:$.withMessage("Поле не должен быть пустым",E)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:So,active:!0,value:Ke},{id:4,label:"decree",icon:Co,active:!0,value:eo}],routeTabItems:[{id:1,title:"airplane",icon:Lo,value:Ye,name_uz:"Samolyot",name_ru:"Самолёт"},{id:2,title:"train",icon:Ro,value:rt,name_uz:"Poyezd",name_ru:"Поезд"},{id:3,title:"taxi",icon:Do,value:ho,name_uz:"Taksi",name_ru:"Такси"}],routeTypeTabItems:[{id:1,title:"there-back",icon:To,value:_e},{id:2,title:"complex-route",icon:Mo,value:no},{id:3,title:"one-way",icon:Oo,value:at}]}),actions:{async actionCreateDocument(p){const s=mo(p);this.buttonLoading=!0;const{response:r,error:t}=await Ve(Ue,s);return r?(this.buttonLoading=!1,await de().actionCountList(),Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:s}){const r=await mo(s);try{this.buttonLoading=!0;const{data:t}=await xe({id:p,body:r});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{await de().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){var s,r;try{this.detailLoading=!0;const{data:t}=await ge(p),v=await nt(t.id);this.decreeModel=(r=(s=v==null?void 0:v.data)==null?void 0:s.to_composes[0])==null?void 0:r.from_compose,he(this.model,t),this.model.__curator=await Le([],t.curator.id,!1),this.model.__signers=await G(t.signers),this.model.__approvers=await G(t.approvers);const a=Object.values(t.notices.reduce((l,_)=>{const n=_.group_id;return l[n]=l[n]||{group_id:n,items:[]},l[n].items.push(_),l},{}));this.model.__groups=await Promise.all(a.map(async l=>{const _=await Promise.all(l.items.map(async D=>({...await G([],D.user.id,!1),business_trip_id:D.id}))),n=await lo(l.items[0].tags),m=await We("regions",l.items[0].locations),g=await We("companies",[],!1,l.items[0].sender_company),L=l.items[0].start_date,R=l.items[0].end_date,P=l.items[0].route;return{__users:_,__tags:n,__regions:m,__start_date:L,__end_date:R,__company:g,__route:P}})),this.trip_plan_model.trip_plans=await Promise.all(t.trip_plans.map(async(l,_)=>({...l,users:await G(l.users)}))),this.booking_model.bookings=await Promise.all(t.bookings.map(async l=>({type:l.type,route:l.route,segments:await Promise.all(l.segments.map(async _=>({departure_city:await We("regions",[],!1,_.departure_city.id),arrival_city:await We("regions",[],!1,_.arrival_city.id),segment_class:await st.find(n=>n.value===_.segment_class),date:fe(_.departure_date),time:await Zo(_.departure_date,_.departure_end_date)}))),passengers:await G(l.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null})},actionDeleteGroupBlock(p){this.model.__groups.splice(p,1)},async actionStepClick(p,s,r){await p.replace({query:{...s.query,step:r}}),this.stepperItems.forEach(v=>v.active=v.value===r),await Po();const t=document.querySelector(".document-view-aside");t&&t.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(p){this.trip_plan_model.trip_plans.splice(p,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(p){this.booking_model.bookings.splice(p,1)},actionChangeRouteSegment(p,s){const r=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[s].segments=p===_e?[r(),r()]:[r()]},async actionAddRouteLine(p){this.booking_model.bookings[p].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(p,s){this.booking_model.bookings[p].segments.splice(s,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null,__company:null,__route:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:_e,route:Ye,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),gl={class:"trip-info-components"},wl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},hl={class:"flex justify-between"},yl={class:"text-base text-primary-900 font-semibold mb-1"},vl=["onClick"],kl={class:"flex align-center gap-x-4"},$l={class:"flex w-full gap-x-4"},Vl={class:"flex w-full gap-x-4"},xl={class:"text-base text-primary-900 font-semibold mb-2"},Ul={class:"flex items-center justify-between"},bo={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},emits:["emit:onValidateAndSend"],setup(p,{expose:s,emit:r}){const t=ie(),v=se(),a=Ze(),l=De(),{t:_,locale:n}=te(),m=Z(a.rules,a.model),g=Q(!1),L=k=>{a.model.__files=[],k.forEach(c=>{a.model.__files.push(c)})},R=()=>{a.actionAddGroupBlock()},P=async k=>{const c=await m.value.$validate();if(g.value=!0,!c){F(null,_("fill-required-fields"),I.WARNING);return}r("emit:onValidateAndSend"),await a.actionStepClick(v,t,"decree")},D=(k,c)=>{a.model.__groups[c].__regions=[]},O=(k,c)=>{k.value.forEach(U=>{var i,u,w,f;if(U.id===((f=(w=(u=(i=a.model)==null?void 0:i.__groups[c])==null?void 0:u.__company)==null?void 0:w.region)==null?void 0:f.id)){const x=a.model.__groups[c].__regions.findIndex(T=>T.id===U.id);(x||x===0)&&a.model.__groups[c].__regions.splice(x,1)}})};return s({stepClick:P}),(k,c)=>{const U=ue,i=Pe,u=we,w=Je,f=so,x=Be,T=ce,M=Ne;return V(),S("div",gl,[o(T,null,{default:d(()=>[o(U,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=b=>e(m).__curator.$model=b),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom-specific",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(U,{"col-class":"w-1/2"},{default:d(()=>[o(i,{modelValue:e(m).short_description.$model,"onUpdate:modelValue":c[1]||(c[1]=b=>e(m).short_description.$model=b),error:e(m).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(U,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[(V(!0),S(X,null,qe(e(a).model.__groups,(b,h)=>(V(),S("div",wl,[y("div",hl,[y("span",yl,z(e(_)("group"))+"-"+z(h+1),1),h!==0?(V(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:q=>e(a).actionDeleteGroupBlock(h)},[o(u,{icon:e(ze),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,vl)):ae("",!0)]),o(T,null,{default:d(()=>[o(U,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:b.__users,"onUpdate:modelValue":q=>b.__users=q,error:e(m).__groups.$each.$response.$data[h].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":g.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(U,{"col-class":"w-1/2"},{default:d(()=>[y("div",kl,[o(w,{modelValue:b.__company,"onUpdate:modelValue":q=>b.__company=q,error:e(m).__groups.$each.$response.$data[h].__company,options:e(l).filialList,"onUpdate:options":c[2]||(c[2]=q=>e(l).filialList=q),required:"","api-url":"companies",label:"from-where-filial",placeholder:"choose-one","menu-placeholder":"search","option-label":"name",searchable:"","show-nested-error":g.value,class:"w-1/2","onEmit:change":q=>D(q,h)},{option:d(({option:q})=>[o(e(be),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","onEmit:change"]),o(f,{modelValue:b.__regions,"onUpdate:modelValue":q=>b.__regions=q,error:e(m).__groups.$each.$response.$data[h].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"to-where",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":g.value,class:"w-1/2","onEmit:change":q=>O(q,h)},{chip:d(({value:q})=>[me(z(q.name),1)]),option:d(({value:q})=>[o(e(be),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error","onEmit:change"])])]),_:2},1024),o(U,{"col-class":"w-1/2"},{default:d(()=>[y("div",$l,[o(f,{modelValue:b.__tags,"onUpdate:modelValue":q=>b.__tags=q,error:e(m).__groups.$each.$response.$data[h].__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":g.value,class:"w-1/2"},{chip:d(({value:q})=>[me(z(q.name),1)]),option:d(({value:q})=>[o(e(be),{title:q.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"]),o(w,{modelValue:b.__route,"onUpdate:modelValue":q=>b.__route=q,error:e(m).__groups.$each.$response.$data[h].__route,options:e(a).routeTabItems,"onUpdate:options":c[3]||(c[3]=q=>e(a).routeTabItems=q),required:"",label:"transport-type",placeholder:"select-transport-type","option-label":e(n)==="uz"?"name_uz":"name_ru","option-value":"value","show-nested-error":g.value,class:"w-1/2"},{option:d(({option:q})=>[o(e(be),{title:e(_)(q.title),"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","option-label","show-nested-error"])])]),_:2},1024),o(U,{"col-class":"w-1/2"},{default:d(()=>[y("div",Vl,[o(x,{modelValue:b.__start_date,"onUpdate:modelValue":[q=>b.__start_date=q,q=>b.__start_date=e(fe)(q)],error:e(m).__groups.$each.$response.$data[h].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":g.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(x,{modelValue:b.__end_date,"onUpdate:modelValue":[q=>b.__end_date=q,q=>b.__end_date=e(fe)(q)],error:e(m).__groups.$each.$response.$data[h].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":g.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(M,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(je),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:R},null,8,["icon-left"])]),_:1}),o(U,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":c[4]||(c[4]=b=>e(a).model.__approvers=b),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(U,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(m).__signers.$model,"onUpdate:modelValue":c[5]||(c[5]=b=>e(m).__signers.$model=b),error:e(m).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(U,{"col-class":"w-full"},{default:d(()=>[y("div",{class:Fe(["border-[1.5px] rounded-2xl px-5 py-4",g.value&&!e(a).model.content?"border-critic-500":"border-greyscale-200"])},[y("div",xl,z(e(_)("notice")),1),o(Se,{modelValue:e(m).content.$model,"onUpdate:modelValue":c[6]||(c[6]=b=>e(m).content.$model=b),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])],2)]),_:1})]),_:1}),y("div",Ul,[o(M,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(M,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:c[7]||(c[7]=b=>P(e(ao)))})])])}}},El={class:"work-plan-component"},Sl={class:"flex flex-col gap-y-3"},Cl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ll={class:"flex justify-between"},Rl={class:"text-base text-primary-900 font-semibold mb-1"},Dl=["onClick"],Tl={class:"flex items-center justify-between mt-10"},Ml={class:"flex items-center gap-x-1"},Ol={__name:"WorkPlan",setup(p,{expose:s}){const{t:r}=te(),t=ie(),v=se(),a=Ze(),l=Z(a.trip_plan_rules,a.trip_plan_model),_=Q(!1),n=ne(()=>{const L=new Set;return a.model.__groups.reduce((R,P)=>P.__users&&Array.isArray(P.__users)?R.concat(P.__users):R,[]).filter(R=>L.has(R.id)?!1:(L.add(R.id),!0))}),m=async L=>{const R=await l.value.$validate();if(_.value=!0,!R){F(null,r("fill-required-fields"),I.WARNING);return}const P=a.trip_plan_model.trip_plans.flatMap(O=>{var k;return(k=O.users)==null?void 0:k.map(c=>c.id)}),D=n.value.filter(O=>!P.includes(O.id));D.length?(F(null,`У следующих сотрудников нет плана работы: ${D==null?void 0:D.map(O=>O.first_name+" "+O.last_name).join(", ")}.`,I.WARNING),F(null,"У всех сотрудников должен быть назначен рабочий план.",I.WARNING)):await a.actionStepClick(v,t,L)},g=()=>{a.actionAddWorkPlanRow(),_.value=!1};return s({stepClick:m}),(L,R)=>{const P=we,D=vo,O=ue,k=ce,c=Ne;return V(),S("div",El,[y("div",Sl,[(V(!0),S(X,null,qe(e(a).trip_plan_model.trip_plans,(U,i)=>(V(),S("div",Cl,[y("div",Ll,[y("span",Rl,z(e(r)("plan"))+"-"+z(i+1),1),i!==0?(V(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:u=>e(a).actionDeleteWorkPlanRow(i)},[o(P,{icon:e(ze),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Dl)):ae("",!0)]),o(k,null,{default:d(()=>[o(O,{"col-class":"w-1/2"},{default:d(()=>[o(D,{modelValue:U.text,"onUpdate:modelValue":u=>U.text=u,error:e(l).trip_plans.$each.$response.$data[i].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(O,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:U.users,"onUpdate:modelValue":u=>U.users=u,options:n.value,error:e(l).trip_plans.$each.$response.$data[i].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(c,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(je),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:g},null,8,["icon-left"]),y("div",Tl,[o(c,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",Ml,[o(c,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:R[0]||(R[0]=U=>m(e(Ke)))}),o(c,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:R[1]||(R[1]=U=>m(e(yo)))})])])])}}};const Pl={class:"base-time-picker"},Nl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(p){const s=p,r=oo(s,"modelValue"),{t}=te();return(v,a)=>{var n;const l=mt,_=we;return V(),S("div",Pl,[o(l,{label:s.label,required:s.required},null,8,["label","required"]),o(e(_t),{modelValue:e(r),"onUpdate:modelValue":a[0]||(a[0]=m=>He(r)?r.value=m:null),"time-picker":"",range:p.range,"cancel-text":e(t)("cancel"),"select-text":e(t)("select"),placeholder:e(t)(p.placeholder),ref:"datePicker",class:Fe({"input-error":((n=p.error)==null?void 0:n.$error)&&p.showNestedError})},{"input-icon":d(()=>[o(_,{icon:e(No),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Al={class:"route-component flex flex-col gap-y-3"},Il={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Fl={class:"flex items-center justify-between"},zl={class:"flex items-center gap-x-4"},jl={class:"text-base text-primary-900 font-semibold mb-1"},Bl={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Gl={class:"text-xs text-greyscale-900 font-medium"},Wl=["onClick"],Yl=["onClick"],Hl={class:"text-sm text-primary-500 font-semibold"},Kl={class:"flex items-center justify-between mt-10"},Ql={class:"flex items-center gap-x-1"},Xl={__name:"Route",props:{formType:{type:String,default:j}},emits:["emit:onValidateAndSend"],setup(p,{expose:s,emit:r}){const{t}=te(),v=ie(),a=se(),l=Ze(),_=De();le(),de();const n=Z(l.booking_model_rules,l.booking_model);Q(!1);const m=Q(!1),g=ne(()=>{const i=new Set;return l.model.__groups.reduce((u,w)=>w.__users&&Array.isArray(w.__users)?u.concat(w.__users):u,[]).filter(u=>i.has(u.id)?!1:(i.add(u.id),!0))}),L=i=>{l.routeTabItems.forEach(u=>u.active=u.id===i.id)},R=(i,u)=>{l.routeTypeTabItems.forEach(w=>w.active=w.id===i.id),l.actionChangeRouteSegment(i.value,u)},P=async(i,u=!1)=>{var T,M;const w=await n.value.$validate();if(m.value=!0,!w){F(null,t("fill-required-fields"),I.WARNING);return}const f=(T=l.booking_model.bookings)==null?void 0:T.flatMap(b=>{var h;return(h=b.passengers)==null?void 0:h.map(q=>q==null?void 0:q.id)}),x=(M=g.value)==null?void 0:M.filter(b=>!(f!=null&&f.includes(b.id)));x.length?(F(null,`У следующих сотрудников не назначен маршрут: ${x.map(b=>b.first_name+" "+b.last_name).join(", ")}.`,I.WARNING),F(null,"У всех сотрудников должен быть назначен маршрут",I.WARNING)):(u&&r("emit:onValidateAndSend"),await l.actionStepClick(a,v,i))},D=()=>{l.actionAddRouteRow(),m.value=!1},O=(i,u,w,f)=>{f.type===_e&&(l.booking_model.bookings[u].segments[w+1].arrival_city=i)},k=(i,u,w,f)=>{f.type===_e&&(l.booking_model.bookings[u].segments[w+1].departure_city=i)},c=(i,u,w,f)=>{f.type===_e&&(l.booking_model.bookings[u].segments[w+1].segment_class=i)},U=()=>{P(eo,!0)};return s({stepClick:P}),(i,u)=>{const w=Je,f=ue,x=Be,T=ce,M=Ne;return V(),S("div",Al,[(V(!0),S(X,null,qe(e(l).booking_model.bookings,(b,h)=>(V(),S("div",Il,[y("div",Fl,[y("div",zl,[y("span",jl,z(e(t)("route"))+"-"+z(h+1),1),o(fo,{modelValue:b.route,"onUpdate:modelValue":q=>b.route=q,items:e(l).routeTabItems,"onEmit:onChange":u[0]||(u[0]=q=>L(q))},null,8,["modelValue","onUpdate:modelValue","items"]),o(fo,{modelValue:b.type,"onUpdate:modelValue":q=>b.type=q,items:e(l).routeTypeTabItems,"onEmit:onChange":q=>R(q,h)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),h!==0?(V(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:u[1]||(u[1]=(...q)=>e(l).actionDeleteRouteRow&&e(l).actionDeleteRouteRow(...q))},[o(we,{icon:e(ze),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):ae("",!0)]),y("div",Bl,[o(we,{icon:e(Ao),class:"text-warning-500"},null,8,["icon"]),y("span",Gl,z(e(t)("route-warning")),1)]),(V(!0),S(X,null,qe(b.segments,(q,B)=>(V(),S("div",null,[o(T,null,{default:d(()=>[o(f,{"col-class":"w-1/5"},{default:d(()=>[o(w,{modelValue:q.departure_city,"onUpdate:modelValue":C=>q.departure_city=C,error:e(n).bookings.$each.$response.$data[h].segments.$each.$data[B].departure_city,options:e(_).regionsList,"onUpdate:options":u[2]||(u[2]=C=>e(_).regionsList=C),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":m.value,disabled:b.type===e(_e)&&B%2!==0,"onEmit:change":C=>O(C,h,B,b)},{option:d(({option:C})=>[o(e(be),{title:C.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:d(()=>[o(w,{modelValue:q.arrival_city,"onUpdate:modelValue":C=>q.arrival_city=C,error:e(n).bookings.$each.$response.$data[h].segments.$each.$data[B].arrival_city,options:e(_).regionsList.filter(C=>{var Y;return(C==null?void 0:C.id)!=((Y=q.departure_city)==null?void 0:Y.id)}),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":m.value,disabled:b.type===e(_e)&&B%2!==0,"onEmit:change":C=>k(C,h,B,b)},{option:d(({option:C})=>[o(e(be),{title:C.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:d(()=>[o(w,{modelValue:q.segment_class,"onUpdate:modelValue":C=>q.segment_class=C,error:e(n).bookings.$each.$response.$data[h].segments.$each.$data[B].segment_class,options:b.route===e(ho)?e(it):b.route===e(Ye)?e(dt):e(ct),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":m.value,translatable:"",disabled:b.type===e(_e)&&B%2!==0,"onEmit:change":C=>c(C,h,B,b)},{option:d(({option:C})=>[o(e(be),{title:C.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(f,{"col-class":"w-1/5"},{default:d(()=>[o(x,{modelValue:q.date,"onUpdate:modelValue":[C=>q.date=C,C=>q.date=e(fe)(C)],error:e(n).bookings.$each.$response.$data[h].segments.$each.$data[B].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),o(f,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:d(()=>[o(Nl,{modelValue:q.time,"onUpdate:modelValue":C=>q.time=C,error:e(n).bookings.$each.$response.$data[h].segments.$each.$data[B].time,label:"time",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),b.type===e(no)&&B!==0?(V(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:C=>e(l).actionDeleteRouteLine(h,B)},[o(we,{icon:e(ze),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Wl)):ae("",!0)]),_:2},1024)]),_:2},1024)]))),256)),b.type===e(no)?(V(),S("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:q=>e(l).actionAddRouteLine(h)},[o(we,{icon:e(je),class:"text-primary-500"},null,8,["icon"]),y("span",Hl,z(e(t)("add-line")),1)],8,Yl)):ae("",!0),o(T,null,{default:d(()=>[o(f,{"col-class":"w-full"},{default:d(()=>[o(W,{modelValue:b.passengers,"onUpdate:modelValue":q=>b.passengers=q,options:g.value,error:e(n).bookings.$each.$response.$data[h].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),o(M,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(je),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:D},null,8,["icon-left"]),y("div",Kl,[o(M,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",Ql,[o(M,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:u[3]||(u[3]=b=>P(e(ao)))}),o(M,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(l).buttonLoading,onClick:U},null,8,["loading"])])])])}}},Jl={class:"decree-component"},Zl={class:"flex items-center justify-between mt-10"},en={class:"flex items-center gap-x-1"},on={__name:"Decree",props:{formType:{type:String,default:j}},setup(p,{expose:s}){const r=p,t=ie(),v=se(),a=Ze(),l=Z(a.decreeRules,a.decreeModel),{t:_}=te(),n=le(),m=de(),g=Q(!1),L=async k=>{await a.actionStepClick(v,t,k)},R=k=>{a.decreeModel.__files=[],k.forEach(c=>{a.decreeModel.__files.push(c)})},P=async()=>{var c,U,i,u;if(!await l.value.$validate()){F(null,_("fill-required-fields"),I.WARNING);return}a.decreeModel.approvers=[],a.decreeModel.signers=[],a.decreeModel.curator=(U=(c=a.model)==null?void 0:c.__curator)==null?void 0:U.user_id,a.decreeModel.journal=re.ORDERS_PROTOCOLS,a.decreeModel.company=n.currentUser.company.id,a.decreeModel.sender=(u=(i=n==null?void 0:n.currentUser)==null?void 0:i.top_level_department)==null?void 0:u.id,a.decreeModel.document_type=J.DECREE,a.decreeModel.document_sub_type=ee.BUSINESS_TRIP_DECREE_V2,a.decreeModel.short_description=a.model.short_description,g.value=!0},D=async(k,c)=>{try{await a.actionUpdateDocument({id:c,body:{...a.decreeModel,trip_notice_id:k}}),await m.actionCountList(),F(null,_("successfully-saved"),I.SUCCESS)}catch{}},O=async()=>{var c;let k=null;r.formType===j&&t.query.notice_id?k=t.query.notice_id:r.formType===Qe&&t.params.id&&(k=t.params.id);try{await D(k,(c=a.decreeModel)==null?void 0:c.id),await v.replace({name:Ee,params:{id:k,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})}catch{}};return s({stepClick:L}),(k,c)=>{const U=Ne;return V(),S("div",Jl,[o(Se,{modelValue:e(l).content.$model,"onUpdate:modelValue":c[0]||(c[0]=i=>e(l).content.$model=i),error:e(l).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).decreeModel.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"]),y("div",Zl,[o(U,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),y("div",en,[o(U,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:c[1]||(c[1]=i=>L(e(Ke)))}),o(U,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:P})])]),o(Ce,{modelValue:g.value,"onUpdate:modelValue":c[2]||(c[2]=i=>g.value=i),"send-button-loading":e(a).buttonLoading,"onEmit:send":O,"content-classes":"p-0"},{content:d(()=>[o(e(et),{"compose-model":{...e(a).model,bookings:e(a).booking_model.bookings,trip_plans:e(a).trip_plan_model.trip_plans,decree_content:e(a).decreeModel.content},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},tn={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},ln={class:"px-6 py-4"},vr={__name:"BusinessTripForm",props:{formType:{type:String,default:j}},setup(p){const s=p,{t:r}=te(),t=ie(),v=se(),a=le(),l=Ze();Z(l.rules,l.model),Z(l.trip_plan_rules,l.trip_plan_model),Z(l.booking_model_rules,l.booking_model),Z(l.decreeRules,l.decreeModel);const _=Q(null),n=ne(()=>s.formType===j?"create-business-trip-notice":"update-business-trip-notice"),m=ne(()=>{switch(t.query.step){case Ke:return bo;case eo:return on;case ao:return Ol;case yo:return Xl;default:return bo}}),g=async D=>{var k;const O=e(_);((k=t.query)==null?void 0:k.step)!==D.value&&(await O.stepClick(D.value),D.value,eo)},L=async()=>{t.query.step||await v.replace({query:{...t.query,step:Ke}}),l.stepperItems.forEach(D=>D.active=D.value===t.query.step)},R=async()=>{var k,c,U,i,u,w,f,x,T,M,b,h;const D=oe(l.model.__approvers),O=oe(l.model.__signers);if(l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.bookings=[],l.model.trip_plans=[],l.model.approvers=D,l.model.signers=O,l.model.curator=(c=(k=l.model)==null?void 0:k.__curator)==null?void 0:c.user_id,l.model.journal=re.INNER,l.model.company=(i=(U=a.currentUser)==null?void 0:U.company)==null?void 0:i.id,l.model.__groups.forEach((q,B)=>{const C=B+1;l.model.notices.push(...q.__users.map(Y=>{var pe,N,H;return{start_date:q.__start_date,end_date:q.__end_date,user:Y.id,company:(N=(pe=a.currentUser)==null?void 0:pe.company)==null?void 0:N.id,sender_company:(H=q.__company)==null?void 0:H.id,regions:q.__regions.map(A=>A.id),tags:q.__tags.map(A=>({id:A.id})),route:q.__route,group_id:C,...Y.business_trip_id?{id:Y.business_trip_id}:{}}}))}),l.model.sender=(w=(u=a==null?void 0:a.currentUser)==null?void 0:u.top_level_department)==null?void 0:w.id,l.model.files=l.model.__files.map(q=>({id:q.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,s.formType===j&&t.query.notice_id)try{await l.actionUpdateDocument({id:t.query.notice_id,body:l.model})}catch{}else if(s.formType===j)try{const{data:q}=await l.actionCreateDocument(l.model),B={approvers:[],signers:[],curator:(x=(f=l.model)==null?void 0:f.__curator)==null?void 0:x.user_id,journal:re.ORDERS_PROTOCOLS,company:a.currentUser.company.id,sender:(M=(T=a==null?void 0:a.currentUser)==null?void 0:T.top_level_department)==null?void 0:M.id,document_type:J.DECREE,document_sub_type:ee.BUSINESS_TRIP_DECREE_V2,short_description:(b=l.model)==null?void 0:b.short_description,trip_notice_id:q.id,content:q.content};l.decreeModel.content=q.content;try{const C=await l.actionCreateDocument(B);l.decreeModel.id=(h=C==null?void 0:C.data)==null?void 0:h.id,await v.replace({query:{...t.query,notice_id:q.id}}),await l.actionGetDocumentDetailForUpdate(q.id)}catch{}}catch{}else if(s.formType===Qe&&t.params.id)try{await l.actionUpdateDocument({id:t.params.id,body:l.model})}catch{}},P=async()=>{try{await R(),await F(null,r("notice-saved-successfully"),I.SUCCESS)}catch{}};return Xe(async()=>{await L(),s.formType===Qe?await l.actionGetDocumentDetailForUpdate(t.params.id):t.query.notice_id&&await l.actionGetDocumentDetailForUpdate(t.query.notice_id)}),Re(()=>{l.actionResetBTModel()}),(D,O)=>{const k=ke,c=bl;return V(),S("div",{class:Fe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(l).detailLoading}])},[e(l).detailLoading?(V(),K(k,{key:0})):(V(),K(e($e),{key:1,title:n.value},{content:d(()=>[y("div",tn,[o(c,{items:e(l).stepperItems,"onEmit:stepClick":g},null,8,["items"])]),y("div",ln,[(V(),K(Io(m.value),{"form-type":p.formType,ref_key:"childComponent",ref:_,"onEmit:onValidateAndSend":P},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}},nn=ve("sd-decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:$.withMessage("Поле не должен быть пустым",E)},__curator:{required:$.withMessage("Поле не должен быть пустым",E)},__signers:{required:$.withMessage("Поле не должен быть пустым",E)},short_description:{required:$.withMessage("Поле не должен быть пустым",E)},__groups:{$each:$.forEach({__users:{required:$.withMessage("Поле не должен быть пустым",E)},__tags:{required:$.withMessage("Поле не должен быть пустым",E)},__regions:{required:$.withMessage("Поле не должен быть пустым",E)},__start_date:{required:$.withMessage("Поле не должен быть пустым",E)},__end_date:{required:$.withMessage("Поле не должен быть пустым",E)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:$.forEach({users:{required:$.withMessage("Поле не должен быть пустым",E)},text:{required:$.withMessage("Поле не должен быть пустым",E)}})}}}),actions:{actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(p){this.model.__groups.splice(p,1)},actionDeleteWorkPlanRow(p){this.trip_plan_model.trip_plans.splice(p,1)},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},async actionCreateDocument(p){this.buttonLoading=!0;const{response:s,error:r}=await Ve(Ue,p);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:s}){try{this.buttonLoading=!0;const{data:r}=await xe({id:p,body:s});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}}}}),rn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},an={class:"flex justify-between"},sn={class:"text-base text-primary-900 font-semibold mb-1"},dn=["onClick"],cn={class:"flex w-full gap-x-4"},un={class:"flex flex-col gap-y-3"},pn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},mn={class:"flex justify-between"},_n={class:"text-base text-primary-900 font-semibold mb-1"},qn=["onClick"],fn={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},bn={class:"text-base text-primary-900 font-semibold mb-2"},kr={__name:"BusinessTripDecreeForm",props:{formType:{type:String,default:j}},setup(p){const s=p,r=Q(!1),t=Q(!1),{t:v}=te(),a=ie(),l=se(),_=le(),n=nn(),m=de();De();const g=Z(n.rules,n.model),L=Z(n.trip_plan_rules,n.trip_plan_model),R=ne(()=>s.formType===j?"create-decree":"update-decree"),P=ne(()=>{const f=new Set;return n.model.__groups.reduce((x,T)=>T.__users&&Array.isArray(T.__users)?x.concat(T.__users):x,[]).filter(x=>f.has(x.id)?!1:(f.add(x.id),!0))}),D=async()=>{var M,b,h,q,B,C;if(r.value=!0,!await g.value.$validate()){F(null,v("fill-required-fields"),I.WARNING);return}const x=oe(n.model.__approvers),T=oe(n.model.__signers);n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.bookings=[],n.model.trip_plans=[],n.model.approvers=x,n.model.signers=T,n.model.curator=(b=(M=n.model)==null?void 0:M.__curator)==null?void 0:b.user_id,n.model.journal=re.ORDERS_PROTOCOLS,n.model.company=(q=(h=_.currentUser)==null?void 0:h.company)==null?void 0:q.id,n.model.__groups.forEach((Y,pe)=>{const N=pe+1;n.model.notices.push(...Y.__users.map(H=>{var A,Ge;return{start_date:Y.__start_date,end_date:Y.__end_date,user:H.id,company:(Ge=(A=_.currentUser)==null?void 0:A.company)==null?void 0:Ge.id,regions:Y.__regions.map(Ie=>Ie.id),tags:Y.__tags.map(Ie=>({id:Ie.id})),group_id:N}}))}),n.model.sender=(C=(B=_==null?void 0:_.currentUser)==null?void 0:B.top_level_department)==null?void 0:C.id,n.model.files=n.model.__files.map(Y=>({id:Y.id})),n.model.document_type=a.params.document_type,n.model.document_sub_type=a.params.document_sub_type,n.model.trip_plans=n.trip_plan_model.trip_plans.map(Y=>({users:Y.users.map(pe=>({id:pe.id})),text:Y.text})),t.value=!0},O=()=>{},k=()=>{n.actionAddGroupBlock()},c=()=>{n.actionAddWorkPlanRow(),r.value=!1},U=f=>{n.model.__files=[],f.forEach(x=>{n.model.__files.push(x)})},i=async()=>{const f=await n.actionCreateDocument(n.model);await m.actionCountList(),f?(t.value=!1,F(null,v("document-sent"),I.SUCCESS),await l.replace({name:Te,query:{document_type:a.params.document_type}})):F(null,v("error-occurred"),I.ERROR)},u=async()=>{await n.actionUpdateDocument({id:a.params.id,body:n.model}),await m.actionCountList(),F(null,v("changed"),I.SUCCESS),await l.replace({name:Ee,params:{id:a.params.id,document_type:a.params.document_type,document_sub_type:a.params.document_sub_type}})},w=()=>{s.formType===j?i():u()};return(f,x)=>{const T=ke,M=ue,b=Pe,h=we,q=so,B=Be,C=ce,Y=Ne,pe=vo;return e(n).detailLoading?(V(),K(T,{key:0})):(V(),S(X,{key:1},[o(e($e),{title:R.value},{content:d(()=>[o(Me,{"onEmit:preview":D,"onEmit:clearForm":O},{default:d(()=>[o(C,null,{default:d(()=>[o(M,{"col-class":"w-1/2"},{default:d(()=>[o(ye,{modelValue:e(g).__curator.$model,"onUpdate:modelValue":x[0]||(x[0]=N=>e(g).__curator.$model=N),error:e(g).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(M,{"col-class":"w-1/2"},{default:d(()=>[o(b,{modelValue:e(g).short_description.$model,"onUpdate:modelValue":x[1]||(x[1]=N=>e(g).short_description.$model=N),error:e(g).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(M,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:d(()=>[(V(!0),S(X,null,qe(e(n).model.__groups,(N,H)=>(V(),S("div",rn,[y("div",an,[y("span",sn,z(e(v)("group"))+"-"+z(H+1),1),H!==0?(V(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:A=>e(n).actionDeleteGroupBlock(H)},[o(h,{icon:e(ze),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,dn)):ae("",!0)]),o(C,null,{default:d(()=>[o(M,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:N.__users,"onUpdate:modelValue":A=>N.__users=A,error:e(g).__groups.$each.$response.$data[H].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(M,{"col-class":"w-1/2"},{default:d(()=>[o(q,{modelValue:N.__regions,"onUpdate:modelValue":A=>N.__regions=A,error:e(g).__groups.$each.$response.$data[H].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":r.value},{chip:d(({value:A})=>[me(z(A.name),1)]),option:d(({value:A})=>[o(e(be),{title:A.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(M,{"col-class":"w-1/2"},{default:d(()=>[o(q,{modelValue:N.__tags,"onUpdate:modelValue":A=>N.__tags=A,error:e(g).__groups.$each.$response.$data[H].__tags,"api-url":"tags","api-params":{document_sub_type:e(a).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":r.value},{chip:d(({value:A})=>[me(z(A.name),1)]),option:d(({value:A})=>[o(e(be),{title:A.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),o(M,{"col-class":"w-1/2"},{default:d(()=>[y("div",cn,[o(B,{modelValue:N.__start_date,"onUpdate:modelValue":[A=>N.__start_date=A,A=>N.__start_date=e(fe)(A)],error:e(g).__groups.$each.$response.$data[H].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(B,{modelValue:N.__end_date,"onUpdate:modelValue":[A=>N.__end_date=A,A=>N.__end_date=e(fe)(A)],error:e(g).__groups.$each.$response.$data[H].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(Y,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(je),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:k},null,8,["icon-left"])]),_:1})]),_:1}),y("div",un,[(V(!0),S(X,null,qe(e(n).trip_plan_model.trip_plans,(N,H)=>(V(),S("div",pn,[y("div",mn,[y("span",_n,z(e(v)("plan"))+"-"+z(H+1),1),H!==0?(V(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:A=>e(n).actionDeleteWorkPlanRow(H)},[o(h,{icon:e(ze),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,qn)):ae("",!0)]),o(C,null,{default:d(()=>[o(M,{"col-class":"w-1/2"},{default:d(()=>[o(pe,{modelValue:N.text,"onUpdate:modelValue":A=>N.text=A,error:e(L).trip_plans.$each.$response.$data[H].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(M,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:N.users,"onUpdate:modelValue":A=>N.users=A,options:P.value,error:e(L).trip_plans.$each.$response.$data[H].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":r.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(Y,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(je),"root-classes":"",type:"button",shadow:"",class:"my-3 rounded-[10px]",onClick:c},null,8,["icon-left"]),o(C,null,{default:d(()=>[o(M,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":x[2]||(x[2]=N=>e(n).model.__approvers=N),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(M,{"col-class":"w-1/2"},{default:d(()=>[o(W,{modelValue:e(g).__signers.$model,"onUpdate:modelValue":x[3]||(x[3]=N=>e(g).__signers.$model=N),error:e(g).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(M,{"col-class":"w-full"},{default:d(()=>[y("div",fn,[y("div",bn,z(e(v)("decree")),1),o(Se,{modelValue:e(g).content.$model,"onUpdate:modelValue":x[4]||(x[4]=N=>e(g).content.$model=N),error:e(g).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":U},null,8,["modelValue","error","files"])])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Ce,{modelValue:t.value,"onUpdate:modelValue":x[5]||(x[5]=N=>t.value=N),"send-button-loading":e(n).buttonLoading,"onEmit:send":w},{content:d(()=>[o(e(wo),{"compose-model":{...e(n).model,trip_plans:e(n).trip_plan_model.trip_plans,type:"decree_for_leadership"},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{qr as _,gr as a,wr as b,hr as c,vr as d,kr as e,fr as f,br as g,yr as h};
