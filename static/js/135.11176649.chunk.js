"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{347:function(e,t,n){n.d(t,{Bt:function(){return d},Ch:function(){return l},DJ:function(){return u},Tg:function(){return c},y:function(){return p}});var r=n(861),s=n(757),o=n.n(s),a=n(243),i="87b6dca2cf33c39bc2e94fd412793a01";a.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/trending/movie/day?api_key=".concat(i));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},135:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r,s=n(861),o=n(439),a=n(168),i=n(757),c=n.n(i),u=n(87),l=n(689),p=n(791),d=n(444),v=n(347),f={movieDetails:"MovieDetails_movieDetails__EbgQo",button:"MovieDetails_button__uXZxd",poster:"MovieDetails_poster__yO7gD",posterImg:"MovieDetails_posterImg__7d7Yr",posterGeneralInfo:"MovieDetails_posterGeneralInfo__3uH-K",posterGenresList:"MovieDetails_posterGenresList__ctp5o",posterAdditionInfo:"MovieDetails_posterAdditionInfo__ioDAJ",posterAdditionInfoItem:"MovieDetails_posterAdditionInfoItem__F2-Ts",posterAdditionalInfoLink:"MovieDetails_posterAdditionalInfoLink__ZwvqR"},h=n(184),m=(0,d.ZP)(u.OL)(r||(r=(0,a.Z)(["\n  &.active {\n    text-decoration: underline;\n  }\n"]))),_=function(){var e,t,n,r,a=(0,p.useState)(null),i=(0,o.Z)(a,2),d=i[0],_=i[1],x=(0,l.UO)(),j=(0,l.TH)();(0,p.useEffect)((function(){function e(){return e=(0,s.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.DJ)(x.movieId);case 2:t=e.sent,_(t);case 4:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x.movieId]);var g=null!==(e=null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,h.jsx)("div",{className:f.movieDetails,children:d&&(0,h.jsxs)("div",{children:[(0,h.jsx)(u.rU,{to:g,children:(0,h.jsx)("button",{className:f.button,type:"button",children:"Go back"})}),(0,h.jsxs)("div",{className:f.poster,children:[(0,h.jsx)("img",{className:f.posterImg,src:"".concat("https://image.tmdb.org/t/p/w500").concat(d.poster_path),alt:"poster"}),(0,h.jsxs)("div",{className:f.posterGeneralInfo,children:[(0,h.jsxs)("h2",{className:f.posterTitle,children:[d.title," (",null===(n=d.release_date)||void 0===n?void 0:n.slice(0,null===(r=d.release_date)||void 0===r?void 0:r.indexOf("-")),")"]}),(0,h.jsxs)("p",{children:["User score: ",Math.round(10*d.vote_average),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:d.overview}),(0,h.jsx)("h3",{children:"Genres"}),d&&(0,h.jsx)("ul",{className:f.posterGenresList,children:d.genres.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,h.jsxs)("div",{className:f.posterAdditionInfo,children:[(0,h.jsx)("p",{children:"Additional info"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{className:f.posterAdditionInfoItem,children:(0,h.jsx)(m,{className:f.posterAdditionalInfoLink,to:"cast",children:(0,h.jsx)("h3",{children:"Cast"})})}),(0,h.jsx)("li",{className:f.posterAdditionInfoItem,children:(0,h.jsx)(m,{className:f.posterAdditionalInfoLink,to:"reviews",children:(0,h.jsx)("h3",{children:"Reviews"})})})]})]}),(0,h.jsx)(l.j3,{})]})})}}}]);
//# sourceMappingURL=135.11176649.chunk.js.map