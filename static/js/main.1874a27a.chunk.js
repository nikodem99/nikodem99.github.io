(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(A,e,t){},37:function(A,e,t){},65:function(A,e,t){"use strict";t.r(e);var a=t(2),c=t(11),i=t.n(c),n=(t(34),t(35),t(36),t(37),t(24)),s=t(1),r=t(4),l=t(0);var g=function(A){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:23.335,height:23.335,...A,children:Object(l.jsxs)("g",{"data-name":"Group 99",fill:"#fff",children:[Object(l.jsx)("path",{"data-name":"Rectangle 58",d:"M21.213 0l2.121 2.121L2.121 23.335 0 21.213z"}),Object(l.jsx)("path",{"data-name":"Rectangle 59",d:"M23.334 21.213l-2.121 2.121L-.001 2.121 2.121 0z"})]})})};var d=function(A){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:27,height:40,viewBox:"0 0 27 40",...A,children:Object(l.jsxs)("g",{"data-name":"Group 101",transform:"translate(-375 -21)",children:[Object(l.jsx)("rect",{"data-name":"Rectangle 16",width:13,height:8,rx:4,transform:"translate(375 53)",fill:"#f40051"}),Object(l.jsx)("rect",{"data-name":"Rectangle 11",width:20,height:8,rx:4,transform:"translate(382 21)",fill:"#f2b300"}),Object(l.jsx)("rect",{"data-name":"Rectangle 15",width:20,height:8,rx:4,transform:"translate(382 37)",fill:"#7620ff"}),Object(l.jsx)("rect",{"data-name":"Rectangle 12",width:8,height:8,rx:4,transform:"translate(375 29)",fill:"#4cd5c5"})]})})};function o(A){let{sidebarOpen:e,toggleSidebar:t}=A;return Object(l.jsxs)(j,{className:"animate darkBg",sidebarOpen:e,children:[Object(l.jsxs)(x,{className:"flexSpaceCenter",children:[Object(l.jsxs)("div",{className:"flexNullCenter",children:[Object(l.jsx)(d,{}),Object(l.jsx)("h1",{className:"whiteColor font20",style:{marginLeft:"15px"},children:"fanatic"})]}),Object(l.jsx)(D,{onClick:()=>t(!e),className:"animate pointer",children:Object(l.jsx)(g,{})})]}),Object(l.jsxs)(m,{className:"flexNullCenter flexColumn",children:[Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"home",spy:!0,smooth:!0,offset:-60,children:"Home"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"services",spy:!0,smooth:!0,offset:-60,children:"Services"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"projects",spy:!0,smooth:!0,offset:-60,children:"Projects"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"blog",spy:!0,smooth:!0,offset:-60,children:"Blog"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"pricing",spy:!0,smooth:!0,offset:-60,children:"Pricing"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{onClick:()=>t(!e),activeClass:"active",className:"whiteColor",style:{padding:"10px 15px"},to:"contact",spy:!0,smooth:!0,offset:-60,children:"Contact"})})]}),Object(l.jsxs)(m,{className:"flexSpaceCenter",children:[Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)("a",{href:"/",style:{padding:"10px 30px 10px 0"},className:"whiteColor",children:"Log in"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer flexCenter",children:Object(l.jsx)("a",{href:"/",className:"radius8 lightBg",style:{padding:"10px 15px"},children:"Get Started"})})]})]})}const j=s.a.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${A=>A.sidebarOpen?"0px":"-400px"};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`,x=s.a.div`
  padding: 20px 0;
`,D=s.a.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`,m=s.a.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;function p(A){let{toggleSidebar:e}=A;return Object(l.jsx)(I,{className:"darkBg",onClick:()=>e(!1)})}const I=s.a.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.8;
`;var h=function(A){return Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:22,viewBox:"0 0 28 22",...A,children:[Object(l.jsx)("path",{"data-name":"Line 5",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 1h26"}),Object(l.jsx)("path",{"data-name":"Line 6",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 11h26"}),Object(l.jsx)("path",{"data-name":"Line 7",fill:"none",stroke:"#0b093b",strokeLinecap:"round",strokeWidth:2,d:"M1 21h26"})]})};function N(){const[A,e]=Object(a.useState)(window.scrollY),[t,c]=Object(a.useState)(!1);return Object(a.useEffect)((()=>(window.addEventListener("scroll",(()=>e(window.scrollY))),()=>{window.removeEventListener("scroll",(()=>e(window.scrollY)))})),[A]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{sidebarOpen:t,toggleSidebar:c}),t&&Object(l.jsx)(p,{toggleSidebar:c}),Object(l.jsx)(f,{className:"flexCenter animate whiteBg",style:A>100?{height:"60px"}:{height:"80px"},children:Object(l.jsxs)(b,{className:"container flexSpaceCenter",children:[Object(l.jsxs)(r.Link,{className:"pointer flexNullCenter",to:"home",smooth:!0,children:[Object(l.jsx)(d,{}),Object(l.jsx)("h1",{style:{marginLeft:"15px"},className:"font20 extraBold",children:"fanatic"})]}),Object(l.jsx)(w,{className:"pointer",onClick:()=>c(!t),children:Object(l.jsx)(h,{})}),Object(l.jsxs)(y,{className:"flexNullCenter",children:[Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"home",spy:!0,smooth:!0,offset:-80,children:"Home"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"services",spy:!0,smooth:!0,offset:-80,children:"Services"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"projects",spy:!0,smooth:!0,offset:-80,children:"Projects"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"blog",spy:!0,smooth:!0,offset:-80,children:"Blog"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"pricing",spy:!0,smooth:!0,offset:-80,children:"Pricing"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)(r.Link,{activeClass:"active",style:{padding:"10px 15px"},to:"contact",spy:!0,smooth:!0,offset:-80,children:"Contact"})})]}),Object(l.jsxs)(B,{className:"flexNullCenter",children:[Object(l.jsx)("li",{className:"semiBold font15 pointer",children:Object(l.jsx)("a",{href:"/",style:{padding:"10px 30px 10px 0"},children:"Log in"})}),Object(l.jsx)("li",{className:"semiBold font15 pointer flexCenter",children:Object(l.jsx)("a",{href:"/",className:"radius8 lightBg",style:{padding:"10px 15px"},children:"Get Started"})})]})]})})]})}const f=s.a.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`,b=s.a.div`
  position: relative;
  height: 100%;
`,w=s.a.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`,y=s.a.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`,B=s.a.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;function Q(A){let{title:e,action:t,border:a}=A;return Object(l.jsx)(O,{className:"animate pointer radius8",onClick:t?()=>t():null,border:a,children:e})}const O=s.a.button`
  border: 1px solid ${A=>A.border?"#707070":"#7620ff"};
  background-color: ${A=>A.border?"transparent":"#7620ff"};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${A=>A.border?"#707070":"#fff"};
  :hover {
    background-color: ${A=>A.border?"transparent":"#580cd2"};
    border: 1px solid #7620ff;
    color: ${A=>A.border?"#7620ff":"#fff"};
  }
`;var k=function(A){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:42.282,height:34.626,viewBox:"0 0 42.282 34.626",...A,children:Object(l.jsx)("path",{"data-name":"Path 131",d:"M18.966.004l-8 34.626H0L4 .004zm23.316 0l-7.83 34.622H23.49L27.49 0z",fill:"#f2b300"})})};var P=function(A){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:186.223,height:249.21,viewBox:"0 0 186.223 249.21",...A,children:Object(l.jsxs)("g",{"data-name":"Group 102",fill:"#bebdce",children:[Object(l.jsxs)("g",{"data-name":"Group 59",transform:"translate(-.09 .208)",children:[Object(l.jsx)("ellipse",{"data-name":"Ellipse 1",cx:4,cy:5,rx:4,ry:5,transform:"translate(.228 -.08)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 2",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 39.806)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 3",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 79.819)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 4",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 119.833)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 5",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 159.846)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 6",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 199.859)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 7",cx:4.565,cy:4.565,r:4.565,transform:"translate(.09 239.873)"})]}),Object(l.jsxs)("g",{"data-name":"Group 60",transform:"translate(35.419)",children:[Object(l.jsx)("circle",{"data-name":"Ellipse 8",cx:4.565,cy:4.565,r:4.565}),Object(l.jsx)("circle",{"data-name":"Ellipse 9",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 10",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 11",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 12",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 13",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 14",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(l.jsxs)("g",{"data-name":"Group 61",transform:"translate(70.838)",children:[Object(l.jsx)("circle",{"data-name":"Ellipse 15",cx:4.565,cy:4.565,r:4.565}),Object(l.jsx)("circle",{"data-name":"Ellipse 16",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 17",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 18",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 19",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 20",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 21",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(l.jsxs)("g",{"data-name":"Group 62",transform:"translate(106.256)",children:[Object(l.jsx)("circle",{"data-name":"Ellipse 22",cx:4.565,cy:4.565,r:4.565}),Object(l.jsx)("circle",{"data-name":"Ellipse 23",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 24",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 25",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 26",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 27",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 28",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(l.jsxs)("g",{"data-name":"Group 63",transform:"translate(141.675)",children:[Object(l.jsx)("circle",{"data-name":"Ellipse 29",cx:4.565,cy:4.565,r:4.565}),Object(l.jsx)("circle",{"data-name":"Ellipse 30",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 31",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 32",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 33",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 34",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 35",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]}),Object(l.jsxs)("g",{"data-name":"Group 64",transform:"translate(177.094)",children:[Object(l.jsx)("circle",{"data-name":"Ellipse 36",cx:4.565,cy:4.565,r:4.565}),Object(l.jsx)("circle",{"data-name":"Ellipse 37",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 40.014)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 38",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 80.027)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 39",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 120.041)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 40",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 160.054)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 41",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 200.067)"}),Object(l.jsx)("circle",{"data-name":"Ellipse 42",cx:4.565,cy:4.565,r:4.565,transform:"translate(0 240.081)"})]})]})})};function u(){return Object(l.jsxs)(C,{id:"home",className:"container flexSpaceCenter",children:[Object(l.jsx)(v,{className:"flexCenter",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"extraBold font60",children:"Jeste\u015bmy agencja digital marketingu."}),Object(l.jsx)(H,{className:"font13 semiBold",children:"Specjalizujemy si\u0119 w tworzeniu skutecznych strategii marketingowych, kt\xf3re pomog\u0105 Twojej marce osi\u0105gn\u0105\u0107 sukces w internecie."}),Object(l.jsx)(X,{children:Object(l.jsx)(Q,{title:"Kontakt"})})]})}),Object(l.jsxs)(z,{children:[Object(l.jsxs)(E,{children:[Object(l.jsx)(Z,{className:"radius8",src:"data:image/png;base64,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",alt:"office",style:{zIndex:9}}),Object(l.jsxs)(M,{className:"flexCenter darkBg radius8",children:[Object(l.jsx)(W,{children:Object(l.jsx)(k,{})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"font15 whiteColor",children:Object(l.jsx)("em",{children:"Przyjaciele, kt\xf3rych pragniemy, to marzenia i bajki. Przyja\u017a\u0144 wymaga umiej\u0119tno\u015bci radzenia sobie bez niej."})}),Object(l.jsx)("p",{className:"font13 orangeColor textRight",style:{marginTop:"10px"},children:"Ralph Waldo Emerson"})]})]}),Object(l.jsx)(U,{children:Object(l.jsx)(P,{})})]}),Object(l.jsx)(S,{className:"lightBg"})]})]})}const C=s.a.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,v=s.a.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`,z=s.a.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`,H=s.a.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`,X=s.a.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`,S=s.a.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`,E=s.a.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`,Z=s.a.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`,M=s.a.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`,W=s.a.div`
  position: absolute;
  left: -20px;
  top: -10px;
`,U=s.a.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;var T=t(13),F=t.n(T),L=t.p+"static/media/logo01.f0f3765f.svg",V=t.p+"static/media/logo02.ef3dc476.svg",K=t.p+"static/media/logo03.ed39a486.svg",J=t.p+"static/media/logo04.d4601325.svg",R=t.p+"static/media/logo05.e583f97d.svg",Y=t.p+"static/media/logo06.7fcfefca.svg";function G(){return Object(l.jsx)("div",{children:Object(l.jsxs)(F.a,{infinite:!0,speed:500,slidesToShow:6,slidesToScroll:2,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}],children:[Object(l.jsx)(q,{className:"flexCenter",children:Object(l.jsx)($,{src:L,alt:"client logo"})}),Object(l.jsx)(q,{className:"flexCenter",children:Object(l.jsx)($,{src:V,alt:"client logo"})}),Object(l.jsx)(q,{className:"flexCenter",children:Object(l.jsx)($,{src:K,alt:"client logo"})}),Object(l.jsx)(q,{className:"flexCenter",children:Object(l.jsx)($,{src:J,alt:"client logo"})}),Object(l.jsx)(q,{className:"flexCenter",children:Object(l.jsx)($,{src:R,alt:"client logo"})}),Object(l.jsx)(q,{className:"flexCenter",children:Object(l.jsx)($,{src:Y,alt:"client logo"})}),Object(l.jsx)(q,{className:"flexCenter",children:Object(l.jsx)($,{src:K,alt:"client logo"})}),Object(l.jsx)(q,{className:"flexCenter",children:Object(l.jsx)($,{src:J,alt:"client logo"})}),Object(l.jsx)(q,{className:"flexCenter",children:Object(l.jsx)($,{src:L,alt:"client logo"})}),Object(l.jsx)(q,{className:"flexCenter",children:Object(l.jsx)($,{src:V,alt:"client logo"})})]})})}const q=s.a.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`,$=s.a.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;var _=function(A){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:35.459,height:43.42,viewBox:"0 0 35.459 43.42",...A,children:Object(l.jsxs)("g",{"data-name":"Group 70",children:[Object(l.jsx)("path",{"data-name":"Path 121",d:"M24.571 12.115H4.778a3.425 3.425 0 01-3.412-3.411V4.78a3.425 3.425 0 013.411-3.415h19.792a3.427 3.427 0 013.413 3.412v3.924a3.424 3.424 0 01-3.408 3.414z",fill:"#f2b300"}),Object(l.jsx)("path",{"data-name":"Path 122",d:"M30.981 4.552h-1.647a4.782 4.782 0 00-4.765-4.55H4.779A4.787 4.787 0 00.001 4.781v3.922a4.787 4.787 0 004.778 4.778h19.79a4.785 4.785 0 004.776-4.778V7.282h1.636a1.836 1.836 0 011.748 1.876 4.152 4.152 0 01-2.31 3.309l-13.158 5.54a6.889 6.889 0 00-3.98 5.995v1.5a4.784 4.784 0 00-3.555 4.612v8.531a4.782 4.782 0 004.778 4.775h.339a4.784 4.784 0 004.776-4.776v-8.531a4.782 4.782 0 00-3.611-4.626V24a4.292 4.292 0 012.311-3.478l13.16-5.542a6.75 6.75 0 003.98-5.824 4.553 4.553 0 00-4.478-4.604zm-4.364 4.15a2.069 2.069 0 01-2.048 2.047H4.779a2.069 2.069 0 01-2.048-2.047V4.78a2.07 2.07 0 012.048-2.049h19.79a2.07 2.07 0 012.048 2.049v3.922zM16.89 30.114v8.531a2.067 2.067 0 01-2.047 2.046h-.339a2.07 2.07 0 01-2.05-2.046v-8.531a2.071 2.071 0 012.05-2.048h.339a2.066 2.066 0 012.047 2.047z",fill:"#0b093b"})]})})};var AA=function(A){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:43.336,height:32.531,viewBox:"0 0 43.336 32.531",...A,children:Object(l.jsxs)("g",{"data-name":"Group 71",children:[Object(l.jsx)("path",{"data-name":"Path 123",d:"M38.562 24.112H4.778a3.428 3.428 0 01-3.414-3.406V4.776a3.424 3.424 0 013.409-3.412h33.784a3.425 3.425 0 013.41 3.41V20.7a3.425 3.425 0 01-3.407 3.412z",fill:"#f40051"}),Object(l.jsx)("path",{"data-name":"Path 124",d:"M38.559 0H4.778A4.785 4.785 0 000 4.776v15.922a4.786 4.786 0 004.778 4.778h13.507v4.322h-3.926a.684.684 0 00-.681.683v1.366a.684.684 0 00.681.683h14.619a.685.685 0 00.682-.683v-1.366a.685.685 0 00-.682-.683h-3.926v-4.322H38.56a4.786 4.786 0 004.776-4.778V4.776A4.785 4.785 0 0038.559 0zM22.321 29.8h-1.308v-4.322h1.308zm18.283-9.1a2.068 2.068 0 01-2.045 2.048H4.778a2.07 2.07 0 01-2.05-2.048V4.778a2.069 2.069 0 012.048-2.047h33.782a2.069 2.069 0 012.045 2.047z",fill:"#0b093b"})]})})};var eA=function(A){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:39.581,height:39.58,viewBox:"0 0 39.581 39.58",...A,children:Object(l.jsxs)("g",{"data-name":"Group 72",children:[Object(l.jsx)("path",{"data-name":"Path 127",d:"M34.807 38.214H4.778a3.424 3.424 0 01-3.412-3.41V14.548a3.426 3.426 0 013.408-3.4h30.029a3.423 3.423 0 013.41 3.411v20.246a3.423 3.423 0 01-3.408 3.413z",fill:"#4cd5c5"}),Object(l.jsxs)("g",{"data-name":"Group 69",fill:"#0b093b",children:[Object(l.jsx)("path",{"data-name":"Path 128",d:"M34.803 0H4.777A4.785 4.785 0 000 4.777v30.025a4.787 4.787 0 004.777 4.778h30.026a4.785 4.785 0 004.776-4.778V4.777A4.785 4.785 0 0034.803 0zm2.046 34.8a2.068 2.068 0 01-2.046 2.048H4.777A2.07 2.07 0 012.729 34.8V14.547a2.07 2.07 0 012.048-2.04h30.026a2.069 2.069 0 012.046 2.05zm0-24.552a4.775 4.775 0 00-2.046-.47H4.777a4.783 4.783 0 00-2.048.47V4.774a2.069 2.069 0 012.047-2.047h30.026a2.068 2.068 0 012.046 2.047z"}),Object(l.jsx)("path",{"data-name":"Path 129",d:"M25.905 3.182a3.072 3.072 0 103.071 3.072 3.075 3.075 0 00-3.071-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.314 1.314 0 01-1.305 1.306z"}),Object(l.jsx)("path",{"data-name":"Path 130",d:"M32.673 3.182a3.072 3.072 0 103.07 3.072 3.073 3.073 0 00-3.07-3.072zm0 4.378a1.307 1.307 0 111.307-1.305 1.315 1.315 0 01-1.305 1.306z"})]})]})})};var tA=function(A){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:39.581,height:39.58,viewBox:"0 0 39.581 39.58",...A,children:Object(l.jsxs)("g",{"data-name":"Group 73",children:[Object(l.jsx)("path",{"data-name":"Path 125",d:"M34.806 34.007h-2.5v-1.362a3.43 3.43 0 00-3.414-3.414H10.696a3.434 3.434 0 00-3.413 3.416v1.362h-2.5A3.429 3.429 0 011.369 30.6V20.417a3.428 3.428 0 013.411-3.412h30.028a3.428 3.428 0 013.414 3.409v10.181a3.429 3.429 0 01-3.411 3.414z",fill:"#7620ff"}),Object(l.jsx)("path",{"data-name":"Path 126",d:"M34.804 15.64h-3.525V4.777A4.784 4.784 0 0026.504 0H13.081a4.785 4.785 0 00-4.775 4.777v10.862H4.781a4.784 4.784 0 00-4.778 4.777v10.177a4.785 4.785 0 004.778 4.776h1.175a4.782 4.782 0 004.74 4.208h18.2a4.785 4.785 0 004.738-4.209h1.175a4.786 4.786 0 004.778-4.776V20.417a4.784 4.784 0 00-4.783-4.777zM11.034 4.778A2.069 2.069 0 0113.08 2.73h13.423a2.068 2.068 0 012.046 2.048V15.64H11.034zm17.857 32.073h-18.2a2.066 2.066 0 01-1.955-1.479 1.944 1.944 0 01-.094-.568v-2.159a2.07 2.07 0 012.049-2.046h18.2a2.068 2.068 0 012.047 2.046v2.159a1.943 1.943 0 01-.093.568 2.068 2.068 0 01-1.954 1.479zm7.962-6.256a2.072 2.072 0 01-2.049 2.048h-1.137a4.787 4.787 0 00-4.776-4.776h-18.2a4.788 4.788 0 00-4.778 4.778H4.776a2.073 2.073 0 01-2.049-2.048v-10.18a2.072 2.072 0 012.049-2.049h30.025a2.071 2.071 0 012.049 2.049z",fill:"#0b093b"})]})})};function aA(A){let e,{icon:t,title:a,subtitle:c}=A;switch(t){case"roller":e=Object(l.jsx)(_,{});break;case"monitor":e=Object(l.jsx)(AA,{});break;case"browser":e=Object(l.jsx)(eA,{});break;case"printer":e=Object(l.jsx)(tA,{});break;default:e=Object(l.jsx)(_,{})}return Object(l.jsxs)(cA,{className:"flex flexColumn",children:[Object(l.jsx)(iA,{children:e}),Object(l.jsx)(nA,{className:"font20 extraBold",children:a}),Object(l.jsx)(sA,{className:"font13",children:c})]})}const cA=s.a.div`
  width: 100%;
