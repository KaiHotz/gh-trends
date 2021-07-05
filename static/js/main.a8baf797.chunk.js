(this["webpackJsonpgh-trends"]=this["webpackJsonpgh-trends"]||[]).push([[0],{79:function(e,n,t){},80:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var a,r,o=t(0),c=t(24),l=t.n(c),i=t(28),s=t(86),u=t(85),d=t(51),j=t(14),b=t(42),g=t(39),h=t(11),x="/gh-trends",p="/gh-trends/developers",O=t(27),f=t(6),v=t(32),m=Object(v.b)({name:"LANGUAGE",initialState:{since:"daily",prog_lang:"any",spoken_language_code:"any"},reducers:{setSpokenLanguage:function(e,n){var t=n.payload;return Object(f.a)(Object(f.a)({},e),{},{spoken_language_code:t})},setProgLanguage:function(e,n){var t=n.payload;return Object(f.a)(Object(f.a)({},e),{},{prog_lang:t})},setSince:function(e,n){var t=n.payload;return Object(f.a)(Object(f.a)({},e),{},{since:t})}}}),w=m.reducer,y=m.actions,_=y.setProgLanguage,k=y.setSpokenLanguage,B=y.setSince,L=w,T=t(38),S=Object(T.a)((function(e){return e.trending}),(function(e){return{prog_lang:e.prog_lang,spoken_language_code:e.spoken_language_code,since:e.since}})),N=t(36),C=t(1),F=Object(C.e)(j.e)(a||(a=Object(N.a)(["\n  border-color: var(--color-border-primary);\n  background-color: var(--color-bg-tertiary);\n  color: var(--color-text-primary);\n  text-align: center;\n  p {\n    color: var(--color-text-secondary);\n    margin-bottom: 20px;\n  }\n"]))),D=Object(C.e)(j.b)(r||(r=Object(N.a)(["\n  font-size: 14px;\n  font-weight: 400;\n  color: var(--color-text-secondary);\n  padding: 0 15px;\n  &:focus {\n    box-shadow: none;\n  }\n  &:after {\n    border: 4px solid transparent;\n    border-top-color: currentcolor;\n    content: '';\n    display: inline-block;\n    height: 0;\n    vertical-align: -3px;\n    margin-left: 3px;\n    width: 0;\n  }\n"]))),R=t(8),M=t(5),I=function(e){var n=e.options,t=e.label,a=e.filterTxt,r=e.value,c=e.onChange,l=Object(o.useState)(""),i=Object(R.a)(l,2),s=i[0],u=i[1],d=n.filter((function(e){return e.label.toLowerCase().startsWith(s.toLowerCase())}));return Object(M.jsxs)(j.f,{css:{},defaultValue:"foo",children:[Object(M.jsx)(D,{as:"summary",children:t}),Object(M.jsxs)(j.f.Modal,{children:[Object(M.jsx)(j.f.Filter,{placeholder:a,value:s,"aria-label":a,onChange:function(e){return u(e.currentTarget.value)}}),Object(M.jsx)(j.f.List,{children:d.map((function(e){return Object(M.jsx)(j.f.Item,{selected:r===e.value,onClick:function(){return n=e.value,c(n);var n},children:e.label},e.value)}))})]})]})},P=t(26),z=function(e,n){var t=Object.entries(n).reduce((function(n,t){var a=Object(R.a)(t,2),r=a[0],o=a[1];return n[r]={id:"".concat(e,"_").concat(r),defaultMessage:o},n}),{});return Object(P.a)(t)},G=z("trending",{repositories:"Repositories",developers:"Developers",spoken_lang:"Spoken Language: {value}",spoken_lang_filter:"Filter by spoken language",lanuage:"Language: {value}",language_filter:"Filter by language",date_range:"Date range: {value}",date_range_filter:"Filter by date range",daily:"Today",weekly:"This week",monthly:"This month"}),A=function(){var e=Object(O.a)().formatMessage,n=Object(h.f)(),t=Object(i.b)(),a=Object(i.c)(S),r=a.prog_lang,o=a.spoken_language_code,c=a.since,l=n.pathname.includes(p);return Object(M.jsxs)("div",{className:"Box-header d-md-flex flex-items-center flex-justify-between",children:[Object(M.jsx)(j.g,{"aria-label":"Trending",children:Object(M.jsxs)(j.g.Links,{children:[Object(M.jsx)(j.g.Link,{href:x,selected:!l,children:e(G.repositories)}),Object(M.jsx)(j.g.Link,{href:p,selected:l,children:e(G.developers)})]})}),Object(M.jsxs)(j.c,{children:[!l&&Object(M.jsx)(I,{options:[{value:"foo",label:"Foo"},{value:"bar",label:"Bar"}],label:e(G.spoken_lang,{value:o}),filterTxt:e(G.spoken_lang_filter),value:o,onChange:function(e){return t(k(e))}}),Object(M.jsx)(I,{options:[{value:"foo",label:"Foo"},{value:"bar",label:"Bar"}],label:e(G.lanuage,{value:r}),filterTxt:e(G.language_filter),value:r,onChange:function(e){return t(_(e))}}),Object(M.jsx)(I,{options:[{value:"daily",label:e(G.daily)},{value:"weekly",label:e(G.weekly)},{value:"monthly",label:e(G.monthly)}],label:e(G.date_range,{value:e(G[c])}),filterTxt:e(G.date_range_filter),value:c,onChange:function(e){return t(B(e))}})]})]})},E=function(){Object(O.a)().formatMessage;return Object(M.jsxs)("ul",{children:[Object(M.jsx)("li",{className:"Box-row",children:"Box row Repo one"}),Object(M.jsx)("li",{className:"Box-row",children:"Box row Repo two"}),Object(M.jsx)("li",{className:"Box-row",children:"Box row Repo three"}),Object(M.jsx)("li",{className:"Box-row",children:"Box row Repo four"})]})},J=function(){Object(O.a)().formatMessage;return Object(M.jsxs)("ul",{children:[Object(M.jsx)("li",{className:"Box-row",children:"Box row Dev one"}),Object(M.jsx)("li",{className:"Box-row",children:"Box row Dev two"}),Object(M.jsx)("li",{className:"Box-row",children:"Box row Dev three"}),Object(M.jsx)("li",{className:"Box-row",children:"Box row Dev four"})]})},W=z("trending",{title:"Trending",description:"See what the GitHub community is most excited about {value}.",daily:"today",weekly:"this week",monthly:"this month"}),q=function(){var e=Object(O.a)().formatMessage,n=Object(i.c)(S).since;return Object(M.jsxs)("div",{children:[Object(M.jsxs)(F,{children:[Object(M.jsx)(j.d,{fontSize:32,children:e(W.title)}),Object(M.jsx)(j.h,{as:"p",fontSize:16,children:e(W.description,{value:e(W[n])})})]}),Object(M.jsx)("div",{className:"pt-4 position-relative container-lg p-responsive",children:Object(M.jsxs)(j.a,{className:"Box Box--responsive hx_Box--firstRowRounded0",children:[Object(M.jsx)(A,{}),Object(M.jsxs)(h.c,{children:[Object(M.jsx)(h.a,{exact:!0,path:x,component:E}),Object(M.jsx)(h.a,{exact:!0,path:p,component:J})]})]})})]})},H=(t(79),function(){return Object(M.jsx)(g.a,{children:Object(M.jsx)(h.c,{children:Object(M.jsx)(h.a,{path:x,component:q})})})}),Q=t(22),U=Object(Q.b)({trending:L}),V=Object(v.a)({reducer:U,devTools:!1}),K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,87)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),o(e),c(e)}))},X=(t(80),new s.a({defaultOptions:{queries:{cacheTime:0,refetchOnWindowFocus:!1,retry:!1}}}));l.a.render(Object(M.jsx)(j.i,{colorMode:"night",dayScheme:"light",nightScheme:"dark",children:Object(M.jsx)(i.a,{store:V,children:Object(M.jsxs)(u.a,{client:X,children:[Object(M.jsx)(d.ReactQueryDevtools,{initialIsOpen:!1,position:"bottom-right"}),Object(M.jsx)(b.a,{locale:"en",defaultLocale:"en",children:Object(M.jsx)(H,{})})]})})}),document.getElementById("root")),K()}},[[81,1,2]]]);
//# sourceMappingURL=main.a8baf797.chunk.js.map