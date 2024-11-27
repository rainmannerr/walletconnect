!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="483c5a79-ca1f-4f5e-a6ac-4891efbe2d6c",e._sentryDebugIdIdentifier="sentry-dbid-483c5a79-ca1f-4f5e-a6ac-4891efbe2d6c")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[597],{63597:function(e,t,n){n.d(t,{SIWEController:function(){return o},appKitAuthConfig:function(){return p},ui:function(){return b},wv:function(){return u.wvx},getDidAddress:function(){return u.NmC},getDidChainId:function(){return u.ZzI}});var i=n(85958),s=n(90076),r=n(88226);let a=(0,s.sj)({status:"uninitialized"}),o={state:a,subscribeKey:(e,t)=>(0,r.VW)(a,e,t),subscribe:e=>(0,s.Ld)(a,()=>e(a)),_getClient(){if(!a._client)throw Error("SIWEController client not set");return a._client},async getNonce(e){let t=this._getClient(),n=await t.getNonce(e);return this.setNonce(n),n},async getSession(){try{let e=this._getClient(),t=await e.getSession();return t?.address&&t?.chainId?this.setSession(t):this.setSession(void 0),t}catch{return}},createMessage(e){let t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){let t=this._getClient();return await t.verifyMessage(e)},async getMessageParams(){let e=this._getClient();return await e.getMessageParams?.()},async signIn(){let e=this._getClient(),t=await e.signIn();return this.setSession(t),t},async signOut(){let e=this._getClient();await e.signOut(),this.setStatus("ready"),this.setSession(void 0),this.setNonce(void 0)},async onSignIn(e){let t=this._getClient();await t.onSignIn?.(e)},onSignOut(){let e=this._getClient();e.onSignOut?.()},setSIWEClient(e){a._client=(0,s.iH)(e),a.status="ready",i.OptionsController.setIsSiweEnabled(e.options.enabled)},setNonce(e){a.nonce=e},setStatus(e){a.status=e,i.Ni.setSiweStatus(e)},setMessage(e){a.message=e},setSession(e){a.session=e,this.setStatus(e?.address&&e?.chainId?"success":"ready")},setIs1ClickAuthenticating(e){i.Ni.setIs1ClickAuthenticating(e)}};var c=n(42613);class l{constructor(e){let{enabled:t=!0,nonceRefetchIntervalMs:n=3e5,sessionRefetchIntervalMs:i=3e5,signOutOnAccountChange:s=!0,signOutOnDisconnect:r=!0,signOutOnNetworkChange:a=!0,...o}=e;this.options={enabled:t,nonceRefetchIntervalMs:n,sessionRefetchIntervalMs:i,signOutOnDisconnect:r,signOutOnAccountChange:s,signOutOnNetworkChange:a},this.methods=o}async getNonce(e){let t=await this.methods.getNonce(e);if(!t)throw Error("siweControllerClient:getNonce - nonce is undefined");return t}async getMessageParams(){return await this.methods.getMessageParams?.()||{}}createMessage(e){let t=this.methods.createMessage(e);if(!t)throw Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){return await this.methods.getSession()}async signIn(){if(!o.state._client)throw Error("SIWE client needs to be initialized before calling signIn");let e=i.Ni.state.address,t=await o.getNonce();if(!e)throw Error("An address is required to create a SIWE message.");let n=i.RY.getNetworkProp("caipNetwork");if(!n?.id)throw Error("A chainId is required to create a SIWE message.");let s=c.p1.caipNetworkIdToNumber(n.id);if(!s)throw Error("A chainId is required to create a SIWE message.");let r=o.state._client?.options.signOutOnNetworkChange;r&&(o.state._client.options.signOutOnNetworkChange=!1),await i.fB.switchActiveNetwork(n),r&&(o.state._client.options.signOutOnNetworkChange=!0);let a=await this.getMessageParams?.(),l=this.methods.createMessage({address:`eip155:${s}:${e}`,chainId:s,nonce:t,version:"1",iat:a?.iat||new Date().toISOString(),...a});"AUTH"===i.MO.getConnectedConnector()&&i.RouterController.pushTransactionStack({view:null,goBack:!1,replace:!0,onCancel(){i.RouterController.replace("ConnectingSiwe")}});let u=i.ConnectionController.state.wcClientId,g=await i.ConnectionController.signMessage(l);if(!await this.methods.verifyMessage({message:l,signature:g,clientId:u}))throw Error("Error verifying SIWE signature");let d=await this.methods.getSession();if(!d)throw Error("Error verifying SIWE signature");return this.methods.onSignIn&&await this.methods.onSignIn(d),i._4.navigateAfterNetworkSwitch(),d}async signOut(){return this.methods.onSignOut?.(),this.methods.signOut()}async onSignIn(e){await this.methods.onSignIn?.(e)}}n(44796);var u=n(80976);let g={...i.ApiController._getApiHeaders(),"x-project-id":"24970167f11c121f6eb40b558edb9691"};async function d(){try{let e=await fetch(`${c.bq.DEV_W3M_API_URL}/auth/v1/nonce`,{method:"GET",headers:g,credentials:"include"});if(!e.ok)return;return await e.json()}catch(e){throw console.error(e),Error("Failed to get nonce",{cause:e})}}async function h(){try{let e=await fetch(`${c.bq.DEV_W3M_API_URL}/auth/v1/me`,{method:"GET",headers:g,credentials:"include"});if(!e.ok)return;return await e.json()}catch(e){throw console.error(e),Error("Failed to get session",{cause:e})}}async function w(e){try{let t=await fetch(`${c.bq.DEV_W3M_API_URL}/auth/v1/authenticate`,{method:"POST",headers:g,body:JSON.stringify(e),credentials:"include"});if(!t.ok)return;return await t.json()}catch(e){throw console.error(e),Error("Failed to authenticate",{cause:e})}}async function f(){try{let e=await fetch(`${c.bq.DEV_W3M_API_URL}/auth/v1/sign-out`,{method:"POST",headers:g,credentials:"include"});return await e.json()}catch(e){throw console.error(e),Error("Failed to sign out",{cause:e})}}let p=new l({signOutOnAccountChange:!0,signOutOnNetworkChange:!0,getMessageParams:async()=>({domain:window.location.host,uri:window.location.origin,statement:"Please sign with your account",iat:new Date().toISOString()}),createMessage:({address:e,...t})=>(0,u.wvx)(t,e),getNonce:async()=>{let{nonce:e}=await d();if(!e)throw Error("Failed to get nonce!");return e},getSession:async()=>{let e=await h();if(!e)return null;let{address:t,chainId:n}=e;return{address:t,chainId:n}},verifyMessage:async({message:e,signature:t,cacao:n,clientId:i})=>{try{let{token:n}=await w({message:e,signature:t,clientId:i});return!!n}catch(e){return!1}},signOut:async()=>{try{return await f(),!0}catch(e){return!1}}});var y=n(68409),S=n(47114),C=(0,S.iv)`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let m=class extends S.oi{constructor(){super(...arguments),this.dappImageUrl=i.OptionsController.state.metadata?.icons,this.walletImageUrl=i.Ni.state.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return(0,S.dy)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};m.styles=C,m=function(e,t,n,i){var s,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a}([(0,y.customElement)("w3m-connecting-siwe")],m);var _=n(73005),E=n(37658),v=function(e,t,n,i){var s,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(a=(r<3?s(a):r>3?s(t,n,a):s(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a};let I=class extends S.oi{constructor(){super(...arguments),this.dappName=i.OptionsController.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return this.onRender(),(0,S.dy)`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}onRender(){o.state.session&&i.IN.close()}async onSign(){this.isSigning=!0,i.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track",properties:{network:i.fB.state.caipNetwork?.id||"",isSmartAccount:i.Ni.state.preferredAccountType===_.y_.ACCOUNT_TYPES.SMART_ACCOUNT}});try{o.setStatus("loading");let e=await o.signIn();return o.setStatus("success"),i.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track",properties:{network:i.fB.state.caipNetwork?.id||"",isSmartAccount:i.Ni.state.preferredAccountType===_.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),e}catch(t){let e=i.Ni.state.preferredAccountType===_.y_.ACCOUNT_TYPES.SMART_ACCOUNT;return e?i.SnackController.showError("This application might not support Smart Accounts"):i.SnackController.showError(t instanceof Error?t.message:"Signature declined"),o.setStatus("error"),i.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track",properties:{network:i.fB.state.caipNetwork?.id||"",isSmartAccount:e}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,i.Ni.state.isConnected?(await i.ConnectionController.disconnect(),i.IN.close()):i.RouterController.push("Connect"),this.isCancelling=!1,i.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track",properties:{network:i.fB.state.caipNetwork?.id||"",isSmartAccount:i.Ni.state.preferredAccountType===_.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};function b(e){return new l(e)}v([(0,E.SB)()],I.prototype,"isSigning",void 0),v([(0,E.SB)()],I.prototype,"isCancelling",void 0),v([(0,y.customElement)("w3m-connecting-siwe-view")],I)}}]);