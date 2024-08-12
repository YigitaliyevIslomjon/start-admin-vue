import{_ as N}from"./BaseAvatar-2fea70ff.js";import{a as U}from"./BaseIcon-e5acf42a.js";import{B as F,ae as L,e as q,o as d,k as y,O as S,U as H,m as c,i as r,j as _,n as w,C as Y,x as I,y as M,g as E,w as T,p as m,S as x,z as f,q as b,A as G,l as J,b6 as k}from"./index-7767debb.js";import{b as O}from"./WithSelectable.vue_vue_type_style_index_0_lang-5bba622d.js";import{_ as Q}from"./Dropdown-0b66d30f.js";import"./dialog.esm-3610f7d7.js";import"./axios.config-ed76c312.js";import"./index-03f4d8fe.js";/* empty css                                                                       */import"./textarea.esm-daf7e933.js";import"./inputtext.esm-4bde0a0b.js";/* empty css                                                  */import"./divider.esm-db8eac0e.js";import"./common-11f2f6a4.js";import"./review.store-64b0784c.js";import"./radiobutton.esm-7c4dbe2a.js";import"./checkbox.esm-0f30ce6b.js";import{_ as P,a as W,b as X}from"./BusinessTripNoticeTemplate-af2fa809.js";import"./menu.esm-cdbccc8d.js";var Z=`
@layer primevue {
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: 70px;
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
        padding: 0 1rem;
    }

    .p-timeline-event-content {
        flex: 1;
        padding: 0 1rem;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: flex;
        align-self: baseline;
    }

    .p-timeline-event-connector {
        flex-grow: 1;
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }
}
`,ee={root:function(o){var s=o.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},ne=F.extend({name:"timeline",css:Z,classes:ee}),te={name:"BaseTimeline",extends:q,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:ne,provide:function(){return{$parentInstance:this}}},$={name:"Timeline",extends:te,methods:{getKey:function(o,s){return this.dataKey?L.resolveFieldData(o,this.dataKey):s},getPTOptions:function(o,s){return this.ptm(o,{context:{index:s,count:this.value.length}})}}};function se(t,o,s,g,u,a){return d(),y("div",c({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"timeline"}),[(d(!0),y(S,null,H(t.value,function(p,l){return d(),y("div",c({key:a.getKey(p,l),class:t.cx("event")},a.getPTOptions("event",l)),[r("div",c({class:t.cx("opposite",{index:l})},a.getPTOptions("opposite",l)),[_(t.$slots,"opposite",{item:p,index:l})],16),r("div",c({class:t.cx("separator")},a.getPTOptions("separator",l)),[_(t.$slots,"marker",{item:p,index:l},function(){return[r("div",c({class:t.cx("marker")},a.getPTOptions("marker",l)),null,16)]}),l!==t.value.length-1?_(t.$slots,"connector",{key:0,item:p,index:l},function(){return[r("div",c({class:t.cx("connector")},a.getPTOptions("connector",l)),null,16)]}):w("",!0)],16),r("div",c({class:t.cx("content")},a.getPTOptions("content",l)),[_(t.$slots,"content",{item:p,index:l})],16)],16)}),128))],16)}$.render=se;const re={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto",style:{"max-height":"calc(100vh - 300px)"}},oe={class:"user-avatar relative"},le={class:"flex flex-col ml-3 w-full"},ie={class:"flex items-center justify-between"},ae={class:"flex items-center"},pe={class:"text-sm font-semibold text-primary-500 mx-2"},ce=r("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),de={class:"text-sm font-medium text-greyscale-300 block ml-2"},ue={class:"flex items-center"},ve=["onClick"],me={class:"ml-1 text-greyscale-500 font-medium"},ge={class:"text-sm font-semibold text-greyscale-900 mt-1"},ze={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const o=t,{t:s}=Y(),g=I(""),u=I(!1),a=M(()=>{if(!(o.composeModel&&o.composeModel.approvers&&o.composeModel.signers))return[];const e={user:o.composeModel.author,type:"author"},i=o.composeModel.approvers.map(h=>({...h,type:"approvers"})),v=o.composeModel.signers.map(h=>({...h,type:"signers"}));return[e,...i,...v]}),p=(e,i)=>e.value[i.index].type==="author"||e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!0||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!0?"bg-success-500":e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!1||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!1?"bg-critic-500":"",l=e=>e.type==="author"?"PenIcon":e.type==="signers"?"CheckCircleIcon":"FileCheckIcon",B=e=>e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),V=e=>e.type==="author"?O(o.composeModel.created_date):e.action_date?O(e.action_date):null,z=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),j=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",R=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",A=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"CheckCircleFilledIcon":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"CloseCircleFilledIcon":"Circle",D=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-white",K=e=>{g.value=e.comment,u.value=!0};return(e,i)=>{const v=U,h=N;return d(),y(S,null,[r("div",re,[o.composeModel?(d(),E(b($),{key:0,value:a.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:C})=>({class:[p(n,C)]})}},{marker:T(({item:n})=>[m(v,{name:A(n),width:"24",height:"24",stroke:!1,class:x(D(n))},null,8,["name","class"])]),content:T(({item:n})=>[r("div",{class:x(["flex p-5 rounded-xl bg-white mb-3 border",R(n)])},[r("div",oe,[m(h,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10"},null,8,["label","color"]),r("div",{class:x(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[m(v,{name:n.type==="signers"&&!n.is_all_approved?"EyeHideIcon":"EyeIcon",width:"12",height:"12",class:"text-white"},null,8,["name"])],2)]),r("div",le,[r("div",ie,[r("div",ae,[m(v,{name:l(n),width:"16",height:"16",class:"text-greyscale-500",stroke:n.type!=="approvers"},null,8,["name","stroke"]),r("span",pe,f(B(n)),1),ce,r("span",de,f(V(n)),1)]),r("div",ue,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(d(),y("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:C=>K(n)},[m(v,{name:"HorizontalDotsIcon",width:"16",height:"16",stroke:!1,class:"text-greyscale-500"}),r("span",me,f(b(s)("reason")),1)],8,ve)):w("",!0),r("div",{class:x(["text-xs font-semibold px-2 py-[2px] rounded-lg border",j(n)])},f(z(n)),3)])]),r("div",ge,f(n==null?void 0:n.user.full_name),1)])],2)]),_:1},8,["value","pt"])):w("",!0)]),m(b(Q),{modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=n=>u.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":g.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},je={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const o=t,s=G(),g={[k.SERVICE_LETTER]:P,[k.LABOR_LEAVE]:W,[k.BUSINESS_TRIP]:X},u=M(()=>g[s.params.document_sub_type]||P);return(a,p)=>(d(),E(J(u.value),{"compose-model":o.composeModel},null,8,["compose-model"]))}};export{ze as _,je as a};
