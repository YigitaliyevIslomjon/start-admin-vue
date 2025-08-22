import{_ as ce}from"./BaseAvatar.d5765d61.5927.js";import{B as de,az as ue,n as _e,o as g,i as x,F,v as ve,p as y,b as i,j as P,k as N,r as S,a as me,an as z,q as j,dx as w,c as L,w as U,d as I,_ as T,x as R,e as _,dy as Ee,co as ge,t as O,bg as fe,br as ye,cn as Ie,bQ as he,dz as Ae,ai as Se,aJ as Te,dA as Oe,a9 as xe,cS as t,Q as Pe}from"./index.f6e99784.4478.js";import{g as M}from"./formatDate.2ce995c8.5927.js";import{_ as Re}from"./Dropdown.252365df.5927.js";import"./dialog.esm.f582d3bb.5927.js";import{u as Ne,d as Ce}from"./axios.config.06d57316.5927.js";import"./FileSaver.min.e21fcf96.5927.js";import"./dayjs.min.124ad8a4.5927.js";/* empty css                                                                            */import"./textarea.esm.be6201f3.5927.js";import"./inputtext.esm.ffb5eab2.5927.js";/* empty css                                                       */import"./BaseRadio.vue_vue_type_style_index_0_lang.add8c7ed.5927.js";import"./common.3e5933b8.5927.js";import"./count.store.906c55e7.5927.js";import"./review.store.d2835620.5927.js";/* empty css                                                      */import"./businessTrip.store.c416167e.5927.js";/* empty css                                                            */import"./accordiontab.esm.b37c8d29.5927.js";import"./common.store.350e94bd.5927.js";import"./radiobutton.esm.74f5ce0c.5927.js";import"./checkbox.esm.5c3b44c2.5927.js";import"./dropdown.esm.48237133.5927.js";/* empty css                                                          */import"./settings.store.d3535371.5927.js";import{_ as be}from"./DeleteModal.5e050cb8.5927.js";import{f as Le}from"./approval.service.3ad47796.5927.js";import{u as Be}from"./sign.store.9c393756.5927.js";import{a as k,b as V,c as G,d as $,e as Y,f as b,g as De,h as we,i as Ue}from"./BasePOA.4503eb02.5927.js";import"./index.store.8430c4f0.5927.js";import"./qrcode.vue.esm.900dc3d2.5927.js";/* empty css                                                                                         */import"./menu.esm.1fddf897.5927.js";/* empty css                                                      */var Me=`
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
`,ke={root:function(c){var p=c.props;return["p-timeline p-component","p-timeline-"+p.align,"p-timeline-"+p.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},Ve=de.extend({name:"timeline",css:Me,classes:ke}),Ge={name:"BaseTimeline",extends:_e,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Ve,provide:function(){return{$parentInstance:this}}},K={name:"Timeline",extends:Ge,methods:{getKey:function(c,p){return this.dataKey?ue.resolveFieldData(c,this.dataKey):p},getPTOptions:function(c,p){return this.ptm(c,{context:{index:p,count:this.value.length}})}}};function $e(r,c,p,v,h,s){return g(),x("div",y({class:r.cx("root")},r.ptm("root"),{"data-pc-name":"timeline"}),[(g(!0),x(F,null,ve(r.value,function(d,l){return g(),x("div",y({key:s.getKey(d,l),class:r.cx("event")},s.getPTOptions("event",l)),[i("div",y({class:r.cx("opposite",{index:l})},s.getPTOptions("opposite",l)),[P(r.$slots,"opposite",{item:d,index:l})],16),i("div",y({class:r.cx("separator")},s.getPTOptions("separator",l)),[P(r.$slots,"marker",{item:d,index:l},function(){return[i("div",y({class:r.cx("marker")},s.getPTOptions("marker",l)),null,16)]}),l!==r.value.length-1?P(r.$slots,"connector",{key:0,item:d,index:l},function(){return[i("div",y({class:r.cx("connector")},s.getPTOptions("connector",l)),null,16)]}):N("",!0)],16),i("div",y({class:r.cx("content")},s.getPTOptions("content",l)),[P(r.$slots,"content",{item:d,index:l})],16)],16)}),128))],16)}K.render=$e;const Ye={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},Fe={class:"user-avatar relative"},ze={class:"flex flex-col ml-3 w-full"},je={class:"flex items-center justify-between"},Ke={class:"flex items-center"},He={class:"text-sm font-semibold text-primary-500 mx-2"},qe={class:"text-sm font-medium text-greyscale-300 block ml-2"},Xe={class:"flex items-center"},Qe=["onClick"],We={class:"ml-1 text-greyscale-500 font-medium"},Je={class:"text-sm font-semibold text-greyscale-900 mt-1"},wn={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const c=r,p=S(!1),v=S(!1),h=S(null),{t:s}=me(),d=S(""),l=S(!1),H=Ne().currentUser,q=Be(),X=z(),Q=j(()=>{var B;const{composeModel:e}=c;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];const o={user:e.author,type:"author"},f=e!=null&&e.curator?e.signers.find(a=>a.type===w.BASIC_SIGNER):null,n=(B=e==null?void 0:e.curator)!=null&&B.assistant?e.approvers.find(a=>a.user.id===e.curator.assistant):null,u=e.approvers.filter(a=>!n||a.user.id!==n.user.id).map(a=>({...a,type:"approvers"})),m=new Map,E=[];for(const a of u)a.added_by?(m.has(a.added_by)||m.set(a.added_by,[]),m.get(a.added_by).push(a)):E.push(a);const C=e.signers.filter(a=>a.type!==w.BASIC_SIGNER).map(a=>({...a,type:"signers"})),A=[o,...E];for(const a of C){A.push(a);const D=m.get(a.user.id);D&&A.push(...D)}return n&&A.push({...n,type:"approvers",role:"assistant"}),f&&A.push({...f,type:"signers"}),A}),W=(e,o)=>e.value[o.index].type==="author"||e.value[o.index].type==="approvers"&&e.value[o.index].is_approved===!0||e.value[o.index].type==="signers"&&e.value[o.index].is_signed===!0?"bg-success-500":e.value[o.index].type==="approvers"&&e.value[o.index].is_approved===!1||e.value[o.index].type==="signers"&&e.value[o.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",J=e=>e.type==="author"?Ie:e.type==="signers"?he:Ae,Z=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),ee=e=>e.type==="author"?M(c.composeModel.created_date):e.action_date?M(e.action_date):null,ne=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),te=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",se=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",re=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?Se:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?Te:Oe,ae=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",oe=(e,o)=>{var E;const f=e.value,n=o.index;return f[n].added_by?`ml-16 tree-connector relative${!((E=f[n+1])!=null&&E.added_by)?" last-approver":""}`:""},ie=e=>{d.value=e.comment,l.value=!0},le=e=>{h.value=e.id,p.value=!0},pe=async()=>{v.value=!0;try{await Le(h.value),await q.actionGetSignDetail(X.params.id),p.value=!1,Ce(null,s("deleted-employee"),xe.SUCCESS)}catch{}finally{v.value=!1}};return(e,o)=>{const f=ce;return g(),x(F,null,[i("div",Ye,[c.composeModel?(g(),L(_(K),{key:0,value:Q.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:u})=>({class:[W(n,u),"-my-1"]}),content:({props:n,context:u})=>({class:[oe(n,u)]})}},{marker:U(({item:n})=>[I(T,{icon:re(n),class:R(["!w-6 !h-6",ae(n)])},null,8,["icon","class"])]),content:U(({item:n})=>{var u,m,E;return[i("div",{class:R(["flex p-5 rounded-xl bg-white mb-3 border",se(n)])},[i("div",Fe,[I(f,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10",image:(m=(u=n==null?void 0:n.user)==null?void 0:u.avatar)==null?void 0:m.url},null,8,["label","color","image"]),i("div",{class:R(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[I(T,{icon:n.type==="signers"&&!n.is_all_approved?_(Ee):_(ge),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),i("div",ze,[i("div",je,[i("div",Ke,[I(T,{icon:J(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",He,O(Z(n)),1),o[2]||(o[2]=i("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1)),i("span",qe,O(ee(n)),1)]),i("div",Xe,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(g(),x("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:C=>ie(n)},[I(T,{icon:_(fe),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",We,O(_(s)("reason")),1)],8,Qe)):N("",!0),i("div",{class:R(["text-xs font-semibold px-2 py-[2px] rounded-lg border",te(n)])},O(ne(n)),3),((E=_(H))==null?void 0:E.id)===(n==null?void 0:n.added_by)?(g(),L(T,{key:1,icon:_(ye),class:"text-critic-500 cursor-pointer !w-4 !h-4",onClick:C=>le(n)},null,8,["icon","onClick"])):N("",!0)])]),i("div",Je,O(n==null?void 0:n.user.full_name),1)])],2)]}),_:1},8,["value","pt"])):N("",!0)]),I(_(Re),{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":d.value,footer:!1},null,8,["modelValue","editor-value"]),I(_(be),{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=n=>p.value=n),label:"delete",loading:v.value,"max-width":"max-w-[480px]",content:{title:"really-want-delete"},"onClick:delete":pe},null,8,["modelValue","loading"])],64)}}},Un={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const c=r,p=z(),v={[t.SERVICE_LETTER]:k,[t.BUSINESS_TRIP]:V,[t.BUSINESS_TRIP_ORDER]:G,[t.ORDINARY_NOTICE]:$,[t.BUSINESS_TRIP_DECREE_V2]:Y,[t.BUSINESS_TRIP]:V,[t.EXTEND_BUSINESS_TRIP_NOTICE]:b,[t.BUSINESS_TRIP_DECREE_LOCAL]:Y,[t.BUSINESS_TRIP_ORDER_LOCAL]:De,[t.NOTICE_FOR_EMPLOYMENT]:$,[t.ORDER_FOR_EMPLOYMENT]:G,[t.BUSINESS_TRIP_NOTICE_V2]:b,[t.BUSINESS_TRIP_NOTICE_FOREIGN]:b,APPLICATION:[t.LABOR_LEAVE,t.CHILD_CARE_LEAVE,t.VACATION_OWN_EXPENSE,t.EDUCATIONAL_LEAVE,t.MATERIAL_SUPPORT,t.APPLICATION,t.EXPLANATION_LETTER],POA:[t.POA_FOR_LEGAL_SERVICES,t.POA_ACTING_FILIAL_MANAGER,t.POA_SECOND_TYPE_BSC_MANAGER,t.POA_DEPUTY_FILIAL_MANAGER_BUSINESS,t.POA_BSO_DEPUTY_MANAGER_BUSINESS,t.POA_BSO_DEPUTY_MANAGER_RETAIL,t.POA_DEPUTY_FILIAL_MANAGER_RETAIL,t.POA_BSO_MANAGER,t.POA_BSO_CLIENT_MANAGER,t.POA_BSC_CLIENT_MANAGER,t.POA_ELECTRON_DIGITAL_SIGNATURE,t.POA_BSC_ELECTRON_DIGITAL_SIGNATURE,t.POA_OPERATIVE_GROUP_HEAD,t.POA_EMPLOYER_REPRESENTATIVE,t.POA_RETURN_ENFORCEMENT_DOCUMENT,t.POA_MEDIATION_AGREEMENT,t.POA_EMPLOYER_REPRESENTATIVE_CHAIRMAN_DEPUTIES,t.POA_EMPLOYER_REPRESENTATIVE_FIRST,t.POA_EMPLOYER_REPRESENTATIVE_SECOND,t.POA_EMPLOYER_REPRESENTATIVE_GENERAL]},h=j(()=>{const s=p.params.document_sub_type;return v.APPLICATION.includes(s)?we:v.POA.includes(s)?Ue:v[s]||k});return(s,d)=>(g(),L(Pe(h.value),{"compose-model":c.composeModel},null,8,["compose-model"]))}};export{wn as _,Un as a};
