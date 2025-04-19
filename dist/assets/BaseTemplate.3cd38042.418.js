import{_ as H}from"./BaseAvatar.0936029f.418.js";import{B as W,aA as X,s as J,o as m,c as E,F as $,e as Q,m as _,a,r as b,g as T,u as Z,v as O,d as D,ds as A,f as V,z as P,i as f,n as S,h as y,dt as ee,cm as ne,t as I,bg as te,cl as se,bS as re,du as ae,ah as ie,aK as oe,dv as le,_ as pe,ao as ce,cL as r,E as ue}from"./index.a4941a00.7691.js";import{g as R}from"./formatDate.7c3971ae.418.js";import{_ as de}from"./Dropdown.a41914d9.418.js";import"./dialog.esm.7be33e7a.418.js";import"./axios.config.6f432aa6.418.js";import"./FileSaver.min.0e5ed79b.418.js";import"./dayjs.min.b9e816a6.418.js";import"./index.es6.f9050ba3.418.js";/* empty css                                                                           */import"./textarea.esm.a48896bf.418.js";import"./inputtext.esm.4886f818.418.js";/* empty css                                                      */import"./ShortDescription.52a63026.418.js";import"./common.019d2110.418.js";import"./count.store.0309fd9b.418.js";import"./review.store.3c8ebe11.418.js";/* empty css                                                           */import"./accordiontab.esm.705c013e.418.js";/* empty css                                                     */import"./common.store.8e221248.418.js";import"./radiobutton.esm.63beb148.418.js";import"./checkbox.esm.f39a4c17.418.js";/* empty css                                                      */import{a as N,b as L,c as w,d as k,e as B,f as ve,g as _e,h as me,i as ge}from"./BasePOA.06a1e9f7.418.js";import"./index.store.1c7a1599.418.js";import"./qrcode.vue.esm.c770b74c.418.js";/* empty css                                                                                   */import"./menu.esm.e3682f2f.418.js";/* empty css                                                     */var fe=`
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
`,ye={root:function(p){var s=p.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},he=W.extend({name:"timeline",css:fe,classes:ye}),xe={name:"BaseTimeline",extends:J,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:he,provide:function(){return{$parentInstance:this}}},U={name:"Timeline",extends:xe,methods:{getKey:function(p,s){return this.dataKey?X.resolveFieldData(p,this.dataKey):s},getPTOptions:function(p,s){return this.ptm(p,{context:{index:s,count:this.value.length}})}}};function Ie(t,p,s,v,g,l){return m(),E("div",_({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"timeline"}),[(m(!0),E($,null,Q(t.value,function(d,o){return m(),E("div",_({key:l.getKey(d,o),class:t.cx("event")},l.getPTOptions("event",o)),[a("div",_({class:t.cx("opposite",{index:o})},l.getPTOptions("opposite",o)),[b(t.$slots,"opposite",{item:d,index:o})],16),a("div",_({class:t.cx("separator")},l.getPTOptions("separator",o)),[b(t.$slots,"marker",{item:d,index:o},function(){return[a("div",_({class:t.cx("marker")},l.getPTOptions("marker",o)),null,16)]}),o!==t.value.length-1?b(t.$slots,"connector",{key:0,item:d,index:o},function(){return[a("div",_({class:t.cx("connector")},l.getPTOptions("connector",o)),null,16)]}):T("",!0)],16),a("div",_({class:t.cx("content")},l.getPTOptions("content",o)),[b(t.$slots,"content",{item:d,index:o})],16)],16)}),128))],16)}U.render=Ie;const Ee={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},be={class:"user-avatar relative"},Se={class:"flex flex-col ml-3 w-full"},Ce={class:"flex items-center justify-between"},Te={class:"flex items-center"},Oe={class:"text-sm font-semibold text-primary-500 mx-2"},Ae=a("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),Pe={class:"text-sm font-medium text-greyscale-300 block ml-2"},Re={class:"flex items-center"},Ne=["onClick"],Le={class:"ml-1 text-greyscale-500 font-medium"},we={class:"text-sm font-semibold text-greyscale-900 mt-1"},un={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,{t:s}=Z(),v=O(""),g=O(!1),l=D(()=>{var x;const{composeModel:e}=p;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];let i=e.approvers.map(c=>({...c,type:"approvers"}));const u=(x=e==null?void 0:e.curator)!=null&&x.assistant?i.find(c=>c.user.id===e.curator.assistant):null;u&&(i=i.filter(c=>c.user.id!==u.user.id));let C=e.signers.filter(c=>c.type!==A.BASIC_SIGNER).map(c=>({...c,type:"signers"}));const n=e!=null&&e.curator?e.signers.find(c=>c.type===A.BASIC_SIGNER):null;return[{user:e.author,type:"author"},...i,...C,...u?[{...u,type:"approvers",role:"assistant"}]:[],...n?[{...n,type:"signers"}]:[]]}),d=(e,i)=>e.value[i.index].type==="author"||e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!0||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!0?"bg-success-500":e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!1||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",o=e=>e.type==="author"?se:e.type==="signers"?re:ae,M=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),F=e=>e.type==="author"?R(p.composeModel.created_date):e.action_date?R(e.action_date):null,z=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),G=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",K=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",j=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?ie:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?oe:le,Y=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",q=e=>{v.value=e.comment,g.value=!0};return(e,i)=>{const u=pe,C=H;return m(),E($,null,[a("div",Ee,[p.composeModel?(m(),V(y(U),{key:0,value:l.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:h})=>({class:[d(n,h),"-my-1"]})}},{marker:P(({item:n})=>[f(u,{icon:j(n),class:S(["!w-6 !h-6",Y(n)])},null,8,["icon","class"])]),content:P(({item:n})=>{var h,x;return[a("div",{class:S(["flex p-5 rounded-xl bg-white mb-3 border",K(n)])},[a("div",be,[f(C,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10",image:(x=(h=n==null?void 0:n.user)==null?void 0:h.avatar)==null?void 0:x.url},null,8,["label","color","image"]),a("div",{class:S(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[f(u,{icon:n.type==="signers"&&!n.is_all_approved?y(ee):y(ne),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),a("div",Se,[a("div",Ce,[a("div",Te,[f(u,{icon:o(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),a("span",Oe,I(M(n)),1),Ae,a("span",Pe,I(F(n)),1)]),a("div",Re,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(m(),E("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:c=>q(n)},[f(u,{icon:y(te),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),a("span",Le,I(y(s)("reason")),1)],8,Ne)):T("",!0),a("div",{class:S(["text-xs font-semibold px-2 py-[2px] rounded-lg border",G(n)])},I(z(n)),3)])]),a("div",we,I(n==null?void 0:n.user.full_name),1)])],2)]}),_:1},8,["value","pt"])):T("",!0)]),f(y(de),{modelValue:g.value,"onUpdate:modelValue":i[0]||(i[0]=n=>g.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":v.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},dn={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,s=ce(),v={[r.SERVICE_LETTER]:N,[r.BUSINESS_TRIP]:L,[r.BUSINESS_TRIP_ORDER]:w,[r.ORDINARY_NOTICE]:k,[r.BUSINESS_TRIP_DECREE_V2]:B,[r.BUSINESS_TRIP]:L,[r.BUSINESS_TRIP_DECREE_LOCAL]:B,[r.BUSINESS_TRIP_ORDER_LOCAL]:ve,[r.NOTICE_FOR_EMPLOYMENT]:k,[r.ORDER_FOR_EMPLOYMENT]:w,[r.BUSINESS_TRIP_NOTICE_V2]:_e,APPLICATION:[r.LABOR_LEAVE,r.CHILD_CARE_LEAVE,r.VACATION_OWN_EXPENSE,r.EDUCATIONAL_LEAVE,r.MATERIAL_SUPPORT,r.APPLICATION],POA:[r.POA_FOR_LEGAL_SERVICES,r.POA_ACTING_FILIAL_MANAGER,r.POA_DEPUTY_FILIAL_MANAGER]},g=D(()=>{const l=s.params.document_sub_type;return v.APPLICATION.includes(l)?me:v.POA.includes(l)?ge:v[l]||N});return(l,d)=>(m(),V(ue(g.value),{"compose-model":p.composeModel},null,8,["compose-model"]))}};export{un as _,dn as a};
