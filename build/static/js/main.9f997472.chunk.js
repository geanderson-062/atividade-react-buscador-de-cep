(this.webpackJsonpbuscador=this.webpackJsonpbuscador||[]).push([[0],{24:function(e,t,c){},26:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(16),s=c.n(r),o=(c(24),c(6)),i=c.n(o),u=c(17),l=c(7),j=c(19),b=(c(26),c(18)),p=c.n(b).a.create({baseURL:"https://viacep.com.br/ws/"}),d=c(0);var h=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)({}),s=Object(l.a)(r,2),o=s[0],b=s[1];function h(){return(h=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c){e.next=3;break}return alert("Preencha algum CEP"),e.abrupt("return");case 3:return e.prev=3,e.next=6,p.get("".concat(c,"/json"));case 6:t=e.sent,b(t.data),a(""),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),alert("Ops, erro ao buscar o CEP"),a("");case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"title",children:"Buscador CEP"}),Object(d.jsxs)("div",{className:"containerInput",children:[Object(d.jsx)("input",{type:"text",placeholder:"Digite seu CEP...",value:c,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("button",{className:"buttonSearch",onClick:function(){return h.apply(this,arguments)},children:Object(d.jsx)(j.a,{size:25,color:"#fff"})})]}),Object.keys(o).length>0&&Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("h2",{children:["CEP: ",o.cep]}),Object(d.jsx)("span",{children:o.logradouro}),Object(d.jsxs)("span",{children:["Complemento: ",o.complemento]}),Object(d.jsx)("span",{children:o.bairro}),Object(d.jsxs)("span",{children:[o.localidade," - ",o.uf]})]})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.9f997472.chunk.js.map