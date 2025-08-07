import{_ as ce}from"./BaseAvatar.466f7ff4.4514.js";import{B as de,aA as ue,s as ve,o as f,c as T,F as z,e as _e,m as h,a as o,r as A,g as P,v as S,u as me,ao as K,d as Y,du as k,f as w,z as D,i as x,_ as b,n as O,h as v,dv as ge,cp as fe,t as C,bi as ye,bt as he,co as xe,bV as Ie,dw as Ee,ah as Se,aK as be,dx as Ce,a5 as Te,cO as s,E as Ae}from"./index.6640b9a6.1664.js";import{g as $}from"./formatDate.d804989f.4514.js";import{_ as Oe}from"./Dropdown.5dc38ebb.4514.js";import"./dialog.esm.fa5e4cbf.4514.js";import{u as Pe,d as Ne}from"./axios.config.b7ba8a26.4514.js";import"./FileSaver.min.46238575.4514.js";import"./dayjs.min.bbf67368.4514.js";/* empty css                                                                            */import"./textarea.esm.aeeaa602.4514.js";import"./inputtext.esm.5720e9be.4514.js";/* empty css                                                       */import"./divider.esm.b3101108.4514.js";import"./common.4d8f27a3.4514.js";import"./count.store.7a15a15e.4514.js";import"./review.store.b6273327.4514.js";/* empty css                                                      */import"./businessTrip.store.e8a2a669.4514.js";/* empty css                                                            */import"./accordiontab.esm.7ac67f4f.4514.js";import"./common.store.d7d4110e.4514.js";import"./radiobutton.esm.8c774949.4514.js";import"./checkbox.esm.6fa9d022.4514.js";/* empty css                                                       */import"./dropdown.esm.3da5b7a7.4514.js";/* empty css                                                          */import"./settings.store.e2464924.4514.js";import{_ as Re}from"./DeleteModal.2495da12.4514.js";import{f as we}from"./approval.service.66887694.4514.js";import{u as Be}from"./sign.store.d1abb49f.4514.js";import{a as U,b as V,c as M,d as F,e as G,f as R,g as Le,h as ke,i as De}from"./BasePOA.5353ccfd.4514.js";import"./index.store.8ba3563e.4514.js";import"./qrcode.vue.esm.2f347184.4514.js";/* empty css                                                                                         */import"./menu.esm.89777baf.4514.js";/* empty css                                                      */var $e=`
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
`,Ue={root:function(c){var p=c.props;return["p-timeline p-component","p-timeline-"+p.align,"p-timeline-"+p.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},Ve=de.extend({name:"timeline",css:$e,classes:Ue}),Me={name:"BaseTimeline",extends:ve,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Ve,provide:function(){return{$parentInstance:this}}},j={name:"Timeline",extends:Me,methods:{getKey:function(c,p){return this.dataKey?ue.resolveFieldData(c,this.dataKey):p},getPTOptions:function(c,p){return this.ptm(c,{context:{index:p,count:this.value.length}})}}};function Fe(r,c,p,_,I,t){return f(),T("div",h({class:r.cx("root")},r.ptm("root"),{"data-pc-name":"timeline"}),[(f(!0),T(z,null,_e(r.value,function(d,l){return f(),T("div",h({key:t.getKey(d,l),class:r.cx("event")},t.getPTOptions("event",l)),[o("div",h({class:r.cx("opposite",{index:l})},t.getPTOptions("opposite",l)),[A(r.$slots,"opposite",{item:d,index:l})],16),o("div",h({class:r.cx("separator")},t.getPTOptions("separator",l)),[A(r.$slots,"marker",{item:d,index:l},function(){return[o("div",h({class:r.cx("marker")},t.getPTOptions("marker",l)),null,16)]}),l!==r.value.length-1?A(r.$slots,"connector",{key:0,item:d,index:l},function(){return[o("div",h({class:r.cx("connector")},t.getPTOptions("connector",l)),null,16)]}):P("",!0)],16),o("div",h({class:r.cx("content")},t.getPTOptions("content",l)),[A(r.$slots,"content",{item:d,index:l})],16)],16)}),128))],16)}j.render=Fe;const Ge={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},ze={class:"user-avatar relative"},Ke={class:"flex flex-col ml-3 w-full"},Ye={class:"flex items-center justify-between"},je={class:"flex items-center"},Xe={class:"text-sm font-semibold text-primary-500 mx-2"},qe=o("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),He={class:"text-sm font-medium text-greyscale-300 block ml-2"},We={class:"flex items-center"},Je=["onClick"],Qe={class:"ml-1 text-greyscale-500 font-medium"},Ze={class:"text-sm font-semibold text-greyscale-900 mt-1"},$n={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const c=r,p=S(!1),_=S(!1),I=S(null),{t}=me(),d=S(""),l=S(!1),X=Pe().currentUser,q=Be(),H=K(),W=Y(()=>{var B;const{composeModel:e}=c;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];const i={user:e.author,type:"author"},y=e!=null&&e.curator?e.signers.find(a=>a.type===k.BASIC_SIGNER):null,n=(B=e==null?void 0:e.curator)!=null&&B.assistant?e.approvers.find(a=>a.user.id===e.curator.assistant):null,u=e.approvers.filter(a=>!n||a.user.id!==n.user.id).map(a=>({...a,type:"approvers"})),m=new Map,g=[];for(const a of u)a.added_by?(m.has(a.added_by)||m.set(a.added_by,[]),m.get(a.added_by).push(a)):g.push(a);const N=e.signers.filter(a=>a.type!==k.BASIC_SIGNER).map(a=>({...a,type:"signers"})),E=[i,...g];for(const a of N){E.push(a);const L=m.get(a.user.id);L&&E.push(...L)}return n&&E.push({...n,type:"approvers",role:"assistant"}),y&&E.push({...y,type:"signers"}),E}),J=(e,i)=>e.value[i.index].type==="author"||e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!0||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!0?"bg-success-500":e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!1||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",Q=e=>e.type==="author"?xe:e.type==="signers"?Ie:Ee,Z=e=>e.type==="approvers"&&e.role==="assistant"?t("referent"):e.type==="author"?t("author"):e.type==="signers"?t("signer"):t("approver"),ee=e=>e.type==="author"?$(c.composeModel.created_date):e.action_date?$(e.action_date):null,ne=e=>e.type==="author"?t("author"):e.type==="approvers"&&e.is_approved===!0?t("agree"):e.type==="approvers"&&e.is_approved===!1?t("not-agree"):e.type==="approvers"&&e.is_approved===null?t("not-checked"):e.type==="signers"&&e.is_signed===!0?t("signed"):e.type==="signers"&&e.is_signed===!1?t("rejected"):t("not-checked"),te=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",se=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",re=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?Se:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?be:Ce,ae=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",oe=(e,i)=>{var g;const y=e.value,n=i.index;return y[n].added_by?`ml-16 tree-connector relative${!((g=y[n+1])!=null&&g.added_by)?" last-approver":""}`:""},ie=e=>{d.value=e.comment,l.value=!0},le=e=>{I.value=e.id,p.value=!0},pe=async()=>{_.value=!0;try{await we(I.value),await q.actionGetSignDetail(H.params.id),p.value=!1,Ne(null,t("deleted-employee"),Te.SUCCESS)}catch{}finally{_.value=!1}};return(e,i)=>{const y=ce;return f(),T(z,null,[o("div",Ge,[c.composeModel?(f(),w(v(j),{key:0,value:W.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:u})=>({class:[J(n,u),"-my-1"]}),content:({props:n,context:u})=>({class:[oe(n,u)]})}},{marker:D(({item:n})=>[x(b,{icon:re(n),class:O(["!w-6 !h-6",ae(n)])},null,8,["icon","class"])]),content:D(({item:n})=>{var u,m,g;return[o("div",{class:O(["flex p-5 rounded-xl bg-white mb-3 border",se(n)])},[o("div",ze,[x(y,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10",image:(m=(u=n==null?void 0:n.user)==null?void 0:u.avatar)==null?void 0:m.url},null,8,["label","color","image"]),o("div",{class:O(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[x(b,{icon:n.type==="signers"&&!n.is_all_approved?v(ge):v(fe),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),o("div",Ke,[o("div",Ye,[o("div",je,[x(b,{icon:Q(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),o("span",Xe,C(Z(n)),1),qe,o("span",He,C(ee(n)),1)]),o("div",We,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(f(),T("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:N=>ie(n)},[x(b,{icon:v(ye),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),o("span",Qe,C(v(t)("reason")),1)],8,Je)):P("",!0),o("div",{class:O(["text-xs font-semibold px-2 py-[2px] rounded-lg border",te(n)])},C(ne(n)),3),((g=v(X))==null?void 0:g.id)===(n==null?void 0:n.added_by)?(f(),w(b,{key:1,icon:v(he),class:"text-critic-500 cursor-pointer !w-4 !h-4",onClick:N=>le(n)},null,8,["icon","onClick"])):P("",!0)])]),o("div",Ze,C(n==null?void 0:n.user.full_name),1)])],2)]}),_:1},8,["value","pt"])):P("",!0)]),x(v(Oe),{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=n=>l.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":d.value,footer:!1},null,8,["modelValue","editor-value"]),x(v(Re),{modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=n=>p.value=n),label:"delete",loading:_.value,"max-width":"max-w-[480px]",content:{title:"really-want-delete"},"onClick:delete":pe},null,8,["modelValue","loading"])],64)}}},Un={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const c=r,p=K(),_={[s.SERVICE_LETTER]:U,[s.BUSINESS_TRIP]:V,[s.BUSINESS_TRIP_ORDER]:M,[s.ORDINARY_NOTICE]:F,[s.BUSINESS_TRIP_DECREE_V2]:G,[s.BUSINESS_TRIP]:V,[s.EXTEND_BUSINESS_TRIP_NOTICE]:R,[s.BUSINESS_TRIP_DECREE_LOCAL]:G,[s.BUSINESS_TRIP_ORDER_LOCAL]:Le,[s.NOTICE_FOR_EMPLOYMENT]:F,[s.ORDER_FOR_EMPLOYMENT]:M,[s.BUSINESS_TRIP_NOTICE_V2]:R,[s.BUSINESS_TRIP_NOTICE_FOREIGN]:R,APPLICATION:[s.LABOR_LEAVE,s.CHILD_CARE_LEAVE,s.VACATION_OWN_EXPENSE,s.EDUCATIONAL_LEAVE,s.MATERIAL_SUPPORT,s.APPLICATION,s.EXPLANATION_LETTER],POA:[s.POA_FOR_LEGAL_SERVICES,s.POA_ACTING_FILIAL_MANAGER,s.POA_DEPUTY_FILIAL_MANAGER]},I=Y(()=>{const t=p.params.document_sub_type;return _.APPLICATION.includes(t)?ke:_.POA.includes(t)?De:_[t]||U});return(t,d)=>(f(),w(Ae(I.value),{"compose-model":c.composeModel},null,8,["compose-model"]))}};export{$n as _,Un as a};
