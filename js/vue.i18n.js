/*!
 * vue-i18n v7.1.0 
 * (c) 2017 kazuya kawaguchi
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueI18n=e()}(this,function(){"use strict";function t(t){return null!==t&&"object"==typeof t}function e(t){return w.call(t)===$}function r(t){return null===t||void 0===t}function n(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var n=null,i=null;return 1===e.length?t(e[0])||Array.isArray(e[0])?i=e[0]:"string"==typeof e[0]&&(n=e[0]):2===e.length&&("string"==typeof e[0]&&(n=e[0]),(t(e[1])||Array.isArray(e[1]))&&(i=e[1])),{locale:n,params:i}}function i(t){return t?t>1?1:0:1}function o(t,e){return t=Math.abs(t),2===e?i(t):t?Math.min(t,2):0}function a(t,e){if(!t&&"string"!=typeof t)return null;var r=t.split("|");return e=o(e,r.length),r[e]?r[e].trim():t}function s(t){return JSON.parse(JSON.stringify(t))}function l(t,e){if(t.length){var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}function c(t,e){return k.call(t,e)}function u(e){for(var r=arguments,n=Object(e),i=1;i<arguments.length;i++){var o=r[i];if(void 0!==o&&null!==o){var a=void 0;for(a in o)c(o,a)&&(t(o[a])?n[a]=u(n[a],o[a]):n[a]=o[a])}}return n}function h(t){t.prototype.$t=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var n=this.$i18n;return n._t.apply(n,[t,n.locale,n._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){for(var r=[],n=arguments.length-2;n-- >0;)r[n]=arguments[n+2];var i=this.$i18n;return i._tc.apply(i,[t,i.locale,i._getMessages(),this,e].concat(r))},t.prototype.$te=function(t,e){var r=this.$i18n;return r._te(t,r.locale,r._getMessages(),e)},t.prototype.$d=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];return(n=this.$i18n).d.apply(n,[t].concat(e));var n},t.prototype.$n=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];return(n=this.$i18n).n.apply(n,[t].concat(e));var n}}function f(t){F=t;F.version&&Number(F.version.split(".")[0]);f.installed=!0,Object.defineProperty(F.prototype,"$i18n",{get:function(){return this._i18n}}),h(F),F.mixin(D),F.component(x.name,x);var e=F.config.optionMergeStrategies;e.i18n=e.methods}function p(t){for(var e=[],r=0,n="";r<t.length;){var i=t[r++];if("{"===i){n&&e.push({type:"text",value:n}),n="";var o="";for(i=t[r++];"}"!==i;)o+=i,i=t[r++];var a=W.test(o)?"list":N.test(o)?"named":"unknown";e.push({value:o,type:a})}else"%"===i?"{"!==t[r]&&(n+=i):n+=i}return n&&e.push({type:"text",value:n}),e}function m(e,r){var n=[],i=0,o=Array.isArray(r)?"list":t(r)?"named":"unknown";if("unknown"===o)return n;for(;i<e.length;){var a=e[i];switch(a.type){case"text":n.push(a.value);break;case"list":"list"===o&&n.push(r[parseInt(a.value,10)]);break;case"named":"named"===o&&n.push(r[a.value])}i++}return n}function _(t){return J.test(t)}function g(t){var e=t.charCodeAt(0);return e!==t.charCodeAt(t.length-1)||34!==e&&39!==e?t:t.slice(1,-1)}function v(t){if(void 0===t||null===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&e<=122||e>=65&&e<=90?"ident":e>=49&&e<=57?"number":"else"}function y(t){var e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(_(e)?g(e):"*"+e)}function d(t){var e,r,n,i,o,a,s,l=[],c=-1,u=S,h=0,f=[];for(f[A]=function(){void 0!==r&&(l.push(r),r=void 0)},f[O]=function(){void 0===r?r=n:r+=n},f[j]=function(){f[O](),h++},f[I]=function(){if(h>0)h--,u=C,f[O]();else{if(h=0,!1===(r=y(r)))return!1;f[A]()}};null!==u;)if(c++,"\\"!==(e=t[c])||!function(){var e=t[c+1];if(u===R&&"'"===e||u===E&&'"'===e)return c++,n="\\"+e,f[O](),!0}()){if(i=v(e),s=z[u],(o=s[i]||s.else||V)===V)return;if(u=o[0],(a=f[o[1]])&&(n=o[2],n=void 0===n?e:n,!1===a()))return;if(u===P)return l}}function b(t){return!!Array.isArray(t)&&0===t.length}var F,w=Object.prototype.toString,$="[object Object]",k=Object.prototype.hasOwnProperty,T="undefined"!=typeof Intl&&void 0!==Intl.DateTimeFormat,L="undefined"!=typeof Intl&&void 0!==Intl.NumberFormat,D={beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n){if(t.i18n instanceof q){if(t.__i18n)try{var r={};t.__i18n.forEach(function(t){r=u(r,JSON.parse(t))}),Object.keys(r).forEach(function(e){t.i18n.mergeLocaleMessage(e,r[e])})}catch(t){}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0}else if(e(t.i18n)){if(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof q&&(t.i18n.root=this.$root.$i18n,t.i18n.fallbackLocale=this.$root.$i18n.fallbackLocale,t.i18n.silentTranslationWarn=this.$root.$i18n.silentTranslationWarn),t.__i18n)try{var n={};t.__i18n.forEach(function(t){n=u(n,JSON.parse(t))}),t.i18n.messages=n}catch(t){}this._i18n=new q(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0,(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale())}}else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof q&&(this._i18n=this.$root.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0)},beforeDestroy:function(){this._i18n&&(this._subscribing&&(this._i18n.unsubscribeDataChanging(this),delete this._subscribing),this._i18nWatcher&&(this._i18nWatcher(),delete this._i18nWatcher),this._localeWatcher&&(this._localeWatcher(),delete this._localeWatcher),this._i18n=null)}},x={name:"i18n",functional:!0,props:{tag:{type:String,default:"span"},path:{type:String,required:!0},locale:{type:String}},render:function(t,e){var r=e.props,n=e.data,i=e.children,o=e.parent,a=o.$i18n;if(!a)return i;var s=r.path,l=r.locale,c=[];return l&&c.push(l),i.forEach(function(t){return c.push(t)}),t(r.tag,n,a.i.apply(a,[s].concat(c)))}},M=function(){this._caches=Object.create(null)};M.prototype.interpolate=function(t,e){var r=this._caches[t];return r||(r=p(t),this._caches[t]=r),m(r,e)};var W=/^(\d)+/,N=/^(\w)+/,O=0,A=1,j=2,I=3,S=0,C=4,R=5,E=6,P=7,V=8,z=[];z[S]={ws:[S],ident:[3,O],"[":[C],eof:[P]},z[1]={ws:[1],".":[2],"[":[C],eof:[P]},z[2]={ws:[2],ident:[3,O],0:[3,O],number:[3,O]},z[3]={ident:[3,O],0:[3,O],number:[3,O],ws:[1,A],".":[2,A],"[":[C,A],eof:[P,A]},z[C]={"'":[R,O],'"':[E,O],"[":[C,j],"]":[1,I],eof:V,else:[C,O]},z[R]={"'":[C,O],eof:V,else:[R,O]},z[E]={'"':[C,O],eof:V,else:[E,O]};var J=/^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,U=function(){this._cache=Object.create(null)};U.prototype.parsePath=function(t){var e=this._cache[t];return e||(e=d(t))&&(this._cache[t]=e),e||[]},U.prototype.getPathValue=function(e,r){if(!t(e))return null;var n=this.parsePath(r);if(b(n))return null;for(var i=n.length,o=e,a=0;a<i;){var s=o[n[a]];if(void 0===s){o=null;break}o=s,a++}return o};var q=function(t){var e=this;void 0===t&&(t={});var n=t.locale||"en-US",i=t.fallbackLocale||"en-US",o=t.messages||{},a=t.dateTimeFormats||{},s=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||new M,this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&!!t.silentTranslationWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new U,this._dataListeners=[],this._exist=function(t,n){return!(!t||!n)&&!r(e._path.getPathValue(t,n))},this._initVM({locale:n,fallbackLocale:i,messages:o,dateTimeFormats:a,numberFormats:s})},B={vm:{},messages:{},dateTimeFormats:{},numberFormats:{},locale:{},fallbackLocale:{},missing:{},formatter:{},silentTranslationWarn:{}};return q.prototype._initVM=function(t){var e=F.config.silent;F.config.silent=!0,this._vm=new F({data:t}),F.config.silent=e},q.prototype.subscribeDataChanging=function(t){this._dataListeners.push(t)},q.prototype.unsubscribeDataChanging=function(t){l(this._dataListeners,t)},q.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",function(){for(var e=t._dataListeners.length;e--;)F.nextTick(function(){t._dataListeners[e]&&t._dataListeners[e].$forceUpdate()})},{deep:!0})},q.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.vm.$watch("locale",function(e){t.$set(t,"locale",e),t.$forceUpdate()},{immediate:!0})},B.vm.get=function(){return this._vm},B.messages.get=function(){return s(this._getMessages())},B.dateTimeFormats.get=function(){return s(this._getDateTimeFormats())},B.numberFormats.get=function(){return s(this._getNumberFormats())},B.locale.get=function(){return this._vm.locale},B.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},B.fallbackLocale.get=function(){return this._vm.fallbackLocale},B.fallbackLocale.set=function(t){this._vm.$set(this._vm,"fallbackLocale",t)},B.missing.get=function(){return this._missing},B.missing.set=function(t){this._missing=t},B.formatter.get=function(){return this._formatter},B.formatter.set=function(t){this._formatter=t},B.silentTranslationWarn.get=function(){return this._silentTranslationWarn},B.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},q.prototype._getMessages=function(){return this._vm.messages},q.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},q.prototype._getNumberFormats=function(){return this._vm.numberFormats},q.prototype._warnDefault=function(t,e,n,i){return r(n)?(this.missing&&this.missing.apply(null,[t,e,i]),e):n},q.prototype._isFallbackRoot=function(t){return!t&&!r(this._root)&&this._fallbackRoot},q.prototype._interpolate=function(t,n,i,o,a,s){if(!n)return null;var l=this._path.getPathValue(n,i);if(Array.isArray(l))return l;var c;if(r(l)){if(!e(n))return null;if("string"!=typeof(c=n[i]))return null}else{if("string"!=typeof l)return null;c=l}return c.indexOf("@:")>=0&&(c=this._link(t,n,c,o,a,s)),s?this._render(c,a,s):c},q.prototype._link=function(t,e,r,n,i,o){var a=this,s=r,l=s.match(/(@:[\w\-_|.]+)/g);for(var c in l)if(l.hasOwnProperty(c)){var u=l[c],h=u.substr(2),f=a._interpolate(t,e,h,n,"raw"===i?"string":i,"raw"===i?void 0:o);if(a._isFallbackRoot(f)){if(!a._root)throw Error("unexpected error");var p=a._root;f=p._translate(p._getMessages(),p.locale,p.fallbackLocale,h,n,i,o)}f=a._warnDefault(t,h,f,n),s=f?s.replace(u,f):s}return s},q.prototype._render=function(t,e,r){var n=this._formatter.interpolate(t,r);return"string"===e?n.join(""):n},q.prototype._translate=function(t,e,n,i,o,a,s){var l=this._interpolate(e,t[e],i,o,a,s);return r(l)?(l=this._interpolate(n,t[n],i,o,a,s),r(l)?null:l):l},q.prototype._t=function(t,e,r,i){for(var o=[],a=arguments.length-4;a-- >0;)o[a]=arguments[a+4];if(!t)return"";var s=n.apply(void 0,o),l=s.locale||e,c=this._translate(r,l,this.fallbackLocale,t,i,"string",s.params);if(this._isFallbackRoot(c)){if(!this._root)throw Error("unexpected error");return(u=this._root).t.apply(u,[t].concat(o))}return this._warnDefault(l,t,c,i);var u},q.prototype.t=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];return(n=this)._t.apply(n,[t,this.locale,this._getMessages(),null].concat(e));var n},q.prototype._i=function(t,e,r,n){for(var i=[],o=arguments.length-4;o-- >0;)i[o]=arguments[o+4];var a=this._translate(r,e,this.fallbackLocale,t,n,"raw",i);if(this._isFallbackRoot(a)){if(!this._root)throw Error("unexpected error");return(s=this._root).i.apply(s,[t].concat(i))}return this._warnDefault(e,t,a,n);var s},q.prototype.i=function(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(!t)return"";var n=this.locale,i=0;"string"==typeof e[0]&&(n=e[0],i=1);for(var o=[],a=i;a<e.length;a++)o.push(e[a]);return(s=this)._i.apply(s,[t,n,this._getMessages(),null].concat(o));var s},q.prototype._tc=function(t,e,r,n,i){for(var o=[],s=arguments.length-5;s-- >0;)o[s]=arguments[s+5];return t?(void 0===i&&(i=1),a((l=this)._t.apply(l,[t,e,r,n].concat(o)),i)):"";var l},q.prototype.tc=function(t,e){for(var r=[],n=arguments.length-2;n-- >0;)r[n]=arguments[n+2];return(i=this)._tc.apply(i,[t,this.locale,this._getMessages(),null,e].concat(r));var i},q.prototype._te=function(t,e,r){for(var i=[],o=arguments.length-3;o-- >0;)i[o]=arguments[o+3];var a=n.apply(void 0,i).locale||e;return this._exist(r[a],t)},q.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},q.prototype.getLocaleMessage=function(t){return s(this._vm.messages[t]||{})},q.prototype.setLocaleMessage=function(t,e){this._vm.messages[t]=e},q.prototype.mergeLocaleMessage=function(t,e){this._vm.messages[t]=F.util.extend(this._vm.messages[t]||{},e)},q.prototype.getDateTimeFormat=function(t){return s(this._vm.dateTimeFormats[t]||{})},q.prototype.setDateTimeFormat=function(t,e){this._vm.dateTimeFormats[t]=e},q.prototype.mergeDateTimeFormat=function(t,e){this._vm.dateTimeFormats[t]=F.util.extend(this._vm.dateTimeFormats[t]||{},e)},q.prototype._localizeDateTime=function(t,e,n,i,o){var a=e,s=i[a];if((r(s)||r(s[o]))&&(a=n,s=i[a]),r(s)||r(s[o]))return null;var l=s[o],c=a+"__"+o,u=this._dateTimeFormatters[c];return u||(u=this._dateTimeFormatters[c]=new Intl.DateTimeFormat(a,l)),u.format(t)},q.prototype._d=function(t,e,r){if(!r)return new Intl.DateTimeFormat(e).format(t);var n=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),r);if(this._isFallbackRoot(n)){if(!this._root)throw Error("unexpected error");return this._root.d(t,r,e)}return n||""},q.prototype.d=function(e){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var i=this.locale,o=null;return 1===r.length?"string"==typeof r[0]?o=r[0]:t(r[0])&&(r[0].locale&&(i=r[0].locale),r[0].key&&(o=r[0].key)):2===r.length&&("string"==typeof r[0]&&(o=r[0]),"string"==typeof r[1]&&(i=r[1])),this._d(e,i,o)},q.prototype.getNumberFormat=function(t){return s(this._vm.numberFormats[t]||{})},q.prototype.setNumberFormat=function(t,e){this._vm.numberFormats[t]=e},q.prototype.mergeNumberFormat=function(t,e){this._vm.numberFormats[t]=F.util.extend(this._vm.numberFormats[t]||{},e)},q.prototype._localizeNumber=function(t,e,n,i,o){var a=e,s=i[a];if((r(s)||r(s[o]))&&(a=n,s=i[a]),r(s)||r(s[o]))return null;var l=s[o],c=a+"__"+o,u=this._numberFormatters[c];return u||(u=this._numberFormatters[c]=new Intl.NumberFormat(a,l)),u.format(t)},q.prototype._n=function(t,e,r){if(!r)return new Intl.NumberFormat(e).format(t);var n=this._localizeNumber(t,e,this.fallbackLocale,this._getNumberFormats(),r);if(this._isFallbackRoot(n)){if(!this._root)throw Error("unexpected error");return this._root.n(t,r,e)}return n||""},q.prototype.n=function(e){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];var i=this.locale,o=null;return 1===r.length?"string"==typeof r[0]?o=r[0]:t(r[0])&&(r[0].locale&&(i=r[0].locale),r[0].key&&(o=r[0].key)):2===r.length&&("string"==typeof r[0]&&(o=r[0]),"string"==typeof r[1]&&(i=r[1])),this._n(e,i,o)},Object.defineProperties(q.prototype,B),q.availabilities={dateTimeFormat:T,numberFormat:L},q.install=f,q.version="7.1.0","undefined"!=typeof window&&window.Vue&&window.Vue.use(q),q});