`,iA=s.a.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`,nA=s.a.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`,sA=s.a.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;function rA(){return Object(l.jsxs)(lA,{id:"services",children:[Object(l.jsx)("div",{className:"lightBg",style:{padding:"50px 0"},children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(G,{})})}),Object(l.jsxs)("div",{className:"whiteBg",style:{padding:"60px 0"},children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(oA,{children:[Object(l.jsx)("h1",{className:"font40 extraBold",children:"Nasze niesamowite us\u0142ugi"}),Object(l.jsxs)("p",{className:"font13",children:["Oferujemy kompleksowe us\u0142ugi, kt\xf3re pomog\u0105 Twojej marce zaistnie\u0107 w cyfrowym \u015bwiecie i przyci\u0105gn\u0105\u0107 odpowiednich klient\xf3w.",Object(l.jsx)("br",{}),"Od strategii marketingowych, przez tworzenie stron internetowych, po kampanie w social media \u2013 jeste\u015bmy tu, by wspiera\u0107 Tw\xf3j sukces."]})]}),Object(l.jsxs)(gA,{className:"flex",children:[Object(l.jsx)(dA,{children:Object(l.jsx)(aA,{icon:"roller",title:"Projekt graficznyn",subtitle:"Tworzymy unikalne projekty graficzne, kt\xf3re wyr\xf3\u017cniaj\u0105 Twoj\u0105 mark\u0119 i przyci\u0105gaj\u0105 uwag\u0119. Nasze rozwi\u0105zania s\u0105 dostosowane do indywidualnych potrzeb, \u0142\u0105cz\u0105c estetyk\u0119 z funkcjonalno\u015bci\u0105."})}),Object(l.jsx)(dA,{children:Object(l.jsx)(aA,{icon:"monitor",title:"Projektowanie stron internetowychn",subtitle:"Specjalizujemy si\u0119 w tworzeniu nowoczesnych i responsywnych stron internetowych, kt\xf3re \u0142\u0105cz\u0105 atrakcyjny design z doskona\u0142\u0105 funkcjonalno\u015bci\u0105. Pomagamy wyr\xf3\u017cni\u0107 Twoj\u0105 mark\u0119 w cyfrowym \u015bwiecie."})}),Object(l.jsx)(dA,{children:Object(l.jsx)(aA,{icon:"browser",title:"Development",subtitle:"Oferujemy pe\u0142en zakres us\u0142ug developerskich, od front-endu po back-end. Tworzymy solidne i skalowalne rozwi\u0105zania, kt\xf3re s\u0105 fundamentem sukcesu Twojej obecno\u015bci online."})}),Object(l.jsx)(dA,{children:Object(l.jsx)(aA,{icon:"Printing House",title:"Print",subtitle:"\u015awiadczymy kompleksowe us\u0142ugi drukarskie, oferuj\u0105c wysok\u0105 jako\u015b\u0107 i precyzj\u0119. Realizujemy projekty od wizyt\xf3wek po pe\u0142noformatowe wydruki, zapewniaj\u0105c profesjonalne wsparcie na ka\u017cdym etapie."})})]})]}),Object(l.jsx)("div",{className:"lightBg",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(jA,{className:"flexSpaceCenter",children:[Object(l.jsxs)(DA,{children:[Object(l.jsx)("h4",{className:"font15 semiBold",children:"Kilka s\u0142\xf3w o firmie"}),Object(l.jsx)("h2",{className:"font40 extraBold",children:"Studium kreatywno\u015bci"}),Object(l.jsxs)("p",{className:"font12",children:["Nasza agencja to przestrze\u0144, gdzie pomys\u0142y nabieraj\u0105 realnych kszta\u0142t\xf3w. \u0141\u0105czymy innowacyjno\u015b\u0107 z praktycznym podej\u015bciem, by tworzy\u0107 wyj\u0105tkowe projekty dla naszych klient\xf3w.",Object(l.jsx)("br",{}),"Wierzymy, \u017ce kreatywno\u015b\u0107 to klucz do sukcesu, a nasze do\u015bwiadczenie pozwala nam kreowa\u0107 wyj\u0105tkowe rozwi\u0105zania, kt\xf3re wyr\xf3\u017cniaj\u0105 si\u0119 na rynku."]}),Object(l.jsxs)(xA,{className:"flexNullCenter",style:{margin:"30px 0"},children:[Object(l.jsx)("div",{style:{width:"190px"},children:Object(l.jsx)(Q,{title:"Rozpocznij",action:()=>alert("clicked")})}),Object(l.jsx)("div",{style:{width:"190px",marginLeft:"15px"},children:Object(l.jsx)(Q,{title:"Kontakt",action:()=>alert("clicked"),border:!0})})]})]}),Object(l.jsx)(mA,{children:Object(l.jsxs)(pA,{children:[Object(l.jsxs)("div",{className:"flexNullCenter",children:[Object(l.jsx)(IA,{className:"flexCenter",children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"office"})}),Object(l.jsx)(hA,{children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"office"})})]}),Object(l.jsxs)("div",{className:"flexNullCenter",children:[Object(l.jsx)(NA,{children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAB9CAIAAAD1HHDCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABGNJREFUeNrsnE1IlFEUhivclO4Mc1ELKWoj5E6sViPUpiEwqFYVCEUGgglGIC1CioIMgoqEIF3EIBTBtEnQXUU7B2aTKC5sYZI7p7a9zaHDdeb7pvGbYfrheREZ7/997jnnnjsLt6dOXdqG6qcdIAAoQAGKAApQgCKAAhSgCKAABShAEUABClAEUIACFAEUoABFAAUoQAGKAApQgCKAAhSgCKAABSgCKEABClAEUIACFAEUoABFAAUoQBFAAQpQgKLkaqql85621qPdh1uad+nz27kPX9bWrby5eefR7q72tlZ9zuUX9OPtT6R6Dnce3Ch8z+U/qUuh8L2Om4lbj2bUevZ37FXJfH5hZu5D2EVLihxtKvOmQUCNl36OdXd5oahpudqPVdmupMlM1oAO9J85ne719up74Vz62uj9peXPNXKssB5V3bpxpavzkJefSB3RMjSvnaVOXcuoI9AkLi9Y1wcvhqt3iZpW7DRdfelUSNPHGR8b1p5rBFphPSODF0OapgMd+0TZjffPu7xOfnXta3vb7vIq2UV7KqJce7APG4VvL7Oz7T8d7YixkMe9ys7Vsoe49eioLOxIi8sr7z7OC5/x1W9FgNA5NMLbIBQ0OoZOZt60NO989zH3YuJ2WK41ra6ta+ky1dA07j2cVNX5cycfP5u2bSh4WYNIEH4AGs1CYVgoOiXBN3I9anN5aOx4qkdndvPOE+sy+/qp1Yr1ZqDryXy8PkBnYg4zvILKq4ZHx8vLZbMlJdq5TMlCmwzn0tCYSjwUzuc/lY8zE29cqoqs3Sjy3f/rkMRX5y2sS8srtYT1pm1/Qu56kjYQeSHokpFJyn4VB5USWHvRl7EnnlfI/PNicd6WXxFcE/ntpDNzi/4H8lAFL78TiqEtF9ns3sPnZry6ba72n/VCT4a2Kvm+I1Mcr8BLh6fb8t+wUNHUWi0NKJrb87iW8julXI6yGKDfx9GvhqYyAT9FjeyzhM3k+BbT5RxKARNM11CguohCmr9NQnX7Kxmwu0jtHz2bTjav0IQ0PQmVHm8eU1ffxINRY6rwmgBo41zecuzqaVqo9ZtdHcsz2Sp9YiSGps+iNn4friYNKQ21UNGUbTodeZwAWVItuJFk1WVk8EJYogiohGxLV3BJhJnKZMOErDjmSTmBQKtK9758KEyZ/16gshFfqBRGxsg0yLqY62m3SrnMPGXjlkVVOa/TNBu/dWMgSF2zSjDsfVF8Ow2U9E0Wrxvk8i1bfF/qDrGnpF1c2rxlOWFyU+WrtEKtkOmii6y6mzSdqNVCZV+RDuKOaZ5VwU/Lq+zLDhtZ7ytrIKx6fZkXl7waK6zH/yyXLUxZrcJIX7rX89z5/MKr7Gzc8+S32s4/ta6v+IIZoAAFKAIoQAGKAApQgCKAAhSgAEUABShAEUABClAEUIACFAEUoAAFKAIoQAGKAApQgCKAAhSgCKAABShAEUABClAEUIACFAEUoABFAAUoQAGKAArQ/1Y/BBgAfNsg+EFcj+gAAAAASUVORK5CYII=",alt:"office"})}),Object(l.jsx)(fA,{children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"office"})})]})]})})]})})})]})]})}const lA=s.a.section`
  width: 100%;
