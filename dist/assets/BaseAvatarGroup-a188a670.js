import{_ as f}from"./BaseAvatar-8df60eba.js";import{B as y,s as _,o as r,c as m,r as h,m as x,d as c,f as n,z as u,F as B,e as $,h as t,a as z,t as S,g as b}from"./index-06d4c6df.js";import{i as o}from"./index-4c2bcd96.js";var A=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,C={root:"p-avatar-group p-component"},k=y.extend({name:"avatargroup",css:A,classes:C}),G={name:"BaseAvatarGroup",extends:_,style:k,provide:function(){return{$parentInstance:this}}},d={name:"AvatarGroup",extends:G};function D(a,e,i,l,g,v){return r(),m("div",x({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[h(a.$slots,"default")],16)}d.render=D;const N={class:"text-sm leading-none font-semibold text-primary-900"},q={__name:"BaseAvatarGroup",props:{label:{type:String},items:{type:Array,default:()=>[]},max:{type:Number,default:3},detailDialog:{type:Boolean},size:{type:String,default:"normal",validator(a){return["normal","large","xlarge"].includes(a)}},shape:{type:String,default:"circle",validator(a){return["square","circle"].includes(a)}},avatarClasses:{type:String}},setup(a){const e=a,i=c(()=>e.items.slice(0,e.max)),l=c(()=>e.items.slice(e.max));return(g,v)=>{const p=f;return r(),n(t(d),null,{default:u(()=>[(r(!0),m(B,null,$(i.value,s=>(r(),n(p,{label:t(o)(s.user)?s.user.full_name:s.full_name,color:t(o)(s.user)?s.user.color:s.color,meta:t(o)(s.user)?s.user:s,image:s.image,size:e.size,shape:e.shape,"detail-dialog":e.detailDialog,"avatar-classes":e.avatarClasses,type:"group",class:"-mr-2"},null,8,["label","color","meta","image","size","shape","detail-dialog","avatar-classes"]))),256)),l.value.length?(r(),n(p,{key:0,size:e.size,shape:e.shape,"avatar-classes":e.avatarClasses,type:"group"},{default:u(()=>[z("span",N," +"+S(l.value.length),1)]),_:1},8,["size","shape","avatar-classes"])):b("",!0)]),_:1})}}};export{q as _};
