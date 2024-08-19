import{B as E,bM as k,aI as v,bN as P,R,bO as j,d as D,e as $,r as A,f as B,o as l,g as C,w as g,k as f,m as a,p as S,T as V,h as L,j as d,z as T,i as u,n as y,D as K,l as Z,x as z,K as M,Z as N,E as U,q as b,$ as F,_ as q}from"./index-c8ebad57.js";var H=`
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
`,X={mask:function(n){var t=n.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"?"flex-start":t==="right"?"flex-end":"center",alignItems:t==="top"?"flex-start":t==="bottom"?"flex-end":"center"}}},Y={mask:function(n){var t=n.instance,i=n.props,r=["left","right","top","bottom"],s=r.find(function(c){return c===i.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":i.modal,"p-sidebar-mask-scrollblocker":i.blockScroll,"p-sidebar-visible":t.containerVisible,"p-sidebar-full":t.fullScreen},s?"p-sidebar-".concat(s):""]},root:function(n){var t=n.instance;return["p-sidebar p-component",{"p-input-filled":t.$primevue.config.inputStyle==="filled","p-ripple-disabled":t.$primevue.config.ripple===!1,"p-sidebar-full":t.fullScreen}]},header:"p-sidebar-header",headerContent:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},G=E.extend({name:"sidebar",css:H,classes:Y,inlineStyles:X}),J={name:"BaseSidebar",extends:$,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:G,provide:function(){return{$parentInstance:this}}},I={name:"Sidebar",extends:J,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&k.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.autoZIndex&&k.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&v.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&k.clear(this.mask),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(n){this.dismissable&&this.modal&&this.mask===n.target&&this.hide()},focus:function(){var n=function(r){return r&&r.querySelector("[autofocus]")},t=this.$slots.header&&n(this.headerContainer);t||(t=this.$slots.default&&n(this.container),t||(t=this.closeButton)),t&&v.focus(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&v.blockBodyScroll()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&v.unblockBodyScroll()},onKeydown:function(n){n.code==="Escape"&&this.hide()},containerRef:function(n){this.container=n},maskRef:function(n){this.mask=n},contentRef:function(n){this.content=n},headerContainerRef:function(n){this.headerContainer=n},closeButtonRef:function(n){this.closeButton=n},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){n.isOutsideClicked(t)&&n.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(n){return this.container&&!this.container.contains(n.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:P,ripple:R},components:{Portal:j,TimesIcon:D}};function m(e){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m(e)}function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?O(Object(t),!0).forEach(function(i){Q(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function Q(e,n,t){return n=W(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function W(e){var n=_(e,"string");return m(n)==="symbol"?n:String(n)}function _(e,n){if(m(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,n||"default");if(m(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var ee=["aria-modal"],ne=["aria-label"];function te(e,n,t,i,r,s){var c=A("Portal"),p=B("ripple"),o=B("focustrap");return l(),C(c,null,{default:g(function(){return[r.containerVisible?(l(),f("div",a({key:0,ref:s.maskRef,onMousedown:n[2]||(n[2]=function(){return s.onMaskClick&&s.onMaskClick.apply(s,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[S(V,a({name:"p-sidebar",onEnter:s.onEnter,onAfterEnter:s.onAfterEnter,onBeforeLeave:s.onBeforeLeave,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave,appear:""},e.ptm("transition")),{default:g(function(){return[e.visible?L((l(),f("div",a({key:0,ref:s.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal,onKeydown:n[1]||(n[1]=function(){return s.onKeydown&&s.onKeydown.apply(s,arguments)})},x(x({},e.$attrs),e.ptm("root"))),[e.$slots.container?d(e.$slots,"container",{key:0,onClose:s.hide}):(l(),f(T,{key:1},[u("div",a({ref:s.headerContainerRef,class:e.cx("header")},e.ptm("header")),[e.$slots.header?(l(),f("div",a({key:0,class:e.cx("headerContent")},e.ptm("headerContent")),[d(e.$slots,"header")],16)):y("",!0),e.showCloseIcon?L((l(),f("button",a({key:1,ref:s.closeButtonRef,type:"button",class:e.cx("closeButton"),"aria-label":s.closeAriaLabel,onClick:n[0]||(n[0]=function(){return s.hide&&s.hide.apply(s,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[d(e.$slots,"closeicon",{class:K(e.cx("closeIcon"))},function(){return[(l(),C(Z(e.closeIcon?"span":"TimesIcon"),a({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,ne)),[[p]]):y("",!0)],16),u("div",a({ref:s.contentRef,class:e.cx("content")},e.ptm("content")),[d(e.$slots,"default")],16)],64))],16,ee)),[[o]]):y("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):y("",!0)]}),_:3})}I.render=te;const ie={class:"flex w-full"},se={class:"text-xl font-semibold text-primary-900 flex-1"},re={class:"flex flex-col h-full"},oe={class:"flex-1 p-6 border-t overflow-y-auto"},ae={class:"flex justify-end gap-3 bg-greyscale-50 px-6 py-5 border-t"},de={__name:"BaseSidebar",props:{modelValue:{type:Boolean},title:{type:String,default:"create"},successText:{type:String,default:"save"},cancelText:{type:String,default:"cancel"},closeButtonClass:{type:String},headerClass:{type:String},position:{type:String,default:"right",validator(e){return["left","right","top","bottom","full"].includes(e)}},rootClass:{type:String}},emits:["update:modelValue","emit:cancel-button","emit:success-button"],setup(e,{expose:n,emit:t}){const i=e,{t:r}=z(),s=M(!1),c=N(i,"modelValue");return n({successButtonLoading:s}),(p,o)=>{const w=q;return l(),C(b(I),{visible:b(c),"onUpdate:visible":o[2]||(o[2]=h=>F(c)?c.value=h:null),position:i.position,onHide:o[3]||(o[3]=h=>t("emit:cancel-button",!1)),pt:{root:{class:["w-[672px]",i.rootClass]},header:{class:"bg-greyscale-50 p-6"},headerContent:{class:["mr-auto",i.headerClass]},closeButton:{class:["w-9 h-9 bg-white rounded-full shadow-button",i.closeButtonClass]},content:{class:"p-0"}}},{header:g(()=>[u("div",ie,[d(p.$slots,"title",{},()=>[u("span",se,U(b(r)(i.title)),1)]),d(p.$slots,"headerCloseIcons")])]),default:g(()=>[u("div",re,[u("div",oe,[d(p.$slots,"content")]),d(p.$slots,"footer",{},()=>[u("div",ae,[S(w,{label:b(r)(i.cancelText),size:"large","border-color":"border-transparent",outlined:"",rounded:"",shadow:"",onClick:o[0]||(o[0]=h=>t("emit:cancel-button",!1))},null,8,["label"]),S(w,{label:b(r)(i.successText),loading:s.value,size:"large",rounded:"",onClick:o[1]||(o[1]=h=>p.$emit("emit:success-button"))},null,8,["label","loading"])])])])]),_:3},8,["visible","position","pt"])}}};export{de as _};
