(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[911],{1739:function(e,r,n){"use strict";n.d(r,{aG:function(){return g},gN:function(){return f},At:function(){return h}});var a=n(2846),t=n(5031),i=n(6450),s=n(7294);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}var l=["spacing"],u=["isCurrentPage","as","className","href"],p=["isCurrentPage","separator","isLastChild","spacing","children","className"],d=["children","spacing","separator","className"],m=(0,a.Gp)((function(e,r){var n=e.spacing,t=o(e,l),i=c({mx:n},(0,a.yK)().separator);return s.createElement(a.m$.span,c({ref:r,role:"presentation"},t,{__css:i}))}));t.Ts&&(m.displayName="BreadcrumbSeparator");var h=(0,a.Gp)((function(e,r){var n=e.isCurrentPage,i=e.as,l=e.className,p=e.href,d=o(e,u),m=(0,a.yK)(),h=c({ref:r,as:i,className:(0,t.cx)("chakra-breadcrumb__link",l)},d);return n?s.createElement(a.m$.span,c({"aria-current":"page",__css:m.link},h)):s.createElement(a.m$.a,c({__css:m.link,href:p},h))}));t.Ts&&(h.displayName="BreadcrumbLink");var f=(0,a.Gp)((function(e,r){var n=e.isCurrentPage,l=e.separator,u=e.isLastChild,d=e.spacing,f=e.children,g=e.className,x=o(e,p),v=(0,i.WR)(f).map((function(e){return e.type===h?s.cloneElement(e,{isCurrentPage:n}):e.type===m?s.cloneElement(e,{spacing:d,children:e.props.children||l}):e})),_=c({display:"inline-flex",alignItems:"center"},(0,a.yK)().item),j=(0,t.cx)("chakra-breadcrumb__list-item",g);return s.createElement(a.m$.li,c({ref:r,className:j},x,{__css:_}),v,!u&&s.createElement(m,{spacing:d},l))}));t.Ts&&(f.displayName="BreadcrumbItem");var g=(0,a.Gp)((function(e,r){var n=(0,a.jC)("Breadcrumb",e),l=(0,a.Lr)(e),u=l.children,p=l.spacing,m=void 0===p?"0.5rem":p,h=l.separator,f=void 0===h?"/":h,g=l.className,x=o(l,d),v=(0,i.WR)(u),_=v.length,j=v.map((function(e,r){return s.cloneElement(e,{separator:f,spacing:m,isLastChild:_===r+1})})),b=(0,t.cx)("chakra-breadcrumb",g);return s.createElement(a.m$.nav,c({ref:r,"aria-label":"breadcrumb",className:b,__css:n.container},x),s.createElement(a.Fo,{value:n},s.createElement(a.m$.ol,{className:"chakra-breadcrumb__list"},j)))}));t.Ts&&(g.displayName="Breadcrumb")},5553:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[roadmap]/[group]",function(){return n(2903)}])},2903:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return v},default:function(){return _}});var a=n(5893),t=n(8527),i=n(1739),s=n(2438),c=n(1832),o=n(600),l=n(6673),u=n(2348),p=n(202),d=(n(7294),n(9876)),m=n(8641),h=n(5193);function f(e){var r=e.href;return(0,a.jsxs)(t.xu,{my:"30px",children:[(0,a.jsx)(t.iz,{mb:"15px",orientation:"horizontal"}),(0,a.jsx)(t.xv,{lineHeight:"23px",fontWeight:500,fontSize:"14px",color:"gray.500",mb:"10px",children:"This page is a work in progress. Help us by writing a small introduction to the topic and suggesting a few links to read more about this topic."}),(0,a.jsx)(h.zx,{size:"sm",py:"20px",as:t.rU,href:r,target:"_blank",isFullWidth:!0,colorScheme:"purple",_hover:{textDecoration:"none"},children:"Edit this Page"})]})}function g(e){var r=e.roadmap,i=e.group;if(!r.contentPathsFilePath)return null;var s=r.contentPathsFilePath.replace(/^\//,""),c=(n(9280)("./".concat(s))[i]||"").replace(/^\//,""),o=n(9280)("./".concat(c)).default;return(0,a.jsx)(t.xu,{children:(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(o,{}),(0,a.jsx)(f,{href:"".concat(m.url.repoData,"/").concat(c)})]})})}function x(e){var r=e.roadmap,n=e.group.split(":");return(0,a.jsxs)(i.aG,{fontWeight:"medium",fontSize:"sm",separator:(0,a.jsx)(d.XC,{color:"gray.500"}),children:[(0,a.jsx)(i.gN,{children:(0,a.jsx)(i.At,{color:"blue.500",href:"/".concat(r.id),children:r.featuredTitle})}),n.map((function(e,t){return(0,a.jsx)(i.gN,{isCurrentPage:t===n.length-1,children:(0,a.jsx)(i.At,{textTransform:"capitalize",color:"blue.500",href:"/".concat(r.id,"/").concat(n.slice(0,t+1).join(":")),children:e.split("-").join(" ")})},e)}))]})}var v=!0;function _(e){var r,n,i=e.roadmap,u=e.group,d=e.isOutlet;return void 0!==d&&d?(0,a.jsx)(g,{roadmap:i,group:u}):(0,a.jsxs)(t.xu,{bg:"white",minH:"100vh",children:[(0,a.jsx)(s.e,{}),(0,a.jsx)(p.Z,{title:(null===i||void 0===i||null===(r=i.seo)||void 0===r?void 0:r.title)||i.title,description:(null===i||void 0===i||null===(n=i.seo)||void 0===n?void 0:n.description)||i.description,keywords:(null===i||void 0===i?void 0:i.seo.keywords)||[]}),(0,a.jsxs)(t.W2,{my:"60px",maxW:"container.md",position:"relative",children:[(0,a.jsx)(x,{roadmap:i,group:u}),(0,a.jsx)(g,{roadmap:i,group:u})]}),(0,a.jsx)(c.z,{}),(0,a.jsx)(o.q,{}),(0,a.jsx)(l.$,{})]})}}},function(e){e.O(0,[760,22,515,122,70,636,280,774,888,179],(function(){return r=5553,e(e.s=r);var r}));var r=e.O();_N_E=r}]);