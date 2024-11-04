import{_ as G}from"./BaseRow-b168384b.js";import{_ as H}from"./BaseCol-95070072.js";import{_ as _e}from"./BaseInput-3ccd6207.js";import{L as I,bY as ve,ah as we,o as V,k as A,p as n,w as d,q as e,bb as ye,B as De,cO as Re,cG as Te,g as z,i as ue,z as Oe,j as Ve,_ as Ue,b0 as Y,b$ as S,c0 as C,bz as F,t as B,A as Ee,u as Q,aw as J,ck as K,F as W,ax as U,al as X,cH as qe,x as Ne,aE as Pe,cd as ke,ai as ze,cP as Ie}from"./index-47fa1075.js";import{c as h,r as v,u as Z}from"./index-71c0b836.js";import{_ as Fe,a as Me}from"./BranchMultiSelect-11077cc3.js";import{_ as ee,b as je,a as Ae,g as Be,h as Ge,c as He,d as Ye,e as Qe,f as Je}from"./DecreeTemplate-8ff14af6.js";import"./BaseTabMenu-06d02cb7.js";import"./dialog.esm-bb103ad0.js";import"./tabpanel.esm-ea84f9a9.js";import{s as le,M as $,P as Ke,Q as oe,R as M,S as fe,T as We,U as Xe}from"./index-03eccada.js";import"./BaseTabView-59e07906.js";import"./FileTabs-8f796a7e.js";import{_ as L}from"./UserMultiSelect-eba319c8.js";import{c as Ze,u as j,w as ne,d as E}from"./axios.config-fd19323a.js";import{u as be,d as te}from"./common-7d672e7d.js";import{f as re,a as ae,b as ie}from"./index.store-81f76a3f.js";import{d as xe,e as se,c as de}from"./index-c4c1f2d4.js";import{F as k}from"./constants-5c471c97.js";import{_ as Se}from"./BaseDropdown-1e9f99b5.js";import{_ as $e}from"./BaseCalendar-8a8d8215.js";import{_ as el}from"./WithLabel-768cc493.js";import{f as he}from"./formatDate-03bd7722.js";import"./qrcode.vue.esm-114bb829.js";import"./Dropdown-6b68dc58.js";import"./menu.esm-0045cd3b.js";/* empty css                                                 */import"./avatar.esm-78ff6980.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-dcafd5ce.js";import{_ as ll}from"./WithRadio-0828b7ae.js";import"./radiobutton.esm-56f607e6.js";import"./checkbox.esm-4ddfdfe9.js";import"./dayjs.min-6ab09053.js";import{_ as ol}from"./WithSelectable-b8a559f5.js";import{_ as nl}from"./BaseBrickTab-2eafc0a3.js";import{_ as tl}from"./BaseFileUpload-3b16640f.js";import{_ as rl}from"./BaseFroalaEditor-93c5d3a8.js";import{_ as al}from"./BaseDialog-c82117ea.js";const il={class:"user-select"},ge={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(p,{emit:a}){const o=p,l=I([]),y=ve(o,"modelValue"),_=async t=>{let{data:u}=await Ze.get(`${o.apiUrl}/`,t);u.hasOwnProperty("results")?l.value=u.results:l.value=u};return we(async()=>{await _(o.apiParams)}),(t,u)=>(V(),A("div",il,[n(Se,{modelValue:e(y),"onUpdate:modelValue":u[0]||(u[0]=i=>ye(y)?y.value=i:null),options:l.value,"onUpdate:options":u[1]||(u[1]=i=>l.value=i),error:o.error,"api-url":o.apiUrl,"api-params":o.apiParams,"option-label":"full_name",label:o.label,placeholder:o.placeholder,required:o.required,searchable:""},{option:d(({option:i})=>[n(e(ol),{items:[i]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var sl=`
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
`,dl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};De.extend({name:"editor",css:sl,classes:dl});(function(){try{return window.Quill}catch{return null}})();const ce={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]}},emits:["update:modelValue","emit:fileUpload"],setup(p,{emit:a}){const o=p,l=ve(o,"modelValue"),y=I([{title:"text",slot:"editor",icon:Re},{title:"file",slot:"file",icon:Te}]);return(_,t)=>(V(),z(nl,{"tab-panel-list":y.value,"panel-container-class":"px-0"},{editor:d(()=>[n(rl,{modelValue:e(l),"onUpdate:modelValue":t[0]||(t[0]=u=>ye(l)?l.value=u:null)},null,8,["modelValue"])]),file:d(()=>[ue("div",{class:Oe(o.fileUploadContainerClasses)},[n(tl,{files:o.files,"onEmit:fileUpload":t[1]||(t[1]=u=>a("emit:fileUpload",u))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},cl={class:"flex flex-col justify-between h-full"},pl={class:"px-6 py-4 overflow-y-auto"},ml={class:"actions p-6"},pe={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(p,{emit:a}){return(o,l)=>{const y=Ue;return V(),A("div",cl,[ue("div",pl,[Ve(o.$slots,"default")]),ue("div",ml,[n(y,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=_=>a("emit:clearForm"))}),n(y,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=_=>a("emit:preview"))})])])}}},ul=Y("sd-stores-inner",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=j().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,document_type:S.INNER,document_sub_type:C.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:F.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__departments:{required:h.withMessage("Поле не должен быть пустым",v)},__approvers:{},__signers:{required:h.withMessage("Поле не должен быть пустым",v)}}}},actions:{async actionCreateDocument(p){let a={...p,type:xe,sub_type:xe};this.buttonLoading=!0;const{response:o,error:l}=await ne(ie,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):Promise.reject(l)},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await re({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await ae(p);le(this.model,a),this.model.__approvers=await $(a.approvers),this.model.__signers=await $(a.signers),this.model.__departments=await Ke(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),ql={class:"font-semibold text-xl"},me={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(p,{emit:a}){const l=ve(p,"modelValue"),{t:y}=B();return(_,t)=>{const u=Ue,i=al;return V(),z(i,{modelValue:e(l),"onUpdate:modelValue":t[1]||(t[1]=s=>ye(l)?l.value=s:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[ue("span",ql,Ee(e(y)("preview")),1)]),content:d(()=>[Ve(_.$slots,"content")]),footer:d(()=>[n(u,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),n(u,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:p.sendButtonLoading,onClick:t[0]||(t[0]=s=>a("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},ao={__name:"InnerForm",props:{formType:{type:String,default:k}},setup(p){const a=p,o=j(),l=ul();be();const y=te(),_=I(!1);I(null);const{t}=B(),u=Q(),i=J(),s=Z(l.rules,l.model),D=async()=>{await s.value.$validate()&&(_.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(r=>r.id),l.model.files=[],l.model.files=l.model.__files.map(r=>({id:r.id})),l.model.journal=F.INNER,l.model.sender=o.currentUser.top_level_department.id,l.model.approvers=M(l.model.__approvers),l.model.signers=M(l.model.__signers),l.model.document_type=i.params.document_type,l.model.document_sub_type=i.params.document_sub_type)},R=()=>{a.formType===k?T():O()},T=async()=>{const g=await l.actionCreateDocument(l.model);await y.actionDocumentCountList(),g?(_.value=!1,E(null,t("document-sent"),U.SUCCESS),await u.replace({name:se,query:{document_type:S.INNER}})):E(null,t("error-occurred"),U.ERROR)},O=async()=>{await l.actionUpdateDocument({id:i.params.id,body:l.model}),await y.actionDocumentCountList(),E(null,t("document-sent"),U.SUCCESS),await u.replace({name:de,params:{id:i.params.id,document_type:S.INNER,document_sub_type:C.SERVICE_LETTER}})},N=()=>{console.log("Clear Form")},P=g=>{l.model.__files=[],g.forEach(r=>{l.model.__files.push(r)})};return we(async()=>{i.params.id&&await l.actionGetDocumentDetailForUpdate(i.params.id)}),K(()=>{oe(l.model)}),(g,r)=>{const c=X,q=_e,f=H,b=G;return e(l).detailLoading?(V(),z(c,{key:0})):(V(),A(W,{key:1},[n(e(ee),{title:a.formType===e(k)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[n(pe,{"onEmit:preview":D,"onEmit:clearForm":N},{default:d(()=>[n(b,null,{default:d(()=>[n(f,{"col-class":"w-1/2"},{default:d(()=>[n(q,{modelValue:e(s).register_number.$model,"onUpdate:modelValue":r[0]||(r[0]=m=>e(s).register_number.$model=m),error:e(s).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(Fe,{modelValue:e(s).__departments.$model,"onUpdate:modelValue":r[1]||(r[1]=m=>e(s).__departments.$model=m),error:e(s).__departments},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(q,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":r[2]||(r[2]=m=>e(s).short_description.$model=m),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__approvers.$model,"onUpdate:modelValue":r[3]||(r[3]=m=>e(s).__approvers.$model=m),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":r[4]||(r[4]=m=>e(s).__signers.$model=m),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":r[5]||(r[5]=m=>e(s).content.$model=m),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":P},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:_.value,"onUpdate:modelValue":r[6]||(r[6]=m=>_.value=m),"send-button-loading":e(l).buttonLoading,"onEmit:send":R},{content:d(()=>{var m,x;return[n(je,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(x=(m=e(o).currentUser)==null?void 0:m.top_level_department)==null?void 0:x.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},_l=Y("sd-store-application",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=j().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__approvers:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{}}}},actions:{async actionCreateDocument(p){let a={...p};this.buttonLoading=!0;const{response:o,error:l}=await ne(ie,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await re({id:p,body:a});return Promise.resolve(o)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await ae(p);le(this.model,a),this.model.__approvers=await $(a.approvers),this.model.__signers=await $(a.signers.filter(o=>o.type===qe.SIGNER)),this.model.__curator=await fe([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Le=Y("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:j().currentUser.company.id,curator:null,document_type:S.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:F.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",v)},register_date:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__negotiators:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await ne(ie,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await re({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await ae(p);le(this.model,a),this.model.__signers=await $(a.signers.filter(o=>o.type!==qe.NEGOTIATOR)),this.model.__negotiators=await $(a.signers.filter(o=>o.type===qe.NEGOTIATOR)),this.model.__approvers=await $(a.approvers),this.model.__curator=await fe([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),io={__name:"ApplicationForm",props:{formType:{type:String,default:k}},setup(p){const a=p,o=j(),l=_l();be();const y=te();Le();const _=I(!1);I(null);const{t}=B(),u=Q(),i=J(),s=Z(l.rules,l.model),D=async()=>{var r,c,q,f,b;await s.value.$validate()&&(_.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(r=o==null?void 0:o.currentUser)==null?void 0:r.id}],l.model.sender=(q=(c=o==null?void 0:o.currentUser)==null?void 0:c.top_level_department)==null?void 0:q.id,l.model.curator=(b=(f=l==null?void 0:l.model)==null?void 0:f.__curator)==null?void 0:b.user_id,l.model.journal=F.APPLICATION,l.model.document_type=i.params.document_type,l.model.document_sub_type=i.params.document_sub_type,l.model.approvers=M(l.model.__approvers))},R=async()=>{},T=()=>{a.formType===k?O():N()},O=async()=>{const g=await l.actionCreateDocument(l.model);await y.actionDocumentCountList(),g?(_.value=!1,E(null,t("document-sent"),U.SUCCESS),await u.replace({name:se,query:{document_type:S.APPLICATION}})):E(null,t("error-occurred"),U.ERROR)},N=async()=>{await l.actionUpdateDocument({id:i.params.id,body:l.model}),await y.actionDocumentCountList(),E(null,t("document-sent"),U.SUCCESS),await u.replace({name:de,params:{id:i.params.id,document_type:S.APPLICATION,document_sub_type:C.LABOR_LEAVE}})},P=g=>{l.model.__files=[],g.forEach(r=>{l.model.__files.push(r)})};return we(async()=>{i.params.id&&await l.actionGetDocumentDetailForUpdate(i.params.id)}),K(()=>{oe(l.model)}),(g,r)=>{const c=X,q=H,f=G;return e(l).detailLoading?(V(),z(c,{key:0})):(V(),A(W,{key:1},[n(e(ee),{title:a.formType===e(k)?"create-sd-application":"update-sd-application"},{content:d(()=>[n(pe,{"onEmit:preview":D,"onEmit:clearForm":R},{default:d(()=>[n(f,null,{default:d(()=>[n(q,{"col-class":"w-1/2"},{default:d(()=>[n(ge,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=b=>e(s).__curator.$model=b),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(i).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__approvers.$model,"onUpdate:modelValue":r[1]||(r[1]=b=>e(s).__approvers.$model=b),error:e(s).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":r[2]||(r[2]=b=>e(s).__signers.$model=b),disabled:"",label:"signers",placeholder:e(o).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),n(q,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":r[3]||(r[3]=b=>e(s).content.$model=b),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":P},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:_.value,"onUpdate:modelValue":r[4]||(r[4]=b=>_.value=b),"send-button-loading":e(l).buttonLoading,"onEmit:send":T},{content:d(()=>[n(Ae,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:a.formType===e(k)?e(o).currentUser:e(l).model.__signers[0].user,signers:a.formType===e(k)?[e(o).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},fl=Y("sd-notice-store",{state:()=>(j(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:S.NOTICE,document_sub_type:C.BUSINESS_TRIP,journal:F.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:h.withMessage("Поле не должен быть пустым",v)},start_date:{required:h.withMessage("Поле не должен быть пустым",v)},route:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__companies:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__employees:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},__tags:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await ne(ie,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await re({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await ae(p);le(this.model,a),this.model.__companies=[],this.model.__curator=await fe([],a.curator.id,!1),this.model.__employees=await $(a.notices),this.model.__approvers=await $(a.approvers),this.model.__signers=await $(a.signers),this.model.__companies=await We(a.notices[0].destinations),this.model.__tags=await Xe(a.tags),this.model.start_date=a.notices[0].start_date,this.model.end_date=a.notices[0].end_date,this.model.__tags=a.tags,this.model.route=a.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),bl={class:"flex w-full gap-x-4"},so={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:k}},setup(p){const a=p,{t:o}=B(),l=J(),y=Q(),_=j(),t=fl(),u=te();be();const i=Z(t.rules,t.model),s=I(!1),D=Ne(()=>{const r=a.formType===k,c=l.params.document_sub_type;return c===C.BUSINESS_TRIP_DECREE_LOCAL?r?"create-decree":"update-decree":c===C.BUSINESS_TRIP_ORDER_LOCAL?r?"create-order":"update-order":r?"create-business-trip-notice":"update-business-trip-notice"});Pe(()=>t.model.__tags,r=>{if(a.formType===k)if(r&&r.length){let c=`${r.map(q=>q.name_uz).join(", ")} yuzasidan`;t.model.short_description=c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()}else t.model.short_description=null});const R=async()=>{var c,q,f,b;await i.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.approvers=M(t.model.__approvers),t.model.signers=M(t.model.__signers),t.model.curator=(q=(c=t==null?void 0:t.model)==null?void 0:c.__curator)==null?void 0:q.user_id,t.model.journal=l.params.document_type===S.DECREE||l.params.document_type===S.ORDER?F.ORDERS_PROTOCOLS:F.INNER,t.model.company=_.currentUser.company.id,t.model.notices=t.model.__employees.map(m=>({start_date:t.model.start_date,end_date:t.model.end_date,user:m.id,route:t.model.route,companies:t.model.__companies.map(x=>x.id)})),t.model.sender=(b=(f=_==null?void 0:_.currentUser)==null?void 0:f.top_level_department)==null?void 0:b.id,t.model.tags=t.model.__tags.map(m=>({id:m.id})),t.model.files=t.model.__files.map(m=>({id:m.id})),t.model.document_type=l.params.document_type,t.model.document_sub_type=l.params.document_sub_type,s.value=!0)},T=()=>{},O=r=>{t.model.__files=[],r.forEach(c=>{t.model.__files.push(c)})},N=async()=>{const r=await t.actionCreateDocument(t.model);await u.actionDocumentCountList(),r?(s.value=!1,E(null,o("document-sent"),U.SUCCESS),await y.replace({name:se,query:{document_type:l.params.document_sub_type===C.BUSINESS_TRIP_DECREE_LOCAL?S.DECREE:l.params.document_sub_type===C.BUSINESS_TRIP_ORDER_LOCAL?S.ORDER:S.NOTICE}})):E(null,o("error-occurred"),U.ERROR)},P=async()=>{await t.actionUpdateDocument({id:l.params.id,body:t.model}),await u.actionDocumentCountList(),E(null,o("changed"),U.SUCCESS),await y.replace({name:de,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},g=()=>{a.formType===k?N():P()};return ke(async()=>{var r,c;l.params.id?await t.actionGetDocumentDetailForUpdate(l.params.id):l.params.document_sub_type===C.BUSINESS_TRIP_DECREE_LOCAL&&((r=l==null?void 0:l.query)!=null&&r.compose_id)&&((c=l==null?void 0:l.query)==null?void 0:c.document_sub_type)===C.BUSINESS_TRIP&&await t.actionGetDocumentDetailForUpdate(l.query.compose_id)}),K(()=>{oe(t.model)}),(r,c)=>{const q=X,f=H,b=$e,m=Se,x=_e,Ce=G;return e(t).detailLoading?(V(),z(q,{key:0})):(V(),A(W,{key:1},[n(e(ee),{title:D.value},{content:d(()=>[n(pe,{"onEmit:preview":R,"onEmit:clearForm":T},{default:d(()=>[n(Ce,null,{default:d(()=>[n(f,{"col-class":"w-1/2"},{default:d(()=>[n(ge,{modelValue:e(i).__curator.$model,"onUpdate:modelValue":c[0]||(c[0]=w=>e(i).__curator.$model=w),error:e(i).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(i).__employees.$model,"onUpdate:modelValue":c[1]||(c[1]=w=>e(i).__employees.$model=w),error:e(i).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(Me,{modelValue:e(i).__companies.$model,"onUpdate:modelValue":c[2]||(c[2]=w=>e(i).__companies.$model=w),error:e(i).__companies,"text-truncate":""},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(el,{modelValue:e(i).__tags.$model,"onUpdate:modelValue":c[3]||(c[3]=w=>e(i).__tags.$model=w),error:e(i).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:w})=>[ze(Ee(w.name),1)]),option:d(({value:w})=>[n(e(ll),{title:w.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[ue("div",bl,[n(b,{modelValue:e(i).start_date.$model,"onUpdate:modelValue":[c[4]||(c[4]=w=>e(i).start_date.$model=w),c[5]||(c[5]=w=>e(i).start_date.$model=e(he)(w))],error:e(i).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error","min-date"]),n(b,{modelValue:e(i).end_date.$model,"onUpdate:modelValue":[c[6]||(c[6]=w=>e(i).end_date.$model=w),c[7]||(c[7]=w=>e(i).end_date.$model=e(he)(w))],error:e(i).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error","min-date"])])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(m,{modelValue:e(i).route.$model,"onUpdate:modelValue":c[8]||(c[8]=w=>e(i).route.$model=w),error:e(i).route,options:e(Ie),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type"},null,8,["modelValue","error","options"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":c[9]||(c[9]=w=>e(t).model.__approvers=w),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(i).__signers.$model,"onUpdate:modelValue":c[10]||(c[10]=w=>e(i).__signers.$model=w),error:e(i).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(x,{modelValue:e(i).short_description.$model,"onUpdate:modelValue":c[11]||(c[11]=w=>e(i).short_description.$model=w),error:e(i).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(i).content.$model,"onUpdate:modelValue":c[12]||(c[12]=w=>e(i).content.$model=w),error:e(i).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:s.value,"onUpdate:modelValue":c[13]||(c[13]=w=>s.value=w),"send-button-loading":e(t).buttonLoading,"onEmit:send":g},{content:d(()=>[e(l).params.document_sub_type===e(C).BUSINESS_TRIP_DECREE_LOCAL?(V(),z(e(Be),{key:0,"compose-model":e(t).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(C).BUSINESS_TRIP_ORDER_LOCAL?(V(),z(e(Ge),{key:1,"compose-model":e(t).model,preview:!0},null,8,["compose-model"])):(V(),z(e(He),{key:2,"compose-model":e(t).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},co={__name:"OrderForm",props:{formType:{type:String,default:k}},setup(p){const a=p,o=Le(),l=te(),y=j(),_=J(),t=Q(),u=Z(o.rules,o.model),{t:i}=B(),s=I(!1),D=async()=>{var r,c,q,f;await u.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=M(o.model.__approvers),o.model.curator=(c=(r=o==null?void 0:o.model)==null?void 0:r.__curator)==null?void 0:c.user_id,o.model.sender=(f=(q=y==null?void 0:y.currentUser)==null?void 0:q.top_level_department)==null?void 0:f.id,o.model.files=o.model.__files.map(b=>({id:b.id})),o.model.document_type=_.params.document_type,o.model.document_sub_type=_.params.document_sub_type,o.model.journal=F.ORDERS_PROTOCOLS,o.model.register_date=he(o.model.register_date),o.model.__negotiators.forEach(b=>{o.model.signers.push(b.hasOwnProperty("user")?{id:b.id,user:b.user.id,type:qe.NEGOTIATOR}:{user:b.id,type:qe.NEGOTIATOR})}),_.query.compose_id&&(o.model.trip_notice_id=_.query.compose_id),s.value=!0)},R=()=>{},T=async()=>{try{const g=await o.actionCreateDocument(o.model);await l.actionDocumentCountList(),g&&(s.value=!1,E(null,i("document-sent"),U.SUCCESS),await t.replace({name:se,query:{document_type:S.ORDER}}))}catch{E(null,i("error-occurred"),U.ERROR)}},O=async()=>{try{const g=await o.actionUpdateDocument({id:_.params.id,body:o.model});await l.actionDocumentCountList(),E(null,i("changed"),U.SUCCESS),await t.replace({name:de,params:{id:_.params.id,document_type:_.params.document_type,document_sub_type:_.params.document_sub_type}})}catch{E(null,i("error-occurred"),U.ERROR)}},N=()=>{a.formType===k?T():O()},P=g=>{o.model.__files=[],g.forEach(r=>{o.model.__files.push(r)})};return we(async()=>{_.params.id&&await o.actionGetDocumentDetailForUpdate(_.params.id)}),K(()=>{oe(o.model)}),(g,r)=>{const c=X,q=H,f=_e,b=$e,m=G;return e(o).detailLoading?(V(),z(c,{key:0})):(V(),A(W,{key:1},[n(e(ee),{title:a.formType===e(k)?"create-order":"update-order"},{content:d(()=>[n(pe,{"onEmit:preview":D,"onEmit:clearForm":R},{default:d(()=>[n(m,null,{default:d(()=>[n(q,{"col-class":"w-1/2"},{default:d(()=>[n(ge,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=x=>e(u).__curator.$model=x),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(_).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(f,{modelValue:e(u).register_number.$model,"onUpdate:modelValue":r[1]||(r[1]=x=>e(u).register_number.$model=x),error:e(u).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(b,{modelValue:e(u).register_date.$model,"onUpdate:modelValue":r[2]||(r[2]=x=>e(u).register_date.$model=x),error:e(u).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":r[3]||(r[3]=x=>e(o).model.__approvers=x),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(u).__negotiators.$model,"onUpdate:modelValue":r[4]||(r[4]=x=>e(u).__negotiators.$model=x),error:e(u).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(u).content.$model,"onUpdate:modelValue":r[5]||(r[5]=x=>e(u).content.$model=x),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":P},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:s.value,"onUpdate:modelValue":r[6]||(r[6]=x=>s.value=x),"send-button-loading":e(o).buttonLoading,"onEmit:send":N},{content:d(()=>[n(e(Ye),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=Y("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await ne(ie,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await re({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await ae(p);le(this.model,a),this.model.__curator=await fe([],a.curator.id,!1),this.model.__approvers=await $(a.approvers),this.model.__signers=await $(a.signers)}catch{}finally{this.detailLoading=!1}}}}),po={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:k}},setup(p){const a=p,{t:o}=B(),l=J(),y=Q(),_=j(),t=gl(),u=te();be();const i=I(!1),s=Z(t.rules,t.model),D=async()=>{var r,c,q,f;await s.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.approvers=M(t.model.__approvers),t.model.signers=M(t.model.__signers),t.model.curator=(c=(r=t==null?void 0:t.model)==null?void 0:r.__curator)==null?void 0:c.user_id,t.model.journal=F.INNER,t.model.company=_.currentUser.company.id,t.model.sender=(f=(q=_==null?void 0:_.currentUser)==null?void 0:q.top_level_department)==null?void 0:f.id,t.model.files=t.model.__files.map(b=>({id:b.id})),t.model.document_type=l.params.document_type,t.model.document_sub_type=l.params.document_sub_type,i.value=!0)},R=()=>{},T=g=>{t.model.__files=[],g.forEach(r=>{t.model.__files.push(r)})},O=async()=>{const g=await t.actionCreateDocument(t.model);await u.actionDocumentCountList(),g?(i.value=!1,E(null,o("document-sent"),U.SUCCESS),await y.replace({name:se,query:{document_type:S.NOTICE}})):E(null,o("error-occurred"),U.ERROR)},N=async()=>{await t.actionUpdateDocument({id:l.params.id,body:t.model}),await u.actionDocumentCountList(),E(null,o("changed"),U.SUCCESS),await y.replace({name:de,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},P=()=>{a.formType===k?O():N()};return ke(async()=>{l.params.id&&await t.actionGetDocumentDetailForUpdate(l.params.id)}),K(()=>{oe(t.model)}),(g,r)=>{const c=X,q=H,f=_e,b=G;return e(t).detailLoading?(V(),z(c,{key:0})):(V(),A(W,{key:1},[n(e(ee),{title:a.formType===e(k)?"create-notice":"update-notice"},{content:d(()=>[n(pe,{"onEmit:preview":D,"onEmit:clearForm":R},{default:d(()=>[n(b,null,{default:d(()=>[n(q,{"col-class":"w-1/2"},{default:d(()=>[n(ge,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=m=>e(s).__curator.$model=m),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(f,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":r[1]||(r[1]=m=>e(s).short_description.$model=m),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":r[2]||(r[2]=m=>e(t).model.__approvers=m),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":r[3]||(r[3]=m=>e(s).__signers.$model=m),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":r[4]||(r[4]=m=>e(s).content.$model=m),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":T},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:i.value,"onUpdate:modelValue":r[5]||(r[5]=m=>i.value=m),"send-button-loading":e(t).buttonLoading,"onEmit:send":P},{content:d(()=>[n(e(Qe),{"compose-model":e(t).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wl=Y("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await ne(ie,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await re({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await ae(p);le(this.model,a),this.model.__curator=await fe([],a.curator.id,!1),this.model.__approvers=await $(a.approvers),this.model.__signers=await $(a.signers)}catch{}finally{this.detailLoading=!1}}}}),mo={__name:"DecreeForm",props:{formType:{type:String,default:k}},setup(p){const a=p,{t:o}=B(),l=J(),y=Q(),_=j(),t=te();be();const u=I(!1),i=wl(),s=Z(i.rules,i.model),D=async()=>{var r,c,q,f;await s.value.$validate()&&(i.model.approvers=[],i.model.signers=[],i.model.approvers=M(i.model.__approvers),i.model.signers=M(i.model.__signers),i.model.curator=(c=(r=i==null?void 0:i.model)==null?void 0:r.__curator)==null?void 0:c.user_id,i.model.journal=F.ORDERS_PROTOCOLS,i.model.company=_.currentUser.company.id,i.model.sender=(f=(q=_==null?void 0:_.currentUser)==null?void 0:q.top_level_department)==null?void 0:f.id,i.model.files=i.model.__files.map(b=>({id:b.id})),i.model.document_type=l.params.document_type,i.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(i.model.trip_notice_id=l.query.compose_id),u.value=!0)},R=()=>{},T=g=>{i.model.__files=[],g.forEach(r=>{i.model.__files.push(r)})},O=async()=>{const g=await i.actionCreateDocument(i.model);await t.actionDocumentCountList(),g?(u.value=!1,E(null,o("document-sent"),U.SUCCESS),await y.replace({name:se,query:{document_type:l.params.document_type}})):E(null,o("error-occurred"),U.ERROR)},N=async()=>{await i.actionUpdateDocument({id:l.params.id,body:i.model}),await t.actionDocumentCountList(),E(null,o("changed"),U.SUCCESS),await y.replace({name:de,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},P=()=>{a.formType===k?O():N()};return ke(async()=>{l.params.id&&await i.actionGetDocumentDetailForUpdate(l.params.id)}),K(()=>{oe(i.model)}),(g,r)=>{const c=X,q=H,f=_e,b=G;return e(i).detailLoading?(V(),z(c,{key:0})):(V(),A(W,{key:1},[n(e(ee),{title:a.formType===e(k)?"create-decree":"update-decree"},{content:d(()=>[n(pe,{"onEmit:preview":D,"onEmit:clearForm":R},{default:d(()=>[n(b,null,{default:d(()=>[n(q,{"col-class":"w-1/2"},{default:d(()=>[n(ge,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=m=>e(s).__curator.$model=m),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(f,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":r[1]||(r[1]=m=>e(s).short_description.$model=m),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(i).model.__approvers,"onUpdate:modelValue":r[2]||(r[2]=m=>e(i).model.__approvers=m),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":r[3]||(r[3]=m=>e(s).__signers.$model=m),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":r[4]||(r[4]=m=>e(s).content.$model=m),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(i).model.__files,"onEmit:fileUpload":T},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:u.value,"onUpdate:modelValue":r[5]||(r[5]=m=>u.value=m),"send-button-loading":e(i).buttonLoading,"onEmit:send":P},{content:d(()=>[n(e(Je),{"compose-model":e(i).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{io as _,so as a,ao as b,co as c,po as d,mo as e};
