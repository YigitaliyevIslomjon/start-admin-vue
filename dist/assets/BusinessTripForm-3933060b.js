import{_ as de}from"./BaseRow-41f9cd56.js";import{_ as Me}from"./BaseInput-172dbad8.js";import{_ as ce}from"./BaseCol-ecd3b235.js";import{v as G,b$ as ze,a6 as Be,o as v,c as S,i as o,z as c,h as e,bb as Ie,B as vt,d6 as kt,cU as Vt,f as W,a as P,n as be,r as bt,G as Ge,aD as he,c2 as H,c3 as Q,bR as oe,u as K,t as X,b as re,az as ae,cu as ye,F as te,aa as T,an as ve,d0 as je,d as me,aF as gt,cn as We,a8 as nt,d7 as xt,e as Ae,g as Re,_ as pe,d8 as $t,d9 as Ut,da as Et,db as it,dc as dt,dd as ct,ba as wt,cW as Xe,bv as Ze,Y as Ct,de as St,c_ as Lt,E as Rt}from"./index-8a64dbe5.js";import{c as w,r as y,u as ee}from"./index-d845466c.js";import{_ as Tt,a as Dt}from"./BranchMultiSelect-9efabefe.js";import{_ as ke,c as Ot,a as Pt,h as Nt,i as It,d as At,e as Mt,f as Ft,g as jt,b as zt,j as Bt,B as Gt,k as ut}from"./BasePOA-320354d1.js";import"./BaseTabMenu-f0bfea9a.js";import"./dialog.esm-35b8f4c0.js";import"./tabpanel.esm-b51d9521.js";import{s as _e,S as A,V as Wt,W as Te,X as Z,Y as ge,Z as pt,_ as rt,$ as Je,I as mt}from"./index-29f9343f.js";import"./BaseTabView-21de18e3.js";import"./FileTabs-4bcea768.js";import{_ as j}from"./UserMultiSelect-672f54ba.js";import{c as Yt,u as le,w as Ve,d as D}from"./axios.config-66eb8b25.js";import{u as Fe}from"./common-e0f496d0.js";import{u as xe}from"./count.store-3746823e.js";import{f as $e,a as ie,b as Ue,u as Ht,c as Kt}from"./index.store-b1eeddd9.js";import{i as _t,j as Ee,h as Ce,k as ue,b as Ke,l as et,m as tt,n as st,a as Jt,B as Qt,M as at,O as Xt,T as Qe}from"./index-50873bd8.js";import{F as N,b as Zt}from"./constants-33601b85.js";import{_ as lt}from"./BaseDropdown-662b4628.js";import{_ as Ye}from"./BaseCalendar-a82b7498.js";import{_ as ht}from"./WithLabel-e835ab34.js";import{f as qe}from"./formatDate-5a80ca6a.js";import"./qrcode.vue.esm-5177a773.js";import{_ as el}from"./ShortDescription-6d0b7341.js";import"./dayjs.min-cc995240.js";/* empty css                                                                             */import{c as tl}from"./Dropdown-79aab536.js";import"./menu.esm-c5df98a3.js";/* empty css                                                 */import"./overlaypanel.esm-85f23f44.js";/* empty css                                                         */import"./avatar.esm-588b74e4.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-301936e9.js";import"./common.store-31163da3.js";import{_ as Ne}from"./WithRadio-bfcbcffc.js";import"./radiobutton.esm-0afc02b1.js";import"./checkbox.esm-97a6ce69.js";import{_ as ll}from"./WithSelectable-c684986d.js";import{_ as ol}from"./BaseBrickTab-dc6b3fcd.js";import{_ as nl}from"./BaseFileUpload-6a989843.js";import{_ as rl}from"./BaseFroalaEditor-fc7f417e.js";import{_ as al}from"./BaseLabel-d50f1c93.js";import{K as sl}from"./main-4fe40628.js";import{_ as il}from"./BaseDialog-ef40dcdb.js";const dl={class:"user-select"},we={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(d,{emit:r}){const n=d,t=G([]),m=ze(n,"modelValue"),s=async l=>{let{data:q}=await Yt.get(`${n.apiUrl}/`,l);q.hasOwnProperty("results")?t.value=q.results:t.value=q};return Be(async()=>{await s(n.apiParams)}),(l,q)=>(v(),S("div",dl,[o(lt,{modelValue:e(m),"onUpdate:modelValue":q[0]||(q[0]=a=>Ie(m)?m.value=a:null),options:t.value,"onUpdate:options":q[1]||(q[1]=a=>t.value=a),error:n.error,"api-url":n.apiUrl,"api-params":n.apiParams,"option-label":"full_name",label:n.label,placeholder:n.placeholder,required:n.required,searchable:"","onEmit:change":q[2]||(q[2]=a=>r("emit:change",a))},{option:c(({option:a})=>[o(e(ll),{items:[a]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var cl=`
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
`,ul={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};vt.extend({name:"editor",css:cl,classes:ul});(function(){try{return window.Quill}catch{return null}})();const De={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(d){return["froala","tiny"].includes(d)}}},emits:["update:modelValue","emit:fileUpload"],setup(d,{emit:r}){const n=d,t=ze(n,"modelValue"),m=G([{title:"text",slot:"editor",icon:kt},{title:"file",slot:"file",icon:Vt}]);return(s,l)=>(v(),W(ol,{"tab-panel-list":m.value,"panel-container-class":"px-0"},{editor:c(()=>[d.editor==="froala"?(v(),W(rl,{key:0,modelValue:e(t),"onUpdate:modelValue":l[0]||(l[0]=q=>Ie(t)?t.value=q:null)},null,8,["modelValue"])):(v(),W(tl,{key:1,modelValue:e(t),"onUpdate:modelValue":l[1]||(l[1]=q=>Ie(t)?t.value=q:null)},null,8,["modelValue"]))]),file:c(()=>[P("div",{class:be(n.fileUploadContainerClasses)},[o(nl,{files:n.files,"onEmit:fileUpload":l[2]||(l[2]=q=>r("emit:fileUpload",q))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},pl={class:"flex flex-col justify-between h-full"},ml={class:"px-6 py-4 overflow-y-auto"},_l={class:"actions p-6"},Oe={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(d,{emit:r}){return(n,t)=>{const m=Ge;return v(),S("div",pl,[P("div",ml,[bt(n.$slots,"default")]),P("div",_l,[o(m,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:t[0]||(t[0]=s=>r("emit:clearForm"))}),o(m,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:t[1]||(t[1]=s=>r("emit:preview"))})])])}}},ql=he("sd-stores-inner",{state:()=>{var d,r;return{buttonLoading:!1,detailLoading:!1,model:{company:(r=(d=le().currentUser)==null?void 0:d.company)==null?void 0:r.id,content:null,document_type:H.INNER,document_sub_type:Q.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:oe.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:w.withMessage("Поле не должен быть пустым",y)},content:{required:w.withMessage("Поле не должен быть пустым",y)},__departments:{required:w.withMessage("Поле не должен быть пустым",y)},__approvers:{},__signers:{required:w.withMessage("Поле не должен быть пустым",y)}}}},actions:{async actionCreateDocument(d){let r={...d,type:_t,sub_type:_t};this.buttonLoading=!0;const{response:n,error:t}=await Ve(Ue,r);return n?(this.buttonLoading=!1,Promise.resolve(n)):Promise.reject(t)},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:n}=await $e({id:d,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);_e(this.model,r),this.model.__approvers=await A(r.approvers),this.model.__signers=await A(r.signers),this.model.__departments=await Wt(r.receiver.departments),this.model.__files=r.files}catch{}finally{this.detailLoading=!1}}}}),fl={class:"font-semibold text-xl"},Se={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(d,{emit:r}){const t=ze(d,"modelValue"),{t:m}=K();return(s,l)=>{const q=Ge,a=il;return v(),W(a,{modelValue:e(t),"onUpdate:modelValue":l[1]||(l[1]=p=>Ie(t)?t.value=p:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[P("span",fl,X(e(m)("preview")),1)]),content:c(()=>[bt(s.$slots,"content")]),footer:c(()=>[o(q,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(q,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:d.sendButtonLoading,onClick:l[0]||(l[0]=p=>r("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},ln={__name:"InnerForm",props:{formType:{type:String,default:N}},setup(d){const r=d,n=le(),t=ql();Fe();const m=xe(),s=G(!1);G(null);const{t:l}=K(),q=re(),a=ae(),p=ee(t.rules,t.model),C=async()=>{await p.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.departments=[],t.model.departments=t.model.__departments.map(u=>u.id),t.model.files=[],t.model.files=t.model.__files.map(u=>({id:u.id})),t.model.journal=oe.INNER,t.model.sender=n.currentUser.top_level_department.id,t.model.approvers=Z(t.model.__approvers),t.model.signers=Z(t.model.__signers),t.model.document_type=a.params.document_type,t.model.document_sub_type=a.params.document_sub_type)},$=()=>{r.formType===N?g():U()},g=async()=>{const V=await t.actionCreateDocument(t.model);await m.actionCountList(),V?(s.value=!1,D(null,l("document-sent"),T.SUCCESS),await q.replace({name:Ee,query:{document_type:H.INNER}})):D(null,l("error-occurred"),T.ERROR)},U=async()=>{await t.actionUpdateDocument({id:a.params.id,body:t.model}),await m.actionCountList(),D(null,l("document-sent"),T.SUCCESS),await q.replace({name:Ce,params:{id:a.params.id,document_type:H.INNER,document_sub_type:Q.SERVICE_LETTER}})},I=()=>{console.log("Clear Form")},F=V=>{t.model.__files=[],V.forEach(u=>{t.model.__files.push(u)})};return Be(async()=>{a.params.id&&await t.actionGetDocumentDetailForUpdate(a.params.id)}),ye(()=>{Te(t.model)}),(V,u)=>{const E=ve,f=ce,i=Me,h=de;return e(t).detailLoading?(v(),W(E,{key:0})):(v(),S(te,{key:1},[o(e(ke),{title:r.formType===e(N)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[o(Oe,{"onEmit:preview":C,"onEmit:clearForm":I},{default:c(()=>[o(h,null,{default:c(()=>[o(f,{"col-class":"w-1/2"},{default:c(()=>[o(Tt,{modelValue:e(p).__departments.$model,"onUpdate:modelValue":u[0]||(u[0]=_=>e(p).__departments.$model=_),error:e(p).__departments},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(i,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":u[1]||(u[1]=_=>e(p).short_description.$model=_),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":u[2]||(u[2]=_=>e(p).__approvers.$model=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":u[3]||(u[3]=_=>e(p).__signers.$model=_),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:c(()=>[o(De,{modelValue:e(p).content.$model,"onUpdate:modelValue":u[4]||(u[4]=_=>e(p).content.$model=_),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:s.value,"onUpdate:modelValue":u[5]||(u[5]=_=>s.value=_),"send-button-loading":e(t).buttonLoading,"onEmit:send":$},{content:c(()=>{var _,R;return[o(Ot,{"compose-model":{...e(t).model,signers:e(t).model.__signers,approvers:e(t).model.__approvers,author:e(t).model.__signers[0],sender:{name:(R=(_=e(n).currentUser)==null?void 0:_.top_level_department)==null?void 0:R.name},receiver:{departments:e(t).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},bl=he("sd-store-application",{state:()=>{var d,r;return{buttonLoading:!1,detailLoading:!1,model:{company:(r=(d=le().currentUser)==null?void 0:d.company)==null?void 0:r.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:w.withMessage("Поле не должен быть пустым",y)},__curator:{required:w.withMessage("Поле не должен быть пустым",y)},__approvers:{required:w.withMessage("Поле не должен быть пустым",y)},__signers:{}}}},actions:{async actionCreateDocument(d){let r={...d};this.buttonLoading=!0;const{response:n,error:t}=await Ve(Ue,r);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:n}=await $e({id:d,body:r});return Promise.resolve(n)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);_e(this.model,r),this.model.__approvers=await A(r.approvers),this.model.__signers=await A(r.signers.filter(n=>n.type===je.SIGNER)),this.model.__curator=await ge([],r.curator.id,!1),this.model.__files=r.files}catch{}finally{this.detailLoading=!1}}}}),yt=he("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:le().currentUser.company.id,curator:null,document_type:H.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:oe.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:w.withMessage("Поле не должен быть пустым",y)},register_date:{required:w.withMessage("Поле не должен быть пустым",y)},content:{required:w.withMessage("Поле не должен быть пустым",y)},__negotiators:{required:w.withMessage("Поле не должен быть пустым",y)},__curator:{required:w.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:r,error:n}=await Ve(Ue,d);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:n}=await $e({id:d,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);_e(this.model,r),this.model.__signers=await A(r.signers.filter(n=>n.type!==je.NEGOTIATOR)),this.model.__negotiators=await A(r.signers.filter(n=>n.type===je.NEGOTIATOR)),this.model.__approvers=await A(r.approvers),this.model.__curator=await ge([],r.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),on={__name:"ApplicationForm",props:{formType:{type:String,default:N}},setup(d){const r=d,n=le(),t=bl();Fe();const m=xe();yt();const s=G(!1);G(null);const{t:l}=K(),q=re(),a=ae(),p=ee(t.rules,t.model),C=async()=>{var u,E,f,i,h;await p.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.signers=[{user:(u=n==null?void 0:n.currentUser)==null?void 0:u.id}],t.model.sender=(f=(E=n==null?void 0:n.currentUser)==null?void 0:E.top_level_department)==null?void 0:f.id,t.model.curator=(h=(i=t==null?void 0:t.model)==null?void 0:i.__curator)==null?void 0:h.user_id,t.model.journal=oe.APPLICATION,t.model.document_type=a.params.document_type,t.model.document_sub_type=a.params.document_sub_type,t.model.approvers=Z(t.model.__approvers))},$=async()=>{},g=()=>{r.formType===N?U():I()},U=async()=>{const V=await t.actionCreateDocument(t.model);await m.actionCountList(),V?(s.value=!1,D(null,l("document-sent"),T.SUCCESS),await q.replace({name:Ee,query:{document_type:H.APPLICATION}})):D(null,l("error-occurred"),T.ERROR)},I=async()=>{await t.actionUpdateDocument({id:a.params.id,body:t.model}),await m.actionCountList(),D(null,l("document-sent"),T.SUCCESS),await q.replace({name:Ce,params:{id:a.params.id,document_type:H.APPLICATION,document_sub_type:Q.LABOR_LEAVE}})},F=V=>{t.model.__files=[],V.forEach(u=>{t.model.__files.push(u)})};return Be(async()=>{a.params.id&&await t.actionGetDocumentDetailForUpdate(a.params.id)}),ye(()=>{Te(t.model)}),(V,u)=>{const E=ve,f=ce,i=de;return e(t).detailLoading?(v(),W(E,{key:0})):(v(),S(te,{key:1},[o(e(ke),{title:r.formType===e(N)?"create-sd-application":"update-sd-application"},{content:c(()=>[o(Oe,{"onEmit:preview":C,"onEmit:clearForm":$},{default:c(()=>[o(i,null,{default:c(()=>[o(f,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=h=>e(p).__curator.$model=h),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":u[1]||(u[1]=h=>e(p).__approvers.$model=h),error:e(p).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":u[2]||(u[2]=h=>e(p).__signers.$model=h),disabled:"",label:"signers",placeholder:e(n).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),o(f,{"col-class":"w-full"},{default:c(()=>[o(De,{modelValue:e(p).content.$model,"onUpdate:modelValue":u[3]||(u[3]=h=>e(p).content.$model=h),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:s.value,"onUpdate:modelValue":u[4]||(u[4]=h=>s.value=h),"send-button-loading":e(t).buttonLoading,"onEmit:send":g},{content:c(()=>[o(Pt,{"compose-model":{...e(t).model,curator:e(t).model.__curator,author:r.formType===e(N)?e(n).currentUser:e(t).model.__signers[0].user,signers:r.formType===e(N)?[e(n).currentUser]:e(t).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=he("sd-notice-store",{state:()=>(le(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:H.NOTICE,document_sub_type:Q.BUSINESS_TRIP,journal:oe.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:w.withMessage("Поле не должен быть пустым",y)},start_date:{required:w.withMessage("Поле не должен быть пустым",y)},route:{required:w.withMessage("Поле не должен быть пустым",y)},content:{required:w.withMessage("Поле не должен быть пустым",y)},__companies:{required:w.withMessage("Поле не должен быть пустым",y)},__curator:{required:w.withMessage("Поле не должен быть пустым",y)},__employees:{required:w.withMessage("Поле не должен быть пустым",y)},__signers:{required:w.withMessage("Поле не должен быть пустым",y)},__tags:{required:w.withMessage("Поле не должен быть пустым",y)},short_description:{required:w.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:r,error:n}=await Ve(Ue,d);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:n}=await $e({id:d,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d,r=!1){try{this.detailLoading=!0;const{data:n}=await ie(d);_e(this.model,n),this.model.__companies=[],this.model.__curator=await ge([],n.curator.id,!1),this.model.__employees=await A(n.notices),r?(this.model.__approvers=await A(n.approvers.filter(t=>{var m,s;return((m=t==null?void 0:t.user)==null?void 0:m.id)!==((s=n==null?void 0:n.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await A(n.approvers),this.model.__signers=await A(n.signers),this.model.__companies=await pt(n.notices[0].destinations),this.model.__tags=await rt(n.tags),this.model.start_date=n.notices[0].start_date,this.model.end_date=n.notices[0].end_date,this.model.__tags=n.tags,this.model.route=n.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(d,r){try{this.detailLoading=!0;const{data:n}=await ie(d),t=await ie(r);_e(this.model,n),this.model.__companies=[],this.model.__curator=await ge([],n.curator.id,!1),this.model.__employees=await A(t.data.notices),this.model.__approvers=await A(n.approvers),this.model.__signers=await A(n.signers),this.model.__companies=await pt(t.data.notices[0].destinations),this.model.__tags=await rt(n.tags),this.model.start_date=t.data.notices[0].start_date,this.model.end_date=t.data.notices[0].end_date,this.model.__tags=n.tags,this.model.route=t.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),wl={class:"flex w-full gap-x-4"},nn={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:N}},setup(d){const r=d,{t:n}=K(),t=ae(),m=re(),s=le(),l=gl(),q=xe();Fe();const a=ee(l.rules,l.model),p=G(!1),C=me(()=>{const f=r.formType===N,i=t.params.document_sub_type;return i===Q.BUSINESS_TRIP_DECREE_LOCAL?f?"create-decree":"update-decree":i===Q.BUSINESS_TRIP_ORDER_LOCAL?f?"create-order":"update-order":f?"create-business-trip-notice":"update-business-trip-notice"}),$=me(()=>{var f,i;return t.params.document_sub_type===Q.BUSINESS_TRIP_DECREE_LOCAL&&((f=t==null?void 0:t.query)==null?void 0:f.compose_id)&&((i=t==null?void 0:t.query)==null?void 0:i.document_sub_type)===Q.BUSINESS_TRIP}),g=me(()=>{var f;return!!(t.params.document_sub_type===Q.BUSINESS_TRIP_DECREE_LOCAL&&((f=l==null?void 0:l.model)!=null&&f.trip_notice_id))});gt(()=>l.model.__tags,f=>{if(r.formType===N)if(f&&f.length){let i=`${f.map(h=>h.name_uz).join(", ")} yuzasidan`;l.model.short_description=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase()}else l.model.short_description=null});const U=async()=>{var i,h,_,R,ne;await a.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.approvers=Z(l.model.__approvers),l.model.signers=Z(l.model.__signers),l.model.curator=(h=(i=l==null?void 0:l.model)==null?void 0:i.__curator)==null?void 0:h.user_id,l.model.journal=t.params.document_type===H.DECREE||t.params.document_type===H.ORDER?oe.ORDERS_PROTOCOLS:oe.INNER,l.model.company=s.currentUser.company.id,l.model.notices=l.model.__employees.map(J=>({start_date:l.model.start_date,end_date:l.model.end_date,user:J.id,route:l.model.route,companies:l.model.__companies.map(k=>k.id)})),l.model.sender=(R=(_=s==null?void 0:s.currentUser)==null?void 0:_.top_level_department)==null?void 0:R.id,l.model.tags=l.model.__tags.map(J=>({id:J.id})),l.model.files=l.model.__files.map(J=>({id:J.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,$.value&&(l.model.trip_notice_id=(ne=t==null?void 0:t.query)==null?void 0:ne.compose_id),p.value=!0)},I=()=>{},F=f=>{l.model.__files=[],f.forEach(i=>{l.model.__files.push(i)})},V=async()=>{$.value&&(l.model.notices=[]);const f=await l.actionCreateDocument(l.model);await q.actionCountList(),f?(p.value=!1,D(null,n("document-sent"),T.SUCCESS),await m.replace({name:Ee,query:{document_type:t.params.document_sub_type===Q.BUSINESS_TRIP_DECREE_LOCAL?H.DECREE:t.params.document_sub_type===Q.BUSINESS_TRIP_ORDER_LOCAL?H.ORDER:H.NOTICE}})):D(null,n("error-occurred"),T.ERROR)},u=async()=>{($.value||g.value)&&(l.model.notices=[]),await l.actionUpdateDocument({id:t.params.id,body:l.model}),await q.actionCountList(),D(null,n("changed"),T.SUCCESS),await m.replace({name:Ce,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},E=()=>{r.formType===N?V():u()};return We(async()=>{t.params.id&&t.query.trip_notice_id&&t.params.document_sub_type===Q.BUSINESS_TRIP_DECREE_LOCAL?await l.actionGetDocumentDetailForUpdateForCustomUse(t.params.id,t.query.trip_notice_id):t.params.id?await l.actionGetDocumentDetailForUpdate(t.params.id):$.value&&await l.actionGetDocumentDetailForUpdate(t.query.compose_id,!0)}),ye(()=>{Te(l.model)}),(f,i)=>{const h=ve,_=ce,R=Ye,ne=lt,J=Me,k=de;return e(l).detailLoading?(v(),W(h,{key:0})):(v(),S(te,{key:1},[o(e(ke),{title:C.value},{content:c(()=>[o(Oe,{"onEmit:preview":U,"onEmit:clearForm":I},{default:c(()=>[o(k,null,{default:c(()=>[o(_,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=b=>e(a).__curator.$model=b),error:e(a).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(a).__employees.$model,"onUpdate:modelValue":i[1]||(i[1]=b=>e(a).__employees.$model=b),error:e(a).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:$.value||g.value},null,8,["modelValue","error","disabled"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(Dt,{modelValue:e(a).__companies.$model,"onUpdate:modelValue":i[2]||(i[2]=b=>e(a).__companies.$model=b),error:e(a).__companies,"text-truncate":"",disabled:$.value||g.value},null,8,["modelValue","error","disabled"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(ht,{modelValue:e(a).__tags.$model,"onUpdate:modelValue":i[3]||(i[3]=b=>e(a).__tags.$model=b),error:e(a).__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:b})=>[nt(X(b.name),1)]),option:c(({value:b})=>[o(e(Ne),{title:b.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[P("div",wl,[o(R,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[i[4]||(i[4]=b=>e(a).start_date.$model=b),i[5]||(i[5]=b=>e(a).start_date.$model=e(qe)(b))],error:e(a).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:$.value||g.value},null,8,["modelValue","error","min-date","disabled"]),o(R,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[i[6]||(i[6]=b=>e(a).end_date.$model=b),i[7]||(i[7]=b=>e(a).end_date.$model=e(qe)(b))],error:e(a).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:$.value||g.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(ne,{modelValue:e(a).route.$model,"onUpdate:modelValue":i[8]||(i[8]=b=>e(a).route.$model=b),error:e(a).route,options:e(xt),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:$.value||g.value},null,8,["modelValue","error","options","disabled"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":i[9]||(i[9]=b=>e(l).model.__approvers=b),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":i[10]||(i[10]=b=>e(a).__signers.$model=b),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(J,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":i[11]||(i[11]=b=>e(a).short_description.$model=b),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(_,{"col-class":"w-full"},{default:c(()=>[o(De,{modelValue:e(a).content.$model,"onUpdate:modelValue":i[12]||(i[12]=b=>e(a).content.$model=b),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:p.value,"onUpdate:modelValue":i[13]||(i[13]=b=>p.value=b),"send-button-loading":e(l).buttonLoading,"onEmit:send":E},{content:c(()=>[e(t).params.document_sub_type===e(Q).BUSINESS_TRIP_DECREE_LOCAL?(v(),W(e(Nt),{key:0,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):e(t).params.document_sub_type===e(Q).BUSINESS_TRIP_ORDER_LOCAL?(v(),W(e(It),{key:1,"compose-model":e(l).model,preview:!0},null,8,["compose-model"])):(v(),W(e(At),{key:2,"compose-model":e(l).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},rn={__name:"OrderForm",props:{formType:{type:String,default:N}},setup(d){const r=d,n=yt(),t=xe(),m=le(),s=ae(),l=re(),q=ee(n.rules,n.model),{t:a}=K(),p=G(!1),C=async()=>{var u,E,f,i;await q.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=Z(n.model.__approvers),n.model.curator=(E=(u=n==null?void 0:n.model)==null?void 0:u.__curator)==null?void 0:E.user_id,n.model.sender=(i=(f=m==null?void 0:m.currentUser)==null?void 0:f.top_level_department)==null?void 0:i.id,n.model.files=n.model.__files.map(h=>({id:h.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.journal=oe.ORDERS_PROTOCOLS,n.model.register_date=qe(n.model.register_date),n.model.__negotiators.forEach(h=>{n.model.signers.push(h.hasOwnProperty("user")?{id:h.id,user:h.user.id,type:je.NEGOTIATOR}:{user:h.id,type:je.NEGOTIATOR})}),s.query.compose_id&&(n.model.trip_notice_id=s.query.compose_id),p.value=!0)},$=()=>{},g=async()=>{try{const V=await n.actionCreateDocument(n.model);await t.actionCountList(),V&&(p.value=!1,D(null,a("document-sent"),T.SUCCESS),await l.replace({name:Ee,query:{document_type:H.ORDER}}))}catch{D(null,a("error-occurred"),T.ERROR)}},U=async()=>{try{const V=await n.actionUpdateDocument({id:s.params.id,body:n.model});await t.actionCountList(),D(null,a("changed"),T.SUCCESS),await l.replace({name:Ce,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{D(null,a("error-occurred"),T.ERROR)}},I=()=>{r.formType===N?g():U()},F=V=>{n.model.__files=[],V.forEach(u=>{n.model.__files.push(u)})};return Be(async()=>{s.params.id&&await n.actionGetDocumentDetailForUpdate(s.params.id)}),ye(()=>{Te(n.model)}),(V,u)=>{const E=ve,f=ce,i=Me,h=Ye,_=de;return e(n).detailLoading?(v(),W(E,{key:0})):(v(),S(te,{key:1},[o(e(ke),{title:r.formType===e(N)?"create-order":"update-order"},{content:c(()=>[o(Oe,{"onEmit:preview":C,"onEmit:clearForm":$},{default:c(()=>[o(_,null,{default:c(()=>[o(f,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=R=>e(q).__curator.$model=R),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(i,{modelValue:e(q).register_number.$model,"onUpdate:modelValue":u[1]||(u[1]=R=>e(q).register_number.$model=R),error:e(q).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(h,{modelValue:e(q).register_date.$model,"onUpdate:modelValue":u[2]||(u[2]=R=>e(q).register_date.$model=R),error:e(q).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":u[3]||(u[3]=R=>e(n).model.__approvers=R),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(q).__negotiators.$model,"onUpdate:modelValue":u[4]||(u[4]=R=>e(q).__negotiators.$model=R),error:e(q).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:c(()=>[o(De,{modelValue:e(q).content.$model,"onUpdate:modelValue":u[5]||(u[5]=R=>e(q).content.$model=R),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:p.value,"onUpdate:modelValue":u[6]||(u[6]=R=>p.value=R),"send-button-loading":e(n).buttonLoading,"onEmit:send":I},{content:c(()=>[o(e(Mt),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},hl=he("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:w.withMessage("Поле не должен быть пустым",y)},__curator:{required:w.withMessage("Поле не должен быть пустым",y)},__signers:{required:w.withMessage("Поле не должен быть пустым",y)},short_description:{required:w.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:r,error:n}=await Ve(Ue,d);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:n}=await $e({id:d,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);_e(this.model,r),this.model.__curator=await ge([],r.curator.id,!1),this.model.__approvers=await A(r.approvers),this.model.__signers=await A(r.signers)}catch{}finally{this.detailLoading=!1}}}}),an={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:N}},setup(d){const r=d,{t:n}=K(),t=ae(),m=re(),s=le(),l=hl(),q=xe();Fe();const a=G(!1),p=ee(l.rules,l.model),C=async()=>{var u,E,f,i;await p.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=Z(l.model.__approvers),l.model.signers=Z(l.model.__signers),l.model.curator=(E=(u=l==null?void 0:l.model)==null?void 0:u.__curator)==null?void 0:E.user_id,l.model.journal=oe.INNER,l.model.company=s.currentUser.company.id,l.model.sender=(i=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:i.id,l.model.files=l.model.__files.map(h=>({id:h.id})),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,a.value=!0)},$=()=>{},g=V=>{l.model.__files=[],V.forEach(u=>{l.model.__files.push(u)})},U=async()=>{const V=await l.actionCreateDocument(l.model);await q.actionCountList(),V?(a.value=!1,D(null,n("document-sent"),T.SUCCESS),await m.replace({name:Ee,query:{document_type:H.NOTICE}})):D(null,n("error-occurred"),T.ERROR)},I=async()=>{await l.actionUpdateDocument({id:t.params.id,body:l.model}),await q.actionCountList(),D(null,n("changed"),T.SUCCESS),await m.replace({name:Ce,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},F=()=>{r.formType===N?U():I()};return We(async()=>{t.params.id&&await l.actionGetDocumentDetailForUpdate(t.params.id)}),ye(()=>{Te(l.model)}),(V,u)=>{const E=ve,f=ce,i=Me,h=de;return e(l).detailLoading?(v(),W(E,{key:0})):(v(),S(te,{key:1},[o(e(ke),{title:r.formType===e(N)?"create-notice":"update-notice"},{content:c(()=>[o(Oe,{"onEmit:preview":C,"onEmit:clearForm":$},{default:c(()=>[o(h,null,{default:c(()=>[o(f,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=_=>e(p).__curator.$model=_),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(i,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":u[1]||(u[1]=_=>e(p).short_description.$model=_),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":u[2]||(u[2]=_=>e(l).model.__approvers=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":u[3]||(u[3]=_=>e(p).__signers.$model=_),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:c(()=>[o(De,{modelValue:e(p).content.$model,"onUpdate:modelValue":u[4]||(u[4]=_=>e(p).content.$model=_),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":g},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:a.value,"onUpdate:modelValue":u[5]||(u[5]=_=>a.value=_),"send-button-loading":e(l).buttonLoading,"onEmit:send":F},{content:c(()=>[o(e(Ft),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},yl=he("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:w.withMessage("Поле не должен быть пустым",y)},__curator:{required:w.withMessage("Поле не должен быть пустым",y)},__signers:{required:w.withMessage("Поле не должен быть пустым",y)},short_description:{required:w.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:r,error:n}=await Ve(Ue,d);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:n}=await $e({id:d,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);_e(this.model,r),this.model.__curator=await ge([],r.curator.id,!1),this.model.__approvers=await A(r.approvers),this.model.__signers=await A(r.signers)}catch{}finally{this.detailLoading=!1}}}}),sn={__name:"DecreeForm",props:{formType:{type:String,default:N}},setup(d){const r=d,{t:n}=K(),t=ae(),m=re(),s=le(),l=xe();Fe();const q=G(!1),a=yl(),p=ee(a.rules,a.model),C=async()=>{var u,E,f,i;await p.value.$validate()&&(a.model.approvers=[],a.model.signers=[],a.model.approvers=Z(a.model.__approvers),a.model.signers=Z(a.model.__signers),a.model.curator=(E=(u=a==null?void 0:a.model)==null?void 0:u.__curator)==null?void 0:E.user_id,a.model.journal=oe.ORDERS_PROTOCOLS,a.model.company=s.currentUser.company.id,a.model.sender=(i=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:i.id,a.model.files=a.model.__files.map(h=>({id:h.id})),a.model.document_type=t.params.document_type,a.model.document_sub_type=t.params.document_sub_type,t.query.compose_id&&(a.model.trip_notice_id=t.query.compose_id),q.value=!0)},$=()=>{},g=V=>{a.model.__files=[],V.forEach(u=>{a.model.__files.push(u)})},U=async()=>{const V=await a.actionCreateDocument(a.model);await l.actionCountList(),V?(q.value=!1,D(null,n("document-sent"),T.SUCCESS),await m.replace({name:Ee,query:{document_type:t.params.document_type}})):D(null,n("error-occurred"),T.ERROR)},I=async()=>{await a.actionUpdateDocument({id:t.params.id,body:a.model}),await l.actionCountList(),D(null,n("changed"),T.SUCCESS),await m.replace({name:Ce,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},F=()=>{r.formType===N?U():I()};return We(async()=>{t.params.id&&await a.actionGetDocumentDetailForUpdate(t.params.id)}),ye(()=>{Te(a.model)}),(V,u)=>{const E=ve,f=ce,i=Me,h=de;return e(a).detailLoading?(v(),W(E,{key:0})):(v(),S(te,{key:1},[o(e(ke),{title:r.formType===e(N)?"create-decree":"update-decree"},{content:c(()=>[o(Oe,{"onEmit:preview":C,"onEmit:clearForm":$},{default:c(()=>[o(h,null,{default:c(()=>[o(f,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=_=>e(p).__curator.$model=_),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(i,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":u[1]||(u[1]=_=>e(p).short_description.$model=_),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":u[2]||(u[2]=_=>e(a).model.__approvers=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":u[3]||(u[3]=_=>e(p).__signers.$model=_),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:c(()=>[o(De,{modelValue:e(p).content.$model,"onUpdate:modelValue":u[4]||(u[4]=_=>e(p).content.$model=_),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":g},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:q.value,"onUpdate:modelValue":u[5]||(u[5]=_=>q.value=_),"send-button-loading":e(a).buttonLoading,"onEmit:send":F},{content:c(()=>[o(e(jt),{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vl=he("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:w.withMessage("Поле не должен быть пустым",y)},start_date:{required:w.withMessage("Поле не должен быть пустым",y)},__curator:{required:w.withMessage("Поле не должен быть пустым",y)},__signers:{required:w.withMessage("Поле не должен быть пустым",y)},__user:{required:w.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:r,error:n}=await Ve(Ue,d);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(n))},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);return _e(this.model,r),this.model.__curator=await ge([],r.curator.id,!1),this.model.__approvers=await A(r.approvers),this.model.__signers=await A(r.signers),this.model.__user=await Je("users/personal-information",[],!1,r.user.id),this.model.__parent=r.parent,Promise.resolve(r)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:n}=await $e({id:d,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}}}}),dn={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:N}},setup(d){const r=d,n=ae(),t=re(),m=le(),s=vl();Ht();const l=xe(),{t:q}=K(),a=ee(s.rules,s.model),p=G(!1),C=G([]),$=me(()=>r.formType===N?"create-poa":"update-poa"),g=me(()=>s.model.start_date?new Date(s.model.start_date):new Date),U=async()=>{var i,h,_,R,ne,J,k,b,z,Y,Le,fe,se,M,B,x,O,L,He,Pe;if(await a.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=Z(s.model.__approvers),s.model.signers=Z(s.model.__signers),s.model.curator=(h=(i=s==null?void 0:s.model)==null?void 0:i.__curator)==null?void 0:h.user_id,s.model.user=(R=(_=s==null?void 0:s.model)==null?void 0:_.__user)==null?void 0:R.id,s.model.journal=oe.POWER_OF_ATTORNEY,s.model.company=(J=(ne=m.currentUser)==null?void 0:ne.company)==null?void 0:J.id,s.model.sender=(b=(k=m==null?void 0:m.currentUser)==null?void 0:k.top_level_department)==null?void 0:b.id,s.model.document_type=n.params.document_type,s.model.document_sub_type=n.params.document_sub_type,s.model.content=".",s.model.parent=(Y=(z=s.model)==null?void 0:z.__parent)==null?void 0:Y.id,!((fe=(Le=s==null?void 0:s.model)==null?void 0:Le.__user)!=null&&fe.passport_seria||(M=(se=s==null?void 0:s.model)==null?void 0:se.__user)!=null&&M.passport_number||(x=(B=s==null?void 0:s.model)==null?void 0:B.__user)!=null&&x.passport_issue_date||(L=(O=s==null?void 0:s.model)==null?void 0:O.__user)!=null&&L.passport_issued_by)){D(null,`${(Pe=(He=s.model)==null?void 0:He.__user)==null?void 0:Pe.full_name}: ${q("passport-details-error")}`,T.WARNING);return}p.value=!0}},I=()=>{},F=async()=>{const f=await s.actionCreateDocument(s.model);await l.actionCountList(),f?(p.value=!1,D(null,q("document-sent"),T.SUCCESS),await t.replace({name:Ee,query:{document_type:H.POWER_OF_ATTORNEY}})):D(null,q("error-occurred"),T.ERROR)},V=async()=>{await s.actionUpdateDocument({id:n.params.id,body:s.model}),await l.actionCountList(),D(null,q("changed"),T.SUCCESS),await t.replace({name:Ce,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},u=()=>{r.formType===N?F():V()},E=async f=>{const{data:i}=await Kt({user:f.id,document_sub_type:n.params.document_sub_type,status:5});C.value=i.results};return We(async()=>{if(n.params.id){const f=await s.actionGetDocumentDetailForUpdate(n.params.id);f.parent&&(C.value=[f.parent])}}),ye(()=>{Te(s.model)}),(f,i)=>{const h=ve,_=ce,R=Ye,ne=lt,J=de;return e(s).detailLoading?(v(),W(h,{key:0})):(v(),S(te,{key:1},[o(e(ke),{title:$.value},{content:c(()=>[o(Oe,{"onEmit:preview":U,"onEmit:clearForm":I},{default:c(()=>[o(J,null,{default:c(()=>[o(_,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=k=>e(a).__curator.$model=k),error:e(a).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(a).__user.$model,"onUpdate:modelValue":i[1]||(i[1]=k=>e(a).__user.$model=k),error:e(a).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":i[2]||(i[2]=k=>E(k))},null,8,["modelValue","error"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(R,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[i[3]||(i[3]=k=>e(a).start_date.$model=k),i[4]||(i[4]=k=>e(a).start_date.$model=e(qe)(k))],error:e(a).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(R,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[i[5]||(i[5]=k=>e(a).end_date.$model=k),i[6]||(i[6]=k=>e(a).end_date.$model=e(qe)(k))],error:e(a).end_date,"min-date":g.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":i[7]||(i[7]=k=>e(s).model.__approvers=k),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":i[8]||(i[8]=k=>e(a).__signers.$model=k),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:c(()=>[o(ne,{modelValue:e(s).model.__parent,"onUpdate:modelValue":i[9]||(i[9]=k=>e(s).model.__parent=k),options:C.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(Se,{modelValue:p.value,"onUpdate:modelValue":i[10]||(i[10]=k=>p.value=k),"send-button-loading":e(s).buttonLoading,"onEmit:send":u},{content:c(()=>[o(zt,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},kl={class:"base-stepper-component flex items-center select-none"},Vl=["onClick"],xl={key:0,class:"flex h-1 bg-greyscale-200 w-8"},$l={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(d,{emit:r}){const{t:n}=K(),t=m=>{r("emit:stepClick",m)};return(m,s)=>{const l=pe;return v(),S("div",kl,[(v(!0),S(te,null,Ae(d.items,(q,a)=>(v(),S("div",{key:q.id,class:"flex items-center"},[P("div",{class:be(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",q.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:p=>t(q)},[o(l,{icon:q.icon,class:be(q.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),P("span",null,X(e(n)(q.label)),1)],10,Vl),a<d.items.length-1?(v(),S("div",xl)):Re("",!0)]))),128))])}}},ot=he("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:w.withMessage("Поле не должен быть пустым",y)},__curator:{required:w.withMessage("Поле не должен быть пустым",y)},__signers:{required:w.withMessage("Поле не должен быть пустым",y)},short_description:{required:w.withMessage("Поле не должен быть пустым",y)},__groups:{$each:w.forEach({__users:{required:w.withMessage("Поле не должен быть пустым",y)},__tags:{required:w.withMessage("Поле не должен быть пустым",y)},__regions:{required:w.withMessage("Поле не должен быть пустым",y)},__start_date:{required:w.withMessage("Поле не должен быть пустым",y)},__end_date:{required:w.withMessage("Поле не должен быть пустым",y)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:w.forEach({users:{required:w.withMessage("Поле не должен быть пустым",y)},text:{required:w.withMessage("Поле не должен быть пустым",y)}})}},booking_model:{bookings:[{type:ue,route:Ke,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:w.forEach({segments:{$each:w.forEach({departure_city:{required:w.withMessage("Поле не должен быть пустым",y)},arrival_city:{required:w.withMessage("Поле не должен быть пустым",y)},date:{required:w.withMessage("Поле не должен быть пустым",y)},time:{required:w.withMessage("Поле не должен быть пустым",y)},segment_class:{required:w.withMessage("Поле не должен быть пустым",y)}})},passengers:{required:w.withMessage("Поле не должен быть пустым",y)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:$t,active:!0,value:et},{id:2,label:"work-plan",icon:Ut,active:!1,value:tt},{id:3,label:"route",icon:Et,active:!1,value:st}],routeTabItems:[{id:1,title:"airplane",icon:it,value:Ke},{id:2,title:"train",icon:dt,value:Jt},{id:3,title:"taxi",icon:ct,value:Qt}],routeTypeTabItems:[{id:1,title:"there-back",icon:it,value:ue},{id:2,title:"complex-route",icon:dt,value:at},{id:3,title:"one-way",icon:ct,value:Xt}]}),actions:{async actionCreateDocument(d){const r=mt(d);this.buttonLoading=!0;const{response:n,error:t}=await Ve(Ue,r);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:d,body:r}){const n=await mt(r);try{this.buttonLoading=!0;const{data:t}=await $e({id:d,body:n});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);_e(this.model,r),this.model.__curator=await ge([],r.curator.id,!1),this.model.__signers=await A(r.signers),this.model.__approvers=await A(r.approvers);const n=Object.values(r.notices.reduce((t,m)=>{const s=m.group_id;return t[s]=t[s]||{group_id:s,items:[]},t[s].items.push(m),t},{}));this.model.__groups=await Promise.all(n.map(async t=>{const m=await Promise.all(t.items.map(p=>A([],p.user.id,!1))),s=await rt(t.items[0].tags),l=await Je("regions",t.items[0].locations),q=t.items[0].start_date,a=t.items[0].end_date;return{__users:m,__tags:s,__regions:l,__start_date:q,__end_date:a}})),this.trip_plan_model.trip_plans=await Promise.all(r.trip_plans.map(async(t,m)=>({...t,users:await A(t.users)}))),this.booking_model.bookings=await Promise.all(r.bookings.map(async t=>({type:t.type,route:t.route,segments:await Promise.all(t.segments.map(async m=>({departure_city:await Je("regions",[],!1,m.departure_city.id),arrival_city:await Je("regions",[],!1,m.arrival_city.id),segment_class:await Qe.find(s=>s.value===m.segment_class),date:qe(m.departure_date),time:await Bt(m.departure_date,m.departure_end_date)}))),passengers:await A(t.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(d){this.model.__groups.splice(d,1)},async actionStepClick(d,r,n){await d.replace({query:{...r.query,step:n}}),this.stepperItems.forEach(m=>m.active=m.value===n),await wt();const t=document.querySelector(".document-view-aside");t&&t.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(d){this.trip_plan_model.trip_plans.splice(d,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:ue,route:Ke,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(d){this.booking_model.bookings.splice(d,1)},actionChangeRouteSegment(d,r){const n=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[r].segments=d===ue?[n(),n()]:[n()]},async actionAddRouteLine(d){this.booking_model.bookings[d].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(d,r){this.booking_model.bookings[d].segments.splice(r,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:ue,route:Ke,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]}}}}),Ul={class:"trip-info-components"},El={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Cl={class:"flex justify-between"},Sl={class:"text-base text-primary-900 font-semibold mb-1"},Ll=["onClick"],Rl={class:"flex w-full gap-x-4"},Tl={class:"flex items-center justify-between"},qt={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},setup(d,{expose:r}){const n=ae(),t=re(),m=ot(),{t:s}=K(),l=ee(m.rules,m.model),q=G(!1),a=()=>{m.model.__files=[],files.forEach($=>{m.model.__files.push($)})},p=()=>{m.actionAddGroupBlock()},C=async $=>{await m.actionStepClick(t,n,$)};return r({stepClick:C}),($,g)=>{const U=ce,I=Me,F=pe,V=ht,u=Ye,E=de,f=Ge;return v(),S("div",Ul,[o(E,null,{default:c(()=>[o(U,{"col-class":"w-1/2"},{default:c(()=>[o(we,{modelValue:e(l).__curator.$model,"onUpdate:modelValue":g[0]||(g[0]=i=>e(l).__curator.$model=i),error:e(l).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),o(U,{"col-class":"w-1/2"},{default:c(()=>[o(I,{modelValue:e(l).short_description.$model,"onUpdate:modelValue":g[1]||(g[1]=i=>e(l).short_description.$model=i),error:e(l).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(U,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(v(!0),S(te,null,Ae(e(m).model.__groups,(i,h)=>(v(),S("div",El,[P("div",Cl,[P("span",Sl,X(e(s)("group"))+"-"+X(h+1),1),h!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:_=>e(m).actionDeleteGroupBlock(h)},[o(F,{icon:e(Xe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Ll)):Re("",!0)]),o(E,null,{default:c(()=>[o(U,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:i.__users,"onUpdate:modelValue":_=>i.__users=_,error:e(l).__groups.$each.$response.$data[h].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(U,{"col-class":"w-1/2"},{default:c(()=>[o(V,{modelValue:i.__regions,"onUpdate:modelValue":_=>i.__regions=_,error:e(l).__groups.$each.$response.$data[h].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":q.value},{chip:c(({value:_})=>[nt(X(_.name),1)]),option:c(({value:_})=>[o(e(Ne),{title:_.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(U,{"col-class":"w-1/2"},{default:c(()=>[o(V,{modelValue:i.__tags,"onUpdate:modelValue":_=>i.__tags=_,error:e(l).__groups.$each.$response.$data[h].__tags,"api-url":"tags","api-params":{document_sub_type:e(n).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":q.value},{chip:c(({value:_})=>[nt(X(_.name),1)]),option:c(({value:_})=>[o(e(Ne),{title:_.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),o(U,{"col-class":"w-1/2"},{default:c(()=>[P("div",Rl,[o(u,{modelValue:i.__start_date,"onUpdate:modelValue":[_=>i.__start_date=_,_=>i.__start_date=e(qe)(_)],error:e(l).__groups.$each.$response.$data[h].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),o(u,{modelValue:i.__end_date,"onUpdate:modelValue":[_=>i.__end_date=_,_=>i.__end_date=e(qe)(_)],error:e(l).__groups.$each.$response.$data[h].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),o(f,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Ze),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:p},null,8,["icon-left"])]),_:1}),o(U,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(m).model.__approvers,"onUpdate:modelValue":g[2]||(g[2]=i=>e(m).model.__approvers=i),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(U,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:e(l).__signers.$model,"onUpdate:modelValue":g[3]||(g[3]=i=>e(l).__signers.$model=i),error:e(l).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(U,{"col-class":"w-full"},{default:c(()=>[o(De,{modelValue:e(l).content.$model,"onUpdate:modelValue":g[4]||(g[4]=i=>e(l).content.$model=i),error:e(l).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(m).model.__files,"onEmit:fileUpload":a},null,8,["modelValue","error","files"])]),_:1})]),_:1}),P("div",Tl,[o(f,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(f,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:g[5]||(g[5]=i=>C(e(tt)))})])])}}},Dl={class:"work-plan-component"},Ol={class:"flex flex-col gap-y-3"},Pl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Nl={class:"flex justify-between"},Il={class:"text-base text-primary-900 font-semibold mb-1"},Al=["onClick"],Ml={class:"flex items-center justify-between mt-10"},Fl={class:"flex items-center gap-x-1"},jl={__name:"WorkPlan",setup(d,{expose:r}){const{t:n}=K(),t=ae(),m=re(),s=ot(),l=ee(s.trip_plan_rules,s.trip_plan_model),q=G(!1),a=me(()=>{const $=new Set;return s.model.__groups.reduce((g,U)=>U.__users&&Array.isArray(U.__users)?g.concat(U.__users):g,[]).filter(g=>$.has(g.id)?!1:($.add(g.id),!0))}),p=async $=>{await s.actionStepClick(m,t,$)},C=()=>{s.actionAddWorkPlanRow(),q.value=!1};return r({stepClick:p}),($,g)=>{const U=pe,I=el,F=ce,V=de,u=Ge;return v(),S("div",Dl,[P("div",Ol,[(v(!0),S(te,null,Ae(e(s).trip_plan_model.trip_plans,(E,f)=>(v(),S("div",Pl,[P("div",Nl,[P("span",Il,X(e(n)("plan"))+"-"+X(f+1),1),f!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:i=>e(s).actionDeleteWorkPlanRow(f)},[o(U,{icon:e(Xe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Al)):Re("",!0)]),o(V,null,{default:c(()=>[o(F,{"col-class":"w-1/2"},{default:c(()=>[o(I,{modelValue:E.text,"onUpdate:modelValue":i=>E.text=i,error:e(l).trip_plans.$each.$response.$data[f].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),o(F,{"col-class":"w-1/2"},{default:c(()=>[o(j,{modelValue:E.users,"onUpdate:modelValue":i=>E.users=i,options:a.value,error:e(l).trip_plans.$each.$response.$data[f].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),o(u,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Ze),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:C},null,8,["icon-left"]),P("div",Ml,[o(u,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),P("div",Fl,[o(u,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:g[0]||(g[0]=E=>p(e(et)))}),o(u,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:g[1]||(g[1]=E=>p(e(st)))})])])])}}},zl=["onClick"],ft={__name:"BaseBrickRadio",props:{modelValue:{type:[Number,String]},items:{type:Array,default:()=>[]}},emits:["emit:onChange","update:modelValue"],setup(d,{emit:r}){const n=d,{t}=K(),m=ze(n,"modelValue"),s=G({}),l=G(null),q=()=>{wt(()=>{if(l.value){const p=l.value.querySelector(".tab-active");p&&(s.value={width:`${p.offsetWidth}px`,transform:`translateX(${p.offsetLeft}px)`,transition:"transform 0.3s ease, width 0.3s ease"})}})},a=p=>{m.value=p.value,r("emit:onChange",p)};return gt(()=>n.items,()=>{q()},{deep:!0}),Be(()=>{q()}),(p,C)=>{const $=pe;return v(),S("div",{ref_key:"rootRef",ref:l,class:"relative flex items-center bg-greyscale-50 p-[2px] rounded-full w-fit select-none"},[P("div",{class:"absolute bg-white rounded-[90px] shadow-button h-8 transition-all",style:Ct(s.value)},null,4),(v(!0),S(te,null,Ae(n.items,(g,U)=>(v(),S("div",{key:g.id,class:be(["tab flex rounded-[90px] h-8 items-center px-4 gap-x-2 cursor-pointer relative z-10",{"tab-active":e(m)===g.value}]),onClick:I=>a(g)},[g.icon?(v(),W($,{key:0,icon:g.icon,class:be(["!w-[18px] !h-[18px]",e(m)===g.value?"text-primary-500":"text-greyscale-400"])},null,8,["icon","class"])):Re("",!0),P("span",{class:be(["text-sm font-semibold",e(m)===g.value?"text-greyscale-900":"text-greyscale-500"])},X(e(t)(g.title)),3)],10,zl))),128))],512)}}};const Bl={class:"base-time-picker"},Gl={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(d){const r=d,n=ze(r,"modelValue"),{t}=K();return(m,s)=>{var a;const l=al,q=pe;return v(),S("div",Bl,[o(l,{label:r.label,required:r.required},null,8,["label","required"]),o(e(sl),{modelValue:e(n),"onUpdate:modelValue":s[0]||(s[0]=p=>Ie(n)?n.value=p:null),"time-picker":"",range:d.range,"cancel-text":e(t)("cancel"),"select-text":e(t)("select"),placeholder:e(t)(d.placeholder),ref:"datePicker",class:be({"input-error":((a=d.error)==null?void 0:a.$error)&&d.showNestedError})},{"input-icon":c(()=>[o(q,{icon:e(St),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Wl={class:"route-component flex flex-col gap-y-3"},Yl={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Hl={class:"flex items-center justify-between"},Kl={class:"flex items-center gap-x-4"},Jl={class:"text-base text-primary-900 font-semibold mb-1"},Ql={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Xl={class:"text-xs text-greyscale-900 font-medium"},Zl=["onClick"],eo=["onClick"],to={class:"text-sm text-primary-500 font-semibold"},lo={class:"flex items-center justify-between mt-10"},oo={class:"flex items-center gap-x-1"},no={__name:"Route",props:{formType:{type:String,default:N}},setup(d,{expose:r}){const n=d,{t}=K(),m=ae(),s=re(),l=ot(),q=Fe(),a=le(),p=xe(),C=ee(l.booking_model_rules,l.booking_model),$=ee(l.rules,l.model),g=ee(l.trip_plan_rules,l.trip_plan_model),U=G(!1),I=G(!1),F=me(()=>{const k=new Set;return l.model.__groups.reduce((b,z)=>z.__users&&Array.isArray(z.__users)?b.concat(z.__users):b,[]).filter(b=>k.has(b.id)?!1:(k.add(b.id),!0))}),V=k=>{l.routeTabItems.forEach(b=>b.active=b.id===k.id)},u=(k,b)=>{l.routeTypeTabItems.forEach(z=>z.active=z.id===k.id),l.actionChangeRouteSegment(k.value,b)},E=async k=>{await l.actionStepClick(s,m,k)},f=()=>{l.actionAddRouteRow(),I.value=!1},i=(k,b,z,Y)=>{Y.type===ue&&(l.booking_model.bookings[b].segments[z+1].arrival_city=k)},h=(k,b,z,Y)=>{Y.type===ue&&(l.booking_model.bookings[b].segments[z+1].departure_city=k)},_=async()=>{var Y,Le,fe,se,M,B;const k=await C.value.$validate();I.value=!0;const b=await $.value.$validate(),z=await g.value.$validate();if(!k){D(null,t("fill-required-fields"),T.WARNING);return}if(!b){D(null,`${t("trip-info")} - ${t("fill-required-fields")}`,T.WARNING);return}if(!z){D(null,`${t("work-plan")} - ${t("fill-required-fields")}`,T.WARNING);return}l.model.approvers=[],l.model.signers=[],l.model.notices=[],l.model.bookings=[],l.model.trip_plans=[],l.model.approvers=Z(l.model.__approvers),l.model.signers=Z(l.model.__signers),l.model.curator=(Le=(Y=l.model)==null?void 0:Y.__curator)==null?void 0:Le.user_id,l.model.journal=oe.INNER,l.model.company=(se=(fe=a.currentUser)==null?void 0:fe.company)==null?void 0:se.id,l.model.__groups.forEach((x,O)=>{const L=O+1;l.model.notices.push(...x.__users.map(He=>({start_date:x.__start_date,end_date:x.__end_date,user:He.id,regions:x.__regions.map(Pe=>Pe.id),tags:x.__tags.map(Pe=>({id:Pe.id})),group_id:L})))}),l.model.sender=(B=(M=a==null?void 0:a.currentUser)==null?void 0:M.top_level_department)==null?void 0:B.id,l.model.files=l.model.__files.map(x=>({id:x.id})),l.model.document_type=m.params.document_type,l.model.document_sub_type=m.params.document_sub_type,l.model.bookings=l.booking_model.bookings.map(x=>({...x,segments:x.segments.map(O=>({departure_city:O.departure_city.id,arrival_city:O.arrival_city.id,departure_date:ut(O.date,O.time,0),departure_end_date:ut(O.date,O.time,1),segment_class:O.segment_class.value})),passengers:x.passengers.map(O=>({user:O.id}))})),l.model.trip_plans=l.trip_plan_model.trip_plans.map(x=>({users:x.users.map(O=>({id:O.id})),text:x.text})),U.value=!0},R=async()=>{await l.actionCreateDocument(l.model)?(U.value=!1,D(null,t("document-sent"),T.SUCCESS),await s.replace({name:Ee,query:{document_type:m.query.document_type}})):D(null,t("error-occurred"),T.ERROR)},ne=async()=>{try{await l.actionUpdateDocument({id:m.params.id,body:l.model}),await p.actionCountList(),D(null,t("changed"),T.SUCCESS),await s.replace({name:Ce,params:{id:m.params.id,document_type:m.params.document_type,document_sub_type:m.params.document_sub_type}})}catch{}},J=()=>{n.formType===N?R():ne()};return r({stepClick:E}),(k,b)=>{const z=lt,Y=ce,Le=Ye,fe=de,se=Ge;return v(),S("div",Wl,[(v(!0),S(te,null,Ae(e(l).booking_model.bookings,(M,B)=>(v(),S("div",Yl,[P("div",Hl,[P("div",Kl,[P("span",Jl,X(e(t)("route"))+"-"+X(B+1),1),o(ft,{modelValue:M.route,"onUpdate:modelValue":x=>M.route=x,items:e(l).routeTabItems,"onEmit:onChange":b[0]||(b[0]=x=>V(x))},null,8,["modelValue","onUpdate:modelValue","items"]),o(ft,{modelValue:M.type,"onUpdate:modelValue":x=>M.type=x,items:e(l).routeTypeTabItems,"onEmit:onChange":x=>u(x,B)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),B!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:b[1]||(b[1]=(...x)=>e(l).actionDeleteRouteRow&&e(l).actionDeleteRouteRow(...x))},[o(pe,{icon:e(Xe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):Re("",!0)]),P("div",Ql,[o(pe,{icon:e(Lt),class:"text-warning-500"},null,8,["icon"]),P("span",Xl,X(e(t)("route-warning")),1)]),(v(!0),S(te,null,Ae(M.segments,(x,O)=>(v(),S("div",null,[o(fe,null,{default:c(()=>[o(Y,{"col-class":"w-1/5"},{default:c(()=>[o(z,{modelValue:x.departure_city,"onUpdate:modelValue":L=>x.departure_city=L,error:e(C).bookings.$each.$response.$data[B].segments.$each.$data[O].departure_city,options:e(q).regionsList,"onUpdate:options":b[2]||(b[2]=L=>e(q).regionsList=L),required:"",searchable:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":I.value,disabled:M.type===e(ue)&&O%2!==0,"onEmit:change":L=>i(L,B,O,M)},{option:c(({option:L})=>[o(e(Ne),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(Y,{"col-class":"w-1/5"},{default:c(()=>[o(z,{modelValue:x.arrival_city,"onUpdate:modelValue":L=>x.arrival_city=L,error:e(C).bookings.$each.$response.$data[B].segments.$each.$data[O].arrival_city,options:e(q).regionsList,"onUpdate:options":b[3]||(b[3]=L=>e(q).regionsList=L),required:"",searchable:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":I.value,disabled:M.type===e(ue)&&O%2!==0,"onEmit:change":L=>h(L,B,O,M)},{option:c(({option:L})=>[o(e(Ne),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),o(Y,{"col-class":"w-1/5"},{default:c(()=>[o(z,{modelValue:x.segment_class,"onUpdate:modelValue":L=>x.segment_class=L,error:e(C).bookings.$each.$response.$data[B].segments.$each.$data[O].segment_class,options:e(Qe),"onUpdate:options":b[4]||(b[4]=L=>Ie(Qe)?Qe.value=L:null),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":I.value,translatable:""},{option:c(({option:L})=>[o(e(Ne),{title:L.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error"])]),_:2},1024),o(Y,{"col-class":"w-1/5"},{default:c(()=>[o(Le,{modelValue:x.date,"onUpdate:modelValue":[L=>x.date=L,L=>x.date=e(qe)(L)],error:e(C).bookings.$each.$response.$data[B].segments.$each.$data[O].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":I.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),o(Y,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[o(Gl,{modelValue:x.time,"onUpdate:modelValue":L=>x.time=L,error:e(C).bookings.$each.$response.$data[B].segments.$each.$data[O].time,label:"time",required:"",range:"","show-nested-error":I.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),M.type===e(at)&&O!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:L=>e(l).actionDeleteRouteLine(B,O)},[o(pe,{icon:e(Xe),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,Zl)):Re("",!0)]),_:2},1024)]),_:2},1024)]))),256)),M.type===e(at)?(v(),S("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:x=>e(l).actionAddRouteLine(B)},[o(pe,{icon:e(Ze),class:"text-primary-500"},null,8,["icon"]),P("span",to,X(e(t)("add-line")),1)],8,eo)):Re("",!0),o(fe,null,{default:c(()=>[o(Y,{"col-class":"w-full"},{default:c(()=>[o(j,{modelValue:M.passengers,"onUpdate:modelValue":x=>M.passengers=x,options:F.value,error:e(C).bookings.$each.$response.$data[B].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":I.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),o(se,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Ze),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:f},null,8,["icon-left"]),P("div",lo,[o(se,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),P("div",oo,[o(se,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:b[5]||(b[5]=M=>E(e(tt)))}),o(se,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:_})])]),o(Se,{modelValue:U.value,"onUpdate:modelValue":b[6]||(b[6]=M=>U.value=M),"send-button-loading":e(l).buttonLoading,"onEmit:send":J},{content:c(()=>[o(e(Gt),{"compose-model":{...e(l).model,bookings:e(l).booking_model.bookings,trip_plans:e(l).trip_plan_model.trip_plans},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},ro={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},ao={class:"px-6 py-4"},cn={__name:"BusinessTripForm",props:{formType:{type:String,default:N}},setup(d){const r=d;K();const n=ae(),t=re();le();const m=ot();ee(m.rules,m.model);const s=G(null),l=me(()=>r.formType===N?"create-business-trip-notice":"update-business-trip-notice"),q=me(()=>{switch(n.query.step){case et:return qt;case tt:return jl;case st:return no;default:return qt}}),a=async C=>{var g;const $=e(s);((g=n.query)==null?void 0:g.step)!==C.value&&await $.stepClick(C.value)},p=async()=>{n.query.step||await t.replace({query:{...n.query,step:et}}),m.stepperItems.forEach(C=>C.active=C.value===n.query.step)};return We(async()=>{await p(),r.formType===Zt&&await m.actionGetDocumentDetailForUpdate(n.params.id)}),ye(()=>{m.actionResetBTModel()}),(C,$)=>{const g=ve,U=$l;return v(),S("div",{class:be(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(m).detailLoading}])},[e(m).detailLoading?(v(),W(g,{key:0})):(v(),W(e(ke),{key:1,title:l.value},{content:c(()=>[P("div",ro,[o(U,{items:e(m).stepperItems,"onEmit:stepClick":a},null,8,["items"])]),P("div",ao,[(v(),W(Rt(q.value),{"form-type":d.formType,ref_key:"childComponent",ref:s},null,8,["form-type"]))])]),_:1},8,["title"]))],2)}}};export{on as _,nn as a,dn as b,ln as c,rn as d,an as e,sn as f,cn as g};
