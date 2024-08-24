import{_ as B}from"./BaseRow-c885eab9.js";import{_ as G}from"./BaseCol-70ea675c.js";import{_ as ve}from"./BaseInput-bbe9c795.js";import{B as Ce,O as H,E as L,cJ as De,cz as Te,o as V,g as N,w as s,p as t,q as e,Q as Y,i as I,z as ze,k as F,j as ye,_ as xe,aW as J,bU as E,bV as K,bq as be,t as j,A as ge,u as Q,ar as W,ae as X,cb as Z,F as ee,as as U,ah as le,cF as A,a2 as Ve,c4 as Re,cK as Oe}from"./index-48a11c7e.js";import{c as g,r as w,u as ne}from"./index-74e888be.js";import{_ as Ne}from"./DepartmentMultiSelect-ae5dd8f2.js";import{_ as Me,a as Fe,b as Pe,c as Ie}from"./OrderLetterTemplate-b508b7d3.js";import{L as oe}from"./LayoutWithTabsCompose-4315a646.js";import{_ as S}from"./UserMultiSelect-1f21b03c.js";import{w as te,u as P,d as $,c as Ae}from"./axios.config-4d350eb5.js";import{u as we,d as re}from"./common-09cec1db.js";import{c as ie,b as ae,d as se}from"./index.service-f525ab20.js";import{d as ke,e as de,c as ce}from"./index-c4c1f2d4.js";import{s as qe,I as x,K as je,L as pe,M,N as Be}from"./index-1f741add.js";import{F as y}from"./constants-5c471c97.js";import{_ as Ue}from"./BaseDropdown-e4c52d20.js";import{_ as $e}from"./BaseCalendar-2a3d3a6f.js";import{_ as Ee}from"./WithLabel-910a2d30.js";import{f as _e}from"./formatDate-c8cc07fd.js";import"./qrcode.vue.esm-d3f8653c.js";import"./Dropdown-632760b3.js";import"./menu.esm-638bb0e0.js";import"./radiobutton.esm-f01f7ff5.js";import"./avatar.esm-d9431760.js";/* empty css                                                 */import"./WithSelectable.vue_vue_type_style_index_0_lang-bba366e3.js";import{_ as Se}from"./WithRadio-bcdba1f4.js";import"./checkbox.esm-a6a84ac0.js";import"./dayjs.min-cdb1322e.js";import{_ as Ge}from"./BaseBrickTab-4bb94f01.js";import{_ as He}from"./BaseFileUpload-ebc30d5a.js";import{_ as Ye}from"./BaseFroalaEditor-c5635eb2.js";import{_ as Je}from"./BaseDialog-d7873d27.js";import{_ as Ke}from"./WithSelectable-648abe3c.js";var Qe=`
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
`,We={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Ce.extend({name:"editor",css:Qe,classes:We});(function(){try{return window.Quill}catch{return null}})();const me={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]}},emits:["update:modelValue","emit:fileUpload"],setup(c,{emit:r}){const n=c,l=H(n,"modelValue"),_=L([{title:"text",slot:"editor",icon:De},{title:"file",slot:"file",icon:Te}]);return(p,a)=>(V(),N(Ge,{"tab-panel-list":_.value,"panel-container-class":"px-0"},{editor:s(()=>[t(Ye,{modelValue:e(l),"onUpdate:modelValue":a[0]||(a[0]=q=>Y(l)?l.value=q:null)},null,8,["modelValue"])]),file:s(()=>[I("div",{class:ze(n.fileUploadContainerClasses)},[t(He,{files:n.files,"onEmit:fileUpload":a[1]||(a[1]=q=>r("emit:fileUpload",q))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},Xe={class:"flex flex-col justify-between h-full"},Ze={class:"px-6 py-4 overflow-y-auto"},el={class:"actions p-6"},ue={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(c,{emit:r}){return(n,l)=>{const _=xe;return V(),F("div",Xe,[I("div",Ze,[ye(n.$slots,"default")]),I("div",el,[t(_,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=p=>r("emit:clearForm"))}),t(_,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=p=>r("emit:preview"))})])])}}},ll=J("sd-stores-inner",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,document_type:E.INNER,document_sub_type:K.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:be.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{register_number:{required:g.withMessage("Поле не должен быть пустым",w)},short_description:{required:g.withMessage("Поле не должен быть пустым",w)},content:{required:g.withMessage("Поле не должен быть пустым",w)},__departments:{required:g.withMessage("Поле не должен быть пустым",w)},__approvers:{},__signers:{required:g.withMessage("Поле не должен быть пустым",w)}}}),actions:{async actionCreateDocument(c){let r={...c,type:ke,sub_type:ke};this.buttonLoading=!0;const{response:n,error:l}=await te(se,r);return n?(this.buttonLoading=!1,Promise.resolve(n)):Promise.reject(l)},async actionUpdateDocument({id:c,body:r}){try{this.buttonLoading=!0;const{data:n}=await ie({id:c,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:r}=await ae(c);qe(this.model,r),this.model.__approvers=await x(r.approvers),this.model.__signers=await x(r.signers),this.model.__departments=await je(r.receiver.departments),this.model.__files=r.files}catch{}finally{this.detailLoading=!1}}}}),nl={class:"font-semibold text-xl"},fe={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(c,{emit:r}){const l=H(c,"modelValue"),{t:_}=j();return(p,a)=>{const q=xe,f=Je;return V(),N(f,{modelValue:e(l),"onUpdate:modelValue":a[1]||(a[1]=i=>Y(l)?l.value=i:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:s(()=>[I("span",nl,ge(e(_)("preview")),1)]),content:s(()=>[ye(p.$slots,"content")]),footer:s(()=>[t(q,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(q,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:c.sendButtonLoading,onClick:a[0]||(a[0]=i=>r("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},Al={__name:"InnerForm",props:{formType:{type:String,default:y}},setup(c){const r=c,n=P(),l=ll();we();const _=re(),p=L(!1);L(null);const{t:a}=j(),q=Q(),f=W(),i=ne(l.rules,l.model),C=async()=>{await i.value.$validate()&&(p.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(o=>o.id),l.model.files=[],l.model.files=l.model.__files.map(o=>({id:o.id})),l.model.sender=n.currentUser.top_level_department.id,l.model.approvers=M(l.model.__approvers),l.model.signers=M(l.model.__signers))},D=()=>{r.formType===y?T():z()},T=async()=>{const b=await l.actionCreateDocument(l.model);await _.actionDocumentCountList(),b?(p.value=!1,$(null,a("document-sent"),U.SUCCESS),await q.replace({name:de,query:{document_type:E.INNER}})):$(null,a("error-occurred"),U.ERROR)},z=async()=>{await l.actionUpdateDocument({id:f.params.id,body:l.model}),await _.actionDocumentCountList(),$(null,a("document-sent"),U.SUCCESS),await q.replace({name:ce,params:{id:f.params.id,document_type:E.INNER,document_sub_type:K.SERVICE_LETTER}})},R=()=>{console.log("Clear Form")},O=b=>{l.model.__files=[],b.forEach(o=>{l.model.__files.push(o)})};return X(async()=>{f.params.id&&await l.actionGetDocumentDetailForUpdate(f.params.id)}),Z(()=>{pe(l.model)}),(b,o)=>{const v=le,m=ve,u=G,k=B;return e(l).detailLoading?(V(),N(v,{key:0})):(V(),F(ee,{key:1},[t(e(oe),{title:r.formType===e(y)?"create-sd-inner":"update-sd-inner"},{content:s(()=>[t(ue,{"onEmit:preview":C,"onEmit:clearForm":R},{default:s(()=>[t(k,null,{default:s(()=>[t(u,{"col-class":"w-1/2"},{default:s(()=>[t(m,{modelValue:e(i).register_number.$model,"onUpdate:modelValue":o[0]||(o[0]=h=>e(i).register_number.$model=h),error:e(i).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:s(()=>[t(Ne,{modelValue:e(i).__departments.$model,"onUpdate:modelValue":o[1]||(o[1]=h=>e(i).__departments.$model=h),error:e(i).__departments},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:s(()=>[t(m,{modelValue:e(i).short_description.$model,"onUpdate:modelValue":o[2]||(o[2]=h=>e(i).short_description.$model=h),error:e(i).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__approvers.$model,"onUpdate:modelValue":o[3]||(o[3]=h=>e(i).__approvers.$model=h),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(u,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__signers.$model,"onUpdate:modelValue":o[4]||(o[4]=h=>e(i).__signers.$model=h),error:e(i).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(u,{"col-class":"w-full"},{default:s(()=>[t(me,{modelValue:e(i).content.$model,"onUpdate:modelValue":o[5]||(o[5]=h=>e(i).content.$model=h),error:e(i).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:p.value,"onUpdate:modelValue":o[6]||(o[6]=h=>p.value=h),"send-button-loading":e(l).buttonLoading,"onEmit:send":D},{content:s(()=>{var h,d;return[t(Me,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(d=(h=e(n).currentUser)==null?void 0:h.top_level_department)==null?void 0:d.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},ol=J("sd-store-application",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:g.withMessage("Поле не должен быть пустым",w)},__curator:{required:g.withMessage("Поле не должен быть пустым",w)},__approvers:{required:g.withMessage("Поле не должен быть пустым",w)},__signers:{}}}),actions:{async actionCreateDocument(c){let r={...c};this.buttonLoading=!0;const{response:n,error:l}=await te(se,r);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:r}){try{this.buttonLoading=!0;const{data:n}=await ie({id:c,body:r});return Promise.resolve(n)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:r}=await ae(c);qe(this.model,r),this.model.__approvers=await x(r.approvers),this.model.__signers=await x(r.signers.filter(n=>n.type===A.SIGNER)),this.model.__curator=await x([],r.curator.id,!1),this.model.__files=r.files}catch{}finally{this.detailLoading=!1}}}}),Le=J("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:P().currentUser.company.id,curator:null,document_type:E.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:be.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:g.withMessage("Поле не должен быть пустым",w)},register_date:{required:g.withMessage("Поле не должен быть пустым",w)},content:{required:g.withMessage("Поле не должен быть пустым",w)},__negotiators:{required:g.withMessage("Поле не должен быть пустым",w)},__curator:{required:g.withMessage("Поле не должен быть пустым",w)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:r,error:n}=await te(se,c);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:c,body:r}){try{this.buttonLoading=!0;const{data:n}=await ie({id:c,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:r}=await ae(c);qe(this.model,r),this.model.__signers=await x(r.signers.filter(n=>n.type!==A.NEGOTIATOR)),this.model.__negotiators=await x(r.signers.filter(n=>n.type===A.NEGOTIATOR)),this.model.__approvers=await x(r.approvers),this.model.__curator=await x([],r.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),tl={class:"user-select"},he={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(c,{emit:r}){const n=c,l=L([]),_=H(n,"modelValue"),p=async a=>{let{data:q}=await Ae.get("users/",a);q.hasOwnProperty("results")?l.value=q.results:l.value=q};return X(async()=>{await p(n.apiParams)}),(a,q)=>(V(),F("div",tl,[t(Ue,{modelValue:e(_),"onUpdate:modelValue":q[0]||(q[0]=f=>Y(_)?_.value=f:null),options:l.value,"onUpdate:options":q[1]||(q[1]=f=>l.value=f),error:n.error,"api-url":"users","option-label":"full_name",label:n.label,placeholder:n.placeholder,required:n.required,searchable:""},{option:s(({option:f})=>[t(e(Ke),{items:[f]},null,8,["items"])]),_:1},8,["modelValue","options","error","label","placeholder","required"])]))}},jl={__name:"ApplicationForm",props:{formType:{type:String,default:y}},setup(c){const r=c,n=P(),l=ol();we();const _=re();Le();const p=L(!1);L(null);const{t:a}=j(),q=Q(),f=W(),i=ne(l.rules,l.model),C=async()=>{var o,v,m,u;await i.value.$validate()&&(p.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(o=n==null?void 0:n.currentUser)==null?void 0:o.id}],l.model.sender=(m=(v=n==null?void 0:n.currentUser)==null?void 0:v.top_level_department)==null?void 0:m.id,l.model.curator=(u=l==null?void 0:l.model)==null?void 0:u.__curator.id,l.model.journal=E.APPLICATION,l.model.document_type=f.params.document_type,l.model.document_sub_type=f.params.document_sub_type,l.model.approvers=M(l.model.__approvers))},D=async()=>{},T=()=>{r.formType===y?z():R()},z=async()=>{const b=await l.actionCreateDocument(l.model);await _.actionDocumentCountList(),b?(p.value=!1,$(null,a("document-sent"),U.SUCCESS),await q.replace({name:de,query:{document_type:E.APPLICATION}})):$(null,a("error-occurred"),U.ERROR)},R=async()=>{await l.actionUpdateDocument({id:f.params.id,body:l.model}),await _.actionDocumentCountList(),$(null,a("document-sent"),U.SUCCESS),await q.replace({name:ce,params:{id:f.params.id,document_type:E.APPLICATION,document_sub_type:K.LABOR_LEAVE}})},O=b=>{l.model.__files=[],b.forEach(o=>{l.model.__files.push(o)})};return X(async()=>{f.params.id&&await l.actionGetDocumentDetailForUpdate(f.params.id)}),Z(()=>{pe(l.model)}),(b,o)=>{const v=le,m=G,u=B;return e(l).detailLoading?(V(),N(v,{key:0})):(V(),F(ee,{key:1},[t(e(oe),{title:r.formType===e(y)?"create-sd-application":"update-sd-application"},{content:s(()=>[t(ue,{"onEmit:preview":C,"onEmit:clearForm":D},{default:s(()=>[t(u,null,{default:s(()=>[t(m,{"col-class":"w-1/2"},{default:s(()=>[t(he,{modelValue:e(i).__curator.$model,"onUpdate:modelValue":o[0]||(o[0]=k=>e(i).__curator.$model=k),error:e(i).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__approvers.$model,"onUpdate:modelValue":o[1]||(o[1]=k=>e(i).__approvers.$model=k),error:e(i).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__signers.$model,"onUpdate:modelValue":o[2]||(o[2]=k=>e(i).__signers.$model=k),disabled:"",label:"signers",placeholder:e(n).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(m,{"col-class":"w-full"},{default:s(()=>[t(me,{modelValue:e(i).content.$model,"onUpdate:modelValue":o[3]||(o[3]=k=>e(i).content.$model=k),error:e(i).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:p.value,"onUpdate:modelValue":o[4]||(o[4]=k=>p.value=k),"send-button-loading":e(l).buttonLoading,"onEmit:send":T},{content:s(()=>[t(Fe,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:r.formType===e(y)?e(n).currentUser:e(l).model.__signers[0].user,signers:r.formType===e(y)?[e(n).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},rl={__name:"BranchMultiSelect",props:{modelValue:{type:[Array],default:[]},required:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(c,{emit:r}){const n=c,l=H(n,"modelValue");return(_,p)=>(V(),N(Ee,{modelValue:e(l),"onUpdate:modelValue":p[0]||(p[0]=a=>Y(l)?l.value=a:null),"api-url":"companies","api-params":{condition:"A"},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"branch",required:n.required,type:"department","selection-length":2,placeholder:"enter-branch"},{chip:s(({value:a})=>[Ve(ge(a.name),1)]),option:s(({value:a})=>[t(e(Se),{title:a.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","required"]))}},il=J("sd-notice-store",{state:()=>{const c=P();return{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:c.currentUser.company.id,content:null,curator:null,document_type:E.NOTICE,document_sub_type:K.BUSINESS_TRIP,journal:be.INNER,notices:[],start_date:null,end_date:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:g.withMessage("Поле не должен быть пустым",w)},start_date:{required:g.withMessage("Поле не должен быть пустым",w)},route:{required:g.withMessage("Поле не должен быть пустым",w)},content:{required:g.withMessage("Поле не должен быть пустым",w)},__companies:{required:g.withMessage("Поле не должен быть пустым",w)},__curator:{required:g.withMessage("Поле не должен быть пустым",w)},__employees:{required:g.withMessage("Поле не должен быть пустым",w)},__signers:{required:g.withMessage("Поле не должен быть пустым",w)},__tags:{required:g.withMessage("Поле не должен быть пустым",w)}}}},actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:r,error:n}=await te(se,c);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:c,body:r}){try{this.buttonLoading=!0;const{data:n}=await ie({id:c,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:r}=await ae(c);qe(this.model,r),this.model.__companies=[],this.model.__curator=await x([],r.curator.id,!1),this.model.__employees=await x(r.notices),this.model.__approvers=await x(r.approvers),this.model.__signers=await x(r.signers),this.model.__companies=await Be(r.notices[0].destinations),this.model.start_date=r.notices[0].start_date,this.model.end_date=r.notices[0].end_date,this.model.__tags=r.tags,this.model.route=r.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),al={class:"flex w-full gap-x-4"},Bl={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:y}},setup(c){const r=c,{t:n}=j(),l=W(),_=Q(),p=P(),a=il(),q=re();we();const f=L(!1),i=ne(a.rules,a.model),C=async()=>{var o,v,m;await i.value.$validate()&&(a.model.approvers=[],a.model.signers=[],a.model.notices=[],a.model.approvers=M(a.model.__approvers),a.model.signers=M(a.model.__signers),a.model.curator=(o=a==null?void 0:a.model)==null?void 0:o.__curator.id,a.model.notices=a.model.__employees.map(u=>({start_date:a.model.start_date,end_date:a.model.end_date,user:u.id,route:a.model.route,companies:a.model.__companies.map(k=>k.id)})),a.model.sender=(m=(v=p==null?void 0:p.currentUser)==null?void 0:v.top_level_department)==null?void 0:m.id,a.model.tags=a.model.__tags.map(u=>({id:u.id})),a.model.files=a.model.__files.map(u=>({id:u.id})),f.value=!0)},D=()=>{},T=b=>{a.model.__files=[],b.forEach(o=>{a.model.__files.push(o)})},z=async()=>{const b=await a.actionCreateDocument(a.model);await q.actionDocumentCountList(),b?(f.value=!1,$(null,n("document-sent"),U.SUCCESS),await _.replace({name:de,query:{document_type:E.NOTICE}})):$(null,n("error-occurred"),U.ERROR)},R=async()=>{await a.actionUpdateDocument({id:l.params.id,body:a.model}),await q.actionDocumentCountList(),$(null,n("changed"),U.SUCCESS),await _.replace({name:ce,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},O=()=>{r.formType===y?z():R()};return Re(async()=>{l.params.id&&await a.actionGetDocumentDetailForUpdate(l.params.id)}),Z(()=>{pe(a.model)}),(b,o)=>{const v=le,m=G,u=$e,k=Ue,h=B;return e(a).detailLoading?(V(),N(v,{key:0})):(V(),F(ee,{key:1},[t(e(oe),{title:r.formType===e(y)?"create-business-trip-notice":"update-business-trip-notice"},{content:s(()=>[t(ue,{"onEmit:preview":C,"onEmit:clearForm":D},{default:s(()=>[t(h,null,{default:s(()=>[t(m,{"col-class":"w-1/2"},{default:s(()=>[t(he,{modelValue:e(i).__curator.$model,"onUpdate:modelValue":o[0]||(o[0]=d=>e(i).__curator.$model=d),error:e(i).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__employees.$model,"onUpdate:modelValue":o[1]||(o[1]=d=>e(i).__employees.$model=d),error:e(i).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(rl,{modelValue:e(i).__companies.$model,"onUpdate:modelValue":o[2]||(o[2]=d=>e(i).__companies.$model=d),error:e(i).__companies},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[I("div",al,[t(u,{modelValue:e(i).start_date.$model,"onUpdate:modelValue":[o[3]||(o[3]=d=>e(i).start_date.$model=d),o[4]||(o[4]=d=>e(i).start_date.$model=e(_e)(d))],error:e(i).start_date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error"]),t(u,{modelValue:e(i).end_date.$model,"onUpdate:modelValue":[o[5]||(o[5]=d=>e(i).end_date.$model=d),o[6]||(o[6]=d=>e(i).end_date.$model=e(_e)(d))],error:e(i).end_date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error"])])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(Ee,{modelValue:e(i).__tags.$model,"onUpdate:modelValue":o[7]||(o[7]=d=>e(i).__tags.$model=d),error:e(i).__tags,"api-url":"tags","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:s(({value:d})=>[Ve(ge(d.name),1)]),option:s(({value:d})=>[t(e(Se),{title:d.name},null,8,["title"])]),_:1},8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(k,{modelValue:e(i).route.$model,"onUpdate:modelValue":o[8]||(o[8]=d=>e(i).route.$model=d),error:e(i).route,options:e(Oe),required:"","option-label":"label","option-value":"value",label:"route",placeholder:"select-route"},null,8,["modelValue","error","options"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":o[9]||(o[9]=d=>e(a).model.__approvers=d),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__signers.$model,"onUpdate:modelValue":o[10]||(o[10]=d=>e(i).__signers.$model=d),error:e(i).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:s(()=>[t(me,{modelValue:e(i).content.$model,"onUpdate:modelValue":o[11]||(o[11]=d=>e(i).content.$model=d),error:e(i).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":T},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:f.value,"onUpdate:modelValue":o[12]||(o[12]=d=>f.value=d),"send-button-loading":e(a).buttonLoading,"onEmit:send":O},{content:s(()=>[t(e(Pe),{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Gl={__name:"OrderForm",props:{formType:{type:String,default:y}},setup(c){const r=c,n=Le(),l=re(),_=P(),p=W(),a=Q(),q=ne(n.rules,n.model),{t:f}=j(),i=L(!1),C=async()=>{var o,v,m;await q.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=M(n.model.__approvers),n.model.curator=(o=n==null?void 0:n.model)==null?void 0:o.__curator.id,n.model.sender=(m=(v=_==null?void 0:_.currentUser)==null?void 0:v.top_level_department)==null?void 0:m.id,n.model.files=n.model.__files.map(u=>({id:u.id})),n.model.document_sub_type=p.params.document_sub_type,n.model.register_date=_e(n.model.register_date),n.model.__negotiators.forEach(u=>{n.model.signers.push(u.hasOwnProperty("user")?{id:u.id,user:u.user.id,type:A.NEGOTIATOR}:{user:u.id,type:A.NEGOTIATOR})}),p.query.compose_id&&(n.model.trip_notice_id=p.query.compose_id),i.value=!0)},D=()=>{},T=async()=>{const b=await n.actionCreateDocument(n.model);await l.actionDocumentCountList(),b?(i.value=!1,$(null,f("document-sent"),U.SUCCESS),await a.replace({name:de,query:{document_type:E.ORDER}})):$(null,f("error-occurred"),U.ERROR)},z=async()=>{await n.actionUpdateDocument({id:p.params.id,body:n.model}),await l.actionDocumentCountList(),$(null,f("changed"),U.SUCCESS),await a.replace({name:ce,params:{id:p.params.id,document_type:p.params.document_type,document_sub_type:p.params.document_sub_type}})},R=()=>{r.formType===y?T():z()},O=b=>{n.model.__files=[],b.forEach(o=>{n.model.__files.push(o)})};return X(async()=>{p.params.id&&await n.actionGetDocumentDetailForUpdate(p.params.id)}),Z(()=>{pe(n.model)}),(b,o)=>{const v=le,m=G,u=ve,k=$e,h=B;return e(n).detailLoading?(V(),N(v,{key:0})):(V(),F(ee,{key:1},[t(e(oe),{title:r.formType===e(y)?"create-order":"update-order"},{content:s(()=>[t(ue,{"onEmit:preview":C,"onEmit:clearForm":D},{default:s(()=>[t(h,null,{default:s(()=>[t(m,{"col-class":"w-1/2"},{default:s(()=>[t(he,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":o[0]||(o[0]=d=>e(q).__curator.$model=d),error:e(q).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(u,{modelValue:e(q).register_number.$model,"onUpdate:modelValue":o[1]||(o[1]=d=>e(q).register_number.$model=d),error:e(q).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(k,{modelValue:e(q).register_date.$model,"onUpdate:modelValue":o[2]||(o[2]=d=>e(q).register_date.$model=d),error:e(q).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":o[3]||(o[3]=d=>e(n).model.__approvers=d),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(m,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(q).__negotiators.$model,"onUpdate:modelValue":o[4]||(o[4]=d=>e(q).__negotiators.$model=d),error:e(q).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(m,{"col-class":"w-full"},{default:s(()=>[t(me,{modelValue:e(q).content.$model,"onUpdate:modelValue":o[5]||(o[5]=d=>e(q).content.$model=d),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(fe,{modelValue:i.value,"onUpdate:modelValue":o[6]||(o[6]=d=>i.value=d),"send-button-loading":e(n).buttonLoading,"onEmit:send":R},{content:s(()=>[t(e(Ie),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{Al as _,Bl as a,jl as b,Gl as c};
