import{_ as H}from"./BaseRow-dcbad0b0.js";import{_ as Y}from"./BaseDropdown-de3e0d6c.js";import{_ as Q}from"./BaseCol-ecd17f5e.js";import{_ as xe}from"./BaseInput-06bea577.js";import{B as Te,O as W,E as T,cG as De,cw as ze,o as U,g as N,w as a,p as o,q as e,Q as J,i as I,z as Re,k as F,j as Ve,_ as Ue,aW as K,bT as S,bU as X,bq as ge,t as A,A as we,u as Z,ar as ee,ae as j,c8 as Oe,F as le,as as $,ah as ne,cC as B,a2 as $e,cH as Ne}from"./index-17e22bab.js";import{c as h,r as k,u as oe}from"./index-06a3d559.js";import{_ as Pe}from"./DepartmentMultiSelect-9ca9e82c.js";import{_ as Fe,a as Me,b as Ie,c as Ae}from"./OrderLetterTemplate-c2c5b44f.js";import{L as te}from"./LayoutWithTabsCompose-683eac0c.js";import{_ as C}from"./UserMultiSelect-e6f133c1.js";import{w as re,u as M,d as E,c as je}from"./axios.config-5778981d.js";import{u as ie,k as ae,j as G}from"./common-4873c50c.js";import{c as se,b as de,d as ce}from"./index.service-28632593.js";import{d as ve,e as qe,c as pe}from"./index-c4c1f2d4.js";import{s as ue,j as Be,k as P,i as ye}from"./index-ecf352d2.js";import{F as V}from"./constants-5c471c97.js";import{_ as Ee}from"./BaseCalendar-d0909518.js";import{a as Ge,_ as Se}from"./WithLabel-0359f97b.js";import{f as _e}from"./formatDate-aa55ca0d.js";import"./qrcode.vue.esm-e5ee6163.js";import"./Dropdown-5c1459a3.js";import"./menu.esm-32d87b70.js";import"./radiobutton.esm-e8d90e53.js";import"./avatar.esm-cc7714c7.js";/* empty css                                                 */import"./WithSelectable.vue_vue_type_style_index_0_lang-14026ee9.js";import{_ as Le}from"./WithRadio-89371250.js";import"./checkbox.esm-b0e32180.js";import"./dayjs.min-95f4aa7e.js";import{_ as He}from"./BaseBrickTab-58d0468b.js";import{_ as Ye}from"./BaseFileUpload-bf92fa47.js";import{_ as Qe}from"./BaseFroalaEditor-c79e0c46.js";import{_ as We}from"./BaseDialog-e23ef7cb.js";var Je=`
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
`,Ke={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Te.extend({name:"editor",css:Je,classes:Ke});(function(){try{return window.Quill}catch{return null}})();const me={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]}},emits:["update:modelValue","emit:fileUpload"],setup(c,{emit:t}){const l=c,n=W(l,"modelValue"),g=T([{title:"text",slot:"editor",icon:De},{title:"file",slot:"file",icon:ze}]);return(_,r)=>(U(),N(He,{"tab-panel-list":g.value,"panel-container-class":"px-0"},{editor:a(()=>[o(Qe,{modelValue:e(n),"onUpdate:modelValue":r[0]||(r[0]=q=>J(n)?n.value=q:null)},null,8,["modelValue"])]),file:a(()=>[I("div",{class:Re(l.fileUploadContainerClasses)},[o(Ye,{files:l.files,"onEmit:fileUpload":r[1]||(r[1]=q=>t("emit:fileUpload",q))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},Xe={class:"flex flex-col justify-between h-full"},Ze={class:"px-6 py-4 overflow-y-auto"},el={class:"actions p-6"},fe={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(c,{emit:t}){return(l,n)=>{const g=Ue;return U(),F("div",Xe,[I("div",Ze,[Ve(l.$slots,"default")]),I("div",el,[o(g,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:n[0]||(n[0]=_=>t("emit:clearForm"))}),o(g,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:n[1]||(n[1]=_=>t("emit:preview"))})])])}}},ll=K("sd-stores-inner",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,document_type:S.INNER,document_sub_type:X.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:ge.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",k)},title:{required:h.withMessage("Поле не должен быть пустым",k)},short_description:{required:h.withMessage("Поле не должен быть пустым",k)},content:{required:h.withMessage("Поле не должен быть пустым",k)},__departments:{required:h.withMessage("Поле не должен быть пустым",k)},__approvers:{},__signers:{required:h.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(c){let t={...c,type:ve,sub_type:ve};this.buttonLoading=!0;const{response:l,error:n}=await re(ce,t);return l?(this.buttonLoading=!1,Promise.resolve(l)):Promise.reject(n)},async actionUpdateDocument({id:c,body:t}){try{this.buttonLoading=!0;const{data:l}=await se({id:c,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:t}=await de(c);ue(this.model,t),this.model.__departments=t.receiver.departments,this.model.__signers=t.signers,this.model.__approvers=t.approvers,this.model.__files=t.files,console.log(this.model)}catch{}finally{this.detailLoading=!1}}}}),nl={class:"font-semibold text-xl"},be={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(c,{emit:t}){const n=W(c,"modelValue"),{t:g}=A();return(_,r)=>{const q=Ue,u=We;return U(),N(u,{modelValue:e(n),"onUpdate:modelValue":r[1]||(r[1]=d=>J(n)?n.value=d:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:a(()=>[I("span",nl,we(e(g)("preview")),1)]),content:a(()=>[Ve(_.$slots,"content")]),footer:a(()=>[o(q,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(q,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:c.sendButtonLoading,onClick:r[0]||(r[0]=d=>t("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},Il={__name:"InnerForm",props:{formType:{type:String,default:V}},setup(c){const t=c,l=M(),n=ll(),g=ie(),_=ae(),r=T(!1);T(null);const{t:q}=A(),u=Z(),d=ee(),b=oe(n.rules,n.model),y=async()=>{await b.value.$validate()&&(r.value=!0,n.model.approvers=[],n.model.signers=[],n.model.departments=[],n.model.departments=n.model.__departments.map(m=>m.id),n.model.files=[],n.model.files=n.model.__files.map(m=>({id:m.id})),n.model.sender=l.currentUser.top_level_department.id,n.model.approvers=P(n.model.__approvers),n.model.signers=P(n.model.__signers))},D=()=>{t.formType===V?z():R()},z=async()=>{const i=await n.actionCreateDocument(n.model);await _.actionDocumentCountList(),i?(r.value=!1,E(null,q("document-sent"),$.SUCCESS),await u.replace({name:qe,query:{document_type:S.INNER}})):E(null,q("error-occurred"),$.ERROR)},R=async()=>{await n.actionUpdateDocument({id:d.params.id,body:n.model}),await _.actionDocumentCountList(),E(null,q("document-sent"),$.SUCCESS),await u.replace({name:pe,params:{id:d.params.id,document_type:S.INNER,document_sub_type:X.SERVICE_LETTER}})},O=()=>{console.log("Clear Form")},x=i=>{n.model.__files=[],i.forEach(m=>{n.model.__files.push(m)})};return j(async()=>{d.params.id&&await n.actionGetDocumentDetailForUpdate(d.params.id)}),Oe(()=>{Be(n.model)}),(i,m)=>{const p=ne,w=xe,v=Q,L=Y,s=H;return e(n).detailLoading?(U(),N(p,{key:0})):(U(),F(le,{key:1},[o(e(te),{title:t.formType===e(V)?"create-sd-inner":"update-sd-inner"},{content:a(()=>[o(fe,{"onEmit:preview":y,"onEmit:clearForm":O},{default:a(()=>[o(s,null,{default:a(()=>[o(v,{"col-class":"w-1/2"},{default:a(()=>[o(w,{modelValue:e(b).register_number.$model,"onUpdate:modelValue":m[0]||(m[0]=f=>e(b).register_number.$model=f),error:e(b).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:a(()=>[o(Pe,{modelValue:e(b).__departments.$model,"onUpdate:modelValue":m[1]||(m[1]=f=>e(b).__departments.$model=f),error:e(b).__departments},null,8,["modelValue","error"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:a(()=>[o(L,{modelValue:e(b).title.$model,"onUpdate:modelValue":m[2]||(m[2]=f=>e(b).title.$model=f),options:e(g).documentTitleList,"onUpdate:options":m[3]||(m[3]=f=>e(g).documentTitleList=f),error:e(b).title,"api-url":"document-titles","option-label":"name","option-value":"id",label:"naming",placeholder:"enter-naming",required:"",searchable:""},null,8,["modelValue","options","error"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:a(()=>[o(w,{modelValue:e(b).short_description.$model,"onUpdate:modelValue":m[4]||(m[4]=f=>e(b).short_description.$model=f),error:e(b).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:a(()=>[o(C,{modelValue:e(b).__approvers.$model,"onUpdate:modelValue":m[5]||(m[5]=f=>e(b).__approvers.$model=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:a(()=>[o(C,{modelValue:e(b).__signers.$model,"onUpdate:modelValue":m[6]||(m[6]=f=>e(b).__signers.$model=f),error:e(b).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(v,{"col-class":"w-full"},{default:a(()=>[o(me,{modelValue:e(b).content.$model,"onUpdate:modelValue":m[7]||(m[7]=f=>e(b).content.$model=f),error:e(b).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":x},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(be,{modelValue:r.value,"onUpdate:modelValue":m[8]||(m[8]=f=>r.value=f),"send-button-loading":e(n).buttonLoading,"onEmit:send":D},{content:a(()=>{var f,ke;return[o(Fe,{"compose-model":{...e(n).model,signers:e(n).model.__signers,approvers:e(n).model.__approvers,author:e(n).model.__signers[0],sender:{name:(ke=(f=e(l).currentUser)==null?void 0:f.top_level_department)==null?void 0:ke.name},receiver:{departments:e(n).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},ol=K("sd-store-application",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",k)},__curator:{required:h.withMessage("Поле не должен быть пустым",k)},document_sub_type:{required:h.withMessage("Поле не должен быть пустым",k)},__signers:{}}}),actions:{async actionCreateDocument(c){let t={...c};this.buttonLoading=!0;const{response:l,error:n}=await re(ce,t);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:c,body:t}){try{this.buttonLoading=!0;const{data:l}=await se({id:c,body:t});return Promise.resolve(l)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:t}=await de(c);ue(this.model,t),this.model.__approvers=t.approvers,this.model.__files=t.files,this.model.__curator=G().usersList.find(l=>l.id===t.curator.id),this.model.__signers=t.signers}catch{}finally{this.detailLoading=!1}}}}),Ce=K("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:M().currentUser.company.id,curator:null,document_type:S.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:ge.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",k)},register_date:{required:h.withMessage("Поле не должен быть пустым",k)},content:{required:h.withMessage("Поле не должен быть пустым",k)},__negotiators:{required:h.withMessage("Поле не должен быть пустым",k)},__curator:{required:h.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:t,error:l}=await re(ce,c);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:t}){try{this.buttonLoading=!0;const{data:l}=await se({id:c,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:t}=await de(c);ue(this.model,t),this.model.__signers=t.signers.filter(l=>l.type!==B.NEGOTIATOR),this.model.__negotiators=t.signers.filter(l=>l.type===B.NEGOTIATOR),this.model.__approvers=t.approvers,this.model.__curator=G().usersList.find(l=>l.id===t.curator.id)}catch{}finally{this.detailLoading=!1}}}}),tl={class:"user-select"},he={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(c,{emit:t}){const l=c,n=T([]),g=W(l,"modelValue"),_=async r=>{let{data:q}=await je.get("users/",r);q.hasOwnProperty("results")?n.value=q.results:n.value=q};return j(async()=>{await _(l.apiParams)}),(r,q)=>(U(),F("div",tl,[o(Y,{modelValue:e(g),"onUpdate:modelValue":q[0]||(q[0]=u=>J(g)?g.value=u:null),options:n.value,"onUpdate:options":q[1]||(q[1]=u=>n.value=u),error:l.error,"api-url":"users","option-label":"full_name",label:l.label,placeholder:l.placeholder,required:l.required,searchable:""},{option:a(({option:u})=>[o(e(Ge),{compact:!0,label:e(ye)(u==null?void 0:u.user)?u==null?void 0:u.user.full_name:u==null?void 0:u.full_name,title:e(ye)(u==null?void 0:u.user)?u==null?void 0:u.user.full_name:u==null?void 0:u.full_name,color:"#635AFF","avatar-classes":"w-6 h-6"},null,8,["label","title"])]),_:1},8,["modelValue","options","error","label","placeholder","required"])]))}},Al={__name:"ApplicationForm",props:{formType:{type:String,default:V}},setup(c){const t=c,l=M(),n=ol(),g=ie(),_=ae(),r=Ce(),q=T(!1);T(null);const{t:u}=A(),d=Z(),b=ee(),y=oe(n.rules,n.model),D=async()=>{var p,w,v,L;await y.value.$validate()&&(q.value=!0,n.model.approvers=[],n.model.signers=[],n.model.signers=[{user:(p=l==null?void 0:l.currentUser)==null?void 0:p.id}],n.model.sender=(v=(w=l==null?void 0:l.currentUser)==null?void 0:w.top_level_department)==null?void 0:v.id,n.model.curator=(L=n==null?void 0:n.model)==null?void 0:L.__curator.id,n.model.journal=S.APPLICATION,n.model.document_type=g.documentTypesList.find(s=>s.id===Number(S.APPLICATION)).id,n.model.approvers=P(n.model.__approvers))},z=async()=>{},R=()=>{t.formType===V?O():x()},O=async()=>{const m=await n.actionCreateDocument(n.model);await _.actionDocumentCountList(),m?(q.value=!1,E(null,u("document-sent"),$.SUCCESS),await d.replace({name:qe,query:{document_type:S.APPLICATION}})):E(null,u("error-occurred"),$.ERROR)},x=async()=>{await n.actionUpdateDocument({id:b.params.id,body:n.model}),await _.actionDocumentCountList(),E(null,u("document-sent"),$.SUCCESS),await d.replace({name:pe,params:{id:b.params.id,document_type:S.APPLICATION,document_sub_type:X.LABOR_LEAVE}})},i=m=>{n.model.__files=[],m.forEach(p=>{n.model.__files.push(p)})};return j(async()=>{b.params.id&&await n.actionGetDocumentDetailForUpdate(b.params.id)}),(m,p)=>{const w=ne,v=Q,L=Y,s=H;return e(n).detailLoading?(U(),N(w,{key:0})):(U(),F(le,{key:1},[o(e(te),{title:t.formType===e(V)?"create-sd-application":"update-sd-application"},{content:a(()=>[o(fe,{"onEmit:preview":D,"onEmit:clearForm":z},{default:a(()=>[o(s,null,{default:a(()=>[o(v,{"col-class":"w-1/2"},{default:a(()=>[o(he,{modelValue:e(y).__curator.$model,"onUpdate:modelValue":p[0]||(p[0]=f=>e(y).__curator.$model=f),error:e(y).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:a(()=>[o(L,{modelValue:e(y).document_sub_type.$model,"onUpdate:modelValue":p[1]||(p[1]=f=>e(y).document_sub_type.$model=f),options:e(g).documentSubTypesList,"onUpdate:options":p[2]||(p[2]=f=>e(g).documentSubTypesList=f),error:e(y).document_sub_type,"api-url":"document-sub-types","option-label":"name","option-value":"id",label:"application-type",placeholder:"select-application-type",required:"",searchable:""},null,8,["modelValue","options","error"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:a(()=>[o(C,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":p[3]||(p[3]=f=>e(r).model.__approvers=f),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:a(()=>[o(C,{modelValue:e(y).__signers.$model,"onUpdate:modelValue":p[4]||(p[4]=f=>e(y).__signers.$model=f),disabled:"",label:"signers",placeholder:e(l).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),o(v,{"col-class":"w-full"},{default:a(()=>[o(me,{modelValue:e(y).content.$model,"onUpdate:modelValue":p[5]||(p[5]=f=>e(y).content.$model=f),error:e(y).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":i},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(be,{modelValue:q.value,"onUpdate:modelValue":p[6]||(p[6]=f=>q.value=f),"send-button-loading":e(n).buttonLoading,"onEmit:send":R},{content:a(()=>[o(Me,{"compose-model":{...e(n).model,curator:e(n).model.__curator[0],author:t.formType===e(V)?e(l).currentUser:e(n).model.__signers[0].user,signers:t.formType===e(V)?[e(l).currentUser]:e(n).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},rl={__name:"BranchMultiSelect",props:{modelValue:{type:[Array],default:[]},required:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(c,{emit:t}){const l=c,n=W(l,"modelValue");return(g,_)=>(U(),N(Se,{modelValue:e(n),"onUpdate:modelValue":_[0]||(_[0]=r=>J(n)?n.value=r:null),"api-url":"companies","api-params":{condition:"A"},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"branch",required:l.required,type:"department","selection-length":2,placeholder:"enter-branch"},{chip:a(({value:r})=>[$e(we(r.name),1)]),option:a(({value:r})=>[o(e(Le),{title:r.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","required"]))}},il=K("sd-notice-store",{state:()=>{const c=M();return{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:c.currentUser.company.id,content:null,curator:null,document_type:S.NOTICE,document_sub_type:X.BUSINESS_TRIP,journal:ge.INNER,notices:[],start_date:null,end_date:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:h.withMessage("Поле не должен быть пустым",k)},start_date:{required:h.withMessage("Поле не должен быть пустым",k)},route:{required:h.withMessage("Поле не должен быть пустым",k)},content:{required:h.withMessage("Поле не должен быть пустым",k)},__companies:{required:h.withMessage("Поле не должен быть пустым",k)},__curator:{required:h.withMessage("Поле не должен быть пустым",k)},__employees:{required:h.withMessage("Поле не должен быть пустым",k)},__signers:{required:h.withMessage("Поле не должен быть пустым",k)},__tags:{required:h.withMessage("Поле не должен быть пустым",k)}}}},actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:t,error:l}=await re(ce,c);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:t}){try{this.buttonLoading=!0;const{data:l}=await se({id:c,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:t}=await de(c);console.log(t),ue(this.model,t),this.model.__signers=t.signers,this.model.__approvers=t.approvers,this.model.__curator=G().usersList.find(l=>l.id===t.curator.id),this.model.__employees=t.notices.map(l=>G().usersList.find(n=>n.id===l.user.id)),this.model.__companies=t.notices[0].destinations.map(l=>ie().filialList.find(n=>n.id===l.id)),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),al={class:"flex w-full gap-x-4"},jl={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:V}},setup(c){const t=c,{t:l}=A(),n=ee(),g=Z(),_=M(),r=il(),q=ae();ie();const u=T(!1),d=oe(r.rules,r.model),b=async()=>{var i,m,p;await d.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=P(r.model.__approvers),r.model.signers=P(r.model.__signers),r.model.curator=(i=r==null?void 0:r.model)==null?void 0:i.__curator.id,r.model.notices=r.model.__employees.map(w=>({start_date:r.model.start_date,end_date:r.model.end_date,user:w.id,route:r.model.route,companies:r.model.__companies.map(v=>v.id)})),r.model.sender=(p=(m=_==null?void 0:_.currentUser)==null?void 0:m.top_level_department)==null?void 0:p.id,r.model.tags=r.model.__tags.map(w=>({id:w.id})),r.model.files=r.model.__files.map(w=>({id:w.id})),u.value=!0)},y=()=>{},D=x=>{r.model.__files=[],x.forEach(i=>{r.model.__files.push(i)})},z=async()=>{const x=await r.actionCreateDocument(r.model);await q.actionDocumentCountList(),x?(u.value=!1,E(null,l("document-sent"),$.SUCCESS),await g.replace({name:qe,query:{document_type:S.NOTICE}})):E(null,l("error-occurred"),$.ERROR)},R=async()=>{await r.actionUpdateDocument({id:n.params.id,body:r.model}),await q.actionDocumentCountList(),E(null,l("changed"),$.SUCCESS),await g.replace({name:pe,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sub_type}})},O=()=>{t.formType===V?z():R()};return j(async()=>{n.params.id&&await r.actionGetDocumentDetailForUpdate(n.params.id)}),(x,i)=>{const m=ne,p=Q,w=Ee,v=Y,L=H;return e(r).detailLoading?(U(),N(m,{key:0})):(U(),F(le,{key:1},[o(e(te),{title:t.formType===e(V)?"create-business-trip-notice":"update-business-trip-notice"},{content:a(()=>[o(fe,{"onEmit:preview":b,"onEmit:clearForm":y},{default:a(()=>[o(L,null,{default:a(()=>[o(p,{"col-class":"w-1/2"},{default:a(()=>[o(he,{modelValue:e(d).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=s=>e(d).__curator.$model=s),error:e(d).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),o(p,{"col-class":"w-1/2"},{default:a(()=>[o(C,{modelValue:e(d).__employees.$model,"onUpdate:modelValue":i[1]||(i[1]=s=>e(d).__employees.$model=s),error:e(d).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),o(p,{"col-class":"w-1/2"},{default:a(()=>[o(rl,{modelValue:e(d).__companies.$model,"onUpdate:modelValue":i[2]||(i[2]=s=>e(d).__companies.$model=s),error:e(d).__companies},null,8,["modelValue","error"])]),_:1}),o(p,{"col-class":"w-1/2"},{default:a(()=>[I("div",al,[o(w,{modelValue:e(d).start_date.$model,"onUpdate:modelValue":[i[3]||(i[3]=s=>e(d).start_date.$model=s),i[4]||(i[4]=s=>e(d).start_date.$model=e(_e)(s))],error:e(d).start_date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error"]),o(w,{modelValue:e(d).end_date.$model,"onUpdate:modelValue":[i[5]||(i[5]=s=>e(d).end_date.$model=s),i[6]||(i[6]=s=>e(d).end_date.$model=e(_e)(s))],error:e(d).end_date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error"])])]),_:1}),o(p,{"col-class":"w-1/2"},{default:a(()=>[o(Se,{modelValue:e(d).__tags.$model,"onUpdate:modelValue":i[7]||(i[7]=s=>e(d).__tags.$model=s),error:e(d).__tags,"api-url":"tags","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:a(({value:s})=>[$e(we(s.name),1)]),option:a(({value:s})=>[o(e(Le),{title:s.name},null,8,["title"])]),_:1},8,["modelValue","error"])]),_:1}),o(p,{"col-class":"w-1/2"},{default:a(()=>[o(v,{modelValue:e(d).route.$model,"onUpdate:modelValue":i[8]||(i[8]=s=>e(d).route.$model=s),error:e(d).route,options:e(Ne),required:"","option-label":"label","option-value":"value",label:"route",placeholder:"select-route"},null,8,["modelValue","error","options"])]),_:1}),o(p,{"col-class":"w-1/2"},{default:a(()=>[o(C,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":i[9]||(i[9]=s=>e(r).model.__approvers=s),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(p,{"col-class":"w-1/2"},{default:a(()=>[o(C,{modelValue:e(d).__signers.$model,"onUpdate:modelValue":i[10]||(i[10]=s=>e(d).__signers.$model=s),error:e(d).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(p,{"col-class":"w-full"},{default:a(()=>[o(me,{modelValue:e(d).content.$model,"onUpdate:modelValue":i[11]||(i[11]=s=>e(d).content.$model=s),error:e(d).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(be,{modelValue:u.value,"onUpdate:modelValue":i[12]||(i[12]=s=>u.value=s),"send-button-loading":e(r).buttonLoading,"onEmit:send":O},{content:a(()=>[o(e(Ie),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Bl={__name:"OrderForm",props:{formType:{type:String,default:V}},setup(c){const t=c,l=Ce(),n=ae(),g=M(),_=ee(),r=Z(),q=oe(l.rules,l.model),{t:u}=A(),d=T(!1),b=async()=>{var i,m,p;await q.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=P(l.model.__approvers),l.model.curator=(i=l==null?void 0:l.model)==null?void 0:i.__curator.id,l.model.sender=(p=(m=g==null?void 0:g.currentUser)==null?void 0:m.top_level_department)==null?void 0:p.id,l.model.files=l.model.__files.map(w=>({id:w.id})),l.model.document_sub_type=_.params.document_sub_type,l.model.register_date=_e(l.model.register_date),l.model.__negotiators.forEach(w=>{l.model.signers.push(w.hasOwnProperty("user")?{id:w.id,user:w.user.id,type:B.NEGOTIATOR}:{user:w.id,type:B.NEGOTIATOR})}),_.query.compose_id&&(l.model.trip_notice_id=_.query.compose_id),d.value=!0)},y=()=>{},D=async()=>{const x=await l.actionCreateDocument(l.model);await n.actionDocumentCountList(),x?(d.value=!1,E(null,u("document-sent"),$.SUCCESS),await r.replace({name:qe,query:{document_type:S.ORDER}})):E(null,u("error-occurred"),$.ERROR)},z=async()=>{await l.actionUpdateDocument({id:_.params.id,body:l.model}),await n.actionDocumentCountList(),E(null,u("changed"),$.SUCCESS),await r.replace({name:pe,params:{id:_.params.id,document_type:_.params.document_type,document_sub_type:_.params.document_sub_type}})},R=()=>{t.formType===V?D():z()},O=x=>{l.model.__files=[],x.forEach(i=>{l.model.__files.push(i)})};return j(async()=>{_.params.id&&await l.actionGetDocumentDetailForUpdate(_.params.id)}),(x,i)=>{const m=ne,p=Q,w=xe,v=Ee,L=H;return e(l).detailLoading?(U(),N(m,{key:0})):(U(),F(le,{key:1},[o(e(te),{title:t.formType===e(V)?"create-order":"update-order"},{content:a(()=>[o(fe,{"onEmit:preview":b,"onEmit:clearForm":y},{default:a(()=>[o(L,null,{default:a(()=>[o(p,{"col-class":"w-1/2"},{default:a(()=>[o(he,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=s=>e(q).__curator.$model=s),error:e(q).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),o(p,{"col-class":"w-1/2"},{default:a(()=>[o(w,{modelValue:e(q).register_number.$model,"onUpdate:modelValue":i[1]||(i[1]=s=>e(q).register_number.$model=s),error:e(q).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(p,{"col-class":"w-1/2"},{default:a(()=>[o(v,{modelValue:e(q).register_date.$model,"onUpdate:modelValue":i[2]||(i[2]=s=>e(q).register_date.$model=s),error:e(q).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),o(p,{"col-class":"w-1/2"},{default:a(()=>[o(C,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":i[3]||(i[3]=s=>e(l).model.__approvers=s),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(p,{"col-class":"w-1/2"},{default:a(()=>[o(C,{modelValue:e(q).__negotiators.$model,"onUpdate:modelValue":i[4]||(i[4]=s=>e(q).__negotiators.$model=s),error:e(q).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(p,{"col-class":"w-full"},{default:a(()=>[o(me,{modelValue:e(q).content.$model,"onUpdate:modelValue":i[5]||(i[5]=s=>e(q).content.$model=s),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(be,{modelValue:d.value,"onUpdate:modelValue":i[6]||(i[6]=s=>d.value=s),"send-button-loading":e(l).buttonLoading,"onEmit:send":R},{content:a(()=>[o(e(Ae),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{Il as _,jl as a,Al as b,Bl as c};
