import{_ as W}from"./BaseRow-b039c633.js";import{_ as I}from"./BaseDropdown-687db5d8.js";import{_ as K}from"./BaseCol-dcf54979.js";import{_ as Ue}from"./BaseInput-6efd4c65.js";import{B as Se,D as j,x as E,o as x,g as z,w as q,p as n,q as e,K as A,i as F,S as Le,k as O,j as we,_ as he,t as Q,b4 as C,b5 as ke,av as ve,C as B,z as Z,u as X,A as ee,a3 as H,aT as Ee,O as le,aa as $,I as ne,L as ye,b7 as Ce}from"./index-3428901b.js";import{c as h,r as k,u as oe}from"./index-7adc6c8c.js";import{_ as ze}from"./DepartmentMultiSelect-5239c645.js";import{_ as De,a as Te,b as Me}from"./BusinessTripNoticeTemplate-f34c096a.js";import{L as te}from"./LayoutWithTabsCompose-41c072d3.js";import{_ as L}from"./UserMultiSelect-45f9e5a6.js";import{w as re,u as ie,d as U,c as Re}from"./axios.config-e9ba809a.js";import{u as G,g as ae,e as Y}from"./common-3605d03f.js";import{c as se,b as de,d as qe}from"./index.service-bca69eff.js";import{d as J,e as ce,c as pe}from"./index-c4c1f2d4.js";import{s as me,l as Ne,n as P,b as Fe}from"./index-046d51f2.js";import{F as y}from"./constants-5c471c97.js";import{_ as Pe}from"./BaseCalendar-e4313c9c.js";import{a as Oe,_ as xe}from"./WithLabel-a3ca2692.js";import{f as ge}from"./WithSelectable.vue_vue_type_style_index_0_lang-c87e7346.js";import"./qrcode.vue.esm-8f85b94a.js";import{b as Ie}from"./Dropdown-bbca7906.js";import"./menu.esm-22f57453.js";import"./radiobutton.esm-2e8b8f5a.js";import"./BaseIcon-5c0e6d97.js";import"./avatar.esm-48d4dbf6.js";import{_ as Ve}from"./WithRadio-370e44f3.js";import"./checkbox.esm-39d5e345.js";import{_ as je}from"./BaseBrickTab-4405a308.js";import{_ as Ae}from"./BaseFileUpload-cc2d1f55.js";import{_ as Be}from"./BaseDialog-fb0a4023.js";var He=`
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
`,Ge={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Se.extend({name:"editor",css:He,classes:Ge});(function(){try{return window.Quill}catch{return null}})();const ue={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]}},emits:["update:modelValue","emit:fileUpload"],setup(p,{emit:t}){const r=p,l=j(r,"modelValue"),b=E([{title:"text",slot:"editor",icon:"TextSquareIcon"},{title:"file",slot:"file",icon:"FileTextFilledIcon"}]);return(g,o)=>(x(),z(je,{"tab-panel-list":b.value,"panel-container-class":"px-0"},{editor:q(()=>[n(Ie,{modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=m=>A(l)?l.value=m:null)},null,8,["modelValue"])]),file:q(()=>[F("div",{class:Le(r.fileUploadContainerClasses)},[n(Ae,{files:r.files,"onEmit:fileUpload":o[1]||(o[1]=m=>t("emit:fileUpload",m))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},Ye={class:"flex flex-col justify-between h-full"},Je={class:"px-6 py-4 overflow-y-auto"},We={class:"actions p-6"},be={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(p,{emit:t}){return(r,l)=>{const b=he;return x(),O("div",Ye,[F("div",Je,[we(r.$slots,"default")]),F("div",We,[n(b,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:l[0]||(l[0]=g=>t("emit:clearForm"))}),n(b,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:l[1]||(l[1]=g=>t("emit:preview"))})])])}}},Ke=Q("sd-stores-inner",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,document_type:C.INNER,document_sub_type:ke.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:ve.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{register_number:{required:h.withMessage("Поле не должен быть пустым",k)},title:{required:h.withMessage("Поле не должен быть пустым",k)},short_description:{required:h.withMessage("Поле не должен быть пустым",k)},content:{required:h.withMessage("Поле не должен быть пустым",k)},__departments:{required:h.withMessage("Поле не должен быть пустым",k)},__approvers:{},__signers:{required:h.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(p){let t={...p,type:J,sub_type:J};this.buttonLoading=!0;const{response:r,error:l}=await re(qe,t);return r?(this.buttonLoading=!1,Promise.resolve(r)):Promise.reject(l)},async actionUpdateDocument({id:p,body:t}){try{this.buttonLoading=!0;const{data:r}=await se({id:p,body:t});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:t}=await de(p);me(this.model,t),this.model.__departments=t.receiver.departments,this.model.__signers=t.signers,this.model.__approvers=t.approvers,this.model.__files=t.files,console.log(this.model)}catch{}finally{this.detailLoading=!1}}}}),Qe={class:"font-semibold text-xl"},fe={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(p,{emit:t}){const l=j(p,"modelValue"),{t:b}=B();return(g,o)=>{const m=he,u=Be;return x(),z(u,{modelValue:e(l),"onUpdate:modelValue":o[1]||(o[1]=a=>A(l)?l.value=a:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:q(()=>[F("span",Qe,Z(e(b)("preview")),1)]),content:q(()=>[we(g.$slots,"content")]),footer:q(()=>[n(m,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),n(m,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:p.sendButtonLoading,onClick:o[0]||(o[0]=a=>t("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},Dl={__name:"InnerForm",props:{formType:{type:String,default:y}},setup(p){const t=p,r=ie(),l=Ke(),b=G(),g=ae(),o=E(!1);E(null);const{t:m}=B(),u=X(),a=ee(),c=oe(l.rules,l.model),D=async()=>{await c.value.$validate()&&(o.value=!0,l.model.approvers=[],l.model.signers=[],l.model.departments=[],l.model.departments=l.model.__departments.map(i=>i.id),l.model.files=[],l.model.files=l.model.__files.map(i=>({id:i.id})),l.model.sender=r.currentUser.top_level_department.id,l.model.approvers=P(l.model.__approvers),l.model.signers=P(l.model.__signers))},T=()=>{t.formType===y?M():R()},M=async()=>{const d=await l.actionCreateDocument(l.model);await g.actionDocumentCountList(),d?(o.value=!1,U(m("document-sent"),null,$.SUCCESS),await u.replace({name:ce,query:{type:J}})):U(m("error-occurred"),null,$.ERROR)},R=async()=>{await l.actionUpdateDocument({id:a.params.id,body:l.model}),await g.actionDocumentCountList(),U(m("document-sent"),null,$.SUCCESS),await u.replace({name:pe,params:{id:a.params.id,subType:l.model.sub_type}})},N=()=>{console.log("Clear Form")},V=d=>{l.model.__files=[],d.forEach(i=>{l.model.__files.push(i)})};return H(async()=>{a.params.id&&await l.actionGetDocumentDetailForUpdate(a.params.id)}),Ee(()=>{Ne(l.model)}),(d,i)=>{const w=ne,f=Ue,v=K,S=I,s=W;return e(l).detailLoading?(x(),z(w,{key:0})):(x(),O(le,{key:1},[n(e(te),{title:t.formType===e(y)?"create-sd-inner":"update-sd-inner"},{content:q(()=>[n(be,{"onEmit:preview":D,"onEmit:clearForm":N},{default:q(()=>[n(s,null,{default:q(()=>[n(v,{"col-class":"w-1/2"},{default:q(()=>[n(f,{modelValue:e(c).register_number.$model,"onUpdate:modelValue":i[0]||(i[0]=_=>e(c).register_number.$model=_),error:e(c).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),n(v,{"col-class":"w-1/2"},{default:q(()=>[n(ze,{modelValue:e(c).__departments.$model,"onUpdate:modelValue":i[1]||(i[1]=_=>e(c).__departments.$model=_),error:e(c).__departments},null,8,["modelValue","error"])]),_:1}),n(v,{"col-class":"w-1/2"},{default:q(()=>[n(S,{modelValue:e(c).title.$model,"onUpdate:modelValue":i[2]||(i[2]=_=>e(c).title.$model=_),options:e(b).documentTitleList,"onUpdate:options":i[3]||(i[3]=_=>e(b).documentTitleList=_),error:e(c).title,"api-url":"document-titles","option-label":"name","option-value":"id",label:"naming",placeholder:"enter-naming",required:"",searchable:"",size:"large"},null,8,["modelValue","options","error"])]),_:1}),n(v,{"col-class":"w-1/2"},{default:q(()=>[n(f,{modelValue:e(c).short_description.$model,"onUpdate:modelValue":i[4]||(i[4]=_=>e(c).short_description.$model=_),error:e(c).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),n(v,{"col-class":"w-1/2"},{default:q(()=>[n(L,{modelValue:e(c).__approvers.$model,"onUpdate:modelValue":i[5]||(i[5]=_=>e(c).__approvers.$model=_),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(v,{"col-class":"w-1/2"},{default:q(()=>[n(L,{modelValue:e(c).__signers.$model,"onUpdate:modelValue":i[6]||(i[6]=_=>e(c).__signers.$model=_),error:e(c).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(v,{"col-class":"w-full"},{default:q(()=>[n(ue,{modelValue:e(c).content.$model,"onUpdate:modelValue":i[7]||(i[7]=_=>e(c).content.$model=_),error:e(c).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":V},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(fe,{modelValue:o.value,"onUpdate:modelValue":i[8]||(i[8]=_=>o.value=_),"send-button-loading":e(l).buttonLoading,"onEmit:send":T},{content:q(()=>{var _,_e;return[n(De,{"compose-model":{...e(l).model,signers:e(l).model.__signers,approvers:e(l).model.__approvers,author:e(l).model.__signers[0],sender:{name:(_e=(_=e(r).currentUser)==null?void 0:_.top_level_department)==null?void 0:_e.name},receiver:{departments:e(l).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},Ze=Q("sd-store-application",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:h.withMessage("Поле не должен быть пустым",k)},__curator:{required:h.withMessage("Поле не должен быть пустым",k)},document_sub_type:{required:h.withMessage("Поле не должен быть пустым",k)},__approvers:{},__signers:{}}}),actions:{async actionCreateDocument(p){let t={...p};this.buttonLoading=!0;const{response:r,error:l}=await re(qe,t);return r?(this.buttonLoading=!1,Promise.resolve(r)):(this.buttonLoading=!1,Promise.reject(l))},async actionUpdateDocument({id:p,body:t}){try{this.buttonLoading=!0;const{data:r}=await se({id:p,body:t});return Promise.resolve(r)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:t}=await de(p);me(this.model,t),this.model.__approvers=t.approvers,this.model.__files=t.files,this.model.__curator=Y().usersList.find(r=>r.id===t.curator.id),this.model.__signers=t.signers}catch{}finally{this.detailLoading=!1}}}}),Xe={class:"user-select"},$e={__name:"UserSelect",props:{modelValue:{type:Object,default:[]},required:{type:Boolean,default:!1},label:{type:String,default:""},placeholder:{type:String,default:""},error:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(p,{emit:t}){const r=p,l=E([]),b=j(r,"modelValue"),g=async o=>{let{data:m}=await Re.get("users/",o);m.hasOwnProperty("results")?l.value=m.results:l.value=m};return H(async()=>{await g(r.apiParams)}),(o,m)=>(x(),O("div",Xe,[n(I,{modelValue:e(b),"onUpdate:modelValue":m[0]||(m[0]=u=>A(b)?b.value=u:null),options:l.value,"onUpdate:options":m[1]||(m[1]=u=>l.value=u),error:r.error,"api-url":"users","option-label":"full_name",label:r.label,placeholder:r.placeholder,required:r.required,searchable:"",size:"large"},{option:q(({option:u})=>[n(e(Oe),{compact:!0,title:e(Fe)(u==null?void 0:u.user)?u==null?void 0:u.user.full_name:u==null?void 0:u.full_name,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D","avatar-classes":"w-6 h-6"},null,8,["title"])]),_:1},8,["modelValue","options","error","label","placeholder","required"])]))}},Tl={__name:"ApplicationForm",props:{formType:{type:String,default:y}},setup(p){const t=p,r=ie(),l=Ze(),b=G(),g=ae(),o=E(!1);E(null);const{t:m}=B(),u=X(),a=ee(),c=oe(l.rules,l.model),D=async()=>{var i,w,f,v;await c.value.$validate()&&(o.value=!0,l.model.approvers=[],l.model.signers=[],l.model.signers=[{user:(i=r==null?void 0:r.currentUser)==null?void 0:i.id}],l.model.sender=(f=(w=r==null?void 0:r.currentUser)==null?void 0:w.top_level_department)==null?void 0:f.id,l.model.curator=(v=l==null?void 0:l.model)==null?void 0:v.__curator.id,l.model.journal=C.APPLICATION,l.model.document_type=b.documentTypesList.find(S=>S.document_type===Number(C.APPLICATION)).id,l.model.approvers=P(l.model.__approvers))},T=async()=>{},M=()=>{t.formType===y?R():N()},R=async()=>{const d=await l.actionCreateDocument(l.model);await g.actionDocumentCountList(),d?(o.value=!1,U(m("document-sent"),null,$.SUCCESS),await u.replace({name:ce,query:{journal:C.APPLICATION}})):U(m("error-occurred"),null,$.ERROR)},N=async()=>{await l.actionUpdateDocument({id:a.params.id,body:l.model}),await g.actionDocumentCountList(),U(m("document-sent"),null,$.SUCCESS),await u.replace({name:pe,params:{id:a.params.id,journal:l.model.journal}})},V=d=>{l.model.__files=[],d.forEach(i=>{l.model.__files.push(i)})};return H(async()=>{a.params.id&&await l.actionGetDocumentDetailForUpdate(a.params.id)}),(d,i)=>{const w=ne,f=K,v=I,S=W;return e(l).detailLoading?(x(),z(w,{key:0})):(x(),O(le,{key:1},[n(e(te),{title:t.formType===e(y)?"create-sd-application":"update-sd-application"},{content:q(()=>[n(be,{"onEmit:preview":D,"onEmit:clearForm":T},{default:q(()=>[n(S,null,{default:q(()=>[n(f,{"col-class":"w-1/2"},{default:q(()=>[n($e,{modelValue:e(c).__curator.$model,"onUpdate:modelValue":i[0]||(i[0]=s=>e(c).__curator.$model=s),error:e(c).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:q(()=>[n(v,{modelValue:e(c).document_sub_type.$model,"onUpdate:modelValue":i[1]||(i[1]=s=>e(c).document_sub_type.$model=s),options:e(b).documentSubTypesList,"onUpdate:options":i[2]||(i[2]=s=>e(b).documentSubTypesList=s),error:e(c).document_sub_type,"api-url":"document-sub-types","option-label":"name","option-value":"id",label:"application-type",placeholder:"select-application-type",required:"",searchable:"",size:"large"},null,8,["modelValue","options","error"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:q(()=>[n(L,{modelValue:e(c).__approvers.$model,"onUpdate:modelValue":i[3]||(i[3]=s=>e(c).__approvers.$model=s),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(f,{"col-class":"w-1/2"},{default:q(()=>[n(L,{modelValue:e(c).__signers.$model,"onUpdate:modelValue":i[4]||(i[4]=s=>e(c).__signers.$model=s),disabled:"",label:"signers",placeholder:e(r).currentUser.full_name},null,8,["modelValue","placeholder"])]),_:1}),n(f,{"col-class":"w-full"},{default:q(()=>[n(ue,{modelValue:e(c).content.$model,"onUpdate:modelValue":i[5]||(i[5]=s=>e(c).content.$model=s),error:e(c).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(l).model.__files,"onEmit:fileUpload":V},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(fe,{modelValue:o.value,"onUpdate:modelValue":i[6]||(i[6]=s=>o.value=s),"send-button-loading":e(l).buttonLoading,"onEmit:send":M},{content:q(()=>[n(Te,{"compose-model":{...e(l).model,curator:e(l).model.__curator[0],author:t.formType===e(y)?e(r).currentUser:e(l).model.__signers[0].user,signers:t.formType===e(y)?[e(r).currentUser]:e(l).model.__signers}},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}},el={__name:"BranchMultiSelect",props:{modelValue:{type:[Array],default:[]},required:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(p,{emit:t}){const r=p,l=j(r,"modelValue");return(b,g)=>(x(),z(xe,{modelValue:e(l),"onUpdate:modelValue":g[0]||(g[0]=o=>A(l)?l.value=o:null),"api-url":"companies","api-params":{condition:"A"},"token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"branch",required:r.required,type:"department","selection-length":2,placeholder:"enter-branch"},{chip:q(({value:o})=>[ye(Z(o.name),1)]),option:q(({value:o})=>[n(e(Ve),{title:o.name,"text-truncate":!1},null,8,["title"])]),_:1},8,["modelValue","required"]))}},ll=Q("sd-notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:16,content:null,curator:null,document_type:C.NOTICE,document_sub_type:ke.BUSINESS_TRIP,journal:ve.INNER,notices:[],start_date:null,end_date:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:h.withMessage("Поле не должен быть пустым",k)},start_date:{required:h.withMessage("Поле не должен быть пустым",k)},route:{required:h.withMessage("Поле не должен быть пустым",k)},content:{required:h.withMessage("Поле не должен быть пустым",k)},__companies:{required:h.withMessage("Поле не должен быть пустым",k)},__curator:{required:h.withMessage("Поле не должен быть пустым",k)},__employees:{required:h.withMessage("Поле не должен быть пустым",k)},__approvers:{required:h.withMessage("Поле не должен быть пустым",k)},__signers:{required:h.withMessage("Поле не должен быть пустым",k)},__tags:{required:h.withMessage("Поле не должен быть пустым",k)}}}),actions:{async actionCreateDocument(p){this.buttonLoading=!0;const{response:t,error:r}=await re(qe,p);return t?(this.buttonLoading=!1,Promise.resolve(t)):(this.buttonLoading=!1,Promise.reject(r))},async actionUpdateDocument({id:p,body:t}){try{this.buttonLoading=!0;const{data:r}=await se({id:p,body:t});return Promise.resolve(r)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(p){try{this.detailLoading=!0;const{data:t}=await de(p);console.log(t),me(this.model,t),this.model.__signers=t.signers,this.model.__approvers=t.approvers,this.model.__curator=Y().usersList.find(r=>r.id===t.curator.id),this.model.__employees=t.notices.map(r=>Y().usersList.find(l=>l.id===r.user.id)),this.model.__companies=t.notices[0].destinations.map(r=>G().filialList.find(l=>l.id===r.id)),this.model.start_date=t.notices[0].start_date,this.model.end_date=t.notices[0].end_date,this.model.__tags=t.tags,this.model.route=t.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),nl={class:"flex w-full gap-x-4"},Ml={__name:"BusinessTripNoticeForm",props:{formType:{type:String,default:y}},setup(p){const t=p,{t:r}=B(),l=ee(),b=X(),g=ie(),o=ll(),m=ae();G();const u=E(!1),a=oe(o.rules,o.model),c=async()=>{var d,i,w;await a.value.$validate()&&(o.model.approvers=[],o.model.signers=[],o.model.notices=[],o.model.approvers=P(o.model.__approvers),o.model.signers=P(o.model.__signers),o.model.curator=(d=o==null?void 0:o.model)==null?void 0:d.__curator.id,o.model.notices=o.model.__employees.map(f=>({start_date:o.model.start_date,end_date:o.model.end_date,user:f.id,route:o.model.route,companies:o.model.__companies.map(v=>v.id)})),o.model.sender=(w=(i=g==null?void 0:g.currentUser)==null?void 0:i.top_level_department)==null?void 0:w.id,o.model.tags=o.model.__tags.map(f=>({id:f.id})),o.model.files=o.model.__files.map(f=>({id:f.id})),u.value=!0)},D=()=>{},T=V=>{o.model.__files=[],V.forEach(d=>{o.model.__files.push(d)})},M=async()=>{const V=await o.actionCreateDocument(o.model);await m.actionDocumentCountList(),V?(u.value=!1,U(null,r("document-sent"),$.SUCCESS),await b.replace({name:ce,query:{document_type:C.NOTICE}})):U(null,r("error-occurred"),$.ERROR)},R=async()=>{await o.actionUpdateDocument({id:l.params.id,body:o.model}),await m.actionDocumentCountList(),U(null,r("changed"),$.SUCCESS),await b.replace({name:pe,params:{id:l.params.id,document_type:l.params.document_type,document_sub_type:l.params.document_sun_type}})},N=()=>{t.formType===y?M():R()};return H(async()=>{l.params.id&&await o.actionGetDocumentDetailForUpdate(l.params.id)}),(V,d)=>{const i=ne,w=K,f=Pe,v=I,S=W;return e(o).detailLoading?(x(),z(i,{key:0})):(x(),O(le,{key:1},[n(e(te),{title:t.formType===e(y)?"create-business-trip-notice":"update-business-trip-notice"},{content:q(()=>[n(be,{"onEmit:preview":c,"onEmit:clearForm":D},{default:q(()=>[n(S,null,{default:q(()=>[n(w,{"col-class":"w-1/2"},{default:q(()=>[n($e,{modelValue:e(a).__curator.$model,"onUpdate:modelValue":d[0]||(d[0]=s=>e(a).__curator.$model=s),error:e(a).__curator,label:"whom",required:"",placeholder:"select-leader"},null,8,["modelValue","error"])]),_:1}),n(w,{"col-class":"w-1/2"},{default:q(()=>[n(L,{modelValue:e(a).__employees.$model,"onUpdate:modelValue":d[1]||(d[1]=s=>e(a).__employees.$model=s),error:e(a).__employees,label:"employees",placeholder:"select-employees",required:""},null,8,["modelValue","error"])]),_:1}),n(w,{"col-class":"w-1/2"},{default:q(()=>[n(el,{modelValue:e(a).__companies.$model,"onUpdate:modelValue":d[2]||(d[2]=s=>e(a).__companies.$model=s),error:e(a).__companies},null,8,["modelValue","error"])]),_:1}),n(w,{"col-class":"w-1/2"},{default:q(()=>[F("div",nl,[n(f,{modelValue:e(a).start_date.$model,"onUpdate:modelValue":[d[3]||(d[3]=s=>e(a).start_date.$model=s),d[4]||(d[4]=s=>e(a).start_date.$model=e(ge)(s))],error:e(a).start_date,required:"",label:"start-date",placeholder:"choose-start-time",class:"w-1/2"},null,8,["modelValue","error"]),n(f,{modelValue:e(a).end_date.$model,"onUpdate:modelValue":[d[5]||(d[5]=s=>e(a).end_date.$model=s),d[6]||(d[6]=s=>e(a).end_date.$model=e(ge)(s))],error:e(a).end_date,required:"",label:"end-date",placeholder:"choose-end-time",class:"w-1/2"},null,8,["modelValue","error"])])]),_:1}),n(w,{"col-class":"w-1/2"},{default:q(()=>[n(xe,{modelValue:e(a).__tags.$model,"onUpdate:modelValue":d[7]||(d[7]=s=>e(a).__tags.$model=s),error:e(a).__tags,"api-url":"tags","token-class":["chip-hover shadow-button bg-white cursor-pointer"],display:"chip",selectable:"",label:"targets",type:"department",placeholder:"select-targets"},{chip:q(({value:s})=>[ye(Z(s.name),1)]),option:q(({value:s})=>[n(e(Ve),{title:s.name},null,8,["title"])]),_:1},8,["modelValue","error"])]),_:1}),n(w,{"col-class":"w-1/2"},{default:q(()=>[n(v,{modelValue:e(a).route.$model,"onUpdate:modelValue":d[8]||(d[8]=s=>e(a).route.$model=s),error:e(a).route,options:e(Ce),required:"","option-label":"label","option-value":"value",label:"route",placeholder:"select-route",size:"large"},null,8,["modelValue","error","options"])]),_:1}),n(w,{"col-class":"w-1/2"},{default:q(()=>[n(L,{modelValue:e(a).__approvers.$model,"onUpdate:modelValue":d[9]||(d[9]=s=>e(a).__approvers.$model=s),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),n(w,{"col-class":"w-1/2"},{default:q(()=>[n(L,{modelValue:e(a).__signers.$model,"onUpdate:modelValue":d[10]||(d[10]=s=>e(a).__signers.$model=s),error:e(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),n(w,{"col-class":"w-full"},{default:q(()=>[n(ue,{modelValue:e(a).content.$model,"onUpdate:modelValue":d[11]||(d[11]=s=>e(a).content.$model=s),error:e(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:e(o).model.__files,"onEmit:fileUpload":T},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),n(fe,{modelValue:u.value,"onUpdate:modelValue":d[12]||(d[12]=s=>u.value=s),"send-button-loading":e(o).buttonLoading,"onEmit:send":N},{content:q(()=>[n(e(Me),{"compose-model":e(o).model,preview:!0},null,8,["compose-model"])]),_:1},8,["modelValue","send-button-loading"])],64))}}};export{Dl as _,Ml as a,Tl as b};
