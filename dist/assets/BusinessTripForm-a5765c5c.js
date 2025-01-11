import{_ as de}from"./BaseRow-eba84f13.js";import{_ as Me}from"./BaseInput-d45198f6.js";import{_ as ce}from"./BaseCol-adba6166.js";import{v as W,b$ as ze,a6 as Be,o as v,c as L,i as n,z as c,h as e,bc as Ie,B as Vt,d6 as xt,cU as $t,f as Y,a as N,n as be,r as gt,G as Ge,aD as ye,c4 as K,c5 as X,bR as ne,u as J,t as Z,b as re,az as ae,cw as he,F as oe,aa as T,an as ve,d0 as je,d as me,aF as wt,cp as We,a8 as nt,d7 as Ut,e as Ae,g as Re,_ as pe,d8 as Et,d9 as Ct,da as St,db as dt,dc as ct,dd as ut,bb as yt,cW as Xe,bw as Ze,Y as Lt,de as Rt,c_ as Tt,E as Dt}from"./index-c482ca7c.js";import{c as y,r as h,u as te}from"./index-822ef03c.js";import{_ as Ot,a as Pt}from"./BranchMultiSelect-91b13156.js";import{_ as ke,c as Nt,a as It,h as At,i as Mt,d as Ft,e as jt,f as zt,g as Bt,b as Gt,k as Wt,j as Yt,l as pt}from"./BasePOA-a0a15328.js";import"./BaseTabMenu-f384067c.js";import"./dialog.esm-ff835b4a.js";import"./tabpanel.esm-a3a66842.js";import{s as _e,S as A,V as Ht,W as Te,X as ee,Y as ge,Z as mt,_ as rt,$ as Je,K as _t}from"./index-7fb40704.js";import"./BaseTabView-3fff3853.js";import"./FileTabs-a02cb58e.js";import{_ as z}from"./UserMultiSelect-5f324497.js";import{c as Kt,u as le,w as Ve,d as D}from"./axios.config-1050c22b.js";import{u as Fe}from"./common-1755d2a3.js";import{u as xe}from"./count.store-3dc64c3c.js";import{f as $e,a as ie,b as Ue,u as ht,c as Jt}from"./index.store-e7642ec7.js";import{j as qt,k as Ee,i as Ce,c as ue,b as Ke,l as et,m as tt,n as it,a as Qt,B as Xt,M as at,O as Zt,T as Qe}from"./index-211f969c.js";import{F as O,b as st}from"./constants-33601b85.js";import{_ as ot}from"./BaseDropdown-40b49eb3.js";import{_ as Ye}from"./BaseCalendar-666799c1.js";import{_ as vt}from"./WithLabel-889d5908.js";import{a as qe}from"./formatDate-bfd20b6d.js";import"./qrcode.vue.esm-f80ab09e.js";import{_ as eo}from"./ShortDescription-2075cc2c.js";import"./dayjs.min-9e9c8aa4.js";/* empty css                                                                               */import{c as to}from"./Dropdown-6284a9c8.js";import"./menu.esm-1c15c9d9.js";/* empty css                                                 */import"./avatar.esm-ae62921a.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-c88d54fe.js";import"./common.store-70b6d247.js";import{_ as Ne}from"./WithRadio-8d12a68b.js";import"./radiobutton.esm-fa522bb5.js";import"./checkbox.esm-6c5251ec.js";import{_ as oo}from"./WithSelectable-f625b8ba.js";import{_ as lo}from"./BaseBrickTab-251dc7b6.js";import{_ as no}from"./BaseFileUpload-09d5aa35.js";import{_ as ro}from"./BaseFroalaEditor-c2d507e1.js";import{_ as ao}from"./BaseLabel-bc227ac7.js";import{K as so}from"./main-a629d5cb.js";import{_ as io}from"./BaseDialog-6ced390e.js";const co={class:"user-select"},we={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(d,{emit:r}){const l=d,t=W([]),p=ze(l,"modelValue"),s=async o=>{let{data:m}=await Kt.get(`${l.apiUrl}/`,o);m.hasOwnProperty("results")?t.value=m.results:t.value=m};return Be(async()=>{await s(l.apiParams)}),(o,m)=>(v(),L("div",co,[n(ot,{modelValue:e(p),"onUpdate:modelValue":m[0]||(m[0]=a=>Ie(p)?p.value=a:null),options:t.value,"onUpdate:options":m[1]||(m[1]=a=>t.value=a),error:l.error,"api-url":l.apiUrl,"api-params":l.apiParams,"option-label":"full_name",label:l.label,placeholder:l.placeholder,required:l.required,searchable:"","onEmit:change":m[2]||(m[2]=a=>r("emit:change",a))},{option:c(({option:a})=>[n(e(oo),{items:[a]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var uo=`
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
`,po={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Vt.extend({name:"editor",css:uo,classes:po});(function(){try{return window.Quill}catch{return null}})();const De={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(d){return["froala","tiny"].includes(d)}}},emits:["update:modelValue","emit:fileUpload"],setup(d,{emit:r}){const l=d,t=ze(l,"modelValue"),p=W([{title:"text",slot:"editor",icon:xt},{title:"file",slot:"file",icon:$t}]);return(s,o)=>(v(),Y(lo,{"tab-panel-list":p.value,"panel-container-class":"px-0"},{editor:c(()=>[d.editor==="froala"?(v(),Y(ro,{key:0,modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=m=>Ie(t)?t.value=m:null)},null,8,["modelValue"])):(v(),Y(to,{key:1,modelValue:e(t),"onUpdate:modelValue":o[1]||(o[1]=m=>Ie(t)?t.value=m:null)},null,8,["modelValue"]))]),file:c(()=>[N("div",{class:be(l.fileUploadContainerClasses)},[n(no,{files:l.files,"onEmit:fileUpload":o[2]||(o[2]=m=>r("emit:fileUpload",m))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},mo={class:"flex flex-col justify-between h-full"},_o={class:"px-6 py-4 overflow-y-auto"},qo={class:"actions p-6"},Oe={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(d,{emit:r}){return(l,t)=>{const p=Ge;return v(),L("div",mo,[N("div",_o,[gt(l.$slots,"default")]),N("div",qo,[n(p,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:t[0]||(t[0]=s=>r("emit:clearForm"))}),n(p,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:t[1]||(t[1]=s=>r("emit:preview"))})])])}}},fo=ye("sd-stores-inner",{state:()=>{var d,r;return{buttonLoading:!1,detailLoading:!1,model:{company:(r=(d=le().currentUser)==null?void 0:d.company)==null?void 0:r.id,content:null,document_type:K.INNER,document_sub_type:X.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:ne.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__departments:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{},__signers:{required:y.withMessage("Поле не должен быть пустым",h)}}}},actions:{async actionCreateDocument(d){let r={...d,type:qt,sub_type:qt};this.buttonLoading=!0;const{response:l,error:t}=await Ve(Ue,r);return l?(this.buttonLoading=!1,Promise.resolve(l)):Promise.reject(t)},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:l}=await $e({id:d,body:r});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);_e(this.model,r),this.model.__approvers=await A(r.approvers),this.model.__signers=await A(r.signers),this.model.__departments=await Ht(r.receiver.departments),this.model.__files=r.files}catch{}finally{this.detailLoading=!1}}}}),bo={class:"font-semibold text-xl"},Se={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(d,{emit:r}){const t=ze(d,"modelValue"),{t:p}=J();return(s,o)=>{const m=Ge,a=io;return v(),Y(a,{modelValue:e(t),"onUpdate:modelValue":o[1]||(o[1]=q=>Ie(t)?t.value=q:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[N("span",bo,Z(e(p)("preview")),1)]),content:c(()=>[gt(s.$slots,"content")]),footer:c(()=>[n(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),n(m,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:d.sendButtonLoading,onClick:o[0]||(o[0]=q=>r("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},en={__name:"InnerForm",props:{formType:{type:String,default:O}},setup(d){const r=d,l=le(),t=fo();Fe();const p=xe(),s=W(!1);W(null);const{t:o}=J(),m=re(),a=ae(),q=te(t.rules,t.model),k=async()=>{await q.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.departments=[],t.model.departments=t.model.__departments.map(_=>_.id),t.model.files=[],t.model.files=t.model.__files.map(_=>({id:_.id})),t.model.journal=ne.INNER,t.model.sender=l.currentUser.top_level_department.id,t.model.approvers=ee(t.model.__approvers),t.model.signers=ee(t.model.__signers),t.model.document_type=a.params.document_type,t.model.document_sub_type=a.params.document_sub_type)},U=()=>{r.formType===O?w():C()},w=async()=>{const E=await t.actionCreateDocument(t.model);await p.actionCountList(),E?(s.value=!1,D(null,o("document-sent"),T.SUCCESS),await m.replace({name:Ee,query:{document_type:K.INNER}})):D(null,o("error-occurred"),T.ERROR)},C=async()=>{await t.actionUpdateDocument({id:a.params.id,body:t.model}),await p.actionCountList(),D(null,o("document-sent"),T.SUCCESS),await m.replace({name:Ce,params:{id:a.params.id,document_type:K.INNER,document_sub_type:X.SERVICE_LETTER}})},I=()=>{console.log("Clear Form")},j=E=>{t.model.__files=[],E.forEach(_=>{t.model.__files.push(_)})};return Be(async()=>{a.params.id&&await t.actionGetDocumentDetailForUpdate(a.params.id)}),he(()=>{Te(t.model)}),(E,_)=>{const $=ve,u=ce,i=Me,g=de;return e(t).detailLoading?(v(),Y($,{key:0})):(v(),L(oe,{key:1},[n(e(ke),{title:r.formType===e(O)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[n(Oe,{"onEmit:preview":k,"onEmit:clearForm":I},{default:c(()=>[n(g,null,{default:c(()=>[n(u,{"col-class":"w-1/2"},{default:c(()=>[n(Ot,{modelValue:e(q).__departments.$model,"onUpdate:modelValue":_[0]||(_[0]=f=>e(q).__departments.$model=f),error:e(q).__departments},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(i,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=f=>e(q).short_description.$model=f),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":_[2]||(_[2]=f=>e(q).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=f=>e(q).__signers.$model=f),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-full"},{default:c(()=>[n(De,{modelValue:e(q).content.$model,"onUpdate:modelValue":_[4]||(_[4]=f=>e(q).content.$model=f),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":j},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Se,{modelValue:s.value,"onUpdate:modelValue":_[5]||(_[5]=f=>s.value=f),"send-button-loading":e(t).buttonLoading,"onEmit:send":U},{content:c(()=>{var f,S;return[n(Nt,{"compose-model":{...e(t).model,signers:e(t).model.__signers,approvers:e(t).model.__approvers,author:e(t).model.__signers[0],sender:{name:(S=(f=e(l).currentUser)==null?void 0:f.top_level_department)==null?void 0:S.name},receiver:{departments:e(t).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},go=ye("sd-store-application",{state:()=>{var d,r;return{buttonLoading:!1,detailLoading:!1,model:{company:(r=(d=le().currentUser)==null?void 0:d.company)==null?void 0:r.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{}}}},actions:{async actionCreateDocument(d){let r={...d};this.buttonLoading=!0;const{response:l,error:t}=await Ve(Ue,r);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:l}=await $e({id:d,body:r});return Promise.resolve(l)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);_e(this.model,r),this.model.__approvers=await A(r.approvers),this.model.__signers=await A(r.signers.filter(l=>l.type===je.SIGNER)),this.model.__curator=await ge([],r.curator.id,!1),this.model.__files=r.files}catch{}finally{this.detailLoading=!1}}}}),kt=ye("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:le().currentUser.company.id,curator:null,document_type:K.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:ne.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:y.withMessage("Поле не должен быть пустым",h)},register_date:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__negotiators:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:r,error:l}=await Ve(Ue,d);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:l}=await $e({id:d,body:r});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);_e(this.model,r),this.model.__signers=await A(r.signers.filter(l=>l.type!==je.NEGOTIATOR)),this.model.__negotiators=await A(r.signers.filter(l=>l.type===je.NEGOTIATOR)),this.model.__approvers=await A(r.approvers),this.model.__curator=await ge([],r.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),tn={__name:"ApplicationForm",props:{formType:{type:String,default:O}},setup(d){const r=d,l=le(),t=go();Fe();const p=xe();kt();const s=W(!1);W(null);const{t:o}=J(),m=re(),a=ae(),q=te(t.rules,t.model),k=async()=>{var _,$,u,i,g;await q.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.signers=[{user:(_=l==null?void 0:l.currentUser)==null?void 0:_.id}],t.model.sender=(u=($=l==null?void 0:l.currentUser)==null?void 0:$.top_level_department)==null?void 0:u.id,t.model.curator=(g=(i=t==null?void 0:t.model)==null?void 0:i.__curator)==null?void 0:g.user_id,t.model.journal=ne.APPLICATION,t.model.document_type=a.params.document_type,t.model.document_sub_type=a.params.document_sub_type,t.model.approvers=ee(t.model.__approvers))},U=async()=>{},w=()=>{r.formType===O?C():I()},C=async()=>{const E=await t.actionCreateDocument(t.model);await p.actionCountList(),E?(s.value=!1,D(null,o("document-sent"),T.SUCCESS),await m.replace({name:Ee,query:{document_type:K.APPLICATION}})):D(null,o("error-occurred"),T.ERROR)},I=async()=>{await t.actionUpdateDocument({id:a.params.id,body:t.model}),await p.actionCountList(),D(null,o("document-sent"),T.SUCCESS),await m.replace({name:Ce,params:{id:a.params.id,document_type:K.APPLICATION,document_sub_type:X.LABOR_LEAVE}})},j=E=>{t.model.__files=[],E.forEach(_=>{t.model.__files.push(_)})};return Be(async()=>{a.params.id&&await t.actionGetDocumentDetailForUpdate(a.params.id)}),he(()=>{Te(t.model)}),(E,_)=>{const $=ve,u=ce,i=de;return e(t).detailLoading?(v(),Y($,{key:0})):(v(),L(oe,{key:1},[n(e(ke),{title:r.formType===e(O)?"create-sd-application":"update-sd-application"},{content:c(()=>[n(Oe,{"onEmit:preview":k,"onEmit:clearForm":U},{default:c(()=>[n(i,null,{default:c(()=>[n(u,{"col-class":"w-1/2"},{default:c(()=>[n(we,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=g=>e(q).__curator.$model=g),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":_[1]||(_[1]=g=>e(q).__approvers.$model=g),error:e(q).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":_[2]||(_[2]=g=>e(q).__signers.$model=g),disabled:"",label:"signers",placeholder:e(l).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),n(u,{"col-class":"w-full"},{default:c(()=>[n(De,{modelValue:e(q).content.$model,"onUpdate:modelValue":_[3]||(_[3]=g=>e(q).content.$model=g),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":j},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Se,{modelValue:s.value,"onUpdate:modelValue":_[4]||(_[4]=g=>s.value=g),"send-button-loading":e(t).buttonLoading,"onEmit:send":w},{content:c(()=>[n(It,{"compose-model":{...e(t).model,curator:e(t).model.__curator,author:r.formType===e(O)?e(l).currentUser:e(t).model.__signers[0].user,signers:r.formType===e(O)?[e(l).currentUser]:e(t).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wo=ye("sd-notice-store",{state:()=>(le(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:K.NOTICE,document_sub_type:X.BUSINESS_TRIP,journal:ne.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",h)},start_date:{required:y.withMessage("Поле не должен быть пустым",h)},route:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__companies:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__employees:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},__tags:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:r,error:l}=await Ve(Ue,d);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:l}=await $e({id:d,body:r});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d,r=!1){try{this.detailLoading=!0;const{data:l}=await ie(d);_e(this.model,l),this.model.__companies=[],this.model.__curator=await ge([],l.curator.id,!1),this.model.__employees=await A(l.notices),r?(this.model.__approvers=await A(l.approvers.filter(t=>{var p,s;return((p=t==null?void 0:t.user)==null?void 0:p.id)!==((s=l==null?void 0:l.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await A(l.approvers),this.model.__signers=await A(l.signers),this.model.__companies=await mt(l.notices[0].destinations),this.model.__tags=await rt(l.tags),this.model.start_date=l.notices[0].start_date,this.model.end_date=l.notices[0].end_date,this.model.__tags=l.tags,this.model.route=l.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(d,r){try{this.detailLoading=!0;const{data:l}=await ie(d),t=await ie(r);_e(this.model,l),this.model.__companies=[],this.model.__curator=await ge([],l.curator.id,!1),this.model.__employees=await A(t.data.notices),this.model.__approvers=await A(l.approvers),this.model.__signers=await A(l.signers),this.model.__companies=await mt(t.data.notices[0].destinations),this.model.__tags=await rt(l.tags),this.model.start_date=t.data.notices[0].start_date,this.model.end_date=t.data.notices[0].end_date,this.model.__tags=l.tags,this.model.route=t.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),yo={class:"flex w-full gap-x-4"},on={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:O}},setup(d){const r=d,{t:l}=J(),t=ae(),p=re(),s=le(),o=wo(),m=xe();Fe();const a=te(o.rules,o.model),q=W(!1),k=me(()=>{const u=r.formType===O,i=t.params.document_sub_type;return i===X.BUSINESS_TRIP_DECREE_LOCAL?u?"create-decree":"update-decree":i===X.BUSINESS_TRIP_ORDER_LOCAL?u?"create-order":"update-order":u?"create-business-trip-notice":"update-business-trip-notice"}),U=me(()=>{var u,i;return t.params.document_sub_type===X.BUSINESS_TRIP_DECREE_LOCAL&&((u=t==null?void 0:t.query)==null?void 0:u.compose_id)&&((i=t==null?void 0:t.query)==null?void 0:i.document_sub_type)===X.BUSINESS_TRIP}),w=me(()=>{var u;return!!(t.params.document_sub_type===X.BUSINESS_TRIP_DECREE_LOCAL&&((u=o==null?void 0:o.model)!=null&&u.trip_notice_id))});wt(()=>o.model.__tags,u=>{if(r.formType===O)if(u&&u.length){let i=`${u.map(g=>g.name_uz).join(", ")} yuzasidan`;o.model.short_description=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase()}else o.model.short_description=null});const C=async()=>{var i,g,f,S,M;await a.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.notices=[],o.model.approvers=ee(o.model.__approvers),o.model.signers=ee(o.model.__signers),o.model.curator=(g=(i=o==null?void 0:o.model)==null?void 0:i.__curator)==null?void 0:g.user_id,o.model.journal=t.params.document_type===K.DECREE||t.params.document_type===K.ORDER?ne.ORDERS_PROTOCOLS:ne.INNER,o.model.company=s.currentUser.company.id,o.model.notices=o.model.__employees.map(Q=>({start_date:o.model.start_date,end_date:o.model.end_date,user:Q.id,route:o.model.route,companies:o.model.__companies.map(V=>V.id)})),o.model.sender=(S=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:S.id,o.model.tags=o.model.__tags.map(Q=>({id:Q.id})),o.model.files=o.model.__files.map(Q=>({id:Q.id})),o.model.document_type=t.params.document_type,o.model.document_sub_type=t.params.document_sub_type,U.value&&(o.model.trip_notice_id=(M=t==null?void 0:t.query)==null?void 0:M.compose_id),q.value=!0)},I=()=>{},j=u=>{o.model.__files=[],u.forEach(i=>{o.model.__files.push(i)})},E=async()=>{U.value&&(o.model.notices=[]);const u=await o.actionCreateDocument(o.model);await m.actionCountList(),u?(q.value=!1,D(null,l("document-sent"),T.SUCCESS),await p.replace({name:Ee,query:{document_type:t.params.document_sub_type===X.BUSINESS_TRIP_DECREE_LOCAL?K.DECREE:t.params.document_sub_type===X.BUSINESS_TRIP_ORDER_LOCAL?K.ORDER:K.NOTICE}})):D(null,l("error-occurred"),T.ERROR)},_=async()=>{(U.value||w.value)&&(o.model.notices=[]),await o.actionUpdateDocument({id:t.params.id,body:o.model}),await m.actionCountList(),D(null,l("changed"),T.SUCCESS),await p.replace({name:Ce,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},$=()=>{r.formType===O?E():_()};return We(async()=>{t.params.id&&t.query.trip_notice_id&&t.params.document_sub_type===X.BUSINESS_TRIP_DECREE_LOCAL?await o.actionGetDocumentDetailForUpdateForCustomUse(t.params.id,t.query.trip_notice_id):t.params.id?await o.actionGetDocumentDetailForUpdate(t.params.id):U.value&&await o.actionGetDocumentDetailForUpdate(t.query.compose_id,!0)}),he(()=>{Te(o.model)}),(u,i)=>{const g=ve,f=ce,S=Ye,M=ot,Q=Me,V=de;return e(o).detailLoading?(v(),Y(g,{key:0})):(v(),L(oe,{key:1},[n(e(ke),{title:k.value},{content:c(()=>[n(Oe,{"onEmit:preview":C,"onEmit:clearForm":I},{default:c(()=>[n(V,null,{default:c(()=>[n(f,{"col-class":"w-1/2"},{default:c(()=>[n(we,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=b=>e(a).__curator.$model=b),error:e(a).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(a).__employees.$model,"onUpdate:modelValue":i[1]||(i[1]=b=>e(a).__employees.$model=b),error:e(a).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:U.value||w.value},null,8,["modelValue","error","disabled"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(Pt,{modelValue:e(a).__companies.$model,"onUpdate:modelValue":i[2]||(i[2]=b=>e(a).__companies.$model=b),error:e(a).__companies,"text-truncate":"",disabled:U.value||w.value},null,8,["modelValue","error","disabled"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(vt,{modelValue:e(a).__tags.$model,"onUpdate:modelValue":i[3]||(i[3]=b=>e(a).__tags.$model=b),error:e(a).__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:b})=>[nt(Z(b.name),1)]),option:c(({value:b})=>[n(e(Ne),{title:b.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[N("div",yo,[n(S,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[i[4]||(i[4]=b=>e(a).start_date.$model=b),i[5]||(i[5]=b=>e(a).start_date.$model=e(qe)(b))],error:e(a).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:U.value||w.value},null,8,["modelValue","error","min-date","disabled"]),n(S,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[i[6]||(i[6]=b=>e(a).end_date.$model=b),i[7]||(i[7]=b=>e(a).end_date.$model=e(qe)(b))],error:e(a).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:U.value||w.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(M,{modelValue:e(a).route.$model,"onUpdate:modelValue":i[8]||(i[8]=b=>e(a).route.$model=b),error:e(a).route,options:e(Ut),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:U.value||w.value},null,8,["modelValue","error","options","disabled"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":i[9]||(i[9]=b=>e(o).model.__approvers=b),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":i[10]||(i[10]=b=>e(a).__signers.$model=b),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(Q,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":i[11]||(i[11]=b=>e(a).short_description.$model=b),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-full"},{default:c(()=>[n(De,{modelValue:e(a).content.$model,"onUpdate:modelValue":i[12]||(i[12]=b=>e(a).content.$model=b),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":j},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Se,{modelValue:q.value,"onUpdate:modelValue":i[13]||(i[13]=b=>q.value=b),"send-button-loading":e(o).buttonLoading,"onEmit:send":$},{content:c(()=>[e(t).params.document_sub_type===e(X).BUSINESS_TRIP_DECREE_LOCAL?(v(),Y(e(At),{key:0,"compose-model":e(o).model,preview:!0},null,8,["compose-model"])):e(t).params.document_sub_type===e(X).BUSINESS_TRIP_ORDER_LOCAL?(v(),Y(e(Mt),{key:1,"compose-model":e(o).model,preview:!0},null,8,["compose-model"])):(v(),Y(e(Ft),{key:2,"compose-model":e(o).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},ln={__name:"OrderForm",props:{formType:{type:String,default:O}},setup(d){const r=d,l=kt(),t=xe(),p=le(),s=ae(),o=re(),m=te(l.rules,l.model),{t:a}=J(),q=W(!1),k=async()=>{var _,$,u,i;await m.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=ee(l.model.__approvers),l.model.curator=($=(_=l==null?void 0:l.model)==null?void 0:_.__curator)==null?void 0:$.user_id,l.model.sender=(i=(u=p==null?void 0:p.currentUser)==null?void 0:u.top_level_department)==null?void 0:i.id,l.model.files=l.model.__files.map(g=>({id:g.id})),l.model.document_type=s.params.document_type,l.model.document_sub_type=s.params.document_sub_type,l.model.journal=ne.ORDERS_PROTOCOLS,l.model.register_date=qe(l.model.register_date),l.model.__negotiators.forEach(g=>{l.model.signers.push(g.hasOwnProperty("user")?{id:g.id,user:g.user.id,type:je.NEGOTIATOR}:{user:g.id,type:je.NEGOTIATOR})}),s.query.compose_id&&(l.model.trip_notice_id=s.query.compose_id),q.value=!0)},U=()=>{},w=async()=>{try{const E=await l.actionCreateDocument(l.model);await t.actionCountList(),E&&(q.value=!1,D(null,a("document-sent"),T.SUCCESS),await o.replace({name:Ee,query:{document_type:K.ORDER}}))}catch{D(null,a("error-occurred"),T.ERROR)}},C=async()=>{try{const E=await l.actionUpdateDocument({id:s.params.id,body:l.model});await t.actionCountList(),D(null,a("changed"),T.SUCCESS),await o.replace({name:Ce,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{D(null,a("error-occurred"),T.ERROR)}},I=()=>{r.formType===O?w():C()},j=E=>{l.model.__files=[],E.forEach(_=>{l.model.__files.push(_)})};return Be(async()=>{s.params.id&&await l.actionGetDocumentDetailForUpdate(s.params.id)}),he(()=>{Te(l.model)}),(E,_)=>{const $=ve,u=ce,i=Me,g=Ye,f=de;return e(l).detailLoading?(v(),Y($,{key:0})):(v(),L(oe,{key:1},[n(e(ke),{title:r.formType===e(O)?"create-order":"update-order"},{content:c(()=>[n(Oe,{"onEmit:preview":k,"onEmit:clearForm":U},{default:c(()=>[n(f,null,{default:c(()=>[n(u,{"col-class":"w-1/2"},{default:c(()=>[n(we,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=S=>e(m).__curator.$model=S),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(i,{modelValue:e(m).register_number.$model,"onUpdate:modelValue":_[1]||(_[1]=S=>e(m).register_number.$model=S),error:e(m).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(g,{modelValue:e(m).register_date.$model,"onUpdate:modelValue":_[2]||(_[2]=S=>e(m).register_date.$model=S),error:e(m).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":_[3]||(_[3]=S=>e(l).model.__approvers=S),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(m).__negotiators.$model,"onUpdate:modelValue":_[4]||(_[4]=S=>e(m).__negotiators.$model=S),error:e(m).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-full"},{default:c(()=>[n(De,{modelValue:e(m).content.$model,"onUpdate:modelValue":_[5]||(_[5]=S=>e(m).content.$model=S),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":j},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Se,{modelValue:q.value,"onUpdate:modelValue":_[6]||(_[6]=S=>q.value=S),"send-button-loading":e(l).buttonLoading,"onEmit:send":I},{content:c(()=>[n(e(jt),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ho=ye("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:r,error:l}=await Ve(Ue,d);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:l}=await $e({id:d,body:r});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);_e(this.model,r),this.model.__curator=await ge([],r.curator.id,!1),this.model.__approvers=await A(r.approvers),this.model.__signers=await A(r.signers)}catch{}finally{this.detailLoading=!1}}}}),nn={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:O}},setup(d){const r=d,{t:l}=J(),t=ae(),p=re(),s=le(),o=ho(),m=xe();Fe();const a=W(!1),q=te(o.rules,o.model),k=async()=>{var _,$,u,i;await q.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=ee(o.model.__approvers),o.model.signers=ee(o.model.__signers),o.model.curator=($=(_=o==null?void 0:o.model)==null?void 0:_.__curator)==null?void 0:$.user_id,o.model.journal=ne.INNER,o.model.company=s.currentUser.company.id,o.model.sender=(i=(u=s==null?void 0:s.currentUser)==null?void 0:u.top_level_department)==null?void 0:i.id,o.model.files=o.model.__files.map(g=>({id:g.id})),o.model.document_type=t.params.document_type,o.model.document_sub_type=t.params.document_sub_type,a.value=!0)},U=()=>{},w=E=>{o.model.__files=[],E.forEach(_=>{o.model.__files.push(_)})},C=async()=>{const E=await o.actionCreateDocument(o.model);await m.actionCountList(),E?(a.value=!1,D(null,l("document-sent"),T.SUCCESS),await p.replace({name:Ee,query:{document_type:K.NOTICE}})):D(null,l("error-occurred"),T.ERROR)},I=async()=>{await o.actionUpdateDocument({id:t.params.id,body:o.model}),await m.actionCountList(),D(null,l("changed"),T.SUCCESS),await p.replace({name:Ce,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},j=()=>{r.formType===O?C():I()};return We(async()=>{t.params.id&&await o.actionGetDocumentDetailForUpdate(t.params.id)}),he(()=>{Te(o.model)}),(E,_)=>{const $=ve,u=ce,i=Me,g=de;return e(o).detailLoading?(v(),Y($,{key:0})):(v(),L(oe,{key:1},[n(e(ke),{title:r.formType===e(O)?"create-notice":"update-notice"},{content:c(()=>[n(Oe,{"onEmit:preview":k,"onEmit:clearForm":U},{default:c(()=>[n(g,null,{default:c(()=>[n(u,{"col-class":"w-1/2"},{default:c(()=>[n(we,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":_[0]||(_[0]=f=>e(q).__curator.$model=f),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(i,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":_[1]||(_[1]=f=>e(q).short_description.$model=f),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":_[2]||(_[2]=f=>e(o).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":_[3]||(_[3]=f=>e(q).__signers.$model=f),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-full"},{default:c(()=>[n(De,{modelValue:e(q).content.$model,"onUpdate:modelValue":_[4]||(_[4]=f=>e(q).content.$model=f),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":w},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Se,{modelValue:a.value,"onUpdate:modelValue":_[5]||(_[5]=f=>a.value=f),"send-button-loading":e(o).buttonLoading,"onEmit:send":j},{content:c(()=>[n(e(zt),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vo=ye("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(d){const r={...d};delete r.bookings,delete r.notices,delete r.trip_plans,this.buttonLoading=!0;const{response:l,error:t}=await Ve(Ue,r);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:d,body:r}){const l={...r};delete l.bookings,delete l.notices,delete l.trip_plans;try{this.buttonLoading=!0;const{data:t}=await $e({id:d,body:l});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d,r){try{this.detailLoading=!0;const{data:l}=await ie(d);_e(this.model,l),this.model.__curator=await ge([],l.curator.id,!1),this.model.__approvers=await A(l.approvers),this.model.__signers=await A(l.signers)}catch{}finally{this.detailLoading=!1}}}}),rn={__name:"DecreeForm",props:{formType:{type:String,default:O}},setup(d){const r=d,{t:l}=J(),t=ae(),p=re(),s=le(),o=xe();Fe();const m=W(!1),a=vo(),q=ht(),k=te(a.rules,a.model),U=async()=>{var u,i,g,f;await k.value.$validate()&&(a.model.approvers=[],a.model.signers=[],a.model.approvers=ee(a.model.__approvers),a.model.signers=ee(a.model.__signers),a.model.curator=(i=(u=a==null?void 0:a.model)==null?void 0:u.__curator)==null?void 0:i.user_id,a.model.journal=ne.ORDERS_PROTOCOLS,a.model.company=s.currentUser.company.id,a.model.sender=(f=(g=s==null?void 0:s.currentUser)==null?void 0:g.top_level_department)==null?void 0:f.id,a.model.files=a.model.__files.map(S=>({id:S.id})),a.model.document_type=t.params.document_type,a.model.document_sub_type=t.params.document_sub_type,t.query.compose_id&&(a.model.trip_notice_id=t.query.compose_id),m.value=!0)},w=()=>{},C=$=>{a.model.__files=[],$.forEach(u=>{a.model.__files.push(u)})},I=async()=>{const $=await a.actionCreateDocument(a.model);await o.actionCountList(),$?(m.value=!1,D(null,l("document-sent"),T.SUCCESS),await p.replace({name:Ee,query:{document_type:t.params.document_type}})):D(null,l("error-occurred"),T.ERROR)},j=async()=>{await a.actionUpdateDocument({id:t.params.id,body:a.model}),await o.actionCountList(),D(null,l("changed"),T.SUCCESS),await p.replace({name:Ce,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},E=()=>{r.formType===O?I():j()},_=async $=>{const{data:u}=await q.actionGetDocumentDetail($);a.model.notices=u==null?void 0:u.notices,a.model.trip_plans=u==null?void 0:u.trip_plans,a.model.bookings=u==null?void 0:u.bookings,a.model.short_description=u==null?void 0:u.short_description,a.model.trip_notice_register_number=u==null?void 0:u.register_number};return We(async()=>{r.formType===O&&t.query.compose_id?await _(t.query.compose_id):r.formType===st&&t.query.trip_notice_id&&t.params.id?(await a.actionGetDocumentDetailForUpdate(t.params.id,null),await _(t.query.trip_notice_id)):r.formType===st&&t.params.id&&await a.actionGetDocumentDetailForUpdate(t.params.id,null)}),he(()=>{Te(a.model)}),($,u)=>{const i=ve,g=ce,f=Me,S=de;return e(a).detailLoading?(v(),Y(i,{key:0})):(v(),L(oe,{key:1},[n(e(ke),{title:r.formType===e(O)?"create-decree":"update-decree"},{content:c(()=>[n(Oe,{"onEmit:preview":U,"onEmit:clearForm":w},{default:c(()=>[n(S,null,{default:c(()=>[n(g,{"col-class":"w-1/2"},{default:c(()=>[n(we,{modelValue:e(k).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=M=>e(k).__curator.$model=M),error:e(k).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(g,{"col-class":"w-1/2"},{default:c(()=>[n(f,{modelValue:e(k).short_description.$model,"onUpdate:modelValue":u[1]||(u[1]=M=>e(k).short_description.$model=M),error:e(k).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(g,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":u[2]||(u[2]=M=>e(a).model.__approvers=M),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(g,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(k).__signers.$model,"onUpdate:modelValue":u[3]||(u[3]=M=>e(k).__signers.$model=M),error:e(k).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(g,{"col-class":"w-full"},{default:c(()=>[n(De,{modelValue:e(k).content.$model,"onUpdate:modelValue":u[4]||(u[4]=M=>e(k).content.$model=M),error:e(k).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":C},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Se,{modelValue:m.value,"onUpdate:modelValue":u[5]||(u[5]=M=>m.value=M),"send-button-loading":e(a).buttonLoading,"onEmit:send":E},{content:c(()=>[n(e(Bt),{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ko=ye("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",h)},start_date:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},__user:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:r,error:l}=await Ve(Ue,d);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(l))},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);return _e(this.model,r),this.model.__curator=await ge([],r.curator.id,!1),this.model.__approvers=await A(r.approvers),this.model.__signers=await A(r.signers),this.model.__user=await Je("users/personal-information",[],!1,r.user.id),this.model.__parent=r.parent,Promise.resolve(r)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:l}=await $e({id:d,body:r});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}}}}),an={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:O}},setup(d){const r=d,l=ae(),t=re(),p=le(),s=ko();ht();const o=xe(),{t:m}=J(),a=te(s.rules,s.model),q=W(!1),k=W([]),U=me(()=>r.formType===O?"create-poa":"update-poa"),w=me(()=>s.model.start_date?new Date(s.model.start_date):new Date),C=async()=>{var i,g,f,S,M,Q,V,b,B,H,Le,fe,se,F,G,x,P,R,He,Pe;if(await a.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=ee(s.model.__approvers),s.model.signers=ee(s.model.__signers),s.model.curator=(g=(i=s==null?void 0:s.model)==null?void 0:i.__curator)==null?void 0:g.user_id,s.model.user=(S=(f=s==null?void 0:s.model)==null?void 0:f.__user)==null?void 0:S.id,s.model.journal=ne.POWER_OF_ATTORNEY,s.model.company=(Q=(M=p.currentUser)==null?void 0:M.company)==null?void 0:Q.id,s.model.sender=(b=(V=p==null?void 0:p.currentUser)==null?void 0:V.top_level_department)==null?void 0:b.id,s.model.document_type=l.params.document_type,s.model.document_sub_type=l.params.document_sub_type,s.model.content=".",s.model.parent=(H=(B=s.model)==null?void 0:B.__parent)==null?void 0:H.id,!((fe=(Le=s==null?void 0:s.model)==null?void 0:Le.__user)!=null&&fe.passport_seria||(F=(se=s==null?void 0:s.model)==null?void 0:se.__user)!=null&&F.passport_number||(x=(G=s==null?void 0:s.model)==null?void 0:G.__user)!=null&&x.passport_issue_date||(R=(P=s==null?void 0:s.model)==null?void 0:P.__user)!=null&&R.passport_issued_by)){D(null,`${(Pe=(He=s.model)==null?void 0:He.__user)==null?void 0:Pe.full_name}: ${m("passport-details-error")}`,T.WARNING);return}q.value=!0}},I=()=>{},j=async()=>{const u=await s.actionCreateDocument(s.model);await o.actionCountList(),u?(q.value=!1,D(null,m("document-sent"),T.SUCCESS),await t.replace({name:Ee,query:{document_type:K.POWER_OF_ATTORNEY}})):D(null,m("error-occurred"),T.ERROR)},E=async()=>{await s.actionUpdateDocument({id:l.params.id,body:s.model}),await o.actionCountList(),D(null,m("changed"),T.SUCCESS),await t.replace({name:Ce,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},_=()=>{r.formType===O?j():E()},$=async u=>{const{data:i}=await Jt({user:u.id,document_sub_type:l.params.document_sub_type,status:5});k.value=i.results};return We(async()=>{if(l.params.id){const u=await s.actionGetDocumentDetailForUpdate(l.params.id);u.parent&&(k.value=[u.parent])}}),he(()=>{Te(s.model)}),(u,i)=>{const g=ve,f=ce,S=Ye,M=ot,Q=de;return e(s).detailLoading?(v(),Y(g,{key:0})):(v(),L(oe,{key:1},[n(e(ke),{title:U.value},{content:c(()=>[n(Oe,{"onEmit:preview":C,"onEmit:clearForm":I},{default:c(()=>[n(Q,null,{default:c(()=>[n(f,{"col-class":"w-1/2"},{default:c(()=>[n(we,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=V=>e(a).__curator.$model=V),error:e(a).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(we,{modelValue:e(a).__user.$model,"onUpdate:modelValue":i[1]||(i[1]=V=>e(a).__user.$model=V),error:e(a).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":i[2]||(i[2]=V=>$(V))},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(S,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[i[3]||(i[3]=V=>e(a).start_date.$model=V),i[4]||(i[4]=V=>e(a).start_date.$model=e(qe)(V))],error:e(a).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(S,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[i[5]||(i[5]=V=>e(a).end_date.$model=V),i[6]||(i[6]=V=>e(a).end_date.$model=e(qe)(V))],error:e(a).end_date,"min-date":w.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":i[7]||(i[7]=V=>e(s).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":i[8]||(i[8]=V=>e(a).__signers.$model=V),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:c(()=>[n(M,{modelValue:e(s).model.__parent,"onUpdate:modelValue":i[9]||(i[9]=V=>e(s).model.__parent=V),options:k.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Se,{modelValue:q.value,"onUpdate:modelValue":i[10]||(i[10]=V=>q.value=V),"send-button-loading":e(s).buttonLoading,"onEmit:send":_},{content:c(()=>[n(Gt,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Vo={class:"base-stepper-component flex items-center select-none"},xo=["onClick"],$o={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Uo={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(d,{emit:r}){const{t:l}=J(),t=p=>{r("emit:stepClick",p)};return(p,s)=>{const o=pe;return v(),L("div",Vo,[(v(!0),L(oe,null,Ae(d.items,(m,a)=>(v(),L("div",{key:m.id,class:"flex items-center"},[N("div",{class:be(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",m.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:q=>t(m)},[n(o,{icon:m.icon,class:be(m.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),N("span",null,Z(e(l)(m.label)),1)],10,xo),a<d.items.length-1?(v(),L("div",$o)):Re("",!0)]))),128))])}}},lt=ye("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)},__groups:{$each:y.forEach({__users:{required:y.withMessage("Поле не должен быть пустым",h)},__tags:{required:y.withMessage("Поле не должен быть пустым",h)},__regions:{required:y.withMessage("Поле не должен быть пустым",h)},__start_date:{required:y.withMessage("Поле не должен быть пустым",h)},__end_date:{required:y.withMessage("Поле не должен быть пустым",h)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:y.forEach({users:{required:y.withMessage("Поле не должен быть пустым",h)},text:{required:y.withMessage("Поле не должен быть пустым",h)}})}},booking_model:{bookings:[{type:ue,route:Ke,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:y.forEach({segments:{$each:y.forEach({departure_city:{required:y.withMessage("Поле не должен быть пустым",h)},arrival_city:{required:y.withMessage("Поле не должен быть пустым",h)},date:{required:y.withMessage("Поле не должен быть пустым",h)},time:{required:y.withMessage("Поле не должен быть пустым",h)},segment_class:{required:y.withMessage("Поле не должен быть пустым",h)}})},passengers:{required:y.withMessage("Поле не должен быть пустым",h)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Et,active:!0,value:et},{id:2,label:"work-plan",icon:Ct,active:!1,value:tt},{id:3,label:"route",icon:St,active:!1,value:it}],routeTabItems:[{id:1,title:"airplane",icon:dt,value:Ke},{id:2,title:"train",icon:ct,value:Qt},{id:3,title:"taxi",icon:ut,value:Xt}],routeTypeTabItems:[{id:1,title:"there-back",icon:dt,value:ue},{id:2,title:"complex-route",icon:ct,value:at},{id:3,title:"one-way",icon:ut,value:Zt}]}),actions:{async actionCreateDocument(d){const r=_t(d);this.buttonLoading=!0;const{response:l,error:t}=await Ve(Ue,r);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:d,body:r}){const l=await _t(r);try{this.buttonLoading=!0;const{data:t}=await $e({id:d,body:l});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ie(d);_e(this.model,r),this.model.__curator=await ge([],r.curator.id,!1),this.model.__signers=await A(r.signers),this.model.__approvers=await A(r.approvers);const l=Object.values(r.notices.reduce((t,p)=>{const s=p.group_id;return t[s]=t[s]||{group_id:s,items:[]},t[s].items.push(p),t},{}));this.model.__groups=await Promise.all(l.map(async t=>{const p=await Promise.all(t.items.map(q=>A([],q.user.id,!1))),s=await rt(t.items[0].tags),o=await Je("regions",t.items[0].locations),m=t.items[0].start_date,a=t.items[0].end_date;return{__users:p,__tags:s,__regions:o,__start_date:m,__end_date:a}})),this.trip_plan_model.trip_plans=await Promise.all(r.trip_plans.map(async(t,p)=>({...t,users:await A(t.users)}))),this.booking_model.bookings=await Promise.all(r.bookings.map(async t=>({type:t.type,route:t.route,segments:await Promise.all(t.segments.map(async p=>({departure_city:await Je("regions",[],!1,p.departure_city.id),arrival_city:await Je("regions",[],!1,p.arrival_city.id),segment_class:await Qe.find(s=>s.value===p.segment_class),date:qe(p.departure_date),time:await Wt(p.departure_date,p.departure_end_date)}))),passengers:await A(t.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(d){this.model.__groups.splice(d,1)},async actionStepClick(d,r,l){await d.replace({query:{...r.query,step:l}}),this.stepperItems.forEach(p=>p.active=p.value===l),await yt();const t=document.querySelector(".document-view-aside");t&&t.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(d){this.trip_plan_model.trip_plans.splice(d,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:ue,route:Ke,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(d){this.booking_model.bookings.splice(d,1)},actionChangeRouteSegment(d,r){const l=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[r].segments=d===ue?[l(),l()]:[l()]},async actionAddRouteLine(d){this.booking_model.bookings[d].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(d,r){this.booking_model.bookings[d].segments.splice(r,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:ue,route:Ke,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]}}}}),Eo={class:"trip-info-components"},Co={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},So={class:"flex justify-between"},Lo={class:"text-base text-primary-900 font-semibold mb-1"},Ro=["onClick"],To={class:"flex w-full gap-x-4"},Do={class:"flex items-center justify-between"},ft={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},setup(d,{expose:r}){const l=ae(),t=re(),p=lt(),{t:s}=J(),o=te(p.rules,p.model),m=W(!1),a=()=>{p.model.__files=[],files.forEach(U=>{p.model.__files.push(U)})},q=()=>{p.actionAddGroupBlock()},k=async U=>{await p.actionStepClick(t,l,U)};return r({stepClick:k}),(U,w)=>{const C=ce,I=Me,j=pe,E=vt,_=Ye,$=de,u=Ge;return v(),L("div",Eo,[n($,null,{default:c(()=>[n(C,{"col-class":"w-1/2"},{default:c(()=>[n(we,{modelValue:e(o).__curator.$model,"onUpdate:modelValue":w[0]||(w[0]=i=>e(o).__curator.$model=i),error:e(o).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(C,{"col-class":"w-1/2"},{default:c(()=>[n(I,{modelValue:e(o).short_description.$model,"onUpdate:modelValue":w[1]||(w[1]=i=>e(o).short_description.$model=i),error:e(o).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(C,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:c(()=>[(v(!0),L(oe,null,Ae(e(p).model.__groups,(i,g)=>(v(),L("div",Co,[N("div",So,[N("span",Lo,Z(e(s)("group"))+"-"+Z(g+1),1),g!==0?(v(),L("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:f=>e(p).actionDeleteGroupBlock(g)},[n(j,{icon:e(Xe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Ro)):Re("",!0)]),n($,null,{default:c(()=>[n(C,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:i.__users,"onUpdate:modelValue":f=>i.__users=f,error:e(o).__groups.$each.$response.$data[g].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),n(C,{"col-class":"w-1/2"},{default:c(()=>[n(E,{modelValue:i.__regions,"onUpdate:modelValue":f=>i.__regions=f,error:e(o).__groups.$each.$response.$data[g].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":m.value},{chip:c(({value:f})=>[nt(Z(f.name),1)]),option:c(({value:f})=>[n(e(Ne),{title:f.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),n(C,{"col-class":"w-1/2"},{default:c(()=>[n(E,{modelValue:i.__tags,"onUpdate:modelValue":f=>i.__tags=f,error:e(o).__groups.$each.$response.$data[g].__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":m.value},{chip:c(({value:f})=>[nt(Z(f.name),1)]),option:c(({value:f})=>[n(e(Ne),{title:f.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),n(C,{"col-class":"w-1/2"},{default:c(()=>[N("div",To,[n(_,{modelValue:i.__start_date,"onUpdate:modelValue":[f=>i.__start_date=f,f=>i.__start_date=e(qe)(f)],error:e(o).__groups.$each.$response.$data[g].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),n(_,{modelValue:i.__end_date,"onUpdate:modelValue":[f=>i.__end_date=f,f=>i.__end_date=e(qe)(f)],error:e(o).__groups.$each.$response.$data[g].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),n(u,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Ze),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:q},null,8,["icon-left"])]),_:1}),n(C,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(p).model.__approvers,"onUpdate:modelValue":w[2]||(w[2]=i=>e(p).model.__approvers=i),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(C,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:e(o).__signers.$model,"onUpdate:modelValue":w[3]||(w[3]=i=>e(o).__signers.$model=i),error:e(o).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(C,{"col-class":"w-full"},{default:c(()=>[n(De,{modelValue:e(o).content.$model,"onUpdate:modelValue":w[4]||(w[4]=i=>e(o).content.$model=i),error:e(o).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(p).model.__files,"onEmit:fileUpload":a},null,8,["modelValue","error","files"])]),_:1})]),_:1}),N("div",Do,[n(u,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),n(u,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[5]||(w[5]=i=>k(e(tt)))})])])}}},Oo={class:"work-plan-component"},Po={class:"flex flex-col gap-y-3"},No={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Io={class:"flex justify-between"},Ao={class:"text-base text-primary-900 font-semibold mb-1"},Mo=["onClick"],Fo={class:"flex items-center justify-between mt-10"},jo={class:"flex items-center gap-x-1"},zo={__name:"WorkPlan",setup(d,{expose:r}){const{t:l}=J(),t=ae(),p=re(),s=lt(),o=te(s.trip_plan_rules,s.trip_plan_model),m=W(!1),a=me(()=>{const U=new Set;return s.model.__groups.reduce((w,C)=>C.__users&&Array.isArray(C.__users)?w.concat(C.__users):w,[]).filter(w=>U.has(w.id)?!1:(U.add(w.id),!0))}),q=async U=>{await s.actionStepClick(p,t,U)},k=()=>{s.actionAddWorkPlanRow(),m.value=!1};return r({stepClick:q}),(U,w)=>{const C=pe,I=eo,j=ce,E=de,_=Ge;return v(),L("div",Oo,[N("div",Po,[(v(!0),L(oe,null,Ae(e(s).trip_plan_model.trip_plans,($,u)=>(v(),L("div",No,[N("div",Io,[N("span",Ao,Z(e(l)("plan"))+"-"+Z(u+1),1),u!==0?(v(),L("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:i=>e(s).actionDeleteWorkPlanRow(u)},[n(C,{icon:e(Xe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Mo)):Re("",!0)]),n(E,null,{default:c(()=>[n(j,{"col-class":"w-1/2"},{default:c(()=>[n(I,{modelValue:$.text,"onUpdate:modelValue":i=>$.text=i,error:e(o).trip_plans.$each.$response.$data[u].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),n(j,{"col-class":"w-1/2"},{default:c(()=>[n(z,{modelValue:$.users,"onUpdate:modelValue":i=>$.users=i,options:a.value,error:e(o).trip_plans.$each.$response.$data[u].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),n(_,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Ze),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:k},null,8,["icon-left"]),N("div",Fo,[n(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),N("div",jo,[n(_,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[0]||(w[0]=$=>q(e(et)))}),n(_,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[1]||(w[1]=$=>q(e(it)))})])])])}}},Bo=["onClick"],bt={__name:"BaseBrickRadio",props:{modelValue:{type:[Number,String]},items:{type:Array,default:()=>[]}},emits:["emit:onChange","update:modelValue"],setup(d,{emit:r}){const l=d,{t}=J(),p=ze(l,"modelValue"),s=W({}),o=W(null),m=()=>{yt(()=>{if(o.value){const q=o.value.querySelector(".tab-active");q&&(s.value={width:`${q.offsetWidth}px`,transform:`translateX(${q.offsetLeft}px)`,transition:"transform 0.3s ease, width 0.3s ease"})}})},a=q=>{p.value=q.value,r("emit:onChange",q)};return wt(()=>l.items,()=>{m()},{deep:!0}),Be(()=>{m()}),(q,k)=>{const U=pe;return v(),L("div",{ref_key:"rootRef",ref:o,class:"relative flex items-center bg-greyscale-50 p-[2px] rounded-full w-fit select-none"},[N("div",{class:"absolute bg-white rounded-[90px] shadow-button h-8 transition-all",style:Lt(s.value)},null,4),(v(!0),L(oe,null,Ae(l.items,(w,C)=>(v(),L("div",{key:w.id,class:be(["tab flex rounded-[90px] h-8 items-center px-4 gap-x-2 cursor-pointer relative z-10",{"tab-active":e(p)===w.value}]),onClick:I=>a(w)},[w.icon?(v(),Y(U,{key:0,icon:w.icon,class:be(["!w-[18px] !h-[18px]",e(p)===w.value?"text-primary-500":"text-greyscale-400"])},null,8,["icon","class"])):Re("",!0),N("span",{class:be(["text-sm font-semibold",e(p)===w.value?"text-greyscale-900":"text-greyscale-500"])},Z(e(t)(w.title)),3)],10,Bo))),128))],512)}}};const Go={class:"base-time-picker"},Wo={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(d){const r=d,l=ze(r,"modelValue"),{t}=J();return(p,s)=>{var a;const o=ao,m=pe;return v(),L("div",Go,[n(o,{label:r.label,required:r.required},null,8,["label","required"]),n(e(so),{modelValue:e(l),"onUpdate:modelValue":s[0]||(s[0]=q=>Ie(l)?l.value=q:null),"time-picker":"",range:d.range,"cancel-text":e(t)("cancel"),"select-text":e(t)("select"),placeholder:e(t)(d.placeholder),ref:"datePicker",class:be({"input-error":((a=d.error)==null?void 0:a.$error)&&d.showNestedError})},{"input-icon":c(()=>[n(m,{icon:e(Rt),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Yo={class:"route-component flex flex-col gap-y-3"},Ho={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Ko={class:"flex items-center justify-between"},Jo={class:"flex items-center gap-x-4"},Qo={class:"text-base text-primary-900 font-semibold mb-1"},Xo={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},Zo={class:"text-xs text-greyscale-900 font-medium"},el=["onClick"],tl=["onClick"],ol={class:"text-sm text-primary-500 font-semibold"},ll={class:"flex items-center justify-between mt-10"},nl={class:"flex items-center gap-x-1"},rl={__name:"Route",props:{formType:{type:String,default:O}},setup(d,{expose:r}){const l=d,{t}=J(),p=ae(),s=re(),o=lt(),m=Fe(),a=le(),q=xe(),k=te(o.booking_model_rules,o.booking_model),U=te(o.rules,o.model),w=te(o.trip_plan_rules,o.trip_plan_model),C=W(!1),I=W(!1),j=me(()=>{const V=new Set;return o.model.__groups.reduce((b,B)=>B.__users&&Array.isArray(B.__users)?b.concat(B.__users):b,[]).filter(b=>V.has(b.id)?!1:(V.add(b.id),!0))}),E=V=>{o.routeTabItems.forEach(b=>b.active=b.id===V.id)},_=(V,b)=>{o.routeTypeTabItems.forEach(B=>B.active=B.id===V.id),o.actionChangeRouteSegment(V.value,b)},$=async V=>{await o.actionStepClick(s,p,V)},u=()=>{o.actionAddRouteRow(),I.value=!1},i=(V,b,B,H)=>{H.type===ue&&(o.booking_model.bookings[b].segments[B+1].arrival_city=V)},g=(V,b,B,H)=>{H.type===ue&&(o.booking_model.bookings[b].segments[B+1].departure_city=V)},f=async()=>{var H,Le,fe,se,F,G;const V=await k.value.$validate();I.value=!0;const b=await U.value.$validate(),B=await w.value.$validate();if(!V){D(null,t("fill-required-fields"),T.WARNING);return}if(!b){D(null,`${t("trip-info")} - ${t("fill-required-fields")}`,T.WARNING);return}if(!B){D(null,`${t("work-plan")} - ${t("fill-required-fields")}`,T.WARNING);return}o.model.approvers=[],o.model.signers=[],o.model.notices=[],o.model.bookings=[],o.model.trip_plans=[],o.model.approvers=ee(o.model.__approvers),o.model.signers=ee(o.model.__signers),o.model.curator=(Le=(H=o.model)==null?void 0:H.__curator)==null?void 0:Le.user_id,o.model.journal=ne.INNER,o.model.company=(se=(fe=a.currentUser)==null?void 0:fe.company)==null?void 0:se.id,o.model.__groups.forEach((x,P)=>{const R=P+1;o.model.notices.push(...x.__users.map(He=>({start_date:x.__start_date,end_date:x.__end_date,user:He.id,regions:x.__regions.map(Pe=>Pe.id),tags:x.__tags.map(Pe=>({id:Pe.id})),group_id:R})))}),o.model.sender=(G=(F=a==null?void 0:a.currentUser)==null?void 0:F.top_level_department)==null?void 0:G.id,o.model.files=o.model.__files.map(x=>({id:x.id})),o.model.document_type=p.params.document_type,o.model.document_sub_type=p.params.document_sub_type,o.model.bookings=o.booking_model.bookings.map(x=>({...x,segments:x.segments.map(P=>({departure_city:P.departure_city.id,arrival_city:P.arrival_city.id,departure_date:pt(P.date,P.time,0),departure_end_date:pt(P.date,P.time,1),segment_class:P.segment_class.value})),passengers:x.passengers.map(P=>({user:P.id}))})),o.model.trip_plans=o.trip_plan_model.trip_plans.map(x=>({users:x.users.map(P=>({id:P.id})),text:x.text})),C.value=!0},S=async()=>{await o.actionCreateDocument(o.model)?(C.value=!1,D(null,t("document-sent"),T.SUCCESS),await s.replace({name:Ee,query:{document_type:p.query.document_type}})):D(null,t("error-occurred"),T.ERROR)},M=async()=>{try{await o.actionUpdateDocument({id:p.params.id,body:o.model}),await q.actionCountList(),D(null,t("changed"),T.SUCCESS),await s.replace({name:Ce,params:{id:p.params.id,document_type:p.params.document_type,document_sub_type:p.params.document_sub_type}})}catch{}},Q=()=>{l.formType===O?S():M()};return r({stepClick:$}),(V,b)=>{const B=ot,H=ce,Le=Ye,fe=de,se=Ge;return v(),L("div",Yo,[(v(!0),L(oe,null,Ae(e(o).booking_model.bookings,(F,G)=>(v(),L("div",Ho,[N("div",Ko,[N("div",Jo,[N("span",Qo,Z(e(t)("route"))+"-"+Z(G+1),1),n(bt,{modelValue:F.route,"onUpdate:modelValue":x=>F.route=x,items:e(o).routeTabItems,"onEmit:onChange":b[0]||(b[0]=x=>E(x))},null,8,["modelValue","onUpdate:modelValue","items"]),n(bt,{modelValue:F.type,"onUpdate:modelValue":x=>F.type=x,items:e(o).routeTypeTabItems,"onEmit:onChange":x=>_(x,G)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),G!==0?(v(),L("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:b[1]||(b[1]=(...x)=>e(o).actionDeleteRouteRow&&e(o).actionDeleteRouteRow(...x))},[n(pe,{icon:e(Xe),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):Re("",!0)]),N("div",Xo,[n(pe,{icon:e(Tt),class:"text-warning-500"},null,8,["icon"]),N("span",Zo,Z(e(t)("route-warning")),1)]),(v(!0),L(oe,null,Ae(F.segments,(x,P)=>(v(),L("div",null,[n(fe,null,{default:c(()=>[n(H,{"col-class":"w-1/5"},{default:c(()=>[n(B,{modelValue:x.departure_city,"onUpdate:modelValue":R=>x.departure_city=R,error:e(k).bookings.$each.$response.$data[G].segments.$each.$data[P].departure_city,options:e(m).regionsList,"onUpdate:options":b[2]||(b[2]=R=>e(m).regionsList=R),required:"",searchable:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":I.value,disabled:F.type===e(ue)&&P%2!==0,"onEmit:change":R=>i(R,G,P,F)},{option:c(({option:R})=>[n(e(Ne),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),n(H,{"col-class":"w-1/5"},{default:c(()=>[n(B,{modelValue:x.arrival_city,"onUpdate:modelValue":R=>x.arrival_city=R,error:e(k).bookings.$each.$response.$data[G].segments.$each.$data[P].arrival_city,options:e(m).regionsList,"onUpdate:options":b[3]||(b[3]=R=>e(m).regionsList=R),required:"",searchable:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":I.value,disabled:F.type===e(ue)&&P%2!==0,"onEmit:change":R=>g(R,G,P,F)},{option:c(({option:R})=>[n(e(Ne),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),n(H,{"col-class":"w-1/5"},{default:c(()=>[n(B,{modelValue:x.segment_class,"onUpdate:modelValue":R=>x.segment_class=R,error:e(k).bookings.$each.$response.$data[G].segments.$each.$data[P].segment_class,options:e(Qe),"onUpdate:options":b[4]||(b[4]=R=>Ie(Qe)?Qe.value=R:null),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":I.value,translatable:""},{option:c(({option:R})=>[n(e(Ne),{title:R.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error"])]),_:2},1024),n(H,{"col-class":"w-1/5"},{default:c(()=>[n(Le,{modelValue:x.date,"onUpdate:modelValue":[R=>x.date=R,R=>x.date=e(qe)(R)],error:e(k).bookings.$each.$response.$data[G].segments.$each.$data[P].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":I.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),n(H,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:c(()=>[n(Wo,{modelValue:x.time,"onUpdate:modelValue":R=>x.time=R,error:e(k).bookings.$each.$response.$data[G].segments.$each.$data[P].time,label:"time",required:"",range:"","show-nested-error":I.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),F.type===e(at)&&P!==0?(v(),L("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:R=>e(o).actionDeleteRouteLine(G,P)},[n(pe,{icon:e(Xe),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,el)):Re("",!0)]),_:2},1024)]),_:2},1024)]))),256)),F.type===e(at)?(v(),L("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:x=>e(o).actionAddRouteLine(G)},[n(pe,{icon:e(Ze),class:"text-primary-500"},null,8,["icon"]),N("span",ol,Z(e(t)("add-line")),1)],8,tl)):Re("",!0),n(fe,null,{default:c(()=>[n(H,{"col-class":"w-full"},{default:c(()=>[n(z,{modelValue:F.passengers,"onUpdate:modelValue":x=>F.passengers=x,options:j.value,error:e(k).bookings.$each.$response.$data[G].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":I.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),n(se,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Ze),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:u},null,8,["icon-left"]),N("div",ll,[n(se,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),N("div",nl,[n(se,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:b[5]||(b[5]=F=>$(e(tt)))}),n(se,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:f})])]),n(Se,{modelValue:C.value,"onUpdate:modelValue":b[6]||(b[6]=F=>C.value=F),"send-button-loading":e(o).buttonLoading,"onEmit:send":Q},{content:c(()=>[n(e(Yt),{"compose-model":{...e(o).model,bookings:e(o).booking_model.bookings,trip_plans:e(o).trip_plan_model.trip_plans},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},al={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},sl={class:"px-6 py-4"},sn={__name:"BusinessTripForm",props:{formType:{type:String,default:O}},setup(d){const r=d;J();const l=ae(),t=re();le();const p=lt();te(p.rules,p.model);const s=W(null),o=me(()=>r.formType===O?"create-business-trip-notice":"update-business-trip-notice"),m=me(()=>{switch(l.query.step){case et:return ft;case tt:return zo;case it:return rl;default:return ft}}),a=async k=>{var w;const U=e(s);((w=l.query)==null?void 0:w.step)!==k.value&&await U.stepClick(k.value)},q=async()=>{l.query.step||await t.replace({query:{...l.query,step:et}}),p.stepperItems.forEach(k=>k.active=k.value===l.query.step)};return We(async()=>{await q(),r.formType===st&&await p.actionGetDocumentDetailForUpdate(l.params.id)}),he(()=>{p.actionResetBTModel()}),(k,U)=>{const w=ve,C=Uo;return v(),L("div",{class:be(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(p).detailLoading}])},[e(p).detailLoading?(v(),Y(w,{key:0})):(v(),Y(e(ke),{key:1,title:o.value},{content:c(()=>[N("div",al,[n(C,{items:e(p).stepperItems,"onEmit:stepClick":a},null,8,["items"])]),N("div",sl,[(v(),Y(Dt(m.value),{"form-type":d.formType,ref_key:"childComponent",ref:s},null,8,["form-type"]))])]),_:1},8,["title"]))],2)}}};export{tn as _,on as a,an as b,en as c,ln as d,nn as e,rn as f,sn as g};
