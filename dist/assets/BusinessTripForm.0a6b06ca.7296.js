import{_ as ae}from"./BaseRow.26f15f46.7296.js";import{_ as Ce}from"./BaseInput.57c6cc9a.7296.js";import{_ as se}from"./BaseCol.a894f95d.7296.js";import{v as z,c2 as Ye,a6 as We,o as $,c as R,i as l,z as u,h as e,be as Te,B as $o,d9 as xo,cX as Uo,f as B,a as M,n as De,r as yo,G as Se,aB as _e,cd as Y,ce as W,bU as Z,u as K,t as J,b as oe,ax as te,cz as qe,F as ee,aa as T,al as fe,d3 as Oe,d as ie,aF as Eo,cs as Ne,a8 as Je,da as Co,e as Pe,g as Ue,_ as pe,db as So,dc as co,dd as Lo,de as po,df as uo,dg as mo,bd as Ro,cZ as ze,bz as Be,dh as To,d1 as Do,E as Oo}from"./index.7f6dbdc1.6182.js";import{c as y,r as h,u as H}from"./index.a9d04ea4.7296.js";import{_ as Po,a as Mo}from"./BranchMultiSelect.1e640673.7296.js";import{_ as be,a as Ao,i as No,f as Io,g as Fo,b as jo,c as zo,d as Bo,e as Go,j as Yo,k as Wo,h as Ho,l as _o}from"./BasePOA.0ca33e77.7296.js";import"./BaseTabMenu.204e2a80.7296.js";import"./dialog.esm.73e2e646.7296.js";import"./tabpanel.esm.a6743d95.7296.js";import"./FileSaver.min.8a14a8f6.7296.js";import{s as de,v as I,y as Ko,z as $e,A as Q,B as ue,C as qo,D as Qe,E as je,o as fo}from"./index.71c8d9a8.7296.js";import"./BaseTabView.e8c54a24.7296.js";import"./FileTabs.8c4cd532.7296.js";import{_ as F}from"./UserMultiSelect.4f461620.7296.js";import{c as Jo,u as X,w as ge,d as D}from"./axios.config.b3b5e104.7296.js";import{u as Le}from"./common.93fdd52e.7296.js";import{u as ne}from"./count.store.09e1df74.7296.js";import{a as we,b as re,c as ye,u as ho,d as Qo,f as Xo}from"./index.store.f311326b.7296.js";import{j as bo,k as he,i as ve,c as le,b as Re,l as Me,m as He,n as Ze,o as Ge,a as Zo,B as vo,M as Xe,O as et,T as ot,C as tt,P as lt,p as nt}from"./index.bd76a17d.7296.js";import{F as L,a as Ae}from"./constants.63630c17.7296.js";import{_ as Ke}from"./BaseDropdown.1a6cc1d1.7296.js";import{_ as Ie}from"./BaseCalendar.7ba31973.7296.js";import{_ as ko}from"./WithLabel.e0046057.7296.js";import{a as ce}from"./formatDate.d74253fe.7296.js";import"./qrcode.vue.esm.6a015ea2.7296.js";import{_ as rt}from"./ShortDescription.abcda73d.7296.js";import"./dayjs.min.255e1551.7296.js";/* empty css                                                                                    */import{c as at}from"./Dropdown.fd4cd33f.7296.js";import"./menu.esm.7daaaab3.7296.js";/* empty css                                                      */import"./avatar.esm.cf8f4a50.7296.js";/* empty css                                                      *//* empty css                                                            */import"./accordiontab.esm.694c0077.7296.js";import"./common.store.a50bb052.7296.js";import{_ as Ee}from"./WithRadio.65bff946.7296.js";import"./radiobutton.esm.e2e2489b.7296.js";import"./checkbox.esm.92725324.7296.js";import"./index.es6.f9050ba3.7296.js";import{_ as st}from"./WithSelectable.d03ff656.7296.js";import{_ as it}from"./BaseBrickTab.6684cd87.7296.js";import{_ as dt}from"./BaseFileUpload.6f6b75fa.7296.js";import{_ as ct}from"./BaseFroalaEditor.24d26f27.7296.js";import{_ as go}from"./BaseBrickRadio.6c009857.7296.js";import{_ as pt}from"./BaseLabel.be3cdd27.7296.js";import{K as ut}from"./main.12eba6e7.7296.js";import{_ as mt}from"./BaseDialog.ba2d8dd8.7296.js";const _t={class:"user-select"},me={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"},apiParams:{type:Object,default:()=>{}}},emits:["update:modelValue","emit:change"],setup(p,{emit:i}){const n=p,t=z([]),b=Ye(n,"modelValue"),s=async o=>{let{data:_}=await Jo.get(`${n.apiUrl}/`,o);_.hasOwnProperty("results")?t.value=_.results:t.value=_};return We(async()=>{await s(n.apiParams)}),(o,_)=>($(),R("div",_t,[l(Ke,{modelValue:e(b),"onUpdate:modelValue":_[0]||(_[0]=a=>Te(b)?b.value=a:null),options:t.value,"onUpdate:options":_[1]||(_[1]=a=>t.value=a),error:n.error,"api-url":n.apiUrl,"api-params":n.apiParams,"option-label":"full_name",label:n.label,placeholder:n.placeholder,required:n.required,searchable:"","onEmit:change":_[2]||(_[2]=a=>i("emit:change",a))},{option:u(({option:a})=>[l(e(st),{items:[a]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","api-params","label","placeholder","required"])]))}};var qt=`
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
`,ft={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};$o.extend({name:"editor",css:qt,classes:ft});(function(){try{return window.Quill}catch{return null}})();const ke={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]},editor:{type:String,default:"tiny",validator(p){return["froala","tiny"].includes(p)}}},emits:["update:modelValue","emit:fileUpload"],setup(p,{emit:i}){const n=p,t=Ye(n,"modelValue"),b=z([{title:"text",slot:"editor",icon:xo},{title:"file",slot:"file",icon:Uo}]);return(s,o)=>($(),B(it,{"tab-panel-list":b.value,"panel-container-class":"px-0"},{editor:u(()=>[p.editor==="froala"?($(),B(ct,{key:0,modelValue:e(t),"onUpdate:modelValue":o[0]||(o[0]=_=>Te(t)?t.value=_:null)},null,8,["modelValue"])):($(),B(at,{key:1,modelValue:e(t),"onUpdate:modelValue":o[1]||(o[1]=_=>Te(t)?t.value=_:null)},null,8,["modelValue"]))]),file:u(()=>[M("div",{class:De(n.fileUploadContainerClasses)},[l(dt,{files:n.files,"onEmit:fileUpload":o[2]||(o[2]=_=>i("emit:fileUpload",_))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},bt={class:"flex flex-col justify-between h-full"},gt={class:"px-6 py-4 overflow-y-auto"},wt={class:"actions p-6"},xe={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(p,{emit:i}){return(n,t)=>{const b=Se;return $(),R("div",bt,[M("div",gt,[yo(n.$slots,"default")]),M("div",wt,[l(b,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:t[0]||(t[0]=s=>i("emit:clearForm"))}),l(b,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:t[1]||(t[1]=s=>i("emit:preview"))})])])}}},yt=_e("sd-stores-inner",{state:()=>{var p,i;return{buttonLoading:!1,detailLoading:!1,model:{company:(i=(p=X().currentUser)==null?void 0:p.company)==null?void 0:i.id,content:null,document_type:Y.INNER,document_sub_type:W.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:Z.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{short_description:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__departments:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{},__signers:{required:y.withMessage("Поле не должен быть пустым",h)}}}},actions:{async actionCreateDocument(p){let i={...p,type:bo,sub_type:bo};this.buttonLoading=!0;const{response:n,error:t}=await ge(ye,i);return n?(this.buttonLoading=!1,Promise.resolve(n)):Promise.reject(t)},async actionUpdateDocument({id:p,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:p,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:i}=await re(p);de(this.model,i),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers),this.model.__departments=await Ko(i.receiver.departments),this.model.__files=i.files}catch{}finally{this.detailLoading=!1}}}}),ht={class:"font-semibold text-xl"},Ve={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(p,{emit:i}){const t=Ye(p,"modelValue"),{t:b}=K();return(s,o)=>{const _=Se,a=mt;return $(),B(a,{modelValue:e(t),"onUpdate:modelValue":o[1]||(o[1]=q=>Te(t)?t.value=q:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:u(()=>[M("span",ht,J(e(b)("preview")),1)]),content:u(()=>[yo(s.$slots,"content")]),footer:u(()=>[l(_,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(_,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:p.sendButtonLoading,onClick:o[0]||(o[0]=q=>i("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},mn={__name:"InnerForm",props:{formType:{type:String,default:L}},setup(p){const i=p,n=X(),t=yt();Le();const b=ne(),s=z(!1);z(null);const{t:o}=K(),_=oe(),a=te(),q=H(t.rules,t.model),U=async()=>{await q.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.departments=[],t.model.departments=t.model.__departments.map(m=>m.id),t.model.files=[],t.model.files=t.model.__files.map(m=>({id:m.id})),t.model.journal=Z.INNER,t.model.sender=n.currentUser.top_level_department.id,t.model.approvers=Q(t.model.__approvers),t.model.signers=Q(t.model.__signers),t.model.document_type=a.params.document_type,t.model.document_sub_type=a.params.document_sub_type,t.model.receiver&&delete t.model.receiver)},E=()=>{i.formType===L?w():C()},w=async()=>{const V=await t.actionCreateDocument(t.model);await b.actionCountList(),V?(s.value=!1,D(null,o("document-sent"),T.SUCCESS),await _.replace({name:he,query:{document_type:Y.INNER}})):D(null,o("error-occurred"),T.ERROR)},C=async()=>{await t.actionUpdateDocument({id:a.params.id,body:t.model}),await b.actionCountList(),D(null,o("document-sent"),T.SUCCESS),await _.replace({name:ve,params:{id:a.params.id,document_type:Y.INNER,document_sub_type:W.SERVICE_LETTER}})},S=()=>{console.log("Clear Form")},A=V=>{t.model.__files=[],V.forEach(m=>{t.model.__files.push(m)})};return We(async()=>{a.params.id&&await t.actionGetDocumentDetailForUpdate(a.params.id)}),qe(()=>{$e(t.model)}),(V,m)=>{const g=fe,d=se,r=Ce,f=ae;return e(t).detailLoading?($(),B(g,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:i.formType===e(L)?"create-sd-inner":"update-sd-inner"},{content:u(()=>[l(xe,{"onEmit:preview":U,"onEmit:clearForm":S},{default:u(()=>[l(f,null,{default:u(()=>[l(d,{"col-class":"w-1/2"},{default:u(()=>[l(Po,{modelValue:e(q).__departments.$model,"onUpdate:modelValue":m[0]||(m[0]=c=>e(q).__departments.$model=c),error:e(q).__departments},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(r,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=c=>e(q).short_description.$model=c),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[2]||(m[2]=c=>e(q).__approvers.$model=c),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=c=>e(q).__signers.$model=c),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:u(()=>[l(ke,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=c=>e(q).content.$model=c),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":A},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:s.value,"onUpdate:modelValue":m[5]||(m[5]=c=>s.value=c),"send-button-loading":e(t).buttonLoading,"onEmit:send":E},{content:u(()=>{var c,x;return[l(Ao,{"compose-model":{...e(t).model,signers:e(t).model.__signers,approvers:e(t).model.__approvers,author:e(t).model.__signers[0],sender:{name:(x=(c=e(n).currentUser)==null?void 0:c.top_level_department)==null?void 0:x.name},receiver:{departments:e(t).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},vt=_e("sd-store-application",{state:()=>{var p,i;return{buttonLoading:!1,detailLoading:!1,model:{company:(i=(p=X().currentUser)==null?void 0:p.company)==null?void 0:i.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__approvers:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{}}}},actions:{async actionCreateDocument(p){let i={...p};this.buttonLoading=!0;const{response:n,error:t}=await ge(ye,i);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:p,body:i});return Promise.resolve(n)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:i}=await re(p);de(this.model,i),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers.filter(n=>n.type===Oe.SIGNER)),this.model.__curator=await ue([],i.curator.id,!1),this.model.__files=i.files}catch{}finally{this.detailLoading=!1}}}}),Vo=_e("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:X().currentUser.company.id,curator:null,document_type:Y.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:Z.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:y.withMessage("Поле не должен быть пустым",h)},register_date:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__negotiators:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:i,error:n}=await ge(ye,p);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:p,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:p,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:i}=await re(p);de(this.model,i),this.model.__signers=await I(i.signers.filter(n=>n.type!==Oe.NEGOTIATOR)),this.model.__negotiators=await I(i.signers.filter(n=>n.type===Oe.NEGOTIATOR)),this.model.__approvers=await I(i.approvers),this.model.__curator=await ue([],i.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),_n={__name:"ApplicationForm",props:{formType:{type:String,default:L}},setup(p){const i=p,n=X(),t=vt();Le();const b=ne();Vo();const s=z(!1);z(null);const{t:o}=K(),_=oe(),a=te(),q=H(t.rules,t.model),U=async()=>{var m,g,d,r,f;await q.value.$validate()&&(s.value=!0,t.model.approvers=[],t.model.signers=[],t.model.signers=[{user:(m=n==null?void 0:n.currentUser)==null?void 0:m.id}],t.model.sender=(d=(g=n==null?void 0:n.currentUser)==null?void 0:g.top_level_department)==null?void 0:d.id,t.model.curator=(f=(r=t==null?void 0:t.model)==null?void 0:r.__curator)==null?void 0:f.user_id,t.model.journal=Z.APPLICATION,t.model.document_type=a.params.document_type,t.model.document_sub_type=a.params.document_sub_type,t.model.approvers=Q(t.model.__approvers))},E=async()=>{},w=()=>{i.formType===L?C():S()},C=async()=>{const V=await t.actionCreateDocument(t.model);await b.actionCountList(),V?(s.value=!1,D(null,o("document-sent"),T.SUCCESS),await _.replace({name:he,query:{document_type:Y.APPLICATION}})):D(null,o("error-occurred"),T.ERROR)},S=async()=>{await t.actionUpdateDocument({id:a.params.id,body:t.model}),await b.actionCountList(),D(null,o("document-sent"),T.SUCCESS),await _.replace({name:ve,params:{id:a.params.id,document_type:Y.APPLICATION,document_sub_type:W.LABOR_LEAVE}})},A=V=>{t.model.__files=[],V.forEach(m=>{t.model.__files.push(m)})};return We(async()=>{a.params.id&&await t.actionGetDocumentDetailForUpdate(a.params.id)}),qe(()=>{$e(t.model)}),(V,m)=>{const g=fe,d=se,r=ae;return e(t).detailLoading?($(),B(g,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:i.formType===e(L)?"create-sd-application":"update-sd-application"},{content:u(()=>[l(xe,{"onEmit:preview":U,"onEmit:clearForm":E},{default:u(()=>[l(r,null,{default:u(()=>[l(d,{"col-class":"w-1/2"},{default:u(()=>[l(me,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(q).__curator.$model=f),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(a).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(q).__approvers.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(q).__approvers.$model=f),error:e(q).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[2]||(m[2]=f=>e(q).__signers.$model=f),disabled:"",label:"signers",placeholder:e(n).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),l(d,{"col-class":"w-full"},{default:u(()=>[l(ke,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[3]||(m[3]=f=>e(q).content.$model=f),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(t).model.__files,"onEmit:fileUpload":A},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=f=>s.value=f),"send-button-loading":e(t).buttonLoading,"onEmit:send":w},{content:u(()=>[l(No,{"compose-model":{...e(t).model,curator:e(t).model.__curator,author:i.formType===e(L)?e(n).currentUser:e(t).model.__signers[0].user,signers:i.formType===e(L)?[e(n).currentUser]:e(t).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},kt=_e("sd-notice-store",{state:()=>(X(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:Y.NOTICE,document_sub_type:W.BUSINESS_TRIP,journal:Z.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",h)},start_date:{required:y.withMessage("Поле не должен быть пустым",h)},route:{required:y.withMessage("Поле не должен быть пустым",h)},content:{required:y.withMessage("Поле не должен быть пустым",h)},__companies:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__employees:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},__tags:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:i,error:n}=await ge(ye,p);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:p,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:p,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,i=!1){try{this.detailLoading=!0;const{data:n}=await re(p);de(this.model,n),this.model.__companies=[],this.model.__curator=await ue([],n.curator.id,!1),this.model.__employees=await I(n.notices),i?(this.model.__approvers=await I(n.approvers.filter(t=>{var b,s;return((b=t==null?void 0:t.user)==null?void 0:b.id)!==((s=n==null?void 0:n.curator)==null?void 0:s.assistant)})),this.model.register_number=null):this.model.__approvers=await I(n.approvers),this.model.__signers=await I(n.signers),this.model.__companies=await qo(n.notices[0].destinations),this.model.__tags=await Qe(n.tags),this.model.start_date=n.notices[0].start_date,this.model.end_date=n.notices[0].end_date,this.model.__tags=n.tags,this.model.route=n.notices[0].route}catch{}finally{this.detailLoading=!1}},async actionGetDocumentDetailForUpdateForCustomUse(p,i){try{this.detailLoading=!0;const{data:n}=await re(p),t=await re(i);de(this.model,n),this.model.__companies=[],this.model.__curator=await ue([],n.curator.id,!1),this.model.__employees=await I(t.data.notices),this.model.__approvers=await I(n.approvers),this.model.__signers=await I(n.signers),this.model.__companies=await qo(t.data.notices[0].destinations),this.model.__tags=await Qe(n.tags),this.model.start_date=t.data.notices[0].start_date,this.model.end_date=t.data.notices[0].end_date,this.model.__tags=n.tags,this.model.route=t.data.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),Vt={class:"flex w-full gap-x-4"},qn={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:L}},setup(p){const i=p,{t:n}=K(),t=te(),b=oe(),s=X(),o=kt(),_=ne();Le();const a=H(o.rules,o.model),q=z(!1),U=ie(()=>{const d=i.formType===L,r=t.params.document_sub_type;return r===W.BUSINESS_TRIP_DECREE_LOCAL?d?"create-decree":"update-decree":r===W.BUSINESS_TRIP_ORDER_LOCAL?d?"create-order":"update-order":d?"create-business-trip-notice":"update-business-trip-notice"}),E=ie(()=>{var d,r;return t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL&&((d=t==null?void 0:t.query)==null?void 0:d.compose_id)&&((r=t==null?void 0:t.query)==null?void 0:r.document_sub_type)===W.BUSINESS_TRIP}),w=ie(()=>{var d;return!!(t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL&&((d=o==null?void 0:o.model)!=null&&d.trip_notice_id))});Eo(()=>o.model.__tags,d=>{if(i.formType===L)if(d&&d.length){let r=`${d.map(f=>f.name_uz).join(", ")} yuzasidan`;o.model.short_description=r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}else o.model.short_description=null});const C=async()=>{var r,f,c,x,N;await a.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.notices=[],o.model.approvers=Q(o.model.__approvers),o.model.signers=Q(o.model.__signers),o.model.curator=(f=(r=o==null?void 0:o.model)==null?void 0:r.__curator)==null?void 0:f.user_id,o.model.journal=t.params.document_type===Y.DECREE||t.params.document_type===Y.ORDER?Z.ORDERS_PROTOCOLS:Z.INNER,o.model.company=s.currentUser.company.id,o.model.notices=o.model.__employees.map(j=>({start_date:o.model.start_date,end_date:o.model.end_date,user:j.id,route:o.model.route,companies:o.model.__companies.map(k=>k.id)})),o.model.sender=(x=(c=s==null?void 0:s.currentUser)==null?void 0:c.top_level_department)==null?void 0:x.id,o.model.tags=o.model.__tags.map(j=>({id:j.id})),o.model.files=o.model.__files.map(j=>({id:j.id})),o.model.document_type=t.params.document_type,o.model.document_sub_type=t.params.document_sub_type,E.value&&(o.model.trip_notice_id=(N=t==null?void 0:t.query)==null?void 0:N.compose_id),q.value=!0)},S=()=>{},A=d=>{o.model.__files=[],d.forEach(r=>{o.model.__files.push(r)})},V=async()=>{E.value&&(o.model.notices=[]);const d=await o.actionCreateDocument(o.model);await _.actionCountList(),d?(q.value=!1,D(null,n("document-sent"),T.SUCCESS),await b.replace({name:he,query:{document_type:t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL?Y.DECREE:t.params.document_sub_type===W.BUSINESS_TRIP_ORDER_LOCAL?Y.ORDER:Y.NOTICE}})):D(null,n("error-occurred"),T.ERROR)},m=async()=>{(E.value||w.value)&&(o.model.notices=[]),await o.actionUpdateDocument({id:t.params.id,body:o.model}),await _.actionCountList(),D(null,n("changed"),T.SUCCESS),await b.replace({name:ve,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},g=()=>{i.formType===L?V():m()};return Ne(async()=>{t.params.id&&t.query.trip_notice_id&&t.params.document_sub_type===W.BUSINESS_TRIP_DECREE_LOCAL?await o.actionGetDocumentDetailForUpdateForCustomUse(t.params.id,t.query.trip_notice_id):t.params.id?await o.actionGetDocumentDetailForUpdate(t.params.id):E.value&&await o.actionGetDocumentDetailForUpdate(t.query.compose_id,!0)}),qe(()=>{$e(o.model)}),(d,r)=>{const f=fe,c=se,x=Ie,N=Ke,j=Ce,k=ae;return e(o).detailLoading?($(),B(f,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:U.value},{content:u(()=>[l(xe,{"onEmit:preview":C,"onEmit:clearForm":S},{default:u(()=>[l(k,null,{default:u(()=>[l(c,{"col-class":"w-1/2"},{default:u(()=>[l(me,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=v=>e(a).__curator.$model=v),error:e(a).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(a).__employees.$model,"onUpdate:modelValue":r[1]||(r[1]=v=>e(a).__employees.$model=v),error:e(a).__employees,label:"employees",placeholder:"select-employees",required:"",disabled:E.value||w.value},null,8,["modelValue","error","disabled"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(Mo,{modelValue:e(a).__companies.$model,"onUpdate:modelValue":r[2]||(r[2]=v=>e(a).__companies.$model=v),error:e(a).__companies,"text-truncate":"",disabled:E.value||w.value},null,8,["modelValue","error","disabled"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(ko,{modelValue:e(a).__tags.$model,"onUpdate:modelValue":r[3]||(r[3]=v=>e(a).__tags.$model=v),error:e(a).__tags,"api-url":"tags","api-params":{document_sub_type:e(t).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:u(({value:v})=>[Je(J(v.name),1)]),option:u(({value:v})=>[l(e(Ee),{title:v.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[M("div",Vt,[l(x,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[r[4]||(r[4]=v=>e(a).start_date.$model=v),r[5]||(r[5]=v=>e(a).start_date.$model=e(ce)(v))],error:e(a).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2",disabled:E.value||w.value},null,8,["modelValue","error","min-date","disabled"]),l(x,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[r[6]||(r[6]=v=>e(a).end_date.$model=v),r[7]||(r[7]=v=>e(a).end_date.$model=e(ce)(v))],error:e(a).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2",disabled:E.value||w.value},null,8,["modelValue","error","min-date","disabled"])])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(N,{modelValue:e(a).route.$model,"onUpdate:modelValue":r[8]||(r[8]=v=>e(a).route.$model=v),error:e(a).route,options:e(Co),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type",disabled:E.value||w.value},null,8,["modelValue","error","options","disabled"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":r[9]||(r[9]=v=>e(o).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":r[10]||(r[10]=v=>e(a).__signers.$model=v),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(j,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":r[11]||(r[11]=v=>e(a).short_description.$model=v),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(c,{"col-class":"w-full"},{default:u(()=>[l(ke,{modelValue:e(a).content.$model,"onUpdate:modelValue":r[12]||(r[12]=v=>e(a).content.$model=v),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":A},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:q.value,"onUpdate:modelValue":r[13]||(r[13]=v=>q.value=v),"send-button-loading":e(o).buttonLoading,"onEmit:send":g},{content:u(()=>[e(t).params.document_sub_type===e(W).BUSINESS_TRIP_DECREE_LOCAL?($(),B(e(Io),{key:0,"compose-model":e(o).model,preview:!0},null,8,["compose-model"])):e(t).params.document_sub_type===e(W).BUSINESS_TRIP_ORDER_LOCAL?($(),B(e(Fo),{key:1,"compose-model":e(o).model,preview:!0},null,8,["compose-model"])):($(),B(e(jo),{key:2,"compose-model":e(o).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},fn={__name:"OrderForm",props:{formType:{type:String,default:L}},setup(p){const i=p,n=Vo(),t=ne(),b=X(),s=te(),o=oe(),_=H(n.rules,n.model),{t:a}=K(),q=z(!1),U=async()=>{var m,g,d,r;await _.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=Q(n.model.__approvers),n.model.curator=(g=(m=n==null?void 0:n.model)==null?void 0:m.__curator)==null?void 0:g.user_id,n.model.sender=(r=(d=b==null?void 0:b.currentUser)==null?void 0:d.top_level_department)==null?void 0:r.id,n.model.files=n.model.__files.map(f=>({id:f.id})),n.model.document_type=s.params.document_type,n.model.document_sub_type=s.params.document_sub_type,n.model.journal=Z.ORDERS_PROTOCOLS,n.model.register_date=ce(n.model.register_date),n.model.__negotiators.forEach(f=>{n.model.signers.push(f.hasOwnProperty("user")?{id:f.id,user:f.user.id,type:Oe.NEGOTIATOR}:{user:f.id,type:Oe.NEGOTIATOR})}),s.query.compose_id&&(n.model.trip_notice_id=s.query.compose_id),q.value=!0)},E=()=>{},w=async()=>{try{const V=await n.actionCreateDocument(n.model);await t.actionCountList(),V&&(q.value=!1,D(null,a("document-sent"),T.SUCCESS),await o.replace({name:he,query:{document_type:Y.ORDER}}))}catch{D(null,a("error-occurred"),T.ERROR)}},C=async()=>{try{const V=await n.actionUpdateDocument({id:s.params.id,body:n.model});await t.actionCountList(),D(null,a("changed"),T.SUCCESS),await o.replace({name:ve,params:{id:s.params.id,document_type:s.params.document_type,document_sub_type:s.params.document_sub_type}})}catch{D(null,a("error-occurred"),T.ERROR)}},S=()=>{i.formType===L?w():C()},A=V=>{n.model.__files=[],V.forEach(m=>{n.model.__files.push(m)})};return We(async()=>{s.params.id&&await n.actionGetDocumentDetailForUpdate(s.params.id)}),qe(()=>{$e(n.model)}),(V,m)=>{const g=fe,d=se,r=Ce,f=Ie,c=ae;return e(n).detailLoading?($(),B(g,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:i.formType===e(L)?"create-order":"update-order"},{content:u(()=>[l(xe,{"onEmit:preview":U,"onEmit:clearForm":E},{default:u(()=>[l(c,null,{default:u(()=>[l(d,{"col-class":"w-1/2"},{default:u(()=>[l(me,{modelValue:e(_).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=x=>e(_).__curator.$model=x),error:e(_).__curator,"api-url":"top-signers","api-params":{doc_types:e(s).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(r,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":m[1]||(m[1]=x=>e(_).register_number.$model=x),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(f,{modelValue:e(_).register_date.$model,"onUpdate:modelValue":m[2]||(m[2]=x=>e(_).register_date.$model=x),error:e(_).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":m[3]||(m[3]=x=>e(n).model.__approvers=x),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(_).__negotiators.$model,"onUpdate:modelValue":m[4]||(m[4]=x=>e(_).__negotiators.$model=x),error:e(_).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:u(()=>[l(ke,{modelValue:e(_).content.$model,"onUpdate:modelValue":m[5]||(m[5]=x=>e(_).content.$model=x),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":A},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:q.value,"onUpdate:modelValue":m[6]||(m[6]=x=>q.value=x),"send-button-loading":e(n).buttonLoading,"onEmit:send":S},{content:u(()=>[l(e(zo),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},$t=_e("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:i,error:n}=await ge(ye,p);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:p,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:p,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:i}=await re(p);de(this.model,i),this.model.__curator=await ue([],i.curator.id,!1),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers)}catch{}finally{this.detailLoading=!1}}}}),bn={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:L}},setup(p){const i=p,{t:n}=K(),t=te(),b=oe(),s=X(),o=$t(),_=ne();Le();const a=z(!1),q=H(o.rules,o.model),U=async()=>{var m,g,d,r;await q.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=Q(o.model.__approvers),o.model.signers=Q(o.model.__signers),o.model.curator=(g=(m=o==null?void 0:o.model)==null?void 0:m.__curator)==null?void 0:g.user_id,o.model.journal=Z.INNER,o.model.company=s.currentUser.company.id,o.model.sender=(r=(d=s==null?void 0:s.currentUser)==null?void 0:d.top_level_department)==null?void 0:r.id,o.model.files=o.model.__files.map(f=>({id:f.id})),o.model.document_type=t.params.document_type,o.model.document_sub_type=t.params.document_sub_type,a.value=!0)},E=()=>{},w=V=>{o.model.__files=[],V.forEach(m=>{o.model.__files.push(m)})},C=async()=>{const V=await o.actionCreateDocument(o.model);await _.actionCountList(),V?(a.value=!1,D(null,n("document-sent"),T.SUCCESS),await b.replace({name:he,query:{document_type:Y.NOTICE}})):D(null,n("error-occurred"),T.ERROR)},S=async()=>{await o.actionUpdateDocument({id:t.params.id,body:o.model}),await _.actionCountList(),D(null,n("changed"),T.SUCCESS),await b.replace({name:ve,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},A=()=>{i.formType===L?C():S()};return Ne(async()=>{t.params.id&&await o.actionGetDocumentDetailForUpdate(t.params.id)}),qe(()=>{$e(o.model)}),(V,m)=>{const g=fe,d=se,r=Ce,f=ae;return e(o).detailLoading?($(),B(g,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:i.formType===e(L)?"create-notice":"update-notice"},{content:u(()=>[l(xe,{"onEmit:preview":U,"onEmit:clearForm":E},{default:u(()=>[l(f,null,{default:u(()=>[l(d,{"col-class":"w-1/2"},{default:u(()=>[l(me,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":m[0]||(m[0]=c=>e(q).__curator.$model=c),error:e(q).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(r,{modelValue:e(q).short_description.$model,"onUpdate:modelValue":m[1]||(m[1]=c=>e(q).short_description.$model=c),error:e(q).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":m[2]||(m[2]=c=>e(o).model.__approvers=c),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(d,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":m[3]||(m[3]=c=>e(q).__signers.$model=c),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(d,{"col-class":"w-full"},{default:u(()=>[l(ke,{modelValue:e(q).content.$model,"onUpdate:modelValue":m[4]||(m[4]=c=>e(q).content.$model=c),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":w},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:a.value,"onUpdate:modelValue":m[5]||(m[5]=c=>a.value=c),"send-button-loading":e(o).buttonLoading,"onEmit:send":A},{content:u(()=>[l(e(Bo),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},xt=_e("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(p){const i={...p};delete i.bookings,delete i.notices,delete i.trip_plans,this.buttonLoading=!0;const{response:n,error:t}=await ge(ye,i);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:i}){const n={...i};delete n.bookings,delete n.notices,delete n.trip_plans;try{this.buttonLoading=!0;const{data:t}=await we({id:p,body:n});return Promise.resolve(t)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p,i){try{this.detailLoading=!0;const{data:n}=await re(p);de(this.model,n),this.model.__curator=await ue([],n.curator.id,!1),this.model.__approvers=await I(n.approvers),this.model.__signers=await I(n.signers)}catch{}finally{this.detailLoading=!1}}}}),gn={__name:"DecreeForm",props:{formType:{type:String,default:L}},setup(p){const i=p,{t:n}=K(),t=te(),b=oe(),s=X(),o=ne();Le();const _=z(!1),a=xt(),q=ho(),U=H(a.rules,a.model),E=async()=>{var d,r,f,c;await U.value.$validate()&&(a.model.approvers=[],a.model.signers=[],a.model.approvers=Q(a.model.__approvers),a.model.signers=Q(a.model.__signers),a.model.curator=(r=(d=a==null?void 0:a.model)==null?void 0:d.__curator)==null?void 0:r.user_id,a.model.journal=Z.ORDERS_PROTOCOLS,a.model.company=s.currentUser.company.id,a.model.sender=(c=(f=s==null?void 0:s.currentUser)==null?void 0:f.top_level_department)==null?void 0:c.id,a.model.files=a.model.__files.map(x=>({id:x.id})),a.model.document_type=t.params.document_type,a.model.document_sub_type=t.params.document_sub_type,t.query.compose_id&&(a.model.trip_notice_id=t.query.compose_id),_.value=!0)},w=()=>{},C=g=>{a.model.__files=[],g.forEach(d=>{a.model.__files.push(d)})},S=async()=>{const g=await a.actionCreateDocument(a.model);await o.actionCountList(),g?(_.value=!1,D(null,n("document-sent"),T.SUCCESS),await b.replace({name:he,query:{document_type:t.params.document_type}})):D(null,n("error-occurred"),T.ERROR)},A=async()=>{await a.actionUpdateDocument({id:t.params.id,body:a.model}),await o.actionCountList(),D(null,n("changed"),T.SUCCESS),await b.replace({name:ve,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})},V=()=>{i.formType===L?S():A()},m=async g=>{const{data:d}=await q.actionGetDocumentDetail(g);a.model.notices=d==null?void 0:d.notices,a.model.trip_plans=d==null?void 0:d.trip_plans,a.model.bookings=d==null?void 0:d.bookings,a.model.short_description=d==null?void 0:d.short_description,a.model.trip_notice_register_number=d==null?void 0:d.register_number};return Ne(async()=>{i.formType===L&&t.query.compose_id?await m(t.query.compose_id):i.formType===Ae&&t.query.trip_notice_id&&t.params.id?(await a.actionGetDocumentDetailForUpdate(t.params.id,null),await m(t.query.trip_notice_id)):i.formType===Ae&&t.params.id&&await a.actionGetDocumentDetailForUpdate(t.params.id,null)}),qe(()=>{$e(a.model)}),(g,d)=>{const r=fe,f=se,c=Ce,x=ae;return e(a).detailLoading?($(),B(r,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:i.formType===e(L)?"create-decree":"update-decree"},{content:u(()=>[l(xe,{"onEmit:preview":E,"onEmit:clearForm":w},{default:u(()=>[l(x,null,{default:u(()=>[l(f,{"col-class":"w-1/2"},{default:u(()=>[l(me,{modelValue:e(U).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=N=>e(U).__curator.$model=N),error:e(U).__curator,"api-url":"top-signers","api-params":{doc_types:e(t).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:u(()=>[l(c,{modelValue:e(U).short_description.$model,"onUpdate:modelValue":d[1]||(d[1]=N=>e(U).short_description.$model=N),error:e(U).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":d[2]||(d[2]=N=>e(a).model.__approvers=N),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(f,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(U).__signers.$model,"onUpdate:modelValue":d[3]||(d[3]=N=>e(U).__signers.$model=N),error:e(U).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(f,{"col-class":"w-full"},{default:u(()=>[l(ke,{modelValue:e(U).content.$model,"onUpdate:modelValue":d[4]||(d[4]=N=>e(U).content.$model=N),error:e(U).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":C},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:_.value,"onUpdate:modelValue":d[5]||(d[5]=N=>_.value=N),"send-button-loading":e(a).buttonLoading,"onEmit:send":V},{content:u(()=>[l(e(Go),{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Ut=_e("power-of-attorney",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,files:[],document_type:null,document_sub_type:null,journal:null,parent:null,signers:[],start_date:null,end_date:null,sender:null,short_description:null,user:null,__approvers:[],__curator:null,__files:[],__parent:null,__signers:[],__user:null},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",h)},start_date:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},__user:{required:y.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:i,error:n}=await ge(ye,p);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:i}=await re(p);return de(this.model,i),this.model.__curator=await ue([],i.curator.id,!1),this.model.__approvers=await I(i.approvers),this.model.__signers=await I(i.signers),this.model.__user=await je("users/personal-information",[],!1,i.user.id),this.model.__parent=i.parent,Promise.resolve(i)}catch{}finally{this.detailLoading=!1}},async actionUpdateDocument({id:p,body:i}){try{this.buttonLoading=!0;const{data:n}=await we({id:p,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}}}}),wn={__name:"PowerOfAttorneyForm",props:{formType:{type:String,default:L}},setup(p){const i=p,n=te(),t=oe(),b=X(),s=Ut();ho();const o=ne(),{t:_}=K(),a=H(s.rules,s.model),q=z(!1),U=z([]),E=ie(()=>i.formType===L?"create-poa":"update-poa"),w=ie(()=>s.model.start_date?new Date(s.model.start_date):new Date),C=async()=>{var r,f,c,x,N,j,k,v,O,G,P,eo,oo,to,lo,no,ro,ao,so,io;if(await a.value.$validate()){if(s.model.approvers=[],s.model.signers=[],s.model.approvers=Q(s.model.__approvers),s.model.signers=Q(s.model.__signers),s.model.curator=(f=(r=s==null?void 0:s.model)==null?void 0:r.__curator)==null?void 0:f.user_id,s.model.user=(x=(c=s==null?void 0:s.model)==null?void 0:c.__user)==null?void 0:x.id,s.model.journal=Z.POWER_OF_ATTORNEY,s.model.company=(j=(N=b.currentUser)==null?void 0:N.company)==null?void 0:j.id,s.model.sender=(v=(k=b==null?void 0:b.currentUser)==null?void 0:k.top_level_department)==null?void 0:v.id,s.model.document_type=n.params.document_type,s.model.document_sub_type=n.params.document_sub_type,s.model.content=".",s.model.parent=(G=(O=s.model)==null?void 0:O.__parent)==null?void 0:G.id,!((eo=(P=s==null?void 0:s.model)==null?void 0:P.__user)!=null&&eo.passport_seria||(to=(oo=s==null?void 0:s.model)==null?void 0:oo.__user)!=null&&to.passport_number||(no=(lo=s==null?void 0:s.model)==null?void 0:lo.__user)!=null&&no.passport_issue_date||(ao=(ro=s==null?void 0:s.model)==null?void 0:ro.__user)!=null&&ao.passport_issued_by)){D(null,`${(io=(so=s.model)==null?void 0:so.__user)==null?void 0:io.full_name}: ${_("passport-details-error")}`,T.WARNING);return}q.value=!0}},S=()=>{},A=async()=>{const d=await s.actionCreateDocument(s.model);await o.actionCountList(),d?(q.value=!1,D(null,_("document-sent"),T.SUCCESS),await t.replace({name:he,query:{document_type:Y.POWER_OF_ATTORNEY}})):D(null,_("error-occurred"),T.ERROR)},V=async()=>{await s.actionUpdateDocument({id:n.params.id,body:s.model}),await o.actionCountList(),D(null,_("changed"),T.SUCCESS),await t.replace({name:ve,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},m=()=>{i.formType===L?A():V()},g=async d=>{const{data:r}=await Qo({user:d.id,document_sub_type:n.params.document_sub_type,status:5});U.value=r.results};return Ne(async()=>{if(n.params.id){const d=await s.actionGetDocumentDetailForUpdate(n.params.id);d.parent&&(U.value=[d.parent])}}),qe(()=>{$e(s.model)}),(d,r)=>{const f=fe,c=se,x=Ie,N=Ke,j=ae;return e(s).detailLoading?($(),B(f,{key:0})):($(),R(ee,{key:1},[l(e(be),{title:E.value},{content:u(()=>[l(xe,{"onEmit:preview":C,"onEmit:clearForm":S},{default:u(()=>[l(j,null,{default:u(()=>[l(c,{"col-class":"w-1/2"},{default:u(()=>[l(me,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=k=>e(a).__curator.$model=k),error:e(a).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"bank-leader",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(me,{modelValue:e(a).__user.$model,"onUpdate:modelValue":r[1]||(r[1]=k=>e(a).__user.$model=k),error:e(a).__user,"api-url":"users/personal-information",label:"whom",required:"",placeholder:"select-employee","onEmit:change":r[2]||(r[2]=k=>g(k))},null,8,["modelValue","error"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(x,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[r[3]||(r[3]=k=>e(a).start_date.$model=k),r[4]||(r[4]=k=>e(a).start_date.$model=e(ce)(k))],error:e(a).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(x,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[r[5]||(r[5]=k=>e(a).end_date.$model=k),r[6]||(r[6]=k=>e(a).end_date.$model=e(ce)(k))],error:e(a).end_date,"min-date":w.value,required:"",label:"end-date",placeholder:"choose-end-time"},null,8,["modelValue","error","min-date"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":r[7]||(r[7]=k=>e(s).model.__approvers=k),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":r[8]||(r[8]=k=>e(a).__signers.$model=k),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(c,{"col-class":"w-1/2"},{default:u(()=>[l(N,{modelValue:e(s).model.__parent,"onUpdate:modelValue":r[9]||(r[9]=k=>e(s).model.__parent=k),options:U.value,"option-label":"register_number",label:"old-poa",placeholder:"select-old-poa"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),l(Ve,{modelValue:q.value,"onUpdate:modelValue":r[10]||(r[10]=k=>q.value=k),"send-button-loading":e(s).buttonLoading,"onEmit:send":m},{content:u(()=>[l(Yo,{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Et={class:"base-stepper-component flex items-center select-none"},Ct=["onClick"],St={key:0,class:"flex h-1 bg-greyscale-200 w-8"},Lt={__name:"BaseStepper",props:{items:{type:Array,default:()=>[]}},emits:["emit:stepClick"],setup(p,{emit:i}){const{t:n}=K(),t=b=>{i("emit:stepClick",b)};return(b,s)=>{const o=pe;return $(),R("div",Et,[($(!0),R(ee,null,Pe(p.items,(_,a)=>($(),R("div",{key:_.id,class:"flex items-center"},[M("div",{class:De(["flex gap-x-[6px] items-center py-2 px-4 border rounded-[80px] text-base font-semibold cursor-pointer bg-greyscale-50",_.active?"border-primary-500 text-primary-900":"border-greyscale-70 text-greyscale-500"]),onClick:q=>t(_)},[l(o,{icon:_.icon,class:De(_.active?"text-primary-500":"text-greyscale-400")},null,8,["icon","class"]),M("span",null,J(e(n)(_.label)),1)],10,Ct),a<p.items.length-1?($(),R("div",St)):Ue("",!0)]))),128))])}}},Fe=_e("sd-business-trip-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},decreeModel:{content:null,__files:[]},decreeRules:{content:{required:y.withMessage("Поле не должен быть пустым",h)}},rules:{content:{required:y.withMessage("Поле не должен быть пустым",h)},__curator:{required:y.withMessage("Поле не должен быть пустым",h)},__signers:{required:y.withMessage("Поле не должен быть пустым",h)},short_description:{required:y.withMessage("Поле не должен быть пустым",h)},__groups:{$each:y.forEach({__users:{required:y.withMessage("Поле не должен быть пустым",h)},__tags:{required:y.withMessage("Поле не должен быть пустым",h)},__regions:{required:y.withMessage("Поле не должен быть пустым",h)},__start_date:{required:y.withMessage("Поле не должен быть пустым",h)},__end_date:{required:y.withMessage("Поле не должен быть пустым",h)}})}},trip_plan_model:{trip_plans:[{users:null,text:null}]},trip_plan_rules:{trip_plans:{$each:y.forEach({users:{required:y.withMessage("Поле не должен быть пустым",h)},text:{required:y.withMessage("Поле не должен быть пустым",h)}})}},booking_model:{bookings:[{type:le,route:Re,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},booking_model_rules:{bookings:{$each:y.forEach({segments:{$each:y.forEach({departure_city:{required:y.withMessage("Поле не должен быть пустым",h)},arrival_city:{required:y.withMessage("Поле не должен быть пустым",h)},date:{required:y.withMessage("Поле не должен быть пустым",h)},time:{required:y.withMessage("Поле не должен быть пустым",h)},segment_class:{required:y.withMessage("Поле не должен быть пустым",h)}})},passengers:{required:y.withMessage("Поле не должен быть пустым",h)}})}},segment:{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},stepperItems:[{id:1,label:"trip-info",icon:So,active:!0,value:Me},{id:2,label:"work-plan",icon:co,active:!1,value:He},{id:3,label:"route",icon:Lo,active:!1,value:Ze},{id:4,label:"decree",icon:co,active:!0,value:Ge}],routeTabItems:[{id:1,title:"airplane",icon:po,value:Re},{id:2,title:"train",icon:uo,value:Zo},{id:3,title:"taxi",icon:mo,value:vo}],routeTypeTabItems:[{id:1,title:"there-back",icon:po,value:le},{id:2,title:"complex-route",icon:uo,value:Xe},{id:3,title:"one-way",icon:mo,value:et}]}),actions:{async actionCreateDocument(p){const i=fo(p);this.buttonLoading=!0;const{response:n,error:t}=await ge(ye,i);return n?(this.buttonLoading=!1,await ne().actionCountList(),Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(t))},async actionUpdateDocument({id:p,body:i}){const n=await fo(i);try{this.buttonLoading=!0;const{data:t}=await we({id:p,body:n});return Promise.resolve(t)}catch(t){return Promise.reject(t)}finally{await ne().actionCountList(),this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){var i,n;try{this.detailLoading=!0;const{data:t}=await re(p),b=await Xo(t.id);this.decreeModel=(n=(i=b==null?void 0:b.data)==null?void 0:i.to_composes[0])==null?void 0:n.from_compose,de(this.model,t),this.model.__curator=await ue([],t.curator.id,!1),this.model.__signers=await I(t.signers),this.model.__approvers=await I(t.approvers);const s=Object.values(t.notices.reduce((o,_)=>{const a=_.group_id;return o[a]=o[a]||{group_id:a,items:[]},o[a].items.push(_),o},{}));this.model.__groups=await Promise.all(s.map(async o=>{const _=await Promise.all(o.items.map(w=>I([],w.user.id,!1))),a=await Qe(o.items[0].tags),q=await je("regions",o.items[0].locations),U=o.items[0].start_date,E=o.items[0].end_date;return{__users:_,__tags:a,__regions:q,__start_date:U,__end_date:E}})),this.trip_plan_model.trip_plans=await Promise.all(t.trip_plans.map(async(o,_)=>({...o,users:await I(o.users)}))),this.booking_model.bookings=await Promise.all(t.bookings.map(async o=>({type:o.type,route:o.route,segments:await Promise.all(o.segments.map(async _=>({departure_city:await je("regions",[],!1,_.departure_city.id),arrival_city:await je("regions",[],!1,_.arrival_city.id),segment_class:await ot.find(a=>a.value===_.segment_class),date:ce(_.departure_date),time:await Wo(_.departure_date,_.departure_end_date)}))),passengers:await I(o.passengers)})))}catch{}finally{this.detailLoading=!1}},actionAddGroupBlock(){this.model.__groups.push({__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null})},actionDeleteGroupBlock(p){this.model.__groups.splice(p,1)},async actionStepClick(p,i,n){await p.replace({query:{...i.query,step:n}}),this.stepperItems.forEach(b=>b.active=b.value===n),await Ro();const t=document.querySelector(".document-view-aside");t&&t.scrollTo({top:0,behavior:"smooth"})},actionAddWorkPlanRow(){this.trip_plan_model.trip_plans.push({users:null,text:null})},actionDeleteWorkPlanRow(p){this.trip_plan_model.trip_plans.splice(p,1)},actionAddRouteRow(){this.booking_model.bookings.push({type:le,route:Re,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null})},actionDeleteRouteRow(p){this.booking_model.bookings.splice(p,1)},actionChangeRouteSegment(p,i){const n=()=>({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null});this.booking_model.bookings[i].segments=p===le?[n(),n()]:[n()]},async actionAddRouteLine(p){this.booking_model.bookings[p].segments.push({departure_city:null,arrival_city:null,date:null,time:null,segment_class:null})},async actionDeleteRouteLine(p,i){this.booking_model.bookings[p].segments.splice(i,1)},actionResetBTModel(){this.model={approvers:[],bookings:null,company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,notices:[],start_date:null,end_date:null,short_description:null,sender:null,signers:[],files:[],trip_plans:null,__groups:[{__users:null,__tags:null,__regions:null,__start_date:null,__end_date:null}],__curator:null,__approvers:[],__signers:[],__files:[]},this.trip_plan_model={trip_plans:[{users:null,text:null}]},this.booking_model={bookings:[{type:le,route:Re,segments:[{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null},{departure_city:null,arrival_city:null,date:null,time:null,segment_class:null}],passengers:null}]},this.decreeModel={content:null,__files:[]}}}}),Rt={class:"trip-info-components"},Tt={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Dt={class:"flex justify-between"},Ot={class:"text-base text-primary-900 font-semibold mb-1"},Pt=["onClick"],Mt={class:"flex w-full gap-x-4"},At={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Nt={class:"text-base text-primary-900 font-semibold mb-2"},It={class:"flex items-center justify-between"},wo={__name:"TripInfo",props:{onStepClick:{type:Function,default:()=>{}}},setup(p,{expose:i}){const n=te(),t=oe(),b=Fe(),{t:s}=K(),o=H(b.rules,b.model),_=z(!1),a=E=>{b.model.__files=[],E.forEach(w=>{b.model.__files.push(w)})},q=()=>{b.actionAddGroupBlock()},U=async E=>{const w=await o.value.$validate();if(_.value=!0,!w){D(null,s("fill-required-fields"),T.WARNING);return}await b.actionStepClick(t,n,E)};return i({stepClick:U}),(E,w)=>{const C=se,S=Ce,A=pe,V=ko,m=Ie,g=ae,d=Se;return $(),R("div",Rt,[l(g,null,{default:u(()=>[l(C,{"col-class":"w-1/2"},{default:u(()=>[l(me,{modelValue:e(o).__curator.$model,"onUpdate:modelValue":w[0]||(w[0]=r=>e(o).__curator.$model=r),error:e(o).__curator,"api-url":"top-signers","api-params":{doc_types:e(n).params.document_type},label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error","api-params"])]),_:1}),l(C,{"col-class":"w-1/2"},{default:u(()=>[l(S,{modelValue:e(o).short_description.$model,"onUpdate:modelValue":w[1]||(w[1]=r=>e(o).short_description.$model=r),error:e(o).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),l(C,{"col-class":"w-full mb-2 flex flex-col gap-y-3"},{default:u(()=>[($(!0),R(ee,null,Pe(e(b).model.__groups,(r,f)=>($(),R("div",Tt,[M("div",Dt,[M("span",Ot,J(e(s)("group"))+"-"+J(f+1),1),f!==0?($(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 hover:bg-critic-100 rounded-lg w-7 h-7 cursor-pointer",onClick:c=>e(b).actionDeleteGroupBlock(f)},[l(A,{icon:e(ze),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Pt)):Ue("",!0)]),l(g,null,{default:u(()=>[l(C,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:r.__users,"onUpdate:modelValue":c=>r.__users=c,error:e(o).__groups.$each.$response.$data[f].__users,label:"who-is-going-to-business-trip",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(C,{"col-class":"w-1/2"},{default:u(()=>[l(V,{modelValue:r.__regions,"onUpdate:modelValue":c=>r.__regions=c,error:e(o).__groups.$each.$response.$data[f].__regions,"api-url":"regions","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-place",type:"department",placeholder:"select-trip-place",required:"","show-nested-error":_.value},{chip:u(({value:c})=>[Je(J(c.name),1)]),option:u(({value:c})=>[l(e(Ee),{title:c.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(C,{"col-class":"w-1/2"},{default:u(()=>[l(V,{modelValue:r.__tags,"onUpdate:modelValue":c=>r.__tags=c,error:e(o).__groups.$each.$response.$data[f].__tags,"api-url":"tags","api-params":{document_sub_type:e(n).params.document_sub_type,page_size:500},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"trip-purpose",type:"department",placeholder:"select-targets",required:"","show-nested-error":_.value},{chip:u(({value:c})=>[Je(J(c.name),1)]),option:u(({value:c})=>[l(e(Ee),{title:c.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","api-params","show-nested-error"])]),_:2},1024),l(C,{"col-class":"w-1/2"},{default:u(()=>[M("div",Mt,[l(m,{modelValue:r.__start_date,"onUpdate:modelValue":[c=>r.__start_date=c,c=>r.__start_date=e(ce)(c)],error:e(o).__groups.$each.$response.$data[f].__start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"]),l(m,{modelValue:r.__end_date,"onUpdate:modelValue":[c=>r.__end_date=c,c=>r.__end_date=e(ce)(c)],error:e(o).__groups.$each.$response.$data[f].__end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])])]),_:2},1024)]),_:2},1024)]))),256)),l(d,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-[195px]",onClick:q},null,8,["icon-left"])]),_:1}),l(C,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(b).model.__approvers,"onUpdate:modelValue":w[2]||(w[2]=r=>e(b).model.__approvers=r),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),l(C,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:e(o).__signers.$model,"onUpdate:modelValue":w[3]||(w[3]=r=>e(o).__signers.$model=r),error:e(o).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),l(C,{"col-class":"w-full"},{default:u(()=>[M("div",At,[M("div",Nt,J(e(s)("notice")),1),l(ke,{modelValue:e(o).content.$model,"onUpdate:modelValue":w[4]||(w[4]=r=>e(o).content.$model=r),error:e(o).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(b).model.__files,"onEmit:fileUpload":a},null,8,["modelValue","error","files"])])]),_:1})]),_:1}),M("div",It,[l(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),l(d,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[5]||(w[5]=r=>U(e(He)))})])])}}},Ft={class:"work-plan-component"},jt={class:"flex flex-col gap-y-3"},zt={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},Bt={class:"flex justify-between"},Gt={class:"text-base text-primary-900 font-semibold mb-1"},Yt=["onClick"],Wt={class:"flex items-center justify-between mt-10"},Ht={class:"flex items-center gap-x-1"},Kt={__name:"WorkPlan",setup(p,{expose:i}){const{t:n}=K(),t=te(),b=oe(),s=Fe(),o=H(s.trip_plan_rules,s.trip_plan_model),_=z(!1),a=ie(()=>{const E=new Set;return s.model.__groups.reduce((w,C)=>C.__users&&Array.isArray(C.__users)?w.concat(C.__users):w,[]).filter(w=>E.has(w.id)?!1:(E.add(w.id),!0))}),q=async E=>{const w=await o.value.$validate();if(_.value=!0,!w){D(null,n("fill-required-fields"),T.WARNING);return}await s.actionStepClick(b,t,E)},U=()=>{s.actionAddWorkPlanRow(),_.value=!1};return i({stepClick:q}),(E,w)=>{const C=pe,S=rt,A=se,V=ae,m=Se;return $(),R("div",Ft,[M("div",jt,[($(!0),R(ee,null,Pe(e(s).trip_plan_model.trip_plans,(g,d)=>($(),R("div",zt,[M("div",Bt,[M("span",Gt,J(e(n)("plan"))+"-"+J(d+1),1),d!==0?($(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:r=>e(s).actionDeleteWorkPlanRow(d)},[l(C,{icon:e(ze),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])],8,Yt)):Ue("",!0)]),l(V,null,{default:u(()=>[l(A,{"col-class":"w-1/2"},{default:u(()=>[l(S,{modelValue:g.text,"onUpdate:modelValue":r=>g.text=r,error:e(o).trip_plans.$each.$response.$data[d].text,required:"",label:"work-plan-content",placeholder:"enter-work-plan-content","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"])]),_:2},1024),l(A,{"col-class":"w-1/2"},{default:u(()=>[l(F,{modelValue:g.users,"onUpdate:modelValue":r=>g.users=r,options:a.value,error:e(o).trip_plans.$each.$response.$data[d].users,label:"employees",placeholder:"select-employees",required:"","show-nested-error":_.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256))]),l(m,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"mt-3 rounded-[10px]",onClick:U},null,8,["icon-left"]),M("div",Wt,[l(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),M("div",Ht,[l(m,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[0]||(w[0]=g=>q(e(Me)))}),l(m,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:w[1]||(w[1]=g=>q(e(Ze)))})])])])}}};const Jt={class:"base-time-picker"},Qt={__name:"BaseTimePicker",props:{modelValue:{type:[Object,Array]},label:{type:String,default:null},required:{type:Boolean},range:{type:Boolean,default:!1},placeholder:{type:String,default:"select-time"},error:{type:Object,default:()=>({$error:!1,$errors:[]})},showNestedError:{type:Boolean,default:!0}},setup(p){const i=p,n=Ye(i,"modelValue"),{t}=K();return(b,s)=>{var a;const o=pt,_=pe;return $(),R("div",Jt,[l(o,{label:i.label,required:i.required},null,8,["label","required"]),l(e(ut),{modelValue:e(n),"onUpdate:modelValue":s[0]||(s[0]=q=>Te(n)?n.value=q:null),"time-picker":"",range:p.range,"cancel-text":e(t)("cancel"),"select-text":e(t)("select"),placeholder:e(t)(p.placeholder),ref:"datePicker",class:De({"input-error":((a=p.error)==null?void 0:a.$error)&&p.showNestedError})},{"input-icon":u(()=>[l(_,{icon:e(To),class:"text-greyscale-500 ml-3"},null,8,["icon"])]),_:1},8,["modelValue","range","cancel-text","select-text","placeholder","class"])])}}},Xt={class:"route-component flex flex-col gap-y-3"},Zt={class:"border-[1.5px] border-greyscale-200 rounded-2xl px-5 py-4"},el={class:"flex items-center justify-between"},ol={class:"flex items-center gap-x-4"},tl={class:"text-base text-primary-900 font-semibold mb-1"},ll={class:"flex items-center rounded-lg p-2 gap-x-2 bg-warning-50 border border-warning-100 mt-3 mb-2"},nl={class:"text-xs text-greyscale-900 font-medium"},rl=["onClick"],al=["onClick"],sl={class:"text-sm text-primary-500 font-semibold"},il={class:"flex items-center justify-between mt-10"},dl={class:"flex items-center gap-x-1"},cl={__name:"Route",props:{formType:{type:String,default:L}},emits:["emit:onValidateAndSend"],setup(p,{expose:i,emit:n}){const{t}=K(),b=te(),s=oe(),o=Fe(),_=Le();X(),ne();const a=H(o.booking_model_rules,o.booking_model);z(!1);const q=z(!1),U=ie(()=>{const d=new Set;return o.model.__groups.reduce((r,f)=>f.__users&&Array.isArray(f.__users)?r.concat(f.__users):r,[]).filter(r=>d.has(r.id)?!1:(d.add(r.id),!0))}),E=d=>{o.routeTabItems.forEach(r=>r.active=r.id===d.id)},w=(d,r)=>{o.routeTypeTabItems.forEach(f=>f.active=f.id===d.id),o.actionChangeRouteSegment(d.value,r)},C=async d=>{const r=await a.value.$validate();if(q.value=!0,!r){D(null,t("fill-required-fields"),T.WARNING);return}await o.actionStepClick(s,b,d)},S=()=>{o.actionAddRouteRow(),q.value=!1},A=(d,r,f,c)=>{c.type===le&&(o.booking_model.bookings[r].segments[f+1].arrival_city=d)},V=(d,r,f,c)=>{c.type===le&&(o.booking_model.bookings[r].segments[f+1].departure_city=d)},m=(d,r,f,c)=>{c.type===le&&(o.booking_model.bookings[r].segments[f+1].segment_class=d)},g=()=>{C(Ge),n("emit:onValidateAndSend")};return i({stepClick:C}),(d,r)=>{const f=Ke,c=se,x=Ie,N=ae,j=Se;return $(),R("div",Xt,[($(!0),R(ee,null,Pe(e(o).booking_model.bookings,(k,v)=>($(),R("div",Zt,[M("div",el,[M("div",ol,[M("span",tl,J(e(t)("route"))+"-"+J(v+1),1),l(go,{modelValue:k.route,"onUpdate:modelValue":O=>k.route=O,items:e(o).routeTabItems,"onEmit:onChange":r[0]||(r[0]=O=>E(O))},null,8,["modelValue","onUpdate:modelValue","items"]),l(go,{modelValue:k.type,"onUpdate:modelValue":O=>k.type=O,items:e(o).routeTypeTabItems,"onEmit:onChange":O=>w(O,v)},null,8,["modelValue","onUpdate:modelValue","items","onEmit:onChange"])]),v!==0?($(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-7 h-7 cursor-pointer",onClick:r[1]||(r[1]=(...O)=>e(o).actionDeleteRouteRow&&e(o).actionDeleteRouteRow(...O))},[l(pe,{icon:e(ze),class:"text-critic-500 !w-4 !h-4"},null,8,["icon"])])):Ue("",!0)]),M("div",ll,[l(pe,{icon:e(Do),class:"text-warning-500"},null,8,["icon"]),M("span",nl,J(e(t)("route-warning")),1)]),($(!0),R(ee,null,Pe(k.segments,(O,G)=>($(),R("div",null,[l(N,null,{default:u(()=>[l(c,{"col-class":"w-1/5"},{default:u(()=>[l(f,{modelValue:O.departure_city,"onUpdate:modelValue":P=>O.departure_city=P,error:e(a).bookings.$each.$response.$data[v].segments.$each.$data[G].departure_city,options:e(_).regionsList,"onUpdate:options":r[2]||(r[2]=P=>e(_).regionsList=P),required:"","api-url":"regions",label:"where-from",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:k.type===e(le)&&G%2!==0,"onEmit:change":P=>A(P,v,G,k)},{option:u(({option:P})=>[l(e(Ee),{title:P.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(c,{"col-class":"w-1/5"},{default:u(()=>[l(f,{modelValue:O.arrival_city,"onUpdate:modelValue":P=>O.arrival_city=P,error:e(a).bookings.$each.$response.$data[v].segments.$each.$data[G].arrival_city,options:e(_).regionsList,"onUpdate:options":r[3]||(r[3]=P=>e(_).regionsList=P),required:"","api-url":"regions",label:"where-to",placeholder:"choose-one","menu-placeholder":"search","option-label":"name","show-nested-error":q.value,disabled:k.type===e(le)&&G%2!==0,"onEmit:change":P=>V(P,v,G,k)},{option:u(({option:P})=>[l(e(Ee),{title:P.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(c,{"col-class":"w-1/5"},{default:u(()=>[l(f,{modelValue:O.segment_class,"onUpdate:modelValue":P=>O.segment_class=P,error:e(a).bookings.$each.$response.$data[v].segments.$each.$data[G].segment_class,options:k.route===e(vo)?e(tt):k.route===e(Re)?e(lt):e(nt),required:"",label:"class",placeholder:"choose-one","option-label":"name","show-nested-error":q.value,translatable:"",disabled:k.type===e(le)&&G%2!==0,"onEmit:change":P=>m(P,v,G,k)},{option:u(({option:P})=>[l(e(Ee),{title:P.name,"text-truncate":!1},null,8,["title"])]),_:2},1032,["modelValue","onUpdate:modelValue","error","options","show-nested-error","disabled","onEmit:change"])]),_:2},1024),l(c,{"col-class":"w-1/5"},{default:u(()=>[l(x,{modelValue:O.date,"onUpdate:modelValue":[P=>O.date=P,P=>O.date=e(ce)(P)],error:e(a).bookings.$each.$response.$data[v].segments.$each.$data[G].date,"min-date":new Date,required:"",label:"date",placeholder:"choose-start-time","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","min-date","show-nested-error"])]),_:2},1024),l(c,{"col-class":"w-1/5 flex gap-x-2 items-end"},{default:u(()=>[l(Qt,{modelValue:O.time,"onUpdate:modelValue":P=>O.time=P,error:e(a).bookings.$each.$response.$data[v].segments.$each.$data[G].time,label:"time",required:"",range:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","error","show-nested-error"]),k.type===e(Xe)&&G!==0?($(),R("div",{key:0,class:"flex justify-center items-center bg-critic-50 rounded-lg w-5 h-5 cursor-pointer",onClick:P=>e(o).actionDeleteRouteLine(v,G)},[l(pe,{icon:e(ze),class:"text-critic-500 !w-3 !h-3"},null,8,["icon"])],8,rl)):Ue("",!0)]),_:2},1024)]),_:2},1024)]))),256)),k.type===e(Xe)?($(),R("div",{key:0,class:"flex items-center gap-x-1 mt-1 mb-2 cursor-pointer w-fit",onClick:O=>e(o).actionAddRouteLine(v)},[l(pe,{icon:e(Be),class:"text-primary-500"},null,8,["icon"]),M("span",sl,J(e(t)("add-line")),1)],8,al)):Ue("",!0),l(N,null,{default:u(()=>[l(c,{"col-class":"w-full"},{default:u(()=>[l(F,{modelValue:k.passengers,"onUpdate:modelValue":O=>k.passengers=O,options:U.value,error:e(a).bookings.$each.$response.$data[v].passengers,label:"employees",placeholder:"select-employees",required:"","show-nested-error":q.value},null,8,["modelValue","onUpdate:modelValue","options","error","show-nested-error"])]),_:2},1024)]),_:2},1024)]))),256)),l(j,{color:"bg-primary-30 hover:bg-primary-100 text-primary-500","border-color":"border-transparent",label:"add-more","icon-color":"#767994","icon-left":e(Be),"root-classes":"",type:"button",shadow:"",class:"rounded-[10px] w-fit",onClick:S},null,8,["icon-left"]),M("div",il,[l(j,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),M("div",dl,[l(j,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:r[4]||(r[4]=k=>C(e(He)))}),l(j,{label:"next-step",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:e(o).buttonLoading,onClick:g},null,8,["loading"])])])])}}},pl={class:"decree-component"},ul={class:"flex items-center justify-between mt-10"},ml={class:"flex items-center gap-x-1"},_l={__name:"Decree",props:{formType:{type:String,default:L}},setup(p,{expose:i}){const n=p,t=te(),b=oe(),s=Fe(),o=H(s.decreeRules,s.decreeModel),{t:_}=K(),a=X(),q=ne(),U=z(!1),E=async m=>{await s.actionStepClick(b,t,m)},w=m=>{s.decreeModel.__files=[],m.forEach(g=>{s.decreeModel.__files.push(g)})},C=async()=>{var g,d,r,f;if(!await o.value.$validate()){D(null,_("fill-required-fields"),T.WARNING);return}s.decreeModel.approvers=[],s.decreeModel.signers=[],s.decreeModel.curator=(d=(g=s.model)==null?void 0:g.__curator)==null?void 0:d.user_id,s.decreeModel.journal=Z.ORDERS_PROTOCOLS,s.decreeModel.company=a.currentUser.company.id,s.decreeModel.sender=(f=(r=a==null?void 0:a.currentUser)==null?void 0:r.top_level_department)==null?void 0:f.id,s.decreeModel.document_type=Y.DECREE,s.decreeModel.document_sub_type=W.BUSINESS_TRIP_DECREE_V2,s.decreeModel.short_description=s.model.short_description,U.value=!0},S=async(m,g)=>{let d={...s.decreeModel,trip_notice_id:m};await s.actionCreateDocument(d)?(U.value=!1,D(null,_("document-sent"),T.SUCCESS),await b.replace({name:he,query:{document_type:t.query.document_type}})):D(null,_("error-occurred"),T.ERROR)},A=async(m,g)=>{try{await s.actionUpdateDocument({id:g,body:{...s.decreeModel,trip_notice_id:m}}),await q.actionCountList(),D(null,_("changed"),T.SUCCESS),await b.replace({name:ve,params:{id:t.params.id,document_type:t.params.document_type,document_sub_type:t.params.document_sub_type}})}catch{}},V=()=>{var g;let m=null;n.formType===L&&t.query.notice_id?m=t.query.notice_id:n.formType===Ae&&t.params.id&&(m=t.params.id),n.formType===L?S(m):A(m,(g=s.decreeModel)==null?void 0:g.id)};return i({stepClick:E}),(m,g)=>{const d=Se;return $(),R("div",pl,[l(ke,{modelValue:e(o).content.$model,"onUpdate:modelValue":g[0]||(g[0]=r=>e(o).content.$model=r),error:e(o).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).decreeModel.__files,"onEmit:fileUpload":w},null,8,["modelValue","error","files"]),M("div",ul,[l(d,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),M("div",ml,[l(d,{label:"previous-stage",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:g[1]||(g[1]=r=>E(e(Me)))}),l(d,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:C})])]),l(Ve,{modelValue:U.value,"onUpdate:modelValue":g[2]||(g[2]=r=>U.value=r),"send-button-loading":e(s).buttonLoading,"onEmit:send":V,"content-classes":"p-0"},{content:u(()=>[l(e(Ho),{"compose-model":{...e(s).model,bookings:e(s).booking_model.bookings,trip_plans:e(s).trip_plan_model.trip_plans,decree_content:e(s).decreeModel.content},preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])])}}},ql={class:"py-4 px-6 border-b-[1.5px] border-greyscale-200"},fl={class:"px-6 py-4"},yn={__name:"BusinessTripForm",props:{formType:{type:String,default:L}},setup(p){const i=p,{t:n}=K(),t=te(),b=oe(),s=X(),o=Fe();H(o.rules,o.model),H(o.trip_plan_rules,o.trip_plan_model),H(o.booking_model_rules,o.booking_model),H(o.decreeRules,o.decreeModel);const _=z(null),a=ie(()=>i.formType===L?"create-business-trip-notice":"update-business-trip-notice"),q=ie(()=>{switch(t.query.step){case Me:return wo;case Ge:return _l;case He:return Kt;case Ze:return cl;default:return wo}}),U=async S=>{var V;const A=e(_);((V=t.query)==null?void 0:V.step)!==S.value&&(await A.stepClick(S.value),S.value===Ge&&(await w(),await D(null,n("notice-saved-successfully"),T.SUCCESS)))},E=async()=>{t.query.step||await b.replace({query:{...t.query,step:Me}}),o.stepperItems.forEach(S=>S.active=S.value===t.query.step)},w=async()=>{var V,m,g,d,r,f;const S=Q(o.model.__approvers),A=Q(o.model.__signers);if(o.model.approvers=[],o.model.signers=[],o.model.notices=[],o.model.bookings=[],o.model.trip_plans=[],o.model.approvers=S,o.model.signers=A,o.model.curator=(m=(V=o.model)==null?void 0:V.__curator)==null?void 0:m.user_id,o.model.journal=Z.INNER,o.model.company=(d=(g=s.currentUser)==null?void 0:g.company)==null?void 0:d.id,o.model.__groups.forEach((c,x)=>{const N=x+1;o.model.notices.push(...c.__users.map(j=>{var k,v;return{start_date:c.__start_date,end_date:c.__end_date,user:j.id,company:(v=(k=s.currentUser)==null?void 0:k.company)==null?void 0:v.id,regions:c.__regions.map(O=>O.id),tags:c.__tags.map(O=>({id:O.id})),group_id:N}}))}),o.model.sender=(f=(r=s==null?void 0:s.currentUser)==null?void 0:r.top_level_department)==null?void 0:f.id,o.model.files=o.model.__files.map(c=>({id:c.id})),o.model.document_type=t.params.document_type,o.model.document_sub_type=t.params.document_sub_type,o.model.bookings=o.booking_model.bookings.map(c=>({...c,segments:c.segments.map(x=>({departure_city:x.departure_city.id,arrival_city:x.arrival_city.id,departure_date:_o(x.date,x.time,0),departure_end_date:_o(x.date,x.time,1),segment_class:x.segment_class.value})),passengers:c.passengers.map(x=>({user:x.id}))})),o.model.trip_plans=o.trip_plan_model.trip_plans.map(c=>({users:c.users.map(x=>({id:x.id})),text:c.text})),i.formType===L&&t.query.notice_id)try{await o.actionUpdateDocument({id:t.query.notice_id,body:o.model})}catch{}else if(i.formType===L)try{const{data:c}=await o.actionCreateDocument(o.model);await b.replace({query:{...t.query,notice_id:c.id}})}catch{}else if(i.formType===Ae&&t.params.id)try{await o.actionUpdateDocument({id:t.params.id,body:o.model})}catch{}},C=async()=>{try{await w(),await D(null,n("notice-saved-successfully"),T.SUCCESS)}catch{}};return Ne(async()=>{await E(),i.formType===Ae?await o.actionGetDocumentDetailForUpdate(t.params.id):t.query.notice_id&&await o.actionGetDocumentDetailForUpdate(t.query.notice_id)}),qe(()=>{o.actionResetBTModel()}),(S,A)=>{const V=fe,m=Lt;return $(),R("div",{class:De(["business-trip-form-v2",{"h-[calc(100vh-200px)]":e(o).detailLoading}])},[e(o).detailLoading?($(),B(V,{key:0})):($(),B(e(be),{key:1,title:a.value},{content:u(()=>[M("div",ql,[l(m,{items:e(o).stepperItems,"onEmit:stepClick":U},null,8,["items"])]),M("div",fl,[($(),B(Oo(q.value),{"form-type":p.formType,ref_key:"childComponent",ref:_,"onEmit:onValidateAndSend":C},null,40,["form-type"]))])]),_:1},8,["title"]))],2)}}};export{mn as _,fn as a,bn as b,gn as c,yn as d,_n as e,qn as f,wn as g};
