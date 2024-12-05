import{_ as H}from"./BaseRow-367f4857.js";import{_ as ve}from"./BaseInput-9f61a030.js";import{_ as W}from"./BaseCol-61cdf96c.js";import{v as I,bZ as Ue,a6 as Ve,o as x,c as B,i as n,z as p,h as e,ba as he,B as Ae,d0 as Be,cK as Ge,f as R,a as be,n as Ye,r as ze,G as Fe,aC as J,c0 as S,c1 as z,bP as M,u as G,t as Ie,b as K,ay as Q,cn as Z,F as X,aa as U,an as ee,cW as ge,d as ke,aE as He,cg as xe,a8 as We,d1 as Je}from"./index-372f96af.js";import{c as y,r as h,u as le}from"./index-18b9de3b.js";import{_ as Ke,a as Qe}from"./BranchMultiSelect-e933387c.js";import{_ as oe,b as Ze,a as Xe,g as el,h as ll,c as ol,d as nl,e as tl,f as rl,i as al}from"./BasePOA-83509f3c.js";import"./BaseTabMenu-b9c6e972.js";import"./dialog.esm-1d86e277.js";import"./tabpanel.esm-e8f3cf5d.js";import{s as ne,R as $,U as il,V as te,W as F,X as _e,Y as sl,Z as dl,_ as pl}from"./index-bd364e63.js";import"./BaseTabView-e9dfa7bb.js";import"./FileTabs-fd27211b.js";import{_ as L}from"./UserMultiSelect-0bfc116d.js";import{c as cl,u as j,w as re,d as E}from"./axios.config-17aa1efe.js";import{u as ye}from"./common-00803641.js";import{u as ae}from"./count.store-986f2810.js";import{f as ie,a as se,b as de}from"./index.store-4e5b7704.js";import{d as Ne,e as pe,c as ce}from"./index-c4c1f2d4.js";import{F as V}from"./constants-5c471c97.js";import{_ as Me}from"./BaseDropdown-de191c47.js";import{_ as Ee}from"./BaseCalendar-4b486ee9.js";import{_ as ul}from"./BaseMultiSelect-0d50eb67.js";import{f as we}from"./formatDate-0abeeb12.js";import"./qrcode.vue.esm-7046b957.js";import{c as ml}from"./Dropdown-e3484589.js";import"./menu.esm-14dad286.js";/* empty css                                                 */import"./avatar.esm-d9fbcf3b.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-cc6e6068.js";import"./common.store-06502754.js";import{_ as ql}from"./WithRadio-307fe267.js";import"./radiobutton.esm-2e5dc678.js";import"./checkbox.esm-3a334a27.js";import{_ as _l}from"./BaseBrickTab-d254ae67.js";import{_ as fl}from"./BaseFileUpload-f720f887.js";import{_ as bl}from"./BaseFroalaEditor-08d32f99.js";import{_ as gl}from"./BaseDialog-78debd1a.js";import"./dayjs.min-531150db.js";import{_ as wl}from"./WithSelectable-ab2b8344.js";const vl={class:"user-select"},Y={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(c,{emit:a}){const o=c,l=I([]),w=Ue(o,"modelValue"),s=async r=>{let{data:q}=await cl.get(`${o.apiUrl}/`,r);q.hasOwnProperty("results")?l.value=q.results:l.value=q};return Ve(async()=>{await s(o.apiParams)}),(r,q)=>(x(),B("div",vl,[n(Me,{modelValue:e(w),"onUpdate:modelValue":q[0]||(q[0]=t=>he(w)?w.value=t:null),options:l.value,"onUpdate:options":q[1]||(q[1]=t=>l.value=t),error:o.error,"api-url":o.apiUrl,"api-params":o.apiParams,"option-label":"full_name",label:o.label,placeholder:o.placeholder,required:o.required,searchable:""},{option:p(({option:t})=>[n(e(wl),{items:[t]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var yl=`
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
`,hl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Ae.extend({name:"editor",css:yl,classes:hl});(function(){try{return window.Quill}catch{return null}})();const fe={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(c){return["froala","tiny"].includes(c)}}},emits:["update:modelValue","emit:fileUpload"],setup(c,{emit:a}){const o=c,l=Ue(o,"modelValue"),w=I([{title:"text",slot:"editor",icon:Be},{title:"file",slot:"file",icon:Ge}]);return(s,r)=>(x(),R(_l,{"tab-panel-list":w.value,"panel-container-class":"px-0"},{editor:p(()=>[c.editor==="froala"?(x(),R(bl,{key:0,modelValue:e(l),"onUpdate:modelValue":r[0]||(r[0]=q=>he(l)?l.value=q:null)},null,8,["modelValue"])):(x(),R(ml,{key:1,modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=q=>he(l)?l.value=q:null)},null,8,["modelValue"]))]),file:p(()=>[be("div",{class:Ye(o.fileUploadContainerClasses)},[n(fl,{files:o.files,"onEmit:fileUpload":r[2]||(r[2]=q=>a("emit:fileUpload",q))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},kl={class:"flex flex-col justify-between h-full"},Vl={class:"px-6 py-4 overflow-y-auto"},xl={class:"actions p-6"},ue={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(c,{emit:a}){return(o,l)=>{const w=Fe;return x(),B("div",kl,[be("div",Vl,[ze(o.$slots,"default")]),be("div",xl,[n(w,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=s=>a("emit:clearForm"))}),n(w,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=s=>a("emit:preview"))})])])}}},Ul=J("sd-stores-inner",{state:()=>{var c,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(c=j().currentUser)==null?void 0:c.company)==null?void 0:a.id,content:null,document_type:S.INNER,document_sub_type:z.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:M.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__departments:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{},__signers:{required:y.withMessage("Поле не должен быть пустым",h)}}}},actions:{async actionCreateDocument(c){let a={...c,type:Ne,sub_type:Ne};this.buttonLoading=!0;const{response:o,error:l}=await re(de,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):Promise.reject(l)},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ie({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await se(c);ne(this.model,a),this.model.__approvers=await $(a.approvers),this.model.__signers=await $(a.signers),this.model.__departments=await il(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),El={class:"font-semibold text-xl"},me={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(c,{emit:a}){const l=Ue(c,"modelValue"),{t:w}=G();return(s,r)=>{const q=Fe,t=gl;return x(),R(t,{modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=u=>he(l)?l.value=u:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:p(()=>[be("span",El,Ie(e(w)("preview")),1)]),content:p(()=>[ze(s.$slots,"content")]),footer:p(()=>[n(q,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),n(q,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:c.sendButtonLoading,onClick:r[0]||(r[0]=u=>a("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},ko={__name:"InnerForm",props:{formType:{type:String,default:V}},setup(c){const a=c,o=j(),l=Ul();ye();const w=ae(),s=I(!1);I(null);const{t:r}=G(),q=K(),t=Q(),u=le(l.rules,l.model),D=async()=>{await u.value.$validate()&&(s.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(i=>i.id),l.model.files=[],l.model.files=l.model.__files.map(i=>({id:i.id})),l.model.journal=M.INNER,l.model.sender=o.currentUser.top_level_department.id,l.model.approvers=F(l.model.__approvers),l.model.signers=F(l.model.__signers),l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type)},C=()=>{a.formType===V?T():O()},T=async()=>{const v=await l.actionCreateDocument(l.model);await w.actionCountList(),v?(s.value=!1,E(null,r("document-sent"),U.SUCCESS),await q.replace({name:pe,query:{document_type:S.INNER}})):E(null,r("error-occurred"),U.ERROR)},O=async()=>{await l.actionUpdateDocument({id:t.params.id,body:l.model}),await w.actionCountList(),E(null,r("document-sent"),U.SUCCESS),await q.replace({name:ce,params:{id:t.params.id,document_type:S.INNER,document_sub_type:z.SERVICE_LETTER}})},P=()=>{console.log("Clear Form")},N=v=>{l.model.__files=[],v.forEach(i=>{l.model.__files.push(i)})};return Ve(async()=>{t.params.id&&await l.actionGetDocumentDetailForUpdate(t.params.id)}),Z(()=>{te(l.model)}),(v,i)=>{const m=ee,d=W,g=ve,_=H;return e(l).detailLoading?(x(),R(m,{key:0})):(x(),B(X,{key:1},[n(e(oe),{title:a.formType===e(V)?"create-sd-inner":"update-sd-inner"},{content:p(()=>[n(ue,{"onEmit:preview":D,"onEmit:clearForm":P},{default:p(()=>[n(_,null,{default:p(()=>[n(d,{"col-class":"w-1/2"},{default:p(()=>[n(Ke,{modelValue:e(u).__departments.$model,"onUpdate:modelValue":i[0]||(i[0]=f=>e(u).__departments.$model=f),error:e(u).__departments},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(g,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=f=>e(u).short_description.$model=f),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(u).__approvers.$model,"onUpdate:modelValue":i[2]||(i[2]=f=>e(u).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=f=>e(u).__signers.$model=f),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-full"},{default:p(()=>[n(fe,{modelValue:e(u).content.$model,"onUpdate:modelValue":i[4]||(i[4]=f=>e(u).content.$model=f),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:s.value,"onUpdate:modelValue":i[5]||(i[5]=f=>s.value=f),"send-button-loading":e(l).buttonLoading,"onEmit:send":C},{content:p(()=>{var f,b;return[n(Ze,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(b=(f=e(o).currentUser)==null?void 0:f.top_level_department)==null?void 0:b.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},$l=J("sd-store-application",{state:()=>{var c,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(c=j().currentUser)==null?void 0:c.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{}}}},actions:{async actionCreateDocument(c){let a={...c};this.buttonLoading=!0;const{response:o,error:l}=await re(de,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ie({id:c,body:a});return Promise.resolve(o)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await se(c);ne(this.model,a),this.model.__approvers=await $(a.approvers),this.model.__signers=await $(a.signers.filter(o=>o.type===ge.SIGNER)),this.model.__curator=await _e([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),je=J("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:j().currentUser.company.id,curator:null,document_type:S.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:M.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:y.withMessage("Поле не должен быть пустым",h)},register_date:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__negotiators:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await re(de,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ie({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await se(c);ne(this.model,a),this.model.__signers=await $(a.signers.filter(o=>o.type!==ge.NEGOTIATOR)),this.model.__negotiators=await $(a.signers.filter(o=>o.type===ge.NEGOTIATOR)),this.model.__approvers=await $(a.approvers),this.model.__curator=await _e([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),Vo={__name:"ApplicationForm",props:{formType:{type:String,default:V}},setup(c){const a=c,o=j(),l=$l();ye();const w=ae();je();const s=I(!1);I(null);const{t:r}=G(),q=K(),t=Q(),u=le(l.rules,l.model),D=async()=>{var i,m,d,g,_;await u.value.$validate()&&(s.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(i=o==null?void 0:o.currentUser)==null?void 0:i.id}],l.model.sender=(d=(m=o==null?void 0:o.currentUser)==null?void 0:m.top_level_department)==null?void 0:d.id,l.model.curator=(_=(g=l==null?void 0:l.model)==null?void 0:g.__curator)==null?void 0:_.user_id,l.model.journal=M.APPLICATION,l.model.document_type=t.params.document_type,l.model.document_sub_type=t.params.document_sub_type,l.model.approvers=F(l.model.__approvers))},C=async()=>{},T=()=>{a.formType===V?O():P()},O=async()=>{const v=await l.actionCreateDocument(l.model);await w.actionCountList(),v?(s.value=!1,E(null,r("document-sent"),U.SUCCESS),await q.replace({name:pe,query:{document_type:S.APPLICATION}})):E(null,r("error-occurred"),U.ERROR)},P=async()=>{await l.actionUpdateDocument({id:t.params.id,body:l.model}),await w.actionCountList(),E(null,r("document-sent"),U.SUCCESS),await q.replace({name:ce,params:{id:t.params.id,document_type:S.APPLICATION,document_sub_type:z.LABOR_LEAVE}})},N=v=>{l.model.__files=[],v.forEach(i=>{l.model.__files.push(i)})};return Ve(async()=>{t.params.id&&await l.actionGetDocumentDetailForUpdate(t.params.id)}),Z(()=>{te(l.model)}),(v,i)=>{const m=ee,d=W,g=H;return e(l).detailLoading?(x(),R(m,{key:0})):(x(),B(X,{key:1},[n(e(oe),{title:a.formType===e(V)?"create-sd-application":"update-sd-application"},{content:p(()=>[n(ue,{"onEmit:preview":D,"onEmit:clearForm":C},{default:p(()=>[n(g,null,{default:p(()=>[n(d,{"col-class":"w-1/2"},{default:p(()=>[n(Y,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=_=>e(u).__curator.$model=_),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(u).__approvers.$model,"onUpdate:modelValue":i[1]||(i[1]=_=>e(u).__approvers.$model=_),error:e(u).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":i[2]||(i[2]=_=>e(u).__signers.$model=_),disabled:"",label:"signers",placeholder:e(o).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),n(d,{"col-class":"w-full"},{default:p(()=>[n(fe,{modelValue:e(u).content.$model,"onUpdate:modelValue":i[3]||(i[3]=_=>e(u).content.$model=_),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:s.value,"onUpdate:modelValue":i[4]||(i[4]=_=>s.value=_),"send-button-loading":e(l).buttonLoading,"onEmit:send":T},{content:p(()=>[n(Xe,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:a.formType===e(V)?e(o).currentUser:e(l).model.__signers[0].user,signers:a.formType===e(V)?[e(o).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Sl=J("sd-notice-store",{state:()=>(j(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:S.NOTICE,document_sub_type:z.BUSINESS_TRIP,journal:M.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",h)},start_date:{required:y.withMessage("Поле не должен быть пустым",h)},route:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__companies:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__employees:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},__tags:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await re(de,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ie({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c,a=!1){try{this.detailLoading=!0;const{data:o}=await se(c);ne(this.model,o),this.model.__companies=[],this.model.__curator=await _e([],o.curator.id,!1),this.model.__employees=await $(o.notices),a?(this.model.__approvers=await $(o.approvers.filter(l=>{var w,s;return((w=l==null?void 0:l.user)==null?void 0:w.id)!==((s=o==null?void 0:o.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await $(o.approvers),this.model.__signers=await $(o.signers),this.model.__companies=await sl(o.notices[0].destinations),this.model.__tags=await dl(o.tags),this.model.start_date=o.notices[0].start_date,this.model.end_date=o.notices[0].end_date,this.model.__tags=o.tags,this.model.route=o.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),Ll={class:"flex w-full gap-x-4"},xo={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:V}},setup(c){const a=c,{t:o}=G(),l=Q(),w=K(),s=j(),r=Sl(),q=ae();ye();const t=le(r.rules,r.model),u=I(!1),D=ke(()=>{const m=a.formType===V,d=l.params.document_sub_type;return d===z.BUSINESS_TRIP_DECREE_LOCAL?m?"create-decree":"update-decree":d===z.BUSINESS_TRIP_ORDER_LOCAL?m?"create-order":"update-order":m?"create-business-trip-notice":"update-business-trip-notice"}),C=ke(()=>{var m,d;return l.params.document_sub_type===z.BUSINESS_TRIP_DECREE_LOCAL&&((m=l==null?void 0:l.query)==null?void 0:m.compose_id)&&((d=l==null?void 0:l.query)==null?void 0:d.document_sub_type)===z.BUSINESS_TRIP});He(()=>r.model.__tags,m=>{if(a.formType===V)if(m&&m.length){let d=`${m.map(g=>g.name_uz).join(", ")} yuzasidan`;r.model.short_description=d.charAt(0).toUpperCase()+d.slice(1).toLowerCase()}else r.model.short_description=null});const T=async()=>{var d,g,_,f,b;await t.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=F(r.model.__approvers),r.model.signers=F(r.model.__signers),r.model.curator=(g=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:g.user_id,r.model.journal=l.params.document_type===S.DECREE||l.params.document_type===S.ORDER?M.ORDERS_PROTOCOLS:M.INNER,r.model.company=s.currentUser.company.id,r.model.notices=r.model.__employees.map(A=>({start_date:r.model.start_date,end_date:r.model.end_date,user:A.id,route:r.model.route,companies:r.model.__companies.map(qe=>qe.id)})),r.model.sender=(f=(_=s==null?void 0:s.currentUser)==null?void 0:_.top_level_department)==null?void 0:f.id,r.model.tags=r.model.__tags.map(A=>({id:A.id})),r.model.files=r.model.__files.map(A=>({id:A.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,C.value&&(r.model.trip_notice_id=(b=l==null?void 0:l.query)==null?void 0:b.compose_id),u.value=!0)},O=()=>{},P=m=>{r.model.__files=[],m.forEach(d=>{r.model.__files.push(d)})},N=async()=>{const m=await r.actionCreateDocument(r.model);await q.actionCountList(),m?(u.value=!1,E(null,o("document-sent"),U.SUCCESS),await w.replace({name:pe,query:{document_type:l.params.document_sub_type===z.BUSINESS_TRIP_DECREE_LOCAL?S.DECREE:l.params.document_sub_type===z.BUSINESS_TRIP_ORDER_LOCAL?S.ORDER:S.NOTICE}})):E(null,o("error-occurred"),U.ERROR)},v=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await q.actionCountList(),E(null,o("changed"),U.SUCCESS),await w.replace({name:ce,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},i=()=>{a.formType===V?N():v()};return xe(async()=>{l.params.id?await r.actionGetDocumentDetailForUpdate(l.params.id):C.value&&await r.actionGetDocumentDetailForUpdate(l.query.compose_id,!0)}),Z(()=>{te(r.model)}),(m,d)=>{const g=ee,_=W,f=Ee,b=Me,A=ve,qe=H;return e(r).detailLoading?(x(),R(g,{key:0})):(x(),B(X,{key:1},[n(e(oe),{title:D.value},{content:p(()=>[n(ue,{"onEmit:preview":T,"onEmit:clearForm":O},{default:p(()=>[n(qe,null,{default:p(()=>[n(_,{"col-class":"w-1/2"},{default:p(()=>[n(Y,{modelValue:e(t).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=k=>e(t).__curator.$model=k),error:e(t).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(t).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=k=>e(t).__employees.$model=k),error:e(t).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:p(()=>[n(Qe,{modelValue:e(t).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=k=>e(t).__companies.$model=k),error:e(t).__companies,"text-truncate":""},null,8,["modelValue","error"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:p(()=>[n(ul,{modelValue:e(t).__tags.$model,"onUpdate:modelValue":d[3]||(d[3]=k=>e(t).__tags.$model=k),error:e(t).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:p(({value:k})=>[We(Ie(k.name),1)]),option:p(({value:k})=>[n(e(ql),{title:k.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:p(()=>[be("div",Ll,[n(f,{modelValue:e(t).start_date.$model,"onUpdate:modelValue":[d[4]||(d[4]=k=>e(t).start_date.$model=k),d[5]||(d[5]=k=>e(t).start_date.$model=e(we)(k))],error:e(t).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error","min-date"]),n(f,{modelValue:e(t).end_date.$model,"onUpdate:modelValue":[d[6]||(d[6]=k=>e(t).end_date.$model=k),d[7]||(d[7]=k=>e(t).end_date.$model=e(we)(k))],error:e(t).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error","min-date"])])]),_:1}),n(_,{"col-class":"w-1/2"},{default:p(()=>[n(b,{modelValue:e(t).route.$model,"onUpdate:modelValue":d[8]||(d[8]=k=>e(t).route.$model=k),error:e(t).route,options:e(Je),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type"},null,8,["modelValue","error","options"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[9]||(d[9]=k=>e(r).model.__approvers=k),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(t).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=k=>e(t).__signers.$model=k),error:e(t).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:p(()=>[n(A,{modelValue:e(t).short_description.$model,"onUpdate:modelValue":d[11]||(d[11]=k=>e(t).short_description.$model=k),error:e(t).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(_,{"col-class":"w-full"},{default:p(()=>[n(fe,{modelValue:e(t).content.$model,"onUpdate:modelValue":d[12]||(d[12]=k=>e(t).content.$model=k),error:e(t).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":P},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:u.value,"onUpdate:modelValue":d[13]||(d[13]=k=>u.value=k),"send-button-loading":e(r).buttonLoading,"onEmit:send":i},{content:p(()=>[e(l).params.document_sub_type===e(z).BUSINESS_TRIP_DECREE_LOCAL?(x(),R(e(el),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(z).BUSINESS_TRIP_ORDER_LOCAL?(x(),R(e(ll),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(x(),R(e(ol),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},Uo={__name:"OrderForm",props:{formType:{type:String,default:V}},setup(c){const a=c,o=je(),l=ae(),w=j(),s=Q(),r=K(),q=le(o.rules,o.model),{t}=G(),u=I(!1),D=async()=>{var i,m,d,g;await q.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=F(o.model.__approvers),o.model.curator=(m=(i=o==null?void 0:o.model)==null?void 0:i.__curator)==null?void 0:m.user_id,o.model.sender=(g=(d=w==null?void 0:w.currentUser)==null?void 0:d.top_level_department)==null?void 0:g.id,o.model.files=o.model.__files.map(_=>({id:_.id})),o.model.document_type=s.params.document_type,o.model.document_sub_type=s.params.document_sub_type,o.model.journal=M.ORDERS_PROTOCOLS,o.model.register_date=we(o.model.register_date),o.model.__negotiators.forEach(_=>{o.model.signers.push(_.hasOwnProperty("user")?{id:_.id,user:_.user.id,type:ge.NEGOTIATOR}:{user:_.id,type:ge.NEGOTIATOR})}),s.query.compose_id&&(o.model.trip_notice_id=s.query.compose_id),u.value=!0)},C=()=>{},T=async()=>{try{const v=await o.actionCreateDocument(o.model);await l.actionCountList(),v&&(u.value=!1,E(null,t("document-sent"),U.SUCCESS),await r.replace({name:pe,query:{document_type:S.ORDER}}))}catch{E(null,t("error-occurred"),U.ERROR)}},O=async()=>{try{const v=await o.actionUpdateDocument({id:s.params.id,body:o.model});await l.actionCountList(),E(null,t("changed"),U.SUCCESS),await r.replace({name:ce,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{E(null,t("error-occurred"),U.ERROR)}},P=()=>{a.formType===V?T():O()},N=v=>{o.model.__files=[],v.forEach(i=>{o.model.__files.push(i)})};return Ve(async()=>{s.params.id&&await o.actionGetDocumentDetailForUpdate(s.params.id)}),Z(()=>{te(o.model)}),(v,i)=>{const m=ee,d=W,g=ve,_=Ee,f=H;return e(o).detailLoading?(x(),R(m,{key:0})):(x(),B(X,{key:1},[n(e(oe),{title:a.formType===e(V)?"create-order":"update-order"},{content:p(()=>[n(ue,{"onEmit:preview":D,"onEmit:clearForm":C},{default:p(()=>[n(f,null,{default:p(()=>[n(d,{"col-class":"w-1/2"},{default:p(()=>[n(Y,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=b=>e(q).__curator.$model=b),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(g,{modelValue:e(q).register_number.$model,"onUpdate:modelValue":i[1]||(i[1]=b=>e(q).register_number.$model=b),error:e(q).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(_,{modelValue:e(q).register_date.$model,"onUpdate:modelValue":i[2]||(i[2]=b=>e(q).register_date.$model=b),error:e(q).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":i[3]||(i[3]=b=>e(o).model.__approvers=b),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(q).__negotiators.$model,"onUpdate:modelValue":i[4]||(i[4]=b=>e(q).__negotiators.$model=b),error:e(q).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-full"},{default:p(()=>[n(fe,{modelValue:e(q).content.$model,"onUpdate:modelValue":i[5]||(i[5]=b=>e(q).content.$model=b),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:u.value,"onUpdate:modelValue":i[6]||(i[6]=b=>u.value=b),"send-button-loading":e(o).buttonLoading,"onEmit:send":P},{content:p(()=>[n(e(nl),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Cl=J("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await re(de,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ie({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await se(c);ne(this.model,a),this.model.__curator=await _e([],a.curator.id,!1),this.model.__approvers=await $(a.approvers),this.model.__signers=await $(a.signers)}catch{}finally{this.detailLoading=!1}}}}),Eo={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:V}},setup(c){const a=c,{t:o}=G(),l=Q(),w=K(),s=j(),r=Cl(),q=ae();ye();const t=I(!1),u=le(r.rules,r.model),D=async()=>{var i,m,d,g;await u.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=F(r.model.__approvers),r.model.signers=F(r.model.__signers),r.model.curator=(m=(i=r==null?void 0:r.model)==null?void 0:i.__curator)==null?void 0:m.user_id,r.model.journal=M.INNER,r.model.company=s.currentUser.company.id,r.model.sender=(g=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:g.id,r.model.files=r.model.__files.map(_=>({id:_.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,t.value=!0)},C=()=>{},T=v=>{r.model.__files=[],v.forEach(i=>{r.model.__files.push(i)})},O=async()=>{const v=await r.actionCreateDocument(r.model);await q.actionCountList(),v?(t.value=!1,E(null,o("document-sent"),U.SUCCESS),await w.replace({name:pe,query:{document_type:S.NOTICE}})):E(null,o("error-occurred"),U.ERROR)},P=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await q.actionCountList(),E(null,o("changed"),U.SUCCESS),await w.replace({name:ce,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},N=()=>{a.formType===V?O():P()};return xe(async()=>{l.params.id&&await r.actionGetDocumentDetailForUpdate(l.params.id)}),Z(()=>{te(r.model)}),(v,i)=>{const m=ee,d=W,g=ve,_=H;return e(r).detailLoading?(x(),R(m,{key:0})):(x(),B(X,{key:1},[n(e(oe),{title:a.formType===e(V)?"create-notice":"update-notice"},{content:p(()=>[n(ue,{"onEmit:preview":D,"onEmit:clearForm":C},{default:p(()=>[n(_,null,{default:p(()=>[n(d,{"col-class":"w-1/2"},{default:p(()=>[n(Y,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=f=>e(u).__curator.$model=f),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(g,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=f=>e(u).short_description.$model=f),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=f=>e(r).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=f=>e(u).__signers.$model=f),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-full"},{default:p(()=>[n(fe,{modelValue:e(u).content.$model,"onUpdate:modelValue":i[4]||(i[4]=f=>e(u).content.$model=f),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":T},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:t.value,"onUpdate:modelValue":i[5]||(i[5]=f=>t.value=f),"send-button-loading":e(r).buttonLoading,"onEmit:send":N},{content:p(()=>[n(e(tl),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Rl=J("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await re(de,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ie({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await se(c);ne(this.model,a),this.model.__curator=await _e([],a.curator.id,!1),this.model.__approvers=await $(a.approvers),this.model.__signers=await $(a.signers)}catch{}finally{this.detailLoading=!1}}}}),$o={__name:"DecreeForm",props:{formType:{type:String,default:V}},setup(c){const a=c,{t:o}=G(),l=Q(),w=K(),s=j(),r=ae();ye();const q=I(!1),t=Rl(),u=le(t.rules,t.model),D=async()=>{var i,m,d,g;await u.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.approvers=F(t.model.__approvers),t.model.signers=F(t.model.__signers),t.model.curator=(m=(i=t==null?void 0:t.model)==null?void 0:i.__curator)==null?void 0:m.user_id,t.model.journal=M.ORDERS_PROTOCOLS,t.model.company=s.currentUser.company.id,t.model.sender=(g=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:g.id,t.model.files=t.model.__files.map(_=>({id:_.id})),t.model.document_type=l.params.document_type,t.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(t.model.trip_notice_id=l.query.compose_id),q.value=!0)},C=()=>{},T=v=>{t.model.__files=[],v.forEach(i=>{t.model.__files.push(i)})},O=async()=>{const v=await t.actionCreateDocument(t.model);await r.actionCountList(),v?(q.value=!1,E(null,o("document-sent"),U.SUCCESS),await w.replace({name:pe,query:{document_type:l.params.document_type}})):E(null,o("error-occurred"),U.ERROR)},P=async()=>{await t.actionUpdateDocument({id:l.params.id,body:t.model}),await r.actionCountList(),E(null,o("changed"),U.SUCCESS),await w.replace({name:ce,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},N=()=>{a.formType===V?O():P()};return xe(async()=>{l.params.id&&await t.actionGetDocumentDetailForUpdate(l.params.id)}),Z(()=>{te(t.model)}),(v,i)=>{const m=ee,d=W,g=ve,_=H;return e(t).detailLoading?(x(),R(m,{key:0})):(x(),B(X,{key:1},[n(e(oe),{title:a.formType===e(V)?"create-decree":"update-decree"},{content:p(()=>[n(ue,{"onEmit:preview":D,"onEmit:clearForm":C},{default:p(()=>[n(_,null,{default:p(()=>[n(d,{"col-class":"w-1/2"},{default:p(()=>[n(Y,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=f=>e(u).__curator.$model=f),error:e(u).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(g,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=f=>e(u).short_description.$model=f),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=f=>e(t).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=f=>e(u).__signers.$model=f),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-full"},{default:p(()=>[n(fe,{modelValue:e(u).content.$model,"onUpdate:modelValue":i[4]||(i[4]=f=>e(u).content.$model=f),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":T},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:q.value,"onUpdate:modelValue":i[5]||(i[5]=f=>q.value=f),"send-button-loading":e(t).buttonLoading,"onEmit:send":N},{content:p(()=>[n(e(rl),{"compose-model":e(t).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Dl=J("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__signers:[],__user:null},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",h)},start_date:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},__user:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:a,error:o}=await re(de,c);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:a}=await se(c);ne(this.model,a),this.model.__curator=await _e([],a.curator.id,!1),this.model.__approvers=await $(a.approvers),this.model.__signers=await $(a.signers),this.model.__user=await pl("users/personal-information",[],!1,a.user.id)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:c,body:a}){try{this.buttonLoading=!0;const{data:o}=await ie({id:c,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}}}}),So={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:V}},setup(c){const a=c,o=Q(),l=K(),w=j(),s=Dl(),r=ae(),{t:q}=G(),t=le(s.rules,s.model),u=I(!1),D=ke(()=>a.formType===V?"create-poa":"update-poa"),C=ke(()=>s.model.start_date?new Date(s.model.start_date):new Date),T=async()=>{var m,d,g,_,f,b,A,qe,k,$e,Se,Le,Ce,Re,De,Te,Oe,Pe;if(await t.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=F(s.model.__approvers),s.model.signers=F(s.model.__signers),s.model.curator=(d=(m=s==null?void 0:s.model)==null?void 0:m.__curator)==null?void 0:d.user_id,s.model.user=(_=(g=s==null?void 0:s.model)==null?void 0:g.__user)==null?void 0:_.id,s.model.journal=M.POWER_OF_ATTORNEY,s.model.company=(b=(f=w.currentUser)==null?void 0:f.company)==null?void 0:b.id,s.model.sender=(qe=(A=w==null?void 0:w.currentUser)==null?void 0:A.top_level_department)==null?void 0:qe.id,s.model.document_type=o.params.document_type,s.model.document_sub_type=o.params.document_sub_type,s.model.content=".",!(($e=(k=s==null?void 0:s.model)==null?void 0:k.__user)!=null&&$e.passport_seria||(Le=(Se=s==null?void 0:s.model)==null?void 0:Se.__user)!=null&&Le.passport_number||(Re=(Ce=s==null?void 0:s.model)==null?void 0:Ce.__user)!=null&&Re.passport_issue_date||(Te=(De=s==null?void 0:s.model)==null?void 0:De.__user)!=null&&Te.passport_issued_by)){E(null,`${(Pe=(Oe=s.model)==null?void 0:Oe.__user)==null?void 0:Pe.full_name}: ${q("passport-details-error")}`,U.WARNING);return}u.value=!0}},O=()=>{},P=async()=>{const i=await s.actionCreateDocument(s.model);await r.actionCountList(),i?(u.value=!1,E(null,q("document-sent"),U.SUCCESS),await l.replace({name:pe,query:{document_type:S.POWER_OF_ATTORNEY}})):E(null,q("error-occurred"),U.ERROR)},N=async()=>{await s.actionUpdateDocument({id:o.params.id,body:s.model}),await r.actionCountList(),E(null,q("changed"),U.SUCCESS),await l.replace({name:ce,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},v=()=>{a.formType===V?P():N()};return xe(async()=>{o.params.id&&await s.actionGetDocumentDetailForUpdate(o.params.id)}),Z(()=>{te(s.model)}),(i,m)=>{const d=ee,g=W,_=Ee,f=H;return e(s).detailLoading?(x(),R(d,{key:0})):(x(),B(X,{key:1},[n(e(oe),{title:D.value},{content:p(()=>[n(ue,{"onEmit:preview":T,"onEmit:clearForm":O},{default:p(()=>[n(f,null,{default:p(()=>[n(g,{"col-class":"w-1/2"},{default:p(()=>[n(Y,{modelValue:e(t).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=b=>e(t).__curator.$model=b),error:e(t).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(g,{"col-class":"w-1/2"},{default:p(()=>[n(Y,{modelValue:e(t).__user.$model,"onUpdate:modelValue":m[1]||(m[1]=b=>e(t).__user.$model=b),error:e(t).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee"},null,8,["modelValue","error"])]),_:1}),n(g,{"col-class":"w-1/2"},{default:p(()=>[n(_,{modelValue:e(t).start_date.$model,"onUpdate:modelValue":[m[2]||(m[2]=b=>e(t).start_date.$model=b),m[3]||(m[3]=b=>e(t).start_date.$model=e(we)(b))],error:e(t).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),n(g,{"col-class":"w-1/2"},{default:p(()=>[n(_,{modelValue:e(t).end_date.$model,"onUpdate:modelValue":[m[4]||(m[4]=b=>e(t).end_date.$model=b),m[5]||(m[5]=b=>e(t).end_date.$model=e(we)(b))],error:e(t).end_date,"min-date":C.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),n(g,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":m[6]||(m[6]=b=>e(s).model.__approvers=b),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(g,{"col-class":"w-1/2"},{default:p(()=>[n(L,{modelValue:e(t).__signers.$model,"onUpdate:modelValue":m[7]||(m[7]=b=>e(t).__signers.$model=b),error:e(t).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:u.value,"onUpdate:modelValue":m[8]||(m[8]=b=>u.value=b),"send-button-loading":e(s).buttonLoading,"onEmit:send":v},{content:p(()=>[n(al,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{Vo as _,xo as a,So as b,ko as c,Uo as d,Eo as e,$o as f};
