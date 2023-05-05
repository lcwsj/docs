(self.webpackChunknote4java=self.webpackChunknote4java||[]).push([[340],{2143:function(P,W,g){"use strict";var I=g(57199),j=g(67294),k=g(96057);function h(t,e){return w(t)||O(t,e)||_(t,e)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,e){if(t){if(typeof t=="string")return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}}function b(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function O(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,c,m;try{for(n=n.call(t);!(o=(c=n.next()).done)&&(r.push(c.value),!(e&&r.length===e));o=!0);}catch(d){i=!0,m=d}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw m}}return r}}function w(t){if(Array.isArray(t))return t}var T={toString:function(e){return typeof e.type=="string"&&e.type in this?"enum"in e?this.enum(e):this[e.type](e):e.type?this.getValidClassName(e)||e.type:"const"in e?e.const:"oneOf"in e?this.oneOf(e):"unknown"},string:function(e){return e.type},number:function(e){return e.type},boolean:function(e){return e.type},any:function(e){return e.type},object:function(e){var n=this,r=[];return Object.entries(e.properties||{}).forEach(function(o){var i,c=h(o,2),m=c[0],d=c[1];r.push("".concat(m).concat((i=e.required)!==null&&i!==void 0&&i.includes(m)?"":"?",": ").concat(d.type==="object"?"object":n.toString(d)))}),r.length?"{ ".concat(r.join("; ")," }"):"{}"},array:function(e){if(e.items){var n=this.getValidClassName(e.items);return n?"".concat(n,"[]"):"".concat(this.toString(e.items),"[]")}return"any[]"},element:function(e){return"<".concat(e.componentName," />")},function:function(e){var n=this,r=e.signature,o="oneOf"in r?r.oneOf:[r];return o.map(function(i){return"".concat(i.isAsync?"async ":"","(").concat(i.arguments.map(function(c){return"".concat(c.key,": ").concat(n.toString(c))}).join(", "),") => ").concat(n.toString(i.returnType))}).join(" | ")},dom:function(e){return e.className||"DOM"},enum:function(e){return e.enum.map(function(n){return JSON.stringify(n)}).join(" | ")},oneOf:function(e){var n=this;return e.oneOf.map(function(r){return n.getValidClassName(r)||n.toString(r)}).join(" | ")},getValidClassName:function(e){return"className"in e&&typeof e.className=="string"&&e.className!=="__type"?e.className:null}},C=function(e){var n=useState(function(){return T.toString(e)}),r=h(n,2),o=r[0],i=r[1];return useEffect(function(){i(T.toString(e))},[e]),React.createElement("code",null,o)},B=function(e){var n,r=useRouteMeta(),o=r.frontmatter,i=useAtomAssets(),c=i.components,m=e.id||o.atomId,d=useIntl();if(!m)throw new Error("`id` properties if required for API component!");var a=c==null?void 0:c[m];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,d.formatMessage({id:"api.component.name"})),React.createElement("th",null,d.formatMessage({id:"api.component.description"})),React.createElement("th",null,d.formatMessage({id:"api.component.type"})),React.createElement("th",null,d.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,a&&(n=a.propsConfig)!==null&&n!==void 0&&n.properties?Object.entries(a.propsConfig.properties).map(function(u){var l,y=h(u,2),s=y[0],v=y[1];return React.createElement("tr",{key:s},React.createElement("td",null,s),React.createElement("td",null,v.description||"--"),React.createElement("td",null,React.createElement(C,v)),React.createElement("td",null,React.createElement("code",null,(l=a.propsConfig.required)!==null&&l!==void 0&&l.includes(s)?d.formatMessage({id:"api.component.required"}):JSON.stringify(v.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},d.formatMessage({id:"api.component.".concat(c?"not.found":"unavailable")},{id:m}))))))},D=null},93359:function(P,W,g){"use strict";var I=g(67294);function j(){return j=Object.assign?Object.assign.bind():function(E){for(var _=1;_<arguments.length;_++){var b=arguments[_];for(var O in b)Object.prototype.hasOwnProperty.call(b,O)&&(E[O]=b[O])}return E},j.apply(this,arguments)}var k=function(_){return React.createElement("span",j({className:"dumi-default-badge"},_))},h=null},96057:function(P,W,g){"use strict";var I=g(93096),j=g(67294),k=null;function h(t,e){return w(t)||O(t,e)||_(t,e)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(t,e){if(t){if(typeof t=="string")return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}}function b(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function O(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,c,m;try{for(n=n.call(t);!(o=(c=n.next()).done)&&(r.push(c.value),!(e&&r.length===e));o=!0);}catch(d){i=!0,m=d}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw m}}return r}}function w(t){if(Array.isArray(t))return t}function T(t,e){if(t==null)return{};var n=C(t,e),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function C(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}var B=function(e){var n=e.children,r=T(e,k),o=useRef(null),i=useState(!1),c=h(i,2),m=c[0],d=c[1],a=useState(!1),u=h(a,2),l=u[0],y=u[1];return useEffect(function(){var s=o.current;if(s){var v=throttle(function(){d(s.scrollLeft>0),y(s.scrollLeft<s.scrollWidth-s.offsetWidth)},100);return v(),s.addEventListener("scroll",v),window.addEventListener("resize",v),function(){s.removeEventListener("scroll",v),window.removeEventListener("resize",v)}}},[]),React.createElement("div",{className:"dumi-default-table"},React.createElement("div",{className:"dumi-default-table-content",ref:o,"data-left-folded":m||void 0,"data-right-folded":l||void 0},React.createElement("table",r,n)))},D=null},93096:function(P,W,g){var I="Expected a function",j=NaN,k="[object Symbol]",h=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,b=/^0o[0-7]+$/i,O=parseInt,w=typeof g.g=="object"&&g.g&&g.g.Object===Object&&g.g,T=typeof self=="object"&&self&&self.Object===Object&&self,C=w||T||Function("return this")(),B=Object.prototype,D=B.toString,t=Math.max,e=Math.min,n=function(){return C.Date.now()};function r(a,u,l){var y,s,v,R,p,A,x=0,V=!1,M=!1,$=!0;if(typeof a!="function")throw new TypeError(I);u=d(u)||0,i(l)&&(V=!!l.leading,M="maxWait"in l,v=M?t(d(l.maxWait)||0,u):v,$="trailing"in l?!!l.trailing:$);function F(f){var S=y,N=s;return y=s=void 0,x=f,R=a.apply(N,S),R}function J(f){return x=f,p=setTimeout(L,u),V?F(f):R}function X(f){var S=f-A,N=f-x,z=u-S;return M?e(z,v-N):z}function H(f){var S=f-A,N=f-x;return A===void 0||S>=u||S<0||M&&N>=v}function L(){var f=n();if(H(f))return K(f);p=setTimeout(L,X(f))}function K(f){return p=void 0,$&&y?F(f):(y=s=void 0,R)}function G(){p!==void 0&&clearTimeout(p),x=0,y=A=s=p=void 0}function Q(){return p===void 0?R:K(n())}function U(){var f=n(),S=H(f);if(y=arguments,s=this,A=f,S){if(p===void 0)return J(A);if(M)return p=setTimeout(L,u),F(A)}return p===void 0&&(p=setTimeout(L,u)),R}return U.cancel=G,U.flush=Q,U}function o(a,u,l){var y=!0,s=!0;if(typeof a!="function")throw new TypeError(I);return i(l)&&(y="leading"in l?!!l.leading:y,s="trailing"in l?!!l.trailing:s),r(a,u,{leading:y,maxWait:u,trailing:s})}function i(a){var u=typeof a;return!!a&&(u=="object"||u=="function")}function c(a){return!!a&&typeof a=="object"}function m(a){return typeof a=="symbol"||c(a)&&D.call(a)==k}function d(a){if(typeof a=="number")return a;if(m(a))return j;if(i(a)){var u=typeof a.valueOf=="function"?a.valueOf():a;a=i(u)?u+"":u}if(typeof a!="string")return a===0?a:+a;a=a.replace(h,"");var l=_.test(a);return l||b.test(a)?O(a.slice(2),l?2:8):E.test(a)?j:+a}P.exports=o}}]);
