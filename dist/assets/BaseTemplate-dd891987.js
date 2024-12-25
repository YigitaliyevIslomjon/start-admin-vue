import{_ as q}from"./BaseAvatar-72fc067f.js";import{B as H,aI as W,s as X,o as m,c as x,F as B,e as J,m as _,a as i,r as I,g as O,u as Q,v as T,d as $,d0 as A,f as D,z as P,i as f,n as E,h as y,d1 as Z,bV as ee,t as h,d2 as ne,bU as te,bo as se,d3 as re,as as ie,aR as ae,d4 as oe,_ as le,az as pe,E as ce,c3 as r}from"./index-9b399b06.js";import{d as R}from"./formatDate-b318f4e5.js";import{_ as de}from"./Dropdown-ce85fa43.js";import"./dialog.esm-27f9350f.js";import"./axios.config-605d2af9.js";import"./dayjs.min-9c79f421.js";import"./index-7c4318f7.js";/* empty css                                                                       */import"./textarea.esm-e26fed16.js";import"./inputtext.esm-34235202.js";/* empty css                                                  */import"./ShortDescription-615e6ea8.js";import"./common-41d79418.js";import"./count.store-8913f849.js";import"./review.store-9627157d.js";/* empty css                                                       */import"./accordiontab.esm-8c667626.js";/* empty css                                                 */import"./common.store-f7d21913.js";import"./radiobutton.esm-d984b698.js";import"./checkbox.esm-bd3c9110.js";import"./BaseRadio-f6e5177e.js";import{a as ue,b as ve,c as N,d as L,e as w,f as k,g as _e,h as me,i as ge}from"./BasePOA-900b4634.js";import"./menu.esm-57626a7b.js";/* empty css                                                 */var fe=`
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
`,ye={root:function(p){var s=p.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},he=H.extend({name:"timeline",css:fe,classes:ye}),xe={name:"BaseTimeline",extends:X,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:he,provide:function(){return{$parentInstance:this}}},U={name:"Timeline",extends:xe,methods:{getKey:function(p,s){return this.dataKey?W.resolveFieldData(p,this.dataKey):s},getPTOptions:function(p,s){return this.ptm(p,{context:{index:s,count:this.value.length}})}}};function Ie(t,p,s,v,g,l){return m(),x("div",_({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"timeline"}),[(m(!0),x(B,null,J(t.value,function(u,o){return m(),x("div",_({key:l.getKey(u,o),class:t.cx("event")},l.getPTOptions("event",o)),[i("div",_({class:t.cx("opposite",{index:o})},l.getPTOptions("opposite",o)),[I(t.$slots,"opposite",{item:u,index:o})],16),i("div",_({class:t.cx("separator")},l.getPTOptions("separator",o)),[I(t.$slots,"marker",{item:u,index:o},function(){return[i("div",_({class:t.cx("marker")},l.getPTOptions("marker",o)),null,16)]}),o!==t.value.length-1?I(t.$slots,"connector",{key:0,item:u,index:o},function(){return[i("div",_({class:t.cx("connector")},l.getPTOptions("connector",o)),null,16)]}):O("",!0)],16),i("div",_({class:t.cx("content")},l.getPTOptions("content",o)),[I(t.$slots,"content",{item:u,index:o})],16)],16)}),128))],16)}U.render=Ie;const Ee={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},be={class:"user-avatar relative"},Ce={class:"flex flex-col ml-3 w-full"},Oe={class:"flex items-center justify-between"},Se={class:"flex items-center"},Te={class:"text-sm font-semibold text-primary-500 mx-2"},Ae=i("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),Pe={class:"text-sm font-medium text-greyscale-300 block ml-2"},Re={class:"flex items-center"},Ne=["onClick"],Le={class:"ml-1 text-greyscale-500 font-medium"},we={class:"text-sm font-semibold text-greyscale-900 mt-1"},on={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,{t:s}=Q(),v=T(""),g=T(!1),l=$(()=>{var S;const{composeModel:e}=p;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];let a=e.approvers.map(c=>({...c,type:"approvers"}));const d=(S=e==null?void 0:e.curator)!=null&&S.assistant?a.find(c=>c.user.id===e.curator.assistant):null;d&&(a=a.filter(c=>c.user.id!==d.user.id));let b=e.signers.filter(c=>c.type!==A.BASIC_SIGNER).map(c=>({...c,type:"signers"}));const n=e!=null&&e.curator?e.signers.find(c=>c.type===A.BASIC_SIGNER):null;return[{user:e.author,type:"author"},...a,...b,...d?[{...d,type:"approvers",role:"assistant"}]:[],...n?[{...n,type:"signers"}]:[]]}),u=(e,a)=>e.value[a.index].type==="author"||e.value[a.index].type==="approvers"&&e.value[a.index].is_approved===!0||e.value[a.index].type==="signers"&&e.value[a.index].is_signed===!0?"bg-success-500":e.value[a.index].type==="approvers"&&e.value[a.index].is_approved===!1||e.value[a.index].type==="signers"&&e.value[a.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",o=e=>e.type==="author"?te:e.type==="signers"?se:re,V=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),F=e=>e.type==="author"?R(p.composeModel.created_date):e.action_date?R(e.action_date):null,M=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),z=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",G=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",j=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?ie:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?ae:oe,K=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",Y=e=>{v.value=e.comment,g.value=!0};return(e,a)=>{const d=le,b=q;return m(),x(B,null,[i("div",Ee,[p.composeModel?(m(),D(y(U),{key:0,value:l.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:C})=>({class:[u(n,C),"-my-1"]})}},{marker:P(({item:n})=>[f(d,{icon:j(n),class:E(["!w-6 !h-6",K(n)])},null,8,["icon","class"])]),content:P(({item:n})=>[i("div",{class:E(["flex p-5 rounded-xl bg-white mb-3 border",G(n)])},[i("div",be,[f(b,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10"},null,8,["label","color"]),i("div",{class:E(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[f(d,{icon:n.type==="signers"&&!n.is_all_approved?y(Z):y(ee),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),i("div",Ce,[i("div",Oe,[i("div",Se,[f(d,{icon:o(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",Te,h(V(n)),1),Ae,i("span",Pe,h(F(n)),1)]),i("div",Re,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(m(),x("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:C=>Y(n)},[f(d,{icon:y(ne),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",Le,h(y(s)("reason")),1)],8,Ne)):O("",!0),i("div",{class:E(["text-xs font-semibold px-2 py-[2px] rounded-lg border",z(n)])},h(M(n)),3)])]),i("div",we,h(n==null?void 0:n.user.full_name),1)])],2)]),_:1},8,["value","pt"])):O("",!0)]),f(y(de),{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=n=>g.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":v.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},ln={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,s=pe(),v={[r.SERVICE_LETTER]:N,[r.BUSINESS_TRIP]:L,[r.BUSINESS_TRIP_ORDER]:w,[r.ORDINARY_NOTICE]:k,[r.BUSINESS_TRIP_DECREE_FOREIGN]:_e,[r.BUSINESS_TRIP]:L,[r.BUSINESS_TRIP_DECREE_LOCAL]:me,[r.BUSINESS_TRIP_ORDER_LOCAL]:ge,[r.NOTICE_FOR_EMPLOYMENT]:k,[r.ORDER_FOR_EMPLOYMENT]:w,APPLICATION:[r.LABOR_LEAVE,r.CHILD_CARE_LEAVE,r.VACATION_OWN_EXPENSE,r.EDUCATIONAL_LEAVE,r.MATERIAL_SUPPORT,r.APPLICATION],POA:[r.POA_FOR_LEGAL_SERVICES,r.POA_ACTING_FILIAL_MANAGER,r.POA_DEPUTY_FILIAL_MANAGER]},g=$(()=>{const l=s.params.document_sub_type;return v.APPLICATION.includes(l)?ue:v.POA.includes(l)?ve:v[l]||N});return(l,u)=>(m(),D(ce(g.value),{"compose-model":p.composeModel},null,8,["compose-model"]))}};export{on as _,ln as a};
