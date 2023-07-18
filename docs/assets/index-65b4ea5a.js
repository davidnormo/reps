(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var V,f,he,$,Y,pe,q,me,T={},ve=[],Ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function H(t,e){for(var n in e)t[n]=e[n];return t}function ge(t){var e=t.parentNode;e&&e.removeChild(t)}function $e(t,e,n){var o,i,r,l={};for(r in e)r=="key"?o=e[r]:r=="ref"?i=e[r]:l[r]=e[r];if(arguments.length>2&&(l.children=arguments.length>3?V.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)l[r]===void 0&&(l[r]=t.defaultProps[r]);return A(t,l,o,i,null)}function A(t,e,n,o,i){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++he};return i==null&&f.vnode!=null&&f.vnode(r),r}function z(t){return t.children}function M(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?D(t):null}function ye(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return ye(t)}}function R(t){(!t.__d&&(t.__d=!0)&&$.push(t)&&!O.__r++||Y!==f.debounceRendering)&&((Y=f.debounceRendering)||pe)(O)}function O(){var t,e,n,o,i,r,l,c,s;for($.sort(q);t=$.shift();)t.__d&&(e=$.length,o=void 0,i=void 0,r=void 0,c=(l=(n=t).__v).__e,(s=n.__P)&&(o=[],i=[],(r=H({},l)).__v=l.__v+1,Q(s,l,r,n.__n,s.ownerSVGElement!==void 0,l.__h!=null?[c]:null,o,c??D(l),l.__h,i),we(o,l,i),l.__e!=c&&ye(l)),$.length>e&&$.sort(q));O.__r=0}function be(t,e,n,o,i,r,l,c,s,v,p){var _,m,h,a,d,L,g,b,N,C,x=0,w=o&&o.__k||ve,P=w.length,E=P,k=e.length;for(n.__k=[],_=0;_<k;_++)(a=n.__k[_]=(a=e[_])==null||typeof a=="boolean"||typeof a=="function"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?A(null,a,null,null,a):K(a)?A(z,{children:a},null,null,null):a.__b>0?A(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null&&(a.__=n,a.__b=n.__b+1,(b=Le(a,w,g=_+x,E))===-1?h=T:(h=w[b]||T,w[b]=void 0,E--),Q(t,a,h,i,r,l,c,s,v,p),d=a.__e,(m=a.ref)&&h.ref!=m&&(h.ref&&X(h.ref,null,a),p.push(m,a.__c||d,a)),d!=null&&(L==null&&(L=d),C=!(N=h===T||h.__v===null)&&b===g,N?b==-1&&x--:b!==g&&(b===g+1?(x++,C=!0):b>g?E>k-g?(x+=b-g,C=!0):x--:x=b<g&&b==g-1?b-g:0),g=_+x,C=C||b==_&&!N,typeof a.type!="function"||b===g&&h.__k!==a.__k?typeof a.type=="function"||C?a.__d!==void 0?(s=a.__d,a.__d=void 0):s=d.nextSibling:s=xe(t,d,s):s=ke(a,s,t),typeof n.type=="function"&&(n.__d=s)));for(n.__e=L,_=P;_--;)w[_]!=null&&(typeof n.type=="function"&&w[_].__e!=null&&w[_].__e==n.__d&&(n.__d=w[_].__e.nextSibling),Ne(w[_],w[_]))}function ke(t,e,n){for(var o,i=t.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=t,e=typeof o.type=="function"?ke(o,e,n):xe(n,o.__e,e));return e}function xe(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function Le(t,e,n,o){var i=t.key,r=t.type,l=n-1,c=n+1,s=e[n];if(s===null||s&&i==s.key&&r===s.type)return n;if(o>(s!=null?1:0))for(;l>=0||c<e.length;){if(l>=0){if((s=e[l])&&i==s.key&&r===s.type)return l;l--}if(c<e.length){if((s=e[c])&&i==s.key&&r===s.type)return c;c++}}return-1}function Te(t,e,n,o,i){var r;for(r in n)r==="children"||r==="key"||r in e||j(t,r,null,n[r],o);for(r in e)i&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===e[r]||j(t,r,e[r],n[r],o)}function Z(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Ee.test(e)?n:n+"px"}function j(t,e,n,o,i){var r;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||Z(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||Z(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?o||t.addEventListener(e,r?te:ee,r):t.removeEventListener(e,r?te:ee,r);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function ee(t){return this.l[t.type+!1](f.event?f.event(t):t)}function te(t){return this.l[t.type+!0](f.event?f.event(t):t)}function Q(t,e,n,o,i,r,l,c,s,v){var p,_,m,h,a,d,L,g,b,N,C,x,w,P,E,k=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(s=n.__h,c=e.__e=n.__e,e.__h=null,r=[c]),(p=f.__b)&&p(e);try{e:if(typeof k=="function"){if(g=e.props,b=(p=k.contextType)&&o[p.__c],N=p?b?b.props.value:p.__:o,n.__c?L=(_=e.__c=n.__c).__=_.__E:("prototype"in k&&k.prototype.render?e.__c=_=new k(g,N):(e.__c=_=new M(g,N),_.constructor=k,_.render=Ae),b&&b.sub(_),_.props=g,_.state||(_.state={}),_.context=N,_.__n=o,m=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),k.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=H({},_.__s)),H(_.__s,k.getDerivedStateFromProps(g,_.__s))),h=_.props,a=_.state,_.__v=e,m)k.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(k.getDerivedStateFromProps==null&&g!==h&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(g,N),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(g,_.__s,N)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(_.props=g,_.state=_.__s,_.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(U){U&&(U.__=e)}),C=0;C<_._sb.length;C++)_.__h.push(_._sb[C]);_._sb=[],_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(g,_.__s,N),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(h,a,d)})}if(_.context=N,_.props=g,_.__P=t,_.__e=!1,x=f.__r,w=0,"prototype"in k&&k.prototype.render){for(_.state=_.__s,_.__d=!1,x&&x(e),p=_.render(_.props,_.state,_.context),P=0;P<_._sb.length;P++)_.__h.push(_._sb[P]);_._sb=[]}else do _.__d=!1,x&&x(e),p=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++w<25);_.state=_.__s,_.getChildContext!=null&&(o=H(H({},o),_.getChildContext())),m||_.getSnapshotBeforeUpdate==null||(d=_.getSnapshotBeforeUpdate(h,a)),be(t,K(E=p!=null&&p.type===z&&p.key==null?p.props.children:p)?E:[E],e,n,o,i,r,l,c,s,v),_.base=e.__e,e.__h=null,_.__h.length&&l.push(_),L&&(_.__E=_.__=null)}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ue(n.__e,e,n,o,i,r,l,s,v);(p=f.diffed)&&p(e)}catch(U){e.__v=null,(s||r!=null)&&(e.__e=c,e.__h=!!s,r[r.indexOf(c)]=null),f.__e(U,e,n)}}function we(t,e,n){for(var o=0;o<n.length;o++)X(n[o],n[++o],n[++o]);f.__c&&f.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(r){r.call(i)})}catch(r){f.__e(r,i.__v)}})}function Ue(t,e,n,o,i,r,l,c,s){var v,p,_,m=n.props,h=e.props,a=e.type,d=0;if(a==="svg"&&(i=!0),r!=null){for(;d<r.length;d++)if((v=r[d])&&"setAttribute"in v==!!a&&(a?v.localName===a:v.nodeType===3)){t=v,r[d]=null;break}}if(t==null){if(a===null)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,h.is&&h),r=null,c=!1}if(a===null)m===h||c&&t.data===h||(t.data=h);else{if(r=r&&V.call(t.childNodes),p=(m=n.props||T).dangerouslySetInnerHTML,_=h.dangerouslySetInnerHTML,!c){if(r!=null)for(m={},d=0;d<t.attributes.length;d++)m[t.attributes[d].name]=t.attributes[d].value;(_||p)&&(_&&(p&&_.__html==p.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(Te(t,h,m,i,c),_)e.__k=[];else if(be(t,K(d=e.props.children)?d:[d],e,n,o,i&&a!=="foreignObject",r,l,r?r[0]:n.__k&&D(n,0),c,s),r!=null)for(d=r.length;d--;)r[d]!=null&&ge(r[d]);c||("value"in h&&(d=h.value)!==void 0&&(d!==t.value||a==="progress"&&!d||a==="option"&&d!==m.value)&&j(t,"value",d,m.value,!1),"checked"in h&&(d=h.checked)!==void 0&&d!==t.checked&&j(t,"checked",d,m.checked,!1))}return t}function X(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(o){f.__e(o,n)}}function Ne(t,e,n){var o,i;if(f.unmount&&f.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||X(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){f.__e(r,e)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&Ne(o[i],e,n||typeof t.type!="function");n||t.__e==null||ge(t.__e),t.__=t.__e=t.__d=void 0}function Ae(t,e,n){return this.constructor(t,n)}function Me(t,e,n){var o,i,r,l;f.__&&f.__(t,e),i=(o=typeof n=="function")?null:n&&n.__k||e.__k,r=[],l=[],Q(e,t=(!o&&n||e).__k=$e(z,null,[t]),i||T,T,e.ownerSVGElement!==void 0,!o&&n?[n]:i?null:e.firstChild?V.call(e.childNodes):null,r,!o&&n?n:i?i.__e:e.firstChild,o,l),we(r,t,l)}function We(t,e){var n={__c:e="__cC"+me++,__:t,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,r;return this.getChildContext||(i=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(function(c){c.__e=!0,R(c)})},this.sub=function(l){i.push(l);var c=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),c&&c.call(l)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}V=ve.slice,f={__e:function(t,e,n,o){for(var i,r,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(t)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,o||{}),l=i.__d),l)return i.__E=i}catch(c){t=c}throw t}},he=0,M.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof t=="function"&&(t=t(H({},n),this.props)),t&&H(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),R(this))},M.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),R(this))},M.prototype.render=z,$=[],pe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(t,e){return t.__v.__b-e.__v.__b},O.__r=0,me=0;var Be=0;function u(t,e,n,o,i,r){var l,c,s={};for(c in e)c=="ref"?l=e[c]:s[c]=e[c];var v={type:t,props:s,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Be,__source:i,__self:r};if(typeof t=="function"&&(l=t.defaultProps))for(c in l)s[c]===void 0&&(s[c]=l[c]);return f.vnode&&f.vnode(v),v}function De(){return u("div",{className:"",children:u("section",{id:"bottom-navigation",className:"md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow text-primary",children:u("div",{id:"tabs",className:"flex justify-between",children:[u("a",{href:"#overview",className:"w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1",children:u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"35",height:"35",className:"inline-block mb-1",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"})})}),u("a",{href:"#record",className:"w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1",children:u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"35",height:"35",className:"inline-block  mb-1",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"})})}),u("a",{href:"#manage",className:"w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1",children:u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"35",height:"35",className:"inline-block  mb-1",children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})})})]})})})}var F,y,I,ne,G=0,Ce=[],W=[],re=f.__b,oe=f.__r,_e=f.diffed,ie=f.__c,le=f.unmount;function Se(t,e){f.__h&&f.__h(y,t,G||e),G=0;var n=y.__H||(y.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:W}),n.__[t]}function S(t){return G=1,Oe(He,t)}function Oe(t,e,n){var o=Se(F++,2);if(o.t=t,!o.__c&&(o.__=[n?n(e):He(void 0,e),function(c){var s=o.__N?o.__N[0]:o.__[0],v=o.t(s,c);s!==v&&(o.__N=[v,o.__[1]],o.__c.setState({}))}],o.__c=y,!y.u)){var i=function(c,s,v){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(m){return m.__c});if(p.every(function(m){return!m.__N}))return!r||r.call(this,c,s,v);var _=!1;return p.forEach(function(m){if(m.__N){var h=m.__[0];m.__=m.__N,m.__N=void 0,h!==m.__[0]&&(_=!0)}}),!(!_&&o.__c.props===c)&&(!r||r.call(this,c,s,v))};y.u=!0;var r=y.shouldComponentUpdate,l=y.componentWillUpdate;y.componentWillUpdate=function(c,s,v){if(this.__e){var p=r;r=void 0,i(c,s,v),r=p}l&&l.call(this,c,s,v)},y.shouldComponentUpdate=i}return o.__N||o.__}function je(t,e){var n=Se(F++,3);!f.__s&&ze(n.__H,e)&&(n.__=t,n.i=e,y.__H.__h.push(n))}function Fe(){for(var t;t=Ce.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(B),t.__H.__h.forEach(J),t.__H.__h=[]}catch(e){t.__H.__h=[],f.__e(e,t.__v)}}f.__b=function(t){y=null,re&&re(t)},f.__r=function(t){oe&&oe(t),F=0;var e=(y=t.__c).__H;e&&(I===y?(e.__h=[],y.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=W,n.__N=n.i=void 0})):(e.__h.forEach(B),e.__h.forEach(J),e.__h=[],F=0)),I=y},f.diffed=function(t){_e&&_e(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ce.push(e)!==1&&ne===f.requestAnimationFrame||((ne=f.requestAnimationFrame)||Ve)(Fe)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==W&&(n.__=n.__V),n.i=void 0,n.__V=W})),I=y=null},f.__c=function(t,e){e.some(function(n){try{n.__h.forEach(B),n.__h=n.__h.filter(function(o){return!o.__||J(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],f.__e(o,n.__v)}}),ie&&ie(t,e)},f.unmount=function(t){le&&le(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{B(o)}catch(i){e=i}}),n.__H=void 0,e&&f.__e(e,n.__v))};var ce=typeof requestAnimationFrame=="function";function Ve(t){var e,n=function(){clearTimeout(o),ce&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);ce&&(e=requestAnimationFrame(n))}function B(t){var e=y,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),y=e}function J(t){var e=y;t.__c=t.__(),y=e}function ze(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function He(t,e){return typeof e=="function"?e(t):e}const Pe=()=>JSON.parse(window.localStorage.getItem("data")||"{}"),Ie=Pe(),qe=We(Ie);function Re(){return"TBC"}function Ge(){return u(Re,{})}function Je(){}const Ke=({className:t="",...e})=>u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"32",height:"32",className:`text-primary ${t}`,...e,children:u("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})});function ae({initialValue:t,label:e,placeholder:n="",onCommit:o=()=>{}}){const[i,r]=S(t),l=e.replace(" ","");return u("div",{className:"mb-3",children:[u("label",{for:l,className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:e}),u("input",{value:i,onChange:c=>r(c.target.value),type:"text",id:l,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:n,onBlur:c=>o(c.target.value)})]})}function se({label:t,value:e=!1,onCommit:n=()=>{}}){const[o,i]=S(e);return u("div",{className:"mb-3",children:u("label",{className:"relative inline-flex items-center cursor-pointer mb-2",children:[u("input",{type:"checkbox",value:o,onChange:r=>{i(r.target.checked),n(r.target.checked)},className:"sr-only peer"}),u("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"}),u("span",{className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:t})]})})}function Qe({label:t,options:e,value:n,onCommit:o}){const[i,r]=S(n),l=t.replace(" ","");return u("div",{className:"mb-3",children:[u("label",{for:l,className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:t}),u("select",{id:l,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:c=>{r(c.target.value),o(c.target.value)},children:e.map(c=>u("option",{value:c,selected:c===i,children:c},c))})]})}function Xe({children:t}){return u("button",{type:"submit",className:"text-white bg-primary focus:ring-4 focus:outline-none focus:ring-cyan-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center",children:t.toUpperCase()})}const ue=["None","kg","cm","metres"];function Ye(){const[t,e]=S(""),[n,o]=S(""),[i,r]=S(ue[0]),[l,c]=S(!1),[s,v]=S(!1);return u("div",{className:"h-full mt-1 px-2",children:[u("h3",{className:"text-xl mb-2",children:"Add New Exercise"}),u(ae,{label:"Name",onCommit:e,initialValue:t,placeholder:"Pull Ups"}),u(ae,{label:"Category",onCommit:o,initialValue:n,placeholder:"Workout"}),u(Qe,{label:"Unit",options:ue,value:i,onCommit:r}),u(se,{label:"Timed",value:l,onCommit:c}),u(se,{label:"Sets",value:s,onCommit:v}),u(Xe,{children:"Save"})]})}function Ze(){const[t,e]=S(!1);return u("div",{className:"w-full mt-1",children:[!t&&u("div",{className:"flex justify-between content-center w-full px-2",children:[u("h2",{className:"text-2xl",children:"Manage Exercises"}),u(Ke,{className:"cursor-pointer",onClick:()=>e(!0)})]}),t&&u(Ye,{})]})}const fe=()=>({page:window.location.hash.slice(1)});let de=!1;const et={overview:Ge,record:Je,manage:Ze};function tt(){const[t,e]=S(fe());je(()=>{de||(de=!0,window.addEventListener("popstate",i=>{e(i.state||fe())}))},[]);const{page:n}=t;let o=et[n];if(!o)throw new Error(`Unsupported page: ${n}`);return{...t,PageComponent:o}}function nt(){const{PageComponent:t}=tt();return u("div",{className:"h-full w-full",children:[u("h1",{className:"text-3xl font-bold mt-1 ml-1",children:"Reps"}),u(t,{}),u(De,{})]})}Me(u(qe.Provider,{value:Pe(),children:u(nt,{})}),document.getElementById("app"));
