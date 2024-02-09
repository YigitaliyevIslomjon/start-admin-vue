import{_ as I}from"./BaseButton-e5f326a1.js";import{B as E,aa as k,ab as h,R as P,ad as R,d as j,e as D,r as A,f as w,o as d,g as C,w as y,k as u,m as l,p as S,T as $,h as B,j as p,F as T,i as c,n as v,M as V,l as z,A as K,D as M,x as Z,z as F,q as f,I as N}from"./index-cca0926c.js";import{F as U}from"./focustrap.esm-4210b87e.js";var q=`
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
`,X={mask:function(n){var t=n.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"?"flex-start":t==="right"?"flex-end":"center",alignItems:t==="top"?"flex-start":t==="bottom"?"flex-end":"center"}}},Y={mask:function(n){var t=n.instance,s=n.props,r=["left","right","top","bottom"],i=r.find(function(o){return o===s.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":s.modal,"p-sidebar-mask-scrollblocker":s.blockScroll,"p-sidebar-visible":t.containerVisible,"p-sidebar-full":t.fullScreen},i?"p-sidebar-".concat(i):""]},root:function(n){var t=n.instance;return["p-sidebar p-component",{"p-input-filled":t.$primevue.config.inputStyle==="filled","p-ripple-disabled":t.$primevue.config.ripple===!1,"p-sidebar-full":t.fullScreen}]},header:"p-sidebar-header",headerContent:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},H=E.extend({name:"sidebar",css:q,classes:Y,inlineStyles:X}),G={name:"BaseSidebar",extends:D,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:H,provide:function(){return{$parentInstance:this}}},O={name:"Sidebar",extends:G,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&k.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.autoZIndex&&k.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&h.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&k.clear(this.mask),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(n){this.dismissable&&this.modal&&this.mask===n.target&&this.hide()},focus:function(){var n=function(r){return r&&r.querySelector("[autofocus]")},t=this.$slots.header&&n(this.headerContainer);t||(t=this.$slots.default&&n(this.container),t||(t=this.closeButton)),t&&h.focus(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&h.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&h.unblockBodyScroll()},onKeydown:function(n){n.code==="Escape"&&this.hide()},containerRef:function(n){this.container=n},maskRef:function(n){this.mask=n},contentRef:function(n){this.content=n},headerContainerRef:function(n){this.headerContainer=n},closeButtonRef:function(n){this.closeButton=n},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){n.isOutsideClicked(t)&&n.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(n){return this.container&&!this.container.contains(n.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:U,ripple:P},components:{Portal:R,TimesIcon:j}};function b(e){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},b(e)}function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,s)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?L(Object(t),!0).forEach(function(s){J(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function J(e,n,t){return n=Q(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Q(e){var n=W(e,"string");return b(n)==="symbol"?n:String(n)}function W(e,n){if(b(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var s=t.call(e,n||"default");if(b(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var _=["aria-modal"],ee=["aria-label"];function ne(e,n,t,s,r,i){var o=A("Portal"),a=w("ripple"),m=w("focustrap");return d(),C(o,null,{default:y(function(){return[r.containerVisible?(d(),u("div",l({key:0,ref:i.maskRef,onMousedown:n[2]||(n[2]=function(){return i.onMaskClick&&i.onMaskClick.apply(i,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[S($,l({name:"p-sidebar",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},e.ptm("transition")),{default:y(function(){return[e.visible?B((d(),u("div",l({key:0,ref:i.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal,onKeydown:n[1]||(n[1]=function(){return i.onKeydown&&i.onKeydown.apply(i,arguments)})},x(x({},e.$attrs),e.ptm("root"))),[e.$slots.container?p(e.$slots,"container",{key:0,onClose:i.hide}):(d(),u(T,{key:1},[c("div",l({ref:i.headerContainerRef,class:e.cx("header")},e.ptm("header")),[e.$slots.header?(d(),u("div",l({key:0,class:e.cx("headerContent")},e.ptm("headerContent")),[p(e.$slots,"header")],16)):v("",!0),e.showCloseIcon?B((d(),u("button",l({key:1,ref:i.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":i.closeAriaLabel,onClick:n[0]||(n[0]=function(){return i.hide&&i.hide.apply(i,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[p(e.$slots,"closeicon",{class:V(e.cx("closeIcon"))},function(){return[(d(),C(z(e.closeIcon?"span":"TimesIcon"),l({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,ee)),[[a]]):v("",!0)],16),c("div",l({ref:i.contentRef,class:e.cx("content")},e.ptm("content")),[p(e.$slots,"default")],16)],64))],16,_)),[[m]]):v("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):v("",!0)]}),_:3})}O.render=ne;const te={class:"flex w-full"},ie={class:"text-xl font-semibold text-primary-900 flex-1"},se={class:"flex flex-col h-full"},re={class:"flex-1 p-6 border-t overflow-y-auto"},oe={class:"flex justify-end gap-3 bg-greyscale-50 px-6 py-5 border-t"},ce={__name:"BaseSidebar",props:{modelValue:{type:Boolean},title:{type:String,default:"create"},successText:{type:String,default:"save"},cancelText:{type:String,default:"cancel"},closeButtonClass:{type:String},headerClass:{type:String},position:{type:String,default:"right",validator(e){return["left","right","top","bottom","full"].includes(e)}},rootClass:{type:String}},setup(e,{expose:n}){const t=e,s=K(t,"modelValue"),{t:r}=M(),i=Z(!1);return n({successButtonLoading:i}),(o,a)=>{const m=I;return d(),C(f(O),{visible:f(s),"onUpdate:visible":a[2]||(a[2]=g=>N(s)?s.value=g:null),position:t.position,pt:{root:{class:["w-[750px]",t.rootClass]},header:{class:"bg-greyscale-50 p-6"},headerContent:{class:["mr-auto",t.headerClass]},closeButton:{class:["w-9 h-9 bg-white rounded-full shadow-button",t.closeButtonClass]},content:{class:"p-0"}}},{header:y(()=>[c("div",te,[c("span",ie,F(f(r)(t.title)),1),p(o.$slots,"headerCloseIcons")])]),default:y(()=>[c("div",se,[c("div",re,[p(o.$slots,"content")]),p(o.$slots,"footer",{},()=>[c("div",oe,[S(m,{label:f(r)(t.cancelText),size:"large","border-color":"border-transparent",outlined:"",rounded:"",shadow:"",onClick:a[0]||(a[0]=g=>o.$emit("emit:cancel-button",!1))},null,8,["label"]),S(m,{label:f(r)(t.successText),loading:i.value,size:"large",rounded:"",onClick:a[1]||(a[1]=g=>o.$emit("emit:success-button"))},null,8,["label","loading"])])])])]),_:3},8,["visible","position","pt"])}}};export{ce as _};
