(this["webpackJsonpstarter-kit"]=this["webpackJsonpstarter-kit"]||[]).push([[0],{32:function(e,a,t){e.exports=t(60)},37:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(28),c=t.n(r),s=(t(37),t(8)),i=t(9),o=t(11),m=t(10),u=t(12),h=function(e){return e.children},f=t(14),E=t(6),d=t(29),p=t.n(d),b=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={days:void 0,hours:void 0,minutes:void 0,seconds:void 0,message:""},t.handleSubmit=function(e){e.preventDefault();var a=t.email.value;p.a.post("https://eles-api.herokuapp.com/api/users",{email:a}).then((function(e,a){a&&console.log(a),console.log(e.message)})).catch((function(e){return console.log(e)})),t.props.history.push("/thanks"),e.stopPropagation()},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var a=e.props,t=(a.timeTillDate,a.timeFormat,new Date("Apr 20, 2020 16:37:52").getTime()-(new Date).getTime()),n=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),r=Math.floor(t%36e5/6e4),c=Math.floor(t%6e4/1e3);e.setState({days:n,hours:l,minutes:r,seconds:c})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this,a=this.state,t=a.days,n=a.hours,r=a.minutes,c=a.seconds;return l.a.createElement(h,null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{height:"90px",className:"logo",src:"img/Web2.png",style:{objectFit:"cover",width:"10rem",marginLeft:"auto",marginRight:"auto"}}),l.a.createElement("h1",{className:"heading"},"You are just One Step Away from Raising the Funds you",l.a.createElement("span",null," need!")),l.a.createElement("p",{className:"sub-heading"},l.a.createElement("b",null,"800,060")," People behind you.",l.a.createElement("b",null,"254")," in front of you, You came right on time!"),l.a.createElement("h1",{className:"heading"},"We are launching ",l.a.createElement("span",null,"soon!")),l.a.createElement("h3",{className:"sub-heading"},"Subscribe and get notified"),l.a.createElement("form",{id:"form",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",{className:"form-control"},l.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Your email address..",ref:function(a){return e.email=a}}),l.a.createElement("small",null,"Please provide a valid email address")),l.a.createElement("input",{type:"submit",id:"btn",value:"Notify Me",className:"button"}))),l.a.createElement("div",{className:"count-wrapper"},l.a.createElement("p",{className:"sub-heading"},"Elessar is a crowdfunding platform built specifically to help you raise funds for your business or social course. It is the first decentralized Crowdfunding platform in Africa. launching on the 21th of April 2020"),l.a.createElement("ul",{className:"flex-container"},l.a.createElement("li",{className:"flex-item"},l.a.createElement("div",{className:"days"},t," ",l.a.createElement("span",null,"days"))),l.a.createElement("li",{className:"flex-item"},l.a.createElement("div",{className:"hours"},n,l.a.createElement("span",null,"hrs"))),l.a.createElement("li",{className:"flex-item"},l.a.createElement("div",{className:"minutes"},r,l.a.createElement("span",null,"mins"))),l.a.createElement("li",{className:"flex-item"},l.a.createElement("div",{className:"seconds"},c,l.a.createElement("span",null,"secs")))))),l.a.createElement("footer",null,l.a.createElement("div",{className:"social"},l.a.createElement("a",{href:"https://www.facebook.com/100003719094788/posts/1839439092856709/?app=fbl",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook 3x"})),l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fab fa-twitter x3"})),l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fab fa-instagram x3"})),l.a.createElement("a",{href:"https://t.me/joinchat/HlCKLRilXKjshaMizmtYGQ",target:"_blank"},l.a.createElement("i",{className:"fab fa-telegram x3"}))),l.a.createElement("small",{className:"attribution"},"\xa9 Copyright ",l.a.createElement("a",{target:"_blank",href:"https://aragontech.co/",style:{textDecoration:"none"}},"AragonTech"),". All rights reserved.")))}}]),a}(n.Component),g=Object(E.f)(b),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(h,null,l.a.createElement("section",{class:"flex-container thanks"},l.a.createElement("h1",null,"THANK YOU!"),l.a.createElement("i",{class:"fa fa-check main-content__checkmark",id:"checkmark"}),l.a.createElement(f.b,{to:"/"},"Continue to Home")),l.a.createElement("footer",null,l.a.createElement("div",{class:"social"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fab fa-facebook 3x"})),l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fab fa-twitter x3"})),l.a.createElement("a",{href:"#"},l.a.createElement("i",{class:"fab fa-instagram x3"}))),l.a.createElement("small",{className:"attribution"},"\xa9 Copyright ",l.a.createElement("a",{target:"_blank",href:"https://aragontech.co/",style:{textDecoration:"none"}},"AragonTech"),". All rights reserved.")))}}]),a}(n.Component),y=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(h,null,l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/thanks"},l.a.createElement(v,null)),l.a.createElement(E.a,{exact:!0,path:"/"},l.a.createElement(g,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.1607915c.chunk.js.map