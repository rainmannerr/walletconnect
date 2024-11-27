!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cb487896-4a55-4e07-ae0a-bc188289a655",e._sentryDebugIdIdentifier="sentry-dbid-cb487896-4a55-4e07-ae0a-bc188289a655")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[870],{79870:function(e,t,i){i.r(t),i.d(t,{W3mModal:function(){return c}});var o=i(85958),n=i(68409),s=i(47114),a=i(37658),r=(0,s.iv)`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,l=function(e,t,i,o){var n,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let d="scroll-lock",c=class extends s.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=o.IN.state.open,this.isSiweEnabled=o.OptionsController.state.isSiweEnabled,this.is1ClickAuthenticating=o.Ni.state.is1ClickAuthenticating,this.connected=o.Ni.state.isConnected,this.loading=o.IN.state.loading,this.shake=o.IN.state.shake,this.initializeTheming(),o.ApiController.prefetch(),this.unsubscribe.push(o.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),o.IN.subscribeKey("shake",e=>this.shake=e),o.IN.subscribeKey("loading",e=>{this.loading=e,this.onNewAddress(o.Ni.state.caipAddress)}),o.Ni.subscribeKey("isConnected",e=>this.connected=e),o.Ni.subscribeKey("caipAddress",e=>this.onNewAddress(e)),o.Ni.subscribeKey("is1ClickAuthenticating",e=>{this.is1ClickAuthenticating=e}),o.OptionsController.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),o.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?(0,s.dy)`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){let e="ConnectingSiwe"===o.RouterController.state.view,t="ApproveTransaction"===o.RouterController.state.view;if(this.isSiweEnabled){let{SIWEController:n}=await i.e(597).then(i.bind(i,63597));"success"!==n.state.status&&(e||t)?o.IN.shake():o.IN.close()}else o.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=o.ThemeController.state,i=n.UiHelperUtil.getColorTheme(t);(0,n.initializeTheming)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),o.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=d,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${d}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){if(!this.connected||this.loading){this.connected||"ConnectingSiwe"!==o.RouterController.state.view||o.RouterController.push("ConnectWallets");return}let t=o.j1.getPlainAddress(e),n=o.j1.getNetworkId(e);if(this.isSiweEnabled&&!this.is1ClickAuthenticating){let{SIWEController:e,appKitAuthConfig:s}=await i.e(597).then(i.bind(i,63597));!e.state._client&&o.OptionsController.state.enableAuth&&e.setSIWEClient(s);let a=await e.getSession()??void 0;if(a?.address&&a?.chainId){let{chainId:i,address:o}=a;if(t&&o.toLowerCase()!==t.toLowerCase()){e.state._client?.options.signOutOnAccountChange&&(await e.signOut(),this.onSiweNavigation());return}n&&i.toString()!==n&&e.state._client?.options.signOutOnNetworkChange&&(await e.signOut(),this.onSiweNavigation())}else this.onSiweNavigation()}}onSiweNavigation(){this.open?o.RouterController.push("ConnectingSiwe"):o.IN.open({view:"ConnectingSiwe"})}};c.styles=r,l([(0,a.SB)()],c.prototype,"open",void 0),l([(0,a.SB)()],c.prototype,"isSiweEnabled",void 0),l([(0,a.SB)()],c.prototype,"is1ClickAuthenticating",void 0),l([(0,a.SB)()],c.prototype,"connected",void 0),l([(0,a.SB)()],c.prototype,"loading",void 0),l([(0,a.SB)()],c.prototype,"shake",void 0),c=l([(0,n.customElement)("w3m-modal")],c)}}]);