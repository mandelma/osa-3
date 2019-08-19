(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(13),u=t.n(o),c=t(14),l=t(2),i=t(3),m=t.n(i),s="/api/persons",f={getAll:function(){return m.a.get(s).then(function(e){return e.data})},create:function(e){return m.a.post(s,e).then(function(e){return e.data}).catch(function(e){return e.response.data})},update:function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then(function(e){return e.data})},delPyynto:function(e){return m.a.delete("".concat(s,"/").concat(e),{method:"delete"}).then(function(e){return e.data})}},d=function(e){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:e.addPerson},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:e.newName,onChange:e.nameHandler}),a.a.createElement("br",null),"number: ",a.a.createElement("input",{value:e.newNumber,onChange:e.numberHandler})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))},b=function(e){return a.a.createElement("div",null,"filter shown with ",a.a.createElement("input",{onChange:e.onChange}))},h=function(e){return a.a.createElement("div",null,e.showPersons)};t(37);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var E=function(e){return a.a.createElement("div",null,a.a.createElement("li",null,e.note.name," ",e.note.number,a.a.createElement("button",{onClick:e.del},"Delete")))},g=function(e){return null===e.errMessage?null:a.a.createElement("div",{className:"error"},e.errMessage)},v=function(e){return null===e.message?null:a.a.createElement("div",{className:"message"},e.message)};var O=function(e){var n=Object(r.useState)([]),t=Object(l.a)(n,2),o=t[0],u=t[1],i=Object(r.useState)(""),m=Object(l.a)(i,2),s=m[0],O=m[1],w=Object(r.useState)(""),j=Object(l.a)(w,2),y=j[0],P=j[1],k=Object(r.useState)(""),S=Object(l.a)(k,2),N=S[0],C=S[1],D=Object(r.useState)(null),T=Object(l.a)(D,2),H=T[0],x=T[1],M=Object(r.useState)(null),A=Object(l.a)(M,2),J=A[0],B=A[1];Object(r.useEffect)(function(){f.getAll().then(function(e){u(e)})},[]);var I=function(e,n){window.confirm("Delete ".concat(n," ?"))&&f.delPyynto(e).then(function(){u(o.filter(function(n){return n.id!==e})),null===J&&(x("".concat(n," is deleted, from phonebook")),setTimeout(function(){x(null)},3e3))}).catch(function(t){B("info of ".concat(n," is already removed from server")),setTimeout(function(){B(null)},3e3),u(o.filter(function(n){return n.id!==e}))})},L=function(e,n){n(e),setTimeout(function(){n(null)},5e3)};return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(g,{errMessage:J}),a.a.createElement(v,{message:H}),a.a.createElement("br",null),a.a.createElement(b,{onChange:function(e){return C(e.target.value)}}),a.a.createElement("h2",null,"add a new"),a.a.createElement(d,{addPerson:function(e){e.preventDefault();var n={name:s,number:y},t=0;if(o.forEach(function(e){e.name===s&&(t=e.id)}),function(e){for(var n=0;n<o.length;n++)if(o[n].name===e)return!0;return!1}(s)){alert("".concat(s," is already added to phonebook. Replace the old number with a new one?"));var r=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(t,!0).forEach(function(n){Object(c.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},o.find(function(e){return e.id===t}),{number:y});f.update(t,r).then(function(e){u(o.map(function(n){return n.id!==t?n:e})),L("Nimi on muudetud",x),O(""),P(""),O(""),P("")}).catch(function(e){B("Error: "+e.message),console.log(e.message.toString()),setTimeout(function(){B(null)},3e3),u(o.filter(function(e){return e.id!==t}))}),O(""),P("")}else f.create(n).then(function(e){L("Error: name or number length is nor correct.Name should be at least 3 char and number at least 8"+B),u(o.concat(e)),L("".concat(s," is added to phonebook"),x)}).catch(function(e){console.log("Error 404: ",e.message.indexOf("404")),console.log("Error 500: ",e.message.indexOf("500")),B("information of ".concat(s," is already removed from server")),setTimeout(function(){B(null)},3e3),u(o.filter(function(e){return e.id!==t}))}),O(""),P("")},newName:s,newNumber:y,nameHandler:function(e){O(e.target.value)},numberHandler:function(e){P(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(h,{showPersons:N.length>0?o.filter(function(e){return e.name.toLowerCase().startsWith(N)}).map(function(e){return a.a.createElement(E,{key:e.id,note:e,del:function(){return I(e.id,e.name)}})}):o.map(function(e){return a.a.createElement(E,{key:e.id,note:e,del:function(){return I(e.id,e.name)}})})}))};u.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9506265f.chunk.js.map