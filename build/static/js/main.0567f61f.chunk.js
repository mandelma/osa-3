(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(14),c=t.n(o),u=t(15),l=t(2),i=t(4),f=t(3),m=t.n(f),s="/api/persons",d={getAll:function(){return m.a.get(s).then(function(e){return e.data})},create:function(e){return m.a.post(s,e).then(function(e){return e.data}).catch(function(e){return e.response.data})},update:function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then(function(e){return e.data})},delPyynto:function(e){return m.a.delete("".concat(s,"/").concat(e),{method:"delete"}).then(function(e){return e.data})}},b=function(e){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:e.addPerson},a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:e.newName,onChange:e.nameHandler}),a.a.createElement("br",null),"number: ",a.a.createElement("input",{value:e.newNumber,onChange:e.numberHandler})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add"))))},h=function(e){return a.a.createElement("div",null,"filter shown with ",a.a.createElement("input",{onChange:e.onChange}))},p=function(e){return a.a.createElement("div",null,e.showPersons)};t(38);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var v=function(e){return a.a.createElement("div",null,a.a.createElement("li",null,e.note.name," ",e.note.number,a.a.createElement("button",{onClick:e.del},"Delete")))},O=function(e){return null===e.errMessage?null:a.a.createElement("div",{className:"error"},e.errMessage)},g=function(e){return null===e.message?null:a.a.createElement("div",{className:"message"},e.message)};var w=function(e){var n=Object(r.useState)([]),t=Object(l.a)(n,2),o=t[0],c=t[1],f=Object(r.useState)(""),m=Object(l.a)(f,2),s=m[0],w=m[1],j=Object(r.useState)(""),y=Object(l.a)(j,2),P=y[0],k=y[1],S=Object(r.useState)(""),C=Object(l.a)(S,2),D=C[0],N=C[1],T=Object(r.useState)(null),H=Object(l.a)(T,2),M=H[0],A=H[1],J=Object(r.useState)(null),x=Object(l.a)(J,2),B=x[0],I=x[1];Object(r.useEffect)(function(){d.getAll().then(function(e){c(e)})},[]);var L=function(e,n){window.confirm("Delete ".concat(n," ?"))&&d.delPyynto(e).then(function(){c(o.filter(function(n){return n.id!==e})),null===B&&(A("".concat(n," is deleted, from phonebook")),setTimeout(function(){A(null)},3e3))}).catch(function(t){I("info of ".concat(n," is already removed from server")),setTimeout(function(){I(null)},3e3),c(o.filter(function(n){return n.id!==e}))})},R=!1;return R&&(A("".concat(s," new number is set")),setTimeout(function(){A(null)},3e3),Object(i.a)("mess"),R=!1),a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(O,{errMessage:B}),a.a.createElement(g,{message:M}),a.a.createElement("br",null),a.a.createElement(h,{onChange:function(e){return N(e.target.value)}}),a.a.createElement("h2",null,"add a new"),a.a.createElement(b,{addPerson:function(e){e.preventDefault();var n={name:s,number:P},t=0;if(o.forEach(function(e){e.name===s&&(t=e.id)}),function(e){for(var n=0;n<o.length;n++)if(o[n].name===e)return!0;return!1}(s)){alert("".concat(s," is already added to phonebook. Replace the old number with a new one?"));var r=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(t,!0).forEach(function(n){Object(u.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},o.find(function(e){return e.id===t}),{number:P});P.length>=8&&(d.update(t,r).then(function(e){c(o.map(function(n){return n.id!==t?n:e})),Object(i.a)("mess"),R=!0,w(""),k("")}).catch(function(e){I("information of ".concat(s," is already removed from server")),setTimeout(function(){I(null)},3e3),c(o.filter(function(e){return e.id!==t}))}),w(""),k(""))}else d.create(n).then(function(e){c(o.concat(e)),k(""),A("".concat(s," is added to phonebook")),setTimeout(function(){A(null)},5e3)}).catch(function(e){I("information of ".concat(s," is already removed from server")),setTimeout(function(){I(null)},3e3),c(o.filter(function(e){return e.id!==t}))}),w(""),k("")},newName:s,newNumber:P,nameHandler:function(e){w(e.target.value)},numberHandler:function(e){k(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(p,{showPersons:D.length>0?o.filter(function(e){return e.name.toLowerCase().startsWith(D)}).map(function(e){return a.a.createElement(v,{key:e.id,note:e,del:function(){return L(e.id,e.name)}})}):o.map(function(e){return a.a.createElement(v,{key:e.id,note:e,del:function(){return L(e.id,e.name)}})})}))};c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0567f61f.chunk.js.map