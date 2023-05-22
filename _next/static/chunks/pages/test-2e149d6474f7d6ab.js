(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{2734:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}}),n(7294);var r=n(6682),i=n(247),a=n(606);function s(){let e=(0,r.Z)(i.Z);return e[a.Z]||e}},9707:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9766),i=n(4920);let a=e=>{var t,n;let r={systemProps:{},otherProps:{}},a=null!=(t=null==e?void 0:null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach(t=>{a[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]}),r};function s(e){let t;let{sx:n,...i}=e,{systemProps:s,otherProps:o}=a(i);return t=Array.isArray(n)?[s,...n]:"function"==typeof n?(...e)=>{let t=n(...e);return(0,r.P)(t)?{...s,...t}:s}:{...s,...n},{...o,sx:t}}},4312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return n(6560)}])},6560:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(5893),i=n(1664),a=n.n(i);let s=[{name:"test_boxes",path:"/test/three/boxes"},{name:"test_toc",path:"/test/blog/toc"},{name:"test_really really long button title that links to nonexistent",path:"/test/nonexistent"},{name:"test_colors",path:"/test/elements/colors"},{name:"test_components",path:"/test/elements/libs"},{name:"test_code",path:"/test/elements/code"},{name:"test_repos",path:"/test/elements/repos"},{name:"test_markdown",path:"/test/blog/markdown"},{name:"test_flashcards",path:"/test/blog/flashcards"}];var o=n(1899),l=n.n(o),u=n(1057),c=n(7294),p=n(6010),f=n(5408),d=n(9707),m=n(4780),g=n(1496),x=n(7623),h=n(2734);let b=c.createContext();var w=n(1588),$=n(4867);function v(e){return(0,$.Z)("MuiGrid",e)}let _=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],k=(0,w.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),..._.map(e=>`grid-xs-${e}`),..._.map(e=>`grid-sm-${e}`),..._.map(e=>`grid-md-${e}`),..._.map(e=>`grid-lg-${e}`),..._.map(e=>`grid-xl-${e}`)]);var y=k;function S(e){let t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function N({breakpoints:e,values:t}){let n="";Object.keys(t).forEach(e=>{""===n&&0!==t[e]&&(n=e)});let r=Object.keys(e).sort((t,n)=>e[t]-e[n]);return r.slice(0,r.indexOf(n))}let j=(0,g.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e,{container:r,direction:i,item:a,spacing:s,wrap:o,zeroMinWidth:l,breakpoints:u}=n,c=[];r&&(c=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];let r=[];return t.forEach(t=>{let i=e[t];Number(i)>0&&r.push(n[`spacing-${t}-${String(i)}`])}),r}(s,u,t));let p=[];return u.forEach(e=>{let r=n[e];r&&p.push(t[`grid-${e}-${String(r)}`])}),[t.root,r&&t.container,a&&t.item,l&&t.zeroMinWidth,...c,"row"!==i&&t[`direction-xs-${String(i)}`],"wrap"!==o&&t[`wrap-xs-${String(o)}`],...p]}})(({ownerState:e})=>({boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...e.item&&{margin:0},...e.zeroMinWidth&&{minWidth:0},..."wrap"!==e.wrap&&{flexWrap:e.wrap}}),function({theme:e,ownerState:t}){let n=(0,f.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,f.k9)({theme:e},n,e=>{let t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${y.item}`]={maxWidth:"none"}),t})},function({theme:e,ownerState:t}){let{container:n,rowSpacing:r}=t,i={};if(n&&0!==r){let t;let n=(0,f.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof n&&(t=N({breakpoints:e.breakpoints.values,values:n})),i=(0,f.k9)({theme:e},n,(n,r)=>{var i;let a=e.spacing(n);return"0px"!==a?{marginTop:`-${S(a)}`,[`& > .${y.item}`]:{paddingTop:S(a)}}:null!=(i=t)&&i.includes(r)?{}:{marginTop:0,[`& > .${y.item}`]:{paddingTop:0}}})}return i},function({theme:e,ownerState:t}){let{container:n,columnSpacing:r}=t,i={};if(n&&0!==r){let t;let n=(0,f.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof n&&(t=N({breakpoints:e.breakpoints.values,values:n})),i=(0,f.k9)({theme:e},n,(n,r)=>{var i;let a=e.spacing(n);return"0px"!==a?{width:`calc(100% + ${S(a)})`,marginLeft:`-${S(a)}`,[`& > .${y.item}`]:{paddingLeft:S(a)}}:null!=(i=t)&&i.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${y.item}`]:{paddingLeft:0}}})}return i},function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce((r,i)=>{let a={};if(t[i]&&(n=t[i]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let s=(0,f.P$)({values:t.columns,breakpoints:e.breakpoints.values}),o="object"==typeof s?s[i]:s;if(null==o)return r;let l=`${Math.round(n/o*1e8)/1e6}%`,u={};if(t.container&&t.item&&0!==t.columnSpacing){let n=e.spacing(t.columnSpacing);if("0px"!==n){let e=`calc(${l} + ${S(n)})`;u={flexBasis:e,maxWidth:e}}}a={flexBasis:l,flexGrow:0,maxWidth:l,...u}}return 0===e.breakpoints.values[i]?Object.assign(r,a):r[e.breakpoints.up(i)]=a,r},{})}),C=e=>{let{classes:t,container:n,direction:r,item:i,spacing:a,wrap:s,zeroMinWidth:o,breakpoints:l}=e,u=[];n&&(u=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let n=[];return t.forEach(t=>{let r=e[t];if(Number(r)>0){let e=`spacing-${t}-${String(r)}`;n.push(e)}}),n}(a,l));let c=[];l.forEach(t=>{let n=e[t];n&&c.push(`grid-${t}-${String(n)}`)});let p={root:["root",n&&"container",i&&"item",o&&"zeroMinWidth",...u,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==s&&`wrap-xs-${String(s)}`,...c]};return(0,m.Z)(p,v,t)},Z=c.forwardRef(function(e,t){let n=(0,x.Z)({props:e,name:"MuiGrid"}),{breakpoints:i}=(0,h.Z)(),a=(0,d.Z)(n),{className:s,columns:o,columnSpacing:l,component:u="div",container:f=!1,direction:m="row",item:g=!1,rowSpacing:w,spacing:$=0,wrap:v="wrap",zeroMinWidth:_=!1,...k}=a,y=c.useContext(b),S=f?o||12:y,N={},Z={...k};i.keys.forEach(e=>{null!=k[e]&&(N[e]=k[e],delete Z[e])});let E={...a,columns:S,container:f,direction:m,item:g,rowSpacing:w||$,columnSpacing:l||$,wrap:v,zeroMinWidth:_,spacing:$,...N,breakpoints:i.keys},P=C(E);return(0,r.jsx)(b.Provider,{value:S,children:(0,r.jsx)(j,{ownerState:E,className:(0,p.Z)(P.root,s),as:u,ref:t,...Z})})});function E(){return(0,r.jsx)("div",{className:l().pageContainer,children:(0,r.jsx)(Z,{container:!0,spacing:1,children:s.map((e,t)=>{let n=e.name.indexOf("_");return e.name.substring(0,n+1),(0,r.jsx)(Z,{item:!0,children:(0,r.jsx)(u.Z,{variant:"contained",className:"MuiIndexButton",children:(0,r.jsx)(a(),{href:e.path,passHref:!0,children:(0,r.jsxs)("div",{className:"MuiIndexButton",children:[e.name.substring(0,n),(0,r.jsx)("span",{style:{color:"#F3C5C5"},children:e.name.substring(n+1)})]})})})},t)})})})}},1899:function(e){e.exports={pageContainer:"containers_pageContainer__VH3sw",blogContainer:"containers_blogContainer__3w_OC",canvasContainer:"containers_canvasContainer__4UnuB",block:"containers_block__K8L0E"}}},function(e){e.O(0,[57,774,888,179],function(){return e(e.s=4312)}),_N_E=e.O()}]);