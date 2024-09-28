import{_ as G}from"./BaseRow-c9cd129b.js";import{_ as H}from"./BaseCol-c8e00f53.js";import{_ as _e}from"./BaseInput-64148927.js";import{B as De,Y as ve,L as I,cO as Re,cF as Te,o as V,g as N,w as d,p as n,q as e,Z as ye,i as ue,z as Oe,k as A,j as Ve,_ as Ue,b0 as Y,c0 as $,c1 as P,bz as F,t as B,A as Ee,u as Q,ax as J,ak as we,cj as W,F as K,ay as U,an as Z,cH as qe,x as ze,aF as Ne,cc as ke,a8 as Pe,cP as Ie}from"./index-f8f040e4.js";import{c as h,r as v,u as X}from"./index-efaf835f.js";import{_ as Fe,a as Me}from"./BranchMultiSelect-f7b391da.js";import{_ as je,g as Ae,e as Be,f as Ge,a as He,b as Ye,c as Qe,d as Je}from"./DecreeTemplate-7a68bd08.js";import{L as ee}from"./LayoutWithTabs-8c756dbe.js";import"./BaseTabMenu-910093dd.js";import{f as le,a as oe,b as ne}from"./index.store-11fb8ac3.js";import"./dialog.esm-8800b39e.js";import"./tabpanel.esm-6b0959fa.js";import{s as te,L as S,O as We,P as re,Q as M,R as fe,S as Ke,T as Ze}from"./index-59a74179.js";import"./BaseTabView-0b30541f.js";import{f as he}from"./formatDate-0dc895ed.js";import{_ as L}from"./UserMultiSelect-e693e7be.js";import{u as j,w as ie,d as E,c as Xe}from"./axios.config-ffeea4bc.js";import{u as be,d as ae}from"./common-a85b5eca.js";import{d as xe,e as se,c as de}from"./index-c4c1f2d4.js";import{F as k}from"./constants-5c471c97.js";import{_ as $e}from"./BaseDropdown-42c2b465.js";import{_ as Se}from"./BaseCalendar-e5d89b7b.js";import{_ as el}from"./BaseMultiSelect-1d73228a.js";import"./qrcode.vue.esm-de88aa02.js";import"./Dropdown-1d0bf54b.js";import"./menu.esm-fcbdbdb1.js";/* empty css                                                 */import"./avatar.esm-0763c05b.js";/* empty css                                                 *//* empty css                                                       */import"./accordiontab.esm-729cc122.js";import{_ as ll}from"./WithRadio-cae1f270.js";import"./radiobutton.esm-d0fa8d86.js";import"./checkbox.esm-4437515d.js";import"./dayjs.min-5dce59ec.js";import{_ as ol}from"./WithSelectable-9a660c1b.js";import{_ as nl}from"./BaseBrickTab-60ffb17d.js";import{_ as tl}from"./BaseFileUpload-a012fbb4.js";import{_ as rl}from"./BaseFroalaEditor-c29df6fc.js";import{_ as il}from"./BaseDialog-8c35c98a.js";var al=`
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
`,sl={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};De.extend({name:"editor",css:al,classes:sl});(function(){try{return window.Quill}catch{return null}})();const ce={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]}},emits:["update:modelValue","emit:fileUpload"],setup(c,{emit:t}){const o=c,l=ve(o,"modelValue"),y=I([{title:"text",slot:"editor",icon:Re},{title:"file",slot:"file",icon:Te}]);return(_,r)=>(V(),N(nl,{"tab-panel-list":y.value,"panel-container-class":"px-0"},{editor:d(()=>[n(rl,{modelValue:e(l),"onUpdate:modelValue":r[0]||(r[0]=u=>ye(l)?l.value=u:null)},null,8,["modelValue"])]),file:d(()=>[ue("div",{class:Oe(o.fileUploadContainerClasses)},[n(tl,{files:o.files,"onEmit:fileUpload":r[1]||(r[1]=u=>t("emit:fileUpload",u))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},dl={class:"flex flex-col justify-between h-full"},cl={class:"px-6 py-4 overflow-y-auto"},pl={class:"actions p-6"},pe={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(c,{emit:t}){return(o,l)=>{const y=Ue;return V(),A("div",dl,[ue("div",cl,[Ve(o.$slots,"default")]),ue("div",pl,[n(y,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=_=>t("emit:clearForm"))}),n(y,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=_=>t("emit:preview"))})])])}}},ml=Y("sd-stores-inner",{state:()=>{var c,t;return{buttonLoading:!1,detailLoading:!1,model:{company:(t=(c=j().currentUser)==null?void 0:c.company)==null?void 0:t.id,content:null,document_type:$.INNER,document_sub_type:P.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:F.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__departments:{required:h.withMessage("Поле не должен быть пустым",v)},__approvers:{},__signers:{required:h.withMessage("Поле не должен быть пустым",v)}}}},actions:{async actionCreateDocument(c){let t={...c,type:xe,sub_type:xe};this.buttonLoading=!0;const{response:o,error:l}=await ie(ne,t);return o?(this.buttonLoading=!1,Promise.resolve(o)):Promise.reject(l)},async actionUpdateDocument({id:c,body:t}){try{this.buttonLoading=!0;const{data:o}=await le({id:c,body:t});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:t}=await oe(c);te(this.model,t),this.model.__approvers=await S(t.approvers),this.model.__signers=await S(t.signers),this.model.__departments=await We(t.receiver.departments),this.model.__files=t.files}catch{}finally{this.detailLoading=!1}}}}),ul={class:"font-semibold text-xl"},me={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(c,{emit:t}){const l=ve(c,"modelValue"),{t:y}=B();return(_,r)=>{const u=Ue,a=il;return V(),N(a,{modelValue:e(l),"onUpdate:modelValue":r[1]||(r[1]=s=>ye(l)?l.value=s:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:d(()=>[ue("span",ul,Ee(e(y)("preview")),1)]),content:d(()=>[Ve(_.$slots,"content")]),footer:d(()=>[n(u,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),n(u,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:c.sendButtonLoading,onClick:r[0]||(r[0]=s=>t("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},io={__name:"InnerForm",props:{formType:{type:String,default:k}},setup(c){const t=c,o=j(),l=ml();be();const y=ae(),_=I(!1);I(null);const{t:r}=B(),u=Q(),a=J(),s=X(l.rules,l.model),C=async()=>{await s.value.$validate()&&(_.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(i=>i.id),l.model.files=[],l.model.files=l.model.__files.map(i=>({id:i.id})),l.model.journal=F.INNER,l.model.sender=o.currentUser.top_level_department.id,l.model.approvers=M(l.model.__approvers),l.model.signers=M(l.model.__signers),l.model.document_type=a.params.document_type,l.model.document_sub_type=a.params.document_sub_type)},D=()=>{t.formType===k?R():T()},R=async()=>{const g=await l.actionCreateDocument(l.model);await y.actionDocumentCountList(),g?(_.value=!1,E(null,r("document-sent"),U.SUCCESS),await u.replace({name:se,query:{document_type:$.INNER}})):E(null,r("error-occurred"),U.ERROR)},T=async()=>{await l.actionUpdateDocument({id:a.params.id,body:l.model}),await y.actionDocumentCountList(),E(null,r("document-sent"),U.SUCCESS),await u.replace({name:de,params:{id:a.params.id,document_type:$.INNER,document_sub_type:P.SERVICE_LETTER}})},O=()=>{console.log("Clear Form")},z=g=>{l.model.__files=[],g.forEach(i=>{l.model.__files.push(i)})};return we(async()=>{a.params.id&&await l.actionGetDocumentDetailForUpdate(a.params.id)}),W(()=>{re(l.model)}),(g,i)=>{const p=Z,q=_e,f=H,b=G;return e(l).detailLoading?(V(),N(p,{key:0})):(V(),A(K,{key:1},[n(e(ee),{title:t.formType===e(k)?"create-sd-inner":"update-sd-inner"},{content:d(()=>[n(pe,{"onEmit:preview":C,"onEmit:clearForm":O},{default:d(()=>[n(b,null,{default:d(()=>[n(f,{"col-class":"w-1/2"},{default:d(()=>[n(q,{modelValue:e(s).register_number.$model,"onUpdate:modelValue":i[0]||(i[0]=m=>e(s).register_number.$model=m),error:e(s).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(Fe,{modelValue:e(s).__departments.$model,"onUpdate:modelValue":i[1]||(i[1]=m=>e(s).__departments.$model=m),error:e(s).__departments},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(q,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":i[2]||(i[2]=m=>e(s).short_description.$model=m),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__approvers.$model,"onUpdate:modelValue":i[3]||(i[3]=m=>e(s).__approvers.$model=m),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":i[4]||(i[4]=m=>e(s).__signers.$model=m),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":i[5]||(i[5]=m=>e(s).content.$model=m),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:_.value,"onUpdate:modelValue":i[6]||(i[6]=m=>_.value=m),"send-button-loading":e(l).buttonLoading,"onEmit:send":D},{content:d(()=>{var m,x;return[n(je,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(x=(m=e(o).currentUser)==null?void 0:m.top_level_department)==null?void 0:x.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},ql=Y("sd-store-application",{state:()=>{var c,t;return{buttonLoading:!1,detailLoading:!1,model:{company:(t=(c=j().currentUser)==null?void 0:c.company)==null?void 0:t.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__approvers:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{}}}},actions:{async actionCreateDocument(c){let t={...c};this.buttonLoading=!0;const{response:o,error:l}=await ie(ne,t);return o?(this.buttonLoading=!1,Promise.resolve(o)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:c,body:t}){try{this.buttonLoading=!0;const{data:o}=await le({id:c,body:t});return Promise.resolve(o)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:t}=await oe(c);te(this.model,t),this.model.__approvers=await S(t.approvers),this.model.__signers=await S(t.signers.filter(o=>o.type===qe.SIGNER)),this.model.__curator=await fe([],t.curator.id,!1),this.model.__files=t.files}catch{}finally{this.detailLoading=!1}}}}),Le=Y("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:j().currentUser.company.id,curator:null,document_type:$.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:F.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",v)},register_date:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__negotiators:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:t,error:o}=await ie(ne,c);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:t}){try{this.buttonLoading=!0;const{data:o}=await le({id:c,body:t});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:t}=await oe(c);te(this.model,t),this.model.__signers=await S(t.signers.filter(o=>o.type!==qe.NEGOTIATOR)),this.model.__negotiators=await S(t.signers.filter(o=>o.type===qe.NEGOTIATOR)),this.model.__approvers=await S(t.approvers),this.model.__curator=await fe([],t.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),_l={class:"user-select"},ge={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}},apiUrl:{type:String,default:"users"}},emits:["update:modelValue"],setup(c,{emit:t}){const o=c,l=I([]),y=ve(o,"modelValue"),_=async r=>{let{data:u}=await Xe.get(`${o.apiUrl}/`,r);u.hasOwnProperty("results")?l.value=u.results:l.value=u};return we(async()=>{await _(o.apiParams)}),(r,u)=>(V(),A("div",_l,[n($e,{modelValue:e(y),"onUpdate:modelValue":u[0]||(u[0]=a=>ye(y)?y.value=a:null),options:l.value,"onUpdate:options":u[1]||(u[1]=a=>l.value=a),error:o.error,"api-url":o.apiUrl,"option-label":"full_name",label:o.label,placeholder:o.placeholder,required:o.required,searchable:""},{option:d(({option:a})=>[n(e(ol),{items:[a]},null,8,["items"])]),_:1},8,["modelValue","options","error","api-url","label","placeholder","required"])]))}},ao={__name:"ApplicationForm",props:{formType:{type:String,default:k}},setup(c){const t=c,o=j(),l=ql();be();const y=ae();Le();const _=I(!1);I(null);const{t:r}=B(),u=Q(),a=J(),s=X(l.rules,l.model),C=async()=>{var i,p,q,f,b;await s.value.$validate()&&(_.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(i=o==null?void 0:o.currentUser)==null?void 0:i.id}],l.model.sender=(q=(p=o==null?void 0:o.currentUser)==null?void 0:p.top_level_department)==null?void 0:q.id,l.model.curator=(b=(f=l==null?void 0:l.model)==null?void 0:f.__curator)==null?void 0:b.user_id,l.model.journal=F.APPLICATION,l.model.document_type=a.params.document_type,l.model.document_sub_type=a.params.document_sub_type,l.model.approvers=M(l.model.__approvers))},D=async()=>{},R=()=>{t.formType===k?T():O()},T=async()=>{const g=await l.actionCreateDocument(l.model);await y.actionDocumentCountList(),g?(_.value=!1,E(null,r("document-sent"),U.SUCCESS),await u.replace({name:se,query:{document_type:$.APPLICATION}})):E(null,r("error-occurred"),U.ERROR)},O=async()=>{await l.actionUpdateDocument({id:a.params.id,body:l.model}),await y.actionDocumentCountList(),E(null,r("document-sent"),U.SUCCESS),await u.replace({name:de,params:{id:a.params.id,document_type:$.APPLICATION,document_sub_type:P.LABOR_LEAVE}})},z=g=>{l.model.__files=[],g.forEach(i=>{l.model.__files.push(i)})};return we(async()=>{a.params.id&&await l.actionGetDocumentDetailForUpdate(a.params.id)}),W(()=>{re(l.model)}),(g,i)=>{const p=Z,q=H,f=G;return e(l).detailLoading?(V(),N(p,{key:0})):(V(),A(K,{key:1},[n(e(ee),{title:t.formType===e(k)?"create-sd-application":"update-sd-application"},{content:d(()=>[n(pe,{"onEmit:preview":C,"onEmit:clearForm":D},{default:d(()=>[n(f,null,{default:d(()=>[n(q,{"col-class":"w-1/2"},{default:d(()=>[n(ge,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=b=>e(s).__curator.$model=b),error:e(s).__curator,"api-url":"top-signers",label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__approvers.$model,"onUpdate:modelValue":i[1]||(i[1]=b=>e(s).__approvers.$model=b),error:e(s).__approvers,label:"approvers",placeholder:"enter-approvers",required:""},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":i[2]||(i[2]=b=>e(s).__signers.$model=b),disabled:"",label:"signers",placeholder:e(o).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),n(q,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":i[3]||(i[3]=b=>e(s).content.$model=b),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:_.value,"onUpdate:modelValue":i[4]||(i[4]=b=>_.value=b),"send-button-loading":e(l).buttonLoading,"onEmit:send":R},{content:d(()=>[n(Ae,{"compose-model":{...e(l).model,curator:e(l).model.__curator,author:t.formType===e(k)?e(o).currentUser:e(l).model.__signers[0].user,signers:t.formType===e(k)?[e(o).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},fl=Y("sd-notice-store",{state:()=>(j(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:$.NOTICE,document_sub_type:P.BUSINESS_TRIP,journal:F.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:h.withMessage("Поле не должен быть пустым",v)},start_date:{required:h.withMessage("Поле не должен быть пустым",v)},route:{required:h.withMessage("Поле не должен быть пустым",v)},content:{required:h.withMessage("Поле не должен быть пустым",v)},__companies:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__employees:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},__tags:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:t,error:o}=await ie(ne,c);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:t}){try{this.buttonLoading=!0;const{data:o}=await le({id:c,body:t});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:t}=await oe(c);te(this.model,t),this.model.__companies=[],this.model.__curator=await fe([],t.curator.id,!1),this.model.__employees=await S(t.notices),this.model.__approvers=await S(t.approvers),this.model.__signers=await S(t.signers),this.model.__companies=await Ke(t.notices[0].destinations),this.model.__tags=await Ze(t.tags),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),bl={class:"flex w-full gap-x-4"},so={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:k}},setup(c){const t=c,{t:o}=B(),l=J(),y=Q(),_=j(),r=fl(),u=ae();be();const a=X(r.rules,r.model),s=I(!1),C=ze(()=>{const i=t.formType===k,p=l.params.document_sub_type;return p===P.BUSINESS_TRIP_DECREE_LOCAL?i?"create-decree":"update-decree":p===P.BUSINESS_TRIP_ORDER_LOCAL?i?"create-order":"update-order":i?"create-business-trip-notice":"update-business-trip-notice"});Ne(()=>r.model.__tags,i=>{if(t.formType===k)if(i&&i.length){let p=`${i.map(q=>q.name_uz).join(", ")} yuzasidan`;r.model.short_description=p.charAt(0).toUpperCase()+p.slice(1).toLowerCase()}else r.model.short_description=null});const D=async()=>{var p,q,f,b;await a.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.notices=[],r.model.approvers=M(r.model.__approvers),r.model.signers=M(r.model.__signers),r.model.curator=(q=(p=r==null?void 0:r.model)==null?void 0:p.__curator)==null?void 0:q.user_id,r.model.journal=l.params.document_type===$.DECREE||l.params.document_type===$.ORDER?F.ORDERS_PROTOCOLS:F.INNER,r.model.company=_.currentUser.company.id,r.model.notices=r.model.__employees.map(m=>({start_date:r.model.start_date,end_date:r.model.end_date,user:m.id,route:r.model.route,companies:r.model.__companies.map(x=>x.id)})),r.model.sender=(b=(f=_==null?void 0:_.currentUser)==null?void 0:f.top_level_department)==null?void 0:b.id,r.model.tags=r.model.__tags.map(m=>({id:m.id})),r.model.files=r.model.__files.map(m=>({id:m.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,s.value=!0)},R=()=>{},T=i=>{r.model.__files=[],i.forEach(p=>{r.model.__files.push(p)})},O=async()=>{const i=await r.actionCreateDocument(r.model);await u.actionDocumentCountList(),i?(s.value=!1,E(null,o("document-sent"),U.SUCCESS),await y.replace({name:se,query:{document_type:l.params.document_sub_type===P.BUSINESS_TRIP_DECREE_LOCAL?$.DECREE:l.params.document_sub_type===P.BUSINESS_TRIP_ORDER_LOCAL?$.ORDER:$.NOTICE}})):E(null,o("error-occurred"),U.ERROR)},z=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await u.actionDocumentCountList(),E(null,o("changed"),U.SUCCESS),await y.replace({name:de,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},g=()=>{t.formType===k?O():z()};return ke(async()=>{l.params.id&&await r.actionGetDocumentDetailForUpdate(l.params.id)}),W(()=>{re(r.model)}),(i,p)=>{const q=Z,f=H,b=Se,m=$e,x=_e,Ce=G;return e(r).detailLoading?(V(),N(q,{key:0})):(V(),A(K,{key:1},[n(e(ee),{title:C.value},{content:d(()=>[n(pe,{"onEmit:preview":D,"onEmit:clearForm":R},{default:d(()=>[n(Ce,null,{default:d(()=>[n(f,{"col-class":"w-1/2"},{default:d(()=>[n(ge,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":p[0]||(p[0]=w=>e(a).__curator.$model=w),error:e(a).__curator,"api-url":"top-signers",label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(a).__employees.$model,"onUpdate:modelValue":p[1]||(p[1]=w=>e(a).__employees.$model=w),error:e(a).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(Me,{modelValue:e(a).__companies.$model,"onUpdate:modelValue":p[2]||(p[2]=w=>e(a).__companies.$model=w),error:e(a).__companies,"text-truncate":""},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(el,{modelValue:e(a).__tags.$model,"onUpdate:modelValue":p[3]||(p[3]=w=>e(a).__tags.$model=w),error:e(a).__tags,"api-url":"tags","api-params":{document_sub_type:e(l).params.document_sub_type},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets",required:""},{chip:d(({value:w})=>[Pe(Ee(w.name),1)]),option:d(({value:w})=>[n(e(ll),{title:w.name},null,8,["title"])]),_:1},8,["modelValue","error","api-params"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[ue("div",bl,[n(b,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[p[4]||(p[4]=w=>e(a).start_date.$model=w),p[5]||(p[5]=w=>e(a).start_date.$model=e(he)(w))],error:e(a).start_date,"min-date":new Date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error","min-date"]),n(b,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[p[6]||(p[6]=w=>e(a).end_date.$model=w),p[7]||(p[7]=w=>e(a).end_date.$model=e(he)(w))],error:e(a).end_date,"min-date":new Date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error","min-date"])])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(m,{modelValue:e(a).route.$model,"onUpdate:modelValue":p[8]||(p[8]=w=>e(a).route.$model=w),error:e(a).route,options:e(Ie),required:"","option-label":"label","option-value":"value",label:"transport-type",placeholder:"select-transport-type"},null,8,["modelValue","error","options"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":p[9]||(p[9]=w=>e(r).model.__approvers=w),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":p[10]||(p[10]=w=>e(a).__signers.$model=w),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:d(()=>[n(x,{modelValue:e(a).short_description.$model,"onUpdate:modelValue":p[11]||(p[11]=w=>e(a).short_description.$model=w),error:e(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(a).content.$model,"onUpdate:modelValue":p[12]||(p[12]=w=>e(a).content.$model=w),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":T},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:s.value,"onUpdate:modelValue":p[13]||(p[13]=w=>s.value=w),"send-button-loading":e(r).buttonLoading,"onEmit:send":g},{content:d(()=>[e(l).params.document_sub_type===e(P).BUSINESS_TRIP_DECREE_LOCAL?(V(),N(e(Be),{key:0,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):e(l).params.document_sub_type===e(P).BUSINESS_TRIP_ORDER_LOCAL?(V(),N(e(Ge),{key:1,"compose-model":e(r).model,preview:!0},null,8,["compose-model"])):(V(),N(e(He),{key:2,"compose-model":e(r).model,preview:!0},null,8,["compose-model"]))]),_:1},8,["modelValue","send-button-loading"])],64))}}},co={__name:"OrderForm",props:{formType:{type:String,default:k}},setup(c){const t=c,o=Le(),l=ae(),y=j(),_=J(),r=Q(),u=X(o.rules,o.model),{t:a}=B(),s=I(!1),C=async()=>{var i,p,q,f;await u.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.approvers=M(o.model.__approvers),o.model.curator=(p=(i=o==null?void 0:o.model)==null?void 0:i.__curator)==null?void 0:p.user_id,o.model.sender=(f=(q=y==null?void 0:y.currentUser)==null?void 0:q.top_level_department)==null?void 0:f.id,o.model.files=o.model.__files.map(b=>({id:b.id})),o.model.document_type=_.params.document_type,o.model.document_sub_type=_.params.document_sub_type,o.model.journal=F.ORDERS_PROTOCOLS,o.model.register_date=he(o.model.register_date),o.model.__negotiators.forEach(b=>{o.model.signers.push(b.hasOwnProperty("user")?{id:b.id,user:b.user.id,type:qe.NEGOTIATOR}:{user:b.id,type:qe.NEGOTIATOR})}),_.query.compose_id&&(o.model.trip_notice_id=_.query.compose_id),s.value=!0)},D=()=>{},R=async()=>{const g=await o.actionCreateDocument(o.model);await l.actionDocumentCountList(),g?(s.value=!1,E(null,a("document-sent"),U.SUCCESS),await r.replace({name:se,query:{document_type:$.ORDER}})):E(null,a("error-occurred"),U.ERROR)},T=async()=>{await o.actionUpdateDocument({id:_.params.id,body:o.model}),await l.actionDocumentCountList(),E(null,a("changed"),U.SUCCESS),await r.replace({name:de,params:{id:_.params.id,document_type:_.params.document_type,document_sub_type:_.params.document_sub_type}})},O=()=>{t.formType===k?R():T()},z=g=>{o.model.__files=[],g.forEach(i=>{o.model.__files.push(i)})};return we(async()=>{_.params.id&&await o.actionGetDocumentDetailForUpdate(_.params.id)}),W(()=>{re(o.model)}),(g,i)=>{const p=Z,q=H,f=_e,b=Se,m=G;return e(o).detailLoading?(V(),N(p,{key:0})):(V(),A(K,{key:1},[n(e(ee),{title:t.formType===e(k)?"create-order":"update-order"},{content:d(()=>[n(pe,{"onEmit:preview":C,"onEmit:clearForm":D},{default:d(()=>[n(m,null,{default:d(()=>[n(q,{"col-class":"w-1/2"},{default:d(()=>[n(ge,{modelValue:e(u).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=x=>e(u).__curator.$model=x),error:e(u).__curator,"api-url":"top-signers",label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(f,{modelValue:e(u).register_number.$model,"onUpdate:modelValue":i[1]||(i[1]=x=>e(u).register_number.$model=x),error:e(u).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(b,{modelValue:e(u).register_date.$model,"onUpdate:modelValue":i[2]||(i[2]=x=>e(u).register_date.$model=x),error:e(u).register_date,required:"",label:"reg-date",placeholder:"enter-reg-date"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(o).model.__approvers,"onUpdate:modelValue":i[3]||(i[3]=x=>e(o).model.__approvers=x),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(u).__negotiators.$model,"onUpdate:modelValue":i[4]||(i[4]=x=>e(u).__negotiators.$model=x),error:e(u).__negotiators,label:"approver-signers",placeholder:"select-approver-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(u).content.$model,"onUpdate:modelValue":i[5]||(i[5]=x=>e(u).content.$model=x),error:e(u).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":z},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:s.value,"onUpdate:modelValue":i[6]||(i[6]=x=>s.value=x),"send-button-loading":e(o).buttonLoading,"onEmit:send":O},{content:d(()=>[n(e(Ye),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=Y("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:t,error:o}=await ie(ne,c);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:t}){try{this.buttonLoading=!0;const{data:o}=await le({id:c,body:t});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:t}=await oe(c);te(this.model,t),this.model.__curator=await fe([],t.curator.id,!1),this.model.__approvers=await S(t.approvers),this.model.__signers=await S(t.signers)}catch{}finally{this.detailLoading=!1}}}}),po={__name:"OrdinaryNoticeForm",props:{formType:{type:String,default:k}},setup(c){const t=c,{t:o}=B(),l=J(),y=Q(),_=j(),r=gl(),u=ae();be();const a=I(!1),s=X(r.rules,r.model),C=async()=>{var i,p,q,f;await s.value.$validate()&&(r.model.approvers=[],r.model.signers=[],r.model.approvers=M(r.model.__approvers),r.model.signers=M(r.model.__signers),r.model.curator=(p=(i=r==null?void 0:r.model)==null?void 0:i.__curator)==null?void 0:p.user_id,r.model.journal=F.INNER,r.model.company=_.currentUser.company.id,r.model.sender=(f=(q=_==null?void 0:_.currentUser)==null?void 0:q.top_level_department)==null?void 0:f.id,r.model.files=r.model.__files.map(b=>({id:b.id})),r.model.document_type=l.params.document_type,r.model.document_sub_type=l.params.document_sub_type,a.value=!0)},D=()=>{},R=g=>{r.model.__files=[],g.forEach(i=>{r.model.__files.push(i)})},T=async()=>{const g=await r.actionCreateDocument(r.model);await u.actionDocumentCountList(),g?(a.value=!1,E(null,o("document-sent"),U.SUCCESS),await y.replace({name:se,query:{document_type:$.NOTICE}})):E(null,o("error-occurred"),U.ERROR)},O=async()=>{await r.actionUpdateDocument({id:l.params.id,body:r.model}),await u.actionDocumentCountList(),E(null,o("changed"),U.SUCCESS),await y.replace({name:de,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},z=()=>{t.formType===k?T():O()};return ke(async()=>{l.params.id&&await r.actionGetDocumentDetailForUpdate(l.params.id)}),W(()=>{re(r.model)}),(g,i)=>{const p=Z,q=H,f=_e,b=G;return e(r).detailLoading?(V(),N(p,{key:0})):(V(),A(K,{key:1},[n(e(ee),{title:t.formType===e(k)?"create-notice":"update-notice"},{content:d(()=>[n(pe,{"onEmit:preview":C,"onEmit:clearForm":D},{default:d(()=>[n(b,null,{default:d(()=>[n(q,{"col-class":"w-1/2"},{default:d(()=>[n(ge,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=m=>e(s).__curator.$model=m),error:e(s).__curator,"api-url":"top-signers",label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(f,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=m=>e(s).short_description.$model=m),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(r).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=m=>e(r).model.__approvers=m),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=m=>e(s).__signers.$model=m),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":i[4]||(i[4]=m=>e(s).content.$model=m),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(r).model.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:a.value,"onUpdate:modelValue":i[5]||(i[5]=m=>a.value=m),"send-button-loading":e(r).buttonLoading,"onEmit:send":z},{content:d(()=>[n(e(Qe),{"compose-model":e(r).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},wl=Y("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",v)},__curator:{required:h.withMessage("Поле не должен быть пустым",v)},__signers:{required:h.withMessage("Поле не должен быть пустым",v)},short_description:{required:h.withMessage("Поле не должен быть пустым",v)}}}),actions:{async actionCreateDocument(c){this.buttonLoading=!0;const{response:t,error:o}=await ie(ne,c);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:c,body:t}){try{this.buttonLoading=!0;const{data:o}=await le({id:c,body:t});return Promise.resolve(o)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(c){try{this.detailLoading=!0;const{data:t}=await oe(c);te(this.model,t),this.model.__curator=await fe([],t.curator.id,!1),this.model.__approvers=await S(t.approvers),this.model.__signers=await S(t.signers)}catch{}finally{this.detailLoading=!1}}}}),mo={__name:"DecreeForm",props:{formType:{type:String,default:k}},setup(c){const t=c,{t:o}=B(),l=J(),y=Q(),_=j(),r=ae();be();const u=I(!1),a=wl(),s=X(a.rules,a.model),C=async()=>{var i,p,q,f;await s.value.$validate()&&(a.model.approvers=[],a.model.signers=[],a.model.approvers=M(a.model.__approvers),a.model.signers=M(a.model.__signers),a.model.curator=(p=(i=a==null?void 0:a.model)==null?void 0:i.__curator)==null?void 0:p.user_id,a.model.journal=F.ORDERS_PROTOCOLS,a.model.company=_.currentUser.company.id,a.model.sender=(f=(q=_==null?void 0:_.currentUser)==null?void 0:q.top_level_department)==null?void 0:f.id,a.model.files=a.model.__files.map(b=>({id:b.id})),a.model.document_type=l.params.document_type,a.model.document_sub_type=l.params.document_sub_type,l.query.compose_id&&(a.model.trip_notice_id=l.query.compose_id),u.value=!0)},D=()=>{},R=g=>{a.model.__files=[],g.forEach(i=>{a.model.__files.push(i)})},T=async()=>{const g=await a.actionCreateDocument(a.model);await r.actionDocumentCountList(),g?(u.value=!1,E(null,o("document-sent"),U.SUCCESS),await y.replace({name:se,query:{document_type:l.params.document_type}})):E(null,o("error-occurred"),U.ERROR)},O=async()=>{await a.actionUpdateDocument({id:l.params.id,body:a.model}),await r.actionDocumentCountList(),E(null,o("changed"),U.SUCCESS),await y.replace({name:de,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sub_type}})},z=()=>{t.formType===k?T():O()};return ke(async()=>{l.params.id&&await a.actionGetDocumentDetailForUpdate(l.params.id)}),W(()=>{re(a.model)}),(g,i)=>{const p=Z,q=H,f=_e,b=G;return e(a).detailLoading?(V(),N(p,{key:0})):(V(),A(K,{key:1},[n(e(ee),{title:t.formType===e(k)?"create-decree":"update-decree"},{content:d(()=>[n(pe,{"onEmit:preview":C,"onEmit:clearForm":D},{default:d(()=>[n(b,null,{default:d(()=>[n(q,{"col-class":"w-1/2"},{default:d(()=>[n(ge,{modelValue:e(s).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=m=>e(s).__curator.$model=m),error:e(s).__curator,"api-url":"top-signers",label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(f,{modelValue:e(s).short_description.$model,"onUpdate:modelValue":i[1]||(i[1]=m=>e(s).short_description.$model=m),error:e(s).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(a).model.__approvers,"onUpdate:modelValue":i[2]||(i[2]=m=>e(a).model.__approvers=m),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(q,{"col-class":"w-1/2"},{default:d(()=>[n(L,{modelValue:e(s).__signers.$model,"onUpdate:modelValue":i[3]||(i[3]=m=>e(s).__signers.$model=m),error:e(s).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(q,{"col-class":"w-full"},{default:d(()=>[n(ce,{modelValue:e(s).content.$model,"onUpdate:modelValue":i[4]||(i[4]=m=>e(s).content.$model=m),error:e(s).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(a).model.__files,"onEmit:fileUpload":R},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(me,{modelValue:u.value,"onUpdate:modelValue":i[5]||(i[5]=m=>u.value=m),"send-button-loading":e(a).buttonLoading,"onEmit:send":z},{content:d(()=>[n(e(Je),{"compose-model":e(a).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{io as _,so as a,co as b,po as c,mo as d,ao as e};
