import{_ as Z}from"./BaseRow-922fd6a1.js";import{_ as ye}from"./BaseInput-b176cf89.js";import{_ as ee}from"./BaseCol-7f1a47c6.js";import{v as z,b_ as xe,a6 as Ee,o as U,c as H,i as t,z as c,h as e,bb as Ve,B as Xe,d4 as Ze,cT as el,f as P,a as we,n as ll,r as We,G as Qe,aD as Q,c1 as R,c2 as T,bQ as A,u as J,t as Je,b as le,az as oe,ct as te,F as ne,aa as x,an as re,c_ as ve,d as ge,aF as ol,cm as Ue,a8 as tl,d5 as nl,d6 as rl,d7 as al,d8 as il,d9 as Ae,da as je,db as Be}from"./index-add6f548.js";import{c as f,r as b,u as ae}from"./index-940d51bc.js";import{_ as sl,a as dl}from"./BranchMultiSelect-f0b8c351.js";import{_ as ie,c as cl,a as pl,h as ul,i as ml,d as ql,e as _l,f as fl,g as bl,b as gl}from"./BasePOA-64130f69.js";import"./BaseTabMenu-d5d8f412.js";import"./dialog.esm-8c01cdd3.js";import"./tabpanel.esm-19dce075.js";import{s as W,S as L,V as wl,W as se,X as j,Y as K,Z as Ge,_ as Ye,$ as vl}from"./index-18491427.js";import"./BaseTabView-70831c82.js";import"./FileTabs-5b0f68ef.js";import{_ as O}from"./UserMultiSelect-6289680c.js";import{c as hl,u as B,w as de,d as S}from"./axios.config-aa4d7d66.js";import{u as ke}from"./common-265eff3d.js";import{u as ce}from"./count.store-f9339c4b.js";import{f as pe,a as Y,b as ue,u as yl,c as kl}from"./index.store-12c42568.js";import{d as He,e as me,c as qe,f as Vl,g as El,h as Ul}from"./index-60eefec0.js";import{F as E}from"./constants-33601b85.js";import{_ as Se}from"./BaseDropdown-741de69f.js";import{_ as $e}from"./BaseCalendar-84619332.js";import{_ as xl}from"./BaseMultiSelect-0654d9c1.js";import{f as he}from"./formatDate-06ca49c2.js";import"./qrcode.vue.esm-857c9c43.js";import"./Dropdown-763c0b4d.js";import"./menu.esm-8a87a2e7.js";/* empty css                                                 */import"./overlaypanel.esm-ce2aa75f.js";/* empty css                                                         */import"./avatar.esm-b29e8a3b.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-7052e7fb.js";import"./common.store-bce568a5.js";import{_ as Sl}from"./WithRadio-759623ef.js";import"./radiobutton.esm-8b5d4818.js";import"./checkbox.esm-e132dc71.js";import{_ as $l}from"./BaseBrickTab-e51b040c.js";import{_ as Ll}from"./BaseFileUpload-7302c572.js";import{_ as Cl}from"./BaseFroalaEditor-8cd0a3fa.js";import{_ as Rl}from"./BaseTinyEditor-f0bad6f3.js";import{_ as Dl}from"./BaseDialog-e1ea014a.js";import"./dayjs.min-9632e34a.js";import{_ as Tl}from"./WithSelectable-3fefb219.js";const Ol={class:"user-select"},X={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(p,{emit:a}){const o=p,l=z([]),w=xe(o,"modelValue"),i=async r=>{let{data:_}=await hl.get(`${o.apiUrl}/`,r);_.hasOwnProperty("results")?l.value=_.results:l.value=_};return Ee(async()=>{await i(o.apiParams)}),(r,_)=>(U(),H("div",Ol,[t(Se,{modelValue:e(w),"onUpdate:modelValue":_[0]||(_[0]=n=>Ve(w)?w.value=n:null),options:l.value,"onUpdate:options":_[1]||(_[1]=n=>l.value=n),error:o.error,"api-url":o.apiUrl,"api-params":o.apiParams,"option-label":"full_name",label:o.label,placeholder:o.placeholder,required:o.required,searchable:"","onEmit:change":_[2]||(_[2]=n=>a("emit:change",n))},{option:c(({option:n})=>[t(e(Tl),{items:[n]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var Pl=`
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
`,Il={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Xe.extend({name:"editor",css:Pl,classes:Il});(function(){try{return window.Quill}catch{return null}})();const be={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(p){return["froala","tiny"].includes(p)}}},emits:["update:modelValue","emit:fileUpload"],setup(p,{emit:a}){const o=p,l=xe(o,"modelValue"),w=z([{title:"text",slot:"editor",icon:Ze},{title:"file",slot:"file",icon:el}]);return(i,r)=>(U(),P($l,{"tab-panel-list":w.value,"panel-container-class":"px-0"},{editor:c(()=>[p.editor==="froala"?(U(),P(Cl,{key:0,modelValue:e(l),"onUpdate:modelValue":r[0]||(r[0]=_=>Ve(l)?l.value=_:null)},null,8,["modelValue"])):(U(),P(Rl,{key:1,modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=_=>Ve(l)?l.value=_:null)},null,8,["modelValue"]))]),file:c(()=>[we("div",{class:ll(o.fileUploadContainerClasses)},[t(Ll,{files:o.files,"onEmit:fileUpload":r[2]||(r[2]=_=>a("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},Nl={class:"flex flex-col justify-between h-full"},Fl={class:"px-6 py-4 overflow-y-auto"},Ml={class:"actions p-6"},_e={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(p,{emit:a}){return(o,l)=>{const w=Qe;return U(),H("div",Nl,[we("div",Fl,[We(o.$slots,"default")]),we("div",Ml,[t(w,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=i=>a("emit:clearForm"))}),t(w,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=i=>a("emit:preview"))})])])}}},zl=Q("sd-stores-inner",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=B().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,document_type:R.INNER,document_sub_type:T.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:A.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:f.withMessage("Поле не должен быть пустым",b)},content:{required:f.withMessage("Поле не должен быть пустым",b)},__departments:{required:f.withMessage("Поле не должен быть пустым",b)},__approvers:{},__signers:{required:f.withMessage("Поле не должен быть пустым",b)}}}},actions:{async actionCreateDocument(p){let a={...p,type:He,sub_type:He};this.buttonLoading=!0;const{response:o,error:l}=await de(ue,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):Promise.reject(l)},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await pe({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await Y(p);W(this.model,a),this.model.__approvers=await L(a.approvers),this.model.__signers=await L(a.signers),this.model.__departments=await wl(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Al={class:"font-semibold text-xl"},fe={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(p,{emit:a}){const l=xe(p,"modelValue"),{t:w}=J();return(i,r)=>{const _=Qe,n=Dl;return U(),P(n,{modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=u=>Ve(l)?l.value=u:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[we("span",Al,Je(e(w)("preview")),1)]),content:c(()=>[We(i.$slots,"content")]),footer:c(()=>[t(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(_,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:p.sendButtonLoading,onClick:r[0]||(r[0]=u=>a("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},zo={__name:"InnerForm",props:{formType:{type:String,default:E}},setup(p){const a=p,o=B(),l=zl();ke();const w=ce(),i=z(!1);z(null);const{t:r}=J(),_=le(),n=oe(),u=ae(l.rules,l.model),D=async()=>{await u.value.$validate()&&(i.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(s=>s.id),l.model.files=[],l.model.files=l.model.__files.map(s=>({id:s.id})),l.model.journal=A.INNER,l.model.sender=o.currentUser.top_level_department.id,l.model.approvers=j(l.model.__approvers),l.model.signers=j(l.model.__signers),l.model.document_type=n.params.document_type,l.model.document_sub_type=n.params.document_sub_type)},$=()=>{a.formType===E?C():I()},C=async()=>{const v=await l.actionCreateDocument(l.model);await w.actionCountList(),v?(i.value=!1,S(null,r("document-sent"),x.SUCCESS),await _.replace({name:me,query:{document_type:R.INNER}})):S(null,r("error-occurred"),x.ERROR)},I=async()=>{await l.actionUpdateDocument({id:n.params.id,body:l.model}),await w.actionCountList(),S(null,r("document-sent"),x.SUCCESS),await _.replace({name:qe,params:{id:n.params.id,document_type:R.INNER,document_sub_type:T.SERVICE_LETTER}})},N=()=>{console.log("Clear Form")},F=v=>{l.model.__files=[],v.forEach(s=>{l.model.__files.push(s)})};return Ee(async()=>{n.params.id&&await l.actionGetDocumentDetailForUpdate(n.params.id)}),te(()=>{se(l.model)}),(v,s)=>{const V=re,m=ee,d=ye,g=Z;return e(l).detailLoading?(U(),P(V,{key:0})):(U(),H(ne,{key:1},[t(e(ie),{title:a.formType===e(E)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[t(_e,{"onEmit:preview":D,"onEmit:clearForm":N},{default:c(()=>[t(g,null,{default:c(()=>[t(m,{"col-class":"w-1/2"},{default:c(()=>[t(sl,{modelValue:e(u).__departments.$model,"onUpdate:modelValue":s[0]||(s[0]=q=>e(u).__departments.$model=q),error:e(u).__departments},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(d,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":s[1]||(s[1]=q=>e(u).short_description.$model=q),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(u).__approvers.$model,"onUpdate:modelValue":s[2]||(s[2]=q=>e(u).__approvers.$model=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":s[3]||(s[3]=q=>e(u).__signers.$model=q),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:c(()=>[t(be,{modelValue:e(u).content.$model,"onUpdate:modelValue":s[4]||(s[4]=q=>e(u).content.$model=q),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:i.value,"onUpdate:modelValue":s[5]||(s[5]=q=>i.value=q),"send-button-loading":e(l).buttonLoading,"onEmit:send":$},{content:c(()=>{var q,y;return[t(cl,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(y=(q=e(o).currentUser)==null?void 0:q.top_level_department)==null?void 0:y.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},jl=Q("sd-store-application",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=B().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:f.withMessage("Поле не должен быть пустым",b)},__curator:{required:f.withMessage("Поле не должен быть пустым",b)},__approvers:{required:f.withMessage("Поле не должен быть пустым",b)},__signers:{}}}},actions:{async actionCreateDocument(p){let a={...p};this.buttonLoading=!0;const{response:o,error:l}=await de(ue,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await pe({id:p,body:a});return Promise.resolve(o)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await Y(p);W(this.model,a),this.model.__approvers=await L(a.approvers),this.model.__signers=await L(a.signers.filter(o=>o.type===ve.SIGNER)),this.model.__curator=await K([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Ke=Q("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:B().currentUser.company.id,curator:null,document_type:R.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:A.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:f.withMessage("Поле не должен быть пустым",b)},register_date:{required:f.withMessage("Поле не должен быть пустым",b)},content:{required:f.withMessage("Поле не должен быть пустым",b)},__negotiators:{required:f.withMessage("Поле не должен быть пустым",b)},__curator:{required:f.withMessage("Поле не должен быть пустым",b)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await de(ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await pe({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await Y(p);W(this.model,a),this.model.__signers=await L(a.signers.filter(o=>o.type!==ve.NEGOTIATOR)),this.model.__negotiators=await L(a.signers.filter(o=>o.type===ve.NEGOTIATOR)),this.model.__approvers=await L(a.approvers),this.model.__curator=await K([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),Ao={__name:"ApplicationForm",props:{formType:{type:String,default:E}},setup(p){const a=p,o=B(),l=jl();ke();const w=ce();Ke();const i=z(!1);z(null);const{t:r}=J(),_=le(),n=oe(),u=ae(l.rules,l.model),D=async()=>{var s,V,m,d,g;await u.value.$validate()&&(i.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(s=o==null?void 0:o.currentUser)==null?void 0:s.id}],l.model.sender=(m=(V=o==null?void 0:o.currentUser)==null?void 0:V.top_level_department)==null?void 0:m.id,l.model.curator=(g=(d=l==null?void 0:l.model)==null?void 0:d.__curator)==null?void 0:g.user_id,l.model.journal=A.APPLICATION,l.model.document_type=n.params.document_type,l.model.document_sub_type=n.params.document_sub_type,l.model.approvers=j(l.model.__approvers))},$=async()=>{},C=()=>{a.formType===E?I():N()},I=async()=>{const v=await l.actionCreateDocument(l.model);await w.actionCountList(),v?(i.value=!1,S(null,r("document-sent"),x.SUCCESS),await _.replace({name:me,query:{document_type:R.APPLICATION}})):S(null,r("error-occurred"),x.ERROR)},N=async()=>{await l.actionUpdateDocument({id:n.params.id,body:l.model}),await w.actionCountList(),S(null,r("document-sent"),x.SUCCESS),await _.replace({name:qe,params:{id:n.params.id,document_type:R.APPLICATION,document_sub_type:T.LABOR_LEAVE}})},F=v=>{l.model.__files=[],v.forEach(s=>{l.model.__files.push(s)})};return Ee(async()=>{n.params.id&&await l.actionGetDocumentDetailForUpdate(n.params.id)}),te(()=>{se(l.model)}),(v,s)=>{const V=re,m=ee,d=Z;return e(l).detailLoading?(U(),P(V,{key:0})):(U(),H(ne,{key:1},[t(e(ie),{title:a.formType===e(E)?"create-sd-application":"update-sd-application"},{content:c(()=>[t(_e,{"onEmit:preview":D,"onEmit:clearForm":$},{default:c(()=>[t(d,null,{default:c(()=>[t(m,{"col-class":"w-1/2"},{default:c(()=>[t(X,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=g=>e(u).__curator.$model=g),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(u).__approvers.$model,"onUpdate:modelValue":s[1]||(s[1]=g=>e(u).__approvers.$model=g),error:e(u).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":s[2]||(s[2]=g=>e(u).__signers.$model=g),disabled:"",label:"signers",placeholder:e(o).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(m,{"col-class":"w-full"},{default:c(()=>[t(be,{modelValue:e(u).content.$model,"onUpdate:modelValue":s[3]||(s[3]=g=>e(u).content.$model=g),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:i.value,"onUpdate:modelValue":s[4]||(s[4]=g=>i.value=g),"send-button-loading":e(l).buttonLoading,"onEmit:send":C},{content:c(()=>[t(pl,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:a.formType===e(E)?e(o).currentUser:e(l).model.__signers[0].user,signers:a.formType===e(E)?[e(o).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Bl=Q("sd-notice-store",{state:()=>(B(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:R.NOTICE,document_sub_type:T.BUSINESS_TRIP,journal:A.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:f.withMessage("Поле не должен быть пустым",b)},start_date:{required:f.withMessage("Поле не должен быть пустым",b)},route:{required:f.withMessage("Поле не должен быть пустым",b)},content:{required:f.withMessage("Поле не должен быть пустым",b)},__companies:{required:f.withMessage("Поле не должен быть пустым",b)},__curator:{required:f.withMessage("Поле не должен быть пустым",b)},__employees:{required:f.withMessage("Поле не должен быть пустым",b)},__signers:{required:f.withMessage("Поле не должен быть пустым",b)},__tags:{required:f.withMessage("Поле не должен быть пустым",b)},short_description:{required:f.withMessage("Поле не должен быть пустым",b)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await de(ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await pe({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,a=!1){try{this.detailLoading=!0;const{data:o}=await Y(p);W(this.model,o),this.model.__companies=[],this.model.__curator=await K([],o.curator.id,!1),this.model.__employees=await L(o.notices),a?(this.model.__approvers=await L(o.approvers.filter(l=>{var w,i;return((w=l==null?void 0:l.user)==null?void 0:w.id)!==((i=o==null?void 0:o.curator)==null?void 0:i.assistant)})),this.model.register_number=null):this.model.__approvers=await L(o.approvers),this.model.__signers=await L(o.signers),this.model.__companies=await Ge(o.notices[0].destinations),this.model.__tags=await Ye(o.tags),this.model.start_date=o.notices[0].start_date,this.model.end_date=o.notices[0].end_date,this.model.__tags=o.tags,this.model.route=o.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(p,a){try{this.detailLoading=!0;const{data:o}=await Y(p),l=await Y(a);W(this.model,o),this.model.__companies=[],this.model.__curator=await K([],o.curator.id,!1),this.model.__employees=await L(l.data.notices),this.model.__approvers=await L(o.approvers),this.model.__signers=await L(o.signers),this.model.__companies=await Ge(l.data.notices[0].destinations),this.model.__tags=await Ye(o.tags),this.model.start_date=l.data.notices[0].start_date,this.model.end_date=l.data.notices[0].end_date,this.model.__tags=o.tags,this.model.route=l.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),Gl={class:"flex w-full gap-x-4"},jo={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:E}},setup(p){const a=p,{t:o}=J(),l=oe(),w=le(),i=B(),r=Bl(),_=ce();ke();const n=ae(r.rules,r.model),u=z(!1),D=ge(()=>{const m=a.formType===E,d=l.params.document_sub_type;return d===T.BUSINESS_TRIP_DECREE_LOCAL?m?"create-decree":"update-decree":d===T.BUSINESS_TRIP_ORDER_LOCAL?m?"create-order":"update-order":m?"create-business-trip-notice":"update-business-trip-notice"}),$=ge(()=>{var m,d;return l.params.document_sub_type===T.BUSINESS_TRIP_DECREE_LOCAL&&((m=l==null?void 0:l.query)==null?void 0:m.compose_id)&&((d=l==null?void 0:l.query)==null?void 0:d.document_sub_type)===T.BUSINESS_TRIP}),C=ge(()=>{var m;return!!(l.params.document_sub_type===T.BUSINESS_TRIP_DECREE_LOCAL&&((m=r==null?void 0:r.model)!=null&&m.trip_notice_id))});ol(()=>r.model.__tags,m=>{if(a.formType===E)if(m&&m.length){let d=`${m.map(g=>g.name_uz).join(", ")} yuzasidan`;r.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else r.model.short_description=null});const I=async()=>{var d,g,q,y,G;await n.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=j(r.model.__approvers),r.model.signers=j(r.model.__signers),r.model.curator=(g=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:g.user_id,r.model.journal=l.params.document_type===R.DECREE||l.params.document_type===R.ORDER?A.ORDERS_PROTOCOLS:A.INNER,r.model.company=i.currentUser.company.id,r.model.notices=r.model.__employees.map(M=>({start_date:r.model.start_date,end_date:r.model.end_date,user:M.id,route:r.model.route,companies:r.model.__companies.map(k=>k.id)})),r.model.sender=(y=(q=i==null?void 0:i.currentUser)==null?void 0:q.top_level_department)==null?void 0:y.id,r.model.tags=r.model.__tags.map(M=>({id:M.id})),r.model.files=r.model.__files.map(M=>({id:M.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,$.value&&(r.model.trip_notice_id=(G=l==null?void 0:l.query)==null?void 0:G.compose_id),u.value=!0)},N=()=>{},F=m=>{r.model.__files=[],m.forEach(d=>{r.model.__files.push(d)})},v=async()=>{$.value&&(r.model.notices=[]);const m=await r.actionCreateDocument(r.model);await _.actionCountList(),m?(u.value=!1,S(null,o("document-sent"),x.SUCCESS),await w.replace({name:me,query:{document_type:l.params.document_sub_type===T.BUSINESS_TRIP_DECREE_LOCAL?R.DECREE:l.params.document_sub_type===T.BUSINESS_TRIP_ORDER_LOCAL?R.ORDER:R.NOTICE}})):S(null,o("error-occurred"),x.ERROR)},s=async()=>{($.value||C.value)&&(r.model.notices=[]),await r.actionUpdateDocument({id:l.params.id,body:r.model}),await _.actionCountList(),S(null,o("changed"),x.SUCCESS),await w.replace({name:qe,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},V=()=>{a.formType===E?v():s()};return Ue(async()=>{l.params.id&&l.query.trip_notice_id&&l.params.document_sub_type===T.BUSINESS_TRIP_DECREE_LOCAL?await r.actionGetDocumentDetailForUpdateForCustomUse(l.params.id,l.query.trip_notice_id):l.params.id?await r.actionGetDocumentDetailForUpdate(l.params.id):$.value&&await r.actionGetDocumentDetailForUpdate(l.query.compose_id,!0)}),te(()=>{se(r.model)}),(m,d)=>{const g=re,q=ee,y=$e,G=Se,M=ye,k=Z;return e(r).detailLoading?(U(),P(g,{key:0})):(U(),H(ne,{key:1},[t(e(ie),{title:D.value},{content:c(()=>[t(_e,{"onEmit:preview":I,"onEmit:clearForm":N},{default:c(()=>[t(k,null,{default:c(()=>[t(q,{"col-class":"w-1/2"},{default:c(()=>[t(X,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=h=>e(n).__curator.$model=h),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(n).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=h=>e(n).__employees.$model=h),error:e(n).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:$.value||C.value},null,8,["modelValue","error","disabled"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(dl,{modelValue:e(n).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=h=>e(n).__companies.$model=h),error:e(n).__companies,"text-truncate":"",disabled:$.value||C.value},null,8,["modelValue","error","disabled"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(xl,{modelValue:e(n).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=h=>e(n).__tags.$model=h),error:e(n).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:h})=>[tl(Je(h.name),1)]),option:c(({value:h})=>[t(e(Sl),{title:h.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[we("div",Gl,[t(y,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=h=>e(n).start_date.$model=h),d[5]||(d[5]=h=>e(n).start_date.$model=e(he)(h))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:$.value||C.value},null,8,["modelValue","error","min-date","disabled"]),t(y,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=h=>e(n).end_date.$model=h),d[7]||(d[7]=h=>e(n).end_date.$model=e(he)(h))],error:e(n).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:$.value||C.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(n).route.$model,"onUpdate:modelValue":d[8]||(d[8]=h=>e(n).route.$model=h),error:e(n).route,options:e(nl),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:$.value||C.value},null,8,["modelValue","error","options","disabled"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=h=>e(r).model.__approvers=h),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=h=>e(n).__signers.$model=h),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(M,{modelValue:e(n).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=h=>e(n).short_description.$model=h),error:e(n).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(q,{"col-class":"w-full"},{default:c(()=>[t(be,{modelValue:e(n).content.$model,"onUpdate:modelValue":d[12]||(d[12]=h=>e(n).content.$model=h),error:e(n).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:u.value,"onUpdate:modelValue":d[13]||(d[13]=h=>u.value=h),"send-button-loading":e(r).buttonLoading,"onEmit:send":V},{content:c(()=>[e(l).params.document_sub_type===e(T).BUSINESS_TRIP_DECREE_LOCAL?(U(),P(e(ul),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(T).BUSINESS_TRIP_ORDER_LOCAL?(U(),P(e(ml),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(U(),P(e(ql),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},Bo={__name:"OrderForm",props:{formType:{type:String,default:E}},setup(p){const a=p,o=Ke(),l=ce(),w=B(),i=oe(),r=le(),_=ae(o.rules,o.model),{t:n}=J(),u=z(!1),D=async()=>{var s,V,m,d;await _.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=j(o.model.__approvers),o.model.curator=(V=(s=o==null?void 0:o.model)==null?void 0:s.__curator)==null?void 0:V.user_id,o.model.sender=(d=(m=w==null?void 0:w.currentUser)==null?void 0:m.top_level_department)==null?void 0:d.id,o.model.files=o.model.__files.map(g=>({id:g.id})),o.model.document_type=i.params.document_type,o.model.document_sub_type=i.params.document_sub_type,o.model.journal=A.ORDERS_PROTOCOLS,o.model.register_date=he(o.model.register_date),o.model.__negotiators.forEach(g=>{o.model.signers.push(g.hasOwnProperty("user")?{id:g.id,user:g.user.id,type:ve.NEGOTIATOR}:{user:g.id,type:ve.NEGOTIATOR})}),i.query.compose_id&&(o.model.trip_notice_id=i.query.compose_id),u.value=!0)},$=()=>{},C=async()=>{try{const v=await o.actionCreateDocument(o.model);await l.actionCountList(),v&&(u.value=!1,S(null,n("document-sent"),x.SUCCESS),await r.replace({name:me,query:{document_type:R.ORDER}}))}catch{S(null,n("error-occurred"),x.ERROR)}},I=async()=>{try{const v=await o.actionUpdateDocument({id:i.params.id,body:o.model});await l.actionCountList(),S(null,n("changed"),x.SUCCESS),await r.replace({name:qe,params:{id:i.params.id,document_type:i.params.document_type,document_sub_type:i.params.document_sub_type}})}catch{S(null,n("error-occurred"),x.ERROR)}},N=()=>{a.formType===E?C():I()},F=v=>{o.model.__files=[],v.forEach(s=>{o.model.__files.push(s)})};return Ee(async()=>{i.params.id&&await o.actionGetDocumentDetailForUpdate(i.params.id)}),te(()=>{se(o.model)}),(v,s)=>{const V=re,m=ee,d=ye,g=$e,q=Z;return e(o).detailLoading?(U(),P(V,{key:0})):(U(),H(ne,{key:1},[t(e(ie),{title:a.formType===e(E)?"create-order":"update-order"},{content:c(()=>[t(_e,{"onEmit:preview":D,"onEmit:clearForm":$},{default:c(()=>[t(q,null,{default:c(()=>[t(m,{"col-class":"w-1/2"},{default:c(()=>[t(X,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=y=>e(_).__curator.$model=y),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(i).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(d,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":s[1]||(s[1]=y=>e(_).register_number.$model=y),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(g,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":s[2]||(s[2]=y=>e(_).register_date.$model=y),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":s[3]||(s[3]=y=>e(o).model.__approvers=y),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":s[4]||(s[4]=y=>e(_).__negotiators.$model=y),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:c(()=>[t(be,{modelValue:e(_).content.$model,"onUpdate:modelValue":s[5]||(s[5]=y=>e(_).content.$model=y),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:u.value,"onUpdate:modelValue":s[6]||(s[6]=y=>u.value=y),"send-button-loading":e(o).buttonLoading,"onEmit:send":N},{content:c(()=>[t(e(_l),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Yl=Q("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:f.withMessage("Поле не должен быть пустым",b)},__curator:{required:f.withMessage("Поле не должен быть пустым",b)},__signers:{required:f.withMessage("Поле не должен быть пустым",b)},short_description:{required:f.withMessage("Поле не должен быть пустым",b)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await de(ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await pe({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await Y(p);W(this.model,a),this.model.__curator=await K([],a.curator.id,!1),this.model.__approvers=await L(a.approvers),this.model.__signers=await L(a.signers)}catch{}finally{this.detailLoading=!1}}}}),Go={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:E}},setup(p){const a=p,{t:o}=J(),l=oe(),w=le(),i=B(),r=Yl(),_=ce();ke();const n=z(!1),u=ae(r.rules,r.model),D=async()=>{var s,V,m,d;await u.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=j(r.model.__approvers),r.model.signers=j(r.model.__signers),r.model.curator=(V=(s=r==null?void 0:r.model)==null?void 0:s.__curator)==null?void 0:V.user_id,r.model.journal=A.INNER,r.model.company=i.currentUser.company.id,r.model.sender=(d=(m=i==null?void 0:i.currentUser)==null?void 0:m.top_level_department)==null?void 0:d.id,r.model.files=r.model.__files.map(g=>({id:g.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,n.value=!0)},$=()=>{},C=v=>{r.model.__files=[],v.forEach(s=>{r.model.__files.push(s)})},I=async()=>{const v=await r.actionCreateDocument(r.model);await _.actionCountList(),v?(n.value=!1,S(null,o("document-sent"),x.SUCCESS),await w.replace({name:me,query:{document_type:R.NOTICE}})):S(null,o("error-occurred"),x.ERROR)},N=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await _.actionCountList(),S(null,o("changed"),x.SUCCESS),await w.replace({name:qe,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},F=()=>{a.formType===E?I():N()};return Ue(async()=>{l.params.id&&await r.actionGetDocumentDetailForUpdate(l.params.id)}),te(()=>{se(r.model)}),(v,s)=>{const V=re,m=ee,d=ye,g=Z;return e(r).detailLoading?(U(),P(V,{key:0})):(U(),H(ne,{key:1},[t(e(ie),{title:a.formType===e(E)?"create-notice":"update-notice"},{content:c(()=>[t(_e,{"onEmit:preview":D,"onEmit:clearForm":$},{default:c(()=>[t(g,null,{default:c(()=>[t(m,{"col-class":"w-1/2"},{default:c(()=>[t(X,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=q=>e(u).__curator.$model=q),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(d,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":s[1]||(s[1]=q=>e(u).short_description.$model=q),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":s[2]||(s[2]=q=>e(r).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":s[3]||(s[3]=q=>e(u).__signers.$model=q),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:c(()=>[t(be,{modelValue:e(u).content.$model,"onUpdate:modelValue":s[4]||(s[4]=q=>e(u).content.$model=q),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":C},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:n.value,"onUpdate:modelValue":s[5]||(s[5]=q=>n.value=q),"send-button-loading":e(r).buttonLoading,"onEmit:send":F},{content:c(()=>[t(e(fl),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Hl=Q("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:f.withMessage("Поле не должен быть пустым",b)},__curator:{required:f.withMessage("Поле не должен быть пустым",b)},__signers:{required:f.withMessage("Поле не должен быть пустым",b)},short_description:{required:f.withMessage("Поле не должен быть пустым",b)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await de(ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await pe({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await Y(p);W(this.model,a),this.model.__curator=await K([],a.curator.id,!1),this.model.__approvers=await L(a.approvers),this.model.__signers=await L(a.signers)}catch{}finally{this.detailLoading=!1}}}}),Yo={__name:"DecreeForm",props:{formType:{type:String,default:E}},setup(p){const a=p,{t:o}=J(),l=oe(),w=le(),i=B(),r=ce();ke();const _=z(!1),n=Hl(),u=ae(n.rules,n.model),D=async()=>{var s,V,m,d;await u.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=j(n.model.__approvers),n.model.signers=j(n.model.__signers),n.model.curator=(V=(s=n==null?void 0:n.model)==null?void 0:s.__curator)==null?void 0:V.user_id,n.model.journal=A.ORDERS_PROTOCOLS,n.model.company=i.currentUser.company.id,n.model.sender=(d=(m=i==null?void 0:i.currentUser)==null?void 0:m.top_level_department)==null?void 0:d.id,n.model.files=n.model.__files.map(g=>({id:g.id})),n.model.document_type=l.params.document_type,n.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(n.model.trip_notice_id=l.query.compose_id),_.value=!0)},$=()=>{},C=v=>{n.model.__files=[],v.forEach(s=>{n.model.__files.push(s)})},I=async()=>{const v=await n.actionCreateDocument(n.model);await r.actionCountList(),v?(_.value=!1,S(null,o("document-sent"),x.SUCCESS),await w.replace({name:me,query:{document_type:l.params.document_type}})):S(null,o("error-occurred"),x.ERROR)},N=async()=>{await n.actionUpdateDocument({id:l.params.id,body:n.model}),await r.actionCountList(),S(null,o("changed"),x.SUCCESS),await w.replace({name:qe,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},F=()=>{a.formType===E?I():N()};return Ue(async()=>{l.params.id&&await n.actionGetDocumentDetailForUpdate(l.params.id)}),te(()=>{se(n.model)}),(v,s)=>{const V=re,m=ee,d=ye,g=Z;return e(n).detailLoading?(U(),P(V,{key:0})):(U(),H(ne,{key:1},[t(e(ie),{title:a.formType===e(E)?"create-decree":"update-decree"},{content:c(()=>[t(_e,{"onEmit:preview":D,"onEmit:clearForm":$},{default:c(()=>[t(g,null,{default:c(()=>[t(m,{"col-class":"w-1/2"},{default:c(()=>[t(X,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=q=>e(u).__curator.$model=q),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(d,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":s[1]||(s[1]=q=>e(u).short_description.$model=q),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":s[2]||(s[2]=q=>e(n).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":s[3]||(s[3]=q=>e(u).__signers.$model=q),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:c(()=>[t(be,{modelValue:e(u).content.$model,"onUpdate:modelValue":s[4]||(s[4]=q=>e(u).content.$model=q),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":C},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:_.value,"onUpdate:modelValue":s[5]||(s[5]=q=>_.value=q),"send-button-loading":e(n).buttonLoading,"onEmit:send":F},{content:c(()=>[t(e(bl),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Wl=Q("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:f.withMessage("Поле не должен быть пустым",b)},start_date:{required:f.withMessage("Поле не должен быть пустым",b)},__curator:{required:f.withMessage("Поле не должен быть пустым",b)},__signers:{required:f.withMessage("Поле не должен быть пустым",b)},__user:{required:f.withMessage("Поле не должен быть пустым",b)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await de(ue,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await Y(p);return W(this.model,a),this.model.__curator=await K([],a.curator.id,!1),this.model.__approvers=await L(a.approvers),this.model.__signers=await L(a.signers),this.model.__user=await vl("users/personal-information",[],!1,a.user.id),this.model.__parent=a.parent,Promise.resolve(a)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await pe({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}}}}),Ho={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:E}},setup(p){const a=p,o=oe(),l=le(),w=B(),i=Wl();yl();const r=ce(),{t:_}=J(),n=ae(i.rules,i.model),u=z(!1),D=z([]),$=ge(()=>a.formType===E?"create-poa":"update-poa"),C=ge(()=>i.model.start_date?new Date(i.model.start_date):new Date),I=async()=>{var d,g,q,y,G,M,k,h,Le,Ce,Re,De,Te,Oe,Pe,Ie,Ne,Fe,Me,ze;if(await n.value.$validate()){if(i.model.approvers=[],i.model.signers=[],i.model.approvers=j(i.model.__approvers),i.model.signers=j(i.model.__signers),i.model.curator=(g=(d=i==null?void 0:i.model)==null?void 0:d.__curator)==null?void 0:g.user_id,i.model.user=(y=(q=i==null?void 0:i.model)==null?void 0:q.__user)==null?void 0:y.id,i.model.journal=A.POWER_OF_ATTORNEY,i.model.company=(M=(G=w.currentUser)==null?void 0:G.company)==null?void 0:M.id,i.model.sender=(h=(k=w==null?void 0:w.currentUser)==null?void 0:k.top_level_department)==null?void 0:h.id,i.model.document_type=o.params.document_type,i.model.document_sub_type=o.params.document_sub_type,i.model.content=".",i.model.parent=(Ce=(Le=i.model)==null?void 0:Le.__parent)==null?void 0:Ce.id,!((De=(Re=i==null?void 0:i.model)==null?void 0:Re.__user)!=null&&De.passport_seria||(Oe=(Te=i==null?void 0:i.model)==null?void 0:Te.__user)!=null&&Oe.passport_number||(Ie=(Pe=i==null?void 0:i.model)==null?void 0:Pe.__user)!=null&&Ie.passport_issue_date||(Fe=(Ne=i==null?void 0:i.model)==null?void 0:Ne.__user)!=null&&Fe.passport_issued_by)){S(null,`${(ze=(Me=i.model)==null?void 0:Me.__user)==null?void 0:ze.full_name}: ${_("passport-details-error")}`,x.WARNING);return}u.value=!0}},N=()=>{},F=async()=>{const m=await i.actionCreateDocument(i.model);await r.actionCountList(),m?(u.value=!1,S(null,_("document-sent"),x.SUCCESS),await l.replace({name:me,query:{document_type:R.POWER_OF_ATTORNEY}})):S(null,_("error-occurred"),x.ERROR)},v=async()=>{await i.actionUpdateDocument({id:o.params.id,body:i.model}),await r.actionCountList(),S(null,_("changed"),x.SUCCESS),await l.replace({name:qe,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},s=()=>{a.formType===E?F():v()},V=async m=>{const{data:d}=await kl({user:m.id,document_sub_type:o.params.document_sub_type,status:5});D.value=d.results};return Ue(async()=>{if(o.params.id){const m=await i.actionGetDocumentDetailForUpdate(o.params.id);m.parent&&(D.value=[m.parent])}}),te(()=>{se(i.model)}),(m,d)=>{const g=re,q=ee,y=$e,G=Se,M=Z;return e(i).detailLoading?(U(),P(g,{key:0})):(U(),H(ne,{key:1},[t(e(ie),{title:$.value},{content:c(()=>[t(_e,{"onEmit:preview":I,"onEmit:clearForm":N},{default:c(()=>[t(M,null,{default:c(()=>[t(q,{"col-class":"w-1/2"},{default:c(()=>[t(X,{modelValue:e(n).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=k=>e(n).__curator.$model=k),error:e(n).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(X,{modelValue:e(n).__user.$model,"onUpdate:modelValue":d[1]||(d[1]=k=>e(n).__user.$model=k),error:e(n).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":d[2]||(d[2]=k=>V(k))},null,8,["modelValue","error"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(y,{modelValue:e(n).start_date.$model,"onUpdate:modelValue":[d[3]||(d[3]=k=>e(n).start_date.$model=k),d[4]||(d[4]=k=>e(n).start_date.$model=e(he)(k))],error:e(n).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(y,{modelValue:e(n).end_date.$model,"onUpdate:modelValue":[d[5]||(d[5]=k=>e(n).end_date.$model=k),d[6]||(d[6]=k=>e(n).end_date.$model=e(he)(k))],error:e(n).end_date,"min-date":C.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(i).model.__approvers,"onUpdate:modelValue":d[7]||(d[7]=k=>e(i).model.__approvers=k),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(O,{modelValue:e(n).__signers.$model,"onUpdate:modelValue":d[8]||(d[8]=k=>e(n).__signers.$model=k),error:e(n).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:c(()=>[t(G,{modelValue:e(i).model.__parent,"onUpdate:modelValue":d[9]||(d[9]=k=>e(i).model.__parent=k),options:D.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:u.value,"onUpdate:modelValue":d[10]||(d[10]=k=>u.value=k),"send-button-loading":e(i).buttonLoading,"onEmit:send":s},{content:c(()=>[t(gl,{"compose-model":e(i).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};Q("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:R.NOTICE,document_sub_type:T.BUSINESS_TRIP,journal:A.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:f.withMessage("Поле не должен быть пустым",b)},start_date:{required:f.withMessage("Поле не должен быть пустым",b)},route:{required:f.withMessage("Поле не должен быть пустым",b)},content:{required:f.withMessage("Поле не должен быть пустым",b)},__companies:{required:f.withMessage("Поле не должен быть пустым",b)},__curator:{required:f.withMessage("Поле не должен быть пустым",b)},__employees:{required:f.withMessage("Поле не должен быть пустым",b)},__signers:{required:f.withMessage("Поле не должен быть пустым",b)},__tags:{required:f.withMessage("Поле не должен быть пустым",b)},short_description:{required:f.withMessage("Поле не должен быть пустым",b)}},stepperItems:[{id:1,label:"trip-info",icon:rl,active:!0,value:Vl},{id:2,label:"work-plan",icon:al,active:!1,value:El},{id:3,label:"route",icon:il,active:!1,value:Ul}],routeTabItems:[{id:1,title:"airplane",icon:Ae,active:!0},{id:2,title:"train",icon:je,active:!1},{id:3,title:"taxi",icon:Be,active:!1}],routeTypeTabItems:[{id:1,title:"there-back",icon:Ae,active:!0},{id:2,title:"complex-route",icon:je,active:!1},{id:3,title:"one-way",icon:Be,active:!1}]})});export{Ao as _,jo as a,Ho as b,zo as c,Bo as d,Go as e,Yo as f};
