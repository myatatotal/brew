(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{65:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t(1),c=t.n(a),o=t(33),i=t.n(o),s=t(8),u=t(2),b=t(7),d=t.n(b),p=t(13),j=t(6),l=t(34),x=t.n(l).a.create({baseURL:"https://brainweb-challenge.herokuapp.com/"}),m=t(3),h=t(4);function f(){var n=Object(m.a)(["\n  text-align: center;\n\n  .label {\n    margin-bottom: 1em;\n    margin-top: 0.7em;\n  }\n\n  button {\n    max-width: 400px;\n    width: 100%;\n    padding: 10px;\n    border-radius: 5px;\n    border: 0;\n    margin: 15px auto;\n    cursor: pointer;\n    background-color: var(--primary-color);\n    color: #fff;\n    font-size: 1em;\n    box-shadow: var(--box-shadow);\n    transition: 0.2s;\n\n    &:hover {\n      transform: translateY(1px);\n    }\n  }\n"]);return f=function(){return n},n}var O=h.b.div(f());function v(){var n=Object(m.a)(["\n  margin: auto;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid var(--primary-color);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  animation: "," 1s linear infinite;\n  margin-bottom: 15px;\n"]);return v=function(){return n},n}function g(){var n=Object(m.a)(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n"]);return g=function(){return n},n}var w=Object(h.c)(g()),z=h.b.div(v(),w),k=function(){return Object(r.jsx)(z,{})},y=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format;function N(){var n=Object(m.a)(["\n  display: flex;\n  /* flex-wrap: wrap; */\n  text-align: left;\n  padding: 10px 5px;\n  max-width: 400px;\n  min-height: 70px;\n  box-shadow: var(--box-shadow);\n  border-radius: 5px;\n  margin: 15px auto;\n  cursor: pointer;\n\n  animation: "," 0.5s;\n  transition: 0.2s;\n\n  &:hover {\n    transform: translateX(2px);\n  }\n\n  img {\n    max-width: 70px;\n    max-height: 100%;\n    margin-right: 15px;\n  }\n\n  p,\n  strong {\n    margin-bottom: 0.5em;\n    word-break: break-word;\n  }\n\n  .price {\n    font-size: 0.8em;\n  }\n"]);return N=function(){return n},n}function S(){var n=Object(m.a)(["\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n\n  to{\n    opacity: 1;\n    transform: translateX(0px);\n  }\n"]);return S=function(){return n},n}var R=Object(h.c)(S()),C=h.b.div(N(),R),F=function(n){var e=n.action,t=n.item;return Object(r.jsxs)(C,{onClick:function(){e&&e({})},children:[Object(r.jsx)("img",{src:t.url,alt:t.name}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:Object(r.jsx)("strong",{children:t.name})}),t.price&&Object(r.jsx)("p",{children:Object(r.jsx)("strong",{className:"price",children:y(t.price/100)})})]})]})},P=t(14),X=Object(a.createContext)({}),E=function(n){var e=n.children,t=Object(a.useState)(0),c=Object(j.a)(t,2),o=c[0],i=c[1],s=Object(a.useState)({isRecommended:!1,dough:{name:"",price:0},flavor:{name:"",price:0},size:{name:"",price:0}}),u=Object(j.a)(s,2),b=u[0],d=u[1],p=Object(a.useCallback)((function(n,e,t){d(Object(P.a)(Object(P.a)({},b),{},{isRecommended:n,flavor:t,dough:e}))}),[b]),l=Object(a.useCallback)((function(){d(Object(P.a)(Object(P.a)({},b),{},{isRecommended:!1}))}),[b]),x=Object(a.useCallback)((function(n){d(Object(P.a)(Object(P.a)({},b),{},{dough:n}))}),[b]),m=Object(a.useCallback)((function(n){d(Object(P.a)(Object(P.a)({},b),{},{flavor:n}))}),[b]),h=Object(a.useCallback)((function(n){d(Object(P.a)(Object(P.a)({},b),{},{size:n}))}),[b]),f=Object(a.useCallback)((function(n){i(n)}),[]);return Object(r.jsx)(X.Provider,{value:{order:b,points:o,isRecommended:!1,setIsRecommended:p,setDough:x,setFlavor:m,setSize:h,setIsNotRecommended:l,handlePoints:f},children:e})};function I(){var n=Object(a.useContext)(X);if(!n)throw new Error("useOrder must be within an OrderProvider");return n}var V=function(){var n=Object(a.useState)(!1),e=Object(j.a)(n,2),t=e[0],c=e[1],o=Object(u.f)(),i=I(),s=i.setIsRecommended,b=i.setIsNotRecommended,l=Object(a.useState)({}),m=Object(j.a)(l,2),h=m[0],f=m[1];Object(a.useEffect)((function(){v()}),[]);var v=function(){var n=Object(p.a)(d.a.mark((function n(){var e,t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),n.next=4,x.get("/recommendation");case 4:e=n.sent,t=e.data,r=t.option,f(r),c(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0),c(!1);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=Object(p.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s(!0,h.dough,h.flavor),o.push("/pizza-size");case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[!t&&Object(r.jsxs)(O,{className:"container",children:[Object(r.jsx)("h1",{children:"Bem Vindo(a) ao Pizza Planet"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"button",onClick:function(){b(),o.push("/pizza-dough")},children:"Montar a minha Pizza"})}),Object(r.jsx)("p",{className:"label",children:"ou"}),h.points&&Object(r.jsxs)("p",{className:"label",children:["Escolha a recomenda\xe7\xe3o do dia e ganhe",Object(r.jsx)("strong",{children:" ".concat(h.points," ")}),"pontos!"]}),h.banner&&Object(r.jsx)(F,{item:h.banner,action:g})]}),t&&Object(r.jsx)(k,{})]})},B=function(){var n=Object(u.f)(),e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],o=t[1],i=I().setDough,b=Object(a.useState)(!1),l=Object(j.a)(b,2),m=l[0],h=l[1];Object(a.useEffect)((function(){f()}),[]);var f=function(){var n=Object(p.a)(d.a.mark((function n(){var e,t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,x.get("/pizza-doughs");case 4:e=n.sent,t=e.data,r=t.doughs,o(r),h(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0),h(!1);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[!m&&Object(r.jsxs)("div",{className:"container align-center",children:[Object(r.jsx)("h1",{children:"Selecione a Massa:"}),c.map((function(e){return Object(r.jsx)(F,{item:e,action:function(){!function(e){var t=e.name,r=e.price;t&&r&&(i({name:t,price:r}),n.push("/pizza-flavor"))}(e)}},e.name)})),Object(r.jsx)(s.b,{to:"/",children:Object(r.jsx)("button",{className:"back-button",type:"button",children:"Voltar"})})]}),m&&Object(r.jsx)(k,{})]})},Y=function(){var n=Object(u.f)(),e=I().setFlavor,t=Object(a.useState)([]),c=Object(j.a)(t,2),o=c[0],i=c[1],b=Object(a.useState)(!1),l=Object(j.a)(b,2),m=l[0],h=l[1];Object(a.useEffect)((function(){f()}),[]);var f=function(){var n=Object(p.a)(d.a.mark((function n(){var e,t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,x.get("/pizza-flavors");case 4:e=n.sent,t=e.data,r=t.flavors,i(r),h(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0),h(!1);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[!m&&Object(r.jsxs)("div",{className:"container align-center",children:[Object(r.jsx)("h1",{children:"Selecione o Sabor:"}),o.map((function(t){return Object(r.jsx)(F,{item:t,action:function(){!function(t){var r=t.name,a=t.price;r&&a&&(e({name:r,price:a}),n.push("/pizza-size"))}(t)}},t.name)})),Object(r.jsx)(s.b,{to:"/pizza-dough",children:Object(r.jsx)("button",{className:"back-button",type:"button",children:"Voltar"})})]}),m&&Object(r.jsx)(k,{})]})},J=function(){var n=Object(u.f)(),e=I(),t=e.setSize,c=e.order,o=Object(a.useState)(!1),i=Object(j.a)(o,2),b=i[0],l=i[1],m=Object(a.useState)([]),h=Object(j.a)(m,2),f=h[0],O=h[1],v=c.isRecommended?"/":"/pizza-flavor";Object(a.useEffect)((function(){g()}),[]);var g=function(){var n=Object(p.a)(d.a.mark((function n(){var e,t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,x.get("/pizza-sizes");case 4:e=n.sent,t=e.data,r=t.sizes,O(r),l(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),l(!1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[!b&&Object(r.jsxs)("div",{className:"container align-center",children:[Object(r.jsx)("h1",{children:"Selecione o Tamanho:"}),f.map((function(e){return Object(r.jsx)(F,{item:e,action:function(){!function(e){var r=e.name,a=e.price;r&&a&&(t({name:r,price:a}),n.push("/order-summary"))}(e)}},e.name)})),Object(r.jsx)(s.b,{to:v,children:Object(r.jsx)("button",{className:"back-button",type:"button",children:"Voltar"})})]}),b&&Object(r.jsx)(k,{})]})};function M(){var n=Object(m.a)(["\n  text-align: center;\n  animation: "," 0.5s;\n\n  hr {\n    max-width: 400px;\n    border: 0;\n    border-top: 1px solid #ababab;\n    margin: auto;\n  }\n\n  .amount {\n    text-align: right;\n    max-width: 400px;\n    margin: 10px auto;\n    font-weight: bold;\n  }\n\n  button {\n    max-width: 400px;\n    width: 100%;\n    padding: 10px;\n    border-radius: 5px;\n    border: 0;\n    margin: 15px auto;\n    cursor: pointer;\n    background-color: var(--primary-color);\n    color: #fff;\n    font-size: 1em;\n    box-shadow: var(--box-shadow);\n    transition: 0.2s;\n\n    &:hover {\n      transform: translateY(1px);\n    }\n  }\n"]);return M=function(){return n},n}function D(){var n=Object(m.a)(["\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n\n  to{\n    opacity: 1;\n    transform: translateX(0px);\n  }\n"]);return D=function(){return n},n}var L=Object(h.c)(D()),T=h.b.div(M(),L);function U(){var n=Object(m.a)(["\n  display: flex;\n  max-width: 400px;\n  justify-content: space-between;\n  margin: 10px auto;\n"]);return U=function(){return n},n}var q=h.b.div(U()),A=function(n){var e=n.name,t=n.price;return Object(r.jsxs)(q,{children:[Object(r.jsx)("p",{children:e}),Object(r.jsx)("p",{children:y(t/100)})]})},G=function(){var n=Object(u.f)(),e=I(),t=e.order,c=e.handlePoints,o=Object(a.useState)(!1),i=Object(j.a)(o,2),b=i[0],l=i[1],m=t.dough.price+t.flavor.price+t.size.price,h=function(){var e=Object(p.a)(d.a.mark((function e(){var r,a,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={flavor:t.flavor,dough:t.dough,size:t.size,isRecommended:t.isRecommended},e.prev=1,l(!0),e.next=5,x.post("/checkout",r);case 5:a=e.sent,(o=a.data).order.points&&c(o.order.points),l(!1),n.push("/checkout"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),l(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(T,{className:"container",children:[Object(r.jsx)("h1",{children:"Resumo do Pedido:"}),Object(r.jsx)("hr",{}),Object(r.jsx)(A,{name:t.dough.name,price:t.dough.price}),Object(r.jsx)(A,{name:t.flavor.name,price:t.flavor.price}),Object(r.jsx)(A,{name:t.size.name,price:t.size.price}),Object(r.jsx)("hr",{}),Object(r.jsx)("p",{className:"amount",children:y(m/100)}),!b&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"button",onClick:h,children:"Finalizar Pedido"})}),Object(r.jsx)(s.b,{to:"/pizza-size",children:Object(r.jsx)("button",{className:"back-button",type:"button",children:"Voltar"})})]}),b&&Object(r.jsx)(k,{})]})};function H(){var n=Object(m.a)(["\n  .card {\n    animation: "," 0.5s;\n\n    .card-content {\n      padding: 25px;\n    }\n    box-shadow: var(--box-shadow);\n    max-width: 600px;\n    margin: auto;\n    border-radius: 5px;\n    img {\n      width: 70px;\n      margin-bottom: 15px;\n    }\n\n    .points {\n      width: 100%;\n      background: var(--primary-color);\n      padding: 5px;\n      border-bottom-right-radius: 5px;\n      border-bottom-left-radius: 5px;\n      h3 {\n        color: #fff;\n      }\n    }\n  }\n\n  span {\n    font-size: 1.5em;\n    color: #fff;\n  }\n"]);return H=function(){return n},n}function K(){var n=Object(m.a)(["\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n\n  to{\n    opacity: 1;\n    transform: translateX(0px);\n  }\n"]);return K=function(){return n},n}var Q=Object(h.c)(K()),W=h.b.div(H(),Q),Z=function(){var n=I().points;return Object(r.jsx)(W,{className:"container align-center",children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("img",{src:"https://icons-for-free.com/iconfiles/png/512/complete+done+green+success+valid+icon-1320183462969251652.png",alt:"success"}),Object(r.jsx)("h1",{children:"Sucesso!"}),Object(r.jsx)("h2",{children:"J\xe1 estamos preparando o seu pedido."}),Object(r.jsx)(s.b,{to:"/",children:Object(r.jsx)("button",{className:"success-button",type:"button",children:"Fazer Novo Pedido"})})]}),n>0&&Object(r.jsx)("div",{className:"points",children:Object(r.jsxs)("h3",{children:["Voc\xea ganhou",Object(r.jsx)("span",{children:" + ".concat(n," ")}),"pontos!"]})})]})})},$=function(){return Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",component:V}),Object(r.jsx)(u.a,{path:"/pizza-dough",component:B}),Object(r.jsx)(u.a,{path:"/pizza-flavor",component:Y}),Object(r.jsx)(u.a,{path:"/pizza-size",component:J}),Object(r.jsx)(u.a,{path:"/order-summary",component:G}),Object(r.jsx)(u.a,{path:"/checkout",component:Z})]})};function _(){var n=Object(m.a)(["\n\n  :root{\n    --box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    --primary-color: #1ba39c;\n    --danger-color: #d64541;\n  }\n\n  *{\n    padding: 0;\n    margin: 0;\n    font-family: Roboto, sans-serif;\n    outline: 0;\n    color: #1b1b1b;\n    box-sizing: border-box;\n  }\n\n  h1, h2, h3{\n    margin-bottom: 1em;\n    animation: "," 0.5s;\n  }\n\n  a{\n    color: #4183d7;\n  }\n\n  .container{\n    max-width: 900px;\n    margin: auto;\n  }\n\n  .align-center{\n    text-align: center;\n  }\n\n  button.back-button{\n    max-width: 400px;\n    width: 100%;\n    padding: 10px;\n    border-radius: 5px;\n    border: 0;\n    margin: 15px auto;\n    cursor: pointer;\n    border: 2px solid var(--danger-color);\n    background: transparent;\n    color: var(--danger-color);\n    font-size: 1em;\n    box-shadow: none;\n    transition: 0.2s;\n\n    &:hover {\n      transform: translateY(1px);\n    }\n  }\n  button.success-button{\n    max-width: 400px;\n    width: 100%;\n    padding: 10px;\n    border-radius: 5px;\n    border: 0;\n    margin: 15px auto;\n    cursor: pointer;\n    border: 2px solid var(--primary-color);\n    background: transparent;\n    color: var(--primary-color);\n    font-size: 1em;\n    box-shadow: none;\n    transition: 0.2s;\n\n    &:hover {\n      transform: translateY(1px);\n    }\n  }\n\n  #root{\n    padding: 60px 15px;\n  }\n\n"]);return _=function(){return n},n}function nn(){var n=Object(m.a)(["\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n\n  to{\n    opacity: 1;\n    transform: translateX(0px);\n  }\n"]);return nn=function(){return n},n}var en=Object(h.c)(nn()),tn=Object(h.a)(_(),en),rn=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(E,{children:Object(r.jsxs)(s.a,{basename:"",children:[Object(r.jsx)($,{}),Object(r.jsx)(tn,{})]})})})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(rn,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.8598dcb6.chunk.js.map