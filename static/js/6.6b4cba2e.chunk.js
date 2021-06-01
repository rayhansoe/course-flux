(this["webpackJsonpcourse-flux"]=this["webpackJsonpcourse-flux"]||[]).push([[6],{38:function(e,t,n){"use strict";var r=n(53),c=new r.Dispatcher;t.a=c},39:function(e,t,n){"use strict";t.a={CREATE_COURSE:"CREATE_COURSE",LOAD_COURSES:"LOAD_COURSES",UPDATE_COURSE:"UPDATE_COURSE",DELETE_COURSE:"DELETE_COURSE",CREATE_AUTHOR:"CREATE_AUTHOR",LOAD_AUTHOR:"LOAD_AUTHOR",UPDATE_AUTHOR:"UPDATE_AUTHOR",DELETE_AUTHOR:"DELETE_AUTHOR"}},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(49),c=n.n(r),u=n(50);function o(e){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:if(400!==t.status){e.next=7;break}return e.next=5,t.text();case 5:throw n=e.sent,new Error(n);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){throw console.error("API call failed. "+e),e}},45:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(45);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},54:function(e,t,n){"use strict";var r=n(41),c=n(42),u=n(44),o=n(43),a=n(48),i=n(38),s=n(39),f="change",O=[],E=new(function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"addChangeLister",value:function(e){this.on(f,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(f,e)}},{key:"emitChange",value:function(){this.emit(f)}},{key:"getCourses",value:function(){return O}},{key:"getCoursesBySlug",value:function(e){return O.find((function(t){return t.slug===e}))}}]),n}(a.EventEmitter));i.a.register((function(e){switch(e.actionType){case s.a.CREATE_COURSE:O.push(e.course),E.emitChange();break;case s.a.LOAD_COURSES:O=e.courses,E.emitChange();break;case s.a.UPDATE_COURSE:O=O.map((function(t){return t.id===e.course.id?e.course:t})),E.emitChange();break;case s.a.DELETE_COURSE:O=O.filter((function(t){return t.id!==parseInt(e.courseId,10)})),E.emitChange()}})),t.a=E},55:function(e,t,n){"use strict";n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h}));var r=n(49),c=n.n(r),u=n(50),o=n(51),a=n(40),i=Object({NODE_ENV:"production",PUBLIC_URL:"/course-flux",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL?Object({NODE_ENV:"production",PUBLIC_URL:"/course-flux",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL+"/courses/":"https://my-json-server.typicode.com/rayhansoe/course-db-json/courses/";var s=n(38),f=n(39),O=n(18),E=function(e){return function(e){return fetch(i+(e.id||""),{method:e.id?"PUT":"POST",headers:{"content-type":"application/json"},body:JSON.stringify(Object(o.a)(Object(o.a)({},e),{},{authorId:parseInt(e.authorId,10)}))}).then(a.b).catch(a.a)}(e).then((function(t){s.a.dispatch({actionType:e.id?f.a.UPDATE_COURSE:f.a.CREATE_COURSE,course:t}),e.id?O.b.info("\ud83d\ude80 Course Updated"):O.b.info("\ud83d\ude80 Course Saved")}))},b=function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i).then(a.b).catch(a.a).then((function(e){s.a.dispatch({actionType:f.a.LOAD_COURSES,courses:e})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(e){return function(e){return fetch(i+e,{method:"DELETE"}).then(a.b).catch(a.a)}(e).then((function(){s.a.dispatch({actionType:f.a.DELETE_COURSE,courseId:e}),O.b.error("\u26a0 Course deleted")}))}},70:function(e,t,n){"use strict";n.r(t);var r=n(52),c=n(54),u=n(55),o=n(0),a=n(8),i=n(12),s=n(1),f=Object(a.a)((function(){return n.e(11).then(n.bind(null,60))}));t.default=function(){var e=Object(o.useState)(c.a.getCourses()),t=Object(r.a)(e,2),n=t[0],a=t[1];function O(){a(c.a.getCourses())}return Object(o.useEffect)((function(){return c.a.addChangeLister(O),0===c.a.getCourses().length&&Object(u.b)(),function(){c.a.removeChangeListener(O)}}),[n.length]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Courses"}),Object(s.jsx)(i.b,{className:"btn btn-primary",to:"/course-flux/course",children:"Add Course"}),Object(s.jsx)(f,{courses:n,deleteCourse:u.a})]})}}}]);
//# sourceMappingURL=6.6b4cba2e.chunk.js.map