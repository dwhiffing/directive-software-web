(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{G4t0:function(e,t,a){"use strict";a.r(t),a.d(t,"view",(function(){return o})),a.d(t,"query",(function(){return l}));var n=a("q1tI"),r=a.n(n),i=a("7oih"),c=a("P0PH");var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.location.state,t=e.project,a=e.data,n=void 0===a?[]:a,o=e.index,l=void 0===o?0:o;return r.a.createElement(i.a,{site:this.props.data.site},r.a.createElement(c.a,{label:"Apps",backUri:"/apps",project:t,data:n,index:l}))},n}(n.Component);t.default=o;var l="3998338720"},P0PH:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),c=a("hlFM"),o=a("ofer"),l=function(e){var t=e.label,a=e.project,n=e.data,l=void 0===n?[]:n,p=e.index,s=void 0===p?0:p,u=e.backUri,m=s+1>=l.length?0:s+1,d=s-1<0?l.length-1:s-1;return a?r.a.createElement(c.a,null,r.a.createElement(c.a,{display:"flex",mb:4,alignItems:"center",justifyContent:"space-between"},r.a.createElement(c.a,{flex:1},r.a.createElement(o.a,{component:"a",href:"javascript:;",onClick:function(){return Object(i.navigate)(u+"/view",{state:{project:l[d],data:l,index:d}})}},l[d].title)),r.a.createElement(c.a,{flex:1,display:"flex",justifyContent:"center"},r.a.createElement(o.a,{variant:"h6"},r.a.createElement(i.Link,{to:u},t)," / ",a.title)),r.a.createElement(c.a,{flex:1,display:"flex",justifyContent:"flex-end"},r.a.createElement(o.a,{component:"a",href:"javascript:;",onClick:function(){return Object(i.navigate)(u+"/view",{state:{project:l[m],data:l,index:m}})}},l[m].title))),r.a.createElement(c.a,{my:2,display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center"},r.a.createElement(o.a,{component:"a",href:a.website,target:"_new"},r.a.createElement("img",{width:500,src:a.image})),r.a.createElement(c.a,{my:2,mx:2},r.a.createElement(o.a,null,a.description),a.website&&r.a.createElement(o.a,{component:"a",href:a.website,target:"_new"},a.website)))):null}}}]);
//# sourceMappingURL=component---src-pages-apps-view-js-4108e67b3a24d0ebcc19.js.map