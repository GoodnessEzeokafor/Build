(this["webpackJsonpstarter-kit"]=this["webpackJsonpstarter-kit"]||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(29),c=a.n(l),r=(a(38),a(8)),o=a(9),m=a(11),i=a(10),u=a(12),p=a(15),d=a.n(p),h=a(30),b=a.n(h),f=a(6),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={days:void 0,hours:void 0,minutes:void 0,seconds:void 0,message:""},a.handleSubmit=function(e){e.preventDefault();var t=a.email.value;console.log(t),b.a.post("https://eles-api.herokuapp.com/api/users",{email:t}).then((function(e,t){t&&console.log(t),console.log(e.message)})).catch((function(e){return console.log(e)})),a.props.history.push("/thanks"),e.stopPropagation()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=e.props,a=(t.timeTillDate,t.timeFormat,d()("21/03/2020","DD/MM/YYYY")),n=d()(),s=d()(a-n),l=s.format("D"),c=s.format("HH"),r=s.format("mm"),o=s.format("ss");e.setState({days:l,hours:c,minutes:r,seconds:o})}),1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.state,a=t.days,n=t.hours,l=t.minutes,c=t.seconds;return s.a.createElement("div",{className:"bg-img1 overlay1 size1 flex-w flex-c-m p-t-55 p-b-55 p-l-15 p-r-15",style:{backgroundImage:"url('images/bg01.jpg')"}},s.a.createElement("div",{className:"wsize1"},s.a.createElement("p",{className:"txt-center p-b-23"},s.a.createElement("i",{className:"zmdi zmdi-card-giftcard cl0 fs-60"})),s.a.createElement("h3",{className:"l1-txt1 txt-center p-b-22"},"Coming Soon"),s.a.createElement("p",{className:"txt-center m2-txt1 p-b-67"},"Elesarr first decentralized crowdfunding application in Nigeria launching on the 20th of March 2020"),s.a.createElement("div",{className:"flex-w flex-sa-m cd100 bor1 p-t-42 p-b-22 p-l-50 p-r-50 respon1"},s.a.createElement("div",{className:"flex-col-c-m wsize2 m-b-20"},s.a.createElement("span",{className:"l1-txt2 p-b-4 days"},a),s.a.createElement("span",{className:"m2-txt2"},"Days")),s.a.createElement("span",{className:"l1-txt2 p-b-22"},":"),s.a.createElement("div",{className:"flex-col-c-m wsize2 m-b-20"},s.a.createElement("span",{className:"l1-txt2 p-b-4 hours"},n),s.a.createElement("span",{className:"m2-txt2"},"Hours")),s.a.createElement("span",{className:"l1-txt2 p-b-22 respon2"},":"),s.a.createElement("div",{className:"flex-col-c-m wsize2 m-b-20"},s.a.createElement("span",{className:"l1-txt2 p-b-4 minutes"},l),s.a.createElement("span",{className:"m2-txt2"},"Minutes")),s.a.createElement("span",{className:"l1-txt2 p-b-22"},":"),s.a.createElement("div",{className:"flex-col-c-m wsize2 m-b-20"},s.a.createElement("span",{className:"l1-txt2 p-b-4 seconds"},c),s.a.createElement("span",{className:"m2-txt2"},"Seconds"))),s.a.createElement("form",{className:"flex-w flex-c-m contact100-form validate-form p-t-70",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"wrap-input100 validate-input where1","data-validate":"Email is required: ex@abc.xyz"},s.a.createElement("input",{className:"s1-txt1 placeholder0 input100",type:"text",name:"email",placeholder:"Email Address",ref:function(t){e.email=t},required:!0}),s.a.createElement("span",{className:"focus-input100"})),s.a.createElement("button",{type:"submit",className:"flex-c-m s1-txt1 size2 how-btn trans-04 where1"},"Notify Me"))))}}]),t}(n.Component),v=Object(f.f)(E),x=function(e){return e.children},N=a(14),g=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{class:"jumbotron text-center"},s.a.createElement("h1",{class:"display-3"},"Thank You! Check Your Inbox"),s.a.createElement("hr",null),s.a.createElement("p",{class:"lead"},s.a.createElement(N.b,{class:"btn btn-primary btn-sm",to:"/",role:"button"},"Continue to homepage")))}}]),t}(n.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(x,null,s.a.createElement(N.a,null,s.a.createElement(f.c,null,s.a.createElement(f.a,{path:"/thanks"},s.a.createElement(g,null)),s.a.createElement(f.a,{exact:!0,path:"/"},s.a.createElement(v,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.4682fd6e.chunk.js.map