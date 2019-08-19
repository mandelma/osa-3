(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(13),u=t.n(o),c=t(14),l=t(2),i=t(3),f=t.n(i),m="/api/persons",s={getAll:function(){return f.a.get(m).then(function(e){return e.data})},create:function(e){return f.a.post(m,e).then(function(e){return e.data}).catch(function(e){return e.response.data})},update:function(e,n){return f.a.put("".concat(m,"/").concat(e),n).then(function(e){return e.data})},delPyynto:function(e){return f.a.delete("".concat(m,"/").concat(e),{method:"delete"}).then(function(e){return e.data})}},d=function(e){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:e.addPerson},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:e.newName,onChange:e.nameHandler}),a.a.createElement("br",null),"number: ",a.a.createElement("input",{value:e.newNumber,onChange:e.numberHandler})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))},b=function(e){return a.a.createElement("div",null,"filter shown with ",a.a.createElement("input",{onChange:e.onChange}))},h=function(e){return a.a.createElement("div",null,e.showPersons)};t(37);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var g=function(e){return a.a.createElement("div",null,a.a.createElement("li",null,e.note.name," ",e.note.number,a.a.createElement("button",{onClick:e.del},"Delete")))},E=function(e){return null===e.errMessage?null:a.a.createElement("div",{className:"error"},e.errMessage)},v=function(e){return null===e.message?null:a.a.createElement("div",{className:"message"},e.message)};var O=function(e){var n=Object(r.useState)([]),t=Object(l.a)(n,2),o=t[0],u=t[1],i=Object(r.useState)(""),f=Object(l.a)(i,2),m=f[0],O=f[1],w=Object(r.useState)(""),j=Object(l.a)(w,2),y=j[0],P=j[1],k=Object(r.useState)(""),S=Object(l.a)(k,2),C=S[0],D=S[1],N=Object(r.useState)(null),H=Object(l.a)(N,2),x=H[0],M=H[1],T=Object(r.useState)(null),A=Object(l.a)(T,2),J=A[0],L=A[1];Object(r.useEffect)(function(){s.getAll().then(function(e){u(e)})},[]);var B=function(e,n){window.confirm("Delete ".concat(n," ?"))&&s.delPyynto(e).then(function(){u(o.filter(function(n){return n.id!==e})),null===J&&(M("".concat(n," is deleted, from phonebook")),setTimeout(function(){M(null)},3e3))}).catch(function(t){L("info of ".concat(n," is already removed from server")),setTimeout(function(){L(null)},3e3),u(o.filter(function(n){return n.id!==e}))})},I=function(){var e={name:m,number:y};s.create(e).then(function(e){O(""),P(""),y.length<8?(W("Liiga l\xfchike number",L),u(o.filter(function(e){return e.name!==m}))):(W("".concat(m," is added to phonebook"),M),u(o.concat(e)))}).catch(function(e){console.log("Error 406: ",e.message.indexOf("404")),console.log("Error 500: ",e.message.indexOf("500")),W("information of ".concat(m," is already removed from server"),L),u(o.filter(function(e){return e.name!==m}))})},K=0;o.forEach(function(e){e.name===m&&(K=e.id)});var U=function(){var e=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(t,!0).forEach(function(n){Object(c.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},o.find(function(e){return e.id===K}),{number:y});s.update(K,e).then(function(e){u(o.map(function(n){return n.id!==K?n:e})),y.length>=8?W("Kontakt on muudetud",M):(W("Uus number on liiga l\xfchike!",L),u(o.filter(function(n){return n.number.length<8?n:e}))),O(""),P("")}).catch(function(e){W("information of ".concat(m," is already removed from server"),L),u(o.filter(function(e){return e.id!==K}))})},W=function(e,n){n(e),setTimeout(function(){n(null)},5e3)};return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(E,{errMessage:J}),a.a.createElement(v,{message:x}),a.a.createElement("br",null),a.a.createElement(b,{onChange:function(e){return D(e.target.value)}}),a.a.createElement("h2",null,"add a new"),a.a.createElement(d,{addPerson:function(e){e.preventDefault(),function(e){for(var n=0;n<o.length;n++)if(o[n].name===e)return!0;return!1}(m)?U():I()},newName:m,newNumber:y,nameHandler:function(e){O(e.target.value)},numberHandler:function(e){P(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(h,{showPersons:C.length>0?o.filter(function(e){return e.name.toLowerCase().startsWith(C)}).map(function(e){return a.a.createElement(g,{key:e.id,note:e,del:function(){return B(e.id,e.name)}})}):o.map(function(e){return a.a.createElement(g,{key:e.id,note:e,del:function(){return B(e.id,e.name)}})})}))};u.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c665cb6b.chunk.js.map