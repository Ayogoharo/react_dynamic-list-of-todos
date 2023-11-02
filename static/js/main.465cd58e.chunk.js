(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(8),a=c.n(s),n=c(2),l=c(1),i=(c(13),c(14),c(5)),d=c.n(i),o=c(0),r=function(e){var t=e.todos,c=e.activeTodo,s=e.setActiveTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":e.id===(null===c||void 0===c?void 0:c.id)}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:d()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:d()("far",{"fa-eye-slash":e.id===(null===c||void 0===c?void 0:c.id),"fa-eye":e.id!==(null===c||void 0===c?void 0:c.id)})})})})})]},e.id)}))})]})},j=c(7);var b=function(e){var t=e.todos,c=e.setFilteredTodos,s=Object(l.useState)(""),a=Object(n.a)(s,2),i=a[0],d=a[1],r=Object(l.useState)(""),b=Object(n.a)(r,2),u=b[0],h=b[1];return Object(l.useEffect)((function(){c(function(e,t,c){var s=Object(j.a)(e);return c&&(s=Object(j.a)(e).filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))),"active"===t&&(s=s.filter((function(e){return!e.completed}))),"completed"===t&&(s=s.filter((function(e){return e.completed}))),s}(t,i,u))}),[u,i,t,c]),Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return d(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:u,onChange:function(e){return h(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),u&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return h("")}})})]})]})},u=(c(16),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t,c=e.activeTodo,s=e.setActiveTodo,a=Object(l.useState)(!0),i=Object(n.a)(a,2),d=i[0],r=i[1],j=Object(l.useState)(null),b=Object(n.a)(j,2),m=b[0],O=b[1];return c&&(t=c.userId,h("/users/".concat(t))).then(O).finally((function(){return r(!1)})),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),d?Object(o.jsx)(u,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===c||void 0===c?void 0:c.id]}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return s(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:null===c||void 0===c?void 0:c.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==c&&void 0!==c&&c.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===m||void 0===m?void 0:m.email),children:null===m||void 0===m?void 0:m.name})]})]})]})]})},O=function(){var e=Object(l.useState)(!0),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)([]),i=Object(n.a)(a,2),d=i[0],j=i[1],O=Object(l.useState)(null),x=Object(n.a)(O,2),v=x[0],f=x[1],p=Object(l.useState)([]),N=Object(n.a)(p,2),y=N[0],g=N[1];return Object(l.useEffect)((function(){h("/todos").then(j).finally((function(){return s(!1)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(b,{todos:d,setFilteredTodos:g})}),Object(o.jsx)("div",{className:"block",children:c?Object(o.jsx)(u,{}):Object(o.jsx)(r,{todos:y,activeTodo:v,setActiveTodo:f})})]}),v&&Object(o.jsx)(m,{activeTodo:v,setActiveTodo:f})]})};a.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.465cd58e.chunk.js.map