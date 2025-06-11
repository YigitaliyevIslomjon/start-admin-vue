import{_ as X}from"./BaseAvatar.458525de.1096.js";import{B as W,aA as J,s as Q,o as m,c as E,F as D,e as Z,m as _,a as i,r as S,g as C,u as ee,v as O,d as U,du as P,f as V,z as A,i as f,n as b,h as y,dv as ne,co as te,t as I,bi as se,cn as re,bU as ie,dw as ae,ah as oe,aK as le,dx as pe,_ as ce,ao as ue,cN as r,E as de}from"./index.b091e30c.4022.js";import{g as R}from"./formatDate.f96395ea.1096.js";import{_ as ve}from"./Dropdown.a3c88362.1096.js";import"./dialog.esm.4d473af5.1096.js";import"./axios.config.a13dd895.1096.js";import"./FileSaver.min.eff897bd.1096.js";import"./dayjs.min.062abd70.1096.js";import"./index.es6.f9050ba3.1096.js";/* empty css                                                                            */import"./textarea.esm.0c9e0b79.1096.js";import"./inputtext.esm.4f3681c0.1096.js";/* empty css                                                       */import"./divider.esm.a266e218.1096.js";import"./common.5ab38253.1096.js";import"./count.store.4c800f8b.1096.js";import"./review.store.4b17f781.1096.js";/* empty css                                                            */import"./accordiontab.esm.a7807a53.1096.js";/* empty css                                                      */import"./businessTrip.store.4014c6cc.1096.js";import"./common.store.7a6057a2.1096.js";import"./radiobutton.esm.69eea2de.1096.js";import"./checkbox.esm.7180be8a.1096.js";/* empty css                                                       */import"./dropdown.esm.db524d84.1096.js";/* empty css                                                          */import{a as N,b as w,c as L,d as B,e as k,f as $,g as _e,h as me,i as ge}from"./BasePOA.ef4e9726.1096.js";import"./index.store.5ef92333.1096.js";import"./qrcode.vue.esm.2b80609f.1096.js";/* empty css                                                                                         */import"./menu.esm.50684bef.1096.js";/* empty css                                                      */var fe=`
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
`,ye={root:function(p){var s=p.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},he=W.extend({name:"timeline",css:fe,classes:ye}),xe={name:"BaseTimeline",extends:Q,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:he,provide:function(){return{$parentInstance:this}}},M={name:"Timeline",extends:xe,methods:{getKey:function(p,s){return this.dataKey?J.resolveFieldData(p,this.dataKey):s},getPTOptions:function(p,s){return this.ptm(p,{context:{index:s,count:this.value.length}})}}};function Ie(t,p,s,v,g,l){return m(),E("div",_({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"timeline"}),[(m(!0),E(D,null,Z(t.value,function(d,o){return m(),E("div",_({key:l.getKey(d,o),class:t.cx("event")},l.getPTOptions("event",o)),[i("div",_({class:t.cx("opposite",{index:o})},l.getPTOptions("opposite",o)),[S(t.$slots,"opposite",{item:d,index:o})],16),i("div",_({class:t.cx("separator")},l.getPTOptions("separator",o)),[S(t.$slots,"marker",{item:d,index:o},function(){return[i("div",_({class:t.cx("marker")},l.getPTOptions("marker",o)),null,16)]}),o!==t.value.length-1?S(t.$slots,"connector",{key:0,item:d,index:o},function(){return[i("div",_({class:t.cx("connector")},l.getPTOptions("connector",o)),null,16)]}):C("",!0)],16),i("div",_({class:t.cx("content")},l.getPTOptions("content",o)),[S(t.$slots,"content",{item:d,index:o})],16)],16)}),128))],16)}M.render=Ie;const Ee={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},Se={class:"user-avatar relative"},be={class:"flex flex-col ml-3 w-full"},Te={class:"flex items-center justify-between"},Ce={class:"flex items-center"},Oe={class:"text-sm font-semibold text-primary-500 mx-2"},Pe=i("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),Ae={class:"text-sm font-medium text-greyscale-300 block ml-2"},Re={class:"flex items-center"},Ne=["onClick"],we={class:"ml-1 text-greyscale-500 font-medium"},Le={class:"text-sm font-semibold text-greyscale-900 mt-1"},_n={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,{t:s}=ee(),v=O(""),g=O(!1),l=U(()=>{var x;const{composeModel:e}=p;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];let a=e.approvers.map(c=>({...c,type:"approvers"}));const u=(x=e==null?void 0:e.curator)!=null&&x.assistant?a.find(c=>c.user.id===e.curator.assistant):null;u&&(a=a.filter(c=>c.user.id!==u.user.id));let T=e.signers.filter(c=>c.type!==P.BASIC_SIGNER).map(c=>({...c,type:"signers"}));const n=e!=null&&e.curator?e.signers.find(c=>c.type===P.BASIC_SIGNER):null;return[{user:e.author,type:"author"},...a,...T,...u?[{...u,type:"approvers",role:"assistant"}]:[],...n?[{...n,type:"signers"}]:[]]}),d=(e,a)=>e.value[a.index].type==="author"||e.value[a.index].type==="approvers"&&e.value[a.index].is_approved===!0||e.value[a.index].type==="signers"&&e.value[a.index].is_signed===!0?"bg-success-500":e.value[a.index].type==="approvers"&&e.value[a.index].is_approved===!1||e.value[a.index].type==="signers"&&e.value[a.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",o=e=>e.type==="author"?re:e.type==="signers"?ie:ae,F=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),z=e=>e.type==="author"?R(p.composeModel.created_date):e.action_date?R(e.action_date):null,G=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),K=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",j=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",Y=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?oe:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?le:pe,q=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",H=e=>{v.value=e.comment,g.value=!0};return(e,a)=>{const u=ce,T=X;return m(),E(D,null,[i("div",Ee,[p.composeModel?(m(),V(y(M),{key:0,value:l.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:h})=>({class:[d(n,h),"-my-1"]})}},{marker:A(({item:n})=>[f(u,{icon:Y(n),class:b(["!w-6 !h-6",q(n)])},null,8,["icon","class"])]),content:A(({item:n})=>{var h,x;return[i("div",{class:b(["flex p-5 rounded-xl bg-white mb-3 border",j(n)])},[i("div",Se,[f(T,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10",image:(x=(h=n==null?void 0:n.user)==null?void 0:h.avatar)==null?void 0:x.url},null,8,["label","color","image"]),i("div",{class:b(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[f(u,{icon:n.type==="signers"&&!n.is_all_approved?y(ne):y(te),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),i("div",be,[i("div",Te,[i("div",Ce,[f(u,{icon:o(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",Oe,I(F(n)),1),Pe,i("span",Ae,I(z(n)),1)]),i("div",Re,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(m(),E("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:c=>H(n)},[f(u,{icon:y(se),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",we,I(y(s)("reason")),1)],8,Ne)):C("",!0),i("div",{class:b(["text-xs font-semibold px-2 py-[2px] rounded-lg border",K(n)])},I(G(n)),3)])]),i("div",Le,I(n==null?void 0:n.user.full_name),1)])],2)]}),_:1},8,["value","pt"])):C("",!0)]),f(y(ve),{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=n=>g.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":v.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},mn={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,s=ue(),v={[r.SERVICE_LETTER]:N,[r.BUSINESS_TRIP]:w,[r.BUSINESS_TRIP_ORDER]:L,[r.ORDINARY_NOTICE]:B,[r.BUSINESS_TRIP_DECREE_V2]:k,[r.BUSINESS_TRIP]:w,[r.EXTEND_BUSINESS_TRIP_NOTICE]:$,[r.BUSINESS_TRIP_DECREE_LOCAL]:k,[r.BUSINESS_TRIP_ORDER_LOCAL]:_e,[r.NOTICE_FOR_EMPLOYMENT]:B,[r.ORDER_FOR_EMPLOYMENT]:L,[r.BUSINESS_TRIP_NOTICE_V2]:$,APPLICATION:[r.LABOR_LEAVE,r.CHILD_CARE_LEAVE,r.VACATION_OWN_EXPENSE,r.EDUCATIONAL_LEAVE,r.MATERIAL_SUPPORT,r.APPLICATION],POA:[r.POA_FOR_LEGAL_SERVICES,r.POA_ACTING_FILIAL_MANAGER,r.POA_DEPUTY_FILIAL_MANAGER]},g=U(()=>{const l=s.params.document_sub_type;return v.APPLICATION.includes(l)?me:v.POA.includes(l)?ge:v[l]||N});return(l,d)=>(m(),V(de(g.value),{"compose-model":p.composeModel},null,8,["compose-model"]))}};export{_n as _,mn as a};
