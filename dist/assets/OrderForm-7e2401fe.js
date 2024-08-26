import{_ as H}from"./BaseRow-b275540f.js";import{_ as Y}from"./BaseCol-a86bde7b.js";import{_ as we}from"./BaseInput-8db0bf53.js";import{B as De,O as J,E as C,cJ as Te,cz as Re,o as U,g as I,w as s,p as t,q as e,Q,i as j,z as ze,k as A,j as xe,_ as Ve,aW as W,bU as L,bV as K,bq as P,t as G,A as he,u as X,ar as Z,ae as ee,cb as le,F as ne,as as $,ah as oe,cF as B,a2 as Ue,c4 as Oe,cK as Ne}from"./index-2455b468.js";import{c as g,r as w,u as te}from"./index-acba4f86.js";import{_ as Me}from"./DepartmentMultiSelect-aea8d51a.js";import{_ as Ie,a as Pe,b as Fe,c as Ae}from"./OrderLetterTemplate-d496df93.js";import{L as re}from"./LayoutWithTabs-d2871bb7.js";import"./BaseTabMenu-3f81b8c4.js";import{f as ie,a as ae,b as se}from"./index.store-eaffd1b2.js";import"./dialog.esm-222751fd.js";import"./tabpanel.esm-8560b6b1.js";import{s as de,I as V,L as je,M as ce,N as F,O as Be}from"./index-c644c7f9.js";import"./BaseTabView-08a41299.js";import{f as ge}from"./formatDate-21ca921c.js";import{_ as S}from"./UserMultiSelect-4bd2e725.js";import{u as D,w as pe,d as E,c as Ge}from"./axios.config-1618140c.js";import{u as ke,d as qe}from"./common-20a5f978.js";import{d as ye,e as me,c as ue}from"./index-c4c1f2d4.js";import{F as x}from"./constants-5c471c97.js";import{_ as $e}from"./BaseDropdown-d15db8a3.js";import{_ as Ee}from"./BaseCalendar-0a2ac987.js";import{_ as Se}from"./WithLabel-1b71678e.js";import"./qrcode.vue.esm-0aa3eeeb.js";import"./Dropdown-ca7f43fe.js";import"./menu.esm-3567aee3.js";/* empty css                                                 */import"./avatar.esm-67151e9f.js";/* empty css                                                 */import"./WithSelectable.vue_vue_type_style_index_0_lang-0d3e9f81.js";import{_ as Le}from"./WithRadio-e09c9939.js";import"./radiobutton.esm-e425549c.js";import"./checkbox.esm-c41586d9.js";import"./dayjs.min-324d7cac.js";import{_ as He}from"./BaseBrickTab-02a241f3.js";import{_ as Ye}from"./BaseFileUpload-7763be8e.js";import{_ as Je}from"./BaseFroalaEditor-57265058.js";import{_ as Qe}from"./BaseDialog-22a73437.js";import{_ as We}from"./WithSelectable-41bf2e75.js";var Ke=`
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
`,Xe={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};De.extend({name:"editor",css:Ke,classes:Xe});(function(){try{return window.Quill}catch{return null}})();const fe={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]}},emits:["update:modelValue","emit:fileUpload"],setup(d,{emit:r}){const n=d,l=J(n,"modelValue"),_=C([{title:"text",slot:"editor",icon:Te},{title:"file",slot:"file",icon:Re}]);return(q,a)=>(U(),I(He,{"tab-panel-list":_.value,"panel-container-class":"px-0"},{editor:s(()=>[t(Je,{modelValue:e(l),"onUpdate:modelValue":a[0]||(a[0]=c=>Q(l)?l.value=c:null)},null,8,["modelValue"])]),file:s(()=>[j("div",{class:ze(n.fileUploadContainerClasses)},[t(Ye,{files:n.files,"onEmit:fileUpload":a[1]||(a[1]=c=>r("emit:fileUpload",c))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},Ze={class:"flex flex-col justify-between h-full"},el={class:"px-6 py-4 overflow-y-auto"},ll={class:"actions p-6"},_e={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(d,{emit:r}){return(n,l)=>{const _=Ve;return U(),A("div",Ze,[j("div",el,[xe(n.$slots,"default")]),j("div",ll,[t(_,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=q=>r("emit:clearForm"))}),t(_,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=q=>r("emit:preview"))})])])}}},nl=W("sd-stores-inner",{state:()=>{var d,r;return{buttonLoading:!1,detailLoading:!1,model:{company:(r=(d=D().currentUser)==null?void 0:d.company)==null?void 0:r.id,content:null,document_type:L.INNER,document_sub_type:K.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:P.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{register_number:{required:g.withMessage("Поле не должен быть пустым",w)},short_description:{required:g.withMessage("Поле не должен быть пустым",w)},content:{required:g.withMessage("Поле не должен быть пустым",w)},__departments:{required:g.withMessage("Поле не должен быть пустым",w)},__approvers:{},__signers:{required:g.withMessage("Поле не должен быть пустым",w)}}}},actions:{async actionCreateDocument(d){let r={...d,type:ye,sub_type:ye};this.buttonLoading=!0;const{response:n,error:l}=await pe(se,r);return n?(this.buttonLoading=!1,Promise.resolve(n)):Promise.reject(l)},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:n}=await ie({id:d,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ae(d);de(this.model,r),this.model.__approvers=await V(r.approvers),this.model.__signers=await V(r.signers),this.model.__departments=await je(r.receiver.departments),this.model.__files=r.files}catch{}finally{this.detailLoading=!1}}}}),ol={class:"font-semibold text-xl"},be={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(d,{emit:r}){const l=J(d,"modelValue"),{t:_}=G();return(q,a)=>{const c=Ve,u=Qe;return U(),I(u,{modelValue:e(l),"onUpdate:modelValue":a[1]||(a[1]=i=>Q(l)?l.value=i:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:s(()=>[j("span",ol,he(e(_)("preview")),1)]),content:s(()=>[xe(q.$slots,"content")]),footer:s(()=>[t(c,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),t(c,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:d.sendButtonLoading,onClick:a[0]||(a[0]=i=>r("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},Jl={__name:"InnerForm",props:{formType:{type:String,default:x}},setup(d){const r=d,n=D(),l=nl();ke();const _=qe(),q=C(!1);C(null);const{t:a}=G(),c=X(),u=Z(),i=te(l.rules,l.model),T=async()=>{await i.value.$validate()&&(q.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(o=>o.id),l.model.files=[],l.model.files=l.model.__files.map(o=>({id:o.id})),l.model.journal=P.INNER,l.model.sender=n.currentUser.top_level_department.id,l.model.approvers=F(l.model.__approvers),l.model.signers=F(l.model.__signers),console.log(l.model.signers))},R=()=>{r.formType===x?z():O()},z=async()=>{const b=await l.actionCreateDocument(l.model);await _.actionDocumentCountList(),b?(q.value=!1,E(null,a("document-sent"),$.SUCCESS),await c.replace({name:me,query:{document_type:L.INNER}})):E(null,a("error-occurred"),$.ERROR)},O=async()=>{await l.actionUpdateDocument({id:u.params.id,body:l.model}),await _.actionDocumentCountList(),E(null,a("document-sent"),$.SUCCESS),await c.replace({name:ue,params:{id:u.params.id,document_type:L.INNER,document_sub_type:K.SERVICE_LETTER}})},N=()=>{console.log("Clear Form")},M=b=>{l.model.__files=[],b.forEach(o=>{l.model.__files.push(o)})};return ee(async()=>{u.params.id&&await l.actionGetDocumentDetailForUpdate(u.params.id)}),le(()=>{ce(l.model)}),(b,o)=>{const y=oe,p=we,f=Y,k=H;return e(l).detailLoading?(U(),I(y,{key:0})):(U(),A(ne,{key:1},[t(e(re),{title:r.formType===e(x)?"create-sd-inner":"update-sd-inner"},{content:s(()=>[t(_e,{"onEmit:preview":T,"onEmit:clearForm":N},{default:s(()=>[t(k,null,{default:s(()=>[t(f,{"col-class":"w-1/2"},{default:s(()=>[t(p,{modelValue:e(i).register_number.$model,"onUpdate:modelValue":o[0]||(o[0]=h=>e(i).register_number.$model=h),error:e(i).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:s(()=>[t(Me,{modelValue:e(i).__departments.$model,"onUpdate:modelValue":o[1]||(o[1]=h=>e(i).__departments.$model=h),error:e(i).__departments},null,8,["modelValue","error"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:s(()=>[t(p,{modelValue:e(i).short_description.$model,"onUpdate:modelValue":o[2]||(o[2]=h=>e(i).short_description.$model=h),error:e(i).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__approvers.$model,"onUpdate:modelValue":o[3]||(o[3]=h=>e(i).__approvers.$model=h),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(f,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__signers.$model,"onUpdate:modelValue":o[4]||(o[4]=h=>e(i).__signers.$model=h),error:e(i).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(f,{"col-class":"w-full"},{default:s(()=>[t(fe,{modelValue:e(i).content.$model,"onUpdate:modelValue":o[5]||(o[5]=h=>e(i).content.$model=h),error:e(i).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(be,{modelValue:q.value,"onUpdate:modelValue":o[6]||(o[6]=h=>q.value=h),"send-button-loading":e(l).buttonLoading,"onEmit:send":R},{content:s(()=>{var h,v;return[t(Ie,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(v=(h=e(n).currentUser)==null?void 0:h.top_level_department)==null?void 0:v.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},tl=W("sd-store-application",{state:()=>{var d,r;return{buttonLoading:!1,detailLoading:!1,model:{company:(r=(d=D().currentUser)==null?void 0:d.company)==null?void 0:r.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:g.withMessage("Поле не должен быть пустым",w)},__curator:{required:g.withMessage("Поле не должен быть пустым",w)},__approvers:{required:g.withMessage("Поле не должен быть пустым",w)},__signers:{}}}},actions:{async actionCreateDocument(d){let r={...d};this.buttonLoading=!0;const{response:n,error:l}=await pe(se,r);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:n}=await ie({id:d,body:r});return Promise.resolve(n)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ae(d);de(this.model,r),this.model.__approvers=await V(r.approvers),this.model.__signers=await V(r.signers.filter(n=>n.type===B.SIGNER)),this.model.__curator=await V([],r.curator.id,!1),this.model.__files=r.files}catch{}finally{this.detailLoading=!1}}}}),Ce=W("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:D().currentUser.company.id,curator:null,document_type:L.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:P.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:g.withMessage("Поле не должен быть пустым",w)},register_date:{required:g.withMessage("Поле не должен быть пустым",w)},content:{required:g.withMessage("Поле не должен быть пустым",w)},__negotiators:{required:g.withMessage("Поле не должен быть пустым",w)},__curator:{required:g.withMessage("Поле не должен быть пустым",w)}}}),actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:r,error:n}=await pe(se,d);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:n}=await ie({id:d,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ae(d);de(this.model,r),this.model.__signers=await V(r.signers.filter(n=>n.type!==B.NEGOTIATOR)),this.model.__negotiators=await V(r.signers.filter(n=>n.type===B.NEGOTIATOR)),this.model.__approvers=await V(r.approvers),this.model.__curator=await V([],r.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),rl={class:"user-select"},ve={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(d,{emit:r}){const n=d,l=C([]),_=J(n,"modelValue"),q=async a=>{let{data:c}=await Ge.get("users/",a);c.hasOwnProperty("results")?l.value=c.results:l.value=c};return ee(async()=>{await q(n.apiParams)}),(a,c)=>(U(),A("div",rl,[t($e,{modelValue:e(_),"onUpdate:modelValue":c[0]||(c[0]=u=>Q(_)?_.value=u:null),options:l.value,"onUpdate:options":c[1]||(c[1]=u=>l.value=u),error:n.error,"api-url":"users","option-label":"full_name",label:n.label,placeholder:n.placeholder,required:n.required,searchable:""},{option:s(({option:u})=>[t(e(We),{items:[u]},null,8,["items"])]),_:1},8,["modelValue","options","error","label","placeholder","required"])]))}},Ql={__name:"ApplicationForm",props:{formType:{type:String,default:x}},setup(d){const r=d,n=D(),l=tl();ke();const _=qe();Ce();const q=C(!1);C(null);const{t:a}=G(),c=X(),u=Z(),i=te(l.rules,l.model),T=async()=>{var o,y,p,f;await i.value.$validate()&&(q.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(o=n==null?void 0:n.currentUser)==null?void 0:o.id}],l.model.sender=(p=(y=n==null?void 0:n.currentUser)==null?void 0:y.top_level_department)==null?void 0:p.id,l.model.curator=(f=l==null?void 0:l.model)==null?void 0:f.__curator.id,l.model.journal=P.APPLICATION,l.model.document_type=u.params.document_type,l.model.document_sub_type=u.params.document_sub_type,l.model.approvers=F(l.model.__approvers))},R=async()=>{},z=()=>{r.formType===x?O():N()},O=async()=>{const b=await l.actionCreateDocument(l.model);await _.actionDocumentCountList(),b?(q.value=!1,E(null,a("document-sent"),$.SUCCESS),await c.replace({name:me,query:{document_type:L.APPLICATION}})):E(null,a("error-occurred"),$.ERROR)},N=async()=>{await l.actionUpdateDocument({id:u.params.id,body:l.model}),await _.actionDocumentCountList(),E(null,a("document-sent"),$.SUCCESS),await c.replace({name:ue,params:{id:u.params.id,document_type:L.APPLICATION,document_sub_type:K.LABOR_LEAVE}})},M=b=>{l.model.__files=[],b.forEach(o=>{l.model.__files.push(o)})};return ee(async()=>{u.params.id&&await l.actionGetDocumentDetailForUpdate(u.params.id)}),le(()=>{ce(l.model)}),(b,o)=>{const y=oe,p=Y,f=H;return e(l).detailLoading?(U(),I(y,{key:0})):(U(),A(ne,{key:1},[t(e(re),{title:r.formType===e(x)?"create-sd-application":"update-sd-application"},{content:s(()=>[t(_e,{"onEmit:preview":T,"onEmit:clearForm":R},{default:s(()=>[t(f,null,{default:s(()=>[t(p,{"col-class":"w-1/2"},{default:s(()=>[t(ve,{modelValue:e(i).__curator.$model,"onUpdate:modelValue":o[0]||(o[0]=k=>e(i).__curator.$model=k),error:e(i).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__approvers.$model,"onUpdate:modelValue":o[1]||(o[1]=k=>e(i).__approvers.$model=k),error:e(i).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__signers.$model,"onUpdate:modelValue":o[2]||(o[2]=k=>e(i).__signers.$model=k),disabled:"",label:"signers",placeholder:e(n).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),t(p,{"col-class":"w-full"},{default:s(()=>[t(fe,{modelValue:e(i).content.$model,"onUpdate:modelValue":o[3]||(o[3]=k=>e(i).content.$model=k),error:e(i).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(be,{modelValue:q.value,"onUpdate:modelValue":o[4]||(o[4]=k=>q.value=k),"send-button-loading":e(l).buttonLoading,"onEmit:send":z},{content:s(()=>[t(Pe,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:r.formType===e(x)?e(n).currentUser:e(l).model.__signers[0].user,signers:r.formType===e(x)?[e(n).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},il={__name:"BranchMultiSelect",props:{modelValue:{type:[Array],default:[]},required:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(d,{emit:r}){const n=d,l=J(n,"modelValue");return(_,q)=>(U(),I(Se,{modelValue:e(l),"onUpdate:modelValue":q[0]||(q[0]=a=>Q(l)?l.value=a:null),"api-url":"companies","api-params":{condition:"A"},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"branch",required:n.required,type:"department","selection-length":2,placeholder:"enter-branch"},{chip:s(({value:a})=>[Ue(he(a.name),1)]),option:s(({value:a})=>[t(e(Le),{title:a.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","required"]))}},al=W("sd-notice-store",{state:()=>{const d=D();return{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:d.currentUser.company.id,content:null,curator:null,document_type:L.NOTICE,document_sub_type:K.BUSINESS_TRIP,journal:P.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:g.withMessage("Поле не должен быть пустым",w)},start_date:{required:g.withMessage("Поле не должен быть пустым",w)},route:{required:g.withMessage("Поле не должен быть пустым",w)},content:{required:g.withMessage("Поле не должен быть пустым",w)},__companies:{required:g.withMessage("Поле не должен быть пустым",w)},__curator:{required:g.withMessage("Поле не должен быть пустым",w)},__employees:{required:g.withMessage("Поле не должен быть пустым",w)},__signers:{required:g.withMessage("Поле не должен быть пустым",w)},__tags:{required:g.withMessage("Поле не должен быть пустым",w)},short_description:{required:g.withMessage("Поле не должен быть пустым",w)}}}},actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:r,error:n}=await pe(se,d);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:d,body:r}){try{this.buttonLoading=!0;const{data:n}=await ie({id:d,body:r});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:r}=await ae(d);de(this.model,r),this.model.__companies=[],this.model.__curator=await V([],r.curator.id,!1),this.model.__employees=await V(r.notices),this.model.__approvers=await V(r.approvers),this.model.__signers=await V(r.signers),this.model.__companies=await Be(r.notices[0].destinations),this.model.start_date=r.notices[0].start_date,this.model.end_date=r.notices[0].end_date,this.model.__tags=r.tags,this.model.route=r.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),sl={class:"flex w-full gap-x-4"},Wl={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:x}},setup(d){const r=d,{t:n}=G(),l=Z(),_=X(),q=D(),a=al(),c=qe();ke();const u=C(!1),i=te(a.rules,a.model),T=async()=>{var o,y,p;await i.value.$validate()&&(a.model.approvers=[],a.model.signers=[],a.model.notices=[],a.model.approvers=F(a.model.__approvers),a.model.signers=F(a.model.__signers),a.model.curator=(o=a==null?void 0:a.model)==null?void 0:o.__curator.id,a.model.journal=P.INNER,a.model.notices=a.model.__employees.map(f=>({start_date:a.model.start_date,end_date:a.model.end_date,user:f.id,route:a.model.route,companies:a.model.__companies.map(k=>k.id)})),a.model.sender=(p=(y=q==null?void 0:q.currentUser)==null?void 0:y.top_level_department)==null?void 0:p.id,a.model.tags=a.model.__tags.map(f=>({id:f.id})),a.model.files=a.model.__files.map(f=>({id:f.id})),u.value=!0)},R=()=>{},z=b=>{a.model.__files=[],b.forEach(o=>{a.model.__files.push(o)})},O=async()=>{const b=await a.actionCreateDocument(a.model);await c.actionDocumentCountList(),b?(u.value=!1,E(null,n("document-sent"),$.SUCCESS),await _.replace({name:me,query:{document_type:L.NOTICE}})):E(null,n("error-occurred"),$.ERROR)},N=async()=>{await a.actionUpdateDocument({id:l.params.id,body:a.model}),await c.actionDocumentCountList(),E(null,n("changed"),$.SUCCESS),await _.replace({name:ue,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},M=()=>{r.formType===x?O():N()};return Oe(async()=>{l.params.id&&await a.actionGetDocumentDetailForUpdate(l.params.id)}),le(()=>{ce(a.model)}),(b,o)=>{const y=oe,p=Y,f=we,k=Ee,h=$e,v=H;return e(a).detailLoading?(U(),I(y,{key:0})):(U(),A(ne,{key:1},[t(e(re),{title:r.formType===e(x)?"create-business-trip-notice":"update-business-trip-notice"},{content:s(()=>[t(_e,{"onEmit:preview":T,"onEmit:clearForm":R},{default:s(()=>[t(v,null,{default:s(()=>[t(p,{"col-class":"w-1/2"},{default:s(()=>[t(ve,{modelValue:e(i).__curator.$model,"onUpdate:modelValue":o[0]||(o[0]=m=>e(i).__curator.$model=m),error:e(i).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(f,{modelValue:e(i).short_description.$model,"onUpdate:modelValue":o[1]||(o[1]=m=>e(i).short_description.$model=m),error:e(i).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__employees.$model,"onUpdate:modelValue":o[2]||(o[2]=m=>e(i).__employees.$model=m),error:e(i).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(il,{modelValue:e(i).__companies.$model,"onUpdate:modelValue":o[3]||(o[3]=m=>e(i).__companies.$model=m),error:e(i).__companies},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[j("div",sl,[t(k,{modelValue:e(i).start_date.$model,"onUpdate:modelValue":[o[4]||(o[4]=m=>e(i).start_date.$model=m),o[5]||(o[5]=m=>e(i).start_date.$model=e(ge)(m))],error:e(i).start_date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error"]),t(k,{modelValue:e(i).end_date.$model,"onUpdate:modelValue":[o[6]||(o[6]=m=>e(i).end_date.$model=m),o[7]||(o[7]=m=>e(i).end_date.$model=e(ge)(m))],error:e(i).end_date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error"])])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(Se,{modelValue:e(i).__tags.$model,"onUpdate:modelValue":o[8]||(o[8]=m=>e(i).__tags.$model=m),error:e(i).__tags,"api-url":"tags","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:s(({value:m})=>[Ue(he(m.name),1)]),option:s(({value:m})=>[t(e(Le),{title:m.name},null,8,["title"])]),_:1},8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(h,{modelValue:e(i).route.$model,"onUpdate:modelValue":o[9]||(o[9]=m=>e(i).route.$model=m),error:e(i).route,options:e(Ne),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type"},null,8,["modelValue","error","options"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":o[10]||(o[10]=m=>e(a).model.__approvers=m),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(i).__signers.$model,"onUpdate:modelValue":o[11]||(o[11]=m=>e(i).__signers.$model=m),error:e(i).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-full"},{default:s(()=>[t(fe,{modelValue:e(i).content.$model,"onUpdate:modelValue":o[12]||(o[12]=m=>e(i).content.$model=m),error:e(i).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(be,{modelValue:u.value,"onUpdate:modelValue":o[13]||(o[13]=m=>u.value=m),"send-button-loading":e(a).buttonLoading,"onEmit:send":M},{content:s(()=>[t(e(Fe),{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Kl={__name:"OrderForm",props:{formType:{type:String,default:x}},setup(d){const r=d,n=Ce(),l=qe(),_=D(),q=Z(),a=X(),c=te(n.rules,n.model),{t:u}=G(),i=C(!1),T=async()=>{var o,y,p;await c.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=F(n.model.__approvers),n.model.curator=(o=n==null?void 0:n.model)==null?void 0:o.__curator.id,n.model.sender=(p=(y=_==null?void 0:_.currentUser)==null?void 0:y.top_level_department)==null?void 0:p.id,n.model.files=n.model.__files.map(f=>({id:f.id})),n.model.document_sub_type=q.params.document_sub_type,n.model.journal=P.ORDERS_PROTOCOLS,n.model.register_date=ge(n.model.register_date),n.model.__negotiators.forEach(f=>{n.model.signers.push(f.hasOwnProperty("user")?{id:f.id,user:f.user.id,type:B.NEGOTIATOR}:{user:f.id,type:B.NEGOTIATOR})}),q.query.compose_id&&(n.model.trip_notice_id=q.query.compose_id),i.value=!0)},R=()=>{},z=async()=>{const b=await n.actionCreateDocument(n.model);await l.actionDocumentCountList(),b?(i.value=!1,E(null,u("document-sent"),$.SUCCESS),await a.replace({name:me,query:{document_type:L.ORDER}})):E(null,u("error-occurred"),$.ERROR)},O=async()=>{await n.actionUpdateDocument({id:q.params.id,body:n.model}),await l.actionDocumentCountList(),E(null,u("changed"),$.SUCCESS),await a.replace({name:ue,params:{id:q.params.id,document_type:q.params.document_type,document_sub_type:q.params.document_sub_type}})},N=()=>{r.formType===x?z():O()},M=b=>{n.model.__files=[],b.forEach(o=>{n.model.__files.push(o)})};return ee(async()=>{q.params.id&&await n.actionGetDocumentDetailForUpdate(q.params.id)}),le(()=>{ce(n.model)}),(b,o)=>{const y=oe,p=Y,f=we,k=Ee,h=H;return e(n).detailLoading?(U(),I(y,{key:0})):(U(),A(ne,{key:1},[t(e(re),{title:r.formType===e(x)?"create-order":"update-order"},{content:s(()=>[t(_e,{"onEmit:preview":T,"onEmit:clearForm":R},{default:s(()=>[t(h,null,{default:s(()=>[t(p,{"col-class":"w-1/2"},{default:s(()=>[t(ve,{modelValue:e(c).__curator.$model,"onUpdate:modelValue":o[0]||(o[0]=v=>e(c).__curator.$model=v),error:e(c).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(f,{modelValue:e(c).register_number.$model,"onUpdate:modelValue":o[1]||(o[1]=v=>e(c).register_number.$model=v),error:e(c).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(k,{modelValue:e(c).register_date.$model,"onUpdate:modelValue":o[2]||(o[2]=v=>e(c).register_date.$model=v),error:e(c).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":o[3]||(o[3]=v=>e(n).model.__approvers=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),t(p,{"col-class":"w-1/2"},{default:s(()=>[t(S,{modelValue:e(c).__negotiators.$model,"onUpdate:modelValue":o[4]||(o[4]=v=>e(c).__negotiators.$model=v),error:e(c).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),t(p,{"col-class":"w-full"},{default:s(()=>[t(fe,{modelValue:e(c).content.$model,"onUpdate:modelValue":o[5]||(o[5]=v=>e(c).content.$model=v),error:e(c).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":M},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),t(be,{modelValue:i.value,"onUpdate:modelValue":o[6]||(o[6]=v=>i.value=v),"send-button-loading":e(n).buttonLoading,"onEmit:send":N},{content:s(()=>[t(e(Ae),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{Jl as _,Wl as a,Ql as b,Kl as c};
