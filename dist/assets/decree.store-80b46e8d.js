import{N as I,s as Z,L as A,O as ke,P as ye,Q as pe,R as te,S as xe,T as Me}from"./index-7426611d.js";import{b as H,c as G}from"./formatDate-2580fd8c.js";import{u as V,f as Y,a as K,b as Q}from"./index.store-2f6c25c8.js";import{o as s,k as u,bb as Le,F as M,y as U,g as D,w as f,p as q,i as t,A as l,n as S,q as n,a8 as g,x as j,cH as R,B as Se,Y as me,L as de,cM as $e,cF as Ne,Z as _e,z as Te,j as fe,_ as be,b0 as W,c0 as ee,c1 as ce,bz as le,t as he,u as je,ax as De,ak as ze,cj as Ie,ay as re,an as Ue}from"./index-816ade61.js";import{u as P,w as X,d as ie}from"./axios.config-e9c5d745.js";import{Q as B}from"./qrcode.vue.esm-e6568e71.js";import{_ as ne}from"./BaseRow-104c3234.js";import{_ as oe}from"./BaseCol-85dba4f1.js";import{_ as Ae}from"./BaseInput-3c889cce.js";import{c as y,r as x,u as Oe}from"./index-b1c143d5.js";import{a as Re,_ as ue}from"./DepartmentMultiSelect-42ccbc20.js";import{_ as Ee}from"./BaseBrickTab-85a7c110.js";import{_ as Ce}from"./BaseFileUpload-7c771c6c.js";import{_ as He}from"./BaseFroalaEditor-75951f6e.js";import{_ as Pe}from"./_plugin-vue_export-helper-c27b6911.js";import{L as Be}from"./LayoutWithTabs-2c9c36c9.js";import"./BaseTabMenu-901efab2.js";import"./dialog.esm-62b776ef.js";import"./tabpanel.esm-0df118e0.js";import"./BaseTabView-668753e1.js";import{u as Ve,d as Fe}from"./common-6f9da37f.js";import{S as qe,a as Ze,b as Ge}from"./index-296cae91.js";import{F as ae}from"./constants-5c471c97.js";import{_ as Ye}from"./BaseDialog-47088638.js";const Ke="data:image/png;base64,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",Qe={},We={class:"mb-[10px]"},Xe=Le('<div class="flex"><img src="'+Ke+'" alt="Logo" class="w-[114px] h-full"><div class="ml-2"><div class="text-[8px] font-bold">&quot;O&#39;ZBEKISTON SANOAT-QURILISH BANKI&quot; AKSIYADORLIK TIJORAT BANKI</div><div class="text-[8px] font-bold mt-[2px]">АКЦИОНЕРНЫЙ КОММЕРЧЕСКИЙ БАНК &quot;УЗБЕКСКИЙ ПРОМЫШЛЕННО-СТРОИТЕЛЬНЫЙ БАНК&quot;</div></div></div>',1),Je=[Xe];function et(r,e){return s(),u("div",We,Je)}const J=Pe(Qe,[["render",et]]),tt={class:"mt-6 pb-2 px-4"},nt={class:"text-sm font-semibold block"},ot={class:"text-sm font-semibold block"},se={__name:"BaseSigners",props:{signers:{type:Array,default:[]}},setup(r){const e=r;return(d,o)=>{const w=oe,h=ne;return s(),u("div",tt,[(s(!0),u(M,null,U(e.signers,p=>(s(),D(h,{key:p.id,class:"mb-2 items-center"},{default:f(()=>[q(w,{"col-class":"w-1/2"},{default:f(()=>[t("span",nt,l(p.user?p.user.position.name:p.position.name),1)]),_:2},1024),q(w,{"col-class":"w-1/4"},{default:f(()=>[p.is_signed?(s(),D(B,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):S("",!0)]),_:2},1024),q(w,{"col-class":"w-1/4"},{default:f(()=>[t("span",ot,l(n(I)(p)),1)]),_:2},1024)]),_:2},1024))),128))])}}},lt={class:"flex flex-col my-4 text-xs font-light"},st=t("span",{class:"font-medium"},"Ijrochi:",-1),rt=t("span",null,[t("span",{class:"font-medium"},"Tel:"),g(" +99899 777 77 77 (1234)")],-1),it=t("span",{class:"font-medium"},"Kiritildi:",-1),at=t("span",{class:"font-medium"},"Imzolandi:",-1),ge={__name:"BasePerformer",props:{composeModel:{type:Object},author:{type:Object}},setup(r){const e=r;return(d,o)=>{var w,h,p,i;return s(),u("div",lt,[t("span",null,[st,g(" "+l(n(I)(e.author)),1)]),rt,t("span",null,[(w=e.composeModel)!=null&&w.created_date?(s(),u(M,{key:0},[it,g(" "+l(((h=e.composeModel)==null?void 0:h.created_date)&&n(H)(e.composeModel.created_date)+" "),1)],64)):S("",!0),(p=e.composeModel)!=null&&p.is_signed?(s(),u(M,{key:1},[at,g(" "+l(((i=e.composeModel)==null?void 0:i.modified_date)&&n(H)(e.composeModel.modified_date)),1)],64)):S("",!0)])])}}},dt={class:"inner-letter-template"},ct={class:"w-full rounded-[6px] bg-greyscale-50 text-sm font-semibold px-3 py-1",style:{color:"#003D64"}},pt={class:"flex flex-col text-sm font-medium gap-x-2 mt-4"},ut={class:"flex flex-col items-end text-sm font-semibold text-right gap-y-1 my-4"},qt=t("div",{class:"flex w-full justify-center text-center text-sm font-semibold my-5"}," XIZMAT YOZISHMASI ",-1),mt=["innerHTML"],_t=["innerHTML"],ft={class:"flex flex-col my-4 text-xs font-light"},bt=t("span",{class:"font-medium"},"Ijrochi:",-1),ht=t("span",null,[t("span",{class:"font-medium"},"Tel:"),g(" +99899 777 77 77 (1234)")],-1),gt=t("span",{class:"font-medium"},"Kiritildi:",-1),wt=t("span",{class:"font-medium"},"Imzolandi:",-1),vt={__name:"InnerLetterTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(r){const e=r,d=j(()=>{var h,p,i,c,a,m;return(((p=(h=e.composeModel)==null?void 0:h.receiver)==null?void 0:p.departments)||((c=(i=e.composeModel)==null?void 0:i.receiver)==null?void 0:c.organizations)||((m=(a=e.composeModel)==null?void 0:a.receiver)==null?void 0:m.companies)||[]).flat()}),o=j(()=>{var h;return e.preview?P().currentUser:(h=e.composeModel)==null?void 0:h.author}),w=V();return(h,p)=>{var i,c,a,m,L,$,N,k,T,b;return s(),u("div",dt,[q(n(J)),t("div",ct,l(o.value.top_level_department.name),1),t("div",pt,[t("span",null," № "+l((i=e.composeModel)==null?void 0:i.register_number),1),t("span",null,l(((c=e.composeModel)==null?void 0:c.register_date)&&n(G)((a=e.composeModel)==null?void 0:a.register_date)),1)]),t("div",ut,[(s(!0),u(M,null,U(d.value,_=>(s(),u("div",{class:"max-w-[300px]",key:_.id},l(_.name),1))),128))]),qt,n(w).historyShow?(s(),u("div",{key:0,class:"text-justify",innerHTML:n(w).historyContent},null,8,mt)):(s(),u("div",{key:1,class:"text-justify",innerHTML:(m=e.composeModel)==null?void 0:m.content},null,8,_t)),q(n(se),{signers:(L=e.composeModel)==null?void 0:L.signers},null,8,["signers"]),t("div",ft,[t("span",null,[bt,g(" "+l((($=e.composeModel)==null?void 0:$.author)&&n(I)((N=e.composeModel)==null?void 0:N.author)),1)]),ht,t("span",null,[gt,g(" "+l(((k=e.composeModel)==null?void 0:k.created_date)&&n(H)(e.composeModel.created_date)+" ")+" ",1),(T=e.composeModel)!=null&&T.is_signed?(s(),u(M,{key:0},[wt,g(" "+l(((b=e.composeModel)==null?void 0:b.modified_date)&&n(H)(e.composeModel.modified_date)),1)],64)):S("",!0)])])])}}},kt={class:"application-letter-template"},yt={class:"flex justify-end"},xt={class:"flex flex-col items-end",style:{width:"70%"}},Mt=t("div",{class:"text-sm font-bold text-end"},"“Ўзсаноатқурилишбанк” АТБ",-1),Lt={class:"text-sm font-bold text-end"},St={class:"text-sm font-bold text-end"},$t={class:"text-sm font-bold text-end"},Nt={class:"text-sm font-bold text-end"},Tt={class:"text-sm font-bold text-end"},jt=t("div",{class:"flex justify-center text-base font-bold my-8"}," АРИЗА ",-1),Dt=["innerHTML"],zt=["innerHTML"],It={class:"flex flex-col my-4 text-xs font-light"},Ut=t("span",{class:"font-medium"},"Ijrochi:",-1),At=t("span",null,[t("span",{class:"font-medium"},"Tel:"),g(" +99899 777 77 77 (1234)")],-1),Ot=t("span",{class:"font-medium"},"Kiritildi:",-1),Rt=t("span",{class:"font-medium"},"Imzolandi:",-1),ul={__name:"ApplicationLetterTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0}},setup(r){const e=r,d=V();return(o,w)=>{var h,p,i,c,a,m,L,$,N,k,T,b,_,E,O,z,C,v;return s(),u("div",kt,[t("div",yt,[t("div",xt,[Mt,t("div",Lt,l((i=(p=(h=e.composeModel)==null?void 0:h.curator)==null?void 0:p.position)==null?void 0:i.name),1),t("div",St,l(e.composeModel&&e.composeModel.curator&&n(I)((c=e.composeModel)==null?void 0:c.curator))+"га",1),t("div",$t,l((L=(m=(a=e.composeModel)==null?void 0:a.author)==null?void 0:m.top_level_department)==null?void 0:L.name),1),t("div",Nt,l((k=(N=($=e.composeModel)==null?void 0:$.author)==null?void 0:N.position)==null?void 0:k.name),1),t("div",Tt,l(e.composeModel&&e.composeModel.author&&n(I)((T=e.composeModel)==null?void 0:T.author))+"дан",1)])]),jt,n(d).historyShow?(s(),u("div",{key:0,class:"text-justify",innerHTML:n(d).historyContent},null,8,Dt)):(s(),u("div",{key:1,class:"text-justify",innerHTML:(b=e.composeModel)==null?void 0:b.content},null,8,zt)),q(n(se),{signers:(_=e.composeModel)==null?void 0:_.signers},null,8,["signers"]),t("div",It,[t("span",null,[Ut,g(" "+l(((E=e.composeModel)==null?void 0:E.author)&&n(I)((O=e.composeModel)==null?void 0:O.author)),1)]),At,t("span",null,[Ot,g(" "+l(((z=e.composeModel)==null?void 0:z.created_date)&&n(H)(e.composeModel.created_date)+" ")+" ",1),(C=e.composeModel)!=null&&C.is_signed?(s(),u(M,{key:0},[Rt,g(" "+l(((v=e.composeModel)==null?void 0:v.modified_date)&&n(H)(e.composeModel.modified_date)),1)],64)):S("",!0)])])])}}},Et={class:"business-trip-notice-template-view"},Ct={class:"w-full rounded-[6px] bg-greyscale-50 text-sm font-semibold px-3 py-1",style:{color:"#003D64"}},Ht={class:"flex flex-col text-sm font-medium mt-4"},Pt={class:"flex w-full items-center justify-between mt-1"},Bt={class:"flex flex-col"},Vt={class:"text-sm mt-1"},Ft=t("span",{class:"font-bold"},"Topshiriq: ",-1),Zt={key:0},Gt={class:"flex flex-col items-end text-sm font-semibold text-right my-4"},Yt=t("div",{class:"flex w-full justify-center text-base font-bold my-5"}," BILDIRISHNOMA ",-1),Kt={class:"text-sm italic text-justify my-4 indent-8"},Qt=["innerHTML"],Wt=["innerHTML"],Xt={class:"employees-table text-sm mt-4"},Jt={class:"w-full"},en=t("tr",{class:"text-center"},[t("td",{class:"border-2 p-1"},"№"),t("td",{class:"border-2 p-1"},"F.I.SH"),t("td",{class:"border-2 p-1"},"Departament va lavozim"),t("td",{class:"border-2 p-1"},"Yo'nalish"),t("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),tn={class:"text-center"},nn={class:"border-2 p-1"},on={class:"border-2 p-1"},ln={class:"border-2 p-1"},sn=t("br",null,null,-1),rn={class:"border-2 p-1"},an={class:"flex flex-col gap-y-1"},dn={key:0},cn={class:"border-2 p-1 w-[100px]"},pn=t("br",null,null,-1),un={class:"flex flex-col my-4 text-xs font-light"},qn=t("span",{class:"font-medium"},"Ijrochi:",-1),mn=t("span",null,[t("span",{class:"font-medium"},"Tel:"),g(" +99899 777 77 77 (1234)")],-1),_n=t("span",{class:"font-medium"},"Kiritildi:",-1),fn=t("span",{class:"font-medium"},"Imzolandi:",-1),ql={__name:"BusinessTripNoticeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(r){const e=r,d=V(),o=j(()=>{var c;let i=e.composeModel&&e.composeModel.signers&&e.composeModel.signers.length&&((c=e.composeModel)==null?void 0:c.signers.find(a=>a.type===R.BASIC_SIGNER));return e.preview?e.composeModel.__curator:{...e.composeModel.curator,is_signed:i?i.is_signed:null,performers:i?i.performers:null}}),w=j(()=>{var i,c,a;return e.preview?(i=e.composeModel)==null?void 0:i.__employees.map(m=>({empFullName:m.full_name,empDepName:m.top_level_department.name,empPositionName:m.position.name,destinations:e.composeModel.__companies,startDate:e.composeModel.start_date,endDate:e.composeModel.end_date})):(a=(c=e.composeModel)==null?void 0:c.notices)==null?void 0:a.map(m=>({empFullName:m.user.full_name,empDepName:m.user.top_level_department.name,empPositionName:m.user.position.name,destinations:m.destinations,startDate:m.start_date,endDate:m.end_date}))}),h=j(()=>{var i,c;return e.preview?(i=e.composeModel)==null?void 0:i.__signers:(c=e.composeModel)==null?void 0:c.signers.filter(a=>a.type===R.SIGNER)}),p=j(()=>{var i;return e.preview?P().currentUser:(i=e.composeModel)==null?void 0:i.author});return(i,c)=>{var a,m,L,$,N,k,T,b,_,E,O,z,C;return s(),u("div",Et,[q(n(J)),t("div",Ct,l((a=p.value)==null?void 0:a.top_level_department.name),1),t("div",Ht,[t("span",null," № "+l((m=e.composeModel)==null?void 0:m.register_number),1),t("span",null,l(((L=e.composeModel)==null?void 0:L.register_date)&&n(G)(($=e.composeModel)==null?void 0:$.register_date)),1)]),t("div",Pt,[t("div",Bt,[o.value&&o.value.is_signed&&o.value.performers?(s(),u(M,{key:0},[q(B,{value:"Work Zone",size:50,level:"L","render-as":"svg"}),t("div",Vt,[Ft,(s(!0),u(M,null,U(o.value.performers,(v,F)=>(s(),u("span",null,[g(l(v&&v.first_name&&v.first_name[0])+". "+l(v.last_name),1),F!==o.value.performers.length-1?(s(),u("span",Zt,",  ")):S("",!0)]))),256))])],64)):S("",!0)]),t("div",Gt,[t("span",null,l((k=(N=o.value)==null?void 0:N.position)==null?void 0:k.name),1),t("span",null,l((T=o.value)==null?void 0:T.first_name[0])+". "+l((b=o.value)==null?void 0:b.last_name)+"ga",1)])]),Yt,t("div",Kt," Qisqacha mazmuni: "+l((_=e.composeModel)==null?void 0:_.short_description),1),n(d).historyShow?(s(),u("div",{key:0,class:"text-justify",innerHTML:n(d).historyContent},null,8,Qt)):(s(),u("div",{key:1,class:"text-justify",innerHTML:(E=e.composeModel)==null?void 0:E.content},null,8,Wt)),t("div",Xt,[t("table",Jt,[en,w.value&&w.value.length?(s(!0),u(M,{key:0},U(w.value,(v,F)=>(s(),u("tr",tn,[t("td",nn,l(F+1),1),t("td",on,l(v.empFullName),1),t("td",ln,[g(l(v.empDepName)+" ",1),sn,g(" "+l(v.empPositionName),1)]),t("td",rn,[t("div",an,[(s(!0),u(M,null,U(v.destinations,(we,ve)=>(s(),u("span",null,[g(l(we.name)+" ",1),ve!==v.destinations.length-1?(s(),u("span",dn,",")):S("",!0)]))),256))])]),t("td",cn,[g(l(v.startDate)+" ",1),pn,g(" "+l(v.endDate),1)])]))),256)):S("",!0)])]),q(n(se),{signers:h.value},null,8,["signers"]),t("div",un,[t("span",null,[qn,g(" "+l(n(I)(p.value)),1)]),mn,t("span",null,[_n,g(" "+l(((O=e.composeModel)==null?void 0:O.created_date)&&n(H)(e.composeModel.created_date)+" ")+" ",1),(z=e.composeModel)!=null&&z.is_signed?(s(),u(M,{key:0},[fn,g(" "+l(((C=e.composeModel)==null?void 0:C.modified_date)&&n(H)(e.composeModel.modified_date)),1)],64)):S("",!0)])])])}}},bn={class:"business-trip-decree-template-view"},hn={class:"w-full rounded-[6px] bg-greyscale-50 text-sm font-semibold px-3 py-1",style:{color:"#003D64"}},gn={class:"flex flex-col text-sm font-medium mt-4"},wn=t("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),vn=["innerHTML"],kn=["innerHTML"],yn={class:"employees-table text-sm mt-4"},xn={class:"w-full"},Mn=t("tr",{class:"text-center"},[t("td",{class:"border-2 p-1"},"№"),t("td",{class:"border-2 p-1"},"F.I.SH"),t("td",{class:"border-2 p-1"},"Departament va lavozim"),t("td",{class:"border-2 p-1"},"Yo'nalish"),t("td",{class:"border-2 p-1"},"Xizmat sanasi")],-1),Ln={class:"text-center"},Sn={class:"border-2 p-1"},$n={class:"border-2 p-1"},Nn={class:"border-2 p-1"},Tn=t("br",null,null,-1),jn={class:"border-2 p-1"},Dn={class:"flex flex-col gap-y-1"},zn={key:0},In={class:"border-2 p-1 w-[100px]"},Un=t("br",null,null,-1),An={class:"mt-6 pb-2 px-4"},On={class:"text-sm font-semibold block"},Rn={class:"text-sm font-semibold block"},En={class:"text-sm font-semibold block"},Cn={class:"text-sm font-semibold block"},ml={__name:"BusinessTripDecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(r){const e=r,d=V(),o=j(()=>{var i;return e.preview?P().currentUser:(i=e.composeModel)==null?void 0:i.author}),w=j(()=>{var i,c,a;return e.preview?(i=e.composeModel)==null?void 0:i.__employees.map(m=>({empFullName:m.full_name,empDepName:m.top_level_department.name,empPositionName:m.position.name,destinations:e.composeModel.__companies,startDate:e.composeModel.start_date,endDate:e.composeModel.end_date})):(a=(c=e.composeModel)==null?void 0:c.notices)==null?void 0:a.map(m=>({empFullName:m.user.full_name,empDepName:m.user.top_level_department.name,empPositionName:m.user.position.name,destinations:m.destinations,startDate:m.start_date,endDate:m.end_date}))}),h=j(()=>{var c,a,m;if(e.preview)return[(c=e.composeModel)==null?void 0:c.__curator];const i=(a=e.composeModel)==null?void 0:a.signers.find(L=>L.type===R.BASIC_SIGNER);return i?[i]:[(m=e.composeModel)==null?void 0:m.curator].filter(Boolean)}),p=j(()=>{var i,c;return e.preview?(i=e.composeModel)==null?void 0:i.__signers:(c=e.composeModel)==null?void 0:c.signers.filter(a=>a.type===R.SIGNER)});return(i,c)=>{var L,$,N,k,T;const a=oe,m=ne;return s(),u("div",bn,[q(n(J)),t("div",hn,l((L=o.value)==null?void 0:L.top_level_department.name),1),t("div",gn,[t("span",null," № "+l(($=e.composeModel)==null?void 0:$.register_number),1),t("span",null,l(((N=e.composeModel)==null?void 0:N.register_date)&&n(G)((k=e.composeModel)==null?void 0:k.register_date)),1)]),wn,n(d).historyShow?(s(),u("div",{key:0,class:"text-justify",innerHTML:n(d).historyContent},null,8,vn)):(s(),u("div",{key:1,class:"text-justify",innerHTML:(T=e.composeModel)==null?void 0:T.content},null,8,kn)),t("div",yn,[t("table",xn,[Mn,w.value&&w.value.length?(s(!0),u(M,{key:0},U(w.value,(b,_)=>(s(),u("tr",Ln,[t("td",Sn,l(_+1),1),t("td",$n,l(b.empFullName),1),t("td",Nn,[g(l(b.empDepName)+" ",1),Tn,g(" "+l(b.empPositionName),1)]),t("td",jn,[t("div",Dn,[(s(!0),u(M,null,U(b.destinations,(E,O)=>(s(),u("span",null,[g(l(E.name)+" ",1),O!==b.destinations.length-1?(s(),u("span",zn,",")):S("",!0)]))),256))])]),t("td",In,[g(l(b.startDate)+" ",1),Un,g(" "+l(b.endDate),1)])]))),256)):S("",!0)])]),t("div",An,[(s(!0),u(M,null,U(h.value,b=>(s(),D(m,{key:b.id,class:"mb-2 items-center"},{default:f(()=>[q(a,{"col-class":"w-1/2"},{default:f(()=>[t("span",On,l(b.user?b.user.position.name:b.position.name),1)]),_:2},1024),q(a,{"col-class":"w-1/4"},{default:f(()=>[b.is_signed?(s(),D(B,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):S("",!0)]),_:2},1024),q(a,{"col-class":"w-1/4"},{default:f(()=>[t("span",Rn,l(n(I)(b)),1)]),_:2},1024)]),_:2},1024))),128)),(s(!0),u(M,null,U(p.value,b=>(s(),D(m,{key:b.id,class:"mb-2 items-center"},{default:f(()=>[q(a,{"col-class":"w-1/2"},{default:f(()=>[t("span",En,l(b.user?b.user.position.name:b.position.name),1)]),_:2},1024),q(a,{"col-class":"w-1/4"},{default:f(()=>[b.is_signed?(s(),D(B,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):S("",!0)]),_:2},1024),q(a,{"col-class":"w-1/4"},{default:f(()=>[t("span",Cn,l(n(I)(b)),1)]),_:2},1024)]),_:2},1024))),128))]),q(n(ge),{"compose-model":e.composeModel,author:o.value},null,8,["compose-model","author"])])}}},Hn={class:"ordinary-notice-template-view"},Pn={class:"w-full rounded-[6px] bg-greyscale-50 text-sm font-semibold px-3 py-1",style:{color:"#003D64"}},Bn={class:"flex flex-col text-sm font-medium mt-4"},Vn={class:"flex w-full items-center justify-between mt-1"},Fn={class:"flex flex-col"},Zn={class:"text-sm mt-1"},Gn=t("span",{class:"font-bold"},"Topshiriq: ",-1),Yn={key:0},Kn={class:"flex flex-col items-end text-sm font-semibold text-right my-4"},Qn=t("div",{class:"flex w-full justify-center text-base font-bold my-5"}," BILDIRISHNOMA ",-1),Wn={class:"text-sm italic text-justify my-4 indent-8"},Xn=["innerHTML"],Jn=["innerHTML"],eo={class:"flex flex-col my-4 text-xs font-light"},to=t("span",{class:"font-medium"},"Ijrochi:",-1),no=t("span",null,[t("span",{class:"font-medium"},"Tel:"),g(" +99899 777 77 77 (1234)")],-1),oo=t("span",{class:"font-medium"},"Kiritildi:",-1),lo=t("span",{class:"font-medium"},"Imzolandi:",-1),_l={__name:"OrdinaryNoticeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(r){const e=r,d=V(),o=j(()=>{var i;let p=e.composeModel&&e.composeModel.signers&&e.composeModel.signers.length&&((i=e.composeModel)==null?void 0:i.signers.find(c=>c.type===R.BASIC_SIGNER));return e.preview?e.composeModel.__curator:{...e.composeModel.curator,is_signed:p?p.is_signed:null,performers:p?p.performers:null}}),w=j(()=>{var p,i;return e.preview?(p=e.composeModel)==null?void 0:p.__signers:(i=e.composeModel)==null?void 0:i.signers.filter(c=>c.type===R.SIGNER)}),h=j(()=>{var p;return e.preview?P().currentUser:(p=e.composeModel)==null?void 0:p.author});return(p,i)=>{var c,a,m,L,$,N,k,T,b,_,E,O,z;return s(),u("div",Hn,[q(n(J)),t("div",Pn,l((c=h.value)==null?void 0:c.top_level_department.name),1),t("div",Bn,[t("span",null," № "+l((a=e.composeModel)==null?void 0:a.register_number),1),t("span",null,l(((m=e.composeModel)==null?void 0:m.register_date)&&n(G)((L=e.composeModel)==null?void 0:L.register_date)),1)]),t("div",Vn,[t("div",Fn,[o.value&&o.value.is_signed&&o.value.performers?(s(),u(M,{key:0},[q(B,{value:"Work Zone",size:50,level:"L","render-as":"svg"}),t("div",Zn,[Gn,(s(!0),u(M,null,U(o.value.performers,(C,v)=>(s(),u("span",null,[g(l(C&&C.first_name&&C.first_name[0])+". "+l(C.last_name),1),v!==o.value.performers.length-1?(s(),u("span",Yn,",  ")):S("",!0)]))),256))])],64)):S("",!0)]),t("div",Kn,[t("span",null,l((N=($=o.value)==null?void 0:$.position)==null?void 0:N.name),1),t("span",null,l((k=o.value)==null?void 0:k.first_name[0])+". "+l((T=o.value)==null?void 0:T.last_name)+"ga",1)])]),Qn,t("div",Wn," Qisqacha mazmuni: "+l((b=e.composeModel)==null?void 0:b.short_description),1),n(d).historyShow?(s(),u("div",{key:0,class:"text-justify",innerHTML:n(d).historyContent},null,8,Xn)):(s(),u("div",{key:1,class:"text-justify",innerHTML:(_=e.composeModel)==null?void 0:_.content},null,8,Jn)),q(n(se),{signers:w.value},null,8,["signers"]),t("div",eo,[t("span",null,[to,g(" "+l(n(I)(h.value)),1)]),no,t("span",null,[oo,g(" "+l(((E=e.composeModel)==null?void 0:E.created_date)&&n(H)(e.composeModel.created_date)+" ")+" ",1),(O=e.composeModel)!=null&&O.is_signed?(s(),u(M,{key:0},[lo,g(" "+l(((z=e.composeModel)==null?void 0:z.modified_date)&&n(H)(e.composeModel.modified_date)),1)],64)):S("",!0)])])])}}},so={class:"order-template-view"},ro={class:"flex flex-col text-sm font-medium mt-4"},io=t("div",{class:"flex w-full justify-center text-base font-bold my-5"}," BUYRUQ ",-1),ao=["innerHTML"],co=["innerHTML"],po={class:"mt-6 pb-2 px-4"},uo={class:"text-sm font-semibold block"},qo={class:"text-sm font-semibold block"},mo=t("div",{class:"text-sm italic mb-2 mt-4"},"Kelishuvchilar:",-1),_o={class:"text-sm font-semibold block"},fo={class:"text-sm font-semibold block"},bo={class:"flex flex-col my-4 text-xs font-light"},ho=t("span",{class:"font-medium"},"Ijrochi:",-1),go=t("span",null,[t("span",{class:"font-medium"},"Tel:"),g(" +99899 777 77 77 (1234)")],-1),wo=t("span",{class:"font-medium"},"Kiritildi:",-1),vo=t("span",{class:"font-medium"},"Imzolandi:",-1),fl={__name:"OrderLetterTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(r){const e=r,d=V(),o=j(()=>{var p;return e.preview?P().currentUser:(p=e.composeModel)==null?void 0:p.author}),w=j(()=>{var i,c,a;if(e.preview)return[(i=e.composeModel)==null?void 0:i.__curator];const p=(c=e.composeModel)==null?void 0:c.signers.find(m=>m.type===R.BASIC_SIGNER);return p?[p]:[(a=e.composeModel)==null?void 0:a.curator].filter(Boolean)}),h=j(()=>{var p,i;return e.preview?(p=e.composeModel)==null?void 0:p.__negotiators:(i=e.composeModel)==null?void 0:i.signers.filter(c=>c.type===R.NEGOTIATOR)});return(p,i)=>{var m,L,$,N,k,T,b;const c=oe,a=ne;return s(),u("div",so,[q(n(J)),t("div",ro,[t("span",null," № "+l((m=e.composeModel)==null?void 0:m.register_number),1),t("span",null,l(((L=e.composeModel)==null?void 0:L.register_date)&&n(G)(($=e.composeModel)==null?void 0:$.register_date)),1)]),io,n(d).historyShow?(s(),u("div",{key:0,class:"text-justify",innerHTML:n(d).historyContent},null,8,ao)):(s(),u("div",{key:1,class:"text-justify",innerHTML:(N=e.composeModel)==null?void 0:N.content},null,8,co)),t("div",po,[(s(!0),u(M,null,U(w.value,_=>(s(),D(a,{key:_.id,class:"mb-2 items-center"},{default:f(()=>[q(c,{"col-class":"w-1/2"},{default:f(()=>[t("span",uo,l(_.user?_.user.position.name:_.position.name),1)]),_:2},1024),q(c,{"col-class":"w-1/4"},{default:f(()=>[_.is_signed?(s(),D(B,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):S("",!0)]),_:2},1024),q(c,{"col-class":"w-1/4"},{default:f(()=>[t("span",qo,l(n(I)(_)),1)]),_:2},1024)]),_:2},1024))),128)),h.value&&h.value.length?(s(),u(M,{key:0},[mo,(s(!0),u(M,null,U(h.value,_=>(s(),D(a,{key:_.id,class:"mb-2 items-center"},{default:f(()=>[q(c,{"col-class":"w-1/2"},{default:f(()=>[t("span",_o,l(_.user?_.user.position.name:_.position.name),1)]),_:2},1024),q(c,{"col-class":"w-1/4"},{default:f(()=>[_.is_signed?(s(),D(B,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):S("",!0)]),_:2},1024),q(c,{"col-class":"w-1/4"},{default:f(()=>[t("span",fo,l(n(I)(_)),1)]),_:2},1024)]),_:2},1024))),128))],64)):S("",!0)]),t("div",bo,[t("span",null,[ho,g(" "+l(n(I)(o.value)),1)]),go,t("span",null,[wo,g(" "+l(((k=e.composeModel)==null?void 0:k.created_date)&&n(H)(e.composeModel.created_date)+" ")+" ",1),(T=e.composeModel)!=null&&T.is_signed?(s(),u(M,{key:0},[vo,g(" "+l(((b=e.composeModel)==null?void 0:b.modified_date)&&n(H)(e.composeModel.modified_date)),1)],64)):S("",!0)])])])}}},ko={class:"decree-template-view"},yo={class:"flex flex-col text-sm font-medium mt-4"},xo=t("div",{class:"flex w-full justify-center text-base font-bold my-5"}," FARMOYISH ",-1),Mo=["innerHTML"],Lo=["innerHTML"],So={class:"mt-6 pb-2 px-4"},$o={class:"text-sm font-semibold block"},No={class:"text-sm font-semibold block"},To={class:"text-sm font-semibold block"},jo={class:"text-sm font-semibold block"},bl={__name:"DecreeTemplate",props:{composeModel:{type:Object,default:()=>{},required:!0},preview:{type:Boolean,default:!1}},setup(r){const e=r,d=V(),o=j(()=>{var p;return e.preview?P().currentUser:(p=e.composeModel)==null?void 0:p.author}),w=j(()=>{var i,c,a;if(e.preview)return[(i=e.composeModel)==null?void 0:i.__curator];const p=(c=e.composeModel)==null?void 0:c.signers.find(m=>m.type===R.BASIC_SIGNER);return p?[p]:[(a=e.composeModel)==null?void 0:a.curator].filter(Boolean)}),h=j(()=>{var p,i;return e.preview?(p=e.composeModel)==null?void 0:p.__signers:(i=e.composeModel)==null?void 0:i.signers.filter(c=>c.type===R.SIGNER)});return(p,i)=>{var m,L,$,N;const c=oe,a=ne;return s(),u("div",ko,[q(n(J)),t("div",yo,[t("span",null," № "+l((m=e.composeModel)==null?void 0:m.register_number),1),t("span",null,l(((L=e.composeModel)==null?void 0:L.register_date)&&n(G)(($=e.composeModel)==null?void 0:$.register_date)),1)]),xo,n(d).historyShow?(s(),u("div",{key:0,class:"text-justify",innerHTML:n(d).historyContent},null,8,Mo)):(s(),u("div",{key:1,class:"text-justify",innerHTML:(N=e.composeModel)==null?void 0:N.content},null,8,Lo)),t("div",So,[(s(!0),u(M,null,U(w.value,k=>(s(),D(a,{key:k.id,class:"mb-2 items-center"},{default:f(()=>[q(c,{"col-class":"w-1/2"},{default:f(()=>[t("span",$o,l(k.user?k.user.position.name:k.position.name),1)]),_:2},1024),q(c,{"col-class":"w-1/4"},{default:f(()=>[k.is_signed?(s(),D(B,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):S("",!0)]),_:2},1024),q(c,{"col-class":"w-1/4"},{default:f(()=>[t("span",No,l(n(I)(k)),1)]),_:2},1024)]),_:2},1024))),128)),(s(!0),u(M,null,U(h.value,k=>(s(),D(a,{key:k.id,class:"mb-2 items-center"},{default:f(()=>[q(c,{"col-class":"w-1/2"},{default:f(()=>[t("span",To,l(k.user?k.user.position.name:k.position.name),1)]),_:2},1024),q(c,{"col-class":"w-1/4"},{default:f(()=>[k.is_signed?(s(),D(B,{key:0,value:"Work Zone",size:50,level:"L","render-as":"svg"})):S("",!0)]),_:2},1024),q(c,{"col-class":"w-1/4"},{default:f(()=>[t("span",jo,l(n(I)(k)),1)]),_:2},1024)]),_:2},1024))),128))]),q(n(ge),{"compose-model":e.composeModel,author:o.value},null,8,["compose-model","author"])])}}};var Do=`
/*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5rem;
    margin-right: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3rem;
    margin-right: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3rem;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5rem;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3rem;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5rem;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6rem;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5rem;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6rem;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5rem;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9rem;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5rem;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9rem;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5rem;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12rem;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5rem;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12rem;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5rem;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15rem;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5rem;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15rem;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5rem;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18rem;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5rem;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18rem;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5rem;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21rem;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5rem;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21rem;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5rem;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24rem;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5rem;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24rem;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5rem;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27rem;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5rem;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27rem;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5rem;
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background-color: #000;
}
.ql-editor .ql-bg-red {
    background-color: #e60000;
}
.ql-editor .ql-bg-orange {
    background-color: #f90;
}
.ql-editor .ql-bg-yellow {
    background-color: #ff0;
}
.ql-editor .ql-bg-green {
    background-color: #008a00;
}
.ql-editor .ql-bg-blue {
    background-color: #06c;
}
.ql-editor .ql-bg-purple {
    background-color: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}
`,zo={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"};Se.extend({name:"editor",css:Do,classes:zo});(function(){try{return window.Quill}catch{return null}})();const Io={__name:"EditorWithTabs",props:{modelValue:{type:String},fileUploadContainerClasses:{type:String,default:""},files:{type:Array,default:[]}},emits:["update:modelValue","emit:fileUpload"],setup(r,{emit:e}){const d=r,o=me(d,"modelValue"),w=de([{title:"text",slot:"editor",icon:$e},{title:"file",slot:"file",icon:Ne}]);return(h,p)=>(s(),D(Ee,{"tab-panel-list":w.value,"panel-container-class":"px-0"},{editor:f(()=>[q(He,{modelValue:n(o),"onUpdate:modelValue":p[0]||(p[0]=i=>_e(o)?o.value=i:null)},null,8,["modelValue"])]),file:f(()=>[t("div",{class:Te(d.fileUploadContainerClasses)},[q(Ce,{files:d.files,"onEmit:fileUpload":p[1]||(p[1]=i=>e("emit:fileUpload",i))},null,8,["files"])],2)]),_:1},8,["tab-panel-list"]))}},Uo={class:"flex flex-col justify-between h-full"},Ao={class:"px-6 py-4 overflow-y-auto"},Oo={class:"actions p-6"},Ro={__name:"FormContainer",emits:["emit:preview","emit:clearForm"],setup(r,{emit:e}){return(d,o)=>{const w=be;return s(),u("div",Uo,[t("div",Ao,[fe(d.$slots,"default")]),t("div",Oo,[q(w,{label:"clear-form",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent",onClick:o[0]||(o[0]=h=>e("emit:clearForm"))}),q(w,{label:"preview",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",onClick:o[1]||(o[1]=h=>e("emit:preview"))})])])}}},Eo=W("sd-stores-inner",{state:()=>{var r,e;return{buttonLoading:!1,detailLoading:!1,model:{company:(e=(r=P().currentUser)==null?void 0:r.company)==null?void 0:e.id,content:null,document_type:ee.INNER,document_sub_type:ce.SERVICE_LETTER,register_number:null,short_description:null,title:null,approvers:[],journal:le.INNER,departments:[],sender:null,signers:[],files:[],__files:[],__approvers:[],__approvers_copy:[],__departments:[],__signers:[],__signers_copy:[]},rules:{register_number:{required:y.withMessage("Поле не должен быть пустым",x)},short_description:{required:y.withMessage("Поле не должен быть пустым",x)},content:{required:y.withMessage("Поле не должен быть пустым",x)},__departments:{required:y.withMessage("Поле не должен быть пустым",x)},__approvers:{},__signers:{required:y.withMessage("Поле не должен быть пустым",x)}}}},actions:{async actionCreateDocument(r){let e={...r,type:qe,sub_type:qe};this.buttonLoading=!0;const{response:d,error:o}=await X(Q,e);return d?(this.buttonLoading=!1,Promise.resolve(d)):Promise.reject(o)},async actionUpdateDocument({id:r,body:e}){try{this.buttonLoading=!0;const{data:d}=await Y({id:r,body:e});return Promise.resolve(d)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(r){try{this.detailLoading=!0;const{data:e}=await K(r);Z(this.model,e),this.model.__approvers=await A(e.approvers),this.model.__signers=await A(e.signers),this.model.__departments=await ke(e.receiver.departments),this.model.__files=e.files}catch{}finally{this.detailLoading=!1}}}}),Co={class:"font-semibold text-xl"},Ho={__name:"PreviewDialog",props:{modelValue:{type:Boolean,default:!1},sendButtonLoading:{type:Boolean,default:!1}},emits:["update:modelValue","emit:send"],setup(r,{emit:e}){const o=me(r,"modelValue"),{t:w}=he();return(h,p)=>{const i=be,c=Ye;return s(),D(c,{modelValue:n(o),"onUpdate:modelValue":p[1]||(p[1]=a=>_e(o)?o.value=a:null),"max-width":"max-w-[608px]",draggable:!1,"content-classes":"p-6"},{header:f(()=>[t("span",Co,l(n(w)("preview")),1)]),content:f(()=>[fe(h.$slots,"content")]),footer:f(()=>[q(i,{label:"save-as-draft",color:"bg-primary-0 hover:bg-greyscale-100 text-primary-dark",rounded:"",shadow:"","border-color":"border-transparent"}),q(i,{label:"send",rounded:"",shadow:"","border-color":"border-transparent",class:"ml-2",loading:r.sendButtonLoading,onClick:p[0]||(p[0]=a=>e("emit:send"))},null,8,["loading"])]),_:3},8,["modelValue"])}}},hl={__name:"InnerForm",props:{formType:{type:String,default:ae}},setup(r){const e=r,d=P(),o=Eo();Ve();const w=Fe(),h=de(!1);de(null);const{t:p}=he(),i=je(),c=De(),a=Oe(o.rules,o.model),m=async()=>{await a.value.$validate()&&(h.value=!0,o.model.approvers=[],o.model.signers=[],o.model.departments=[],o.model.departments=o.model.__departments.map(_=>_.id),o.model.files=[],o.model.files=o.model.__files.map(_=>({id:_.id})),o.model.journal=le.INNER,o.model.sender=d.currentUser.top_level_department.id,o.model.approvers=pe(o.model.__approvers),o.model.signers=pe(o.model.__signers),o.model.document_type=c.params.document_type,o.model.document_sub_type=c.params.document_sub_type)},L=()=>{e.formType===ae?$():N()},$=async()=>{const b=await o.actionCreateDocument(o.model);await w.actionDocumentCountList(),b?(h.value=!1,ie(null,p("document-sent"),re.SUCCESS),await i.replace({name:Ze,query:{document_type:ee.INNER}})):ie(null,p("error-occurred"),re.ERROR)},N=async()=>{await o.actionUpdateDocument({id:c.params.id,body:o.model}),await w.actionDocumentCountList(),ie(null,p("document-sent"),re.SUCCESS),await i.replace({name:Ge,params:{id:c.params.id,document_type:ee.INNER,document_sub_type:ce.SERVICE_LETTER}})},k=()=>{console.log("Clear Form")},T=b=>{o.model.__files=[],b.forEach(_=>{o.model.__files.push(_)})};return ze(async()=>{c.params.id&&await o.actionGetDocumentDetailForUpdate(c.params.id)}),Ie(()=>{ye(o.model)}),(b,_)=>{const E=Ue,O=Ae,z=oe,C=ne;return n(o).detailLoading?(s(),D(E,{key:0})):(s(),u(M,{key:1},[q(n(Be),{title:e.formType===n(ae)?"create-sd-inner":"update-sd-inner"},{content:f(()=>[q(Ro,{"onEmit:preview":m,"onEmit:clearForm":k},{default:f(()=>[q(C,null,{default:f(()=>[q(z,{"col-class":"w-1/2"},{default:f(()=>[q(O,{modelValue:n(a).register_number.$model,"onUpdate:modelValue":_[0]||(_[0]=v=>n(a).register_number.$model=v),error:n(a).register_number,required:"",label:"reg-number"},null,8,["modelValue","error"])]),_:1}),q(z,{"col-class":"w-1/2"},{default:f(()=>[q(Re,{modelValue:n(a).__departments.$model,"onUpdate:modelValue":_[1]||(_[1]=v=>n(a).__departments.$model=v),error:n(a).__departments},null,8,["modelValue","error"])]),_:1}),q(z,{"col-class":"w-1/2"},{default:f(()=>[q(O,{modelValue:n(a).short_description.$model,"onUpdate:modelValue":_[2]||(_[2]=v=>n(a).short_description.$model=v),error:n(a).short_description,required:"",label:"short-description",placeholder:"enter-short-description"},null,8,["modelValue","error"])]),_:1}),q(z,{"col-class":"w-1/2"},{default:f(()=>[q(ue,{modelValue:n(a).__approvers.$model,"onUpdate:modelValue":_[3]||(_[3]=v=>n(a).__approvers.$model=v),label:"approvers",placeholder:"enter-approvers"},null,8,["modelValue"])]),_:1}),q(z,{"col-class":"w-1/2"},{default:f(()=>[q(ue,{modelValue:n(a).__signers.$model,"onUpdate:modelValue":_[4]||(_[4]=v=>n(a).__signers.$model=v),error:n(a).__signers,label:"signers",placeholder:"enter-signers",required:""},null,8,["modelValue","error"])]),_:1}),q(z,{"col-class":"w-full"},{default:f(()=>[q(Io,{modelValue:n(a).content.$model,"onUpdate:modelValue":_[5]||(_[5]=v=>n(a).content.$model=v),error:n(a).content,"file-upload-container-classes":"w-1/2 pr-2",files:n(o).model.__files,"onEmit:fileUpload":T},null,8,["modelValue","error","files"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),q(Ho,{modelValue:h.value,"onUpdate:modelValue":_[6]||(_[6]=v=>h.value=v),"send-button-loading":n(o).buttonLoading,"onEmit:send":L},{content:f(()=>{var v,F;return[q(vt,{"compose-model":{...n(o).model,signers:n(o).model.__signers,approvers:n(o).model.__approvers,author:n(o).model.__signers[0],sender:{name:(F=(v=n(d).currentUser)==null?void 0:v.top_level_department)==null?void 0:F.name},receiver:{departments:n(o).model.__departments}},preview:!0},null,8,["compose-model"])]}),_:1},8,["modelValue","send-button-loading"])],64))}}},gl=W("sd-store-application",{state:()=>{var r,e;return{buttonLoading:!1,detailLoading:!1,model:{company:(e=(r=P().currentUser)==null?void 0:r.company)==null?void 0:e.id,content:null,curator:null,document_type:null,approvers:[],journal:null,sender:null,signers:[],document_sub_type:null,files:[],__files:[],__approvers:[],__approvers_copy:[],__curator:null,__departments:[],__signers:[],__signers_copy:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",x)},__curator:{required:y.withMessage("Поле не должен быть пустым",x)},__approvers:{required:y.withMessage("Поле не должен быть пустым",x)},__signers:{}}}},actions:{async actionCreateDocument(r){let e={...r};this.buttonLoading=!0;const{response:d,error:o}=await X(Q,e);return d?(this.buttonLoading=!1,Promise.resolve(d)):(this.buttonLoading=!1,Promise.reject(o))},async actionUpdateDocument({id:r,body:e}){try{this.buttonLoading=!0;const{data:d}=await Y({id:r,body:e});return Promise.resolve(d)}catch{this.buttonLoading=!1}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(r){try{this.detailLoading=!0;const{data:e}=await K(r);Z(this.model,e),this.model.__approvers=await A(e.approvers),this.model.__signers=await A(e.signers.filter(d=>d.type===R.SIGNER)),this.model.__curator=await te([],e.curator.id,!1),this.model.__files=e.files}catch{}finally{this.detailLoading=!1}}}}),wl=W("order-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{content:null,company:P().currentUser.company.id,curator:null,document_type:ee.ORDER,document_sub_type:null,register_number:null,register_date:null,approvers:[],journal:le.ORDERS_PROTOCOLS,sender:null,signers:[],files:[],trip_notice_id:null,__files:[],__approvers:[],__approvers_copy:[],__curator:null,__negotiators:[]},rules:{register_number:{required:y.withMessage("Поле не должен быть пустым",x)},register_date:{required:y.withMessage("Поле не должен быть пустым",x)},content:{required:y.withMessage("Поле не должен быть пустым",x)},__negotiators:{required:y.withMessage("Поле не должен быть пустым",x)},__curator:{required:y.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(r){this.buttonLoading=!0;const{response:e,error:d}=await X(Q,r);return e?(this.buttonLoading=!1,Promise.resolve(e)):(this.buttonLoading=!1,Promise.reject(d))},async actionUpdateDocument({id:r,body:e}){try{this.buttonLoading=!0;const{data:d}=await Y({id:r,body:e});return Promise.resolve(d)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(r){try{this.detailLoading=!0;const{data:e}=await K(r);Z(this.model,e),this.model.__signers=await A(e.signers.filter(d=>d.type!==R.NEGOTIATOR)),this.model.__negotiators=await A(e.signers.filter(d=>d.type===R.NEGOTIATOR)),this.model.__approvers=await A(e.approvers),this.model.__curator=await te([],e.curator.id,!1)}catch{}finally{this.detailLoading=!1}}}}),vl=W("sd-notice-store",{state:()=>(P(),{buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:ee.NOTICE,document_sub_type:ce.BUSINESS_TRIP,journal:le.INNER,notices:[],start_date:null,end_date:null,short_description:null,route:null,companies:[],sender:null,signers:[],files:[],__curator:null,__employees:[],__companies:[],__tags:[],__approvers:[],__signers:[],__files:[]},rules:{end_date:{required:y.withMessage("Поле не должен быть пустым",x)},start_date:{required:y.withMessage("Поле не должен быть пустым",x)},route:{required:y.withMessage("Поле не должен быть пустым",x)},content:{required:y.withMessage("Поле не должен быть пустым",x)},__companies:{required:y.withMessage("Поле не должен быть пустым",x)},__curator:{required:y.withMessage("Поле не должен быть пустым",x)},__employees:{required:y.withMessage("Поле не должен быть пустым",x)},__signers:{required:y.withMessage("Поле не должен быть пустым",x)},__tags:{required:y.withMessage("Поле не должен быть пустым",x)},short_description:{required:y.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(r){this.buttonLoading=!0;const{response:e,error:d}=await X(Q,r);return e?(this.buttonLoading=!1,Promise.resolve(e)):(this.buttonLoading=!1,Promise.reject(d))},async actionUpdateDocument({id:r,body:e}){try{this.buttonLoading=!0;const{data:d}=await Y({id:r,body:e});return Promise.resolve(d)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(r){try{this.detailLoading=!0;const{data:e}=await K(r);Z(this.model,e),this.model.__companies=[],this.model.__curator=await te([],e.curator.id,!1),this.model.__employees=await A(e.notices),this.model.__approvers=await A(e.approvers),this.model.__signers=await A(e.signers),this.model.__companies=await xe(e.notices[0].destinations),this.model.__tags=await Me(e.tags),this.model.start_date=e.notices[0].start_date,this.model.end_date=e.notices[0].end_date,this.model.__tags=e.tags,this.model.route=e.notices[0].route}catch{}finally{this.detailLoading=!1}}}}),kl=W("notice-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",x)},__curator:{required:y.withMessage("Поле не должен быть пустым",x)},__signers:{required:y.withMessage("Поле не должен быть пустым",x)},short_description:{required:y.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(r){this.buttonLoading=!0;const{response:e,error:d}=await X(Q,r);return e?(this.buttonLoading=!1,Promise.resolve(e)):(this.buttonLoading=!1,Promise.reject(d))},async actionUpdateDocument({id:r,body:e}){try{this.buttonLoading=!0;const{data:d}=await Y({id:r,body:e});return Promise.resolve(d)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(r){try{this.detailLoading=!0;const{data:e}=await K(r);Z(this.model,e),this.model.__curator=await te([],e.curator.id,!1),this.model.__approvers=await A(e.approvers),this.model.__signers=await A(e.signers)}catch{}finally{this.detailLoading=!1}}}}),yl=W("decree-store",{state:()=>({buttonLoading:!1,detailLoading:!1,model:{approvers:[],company:null,content:null,curator:null,document_type:null,document_sub_type:null,journal:null,short_description:null,sender:null,signers:[],trip_notice_id:null,files:[],__curator:null,__approvers:[],__signers:[],__files:[]},rules:{content:{required:y.withMessage("Поле не должен быть пустым",x)},__curator:{required:y.withMessage("Поле не должен быть пустым",x)},__signers:{required:y.withMessage("Поле не должен быть пустым",x)},short_description:{required:y.withMessage("Поле не должен быть пустым",x)}}}),actions:{async actionCreateDocument(r){this.buttonLoading=!0;const{response:e,error:d}=await X(Q,r);return e?(this.buttonLoading=!1,Promise.resolve(e)):(this.buttonLoading=!1,Promise.reject(d))},async actionUpdateDocument({id:r,body:e}){try{this.buttonLoading=!0;const{data:d}=await Y({id:r,body:e});return Promise.resolve(d)}catch{}finally{this.buttonLoading=!1}},async actionGetDocumentDetailForUpdate(r){try{this.detailLoading=!0;const{data:e}=await K(r);Z(this.model,e),this.model.__curator=await te([],e.curator.id,!1),this.model.__approvers=await A(e.approvers),this.model.__signers=await A(e.signers)}catch{}finally{this.detailLoading=!1}}}});export{vt as _,ql as a,fl as b,_l as c,bl as d,ul as e,ml as f,hl as g,wl as h,Ro as i,Io as j,Ho as k,vl as l,kl as m,yl as n,gl as u};
