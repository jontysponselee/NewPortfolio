(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),i=a(20),c=a.n(i),s=a(150),l=(a(83),a(149)),d=a(68),j=a(133);var b=a(24),p=a(10),m=a(134),h=a(151),u=Object(m.a)((function(){return{backgroundImage:{backgroundImage:"url(".concat(Ue,")"),filter:"opacity(15%) grayscale(100%)",zIndex:"-1",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px"}}}));var x=function(e){var t=e.children,a=u().backgroundImage;return Object(n.jsxs)(h.a,{height:"100vh",position:"relative",children:[Object(n.jsx)(h.a,{className:a,height:"100%"}),t]})},g=a(117),O=Object(m.a)((function(e){return{textEmphasis:{borderBottomStyle:"solid",borderBottomWidth:"2px",borderColor:e.palette.primary.main}}}));var f=function(){var e=O().textEmphasis;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g.a,{variant:"h2",children:"Hi stranger,"}),Object(n.jsx)(g.a,{variant:"h2",children:"Welcome to my portfolio."}),Object(n.jsxs)(g.a,{variant:"subtitle1",gutterBottom:!0,children:["My name is ",Object(n.jsx)("span",{className:e,children:"Jonty Sponselee"})," and I am a ",Object(n.jsx)("span",{className:e,children:"developer"}),"."]})]})},v=a(136),y=a(135),w=Object(m.a)((function(e){return{root:{marginTop:e.spacing(2),"& > *":{marginRight:e.spacing(2)}}}}));var k=function(){var e=w().root;return Object(n.jsxs)(h.a,{className:e,children:[Object(n.jsx)(y.a,{variant:"contained",color:"primary",component:b.b,to:"/projects",children:"Projects"}),Object(n.jsx)(y.a,{variant:"outlined",color:"accent",component:b.b,to:"/about-me",children:"About me"})]})};var I=function(){return Object(n.jsx)(x,{children:Object(n.jsx)(h.a,{height:"100%",display:"flex",alignItems:"center",children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(f,{}),Object(n.jsx)(k,{})]})})})},N=a(9),C=a(26),S=a(154),D=a(137),L=a(153),U=a(138),T=a(139),P=a(140),B=a(141),M=a(64),H=a.n(M),F=a(63);function J(e){return"".concat("/NewPortfolio","/images/").concat(e)}var A=a(4),W=Object(m.a)((function(e){return{expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},tags:{"& > *":{marginRight:e.spacing(1),marginBottom:e.spacing(1)}},media:{height:140},description:{"& a":{color:e.palette.primary[400],"&:hover":{color:e.palette.secondary.main}}}}}));function E(e){var t=e.tags,a=W();return Object(n.jsx)(h.a,{className:a.tags,children:t.map((function(e){return Object(n.jsx)(S.a,{label:e,variant:"outlined",size:"small"})}))})}function R(e){var t=e.project,a=o.a.useState(!1),r=Object(C.a)(a,2),i=r[0],c=r[1],s=W();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(h.a,{display:"flex",children:[Object(n.jsx)(g.a,{variant:"h5",component:"h2",children:t.title}),Object(n.jsx)(D.a,{className:Object(A.a)(s.expand,Object(N.a)({},s.expandOpen,i)),onClick:function(){c(!i)},"aria-expanded":i,"aria-label":"show more",children:Object(n.jsx)(H.a,{})})]}),Object(n.jsx)(L.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(g.a,{variant:"body2",dangerouslySetInnerHTML:{__html:t.description},className:s.description})})]})}function Y(e){var t=e.project,a=W(),r=J("projects/".concat(t.imageUrl));return Object(n.jsx)(U.a,{item:!0,xs:12,sm:4,className:a.projectCard,children:Object(n.jsxs)(T.a,{elevation:3,children:[Object(n.jsx)(P.a,{image:r,className:a.media}),Object(n.jsxs)(B.a,{children:[Object(n.jsx)(E,{tags:t.tags}),Object(n.jsx)(R,{project:t})]})]})})}var _=function(){return Object(n.jsx)(U.a,{container:!0,spacing:4,children:F.map((function(e,t){return Object(n.jsx)(Y,{project:e},t)}))})};var G=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(_,{})})},Q=a(28),z=a(3),K=a(47),V=a(71),q=a(152),X=a(142),Z=a(65),$=a.n(Z),ee=a(66),te=Object(m.a)((function(e){return{experienceCard:{display:"flex",maxWidth:500,marginBottom:e.spacing(4),marginLeft:"auto",marginRight:"auto"},experienceImgContainer:{backgroundColor:e.palette.secondary.main,display:"flex",alignItems:"center"},experienceImg:{width:125,height:125,objectFit:"contain"}}}));var ae=function(e){var t=e.title,a=e.subtitle,r=e.startDate,o=e.endDate,i=e.coverUrl,c=te(),s="".concat(r," - ").concat(o);return Object(n.jsxs)(T.a,{className:c.experienceCard,elevation:3,children:[Object(n.jsx)(h.a,{className:c.experienceImgContainer,children:Object(n.jsx)("img",{src:i,alt:"logo",className:c.experienceImg})}),Object(n.jsxs)(B.a,{children:[Object(n.jsx)(g.a,{variant:"h5",children:t}),Object(n.jsx)(g.a,{children:a}),Object(n.jsx)(g.a,{variant:"subtitle2",color:"textSecondary",children:s})]})]})};function ne(e){var t=e.study,a=J("education/".concat(t.imageUrl));return Object(n.jsx)(ae,{title:t.name,subtitle:t.course,coverUrl:a,startDate:t.enrollmentYear,endDate:t.graduationYear})}var re=function(){return Object(n.jsx)(n.Fragment,{children:ee.map((function(e,t){return Object(n.jsx)(ne,{study:e},t)}))})},oe=a(67);function ie(e){var t=e.job,a=J("jobs/".concat(t.imageUrl));return Object(n.jsx)(ae,{title:t.description,subtitle:t.companyName,coverUrl:a,startDate:t.startDate,endDate:t.endDate})}var ce=function(){return Object(n.jsx)(n.Fragment,{children:oe.map((function(e,t){return Object(n.jsx)(ie,{job:e},t)}))})},se=Object(m.a)((function(e){return{tabs:{backgroundColor:e.palette.primary[400]}}}));function le(e){var t=e.children,a=e.value,r=e.index,o=Object(z.a)(e,["children","value","index"]);return Object(n.jsx)(h.a,Object(Q.a)(Object(Q.a)({p:3,role:"tabpanel",hidden:a!==r,id:"experience-tabpanel-".concat(r),"aria-labelledby":"experience-tab-".concat(r)},o),{},{children:Object(n.jsx)(g.a,{children:t})}))}var de=function(){var e=se(),t=Object(K.a)(),a=Object(r.useState)(0),o=Object(C.a)(a,2),i=o[0],c=o[1],s=function(e){return{id:"experience-tab-".concat(e),"aria-controls":"experience-tabpanel-".concat(e)}};return Object(n.jsxs)(V.a,{variant:"outlined",children:[Object(n.jsxs)(q.a,{className:e.tabs,value:i,onChange:function(e,t){c(t)},variant:"fullWidth","aria-label":"Experience tabs",children:[Object(n.jsx)(X.a,Object(Q.a)({label:"Education"},s(0))),Object(n.jsx)(X.a,Object(Q.a)({label:"Work experience"},s(1)))]}),Object(n.jsxs)($.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){c(e)},children:[Object(n.jsx)(le,{value:i,index:0,dir:t.direction,children:Object(n.jsx)(re,{})}),Object(n.jsx)(le,{value:i,index:1,dir:t.direction,children:Object(n.jsx)(ce,{})})]})]})};var je=function(e){var t=e.title,a=e.description;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g.a,{variant:"h3",component:"h1",gutterBottom:!0,children:t}),a&&Object(n.jsx)(g.a,{variant:"body1",dangerouslySetInnerHTML:{__html:a}})]})},be=Object(m.a)((function(e){return{img:{maxWidth:"100%",maxHeight:"100%"}}}));function pe(){var e=be(),t=J("aboutMeImage.jpeg");return Object(n.jsxs)(U.a,{container:!0,spacing:4,children:[Object(n.jsx)(U.a,{item:!0,xs:12,sm:7,children:Object(n.jsx)(je,{title:"About me",description:"\n                Hi, my name is Jonty Sponselee and I am a developer.\n                    I am 23 years old and based in Utrecht.\n                    I\u2019m currently a student at the HU University of Applied Sciences Utrecht,\n                    where I am enrolled in Open-ICT, a project-based course. I specialise in back-end and web development.\n                    I am also interested in AI and data science. I am an analytical, hard-working problem-solver,\n                    who is always looking for cutting-edge technologies to continue improving my skills.\n                    <br><br>\n                    My toolkit consists of the following:\n                    <br>\u2022\tProfessional: Typescript/Javascript, PHP, SQL, ReactJS, GIT, Deno, Docker, User experience, Database modeling, UML, HTML/CSS, Wordpress, jQuery\n                    <br>\u2022\tIntermediate: Linux, Kotlin, Sass, Golang, React Material Ui\n\n                "})}),Object(n.jsx)(U.a,{item:!0,xs:!0,children:Object(n.jsx)(h.a,{maxWidth:256,ml:"auto",children:Object(n.jsx)("img",{className:e.img,src:t,alt:"Jonty Sponselee"})})})]})}var me=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.a,{mb:6,children:Object(n.jsx)(pe,{})}),Object(n.jsx)(de,{})]})},he=a(143),ue=a(144),xe=a(145),ge=a(146),Oe=Object(m.a)((function(e){return{root:{"&:hover":{color:e.palette.primary[400],"& .icon":{color:e.palette.primary[400]}}},icon:{}}}));function fe(e){var t=e.icon,a=e.text,o=e.to,i=Oe();return Object(n.jsx)(he.a,{href:o,target:"_blank",rel:"noopener noreferrer",color:"textPrimary",className:i.root,children:Object(n.jsxs)(h.a,{display:"flex",alignItems:"center",children:[Object(n.jsx)(h.a,{pr:1,py:1,className:"icon",children:Object(r.createElement)(t)}),Object(n.jsx)(g.a,{children:a})]})})}var ve=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(je,{title:"Get in touch"}),Object(n.jsx)(fe,{icon:ue.a,text:"Let's code together",to:"https://github.com/jontysponselee"}),Object(n.jsx)(fe,{icon:xe.a,text:"Let's extend our network",to:"https://www.linkedin.com/in/jonty-sponselee"}),Object(n.jsx)(fe,{icon:ge.a,text:"Let's e-mail",to:"mailto:jsponselee97@gmail.com"})]})};var ye=function(){return Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{exact:!0,path:"/projects",children:Object(n.jsx)(G,{})}),Object(n.jsx)(p.b,{exact:!0,path:"/about-me",children:Object(n.jsx)(me,{})}),Object(n.jsx)(p.b,{exact:!0,path:"/contact",children:Object(n.jsx)(ve,{})}),Object(n.jsx)(p.b,{path:"*",children:Object(n.jsx)(p.a,{to:"/"})})]})},we=a(148),ke=Object(m.a)((function(e){return{root:{"& > *":{transition:e.transitions.create(),marginLeft:e.spacing(2),paddingBottom:e.spacing(.5),"&:hover":{color:e.palette.text.primary,textDecoration:"none",borderBottom:"1px solid",borderColor:e.palette.text.primary}}},activeNavLink:{color:e.palette.text.primary,borderBottom:"1px solid",borderColor:e.palette.text.primary}}})),Ie=Object(r.forwardRef)((function(e,t){var a=ke().activeNavLink;return Object(n.jsx)(he.a,Object(Q.a)({exact:!0,ref:t,component:b.c,color:"textSecondary",activeClassName:a},e))}));var Ne=function(){var e=ke().root;return Object(n.jsxs)(h.a,{className:e,children:[Object(n.jsx)(Ie,{to:"/",children:"Home"}),Object(n.jsx)(Ie,{to:"/projects",children:"Projects"}),Object(n.jsx)(Ie,{to:"/about-me",children:"About me"}),Object(n.jsx)(Ie,{to:"/contact",children:"Contact"})]})},Ce=a(147),Se=Object(m.a)({title:{flexGrow:1}});var De=function(){var e=Se().title;return Object(n.jsx)(Ce.a,{position:"sticky",children:Object(n.jsxs)(we.a,{children:[Object(n.jsx)(g.a,{variant:"h6",className:e,children:"Jonty Sponselee | Portfolio"}),Object(n.jsx)(Ne,{})]})})};var Le=function(){return Object(n.jsx)(b.a,{children:Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{exact:!0,path:"/",children:Object(n.jsx)(I,{})}),Object(n.jsxs)(p.b,{children:[Object(n.jsx)(De,{}),Object(n.jsx)(v.a,{children:Object(n.jsx)(h.a,{mt:4,p:4,component:V.a,elevation:2,children:Object(n.jsx)(ye,{})})})]})]})})},Ue="".concat("/NewPortfolio","/images/homepageImage.jpg");var Te=function(){var e=Object(r.useMemo)((function(){return Object(d.a)({palette:{primary:j.a,secondary:{main:"#fff"},type:"dark"}})}),[!0]);return Object(n.jsxs)(l.a,{theme:e,children:[Object(n.jsx)(s.a,{}),Object(n.jsx)(Le,{})]})},Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,156)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};c.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(Te,{})}),document.getElementById("root")),Pe()},63:function(e){e.exports=JSON.parse('[{"title":"Hairdresser project","imageUrl":"hairdresserProject.jpg","description":"This was my first project for my HBO Open-ICT course. The assignment was to create a website for hairdressers, where customers could make appointments. During this project, I learned how to use Lumen, a micro-framework based on Laravel. I used this framework for back-end development, and ReactJS for front-end development. In addition, I gained more experience with improving the user experience, as I found it important to make the website clear and easy to use for customers. To see the code of the frontend, check out <a href=\'https://github.com/jontysponselee/reserved-frontend\'>this repository</a>. To see the code of the backend, check out <a href=\'https://github.com/jontysponselee/reserved-backend\'>this repository</a>.","tags":["PHP","ReactJS","Lumen/Laravel","MySQL/MariaDB","Javascript","Database modeling"]},{"title":"Advent of code","imageUrl":"adventOfCode.jfif","description":"Advent of Code is a yearly code challenge I participated in. The Advent of Code counts down the days until Christmas. Every day you receive an assignment consisting of two parts, which you can solve in any way you can think of, as long as you provide a solution, regardless of programming language. It is a way to exert my creativity and creative problem-solving. I challenge myself to create the code as efficiently as I can, to create the shortest elegant code with the fastest performance. You can check out <a href=\'https://github.com/jontysponselee/adventOfCode\'>my Github page</a> to see what kind of solutions I came up with, and check out the website of <a href=\'https://adventofcode.com/\'>Advent of Code</a> to participate next time!","tags":["Typescript","PHP"]},{"title":"Altenburg Fotografie","imageUrl":"altenburgFotografie.png","description":"Altenburg Fotografie is a website I created as a project with a partner. My partner created the design and I coded it in a Wordpress environment. This made it possible for our client to manage his website in the future. This project was a good opportunity for us to hone our skills.  <br><br>If you want to have a look, click <a href=\'http://altenburg-fotografie.nl\'>here</a>.","tags":["PHP","Wordpress","Javascript","Sass","HTML/CSS"]},{"title":"Weitjerock DB","imageUrl":"weitjerockDB.jpg","description":"Weitjerock is a festival in the Netherlands and the organisation behind it needed a web application to store their sponsor and band data. <br><br> This was my first big project of my MBO course. In this project I have learned the basics of web development, data modeling and communicating with clients. The code that I have written most was PHP for the backend. I also learned the basics Javascript, but this was mostly with the jQuery library. At last, I also picked up some user-experience skills, because it was important that the data of the application was showing effectively to the end user. ","tags":["PHP","MySQL/MariaDB","Javascript","HTML/CSS","Wordpress","Database modeling"]}]')},66:function(e){e.exports=JSON.parse('[{"name":"Hogeschool Utrecht","imageUrl":"hu.png","course":"HBO, OPEN-ICT","enrollmentYear":"2019","graduationYear":"ongoing"},{"name":"Scalda","imageUrl":"scalda2.png","course":"MBO 4, Mediadevelopment","enrollmentYear":"2013","graduationYear":"2019"},{"name":"Reynaert College","imageUrl":"reynaert.png","course":"VMBO-K, Electrical engineering","enrollmentYear":"2009","graduationYear":"2013"}]')},67:function(e){e.exports=JSON.parse('[{"description":"Frontend web developer","imageUrl":"creates.png","companyName":"Creates","startDate":"apr. 2019","endDate":"aug. 2020"},{"description":"Full stack web developer","imageUrl":"nederdesign.png","companyName":"Nederdesign","startDate":"sep. 2018","endDate":"jan. 2019","internship":true},{"description":"Full stack web developer","imageUrl":"tim_online.png","companyName":"Tim_online","startDate":"feb. 2017","endDate":"may. 2017","internship":true},{"description":"Assistant cook","imageUrl":"boskafeeke.png","companyName":"Boskafeeke GRILL","startDate":"aug. 2014","endDate":"jan. 2018"},{"description":"Cashier","imageUrl":"action.jpg","companyName":"Action BV","startDate":"nov. 2013","endDate":"jul. 2014"}]')}},[[115,1,2]]]);
//# sourceMappingURL=main.314b677b.chunk.js.map