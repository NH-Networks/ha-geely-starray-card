function t(t,e,i,s){var o,n=arguments.length,a=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=t=>new n("string"==typeof t?t:t+"",void 0,s),r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return a(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,m=g?g.emptyScript:"",b=f.reactiveElementPolyfillSupport,v=(t,e)=>t,q={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),A={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...p(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:q).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:q;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const n=this.constructor;if(!1===s&&(o=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,b?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U=globalThis,S=t=>t,C=U.trustedTypes,E=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",K=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+K,V=`<${I}>`,H=document,M=()=>H.createComment(""),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,Q="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,Z=/>/g,N=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,O=/"/g,W=/^(?:script|style|textarea|title)$/i,T=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),J=T(1),j=T(2),F=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),P=new WeakMap,X=H.createTreeWalker(H,129);function Y(t,e){if(!w(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const D=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",a=R;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===R?"!--"===l[1]?a=z:void 0!==l[1]?a=Z:void 0!==l[2]?(W.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=N):void 0!==l[3]&&(a=N):a===N?">"===l[0]?(a=o??R,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?N:'"'===l[3]?O:G):a===O||a===G?a=N:a===z||a===Z?a=R:(a=N,o=void 0);const p=a===N&&t[e+1].startsWith("/>")?" ":"";n+=a===R?i+V:c>=0?(s.push(r),i.slice(0,c)+k+i.slice(c)+K+p):i+K+(-2===c?e:p)}return[Y(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class _{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,r=this.parts,[l,c]=D(t,e);if(this.el=_.createElement(l,i),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=X.nextNode())&&r.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=c[n++],i=s.getAttribute(t).split(K),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?st:"?"===a[1]?ot:"@"===a[1]?nt:it}),s.removeAttribute(t)}else t.startsWith(K)&&(r.push({type:6,index:o}),s.removeAttribute(t));if(W.test(s.tagName)){const t=s.textContent.split(K),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),X.nextNode(),r.push({type:2,index:++o});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===I)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(K,t+1));)r.push({type:7,index:o}),t+=K.length-1}o++}}static createElement(t,e){const i=H.createElement("template");return i.innerHTML=t,i}}function $(t,e,i=t,s){if(e===F)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=B(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=$(t,o._$AS(t,e.values),o,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??H).importNode(e,!0);X.currentNode=s;let o=X.nextNode(),n=0,a=0,r=i[0];for(;void 0!==r;){if(n===r.index){let e;2===r.type?e=new et(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new at(o,this,t)),this._$AV.push(e),r=i[++a]}n!==r?.index&&(o=X.nextNode(),n++)}return X.currentNode=H,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=$(this,t,e),B(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>w(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=_.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=P.get(t.strings);return void 0===e&&P.set(t.strings,e=new _(t)),e}k(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new et(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=S(t).nextSibling;S(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=$(this,t,e,0),n=!B(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const s=t;let a,r;for(t=o[0],a=0;a<o.length-1;a++)r=$(this,s[i+a],e,a),r===F&&(r=this._$AH[a]),n||=!B(r)||r!==this._$AH[a],r===L?t=L:t!==L&&(t+=(r??"")+o[a+1]),this._$AH[a]=r}n&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class ot extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class nt extends it{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=$(this,t,e,0)??L)===F)return;const i=this._$AH,s=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==L&&(i===L||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){$(this,t)}}const rt=U.litHtmlPolyfillSupport;rt?.(_,et),(U.litHtmlVersions??=[]).push("3.3.3");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new et(e.insertBefore(M(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct}),(lt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:y},dt=(t=pt,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**



// Geely Starray Card Icons
const GEELY_LOGO = {
  viewBox: "0 0 52 26",
  outline: [
    "M6 4h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H36a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM6 14h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H36a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"
  ],
  filled: [
    "M6 4h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H36a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM6 14h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H21a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm15 0h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H36a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"
  ]
};

const GEELY_LOCK = {
  viewBox: "0 0 24 24",
  outline: [
    "M17 9V7a5 5 0 0 0-10 0v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2zm-8-2a3 3 0 0 1 6 0v2H9V7zm10 13H5v-9h14v9zm-7-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
  ],
  filled: [
    "M17 9V7a5 5 0 0 0-10 0v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2zm-8-2a3 3 0 0 1 6 0v2H9V7zm3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  ]
};

const GEELY_LOCK_OPEN = {
  viewBox: "0 0 24 24",
  outline: [
    "M17 8V7a5 5 0 0 0-9.9-1H9.1A3 3 0 0 1 15 7v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2zm2 11H5v-9h14v9zm-7-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
  ],
  filled: [
    "M17 8V7a5 5 0 0 0-9.9-1H9.1A3 3 0 0 1 15 7v2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2zm-5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
  ]
};

const GEELY_FAN = {
  viewBox: "0 0 24 24",
  outline: [
    "M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.65-7.03c-.72.82-1.37 2.38-1.58 5.3-.03.45-.27.87-.62 1.1-.37.26-.89.31-1.32-.05C9.15 9.52 8.74 7.91 9 4.98c0-.41-.1-.71-.23-.91-.13-.21-.31-.36-.55-.45-.5-.2-1.23-.16-2.04.16C4.56 4.42 3 6.02 3 8c0 .82.18 1.65.97 2.35.83.72 2.38 1.36 5.3 1.58.45.03.87.27 1.1.61.26.37.31.89-.05 1.33-.81.98-2.42 1.4-5.35 1.13-.41 0-.71.1-.92.23-.2.13-.35.31-.45.55-.19.5-.15 1.23.17 2.04.64 1.63 2.24 3.18 4.22 3.18.82 0 1.65-.18 2.35-.97.72-.83 1.36-2.38 1.58-5.3.03-.45.27-.87.61-1.11.37-.25.89-.31 1.33.05.98.81 1.4 2.42 1.13 5.35 0 .41.1.71.23.92.13.2.31.35.55.45.5.19 1.23.15 2.04-.17 1.63-.64 3.18-2.24 3.18-4.22 0-.82-.18-1.65-.97-2.35-.83-.72-2.38-1.36-5.3-1.58-.45-.03-.87-.27-1.11-.61-.25-.37-.31-.89.05-1.33.81-.98 2.42-1.4 5.35-1.13.41 0 .71-.1.92-.23.2-.13.35-.31.45-.55.19-.5.15-1.23-.17-2.04C19.58 4.56 17.98 3 16 3c-.82 0-1.65.18-2.35.97z"
  ],
  filled: [
    "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm1.65-6.03c-.72.82-1.37 2.38-1.58 5.3-.03.45-.27.87-.62 1.1-.37.26-.89.31-1.32-.05C9.15 9.52 8.74 7.91 9 4.98c0-.41-.1-.71-.23-.91-.13-.21-.31-.36-.55-.45-.5-.2-1.23-.16-2.04.16C4.56 4.42 3 6.02 3 8c0 .82.18 1.65.97 2.35.83.72 2.38 1.36 5.3 1.58.45.03.87.27 1.1.61.26.37.31.89-.05 1.33-.81.98-2.42 1.4-5.35 1.13-.41 0-.71.1-.92.23-.2.13-.35.31-.45.55-.19.5-.15 1.23.17 2.04.64 1.63 2.24 3.18 4.22 3.18.82 0 1.65-.18 2.35-.97.72-.83 1.36-2.38 1.58-5.3.03-.45.27-.87.61-1.11.37-.25.89-.31 1.33.05.98.81 1.4 2.42 1.13 5.35 0 .41.1.71.23.92.13.2.31.35.55.45.5.19 1.23.15 2.04-.17 1.63-.64 3.18-2.24 3.18-4.22 0-.82-.18-1.65-.97-2.35-.83-.72-2.38-1.36-5.3-1.58-.45-.03-.87-.27-1.11-.61-.25-.37-.31-.89.05-1.33.81-.98 2.42-1.4 5.35-1.13.41 0 .71-.1.92-.23.2-.13.35-.31.45-.55.19-.5.15-1.23-.17-2.04C19.58 4.56 17.98 3 16 3c-.82 0-1.65.18-2.35.97z"
  ]
};

const GEELY_BOLT = {
  viewBox: "0 0 24 24",
  outline: [
    "M13.85 1.06a1 1 0 0 1 .63 1.11l-1.29 7.33H17.5a1 1 0 0 1 .85 1.52l-7 11.5a1 1 0 0 1-1.84-.69l1.29-7.33H6.5a1 1 0 0 1-.85-1.52l7-11.5a1 1 0 0 1 1.2-.42zm-1.85 12.44l-1.5 8.5 7-11.5H12l1.5-8.5-7 11.5z"
  ],
  filled: [
    "M13.85 1.06a1 1 0 0 1 .63 1.11l-1.29 7.33H17.5a1 1 0 0 1 .85 1.52l-7 11.5a1 1 0 0 1-1.84-.69l1.29-7.33H6.5a1 1 0 0 1-.85-1.52l7-11.5a1 1 0 0 1 1.2-.42z"
  ]
};

const GEELY_GAS = {
  viewBox: "0 0 24 24",
  outline: [
    "M19 5h-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18h12v-7h1a2 2 0 0 0 2-2V7.5a2.5 2.5 0 0 0-2-2.45V5zm-5 15H6V4h8v16zm5-9h-1V7.5a.5.5 0 0 1 1 0V11zM8 6h4v4H8V6z"
  ],
  filled: [
    "M19 5h-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18h12v-7h1a2 2 0 0 0 2-2V7.5a2.5 2.5 0 0 0-2-2.45V5zm-5 15H6V4h8v16zm5-9h-1V7.5a.5.5 0 0 1 1 0V11zM8 6h4v4H8V6z"
  ]
};

const GEELY_DEFROST = {
  viewBox: "0 0 24 24",
  outline: [
    "M3 18h18a1 1 0 0 0 .96-1.27l-2-7A3 3 0 0 0 17.08 7.5H6.92a3 3 0 0 0-2.88 2.23l-2 7A1 1 0 0 0 3 18zm2.84-8.89A1 1 0 0 1 6.8 8.5h10.4a1 1 0 0 1 .96.73l1.83 6.41L4.01 15.64l1.83-6.53zM8 19v3h2v-3H8zm4 0v3h2v-3h-2zm4 0v3h2v-3h-2z"
  ],
  filled: [
    "M3 18h18a1 1 0 0 0 .96-1.27l-2-7A3 3 0 0 0 17.08 7.5H6.92a3 3 0 0 0-2.88 2.23l-2 7A1 1 0 0 0 3 18zm5 1v3h2v-3H8zm4 0v3h2v-3h-2zm4 0v3h2v-3h-2z"
  ]
};

const GEELY_TRUNK = {
  viewBox: "0 0 24 24",
  outline: [
    "M20.5 14.5l-3-7A2 2 0 0 0 15.65 6H8.35A2 2 0 0 0 6.5 7.5l-3 7A2 2 0 0 0 5.35 18H18.65a2 2 0 0 0 1.85-3.5zM8.35 8h7.3l2.14 5H6.21L8.35 8zM5.35 16l-.86-2h15l-.86 2H5.35zM12 2a1 1 0 0 1 1 1v2h-2V3a1 1 0 0 1 1-1z"
  ],
  filled: [
    "M20.5 14.5l-3-7A2 2 0 0 0 15.65 6H8.35A2 2 0 0 0 6.5 7.5l-3 7A2 2 0 0 0 5.35 18H18.65a2 2 0 0 0 1.85-3.5zM12 2a1 1 0 0 1 1 1v2h-2V3a1 1 0 0 1 1-1z"
  ]
};

const GEELY_FIND = {
  viewBox: "0 0 24 24",
  outline: [
    "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17zM7.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 1a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2z"
  ],
  filled: [
    "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM7.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 1a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2z"
  ]
};

// Default Dutch & English translations
const LABELS_NL = {
  unlocked: "Ontgrendeld",
  locked: "Vergrendeld",
  scheduled: "Gepland",
  charging: "Opladen",
  plugged_in: "Aangesloten",
  lock: "Vergrendel",
  unlock: "Ontgrendel",
  climate: "Klimaat",
  defrost: "Ontdooien",
  trunk: "Kofferbak",
  find_car: "Lichten & Claxon",
  electric: "elektrisch",
  fuel: "brandstof",
  fuel_level: "Brandstof",
  time_left: "resterend",
  total_range: "Totaal bereik",
  battery: "Batterij"
};

const LABELS_EN = {
  unlocked: "Unlocked",
  locked: "Locked",
  scheduled: "Scheduled",
  charging: "Charging",
  plugged_in: "Plugged in",
  lock: "Lock",
  unlock: "Unlock",
  climate: "Climate",
  defrost: "Defrost",
  trunk: "Trunk",
  find_car: "Find Car",
  electric: "electric",
  fuel: "fuel",
  fuel_level: "Fuel",
  time_left: "left",
  total_range: "Total range",
  battery: "Battery"
};

function getLabel(labels, key, locale = "nl") {
  if (labels && labels[key] !== undefined) return labels[key];
  const dict = locale === "en" ? LABELS_EN : LABELS_NL;
  return dict[key] ?? LABELS_NL[key] ?? "";
}

// Dynamic Script Base Directory for Zero-Config Asset Loading
const SCRIPT_BASE_DIR = (() => {
  try {
    const url = new URL(".", import.meta.url).href;
    return url.endsWith("/") ? url : url + "/";
  } catch {
    return "/local/";
  }
})();

// Default Overlay for 2026 Geely Starray EM-i (White)
const DEFAULT_GEELY_OVERLAY = {
  cable_bottom: "30px",
  cable_width: "55%",
  pulse_left: "41%",
  pulse_top: "46%"
};

const MODEL_PRESETS = {
  "starray": DEFAULT_GEELY_OVERLAY,
  "starray-em-i": DEFAULT_GEELY_OVERLAY,
  "boyue-l": DEFAULT_GEELY_OVERLAY,
  "galaxy-l7": { cable_bottom: "32px", cable_width: "56%", pulse_left: "40%", pulse_top: "47%" },
  "ex5": { cable_bottom: "30px", cable_width: "54%", pulse_left: "38%", pulse_top: "48%" }
};

function resolveGeelyOverlay(model, override) {
  const preset = (model && MODEL_PRESETS[model.toLowerCase()]) || {};
  return { ...DEFAULT_GEELY_OVERLAY, ...preset, ...override };
}

// Helpers
function getHaState(hass, entityId) {
  if (!entityId || !hass || !hass.states) return undefined;
  return hass.states[entityId]?.state;
}

function getHaAttr(hass, entityId, attr) {
  if (!entityId || !hass || !hass.states) return undefined;
  return hass.states[entityId]?.attributes?.[attr];
}

function resolveHaImage(hass, value, attr) {
  if (!value) return undefined;
  if (hass && hass.states && hass.states[value] !== undefined) {
    return getHaAttr(hass, value, attr) || undefined;
  }
  return value;
}

function getHaNumState(hass, entityId) {
  const s = getHaState(hass, entityId);
  if (s === undefined || s === null) return undefined;
  const str = String(s).trim().toLowerCase();
  if (str === "unavailable" || str === "unknown" || str === "") return undefined;
  const cleaned = str.replace(",", ".");
  const match = cleaned.match(/-?\d+(\.\d+)?/);
  if (!match) return undefined;
  const n = parseFloat(match[0]);
  return Number.isNaN(n) ? undefined : n;
}

function getDistanceUnit(hass, entityId) {
  const u = getHaAttr(hass, entityId, "unit_of_measurement");
  if (u) return u;
  return hass?.config?.unit_system?.length === "mi" ? "mi" : "km";
}

function roundVal(n) {
  return Math.round(n ?? 0);
}

function isVehicleConnected(hass, entities) {
  const plugEntity = entities.charger_plug || entities.charging_connection_status;
  if (!plugEntity) return false;
  const val = (getHaState(hass, plugEntity) || "").toLowerCase().trim();
  if (val === "on" || val === "true" || val === "connected" || val === "plugged_in" || val === "charging") {
    return true;
  }
  return (val.includes("connect") || val.includes("plug")) && !val.includes("disconnect") && !val.includes("unplug");
}

function isVehicleCharging(hass, entities) {
  const chargeStatusEntity = entities.charging_status;
  if (!chargeStatusEntity) return false;
  const val = (getHaState(hass, chargeStatusEntity) || "").toLowerCase().trim();
  if (val === "charging" || val === "fast_charging" || val === "trickle" || val === "on" || val === "true") return true;
  return val.includes("charg") && !val.includes("not") && !val.includes("discharg");
}

function formatTimeLeft(hass, entities, labels) {
  const id = entities.charging_time_left || entities.time_to_full_charge;
  if (!id) return null;
  const raw = getHaState(hass, id);
  if (raw === undefined || raw === "" || raw === "unknown" || raw === "unavailable") return null;
  const n = Number(raw);
  let text;
  if (Number.isFinite(n)) {
    const unit = hass.states[id]?.attributes?.unit_of_measurement;
    const minutes = Math.round(unit === "h" ? n * 60 : unit === "s" ? n / 60 : n);
    if (minutes <= 0) return null;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    text = h > 0 ? `${h} u ${m} min` : `${m} min`;
  } else {
    text = raw;
  }
  return `${text} ${getLabel(labels, "time_left")}`.trim();
}

// Main Geely Starray Card Component
class GeelyStarrayCardComponent extends ct {
  constructor() {
    super();
    this.actionsOpen = false;
    this.climateOn = false;
    this.defrostOn = false;
  }

  setConfig(config) {
    if (!config) {
      throw new Error("geely-starray-card: Invalid card configuration");
    }
    this.config = {
      name: "Geely Starray EM-i",
      show_actions: true,
      header: "classic",
      model: "starray-em-i",
      ...config,
      entities: config.entities || {},
    };
  }

  getCardSize() {
    return 3;
  }

  static async getConfigElement() {
    return document.createElement("geely-starray-card-editor");
  }

  static getStubConfig() {
    return {
      type: "custom:geely-starray-card",
      name: "Geely Starray EM-i",
      model: "starray-em-i",
      header: "classic",
      entities: {
        battery: "sensor.geely_starray_battery_percentage",
        electric_range: "sensor.geely_starray_electric_range",
        fuel_range: "sensor.geely_starray_fuel_range",
        fuel_level: "sensor.geely_starray_fuel_level",
        charging_connection_status: "binary_sensor.geely_starray_charger_plug",
        charging_status: "sensor.geely_starray_charging_status",
        charging_time_left: "sensor.geely_starray_time_to_full_charge",
        lock: "lock.geely_starray_doors",
        location: "device_tracker.geely_starray_location",
        climate: "switch.geely_starray_ac",
        defrost: "switch.geely_starray_defrost",
        unlock_trunk: "button.geely_starray_unlock_trunk",
        find_car: "button.geely_starray_find_car",
      },
    };
  }

  get isDarkMode() {
    if (this.config.theme_mode === "dark") return true;
    if (this.config.theme_mode === "light") return false;
    return this.hass?.themes?.darkMode ?? true;
  }

  get appHeader() {
    return this.config.header === "app";
  }

  headerMain(kind, chargeState) {
    const e = this.config.entities;
    const dteBattery = getHaNumState(this.hass, e.electric_range || e.distance_to_empty_battery) ?? 0;
    const dteTank = getHaNumState(this.hass, e.fuel_range || e.distance_to_empty_tank) ?? 0;
    const battery = getHaNumState(this.hass, e.battery) ?? 0;
    const labels = this.config.labels;

    if (kind === "ice") {
      return {
        value: roundVal(dteTank),
        unit: getDistanceUnit(this.hass, e.fuel_range || e.distance_to_empty_tank),
        sublabel: getLabel(labels, "fuel"),
      };
    }

    if (this.appHeader || chargeState === "scheduled" || chargeState === "charging") {
      return {
        value: roundVal(battery),
        unit: "%",
        sublabel: getLabel(labels, "battery"),
      };
    }

    const total = roundVal(dteBattery + dteTank);
    return {
      value: total > 0 ? total : roundVal(battery),
      unit: total > 0 ? getDistanceUnit(this.hass, e.electric_range || e.distance_to_empty_battery) : "%",
      sublabel: total > 0 ? getLabel(labels, "total_range") : getLabel(labels, "battery"),
    };
  }

  headerSub1(kind, chargeState) {
    const e = this.config.entities;
    const dteBattery = getHaNumState(this.hass, e.electric_range || e.distance_to_empty_battery) ?? 0;
    const fuelAmount = getHaNumState(this.hass, e.fuel_amount || e.fuel_level);
    const tankCapacity = e.fuel_tank_capacity_l;
    const labels = this.config.labels;
    const batteryUnit = getDistanceUnit(this.hass, e.electric_range || e.distance_to_empty_battery);

    const fuelSub = () => {
      if (fuelAmount === undefined) return null;
      let pct = fuelAmount;
      if (tankCapacity && fuelAmount <= tankCapacity && tankCapacity > 0) {
        pct = (fuelAmount / tankCapacity) * 100;
      }
      return {
        icon: "gas",
        value: `${roundVal(pct)}%`,
        label: getLabel(labels, "fuel_level"),
      };
    };

    if (kind === "ice") return fuelSub();

    if (kind === "hybrid") {
      if (chargeState === "charging" && !this.appHeader) return fuelSub();
      return {
        icon: "lightning",
        value: `${roundVal(dteBattery)} ${batteryUnit}`,
        label: getLabel(labels, "electric"),
      };
    }

    if (chargeState === "scheduled" || this.appHeader) {
      return {
        icon: "lightning",
        value: `${roundVal(dteBattery)} ${batteryUnit}`,
        label: getLabel(labels, "electric"),
      };
    }
    return null;
  }

  headerSub2(kind, chargeState) {
    if (kind !== "hybrid" || (chargeState === "charging" && !this.appHeader)) return null;
    const tankEntity = this.config.entities.fuel_range || this.config.entities.distance_to_empty_tank;
    if (!tankEntity) return null;
    const dteTank = getHaNumState(this.hass, tankEntity) ?? 0;
    return `${roundVal(dteTank)} ${getDistanceUnit(this.hass, tankEntity)} ${getLabel(this.config.labels, "fuel")}`;
  }

  resolveCarImage(connected, isDark) {
    const img = this.config.images;
    if (connected) {
      const fromConf =
        (img && resolveHaImage(this.hass, img.charging || img.exterior_back, "exterior_back")) ||
        img?.fallback;
      if (fromConf) return fromConf;
      return isDark
        ? (SCRIPT_BASE_DIR + "assets/starray-white-charging-dark.jpg")
        : (SCRIPT_BASE_DIR + "assets/starray-white-charging-light.jpg");
    }

    const fromConf =
      (img && resolveHaImage(this.hass, img.parked || img.exterior_side_left, "exterior_side_left")) ||
      img?.fallback;
    if (fromConf) return fromConf;

    switch (this.config.image_preset) {
      case "press_front":
        return SCRIPT_BASE_DIR + "assets/starray-white-front-press.png";
      case "press_rear":
        return SCRIPT_BASE_DIR + "assets/starray-white-rear-press.jpg";
      case "plaza":
        return SCRIPT_BASE_DIR + "assets/starray-white-plaza-press.jpg";
      case "cockpit":
        return SCRIPT_BASE_DIR + "assets/starray-white-cockpit.jpg";
      case "studio_light":
        return SCRIPT_BASE_DIR + "assets/starray-white-parked-light.jpg";
      case "studio_dark":
        return SCRIPT_BASE_DIR + "assets/starray-white-parked-dark.jpg";
      default:
        return isDark
          ? (SCRIPT_BASE_DIR + "assets/starray-white-parked-dark.jpg")
          : (SCRIPT_BASE_DIR + "assets/starray-white-parked-light.jpg");
    }
  }

  render() {
    if (!this.hass || !this.config) return J``;

    const e = this.config.entities;
    const hasBattery = !!(e.battery || e.electric_range || e.distance_to_empty_battery);
    const hasFuel = !!(e.fuel_range || e.distance_to_empty_tank || e.fuel_amount || e.fuel_level);
    const kind = hasBattery && hasFuel ? "hybrid" : hasBattery ? "bev" : hasFuel ? "ice" : "hybrid";

    const connected = kind !== "ice" && isVehicleConnected(this.hass, e);
    const charging = kind !== "ice" && isVehicleCharging(this.hass, e);
    const chargeState = kind === "ice" ? "idle" : connected ? (charging ? "charging" : "scheduled") : "idle";

    const main = this.headerMain(kind, chargeState);
    const sub1 = this.headerSub1(kind, chargeState);
    const sub2 = this.headerSub2(kind, chargeState);

    const isLocked = getHaState(this.hass, e.lock) === "locked";
    const isHome = !e.location || getHaState(this.hass, e.location) === "home";
    let sKey = "";
    if (e.lock && isHome && !isLocked) sKey = "unlocked";
    else if (chargeState === "charging") sKey = "charging";
    else if (chargeState === "scheduled") sKey = "scheduled";
    else if (connected) sKey = "plugged_in";
    else if (isLocked) sKey = "locked";

    const statusText = sKey ? getLabel(this.config.labels, sKey) : "";
    const timeLeft = chargeState === "charging" ? formatTimeLeft(this.hass, e, this.config.labels) : null;
    const isDark = this.isDarkMode;
    const imgSrc = this.resolveCarImage(connected, isDark);
    const overlayClass = isDark ? "dark-theme" : "light-theme";

    return J`
      <ha-card>
        <div
          class="geely-card ${isDark ? "theme-dark" : "theme-light"} ${this.config.show_actions !== false ? "clickable" : ""}"
          style="--geely-aspect-ratio: ${this.config.aspect_ratio || "1 / 1"};"
          @click=${this.openActions}
        >
          <!-- Background Car Render -->
          <div
            class="car-image"
            style="background-image: url('${imgSrc}');"
          ></div>

          <!-- Pulsing charging glow if charging -->
          ${charging ? this.renderPulse() : L}

          <!-- Cable overlay for custom vehicle renders -->
          ${connected && this.config.images?.exterior_back ? this.renderCable() : L}

          <!-- Header overlay -->
          <div class="header ${overlayClass}">
            <div class="brand-row">
              ${this.renderGeelyLogo()}
              <span class="vehicle-name">${this.config.name || "Geely Starray EM-i"}</span>
            </div>

            <!-- Primary Metric -->
            <div class="row main-row">
              <span class="main-value">
                ${main.value}<span class="main-unit"> ${main.unit}</span>
              </span>
            </div>

            <!-- Secondary Metrics -->
            <div class="sub-metrics">
              ${sub1
                ? J`
                    <div class="pill sub-pill">
                      ${sub1.icon === "lightning"
                        ? this.renderIcon(GEELY_BOLT, "icon-svg icon-electric", true)
                        : this.renderIcon(GEELY_GAS, "icon-svg icon-gas", true)}
                      <span class="sub-val">${sub1.value}</span>
                      <span class="sub-lbl">${sub1.label}</span>
                    </div>
                  `
                : L}
              ${sub2
                ? J`
                    <div class="pill sub-pill fuel-pill">
                      ${this.renderIcon(GEELY_GAS, "icon-svg icon-gas", true)}
                      <span class="sub-val">${sub2}</span>
                    </div>
                  `
                : L}
            </div>
          </div>

          <!-- Status Line: Bottom Left -->
          ${statusText
            ? J`
                <div class="status-badge ${sKey} ${overlayClass}">
                  <span class="status-dot ${charging ? "pulsing" : ""}"></span>
                  <span class="status-label">${statusText}</span>
                </div>
              `
            : L}

          <!-- Status Line: Bottom Right (Charging time left) -->
          ${timeLeft
            ? J`<div class="time-left-badge ${overlayClass}">${timeLeft}</div>`
            : L}

          <!-- Interactive Cockpit Controls Dialog -->
          ${this.actionsOpen ? this.renderActionsDialog(e, isDark) : L}
        </div>
      </ha-card>
    `;
  }

  renderGeelyLogo() {
    return J`
      <svg class="geely-badge" viewBox=${GEELY_LOGO.viewBox || "0 0 52 26"} fill="currentColor">
        ${GEELY_LOGO.filled.map(
          (d) => j`<path fill-rule="evenodd" clip-rule="evenodd" d=${d}></path>`
        )}
      </svg>
    `;
  }

  renderIcon(icon, className, filled = false) {
    return J`
      <svg class=${className} viewBox=${icon.viewBox || "0 0 24 24"} fill="currentColor">
        ${(filled ? icon.filled : icon.outline).map(
          (d) => j`<path fill-rule="evenodd" clip-rule="evenodd" d=${d}></path>`
        )}
      </svg>
    `;
  }

  renderPulse() {
    const overlay = resolveGeelyOverlay(this.config.model, this.config.overlay);
    return J`
      <div class="pulse-container" style="left: ${overlay.pulse_left}; top: ${overlay.pulse_top};">
        <span class="pulse" style="animation-delay: 0s"></span>
        <span class="pulse" style="animation-delay: 2s"></span>
        <span class="pulse" style="animation-delay: 4s"></span>
      </div>
    `;
  }

  renderCable() {
    const overlay = resolveGeelyOverlay(this.config.model, this.config.overlay);
    const src = this.config.images?.fallback || (SCRIPT_BASE_DIR + "assets/geely-charge-cable.png");
    return J`
      <img
        class="cable"
        src=${src}
        style="bottom: ${overlay.cable_bottom}; width: ${overlay.cable_width};"
        alt="Charge Cable"
      />
    `;
  }

  openActions(ev) {
    if (this.config.show_actions === false) return;
    ev.stopPropagation();
    this.actionsOpen = true;
  }

  closeActions() {
    this.actionsOpen = false;
  }

  callLock(lock) {
    const entityId = this.config.entities.lock;
    if (!entityId) return;
    this.hass.callService("lock", lock ? "lock" : "unlock", { entity_id: entityId });
    this.closeActions();
  }

  toggleClimate() {
    const { climate, start_climatisation, stop_climatisation } = this.config.entities;
    if (climate) {
      if (climate.startsWith("switch.")) {
        this.hass.callService("switch", "toggle", { entity_id: climate });
      } else if (climate.startsWith("climate.")) {
        const cur = getHaState(this.hass, climate);
        this.hass.callService("climate", "set_hvac_mode", {
          entity_id: climate,
          hvac_mode: cur === "off" ? "heat_cool" : "off",
        });
      }
    } else if (start_climatisation || stop_climatisation) {
      const btn = this.climateOn ? stop_climatisation : start_climatisation;
      if (btn) this.hass.callService("button", "press", { entity_id: btn });
    }
    this.climateOn = !this.climateOn;
  }

  toggleDefrost() {
    const defrost = this.config.entities.defrost;
    if (defrost) {
      this.hass.callService("switch", "toggle", { entity_id: defrost });
      this.defrostOn = !this.defrostOn;
    }
  }

  triggerTrunk() {
    const trunk = this.config.entities.unlock_trunk;
    if (trunk) {
      if (trunk.startsWith("button.")) {
        this.hass.callService("button", "press", { entity_id: trunk });
      } else if (trunk.startsWith("cover.")) {
        this.hass.callService("cover", "toggle", { entity_id: trunk });
      }
    }
  }

  triggerFindCar() {
    const find = this.config.entities.find_car;
    if (find) {
      this.hass.callService("button", "press", { entity_id: find });
    }
  }

  renderActionsDialog(e, isDark) {
    const isLocked = getHaState(this.hass, e.lock) === "locked";
    const hasClimate = !!(e.climate || e.start_climatisation || e.stop_climatisation);
    const hasDefrost = !!e.defrost;
    const hasTrunk = !!e.unlock_trunk;
    const hasFind = !!e.find_car;
    const themeClass = isDark ? "dark" : "light";

    return J`
      <div
        class="actions-backdrop"
        @click=${(ev) => {
          ev.stopPropagation();
          this.closeActions();
        }}
      >
        <div class="actions-panel ${themeClass}" @click=${(ev) => ev.stopPropagation()}>
          <div class="actions-title">
            <span>${this.config.name || "Geely Starray"}</span>
            <button class="close-btn" @click=${() => this.closeActions()} aria-label="Sluiten">âœ•</button>
          </div>

          <div class="actions-grid">
            ${e.lock
              ? J`
                  <button
                    class="action-btn ${isLocked ? "active" : ""}"
                    @click=${() => this.callLock(!isLocked)}
                  >
                    ${this.renderIcon(isLocked ? GEELY_LOCK : GEELY_LOCK_OPEN, "action-svg", isLocked)}
                    <span>${isLocked ? getLabel(this.config.labels, "unlock") : getLabel(this.config.labels, "lock")}</span>
                  </button>
                `
              : L}

            ${hasClimate
              ? J`
                  <button
                    class="action-btn ${this.climateOn ? "active" : ""}"
                    @click=${() => this.toggleClimate()}
                  >
                    ${this.renderIcon(GEELY_FAN, "action-svg", this.climateOn)}
                    <span>${getLabel(this.config.labels, "climate")}</span>
                  </button>
                `
              : L}

            ${hasDefrost
              ? J`
                  <button
                    class="action-btn ${this.defrostOn ? "active" : ""}"
                    @click=${() => this.toggleDefrost()}
                  >
                    ${this.renderIcon(GEELY_DEFROST, "action-svg", this.defrostOn)}
                    <span>${getLabel(this.config.labels, "defrost")}</span>
                  </button>
                `
              : L}

            ${hasTrunk
              ? J`
                  <button class="action-btn" @click=${() => this.triggerTrunk()}>
                    ${this.renderIcon(GEELY_TRUNK, "action-svg")}
                    <span>${getLabel(this.config.labels, "trunk")}</span>
                  </button>
                `
              : L}

            ${hasFind
              ? J`
                  <button class="action-btn" @click=${() => this.triggerFindCar()}>
                    ${this.renderIcon(GEELY_FIND, "action-svg")}
                    <span>${getLabel(this.config.labels, "find_car")}</span>
                  </button>
                `
              : L}
          </div>
        </div>
      </div>
    `;
  }
}

GeelyStarrayCardComponent.styles = et`
  :host {
    --geely-cyan: #00e5ff;
    --geely-teal: #00d2c4;
    --geely-green: #00f5a0;
    --geely-dark-bg: #0b0f14;
    --geely-card-radius: 18px;
  }

  ha-card {
    overflow: hidden;
    border-radius: var(--geely-card-radius);
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Inter", sans-serif;
  }

  .geely-card {
    position: relative;
    width: 100%;
    aspect-ratio: var(--geely-aspect-ratio, 1 / 1);
    overflow: hidden;
    user-select: none;
  }

  .geely-card.clickable {
    cursor: pointer;
  }

  .car-image {
    position: absolute;
    inset: 0;
    z-index: 1;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .geely-card:hover .car-image {
    transform: scale(1.02);
  }

  .pulse-container {
    position: absolute;
    z-index: 2;
    pointer-events: none;
    width: 0;
    height: 0;
  }

  .pulse {
    position: absolute;
    left: -28px;
    top: -28px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 245, 160, 0.9) 0%,
      rgba(0, 229, 255, 0.6) 45%,
      rgba(0, 229, 255, 0) 75%
    );
    animation: geelyChargingPulse 4.5s ease-out infinite;
  }

  @keyframes geelyChargingPulse {
    0% { transform: scale(0.2); opacity: 0.95; }
    50% { opacity: 0.5; }
    100% { transform: scale(2.2); opacity: 0; }
  }

  .cable {
    position: absolute;
    left: 0;
    height: auto;
    object-fit: contain;
    pointer-events: none;
    z-index: 2;
  }

  .header {
    position: absolute;
    left: 18px;
    top: 18px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: 6px;
    pointer-events: none;
  }

  .brand-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .geely-badge {
    width: 22px;
    height: 11px;
    color: var(--geely-cyan);
    filter: drop-shadow(0 0 6px rgba(0, 229, 255, 0.6));
  }

  .vehicle-name {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    opacity: 0.85;
  }

  .row {
    display: flex;
    align-items: baseline;
    white-space: nowrap;
  }

  .main-value {
    font-size: 52px;
    font-weight: 300;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .main-unit {
    font-size: 26px;
    font-weight: 300;
    letter-spacing: -0.02em;
    margin-left: 2px;
    opacity: 0.85;
  }

  .sub-metrics {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 2px;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(0, 0, 0, 0.35);
  }

  .icon-svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }

  .icon-electric {
    color: var(--geely-cyan);
    filter: drop-shadow(0 0 4px rgba(0, 229, 255, 0.8));
  }

  .icon-gas {
    color: #ffb74d;
  }

  .sub-val {
    font-weight: 600;
  }

  .sub-lbl {
    opacity: 0.75;
    font-weight: 400;
  }

  .status-badge {
    position: absolute;
    left: 18px;
    bottom: 18px;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #aaa;
  }

  .status-badge.charging .status-dot,
  .status-badge.plugged_in .status-dot {
    background: var(--geely-green);
    box-shadow: 0 0 8px var(--geely-green);
  }

  .status-badge.locked .status-dot {
    background: var(--geely-cyan);
  }

  .status-badge.unlocked .status-dot {
    background: #ff7043;
  }

  .status-dot.pulsing {
    animation: dotPulse 1.8s infinite;
  }

  @keyframes dotPulse {
    0% { transform: scale(0.9); opacity: 0.7; }
    50% { transform: scale(1.3); opacity: 1; }
    100% { transform: scale(0.9); opacity: 0.7; }
  }

  .time-left-badge {
    position: absolute;
    right: 18px;
    bottom: 18px;
    z-index: 3;
    font-size: 13px;
    font-weight: 500;
    padding: 5px 12px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: var(--geely-cyan);
  }

  .header.dark-theme,
  .status-badge.dark-theme {
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  }

  .header.light-theme,
  .status-badge.light-theme {
    color: #111827;
    text-shadow: 0 1px 8px rgba(255, 255, 255, 0.8);
  }

  .header.light-theme .pill {
    background: rgba(255, 255, 255, 0.65);
    border-color: rgba(0, 0, 0, 0.1);
    color: #111827;
  }

  .status-badge.light-theme,
  .time-left-badge.light-theme {
    background: rgba(255, 255, 255, 0.7);
    border-color: rgba(0, 0, 0, 0.1);
    color: #111827;
  }

  .actions-backdrop {
    position: absolute;
    inset: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.25s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .actions-panel {
    width: 88%;
    max-width: 320px;
    border-radius: 24px;
    padding: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes slideUp {
    from { transform: translateY(20px) scale(0.96); opacity: 0; }
    to { transform: translateY(0) scale(1); opacity: 1; }
  }

  .actions-panel.dark {
    background: rgba(20, 26, 34, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
  }

  .actions-panel.light {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #111827;
  }

  .actions-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .close-btn {
    background: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: inherit;
    opacity: 0.6;
    padding: 4px;
  }

  .close-btn:hover {
    opacity: 1;
  }

  .actions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 12px 6px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 11px;
    font-weight: 500;
    transition: all 0.2s ease;
    background: rgba(255, 255, 255, 0.08);
    color: inherit;
  }

  .actions-panel.light .action-btn {
    background: rgba(0, 0, 0, 0.05);
  }

  .action-btn:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
  }

  .actions-panel.light .action-btn:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  .action-btn.active {
    background: var(--geely-cyan);
    color: #0b0f14;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 229, 255, 0.4);
  }

  .action-svg {
    width: 24px;
    height: 24px;
  }
`;

t([ut({ attribute: !1 })], GeelyStarrayCardComponent.prototype, "hass", void 0);
t([ft()], GeelyStarrayCardComponent.prototype, "config", void 0);
t([ft()], GeelyStarrayCardComponent.prototype, "actionsOpen", void 0);
t([ft()], GeelyStarrayCardComponent.prototype, "climateOn", void 0);
t([ft()], GeelyStarrayCardComponent.prototype, "defrostOn", void 0);

// Visual Card Editor for Lovelace UI
class GeelyStarrayCardEditorComponent extends ct {
  setConfig(config) {
    this._config = { ...config, entities: { ...config.entities } };
  }

  _valueChanged(key, value, isEntity = false) {
    if (!this._config) return;
    const newConfig = { ...this._config };
    if (isEntity) {
      newConfig.entities = { ...newConfig.entities, [key]: value };
    } else {
      newConfig[key] = value;
    }
    this._config = newConfig;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    if (!this.hass || !this._config) return J``;
    const e = this._config.entities || {};

    return J`
      <div class="card-config">
        <div class="form-row">
          <label>Naam / Model</label>
          <input
            type="text"
            .value=${this._config.name || "Geely Starray EM-i"}
            @change=${(ev) => this._valueChanged("name", ev.target.value)}
          />
        </div>

        <div class="form-row">
          <label>Header Weergave</label>
          <select
            .value=${this._config.header || "classic"}
            @change=${(ev) => this._valueChanged("header", ev.target.value)}
          >
            <option value="classic">Klassiek (Totaal Bereik + Opsplitsing)</option>
            <option value="app">Geely App Stijl (Batterij % Prominent)</option>
            <option value="hybrid">Hybride Focus</option>
          </select>
        </div>

        <div class="form-row">
          <label>Thema Modus</label>
          <select
            .value=${this._config.theme_mode || "auto"}
            @change=${(ev) => this._valueChanged("theme_mode", ev.target.value)}
          >
            <option value="auto">Automatisch (Volg Home Assistant)</option>
            <option value="dark">Donker (Dark Mode)</option>
            <option value="light">Licht (Light Mode)</option>
          </select>
        </div>

        <div class="form-row">
          <label>Voertuig Afbeelding (Preset)</label>
          <select
            .value=${this._config.image_preset || "studio_dark"}
            @change=${(ev) => this._valueChanged("image_preset", ev.target.value)}
          >
            <option value="studio_dark">Studio Render Donker (Geely Starray EM-i)</option>
            <option value="studio_light">Studio Render Licht (Geely Starray EM-i)</option>
            <option value="press_front">Europese Persfoto Voorkant 3/4 (Origineel)</option>
            <option value="press_rear">Europese Persfoto Achterkant 3/4 (Origineel)</option>
            <option value="plaza">Europese Introductie Warschau Plaza</option>
            <option value="cockpit">Cockpit & 15.4" Scherm Interieur</option>
          </select>
        </div>

        <div class="form-row">
          <label>Beeldverhouding (Aspect Ratio)</label>
          <select
            .value=${this._config.aspect_ratio || "1 / 1"}
            @change=${(ev) => this._valueChanged("aspect_ratio", ev.target.value)}
          >
            <option value="1 / 1">1:1 Vierkant (Standaard Dashboard)</option>
            <option value="16 / 10">16:10 Breedbeeld (Optimaal voor Persfoto)</option>
            <option value="16 / 9">16:9 Cinematic</option>
            <option value="4 / 3">4:3 Klassiek</option>
          </select>
        </div>

        <div class="section-title">Sensoren & Telemetrie</div>

        <div class="form-row">
          <label>Batterij Percentage (%)</label>
          <input
            type="text"
            placeholder="sensor.geely_battery_level"
            .value=${e.battery || ""}
            @change=${(ev) => this._valueChanged("battery", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Elektrisch Bereik (km)</label>
          <input
            type="text"
            placeholder="sensor.geely_electric_range"
            .value=${e.electric_range || ""}
            @change=${(ev) => this._valueChanged("electric_range", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Brandstof Bereik (km)</label>
          <input
            type="text"
            placeholder="sensor.geely_fuel_range"
            .value=${e.fuel_range || ""}
            @change=${(ev) => this._valueChanged("fuel_range", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Brandstof Niveau (%)</label>
          <input
            type="text"
            placeholder="sensor.geely_fuel_level"
            .value=${e.fuel_level || ""}
            @change=${(ev) => this._valueChanged("fuel_level", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Laadkabel Aangesloten Sensor</label>
          <input
            type="text"
            placeholder="binary_sensor.geely_charger_plug"
            .value=${e.charging_connection_status || e.charger_plug || ""}
            @change=${(ev) => this._valueChanged("charging_connection_status", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Laadstatus Sensor</label>
          <input
            type="text"
            placeholder="sensor.geely_charging_status"
            .value=${e.charging_status || ""}
            @change=${(ev) => this._valueChanged("charging_status", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Laadtijd Resterend Sensor</label>
          <input
            type="text"
            placeholder="sensor.geely_time_to_full_charge"
            .value=${e.charging_time_left || ""}
            @change=${(ev) => this._valueChanged("charging_time_left", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Vergrendeling / Deurslot (Lock)</label>
          <input
            type="text"
            placeholder="lock.geely_doors"
            .value=${e.lock || ""}
            @change=${(ev) => this._valueChanged("lock", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Locatie / Device Tracker</label>
          <input
            type="text"
            placeholder="device_tracker.geely_location"
            .value=${e.location || ""}
            @change=${(ev) => this._valueChanged("location", ev.target.value, true)}
          />
        </div>

        <div class="section-title">Bediening & Cockpit</div>

        <div class="form-row">
          <label>Klimaatregeling (Airco / Verwarming)</label>
          <input
            type="text"
            placeholder="switch.geely_ac of climate.geely_climate"
            .value=${e.climate || ""}
            @change=${(ev) => this._valueChanged("climate", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Voorruit Ontdooien (Defrost)</label>
          <input
            type="text"
            placeholder="switch.geely_defrost"
            .value=${e.defrost || ""}
            @change=${(ev) => this._valueChanged("defrost", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Kofferbak Ontgrendelen</label>
          <input
            type="text"
            placeholder="button.geely_unlock_trunk"
            .value=${e.unlock_trunk || ""}
            @change=${(ev) => this._valueChanged("unlock_trunk", ev.target.value, true)}
          />
        </div>

        <div class="form-row">
          <label>Voertuig Zoeken (Claxon / Knipperlicht)</label>
          <input
            type="text"
            placeholder="button.geely_find_car"
            .value=${e.find_car || ""}
            @change=${(ev) => this._valueChanged("find_car", ev.target.value, true)}
          />
        </div>
      </div>
    `;
  }
}

GeelyStarrayCardEditorComponent.styles = et`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 0;
    font-family: inherit;
  }
  .section-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-color, #00e5ff);
    margin-top: 10px;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .form-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  label {
    font-size: 12px;
    font-weight: 500;
    opacity: 0.85;
  }
  input, select {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(0, 0, 0, 0.25);
    color: inherit;
    font-size: 13px;
  }
  input:focus, select:focus {
    outline: none;
    border-color: var(--primary-color, #00e5ff);
  }
`;

t([ut({ attribute: !1 })], GeelyStarrayCardEditorComponent.prototype, "hass", void 0);
t([ft()], GeelyStarrayCardEditorComponent.prototype, "_config", void 0);

if (!customElements.get("geely-starray-card")) {
  customElements.define("geely-starray-card", GeelyStarrayCardComponent);
}
if (!customElements.get("geely-car-card")) {
  customElements.define("geely-car-card", GeelyStarrayCardComponent);
}
if (!customElements.get("geely-starray-card-editor")) {
  customElements.define("geely-starray-card-editor", GeelyStarrayCardEditorComponent);
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "geely-starray-card",
  name: "Geely Starray Card",
  description: "A premium Lovelace card for the 2026 Geely Starray EM-i (White) Super Hybrid / PHEV / EV with charging & vehicle telemetry.",
  preview: true,
});
window.customCards.push({
  type: "geely-car-card",
  name: "Geely Car Card",
  description: "A Lovelace card for Geely vehicles (Starray EM-i, Boyue L, Galaxy L7, EX5).",
  preview: false,
});

console.info(
  "%c GEELY-STARRAY-CARD %c v1.0.5 ",
  "color: #0b0f14; background: #00e5ff; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 4px;",
  "color: #00e5ff; background: #121820; font-weight: 700; border-radius: 0 3px 3px 0; padding: 2px 4px;"
);

export { GeelyStarrayCardComponent as GeelyStarrayCard, GeelyStarrayCardEditorComponent as GeelyStarrayCardEditor };
