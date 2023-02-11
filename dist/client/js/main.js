/*! For license information please see main.js.LICENSE.txt */
    <style>
      .symbols__symbol-selected {
        border: 1px solid ${this.options.selectColor};
      }
      .symbols__symbol {
        position: relative;
      }
      .symbols__num {
        font-size: xx-small;
      }
      .symbols__empty {
        padding: 10px;
        text-align: center;
        width: 100%;
      }
      .symbols__remove {
        position: absolute;
        top: 0; right: 0;
        width: 20px;
        line-height: 1;
        cursor: pointer;
      }
    </style>
    <main class="symbols__list" @dragend=${t=>this.onDrop(t)}>
      <div class="gjs-blocks-c">
      ${t.map((t=>W`
          <div
            class="gjs-block gjs-one-bg gjs-four-color-h symbols__symbol
              ${t.get("instances").has(e?.cid)?"symbols__symbol-selected":""}
              fa ${t.attributes.icon}
            "
            title="" draggable="true"
            symbol-id=${t.cid}>
            <div class="symbols__remove" @click=${t=>this.onRemove(t)}>
              <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
            </div>
            <div class="gjs-block-label">
              ${t.attributes.label}
              <div class="symbols__num">
                ${t.get("instances").size} instances
              </div>
            </div>
          </div>
         `))}
       ${t.length?"":W`<div class="symbols__empty">
        ${this.options.emptyText}
       </div>`}
       </div>
     </main>
   `,this.el)}onDrop(t){const e=t.target.getAttribute("symbol-id");if(e){const t=this.editor.Symbols.get(e);t?this.editor.runCommand("symbols:create",{symbol:t,pos:this.lastPos,target:this.lastTarget}):console.error(`Could not create an instance of symbol ${e}: symbol not found`)}}onRemove(t){const e=function(t,e){let n=t;for(;n&&!n.getAttribute("symbol-id");)n=n.parentElement;return n}(t.target)?.getAttribute("symbol-id");e?this.editor.runCommand("symbols:remove",{symbolId:e}):console.error("not a symbol",e)}},pt="symbols:add",ft="symbols:remove",dt="symbols:unlink",ht="symbols:create";function gt({editor:t,options:e}){t.Commands.add(pt,vt),t.Commands.add(ft,mt),t.Commands.add(dt,yt),t.Commands.add(ht,bt)}function vt(t,e,{label:n,icon:r,component:o=t.getSelected()}){if(o){const e=t.Symbols.add(function(t,e){const n=e.symbolId??(0,b.uniqueId)();!function(t,{icon:e,label:n,symbolId:r}){if(t.has("symbolId"))throw new Error("Could not init Symbol model: the model has already been init");t.set("symbolId",r),t.set("icon",`<span class="fa ${e}"></span>`);const o=t.get("toolbar");o.find((t=>!!t.isSymbol))||o.push({attributes:{class:"fa fa-ban on fa-diamond",title:n},command:"do:nothing",isSymbol:!0}),d(t).forEach((t=>x(t)))}(t,{...e,symbolId:n});const r=new w({...e,id:n,model:t.clone()});return r.addInstance(t),r}(o,{label:n,icon:r}));return f(t),e}throw new Error("Can not create the symbol: missing param component")}function mt(t,e,{symbolId:n}){if(n){if(t.Symbols.has(n)){const e=t.Symbols.remove(n);return e.unlinkAll(),f(t),e}throw new Error("Could not remove symbol: symbol not found")}throw new Error("Could not remove symbol: missing param symbolId")}function yt(t,e,{component:n}){if(!n)throw new Error("Can not unlink the component: missing param component");{const e=t.Symbols.get(_(n));e?(e.unlink(n),f(t)):console.warn("Can not unlink component",n,"Symbol not found")}}function bt(t,e,{symbol:n,pos:r,target:o}){if(r=r||{},n&&r&&o){const e=o?o.getAttribute("id"):void 0,i=t.Components.allById()[e],[s]=i.append([n.createInstance()],{at:r.index});return s}throw new Error("Can not create the symbol: missing param symbol, pos or target")}const wt=pt,_t=(t,e={})=>{const n={appendTo:"#symbols",selectColor:"#EEE",emptyText:"No symbol yet.",...e};((t,e={})=>{t.on("storage:start:store",(e=>{e.symbols=t.Symbols.toJSON()})),t.on("storage:end:load",(e=>{e.symbols&&(t.Symbols.reset(),t.Symbols.set(e.symbols),t.Symbols.updateComponents(function(t){const e=[];return t.Pages.getAll().forEach((t=>{t.getMainComponent().onAll((t=>e.push(t)))})),e}(t)))}))})(t,e),t.Symbols=new S([],{options:n,editor:t}),t.on("load",((...e)=>{new ut(t.Symbols,{options:n,editor:t}),new gt({options:n,editor:t})}))},xt=t=>(...e)=>({_$litDirective$:t,values:e});class Ct{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:St}=at,Ot=t=>void 0===t.strings,Tt={},kt=xt(class extends Ct{constructor(t){if(super(t),3!==t.type&&1!==t.type&&4!==t.type)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ot(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===q||e===G)return e;const n=t.element,r=t.name;if(3===t.type){if(e===n[r])return q}else if(4===t.type){if(!!e===n.hasAttribute(r))return q}else if(1===t.type&&n.getAttribute(r)===e+"")return q;return((t,e=Tt)=>{t._$AH=e})(t),e}});function*Et(t,e){if(void 0!==t){let n=0;for(const r of t)yield e(r,n++)}}const At=xt(class extends Ct{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,n)=>{const r=t[n];return null==r?e:e+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:n}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?n.removeProperty(t):n[t]="")}));for(const t in e){const r=e[t];null!=r&&(this.vt.add(t),t.includes("-")?n.setProperty(t,r):n[t]=r)}return q}}),Pt=(t,e)=>{var n,r;const o=t._$AN;if(void 0===o)return!1;for(const t of o)null===(r=(n=t)._$AO)||void 0===r||r.call(n,e,!1),Pt(t,e);return!0},jt=t=>{let e,n;do{if(void 0===(e=t._$AM))break;n=e._$AN,n.delete(t),t=e}while(0===(null==n?void 0:n.size))},Mt=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Dt(e)}};function Lt(t){void 0!==this._$AN?(jt(this),this._$AM=t,Mt(this)):this._$AM=t}function Nt(t,e=!1,n=0){const r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(r))for(let t=n;t<r.length;t++)Pt(r[t],!1),jt(r[t]);else null!=r&&(Pt(r,!1),jt(r));else Pt(this,t)}const Dt=t=>{var e,n,r,o;2==t.type&&(null!==(e=(r=t)._$AP)&&void 0!==e||(r._$AP=Nt),null!==(n=(o=t)._$AQ)&&void 0!==n||(o._$AQ=Lt))};class It extends Ct{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),Mt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,r;t!==this.isConnected&&(this.isConnected=t,t?null===(n=this.reconnected)||void 0===n||n.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),e&&(Pt(this,t),jt(this))}setValue(t){if(Ot(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const Ft=()=>new Ht;class Ht{}const $t=new WeakMap,Rt=xt(class extends It{render(t){return G}update(t,[e]){var n;const r=e!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.dt=null===(n=t.options)||void 0===n?void 0:n.host,this.rt(this.ct=t.element)),G}rt(t){var e;if("function"==typeof this.Y){const n=null!==(e=this.dt)&&void 0!==e?e:globalThis;let r=$t.get(n);void 0===r&&(r=new WeakMap,$t.set(n,r)),void 0!==r.get(this.Y)&&this.Y.call(this.dt,void 0),r.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}get lt(){var t,e,n;return"function"==typeof this.Y?null===(e=$t.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(n=this.Y)||void 0===n?void 0:n.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Vt=document.createElement("div");let Bt;const zt="open-fonts",Ut="silex-loaded-fonts-list";let Wt,qt;try{Wt=JSON.parse(localStorage.getItem(Ut))}catch(E){console.error("Could not get fonts from local storage:",E)}const Gt=Ft(),Kt=Ft();function Yt(t,e,n){const r=Gt.value,o=n.filter((t=>function(t,e){const n=t.toLowerCase();let r=-1;e=e.toLowerCase().split();for(let t in e)if(!~(r=n.indexOf(t,r+1)))return!1;return!0}(t.family,r?.value||"")));r?.focus(),ct(W`
    <form class="silex-form grapesjs-fonts">
      <div class="silex-form__group">
        <div class="silex-bar">
          <input
            style=${At({width:"100%"})}
            placeholder="Search fonts..."
            type="text"
            ${Rt(Gt)}
            @keydown=${()=>{setTimeout((()=>Yt(t,e,n)))}}/>
          <select
            style=${At({width:"150px"})}
            ${Rt(Kt)}
          >
            ${Et(o,(t=>W`
              <option value=${t.family}>${t.family}</option>
            `))}
          </select>
          <button class="silex-button"
            ?disabled=${!Kt.value||0===o.length}
            type="button" @click=${()=>{!function(t,e,n,r){const o=r.family,i=`"${r.family}", ${r.category}`;n.push({name:o,value:i,variants:[]})}(0,0,qt,o[Kt.value.selectedIndex]),Yt(t,e,n)}}>
            Add&nbsp;to&nbsp;website
          </button>
        </div>
      </div>
      <hr/>
      <div
        class="silex-form__element">
        <h2>Installed fonts</h2>
        <ol class="silex-list">
        ${Et(qt,(r=>{return W`
          <li>
            <div class="silex-list__item__header">
              <h4>${r.name}</h4>
            </div>
            <div class="silex-list__item__body">
              <fieldset class="silex-group--simple full-width">
                <legend>CSS rules</legend>
                <input
                  class="full-width"
                  type="text"
                  name="name"
                  .value=${kt(r.value)}
                  @change=${o=>{var i,s;i=r,s=o.target.value,i.value=s,Yt(t,e,n)}}
                />
              </fieldset>
              <fieldset class="silex-group--simple full-width">
                <legend>Variants</legend>
                ${Et((o=r,n.find((t=>o.name===t.family)))?.variants.filter((t=>""===t.replace(/[a-z]/g,""))),(o=>W`
                  <div>
                    <input
                      id=${r.name+o}
                      type="checkbox"
                      value=${o}
                      ?checked=${r.variants?.includes(o)}
                      @change=${i=>{!function(t,e,n,r,o){const i=n.variants?.includes(r);i&&!o?n.variants=n.variants.filter((t=>t!==r)):!i&&o&&n.variants.push(r)}(0,0,r,o,i.target.checked),Yt(t,e,n)}}
                    /><label for=${r.name+o}>${o}</label>
                  </div>
                `))}
              </fieldset>
            </div>
            <div class="silex-list__item__footer">
              <button class="silex-button" type="button" @click=${()=>{!function(t,e,n){const r=e.findIndex((t=>t===n));e.splice(r,1)}(0,qt,r),Yt(t,e,n)}}>Remove</button>
            </div>
          </li>
        `;var o}))}
        </ol>
      </div>
      <footer>
        <input class="silex-button" type="button" @click=${()=>t.stopCommand(zt)} value="Cancel">
        <input class="silex-button" type="submit" value="Ok">
      </footer>
    </form>
  `,Vt)}function Xt(t,e,n,r){t.head.querySelector(`[${e}]`)||Jt(t,e,n,r)}function Jt(t,e,n,r){const o=t.createElement(n);o.setAttribute(e,""),Object.keys(r).forEach((t=>o.setAttribute(t,r[t]))),t.head.appendChild(o)}const Zt="data-silex-google-apis",Qt="data-silex-gstatic",te="data-silex-gstatic";function ee(t,e){const n=t.Canvas.getDocument();Xt(n,Zt,"link",{href:"https://fonts.googleapis.com",rel:"preconnect"}),Xt(n,Qt,"link",{href:"https://fonts.gstatic.com",rel:"preconnect",crossorigin:""}),function(t,e){Array.from(t.head.querySelector(`[${e}]`)).forEach((t=>t.remove()))}(n,te),e.forEach((t=>{const e=(t.variants.length?":":"")+t.variants.map((t=>t.replace(/\d+/g,""))).filter((t=>!!t)).join(",");Jt(n,te,"link",{href:`https://fonts.googleapis.com/css?family=${t.name.replace(/ /g,"+")}${e}&display=swap`,rel:"stylesheet"})}))}function ne(t,e){const n=t.StyleManager;n.getProperty("typography","font-family").setOptions(e),n.render()}const re=(t,e)=>{if(!e.api_key)throw new Error("You must provide Google font api key, see https://developers.google.com/fonts/docs/developer_api#APIKey");t.Commands.add(zt,{run:(n,r)=>(Bt=t.Modal.open({title:"Fonts",content:"",attributes:{class:"fonts-dialog"}}).onceClose((()=>{t.stopCommand(zt)})),Bt.setContent(Vt),async function(t){qt=structuredClone(t.getModel().get("fonts")||[])}(t),Yt(t,e,[]),async function(t){return Wt=Wt??(await(await fetch(t)).json())?.items,localStorage.setItem(Ut,JSON.stringify(Wt)),await async function(t=0){return new Promise((e=>setTimeout((()=>e()),t)))}(),Wt}("https://www.googleapis.com/webfonts/v1/webfonts?key="+e.api_key).then((n=>{Yt(t,e,n);const r=Vt.querySelector("form");r.onsubmit=e=>{e.preventDefault(),function(t){const e=t.getModel();e.set("fonts",qt),ee(t,qt),ne(t,qt),e.set("changesCount",t.getDirtyCount()+1)}(t),t.stopCommand(zt)},r.querySelector("input")?.focus()})),Bt),stop:()=>{Bt.close()}}),t.on("storage:start:store",(e=>{e.fonts=t.getModel().get("fonts")})),t.on("storage:end:load",(e=>{const n=e.fonts||[];t.getModel().set("fonts",n),setTimeout((()=>{ee(t,n),ne(t,n)}))}))},oe=zt;var ie=n(531),se=n.n(ie);const ae="symbol-prompt-add",le=ie.plugins.add(name,((t,e)=>{t.Commands.add(ae,{run:(e,n)=>{const r=prompt("Label",function(e){let n=1;for(;t.Symbols.find((t=>t.get("label")===e+n));)n++;return e+n}("Symbol ")),o=prompt("Icon","fa-list");t.runCommand(wt,{label:r,icon:o})}})}));let ce;const ue="pages:add";function pe(t,e){t.Pages.select(e)}const fe=ie.plugins.add("page-panel",((t,e)=>{const n=document.createElement("div");n.classList.add("pages__wrapper");const r=()=>ct(function(t,e){const n=t.Pages.getAll(),r=t.Pages.getSelected(),o=e=>{const n=e.target.hasAttribute("data-page-id")?e.target:e.target.parentNode;return e.stopPropagation(),t.Pages.get(n.getAttribute("data-page-id"))};return W`<section class="pages">
    <main class="pages__main ${1===n.length?"pages__single-page":""}">
      <div class="pages__list">
        ${n.map((n=>{const i=n.getName()||n.attributes.type;return W`
           <div class="pages__page ${r===n?"pages__page-selected":""}" data-page-id=${n.id} @click=${e=>pe(t,o(e))}>
             <div class="pages__page-name">
               ${i}
             </div>
             <i class="pages__icon pages__remove-btn fa fa-trash" @click=${e=>function(t,e){if(1===t.Pages.getAll().length)console.error("can not delete the only page");else{const n="main"===e.get("type"),r=t.Pages.getSelected()===e;t.Pages.remove(e.id);const o=t.Pages.getAll()[0];n&&o.set("type","main"),r&&pe(t,o)}}(t,o(e))}></i>
             <i class="pages__icon fa fa-cog" @click=${n=>function(t,e,n){t.runCommand(e.cmdOpenSettings,{page:n})}(t,e,o(n))}></i>
           </div>
          </div>
          `}))}
      </div>
      ${n.length?"":W`<div class="flex-row">
        No page yet.
      </div>
    `}
    </main></section>`}(t,e),n);t.on("page",(()=>{r()})),t.on("load",(()=>{ce=!1,document.querySelector(e.appendTo).appendChild(n),r(),t.Commands.add(ue,(()=>function(t,e){const n=t.Pages.getAll();let r=1;const o=e.newPageName||"New page";let i=o;for(;n.find((t=>t.getName()===i));)i=`${o} ${r++}`;const s=t.Pages.add({name:i});t.runCommand(e.cmdOpenNewPageDialog,{page:s})}(t,e)))}))})),de=document.createElement("div");let he;const ge="new-page-dialog",ve=ie.plugins.add("new-page-dialog",((t,e)=>{t.Commands.add(ge,{run:(e,n,{page:r})=>{var o;he=t.Modal.open({title:"New Page",content:"",attributes:{class:"new-page-dialog"}}).onceClose((()=>{t.stopCommand(ge)})),function(t,e,n){ct(W`
    <form class="silex-form">
      <label class="silex-form__element">
        <h3>Name</h3>
        <input type="text" name="name" .value=${kt(n.getName()||"")}/>
      </label>
      <footer>
        <input class="silex-button" type="button" @click=${e=>function(t,e){t.Pages.select(e),t.runCommand("gjs-open-import-webpage")}(t,n)} value="Import from website">
        <input class="silex-button" type="button" @click=${e=>t.stopCommand(ge)} value="Cancel">
        <input class="silex-button" type="submit" value="Ok">
      </footer>
    </form>
  `,de)}(t,0,r),he.setContent(de);const i=de.querySelector("form");return i.onsubmit=e=>{e.preventDefault(),function(t,e,n){const r=de.querySelector("form"),o=new FormData(r),i=Array.from(o).reduce(((t,[e,n])=>(t[e]=n,t)),{});n.set(i),t.getModel().set("changesCount",t.getDirtyCount()+1)}(t,0,r),t.stopCommand(ge)},null===(o=i.querySelector("input"))||void 0===o||o.focus(),he},stop:()=>{he.close()}})})),me=ie.plugins.add("project-bar",((t,e)=>{const n=t.Panels.addPanel({id:"project-bar-container",visible:!1});function r(){const e=n.view.el,r=t.Canvas.getFrameEl();r.classList.remove("enable-squeeze"),setTimeout((()=>{var t,n;const o=null===(t=r.getClientRects()[0])||void 0===t?void 0:t.left,i=null===(n=e.getClientRects()[0])||void 0===n?void 0:n.right;o<i||!i?r.classList.add("enable-squeeze"):r.classList.remove("enable-squeeze")}),400)}t.Panels.addPanel({id:"project-bar-panel",buttons:e.panels,visible:!0}),e.panels.map((e=>{var r;const o=document.createElement("div");e.attributes.containerClassName&&(o.classList.add("project-bar__panel",e.attributes.containerClassName,"gjs-hidden"),e.attributes.title&&ct(W`
          <header class="project-bar__panel-header">
            <h3 class="project-bar__panel-header-title">${e.attributes.title}</h3>
            ${null===(r=e.buttons)||void 0===r?void 0:r.map((e=>W`
                <div
                  class="project-bar__panel-header-button ${e.className}"
                  @click=${n=>t.runCommand(e.command)}
                ><span>${e.text}</span></div>
              `))}
          </header>
        `,o),document.body.appendChild(o),t.on("load",(()=>{n.view.el.appendChild(o)}))),t.Commands.add(e.command,{run(){e.link&&window.open(e.link),e.attributes.containerClassName&&(n.set("visible",!0),o.classList.remove("gjs-hidden"),t.Canvas.getFrameEl().classList.add("silex-squeeze-left"))},stop(){e.attributes.containerClassName&&(n.set("visible",!1),o.classList.add("gjs-hidden"),t.Canvas.getFrameEl().classList.remove("silex-squeeze-left"))}})})),t.on("load",(()=>{r()})),t.on("device:select",(t=>{r()}))})),ye=document.createElement("div");let be;const we="open-settings",_e=ie.plugins.add("settings-dialog",((t,e)=>{t.Commands.add(we,{run:(e,n,{page:r})=>{var o;be=t.Modal.open({title:r?"Page settings":"Site Settings",content:"",attributes:{class:"settings-dialog"}}).onceClose((()=>{t.stopCommand(we)})),function(t,e,n=t.getModel()){const r=n.get("settings")||{};n.set("settings",r),ct(W`
    <p>The page settings will override site settings, <a href="https://github.com/silexlabs/Silex/wiki/Settings" target="_blank">more info about settings here</a>.</p>
    <form class="silex-form">
      <h2>General settings</h2>
      <div class="silex-form__group col2">
        <label class="silex-form__element">
          <h3>${n.getHtml?"Site name":"Page name"}</h3>
          <p>${n.getHtml?"The project name in the editor, for you and your team.":"Label of the page in the editor, and file name of the HTML page."}</p>
          <input type="text" name="name" .value=${kt(n.get("name")||"")}/>
        </label>
        <label class="silex-form__element">
          <h3>Website language</h3>
          <p>This is the default language code for this website. Example: en, fr, es...</p>
          <input type="text" name="lang" .value=${kt(r.lang||"")}/>
        </label>
        <label class="silex-form__element">
          <h3>Title</h3>
          <p>Title of the browser window, and title in the search engines results. It is used by search engines to find out what your site is talking about. The title should be a maximum of 70 characters long, including spaces.</p>
          <input type="text" name="title" .value=${kt(r.title||"")}/>
        </label>
        <label class="silex-form__element">
          <h3>Description</h3>
          <p>Description displayed by the search engines in search results. It is used by search engines to find out what your site is talking about. It is best to keep meta descriptions between 150 and 160 characters.</p>
          <input type="text" name="description" .value=${kt(r.description||"")}/>
        </label>
        <label class="silex-form__element">
          <h3>Favicon</h3>
          <p>Small image displayed in the browser's address bar and in tabs. The recommended size is 16×16 or 32×32 pixels. This can be a URL or a relative path.</p>
          <input type="text" name="favicon" .value=${kt(r.favicon||"")}/>
        </label>
      </div>
      <h2>Social networks sharing</h2>
      <div>
        <p>Once your website is live, you can use these tools to test sharing:&nbsp;<a target="_blank" href="https://developers.facebook.com/tools/debug/">Facebook</a>,
        <a target="_blank" href="https://cards-dev.twitter.com/validator">Twitter</a>,
        <a target="_blank" href="https://www.linkedin.com/post-inspector/inspect/">Linkedin</a></p>
      </div>
      <div class="silex-form__group col2">
        <label class="silex-form__element">
          <h3>Title</h3>
          <p>The title of your website displayed when a user shares your website on a social network.
        Do not include any branding in this title, just eye-catching phrase, e.g. "Learn everything about fishing".
        Title should be between 60 and 90 characters long.</p>
          <input type="text" name="og:title" .value=${kt(r["og:title"]||"")}/>
        </label>
        <label class="silex-form__element">
          <h3>Description</h3>
          <p>Description displayed when a user shares your website on a social network. Make it catchy, and invite readers to visit your website too, e.g. "Sam's website about fishing, check it out!" Title should be between 60 and 90 characters long.</p>
          <input type="text" name="og:description" .value=${kt(r["og:description"]||"")}/>
        </label>
        <label class="silex-form__element">
          <h3>Image</h3>
          <p>Thumbnail image which is displayed when your website is shared on a social network. The optimal size is 1200×627 pixels. At this size, your thumbnail will be big and stand out from the crowd. But do not exceed the 5MB size limit. If you use an image that is smaller than 400 pixels x 209 pixels, it will render as a much smaller thumbnail.</p>
          <p>Please enter the full URL here, e.g. "http://mysite.com/path/to/image.jpg"</p>
          <input type="text" name="og:image" .value=${kt(r["og:image"]||"")}/>
        </label>
      </div>
      <h2>Code</h2>
      <div class="silex-form__group">
        <label class="silex-form__element">
          <h3>HTML head</h3>
          <p>HTML code which will be inserted in the HEAD tag.</p>
          <textarea name="head" .value=${kt(r.head||"")}></textarea>
        </label>
      </div>
      <footer>
        <input class="silex-button" type="button" @click=${e=>t.stopCommand(we)} value="Cancel">
        <input class="silex-button" type="submit" value="Ok">
      </footer>
    </form>
  `,ye)}(t,0,r),be.setContent(ye);const i=ye.querySelector("form");return i.onsubmit=e=>{e.preventDefault(),function(t,e,n=t.getModel()){const r=ye.querySelector("form"),o=new FormData(r),i=Array.from(o).reduce(((t,[e,n])=>(t[e]=n,t)),{}),{name:s,...a}=i;n.set({settings:a,name:s}),t.getModel().set("changesCount",t.getDirtyCount()+1)}(t,0,r),t.stopCommand(we)},null===(o=i.querySelector("input"))||void 0===o||o.focus(),be},stop:()=>{be.close()}}),t.on("storage:start:store",(e=>{e.settings=t.getModel().get("settings"),e.name=t.getModel().get("name")})),t.on("storage:end:load",(e=>{t.getModel().set("settings",e.settings||{}),t.getModel().set("name",e.name)}))})),xe="silex-container",Ce="silex-section",Se="silex-section-background",Oe=ie.plugins.add("blocks",((t,e)=>{const n=[Ce,Se,xe].map((t=>"."+t));t.on("selector:add",(t=>n.indexOf(t.getFullName())>=0&&t.set("private",1))),[{id:"container",def:{label:"Container",category:"Basics",attributes:{class:"container-png"},content:{type:"container",style:{"min-height":"100px"}}}}].forEach((e=>t.BlockManager.add(e.id,e.def)))})),Te=["DIV","P","H1","H2","H3","H4","H5","H6","SPAN","MAIN","ASIDE","SECTION","ADDRESS","ARTICLE","NAV","HEADER","FOOTER","DETAILS","SUMMARY","PRE","BLOCKQUOTE"],ke=se().plugins.add("semantic",((t,e)=>{function n(t,e){const r=Te.includes(e.toUpperCase())?Te:Te.concat(e.toUpperCase());ct(W`
      <label for="semantic__select" class="gjs-one-bg silex-label">Type</label>
      <select id="semantic__select" @change=${e=>n(t,e.target.value)}>
        ${Et(r,(t=>W`
          <option value="${t}" ?selected=${e.toUpperCase()===t}>${t}</option>
        `))}
      </select>
    `,t)}function r(e){var r;n(e,(null===(r=t.getSelected())||void 0===r?void 0:r.get("tagName"))||"")}t.DomComponents.getTypes().map((e=>{t.DomComponents.addType(e.id,{model:{defaults:{traits:[...t.DomComponents.getType(e.id).model.prototype.defaults.traits,{label:"Tag name",type:"tag-name"}]}}})})),t.TraitManager.addType("tag-name",{createInput({trait:e}){const n=document.createElement("div");return t.on("page",(()=>r(n))),r(n),n},onEvent({elInput:t,component:e,event:n}){const r=t.querySelector("#semantic__select").value;e.get("tagName").toUpperCase()===r.toUpperCase()||e.set("tagName",r)},onUpdate({elInput:t,component:e}){n(t,e.get("tagName"))}})})),Ee=ie.plugins.add("richText",((t,e)=>{t.RichTextEditor.add("orderedList",{icon:"1.",attributes:{title:"Ordered List"},result:t=>t.exec("insertOrderedList")}),t.RichTextEditor.add("unorderedList",{icon:'<i class="fa fa-list-ul"></i>',attributes:{title:"Unordered List"},result:t=>t.exec("insertUnorderedList")})}));function Ae(t="index"){return`./${function(t="index"){return t.toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}(t)}.html`}const Pe=[{id:"",name:"-"},{id:"url",name:"URL"},{id:"email",name:"Email"},{id:"page",name:"Page"}],je=se().plugins.add("internal-links",((t,e)=>{function n(e){t.Pages.getAll().forEach((t=>{t.getMainComponent().onAll(e)}))}function r(t){switch(t){case"email":return"mailto:";case"page":return Ae();case"url":return"https://"}}function o(e,n=""){const i=function(t){return 0===t.indexOf("mailto:")?"email":0===t.indexOf("./")?"page":t?"url":""}(n),s=function(e,n){switch(e){case"email":const e=n.replace("mailto:","").split("?"),r=e[0],o=(e[1]||"").split("&").reduce(((t,e)=>{const n=e.split("=");return t[n[0]]=n[1],t}),{});return W`<div class="href-next__email-inputs">
            <label for="href-next__email" class="gjs-one-bg silex-label">Email address</label>
            <input class="href-next__email" placeholder="Insert email" type="email" value=${r||""}/>
            <label for="href-next__email-subject" class="gjs-one-bg silex-label">Subject</label>
            <input class="href-next__email-subject" placeholder="Insert subject" value=${o.subject||""}/>
          </div>`;case"page":return W`<div class="href-next__page-inputs">
            <label for="href-next__page" class="gjs-one-bg silex-label">Page name</label>
            <select id="href-next__page" class="href-next__page">
              ${Et(t.Pages.getAll(),(t=>W`<option
                  ?selected=${Ae(t.getName())===n}
                  value=${Ae(t.getName())}>
                    ${t.getName()||"Main"}
                </option>`))}
            </select>
          </div>`;case"url":return W`<div class="href-next__url-inputs">
          <label for="href-next__url" class="gjs-one-bg silex-label">URL</label>
          <input class="href-next__url" placeholder="Insert URL" type="url" value=${n}/>
        </div>`;default:return""}}(i,n);ct(W`
      <label for="href-next__type" class="gjs-one-bg silex-label">Type</label>
      <select id="href-next__type" class="href-next__type" @change=${t=>o(e,r(t.target.value))}>
        ${Et(Pe,(t=>W`
          <option value="${t.id}" ?selected=${i===t.id}>${t.name}</option>
        `))}
      </select>
      ${s}
    `,e)}function i(e){var n;o(e,(null===(n=t.getSelected())||void 0===n?void 0:n.getAttributes().href)||"")}t.on("page",(({event:t,page:r})=>{switch(t){case"change:name":n((t=>{t.getAttributes().href===Ae(r.previous("name"))&&t.setAttributes({href:Ae(r.get("name"))})}));break;case"remove":const t=[];n((e=>{console.log(e.getAttributes().href,Ae(r.previous("name")),r.previous("name")),e.getAttributes().href===Ae(r.previous("name"))&&t.push(e)})),null==e||e.onError(t)}})),t.DomComponents.getTypes().map((e=>{t.DomComponents.addType(e.id,{model:{defaults:{traits:[...t.DomComponents.getType(e.id).model.prototype.defaults.traits.filter((t=>t.name?"href"!==t.name:"href"!==t)),{label:"Link",type:"href-next",name:"href"}]}}})})),t.TraitManager.addType("href-next",{createInput({trait:e}){const n=document.createElement("div");return t.on("page",(()=>i(n))),i(n),n},onEvent({elInput:t,component:e,event:n}){var o,i,s,a,l;let c="";switch(t.querySelector(".href-next__type").value){case"page":c=(null===(o=t.querySelector(".href-next__page"))||void 0===o?void 0:o.value)||r("page");break;case"url":c=(null===(i=t.querySelector(".href-next__url"))||void 0===i?void 0:i.value)||r("url");break;case"email":const e=null===(s=t.querySelector(".href-next__email"))||void 0===s?void 0:s.value,n=null===(a=t.querySelector(".href-next__email-subject"))||void 0===a?void 0:a.value;c=e?`mailto:${e}${n?`?subject=${n}`:""}`:r("email");break;default:c=""}if(e.addAttributes({href:c}),""===c){if("A"===e.get("tagName").toUpperCase()){const t=null!==(l=e.get("originalTagName"))&&void 0!==l?l:"DIV",n="A"===t.toUpperCase()?"SPAN":t;e.set("tagName",n)}}else"A"!==e.get("tagName").toUpperCase()&&(e.set("originalTagName",e.get("tagName")),e.set("tagName","A"))},onUpdate({elInput:t,component:e}){o(t,e.getAttributes().href||"")}})})),Me=[{name:"./grapesjs/storage",value:function(t,e){t.on("storage:start:store",(e=>{e.files=t.Pages.getAll().map((e=>{const n=e.getMainComponent();return{html:t.getHtml({component:n}),css:t.getCss({component:n})}})),console.log("storage:start:store",e)}))}},{name:"./grapesjs/project-bar",value:me},{name:"./grapesjs/settings",value:_e},{name:"@silexlabs/grapesjs-fonts",value:re},{name:"./grapesjs/new-page-dialog",value:ve},{name:"./grapesjs/page-panel",value:fe},{name:"grapesjs-blocks-basic",value:e()},{name:"./grapesjs/blocks",value:Oe},{name:"./grapesjs/semantic",value:ke},{name:"./grapesjs/rich-text",value:Ee},{name:"grapesjs-style-filter",value:i()},{name:"grapesjs-plugin-forms",value:a()},{name:"grapesjs-custom-code",value:c()},{name:"./grapesjs/internal-links",value:je},{name:"@silexlabs/grapesjs-ui-suggest-classes",value:p()},{name:"./grapesjs/symbolDialogs",value:le},{name:"@silexlabs/grapesjs-symbols",value:_t}];Me.filter((t=>!t.value)).forEach((t=>{throw new Error(`Plugin ${t.name} could not be loaded correctly`)}));const Le=new URL(location.href).searchParams.get("projectId"),Ne=`/website/?projectId=${Le}`,De={debug:!1,editor:{container:"#gjs",height:"100%",showOffsets:1,showDevices:1,pageManager:!0,layerManager:{appendTo:".layer-manager-container"},blockManager:{appendTo:".block-manager-container"},assetManager:{upload:`/assets/?projectId=${Le}`},storageManager:{id:"",type:"remote",options:{remote:{urlStore:Ne,urlLoad:Ne}}},plugins:Me.map((t=>t.value)),importWebpage:{modalImportLabel:"",modalImportContent:"Paste a web page HTML code here.",modalImportButton:"Import",modalImportTitle:"Import from website"},pluginsOpts:{[e()]:{blocks:["text","image","video","map"],category:"Containers"},[me]:{panels:[{id:"dash",className:"logo",attributes:{title:"Go to your dashboard"},link:"/",command:"open-dash"},{id:"block-manager-btn",className:"block-manager-btn fa fa-fw fa-plus",attributes:{title:"Blocks",containerClassName:"block-manager-container"},command:"open-blocks"},{id:"symbols-btn",className:"symbols-btn fa fa-fw fa-diamond",attributes:{title:"Symbols",containerClassName:"symbols-list-container"},command:"open-symbols",buttons:[{id:"symbol-create-button",className:"pages__add-page fa fa-plus",label:"Create symbol from selection",command:ae}]},{id:"page-panel-btn",className:"page-panel-btn fa fa-fw fa-file",attributes:{title:"Pages",containerClassName:"page-panel-container"},command:"pages:open-panel",buttons:[{className:"pages__add-page fa fa-file",command:ue,text:"+"}]},{id:"layer-manager-btn",className:"layer-manager-btn fa fa-fw fa-list",attributes:{title:"Layers",containerClassName:"layer-manager-container"},command:"open-layers"},{id:"font-dialog-btn",className:"font-manager-btn fa fa-fw fa-font",attributes:{title:"Fonts"},command:oe},{id:"settings-dialog-btn",className:"page-panel-btn fa fa-fw fa-cog",attributes:{title:"Settings"},command:we}]},[fe]:{cmdOpenNewPageDialog:ge,cmdOpenSettings:we,appendTo:".page-panel-container"},[je]:{onError:t=>console.log("Links errors:",t)},[c()]:{blockLabel:"HTML",blockCustomCode:{category:"Components"}},[_t]:{appendTo:".symbols-list-container"},[re]:{api_key:"AIzaSyAdJTYSLPlKz4w5Iqyy-JAF2o8uQKd1FKc"}}}};let Ie;function Fe(t){if(Ie)throw new Error("Grapesjs editor already created");Ie=se().init(t),["text"].forEach((t=>{var e;return null===(e=Ie.Blocks.get(t))||void 0===e?void 0:e.set("category","Basics")})),["image","video"].forEach((t=>{var e;return null===(e=Ie.Blocks.get(t))||void 0===e?void 0:e.set("category","Media")})),["map"].forEach((t=>{var e;return null===(e=Ie.Blocks.get(t))||void 0===e?void 0:e.set("category","Components")})),Ie.Blocks.render(),Ie.Commands.add("gjs-open-import-webpage",function(t,e){const n=t.getConfig("stylePrefix"),r=t.Modal,o=t.CodeManager.getViewer("CodeMirror").clone(),i=document.createElement("div"),s=e.modalImportLabel,a=e.modalImportContent;let l=o.editor;const c=document.createElement("button");return c.type="button",c.innerHTML=e.modalImportButton,c.className=`${n}btn-prim ${n}btn-import`,c.onclick=e=>{t.setComponents(l.getValue().trim()),r.close()},o.set({codeName:"htmlmixed",theme:"hopscotch",readOnly:0,...e.importViewerOptions}),{run(u){if(!l){const t=document.createElement("textarea");if(s){const t=document.createElement("div");t.className=`${n}import-label`,t.innerHTML=s,i.appendChild(t)}i.appendChild(t),i.appendChild(c),o.init(t),l=o.editor}r.setTitle(e.modalImportTitle),r.setContent(i);const p="function"==typeof a?a(t):a;o.setContent(p||""),r.open().getModel().once("change:open",(()=>t.stopCommand(this.id))),l.refresh()},stop(){r.close()}}}(Ie,t.importWebpage)),Ie.on("load",(()=>{setTimeout((()=>{Ie.Panels.getPanel("views").buttons.remove("open-blocks"),Ie.Panels.getPanel("views").buttons.remove("open-layers"),Ie.Panels.getPanel("views").view.el.firstChild.style.justifyContent="initial",Ie.Panels.getPanel("options").buttons.remove("export-template")})),Ie.StyleManager.addProperty("extra",{extend:"filter"})}))}function He(){return Ie}function $e(t=De){t.debug&&console.warn("Silex starting in debug mode.",{config:t}),Fe(t.editor),window.onload=()=>{document.querySelector(".silex-loader").classList.add("silex-dialog-hide"),document.querySelector("#gjs").classList.remove("silex-dialog-hide")}}})(),silex=r})();