import{_ as Y}from"./BaseRow-ee73c912.js";import{_ as K}from"./BaseCol-76af6e9b.js";import{_ as ge}from"./BaseInput-8ef9701b.js";import{v as N,bY as xe,a7 as we,o as k,c as B,i as s,z as u,h as e,bb as _e,B as Fe,aF as ke,ci as Ae,cC as Be,ba as Ue,ce as Ge,cO as He,cP as Ye,cl as Ce,f as R,cQ as Ke,cG as Qe,a as fe,n as Je,r as Te,G as Oe,ak as Q,b$ as D,c0 as I,bz as j,u as H,t as Pe,b as J,ax as W,ck as X,F as Z,ay as E,am as ee,cH as be,d as We,cd as Se,a9 as Xe,cR as Ze}from"./index-da67348f.js";import{c as y,r as h,u as ne}from"./index-3d41de88.js";import{_ as en,a as nn}from"./BranchMultiSelect-e8077c1c.js";import{_ as le,b as ln,a as on,g as tn,h as rn,c as an,d as sn,e as dn,f as cn}from"./DecreeTemplate-c8fce382.js";import"./BaseTabMenu-953e6892.js";import"./dialog.esm-89829c18.js";import"./tabpanel.esm-3c07e484.js";import{s as oe,M as T,P as un,Q as te,R as F,S as ve,T as pn,U as mn}from"./index-4fcd181b.js";import"./BaseTabView-63e21938.js";import"./FileTabs-64ea02ba.js";import{_ as z}from"./UserMultiSelect-c1e0a4f7.js";import{c as qn,u as A,w as re,d as S}from"./axios.config-f994253c.js";import{a as ye,d as ae}from"./common-704a1e1a.js";import{f as ie,a as se,b as de}from"./index.store-d4d607d9.js";import{d as $e,e as ce,c as ue}from"./index-c4c1f2d4.js";import{F as x}from"./constants-5c471c97.js";import{_ as ze}from"./BaseDropdown-6379b10d.js";import{_ as Ie}from"./BaseCalendar-59d8b730.js";import{_ as _n}from"./WithLabel-62cd8660.js";import{f as Ee}from"./formatDate-efc9aa60.js";import"./qrcode.vue.esm-775d0159.js";import"./Dropdown-4b08a17e.js";import"./menu.esm-1b0f7d47.js";/* empty css                                                 */import"./avatar.esm-a161e218.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-37f02922.js";import{_ as fn}from"./WithRadio-632a2375.js";import"./radiobutton.esm-ef469e51.js";import"./checkbox.esm-e23666e8.js";import"./dayjs.min-79be5938.js";import{_ as bn}from"./WithSelectable-d5f079a5.js";import{_ as gn}from"./BaseBrickTab-fa665fdf.js";import{_ as wn}from"./BaseFileUpload-b28c64b0.js";import{_ as vn}from"./BaseFroalaEditor-408c3018.js";import{_ as yn}from"./BaseDialog-fe21b0cc.js";const hn={class:"user-select"},he={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(o,{emit:t}){const l=o,n=N([]),_=xe(l,"modelValue"),m=async r=>{let{data:p}=await qn.get(`${l.apiUrl}/`,r);p.hasOwnProperty("results")?n.value=p.results:n.value=p};return we(async()=>{await m(l.apiParams)}),(r,p)=>(k(),B("div",hn,[s(ze,{modelValue:e(_),"onUpdate:modelValue":p[0]||(p[0]=a=>_e(_)?_.value=a:null),options:n.value,"onUpdate:options":p[1]||(p[1]=a=>n.value=a),error:l.error,"api-url":l.apiUrl,"api-params":l.apiParams,"option-label":"full_name",label:l.label,placeholder:l.placeholder,required:l.required,searchable:""},{option:u(({option:a})=>[s(e(bn),{items:[a]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var kn=`
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
`,xn={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Fe.extend({name:"editor",css:kn,classes:xn});(function(){try{return window.Quill}catch{return null}})();var Vn=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],En=function(o){return Vn.map(function(t){return t.toLowerCase()}).indexOf(o.toLowerCase())!==-1},Sn=function(o,t,l){Object.keys(t).filter(En).forEach(function(n){var _=t[n];typeof _=="function"&&(n==="onInit"?_(o,l):l.on(n.substring(2),function(m){return _(m,l)}))})},Un=function(o,t,l,n){var _=o.modelEvents?o.modelEvents:null,m=Array.isArray(_)?_.join(" "):_;ke(n,function(r,p){l&&typeof r=="string"&&r!==p&&r!==l.getContent({format:o.outputFormat})&&l.setContent(r)}),l.on(m||"change input undo redo",function(){t.emit("update:modelValue",l.getContent({format:o.outputFormat}))})},Cn=function(o,t,l,n,_,m){n.setContent(m()),l.attrs["onUpdate:modelValue"]&&Un(t,l,n,_),Sn(o,l.attrs,n)},Le=0,Ne=function(o){var t=Date.now(),l=Math.floor(Math.random()*1e9);return Le++,o+"_"+l+Le+String(t)},$n=function(o){return o!==null&&o.tagName.toLowerCase()==="textarea"},De=function(o){return typeof o>"u"||o===""?[]:Array.isArray(o)?o:o.split(" ")},Ln=function(o,t){return De(o).concat(De(t))},Dn=function(o){return o==null},Re=function(){return{listeners:[],scriptId:Ne("tiny-script"),scriptLoaded:!1}},Rn=function(){var o=Re(),t=function(_,m,r,p){var a=m.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=_,a.src=r;var c=function(){a.removeEventListener("load",c),p()};a.addEventListener("load",c),m.head&&m.head.appendChild(a)},l=function(_,m,r){o.scriptLoaded?r():(o.listeners.push(r),_.getElementById(o.scriptId)||t(o.scriptId,_,m,function(){o.listeners.forEach(function(p){return p()}),o.scriptLoaded=!0}))},n=function(){o=Re()};return{load:l,reinitialize:n}},Tn=Rn(),On=function(){return typeof window<"u"?window:global},G=function(){var o=On();return o&&o.tinymce?o.tinymce:null},Pn={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(o){return o==="html"||o==="text"}}},M=globalThis&&globalThis.__assign||function(){return M=Object.assign||function(o){for(var t,l=1,n=arguments.length;l<n;l++){t=arguments[l];for(var _ in t)Object.prototype.hasOwnProperty.call(t,_)&&(o[_]=t[_])}return o},M.apply(this,arguments)},zn=function(o,t,l,n){return o(n||"div",{id:t,ref:l})},In=function(o,t,l){return o("textarea",{id:t,visibility:"hidden",ref:l})},Ve={selector:void 0,target:void 0},Nn=Ae({props:Pn,setup:function(o,t){var l=o.init?M(M({},o.init),Ve):M({},Ve),n=Be(o),_=n.disabled,m=n.modelValue,r=n.tagName,p=N(null),a=null,c=o.id||Ne("tiny-vue"),C=o.init&&o.init.inline||o.inline,$=!!t.attrs["onUpdate:modelValue"],L=!0,O=o.initialValue?o.initialValue:"",U="",P=function(d){return $?function(){return m!=null&&m.value?m.value:""}:function(){return d?O:U}},g=function(){var d=P(L),q=M(M({},l),{readonly:o.disabled,target:p.value,plugins:Ln(l.plugins,o.plugins),toolbar:o.toolbar||l.toolbar,inline:C,setup:function(b){a=b,b.on("init",function(w){return Cn(w,o,t,b,m,d)}),typeof l.setup=="function"&&l.setup(b)}});$n(p.value)&&(p.value.style.visibility=""),G().init(q),L=!1};ke(_,function(d){var q;a!==null&&(typeof((q=a.mode)===null||q===void 0?void 0:q.set)=="function"?a.mode.set(d?"readonly":"design"):a.setMode(d?"readonly":"design"))}),ke(r,function(d){var q;$||(U=a.getContent()),(q=G())===null||q===void 0||q.remove(a),Ue(function(){return g()})}),we(function(){if(G()!==null)g();else if(p.value&&p.value.ownerDocument){var d=o.cloudChannel?o.cloudChannel:"6",q=o.apiKey?o.apiKey:"no-api-key",b=Dn(o.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/".concat(q,"/tinymce/").concat(d,"/tinymce.min.js"):o.tinymceScriptSrc;Tn.load(p.value.ownerDocument,b,g)}}),Ge(function(){G()!==null&&G().remove(a)}),C||(He(function(){L||g()}),Ye(function(){var d;$||(U=a.getContent()),(d=G())===null||d===void 0||d.remove(a)}));var i=function(d){var q;U=a.getContent(),(q=G())===null||q===void 0||q.remove(a),l=M(M(M({},l),d),Ve),Ue(function(){return g()})};return t.expose({rerender:i,getEditor:function(){return a}}),function(){return C?zn(Ce,c,p,o.tagName):In(Ce,c,p)}}});const Mn={__name:"BaseTinyEditor",props:{modelValue:{type:[String]},pastePlainText:{type:Boolean,default:!0},height:{type:[String,Number],default:400},disabled:{type:Boolean,default:!1}},setup(o){const l=xe(o,"modelValue");return(n,_)=>(k(),R(e(Nn),{modelValue:e(l),"onUpdate:modelValue":_[0]||(_[0]=m=>_e(l)?l.value=m:null),"api-key":"5ifk23mj486i9ebzgl4zzkd89v3am3i5onttuut1ub8n5dll","tinymce-script-src":"/tinymce/tinymce.min.js",placeholder:"Введите текст...",disable:o.disabled,paste_as_text:!0,init:{plugins:["table",`${o.pastePlainText?"paste":""}`],toolbar:"undo redo | bold italic underline forecolor fontsizeselect lineheight | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table",height:`${o.height}`,menubar:"",fontsize_formats:"6px 8px 9px 10px 11px 12px 13px 14px 16px 18px 24px 36px",paste_as_text:this.pastePlainText,content_style:"body {font-size: 13px;}"}},null,8,["modelValue","disable","init"]))}},pe={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"froala",validator(o){return["froala","tiny"].includes(o)}}},emits:["update:modelValue","emit:fileUpload"],setup(o,{emit:t}){const l=o,n=xe(l,"modelValue"),_=N([{title:"text",slot:"editor",icon:Ke},{title:"file",slot:"file",icon:Qe}]);return(m,r)=>(k(),R(gn,{"tab-panel-list":_.value,"panel-container-class":"px-0"},{editor:u(()=>[o.editor==="froala"?(k(),R(vn,{key:0,modelValue:e(n),"onUpdate:modelValue":r[0]||(r[0]=p=>_e(n)?n.value=p:null)},null,8,["modelValue"])):(k(),R(Mn,{key:1,modelValue:e(n),"onUpdate:modelValue":r[1]||(r[1]=p=>_e(n)?n.value=p:null)},null,8,["modelValue"]))]),file:u(()=>[fe("div",{class:Je(l.fileUploadContainerClasses)},[s(wn,{files:l.files,"onEmit:fileUpload":r[2]||(r[2]=p=>t("emit:fileUpload",p))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},jn={class:"flex flex-col justify-between h-full"},Fn={class:"px-6 py-4 overflow-y-auto"},An={class:"actions p-6"},me={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(o,{emit:t}){return(l,n)=>{const _=Oe;return k(),B("div",jn,[fe("div",Fn,[Te(l.$slots,"default")]),fe("div",An,[s(_,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:n[0]||(n[0]=m=>t("emit:clearForm"))}),s(_,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:n[1]||(n[1]=m=>t("emit:preview"))})])])}}},Bn=Q("sd-stores-inner",{state:()=>{var o,t;return{buttonLoading:!1,detailLoading:!1,model:{company:(t=(o=A().currentUser)==null?void 0:o.company)==null?void 0:t.id,content:null,document_type:D.INNER,document_sub_type:I.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:j.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{register_number:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__departments:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{},__signers:{required:y.withMessage("Поле не должен быть пустым",h)}}}},actions:{async actionCreateDocument(o){let t={...o,type:$e,sub_type:$e};this.buttonLoading=!0;const{response:l,error:n}=await re(de,t);return l?(this.buttonLoading=!1,Promise.resolve(l)):Promise.reject(n)},async actionUpdateDocument({id:o,body:t}){try{this.buttonLoading=!0;const{data:l}=await ie({id:o,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(o){try{this.detailLoading=!0;const{data:t}=await se(o);oe(this.model,t),this.model.__approvers=await T(t.approvers),this.model.__signers=await T(t.signers),this.model.__departments=await un(t.receiver.departments),this.model.__files=t.files}catch{}finally{this.detailLoading=!1}}}}),Gn={class:"font-semibold text-xl"},qe={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(o,{emit:t}){const n=xe(o,"modelValue"),{t:_}=H();return(m,r)=>{const p=Oe,a=yn;return k(),R(a,{modelValue:e(n),"onUpdate:modelValue":r[1]||(r[1]=c=>_e(n)?n.value=c:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:u(()=>[fe("span",Gn,Pe(e(_)("preview")),1)]),content:u(()=>[Te(m.$slots,"content")]),footer:u(()=>[s(p,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),s(p,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:o.sendButtonLoading,onClick:r[0]||(r[0]=c=>t("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},zl={__name:"InnerForm",props:{formType:{type:String,default:x}},setup(o){const t=o,l=A(),n=Bn();ye();const _=ae(),m=N(!1);N(null);const{t:r}=H(),p=J(),a=W(),c=ne(n.rules,n.model),C=async()=>{await c.value.$validate()&&(m.value=!0,n.model.approvers=[],n.model.signers=[],n.model.departments=[],n.model.departments=n.model.__departments.map(i=>i.id),n.model.files=[],n.model.files=n.model.__files.map(i=>({id:i.id})),n.model.journal=j.INNER,n.model.sender=l.currentUser.top_level_department.id,n.model.approvers=F(n.model.__approvers),n.model.signers=F(n.model.__signers),n.model.document_type=a.params.document_type,n.model.document_sub_type=a.params.document_sub_type)},$=()=>{t.formType===x?L():O()},L=async()=>{const g=await n.actionCreateDocument(n.model);await _.actionDocumentCountList(),g?(m.value=!1,S(null,r("document-sent"),E.SUCCESS),await p.replace({name:ce,query:{document_type:D.INNER}})):S(null,r("error-occurred"),E.ERROR)},O=async()=>{await n.actionUpdateDocument({id:a.params.id,body:n.model}),await _.actionDocumentCountList(),S(null,r("document-sent"),E.SUCCESS),await p.replace({name:ue,params:{id:a.params.id,document_type:D.INNER,document_sub_type:I.SERVICE_LETTER}})},U=()=>{console.log("Clear Form")},P=g=>{n.model.__files=[],g.forEach(i=>{n.model.__files.push(i)})};return we(async()=>{a.params.id&&await n.actionGetDocumentDetailForUpdate(a.params.id)}),X(()=>{te(n.model)}),(g,i)=>{const d=ee,q=ge,b=K,w=Y;return e(n).detailLoading?(k(),R(d,{key:0})):(k(),B(Z,{key:1},[s(e(le),{title:t.formType===e(x)?"create-sd-inner":"update-sd-inner"},{content:u(()=>[s(me,{"onEmit:preview":C,"onEmit:clearForm":U},{default:u(()=>[s(w,null,{default:u(()=>[s(b,{"col-class":"w-1/2"},{default:u(()=>[s(q,{modelValue:e(c).register_number.$model,"onUpdate:modelValue":i[0]||(i[0]=f=>e(c).register_number.$model=f),error:e(c).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[s(en,{modelValue:e(c).__departments.$model,"onUpdate:modelValue":i[1]||(i[1]=f=>e(c).__departments.$model=f),error:e(c).__departments},null,8,["modelValue","error"])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[s(q,{modelValue:e(c).short_description.$model,"onUpdate:modelValue":i[2]||(i[2]=f=>e(c).short_description.$model=f),error:e(c).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(c).__approvers.$model,"onUpdate:modelValue":i[3]||(i[3]=f=>e(c).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(c).__signers.$model,"onUpdate:modelValue":i[4]||(i[4]=f=>e(c).__signers.$model=f),error:e(c).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),s(b,{"col-class":"w-full"},{default:u(()=>[s(pe,{modelValue:e(c).content.$model,"onUpdate:modelValue":i[5]||(i[5]=f=>e(c).content.$model=f),error:e(c).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":P},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),s(qe,{modelValue:m.value,"onUpdate:modelValue":i[6]||(i[6]=f=>m.value=f),"send-button-loading":e(n).buttonLoading,"onEmit:send":$},{content:u(()=>{var f,V;return[s(ln,{"compose-model":{...e(n).model,signers:e(n).model.__signers,approvers:e(n).model.__approvers,author:e(n).model.__signers[0],sender:{name:(V=(f=e(l).currentUser)==null?void 0:f.top_level_department)==null?void 0:V.name},receiver:{departments:e(n).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},Hn=Q("sd-store-application",{state:()=>{var o,t;return{buttonLoading:!1,detailLoading:!1,model:{company:(t=(o=A().currentUser)==null?void 0:o.company)==null?void 0:t.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{}}}},actions:{async actionCreateDocument(o){let t={...o};this.buttonLoading=!0;const{response:l,error:n}=await re(de,t);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:o,body:t}){try{this.buttonLoading=!0;const{data:l}=await ie({id:o,body:t});return Promise.resolve(l)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(o){try{this.detailLoading=!0;const{data:t}=await se(o);oe(this.model,t),this.model.__approvers=await T(t.approvers),this.model.__signers=await T(t.signers.filter(l=>l.type===be.SIGNER)),this.model.__curator=await ve([],t.curator.id,!1),this.model.__files=t.files}catch{}finally{this.detailLoading=!1}}}}),Me=Q("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:A().currentUser.company.id,curator:null,document_type:D.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:j.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:y.withMessage("Поле не должен быть пустым",h)},register_date:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__negotiators:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(o){this.buttonLoading=!0;const{response:t,error:l}=await re(de,o);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:o,body:t}){try{this.buttonLoading=!0;const{data:l}=await ie({id:o,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(o){try{this.detailLoading=!0;const{data:t}=await se(o);oe(this.model,t),this.model.__signers=await T(t.signers.filter(l=>l.type!==be.NEGOTIATOR)),this.model.__negotiators=await T(t.signers.filter(l=>l.type===be.NEGOTIATOR)),this.model.__approvers=await T(t.approvers),this.model.__curator=await ve([],t.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),Il={__name:"ApplicationForm",props:{formType:{type:String,default:x}},setup(o){const t=o,l=A(),n=Hn();ye();const _=ae();Me();const m=N(!1);N(null);const{t:r}=H(),p=J(),a=W(),c=ne(n.rules,n.model),C=async()=>{var i,d,q,b,w;await c.value.$validate()&&(m.value=!0,n.model.approvers=[],n.model.signers=[],n.model.signers=[{user:(i=l==null?void 0:l.currentUser)==null?void 0:i.id}],n.model.sender=(q=(d=l==null?void 0:l.currentUser)==null?void 0:d.top_level_department)==null?void 0:q.id,n.model.curator=(w=(b=n==null?void 0:n.model)==null?void 0:b.__curator)==null?void 0:w.user_id,n.model.journal=j.APPLICATION,n.model.document_type=a.params.document_type,n.model.document_sub_type=a.params.document_sub_type,n.model.approvers=F(n.model.__approvers))},$=async()=>{},L=()=>{t.formType===x?O():U()},O=async()=>{const g=await n.actionCreateDocument(n.model);await _.actionDocumentCountList(),g?(m.value=!1,S(null,r("document-sent"),E.SUCCESS),await p.replace({name:ce,query:{document_type:D.APPLICATION}})):S(null,r("error-occurred"),E.ERROR)},U=async()=>{await n.actionUpdateDocument({id:a.params.id,body:n.model}),await _.actionDocumentCountList(),S(null,r("document-sent"),E.SUCCESS),await p.replace({name:ue,params:{id:a.params.id,document_type:D.APPLICATION,document_sub_type:I.LABOR_LEAVE}})},P=g=>{n.model.__files=[],g.forEach(i=>{n.model.__files.push(i)})};return we(async()=>{a.params.id&&await n.actionGetDocumentDetailForUpdate(a.params.id)}),X(()=>{te(n.model)}),(g,i)=>{const d=ee,q=K,b=Y;return e(n).detailLoading?(k(),R(d,{key:0})):(k(),B(Z,{key:1},[s(e(le),{title:t.formType===e(x)?"create-sd-application":"update-sd-application"},{content:u(()=>[s(me,{"onEmit:preview":C,"onEmit:clearForm":$},{default:u(()=>[s(b,null,{default:u(()=>[s(q,{"col-class":"w-1/2"},{default:u(()=>[s(he,{modelValue:e(c).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=w=>e(c).__curator.$model=w),error:e(c).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(c).__approvers.$model,"onUpdate:modelValue":i[1]||(i[1]=w=>e(c).__approvers.$model=w),error:e(c).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(c).__signers.$model,"onUpdate:modelValue":i[2]||(i[2]=w=>e(c).__signers.$model=w),disabled:"",label:"signers",placeholder:e(l).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),s(q,{"col-class":"w-full"},{default:u(()=>[s(pe,{modelValue:e(c).content.$model,"onUpdate:modelValue":i[3]||(i[3]=w=>e(c).content.$model=w),error:e(c).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":P},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),s(qe,{modelValue:m.value,"onUpdate:modelValue":i[4]||(i[4]=w=>m.value=w),"send-button-loading":e(n).buttonLoading,"onEmit:send":L},{content:u(()=>[s(on,{"compose-model":{...e(n).model,curator:e(n).model.__curator,author:t.formType===e(x)?e(l).currentUser:e(n).model.__signers[0].user,signers:t.formType===e(x)?[e(l).currentUser]:e(n).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Yn=Q("sd-notice-store",{state:()=>(A(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:D.NOTICE,document_sub_type:I.BUSINESS_TRIP,journal:j.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",h)},start_date:{required:y.withMessage("Поле не должен быть пустым",h)},route:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__companies:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__employees:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},__tags:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(o){this.buttonLoading=!0;const{response:t,error:l}=await re(de,o);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:o,body:t}){try{this.buttonLoading=!0;const{data:l}=await ie({id:o,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(o){try{this.detailLoading=!0;const{data:t}=await se(o);oe(this.model,t),this.model.__companies=[],this.model.__curator=await ve([],t.curator.id,!1),this.model.__employees=await T(t.notices),this.model.__approvers=await T(t.approvers),this.model.__signers=await T(t.signers),this.model.__companies=await pn(t.notices[0].destinations),this.model.__tags=await mn(t.tags),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),Kn={class:"flex w-full gap-x-4"},Nl={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:x}},setup(o){const t=o,{t:l}=H(),n=W(),_=J(),m=A(),r=Yn(),p=ae();ye();const a=ne(r.rules,r.model),c=N(!1),C=We(()=>{const i=t.formType===x,d=n.params.document_sub_type;return d===I.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":d===I.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"});ke(()=>r.model.__tags,i=>{if(t.formType===x)if(i&&i.length){let d=`${i.map(q=>q.name_uz).join(", ")} yuzasidan`;r.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else r.model.short_description=null});const $=async()=>{var d,q,b,w;await a.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=F(r.model.__approvers),r.model.signers=F(r.model.__signers),r.model.curator=(q=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:q.user_id,r.model.journal=n.params.document_type===D.DECREE||n.params.document_type===D.ORDER?j.ORDERS_PROTOCOLS:j.INNER,r.model.company=m.currentUser.company.id,r.model.notices=r.model.__employees.map(f=>({start_date:r.model.start_date,end_date:r.model.end_date,user:f.id,route:r.model.route,companies:r.model.__companies.map(V=>V.id)})),r.model.sender=(w=(b=m==null?void 0:m.currentUser)==null?void 0:b.top_level_department)==null?void 0:w.id,r.model.tags=r.model.__tags.map(f=>({id:f.id})),r.model.files=r.model.__files.map(f=>({id:f.id})),r.model.document_type=n.params.document_type,r.model.document_sub_type=n.params.document_sub_type,c.value=!0)},L=()=>{},O=i=>{r.model.__files=[],i.forEach(d=>{r.model.__files.push(d)})},U=async()=>{const i=await r.actionCreateDocument(r.model);await p.actionDocumentCountList(),i?(c.value=!1,S(null,l("document-sent"),E.SUCCESS),await _.replace({name:ce,query:{document_type:n.params.document_sub_type===I.BUSINESS_TRIP_DECREE_LOCAL?D.DECREE:n.params.document_sub_type===I.BUSINESS_TRIP_ORDER_LOCAL?D.ORDER:D.NOTICE}})):S(null,l("error-occurred"),E.ERROR)},P=async()=>{await r.actionUpdateDocument({id:n.params.id,body:r.model}),await p.actionDocumentCountList(),S(null,l("changed"),E.SUCCESS),await _.replace({name:ue,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},g=()=>{t.formType===x?U():P()};return Se(async()=>{var i,d;n.params.id?await r.actionGetDocumentDetailForUpdate(n.params.id):n.params.document_sub_type===I.BUSINESS_TRIP_DECREE_LOCAL&&((i=n==null?void 0:n.query)!=null&&i.compose_id)&&((d=n==null?void 0:n.query)==null?void 0:d.document_sub_type)===I.BUSINESS_TRIP&&await r.actionGetDocumentDetailForUpdate(n.query.compose_id)}),X(()=>{te(r.model)}),(i,d)=>{const q=ee,b=K,w=Ie,f=ze,V=ge,je=Y;return e(r).detailLoading?(k(),R(q,{key:0})):(k(),B(Z,{key:1},[s(e(le),{title:C.value},{content:u(()=>[s(me,{"onEmit:preview":$,"onEmit:clearForm":L},{default:u(()=>[s(je,null,{default:u(()=>[s(b,{"col-class":"w-1/2"},{default:u(()=>[s(he,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=v=>e(a).__curator.$model=v),error:e(a).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(a).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=v=>e(a).__employees.$model=v),error:e(a).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[s(nn,{modelValue:e(a).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=v=>e(a).__companies.$model=v),error:e(a).__companies,"text-truncate":""},null,8,["modelValue","error"])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[s(_n,{modelValue:e(a).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=v=>e(a).__tags.$model=v),error:e(a).__tags,"api-url":"tags","api-params":{document_sub_type:e(n).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:u(({value:v})=>[Xe(Pe(v.name),1)]),option:u(({value:v})=>[s(e(fn),{title:v.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[fe("div",Kn,[s(w,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=v=>e(a).start_date.$model=v),d[5]||(d[5]=v=>e(a).start_date.$model=e(Ee)(v))],error:e(a).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error","min-date"]),s(w,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=v=>e(a).end_date.$model=v),d[7]||(d[7]=v=>e(a).end_date.$model=e(Ee)(v))],error:e(a).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error","min-date"])])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[s(f,{modelValue:e(a).route.$model,"onUpdate:modelValue":d[8]||(d[8]=v=>e(a).route.$model=v),error:e(a).route,options:e(Ze),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type"},null,8,["modelValue","error","options"])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=v=>e(r).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=v=>e(a).__signers.$model=v),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),s(b,{"col-class":"w-1/2"},{default:u(()=>[s(V,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=v=>e(a).short_description.$model=v),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),s(b,{"col-class":"w-full"},{default:u(()=>[s(pe,{modelValue:e(a).content.$model,"onUpdate:modelValue":d[12]||(d[12]=v=>e(a).content.$model=v),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),s(qe,{modelValue:c.value,"onUpdate:modelValue":d[13]||(d[13]=v=>c.value=v),"send-button-loading":e(r).buttonLoading,"onEmit:send":g},{content:u(()=>[e(n).params.document_sub_type===e(I).BUSINESS_TRIP_DECREE_LOCAL?(k(),R(e(tn),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(n).params.document_sub_type===e(I).BUSINESS_TRIP_ORDER_LOCAL?(k(),R(e(rn),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(k(),R(e(an),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},Ml={__name:"OrderForm",props:{formType:{type:String,default:x}},setup(o){const t=o,l=Me(),n=ae(),_=A(),m=W(),r=J(),p=ne(l.rules,l.model),{t:a}=H(),c=N(!1),C=async()=>{var i,d,q,b;await p.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=F(l.model.__approvers),l.model.curator=(d=(i=l==null?void 0:l.model)==null?void 0:i.__curator)==null?void 0:d.user_id,l.model.sender=(b=(q=_==null?void 0:_.currentUser)==null?void 0:q.top_level_department)==null?void 0:b.id,l.model.files=l.model.__files.map(w=>({id:w.id})),l.model.document_type=m.params.document_type,l.model.document_sub_type=m.params.document_sub_type,l.model.journal=j.ORDERS_PROTOCOLS,l.model.register_date=Ee(l.model.register_date),l.model.__negotiators.forEach(w=>{l.model.signers.push(w.hasOwnProperty("user")?{id:w.id,user:w.user.id,type:be.NEGOTIATOR}:{user:w.id,type:be.NEGOTIATOR})}),m.query.compose_id&&(l.model.trip_notice_id=m.query.compose_id),c.value=!0)},$=()=>{},L=async()=>{try{const g=await l.actionCreateDocument(l.model);await n.actionDocumentCountList(),g&&(c.value=!1,S(null,a("document-sent"),E.SUCCESS),await r.replace({name:ce,query:{document_type:D.ORDER}}))}catch{S(null,a("error-occurred"),E.ERROR)}},O=async()=>{try{const g=await l.actionUpdateDocument({id:m.params.id,body:l.model});await n.actionDocumentCountList(),S(null,a("changed"),E.SUCCESS),await r.replace({name:ue,params:{id:m.params.id,document_type:m.params.document_type,document_sub_type:m.params.document_sub_type}})}catch{S(null,a("error-occurred"),E.ERROR)}},U=()=>{t.formType===x?L():O()},P=g=>{l.model.__files=[],g.forEach(i=>{l.model.__files.push(i)})};return we(async()=>{m.params.id&&await l.actionGetDocumentDetailForUpdate(m.params.id)}),X(()=>{te(l.model)}),(g,i)=>{const d=ee,q=K,b=ge,w=Ie,f=Y;return e(l).detailLoading?(k(),R(d,{key:0})):(k(),B(Z,{key:1},[s(e(le),{title:t.formType===e(x)?"create-order":"update-order"},{content:u(()=>[s(me,{"onEmit:preview":C,"onEmit:clearForm":$},{default:u(()=>[s(f,null,{default:u(()=>[s(q,{"col-class":"w-1/2"},{default:u(()=>[s(he,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=V=>e(p).__curator.$model=V),error:e(p).__curator,"api-url":"top-signers","api-params":{doc_types:e(m).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(b,{modelValue:e(p).register_number.$model,"onUpdate:modelValue":i[1]||(i[1]=V=>e(p).register_number.$model=V),error:e(p).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(w,{modelValue:e(p).register_date.$model,"onUpdate:modelValue":i[2]||(i[2]=V=>e(p).register_date.$model=V),error:e(p).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":i[3]||(i[3]=V=>e(l).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(p).__negotiators.$model,"onUpdate:modelValue":i[4]||(i[4]=V=>e(p).__negotiators.$model=V),error:e(p).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),s(q,{"col-class":"w-full"},{default:u(()=>[s(pe,{modelValue:e(p).content.$model,"onUpdate:modelValue":i[5]||(i[5]=V=>e(p).content.$model=V),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":P},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),s(qe,{modelValue:c.value,"onUpdate:modelValue":i[6]||(i[6]=V=>c.value=V),"send-button-loading":e(l).buttonLoading,"onEmit:send":U},{content:u(()=>[s(e(sn),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Qn=Q("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(o){this.buttonLoading=!0;const{response:t,error:l}=await re(de,o);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:o,body:t}){try{this.buttonLoading=!0;const{data:l}=await ie({id:o,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(o){try{this.detailLoading=!0;const{data:t}=await se(o);oe(this.model,t),this.model.__curator=await ve([],t.curator.id,!1),this.model.__approvers=await T(t.approvers),this.model.__signers=await T(t.signers)}catch{}finally{this.detailLoading=!1}}}}),jl={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:x}},setup(o){const t=o,{t:l}=H(),n=W(),_=J(),m=A(),r=Qn(),p=ae();ye();const a=N(!1),c=ne(r.rules,r.model),C=async()=>{var i,d,q,b;await c.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=F(r.model.__approvers),r.model.signers=F(r.model.__signers),r.model.curator=(d=(i=r==null?void 0:r.model)==null?void 0:i.__curator)==null?void 0:d.user_id,r.model.journal=j.INNER,r.model.company=m.currentUser.company.id,r.model.sender=(b=(q=m==null?void 0:m.currentUser)==null?void 0:q.top_level_department)==null?void 0:b.id,r.model.files=r.model.__files.map(w=>({id:w.id})),r.model.document_type=n.params.document_type,r.model.document_sub_type=n.params.document_sub_type,a.value=!0)},$=()=>{},L=g=>{r.model.__files=[],g.forEach(i=>{r.model.__files.push(i)})},O=async()=>{const g=await r.actionCreateDocument(r.model);await p.actionDocumentCountList(),g?(a.value=!1,S(null,l("document-sent"),E.SUCCESS),await _.replace({name:ce,query:{document_type:D.NOTICE}})):S(null,l("error-occurred"),E.ERROR)},U=async()=>{await r.actionUpdateDocument({id:n.params.id,body:r.model}),await p.actionDocumentCountList(),S(null,l("changed"),E.SUCCESS),await _.replace({name:ue,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},P=()=>{t.formType===x?O():U()};return Se(async()=>{n.params.id&&await r.actionGetDocumentDetailForUpdate(n.params.id)}),X(()=>{te(r.model)}),(g,i)=>{const d=ee,q=K,b=ge,w=Y;return e(r).detailLoading?(k(),R(d,{key:0})):(k(),B(Z,{key:1},[s(e(le),{title:t.formType===e(x)?"create-notice":"update-notice"},{content:u(()=>[s(me,{"onEmit:preview":C,"onEmit:clearForm":$},{default:u(()=>[s(w,null,{default:u(()=>[s(q,{"col-class":"w-1/2"},{default:u(()=>[s(he,{modelValue:e(c).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=f=>e(c).__curator.$model=f),error:e(c).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(b,{modelValue:e(c).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=f=>e(c).short_description.$model=f),error:e(c).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=f=>e(r).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(c).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=f=>e(c).__signers.$model=f),error:e(c).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),s(q,{"col-class":"w-full"},{default:u(()=>[s(pe,{modelValue:e(c).content.$model,"onUpdate:modelValue":i[4]||(i[4]=f=>e(c).content.$model=f),error:e(c).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),s(qe,{modelValue:a.value,"onUpdate:modelValue":i[5]||(i[5]=f=>a.value=f),"send-button-loading":e(r).buttonLoading,"onEmit:send":P},{content:u(()=>[s(e(dn),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Jn=Q("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(o){this.buttonLoading=!0;const{response:t,error:l}=await re(de,o);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:o,body:t}){try{this.buttonLoading=!0;const{data:l}=await ie({id:o,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(o){try{this.detailLoading=!0;const{data:t}=await se(o);oe(this.model,t),this.model.__curator=await ve([],t.curator.id,!1),this.model.__approvers=await T(t.approvers),this.model.__signers=await T(t.signers)}catch{}finally{this.detailLoading=!1}}}}),Fl={__name:"DecreeForm",props:{formType:{type:String,default:x}},setup(o){const t=o,{t:l}=H(),n=W(),_=J(),m=A(),r=ae();ye();const p=N(!1),a=Jn(),c=ne(a.rules,a.model),C=async()=>{var i,d,q,b;await c.value.$validate()&&(a.model.approvers=[],a.model.signers=[],a.model.approvers=F(a.model.__approvers),a.model.signers=F(a.model.__signers),a.model.curator=(d=(i=a==null?void 0:a.model)==null?void 0:i.__curator)==null?void 0:d.user_id,a.model.journal=j.ORDERS_PROTOCOLS,a.model.company=m.currentUser.company.id,a.model.sender=(b=(q=m==null?void 0:m.currentUser)==null?void 0:q.top_level_department)==null?void 0:b.id,a.model.files=a.model.__files.map(w=>({id:w.id})),a.model.document_type=n.params.document_type,a.model.document_sub_type=n.params.document_sub_type,n.query.compose_id&&(a.model.trip_notice_id=n.query.compose_id),p.value=!0)},$=()=>{},L=g=>{a.model.__files=[],g.forEach(i=>{a.model.__files.push(i)})},O=async()=>{const g=await a.actionCreateDocument(a.model);await r.actionDocumentCountList(),g?(p.value=!1,S(null,l("document-sent"),E.SUCCESS),await _.replace({name:ce,query:{document_type:n.params.document_type}})):S(null,l("error-occurred"),E.ERROR)},U=async()=>{await a.actionUpdateDocument({id:n.params.id,body:a.model}),await r.actionDocumentCountList(),S(null,l("changed"),E.SUCCESS),await _.replace({name:ue,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},P=()=>{t.formType===x?O():U()};return Se(async()=>{n.params.id&&await a.actionGetDocumentDetailForUpdate(n.params.id)}),X(()=>{te(a.model)}),(g,i)=>{const d=ee,q=K,b=ge,w=Y;return e(a).detailLoading?(k(),R(d,{key:0})):(k(),B(Z,{key:1},[s(e(le),{title:t.formType===e(x)?"create-decree":"update-decree"},{content:u(()=>[s(me,{"onEmit:preview":C,"onEmit:clearForm":$},{default:u(()=>[s(w,null,{default:u(()=>[s(q,{"col-class":"w-1/2"},{default:u(()=>[s(he,{modelValue:e(c).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=f=>e(c).__curator.$model=f),error:e(c).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(b,{modelValue:e(c).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=f=>e(c).short_description.$model=f),error:e(c).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=f=>e(a).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),s(q,{"col-class":"w-1/2"},{default:u(()=>[s(z,{modelValue:e(c).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=f=>e(c).__signers.$model=f),error:e(c).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),s(q,{"col-class":"w-full"},{default:u(()=>[s(pe,{modelValue:e(c).content.$model,"onUpdate:modelValue":i[4]||(i[4]=f=>e(c).content.$model=f),error:e(c).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":L},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),s(qe,{modelValue:p.value,"onUpdate:modelValue":i[5]||(i[5]=f=>p.value=f),"send-button-loading":e(a).buttonLoading,"onEmit:send":P},{content:u(()=>[s(e(cn),{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{Il as _,Nl as a,zl as b,Ml as c,jl as d,Fl as e};
