(window["webpackJsonpking-of-pong"]=window["webpackJsonpking-of-pong"]||[]).push([[0],{20:function(e,t,a){e.exports=a(40)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(12),r=a.n(l),i=(a(25),a(13)),s=a(14),o=a(18),m=a(15),u=a(19),d=(a(26),a(2));a(27),a(28);var f=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),i=Object(d.a)(r,2),s=i[0],o=i[1],m=Object(n.useState)(""),u=Object(d.a)(m,2),f=u[0],E=u[1],h=s.length>0&&a.length>0&&f.length>0;return console.log(h),c.a.createElement("form",{action:"https://formspree.io/william.av.holmberg@gmail.com",method:"POST",acceptCharset:"UTF-8"},c.a.createElement("input",{onChange:function(e){return l(e.target.value)},type:"text",name:"name",placeholder:"Name"}),c.a.createElement("input",{onChange:function(e){return o(e.target.value)},type:"email",name:"email",placeholder:"Email"}),c.a.createElement("input",{onChange:function(e){return E(e.target.value)},type:"text",name:"phone",placeholder:"Phone"}),c.a.createElement("input",{onChange:function(e){return l(e.target.value)},type:"hidden",name:"_gotcha"}),c.a.createElement("button",{disabled:!h,className:h?"button enabled":"disabled"}," Submit "))};var E=function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])};a(29);var h=function(e){var t=Object(n.useState)(0),a=Object(d.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)(1),s=Object(d.a)(i,2),o=s[0],m=s[1];return E((function(){o>=e.array.length-1?m(0):m(o+1),r(55*-o)}),e.interval),c.a.createElement("div",{className:"content"},e.array.map((function(e,t){return c.a.createElement("h1",{className:"desc "+(0===t?"first ":"nein "),style:{marginTop:0===t?l+"px":"0px"}}," ",e)})))};var v=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),i=Object(d.a)(r,2),s=i[0],o=i[1],m=Object(n.useState)(["The first ever King of Pong","Music, Food & Drinks","23 October"]),u=Object(d.a)(m,2),E=u[0];return u[1],Object(n.useEffect)((function(){l(!0)}),[]),c.a.createElement("div",{className:"section hero"},c.a.createElement("div",{className:"left-side"},c.a.createElement("div",{className:"tagline "+(a?"show":"hidden")},c.a.createElement("h1",null,"MINI TABLE TENNIS",c.a.createElement("br",null),"CHAMPIONSHIP"),c.a.createElement("h2",null,"FOR THE IT CROWD")),c.a.createElement("span",{className:"divider "+(a?"show":"hidden")})),c.a.createElement("div",{className:"right-side"},c.a.createElement("div",{className:"right-side-content "+(a?"show ":"hidden ")+(s?"show-form ":"hide-form ")},c.a.createElement(h,{array:E,interval:3500}),c.a.createElement("div",{onClick:function(){return o(!0)},className:"show-interest-button button"},c.a.createElement("p",null,"Sign up Now")),c.a.createElement("div",{className:"form-side "+(s?"show-form ":"hide-form")},c.a.createElement(f,null),c.a.createElement("p",{className:"close button",onClick:function(){return o(!1)}},"X")))),c.a.createElement("div",{className:"read-more-button-container"},c.a.createElement("p",{onClick:function(){document.getElementById("social").scrollIntoView({behavior:"smooth"})},className:"read-more-button "+(a?"show":"hidden")}," Get To Know More ")))};a(30);var N=function(){return c.a.createElement("div",{id:"tournament",className:"section tournament-section"},c.a.createElement("div",{className:"left-side"},c.a.createElement("p",{className:"section-title"}," The Tournament "),c.a.createElement("span",{className:"divider "})),c.a.createElement("div",{className:"right-side"},c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Played on 4 mini tables by Stiga")),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Professional match balls")),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Courts with judges tables and scoreboards")),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Winner, winner, ping pong dinner"))))};a(31);var p=function(){return c.a.createElement("div",{id:"social",className:"section social-section"},c.a.createElement("div",{className:"left-side"},c.a.createElement("h2",{className:"section-title"},"What"),c.a.createElement("span",{className:"divider "})),c.a.createElement("div",{className:"right-side"},c.a.createElement("div",{className:"info-row"},c.a.createElement("h3",{className:"info-label"},"Social Gathering & ",c.a.createElement("br",null),"Mini Table Tennis Tournament"),c.a.createElement("img",{src:"https://blog.joypixels.com/content/images/2019/06/clinking_beer_mugs_1024.gif",style:{height:"150px",marginLeft:"20px"}})),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Enjoy a night of ",c.a.createElement("strong",null,"music"),", ",c.a.createElement("strong",null,"food")," and ",c.a.createElement("strong",null,"drinks")," while meeting new people and ",c.a.createElement("strong",null,"compete")," for the grand prize in our first ever tournament!"))),c.a.createElement("div",{className:"read-more-button-container"},c.a.createElement("p",{onClick:function(){document.getElementById("social").scrollIntoView({behavior:"smooth"})},className:"read-more-button "},"Get To Know More")))};a(32);var g=function(){return c.a.createElement("div",{id:"when-where",className:"section when-where-section"},c.a.createElement("div",{className:"left-side"},c.a.createElement("h2",{className:"section-title"},"When & Where"),c.a.createElement("span",{className:"divider "})),c.a.createElement("div",{className:"right-side"},c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Date: ",c.a.createElement("strong",null,"23 October"))),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Time: ",c.a.createElement("strong",null,"18:00"))),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Address: ",c.a.createElement("strong",null,"F\xf6rsta L\xe5nggatan 22, Gothenburg"))),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Place: ",c.a.createElement("strong",null,"The office of Dotnet Mentor on the 7th floor")))))};a(33);var b=function(){return c.a.createElement("div",{id:"faq",className:"section faq-section"},c.a.createElement("div",{className:"left-side"},c.a.createElement("h2",{className:"section-title"},"FAQ"),c.a.createElement("span",{className:"divider "})),c.a.createElement("div",{className:"right-side"},c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Played on 4 mini tables by Stiga")),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Professional match balls")),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Courts with judges tables and scoreboards")),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Winner, winner, ping pong dinner")),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"ITTF rules modified for net height")),c.a.createElement("div",{className:"info-row"},c.a.createElement("p",{className:"info-text"},"Best of 3 in group, Best of 5 in knockouts"))))};a(34);var w=function(){return c.a.createElement("div",{id:"sign-up",className:"section sign-up-section"},c.a.createElement("div",{className:"left-side"},c.a.createElement("h2",{className:"section-title"},"Sign up"),c.a.createElement("span",{className:"divider"})),c.a.createElement("div",{className:"right-side"},c.a.createElement(f,null)))};var O=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null),c.a.createElement(p,null),c.a.createElement(g,null),c.a.createElement(N,null),c.a.createElement(b,null),c.a.createElement(w,null))},j=a(4),x=Object(j.a)(),y=a(8),T=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(y.b,{history:x},c.a.createElement(y.a,{path:"",component:O})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.cc8fd999.chunk.js.map