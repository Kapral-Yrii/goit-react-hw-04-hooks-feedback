(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={list:"Statistics_list__2RAEh",item:"Statistics_item__gYZCg",ratings:"Statistics_ratings__3k-ay"}},function(e,t,a){e.exports={list:"FeedbackOptions_list__2LVzf",item:"FeedbackOptions_item__24idr",button:"FeedbackOptions_button__24kj3"}},,,function(e,t,a){e.exports={container:"Section_container__QTXhi",title:"Section_title__QWdaR"}},,function(e,t,a){e.exports={app:"App_app__1lTh9"}},function(e,t,a){e.exports={title:"Notification_title__uUlLr"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(7),s=a.n(n),r=(a(14),a(4)),o=a(8),l=a.n(o),b=a(6),j=a.n(b),u=a(0);function d(e){var t=e.title,a=e.children;return Object(u.jsxs)("section",{className:j.a.container,children:[Object(u.jsx)("h2",{className:j.a.title,children:t}),a]})}var O=a(18),h=a(3),m=a.n(h);function _(e){var t=e.options,a=e.onLeaveFeedback;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("ul",{className:m.a.list,children:t.map((function(e){return Object(u.jsx)("li",{className:m.a.item,children:Object(u.jsx)("button",{className:m.a.button,onClick:a,children:e})},Object(O.a)())}))})})}var x=a(2),f=a.n(x);function p(e){var t=e.good,a=e.neutral,c=e.bad,i=e.total,n=e.positiveFeedback;return Object(u.jsxs)("ul",{className:f.a.list,children:[Object(u.jsxs)("div",{className:f.a.ratings,children:[Object(u.jsxs)("li",{className:f.a.item,children:["Good: ",t]}),Object(u.jsxs)("li",{className:f.a.item,children:["Neutral: ",a]}),Object(u.jsxs)("li",{className:f.a.item,children:["Bad: ",c]})]}),Object(u.jsxs)("li",{className:f.a.item,children:["Total: ",i]}),Object(u.jsxs)("li",{className:f.a.item,children:["Positive feedback: ",n,"%"]})]})}var k=a(9),v=a.n(k);function N(e){var t=e.message;return Object(u.jsx)("p",{className:v.a.title,children:t})}var g=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(0),s=Object(r.a)(n,2),o=s[0],b=s[1],j=Object(c.useState)(0),O=Object(r.a)(j,2),h=O[0],m=O[1],x=Object(c.useCallback)((function(e){switch(e.target.textContent){case"Good":i((function(e){return e+1}));break;case"Neutral":b((function(e){return e+1}));break;case"Bad":m((function(e){return e+1}));break;default:return}}),[]),f=function(){return a+o+h};return Object(u.jsxs)("div",{className:l.a.app,children:[Object(u.jsx)(d,{title:"Please leave feedback",children:Object(u.jsx)(_,{options:["Good","Neutral","Bad"],onLeaveFeedback:x})}),Object(u.jsx)(d,{title:"Statistics",children:0===f()?Object(u.jsx)(N,{message:"No feedback given"}):Object(u.jsx)(p,{good:a,neutral:o,bad:h,total:f(),positiveFeedback:function(){var e=f();return 0===e?0:Math.round(100*a/e)}()})})]})};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.026a9fc1.chunk.js.map