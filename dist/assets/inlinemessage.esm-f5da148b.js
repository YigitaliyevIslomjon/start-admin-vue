import{B as l,s as c,a as p,b as u,c as m,o as a,k as d,j as o,g as f,m as i,l as v,i as g,a8 as y,e as $}from"./index-e77890de.js";var h=`
@layer primevue {
    .p-inline-message {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;
    }
    
    .p-inline-message-icon {
        flex-shrink: 0;
    }

    .p-inline-message-icon-only .p-inline-message-text {
        visibility: hidden;
        width: 0;
    }

    .p-fluid .p-inline-message {
        display: flex;
    }
}
`,x={root:function(n){var s=n.props,t=n.instance;return["p-inline-message p-component p-inline-message-"+s.severity,{"p-inline-message-icon-only":!t.$slots.default}]},icon:function(n){var s=n.props;return["p-inline-message-icon",s.icon]},text:"p-inline-message-text"},B=l.extend({name:"inlinemessage",css:h,classes:x}),k={name:"BaseInlineMessage",extends:$,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:B,provide:function(){return{$parentInstance:this}}},S={name:"InlineMessage",extends:k,timeout:null,data:function(){return{visible:!0}},mounted:function(){var n=this;this.sticky||setTimeout(function(){n.visible=!1},this.life)},computed:{iconComponent:function(){return{info:c,success:p,warn:u,error:m}[this.severity]}}};function b(e,n,s,t,C,r){return a(),d("div",i({"aria-live":"polite",class:e.cx("root")},e.ptm("root")),[o(e.$slots,"icon",{},function(){return[(a(),f(v(e.icon?"span":r.iconComponent),i({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),g("span",i({class:e.cx("text")},e.ptm("text")),[o(e.$slots,"default",{},function(){return[y(" ")]})],16)],16)}S.render=b;export{S as s};
