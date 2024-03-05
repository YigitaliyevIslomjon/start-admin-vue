import{_ as E}from"./BaseButton-8b770903.js";import{B as P,aa as k,ab as v,R,ad as j,d as A,e as D,r as $,f as B,o as l,g as C,w as g,k as f,m as a,p as S,T as V,h as L,j as d,F as T,i as p,n as y,N as K,l as Z,C as z,E as F,x as M,A as N,q as b,K as U}from"./index-d67bf795.js";import{F as q}from"./focustrap.esm-682db63a.js";var H=`
@layer primevue {
    .p-sidebar-mask {
        display: none;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }

    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }

    .p-sidebar-visible {
        display: flex;
    }

    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
    }

    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }

    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-shrink: 0;
    }

    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
    }

    /* Animation */
    /* Center */
    .p-sidebar-left .p-sidebar-enter-from,
    .p-sidebar-left .p-sidebar-leave-to {
        transform: translateX(-100%);
    }
    .p-sidebar-right .p-sidebar-enter-from,
    .p-sidebar-right .p-sidebar-leave-to {
        transform: translateX(100%);
    }
    .p-sidebar-top .p-sidebar-enter-from,
    .p-sidebar-top .p-sidebar-leave-to {
        transform: translateY(-100%);
    }
    .p-sidebar-bottom .p-sidebar-enter-from,
    .p-sidebar-bottom .p-sidebar-leave-to {
        transform: translateY(100%);
    }
    .p-sidebar-full .p-sidebar-enter-from,
    .p-sidebar-full .p-sidebar-leave-to {
        opacity: 0;
    }
    .p-sidebar-full .p-sidebar-enter-active,
    .p-sidebar-full .p-sidebar-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }

    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }

    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }

    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }

    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }

    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }

    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }

    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }

    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }

    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }

    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }
}
`,X={mask:function(t){var n=t.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"?"flex-start":n==="right"?"flex-end":"center",alignItems:n==="top"?"flex-start":n==="bottom"?"flex-end":"center"}}},Y={mask:function(t){var n=t.instance,s=t.props,r=["left","right","top","bottom"],i=r.find(function(u){return u===s.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":s.modal,"p-sidebar-mask-scrollblocker":s.blockScroll,"p-sidebar-visible":n.containerVisible,"p-sidebar-full":n.fullScreen},i?"p-sidebar-".concat(i):""]},root:function(t){var n=t.instance;return["p-sidebar p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1,"p-sidebar-full":n.fullScreen}]},header:"p-sidebar-header",headerContent:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},G=P.extend({name:"sidebar",css:H,classes:Y,inlineStyles:X}),J={name:"BaseSidebar",extends:D,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:G,provide:function(){return{$parentInstance:this}}},I={name:"Sidebar",extends:J,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&k.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.autoZIndex&&k.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&v.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&k.clear(this.mask),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(r){return r&&r.querySelector("[autofocus]")},n=this.$slots.header&&t(this.headerContainer);n||(n=this.$slots.default&&t(this.container),n||(n=this.closeButton)),n&&v.focus(n)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&v.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&v.unblockBodyScroll()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},closeButtonRef:function(t){this.closeButton=t},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:q,ripple:R},components:{Portal:j,TimesIcon:A}};function m(e){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(e)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(s){Q(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Q(e,t,n){return t=W(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e){var t=_(e,"string");return m(t)==="symbol"?t:String(t)}function _(e,t){if(m(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(m(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ee=["aria-modal"],te=["aria-label"];function ne(e,t,n,s,r,i){var u=$("Portal"),c=B("ripple"),o=B("focustrap");return l(),C(u,null,{default:g(function(){return[r.containerVisible?(l(),f("div",a({key:0,ref:i.maskRef,onMousedown:t[2]||(t[2]=function(){return i.onMaskClick&&i.onMaskClick.apply(i,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[S(V,a({name:"p-sidebar",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:g(function(){return[e.visible?L((l(),f("div",a({key:0,ref:i.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal,onKeydown:t[1]||(t[1]=function(){return i.onKeydown&&i.onKeydown.apply(i,arguments)})},O(O({},e.$attrs),e.ptm("root"))),[e.$slots.container?d(e.$slots,"container",{key:0,onClose:i.hide}):(l(),f(T,{key:1},[p("div",a({ref:i.headerContainerRef,class:e.cx("header")},e.ptm("header")),[e.$slots.header?(l(),f("div",a({key:0,class:e.cx("headerContent")},e.ptm("headerContent")),[d(e.$slots,"header")],16)):y("",!0),e.showCloseIcon?L((l(),f("button",a({key:1,ref:i.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":i.closeAriaLabel,onClick:t[0]||(t[0]=function(){return i.hide&&i.hide.apply(i,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[d(e.$slots,"closeicon",{class:K(e.cx("closeIcon"))},function(){return[(l(),C(Z(e.closeIcon?"span":"TimesIcon"),a({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,te)),[[c]]):y("",!0)],16),p("div",a({ref:i.contentRef,class:e.cx("content")},e.ptm("content")),[d(e.$slots,"default")],16)],64))],16,ee)),[[o]]):y("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):y("",!0)]}),_:3})}I.render=ne;const ie={class:"flex w-full"},se={class:"text-xl font-semibold text-primary-900 flex-1"},re={class:"flex flex-col h-full"},oe={class:"flex-1 p-6 border-t overflow-y-auto"},ae={class:"flex justify-end gap-3 bg-greyscale-50 px-6 py-5 border-t"},pe={__name:"BaseSidebar",props:{modelValue:{type:Boolean},title:{type:String,default:"create"},successText:{type:String,default:"save"},cancelText:{type:String,default:"cancel"},closeButtonClass:{type:String},headerClass:{type:String},position:{type:String,default:"right",validator(e){return["left","right","top","bottom","full"].includes(e)}},rootClass:{type:String}},emits:["update:modelValue","emit:cancel-button","emit:success-button"],setup(e,{expose:t,emit:n}){const s=e,r=z(s,"modelValue"),{t:i}=F(),u=M(!1);return t({successButtonLoading:u}),(c,o)=>{const w=E;return l(),C(b(I),{visible:b(r),"onUpdate:visible":o[2]||(o[2]=h=>U(r)?r.value=h:null),position:s.position,onHide:o[3]||(o[3]=h=>n("emit:cancel-button",!1)),pt:{root:{class:["w-[672px]",s.rootClass]},header:{class:"bg-greyscale-50 p-6"},headerContent:{class:["mr-auto",s.headerClass]},closeButton:{class:["w-9 h-9 bg-white rounded-full shadow-button",s.closeButtonClass]},content:{class:"p-0"}}},{header:g(()=>[p("div",ie,[d(c.$slots,"title",{},()=>[p("span",se,N(b(i)(s.title)),1)]),d(c.$slots,"headerCloseIcons")])]),default:g(()=>[p("div",re,[p("div",oe,[d(c.$slots,"content")]),d(c.$slots,"footer",{},()=>[p("div",ae,[S(w,{label:b(i)(s.cancelText),size:"large","border-color":"border-transparent",outlined:"",rounded:"",shadow:"",onClick:o[0]||(o[0]=h=>n("emit:cancel-button",!1))},null,8,["label"]),S(w,{label:b(i)(s.successText),loading:u.value,size:"large",rounded:"",onClick:o[1]||(o[1]=h=>c.$emit("emit:success-button"))},null,8,["label","loading"])])])])]),_:3},8,["visible","position","pt"])}}};export{pe as _};
