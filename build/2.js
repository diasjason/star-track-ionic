webpackJsonp([2],{238:function(l,n,u){"use strict";function t(l){return o._23(0,[(l()(),o.Z(0,0,null,null,12,"a",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(l,n,u){var t=!0,a=l.component;if("click"===n){t=!1!==o._13(l,6).close()&&t}if("click"===n){t=!1!==a.goToDetail(l.context.$implicit)&&t}return t},p.b,p.a)),o.Y(1,1097728,null,3,m.a,[v.a,h.a,o.j,o.z,[2,C.a]],null,null),o._19(335544320,1,{contentLabel:0}),o._19(603979776,2,{_buttons:1}),o._19(603979776,3,{_icons:1}),o.Y(5,16384,null,0,Y.a,[],null,null),o.Y(6,16384,null,0,Z.a,[j.a],{menuClose:[0,"menuClose"]},null),(l()(),o.Z(7,0,null,1,5,"ion-label",[],null,null,null,null,null)),o.Y(8,16384,[[1,4]],0,y.a,[h.a,o.j,o.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),o.Z(9,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),o._21(10,null,["",""])),(l()(),o.Z(11,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o._21(12,null,["by ",""]))],function(l,n){l(n,6,0,"")},function(l,n){l(n,10,0,n.context.$implicit.trackName);l(n,12,0,n.context.$implicit.artistName)})}function a(l){return o._23(0,[(l()(),o.Z(0,0,null,null,6,"ion-header",[],null,null,null,null,null)),o.Y(1,16384,null,0,x.a,[h.a,o.j,o.z,[2,z.a]],null,null),(l()(),o.Z(2,0,null,null,4,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,A.b,A.a)),o.Y(3,49152,null,0,q.a,[F.a,[2,z.a],[2,P.a],h.a,o.j,o.z],null,null),(l()(),o.Z(4,0,null,3,2,"ion-title",[],null,null,null,D.b,D.a)),o.Y(5,49152,null,0,O.a,[h.a,o.j,o.z,[2,T.a],[2,q.a]],null,null),(l()(),o._21(-1,0,["Favorites"])),(l()(),o.Z(7,0,null,null,5,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,X.b,X.a)),o.Y(8,4374528,null,0,I.a,[h.a,L.a,M.a,o.j,o.z,F.a,N.a,o.u,[2,z.a],[2,P.a]],null,null),(l()(),o.Z(9,0,null,1,3,"ion-list",[],null,null,null,null,null)),o.Y(10,16384,null,0,$.a,[h.a,o.j,o.z,L.a,w.l,M.a],null,null),(l()(),o.U(16777216,null,null,1,null,t)),o.Y(12,802816,null,0,B.h,[o.I,o.F,o.p],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,12,0,n.component.favorites)},function(l,n){l(n,2,0,o._13(n,3)._hidden,o._13(n,3)._sbPadding);l(n,7,0,o._13(n,8).statusbarPadding,o._13(n,8)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var o=u(0),s=(u(6),u(109),u(115),function(){function l(l,n,u){this.navCtrl=l,this.storage=n,this.event=u,this.favorites=[]}return l.prototype.ionViewDidLoad=function(){var l=this;this.getKeys(),this.event.subscribe("songAdded",function(n){l.favorites.push(n)}),this.event.subscribe("songRemoved",function(n){console.log(n),l.favorites.splice(l.favorites.indexOf(n),1)})},l.prototype.getKeys=function(){var l=this;this.storage.forEach(function(n){l.favorites.push(n)})},l.prototype.goToDetail=function(l){this.navCtrl.parent._children.find(function(l){return"main"===l.name}).push("TrackDetailPage",{id:l.trackId,track:l})},l}()),e=function(){return function(){}}(),i=u(186),c=u(187),r=u(188),b=u(189),_=u(190),d=u(191),f=u(192),g=u(193),k=u(194),p=u(195),m=u(18),v=u(15),h=u(1),C=u(41),Y=u(71),Z=u(129),j=u(25),y=u(44),x=u(114),z=u(4),A=u(243),q=u(38),F=u(8),P=u(20),D=u(244),O=u(110),T=u(51),X=u(245),I=u(21),L=u(3),M=u(9),N=u(34),$=u(53),w=u(7),B=u(14),K=u(116),R=u(73),V=o.X({encapsulation:2,styles:[],data:{}}),E=o.V("page-menu-list",s,function(l){return o._23(0,[(l()(),o.Z(0,0,null,null,1,"page-menu-list",[],null,null,null,a,V)),o.Y(1,49152,null,0,s,[P.a,K.a,R.a],null,null)],null,null)},{},{},[]),J=u(17),S=u(111),U=u(35);u.d(n,"MenuListPageModuleNgFactory",function(){return W});var W=o.W(e,[],function(l){return o._10([o._11(512,o.i,o.S,[[8,[i.a,c.a,r.a,b.a,_.a,d.a,f.a,g.a,k.a,E]],[3,o.i],o.s]),o._11(4608,B.k,B.j,[o.r,[2,B.s]]),o._11(4608,J.m,J.m,[]),o._11(4608,J.c,J.c,[]),o._11(512,B.b,B.b,[]),o._11(512,J.l,J.l,[]),o._11(512,J.f,J.f,[]),o._11(512,J.k,J.k,[]),o._11(512,S.a,S.a,[]),o._11(512,S.b,S.b,[]),o._11(512,e,e,[]),o._11(256,U.a,s,[])])})},243:function(l,n,u){"use strict";function t(l){return a._23(0,[(l()(),a.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.backButtonClick(u)&&t}return t},s.b,s.a)),a.Y(3,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(4,1097728,null,0,e.a,[[8,"bar-button"],i.a,a.j,a.z],null,null),(l()(),a.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(6,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(7,147456,null,0,c.a,[i.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),a.Y(9,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._21(10,null,["",""])),a._12(null,0),a._12(null,1),a._12(null,2),(l()(),a.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a.Y(15,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode);l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb);l(n,5,0,a._13(n,7)._hidden);l(n,10,0,u._backText)})}u.d(n,"a",function(){return r}),n.b=t;var a=u(0),o=u(14),s=u(40),e=u(19),i=u(1),c=u(39),r=(u(4),u(20),a.X({encapsulation:2,styles:[],data:{}}))},244:function(l,n,u){"use strict";function t(l){return a._23(2,[(l()(),a.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.g,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._12(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}u.d(n,"a",function(){return s}),n.b=t;var a=u(0),o=u(14),s=(u(1),a.X({encapsulation:2,styles:[],data:{}}))},245:function(l,n,u){"use strict";function t(l){return a._23(2,[a._19(402653184,1,{_fixedContent:0}),a._19(402653184,2,{_scrollContent:0}),(l()(),a.Z(2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),a._12(null,0),(l()(),a.Z(4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),a._12(null,1),a._12(null,2)],null,null)}u.d(n,"a",function(){return o}),n.b=t;var a=u(0),o=(u(1),u(3),u(9),u(34),u(4),u(20),a.X({encapsulation:2,styles:[],data:{}}))}});