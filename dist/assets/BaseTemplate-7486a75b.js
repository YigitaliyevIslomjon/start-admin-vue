import{_ as q}from"./BaseAvatar-9a6c57fe.js";import{B as H,aI as W,s as X,o as m,c as x,F as B,e as J,m as _,a,r as I,g as C,u as Q,v as O,d as $,d0 as P,f as V,z as A,i as f,n as E,h as y,d1 as Z,bV as ee,t as h,d2 as ne,bU as te,bp as se,d3 as re,as as ae,aR as ie,d4 as oe,_ as le,az as pe,E as ce,c5 as r}from"./index-b6fa0e93.js";import{d as R}from"./formatDate-e87af5d1.js";import{_ as de}from"./Dropdown-fde433a9.js";import"./dialog.esm-7149d1a8.js";import"./axios.config-0c23625e.js";import"./dayjs.min-a39dd3e8.js";import"./index-b477c4be.js";/* empty css                                                                       */import"./textarea.esm-5e0adfa9.js";import"./inputtext.esm-7e17ca49.js";/* empty css                                                  */import"./ShortDescription-2ff3e65e.js";import"./common-dda70121.js";import"./count.store-0457f570.js";import"./review.store-ad918694.js";/* empty css                                                       */import"./accordiontab.esm-0361c466.js";/* empty css                                                 */import"./common.store-1a8e52de.js";import"./radiobutton.esm-5f9d6f19.js";import"./checkbox.esm-9f13eb77.js";import"./BaseRadio-c45599c5.js";import{a as ue,b as ve,c as N,d as L,e as w,f as k,g as _e,h as me,i as ge,j as fe}from"./BasePOA-daf28c71.js";import"./menu.esm-2a12e896.js";/* empty css                                                 */var ye=`
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
`,he={root:function(p){var s=p.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},xe=H.extend({name:"timeline",css:ye,classes:he}),Ie={name:"BaseTimeline",extends:X,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:xe,provide:function(){return{$parentInstance:this}}},D={name:"Timeline",extends:Ie,methods:{getKey:function(p,s){return this.dataKey?W.resolveFieldData(p,this.dataKey):s},getPTOptions:function(p,s){return this.ptm(p,{context:{index:s,count:this.value.length}})}}};function Ee(t,p,s,v,g,l){return m(),x("div",_({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"timeline"}),[(m(!0),x(B,null,J(t.value,function(u,o){return m(),x("div",_({key:l.getKey(u,o),class:t.cx("event")},l.getPTOptions("event",o)),[a("div",_({class:t.cx("opposite",{index:o})},l.getPTOptions("opposite",o)),[I(t.$slots,"opposite",{item:u,index:o})],16),a("div",_({class:t.cx("separator")},l.getPTOptions("separator",o)),[I(t.$slots,"marker",{item:u,index:o},function(){return[a("div",_({class:t.cx("marker")},l.getPTOptions("marker",o)),null,16)]}),o!==t.value.length-1?I(t.$slots,"connector",{key:0,item:u,index:o},function(){return[a("div",_({class:t.cx("connector")},l.getPTOptions("connector",o)),null,16)]}):C("",!0)],16),a("div",_({class:t.cx("content")},l.getPTOptions("content",o)),[I(t.$slots,"content",{item:u,index:o})],16)],16)}),128))],16)}D.render=Ee;const be={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},Se={class:"user-avatar relative"},Ce={class:"flex flex-col ml-3 w-full"},Te={class:"flex items-center justify-between"},Oe={class:"flex items-center"},Pe={class:"text-sm font-semibold text-primary-500 mx-2"},Ae=a("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),Re={class:"text-sm font-medium text-greyscale-300 block ml-2"},Ne={class:"flex items-center"},Le=["onClick"],we={class:"ml-1 text-greyscale-500 font-medium"},ke={class:"text-sm font-semibold text-greyscale-900 mt-1"},ln={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,{t:s}=Q(),v=O(""),g=O(!1),l=$(()=>{var T;const{composeModel:e}=p;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];let i=e.approvers.map(c=>({...c,type:"approvers"}));const d=(T=e==null?void 0:e.curator)!=null&&T.assistant?i.find(c=>c.user.id===e.curator.assistant):null;d&&(i=i.filter(c=>c.user.id!==d.user.id));let b=e.signers.filter(c=>c.type!==P.BASIC_SIGNER).map(c=>({...c,type:"signers"}));const n=e!=null&&e.curator?e.signers.find(c=>c.type===P.BASIC_SIGNER):null;return[{user:e.author,type:"author"},...i,...b,...d?[{...d,type:"approvers",role:"assistant"}]:[],...n?[{...n,type:"signers"}]:[]]}),u=(e,i)=>e.value[i.index].type==="author"||e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!0||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!0?"bg-success-500":e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!1||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",o=e=>e.type==="author"?te:e.type==="signers"?se:re,U=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),M=e=>e.type==="author"?R(p.composeModel.created_date):e.action_date?R(e.action_date):null,z=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),F=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",j=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",G=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?ae:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?ie:oe,K=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",Y=e=>{v.value=e.comment,g.value=!0};return(e,i)=>{const d=le,b=q;return m(),x(B,null,[a("div",be,[p.composeModel?(m(),V(y(D),{key:0,value:l.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:S})=>({class:[u(n,S),"-my-1"]})}},{marker:A(({item:n})=>[f(d,{icon:G(n),class:E(["!w-6 !h-6",K(n)])},null,8,["icon","class"])]),content:A(({item:n})=>[a("div",{class:E(["flex p-5 rounded-xl bg-white mb-3 border",j(n)])},[a("div",Se,[f(b,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10"},null,8,["label","color"]),a("div",{class:E(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[f(d,{icon:n.type==="signers"&&!n.is_all_approved?y(Z):y(ee),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),a("div",Ce,[a("div",Te,[a("div",Oe,[f(d,{icon:o(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),a("span",Pe,h(U(n)),1),Ae,a("span",Re,h(M(n)),1)]),a("div",Ne,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(m(),x("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:S=>Y(n)},[f(d,{icon:y(ne),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),a("span",we,h(y(s)("reason")),1)],8,Le)):C("",!0),a("div",{class:E(["text-xs font-semibold px-2 py-[2px] rounded-lg border",F(n)])},h(z(n)),3)])]),a("div",ke,h(n==null?void 0:n.user.full_name),1)])],2)]),_:1},8,["value","pt"])):C("",!0)]),f(y(de),{modelValue:g.value,"onUpdate:modelValue":i[0]||(i[0]=n=>g.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":v.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},pn={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,s=pe(),v={[r.SERVICE_LETTER]:N,[r.BUSINESS_TRIP]:L,[r.BUSINESS_TRIP_ORDER]:w,[r.ORDINARY_NOTICE]:k,[r.BUSINESS_TRIP_DECREE_V2]:_e,[r.BUSINESS_TRIP]:L,[r.BUSINESS_TRIP_DECREE_LOCAL]:me,[r.BUSINESS_TRIP_ORDER_LOCAL]:ge,[r.NOTICE_FOR_EMPLOYMENT]:k,[r.ORDER_FOR_EMPLOYMENT]:w,[r.BUSINESS_TRIP_NOTICE_V2]:fe,APPLICATION:[r.LABOR_LEAVE,r.CHILD_CARE_LEAVE,r.VACATION_OWN_EXPENSE,r.EDUCATIONAL_LEAVE,r.MATERIAL_SUPPORT,r.APPLICATION],POA:[r.POA_FOR_LEGAL_SERVICES,r.POA_ACTING_FILIAL_MANAGER,r.POA_DEPUTY_FILIAL_MANAGER]},g=$(()=>{const l=s.params.document_sub_type;return v.APPLICATION.includes(l)?ue:v.POA.includes(l)?ve:v[l]||N});return(l,u)=>(m(),V(ce(g.value),{"compose-model":p.composeModel},null,8,["compose-model"]))}};export{ln as _,pn as a};
