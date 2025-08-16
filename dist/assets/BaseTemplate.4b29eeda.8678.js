import{_ as ce}from"./BaseAvatar.5c8df08a.8678.js";import{B as de,aA as ue,s as _e,o as f,c as T,F as Y,e as ve,m as E,a as i,r as P,g as C,v as x,u as me,ao as z,d as j,dw as D,f as L,z as U,i as h,_ as S,n as N,h as _,dx as ge,ck as fe,t as O,bg as ye,br as Ee,cj as he,bQ as Ie,dy as Ae,ah as xe,aK as Se,dz as Oe,a5 as Te,cM as t,E as Pe}from"./index.4eda51c6.7821.js";import{g as k}from"./formatDate.98f59cb4.8678.js";import{_ as Ne}from"./Dropdown.8f19e814.8678.js";import"./dialog.esm.c2ddfc07.8678.js";import{u as Ce,d as Re}from"./axios.config.44922c21.8678.js";import"./FileSaver.min.2c55bace.8678.js";import"./dayjs.min.212098f7.8678.js";/* empty css                                                                            */import"./textarea.esm.d9eaaa30.8678.js";import"./inputtext.esm.758a3faf.8678.js";/* empty css                                                       */import"./divider.esm.65b4b9e7.8678.js";import"./common.9778b719.8678.js";import"./count.store.fcbc1276.8678.js";import"./review.store.99ebe5fa.8678.js";/* empty css                                                      */import"./businessTrip.store.5da7148e.8678.js";/* empty css                                                            */import"./accordiontab.esm.3c934a3c.8678.js";import"./common.store.c4af1597.8678.js";import"./radiobutton.esm.0be61947.8678.js";import"./checkbox.esm.b852ccfd.8678.js";/* empty css                                                       */import"./dropdown.esm.ba9675e7.8678.js";/* empty css                                                          */import"./settings.store.8a7ae240.8678.js";import{_ as be}from"./DeleteModal.e1170843.8678.js";import{f as Le}from"./approval.service.2eb8bf00.8678.js";import{u as Be}from"./sign.store.56a77703.8678.js";import{a as M,b as $,c as V,d as G,e as F,f as b,g as we,h as De,i as Ue}from"./BasePOA.599ce359.8678.js";import"./index.store.f2082729.8678.js";import"./qrcode.vue.esm.1f8efd9d.8678.js";/* empty css                                                                                         */import"./menu.esm.eeeaa367.8678.js";/* empty css                                                      */var ke=`
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
`,Me={root:function(c){var p=c.props;return["p-timeline p-component","p-timeline-"+p.align,"p-timeline-"+p.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},$e=de.extend({name:"timeline",css:ke,classes:Me}),Ve={name:"BaseTimeline",extends:_e,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:$e,provide:function(){return{$parentInstance:this}}},K={name:"Timeline",extends:Ve,methods:{getKey:function(c,p){return this.dataKey?ue.resolveFieldData(c,this.dataKey):p},getPTOptions:function(c,p){return this.ptm(c,{context:{index:p,count:this.value.length}})}}};function Ge(r,c,p,v,I,s){return f(),T("div",E({class:r.cx("root")},r.ptm("root"),{"data-pc-name":"timeline"}),[(f(!0),T(Y,null,ve(r.value,function(d,l){return f(),T("div",E({key:s.getKey(d,l),class:r.cx("event")},s.getPTOptions("event",l)),[i("div",E({class:r.cx("opposite",{index:l})},s.getPTOptions("opposite",l)),[P(r.$slots,"opposite",{item:d,index:l})],16),i("div",E({class:r.cx("separator")},s.getPTOptions("separator",l)),[P(r.$slots,"marker",{item:d,index:l},function(){return[i("div",E({class:r.cx("marker")},s.getPTOptions("marker",l)),null,16)]}),l!==r.value.length-1?P(r.$slots,"connector",{key:0,item:d,index:l},function(){return[i("div",E({class:r.cx("connector")},s.getPTOptions("connector",l)),null,16)]}):C("",!0)],16),i("div",E({class:r.cx("content")},s.getPTOptions("content",l)),[P(r.$slots,"content",{item:d,index:l})],16)],16)}),128))],16)}K.render=Ge;const Fe={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},Ye={class:"user-avatar relative"},ze={class:"flex flex-col ml-3 w-full"},je={class:"flex items-center justify-between"},Ke={class:"flex items-center"},He={class:"text-sm font-semibold text-primary-500 mx-2"},Xe={class:"text-sm font-medium text-greyscale-300 block ml-2"},qe={class:"flex items-center"},We=["onClick"],Qe={class:"ml-1 text-greyscale-500 font-medium"},Je={class:"text-sm font-semibold text-greyscale-900 mt-1"},Un={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const c=r,p=x(!1),v=x(!1),I=x(null),{t:s}=me(),d=x(""),l=x(!1),H=Ce().currentUser,X=Be(),q=z(),W=j(()=>{var B;const{composeModel:e}=c;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];const o={user:e.author,type:"author"},y=e!=null&&e.curator?e.signers.find(a=>a.type===D.BASIC_SIGNER):null,n=(B=e==null?void 0:e.curator)!=null&&B.assistant?e.approvers.find(a=>a.user.id===e.curator.assistant):null,u=e.approvers.filter(a=>!n||a.user.id!==n.user.id).map(a=>({...a,type:"approvers"})),m=new Map,g=[];for(const a of u)a.added_by?(m.has(a.added_by)||m.set(a.added_by,[]),m.get(a.added_by).push(a)):g.push(a);const R=e.signers.filter(a=>a.type!==D.BASIC_SIGNER).map(a=>({...a,type:"signers"})),A=[o,...g];for(const a of R){A.push(a);const w=m.get(a.user.id);w&&A.push(...w)}return n&&A.push({...n,type:"approvers",role:"assistant"}),y&&A.push({...y,type:"signers"}),A}),Q=(e,o)=>e.value[o.index].type==="author"||e.value[o.index].type==="approvers"&&e.value[o.index].is_approved===!0||e.value[o.index].type==="signers"&&e.value[o.index].is_signed===!0?"bg-success-500":e.value[o.index].type==="approvers"&&e.value[o.index].is_approved===!1||e.value[o.index].type==="signers"&&e.value[o.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",J=e=>e.type==="author"?he:e.type==="signers"?Ie:Ae,Z=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),ee=e=>e.type==="author"?k(c.composeModel.created_date):e.action_date?k(e.action_date):null,ne=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),te=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",se=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",re=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?xe:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?Se:Oe,ae=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",oe=(e,o)=>{var g;const y=e.value,n=o.index;return y[n].added_by?`ml-16 tree-connector relative${!((g=y[n+1])!=null&&g.added_by)?" last-approver":""}`:""},ie=e=>{d.value=e.comment,l.value=!0},le=e=>{I.value=e.id,p.value=!0},pe=async()=>{v.value=!0;try{await Le(I.value),await X.actionGetSignDetail(q.params.id),p.value=!1,Re(null,s("deleted-employee"),Te.SUCCESS)}catch{}finally{v.value=!1}};return(e,o)=>{const y=ce;return f(),T(Y,null,[i("div",Fe,[c.composeModel?(f(),L(_(K),{key:0,value:W.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:u})=>({class:[Q(n,u),"-my-1"]}),content:({props:n,context:u})=>({class:[oe(n,u)]})}},{marker:U(({item:n})=>[h(S,{icon:re(n),class:N(["!w-6 !h-6",ae(n)])},null,8,["icon","class"])]),content:U(({item:n})=>{var u,m,g;return[i("div",{class:N(["flex p-5 rounded-xl bg-white mb-3 border",se(n)])},[i("div",Ye,[h(y,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10",image:(m=(u=n==null?void 0:n.user)==null?void 0:u.avatar)==null?void 0:m.url},null,8,["label","color","image"]),i("div",{class:N(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[h(S,{icon:n.type==="signers"&&!n.is_all_approved?_(ge):_(fe),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),i("div",ze,[i("div",je,[i("div",Ke,[h(S,{icon:J(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",He,O(Z(n)),1),o[2]||(o[2]=i("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1)),i("span",Xe,O(ee(n)),1)]),i("div",qe,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(f(),T("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:R=>ie(n)},[h(S,{icon:_(ye),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",Qe,O(_(s)("reason")),1)],8,We)):C("",!0),i("div",{class:N(["text-xs font-semibold px-2 py-[2px] rounded-lg border",te(n)])},O(ne(n)),3),((g=_(H))==null?void 0:g.id)===(n==null?void 0:n.added_by)?(f(),L(S,{key:1,icon:_(Ee),class:"text-critic-500 cursor-pointer !w-4 !h-4",onClick:R=>le(n)},null,8,["icon","onClick"])):C("",!0)])]),i("div",Je,O(n==null?void 0:n.user.full_name),1)])],2)]}),_:1},8,["value","pt"])):C("",!0)]),h(_(Ne),{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":d.value,footer:!1},null,8,["modelValue","editor-value"]),h(_(be),{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=n=>p.value=n),label:"delete",loading:v.value,"max-width":"max-w-[480px]",content:{title:"really-want-delete"},"onClick:delete":pe},null,8,["modelValue","loading"])],64)}}},kn={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const c=r,p=z(),v={[t.SERVICE_LETTER]:M,[t.BUSINESS_TRIP]:$,[t.BUSINESS_TRIP_ORDER]:V,[t.ORDINARY_NOTICE]:G,[t.BUSINESS_TRIP_DECREE_V2]:F,[t.BUSINESS_TRIP]:$,[t.EXTEND_BUSINESS_TRIP_NOTICE]:b,[t.BUSINESS_TRIP_DECREE_LOCAL]:F,[t.BUSINESS_TRIP_ORDER_LOCAL]:we,[t.NOTICE_FOR_EMPLOYMENT]:G,[t.ORDER_FOR_EMPLOYMENT]:V,[t.BUSINESS_TRIP_NOTICE_V2]:b,[t.BUSINESS_TRIP_NOTICE_FOREIGN]:b,APPLICATION:[t.LABOR_LEAVE,t.CHILD_CARE_LEAVE,t.VACATION_OWN_EXPENSE,t.EDUCATIONAL_LEAVE,t.MATERIAL_SUPPORT,t.APPLICATION,t.EXPLANATION_LETTER],POA:[t.POA_FOR_LEGAL_SERVICES,t.POA_ACTING_FILIAL_MANAGER,t.POA_SECOND_TYPE_BSC_MANAGER,t.POA_DEPUTY_FILIAL_MANAGER_BUSINESS,t.POA_BSO_DEPUTY_MANAGER_BUSINESS,t.POA_BSO_DEPUTY_MANAGER_RETAIL,t.POA_DEPUTY_FILIAL_MANAGER_RETAIL,t.POA_BSO_MANAGER,t.POA_BSO_CLIENT_MANAGER,t.POA_ELECTRON_DIGITAL_SIGNATURE,t.POA_OPERATIVE_GROUP_HEAD,t.POA_EMPLOYER_REPRESENTATIVE,t.POA_RETURN_ENFORCEMENT_DOCUMENT,t.POA_MEDIATION_AGREEMENT]},I=j(()=>{const s=p.params.document_sub_type;return v.APPLICATION.includes(s)?De:v.POA.includes(s)?Ue:v[s]||M});return(s,d)=>(f(),L(Pe(I.value),{"compose-model":c.composeModel},null,8,["compose-model"]))}};export{Un as _,kn as a};
