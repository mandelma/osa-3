(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=t(14),l=t(2),i=t(3),m=t.n(i),f="/api/persons",d={getAll:function(){return m.a.get(f).then(function(e){return e.data})},create:function(e){return m.a.post(f,e).then(function(e){return e.data}).catch(function(e){return e.response.data})},update:function(e,n){return m.a.put("".concat(f,"/").concat(e),n).then(function(e){return e.data})},delPyynto:function(e){return m.a.delete("".concat(f,"/").concat(e),{method:"delete"}).then(function(e){return e.data})}},s=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.nameHandler}),r.a.createElement("br",null),"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.numberHandler})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},b=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{onChange:e.onChange}))},h=function(e){return r.a.createElement("div",null,e.showPersons)},E=(t(38),function(e){return r.a.createElement("div",null,r.a.createElement("li",null,e.note.name," ",e.note.number,r.a.createElement("button",{onClick:e.del},"Delete")))}),v=function(e){return null===e.errMessage?null:r.a.createElement("div",{className:"error"},e.errMessage)},p=function(e){return null===e.message?null:r.a.createElement("div",{className:"message"},e.message)};var g=function(e){var n=Object(a.useState)([]),t=Object(l.a)(n,2),u=t[0],o=t[1],i=Object(a.useState)(""),m=Object(l.a)(i,2),f=m[0],g=m[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),O=j[0],y=j[1],k=Object(a.useState)(""),C=Object(l.a)(k,2),N=C[0],P=C[1],S=Object(a.useState)(null),T=Object(l.a)(S,2),H=T[0],D=T[1],M=Object(a.useState)(null),A=Object(l.a)(M,2),I=A[0],J=A[1];Object(a.useEffect)(function(){d.getAll().then(function(e){o(e)})},[]);var x=function(e,n){window.confirm("Delete ".concat(n," ?"))&&d.delPyynto(e).then(function(t){o(u.filter(function(n){return n.id!==e})),console.log("Id on "+e),null===I&&(D("".concat(n," is deleted, from phonebook")),setTimeout(function(){D(null)},3e3))}).catch(function(t){J("info of ".concat(n," is already removed from server")),setTimeout(function(){J(null)},3e3),o(u.filter(function(n){return n.id!==e}))})};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{errMessage:I}),r.a.createElement(p,{message:H}),r.a.createElement("br",null),r.a.createElement(b,{onChange:function(e){return P(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(s,{addPerson:function(e){e.preventDefault();var n={name:f,number:O},t=0;if(u.forEach(function(e){e.name===f&&(t=e.id)}),function(e){for(var n=0;n<u.length;n++)if(u[n].name===e)return!0;return!1}(f)){alert("".concat(f," is already added to phonebook. Replace the old number with a new one?"));var a=u.find(function(e){return e.id===t}),r=Object(c.a)({},a,{number:O});d.update(t,r).then(function(e){o(u.map(function(n){return n.id!==t?n:e})),null===I&&(D("".concat(f," new number is set")),setTimeout(function(){D(null)},3e3)),g(""),y("")}).catch(function(e){J("information of ".concat(f," is already removed from server")),setTimeout(function(){J(null)},3e3),o(u.filter(function(e){return e.id!==t}))}),g(""),y("")}else d.create(n).then(function(e){o(u.concat(e)),y(""),f.length>=3?(D("".concat(f," is added to phonebook")),setTimeout(function(){D(null)},5e3)):(J(d.create(n)),setTimeout(function(){J(null)},3e3)),g(""),y("")})},newName:f,newNumber:O,nameHandler:function(e){g(e.target.value)},numberHandler:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(h,{showPersons:N.length>0?u.filter(function(e){return e.name.toLowerCase().startsWith(N)}).map(function(e){return r.a.createElement(E,{key:e.id,note:e,del:function(){return x(e.id,e.name)}})}):u.map(function(e){return r.a.createElement(E,{key:void 0!==e.id?e.name:null,note:e,del:function(){return x(e.id,e.name)}})})}))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c9fd3012.chunk.js.map