import{_ as q}from"./BaseAvatar.67e59452.8857.js";import{B as H,aJ as X,s as J,o as m,c as E,F as B,e as W,m as _,a,r as b,g as T,u as Q,v as O,d as $,d3 as P,f as D,z as A,i as f,n as S,h as y,d4 as Z,bY as ee,t as I,d5 as ne,bX as te,bs as se,d6 as re,aq as ae,aS as ie,d7 as oe,_ as le,ax as pe,ce as r,E as ce}from"./index.8699cd1f.8512.js";import{d as R}from"./formatDate.71c65e07.8857.js";import{_ as de}from"./Dropdown.cd84c1d4.8857.js";import"./dialog.esm.5ce629b1.8857.js";import"./axios.config.85a76220.8857.js";import"./FileSaver.min.071a04c4.8857.js";import"./dayjs.min.7ae2ffbc.8857.js";import"./index.es6.f9050ba3.8857.js";/* empty css                                                                            */import"./textarea.esm.ec9be335.8857.js";import"./inputtext.esm.a5fcef11.8857.js";/* empty css                                                       */import"./ShortDescription.b10acc96.8857.js";import"./common.55813188.8857.js";import"./count.store.ece00273.8857.js";import"./review.store.0421ef86.8857.js";/* empty css                                                            */import"./accordiontab.esm.b633217a.8857.js";/* empty css                                                      */import"./common.store.102a0104.8857.js";import"./radiobutton.esm.372e8d98.8857.js";import"./checkbox.esm.6a725cb9.8857.js";import"./BaseRadio.ec701090.8857.js";import{a as N,b as L,c as w,d as k,e as ue,f as ve,g as _e,h as me,i as ge,j as fe}from"./BasePOA.ae3f6dc3.8857.js";import"./index.store.4e7a1fc5.8857.js";import"./qrcode.vue.esm.570419bd.8857.js";/* empty css                                                                                    */import"./menu.esm.463c26f5.8857.js";/* empty css                                                      */var ye=`
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
`,he={root:function(p){var s=p.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},xe=H.extend({name:"timeline",css:ye,classes:he}),Ie={name:"BaseTimeline",extends:J,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:xe,provide:function(){return{$parentInstance:this}}},V={name:"Timeline",extends:Ie,methods:{getKey:function(p,s){return this.dataKey?X.resolveFieldData(p,this.dataKey):s},getPTOptions:function(p,s){return this.ptm(p,{context:{index:s,count:this.value.length}})}}};function Ee(t,p,s,v,g,l){return m(),E("div",_({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"timeline"}),[(m(!0),E(B,null,W(t.value,function(u,o){return m(),E("div",_({key:l.getKey(u,o),class:t.cx("event")},l.getPTOptions("event",o)),[a("div",_({class:t.cx("opposite",{index:o})},l.getPTOptions("opposite",o)),[b(t.$slots,"opposite",{item:u,index:o})],16),a("div",_({class:t.cx("separator")},l.getPTOptions("separator",o)),[b(t.$slots,"marker",{item:u,index:o},function(){return[a("div",_({class:t.cx("marker")},l.getPTOptions("marker",o)),null,16)]}),o!==t.value.length-1?b(t.$slots,"connector",{key:0,item:u,index:o},function(){return[a("div",_({class:t.cx("connector")},l.getPTOptions("connector",o)),null,16)]}):T("",!0)],16),a("div",_({class:t.cx("content")},l.getPTOptions("content",o)),[b(t.$slots,"content",{item:u,index:o})],16)],16)}),128))],16)}V.render=Ee;const be={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},Se={class:"user-avatar relative"},Ce={class:"flex flex-col ml-3 w-full"},Te={class:"flex items-center justify-between"},Oe={class:"flex items-center"},Pe={class:"text-sm font-semibold text-primary-500 mx-2"},Ae=a("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),Re={class:"text-sm font-medium text-greyscale-300 block ml-2"},Ne={class:"flex items-center"},Le=["onClick"],we={class:"ml-1 text-greyscale-500 font-medium"},ke={class:"text-sm font-semibold text-greyscale-900 mt-1"},un={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,{t:s}=Q(),v=O(""),g=O(!1),l=$(()=>{var x;const{composeModel:e}=p;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];let i=e.approvers.map(c=>({...c,type:"approvers"}));const d=(x=e==null?void 0:e.curator)!=null&&x.assistant?i.find(c=>c.user.id===e.curator.assistant):null;d&&(i=i.filter(c=>c.user.id!==d.user.id));let C=e.signers.filter(c=>c.type!==P.BASIC_SIGNER).map(c=>({...c,type:"signers"}));const n=e!=null&&e.curator?e.signers.find(c=>c.type===P.BASIC_SIGNER):null;return[{user:e.author,type:"author"},...i,...C,...d?[{...d,type:"approvers",role:"assistant"}]:[],...n?[{...n,type:"signers"}]:[]]}),u=(e,i)=>e.value[i.index].type==="author"||e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!0||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!0?"bg-success-500":e.value[i.index].type==="approvers"&&e.value[i.index].is_approved===!1||e.value[i.index].type==="signers"&&e.value[i.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",o=e=>e.type==="author"?te:e.type==="signers"?se:re,U=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),M=e=>e.type==="author"?R(p.composeModel.created_date):e.action_date?R(e.action_date):null,F=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),z=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",j=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",G=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?ae:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?ie:oe,Y=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",K=e=>{v.value=e.comment,g.value=!0};return(e,i)=>{const d=le,C=q;return m(),E(B,null,[a("div",be,[p.composeModel?(m(),D(y(V),{key:0,value:l.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:h})=>({class:[u(n,h),"-my-1"]})}},{marker:A(({item:n})=>[f(d,{icon:G(n),class:S(["!w-6 !h-6",Y(n)])},null,8,["icon","class"])]),content:A(({item:n})=>{var h,x;return[a("div",{class:S(["flex p-5 rounded-xl bg-white mb-3 border",j(n)])},[a("div",Se,[f(C,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10",image:(x=(h=n==null?void 0:n.user)==null?void 0:h.avatar)==null?void 0:x.url},null,8,["label","color","image"]),a("div",{class:S(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[f(d,{icon:n.type==="signers"&&!n.is_all_approved?y(Z):y(ee),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),a("div",Ce,[a("div",Te,[a("div",Oe,[f(d,{icon:o(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),a("span",Pe,I(U(n)),1),Ae,a("span",Re,I(M(n)),1)]),a("div",Ne,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(m(),E("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:c=>K(n)},[f(d,{icon:y(ne),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),a("span",we,I(y(s)("reason")),1)],8,Le)):T("",!0),a("div",{class:S(["text-xs font-semibold px-2 py-[2px] rounded-lg border",z(n)])},I(F(n)),3)])]),a("div",ke,I(n==null?void 0:n.user.full_name),1)])],2)]}),_:1},8,["value","pt"])):T("",!0)]),f(y(de),{modelValue:g.value,"onUpdate:modelValue":i[0]||(i[0]=n=>g.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":v.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},vn={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(t){const p=t,s=pe(),v={[r.SERVICE_LETTER]:N,[r.BUSINESS_TRIP]:L,[r.BUSINESS_TRIP_ORDER]:w,[r.ORDINARY_NOTICE]:k,[r.BUSINESS_TRIP_DECREE_V2]:ue,[r.BUSINESS_TRIP]:L,[r.BUSINESS_TRIP_DECREE_LOCAL]:ve,[r.BUSINESS_TRIP_ORDER_LOCAL]:_e,[r.NOTICE_FOR_EMPLOYMENT]:k,[r.ORDER_FOR_EMPLOYMENT]:w,[r.BUSINESS_TRIP_NOTICE_V2]:me,APPLICATION:[r.LABOR_LEAVE,r.CHILD_CARE_LEAVE,r.VACATION_OWN_EXPENSE,r.EDUCATIONAL_LEAVE,r.MATERIAL_SUPPORT,r.APPLICATION],POA:[r.POA_FOR_LEGAL_SERVICES,r.POA_ACTING_FILIAL_MANAGER,r.POA_DEPUTY_FILIAL_MANAGER]},g=$(()=>{const l=s.params.document_sub_type;return v.APPLICATION.includes(l)?ge:v.POA.includes(l)?fe:v[l]||N});return(l,u)=>(m(),D(ce(g.value),{"compose-model":p.composeModel},null,8,["compose-model"]))}};export{un as _,vn as a};
