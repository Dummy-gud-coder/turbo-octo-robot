(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{2734:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}}),n(7294);var r=n(6682),i=n(247),a=n(606);function o(){let e=(0,r.Z)(i.Z);return e[a.Z]||e}},9707:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),i=n(3366),a=n(9766),o=n(4920);let s=["sx"],l=e=>{var t,n;let r={systemProps:{},otherProps:{}},i=null!=(t=null==e?void 0:null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:o.Z;return Object.keys(e).forEach(t=>{i[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]}),r};function u(e){let t;let{sx:n}=e,o=(0,i.Z)(e,s),{systemProps:u,otherProps:c}=l(o);return t=Array.isArray(n)?[u,...n]:"function"==typeof n?(...e)=>{let t=n(...e);return(0,a.P)(t)?(0,r.Z)({},u,t):u}:(0,r.Z)({},u,n),(0,r.Z)({},c,{sx:t})}},4312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return n(6560)}])},6560:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(5893),i=n(1664),a=n.n(i);let o=[{name:"three test #boxes",path:"/test/three/boxes"},{name:"blog test #toc",path:"/test/blog/toc"},{name:"really really really really really long button title that links to nonexistent page",path:"/test/nonexistent"},{name:"elements test #colors",path:"/test/elements/colors"},{name:"elements test #components",path:"/test/elements/libs"},{name:"elements test #code",path:"/test/elements/code"},{name:"elements fetch #repos",path:"/test/elements/repos"}];var s=n(1899),l=n.n(s),u=n(3321),c=n(3366),p=n(7462),f=n(7294),m=n(6010),d=n(5408),g=n(9707),x=n(4780),h=n(1496),b=n(7623),w=n(2734);let $=f.createContext();var v=n(1588),k=n(4867);function Z(e){return(0,k.Z)("MuiGrid",e)}let y=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=(0,v.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...y.map(e=>`grid-xs-${e}`),...y.map(e=>`grid-sm-${e}`),...y.map(e=>`grid-md-${e}`),...y.map(e=>`grid-lg-${e}`),...y.map(e=>`grid-xl-${e}`)]);var _=S;let N=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function j(e){let t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function C({breakpoints:e,values:t}){let n="";Object.keys(t).forEach(e=>{""===n&&0!==t[e]&&(n=e)});let r=Object.keys(e).sort((t,n)=>e[t]-e[n]);return r.slice(0,r.indexOf(n))}let P=(0,h.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e,{container:r,direction:i,item:a,spacing:o,wrap:s,zeroMinWidth:l,breakpoints:u}=n,c=[];r&&(c=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];let r=[];return t.forEach(t=>{let i=e[t];Number(i)>0&&r.push(n[`spacing-${t}-${String(i)}`])}),r}(o,u,t));let p=[];return u.forEach(e=>{let r=n[e];r&&p.push(t[`grid-${e}-${String(r)}`])}),[t.root,r&&t.container,a&&t.item,l&&t.zeroMinWidth,...c,"row"!==i&&t[`direction-xs-${String(i)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...p]}})(({ownerState:e})=>(0,p.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),function({theme:e,ownerState:t}){let n=(0,d.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,d.k9)({theme:e},n,e=>{let t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${_.item}`]={maxWidth:"none"}),t})},function({theme:e,ownerState:t}){let{container:n,rowSpacing:r}=t,i={};if(n&&0!==r){let t;let n=(0,d.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof n&&(t=C({breakpoints:e.breakpoints.values,values:n})),i=(0,d.k9)({theme:e},n,(n,r)=>{var i;let a=e.spacing(n);return"0px"!==a?{marginTop:`-${j(a)}`,[`& > .${_.item}`]:{paddingTop:j(a)}}:null!=(i=t)&&i.includes(r)?{}:{marginTop:0,[`& > .${_.item}`]:{paddingTop:0}}})}return i},function({theme:e,ownerState:t}){let{container:n,columnSpacing:r}=t,i={};if(n&&0!==r){let t;let n=(0,d.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof n&&(t=C({breakpoints:e.breakpoints.values,values:n})),i=(0,d.k9)({theme:e},n,(n,r)=>{var i;let a=e.spacing(n);return"0px"!==a?{width:`calc(100% + ${j(a)})`,marginLeft:`-${j(a)}`,[`& > .${_.item}`]:{paddingLeft:j(a)}}:null!=(i=t)&&i.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${_.item}`]:{paddingLeft:0}}})}return i},function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce((r,i)=>{let a={};if(t[i]&&(n=t[i]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let o=(0,d.P$)({values:t.columns,breakpoints:e.breakpoints.values}),s="object"==typeof o?o[i]:o;if(null==s)return r;let l=`${Math.round(n/s*1e8)/1e6}%`,u={};if(t.container&&t.item&&0!==t.columnSpacing){let n=e.spacing(t.columnSpacing);if("0px"!==n){let e=`calc(${l} + ${j(n)})`;u={flexBasis:e,maxWidth:e}}}a=(0,p.Z)({flexBasis:l,flexGrow:0,maxWidth:l},u)}return 0===e.breakpoints.values[i]?Object.assign(r,a):r[e.breakpoints.up(i)]=a,r},{})}),W=e=>{let{classes:t,container:n,direction:r,item:i,spacing:a,wrap:o,zeroMinWidth:s,breakpoints:l}=e,u=[];n&&(u=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let n=[];return t.forEach(t=>{let r=e[t];if(Number(r)>0){let e=`spacing-${t}-${String(r)}`;n.push(e)}}),n}(a,l));let c=[];l.forEach(t=>{let n=e[t];n&&c.push(`grid-${t}-${String(n)}`)});let p={root:["root",n&&"container",i&&"item",s&&"zeroMinWidth",...u,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==o&&`wrap-xs-${String(o)}`,...c]};return(0,x.Z)(p,Z,t)},E=f.forwardRef(function(e,t){let n=(0,b.Z)({props:e,name:"MuiGrid"}),{breakpoints:i}=(0,w.Z)(),a=(0,g.Z)(n),{className:o,columns:s,columnSpacing:l,component:u="div",container:d=!1,direction:x="row",item:h=!1,rowSpacing:v,spacing:k=0,wrap:Z="wrap",zeroMinWidth:y=!1}=a,S=(0,c.Z)(a,N),_=f.useContext($),j=d?s||12:_,C={},E=(0,p.Z)({},S);i.keys.forEach(e=>{null!=S[e]&&(C[e]=S[e],delete E[e])});let M=(0,p.Z)({},a,{columns:j,container:d,direction:x,item:h,rowSpacing:v||k,columnSpacing:l||k,wrap:Z,zeroMinWidth:y,spacing:k},C,{breakpoints:i.keys}),O=W(M);return(0,r.jsx)($.Provider,{value:j,children:(0,r.jsx)(P,(0,p.Z)({ownerState:M,className:(0,m.Z)(O.root,o),as:u,ref:t},E))})});function M(){return(0,r.jsx)("div",{className:l().pageContainer,children:(0,r.jsx)(E,{container:!0,spacing:1,children:o.map((e,t)=>(0,r.jsx)(E,{item:!0,children:(0,r.jsx)(u.Z,{variant:"contained",className:"MuiIndexButton",children:(0,r.jsx)(a(),{href:e.path,passHref:!0,children:(0,r.jsx)("div",{className:"MuiIndexButton",children:e.name})})})},t))})})}},1899:function(e){e.exports={pageContainer:"containers_pageContainer__VH3sw",blogContainer:"containers_blogContainer__3w_OC",canvasContainer:"containers_canvasContainer__4UnuB"}}},function(e){e.O(0,[321,774,888,179],function(){return e(e.s=4312)}),_N_E=e.O()}]);