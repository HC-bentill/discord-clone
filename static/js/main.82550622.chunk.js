(this["webpackJsonpdiscord-clone"]=this["webpackJsonpdiscord-clone"]||[]).push([[0],{78:function(e,c,s){},82:function(e,c,s){},83:function(e,c,s){},84:function(e,c,s){},91:function(e,c,s){},92:function(e,c,s){},93:function(e,c,s){},94:function(e,c,s){},95:function(e,c,s){"use strict";s.r(c);var a=s(2),n=s.n(a),t=s(26),i=s.n(t),l=(s(78),s(18)),r=(s(82),s(83),s(48)),d=s.n(r),o=s(55),j=s.n(o),h=(s(84),s(29));const b=Object(h.b)({name:"app",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:(e,c)=>{e.channelId=c.payload.channelId,e.channelName=c.payload.channelName}}}),{setChannelInfo:m}=b.actions,O=e=>e.app.channelId,u=e=>e.app.channelName;var x=b.reducer,p=s(3);var v=function(e){let{id:c,channelName:s}=e;const a=Object(l.b)();return Object(p.jsx)("div",{className:"sidebarChannel",onClick:()=>a(m({channelId:c,channelName:s})),children:Object(p.jsxs)("h4",{children:[Object(p.jsx)("span",{className:"sidebarChannel__hash",children:"#"}),s]})})},f=s(56),_=s.n(f),g=s(57),N=s.n(g),S=s(58),I=s.n(S),y=s(59),C=s.n(y),w=s(61),k=s.n(w),E=s(60),z=s.n(E),H=s(111);const B=Object(h.b)({name:"user",initialState:{user:null},reducers:{login:(e,c)=>{e.user=c.payload},logout:e=>{e.user=null}}}),{login:D,logout:A}=B.actions,G=e=>e.user.user;var L=B.reducer,M=s(32);const W=M.a.initializeApp({apiKey:"AIzaSyA70yGhEkfuxB-tw6DxrmOhx1lqMGEUyaE",authDomain:"discord-clone-f87c9.firebaseapp.com",projectId:"discord-clone-f87c9",storageBucket:"discord-clone-f87c9.appspot.com",messagingSenderId:"613193012662",appId:"1:613193012662:web:f6f8f76dc3449b9f8d9d17",measurementId:"G-RGQSYL3Y51"}).firestore(),T=M.a.auth(),U=new M.a.auth.GoogleAuthProvider;var F=W;var J=function(){const e=Object(l.c)(G),[c,s]=Object(a.useState)([]);return Object(a.useEffect)((()=>{F.collection("channels").onSnapshot((e=>s(e.docs.map((e=>({id:e.id,channel:e.data()}))))))}),[]),Object(p.jsxs)("div",{className:"sidebar",children:[Object(p.jsxs)("div",{className:"sidebar__top",children:[Object(p.jsx)("h3",{children:"Henry's Server"}),Object(p.jsx)(d.a,{})]}),Object(p.jsxs)("div",{className:"sidebar__channels",children:[Object(p.jsx)("div",{className:"sidebar__channelsHeader",children:Object(p.jsxs)("div",{className:"sidebar__header",children:[Object(p.jsx)(d.a,{}),Object(p.jsx)("h4",{children:"Text Channels"}),Object(p.jsx)(j.a,{onClick:()=>{const e=prompt("Enter a new channel name");e&&F.collection("channels").add({channelName:e})},className:"sidebar__addChannel"})]})}),Object(p.jsx)("div",{className:"sidebar__channelsList",children:c.map((e=>{let{id:c,channel:s}=e;return Object(p.jsx)(v,{id:c,channelName:s.channelName},c)}))})]}),Object(p.jsxs)("div",{className:"sidebar__voice",children:[Object(p.jsx)(_.a,{className:"sidebar__voiceIcon",fontsize:"large"}),Object(p.jsxs)("div",{className:"sidebar__voiceInfo",children:[Object(p.jsx)("h3",{children:"Voice Connected"}),Object(p.jsx)("p",{children:"Stream"})]}),Object(p.jsxs)("div",{className:"sidebar__voiceIcons",children:[Object(p.jsx)(N.a,{}),Object(p.jsx)(I.a,{})]})]}),Object(p.jsxs)("div",{className:"sidebar__profile",children:[Object(p.jsx)(H.a,{onClick:()=>T.signOut(),alt:"profile image",src:e.photo}),Object(p.jsxs)("div",{className:"sidebar__profileInfo",children:[Object(p.jsx)("h3",{children:e.displayName}),Object(p.jsxs)("p",{children:["#",e.uid.substring(0,5)]})]}),Object(p.jsxs)("div",{className:"sidebar__profileIcons",children:[Object(p.jsx)(C.a,{}),Object(p.jsx)(z.a,{}),Object(p.jsx)(k.a,{})]})]})]})},P=(s(91),s(92),s(62)),R=s.n(P),V=s(63),Y=s.n(V),q=s(64),K=s.n(q),Q=s(65),$=s.n(Q),X=s(67),Z=s.n(X),ee=s(66),ce=s.n(ee);var se=function(e){let{channelName:c}=e;return Object(p.jsxs)("div",{className:"chatHeader",children:[Object(p.jsx)("div",{className:"chatHeader__left",children:Object(p.jsxs)("h3",{children:[Object(p.jsx)("span",{className:"chatHeader__hash",children:"#"}),c]})}),Object(p.jsxs)("div",{className:"chatHeader__right",children:[Object(p.jsx)(R.a,{}),Object(p.jsx)(Y.a,{}),Object(p.jsx)(K.a,{}),Object(p.jsxs)("div",{className:"chatHeader__search",children:[Object(p.jsx)("input",{placeholder:"Search"}),Object(p.jsx)($.a,{})]}),Object(p.jsx)(ce.a,{}),Object(p.jsx)(Z.a,{})]})]})},ae=s(68),ne=s.n(ae),te=s(69),ie=s.n(te),le=s(70),re=s.n(le),de=s(71),oe=s.n(de);s(93);var je=function(e){let{timestamp:c,user:s,message:a}=e;return Object(p.jsxs)("div",{className:"message",children:[Object(p.jsx)(H.a,{src:s.photo}),Object(p.jsxs)("div",{className:"message__info",children:[Object(p.jsxs)("h4",{children:[s.displayName,Object(p.jsx)("span",{className:"message__timestamp",children:new Date(null===c||void 0===c?void 0:c.toDate()).toUTCString()})]}),Object(p.jsx)("p",{children:a})]})]})};var he=function(){const e=Object(l.c)(G),c=Object(l.c)(O),s=Object(l.c)(u),[n,t]=Object(a.useState)(""),[i,r]=Object(a.useState)([]);return Object(a.useEffect)((()=>{c&&F.collection("channels").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((e=>r(e.docs.map((e=>e.data())))))}),[c]),Object(p.jsxs)("div",{className:"chat",children:[Object(p.jsx)(se,{channelName:s}),Object(p.jsx)("div",{className:"chat__messages",children:i.map((e=>Object(p.jsx)(je,{timestamp:e.timestamp,message:e.message,user:e.user})))}),Object(p.jsxs)("div",{className:"chat__input",children:[Object(p.jsx)(ne.a,{fontSize:"large"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{value:n,disabled:!c,onChange:e=>t(e.target.value),placeholder:"Message # ".concat(s)}),Object(p.jsx)("button",{disabled:!c,className:"chat__inputButton",type:"submit",onClick:s=>{s.preventDefault(),F.collection("channels").doc(c).collection("messages").add({timestamp:M.a.firestore.FieldValue.serverTimestamp(),message:n,user:e}),t("")},children:"Send Message"})]}),Object(p.jsxs)("div",{className:"chat__inputIcons",children:[Object(p.jsx)(ie.a,{fontSize:"large"}),Object(p.jsx)(re.a,{fontSize:"large"}),Object(p.jsx)(oe.a,{fontSize:"large"})]})]})]})},be=s(110);s(94);var me=function(){return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("div",{className:"logo__logo",children:Object(p.jsx)("img",{src:"https://cdn.arstechnica.net/wp-content/uploads/2017/08/Discord-LogoWordmark-Color-800x272.png",alt:""})}),Object(p.jsx)(be.a,{onClick:()=>{T.signInWithPopup(U).catch((e=>alert(e.message)))},children:"Sign in"})]})};var Oe=function(){const e=Object(l.b)(),c=Object(l.c)(G);return Object(a.useEffect)((()=>{T.onAuthStateChanged((c=>{console.log("user is",c),e(c?D({uid:c.uid,photo:c.photoURL,email:c.email,displayName:c.displayName}):A())}))}),[e]),Object(p.jsx)("div",{className:"app",children:c?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(J,{}),Object(p.jsx)(he,{})]}):Object(p.jsx)(me,{})})},ue=Object(h.a)({reducer:{user:L,app:x}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(l.a,{store:ue,children:Object(p.jsx)(Oe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[95,1,2]]]);
//# sourceMappingURL=main.82550622.chunk.js.map