(this.webpackJsonplekcja_3=this.webpackJsonplekcja_3||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),l=(a(94),a(83)),c=a(13),u=a(14),s=a(134),m=a(136),d=a(137),p=a(138),f=a(75),v=a.n(f),h=a(131),E=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),g=function(e){var t=e.onIconClick,a=E();return r.a.createElement("div",{className:a.root},r.a.createElement(s.a,{position:"fixed",color:"default"},r.a.createElement(m.a,null,r.a.createElement(d.a,{edge:"start",color:"inherit","aria-label":"menu",className:a.menuButton,onClick:function(){return t()}},r.a.createElement(v.a,null)),r.a.createElement(p.a,{variant:"h6",className:a.title},"Movie Searcher"))))},y=a(149),w=a(139),b=a(77),N=a.n(b),O=a(78),T=a.n(O),k=a(79),S=a.n(k),_=a(80),j=a.n(_),D=Object(h.a)((function(e){return{drawerContent:{margin:"20px",width:"20vh",padding:"10px"},button:{margin:e.spacing(1),padding:"10px",width:"20vh"}}})),x=function(e){var t=e.shouldBeOpen,a=e.onDrawerClose,n=D(),o=r.a.useState(!1),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(c.f)(),d=function(e,t){return r.a.createElement("div",{onClick:function(){return m.push(e)}},t)};return r.a.createElement("div",null,r.a.createElement(y.a,{open:l||t,onClose:function(){s(!1),a()}},r.a.createElement("div",{className:n.drawerContent},r.a.createElement(w.a,{variant:"contained",color:"default",className:n.button,startIcon:r.a.createElement(N.a,null)},d("/145985fakultetSoftwarehut/","Home")),r.a.createElement(w.a,{variant:"contained",color:"default",className:n.button,startIcon:r.a.createElement(T.a,null)},d("/145985fakultetSoftwarehut/movie","Movie")),r.a.createElement(w.a,{variant:"contained",color:"default",className:n.button,startIcon:r.a.createElement(S.a,null)},d("/145985fakultetSoftwarehut/search","Search")),r.a.createElement(w.a,{variant:"contained",color:"default",className:n.button,startIcon:r.a.createElement(j.a,null)},d("/145985fakultetSoftwarehut/fav","Favourites")))))},A=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{onIconClick:function(){return n(!0)}}),r.a.createElement(x,{shouldBeOpen:a,onDrawerClose:function(){return n(!1)}}))},F=function(){return r.a.createElement("div",null,r.a.createElement(A,null))};var B,L=new Map,C=function(e){return r.a.useRef(function(e){if(L.has(e))return L.get(e);var t=new e;return L.set(e,t),t}(e)).current},R=a(55),z=a(56),W=a(30),I=a(81),P=a(45),V=a(33);!function(e){e.SET_TODO_DONE="SET_TODO_DONE",e.SET_NEW_FAV="SET_NEW_FAV",e.SET_DELETE_TODO="SET_DELETE_TODO"}(B||(B={}));var H,M=function(e){return{type:B.SET_NEW_FAV,payload:{todo:e}}},U=function(e){return{type:B.SET_TODO_DONE,payload:{id:e}}},G=function(e){return{type:B.SET_DELETE_TODO,payload:{todo:e}}},J={list:[{id:-1,description:"",done:!1,label:""}]};!function(e){e.SET_NEW_FAV="SET_NEW_FAV",e.SET_DELETE_FAV="SET_DELETE_FAV"}(H||(H={}));var Y=function(e){return{type:H.SET_NEW_FAV,payload:{favourites:e}}},$=function(e){return{type:H.SET_DELETE_FAV,payload:{favourites:e}}},q=a(25),K=new q.a,Q=[];void 0!==K.get("fav")&&(Q=K.get("fav"));var X={list:Q},Z={favourites:X,todos:J},ee=Object(W.combineReducers)({favourites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.SET_NEW_FAV:return Object(V.a)({},e,{list:[].concat(Object(P.a)(e.list),[t.payload.favourites])});case H.SET_DELETE_FAV:return Object(V.a)({},e,{list:e.list.filter((function(e){return e.id!==t.payload.favourites.id}))});default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.SET_NEW_FAV:return Object(V.a)({},e,{list:[].concat(Object(P.a)(e.list),[t.payload.todo])});case B.SET_DELETE_TODO:return Object(V.a)({},e,{list:e.list.filter((function(e){return e.id!==t.payload.todo.id}))});case B.SET_TODO_DONE:var a=e.list.find((function(e){return e.id===t.payload.id}));return a?(a.done=!0,Object(V.a)({},e,{list:[].concat(Object(P.a)(e.list.filter((function(e){return e.id!==t.payload.id}))),[a])})):e;default:return e}}}),te=Object(W.createStore)(ee,Z,Object(I.composeWithDevTools)()),ae=function(){function e(){Object(R.a)(this,e)}return Object(z.a)(e,[{key:"setNewFavourites",value:function(e){te.dispatch(Y(e))}},{key:"deleteFavourites",value:function(e){te.dispatch($(e))}}]),e}(),ne=a(20),re=a(57),oe=Object(re.a)((function(e){return e.favourites}),(function(e){return e.list})),ie=a(46),le=a.n(ie),ce=a(64),ue={get:function(e){return fetch(e).then((function(e){return e.json()}))}},se="https://www.omdbapi.com/?apikey=549d12a",me=function(e){return"".concat(se,"&s=").concat(e)},de=function(e){return"".concat(se,"&i=").concat(e)},pe={searchByName:function(){var e=Object(ce.a)(le.a.mark((function e(t){var a,n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.get(me(t));case 3:if(!(null===(a=e.sent)||void 0===a?void 0:a.Error)){e.next=9;break}return console.log(a.Error),e.abrupt("return",null);case 9:return n={totalResults:parseInt(a.totalResults,10),movies:a.Search.map((function(e){return{id:e.imdbID,poster:e.Poster,title:e.Title,type:e.Type,year:e.Year}}))},e.abrupt("return",n);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),searchById:function(){var e=Object(ce.a)(le.a.mark((function e(t){var a,n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.get(de(t));case 3:return a=e.sent,n={production:a.Production,plot:a.Plot,title:a.Title,ageRating:a.Rated,releaseDate:a.Released,writer:a.Writer,director:a.Director,actors:a.Actors,awards:a.Awards,rating:a.Rated,votes:a.DVD,poster:a.Poster},e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},fe=a(147),ve=a(140),he=a(141),Ee=a(142),ge=a(143),ye=a(144),we=a(145),be=Object(h.a)({root:{marginBottom:"1vh",marginLeft:"1.5vw",display:"inline-block",width:"30vw",height:"auto",textAlign:"center"},content:{maxHeight:"15vh",overflow:"hidden"},media:{marginTop:"1vh",height:"53vh"},center:{marginLeft:"calc(50% - 16vw)",marginTop:"11vh",marginBottom:"2vh",width:"30vw"},action:{padding:5,marginTop:2,marginRight:"auto",marginLeft:"auto"},loading:{marginLeft:"calc(50% - 4vw)",marginTop:"11vh",marginBottom:"2vh"}}),Ne=function(){var e=be(),t=r.a.useState(null),a=Object(u.a)(t,2),o=a[0],i=a[1],l=r.a.useState(""),s=Object(u.a)(l,2),m=s[0],d=s[1],f=r.a.useState(!1),v=Object(u.a)(f,2),h=v[0],E=v[1],g=function(e,t){var a=Object(n.useState)(e),r=Object(u.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){i(e)}),t);return function(){clearTimeout(a)}}),[e,t]),o}(m,300),y=Object(c.f)(),b=C(ae),N=Object(ne.b)(oe),O=new q.a;r.a.useEffect((function(){g&&pe.searchByName(m).then((function(e){e?(i(e),E(!1)):(E(!0),i(null))}))}),[g,m]);return O.set("fav",N,{path:"/"}),r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(fe.a,{className:e.center,color:"secondary",id:"outlined-full-width",label:"Wyszukaj Film",placeholder:"Tytu\u0142 filmu",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:function(e){d(e.target.value),E(!0)}}),r.a.createElement("br",null),h?r.a.createElement("div",{className:e.loading},r.a.createElement(ve.a,{color:"secondary",size:"8vw"})):"",!!(null===o||void 0===o?void 0:o.movies.length)&&(null===o||void 0===o?void 0:o.movies.map((function(t,a){return r.a.createElement(he.a,{className:e.root,color:"secondary",variant:"outlined"},r.a.createElement(Ee.a,null,r.a.createElement(ge.a,{className:e.content},r.a.createElement(p.a,{className:e.content,gutterBottom:!0,variant:"h6",component:"h2"},r.a.createElement("p",null,t.title,r.a.createElement("br",null),t.year)),r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},t.type)),r.a.createElement(ye.a,{className:e.media,image:"N/A"!==t.poster?t.poster:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",title:t.title})),r.a.createElement(we.a,null,N.filter((function(e){return e.id===t.id})).length?r.a.createElement(w.a,{onClick:function(){return e=t,void b.deleteFavourites({id:e.id,title:e.title,year:e.year,type:e.type,poster:e.poster});var e},size:"small",color:"secondary",variant:"outlined",className:e.action},"Usu\u0144 z ulubionych"):r.a.createElement(w.a,{onClick:function(){return e=t,void b.setNewFavourites({id:e.id,title:e.title,year:e.year,type:e.type,poster:e.poster});var e},size:"small",color:"secondary",variant:"outlined",className:e.action},"Dodaj do ulubionych"),(n="/145985fakultetSoftwarehut/searchDetail/"+t.id,o="Szczeg\xf3\u0142y",i={id:t.id,title:t.title,year:t.year,type:t.type,poster:t.poster},r.a.createElement(w.a,{color:"secondary",className:e.action,onClick:function(){return y.push(n,i)}},o))));var n,o,i}))))},Oe=Object(h.a)({root:{marginTop:"6vh",marginBottom:"1vh",marginLeft:"1.5vw",display:"inline-block",width:"30vw",height:"85vh",textAlign:"center"},root2:{marginTop:"6vh",marginBottom:"1vh",marginLeft:"1.5vw",display:"inline-block",width:"64.5vw",height:"85vh",textAlign:"left"},content:{maxHeight:"15vh",overflow:"hidden",padding:20},media:{marginTop:"1vh",height:"70vh"},center:{marginLeft:"calc(50% - 16vw)",marginTop:"11vh",marginBottom:"2vh",width:"30vw"},action:{padding:5,marginTop:2,marginRight:"auto",marginLeft:"auto"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),Te=function(e){var t=Oe(),a=r.a.useState({id:"",title:"",year:"",type:"",poster:""}),n=Object(u.a)(a,2),o=n[0],i=n[1],l=r.a.useState({actors:"",ageRating:"",awards:"",director:"",plot:"",poster:"",production:"",rating:"",releaseDate:"",title:"",votes:"",writer:""}),c=Object(u.a)(l,2),s=c[0],m=c[1],d=C(ae),f=Object(ne.b)(oe),v=new q.a;r.a.useEffect((function(){i(e.location.state),pe.searchById(o.id).then((function(e){e&&m({actors:e.actors,ageRating:e.rating,awards:e.awards,director:e.director,plot:e.plot,poster:e.poster,production:e.production,rating:e.rating,releaseDate:e.releaseDate,title:e.title,votes:e.votes,writer:e.writer})})),console.log("halo?")}),[e.location.state,o]);return v.set("fav",f,{path:"/"}),r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(he.a,{className:t.root,color:"secondary",variant:"outlined"},r.a.createElement(Ee.a,null,r.a.createElement(ge.a,{className:t.content},r.a.createElement(p.a,{className:t.content,variant:"h6",component:"h6"},r.a.createElement("p",null,s.title)),r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},s.director)),r.a.createElement(ye.a,{className:t.media,image:"N/A"!==s.poster?s.poster:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",title:s.title}))),r.a.createElement(he.a,{className:t.root2,variant:"outlined"},r.a.createElement(ge.a,null,r.a.createElement(p.a,{className:t.title,color:"textPrimary",gutterBottom:!0,variant:"h2",component:"h1"},r.a.createElement("h2",null,"Information:")),r.a.createElement(p.a,{className:t.pos,color:"textPrimary"},"Actors: ",s.actors),r.a.createElement(p.a,{className:t.pos,color:"secondary"},"Rating: ",s.rating),r.a.createElement(p.a,{className:t.pos,color:"textPrimary"},"Awards: ",s.awards),r.a.createElement(p.a,{className:t.pos,color:"textPrimary"},"Plot: ",s.plot),r.a.createElement(p.a,{className:t.pos,color:"textPrimary"},"Production: ",s.production),r.a.createElement(p.a,{className:t.pos,color:"textPrimary"},"Release Date: ",s.releaseDate)),r.a.createElement(we.a,null,f.filter((function(e){return e.id===o.id})).length?r.a.createElement(w.a,{onClick:function(){return function(e){d.deleteFavourites({id:e.id,title:e.title,year:e.year,type:e.type,poster:e.poster})}(o)},size:"small",color:"secondary",variant:"outlined",className:t.action},"Usu\u0144 z ulubionych"):r.a.createElement(w.a,{onClick:function(){return function(e){d.setNewFavourites({id:e.id,title:e.title,year:e.year,type:e.type,poster:e.poster}),console.log(f)}(o)},size:"small",color:"secondary",variant:"outlined",className:t.action},"Dodaj do ulubionych"))))},ke=function(){return r.a.createElement("div",null,r.a.createElement(A,null))},Se=function(){function e(){Object(R.a)(this,e)}return Object(z.a)(e,[{key:"setNewTodo",value:function(e){te.dispatch(M(e))}},{key:"deleteTodo",value:function(e){te.dispatch(G(e))}},{key:"setTodoDone",value:function(e){te.dispatch(U(e.id))}}]),e}(),_e=Object(re.a)((function(e){return e.todos}),(function(e){return e.list})),je=function(){var e=C(Se),t=Object(ne.b)(_e);return r.a.useEffect((function(){e.setNewTodo({done:!1,label:"nowe todo",description:"opis todo",id:1})}),[]),r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("div",{key:t},e.label)})))},De=a(146),xe=Object(h.a)({root:{marginBottom:"1vh",marginLeft:"1.5vw",display:"inline-block",width:"30vw",height:"auto",textAlign:"center"},content:{maxHeight:"15vh",overflow:"hidden"},media:{marginTop:"1vh",height:"53vh"},center:{marginLeft:"auto",marginRight:"auto",marginTop:"11vh",marginBottom:"2vh",width:"100%",textAlign:"center"},action:{padding:5,marginTop:2,marginRight:"auto",marginLeft:"auto"}}),Ae=function(){var e=xe(),t=Object(c.f)(),a=C(ae),n=Object(ne.b)(oe),o=new De.a;return o.set("fav",n,{path:"/"}),r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("h1",{className:e.center},"Favorites:"),n.map((function(n){return r.a.createElement(he.a,{className:e.root,color:"secondary",variant:"outlined"},r.a.createElement(Ee.a,null,r.a.createElement(ge.a,{className:e.content},r.a.createElement(p.a,{className:e.content,gutterBottom:!0,variant:"h6",component:"h2"},r.a.createElement("p",null,n.title,r.a.createElement("br",null),n.year)),r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},n.type)),r.a.createElement(ye.a,{className:e.media,image:"N/A"!==n.poster?n.poster:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",title:n.title})),r.a.createElement(we.a,null,r.a.createElement(w.a,{onClick:function(){return e=n,void a.deleteFavourites({id:e.id,title:e.title,year:e.year,type:e.type,poster:e.poster});var e},size:"small",color:"secondary",variant:"outlined",className:e.action},"Usu\u0144 z ulubionych"),(o="/145985fakultetSoftwarehut/searchDetail/"+n.id,i="Szczeg\xf3\u0142y",l={id:n.id,title:n.title,year:n.year,type:n.type,poster:n.poster},r.a.createElement(w.a,{color:"secondary",className:e.action,onClick:function(){return t.push(o,l)}},i))));var o,i,l})))},Fe=function(){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(ne.a,{store:te},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/145985fakultetSoftwarehut/movie",component:F}),r.a.createElement(c.a,{path:"/145985fakultetSoftwarehut/search",component:Ne}),r.a.createElement(c.a,{path:"/145985fakultetSoftwarehut/searchDetail/:id",component:Te}),r.a.createElement(c.a,{path:"/145985fakultetSoftwarehut/todo",component:je}),r.a.createElement(c.a,{path:"/145985fakultetSoftwarehut/fav",component:Ae}),r.a.createElement(c.a,{path:"/145985fakultetSoftwarehut/",component:ke})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,a){e.exports=a(102)},94:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.34adc4d1.chunk.js.map