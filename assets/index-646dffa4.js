import{f as M,r as z}from"./react-f288da4a.js";var _={},j=function(){return j=Object.assign||function(r){for(var t,n=1,a=arguments.length;n<a;n++)for(var e in t=arguments[n])Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r},j.apply(this,arguments)},G=function(){function r(t,n,a){var e=this;this.endVal=n,this.options=a,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(i){e.startTime||(e.startTime=i);var u=i-e.startTime;e.remaining=e.duration-u,e.useEasing?e.countDown?e.frameVal=e.startVal-e.easingFn(u,0,e.startVal-e.endVal,e.duration):e.frameVal=e.easingFn(u,e.startVal,e.endVal-e.startVal,e.duration):e.frameVal=e.startVal+(e.endVal-e.startVal)*(u/e.duration);var s=e.countDown?e.frameVal<e.endVal:e.frameVal>e.endVal;e.frameVal=s?e.endVal:e.frameVal,e.frameVal=Number(e.frameVal.toFixed(e.options.decimalPlaces)),e.printValue(e.frameVal),u<e.duration?e.rAF=requestAnimationFrame(e.count):e.finalEndVal!==null?e.update(e.finalEndVal):e.options.onCompleteCallback&&e.options.onCompleteCallback()},this.formatNumber=function(i){var u,s,o,l,f=i<0?"-":"";u=Math.abs(i).toFixed(e.options.decimalPlaces);var h=(u+="").split(".");if(s=h[0],o=h.length>1?e.options.decimal+h[1]:"",e.options.useGrouping){l="";for(var g=3,b=0,m=0,p=s.length;m<p;++m)e.options.useIndianSeparators&&m===4&&(g=2,b=1),m!==0&&b%g==0&&(l=e.options.separator+l),b++,l=s[p-m-1]+l;s=l}return e.options.numerals&&e.options.numerals.length&&(s=s.replace(/[0-9]/g,function(d){return e.options.numerals[+d]}),o=o.replace(/[0-9]/g,function(d){return e.options.numerals[+d]})),f+e.options.prefix+s+o+e.options.suffix},this.easeOutExpo=function(i,u,s,o){return s*(1-Math.pow(2,-10*i/o))*1024/1023+u},this.options=j(j({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof t=="string"?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window!="undefined"&&this.options.enableScrollSpy&&(this.error||(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return e.handleScroll(e)}),window.onscroll=function(){window.onScrollFns.forEach(function(i){return i()})},this.handleScroll(this)))}return r.prototype.handleScroll=function(t){if(t&&window&&!t.once){var n=window.innerHeight+window.scrollY,a=t.el.getBoundingClientRect(),e=a.top+window.pageYOffset,i=a.top+a.height+window.pageYOffset;i<n&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||e>n)&&!t.paused&&t.reset()}},r.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var n=t-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},r.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},r.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},r.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},r.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},r.prototype.printValue=function(t){var n;if(this.el){var a=this.formattingFn(t);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,a):this.el.tagName==="INPUT"?this.el.value=a:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=a:this.el.innerHTML=a}},r.prototype.ensureNumber=function(t){return typeof t=="number"&&!isNaN(t)},r.prototype.validateValue=function(t){var n=Number(t);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},r.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},r}();const L=Object.freeze(Object.defineProperty({__proto__:null,CountUp:G},Symbol.toStringTag,{value:"Module"})),k=M(L);Object.defineProperty(_,"__esModule",{value:!0});var c=z,q=k;function Y(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var a,e,i,u,s=[],o=!0,l=!1;try{if(i=(n=n.call(r)).next,t===0){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=i.call(n)).done)&&(s.push(a.value),s.length!==t);o=!0);}catch(f){l=!0,e=f}finally{try{if(!o&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw e}}return s}}function D(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);t&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.push.apply(n,a)}return n}function A(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(a){$(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}function $(r,t,n){return t=X(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function x(){return x=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},x.apply(this,arguments)}function H(r,t){if(r==null)return{};var n={},a=Object.keys(r),e,i;for(i=0;i<a.length;i++)e=a[i],!(t.indexOf(e)>=0)&&(n[e]=r[e]);return n}function I(r,t){if(r==null)return{};var n=H(r,t),a,e;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(e=0;e<i.length;e++)a=i[e],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(n[a]=r[a])}return n}function W(r,t){return B(r)||Y(r,t)||K(r,t)||J()}function B(r){if(Array.isArray(r))return r}function K(r,t){if(r){if(typeof r=="string")return T(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(r,t)}}function T(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=r[n];return a}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(r,t){if(typeof r!="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var a=n.call(r,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function X(r){var t=Q(r,"string");return typeof t=="symbol"?t:String(t)}var Z=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?c.useLayoutEffect:c.useEffect;function v(r){var t=c.useRef(r);return Z(function(){t.current=r}),c.useCallback(function(){for(var n=arguments.length,a=new Array(n),e=0;e<n;e++)a[e]=arguments[e];return t.current.apply(void 0,a)},[])}var tt=function(t,n){var a=n.decimal,e=n.decimals,i=n.duration,u=n.easingFn,s=n.end,o=n.formattingFn,l=n.numerals,f=n.prefix,h=n.separator,g=n.start,b=n.suffix,m=n.useEasing,p=n.useGrouping,d=n.useIndianSeparators,S=n.enableScrollSpy,y=n.scrollSpyDelay,O=n.scrollSpyOnce,w=n.plugin;return new q.CountUp(t,s,{startVal:g,duration:i,decimal:a,decimalPlaces:e,easingFn:u,formattingFn:o,numerals:l,separator:h,prefix:f,suffix:b,plugin:w,useEasing:m,useIndianSeparators:d,useGrouping:p,enableScrollSpy:S,scrollSpyDelay:y,scrollSpyOnce:O})},et=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],nt={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},N=function(t){var n=Object.fromEntries(Object.entries(t).filter(function(V){var P=W(V,2),C=P[1];return C!==void 0})),a=c.useMemo(function(){return A(A({},nt),n)},[t]),e=a.ref,i=a.startOnMount,u=a.enableReinitialize,s=a.delay,o=a.onEnd,l=a.onStart,f=a.onPauseResume,h=a.onReset,g=a.onUpdate,b=I(a,et),m=c.useRef(),p=c.useRef(),d=c.useRef(!1),S=v(function(){return tt(typeof e=="string"?e:e.current,b)}),y=v(function(V){var P=m.current;if(P&&!V)return P;var C=S();return m.current=C,C}),O=v(function(){var V=function(){return y(!0).start(function(){o==null||o({pauseResume:w,reset:E,start:R,update:F})})};s&&s>0?p.current=setTimeout(V,s*1e3):V(),l==null||l({pauseResume:w,reset:E,update:F})}),w=v(function(){y().pauseResume(),f==null||f({reset:E,start:R,update:F})}),E=v(function(){y().el&&(p.current&&clearTimeout(p.current),y().reset(),h==null||h({pauseResume:w,start:R,update:F}))}),F=v(function(V){y().update(V),g==null||g({pauseResume:w,reset:E,start:R})}),R=v(function(){E(),O()}),U=v(function(V){i&&(V&&E(),O())});return c.useEffect(function(){d.current?u&&U(!0):(d.current=!0,U())},[u,d,U,s,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),c.useEffect(function(){return function(){E()}},[E]),{start:R,pauseResume:w,reset:E,update:F,getCountUp:y}},rt=["className","redraw","containerProps","children","style"],at=function(t){var n=t.className,a=t.redraw,e=t.containerProps,i=t.children,u=t.style,s=I(t,rt),o=c.useRef(null),l=c.useRef(!1),f=N(A(A({},s),{},{ref:o,startOnMount:typeof i!="function"||t.delay===0,enableReinitialize:!1})),h=f.start,g=f.reset,b=f.update,m=f.pauseResume,p=f.getCountUp,d=v(function(){h()}),S=v(function(w){t.preserveValue||g(),b(w)}),y=v(function(){typeof t.children=="function"&&!(o.current instanceof Element)||p()});c.useEffect(function(){y()},[y]),c.useEffect(function(){l.current&&S(t.end)},[t.end,S]);var O=a&&t;return c.useEffect(function(){a&&l.current&&d()},[d,a,O]),c.useEffect(function(){!a&&l.current&&d()},[d,a,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),c.useEffect(function(){l.current=!0},[]),typeof i=="function"?i({countUpRef:o,start:h,reset:g,update:b,pauseResume:m,getCountUp:p}):c.createElement("span",x({className:n,ref:o,style:u},e),typeof t.start!="undefined"?p().formattingFn(t.start):"")},st=_.default=at,ot=_.useCountUp=N;export{st as _,ot as u};