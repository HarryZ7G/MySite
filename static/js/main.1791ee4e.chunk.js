(this["webpackJsonpharry-site"]=this["webpackJsonpharry-site"]||[]).push([[0],{10:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(13),r=n.n(i),l=(n(20),n(3)),d=n(2),o=n(5),y=n(4),j=n(6),u=n.n(j),m=(n(9),function(e){Object(o.a)(n,e);var t=Object(y.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"section",children:[Object(a.jsx)(u.a,{right:!0,delay:300,children:Object(a.jsxs)("h1",{className:"section-title",children:["About ",Object(a.jsx)("br",{}),"Me"]})}),Object(a.jsxs)(u.a,{delay:600,children:[Object(a.jsx)("div",{className:"v-line"}),Object(a.jsxs)("div",{className:"section-content",children:[Object(a.jsx)("h3",{className:"section-text",children:"Currently studying at University of Toronto"}),Object(a.jsx)("h3",{className:"section-text",children:"Computer Science Specialist, Software Engineering Stream"}),Object(a.jsx)("h3",{className:"section-text",children:"4 years of software developing experience"})]})]})]})}}]),n}(c.a.Component)),h=(n(10),n(7),n(14)),b=n.n(h),O=function(e){Object(o.a)(n,e);var t=Object(y.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(b.a,{filter:"blur(15px)",className:"animate__animated animate__fadeIn animate__delay-2s",children:Object(a.jsx)("div",{className:"glass",id:"frost",children:Object(a.jsx)("h1",{className:"title animate__animated animate__fadeIn animate__delay-3s",id:"hello",children:"Hello"})})})}}]),n}(c.a.Component),f=n.p+"static/media/Profile.672f94bb.jpg",v=function(e){Object(o.a)(n,e);var t=Object(y.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(u.a,{delay:300,children:Object(a.jsx)("div",{className:"imgCon",children:Object(a.jsx)("img",{src:f,alt:"A picture of me",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"100%"}})})})}}]),n}(c.a.Component),I=function(e){Object(o.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={seconds:0},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"refresh-glass animate__animated animate__fadeInDown animate__delay-3s",id:"ref",children:Object(a.jsx)("h4",{className:"message",children:"Refresh to change the picture"})})}}]),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.count=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.count)}},{key:"tick",value:function(){8===this.state.seconds?(document.getElementById("ref").classList.remove("animate__fadeInDown","animate__delay-3s"),document.getElementById("ref").classList.add("animate__fadeOutUp"),this.setState({seconds:9})):this.state.seconds<8&&this.setState({seconds:this.state.seconds+1})}}]),n}(c.a.Component),x=function(e){Object(o.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={seconds:0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.count=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.count)}},{key:"tick",value:function(){7===this.state.seconds?(document.getElementById("message").classList.remove("animate__fadeInDown","animate__delay-4s"),document.getElementById("message").classList.add("animate__fadeOutDown","animate__slow"),this.setState({seconds:8})):this.state.seconds<11?this.setState({seconds:this.state.seconds+1}):11===this.state.seconds&&(document.getElementById("message").classList.remove("animate__fadeOutDown"),document.getElementById("message").classList.add("animate__fadeInDown"),this.setState({seconds:4}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"blackout animate__animated animate__fadeIn animate__delay-2s",children:Object(a.jsx)("h4",{className:"message animate__animated animate__fadeInDown animate__delay-3s",id:"message",style:{paddingTop:"5px"},children:"Scroll down"})})}}]),n}(c.a.Component),p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnkAAAGACAMAAADmooTfAAAC/VBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+G1NxwAAAA/nRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BR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",z=n.p+"static/media/Backend.f88bf073.png",k=function(e){Object(o.a)(n,e);var t=Object(y.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"section",style:{marginTop:"4vw"},children:[Object(a.jsx)("img",{className:"icon-front",src:p,alt:""}),Object(a.jsx)(u.a,{right:!0,delay:300,children:Object(a.jsxs)("h2",{className:"section-title",style:{textAlign:"end"},children:["My",Object(a.jsx)("br",{}),"Skills"]})}),Object(a.jsx)(u.a,{delay:600,children:Object(a.jsx)("div",{className:"v-line"})}),Object(a.jsxs)("div",{className:"section-content",style:{flexDirection:"row"},children:[Object(a.jsx)(u.a,{delay:600,children:Object(a.jsxs)("div",{className:"section-icon",style:{marginLeft:"5vw"},children:[Object(a.jsx)("div",{className:"circle",children:Object(a.jsx)("img",{className:"icon-front",src:p,alt:""})}),Object(a.jsx)("h2",{className:"section-des",children:"Frontend"})]})}),Object(a.jsx)(u.a,{delay:700,children:Object(a.jsx)("div",{className:"h-line"})}),Object(a.jsx)(u.a,{delay:800,children:Object(a.jsxs)("div",{className:"section-icon",children:[Object(a.jsx)("div",{className:"circle",children:Object(a.jsx)("img",{className:"icon-back",src:z,alt:""})}),Object(a.jsx)("h2",{className:"section-des",children:"Backend"})]})})]})]})}}]),n}(c.a.Component),N=(n(25),function(e){Object(o.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).componentDidMount=function(){window.addEventListener("scroll",(function(){window.pageYOffset<window.innerHeight/2?document.getElementById("back").style.filter="blur(".concat(window.pageYOffset/(window.innerHeight/2)*15,"px)"):document.getElementById("back").style.filter="blur(15px)"}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"root",id:"root",children:[Object(a.jsx)("div",{className:"background animate__animated animate__fadeIn animate__delay-1s",id:"back"}),Object(a.jsxs)("div",{className:"title-back",children:[Object(a.jsx)(I,{}),Object(a.jsx)(O,{}),Object(a.jsx)(x,{})]}),Object(a.jsxs)("div",{className:"intro animate__animated animate__fadeIn animate__delay-2s",children:[Object(a.jsx)(v,{}),Object(a.jsx)(m,{}),Object(a.jsx)(k,{})]})]})}}]),n}(c.a.Component)),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),P()},9:function(e,t,n){}},[[26,1,2]]]);
//# sourceMappingURL=main.1791ee4e.chunk.js.map