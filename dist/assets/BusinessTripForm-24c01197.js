import{_ as le}from"./BaseRow-8ae970a4.js";import{_ as Ce}from"./BaseInput-af52c65c.js";import{_ as ne}from"./BaseCol-8eddc625.js";import{v as j,b$ as Ae,a6 as Ne,o as k,c as C,i as n,z as u,h as e,bc as De,B as $t,d6 as Ut,cU as Et,f as z,a as P,n as ue,r as wt,G as Re,aD as _e,c4 as B,c5 as W,bR as X,u as G,t as K,b as ee,az as te,cw as qe,F as Z,aa as T,an as fe,d0 as Oe,d as se,aF as yt,cp as Ie,a8 as Ke,d7 as St,e as Se,g as xe,_ as ae,d8 as Ct,d9 as dt,da as Rt,db as ct,dc as ut,dd as pt,bb as ht,cW as Be,bw as Ge,Y as Lt,de as Tt,c_ as Dt,E as Ot}from"./index-de8b9a56.js";import{c as h,r as v,u as Y}from"./index-8f140a1e.js";import{_ as Pt,a as Mt}from"./BranchMultiSelect-70e1d369.js";import{_ as be,a as At,i as Nt,f as It,g as Ft,b as jt,c as zt,d as Bt,e as Gt,j as Wt,k as Yt,h as Ht,l as mt}from"./BasePOA-37659974.js";import"./BaseTabMenu-02371a0b.js";import"./dialog.esm-1e017d2e.js";import"./tabpanel.esm-0e712cf7.js";import{s as ie,S as I,V as Kt,W as $e,X as J,Y as pe,Z as _t,_ as Je,$ as ze,K as qt}from"./index-0b984262.js";import"./BaseTabView-02d7c39d.js";import"./FileTabs-e4086bb0.js";import{_ as F}from"./UserMultiSelect-8b20f0f9.js";import{c as Jt,u as Q,w as ge,d as D}from"./axios.config-7ab54819.js";import{u as Le}from"./common-98514916.js";import{u as ce}from"./count.store-d29a7e9a.js";import{a as we,b as oe,c as ye,u as vt,d as Qt,f as Xt}from"./index.store-9ed4dbe6.js";import{j as ft,k as he,i as ve,c as re,b as Te,l as Pe,m as Ye,n as Xe,o as We,a as Zt,B as kt,M as Qe,O as eo,T as to,C as oo,P as lo,p as no}from"./index-bd76a17d.js";import{F as L,b as Me}from"./constants-33601b85.js";import{_ as He}from"./BaseDropdown-ec1580fb.js";import{_ as Fe}from"./BaseCalendar-8a597ba5.js";import{_ as Vt}from"./WithLabel-28bf80dd.js";import{a as de}from"./formatDate-5a7e7393.js";import"./qrcode.vue.esm-c19e6383.js";import{_ as ro}from"./ShortDescription-baca9df6.js";import"./dayjs.min-e90f218a.js";/* empty css                                                                               */import{c as ao}from"./Dropdown-fef9ef09.js";import"./menu.esm-f8d42558.js";/* empty css                                                 */import"./avatar.esm-abc3640d.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-92c7100b.js";import"./common.store-83b8f031.js";import{_ as Ee}from"./WithRadio-95f98e59.js";import"./radiobutton.esm-f4eaabd3.js";import"./checkbox.esm-0b45778f.js";import{_ as so}from"./WithSelectable-a5fc48ff.js";import{_ as io}from"./BaseBrickTab-596a47eb.js";import{_ as co}from"./BaseFileUpload-42a861f1.js";import{_ as uo}from"./BaseFroalaEditor-538c9dcd.js";import{_ as po}from"./BaseLabel-ec493089.js";import{K as mo}from"./main-30262205.js";import{_ as _o}from"./BaseDialog-183f1be0.js";const qo={class:"user-select"},me={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(c,{emit:s}){const l=c,o=j([]),f=Ae(l,"modelValue"),a=async t=>{let{data:m}=await Jt.get(`${l.apiUrl}/`,t);m.hasOwnProperty("results")?o.value=m.results:o.value=m};return Ne(async()=>{await a(l.apiParams)}),(t,m)=>(k(),C("div",qo,[n(He,{modelValue:e(f),"onUpdate:modelValue":m[0]||(m[0]=r=>De(f)?f.value=r:null),options:o.value,"onUpdate:options":m[1]||(m[1]=r=>o.value=r),error:l.error,"api-url":l.apiUrl,"api-params":l.apiParams,"option-label":"full_name",label:l.label,placeholder:l.placeholder,required:l.required,searchable:"","onEmit:change":m[2]||(m[2]=r=>s("emit:change",r))},{option:u(({option:r})=>[n(e(so),{items:[r]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var fo=`
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
`,bo={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};$t.extend({name:"editor",css:fo,classes:bo});(function(){try{return window.Quill}catch{return null}})();const ke={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(c){return["froala","tiny"].includes(c)}}},emits:["update:modelValue","emit:fileUpload"],setup(c,{emit:s}){const l=c,o=Ae(l,"modelValue"),f=j([{title:"text",slot:"editor",icon:Ut},{title:"file",slot:"file",icon:Et}]);return(a,t)=>(k(),z(io,{"tab-panel-list":f.value,"panel-container-class":"px-0"},{editor:u(()=>[c.editor==="froala"?(k(),z(uo,{key:0,modelValue:e(o),"onUpdate:modelValue":t[0]||(t[0]=m=>De(o)?o.value=m:null)},null,8,["modelValue"])):(k(),z(ao,{key:1,modelValue:e(o),"onUpdate:modelValue":t[1]||(t[1]=m=>De(o)?o.value=m:null)},null,8,["modelValue"]))]),file:u(()=>[P("div",{class:ue(l.fileUploadContainerClasses)},[n(co,{files:l.files,"onEmit:fileUpload":t[2]||(t[2]=m=>s("emit:fileUpload",m))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},go={class:"flex flex-col justify-between h-full"},wo={class:"px-6 py-4 overflow-y-auto"},yo={class:"actions p-6"},Ue={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(c,{emit:s}){return(l,o)=>{const f=Re;return k(),C("div",go,[P("div",wo,[wt(l.$slots,"default")]),P("div",yo,[n(f,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:o[0]||(o[0]=a=>s("emit:clearForm"))}),n(f,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:o[1]||(o[1]=a=>s("emit:preview"))})])])}}},ho=_e("sd-stores-inner",{state:()=>{var c,s;return{buttonLoading:!1,detailLoading:!1,model:{company:(s=(c=Q().currentUser)==null?void 0:c.company)==null?void 0:s.id,content:null,document_type:B.INNER,document_sub_type:W.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:X.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__departments:{required:h.withMessage("Поле не должен быть пустым",v)},__approvers:{},__signers:{required:h.withMessage("Поле не должен быть пустым",v)}}}},actions:{async actionCreateDocument(c){let s={...c,type:ft,sub_type:ft};this.buttonLoading=!0;const{response:l,error:o}=await ge(ye,s);return l?(this.buttonLoading=!1,Promise.resolve(l)):Promise.reject(o)},async actionUpdateDocument({id:c,body:s}){try{this.buttonLoading=!0;const{data:l}=await we({id:c,body:s});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:s}=await oe(c);ie(this.model,s),this.model.__approvers=await I(s.approvers),this.model.__signers=await I(s.signers),this.model.__departments=await Kt(s.receiver.departments),this.model.__files=s.files}catch{}finally{this.detailLoading=!1}}}}),vo={class:"font-semibold text-xl"},Ve={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(c,{emit:s}){const o=Ae(c,"modelValue"),{t:f}=G();return(a,t)=>{const m=Re,r=_o;return k(),z(r,{modelValue:e(o),"onUpdate:modelValue":t[1]||(t[1]=q=>De(o)?o.value=q:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:u(()=>[P("span",vo,K(e(f)("preview")),1)]),content:u(()=>[wt(a.$slots,"content")]),footer:u(()=>[n(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),n(m,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:c.sendButtonLoading,onClick:t[0]||(t[0]=q=>s("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},cn={__name:"InnerForm",props:{formType:{type:String,default:L}},setup(c){const s=c,l=Q(),o=ho();Le();const f=ce(),a=j(!1);j(null);const{t}=G(),m=ee(),r=te(),q=Y(o.rules,o.model),U=async()=>{await q.value.$validate()&&(a.value=!0,o.model.approvers=[],o.model.signers=[],o.model.departments=[],o.model.departments=o.model.__departments.map(p=>p.id),o.model.files=[],o.model.files=o.model.__files.map(p=>({id:p.id})),o.model.journal=X.INNER,o.model.sender=l.currentUser.top_level_department.id,o.model.approvers=J(o.model.__approvers),o.model.signers=J(o.model.__signers),o.model.document_type=r.params.document_type,o.model.document_sub_type=r.params.document_sub_type)},E=()=>{s.formType===L?w():S()},w=async()=>{const V=await o.actionCreateDocument(o.model);await f.actionCountList(),V?(a.value=!1,D(null,t("document-sent"),T.SUCCESS),await m.replace({name:he,query:{document_type:B.INNER}})):D(null,t("error-occurred"),T.ERROR)},S=async()=>{await o.actionUpdateDocument({id:r.params.id,body:o.model}),await f.actionCountList(),D(null,t("document-sent"),T.SUCCESS),await m.replace({name:ve,params:{id:r.params.id,document_type:B.INNER,document_sub_type:W.SERVICE_LETTER}})},R=()=>{console.log("Clear Form")},N=V=>{o.model.__files=[],V.forEach(p=>{o.model.__files.push(p)})};return Ne(async()=>{r.params.id&&await o.actionGetDocumentDetailForUpdate(r.params.id)}),qe(()=>{$e(o.model)}),(V,p)=>{const b=fe,d=ne,i=Ce,g=le;return e(o).detailLoading?(k(),z(b,{key:0})):(k(),C(Z,{key:1},[n(e(be),{title:s.formType===e(L)?"create-sd-inner":"update-sd-inner"},{content:u(()=>[n(Ue,{"onEmit:preview":U,"onEmit:clearForm":R},{default:u(()=>[n(g,null,{default:u(()=>[n(d,{"col-class":"w-1/2"},{default:u(()=>[n(Pt,{modelValue:e(q).__departments.$model,"onUpdate:modelValue":p[0]||(p[0]=_=>e(q).__departments.$model=_),error:e(q).__departments},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(i,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":p[1]||(p[1]=_=>e(q).short_description.$model=_),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":p[2]||(p[2]=_=>e(q).__approvers.$model=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":p[3]||(p[3]=_=>e(q).__signers.$model=_),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-full"},{default:u(()=>[n(ke,{modelValue:e(q).content.$model,"onUpdate:modelValue":p[4]||(p[4]=_=>e(q).content.$model=_),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Ve,{modelValue:a.value,"onUpdate:modelValue":p[5]||(p[5]=_=>a.value=_),"send-button-loading":e(o).buttonLoading,"onEmit:send":E},{content:u(()=>{var _,x;return[n(At,{"compose-model":{...e(o).model,signers:e(o).model.__signers,approvers:e(o).model.__approvers,author:e(o).model.__signers[0],sender:{name:(x=(_=e(l).currentUser)==null?void 0:_.top_level_department)==null?void 0:x.name},receiver:{departments:e(o).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},ko=_e("sd-store-application",{state:()=>{var c,s;return{buttonLoading:!1,detailLoading:!1,model:{company:(s=(c=Q().currentUser)==null?void 0:c.company)==null?void 0:s.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__approvers:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{}}}},actions:{async actionCreateDocument(c){let s={...c};this.buttonLoading=!0;const{response:l,error:o}=await ge(ye,s);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:s}){try{this.buttonLoading=!0;const{data:l}=await we({id:c,body:s});return Promise.resolve(l)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:s}=await oe(c);ie(this.model,s),this.model.__approvers=await I(s.approvers),this.model.__signers=await I(s.signers.filter(l=>l.type===Oe.SIGNER)),this.model.__curator=await pe([],s.curator.id,!1),this.model.__files=s.files}catch{}finally{this.detailLoading=!1}}}}),xt=_e("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:Q().currentUser.company.id,curator:null,document_type:B.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:X.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",v)},register_date:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__negotiators:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:s,error:l}=await ge(ye,c);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:s}){try{this.buttonLoading=!0;const{data:l}=await we({id:c,body:s});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:s}=await oe(c);ie(this.model,s),this.model.__signers=await I(s.signers.filter(l=>l.type!==Oe.NEGOTIATOR)),this.model.__negotiators=await I(s.signers.filter(l=>l.type===Oe.NEGOTIATOR)),this.model.__approvers=await I(s.approvers),this.model.__curator=await pe([],s.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),un={__name:"ApplicationForm",props:{formType:{type:String,default:L}},setup(c){const s=c,l=Q(),o=ko();Le();const f=ce();xt();const a=j(!1);j(null);const{t}=G(),m=ee(),r=te(),q=Y(o.rules,o.model),U=async()=>{var p,b,d,i,g;await q.value.$validate()&&(a.value=!0,o.model.approvers=[],o.model.signers=[],o.model.signers=[{user:(p=l==null?void 0:l.currentUser)==null?void 0:p.id}],o.model.sender=(d=(b=l==null?void 0:l.currentUser)==null?void 0:b.top_level_department)==null?void 0:d.id,o.model.curator=(g=(i=o==null?void 0:o.model)==null?void 0:i.__curator)==null?void 0:g.user_id,o.model.journal=X.APPLICATION,o.model.document_type=r.params.document_type,o.model.document_sub_type=r.params.document_sub_type,o.model.approvers=J(o.model.__approvers))},E=async()=>{},w=()=>{s.formType===L?S():R()},S=async()=>{const V=await o.actionCreateDocument(o.model);await f.actionCountList(),V?(a.value=!1,D(null,t("document-sent"),T.SUCCESS),await m.replace({name:he,query:{document_type:B.APPLICATION}})):D(null,t("error-occurred"),T.ERROR)},R=async()=>{await o.actionUpdateDocument({id:r.params.id,body:o.model}),await f.actionCountList(),D(null,t("document-sent"),T.SUCCESS),await m.replace({name:ve,params:{id:r.params.id,document_type:B.APPLICATION,document_sub_type:W.LABOR_LEAVE}})},N=V=>{o.model.__files=[],V.forEach(p=>{o.model.__files.push(p)})};return Ne(async()=>{r.params.id&&await o.actionGetDocumentDetailForUpdate(r.params.id)}),qe(()=>{$e(o.model)}),(V,p)=>{const b=fe,d=ne,i=le;return e(o).detailLoading?(k(),z(b,{key:0})):(k(),C(Z,{key:1},[n(e(be),{title:s.formType===e(L)?"create-sd-application":"update-sd-application"},{content:u(()=>[n(Ue,{"onEmit:preview":U,"onEmit:clearForm":E},{default:u(()=>[n(i,null,{default:u(()=>[n(d,{"col-class":"w-1/2"},{default:u(()=>[n(me,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":p[0]||(p[0]=g=>e(q).__curator.$model=g),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":p[1]||(p[1]=g=>e(q).__approvers.$model=g),error:e(q).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":p[2]||(p[2]=g=>e(q).__signers.$model=g),disabled:"",label:"signers",placeholder:e(l).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),n(d,{"col-class":"w-full"},{default:u(()=>[n(ke,{modelValue:e(q).content.$model,"onUpdate:modelValue":p[3]||(p[3]=g=>e(q).content.$model=g),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Ve,{modelValue:a.value,"onUpdate:modelValue":p[4]||(p[4]=g=>a.value=g),"send-button-loading":e(o).buttonLoading,"onEmit:send":w},{content:u(()=>[n(Nt,{"compose-model":{...e(o).model,curator:e(o).model.__curator,author:s.formType===e(L)?e(l).currentUser:e(o).model.__signers[0].user,signers:s.formType===e(L)?[e(l).currentUser]:e(o).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Vo=_e("sd-notice-store",{state:()=>(Q(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:B.NOTICE,document_sub_type:W.BUSINESS_TRIP,journal:X.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:h.withMessage("Поле не должен быть пустым",v)},start_date:{required:h.withMessage("Поле не должен быть пустым",v)},route:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__companies:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__employees:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},__tags:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:s,error:l}=await ge(ye,c);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:s}){try{this.buttonLoading=!0;const{data:l}=await we({id:c,body:s});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c,s=!1){try{this.detailLoading=!0;const{data:l}=await oe(c);ie(this.model,l),this.model.__companies=[],this.model.__curator=await pe([],l.curator.id,!1),this.model.__employees=await I(l.notices),s?(this.model.__approvers=await I(l.approvers.filter(o=>{var f,a;return((f=o==null?void 0:o.user)==null?void 0:f.id)!==((a=l==null?void 0:l.curator)==null?void 0:a.assistant)})),this.model.register_number=null):this.model.__approvers=await I(l.approvers),this.model.__signers=await I(l.signers),this.model.__companies=await _t(l.notices[0].destinations),this.model.__tags=await Je(l.tags),this.model.start_date=l.notices[0].start_date,this.model.end_date=l.notices[0].end_date,this.model.__tags=l.tags,this.model.route=l.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(c,s){try{this.detailLoading=!0;const{data:l}=await oe(c),o=await oe(s);ie(this.model,l),this.model.__companies=[],this.model.__curator=await pe([],l.curator.id,!1),this.model.__employees=await I(o.data.notices),this.model.__approvers=await I(l.approvers),this.model.__signers=await I(l.signers),this.model.__companies=await _t(o.data.notices[0].destinations),this.model.__tags=await Je(l.tags),this.model.start_date=o.data.notices[0].start_date,this.model.end_date=o.data.notices[0].end_date,this.model.__tags=l.tags,this.model.route=o.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),xo={class:"flex w-full gap-x-4"},pn={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:L}},setup(c){const s=c,{t:l}=G(),o=te(),f=ee(),a=Q(),t=Vo(),m=ce();Le();const r=Y(t.rules,t.model),q=j(!1),U=se(()=>{const d=s.formType===L,i=o.params.document_sub_type;return i===W.BUSINESS_TRIP_DECREE_LOCAL?d?"create-decree":"update-decree":i===W.BUSINESS_TRIP_ORDER_LOCAL?d?"create-order":"update-order":d?"create-business-trip-notice":"update-business-trip-notice"}),E=se(()=>{var d,i;return o.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL&&((d=o==null?void 0:o.query)==null?void 0:d.compose_id)&&((i=o==null?void 0:o.query)==null?void 0:i.document_sub_type)===W.BUSINESS_TRIP}),w=se(()=>{var d;return!!(o.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL&&((d=t==null?void 0:t.model)!=null&&d.trip_notice_id))});yt(()=>t.model.__tags,d=>{if(s.formType===L)if(d&&d.length){let i=`${d.map(g=>g.name_uz).join(", ")} yuzasidan`;t.model.short_description=i.charAt(0).toUpperCase()+i.slice(1).toLowerCase()}else t.model.short_description=null});const S=async()=>{var i,g,_,x,A;await r.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.approvers=J(t.model.__approvers),t.model.signers=J(t.model.__signers),t.model.curator=(g=(i=t==null?void 0:t.model)==null?void 0:i.__curator)==null?void 0:g.user_id,t.model.journal=o.params.document_type===B.DECREE||o.params.document_type===B.ORDER?X.ORDERS_PROTOCOLS:X.INNER,t.model.company=a.currentUser.company.id,t.model.notices=t.model.__employees.map(O=>({start_date:t.model.start_date,end_date:t.model.end_date,user:O.id,route:t.model.route,companies:t.model.__companies.map($=>$.id)})),t.model.sender=(x=(_=a==null?void 0:a.currentUser)==null?void 0:_.top_level_department)==null?void 0:x.id,t.model.tags=t.model.__tags.map(O=>({id:O.id})),t.model.files=t.model.__files.map(O=>({id:O.id})),t.model.document_type=o.params.document_type,t.model.document_sub_type=o.params.document_sub_type,E.value&&(t.model.trip_notice_id=(A=o==null?void 0:o.query)==null?void 0:A.compose_id),q.value=!0)},R=()=>{},N=d=>{t.model.__files=[],d.forEach(i=>{t.model.__files.push(i)})},V=async()=>{E.value&&(t.model.notices=[]);const d=await t.actionCreateDocument(t.model);await m.actionCountList(),d?(q.value=!1,D(null,l("document-sent"),T.SUCCESS),await f.replace({name:he,query:{document_type:o.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL?B.DECREE:o.params.document_sub_type===W.BUSINESS_TRIP_ORDER_LOCAL?B.ORDER:B.NOTICE}})):D(null,l("error-occurred"),T.ERROR)},p=async()=>{(E.value||w.value)&&(t.model.notices=[]),await t.actionUpdateDocument({id:o.params.id,body:t.model}),await m.actionCountList(),D(null,l("changed"),T.SUCCESS),await f.replace({name:ve,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},b=()=>{s.formType===L?V():p()};return Ie(async()=>{o.params.id&&o.query.trip_notice_id&&o.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL?await t.actionGetDocumentDetailForUpdateForCustomUse(o.params.id,o.query.trip_notice_id):o.params.id?await t.actionGetDocumentDetailForUpdate(o.params.id):E.value&&await t.actionGetDocumentDetailForUpdate(o.query.compose_id,!0)}),qe(()=>{$e(t.model)}),(d,i)=>{const g=fe,_=ne,x=Fe,A=He,O=Ce,$=le;return e(t).detailLoading?(k(),z(g,{key:0})):(k(),C(Z,{key:1},[n(e(be),{title:U.value},{content:u(()=>[n(Ue,{"onEmit:preview":S,"onEmit:clearForm":R},{default:u(()=>[n($,null,{default:u(()=>[n(_,{"col-class":"w-1/2"},{default:u(()=>[n(me,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=y=>e(r).__curator.$model=y),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(r).__employees.$model,"onUpdate:modelValue":i[1]||(i[1]=y=>e(r).__employees.$model=y),error:e(r).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:E.value||w.value},null,8,["modelValue","error","disabled"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(Mt,{modelValue:e(r).__companies.$model,"onUpdate:modelValue":i[2]||(i[2]=y=>e(r).__companies.$model=y),error:e(r).__companies,"text-truncate":"",disabled:E.value||w.value},null,8,["modelValue","error","disabled"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(Vt,{modelValue:e(r).__tags.$model,"onUpdate:modelValue":i[3]||(i[3]=y=>e(r).__tags.$model=y),error:e(r).__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:u(({value:y})=>[Ke(K(y.name),1)]),option:u(({value:y})=>[n(e(Ee),{title:y.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[P("div",xo,[n(x,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[i[4]||(i[4]=y=>e(r).start_date.$model=y),i[5]||(i[5]=y=>e(r).start_date.$model=e(de)(y))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:E.value||w.value},null,8,["modelValue","error","min-date","disabled"]),n(x,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[i[6]||(i[6]=y=>e(r).end_date.$model=y),i[7]||(i[7]=y=>e(r).end_date.$model=e(de)(y))],error:e(r).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:E.value||w.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(A,{modelValue:e(r).route.$model,"onUpdate:modelValue":i[8]||(i[8]=y=>e(r).route.$model=y),error:e(r).route,options:e(St),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:E.value||w.value},null,8,["modelValue","error","options","disabled"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":i[9]||(i[9]=y=>e(t).model.__approvers=y),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":i[10]||(i[10]=y=>e(r).__signers.$model=y),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(O,{modelValue:e(r).short_description.$model,"onUpdate:modelValue":i[11]||(i[11]=y=>e(r).short_description.$model=y),error:e(r).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(_,{"col-class":"w-full"},{default:u(()=>[n(ke,{modelValue:e(r).content.$model,"onUpdate:modelValue":i[12]||(i[12]=y=>e(r).content.$model=y),error:e(r).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Ve,{modelValue:q.value,"onUpdate:modelValue":i[13]||(i[13]=y=>q.value=y),"send-button-loading":e(t).buttonLoading,"onEmit:send":b},{content:u(()=>[e(o).params.document_sub_type===e(W).BUSINESS_TRIP_DECREE_LOCAL?(k(),z(e(It),{key:0,"compose-model":e(t).model,preview:!0},null,8,["compose-model"])):e(o).params.document_sub_type===e(W).BUSINESS_TRIP_ORDER_LOCAL?(k(),z(e(Ft),{key:1,"compose-model":e(t).model,preview:!0},null,8,["compose-model"])):(k(),z(e(jt),{key:2,"compose-model":e(t).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},mn={__name:"OrderForm",props:{formType:{type:String,default:L}},setup(c){const s=c,l=xt(),o=ce(),f=Q(),a=te(),t=ee(),m=Y(l.rules,l.model),{t:r}=G(),q=j(!1),U=async()=>{var p,b,d,i;await m.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=J(l.model.__approvers),l.model.curator=(b=(p=l==null?void 0:l.model)==null?void 0:p.__curator)==null?void 0:b.user_id,l.model.sender=(i=(d=f==null?void 0:f.currentUser)==null?void 0:d.top_level_department)==null?void 0:i.id,l.model.files=l.model.__files.map(g=>({id:g.id})),l.model.document_type=a.params.document_type,l.model.document_sub_type=a.params.document_sub_type,l.model.journal=X.ORDERS_PROTOCOLS,l.model.register_date=de(l.model.register_date),l.model.__negotiators.forEach(g=>{l.model.signers.push(g.hasOwnProperty("user")?{id:g.id,user:g.user.id,type:Oe.NEGOTIATOR}:{user:g.id,type:Oe.NEGOTIATOR})}),a.query.compose_id&&(l.model.trip_notice_id=a.query.compose_id),q.value=!0)},E=()=>{},w=async()=>{try{const V=await l.actionCreateDocument(l.model);await o.actionCountList(),V&&(q.value=!1,D(null,r("document-sent"),T.SUCCESS),await t.replace({name:he,query:{document_type:B.ORDER}}))}catch{D(null,r("error-occurred"),T.ERROR)}},S=async()=>{try{const V=await l.actionUpdateDocument({id:a.params.id,body:l.model});await o.actionCountList(),D(null,r("changed"),T.SUCCESS),await t.replace({name:ve,params:{id:a.params.id,document_type:a.params.document_type,document_sub_type:a.params.document_sub_type}})}catch{D(null,r("error-occurred"),T.ERROR)}},R=()=>{s.formType===L?w():S()},N=V=>{l.model.__files=[],V.forEach(p=>{l.model.__files.push(p)})};return Ne(async()=>{a.params.id&&await l.actionGetDocumentDetailForUpdate(a.params.id)}),qe(()=>{$e(l.model)}),(V,p)=>{const b=fe,d=ne,i=Ce,g=Fe,_=le;return e(l).detailLoading?(k(),z(b,{key:0})):(k(),C(Z,{key:1},[n(e(be),{title:s.formType===e(L)?"create-order":"update-order"},{content:u(()=>[n(Ue,{"onEmit:preview":U,"onEmit:clearForm":E},{default:u(()=>[n(_,null,{default:u(()=>[n(d,{"col-class":"w-1/2"},{default:u(()=>[n(me,{modelValue:e(m).__curator.$model,"onUpdate:modelValue":p[0]||(p[0]=x=>e(m).__curator.$model=x),error:e(m).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(i,{modelValue:e(m).register_number.$model,"onUpdate:modelValue":p[1]||(p[1]=x=>e(m).register_number.$model=x),error:e(m).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(g,{modelValue:e(m).register_date.$model,"onUpdate:modelValue":p[2]||(p[2]=x=>e(m).register_date.$model=x),error:e(m).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":p[3]||(p[3]=x=>e(l).model.__approvers=x),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(m).__negotiators.$model,"onUpdate:modelValue":p[4]||(p[4]=x=>e(m).__negotiators.$model=x),error:e(m).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-full"},{default:u(()=>[n(ke,{modelValue:e(m).content.$model,"onUpdate:modelValue":p[5]||(p[5]=x=>e(m).content.$model=x),error:e(m).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":N},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Ve,{modelValue:q.value,"onUpdate:modelValue":p[6]||(p[6]=x=>q.value=x),"send-button-loading":e(l).buttonLoading,"onEmit:send":R},{content:u(()=>[n(e(zt),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},$o=_e("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:s,error:l}=await ge(ye,c);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:s}){try{this.buttonLoading=!0;const{data:l}=await we({id:c,body:s});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:s}=await oe(c);ie(this.model,s),this.model.__curator=await pe([],s.curator.id,!1),this.model.__approvers=await I(s.approvers),this.model.__signers=await I(s.signers)}catch{}finally{this.detailLoading=!1}}}}),_n={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:L}},setup(c){const s=c,{t:l}=G(),o=te(),f=ee(),a=Q(),t=$o(),m=ce();Le();const r=j(!1),q=Y(t.rules,t.model),U=async()=>{var p,b,d,i;await q.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.approvers=J(t.model.__approvers),t.model.signers=J(t.model.__signers),t.model.curator=(b=(p=t==null?void 0:t.model)==null?void 0:p.__curator)==null?void 0:b.user_id,t.model.journal=X.INNER,t.model.company=a.currentUser.company.id,t.model.sender=(i=(d=a==null?void 0:a.currentUser)==null?void 0:d.top_level_department)==null?void 0:i.id,t.model.files=t.model.__files.map(g=>({id:g.id})),t.model.document_type=o.params.document_type,t.model.document_sub_type=o.params.document_sub_type,r.value=!0)},E=()=>{},w=V=>{t.model.__files=[],V.forEach(p=>{t.model.__files.push(p)})},S=async()=>{const V=await t.actionCreateDocument(t.model);await m.actionCountList(),V?(r.value=!1,D(null,l("document-sent"),T.SUCCESS),await f.replace({name:he,query:{document_type:B.NOTICE}})):D(null,l("error-occurred"),T.ERROR)},R=async()=>{await t.actionUpdateDocument({id:o.params.id,body:t.model}),await m.actionCountList(),D(null,l("changed"),T.SUCCESS),await f.replace({name:ve,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},N=()=>{s.formType===L?S():R()};return Ie(async()=>{o.params.id&&await t.actionGetDocumentDetailForUpdate(o.params.id)}),qe(()=>{$e(t.model)}),(V,p)=>{const b=fe,d=ne,i=Ce,g=le;return e(t).detailLoading?(k(),z(b,{key:0})):(k(),C(Z,{key:1},[n(e(be),{title:s.formType===e(L)?"create-notice":"update-notice"},{content:u(()=>[n(Ue,{"onEmit:preview":U,"onEmit:clearForm":E},{default:u(()=>[n(g,null,{default:u(()=>[n(d,{"col-class":"w-1/2"},{default:u(()=>[n(me,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":p[0]||(p[0]=_=>e(q).__curator.$model=_),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(i,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":p[1]||(p[1]=_=>e(q).short_description.$model=_),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":p[2]||(p[2]=_=>e(t).model.__approvers=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":p[3]||(p[3]=_=>e(q).__signers.$model=_),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-full"},{default:u(()=>[n(ke,{modelValue:e(q).content.$model,"onUpdate:modelValue":p[4]||(p[4]=_=>e(q).content.$model=_),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":w},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Ve,{modelValue:r.value,"onUpdate:modelValue":p[5]||(p[5]=_=>r.value=_),"send-button-loading":e(t).buttonLoading,"onEmit:send":N},{content:u(()=>[n(e(Bt),{"compose-model":e(t).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Uo=_e("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){const s={...c};delete s.bookings,delete s.notices,delete s.trip_plans,this.buttonLoading=!0;const{response:l,error:o}=await ge(ye,s);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:s}){const l={...s};delete l.bookings,delete l.notices,delete l.trip_plans;try{this.buttonLoading=!0;const{data:o}=await we({id:c,body:l});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c,s){try{this.detailLoading=!0;const{data:l}=await oe(c);ie(this.model,l),this.model.__curator=await pe([],l.curator.id,!1),this.model.__approvers=await I(l.approvers),this.model.__signers=await I(l.signers)}catch{}finally{this.detailLoading=!1}}}}),qn={__name:"DecreeForm",props:{formType:{type:String,default:L}},setup(c){const s=c,{t:l}=G(),o=te(),f=ee(),a=Q(),t=ce();Le();const m=j(!1),r=Uo(),q=vt(),U=Y(r.rules,r.model),E=async()=>{var d,i,g,_;await U.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=J(r.model.__approvers),r.model.signers=J(r.model.__signers),r.model.curator=(i=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:i.user_id,r.model.journal=X.ORDERS_PROTOCOLS,r.model.company=a.currentUser.company.id,r.model.sender=(_=(g=a==null?void 0:a.currentUser)==null?void 0:g.top_level_department)==null?void 0:_.id,r.model.files=r.model.__files.map(x=>({id:x.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,o.query.compose_id&&(r.model.trip_notice_id=o.query.compose_id),m.value=!0)},w=()=>{},S=b=>{r.model.__files=[],b.forEach(d=>{r.model.__files.push(d)})},R=async()=>{const b=await r.actionCreateDocument(r.model);await t.actionCountList(),b?(m.value=!1,D(null,l("document-sent"),T.SUCCESS),await f.replace({name:he,query:{document_type:o.params.document_type}})):D(null,l("error-occurred"),T.ERROR)},N=async()=>{await r.actionUpdateDocument({id:o.params.id,body:r.model}),await t.actionCountList(),D(null,l("changed"),T.SUCCESS),await f.replace({name:ve,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},V=()=>{s.formType===L?R():N()},p=async b=>{const{data:d}=await q.actionGetDocumentDetail(b);r.model.notices=d==null?void 0:d.notices,r.model.trip_plans=d==null?void 0:d.trip_plans,r.model.bookings=d==null?void 0:d.bookings,r.model.short_description=d==null?void 0:d.short_description,r.model.trip_notice_register_number=d==null?void 0:d.register_number};return Ie(async()=>{s.formType===L&&o.query.compose_id?await p(o.query.compose_id):s.formType===Me&&o.query.trip_notice_id&&o.params.id?(await r.actionGetDocumentDetailForUpdate(o.params.id,null),await p(o.query.trip_notice_id)):s.formType===Me&&o.params.id&&await r.actionGetDocumentDetailForUpdate(o.params.id,null)}),qe(()=>{$e(r.model)}),(b,d)=>{const i=fe,g=ne,_=Ce,x=le;return e(r).detailLoading?(k(),z(i,{key:0})):(k(),C(Z,{key:1},[n(e(be),{title:s.formType===e(L)?"create-decree":"update-decree"},{content:u(()=>[n(Ue,{"onEmit:preview":E,"onEmit:clearForm":w},{default:u(()=>[n(x,null,{default:u(()=>[n(g,{"col-class":"w-1/2"},{default:u(()=>[n(me,{modelValue:e(U).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=A=>e(U).__curator.$model=A),error:e(U).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(g,{"col-class":"w-1/2"},{default:u(()=>[n(_,{modelValue:e(U).short_description.$model,"onUpdate:modelValue":d[1]||(d[1]=A=>e(U).short_description.$model=A),error:e(U).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(g,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[2]||(d[2]=A=>e(r).model.__approvers=A),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(g,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(U).__signers.$model,"onUpdate:modelValue":d[3]||(d[3]=A=>e(U).__signers.$model=A),error:e(U).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(g,{"col-class":"w-full"},{default:u(()=>[n(ke,{modelValue:e(U).content.$model,"onUpdate:modelValue":d[4]||(d[4]=A=>e(U).content.$model=A),error:e(U).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":S},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Ve,{modelValue:m.value,"onUpdate:modelValue":d[5]||(d[5]=A=>m.value=A),"send-button-loading":e(r).buttonLoading,"onEmit:send":V},{content:u(()=>[n(e(Gt),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Eo=_e("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:h.withMessage("Поле не должен быть пустым",v)},start_date:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},__user:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:s,error:l}=await ge(ye,c);return s?(this.buttonLoading=!1,Promise.resolve(s)):(this.buttonLoading=!1,Promise.reject(l))},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:s}=await oe(c);return ie(this.model,s),this.model.__curator=await pe([],s.curator.id,!1),this.model.__approvers=await I(s.approvers),this.model.__signers=await I(s.signers),this.model.__user=await ze("users/personal-information",[],!1,s.user.id),this.model.__parent=s.parent,Promise.resolve(s)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:c,body:s}){try{this.buttonLoading=!0;const{data:l}=await we({id:c,body:s});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}}}}),fn={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:L}},setup(c){const s=c,l=te(),o=ee(),f=Q(),a=Eo();vt();const t=ce(),{t:m}=G(),r=Y(a.rules,a.model),q=j(!1),U=j([]),E=se(()=>s.formType===L?"create-poa":"update-poa"),w=se(()=>a.model.start_date?new Date(a.model.start_date):new Date),S=async()=>{var i,g,_,x,A,O,$,y,H,M,Ze,et,tt,ot,lt,nt,rt,at,st,it;if(await r.value.$validate()){if(a.model.approvers=[],a.model.signers=[],a.model.approvers=J(a.model.__approvers),a.model.signers=J(a.model.__signers),a.model.curator=(g=(i=a==null?void 0:a.model)==null?void 0:i.__curator)==null?void 0:g.user_id,a.model.user=(x=(_=a==null?void 0:a.model)==null?void 0:_.__user)==null?void 0:x.id,a.model.journal=X.POWER_OF_ATTORNEY,a.model.company=(O=(A=f.currentUser)==null?void 0:A.company)==null?void 0:O.id,a.model.sender=(y=($=f==null?void 0:f.currentUser)==null?void 0:$.top_level_department)==null?void 0:y.id,a.model.document_type=l.params.document_type,a.model.document_sub_type=l.params.document_sub_type,a.model.content=".",a.model.parent=(M=(H=a.model)==null?void 0:H.__parent)==null?void 0:M.id,!((et=(Ze=a==null?void 0:a.model)==null?void 0:Ze.__user)!=null&&et.passport_seria||(ot=(tt=a==null?void 0:a.model)==null?void 0:tt.__user)!=null&&ot.passport_number||(nt=(lt=a==null?void 0:a.model)==null?void 0:lt.__user)!=null&&nt.passport_issue_date||(at=(rt=a==null?void 0:a.model)==null?void 0:rt.__user)!=null&&at.passport_issued_by)){D(null,`${(it=(st=a.model)==null?void 0:st.__user)==null?void 0:it.full_name}: ${m("passport-details-error")}`,T.WARNING);return}q.value=!0}},R=()=>{},N=async()=>{const d=await a.actionCreateDocument(a.model);await t.actionCountList(),d?(q.value=!1,D(null,m("document-sent"),T.SUCCESS),await o.replace({name:he,query:{document_type:B.POWER_OF_ATTORNEY}})):D(null,m("error-occurred"),T.ERROR)},V=async()=>{await a.actionUpdateDocument({id:l.params.id,body:a.model}),await t.actionCountList(),D(null,m("changed"),T.SUCCESS),await o.replace({name:ve,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},p=()=>{s.formType===L?N():V()},b=async d=>{const{data:i}=await Qt({user:d.id,document_sub_type:l.params.document_sub_type,status:5});U.value=i.results};return Ie(async()=>{if(l.params.id){const d=await a.actionGetDocumentDetailForUpdate(l.params.id);d.parent&&(U.value=[d.parent])}}),qe(()=>{$e(a.model)}),(d,i)=>{const g=fe,_=ne,x=Fe,A=He,O=le;return e(a).detailLoading?(k(),z(g,{key:0})):(k(),C(Z,{key:1},[n(e(be),{title:E.value},{content:u(()=>[n(Ue,{"onEmit:preview":S,"onEmit:clearForm":R},{default:u(()=>[n(O,null,{default:u(()=>[n(_,{"col-class":"w-1/2"},{default:u(()=>[n(me,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=$=>e(r).__curator.$model=$),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(me,{modelValue:e(r).__user.$model,"onUpdate:modelValue":i[1]||(i[1]=$=>e(r).__user.$model=$),error:e(r).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":i[2]||(i[2]=$=>b($))},null,8,["modelValue","error"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(x,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[i[3]||(i[3]=$=>e(r).start_date.$model=$),i[4]||(i[4]=$=>e(r).start_date.$model=e(de)($))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(x,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[i[5]||(i[5]=$=>e(r).end_date.$model=$),i[6]||(i[6]=$=>e(r).end_date.$model=e(de)($))],error:e(r).end_date,"min-date":w.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":i[7]||(i[7]=$=>e(a).model.__approvers=$),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":i[8]||(i[8]=$=>e(r).__signers.$model=$),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(_,{"col-class":"w-1/2"},{default:u(()=>[n(A,{modelValue:e(a).model.__parent,"onUpdate:modelValue":i[9]||(i[9]=$=>e(a).model.__parent=$),options:U.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(Ve,{modelValue:q.value,"onUpdate:modelValue":i[10]||(i[10]=$=>q.value=$),"send-button-loading":e(a).buttonLoading,"onEmit:send":p},{content:u(()=>[n(Wt,{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},So={class:"base-stepper-component flex items-center select-none"},Co=["onClick"],Ro={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Lo={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(c,{emit:s}){const{t:l}=G(),o=f=>{s("emit:stepClick",f)};return(f,a)=>{const t=ae;return k(),C("div",So,[(k(!0),C(Z,null,Se(c.items,(m,r)=>(k(),C("div",{key:m.id,class:"flex items-center"},[P("div",{class:ue(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",m.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:q=>o(m)},[n(t,{icon:m.icon,class:ue(m.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),P("span",null,K(e(l)(m.label)),1)],10,Co),r<c.items.length-1?(k(),C("div",Ro)):xe("",!0)]))),128))])}}},je=_e("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:h.withMessage("Поле не должен быть пустым",v)}},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)},__groups:{$each:h.forEach({__users:{required:h.withMessage("Поле не должен быть пустым",v)},__tags:{required:h.withMessage("Поле не должен быть пустым",v)},__regions:{required:h.withMessage("Поле не должен быть пустым",v)},__start_date:{required:h.withMessage("Поле не должен быть пустым",v)},__end_date:{required:h.withMessage("Поле не должен быть пустым",v)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:h.forEach({users:{required:h.withMessage("Поле не должен быть пустым",v)},text:{required:h.withMessage("Поле не должен быть пустым",v)}})}},booking_model:{bookings:[{type:re,route:Te,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:h.forEach({segments:{$each:h.forEach({departure_city:{required:h.withMessage("Поле не должен быть пустым",v)},arrival_city:{required:h.withMessage("Поле не должен быть пустым",v)},date:{required:h.withMessage("Поле не должен быть пустым",v)},time:{required:h.withMessage("Поле не должен быть пустым",v)},segment_class:{required:h.withMessage("Поле не должен быть пустым",v)}})},passengers:{required:h.withMessage("Поле не должен быть пустым",v)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:Ct,active:!0,value:Pe},{id:2,label:"work-plan",icon:dt,active:!1,value:Ye},{id:3,label:"route",icon:Rt,active:!1,value:Xe},{id:4,label:"decree",icon:dt,active:!0,value:We}],routeTabItems:[{id:1,title:"airplane",icon:ct,value:Te},{id:2,title:"train",icon:ut,value:Zt},{id:3,title:"taxi",icon:pt,value:kt}],routeTypeTabItems:[{id:1,title:"there-back",icon:ct,value:re},{id:2,title:"complex-route",icon:ut,value:Qe},{id:3,title:"one-way",icon:pt,value:eo}]}),actions:{async actionCreateDocument(c){const s=qt(c);this.buttonLoading=!0;const{response:l,error:o}=await ge(ye,s);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:s}){const l=await qt(s);try{this.buttonLoading=!0;const{data:o}=await we({id:c,body:l});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){var s,l;try{this.detailLoading=!0;const{data:o}=await oe(c),f=await Xt(o.id);this.decreeModel=(l=(s=f==null?void 0:f.data)==null?void 0:s.to_composes[0])==null?void 0:l.from_compose,ie(this.model,o),this.model.__curator=await pe([],o.curator.id,!1),this.model.__signers=await I(o.signers),this.model.__approvers=await I(o.approvers);const a=Object.values(o.notices.reduce((t,m)=>{const r=m.group_id;return t[r]=t[r]||{group_id:r,items:[]},t[r].items.push(m),t},{}));this.model.__groups=await Promise.all(a.map(async t=>{const m=await Promise.all(t.items.map(w=>I([],w.user.id,!1))),r=await Je(t.items[0].tags),q=await ze("regions",t.items[0].locations),U=t.items[0].start_date,E=t.items[0].end_date;return{__users:m,__tags:r,__regions:q,__start_date:U,__end_date:E}})),this.trip_plan_model.trip_plans=await Promise.all(o.trip_plans.map(async(t,m)=>({...t,users:await I(t.users)}))),this.booking_model.bookings=await Promise.all(o.bookings.map(async t=>({type:t.type,route:t.route,segments:await Promise.all(t.segments.map(async m=>({departure_city:await ze("regions",[],!1,m.departure_city.id),arrival_city:await ze("regions",[],!1,m.arrival_city.id),segment_class:await to.find(r=>r.value===m.segment_class),date:de(m.departure_date),time:await Yt(m.departure_date,m.departure_end_date)}))),passengers:await I(t.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(c){this.model.__groups.splice(c,1)},async actionStepClick(c,s,l){await c.replace({query:{...s.query,step:l}}),this.stepperItems.forEach(f=>f.active=f.value===l),await ht();const o=document.querySelector(".document-view-aside");o&&o.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(c){this.trip_plan_model.trip_plans.splice(c,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:re,route:Te,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(c){this.booking_model.bookings.splice(c,1)},actionChangeRouteSegment(c,s){const l=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[s].segments=c===re?[l(),l()]:[l()]},async actionAddRouteLine(c){this.booking_model.bookings[c].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(c,s){this.booking_model.bookings[c].segments.splice(s,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:re,route:Te,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),To={class:"trip-info-components"},Do={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Oo={class:"flex justify-between"},Po={class:"text-base text-primary-900 font-semibold mb-1"},Mo=["onClick"],Ao={class:"flex w-full gap-x-4"},No={class:"flex items-center justify-between"},bt={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},setup(c,{expose:s}){const l=te(),o=ee(),f=je(),{t:a}=G(),t=Y(f.rules,f.model),m=j(!1),r=E=>{f.model.__files=[],E.forEach(w=>{f.model.__files.push(w)})},q=()=>{f.actionAddGroupBlock()},U=async E=>{const w=await t.value.$validate();if(m.value=!0,!w){D(null,a("fill-required-fields"),T.WARNING);return}await f.actionStepClick(o,l,E)};return s({stepClick:U}),(E,w)=>{const S=ne,R=Ce,N=ae,V=Vt,p=Fe,b=le,d=Re;return k(),C("div",To,[n(b,null,{default:u(()=>[n(S,{"col-class":"w-1/2"},{default:u(()=>[n(me,{modelValue:e(t).__curator.$model,"onUpdate:modelValue":w[0]||(w[0]=i=>e(t).__curator.$model=i),error:e(t).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(S,{"col-class":"w-1/2"},{default:u(()=>[n(R,{modelValue:e(t).short_description.$model,"onUpdate:modelValue":w[1]||(w[1]=i=>e(t).short_description.$model=i),error:e(t).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(S,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:u(()=>[(k(!0),C(Z,null,Se(e(f).model.__groups,(i,g)=>(k(),C("div",Do,[P("div",Oo,[P("span",Po,K(e(a)("group"))+"-"+K(g+1),1),g!==0?(k(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:_=>e(f).actionDeleteGroupBlock(g)},[n(N,{icon:e(Be),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Mo)):xe("",!0)]),n(b,null,{default:u(()=>[n(S,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:i.__users,"onUpdate:modelValue":_=>i.__users=_,error:e(t).__groups.$each.$response.$data[g].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),n(S,{"col-class":"w-1/2"},{default:u(()=>[n(V,{modelValue:i.__regions,"onUpdate:modelValue":_=>i.__regions=_,error:e(t).__groups.$each.$response.$data[g].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":m.value},{chip:u(({value:_})=>[Ke(K(_.name),1)]),option:u(({value:_})=>[n(e(Ee),{title:_.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),n(S,{"col-class":"w-1/2"},{default:u(()=>[n(V,{modelValue:i.__tags,"onUpdate:modelValue":_=>i.__tags=_,error:e(t).__groups.$each.$response.$data[g].__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":m.value},{chip:u(({value:_})=>[Ke(K(_.name),1)]),option:u(({value:_})=>[n(e(Ee),{title:_.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),n(S,{"col-class":"w-1/2"},{default:u(()=>[P("div",Ao,[n(p,{modelValue:i.__start_date,"onUpdate:modelValue":[_=>i.__start_date=_,_=>i.__start_date=e(de)(_)],error:e(t).__groups.$each.$response.$data[g].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),n(p,{modelValue:i.__end_date,"onUpdate:modelValue":[_=>i.__end_date=_,_=>i.__end_date=e(de)(_)],error:e(t).__groups.$each.$response.$data[g].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),n(d,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Ge),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:q},null,8,["icon-left"])]),_:1}),n(S,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(f).model.__approvers,"onUpdate:modelValue":w[2]||(w[2]=i=>e(f).model.__approvers=i),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(S,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:e(t).__signers.$model,"onUpdate:modelValue":w[3]||(w[3]=i=>e(t).__signers.$model=i),error:e(t).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(S,{"col-class":"w-full"},{default:u(()=>[n(ke,{modelValue:e(t).content.$model,"onUpdate:modelValue":w[4]||(w[4]=i=>e(t).content.$model=i),error:e(t).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(f).model.__files,"onEmit:fileUpload":r},null,8,["modelValue","error","files"])]),_:1})]),_:1}),P("div",No,[n(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),n(d,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[5]||(w[5]=i=>U(e(Ye)))})])])}}},Io={class:"work-plan-component"},Fo={class:"flex flex-col gap-y-3"},jo={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},zo={class:"flex justify-between"},Bo={class:"text-base text-primary-900 font-semibold mb-1"},Go=["onClick"],Wo={class:"flex items-center justify-between mt-10"},Yo={class:"flex items-center gap-x-1"},Ho={__name:"WorkPlan",setup(c,{expose:s}){const{t:l}=G(),o=te(),f=ee(),a=je(),t=Y(a.trip_plan_rules,a.trip_plan_model),m=j(!1),r=se(()=>{const E=new Set;return a.model.__groups.reduce((w,S)=>S.__users&&Array.isArray(S.__users)?w.concat(S.__users):w,[]).filter(w=>E.has(w.id)?!1:(E.add(w.id),!0))}),q=async E=>{const w=await t.value.$validate();if(m.value=!0,!w){D(null,l("fill-required-fields"),T.WARNING);return}await a.actionStepClick(f,o,E)},U=()=>{a.actionAddWorkPlanRow(),m.value=!1};return s({stepClick:q}),(E,w)=>{const S=ae,R=ro,N=ne,V=le,p=Re;return k(),C("div",Io,[P("div",Fo,[(k(!0),C(Z,null,Se(e(a).trip_plan_model.trip_plans,(b,d)=>(k(),C("div",jo,[P("div",zo,[P("span",Bo,K(e(l)("plan"))+"-"+K(d+1),1),d!==0?(k(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:i=>e(a).actionDeleteWorkPlanRow(d)},[n(S,{icon:e(Be),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Go)):xe("",!0)]),n(V,null,{default:u(()=>[n(N,{"col-class":"w-1/2"},{default:u(()=>[n(R,{modelValue:b.text,"onUpdate:modelValue":i=>b.text=i,error:e(t).trip_plans.$each.$response.$data[d].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),n(N,{"col-class":"w-1/2"},{default:u(()=>[n(F,{modelValue:b.users,"onUpdate:modelValue":i=>b.users=i,options:r.value,error:e(t).trip_plans.$each.$response.$data[d].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":m.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),n(p,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Ge),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:U},null,8,["icon-left"]),P("div",Wo,[n(p,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),P("div",Yo,[n(p,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[0]||(w[0]=b=>q(e(Pe)))}),n(p,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[1]||(w[1]=b=>q(e(Xe)))})])])])}}},Ko=["onClick"],gt={__name:"BaseBrickRadio",props:{modelValue:{type:[Number,String]},items:{type:Array,default:()=>[]}},emits:["emit:onChange","update:modelValue"],setup(c,{emit:s}){const l=c,{t:o}=G(),f=Ae(l,"modelValue"),a=j({}),t=j(null),m=()=>{ht(()=>{if(t.value){const q=t.value.querySelector(".tab-active");q&&(a.value={width:`${q.offsetWidth}px`,transform:`translateX(${q.offsetLeft}px)`,transition:"transform 0.3s ease, width 0.3s ease"})}})},r=q=>{f.value=q.value,s("emit:onChange",q)};return yt(()=>l.items,()=>{m()},{deep:!0}),Ne(()=>{m()}),(q,U)=>{const E=ae;return k(),C("div",{ref_key:"rootRef",ref:t,class:"relative flex items-center bg-greyscale-50 p-[2px] rounded-full w-fit select-none"},[P("div",{class:"absolute bg-white rounded-[90px] shadow-button h-8 transition-all",style:Lt(a.value)},null,4),(k(!0),C(Z,null,Se(l.items,(w,S)=>(k(),C("div",{key:w.id,class:ue(["tab flex rounded-[90px] h-8 items-center px-4 gap-x-2 cursor-pointer relative z-10",{"tab-active":e(f)===w.value}]),onClick:R=>r(w)},[w.icon?(k(),z(E,{key:0,icon:w.icon,class:ue(["!w-[18px] !h-[18px]",e(f)===w.value?"text-primary-500":"text-greyscale-400"])},null,8,["icon","class"])):xe("",!0),P("span",{class:ue(["text-sm font-semibold",e(f)===w.value?"text-greyscale-900":"text-greyscale-500"])},K(e(o)(w.title)),3)],10,Ko))),128))],512)}}};const Jo={class:"base-time-picker"},Qo={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(c){const s=c,l=Ae(s,"modelValue"),{t:o}=G();return(f,a)=>{var r;const t=po,m=ae;return k(),C("div",Jo,[n(t,{label:s.label,required:s.required},null,8,["label","required"]),n(e(mo),{modelValue:e(l),"onUpdate:modelValue":a[0]||(a[0]=q=>De(l)?l.value=q:null),"time-picker":"",range:c.range,"cancel-text":e(o)("cancel"),"select-text":e(o)("select"),placeholder:e(o)(c.placeholder),ref:"datePicker",class:ue({"input-error":((r=c.error)==null?void 0:r.$error)&&c.showNestedError})},{"input-icon":u(()=>[n(m,{icon:e(Tt),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Xo={class:"route-component flex flex-col gap-y-3"},Zo={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},el={class:"flex items-center justify-between"},tl={class:"flex items-center gap-x-4"},ol={class:"text-base text-primary-900 font-semibold mb-1"},ll={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},nl={class:"text-xs text-greyscale-900 font-medium"},rl=["onClick"],al=["onClick"],sl={class:"text-sm text-primary-500 font-semibold"},il={class:"flex items-center justify-between mt-10"},dl={class:"flex items-center gap-x-1"},cl={__name:"Route",props:{formType:{type:String,default:L}},emits:["emit:onValidateAndSend"],setup(c,{expose:s,emit:l}){const{t:o}=G(),f=te(),a=ee(),t=je(),m=Le();Q(),ce();const r=Y(t.booking_model_rules,t.booking_model);j(!1);const q=j(!1),U=se(()=>{const b=new Set;return t.model.__groups.reduce((d,i)=>i.__users&&Array.isArray(i.__users)?d.concat(i.__users):d,[]).filter(d=>b.has(d.id)?!1:(b.add(d.id),!0))}),E=b=>{t.routeTabItems.forEach(d=>d.active=d.id===b.id)},w=(b,d)=>{t.routeTypeTabItems.forEach(i=>i.active=i.id===b.id),t.actionChangeRouteSegment(b.value,d)},S=async b=>{const d=await r.value.$validate();if(q.value=!0,!d){D(null,o("fill-required-fields"),T.WARNING);return}await t.actionStepClick(a,f,b)},R=()=>{t.actionAddRouteRow(),q.value=!1},N=(b,d,i,g)=>{g.type===re&&(t.booking_model.bookings[d].segments[i+1].arrival_city=b)},V=(b,d,i,g)=>{g.type===re&&(t.booking_model.bookings[d].segments[i+1].departure_city=b)},p=()=>{S(We),l("emit:onValidateAndSend")};return s({stepClick:S}),(b,d)=>{const i=He,g=ne,_=Fe,x=le,A=Re;return k(),C("div",Xo,[(k(!0),C(Z,null,Se(e(t).booking_model.bookings,(O,$)=>(k(),C("div",Zo,[P("div",el,[P("div",tl,[P("span",ol,K(e(o)("route"))+"-"+K($+1),1),n(gt,{modelValue:O.route,"onUpdate:modelValue":y=>O.route=y,items:e(t).routeTabItems,"onEmit:onChange":d[0]||(d[0]=y=>E(y))},null,8,["modelValue","onUpdate:modelValue","items"]),n(gt,{modelValue:O.type,"onUpdate:modelValue":y=>O.type=y,items:e(t).routeTypeTabItems,"onEmit:onChange":y=>w(y,$)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),$!==0?(k(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:d[1]||(d[1]=(...y)=>e(t).actionDeleteRouteRow&&e(t).actionDeleteRouteRow(...y))},[n(ae,{icon:e(Be),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):xe("",!0)]),P("div",ll,[n(ae,{icon:e(Dt),class:"text-warning-500"},null,8,["icon"]),P("span",nl,K(e(o)("route-warning")),1)]),(k(!0),C(Z,null,Se(O.segments,(y,H)=>(k(),C("div",null,[n(x,null,{default:u(()=>[n(g,{"col-class":"w-1/5"},{default:u(()=>[n(i,{modelValue:y.departure_city,"onUpdate:modelValue":M=>y.departure_city=M,error:e(r).bookings.$each.$response.$data[$].segments.$each.$data[H].departure_city,options:e(m).regionsList,"onUpdate:options":d[2]||(d[2]=M=>e(m).regionsList=M),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:O.type===e(re)&&H%2!==0,"onEmit:change":M=>N(M,$,H,O)},{option:u(({option:M})=>[n(e(Ee),{title:M.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),n(g,{"col-class":"w-1/5"},{default:u(()=>[n(i,{modelValue:y.arrival_city,"onUpdate:modelValue":M=>y.arrival_city=M,error:e(r).bookings.$each.$response.$data[$].segments.$each.$data[H].arrival_city,options:e(m).regionsList,"onUpdate:options":d[3]||(d[3]=M=>e(m).regionsList=M),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:O.type===e(re)&&H%2!==0,"onEmit:change":M=>V(M,$,H,O)},{option:u(({option:M})=>[n(e(Ee),{title:M.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),n(g,{"col-class":"w-1/5"},{default:u(()=>[n(i,{modelValue:y.segment_class,"onUpdate:modelValue":M=>y.segment_class=M,error:e(r).bookings.$each.$response.$data[$].segments.$each.$data[H].segment_class,options:O.route===e(kt)?e(oo):O.route===e(Te)?e(lo):e(no),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":q.value,translatable:""},{option:u(({option:M})=>[n(e(Ee),{title:M.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error"])]),_:2},1024),n(g,{"col-class":"w-1/5"},{default:u(()=>[n(_,{modelValue:y.date,"onUpdate:modelValue":[M=>y.date=M,M=>y.date=e(de)(M)],error:e(r).bookings.$each.$response.$data[$].segments.$each.$data[H].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),n(g,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:u(()=>[n(Qo,{modelValue:y.time,"onUpdate:modelValue":M=>y.time=M,error:e(r).bookings.$each.$response.$data[$].segments.$each.$data[H].time,label:"time",required:"",range:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),O.type===e(Qe)&&H!==0?(k(),C("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:M=>e(t).actionDeleteRouteLine($,H)},[n(ae,{icon:e(Be),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,rl)):xe("",!0)]),_:2},1024)]),_:2},1024)]))),256)),O.type===e(Qe)?(k(),C("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:y=>e(t).actionAddRouteLine($)},[n(ae,{icon:e(Ge),class:"text-primary-500"},null,8,["icon"]),P("span",sl,K(e(o)("add-line")),1)],8,al)):xe("",!0),n(x,null,{default:u(()=>[n(g,{"col-class":"w-full"},{default:u(()=>[n(F,{modelValue:O.passengers,"onUpdate:modelValue":y=>O.passengers=y,options:U.value,error:e(r).bookings.$each.$response.$data[$].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),n(A,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Ge),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:R},null,8,["icon-left"]),P("div",il,[n(A,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),P("div",dl,[n(A,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:d[4]||(d[4]=O=>S(e(Ye)))}),n(A,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(t).buttonLoading,onClick:p},null,8,["loading"])])])])}}},ul={class:"decree-component"},pl={class:"flex items-center justify-between mt-10"},ml={class:"flex items-center gap-x-1"},_l={__name:"Decree",props:{formType:{type:String,default:L}},setup(c,{expose:s}){const l=c,o=te(),f=ee(),a=je(),t=Y(a.decreeRules,a.decreeModel),{t:m}=G(),r=Q(),q=ce(),U=j(!1),E=async p=>{await a.actionStepClick(f,o,p)},w=p=>{a.decreeModel.__files=[],p.forEach(b=>{a.decreeModel.__files.push(b)})},S=async()=>{var b,d,i,g;if(!await t.value.$validate()){D(null,m("fill-required-fields"),T.WARNING);return}a.decreeModel.approvers=[],a.decreeModel.signers=[],a.decreeModel.curator=(d=(b=a.model)==null?void 0:b.__curator)==null?void 0:d.user_id,a.decreeModel.journal=X.ORDERS_PROTOCOLS,a.decreeModel.company=r.currentUser.company.id,a.decreeModel.sender=(g=(i=r==null?void 0:r.currentUser)==null?void 0:i.top_level_department)==null?void 0:g.id,a.decreeModel.document_type=B.DECREE,a.decreeModel.document_sub_type=W.BUSINESS_TRIP_DECREE_V2,a.decreeModel.short_description=a.model.short_description,U.value=!0},R=async(p,b)=>{let d={...a.decreeModel,trip_notice_id:p};await a.actionCreateDocument(d)?(U.value=!1,D(null,m("document-sent"),T.SUCCESS),await f.replace({name:he,query:{document_type:o.query.document_type}})):D(null,m("error-occurred"),T.ERROR)},N=async(p,b)=>{try{await a.actionUpdateDocument({id:b,body:{...a.decreeModel,trip_notice_id:p}}),await q.actionCountList(),D(null,m("changed"),T.SUCCESS),await f.replace({name:ve,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})}catch{}},V=()=>{var b;let p=null;l.formType===L&&o.query.notice_id?p=o.query.notice_id:l.formType===Me&&o.params.id&&(p=o.params.id),l.formType===L?R(p):N(p,(b=a.decreeModel)==null?void 0:b.id)};return s({stepClick:E}),(p,b)=>{const d=Re;return k(),C("div",ul,[n(ke,{modelValue:e(t).content.$model,"onUpdate:modelValue":b[0]||(b[0]=i=>e(t).content.$model=i),error:e(t).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).decreeModel.__files,"onEmit:fileUpload":w},null,8,["modelValue","error","files"]),P("div",pl,[n(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),P("div",ml,[n(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:b[1]||(b[1]=i=>E(e(Pe)))}),n(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:S})])]),n(Ve,{modelValue:U.value,"onUpdate:modelValue":b[2]||(b[2]=i=>U.value=i),"send-button-loading":e(a).buttonLoading,"onEmit:send":V,"content-classes":"p-0"},{content:u(()=>[n(e(Ht),{"compose-model":{...e(a).model,bookings:e(a).booking_model.bookings,trip_plans:e(a).trip_plan_model.trip_plans,decree_content:e(a).decreeModel.content},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},ql={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},fl={class:"px-6 py-4"},bn={__name:"BusinessTripForm",props:{formType:{type:String,default:L}},setup(c){const s=c,{t:l}=G(),o=te(),f=ee(),a=Q(),t=je();Y(t.rules,t.model),Y(t.trip_plan_rules,t.trip_plan_model),Y(t.booking_model_rules,t.booking_model),Y(t.decreeRules,t.decreeModel);const m=j(null),r=se(()=>s.formType===L?"create-business-trip-notice":"update-business-trip-notice"),q=se(()=>{switch(o.query.step){case Pe:return bt;case We:return _l;case Ye:return Ho;case Xe:return cl;default:return bt}}),U=async R=>{var V;const N=e(m);((V=o.query)==null?void 0:V.step)!==R.value&&(await N.stepClick(R.value),R.value===We&&(await w(),await D(null,l("notice-saved-successfully"),T.SUCCESS)))},E=async()=>{o.query.step||await f.replace({query:{...o.query,step:Pe}}),t.stepperItems.forEach(R=>R.active=R.value===o.query.step)},w=async()=>{var V,p,b,d,i,g;const R=J(t.model.__approvers),N=J(t.model.__signers);if(t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.bookings=[],t.model.trip_plans=[],t.model.approvers=R,t.model.signers=N,t.model.curator=(p=(V=t.model)==null?void 0:V.__curator)==null?void 0:p.user_id,t.model.journal=X.INNER,t.model.company=(d=(b=a.currentUser)==null?void 0:b.company)==null?void 0:d.id,t.model.__groups.forEach((_,x)=>{const A=x+1;t.model.notices.push(..._.__users.map(O=>({start_date:_.__start_date,end_date:_.__end_date,user:O.id,regions:_.__regions.map($=>$.id),tags:_.__tags.map($=>({id:$.id})),group_id:A})))}),t.model.sender=(g=(i=a==null?void 0:a.currentUser)==null?void 0:i.top_level_department)==null?void 0:g.id,t.model.files=t.model.__files.map(_=>({id:_.id})),t.model.document_type=o.params.document_type,t.model.document_sub_type=o.params.document_sub_type,t.model.bookings=t.booking_model.bookings.map(_=>({..._,segments:_.segments.map(x=>({departure_city:x.departure_city.id,arrival_city:x.arrival_city.id,departure_date:mt(x.date,x.time,0),departure_end_date:mt(x.date,x.time,1),segment_class:x.segment_class.value})),passengers:_.passengers.map(x=>({user:x.id}))})),t.model.trip_plans=t.trip_plan_model.trip_plans.map(_=>({users:_.users.map(x=>({id:x.id})),text:_.text})),s.formType===L&&o.query.notice_id)try{await t.actionUpdateDocument({id:o.query.notice_id,body:t.model})}catch{}else if(s.formType===L)try{const{data:_}=await t.actionCreateDocument(t.model);await f.replace({query:{...o.query,notice_id:_.id}})}catch{}else if(s.formType===Me&&o.params.id)try{await t.actionUpdateDocument({id:o.params.id,body:t.model})}catch{}},S=async()=>{try{await w(),await D(null,l("notice-saved-successfully"),T.SUCCESS)}catch{}};return Ie(async()=>{await E(),s.formType===Me?await t.actionGetDocumentDetailForUpdate(o.params.id):o.query.notice_id&&await t.actionGetDocumentDetailForUpdate(o.query.notice_id)}),qe(()=>{t.actionResetBTModel()}),(R,N)=>{const V=fe,p=Lo;return k(),C("div",{class:ue(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(t).detailLoading}])},[e(t).detailLoading?(k(),z(V,{key:0})):(k(),z(e(be),{key:1,title:r.value},{content:u(()=>[P("div",ql,[n(p,{items:e(t).stepperItems,"onEmit:stepClick":U},null,8,["items"])]),P("div",fl,[(k(),z(Ot(q.value),{"form-type":c.formType,ref_key:"childComponent",ref:m,"onEmit:onValidateAndSend":S},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}};export{cn as _,mn as a,_n as b,qn as c,bn as d,un as e,pn as f,fn as g};
