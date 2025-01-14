import{_ as re}from"./BaseRow-189158bd.js";import{_ as Re}from"./BaseInput-da699499.js";import{_ as ae}from"./BaseCol-caf70ee0.js";import{v as j,b$ as Ne,a6 as Ie,o as v,c as S,i as n,z as p,h as e,bc as Oe,B as $t,d6 as Ut,cU as Et,f as B,a as P,n as pe,r as wt,G as Le,aD as qe,c4 as W,c5 as H,bR as Z,u as Y,t as J,b as te,az as oe,cw as fe,F as ee,aa as T,an as be,d0 as Pe,d as ie,aF as yt,cp as Fe,a8 as Je,d7 as Ct,e as Se,g as $e,_ as se,d8 as St,d9 as dt,da as Rt,db as ct,dc as ut,dd as pt,bb as ht,cW as Ge,bw as We,Y as Lt,de as Tt,c_ as Dt,E as Ot}from"./index-c241942c.js";import{c as y,r as h,u as K}from"./index-81b27718.js";import{_ as Pt,a as Mt}from"./BranchMultiSelect-3f02f6bd.js";import{_ as ge,a as At,i as Nt,f as It,g as Ft,b as jt,c as zt,d as Bt,e as Gt,j as Wt,k as Yt,h as Ht,l as mt}from"./BasePOA-fb0987e7.js";import"./BaseTabMenu-2fce4744.js";import"./dialog.esm-6e771f27.js";import"./tabpanel.esm-a1eac5f1.js";import{s as de,S as I,V as Kt,W as Ue,X as Q,Y as me,Z as _t,_ as Qe,$ as Be,K as qt}from"./index-c83f3e49.js";import"./BaseTabView-6b3f9265.js";import"./FileTabs-c6ae102d.js";import{_ as F}from"./UserMultiSelect-a6c2ae39.js";import{c as Jt,u as X,w as we,d as D}from"./axios.config-591cea0b.js";import{u as Te}from"./common-d4c97edc.js";import{u as ue}from"./count.store-89b5320f.js";import{a as ye,b as ne,c as he,u as vt,d as Qt,f as Xt}from"./index.store-d9c58ef3.js";import{j as ft,k as ve,i as ke,c as le,b as De,l as Me,m as He,n as Ze,o as Ye,a as Zt,B as kt,M as Xe,O as eo,T as to,C as oo,P as lo,p as no}from"./index-bd76a17d.js";import{F as L,b as Ae}from"./constants-33601b85.js";import{_ as Ke}from"./BaseDropdown-e9b8f986.js";import{_ as je}from"./BaseCalendar-70ff0ae2.js";import{_ as Vt}from"./WithLabel-ed79a652.js";import{a as ce}from"./formatDate-3219c635.js";import"./qrcode.vue.esm-d2bacc3a.js";import{_ as ro}from"./ShortDescription-a4eaa14a.js";import"./dayjs.min-0a9d7b33.js";/* empty css                                                                               */import{c as ao}from"./Dropdown-82ac5ebe.js";import"./menu.esm-7dec9152.js";/* empty css                                                 */import"./avatar.esm-820671c3.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-b32e78f1.js";import"./common.store-9d593af0.js";import{_ as Ce}from"./WithRadio-ca71c31d.js";import"./radiobutton.esm-3bd57bf6.js";import"./checkbox.esm-4b02ff07.js";import{_ as so}from"./WithSelectable-b52cbf90.js";import{_ as io}from"./BaseBrickTab-212257a1.js";import{_ as co}from"./BaseFileUpload-9ae470bb.js";import{_ as uo}from"./BaseFroalaEditor-4609963f.js";import{_ as po}from"./BaseLabel-6f044878.js";import{K as mo}from"./main-2de21e7b.js";import{_ as _o}from"./BaseDialog-59e12659.js";const qo={class:"user-select"},_e={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(c,{emit:i}){const l=c,o=j([]),b=Ne(l,"modelValue"),s=async t=>{let{data:_}=await Jt.get(`${l.apiUrl}/`,t);_.hasOwnProperty("results")?o.value=_.results:o.value=_};return Ie(async()=>{await s(l.apiParams)}),(t,_)=>(v(),S("div",qo,[n(Ke,{modelValue:e(b),"onUpdate:modelValue":_[0]||(_[0]=r=>Oe(b)?b.value=r:null),options:o.value,"onUpdate:options":_[1]||(_[1]=r=>o.value=r),error:l.error,"api-url":l.apiUrl,"api-params":l.apiParams,"option-label":"full_name",label:l.label,placeholder:l.placeholder,required:l.required,searchable:"","onEmit:change":_[2]||(_[2]=r=>i("emit:change",r))},{option:p(({option:r})=>[n(e(so),{items:[r]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var fo=`
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
`,bo={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};$t.extend({name:"editor",css:fo,classes:bo});(function(){try{return window.Quill}catch{return null}})();const Ve={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(c){return["froala","tiny"].includes(c)}}},emits:["update:modelValue","emit:fileUpload"],setup(c,{emit:i}){const l=c,o=Ne(l,"modelValue"),b=j([{title:"text",slot:"editor",icon:Ut},{title:"file",slot:"file",icon:Et}]);return(s,t)=>(v(),B(io,{"tab-panel-list":b.value,"panel-container-class":"px-0"},{editor:p(()=>[c.editor==="froala"?(v(),B(uo,{key:0,modelValue:e(o),"onUpdate:modelValue":t[0]||(t[0]=_=>Oe(o)?o.value=_:null)},null,8,["modelValue"])):(v(),B(ao,{key:1,modelValue:e(o),"onUpdate:modelValue":t[1]||(t[1]=_=>Oe(o)?o.value=_:null)},null,8,["modelValue"]))]),file:p(()=>[P("div",{class:pe(l.fileUploadContainerClasses)},[n(co,{files:l.files,"onEmit:fileUpload":t[2]||(t[2]=_=>i("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},go={class:"flex flex-col justify-between h-full"},wo={class:"px-6 py-4 overflow-y-auto"},yo={class:"actions p-6"},Ee={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(c,{emit:i}){return(l,o)=>{const b=Le;return v(),S("div",go,[P("div",wo,[wt(l.$slots,"default")]),P("div",yo,[n(b,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:o[0]||(o[0]=s=>i("emit:clearForm"))}),n(b,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:o[1]||(o[1]=s=>i("emit:preview"))})])])}}},ho=qe("sd-stores-inner",{state:()=>{var c,i;return{buttonLoading:!1,detailLoading:!1,model:{company:(i=(c=X().currentUser)==null?void 0:c.company)==null?void 0:i.id,content:null,document_type:W.INNER,document_sub_type:H.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:Z.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__departments:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{},__signers:{required:y.withMessage("Поле не должен быть пустым",h)}}}},actions:{async actionCreateDocument(c){let i={...c,type:ft,sub_type:ft};this.buttonLoading=!0;const{response:l,error:o}=await we(he,i);return l?(this.buttonLoading=!1,Promise.resolve(l)):Promise.reject(o)},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:l}=await ye({id:c,body:i});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await ne(c);de(this.model,i),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers),this.model.__departments=await Kt(i.receiver.departments),this.model.__files=i.files}catch{}finally{this.detailLoading=!1}}}}),vo={class:"font-semibold text-xl"},xe={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(c,{emit:i}){const o=Ne(c,"modelValue"),{t:b}=Y();return(s,t)=>{const _=Le,r=_o;return v(),B(r,{modelValue:e(o),"onUpdate:modelValue":t[1]||(t[1]=q=>Oe(o)?o.value=q:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:p(()=>[P("span",vo,J(e(b)("preview")),1)]),content:p(()=>[wt(s.$slots,"content")]),footer:p(()=>[n(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),n(_,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:c.sendButtonLoading,onClick:t[0]||(t[0]=q=>i("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},cn={__name:"InnerForm",props:{formType:{type:String,default:L}},setup(c){const i=c,l=X(),o=ho();Te();const b=ue(),s=j(!1);j(null);const{t}=Y(),_=te(),r=oe(),q=K(o.rules,o.model),U=async()=>{await q.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.departments=[],o.model.departments=o.model.__departments.map(m=>m.id),o.model.files=[],o.model.files=o.model.__files.map(m=>({id:m.id})),o.model.journal=Z.INNER,o.model.sender=l.currentUser.top_level_department.id,o.model.approvers=Q(o.model.__approvers),o.model.signers=Q(o.model.__signers),o.model.document_type=r.params.document_type,o.model.document_sub_type=r.params.document_sub_type)},E=()=>{i.formType===L?g():C()},g=async()=>{const V=await o.actionCreateDocument(o.model);await b.actionCountList(),V?(s.value=!1,D(null,t("document-sent"),T.SUCCESS),await _.replace({name:ve,query:{document_type:W.INNER}})):D(null,t("error-occurred"),T.ERROR)},C=async()=>{await o.actionUpdateDocument({id:r.params.id,body:o.model}),await b.actionCountList(),D(null,t("document-sent"),T.SUCCESS),await _.replace({name:ke,params:{id:r.params.id,document_type:W.INNER,document_sub_type:H.SERVICE_LETTER}})},R=()=>{console.log("Clear Form")},M=V=>{o.model.__files=[],V.forEach(m=>{o.model.__files.push(m)})};return Ie(async()=>{r.params.id&&await o.actionGetDocumentDetailForUpdate(r.params.id)}),fe(()=>{Ue(o.model)}),(V,m)=>{const w=be,d=ae,a=Re,f=re;return e(o).detailLoading?(v(),B(w,{key:0})):(v(),S(ee,{key:1},[n(e(ge),{title:i.formType===e(L)?"create-sd-inner":"update-sd-inner"},{content:p(()=>[n(Ee,{"onEmit:preview":U,"onEmit:clearForm":R},{default:p(()=>[n(f,null,{default:p(()=>[n(d,{"col-class":"w-1/2"},{default:p(()=>[n(Pt,{modelValue:e(q).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=u=>e(q).__departments.$model=u),error:e(q).__departments},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(a,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=u=>e(q).short_description.$model=u),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=u=>e(q).__approvers.$model=u),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=u=>e(q).__signers.$model=u),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-full"},{default:p(()=>[n(Ve,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=u=>e(q).content.$model=u),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(xe,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=u=>s.value=u),"send-button-loading":e(o).buttonLoading,"onEmit:send":E},{content:p(()=>{var u,$;return[n(At,{"compose-model":{...e(o).model,signers:e(o).model.__signers,approvers:e(o).model.__approvers,author:e(o).model.__signers[0],sender:{name:($=(u=e(l).currentUser)==null?void 0:u.top_level_department)==null?void 0:$.name},receiver:{departments:e(o).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},ko=qe("sd-store-application",{state:()=>{var c,i;return{buttonLoading:!1,detailLoading:!1,model:{company:(i=(c=X().currentUser)==null?void 0:c.company)==null?void 0:i.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{}}}},actions:{async actionCreateDocument(c){let i={...c};this.buttonLoading=!0;const{response:l,error:o}=await we(he,i);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:l}=await ye({id:c,body:i});return Promise.resolve(l)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await ne(c);de(this.model,i),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers.filter(l=>l.type===Pe.SIGNER)),this.model.__curator=await me([],i.curator.id,!1),this.model.__files=i.files}catch{}finally{this.detailLoading=!1}}}}),xt=qe("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:X().currentUser.company.id,curator:null,document_type:W.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:Z.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:y.withMessage("Поле не должен быть пустым",h)},register_date:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__negotiators:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:l}=await we(he,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:l}=await ye({id:c,body:i});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await ne(c);de(this.model,i),this.model.__signers=await I(i.signers.filter(l=>l.type!==Pe.NEGOTIATOR)),this.model.__negotiators=await I(i.signers.filter(l=>l.type===Pe.NEGOTIATOR)),this.model.__approvers=await I(i.approvers),this.model.__curator=await me([],i.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),un={__name:"ApplicationForm",props:{formType:{type:String,default:L}},setup(c){const i=c,l=X(),o=ko();Te();const b=ue();xt();const s=j(!1);j(null);const{t}=Y(),_=te(),r=oe(),q=K(o.rules,o.model),U=async()=>{var m,w,d,a,f;await q.value.$validate()&&(s.value=!0,o.model.approvers=[],o.model.signers=[],o.model.signers=[{user:(m=l==null?void 0:l.currentUser)==null?void 0:m.id}],o.model.sender=(d=(w=l==null?void 0:l.currentUser)==null?void 0:w.top_level_department)==null?void 0:d.id,o.model.curator=(f=(a=o==null?void 0:o.model)==null?void 0:a.__curator)==null?void 0:f.user_id,o.model.journal=Z.APPLICATION,o.model.document_type=r.params.document_type,o.model.document_sub_type=r.params.document_sub_type,o.model.approvers=Q(o.model.__approvers))},E=async()=>{},g=()=>{i.formType===L?C():R()},C=async()=>{const V=await o.actionCreateDocument(o.model);await b.actionCountList(),V?(s.value=!1,D(null,t("document-sent"),T.SUCCESS),await _.replace({name:ve,query:{document_type:W.APPLICATION}})):D(null,t("error-occurred"),T.ERROR)},R=async()=>{await o.actionUpdateDocument({id:r.params.id,body:o.model}),await b.actionCountList(),D(null,t("document-sent"),T.SUCCESS),await _.replace({name:ke,params:{id:r.params.id,document_type:W.APPLICATION,document_sub_type:H.LABOR_LEAVE}})},M=V=>{o.model.__files=[],V.forEach(m=>{o.model.__files.push(m)})};return Ie(async()=>{r.params.id&&await o.actionGetDocumentDetailForUpdate(r.params.id)}),fe(()=>{Ue(o.model)}),(V,m)=>{const w=be,d=ae,a=re;return e(o).detailLoading?(v(),B(w,{key:0})):(v(),S(ee,{key:1},[n(e(ge),{title:i.formType===e(L)?"create-sd-application":"update-sd-application"},{content:p(()=>[n(Ee,{"onEmit:preview":U,"onEmit:clearForm":E},{default:p(()=>[n(a,null,{default:p(()=>[n(d,{"col-class":"w-1/2"},{default:p(()=>[n(_e,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(q).__curator.$model=f),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(r).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(q).__approvers.$model=f),error:e(q).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[2]||(m[2]=f=>e(q).__signers.$model=f),disabled:"",label:"signers",placeholder:e(l).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),n(d,{"col-class":"w-full"},{default:p(()=>[n(Ve,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(q).content.$model=f),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(xe,{modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=f=>s.value=f),"send-button-loading":e(o).buttonLoading,"onEmit:send":g},{content:p(()=>[n(Nt,{"compose-model":{...e(o).model,curator:e(o).model.__curator,author:i.formType===e(L)?e(l).currentUser:e(o).model.__signers[0].user,signers:i.formType===e(L)?[e(l).currentUser]:e(o).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Vo=qe("sd-notice-store",{state:()=>(X(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:W.NOTICE,document_sub_type:H.BUSINESS_TRIP,journal:Z.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",h)},start_date:{required:y.withMessage("Поле не должен быть пустым",h)},route:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__companies:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__employees:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},__tags:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:l}=await we(he,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:l}=await ye({id:c,body:i});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c,i=!1){try{this.detailLoading=!0;const{data:l}=await ne(c);de(this.model,l),this.model.__companies=[],this.model.__curator=await me([],l.curator.id,!1),this.model.__employees=await I(l.notices),i?(this.model.__approvers=await I(l.approvers.filter(o=>{var b,s;return((b=o==null?void 0:o.user)==null?void 0:b.id)!==((s=l==null?void 0:l.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await I(l.approvers),this.model.__signers=await I(l.signers),this.model.__companies=await _t(l.notices[0].destinations),this.model.__tags=await Qe(l.tags),this.model.start_date=l.notices[0].start_date,this.model.end_date=l.notices[0].end_date,this.model.__tags=l.tags,this.model.route=l.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(c,i){try{this.detailLoading=!0;const{data:l}=await ne(c),o=await ne(i);de(this.model,l),this.model.__companies=[],this.model.__curator=await me([],l.curator.id,!1),this.model.__employees=await I(o.data.notices),this.model.__approvers=await I(l.approvers),this.model.__signers=await I(l.signers),this.model.__companies=await _t(o.data.notices[0].destinations),this.model.__tags=await Qe(l.tags),this.model.start_date=o.data.notices[0].start_date,this.model.end_date=o.data.notices[0].end_date,this.model.__tags=l.tags,this.model.route=o.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),xo={class:"flex w-full gap-x-4"},pn={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:L}},setup(c){const i=c,{t:l}=Y(),o=oe(),b=te(),s=X(),t=Vo(),_=ue();Te();const r=K(t.rules,t.model),q=j(!1),U=ie(()=>{const d=i.formType===L,a=o.params.document_sub_type;return a===H.BUSINESS_TRIP_DECREE_LOCAL?d?"create-decree":"update-decree":a===H.BUSINESS_TRIP_ORDER_LOCAL?d?"create-order":"update-order":d?"create-business-trip-notice":"update-business-trip-notice"}),E=ie(()=>{var d,a;return o.params.document_sub_type===H.BUSINESS_TRIP_DECREE_LOCAL&&((d=o==null?void 0:o.query)==null?void 0:d.compose_id)&&((a=o==null?void 0:o.query)==null?void 0:a.document_sub_type)===H.BUSINESS_TRIP}),g=ie(()=>{var d;return!!(o.params.document_sub_type===H.BUSINESS_TRIP_DECREE_LOCAL&&((d=t==null?void 0:t.model)!=null&&d.trip_notice_id))});yt(()=>t.model.__tags,d=>{if(i.formType===L)if(d&&d.length){let a=`${d.map(f=>f.name_uz).join(", ")} yuzasidan`;t.model.short_description=a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()}else t.model.short_description=null});const C=async()=>{var a,f,u,$,N;await r.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.approvers=Q(t.model.__approvers),t.model.signers=Q(t.model.__signers),t.model.curator=(f=(a=t==null?void 0:t.model)==null?void 0:a.__curator)==null?void 0:f.user_id,t.model.journal=o.params.document_type===W.DECREE||o.params.document_type===W.ORDER?Z.ORDERS_PROTOCOLS:Z.INNER,t.model.company=s.currentUser.company.id,t.model.notices=t.model.__employees.map(z=>({start_date:t.model.start_date,end_date:t.model.end_date,user:z.id,route:t.model.route,companies:t.model.__companies.map(k=>k.id)})),t.model.sender=($=(u=s==null?void 0:s.currentUser)==null?void 0:u.top_level_department)==null?void 0:$.id,t.model.tags=t.model.__tags.map(z=>({id:z.id})),t.model.files=t.model.__files.map(z=>({id:z.id})),t.model.document_type=o.params.document_type,t.model.document_sub_type=o.params.document_sub_type,E.value&&(t.model.trip_notice_id=(N=o==null?void 0:o.query)==null?void 0:N.compose_id),q.value=!0)},R=()=>{},M=d=>{t.model.__files=[],d.forEach(a=>{t.model.__files.push(a)})},V=async()=>{E.value&&(t.model.notices=[]);const d=await t.actionCreateDocument(t.model);await _.actionCountList(),d?(q.value=!1,D(null,l("document-sent"),T.SUCCESS),await b.replace({name:ve,query:{document_type:o.params.document_sub_type===H.BUSINESS_TRIP_DECREE_LOCAL?W.DECREE:o.params.document_sub_type===H.BUSINESS_TRIP_ORDER_LOCAL?W.ORDER:W.NOTICE}})):D(null,l("error-occurred"),T.ERROR)},m=async()=>{(E.value||g.value)&&(t.model.notices=[]),await t.actionUpdateDocument({id:o.params.id,body:t.model}),await _.actionCountList(),D(null,l("changed"),T.SUCCESS),await b.replace({name:ke,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},w=()=>{i.formType===L?V():m()};return Fe(async()=>{o.params.id&&o.query.trip_notice_id&&o.params.document_sub_type===H.BUSINESS_TRIP_DECREE_LOCAL?await t.actionGetDocumentDetailForUpdateForCustomUse(o.params.id,o.query.trip_notice_id):o.params.id?await t.actionGetDocumentDetailForUpdate(o.params.id):E.value&&await t.actionGetDocumentDetailForUpdate(o.query.compose_id,!0)}),fe(()=>{Ue(t.model)}),(d,a)=>{const f=be,u=ae,$=je,N=Ke,z=Re,k=re;return e(t).detailLoading?(v(),B(f,{key:0})):(v(),S(ee,{key:1},[n(e(ge),{title:U.value},{content:p(()=>[n(Ee,{"onEmit:preview":C,"onEmit:clearForm":R},{default:p(()=>[n(k,null,{default:p(()=>[n(u,{"col-class":"w-1/2"},{default:p(()=>[n(_e,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":a[0]||(a[0]=x=>e(r).__curator.$model=x),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(r).__employees.$model,"onUpdate:modelValue":a[1]||(a[1]=x=>e(r).__employees.$model=x),error:e(r).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:E.value||g.value},null,8,["modelValue","error","disabled"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n(Mt,{modelValue:e(r).__companies.$model,"onUpdate:modelValue":a[2]||(a[2]=x=>e(r).__companies.$model=x),error:e(r).__companies,"text-truncate":"",disabled:E.value||g.value},null,8,["modelValue","error","disabled"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n(Vt,{modelValue:e(r).__tags.$model,"onUpdate:modelValue":a[3]||(a[3]=x=>e(r).__tags.$model=x),error:e(r).__tags,"api-url":"tags","api-params":{document_sub_type:e(o).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:p(({value:x})=>[Je(J(x.name),1)]),option:p(({value:x})=>[n(e(Ce),{title:x.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[P("div",xo,[n($,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[a[4]||(a[4]=x=>e(r).start_date.$model=x),a[5]||(a[5]=x=>e(r).start_date.$model=e(ce)(x))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:E.value||g.value},null,8,["modelValue","error","min-date","disabled"]),n($,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[a[6]||(a[6]=x=>e(r).end_date.$model=x),a[7]||(a[7]=x=>e(r).end_date.$model=e(ce)(x))],error:e(r).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:E.value||g.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n(N,{modelValue:e(r).route.$model,"onUpdate:modelValue":a[8]||(a[8]=x=>e(r).route.$model=x),error:e(r).route,options:e(Ct),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:E.value||g.value},null,8,["modelValue","error","options","disabled"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":a[9]||(a[9]=x=>e(t).model.__approvers=x),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":a[10]||(a[10]=x=>e(r).__signers.$model=x),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n(z,{modelValue:e(r).short_description.$model,"onUpdate:modelValue":a[11]||(a[11]=x=>e(r).short_description.$model=x),error:e(r).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-full"},{default:p(()=>[n(Ve,{modelValue:e(r).content.$model,"onUpdate:modelValue":a[12]||(a[12]=x=>e(r).content.$model=x),error:e(r).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(xe,{modelValue:q.value,"onUpdate:modelValue":a[13]||(a[13]=x=>q.value=x),"send-button-loading":e(t).buttonLoading,"onEmit:send":w},{content:p(()=>[e(o).params.document_sub_type===e(H).BUSINESS_TRIP_DECREE_LOCAL?(v(),B(e(It),{key:0,"compose-model":e(t).model,preview:!0},null,8,["compose-model"])):e(o).params.document_sub_type===e(H).BUSINESS_TRIP_ORDER_LOCAL?(v(),B(e(Ft),{key:1,"compose-model":e(t).model,preview:!0},null,8,["compose-model"])):(v(),B(e(jt),{key:2,"compose-model":e(t).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},mn={__name:"OrderForm",props:{formType:{type:String,default:L}},setup(c){const i=c,l=xt(),o=ue(),b=X(),s=oe(),t=te(),_=K(l.rules,l.model),{t:r}=Y(),q=j(!1),U=async()=>{var m,w,d,a;await _.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=Q(l.model.__approvers),l.model.curator=(w=(m=l==null?void 0:l.model)==null?void 0:m.__curator)==null?void 0:w.user_id,l.model.sender=(a=(d=b==null?void 0:b.currentUser)==null?void 0:d.top_level_department)==null?void 0:a.id,l.model.files=l.model.__files.map(f=>({id:f.id})),l.model.document_type=s.params.document_type,l.model.document_sub_type=s.params.document_sub_type,l.model.journal=Z.ORDERS_PROTOCOLS,l.model.register_date=ce(l.model.register_date),l.model.__negotiators.forEach(f=>{l.model.signers.push(f.hasOwnProperty("user")?{id:f.id,user:f.user.id,type:Pe.NEGOTIATOR}:{user:f.id,type:Pe.NEGOTIATOR})}),s.query.compose_id&&(l.model.trip_notice_id=s.query.compose_id),q.value=!0)},E=()=>{},g=async()=>{try{const V=await l.actionCreateDocument(l.model);await o.actionCountList(),V&&(q.value=!1,D(null,r("document-sent"),T.SUCCESS),await t.replace({name:ve,query:{document_type:W.ORDER}}))}catch{D(null,r("error-occurred"),T.ERROR)}},C=async()=>{try{const V=await l.actionUpdateDocument({id:s.params.id,body:l.model});await o.actionCountList(),D(null,r("changed"),T.SUCCESS),await t.replace({name:ke,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{D(null,r("error-occurred"),T.ERROR)}},R=()=>{i.formType===L?g():C()},M=V=>{l.model.__files=[],V.forEach(m=>{l.model.__files.push(m)})};return Ie(async()=>{s.params.id&&await l.actionGetDocumentDetailForUpdate(s.params.id)}),fe(()=>{Ue(l.model)}),(V,m)=>{const w=be,d=ae,a=Re,f=je,u=re;return e(l).detailLoading?(v(),B(w,{key:0})):(v(),S(ee,{key:1},[n(e(ge),{title:i.formType===e(L)?"create-order":"update-order"},{content:p(()=>[n(Ee,{"onEmit:preview":U,"onEmit:clearForm":E},{default:p(()=>[n(u,null,{default:p(()=>[n(d,{"col-class":"w-1/2"},{default:p(()=>[n(_e,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=$=>e(_).__curator.$model=$),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(a,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=$=>e(_).register_number.$model=$),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(f,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=$=>e(_).register_date.$model=$),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=$=>e(l).model.__approvers=$),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=$=>e(_).__negotiators.$model=$),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-full"},{default:p(()=>[n(Ve,{modelValue:e(_).content.$model,"onUpdate:modelValue":m[5]||(m[5]=$=>e(_).content.$model=$),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(xe,{modelValue:q.value,"onUpdate:modelValue":m[6]||(m[6]=$=>q.value=$),"send-button-loading":e(l).buttonLoading,"onEmit:send":R},{content:p(()=>[n(e(zt),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},$o=qe("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:l}=await we(he,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:l}=await ye({id:c,body:i});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await ne(c);de(this.model,i),this.model.__curator=await me([],i.curator.id,!1),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers)}catch{}finally{this.detailLoading=!1}}}}),_n={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:L}},setup(c){const i=c,{t:l}=Y(),o=oe(),b=te(),s=X(),t=$o(),_=ue();Te();const r=j(!1),q=K(t.rules,t.model),U=async()=>{var m,w,d,a;await q.value.$validate()&&(t.model.approvers=[],t.model.signers=[],t.model.approvers=Q(t.model.__approvers),t.model.signers=Q(t.model.__signers),t.model.curator=(w=(m=t==null?void 0:t.model)==null?void 0:m.__curator)==null?void 0:w.user_id,t.model.journal=Z.INNER,t.model.company=s.currentUser.company.id,t.model.sender=(a=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:a.id,t.model.files=t.model.__files.map(f=>({id:f.id})),t.model.document_type=o.params.document_type,t.model.document_sub_type=o.params.document_sub_type,r.value=!0)},E=()=>{},g=V=>{t.model.__files=[],V.forEach(m=>{t.model.__files.push(m)})},C=async()=>{const V=await t.actionCreateDocument(t.model);await _.actionCountList(),V?(r.value=!1,D(null,l("document-sent"),T.SUCCESS),await b.replace({name:ve,query:{document_type:W.NOTICE}})):D(null,l("error-occurred"),T.ERROR)},R=async()=>{await t.actionUpdateDocument({id:o.params.id,body:t.model}),await _.actionCountList(),D(null,l("changed"),T.SUCCESS),await b.replace({name:ke,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},M=()=>{i.formType===L?C():R()};return Fe(async()=>{o.params.id&&await t.actionGetDocumentDetailForUpdate(o.params.id)}),fe(()=>{Ue(t.model)}),(V,m)=>{const w=be,d=ae,a=Re,f=re;return e(t).detailLoading?(v(),B(w,{key:0})):(v(),S(ee,{key:1},[n(e(ge),{title:i.formType===e(L)?"create-notice":"update-notice"},{content:p(()=>[n(Ee,{"onEmit:preview":U,"onEmit:clearForm":E},{default:p(()=>[n(f,null,{default:p(()=>[n(d,{"col-class":"w-1/2"},{default:p(()=>[n(_e,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=u=>e(q).__curator.$model=u),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(a,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=u=>e(q).short_description.$model=u),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(t).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=u=>e(t).model.__approvers=u),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(d,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=u=>e(q).__signers.$model=u),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(d,{"col-class":"w-full"},{default:p(()=>[n(Ve,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=u=>e(q).content.$model=u),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":g},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(xe,{modelValue:r.value,"onUpdate:modelValue":m[5]||(m[5]=u=>r.value=u),"send-button-loading":e(t).buttonLoading,"onEmit:send":M},{content:p(()=>[n(e(Bt),{"compose-model":e(t).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Uo=qe("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){const i={...c};delete i.bookings,delete i.notices,delete i.trip_plans,this.buttonLoading=!0;const{response:l,error:o}=await we(he,i);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:i}){const l={...i};delete l.bookings,delete l.notices,delete l.trip_plans;try{this.buttonLoading=!0;const{data:o}=await ye({id:c,body:l});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c,i){try{this.detailLoading=!0;const{data:l}=await ne(c);de(this.model,l),this.model.__curator=await me([],l.curator.id,!1),this.model.__approvers=await I(l.approvers),this.model.__signers=await I(l.signers)}catch{}finally{this.detailLoading=!1}}}}),qn={__name:"DecreeForm",props:{formType:{type:String,default:L}},setup(c){const i=c,{t:l}=Y(),o=oe(),b=te(),s=X(),t=ue();Te();const _=j(!1),r=Uo(),q=vt(),U=K(r.rules,r.model),E=async()=>{var d,a,f,u;await U.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=Q(r.model.__approvers),r.model.signers=Q(r.model.__signers),r.model.curator=(a=(d=r==null?void 0:r.model)==null?void 0:d.__curator)==null?void 0:a.user_id,r.model.journal=Z.ORDERS_PROTOCOLS,r.model.company=s.currentUser.company.id,r.model.sender=(u=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:u.id,r.model.files=r.model.__files.map($=>({id:$.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,o.query.compose_id&&(r.model.trip_notice_id=o.query.compose_id),_.value=!0)},g=()=>{},C=w=>{r.model.__files=[],w.forEach(d=>{r.model.__files.push(d)})},R=async()=>{const w=await r.actionCreateDocument(r.model);await t.actionCountList(),w?(_.value=!1,D(null,l("document-sent"),T.SUCCESS),await b.replace({name:ve,query:{document_type:o.params.document_type}})):D(null,l("error-occurred"),T.ERROR)},M=async()=>{await r.actionUpdateDocument({id:o.params.id,body:r.model}),await t.actionCountList(),D(null,l("changed"),T.SUCCESS),await b.replace({name:ke,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},V=()=>{i.formType===L?R():M()},m=async w=>{const{data:d}=await q.actionGetDocumentDetail(w);r.model.notices=d==null?void 0:d.notices,r.model.trip_plans=d==null?void 0:d.trip_plans,r.model.bookings=d==null?void 0:d.bookings,r.model.short_description=d==null?void 0:d.short_description,r.model.trip_notice_register_number=d==null?void 0:d.register_number};return Fe(async()=>{i.formType===L&&o.query.compose_id?await m(o.query.compose_id):i.formType===Ae&&o.query.trip_notice_id&&o.params.id?(await r.actionGetDocumentDetailForUpdate(o.params.id,null),await m(o.query.trip_notice_id)):i.formType===Ae&&o.params.id&&await r.actionGetDocumentDetailForUpdate(o.params.id,null)}),fe(()=>{Ue(r.model)}),(w,d)=>{const a=be,f=ae,u=Re,$=re;return e(r).detailLoading?(v(),B(a,{key:0})):(v(),S(ee,{key:1},[n(e(ge),{title:i.formType===e(L)?"create-decree":"update-decree"},{content:p(()=>[n(Ee,{"onEmit:preview":E,"onEmit:clearForm":g},{default:p(()=>[n($,null,{default:p(()=>[n(f,{"col-class":"w-1/2"},{default:p(()=>[n(_e,{modelValue:e(U).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=N=>e(U).__curator.$model=N),error:e(U).__curator,"api-url":"top-signers","api-params":{doc_types:e(o).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:p(()=>[n(u,{modelValue:e(U).short_description.$model,"onUpdate:modelValue":d[1]||(d[1]=N=>e(U).short_description.$model=N),error:e(U).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":d[2]||(d[2]=N=>e(r).model.__approvers=N),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(U).__signers.$model,"onUpdate:modelValue":d[3]||(d[3]=N=>e(U).__signers.$model=N),error:e(U).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-full"},{default:p(()=>[n(Ve,{modelValue:e(U).content.$model,"onUpdate:modelValue":d[4]||(d[4]=N=>e(U).content.$model=N),error:e(U).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":C},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(xe,{modelValue:_.value,"onUpdate:modelValue":d[5]||(d[5]=N=>_.value=N),"send-button-loading":e(r).buttonLoading,"onEmit:send":V},{content:p(()=>[n(e(Gt),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Eo=qe("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",h)},start_date:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},__user:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:l}=await we(he,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(l))},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await ne(c);return de(this.model,i),this.model.__curator=await me([],i.curator.id,!1),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers),this.model.__user=await Be("users/personal-information",[],!1,i.user.id),this.model.__parent=i.parent,Promise.resolve(i)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:l}=await ye({id:c,body:i});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}}}}),fn={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:L}},setup(c){const i=c,l=oe(),o=te(),b=X(),s=Eo();vt();const t=ue(),{t:_}=Y(),r=K(s.rules,s.model),q=j(!1),U=j([]),E=ie(()=>i.formType===L?"create-poa":"update-poa"),g=ie(()=>s.model.start_date?new Date(s.model.start_date):new Date),C=async()=>{var a,f,u,$,N,z,k,x,A,G,O,et,tt,ot,lt,nt,rt,at,st,it;if(await r.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=Q(s.model.__approvers),s.model.signers=Q(s.model.__signers),s.model.curator=(f=(a=s==null?void 0:s.model)==null?void 0:a.__curator)==null?void 0:f.user_id,s.model.user=($=(u=s==null?void 0:s.model)==null?void 0:u.__user)==null?void 0:$.id,s.model.journal=Z.POWER_OF_ATTORNEY,s.model.company=(z=(N=b.currentUser)==null?void 0:N.company)==null?void 0:z.id,s.model.sender=(x=(k=b==null?void 0:b.currentUser)==null?void 0:k.top_level_department)==null?void 0:x.id,s.model.document_type=l.params.document_type,s.model.document_sub_type=l.params.document_sub_type,s.model.content=".",s.model.parent=(G=(A=s.model)==null?void 0:A.__parent)==null?void 0:G.id,!((et=(O=s==null?void 0:s.model)==null?void 0:O.__user)!=null&&et.passport_seria||(ot=(tt=s==null?void 0:s.model)==null?void 0:tt.__user)!=null&&ot.passport_number||(nt=(lt=s==null?void 0:s.model)==null?void 0:lt.__user)!=null&&nt.passport_issue_date||(at=(rt=s==null?void 0:s.model)==null?void 0:rt.__user)!=null&&at.passport_issued_by)){D(null,`${(it=(st=s.model)==null?void 0:st.__user)==null?void 0:it.full_name}: ${_("passport-details-error")}`,T.WARNING);return}q.value=!0}},R=()=>{},M=async()=>{const d=await s.actionCreateDocument(s.model);await t.actionCountList(),d?(q.value=!1,D(null,_("document-sent"),T.SUCCESS),await o.replace({name:ve,query:{document_type:W.POWER_OF_ATTORNEY}})):D(null,_("error-occurred"),T.ERROR)},V=async()=>{await s.actionUpdateDocument({id:l.params.id,body:s.model}),await t.actionCountList(),D(null,_("changed"),T.SUCCESS),await o.replace({name:ke,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},m=()=>{i.formType===L?M():V()},w=async d=>{const{data:a}=await Qt({user:d.id,document_sub_type:l.params.document_sub_type,status:5});U.value=a.results};return Fe(async()=>{if(l.params.id){const d=await s.actionGetDocumentDetailForUpdate(l.params.id);d.parent&&(U.value=[d.parent])}}),fe(()=>{Ue(s.model)}),(d,a)=>{const f=be,u=ae,$=je,N=Ke,z=re;return e(s).detailLoading?(v(),B(f,{key:0})):(v(),S(ee,{key:1},[n(e(ge),{title:E.value},{content:p(()=>[n(Ee,{"onEmit:preview":C,"onEmit:clearForm":R},{default:p(()=>[n(z,null,{default:p(()=>[n(u,{"col-class":"w-1/2"},{default:p(()=>[n(_e,{modelValue:e(r).__curator.$model,"onUpdate:modelValue":a[0]||(a[0]=k=>e(r).__curator.$model=k),error:e(r).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n(_e,{modelValue:e(r).__user.$model,"onUpdate:modelValue":a[1]||(a[1]=k=>e(r).__user.$model=k),error:e(r).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":a[2]||(a[2]=k=>w(k))},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n($,{modelValue:e(r).start_date.$model,"onUpdate:modelValue":[a[3]||(a[3]=k=>e(r).start_date.$model=k),a[4]||(a[4]=k=>e(r).start_date.$model=e(ce)(k))],error:e(r).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n($,{modelValue:e(r).end_date.$model,"onUpdate:modelValue":[a[5]||(a[5]=k=>e(r).end_date.$model=k),a[6]||(a[6]=k=>e(r).end_date.$model=e(ce)(k))],error:e(r).end_date,"min-date":g.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":a[7]||(a[7]=k=>e(s).model.__approvers=k),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(r).__signers.$model,"onUpdate:modelValue":a[8]||(a[8]=k=>e(r).__signers.$model=k),error:e(r).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(u,{"col-class":"w-1/2"},{default:p(()=>[n(N,{modelValue:e(s).model.__parent,"onUpdate:modelValue":a[9]||(a[9]=k=>e(s).model.__parent=k),options:U.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(xe,{modelValue:q.value,"onUpdate:modelValue":a[10]||(a[10]=k=>q.value=k),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:p(()=>[n(Wt,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Co={class:"base-stepper-component flex items-center select-none"},So=["onClick"],Ro={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Lo={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(c,{emit:i}){const{t:l}=Y(),o=b=>{i("emit:stepClick",b)};return(b,s)=>{const t=se;return v(),S("div",Co,[(v(!0),S(ee,null,Se(c.items,(_,r)=>(v(),S("div",{key:_.id,class:"flex items-center"},[P("div",{class:pe(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",_.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:q=>o(_)},[n(t,{icon:_.icon,class:pe(_.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),P("span",null,J(e(l)(_.label)),1)],10,So),r<c.items.length-1?(v(),S("div",Ro)):$e("",!0)]))),128))])}}},ze=qe("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:y.withMessage("Поле не должен быть пустым",h)}},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)},__groups:{$each:y.forEach({__users:{required:y.withMessage("Поле не должен быть пустым",h)},__tags:{required:y.withMessage("Поле не должен быть пустым",h)},__regions:{required:y.withMessage("Поле не должен быть пустым",h)},__start_date:{required:y.withMessage("Поле не должен быть пустым",h)},__end_date:{required:y.withMessage("Поле не должен быть пустым",h)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:y.forEach({users:{required:y.withMessage("Поле не должен быть пустым",h)},text:{required:y.withMessage("Поле не должен быть пустым",h)}})}},booking_model:{bookings:[{type:le,route:De,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:y.forEach({segments:{$each:y.forEach({departure_city:{required:y.withMessage("Поле не должен быть пустым",h)},arrival_city:{required:y.withMessage("Поле не должен быть пустым",h)},date:{required:y.withMessage("Поле не должен быть пустым",h)},time:{required:y.withMessage("Поле не должен быть пустым",h)},segment_class:{required:y.withMessage("Поле не должен быть пустым",h)}})},passengers:{required:y.withMessage("Поле не должен быть пустым",h)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:St,active:!0,value:Me},{id:2,label:"work-plan",icon:dt,active:!1,value:He},{id:3,label:"route",icon:Rt,active:!1,value:Ze},{id:4,label:"decree",icon:dt,active:!0,value:Ye}],routeTabItems:[{id:1,title:"airplane",icon:ct,value:De},{id:2,title:"train",icon:ut,value:Zt},{id:3,title:"taxi",icon:pt,value:kt}],routeTypeTabItems:[{id:1,title:"there-back",icon:ct,value:le},{id:2,title:"complex-route",icon:ut,value:Xe},{id:3,title:"one-way",icon:pt,value:eo}]}),actions:{async actionCreateDocument(c){const i=qt(c);this.buttonLoading=!0;const{response:l,error:o}=await we(he,i);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:i}){const l=await qt(i);try{this.buttonLoading=!0;const{data:o}=await ye({id:c,body:l});return Promise.resolve(o)}catch(o){return Promise.reject(o)}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){var i,l;try{this.detailLoading=!0;const{data:o}=await ne(c),b=await Xt(o.id);this.decreeModel=(l=(i=b==null?void 0:b.data)==null?void 0:i.to_composes[0])==null?void 0:l.from_compose,de(this.model,o),this.model.__curator=await me([],o.curator.id,!1),this.model.__signers=await I(o.signers),this.model.__approvers=await I(o.approvers);const s=Object.values(o.notices.reduce((t,_)=>{const r=_.group_id;return t[r]=t[r]||{group_id:r,items:[]},t[r].items.push(_),t},{}));this.model.__groups=await Promise.all(s.map(async t=>{const _=await Promise.all(t.items.map(g=>I([],g.user.id,!1))),r=await Qe(t.items[0].tags),q=await Be("regions",t.items[0].locations),U=t.items[0].start_date,E=t.items[0].end_date;return{__users:_,__tags:r,__regions:q,__start_date:U,__end_date:E}})),this.trip_plan_model.trip_plans=await Promise.all(o.trip_plans.map(async(t,_)=>({...t,users:await I(t.users)}))),this.booking_model.bookings=await Promise.all(o.bookings.map(async t=>({type:t.type,route:t.route,segments:await Promise.all(t.segments.map(async _=>({departure_city:await Be("regions",[],!1,_.departure_city.id),arrival_city:await Be("regions",[],!1,_.arrival_city.id),segment_class:await to.find(r=>r.value===_.segment_class),date:ce(_.departure_date),time:await Yt(_.departure_date,_.departure_end_date)}))),passengers:await I(t.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(c){this.model.__groups.splice(c,1)},async actionStepClick(c,i,l){await c.replace({query:{...i.query,step:l}}),this.stepperItems.forEach(b=>b.active=b.value===l),await ht();const o=document.querySelector(".document-view-aside");o&&o.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(c){this.trip_plan_model.trip_plans.splice(c,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:le,route:De,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(c){this.booking_model.bookings.splice(c,1)},actionChangeRouteSegment(c,i){const l=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[i].segments=c===le?[l(),l()]:[l()]},async actionAddRouteLine(c){this.booking_model.bookings[c].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(c,i){this.booking_model.bookings[c].segments.splice(i,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:le,route:De,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),To={class:"trip-info-components"},Do={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Oo={class:"flex justify-between"},Po={class:"text-base text-primary-900 font-semibold mb-1"},Mo=["onClick"],Ao={class:"flex w-full gap-x-4"},No={class:"flex items-center justify-between"},bt={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},setup(c,{expose:i}){const l=oe(),o=te(),b=ze(),{t:s}=Y(),t=K(b.rules,b.model),_=j(!1),r=E=>{b.model.__files=[],E.forEach(g=>{b.model.__files.push(g)})},q=()=>{b.actionAddGroupBlock()},U=async E=>{const g=await t.value.$validate();if(_.value=!0,!g){D(null,s("fill-required-fields"),T.WARNING);return}await b.actionStepClick(o,l,E)};return i({stepClick:U}),(E,g)=>{const C=ae,R=Re,M=se,V=Vt,m=je,w=re,d=Le;return v(),S("div",To,[n(w,null,{default:p(()=>[n(C,{"col-class":"w-1/2"},{default:p(()=>[n(_e,{modelValue:e(t).__curator.$model,"onUpdate:modelValue":g[0]||(g[0]=a=>e(t).__curator.$model=a),error:e(t).__curator,"api-url":"top-signers","api-params":{doc_types:e(l).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),n(C,{"col-class":"w-1/2"},{default:p(()=>[n(R,{modelValue:e(t).short_description.$model,"onUpdate:modelValue":g[1]||(g[1]=a=>e(t).short_description.$model=a),error:e(t).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(C,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:p(()=>[(v(!0),S(ee,null,Se(e(b).model.__groups,(a,f)=>(v(),S("div",Do,[P("div",Oo,[P("span",Po,J(e(s)("group"))+"-"+J(f+1),1),f!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:u=>e(b).actionDeleteGroupBlock(f)},[n(M,{icon:e(Ge),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Mo)):$e("",!0)]),n(w,null,{default:p(()=>[n(C,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:a.__users,"onUpdate:modelValue":u=>a.__users=u,error:e(t).__groups.$each.$response.$data[f].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),n(C,{"col-class":"w-1/2"},{default:p(()=>[n(V,{modelValue:a.__regions,"onUpdate:modelValue":u=>a.__regions=u,error:e(t).__groups.$each.$response.$data[f].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":_.value},{chip:p(({value:u})=>[Je(J(u.name),1)]),option:p(({value:u})=>[n(e(Ce),{title:u.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),n(C,{"col-class":"w-1/2"},{default:p(()=>[n(V,{modelValue:a.__tags,"onUpdate:modelValue":u=>a.__tags=u,error:e(t).__groups.$each.$response.$data[f].__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":_.value},{chip:p(({value:u})=>[Je(J(u.name),1)]),option:p(({value:u})=>[n(e(Ce),{title:u.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),n(C,{"col-class":"w-1/2"},{default:p(()=>[P("div",Ao,[n(m,{modelValue:a.__start_date,"onUpdate:modelValue":[u=>a.__start_date=u,u=>a.__start_date=e(ce)(u)],error:e(t).__groups.$each.$response.$data[f].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),n(m,{modelValue:a.__end_date,"onUpdate:modelValue":[u=>a.__end_date=u,u=>a.__end_date=e(ce)(u)],error:e(t).__groups.$each.$response.$data[f].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),n(d,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(We),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:q},null,8,["icon-left"])]),_:1}),n(C,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(b).model.__approvers,"onUpdate:modelValue":g[2]||(g[2]=a=>e(b).model.__approvers=a),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(C,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:e(t).__signers.$model,"onUpdate:modelValue":g[3]||(g[3]=a=>e(t).__signers.$model=a),error:e(t).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(C,{"col-class":"w-full"},{default:p(()=>[n(Ve,{modelValue:e(t).content.$model,"onUpdate:modelValue":g[4]||(g[4]=a=>e(t).content.$model=a),error:e(t).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(b).model.__files,"onEmit:fileUpload":r},null,8,["modelValue","error","files"])]),_:1})]),_:1}),P("div",No,[n(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),n(d,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:g[5]||(g[5]=a=>U(e(He)))})])])}}},Io={class:"work-plan-component"},Fo={class:"flex flex-col gap-y-3"},jo={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},zo={class:"flex justify-between"},Bo={class:"text-base text-primary-900 font-semibold mb-1"},Go=["onClick"],Wo={class:"flex items-center justify-between mt-10"},Yo={class:"flex items-center gap-x-1"},Ho={__name:"WorkPlan",setup(c,{expose:i}){const{t:l}=Y(),o=oe(),b=te(),s=ze(),t=K(s.trip_plan_rules,s.trip_plan_model),_=j(!1),r=ie(()=>{const E=new Set;return s.model.__groups.reduce((g,C)=>C.__users&&Array.isArray(C.__users)?g.concat(C.__users):g,[]).filter(g=>E.has(g.id)?!1:(E.add(g.id),!0))}),q=async E=>{const g=await t.value.$validate();if(_.value=!0,!g){D(null,l("fill-required-fields"),T.WARNING);return}await s.actionStepClick(b,o,E)},U=()=>{s.actionAddWorkPlanRow(),_.value=!1};return i({stepClick:q}),(E,g)=>{const C=se,R=ro,M=ae,V=re,m=Le;return v(),S("div",Io,[P("div",Fo,[(v(!0),S(ee,null,Se(e(s).trip_plan_model.trip_plans,(w,d)=>(v(),S("div",jo,[P("div",zo,[P("span",Bo,J(e(l)("plan"))+"-"+J(d+1),1),d!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:a=>e(s).actionDeleteWorkPlanRow(d)},[n(C,{icon:e(Ge),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Go)):$e("",!0)]),n(V,null,{default:p(()=>[n(M,{"col-class":"w-1/2"},{default:p(()=>[n(R,{modelValue:w.text,"onUpdate:modelValue":a=>w.text=a,error:e(t).trip_plans.$each.$response.$data[d].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),n(M,{"col-class":"w-1/2"},{default:p(()=>[n(F,{modelValue:w.users,"onUpdate:modelValue":a=>w.users=a,options:r.value,error:e(t).trip_plans.$each.$response.$data[d].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),n(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(We),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:U},null,8,["icon-left"]),P("div",Wo,[n(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),P("div",Yo,[n(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:g[0]||(g[0]=w=>q(e(Me)))}),n(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:g[1]||(g[1]=w=>q(e(Ze)))})])])])}}},Ko=["onClick"],gt={__name:"BaseBrickRadio",props:{modelValue:{type:[Number,String]},items:{type:Array,default:()=>[]}},emits:["emit:onChange","update:modelValue"],setup(c,{emit:i}){const l=c,{t:o}=Y(),b=Ne(l,"modelValue"),s=j({}),t=j(null),_=()=>{ht(()=>{if(t.value){const q=t.value.querySelector(".tab-active");q&&(s.value={width:`${q.offsetWidth}px`,transform:`translateX(${q.offsetLeft}px)`,transition:"transform 0.3s ease, width 0.3s ease"})}})},r=q=>{b.value=q.value,i("emit:onChange",q)};return yt(()=>l.items,()=>{_()},{deep:!0}),Ie(()=>{_()}),(q,U)=>{const E=se;return v(),S("div",{ref_key:"rootRef",ref:t,class:"relative flex items-center bg-greyscale-50 p-[2px] rounded-full w-fit select-none"},[P("div",{class:"absolute bg-white rounded-[90px] shadow-button h-8 transition-all",style:Lt(s.value)},null,4),(v(!0),S(ee,null,Se(l.items,(g,C)=>(v(),S("div",{key:g.id,class:pe(["tab flex rounded-[90px] h-8 items-center px-4 gap-x-2 cursor-pointer relative z-10",{"tab-active":e(b)===g.value}]),onClick:R=>r(g)},[g.icon?(v(),B(E,{key:0,icon:g.icon,class:pe(["!w-[18px] !h-[18px]",e(b)===g.value?"text-primary-500":"text-greyscale-400"])},null,8,["icon","class"])):$e("",!0),P("span",{class:pe(["text-sm font-semibold",e(b)===g.value?"text-greyscale-900":"text-greyscale-500"])},J(e(o)(g.title)),3)],10,Ko))),128))],512)}}};const Jo={class:"base-time-picker"},Qo={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(c){const i=c,l=Ne(i,"modelValue"),{t:o}=Y();return(b,s)=>{var r;const t=po,_=se;return v(),S("div",Jo,[n(t,{label:i.label,required:i.required},null,8,["label","required"]),n(e(mo),{modelValue:e(l),"onUpdate:modelValue":s[0]||(s[0]=q=>Oe(l)?l.value=q:null),"time-picker":"",range:c.range,"cancel-text":e(o)("cancel"),"select-text":e(o)("select"),placeholder:e(o)(c.placeholder),ref:"datePicker",class:pe({"input-error":((r=c.error)==null?void 0:r.$error)&&c.showNestedError})},{"input-icon":p(()=>[n(_,{icon:e(Tt),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Xo={class:"route-component flex flex-col gap-y-3"},Zo={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},el={class:"flex items-center justify-between"},tl={class:"flex items-center gap-x-4"},ol={class:"text-base text-primary-900 font-semibold mb-1"},ll={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},nl={class:"text-xs text-greyscale-900 font-medium"},rl=["onClick"],al=["onClick"],sl={class:"text-sm text-primary-500 font-semibold"},il={class:"flex items-center justify-between mt-10"},dl={class:"flex items-center gap-x-1"},cl={__name:"Route",props:{formType:{type:String,default:L}},emits:["emit:onValidateAndSend"],setup(c,{expose:i,emit:l}){const{t:o}=Y(),b=oe(),s=te(),t=ze(),_=Te();X(),ue();const r=K(t.booking_model_rules,t.booking_model);j(!1);const q=j(!1),U=ie(()=>{const d=new Set;return t.model.__groups.reduce((a,f)=>f.__users&&Array.isArray(f.__users)?a.concat(f.__users):a,[]).filter(a=>d.has(a.id)?!1:(d.add(a.id),!0))}),E=d=>{t.routeTabItems.forEach(a=>a.active=a.id===d.id)},g=(d,a)=>{t.routeTypeTabItems.forEach(f=>f.active=f.id===d.id),t.actionChangeRouteSegment(d.value,a)},C=async d=>{const a=await r.value.$validate();if(q.value=!0,!a){D(null,o("fill-required-fields"),T.WARNING);return}await t.actionStepClick(s,b,d)},R=()=>{t.actionAddRouteRow(),q.value=!1},M=(d,a,f,u)=>{u.type===le&&(t.booking_model.bookings[a].segments[f+1].arrival_city=d)},V=(d,a,f,u)=>{u.type===le&&(t.booking_model.bookings[a].segments[f+1].departure_city=d)},m=(d,a,f,u)=>{u.type===le&&(t.booking_model.bookings[a].segments[f+1].segment_class=d)},w=()=>{C(Ye),l("emit:onValidateAndSend")};return i({stepClick:C}),(d,a)=>{const f=Ke,u=ae,$=je,N=re,z=Le;return v(),S("div",Xo,[(v(!0),S(ee,null,Se(e(t).booking_model.bookings,(k,x)=>(v(),S("div",Zo,[P("div",el,[P("div",tl,[P("span",ol,J(e(o)("route"))+"-"+J(x+1),1),n(gt,{modelValue:k.route,"onUpdate:modelValue":A=>k.route=A,items:e(t).routeTabItems,"onEmit:onChange":a[0]||(a[0]=A=>E(A))},null,8,["modelValue","onUpdate:modelValue","items"]),n(gt,{modelValue:k.type,"onUpdate:modelValue":A=>k.type=A,items:e(t).routeTypeTabItems,"onEmit:onChange":A=>g(A,x)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),x!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:a[1]||(a[1]=(...A)=>e(t).actionDeleteRouteRow&&e(t).actionDeleteRouteRow(...A))},[n(se,{icon:e(Ge),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):$e("",!0)]),P("div",ll,[n(se,{icon:e(Dt),class:"text-warning-500"},null,8,["icon"]),P("span",nl,J(e(o)("route-warning")),1)]),(v(!0),S(ee,null,Se(k.segments,(A,G)=>(v(),S("div",null,[n(N,null,{default:p(()=>[n(u,{"col-class":"w-1/5"},{default:p(()=>[n(f,{modelValue:A.departure_city,"onUpdate:modelValue":O=>A.departure_city=O,error:e(r).bookings.$each.$response.$data[x].segments.$each.$data[G].departure_city,options:e(_).regionsList,"onUpdate:options":a[2]||(a[2]=O=>e(_).regionsList=O),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:k.type===e(le)&&G%2!==0,"onEmit:change":O=>M(O,x,G,k)},{option:p(({option:O})=>[n(e(Ce),{title:O.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),n(u,{"col-class":"w-1/5"},{default:p(()=>[n(f,{modelValue:A.arrival_city,"onUpdate:modelValue":O=>A.arrival_city=O,error:e(r).bookings.$each.$response.$data[x].segments.$each.$data[G].arrival_city,options:e(_).regionsList,"onUpdate:options":a[3]||(a[3]=O=>e(_).regionsList=O),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:k.type===e(le)&&G%2!==0,"onEmit:change":O=>V(O,x,G,k)},{option:p(({option:O})=>[n(e(Ce),{title:O.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),n(u,{"col-class":"w-1/5"},{default:p(()=>[n(f,{modelValue:A.segment_class,"onUpdate:modelValue":O=>A.segment_class=O,error:e(r).bookings.$each.$response.$data[x].segments.$each.$data[G].segment_class,options:k.route===e(kt)?e(oo):k.route===e(De)?e(lo):e(no),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":q.value,translatable:"",disabled:k.type===e(le)&&G%2!==0,"onEmit:change":O=>m(O,x,G,k)},{option:p(({option:O})=>[n(e(Ce),{title:O.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),n(u,{"col-class":"w-1/5"},{default:p(()=>[n($,{modelValue:A.date,"onUpdate:modelValue":[O=>A.date=O,O=>A.date=e(ce)(O)],error:e(r).bookings.$each.$response.$data[x].segments.$each.$data[G].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),n(u,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:p(()=>[n(Qo,{modelValue:A.time,"onUpdate:modelValue":O=>A.time=O,error:e(r).bookings.$each.$response.$data[x].segments.$each.$data[G].time,label:"time",required:"",range:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),k.type===e(Xe)&&G!==0?(v(),S("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:O=>e(t).actionDeleteRouteLine(x,G)},[n(se,{icon:e(Ge),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,rl)):$e("",!0)]),_:2},1024)]),_:2},1024)]))),256)),k.type===e(Xe)?(v(),S("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:A=>e(t).actionAddRouteLine(x)},[n(se,{icon:e(We),class:"text-primary-500"},null,8,["icon"]),P("span",sl,J(e(o)("add-line")),1)],8,al)):$e("",!0),n(N,null,{default:p(()=>[n(u,{"col-class":"w-full"},{default:p(()=>[n(F,{modelValue:k.passengers,"onUpdate:modelValue":A=>k.passengers=A,options:U.value,error:e(r).bookings.$each.$response.$data[x].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),n(z,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(We),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:R},null,8,["icon-left"]),P("div",il,[n(z,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),P("div",dl,[n(z,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:a[4]||(a[4]=k=>C(e(He)))}),n(z,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(t).buttonLoading,onClick:w},null,8,["loading"])])])])}}},ul={class:"decree-component"},pl={class:"flex items-center justify-between mt-10"},ml={class:"flex items-center gap-x-1"},_l={__name:"Decree",props:{formType:{type:String,default:L}},setup(c,{expose:i}){const l=c,o=oe(),b=te(),s=ze(),t=K(s.decreeRules,s.decreeModel),{t:_}=Y(),r=X(),q=ue(),U=j(!1),E=async m=>{await s.actionStepClick(b,o,m)},g=m=>{s.decreeModel.__files=[],m.forEach(w=>{s.decreeModel.__files.push(w)})},C=async()=>{var w,d,a,f;if(!await t.value.$validate()){D(null,_("fill-required-fields"),T.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(d=(w=s.model)==null?void 0:w.__curator)==null?void 0:d.user_id,s.decreeModel.journal=Z.ORDERS_PROTOCOLS,s.decreeModel.company=r.currentUser.company.id,s.decreeModel.sender=(f=(a=r==null?void 0:r.currentUser)==null?void 0:a.top_level_department)==null?void 0:f.id,s.decreeModel.document_type=W.DECREE,s.decreeModel.document_sub_type=H.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,U.value=!0},R=async(m,w)=>{let d={...s.decreeModel,trip_notice_id:m};await s.actionCreateDocument(d)?(U.value=!1,D(null,_("document-sent"),T.SUCCESS),await b.replace({name:ve,query:{document_type:o.query.document_type}})):D(null,_("error-occurred"),T.ERROR)},M=async(m,w)=>{try{await s.actionUpdateDocument({id:w,body:{...s.decreeModel,trip_notice_id:m}}),await q.actionCountList(),D(null,_("changed"),T.SUCCESS),await b.replace({name:ke,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})}catch{}},V=()=>{var w;let m=null;l.formType===L&&o.query.notice_id?m=o.query.notice_id:l.formType===Ae&&o.params.id&&(m=o.params.id),l.formType===L?R(m):M(m,(w=s.decreeModel)==null?void 0:w.id)};return i({stepClick:E}),(m,w)=>{const d=Le;return v(),S("div",ul,[n(Ve,{modelValue:e(t).content.$model,"onUpdate:modelValue":w[0]||(w[0]=a=>e(t).content.$model=a),error:e(t).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":g},null,8,["modelValue","error","files"]),P("div",pl,[n(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),P("div",ml,[n(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[1]||(w[1]=a=>E(e(Me)))}),n(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:C})])]),n(xe,{modelValue:U.value,"onUpdate:modelValue":w[2]||(w[2]=a=>U.value=a),"send-button-loading":e(s).buttonLoading,"onEmit:send":V,"content-classes":"p-0"},{content:p(()=>[n(e(Ht),{"compose-model":{...e(s).model,bookings:e(s).booking_model.bookings,trip_plans:e(s).trip_plan_model.trip_plans,decree_content:e(s).decreeModel.content},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},ql={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},fl={class:"px-6 py-4"},bn={__name:"BusinessTripForm",props:{formType:{type:String,default:L}},setup(c){const i=c,{t:l}=Y(),o=oe(),b=te(),s=X(),t=ze();K(t.rules,t.model),K(t.trip_plan_rules,t.trip_plan_model),K(t.booking_model_rules,t.booking_model),K(t.decreeRules,t.decreeModel);const _=j(null),r=ie(()=>i.formType===L?"create-business-trip-notice":"update-business-trip-notice"),q=ie(()=>{switch(o.query.step){case Me:return bt;case Ye:return _l;case He:return Ho;case Ze:return cl;default:return bt}}),U=async R=>{var V;const M=e(_);((V=o.query)==null?void 0:V.step)!==R.value&&(await M.stepClick(R.value),R.value===Ye&&(await g(),await D(null,l("notice-saved-successfully"),T.SUCCESS)))},E=async()=>{o.query.step||await b.replace({query:{...o.query,step:Me}}),t.stepperItems.forEach(R=>R.active=R.value===o.query.step)},g=async()=>{var V,m,w,d,a,f;const R=Q(t.model.__approvers),M=Q(t.model.__signers);if(t.model.approvers=[],t.model.signers=[],t.model.notices=[],t.model.bookings=[],t.model.trip_plans=[],t.model.approvers=R,t.model.signers=M,t.model.curator=(m=(V=t.model)==null?void 0:V.__curator)==null?void 0:m.user_id,t.model.journal=Z.INNER,t.model.company=(d=(w=s.currentUser)==null?void 0:w.company)==null?void 0:d.id,t.model.__groups.forEach((u,$)=>{const N=$+1;t.model.notices.push(...u.__users.map(z=>({start_date:u.__start_date,end_date:u.__end_date,user:z.id,regions:u.__regions.map(k=>k.id),tags:u.__tags.map(k=>({id:k.id})),group_id:N})))}),t.model.sender=(f=(a=s==null?void 0:s.currentUser)==null?void 0:a.top_level_department)==null?void 0:f.id,t.model.files=t.model.__files.map(u=>({id:u.id})),t.model.document_type=o.params.document_type,t.model.document_sub_type=o.params.document_sub_type,t.model.bookings=t.booking_model.bookings.map(u=>({...u,segments:u.segments.map($=>({departure_city:$.departure_city.id,arrival_city:$.arrival_city.id,departure_date:mt($.date,$.time,0),departure_end_date:mt($.date,$.time,1),segment_class:$.segment_class.value})),passengers:u.passengers.map($=>({user:$.id}))})),t.model.trip_plans=t.trip_plan_model.trip_plans.map(u=>({users:u.users.map($=>({id:$.id})),text:u.text})),i.formType===L&&o.query.notice_id)try{await t.actionUpdateDocument({id:o.query.notice_id,body:t.model})}catch{}else if(i.formType===L)try{const{data:u}=await t.actionCreateDocument(t.model);await b.replace({query:{...o.query,notice_id:u.id}})}catch{}else if(i.formType===Ae&&o.params.id)try{await t.actionUpdateDocument({id:o.params.id,body:t.model})}catch{}},C=async()=>{try{await g(),await D(null,l("notice-saved-successfully"),T.SUCCESS)}catch{}};return Fe(async()=>{await E(),i.formType===Ae?await t.actionGetDocumentDetailForUpdate(o.params.id):o.query.notice_id&&await t.actionGetDocumentDetailForUpdate(o.query.notice_id)}),fe(()=>{t.actionResetBTModel()}),(R,M)=>{const V=be,m=Lo;return v(),S("div",{class:pe(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(t).detailLoading}])},[e(t).detailLoading?(v(),B(V,{key:0})):(v(),B(e(ge),{key:1,title:r.value},{content:p(()=>[P("div",ql,[n(m,{items:e(t).stepperItems,"onEmit:stepClick":U},null,8,["items"])]),P("div",fl,[(v(),B(Ot(q.value),{"form-type":c.formType,ref_key:"childComponent",ref:_,"onEmit:onValidateAndSend":C},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}};export{cn as _,mn as a,_n as b,qn as c,bn as d,un as e,pn as f,fn as g};
