import{_ as B}from"./BaseRow-bde047b3.js";import{_ as G}from"./BaseCol-e6f5a2bf.js";import{_ as qe}from"./BaseInput-b799ad8a.js";import{B as Re,O as ge,E as z,cJ as Oe,cz as ze,o as $,g as P,w as d,p as t,q as e,Q as we,i as ue,z as Ne,k as j,j as Ue,_ as $e,aW as H,bW as N,bX as he,bs as I,t as A,A as ke,u as Y,ar as W,ae as ve,cd as J,F as Q,as as x,ah as K,cB as me,a2 as Ee,c6 as Ve,cK as Fe}from"./index-a171d93f.js";import{c as w,r as h,u as X}from"./index-1bce5a6d.js";import{_ as Me}from"./DepartmentMultiSelect-0a7dea53.js";import{_ as Pe,e as Ie,a as je,b as Ae,c as Be,d as Ge}from"./DecreeTemplate-cb61c981.js";import{L as Z}from"./LayoutWithTabs-5b3957ca.js";import"./BaseTabMenu-7cadc300.js";import{f as ee,a as le,b as oe}from"./index.store-715efdea.js";import"./dialog.esm-b116fda7.js";import"./tabpanel.esm-10d3411f.js";import{s as ne,I as E,L as He,M as te,N as F,O as _e,P as Ye}from"./index-71c0c86b.js";import"./BaseTabView-350d92d8.js";import{f as ye}from"./formatDate-06bebc81.js";import{_ as L}from"./UserMultiSelect-7b7ffb29.js";import{u as M,w as re,d as U,c as We}from"./axios.config-5040eb4e.js";import{u as fe,d as ie}from"./common-0a886be1.js";import{d as xe,e as ae,c as se}from"./index-c4c1f2d4.js";import{F as k}from"./constants-5c471c97.js";import{_ as Le}from"./BaseDropdown-a8d254e2.js";import{_ as Se}from"./BaseCalendar-abc31109.js";import{_ as Ce}from"./WithLabel-b5ddb59d.js";import"./qrcode.vue.esm-651f83e3.js";import"./Dropdown-fa360474.js";import"./menu.esm-6ab1263f.js";/* empty css                                                 */import"./avatar.esm-41e741c9.js";/* empty css                                                 */import"./WithSelectable.vue_vue_type_style_index_0_lang-57e98f8c.js";import{_ as De}from"./WithRadio-de7e0457.js";import"./radiobutton.esm-02cb1f11.js";import"./checkbox.esm-3235e002.js";import"./dayjs.min-7fc53eb0.js";import{_ as Je}from"./WithSelectable-a9d9f70c.js";import{_ as Qe}from"./BaseBrickTab-29597968.js";import{_ as Ke}from"./BaseFileUpload-a03727a4.js";import{_ as Xe}from"./BaseFroalaEditor-5a4d8e01.js";import{_ as Ze}from"./BaseDialog-11a28e2a.js";var el=`
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
`,ll={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Re.extend({name:"editor",css:el,classes:ll});(function(){try{return window.Quill}catch{return null}})();const de={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]}},emits:["update:modelValue","emit:fileUpload"],setup(c,{emit:i}){const n=c,o=ge(n,"modelValue"),v=z([{title:"text",slot:"editor",icon:Oe},{title:"file",slot:"file",icon:ze}]);return(q,r)=>($(),P(Qe,{"tab-panel-list":v.value,"panel-container-class":"px-0"},{editor:d(()=>[t(Xe,{modelValue:e(o),"onUpdate:modelValue":r[0]||(r[0]=u=>we(o)?o.value=u:null)},null,8,["modelValue"])]),file:d(()=>[ue("div",{class:Ne(n.fileUploadContainerClasses)},[t(Ke,{files:n.files,"onEmit:fileUpload":r[1]||(r[1]=u=>i("emit:fileUpload",u))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},ol={class:"flex flex-col justify-between h-full"},nl={class:"px-6 py-4 overflow-y-auto"},tl={class:"actions p-6"},ce={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(c,{emit:i}){return(n,o)=>{const v=$e;return $(),j("div",ol,[ue("div",nl,[Ue(n.$slots,"default")]),ue("div",tl,[t(v,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:o[0]||(o[0]=q=>i("emit:clearForm"))}),t(v,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:o[1]||(o[1]=q=>i("emit:preview"))})])])}}},rl=H("sd-stores-inner",{state:()=>{var c,i;return{buttonLoading:!1,detailLoading:!1,model:{company:(i=(c=M().currentUser)==null?void 0:c.company)==null?void 0:i.id,content:null,document_type:N.INNER,document_sub_type:he.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:I.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{register_number:{required:w.withMessage("Поле не должен быть пустым",h)},short_description:{required:w.withMessage("Поле не должен быть пустым",h)},content:{required:w.withMessage("Поле не должен быть пустым",h)},__departments:{required:w.withMessage("Поле не должен быть пустым",h)},__approvers:{},__signers:{required:w.withMessage("Поле не должен быть пустым",h)}}}},actions:{async actionCreateDocument(c){let i={...c,type:xe,sub_type:xe};this.buttonLoading=!0;const{response:n,error:o}=await re(oe,i);return n?(this.buttonLoading=!1,Promise.resolve(n)):Promise.reject(o)},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:n}=await ee({id:c,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await le(c);ne(this.model,i),this.model.__approvers=await E(i.approvers),this.model.__signers=await E(i.signers),this.model.__departments=await He(i.receiver.departments),this.model.__files=i.files}catch{}finally{this.detailLoading=!1}}}}),il={class:"font-semibold text-xl"},pe={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(c,{emit:i}){const o=ge(c,"modelValue"),{t:v}=A();return(q,r)=>{const u=$e,s=Ze;return $(),P(s,{modelValue:e(o),"onUpdate:modelValue":r[1]||(r[1]=a=>we(o)?o.value=a:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[ue("span",il,ke(e(v)("preview")),1)]),content:d(()=>[Ue(q.$slots,"content")]),footer:d(()=>[t(u,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(u,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:c.sendButtonLoading,onClick:r[0]||(r[0]=a=>i("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},Zl={__name:"InnerForm",props:{formType:{type:String,default:k}},setup(c){const i=c,n=M(),o=rl();fe();const v=ie(),q=z(!1);z(null);const{t:r}=A(),u=Y(),s=W(),a=X(o.rules,o.model),S=async()=>{await a.value.$validate()&&(q.value=!0,o.model.approvers=[],o.model.signers=[],o.model.departments=[],o.model.departments=o.model.__departments.map(l=>l.id),o.model.files=[],o.model.files=o.model.__files.map(l=>({id:l.id})),o.model.journal=I.INNER,o.model.sender=n.currentUser.top_level_department.id,o.model.approvers=F(o.model.__approvers),o.model.signers=F(o.model.__signers),o.model.document_type=s.params.document_type,o.model.document_sub_type=s.params.document_sub_type)},C=()=>{i.formType===k?D():T()},D=async()=>{const f=await o.actionCreateDocument(o.model);await v.actionDocumentCountList(),f?(q.value=!1,U(null,r("document-sent"),x.SUCCESS),await u.replace({name:ae,query:{document_type:N.INNER}})):U(null,r("error-occurred"),x.ERROR)},T=async()=>{await o.actionUpdateDocument({id:s.params.id,body:o.model}),await v.actionDocumentCountList(),U(null,r("document-sent"),x.SUCCESS),await u.replace({name:se,params:{id:s.params.id,document_type:N.INNER,document_sub_type:he.SERVICE_LETTER}})},R=()=>{console.log("Clear Form")},O=f=>{o.model.__files=[],f.forEach(l=>{o.model.__files.push(l)})};return ve(async()=>{s.params.id&&await o.actionGetDocumentDetailForUpdate(s.params.id)}),J(()=>{te(o.model)}),(f,l)=>{const y=K,p=qe,b=G,_=B;return e(o).detailLoading?($(),P(y,{key:0})):($(),j(Q,{key:1},[t(e(Z),{title:i.formType===e(k)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[t(ce,{"onEmit:preview":S,"onEmit:clearForm":R},{default:d(()=>[t(_,null,{default:d(()=>[t(b,{"col-class":"w-1/2"},{default:d(()=>[t(p,{modelValue:e(a).register_number.$model,"onUpdate:modelValue":l[0]||(l[0]=m=>e(a).register_number.$model=m),error:e(a).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[t(Me,{modelValue:e(a).__departments.$model,"onUpdate:modelValue":l[1]||(l[1]=m=>e(a).__departments.$model=m),error:e(a).__departments},null,8,["modelValue","error"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[t(p,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":l[2]||(l[2]=m=>e(a).short_description.$model=m),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(a).__approvers.$model,"onUpdate:modelValue":l[3]||(l[3]=m=>e(a).__approvers.$model=m),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(b,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":l[4]||(l[4]=m=>e(a).__signers.$model=m),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(b,{"col-class":"w-full"},{default:d(()=>[t(de,{modelValue:e(a).content.$model,"onUpdate:modelValue":l[5]||(l[5]=m=>e(a).content.$model=m),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(pe,{modelValue:q.value,"onUpdate:modelValue":l[6]||(l[6]=m=>q.value=m),"send-button-loading":e(o).buttonLoading,"onEmit:send":C},{content:d(()=>{var m,V;return[t(Pe,{"compose-model":{...e(o).model,signers:e(o).model.__signers,approvers:e(o).model.__approvers,author:e(o).model.__signers[0],sender:{name:(V=(m=e(n).currentUser)==null?void 0:m.top_level_department)==null?void 0:V.name},receiver:{departments:e(o).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},al=H("sd-store-application",{state:()=>{var c,i;return{buttonLoading:!1,detailLoading:!1,model:{company:(i=(c=M().currentUser)==null?void 0:c.company)==null?void 0:i.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:w.withMessage("Поле не должен быть пустым",h)},__curator:{required:w.withMessage("Поле не должен быть пустым",h)},__approvers:{required:w.withMessage("Поле не должен быть пустым",h)},__signers:{}}}},actions:{async actionCreateDocument(c){let i={...c};this.buttonLoading=!0;const{response:n,error:o}=await re(oe,i);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:n}=await ee({id:c,body:i});return Promise.resolve(n)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await le(c);ne(this.model,i),this.model.__approvers=await E(i.approvers),this.model.__signers=await E(i.signers.filter(n=>n.type===me.SIGNER)),this.model.__curator=await _e([],i.curator.id,!1),this.model.__files=i.files}catch{}finally{this.detailLoading=!1}}}}),Te=H("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:M().currentUser.company.id,curator:null,document_type:N.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:I.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:w.withMessage("Поле не должен быть пустым",h)},register_date:{required:w.withMessage("Поле не должен быть пустым",h)},content:{required:w.withMessage("Поле не должен быть пустым",h)},__negotiators:{required:w.withMessage("Поле не должен быть пустым",h)},__curator:{required:w.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:n}=await re(oe,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:n}=await ee({id:c,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await le(c);ne(this.model,i),this.model.__signers=await E(i.signers.filter(n=>n.type!==me.NEGOTIATOR)),this.model.__negotiators=await E(i.signers.filter(n=>n.type===me.NEGOTIATOR)),this.model.__approvers=await E(i.approvers),this.model.__curator=await _e([],i.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),sl={class:"user-select"},be={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"}},emits:["update:modelValue"],setup(c,{emit:i}){const n=c,o=z([]),v=ge(n,"modelValue"),q=async r=>{let{data:u}=await We.get(`${n.apiUrl}/`,r);u.hasOwnProperty("results")?o.value=u.results:o.value=u};return ve(async()=>{await q(n.apiParams)}),(r,u)=>($(),j("div",sl,[t(Le,{modelValue:e(v),"onUpdate:modelValue":u[0]||(u[0]=s=>we(v)?v.value=s:null),options:o.value,"onUpdate:options":u[1]||(u[1]=s=>o.value=s),error:n.error,"api-url":n.apiUrl,"option-label":"full_name",label:n.label,placeholder:n.placeholder,required:n.required,searchable:""},{option:d(({option:s})=>[t(e(Je),{items:[s]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","label","placeholder","required"])]))}},eo={__name:"ApplicationForm",props:{formType:{type:String,default:k}},setup(c){const i=c,n=M(),o=al();fe();const v=ie();Te();const q=z(!1);z(null);const{t:r}=A(),u=Y(),s=W(),a=X(o.rules,o.model),S=async()=>{var l,y,p,b,_;await a.value.$validate()&&(q.value=!0,o.model.approvers=[],o.model.signers=[],o.model.signers=[{user:(l=n==null?void 0:n.currentUser)==null?void 0:l.id}],o.model.sender=(p=(y=n==null?void 0:n.currentUser)==null?void 0:y.top_level_department)==null?void 0:p.id,o.model.curator=(_=(b=o==null?void 0:o.model)==null?void 0:b.__curator)==null?void 0:_.user_id,o.model.journal=I.APPLICATION,o.model.document_type=s.params.document_type,o.model.document_sub_type=s.params.document_sub_type,o.model.approvers=F(o.model.__approvers))},C=async()=>{},D=()=>{i.formType===k?T():R()},T=async()=>{const f=await o.actionCreateDocument(o.model);await v.actionDocumentCountList(),f?(q.value=!1,U(null,r("document-sent"),x.SUCCESS),await u.replace({name:ae,query:{document_type:N.APPLICATION}})):U(null,r("error-occurred"),x.ERROR)},R=async()=>{await o.actionUpdateDocument({id:s.params.id,body:o.model}),await v.actionDocumentCountList(),U(null,r("document-sent"),x.SUCCESS),await u.replace({name:se,params:{id:s.params.id,document_type:N.APPLICATION,document_sub_type:he.LABOR_LEAVE}})},O=f=>{o.model.__files=[],f.forEach(l=>{o.model.__files.push(l)})};return ve(async()=>{s.params.id&&await o.actionGetDocumentDetailForUpdate(s.params.id)}),J(()=>{te(o.model)}),(f,l)=>{const y=K,p=G,b=B;return e(o).detailLoading?($(),P(y,{key:0})):($(),j(Q,{key:1},[t(e(Z),{title:i.formType===e(k)?"create-sd-application":"update-sd-application"},{content:d(()=>[t(ce,{"onEmit:preview":S,"onEmit:clearForm":C},{default:d(()=>[t(b,null,{default:d(()=>[t(p,{"col-class":"w-1/2"},{default:d(()=>[t(be,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":l[0]||(l[0]=_=>e(a).__curator.$model=_),error:e(a).__curator,"api-url":"top-signers",label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(a).__approvers.$model,"onUpdate:modelValue":l[1]||(l[1]=_=>e(a).__approvers.$model=_),error:e(a).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":l[2]||(l[2]=_=>e(a).__signers.$model=_),disabled:"",label:"signers",placeholder:e(n).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(p,{"col-class":"w-full"},{default:d(()=>[t(de,{modelValue:e(a).content.$model,"onUpdate:modelValue":l[3]||(l[3]=_=>e(a).content.$model=_),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(pe,{modelValue:q.value,"onUpdate:modelValue":l[4]||(l[4]=_=>q.value=_),"send-button-loading":e(o).buttonLoading,"onEmit:send":D},{content:d(()=>[t(Ie,{"compose-model":{...e(o).model,curator:e(o).model.__curator,author:i.formType===e(k)?e(n).currentUser:e(o).model.__signers[0].user,signers:i.formType===e(k)?[e(n).currentUser]:e(o).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},dl={__name:"BranchMultiSelect",props:{modelValue:{type:[Array],default:[]},required:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(c,{emit:i}){const n=c,o=ge(n,"modelValue");return(v,q)=>($(),P(Ce,{modelValue:e(o),"onUpdate:modelValue":q[0]||(q[0]=r=>we(o)?o.value=r:null),"api-url":"companies","api-params":{condition:"A"},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"branch",required:n.required,type:"department","selection-length":2,placeholder:"enter-branch"},{chip:d(({value:r})=>[Ee(ke(r.name),1)]),option:d(({value:r})=>[t(e(De),{title:r.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","required"]))}},cl=H("sd-notice-store",{state:()=>(M(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:N.NOTICE,document_sub_type:he.BUSINESS_TRIP,journal:I.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:w.withMessage("Поле не должен быть пустым",h)},start_date:{required:w.withMessage("Поле не должен быть пустым",h)},route:{required:w.withMessage("Поле не должен быть пустым",h)},content:{required:w.withMessage("Поле не должен быть пустым",h)},__companies:{required:w.withMessage("Поле не должен быть пустым",h)},__curator:{required:w.withMessage("Поле не должен быть пустым",h)},__employees:{required:w.withMessage("Поле не должен быть пустым",h)},__signers:{required:w.withMessage("Поле не должен быть пустым",h)},__tags:{required:w.withMessage("Поле не должен быть пустым",h)},short_description:{required:w.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:n}=await re(oe,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:n}=await ee({id:c,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await le(c);ne(this.model,i),this.model.__companies=[],this.model.__curator=await _e([],i.curator.id,!1),this.model.__employees=await E(i.notices),this.model.__approvers=await E(i.approvers),this.model.__signers=await E(i.signers),this.model.__companies=await Ye(i.notices[0].destinations),this.model.start_date=i.notices[0].start_date,this.model.end_date=i.notices[0].end_date,this.model.__tags=i.tags,this.model.route=i.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),pl={class:"flex w-full gap-x-4"},lo={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:k}},setup(c){const i=c,{t:n}=A(),o=W(),v=Y(),q=M(),r=cl(),u=ie();fe();const s=z(!1),a=X(r.rules,r.model),S=async()=>{var l,y,p,b;await a.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=F(r.model.__approvers),r.model.signers=F(r.model.__signers),r.model.curator=(y=(l=r==null?void 0:r.model)==null?void 0:l.__curator)==null?void 0:y.user_id,r.model.journal=I.INNER,r.model.company=q.currentUser.company.id,r.model.notices=r.model.__employees.map(_=>({start_date:r.model.start_date,end_date:r.model.end_date,user:_.id,route:r.model.route,companies:r.model.__companies.map(m=>m.id)})),r.model.sender=(b=(p=q==null?void 0:q.currentUser)==null?void 0:p.top_level_department)==null?void 0:b.id,r.model.tags=r.model.__tags.map(_=>({id:_.id})),r.model.files=r.model.__files.map(_=>({id:_.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,s.value=!0)},C=()=>{},D=f=>{r.model.__files=[],f.forEach(l=>{r.model.__files.push(l)})},T=async()=>{const f=await r.actionCreateDocument(r.model);await u.actionDocumentCountList(),f?(s.value=!1,U(null,n("document-sent"),x.SUCCESS),await v.replace({name:ae,query:{document_type:N.NOTICE}})):U(null,n("error-occurred"),x.ERROR)},R=async()=>{await r.actionUpdateDocument({id:o.params.id,body:r.model}),await u.actionDocumentCountList(),U(null,n("changed"),x.SUCCESS),await v.replace({name:se,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},O=()=>{i.formType===k?T():R()};return Ve(async()=>{o.params.id&&await r.actionGetDocumentDetailForUpdate(o.params.id)}),J(()=>{te(r.model)}),(f,l)=>{const y=K,p=G,b=qe,_=Se,m=Le,V=B;return e(r).detailLoading?($(),P(y,{key:0})):($(),j(Q,{key:1},[t(e(Z),{title:i.formType===e(k)?"create-business-trip-notice":"update-business-trip-notice"},{content:d(()=>[t(ce,{"onEmit:preview":S,"onEmit:clearForm":C},{default:d(()=>[t(V,null,{default:d(()=>[t(p,{"col-class":"w-1/2"},{default:d(()=>[t(be,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":l[0]||(l[0]=g=>e(a).__curator.$model=g),error:e(a).__curator,"api-url":"top-signers",label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(b,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":l[1]||(l[1]=g=>e(a).short_description.$model=g),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(a).__employees.$model,"onUpdate:modelValue":l[2]||(l[2]=g=>e(a).__employees.$model=g),error:e(a).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(dl,{modelValue:e(a).__companies.$model,"onUpdate:modelValue":l[3]||(l[3]=g=>e(a).__companies.$model=g),error:e(a).__companies},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[ue("div",pl,[t(_,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[l[4]||(l[4]=g=>e(a).start_date.$model=g),l[5]||(l[5]=g=>e(a).start_date.$model=e(ye)(g))],error:e(a).start_date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error"]),t(_,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[l[6]||(l[6]=g=>e(a).end_date.$model=g),l[7]||(l[7]=g=>e(a).end_date.$model=e(ye)(g))],error:e(a).end_date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error"])])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(Ce,{modelValue:e(a).__tags.$model,"onUpdate:modelValue":l[8]||(l[8]=g=>e(a).__tags.$model=g),error:e(a).__tags,"api-url":"tags","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:g})=>[Ee(ke(g.name),1)]),option:d(({value:g})=>[t(e(De),{title:g.name},null,8,["title"])]),_:1},8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(m,{modelValue:e(a).route.$model,"onUpdate:modelValue":l[9]||(l[9]=g=>e(a).route.$model=g),error:e(a).route,options:e(Fe),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type"},null,8,["modelValue","error","options"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":l[10]||(l[10]=g=>e(r).model.__approvers=g),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":l[11]||(l[11]=g=>e(a).__signers.$model=g),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-full"},{default:d(()=>[t(de,{modelValue:e(a).content.$model,"onUpdate:modelValue":l[12]||(l[12]=g=>e(a).content.$model=g),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(pe,{modelValue:s.value,"onUpdate:modelValue":l[13]||(l[13]=g=>s.value=g),"send-button-loading":e(r).buttonLoading,"onEmit:send":O},{content:d(()=>[t(e(je),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},oo={__name:"OrderForm",props:{formType:{type:String,default:k}},setup(c){const i=c,n=Te(),o=ie(),v=M(),q=W(),r=Y(),u=X(n.rules,n.model),{t:s}=A(),a=z(!1),S=async()=>{var l,y,p,b;await u.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=F(n.model.__approvers),n.model.curator=(y=(l=n==null?void 0:n.model)==null?void 0:l.__curator)==null?void 0:y.user_id,n.model.sender=(b=(p=v==null?void 0:v.currentUser)==null?void 0:p.top_level_department)==null?void 0:b.id,n.model.files=n.model.__files.map(_=>({id:_.id})),n.model.document_type=q.params.document_type,n.model.document_sub_type=q.params.document_sub_type,n.model.journal=I.ORDERS_PROTOCOLS,n.model.register_date=ye(n.model.register_date),n.model.__negotiators.forEach(_=>{n.model.signers.push(_.hasOwnProperty("user")?{id:_.id,user:_.user.id,type:me.NEGOTIATOR}:{user:_.id,type:me.NEGOTIATOR})}),q.query.compose_id&&(n.model.trip_notice_id=q.query.compose_id),a.value=!0)},C=()=>{},D=async()=>{const f=await n.actionCreateDocument(n.model);await o.actionDocumentCountList(),f?(a.value=!1,U(null,s("document-sent"),x.SUCCESS),await r.replace({name:ae,query:{document_type:N.ORDER}})):U(null,s("error-occurred"),x.ERROR)},T=async()=>{await n.actionUpdateDocument({id:q.params.id,body:n.model}),await o.actionDocumentCountList(),U(null,s("changed"),x.SUCCESS),await r.replace({name:se,params:{id:q.params.id,document_type:q.params.document_type,document_sub_type:q.params.document_sub_type}})},R=()=>{i.formType===k?D():T()},O=f=>{n.model.__files=[],f.forEach(l=>{n.model.__files.push(l)})};return ve(async()=>{q.params.id&&await n.actionGetDocumentDetailForUpdate(q.params.id)}),J(()=>{te(n.model)}),(f,l)=>{const y=K,p=G,b=qe,_=Se,m=B;return e(n).detailLoading?($(),P(y,{key:0})):($(),j(Q,{key:1},[t(e(Z),{title:i.formType===e(k)?"create-order":"update-order"},{content:d(()=>[t(ce,{"onEmit:preview":S,"onEmit:clearForm":C},{default:d(()=>[t(m,null,{default:d(()=>[t(p,{"col-class":"w-1/2"},{default:d(()=>[t(be,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":l[0]||(l[0]=V=>e(u).__curator.$model=V),error:e(u).__curator,"api-url":"top-signers",label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(b,{modelValue:e(u).register_number.$model,"onUpdate:modelValue":l[1]||(l[1]=V=>e(u).register_number.$model=V),error:e(u).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(_,{modelValue:e(u).register_date.$model,"onUpdate:modelValue":l[2]||(l[2]=V=>e(u).register_date.$model=V),error:e(u).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":l[3]||(l[3]=V=>e(n).model.__approvers=V),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(u).__negotiators.$model,"onUpdate:modelValue":l[4]||(l[4]=V=>e(u).__negotiators.$model=V),error:e(u).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-full"},{default:d(()=>[t(de,{modelValue:e(u).content.$model,"onUpdate:modelValue":l[5]||(l[5]=V=>e(u).content.$model=V),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(pe,{modelValue:a.value,"onUpdate:modelValue":l[6]||(l[6]=V=>a.value=V),"send-button-loading":e(n).buttonLoading,"onEmit:send":R},{content:d(()=>[t(e(Ae),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ul=H("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:w.withMessage("Поле не должен быть пустым",h)},__curator:{required:w.withMessage("Поле не должен быть пустым",h)},__signers:{required:w.withMessage("Поле не должен быть пустым",h)},short_description:{required:w.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:n}=await re(oe,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:n}=await ee({id:c,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await le(c);ne(this.model,i),this.model.__curator=await _e([],i.curator.id,!1),this.model.__approvers=await E(i.approvers),this.model.__signers=await E(i.signers)}catch{}finally{this.detailLoading=!1}}}}),no={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:k}},setup(c){const i=c,{t:n}=A(),o=W(),v=Y(),q=M(),r=ul(),u=ie();fe();const s=z(!1),a=X(r.rules,r.model),S=async()=>{var l,y,p,b;await a.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=F(r.model.__approvers),r.model.signers=F(r.model.__signers),r.model.curator=(y=(l=r==null?void 0:r.model)==null?void 0:l.__curator)==null?void 0:y.user_id,r.model.journal=I.INNER,r.model.company=q.currentUser.company.id,r.model.sender=(b=(p=q==null?void 0:q.currentUser)==null?void 0:p.top_level_department)==null?void 0:b.id,r.model.files=r.model.__files.map(_=>({id:_.id})),r.model.document_type=o.params.document_type,r.model.document_sub_type=o.params.document_sub_type,s.value=!0)},C=()=>{},D=f=>{r.model.__files=[],f.forEach(l=>{r.model.__files.push(l)})},T=async()=>{const f=await r.actionCreateDocument(r.model);await u.actionDocumentCountList(),f?(s.value=!1,U(null,n("document-sent"),x.SUCCESS),await v.replace({name:ae,query:{document_type:N.NOTICE}})):U(null,n("error-occurred"),x.ERROR)},R=async()=>{await r.actionUpdateDocument({id:o.params.id,body:r.model}),await u.actionDocumentCountList(),U(null,n("changed"),x.SUCCESS),await v.replace({name:se,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},O=()=>{i.formType===k?T():R()};return Ve(async()=>{o.params.id&&await r.actionGetDocumentDetailForUpdate(o.params.id)}),J(()=>{te(r.model)}),(f,l)=>{const y=K,p=G,b=qe,_=B;return e(r).detailLoading?($(),P(y,{key:0})):($(),j(Q,{key:1},[t(e(Z),{title:i.formType===e(k)?"create-notice":"update-notice"},{content:d(()=>[t(ce,{"onEmit:preview":S,"onEmit:clearForm":C},{default:d(()=>[t(_,null,{default:d(()=>[t(p,{"col-class":"w-1/2"},{default:d(()=>[t(be,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":l[0]||(l[0]=m=>e(a).__curator.$model=m),error:e(a).__curator,"api-url":"top-signers",label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(b,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":l[1]||(l[1]=m=>e(a).short_description.$model=m),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":l[2]||(l[2]=m=>e(r).model.__approvers=m),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":l[3]||(l[3]=m=>e(a).__signers.$model=m),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-full"},{default:d(()=>[t(de,{modelValue:e(a).content.$model,"onUpdate:modelValue":l[4]||(l[4]=m=>e(a).content.$model=m),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(pe,{modelValue:s.value,"onUpdate:modelValue":l[5]||(l[5]=m=>s.value=m),"send-button-loading":e(r).buttonLoading,"onEmit:send":O},{content:d(()=>[t(e(Be),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},ml=H("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:w.withMessage("Поле не должен быть пустым",h)},__curator:{required:w.withMessage("Поле не должен быть пустым",h)},__signers:{required:w.withMessage("Поле не должен быть пустым",h)},short_description:{required:w.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:i,error:n}=await re(oe,c);return i?(this.buttonLoading=!1,Promise.resolve(i)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:c,body:i}){try{this.buttonLoading=!0;const{data:n}=await ee({id:c,body:i});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:i}=await le(c);ne(this.model,i),this.model.__curator=await _e([],i.curator.id,!1),this.model.__approvers=await E(i.approvers),this.model.__signers=await E(i.signers)}catch{}finally{this.detailLoading=!1}}}}),to={__name:"DecreeForm",props:{formType:{type:String,default:k}},setup(c){const i=c,{t:n}=A(),o=W(),v=Y(),q=M(),r=ie();fe();const u=z(!1),s=ml(),a=X(s.rules,s.model),S=async()=>{var l,y,p,b;await a.value.$validate()&&(s.model.approvers=[],s.model.signers=[],s.model.approvers=F(s.model.__approvers),s.model.signers=F(s.model.__signers),s.model.curator=(y=(l=s==null?void 0:s.model)==null?void 0:l.__curator)==null?void 0:y.user_id,s.model.journal=I.ORDERS_PROTOCOLS,s.model.company=q.currentUser.company.id,s.model.sender=(b=(p=q==null?void 0:q.currentUser)==null?void 0:p.top_level_department)==null?void 0:b.id,s.model.files=s.model.__files.map(_=>({id:_.id})),s.model.document_type=o.params.document_type,s.model.document_sub_type=o.params.document_sub_type,o.query.compose_id&&(s.model.trip_notice_id=o.query.compose_id),u.value=!0)},C=()=>{},D=f=>{s.model.__files=[],f.forEach(l=>{s.model.__files.push(l)})},T=async()=>{const f=await s.actionCreateDocument(s.model);await r.actionDocumentCountList(),f?(u.value=!1,U(null,n("document-sent"),x.SUCCESS),await v.replace({name:ae,query:{document_type:o.params.document_type}})):U(null,n("error-occurred"),x.ERROR)},R=async()=>{await s.actionUpdateDocument({id:o.params.id,body:s.model}),await r.actionDocumentCountList(),U(null,n("changed"),x.SUCCESS),await v.replace({name:se,params:{id:o.params.id,document_type:o.params.document_type,document_sub_type:o.params.document_sub_type}})},O=()=>{i.formType===k?T():R()};return Ve(async()=>{o.params.id&&await s.actionGetDocumentDetailForUpdate(o.params.id)}),J(()=>{te(s.model)}),(f,l)=>{const y=K,p=G,b=qe,_=B;return e(s).detailLoading?($(),P(y,{key:0})):($(),j(Q,{key:1},[t(e(Z),{title:i.formType===e(k)?"create-decree":"update-decree"},{content:d(()=>[t(ce,{"onEmit:preview":S,"onEmit:clearForm":C},{default:d(()=>[t(_,null,{default:d(()=>[t(p,{"col-class":"w-1/2"},{default:d(()=>[t(be,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":l[0]||(l[0]=m=>e(a).__curator.$model=m),error:e(a).__curator,"api-url":"top-signers",label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(b,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":l[1]||(l[1]=m=>e(a).short_description.$model=m),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(s).model.__approvers,"onUpdate:modelValue":l[2]||(l[2]=m=>e(s).model.__approvers=m),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:d(()=>[t(L,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":l[3]||(l[3]=m=>e(a).__signers.$model=m),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-full"},{default:d(()=>[t(de,{modelValue:e(a).content.$model,"onUpdate:modelValue":l[4]||(l[4]=m=>e(a).content.$model=m),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(s).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(pe,{modelValue:u.value,"onUpdate:modelValue":l[5]||(l[5]=m=>u.value=m),"send-button-loading":e(s).buttonLoading,"onEmit:send":O},{content:d(()=>[t(e(Ge),{"compose-model":e(s).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{Zl as _,lo as a,oo as b,no as c,to as d,eo as e};
