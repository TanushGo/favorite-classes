(this.webpackJsonpclasses=this.webpackJsonpclasses||[]).push([[0],[,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),s=n.n(c),l=(n(12),n(13),n(1)),o=n(2),i=n.n(o),u=n(3);n(5);var m=function(e){var t,n=Object(a.useState)({}),c=Object(l.a)(n,2),s=c[0],o=c[1];return Object(a.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.peterportal.org/rest/v0/courses/"+e.name);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,console.log(a),o(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.name]),t=s.id?r.a.createElement("div",{className:"information"},r.a.createElement("p",{id:"title"}," ",s.title," "),r.a.createElement("p",{id:"department"},s.department_name),r.a.createElement("p",{id:"description"},s.description)):s.error?r.a.createElement("p",null,"Class Not Found"):r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"class"},e.name,r.a.createElement("div",null,t))};var p=function(e){var t,n=Object(a.useState)({}),c=Object(l.a)(n,2),s=c[0],o=c[1];Object(a.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){var n,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n='\n                query {\n                    course(id:"'.concat(e.name,'") {\n                        title\n                        department_name\n                        description\n                        instructor_history{\n                            name\n                        }\n                    }\n                }\n            '),t.next=3,fetch("https://api.peterportal.org/graphql",{method:"POST",body:JSON.stringify({query:n}),headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,console.log(r),o(r.data.course);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.name]);var m="";if(s&&s.instructor_history){console.log(s.instructor_history);for(var p=0;p<s.instructor_history.length;p++)s.instructor_history[p]&&(m+=s.instructor_history[p].name+" , ");t=r.a.createElement("div",{className:"information"},r.a.createElement("p",{id:"title"}," ",s.title," "),r.a.createElement("p",{id:"department"},s.department_name),r.a.createElement("p",{id:"description"},s.description),r.a.createElement("p",{id:"instructor"},"Professors : ",m.slice(0,-2)))}else t=null==s?r.a.createElement("p",null,"Class Not Found"):r.a.createElement("p",null,"Loading...");return r.a.createElement("div",{className:"class"},e.name,r.a.createElement("div",null,t))};n(15);var d=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)([]),i=Object(l.a)(o,2),u=i[0],d=i[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"Tanush's Favorite Classes"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.includes(c)||(d(u.concat(c)),s("")),console.log(u)}},r.a.createElement("label",null,"Add Favorite Class"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){s(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Add Class!")),r.a.createElement("div",{className:"my-classes"},u.map((function(e){return r.a.createElement(m,{name:e,key:e})}))),r.a.createElement("div",{className:"my-classes"},u.map((function(e){return r.a.createElement(p,{name:e,key:e})}))))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),E()}],[[7,1,2]]]);
//# sourceMappingURL=main.de2283a4.chunk.js.map