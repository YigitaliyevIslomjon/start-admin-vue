import{_ as h}from"./BaseAvatar-44ec1595.js";import{B as y,e as x,o as t,k as v,j as $,m as B,x as c,f as S,g as o,w as m,F as b,y as z,h as d,q as r,i as A,A as k,n as C}from"./index-1c7d28b5.js";import{i as n}from"./index-6d8f2bf1.js";var w=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,G={root:"p-avatar-group p-component"},D=y.extend({name:"avatargroup",css:w,classes:G}),N={name:"BaseAvatarGroup",extends:x,style:D,provide:function(){return{$parentInstance:this}}},f={name:"AvatarGroup",extends:N};function j(a,e,i,l,g,_){return t(),v("div",B({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[$(a.$slots,"default")],16)}f.render=j;const q={class:"text-sm leading-none font-semibold text-primary-900"},E={__name:"BaseAvatarGroup",props:{label:{type:String},items:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:String,default:"normal",validator(a){return["normal","large","xlarge"].includes(a)}},shape:{type:String,default:"circle",validator(a){return["square","circle"].includes(a)}},avatarClasses:{type:String}},setup(a){const e=a,i=c(()=>e.items.slice(0,e.max)),l=c(()=>e.items.slice(e.max));return(g,_)=>{const p=h,u=S("tooltip");return t(),o(r(f),null,{default:m(()=>[(t(!0),v(b,null,z(i.value,s=>d((t(),o(p,{label:r(n)(s.user)?s.user.full_name:s.full_name,color:r(n)(s.user)?s.user.color:s.color,image:s.image,size:e.size,shape:e.shape,"avatar-classes":e.avatarClasses,type:"group"},null,8,["label","color","image","size","shape","avatar-classes"])),[[u,{value:`<h4 class='text-xs text-white -my-1'>${r(n)(s.user)?s.user.full_name:s.full_name}</h4>`,escape:!0,autoHide:!1},void 0,{top:!0}]])),256)),l.value.length?d((t(),o(p,{key:0,size:e.size,shape:e.shape,"avatar-classes":e.avatarClasses,type:"group"},{default:m(()=>[A("span",q," +"+k(l.value.length),1)]),_:1},8,["size","shape","avatar-classes"])),[[u,{value:"123",escape:!0,autoHide:!1},void 0,{top:!0}]]):C("",!0)]),_:1})}}};export{E as _};
