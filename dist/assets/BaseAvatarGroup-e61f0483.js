import{_ as f}from"./BaseAvatar-23f7b58c.js";import{B as _,s as y,o as r,c as m,r as h,m as x,d as c,f as l,z as u,F as $,e as z,h as t,a as B,t as S,g as b}from"./index-d6da6114.js";import{i as o}from"./index-1af592b5.js";var A=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,C={root:"p-avatar-group p-component"},k=_.extend({name:"avatargroup",css:A,classes:C}),G={name:"BaseAvatarGroup",extends:y,style:k,provide:function(){return{$parentInstance:this}}},d={name:"AvatarGroup",extends:G};function N(a,e,p,n,g,v){return r(),m("div",x({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[h(a.$slots,"default")],16)}d.render=N;const F={class:"text-sm leading-none font-semibold text-primary-900"},w={__name:"BaseAvatarGroup",props:{label:{type:String},items:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:String,default:"normal",validator(a){return["normal","large","xlarge"].includes(a)}},shape:{type:String,default:"circle",validator(a){return["square","circle"].includes(a)}},avatarClasses:{type:String}},setup(a){const e=a,p=c(()=>e.items.slice(0,e.max)),n=c(()=>e.items.slice(e.max));return(g,v)=>{const i=f;return r(),l(t(d),null,{default:u(()=>[(r(!0),m($,null,z(p.value,s=>(r(),l(i,{label:t(o)(s.user)?s.user.full_name:s.full_name,color:t(o)(s.user)?s.user.color:s.color,meta:t(o)(s.user)?s.user:s,image:s.image,size:e.size,shape:e.shape,"avatar-classes":e.avatarClasses,type:"group",class:"-mr-2"},null,8,["label","color","meta","image","size","shape","avatar-classes"]))),256)),n.value.length?(r(),l(i,{key:0,size:e.size,shape:e.shape,"avatar-classes":e.avatarClasses,type:"group"},{default:u(()=>[B("span",F," +"+S(n.value.length),1)]),_:1},8,["size","shape","avatar-classes"])):b("",!0)]),_:1})}}};export{w as _};
