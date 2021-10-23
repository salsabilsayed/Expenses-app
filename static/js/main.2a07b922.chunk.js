(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(8),s=n.n(l),i=n(5),r=n(2),j=(n(14),n(0));var u=function(e){var t="card "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})},o=(n(16),n(17),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{onChange:function(t){e.onSelectYear(t.target.value)},value:e.selected,children:[Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(18),n(19);var d=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:t}),Object(j.jsx)("div",{className:"expense-date__year",children:a}),Object(j.jsx)("div",{className:"expense-date__day",children:n})]})};var b=function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(u,{className:"expense-item",children:[Object(j.jsx)(d,{date:e.date}),Object(j.jsxs)("div",{className:"expense-item__description",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("div",{className:"expense-item__price",children:e.amount})]})]})})},x=(n(20),function(e){return 0===e.items.length?Object(j.jsx)("h2",{className:"expenses-list__fallback",children:"Found No expenses."}):Object(j.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(j.jsx)(b,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),v=n(9),O=(n(21),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label"})]})}),h=(n(22),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(j.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),m=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(v.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(j.jsx)(h,{dataPoints:n})};var p=function(e){var t=Object(a.useState)("2020"),n=Object(r.a)(t,2),c=n[0],l=n[1],s=e.expenses.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(j.jsx)("div",{children:Object(j.jsxs)(u,{className:"expenses",children:[Object(j.jsx)(o,{onSelectYear:function(e){l(e)},selected:c}),Object(j.jsx)(m,{expenses:s}),Object(j.jsx)(x,{items:s})]})})},f=n(7),_=(n(23),function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),u=i[0],o=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),x=b[0],v=b[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:u,date:new Date(x)};e.onSaveChanges(n),l(""),o(""),v("")},children:[Object(j.jsxs)("div",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)},value:c})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),Object(j.jsx)("input",{type:"number",onChange:function(e){o(e.target.value)},value:u})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",value:x,min:"2019-01-01",max:"2022-12-31",onChange:function(e){v(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"new-expense__actions",children:[Object(j.jsx)("button",{type:"button",onClick:e.hideFormHandler,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),N=(n(24),function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1];return Object(j.jsxs)("div",{className:"new-expense",children:[!c&&Object(j.jsx)("button",{type:"button",onClick:function(){l(!0)},children:"Add New Expense"}),c&&Object(j.jsx)(_,{onSaveChanges:function(t){var n=Object(f.a)(Object(f.a)({},t),{},{id:Math.random().toString()});console.log(n),e.onAddExpense(n)},hideFormHandler:function(){l(!1)}})]})}),g=[{id:"e1",title:"Toilet Paper",amount:"94.12",date:new Date(2020,6,15)},{id:"e2",title:"New Tv",amount:"799.49",date:new Date(2020,2,12)},{id:"e3",title:"Car Insurance",amount:"294.67",date:new Date(2021,4,26)}];var y=function(){var e=Object(a.useState)(g),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(N,{onAddExpense:function(e){c((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(j.jsx)(p,{expenses:n})]})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.2a07b922.chunk.js.map