import{_ as G}from"./BaseRow-65d8bbf7.js";import{_ as ge}from"./BaseDropdown-a69e58b9.js";import{_ as H}from"./BaseCol-e50e1a28.js";import{_ as Ve}from"./BaseInput-fe9f2043.js";import{B as Te,O as Y,E as L,cG as ze,cw as Re,o as V,g as O,w as s,p as o,q as e,Q,i as I,z as Oe,k as M,j as Ue,_ as $e,aW as W,bT as E,bU as J,bq as we,t as A,A as he,u as K,ar as X,ae as Z,c8 as ee,F as le,as as U,ah as ne,cC as j,a2 as Ee,c1 as Ne,cH as Me}from"./index-e301aae7.js";import{c as h,r as k,u as oe}from"./index-465d20e8.js";import{_ as Pe}from"./DepartmentMultiSelect-47f58272.js";import{_ as Fe,a as Ie,b as Ae,c as je}from"./OrderLetterTemplate-cd564b13.js";import{L as te}from"./LayoutWithTabsCompose-2d175e8b.js";import{_ as S}from"./UserMultiSelect-81711d14.js";import{w as re,u as P,d as $,c as Be}from"./axios.config-d46f29c9.js";import{u as ke,k as ie,l as B,m as Ge}from"./common-b5f510e9.js";import{c as ae,b as se,d as de}from"./index.service-e38143c8.js";import{d as xe,e as ce,c as pe}from"./index-c4c1f2d4.js";import{s as qe,j as me,k as N}from"./index-d6547e72.js";import{F as x}from"./constants-5c471c97.js";import{_ as Se}from"./BaseCalendar-1e88b750.js";import{_ as Le}from"./WithLabel-5a405d80.js";import{f as be}from"./formatDate-a1f53f84.js";import"./qrcode.vue.esm-d2fc858d.js";import"./Dropdown-dfe240e4.js";import"./menu.esm-257d2701.js";import"./radiobutton.esm-07ce4449.js";import"./avatar.esm-55b73a8c.js";/* empty css                                                 */import"./WithSelectable.vue_vue_type_style_index_0_lang-e219a09b.js";import{_ as Ce}from"./WithRadio-02f2a116.js";import"./checkbox.esm-3dee3a90.js";import"./dayjs.min-f44fcdc0.js";import{_ as He}from"./BaseBrickTab-6b08423f.js";import{_ as Ye}from"./BaseFileUpload-c0b6024a.js";import{_ as Qe}from"./BaseFroalaEditor-16767965.js";import{_ as We}from"./BaseDialog-9cfcd2cf.js";import{_ as Je}from"./WithSelectable-bdafdcb8.js";var Ke=`
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
`,Xe={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Te.extend({name:"editor",css:Ke,classes:Xe});(function(){try{return window.Quill}catch{return null}})();const ue={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]}},emits:["update:modelValue","emit:fileUpload"],setup(d,{emit:t}){const n=d,l=Y(n,"modelValue"),f=L([{title:"text",slot:"editor",icon:ze},{title:"file",slot:"file",icon:Re}]);return(u,i)=>(V(),O(He,{"tab-panel-list":f.value,"panel-container-class":"px-0"},{editor:s(()=>[o(Qe,{modelValue:e(l),"onUpdate:modelValue":i[0]||(i[0]=p=>Q(l)?l.value=p:null)},null,8,["modelValue"])]),file:s(()=>[I("div",{class:Oe(n.fileUploadContainerClasses)},[o(Ye,{files:n.files,"onEmit:fileUpload":i[1]||(i[1]=p=>t("emit:fileUpload",p))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},Ze={class:"flex flex-col justify-between h-full"},el={class:"px-6 py-4 overflow-y-auto"},ll={class:"actions p-6"},fe={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(d,{emit:t}){return(n,l)=>{const f=$e;return V(),M("div",Ze,[I("div",el,[Ue(n.$slots,"default")]),I("div",ll,[o(f,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=u=>t("emit:clearForm"))}),o(f,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=u=>t("emit:preview"))})])])}}},nl=W("sd-stores-inner",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,document_type:E.INNER,document_sub_type:J.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:we.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",k)},title:{required:h.withMessage("Поле не должен быть пустым",k)},short_description:{required:h.withMessage("Поле не должен быть пустым",k)},content:{required:h.withMessage("Поле не должен быть пустым",k)},__departments:{required:h.withMessage("Поле не должен быть пустым",k)},__approvers:{},__signers:{required:h.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(d){let t={...d,type:xe,sub_type:xe};this.buttonLoading=!0;const{response:n,error:l}=await re(de,t);return n?(this.buttonLoading=!1,Promise.resolve(n)):Promise.reject(l)},async actionUpdateDocument({id:d,body:t}){try{this.buttonLoading=!0;const{data:n}=await ae({id:d,body:t});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:t}=await se(d);qe(this.model,t),this.model.__departments=t.receiver.departments,this.model.__signers=t.signers,this.model.__approvers=t.approvers,this.model.__files=t.files}catch{}finally{this.detailLoading=!1}}}}),ol={class:"font-semibold text-xl"},_e={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(d,{emit:t}){const l=Y(d,"modelValue"),{t:f}=A();return(u,i)=>{const p=$e,b=We;return V(),O(b,{modelValue:e(l),"onUpdate:modelValue":i[1]||(i[1]=a=>Q(l)?l.value=a:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:s(()=>[I("span",ol,he(e(f)("preview")),1)]),content:s(()=>[Ue(u.$slots,"content")]),footer:s(()=>[o(p,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(p,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:d.sendButtonLoading,onClick:i[0]||(i[0]=a=>t("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},jl={__name:"InnerForm",props:{formType:{type:String,default:x}},setup(d){const t=d,n=P(),l=nl(),f=ke(),u=ie(),i=L(!1);L(null);const{t:p}=A(),b=K(),a=X(),_=oe(l.rules,l.model),C=async()=>{await _.value.$validate()&&(i.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(q=>q.id),l.model.files=[],l.model.files=l.model.__files.map(q=>({id:q.id})),l.model.sender=n.currentUser.top_level_department.id,l.model.approvers=N(l.model.__approvers),l.model.signers=N(l.model.__signers))},D=()=>{t.formType===x?T():z()},T=async()=>{const r=await l.actionCreateDocument(l.model);await u.actionDocumentCountList(),r?(i.value=!1,$(null,p("document-sent"),U.SUCCESS),await b.replace({name:ce,query:{document_type:E.INNER}})):$(null,p("error-occurred"),U.ERROR)},z=async()=>{await l.actionUpdateDocument({id:a.params.id,body:l.model}),await u.actionDocumentCountList(),$(null,p("document-sent"),U.SUCCESS),await b.replace({name:pe,params:{id:a.params.id,document_type:E.INNER,document_sub_type:J.SERVICE_LETTER}})},R=()=>{console.log("Clear Form")},y=r=>{l.model.__files=[],r.forEach(q=>{l.model.__files.push(q)})};return Z(async()=>{a.params.id&&await l.actionGetDocumentDetailForUpdate(a.params.id)}),ee(()=>{me(l.model)}),(r,q)=>{const m=ne,g=Ve,w=H,F=ge,c=G;return e(l).detailLoading?(V(),O(m,{key:0})):(V(),M(le,{key:1},[o(e(te),{title:t.formType===e(x)?"create-sd-inner":"update-sd-inner"},{content:s(()=>[o(fe,{"onEmit:preview":C,"onEmit:clearForm":R},{default:s(()=>[o(c,null,{default:s(()=>[o(w,{"col-class":"w-1/2"},{default:s(()=>[o(g,{modelValue:e(_).register_number.$model,"onUpdate:modelValue":q[0]||(q[0]=v=>e(_).register_number.$model=v),error:e(_).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(w,{"col-class":"w-1/2"},{default:s(()=>[o(Pe,{modelValue:e(_).__departments.$model,"onUpdate:modelValue":q[1]||(q[1]=v=>e(_).__departments.$model=v),error:e(_).__departments},null,8,["modelValue","error"])]),_:1}),o(w,{"col-class":"w-1/2"},{default:s(()=>[o(F,{modelValue:e(_).title.$model,"onUpdate:modelValue":q[2]||(q[2]=v=>e(_).title.$model=v),options:e(f).documentTitleList,"onUpdate:options":q[3]||(q[3]=v=>e(f).documentTitleList=v),error:e(_).title,"api-url":"document-titles","option-label":"name","option-value":"id",label:"naming",placeholder:"enter-naming",required:"",searchable:""},null,8,["modelValue","options","error"])]),_:1}),o(w,{"col-class":"w-1/2"},{default:s(()=>[o(g,{modelValue:e(_).short_description.$model,"onUpdate:modelValue":q[4]||(q[4]=v=>e(_).short_description.$model=v),error:e(_).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(w,{"col-class":"w-1/2"},{default:s(()=>[o(S,{modelValue:e(_).__approvers.$model,"onUpdate:modelValue":q[5]||(q[5]=v=>e(_).__approvers.$model=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(w,{"col-class":"w-1/2"},{default:s(()=>[o(S,{modelValue:e(_).__signers.$model,"onUpdate:modelValue":q[6]||(q[6]=v=>e(_).__signers.$model=v),error:e(_).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(w,{"col-class":"w-full"},{default:s(()=>[o(ue,{modelValue:e(_).content.$model,"onUpdate:modelValue":q[7]||(q[7]=v=>e(_).content.$model=v),error:e(_).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":y},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(_e,{modelValue:i.value,"onUpdate:modelValue":q[8]||(q[8]=v=>i.value=v),"send-button-loading":e(l).buttonLoading,"onEmit:send":D},{content:s(()=>{var v,ye;return[o(Fe,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(ye=(v=e(n).currentUser)==null?void 0:v.top_level_department)==null?void 0:ye.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},tl=W("sd-store-application",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",k)},__curator:{required:h.withMessage("Поле не должен быть пустым",k)},__approvers:{required:h.withMessage("Поле не должен быть пустым",k)},__signers:{}}}),actions:{async actionCreateDocument(d){let t={...d};this.buttonLoading=!0;const{response:n,error:l}=await re(de,t);return n?(this.buttonLoading=!1,Promise.resolve(n)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:d,body:t}){try{this.buttonLoading=!0;const{data:n}=await ae({id:d,body:t});return Promise.resolve(n)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:t}=await se(d);qe(this.model,t),this.model.__approvers=t.approvers,this.model.__files=t.files,this.model.__signers=t.signers;const n=await B(t.curator.id);this.model.__curator=n.data}catch{}finally{this.detailLoading=!1}}}}),De=W("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:P().currentUser.company.id,curator:null,document_type:E.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:we.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",k)},register_date:{required:h.withMessage("Поле не должен быть пустым",k)},content:{required:h.withMessage("Поле не должен быть пустым",k)},__negotiators:{required:h.withMessage("Поле не должен быть пустым",k)},__curator:{required:h.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:t,error:n}=await re(de,d);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:d,body:t}){try{this.buttonLoading=!0;const{data:n}=await ae({id:d,body:t});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:t}=await se(d);qe(this.model,t),this.model.__signers=t.signers.filter(l=>l.type!==j.NEGOTIATOR),this.model.__negotiators=t.signers.filter(l=>l.type===j.NEGOTIATOR),this.model.__approvers=t.approvers;const n=await B(t.curator.id);this.model.__curator=n.data}catch{}finally{this.detailLoading=!1}}}}),rl={class:"user-select"},ve={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(d,{emit:t}){const n=d,l=L([]),f=Y(n,"modelValue"),u=async i=>{let{data:p}=await Be.get("users/",i);p.hasOwnProperty("results")?l.value=p.results:l.value=p};return Z(async()=>{await u(n.apiParams)}),(i,p)=>(V(),M("div",rl,[o(ge,{modelValue:e(f),"onUpdate:modelValue":p[0]||(p[0]=b=>Q(f)?f.value=b:null),options:l.value,"onUpdate:options":p[1]||(p[1]=b=>l.value=b),error:n.error,"api-url":"users","option-label":"full_name",label:n.label,placeholder:n.placeholder,required:n.required,searchable:""},{option:s(({option:b})=>[o(e(Je),{items:[b]},null,8,["items"])]),_:1},8,["modelValue","options","error","label","placeholder","required"])]))}},Bl={__name:"ApplicationForm",props:{formType:{type:String,default:x}},setup(d){const t=d,n=P(),l=tl();ke();const f=ie();De();const u=L(!1);L(null);const{t:i}=A(),p=K(),b=X(),a=oe(l.rules,l.model),_=async()=>{var r,q,m,g;await a.value.$validate()&&(u.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(r=n==null?void 0:n.currentUser)==null?void 0:r.id}],l.model.sender=(m=(q=n==null?void 0:n.currentUser)==null?void 0:q.top_level_department)==null?void 0:m.id,l.model.curator=(g=l==null?void 0:l.model)==null?void 0:g.__curator.id,l.model.journal=E.APPLICATION,l.model.document_type=b.params.document_type,l.model.document_sub_type=b.params.document_sub_type,l.model.approvers=N(l.model.__approvers))},C=async()=>{},D=()=>{t.formType===x?T():z()},T=async()=>{const y=await l.actionCreateDocument(l.model);await f.actionDocumentCountList(),y?(u.value=!1,$(null,i("document-sent"),U.SUCCESS),await p.replace({name:ce,query:{document_type:E.APPLICATION}})):$(null,i("error-occurred"),U.ERROR)},z=async()=>{await l.actionUpdateDocument({id:b.params.id,body:l.model}),await f.actionDocumentCountList(),$(null,i("document-sent"),U.SUCCESS),await p.replace({name:pe,params:{id:b.params.id,document_type:E.APPLICATION,document_sub_type:J.LABOR_LEAVE}})},R=y=>{l.model.__files=[],y.forEach(r=>{l.model.__files.push(r)})};return Z(async()=>{b.params.id&&await l.actionGetDocumentDetailForUpdate(b.params.id)}),ee(()=>{me(l.model)}),(y,r)=>{const q=ne,m=H,g=G;return e(l).detailLoading?(V(),O(q,{key:0})):(V(),M(le,{key:1},[o(e(te),{title:t.formType===e(x)?"create-sd-application":"update-sd-application"},{content:s(()=>[o(fe,{"onEmit:preview":_,"onEmit:clearForm":C},{default:s(()=>[o(g,null,{default:s(()=>[o(m,{"col-class":"w-1/2"},{default:s(()=>[o(ve,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=w=>e(a).__curator.$model=w),error:e(a).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(S,{modelValue:e(a).__approvers.$model,"onUpdate:modelValue":r[1]||(r[1]=w=>e(a).__approvers.$model=w),error:e(a).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(S,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":r[2]||(r[2]=w=>e(a).__signers.$model=w),disabled:"",label:"signers",placeholder:e(n).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),o(m,{"col-class":"w-full"},{default:s(()=>[o(ue,{modelValue:e(a).content.$model,"onUpdate:modelValue":r[3]||(r[3]=w=>e(a).content.$model=w),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(_e,{modelValue:u.value,"onUpdate:modelValue":r[4]||(r[4]=w=>u.value=w),"send-button-loading":e(l).buttonLoading,"onEmit:send":D},{content:s(()=>[o(Ie,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:t.formType===e(x)?e(n).currentUser:e(l).model.__signers[0].user,signers:t.formType===e(x)?[e(n).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},il={__name:"BranchMultiSelect",props:{modelValue:{type:[Array],default:[]},required:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(d,{emit:t}){const n=d,l=Y(n,"modelValue");return(f,u)=>(V(),O(Le,{modelValue:e(l),"onUpdate:modelValue":u[0]||(u[0]=i=>Q(l)?l.value=i:null),"api-url":"companies","api-params":{condition:"A"},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"branch",required:n.required,type:"department","selection-length":2,placeholder:"enter-branch"},{chip:s(({value:i})=>[Ee(he(i.name),1)]),option:s(({value:i})=>[o(e(Ce),{title:i.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","required"]))}},al=W("sd-notice-store",{state:()=>{const d=P();return{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:d.currentUser.company.id,content:null,curator:null,document_type:E.NOTICE,document_sub_type:J.BUSINESS_TRIP,journal:we.INNER,notices:[],start_date:null,end_date:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:h.withMessage("Поле не должен быть пустым",k)},start_date:{required:h.withMessage("Поле не должен быть пустым",k)},route:{required:h.withMessage("Поле не должен быть пустым",k)},content:{required:h.withMessage("Поле не должен быть пустым",k)},__companies:{required:h.withMessage("Поле не должен быть пустым",k)},__curator:{required:h.withMessage("Поле не должен быть пустым",k)},__employees:{required:h.withMessage("Поле не должен быть пустым",k)},__signers:{required:h.withMessage("Поле не должен быть пустым",k)},__tags:{required:h.withMessage("Поле не должен быть пустым",k)}}}},actions:{async actionCreateDocument(d){this.buttonLoading=!0;const{response:t,error:n}=await re(de,d);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:d,body:t}){try{this.buttonLoading=!0;const{data:n}=await ae({id:d,body:t});return Promise.resolve(n)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(d){try{this.detailLoading=!0;const{data:t}=await se(d);qe(this.model,t),this.model.__employees=[],this.model.__companies=[],this.model.__signers=t.signers,this.model.__approvers=t.approvers;const n=await B(t.curator.id);this.model.__curator=n.data,t.notices.forEach(async l=>{let f=await B(l.user.id);this.model.__employees.push(f.data)}),t.notices[0].destinations.forEach(async l=>{let f=await Ge(l.id);this.model.__companies.push(f.data)}),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),sl={class:"flex w-full gap-x-4"},Gl={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:x}},setup(d){const t=d,{t:n}=A(),l=X(),f=K(),u=P(),i=al(),p=ie();ke();const b=L(!1),a=oe(i.rules,i.model),_=async()=>{var r,q,m;await a.value.$validate()&&(i.model.approvers=[],i.model.signers=[],i.model.notices=[],i.model.approvers=N(i.model.__approvers),i.model.signers=N(i.model.__signers),i.model.curator=(r=i==null?void 0:i.model)==null?void 0:r.__curator.id,i.model.notices=i.model.__employees.map(g=>({start_date:i.model.start_date,end_date:i.model.end_date,user:g.id,route:i.model.route,companies:i.model.__companies.map(w=>w.id)})),i.model.sender=(m=(q=u==null?void 0:u.currentUser)==null?void 0:q.top_level_department)==null?void 0:m.id,i.model.tags=i.model.__tags.map(g=>({id:g.id})),i.model.files=i.model.__files.map(g=>({id:g.id})),b.value=!0)},C=()=>{},D=y=>{i.model.__files=[],y.forEach(r=>{i.model.__files.push(r)})},T=async()=>{const y=await i.actionCreateDocument(i.model);await p.actionDocumentCountList(),y?(b.value=!1,$(null,n("document-sent"),U.SUCCESS),await f.replace({name:ce,query:{document_type:E.NOTICE}})):$(null,n("error-occurred"),U.ERROR)},z=async()=>{await i.actionUpdateDocument({id:l.params.id,body:i.model}),await p.actionDocumentCountList(),$(null,n("changed"),U.SUCCESS),await f.replace({name:pe,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},R=()=>{t.formType===x?T():z()};return Ne(async()=>{l.params.id&&await i.actionGetDocumentDetailForUpdate(l.params.id)}),ee(()=>{me(i.model)}),(y,r)=>{const q=ne,m=H,g=Se,w=ge,F=G;return e(i).detailLoading?(V(),O(q,{key:0})):(V(),M(le,{key:1},[o(e(te),{title:t.formType===e(x)?"create-business-trip-notice":"update-business-trip-notice"},{content:s(()=>[o(fe,{"onEmit:preview":_,"onEmit:clearForm":C},{default:s(()=>[o(F,null,{default:s(()=>[o(m,{"col-class":"w-1/2"},{default:s(()=>[o(ve,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=c=>e(a).__curator.$model=c),error:e(a).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(S,{modelValue:e(a).__employees.$model,"onUpdate:modelValue":r[1]||(r[1]=c=>e(a).__employees.$model=c),error:e(a).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(il,{modelValue:e(a).__companies.$model,"onUpdate:modelValue":r[2]||(r[2]=c=>e(a).__companies.$model=c),error:e(a).__companies},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[I("div",sl,[o(g,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[r[3]||(r[3]=c=>e(a).start_date.$model=c),r[4]||(r[4]=c=>e(a).start_date.$model=e(be)(c))],error:e(a).start_date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error"]),o(g,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[r[5]||(r[5]=c=>e(a).end_date.$model=c),r[6]||(r[6]=c=>e(a).end_date.$model=e(be)(c))],error:e(a).end_date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error"])])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(Le,{modelValue:e(a).__tags.$model,"onUpdate:modelValue":r[7]||(r[7]=c=>e(a).__tags.$model=c),error:e(a).__tags,"api-url":"tags","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:s(({value:c})=>[Ee(he(c.name),1)]),option:s(({value:c})=>[o(e(Ce),{title:c.name},null,8,["title"])]),_:1},8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(w,{modelValue:e(a).route.$model,"onUpdate:modelValue":r[8]||(r[8]=c=>e(a).route.$model=c),error:e(a).route,options:e(Me),required:"","option-label":"label","option-value":"value",label:"route",placeholder:"select-route"},null,8,["modelValue","error","options"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(S,{modelValue:e(i).model.__approvers,"onUpdate:modelValue":r[9]||(r[9]=c=>e(i).model.__approvers=c),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(S,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":r[10]||(r[10]=c=>e(a).__signers.$model=c),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-full"},{default:s(()=>[o(ue,{modelValue:e(a).content.$model,"onUpdate:modelValue":r[11]||(r[11]=c=>e(a).content.$model=c),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(i).model.__files,"onEmit:fileUpload":D},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(_e,{modelValue:b.value,"onUpdate:modelValue":r[12]||(r[12]=c=>b.value=c),"send-button-loading":e(i).buttonLoading,"onEmit:send":R},{content:s(()=>[o(e(Ae),{"compose-model":e(i).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},Hl={__name:"OrderForm",props:{formType:{type:String,default:x}},setup(d){const t=d,n=De(),l=ie(),f=P(),u=X(),i=K(),p=oe(n.rules,n.model),{t:b}=A(),a=L(!1),_=async()=>{var r,q,m;await p.value.$validate()&&(n.model.approvers=[],n.model.signers=[],n.model.approvers=N(n.model.__approvers),n.model.curator=(r=n==null?void 0:n.model)==null?void 0:r.__curator.id,n.model.sender=(m=(q=f==null?void 0:f.currentUser)==null?void 0:q.top_level_department)==null?void 0:m.id,n.model.files=n.model.__files.map(g=>({id:g.id})),n.model.document_sub_type=u.params.document_sub_type,n.model.register_date=be(n.model.register_date),n.model.__negotiators.forEach(g=>{n.model.signers.push(g.hasOwnProperty("user")?{id:g.id,user:g.user.id,type:j.NEGOTIATOR}:{user:g.id,type:j.NEGOTIATOR})}),u.query.compose_id&&(n.model.trip_notice_id=u.query.compose_id),a.value=!0)},C=()=>{},D=async()=>{const y=await n.actionCreateDocument(n.model);await l.actionDocumentCountList(),y?(a.value=!1,$(null,b("document-sent"),U.SUCCESS),await i.replace({name:ce,query:{document_type:E.ORDER}})):$(null,b("error-occurred"),U.ERROR)},T=async()=>{await n.actionUpdateDocument({id:u.params.id,body:n.model}),await l.actionDocumentCountList(),$(null,b("changed"),U.SUCCESS),await i.replace({name:pe,params:{id:u.params.id,document_type:u.params.document_type,document_sub_type:u.params.document_sub_type}})},z=()=>{t.formType===x?D():T()},R=y=>{n.model.__files=[],y.forEach(r=>{n.model.__files.push(r)})};return Z(async()=>{u.params.id&&await n.actionGetDocumentDetailForUpdate(u.params.id)}),ee(()=>{me(n.model)}),(y,r)=>{const q=ne,m=H,g=Ve,w=Se,F=G;return e(n).detailLoading?(V(),O(q,{key:0})):(V(),M(le,{key:1},[o(e(te),{title:t.formType===e(x)?"create-order":"update-order"},{content:s(()=>[o(fe,{"onEmit:preview":_,"onEmit:clearForm":C},{default:s(()=>[o(F,null,{default:s(()=>[o(m,{"col-class":"w-1/2"},{default:s(()=>[o(ve,{modelValue:e(p).__curator.$model,"onUpdate:modelValue":r[0]||(r[0]=c=>e(p).__curator.$model=c),error:e(p).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(g,{modelValue:e(p).register_number.$model,"onUpdate:modelValue":r[1]||(r[1]=c=>e(p).register_number.$model=c),error:e(p).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(w,{modelValue:e(p).register_date.$model,"onUpdate:modelValue":r[2]||(r[2]=c=>e(p).register_date.$model=c),error:e(p).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(S,{modelValue:e(n).model.__approvers,"onUpdate:modelValue":r[3]||(r[3]=c=>e(n).model.__approvers=c),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(m,{"col-class":"w-1/2"},{default:s(()=>[o(S,{modelValue:e(p).__negotiators.$model,"onUpdate:modelValue":r[4]||(r[4]=c=>e(p).__negotiators.$model=c),error:e(p).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(m,{"col-class":"w-full"},{default:s(()=>[o(ue,{modelValue:e(p).content.$model,"onUpdate:modelValue":r[5]||(r[5]=c=>e(p).content.$model=c),error:e(p).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(_e,{modelValue:a.value,"onUpdate:modelValue":r[6]||(r[6]=c=>a.value=c),"send-button-loading":e(n).buttonLoading,"onEmit:send":z},{content:s(()=>[o(e(je),{"compose-model":e(n).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{jl as _,Gl as a,Bl as b,Hl as c};
