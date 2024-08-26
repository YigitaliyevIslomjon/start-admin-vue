import{bw as F,X as Z,aA as G,cs as H,ct as Q,ar as U,u as ee,t as K,E as R,aZ as te,x as L,az as ne,a_ as se,a$ as w,ah as oe,f as re,o as u,k as f,i as t,h as N,p as _,q as i,av as ie,A as x,j as y,n as C,g as O,aL as q,F as B,y as W,z as I,w as j,l as Y,_ as le,D as J,B as ae,aC as ce,e as pe,m as g,cB as de,cC as ue,bv as me,bx as ve,cD as _e,al as fe,cE as he,bV as k}from"./index-cc7c56c7.js";import{_ as ye}from"./BaseTabMenu-16798bc3.js";import{_ as ge}from"./dynamic-import-helper-be004503.js";import{u as xe}from"./index.store-5de209d8.js";import be from"./FileTabs-86a8eea6.js";import{J as we}from"./index-26dfc861.js";import{b as A}from"./formatDate-5432d005.js";import{_ as Ie}from"./BaseAvatar-b99b0c67.js";import{_ as Ce}from"./Dropdown-45825167.js";import"./dialog.esm-f7f6e43b.js";import"./axios.config-c9cdd56e.js";import"./dayjs.min-34dfcb64.js";/* empty css                                                                       */import"./textarea.esm-ffdc4afc.js";import"./inputtext.esm-893fdd6b.js";/* empty css                                                  */import"./divider.esm-2b3a53ef.js";import"./common-3a4ee441.js";import"./review.store-48d3d930.js";import"./WithSelectable.vue_vue_type_style_index_0_lang-4091365c.js";/* empty css                                                 */import"./radiobutton.esm-c194aaf1.js";import"./checkbox.esm-2d38de85.js";import{_ as z,a as $e,b as Te,c as Ee}from"./OrderLetterTemplate-3abae32a.js";import"./menu.esm-65c39c6f.js";const ke={class:"grid-with-tabs-view flex flex-col flex-1 h-full"},Oe={key:0,class:"flex items-center justify-between h-10 mb-5"},Pe={class:"flex items-center gap-3"},De={class:"font-bold text-xl text-primary-900"},Se={class:"flex items-center gap-2"},Ve={class:"detail-layout-content flex flex-col flex-1 bg-white overflow-hidden shadow-button rounded-2xl"},Re={class:"flex justify-between border-b"},je={key:0,class:"flex flex-col max-w-[690px] w-full border-l px-5"},Ae={class:"flex justify-between relative"},Le={class:"text-xs font-medium text-greyscale-500"},Be={class:"flex gap-x-1 overflow-x-auto"},Me=["onClick"],He={class:"flex flex-1"},Ne={class:"flex-1 overflow-y-auto"},ze={class:"h-[1px]"},Fe={class:"max-w-[690px] w-full ml-auto border-l"},St={__name:"LayoutWithTabsCompose",props:{title:{type:String,default:""},toolbar:{type:Boolean,default:!0},tabItems:{type:Array,default:()=>[{label:"Просмотр",name:"Preview",icon:F,slot:"preview",component:"Preview",count:null},{label:"История",name:"History",icon:Z,slot:"history",component:"History",count:null},{label:"Комментарии",name:"Comments",icon:G,slot:"comments",component:"Comments",count:2},{label:"Файлы",name:"Files",icon:H,slot:"files",component:"Files"}]},previewDetail:{type:Object,default:()=>{}},objectId:{type:Number},headers:{type:Array,default:()=>[]},resolution:{type:Object,default:()=>{}},treeItems:{type:Object,default:()=>{}},contentType:{type:Number,default:Q.DOC_FLOW},files:{type:Array,default:()=>[]}},setup(o){const n=o;U();const r=ee(),{t:m}=K(),c=xe(),d=R(0),v=te(null),l=L(()=>n.tabItems[d.value]);ne(l,a=>{v.value=se({loader:()=>ge(Object.assign({"./components/Comments.vue":()=>w(()=>import("./Comments-9e9aa1e6.js"),["assets/Comments-9e9aa1e6.js","assets/index-cc7c56c7.js","assets/index-464901d5.css","assets/axios.config-c9cdd56e.js","assets/BaseTextarea-8586e566.js","assets/BaseLabel-1788e7f1.js","assets/textarea.esm-ffdc4afc.js","assets/BaseAvatar-b99b0c67.js","assets/avatar.esm-a9338aa2.js","assets/BaseIcon-dacafbf0.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-3a4ee441.js","assets/index-26dfc861.js","assets/dayjs.min-34dfcb64.js","assets/collect-requests.store-f0423ca1.js","assets/index-d165c24a.js","assets/index-c14f14de.js","assets/formatDate-5432d005.js","assets/Comments-c9eba824.css"]),"./components/FileTabs.vue":()=>w(()=>import("./FileTabs-86a8eea6.js"),["assets/FileTabs-86a8eea6.js","assets/BaseTabView-24e9afbf.js","assets/BaseDialog-78c2b29c.js","assets/dialog.esm-f7f6e43b.js","assets/index-cc7c56c7.js","assets/index-464901d5.css","assets/tabpanel.esm-30ce234f.js","assets/index.esm-fe6e4bce.js","assets/index.esm-2fe5bf79.js","assets/Preview-dd69bf51.js","assets/index-26dfc861.js","assets/dayjs.min-34dfcb64.js","assets/axios.config-c9cdd56e.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/BaseTabView-64f3195f.css","assets/FileTabs-9e37c7e7.css"]),"./components/Files.vue":()=>w(()=>import("./Files-07f522ca.js"),["assets/Files-07f522ca.js","assets/BaseDialog-78c2b29c.js","assets/dialog.esm-f7f6e43b.js","assets/index-cc7c56c7.js","assets/index-464901d5.css","assets/Card-12f88d2a.js","assets/datatable.esm-3fb38317.js","assets/dropdown.esm-97d98367.js","assets/virtualscroller.esm-ed3c424a.js","assets/overlayeventbus.esm-3ae0b586.js","assets/inputtext.esm-893fdd6b.js","assets/index.esm-2fe5bf79.js","assets/pagination.store-995f55e7.js","assets/Group-9254ca62.css","assets/avatar.esm-a9338aa2.js","assets/common-3a4ee441.js","assets/axios.config-c9cdd56e.js","assets/index-26dfc861.js","assets/dayjs.min-34dfcb64.js","assets/collect-requests.store-f0423ca1.js","assets/Preview-dd69bf51.js","assets/formatDate-5432d005.js","assets/BaseIcon-47d683d1.css"]),"./components/History.vue":()=>w(()=>import("./History-f370d68c.js"),["assets/History-f370d68c.js","assets/BaseAvatar-b99b0c67.js","assets/avatar.esm-a9338aa2.js","assets/index-cc7c56c7.js","assets/index-464901d5.css","assets/BaseIcon-dacafbf0.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-3a4ee441.js","assets/axios.config-c9cdd56e.js","assets/index-26dfc861.js","assets/dayjs.min-34dfcb64.js","assets/collect-requests.store-f0423ca1.js","assets/Card-12f88d2a.js","assets/datatable.esm-3fb38317.js","assets/dropdown.esm-97d98367.js","assets/virtualscroller.esm-ed3c424a.js","assets/overlayeventbus.esm-3ae0b586.js","assets/inputtext.esm-893fdd6b.js","assets/index.esm-2fe5bf79.js","assets/pagination.store-995f55e7.js","assets/Group-9254ca62.css","assets/dialog.esm-f7f6e43b.js","assets/formatDate-5432d005.js"]),"./components/Preview.vue":()=>w(()=>import("./Preview-d1a546fa.js"),["assets/Preview-d1a546fa.js","assets/Users-3a08c841.js","assets/index-cc7c56c7.js","assets/index-464901d5.css","assets/BaseAvatar-b99b0c67.js","assets/avatar.esm-a9338aa2.js","assets/BaseIcon-dacafbf0.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-3a4ee441.js","assets/axios.config-c9cdd56e.js","assets/index-26dfc861.js","assets/dayjs.min-34dfcb64.js","assets/collect-requests.store-f0423ca1.js","assets/WithSelectable.vue_vue_type_style_index_0_lang-4091365c.js","assets/virtualscroller.esm-ed3c424a.js","assets/index.esm-2fe5bf79.js","assets/WithSelectable-cbaef144.css","assets/Status-959f109f.js","assets/props-0f833b60.js","assets/formatDate-5432d005.js","assets/radiobutton.esm-c194aaf1.js","assets/radiobutton-03958651.css","assets/checkbox.esm-2d38de85.js","assets/FieldGroups-9fd96afb.js","assets/BaseRow-6152bdf6.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/BaseCol-2c995a74.js","assets/BaseAvatarGroup-a92e139b.js","assets/BaseLabel-1788e7f1.js","assets/Priority-01933f3e.js"]),"./components/Resolution.vue":()=>w(()=>import("./Resolution-f03669ab.js"),["assets/Resolution-f03669ab.js","assets/formatDate-5432d005.js","assets/dayjs.min-34dfcb64.js","assets/index-cc7c56c7.js","assets/index-464901d5.css","assets/index-26dfc861.js","assets/axios.config-c9cdd56e.js","assets/index.store-5de209d8.js","assets/index-c4c1f2d4.js","assets/common-3a4ee441.js","assets/collect-requests.store-f0423ca1.js","assets/qrcode.vue.esm-bf5ffce8.js","assets/Dropdown-45825167.js","assets/BaseDialog-78c2b29c.js","assets/dialog.esm-f7f6e43b.js","assets/BaseMenu-ca645e46.js","assets/menu.esm-65c39c6f.js","assets/overlayeventbus.esm-3ae0b586.js","assets/radiobutton.esm-c194aaf1.js","assets/radiobutton-03958651.css","assets/BaseIcon-dacafbf0.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/BaseTextarea-8586e566.js","assets/BaseLabel-1788e7f1.js","assets/textarea.esm-ffdc4afc.js","assets/BaseFroalaEditor-00aaba95.js","assets/BaseFroalaEditor.vue_vue_type_style_index_0_lang-38f6db2b.js","assets/BaseFroalaEditor-950bc6c5.css","assets/index-4d3447d5.js","assets/inputtext.esm-893fdd6b.js","assets/divider.esm-2b3a53ef.js","assets/review.store-48d3d930.js","assets/review.service-d7bc6be1.js","assets/avatar.esm-a9338aa2.js","assets/WithSelectable.vue_vue_type_style_index_0_lang-4091365c.js","assets/virtualscroller.esm-ed3c424a.js","assets/index.esm-2fe5bf79.js","assets/WithSelectable-cbaef144.css","assets/checkbox.esm-2d38de85.js","assets/BaseRow-6152bdf6.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/WithLabel-6a15da19.js","assets/BaseAvatar-b99b0c67.js","assets/multiselect.esm-7864b3da.js","assets/index.esm-26195c50.js","assets/index-c14f14de.js","assets/props-0f833b60.js","assets/BaseMultiSelect-f9ba1bd2.css","assets/BaseCalendar-48962882.js","assets/index.esm-fe6e4bce.js","assets/BaseCalendar-fdcdcd76.css","assets/BaseCol-2c995a74.js","assets/BaseDropdown-7de56794.js","assets/dropdown.esm-97d98367.js","assets/BaseDropdown-d9d38010.css","assets/Status-959f109f.js","assets/WithSelectable-ecbc36aa.js","assets/constants-5c471c97.js","assets/BaseFileUpload-51d934af.css","assets/BaseInput-c31e9403.css","assets/sqb-logo-ddc3d0ce.js","assets/logo-text-7b3f2522.js","assets/Users-3a08c841.js"])}),`./components/${a==null?void 0:a.component}.vue`),loadingComponent:oe,delay:200})},{immediate:!0});const P=async a=>{c.versionHistoryList.forEach(h=>h.active=h.id===a.id),c.historyContent=we(a.old_text,a.new_text),c.historyShow=!0},D=()=>{c.historyShow=!1,c.versionHistoryList.forEach(a=>a.active=!1)};return(a,h)=>{const S=le,V=ye,T=J,E=re("tooltip");return u(),f("div",ke,[n.toolbar?(u(),f("div",Oe,[t("div",Pe,[N(_(S,{size:"small","icon-left":i(ie),"icon-width":"!w-4 !h-4","only-icon":"",outlined:"",shadow:"","border-color":"border-transparent","button-class":"h-8",onClick:h[0]||(h[0]=e=>i(r).go(-1))},null,8,["icon-left"]),[[E,{value:"<h4 class='text-xs text-white -my-1'>Назад</h4>",escape:!0,autoHide:!1},void 0,{left:!0}]]),t("h1",De,x(n.title?i(m)(n.title):i(m)("title-document")),1)]),t("div",Se,[y(a.$slots,"header-end")])])):C("",!0),t("div",Ve,[y(a.$slots,"content",{},()=>[t("div",Re,[_(V,{modelValue:d.value,"onUpdate:modelValue":h[1]||(h[1]=e=>d.value=e),"tab-items":n.tabItems},null,8,["modelValue","tab-items"]),i(c).versionHistoryList.length?(u(),f("div",je,[t("div",Ae,[t("span",Le,x(i(m)("version-history")),1),i(c).historyShow?(u(),O(T,{key:0,icon:i(q),class:"text-critic-500 cursor-pointer !w-6 !h-6 absolute right-0 top-2",onClick:D},null,8,["icon"])):C("",!0)]),t("div",Be,[(u(!0),f(B,null,W(i(c).versionHistoryList,e=>N((u(),f("div",{class:I(["flex justify-center items-center cursor-pointer w-[37px] h-[37px]",e.active?"border-b-2 border-primary-500":"border-b-2"]),onClick:p=>P(e)},[_(T,{icon:i(H),class:I(["text-greyscale-900 !w-4 !h-4",e.active?"text-greyscale-900":"text-greyscale-500"])},null,8,["icon","class"])],10,Me)),[[E,{value:`<h4 class='text-xs text-white -my-1 !w-[250px]'>${i(m)("author")}: ${e.created_by.full_name} <br> ${i(m)("change-time")}: ${i(A)(e.created_date)}</h4>`,escape:!0,autoHide:!1},void 0,{top:!0}]])),256))])])):C("",!0)]),t("div",He,[y(a.$slots,l.value.slot,{},()=>[t("div",Ne,[t("div",ze,[(u(),O(Y(v.value),{"preview-detail":n.previewDetail,"object-id":n.objectId,headers:n.headers,"tree-items":n.treeItems,"content-type":n.contentType,files:n.files},{"preview-actions":j(()=>[y(a.$slots,"preview-actions")]),_:3},8,["preview-detail","object-id","headers","tree-items","content-type","files"]))])])]),t("div",Fe,[y(a.$slots,"template",{},()=>[_(be,{resolution:n.resolution},null,8,["resolution"])])])])])])])}}};var Ue=`
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
`,Ke={root:function(n){var r=n.props;return["p-timeline p-component","p-timeline-"+r.align,"p-timeline-"+r.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},qe=ae.extend({name:"timeline",css:Ue,classes:Ke}),We={name:"BaseTimeline",extends:pe,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:qe,provide:function(){return{$parentInstance:this}}},X={name:"Timeline",extends:We,methods:{getKey:function(n,r){return this.dataKey?ce.resolveFieldData(n,this.dataKey):r},getPTOptions:function(n,r){return this.ptm(n,{context:{index:r,count:this.value.length}})}}};function Ye(o,n,r,m,c,d){return u(),f("div",g({class:o.cx("root")},o.ptm("root"),{"data-pc-name":"timeline"}),[(u(!0),f(B,null,W(o.value,function(v,l){return u(),f("div",g({key:d.getKey(v,l),class:o.cx("event")},d.getPTOptions("event",l)),[t("div",g({class:o.cx("opposite",{index:l})},d.getPTOptions("opposite",l)),[y(o.$slots,"opposite",{item:v,index:l})],16),t("div",g({class:o.cx("separator")},d.getPTOptions("separator",l)),[y(o.$slots,"marker",{item:v,index:l},function(){return[t("div",g({class:o.cx("marker")},d.getPTOptions("marker",l)),null,16)]}),l!==o.value.length-1?y(o.$slots,"connector",{key:0,item:v,index:l},function(){return[t("div",g({class:o.cx("connector")},d.getPTOptions("connector",l)),null,16)]}):C("",!0)],16),t("div",g({class:o.cx("content")},d.getPTOptions("content",l)),[y(o.$slots,"content",{item:v,index:l})],16)],16)}),128))],16)}X.render=Ye;const Je={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},Xe={class:"user-avatar relative"},Ze={class:"flex flex-col ml-3 w-full"},Ge={class:"flex items-center justify-between"},Qe={class:"flex items-center"},et={class:"text-sm font-semibold text-primary-500 mx-2"},tt=t("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),nt={class:"text-sm font-medium text-greyscale-300 block ml-2"},st={class:"flex items-center"},ot=["onClick"],rt={class:"ml-1 text-greyscale-500 font-medium"},it={class:"text-sm font-semibold text-greyscale-900 mt-1"},Vt={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(o){const n=o,{t:r}=K(),m=R(""),c=R(!1),d=L(()=>{if(!(n.composeModel&&n.composeModel.approvers&&n.composeModel.signers))return[];const e={user:n.composeModel.author,type:"author"},p=n.composeModel.approvers.map($=>({...$,type:"approvers"})),b=n.composeModel.signers.map($=>({...$,type:"signers"}));return[e,...p,...b]}),v=(e,p)=>e.value[p.index].type==="author"||e.value[p.index].type==="approvers"&&e.value[p.index].is_approved===!0||e.value[p.index].type==="signers"&&e.value[p.index].is_signed===!0?"bg-success-500":e.value[p.index].type==="approvers"&&e.value[p.index].is_approved===!1||e.value[p.index].type==="signers"&&e.value[p.index].is_signed===!1?"bg-critic-500":"",l=e=>e.type==="author"?me:e.type==="signers"?ve:_e,P=e=>e.type==="author"?r("author"):e.type==="signers"?r("signer"):r("approver"),D=e=>e.type==="author"?A(n.composeModel.created_date):e.action_date?A(e.action_date):null,a=e=>e.type==="author"?r("author"):e.type==="approvers"&&e.is_approved===!0?r("agree"):e.type==="approvers"&&e.is_approved===!1?r("not-agree"):e.type==="approvers"&&e.is_approved===null?r("not-checked"):e.type==="signers"&&e.is_signed===!0?r("signed"):e.type==="signers"&&e.is_signed===!1?r("rejected"):r("not-checked"),h=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",S=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",V=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?fe:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?q:he,T=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-white",E=e=>{m.value=e.comment,c.value=!0};return(e,p)=>{const b=J,$=Ie;return u(),f(B,null,[t("div",Je,[n.composeModel?(u(),O(i(X),{key:0,value:d.value,pt:{opposite:{class:["hidden"]},connector:({props:s,context:M})=>({class:[v(s,M)]})}},{marker:j(({item:s})=>[_(b,{icon:V(s),class:I(["!w-6 !h-6",T(s)])},null,8,["icon","class"])]),content:j(({item:s})=>[t("div",{class:I(["flex p-5 rounded-xl bg-white mb-3 border",S(s)])},[t("div",Xe,[_($,{label:s==null?void 0:s.user.first_name,color:s==null?void 0:s.user.color,shape:"circle","avatar-classes":"w-10 h-10"},null,8,["label","color"]),t("div",{class:I(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",s.type==="signers"&&!s.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[_(b,{icon:s.type==="signers"&&!s.is_all_approved?i(de):i(F),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),t("div",Ze,[t("div",Ge,[t("div",Qe,[_(b,{icon:l(s),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),t("span",et,x(P(s)),1),tt,t("span",nt,x(D(s)),1)]),t("div",st,[(s.is_approved===!1||s.is_signed===!1)&&s.comment?(u(),f("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:M=>E(s)},[_(b,{icon:i(ue),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),t("span",rt,x(i(r)("reason")),1)],8,ot)):C("",!0),t("div",{class:I(["text-xs font-semibold px-2 py-[2px] rounded-lg border",h(s)])},x(a(s)),3)])]),t("div",it,x(s==null?void 0:s.user.full_name),1)])],2)]),_:1},8,["value","pt"])):C("",!0)]),_(i(Ce),{modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=s=>c.value=s),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":m.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},Rt={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(o){const n=o,r=U(),m={[k.SERVICE_LETTER]:z,[k.LABOR_LEAVE]:$e,[k.BUSINESS_TRIP]:Te,[k.BUSINESS_TRIP_ORDER]:Ee},c=L(()=>m[r.params.document_sub_type]||z);return(d,v)=>(u(),O(Y(c.value),{"compose-model":n.composeModel},null,8,["compose-model"]))}};export{Vt as _,Rt as a,St as b};
