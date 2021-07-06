(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{3484:function(e,t,n){"use strict";var a=n(5893),r=n(9008);t.Z=function(e){var t=e.pageTitle,n="Joanna Chen: Los Angeles based software engineer and percussionist.";return(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{property:"og:title",content:t},"og:title"),(0,a.jsx)("meta",{property:"og:site_name",content:t},"og:site_name"),(0,a.jsx)("meta",{property:"og:image",content:"/images/boba-jo.jpg"},"og:image"),(0,a.jsx)("meta",{property:"og:description",content:n},"og:description"),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-status-bar",content:"#ffffff"}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("meta",{name:"title",content:t}),(0,a.jsx)("meta",{name:"keywords",content:"software engineer development metal pay proton blockchain XPR MTL NFT app academy web frontend fullstack programming ruby typescript javascript c# node rails react redux express .net core percussionist percussion marimba"}),(0,a.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,a.jsx)("link",{rel:"canonical",href:"https://joannerd.github.io/"}),(0,a.jsx)("link",{rel:"icon",href:"favicon.ico",type:"image/x-icon"}),(0,a.jsx)("link",{rel:"apple-touch-icon",href:"/logo.png"})]})}},3398:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n(7294))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(r.default.useContext(o.AmpStateContext))};var a,r=(a=n(7294))&&a.__esModule?a:{default:a},o=n(3398);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,s=void 0!==o&&o;return n||r&&s}},2775:function(e,t,n){"use strict";var a=n(1682);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var o,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),i=(o=n(3244))&&o.__esModule?o:{default:o},c=n(3398),l=n(1165),u=n(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0,s=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){s=!0;var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var c=0,l=h.length;c<l;c++){var u=h[c];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var d=r.props[u],p=a[u]||new Set;"name"===u&&s||!p.has(d)?(p.add(d),a[u]=p):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,s.default.cloneElement(e,i)}return s.default.cloneElement(e,{key:o})}))}var g=function(e){var t=e.children,n=(0,s.useContext)(c.AmpStateContext),a=(0,s.useContext)(l.HeadManagerContext);return s.default.createElement(i.default,{reduceComponentsToState:m,headManager:a,inAmpMode:(0,u.isInAmpMode)(n)},t)};t.default=g},3244:function(e,t,n){"use strict";var a=n(3115),r=n(2553),o=n(2012),s=(n(450),n(9807)),i=n(7690),c=n(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n(7294),d=function(e){s(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},6458:function(e,t,n){"use strict";n.r(t);var a=n(5893),r=n(3484),o=n(119),s=n.n(o),i=n(9925),c=[{company:"Metallicus Inc.",dates:"Oct 2020 - present",jobs:[{title:"Software Engineer",dates:"Oct 2020 - present",bullets:["Built an NFT marketplace, 6 greenfield decentralized applications, an internal dashboard, and the Proton Web SDK as a core member of the Proton team (React, Gatsby, Next.js, Node.js, Greymass EosJS, Firebase, Contentful)","Drove the adoption of TypeScript, Next.js, and accessibility awareness and spearheaded team group learning to inspire engineering growth (topics: EOSIO blockchain, web accessibility)","Exhibited leadership by communicating with other teams to resolve prod issues while manager was away","Mentored intern through educational calls and thorough code-reviews (received public feedback for being a \u201cgreat teacher who inspires them to be a better programmer\u201d)"]}]},{company:"App Academy",dates:"Jan 2020 - Oct 2020",jobs:[{title:"Software Engineer Intern",dates:"June 2020 - Sep 2020",bullets:["Architected frontend for learning management system with modern tech (TypeScript, React, Material-UI)","Developed API endpoints in C# following test-driven development (.NET Core, CQRS)","Contributed to domain-model planning to solidify domain-driven-design before app development"]},{title:"Curriculum Developer",dates:"March 2020 - Oct 2020",bullets:["Rapidly researched and taught React, Node.js, Flask, and OOP with educational projects and tutorials","Launched new React, Redux, and Hooks curriculum and managed team of senior developer contractors","Presented lectures on React lifecycle methods, React hooks, frontend state management, and user auth"]},{title:"Technical Interviewer",dates:"Jan 2020 - March 2020",bullets:["Conducted video technical and behavioral screens on HackerRank in JavaScript, Ruby, and Python"]}]},{company:"Boston Conservatory at Berklee",dates:"Oct 2018 - April 2019",jobs:[{title:"Production Manager",dates:"Jan 2020 - March 2020",bullets:["Custom staff role due to 4-years of experience as an essential, cross-departmental student employee","Solved logistics problems thoroughly and quickly in high-pressure, client-facing concerts and events","Supervised and trained a team of 30+ student employees on professional concert services standards"]}]}],l=[{title:"SCMIAC",technologies:"Next.js, React (TypeScript), Google Drive API (Python, Node.js)",description:"Built for Southern California Marimba\u2019s 2021 International Artist Competition to streamline anonymous applicant material navigation in the judging process of 200 preliminary round participants",bullets:["Single-handedly designed, developed, and tested an intuitive web app to easily listen to an anonymous applicant\u2019s MP3 files while reviewing their PDF sheet music","Developed Python script as proof of concept to bulk-anonymize applicant files with Google Drive API","Used Node.js Google Drive API in server-side Next.js code to fetch real-time Google Form updates","Implemented light-weight data processing to extract and organize data from Google Spreadsheets"]},{title:"Brewer",technologies:"Ruby on Rails, PostgreSQL, React/Redux, Mapbox API, Yelp REST API",description:"Full-stack content platform that connects craft beer enthusiasts through a forum and top brewery travel guides",bullets:["Autonomously developed and designed the database schema, web API, and frontend application","Utilized AWS S3 and Rails Active Storage to reduce server load and allow app to scale"]},{title:"Synewaveshi",technologies:"Express.js, React, Web Speech API, Socket.io, Tone.js",description:"Pet project to explore voice-controlled music generation and co-creation of sounds via web browser",bullets:["Set up WebSocket connection for users to co-create musical tones with real-time voice input","Managed chat history storage with linked list for organized WebSocket interaction in the backend API"]}],u=[{school:"App Academy (SF)",description:"Software development intensive (Ruby, JavaScript, SQL)",dates:"Aug 2019 - Dec 2019"},{school:"Boston Conservatory at Berklee",description:"Bachelor of Music: Percussion (3.87 GPA)",dates:"Aug 2014 - May 2018"},{school:"Massachusetts Institute of Technology",description:"2.S972/ICE-P435 (VR/AR Workshop)",dates:"Aug 2017 - Dec 2017"}];t.default=function(){return(0,a.jsxs)("article",{children:[(0,a.jsx)(r.Z,{pageTitle:"Resume | Joanna Chen"}),(0,a.jsx)("h2",{className:s().title,children:"Experience"}),(0,a.jsx)("ul",{children:c.map((function(e){var t=e.company,n=e.jobs;return(0,a.jsxs)("li",{className:s().experience,children:[(0,a.jsx)("h3",{className:s().company,children:t}),n.map((function(e){var t=e.title,n=e.dates,r=e.bullets;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("span",{className:s().info,children:[(0,a.jsx)("h4",{className:s().subtitle,children:t}),(0,a.jsx)("p",{className:s().dates,children:n})]}),(0,a.jsx)("ul",{className:s().bullets,children:r.map((function(e,n){return(0,a.jsx)("li",{children:(0,a.jsx)("p",{className:s().bullet,children:e})},"".concat(t,"-bullet-").concat(n))}))})]},t)}))]},t)}))}),(0,a.jsx)("h2",{className:s().title,children:"Projects"}),(0,a.jsx)("ul",{children:l.map((function(e){var t=e.title,n=e.technologies,r=e.description,o=e.bullets;return(0,a.jsxs)("li",{className:s().experience,children:[(0,a.jsxs)("span",{className:s().info,children:[(0,a.jsx)("h3",{className:s().subtitle,children:t}),(0,a.jsx)("p",{className:s().technologies,children:n})]}),(0,a.jsxs)("ul",{className:s().bullets,children:[(0,a.jsx)("li",{children:(0,a.jsx)("p",{className:s().bullet,children:r})},"description"),o.map((function(e,n){return(0,a.jsx)("li",{children:(0,a.jsx)("p",{className:s().bullet,children:e})},"".concat(t,"-bullet-").concat(n))}))]})]},t)}))}),(0,a.jsx)("h2",{className:s().title,children:"Education"}),(0,a.jsx)("ul",{children:u.map((function(e){var t=e.school,n=e.description,r=e.dates;return(0,a.jsxs)("li",{className:s().experience,children:[(0,a.jsxs)("span",{className:s().info,children:[(0,a.jsx)("h3",{className:s().subtitle,children:t}),(0,a.jsx)("p",{className:s().dates,children:r})]}),(0,a.jsx)("p",{children:n})]},t)}))}),(0,a.jsxs)("button",{role:"link",type:"button","aria-label":"Joanna Chen resume",className:s().resume,onClick:function(){i.B({action:"view_resume",category:"engagement",label:"View resume",value:1}),window.open("https://brewer-dev.s3-us-west-1.amazonaws.com/portfolio/Joanna_Chen_Resume.pdf")},children:[(0,a.jsx)("i",{className:"fas fa-file-download"}),(0,a.jsx)("span",{className:s().tooltip,children:"Download resume"})]})]})}},6438:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return n(6458)}])},119:function(e){e.exports={skills:"Resume_skills__2d5OY",title:"Resume_title__2Yhq2",resume:"Resume_resume__18ynG",tooltip:"Resume_tooltip__1DUKp",experience:"Resume_experience__3D7_x",company:"Resume_company__1khX0",info:"Resume_info__63sBD",subtitle:"Resume_subtitle__3CsIA",dates:"Resume_dates__1Ct2z",technologies:"Resume_technologies__dEwkk",bullets:"Resume_bullets__2z2vP",bullet:"Resume_bullet__2UQ7v"}},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var a=n(4360);e.exports=function(e){if(Array.isArray(e))return a(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var a=n(8164),r=n(7381),o=n(3585),s=n(5725);e.exports=function(e){return a(e)||r(e)||o(e)||s()}}},function(e){e.O(0,[774,888,179],(function(){return t=6438,e(e.s=t);var t}));var t=e.O();_N_E=t}]);