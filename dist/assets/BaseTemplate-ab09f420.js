import{by as M,X as Q,aA as ee,cs as z,ct as te,ar as Y,u as ne,t as q,E as L,aZ as se,x as j,az as oe,a_ as re,a$ as T,ah as ie,f as ae,o as d,k as g,i as n,p as h,A as C,q as i,j as b,n as $,g as S,aL as G,F as B,y as W,h as le,z as E,w as V,l as X,D as J,B as ce,aC as pe,e as ue,m as I,cB as U,cC as de,cD as ve,bx as me,bz as _e,cE as fe,al as ye,cF as he,bX as _}from"./index-a171d93f.js";import{_ as ge}from"./BaseTabMenu-7cadc300.js";import{_ as xe}from"./dynamic-import-helper-be004503.js";import{u as be}from"./index.store-715efdea.js";import we from"./FileTabs-3f0c02eb.js";import{_ as Ie}from"./BackButton-34f87661.js";import{J as Ce}from"./index-71c0c86b.js";import{b as N}from"./formatDate-06bebc81.js";import{_ as Ee}from"./BaseAvatar-39ab1a60.js";import{_ as Te}from"./Dropdown-fa360474.js";import"./dialog.esm-b116fda7.js";import"./axios.config-5040eb4e.js";import"./dayjs.min-7fc53eb0.js";/* empty css                                                                       */import"./textarea.esm-8350c826.js";import"./inputtext.esm-c4772b3e.js";/* empty css                                                  */import"./divider.esm-7684e2f6.js";import"./common-0a886be1.js";import"./review.store-b8b88b8e.js";import"./WithSelectable.vue_vue_type_style_index_0_lang-57e98f8c.js";/* empty css                                                 */import"./radiobutton.esm-02cb1f11.js";import"./checkbox.esm-3235e002.js";import{_ as K,a as $e,b as Oe,c as Se,d as Pe,e as Ae}from"./DecreeTemplate-cb61c981.js";import"./menu.esm-6ab1263f.js";/* empty css                                                 */const De={class:"grid-with-tabs-view flex flex-col flex-1 h-full"},Re={key:0,class:"flex items-center justify-between h-10 mb-5"},ke={class:"flex items-center gap-3"},Le={class:"font-bold text-xl text-primary-900"},Ve={class:"flex items-center gap-2"},Ne={class:"detail-layout-content flex flex-col flex-1 bg-white overflow-hidden shadow-button rounded-2xl"},je={class:"flex justify-between border-b"},Be={key:0,class:"flex flex-col max-w-[690px] w-full border-l px-5"},He={class:"flex justify-between relative"},Fe={class:"flex gap-x-3 overflow-x-auto h-full"},ze=["onClick"],Ue={class:"flex flex-col gap-y-1 h-full items-center"},Ke={class:"flex flex-1"},Me={class:"flex-1 overflow-y-auto"},Ye={class:"h-[1px]"},qe={class:"max-w-[690px] w-full ml-auto border-l"},jt={__name:"LayoutWithTabsCompose",props:{title:{type:String,default:""},toolbar:{type:Boolean,default:!0},tabItems:{type:Array,default:()=>[{label:"Просмотр",name:"Preview",icon:M,slot:"preview",component:"Preview",count:null},{label:"История",name:"History",icon:Q,slot:"history",component:"History",count:null},{label:"Комментарии",name:"Comments",icon:ee,slot:"comments",component:"Comments",count:2},{label:"Файлы",name:"Files",icon:z,slot:"files",component:"Files"}]},previewDetail:{type:Object,default:()=>{}},objectId:{type:Number},headers:{type:Array,default:()=>[]},resolution:{type:Object,default:()=>{}},treeItems:{type:Object,default:()=>{}},contentType:{type:Number,default:te.DOC_FLOW},files:{type:Array,default:()=>[]}},setup(r){const o=r;Y(),ne();const{t:s}=q(),u=be(),f=L(0),p=se(null),v=j(()=>o.tabItems[f.value]);oe(v,l=>{p.value=re({loader:()=>xe(Object.assign({"./components/Comments.vue":()=>T(()=>import("./Comments-6133ec46.js"),["assets/Comments-6133ec46.js","assets/index-a171d93f.js","assets/index-8bbaef00.css","assets/axios.config-5040eb4e.js","assets/BaseTextarea-05c4c29b.js","assets/BaseLabel-29d15c88.js","assets/textarea.esm-8350c826.js","assets/BaseAvatar-39ab1a60.js","assets/avatar.esm-41e741c9.js","assets/BaseIcon-f8a25d56.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-0a886be1.js","assets/index-71c0c86b.js","assets/dayjs.min-7fc53eb0.js","assets/collect-requests.store-20f35715.js","assets/index-d1cfd4dd.js","assets/index-ac99bf4a.js","assets/formatDate-06bebc81.js","assets/Comments-c9eba824.css"]),"./components/FileTabs.vue":()=>T(()=>import("./FileTabs-3f0c02eb.js"),["assets/FileTabs-3f0c02eb.js","assets/BaseTabView-350d92d8.js","assets/BaseDialog-11a28e2a.js","assets/dialog.esm-b116fda7.js","assets/index-a171d93f.js","assets/index-8bbaef00.css","assets/tabpanel.esm-10d3411f.js","assets/index.esm-493851db.js","assets/index.esm-3ce4cc9f.js","assets/Preview-0ecdad2d.js","assets/index-71c0c86b.js","assets/dayjs.min-7fc53eb0.js","assets/axios.config-5040eb4e.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/BaseTabView-64f3195f.css","assets/FileTabs-9e37c7e7.css"]),"./components/Files.vue":()=>T(()=>import("./Files-aefd4fc3.js"),["assets/Files-aefd4fc3.js","assets/BaseDialog-11a28e2a.js","assets/dialog.esm-b116fda7.js","assets/index-a171d93f.js","assets/index-8bbaef00.css","assets/Card-c7dc9320.js","assets/datatable.esm-23c62c9a.js","assets/dropdown.esm-c8108c23.js","assets/virtualscroller.esm-3974f88e.js","assets/overlayeventbus.esm-787a4b68.js","assets/inputtext.esm-c4772b3e.js","assets/index.esm-3ce4cc9f.js","assets/pagination.store-15e4f81e.js","assets/Group-9254ca62.css","assets/avatar.esm-41e741c9.js","assets/common-0a886be1.js","assets/axios.config-5040eb4e.js","assets/index-71c0c86b.js","assets/dayjs.min-7fc53eb0.js","assets/collect-requests.store-20f35715.js","assets/Preview-0ecdad2d.js","assets/formatDate-06bebc81.js","assets/BaseIcon-47d683d1.css"]),"./components/History.vue":()=>T(()=>import("./History-16fa1a2f.js"),["assets/History-16fa1a2f.js","assets/BaseAvatar-39ab1a60.js","assets/avatar.esm-41e741c9.js","assets/index-a171d93f.js","assets/index-8bbaef00.css","assets/BaseIcon-f8a25d56.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-0a886be1.js","assets/axios.config-5040eb4e.js","assets/index-71c0c86b.js","assets/dayjs.min-7fc53eb0.js","assets/collect-requests.store-20f35715.js","assets/Card-c7dc9320.js","assets/datatable.esm-23c62c9a.js","assets/dropdown.esm-c8108c23.js","assets/virtualscroller.esm-3974f88e.js","assets/overlayeventbus.esm-787a4b68.js","assets/inputtext.esm-c4772b3e.js","assets/index.esm-3ce4cc9f.js","assets/pagination.store-15e4f81e.js","assets/Group-9254ca62.css","assets/dialog.esm-b116fda7.js","assets/formatDate-06bebc81.js"]),"./components/Preview.vue":()=>T(()=>import("./Preview-94275afc.js"),["assets/Preview-94275afc.js","assets/Users-bf8415c3.js","assets/index-a171d93f.js","assets/index-8bbaef00.css","assets/BaseAvatar-39ab1a60.js","assets/avatar.esm-41e741c9.js","assets/BaseIcon-f8a25d56.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-0a886be1.js","assets/axios.config-5040eb4e.js","assets/index-71c0c86b.js","assets/dayjs.min-7fc53eb0.js","assets/collect-requests.store-20f35715.js","assets/WithSelectable.vue_vue_type_style_index_0_lang-57e98f8c.js","assets/virtualscroller.esm-3974f88e.js","assets/index.esm-3ce4cc9f.js","assets/WithSelectable-cbaef144.css","assets/Status-958c5cf1.js","assets/props-0f833b60.js","assets/formatDate-06bebc81.js","assets/radiobutton.esm-02cb1f11.js","assets/checkbox.esm-3235e002.js","assets/FieldGroups-7596e48e.js","assets/BaseRow-bde047b3.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/BaseCol-e6f5a2bf.js","assets/BaseAvatarGroup-64f667da.js","assets/BaseLabel-29d15c88.js","assets/Priority-c5146c00.js"]),"./components/Resolution.vue":()=>T(()=>import("./Resolution-6efc227d.js"),["assets/Resolution-6efc227d.js","assets/formatDate-06bebc81.js","assets/dayjs.min-7fc53eb0.js","assets/index-a171d93f.js","assets/index-8bbaef00.css","assets/index-71c0c86b.js","assets/axios.config-5040eb4e.js","assets/index.store-715efdea.js","assets/index-c4c1f2d4.js","assets/common-0a886be1.js","assets/collect-requests.store-20f35715.js","assets/qrcode.vue.esm-651f83e3.js","assets/Dropdown-fa360474.js","assets/BaseDialog-11a28e2a.js","assets/dialog.esm-b116fda7.js","assets/BaseMenu-79fa8018.js","assets/menu.esm-6ab1263f.js","assets/overlayeventbus.esm-787a4b68.js","assets/BaseMenu-03958651.css","assets/BaseIcon-f8a25d56.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/BaseTextarea-05c4c29b.js","assets/BaseLabel-29d15c88.js","assets/textarea.esm-8350c826.js","assets/BaseFroalaEditor-5a4d8e01.js","assets/BaseFroalaEditor.vue_vue_type_style_index_0_lang-a077a2af.js","assets/BaseFroalaEditor-950bc6c5.css","assets/index-1bce5a6d.js","assets/inputtext.esm-c4772b3e.js","assets/divider.esm-7684e2f6.js","assets/review.store-b8b88b8e.js","assets/review.service-e913e5a3.js","assets/avatar.esm-41e741c9.js","assets/WithSelectable.vue_vue_type_style_index_0_lang-57e98f8c.js","assets/virtualscroller.esm-3974f88e.js","assets/index.esm-3ce4cc9f.js","assets/WithSelectable-cbaef144.css","assets/radiobutton.esm-02cb1f11.js","assets/checkbox.esm-3235e002.js","assets/BaseRow-bde047b3.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/WithLabel-b5ddb59d.js","assets/multiselect.esm-912f9df9.js","assets/index.esm-a9561125.js","assets/index-ac99bf4a.js","assets/BaseAvatar-39ab1a60.js","assets/props-0f833b60.js","assets/BaseMultiSelect-f9ba1bd2.css","assets/BaseCalendar-abc31109.js","assets/index.esm-493851db.js","assets/BaseCalendar-fdcdcd76.css","assets/BaseCol-e6f5a2bf.js","assets/BaseDropdown-a8d254e2.js","assets/dropdown.esm-c8108c23.js","assets/BaseDropdown-d9d38010.css","assets/Status-958c5cf1.js","assets/WithSelectable-a9d9f70c.js","assets/constants-5c471c97.js","assets/BaseFileUpload-51d934af.css","assets/BaseInput-c31e9403.css","assets/sqb-logo-ddc3d0ce.js","assets/logo-text-7b3f2522.js","assets/Users-bf8415c3.js"])}),`./components/${l==null?void 0:l.component}.vue`),loadingComponent:ie,delay:200})},{immediate:!0});const a=async l=>{u.versionHistoryList.forEach(w=>w.active=w.id===l.id),u.historyContent=Ce(l.old_text,l.new_text),u.historyShow=!0},P=()=>{u.historyShow=!1,u.versionHistoryList.forEach(l=>l.active=!1)};return(l,w)=>{const A=ge,O=J,D=ae("tooltip");return d(),g("div",De,[o.toolbar?(d(),g("div",Re,[n("div",ke,[h(Ie),n("h1",Le,C(o.title?i(s)(o.title):i(s)("title-document")),1)]),n("div",Ve,[b(l.$slots,"header-end")])])):$("",!0),n("div",Ne,[b(l.$slots,"content",{},()=>[n("div",je,[h(A,{modelValue:f.value,"onUpdate:modelValue":w[0]||(w[0]=y=>f.value=y),"tab-items":o.tabItems},null,8,["modelValue","tab-items"]),i(u).versionHistoryList.length?(d(),g("div",Be,[n("div",He,[i(u).historyShow?(d(),S(O,{key:0,icon:i(G),class:"text-critic-500 cursor-pointer !w-8 !h-8 absolute right-0 top-2",onClick:P},null,8,["icon"])):$("",!0)]),n("div",Fe,[(d(!0),g(B,null,W(i(u).versionHistoryList,y=>le((d(),g("div",{class:E(["flex justify-center items-center cursor-pointer w-12 h-full",y.active?"border-b-2 border-primary-500":"border-b-2"]),onClick:H=>a(y)},[n("div",Ue,[n("div",{class:E(["text-[10px]",y.active?"text-primary-500":"text-greyscale-900"])},C(i(s)("updated")),3),h(O,{icon:i(z),class:E(["text-greyscale-900 !w-4 !h-4",y.active?"text-primary-500":"text-greyscale-500"])},null,8,["icon","class"])])],10,ze)),[[D,{value:`<h4 class='text-xs text-white -my-1 !w-[250px]'> ${i(s)("change-history")} <br> ${i(s)("author")}: ${y.created_by.full_name} <br> ${i(s)("change-time")}: ${i(N)(y.created_date)}</h4>`,escape:!0,autoHide:!1},void 0,{top:!0}]])),256))])])):$("",!0)]),n("div",Ke,[b(l.$slots,v.value.slot,{},()=>[n("div",Me,[n("div",Ye,[(d(),S(X(p.value),{"preview-detail":o.previewDetail,"object-id":o.objectId,headers:o.headers,"tree-items":o.treeItems,"content-type":o.contentType,files:o.files},{"preview-actions":V(()=>[b(l.$slots,"preview-actions")]),_:3},8,["preview-detail","object-id","headers","tree-items","content-type","files"]))])])]),n("div",qe,[b(l.$slots,"template",{},()=>[h(we,{resolution:o.resolution},null,8,["resolution"])])])])])])])}}};var Ge=`
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
`,We={root:function(o){var s=o.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},Xe=ce.extend({name:"timeline",css:Ge,classes:We}),Je={name:"BaseTimeline",extends:ue,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Xe,provide:function(){return{$parentInstance:this}}},Z={name:"Timeline",extends:Je,methods:{getKey:function(o,s){return this.dataKey?pe.resolveFieldData(o,this.dataKey):s},getPTOptions:function(o,s){return this.ptm(o,{context:{index:s,count:this.value.length}})}}};function Ze(r,o,s,u,f,p){return d(),g("div",I({class:r.cx("root")},r.ptm("root"),{"data-pc-name":"timeline"}),[(d(!0),g(B,null,W(r.value,function(v,a){return d(),g("div",I({key:p.getKey(v,a),class:r.cx("event")},p.getPTOptions("event",a)),[n("div",I({class:r.cx("opposite",{index:a})},p.getPTOptions("opposite",a)),[b(r.$slots,"opposite",{item:v,index:a})],16),n("div",I({class:r.cx("separator")},p.getPTOptions("separator",a)),[b(r.$slots,"marker",{item:v,index:a},function(){return[n("div",I({class:r.cx("marker")},p.getPTOptions("marker",a)),null,16)]}),a!==r.value.length-1?b(r.$slots,"connector",{key:0,item:v,index:a},function(){return[n("div",I({class:r.cx("connector")},p.getPTOptions("connector",a)),null,16)]}):$("",!0)],16),n("div",I({class:r.cx("content")},p.getPTOptions("content",a)),[b(r.$slots,"content",{item:v,index:a})],16)],16)}),128))],16)}Z.render=Ze;const Qe={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},et={class:"user-avatar relative"},tt={class:"flex flex-col ml-3 w-full"},nt={class:"flex items-center justify-between"},st={class:"flex items-center"},ot={class:"text-sm font-semibold text-primary-500 mx-2"},rt=n("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),it={class:"text-sm font-medium text-greyscale-300 block ml-2"},at={class:"flex items-center"},lt=["onClick"],ct={class:"ml-1 text-greyscale-500 font-medium"},pt={class:"text-sm font-semibold text-greyscale-900 mt-1"},Bt={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const o=r,{t:s}=q(),u=L(""),f=L(!1),p=j(()=>{var F;const{composeModel:e}=o;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];let c=e.approvers.map(m=>({...m,type:"approvers"}));const x=(F=e==null?void 0:e.curator)!=null&&F.assistant?c.find(m=>m.user.id===e.curator.assistant):null;x&&(c=c.filter(m=>m.user.id!==x.user.id));let R=e.signers.filter(m=>m.type!==U.BASIC_SIGNER).map(m=>({...m,type:"signers"}));const t=e!=null&&e.curator?e.signers.find(m=>m.type===U.BASIC_SIGNER):null;return[{user:e.author,type:"author"},...c,...R,...x?[{...x,type:"approvers",role:"assistant"}]:[],...t?[{...t,type:"signers"}]:[]]}),v=(e,c)=>e.value[c.index].type==="author"||e.value[c.index].type==="approvers"&&e.value[c.index].is_approved===!0||e.value[c.index].type==="signers"&&e.value[c.index].is_signed===!0?"bg-success-500":e.value[c.index].type==="approvers"&&e.value[c.index].is_approved===!1||e.value[c.index].type==="signers"&&e.value[c.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",a=e=>e.type==="author"?me:e.type==="signers"?_e:fe,P=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),l=e=>e.type==="author"?N(o.composeModel.created_date):e.action_date?N(e.action_date):null,w=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),A=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",O=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",D=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?ye:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?G:he,y=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",H=e=>{u.value=e.comment,f.value=!0};return(e,c)=>{const x=J,R=Ee;return d(),g(B,null,[n("div",Qe,[o.composeModel?(d(),S(i(Z),{key:0,value:p.value,pt:{opposite:{class:["hidden"]},connector:({props:t,context:k})=>({class:[v(t,k),"-my-1"]})}},{marker:V(({item:t})=>[h(x,{icon:D(t),class:E(["!w-6 !h-6",y(t)])},null,8,["icon","class"])]),content:V(({item:t})=>[n("div",{class:E(["flex p-5 rounded-xl bg-white mb-3 border",O(t)])},[n("div",et,[h(R,{label:t==null?void 0:t.user.first_name,color:t==null?void 0:t.user.color,shape:"circle","avatar-classes":"w-10 h-10"},null,8,["label","color"]),n("div",{class:E(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",t.type==="signers"&&!t.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[h(x,{icon:t.type==="signers"&&!t.is_all_approved?i(de):i(M),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),n("div",tt,[n("div",nt,[n("div",st,[h(x,{icon:a(t),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),n("span",ot,C(P(t)),1),rt,n("span",it,C(l(t)),1)]),n("div",at,[(t.is_approved===!1||t.is_signed===!1)&&t.comment?(d(),g("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:k=>H(t)},[h(x,{icon:i(ve),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),n("span",ct,C(i(s)("reason")),1)],8,lt)):$("",!0),n("div",{class:E(["text-xs font-semibold px-2 py-[2px] rounded-lg border",A(t)])},C(w(t)),3)])]),n("div",pt,C(t==null?void 0:t.user.full_name),1)])],2)]),_:1},8,["value","pt"])):$("",!0)]),h(i(Te),{modelValue:f.value,"onUpdate:modelValue":c[0]||(c[0]=t=>f.value=t),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":u.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},Ht={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const o=r,s=Y(),u={[_.SERVICE_LETTER]:K,[_.BUSINESS_TRIP]:$e,[_.BUSINESS_TRIP_ORDER]:Oe,[_.ORDINARY_NOTICE]:Se,[_.ORDINARY_DECREE]:Pe},f=j(()=>{const p=s.params.document_sub_type;return[_.LABOR_LEAVE,_.CHILD_CARE_LEAVE,_.VACATION_OWN_EXPENSE,_.EDUCATIONAL_LEAVE,_.MATERIAL_SUPPORT,_.APPLICATION].includes(p)?Ae:u[s.params.document_sub_type]||K});return(p,v)=>(d(),S(X(f.value),{"compose-model":o.composeModel},null,8,["compose-model"]))}};export{Bt as _,Ht as a,jt as b};
