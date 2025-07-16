import{_ as ce}from"./BaseAvatar.5dd206c8.8831.js";import{B as de,aA as ue,s as ve,o as f,c as T,F as G,e as me,m as h,a as o,r as A,g as P,v as S,u as _e,ao as K,d as Y,du as k,f as R,z as B,i as x,_ as b,n as O,h as v,dv as ge,cp as fe,t as C,bi as ye,bt as he,co as xe,bV as Ie,dw as Ee,ah as Se,aK as be,dx as Ce,a5 as Te,cO as r,E as Ae}from"./index.8302300a.1089.js";import{g as D}from"./formatDate.17d14fab.8831.js";import{_ as Oe}from"./Dropdown.83769bde.8831.js";import"./dialog.esm.53ad812a.8831.js";import{u as Pe,d as Ne}from"./axios.config.47da2ce5.8831.js";import"./FileSaver.min.f876aec1.8831.js";import"./dayjs.min.f219cae3.8831.js";import"./index.es6.f9050ba3.8831.js";/* empty css                                                                            */import"./textarea.esm.0f31ae51.8831.js";import"./inputtext.esm.985d47c5.8831.js";/* empty css                                                       */import"./divider.esm.2df2c295.8831.js";import"./common.36839fc2.8831.js";import"./count.store.a5a0c7d6.8831.js";import"./review.store.261c512b.8831.js";/* empty css                                                            */import"./accordiontab.esm.57306403.8831.js";/* empty css                                                      */import"./businessTrip.store.2f2140a0.8831.js";import"./common.store.fb361b76.8831.js";import"./radiobutton.esm.461f6e9f.8831.js";import"./checkbox.esm.22b48f84.8831.js";/* empty css                                                       */import"./dropdown.esm.947aa637.8831.js";/* empty css                                                          */import"./settings.store.2accd9c1.8831.js";import{_ as Re}from"./DeleteModal.9bb9d8e3.8831.js";import{f as we}from"./approval.service.1c022fe0.8831.js";import{u as Le}from"./sign.store.ac1aad4a.8831.js";import{a as $,b as U,c as V,d as M,e as F,f as z,g as ke,h as Be,i as De}from"./BasePOA.96fef0c8.8831.js";import"./index.store.260dcfc7.8831.js";import"./qrcode.vue.esm.3dcca72b.8831.js";/* empty css                                                                                         */import"./menu.esm.969d5b6c.8831.js";/* empty css                                                      */var $e=`
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
`,Ue={root:function(c){var p=c.props;return["p-timeline p-component","p-timeline-"+p.align,"p-timeline-"+p.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},Ve=de.extend({name:"timeline",css:$e,classes:Ue}),Me={name:"BaseTimeline",extends:ve,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Ve,provide:function(){return{$parentInstance:this}}},j={name:"Timeline",extends:Me,methods:{getKey:function(c,p){return this.dataKey?ue.resolveFieldData(c,this.dataKey):p},getPTOptions:function(c,p){return this.ptm(c,{context:{index:p,count:this.value.length}})}}};function Fe(s,c,p,m,I,t){return f(),T("div",h({class:s.cx("root")},s.ptm("root"),{"data-pc-name":"timeline"}),[(f(!0),T(G,null,me(s.value,function(d,l){return f(),T("div",h({key:t.getKey(d,l),class:s.cx("event")},t.getPTOptions("event",l)),[o("div",h({class:s.cx("opposite",{index:l})},t.getPTOptions("opposite",l)),[A(s.$slots,"opposite",{item:d,index:l})],16),o("div",h({class:s.cx("separator")},t.getPTOptions("separator",l)),[A(s.$slots,"marker",{item:d,index:l},function(){return[o("div",h({class:s.cx("marker")},t.getPTOptions("marker",l)),null,16)]}),l!==s.value.length-1?A(s.$slots,"connector",{key:0,item:d,index:l},function(){return[o("div",h({class:s.cx("connector")},t.getPTOptions("connector",l)),null,16)]}):P("",!0)],16),o("div",h({class:s.cx("content")},t.getPTOptions("content",l)),[A(s.$slots,"content",{item:d,index:l})],16)],16)}),128))],16)}j.render=Fe;const ze={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},Ge={class:"user-avatar relative"},Ke={class:"flex flex-col ml-3 w-full"},Ye={class:"flex items-center justify-between"},je={class:"flex items-center"},Xe={class:"text-sm font-semibold text-primary-500 mx-2"},qe=o("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),He={class:"text-sm font-medium text-greyscale-300 block ml-2"},We={class:"flex items-center"},Je=["onClick"],Qe={class:"ml-1 text-greyscale-500 font-medium"},Ze={class:"text-sm font-semibold text-greyscale-900 mt-1"},Un={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(s){const c=s,p=S(!1),m=S(!1),I=S(null),{t}=_e(),d=S(""),l=S(!1),X=Pe().currentUser,q=Le(),H=K(),W=Y(()=>{var w;const{composeModel:e}=c;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];const i={user:e.author,type:"author"},y=e!=null&&e.curator?e.signers.find(a=>a.type===k.BASIC_SIGNER):null,n=(w=e==null?void 0:e.curator)!=null&&w.assistant?e.approvers.find(a=>a.user.id===e.curator.assistant):null,u=e.approvers.filter(a=>!n||a.user.id!==n.user.id).map(a=>({...a,type:"approvers"})),_=new Map,g=[];for(const a of u)a.added_by?(_.has(a.added_by)||_.set(a.added_by,[]),_.get(a.added_by).push(a)):g.push(a);const N=e.signers.filter(a=>a.type!==k.BASIC_SIGNER).map(a=>({...a,type:"signers"})),E=[i,...g];for(const a of N){E.push(a);const L=_.get(a.user.id);L&&E.push(...L)}return n&&E.push({...n,type:"approvers",role:"assistant"}),y&&E.push({...y,type:"signers"}),E}),J=(e,i)=>e.value[i.index].type==="author"||e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!0||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!0?"bg-success-500":e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!1||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",Q=e=>e.type==="author"?xe:e.type==="signers"?Ie:Ee,Z=e=>e.type==="approvers"&&e.role==="assistant"?t("referent"):e.type==="author"?t("author"):e.type==="signers"?t("signer"):t("approver"),ee=e=>e.type==="author"?D(c.composeModel.created_date):e.action_date?D(e.action_date):null,ne=e=>e.type==="author"?t("author"):e.type==="approvers"&&e.is_approved===!0?t("agree"):e.type==="approvers"&&e.is_approved===!1?t("not-agree"):e.type==="approvers"&&e.is_approved===null?t("not-checked"):e.type==="signers"&&e.is_signed===!0?t("signed"):e.type==="signers"&&e.is_signed===!1?t("rejected"):t("not-checked"),te=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",se=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",re=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?Se:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?be:Ce,ae=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",oe=(e,i)=>{var g;const y=e.value,n=i.index;return y[n].added_by?`ml-16 tree-connector relative${!((g=y[n+1])!=null&&g.added_by)?" last-approver":""}`:""},ie=e=>{d.value=e.comment,l.value=!0},le=e=>{I.value=e.id,p.value=!0},pe=async()=>{m.value=!0;try{await we(I.value),await q.actionGetSignDetail(H.params.id),p.value=!1,Ne(null,t("deleted-employee"),Te.SUCCESS)}catch{}finally{m.value=!1}};return(e,i)=>{const y=ce;return f(),T(G,null,[o("div",ze,[c.composeModel?(f(),R(v(j),{key:0,value:W.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:u})=>({class:[J(n,u),"-my-1"]}),content:({props:n,context:u})=>({class:[oe(n,u)]})}},{marker:B(({item:n})=>[x(b,{icon:re(n),class:O(["!w-6 !h-6",ae(n)])},null,8,["icon","class"])]),content:B(({item:n})=>{var u,_,g;return[o("div",{class:O(["flex p-5 rounded-xl bg-white mb-3 border",se(n)])},[o("div",Ge,[x(y,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10",image:(_=(u=n==null?void 0:n.user)==null?void 0:u.avatar)==null?void 0:_.url},null,8,["label","color","image"]),o("div",{class:O(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[x(b,{icon:n.type==="signers"&&!n.is_all_approved?v(ge):v(fe),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),o("div",Ke,[o("div",Ye,[o("div",je,[x(b,{icon:Q(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),o("span",Xe,C(Z(n)),1),qe,o("span",He,C(ee(n)),1)]),o("div",We,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(f(),T("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:N=>ie(n)},[x(b,{icon:v(ye),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),o("span",Qe,C(v(t)("reason")),1)],8,Je)):P("",!0),o("div",{class:O(["text-xs font-semibold px-2 py-[2px] rounded-lg border",te(n)])},C(ne(n)),3),((g=v(X))==null?void 0:g.id)===(n==null?void 0:n.added_by)?(f(),R(b,{key:1,icon:v(he),class:"text-critic-500 cursor-pointer !w-4 !h-4",onClick:N=>le(n)},null,8,["icon","onClick"])):P("",!0)])]),o("div",Ze,C(n==null?void 0:n.user.full_name),1)])],2)]}),_:1},8,["value","pt"])):P("",!0)]),x(v(Oe),{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=n=>l.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":d.value,footer:!1},null,8,["modelValue","editor-value"]),x(v(Re),{modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=n=>p.value=n),label:"delete",loading:m.value,"max-width":"max-w-[480px]",content:{title:"really-want-delete"},"onClick:delete":pe},null,8,["modelValue","loading"])],64)}}},Vn={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(s){const c=s,p=K(),m={[r.SERVICE_LETTER]:$,[r.BUSINESS_TRIP]:U,[r.BUSINESS_TRIP_ORDER]:V,[r.ORDINARY_NOTICE]:M,[r.BUSINESS_TRIP_DECREE_V2]:F,[r.BUSINESS_TRIP]:U,[r.EXTEND_BUSINESS_TRIP_NOTICE]:z,[r.BUSINESS_TRIP_DECREE_LOCAL]:F,[r.BUSINESS_TRIP_ORDER_LOCAL]:ke,[r.NOTICE_FOR_EMPLOYMENT]:M,[r.ORDER_FOR_EMPLOYMENT]:V,[r.BUSINESS_TRIP_NOTICE_V2]:z,APPLICATION:[r.LABOR_LEAVE,r.CHILD_CARE_LEAVE,r.VACATION_OWN_EXPENSE,r.EDUCATIONAL_LEAVE,r.MATERIAL_SUPPORT,r.APPLICATION,r.EXPLANATION_LETTER],POA:[r.POA_FOR_LEGAL_SERVICES,r.POA_ACTING_FILIAL_MANAGER,r.POA_DEPUTY_FILIAL_MANAGER]},I=Y(()=>{const t=p.params.document_sub_type;return m.APPLICATION.includes(t)?Be:m.POA.includes(t)?De:m[t]||$});return(t,d)=>(f(),R(Ae(I.value),{"compose-model":c.composeModel},null,8,["compose-model"]))}};export{Un as _,Vn as a};
