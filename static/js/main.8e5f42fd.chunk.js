(this["webpackJsonptyping-script"]=this["webpackJsonptyping-script"]||[]).push([[0],{13:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(3),s=n.n(c),o=(n(13),n(2)),a=n(4),d=n(8),l=[["\u3053\u3093\u306b\u3061\u306f\u4e16\u754c","KONNNITIHASEKAI"],["22\u3053\u3093\u306b\u3061\u306f\u4e16\u754c22","22KONNNITIHASEKAI22"],["33\u3053\u3093\u306b\u3061\u306f\u4e16\u754c33","33KONNNITIHASEKAI33"],["44\u3053\u3093\u306b\u3061\u306f\u4e16\u754c44","44KONNNITIHASEKAI44"],["55\u3053\u3093\u306b\u3061\u306f\u4e16\u754c55","55KONNNITIHASEKAI55"],["66\u3053\u3093\u306b\u3061\u306f\u4e16\u754c66","66KONNNITIHASEKAI66"]],u={contentsID:0,rawString:l[0][0],alphabetString:l[0][1],listeningCharIndex:0,allInputCount:0,doneCharCount:0,displayType:"INIT"},j=Object(a.b)({name:"game",initialState:u,reducers:{keypressed:function(e,t){var n=t.payload.pressedKeyCode,r=e.alphabetString[e.listeningCharIndex];if(e.allInputCount+=1,String.fromCharCode(n)===r&&(e.listeningCharIndex+=1,e.doneCharCount+=1),e.listeningCharIndex===e.alphabetString.length)if(e.listeningCharIndex=0,e.contentsID+=1,e.contentsID!==l.length){var i=Object(d.a)(l[e.contentsID],2);e.rawString=i[0],e.alphabetString=i[1]}else e.displayType="RESULT"},changeDisplayType:function(e,t){e.displayType=t.payload}}}),b=j.actions,h=b.keypressed,p=b.changeDisplayType,O={padding:"0.5em",borderRadius:"1em",background:"lightslategray",margin:"150px auto",width:"600px",height:"400px",textAlign:"center",position:"relative"},y={background:"lavender",position:"absolute",width:"90%",height:"50%",borderRadius:"1em",transform:"translate(-50%, -50%)",top:"50%",left:"50%"},f={letterSpacing:"5px",position:"absolute",width:"100%",top:"45%",left:"50%",transform:"translate(-50%, 0%)",fontSize:"25px"},x={color:"white",position:"absolute",top:"10%",right:"10%"},g=n(1),I={color:"darkgray"},v=function(){var e=Object(o.c)((function(e){return e.listeningCharIndex})),t=Object(o.c)((function(e){return e.alphabetString})),n=t.substr(0,e),r=t.substr(e);return Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{style:I,children:n}),Object(g.jsx)("span",{children:r})]})},C=function(){var e=Object(o.c)((function(e){return e.rawString}));return Object(g.jsx)("div",{children:e})},S=function(){var e=Object(o.c)((function(e){return e.allInputCount})),t=Object(o.c)((function(e){return e.doneCharCount}))/e*100||0;return Object(g.jsxs)("div",{children:["\u6b63\u7b54\u7387\u306f",t.toFixed(2),"%\u3067\u3059"]})},w=function(){var e=Object(o.b)(),t=Object(r.useCallback)((function(t){console.log(String.fromCharCode(t.keyCode),"is Pressed!!");var n={pressedKeyCode:t.keyCode};e(h(n))}),[]);return Object(r.useEffect)((function(){return window.addEventListener("keydown",t,!1),function(){window.removeEventListener("keydown",t,!1)}}),[]),Object(g.jsxs)("div",{style:O,children:[Object(g.jsx)("div",{style:x,children:Object(g.jsx)(S,{})}),Object(g.jsx)("div",{style:y,children:Object(g.jsxs)("div",{style:f,children:[Object(g.jsx)(C,{}),Object(g.jsx)(v,{})]})})]})},N=(n(19),function(){var e=Object(o.b)(),t=(Object(o.c)((function(e){return e.displayType})),Object(r.useCallback)((function(t){console.log(String.fromCharCode(t.keyCode),"is Pressed!!");32!==t.keyCode&&13!==t.keyCode||e(p("GAME"))}),[]));return Object(r.useEffect)((function(){return window.addEventListener("keydown",t,!1),function(){window.removeEventListener("keydown",t,!1)}}),[]),Object(g.jsx)("div",{style:O,children:Object(g.jsx)("div",{style:y,children:Object(g.jsx)("div",{style:f,children:"Space\u307e\u305f\u306fEnter\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044"})})})}),k=function(){var e=Object(o.c)((function(e){return e})),t=e.allInputCount,n=e.doneCharCount,r=n/t*100||0;return Object(g.jsxs)("div",{style:O,children:[Object(g.jsxs)("div",{style:x,children:[Object(g.jsx)("br",{}),"\u5165\u529b\u6570:",t," \u6b63\u89e3\u6570:",n,"\u30df\u30b9:",t-n,"\u6b63\u7b54\u7387:",r.toFixed(2),"%"]}),Object(g.jsx)("div",{style:y,children:Object(g.jsx)("div",{style:f,children:"\u7d42\u4e86\uff01\uff01"})})]})},E=function(){switch(Object(o.c)((function(e){return e.displayType}))){case"INIT":return Object(g.jsx)(N,{});case"GAME":return Object(g.jsx)(w,{});default:return Object(g.jsx)(k,{})}},m=Object(a.a)({reducer:j.reducer});s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(o.a,{store:m,children:Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(E,{})})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8e5f42fd.chunk.js.map