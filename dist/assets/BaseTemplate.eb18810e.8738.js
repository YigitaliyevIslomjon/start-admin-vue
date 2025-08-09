import{_ as ce}from"./BaseAvatar.15eb2c1f.8738.js";import{B as de,aA as ue,s as _e,o as f,c as T,F,e as ve,m as h,a as o,r as P,g as N,v as x,u as me,ao as z,d as K,du as k,f as L,z as D,i as E,_ as S,n as C,h as _,dv as ge,cp as fe,t as O,bi as ye,bt as he,co as Ee,bV as Ie,dw as Ae,ah as xe,aK as Se,dx as Oe,a5 as Te,cO as t,E as Pe}from"./index.2f578a20.2299.js";import{g as U}from"./formatDate.05f5cd89.8738.js";import{_ as Ce}from"./Dropdown.c14a6674.8738.js";import"./dialog.esm.3a738cb3.8738.js";import{u as Ne,d as Re}from"./axios.config.52a5517e.8738.js";import"./FileSaver.min.596e39f4.8738.js";import"./dayjs.min.c1ba1e55.8738.js";/* empty css                                                                            */import"./textarea.esm.ed84a8d0.8738.js";import"./inputtext.esm.bf11e1ab.8738.js";/* empty css                                                       */import"./divider.esm.5ad83bee.8738.js";import"./common.feeaaf53.8738.js";import"./count.store.f79b9f61.8738.js";import"./review.store.21e4dbe7.8738.js";/* empty css                                                      */import"./businessTrip.store.11d3cc7a.8738.js";/* empty css                                                            */import"./accordiontab.esm.01d7d468.8738.js";import"./common.store.ad1061d0.8738.js";import"./radiobutton.esm.9014bd93.8738.js";import"./checkbox.esm.b8018e70.8738.js";/* empty css                                                       */import"./dropdown.esm.d74329ef.8738.js";/* empty css                                                          */import"./settings.store.5b709802.8738.js";import{_ as be}from"./DeleteModal.a90b3ee6.8738.js";import{f as Le}from"./approval.service.67e4c832.8738.js";import{u as Be}from"./sign.store.73c5912a.8738.js";import{a as V,b as $,c as M,d as G,e as Y,f as b,g as we,h as ke,i as De}from"./BasePOA.ec05ac6c.8738.js";import"./index.store.bacf8a37.8738.js";import"./qrcode.vue.esm.f97fdd58.8738.js";/* empty css                                                                                         */import"./menu.esm.2aeaac64.8738.js";/* empty css                                                      */var Ue=`
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
`,Ve={root:function(c){var p=c.props;return["p-timeline p-component","p-timeline-"+p.align,"p-timeline-"+p.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},$e=de.extend({name:"timeline",css:Ue,classes:Ve}),Me={name:"BaseTimeline",extends:_e,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:$e,provide:function(){return{$parentInstance:this}}},j={name:"Timeline",extends:Me,methods:{getKey:function(c,p){return this.dataKey?ue.resolveFieldData(c,this.dataKey):p},getPTOptions:function(c,p){return this.ptm(c,{context:{index:p,count:this.value.length}})}}};function Ge(r,c,p,v,I,s){return f(),T("div",h({class:r.cx("root")},r.ptm("root"),{"data-pc-name":"timeline"}),[(f(!0),T(F,null,ve(r.value,function(d,l){return f(),T("div",h({key:s.getKey(d,l),class:r.cx("event")},s.getPTOptions("event",l)),[o("div",h({class:r.cx("opposite",{index:l})},s.getPTOptions("opposite",l)),[P(r.$slots,"opposite",{item:d,index:l})],16),o("div",h({class:r.cx("separator")},s.getPTOptions("separator",l)),[P(r.$slots,"marker",{item:d,index:l},function(){return[o("div",h({class:r.cx("marker")},s.getPTOptions("marker",l)),null,16)]}),l!==r.value.length-1?P(r.$slots,"connector",{key:0,item:d,index:l},function(){return[o("div",h({class:r.cx("connector")},s.getPTOptions("connector",l)),null,16)]}):N("",!0)],16),o("div",h({class:r.cx("content")},s.getPTOptions("content",l)),[P(r.$slots,"content",{item:d,index:l})],16)],16)}),128))],16)}j.render=Ge;const Ye={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},Fe={class:"user-avatar relative"},ze={class:"flex flex-col ml-3 w-full"},Ke={class:"flex items-center justify-between"},je={class:"flex items-center"},He={class:"text-sm font-semibold text-primary-500 mx-2"},Xe=o("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),qe={class:"text-sm font-medium text-greyscale-300 block ml-2"},We={class:"flex items-center"},Je=["onClick"],Qe={class:"ml-1 text-greyscale-500 font-medium"},Ze={class:"text-sm font-semibold text-greyscale-900 mt-1"},Un={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const c=r,p=x(!1),v=x(!1),I=x(null),{t:s}=me(),d=x(""),l=x(!1),H=Ne().currentUser,X=Be(),q=z(),W=K(()=>{var B;const{composeModel:e}=c;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];const i={user:e.author,type:"author"},y=e!=null&&e.curator?e.signers.find(a=>a.type===k.BASIC_SIGNER):null,n=(B=e==null?void 0:e.curator)!=null&&B.assistant?e.approvers.find(a=>a.user.id===e.curator.assistant):null,u=e.approvers.filter(a=>!n||a.user.id!==n.user.id).map(a=>({...a,type:"approvers"})),m=new Map,g=[];for(const a of u)a.added_by?(m.has(a.added_by)||m.set(a.added_by,[]),m.get(a.added_by).push(a)):g.push(a);const R=e.signers.filter(a=>a.type!==k.BASIC_SIGNER).map(a=>({...a,type:"signers"})),A=[i,...g];for(const a of R){A.push(a);const w=m.get(a.user.id);w&&A.push(...w)}return n&&A.push({...n,type:"approvers",role:"assistant"}),y&&A.push({...y,type:"signers"}),A}),J=(e,i)=>e.value[i.index].type==="author"||e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!0||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!0?"bg-success-500":e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!1||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",Q=e=>e.type==="author"?Ee:e.type==="signers"?Ie:Ae,Z=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),ee=e=>e.type==="author"?U(c.composeModel.created_date):e.action_date?U(e.action_date):null,ne=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),te=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",se=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",re=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?xe:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?Se:Oe,ae=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",oe=(e,i)=>{var g;const y=e.value,n=i.index;return y[n].added_by?`ml-16 tree-connector relative${!((g=y[n+1])!=null&&g.added_by)?" last-approver":""}`:""},ie=e=>{d.value=e.comment,l.value=!0},le=e=>{I.value=e.id,p.value=!0},pe=async()=>{v.value=!0;try{await Le(I.value),await X.actionGetSignDetail(q.params.id),p.value=!1,Re(null,s("deleted-employee"),Te.SUCCESS)}catch{}finally{v.value=!1}};return(e,i)=>{const y=ce;return f(),T(F,null,[o("div",Ye,[c.composeModel?(f(),L(_(j),{key:0,value:W.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:u})=>({class:[J(n,u),"-my-1"]}),content:({props:n,context:u})=>({class:[oe(n,u)]})}},{marker:D(({item:n})=>[E(S,{icon:re(n),class:C(["!w-6 !h-6",ae(n)])},null,8,["icon","class"])]),content:D(({item:n})=>{var u,m,g;return[o("div",{class:C(["flex p-5 rounded-xl bg-white mb-3 border",se(n)])},[o("div",Fe,[E(y,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10",image:(m=(u=n==null?void 0:n.user)==null?void 0:u.avatar)==null?void 0:m.url},null,8,["label","color","image"]),o("div",{class:C(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[E(S,{icon:n.type==="signers"&&!n.is_all_approved?_(ge):_(fe),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),o("div",ze,[o("div",Ke,[o("div",je,[E(S,{icon:Q(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),o("span",He,O(Z(n)),1),Xe,o("span",qe,O(ee(n)),1)]),o("div",We,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(f(),T("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:R=>ie(n)},[E(S,{icon:_(ye),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),o("span",Qe,O(_(s)("reason")),1)],8,Je)):N("",!0),o("div",{class:C(["text-xs font-semibold px-2 py-[2px] rounded-lg border",te(n)])},O(ne(n)),3),((g=_(H))==null?void 0:g.id)===(n==null?void 0:n.added_by)?(f(),L(S,{key:1,icon:_(he),class:"text-critic-500 cursor-pointer !w-4 !h-4",onClick:R=>le(n)},null,8,["icon","onClick"])):N("",!0)])]),o("div",Ze,O(n==null?void 0:n.user.full_name),1)])],2)]}),_:1},8,["value","pt"])):N("",!0)]),E(_(Ce),{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=n=>l.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":d.value,footer:!1},null,8,["modelValue","editor-value"]),E(_(be),{modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=n=>p.value=n),label:"delete",loading:v.value,"max-width":"max-w-[480px]",content:{title:"really-want-delete"},"onClick:delete":pe},null,8,["modelValue","loading"])],64)}}},Vn={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const c=r,p=z(),v={[t.SERVICE_LETTER]:V,[t.BUSINESS_TRIP]:$,[t.BUSINESS_TRIP_ORDER]:M,[t.ORDINARY_NOTICE]:G,[t.BUSINESS_TRIP_DECREE_V2]:Y,[t.BUSINESS_TRIP]:$,[t.EXTEND_BUSINESS_TRIP_NOTICE]:b,[t.BUSINESS_TRIP_DECREE_LOCAL]:Y,[t.BUSINESS_TRIP_ORDER_LOCAL]:we,[t.NOTICE_FOR_EMPLOYMENT]:G,[t.ORDER_FOR_EMPLOYMENT]:M,[t.BUSINESS_TRIP_NOTICE_V2]:b,[t.BUSINESS_TRIP_NOTICE_FOREIGN]:b,APPLICATION:[t.LABOR_LEAVE,t.CHILD_CARE_LEAVE,t.VACATION_OWN_EXPENSE,t.EDUCATIONAL_LEAVE,t.MATERIAL_SUPPORT,t.APPLICATION,t.EXPLANATION_LETTER],POA:[t.POA_FOR_LEGAL_SERVICES,t.POA_ACTING_FILIAL_MANAGER,t.POA_SECOND_TYPE_BSC_MANAGER,t.POA_DEPUTY_FILIAL_MANAGER_BUSINESS,t.POA_BSO_DEPUTY_MANAGER_BUSINESS,t.POA_BSO_DEPUTY_MANAGER_RETAIL,t.POA_DEPUTY_FILIAL_MANAGER_RETAIL,t.POA_BSO_MANAGER,t.POA_BSO_CLIENT_MANAGER,t.POA_ELECTRON_DIGITAL_SIGNATURE,t.POA_OPERATIVE_GROUP_HEAD,t.POA_EMPLOYER_REPRESENTATIVE]},I=K(()=>{const s=p.params.document_sub_type;return v.APPLICATION.includes(s)?ke:v.POA.includes(s)?De:v[s]||V});return(s,d)=>(f(),L(Pe(I.value),{"compose-model":c.composeModel},null,8,["compose-model"]))}};export{Un as _,Vn as a};
