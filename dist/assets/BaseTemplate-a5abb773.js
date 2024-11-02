import{_ as G}from"./BaseAvatar-b7197436.js";import{B as H,aH as J,e as Q,o as m,k as x,F as L,y as W,m as v,i as r,j as I,n as S,t as X,L as O,x as $,cH as P,g as D,w as R,p as f,z as E,q as y,cI as Z,bF as ee,A as h,cJ as ne,bE as te,bo as se,cK as re,aq as ae,aQ as ie,cL as oe,D as le,aw as pe,l as ce,c0 as i}from"./index-b0929bc5.js";import{b as N}from"./formatDate-f99e4ad9.js";import{_ as ue}from"./Dropdown-34c0ff2e.js";import"./dialog.esm-75493eca.js";import"./axios.config-f7eb6c2c.js";import"./dayjs.min-7a202cb0.js";import"./index-b98fb80c.js";/* empty css                                                                       */import"./textarea.esm-f1222b77.js";import"./inputtext.esm-ad715d7d.js";/* empty css                                                  */import"./divider.esm-7af2e086.js";import"./common-62639da0.js";import"./review.store-976e4121.js";/* empty css                                                       */import"./accordiontab.esm-af1557c6.js";/* empty css                                                 */import"./radiobutton.esm-17f9c88b.js";import"./checkbox.esm-5b935ca9.js";import{a as de,b as A,c as w,d as k,e as B,f as ve,g as me,h as _e}from"./DecreeTemplate-e975a939.js";import"./menu.esm-c4c4f554.js";/* empty css                                                 */var ge=`
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
`,fe={root:function(p){var s=p.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},ye=H.extend({name:"timeline",css:ge,classes:fe}),he={name:"BaseTimeline",extends:Q,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:ye,provide:function(){return{$parentInstance:this}}},U={name:"Timeline",extends:he,methods:{getKey:function(p,s){return this.dataKey?J.resolveFieldData(p,this.dataKey):s},getPTOptions:function(p,s){return this.ptm(p,{context:{index:s,count:this.value.length}})}}};function xe(t,p,s,_,g,l){return m(),x("div",v({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"timeline"}),[(m(!0),x(L,null,W(t.value,function(d,o){return m(),x("div",v({key:l.getKey(d,o),class:t.cx("event")},l.getPTOptions("event",o)),[r("div",v({class:t.cx("opposite",{index:o})},l.getPTOptions("opposite",o)),[I(t.$slots,"opposite",{item:d,index:o})],16),r("div",v({class:t.cx("separator")},l.getPTOptions("separator",o)),[I(t.$slots,"marker",{item:d,index:o},function(){return[r("div",v({class:t.cx("marker")},l.getPTOptions("marker",o)),null,16)]}),o!==t.value.length-1?I(t.$slots,"connector",{key:0,item:d,index:o},function(){return[r("div",v({class:t.cx("connector")},l.getPTOptions("connector",o)),null,16)]}):S("",!0)],16),r("div",v({class:t.cx("content")},l.getPTOptions("content",o)),[I(t.$slots,"content",{item:d,index:o})],16)],16)}),128))],16)}U.render=xe;const Ie={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},Ee={class:"user-avatar relative"},be={class:"flex flex-col ml-3 w-full"},Ce={class:"flex items-center justify-between"},Se={class:"flex items-center"},Te={class:"text-sm font-semibold text-primary-500 mx-2"},Oe=r("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),Pe={class:"text-sm font-medium text-greyscale-300 block ml-2"},Re={class:"flex items-center"},Ne=["onClick"],Ae={class:"ml-1 text-greyscale-500 font-medium"},we={class:"text-sm font-semibold text-greyscale-900 mt-1"},tn={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,{t:s}=X(),_=O(""),g=O(!1),l=$(()=>{var T;const{composeModel:e}=p;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];let a=e.approvers.map(c=>({...c,type:"approvers"}));const u=(T=e==null?void 0:e.curator)!=null&&T.assistant?a.find(c=>c.user.id===e.curator.assistant):null;u&&(a=a.filter(c=>c.user.id!==u.user.id));let b=e.signers.filter(c=>c.type!==P.BASIC_SIGNER).map(c=>({...c,type:"signers"}));const n=e!=null&&e.curator?e.signers.find(c=>c.type===P.BASIC_SIGNER):null;return[{user:e.author,type:"author"},...a,...b,...u?[{...u,type:"approvers",role:"assistant"}]:[],...n?[{...n,type:"signers"}]:[]]}),d=(e,a)=>e.value[a.index].type==="author"||e.value[a.index].type==="approvers"&&e.value[a.index].is_approved===!0||e.value[a.index].type==="signers"&&e.value[a.index].is_signed===!0?"bg-success-500":e.value[a.index].type==="approvers"&&e.value[a.index].is_approved===!1||e.value[a.index].type==="signers"&&e.value[a.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",o=e=>e.type==="author"?te:e.type==="signers"?se:re,V=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),z=e=>e.type==="author"?N(p.composeModel.created_date):e.action_date?N(e.action_date):null,F=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),M=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",j=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",K=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?ae:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?ie:oe,Y=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",q=e=>{_.value=e.comment,g.value=!0};return(e,a)=>{const u=le,b=G;return m(),x(L,null,[r("div",Ie,[p.composeModel?(m(),D(y(U),{key:0,value:l.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:C})=>({class:[d(n,C),"-my-1"]})}},{marker:R(({item:n})=>[f(u,{icon:K(n),class:E(["!w-6 !h-6",Y(n)])},null,8,["icon","class"])]),content:R(({item:n})=>[r("div",{class:E(["flex p-5 rounded-xl bg-white mb-3 border",j(n)])},[r("div",Ee,[f(b,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10"},null,8,["label","color"]),r("div",{class:E(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[f(u,{icon:n.type==="signers"&&!n.is_all_approved?y(Z):y(ee),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),r("div",be,[r("div",Ce,[r("div",Se,[f(u,{icon:o(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),r("span",Te,h(V(n)),1),Oe,r("span",Pe,h(z(n)),1)]),r("div",Re,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(m(),x("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:C=>q(n)},[f(u,{icon:y(ne),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),r("span",Ae,h(y(s)("reason")),1)],8,Ne)):S("",!0),r("div",{class:E(["text-xs font-semibold px-2 py-[2px] rounded-lg border",M(n)])},h(F(n)),3)])]),r("div",we,h(n==null?void 0:n.user.full_name),1)])],2)]),_:1},8,["value","pt"])):S("",!0)]),f(y(ue),{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=n=>g.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":_.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},sn={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,s=pe(),_={[i.SERVICE_LETTER]:A,[i.BUSINESS_TRIP]:w,[i.BUSINESS_TRIP_ORDER]:k,[i.ORDINARY_NOTICE]:B,[i.BUSINESS_TRIP_DECREE_FOREIGN]:ve,[i.BUSINESS_TRIP]:w,[i.BUSINESS_TRIP_DECREE_LOCAL]:me,[i.BUSINESS_TRIP_ORDER_LOCAL]:_e,[i.NOTICE_FOR_EMPLOYMENT]:B,[i.ORDER_FOR_EMPLOYMENT]:k,APPLICATION:[i.LABOR_LEAVE,i.CHILD_CARE_LEAVE,i.VACATION_OWN_EXPENSE,i.EDUCATIONAL_LEAVE,i.MATERIAL_SUPPORT,i.APPLICATION]},g=$(()=>{const l=s.params.document_sub_type;return _.APPLICATION.includes(l)?de:_[l]||A});return(l,d)=>(m(),D(ce(g.value),{"compose-model":p.composeModel},null,8,["compose-model"]))}};export{tn as _,sn as a};
