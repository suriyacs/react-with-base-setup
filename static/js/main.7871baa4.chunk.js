(this["webpackJsonpreact-with-base-setup"]=this["webpackJsonpreact-with-base-setup"]||[]).push([[0],{18:function(e,t,n){e.exports={link:"Header_link__2fBBZ",headerParent:"Header_headerParent__13rOQ",headerRow:"Header_headerRow__31rdL",rightCol:"Header_rightCol__2FILH",header:"Header_header__1fCsm",leftCol:"Header_leftCol__3ffYh"}},20:function(e,t,n){e.exports={headColor:"Home_headColor__1LDPS",homeSection:"Home_homeSection__EJkqb",parentRow:"Home_parentRow__1FBQj",buttonSection:"Home_buttonSection__2MlBz",viewHistory:"Home_viewHistory__1onfa",searchSection:"Home_searchSection__1zZXy",searchIcon:"Home_searchIcon__Z-K-s"}},23:function(e,t,n){e.exports={loadingOverlay:"Loader_loadingOverlay__VygoW",loader:"Loader_loader__lzqSF",loaderOne:"Loader_loaderOne__32xy_",loaderTwo:"Loader_loaderTwo__3ldOf",loaderThree:"Loader_loaderThree__1ai-W",pulse:"Loader_pulse__1V-uZ"}},49:function(e,t,n){e.exports={customButton:"Button_customButton__3nGFb"}},62:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(26),s=n.n(a),o=n(16),i=(n(62),n(63),n(64),n(19)),u=n(51),l=n(47),d=n.n(l),j=n(9),O="FETCH_HISTORY_REQUEST",b="FETCH_HISTORY_SUCCESS",h="FETCH_HISTORY_FAILURE",p={pending:!1,historyList:[],error:null},_="FETCH_SITE_LIST_REQUEST",m="FETCH_SITE_LIST_SUCCESS",f="FETCH_SITE_LIST_FAILURE",R={pending:!1,siteList:[],error:null},x=Object(i.b)({history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(j.a)(Object(j.a)({},e),{},{pending:!0});case b:return Object(j.a)(Object(j.a)({},e),{},{pending:!1,historyList:t.payload.historyList,error:null});case h:return Object(j.a)(Object(j.a)({},e),{},{pending:!1,historyList:[],error:t.payload.error});default:return Object(j.a)({},e)}},home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(j.a)(Object(j.a)({},e),{},{pending:!0});case m:return Object(j.a)(Object(j.a)({},e),{},{pending:!1,siteList:t.payload.siteList,error:null});case f:return Object(j.a)(Object(j.a)({},e),{},{pending:!1,siteList:[],error:t.payload.error});default:return Object(j.a)({},e)}}}),v=n(11),E=n.n(v),y=n(7),T=n(15),g=n.n(T),S=function(e){return{type:h,payload:e}},N=E.a.mark(L),w=E.a.mark(H),C=function(){return g.a.get("https://run.mocky.io/v3/9cb66c7c-9e4f-4574-b16d-6a89f2b8f328")};function L(){var e;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.b)(C);case 3:return e=t.sent,t.next=6,Object(y.d)((n={historyList:e.data},{type:b,payload:n}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(y.d)(S({error:t.t0.message}));case 12:case"end":return t.stop()}var n}),N,null,[[0,8]])}function H(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([Object(y.e)(O,L)]);case 2:case"end":return e.stop()}}),w)}var I=H,P=function(e){return{type:f,payload:e}},A=function(){return g()({method:"get",url:"/users?page=1"})},k=E.a.mark(U),F=E.a.mark(D);function U(){var e;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.b)(A);case 3:return e=t.sent,t.next=6,Object(y.d)((n={siteList:e.data},{type:m,payload:n}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(y.d)(P({error:t.t0.message}));case 12:case"end":return t.stop()}var n}),k,null,[[0,8]])}function D(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([Object(y.e)(_,U)]);case 2:case"end":return e.stop()}}),F)}var B=D,V=E.a.mark(q);function q(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([Object(y.c)(I)]);case 2:return e.next=4,Object(y.a)([Object(y.c)(B)]);case 4:case"end":return e.stop()}}),V)}var Y=Object(u.a)(),M=Object(i.d)(x,Object(i.a)(Y,d.a));Y.run(q);var W=M,K=n(50),Q=n(6),Z=n(28),z=n(48),J=n(29),G=n(32),X=n(49),$=n.n(X),ee=n(2),te=function(e){return Object(ee.jsxs)("button",{type:"button",className:"".concat($.a.customButton," btn btn-primary"),id:"create-bootstrap",onClick:e.callBack,children:[Object(ee.jsx)("i",{className:"".concat(e.icon," m-r-10px")}),e.name]})},ne=n(20),re=n.n(ne),ce=function(e){Object(J.a)(n,e);var t=Object(G.a)(n);function n(e){var r;return Object(Z.a)(this,n),(r=t.call(this,e)).createNewBootstrapRequest=function(){console.log("Function executed!!")},r.viewAllHistory=function(){r.props.history.push("/history")},r}return Object(z.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchSiteList()}},{key:"render",value:function(){var e=this.props,t=e.pending,n=e.sites;return Object(ee.jsx)("main",{style:{padding:"15px"},className:"text-primary",children:Object(ee.jsx)("section",{className:"".concat(re.a.homeSection),children:Object(ee.jsxs)("div",{className:"".concat(re.a.parentRow," row"),children:[Object(ee.jsx)("div",{className:"".concat(re.a.buttonSection," col-12"),children:Object(ee.jsxs)("div",{className:"row justify-content-between mb-4",children:[Object(ee.jsx)("div",{className:"col-sm-6 col-lg-5 col-xl-4",children:Object(ee.jsx)(te,{name:"Create Bootstrap Request",callBack:this.createNewBootstrapRequest,icon:"bi bi-plus-circle"})}),Object(ee.jsx)("div",{className:"col-xs-6 col-sm-4 col-lg-3 text-sm-right",children:Object(ee.jsx)("button",{type:"button",className:"".concat(re.a.viewHistory," btn btn-primary"),onClick:this.viewAllHistory,children:"View all History"})})]})}),Object(ee.jsx)("div",{className:"".concat(re.a.searchSection," col-12 mb-3"),children:Object(ee.jsxs)("div",{className:"input-group mb-3",children:[Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Search site/stack","aria-label":"Username","aria-describedby":"basic-addon1"}),Object(ee.jsx)("i",{className:"".concat(re.a.searchIcon," bi bi-search position-absolute")})]})}),this.props.error?Object(ee.jsx)("div",{id:"error",className:"col error",children:"Something went wrong!"}):Object(ee.jsx)("div",{className:"col-12",children:Object(ee.jsx)("ul",{id:"list-group",className:"list-group",children:n&&n.length?n.map((function(e,t){return Object(ee.jsxs)("li",{className:"list-group-item",children:[++t,". ",e.first_name]},e.id)})):t&&Object(ee.jsx)("div",{id:"no-result",children:"No results found!"})})})]})})})}}]),n}(c.a.Component),ae=Object(Q.f)(Object(o.b)((function(e){return{pending:e.home.pending,sites:e.home.siteList,error:e.home.error}}),(function(e){return{fetchSiteList:function(){return e({type:_})}}}))(ce)),se=function(){var e=Object(o.c)();return Object(r.useEffect)((function(){e({type:O})}),[e]),Object(ee.jsx)("div",{children:"Current page is under development"})},oe=n(18),ie=n.n(oe);function ue(){return Object(ee.jsx)("div",{className:"".concat(ie.a.headerParent," container-fluid"),children:Object(ee.jsxs)("div",{className:"".concat(ie.a.headerRow," row align-items-center"),children:[Object(ee.jsx)("div",{className:"".concat(ie.a.rightCol," col-8 col-sm-10 col-lg-10 col-xl-11 text-center"),children:Object(ee.jsx)("span",{className:"".concat(ie.a.header),children:"MyUnity Mobile Sync Tool"})}),Object(ee.jsxs)("div",{className:"".concat(ie.a.leftCol," col"),children:[Object(ee.jsx)("i",{className:"".concat(ie.a.personIcon," c-pointer bi bi-person-fill")}),Object(ee.jsx)("i",{className:"".concat(ie.a.hamburIcon," c-pointer m-l-15px bi bi-list")})]})]})})}var le=n(17),de=(Object(le.a)((function(e){return e.history.historyList}),(function(e){return e})),Object(le.a)((function(e){return e.history.pending}),(function(e){return e}))),je=(Object(le.a)((function(e){return e.history.error}),(function(e){return e})),Object(le.a)((function(e){return e.home.siteList}),(function(e){return e})),Object(le.a)((function(e){return e.home.pending}),(function(e){return e}))),Oe=(Object(le.a)((function(e){return e.home.error}),(function(e){return e})),n(23)),be=n.n(Oe),he=function(){var e=Object(o.d)(de),t=Object(o.d)(je);return Object(ee.jsx)("div",{children:e||t?Object(ee.jsx)("div",{id:"loader",className:"".concat(be.a.loadingOverlay),children:Object(ee.jsxs)("div",{className:"".concat(be.a.loader),children:[Object(ee.jsx)("div",{className:"".concat(be.a.loaderOne)}),Object(ee.jsx)("div",{className:"".concat(be.a.loaderTwo)}),Object(ee.jsx)("div",{className:"".concat(be.a.loaderThree)})]})}):""})},pe=(n(88),function(){return Object(ee.jsx)(K.a,{children:Object(ee.jsxs)("div",{className:"app-container",children:[Object(ee.jsx)(ue,{}),Object(ee.jsx)(he,{}),Object(ee.jsx)("div",{className:"container m-t-30px",children:Object(ee.jsxs)(Q.c,{children:[Object(ee.jsx)(Q.a,{exact:!0,path:"/",children:Object(ee.jsx)(ae,{})}),Object(ee.jsx)(Q.a,{path:"/history",children:Object(ee.jsx)(se,{})})]})})]})})}),_e=n(31),me=n(52),fe=function(e){Object(J.a)(n,e);var t=Object(G.a)(n);function n(e){var r;return Object(Z.a)(this,n),(r=t.call(this)).name=e.name,r.message=e.message,Error.captureStackTrace(Object(_e.a)(r),r.constructor),r}return n}(Object(me.a)(Error)),Re={SERVER_ERROR:{name:"SERVER_ERROR",message:"Unexpected server error."},UNAUTHORISED_ERROR:{name:"UNAUTHORISED_ERROR",message:"You are unauthorised to access this information."},FORBIDDEN_ERROR:{name:"FORBIDDEN_ERROR",message:"You are forbidden to access this information."},CLIENT_ERROR:{name:"CLIENT_ERROR",message:"Something went wrong. Please try again."},NOT_FOUND:{name:"NOT_FOUND",message:"Requested content not found"}},xe=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/react-with-base-setup",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NODE_ENV:"",REACT_APP_DEV_PORT:"",REACT_APP_API_PROTOCOL:"https://",REACT_APP_API_HOST:"reqres.in",REACT_APP_API_PORT:""}),t=e.REACT_APP_API_PROTOCOL,n=e.REACT_APP_API_HOST,r=e.API_PORT,c="/api";return t&&n&&(c="".concat(t).concat(n).concat(r?":".concat(r):"").concat(c)),c};(function(){g.a.defaults.baseURL=xe(),g.a.defaults.headers.post["Content-Type"]="application/json",g.a.defaults.validateStatus=function(){return!0},g.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),g.a.interceptors.response.use((function(e){if(e.status>=500)throw new fe(Re.SERVER_ERROR);if(401===e.status)throw new fe(Re.UNAUTHORISED_ERROR);if(403===e.status)throw new fe(Re.FORBIDDEN_ERROR);if(404===e.status)throw new fe(Re.CLIENT_ERROR);if(200===e.status||201===e.status||202===e.status||204===e.status)return e.data;throw new fe(Re.CLIENT_ERROR)}),(function(e){return Promise.reject(e)}))})(),s.a.render(Object(ee.jsx)(c.a.StrictMode,{children:Object(ee.jsx)(o.a,{store:W,children:Object(ee.jsx)(pe,{})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.7871baa4.chunk.js.map