(this.webpackJsonpboardgames=this.webpackJsonpboardgames||[]).push([[0],{245:function(e,a,t){e.exports=t(411)},411:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(54),c=t.n(r),o=t(23),m=t(112),u=t.n(m);t(250),t(252);u.a.initializeApp({apiKey:"AIzaSyDZuvDGMSaJunf_6ii8UosPY6sQNr-o5d8",authDomain:"boar-d6042.firebaseapp.com",databaseURL:"https://boar-d6042.firebaseio.com",projectId:"boar-d6042",storageBucket:"boar-d6042.appspot.com",messagingSenderId:"97299538707",appId:"1:97299538707:web:232705d5421931947770e6",measurementId:"G-6C5XDWMN1Z"});var i=u.a.database().ref(),s=u.a.firestore(),d=Object(n.createContext)(null),E=d.Provider,p=t(425),f=t(426),g=t(57),b=t(235),y=t(412),h=t(420),C=t(427),w=t(423),x=t(32),v=function(){for(var e=[],a=1;a<15;a++)e.push({key:a,text:"".concat(a," days"),value:a});return e}(),O=function(e){var a=e.open,t=e.setIsModalOpen,n=e.game;return l.a.createElement(h.a,{closeIcon:!0,open:a,onClose:function(){return t(!1)}},l.a.createElement(h.a.Header,null,l.a.createElement(f.a,{as:"h3"},"Request Boardgame",l.a.createElement(f.a.Subheader,{content:n.game}))),l.a.createElement(h.a.Content,null,l.a.createElement(C.a,null,l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Column,{width:4},l.a.createElement(b.a,{avatar:!0,src:"../../assets/images/default.jpg",size:"tiny"})),l.a.createElement(C.a.Column,{width:12},l.a.createElement(C.a.Row,{style:{fontWeight:"bold"}},n.lender.firstname," ",n.lender.lastname),l.a.createElement(C.a.Row,{style:{color:"grey"}},n.lender.username),l.a.createElement(C.a.Row,null,l.a.createElement(g.a,{name:"star"}),n.rating))),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Column,{style:{paddingTop:"10",paddingBottom:"10"}},l.a.createElement(g.a,{name:"home"})," Evanston, IL ")),l.a.createElement(C.a.Row,{style:{paddingTop:"10",paddingBottom:"10"}},l.a.createElement(C.a.Column,null,l.a.createElement(g.a,{name:"envelope"})," ",n.lender.email)),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Column,null,l.a.createElement("h3",null,"Rental Period"),l.a.createElement(w.a,{placeholder:"Select Duration",fluid:!0,selection:!0,textColor:"black",options:v}))),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Column,null,l.a.createElement("h3",null,"Recomended Meetup Location"),l.a.createElement(C.a.Column,{style:{color:"grey",paddingLeft:"2.5%"}},"Evanston, IL "))))),l.a.createElement(h.a.Actions,null,l.a.createElement(y.a,{as:x.b,to:"/confirm/".concat(n.id),color:"yellow",content:"Submit Request",fluid:!0})))},j=function(e){var a=e.data,t=Object(n.useState)(null),r=Object(o.a)(t,2),c=r[0],m=r[1];return l.a.createElement(p.a.Group,{itemsPerRow:1},a.map((function(e){return l.a.createElement(p.a,{key:e.id},l.a.createElement(p.a.Content,{as:x.b,to:"/".concat(e.id)},l.a.createElement(f.a,{style:{fontWeight:"lighter",fontSize:"12px"},floated:"right",content:e.distance}),l.a.createElement(p.a.Header,{content:e.game}),l.a.createElement(p.a.Meta,{style:{fontStyle:"italic",fontSize:"13px"}},e.minPlayers,"-",e.maxPlayers," Players"),l.a.createElement(p.a.Description,{style:{color:"grey",fontWeight:"bold",fontSize:"12px"}},e.lender.username," ",l.a.createElement(g.a,{style:{marginRight:"0px",marginLeft:"10px"},name:"star"}),e.rating)),l.a.createElement(b.a.Group,{size:"tiny"},l.a.createElement(b.a,{src:e.images[0]}),l.a.createElement(b.a,{src:e.images[1]}),l.a.createElement(b.a,{src:e.images[2]})),l.a.createElement(p.a.Content,{extra:!0},l.a.createElement(y.a,{onClick:function(){return m(e.id)},basic:!0,color:"yellow",content:"Borrow Now",fluid:!0})),l.a.createElement(O,{open:c===e.id,setIsModalOpen:function(){return m(!1)},game:e}))})))},S=t(417),R=t(418),I=t(419),k=t(428),H=function(){return l.a.createElement(k.a,{basic:!0,attached:"top",style:{backgroundColor:"orange",textAlign:"center"},fluid:"true"},l.a.createElement(f.a,{inverted:!0,content:"Player, Too",size:"large"}))},B=function(){var e=Object(n.useContext)(d).data,a=Object(n.useState)(e),t=Object(o.a)(a,2),r=t[0],c=t[1],m=Object(n.createRef)(),u=Object(n.useState)(""),i=Object(o.a)(u,2),s=i[0],E=i[1];return l.a.createElement("div",{ref:m},l.a.createElement(S.a,{context:m},l.a.createElement(H,null)),l.a.createElement(R.a,null,l.a.createElement(C.a,{columns:1,padded:!0},l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Column,null,l.a.createElement(I.a,{fluid:!0,onChange:function(a){E(a.target.value),console.log("this is searched"),console.log(s),function(a){console.log("reached updateData");var t=e,n=e.filter((function(e){return-1!==e.game.toUpperCase().indexOf(a.toUpperCase())}));c(""!==a?n:t),console.log("new relevant games"),console.log(r)}(a.target.value)}.bind(void 0),icon:"search",iconPosition:"left",placeholder:"Search..."}))),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Column,null,l.a.createElement(j,{data:r}))))))},_=t(46),z=t(80),P=t(422),L=t(430),D=function(){return l.a.createElement(k.a,{basic:!0,attached:"top",style:{backgroundColor:"orange"},fluid:"true"},l.a.createElement(f.a,{content:"",size:"large"},l.a.createElement(y.a,{style:{backgroundColor:"orange"},icon:"arrow left",as:x.b,to:"/"})))},G=function(){var e=Object(n.useContext)(d).data,a=Object(n.createRef)(),t=e[Object(_.e)().id],r=Object(n.useState)(!1),c=Object(o.a)(r,2),m=c[0],u=c[1];return l.a.createElement("div",{ref:a},l.a.createElement(S.a,{context:a},l.a.createElement(D,null)),l.a.createElement(R.a,null,l.a.createElement(O,{open:m,setIsModalOpen:u,game:t}),l.a.createElement(C.a,null,l.a.createElement(C.a.Row,{style:{textAlign:"center"}},l.a.createElement(b.a.Group,{size:"small"},l.a.createElement(b.a,{src:t.images[0]}),l.a.createElement(b.a,{src:t.images[1]}),l.a.createElement(b.a,{src:t.images[2]}))),l.a.createElement(C.a.Row,{style:{margin:"0px 10px 0px 10px "}},l.a.createElement(f.a,null,t.game,l.a.createElement(f.a.Subheader,{content:"".concat(t.minPlayers,"-").concat(t.maxPlayers," Players"),style:{fontStyle:"italic",color:"black"}}),l.a.createElement(f.a.Subheader,{content:t.description}))),l.a.createElement(C.a.Row,{style:{margin:"0px 10px 0px 10px "}},l.a.createElement(f.a,{size:"small"},"Tags:",t.tags.map((function(e){return l.a.createElement(z.a,{content:e})})))),l.a.createElement(P.a,null,l.a.createElement(f.a,{size:"small"},"Owner"),l.a.createElement(P.a.Event,null,l.a.createElement(P.a.Label,{image:"./assets/images/default.jpg"}),l.a.createElement(P.a.Content,null,l.a.createElement(P.a.Summary,null,t.lender.firstname," ",t.lender.lastname,l.a.createElement("br",null),l.a.createElement(P.a.Date,{content:t.lender.username}),l.a.createElement("br",null),l.a.createElement(L.a,{defaultRating:t.rating,maxRating:5,disabled:!0}))))),l.a.createElement(C.a.Row,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(y.a,{fluid:!0,color:"yellow",onClick:function(){return u(!0)}},"Borrow Now")))))},N=function(){return l.a.createElement(k.a,{basic:!0,attached:"top",style:{backgroundColor:"orange",textAlign:"center"},fluid:"true"},l.a.createElement(f.a,{content:"Confirmation",inverted:!0,size:"large"}))},J=function(){var e=Object(n.useContext)(d).data,a=Object(_.e)().id,t=e[a],r=Object(n.createRef)();return console.log(a),l.a.createElement("div",{ref:r},l.a.createElement(S.a,{context:r},l.a.createElement(N,null)),l.a.createElement(R.a,{style:{marginTop:"15px"}},l.a.createElement(f.a,{as:"h1",icon:!0},l.a.createElement(g.a,{color:"yellow",name:"check circle"}),"We've notified ",t.lender.firstname," that you would like to borrow their game: ",l.a.createElement("p",{style:{color:"orange"}},t.game),l.a.createElement(f.a.Subheader,null,"If ",t.lender.firstname," accepts your booking, you will get a notification so you can arrange a meetup!"),l.a.createElement("br",null),l.a.createElement(f.a.Subheader,null,"Happy playing!")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(y.a,{content:"Back to Listings",as:x.b,to:"/",fluid:!0,color:"yellow"})))},M=t(424),U=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){s.collection("Users").orderBy("age","desc").get().then((function(e){var a=[];e.forEach((function(e){return a.push(e.data())})),r(a)}))}),[]),console.log(t),l.a.createElement(M.a,{celled:!0,collapsing:!0},l.a.createElement(M.a.Header,null,l.a.createElement(M.a.Row,null,l.a.createElement(M.a.HeaderCell,null,"User Id"),l.a.createElement(M.a.HeaderCell,null,"Basic Info"),l.a.createElement(M.a.HeaderCell,null,"Contact Info"),l.a.createElement(M.a.HeaderCell,null,"Distance"),l.a.createElement(M.a.HeaderCell,null,"Credit Card Info"))),l.a.createElement(M.a.Body,null,t.map((function(e){return l.a.createElement(M.a.Row,{key:e.id},l.a.createElement(M.a.Cell,null,e.id),l.a.createElement(M.a.Cell,null,l.a.createElement(f.a,{as:"h4",image:!0},l.a.createElement(b.a,{src:e.display_pic,rounded:!0,size:"mini"}),l.a.createElement(f.a.Content,null,e.name,l.a.createElement(f.a.Subheader,null,"age: ",e.age," ",l.a.createElement("br",null),"birthday: ",e.birthday," ",l.a.createElement("br",null),"gender: ",e.gender," ",l.a.createElement("br",null),"rating: ",e.rating," ",l.a.createElement("br",null))))),l.a.createElement(M.a.Cell,null,l.a.createElement(f.a,null,l.a.createElement(f.a.Subheader,null,"phone: ",e.phone," ",l.a.createElement("br",null),"email: ",e.email))),l.a.createElement(M.a.Cell,null,l.a.createElement("p",null,"distance: ",e.distance)),l.a.createElement(M.a.Cell,null,l.a.createElement(f.a,null,l.a.createElement(f.a.Subheader,null,"number: ",e.credit_card.number," ",l.a.createElement("br",null),"pin: ",e.credit_card.pin," ",l.a.createElement("br",null),"security: ",e.credit_card.security," ",l.a.createElement("br",null),"expiration: ",e.credit_card.expiration))))}))))},W=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){s.collection("BoardGames").orderBy("rating","desc").limit(100).get().then((function(e){var a=[];e.forEach((function(e){return a.push(e.data())})),r(a)}))}),[]),console.log(t),l.a.createElement(M.a,{celled:!0,collapsing:!0},l.a.createElement(M.a.Header,null,l.a.createElement(M.a.Row,null,l.a.createElement(M.a.HeaderCell,null,"Game Id"),l.a.createElement(M.a.HeaderCell,null,"Basic Info"),l.a.createElement(M.a.HeaderCell,null,"Tags"),l.a.createElement(M.a.HeaderCell,null,"Description"),l.a.createElement(M.a.HeaderCell,null,"Year Published"))),l.a.createElement(M.a.Body,null,t.map((function(e){return l.a.createElement(M.a.Row,{key:e.id},l.a.createElement(M.a.Cell,null,e.id),l.a.createElement(M.a.Cell,null,l.a.createElement(f.a,{as:"h4",image:!0},l.a.createElement(b.a,{src:e.images.original,rounded:!0,size:"mini"}),l.a.createElement(f.a.Content,null,e.name,l.a.createElement(f.a.Subheader,null,"max_players: ",e.max_players," ",l.a.createElement("br",null),"min_players: ",e.min_players," ",l.a.createElement("br",null),"primary_publisher: ",e.primary_publisher,l.a.createElement("br",null),"rating: ",e.rating)))),l.a.createElement(M.a.Cell,null,l.a.createElement("p",null,"tags: ",e.tags.join(", "))),l.a.createElement(M.a.Cell,null,l.a.createElement("p",null,"description: ",e.description)),l.a.createElement(M.a.Cell,null,l.a.createElement("p",null,"year_published: ",e.year_published)))}))))},A=t(81),T=t.n(A),q=t(153),Y=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){s.collection("Listings").orderBy("id","asc").get().then((function(e){var a=[];e.forEach((function(e){return a.push(e.data())})),function(){var e=Object(q.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(a.map(function(){var e=Object(q.a)(T.a.mark((function e(t,n){var l,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.collection("BoardGames").doc(t.game_id).get();case 2:return l=e.sent,t.game=l.data(),e.next=6,s.collection("Users").doc(t.lender_id).get();case 6:r=e.sent,t.lender=r.data(),console.log(t),a[n]=t;case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()));case 2:r(a);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}))}),[]),console.log(t),l.a.createElement(M.a,{celled:!0,collapsing:!0},l.a.createElement(M.a.Header,null,l.a.createElement(M.a.Row,null,l.a.createElement(M.a.HeaderCell,null,"Listing Id"),l.a.createElement(M.a.HeaderCell,null,"Lender Id"),l.a.createElement(M.a.HeaderCell,null,"Raw Lender JSON"),l.a.createElement(M.a.HeaderCell,null,"Game Id"),l.a.createElement(M.a.HeaderCell,null,"Raw Game JSON"),l.a.createElement(M.a.HeaderCell,null,"Borrowed"))),l.a.createElement(M.a.Body,null,t.map((function(e){return l.a.createElement(M.a.Row,{key:e.id},l.a.createElement(M.a.Cell,null,e.id),l.a.createElement(M.a.Cell,null,e.lender_id),l.a.createElement(M.a.Cell,{style:{width:"600px"}},l.a.createElement("pre",{style:{whiteSpace:"pre-wrap",maxWidth:"600px"}},JSON.stringify(e.lender,null,2))),l.a.createElement(M.a.Cell,null,e.game_id),l.a.createElement(M.a.Cell,{style:{width:"600px"}},l.a.createElement("pre",{style:{whiteSpace:"pre-wrap",maxWidth:"600px"}},JSON.stringify(e.game,null,2))),l.a.createElement(M.a.Cell,null,e.borrowed?"true":"false"))}))))};var Z=function(){return 0!==Object(n.useContext)(d).data.length?l.a.createElement(x.a,null,l.a.createElement(_.a,{exact:!0,path:"/",render:function(){return l.a.createElement(B,null)}}),l.a.createElement(_.a,{exact:!0,path:"/:id",render:function(){return l.a.createElement(G,null)}}),l.a.createElement(_.a,{exact:!0,path:"/confirm/:id",render:function(){return l.a.createElement(J,null)}}),l.a.createElement(_.a,{exact:!0,path:"/firestore/users",render:function(){return l.a.createElement(U,null)}}),l.a.createElement(_.a,{exact:!0,path:"/firestore/games",render:function(){return l.a.createElement(W,null)}}),l.a.createElement(_.a,{exact:!0,path:"/firestore/listings",render:function(){return l.a.createElement(Y,null)}})):null};c.a.render(l.a.createElement((function(e){var a=e.children,t=Object(n.useState)([]),r=Object(o.a)(t,2),c=r[0],m=r[1];Object(n.useEffect)((function(){var e=function(e){e.val()&&m(e.val())};return i.on("value",e,(function(e){return alert(e)})),function(){i.off("value",e)}}),[]),console.log(c);var u={data:c};return l.a.createElement(E,{value:u},a)}),null,l.a.createElement(Z,null)),document.getElementById("root"))}},[[245,1,2]]]);
//# sourceMappingURL=main.e668db01.chunk.js.map