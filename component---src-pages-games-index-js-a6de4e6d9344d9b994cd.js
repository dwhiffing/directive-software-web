(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{KmYq:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("KQm4"),r=n("q1tI"),o=n.n(r),i=n("NmYn"),c=n.n(i),l=n("hlFM"),s=n("VD++"),m=n("ofer");function u(e){var t=e.items,n=void 0===t?[]:t,r=e.numPerRow,i=void 0===r?3:r,c=e.onClick,s=i-n.length%i,m=new Array(s===i?0:s).fill("");return o.a.createElement(l.a,{display:"flex",flexWrap:{xs:"no-wrap",sm:"wrap"},flex:1,mr:-2,flexDirection:{xs:"column",sm:"row"}},[].concat(Object(a.a)(n),Object(a.a)(m)).map((function(e,t){return o.a.createElement(p,{key:t,numPerRow:i,label:e.title,description:e.year,index:t,onClick:function(){return c(e,t)}})})))}function p(e){var t=e.image,a=e.label,r=e.description,i=e.onClick,u=(e.index,e.ratio),p=void 0===u?"66.66%":u,d=e.numPerRow,f=void 0===d?3:d,g=e.style,b=void 0===g?{}:g;return a||t?o.a.createElement(l.a,{clone:!0,flex:{xs:1,sm:90/f+"%"},position:"relative",bgcolor:"gray",style:Object.assign({backgroundPosition:"center",backgroundSize:"cover",backgroundImage:"url("+n("4Hj7")("./"+c()(a).toLowerCase()+".png")+")",marginRight:16,marginBottom:16},b)},o.a.createElement(s.a,{onClick:i},o.a.createElement(l.a,{height:0,paddingBottom:p},a&&o.a.createElement(l.a,{position:"absolute",bottom:0,right:0,left:0,px:2,py:1,justifyContent:"space-between",textAlign:"left",display:"flex",bgcolor:"rgba(0,0,0,0.7)"},o.a.createElement(m.a,{style:{color:"white"}},a),r&&o.a.createElement(m.a,{style:{color:"white"}},r))))):o.a.createElement(l.a,{flex:90/f+"%",mr:{xs:0,sm:2},mb:{xs:2,sm:2}})}},zpKR:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),o=n.n(r),i=n("Wbzz"),c=n("7oih"),l=n("pu34"),s=n("KmYq"),m=n("NmYn"),u=n.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement(c.a,{title:"Games",site:this.props.data.site},o.a.createElement(s.a,{items:l.data,numPerRow:3,onClick:function(e,t){return Object(i.navigate)("/games/"+u()(e.title).toLowerCase(),{state:{project:e,data:l.data,index:t}})}}))},t}(o.a.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-games-index-js-a6de4e6d9344d9b994cd.js.map