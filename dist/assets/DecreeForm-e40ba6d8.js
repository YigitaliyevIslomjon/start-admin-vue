import{_ as G}from"./BaseRow-eca1b706.js";import{_ as _e}from"./BaseInput-641ae6ff.js";import{_ as H}from"./BaseCol-b9750f84.js";import{v as I,b$ as ye,a6 as he,o as k,c as A,i as t,z as d,h as e,bd as we,B as Re,cQ as De,cI as Te,f as L,a as ue,n as Oe,r as Ve,G as Ue,aH as Y,c2 as $,c3 as R,bR as F,u as B,t as Ee,b as Q,aw as J,cn as K,F as W,ax as U,al as X,cK as qe,d as Ne,aC as Pe,ch as ke,a8 as ze,cR as Ie}from"./index-71251b80.js";import{c as v,r as y,u as Z}from"./index-ec7615e5.js";import{_ as Fe,a as Me}from"./BranchMultiSelect-7e828f75.js";import{_ as ee,b as je,a as Ae,g as Be,h as Ge,c as He,d as Ye,e as Qe,f as Je}from"./DecreeTemplate-f57d8c9c.js";import"./BaseTabMenu-e7f3b63f.js";import"./dialog.esm-9c0b2f78.js";import"./tabpanel.esm-cc59e409.js";import{s as le,P as S,S as Ke,T as oe,U as M,V as fe,W as We,X as Xe}from"./index-9d6d92b8.js";import"./BaseTabView-687bd541.js";import"./FileTabs-913b8dae.js";import{_ as C}from"./UserMultiSelect-f2f17d3b.js";import{c as Ze,u as j,w as ne,d as E}from"./axios.config-bea1728a.js";import{u as be}from"./common-a6aea3b0.js";import{u as te}from"./count.store-2e1f09cd.js";import{f as re,a as ae,b as ie}from"./index.store-b485e58a.js";import{d as xe,e as se,c as de}from"./index-c4c1f2d4.js";import{F as x}from"./constants-5c471c97.js";import{_ as Se}from"./BaseDropdown-01ad59a8.js";import{_ as $e}from"./BaseCalendar-7a67465c.js";import{_ as el}from"./WithLabel-3ecb1c9a.js";import{f as ve}from"./formatDate-83e7ac26.js";import"./qrcode.vue.esm-4b08ae2f.js";import{c as ll}from"./Dropdown-342d4486.js";import"./menu.esm-ac2a195a.js";/* empty css                                                 */import"./avatar.esm-8a4190a5.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-0401fd46.js";import"./common.store-e0447aba.js";import{_ as ol}from"./WithRadio-94d95cbf.js";import"./radiobutton.esm-64d4158d.js";import"./checkbox.esm-2e854df9.js";import"./dayjs.min-dc7286b3.js";import{_ as nl}from"./WithSelectable-cebb7a25.js";import{_ as tl}from"./BaseBrickTab-aa021672.js";import{_ as rl}from"./BaseFileUpload-28875ea8.js";import{_ as al}from"./BaseFroalaEditor-933a33b1.js";import{_ as il}from"./BaseDialog-fc46a1f4.js";const sl={class:"user-select"},ge={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(c,{emit:i}){const o=c,l=I([]),w=ye(o,"modelValue"),_=async n=>{let{data:m}=await Ze.get(`${o.apiUrl}/`,n);m.hasOwnProperty("results")?l.value=m.results:l.value=m};return he(async()=>{await _(o.apiParams)}),(n,m)=>(k(),A("div",sl,[t(Se,{modelValue:e(w),"onUpdate:modelValue":m[0]||(m[0]=a=>we(w)?w.value=a:null),options:l.value,"onUpdate:options":m[1]||(m[1]=a=>l.value=a),error:o.error,"api-url":o.apiUrl,"api-params":o.apiParams,"option-label":"full_name",label:o.label,placeholder:o.placeholder,required:o.required,searchable:""},{option:d(({option:a})=>[t(e(nl),{items:[a]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var dl=`
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
`,cl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Re.extend({name:"editor",css:dl,classes:cl});(function(){try{return window.Quill}catch{return null}})();const ce={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(c){return["froala","tiny"].includes(c)}}},emits:["update:modelValue","emit:fileUpload"],setup(c,{emit:i}){const o=c,l=ye(o,"modelValue"),w=I([{title:"text",slot:"editor",icon:De},{title:"file",slot:"file",icon:Te}]);return(_,n)=>(k(),L(tl,{"tab-panel-list":w.value,"panel-container-class":"px-0"},{editor:d(()=>[c.editor==="froala"?(k(),L(al,{key:0,modelValue:e(l),"onUpdate:modelValue":n[0]||(n[0]=m=>we(l)?l.value=m:null)},null,8,["modelValue"])):(k(),L(ll,{key:1,modelValue:e(l),"onUpdate:modelValue":n[1]||(n[1]=m=>we(l)?l.value=m:null)},null,8,["modelValue"]))]),file:d(()=>[ue("div",{class:Oe(o.fileUploadContainerClasses)},[t(rl,{files:o.files,"onEmit:fileUpload":n[2]||(n[2]=m=>i("emit:fileUpload",m))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},pl={class:"flex flex-col justify-between h-full"},ml={class:"px-6 py-4 overflow-y-auto"},ul={class:"actions p-6"},pe={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(c,{emit:i}){return(o,l)=>{const w=Ue;return k(),A("div",pl,[ue("div",ml,[Ve(o.$slots,"default")]),ue("div",ul,[t(w,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=_=>i("emit:clearForm"))}),t(w,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=_=>i("emit:preview"))})])])}}},ql=Y("sd-stores-inner",{state:()=>{var c,i;return{buttonLoading:!1,detailLoading:!1,model:{company:(i=(c=j().currentUser)==null?void 0:c.company)==null?void 0:i.id,content:null,document_type:$.INNER,document_sub_type:R.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:F.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:v.withMessage("Поле не должен быть пустым",y)},content:{required:v.withMessage("Поле не должен быть пустым",y)},__departments:{required:v.withMessage("Поле не должен быть пустым",y)},__approvers:{},__signers:{required:v.withMessage("Поле не должен быть пустым",y)}}}},actions:{async actionCreateDocument(c){let i={...c,type:xe,sub_type:xe};this.buttonLoading=!0;const{response:o,error:l}=await ne(ie,i);return o?(this.buttonLoading=!1,Promise.resolve(o)):Promise.reject(l)},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:o}=await re({id:c,body:i});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await ae(c);le(this.model,i),this.model.__approvers=await S(i.approvers),this.model.__signers=await S(i.signers),this.model.__departments=await Ke(i.receiver.departments),this.model.__files=i.files}catch{}finally{this.detailLoading=!1}}}}),_l={class:"font-semibold text-xl"},me={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(c,{emit:i}){const l=ye(c,"modelValue"),{t:w}=B();return(_,n)=>{const m=Ue,a=il;return k(),L(a,{modelValue:e(l),"onUpdate:modelValue":n[1]||(n[1]=s=>we(l)?l.value=s:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[ue("span",_l,Ee(e(w)("preview")),1)]),content:d(()=>[Ve(_.$slots,"content")]),footer:d(()=>[t(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(m,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:c.sendButtonLoading,onClick:n[0]||(n[0]=s=>i("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},co={__name:"InnerForm",props:{formType:{type:String,default:x}},setup(c){const i=c,o=j(),l=ql();be();const w=te(),_=I(!1);I(null);const{t:n}=B(),m=Q(),a=J(),s=Z(l.rules,l.model),D=async()=>{await s.value.$validate()&&(_.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(r=>r.id),l.model.files=[],l.model.files=l.model.__files.map(r=>({id:r.id})),l.model.journal=F.INNER,l.model.sender=o.currentUser.top_level_department.id,l.model.approvers=M(l.model.__approvers),l.model.signers=M(l.model.__signers),l.model.document_type=a.params.document_type,l.model.document_sub_type=a.params.document_sub_type)},T=()=>{i.formType===x?O():N()},O=async()=>{const g=await l.actionCreateDocument(l.model);await w.actionCountList(),g?(_.value=!1,E(null,n("document-sent"),U.SUCCESS),await m.replace({name:se,query:{document_type:$.INNER}})):E(null,n("error-occurred"),U.ERROR)},N=async()=>{await l.actionUpdateDocument({id:a.params.id,body:l.model}),await w.actionCountList(),E(null,n("document-sent"),U.SUCCESS),await m.replace({name:de,params:{id:a.params.id,document_type:$.INNER,document_sub_type:R.SERVICE_LETTER}})},P=()=>{console.log("Clear Form")},z=g=>{l.model.__files=[],g.forEach(r=>{l.model.__files.push(r)})};return he(async()=>{a.params.id&&await l.actionGetDocumentDetailForUpdate(a.params.id)}),K(()=>{oe(l.model)}),(g,r)=>{const p=X,u=H,b=_e,f=G;return e(l).detailLoading?(k(),L(p,{key:0})):(k(),A(W,{key:1},[t(e(ee),{title:i.formType===e(x)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[t(pe,{"onEmit:preview":D,"onEmit:clearForm":P},{default:d(()=>[t(f,null,{default:d(()=>[t(u,{"col-class":"w-1/2"},{default:d(()=>[t(Fe,{modelValue:e(s).__departments.$model,"onUpdate:modelValue":r[0]||(r[0]=q=>e(s).__departments.$model=q),error:e(s).__departments},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(b,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":r[1]||(r[1]=q=>e(s).short_description.$model=q),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(s).__approvers.$model,"onUpdate:modelValue":r[2]||(r[2]=q=>e(s).__approvers.$model=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":r[3]||(r[3]=q=>e(s).__signers.$model=q),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-full"},{default:d(()=>[t(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":r[4]||(r[4]=q=>e(s).content.$model=q),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(me,{modelValue:_.value,"onUpdate:modelValue":r[5]||(r[5]=q=>_.value=q),"send-button-loading":e(l).buttonLoading,"onEmit:send":T},{content:d(()=>{var q,V;return[t(je,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(V=(q=e(o).currentUser)==null?void 0:q.top_level_department)==null?void 0:V.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},fl=Y("sd-store-application",{state:()=>{var c,i;return{buttonLoading:!1,detailLoading:!1,model:{company:(i=(c=j().currentUser)==null?void 0:c.company)==null?void 0:i.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:v.withMessage("Поле не должен быть пустым",y)},__curator:{required:v.withMessage("Поле не должен быть пустым",y)},__approvers:{required:v.withMessage("Поле не должен быть пустым",y)},__signers:{}}}},actions:{async actionCreateDocument(c){let i={...c};this.buttonLoading=!0;const{response:o,error:l}=await ne(ie,i);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:o}=await re({id:c,body:i});return Promise.resolve(o)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await ae(c);le(this.model,i),this.model.__approvers=await S(i.approvers),this.model.__signers=await S(i.signers.filter(o=>o.type===qe.SIGNER)),this.model.__curator=await fe([],i.curator.id,!1),this.model.__files=i.files}catch{}finally{this.detailLoading=!1}}}}),Le=Y("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:j().currentUser.company.id,curator:null,document_type:$.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:F.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:v.withMessage("Поле не должен быть пустым",y)},register_date:{required:v.withMessage("Поле не должен быть пустым",y)},content:{required:v.withMessage("Поле не должен быть пустым",y)},__negotiators:{required:v.withMessage("Поле не должен быть пустым",y)},__curator:{required:v.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:o}=await ne(ie,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:o}=await re({id:c,body:i});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await ae(c);le(this.model,i),this.model.__signers=await S(i.signers.filter(o=>o.type!==qe.NEGOTIATOR)),this.model.__negotiators=await S(i.signers.filter(o=>o.type===qe.NEGOTIATOR)),this.model.__approvers=await S(i.approvers),this.model.__curator=await fe([],i.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),po={__name:"ApplicationForm",props:{formType:{type:String,default:x}},setup(c){const i=c,o=j(),l=fl();be();const w=te();Le();const _=I(!1);I(null);const{t:n}=B(),m=Q(),a=J(),s=Z(l.rules,l.model),D=async()=>{var r,p,u,b,f;await s.value.$validate()&&(_.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(r=o==null?void 0:o.currentUser)==null?void 0:r.id}],l.model.sender=(u=(p=o==null?void 0:o.currentUser)==null?void 0:p.top_level_department)==null?void 0:u.id,l.model.curator=(f=(b=l==null?void 0:l.model)==null?void 0:b.__curator)==null?void 0:f.user_id,l.model.journal=F.APPLICATION,l.model.document_type=a.params.document_type,l.model.document_sub_type=a.params.document_sub_type,l.model.approvers=M(l.model.__approvers))},T=async()=>{},O=()=>{i.formType===x?N():P()},N=async()=>{const g=await l.actionCreateDocument(l.model);await w.actionCountList(),g?(_.value=!1,E(null,n("document-sent"),U.SUCCESS),await m.replace({name:se,query:{document_type:$.APPLICATION}})):E(null,n("error-occurred"),U.ERROR)},P=async()=>{await l.actionUpdateDocument({id:a.params.id,body:l.model}),await w.actionCountList(),E(null,n("document-sent"),U.SUCCESS),await m.replace({name:de,params:{id:a.params.id,document_type:$.APPLICATION,document_sub_type:R.LABOR_LEAVE}})},z=g=>{l.model.__files=[],g.forEach(r=>{l.model.__files.push(r)})};return he(async()=>{a.params.id&&await l.actionGetDocumentDetailForUpdate(a.params.id)}),K(()=>{oe(l.model)}),(g,r)=>{const p=X,u=H,b=G;return e(l).detailLoading?(k(),L(p,{key:0})):(k(),A(W,{key:1},[t(e(ee),{title:i.formType===e(x)?"create-sd-application":"update-sd-application"},{content:d(()=>[t(pe,{"onEmit:preview":D,"onEmit:clearForm":T},{default:d(()=>[t(b,null,{default:d(()=>[t(u,{"col-class":"w-1/2"},{default:d(()=>[t(ge,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=f=>e(s).__curator.$model=f),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(s).__approvers.$model,"onUpdate:modelValue":r[1]||(r[1]=f=>e(s).__approvers.$model=f),error:e(s).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":r[2]||(r[2]=f=>e(s).__signers.$model=f),disabled:"",label:"signers",placeholder:e(o).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(u,{"col-class":"w-full"},{default:d(()=>[t(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":r[3]||(r[3]=f=>e(s).content.$model=f),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(me,{modelValue:_.value,"onUpdate:modelValue":r[4]||(r[4]=f=>_.value=f),"send-button-loading":e(l).buttonLoading,"onEmit:send":O},{content:d(()=>[t(Ae,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:i.formType===e(x)?e(o).currentUser:e(l).model.__signers[0].user,signers:i.formType===e(x)?[e(o).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},bl=Y("sd-notice-store",{state:()=>(j(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:$.NOTICE,document_sub_type:R.BUSINESS_TRIP,journal:F.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:v.withMessage("Поле не должен быть пустым",y)},start_date:{required:v.withMessage("Поле не должен быть пустым",y)},route:{required:v.withMessage("Поле не должен быть пустым",y)},content:{required:v.withMessage("Поле не должен быть пустым",y)},__companies:{required:v.withMessage("Поле не должен быть пустым",y)},__curator:{required:v.withMessage("Поле не должен быть пустым",y)},__employees:{required:v.withMessage("Поле не должен быть пустым",y)},__signers:{required:v.withMessage("Поле не должен быть пустым",y)},__tags:{required:v.withMessage("Поле не должен быть пустым",y)},short_description:{required:v.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:o}=await ne(ie,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:o}=await re({id:c,body:i});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c,i=!1){try{this.detailLoading=!0;const{data:o}=await ae(c);le(this.model,o),this.model.__companies=[],this.model.__curator=await fe([],o.curator.id,!1),this.model.__employees=await S(o.notices),i?(this.model.__approvers=await S(o.approvers.filter(l=>{var w,_;return((w=l==null?void 0:l.user)==null?void 0:w.id)!==((_=o==null?void 0:o.curator)==null?void 0:_.assistant)})),this.model.register_number=null):this.model.__approvers=await S(o.approvers),this.model.__signers=await S(o.signers),this.model.__companies=await We(o.notices[0].destinations),this.model.__tags=await Xe(o.tags),this.model.start_date=o.notices[0].start_date,this.model.end_date=o.notices[0].end_date,this.model.__tags=o.tags,this.model.route=o.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),gl={class:"flex w-full gap-x-4"},mo={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:x}},setup(c){const i=c,{t:o}=B(),l=J(),w=Q(),_=j(),n=bl(),m=te();be();const a=Z(n.rules,n.model),s=I(!1),D=Ne(()=>{const r=i.formType===x,p=l.params.document_sub_type;return p===R.BUSINESS_TRIP_DECREE_LOCAL?r?"create-decree":"update-decree":p===R.BUSINESS_TRIP_ORDER_LOCAL?r?"create-order":"update-order":r?"create-business-trip-notice":"update-business-trip-notice"});Pe(()=>n.model.__tags,r=>{if(i.formType===x)if(r&&r.length){let p=`${r.map(u=>u.name_uz).join(", ")} yuzasidan`;n.model.short_description=p.charAt(0).toUpperCase()+p.slice(1).toLowerCase()}else n.model.short_description=null});const T=async()=>{var p,u,b,f;await a.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.approvers=M(n.model.__approvers),n.model.signers=M(n.model.__signers),n.model.curator=(u=(p=n==null?void 0:n.model)==null?void 0:p.__curator)==null?void 0:u.user_id,n.model.journal=l.params.document_type===$.DECREE||l.params.document_type===$.ORDER?F.ORDERS_PROTOCOLS:F.INNER,n.model.company=_.currentUser.company.id,n.model.notices=n.model.__employees.map(q=>({start_date:n.model.start_date,end_date:n.model.end_date,user:q.id,route:n.model.route,companies:n.model.__companies.map(V=>V.id)})),n.model.sender=(f=(b=_==null?void 0:_.currentUser)==null?void 0:b.top_level_department)==null?void 0:f.id,n.model.tags=n.model.__tags.map(q=>({id:q.id})),n.model.files=n.model.__files.map(q=>({id:q.id})),n.model.document_type=l.params.document_type,n.model.document_sub_type=l.params.document_sub_type,s.value=!0)},O=()=>{},N=r=>{n.model.__files=[],r.forEach(p=>{n.model.__files.push(p)})},P=async()=>{const r=await n.actionCreateDocument(n.model);await m.actionCountList(),r?(s.value=!1,E(null,o("document-sent"),U.SUCCESS),await w.replace({name:se,query:{document_type:l.params.document_sub_type===R.BUSINESS_TRIP_DECREE_LOCAL?$.DECREE:l.params.document_sub_type===R.BUSINESS_TRIP_ORDER_LOCAL?$.ORDER:$.NOTICE}})):E(null,o("error-occurred"),U.ERROR)},z=async()=>{await n.actionUpdateDocument({id:l.params.id,body:n.model}),await m.actionCountList(),E(null,o("changed"),U.SUCCESS),await w.replace({name:de,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},g=()=>{i.formType===x?P():z()};return ke(async()=>{var r,p;l.params.id?await n.actionGetDocumentDetailForUpdate(l.params.id):l.params.document_sub_type===R.BUSINESS_TRIP_DECREE_LOCAL&&((r=l==null?void 0:l.query)!=null&&r.compose_id)&&((p=l==null?void 0:l.query)==null?void 0:p.document_sub_type)===R.BUSINESS_TRIP&&await n.actionGetDocumentDetailForUpdate(l.query.compose_id,!0)}),K(()=>{oe(n.model)}),(r,p)=>{const u=X,b=H,f=$e,q=Se,V=_e,Ce=G;return e(n).detailLoading?(k(),L(u,{key:0})):(k(),A(W,{key:1},[t(e(ee),{title:D.value},{content:d(()=>[t(pe,{"onEmit:preview":T,"onEmit:clearForm":O},{default:d(()=>[t(Ce,null,{default:d(()=>[t(b,{"col-class":"w-1/2"},{default:d(()=>[t(ge,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":p[0]||(p[0]=h=>e(a).__curator.$model=h),error:e(a).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(a).__employees.$model,"onUpdate:modelValue":p[1]||(p[1]=h=>e(a).__employees.$model=h),error:e(a).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[t(Me,{modelValue:e(a).__companies.$model,"onUpdate:modelValue":p[2]||(p[2]=h=>e(a).__companies.$model=h),error:e(a).__companies,"text-truncate":""},null,8,["modelValue","error"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[t(el,{modelValue:e(a).__tags.$model,"onUpdate:modelValue":p[3]||(p[3]=h=>e(a).__tags.$model=h),error:e(a).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:h})=>[ze(Ee(h.name),1)]),option:d(({value:h})=>[t(e(ol),{title:h.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[ue("div",gl,[t(f,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[p[4]||(p[4]=h=>e(a).start_date.$model=h),p[5]||(p[5]=h=>e(a).start_date.$model=e(ve)(h))],error:e(a).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error","min-date"]),t(f,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[p[6]||(p[6]=h=>e(a).end_date.$model=h),p[7]||(p[7]=h=>e(a).end_date.$model=e(ve)(h))],error:e(a).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error","min-date"])])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[t(q,{modelValue:e(a).route.$model,"onUpdate:modelValue":p[8]||(p[8]=h=>e(a).route.$model=h),error:e(a).route,options:e(Ie),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type"},null,8,["modelValue","error","options"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":p[9]||(p[9]=h=>e(n).model.__approvers=h),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":p[10]||(p[10]=h=>e(a).__signers.$model=h),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[t(V,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":p[11]||(p[11]=h=>e(a).short_description.$model=h),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(b,{"col-class":"w-full"},{default:d(()=>[t(ce,{modelValue:e(a).content.$model,"onUpdate:modelValue":p[12]||(p[12]=h=>e(a).content.$model=h),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(me,{modelValue:s.value,"onUpdate:modelValue":p[13]||(p[13]=h=>s.value=h),"send-button-loading":e(n).buttonLoading,"onEmit:send":g},{content:d(()=>[e(l).params.document_sub_type===e(R).BUSINESS_TRIP_DECREE_LOCAL?(k(),L(e(Be),{key:0,"compose-model":e(n).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(R).BUSINESS_TRIP_ORDER_LOCAL?(k(),L(e(Ge),{key:1,"compose-model":e(n).model,preview:!0},null,8,["compose-model"])):(k(),L(e(He),{key:2,"compose-model":e(n).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},uo={__name:"OrderForm",props:{formType:{type:String,default:x}},setup(c){const i=c,o=Le(),l=te(),w=j(),_=J(),n=Q(),m=Z(o.rules,o.model),{t:a}=B(),s=I(!1),D=async()=>{var r,p,u,b;await m.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=M(o.model.__approvers),o.model.curator=(p=(r=o==null?void 0:o.model)==null?void 0:r.__curator)==null?void 0:p.user_id,o.model.sender=(b=(u=w==null?void 0:w.currentUser)==null?void 0:u.top_level_department)==null?void 0:b.id,o.model.files=o.model.__files.map(f=>({id:f.id})),o.model.document_type=_.params.document_type,o.model.document_sub_type=_.params.document_sub_type,o.model.journal=F.ORDERS_PROTOCOLS,o.model.register_date=ve(o.model.register_date),o.model.__negotiators.forEach(f=>{o.model.signers.push(f.hasOwnProperty("user")?{id:f.id,user:f.user.id,type:qe.NEGOTIATOR}:{user:f.id,type:qe.NEGOTIATOR})}),_.query.compose_id&&(o.model.trip_notice_id=_.query.compose_id),s.value=!0)},T=()=>{},O=async()=>{try{const g=await o.actionCreateDocument(o.model);await l.actionCountList(),g&&(s.value=!1,E(null,a("document-sent"),U.SUCCESS),await n.replace({name:se,query:{document_type:$.ORDER}}))}catch{E(null,a("error-occurred"),U.ERROR)}},N=async()=>{try{const g=await o.actionUpdateDocument({id:_.params.id,body:o.model});await l.actionCountList(),E(null,a("changed"),U.SUCCESS),await n.replace({name:de,params:{id:_.params.id,document_type:_.params.document_type,document_sub_type:_.params.document_sub_type}})}catch{E(null,a("error-occurred"),U.ERROR)}},P=()=>{i.formType===x?O():N()},z=g=>{o.model.__files=[],g.forEach(r=>{o.model.__files.push(r)})};return he(async()=>{_.params.id&&await o.actionGetDocumentDetailForUpdate(_.params.id)}),K(()=>{oe(o.model)}),(g,r)=>{const p=X,u=H,b=_e,f=$e,q=G;return e(o).detailLoading?(k(),L(p,{key:0})):(k(),A(W,{key:1},[t(e(ee),{title:i.formType===e(x)?"create-order":"update-order"},{content:d(()=>[t(pe,{"onEmit:preview":D,"onEmit:clearForm":T},{default:d(()=>[t(q,null,{default:d(()=>[t(u,{"col-class":"w-1/2"},{default:d(()=>[t(ge,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=V=>e(m).__curator.$model=V),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(_).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(b,{modelValue:e(m).register_number.$model,"onUpdate:modelValue":r[1]||(r[1]=V=>e(m).register_number.$model=V),error:e(m).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(f,{modelValue:e(m).register_date.$model,"onUpdate:modelValue":r[2]||(r[2]=V=>e(m).register_date.$model=V),error:e(m).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":r[3]||(r[3]=V=>e(o).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(m).__negotiators.$model,"onUpdate:modelValue":r[4]||(r[4]=V=>e(m).__negotiators.$model=V),error:e(m).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-full"},{default:d(()=>[t(ce,{modelValue:e(m).content.$model,"onUpdate:modelValue":r[5]||(r[5]=V=>e(m).content.$model=V),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(me,{modelValue:s.value,"onUpdate:modelValue":r[6]||(r[6]=V=>s.value=V),"send-button-loading":e(o).buttonLoading,"onEmit:send":P},{content:d(()=>[t(e(Ye),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wl=Y("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:v.withMessage("Поле не должен быть пустым",y)},__curator:{required:v.withMessage("Поле не должен быть пустым",y)},__signers:{required:v.withMessage("Поле не должен быть пустым",y)},short_description:{required:v.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:o}=await ne(ie,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:o}=await re({id:c,body:i});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await ae(c);le(this.model,i),this.model.__curator=await fe([],i.curator.id,!1),this.model.__approvers=await S(i.approvers),this.model.__signers=await S(i.signers)}catch{}finally{this.detailLoading=!1}}}}),qo={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:x}},setup(c){const i=c,{t:o}=B(),l=J(),w=Q(),_=j(),n=wl(),m=te();be();const a=I(!1),s=Z(n.rules,n.model),D=async()=>{var r,p,u,b;await s.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=M(n.model.__approvers),n.model.signers=M(n.model.__signers),n.model.curator=(p=(r=n==null?void 0:n.model)==null?void 0:r.__curator)==null?void 0:p.user_id,n.model.journal=F.INNER,n.model.company=_.currentUser.company.id,n.model.sender=(b=(u=_==null?void 0:_.currentUser)==null?void 0:u.top_level_department)==null?void 0:b.id,n.model.files=n.model.__files.map(f=>({id:f.id})),n.model.document_type=l.params.document_type,n.model.document_sub_type=l.params.document_sub_type,a.value=!0)},T=()=>{},O=g=>{n.model.__files=[],g.forEach(r=>{n.model.__files.push(r)})},N=async()=>{const g=await n.actionCreateDocument(n.model);await m.actionCountList(),g?(a.value=!1,E(null,o("document-sent"),U.SUCCESS),await w.replace({name:se,query:{document_type:$.NOTICE}})):E(null,o("error-occurred"),U.ERROR)},P=async()=>{await n.actionUpdateDocument({id:l.params.id,body:n.model}),await m.actionCountList(),E(null,o("changed"),U.SUCCESS),await w.replace({name:de,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},z=()=>{i.formType===x?N():P()};return ke(async()=>{l.params.id&&await n.actionGetDocumentDetailForUpdate(l.params.id)}),K(()=>{oe(n.model)}),(g,r)=>{const p=X,u=H,b=_e,f=G;return e(n).detailLoading?(k(),L(p,{key:0})):(k(),A(W,{key:1},[t(e(ee),{title:i.formType===e(x)?"create-notice":"update-notice"},{content:d(()=>[t(pe,{"onEmit:preview":D,"onEmit:clearForm":T},{default:d(()=>[t(f,null,{default:d(()=>[t(u,{"col-class":"w-1/2"},{default:d(()=>[t(ge,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=q=>e(s).__curator.$model=q),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(b,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":r[1]||(r[1]=q=>e(s).short_description.$model=q),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":r[2]||(r[2]=q=>e(n).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":r[3]||(r[3]=q=>e(s).__signers.$model=q),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-full"},{default:d(()=>[t(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":r[4]||(r[4]=q=>e(s).content.$model=q),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(me,{modelValue:a.value,"onUpdate:modelValue":r[5]||(r[5]=q=>a.value=q),"send-button-loading":e(n).buttonLoading,"onEmit:send":z},{content:d(()=>[t(e(Qe),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},hl=Y("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:v.withMessage("Поле не должен быть пустым",y)},__curator:{required:v.withMessage("Поле не должен быть пустым",y)},__signers:{required:v.withMessage("Поле не должен быть пустым",y)},short_description:{required:v.withMessage("Поле не должен быть пустым",y)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:o}=await ne(ie,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:o}=await re({id:c,body:i});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await ae(c);le(this.model,i),this.model.__curator=await fe([],i.curator.id,!1),this.model.__approvers=await S(i.approvers),this.model.__signers=await S(i.signers)}catch{}finally{this.detailLoading=!1}}}}),_o={__name:"DecreeForm",props:{formType:{type:String,default:x}},setup(c){const i=c,{t:o}=B(),l=J(),w=Q(),_=j(),n=te();be();const m=I(!1),a=hl(),s=Z(a.rules,a.model),D=async()=>{var r,p,u,b;await s.value.$validate()&&(a.model.approvers=[],a.model.signers=[],a.model.approvers=M(a.model.__approvers),a.model.signers=M(a.model.__signers),a.model.curator=(p=(r=a==null?void 0:a.model)==null?void 0:r.__curator)==null?void 0:p.user_id,a.model.journal=F.ORDERS_PROTOCOLS,a.model.company=_.currentUser.company.id,a.model.sender=(b=(u=_==null?void 0:_.currentUser)==null?void 0:u.top_level_department)==null?void 0:b.id,a.model.files=a.model.__files.map(f=>({id:f.id})),a.model.document_type=l.params.document_type,a.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(a.model.trip_notice_id=l.query.compose_id),m.value=!0)},T=()=>{},O=g=>{a.model.__files=[],g.forEach(r=>{a.model.__files.push(r)})},N=async()=>{const g=await a.actionCreateDocument(a.model);await n.actionCountList(),g?(m.value=!1,E(null,o("document-sent"),U.SUCCESS),await w.replace({name:se,query:{document_type:l.params.document_type}})):E(null,o("error-occurred"),U.ERROR)},P=async()=>{await a.actionUpdateDocument({id:l.params.id,body:a.model}),await n.actionCountList(),E(null,o("changed"),U.SUCCESS),await w.replace({name:de,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},z=()=>{i.formType===x?N():P()};return ke(async()=>{l.params.id&&await a.actionGetDocumentDetailForUpdate(l.params.id)}),K(()=>{oe(a.model)}),(g,r)=>{const p=X,u=H,b=_e,f=G;return e(a).detailLoading?(k(),L(p,{key:0})):(k(),A(W,{key:1},[t(e(ee),{title:i.formType===e(x)?"create-decree":"update-decree"},{content:d(()=>[t(pe,{"onEmit:preview":D,"onEmit:clearForm":T},{default:d(()=>[t(f,null,{default:d(()=>[t(u,{"col-class":"w-1/2"},{default:d(()=>[t(ge,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=q=>e(s).__curator.$model=q),error:e(s).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(b,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":r[1]||(r[1]=q=>e(s).short_description.$model=q),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":r[2]||(r[2]=q=>e(a).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:d(()=>[t(C,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":r[3]||(r[3]=q=>e(s).__signers.$model=q),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-full"},{default:d(()=>[t(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":r[4]||(r[4]=q=>e(s).content.$model=q),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(me,{modelValue:m.value,"onUpdate:modelValue":r[5]||(r[5]=q=>m.value=q),"send-button-loading":e(a).buttonLoading,"onEmit:send":z},{content:d(()=>[t(e(Je),{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{po as _,mo as a,co as b,uo as c,qo as d,_o as e};
