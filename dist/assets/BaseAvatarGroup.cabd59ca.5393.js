import{_ as h}from"./BaseAvatar.d4b2af01.5393.js";import{B as x,s as B,o as t,c as f,r as $,m as z,d,f as o,z as g,F as S,e as b,h as r,a as A,t as C,g as k}from"./index.25da9a2a.4359.js";import{i as l}from"./index.470d7a33.5393.js";var G=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,D={root:"p-avatar-group p-component"},N=x.extend({name:"avatargroup",css:G,classes:D}),F={name:"BaseAvatarGroup",extends:B,style:N,provide:function(){return{$parentInstance:this}}},v={name:"AvatarGroup",extends:F};function V(s,a,p,n,y,_){return t(),f("div",z({class:s.cx("root")},s.ptm("root"),{"data-pc-name":"avatargroup"}),[$(s.$slots,"default")],16)}v.render=V;const j={class:"text-sm leading-none font-semibold text-primary-900"},I={__name:"BaseAvatarGroup",props:{label:{type:String},items:{type:Array,default:()=>[]},max:{type:Number,default:3},detailDialog:{type:Boolean},size:{type:String,default:"normal",validator(s){return["normal","large","xlarge"].includes(s)}},shape:{type:String,default:"circle",validator(s){return["square","circle"].includes(s)}},avatarClasses:{type:String}},setup(s){const a=s,p=d(()=>a.items.slice(0,a.max)),n=d(()=>a.items.slice(a.max));return(y,_)=>{const i=h;return t(),o(r(v),null,{default:g(()=>[(t(!0),f(S,null,b(p.value,e=>{var u,c,m;return t(),o(i,{label:r(l)(e.user)?e.user.full_name:e.full_name,color:r(l)(e.user)?e.user.color:e.color,meta:r(l)(e.user)?e.user:e,image:r(l)(e.user)?(c=(u=e.user)==null?void 0:u.avatar)==null?void 0:c.url:(m=e==null?void 0:e.avatar)==null?void 0:m.url,size:a.size,shape:a.shape,"detail-dialog":a.detailDialog,"avatar-classes":a.avatarClasses,type:"group",class:"-mr-2"},null,8,["label","color","meta","image","size","shape","detail-dialog","avatar-classes"])}),256)),n.value.length?(t(),o(i,{key:0,size:a.size,shape:a.shape,"avatar-classes":a.avatarClasses,type:"group"},{default:g(()=>[A("span",j," +"+C(n.value.length),1)]),_:1},8,["size","shape","avatar-classes"])):k("",!0)]),_:1})}}};export{I as _};
