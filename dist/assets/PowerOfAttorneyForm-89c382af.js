import{_ as Z}from"./BaseRow-68110f8f.js";import{_ as ye}from"./BaseInput-2899e372.js";import{_ as K}from"./BaseCol-a1f4ca85.js";import{v as z,bZ as Ee,a6 as Ue,o as U,c as B,i as t,z as d,h as e,ba as Ve,B as Be,d2 as Ye,cP as He,f as T,a as we,n as We,r as ze,G as Me,aC as X,c0 as C,c1 as D,bP as M,u as H,t as Ae,b as ee,ay as le,cn as oe,F as te,aa as x,an as ne,cY as ve,d as ge,aE as Je,cg as xe,a8 as Qe,d3 as Ze}from"./index-3b56d048.js";import{c as h,r as y,u as re}from"./index-0106c3dc.js";import{_ as Ke,a as Xe}from"./BranchMultiSelect-4be09609.js";import{_ as ae,b as el,a as ll,g as ol,h as tl,c as nl,d as rl,e as al,f as il,i as sl}from"./BasePOA-39a9e671.js";import"./BaseTabMenu-5bc7d6f7.js";import"./dialog.esm-e702c462.js";import"./tabpanel.esm-d835a896.js";import{s as Y,S,V as dl,W as ie,X as I,Y as J,Z as Ne,_ as Fe,$ as cl}from"./index-6290cfdd.js";import"./BaseTabView-1c9403ba.js";import"./FileTabs-9ea27561.js";import{_ as R}from"./UserMultiSelect-614897a5.js";import{c as pl,u as A,w as se,d as E}from"./axios.config-e7cce331.js";import{u as ke}from"./common-27be701f.js";import{u as de}from"./count.store-3c543820.js";import{f as ce,a as G,b as pe}from"./index.store-26d4c2e0.js";import{d as Ie,e as ue,c as me}from"./index-c4c1f2d4.js";import{F as V}from"./constants-5c471c97.js";import{_ as je}from"./BaseDropdown-34b63ef5.js";import{_ as $e}from"./BaseCalendar-023547d8.js";import{_ as ul}from"./BaseMultiSelect-6c4eeee2.js";import{f as he}from"./formatDate-4ae27d1f.js";import"./qrcode.vue.esm-ecbbe834.js";import{c as ml}from"./Dropdown-2f99a183.js";import"./menu.esm-627f92f2.js";/* empty css                                                 */import"./avatar.esm-e38054e7.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-494eb5d7.js";import"./common.store-8b8d4855.js";import{_ as ql}from"./WithRadio-c319c3a5.js";import"./radiobutton.esm-f8d59ab8.js";import"./checkbox.esm-3711d584.js";import{_ as _l}from"./BaseBrickTab-041aac45.js";import{_ as fl}from"./BaseFileUpload-f6780ea0.js";import{_ as bl}from"./BaseFroalaEditor-887b1ac5.js";import{_ as gl}from"./BaseDialog-1d428e39.js";import"./dayjs.min-763b998a.js";import{_ as wl}from"./WithSelectable-9629c40c.js";const vl={class:"user-select"},Q={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(c,{emit:a}){const o=c,l=z([]),w=Ee(o,"modelValue"),s=async n=>{let{data:_}=await pl.get(`${o.apiUrl}/`,n);_.hasOwnProperty("results")?l.value=_.results:l.value=_};return Ue(async()=>{await s(o.apiParams)}),(n,_)=>(U(),B("div",vl,[t(je,{modelValue:e(w),"onUpdate:modelValue":_[0]||(_[0]=r=>Ve(w)?w.value=r:null),options:l.value,"onUpdate:options":_[1]||(_[1]=r=>l.value=r),error:o.error,"api-url":o.apiUrl,"api-params":o.apiParams,"option-label":"full_name",label:o.label,placeholder:o.placeholder,required:o.required,searchable:""},{option:d(({option:r})=>[t(e(wl),{items:[r]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var hl=`
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
`,yl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Be.extend({name:"editor",css:hl,classes:yl});(function(){try{return window.Quill}catch{return null}})();const be={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(c){return["froala","tiny"].includes(c)}}},emits:["update:modelValue","emit:fileUpload"],setup(c,{emit:a}){const o=c,l=Ee(o,"modelValue"),w=z([{title:"text",slot:"editor",icon:Ye},{title:"file",slot:"file",icon:He}]);return(s,n)=>(U(),T(_l,{"tab-panel-list":w.value,"panel-container-class":"px-0"},{editor:d(()=>[c.editor==="froala"?(U(),T(bl,{key:0,modelValue:e(l),"onUpdate:modelValue":n[0]||(n[0]=_=>Ve(l)?l.value=_:null)},null,8,["modelValue"])):(U(),T(ml,{key:1,modelValue:e(l),"onUpdate:modelValue":n[1]||(n[1]=_=>Ve(l)?l.value=_:null)},null,8,["modelValue"]))]),file:d(()=>[we("div",{class:We(o.fileUploadContainerClasses)},[t(fl,{files:o.files,"onEmit:fileUpload":n[2]||(n[2]=_=>a("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},kl={class:"flex flex-col justify-between h-full"},Vl={class:"px-6 py-4 overflow-y-auto"},Ul={class:"actions p-6"},qe={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(c,{emit:a}){return(o,l)=>{const w=Me;return U(),B("div",kl,[we("div",Vl,[ze(o.$slots,"default")]),we("div",Ul,[t(w,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=s=>a("emit:clearForm"))}),t(w,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=s=>a("emit:preview"))})])])}}},xl=X("sd-stores-inner",{state:()=>{var c,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(c=A().currentUser)==null?void 0:c.company)==null?void 0:a.id,content:null,document_type:C.INNER,document_sub_type:D.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:M.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:h.withMessage("Поле не должен быть пустым",y)},content:{required:h.withMessage("Поле не должен быть пустым",y)},__departments:{required:h.withMessage("Поле не должен быть пустым",y)},__approvers:{},__signers:{required:h.withMessage("Поле не должен быть пустым",y)}}}},actions:{async actionCreateDocument(c){let a={...c,type:Ie,sub_type:Ie};this.buttonLoading=!0;const{response:o,error:l}=await se(pe,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):Promise.reject(l)},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await G(c);Y(this.model,a),this.model.__approvers=await S(a.approvers),this.model.__signers=await S(a.signers),this.model.__departments=await dl(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),El={class:"font-semibold text-xl"},_e={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(c,{emit:a}){const l=Ee(c,"modelValue"),{t:w}=H();return(s,n)=>{const _=Me,r=gl;return U(),T(r,{modelValue:e(l),"onUpdate:modelValue":n[1]||(n[1]=p=>Ve(l)?l.value=p:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[we("span",El,Ae(e(w)("preview")),1)]),content:d(()=>[ze(s.$slots,"content")]),footer:d(()=>[t(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(_,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:c.sendButtonLoading,onClick:n[0]||(n[0]=p=>a("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},ko={__name:"InnerForm",props:{formType:{type:String,default:V}},setup(c){const a=c,o=A(),l=xl();ke();const w=de(),s=z(!1);z(null);const{t:n}=H(),_=ee(),r=le(),p=re(l.rules,l.model),O=async()=>{await p.value.$validate()&&(s.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(i=>i.id),l.model.files=[],l.model.files=l.model.__files.map(i=>({id:i.id})),l.model.journal=M.INNER,l.model.sender=o.currentUser.top_level_department.id,l.model.approvers=I(l.model.__approvers),l.model.signers=I(l.model.__signers),l.model.document_type=r.params.document_type,l.model.document_sub_type=r.params.document_sub_type)},$=()=>{a.formType===V?L():P()},L=async()=>{const v=await l.actionCreateDocument(l.model);await w.actionCountList(),v?(s.value=!1,E(null,n("document-sent"),x.SUCCESS),await _.replace({name:ue,query:{document_type:C.INNER}})):E(null,n("error-occurred"),x.ERROR)},P=async()=>{await l.actionUpdateDocument({id:r.params.id,body:l.model}),await w.actionCountList(),E(null,n("document-sent"),x.SUCCESS),await _.replace({name:me,params:{id:r.params.id,document_type:C.INNER,document_sub_type:D.SERVICE_LETTER}})},N=()=>{console.log("Clear Form")},F=v=>{l.model.__files=[],v.forEach(i=>{l.model.__files.push(i)})};return Ue(async()=>{r.params.id&&await l.actionGetDocumentDetailForUpdate(r.params.id)}),oe(()=>{ie(l.model)}),(v,i)=>{const f=ne,m=K,u=ye,b=Z;return e(l).detailLoading?(U(),T(f,{key:0})):(U(),B(te,{key:1},[t(e(ae),{title:a.formType===e(V)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[t(qe,{"onEmit:preview":O,"onEmit:clearForm":N},{default:d(()=>[t(b,null,{default:d(()=>[t(m,{"col-class":"w-1/2"},{default:d(()=>[t(Ke,{modelValue:e(p).__departments.$model,"onUpdate:modelValue":i[0]||(i[0]=q=>e(p).__departments.$model=q),error:e(p).__departments},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(u,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=q=>e(p).short_description.$model=q),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":i[2]||(i[2]=q=>e(p).__approvers.$model=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=q=>e(p).__signers.$model=q),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:d(()=>[t(be,{modelValue:e(p).content.$model,"onUpdate:modelValue":i[4]||(i[4]=q=>e(p).content.$model=q),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(_e,{modelValue:s.value,"onUpdate:modelValue":i[5]||(i[5]=q=>s.value=q),"send-button-loading":e(l).buttonLoading,"onEmit:send":$},{content:d(()=>{var q,g;return[t(el,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(g=(q=e(o).currentUser)==null?void 0:q.top_level_department)==null?void 0:g.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},$l=X("sd-store-application",{state:()=>{var c,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(c=A().currentUser)==null?void 0:c.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",y)},__curator:{required:h.withMessage("Поле не должен быть пустым",y)},__approvers:{required:h.withMessage("Поле не должен быть пустым",y)},__signers:{}}}},actions:{async actionCreateDocument(c){let a={...c};this.buttonLoading=!0;const{response:o,error:l}=await se(pe,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await G(c);Y(this.model,a),this.model.__approvers=await S(a.approvers),this.model.__signers=await S(a.signers.filter(o=>o.type===ve.SIGNER)),this.model.__curator=await J([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),Ge=X("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:A().currentUser.company.id,curator:null,document_type:C.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:M.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",y)},register_date:{required:h.withMessage("Поле не должен быть пустым",y)},content:{required:h.withMessage("Поле не должен быть пустым",y)},__negotiators:{required:h.withMessage("Поле не должен быть пустым",y)},__curator:{required:h.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await se(pe,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await G(c);Y(this.model,a),this.model.__signers=await S(a.signers.filter(o=>o.type!==ve.NEGOTIATOR)),this.model.__negotiators=await S(a.signers.filter(o=>o.type===ve.NEGOTIATOR)),this.model.__approvers=await S(a.approvers),this.model.__curator=await J([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),Vo={__name:"ApplicationForm",props:{formType:{type:String,default:V}},setup(c){const a=c,o=A(),l=$l();ke();const w=de();Ge();const s=z(!1);z(null);const{t:n}=H(),_=ee(),r=le(),p=re(l.rules,l.model),O=async()=>{var i,f,m,u,b;await p.value.$validate()&&(s.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(i=o==null?void 0:o.currentUser)==null?void 0:i.id}],l.model.sender=(m=(f=o==null?void 0:o.currentUser)==null?void 0:f.top_level_department)==null?void 0:m.id,l.model.curator=(b=(u=l==null?void 0:l.model)==null?void 0:u.__curator)==null?void 0:b.user_id,l.model.journal=M.APPLICATION,l.model.document_type=r.params.document_type,l.model.document_sub_type=r.params.document_sub_type,l.model.approvers=I(l.model.__approvers))},$=async()=>{},L=()=>{a.formType===V?P():N()},P=async()=>{const v=await l.actionCreateDocument(l.model);await w.actionCountList(),v?(s.value=!1,E(null,n("document-sent"),x.SUCCESS),await _.replace({name:ue,query:{document_type:C.APPLICATION}})):E(null,n("error-occurred"),x.ERROR)},N=async()=>{await l.actionUpdateDocument({id:r.params.id,body:l.model}),await w.actionCountList(),E(null,n("document-sent"),x.SUCCESS),await _.replace({name:me,params:{id:r.params.id,document_type:C.APPLICATION,document_sub_type:D.LABOR_LEAVE}})},F=v=>{l.model.__files=[],v.forEach(i=>{l.model.__files.push(i)})};return Ue(async()=>{r.params.id&&await l.actionGetDocumentDetailForUpdate(r.params.id)}),oe(()=>{ie(l.model)}),(v,i)=>{const f=ne,m=K,u=Z;return e(l).detailLoading?(U(),T(f,{key:0})):(U(),B(te,{key:1},[t(e(ae),{title:a.formType===e(V)?"create-sd-application":"update-sd-application"},{content:d(()=>[t(qe,{"onEmit:preview":O,"onEmit:clearForm":$},{default:d(()=>[t(u,null,{default:d(()=>[t(m,{"col-class":"w-1/2"},{default:d(()=>[t(Q,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=b=>e(p).__curator.$model=b),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(p).__approvers.$model,"onUpdate:modelValue":i[1]||(i[1]=b=>e(p).__approvers.$model=b),error:e(p).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":i[2]||(i[2]=b=>e(p).__signers.$model=b),disabled:"",label:"signers",placeholder:e(o).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(m,{"col-class":"w-full"},{default:d(()=>[t(be,{modelValue:e(p).content.$model,"onUpdate:modelValue":i[3]||(i[3]=b=>e(p).content.$model=b),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(_e,{modelValue:s.value,"onUpdate:modelValue":i[4]||(i[4]=b=>s.value=b),"send-button-loading":e(l).buttonLoading,"onEmit:send":L},{content:d(()=>[t(ll,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:a.formType===e(V)?e(o).currentUser:e(l).model.__signers[0].user,signers:a.formType===e(V)?[e(o).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Sl=X("sd-notice-store",{state:()=>(A(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:C.NOTICE,document_sub_type:D.BUSINESS_TRIP,journal:M.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:h.withMessage("Поле не должен быть пустым",y)},start_date:{required:h.withMessage("Поле не должен быть пустым",y)},route:{required:h.withMessage("Поле не должен быть пустым",y)},content:{required:h.withMessage("Поле не должен быть пустым",y)},__companies:{required:h.withMessage("Поле не должен быть пустым",y)},__curator:{required:h.withMessage("Поле не должен быть пустым",y)},__employees:{required:h.withMessage("Поле не должен быть пустым",y)},__signers:{required:h.withMessage("Поле не должен быть пустым",y)},__tags:{required:h.withMessage("Поле не должен быть пустым",y)},short_description:{required:h.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await se(pe,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c,a=!1){try{this.detailLoading=!0;const{data:o}=await G(c);Y(this.model,o),this.model.__companies=[],this.model.__curator=await J([],o.curator.id,!1),this.model.__employees=await S(o.notices),a?(this.model.__approvers=await S(o.approvers.filter(l=>{var w,s;return((w=l==null?void 0:l.user)==null?void 0:w.id)!==((s=o==null?void 0:o.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await S(o.approvers),this.model.__signers=await S(o.signers),this.model.__companies=await Ne(o.notices[0].destinations),this.model.__tags=await Fe(o.tags),this.model.start_date=o.notices[0].start_date,this.model.end_date=o.notices[0].end_date,this.model.__tags=o.tags,this.model.route=o.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(c,a){try{this.detailLoading=!0;const{data:o}=await G(c),l=await G(a);Y(this.model,o),this.model.__companies=[],this.model.__curator=await J([],o.curator.id,!1),this.model.__employees=await S(l.data.notices),this.model.__approvers=await S(o.approvers),this.model.__signers=await S(o.signers),this.model.__companies=await Ne(l.data.notices[0].destinations),this.model.__tags=await Fe(o.tags),this.model.start_date=l.data.notices[0].start_date,this.model.end_date=l.data.notices[0].end_date,this.model.__tags=o.tags,this.model.route=l.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),Ll={class:"flex w-full gap-x-4"},Uo={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:V}},setup(c){const a=c,{t:o}=H(),l=le(),w=ee(),s=A(),n=Sl(),_=de();ke();const r=re(n.rules,n.model),p=z(!1),O=ge(()=>{const m=a.formType===V,u=l.params.document_sub_type;return u===D.BUSINESS_TRIP_DECREE_LOCAL?m?"create-decree":"update-decree":u===D.BUSINESS_TRIP_ORDER_LOCAL?m?"create-order":"update-order":m?"create-business-trip-notice":"update-business-trip-notice"}),$=ge(()=>{var m,u;return l.params.document_sub_type===D.BUSINESS_TRIP_DECREE_LOCAL&&((m=l==null?void 0:l.query)==null?void 0:m.compose_id)&&((u=l==null?void 0:l.query)==null?void 0:u.document_sub_type)===D.BUSINESS_TRIP}),L=ge(()=>{var m;return!!(l.params.document_sub_type===D.BUSINESS_TRIP_DECREE_LOCAL&&((m=n==null?void 0:n.model)!=null&&m.trip_notice_id))});Je(()=>n.model.__tags,m=>{if(a.formType===V)if(m&&m.length){let u=`${m.map(b=>b.name_uz).join(", ")} yuzasidan`;n.model.short_description=u.charAt(0).toUpperCase()+u.slice(1).toLowerCase()}else n.model.short_description=null});const P=async()=>{var u,b,q,g,W;await r.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.approvers=I(n.model.__approvers),n.model.signers=I(n.model.__signers),n.model.curator=(b=(u=n==null?void 0:n.model)==null?void 0:u.__curator)==null?void 0:b.user_id,n.model.journal=l.params.document_type===C.DECREE||l.params.document_type===C.ORDER?M.ORDERS_PROTOCOLS:M.INNER,n.model.company=s.currentUser.company.id,n.model.notices=n.model.__employees.map(j=>({start_date:n.model.start_date,end_date:n.model.end_date,user:j.id,route:n.model.route,companies:n.model.__companies.map(fe=>fe.id)})),n.model.sender=(g=(q=s==null?void 0:s.currentUser)==null?void 0:q.top_level_department)==null?void 0:g.id,n.model.tags=n.model.__tags.map(j=>({id:j.id})),n.model.files=n.model.__files.map(j=>({id:j.id})),n.model.document_type=l.params.document_type,n.model.document_sub_type=l.params.document_sub_type,$.value&&(n.model.trip_notice_id=(W=l==null?void 0:l.query)==null?void 0:W.compose_id),p.value=!0)},N=()=>{},F=m=>{n.model.__files=[],m.forEach(u=>{n.model.__files.push(u)})},v=async()=>{$.value&&(n.model.notices=[]);const m=await n.actionCreateDocument(n.model);await _.actionCountList(),m?(p.value=!1,E(null,o("document-sent"),x.SUCCESS),await w.replace({name:ue,query:{document_type:l.params.document_sub_type===D.BUSINESS_TRIP_DECREE_LOCAL?C.DECREE:l.params.document_sub_type===D.BUSINESS_TRIP_ORDER_LOCAL?C.ORDER:C.NOTICE}})):E(null,o("error-occurred"),x.ERROR)},i=async()=>{($.value||L.value)&&(n.model.notices=[]),await n.actionUpdateDocument({id:l.params.id,body:n.model}),await _.actionCountList(),E(null,o("changed"),x.SUCCESS),await w.replace({name:me,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},f=()=>{a.formType===V?v():i()};return xe(async()=>{l.params.id&&l.query.trip_notice_id&&l.params.document_sub_type===D.BUSINESS_TRIP_DECREE_LOCAL?await n.actionGetDocumentDetailForUpdateForCustomUse(l.params.id,l.query.trip_notice_id):l.params.id?await n.actionGetDocumentDetailForUpdate(l.params.id):$.value&&await n.actionGetDocumentDetailForUpdate(l.query.compose_id,!0)}),oe(()=>{ie(n.model)}),(m,u)=>{const b=ne,q=K,g=$e,W=je,j=ye,fe=Z;return e(n).detailLoading?(U(),T(b,{key:0})):(U(),B(te,{key:1},[t(e(ae),{title:O.value},{content:d(()=>[t(qe,{"onEmit:preview":P,"onEmit:clearForm":N},{default:d(()=>[t(fe,null,{default:d(()=>[t(q,{"col-class":"w-1/2"},{default:d(()=>[t(Q,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":u[0]||(u[0]=k=>e(r).__curator.$model=k),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(r).__employees.$model,"onUpdate:modelValue":u[1]||(u[1]=k=>e(r).__employees.$model=k),error:e(r).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:$.value||L.value},null,8,["modelValue","error","disabled"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:d(()=>[t(Xe,{modelValue:e(r).__companies.$model,"onUpdate:modelValue":u[2]||(u[2]=k=>e(r).__companies.$model=k),error:e(r).__companies,"text-truncate":"",disabled:$.value||L.value},null,8,["modelValue","error","disabled"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:d(()=>[t(ul,{modelValue:e(r).__tags.$model,"onUpdate:modelValue":u[3]||(u[3]=k=>e(r).__tags.$model=k),error:e(r).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:k})=>[Qe(Ae(k.name),1)]),option:d(({value:k})=>[t(e(ql),{title:k.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:d(()=>[we("div",Ll,[t(g,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[u[4]||(u[4]=k=>e(r).start_date.$model=k),u[5]||(u[5]=k=>e(r).start_date.$model=e(he)(k))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:$.value||L.value},null,8,["modelValue","error","min-date","disabled"]),t(g,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[u[6]||(u[6]=k=>e(r).end_date.$model=k),u[7]||(u[7]=k=>e(r).end_date.$model=e(he)(k))],error:e(r).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:$.value||L.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),t(q,{"col-class":"w-1/2"},{default:d(()=>[t(W,{modelValue:e(r).route.$model,"onUpdate:modelValue":u[8]||(u[8]=k=>e(r).route.$model=k),error:e(r).route,options:e(Ze),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:$.value||L.value},null,8,["modelValue","error","options","disabled"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":u[9]||(u[9]=k=>e(n).model.__approvers=k),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":u[10]||(u[10]=k=>e(r).__signers.$model=k),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(q,{"col-class":"w-1/2"},{default:d(()=>[t(j,{modelValue:e(r).short_description.$model,"onUpdate:modelValue":u[11]||(u[11]=k=>e(r).short_description.$model=k),error:e(r).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(q,{"col-class":"w-full"},{default:d(()=>[t(be,{modelValue:e(r).content.$model,"onUpdate:modelValue":u[12]||(u[12]=k=>e(r).content.$model=k),error:e(r).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(_e,{modelValue:p.value,"onUpdate:modelValue":u[13]||(u[13]=k=>p.value=k),"send-button-loading":e(n).buttonLoading,"onEmit:send":f},{content:d(()=>[e(l).params.document_sub_type===e(D).BUSINESS_TRIP_DECREE_LOCAL?(U(),T(e(ol),{key:0,"compose-model":e(n).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(D).BUSINESS_TRIP_ORDER_LOCAL?(U(),T(e(tl),{key:1,"compose-model":e(n).model,preview:!0},null,8,["compose-model"])):(U(),T(e(nl),{key:2,"compose-model":e(n).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},xo={__name:"OrderForm",props:{formType:{type:String,default:V}},setup(c){const a=c,o=Ge(),l=de(),w=A(),s=le(),n=ee(),_=re(o.rules,o.model),{t:r}=H(),p=z(!1),O=async()=>{var i,f,m,u;await _.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=I(o.model.__approvers),o.model.curator=(f=(i=o==null?void 0:o.model)==null?void 0:i.__curator)==null?void 0:f.user_id,o.model.sender=(u=(m=w==null?void 0:w.currentUser)==null?void 0:m.top_level_department)==null?void 0:u.id,o.model.files=o.model.__files.map(b=>({id:b.id})),o.model.document_type=s.params.document_type,o.model.document_sub_type=s.params.document_sub_type,o.model.journal=M.ORDERS_PROTOCOLS,o.model.register_date=he(o.model.register_date),o.model.__negotiators.forEach(b=>{o.model.signers.push(b.hasOwnProperty("user")?{id:b.id,user:b.user.id,type:ve.NEGOTIATOR}:{user:b.id,type:ve.NEGOTIATOR})}),s.query.compose_id&&(o.model.trip_notice_id=s.query.compose_id),p.value=!0)},$=()=>{},L=async()=>{try{const v=await o.actionCreateDocument(o.model);await l.actionCountList(),v&&(p.value=!1,E(null,r("document-sent"),x.SUCCESS),await n.replace({name:ue,query:{document_type:C.ORDER}}))}catch{E(null,r("error-occurred"),x.ERROR)}},P=async()=>{try{const v=await o.actionUpdateDocument({id:s.params.id,body:o.model});await l.actionCountList(),E(null,r("changed"),x.SUCCESS),await n.replace({name:me,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{E(null,r("error-occurred"),x.ERROR)}},N=()=>{a.formType===V?L():P()},F=v=>{o.model.__files=[],v.forEach(i=>{o.model.__files.push(i)})};return Ue(async()=>{s.params.id&&await o.actionGetDocumentDetailForUpdate(s.params.id)}),oe(()=>{ie(o.model)}),(v,i)=>{const f=ne,m=K,u=ye,b=$e,q=Z;return e(o).detailLoading?(U(),T(f,{key:0})):(U(),B(te,{key:1},[t(e(ae),{title:a.formType===e(V)?"create-order":"update-order"},{content:d(()=>[t(qe,{"onEmit:preview":O,"onEmit:clearForm":$},{default:d(()=>[t(q,null,{default:d(()=>[t(m,{"col-class":"w-1/2"},{default:d(()=>[t(Q,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=g=>e(_).__curator.$model=g),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(u,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":i[1]||(i[1]=g=>e(_).register_number.$model=g),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(b,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":i[2]||(i[2]=g=>e(_).register_date.$model=g),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":i[3]||(i[3]=g=>e(o).model.__approvers=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":i[4]||(i[4]=g=>e(_).__negotiators.$model=g),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:d(()=>[t(be,{modelValue:e(_).content.$model,"onUpdate:modelValue":i[5]||(i[5]=g=>e(_).content.$model=g),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":F},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(_e,{modelValue:p.value,"onUpdate:modelValue":i[6]||(i[6]=g=>p.value=g),"send-button-loading":e(o).buttonLoading,"onEmit:send":N},{content:d(()=>[t(e(rl),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Cl=X("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",y)},__curator:{required:h.withMessage("Поле не должен быть пустым",y)},__signers:{required:h.withMessage("Поле не должен быть пустым",y)},short_description:{required:h.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await se(pe,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await G(c);Y(this.model,a),this.model.__curator=await J([],a.curator.id,!1),this.model.__approvers=await S(a.approvers),this.model.__signers=await S(a.signers)}catch{}finally{this.detailLoading=!1}}}}),Eo={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:V}},setup(c){const a=c,{t:o}=H(),l=le(),w=ee(),s=A(),n=Cl(),_=de();ke();const r=z(!1),p=re(n.rules,n.model),O=async()=>{var i,f,m,u;await p.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=I(n.model.__approvers),n.model.signers=I(n.model.__signers),n.model.curator=(f=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:f.user_id,n.model.journal=M.INNER,n.model.company=s.currentUser.company.id,n.model.sender=(u=(m=s==null?void 0:s.currentUser)==null?void 0:m.top_level_department)==null?void 0:u.id,n.model.files=n.model.__files.map(b=>({id:b.id})),n.model.document_type=l.params.document_type,n.model.document_sub_type=l.params.document_sub_type,r.value=!0)},$=()=>{},L=v=>{n.model.__files=[],v.forEach(i=>{n.model.__files.push(i)})},P=async()=>{const v=await n.actionCreateDocument(n.model);await _.actionCountList(),v?(r.value=!1,E(null,o("document-sent"),x.SUCCESS),await w.replace({name:ue,query:{document_type:C.NOTICE}})):E(null,o("error-occurred"),x.ERROR)},N=async()=>{await n.actionUpdateDocument({id:l.params.id,body:n.model}),await _.actionCountList(),E(null,o("changed"),x.SUCCESS),await w.replace({name:me,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},F=()=>{a.formType===V?P():N()};return xe(async()=>{l.params.id&&await n.actionGetDocumentDetailForUpdate(l.params.id)}),oe(()=>{ie(n.model)}),(v,i)=>{const f=ne,m=K,u=ye,b=Z;return e(n).detailLoading?(U(),T(f,{key:0})):(U(),B(te,{key:1},[t(e(ae),{title:a.formType===e(V)?"create-notice":"update-notice"},{content:d(()=>[t(qe,{"onEmit:preview":O,"onEmit:clearForm":$},{default:d(()=>[t(b,null,{default:d(()=>[t(m,{"col-class":"w-1/2"},{default:d(()=>[t(Q,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=q=>e(p).__curator.$model=q),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(u,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=q=>e(p).short_description.$model=q),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=q=>e(n).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=q=>e(p).__signers.$model=q),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:d(()=>[t(be,{modelValue:e(p).content.$model,"onUpdate:modelValue":i[4]||(i[4]=q=>e(p).content.$model=q),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(_e,{modelValue:r.value,"onUpdate:modelValue":i[5]||(i[5]=q=>r.value=q),"send-button-loading":e(n).buttonLoading,"onEmit:send":F},{content:d(()=>[t(e(al),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Rl=X("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",y)},__curator:{required:h.withMessage("Поле не должен быть пустым",y)},__signers:{required:h.withMessage("Поле не должен быть пустым",y)},short_description:{required:h.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await se(pe,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await G(c);Y(this.model,a),this.model.__curator=await J([],a.curator.id,!1),this.model.__approvers=await S(a.approvers),this.model.__signers=await S(a.signers)}catch{}finally{this.detailLoading=!1}}}}),$o={__name:"DecreeForm",props:{formType:{type:String,default:V}},setup(c){const a=c,{t:o}=H(),l=le(),w=ee(),s=A(),n=de();ke();const _=z(!1),r=Rl(),p=re(r.rules,r.model),O=async()=>{var i,f,m,u;await p.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=I(r.model.__approvers),r.model.signers=I(r.model.__signers),r.model.curator=(f=(i=r==null?void 0:r.model)==null?void 0:i.__curator)==null?void 0:f.user_id,r.model.journal=M.ORDERS_PROTOCOLS,r.model.company=s.currentUser.company.id,r.model.sender=(u=(m=s==null?void 0:s.currentUser)==null?void 0:m.top_level_department)==null?void 0:u.id,r.model.files=r.model.__files.map(b=>({id:b.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(r.model.trip_notice_id=l.query.compose_id),_.value=!0)},$=()=>{},L=v=>{r.model.__files=[],v.forEach(i=>{r.model.__files.push(i)})},P=async()=>{const v=await r.actionCreateDocument(r.model);await n.actionCountList(),v?(_.value=!1,E(null,o("document-sent"),x.SUCCESS),await w.replace({name:ue,query:{document_type:l.params.document_type}})):E(null,o("error-occurred"),x.ERROR)},N=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await n.actionCountList(),E(null,o("changed"),x.SUCCESS),await w.replace({name:me,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},F=()=>{a.formType===V?P():N()};return xe(async()=>{l.params.id&&await r.actionGetDocumentDetailForUpdate(l.params.id)}),oe(()=>{ie(r.model)}),(v,i)=>{const f=ne,m=K,u=ye,b=Z;return e(r).detailLoading?(U(),T(f,{key:0})):(U(),B(te,{key:1},[t(e(ae),{title:a.formType===e(V)?"create-decree":"update-decree"},{content:d(()=>[t(qe,{"onEmit:preview":O,"onEmit:clearForm":$},{default:d(()=>[t(b,null,{default:d(()=>[t(m,{"col-class":"w-1/2"},{default:d(()=>[t(Q,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=q=>e(p).__curator.$model=q),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(u,{modelValue:e(p).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=q=>e(p).short_description.$model=q),error:e(p).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=q=>e(r).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(p).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=q=>e(p).__signers.$model=q),error:e(p).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:d(()=>[t(be,{modelValue:e(p).content.$model,"onUpdate:modelValue":i[4]||(i[4]=q=>e(p).content.$model=q),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(_e,{modelValue:_.value,"onUpdate:modelValue":i[5]||(i[5]=q=>_.value=q),"send-button-loading":e(r).buttonLoading,"onEmit:send":F},{content:d(()=>[t(e(il),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Dl=X("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__signers:[],__user:null},rules:{end_date:{required:h.withMessage("Поле не должен быть пустым",y)},start_date:{required:h.withMessage("Поле не должен быть пустым",y)},__curator:{required:h.withMessage("Поле не должен быть пустым",y)},__signers:{required:h.withMessage("Поле не должен быть пустым",y)},__user:{required:h.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await se(pe,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await G(c);Y(this.model,a),this.model.__curator=await J([],a.curator.id,!1),this.model.__approvers=await S(a.approvers),this.model.__signers=await S(a.signers),this.model.__user=await cl("users/personal-information",[],!1,a.user.id)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ce({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}}}}),So={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:V}},setup(c){const a=c,o=le(),l=ee(),w=A(),s=Dl(),n=de(),{t:_}=H(),r=re(s.rules,s.model),p=z(!1),O=ge(()=>a.formType===V?"create-poa":"update-poa"),$=ge(()=>s.model.start_date?new Date(s.model.start_date):new Date),L=async()=>{var f,m,u,b,q,g,W,j,fe,k,Se,Le,Ce,Re,De,Te,Oe,Pe;if(await r.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=I(s.model.__approvers),s.model.signers=I(s.model.__signers),s.model.curator=(m=(f=s==null?void 0:s.model)==null?void 0:f.__curator)==null?void 0:m.user_id,s.model.user=(b=(u=s==null?void 0:s.model)==null?void 0:u.__user)==null?void 0:b.id,s.model.journal=M.POWER_OF_ATTORNEY,s.model.company=(g=(q=w.currentUser)==null?void 0:q.company)==null?void 0:g.id,s.model.sender=(j=(W=w==null?void 0:w.currentUser)==null?void 0:W.top_level_department)==null?void 0:j.id,s.model.document_type=o.params.document_type,s.model.document_sub_type=o.params.document_sub_type,s.model.content=".",!((k=(fe=s==null?void 0:s.model)==null?void 0:fe.__user)!=null&&k.passport_seria||(Le=(Se=s==null?void 0:s.model)==null?void 0:Se.__user)!=null&&Le.passport_number||(Re=(Ce=s==null?void 0:s.model)==null?void 0:Ce.__user)!=null&&Re.passport_issue_date||(Te=(De=s==null?void 0:s.model)==null?void 0:De.__user)!=null&&Te.passport_issued_by)){E(null,`${(Pe=(Oe=s.model)==null?void 0:Oe.__user)==null?void 0:Pe.full_name}: ${_("passport-details-error")}`,x.WARNING);return}p.value=!0}},P=()=>{},N=async()=>{const i=await s.actionCreateDocument(s.model);await n.actionCountList(),i?(p.value=!1,E(null,_("document-sent"),x.SUCCESS),await l.replace({name:ue,query:{document_type:C.POWER_OF_ATTORNEY}})):E(null,_("error-occurred"),x.ERROR)},F=async()=>{await s.actionUpdateDocument({id:o.params.id,body:s.model}),await n.actionCountList(),E(null,_("changed"),x.SUCCESS),await l.replace({name:me,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},v=()=>{a.formType===V?N():F()};return xe(async()=>{o.params.id&&await s.actionGetDocumentDetailForUpdate(o.params.id)}),oe(()=>{ie(s.model)}),(i,f)=>{const m=ne,u=K,b=$e,q=Z;return e(s).detailLoading?(U(),T(m,{key:0})):(U(),B(te,{key:1},[t(e(ae),{title:O.value},{content:d(()=>[t(qe,{"onEmit:preview":L,"onEmit:clearForm":P},{default:d(()=>[t(q,null,{default:d(()=>[t(u,{"col-class":"w-1/2"},{default:d(()=>[t(Q,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":f[0]||(f[0]=g=>e(r).__curator.$model=g),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(Q,{modelValue:e(r).__user.$model,"onUpdate:modelValue":f[1]||(f[1]=g=>e(r).__user.$model=g),error:e(r).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee"},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(b,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[f[2]||(f[2]=g=>e(r).start_date.$model=g),f[3]||(f[3]=g=>e(r).start_date.$model=e(he)(g))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(b,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[f[4]||(f[4]=g=>e(r).end_date.$model=g),f[5]||(f[5]=g=>e(r).end_date.$model=e(he)(g))],error:e(r).end_date,"min-date":$.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":f[6]||(f[6]=g=>e(s).model.__approvers=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(R,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":f[7]||(f[7]=g=>e(r).__signers.$model=g),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(_e,{modelValue:p.value,"onUpdate:modelValue":f[8]||(f[8]=g=>p.value=g),"send-button-loading":e(s).buttonLoading,"onEmit:send":v},{content:d(()=>[t(sl,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{Vo as _,Uo as a,So as b,ko as c,xo as d,Eo as e,$o as f};
