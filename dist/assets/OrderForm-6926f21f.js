import{_ as H}from"./BaseRow-fd1cd366.js";import{_ as Y}from"./BaseDropdown-a00bce12.js";import{_ as J}from"./BaseCol-ed967f11.js";import{_ as ve}from"./BaseInput-aafd9d78.js";import{B as Ee,Z as W,K as C,cG as Ce,cw as De,o as V,g as N,w as d,p as o,q as e,$ as Z,i as I,D as Te,k as P,j as ye,_ as xe,t as K,bS as E,bT as Ve,bs as ge,x as j,E as we,u as Q,aw as X,ak as A,c7 as ze,z as ee,ax as U,am as le,a7 as Ue,cH as Re,cC as B}from"./index-5e95ef04.js";import{c as w,r as h,u as ne}from"./index-999e70db.js";import{_ as Oe}from"./DepartmentMultiSelect-d39736cf.js";import{_ as Me,a as Ne,b as Pe,c as Fe}from"./OrderLetterTemplate-938dd1ab.js";import{L as oe}from"./LayoutWithTabsCompose-5322ff28.js";import{_ as S}from"./UserMultiSelect-e78b76a8.js";import{w as te,u as F,d as $,c as Ie}from"./axios.config-37c4d06c.js";import{u as re,j as ie,i as G}from"./common-e5f256f3.js";import{c as ae,b as se,d as de}from"./index.service-e454fa48.js";import{d as be,e as ce,c as pe}from"./index-c4c1f2d4.js";import{s as qe,l as je,n as M,b as Ae}from"./index-c41999ea.js";import{F as x}from"./constants-5c471c97.js";import{_ as $e}from"./BaseCalendar-c28fee24.js";import{a as Be,_ as Se}from"./WithLabel-685762c5.js";import{f as _e}from"./WithSelectable.vue_vue_type_style_index_0_lang-61574e9d.js";import"./qrcode.vue.esm-b5336235.js";import{b as Ge}from"./Dropdown-608958cf.js";import"./menu.esm-f1b38915.js";import"./radiobutton.esm-ce962860.js";import"./avatar.esm-d3dc3c41.js";/* empty css                                                 */import{_ as Le}from"./WithRadio-8b88de44.js";import"./checkbox.esm-1b2f3e65.js";import{_ as He}from"./BaseBrickTab-8d9b75cb.js";import{_ as Ye}from"./BaseFileUpload-b8464ecd.js";import{_ as Je}from"./BaseDialog-f4785c92.js";var We=`
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
`,Ze={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Ee.extend({name:"editor",css:We,classes:Ze});(function(){try{return window.Quill}catch{return null}})();const ue={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]}},emits:["update:modelValue","emit:fileUpload"],setup(p,{emit:t}){const l=p,n=W(l,"modelValue"),g=C([{title:"text",slot:"editor",icon:Ce},{title:"file",slot:"file",icon:De}]);return(b,r)=>(V(),N(He,{"tab-panel-list":g.value,"panel-container-class":"px-0"},{editor:d(()=>[o(Ge,{modelValue:e(n),"onUpdate:modelValue":r[0]||(r[0]=q=>Z(n)?n.value=q:null)},null,8,["modelValue"])]),file:d(()=>[I("div",{class:Te(l.fileUploadContainerClasses)},[o(Ye,{files:l.files,"onEmit:fileUpload":r[1]||(r[1]=q=>t("emit:fileUpload",q))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},Ke={class:"flex flex-col justify-between h-full"},Qe={class:"px-6 py-4 overflow-y-auto"},Xe={class:"actions p-6"},me={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(p,{emit:t}){return(l,n)=>{const g=xe;return V(),P("div",Ke,[I("div",Qe,[ye(l.$slots,"default")]),I("div",Xe,[o(g,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:n[0]||(n[0]=b=>t("emit:clearForm"))}),o(g,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:n[1]||(n[1]=b=>t("emit:preview"))})])])}}},el=K("sd-stores-inner",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,document_type:E.INNER,document_sub_type:Ve.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:ge.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{register_number:{required:w.withMessage("Поле не должен быть пустым",h)},title:{required:w.withMessage("Поле не должен быть пустым",h)},short_description:{required:w.withMessage("Поле не должен быть пустым",h)},content:{required:w.withMessage("Поле не должен быть пустым",h)},__departments:{required:w.withMessage("Поле не должен быть пустым",h)},__approvers:{},__signers:{required:w.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(p){let t={...p,type:be,sub_type:be};this.buttonLoading=!0;const{response:l,error:n}=await te(de,t);return l?(this.buttonLoading=!1,Promise.resolve(l)):Promise.reject(n)},async actionUpdateDocument({id:p,body:t}){try{this.buttonLoading=!0;const{data:l}=await ae({id:p,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:t}=await se(p);qe(this.model,t),this.model.__departments=t.receiver.departments,this.model.__signers=t.signers,this.model.__approvers=t.approvers,this.model.__files=t.files,console.log(this.model)}catch{}finally{this.detailLoading=!1}}}}),ll={class:"font-semibold text-xl"},fe={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(p,{emit:t}){const n=W(p,"modelValue"),{t:g}=j();return(b,r)=>{const q=xe,m=Je;return V(),N(m,{modelValue:e(n),"onUpdate:modelValue":r[1]||(r[1]=c=>Z(n)?n.value=c:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[I("span",ll,we(e(g)("preview")),1)]),content:d(()=>[ye(b.$slots,"content")]),footer:d(()=>[o(q,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),o(q,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:p.sendButtonLoading,onClick:r[0]||(r[0]=c=>t("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},Nl={__name:"InnerForm",props:{formType:{type:String,default:x}},setup(p){const t=p,l=F(),n=el(),g=re(),b=ie(),r=C(!1);C(null);const{t:q}=j(),m=Q(),c=X(),u=ne(n.rules,n.model),D=async()=>{await u.value.$validate()&&(r.value=!0,n.model.approvers=[],n.model.signers=[],n.model.departments=[],n.model.departments=n.model.__departments.map(s=>s.id),n.model.files=[],n.model.files=n.model.__files.map(s=>({id:s.id})),n.model.sender=l.currentUser.top_level_department.id,n.model.approvers=M(n.model.__approvers),n.model.signers=M(n.model.__signers))},T=()=>{t.formType===x?z():R()},z=async()=>{const i=await n.actionCreateDocument(n.model);await b.actionDocumentCountList(),i?(r.value=!1,$(null,q("document-sent"),U.SUCCESS),await m.replace({name:ce,query:{type:be}})):$(null,q("error-occurred"),U.ERROR)},R=async()=>{await n.actionUpdateDocument({id:c.params.id,body:n.model}),await b.actionDocumentCountList(),$(null,q("document-sent"),U.SUCCESS),await m.replace({name:pe,params:{id:c.params.id,subType:n.model.sub_type}})},O=()=>{console.log("Clear Form")},y=i=>{n.model.__files=[],i.forEach(s=>{n.model.__files.push(s)})};return A(async()=>{c.params.id&&await n.actionGetDocumentDetailForUpdate(c.params.id)}),ze(()=>{je(n.model)}),(i,s)=>{const f=le,_=ve,v=J,L=Y,a=H;return e(n).detailLoading?(V(),N(f,{key:0})):(V(),P(ee,{key:1},[o(e(oe),{title:t.formType===e(x)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[o(me,{"onEmit:preview":D,"onEmit:clearForm":O},{default:d(()=>[o(a,null,{default:d(()=>[o(v,{"col-class":"w-1/2"},{default:d(()=>[o(_,{modelValue:e(u).register_number.$model,"onUpdate:modelValue":s[0]||(s[0]=k=>e(u).register_number.$model=k),error:e(u).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:d(()=>[o(Oe,{modelValue:e(u).__departments.$model,"onUpdate:modelValue":s[1]||(s[1]=k=>e(u).__departments.$model=k),error:e(u).__departments},null,8,["modelValue","error"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:d(()=>[o(L,{modelValue:e(u).title.$model,"onUpdate:modelValue":s[2]||(s[2]=k=>e(u).title.$model=k),options:e(g).documentTitleList,"onUpdate:options":s[3]||(s[3]=k=>e(g).documentTitleList=k),error:e(u).title,"api-url":"document-titles","option-label":"name","option-value":"id",label:"naming",placeholder:"enter-naming",required:"",searchable:""},null,8,["modelValue","options","error"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:d(()=>[o(_,{modelValue:e(u).short_description.$model,"onUpdate:modelValue":s[4]||(s[4]=k=>e(u).short_description.$model=k),error:e(u).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:e(u).__approvers.$model,"onUpdate:modelValue":s[5]||(s[5]=k=>e(u).__approvers.$model=k),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(v,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":s[6]||(s[6]=k=>e(u).__signers.$model=k),error:e(u).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(v,{"col-class":"w-full"},{default:d(()=>[o(ue,{modelValue:e(u).content.$model,"onUpdate:modelValue":s[7]||(s[7]=k=>e(u).content.$model=k),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":y},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(fe,{modelValue:r.value,"onUpdate:modelValue":s[8]||(s[8]=k=>r.value=k),"send-button-loading":e(n).buttonLoading,"onEmit:send":T},{content:d(()=>{var k,ke;return[o(Me,{"compose-model":{...e(n).model,signers:e(n).model.__signers,approvers:e(n).model.__approvers,author:e(n).model.__signers[0],sender:{name:(ke=(k=e(l).currentUser)==null?void 0:k.top_level_department)==null?void 0:ke.name},receiver:{departments:e(n).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},nl=K("sd-store-application",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:w.withMessage("Поле не должен быть пустым",h)},__curator:{required:w.withMessage("Поле не должен быть пустым",h)},document_sub_type:{required:w.withMessage("Поле не должен быть пустым",h)},__signers:{}}}),actions:{async actionCreateDocument(p){let t={...p};this.buttonLoading=!0;const{response:l,error:n}=await te(de,t);return l?(this.buttonLoading=!1,Promise.resolve(l)):(this.buttonLoading=!1,Promise.reject(n))},async actionUpdateDocument({id:p,body:t}){try{this.buttonLoading=!0;const{data:l}=await ae({id:p,body:t});return Promise.resolve(l)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:t}=await se(p);qe(this.model,t),this.model.__approvers=t.approvers,this.model.__files=t.files,this.model.__curator=G().usersList.find(l=>l.id===t.curator.id),this.model.__signers=t.signers}catch{}finally{this.detailLoading=!1}}}}),ol={class:"user-select"},he={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(p,{emit:t}){const l=p,n=C([]),g=W(l,"modelValue"),b=async r=>{let{data:q}=await Ie.get("users/",r);q.hasOwnProperty("results")?n.value=q.results:n.value=q};return A(async()=>{await b(l.apiParams)}),(r,q)=>(V(),P("div",ol,[o(Y,{modelValue:e(g),"onUpdate:modelValue":q[0]||(q[0]=m=>Z(g)?g.value=m:null),options:n.value,"onUpdate:options":q[1]||(q[1]=m=>n.value=m),error:l.error,"api-url":"users","option-label":"full_name",label:l.label,placeholder:l.placeholder,required:l.required,searchable:""},{option:d(({option:m})=>[o(e(Be),{compact:!0,title:e(Ae)(m==null?void 0:m.user)?m==null?void 0:m.user.full_name:m==null?void 0:m.full_name,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D","avatar-classes":"w-6 h-6"},null,8,["title"])]),_:1},8,["modelValue","options","error","label","placeholder","required"])]))}},Pl={__name:"ApplicationForm",props:{formType:{type:String,default:x}},setup(p){const t=p,l=F(),n=nl(),g=re(),b=ie(),r=C(!1);C(null);const{t:q}=j(),m=Q(),c=X(),u=ne(n.rules,n.model),D=async()=>{var s,f,_,v;await u.value.$validate()&&(r.value=!0,n.model.approvers=[],n.model.signers=[],n.model.signers=[{user:(s=l==null?void 0:l.currentUser)==null?void 0:s.id}],n.model.sender=(_=(f=l==null?void 0:l.currentUser)==null?void 0:f.top_level_department)==null?void 0:_.id,n.model.curator=(v=n==null?void 0:n.model)==null?void 0:v.__curator.id,n.model.journal=E.APPLICATION,n.model.document_type=g.documentTypesList.find(L=>L.document_type===Number(E.APPLICATION)).id,n.model.approvers=M(n.model.__approvers))},T=async()=>{},z=()=>{t.formType===x?R():O()},R=async()=>{const i=await n.actionCreateDocument(n.model);await b.actionDocumentCountList(),i?(r.value=!1,$(null,q("document-sent"),U.SUCCESS),await m.replace({name:ce,query:{journal:E.APPLICATION}})):$(null,q("error-occurred"),U.ERROR)},O=async()=>{await n.actionUpdateDocument({id:c.params.id,body:n.model}),await b.actionDocumentCountList(),$(null,q("document-sent"),U.SUCCESS),await m.replace({name:pe,params:{id:c.params.id,journal:n.model.journal}})},y=i=>{n.model.__files=[],i.forEach(s=>{n.model.__files.push(s)})};return A(async()=>{c.params.id&&await n.actionGetDocumentDetailForUpdate(c.params.id)}),(i,s)=>{const f=le,_=J,v=Y,L=H;return e(n).detailLoading?(V(),N(f,{key:0})):(V(),P(ee,{key:1},[o(e(oe),{title:t.formType===e(x)?"create-sd-application":"update-sd-application"},{content:d(()=>[o(me,{"onEmit:preview":D,"onEmit:clearForm":T},{default:d(()=>[o(L,null,{default:d(()=>[o(_,{"col-class":"w-1/2"},{default:d(()=>[o(he,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":s[0]||(s[0]=a=>e(u).__curator.$model=a),error:e(u).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(v,{modelValue:e(u).document_sub_type.$model,"onUpdate:modelValue":s[1]||(s[1]=a=>e(u).document_sub_type.$model=a),options:e(g).documentSubTypesList,"onUpdate:options":s[2]||(s[2]=a=>e(g).documentSubTypesList=a),error:e(u).document_sub_type,"api-url":"document-sub-types","option-label":"name","option-value":"id",label:"application-type",placeholder:"select-application-type",required:"",searchable:""},null,8,["modelValue","options","error"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:i.orderStore.model.__approvers,"onUpdate:modelValue":s[3]||(s[3]=a=>i.orderStore.model.__approvers=a),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(_,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:e(u).__signers.$model,"onUpdate:modelValue":s[4]||(s[4]=a=>e(u).__signers.$model=a),disabled:"",label:"signers",placeholder:e(l).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),o(_,{"col-class":"w-full"},{default:d(()=>[o(ue,{modelValue:e(u).content.$model,"onUpdate:modelValue":s[5]||(s[5]=a=>e(u).content.$model=a),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(n).model.__files,"onEmit:fileUpload":y},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(fe,{modelValue:r.value,"onUpdate:modelValue":s[6]||(s[6]=a=>r.value=a),"send-button-loading":e(n).buttonLoading,"onEmit:send":z},{content:d(()=>[o(Ne,{"compose-model":{...e(n).model,curator:e(n).model.__curator[0],author:t.formType===e(x)?e(l).currentUser:e(n).model.__signers[0].user,signers:t.formType===e(x)?[e(l).currentUser]:e(n).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},tl={__name:"BranchMultiSelect",props:{modelValue:{type:[Array],default:[]},required:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(p,{emit:t}){const l=p,n=W(l,"modelValue");return(g,b)=>(V(),N(Se,{modelValue:e(n),"onUpdate:modelValue":b[0]||(b[0]=r=>Z(n)?n.value=r:null),"api-url":"companies","api-params":{condition:"A"},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"branch",required:l.required,type:"department","selection-length":2,placeholder:"enter-branch"},{chip:d(({value:r})=>[Ue(we(r.name),1)]),option:d(({value:r})=>[o(e(Le),{title:r.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","required"]))}},rl=K("sd-notice-store",{state:()=>{const p=F();return{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:p.currentUser.company.id,content:null,curator:null,document_type:E.NOTICE,document_sub_type:Ve.BUSINESS_TRIP,journal:ge.INNER,notices:[],start_date:null,end_date:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:w.withMessage("Поле не должен быть пустым",h)},start_date:{required:w.withMessage("Поле не должен быть пустым",h)},route:{required:w.withMessage("Поле не должен быть пустым",h)},content:{required:w.withMessage("Поле не должен быть пустым",h)},__companies:{required:w.withMessage("Поле не должен быть пустым",h)},__curator:{required:w.withMessage("Поле не должен быть пустым",h)},__employees:{required:w.withMessage("Поле не должен быть пустым",h)},__signers:{required:w.withMessage("Поле не должен быть пустым",h)},__tags:{required:w.withMessage("Поле не должен быть пустым",h)}}}},actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:t,error:l}=await te(de,p);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:p,body:t}){try{this.buttonLoading=!0;const{data:l}=await ae({id:p,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:t}=await se(p);console.log(t),qe(this.model,t),this.model.__signers=t.signers,this.model.__approvers=t.approvers,this.model.__curator=G().usersList.find(l=>l.id===t.curator.id),this.model.__employees=t.notices.map(l=>G().usersList.find(n=>n.id===l.user.id)),this.model.__companies=t.notices[0].destinations.map(l=>re().filialList.find(n=>n.id===l.id)),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),il={class:"flex w-full gap-x-4"},Fl={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:x}},setup(p){const t=p,{t:l}=j(),n=X(),g=Q(),b=F(),r=rl(),q=ie();re();const m=C(!1),c=ne(r.rules,r.model),u=async()=>{var i,s,f;await c.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=M(r.model.__approvers),r.model.signers=M(r.model.__signers),r.model.curator=(i=r==null?void 0:r.model)==null?void 0:i.__curator.id,r.model.notices=r.model.__employees.map(_=>({start_date:r.model.start_date,end_date:r.model.end_date,user:_.id,route:r.model.route,companies:r.model.__companies.map(v=>v.id)})),r.model.sender=(f=(s=b==null?void 0:b.currentUser)==null?void 0:s.top_level_department)==null?void 0:f.id,r.model.tags=r.model.__tags.map(_=>({id:_.id})),r.model.files=r.model.__files.map(_=>({id:_.id})),m.value=!0)},D=()=>{},T=y=>{r.model.__files=[],y.forEach(i=>{r.model.__files.push(i)})},z=async()=>{const y=await r.actionCreateDocument(r.model);await q.actionDocumentCountList(),y?(m.value=!1,$(null,l("document-sent"),U.SUCCESS),await g.replace({name:ce,query:{document_type:E.NOTICE}})):$(null,l("error-occurred"),U.ERROR)},R=async()=>{await r.actionUpdateDocument({id:n.params.id,body:r.model}),await q.actionDocumentCountList(),$(null,l("changed"),U.SUCCESS),await g.replace({name:pe,params:{id:n.params.id,document_type:n.params.document_type,document_sub_type:n.params.document_sun_type}})},O=()=>{t.formType===x?z():R()};return A(async()=>{n.params.id&&await r.actionGetDocumentDetailForUpdate(n.params.id)}),(y,i)=>{const s=le,f=J,_=$e,v=Y,L=H;return e(r).detailLoading?(V(),N(s,{key:0})):(V(),P(ee,{key:1},[o(e(oe),{title:t.formType===e(x)?"create-business-trip-notice":"update-business-trip-notice"},{content:d(()=>[o(me,{"onEmit:preview":u,"onEmit:clearForm":D},{default:d(()=>[o(L,null,{default:d(()=>[o(f,{"col-class":"w-1/2"},{default:d(()=>[o(he,{modelValue:e(c).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=a=>e(c).__curator.$model=a),error:e(c).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:e(c).__employees.$model,"onUpdate:modelValue":i[1]||(i[1]=a=>e(c).__employees.$model=a),error:e(c).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(tl,{modelValue:e(c).__companies.$model,"onUpdate:modelValue":i[2]||(i[2]=a=>e(c).__companies.$model=a),error:e(c).__companies},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[I("div",il,[o(_,{modelValue:e(c).start_date.$model,"onUpdate:modelValue":[i[3]||(i[3]=a=>e(c).start_date.$model=a),i[4]||(i[4]=a=>e(c).start_date.$model=e(_e)(a))],error:e(c).start_date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error"]),o(_,{modelValue:e(c).end_date.$model,"onUpdate:modelValue":[i[5]||(i[5]=a=>e(c).end_date.$model=a),i[6]||(i[6]=a=>e(c).end_date.$model=e(_e)(a))],error:e(c).end_date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error"])])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(Se,{modelValue:e(c).__tags.$model,"onUpdate:modelValue":i[7]||(i[7]=a=>e(c).__tags.$model=a),error:e(c).__tags,"api-url":"tags","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:a})=>[Ue(we(a.name),1)]),option:d(({value:a})=>[o(e(Le),{title:a.name},null,8,["title"])]),_:1},8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(v,{modelValue:e(c).route.$model,"onUpdate:modelValue":i[8]||(i[8]=a=>e(c).route.$model=a),error:e(c).route,options:e(Re),required:"","option-label":"label","option-value":"value",label:"route",placeholder:"select-route"},null,8,["modelValue","error","options"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":i[9]||(i[9]=a=>e(r).model.__approvers=a),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:e(c).__signers.$model,"onUpdate:modelValue":i[10]||(i[10]=a=>e(c).__signers.$model=a),error:e(c).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:d(()=>[o(ue,{modelValue:e(c).content.$model,"onUpdate:modelValue":i[11]||(i[11]=a=>e(c).content.$model=a),error:e(c).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":T},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(fe,{modelValue:m.value,"onUpdate:modelValue":i[12]||(i[12]=a=>m.value=a),"send-button-loading":e(r).buttonLoading,"onEmit:send":O},{content:d(()=>[o(e(Pe),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},al=K("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:F().currentUser.company.id,curator:null,document_type:E.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:ge.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__signers:[],__negotiators:[],__signers_copy:[]},rules:{register_number:{required:w.withMessage("Поле не должен быть пустым",h)},register_date:{required:w.withMessage("Поле не должен быть пустым",h)},content:{required:w.withMessage("Поле не должен быть пустым",h)},__negotiators:{},__curator:{required:w.withMessage("Поле не должен быть пустым",h)},__signers:{required:w.withMessage("Поле не должен быть пустым",h)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:t,error:l}=await te(de,p);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:p,body:t}){try{this.buttonLoading=!0;const{data:l}=await ae({id:p,body:t});return Promise.resolve(l)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:t}=await se(p);qe(this.model,t),this.model.__signers=t.signers.filter(l=>l.type!==B.NEGOTIATOR),this.model.__negotiators=t.signers.filter(l=>l.type===B.NEGOTIATOR),this.model.__approvers=t.approvers,this.model.__curator=G().usersList.find(l=>l.id===t.curator.id)}catch{}finally{this.detailLoading=!1}}}}),Il={__name:"OrderForm",props:{formType:{type:String,default:x}},setup(p){const t=p,l=al(),n=ie(),g=F(),b=X(),r=Q(),q=ne(l.rules,l.model),{t:m}=j(),c=C(!1),u=async()=>{var i,s,f;await q.value.$validate()&&(l.model.approvers=[],l.model.signers=[],l.model.approvers=M(l.model.__approvers),l.model.signers=M(l.model.__signers),l.model.curator=(i=l==null?void 0:l.model)==null?void 0:i.__curator.id,l.model.sender=(f=(s=g==null?void 0:g.currentUser)==null?void 0:s.top_level_department)==null?void 0:f.id,l.model.files=l.model.__files.map(_=>({id:_.id})),l.model.document_sub_type=b.params.document_sub_type,l.model.register_date=_e(l.model.register_date),l.model.__negotiators.forEach(_=>{l.model.signers.push(_.hasOwnProperty("user")?{id:_.id,user:_.user.id,type:B.NEGOTIATOR}:{user:_.id,type:B.NEGOTIATOR})}),b.query.compose_id&&(l.model.trip_notice_id=b.query.compose_id),c.value=!0)},D=()=>{},T=async()=>{const y=await l.actionCreateDocument(l.model);await n.actionDocumentCountList(),y?(c.value=!1,$(null,m("document-sent"),U.SUCCESS),await r.replace({name:ce,query:{document_type:E.ORDER}})):$(null,m("error-occurred"),U.ERROR)},z=async()=>{await l.actionUpdateDocument({id:b.params.id,body:l.model}),await n.actionDocumentCountList(),$(null,m("changed"),U.SUCCESS),await r.replace({name:pe,params:{id:b.params.id,document_type:b.params.document_type,document_sub_type:b.params.document_sun_type}})},R=()=>{t.formType===x?T():z()},O=y=>{l.model.__files=[],y.forEach(i=>{l.model.__files.push(i)})};return A(async()=>{b.params.id&&await l.actionGetDocumentDetailForUpdate(b.params.id)}),(y,i)=>{const s=le,f=J,_=ve,v=$e,L=H;return e(l).detailLoading?(V(),N(s,{key:0})):(V(),P(ee,{key:1},[o(e(oe),{title:t.formType===e(x)?"create-order":"update-order"},{content:d(()=>[o(me,{"onEmit:preview":u,"onEmit:clearForm":D},{default:d(()=>[o(L,null,{default:d(()=>[o(f,{"col-class":"w-1/2"},{default:d(()=>[o(he,{modelValue:e(q).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=a=>e(q).__curator.$model=a),error:e(q).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(_,{modelValue:e(q).register_number.$model,"onUpdate:modelValue":i[1]||(i[1]=a=>e(q).register_number.$model=a),error:e(q).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(v,{modelValue:e(q).register_date.$model,"onUpdate:modelValue":i[2]||(i[2]=a=>e(q).register_date.$model=a),error:e(q).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:e(l).model.__approvers,"onUpdate:modelValue":i[3]||(i[3]=a=>e(l).model.__approvers=a),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:e(q).__negotiators.$model,"onUpdate:modelValue":i[4]||(i[4]=a=>e(q).__negotiators.$model=a),label:"approver-signers",placeholder:"select-approver-signers"},null,8,["modelValue"])]),_:1}),o(f,{"col-class":"w-1/2"},{default:d(()=>[o(S,{modelValue:e(q).__signers.$model,"onUpdate:modelValue":i[5]||(i[5]=a=>e(q).__signers.$model=a),error:e(q).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),o(f,{"col-class":"w-full"},{default:d(()=>[o(ue,{modelValue:e(q).content.$model,"onUpdate:modelValue":i[6]||(i[6]=a=>e(q).content.$model=a),error:e(q).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":O},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),o(fe,{modelValue:c.value,"onUpdate:modelValue":i[7]||(i[7]=a=>c.value=a),"send-button-loading":e(l).buttonLoading,"onEmit:send":R},{content:d(()=>[o(e(Fe),{"compose-model":e(l).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{Nl as _,Fl as a,Pl as b,Il as c};