`,gA=s.a.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`,dA=s.a.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`,oA=s.a.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`,jA=s.a.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`,xA=s.a.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`,DA=s.a.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`,mA=s.a.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`,pA=s.a.div`
  width: 100%;
`,IA=s.a.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`,hA=s.a.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`,NA=s.a.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`,fA=s.a.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;function bA(A){let{img:e,title:t,text:a,action:c}=A;return Object(l.jsxs)(wA,{children:[Object(l.jsx)(yA,{className:"aniamte pointer",onClick:c?()=>c():null,children:Object(l.jsx)("img",{className:"radius8",src:e,alt:"project"})}),Object(l.jsx)("h3",{className:"font20 extraBold",children:t}),Object(l.jsx)("p",{className:"font13",children:a})]})}const wA=s.a.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`,yA=s.a.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;function BA(){return Object(l.jsxs)(QA,{id:"projects",children:[Object(l.jsx)("div",{className:"whiteBg",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(OA,{children:[Object(l.jsx)("h1",{className:"font40 extraBold",children:"Nasze niesamowite projekty"}),Object(l.jsxs)("p",{className:"font13",children:["Realizujemy projekty, kt\xf3re inspiruj\u0105 i przyci\u0105gaj\u0105 uwag\u0119. Ka\u017cdy nasz projekt jest wynikiem indywidualnego podej\u015bcia i dba\u0142o\u015bci o ka\u017cdy detal, aby spe\u0142nia\u0142 oczekiwania naszych klient\xf3w.",Object(l.jsx)("br",{}),"Od koncepcji po realizacj\u0119 \u2013 tworzymy z pasj\u0105, dbaj\u0105c o najwy\u017csz\u0105 jako\u015b\u0107."]})]}),Object(l.jsxs)("div",{className:"row textCenter",children:[Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(bA,{img:"data:image/png;base64,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",title:"Niesamowity projekt",text:"Ka\u017cdy projekt, kt\xf3ry realizujemy, jest unikalny i dopasowany do potrzeb klienta. \u0141\u0105czymy kreatywno\u015b\u0107 z technologi\u0105, aby tworzy\u0107 rozwi\u0105zania, kt\xf3re naprawd\u0119 wyr\xf3\u017cniaj\u0105 si\u0119 na rynku.",action:()=>alert("clicked")})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(bA,{img:"data:image/png;base64,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",title:"Wspania\u0142y projekt",text:"Tworzymy projekty, kt\xf3re \u0142\u0105cz\u0105 estetyk\u0119 i funkcjonalno\u015b\u0107, spe\u0142niaj\u0105c najwy\u017csze standardy jako\u015bci. Ka\u017cdy detal ma znaczenie, aby osi\u0105gn\u0105\u0107 najlepszy efekt dla Twojej marki.",action:()=>alert("clicked")})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(bA,{img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAE1CAIAAABiOWxDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACKdJREFUeNrs219olecdwHG7P4VNaUlXrAW9CIZ1MMHQsUmqvegZmBtdQWENFIwgBIoQVgVLaWqhtQ0VtENQh0ywHR2usNzojcIyGP5BNpiF9mLD4kV7EUNtS5nbRXuxX8/D+fHkPSdutCYY+HwIcpK855zX6Pv19zzneE/rybFlAAvpW34EgNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAEIDIDSA0AAIDSA0gNAACA0gNIDQAAgNIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDCA2A0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgPcDb7jR7DkrF/3w/jo+a2Z2Zvnpy9vbg2tWvmDnge8+94/4yM/3bhh/dr+NeX2H8/86dat/3zz09sxsmW+b52bvnxj9mbj2eP38sH1j65d//DilavdJxDHrF/3yNr+1XHHOCYe4Y6cJELD/w7N6MjWnt+6+t4/IjTDraHBdY/0PODN02cyNMuXf2/f+M4Vy78fty/0usi/nvnOrWSuhCae+uXnn8mTLDdmZj/eP3k8opOnd/jA3oFOB8Nw+8H3TBzKY7B04m6XlfnXrX8fPHJqMZ+6rkxatfLBKEv0JY+pK1PECccxD80zr2Gi4Y6JuSAGk/w0Vh+bNgzmt+LXxj/4cXHmFRtNySVJ3ivmiDu4HqnPLWzf+vPMWax9ykSWlYkRLM45FnrDrcfKqcbxb50+G6dXHxMrpvgtxLfKMaMjWw4eedPfBKFhYUNTL3/iX/hyO5Y/cYnGjWMn36mP39waem58Z+6S5KIpt2bqXZuGmB1yuycyUXpUf7H7vuUc8qlLZUIsecrdt7V7UQqyd+JwuT0ze7OsuUpocuco1lPlmPPLLkeqyjFruyYdhIaFXf6UaSUqMN/yZ3vnwj43falc6rlo+mrjozUU4ZiaJzc3Zm/uGx8tw0WE7KXJ4xGpE29MlLvXOz7d1vavzsC9fuRUzlmDnZ3sUr28XSISjxx3zK/PVJvHH7QHojAgNPZoWDQ7Rrbk8icvwu6rfaB6XamxaCoXdnwaY9G2ra2ejxCLlLLgisPimIxUpK0eXhrqUSvuXr/YlI2rv9g4IJd4cfLZnXoU8qcvNCySOi7Drcd+f+K1ehZojDPRhZgp6kVTw+5dT/V81TwScLSzFotjSqQiBPsnj9/m3GJ0ymGk7ODGZFSWXfUasL5L5iOOuXjl3bzviTdePHRgz9snXs1dm4tXrvrTFxoWSVyNMaTk9RnX5MvPP9MYKzZ2hpfOODOYA8XRk3/4xdO/2j95LMeHHBkazk9fvjD32o701DPIPKPQqTi3mdmPM4WbW0P1vRovHuXkFcfER72pHIlZtfLB3LWp11wIDQvu2Ml39k4cHnv2lfJpXI31UDPc2YuNlJQpIDdxIwFTZ6Zj7oha5cAy0DUQ1dWoR4/z/8elHgNUnNvTYy9kpDZWS7b6ZBpLqiLWZRHB7FS9lPOePaFhkcR0kG85qV/Pri/XXDdd/Mbvx9teDTsxX8z31uQcVTZuWN+9xFvRPuEcwaKD9W+ne0kVEYxO7Zk4lN+6/Wtk3LW86rT0xEW+Y2RLXO0xKUy1F0T1FZs7I3FYLjfKuqn+btx929ZWDDUxAY12/tPAtXnecds+Zs77ffeNj449e6A7XtG+SFKpUllerWh/JddEpXpltyUWU9euf1jeR7N71y/LMRe69l/y/zTEdNN4kw5Cw0KJBUi5UDdtGNw0dzESw0JugmR9yjZwjjaxjCpTz+5dT8VHffepTo8a7citnwhW9Gugf00kbN/4zpe69oPLO+7K4z/Xtetc9lbi1zimRLBxAu0V05yURA1zD9iiydKJxRP/ql/r9WJ2FCTfqhd1KO+1rceZZe0Xg/ZPHs/d37kVuNRzVRKzRolCPGk89cEjp/LV7np9lDPL0blvF+x+/NucQ/12m7IEy0nKomlJ+3b/j37ip7C0fPHFl2fP/aWMDw/03b+s80JMXL03Zj8px/zs0R/39d0XC6X4eOv02bhL3YI/X/hbrGhiwXLvvd8tc1AU6vTUuZ6Lpice/2l5nF//5u14/E8/+/yTzz6Pu8dX1qx++K9/f79+8LJhFHNTX9/9D/TdVx4/VkO//d1U/fjxII1ziGPi8S91XtUuSmVmvvp/2x/FGTaeiCXkntaTY34KgKUTIDQAQgMIDSA0AEIDCA0gNABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIDYDQAEIDIDSA0ABCAyA0gNAAQgMgNIDQAAgNIDSA0AAIDSA0gNAACA0gNABCAwgNIDQAQgMIDSA0AEIDCA2A0ABCAwgNgNAAQgMIjR8BIDSA0AAIDSA0gNAACA1w9/uvAAMAVyEAUWZlYN0AAAAASUVORK5CYII=",title:"Niezwyk\u0142y projekt",text:"Realizujemy projekty, kt\xf3re \u0142\u0105cz\u0105 innowacyjno\u015b\u0107 z funkcjonalno\u015bci\u0105, dbaj\u0105c o ka\u017cdy detal. Nasze podej\u015bcie jest kreatywne i strategiczne, aby Twoja marka wyr\xf3\u017cnia\u0142a si\u0119 na rynku.",action:()=>alert("clicked")})})]}),Object(l.jsxs)("div",{className:"row textCenter",children:[Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(bA,{img:"data:image/png;base64,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",title:"Super Project",text:"Tworzymy wyj\u0105tkowe projekty, kt\xf3re przyci\u0105gaj\u0105 uwag\u0119 i s\u0105 w pe\u0142ni dopasowane do potrzeb Twojej marki. Stawiamy na kreatywno\u015b\u0107 i precyzj\u0119 wykonania.",action:()=>alert("clicked")})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(bA,{img:"data:image/png;base64,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",title:"Niezwyk\u0142y projekt",text:"Realizujemy projekty z pasj\u0105 i dba\u0142o\u015bci\u0105 o szczeg\xf3\u0142y, by Twoja marka wyr\xf3\u017cnia\u0142a si\u0119 na tle konkurencji.",action:()=>alert("clicked")})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(bA,{img:"data:image/png;base64,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",title:"Niezwyk\u0142y projekt",text:"Nasze projekty \u0142\u0105cz\u0105 estetyk\u0119 i funkcjonalno\u015b\u0107, tworz\u0105c rozwi\u0105zania idealnie dopasowane do Twoich potrzeb.",action:()=>alert("clicked")})})]}),Object(l.jsx)("div",{className:"row flexCenter",children:Object(l.jsx)("div",{style:{margin:"50px 0",width:"200px"},children:Object(l.jsx)(Q,{title:"Zobacz wiecej",action:()=>alert("clicked")})})})]})}),Object(l.jsx)("div",{className:"lightBg",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(kA,{className:"flexSpaceCenter",children:[Object(l.jsx)(uA,{children:Object(l.jsx)(vA,{children:Object(l.jsx)(zA,{className:"flexCenter",children:Object(l.jsx)("img",{className:"radius8",src:"data:image/png;base64,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",alt:"add"})})})}),Object(l.jsxs)(CA,{children:[Object(l.jsx)("h4",{className:"font15 semiBold",children:"Kilka s\u0142\xf3w o firmie"}),Object(l.jsx)("h2",{className:"font40 extraBold",children:"Studium kreatywno\u015bci"}),Object(l.jsxs)("p",{className:"font12",children:["Nasza firma to przestrze\u0144, gdzie kreatywne pomys\u0142y przekszta\u0142caj\u0105 si\u0119 w rzeczywisto\u015b\u0107. Wykorzystujemy innowacyjne podej\u015bcie, aby tworzy\u0107 projekty, kt\xf3re spe\u0142niaj\u0105 oczekiwania naszych klient\xf3w.",Object(l.jsx)("br",{}),"\u0141\u0105czymy do\u015bwiadczenie z pasj\u0105 do designu, oferuj\u0105c unikalne rozwi\u0105zania, kt\xf3re przyci\u0105gaj\u0105 uwag\u0119 i wyr\xf3\u017cniaj\u0105 si\u0119 na rynku."]}),Object(l.jsxs)(PA,{className:"flexNullCenter",style:{margin:"30px 0"},children:[Object(l.jsx)("div",{style:{width:"190px"},children:Object(l.jsx)(Q,{title:"Rozpocznij",action:()=>alert("clicked")})}),Object(l.jsx)("div",{style:{width:"190px",marginLeft:"15px"},children:Object(l.jsx)(Q,{title:"Contact Us",action:()=>alert("clicked"),border:!0})})]})]})]})})})]})}const QA=s.a.section`
  width: 100%;
`,OA=s.a.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`,kA=s.a.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`,PA=s.a.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`,uA=s.a.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`,CA=s.a.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`,vA=s.a.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`,zA=s.a.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;function HA(A){let{tag:e,title:t,text:a,action:c,author:i}=A;return Object(l.jsx)(SA,{className:"animate pointer",onClick:c?()=>c():null,children:Object(l.jsxs)(XA,{className:"whiteBg radius8 shadow",children:[Object(l.jsx)("h3",{className:"font20 extraBold",children:t}),Object(l.jsx)("p",{className:"font13",style:{padding:"30px 0"},children:a}),Object(l.jsx)("p",{className:"font13 extraBold",children:i}),Object(l.jsx)("div",{className:"flex",children:Object(l.jsx)("p",{className:"tag coralBg radius6 font13 extraBold",children:e})})]})})}const XA=s.a.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`,SA=s.a.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;function EA(A){let{text:e,author:t}=A;return Object(l.jsxs)(ZA,{className:"darkBg radius8 flexNullCenter flexColumn",children:[Object(l.jsx)(MA,{children:Object(l.jsx)(k,{})}),Object(l.jsx)("p",{className:"whiteColor font13",style:{paddingBottom:"30px"},children:e}),Object(l.jsx)("p",{className:"orangeColor font13",style:{alignSelf:"flex-end"},children:Object(l.jsx)("em",{children:t})})]})}const ZA=s.a.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
`,MA=s.a.div`
  position: relative;
  top: -40px;
`;function WA(){return Object(l.jsx)("div",{children:Object(l.jsxs)(F.a,{infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}],children:[Object(l.jsx)(UA,{className:"flexCenter",children:Object(l.jsx)(EA,{text:"Przyjaciele, kt\xf3rych pragniemy, to marzenia i bajki.",author:"Ralph Waldo Emerson"})}),Object(l.jsx)(UA,{className:"flexCenter",children:Object(l.jsx)(EA,{text:"Prawdziwa przyja\u017a\u0144 to nie rozdzielno\u015b\u0107 cia\u0142, lecz jedno\u015b\u0107 dusz.",author:"Arystoteles"})}),Object(l.jsx)(UA,{className:"flexCenter",children:Object(l.jsx)(EA,{text:"Przyjaciel to ten, kto zna melodi\u0119 twojego serca i potrafi j\u0105 za\u015bpiewa\u0107, gdy ty zapomnisz s\u0142owa.",author:"Albert Einstein"})}),Object(l.jsx)(UA,{className:"flexCenter",children:Object(l.jsx)(EA,{text:"Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",author:"Ralph Waldo Emerson"})}),Object(l.jsx)(UA,{className:"flexCenter",children:Object(l.jsx)(EA,{text:"Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",author:"Ralph Waldo Emerson"})}),Object(l.jsx)(UA,{className:"flexCenter",children:Object(l.jsx)(EA,{text:"Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",author:"Ralph Waldo Emerson"})})]})})}const UA=s.a.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;function TA(){return Object(l.jsxs)(FA,{id:"blog",children:[Object(l.jsx)("div",{className:"whiteBg",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(LA,{children:[Object(l.jsx)("h1",{className:"font40 extraBold",children:"Nasze historie na blogu"}),Object(l.jsxs)("p",{className:"font13",children:["Odkryj inspiruj\u0105ce historie, porady i nowinki ze \u015bwiata marketingu i designu. Na naszym blogu dzielimy si\u0119 wiedz\u0105 i do\u015bwiadczeniem, kt\xf3re pomog\u0105 Twojej marce rozwija\u0107 si\u0119 w cyfrowym \u015bwiecie.",Object(l.jsx)("br",{}),"Zapraszamy do lektury, aby by\u0107 na bie\u017c\u0105co z najnowszymi trendami i strategiami!"]})]}),Object(l.jsxs)("div",{className:"row textCenter",children:[Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(HA,{title:"Nowe biuro!",text:"Otworzyli\u015bmy nowe biuro, kt\xf3re pozwoli nam rozwija\u0107 nasze us\u0142ugi i lepiej odpowiada\u0107 na potrzeby klient\xf3w.",tag:"company",author:"Luke Skywalker, 2 dni temu",action:()=>alert("clicked")})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(HA,{title:"5 trend\xf3w w marketingu na 2024 rok",text:"5 trend\xf3w w marketingu na 2024 rok5 trend\xf3w w marketingu na 2024 rok",tag:"marketing",author:"Piotr Zaj\u0105c, 5 dni temu",action:()=>alert("clicked")})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(HA,{title:"Jak stworzy\u0107 skuteczn\u0105 stron\u0119 internetow\u0105",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",tag:"web design",author:"Piotr Zaj\u0105c, tydzie\u0144 temu",action:()=>alert("clicked")})})]}),Object(l.jsxs)("div",{className:"row textCenter",children:[Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(HA,{title:"Wsp\xf3\u0142praca z influencerami \u2013 co warto wiedzie\u0107?",text:"Dowiedz si\u0119, jak efektywnie wsp\xf3\u0142pracowa\u0107 z influencerami, aby osi\u0105gn\u0105\u0107 sukces w kampaniach marketingowych.",tag:"influencer marketing",author:"Kasia Kowalska, 3 dni temu",action:()=>alert("clicked")})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(HA,{title:"Jak optymalizowa\u0107 kampanie Google Ads?",text:"Kilka sprawdzonych metod na zwi\u0119kszenie skuteczno\u015bci kampanii reklamowych w Google Ads.",tag:"PPC",author:"Aleksandra Wi\u015bniewska, 6 dni temu",action:()=>alert("clicked")})}),Object(l.jsx)("div",{className:"col-xs-12 col-sm-4 col-md-4 col-lg-4",children:Object(l.jsx)(HA,{title:"Znaczenie UX w projektowaniu stron",text:"Dlaczego User Experience ma kluczowe znaczenie dla sukcesu Twojej strony internetowej?",tag:"UX design",author:"Micha\u0142 Nowicki, 4 dni temu",action:()=>alert("clicked")})})]}),Object(l.jsx)("div",{className:"row flexCenter",children:Object(l.jsx)("div",{style:{margin:"50px 0",width:"200px"},children:Object(l.jsx)(Q,{title:"Load More",action:()=>alert("clicked")})})})]})}),Object(l.jsx)("div",{className:"lightBg",style:{padding:"50px 0"},children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(LA,{children:[Object(l.jsx)("h1",{className:"font40 extraBold",children:"Co m\xf3wi\u0105?"}),Object(l.jsxs)("p",{className:"font13",children:['"Nasze us\u0142ugi s\u0105 dostosowane do Twoich potrzeb, by pom\xf3c Twojej marce rozwija\u0107 si\u0119 w dynamicznym \u015bwiecie online.',Object(l.jsx)("br",{}),'D\u0105\u017cymy do tego, aby ka\u017cdy projekt by\u0142 unikalny i odpowiada\u0142 na indywidualne wyzwania oraz cele naszych klient\xf3w."']})]}),Object(l.jsx)(WA,{})]})})]})}const FA=s.a.section`
  width: 100%;
  padding-top: 20px;
`,LA=s.a.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;var VA=function(A){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:18.641,height:12.607,...A,children:Object(l.jsxs)("g",{"data-name":"Group 77",fill:"#49cb86",children:[Object(l.jsx)("path",{"data-name":"Rectangle 40",d:"M16.52 0l2.122 2.529L6.63 12.607l-2.122-2.529z"}),Object(l.jsx)("path",{"data-name":"Rectangle 41",d:"M9.16 10.485L6.63 12.607.001 4.705 2.53 2.583z"})]})})};function KA(A){let e,{icon:t,price:a,title:c,text:i,offers:n,action:s}=A;switch(t){case"roller":e=Object(l.jsx)(_,{});break;case"monitor":e=Object(l.jsx)(AA,{});break;case"browser":e=Object(l.jsx)(eA,{});break;case"printer":e=Object(l.jsx)(tA,{});break;default:e=Object(l.jsx)(_,{})}return Object(l.jsxs)(JA,{className:"whiteBg radius8 shadow",children:[Object(l.jsxs)("div",{className:"flexSpaceCenter",children:[e,Object(l.jsx)("p",{className:"font30 extraBold",children:a})]}),Object(l.jsxs)("div",{style:{margin:"30px 0"},children:[Object(l.jsx)("h4",{className:"font30 extraBold",children:c}),Object(l.jsx)("p",{className:"font13",children:i})]}),Object(l.jsx)("div",{children:n?n.map(((A,e)=>Object(l.jsxs)("div",{className:"flexNullCenter",style:{margin:"15px 0"},children:[Object(l.jsx)("div",{style:{position:"relative",top:"-1px",marginRight:"15px"},children:A.cheked?Object(l.jsx)("div",{style:{minWidth:"20px"},children:Object(l.jsx)(VA,{})}):Object(l.jsx)("div",{style:{minWidth:"20px"}})}),Object(l.jsx)("p",{className:"font20 extraBold",children:A.name})]},e))):null}),Object(l.jsx)("div",{style:{maxWidth:"120px",margin:"30px auto 0 auto"},children:Object(l.jsx)(Q,{title:"Buy",action:s})})]})}const JA=s.a.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;function RA(){return Object(l.jsx)(YA,{id:"pricing",children:Object(l.jsx)("div",{className:"whiteBg",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(GA,{children:[Object(l.jsx)("h1",{className:"font40 extraBold",children:"Sprawd\u017a Nasze Ceny"}),Object(l.jsxs)("p",{className:"font13",children:["Oferujemy elastyczne pakiety cenowe dopasowane do r\xf3\u017cnych potrzeb i bud\u017cet\xf3w. Zapewniamy transparentno\u015b\u0107 i najwy\u017csz\u0105 jako\u015b\u0107 us\u0142ug.",Object(l.jsx)("br",{}),"Sprawd\u017a, co mo\u017cemy zrobi\u0107 dla Twojej marki i wybierz rozwi\u0105zanie idealne dla siebie!"]})]}),Object(l.jsxs)(qA,{className:"flexSpaceNull",children:[Object(l.jsx)($A,{children:Object(l.jsx)(KA,{icon:"roller",price:"$29,99/mo",title:"Starter",text:"Idealne rozwi\u0105zanie dla pocz\u0105tkuj\u0105cych. Ten pakiet oferuje podstawowe funkcje, kt\xf3re pomog\u0105 Ci zacz\u0105\u0107 rozwija\u0107 swoj\u0105 mark\u0119 online.",offers:[{name:"Product Offer",cheked:!0},{name:"Offer",cheked:!0},{name:"Product Offer #2",cheked:!1},{name:"Product",cheked:!1},{name:"Product Offer",cheked:!1}],action:()=>alert("clicked")})}),Object(l.jsx)($A,{children:Object(l.jsx)(KA,{icon:"monitor",price:"$49,99/mo",title:"Basic",text:"Pakiet Basic oferuje bardziej zaawansowane funkcje, kt\xf3re pozwol\u0105 Ci rozwin\u0105\u0107 swoj\u0105 obecno\u015b\u0107 w sieci i przyci\u0105gn\u0105\u0107 nowych klient\xf3w.",offers:[{name:"Product Offer",cheked:!0},{name:"Offer",cheked:!0},{name:"Product Offer #2",cheked:!0},{name:"Product",cheked:!0},{name:"Product Offer",cheked:!1}],action:()=>alert("clicked")})}),Object(l.jsx)($A,{children:Object(l.jsx)(KA,{icon:"browser",price:"$59,99/mo",title:"Golden",text:"Pakiet Golden to kompleksowe rozwi\u0105zanie dla firm, kt\xf3re chc\u0105 zwi\u0119kszy\u0107 swoj\u0105 widoczno\u015b\u0107 online i korzysta\u0107 z pe\u0142nej gamy funkcji premium.",offers:[{name:"Product Offer",cheked:!0},{name:"Offer",cheked:!0},{name:"Product Offer #2",cheked:!0},{name:"Product",cheked:!0},{name:"Product Offer",cheked:!0}],action:()=>alert("clicked")})})]})]})})})}const YA=s.a.section`
  width: 100%;
  padding: 50px 0;
`,GA=s.a.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`,qA=s.a.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`,$A=s.a.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;function _A(){return Object(l.jsx)(Ae,{id:"contact",children:Object(l.jsx)("div",{className:"lightBg",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)(ee,{children:[Object(l.jsx)("h1",{className:"font40 extraBold",children:"Skontaktujmy si\u0119"}),Object(l.jsxs)("p",{className:"font13",children:["Jeste\u015bmy tutaj, aby odpowiedzie\u0107 na Twoje pytania i om\xf3wi\u0107, jak mo\u017cemy wsp\xf3lnie osi\u0105gn\u0105\u0107 sukces. Napisz do nas, a ch\u0119tnie pomo\u017cemy!",Object(l.jsx)("br",{}),"Wsp\xf3\u0142pracujmy, by razem zrealizowa\u0107 Twoje pomys\u0142y i cele."]})]}),Object(l.jsxs)("div",{className:"row",style:{paddingBottom:"30px"},children:[Object(l.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6",children:[Object(l.jsxs)(te,{children:[Object(l.jsx)("label",{className:"font13",children:"Imi\u0119 i nazwisko"}),Object(l.jsx)("input",{type:"text",id:"fname",name:"fname",className:"font20 extraBold"}),Object(l.jsx)("label",{className:"font13",children:"Email:"}),Object(l.jsx)("input",{type:"text",id:"email",name:"email",className:"font20 extraBold"}),Object(l.jsx)("label",{className:"font13",children:"Temat"}),Object(l.jsx)("input",{type:"text",id:"subject",name:"subject",className:"font20 extraBold"}),Object(l.jsx)("textarea",{rows:"4",cols:"50",type:"text",id:"message",name:"message",className:"font20 extraBold"})]}),Object(l.jsx)(ie,{className:"flex",children:Object(l.jsx)(ae,{type:"submit",value:"Wyslij wiadomosc",className:"pointer animate radius8",style:{maxWidth:"220px"}})})]}),Object(l.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 flex",children:[Object(l.jsxs)("div",{style:{width:"50%"},className:"flexNullCenter flexColumn",children:[Object(l.jsx)(ce,{children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"office",className:"radius6"})}),Object(l.jsx)(ce,{children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAEnCAIAAACPKv48AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB2lJREFUeNrs2V+Il1Uex/H+7I2NtJihXmggRXUhKHQhpVcjZBdJS0FbXWQgTGQgaGAUs7tQQ6GghlBt0oIWbRIkwXRjkN1kYQUpWKFkXmhgkq27OAa5F/tpDnM6PvMb/2XLQK83P4Yfz+885znPOe/zPd9z5sr+ewauAHpxlS4AOUAOkAPkADlADpAD5AA5QA6AHCAHyAFygBwgB8gBcoAcIAdADpAD5AA5QA6QA+QAOUAOkAMgB8gBcoAcIAfIAXKAHCAHyAFyAOQAOUAOkAPkADlADpAD5AA5AHKAHCAHyAFygBwgB8gBcoAcADlADpAD5AA5QA6QA+QAOUAOkAMgB8gBcoAcIAfIAXKAHCAHyAGQA+QAOUAOkAPkADlADpAD5ADIAXKAHCAHyAFygBwgB8gBcoAcADlADpAD5AA5QA6QA+QAOUAOgBwgB8gBcoAcIAfIAXKAHCAHQA6QA+QAOUAOkAPkADlADpAD5ADIAXKAHPiN+cMkbNONc2cvWrigfH9t+7v1el/flKX9t8+fd8vUvimHDh/dvWfvvv0HO/emTO69ae6cVJJfDx0+snvPvsvbvPnzbs4jUv93x0/s3X/wvV0f92x/ip0a+TEN2Lnr45QsP82cMT2v0LPa9k0nCVf23zMwSZqSjlu0cP7S/jsytPXikj89Wnt849ATU/uuaW/Zu//AX59/eWTkx1rmmacemzXj+nOU+TXEvNS/YN4t7cWvDx9ZM7ih1r921fK8QufGdZu3FodiTN6iZ+X1TS0rvWfk4yv+3JrRklHpmBEyTvctW1JHLv3eMaOUyb2XpYVrVz3SMSOkwbX+hx+4e7wZ4clVj8T78o6WlUth/BrRelNH/cM9e7OgxImiUaJ0Cci5Uu3ZueujY8dP5K4ylvmb7+eo/wLDxqwZ02u0SBva+hO08sTlDywrBY4d//7t4ffzJVdKq1auuL9d4FJg57j1iBwTkoV52/bhdPHIyOlnnlrZWXFqn/7t+ZdL4RKfqzQ1hKSSun5vGFpTxu/eZUs6cmSwa5TKQ0ta0F6MAe1ilO+Prh66s//26FjXqfffeaX8Gm/awLZmcGOpMLlRbWcqb+Q4MQmTjEmdkJb+Gh97a0KXLs4cTY/XjDW6lGyjCRu/zMh8H5vc3TozunlQmeupZGD1UK7UlCKZyhODG8e3MKnDe71m/Kmzc5ra4BjWLkA3jpkXmbIGRZFkrHkdcvyqFSe9XOb0lk1/aX8q0budtXVg2u/j85XiYtnaxLnkE/v2HyhmnBo5vX7ztvO2KqPbpqV10QkJMMWhGs/KW9Rb8sS6Bl3GlPl3es7x2vbhXvP1dIkTdd1JR0+Ux8xsBq+yfvPWVJIvixcuSDpcL7aG9STDX0c3go78vGs9WsJYyUBf2TSYTy2TVGmiqmLkRFsYclzQyUfNQjJH09FlGBIPSrc26870zo09I0olI7rtbO2SzJ73aCRmZPhre2oNbbxJQGp3XkXuPC761k+VKSXLdsayctE8PDb/MnJlAJLcbdk0mOBcurUu+Z2tbM/VpMOO4V31cCVR5MV/vHXu8nlca0Z7yJFANbD62WxMOjve2FMSi5fOrry+xajHcy77ed3vInLcNBYAan6X8Tg2FgnSre3ycWdzBFmPIzvLTWefXKd4ZGqzhJ4xbO0EZtRQlEz2oYGna1RIsXZjksfVeNa+hYT0EkkPlumVKZ7plQXi3mX9dXaWpCFrzeLRLczjK+7PZricc9Qjqd0TLPmZu2tXLW+vJEtI4Z47iPaUNg/NSjF+M1ylrDEsGUxNepaPnpKN6jKcaJcrtYbyFuS4lN1KUSFd+c8tz3V+LdE43V3kyOB1jknOceKUMFBGMQOWp5SwkQ1t2dl2Crfn952ntIcrcajmoXVBKfGvyDp6qLqy51tYVi6abAfaA4POT/W4ad3YHO3saCbaKGYBKj6N7l23ZiDLU9p95sVmMEW4ngtKhj85U89b1l3A/uj/z9Vzb71tsrVpat+UObNnJVDnU04Lzpz57wcffvrTmTMZnuum/bEM5yeff/Hq6zuSTrbrfWZ/X981N8yeVcrkrqENrx759rueC8qD9931w8l/5ylv7tj52edf5ilfHfymPPq6adceOnzkXyf/08lOSqvGf0b/A3y0CHfDWONf+PsbnRriR6qdNu3aEq7KW6TYR5MvbFwxqf4rC8sKyAFygBwgB0AOkAPkADlADpAD5AA5QA6QAyAHyAFygBwgB8gBcoAcIAfIAXIA5AA5QA6QA+QAOUAOkAPkADkAcoAcIAfIAXKAHCAHyAFygBwAOUAOkAPkADlADpAD5AA5QA6QAyAHyAFygBwgB8gBcoAcIAfIAZAD5AA5QA6QA+QAOUAOkAPkAMgBcoAcIAfIAXKAHCAHyAFygBwAOUAOkAPkADlADpAD5AA5QA6AHCAHyAFygBwgB8gBcoAcIAdADpAD5AA5QA6QA+QAOUAOkAPkAMgBcoAcIAfIAXKAHCAHyAFyAOQAOUAOkAPkADlADpAD5AA5AHLgfPxPgAEAfAMdCQZTtm4AAAAASUVORK5CYII=",alt:"office",className:"radius6"})})]}),Object(l.jsx)("div",{style:{width:"50%"},children:Object(l.jsx)("div",{style:{marginTop:"100px"},children:Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"office",className:"radius6"})})})]})]})]})})})}const Ae=s.a.section`
  width: 100%;
`,ee=s.a.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`,te=s.a.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`,ae=s.a.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`,ce=s.a.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`,ie=s.a.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;function ne(){return Object(l.jsx)(se,{children:Object(l.jsx)("div",{className:"darkBg",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(re,{className:"flexSpaceCenter",style:{padding:"30px 0"},children:[Object(l.jsxs)(r.Link,{className:"flexCenter animate pointer",to:"home",smooth:!0,offset:-80,children:[Object(l.jsx)(d,{}),Object(l.jsx)("h1",{className:"font15 extraBold whiteColor",style:{marginLeft:"15px"},children:"Fanatic"})]}),Object(l.jsxs)(le,{className:"whiteColor font13",children:["\xa9 ",(new Date).getFullYear()," - ",Object(l.jsx)("span",{className:"purpleColor font13",children:"Chaotic-Shapes"})," All Right Reserved"]}),Object(l.jsx)(r.Link,{className:"whiteColor animate pointer font13",to:"home",smooth:!0,offset:-80,children:"Back to top"})]})})})})}const se=s.a.div`
  width: 100%;
`,re=s.a.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`,le=s.a.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;function ge(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(N,{}),Object(l.jsx)(u,{}),Object(l.jsx)(rA,{}),Object(l.jsx)(BA,{}),Object(l.jsx)(TA,{}),Object(l.jsx)(RA,{}),Object(l.jsx)(_A,{}),Object(l.jsx)(ne,{})]})}function de(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(l.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),Object(l.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap",rel:"stylesheet"})]}),Object(l.jsx)(ge,{})]})}var oe=A=>{A&&A instanceof Function&&t.e(3).then(t.bind(null,66)).then((e=>{let{getCLS:t,getFID:a,getFCP:c,getLCP:i,getTTFB:n}=e;t(A),a(A),c(A),i(A),n(A)}))};i.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(de,{})}),document.getElementById("root")),oe()}},[[65,1,2]]]);
//# sourceMappingURL=main.1874a27a.chunk.js.map