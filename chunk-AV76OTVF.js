import{Aa as y,Da as P,M as oe,O as b,R as L,T as B,U as I,Y as Z,Z as W,ab as m,bb as h,ma as T,oa as ue,sa as ae,vb as de,xb as le,ya as ce}from"./chunk-GDAC3J6T.js";var Ce=null;function K(){return Ce}function Wt(e){Ce??=e}var he=class{};var ne=new L(""),Fe=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>I(ve),providedIn:"platform"});let e=t;return e})();var ve=(()=>{let t=class t extends Fe{constructor(){super(),this._doc=I(ne),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return K().getBaseHref(this._doc)}onPopState(n){let i=K().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=K().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,s){this._history.pushState(n,i,s)}replaceState(n,i,s){this._history.replaceState(n,i,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function Ee(e,t){if(e.length==0)return t;if(t.length==0)return e;let r=0;return e.endsWith("/")&&r++,t.startsWith("/")&&r++,r==2?e+t.substring(1):r==1?e+t:e+"/"+t}function fe(e){let t=e.match(/#|\?|$/),r=t&&t.index||e.length,n=r-(e[r-1]==="/"?1:0);return e.slice(0,n)+e.slice(r)}function M(e){return e&&e[0]!=="?"?"?"+e:e}var ie=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>I(Ie),providedIn:"root"});let e=t;return e})(),_e=new L(""),Ie=(()=>{let t=class t extends ie{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??I(ne).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Ee(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+M(this._platformLocation.search),s=this._platformLocation.hash;return s&&n?`${i}${s}`:i}pushState(n,i,s,o){let u=this.prepareExternalUrl(s+M(o));this._platformLocation.pushState(n,i,u)}replaceState(n,i,s,o){let u=this.prepareExternalUrl(s+M(o));this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(B(Fe),B(_e,8))},t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Me=(()=>{let t=class t{constructor(n){this._subject=new ue,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=Re(fe(De(i))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+M(i))}normalize(n){return t.stripTrailingSlash(Le(this._basePath,De(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",s=null){this._locationStrategy.pushState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+M(i)),s)}replaceState(n,i="",s=null){this._locationStrategy.replaceState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+M(i)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(s=>s(n,i))}subscribe(n,i,s){return this._subject.subscribe({next:n,error:i,complete:s})}};t.normalizeQueryParams=M,t.joinWithSlash=Ee,t.stripTrailingSlash=fe,t.\u0275fac=function(i){return new(i||t)(B(ie))},t.\u0275prov=b({token:t,factory:()=>Be(),providedIn:"root"});let e=t;return e})();function Be(){return new Me(B(ie))}function Le(e,t){if(!e||!t.startsWith(e))return t;let r=t.substring(e.length);return r===""||["/",";","?","#"].includes(r[0])?r:t}function De(e){return e.replace(/\/index.html$/,"")}function Re(e){if(new RegExp("^(https?:)?//").test(e)){let[,r]=e.split(/\/\/[^\/]+/);return r}return e}var D=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(D||{}),d=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(d||{}),p=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(p||{}),v={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Oe(e){return m(e)[h.LocaleId]}function Te(e,t,r){let n=m(e),i=[n[h.DayPeriodsFormat],n[h.DayPeriodsStandalone]],s=C(i,t);return C(s,r)}function Pe(e,t,r){let n=m(e),i=[n[h.DaysFormat],n[h.DaysStandalone]],s=C(i,t);return C(s,r)}function ke(e,t,r){let n=m(e),i=[n[h.MonthsFormat],n[h.MonthsStandalone]],s=C(i,t);return C(s,r)}function Ne(e,t){let n=m(e)[h.Eras];return C(n,t)}function k(e,t){let r=m(e);return C(r[h.DateFormat],t)}function N(e,t){let r=m(e);return C(r[h.TimeFormat],t)}function $(e,t){let n=m(e)[h.DateTimeFormat];return C(n,t)}function H(e,t){let r=m(e),n=r[h.NumberSymbols][t];if(typeof n>"u"){if(t===v.CurrencyDecimal)return r[h.NumberSymbols][v.Decimal];if(t===v.CurrencyGroup)return r[h.NumberSymbols][v.Group]}return n}function ye(e){if(!e[h.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[h.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function $e(e){let t=m(e);return ye(t),(t[h.ExtraData][2]||[]).map(n=>typeof n=="string"?q(n):[q(n[0]),q(n[1])])}function xe(e,t,r){let n=m(e);ye(n);let i=[n[h.ExtraData][0],n[h.ExtraData][1]],s=C(i,t)||[];return C(s,r)||[]}function C(e,t){for(let r=t;r>-1;r--)if(typeof e[r]<"u")return e[r];throw new Error("Locale data API: locale data undefined")}function q(e){let[t,r]=e.split(":");return{hours:+t,minutes:+r}}var Ue=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,x={},ze=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,A=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(A||{}),c=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(c||{}),a=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(a||{});function Ve(e,t,r,n){let i=Xe(e);t=w(r,t)||t;let o=[],u;for(;t;)if(u=ze.exec(t),u){o=o.concat(u.slice(1));let E=o.pop();if(!E)break;t=E}else{o.push(t);break}let g=i.getTimezoneOffset();n&&(g=Ae(n,g),i=qe(i,n,!0));let S="";return o.forEach(E=>{let _=We(E);S+=_?_(i,r,g):E==="''"?"'":E.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),S}function G(e,t,r){let n=new Date(0);return n.setFullYear(e,t,r),n.setHours(0,0,0),n}function w(e,t){let r=Oe(e);if(x[r]??={},x[r][t])return x[r][t];let n="";switch(t){case"shortDate":n=k(e,p.Short);break;case"mediumDate":n=k(e,p.Medium);break;case"longDate":n=k(e,p.Long);break;case"fullDate":n=k(e,p.Full);break;case"shortTime":n=N(e,p.Short);break;case"mediumTime":n=N(e,p.Medium);break;case"longTime":n=N(e,p.Long);break;case"fullTime":n=N(e,p.Full);break;case"short":let i=w(e,"shortTime"),s=w(e,"shortDate");n=U($(e,p.Short),[i,s]);break;case"medium":let o=w(e,"mediumTime"),u=w(e,"mediumDate");n=U($(e,p.Medium),[o,u]);break;case"long":let g=w(e,"longTime"),S=w(e,"longDate");n=U($(e,p.Long),[g,S]);break;case"full":let E=w(e,"fullTime"),_=w(e,"fullDate");n=U($(e,p.Full),[E,_]);break}return n&&(x[r][t]=n),n}function U(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(r,n){return t!=null&&n in t?t[n]:r})),e}function F(e,t,r="-",n,i){let s="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,s=r));let o=String(e);for(;o.length<t;)o="0"+o;return n&&(o=o.slice(o.length-t)),s+o}function je(e,t){return F(e,3).substring(0,t)}function f(e,t,r=0,n=!1,i=!1){return function(s,o){let u=Ge(e,s);if((r>0||u>-r)&&(u+=r),e===c.Hours)u===0&&r===-12&&(u=12);else if(e===c.FractionalSeconds)return je(u,t);let g=H(o,v.MinusSign);return F(u,t,g,n,i)}}function Ge(e,t){switch(e){case c.FullYear:return t.getFullYear();case c.Month:return t.getMonth();case c.Date:return t.getDate();case c.Hours:return t.getHours();case c.Minutes:return t.getMinutes();case c.Seconds:return t.getSeconds();case c.FractionalSeconds:return t.getMilliseconds();case c.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function l(e,t,r=D.Format,n=!1){return function(i,s){return He(i,s,e,t,r,n)}}function He(e,t,r,n,i,s){switch(r){case a.Months:return ke(t,i,n)[e.getMonth()];case a.Days:return Pe(t,i,n)[e.getDay()];case a.DayPeriods:let o=e.getHours(),u=e.getMinutes();if(s){let S=$e(t),E=xe(t,i,n),_=S.findIndex(R=>{if(Array.isArray(R)){let[Y,O]=R,re=o>=Y.hours&&u>=Y.minutes,se=o<O.hours||o===O.hours&&u<O.minutes;if(Y.hours<O.hours){if(re&&se)return!0}else if(re||se)return!0}else if(R.hours===o&&R.minutes===u)return!0;return!1});if(_!==-1)return E[_]}return Te(t,i,n)[o<12?0:1];case a.Eras:return Ne(t,n)[e.getFullYear()<=0?0:1];default:let g=r;throw new Error(`unexpected translation type ${g}`)}}function z(e){return function(t,r,n){let i=-1*n,s=H(r,v.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case A.Short:return(i>=0?"+":"")+F(o,2,s)+F(Math.abs(i%60),2,s);case A.ShortGMT:return"GMT"+(i>=0?"+":"")+F(o,1,s);case A.Long:return"GMT"+(i>=0?"+":"")+F(o,2,s)+":"+F(Math.abs(i%60),2,s);case A.Extended:return n===0?"Z":(i>=0?"+":"")+F(o,2,s)+":"+F(Math.abs(i%60),2,s);default:throw new Error(`Unknown zone width "${e}"`)}}}var Ye=0,j=4;function Ze(e){let t=G(e,Ye,1).getDay();return G(e,0,1+(t<=j?j:j+7)-t)}function we(e){let t=e.getDay(),r=t===0?-3:j-t;return G(e.getFullYear(),e.getMonth(),e.getDate()+r)}function X(e,t=!1){return function(r,n){let i;if(t){let s=new Date(r.getFullYear(),r.getMonth(),1).getDay()-1,o=r.getDate();i=1+Math.floor((o+s)/7)}else{let s=we(r),o=Ze(s.getFullYear()),u=s.getTime()-o.getTime();i=1+Math.round(u/6048e5)}return F(i,e,H(n,v.MinusSign))}}function V(e,t=!1){return function(r,n){let s=we(r).getFullYear();return F(s,e,H(n,v.MinusSign),t)}}var Q={};function We(e){if(Q[e])return Q[e];let t;switch(e){case"G":case"GG":case"GGG":t=l(a.Eras,d.Abbreviated);break;case"GGGG":t=l(a.Eras,d.Wide);break;case"GGGGG":t=l(a.Eras,d.Narrow);break;case"y":t=f(c.FullYear,1,0,!1,!0);break;case"yy":t=f(c.FullYear,2,0,!0,!0);break;case"yyy":t=f(c.FullYear,3,0,!1,!0);break;case"yyyy":t=f(c.FullYear,4,0,!1,!0);break;case"Y":t=V(1);break;case"YY":t=V(2,!0);break;case"YYY":t=V(3);break;case"YYYY":t=V(4);break;case"M":case"L":t=f(c.Month,1,1);break;case"MM":case"LL":t=f(c.Month,2,1);break;case"MMM":t=l(a.Months,d.Abbreviated);break;case"MMMM":t=l(a.Months,d.Wide);break;case"MMMMM":t=l(a.Months,d.Narrow);break;case"LLL":t=l(a.Months,d.Abbreviated,D.Standalone);break;case"LLLL":t=l(a.Months,d.Wide,D.Standalone);break;case"LLLLL":t=l(a.Months,d.Narrow,D.Standalone);break;case"w":t=X(1);break;case"ww":t=X(2);break;case"W":t=X(1,!0);break;case"d":t=f(c.Date,1);break;case"dd":t=f(c.Date,2);break;case"c":case"cc":t=f(c.Day,1);break;case"ccc":t=l(a.Days,d.Abbreviated,D.Standalone);break;case"cccc":t=l(a.Days,d.Wide,D.Standalone);break;case"ccccc":t=l(a.Days,d.Narrow,D.Standalone);break;case"cccccc":t=l(a.Days,d.Short,D.Standalone);break;case"E":case"EE":case"EEE":t=l(a.Days,d.Abbreviated);break;case"EEEE":t=l(a.Days,d.Wide);break;case"EEEEE":t=l(a.Days,d.Narrow);break;case"EEEEEE":t=l(a.Days,d.Short);break;case"a":case"aa":case"aaa":t=l(a.DayPeriods,d.Abbreviated);break;case"aaaa":t=l(a.DayPeriods,d.Wide);break;case"aaaaa":t=l(a.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":t=l(a.DayPeriods,d.Abbreviated,D.Standalone,!0);break;case"bbbb":t=l(a.DayPeriods,d.Wide,D.Standalone,!0);break;case"bbbbb":t=l(a.DayPeriods,d.Narrow,D.Standalone,!0);break;case"B":case"BB":case"BBB":t=l(a.DayPeriods,d.Abbreviated,D.Format,!0);break;case"BBBB":t=l(a.DayPeriods,d.Wide,D.Format,!0);break;case"BBBBB":t=l(a.DayPeriods,d.Narrow,D.Format,!0);break;case"h":t=f(c.Hours,1,-12);break;case"hh":t=f(c.Hours,2,-12);break;case"H":t=f(c.Hours,1);break;case"HH":t=f(c.Hours,2);break;case"m":t=f(c.Minutes,1);break;case"mm":t=f(c.Minutes,2);break;case"s":t=f(c.Seconds,1);break;case"ss":t=f(c.Seconds,2);break;case"S":t=f(c.FractionalSeconds,1);break;case"SS":t=f(c.FractionalSeconds,2);break;case"SSS":t=f(c.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=z(A.Short);break;case"ZZZZZ":t=z(A.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=z(A.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=z(A.Long);break;default:return null}return Q[e]=t,t}function Ae(e,t){e=e.replace(/:/g,"");let r=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(r)?t:r}function Ke(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function qe(e,t,r){let n=r?-1:1,i=e.getTimezoneOffset(),s=Ae(t,i);return Ke(e,n*(s-i))}function Xe(e){if(ge(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,s=1,o=1]=e.split("-").map(u=>+u);return G(i,s-1,o)}let r=parseFloat(e);if(!isNaN(e-r))return new Date(r);let n;if(n=e.match(Ue))return Qe(n)}let t=new Date(e);if(!ge(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function Qe(e){let t=new Date(0),r=0,n=0,i=e[8]?t.setUTCFullYear:t.setFullYear,s=e[8]?t.setUTCHours:t.setHours;e[9]&&(r=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let o=Number(e[4]||0)-r,u=Number(e[5]||0)-n,g=Number(e[6]||0),S=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return s.call(t,o,u,g,S),t}function ge(e){return e instanceof Date&&!isNaN(e.valueOf())}function Kt(e,t){t=encodeURIComponent(t);for(let r of e.split(";")){let n=r.indexOf("="),[i,s]=n==-1?[r,""]:[r.slice(0,n),r.slice(n+1)];if(i.trim()===t)return decodeURIComponent(s)}return null}var J=/\s+/,pe=[],qt=(()=>{let t=class t{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=pe,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(J):pe}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(J):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let s=this.stateMap.get(n);s!==void 0?(s.enabled!==i&&(s.changed=!0,s.enabled=i),s.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],s=n[1];s.changed?(this._toggleClass(i,s.enabled),s.changed=!1):s.touched||(s.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),s.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(J).forEach(s=>{i?this._renderer.addClass(this._ngEl.nativeElement,s):this._renderer.removeClass(this._ngEl.nativeElement,s)})}};t.\u0275fac=function(i){return new(i||t)(y(T),y(P))},t.\u0275dir=Z({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"},standalone:!0});let e=t;return e})();var Xt=(()=>{let t=class t{constructor(n,i,s){this._ngEl=n,this._differs=i,this._renderer=s,this._ngStyle=null,this._differ=null}set ngStyle(n){this._ngStyle=n,!this._differ&&n&&(this._differ=this._differs.find(n).create())}ngDoCheck(){if(this._differ){let n=this._differ.diff(this._ngStyle);n&&this._applyChanges(n)}}_setStyle(n,i){let[s,o]=n.split("."),u=s.indexOf("-")===-1?void 0:ce.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,s,o?`${i}${o}`:i,u):this._renderer.removeStyle(this._ngEl.nativeElement,s,u)}_applyChanges(n){n.forEachRemovedItem(i=>this._setStyle(i.key,null)),n.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),n.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}};t.\u0275fac=function(i){return new(i||t)(y(T),y(le),y(P))},t.\u0275dir=Z({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});let e=t;return e})();function Se(e,t){return new oe(2100,!1)}var Je="mediumDate",et=new L(""),tt=new L(""),Qt=(()=>{let t=class t{constructor(n,i,s){this.locale=n,this.defaultTimezone=i,this.defaultOptions=s}transform(n,i,s,o){if(n==null||n===""||n!==n)return null;try{let u=i??this.defaultOptions?.dateFormat??Je,g=s??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Ve(n,u,o||this.locale,g)}catch(u){throw Se(t,u.message)}}};t.\u0275fac=function(i){return new(i||t)(y(de,16),y(et,24),y(tt,24))},t.\u0275pipe=W({name:"date",type:t,pure:!0,standalone:!0});let e=t;return e})();var Jt=(()=>{let t=class t{transform(n,i,s){if(n==null)return null;if(!this.supports(n))throw Se(t,n);return n.slice(i,s)}supports(n){return typeof n=="string"||Array.isArray(n)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=W({name:"slice",type:t,pure:!1,standalone:!0});let e=t;return e})();var nt="browser",it="server";function rt(e){return e===nt}function en(e){return e===it}var tn=(()=>{let t=class t{};t.\u0275prov=b({token:t,providedIn:"root",factory:()=>rt(I(ae))?new ee(I(ne),window):new te});let e=t;return e})(),ee=class{constructor(t,r){this.document=t,this.window=r,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let r=st(this.document,t);r&&(this.scrollToElement(r),r.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let r=t.getBoundingClientRect(),n=r.left+this.window.pageXOffset,i=r.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],i-s[1])}};function st(e,t){let r=e.getElementById(t)||e.getElementsByName(t)[0];if(r)return r;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let n=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let s=i.shadowRoot;if(s){let o=s.getElementById(t)||s.querySelector(`[name="${t}"]`);if(o)return o}i=n.nextNode()}}return null}var te=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},me=class{};export{K as a,Wt as b,he as c,ne as d,ie as e,Me as f,Kt as g,qt as h,Xt as i,Qt as j,Jt as k,nt as l,en as m,tn as n,me as o};
