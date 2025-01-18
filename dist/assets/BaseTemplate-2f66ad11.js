import{_ as H}from"./BaseAvatar-277f956c.js";import{B as q,aH as Q,s as W,o as m,c as x,F as B,e as X,m as _,a as i,r as I,g as C,u as J,v as O,d as $,d0 as P,f as V,z as A,i as f,n as E,h as y,d1 as Z,bV as ee,t as h,d2 as ne,bU as te,bp as se,d3 as re,ar as ie,aQ as ae,d4 as oe,_ as le,ay as pe,cb as r,E as ce}from"./index-8b1f1dd2.js";import{d as R}from"./formatDate-42a30f71.js";import{_ as de}from"./Dropdown-25fab946.js";import"./dialog.esm-062bc1f2.js";import"./axios.config-d5a7d447.js";import"./dayjs.min-56b72c27.js";import"./index-43a182c8.js";/* empty css                                                                       */import"./textarea.esm-1858e2fd.js";import"./inputtext.esm-7f82a9f1.js";/* empty css                                                  */import"./ShortDescription-dc5b719e.js";import"./common-e4f549e7.js";import"./count.store-af1ae8d8.js";import"./review.store-9381f0a1.js";/* empty css                                                       */import"./accordiontab.esm-d2804d3f.js";/* empty css                                                 */import"./common.store-fdab35a4.js";import"./radiobutton.esm-cd72c5d6.js";import"./checkbox.esm-6982fe23.js";import"./BaseRadio-1be0f3c4.js";import{a as N,b as L,c as w,d as k,e as ue,f as ve,g as _e,h as me,i as ge,j as fe}from"./BasePOA-e5aeca6f.js";import"./index.store-38491e15.js";import"./qrcode.vue.esm-620acb5d.js";/* empty css                                                                               */import"./menu.esm-8cbc9624.js";/* empty css                                                 */var ye=`
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
`,he={root:function(p){var s=p.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},xe=q.extend({name:"timeline",css:ye,classes:he}),Ie={name:"BaseTimeline",extends:W,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:xe,provide:function(){return{$parentInstance:this}}},D={name:"Timeline",extends:Ie,methods:{getKey:function(p,s){return this.dataKey?Q.resolveFieldData(p,this.dataKey):s},getPTOptions:function(p,s){return this.ptm(p,{context:{index:s,count:this.value.length}})}}};function Ee(t,p,s,v,g,l){return m(),x("div",_({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"timeline"}),[(m(!0),x(B,null,X(t.value,function(u,o){return m(),x("div",_({key:l.getKey(u,o),class:t.cx("event")},l.getPTOptions("event",o)),[i("div",_({class:t.cx("opposite",{index:o})},l.getPTOptions("opposite",o)),[I(t.$slots,"opposite",{item:u,index:o})],16),i("div",_({class:t.cx("separator")},l.getPTOptions("separator",o)),[I(t.$slots,"marker",{item:u,index:o},function(){return[i("div",_({class:t.cx("marker")},l.getPTOptions("marker",o)),null,16)]}),o!==t.value.length-1?I(t.$slots,"connector",{key:0,item:u,index:o},function(){return[i("div",_({class:t.cx("connector")},l.getPTOptions("connector",o)),null,16)]}):C("",!0)],16),i("div",_({class:t.cx("content")},l.getPTOptions("content",o)),[I(t.$slots,"content",{item:u,index:o})],16)],16)}),128))],16)}D.render=Ee;const be={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},Se={class:"user-avatar relative"},Ce={class:"flex flex-col ml-3 w-full"},Te={class:"flex items-center justify-between"},Oe={class:"flex items-center"},Pe={class:"text-sm font-semibold text-primary-500 mx-2"},Ae=i("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),Re={class:"text-sm font-medium text-greyscale-300 block ml-2"},Ne={class:"flex items-center"},Le=["onClick"],we={class:"ml-1 text-greyscale-500 font-medium"},ke={class:"text-sm font-semibold text-greyscale-900 mt-1"},dn={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,{t:s}=J(),v=O(""),g=O(!1),l=$(()=>{var T;const{composeModel:e}=p;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];let a=e.approvers.map(c=>({...c,type:"approvers"}));const d=(T=e==null?void 0:e.curator)!=null&&T.assistant?a.find(c=>c.user.id===e.curator.assistant):null;d&&(a=a.filter(c=>c.user.id!==d.user.id));let b=e.signers.filter(c=>c.type!==P.BASIC_SIGNER).map(c=>({...c,type:"signers"}));const n=e!=null&&e.curator?e.signers.find(c=>c.type===P.BASIC_SIGNER):null;return[{user:e.author,type:"author"},...a,...b,...d?[{...d,type:"approvers",role:"assistant"}]:[],...n?[{...n,type:"signers"}]:[]]}),u=(e,a)=>e.value[a.index].type==="author"||e.value[a.index].type==="approvers"&&e.value[a.index].is_approved===!0||e.value[a.index].type==="signers"&&e.value[a.index].is_signed===!0?"bg-success-500":e.value[a.index].type==="approvers"&&e.value[a.index].is_approved===!1||e.value[a.index].type==="signers"&&e.value[a.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",o=e=>e.type==="author"?te:e.type==="signers"?se:re,U=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),M=e=>e.type==="author"?R(p.composeModel.created_date):e.action_date?R(e.action_date):null,F=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),z=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",j=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",G=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?ie:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?ae:oe,K=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",Y=e=>{v.value=e.comment,g.value=!0};return(e,a)=>{const d=le,b=H;return m(),x(B,null,[i("div",be,[p.composeModel?(m(),V(y(D),{key:0,value:l.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:S})=>({class:[u(n,S),"-my-1"]})}},{marker:A(({item:n})=>[f(d,{icon:G(n),class:E(["!w-6 !h-6",K(n)])},null,8,["icon","class"])]),content:A(({item:n})=>[i("div",{class:E(["flex p-5 rounded-xl bg-white mb-3 border",j(n)])},[i("div",Se,[f(b,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10"},null,8,["label","color"]),i("div",{class:E(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[f(d,{icon:n.type==="signers"&&!n.is_all_approved?y(Z):y(ee),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),i("div",Ce,[i("div",Te,[i("div",Oe,[f(d,{icon:o(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",Pe,h(U(n)),1),Ae,i("span",Re,h(M(n)),1)]),i("div",Ne,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(m(),x("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:S=>Y(n)},[f(d,{icon:y(ne),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),i("span",we,h(y(s)("reason")),1)],8,Le)):C("",!0),i("div",{class:E(["text-xs font-semibold px-2 py-[2px] rounded-lg border",z(n)])},h(F(n)),3)])]),i("div",ke,h(n==null?void 0:n.user.full_name),1)])],2)]),_:1},8,["value","pt"])):C("",!0)]),f(y(de),{modelValue:g.value,"onUpdate:modelValue":a[0]||(a[0]=n=>g.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":v.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},un={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,s=pe(),v={[r.SERVICE_LETTER]:N,[r.BUSINESS_TRIP]:L,[r.BUSINESS_TRIP_ORDER]:w,[r.ORDINARY_NOTICE]:k,[r.BUSINESS_TRIP_DECREE_V2]:ue,[r.BUSINESS_TRIP]:L,[r.BUSINESS_TRIP_DECREE_LOCAL]:ve,[r.BUSINESS_TRIP_ORDER_LOCAL]:_e,[r.NOTICE_FOR_EMPLOYMENT]:k,[r.ORDER_FOR_EMPLOYMENT]:w,[r.BUSINESS_TRIP_NOTICE_V2]:me,APPLICATION:[r.LABOR_LEAVE,r.CHILD_CARE_LEAVE,r.VACATION_OWN_EXPENSE,r.EDUCATIONAL_LEAVE,r.MATERIAL_SUPPORT,r.APPLICATION],POA:[r.POA_FOR_LEGAL_SERVICES,r.POA_ACTING_FILIAL_MANAGER,r.POA_DEPUTY_FILIAL_MANAGER]},g=$(()=>{const l=s.params.document_sub_type;return v.APPLICATION.includes(l)?ge:v.POA.includes(l)?fe:v[l]||N});return(l,u)=>(m(),V(ce(g.value),{"compose-model":p.composeModel},null,8,["compose-model"]))}};export{dn as _,un as a};
