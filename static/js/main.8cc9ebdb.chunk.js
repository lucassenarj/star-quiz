(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5447:function(e,t,a){e.exports=a(5616)},5616:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),l=a(33),s=a(53),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SCORE":return e+t.score;case"RESET_SCORE":return 0;default:return e}},u=a(42),p=[],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_RANKING":return[].concat(Object(u.a)(e),[t.match]);default:return e}},h=a(5618),d=a(5621),f=a(5620),E=a(173),g=a.n(E),b=a(31),v=a(5617),y=a(21),w=a(22),O=a(24),j=a(23),x=a(25),S=a(18),k=a(3),N=a(66),D=a.n(N),R=a(19),C=function(e){return r.a.createElement("div",{className:e.layout},r.a.createElement(k.m,{style:{padding:20}},r.a.createElement(k.b,{src:"assets/images/darth-vader.png",alt:"Darth Vader",style:{width:200,height:200}})),r.a.createElement(k.h,null),r.a.createElement(k.m,null,r.a.createElement(v.a,{to:"/"},r.a.createElement(k.n,{button:!0},r.a.createElement(k.o,null,r.a.createElement(R.f,null)),r.a.createElement(k.p,{primary:"Home"}))),r.a.createElement(v.a,{to:"/quiz"},r.a.createElement(k.n,{button:!0},r.a.createElement(k.o,null,r.a.createElement(R.j,null)),r.a.createElement(k.p,{primary:"Quiz"}))),r.a.createElement(v.a,{to:"/ranking"},r.a.createElement(k.n,{button:!0},r.a.createElement(k.o,null,r.a.createElement(R.k,null)),r.a.createElement(k.p,{primary:"Ranking"}))),r.a.createElement(v.a,{to:"/about"},r.a.createElement(k.n,{button:!0},r.a.createElement(k.o,null,r.a.createElement(R.g,null)),r.a.createElement(k.p,{primary:"About"})))))},L=function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(k.s,{open:this.props.action,onClose:this.props.handle,onOpen:this.props.handle},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.props.handle,onKeyDown:this.props.handle},r.a.createElement(C,{layout:e.fullList})))}}]),t}(n.Component),_=Object(S.withStyles)({list:{width:300},fullList:{width:"auto"}})(L),I=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={drawer:!1},a.handleDrawer=function(){a.setState(function(e){return{drawer:!e.drawer}})},a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("header",{className:e.root},r.a.createElement(k.a,{position:"static"},r.a.createElement(k.u,{variant:"dense"},r.a.createElement(k.k,{onClick:this.handleDrawer,className:e.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(D.a,null)),r.a.createElement(k.v,{variant:"title",color:"inherit",className:e.flex},this.props.title),this.props.countdown&&this.props.countdown)),r.a.createElement(_,{action:this.state.drawer,handle:this.handleDrawer}))}}]),t}(n.Component),A=Object(S.withStyles)({root:{flexGrow:1},flex:{flexGrow:1},menuButton:{marginLeft:-18,marginRight:10}})(I),T=Object(S.withStyles)(function(e){return{layout:Object(b.a)({width:"auto",marginLeft:"10%",marginRight:"10%"},e.breakpoints.up(1280+3*e.spacing.unit*2),{width:1280,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")}}})(function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(A,{title:"Home Page"}),r.a.createElement("main",{className:t.layout},r.a.createElement(k.r,{className:t.paper},r.a.createElement("img",{src:"assets/images/darth-vader.png",alt:"Darth Vader",width:"30%"}),r.a.createElement("h1",null,"StarQuiz!"),r.a.createElement(v.a,{to:"/quiz"},r.a.createElement(k.c,{variant:"contained",color:"primary"},"Play",r.a.createElement(R.i,null))))))}),z=a(13),M=a.n(z),P=a(26),U=a(43),F=a.n(U),V="https://swapi.co/api",q=function(){var e=Object(P.a)(M.a.mark(function e(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("".concat(V,"/people/")).then(function(e){return e.data}).catch(function(e){return e});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(P.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("".concat(V,"/vehicles/").concat(t,"/")).then(function(e){return e.data}).catch(function(e){return e});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(P.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("".concat(V,"/films/").concat(t,"/")).then(function(e){return e.data}).catch(function(e){return e});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(P.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("".concat(V,"/species/").concat(t,"/")).then(function(e){return e.data}).catch(function(e){return e});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(P.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("".concat(V,"/planets/").concat(t,"/")).then(function(e){return e.data}).catch(function(e){return e});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),X=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={vehicles:[],films:[],species:[],planet:!1},a.componentDidMount=Object(P.a)(M.a.mark(function e(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.getVehiclesDetails(a.props.details.vehicles),a.getFilmsDetails(a.props.details.films),a.getSpeciesDetails(a.props.details.species),a.getPlanetsDetails(a.props.details.homeworld);case 4:case"end":return e.stop()}},e)})),a.getVehiclesDetails=function(){var e=Object(P.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.map(function(e){var t=e.split("/");B(t[5]).then(function(e){return a.setState(function(t){return{vehicles:[].concat(Object(u.a)(t.vehicles),[e])}})})});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getFilmsDetails=function(){var e=Object(P.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.map(function(e){var t=e.split("/");H(t[5]).then(function(e){return a.setState(function(t){return{films:[].concat(Object(u.a)(t.films),[e])}})})});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getSpeciesDetails=function(){var e=Object(P.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t&&t.map(function(e){var t=e.split("/");Q(t[5]).then(function(e){return a.setState(function(t){return{species:[].concat(Object(u.a)(t.species),[e])}})})});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getPlanetsDetails=function(){var e=Object(P.a)(M.a.mark(function e(t){var n;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t&&(n=t.split("/"),G(n[5]).then(function(e){return a.setState({planet:e})}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.paper},r.a.createElement(k.d,{className:e.card},r.a.createElement(k.g,{className:e.cover,image:this.props.thumbnail,title:"Live from space album cover"}),r.a.createElement("div",{className:e.details},r.a.createElement(k.f,{className:e.content},r.a.createElement(k.v,{variant:"headline"},"Details",r.a.createElement(k.c,{onClick:this.props.close,style:{float:"right"},size:"small",color:"primary"},r.a.createElement(R.c,null))),r.a.createElement(k.v,{variant:"subheading",color:"textSecondary"},r.a.createElement("b",null,"Specie:")," ",0!==this.state.species.length?this.state.species.map(function(e,t){return r.a.createElement("span",{key:t},e.name)}):r.a.createElement("span",null,"Loading...")),r.a.createElement(k.v,{variant:"subheading",color:"textSecondary"},r.a.createElement("b",null,"Height:")," ",this.props.details.height),r.a.createElement(k.v,{variant:"subheading",color:"textSecondary"},r.a.createElement("b",null,"Hair:")," ",this.props.details.hair_color),r.a.createElement(k.v,{variant:"subheading",color:"textSecondary"},r.a.createElement("b",null,"Planet:")," ",this.state.planet?r.a.createElement("span",null,this.state.planet.name):r.a.createElement("span",null,"Loading...")),r.a.createElement(k.v,{variant:"subheading",color:"textSecondary"},r.a.createElement("b",null,"Movies:")," ",0!==this.state.films.length?this.state.films.map(function(e,t){return r.a.createElement("span",{key:t},e.title,", ")}):r.a.createElement("span",null,"Loading...")),r.a.createElement(k.v,{variant:"subheading",color:"textSecondary"},r.a.createElement("b",null,"Veichels:")," ",0!==this.state.vehicles.length?this.state.vehicles.map(function(e,t){return r.a.createElement("span",{key:t},e.name,", ")}).sort(function(e,t){return e>t}):r.a.createElement("span",null,"None"))))))}}]),t}(n.Component),K=Object(S.withStyles)({card:{display:"flex"},details:{display:"flex",flexDirection:"column",width:"60%"},content:{flex:"1 0 auto"},cover:{width:350,height:350},paper:{position:"absolute",top:"25%",left:"25%",width:"50%"}})(X),J=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={modalOpen:!1,disabled:!1,help:!1,reply:!1,error:!1},a.handleReplyButton=function(){a.setState({reply:!0})},a.handleReplyInput=function(e){var t=e.target.value;if(t!==a.props.data.name)return a.setState({error:!0});if(t===a.props.data.name){var n=a.state.help?5:10;a.props.updateScore(n),a.setState({disabled:!0,error:!1})}},a.handleModal=function(){a.setState(function(e){return{modalOpen:!e.modalOpen,help:!0}})},a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.classes,t="assets/images/characters/".concat(this.props.data.name.toLowerCase().replace(" ","-"),".jpg");return r.a.createElement("div",null,r.a.createElement(k.d,{className:e.card},r.a.createElement(k.g,{className:e.media,image:t}),r.a.createElement(k.e,{className:e.cardActions},r.a.createElement(k.c,{onClick:this.handleReplyButton,size:"small",color:"primary"},r.a.createElement(R.e,null)),this.state.reply&&r.a.createElement(k.l,{onChange:this.handleReplyInput,error:this.state.error,disabled:this.state.disabled}),r.a.createElement(k.c,{onClick:this.handleModal,size:"small",color:"primary"},r.a.createElement(R.h,null)))),r.a.createElement(k.q,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.modalOpen,onClose:this.handleModal},r.a.createElement(K,{details:this.props.data,close:this.handleModal,thumbnail:t})))}}]),t}(n.Component),W=Object(S.withStyles)({card:{width:"30%",float:"left",margin:20},media:{height:"200px",paddingTop:"56.25%"},cardActions:{justifyContent:"space-between"}})(Object(l.b)(void 0,function(e){return{updateScore:function(t){return e(function(e){return{type:"UPDATE_SCORE",score:e}}(t))}}})(J)),Y=a(171),Z=a.n(Y),$=a(105),ee=a(5619),te=a(172),ae=a.n(te),ne=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={gameFinished:!0,player:{name:void 0,email:void 0,score:0}},a.handleUserName=function(e){var t=e.target.value,n=a.props.score;a.setState(function(e){return{player:Object($.a)({},e.player,{name:t,score:n})}})},a.handleUserEmail=function(e){var t=e.target.value;a.setState(function(e){return{player:Object($.a)({},e.player,{email:t})}})},a.handleUserSubmit=function(){a.state.player.name&&a.state.player.email&&(a.props.updateRanking(a.state.player),a.setState({gameFinished:!1}),a.props.resetScore())},a.handleModal=function(){},a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(ae.a,{isOpen:this.state.gameFinished,onRequestClose:this.handleModal,contentLabel:"Selected Option"},r.a.createElement("div",{className:e.content},r.a.createElement("h1",{className:e.fontFinished},"Quiz Finished!"),r.a.createElement("img",{src:"assets/images/darth-vader-impressive.png",alt:"Darth Vader"}),r.a.createElement("p",null,"Congratulations, your score final is: ",r.a.createElement("span",{className:e.fontScore},this.props.score)," points"),r.a.createElement("p",null,"Please, type your name and email for our rank"),r.a.createElement("div",null,r.a.createElement(k.i,{container:!0,spacing:8,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(k.i,{item:!0},r.a.createElement(R.b,null)),r.a.createElement(k.i,{item:!0},r.a.createElement(k.t,{onChange:this.handleUserName,id:"input-with-icon-grid",label:"Name"})),r.a.createElement(k.i,{item:!0},r.a.createElement(R.d,null)),r.a.createElement(k.i,{item:!0},r.a.createElement(k.t,{onChange:this.handleUserEmail,id:"input-with-icon-grid",label:"Email"})),r.a.createElement(k.c,{onClick:this.handleUserSubmit,variant:"contained",color:"primary",className:e.button},"Send",r.a.createElement(k.j,{className:e.rightIcon},"send")))),!this.state.gameFinished&&r.a.createElement(ee.a,{to:"/"})))}}]),t}(n.Component),re=Object(S.withStyles)(function(e){return{content:{marginTop:0,display:"flex",flexDirection:"column",alignItems:"center",flex:1,padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},fontFinished:{fontSize:80,margin:5},fontScore:{fontSize:40,fontHeight:"bold"},rightIcon:{marginLeft:e.spacing.unit}}})(Object(l.b)(function(e,t){return e.player?{player:e.player}:{score:e.score}},function(e,t){return{resetScore:function(){return e({type:"RESET_SCORE"})},updateRanking:function(t){return e(function(e){var t=e.name,a=void 0===t?"":t,n=e.score,r=void 0===n?0:n,c=e.email;return{type:"UPDATE_RANKING",match:{name:a,email:void 0===c?"":c,score:r}}}(t))}}})(ne)),ce=function(e){var t=e.minutes,a=e.seconds;return e.completed?r.a.createElement(re,{gameFinished:!0}):r.a.createElement("div",null,r.a.createElement(R.a,null),r.a.createElement("span",null,t,":",a))},ie=function(){return r.a.createElement(Z.a,{date:Date.now()+12e4,renderer:ce})},le=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={results:!1},a.componentWillMount=Object(P.a)(M.a.mark(function e(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:a.characters=e.sent,a.characters&&a.setState({results:!0});case 4:case"end":return e.stop()}},e)})),a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(A,{title:"Star Quiz",countdown:r.a.createElement(ie,null)}),r.a.createElement("main",{className:e.layout},this.state.results&&this.characters.results.map(function(e,t){return r.a.createElement(W,{data:e,key:t})}).sort(function(){return Math.random()-Math.random()})))}}]),t}(n.Component),se=Object(S.withStyles)(function(e){return{layout:Object(b.a)({width:"auto",marginLeft:"10%",marginRight:"10%"},e.breakpoints.up(1280+3*e.spacing.unit*2),{width:1280,marginLeft:"auto",marginRight:"auto"})}})(le),oe=Object(S.withStyles)(function(e){return{layout:Object(b.a)({width:"auto",marginLeft:"10%",marginRight:"10%"},e.breakpoints.up(1280+3*e.spacing.unit*2),{width:1280,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"row",alignItems:"start",flex:1,padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},content:{display:"flex",flexDirection:"column",alignItems:"start",flex:1,marginLeft:15}}})(function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(A,{title:"About"}),r.a.createElement("main",{className:t.layout},r.a.createElement(k.r,{className:t.paper},r.a.createElement("img",{src:"assets/images/darth-vader.png",alt:"Darth Vader",width:"30%"}),r.a.createElement("div",{className:t.content},r.a.createElement("h1",null,"Star Quiz!"),r.a.createElement("h3",null,"Rules:"),r.a.createElement(k.m,null,r.a.createElement(k.n,null,r.a.createElement(k.p,{primary:"Players have 2 minutes to reply the name of the character"})),r.a.createElement(k.h,null),r.a.createElement(k.n,null,r.a.createElement(k.p,{primary:"10 poits for each correct answer without help"})),r.a.createElement(k.h,null),r.a.createElement(k.n,null,r.a.createElement(k.p,{primary:"5 points if player require for help"})),r.a.createElement(k.h,null),r.a.createElement(k.n,null,r.a.createElement(k.p,{primary:"Players attempts are illimited"})),r.a.createElement(k.h,null)),r.a.createElement("h3",null,"Credits:"),r.a.createElement("p",null,"Developer by ",r.a.createElement("a",{href:"https://github.com/lucassenarj",target:"_blank"},"Lucas Sena"))))))}),ue=function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(A,{title:"Ranking"}),r.a.createElement("main",{className:e.layout},r.a.createElement(k.r,{className:e.paper},r.a.createElement("img",{src:"assets/images/darth-vader.png",alt:"Darth Vader",width:"30%"}),r.a.createElement("div",{className:e.content},r.a.createElement("h1",null,"Ranking!"),0!==this.props.state.rank.length?r.a.createElement(k.m,null,this.props.state.rank.map(function(e,t){return r.a.createElement(k.n,{key:t},r.a.createElement(k.b,null,e.score),r.a.createElement(k.p,{primary:e.name,secondary:e.email}))}).sort(function(e,t){return e.score-t.score})):r.a.createElement("span",null,"No ranking availible")))))}}]),t}(n.Component),pe=Object(l.b)(function(e){return{state:e}})(Object(S.withStyles)(function(e){return{layout:Object(b.a)({width:"auto",marginLeft:"10%",marginRight:"10%"},e.breakpoints.up(1280+3*e.spacing.unit*2),{width:1280,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"row",alignItems:"start",flex:1,padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},content:{display:"flex",flexDirection:"column",alignItems:"start",flex:1,marginLeft:15}}})(ue)),me=(g()(),function(){return r.a.createElement(h.a,{basename:"/"},r.a.createElement(d.a,null,r.a.createElement(f.a,{path:"/",component:T,exact:!0}),r.a.createElement(f.a,{path:"/quiz",component:se}),r.a.createElement(f.a,{path:"/ranking",component:pe}),r.a.createElement(f.a,{path:"/about",component:oe})))}),he=(a(5614),Object(s.c)(Object(s.b)({score:o,rank:m}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),de=r.a.createElement(l.a,{store:he},r.a.createElement(me,null));i.a.render(de,document.getElementById("root"))}},[[5447,2,1]]]);
//# sourceMappingURL=main.8cc9ebdb.chunk.js.map