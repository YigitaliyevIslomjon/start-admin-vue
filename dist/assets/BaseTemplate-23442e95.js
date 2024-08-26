import{bw as F,X,aA as Z,cs as H,ct as G,ar as z,u as Q,t as U,E as V,aZ as ee,x as L,az as te,a_ as ne,a$ as w,ah as se,f as oe,o as d,k as f,i as s,p as _,A as I,q as a,j as y,n as C,g as O,aL as K,F as A,y as q,h as re,z as $,w as R,l as W,D as Y,B as ie,aC as le,e as ae,m as x,cB as ce,cC as pe,bv as de,bx as ue,cD as me,al as ve,cE as _e,bV as k}from"./index-6eb332f2.js";import{_ as fe}from"./BaseTabMenu-9cd0c454.js";import{_ as he}from"./dynamic-import-helper-be004503.js";import{u as ye}from"./index.store-83d2fb82.js";import ge from"./FileTabs-9cc875bf.js";import{_ as xe}from"./BackButton-f7f52595.js";import{J as be}from"./index-2a2a8b87.js";import{b as j}from"./formatDate-dec8c8ea.js";import{_ as we}from"./BaseAvatar-41a31fd7.js";import{_ as Ie}from"./Dropdown-5d497608.js";import"./dialog.esm-f834f9fa.js";import"./axios.config-2fd792c7.js";import"./dayjs.min-c7222c9e.js";/* empty css                                                                       */import"./textarea.esm-e838e03a.js";import"./inputtext.esm-164d9e8a.js";/* empty css                                                  */import"./divider.esm-a0bd49d6.js";import"./common-34afc17c.js";import"./review.store-70655e75.js";import"./WithSelectable.vue_vue_type_style_index_0_lang-54738f43.js";/* empty css                                                 */import"./radiobutton.esm-dddec91f.js";import"./checkbox.esm-f5e07a8a.js";import{_ as N,a as $e,b as Ce,c as Te}from"./OrderLetterTemplate-e3a7b5ae.js";import"./menu.esm-3854e6db.js";/* empty css                                                 */const Ee={class:"grid-with-tabs-view flex flex-col flex-1 h-full"},ke={key:0,class:"flex items-center justify-between h-10 mb-5"},Oe={class:"flex items-center gap-3"},Pe={class:"font-bold text-xl text-primary-900"},De={class:"flex items-center gap-2"},Se={class:"detail-layout-content flex flex-col flex-1 bg-white overflow-hidden shadow-button rounded-2xl"},Ve={class:"flex justify-between border-b"},Re={key:0,class:"flex flex-col max-w-[690px] w-full border-l px-5"},je={class:"flex justify-between relative"},Le={class:"flex gap-x-2 overflow-x-auto h-full"},Ae=["onClick"],Be={class:"flex flex-1"},Me={class:"flex-1 overflow-y-auto"},He={class:"h-[1px]"},Ne={class:"max-w-[690px] w-full ml-auto border-l"},St={__name:"LayoutWithTabsCompose",props:{title:{type:String,default:""},toolbar:{type:Boolean,default:!0},tabItems:{type:Array,default:()=>[{label:"Просмотр",name:"Preview",icon:F,slot:"preview",component:"Preview",count:null},{label:"История",name:"History",icon:X,slot:"history",component:"History",count:null},{label:"Комментарии",name:"Comments",icon:Z,slot:"comments",component:"Comments",count:2},{label:"Файлы",name:"Files",icon:H,slot:"files",component:"Files"}]},previewDetail:{type:Object,default:()=>{}},objectId:{type:Number},headers:{type:Array,default:()=>[]},resolution:{type:Object,default:()=>{}},treeItems:{type:Object,default:()=>{}},contentType:{type:Number,default:G.DOC_FLOW},files:{type:Array,default:()=>[]}},setup(r){const t=r;z(),Q();const{t:o}=U(),c=ye(),v=V(0),u=ee(null),m=L(()=>t.tabItems[v.value]);te(m,l=>{u.value=ne({loader:()=>he(Object.assign({"./components/Comments.vue":()=>w(()=>import("./Comments-bc3ff1e8.js"),["assets/Comments-bc3ff1e8.js","assets/index-6eb332f2.js","assets/index-5501b80d.css","assets/axios.config-2fd792c7.js","assets/BaseTextarea-deafe81c.js","assets/BaseLabel-b89fb85a.js","assets/textarea.esm-e838e03a.js","assets/BaseAvatar-41a31fd7.js","assets/avatar.esm-23fbd599.js","assets/BaseIcon-b4322cbb.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-34afc17c.js","assets/index-2a2a8b87.js","assets/dayjs.min-c7222c9e.js","assets/collect-requests.store-f2baf94a.js","assets/index-9eabf2ff.js","assets/index-02845d4d.js","assets/formatDate-dec8c8ea.js","assets/Comments-c9eba824.css"]),"./components/FileTabs.vue":()=>w(()=>import("./FileTabs-9cc875bf.js"),["assets/FileTabs-9cc875bf.js","assets/BaseTabView-8921c352.js","assets/BaseDialog-78e31f6b.js","assets/dialog.esm-f834f9fa.js","assets/index-6eb332f2.js","assets/index-5501b80d.css","assets/tabpanel.esm-b83a3daf.js","assets/index.esm-a233cd3d.js","assets/index.esm-c96255b6.js","assets/Preview-82b878c7.js","assets/index-2a2a8b87.js","assets/dayjs.min-c7222c9e.js","assets/axios.config-2fd792c7.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/BaseTabView-64f3195f.css","assets/FileTabs-9e37c7e7.css"]),"./components/Files.vue":()=>w(()=>import("./Files-49a8841c.js"),["assets/Files-49a8841c.js","assets/BaseDialog-78e31f6b.js","assets/dialog.esm-f834f9fa.js","assets/index-6eb332f2.js","assets/index-5501b80d.css","assets/Card-8a7eca32.js","assets/datatable.esm-703dd255.js","assets/dropdown.esm-9b766523.js","assets/virtualscroller.esm-6b02c649.js","assets/overlayeventbus.esm-4b1ada38.js","assets/inputtext.esm-164d9e8a.js","assets/index.esm-c96255b6.js","assets/pagination.store-d638d1fd.js","assets/Group-9254ca62.css","assets/avatar.esm-23fbd599.js","assets/common-34afc17c.js","assets/axios.config-2fd792c7.js","assets/index-2a2a8b87.js","assets/dayjs.min-c7222c9e.js","assets/collect-requests.store-f2baf94a.js","assets/Preview-82b878c7.js","assets/formatDate-dec8c8ea.js","assets/BaseIcon-47d683d1.css"]),"./components/History.vue":()=>w(()=>import("./History-0e716e84.js"),["assets/History-0e716e84.js","assets/BaseAvatar-41a31fd7.js","assets/avatar.esm-23fbd599.js","assets/index-6eb332f2.js","assets/index-5501b80d.css","assets/BaseIcon-b4322cbb.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-34afc17c.js","assets/axios.config-2fd792c7.js","assets/index-2a2a8b87.js","assets/dayjs.min-c7222c9e.js","assets/collect-requests.store-f2baf94a.js","assets/Card-8a7eca32.js","assets/datatable.esm-703dd255.js","assets/dropdown.esm-9b766523.js","assets/virtualscroller.esm-6b02c649.js","assets/overlayeventbus.esm-4b1ada38.js","assets/inputtext.esm-164d9e8a.js","assets/index.esm-c96255b6.js","assets/pagination.store-d638d1fd.js","assets/Group-9254ca62.css","assets/dialog.esm-f834f9fa.js","assets/formatDate-dec8c8ea.js"]),"./components/Preview.vue":()=>w(()=>import("./Preview-b5c58285.js"),["assets/Preview-b5c58285.js","assets/Users-6690b58a.js","assets/index-6eb332f2.js","assets/index-5501b80d.css","assets/BaseAvatar-41a31fd7.js","assets/avatar.esm-23fbd599.js","assets/BaseIcon-b4322cbb.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/common-34afc17c.js","assets/axios.config-2fd792c7.js","assets/index-2a2a8b87.js","assets/dayjs.min-c7222c9e.js","assets/collect-requests.store-f2baf94a.js","assets/WithSelectable.vue_vue_type_style_index_0_lang-54738f43.js","assets/virtualscroller.esm-6b02c649.js","assets/index.esm-c96255b6.js","assets/WithSelectable-cbaef144.css","assets/Status-2b8795c8.js","assets/props-0f833b60.js","assets/formatDate-dec8c8ea.js","assets/radiobutton.esm-dddec91f.js","assets/checkbox.esm-f5e07a8a.js","assets/FieldGroups-ca279a75.js","assets/BaseRow-772afc2b.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/BaseCol-a2b08e89.js","assets/BaseAvatarGroup-823cf476.js","assets/BaseLabel-b89fb85a.js","assets/Priority-9ed7defb.js"]),"./components/Resolution.vue":()=>w(()=>import("./Resolution-2df6c94b.js"),["assets/Resolution-2df6c94b.js","assets/formatDate-dec8c8ea.js","assets/dayjs.min-c7222c9e.js","assets/index-6eb332f2.js","assets/index-5501b80d.css","assets/index-2a2a8b87.js","assets/axios.config-2fd792c7.js","assets/index.store-83d2fb82.js","assets/index-c4c1f2d4.js","assets/common-34afc17c.js","assets/collect-requests.store-f2baf94a.js","assets/qrcode.vue.esm-c9f98e98.js","assets/Dropdown-5d497608.js","assets/BaseDialog-78e31f6b.js","assets/dialog.esm-f834f9fa.js","assets/BaseMenu-a7c09e99.js","assets/menu.esm-3854e6db.js","assets/overlayeventbus.esm-4b1ada38.js","assets/BaseMenu-03958651.css","assets/BaseIcon-b4322cbb.js","assets/dynamic-import-helper-be004503.js","assets/BaseIcon-47d683d1.css","assets/BaseTextarea-deafe81c.js","assets/BaseLabel-b89fb85a.js","assets/textarea.esm-e838e03a.js","assets/BaseFroalaEditor-13e812c7.js","assets/BaseFroalaEditor.vue_vue_type_style_index_0_lang-131cb191.js","assets/BaseFroalaEditor-950bc6c5.css","assets/index-37b7fc26.js","assets/inputtext.esm-164d9e8a.js","assets/divider.esm-a0bd49d6.js","assets/review.store-70655e75.js","assets/review.service-51dfa0e1.js","assets/avatar.esm-23fbd599.js","assets/WithSelectable.vue_vue_type_style_index_0_lang-54738f43.js","assets/virtualscroller.esm-6b02c649.js","assets/index.esm-c96255b6.js","assets/WithSelectable-cbaef144.css","assets/radiobutton.esm-dddec91f.js","assets/checkbox.esm-f5e07a8a.js","assets/BaseRow-772afc2b.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/WithLabel-6ba6ccd8.js","assets/multiselect.esm-5ae01026.js","assets/index.esm-d0a3090e.js","assets/index-02845d4d.js","assets/BaseAvatar-41a31fd7.js","assets/props-0f833b60.js","assets/BaseMultiSelect-f9ba1bd2.css","assets/BaseCalendar-59a79d54.js","assets/index.esm-a233cd3d.js","assets/BaseCalendar-fdcdcd76.css","assets/BaseCol-a2b08e89.js","assets/BaseDropdown-37f84199.js","assets/dropdown.esm-9b766523.js","assets/BaseDropdown-d9d38010.css","assets/Status-2b8795c8.js","assets/WithSelectable-512e5a6e.js","assets/constants-5c471c97.js","assets/BaseFileUpload-51d934af.css","assets/BaseInput-c31e9403.css","assets/sqb-logo-ddc3d0ce.js","assets/logo-text-7b3f2522.js","assets/Users-6690b58a.js"])}),`./components/${l==null?void 0:l.component}.vue`),loadingComponent:se,delay:200})},{immediate:!0});const i=async l=>{c.versionHistoryList.forEach(g=>g.active=g.id===l.id),c.historyContent=be(l.old_text,l.new_text),c.historyShow=!0},P=()=>{c.historyShow=!1,c.versionHistoryList.forEach(l=>l.active=!1)};return(l,g)=>{const D=fe,E=Y,S=oe("tooltip");return d(),f("div",Ee,[t.toolbar?(d(),f("div",ke,[s("div",Oe,[_(xe),s("h1",Pe,I(t.title?a(o)(t.title):a(o)("title-document")),1)]),s("div",De,[y(l.$slots,"header-end")])])):C("",!0),s("div",Se,[y(l.$slots,"content",{},()=>[s("div",Ve,[_(D,{modelValue:v.value,"onUpdate:modelValue":g[0]||(g[0]=h=>v.value=h),"tab-items":t.tabItems},null,8,["modelValue","tab-items"]),a(c).versionHistoryList.length?(d(),f("div",Re,[s("div",je,[a(c).historyShow?(d(),O(E,{key:0,icon:a(K),class:"text-critic-500 cursor-pointer !w-8 !h-8 absolute right-0 top-2",onClick:P},null,8,["icon"])):C("",!0)]),s("div",Le,[(d(!0),f(A,null,q(a(c).versionHistoryList,h=>re((d(),f("div",{class:$(["flex justify-center items-center cursor-pointer w-10 h-full",h.active?"border-b-2 border-primary-500":"border-b-2"]),onClick:B=>i(h)},[_(E,{icon:a(H),class:$(["text-greyscale-900 !w-4 !h-4",h.active?"text-primary-500":"text-greyscale-500"])},null,8,["icon","class"])],10,Ae)),[[S,{value:`<h4 class='text-xs text-white -my-1 !w-[250px]'> ${a(o)("change-history")} <br> ${a(o)("author")}: ${h.created_by.full_name} <br> ${a(o)("change-time")}: ${a(j)(h.created_date)}</h4>`,escape:!0,autoHide:!1},void 0,{top:!0}]])),256))])])):C("",!0)]),s("div",Be,[y(l.$slots,m.value.slot,{},()=>[s("div",Me,[s("div",He,[(d(),O(W(u.value),{"preview-detail":t.previewDetail,"object-id":t.objectId,headers:t.headers,"tree-items":t.treeItems,"content-type":t.contentType,files:t.files},{"preview-actions":R(()=>[y(l.$slots,"preview-actions")]),_:3},8,["preview-detail","object-id","headers","tree-items","content-type","files"]))])])]),s("div",Ne,[y(l.$slots,"template",{},()=>[_(ge,{resolution:t.resolution},null,8,["resolution"])])])])])])])}}};var Fe=`
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
`,ze={root:function(t){var o=t.props;return["p-timeline p-component","p-timeline-"+o.align,"p-timeline-"+o.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},Ue=ie.extend({name:"timeline",css:Fe,classes:ze}),Ke={name:"BaseTimeline",extends:ae,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Ue,provide:function(){return{$parentInstance:this}}},J={name:"Timeline",extends:Ke,methods:{getKey:function(t,o){return this.dataKey?le.resolveFieldData(t,this.dataKey):o},getPTOptions:function(t,o){return this.ptm(t,{context:{index:o,count:this.value.length}})}}};function qe(r,t,o,c,v,u){return d(),f("div",x({class:r.cx("root")},r.ptm("root"),{"data-pc-name":"timeline"}),[(d(!0),f(A,null,q(r.value,function(m,i){return d(),f("div",x({key:u.getKey(m,i),class:r.cx("event")},u.getPTOptions("event",i)),[s("div",x({class:r.cx("opposite",{index:i})},u.getPTOptions("opposite",i)),[y(r.$slots,"opposite",{item:m,index:i})],16),s("div",x({class:r.cx("separator")},u.getPTOptions("separator",i)),[y(r.$slots,"marker",{item:m,index:i},function(){return[s("div",x({class:r.cx("marker")},u.getPTOptions("marker",i)),null,16)]}),i!==r.value.length-1?y(r.$slots,"connector",{key:0,item:m,index:i},function(){return[s("div",x({class:r.cx("connector")},u.getPTOptions("connector",i)),null,16)]}):C("",!0)],16),s("div",x({class:r.cx("content")},u.getPTOptions("content",i)),[y(r.$slots,"content",{item:m,index:i})],16)],16)}),128))],16)}J.render=qe;const We={class:"signing-process bg-greyscale-50 rounded-xl p-6 overflow-y-auto"},Ye={class:"user-avatar relative"},Je={class:"flex flex-col ml-3 w-full"},Xe={class:"flex items-center justify-between"},Ze={class:"flex items-center"},Ge={class:"text-sm font-semibold text-primary-500 mx-2"},Qe=s("div",{class:"w-[6px] h-[6px] bg-greyscale-300 rounded-lg"},null,-1),et={class:"text-sm font-medium text-greyscale-300 block ml-2"},tt={class:"flex items-center"},nt=["onClick"],st={class:"ml-1 text-greyscale-500 font-medium"},ot={class:"text-sm font-semibold text-greyscale-900 mt-1"},Vt={__name:"SigningProcessTimeline",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const t=r,{t:o}=U(),c=V(""),v=V(!1),u=L(()=>{if(!(t.composeModel&&t.composeModel.approvers&&t.composeModel.signers))return[];const e={user:t.composeModel.author,type:"author"},p=t.composeModel.approvers.map(T=>({...T,type:"approvers"})),b=t.composeModel.signers.map(T=>({...T,type:"signers"}));return[e,...p,...b]}),m=(e,p)=>e.value[p.index].type==="author"||e.value[p.index].type==="approvers"&&e.value[p.index].is_approved===!0||e.value[p.index].type==="signers"&&e.value[p.index].is_signed===!0?"bg-success-500":e.value[p.index].type==="approvers"&&e.value[p.index].is_approved===!1||e.value[p.index].type==="signers"&&e.value[p.index].is_signed===!1?"bg-critic-500":"",i=e=>e.type==="author"?de:e.type==="signers"?ue:me,P=e=>e.type==="author"?o("author"):e.type==="signers"?o("signer"):o("approver"),l=e=>e.type==="author"?j(t.composeModel.created_date):e.action_date?j(e.action_date):null,g=e=>e.type==="author"?o("author"):e.type==="approvers"&&e.is_approved===!0?o("agree"):e.type==="approvers"&&e.is_approved===!1?o("not-agree"):e.type==="approvers"&&e.is_approved===null?o("not-checked"):e.type==="signers"&&e.is_signed===!0?o("signed"):e.type==="signers"&&e.is_signed===!1?o("rejected"):o("not-checked"),D=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500 bg-success-50 border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500 bg-critic-50 border-critic-100":"text-greyscale-500 bg-greyscale-50 border-greyscale-100",E=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"border-success-100":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"border-critic-100":"border-greyscale-100",S=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?ve:e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?K:_e,h=e=>e.type==="author"||e.type==="approvers"&&e.is_approved===!0||e.type==="signers"&&e.is_signed===!0?"text-success-500":e.type==="approvers"&&e.is_approved===!1||e.type==="signers"&&e.is_signed===!1?"text-critic-500":"text-white",B=e=>{c.value=e.comment,v.value=!0};return(e,p)=>{const b=Y,T=we;return d(),f(A,null,[s("div",We,[t.composeModel?(d(),O(a(J),{key:0,value:u.value,pt:{opposite:{class:["hidden"]},connector:({props:n,context:M})=>({class:[m(n,M)]})}},{marker:R(({item:n})=>[_(b,{icon:S(n),class:$(["!w-6 !h-6",h(n)])},null,8,["icon","class"])]),content:R(({item:n})=>[s("div",{class:$(["flex p-5 rounded-xl bg-white mb-3 border",E(n)])},[s("div",Ye,[_(T,{label:n==null?void 0:n.user.first_name,color:n==null?void 0:n.user.color,shape:"circle","avatar-classes":"w-10 h-10"},null,8,["label","color"]),s("div",{class:$(["absolute left-6 top-6 border-2 rounded-3xl border-white p-1",n.type==="signers"&&!n.is_all_approved?"bg-greyscale-300":"bg-success-500"])},[_(b,{icon:n.type==="signers"&&!n.is_all_approved?a(ce):a(F),class:"!w-3 !h-3 text-white"},null,8,["icon"])],2)]),s("div",Je,[s("div",Xe,[s("div",Ze,[_(b,{icon:i(n),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),s("span",Ge,I(P(n)),1),Qe,s("span",et,I(l(n)),1)]),s("div",tt,[(n.is_approved===!1||n.is_signed===!1)&&n.comment?(d(),f("div",{key:0,class:"flex text-xs px-2 py-[2px] rounded-lg border bg-greyscale-50 mr-2 cursor-pointer",onClick:M=>B(n)},[_(b,{icon:a(pe),class:"!w-4 !h-4 text-greyscale-500"},null,8,["icon"]),s("span",st,I(a(o)("reason")),1)],8,nt)):C("",!0),s("div",{class:$(["text-xs font-semibold px-2 py-[2px] rounded-lg border",D(n)])},I(g(n)),3)])]),s("div",ot,I(n==null?void 0:n.user.full_name),1)])],2)]),_:1},8,["value","pt"])):C("",!0)]),_(a(Ie),{modelValue:v.value,"onUpdate:modelValue":p[0]||(p[0]=n=>v.value=n),"header-text":"reject-reason","editor-type":"comment","max-width":"max-w-[750px]","editor-value":c.value,footer:!1},null,8,["modelValue","editor-value"])],64)}}},Rt={__name:"BaseTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const t=r,o=z(),c={[k.SERVICE_LETTER]:N,[k.LABOR_LEAVE]:$e,[k.BUSINESS_TRIP]:Ce,[k.BUSINESS_TRIP_ORDER]:Te},v=L(()=>c[o.params.document_sub_type]||N);return(u,m)=>(d(),O(W(v.value),{"compose-model":t.composeModel},null,8,["compose-model"]))}};export{Vt as _,Rt as a,St as b};
