(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{P0PH:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("hlFM"),c=a("ofer"),o=a("NmYn"),s=a.n(o),p=function(e){var t=e.label,n=e.project,o=e.data,p=void 0===o?[]:o,m=e.index,u=void 0===m?0:m,f=e.backUri,d=u+1>=p.length?0:u+1,w=u-1<0?p.length-1:u-1;return n?r.a.createElement(l.a,null,r.a.createElement(l.a,{display:"flex",mb:4,alignItems:"center",justifyContent:"space-between"},r.a.createElement(l.a,{flex:1},r.a.createElement(c.a,{component:"a",href:"javascript:;",onClick:function(){return Object(i.navigate)(f+"/"+s()(p[w].title).toLowerCase())}},p[w].title)),r.a.createElement(l.a,{flex:1,display:"flex",justifyContent:"center"},r.a.createElement(c.a,{variant:"h6"},r.a.createElement(i.Link,{to:f},t)," / ",n.title)),r.a.createElement(l.a,{flex:1,display:"flex",justifyContent:"flex-end"},r.a.createElement(c.a,{component:"a",href:"javascript:;",onClick:function(){return Object(i.navigate)(f+"/"+s()(p[d].title).toLowerCase())}},p[d].title))),r.a.createElement(l.a,{my:2,display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center"},r.a.createElement(c.a,{component:"a",href:n.website,target:"_new"},r.a.createElement("img",{width:500,src:a("4Hj7")("./"+s()(n.title).toLowerCase()+".png")})),r.a.createElement(l.a,{my:2,mx:2},r.a.createElement(c.a,null,n.description),n.website&&r.a.createElement(c.a,{component:"a",href:n.website,target:"_new"},n.website)))):null}},VjZ6:function(e,t,a){"use strict";a.r(t),a.d(t,"view",(function(){return m}));var n=a("dI71"),r=a("q1tI"),i=a.n(r),l=a("NmYn"),c=a.n(l),o=a("7oih"),s=a("P0PH"),p=a("xMVl"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.path.split("/")[2],t=p.data.findIndex((function(t){return c()(t.title).toLowerCase()===e})),a=p.data[t];return i.a.createElement(o.a,{site:this.props.data.site},i.a.createElement(s.a,{label:"Apps",backUri:"/apps",project:a,data:p.data,index:t}))},t}(r.Component);t.default=m}}]);
//# sourceMappingURL=component---src-templates-app-js-39317b8e09255cc89d46.js.map