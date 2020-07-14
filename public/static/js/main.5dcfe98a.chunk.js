(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=n(4),u=n(18),s=n(64),i=n(5),m={uiOpenModal:"[ui] Open modal",uiCloseModal:"[ui] Close modal",eventSetActive:"[event] Set Active",eventLogout:"[event] Logout event",evetStartAddNew:"[event] Start add new",eventAddNew:"[event] Add new",eventClearActiveEvent:"[event] Clear active event",eventUpdated:"[event] Event updated",eventDeleted:"[event] Event deleted",eventLoaded:"[event] Events loaded",authCheckingFinish:"[auth] Finish checking login state",authStartLogin:"[auth] Start login",authLogin:"[auth] Login",authStartRegister:"[auth] Start Register",authStartStartTokenRenew:"[auth] Start token renew",authLogout:"[auth] Logout"},d={modalOpen:!1},v=n(53),p={events:[],activeEvent:null},f={checking:!0},h=Object(u.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.uiOpenModal:return Object(i.a)({},e,{modalOpen:!0});case m.uiCloseModal:return Object(i.a)({},e,{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.eventSetActive:return Object(i.a)({},e,{activeEvent:t.payload});case m.eventAddNew:return Object(i.a)({},e,{events:[].concat(Object(v.a)(e.events),[t.payload])});case m.eventClearActiveEvent:return Object(i.a)({},e,{activeEvent:null});case m.eventUpdated:return Object(i.a)({},e,{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case m.eventDeleted:return Object(i.a)({},e,{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case m.eventLodaded:return Object(i.a)({},e,{events:Object(v.a)(t.payload)});case m.eventLogout:return Object(i.a)({},p);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.authLogin:return Object(i.a)({},e,{},t.payload,{checking:!1});case m.authCheckingFinish:return Object(i.a)({},e,{checking:!1});case m.authLogout:return{checking:!1};default:return e}}}),E="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,b=Object(u.e)(h,E(Object(u.a)(s.a))),g=n(32),O=n(6),j=n(8),y=n.n(j),w=n(17),N="https://calendar-mern.herokuapp.com/api/",k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(N,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(N,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},x=n(12),C=n.n(x),A=n(13),D=n.n(A),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)({},e,{end:D()(e.end).toDate,start:D()(e.start).toDate})}))},T=function(e){return{type:m.eventAddNew,payload:e}},I=function(){return{type:m.eventClearActiveEvent}},P=function(e){return{type:m.eventUpdated,payload:e}},M=function(e){return{type:m.eventDeleted,payload:e}},R=function(e){return{type:m.eventLoaded,payload:e}},_=function(){return{type:m.authCheckingFinish}},F=function(e){return{type:m.authLogin,payload:e}},G=function(){return function(e){localStorage.clear(),e({type:m.eventLogout}),e(U())}},U=function(){return{type:m.authLogout}},V=n(34);function H(e){var t=e.isAuthenticated,n=e.component,a=Object(V.a)(e,["isAuthenticated","component"]);return r.a.createElement(O.b,Object.assign({},a,{component:function(e){return t?r.a.createElement(O.a,{to:"/"}):r.a.createElement(n,e)}}))}function J(e){var t=e.isAuthenticated,n=e.component,a=Object(V.a)(e,["isAuthenticated","component"]);return r.a.createElement(O.b,Object.assign({},a,{component:function(e){return t?r.a.createElement(n,e):r.a.createElement(O.a,{to:"/login"})}}))}var z=n(10),B=n(52),X=(n(79),n(80),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),q=n(67);function K(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},t),r.a.createElement("button",{className:"btn btn-outline-light",onClick:function(){e(G())}},r.a.createElement(q.a,{className:"mr-2 mb-1"}),r.a.createElement("span",null,"Salir")))}function Q(e){var t=e.event,n=t.title,a=t.user;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("strong",null,n))," ","-"," ",r.a.createElement("span",null,r.a.createElement("strong",null,a.name)))}var W=n(21),Y=n(49),Z=n.n(Y),$=n(50),ee=n.n($),te=function(){return{type:m.uiOpenModal}},ne=(n(114),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}});Z.a.setAppElement("#root");var ae=D()().minutes(0).seconds(0).add(1,"hours"),re=ae.clone().add(1,"hours"),ce={title:"Evento",notes:"",start:ae.toDate(),end:re.toDate()};function oe(){var e=Object(a.useState)(ae.toDate()),t=Object(z.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(re.toDate()),u=Object(z.a)(o,2),s=u[0],d=u[1],v=Object(a.useState)(!0),p=Object(z.a)(v,2),f=p[0],h=p[1],E=Object(a.useState)(ce),b=Object(z.a)(E,2),g=b[0],O=b[1],j=Object(l.b)(),N=Object(l.c)((function(e){return e.ui})).modalOpen,k=Object(l.c)((function(e){return e.calendar})).activeEvent,x=g.notes,A=g.title,L=g.start,M=g.end;Object(a.useEffect)((function(){O(k||ce)}),[k,O]);var R=function(e){var t=e.target;O(Object(i.a)({},g,Object(W.a)({},t.name,t.value)))},_=function(){j({type:m.uiCloseModal}),j(I()),O(ce)};return r.a.createElement(Z.a,{isOpen:N,onRequestClose:_,style:ne,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",k?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,n=D()(L),a=D()(M);return n.isSameOrAfter(a)?C.a.fire("Error","Date should be different than the start date","error"):A.trim().length<2?h(!1):(j(k?(t=g,function(){var e=Object(w.a)(y.a.mark((function e(n){var a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S("events/".concat(t.id),t,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?n(P(t)):C.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(w.a)(y.a.mark((function t(n,a){var r,c,o,l;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.uid,c=a.name,t.prev=1,t.next=4,S("events",e,"POST");case 4:return o=t.sent,t.next=7,o.json();case 7:(l=t.sent).ok&&(e.id=l.event.id,e.user={_id:r,name:c},n(T(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),h(!0),void _())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(ee.a,{onChange:function(e){c(e),O(Object(i.a)({},g,{start:e}))},value:n,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(ee.a,{onChange:function(e){d(e),O(Object(i.a)({},g,{end:e}))},minDate:n,value:s,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:A,onChange:R}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control ".concat(!f&&"is-invalid"),placeholder:"Notas",rows:"5",name:"notes",value:x,onChange:R}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement(q.c,null),r.a.createElement("span",null," Guardar"))))}function le(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-dark fab",onClick:function(){e(te())}},r.a.createElement(q.b,{size:"50px"}))}function ue(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(w.a)(y.a.mark((function e(t,n){var a,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,S("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(M()):C.a.fire("Error",c.msg,"error"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),C.a.fire("Error",e.t0,"error");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())}},r.a.createElement(q.d,{className:"mb-1 mr-2"}),r.a.createElement("span",null,"Borrar evento"))}D.a.locale("es");var se=Object(B.b)(D.a);function ie(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})),n=t.events,c=t.activeEvent,o=Object(l.c)((function(e){return e.auth})).uid,u=Object(a.useState)(localStorage.getItem("lastView")||"month"),s=Object(z.a)(u,2),i=s[0],d=s[1];Object(a.useEffect)((function(){e(function(){var e=Object(w.a)(y.a.mark((function e(t){var n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=L(a.events),t(R(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(K,null),r.a.createElement(B.a,{localizer:se,events:n,startAccessor:"start",endAccessor:"end",messages:X,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(te())},onSelectEvent:function(t){e({type:m.eventSetActive,payload:t})},onSelectSlot:function(t){e(I())},selectable:!0,onView:function(e){d(e),localStorage.setItem("lastView",e)},view:i,components:{event:Q}}),r.a.createElement(le,null),c&&r.a.createElement(ue,null),r.a.createElement(oe,null))}var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(z.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(i.a)({},r,Object(W.a)({},t.name,t.value)))};return[r,l,o]};n(115);function de(){var e=Object(l.b)(),t=me({lEmail:"alvaro@bluecatencode.com",lPassword:"123456"}),n=Object(z.a)(t,2),a=n[0],c=n[1],o=me({rName:"Eva",rEmail:"eva@bluecatencode.com",rPassword1:"123456",rPassword2:"123456"}),u=Object(z.a)(o,2),s=u[0],i=u[1],m=s.rName,d=s.rEmail,v=s.rPassword1,p=s.rPassword2,f=a.lEmail,h=a.lPassword;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=f,a=h,function(){var e=Object(w.a)(y.a.mark((function e(t){var r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:c.uid,name:c.name}))):C.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:f,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:h,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),v!==p)return C.a.fire("Error","Password should match","error");var n,a,r;e((n=d,a=v,r=m,function(){var e=Object(w.a)(y.a.mark((function e(t){var c,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:o.uid,name:o.name}))):C.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",value:m,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",value:d,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",value:v,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",value:p,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}function ve(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(w.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:a.uid,name:a.name}))):t(_());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?r.a.createElement("h5",null,"Espere...."):r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(O.d,null,r.a.createElement(H,{exact:!0,path:"/login",component:de,isAuthenticated:!!c}),r.a.createElement(J,{exact:!0,path:"/",component:ie,isAuthenticated:!!c}),r.a.createElement(O.a,{to:"/"}))))}function pe(){return r.a.createElement(l.a,{store:b},r.a.createElement(ve,null))}n(116);o.a.render(r.a.createElement(pe,null),document.getElementById("root"))},68:function(e,t,n){e.exports=n(118)}},[[68,1,2]]]);
//# sourceMappingURL=main.5dcfe98a.chunk.js.map