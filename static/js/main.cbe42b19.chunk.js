(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),i=t(8),s=t.n(i),r=(t(18),t(12)),u=t(2),o=t(5),b=(t(19),t(0)),j=Object(c.memo)((function(e){var n=e.habit,t=n.name,c=n.count;return Object(b.jsxs)("li",{className:"habit",children:[Object(b.jsx)("span",{className:"habit-name",children:t}),Object(b.jsx)("span",{className:"habit-count",children:c}),Object(b.jsx)("button",{className:"habit-button habit-increase",onClick:function(){e.onIncrement(e.habit)},children:Object(b.jsx)("i",{className:"far fa-plus-square"})}),Object(b.jsx)("button",{className:"habit-button habit-decrease",onClick:function(){e.onDecrement(e.habit)},children:Object(b.jsx)("i",{className:"far fa-minus-square"})}),Object(b.jsx)("button",{className:"habit-button habit-delete",onClick:function(){e.onDelete(e.habit)},children:Object(b.jsx)("i",{className:"fas fa-trash"})})]})})),l=Object(c.memo)((function(e){var n=a.a.createRef(),t=a.a.createRef();return Object(b.jsxs)("form",{ref:n,className:"inputForm",onSubmit:function(c){c.preventDefault();var a=t.current.value;a&&e.onAdd(a),n.current.reset()},children:[Object(b.jsx)("input",{type:"text",ref:t,className:"inputText",placeholder:"Habit"}),Object(b.jsx)("input",{type:"submit",value:"Add",className:"inputAdd"})]})})),d=function(e){var n=function(n){e.onIncrement(n)},t=function(n){e.onDecrement(n)},c=function(n){e.onDelete(n)},a=function(n){e.onAdd(n)};return Object(b.jsxs)("div",{children:[Object(b.jsx)(l,{onAdd:a}),Object(b.jsx)("ul",{children:e.habits.map((function(e){return Object(b.jsx)(j,{habit:e,onIncrement:n,onDecrement:t,onDelete:c,onAdd:a},e.id)}))}),Object(b.jsx)("button",{className:"reset",onClick:function(){e.onReset()},children:"Reset All"})]})},f=Object(c.memo)((function(e){return Object(b.jsxs)("header",{className:"navbar",children:[Object(b.jsx)("i",{class:"fas fa-leaf nav-icon"}),Object(b.jsx)("span",{className:"nav nav-title",children:"Habit Tracker"}),Object(b.jsx)("span",{className:"nav nav-count",children:e.change})]})})),m=t(9),O=t(10),h=t(13),x=t(11),p=(c.Component,function(e){var n=Object(c.useState)([{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]),t=Object(o.a)(n,2),a=t[0],i=t[1],s=Object(c.useCallback)((function(e){i((function(n){return n.map((function(n){return n.id===e.id?Object(u.a)(Object(u.a)({},e),{},{count:e.count+1}):n}))}))}),[]),j=Object(c.useCallback)((function(e){i((function(n){return n.map((function(n){if(n.id===e.id){var t=e.count-1;return Object(u.a)(Object(u.a)({},e),{},{count:t<0?0:t})}return n}))}))}),[]),l=Object(c.useCallback)((function(e){i((function(n){return n.filter((function(n){return n.id!==e.id}))}))}),[]),m=Object(c.useCallback)((function(e){i((function(n){return[].concat(Object(r.a)(n),[{id:Date.now(),name:e,count:0}])}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{change:a.filter((function(e){return e.count>0})).length}),Object(b.jsx)(d,{habits:a,onIncrement:s,onDecrement:j,onDelete:l,onAdd:m,onReset:function(){i((function(e){return e.map((function(e){return e.count>0?Object(u.a)(Object(u.a)({},e),{},{count:0}):e}))}))}})]})});t(21);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.cbe42b19.chunk.js.map