import{_ as Z}from"./BaseRow-c8bacdd5.js";import{_ as he}from"./BaseInput-542873d9.js";import{_ as K}from"./BaseCol-9bc4da73.js";import{v as M,bZ as Ee,a6 as Ue,o as x,c as H,i as t,z as p,h as e,ba as Ve,B as Je,d1 as Qe,cP as Xe,f as P,a as we,n as Ze,r as Be,G as Ye,aC as ee,c0 as R,c1 as T,bP as j,u as J,t as He,b as le,ay as oe,cn as te,F as ne,aa as E,an as re,cX as ve,d as ge,aE as Ke,cg as xe,a8 as el,d2 as ll}from"./index-27aca336.js";import{c as w,r as v,u as ae}from"./index-f21a84c6.js";import{_ as ol,a as tl}from"./BranchMultiSelect-5c12294b.js";import{_ as ie,c as nl,a as rl,h as al,i as il,d as sl,e as dl,f as pl,g as cl,b as ul}from"./BasePOA-de318dee.js";import"./BaseTabMenu-e9ad9656.js";import"./dialog.esm-fd50422f.js";import"./tabpanel.esm-524750a9.js";import{s as W,S as L,V as ml,W as se,X as A,Y as Q,Z as Ae,_ as je,$ as ql}from"./index-77ac4f7e.js";import"./BaseTabView-f51e794c.js";import"./FileTabs-3b4ed617.js";import{_ as O}from"./UserMultiSelect-a4268de7.js";import{c as _l,u as G,w as de,d as S}from"./axios.config-510e30d6.js";import{u as ke}from"./common-3cb93c35.js";import{u as pe}from"./count.store-94a0bfaa.js";import{f as ce,a as Y,b as ue,u as fl,c as bl}from"./index.store-5a829e31.js";import{d as Ge,e as me,c as qe}from"./index-c4c1f2d4.js";import{F as U}from"./constants-5c471c97.js";import{_ as Se}from"./BaseDropdown-2f510f71.js";import{_ as $e}from"./BaseCalendar-9d48c621.js";import{_ as gl}from"./BaseMultiSelect-2d002b4e.js";import{f as ye}from"./formatDate-6e9e99b8.js";import"./qrcode.vue.esm-2108dc92.js";import"./Dropdown-85fdcd1f.js";import"./menu.esm-a9e720ce.js";/* empty css                                                 */import"./avatar.esm-3e02a06a.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-46ea6464.js";import"./common.store-d64051ad.js";import{_ as wl}from"./WithRadio-a7bcaa2c.js";import"./radiobutton.esm-d101d717.js";import"./checkbox.esm-8ac0fe40.js";import{_ as vl}from"./BaseBrickTab-9724831b.js";import{_ as yl}from"./BaseFileUpload-9cfd971c.js";import{_ as hl}from"./BaseFroalaEditor-2076ce5e.js";import{_ as kl}from"./BaseTinyEditor-9b526e38.js";import{_ as Vl}from"./BaseDialog-7260bbed.js";import"./dayjs.min-f3ac78f7.js";import{_ as Ul}from"./WithSelectable-9d990e87.js";const xl={class:"user-select"},X={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(c,{emit:a}){const o=c,l=M([]),b=Ee(o,"modelValue"),i=async r=>{let{data:_}=await _l.get(`${o.apiUrl}/`,r);_.hasOwnProperty("results")?l.value=_.results:l.value=_};return Ue(async()=>{await i(o.apiParams)}),(r,_)=>(x(),H("div",xl,[t(Se,{modelValue:e(b),"onUpdate:modelValue":_[0]||(_[0]=n=>Ve(b)?b.value=n:null),options:l.value,"onUpdate:options":_[1]||(_[1]=n=>l.value=n),error:o.error,"api-url":o.apiUrl,"api-params":o.apiParams,"option-label":"full_name",label:o.label,placeholder:o.placeholder,required:o.required,searchable:"","onEmit:change":_[2]||(_[2]=n=>a("emit:change",n))},{option:p(({option:n})=>[t(e(Ul),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var El=`
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
`,Sl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Je.extend({name:"editor",css:El,classes:Sl});(function(){try{return window.Quill}catch{return null}})();const be={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(c){return["froala","tiny"].includes(c)}}},emits:["update:modelValue","emit:fileUpload"],setup(c,{emit:a}){const o=c,l=Ee(o,"modelValue"),b=M([{title:"text",slot:"editor",icon:Qe},{title:"file",slot:"file",icon:Xe}]);return(i,r)=>(x(),P(vl,{"tab-panel-list":b.value,"panel-container-class":"px-0"},{editor:p(()=>[c.editor==="froala"?(x(),P(hl,{key:0,modelValue:e(l),"onUpdate:modelValue":r[0]||(r[0]=_=>Ve(l)?l.value=_:null)},null,8,["modelValue"])):(x(),P(kl,{key:1,modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=_=>Ve(l)?l.value=_:null)},null,8,["modelValue"]))]),file:p(()=>[we("div",{class:Ze(o.fileUploadContainerClasses)},[t(yl,{files:o.files,"onEmit:fileUpload":r[2]||(r[2]=_=>a("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},$l={class:"flex flex-col justify-between h-full"},Ll={class:"px-6 py-4 overflow-y-auto"},Cl={class:"actions p-6"},_e={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(c,{emit:a}){return(o,l)=>{const b=Ye;return x(),H("div",$l,[we("div",Ll,[Be(o.$slots,"default")]),we("div",Cl,[t(b,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=i=>a("emit:clearForm"))}),t(b,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=i=>a("emit:preview"))})])])}}},Dl=ee("sd-stores-inner",{state:()=>{var c,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(c=G().currentUser)==null?void 0:c.company)==null?void 0:a.id,content:null,document_type:R.INNER,document_sub_type:T.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:j.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:w.withMessage("Поле не должен быть пустым",v)},content:{required:w.withMessage("Поле не должен быть пустым",v)},__departments:{required:w.withMessage("Поле не должен быть пустым",v)},__approvers:{},__signers:{required:w.withMessage("Поле не должен быть пустым",v)}}}},actions:{async actionCreateDocument(c){let a={...c,type:Ge,sub_type:Ge};this.buttonLoading=!0;const{response:o,error:l}=await de(ue,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):Promise.reject(l)},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await Y(c);W(this.model,a),this.model.__approvers=await L(a.approvers),this.model.__signers=await L(a.signers),this.model.__departments=await ml(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Rl={class:"font-semibold text-xl"},fe={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(c,{emit:a}){const l=Ee(c,"modelValue"),{t:b}=J();return(i,r)=>{const _=Ye,n=Vl;return x(),P(n,{modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=u=>Ve(l)?l.value=u:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:p(()=>[we("span",Rl,He(e(b)("preview")),1)]),content:p(()=>[Be(i.$slots,"content")]),footer:p(()=>[t(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(_,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:c.sendButtonLoading,onClick:r[0]||(r[0]=u=>a("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},Lo={__name:"InnerForm",props:{formType:{type:String,default:U}},setup(c){const a=c,o=G(),l=Dl();ke();const b=pe(),i=M(!1);M(null);const{t:r}=J(),_=le(),n=oe(),u=ae(l.rules,l.model),D=async()=>{await u.value.$validate()&&(i.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(s=>s.id),l.model.files=[],l.model.files=l.model.__files.map(s=>({id:s.id})),l.model.journal=j.INNER,l.model.sender=o.currentUser.top_level_department.id,l.model.approvers=A(l.model.__approvers),l.model.signers=A(l.model.__signers),l.model.document_type=n.params.document_type,l.model.document_sub_type=n.params.document_sub_type)},$=()=>{a.formType===U?C():N()},C=async()=>{const g=await l.actionCreateDocument(l.model);await b.actionCountList(),g?(i.value=!1,S(null,r("document-sent"),E.SUCCESS),await _.replace({name:me,query:{document_type:R.INNER}})):S(null,r("error-occurred"),E.ERROR)},N=async()=>{await l.actionUpdateDocument({id:n.params.id,body:l.model}),await b.actionCountList(),S(null,r("document-sent"),E.SUCCESS),await _.replace({name:qe,params:{id:n.params.id,document_type:R.INNER,document_sub_type:T.SERVICE_LETTER}})},F=()=>{console.log("Clear Form")},I=g=>{l.model.__files=[],g.forEach(s=>{l.model.__files.push(s)})};return Ue(async()=>{n.params.id&&await l.actionGetDocumentDetailForUpdate(n.params.id)}),te(()=>{se(l.model)}),(g,s)=>{const V=re,m=K,d=he,f=Z;return e(l).detailLoading?(x(),P(V,{key:0})):(x(),H(ne,{key:1},[t(e(ie),{title:a.formType===e(U)?"create-sd-inner":"update-sd-inner"},{content:p(()=>[t(_e,{"onEmit:preview":D,"onEmit:clearForm":F},{default:p(()=>[t(f,null,{default:p(()=>[t(m,{"col-class":"w-1/2"},{default:p(()=>[t(ol,{modelValue:e(u).__departments.$model,"onUpdate:modelValue":s[0]||(s[0]=q=>e(u).__departments.$model=q),error:e(u).__departments},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(d,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":s[1]||(s[1]=q=>e(u).short_description.$model=q),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(u).__approvers.$model,"onUpdate:modelValue":s[2]||(s[2]=q=>e(u).__approvers.$model=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":s[3]||(s[3]=q=>e(u).__signers.$model=q),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:p(()=>[t(be,{modelValue:e(u).content.$model,"onUpdate:modelValue":s[4]||(s[4]=q=>e(u).content.$model=q),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:i.value,"onUpdate:modelValue":s[5]||(s[5]=q=>i.value=q),"send-button-loading":e(l).buttonLoading,"onEmit:send":$},{content:p(()=>{var q,h;return[t(nl,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(h=(q=e(o).currentUser)==null?void 0:q.top_level_department)==null?void 0:h.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},Ol=ee("sd-store-application",{state:()=>{var c,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(c=G().currentUser)==null?void 0:c.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:w.withMessage("Поле не должен быть пустым",v)},__curator:{required:w.withMessage("Поле не должен быть пустым",v)},__approvers:{required:w.withMessage("Поле не должен быть пустым",v)},__signers:{}}}},actions:{async actionCreateDocument(c){let a={...c};this.buttonLoading=!0;const{response:o,error:l}=await de(ue,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await Y(c);W(this.model,a),this.model.__approvers=await L(a.approvers),this.model.__signers=await L(a.signers.filter(o=>o.type===ve.SIGNER)),this.model.__curator=await Q([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),We=ee("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:G().currentUser.company.id,curator:null,document_type:R.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:j.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:w.withMessage("Поле не должен быть пустым",v)},register_date:{required:w.withMessage("Поле не должен быть пустым",v)},content:{required:w.withMessage("Поле не должен быть пустым",v)},__negotiators:{required:w.withMessage("Поле не должен быть пустым",v)},__curator:{required:w.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await de(ue,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await Y(c);W(this.model,a),this.model.__signers=await L(a.signers.filter(o=>o.type!==ve.NEGOTIATOR)),this.model.__negotiators=await L(a.signers.filter(o=>o.type===ve.NEGOTIATOR)),this.model.__approvers=await L(a.approvers),this.model.__curator=await Q([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),Co={__name:"ApplicationForm",props:{formType:{type:String,default:U}},setup(c){const a=c,o=G(),l=Ol();ke();const b=pe();We();const i=M(!1);M(null);const{t:r}=J(),_=le(),n=oe(),u=ae(l.rules,l.model),D=async()=>{var s,V,m,d,f;await u.value.$validate()&&(i.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(s=o==null?void 0:o.currentUser)==null?void 0:s.id}],l.model.sender=(m=(V=o==null?void 0:o.currentUser)==null?void 0:V.top_level_department)==null?void 0:m.id,l.model.curator=(f=(d=l==null?void 0:l.model)==null?void 0:d.__curator)==null?void 0:f.user_id,l.model.journal=j.APPLICATION,l.model.document_type=n.params.document_type,l.model.document_sub_type=n.params.document_sub_type,l.model.approvers=A(l.model.__approvers))},$=async()=>{},C=()=>{a.formType===U?N():F()},N=async()=>{const g=await l.actionCreateDocument(l.model);await b.actionCountList(),g?(i.value=!1,S(null,r("document-sent"),E.SUCCESS),await _.replace({name:me,query:{document_type:R.APPLICATION}})):S(null,r("error-occurred"),E.ERROR)},F=async()=>{await l.actionUpdateDocument({id:n.params.id,body:l.model}),await b.actionCountList(),S(null,r("document-sent"),E.SUCCESS),await _.replace({name:qe,params:{id:n.params.id,document_type:R.APPLICATION,document_sub_type:T.LABOR_LEAVE}})},I=g=>{l.model.__files=[],g.forEach(s=>{l.model.__files.push(s)})};return Ue(async()=>{n.params.id&&await l.actionGetDocumentDetailForUpdate(n.params.id)}),te(()=>{se(l.model)}),(g,s)=>{const V=re,m=K,d=Z;return e(l).detailLoading?(x(),P(V,{key:0})):(x(),H(ne,{key:1},[t(e(ie),{title:a.formType===e(U)?"create-sd-application":"update-sd-application"},{content:p(()=>[t(_e,{"onEmit:preview":D,"onEmit:clearForm":$},{default:p(()=>[t(d,null,{default:p(()=>[t(m,{"col-class":"w-1/2"},{default:p(()=>[t(X,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=f=>e(u).__curator.$model=f),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(u).__approvers.$model,"onUpdate:modelValue":s[1]||(s[1]=f=>e(u).__approvers.$model=f),error:e(u).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":s[2]||(s[2]=f=>e(u).__signers.$model=f),disabled:"",label:"signers",placeholder:e(o).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(m,{"col-class":"w-full"},{default:p(()=>[t(be,{modelValue:e(u).content.$model,"onUpdate:modelValue":s[3]||(s[3]=f=>e(u).content.$model=f),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:i.value,"onUpdate:modelValue":s[4]||(s[4]=f=>i.value=f),"send-button-loading":e(l).buttonLoading,"onEmit:send":C},{content:p(()=>[t(rl,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:a.formType===e(U)?e(o).currentUser:e(l).model.__signers[0].user,signers:a.formType===e(U)?[e(o).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Tl=ee("sd-notice-store",{state:()=>(G(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:R.NOTICE,document_sub_type:T.BUSINESS_TRIP,journal:j.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:w.withMessage("Поле не должен быть пустым",v)},start_date:{required:w.withMessage("Поле не должен быть пустым",v)},route:{required:w.withMessage("Поле не должен быть пустым",v)},content:{required:w.withMessage("Поле не должен быть пустым",v)},__companies:{required:w.withMessage("Поле не должен быть пустым",v)},__curator:{required:w.withMessage("Поле не должен быть пустым",v)},__employees:{required:w.withMessage("Поле не должен быть пустым",v)},__signers:{required:w.withMessage("Поле не должен быть пустым",v)},__tags:{required:w.withMessage("Поле не должен быть пустым",v)},short_description:{required:w.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await de(ue,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c,a=!1){try{this.detailLoading=!0;const{data:o}=await Y(c);W(this.model,o),this.model.__companies=[],this.model.__curator=await Q([],o.curator.id,!1),this.model.__employees=await L(o.notices),a?(this.model.__approvers=await L(o.approvers.filter(l=>{var b,i;return((b=l==null?void 0:l.user)==null?void 0:b.id)!==((i=o==null?void 0:o.curator)==null?void 0:i.assistant)})),this.model.register_number=null):this.model.__approvers=await L(o.approvers),this.model.__signers=await L(o.signers),this.model.__companies=await Ae(o.notices[0].destinations),this.model.__tags=await je(o.tags),this.model.start_date=o.notices[0].start_date,this.model.end_date=o.notices[0].end_date,this.model.__tags=o.tags,this.model.route=o.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(c,a){try{this.detailLoading=!0;const{data:o}=await Y(c),l=await Y(a);W(this.model,o),this.model.__companies=[],this.model.__curator=await Q([],o.curator.id,!1),this.model.__employees=await L(l.data.notices),this.model.__approvers=await L(o.approvers),this.model.__signers=await L(o.signers),this.model.__companies=await Ae(l.data.notices[0].destinations),this.model.__tags=await je(o.tags),this.model.start_date=l.data.notices[0].start_date,this.model.end_date=l.data.notices[0].end_date,this.model.__tags=o.tags,this.model.route=l.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),Pl={class:"flex w-full gap-x-4"},Do={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:U}},setup(c){const a=c,{t:o}=J(),l=oe(),b=le(),i=G(),r=Tl(),_=pe();ke();const n=ae(r.rules,r.model),u=M(!1),D=ge(()=>{const m=a.formType===U,d=l.params.document_sub_type;return d===T.BUSINESS_TRIP_DECREE_LOCAL?m?"create-decree":"update-decree":d===T.BUSINESS_TRIP_ORDER_LOCAL?m?"create-order":"update-order":m?"create-business-trip-notice":"update-business-trip-notice"}),$=ge(()=>{var m,d;return l.params.document_sub_type===T.BUSINESS_TRIP_DECREE_LOCAL&&((m=l==null?void 0:l.query)==null?void 0:m.compose_id)&&((d=l==null?void 0:l.query)==null?void 0:d.document_sub_type)===T.BUSINESS_TRIP}),C=ge(()=>{var m;return!!(l.params.document_sub_type===T.BUSINESS_TRIP_DECREE_LOCAL&&((m=r==null?void 0:r.model)!=null&&m.trip_notice_id))});Ke(()=>r.model.__tags,m=>{if(a.formType===U)if(m&&m.length){let d=`${m.map(f=>f.name_uz).join(", ")} yuzasidan`;r.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else r.model.short_description=null});const N=async()=>{var d,f,q,h,B;await n.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=A(r.model.__approvers),r.model.signers=A(r.model.__signers),r.model.curator=(f=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:f.user_id,r.model.journal=l.params.document_type===R.DECREE||l.params.document_type===R.ORDER?j.ORDERS_PROTOCOLS:j.INNER,r.model.company=i.currentUser.company.id,r.model.notices=r.model.__employees.map(z=>({start_date:r.model.start_date,end_date:r.model.end_date,user:z.id,route:r.model.route,companies:r.model.__companies.map(k=>k.id)})),r.model.sender=(h=(q=i==null?void 0:i.currentUser)==null?void 0:q.top_level_department)==null?void 0:h.id,r.model.tags=r.model.__tags.map(z=>({id:z.id})),r.model.files=r.model.__files.map(z=>({id:z.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,$.value&&(r.model.trip_notice_id=(B=l==null?void 0:l.query)==null?void 0:B.compose_id),u.value=!0)},F=()=>{},I=m=>{r.model.__files=[],m.forEach(d=>{r.model.__files.push(d)})},g=async()=>{$.value&&(r.model.notices=[]);const m=await r.actionCreateDocument(r.model);await _.actionCountList(),m?(u.value=!1,S(null,o("document-sent"),E.SUCCESS),await b.replace({name:me,query:{document_type:l.params.document_sub_type===T.BUSINESS_TRIP_DECREE_LOCAL?R.DECREE:l.params.document_sub_type===T.BUSINESS_TRIP_ORDER_LOCAL?R.ORDER:R.NOTICE}})):S(null,o("error-occurred"),E.ERROR)},s=async()=>{($.value||C.value)&&(r.model.notices=[]),await r.actionUpdateDocument({id:l.params.id,body:r.model}),await _.actionCountList(),S(null,o("changed"),E.SUCCESS),await b.replace({name:qe,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},V=()=>{a.formType===U?g():s()};return xe(async()=>{l.params.id&&l.query.trip_notice_id&&l.params.document_sub_type===T.BUSINESS_TRIP_DECREE_LOCAL?await r.actionGetDocumentDetailForUpdateForCustomUse(l.params.id,l.query.trip_notice_id):l.params.id?await r.actionGetDocumentDetailForUpdate(l.params.id):$.value&&await r.actionGetDocumentDetailForUpdate(l.query.compose_id,!0)}),te(()=>{se(r.model)}),(m,d)=>{const f=re,q=K,h=$e,B=Se,z=he,k=Z;return e(r).detailLoading?(x(),P(f,{key:0})):(x(),H(ne,{key:1},[t(e(ie),{title:D.value},{content:p(()=>[t(_e,{"onEmit:preview":N,"onEmit:clearForm":F},{default:p(()=>[t(k,null,{default:p(()=>[t(q,{"col-class":"w-1/2"},{default:p(()=>[t(X,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=y=>e(n).__curator.$model=y),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=y=>e(n).__employees.$model=y),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:$.value||C.value},null,8,["modelValue","error","disabled"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(tl,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=y=>e(n).__companies.$model=y),error:e(n).__companies,"text-truncate":"",disabled:$.value||C.value},null,8,["modelValue","error","disabled"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(gl,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=y=>e(n).__tags.$model=y),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:p(({value:y})=>[el(He(y.name),1)]),option:p(({value:y})=>[t(e(wl),{title:y.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[we("div",Pl,[t(h,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=y=>e(n).start_date.$model=y),d[5]||(d[5]=y=>e(n).start_date.$model=e(ye)(y))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:$.value||C.value},null,8,["modelValue","error","min-date","disabled"]),t(h,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=y=>e(n).end_date.$model=y),d[7]||(d[7]=y=>e(n).end_date.$model=e(ye)(y))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:$.value||C.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(B,{modelValue:e(n).route.$model,"onUpdate:modelValue":d[8]||(d[8]=y=>e(n).route.$model=y),error:e(n).route,options:e(ll),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:$.value||C.value},null,8,["modelValue","error","options","disabled"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=y=>e(r).model.__approvers=y),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=y=>e(n).__signers.$model=y),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(z,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=y=>e(n).short_description.$model=y),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(q,{"col-class":"w-full"},{default:p(()=>[t(be,{modelValue:e(n).content.$model,"onUpdate:modelValue":d[12]||(d[12]=y=>e(n).content.$model=y),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:u.value,"onUpdate:modelValue":d[13]||(d[13]=y=>u.value=y),"send-button-loading":e(r).buttonLoading,"onEmit:send":V},{content:p(()=>[e(l).params.document_sub_type===e(T).BUSINESS_TRIP_DECREE_LOCAL?(x(),P(e(al),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(T).BUSINESS_TRIP_ORDER_LOCAL?(x(),P(e(il),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(x(),P(e(sl),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},Ro={__name:"OrderForm",props:{formType:{type:String,default:U}},setup(c){const a=c,o=We(),l=pe(),b=G(),i=oe(),r=le(),_=ae(o.rules,o.model),{t:n}=J(),u=M(!1),D=async()=>{var s,V,m,d;await _.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=A(o.model.__approvers),o.model.curator=(V=(s=o==null?void 0:o.model)==null?void 0:s.__curator)==null?void 0:V.user_id,o.model.sender=(d=(m=b==null?void 0:b.currentUser)==null?void 0:m.top_level_department)==null?void 0:d.id,o.model.files=o.model.__files.map(f=>({id:f.id})),o.model.document_type=i.params.document_type,o.model.document_sub_type=i.params.document_sub_type,o.model.journal=j.ORDERS_PROTOCOLS,o.model.register_date=ye(o.model.register_date),o.model.__negotiators.forEach(f=>{o.model.signers.push(f.hasOwnProperty("user")?{id:f.id,user:f.user.id,type:ve.NEGOTIATOR}:{user:f.id,type:ve.NEGOTIATOR})}),i.query.compose_id&&(o.model.trip_notice_id=i.query.compose_id),u.value=!0)},$=()=>{},C=async()=>{try{const g=await o.actionCreateDocument(o.model);await l.actionCountList(),g&&(u.value=!1,S(null,n("document-sent"),E.SUCCESS),await r.replace({name:me,query:{document_type:R.ORDER}}))}catch{S(null,n("error-occurred"),E.ERROR)}},N=async()=>{try{const g=await o.actionUpdateDocument({id:i.params.id,body:o.model});await l.actionCountList(),S(null,n("changed"),E.SUCCESS),await r.replace({name:qe,params:{id:i.params.id,document_type:i.params.document_type,document_sub_type:i.params.document_sub_type}})}catch{S(null,n("error-occurred"),E.ERROR)}},F=()=>{a.formType===U?C():N()},I=g=>{o.model.__files=[],g.forEach(s=>{o.model.__files.push(s)})};return Ue(async()=>{i.params.id&&await o.actionGetDocumentDetailForUpdate(i.params.id)}),te(()=>{se(o.model)}),(g,s)=>{const V=re,m=K,d=he,f=$e,q=Z;return e(o).detailLoading?(x(),P(V,{key:0})):(x(),H(ne,{key:1},[t(e(ie),{title:a.formType===e(U)?"create-order":"update-order"},{content:p(()=>[t(_e,{"onEmit:preview":D,"onEmit:clearForm":$},{default:p(()=>[t(q,null,{default:p(()=>[t(m,{"col-class":"w-1/2"},{default:p(()=>[t(X,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=h=>e(_).__curator.$model=h),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(i).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(d,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":s[1]||(s[1]=h=>e(_).register_number.$model=h),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(f,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":s[2]||(s[2]=h=>e(_).register_date.$model=h),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":s[3]||(s[3]=h=>e(o).model.__approvers=h),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":s[4]||(s[4]=h=>e(_).__negotiators.$model=h),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:p(()=>[t(be,{modelValue:e(_).content.$model,"onUpdate:modelValue":s[5]||(s[5]=h=>e(_).content.$model=h),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":I},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:u.value,"onUpdate:modelValue":s[6]||(s[6]=h=>u.value=h),"send-button-loading":e(o).buttonLoading,"onEmit:send":F},{content:p(()=>[t(e(dl),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Nl=ee("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:w.withMessage("Поле не должен быть пустым",v)},__curator:{required:w.withMessage("Поле не должен быть пустым",v)},__signers:{required:w.withMessage("Поле не должен быть пустым",v)},short_description:{required:w.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await de(ue,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await Y(c);W(this.model,a),this.model.__curator=await Q([],a.curator.id,!1),this.model.__approvers=await L(a.approvers),this.model.__signers=await L(a.signers)}catch{}finally{this.detailLoading=!1}}}}),Oo={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:U}},setup(c){const a=c,{t:o}=J(),l=oe(),b=le(),i=G(),r=Nl(),_=pe();ke();const n=M(!1),u=ae(r.rules,r.model),D=async()=>{var s,V,m,d;await u.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=A(r.model.__approvers),r.model.signers=A(r.model.__signers),r.model.curator=(V=(s=r==null?void 0:r.model)==null?void 0:s.__curator)==null?void 0:V.user_id,r.model.journal=j.INNER,r.model.company=i.currentUser.company.id,r.model.sender=(d=(m=i==null?void 0:i.currentUser)==null?void 0:m.top_level_department)==null?void 0:d.id,r.model.files=r.model.__files.map(f=>({id:f.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,n.value=!0)},$=()=>{},C=g=>{r.model.__files=[],g.forEach(s=>{r.model.__files.push(s)})},N=async()=>{const g=await r.actionCreateDocument(r.model);await _.actionCountList(),g?(n.value=!1,S(null,o("document-sent"),E.SUCCESS),await b.replace({name:me,query:{document_type:R.NOTICE}})):S(null,o("error-occurred"),E.ERROR)},F=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await _.actionCountList(),S(null,o("changed"),E.SUCCESS),await b.replace({name:qe,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},I=()=>{a.formType===U?N():F()};return xe(async()=>{l.params.id&&await r.actionGetDocumentDetailForUpdate(l.params.id)}),te(()=>{se(r.model)}),(g,s)=>{const V=re,m=K,d=he,f=Z;return e(r).detailLoading?(x(),P(V,{key:0})):(x(),H(ne,{key:1},[t(e(ie),{title:a.formType===e(U)?"create-notice":"update-notice"},{content:p(()=>[t(_e,{"onEmit:preview":D,"onEmit:clearForm":$},{default:p(()=>[t(f,null,{default:p(()=>[t(m,{"col-class":"w-1/2"},{default:p(()=>[t(X,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=q=>e(u).__curator.$model=q),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(d,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":s[1]||(s[1]=q=>e(u).short_description.$model=q),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":s[2]||(s[2]=q=>e(r).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":s[3]||(s[3]=q=>e(u).__signers.$model=q),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:p(()=>[t(be,{modelValue:e(u).content.$model,"onUpdate:modelValue":s[4]||(s[4]=q=>e(u).content.$model=q),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":C},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:n.value,"onUpdate:modelValue":s[5]||(s[5]=q=>n.value=q),"send-button-loading":e(r).buttonLoading,"onEmit:send":I},{content:p(()=>[t(e(pl),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Fl=ee("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:w.withMessage("Поле не должен быть пустым",v)},__curator:{required:w.withMessage("Поле не должен быть пустым",v)},__signers:{required:w.withMessage("Поле не должен быть пустым",v)},short_description:{required:w.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await de(ue,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await Y(c);W(this.model,a),this.model.__curator=await Q([],a.curator.id,!1),this.model.__approvers=await L(a.approvers),this.model.__signers=await L(a.signers)}catch{}finally{this.detailLoading=!1}}}}),To={__name:"DecreeForm",props:{formType:{type:String,default:U}},setup(c){const a=c,{t:o}=J(),l=oe(),b=le(),i=G(),r=pe();ke();const _=M(!1),n=Fl(),u=ae(n.rules,n.model),D=async()=>{var s,V,m,d;await u.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=A(n.model.__approvers),n.model.signers=A(n.model.__signers),n.model.curator=(V=(s=n==null?void 0:n.model)==null?void 0:s.__curator)==null?void 0:V.user_id,n.model.journal=j.ORDERS_PROTOCOLS,n.model.company=i.currentUser.company.id,n.model.sender=(d=(m=i==null?void 0:i.currentUser)==null?void 0:m.top_level_department)==null?void 0:d.id,n.model.files=n.model.__files.map(f=>({id:f.id})),n.model.document_type=l.params.document_type,n.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(n.model.trip_notice_id=l.query.compose_id),_.value=!0)},$=()=>{},C=g=>{n.model.__files=[],g.forEach(s=>{n.model.__files.push(s)})},N=async()=>{const g=await n.actionCreateDocument(n.model);await r.actionCountList(),g?(_.value=!1,S(null,o("document-sent"),E.SUCCESS),await b.replace({name:me,query:{document_type:l.params.document_type}})):S(null,o("error-occurred"),E.ERROR)},F=async()=>{await n.actionUpdateDocument({id:l.params.id,body:n.model}),await r.actionCountList(),S(null,o("changed"),E.SUCCESS),await b.replace({name:qe,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},I=()=>{a.formType===U?N():F()};return xe(async()=>{l.params.id&&await n.actionGetDocumentDetailForUpdate(l.params.id)}),te(()=>{se(n.model)}),(g,s)=>{const V=re,m=K,d=he,f=Z;return e(n).detailLoading?(x(),P(V,{key:0})):(x(),H(ne,{key:1},[t(e(ie),{title:a.formType===e(U)?"create-decree":"update-decree"},{content:p(()=>[t(_e,{"onEmit:preview":D,"onEmit:clearForm":$},{default:p(()=>[t(f,null,{default:p(()=>[t(m,{"col-class":"w-1/2"},{default:p(()=>[t(X,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=q=>e(u).__curator.$model=q),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(d,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":s[1]||(s[1]=q=>e(u).short_description.$model=q),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":s[2]||(s[2]=q=>e(n).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":s[3]||(s[3]=q=>e(u).__signers.$model=q),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:p(()=>[t(be,{modelValue:e(u).content.$model,"onUpdate:modelValue":s[4]||(s[4]=q=>e(u).content.$model=q),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":C},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:_.value,"onUpdate:modelValue":s[5]||(s[5]=q=>_.value=q),"send-button-loading":e(n).buttonLoading,"onEmit:send":I},{content:p(()=>[t(e(cl),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Il=ee("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:w.withMessage("Поле не должен быть пустым",v)},start_date:{required:w.withMessage("Поле не должен быть пустым",v)},__curator:{required:w.withMessage("Поле не должен быть пустым",v)},__signers:{required:w.withMessage("Поле не должен быть пустым",v)},__user:{required:w.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await de(ue,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await Y(c);return W(this.model,a),this.model.__curator=await Q([],a.curator.id,!1),this.model.__approvers=await L(a.approvers),this.model.__signers=await L(a.signers),this.model.__user=await ql("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}}}}),Po={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:U}},setup(c){const a=c,o=oe(),l=le(),b=G(),i=Il();fl();const r=pe(),{t:_}=J(),n=ae(i.rules,i.model),u=M(!1),D=M([]),$=ge(()=>a.formType===U?"create-poa":"update-poa"),C=ge(()=>i.model.start_date?new Date(i.model.start_date):new Date),N=async()=>{var d,f,q,h,B,z,k,y,Le,Ce,De,Re,Oe,Te,Pe,Ne,Fe,Ie,ze,Me;if(await n.value.$validate()){if(i.model.approvers=[],i.model.signers=[],i.model.approvers=A(i.model.__approvers),i.model.signers=A(i.model.__signers),i.model.curator=(f=(d=i==null?void 0:i.model)==null?void 0:d.__curator)==null?void 0:f.user_id,i.model.user=(h=(q=i==null?void 0:i.model)==null?void 0:q.__user)==null?void 0:h.id,i.model.journal=j.POWER_OF_ATTORNEY,i.model.company=(z=(B=b.currentUser)==null?void 0:B.company)==null?void 0:z.id,i.model.sender=(y=(k=b==null?void 0:b.currentUser)==null?void 0:k.top_level_department)==null?void 0:y.id,i.model.document_type=o.params.document_type,i.model.document_sub_type=o.params.document_sub_type,i.model.content=".",i.model.parent=(Ce=(Le=i.model)==null?void 0:Le.__parent)==null?void 0:Ce.id,!((Re=(De=i==null?void 0:i.model)==null?void 0:De.__user)!=null&&Re.passport_seria||(Te=(Oe=i==null?void 0:i.model)==null?void 0:Oe.__user)!=null&&Te.passport_number||(Ne=(Pe=i==null?void 0:i.model)==null?void 0:Pe.__user)!=null&&Ne.passport_issue_date||(Ie=(Fe=i==null?void 0:i.model)==null?void 0:Fe.__user)!=null&&Ie.passport_issued_by)){S(null,`${(Me=(ze=i.model)==null?void 0:ze.__user)==null?void 0:Me.full_name}: ${_("passport-details-error")}`,E.WARNING);return}u.value=!0}},F=()=>{},I=async()=>{const m=await i.actionCreateDocument(i.model);await r.actionCountList(),m?(u.value=!1,S(null,_("document-sent"),E.SUCCESS),await l.replace({name:me,query:{document_type:R.POWER_OF_ATTORNEY}})):S(null,_("error-occurred"),E.ERROR)},g=async()=>{await i.actionUpdateDocument({id:o.params.id,body:i.model}),await r.actionCountList(),S(null,_("changed"),E.SUCCESS),await l.replace({name:qe,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},s=()=>{a.formType===U?I():g()},V=async m=>{const{data:d}=await bl({user:m.id,document_sub_type:o.params.document_sub_type,status:5});D.value=d.results};return xe(async()=>{if(o.params.id){const m=await i.actionGetDocumentDetailForUpdate(o.params.id);m.parent&&(D.value=[m.parent])}}),te(()=>{se(i.model)}),(m,d)=>{const f=re,q=K,h=$e,B=Se,z=Z;return e(i).detailLoading?(x(),P(f,{key:0})):(x(),H(ne,{key:1},[t(e(ie),{title:$.value},{content:p(()=>[t(_e,{"onEmit:preview":N,"onEmit:clearForm":F},{default:p(()=>[t(z,null,{default:p(()=>[t(q,{"col-class":"w-1/2"},{default:p(()=>[t(X,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=k=>e(n).__curator.$model=k),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(X,{modelValue:e(n).__user.$model,"onUpdate:modelValue":d[1]||(d[1]=k=>e(n).__user.$model=k),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":d[2]||(d[2]=k=>V(k))},null,8,["modelValue","error"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(h,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[3]||(d[3]=k=>e(n).start_date.$model=k),d[4]||(d[4]=k=>e(n).start_date.$model=e(ye)(k))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(h,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[5]||(d[5]=k=>e(n).end_date.$model=k),d[6]||(d[6]=k=>e(n).end_date.$model=e(ye)(k))],error:e(n).end_date,"min-date":C.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(i).model.__approvers,"onUpdate:modelValue":d[7]||(d[7]=k=>e(i).model.__approvers=k),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(O,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[8]||(d[8]=k=>e(n).__signers.$model=k),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:p(()=>[t(B,{modelValue:e(i).model.__parent,"onUpdate:modelValue":d[9]||(d[9]=k=>e(i).model.__parent=k),options:D.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:u.value,"onUpdate:modelValue":d[10]||(d[10]=k=>u.value=k),"send-button-loading":e(i).buttonLoading,"onEmit:send":s},{content:p(()=>[t(ul,{"compose-model":e(i).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{Co as _,Do as a,Po as b,Lo as c,Ro as d,Oo as e,To as f};
