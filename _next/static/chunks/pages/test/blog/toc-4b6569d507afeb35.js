(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[372],{9378:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/blog/toc",function(){return n(3627)}])},3627:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var i=n(5893),s=n(1899),r=n.n(s),o=n(1163),a=n(817),c=n.n(a),l=n(7294);let d=e=>{let{headings:t,activeId:n,router:s}=e;return(0,i.jsxs)(i.Fragment,{children:[void t.forEach(e=>{e.id,e.items.forEach(e=>{e.id})}),(0,i.jsx)(i.Fragment,{children:t.map(e=>(0,i.jsxs)("ol",{className:e.id===n?"activeParent":"",children:[(0,i.jsxs)("li",{className:e.id===n?"active "+c().tocParent:""+c().tocParent,onClick:t=>{t.preventDefault(),document.querySelector("#".concat(e.id)).scrollIntoView()},children:[" ",e.title]},e.id),e.items.length>0&&(0,i.jsx)(i.Fragment,{children:e.items.map(e=>(0,i.jsxs)("li",{className:e.id===n?"active "+c().tocChild:""+c().tocChild,onClick:t=>{t.preventDefault(),document.querySelector("#".concat(e.id)).scrollIntoView()},children:[" ",e.title]},e.id))})]},e.id))})]})},h=()=>{let[e,t]=l.useState([]);return l.useEffect(()=>{let e=Array.from(document.querySelectorAll("h5, h6")),n=u(e);t(n)},[]),{nestedHeadings:e}},u=e=>{let t=[];return e.forEach((e,n)=>{let{innerText:i,id:s}=e;"H5"===e.nodeName?t.push({id:s,title:i,items:[]}):"H6"===e.nodeName&&t.length>0&&t[t.length-1].items.push({id:s,title:i})}),t},m=e=>{let t=l.useRef({});l.useEffect(()=>{let n=n=>{t.current=n.reduce((e,t)=>(e[t.target.id]=t,e),t.current);let i=[];Object.keys(t.current).forEach(e=>{let n=t.current[e];n.isIntersecting&&i.push(n)});let r=e=>s.findIndex(t=>t.id===e);if(1===i.length)e(i[0].target.id);else if(i.length>1){let t=i.sort((e,t)=>r(e.target.id)-r(t.target.id));e(t[0].target.id)}},i=new IntersectionObserver(n,{root:null,rootMargin:"500px"}),s=Array.from(document.querySelectorAll("h5, h6"));s.forEach(e=>i.observe(e));let r=new IntersectionObserver(function(e){0===e[0].intersectionRatio&&document.getElementById("navUtils")?document.querySelector("#navUtils").classList.add("sticky"):1===e[0].intersectionRatio&&document.getElementById("navUtils")&&document.querySelector("#navUtils").classList.remove("sticky")},{threshold:[0,1]});return r.observe(document.querySelector("#navContainerTop")),()=>i.disconnect()},[e])},v=e=>{let[t,n]=l.useState(),{nestedHeadings:s}=h();return m(n),(0,l.useEffect)(()=>{window.history.pushState({},"","#"+t)},[t]),(0,i.jsxs)("div",{className:c().tocnav,children:[(0,i.jsx)("div",{id:"navContainerTop",className:c().navContainerTop}),(0,i.jsx)("div",{id:"navUtils",className:c().navUtils}),(0,i.jsx)("div",{id:c().toc,className:c().tocnav,"aria-label":"Table of contents",children:(0,i.jsx)(d,{headings:s,router:e,activeId:t})})]})};function p(){let e=(0,o.useRouter)();return(0,i.jsx)(v,{router:e})}let f="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.".repeat(100);function x(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p,{}),(0,i.jsxs)("div",{className:r().blogContainer,children:[(0,i.jsxs)("div",{className:"block",children:[(0,i.jsx)("h5",{id:"header-one",children:"First really long header"}),(0,i.jsx)("p",{children:f})]}),(0,i.jsxs)("div",{className:"block",children:[(0,i.jsx)("h5",{id:"header-two",children:"Second"}),(0,i.jsx)("p",{children:f})]}),(0,i.jsxs)("div",{className:"block",children:[(0,i.jsx)("h6",{id:"header-three",children:"Third"}),(0,i.jsx)("p",{children:f})]}),(0,i.jsxs)("div",{className:"block",children:[(0,i.jsx)("h5",{id:"header-four",children:"Fourth"}),(0,i.jsx)("p",{children:f})]}),(0,i.jsxs)("div",{className:"block",children:[(0,i.jsx)("h6",{id:"header-five",children:"fifth"}),(0,i.jsx)("p",{children:f})]}),(0,i.jsxs)("div",{className:"block",children:[(0,i.jsx)("h6",{id:"header-six",children:"test six"}),(0,i.jsx)("p",{children:f})]})]})]})}},1899:function(e){e.exports={pageContainer:"containers_pageContainer__VH3sw",blogContainer:"containers_blogContainer__3w_OC",canvasContainer:"containers_canvasContainer__4UnuB"}},817:function(e){e.exports={tocnav:"toc_tocnav__C0OKK",navContainerTop:"toc_navContainerTop__XgOYi",toc:"toc_toc__we35T",navUtils:"toc_navUtils__Vgyzf",tocParent:"toc_tocParent__D1uDd",tocChild:"toc_tocChild__gtG0L"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9378)}),_N_E=e.O()}]);