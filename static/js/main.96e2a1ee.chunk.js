(this.webpackJsonpapka=this.webpackJsonpapka||[]).push([[0],{24:function(e,n,c){},25:function(e,n,c){},31:function(e,n,c){},32:function(e,n,c){},33:function(e,n,c){},34:function(e,n,c){"use strict";c.r(n);var t=c(1),a=c(0),i=c.n(a),r=c(17),o=c.n(r),s=(c(24),c(14)),d=c(7),j=c(2),l=[{id:11,name:"Dr Nice"},{id:12,name:"Narco"},{id:13,name:"Bombasto"},{id:14,name:"Celeritas"},{id:15,name:"Magneta"},{id:16,name:"RubberMan"},{id:17,name:"Dynama"},{id:18,name:"Dr IQ"},{id:19,name:"Magma"},{id:20,name:"Tornado"}],h=Object(a.createContext)(l),b=(c(25),function(){var e=Object(a.useContext)(h),n=e.heroes,c=e.changeHero,i=n.slice(1,5);return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h3",{children:"Top Heroes"}),Object(t.jsx)("div",{className:"grid grid-pad",children:i.map((function(e){return Object(t.jsx)(d.b,{className:"col-1-4",to:"/details/".concat(e.id),onClick:function(){return c(e)},children:Object(t.jsx)("div",{className:"module hero",children:Object(t.jsx)("h4",{children:e.name})})},e.id)}))})]})}),u=c(15),O=(c(31),function(){var e=function(){var e=Object(j.e)(),n=Object(a.useContext)(h),c=n.heroes,t=n.changeHeroes,i=n.selectedHero;return{hero:c.filter((function(e){return(null===e||void 0===e?void 0:e.id)===(null===i||void 0===i?void 0:i.id)}))[0],goBack:function(){e.goBack()},changeHero:function(e){t(c.map((function(n){return n.id===i.id?Object(u.a)(Object(u.a)({},n),{},{name:e.target.value}):n})))}}}(),n=e.hero,c=e.changeHero,i=e.goBack;return Object(t.jsxs)("div",{children:[Object(t.jsxs)("h2",{children:[null===n||void 0===n?void 0:n.name," Details"]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("span",{children:"id: "}),null===n||void 0===n?void 0:n.id]}),Object(t.jsx)("div",{children:Object(t.jsxs)("label",{children:["name:",Object(t.jsx)("input",{value:null===n||void 0===n?void 0:n.name,placeholder:"name",onChange:c})]})}),Object(t.jsx)("button",{onClick:i,children:"go back"})]})}),m=function(e){var n=e.selectedHero,c=Object(j.e)();return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h2",{children:"".concat(n.name," is my Hero")}),Object(t.jsx)("button",{onClick:function(){return e=n.id,void c.push("/details/".concat(e));var e},children:"View Details"})]})},x=(c(32),function(){var e=Object(a.useContext)(h),n=e.heroes,c=e.selectedHero,i=e.changeHero;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h2",{children:"My Heroes"}),Object(t.jsx)("ul",{className:"heroes",children:n.map((function(e){return Object(t.jsxs)("li",{className:e.id===(null===c||void 0===c?void 0:c.id)?"selected":"",onClick:function(){return i(e)},children:[Object(t.jsx)("div",{className:"badge",children:e.id}),e.name]},e.id)}))}),c&&Object(t.jsx)(m,{selectedHero:c})]})});c(33);var v=function(){var e=Object(a.useState)(l),n=Object(s.a)(e,2),c=n[0],i=n[1],r=Object(a.useState)(void 0),o=Object(s.a)(r,2),u={heroes:c,selectedHero:o[0],changeHero:o[1],changeHeroes:i};return Object(t.jsxs)(h.Provider,{value:u,children:[Object(t.jsx)("h1",{children:"Tour of Heroes"}),Object(t.jsxs)(d.a,{basename:"/toh",children:[Object(t.jsxs)("nav",{children:[Object(t.jsx)(d.b,{to:"/dashboard",children:"Dashboard"}),Object(t.jsx)(d.b,{to:"/heroes",children:"Heroes"})]}),Object(t.jsx)(j.a,{exact:!0,path:"/",component:b}),Object(t.jsx)(j.a,{path:"/heroes",component:x}),Object(t.jsx)(j.a,{path:"/dashboard",component:b}),Object(t.jsx)(j.a,{path:"/details/:id",component:O})]})]})};o.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(v,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.96e2a1ee.chunk.js.map