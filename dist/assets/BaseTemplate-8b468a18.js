import{_ as U}from"./BaseAvatar-e758011a.js";import{B as K,aC as L,e as F,o as d,k as h,F as E,y as q,m as c,i as r,j as x,n as w,t as H,E as k,x as O,g as P,w as T,p as m,z as b,q as g,cy as Y,bw as G,A as y,cz as J,bv as Q,bx as W,cA as X,al as Z,aL as ee,cB as ne,D as te,ar as se,bU as I,l as re}from"./index-a6727f67.js";import{b as S}from"./formatDate-50dba0e9.js";import{_ as oe}from"./Dropdown-ec2f7a3d.js";import"./dialog.esm-3a6dd3e9.js";import"./axios.config-6f62fe01.js";import"./dayjs.min-2b01cfc9.js";/* empty css                                                                       */import"./textarea.esm-3eca35d7.js";import"./inputtext.esm-27c3363d.js";/* empty css                                                  */import"./divider.esm-2d8cf48f.js";import"./common-25e9aca0.js";import"./review.store-04535511.js";import"./WithSelectable.vue_vue_type_style_index_0_lang-a9602d38.js";/* empty css                                                 */import"./radiobutton.esm-19e2bed5.js";import"./checkbox.esm-6354feac.js";import{_ as B,a as le,b as ie,c as ae}from"./OrderLetterTemplate-3c37ad4b.js";import"./menu.esm-c35ede24.js";var pe=`
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
`,ce={root:function(o){var s=o.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},de=K.extend({name:"timeline",css:pe,classes:ce}),ue={name:"BaseTimeline",extends:F,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:de,provide:function(){return{$parentInstance:this}}},M={name:"Timeline",extends:ue,methods:{getKey:function(o,s){return this.dataKey?L.resolveFieldData(o,this.dataKey):s},getPTOptions:function(o,s){return this.ptm(o,{context:{index:s,count:this.value.length}})}}};function ve(t,o,s,f,u,a){return d(),h("div",c({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"timeline"}),[(d(!0),h(E,null,q(t.value,function(p,l){return d(),h("div",c({key:a.getKey(p,l),class:t.cx("event")},a.getPTOptions("event",l)),[r("div",c({class:t.cx("opposite",{index:l})},a.getPTOptions("opposite",l)),[x(t.$slots,"opposite",{item:p,index:l})],16),r("div",c({class:t.cx("separator")},a.getPTOptions("separator",l)),[x(t.$slots,"marker",{item:p,index:l},function(){return[r("div",c({class:t.cx("marker")},a.getPTOptions("marker",l)),null,16)]}),l!==t.value.length-1?x(t.$slots,"connector",{key:0,item:p,index:l},function(){return[r("div",c({class:t.cx("connector")},a.getPTOptions("connector",l)),null,16)]}):w("",!0)],16),r("div",c({class:t.cx("content")},a.getPTOptions("content",l)),[x(t.$slots,"content",{item:p,index:l})],16)],16)}),128))],16)}M.render=ve;const me={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},ge={class:"user-avatar relative"},fe={class:"flex flex-col ml-3 w-full"},_e={class:"flex items-center justify-between"},ye={class:"flex items-center"},he={class:"text-sm font-semibold text-primary-500 mx-2"},xe=r("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),be={class:"text-sm font-medium text-greyscale-300 block ml-2"},Ie={class:"flex items-center"},we=["onClick"],Ce={class:"ml-1 text-greyscale-500 font-medium"},ke={class:"text-sm font-semibold text-greyscale-900 mt-1"},He={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const o=t,{t:s}=H(),f=k(""),u=k(!1),a=O(()=>{if(!(o.composeModel&&o.composeModel.approvers&&o.composeModel.signers))return[];const e={user:o.composeModel.author,type:"author"},i=o.composeModel.approvers.map(_=>({..._,type:"approvers"})),v=o.composeModel.signers.map(_=>({..._,type:"signers"}));return[e,...i,...v]}),p=(e,i)=>e.value[i.index].type==="author"||e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!0||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!0?"bg-success-500":e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!1||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!1?"bg-critic-500":"",l=e=>e.type==="author"?Q:e.type==="signers"?W:X,$=e=>e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),R=e=>e.type==="author"?S(o.composeModel.created_date):e.action_date?S(e.action_date):null,V=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),z=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",D=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",j=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?Z:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?ee:ne,A=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-white",N=e=>{f.value=e.comment,u.value=!0};return(e,i)=>{const v=te,_=U;return d(),h(E,null,[r("div",me,[o.composeModel?(d(),P(g(M),{key:0,value:a.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:C})=>({class:[p(n,C)]})}},{marker:T(({item:n})=>[m(v,{icon:j(n),class:b(["!w-6 !h-6",A(n)])},null,8,["icon","class"])]),content:T(({item:n})=>[r("div",{class:b(["flex p-5 rounded-xl bg-white mb-3 border",D(n)])},[r("div",ge,[m(_,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10"},null,8,["label","color"]),r("div",{class:b(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[m(v,{icon:n.type==="signers"&&!n.is_all_approved?g(Y):g(G),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),r("div",fe,[r("div",_e,[r("div",ye,[m(v,{icon:l(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),r("span",he,y($(n)),1),xe,r("span",be,y(R(n)),1)]),r("div",Ie,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(d(),h("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:C=>N(n)},[m(v,{icon:g(J),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),r("span",Ce,y(g(s)("reason")),1)],8,we)):w("",!0),r("div",{class:b(["text-xs font-semibold px-2 py-[2px] rounded-lg border",z(n)])},y(V(n)),3)])]),r("div",ke,y(n==null?void 0:n.user.full_name),1)])],2)]),_:1},8,["value","pt"])):w("",!0)]),m(g(oe),{modelValue:u.value,"onUpdate:modelValue":i[0]||(i[0]=n=>u.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":f.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},Ye={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const o=t,s=se(),f={[I.SERVICE_LETTER]:B,[I.LABOR_LEAVE]:le,[I.BUSINESS_TRIP]:ie,[I.BUSINESS_TRIP_ORDER]:ae},u=O(()=>f[s.params.document_sub_type]||B);return(a,p)=>(d(),P(re(u.value),{"compose-model":o.composeModel},null,8,["compose-model"]))}};export{He as _,Ye as a};
