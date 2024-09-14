import{by as M,X as Q,aA as ee,cs as z,bc as te,ct as ne,ar as W,u as se,t as Y,E as L,aZ as oe,x as B,az as re,a_ as ie,a$ as w,ah as le,f as ae,o as d,k as g,i as n,p as h,A as E,q as i,j as b,n as $,g as O,aL as q,F as j,y as G,h as ce,z as T,w as V,l as X,D as J,B as pe,aC as ue,e as de,m as C,cB as U,cC as me,cD as ve,bx as _e,bz as fe,cE as ye,al as he,cF as ge,bX as _}from"./index-bbe3b5fd.js";import{_ as xe}from"./BaseTabMenu-ff2262e6.js";import{_ as be}from"./dynamic-import-helper-be004503.js";import{u as Ie}from"./index.store-1267ee2b.js";import we from"./FileTabs-5be8c4f9.js";import{_ as Ce}from"./BackButton-d27b2db5.js";import{J as Ee}from"./index-45fa891b.js";import{b as N}from"./formatDate-e055d3c1.js";import{_ as Te}from"./BaseAvatar-a4364632.js";import{_ as $e}from"./Dropdown-769c6035.js";import"./dialog.esm-7b86d80e.js";import"./axios.config-35d52f8b.js";import"./dayjs.min-173df5d4.js";/* empty css                                                                       */import"./textarea.esm-568128a0.js";import"./inputtext.esm-ea51841a.js";/* empty css                                                  */import"./divider.esm-915bacdb.js";import"./common-84edf50f.js";import"./review.store-7319e55e.js";import"./WithSelectable.vue_vue_type_style_index_0_lang-296ad704.js";/* empty css                                                 */import"./radiobutton.esm-de02ac2b.js";import"./checkbox.esm-00d87464.js";import{_ as K,a as Se,b as Oe,c as Pe,d as De,e as Ae}from"./DecreeTemplate-c76f9d2c.js";import"./menu.esm-49434b8d.js";/* empty css                                                 */const Re={class:"grid-with-tabs-view flex flex-col flex-1 h-full"},ke={key:0,class:"flex items-center justify-between h-10 mb-5"},Le={class:"flex items-center gap-3"},Ve={class:"font-bold text-xl text-primary-900"},Ne={class:"flex items-center gap-2"},Be={class:"detail-layout-content flex flex-col flex-1 bg-white overflow-hidden shadow-button rounded-2xl"},je={class:"flex justify-between border-b"},Fe={key:0,class:"flex flex-col max-w-[690px] w-full border-l px-5"},He={class:"flex justify-between relative"},ze={class:"flex gap-x-3 overflow-x-auto h-full"},Ue=["onClick"],Ke={class:"flex flex-col gap-y-1 h-full items-center"},Me={class:"flex flex-1"},We={class:"flex-1 overflow-y-auto"},Ye={class:"h-full"},qe={class:"max-w-[690px] w-full ml-auto border-l"},jt={__name:"LayoutWithTabsCompose",props:{title:{type:String,default:""},toolbar:{type:Boolean,default:!0},tabItems:{type:Array,default:()=>[{label:"Просмотр",name:"Preview",icon:M,slot:"preview",component:"Preview",count:null},{label:"История",name:"History",icon:Q,slot:"history",component:"History",count:null},{label:"Комментарии",name:"Comments",icon:ee,slot:"comments",component:"Comments",count:2},{label:"Файлы",name:"Files",icon:z,slot:"files",component:"Files"},{label:"Связанные документы",name:"ConnectedDocuments",icon:te,slot:"connected-documents",component:"ConnectedDocuments"}]},previewDetail:{type:Object,default:()=>{}},objectId:{type:Number},headers:{type:Array,default:()=>[]},resolution:{type:Object,default:()=>{}},treeItems:{type:Object,default:()=>{}},contentType:{type:Number,default:ne.DOC_FLOW},files:{type:Array,default:()=>[]}},setup(r){const o=r;W(),se();const{t:s}=Y(),u=Ie(),f=L(0),p=oe(null),m=B(()=>o.tabItems[f.value]);re(m,a=>{p.value=ie({loader:()=>be(Object.assign({"./components/Comments.vue":()=>w(()=>import("./Comments-f360d030.js"),["assets/Comments-f360d030.js","assets/index-bbe3b5fd.js","assets/index-ad28464c.css","assets/axios.config-35d52f8b.js","assets/BaseTextarea-d12593c1.js","assets/BaseLabel-639147d9.js","assets/textarea.esm-568128a0.js","assets/BaseAvatar-a4364632.js","assets/avatar.esm-e107ad6f.js","assets/BaseIcon-34778063.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-84edf50f.js","assets/index-45fa891b.js","assets/dayjs.min-173df5d4.js","assets/collect-requests.store-caf0f3df.js","assets/index-8d251856.js","assets/index-1d58920c.js","assets/formatDate-e055d3c1.js","assets/Comments-c9eba824.css"]),"./components/ConnectedDocuments.vue":()=>w(()=>import("./ConnectedDocuments-66a821aa.js"),["assets/ConnectedDocuments-66a821aa.js","assets/index-bbe3b5fd.js","assets/index-ad28464c.css","assets/index.store-1267ee2b.js","assets/axios.config-35d52f8b.js","assets/index-c4c1f2d4.js","assets/common-84edf50f.js","assets/index-45fa891b.js","assets/dayjs.min-173df5d4.js","assets/collect-requests.store-caf0f3df.js","assets/Status-206ae841.js","assets/Empty-f64cbe58.js","assets/BaseIcon-47d683d1.css"]),"./components/FileTabs.vue":()=>w(()=>import("./FileTabs-5be8c4f9.js"),["assets/FileTabs-5be8c4f9.js","assets/BaseTabView-9de1217e.js","assets/BaseDialog-9a25b133.js","assets/dialog.esm-7b86d80e.js","assets/index-bbe3b5fd.js","assets/index-ad28464c.css","assets/tabpanel.esm-2a936e22.js","assets/index.esm-463950b9.js","assets/index.esm-9f9c52e5.js","assets/Preview-8ccf10ea.js","assets/index-45fa891b.js","assets/dayjs.min-173df5d4.js","assets/axios.config-35d52f8b.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/BaseTabView-64f3195f.css","assets/FileTabs-9e37c7e7.css"]),"./components/Files.vue":()=>w(()=>import("./Files-3f7e9fb0.js"),["assets/Files-3f7e9fb0.js","assets/BaseDialog-9a25b133.js","assets/dialog.esm-7b86d80e.js","assets/index-bbe3b5fd.js","assets/index-ad28464c.css","assets/Card-a1624c82.js","assets/datatable.esm-f713adeb.js","assets/dropdown.esm-30bb19cc.js","assets/virtualscroller.esm-2a40f403.js","assets/overlayeventbus.esm-7a8b4d6b.js","assets/inputtext.esm-ea51841a.js","assets/index.esm-9f9c52e5.js","assets/pagination.store-aa068276.js","assets/Group-9254ca62.css","assets/avatar.esm-e107ad6f.js","assets/common-84edf50f.js","assets/axios.config-35d52f8b.js","assets/index-45fa891b.js","assets/dayjs.min-173df5d4.js","assets/collect-requests.store-caf0f3df.js","assets/Preview-8ccf10ea.js","assets/formatDate-e055d3c1.js","assets/BaseIcon-47d683d1.css"]),"./components/History.vue":()=>w(()=>import("./History-078b4a85.js"),["assets/History-078b4a85.js","assets/BaseAvatar-a4364632.js","assets/avatar.esm-e107ad6f.js","assets/index-bbe3b5fd.js","assets/index-ad28464c.css","assets/BaseIcon-34778063.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-84edf50f.js","assets/axios.config-35d52f8b.js","assets/index-45fa891b.js","assets/dayjs.min-173df5d4.js","assets/collect-requests.store-caf0f3df.js","assets/Card-a1624c82.js","assets/datatable.esm-f713adeb.js","assets/dropdown.esm-30bb19cc.js","assets/virtualscroller.esm-2a40f403.js","assets/overlayeventbus.esm-7a8b4d6b.js","assets/inputtext.esm-ea51841a.js","assets/index.esm-9f9c52e5.js","assets/pagination.store-aa068276.js","assets/Group-9254ca62.css","assets/dialog.esm-7b86d80e.js","assets/formatDate-e055d3c1.js"]),"./components/Preview.vue":()=>w(()=>import("./Preview-899055ea.js"),["assets/Preview-899055ea.js","assets/Users-02f1e5fb.js","assets/index-bbe3b5fd.js","assets/index-ad28464c.css","assets/BaseAvatar-a4364632.js","assets/avatar.esm-e107ad6f.js","assets/BaseIcon-34778063.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-84edf50f.js","assets/axios.config-35d52f8b.js","assets/index-45fa891b.js","assets/dayjs.min-173df5d4.js","assets/collect-requests.store-caf0f3df.js","assets/WithSelectable.vue_vue_type_style_index_0_lang-296ad704.js","assets/virtualscroller.esm-2a40f403.js","assets/index.esm-9f9c52e5.js","assets/WithSelectable-cbaef144.css","assets/Status-206ae841.js","assets/props-0f833b60.js","assets/formatDate-e055d3c1.js","assets/radiobutton.esm-de02ac2b.js","assets/checkbox.esm-00d87464.js","assets/FieldGroups-c44631ec.js","assets/BaseRow-c8b15611.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/BaseCol-1d403f52.js","assets/BaseAvatarGroup-f90eb09b.js","assets/BaseLabel-639147d9.js","assets/Priority-b26215f4.js"]),"./components/Resolution.vue":()=>w(()=>import("./Resolution-20d5544b.js"),["assets/Resolution-20d5544b.js","assets/formatDate-e055d3c1.js","assets/dayjs.min-173df5d4.js","assets/index-bbe3b5fd.js","assets/index-ad28464c.css","assets/index-45fa891b.js","assets/axios.config-35d52f8b.js","assets/index.store-1267ee2b.js","assets/index-c4c1f2d4.js","assets/common-84edf50f.js","assets/collect-requests.store-caf0f3df.js","assets/qrcode.vue.esm-8e1c68a6.js","assets/Dropdown-769c6035.js","assets/BaseDialog-9a25b133.js","assets/dialog.esm-7b86d80e.js","assets/BaseMenu-21277409.js","assets/menu.esm-49434b8d.js","assets/overlayeventbus.esm-7a8b4d6b.js","assets/BaseMenu-03958651.css","assets/BaseIcon-34778063.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/BaseTextarea-d12593c1.js","assets/BaseLabel-639147d9.js","assets/textarea.esm-568128a0.js","assets/BaseFroalaEditor-a5fe4fb5.js","assets/BaseFroalaEditor.vue_vue_type_style_index_0_lang-3dec16a2.js","assets/BaseFroalaEditor-950bc6c5.css","assets/index-455ae4a4.js","assets/inputtext.esm-ea51841a.js","assets/divider.esm-915bacdb.js","assets/review.store-7319e55e.js","assets/review.service-f0a1e130.js","assets/avatar.esm-e107ad6f.js","assets/WithSelectable.vue_vue_type_style_index_0_lang-296ad704.js","assets/virtualscroller.esm-2a40f403.js","assets/index.esm-9f9c52e5.js","assets/WithSelectable-cbaef144.css","assets/radiobutton.esm-de02ac2b.js","assets/checkbox.esm-00d87464.js","assets/BaseRow-c8b15611.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/WithLabel-b5214c4f.js","assets/multiselect.esm-ec7e74fa.js","assets/index.esm-804804ed.js","assets/index-1d58920c.js","assets/BaseAvatar-a4364632.js","assets/props-0f833b60.js","assets/BaseMultiSelect-f9ba1bd2.css","assets/BaseCalendar-71764988.js","assets/index.esm-463950b9.js","assets/BaseCalendar-fdcdcd76.css","assets/BaseCol-1d403f52.js","assets/BaseDropdown-8cf4a72b.js","assets/dropdown.esm-30bb19cc.js","assets/BaseDropdown-d9d38010.css","assets/Status-206ae841.js","assets/WithSelectable-064afa6b.js","assets/constants-5c471c97.js","assets/BaseFileUpload-51d934af.css","assets/BaseInput-c31e9403.css","assets/sqb-logo-ddc3d0ce.js","assets/logo-text-7b3f2522.js","assets/Users-02f1e5fb.js"])}),`./components/${a==null?void 0:a.component}.vue`),loadingComponent:le,delay:200})},{immediate:!0});const l=async a=>{u.versionHistoryList.forEach(I=>I.active=I.id===a.id),u.historyContent=Ee(a.old_text,a.new_text),u.historyShow=!0},P=()=>{u.historyShow=!1,u.versionHistoryList.forEach(a=>a.active=!1)};return(a,I)=>{const D=xe,S=J,A=ae("tooltip");return d(),g("div",Re,[o.toolbar?(d(),g("div",ke,[n("div",Le,[h(Ce),n("h1",Ve,E(o.title?i(s)(o.title):i(s)("title-document")),1)]),n("div",Ne,[b(a.$slots,"header-end")])])):$("",!0),n("div",Be,[b(a.$slots,"content",{},()=>[n("div",je,[h(D,{modelValue:f.value,"onUpdate:modelValue":I[0]||(I[0]=y=>f.value=y),"tab-items":o.tabItems},null,8,["modelValue","tab-items"]),i(u).versionHistoryList.length?(d(),g("div",Fe,[n("div",He,[i(u).historyShow?(d(),O(S,{key:0,icon:i(q),class:"text-critic-500 cursor-pointer !w-8 !h-8 absolute right-0 top-2",onClick:P},null,8,["icon"])):$("",!0)]),n("div",ze,[(d(!0),g(j,null,G(i(u).versionHistoryList,y=>ce((d(),g("div",{class:T(["flex justify-center items-center cursor-pointer w-12 h-full",y.active?"border-b-2 border-primary-500":"border-b-2"]),onClick:F=>l(y)},[n("div",Ke,[n("div",{class:T(["text-[10px]",y.active?"text-primary-500":"text-greyscale-900"])},E(i(s)("updated")),3),h(S,{icon:i(z),class:T(["text-greyscale-900 !w-4 !h-4",y.active?"text-primary-500":"text-greyscale-500"])},null,8,["icon","class"])])],10,Ue)),[[A,{value:`<h4 class='text-xs text-white -my-1 !w-[250px]'> ${i(s)("change-history")} <br> ${i(s)("author")}: ${y.created_by.full_name} <br> ${i(s)("change-time")}: ${i(N)(y.created_date)}</h4>`,escape:!0,autoHide:!1},void 0,{top:!0}]])),256))])])):$("",!0)]),n("div",Me,[b(a.$slots,m.value.slot,{},()=>[n("div",We,[n("div",Ye,[(d(),O(X(p.value),{"preview-detail":o.previewDetail,"object-id":o.objectId,headers:o.headers,"tree-items":o.treeItems,"content-type":o.contentType,files:o.files},{"preview-actions":V(()=>[b(a.$slots,"preview-actions")]),_:3},8,["preview-detail","object-id","headers","tree-items","content-type","files"]))])])]),n("div",qe,[b(a.$slots,"template",{},()=>[h(we,{resolution:o.resolution},null,8,["resolution"])])])])])])])}}};var Ge=`
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
`,Xe={root:function(o){var s=o.props;return["p-timeline p-component","p-timeline-"+s.align,"p-timeline-"+s.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},Je=pe.extend({name:"timeline",css:Ge,classes:Xe}),Ze={name:"BaseTimeline",extends:de,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Je,provide:function(){return{$parentInstance:this}}},Z={name:"Timeline",extends:Ze,methods:{getKey:function(o,s){return this.dataKey?ue.resolveFieldData(o,this.dataKey):s},getPTOptions:function(o,s){return this.ptm(o,{context:{index:s,count:this.value.length}})}}};function Qe(r,o,s,u,f,p){return d(),g("div",C({class:r.cx("root")},r.ptm("root"),{"data-pc-name":"timeline"}),[(d(!0),g(j,null,G(r.value,function(m,l){return d(),g("div",C({key:p.getKey(m,l),class:r.cx("event")},p.getPTOptions("event",l)),[n("div",C({class:r.cx("opposite",{index:l})},p.getPTOptions("opposite",l)),[b(r.$slots,"opposite",{item:m,index:l})],16),n("div",C({class:r.cx("separator")},p.getPTOptions("separator",l)),[b(r.$slots,"marker",{item:m,index:l},function(){return[n("div",C({class:r.cx("marker")},p.getPTOptions("marker",l)),null,16)]}),l!==r.value.length-1?b(r.$slots,"connector",{key:0,item:m,index:l},function(){return[n("div",C({class:r.cx("connector")},p.getPTOptions("connector",l)),null,16)]}):$("",!0)],16),n("div",C({class:r.cx("content")},p.getPTOptions("content",l)),[b(r.$slots,"content",{item:m,index:l})],16)],16)}),128))],16)}Z.render=Qe;const et={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},tt={class:"user-avatar relative"},nt={class:"flex flex-col ml-3 w-full"},st={class:"flex items-center justify-between"},ot={class:"flex items-center"},rt={class:"text-sm font-semibold text-primary-500 mx-2"},it=n("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),lt={class:"text-sm font-medium text-greyscale-300 block ml-2"},at={class:"flex items-center"},ct=["onClick"],pt={class:"ml-1 text-greyscale-500 font-medium"},ut={class:"text-sm font-semibold text-greyscale-900 mt-1"},Ft={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const o=r,{t:s}=Y(),u=L(""),f=L(!1),p=B(()=>{var H;const{composeModel:e}=o;if(!(e!=null&&e.approvers)||!(e!=null&&e.signers))return[];let c=e.approvers.map(v=>({...v,type:"approvers"}));const x=(H=e==null?void 0:e.curator)!=null&&H.assistant?c.find(v=>v.user.id===e.curator.assistant):null;x&&(c=c.filter(v=>v.user.id!==x.user.id));let R=e.signers.filter(v=>v.type!==U.BASIC_SIGNER).map(v=>({...v,type:"signers"}));const t=e!=null&&e.curator?e.signers.find(v=>v.type===U.BASIC_SIGNER):null;return[{user:e.author,type:"author"},...c,...R,...x?[{...x,type:"approvers",role:"assistant"}]:[],...t?[{...t,type:"signers"}]:[]]}),m=(e,c)=>e.value[c.index].type==="author"||e.value[c.index].type==="approvers"&&e.value[c.index].is_approved===!0||e.value[c.index].type==="signers"&&e.value[c.index].is_signed===!0?"bg-success-500":e.value[c.index].type==="approvers"&&e.value[c.index].is_approved===!1||e.value[c.index].type==="signers"&&e.value[c.index].is_signed===!1?"bg-critic-500":"bg-greyscale-200",l=e=>e.type==="author"?_e:e.type==="signers"?fe:ye,P=e=>e.type==="approvers"&&e.role==="assistant"?s("referent"):e.type==="author"?s("author"):e.type==="signers"?s("signer"):s("approver"),a=e=>e.type==="author"?N(o.composeModel.created_date):e.action_date?N(e.action_date):null,I=e=>e.type==="author"?s("author"):e.type==="approvers"&&e.is_approved===!0?s("agree"):e.type==="approvers"&&e.is_approved===!1?s("not-agree"):e.type==="approvers"&&e.is_approved===null?s("not-checked"):e.type==="signers"&&e.is_signed===!0?s("signed"):e.type==="signers"&&e.is_signed===!1?s("rejected"):s("not-checked"),D=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",S=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",A=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?he:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?q:ge,y=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-greyscale-200",F=e=>{u.value=e.comment,f.value=!0};return(e,c)=>{const x=J,R=Te;return d(),g(j,null,[n("div",et,[o.composeModel?(d(),O(i(Z),{key:0,value:p.value,pt:{opposite:{class:["hidden"]},connector:({props:t,context:k})=>({class:[m(t,k),"-my-1"]})}},{marker:V(({item:t})=>[h(x,{icon:A(t),class:T(["!w-6 !h-6",y(t)])},null,8,["icon","class"])]),content:V(({item:t})=>[n("div",{class:T(["flex p-5 rounded-xl bg-white mb-3 border",S(t)])},[n("div",tt,[h(R,{label:t==null?void 0:t.user.first_name,color:t==null?void 0:t.user.color,shape:"circle","avatar-classes":"w-10 h-10"},null,8,["label","color"]),n("div",{class:T(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",t.type==="signers"&&!t.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[h(x,{icon:t.type==="signers"&&!t.is_all_approved?i(me):i(M),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),n("div",nt,[n("div",st,[n("div",ot,[h(x,{icon:l(t),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),n("span",rt,E(P(t)),1),it,n("span",lt,E(a(t)),1)]),n("div",at,[(t.is_approved===!1||t.is_signed===!1)&&t.comment?(d(),g("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:k=>F(t)},[h(x,{icon:i(ve),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),n("span",pt,E(i(s)("reason")),1)],8,ct)):$("",!0),n("div",{class:T(["text-xs font-semibold px-2 py-[2px] rounded-lg border",D(t)])},E(I(t)),3)])]),n("div",ut,E(t==null?void 0:t.user.full_name),1)])],2)]),_:1},8,["value","pt"])):$("",!0)]),h(i($e),{modelValue:f.value,"onUpdate:modelValue":c[0]||(c[0]=t=>f.value=t),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":u.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},Ht={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const o=r,s=W(),u={[_.SERVICE_LETTER]:K,[_.BUSINESS_TRIP]:Se,[_.BUSINESS_TRIP_ORDER]:Oe,[_.ORDINARY_NOTICE]:Pe,[_.BUSINESS_TRIP_DECREE]:De},f=B(()=>{const p=s.params.document_sub_type;return[_.LABOR_LEAVE,_.CHILD_CARE_LEAVE,_.VACATION_OWN_EXPENSE,_.EDUCATIONAL_LEAVE,_.MATERIAL_SUPPORT,_.APPLICATION].includes(p)?Ae:u[s.params.document_sub_type]||K});return(p,m)=>(d(),O(X(f.value),{"compose-model":o.composeModel},null,8,["compose-model"]))}};export{Ft as _,Ht as a,jt as b};
