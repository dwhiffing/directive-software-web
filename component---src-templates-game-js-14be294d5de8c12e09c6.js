(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+lOU":function(e,t,i){"use strict";i.r(t),i.d(t,"view",(function(){return d}));var a=i("dI71"),r=i("q1tI"),n=i.n(r),s=i("NmYn"),o=i.n(s),l=i("7oih"),h=i("P0PH"),c=i("pu34"),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.path.split("/")[2],t=c.data.findIndex((function(t){return o()(t.title).toLowerCase()===e})),i=c.data[t];return n.a.createElement(l.a,{site:this.props.data.site},n.a.createElement(h.a,{label:"Games",backUri:"/games",index:t,project:i,data:c.data}))},t}(r.Component);t.default=d},P0PH:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var a=i("q1tI"),r=i.n(a),n=i("Wbzz"),s=i("hlFM"),o=i("ofer"),l=i("NmYn"),h=i.n(l),c=function(e){var t=e.label,a=e.project,l=e.data,c=void 0===l?[]:l,d=e.index,u=void 0===d?0:d,p=e.backUri,f=u+1>=c.length?0:u+1,w=u-1<0?c.length-1:u-1;return a?r.a.createElement(s.a,null,r.a.createElement(s.a,{display:"flex",mb:4,alignItems:"center",justifyContent:"space-between"},r.a.createElement(s.a,{flex:1},r.a.createElement(o.a,{component:"a",href:"javascript:;",onClick:function(){return Object(n.navigate)(p+"/"+h()(c[w].title).toLowerCase())}},c[w].title)),r.a.createElement(s.a,{flex:1,display:"flex",justifyContent:"center"},r.a.createElement(o.a,{variant:"h6"},r.a.createElement(n.Link,{to:p},t)," / ",a.title)),r.a.createElement(s.a,{flex:1,display:"flex",justifyContent:"flex-end"},r.a.createElement(o.a,{component:"a",href:"javascript:;",onClick:function(){return Object(n.navigate)(p+"/"+h()(c[f].title).toLowerCase())}},c[f].title))),r.a.createElement(s.a,{my:2,display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:"center"},r.a.createElement(o.a,{component:"a",href:a.website,target:"_new"},r.a.createElement("img",{width:500,src:i("4Hj7")("./"+h()(a.title).toLowerCase()+".png")})),r.a.createElement(s.a,{my:2,mx:2},r.a.createElement(o.a,null,a.description),a.website&&r.a.createElement(o.a,{component:"a",href:a.website,target:"_new"},a.website)))):null}},pu34:function(e,t){t.data=[{title:"Lightcrumbs",website:"https://dwhiffing.itch.io/lightcrumbs",description:"Built With Phaser.js + enable3d for TOJam. A single player horror game.",year:2023},{title:"Clockwork Harvest",website:"https://dwhiffing.github.io/clockwork-harvest",description:"Built With Phaser.js. A fast paced gardening game.",year:2023},{title:"Poker Blitz",website:"https://dwhiffing.github.io/poker-blitz",description:"Built With Phaser.js for Ludum Dare. A fast paced poker game.",year:2022},{title:"Noxious Nebula",website:"https://dwhiffing.github.io/noxious-nebula",description:"Built With Kontra.js for JS13k. A top down shooter with flocking enemies.",year:2022},{title:"Dungeon Spire",website:"https://dwhiffing.itch.io/dungeon-spire",description:"Built With Phaser. A deck building tower defense game.",year:2022},{title:"Roll Tower",website:"https://dwhiffing.itch.io/roll-tower",description:"Built With Phaser. A dice building RPG.",year:2022},{title:"Bin It To Win It",website:"https://dwhiffing.itch.io/bin-it-to-win-it",description:"Built With Phaser. A recycling puzzle game.",year:2022},{title:"Quintessential",website:"https://quintessential.fun/",description:"Built With React. A word puzzle game.",year:2022},{title:"Warloch",website:"https://dwhiffing.github.io/warloch",description:"Built With Phaser.js. A top down shooter ARPG made for GGJ 2022.",year:2022},{title:"Star Exploder",website:"https://js13kgames.com/entries/star-exploder",description:"Built With Kontra.js. A space exploration action game made for JS13k 2021.",year:2021},{title:"NONOCROSS",website:"https://dwhiffing.itch.io/nonocross/",description:"Built With Phaser. A puzzle platforming game made for LOW REZ JAM 2021.",year:2021},{title:"Online Minesweeper",website:"https://dwhiffing.github.io/sweep/",description:"Built With React/Colyseus. Sweep with friends.",year:2021},{title:"Woodland Annex",website:"https://dwhiffing.itch.io/woodland-annex/",description:"Built With Phaser. A simple puzzle game made for GMTK 2021.",year:2021},{title:"Cards Against Luminosity",website:"https://dwhiffing.github.io/cards-against-luminosity/",description:"Built With React. An incremental card game made for Incremental Jam 2021.",year:2021},{title:"Online Chess",website:"https://daniel-chess.herokuapp.com/",description:"Built With React and Colyseus.  A simple heuristic AI.",year:2020},{title:"Online Deception",website:"https://daniel-deception.herokuapp.com/",description:"Built With React and Colyseus.  A word based murder mystery game.",year:2020},{title:"Online Battleship",website:"https://daniel-battleship.herokuapp.com/",description:"Built With React and Colyseus.  Play with up to 8 players!",year:2020},{title:"Space Crisis",website:"https://dwhiffing.github.io/space-crisis",description:"Built With Phaser for Ludum Dare 2020.",year:2020},{title:"Machine",website:"https://dwhiffing.github.io/machine",description:"Built With Vanilla JS for JS13K 2020.",year:2020},{title:"Wild Blue Yonder",website:"https://dwhiffing.github.io/hexcode-showdown",description:"Built With Phaser for Hexcode Showdown 2020.",year:2020},{title:"Cleanup 98",website:"https://dwhiffing.github.io/cleanup98",description:"Built With React for Incremental Game Jam 2020.",year:2020},{title:"Lightcycle",website:"https://dwhiffing.github.io/lightcycle",description:"Built With Phaser for LOWREZJAM 2020.",year:2020},{title:"Light Pendulum",website:"https://dwhiffing.github.io/pendulum-climber",description:"Built With Phaser for ScoreSpace Jam #9.",year:2020},{title:"Stranger Changer",website:"https://dwhiffing.github.io/grocer",description:"Built With Phaser for GMTK Jam 2020.",year:2020},{title:"Quaranteam",website:"https://dwhiffing.github.io/tojam2020",description:"Built With Phaser For Toronto Game Jam 2020.",year:2020},{title:"Vagrant",website:"https://dwhiffing.github.io/vagrant",description:"Built With Phaser for ODO Jam.",year:2020},{title:"Solitaire",website:"https://dwhiffing.github.io/solitaire",description:"Built With React.",year:2020},{title:"Tawatomo",website:"https://dwhiffing.github.io/tawatomo",description:"Built With Phaser for Global Game Jam 2020.",year:2020},{title:"Sudoku",website:"http://dwhiffing.github.io/sudoku/",description:"Built With React.",year:2020},{title:"Poker",website:"http://daniel-poker.herokuapp.com/",description:"Built With React + Colysseum.",year:2020},{title:"Hexacross",website:"https://dwhiffing.github.io/hexacross",description:"Built With Phaser for Global Game Jam 2019.",year:2019},{title:"Incremental",website:"http://dwhiffing.github.io/incremental/",description:"Built With React.",year:2019},{title:"Body Brigade",website:"http://dwhiffing.github.io/games-on-demand/",description:"Built With Phaser for the Games On Demand Jam in 2017.",year:2017},{title:"Idle Game",website:"http://dwhiffing.github.io/idle-game/",description:"Built With React.",year:2017},{title:"Stampede",website:"https://dwhiffing.github.io/stampede/",description:"Built With Phaser for LOWREZJAM 2016.",year:2016},{title:"Stellar Pendulum",website:"http://dwhiffing.github.io/stellar-pendulum/",description:"Built With Phaser for Ludum Dare Apr 2016.",year:2016},{title:"Siege",website:"https://dwhiffing.github.io/ludumdare-2016/",description:"Built With Phaser for Ludum Dare Aug 2016.",year:2016},{title:"Vengeance With No Goal",website:"http://dwhiffing.github.io/vengeance-with-no-goal/",description:"Built With Phaser for ToJam 2016.",year:2016},{title:"Snake & Bake",website:"http://dwhiffing.github.io/snakebake/",description:"Built With Phaser for TOJam 2015.",year:2015},{title:"Fuse",website:"http://dwhiffing.github.io/fuse/",description:"Built With Phaser.",year:2015}]}}]);
//# sourceMappingURL=component---src-templates-game-js-14be294d5de8c12e09c6.js.map