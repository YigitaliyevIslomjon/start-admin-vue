import{_ as h}from"./BaseAvatar-becfd99d.js";import{B as y,s as x,o as t,c as v,r as $,m as z,d as c,ai as B,f as o,z as m,F as S,e as b,Z as d,h as r,a as A,t as C,g as k}from"./index-aad5c2b9.js";import{i as n}from"./index-5b049fc3.js";var G=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,w={root:"p-avatar-group p-component"},D=y.extend({name:"avatargroup",css:G,classes:w}),N={name:"BaseAvatarGroup",extends:x,style:D,provide:function(){return{$parentInstance:this}}},f={name:"AvatarGroup",extends:N};function F(a,e,i,l,g,_){return t(),v("div",z({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[$(a.$slots,"default")],16)}f.render=F;const H={class:"text-sm leading-none font-semibold text-primary-900"},E={__name:"BaseAvatarGroup",props:{label:{type:String},items:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:String,default:"normal",validator(a){return["normal","large","xlarge"].includes(a)}},shape:{type:String,default:"circle",validator(a){return["square","circle"].includes(a)}},avatarClasses:{type:String}},setup(a){const e=a,i=c(()=>e.items.slice(0,e.max)),l=c(()=>e.items.slice(e.max));return(g,_)=>{const p=h,u=B("tooltip");return t(),o(r(f),null,{default:m(()=>[(t(!0),v(S,null,b(i.value,s=>d((t(),o(p,{label:r(n)(s.user)?s.user.full_name:s.full_name,color:r(n)(s.user)?s.user.color:s.color,image:s.image,size:e.size,shape:e.shape,"avatar-classes":e.avatarClasses,type:"group"},null,8,["label","color","image","size","shape","avatar-classes"])),[[u,{value:`<h4 class='text-xs text-white -my-1'>${r(n)(s.user)?s.user.full_name:s.full_name}</h4>`,escape:!0,autoHide:!1},void 0,{top:!0}]])),256)),l.value.length?d((t(),o(p,{key:0,size:e.size,shape:e.shape,"avatar-classes":e.avatarClasses,type:"group"},{default:m(()=>[A("span",H," +"+C(l.value.length),1)]),_:1},8,["size","shape","avatar-classes"])),[[u,{value:"123",escape:!0,autoHide:!1},void 0,{top:!0}]]):k("",!0)]),_:1})}}};export{E as _};
