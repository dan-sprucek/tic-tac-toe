(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),r=t.n(c),i=(t(9),t(1)),u=function(e){var a=e.handleClick,t=e.value;return l.a.createElement("div",{className:"cell",onClick:a,"data-value":t})},s=function(e){var a=e.handleClick;return l.a.createElement("div",{id:"board"},l.a.createElement("div",{className:"row"},l.a.createElement(u,{handleClick:a,value:"1"}),l.a.createElement(u,{handleClick:a,value:"2"}),l.a.createElement(u,{handleClick:a,value:"3"})),l.a.createElement("div",{className:"row"},l.a.createElement(u,{handleClick:a,value:"4"}),l.a.createElement(u,{handleClick:a,value:"5"}),l.a.createElement(u,{handleClick:a,value:"6"})),l.a.createElement("div",{className:"row"},l.a.createElement(u,{handleClick:a,value:"7"}),l.a.createElement(u,{handleClick:a,value:"8"}),l.a.createElement(u,{handleClick:a,value:"9"})))},d=function(e){var a=e.xScore,t=e.oScore;return l.a.createElement("div",null,l.a.createElement("h2",{className:"scoreHeadline"},"Scoreboard"),l.a.createElement("div",{className:"score"},l.a.createElement("div",{className:a>t?"winning":a<t?"losing":void 0},"X : ",a),l.a.createElement("div",{className:t>a?"winning":t<a?"losing":void 0},"O : ",t)))},o=function(e){var a=e.inPlay,t=e.newGame,n=e.winner;return l.a.createElement("div",null,a?l.a.createElement("div",{className:"resultContainer"},l.a.createElement("button",{onClick:t},"Restart the game")):n?l.a.createElement("div",{className:"resultContainer"},l.a.createElement("h2",null,n," wins the game! Congratulations!"),l.a.createElement("button",{onClick:t},"Start a new game")):l.a.createElement("div",{className:"resultContainer"},l.a.createElement("h2",null,"It's a tie!"),l.a.createElement("button",{onClick:t},"Start a new game")))},m=function(){var e=Object(n.useState)("X"),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),u=Object(i.a)(r,2),m=u[0],E=u[1],v=Object(n.useState)([]),h=Object(i.a)(v,2),b=h[0],g=h[1],C=Object(n.useState)(!0),k=Object(i.a)(C,2),O=k[0],S=k[1],j=Object(n.useState)(""),w=Object(i.a)(j,2),N=w[0],f=w[1],p=Object(n.useState)(0),X=Object(i.a)(p,2),T=X[0],y=X[1],H=Object(n.useState)(0),x=Object(i.a)(H,2),M=x[0],L=x[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Hello to Tic-Tac-Toe!"),0===m.length&&0===b.length?l.a.createElement("h2",null,t," starts the game!"):O?l.a.createElement("h2",null,"Next player is: ",t):l.a.createElement("h2",null,"\xa0"),l.a.createElement(s,{handleClick:function(e){var a;O&&""===e.target.innerHTML&&(e.target.innerHTML=t,"X"===t?(c("O"),E(m.concat(e.target.dataset.value)),a=m.concat(e.target.dataset.value)):(c("X"),g(b.concat(e.target.dataset.value)),a=b.concat(e.target.dataset.value)),a.includes("1")&&a.includes("2")&&a.includes("3")||a.includes("1")&&a.includes("5")&&a.includes("9")||a.includes("1")&&a.includes("4")&&a.includes("7")||a.includes("2")&&a.includes("5")&&a.includes("8")||a.includes("3")&&a.includes("5")&&a.includes("7")||a.includes("3")&&a.includes("6")&&a.includes("9")||a.includes("4")&&a.includes("5")&&a.includes("6")||a.includes("7")&&a.includes("8")&&a.includes("9")?(f(t),"X"===t?y(T+1):L(M+1),S(!1)):5===a.length&&S(!1))}}),l.a.createElement(d,{xScore:T,oScore:M}),l.a.createElement(o,{inPlay:O,newGame:function(){c("X"===t?"X":"O"),E([]),g([]),S(!0),f(""),document.querySelectorAll("div.cell").forEach((function(e){return e.innerHTML=""}))},winner:N}))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.27d8e761.chunk.js.map