(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var K,h,De,L,_e,Se,Z,Te,U={},$e=[],Ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,le=Array.isArray;function $(e,t){for(var n in t)e[n]=t[n];return e}function Ee(e){var t=e.parentNode;t&&t.removeChild(e)}function Qe(e,t,n){var o,i,r,s={};for(r in t)r=="key"?o=t[r]:r=="ref"?i=t[r]:s[r]=t[r];if(arguments.length>2&&(s.children=arguments.length>3?K.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return O(e,s,o,i,null)}function O(e,t,n,o,i){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++De};return i==null&&h.vnode!=null&&h.vnode(r),r}function W(e){return e.children}function V(e,t){this.props=e,this.context=t}function q(e,t){if(t==null)return e.__?q(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?q(e):null}function He(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return He(e)}}function ee(e){(!e.__d&&(e.__d=!0)&&L.push(e)&&!G.__r++||_e!==h.debounceRendering)&&((_e=h.debounceRendering)||Se)(G)}function G(){var e,t,n,o,i,r,s,c,d;for(L.sort(Z);e=L.shift();)e.__d&&(t=L.length,o=void 0,i=void 0,r=void 0,c=(s=(n=e).__v).__e,(d=n.__P)&&(o=[],i=[],(r=$({},s)).__v=s.__v+1,ae(d,s,r,n.__n,d.ownerSVGElement!==void 0,s.__h!=null?[c]:null,o,c??q(s),s.__h,i),Me(o,s,i),s.__e!=c&&He(s)),L.length>t&&L.sort(Z));G.__r=0}function Le(e,t,n,o,i,r,s,c,d,m,f){var l,u,p,_,g,P,v,y,D,S,N=0,C=o&&o.__k||$e,E=C.length,H=E,k=t.length;for(n.__k=[],l=0;l<k;l++)(_=n.__k[l]=(_=t[l])==null||typeof _=="boolean"||typeof _=="function"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?O(null,_,null,null,_):le(_)?O(W,{children:_},null,null,null):_.__b>0?O(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null&&(_.__=n,_.__b=n.__b+1,(y=Xe(_,C,v=l+N,H))===-1?p=U:(p=C[y]||U,C[y]=void 0,H--),ae(e,_,p,i,r,s,c,d,m,f),g=_.__e,(u=_.ref)&&p.ref!=u&&(p.ref&&se(p.ref,null,_),f.push(u,_.__c||g,_)),g!=null&&(P==null&&(P=g),S=!(D=p===U||p.__v===null)&&y===v,D?y==-1&&N--:y!==v&&(y===v+1?(N++,S=!0):y>v?H>k-v?(N+=y-v,S=!0):N--:N=y<v&&y==v-1?y-v:0),v=l+N,S=S||y==l&&!D,typeof _.type!="function"||y===v&&p.__k!==_.__k?typeof _.type=="function"||S?_.__d!==void 0?(d=_.__d,_.__d=void 0):d=g.nextSibling:d=Pe(e,g,d):d=Ie(_,d,e),typeof n.type=="function"&&(n.__d=d)));for(n.__e=P,l=E;l--;)C[l]!=null&&(typeof n.type=="function"&&C[l].__e!=null&&C[l].__e==n.__d&&(n.__d=C[l].__e.nextSibling),Ue(C[l],C[l]))}function Ie(e,t,n){for(var o,i=e.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=e,t=typeof o.type=="function"?Ie(o,t,n):Pe(n,o.__e,t));return t}function Pe(e,t,n){return n==null||n.parentNode!==e?e.insertBefore(t,null):t==n&&t.parentNode!=null||e.insertBefore(t,n),t.nextSibling}function Xe(e,t,n,o){var i=e.key,r=e.type,s=n-1,c=n+1,d=t[n];if(d===null||d&&i==d.key&&r===d.type)return n;if(o>(d!=null?1:0))for(;s>=0||c<t.length;){if(s>=0){if((d=t[s])&&i==d.key&&r===d.type)return s;s--}if(c<t.length){if((d=t[c])&&i==d.key&&r===d.type)return c;c++}}return-1}function Ye(e,t,n,o,i){var r;for(r in n)r==="children"||r==="key"||r in t||J(e,r,null,n[r],o);for(r in t)i&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||J(e,r,t[r],n[r],o)}function ue(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ke.test(t)?n:n+"px"}function J(e,t,n,o,i){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||ue(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||ue(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o||e.addEventListener(t,r?he:fe,r):e.removeEventListener(t,r?he:fe,r);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function fe(e){return this.l[e.type+!1](h.event?h.event(e):e)}function he(e){return this.l[e.type+!0](h.event?h.event(e):e)}function ae(e,t,n,o,i,r,s,c,d,m){var f,l,u,p,_,g,P,v,y,D,S,N,C,E,H,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,c=t.__e=n.__e,t.__h=null,r=[c]),(f=h.__b)&&f(t);try{e:if(typeof k=="function"){if(v=t.props,y=(f=k.contextType)&&o[f.__c],D=f?y?y.props.value:f.__:o,n.__c?P=(l=t.__c=n.__c).__=l.__E:("prototype"in k&&k.prototype.render?t.__c=l=new k(v,D):(t.__c=l=new V(v,D),l.constructor=k,l.render=et),y&&y.sub(l),l.props=v,l.state||(l.state={}),l.context=D,l.__n=o,u=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),k.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=$({},l.__s)),$(l.__s,k.getDerivedStateFromProps(v,l.__s))),p=l.props,_=l.state,l.__v=t,u)k.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,D),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,D)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(l.props=v,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(A){A&&(A.__=t)}),S=0;S<l._sb.length;S++)l.__h.push(l._sb[S]);l._sb=[],l.__h.length&&s.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,D),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,_,g)})}if(l.context=D,l.props=v,l.__P=e,l.__e=!1,N=h.__r,C=0,"prototype"in k&&k.prototype.render){for(l.state=l.__s,l.__d=!1,N&&N(t),f=l.render(l.props,l.state,l.context),E=0;E<l._sb.length;E++)l.__h.push(l._sb[E]);l._sb=[]}else do l.__d=!1,N&&N(t),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++C<25);l.state=l.__s,l.getChildContext!=null&&(o=$($({},o),l.getChildContext())),u||l.getSnapshotBeforeUpdate==null||(g=l.getSnapshotBeforeUpdate(p,_)),Le(e,le(H=f!=null&&f.type===W&&f.key==null?f.props.children:f)?H:[H],t,n,o,i,r,s,c,d,m),l.base=t.__e,t.__h=null,l.__h.length&&s.push(l),P&&(l.__E=l.__=null)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ze(n.__e,t,n,o,i,r,s,d,m);(f=h.diffed)&&f(t)}catch(A){t.__v=null,(d||r!=null)&&(t.__e=c,t.__h=!!d,r[r.indexOf(c)]=null),h.__e(A,t,n)}}function Me(e,t,n){for(var o=0;o<n.length;o++)se(n[o],n[++o],n[++o]);h.__c&&h.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(r){r.call(i)})}catch(r){h.__e(r,i.__v)}})}function Ze(e,t,n,o,i,r,s,c,d){var m,f,l,u=n.props,p=t.props,_=t.type,g=0;if(_==="svg"&&(i=!0),r!=null){for(;g<r.length;g++)if((m=r[g])&&"setAttribute"in m==!!_&&(_?m.localName===_:m.nodeType===3)){e=m,r[g]=null;break}}if(e==null){if(_===null)return document.createTextNode(p);e=i?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,p.is&&p),r=null,c=!1}if(_===null)u===p||c&&e.data===p||(e.data=p);else{if(r=r&&K.call(e.childNodes),f=(u=n.props||U).dangerouslySetInnerHTML,l=p.dangerouslySetInnerHTML,!c){if(r!=null)for(u={},g=0;g<e.attributes.length;g++)u[e.attributes[g].name]=e.attributes[g].value;(l||f)&&(l&&(f&&l.__html==f.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(Ye(e,p,u,i,c),l)t.__k=[];else if(Le(e,le(g=t.props.children)?g:[g],t,n,o,i&&_!=="foreignObject",r,s,r?r[0]:n.__k&&q(n,0),c,d),r!=null)for(g=r.length;g--;)r[g]!=null&&Ee(r[g]);c||("value"in p&&(g=p.value)!==void 0&&(g!==e.value||_==="progress"&&!g||_==="option"&&g!==u.value)&&J(e,"value",g,u.value,!1),"checked"in p&&(g=p.checked)!==void 0&&g!==e.checked&&J(e,"checked",g,u.checked,!1))}return e}function se(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){h.__e(o,n)}}function Ue(e,t,n){var o,i;if(h.unmount&&h.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||se(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){h.__e(r,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&Ue(o[i],t,n||typeof e.type!="function");n||e.__e==null||Ee(e.__e),e.__=e.__e=e.__d=void 0}function et(e,t,n){return this.constructor(e,n)}function tt(e,t,n){var o,i,r,s;h.__&&h.__(e,t),i=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],s=[],ae(t,e=(!o&&n||t).__k=Qe(W,null,[e]),i||U,U,t.ownerSVGElement!==void 0,!o&&n?[n]:i?null:t.firstChild?K.call(t.childNodes):null,r,!o&&n?n:i?i.__e:t.firstChild,o,s),Me(r,e,s)}function je(e,t){var n={__c:t="__cC"+Te++,__:e,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,r;return this.getChildContext||(i=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&i.some(function(c){c.__e=!0,ee(c)})},this.sub=function(s){i.push(s);var c=s.componentWillUnmount;s.componentWillUnmount=function(){i.splice(i.indexOf(s),1),c&&c.call(s)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}K=$e.slice,h={__e:function(e,t,n,o){for(var i,r,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),s=i.__d),s)return i.__E=i}catch(c){e=c}throw e}},De=0,V.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},n),this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ee(this))},V.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ee(this))},V.prototype.render=W,L=[],Se=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Z=function(e,t){return e.__v.__b-t.__v.__b},G.__r=0,Te=0;var j,x,X,pe,te=0,We=[],B=[],me=h.__b,ge=h.__r,ve=h.diffed,xe=h.__c,ye=h.unmount;function Q(e,t){h.__h&&h.__h(x,e,te||t),te=0;var n=x.__H||(x.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:B}),n.__[e]}function w(e){return te=1,nt(Ve,e)}function nt(e,t,n){var o=Q(j++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):Ve(void 0,t),function(c){var d=o.__N?o.__N[0]:o.__[0],m=o.t(d,c);d!==m&&(o.__N=[m,o.__[1]],o.__c.setState({}))}],o.__c=x,!x.u)){var i=function(c,d,m){if(!o.__c.__H)return!0;var f=o.__c.__H.__.filter(function(u){return u.__c});if(f.every(function(u){return!u.__N}))return!r||r.call(this,c,d,m);var l=!1;return f.forEach(function(u){if(u.__N){var p=u.__[0];u.__=u.__N,u.__N=void 0,p!==u.__[0]&&(l=!0)}}),!(!l&&o.__c.props===c)&&(!r||r.call(this,c,d,m))};x.u=!0;var r=x.shouldComponentUpdate,s=x.componentWillUpdate;x.componentWillUpdate=function(c,d,m){if(this.__e){var f=r;r=void 0,i(c,d,m),r=f}s&&s.call(this,c,d,m)},x.shouldComponentUpdate=i}return o.__N||o.__}function ce(e,t){var n=Q(j++,3);!h.__s&&Oe(n.__H,t)&&(n.__=e,n.i=t,x.__H.__h.push(n))}function Re(e,t){var n=Q(j++,7);return Oe(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Ae(e){var t=x.context[e.__c],n=Q(j++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(x)),t.props.value):e.__}function rt(){for(var e;e=We.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(F),e.__H.__h.forEach(ne),e.__H.__h=[]}catch(t){e.__H.__h=[],h.__e(t,e.__v)}}h.__b=function(e){x=null,me&&me(e)},h.__r=function(e){ge&&ge(e),j=0;var t=(x=e.__c).__H;t&&(X===x?(t.__h=[],x.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=B,n.__N=n.i=void 0})):(t.__h.forEach(F),t.__h.forEach(ne),t.__h=[],j=0)),X=x},h.diffed=function(e){ve&&ve(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(We.push(t)!==1&&pe===h.requestAnimationFrame||((pe=h.requestAnimationFrame)||ot)(rt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==B&&(n.__=n.__V),n.i=void 0,n.__V=B})),X=x=null},h.__c=function(e,t){t.some(function(n){try{n.__h.forEach(F),n.__h=n.__h.filter(function(o){return!o.__||ne(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],h.__e(o,n.__v)}}),xe&&xe(e,t)},h.unmount=function(e){ye&&ye(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{F(o)}catch(i){t=i}}),n.__H=void 0,t&&h.__e(t,n.__v))};var be=typeof requestAnimationFrame=="function";function ot(e){var t,n=function(){clearTimeout(o),be&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);be&&(t=requestAnimationFrame(n))}function F(e){var t=x,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),x=t}function ne(e){var t=x;e.__c=e.__(),x=t}function Oe(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Ve(e,t){return typeof t=="function"?t(e):t}const T=new Date,it=({categoryBgColors:e,randomInt:t})=>({categories:[{id:"1",name:"Workout",bgColor:e[t(e.length)]},{id:"2",name:"Music",bgColor:e[t(e.length)]},{id:"3",name:"Bible Study",bgColor:e[t(e.length)]},{id:"4",name:"Home",bgColor:e[t(e.length)]}],exercises:[{id:"1",name:"Dead Hang",timed:!0,sets:!0,category:"1",unit:"none"},{id:"2",name:"Scales",timed:!0,sets:!0,category:"2",unit:"none"},{id:"3",name:"Prayer",timed:!0,sets:!0,category:"3",unit:"none"},{id:"4",name:"Tidy Up",timed:!0,sets:!0,category:"4",unit:"none"}],reps:[{exerciseId:"1",details:{startTime:new Date().setDate(T.getDate()-3),ellapsedTime:4e3}},{exerciseId:"1",details:{startTime:new Date().setDate(T.getDate()-3),ellapsedTime:4e3}},{exerciseId:"2",details:{startTime:new Date().setDate(T.getDate()-3),ellapsedTime:4e3}},{exerciseId:"1",details:{startTime:new Date().setDate(T.getDate()-2),ellapsedTime:4e3}},{exerciseId:"1",details:{startTime:new Date().setDate(T.getDate()-2),ellapsedTime:4e3}},{exerciseId:"2",details:{startTime:new Date().setDate(T.getDate()-2),ellapsedTime:4e3}},{exerciseId:"3",details:{startTime:new Date().setDate(T.getDate()-2),ellapsedTime:4e3}},{exerciseId:"3",details:{startTime:new Date().setDate(T.getDate()-1),ellapsedTime:4e3}},{exerciseId:"1",details:{startTime:new Date,ellapsedTime:4e3}}],state:{}}),de=e=>Math.floor(Math.random()*e),Y={exercises:[],categories:[],reps:[],state:{}},re=["bg-slate-100","bg-zinc-100","bg-red-100","bg-orange-100","bg-amber-100","bg-lime-100","bg-green-100","bg-cyan-100","bg-blue-100","bg-indigo-100","bg-violet-100","bg-pink-100","bg-rose-100"],lt=()=>{const e=window.localStorage.getItem("data");let t=Y;if(e){t=JSON.parse(e);for(let n of Object.keys(Y))t[n]||(t[n]=Y[n]);M(t)}return t=it({categoryBgColors:re,randomInt:de}),t},M=e=>{window.localStorage.setItem("data",JSON.stringify(e))},b=lt(),Be=je({data:b}),Fe=(e,t)=>e.categories.find(n=>n.id===t),oe=(e,t)=>e.exercises.find(n=>n.id===t),at=()=>{const[,e]=w(0);return{data:b,addExercise:s=>{let c;const d=b.categories.find(f=>f.name===s.category);d?c=d.id:(c=window.crypto.randomUUID(),b.categories.push({id:c,name:s.category,bgColor:re[de(re.length)]}));const m=window.crypto.randomUUID();b.exercises.push({id:m,...s,category:c}),M(b),e(f=>++f)},updateExercise:s=>{const c=b.exercises.findIndex(d=>d.id===s.id);b.exercises[c]=s,M(b),e(d=>++d)},deleteExercise:s=>{const c=b.exercises.findIndex(d=>d.id===s.id);b.exercises.splice(c,1),M(b),e(d=>++d)},addRep:(s,c)=>{b.reps.push({exerciseId:s.id,details:c}),M(b),e(d=>++d)},updateState:(s,c)=>{b.state[s]=c,M(b),e(d=>++d)}}};function I(){return Ae(Be)}var st=0;function a(e,t,n,o,i,r){var s,c,d={};for(c in t)c=="ref"?s=t[c]:d[c]=t[c];var m={type:e,props:d,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--st,__source:i,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(c in s)d[c]===void 0&&(d[c]=s[c]);return h.vnode&&h.vnode(m),m}const ct=e=>{var n;let t=0;for(let o=0;o<e.length;o++){let i=0;for(let r=0;r<e[o].length;r++)i+=((n=e[o][r])==null?void 0:n.value)||0;i>t&&(t=i)}return t};function dt({series:e,legend:t,noDataMessage:n}){const o=ct(e);return a("div",{className:"w-full h-full flex flex-col justify-end",children:[o===0&&a("div",{className:"grow flex justify-center items-center border-b pb-1",children:n}),o!==0&&a("div",{className:"grow flex flex-row border-b pb-1 overflow-hidden animate-grow relative",children:e.map((i,r)=>a("div",{className:`h-full flex flex-col-reverse ${r===0?"ml-0":"ml-2"}`,style:{width:`calc(100% / ${e.length}`},children:i.map((s,c)=>a("div",{className:`w-full ${s.color||"bg-teal-100"}`,style:{height:`${s.value/o*100}%`}},`${r}${c}`))},r))}),a("div",{className:"flex flex-row text-center justify-self-end",children:t.x.map((i,r)=>a("div",{className:`${r===0?"ml-0":"ml-2"}`,style:{width:`calc(100% / ${e.length}`,height:"20px"},children:i},r))})]})}function _t(){const{data:e}=I(),t=Re(()=>{const n=new Date;n.setHours(0,0,0,0);let o=n.getDay()-1;o===-1&&(o=6);let i=new Date;i.setDate(n.getDate()-o),i.setHours(0,0,0,0);const r=[[],[],[],[],[],[],[]];for(let s=0;s<e.reps.length;s++){const{details:{startTime:c,ellapsedTime:d},exerciseId:m}=e.reps[s],f=new Date(c);if(f<i)continue;let l=f.getDay()-1;l===-1&&(l=6);const u=oe(e,m),p=Fe(e,u.category);let _=r[l].find(g=>g.catId===p.id);_||(_={catId:p.id,color:p.bgColor,value:0},r[l].push(_)),_.value+=d}return r},[]);return a("div",{className:"h-[200px] mt-2 mb-2",children:a(dt,{noDataMessage:"No reps yet...",height:200,series:t,legend:{x:["M","T","W","Th","F","S","S"]}})})}function z({children:e,onClose:t,className:n="",tight:o=!1}){let i="p-6";return o&&(i="p-3"),a("div",{className:`block relative max-w-sm ${i} bg-white border border-gray-200 rounded-lg shadow ${n}`,children:[t&&a("div",{onClick:()=>t(),className:"absolute top-2 right-2",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"25",height:"25",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})}),e]})}function ut(){const{data:e}=I(),{mostReps:t,notDone:n,random:o}=Re(()=>{const i=e.exercises.reduce((l,u)=>(l[u.id]=[],l),{}),r=e.reps.reduce((l,u)=>(l[u.exerciseId]||(l[u.exerciseId]=[]),l[u.exerciseId].push(u),l),i);let s=0,c=null,d=null;const m=Object.keys(r);for(let l=0;l<m.length;l++)r[m[l]].length>s&&(s=r[m[l]].length,c=oe(e,m[l])),r[m[l]].length===0&&(d=oe(e,m[l]));const f=e.exercises[de(e.exercises.length)];return{mostReps:{value:s,exercise:c},notDone:d,random:{exerciseName:f.name,category:Fe(e,f.category)}}},[]);return a("div",{className:"mt-2 grid gap-x-10 gap-y-4 px-10 grid-cols-2",children:[a(z,{tight:!0,children:[a("h6",{className:"mb-2 text-xs tracking-tight text-gray-400",children:"Most reps"}),a("h5",{className:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white",children:[t.value,"x"]}),a("h6",{className:"mb-2 text-md tracking-tight font-bold text-gray-500",children:t.exercise.name})]}),n&&a(z,{tight:!0,children:[a("h6",{className:"mb-2 text-xs tracking-tight text-gray-400",children:"Don't forget..."}),a("h6",{className:"mb-2 text-4xl tracking-tight font-bold text-gray-900",children:n.name})]}),a(z,{tight:!0,className:"col-span-2 justify-self-center",children:[a("h6",{className:"mb-2 text-xs tracking-tight text-gray-400",children:"Random Exercise"}),a("h6",{className:"mb-2 text-4xl tracking-tight font-bold text-gray-900",children:o.exerciseName}),a("h6",{className:"mb-2 text-md tracking-tight font-bold text-gray-500",children:o.category.name})]})]})}function ze({children:e,...t}){return a("button",{type:"submit",className:"text-white bg-primary focus:ring-4 focus:outline-none focus:ring-cyan-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center",...t,children:e.toUpperCase()})}function qe({href:e,children:t,state:n={}}){const{setHistoryState:o}=R();return a("a",{onClick:r=>(r.preventDefault(),window.history.pushState({...n,page:e},e,`#${e}`),o({...n,page:e}),!1),href:`#${e}`,children:t})}function ft(){const{data:e,updateState:t}=I();return e.state.hideWelcome?null:a(z,{onClose:()=>t("hideWelcome",!0),children:[a("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:"Welcome to Reps"}),a("p",{className:"font-normal text-gray-700 dark:text-gray-400 mb-2",children:"Track your repeated exercises: a workout, music practice, gaming, reading or something else."}),!e.exercises.length&&a(W,{children:[a("p",{className:"font-normal text-gray-700 dark:text-gray-400 mb-4",children:"To start with, let's create your first exercise..."}),a(qe,{href:"manage",state:{addUpdate:!0},children:a(ze,{onClick:()=>{},children:"Create exercise"})})]})]})}function ht(){return a("div",{className:"w-full mt-1 p-2 flex flex-col grow min-h-[50vh]",children:[a(ft,{}),a(_t,{}),a(ut,{})]})}function ie({initialValue:e,label:t,placeholder:n="",onCommit:o=()=>{},onChange:i=()=>{}}){const[r,s]=w(e),c=t.replace(" ","");return a("div",{className:"mb-3",children:[a("label",{for:c,className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:t}),a("input",{value:r,onInput:d=>{s(d.target.value),i(d.target.value)},type:"text",id:c,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:n,onBlur:d=>o(d.target.value)})]})}function pt({placeholder:e,getResults:t,onCommit:n}){const[o,i]=w(""),[r,s]=w([]);return ce(()=>{o&&s(t(o))},[o,t]),a("div",{className:"w-full",children:[a(ie,{label:"",placeholder:e,onChange:c=>i(c)}),!!r.length&&a("div",{className:"border p-3 pb-0 pt-1 rounded-b-lg pt-4 -mt-4 border-t-0",children:r.map(c=>a("div",{className:"p-3 border-b last:border-b-0",onClick:()=>n(c),children:c.label},c.id))})]})}const Ge=e=>`${String(e.getMinutes()).padStart(2,"0")}:${String(e.getSeconds()).padStart(2,"0")}:${String(e.getMilliseconds()).slice(0,2).padStart(2,"0")}`;function mt({className:e="",onEnd:t}){const[n,o]=w(null),[i]=w(Date.now()),[r,s]=w(new Date);return ce(()=>{const c=setInterval(()=>{const d=Math.round((Date.now()-i)/10)*10;s(new Date(d))},10);return o(c),()=>{clearInterval(c)}},[]),a("div",{className:`text-4xl font-mono ${e}`,onClick:()=>{clearInterval(n),t({startTime:i,ellapsedTime:r})},children:Ge(r)})}function gt(){const{exercise:e,recording:t=!1,setHistoryState:n}=R(),{addRep:o,data:i}=I(),r=i.reps.filter(u=>u.exerciseId===e.id),[s,c]=w(1),{name:d,timed:m}=e,f=({startTime:u,ellapsedTime:p})=>{o(e,{startTime:u,ellapsedTime:p.getTime(),set:s}),setTimeout(()=>{n({recording:!1,exercise:e})},10)},l=()=>{n({recording:!t,exercise:e})};return a("div",{className:"pt-20 text-center",children:[a("h3",{className:"text-4xl",children:d}),a("div",{className:"mt-16 mb-4 text-3xl rounded-full flex justify-center items-center bg-gray-200 w-[75vw] h-[75vw]",onClick:t?()=>{}:l,children:t&&m?a(mt,{onEnd:f}):"START"}),!!r.length&&a("div",{className:"flex flex-col w-32 mx-auto",children:r.map((u,p)=>a("div",{className:"text-left",children:["Rep ",p+1,":"," ",Ge(new Date(0,0,0,0,0,0,u.details.ellapsedTime))]},p))})]})}function vt(){const{exercise:e,setHistoryState:t}=R(),{data:n}=I(),o=i=>n.exercises.filter(r=>{const s=new RegExp(i,"i");return s.test(r.name)||s.test(r.category)}).map(r=>({...r,label:r.name}));return a("div",{className:"w-full mt-1 flex flex-col grow min-h-[50vh]",children:[a("div",{className:"sticky top-0 flex justify-between content-center w-full px-2",children:a("h2",{className:"text-2xl",children:"Record Exercise"})}),a("div",{className:`mx-4 grow flex justify-center  ${e?"":"items-center"}`,children:e?a(gt,{}):a(pt,{placeholder:"Search Exercises...",getResults:o,onCommit:i=>t({exercise:i})})})]})}const xt=({className:e="",...t})=>a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"32",height:"32",className:`text-primary ${e}`,...t,children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})});function we({label:e,value:t=!1,onCommit:n=()=>{}}){const[o,i]=w(t);return a("div",{className:"mb-3",children:a("label",{className:"relative inline-flex items-center cursor-pointer mb-2",children:[a("input",{type:"checkbox",value:o,onChange:r=>{i(r.target.checked),n(r.target.checked)},className:"sr-only peer"}),a("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"}),a("span",{className:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",children:e})]})})}function yt({label:e,options:t,value:n,onCommit:o}){const[i,r]=w(n),s=e.replace(" ","");return a("div",{className:"mb-3",children:[a("label",{for:s,className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:e}),a("select",{id:s,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:c=>{r(c.target.value),o(c.target.value)},children:t.map(c=>a("option",{value:c,selected:c===i,children:c},c))})]})}const ke=["None","kg","cm","metres","count"];function bt({close:e,exercise:t}){const{addExercise:n,updateExercise:o}=I(),[i,r]=w(t.name||""),[s,c]=w(t.category||""),[d,m]=w(t.unit||ke[0]),[f,l]=w(t.timed||!1),[u,p]=w(t.sets||!1),_=()=>{t?o({...t,name:i,category:s,unit:d,timed:f,sets:u}):n({name:i,category:s,unit:d,timed:f,sets:u}),e()};return a("div",{className:"h-full mt-1 px-2",children:[a("h3",{className:"text-xl mb-2",children:"Add New Exercise"}),a(ie,{label:"Name",onCommit:r,initialValue:i,placeholder:"Pull Ups"}),a(ie,{label:"Category",onCommit:c,initialValue:s,placeholder:"Workout"}),a(yt,{label:"Unit",options:ke,value:d,onCommit:m}),a(we,{label:"Timed",value:f,onCommit:l}),a(we,{label:"Sets",value:u,onCommit:p}),a(ze,{onClick:_,children:"Save"})]})}function wt(){const{data:e,deleteExercise:t}=I(),{addUpdate:n=!1,setHistoryState:o}=R();return a("div",{className:"w-full mt-1 flex flex-col h-full",children:[!n&&a(W,{children:[a("div",{className:"flex justify-between content-center w-full px-2",children:[a("h2",{className:"text-2xl",children:"Manage Exercises"}),a(xt,{className:"cursor-pointer",onClick:()=>o({addUpdate:!0})})]}),e.exercises.length?a("div",{className:"mx-4",children:e.exercises.map(i=>a("div",{className:"p-4 border-solid border-b flex justify-between items-center",children:[i.name,a("div",{className:"flex flex-row w-14 justify-between",children:[a("svg",{onClick:()=>t(i),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"15",height:"15",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})}),a(qe,{href:"manage",state:{addUpdate:i},children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"15",height:"15",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})})})]})]},i.name))}):a("div",{className:"text-center grow flex justify-center content-center items-center",children:"No exercises yet :("})]}),n&&a(bt,{exercise:typeof n=="object"&&n,close:()=>o({addUpdate:!1})})]})}const Ne=()=>({page:window.location.hash.slice(1)||"overview"});let Ce=!1;const kt={overview:ht,record:vt,manage:wt},Je=je({}),Nt=()=>{const[e,t]=w(Ne());ce(()=>{Ce||(Ce=!0,window.addEventListener("popstate",i=>{t(i.state||Ne())}))},[]);const{page:n}=e;let o=kt[n];if(!o)throw new Error(`Unsupported page: ${n}`);return{...e,setHistoryState:i=>{t({page:n,...i})},PageComponent:o}};function R(){return Ae(Je)}function Ct(){const{page:e}=R();let t=e==="overview"?"text-primary":"",n=e==="record"?"text-primary":"",o=e==="manage"?"text-primary":"";return a("section",{id:"bottom-navigation",className:"md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow text-primary",children:a("div",{id:"tabs",className:"flex justify-between text-teal-500",children:[a("a",{href:"#overview",className:`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center py-1 ${t}`,children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"35",height:"35",className:"inline-block mb-1",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"})})}),a("a",{href:"#record",className:`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center py-1 ${n}`,children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"35",height:"35",className:"inline-block  mb-1",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})}),a("a",{href:"#manage",className:`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center py-1 ${o}`,children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",width:"35",height:"35",className:"inline-block  mb-1",children:[a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"}),a("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})})}const Dt="/reps/android-chrome-512x512.png";function St(){const{PageComponent:e,...t}=Nt(),n=at();return a(Je.Provider,{value:t,children:a(Be.Provider,{value:n,children:a("div",{className:"w-full h-screen flex flex-col overflow-hidden",children:[a("div",{className:"flex flex-row justify-start items-center px-3 py-3",children:[a("img",{src:Dt,className:"shrink max-h-[32px] max-w-[32px]"}),a("h1",{className:"text-xl font-bold ml-2",children:"Reps"})]}),a("div",{className:"overflow-scroll pb-4",style:{height:"calc(100vh - 36px - 51px)"},children:a(e,{})}),a(Ct,{})]})})})}tt(a(St,{}),document.getElementById("app"));
