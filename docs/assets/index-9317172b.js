(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();var G,u,be,H,ie,we,Q,ke,M={},Ne=[],Re=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,te=Array.isArray;function E(e,t){for(var n in t)e[n]=t[n];return e}function Ce(e){var t=e.parentNode;t&&t.removeChild(e)}function Ve(e,t,n){var o,l,r,c={};for(r in t)r=="key"?o=t[r]:r=="ref"?l=t[r]:c[r]=t[r];if(arguments.length>2&&(c.children=arguments.length>3?G.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return B(e,c,o,l,null)}function B(e,t,n,o,l){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++be};return l==null&&u.vnode!=null&&u.vnode(r),r}function j(e){return e.children}function R(e,t){this.props=e,this.context=t}function F(e,t){if(t==null)return e.__?F(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?F(e):null}function Se(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Se(e)}}function X(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!z.__r++||ie!==u.debounceRendering)&&((ie=u.debounceRendering)||we)(z)}function z(){var e,t,n,o,l,r,c,s,_;for(H.sort(Q);e=H.shift();)e.__d&&(t=H.length,o=void 0,l=void 0,r=void 0,s=(c=(n=e).__v).__e,(_=n.__P)&&(o=[],l=[],(r=E({},c)).__v=c.__v+1,ne(_,c,r,n.__n,_.ownerSVGElement!==void 0,c.__h!=null?[s]:null,o,s??F(c),c.__h,l),Te(o,c,l),c.__e!=s&&Se(c)),H.length>t&&H.sort(Q));z.__r=0}function $e(e,t,n,o,l,r,c,s,_,v,p){var i,f,h,d,m,P,g,y,S,$,N=0,C=o&&o.__k||Ne,L=C.length,T=L,w=t.length;for(n.__k=[],i=0;i<w;i++)(d=n.__k[i]=(d=t[i])==null||typeof d=="boolean"||typeof d=="function"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?B(null,d,null,null,d):te(d)?B(j,{children:d},null,null,null):d.__b>0?B(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null&&(d.__=n,d.__b=n.__b+1,(y=Oe(d,C,g=i+N,T))===-1?h=M:(h=C[y]||M,C[y]=void 0,T--),ne(e,d,h,l,r,c,s,_,v,p),m=d.__e,(f=d.ref)&&h.ref!=f&&(h.ref&&re(h.ref,null,d),p.push(f,d.__c||m,d)),m!=null&&(P==null&&(P=m),$=!(S=h===M||h.__v===null)&&y===g,S?y==-1&&N--:y!==g&&(y===g+1?(N++,$=!0):y>g?T>w-g?(N+=y-g,$=!0):N--:N=y<g&&y==g-1?y-g:0),g=i+N,$=$||y==i&&!S,typeof d.type!="function"||y===g&&h.__k!==d.__k?typeof d.type=="function"||$?d.__d!==void 0?(_=d.__d,d.__d=void 0):_=m.nextSibling:_=Le(e,m,_):_=Ee(d,_,e),typeof n.type=="function"&&(n.__d=_)));for(n.__e=P,i=L;i--;)C[i]!=null&&(typeof n.type=="function"&&C[i].__e!=null&&C[i].__e==n.__d&&(n.__d=C[i].__e.nextSibling),He(C[i],C[i]))}function Ee(e,t,n){for(var o,l=e.__k,r=0;l&&r<l.length;r++)(o=l[r])&&(o.__=e,t=typeof o.type=="function"?Ee(o,t,n):Le(n,o.__e,t));return t}function Le(e,t,n){return n==null||n.parentNode!==e?e.insertBefore(t,null):t==n&&t.parentNode!=null||e.insertBefore(t,n),t.nextSibling}function Oe(e,t,n,o){var l=e.key,r=e.type,c=n-1,s=n+1,_=t[n];if(_===null||_&&l==_.key&&r===_.type)return n;if(o>(_!=null?1:0))for(;c>=0||s<t.length;){if(c>=0){if((_=t[c])&&l==_.key&&r===_.type)return c;c--}if(s<t.length){if((_=t[s])&&l==_.key&&r===_.type)return s;s++}}return-1}function Fe(e,t,n,o,l){var r;for(r in n)r==="children"||r==="key"||r in t||q(e,r,null,n[r],o);for(r in t)l&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||q(e,r,t[r],n[r],o)}function ae(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Re.test(t)?n:n+"px"}function q(e,t,n,o,l){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||ae(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||ae(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o||e.addEventListener(t,r?se:ce,r):e.removeEventListener(t,r?se:ce,r);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function ce(e){return this.l[e.type+!1](u.event?u.event(e):e)}function se(e){return this.l[e.type+!0](u.event?u.event(e):e)}function ne(e,t,n,o,l,r,c,s,_,v){var p,i,f,h,d,m,P,g,y,S,$,N,C,L,T,w=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(_=n.__h,s=t.__e=n.__e,t.__h=null,r=[s]),(p=u.__b)&&p(t);try{e:if(typeof w=="function"){if(g=t.props,y=(p=w.contextType)&&o[p.__c],S=p?y?y.props.value:p.__:o,n.__c?P=(i=t.__c=n.__c).__=i.__E:("prototype"in w&&w.prototype.render?t.__c=i=new w(g,S):(t.__c=i=new R(g,S),i.constructor=w,i.render=qe),y&&y.sub(i),i.props=g,i.state||(i.state={}),i.context=S,i.__n=o,f=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),w.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=E({},i.__s)),E(i.__s,w.getDerivedStateFromProps(g,i.__s))),h=i.props,d=i.state,i.__v=t,f)w.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(w.getDerivedStateFromProps==null&&g!==h&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,S),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,S)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=g,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(A){A&&(A.__=t)}),$=0;$<i._sb.length;$++)i.__h.push(i._sb[$]);i._sb=[],i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,S),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(h,d,m)})}if(i.context=S,i.props=g,i.__P=e,i.__e=!1,N=u.__r,C=0,"prototype"in w&&w.prototype.render){for(i.state=i.__s,i.__d=!1,N&&N(t),p=i.render(i.props,i.state,i.context),L=0;L<i._sb.length;L++)i.__h.push(i._sb[L]);i._sb=[]}else do i.__d=!1,N&&N(t),p=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++C<25);i.state=i.__s,i.getChildContext!=null&&(o=E(E({},o),i.getChildContext())),f||i.getSnapshotBeforeUpdate==null||(m=i.getSnapshotBeforeUpdate(h,d)),$e(e,te(T=p!=null&&p.type===j&&p.key==null?p.props.children:p)?T:[T],t,n,o,l,r,c,s,_,v),i.base=t.__e,t.__h=null,i.__h.length&&c.push(i),P&&(i.__E=i.__=null)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ze(n.__e,t,n,o,l,r,c,_,v);(p=u.diffed)&&p(t)}catch(A){t.__v=null,(_||r!=null)&&(t.__e=s,t.__h=!!_,r[r.indexOf(s)]=null),u.__e(A,t,n)}}function Te(e,t,n){for(var o=0;o<n.length;o++)re(n[o],n[++o],n[++o]);u.__c&&u.__c(t,e),e.some(function(l){try{e=l.__h,l.__h=[],e.some(function(r){r.call(l)})}catch(r){u.__e(r,l.__v)}})}function ze(e,t,n,o,l,r,c,s,_){var v,p,i,f=n.props,h=t.props,d=t.type,m=0;if(d==="svg"&&(l=!0),r!=null){for(;m<r.length;m++)if((v=r[m])&&"setAttribute"in v==!!d&&(d?v.localName===d:v.nodeType===3)){e=v,r[m]=null;break}}if(e==null){if(d===null)return document.createTextNode(h);e=l?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,h.is&&h),r=null,s=!1}if(d===null)f===h||s&&e.data===h||(e.data=h);else{if(r=r&&G.call(e.childNodes),p=(f=n.props||M).dangerouslySetInnerHTML,i=h.dangerouslySetInnerHTML,!s){if(r!=null)for(f={},m=0;m<e.attributes.length;m++)f[e.attributes[m].name]=e.attributes[m].value;(i||p)&&(i&&(p&&i.__html==p.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(Fe(e,h,f,l,s),i)t.__k=[];else if($e(e,te(m=t.props.children)?m:[m],t,n,o,l&&d!=="foreignObject",r,c,r?r[0]:n.__k&&F(n,0),s,_),r!=null)for(m=r.length;m--;)r[m]!=null&&Ce(r[m]);s||("value"in h&&(m=h.value)!==void 0&&(m!==e.value||d==="progress"&&!m||d==="option"&&m!==f.value)&&q(e,"value",m,f.value,!1),"checked"in h&&(m=h.checked)!==void 0&&m!==e.checked&&q(e,"checked",m,f.checked,!1))}return e}function re(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){u.__e(o,n)}}function He(e,t,n){var o,l;if(u.unmount&&u.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||re(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){u.__e(r,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&He(o[l],t,n||typeof e.type!="function");n||e.__e==null||Ce(e.__e),e.__=e.__e=e.__d=void 0}function qe(e,t,n){return this.constructor(e,n)}function Ge(e,t,n){var o,l,r,c;u.__&&u.__(e,t),l=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],c=[],ne(t,e=(!o&&n||t).__k=Ve(j,null,[e]),l||M,M,t.ownerSVGElement!==void 0,!o&&n?[n]:l?null:t.firstChild?G.call(t.childNodes):null,r,!o&&n?n:l?l.__e:t.firstChild,o,c),Te(r,e,c)}function Pe(e,t){var n={__c:t="__cC"+ke++,__:e,Consumer:function(o,l){return o.children(l)},Provider:function(o){var l,r;return this.getChildContext||(l=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&l.some(function(s){s.__e=!0,X(s)})},this.sub=function(c){l.push(c);var s=c.componentWillUnmount;c.componentWillUnmount=function(){l.splice(l.indexOf(c),1),s&&s.call(c)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}G=Ne.slice,u={__e:function(e,t,n,o){for(var l,r,c;t=t.__;)if((l=t.__c)&&!l.__)try{if((r=l.constructor)&&r.getDerivedStateFromError!=null&&(l.setState(r.getDerivedStateFromError(e)),c=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,o||{}),c=l.__d),c)return l.__E=l}catch(s){e=s}throw e}},be=0,R.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},n),this.props)),e&&E(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),X(this))},R.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),X(this))},R.prototype.render=j,H=[],we=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Q=function(e,t){return e.__v.__b-t.__v.__b},z.__r=0,ke=0;var W,x,J,_e,Y=0,Ue=[],V=[],de=u.__b,ue=u.__r,fe=u.diffed,he=u.__c,pe=u.unmount;function oe(e,t){u.__h&&u.__h(x,e,Y||t),Y=0;var n=x.__H||(x.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:V}),n.__[e]}function b(e){return Y=1,Je(je,e)}function Je(e,t,n){var o=oe(W++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):je(void 0,t),function(s){var _=o.__N?o.__N[0]:o.__[0],v=o.t(_,s);_!==v&&(o.__N=[v,o.__[1]],o.__c.setState({}))}],o.__c=x,!x.u)){var l=function(s,_,v){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(f){return f.__c});if(p.every(function(f){return!f.__N}))return!r||r.call(this,s,_,v);var i=!1;return p.forEach(function(f){if(f.__N){var h=f.__[0];f.__=f.__N,f.__N=void 0,h!==f.__[0]&&(i=!0)}}),!(!i&&o.__c.props===s)&&(!r||r.call(this,s,_,v))};x.u=!0;var r=x.shouldComponentUpdate,c=x.componentWillUpdate;x.componentWillUpdate=function(s,_,v){if(this.__e){var p=r;r=void 0,l(s,_,v),r=p}c&&c.call(this,s,_,v)},x.shouldComponentUpdate=l}return o.__N||o.__}function le(e,t){var n=oe(W++,3);!u.__s&&Xe(n.__H,t)&&(n.__=e,n.i=t,x.__H.__h.push(n))}function Me(e){var t=x.context[e.__c],n=oe(W++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(x)),t.props.value):e.__}function Ke(){for(var e;e=Ue.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(O),e.__H.__h.forEach(Z),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){x=null,de&&de(e)},u.__r=function(e){ue&&ue(e),W=0;var t=(x=e.__c).__H;t&&(J===x?(t.__h=[],x.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=V,n.__N=n.i=void 0})):(t.__h.forEach(O),t.__h.forEach(Z),t.__h=[],W=0)),J=x},u.diffed=function(e){fe&&fe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ue.push(t)!==1&&_e===u.requestAnimationFrame||((_e=u.requestAnimationFrame)||Qe)(Ke)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==V&&(n.__=n.__V),n.i=void 0,n.__V=V})),J=x=null},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(O),n.__h=n.__h.filter(function(o){return!o.__||Z(o)})}catch(o){t.some(function(l){l.__h&&(l.__h=[])}),t=[],u.__e(o,n.__v)}}),he&&he(e,t)},u.unmount=function(e){pe&&pe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{O(o)}catch(l){t=l}}),n.__H=void 0,t&&u.__e(t,n.__v))};var me=typeof requestAnimationFrame=="function";function Qe(e){var t,n=function(){clearTimeout(o),me&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);me&&(t=requestAnimationFrame(n))}function O(e){var t=x,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),x=t}function Z(e){var t=x;e.__c=e.__(),x=t}function Xe(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function je(e,t){return typeof t=="function"?t(e):t}const K={exercises:[],reps:[],state:{}},Ye=()=>{const e=window.localStorage.getItem("data");let t=K;if(e){t=JSON.parse(e);for(let n of Object.keys(K))t[n]||(t[n]=K[n]);U(t)}return t},U=e=>{window.localStorage.setItem("data",JSON.stringify(e))},k=Ye(),De=Pe({data:k}),Ze=()=>{const[,e]=b(0);return{data:k,addExercise:c=>{const s=window.crypto.randomUUID();k.exercises.push({id:s,...c}),U(k),e(_=>++_)},updateExercise:c=>{const s=k.exercises.findIndex(_=>_.id===c.id);k.exercises[s]=c,U(k),e(_=>++_)},deleteExercise:c=>{const s=k.exercises.findIndex(_=>_.id===c.id);k.exercises.splice(s,1),U(k),e(_=>++_)},addRep:(c,s)=>{k.reps.push({exerciseId:c.id,details:s}),U(k),e(_=>++_)},updateState:(c,s)=>{k.state[c]=s,U(k),e(_=>++_)}}};function D(){return Me(De)}var et=0;function a(e,t,n,o,l,r){var c,s,_={};for(s in t)s=="ref"?c=t[s]:_[s]=t[s];var v={type:e,props:_,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--et,__source:l,__self:r};if(typeof e=="function"&&(c=e.defaultProps))for(s in c)_[s]===void 0&&(_[s]=c[s]);return u.vnode&&u.vnode(v),v}const tt=e=>{var n;let t=0;for(let o=0;o<e.length;o++){let l=0;for(let r=0;r<e[o].length;r++)l+=((n=e[o][r])==null?void 0:n.value)||0;l>t&&(t=l)}return t};function nt({series:e,legend:t}){const n=tt(e);return console.log("maxValue",n),a("div",{className:"w-full h-full flex flex-col justify-end",children:[a("div",{className:"grow flex flex-row items-end border-b pb-1",children:e.map((o,l)=>a("div",{className:`h-full flex flex-col-reverse ${l===0?"ml-0":"ml-2"}`,style:{width:`calc(100% / ${e.length}`},children:o.map((r,c)=>a("div",{className:"w-full bg-teal-100",style:{height:`${r.value/n*100}%`}},`${l}${c}`))},l))}),a("div",{className:"flex flex-row text-center",children:t.x.map((o,l)=>a("div",{className:`${l===0?"ml-0":"ml-2"}`,style:{width:`calc(100% / ${e.length}`,height:"20px"},children:o},l))})]})}function rt(){return D(),a("div",{className:"h-[200px] mt-2",children:a(nt,{height:200,series:[[{value:10},{value:10},{value:10}],[{value:10}],[{value:10},{value:10}],[{value:10}],[{value:10},{value:5}],[],[]],legend:{x:["M","T","W","Th","F","S","S"]}})})}function We({children:e,...t}){return a("button",{type:"submit",className:"text-white bg-primary focus:ring-4 focus:outline-none focus:ring-cyan-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center",...t,children:e.toUpperCase()})}function ot({children:e,onClose:t}){return a("div",{className:"block relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow",children:[t&&a("div",{onClick:()=>t(),className:"absolute top-2 right-2",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"25",height:"25",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})}),e]})}function Ie({href:e,children:t,state:n={}}){const{setHistoryState:o}=I();return a("a",{onClick:r=>(r.preventDefault(),window.history.pushState({...n,page:e},e,`#${e}`),o({...n,page:e}),!1),href:`#${e}`,children:t})}function lt(){const{data:e,updateState:t}=D();return e.state.hideWelcome?null:a(ot,{onClose:()=>t("hideWelcome",!0),children:[a("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Welcome to Reps"}),a("p",{className:"font-normal text-gray-700 dark:text-gray-400 mb-2",children:"Track your repeated exercises: a workout, music practice, gaming, reading or something else."}),!e.exercises.length&&a(j,{children:[a("p",{className:"font-normal text-gray-700 dark:text-gray-400 mb-4",children:"To start with, let's create your first exercise..."}),a(Ie,{href:"manage",state:{addUpdate:!0},children:a(We,{onClick:()=>{},children:"Create exercise"})})]})]})}function it(){return a("div",{className:"w-full mt-1 p-2 flex flex-col grow min-h-[50vh]",children:[a(lt,{}),a(rt,{})]})}function ee({initialValue:e,label:t,placeholder:n="",onCommit:o=()=>{},onChange:l=()=>{}}){const[r,c]=b(e),s=t.replace(" ","");return a("div",{className:"mb-3",children:[a("label",{for:s,className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:t}),a("input",{value:r,onInput:_=>{c(_.target.value),l(_.target.value)},type:"text",id:s,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:n,onBlur:_=>o(_.target.value)})]})}function at({placeholder:e,getResults:t,onCommit:n}){const[o,l]=b(""),[r,c]=b([]);return le(()=>{o&&c(t(o))},[o,t]),a("div",{className:"w-full",children:[a(ee,{label:"",placeholder:e,onChange:s=>l(s)}),!!r.length&&a("div",{className:"border p-3 pb-0 pt-1 rounded-b-lg pt-4 -mt-4 border-t-0",children:r.map(s=>a("div",{className:"p-3 border-b last:border-b-0",onClick:()=>n(s),children:s.label},s.id))})]})}const Ae=e=>`${String(e.getMinutes()).padStart(2,"0")}:${String(e.getSeconds()).padStart(2,"0")}:${String(e.getMilliseconds()).slice(0,2).padStart(2,"0")}`;function ct({className:e="",onEnd:t}){const[n,o]=b(null),[l]=b(Date.now()),[r,c]=b(new Date);return le(()=>{const s=setInterval(()=>{const _=Math.round((Date.now()-l)/10)*10;c(new Date(_))},10);return o(s),()=>{clearInterval(s)}},[]),a("div",{className:`text-4xl font-mono ${e}`,onClick:()=>{clearInterval(n),t({startTime:l,ellapsedTime:r})},children:Ae(r)})}function st(){const{exercise:e,recording:t=!1,setHistoryState:n}=I(),{addRep:o,data:l}=D(),r=l.reps.filter(f=>f.exerciseId===e.id),[c,s]=b(1),{name:_,timed:v}=e,p=({startTime:f,ellapsedTime:h})=>{o(e,{startTime:f,ellapsedTime:h.getTime(),set:c}),setTimeout(()=>{n({recording:!1,exercise:e})},10)},i=()=>{n({recording:!t,exercise:e})};return a("div",{className:"pt-20 text-center",children:[a("h3",{className:"text-4xl",children:_}),a("div",{className:"mt-16 mb-4 text-3xl rounded-full flex justify-center items-center bg-gray-200 w-[75vw] h-[75vw]",onClick:t?()=>{}:i,children:t&&v?a(ct,{onEnd:p}):"START"}),!!r.length&&a("div",{className:"flex flex-col w-32 mx-auto",children:r.map((f,h)=>a("div",{className:"text-left",children:["Rep ",h+1,":"," ",Ae(new Date(0,0,0,0,0,0,f.details.ellapsedTime))]},h))})]})}function _t(){const{exercise:e,setHistoryState:t}=I(),{data:n}=D(),o=l=>n.exercises.filter(r=>{const c=new RegExp(l,"i");return c.test(r.name)||c.test(r.category)}).map(r=>({...r,label:r.name}));return a("div",{className:"w-full mt-1 flex flex-col grow min-h-[50vh]",children:[a("div",{className:"sticky top-0 flex justify-between content-center w-full px-2",children:a("h2",{className:"text-2xl",children:"Record Exercise"})}),a("div",{className:`mx-4 grow flex justify-center  ${e?"":"items-center"}`,children:e?a(st,{}):a(at,{placeholder:"Search Exercises...",getResults:o,onCommit:l=>t({exercise:l})})})]})}const dt=({className:e="",...t})=>a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"32",height:"32",className:`text-primary ${e}`,...t,children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})});function ve({label:e,value:t=!1,onCommit:n=()=>{}}){const[o,l]=b(t);return a("div",{className:"mb-3",children:a("label",{className:"relative inline-flex items-center cursor-pointer mb-2",children:[a("input",{type:"checkbox",value:o,onChange:r=>{l(r.target.checked),n(r.target.checked)},className:"sr-only peer"}),a("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"}),a("span",{className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:e})]})})}function ut({label:e,options:t,value:n,onCommit:o}){const[l,r]=b(n),c=e.replace(" ","");return a("div",{className:"mb-3",children:[a("label",{for:c,className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:e}),a("select",{id:c,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:s=>{r(s.target.value),o(s.target.value)},children:t.map(s=>a("option",{value:s,selected:s===l,children:s},s))})]})}const ge=["None","kg","cm","metres","count"];function ft({close:e,exercise:t}){const{addExercise:n,updateExercise:o}=D(),[l,r]=b(t.name||""),[c,s]=b(t.category||""),[_,v]=b(t.unit||ge[0]),[p,i]=b(t.timed||!1),[f,h]=b(t.sets||!1),d=()=>{t?o({...t,name:l,category:c,unit:_,timed:p,sets:f}):n({name:l,category:c,unit:_,timed:p,sets:f}),e()};return a("div",{className:"h-full mt-1 px-2",children:[a("h3",{className:"text-xl mb-2",children:"Add New Exercise"}),a(ee,{label:"Name",onCommit:r,initialValue:l,placeholder:"Pull Ups"}),a(ee,{label:"Category",onCommit:s,initialValue:c,placeholder:"Workout"}),a(ut,{label:"Unit",options:ge,value:_,onCommit:v}),a(ve,{label:"Timed",value:p,onCommit:i}),a(ve,{label:"Sets",value:f,onCommit:h}),a(We,{onClick:d,children:"Save"})]})}function ht(){const{data:e,deleteExercise:t}=D(),{addUpdate:n=!1,setHistoryState:o}=I();return a("div",{className:"w-full mt-1 flex flex-col h-full",children:[!n&&a(j,{children:[a("div",{className:"flex justify-between content-center w-full px-2",children:[a("h2",{className:"text-2xl",children:"Manage Exercises"}),a(dt,{className:"cursor-pointer",onClick:()=>o({addUpdate:!0})})]}),e.exercises.length?a("div",{className:"mx-4",children:e.exercises.map(l=>a("div",{className:"p-4 border-solid border-b flex justify-between items-center",children:[l.name,a("div",{className:"flex flex-row w-14 justify-between",children:[a("svg",{onClick:()=>t(l),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"15",height:"15",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),a(Ie,{href:"manage",state:{addUpdate:l},children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"15",height:"15",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})})})]})]},l.name))}):a("div",{className:"text-center grow flex justify-center content-center items-center",children:"No exercises yet :("})]}),n&&a(ft,{exercise:typeof n=="object"&&n,close:()=>o({addUpdate:!1})})]})}const xe=()=>({page:window.location.hash.slice(1)||"overview"});let ye=!1;const pt={overview:it,record:_t,manage:ht},Be=Pe({}),mt=()=>{const[e,t]=b(xe());le(()=>{ye||(ye=!0,window.addEventListener("popstate",l=>{t(l.state||xe())}))},[]);const{page:n}=e;let o=pt[n];if(!o)throw new Error(`Unsupported page: ${n}`);return{...e,setHistoryState:l=>{t({page:n,...l})},PageComponent:o}};function I(){return Me(Be)}function vt(){const{page:e}=I();let t=e==="overview"?"text-primary":"",n=e==="record"?"text-primary":"",o=e==="manage"?"text-primary":"";return a("section",{id:"bottom-navigation",className:"md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow text-primary",children:a("div",{id:"tabs",className:"flex justify-between text-teal-500",children:[a("a",{href:"#overview",className:`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center py-1 ${t}`,children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"35",height:"35",className:"inline-block mb-1",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"})})}),a("a",{href:"#record",className:`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center py-1 ${n}`,children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"35",height:"35",className:"inline-block  mb-1",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})}),a("a",{href:"#manage",className:`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center py-1 ${o}`,children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"35",height:"35",className:"inline-block  mb-1",children:[a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"}),a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})})}const gt="/reps/android-chrome-512x512.png";function xt(){const{PageComponent:e,...t}=mt(),n=Ze();return a(Be.Provider,{value:t,children:a(De.Provider,{value:n,children:a("div",{className:"w-full h-screen flex flex-col overflow-hidden",children:[a("div",{className:"flex flex-row justify-start items-center px-3 py-3",children:[a("img",{src:gt,className:"shrink max-h-[32px] max-w-[32px]"}),a("h1",{className:"text-xl font-bold ml-2",children:"Reps"})]}),a("div",{className:"overflow-scroll",style:{height:"calc(100vh - 36px - 51px)"},children:a(e,{})}),a(vt,{})]})})})}Ge(a(xt,{}),document.getElementById("app"));
