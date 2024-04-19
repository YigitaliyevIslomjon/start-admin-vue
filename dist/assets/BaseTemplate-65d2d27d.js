import{_ as K}from"./BaseAvatar-fed41db0.js";import{_ as A}from"./BaseIcon-5a9f8aeb.js";import{B as R,af as q,e as H,o as d,k as y,F as M,O as U,m as c,i as r,j as _,n as k,E as L,x as I,y as O,g as $,w as C,p as m,N as x,A as f,q as b,D as Y,l as G}from"./index-762291fe.js";import{b as T}from"./WithSelectable.vue_vue_type_style_index_0_lang-141f60de.js";import"./progressspinner.esm-c2f1e607.js";import"./button.esm-414268e3.js";import{_ as J}from"./LayoutWithTabs-9df23999.js";import"./dialog.esm-473eb524.js";import"./axios.config-26faf74e.js";import"./textarea.esm-9ccc4783.js";import"./inputtext.esm-0e95e5f0.js";/* empty css                                                  */import"./common-c48b3fd2.js";import"./review.store-e26176ff.js";import"./radiobutton.esm-66f2f4ee.js";import"./checkbox.esm-36a371d2.js";import{_ as P}from"./InnerLetterTemplate-6497ff92.js";import"./menu.esm-67cdb376.js";import{S as Q}from"./index-9a4f055b.js";var W=`
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
`,X={root:function(o){var s=o.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},Z=R.extend({name:"timeline",css:W,classes:X}),ee={name:"BaseTimeline",extends:H,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Z,provide:function(){return{$parentInstance:this}}},S={name:"Timeline",extends:ee,methods:{getKey:function(o,s){return this.dataKey?q.resolveFieldData(o,this.dataKey):s},getPTOptions:function(o,s){return this.ptm(o,{context:{index:s,count:this.value.length}})}}};function ne(t,o,s,g,u,a){return d(),y("div",c({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"timeline"}),[(d(!0),y(M,null,U(t.value,function(p,l){return d(),y("div",c({key:a.getKey(p,l),class:t.cx("event")},a.getPTOptions("event",l)),[r("div",c({class:t.cx("opposite",{index:l})},a.getPTOptions("opposite",l)),[_(t.$slots,"opposite",{item:p,index:l})],16),r("div",c({class:t.cx("separator")},a.getPTOptions("separator",l)),[_(t.$slots,"marker",{item:p,index:l},function(){return[r("div",c({class:t.cx("marker")},a.getPTOptions("marker",l)),null,16)]}),l!==t.value.length-1?_(t.$slots,"connector",{key:0,item:p,index:l},function(){return[r("div",c({class:t.cx("connector")},a.getPTOptions("connector",l)),null,16)]}):k("",!0)],16),r("div",c({class:t.cx("content")},a.getPTOptions("content",l)),[_(t.$slots,"content",{item:p,index:l})],16)],16)}),128))],16)}S.render=ne;const te={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto",style:{"max-height":"calc(100vh - 300px)"}},se={class:"user-avatar relative"},re={class:"flex flex-col ml-3 w-full"},oe={class:"flex items-center justify-between"},le={class:"flex items-center"},ie={class:"text-sm font-semibold text-primary-500 mx-2"},ae=r("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),pe={class:"text-sm font-medium text-greyscale-300 block ml-2"},ce={class:"flex items-center"},de=["onClick"],ue={class:"ml-1 text-greyscale-500 font-medium"},ve={class:"text-sm font-semibold text-greyscale-900 mt-1"},Be={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const o=t,{t:s}=L(),g=I(""),u=I(!1),a=O(()=>{if(!(o.composeModel&&o.composeModel.approvers&&o.composeModel.signers))return[];const e={user:o.composeModel.author,type:"author"},i=o.composeModel.approvers.map(h=>({...h,type:"approvers"})),v=o.composeModel.signers.map(h=>({...h,type:"signers"}));return[e,...i,...v]}),p=(e,i)=>e.value[i.index].type==="author"||e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!0||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!0?"bg-success-500":e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!1||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!1?"bg-critic-500":"",l=e=>e.type==="author"?"PenIcon":e.type==="signers"?"CheckCircleIcon":"FileCheckIcon",z=e=>e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),B=e=>e.type==="author"?T(o.composeModel.created_date):e.action_date?T(e.action_date):null,V=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),j=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",D=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",N=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"CheckCircleFilledIcon":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"CloseCircleFilledIcon":"Circle",E=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-white",F=e=>{g.value=e.comment,u.value=!0};return(e,i)=>{const v=A,h=K;return d(),y(M,null,[r("div",te,[o.composeModel?(d(),$(b(S),{key:0,value:a.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:w})=>({class:[p(n,w)]})}},{marker:C(({item:n})=>[m(v,{name:N(n),width:"24",height:"24",stroke:!1,class:x(E(n))},null,8,["name","class"])]),content:C(({item:n})=>[r("div",{class:x(["flex p-5 rounded-xl bg-white mb-3 border",D(n)])},[r("div",se,[m(h,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10"},null,8,["label","color"]),r("div",{class:x(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[m(v,{name:n.type==="signers"&&!n.is_all_approved?"EyeHideIcon":"EyeIcon",width:"12",height:"12",class:"text-white"},null,8,["name"])],2)]),r("div",re,[r("div",oe,[r("div",le,[m(v,{name:l(n),width:"16",height:"16",class:"text-greyscale-500",stroke:n.type!=="approvers"},null,8,["name","stroke"]),r("span",ie,f(z(n)),1),ae,r("span",pe,f(B(n)),1)]),r("div",ce,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(d(),y("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:w=>F(n)},[m(v,{name:"HorizontalDotsIcon",width:"16",height:"16",stroke:!1,class:"text-greyscale-500"}),r("span",ue,f(b(s)("reason")),1)],8,de)):k("",!0),r("div",{class:x(["text-xs font-semibold px-2 py-[2px] rounded-lg border",j(n)])},f(V(n)),3)])]),r("div",ve,f(n==null?void 0:n.user.full_name),1)])],2)]),_:1},8,["value","pt"])):k("",!0)]),m(b(J),{modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=n=>u.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":g.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},Ve={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const o=t,s=Y(),g={[Q]:P},u=O(()=>g[s.params.type]||P);return(a,p)=>(d(),$(G(u.value),{"compose-model":o.composeModel},null,8,["compose-model"]))}};export{Be as _,Ve as a};
