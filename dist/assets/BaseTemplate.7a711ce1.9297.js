import{_ as H}from"./BaseAvatar.5a6efc40.9297.js";import{B as W,aA as X,s as J,o as _,c as E,F as $,e as Q,m,a as i,r as b,g as C,u as Z,v as O,d as D,dt as A,f as V,z as P,i as f,n as S,h as y,du as ee,cn as ne,t as I,bh as te,cm as se,bT as re,dv as ie,ah as ae,aK as oe,dw as le,_ as pe,ao as ce,cM as r,E as ue}from"./index.a63ee5bc.3687.js";import{g as R}from"./formatDate.0d589da2.9297.js";import{_ as de}from"./Dropdown.6e15c193.9297.js";import"./dialog.esm.c1c77dad.9297.js";import"./axios.config.225584e5.9297.js";import"./FileSaver.min.c2494564.9297.js";import"./dayjs.min.c5433575.9297.js";import"./index.es6.f9050ba3.9297.js";/* empty css                                                                            */import"./textarea.esm.940cd23d.9297.js";import"./inputtext.esm.035966ef.9297.js";/* empty css                                                       */import"./divider.esm.867bb662.9297.js";import"./common.f871a8a9.9297.js";import"./count.store.43221fdc.9297.js";import"./review.store.1c31c186.9297.js";/* empty css                                                            */import"./accordiontab.esm.7ad00338.9297.js";/* empty css                                                      */import"./businessTrip.store.cf69d396.9297.js";import"./common.store.c5304031.9297.js";import"./radiobutton.esm.25585789.9297.js";import"./checkbox.esm.7774529c.9297.js";/* empty css                                                       */import"./BaseCalendar.vue_vue_type_style_index_0_lang.ccf7e773.9297.js";import"./dropdown.esm.22f01dfa.9297.js";/* empty css                                                          */import{a as N,b as w,c as L,d as k,e as B,f as ve,g as me,h as _e,i as ge}from"./BasePOA.02201438.9297.js";import"./index.store.e1fc7d50.9297.js";import"./qrcode.vue.esm.fd161228.9297.js";/* empty css                                                                                    */import"./menu.esm.444b4321.9297.js";/* empty css                                                      */var fe=`
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
`,ye={root:function(p){var s=p.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},he=W.extend({name:"timeline",css:fe,classes:ye}),xe={name:"BaseTimeline",extends:J,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:he,provide:function(){return{$parentInstance:this}}},U={name:"Timeline",extends:xe,methods:{getKey:function(p,s){return this.dataKey?X.resolveFieldData(p,this.dataKey):s},getPTOptions:function(p,s){return this.ptm(p,{context:{index:s,count:this.value.length}})}}};function Ie(t,p,s,v,g,l){return _(),E("div",m({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"timeline"}),[(_(!0),E($,null,Q(t.value,function(d,o){return _(),E("div",m({key:l.getKey(d,o),class:t.cx("event")},l.getPTOptions("event",o)),[i("div",m({class:t.cx("opposite",{index:o})},l.getPTOptions("opposite",o)),[b(t.$slots,"opposite",{item:d,index:o})],16),i("div",m({class:t.cx("separator")},l.getPTOptions("separator",o)),[b(t.$slots,"marker",{item:d,index:o},function(){return[i("div",m({class:t.cx("marker")},l.getPTOptions("marker",o)),null,16)]}),o!==t.value.length-1?b(t.$slots,"connector",{key:0,item:d,index:o},function(){return[i("div",m({class:t.cx("connector")},l.getPTOptions("connector",o)),null,16)]}):C("",!0)],16),i("div",m({class:t.cx("content")},l.getPTOptions("content",o)),[b(t.$slots,"content",{item:d,index:o})],16)],16)}),128))],16)}U.render=Ie;const Ee={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},be={class:"user-avatar relative"},Se={class:"flex flex-col ml-3 w-full"},Te={class:"flex items-center justify-between"},Ce={class:"flex items-center"},Oe={class:"text-sm font-semibold text-primary-500 mx-2"},Ae=i("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),Pe={class:"text-sm font-medium text-greyscale-300 block ml-2"},Re={class:"flex items-center"},Ne=["onClick"],we={class:"ml-1 text-greyscale-500 font-medium"},Le={class:"text-sm font-semibold text-greyscale-900 mt-1"},_n={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,{t:s}=Z(),v=O(""),g=O(!1),l=D(()=>{var x;const{composeModel:e}=p;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];let a=e.approvers.map(c=>({...c,type:"approvers"}));const u=(x=e==null?void 0:e.curator)!=null&&x.assistant?a.find(c=>c.user.id===e.curator.assistant):null;u&&(a=a.filter(c=>c.user.id!==u.user.id));let T=e.signers.filter(c=>c.type!==A.BASIC_SIGNER).map(c=>({...c,type:"signers"}));const n=e!=null&&e.curator?e.signers.find(c=>c.type===A.BASIC_SIGNER):null;return[{user:e.author,type:"author"},...a,...T,...u?[{...u,type:"approvers",role:"assistant"}]:[],...n?[{...n,type:"signers"}]:[]]}),d=(e,a)=>e.value[a.index].type==="author"||e.value[a.index].type==="approvers"&&e.value[a.index].is_approved===!0||e.value[a.index].type==="signers"&&e.value[a.index].is_signed===!0?"bg-success-500":e.value[a.index].type==="approvers"&&e.value[a.index].is_approved===!1||e.value[a.index].type==="signers"&&e.value[a.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",o=e=>e.type==="author"?se:e.type==="signers"?re:ie,M=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),F=e=>e.type==="author"?R(p.composeModel.created_date):e.action_date?R(e.action_date):null,z=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),G=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",K=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",j=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?ae:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?oe:le,Y=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",q=e=>{v.value=e.comment,g.value=!0};return(e,a)=>{const u=pe,T=H;return _(),E($,null,[i("div",Ee,[p.composeModel?(_(),V(y(U),{key:0,value:l.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:h})=>({class:[d(n,h),"-my-1"]})}},{marker:P(({item:n})=>[f(u,{icon:j(n),class:S(["!w-6 !h-6",Y(n)])},null,8,["icon","class"])]),content:P(({item:n})=>{var h,x;return[i("div",{class:S(["flex p-5 rounded-xl bg-white mb-3 border",K(n)])},[i("div",be,[f(T,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10",image:(x=(h=n==null?void 0:n.user)==null?void 0:h.avatar)==null?void 0:x.url},null,8,["label","color","image"]),i("div",{class:S(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[f(u,{icon:n.type==="signers"&&!n.is_all_approved?y(ee):y(ne),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),i("div",Se,[i("div",Te,[i("div",Ce,[f(u,{icon:o(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",Oe,I(M(n)),1),Ae,i("span",Pe,I(F(n)),1)]),i("div",Re,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(_(),E("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:c=>q(n)},[f(u,{icon:y(te),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",we,I(y(s)("reason")),1)],8,Ne)):C("",!0),i("div",{class:S(["text-xs font-semibold px-2 py-[2px] rounded-lg border",G(n)])},I(z(n)),3)])]),i("div",Le,I(n==null?void 0:n.user.full_name),1)])],2)]}),_:1},8,["value","pt"])):C("",!0)]),f(y(de),{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=n=>g.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":v.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},gn={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,s=ce(),v={[r.SERVICE_LETTER]:N,[r.BUSINESS_TRIP]:w,[r.BUSINESS_TRIP_ORDER]:L,[r.ORDINARY_NOTICE]:k,[r.BUSINESS_TRIP_DECREE_V2]:B,[r.BUSINESS_TRIP]:w,[r.BUSINESS_TRIP_DECREE_LOCAL]:B,[r.BUSINESS_TRIP_ORDER_LOCAL]:ve,[r.NOTICE_FOR_EMPLOYMENT]:k,[r.ORDER_FOR_EMPLOYMENT]:L,[r.BUSINESS_TRIP_NOTICE_V2]:me,APPLICATION:[r.LABOR_LEAVE,r.CHILD_CARE_LEAVE,r.VACATION_OWN_EXPENSE,r.EDUCATIONAL_LEAVE,r.MATERIAL_SUPPORT,r.APPLICATION],POA:[r.POA_FOR_LEGAL_SERVICES,r.POA_ACTING_FILIAL_MANAGER,r.POA_DEPUTY_FILIAL_MANAGER]},g=D(()=>{const l=s.params.document_sub_type;return v.APPLICATION.includes(l)?_e:v.POA.includes(l)?ge:v[l]||N});return(l,d)=>(_(),V(ue(g.value),{"compose-model":p.composeModel},null,8,["compose-model"]))}};export{_n as _,gn as a};
