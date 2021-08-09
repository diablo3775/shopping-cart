(this["webpackJsonpcontext-with-reducer"]=this["webpackJsonpcontext-with-reducer"]||[]).push([[0],{1568:function(e,t,c){},1580:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(22),i=c.n(a),s=(c(77),c(78),c(1612)),j=c(1602),o=c(1603),l=c(1604),d=c(66),b=c(24),u=c(1609),O=c(33),h=c(34),p=c(23),x=c(21),y=c.n(x),m=c(16),f=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(m.a)(Object(m.a)({},e),{},{cart:[].concat(Object(p.a)(e.cart),[Object(m.a)(Object(m.a)({},t.payload),{},{qty:1})])});case"REMOVE_FROM_CART":return Object(m.a)(Object(m.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case"CHANGE_CART_QTY":return Object(m.a)(Object(m.a)({},e),{},{cart:e.cart.filter((function(e){return e.id===t.payload.id?e.qty=t.payload.qty:e.qty}))});default:return e}},g=function(e,t){switch(t.type){case"SORT_BY_PRICE":return Object(m.a)(Object(m.a)({},e),{},{sort:t.payload});case"FILTER_BY_STOCK":return Object(m.a)(Object(m.a)({},e),{},{byStock:!e.byStock});case"FILTER_BY_DELIVERY":return Object(m.a)(Object(m.a)({},e),{},{byFastDelivery:!e.byFastDelivery});case"FILTER_BY_RATING":return Object(m.a)(Object(m.a)({},e),{},{byRating:t.payload});case"FILTER_BY_SEARCH":return Object(m.a)(Object(m.a)({},e),{},{searchQuery:t.payload});case"CLEAR_FILTERS":return{byStock:!1,byFastDelivery:!1,byRating:0};default:return e}},v=c(3),R=Object(n.createContext)();y.a.seed(99);var C=function(){return Object(n.useContext)(R)},_=function(e){var t=e.children,c=Object(p.a)(Array(20)).map((function(){return{id:y.a.datatype.uuid(),name:y.a.commerce.productName(),price:y.a.commerce.price(),image:y.a.random.image(),inStock:y.a.random.arrayElement([0,3,5,6,7]),fastDelivery:y.a.datatype.boolean(),ratings:y.a.random.arrayElement([1,2,3,4,5])}})),r=Object(n.useReducer)(f,{products:c,cart:[]}),a=Object(h.a)(r,2),i=a[0],s=a[1],j=Object(n.useReducer)(g,{byStock:!1,byFastDelivery:!1,byRating:0,searchQuery:""}),o=Object(h.a)(j,2),l=o[0],d=o[1];return console.log(l),Object(v.jsx)(R.Provider,{value:{state:i,dispatch:s,productState:l,productDispatch:d},children:t})},T=(c(1568),function(){var e=C(),t=e.state.cart,c=e.dispatch;return Object(v.jsx)(s.a,{children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)("div",{className:"name",children:Object(v.jsx)(O.b,{to:"/",children:Object(v.jsx)("h5",{children:"\ud83d\uded2Shopping Cart"})})}),Object(v.jsx)("div",{className:"cart",children:Object(v.jsxs)(u.a,{children:[Object(v.jsxs)(u.a.Toggle,{children:[Object(v.jsx)(d.a,{color:"white",fontSize:"25px"}),Object(v.jsx)(o.a,{children:t.length})]}),Object(v.jsx)(u.a.Menu,{style:{minWidth:370},children:t.length>0?Object(v.jsxs)(v.Fragment,{children:[t.map((function(e){return Object(v.jsxs)("span",{className:"cartitem",children:[Object(v.jsx)("img",{src:e.image,className:"cartItemImg",alt:e.name}),Object(v.jsxs)("div",{className:"cartItemDetail",children:[Object(v.jsx)("span",{children:e.name}),Object(v.jsxs)("span",{children:["\u20b9 ",e.price.split(".")[0]]})]}),Object(v.jsx)(b.a,{fontSize:"20px",style:{cursor:"pointer"},onClick:function(){return c({type:"REMOVE_FROM_CART",payload:e})}})]},e.id)})),Object(v.jsx)(O.b,{to:"/cart",children:Object(v.jsx)(l.a,{variant:"outlined",color:"primary",style:{width:"95%",margin:"0 10px"},children:"Go To Cart"})})]}):Object(v.jsx)("span",{style:{padding:10},children:"Cart is Empty!"})})]})})]})})}),E=c(12),S=function(e){var t=e.rating,c=e.onClick,n=e.style;return Object(v.jsx)(v.Fragment,{children:Object(p.a)(Array(5)).map((function(e,r){return Object(v.jsx)("span",{onClick:function(){return c(r)},style:n,children:t>r?Object(v.jsx)(b.b,{fontSize:"15px"}):Object(v.jsx)(b.c,{fontSize:"15px"})},r)}))})},k=c(1613),A=c(1611),F=function(){var e=C(),t=e.productDispatch,c=e.productState,n=c.byStock,r=c.byFastDelivery,a=c.sort,i=c.byRating;return Object(v.jsxs)("div",{className:"filters",children:[Object(v.jsx)("span",{className:"title",children:"Filter Products"}),Object(v.jsx)("span",{children:Object(v.jsx)(k.a,{control:Object(v.jsx)(A.a,{name:"checkedA"}),label:"Ascending",name:"group1",onChange:function(){return t({type:"SORT_BY_PRICE",payload:"lowToHigh"})},checked:"lowToHigh"===a})}),Object(v.jsx)("span",{children:Object(v.jsx)(k.a,{control:Object(v.jsx)(A.a,{}),label:"Descending",name:"group1",onChange:function(){return t({type:"SORT_BY_PRICE",payload:"highToLow"})},checked:"highToLow"===a})}),Object(v.jsx)("span",{children:Object(v.jsx)(k.a,{control:Object(v.jsx)(A.a,{}),label:"Include out of stock",name:"group1",onChange:function(){return t({type:"FILTER_BY_STOCK"})},checked:n})}),Object(v.jsx)("span",{children:Object(v.jsx)(k.a,{control:Object(v.jsx)(A.a,{name:"checkedA"}),label:"Fast Delivery Only",name:"group1",onChange:function(){return t({type:"FILTER_BY_DELIVERY"})},checked:r})}),Object(v.jsxs)("span",{children:[Object(v.jsx)("label",{style:{paddingRight:10},children:"Rating: "}),Object(v.jsx)(S,{rating:i,onClick:function(e){return t({type:"FILTER_BY_RATING",payload:e+1})},style:{cursor:"pointer"}})]}),Object(v.jsx)(l.a,{variant:"outlined",color:"inherit",onClick:function(){return t({type:"CLEAR_FILTERS"})},children:"Clear Filters"})]})},D=c(1605),I=function(e){var t=e.prod,c=C(),n=c.state.cart,r=c.dispatch;return Object(v.jsx)("div",{className:"products",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(D.a,{component:"img",variant:"top",image:t.image,alt:t.name}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:t.name}),Object(v.jsxs)("div",{style:{paddingBottom:10},children:[Object(v.jsxs)("span",{children:["\u20b9 ",t.price.split(".")[0]]}),t.fastDelivery?Object(v.jsx)("div",{children:"Fast Delivery"}):Object(v.jsx)("div",{children:"4 days delivery"}),Object(v.jsx)(S,{rating:t.ratings})]}),n.some((function(e){return e.id===t.id}))?Object(v.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){return r({type:"REMOVE_FROM_CART",payload:t})},children:"Remove from Cart"}):Object(v.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){return r({type:"ADD_TO_CART",payload:t})},disabled:!t.inStock,children:t.inStock?"Add to Cart":"Out of Stock"})]})]})})},N=function(){var e=C(),t=e.state.products,c=e.productState,n=c.sort,r=c.byStock,a=c.byFastDelivery,i=c.byRating,s=c.searchQuery;return Object(v.jsxs)("div",{className:"home",children:[Object(v.jsx)(F,{}),Object(v.jsx)("div",{className:"productContainer",children:function(){var e=t;return n&&(e=e.sort((function(e,t){return"lowToHigh"===n?e.price-t.price:t.price-e.price}))),r||(e=e.filter((function(e){return e.inStock}))),a&&(e=e.filter((function(e){return e.fastDelivery}))),i&&(e=e.filter((function(e){return e.ratings>=i}))),s&&(e=e.filter((function(e){return e.name.toLowerCase().includes(s)}))),e}().map((function(e){return Object(v.jsx)(I,{prod:e},e.id)}))})]})},L=c(1606),w=c(1607),Y=c(1608),B=c(1610),M=function(){var e=C(),t=e.state.cart,c=e.dispatch,r=Object(n.useState)(),a=Object(h.a)(r,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){s(t.reduce((function(e,t){return e+Number(t.price)*t.qty}),0))}),[t]),Object(v.jsxs)("div",{className:"home",children:[Object(v.jsx)("div",{className:"productContainer",children:Object(v.jsx)(L.a,{row:!0,children:t.map((function(e){return Object(v.jsx)("div",{children:Object(v.jsxs)(w.a,{container:!0,spacing:2,children:[Object(v.jsx)(w.a,{md:2,children:Object(v.jsx)(Y.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})}),Object(v.jsx)(w.a,{md:2,children:Object(v.jsx)("span",{children:e.name})}),Object(v.jsxs)(w.a,{md:2,children:["\u20b9 ",e.price]}),Object(v.jsx)(w.a,{md:2,children:Object(v.jsx)(S,{rating:e.ratings})}),Object(v.jsx)(w.a,{md:2,children:Object(v.jsx)(B.a.Control,{as:"select",value:e.qty,onChange:function(t){return c({type:"CHANGE_CART_QTY",payload:{id:e.id,qty:t.target.value}})},children:Object(p.a)(Array(e.inStock).keys()).map((function(e){return Object(v.jsx)("option",{children:e+1},e+1)}))})}),Object(v.jsx)(w.a,{md:2,children:Object(v.jsx)(l.a,{type:"button",variant:"light",onClick:function(){return c({type:"REMOVE_FROM_CART",payload:e})},children:Object(v.jsx)(b.a,{fontSize:"20px"})})})]})},e.id)}))})}),Object(v.jsxs)("div",{className:"filters summary",children:[Object(v.jsxs)("span",{className:"title",children:["Subtotal (",t.length,") items"]}),Object(v.jsxs)("span",{style:{fontWeight:700,fontSize:20},children:["Total: \u20b9 ",i]}),Object(v.jsx)(l.a,{color:"inherit",variant:"outlined",type:"button",disabled:0===t.length,children:"Proceed to Checkout"})]})]})};var q=function(){return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(T,{}),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(E.a,{path:"/",exact:!0,children:Object(v.jsx)(N,{})}),Object(v.jsx)(E.a,{path:"/cart",children:Object(v.jsx)(M,{})})]})]})};c(1579);i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(_,{children:Object(v.jsx)(q,{})})}),document.getElementById("root"))},77:function(e,t,c){},78:function(e,t,c){}},[[1580,1,2]]]);
//# sourceMappingURL=main.04fcf700.chunk.js.map