import{_ as H}from"./BaseRow-99d3708f.js";import{_ as fe}from"./BaseInput-d79fd1cc.js";import{_ as Y}from"./BaseCol-a7f986b3.js";import{v as I,c0 as xe,a6 as ve,o as x,c as A,i as t,z as c,h as e,be as he,B as Te,cR as Oe,cJ as Ne,f as L,a as qe,n as Pe,r as Se,G as $e,aI as J,c3 as $,c4 as D,bS as F,u as G,t as Le,b as Q,ay as W,co as K,F as X,aa as U,an as Z,cL as _e,d as Ue,aD as ze,ci as Ve,a8 as Ie,cS as Fe}from"./index-82b8c980.js";import{c as h,r as v,u as ee}from"./index-89bea96c.js";import{_ as Me,a as je}from"./BranchMultiSelect-cebe6f9b.js";import{_ as le,b as Ae,a as Be,g as Ge,h as He,c as Ye,d as Je,e as Qe,f as We}from"./DecreeTemplate-eaab7e75.js";import"./BaseTabMenu-306a9457.js";import"./dialog.esm-897391ca.js";import"./tabpanel.esm-720e1715.js";import{s as oe,P as S,S as Ke,T as ne,U as M,V as be,W as Xe,X as Ze}from"./index-df95f682.js";import"./BaseTabView-11f041c2.js";import"./FileTabs-e633b839.js";import{_ as C}from"./UserMultiSelect-d3803b4d.js";import{c as el,u as j,w as te,d as E}from"./axios.config-6f741f73.js";import{u as ge}from"./common-735f00a5.js";import{u as re}from"./count.store-a7fe52cd.js";import{f as ae,a as ie,b as se}from"./index.store-62a2dc69.js";import{d as Ee,e as de,c as ce}from"./index-c4c1f2d4.js";import{F as V}from"./constants-5c471c97.js";import{_ as Ce}from"./BaseDropdown-1e68ebcb.js";import{_ as Re}from"./BaseCalendar-381fd1d9.js";import{_ as ll}from"./WithLabel-5896a55d.js";import{f as ke}from"./formatDate-d2916b45.js";import"./qrcode.vue.esm-bf7ac313.js";import{c as ol}from"./Dropdown-92e73abb.js";import"./menu.esm-aa8926b3.js";/* empty css                                                 */import"./avatar.esm-67fbcd0d.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-aa2a7cba.js";import"./common.store-35144b24.js";import{_ as nl}from"./WithRadio-fad52fad.js";import"./radiobutton.esm-a75ccddd.js";import"./checkbox.esm-29634539.js";import"./dayjs.min-97e0b9a3.js";import{_ as tl}from"./WithSelectable-76adb5b0.js";import{_ as rl}from"./BaseBrickTab-fd8ea45e.js";import{_ as al}from"./BaseFileUpload-aa9a5ebb.js";import{_ as il}from"./BaseFroalaEditor-fe43e678.js";import{_ as sl}from"./BaseDialog-968e0979.js";const dl={class:"user-select"},we={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(p,{emit:a}){const o=p,l=I([]),g=xe(o,"modelValue"),u=async n=>{let{data:m}=await el.get(`${o.apiUrl}/`,n);m.hasOwnProperty("results")?l.value=m.results:l.value=m};return ve(async()=>{await u(o.apiParams)}),(n,m)=>(x(),A("div",dl,[t(Ce,{modelValue:e(g),"onUpdate:modelValue":m[0]||(m[0]=r=>he(g)?g.value=r:null),options:l.value,"onUpdate:options":m[1]||(m[1]=r=>l.value=r),error:o.error,"api-url":o.apiUrl,"api-params":o.apiParams,"option-label":"full_name",label:o.label,placeholder:o.placeholder,required:o.required,searchable:""},{option:c(({option:r})=>[t(e(tl),{items:[r]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var cl=`
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
`,pl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Te.extend({name:"editor",css:cl,classes:pl});(function(){try{return window.Quill}catch{return null}})();const pe={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(p){return["froala","tiny"].includes(p)}}},emits:["update:modelValue","emit:fileUpload"],setup(p,{emit:a}){const o=p,l=xe(o,"modelValue"),g=I([{title:"text",slot:"editor",icon:Oe},{title:"file",slot:"file",icon:Ne}]);return(u,n)=>(x(),L(rl,{"tab-panel-list":g.value,"panel-container-class":"px-0"},{editor:c(()=>[p.editor==="froala"?(x(),L(il,{key:0,modelValue:e(l),"onUpdate:modelValue":n[0]||(n[0]=m=>he(l)?l.value=m:null)},null,8,["modelValue"])):(x(),L(ol,{key:1,modelValue:e(l),"onUpdate:modelValue":n[1]||(n[1]=m=>he(l)?l.value=m:null)},null,8,["modelValue"]))]),file:c(()=>[qe("div",{class:Pe(o.fileUploadContainerClasses)},[t(al,{files:o.files,"onEmit:fileUpload":n[2]||(n[2]=m=>a("emit:fileUpload",m))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ml={class:"flex flex-col justify-between h-full"},ul={class:"px-6 py-4 overflow-y-auto"},ql={class:"actions p-6"},me={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(p,{emit:a}){return(o,l)=>{const g=$e;return x(),A("div",ml,[qe("div",ul,[Se(o.$slots,"default")]),qe("div",ql,[t(g,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=u=>a("emit:clearForm"))}),t(g,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=u=>a("emit:preview"))})])])}}},_l=J("sd-stores-inner",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=j().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,document_type:$.INNER,document_sub_type:D.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:F.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__departments:{required:h.withMessage("Поле не должен быть пустым",v)},__approvers:{},__signers:{required:h.withMessage("Поле не должен быть пустым",v)}}}},actions:{async actionCreateDocument(p){let a={...p,type:Ee,sub_type:Ee};this.buttonLoading=!0;const{response:o,error:l}=await te(se,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):Promise.reject(l)},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await ae({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await ie(p);oe(this.model,a),this.model.__approvers=await S(a.approvers),this.model.__signers=await S(a.signers),this.model.__departments=await Ke(a.receiver.departments),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),fl={class:"font-semibold text-xl"},ue={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(p,{emit:a}){const l=xe(p,"modelValue"),{t:g}=G();return(u,n)=>{const m=$e,r=sl;return x(),L(r,{modelValue:e(l),"onUpdate:modelValue":n[1]||(n[1]=d=>he(l)?l.value=d:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:c(()=>[qe("span",fl,Le(e(g)("preview")),1)]),content:c(()=>[Se(u.$slots,"content")]),footer:c(()=>[t(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(m,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:p.sendButtonLoading,onClick:n[0]||(n[0]=d=>a("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},po={__name:"InnerForm",props:{formType:{type:String,default:V}},setup(p){const a=p,o=j(),l=_l();ge();const g=re(),u=I(!1);I(null);const{t:n}=G(),m=Q(),r=W(),d=ee(l.rules,l.model),T=async()=>{await d.value.$validate()&&(u.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(i=>i.id),l.model.files=[],l.model.files=l.model.__files.map(i=>({id:i.id})),l.model.journal=F.INNER,l.model.sender=o.currentUser.top_level_department.id,l.model.approvers=M(l.model.__approvers),l.model.signers=M(l.model.__signers),l.model.document_type=r.params.document_type,l.model.document_sub_type=r.params.document_sub_type)},R=()=>{a.formType===V?O():N()},O=async()=>{const b=await l.actionCreateDocument(l.model);await g.actionCountList(),b?(u.value=!1,E(null,n("document-sent"),U.SUCCESS),await m.replace({name:de,query:{document_type:$.INNER}})):E(null,n("error-occurred"),U.ERROR)},N=async()=>{await l.actionUpdateDocument({id:r.params.id,body:l.model}),await g.actionCountList(),E(null,n("document-sent"),U.SUCCESS),await m.replace({name:ce,params:{id:r.params.id,document_type:$.INNER,document_sub_type:D.SERVICE_LETTER}})},P=()=>{console.log("Clear Form")},z=b=>{l.model.__files=[],b.forEach(i=>{l.model.__files.push(i)})};return ve(async()=>{r.params.id&&await l.actionGetDocumentDetailForUpdate(r.params.id)}),K(()=>{ne(l.model)}),(b,i)=>{const f=Z,s=Y,y=fe,_=H;return e(l).detailLoading?(x(),L(f,{key:0})):(x(),A(X,{key:1},[t(e(le),{title:a.formType===e(V)?"create-sd-inner":"update-sd-inner"},{content:c(()=>[t(me,{"onEmit:preview":T,"onEmit:clearForm":P},{default:c(()=>[t(_,null,{default:c(()=>[t(s,{"col-class":"w-1/2"},{default:c(()=>[t(Me,{modelValue:e(d).__departments.$model,"onUpdate:modelValue":i[0]||(i[0]=q=>e(d).__departments.$model=q),error:e(d).__departments},null,8,["modelValue","error"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(y,{modelValue:e(d).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=q=>e(d).short_description.$model=q),error:e(d).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(d).__approvers.$model,"onUpdate:modelValue":i[2]||(i[2]=q=>e(d).__approvers.$model=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(d).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=q=>e(d).__signers.$model=q),error:e(d).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(s,{"col-class":"w-full"},{default:c(()=>[t(pe,{modelValue:e(d).content.$model,"onUpdate:modelValue":i[4]||(i[4]=q=>e(d).content.$model=q),error:e(d).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(ue,{modelValue:u.value,"onUpdate:modelValue":i[5]||(i[5]=q=>u.value=q),"send-button-loading":e(l).buttonLoading,"onEmit:send":R},{content:c(()=>{var q,k;return[t(Ae,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(k=(q=e(o).currentUser)==null?void 0:q.top_level_department)==null?void 0:k.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},bl=J("sd-store-application",{state:()=>{var p,a;return{buttonLoading:!1,detailLoading:!1,model:{company:(a=(p=j().currentUser)==null?void 0:p.company)==null?void 0:a.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__approvers:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{}}}},actions:{async actionCreateDocument(p){let a={...p};this.buttonLoading=!0;const{response:o,error:l}=await te(se,a);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await ae({id:p,body:a});return Promise.resolve(o)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await ie(p);oe(this.model,a),this.model.__approvers=await S(a.approvers),this.model.__signers=await S(a.signers.filter(o=>o.type===_e.SIGNER)),this.model.__curator=await be([],a.curator.id,!1),this.model.__files=a.files}catch{}finally{this.detailLoading=!1}}}}),De=J("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:j().currentUser.company.id,curator:null,document_type:$.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:F.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",v)},register_date:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__negotiators:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await te(se,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await ae({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await ie(p);oe(this.model,a),this.model.__signers=await S(a.signers.filter(o=>o.type!==_e.NEGOTIATOR)),this.model.__negotiators=await S(a.signers.filter(o=>o.type===_e.NEGOTIATOR)),this.model.__approvers=await S(a.approvers),this.model.__curator=await be([],a.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),mo={__name:"ApplicationForm",props:{formType:{type:String,default:V}},setup(p){const a=p,o=j(),l=bl();ge();const g=re();De();const u=I(!1);I(null);const{t:n}=G(),m=Q(),r=W(),d=ee(l.rules,l.model),T=async()=>{var i,f,s,y,_;await d.value.$validate()&&(u.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(i=o==null?void 0:o.currentUser)==null?void 0:i.id}],l.model.sender=(s=(f=o==null?void 0:o.currentUser)==null?void 0:f.top_level_department)==null?void 0:s.id,l.model.curator=(_=(y=l==null?void 0:l.model)==null?void 0:y.__curator)==null?void 0:_.user_id,l.model.journal=F.APPLICATION,l.model.document_type=r.params.document_type,l.model.document_sub_type=r.params.document_sub_type,l.model.approvers=M(l.model.__approvers))},R=async()=>{},O=()=>{a.formType===V?N():P()},N=async()=>{const b=await l.actionCreateDocument(l.model);await g.actionCountList(),b?(u.value=!1,E(null,n("document-sent"),U.SUCCESS),await m.replace({name:de,query:{document_type:$.APPLICATION}})):E(null,n("error-occurred"),U.ERROR)},P=async()=>{await l.actionUpdateDocument({id:r.params.id,body:l.model}),await g.actionCountList(),E(null,n("document-sent"),U.SUCCESS),await m.replace({name:ce,params:{id:r.params.id,document_type:$.APPLICATION,document_sub_type:D.LABOR_LEAVE}})},z=b=>{l.model.__files=[],b.forEach(i=>{l.model.__files.push(i)})};return ve(async()=>{r.params.id&&await l.actionGetDocumentDetailForUpdate(r.params.id)}),K(()=>{ne(l.model)}),(b,i)=>{const f=Z,s=Y,y=H;return e(l).detailLoading?(x(),L(f,{key:0})):(x(),A(X,{key:1},[t(e(le),{title:a.formType===e(V)?"create-sd-application":"update-sd-application"},{content:c(()=>[t(me,{"onEmit:preview":T,"onEmit:clearForm":R},{default:c(()=>[t(y,null,{default:c(()=>[t(s,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(d).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=_=>e(d).__curator.$model=_),error:e(d).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(d).__approvers.$model,"onUpdate:modelValue":i[1]||(i[1]=_=>e(d).__approvers.$model=_),error:e(d).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(d).__signers.$model,"onUpdate:modelValue":i[2]||(i[2]=_=>e(d).__signers.$model=_),disabled:"",label:"signers",placeholder:e(o).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(s,{"col-class":"w-full"},{default:c(()=>[t(pe,{modelValue:e(d).content.$model,"onUpdate:modelValue":i[3]||(i[3]=_=>e(d).content.$model=_),error:e(d).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(ue,{modelValue:u.value,"onUpdate:modelValue":i[4]||(i[4]=_=>u.value=_),"send-button-loading":e(l).buttonLoading,"onEmit:send":O},{content:c(()=>[t(Be,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:a.formType===e(V)?e(o).currentUser:e(l).model.__signers[0].user,signers:a.formType===e(V)?[e(o).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=J("sd-notice-store",{state:()=>(j(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:$.NOTICE,document_sub_type:D.BUSINESS_TRIP,journal:F.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:h.withMessage("Поле не должен быть пустым",v)},start_date:{required:h.withMessage("Поле не должен быть пустым",v)},route:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__companies:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__employees:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},__tags:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await te(se,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await ae({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,a=!1){try{this.detailLoading=!0;const{data:o}=await ie(p);oe(this.model,o),this.model.__companies=[],this.model.__curator=await be([],o.curator.id,!1),this.model.__employees=await S(o.notices),a?(this.model.__approvers=await S(o.approvers.filter(l=>{var g,u;return((g=l==null?void 0:l.user)==null?void 0:g.id)!==((u=o==null?void 0:o.curator)==null?void 0:u.assistant)})),this.model.register_number=null):this.model.__approvers=await S(o.approvers),this.model.__signers=await S(o.signers),this.model.__companies=await Xe(o.notices[0].destinations),this.model.__tags=await Ze(o.tags),this.model.start_date=o.notices[0].start_date,this.model.end_date=o.notices[0].end_date,this.model.__tags=o.tags,this.model.route=o.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),wl={class:"flex w-full gap-x-4"},uo={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:V}},setup(p){const a=p,{t:o}=G(),l=W(),g=Q(),u=j(),n=gl(),m=re();ge();const r=ee(n.rules,n.model),d=I(!1),T=Ue(()=>{const f=a.formType===V,s=l.params.document_sub_type;return s===D.BUSINESS_TRIP_DECREE_LOCAL?f?"create-decree":"update-decree":s===D.BUSINESS_TRIP_ORDER_LOCAL?f?"create-order":"update-order":f?"create-business-trip-notice":"update-business-trip-notice"}),R=Ue(()=>{var f,s;return l.params.document_sub_type===D.BUSINESS_TRIP_DECREE_LOCAL&&((f=l==null?void 0:l.query)==null?void 0:f.compose_id)&&((s=l==null?void 0:l.query)==null?void 0:s.document_sub_type)===D.BUSINESS_TRIP});ze(()=>n.model.__tags,f=>{if(a.formType===V)if(f&&f.length){let s=`${f.map(y=>y.name_uz).join(", ")} yuzasidan`;n.model.short_description=s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()}else n.model.short_description=null});const O=async()=>{var s,y,_,q,k;await r.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.notices=[],n.model.approvers=M(n.model.__approvers),n.model.signers=M(n.model.__signers),n.model.curator=(y=(s=n==null?void 0:n.model)==null?void 0:s.__curator)==null?void 0:y.user_id,n.model.journal=l.params.document_type===$.DECREE||l.params.document_type===$.ORDER?F.ORDERS_PROTOCOLS:F.INNER,n.model.company=u.currentUser.company.id,n.model.notices=n.model.__employees.map(B=>({start_date:n.model.start_date,end_date:n.model.end_date,user:B.id,route:n.model.route,companies:n.model.__companies.map(ye=>ye.id)})),n.model.sender=(q=(_=u==null?void 0:u.currentUser)==null?void 0:_.top_level_department)==null?void 0:q.id,n.model.tags=n.model.__tags.map(B=>({id:B.id})),n.model.files=n.model.__files.map(B=>({id:B.id})),n.model.document_type=l.params.document_type,n.model.document_sub_type=l.params.document_sub_type,R.value&&(n.model.trip_notice_id=(k=l==null?void 0:l.query)==null?void 0:k.compose_id),d.value=!0)},N=()=>{},P=f=>{n.model.__files=[],f.forEach(s=>{n.model.__files.push(s)})},z=async()=>{const f=await n.actionCreateDocument(n.model);await m.actionCountList(),f?(d.value=!1,E(null,o("document-sent"),U.SUCCESS),await g.replace({name:de,query:{document_type:l.params.document_sub_type===D.BUSINESS_TRIP_DECREE_LOCAL?$.DECREE:l.params.document_sub_type===D.BUSINESS_TRIP_ORDER_LOCAL?$.ORDER:$.NOTICE}})):E(null,o("error-occurred"),U.ERROR)},b=async()=>{await n.actionUpdateDocument({id:l.params.id,body:n.model}),await m.actionCountList(),E(null,o("changed"),U.SUCCESS),await g.replace({name:ce,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},i=()=>{a.formType===V?z():b()};return Ve(async()=>{l.params.id?await n.actionGetDocumentDetailForUpdate(l.params.id):R.value&&await n.actionGetDocumentDetailForUpdate(l.query.compose_id,!0)}),K(()=>{ne(n.model)}),(f,s)=>{const y=Z,_=Y,q=Re,k=Ce,B=fe,ye=H;return e(n).detailLoading?(x(),L(y,{key:0})):(x(),A(X,{key:1},[t(e(le),{title:T.value},{content:c(()=>[t(me,{"onEmit:preview":O,"onEmit:clearForm":N},{default:c(()=>[t(ye,null,{default:c(()=>[t(_,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=w=>e(r).__curator.$model=w),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(r).__employees.$model,"onUpdate:modelValue":s[1]||(s[1]=w=>e(r).__employees.$model=w),error:e(r).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(je,{modelValue:e(r).__companies.$model,"onUpdate:modelValue":s[2]||(s[2]=w=>e(r).__companies.$model=w),error:e(r).__companies,"text-truncate":""},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(ll,{modelValue:e(r).__tags.$model,"onUpdate:modelValue":s[3]||(s[3]=w=>e(r).__tags.$model=w),error:e(r).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:c(({value:w})=>[Ie(Le(w.name),1)]),option:c(({value:w})=>[t(e(nl),{title:w.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[qe("div",wl,[t(q,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[s[4]||(s[4]=w=>e(r).start_date.$model=w),s[5]||(s[5]=w=>e(r).start_date.$model=e(ke)(w))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error","min-date"]),t(q,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[s[6]||(s[6]=w=>e(r).end_date.$model=w),s[7]||(s[7]=w=>e(r).end_date.$model=e(ke)(w))],error:e(r).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error","min-date"])])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(k,{modelValue:e(r).route.$model,"onUpdate:modelValue":s[8]||(s[8]=w=>e(r).route.$model=w),error:e(r).route,options:e(Fe),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type"},null,8,["modelValue","error","options"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":s[9]||(s[9]=w=>e(n).model.__approvers=w),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":s[10]||(s[10]=w=>e(r).__signers.$model=w),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-1/2"},{default:c(()=>[t(B,{modelValue:e(r).short_description.$model,"onUpdate:modelValue":s[11]||(s[11]=w=>e(r).short_description.$model=w),error:e(r).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(_,{"col-class":"w-full"},{default:c(()=>[t(pe,{modelValue:e(r).content.$model,"onUpdate:modelValue":s[12]||(s[12]=w=>e(r).content.$model=w),error:e(r).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":P},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(ue,{modelValue:d.value,"onUpdate:modelValue":s[13]||(s[13]=w=>d.value=w),"send-button-loading":e(n).buttonLoading,"onEmit:send":i},{content:c(()=>[e(l).params.document_sub_type===e(D).BUSINESS_TRIP_DECREE_LOCAL?(x(),L(e(Ge),{key:0,"compose-model":e(n).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(D).BUSINESS_TRIP_ORDER_LOCAL?(x(),L(e(He),{key:1,"compose-model":e(n).model,preview:!0},null,8,["compose-model"])):(x(),L(e(Ye),{key:2,"compose-model":e(n).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},qo={__name:"OrderForm",props:{formType:{type:String,default:V}},setup(p){const a=p,o=De(),l=re(),g=j(),u=W(),n=Q(),m=ee(o.rules,o.model),{t:r}=G(),d=I(!1),T=async()=>{var i,f,s,y;await m.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=M(o.model.__approvers),o.model.curator=(f=(i=o==null?void 0:o.model)==null?void 0:i.__curator)==null?void 0:f.user_id,o.model.sender=(y=(s=g==null?void 0:g.currentUser)==null?void 0:s.top_level_department)==null?void 0:y.id,o.model.files=o.model.__files.map(_=>({id:_.id})),o.model.document_type=u.params.document_type,o.model.document_sub_type=u.params.document_sub_type,o.model.journal=F.ORDERS_PROTOCOLS,o.model.register_date=ke(o.model.register_date),o.model.__negotiators.forEach(_=>{o.model.signers.push(_.hasOwnProperty("user")?{id:_.id,user:_.user.id,type:_e.NEGOTIATOR}:{user:_.id,type:_e.NEGOTIATOR})}),u.query.compose_id&&(o.model.trip_notice_id=u.query.compose_id),d.value=!0)},R=()=>{},O=async()=>{try{const b=await o.actionCreateDocument(o.model);await l.actionCountList(),b&&(d.value=!1,E(null,r("document-sent"),U.SUCCESS),await n.replace({name:de,query:{document_type:$.ORDER}}))}catch{E(null,r("error-occurred"),U.ERROR)}},N=async()=>{try{const b=await o.actionUpdateDocument({id:u.params.id,body:o.model});await l.actionCountList(),E(null,r("changed"),U.SUCCESS),await n.replace({name:ce,params:{id:u.params.id,document_type:u.params.document_type,document_sub_type:u.params.document_sub_type}})}catch{E(null,r("error-occurred"),U.ERROR)}},P=()=>{a.formType===V?O():N()},z=b=>{o.model.__files=[],b.forEach(i=>{o.model.__files.push(i)})};return ve(async()=>{u.params.id&&await o.actionGetDocumentDetailForUpdate(u.params.id)}),K(()=>{ne(o.model)}),(b,i)=>{const f=Z,s=Y,y=fe,_=Re,q=H;return e(o).detailLoading?(x(),L(f,{key:0})):(x(),A(X,{key:1},[t(e(le),{title:a.formType===e(V)?"create-order":"update-order"},{content:c(()=>[t(me,{"onEmit:preview":T,"onEmit:clearForm":R},{default:c(()=>[t(q,null,{default:c(()=>[t(s,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=k=>e(m).__curator.$model=k),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(u).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(y,{modelValue:e(m).register_number.$model,"onUpdate:modelValue":i[1]||(i[1]=k=>e(m).register_number.$model=k),error:e(m).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(_,{modelValue:e(m).register_date.$model,"onUpdate:modelValue":i[2]||(i[2]=k=>e(m).register_date.$model=k),error:e(m).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":i[3]||(i[3]=k=>e(o).model.__approvers=k),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(m).__negotiators.$model,"onUpdate:modelValue":i[4]||(i[4]=k=>e(m).__negotiators.$model=k),error:e(m).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(s,{"col-class":"w-full"},{default:c(()=>[t(pe,{modelValue:e(m).content.$model,"onUpdate:modelValue":i[5]||(i[5]=k=>e(m).content.$model=k),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(ue,{modelValue:d.value,"onUpdate:modelValue":i[6]||(i[6]=k=>d.value=k),"send-button-loading":e(o).buttonLoading,"onEmit:send":P},{content:c(()=>[t(e(Je),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},hl=J("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await te(se,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await ae({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await ie(p);oe(this.model,a),this.model.__curator=await be([],a.curator.id,!1),this.model.__approvers=await S(a.approvers),this.model.__signers=await S(a.signers)}catch{}finally{this.detailLoading=!1}}}}),_o={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:V}},setup(p){const a=p,{t:o}=G(),l=W(),g=Q(),u=j(),n=hl(),m=re();ge();const r=I(!1),d=ee(n.rules,n.model),T=async()=>{var i,f,s,y;await d.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=M(n.model.__approvers),n.model.signers=M(n.model.__signers),n.model.curator=(f=(i=n==null?void 0:n.model)==null?void 0:i.__curator)==null?void 0:f.user_id,n.model.journal=F.INNER,n.model.company=u.currentUser.company.id,n.model.sender=(y=(s=u==null?void 0:u.currentUser)==null?void 0:s.top_level_department)==null?void 0:y.id,n.model.files=n.model.__files.map(_=>({id:_.id})),n.model.document_type=l.params.document_type,n.model.document_sub_type=l.params.document_sub_type,r.value=!0)},R=()=>{},O=b=>{n.model.__files=[],b.forEach(i=>{n.model.__files.push(i)})},N=async()=>{const b=await n.actionCreateDocument(n.model);await m.actionCountList(),b?(r.value=!1,E(null,o("document-sent"),U.SUCCESS),await g.replace({name:de,query:{document_type:$.NOTICE}})):E(null,o("error-occurred"),U.ERROR)},P=async()=>{await n.actionUpdateDocument({id:l.params.id,body:n.model}),await m.actionCountList(),E(null,o("changed"),U.SUCCESS),await g.replace({name:ce,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},z=()=>{a.formType===V?N():P()};return Ve(async()=>{l.params.id&&await n.actionGetDocumentDetailForUpdate(l.params.id)}),K(()=>{ne(n.model)}),(b,i)=>{const f=Z,s=Y,y=fe,_=H;return e(n).detailLoading?(x(),L(f,{key:0})):(x(),A(X,{key:1},[t(e(le),{title:a.formType===e(V)?"create-notice":"update-notice"},{content:c(()=>[t(me,{"onEmit:preview":T,"onEmit:clearForm":R},{default:c(()=>[t(_,null,{default:c(()=>[t(s,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(d).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=q=>e(d).__curator.$model=q),error:e(d).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(y,{modelValue:e(d).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=q=>e(d).short_description.$model=q),error:e(d).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=q=>e(n).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(d).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=q=>e(d).__signers.$model=q),error:e(d).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(s,{"col-class":"w-full"},{default:c(()=>[t(pe,{modelValue:e(d).content.$model,"onUpdate:modelValue":i[4]||(i[4]=q=>e(d).content.$model=q),error:e(d).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(ue,{modelValue:r.value,"onUpdate:modelValue":i[5]||(i[5]=q=>r.value=q),"send-button-loading":e(n).buttonLoading,"onEmit:send":z},{content:c(()=>[t(e(Qe),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},vl=J("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:a,error:o}=await te(se,p);return a?(this.buttonLoading=!1,Promise.resolve(a)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:p,body:a}){try{this.buttonLoading=!0;const{data:o}=await ae({id:p,body:a});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:a}=await ie(p);oe(this.model,a),this.model.__curator=await be([],a.curator.id,!1),this.model.__approvers=await S(a.approvers),this.model.__signers=await S(a.signers)}catch{}finally{this.detailLoading=!1}}}}),fo={__name:"DecreeForm",props:{formType:{type:String,default:V}},setup(p){const a=p,{t:o}=G(),l=W(),g=Q(),u=j(),n=re();ge();const m=I(!1),r=vl(),d=ee(r.rules,r.model),T=async()=>{var i,f,s,y;await d.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=M(r.model.__approvers),r.model.signers=M(r.model.__signers),r.model.curator=(f=(i=r==null?void 0:r.model)==null?void 0:i.__curator)==null?void 0:f.user_id,r.model.journal=F.ORDERS_PROTOCOLS,r.model.company=u.currentUser.company.id,r.model.sender=(y=(s=u==null?void 0:u.currentUser)==null?void 0:s.top_level_department)==null?void 0:y.id,r.model.files=r.model.__files.map(_=>({id:_.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(r.model.trip_notice_id=l.query.compose_id),m.value=!0)},R=()=>{},O=b=>{r.model.__files=[],b.forEach(i=>{r.model.__files.push(i)})},N=async()=>{const b=await r.actionCreateDocument(r.model);await n.actionCountList(),b?(m.value=!1,E(null,o("document-sent"),U.SUCCESS),await g.replace({name:de,query:{document_type:l.params.document_type}})):E(null,o("error-occurred"),U.ERROR)},P=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await n.actionCountList(),E(null,o("changed"),U.SUCCESS),await g.replace({name:ce,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},z=()=>{a.formType===V?N():P()};return Ve(async()=>{l.params.id&&await r.actionGetDocumentDetailForUpdate(l.params.id)}),K(()=>{ne(r.model)}),(b,i)=>{const f=Z,s=Y,y=fe,_=H;return e(r).detailLoading?(x(),L(f,{key:0})):(x(),A(X,{key:1},[t(e(le),{title:a.formType===e(V)?"create-decree":"update-decree"},{content:c(()=>[t(me,{"onEmit:preview":T,"onEmit:clearForm":R},{default:c(()=>[t(_,null,{default:c(()=>[t(s,{"col-class":"w-1/2"},{default:c(()=>[t(we,{modelValue:e(d).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=q=>e(d).__curator.$model=q),error:e(d).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(y,{modelValue:e(d).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=q=>e(d).short_description.$model=q),error:e(d).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=q=>e(r).model.__approvers=q),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(s,{"col-class":"w-1/2"},{default:c(()=>[t(C,{modelValue:e(d).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=q=>e(d).__signers.$model=q),error:e(d).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(s,{"col-class":"w-full"},{default:c(()=>[t(pe,{modelValue:e(d).content.$model,"onUpdate:modelValue":i[4]||(i[4]=q=>e(d).content.$model=q),error:e(d).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(ue,{modelValue:m.value,"onUpdate:modelValue":i[5]||(i[5]=q=>m.value=q),"send-button-loading":e(r).buttonLoading,"onEmit:send":z},{content:c(()=>[t(e(We),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{mo as _,uo as a,po as b,qo as c,_o as d,fo as e};
