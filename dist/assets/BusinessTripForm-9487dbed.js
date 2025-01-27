import{_ as re}from"./BaseRow-f6f4aa55.js";import{_ as Ce}from"./BaseInput-8cba16ed.js";import{_ as ae}from"./BaseCol-fbc894e0.js";import{v as z,c2 as Ye,a5 as We,o as $,c as R,i as l,z as p,h as e,bf as Te,B as $o,d9 as xo,cX as Uo,f as B,a as P,n as De,r as yo,G as Se,aC as _e,cd as Y,ce as W,bU as Z,u as K,t as X,b as oe,ay as te,cz as qe,F as ee,a9 as T,am as fe,d3 as Oe,d as se,aG as Eo,cs as Ae,a7 as Je,da as Co,e as Pe,g as Ue,_ as ue,db as So,dc as co,dd as Lo,de as uo,df as po,dg as mo,be as Ro,cZ as ze,bz as Be,dh as To,d1 as Do,E as Oo}from"./index-820a73be.js";import{c as y,r as h,u as H}from"./index-657b200d.js";import{_ as Po,a as Mo}from"./BranchMultiSelect-ee5d4a22.js";import{_ as be,a as No,i as Ao,f as Io,g as Fo,b as jo,c as zo,d as Bo,e as Go,j as Yo,k as Wo,h as Ho,l as _o}from"./BasePOA-3af29dca.js";import"./BaseTabMenu-3b56cbb5.js";import"./dialog.esm-b284dbec.js";import"./tabpanel.esm-f5f07963.js";import{s as ie,T as I,W as Ko,X as $e,Y as J,Z as pe,_ as qo,$ as Qe,a0 as je,M as fo}from"./index-13b714da.js";import"./BaseTabView-97a404fa.js";import"./FileTabs-650266f0.js";import{_ as F}from"./UserMultiSelect-b07dbe12.js";import{c as Jo,u as Q,w as ge,d as D}from"./axios.config-c7acd71b.js";import{u as Le}from"./common-3570a2e5.js";import{u as ce}from"./count.store-ccc19863.js";import{a as we,b as ne,c as ye,u as ho,d as Qo,f as Xo}from"./index.store-8f5d59a7.js";import{j as bo,k as he,i as ve,c as le,b as Re,l as Me,m as He,n as Ze,o as Ge,a as Zo,B as vo,M as Xe,O as et,T as ot,C as tt,P as lt,p as nt}from"./index-bd76a17d.js";import{F as L,a as Ne}from"./constants-63630c17.js";import{_ as Ke}from"./BaseDropdown-98c63783.js";import{_ as Ie}from"./BaseCalendar-691b8f04.js";import{_ as ko}from"./WithLabel-ba5baae0.js";import{a as de}from"./formatDate-59550d46.js";import"./qrcode.vue.esm-3c0aee60.js";import{_ as rt}from"./ShortDescription-2cee6527.js";import"./dayjs.min-aa0ac3ae.js";/* empty css                                                                               */import{c as at}from"./Dropdown-badb4b4a.js";import"./menu.esm-0bf9ff8d.js";/* empty css                                                 */import"./avatar.esm-cd3b5c38.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-4ee8e120.js";import"./common.store-849a2d50.js";import{_ as Ee}from"./WithRadio-f124d273.js";import"./radiobutton.esm-1fe426c8.js";import"./checkbox.esm-e830900b.js";import{_ as st}from"./WithSelectable-81e99f80.js";import{_ as it}from"./BaseBrickTab-b202f15a.js";import{_ as dt}from"./BaseFileUpload-3c077d59.js";import{_ as ct}from"./BaseFroalaEditor-cba3e9d5.js";import{_ as go}from"./BaseBrickRadio-7fe3c0ec.js";import{_ as ut}from"./BaseLabel-51725e73.js";import{K as pt}from"./main-a683ce94.js";import{_ as mt}from"./BaseDialog-8e2decce.js";const _t={class:"user-select"},me={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(u,{emit:i}){const n=u,t=z([]),b=Ye(n,"modelValue"),s=async o=>{let{data:_}=await Jo.get(`${n.apiUrl}/`,o);_.hasOwnProperty("results")?t.value=_.results:t.value=_};return We(async()=>{await s(n.apiParams)}),(o,_)=>($(),R("div",_t,[l(Ke,{modelValue:e(b),"onUpdate:modelValue":_[0]||(_[0]=a=>Te(b)?b.value=a:null),options:t.value,"onUpdate:options":_[1]||(_[1]=a=>t.value=a),error:n.error,"api-url":n.apiUrl,"api-params":n.apiParams,"option-label":"full_name",label:n.label,placeholder:n.placeholder,required:n.required,searchable:"","onEmit:change":_[2]||(_[2]=a=>i("emit:change",a))},{option:p(({option:a})=>[l(e(st),{items:[a]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var qt=`
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
`,ft={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};$o.extend({name:"editor",css:qt,classes:ft});(function(){try{return window.Quill}catch{return null}})();const ke={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(u){return["froala","tiny"].includes(u)}}},emits:["update:modelValue","emit:fileUpload"],setup(u,{emit:i}){const n=u,t=Ye(n,"modelValue"),b=z([{title:"text",slot:"editor",icon:xo},{title:"file",slot:"file",icon:Uo}]);return(s,o)=>($(),B(it,{"tab-panel-list":b.value,"panel-container-class":"px-0"},{editor:p(()=>[u.editor==="froala"?($(),B(ct,{key:0,modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=_=>Te(t)?t.value=_:null)},null,8,["modelValue"])):($(),B(at,{key:1,modelValue:e(t),"onUpdate:modelValue":o[1]||(o[1]=_=>Te(t)?t.value=_:null)},null,8,["modelValue"]))]),file:p(()=>[P("div",{class:De(n.fileUploadContainerClasses)},[l(dt,{files:n.files,"onEmit:fileUpload":o[2]||(o[2]=_=>i("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},bt={class:"flex flex-col justify-between h-full"},gt={class:"px-6 py-4 overflow-y-auto"},wt={class:"actions p-6"},xe={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(u,{emit:i}){return(n,t)=>{const b=Se;return $(),R("div",bt,[P("div",gt,[yo(n.$slots,"default")]),P("div",wt,[l(b,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:t[0]||(t[0]=s=>i("emit:clearForm"))}),l(b,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:t[1]||(t[1]=s=>i("emit:preview"))})])])}}},yt=_e("sd-stores-inner",{state:()=>{var u,i;return{buttonLoading:!1,detailLoading:!1,model:{company:(i=(u=Q().currentUser)==null?void 0:u.company)==null?void 0:i.id,content:null,document_type:Y.INNER,document_sub_type:W.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:Z.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__departments:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{},__signers:{required:y.withMessage("Поле не должен быть пустым",h)}}}},actions:{async actionCreateDocument(u){let i={...u,type:bo,sub_type:bo};this.buttonLoading=!0;const{response:n,error:t}=await ge(ye,i);return n?(this.buttonLoading=!1,Promise.resolve(n)):Promise.reject(t)},async actionUpdateDocument({id:u,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:u,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:i}=await ne(u);ie(this.model,i),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers),this.model.__departments=await Ko(i.receiver.departments),this.model.__files=i.files}catch{}finally{this.detailLoading=!1}}}}),ht={class:"font-semibold text-xl"},Ve={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(u,{emit:i}){const t=Ye(u,"modelValue"),{t:b}=K();return(s,o)=>{const _=Se,a=mt;return $(),B(a,{modelValue:e(t),"onUpdate:modelValue":o[1]||(o[1]=q=>Te(t)?t.value=q:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:p(()=>[P("span",ht,X(e(b)("preview")),1)]),content:p(()=>[yo(s.$slots,"content")]),footer:p(()=>[l(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(_,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:u.sendButtonLoading,onClick:o[0]||(o[0]=q=>i("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},dn={__name:"InnerForm",props:{formType:{type:String,default:L}},setup(u){const i=u,n=Q(),t=yt();Le();const b=ce(),s=z(!1);z(null);const{t:o}=K(),_=oe(),a=te(),q=H(t.rules,t.model),U=async()=>{await q.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.departments=[],t.model.departments=t.model.__departments.map(m=>m.id),t.model.files=[],t.model.files=t.model.__files.map(m=>({id:m.id})),t.model.journal=Z.INNER,t.model.sender=n.currentUser.top_level_department.id,t.model.approvers=J(t.model.__approvers),t.model.signers=J(t.model.__signers),t.model.document_type=a.params.document_type,t.model.document_sub_type=a.params.document_sub_type)},E=()=>{i.formType===L?w():C()},w=async()=>{const k=await t.actionCreateDocument(t.model);await b.actionCountList(),k?(s.value=!1,D(null,o("document-sent"),T.SUCCESS),await _.replace({name:he,query:{document_type:Y.INNER}})):D(null,o("error-occurred"),T.ERROR)},C=async()=>{await t.actionUpdateDocument({id:a.params.id,body:t.model}),await b.actionCountList(),D(null,o("document-sent"),T.SUCCESS),await _.replace({name:ve,params:{id:a.params.id,document_type:Y.INNER,document_sub_type:W.SERVICE_LETTER}})},S=()=>{console.log("Clear Form")},M=k=>{t.model.__files=[],k.forEach(m=>{t.model.__files.push(m)})};return We(async()=>{a.params.id&&await t.actionGetDocumentDetailForUpdate(a.params.id)}),qe(()=>{$e(t.model)}),(k,m)=>{const g=fe,d=ae,r=Ce,f=re;return e(t).detailLoading?($(),B(g,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:i.formType===e(L)?"create-sd-inner":"update-sd-inner"},{content:p(()=>[l(xe,{"onEmit:preview":U,"onEmit:clearForm":S},{default:p(()=>[l(f,null,{default:p(()=>[l(d,{"col-class":"w-1/2"},{default:p(()=>[l(Po,{modelValue:e(q).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=c=>e(q).__departments.$model=c),error:e(q).__departments},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(r,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=c=>e(q).short_description.$model=c),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=c=>e(q).__approvers.$model=c),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=c=>e(q).__signers.$model=c),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:p(()=>[l(ke,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=c=>e(q).content.$model=c),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=c=>s.value=c),"send-button-loading":e(t).buttonLoading,"onEmit:send":E},{content:p(()=>{var c,x;return[l(No,{"compose-model":{...e(t).model,signers:e(t).model.__signers,approvers:e(t).model.__approvers,author:e(t).model.__signers[0],sender:{name:(x=(c=e(n).currentUser)==null?void 0:c.top_level_department)==null?void 0:x.name},receiver:{departments:e(t).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},vt=_e("sd-store-application",{state:()=>{var u,i;return{buttonLoading:!1,detailLoading:!1,model:{company:(i=(u=Q().currentUser)==null?void 0:u.company)==null?void 0:i.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{}}}},actions:{async actionCreateDocument(u){let i={...u};this.buttonLoading=!0;const{response:n,error:t}=await ge(ye,i);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:u,body:i});return Promise.resolve(n)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:i}=await ne(u);ie(this.model,i),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers.filter(n=>n.type===Oe.SIGNER)),this.model.__curator=await pe([],i.curator.id,!1),this.model.__files=i.files}catch{}finally{this.detailLoading=!1}}}}),Vo=_e("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:Q().currentUser.company.id,curator:null,document_type:Y.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:Z.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:y.withMessage("Поле не должен быть пустым",h)},register_date:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__negotiators:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:i,error:n}=await ge(ye,u);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:u,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:u,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:i}=await ne(u);ie(this.model,i),this.model.__signers=await I(i.signers.filter(n=>n.type!==Oe.NEGOTIATOR)),this.model.__negotiators=await I(i.signers.filter(n=>n.type===Oe.NEGOTIATOR)),this.model.__approvers=await I(i.approvers),this.model.__curator=await pe([],i.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),cn={__name:"ApplicationForm",props:{formType:{type:String,default:L}},setup(u){const i=u,n=Q(),t=vt();Le();const b=ce();Vo();const s=z(!1);z(null);const{t:o}=K(),_=oe(),a=te(),q=H(t.rules,t.model),U=async()=>{var m,g,d,r,f;await q.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.signers=[{user:(m=n==null?void 0:n.currentUser)==null?void 0:m.id}],t.model.sender=(d=(g=n==null?void 0:n.currentUser)==null?void 0:g.top_level_department)==null?void 0:d.id,t.model.curator=(f=(r=t==null?void 0:t.model)==null?void 0:r.__curator)==null?void 0:f.user_id,t.model.journal=Z.APPLICATION,t.model.document_type=a.params.document_type,t.model.document_sub_type=a.params.document_sub_type,t.model.approvers=J(t.model.__approvers))},E=async()=>{},w=()=>{i.formType===L?C():S()},C=async()=>{const k=await t.actionCreateDocument(t.model);await b.actionCountList(),k?(s.value=!1,D(null,o("document-sent"),T.SUCCESS),await _.replace({name:he,query:{document_type:Y.APPLICATION}})):D(null,o("error-occurred"),T.ERROR)},S=async()=>{await t.actionUpdateDocument({id:a.params.id,body:t.model}),await b.actionCountList(),D(null,o("document-sent"),T.SUCCESS),await _.replace({name:ve,params:{id:a.params.id,document_type:Y.APPLICATION,document_sub_type:W.LABOR_LEAVE}})},M=k=>{t.model.__files=[],k.forEach(m=>{t.model.__files.push(m)})};return We(async()=>{a.params.id&&await t.actionGetDocumentDetailForUpdate(a.params.id)}),qe(()=>{$e(t.model)}),(k,m)=>{const g=fe,d=ae,r=re;return e(t).detailLoading?($(),B(g,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:i.formType===e(L)?"create-sd-application":"update-sd-application"},{content:p(()=>[l(xe,{"onEmit:preview":U,"onEmit:clearForm":E},{default:p(()=>[l(r,null,{default:p(()=>[l(d,{"col-class":"w-1/2"},{default:p(()=>[l(me,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(q).__curator.$model=f),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(q).__approvers.$model=f),error:e(q).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[2]||(m[2]=f=>e(q).__signers.$model=f),disabled:"",label:"signers",placeholder:e(n).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),l(d,{"col-class":"w-full"},{default:p(()=>[l(ke,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(q).content.$model=f),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=f=>s.value=f),"send-button-loading":e(t).buttonLoading,"onEmit:send":w},{content:p(()=>[l(Ao,{"compose-model":{...e(t).model,curator:e(t).model.__curator,author:i.formType===e(L)?e(n).currentUser:e(t).model.__signers[0].user,signers:i.formType===e(L)?[e(n).currentUser]:e(t).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},kt=_e("sd-notice-store",{state:()=>(Q(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:Y.NOTICE,document_sub_type:W.BUSINESS_TRIP,journal:Z.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",h)},start_date:{required:y.withMessage("Поле не должен быть пустым",h)},route:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__companies:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__employees:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},__tags:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:i,error:n}=await ge(ye,u);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:u,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:u,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,i=!1){try{this.detailLoading=!0;const{data:n}=await ne(u);ie(this.model,n),this.model.__companies=[],this.model.__curator=await pe([],n.curator.id,!1),this.model.__employees=await I(n.notices),i?(this.model.__approvers=await I(n.approvers.filter(t=>{var b,s;return((b=t==null?void 0:t.user)==null?void 0:b.id)!==((s=n==null?void 0:n.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await I(n.approvers),this.model.__signers=await I(n.signers),this.model.__companies=await qo(n.notices[0].destinations),this.model.__tags=await Qe(n.tags),this.model.start_date=n.notices[0].start_date,this.model.end_date=n.notices[0].end_date,this.model.__tags=n.tags,this.model.route=n.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(u,i){try{this.detailLoading=!0;const{data:n}=await ne(u),t=await ne(i);ie(this.model,n),this.model.__companies=[],this.model.__curator=await pe([],n.curator.id,!1),this.model.__employees=await I(t.data.notices),this.model.__approvers=await I(n.approvers),this.model.__signers=await I(n.signers),this.model.__companies=await qo(t.data.notices[0].destinations),this.model.__tags=await Qe(n.tags),this.model.start_date=t.data.notices[0].start_date,this.model.end_date=t.data.notices[0].end_date,this.model.__tags=n.tags,this.model.route=t.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),Vt={class:"flex w-full gap-x-4"},un={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:L}},setup(u){const i=u,{t:n}=K(),t=te(),b=oe(),s=Q(),o=kt(),_=ce();Le();const a=H(o.rules,o.model),q=z(!1),U=se(()=>{const d=i.formType===L,r=t.params.document_sub_type;return r===W.BUSINESS_TRIP_DECREE_LOCAL?d?"create-decree":"update-decree":r===W.BUSINESS_TRIP_ORDER_LOCAL?d?"create-order":"update-order":d?"create-business-trip-notice":"update-business-trip-notice"}),E=se(()=>{var d,r;return t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL&&((d=t==null?void 0:t.query)==null?void 0:d.compose_id)&&((r=t==null?void 0:t.query)==null?void 0:r.document_sub_type)===W.BUSINESS_TRIP}),w=se(()=>{var d;return!!(t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL&&((d=o==null?void 0:o.model)!=null&&d.trip_notice_id))});Eo(()=>o.model.__tags,d=>{if(i.formType===L)if(d&&d.length){let r=`${d.map(f=>f.name_uz).join(", ")} yuzasidan`;o.model.short_description=r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}else o.model.short_description=null});const C=async()=>{var r,f,c,x,A;await a.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.notices=[],o.model.approvers=J(o.model.__approvers),o.model.signers=J(o.model.__signers),o.model.curator=(f=(r=o==null?void 0:o.model)==null?void 0:r.__curator)==null?void 0:f.user_id,o.model.journal=t.params.document_type===Y.DECREE||t.params.document_type===Y.ORDER?Z.ORDERS_PROTOCOLS:Z.INNER,o.model.company=s.currentUser.company.id,o.model.notices=o.model.__employees.map(j=>({start_date:o.model.start_date,end_date:o.model.end_date,user:j.id,route:o.model.route,companies:o.model.__companies.map(v=>v.id)})),o.model.sender=(x=(c=s==null?void 0:s.currentUser)==null?void 0:c.top_level_department)==null?void 0:x.id,o.model.tags=o.model.__tags.map(j=>({id:j.id})),o.model.files=o.model.__files.map(j=>({id:j.id})),o.model.document_type=t.params.document_type,o.model.document_sub_type=t.params.document_sub_type,E.value&&(o.model.trip_notice_id=(A=t==null?void 0:t.query)==null?void 0:A.compose_id),q.value=!0)},S=()=>{},M=d=>{o.model.__files=[],d.forEach(r=>{o.model.__files.push(r)})},k=async()=>{E.value&&(o.model.notices=[]);const d=await o.actionCreateDocument(o.model);await _.actionCountList(),d?(q.value=!1,D(null,n("document-sent"),T.SUCCESS),await b.replace({name:he,query:{document_type:t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL?Y.DECREE:t.params.document_sub_type===W.BUSINESS_TRIP_ORDER_LOCAL?Y.ORDER:Y.NOTICE}})):D(null,n("error-occurred"),T.ERROR)},m=async()=>{(E.value||w.value)&&(o.model.notices=[]),await o.actionUpdateDocument({id:t.params.id,body:o.model}),await _.actionCountList(),D(null,n("changed"),T.SUCCESS),await b.replace({name:ve,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},g=()=>{i.formType===L?k():m()};return Ae(async()=>{t.params.id&&t.query.trip_notice_id&&t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL?await o.actionGetDocumentDetailForUpdateForCustomUse(t.params.id,t.query.trip_notice_id):t.params.id?await o.actionGetDocumentDetailForUpdate(t.params.id):E.value&&await o.actionGetDocumentDetailForUpdate(t.query.compose_id,!0)}),qe(()=>{$e(o.model)}),(d,r)=>{const f=fe,c=ae,x=Ie,A=Ke,j=Ce,v=re;return e(o).detailLoading?($(),B(f,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:U.value},{content:p(()=>[l(xe,{"onEmit:preview":C,"onEmit:clearForm":S},{default:p(()=>[l(v,null,{default:p(()=>[l(c,{"col-class":"w-1/2"},{default:p(()=>[l(me,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=V=>e(a).__curator.$model=V),error:e(a).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(a).__employees.$model,"onUpdate:modelValue":r[1]||(r[1]=V=>e(a).__employees.$model=V),error:e(a).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:E.value||w.value},null,8,["modelValue","error","disabled"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(Mo,{modelValue:e(a).__companies.$model,"onUpdate:modelValue":r[2]||(r[2]=V=>e(a).__companies.$model=V),error:e(a).__companies,"text-truncate":"",disabled:E.value||w.value},null,8,["modelValue","error","disabled"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(ko,{modelValue:e(a).__tags.$model,"onUpdate:modelValue":r[3]||(r[3]=V=>e(a).__tags.$model=V),error:e(a).__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:p(({value:V})=>[Je(X(V.name),1)]),option:p(({value:V})=>[l(e(Ee),{title:V.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[P("div",Vt,[l(x,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[r[4]||(r[4]=V=>e(a).start_date.$model=V),r[5]||(r[5]=V=>e(a).start_date.$model=e(de)(V))],error:e(a).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:E.value||w.value},null,8,["modelValue","error","min-date","disabled"]),l(x,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[r[6]||(r[6]=V=>e(a).end_date.$model=V),r[7]||(r[7]=V=>e(a).end_date.$model=e(de)(V))],error:e(a).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:E.value||w.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(A,{modelValue:e(a).route.$model,"onUpdate:modelValue":r[8]||(r[8]=V=>e(a).route.$model=V),error:e(a).route,options:e(Co),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:E.value||w.value},null,8,["modelValue","error","options","disabled"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":r[9]||(r[9]=V=>e(o).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":r[10]||(r[10]=V=>e(a).__signers.$model=V),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(j,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":r[11]||(r[11]=V=>e(a).short_description.$model=V),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(c,{"col-class":"w-full"},{default:p(()=>[l(ke,{modelValue:e(a).content.$model,"onUpdate:modelValue":r[12]||(r[12]=V=>e(a).content.$model=V),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:q.value,"onUpdate:modelValue":r[13]||(r[13]=V=>q.value=V),"send-button-loading":e(o).buttonLoading,"onEmit:send":g},{content:p(()=>[e(t).params.document_sub_type===e(W).BUSINESS_TRIP_DECREE_LOCAL?($(),B(e(Io),{key:0,"compose-model":e(o).model,preview:!0},null,8,["compose-model"])):e(t).params.document_sub_type===e(W).BUSINESS_TRIP_ORDER_LOCAL?($(),B(e(Fo),{key:1,"compose-model":e(o).model,preview:!0},null,8,["compose-model"])):($(),B(e(jo),{key:2,"compose-model":e(o).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},pn={__name:"OrderForm",props:{formType:{type:String,default:L}},setup(u){const i=u,n=Vo(),t=ce(),b=Q(),s=te(),o=oe(),_=H(n.rules,n.model),{t:a}=K(),q=z(!1),U=async()=>{var m,g,d,r;await _.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=J(n.model.__approvers),n.model.curator=(g=(m=n==null?void 0:n.model)==null?void 0:m.__curator)==null?void 0:g.user_id,n.model.sender=(r=(d=b==null?void 0:b.currentUser)==null?void 0:d.top_level_department)==null?void 0:r.id,n.model.files=n.model.__files.map(f=>({id:f.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.journal=Z.ORDERS_PROTOCOLS,n.model.register_date=de(n.model.register_date),n.model.__negotiators.forEach(f=>{n.model.signers.push(f.hasOwnProperty("user")?{id:f.id,user:f.user.id,type:Oe.NEGOTIATOR}:{user:f.id,type:Oe.NEGOTIATOR})}),s.query.compose_id&&(n.model.trip_notice_id=s.query.compose_id),q.value=!0)},E=()=>{},w=async()=>{try{const k=await n.actionCreateDocument(n.model);await t.actionCountList(),k&&(q.value=!1,D(null,a("document-sent"),T.SUCCESS),await o.replace({name:he,query:{document_type:Y.ORDER}}))}catch{D(null,a("error-occurred"),T.ERROR)}},C=async()=>{try{const k=await n.actionUpdateDocument({id:s.params.id,body:n.model});await t.actionCountList(),D(null,a("changed"),T.SUCCESS),await o.replace({name:ve,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{D(null,a("error-occurred"),T.ERROR)}},S=()=>{i.formType===L?w():C()},M=k=>{n.model.__files=[],k.forEach(m=>{n.model.__files.push(m)})};return We(async()=>{s.params.id&&await n.actionGetDocumentDetailForUpdate(s.params.id)}),qe(()=>{$e(n.model)}),(k,m)=>{const g=fe,d=ae,r=Ce,f=Ie,c=re;return e(n).detailLoading?($(),B(g,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:i.formType===e(L)?"create-order":"update-order"},{content:p(()=>[l(xe,{"onEmit:preview":U,"onEmit:clearForm":E},{default:p(()=>[l(c,null,{default:p(()=>[l(d,{"col-class":"w-1/2"},{default:p(()=>[l(me,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=x=>e(_).__curator.$model=x),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(r,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=x=>e(_).register_number.$model=x),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(f,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=x=>e(_).register_date.$model=x),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=x=>e(n).model.__approvers=x),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=x=>e(_).__negotiators.$model=x),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:p(()=>[l(ke,{modelValue:e(_).content.$model,"onUpdate:modelValue":m[5]||(m[5]=x=>e(_).content.$model=x),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:q.value,"onUpdate:modelValue":m[6]||(m[6]=x=>q.value=x),"send-button-loading":e(n).buttonLoading,"onEmit:send":S},{content:p(()=>[l(e(zo),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},$t=_e("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:i,error:n}=await ge(ye,u);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:u,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:u,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:i}=await ne(u);ie(this.model,i),this.model.__curator=await pe([],i.curator.id,!1),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers)}catch{}finally{this.detailLoading=!1}}}}),mn={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:L}},setup(u){const i=u,{t:n}=K(),t=te(),b=oe(),s=Q(),o=$t(),_=ce();Le();const a=z(!1),q=H(o.rules,o.model),U=async()=>{var m,g,d,r;await q.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=J(o.model.__approvers),o.model.signers=J(o.model.__signers),o.model.curator=(g=(m=o==null?void 0:o.model)==null?void 0:m.__curator)==null?void 0:g.user_id,o.model.journal=Z.INNER,o.model.company=s.currentUser.company.id,o.model.sender=(r=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:r.id,o.model.files=o.model.__files.map(f=>({id:f.id})),o.model.document_type=t.params.document_type,o.model.document_sub_type=t.params.document_sub_type,a.value=!0)},E=()=>{},w=k=>{o.model.__files=[],k.forEach(m=>{o.model.__files.push(m)})},C=async()=>{const k=await o.actionCreateDocument(o.model);await _.actionCountList(),k?(a.value=!1,D(null,n("document-sent"),T.SUCCESS),await b.replace({name:he,query:{document_type:Y.NOTICE}})):D(null,n("error-occurred"),T.ERROR)},S=async()=>{await o.actionUpdateDocument({id:t.params.id,body:o.model}),await _.actionCountList(),D(null,n("changed"),T.SUCCESS),await b.replace({name:ve,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},M=()=>{i.formType===L?C():S()};return Ae(async()=>{t.params.id&&await o.actionGetDocumentDetailForUpdate(t.params.id)}),qe(()=>{$e(o.model)}),(k,m)=>{const g=fe,d=ae,r=Ce,f=re;return e(o).detailLoading?($(),B(g,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:i.formType===e(L)?"create-notice":"update-notice"},{content:p(()=>[l(xe,{"onEmit:preview":U,"onEmit:clearForm":E},{default:p(()=>[l(f,null,{default:p(()=>[l(d,{"col-class":"w-1/2"},{default:p(()=>[l(me,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=c=>e(q).__curator.$model=c),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(r,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=c=>e(q).short_description.$model=c),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=c=>e(o).model.__approvers=c),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=c=>e(q).__signers.$model=c),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:p(()=>[l(ke,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=c=>e(q).content.$model=c),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":w},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:a.value,"onUpdate:modelValue":m[5]||(m[5]=c=>a.value=c),"send-button-loading":e(o).buttonLoading,"onEmit:send":M},{content:p(()=>[l(e(Bo),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},xt=_e("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(u){const i={...u};delete i.bookings,delete i.notices,delete i.trip_plans,this.buttonLoading=!0;const{response:n,error:t}=await ge(ye,i);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:i}){const n={...i};delete n.bookings,delete n.notices,delete n.trip_plans;try{this.buttonLoading=!0;const{data:t}=await we({id:u,body:n});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u,i){try{this.detailLoading=!0;const{data:n}=await ne(u);ie(this.model,n),this.model.__curator=await pe([],n.curator.id,!1),this.model.__approvers=await I(n.approvers),this.model.__signers=await I(n.signers)}catch{}finally{this.detailLoading=!1}}}}),_n={__name:"DecreeForm",props:{formType:{type:String,default:L}},setup(u){const i=u,{t:n}=K(),t=te(),b=oe(),s=Q(),o=ce();Le();const _=z(!1),a=xt(),q=ho(),U=H(a.rules,a.model),E=async()=>{var d,r,f,c;await U.value.$validate()&&(a.model.approvers=[],a.model.signers=[],a.model.approvers=J(a.model.__approvers),a.model.signers=J(a.model.__signers),a.model.curator=(r=(d=a==null?void 0:a.model)==null?void 0:d.__curator)==null?void 0:r.user_id,a.model.journal=Z.ORDERS_PROTOCOLS,a.model.company=s.currentUser.company.id,a.model.sender=(c=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:c.id,a.model.files=a.model.__files.map(x=>({id:x.id})),a.model.document_type=t.params.document_type,a.model.document_sub_type=t.params.document_sub_type,t.query.compose_id&&(a.model.trip_notice_id=t.query.compose_id),_.value=!0)},w=()=>{},C=g=>{a.model.__files=[],g.forEach(d=>{a.model.__files.push(d)})},S=async()=>{const g=await a.actionCreateDocument(a.model);await o.actionCountList(),g?(_.value=!1,D(null,n("document-sent"),T.SUCCESS),await b.replace({name:he,query:{document_type:t.params.document_type}})):D(null,n("error-occurred"),T.ERROR)},M=async()=>{await a.actionUpdateDocument({id:t.params.id,body:a.model}),await o.actionCountList(),D(null,n("changed"),T.SUCCESS),await b.replace({name:ve,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},k=()=>{i.formType===L?S():M()},m=async g=>{const{data:d}=await q.actionGetDocumentDetail(g);a.model.notices=d==null?void 0:d.notices,a.model.trip_plans=d==null?void 0:d.trip_plans,a.model.bookings=d==null?void 0:d.bookings,a.model.short_description=d==null?void 0:d.short_description,a.model.trip_notice_register_number=d==null?void 0:d.register_number};return Ae(async()=>{i.formType===L&&t.query.compose_id?await m(t.query.compose_id):i.formType===Ne&&t.query.trip_notice_id&&t.params.id?(await a.actionGetDocumentDetailForUpdate(t.params.id,null),await m(t.query.trip_notice_id)):i.formType===Ne&&t.params.id&&await a.actionGetDocumentDetailForUpdate(t.params.id,null)}),qe(()=>{$e(a.model)}),(g,d)=>{const r=fe,f=ae,c=Ce,x=re;return e(a).detailLoading?($(),B(r,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:i.formType===e(L)?"create-decree":"update-decree"},{content:p(()=>[l(xe,{"onEmit:preview":E,"onEmit:clearForm":w},{default:p(()=>[l(x,null,{default:p(()=>[l(f,{"col-class":"w-1/2"},{default:p(()=>[l(me,{modelValue:e(U).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=A=>e(U).__curator.$model=A),error:e(U).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:p(()=>[l(c,{modelValue:e(U).short_description.$model,"onUpdate:modelValue":d[1]||(d[1]=A=>e(U).short_description.$model=A),error:e(U).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":d[2]||(d[2]=A=>e(a).model.__approvers=A),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(U).__signers.$model,"onUpdate:modelValue":d[3]||(d[3]=A=>e(U).__signers.$model=A),error:e(U).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-full"},{default:p(()=>[l(ke,{modelValue:e(U).content.$model,"onUpdate:modelValue":d[4]||(d[4]=A=>e(U).content.$model=A),error:e(U).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":C},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:_.value,"onUpdate:modelValue":d[5]||(d[5]=A=>_.value=A),"send-button-loading":e(a).buttonLoading,"onEmit:send":k},{content:p(()=>[l(e(Go),{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Ut=_e("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",h)},start_date:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},__user:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(u){this.buttonLoading=!0;const{response:i,error:n}=await ge(ye,u);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionGetDocumentDetailForUpdate(u){try{this.detailLoading=!0;const{data:i}=await ne(u);return ie(this.model,i),this.model.__curator=await pe([],i.curator.id,!1),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers),this.model.__user=await je("users/personal-information",[],!1,i.user.id),this.model.__parent=i.parent,Promise.resolve(i)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:u,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:u,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}}}}),qn={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:L}},setup(u){const i=u,n=te(),t=oe(),b=Q(),s=Ut();ho();const o=ce(),{t:_}=K(),a=H(s.rules,s.model),q=z(!1),U=z([]),E=se(()=>i.formType===L?"create-poa":"update-poa"),w=se(()=>s.model.start_date?new Date(s.model.start_date):new Date),C=async()=>{var r,f,c,x,A,j,v,V,N,G,O,eo,oo,to,lo,no,ro,ao,so,io;if(await a.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=J(s.model.__approvers),s.model.signers=J(s.model.__signers),s.model.curator=(f=(r=s==null?void 0:s.model)==null?void 0:r.__curator)==null?void 0:f.user_id,s.model.user=(x=(c=s==null?void 0:s.model)==null?void 0:c.__user)==null?void 0:x.id,s.model.journal=Z.POWER_OF_ATTORNEY,s.model.company=(j=(A=b.currentUser)==null?void 0:A.company)==null?void 0:j.id,s.model.sender=(V=(v=b==null?void 0:b.currentUser)==null?void 0:v.top_level_department)==null?void 0:V.id,s.model.document_type=n.params.document_type,s.model.document_sub_type=n.params.document_sub_type,s.model.content=".",s.model.parent=(G=(N=s.model)==null?void 0:N.__parent)==null?void 0:G.id,!((eo=(O=s==null?void 0:s.model)==null?void 0:O.__user)!=null&&eo.passport_seria||(to=(oo=s==null?void 0:s.model)==null?void 0:oo.__user)!=null&&to.passport_number||(no=(lo=s==null?void 0:s.model)==null?void 0:lo.__user)!=null&&no.passport_issue_date||(ao=(ro=s==null?void 0:s.model)==null?void 0:ro.__user)!=null&&ao.passport_issued_by)){D(null,`${(io=(so=s.model)==null?void 0:so.__user)==null?void 0:io.full_name}: ${_("passport-details-error")}`,T.WARNING);return}q.value=!0}},S=()=>{},M=async()=>{const d=await s.actionCreateDocument(s.model);await o.actionCountList(),d?(q.value=!1,D(null,_("document-sent"),T.SUCCESS),await t.replace({name:he,query:{document_type:Y.POWER_OF_ATTORNEY}})):D(null,_("error-occurred"),T.ERROR)},k=async()=>{await s.actionUpdateDocument({id:n.params.id,body:s.model}),await o.actionCountList(),D(null,_("changed"),T.SUCCESS),await t.replace({name:ve,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},m=()=>{i.formType===L?M():k()},g=async d=>{const{data:r}=await Qo({user:d.id,document_sub_type:n.params.document_sub_type,status:5});U.value=r.results};return Ae(async()=>{if(n.params.id){const d=await s.actionGetDocumentDetailForUpdate(n.params.id);d.parent&&(U.value=[d.parent])}}),qe(()=>{$e(s.model)}),(d,r)=>{const f=fe,c=ae,x=Ie,A=Ke,j=re;return e(s).detailLoading?($(),B(f,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:E.value},{content:p(()=>[l(xe,{"onEmit:preview":C,"onEmit:clearForm":S},{default:p(()=>[l(j,null,{default:p(()=>[l(c,{"col-class":"w-1/2"},{default:p(()=>[l(me,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=v=>e(a).__curator.$model=v),error:e(a).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(me,{modelValue:e(a).__user.$model,"onUpdate:modelValue":r[1]||(r[1]=v=>e(a).__user.$model=v),error:e(a).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":r[2]||(r[2]=v=>g(v))},null,8,["modelValue","error"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(x,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[r[3]||(r[3]=v=>e(a).start_date.$model=v),r[4]||(r[4]=v=>e(a).start_date.$model=e(de)(v))],error:e(a).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(x,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[r[5]||(r[5]=v=>e(a).end_date.$model=v),r[6]||(r[6]=v=>e(a).end_date.$model=e(de)(v))],error:e(a).end_date,"min-date":w.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":r[7]||(r[7]=v=>e(s).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":r[8]||(r[8]=v=>e(a).__signers.$model=v),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:p(()=>[l(A,{modelValue:e(s).model.__parent,"onUpdate:modelValue":r[9]||(r[9]=v=>e(s).model.__parent=v),options:U.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:q.value,"onUpdate:modelValue":r[10]||(r[10]=v=>q.value=v),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:p(()=>[l(Yo,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Et={class:"base-stepper-component flex items-center select-none"},Ct=["onClick"],St={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Lt={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(u,{emit:i}){const{t:n}=K(),t=b=>{i("emit:stepClick",b)};return(b,s)=>{const o=ue;return $(),R("div",Et,[($(!0),R(ee,null,Pe(u.items,(_,a)=>($(),R("div",{key:_.id,class:"flex items-center"},[P("div",{class:De(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",_.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:q=>t(_)},[l(o,{icon:_.icon,class:De(_.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),P("span",null,X(e(n)(_.label)),1)],10,Ct),a<u.items.length-1?($(),R("div",St)):Ue("",!0)]))),128))])}}},Fe=_e("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:y.withMessage("Поле не должен быть пустым",h)}},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)},__groups:{$each:y.forEach({__users:{required:y.withMessage("Поле не должен быть пустым",h)},__tags:{required:y.withMessage("Поле не должен быть пустым",h)},__regions:{required:y.withMessage("Поле не должен быть пустым",h)},__start_date:{required:y.withMessage("Поле не должен быть пустым",h)},__end_date:{required:y.withMessage("Поле не должен быть пустым",h)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:y.forEach({users:{required:y.withMessage("Поле не должен быть пустым",h)},text:{required:y.withMessage("Поле не должен быть пустым",h)}})}},booking_model:{bookings:[{type:le,route:Re,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:y.forEach({segments:{$each:y.forEach({departure_city:{required:y.withMessage("Поле не должен быть пустым",h)},arrival_city:{required:y.withMessage("Поле не должен быть пустым",h)},date:{required:y.withMessage("Поле не должен быть пустым",h)},time:{required:y.withMessage("Поле не должен быть пустым",h)},segment_class:{required:y.withMessage("Поле не должен быть пустым",h)}})},passengers:{required:y.withMessage("Поле не должен быть пустым",h)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:So,active:!0,value:Me},{id:2,label:"work-plan",icon:co,active:!1,value:He},{id:3,label:"route",icon:Lo,active:!1,value:Ze},{id:4,label:"decree",icon:co,active:!0,value:Ge}],routeTabItems:[{id:1,title:"airplane",icon:uo,value:Re},{id:2,title:"train",icon:po,value:Zo},{id:3,title:"taxi",icon:mo,value:vo}],routeTypeTabItems:[{id:1,title:"there-back",icon:uo,value:le},{id:2,title:"complex-route",icon:po,value:Xe},{id:3,title:"one-way",icon:mo,value:et}]}),actions:{async actionCreateDocument(u){const i=fo(u);this.buttonLoading=!0;const{response:n,error:t}=await ge(ye,i);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:u,body:i}){const n=await fo(i);try{this.buttonLoading=!0;const{data:t}=await we({id:u,body:n});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(u){var i,n;try{this.detailLoading=!0;const{data:t}=await ne(u),b=await Xo(t.id);this.decreeModel=(n=(i=b==null?void 0:b.data)==null?void 0:i.to_composes[0])==null?void 0:n.from_compose,ie(this.model,t),this.model.__curator=await pe([],t.curator.id,!1),this.model.__signers=await I(t.signers),this.model.__approvers=await I(t.approvers);const s=Object.values(t.notices.reduce((o,_)=>{const a=_.group_id;return o[a]=o[a]||{group_id:a,items:[]},o[a].items.push(_),o},{}));this.model.__groups=await Promise.all(s.map(async o=>{const _=await Promise.all(o.items.map(w=>I([],w.user.id,!1))),a=await Qe(o.items[0].tags),q=await je("regions",o.items[0].locations),U=o.items[0].start_date,E=o.items[0].end_date;return{__users:_,__tags:a,__regions:q,__start_date:U,__end_date:E}})),this.trip_plan_model.trip_plans=await Promise.all(t.trip_plans.map(async(o,_)=>({...o,users:await I(o.users)}))),this.booking_model.bookings=await Promise.all(t.bookings.map(async o=>({type:o.type,route:o.route,segments:await Promise.all(o.segments.map(async _=>({departure_city:await je("regions",[],!1,_.departure_city.id),arrival_city:await je("regions",[],!1,_.arrival_city.id),segment_class:await ot.find(a=>a.value===_.segment_class),date:de(_.departure_date),time:await Wo(_.departure_date,_.departure_end_date)}))),passengers:await I(o.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(u){this.model.__groups.splice(u,1)},async actionStepClick(u,i,n){await u.replace({query:{...i.query,step:n}}),this.stepperItems.forEach(b=>b.active=b.value===n),await Ro();const t=document.querySelector(".document-view-aside");t&&t.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(u){this.trip_plan_model.trip_plans.splice(u,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:le,route:Re,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(u){this.booking_model.bookings.splice(u,1)},actionChangeRouteSegment(u,i){const n=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[i].segments=u===le?[n(),n()]:[n()]},async actionAddRouteLine(u){this.booking_model.bookings[u].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(u,i){this.booking_model.bookings[u].segments.splice(i,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:le,route:Re,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),Rt={class:"trip-info-components"},Tt={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Dt={class:"flex justify-between"},Ot={class:"text-base text-primary-900 font-semibold mb-1"},Pt=["onClick"],Mt={class:"flex w-full gap-x-4"},Nt={class:"flex items-center justify-between"},wo={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},setup(u,{expose:i}){const n=te(),t=oe(),b=Fe(),{t:s}=K(),o=H(b.rules,b.model),_=z(!1),a=E=>{b.model.__files=[],E.forEach(w=>{b.model.__files.push(w)})},q=()=>{b.actionAddGroupBlock()},U=async E=>{const w=await o.value.$validate();if(_.value=!0,!w){D(null,s("fill-required-fields"),T.WARNING);return}await b.actionStepClick(t,n,E)};return i({stepClick:U}),(E,w)=>{const C=ae,S=Ce,M=ue,k=ko,m=Ie,g=re,d=Se;return $(),R("div",Rt,[l(g,null,{default:p(()=>[l(C,{"col-class":"w-1/2"},{default:p(()=>[l(me,{modelValue:e(o).__curator.$model,"onUpdate:modelValue":w[0]||(w[0]=r=>e(o).__curator.$model=r),error:e(o).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(C,{"col-class":"w-1/2"},{default:p(()=>[l(S,{modelValue:e(o).short_description.$model,"onUpdate:modelValue":w[1]||(w[1]=r=>e(o).short_description.$model=r),error:e(o).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(C,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:p(()=>[($(!0),R(ee,null,Pe(e(b).model.__groups,(r,f)=>($(),R("div",Tt,[P("div",Dt,[P("span",Ot,X(e(s)("group"))+"-"+X(f+1),1),f!==0?($(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:c=>e(b).actionDeleteGroupBlock(f)},[l(M,{icon:e(ze),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Pt)):Ue("",!0)]),l(g,null,{default:p(()=>[l(C,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:r.__users,"onUpdate:modelValue":c=>r.__users=c,error:e(o).__groups.$each.$response.$data[f].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(C,{"col-class":"w-1/2"},{default:p(()=>[l(k,{modelValue:r.__regions,"onUpdate:modelValue":c=>r.__regions=c,error:e(o).__groups.$each.$response.$data[f].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":_.value},{chip:p(({value:c})=>[Je(X(c.name),1)]),option:p(({value:c})=>[l(e(Ee),{title:c.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(C,{"col-class":"w-1/2"},{default:p(()=>[l(k,{modelValue:r.__tags,"onUpdate:modelValue":c=>r.__tags=c,error:e(o).__groups.$each.$response.$data[f].__tags,"api-url":"tags","api-params":{document_sub_type:e(n).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":_.value},{chip:p(({value:c})=>[Je(X(c.name),1)]),option:p(({value:c})=>[l(e(Ee),{title:c.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),l(C,{"col-class":"w-1/2"},{default:p(()=>[P("div",Mt,[l(m,{modelValue:r.__start_date,"onUpdate:modelValue":[c=>r.__start_date=c,c=>r.__start_date=e(de)(c)],error:e(o).__groups.$each.$response.$data[f].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(m,{modelValue:r.__end_date,"onUpdate:modelValue":[c=>r.__end_date=c,c=>r.__end_date=e(de)(c)],error:e(o).__groups.$each.$response.$data[f].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(d,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:q},null,8,["icon-left"])]),_:1}),l(C,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(b).model.__approvers,"onUpdate:modelValue":w[2]||(w[2]=r=>e(b).model.__approvers=r),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(C,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:e(o).__signers.$model,"onUpdate:modelValue":w[3]||(w[3]=r=>e(o).__signers.$model=r),error:e(o).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(C,{"col-class":"w-full"},{default:p(()=>[l(ke,{modelValue:e(o).content.$model,"onUpdate:modelValue":w[4]||(w[4]=r=>e(o).content.$model=r),error:e(o).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(b).model.__files,"onEmit:fileUpload":a},null,8,["modelValue","error","files"])]),_:1})]),_:1}),P("div",Nt,[l(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(d,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[5]||(w[5]=r=>U(e(He)))})])])}}},At={class:"work-plan-component"},It={class:"flex flex-col gap-y-3"},Ft={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},jt={class:"flex justify-between"},zt={class:"text-base text-primary-900 font-semibold mb-1"},Bt=["onClick"],Gt={class:"flex items-center justify-between mt-10"},Yt={class:"flex items-center gap-x-1"},Wt={__name:"WorkPlan",setup(u,{expose:i}){const{t:n}=K(),t=te(),b=oe(),s=Fe(),o=H(s.trip_plan_rules,s.trip_plan_model),_=z(!1),a=se(()=>{const E=new Set;return s.model.__groups.reduce((w,C)=>C.__users&&Array.isArray(C.__users)?w.concat(C.__users):w,[]).filter(w=>E.has(w.id)?!1:(E.add(w.id),!0))}),q=async E=>{const w=await o.value.$validate();if(_.value=!0,!w){D(null,n("fill-required-fields"),T.WARNING);return}await s.actionStepClick(b,t,E)},U=()=>{s.actionAddWorkPlanRow(),_.value=!1};return i({stepClick:q}),(E,w)=>{const C=ue,S=rt,M=ae,k=re,m=Se;return $(),R("div",At,[P("div",It,[($(!0),R(ee,null,Pe(e(s).trip_plan_model.trip_plans,(g,d)=>($(),R("div",Ft,[P("div",jt,[P("span",zt,X(e(n)("plan"))+"-"+X(d+1),1),d!==0?($(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:r=>e(s).actionDeleteWorkPlanRow(d)},[l(C,{icon:e(ze),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Bt)):Ue("",!0)]),l(k,null,{default:p(()=>[l(M,{"col-class":"w-1/2"},{default:p(()=>[l(S,{modelValue:g.text,"onUpdate:modelValue":r=>g.text=r,error:e(o).trip_plans.$each.$response.$data[d].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(M,{"col-class":"w-1/2"},{default:p(()=>[l(F,{modelValue:g.users,"onUpdate:modelValue":r=>g.users=r,options:a.value,error:e(o).trip_plans.$each.$response.$data[d].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:U},null,8,["icon-left"]),P("div",Gt,[l(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),P("div",Yt,[l(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[0]||(w[0]=g=>q(e(Me)))}),l(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[1]||(w[1]=g=>q(e(Ze)))})])])])}}};const Ht={class:"base-time-picker"},Kt={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(u){const i=u,n=Ye(i,"modelValue"),{t}=K();return(b,s)=>{var a;const o=ut,_=ue;return $(),R("div",Ht,[l(o,{label:i.label,required:i.required},null,8,["label","required"]),l(e(pt),{modelValue:e(n),"onUpdate:modelValue":s[0]||(s[0]=q=>Te(n)?n.value=q:null),"time-picker":"",range:u.range,"cancel-text":e(t)("cancel"),"select-text":e(t)("select"),placeholder:e(t)(u.placeholder),ref:"datePicker",class:De({"input-error":((a=u.error)==null?void 0:a.$error)&&u.showNestedError})},{"input-icon":p(()=>[l(_,{icon:e(To),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Jt={class:"route-component flex flex-col gap-y-3"},Qt={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Xt={class:"flex items-center justify-between"},Zt={class:"flex items-center gap-x-4"},el={class:"text-base text-primary-900 font-semibold mb-1"},ol={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},tl={class:"text-xs text-greyscale-900 font-medium"},ll=["onClick"],nl=["onClick"],rl={class:"text-sm text-primary-500 font-semibold"},al={class:"flex items-center justify-between mt-10"},sl={class:"flex items-center gap-x-1"},il={__name:"Route",props:{formType:{type:String,default:L}},emits:["emit:onValidateAndSend"],setup(u,{expose:i,emit:n}){const{t}=K(),b=te(),s=oe(),o=Fe(),_=Le();Q(),ce();const a=H(o.booking_model_rules,o.booking_model);z(!1);const q=z(!1),U=se(()=>{const d=new Set;return o.model.__groups.reduce((r,f)=>f.__users&&Array.isArray(f.__users)?r.concat(f.__users):r,[]).filter(r=>d.has(r.id)?!1:(d.add(r.id),!0))}),E=d=>{o.routeTabItems.forEach(r=>r.active=r.id===d.id)},w=(d,r)=>{o.routeTypeTabItems.forEach(f=>f.active=f.id===d.id),o.actionChangeRouteSegment(d.value,r)},C=async d=>{const r=await a.value.$validate();if(q.value=!0,!r){D(null,t("fill-required-fields"),T.WARNING);return}await o.actionStepClick(s,b,d)},S=()=>{o.actionAddRouteRow(),q.value=!1},M=(d,r,f,c)=>{c.type===le&&(o.booking_model.bookings[r].segments[f+1].arrival_city=d)},k=(d,r,f,c)=>{c.type===le&&(o.booking_model.bookings[r].segments[f+1].departure_city=d)},m=(d,r,f,c)=>{c.type===le&&(o.booking_model.bookings[r].segments[f+1].segment_class=d)},g=()=>{C(Ge),n("emit:onValidateAndSend")};return i({stepClick:C}),(d,r)=>{const f=Ke,c=ae,x=Ie,A=re,j=Se;return $(),R("div",Jt,[($(!0),R(ee,null,Pe(e(o).booking_model.bookings,(v,V)=>($(),R("div",Qt,[P("div",Xt,[P("div",Zt,[P("span",el,X(e(t)("route"))+"-"+X(V+1),1),l(go,{modelValue:v.route,"onUpdate:modelValue":N=>v.route=N,items:e(o).routeTabItems,"onEmit:onChange":r[0]||(r[0]=N=>E(N))},null,8,["modelValue","onUpdate:modelValue","items"]),l(go,{modelValue:v.type,"onUpdate:modelValue":N=>v.type=N,items:e(o).routeTypeTabItems,"onEmit:onChange":N=>w(N,V)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),V!==0?($(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:r[1]||(r[1]=(...N)=>e(o).actionDeleteRouteRow&&e(o).actionDeleteRouteRow(...N))},[l(ue,{icon:e(ze),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):Ue("",!0)]),P("div",ol,[l(ue,{icon:e(Do),class:"text-warning-500"},null,8,["icon"]),P("span",tl,X(e(t)("route-warning")),1)]),($(!0),R(ee,null,Pe(v.segments,(N,G)=>($(),R("div",null,[l(A,null,{default:p(()=>[l(c,{"col-class":"w-1/5"},{default:p(()=>[l(f,{modelValue:N.departure_city,"onUpdate:modelValue":O=>N.departure_city=O,error:e(a).bookings.$each.$response.$data[V].segments.$each.$data[G].departure_city,options:e(_).regionsList,"onUpdate:options":r[2]||(r[2]=O=>e(_).regionsList=O),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:v.type===e(le)&&G%2!==0,"onEmit:change":O=>M(O,V,G,v)},{option:p(({option:O})=>[l(e(Ee),{title:O.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(c,{"col-class":"w-1/5"},{default:p(()=>[l(f,{modelValue:N.arrival_city,"onUpdate:modelValue":O=>N.arrival_city=O,error:e(a).bookings.$each.$response.$data[V].segments.$each.$data[G].arrival_city,options:e(_).regionsList,"onUpdate:options":r[3]||(r[3]=O=>e(_).regionsList=O),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:v.type===e(le)&&G%2!==0,"onEmit:change":O=>k(O,V,G,v)},{option:p(({option:O})=>[l(e(Ee),{title:O.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(c,{"col-class":"w-1/5"},{default:p(()=>[l(f,{modelValue:N.segment_class,"onUpdate:modelValue":O=>N.segment_class=O,error:e(a).bookings.$each.$response.$data[V].segments.$each.$data[G].segment_class,options:v.route===e(vo)?e(tt):v.route===e(Re)?e(lt):e(nt),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":q.value,translatable:"",disabled:v.type===e(le)&&G%2!==0,"onEmit:change":O=>m(O,V,G,v)},{option:p(({option:O})=>[l(e(Ee),{title:O.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(c,{"col-class":"w-1/5"},{default:p(()=>[l(x,{modelValue:N.date,"onUpdate:modelValue":[O=>N.date=O,O=>N.date=e(de)(O)],error:e(a).bookings.$each.$response.$data[V].segments.$each.$data[G].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),l(c,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:p(()=>[l(Kt,{modelValue:N.time,"onUpdate:modelValue":O=>N.time=O,error:e(a).bookings.$each.$response.$data[V].segments.$each.$data[G].time,label:"time",required:"",range:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),v.type===e(Xe)&&G!==0?($(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:O=>e(o).actionDeleteRouteLine(V,G)},[l(ue,{icon:e(ze),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,ll)):Ue("",!0)]),_:2},1024)]),_:2},1024)]))),256)),v.type===e(Xe)?($(),R("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:N=>e(o).actionAddRouteLine(V)},[l(ue,{icon:e(Be),class:"text-primary-500"},null,8,["icon"]),P("span",rl,X(e(t)("add-line")),1)],8,nl)):Ue("",!0),l(A,null,{default:p(()=>[l(c,{"col-class":"w-full"},{default:p(()=>[l(F,{modelValue:v.passengers,"onUpdate:modelValue":N=>v.passengers=N,options:U.value,error:e(a).bookings.$each.$response.$data[V].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),l(j,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:S},null,8,["icon-left"]),P("div",al,[l(j,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),P("div",sl,[l(j,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:r[4]||(r[4]=v=>C(e(He)))}),l(j,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(o).buttonLoading,onClick:g},null,8,["loading"])])])])}}},dl={class:"decree-component"},cl={class:"flex items-center justify-between mt-10"},ul={class:"flex items-center gap-x-1"},pl={__name:"Decree",props:{formType:{type:String,default:L}},setup(u,{expose:i}){const n=u,t=te(),b=oe(),s=Fe(),o=H(s.decreeRules,s.decreeModel),{t:_}=K(),a=Q(),q=ce(),U=z(!1),E=async m=>{await s.actionStepClick(b,t,m)},w=m=>{s.decreeModel.__files=[],m.forEach(g=>{s.decreeModel.__files.push(g)})},C=async()=>{var g,d,r,f;if(!await o.value.$validate()){D(null,_("fill-required-fields"),T.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(d=(g=s.model)==null?void 0:g.__curator)==null?void 0:d.user_id,s.decreeModel.journal=Z.ORDERS_PROTOCOLS,s.decreeModel.company=a.currentUser.company.id,s.decreeModel.sender=(f=(r=a==null?void 0:a.currentUser)==null?void 0:r.top_level_department)==null?void 0:f.id,s.decreeModel.document_type=Y.DECREE,s.decreeModel.document_sub_type=W.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,U.value=!0},S=async(m,g)=>{let d={...s.decreeModel,trip_notice_id:m};await s.actionCreateDocument(d)?(U.value=!1,D(null,_("document-sent"),T.SUCCESS),await b.replace({name:he,query:{document_type:t.query.document_type}})):D(null,_("error-occurred"),T.ERROR)},M=async(m,g)=>{try{await s.actionUpdateDocument({id:g,body:{...s.decreeModel,trip_notice_id:m}}),await q.actionCountList(),D(null,_("changed"),T.SUCCESS),await b.replace({name:ve,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})}catch{}},k=()=>{var g;let m=null;n.formType===L&&t.query.notice_id?m=t.query.notice_id:n.formType===Ne&&t.params.id&&(m=t.params.id),n.formType===L?S(m):M(m,(g=s.decreeModel)==null?void 0:g.id)};return i({stepClick:E}),(m,g)=>{const d=Se;return $(),R("div",dl,[l(ke,{modelValue:e(o).content.$model,"onUpdate:modelValue":g[0]||(g[0]=r=>e(o).content.$model=r),error:e(o).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":w},null,8,["modelValue","error","files"]),P("div",cl,[l(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),P("div",ul,[l(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:g[1]||(g[1]=r=>E(e(Me)))}),l(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:C})])]),l(Ve,{modelValue:U.value,"onUpdate:modelValue":g[2]||(g[2]=r=>U.value=r),"send-button-loading":e(s).buttonLoading,"onEmit:send":k,"content-classes":"p-0"},{content:p(()=>[l(e(Ho),{"compose-model":{...e(s).model,bookings:e(s).booking_model.bookings,trip_plans:e(s).trip_plan_model.trip_plans,decree_content:e(s).decreeModel.content},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},ml={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},_l={class:"px-6 py-4"},fn={__name:"BusinessTripForm",props:{formType:{type:String,default:L}},setup(u){const i=u,{t:n}=K(),t=te(),b=oe(),s=Q(),o=Fe();H(o.rules,o.model),H(o.trip_plan_rules,o.trip_plan_model),H(o.booking_model_rules,o.booking_model),H(o.decreeRules,o.decreeModel);const _=z(null),a=se(()=>i.formType===L?"create-business-trip-notice":"update-business-trip-notice"),q=se(()=>{switch(t.query.step){case Me:return wo;case Ge:return pl;case He:return Wt;case Ze:return il;default:return wo}}),U=async S=>{var k;const M=e(_);((k=t.query)==null?void 0:k.step)!==S.value&&(await M.stepClick(S.value),S.value===Ge&&(await w(),await D(null,n("notice-saved-successfully"),T.SUCCESS)))},E=async()=>{t.query.step||await b.replace({query:{...t.query,step:Me}}),o.stepperItems.forEach(S=>S.active=S.value===t.query.step)},w=async()=>{var k,m,g,d,r,f;const S=J(o.model.__approvers),M=J(o.model.__signers);if(o.model.approvers=[],o.model.signers=[],o.model.notices=[],o.model.bookings=[],o.model.trip_plans=[],o.model.approvers=S,o.model.signers=M,o.model.curator=(m=(k=o.model)==null?void 0:k.__curator)==null?void 0:m.user_id,o.model.journal=Z.INNER,o.model.company=(d=(g=s.currentUser)==null?void 0:g.company)==null?void 0:d.id,o.model.__groups.forEach((c,x)=>{const A=x+1;o.model.notices.push(...c.__users.map(j=>({start_date:c.__start_date,end_date:c.__end_date,user:j.id,regions:c.__regions.map(v=>v.id),tags:c.__tags.map(v=>({id:v.id})),group_id:A})))}),o.model.sender=(f=(r=s==null?void 0:s.currentUser)==null?void 0:r.top_level_department)==null?void 0:f.id,o.model.files=o.model.__files.map(c=>({id:c.id})),o.model.document_type=t.params.document_type,o.model.document_sub_type=t.params.document_sub_type,o.model.bookings=o.booking_model.bookings.map(c=>({...c,segments:c.segments.map(x=>({departure_city:x.departure_city.id,arrival_city:x.arrival_city.id,departure_date:_o(x.date,x.time,0),departure_end_date:_o(x.date,x.time,1),segment_class:x.segment_class.value})),passengers:c.passengers.map(x=>({user:x.id}))})),o.model.trip_plans=o.trip_plan_model.trip_plans.map(c=>({users:c.users.map(x=>({id:x.id})),text:c.text})),i.formType===L&&t.query.notice_id)try{await o.actionUpdateDocument({id:t.query.notice_id,body:o.model})}catch{}else if(i.formType===L)try{const{data:c}=await o.actionCreateDocument(o.model);await b.replace({query:{...t.query,notice_id:c.id}})}catch{}else if(i.formType===Ne&&t.params.id)try{await o.actionUpdateDocument({id:t.params.id,body:o.model})}catch{}},C=async()=>{try{await w(),await D(null,n("notice-saved-successfully"),T.SUCCESS)}catch{}};return Ae(async()=>{await E(),i.formType===Ne?await o.actionGetDocumentDetailForUpdate(t.params.id):t.query.notice_id&&await o.actionGetDocumentDetailForUpdate(t.query.notice_id)}),qe(()=>{o.actionResetBTModel()}),(S,M)=>{const k=fe,m=Lt;return $(),R("div",{class:De(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(o).detailLoading}])},[e(o).detailLoading?($(),B(k,{key:0})):($(),B(e(be),{key:1,title:a.value},{content:p(()=>[P("div",ml,[l(m,{items:e(o).stepperItems,"onEmit:stepClick":U},null,8,["items"])]),P("div",_l,[($(),B(Oo(q.value),{"form-type":u.formType,ref_key:"childComponent",ref:_,"onEmit:onValidateAndSend":C},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}};export{dn as _,pn as a,mn as b,_n as c,fn as d,cn as e,un as f,qn as g};
