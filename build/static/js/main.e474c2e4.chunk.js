(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(13),u=t.n(o),c=t(14),l=t(2),i=t(15),m=t(3),f=t.n(m),s="/api/persons",d={getAll:function(){return f.a.get(s).then(function(e){return e.data})},create:function(e){return f.a.post(s,e).then(function(e){return e.data}).catch(function(e){return e.response.data})},update:function(e,n){return f.a.put("".concat(s,"/").concat(e),n).then(function(e){return e.data})},delPyynto:function(e){return f.a.delete("".concat(s,"/").concat(e),{method:"delete"}).then(function(e){return e.data})}},b=function(e){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:e.addPerson},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:e.newName,onChange:e.nameHandler}),a.a.createElement("br",null),"number: ",a.a.createElement("input",{value:e.newNumber,onChange:e.numberHandler})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))},h=function(e){return a.a.createElement("div",null,"filter shown with ",a.a.createElement("input",{onChange:e.onChange}))},p=function(e){return a.a.createElement("div",null,e.showPersons)};t(38);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var E=function(e){return a.a.createElement("div",null,a.a.createElement("li",null,e.note.name," ",e.note.number,a.a.createElement("button",{onClick:e.del},"Delete")))},v=function(e){return null===e.errMessage?null:a.a.createElement("div",{className:"error"},e.errMessage)},O=function(e){return null===e.message?null:a.a.createElement("div",{className:"message"},e.message)};var w=function(e){var n=Object(r.useState)([]),t=Object(l.a)(n,2),o=t[0],u=t[1],m=Object(r.useState)(""),f=Object(l.a)(m,2),s=f[0],w=f[1],j=Object(r.useState)(""),y=Object(l.a)(j,2),P=y[0],k=y[1],S=Object(r.useState)(""),N=Object(l.a)(S,2),C=N[0],D=N[1],T=Object(r.useState)(null),H=Object(l.a)(T,2),M=H[0],A=H[1],J=Object(r.useState)(null),x=Object(l.a)(J,2),B=x[0],I=x[1];Object(r.useEffect)(function(){d.getAll().then(function(e){u(e)})},[]);var L=function(e,n){window.confirm("Delete ".concat(n," ?"))&&d.delPyynto(e).then(function(){u(o.filter(function(n){return n.id!==e})),null===B&&(A("".concat(n," is deleted, from phonebook")),setTimeout(function(){A(null)},3e3))}).catch(function(t){I("info of ".concat(n," is already removed from server")),setTimeout(function(){I(null)},3e3),u(o.filter(function(n){return n.id!==e}))})},R=function(e,n){n(e),setTimeout(function(){n(null)},5e3)};return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(v,{errMessage:B}),a.a.createElement(O,{message:M}),a.a.createElement("br",null),a.a.createElement(h,{onChange:function(e){return D(e.target.value)}}),a.a.createElement("h2",null,"add a new"),a.a.createElement(b,{addPerson:function(e){e.preventDefault();var n={name:s,number:P},t=0;if(o.forEach(function(e){e.name===s&&(t=e.id)}),function(e){for(var n=0;n<o.length;n++)if(o[n].name===e)return!0;return!1}(s)){alert("".concat(s," is already added to phonebook. Replace the old number with a new one?"));var r=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(t,!0).forEach(function(n){Object(c.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},o.find(function(e){return e.id===t}),{number:P});d.update(t,r).then(function(e){u(o.map(function(n){return n.id!==t?n:e})),Object(i.a)("mess"),R("Nimi on muudetud",A),w(""),k(""),w(""),k("")}).catch(function(e){I("Error: "+e.message),console.log(e.message.toString()),setTimeout(function(){I(null)},3e3),u(o.filter(function(e){return e.id!==t}))}),w(""),k("")}else d.create(n).then(function(e){s.length>=3&&P.length>=8?(u(o.concat(e)),R("".concat(s," is added to phonebook"),A)):(s.length<3||P.length<8)&&R("Error: name or number length is nor correct.Name should be at least 3 char and number at least 8"+I)}).catch(function(e){I("information of ".concat(s," is already removed from server")),setTimeout(function(){I(null)},3e3),u(o.filter(function(e){return e.id!==t}))}),w(""),k("")},newName:s,newNumber:P,nameHandler:function(e){w(e.target.value)},numberHandler:function(e){k(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(p,{showPersons:C.length>0?o.filter(function(e){return e.name.toLowerCase().startsWith(C)}).map(function(e){return a.a.createElement(E,{key:e.id,note:e,del:function(){return L(e.id,e.name)}})}):o.map(function(e){return a.a.createElement(E,{key:e.id,note:e,del:function(){return L(e.id,e.name)}})})}))};u.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e474c2e4.chunk.js.map