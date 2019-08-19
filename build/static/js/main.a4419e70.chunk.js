(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=t(14),l=t(2),i=t(3),m=t.n(i),f="/api/persons",d={getAll:function(){return m.a.get(f).then(function(e){return e.data})},create:function(e){return m.a.post(f,e).then(function(e){return e.data}).catch(function(e){console.log(e.response.data)})},update:function(e,n){return m.a.put("".concat(f,"/").concat(e),n).then(function(e){return e.data})},delPyynto:function(e){return m.a.delete("".concat(f,"/").concat(e),{method:"delete"}).then(function(e){return e.data})}},s=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.nameHandler}),r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.numberHandler})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},b=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{onChange:e.onChange}))},h=function(e){return r.a.createElement("div",null,e.showPersons)},E=(t(38),function(e){return r.a.createElement("div",null,r.a.createElement("li",null,e.note.name," ",e.note.number,r.a.createElement("button",{onClick:e.del},"Delete")))}),v=function(e){return null===e.errMessage?null:r.a.createElement("div",{className:"error"},e.errMessage)},p=function(e){return null===e.message?null:r.a.createElement("div",{className:"message"},e.message)};var g=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),m=i[0],f=i[1],g=Object(a.useState)(""),w=Object(l.a)(g,2),j=w[0],O=w[1],y=Object(a.useState)(""),k=Object(l.a)(y,2),N=k[0],C=k[1],P=Object(a.useState)(null),S=Object(l.a)(P,2),T=S[0],H=S[1],D=Object(a.useState)(null),M=Object(l.a)(D,2),A=M[0],I=M[1];Object(a.useEffect)(function(){d.getAll().then(function(e){u(e)})},[]);var J=function(){return t.map(function(e){return r.a.createElement(E,{key:void 0!==e.id?e.name:null,note:e,del:function(){return L(e.id,e.name)}})})};console.log("Lue t\xfc\xfcp on: ","function");var L=function(e,n){window.confirm("Delete ".concat(n," ?"))&&d.delPyynto(e).then(function(a){u(t.filter(function(n){return n.id!==e})),console.log("Id on "+e),null===A&&(H("".concat(n," is deleted, from phonebook")),setTimeout(function(){H(null)},3e3))}).catch(function(a){I("info of ".concat(n," is already removed from server")),setTimeout(function(){I(null)},3e3),u(t.filter(function(n){return n.id!==e}))})};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{errMessage:A}),r.a.createElement(p,{message:T}),r.a.createElement("br",null),r.a.createElement(b,{onChange:function(e){return C(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(s,{addPerson:function(e){e.preventDefault();var n={name:m,number:j}.catch(function(e){I("Nimi on l\xfchem kui lubatud!!!"),setTimeout(function(){I(null)},3e3)}),a=0;if(t.forEach(function(e){e.name===m&&(a=e.id)}),function(e){for(var n=0;n<t.length;n++)if(t[n].name===e)return!0;return!1}(m)){alert("".concat(m," is already added to phonebook. Replace the old number with a new one?"));var r=t.find(function(e){return e.id===a}),o=Object(c.a)({},r,{number:j});d.update(a,o).then(function(e){u(t.map(function(n){return n.id!==a?n:e})),null===A&&(H("".concat(m," new number is set")),setTimeout(function(){H(null)},3e3)),f(""),O("")}).catch(function(e){I("information of ".concat(m," is already removed from server")),setTimeout(function(){I(null)},3e3),u(t.filter(function(e){return e.id!==a}))}),f(""),O("")}else d.create(n).then(function(e){u(t.concat(e)),O(""),H("".concat(m," is added to phonebook")),setTimeout(function(){H(null)},5e3),f(""),O("")})},newName:m,newNumber:j,nameHandler:function(e){f(e.target.value)},numberHandler:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(h,{showPersons:N.length>0?t.filter(function(e){return e.name.toLowerCase().startsWith(N)}).map(function(e){return r.a.createElement(E,{key:e.id,note:e,del:function(){return L(e.id,e.name)}})}):J()}))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a4419e70.chunk.js.map