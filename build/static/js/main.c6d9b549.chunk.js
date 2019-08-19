(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(13),c=t.n(u),o=t(14),l=t(2),i=t(3),m=t.n(i),f="/api/persons",s={getAll:function(){return m.a.get(f).then(function(e){return e.data})},create:function(e){return m.a.post(f,e).then(function(e){return e.data}).catch(function(e){return e.response.data})},update:function(e,n){return m.a.put("".concat(f,"/").concat(e),n).then(function(e){return e.data})},delPyynto:function(e){return m.a.delete("".concat(f,"/").concat(e),{method:"delete"}).then(function(e){return e.data})}},d=function(e){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:e.addPerson},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:e.newName,onChange:e.nameHandler}),a.a.createElement("br",null),"number: ",a.a.createElement("input",{value:e.newNumber,onChange:e.numberHandler})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))},b=function(e){return a.a.createElement("div",null,"filter shown with ",a.a.createElement("input",{onChange:e.onChange}))},h=function(e){return a.a.createElement("div",null,e.showPersons)};t(37);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var E=function(e){return a.a.createElement("div",null,a.a.createElement("li",null,e.note.name," ",e.note.number,a.a.createElement("button",{onClick:e.del},"Delete")))},v=function(e){return null===e.errMessage?null:a.a.createElement("div",{className:"error"},e.errMessage)},g=function(e){return null===e.message?null:a.a.createElement("div",{className:"message"},e.message)};var O=function(e){var n=Object(r.useState)([]),t=Object(l.a)(n,2),u=t[0],c=t[1],i=Object(r.useState)(""),m=Object(l.a)(i,2),f=m[0],O=m[1],w=Object(r.useState)(""),j=Object(l.a)(w,2),y=j[0],P=j[1],k=Object(r.useState)(""),S=Object(l.a)(k,2),N=S[0],C=S[1],D=Object(r.useState)(null),T=Object(l.a)(D,2),H=T[0],M=T[1],A=Object(r.useState)(null),J=Object(l.a)(A,2),x=J[0],B=J[1];Object(r.useEffect)(function(){s.getAll().then(function(e){c(e)})},[]);var I=function(e,n){window.confirm("Delete ".concat(n," ?"))&&s.delPyynto(e).then(function(){c(u.filter(function(n){return n.id!==e})),null===x&&(M("".concat(n," is deleted, from phonebook")),setTimeout(function(){M(null)},3e3))}).catch(function(t){B("info of ".concat(n," is already removed from server")),setTimeout(function(){B(null)},3e3),c(u.filter(function(n){return n.id!==e}))})},L=0;return u.forEach(function(e){e.name===f&&(L=e.id)}),a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(v,{errMessage:x}),a.a.createElement(g,{message:H}),a.a.createElement("br",null),a.a.createElement(b,{onChange:function(e){return C(e.target.value)}}),a.a.createElement("h2",null,"add a new"),a.a.createElement(d,{addPerson:function(e){e.preventDefault();var n={name:f,number:y};if(function(e){for(var n=0;n<u.length;n++)if(u[n].name===e)return!0;return!1}(f)){var t=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(t,!0).forEach(function(n){Object(o.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},u.find(function(e){return e.id===L}),{number:y});s.update(L,t).then(function(e){y.length>=8?(M("".concat(f," new number is set")),setTimeout(function(){M(null)},3e3),c(u.map(function(n){return n.id!==L?n:e}))):(B("Error: name or number length is nor correct.Name should be at least 3 char and number at least 8"),setTimeout(function(){B(null)},3e3),c(u.filter(function(e){return e}))),O(""),P("")}),O(""),P("")}else s.create(n).then(function(e){c(u.concat(e)),P(""),M("".concat(f," is added to phonebook")),setTimeout(function(){M(null)},5e3),O(""),P("")}).catch(function(){B("information of ".concat(f," is already removed from server")),setTimeout(function(){B(null)},3e3),c(u.filter(function(e){return e.id!==L}))})},newName:f,newNumber:y,nameHandler:function(e){O(e.target.value)},numberHandler:function(e){P(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(h,{showPersons:N.length>0?u.filter(function(e){return e.name.toLowerCase().startsWith(N)}).map(function(e){return a.a.createElement(E,{key:e.id,note:e,del:function(){return I(e.id,e.name)}})}):u.map(function(e){return a.a.createElement(E,{key:e.id,note:e,del:function(){return I(e.id,e.name)}})})}))};c.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c6d9b549.chunk.js.map