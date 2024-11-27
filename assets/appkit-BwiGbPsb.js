import{b as vi,z as n,d as Ze,r as bi,u as Ci,e as xi,B as at,i as h,a as ve,c as g,x as u,f as p,n as c,g as _i,o as Oe,h as Or,j as Mr,k as gt,l as Mi,p as j,s as le,m as Se,q as yr,t as Ve,v as $i,Z as Ui,w as qr}from"./vendor-DTwBOZnz.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2fb5c580-7a21-4c2d-85bd-a93668be7f7a",e._sentryDebugIdIdentifier="sentry-dbid-2fb5c580-7a21-4c2d-85bd-a93668be7f7a")}catch{}})();var fi;typeof window<"u"&&(window.Buffer||(window.Buffer=vi.Buffer),window.global||(window.global=window),window.process||(window.process={}),(fi=window.process)!=null&&fi.env||(window.process={env:{}}));var Di={};const Li=Di.NEXT_PUBLIC_SECURE_SITE_SDK_URL||"https://secure.walletconnect.org/sdk",xe={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@appkit-wallet/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",FRAME_READY:"@w3m-frame/READY",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},ye={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},Z=n.object({message:n.string()});function b(e){return n.literal(xe[e])}n.object({accessList:n.array(n.string()),blockHash:n.string().nullable(),blockNumber:n.string().nullable(),chainId:n.string().or(n.number()),from:n.string(),gas:n.string(),hash:n.string(),input:n.string().nullable(),maxFeePerGas:n.string(),maxPriorityFeePerGas:n.string(),nonce:n.string(),r:n.string(),s:n.string(),to:n.string(),transactionIndex:n.string().nullable(),type:n.string(),v:n.string(),value:n.string()});const Bi=n.object({chainId:n.string().or(n.number())}),ji=n.object({email:n.string().email()}),Fi=n.object({otp:n.string()}),zi=n.object({uri:n.string()}),Wi=n.object({chainId:n.optional(n.string().or(n.number())),preferredAccountType:n.optional(n.string())}),Hi=n.object({provider:n.enum(["google","github","apple","facebook","x","discord"])}),Vi=n.object({email:n.string().email()}),Zi=n.object({otp:n.string()}),Gi=n.object({otp:n.string()}),Yi=n.object({themeMode:n.optional(n.enum(["light","dark"])),themeVariables:n.optional(n.record(n.string(),n.string().or(n.number()))),w3mThemeVariables:n.optional(n.record(n.string(),n.string()))}),Ki=n.object({metadata:n.object({name:n.string(),description:n.string(),url:n.string(),icons:n.array(n.string())}).optional(),sdkVersion:n.string().optional(),sdkType:n.string().optional(),projectId:n.string()}),qi=n.object({type:n.string()}),Qi=n.object({action:n.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),Xi=n.object({url:n.string()}),Ji=n.object({userName:n.string()}),ea=n.object({email:n.string(),address:n.string(),chainId:n.string().or(n.number()),accounts:n.array(n.object({address:n.string(),type:n.enum([ye.ACCOUNT_TYPES.EOA,ye.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:n.string().optional()}),ta=n.object({action:n.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),oa=n.object({email:n.string().email().optional().nullable(),address:n.string(),chainId:n.string().or(n.number()),smartAccountDeployed:n.optional(n.boolean()),accounts:n.array(n.object({address:n.string(),type:n.enum([ye.ACCOUNT_TYPES.EOA,ye.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:n.optional(n.string())}),ra=n.object({uri:n.string()}),ia=n.object({isConnected:n.boolean()}),aa=n.object({chainId:n.string().or(n.number())}),na=n.object({chainId:n.string().or(n.number())}),sa=n.object({newEmail:n.string().email()}),la=n.object({smartAccountEnabledNetworks:n.array(n.number())});n.object({address:n.string(),isDeployed:n.boolean()});const ca=n.object({version:n.string().optional()}),ua=n.object({type:n.string(),address:n.string()}),da=n.any(),pa=n.object({method:n.literal("eth_accounts")}),ha=n.object({method:n.literal("eth_blockNumber")}),ga=n.object({method:n.literal("eth_call"),params:n.array(n.any())}),wa=n.object({method:n.literal("eth_chainId")}),fa=n.object({method:n.literal("eth_estimateGas"),params:n.array(n.any())}),ma=n.object({method:n.literal("eth_feeHistory"),params:n.array(n.any())}),va=n.object({method:n.literal("eth_gasPrice")}),ba=n.object({method:n.literal("eth_getAccount"),params:n.array(n.any())}),Ca=n.object({method:n.literal("eth_getBalance"),params:n.array(n.any())}),xa=n.object({method:n.literal("eth_getBlockByHash"),params:n.array(n.any())}),_a=n.object({method:n.literal("eth_getBlockByNumber"),params:n.array(n.any())}),ya=n.object({method:n.literal("eth_getBlockReceipts"),params:n.array(n.any())}),Ea=n.object({method:n.literal("eth_getBlockTransactionCountByHash"),params:n.array(n.any())}),Sa=n.object({method:n.literal("eth_getBlockTransactionCountByNumber"),params:n.array(n.any())}),Aa=n.object({method:n.literal("eth_getCode"),params:n.array(n.any())}),Ra=n.object({method:n.literal("eth_getFilterChanges"),params:n.array(n.any())}),Ta=n.object({method:n.literal("eth_getFilterLogs"),params:n.array(n.any())}),Ia=n.object({method:n.literal("eth_getLogs"),params:n.array(n.any())}),ka=n.object({method:n.literal("eth_getProof"),params:n.array(n.any())}),Na=n.object({method:n.literal("eth_getStorageAt"),params:n.array(n.any())}),Pa=n.object({method:n.literal("eth_getTransactionByBlockHashAndIndex"),params:n.array(n.any())}),Oa=n.object({method:n.literal("eth_getTransactionByBlockNumberAndIndex"),params:n.array(n.any())}),Ma=n.object({method:n.literal("eth_getTransactionByHash"),params:n.array(n.any())}),$a=n.object({method:n.literal("eth_getTransactionCount"),params:n.array(n.any())}),Ua=n.object({method:n.literal("eth_getTransactionReceipt"),params:n.array(n.any())}),Da=n.object({method:n.literal("eth_getUncleCountByBlockHash"),params:n.array(n.any())}),La=n.object({method:n.literal("eth_getUncleCountByBlockNumber"),params:n.array(n.any())}),Ba=n.object({method:n.literal("eth_maxPriorityFeePerGas")}),ja=n.object({method:n.literal("eth_newBlockFilter")}),Fa=n.object({method:n.literal("eth_newFilter"),params:n.array(n.any())}),za=n.object({method:n.literal("eth_newPendingTransactionFilter")}),Wa=n.object({method:n.literal("eth_sendRawTransaction"),params:n.array(n.any())}),Ha=n.object({method:n.literal("eth_syncing"),params:n.array(n.any())}),Va=n.object({method:n.literal("eth_uninstallFilter"),params:n.array(n.any())}),Qr=n.object({method:n.literal("personal_sign"),params:n.array(n.any())}),Za=n.object({method:n.literal("eth_signTypedData_v4"),params:n.array(n.any())}),Xr=n.object({method:n.literal("eth_sendTransaction"),params:n.array(n.any())}),Ga=n.object({method:n.literal("solana_signMessage"),params:n.object({message:n.string(),pubkey:n.string()})}),Ya=n.object({method:n.literal("solana_signTransaction"),params:n.object({transaction:n.string()})}),Ka=n.object({method:n.literal("solana_signAllTransactions"),params:n.object({transactions:n.array(n.string())})}),qa=n.object({method:n.literal("solana_signAndSendTransaction"),params:n.object({transaction:n.string(),options:n.object({skipPreflight:n.boolean().optional(),preflightCommitment:n.enum(["processed","confirmed","finalized","recent","single","singleGossip","root","max"]).optional(),maxRetries:n.number().optional(),minContextSlot:n.number().optional()}).optional()})}),Qa=n.object({method:n.literal("wallet_sendCalls"),params:n.array(n.object({chainId:n.string().or(n.number()).optional(),from:n.string().optional(),version:n.string().optional(),capabilities:n.any().optional(),calls:n.array(n.object({to:n.string().startsWith("0x"),data:n.string().startsWith("0x").optional(),value:n.string().optional()}))}))}),Xa=n.object({method:n.literal("wallet_getCallsStatus"),params:n.array(n.string())}),Ja=n.object({method:n.literal("wallet_getCapabilities")}),en=n.object({method:n.literal("wallet_grantPermissions"),params:n.array(n.any())}),tn=n.object({method:n.literal("wallet_revokePermissions"),params:n.any()}),Jr=n.object({token:n.string()}),C=n.object({id:n.string().optional()}),no={appEvent:C.extend({type:b("APP_SWITCH_NETWORK"),payload:Bi}).or(C.extend({type:b("APP_CONNECT_EMAIL"),payload:ji})).or(C.extend({type:b("APP_CONNECT_DEVICE")})).or(C.extend({type:b("APP_CONNECT_OTP"),payload:Fi})).or(C.extend({type:b("APP_CONNECT_SOCIAL"),payload:zi})).or(C.extend({type:b("APP_GET_FARCASTER_URI")})).or(C.extend({type:b("APP_CONNECT_FARCASTER")})).or(C.extend({type:b("APP_GET_USER"),payload:n.optional(Wi)})).or(C.extend({type:b("APP_GET_SOCIAL_REDIRECT_URI"),payload:Hi})).or(C.extend({type:b("APP_SIGN_OUT")})).or(C.extend({type:b("APP_IS_CONNECTED"),payload:n.optional(Jr)})).or(C.extend({type:b("APP_GET_CHAIN_ID")})).or(C.extend({type:b("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(C.extend({type:b("APP_INIT_SMART_ACCOUNT")})).or(C.extend({type:b("APP_SET_PREFERRED_ACCOUNT"),payload:qi})).or(C.extend({type:b("APP_RPC_REQUEST"),payload:Qr.or(Xr).or(pa).or(ha).or(ga).or(wa).or(fa).or(ma).or(va).or(ba).or(Ca).or(xa).or(_a).or(ya).or(Ea).or(Sa).or(Aa).or(Ra).or(Ta).or(Ia).or(ka).or(Na).or(Pa).or(Oa).or(Ma).or($a).or(Ua).or(Da).or(La).or(Ba).or(ja).or(Fa).or(za).or(Wa).or(Ha).or(Va).or(Qr).or(Za).or(Xr).or(Ga).or(Ya).or(Ka).or(qa).or(Xa).or(Qa).or(Ja).or(en).or(tn)})).or(C.extend({type:b("APP_UPDATE_EMAIL"),payload:Vi})).or(C.extend({type:b("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:Zi})).or(C.extend({type:b("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:Gi})).or(C.extend({type:b("APP_SYNC_THEME"),payload:Yi})).or(C.extend({type:b("APP_SYNC_DAPP_DATA"),payload:Ki})),frameEvent:C.extend({type:b("FRAME_SWITCH_NETWORK_ERROR"),payload:Z}).or(C.extend({type:b("FRAME_SWITCH_NETWORK_SUCCESS"),payload:na})).or(C.extend({type:b("FRAME_CONNECT_EMAIL_SUCCESS"),payload:Qi})).or(C.extend({type:b("FRAME_CONNECT_EMAIL_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:Xi})).or(C.extend({type:b("FRAME_GET_FARCASTER_URI_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:Ji})).or(C.extend({type:b("FRAME_CONNECT_FARCASTER_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_CONNECT_OTP_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_CONNECT_OTP_SUCCESS")})).or(C.extend({type:b("FRAME_CONNECT_DEVICE_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_CONNECT_DEVICE_SUCCESS")})).or(C.extend({type:b("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:ea})).or(C.extend({type:b("FRAME_CONNECT_SOCIAL_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_GET_USER_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_GET_USER_SUCCESS"),payload:oa})).or(C.extend({type:b("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:ra})).or(C.extend({type:b("FRAME_SIGN_OUT_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_SIGN_OUT_SUCCESS")})).or(C.extend({type:b("FRAME_IS_CONNECTED_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_IS_CONNECTED_SUCCESS"),payload:ia})).or(C.extend({type:b("FRAME_GET_CHAIN_ID_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_GET_CHAIN_ID_SUCCESS"),payload:aa})).or(C.extend({type:b("FRAME_RPC_REQUEST_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_RPC_REQUEST_SUCCESS"),payload:da})).or(C.extend({type:b("FRAME_SESSION_UPDATE"),payload:Jr})).or(C.extend({type:b("FRAME_UPDATE_EMAIL_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_UPDATE_EMAIL_SUCCESS"),payload:ta})).or(C.extend({type:b("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(C.extend({type:b("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:sa})).or(C.extend({type:b("FRAME_SYNC_THEME_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_SYNC_THEME_SUCCESS")})).or(C.extend({type:b("FRAME_SYNC_DAPP_DATA_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(C.extend({type:b("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:la})).or(C.extend({type:b("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:ua})).or(C.extend({type:b("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:Z})).or(C.extend({type:b("FRAME_READY"),payload:ca}))},ei={set(e,t){He.isClient&&localStorage.setItem(`${xe.STORAGE_KEY}${e}`,t)},get(e){return He.isClient?localStorage.getItem(`${xe.STORAGE_KEY}${e}`):null},delete(e,t){He.isClient&&(t?localStorage.removeItem(e):localStorage.removeItem(`${xe.STORAGE_KEY}${e}`))}},ti={address:/^0x(?:[A-Fa-f0-9]{40})$/u,transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[a-fA-F0-9]{62,})$/u},Bo=30*1e3,He={checkIfAllowedToTriggerEmail(){const e=ei.get(xe.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Bo){const o=Math.ceil((Bo-t)/1e3);throw new Error(`Please try again after ${o} seconds`)}}},getTimeToNextEmailLogin(){const e=ei.get(xe.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Bo)return Math.ceil((Bo-t)/1e3)}return 0},checkIfRequestExists(e){return ye.NOT_SAFE_RPC_METHODS.includes(e.method)||ye.SAFE_RPC_METHODS.includes(e.method)},getResponseType(e){return typeof e=="string"&&((e==null?void 0:e.match(ti.transactionHash))||(e==null?void 0:e.match(ti.signedMessage)))?xe.RPC_RESPONSE_TYPE_TX:xe.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsSafe(e){return ye.SAFE_RPC_METHODS.includes(e.method)},isClient:typeof window<"u"};Ze.extend(bi);Ze.extend(Ci);const on={...xi,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};Ze.locale("en-web3-modal",on);const rn={getYear(e=new Date().toISOString()){return Ze(e).year()},getRelativeDateFromNow(e){return Ze(e).locale("en-web3-modal").fromNow(!0)},formatDate(e,t="DD MMM"){return Ze(e).format(t)}},an={caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0},parseEvmChainId(e){return typeof e=="string"?this.caipNetworkIdToNumber(e):e}},D={bigNumber(e){return new at(e)},multiply(e,t){if(e===void 0||t===void 0)return at(0);const o=new at(e),i=new at(t);return o.multipliedBy(i)},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}},nt={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot"},CHAIN_NAME_MAP:{eip155:"Ethereum",solana:"Solana",polkadot:"Polkadot"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"]},nn={URLS:{FAQ:"https://walletconnect.com/faq"}},J={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_CONNECTOR:"@appkit/connected_connector",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit/connected_social_username",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE"},ee={setItem(e,t){jo()&&localStorage.setItem(e,t)},getItem(e){if(jo())return localStorage.getItem(e)||void 0},removeItem(e){jo()&&localStorage.removeItem(e)},clear(){jo()&&localStorage.clear()}};function jo(){return typeof window<"u"&&typeof localStorage<"u"}function Ho(e,t){return t==="light"?{"--w3m-accent":(e==null?void 0:e["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(e==null?void 0:e["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}class Wc{constructor(t,o=!1,i="eip155:1"){if(this.iframe=null,this.rpcUrl=nt.BLOCKCHAIN_API_RPC_URL,this.events={registerFrameEventHandler:(a,r,s)=>{function l({data:f}){var S;if(!((S=f.type)!=null&&S.includes(xe.FRAME_EVENT_KEY)))return;const y=no.frameEvent.parse(f);y.id===a&&(r(y),window.removeEventListener("message",l))}He.isClient&&(window.addEventListener("message",l),s.addEventListener("abort",()=>{window.removeEventListener("message",l)}))},onFrameEvent:a=>{He.isClient&&window.addEventListener("message",({data:r})=>{var l;if(!((l=r.type)!=null&&l.includes(xe.FRAME_EVENT_KEY)))return;const s=no.frameEvent.parse(r);a(s)})},onAppEvent:a=>{He.isClient&&window.addEventListener("message",({data:r})=>{var l;if(!((l=r.type)!=null&&l.includes(xe.APP_EVENT_KEY)))return;const s=no.appEvent.parse(r);a(s)})},postAppEvent:a=>{var r;if(He.isClient){if(!((r=this.iframe)!=null&&r.contentWindow))throw new Error("W3mFrame: iframe is not set");no.appEvent.parse(a),this.iframe.contentWindow.postMessage(a,"*")}},postFrameEvent:a=>{if(He.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");no.frameEvent.parse(a),parent.postMessage(a,"*")}}},this.projectId=t,this.frameLoadPromise=new Promise((a,r)=>{this.frameLoadPromiseResolver={resolve:a,reject:r}}),o&&(this.frameLoadPromise=new Promise((a,r)=>{this.frameLoadPromiseResolver={resolve:a,reject:r}}),He.isClient)){const a=document.createElement("iframe");a.id="w3m-iframe",a.src=`${Li}?projectId=${t}&chainId=${i}`,a.name="w3m-secure-iframe",a.style.position="fixed",a.style.zIndex="999999",a.style.display="none",a.style.animationDelay="0s, 50ms",a.style.borderBottomLeftRadius="clamp(0px, var(--wui-border-radius-l), 44px)",a.style.borderBottomRightRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(a),this.iframe=a,this.iframe.onload=()=>{var r;(r=this.frameLoadPromiseResolver)==null||r.resolve(void 0)},this.iframe.onerror=()=>{var r;(r=this.frameLoadPromiseResolver)==null||r.reject("Unable to load email login dependency")}}}get networks(){const t=["eip155:1","eip155:5","eip155:11155111","eip155:10","eip155:420","eip155:42161","eip155:421613","eip155:137","eip155:80001","eip155:42220","eip155:1313161554","eip155:1313161555","eip155:56","eip155:97","eip155:43114","eip155:43113","eip155:324","eip155:280","eip155:100","eip155:8453","eip155:84531","eip155:84532","eip155:7777777","eip155:999","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"].map(o=>({[o]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=${o}&projectId=${this.projectId}`,chainId:o}}));return Object.assign({},...t)}}Ze.extend(bi);Ze.extend(Ci);const sn={...xi,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};Ze.locale("en-web3-modal",sn);const ln={bigNumber(e){return new at(e)},multiply(e,t){if(e===void 0||t===void 0)return at(0);const o=new at(e),i=new at(t);return o.multipliedBy(i)},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}},cn={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot"},CHAIN_NAME_MAP:{eip155:"Ethereum",solana:"Solana",polkadot:"Polkadot"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"]};function Fo(e,t){return t==="light"?{"--w3m-accent":(e==null?void 0:e["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(e==null?void 0:e["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}let po,lt,ct;function Hc(e,t){po=document.createElement("style"),lt=document.createElement("style"),ct=document.createElement("style"),po.textContent=jt(e).core.cssText,lt.textContent=jt(e).dark.cssText,ct.textContent=jt(e).light.cssText,document.head.appendChild(po),document.head.appendChild(lt),document.head.appendChild(ct),un(t)}function un(e){lt&&ct&&(e==="light"?(lt.removeAttribute("media"),ct.media="enabled"):(ct.removeAttribute("media"),lt.media="enabled"))}function Vc(e){po&&lt&&ct&&(po.textContent=jt(e).core.cssText,lt.textContent=jt(e).dark.cssText,ct.textContent=jt(e).light.cssText)}function jt(e){return{core:h`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
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
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${ve(e!=null&&e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${ve((e==null?void 0:e["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${ve((e==null?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${ve((e==null?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${ve((e==null?void 0:e["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:h`
      :root {
        --w3m-color-mix: ${ve((e==null?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${ve(Fo(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${ve(Fo(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: #667dff;

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:h`
      :root {
        --w3m-color-mix: ${ve((e==null?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${ve(Fo(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${ve(Fo(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: #667dff;

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);
      }
    `}}const m=h`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,A=h`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,tr=h`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;function dn(e,t){const{kind:o,elements:i}=t;return{kind:o,elements:i,finisher(a){customElements.get(e)||customElements.define(e,a)}}}function pn(e,t){return customElements.get(e)||customElements.define(e,t),t}function w(e){return function(o){return typeof o=="function"?pn(e,o):dn(e,o)}}const hn=h`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var gn=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Er=class extends g{render(){return u`<slot></slot>`}};Er.styles=[m,hn];Er=gn([w("wui-card")],Er);const wn=h`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,fn=p`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,mn=p`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,vn=p`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,bn=p`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,Cn=p`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,xn=p`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,_n=p`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,yn=p`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,En=p`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Sn=p`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,An=p`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,Rn=p`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,Tn=p`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,In=p`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="currentColor"/>
</svg>
`,kn=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Nn=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Pn=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,On=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Mn=p`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,$n=p`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,Un=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Dn=p`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Ln=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Bn=p`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,jn=p` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Fn=p`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,zn=p`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,Wn=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Hn=p`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Vn=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Zn=p`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,Gn=p`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Yn=p`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Kn=p`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,qn=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Qn=p`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Xn=p`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,Jn=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,es=p`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,ts=p`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,os=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,rs=p`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,is=p`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,as=p`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ns=p`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,ss=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ls=p` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,cs=p`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,us=p`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,ds=p`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,ps=p`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,hs=p`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,gs=p`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,ws=p`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,fs=p`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,ms=p`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,vs=p`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,bs=p`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Cs=p`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,xs=p`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,_s=p`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ys=p`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Es=p`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,Ss=p`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,As=p`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,Rs=p`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,Ts=p`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,Is=p`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="#202020"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,ks=p`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ns=p`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,Ps=p`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,oi=p`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`,Os=p`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 6.875C9.125 6.57833 9.21298 6.28832 9.3778 6.04165C9.54262 5.79497 9.77689 5.60271 10.051 5.48918C10.3251 5.37565 10.6267 5.34594 10.9176 5.40382C11.2086 5.4617 11.4759 5.60456 11.6857 5.81434C11.8954 6.02412 12.0383 6.29139 12.0962 6.58236C12.1541 6.87334 12.1244 7.17494 12.0108 7.44903C11.8973 7.72311 11.705 7.95738 11.4584 8.1222C11.2117 8.28703 10.9217 8.375 10.625 8.375C10.2272 8.375 9.84565 8.21696 9.56434 7.93566C9.28304 7.65436 9.125 7.27282 9.125 6.875ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11ZM12.125 14.4387V11.375C12.125 10.8777 11.9275 10.4008 11.5758 10.0492C11.2242 9.69754 10.7473 9.5 10.25 9.5C9.98433 9.4996 9.72708 9.59325 9.52383 9.76435C9.32058 9.93544 9.18444 10.173 9.13952 10.4348C9.09461 10.6967 9.14381 10.966 9.27843 11.195C9.41304 11.4241 9.62438 11.5981 9.875 11.6863V14.75C9.875 15.2473 10.0725 15.7242 10.4242 16.0758C10.7758 16.4275 11.2527 16.625 11.75 16.625C12.0157 16.6254 12.2729 16.5318 12.4762 16.3607C12.6794 16.1896 12.8156 15.952 12.8605 15.6902C12.9054 15.4283 12.8562 15.159 12.7216 14.93C12.587 14.7009 12.3756 14.5269 12.125 14.4387Z" fill="currentColor"/>
</svg>`,Ms=p`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0162 11.6312L9.55059 2.13937C9.39228 1.86862 9.16584 1.64405 8.8938 1.48798C8.62176 1.33192 8.3136 1.2498 7.99997 1.2498C7.68634 1.2498 7.37817 1.33192 7.10613 1.48798C6.83409 1.64405 6.60765 1.86862 6.44934 2.13937L0.983716 11.6312C0.830104 11.894 0.749146 12.1928 0.749146 12.4972C0.749146 12.8015 0.830104 13.1004 0.983716 13.3631C1.14027 13.6352 1.3664 13.8608 1.63889 14.0166C1.91139 14.1725 2.22044 14.253 2.53434 14.25H13.4656C13.7793 14.2528 14.0881 14.1721 14.3603 14.0163C14.6326 13.8604 14.8585 13.635 15.015 13.3631C15.1688 13.1005 15.2499 12.8017 15.2502 12.4973C15.2504 12.193 15.1696 11.8941 15.0162 11.6312ZM13.7162 12.6125C13.6908 12.6558 13.6541 12.6914 13.6101 12.7157C13.5661 12.7399 13.5164 12.7517 13.4662 12.75H2.53434C2.48415 12.7517 2.43442 12.7399 2.39042 12.7157C2.34641 12.6914 2.30976 12.6558 2.28434 12.6125C2.26278 12.5774 2.25137 12.5371 2.25137 12.4959C2.25137 12.4548 2.26278 12.4144 2.28434 12.3794L7.74997 2.88749C7.77703 2.84583 7.81408 2.8116 7.85774 2.7879C7.9014 2.7642 7.95029 2.75178 7.99997 2.75178C8.04964 2.75178 8.09854 2.7642 8.1422 2.7879C8.18586 2.8116 8.2229 2.84583 8.24997 2.88749L13.715 12.3794C13.7367 12.4143 13.7483 12.4546 13.7486 12.4958C13.7488 12.5369 13.7376 12.5773 13.7162 12.6125ZM7.24997 8.49999V6.49999C7.24997 6.30108 7.32898 6.11031 7.46964 5.96966C7.61029 5.82901 7.80105 5.74999 7.99997 5.74999C8.19888 5.74999 8.38964 5.82901 8.5303 5.96966C8.67095 6.11031 8.74997 6.30108 8.74997 6.49999V8.49999C8.74997 8.6989 8.67095 8.88967 8.5303 9.03032C8.38964 9.17097 8.19888 9.24999 7.99997 9.24999C7.80105 9.24999 7.61029 9.17097 7.46964 9.03032C7.32898 8.88967 7.24997 8.6989 7.24997 8.49999ZM8.99997 11C8.99997 11.1978 8.94132 11.3911 8.83144 11.5556C8.72155 11.72 8.56538 11.8482 8.38265 11.9239C8.19992 11.9996 7.99886 12.0194 7.80488 11.9808C7.6109 11.9422 7.43271 11.847 7.29286 11.7071C7.15301 11.5672 7.05777 11.3891 7.01918 11.1951C6.9806 11.0011 7.0004 10.8 7.07609 10.6173C7.15177 10.4346 7.27995 10.2784 7.4444 10.1685C7.60885 10.0586 7.80219 9.99999 7.99997 9.99999C8.26518 9.99999 8.51954 10.1053 8.70707 10.2929C8.89461 10.4804 8.99997 10.7348 8.99997 11Z" fill="currentColor"/>
</svg>
`;var or=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};const $s={add:fn,allWallets:mn,arrowBottomCircle:vn,appStore:bn,apple:Cn,arrowBottom:xn,arrowLeft:_n,arrowRight:yn,arrowTop:En,bank:Sn,browser:An,card:Rn,checkmark:In,checkmarkBold:Tn,chevronBottom:kn,chevronLeft:Nn,chevronRight:Pn,chevronTop:On,chromeStore:Mn,clock:$n,close:Un,compass:Ln,coinPlaceholder:Dn,copy:Bn,cursor:jn,cursorTransparent:Fn,desktop:zn,disconnect:Wn,discord:Hn,etherscan:Vn,extension:Zn,externalLink:Gn,facebook:Yn,farcaster:Kn,filters:qn,github:Qn,google:Xn,helpCircle:Jn,image:es,id:Ps,infoCircle:ts,lightbulb:Ns,mail:os,mobile:rs,more:is,networkPlaceholder:as,nftPlaceholder:ns,off:ss,playStore:ls,plus:cs,qrCode:us,recycleHorizontal:ds,refresh:ps,search:hs,send:gs,swapHorizontal:ws,swapHorizontalMedium:ms,swapHorizontalBold:fs,swapHorizontalRoundedBold:vs,swapVertical:bs,telegram:Cs,threeDots:xs,twitch:_s,twitter:oi,twitterIcon:ys,verify:Es,verifyFilled:Ss,wallet:Rs,walletConnect:Ts,walletConnectLightBrown:Is,walletPlaceholder:As,warningCircle:ks,x:oi,info:Os,exclamationTriangle:Ms};let zt=class extends g{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,u`${$s[this.name]}`}};zt.styles=[m,tr,wn];or([c()],zt.prototype,"size",void 0);or([c()],zt.prototype,"name",void 0);or([c()],zt.prototype,"color",void 0);zt=or([w("wui-icon")],zt);const Us=h`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var rr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Wt=class extends g{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,u`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};Wt.styles=[m,tr,Us];rr([c()],Wt.prototype,"src",void 0);rr([c()],Wt.prototype,"alt",void 0);rr([c()],Wt.prototype,"size",void 0);Wt=rr([w("wui-image")],Wt);const Ds=h`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ls=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Sr=class extends g{render(){return u`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Sr.styles=[m,Ds];Sr=Ls([w("wui-loading-hexagon")],Sr);const Bs=h`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var $r=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let ho=class extends g{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,u`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};ho.styles=[m,Bs];$r([c()],ho.prototype,"color",void 0);$r([c()],ho.prototype,"size",void 0);ho=$r([w("wui-loading-spinner")],ho);const js=h`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var yi=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Vo=class extends g{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,i=36-t,a=116+i,r=245+i,s=360+i*1.75;return u`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${a} ${r}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Vo.styles=[m,js];yi([c({type:Number})],Vo.prototype,"radius",void 0);Vo=yi([w("wui-loading-thumbnail")],Vo);const Fs=h`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var ko=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let bt=class extends g{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,u`<slot></slot>`}};bt.styles=[Fs];ko([c()],bt.prototype,"width",void 0);ko([c()],bt.prototype,"height",void 0);ko([c()],bt.prototype,"borderRadius",void 0);ko([c()],bt.prototype,"variant",void 0);bt=ko([w("wui-shimmer")],bt);const zs=h`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var No=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Ct=class extends g{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,u`<slot class=${_i(t)}></slot>`}};Ct.styles=[m,zs];No([c()],Ct.prototype,"variant",void 0);No([c()],Ct.prototype,"color",void 0);No([c()],Ct.prototype,"align",void 0);No([c()],Ct.prototype,"lineClamp",void 0);Ct=No([w("wui-text")],Ct);const Ws=p`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,Hs=p`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,Vs=p`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,Zs=p`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Gs=p`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Ys=p`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Ks=p`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,qs=p`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,Qs=p`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,Xs=p`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,Js=p`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,e1=p`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,t1=p`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,o1=p`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,r1=p`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,i1=p`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,a1=p`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,n1=p`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,s1=p`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,l1=p`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,c1=p`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,u1=p`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,d1=h`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`,p1=p`<svg fill="none" viewBox="0 0 80 80">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M40 80a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M79.5 40a39.5 39.5 0 1 1-79 0 39.5 39.5 0 0 1 79 0Z"
    />
    <path
      fill="#fff"
      d="m62.62 51.54-7.54 7.91a1.75 1.75 0 0 1-1.29.55H18.02a.9.9 0 0 1-.8-.52.84.84 0 0 1 .16-.92l7.55-7.92a1.75 1.75 0 0 1 1.28-.55h35.77a.87.87 0 0 1 .8.52.84.84 0 0 1-.16.93Zm-7.54-15.95a1.75 1.75 0 0 0-1.29-.54H18.02a.89.89 0 0 0-.8.51.84.84 0 0 0 .16.93l7.55 7.92a1.75 1.75 0 0 0 1.28.54h35.77a.89.89 0 0 0 .8-.51.84.84 0 0 0-.16-.93l-7.54-7.92ZM18.02 29.9h35.77a1.79 1.79 0 0 0 1.29-.54l7.54-7.92a.85.85 0 0 0 .16-.93.87.87 0 0 0-.8-.51H26.21a1.79 1.79 0 0 0-1.28.54l-7.55 7.92a.85.85 0 0 0-.16.93.89.89 0 0 0 .8.52Z"
    />
  </g>
  <defs>
    <linearGradient id="b" x1="6.75" x2="80.68" y1="81.91" y2="7.37" gradientUnits="userSpaceOnUse">
      <stop offset=".08" stop-color="#9945FF" />
      <stop offset=".3" stop-color="#8752F3" />
      <stop offset=".5" stop-color="#5497D5" />
      <stop offset=".6" stop-color="#43B4CA" />
      <stop offset=".72" stop-color="#28E0B9" />
      <stop offset=".97" stop-color="#19FB9B" />
    </linearGradient>
    <clipPath id="a"><path fill="#fff" d="M0 0h80v80H0z" /></clipPath>
  </defs>
</svg> `;var Ur=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};const h1={browser:Ws,dao:Hs,defi:Vs,defiAlt:Zs,eth:Gs,layers:Ys,lock:Ks,login:qs,network:Qs,nft:Xs,noun:Js,profile:e1,system:t1,coinbase:o1,meld:u1,onrampCard:n1,moonpay:r1,stripe:i1,paypal:a1,google:s1,pencil:l1,lightbulb:c1,solana:p1};let go=class extends g{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,u`${h1[this.name]}`}};go.styles=[m,d1];Ur([c()],go.prototype,"name",void 0);Ur([c()],go.prototype,"size",void 0);go=Ur([w("wui-visual")],go);const N={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:o,truncate:i}){return e.length<=t+o?e:i==="end"?`${e.substring(0,t)}...`:i==="start"?`...${e.substring(e.length-o)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(o))}`},generateAvatarColors(e){const o=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),i=this.hexToRgb(o),a=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(a==null?void 0:a.replace("px","")),l=`${s}% ${s}% at 65% 40%`,f=[];for(let y=0;y<5;y+=1){const S=this.tintColor(i,.15*y);f.push(`rgb(${S[0]}, ${S[1]}, ${S[2]})`)}return`
    --local-color-1: ${f[0]};
    --local-color-2: ${f[1]};
    --local-color-3: ${f[2]};
    --local-color-4: ${f[3]};
    --local-color-5: ${f[4]};
    --local-radial-circle: ${l}
   `},hexToRgb(e){const t=parseInt(e,16),o=t>>16&255,i=t>>8&255,a=t&255;return[o,i,a]},tintColor(e,t){const[o,i,a]=e,r=Math.round(o+(255-o)*t),s=Math.round(i+(255-i)*t),l=Math.round(a+(255-a)*t);return[r,s,l]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(e){const t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,o){return e.toString().length>=t?Number(e).toFixed(o):e},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}},g1=h`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var ce=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let te=class extends g{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&N.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&N.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&N.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&N.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&N.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&N.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&N.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&N.getSpacingStyles(this.margin,3)};
    `,u`<slot></slot>`}};te.styles=[m,g1];ce([c()],te.prototype,"flexDirection",void 0);ce([c()],te.prototype,"flexWrap",void 0);ce([c()],te.prototype,"flexBasis",void 0);ce([c()],te.prototype,"flexGrow",void 0);ce([c()],te.prototype,"flexShrink",void 0);ce([c()],te.prototype,"alignItems",void 0);ce([c()],te.prototype,"justifyContent",void 0);ce([c()],te.prototype,"columnGap",void 0);ce([c()],te.prototype,"rowGap",void 0);ce([c()],te.prototype,"gap",void 0);ce([c()],te.prototype,"padding",void 0);ce([c()],te.prototype,"margin",void 0);te=ce([w("wui-flex")],te);const w1=h`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Po=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let xt=class extends g{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,u`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",u`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=N.generateAvatarColors(this.address);return this.style.cssText+=`
 ${t}`,null}return this.dataset.variant="default",null}};xt.styles=[m,w1];Po([c()],xt.prototype,"imageSrc",void 0);Po([c()],xt.prototype,"alt",void 0);Po([c()],xt.prototype,"address",void 0);Po([c()],xt.prototype,"size",void 0);xt=Po([w("wui-avatar")],xt);const f1=h`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var tt=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Ae=class extends g{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,o=this.size==="lg",i=this.size==="xl",a=o?"12%":"16%",r=o?"xxs":i?"s":"3xl",s=this.background==="gray",l=this.background==="opaque",f=this.backgroundColor==="accent-100"&&l||this.backgroundColor==="success-100"&&l||this.backgroundColor==="error-100"&&l||this.backgroundColor==="inverse-100"&&l;let y=`var(--wui-color-${this.backgroundColor})`;return f?y=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(y=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${y};
       --local-bg-mix: ${f||s?"100%":a};
       --local-border-radius: var(--wui-border-radius-${r});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,u` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};Ae.styles=[m,A,f1];tt([c()],Ae.prototype,"size",void 0);tt([c()],Ae.prototype,"backgroundColor",void 0);tt([c()],Ae.prototype,"iconColor",void 0);tt([c()],Ae.prototype,"iconSize",void 0);tt([c()],Ae.prototype,"background",void 0);tt([c({type:Boolean})],Ae.prototype,"border",void 0);tt([c()],Ae.prototype,"borderColor",void 0);tt([c()],Ae.prototype,"icon",void 0);Ae=tt([w("wui-icon-box")],Ae);const m1=h`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Le=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let ge=class extends g{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return u`
      <button
        ?disabled=${this.disabled}
        class=${Oe(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?N.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return u` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const t=this.networkSrc?u`<wui-image src=${this.networkSrc}></wui-image>`:u`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return u`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};ge.styles=[m,A,m1];Le([c()],ge.prototype,"networkSrc",void 0);Le([c()],ge.prototype,"avatarSrc",void 0);Le([c()],ge.prototype,"balance",void 0);Le([c({type:Boolean})],ge.prototype,"isUnsupportedChain",void 0);Le([c({type:Boolean})],ge.prototype,"disabled",void 0);Le([c()],ge.prototype,"address",void 0);Le([c()],ge.prototype,"profileName",void 0);Le([c()],ge.prototype,"charsStart",void 0);Le([c()],ge.prototype,"charsEnd",void 0);ge=Le([w("wui-account-button")],ge);const v1=h`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var Tt=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Ge=class extends g{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),u`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?u`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:u`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Ge.styles=[m,v1];Tt([c()],Ge.prototype,"size",void 0);Tt([c()],Ge.prototype,"name",void 0);Tt([c()],Ge.prototype,"imageSrc",void 0);Tt([c()],Ge.prototype,"walletIcon",void 0);Tt([c({type:Boolean})],Ge.prototype,"installed",void 0);Tt([c()],Ge.prototype,"badgeSize",void 0);Ge=Tt([w("wui-wallet-image")],Ge);const b1=h`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Ei=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};const mr=4;let Zo=class extends g{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<mr;return u`${this.walletImages.slice(0,mr).map(({src:o,walletName:i})=>u`
            <wui-wallet-image
              size="inherit"
              imageSrc=${o}
              name=${Oe(i)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(mr-this.walletImages.length)].map(()=>u` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Zo.styles=[m,b1];Ei([c({type:Array})],Zo.prototype,"walletImages",void 0);Zo=Ei([w("wui-all-wallets-image")],Zo);const C1=h`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Be=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};const ri={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},x1={lg:"paragraph-600",md:"small-600"},_1={lg:"md",md:"md"};let we=class extends g{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const t=this.textVariant??x1[this.size];return u`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=_1[this.size],o=this.disabled?ri.disabled:ri[this.variant];return u`<wui-loading-spinner color=${o} size=${t}></wui-loading-spinner>`}return u``}};we.styles=[m,A,C1];Be([c()],we.prototype,"size",void 0);Be([c({type:Boolean})],we.prototype,"disabled",void 0);Be([c({type:Boolean})],we.prototype,"fullWidth",void 0);Be([c({type:Boolean})],we.prototype,"loading",void 0);Be([c()],we.prototype,"variant",void 0);Be([c({type:Boolean})],we.prototype,"hasIconLeft",void 0);Be([c({type:Boolean})],we.prototype,"hasIconRight",void 0);Be([c()],we.prototype,"borderRadius",void 0);Be([c()],we.prototype,"textVariant",void 0);we=Be([w("wui-button")],we);const Si=p`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,y1=h`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }
`;var Ai=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Go=class extends g{constructor(){super(...arguments),this.type="wallet"}render(){return u`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?u` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Si}`:u`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Go.styles=[m,A,y1];Ai([c()],Go.prototype,"type",void 0);Go=Ai([w("wui-card-select-loader")],Go);const E1=p`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,S1=p`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,A1=h`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var It=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Ye=class extends g{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:E1,md:Si,lg:S1},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,u`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:u`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Ye.styles=[m,A1];It([c()],Ye.prototype,"size",void 0);It([c()],Ye.prototype,"name",void 0);It([c({type:Object})],Ye.prototype,"networkImagesBySize",void 0);It([c()],Ye.prototype,"imageSrc",void 0);It([c({type:Boolean})],Ye.prototype,"selected",void 0);It([c({type:Boolean})],Ye.prototype,"round",void 0);Ye=It([w("wui-network-image")],Ye);const R1=h`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var kt=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Ke=class extends g{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return u`
      <button data-selected=${Oe(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?u`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Oe(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:u`
      <wui-wallet-image
        size="md"
        imageSrc=${Oe(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Ke.styles=[m,A,R1];kt([c()],Ke.prototype,"name",void 0);kt([c()],Ke.prototype,"type",void 0);kt([c()],Ke.prototype,"imageSrc",void 0);kt([c({type:Boolean})],Ke.prototype,"disabled",void 0);kt([c({type:Boolean})],Ke.prototype,"selected",void 0);kt([c({type:Boolean})],Ke.prototype,"installed",void 0);Ke=kt([w("wui-card-select")],Ke);const T1=h`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var ot=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Re=class extends g{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const o=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return u`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${o} color="inherit">
          ${this.title?this.title:N.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?u`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?u`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};Re.styles=[m,A,T1];ot([c()],Re.prototype,"variant",void 0);ot([c()],Re.prototype,"imageSrc",void 0);ot([c()],Re.prototype,"imageIcon",void 0);ot([c()],Re.prototype,"imageIconSize",void 0);ot([c({type:Boolean})],Re.prototype,"disabled",void 0);ot([c()],Re.prototype,"icon",void 0);ot([c()],Re.prototype,"href",void 0);ot([c()],Re.prototype,"text",void 0);Re=ot([w("wui-chip")],Re);const I1=h`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Dr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let wo=class extends g{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const t=this.size==="md"?"paragraph-600":"small-600";return u`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?u`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};wo.styles=[m,A,I1];Dr([c()],wo.prototype,"size",void 0);Dr([c({type:Boolean})],wo.prototype,"loading",void 0);wo=Dr([w("wui-connect-button")],wo);const k1=h`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ir=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Ht=class extends g{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return u`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Ht.styles=[m,A,k1];ir([c({type:Boolean})],Ht.prototype,"disabled",void 0);ir([c()],Ht.prototype,"label",void 0);ir([c()],Ht.prototype,"buttonLabel",void 0);Ht=ir([w("wui-cta-button")],Ht);const N1=h`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var P1=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Ar=class extends g{render(){return u`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};Ar.styles=[m,A,N1];Ar=P1([w("wui-details-group")],Ar);const O1=h`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var Ri=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Yo=class extends g{constructor(){super(...arguments),this.name=""}render(){return u`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};Yo.styles=[m,A,O1];Ri([c()],Yo.prototype,"name",void 0);Yo=Ri([w("wui-details-group-item")],Yo);const M1=h`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`;var Lr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let fo=class extends g{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?u`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map(t=>u`
            <wui-list-item
              icon=${t.icon}
              iconSize="sm"
              variant="icon"
              @click=${t.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${t.label}</wui-text>
            </wui-list-item>
          `)}
      </wui-flex>
    `:null}};fo.styles=[m,A,M1];Lr([c({type:Array})],fo.prototype,"actions",void 0);Lr([c({type:Boolean})],fo.prototype,"isOpen",void 0);fo=Lr([w("wui-dropdown-menu")],fo);const $1=h`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var rt=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Te=class extends g{constructor(){super(...arguments),this.inputElementRef=Or(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,i={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return u`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${Mr(this.inputElementRef)}
        class=${_i(i)}
        type=${this.type}
        enterkeyhint=${Oe(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?u`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};Te.styles=[m,A,$1];rt([c()],Te.prototype,"size",void 0);rt([c()],Te.prototype,"icon",void 0);rt([c({type:Boolean})],Te.prototype,"disabled",void 0);rt([c()],Te.prototype,"placeholder",void 0);rt([c()],Te.prototype,"type",void 0);rt([c()],Te.prototype,"keyHint",void 0);rt([c()],Te.prototype,"value",void 0);rt([c()],Te.prototype,"inputRightPadding",void 0);Te=rt([w("wui-input-text")],Te);const U1=h`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var ar=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Vt=class extends g{constructor(){super(...arguments),this.disabled=!1}render(){return u`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?u`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Vt.styles=[m,U1];ar([c()],Vt.prototype,"errorMessage",void 0);ar([c({type:Boolean})],Vt.prototype,"disabled",void 0);ar([c()],Vt.prototype,"value",void 0);Vt=ar([w("wui-email-input")],Vt);const D1=h`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var Oo=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let _t=class extends g{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return u`
      <wui-input-text
        value=${Oe(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return u`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${cn.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?u`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?u`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};_t.styles=[m,D1];Oo([c()],_t.prototype,"errorMessage",void 0);Oo([c({type:Boolean})],_t.prototype,"disabled",void 0);Oo([c()],_t.prototype,"value",void 0);Oo([c({type:Boolean})],_t.prototype,"loading",void 0);_t=Oo([w("wui-ens-input")],_t);const L1=h`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Mo=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let yt=class extends g{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const t=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",o=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${t});
    --local-padding: var(${o});
`,u`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};yt.styles=[m,A,tr,L1];Mo([c()],yt.prototype,"size",void 0);Mo([c({type:Boolean})],yt.prototype,"disabled",void 0);Mo([c()],yt.prototype,"icon",void 0);Mo([c()],yt.prototype,"iconColor",void 0);yt=Mo([w("wui-icon-link")],yt);const B1=h`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var Ti=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Ko=class extends g{constructor(){super(...arguments),this.icon="copy"}render(){return u`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Ko.styles=[m,A,B1];Ti([c()],Ko.prototype,"icon",void 0);Ko=Ti([w("wui-input-element")],Ko);const j1=h`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var Br=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let mo=class extends g{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return u`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};mo.styles=[m,A,j1];Br([c({type:Boolean})],mo.prototype,"disabled",void 0);Br([c({type:String})],mo.prototype,"value",void 0);mo=Br([w("wui-input-numeric")],mo);const F1=h`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var jr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let vo=class extends g{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return u`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};vo.styles=[m,A,F1];jr([c({type:Boolean})],vo.prototype,"disabled",void 0);jr([c()],vo.prototype,"color",void 0);vo=jr([w("wui-link")],vo);const z1=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var je=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let fe=class extends g{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return u`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${Oe(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return u`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return u`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",o=this.iconVariant==="square-blue"?"mdl":"md",i=this.iconSize?this.iconSize:o;return u`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${o}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?u`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:u``}chevronTemplate(){return this.chevron?u`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};fe.styles=[m,A,z1];je([c()],fe.prototype,"icon",void 0);je([c()],fe.prototype,"iconSize",void 0);je([c()],fe.prototype,"variant",void 0);je([c()],fe.prototype,"iconVariant",void 0);je([c({type:Boolean})],fe.prototype,"disabled",void 0);je([c()],fe.prototype,"imageSrc",void 0);je([c()],fe.prototype,"alt",void 0);je([c({type:Boolean})],fe.prototype,"chevron",void 0);je([c({type:Boolean})],fe.prototype,"loading",void 0);fe=je([w("wui-list-item")],fe);var Rr;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(Rr||(Rr={}));const W1=h`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var Nt=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let qe=class extends g{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,o]=this.images,i=(t==null?void 0:t.type)==="NFT",a=o!=null&&o.url?o.type==="NFT":i,r=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=a?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${r};
    --local-right-border-radius: ${s};
    `,u`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,o]=this.images,i=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||o!=null&&o.url)?u`<div class="swap-images-container">
        ${t!=null&&t.url?u`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${o!=null&&o.url?u`<wui-image src=${o.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?u`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:i==="NFT"?u`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:u`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",o;return o=this.getIcon(),this.status&&(t=this.getStatusColor()),o?u`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${o}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};qe.styles=[W1];Nt([c()],qe.prototype,"type",void 0);Nt([c()],qe.prototype,"status",void 0);Nt([c()],qe.prototype,"direction",void 0);Nt([c({type:Boolean})],qe.prototype,"onlyDirectionIcon",void 0);Nt([c({type:Array})],qe.prototype,"images",void 0);Nt([c({type:Object})],qe.prototype,"secondImage",void 0);qe=Nt([w("wui-transaction-visual")],qe);const H1=h`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Ie=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let ne=class extends g{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return u`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Oe(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${Oe(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Rr[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var o;const t=(o=this.descriptions)==null?void 0:o[0];return t?u`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var o;const t=(o=this.descriptions)==null?void 0:o[1];return t?u`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};ne.styles=[m,H1];Ie([c()],ne.prototype,"type",void 0);Ie([c({type:Array})],ne.prototype,"descriptions",void 0);Ie([c()],ne.prototype,"date",void 0);Ie([c({type:Boolean})],ne.prototype,"onlyDirectionIcon",void 0);Ie([c()],ne.prototype,"status",void 0);Ie([c()],ne.prototype,"direction",void 0);Ie([c({type:Array})],ne.prototype,"images",void 0);Ie([c({type:Array})],ne.prototype,"price",void 0);Ie([c({type:Array})],ne.prototype,"amount",void 0);Ie([c({type:Array})],ne.prototype,"symbol",void 0);ne=Ie([w("wui-transaction-list-item")],ne);const V1=h`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var Z1=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Tr=class extends g{render(){return u`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Tr.styles=[m,V1];Tr=Z1([w("wui-transaction-list-item-loader")],Tr);const G1=h`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var Fr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let bo=class extends g{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"mini-700":"micro-700";return u`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};bo.styles=[m,G1];Fr([c()],bo.prototype,"variant",void 0);Fr([c()],bo.prototype,"size",void 0);bo=Fr([w("wui-tag")],bo);const Y1=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var ke=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let se=class extends g{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return u`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?u` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?u` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?u`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?u`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?u`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?u`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};se.styles=[m,A,Y1];ke([c({type:Array})],se.prototype,"walletImages",void 0);ke([c()],se.prototype,"imageSrc",void 0);ke([c()],se.prototype,"name",void 0);ke([c()],se.prototype,"tagLabel",void 0);ke([c()],se.prototype,"tagVariant",void 0);ke([c()],se.prototype,"icon",void 0);ke([c()],se.prototype,"walletIcon",void 0);ke([c({type:Boolean})],se.prototype,"installed",void 0);ke([c({type:Boolean})],se.prototype,"disabled",void 0);ke([c({type:Boolean})],se.prototype,"showAllWallets",void 0);se=ke([w("wui-list-wallet")],se);const K1=h`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Ii=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let qo=class extends g{constructor(){super(...arguments),this.logo="google"}render(){return u`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};qo.styles=[m,K1];Ii([c()],qo.prototype,"logo",void 0);qo=Ii([w("wui-logo")],qo);const q1=h`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var zr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Co=class extends g{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Co.styles=[m,A,q1];zr([c()],Co.prototype,"logo",void 0);zr([c({type:Boolean})],Co.prototype,"disabled",void 0);Co=zr([w("wui-logo-select")],Co);const Q1=h`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var nr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Zt=class extends g{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return u`
      <button data-testid="w3m-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?u`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?u`<wui-image src=${this.imageSrc}></wui-image>`:u`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Zt.styles=[m,A,Q1];nr([c()],Zt.prototype,"imageSrc",void 0);nr([c({type:Boolean})],Zt.prototype,"isUnsupportedChain",void 0);nr([c({type:Boolean})],Zt.prototype,"disabled",void 0);Zt=nr([w("wui-network-button")],Zt);const X1=h`
  :host {
    position: relative;
    display: block;
  }
`;var sr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Gt=class extends g{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(i=>i!==""),this.handleKeyDown=(t,o)=>{const i=t.target,a=this.getInputElement(i),r=["ArrowLeft","ArrowRight","Shift","Delete"];if(!a)return;r.includes(t.key)&&t.preventDefault();const s=a.selectionStart;switch(t.key){case"ArrowLeft":s&&a.setSelectionRange(s+1,s+1),this.focusInputField("prev",o);break;case"ArrowRight":this.focusInputField("next",o);break;case"Shift":this.focusInputField("next",o);break;case"Delete":a.value===""?this.focusInputField("prev",o):this.updateInput(a,o,"");break;case"Backspace":a.value===""?this.focusInputField("prev",o):this.updateInput(a,o,"");break}},this.focusInputField=(t,o)=>{if(t==="next"){const i=o+1;if(!this.shouldInputBeEnabled(i))return;const a=this.numerics[i<this.length?i:o],r=a?this.getInputElement(a):void 0;r&&(r.disabled=!1,r.focus())}if(t==="prev"){const i=o-1,a=this.numerics[i>-1?i:o],r=a?this.getInputElement(a):void 0;r&&r.focus()}}}firstUpdated(){var o,i;this.otp&&(this.values=this.otp.split(""));const t=(o=this.shadowRoot)==null?void 0:o.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),(i=this.numerics[0])==null||i.focus()}render(){return u`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,o)=>u`
            <wui-input-numeric
              @input=${i=>this.handleInput(i,o)}
              @click=${i=>this.selectInput(i)}
              @keydown=${i=>this.handleKeyDown(i,o)}
              .disabled=${!this.shouldInputBeEnabled(o)}
              .value=${this.values[o]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(t,o,i){const a=this.numerics[o],r=t||(a?this.getInputElement(a):void 0);r&&(r.value=i,this.values=this.values.map((s,l)=>l===o?i:s))}selectInput(t){const o=t.target;if(o){const i=this.getInputElement(o);i==null||i.select()}}handleInput(t,o){const i=t.target,a=this.getInputElement(i);if(a){const r=a.value;t.inputType==="insertFromPaste"?this.handlePaste(a,r,o):N.isNumber(r)&&t.data?(this.updateInput(a,o,t.data),this.focusInputField("next",o)):this.updateInput(a,o,"")}this.dispatchInputChangeEvent()}handlePaste(t,o,i){const a=o[0];if(a&&N.isNumber(a)){this.updateInput(t,i,a);const s=o.substring(1);if(i+1<this.length&&s.length){const l=this.numerics[i+1],f=l?this.getInputElement(l):void 0;f&&this.handlePaste(f,s,i+1)}else this.focusInputField("next",i)}else this.updateInput(t,i,"")}getInputElement(t){var o;return(o=t.shadowRoot)!=null&&o.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};Gt.styles=[m,X1];sr([c({type:Number})],Gt.prototype,"length",void 0);sr([c({type:String})],Gt.prototype,"otp",void 0);sr([gt()],Gt.prototype,"values",void 0);Gt=sr([w("wui-otp")],Gt);const J1=.1,ii=2.5,Fe=7;function vr(e,t,o){return e===t?!1:(e-t<0?t-e:e-t)<=o+J1}function e0(e,t){const o=Array.prototype.slice.call(Mi.create(e,{errorCorrectionLevel:t}).modules.data,0),i=Math.sqrt(o.length);return o.reduce((a,r,s)=>(s%i===0?a.push([r]):a[a.length-1].push(r))&&a,[])}const t0={generate(e,t,o){const i="#141414",a="transparent",s=[],l=e0(e,"Q"),f=t/l.length,y=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];y.forEach(({x:z,y:T})=>{const V=(l.length-Fe)*f*z,I=(l.length-Fe)*f*T,L=.45;for(let Y=0;Y<y.length;Y+=1){const Ne=f*(Fe-Y*2);s.push(p`
            <rect
              fill=${Y===2?i:a}
              width=${Y===0?Ne-5:Ne}
              rx= ${Y===0?(Ne-5)*L:Ne*L}
              ry= ${Y===0?(Ne-5)*L:Ne*L}
              stroke=${i}
              stroke-width=${Y===0?5:0}
              height=${Y===0?Ne-5:Ne}
              x= ${Y===0?I+f*Y+5/2:I+f*Y}
              y= ${Y===0?V+f*Y+5/2:V+f*Y}
            />
          `)}});const S=Math.floor((o+25)/f),H=l.length/2-S/2,F=l.length/2+S/2-1,q=[];l.forEach((z,T)=>{z.forEach((V,I)=>{if(l[T][I]&&!(T<Fe&&I<Fe||T>l.length-(Fe+1)&&I<Fe||T<Fe&&I>l.length-(Fe+1))&&!(T>H&&T<F&&I>H&&I<F)){const L=T*f+f/2,Y=I*f+f/2;q.push([L,Y])}})});const ue={};return q.forEach(([z,T])=>{var V;ue[z]?(V=ue[z])==null||V.push(T):ue[z]=[T]}),Object.entries(ue).map(([z,T])=>{const V=T.filter(I=>T.every(L=>!vr(I,L,f)));return[Number(z),V]}).forEach(([z,T])=>{T.forEach(V=>{s.push(p`<circle cx=${z} cy=${V} fill=${i} r=${f/ii} />`)})}),Object.entries(ue).filter(([z,T])=>T.length>1).map(([z,T])=>{const V=T.filter(I=>T.some(L=>vr(I,L,f)));return[Number(z),V]}).map(([z,T])=>{T.sort((I,L)=>I<L?-1:1);const V=[];for(const I of T){const L=V.find(Y=>Y.some(Ne=>vr(I,Ne,f)));L?L.push(I):V.push([I])}return[z,V.map(I=>[I[0],I[I.length-1]])]}).forEach(([z,T])=>{T.forEach(([V,I])=>{s.push(p`
              <line
                x1=${z}
                x2=${z}
                y1=${V}
                y2=${I}
                stroke=${i}
                stroke-width=${f/(ii/2)}
                stroke-linecap="round"
              />
            `)})}),s}},o0=h`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var wt=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Me=class extends g{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,u`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return p`
      <svg height=${t} width=${t}>
        ${t0.generate(this.uri,t,this.arenaClear?0:t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?u`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:u`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Me.styles=[m,o0];wt([c()],Me.prototype,"uri",void 0);wt([c({type:Number})],Me.prototype,"size",void 0);wt([c()],Me.prototype,"theme",void 0);wt([c()],Me.prototype,"imageSrc",void 0);wt([c()],Me.prototype,"alt",void 0);wt([c({type:Boolean})],Me.prototype,"arenaClear",void 0);wt([c({type:Boolean})],Me.prototype,"farcaster",void 0);Me=wt([w("wui-qr-code")],Me);const r0=h`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var i0=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Ir=class extends g{constructor(){super(...arguments),this.inputComponentRef=Or()}render(){return u`
      <wui-input-text
        ${Mr(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,o=t==null?void 0:t.inputElementRef.value;o&&(o.value="",o.focus(),o.dispatchEvent(new Event("input")))}};Ir.styles=[m,r0];Ir=i0([w("wui-search-bar")],Ir);const a0=h`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var oo=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let ut=class extends g{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1}render(){return u`
      ${this.loading?u`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:u`<wui-icon-box
            size="sm"
            iconSize="xs"
            iconColor=${this.iconColor}
            backgroundColor=${this.backgroundColor}
            icon=${this.icon}
            background="opaque"
          ></wui-icon-box>`}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}};ut.styles=[m,a0];oo([c()],ut.prototype,"backgroundColor",void 0);oo([c()],ut.prototype,"iconColor",void 0);oo([c()],ut.prototype,"icon",void 0);oo([c()],ut.prototype,"message",void 0);oo([c()],ut.prototype,"loading",void 0);ut=oo([w("wui-snackbar")],ut);const br="https://secure.walletconnect.org",n0=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],Ee={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:br,SECURE_SITE_DASHBOARD:`${br}/dashboard`,SECURE_SITE_FAVICON:`${br}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in a new browser tab"},DEFAULT_FEATURES:{swaps:!0,onramp:!0,email:!0,emailShowWallets:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],history:!0,analytics:!0,allWallets:!0,smartSessions:!1}},P={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(e,t=""){return e==null?void 0:e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){const e=window.navigator.userAgent.toLowerCase();return P.isMobile()&&e.includes("android")},isIos(){const e=window.navigator.userAgent.toLowerCase();return P.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=Ee.TEN_SEC_MS:!0},isAllowedRetry(e,t=Ee.ONE_SEC_MS){return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry(){return Date.now()+Ee.FOUR_MINUTES_MS},getNetworkId(e){return e==null?void 0:e.split(":")[1]},getPlainAddress(e){return e==null?void 0:e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let o;return(...i)=>{function a(){e(...i)}o&&clearTimeout(o),o=setTimeout(a,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t){if(P.isHttpUrl(e))return this.formatUniversalUrl(e,t);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));const i=encodeURIComponent(t);return{redirect:`${o}wc?uri=${i}`,href:o}},formatUniversalUrl(e,t){if(!P.isHttpUrl(e))return this.formatNativeUrl(e,t);let o=e;o.endsWith("/")||(o=`${o}/`);const i=encodeURIComponent(t);return{redirect:`${o}wc?uri=${i}`,href:o}},getOpenTargetForPlatform(e){return this.isTelegram()?"_blank":e},openHref(e,t,o){window.open(e,this.getOpenTargetForPlatform(t),o||"noreferrer noopener")},returnOpenHref(e,t,o){return window.open(e,this.getOpenTargetForPlatform(t),o||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},async preloadImage(e){const t=new Promise((o,i)=>{const a=new Image;a.onload=o,a.onerror=i,a.crossOrigin="anonymous",a.src=e});return Promise.race([t,P.wait(2e3)])},formatBalance(e,t){let o="0.000";if(typeof e=="string"){const i=Number(e);if(i){const a=Math.floor(i*1e3)/1e3;a&&(o=a.toString())}}return`${o}${t?` ${t}`:""}`},formatBalance2(e,t){var i;let o;if(e==="0")o="0";else if(typeof e=="string"){const a=Number(e);a&&(o=(i=a.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:i[0])}return{value:o??"0",rest:o==="0"?"000":"",symbol:t}},getApiUrl(){return nt.W3M_API_URL},getBlockchainApiUrl(){return nt.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return nt.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})},parseError(e){var t,o;return typeof e=="string"?e:typeof((o=(t=e==null?void 0:e.issues)==null?void 0:t[0])==null?void 0:o.message)=="string"?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e,t=[]){const o={};return t&&e&&(e.forEach((i,a)=>{o[i]=a}),t.sort((i,a)=>{const r=o[i.id],s=o[a.id];return r!==void 0&&s!==void 0?r-s:r!==void 0?-1:s!==void 0?1:0})),t},calculateBalance(e){let t=0;for(const o of e)t+=o.value??0;return t},formatTokenBalance(e){const t=e.toFixed(2),[o,i]=t.split(".");return{dollars:o,pennies:i}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){const o=new Set;return e.filter(i=>{const a=i[t];return o.has(a)?!1:(o.add(a),!0)})},generateSdkVersion(e,t,o){const a=e.length===0?"universal":e.map(r=>r.adapterType).join(",");return`${t}-${a}-${o}`}};async function so(...e){const t=await fetch(...e);if(!t.ok)throw new Error(`HTTP status code: ${t.status}`,{cause:t});return t}class lr{constructor({baseUrl:t,clientId:o}){this.baseUrl=t,this.clientId=o}async get({headers:t,signal:o,cache:i,...a}){const r=this.createUrl(a);return(await so(r,{method:"GET",headers:t,signal:o,cache:i})).json()}async getBlob({headers:t,signal:o,...i}){const a=this.createUrl(i);return(await so(a,{method:"GET",headers:t,signal:o})).blob()}async post({body:t,headers:o,signal:i,...a}){const r=this.createUrl(a);return(await so(r,{method:"POST",headers:o,body:t?JSON.stringify(t):void 0,signal:i})).json()}async put({body:t,headers:o,signal:i,...a}){const r=this.createUrl(a);return(await so(r,{method:"PUT",headers:o,body:t?JSON.stringify(t):void 0,signal:i})).json()}async delete({body:t,headers:o,signal:i,...a}){const r=this.createUrl(a);return(await so(r,{method:"DELETE",headers:o,body:t?JSON.stringify(t):void 0,signal:i})).json()}createUrl({path:t,params:o}){const i=new URL(t,this.baseUrl);return o&&Object.entries(o).forEach(([a,r])=>{r&&i.searchParams.append(a,r)}),this.clientId&&i.searchParams.append("clientId",this.clientId),i}}const M=j({features:Ee.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined"}),R={state:M,subscribeKey(e,t){return le(M,e,t)},setOptions(e){Object.assign(M,e)},setFeatures(e){e&&Object.entries(e).forEach(([t,o])=>{M.features||(M.features=Ee.DEFAULT_FEATURES),t in M.features&&(M.features[t]=o)})},setProjectId(e){M.projectId=e},setAllWallets(e){M.allWallets=e},setIncludeWalletIds(e){M.includeWalletIds=e},setExcludeWalletIds(e){M.excludeWalletIds=e},setFeaturedWalletIds(e){M.featuredWalletIds=e},setTokens(e){M.tokens=e},setTermsConditionsUrl(e){M.termsConditionsUrl=e},setPrivacyPolicyUrl(e){M.privacyPolicyUrl=e},setCustomWallets(e){M.customWallets=e},setIsSiweEnabled(e){M.isSiweEnabled=e},setIsUniversalProvider(e){M.isUniversalProvider=e},setSdkVersion(e){M.sdkVersion=e},setMetadata(e){M.metadata=e},setDisableAppend(e){M.disableAppend=e},setEIP6963Enabled(e){M.enableEIP6963=e},setDebug(e){M.debug=e},setEnableWalletConnect(e){M.enableWalletConnect=e},setEnableWallets(e){M.enableWallets=e},setHasMultipleAddresses(e){M.hasMultipleAddresses=e}},s0={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},ki=P.getBlockchainApiUrl(),W=j({clientId:null,api:new lr({baseUrl:ki,clientId:null})}),ae={state:W,fetchIdentity({address:e}){return W.api.get({path:`/v1/identity/${e}`,params:{projectId:R.state.projectId,sender:v.state.activeCaipAddress?P.getPlainAddress(v.state.activeCaipAddress):void 0}})},fetchTransactions({account:e,projectId:t,cursor:o,onramp:i,signal:a,cache:r,chainId:s}){return W.api.get({path:`/v1/account/${e}/history`,params:{projectId:t,cursor:o,onramp:i,chainId:s},signal:a,cache:r})},fetchSwapQuote({projectId:e,amount:t,userAddress:o,from:i,to:a,gasPrice:r}){return W.api.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{projectId:e,amount:t,userAddress:o,from:i,to:a,gasPrice:r}})},fetchSwapTokens({projectId:e,chainId:t}){return W.api.get({path:"/v1/convert/tokens",params:{projectId:e,chainId:t}})},fetchTokenPrice({projectId:e,addresses:t}){return W.api.post({path:"/v1/fungible/price",body:{projectId:e,currency:"usd",addresses:t},headers:{"Content-Type":"application/json"}})},fetchSwapAllowance({projectId:e,tokenAddress:t,userAddress:o}){const{sdkType:i,sdkVersion:a}=R.state;return W.api.get({path:"/v1/convert/allowance",params:{projectId:e,tokenAddress:t,userAddress:o},headers:{"Content-Type":"application/json","x-sdk-type":i,"x-sdk-version":a||"html-wagmi-4.2.2"}})},fetchGasPrice({projectId:e,chainId:t}){const{sdkType:o,sdkVersion:i}=R.state;return W.api.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":i||"html-wagmi-4.2.2"},params:{projectId:e,chainId:t}})},generateSwapCalldata({amount:e,from:t,projectId:o,to:i,userAddress:a}){return W.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:Ee.CONVERT_SLIPPAGE_TOLERANCE},from:t,projectId:o,to:i,userAddress:a}})},generateApproveCalldata({from:e,projectId:t,to:o,userAddress:i}){const{sdkType:a,sdkVersion:r}=R.state;return W.api.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json","x-sdk-type":a,"x-sdk-version":r||"html-wagmi-4.2.2"},params:{projectId:t,userAddress:i,from:e,to:o}})},async getBalance(e,t,o){const{sdkType:i,sdkVersion:a}=R.state;return W.api.get({path:`/v1/account/${e}/balance`,headers:{"x-sdk-type":i,"x-sdk-version":a||"html-wagmi-4.2.2"},params:{currency:"usd",projectId:R.state.projectId,chainId:t,forceUpdate:o}})},async lookupEnsName(e){return W.api.get({path:`/v1/profile/account/${e}`,params:{projectId:R.state.projectId,apiVersion:"2"}})},async reverseLookupEnsName({address:e}){return W.api.get({path:`/v1/profile/reverse/${e}`,params:{sender:he.state.address,projectId:R.state.projectId,apiVersion:"2"}})},async getEnsNameSuggestions(e){return W.api.get({path:`/v1/profile/suggestions/${e}`,params:{projectId:R.state.projectId,zone:"reown.id"}})},async registerEnsName({coinType:e,address:t,message:o,signature:i}){return W.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:o,signature:i},headers:{"Content-Type":"application/json"}})},async generateOnRampURL({destinationWallets:e,partnerUserId:t,defaultNetwork:o,purchaseAmount:i,paymentAmount:a}){return(await W.api.post({path:"/v1/generators/onrampurl",params:{projectId:R.state.projectId},body:{destinationWallets:e,defaultNetwork:o,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:a}})).url},async getOnrampOptions(){try{return await W.api.get({path:"/v1/onramp/options",params:{projectId:R.state.projectId}})}catch{return s0}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:o,network:i}){try{return await W.api.post({path:"/v1/onramp/quote",params:{projectId:R.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:o,network:i}})}catch{return{coinbaseFee:{amount:o,currency:t.id},networkFee:{amount:o,currency:t.id},paymentSubtotal:{amount:o,currency:t.id},paymentTotal:{amount:o,currency:t.id},purchaseAmount:{amount:o,currency:t.id},quoteId:"mocked-quote-id"}}},getSmartSessions(e){return W.api.get({path:`/v1/sessions/${e}`,params:{projectId:R.state.projectId}})},revokeSmartSession(e,t,o){return W.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:R.state.projectId},body:{pci:t,signature:o}})},setClientId(e){W.clientId=e,W.api=new lr({baseUrl:ki,clientId:e})}},be=j({message:"",variant:"success",open:!1}),X={state:be,subscribeKey(e,t){return le(be,e,t)},showLoading(e){this._showMessage(e,"loading")},showSuccess(e){this._showMessage(e,"success")},showError(e){const t=P.parseError(e);this._showMessage(t,"error")},hide(){be.open=!1},_showMessage(e,t){be.open?(be.open=!1,setTimeout(()=>{be.message=e,be.variant=t,be.open=!0},150)):(be.message=e,be.variant=t,be.open=!0)}},l0=P.getAnalyticsUrl(),c0=new lr({baseUrl:l0,clientId:null}),u0=["MODAL_CREATED"],$t=j({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Qe={state:$t,subscribe(e){return Se($t,()=>e($t))},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:o}=R.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":o||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(e){try{if(u0.includes(e.data.event)||typeof window>"u")return;await c0.post({path:"/e",headers:Qe._getApiHeaders(),body:{eventId:P.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){var t;$t.timestamp=Date.now(),$t.data=e,(t=R.state.features)!=null&&t.analytics&&Qe._sendAnalyticsEvent($t)}},$=j({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),d0={state:$,subscribe(e){return Se($,()=>e($))},setLastNetworkInView(e){$.lastNetworkInView=e},async fetchTransactions(e,t){var i;const{projectId:o}=R.state;if(!o||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");$.loading=!0;try{const a=await ae.fetchTransactions({account:e,projectId:o,cursor:$.next,onramp:t,cache:t==="coinbase"?"no-cache":void 0,chainId:(i=v.state.activeCaipNetwork)==null?void 0:i.caipNetworkId}),r=this.filterSpamTransactions(a.data),s=this.filterByConnectedChain(r),l=[...$.transactions,...s];$.loading=!1,t==="coinbase"?$.coinbaseTransactions=this.groupTransactionsByYearAndMonth($.coinbaseTransactions,a.data):($.transactions=l,$.transactionsByYear=this.groupTransactionsByYearAndMonth($.transactionsByYear,s)),$.empty=l.length===0,$.next=a.next?a.next:void 0}catch{Qe.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:o,cursor:$.next,isSmartAccount:he.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}}),X.showError("Failed to fetch transactions"),$.loading=!1,$.empty=!0,$.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){const o=e;return t.forEach(i=>{const a=new Date(i.metadata.minedAt).getFullYear(),r=new Date(i.metadata.minedAt).getMonth(),s=o[a]??{},f=(s[r]??[]).filter(y=>y.id!==i.id);o[a]={...s,[r]:[...f,i].sort((y,S)=>new Date(S.metadata.minedAt).getTime()-new Date(y.metadata.minedAt).getTime())}}),o},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(i=>{var a;return((a=i.nft_info)==null?void 0:a.flags.is_spam)===!0}))},filterByConnectedChain(e){var i;const t=(i=v.state.activeCaipNetwork)==null?void 0:i.caipNetworkId;return e.filter(a=>a.metadata.chain===t)},clearCursor(){$.next=void 0},resetTransactions(){$.transactions=[],$.transactionsByYear={},$.lastNetworkInView=void 0,$.loading=!1,$.empty=!1,$.next=void 0}},ze=j({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),Bt={state:ze,subscribe(e){return Se(ze,()=>e(ze))},setThemeMode(e){ze.themeMode=e;try{const t=Qo.getAuthConnector();if(t){const o=Bt.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:o,w3mThemeVariables:Ho(o,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){ze.themeVariables={...ze.themeVariables,...e};try{const t=Qo.getAuthConnector();if(t){const o=Bt.getSnapshot().themeVariables;t.provider.syncTheme({themeVariables:o,w3mThemeVariables:Ho(ze.themeVariables,ze.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return yr(ze)}},Ce=j({allConnectors:[],connectors:[]}),Qo={state:Ce,subscribeKey(e,t){return le(Ce,e,t)},setConnectors(e){const t=e.filter(o=>{try{j(o)}catch(i){return console.error("ConnectorController.setConnectors: Not possible to add connector",{newConnector:o,error:i}),!1}return!Ce.allConnectors.some(i=>i.id===o.id&&this.getConnectorName(i.name)===this.getConnectorName(o.name)&&i.chain===o.chain)});Ce.allConnectors=[...Ce.connectors,...t],Ce.connectors=this.mergeMultiChainConnectors(Ce.allConnectors)},mergeMultiChainConnectors(e){const t=this.generateConnectorMapByName(e),o=[];return t.forEach(i=>{const a=i[0],r=(a==null?void 0:a.id)==="w3mAuth";i.length>1?o.push({name:a==null?void 0:a.name,imageUrl:a==null?void 0:a.imageUrl,imageId:a==null?void 0:a.imageId,connectors:[...i],type:r?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(a==null?void 0:a.id)||""}):a&&o.push(a)}),o},generateConnectorMapByName(e){const t=new Map;return e.forEach(o=>{const{name:i}=o,a=this.getConnectorName(i);if(!a)return;const r=t.get(a)||[];r.find(l=>l.chain===o.chain)||r.push(o),t.set(a,r)}),t},getConnectorName(e){return e&&({"Trust Wallet":"Trust"}[e]||e)},getUniqueConnectorsByName(e){const t=[];return e.forEach(o=>{t.find(i=>i.chain===o.chain)||t.push(o)}),t},addConnector(e){var t,o;if(e.id==="w3mAuth"){const i=e,a=yr(R.state),r=Bt.getSnapshot().themeMode,s=Bt.getSnapshot().themeVariables;(o=(t=i==null?void 0:i.provider)==null?void 0:t.syncDappData)==null||o.call(t,{metadata:a.metadata,sdkVersion:a.sdkVersion,projectId:a.projectId,sdkType:a.sdkType}),i.provider.syncTheme({themeMode:r,themeVariables:s,w3mThemeVariables:Ho(s,r)}),this.setConnectors([e])}else this.setConnectors([e])},getAuthConnector(){var o;const e=v.state.activeChain,t=Ce.connectors.find(i=>i.id==="w3mAuth");if(t)return(o=t==null?void 0:t.connectors)!=null&&o.length?t.connectors.find(a=>a.chain===e):t},getAnnouncedConnectorRdns(){return Ce.connectors.filter(e=>e.type==="ANNOUNCED").map(e=>{var t;return(t=e.info)==null?void 0:t.rdns})},getConnectors(){return Ce.connectors},getConnector(e,t){return Ce.connectors.find(o=>{var i;return o.explorerId===e||((i=o.info)==null?void 0:i.rdns)===t})},syncIfAuthConnector(e){var r,s;if(e.id!=="w3mAuth")return;const t=e,o=yr(R.state),i=Bt.getSnapshot().themeMode,a=Bt.getSnapshot().themeVariables;(s=(r=t==null?void 0:t.provider)==null?void 0:r.syncDappData)==null||s.call(r,{metadata:o.metadata,sdkVersion:o.sdkVersion,sdkType:o.sdkType,projectId:o.projectId}),t.provider.syncTheme({themeMode:i,themeVariables:a,w3mThemeVariables:Ho(a,i)})}},B=j({wcError:!1,buffering:!1,status:"disconnected"});let Ut;const st={state:B,subscribeKey(e,t){return le(B,e,t)},_getClient(e){return v.getConnectionControllerClient(e)},setClient(e){B._client=Ve(e)},async connectWalletConnect(){var e,t,o,i;if(_e.setConnectedConnector("WALLET_CONNECT"),P.isTelegram()){if(Ut){try{await Ut}catch{}Ut=void 0;return}if(!P.isPairingExpired(B==null?void 0:B.wcPairingExpiry)){const a=B.wcUri;B.wcUri=a;return}Ut=new Promise(async(a,r)=>{var s,l,f,y;await((y=(f=(l=(s=v.state)==null?void 0:s.universalAdapter)==null?void 0:l.connectionControllerClient)==null?void 0:f.connectWalletConnect)==null?void 0:y.call(f,S=>{B.wcUri=S,B.wcPairingExpiry=P.getPairingExpiry()}).catch(r)),a()}),this.state.status="connecting",await Ut,Ut=void 0,B.wcPairingExpiry=void 0,this.state.status="connected"}else await((i=(o=(t=(e=v.state)==null?void 0:e.universalAdapter)==null?void 0:t.connectionControllerClient)==null?void 0:o.connectWalletConnect)==null?void 0:i.call(o,a=>{B.wcUri=a,B.wcPairingExpiry=P.getPairingExpiry()}))},async connectExternal(e,t,o=!0){var i,a;await((a=(i=this._getClient(t)).connectExternal)==null?void 0:a.call(i,e)),o&&(v.setActiveNamespace(t),_e.setConnectedConnector(e.type))},async reconnectExternal(e){var t,o;await((o=(t=this._getClient()).reconnectExternal)==null?void 0:o.call(t,e)),_e.setConnectedConnector(e.type)},async setPreferredAccountType(e){var o;xo.setLoading(!0);const t=Qo.getAuthConnector();t&&(await(t==null?void 0:t.provider.setPreferredAccount(e)),await this.reconnectExternal(t),xo.setLoading(!1),Qe.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:((o=v.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)||""}}))},async signMessage(e){return this._getClient().signMessage(e)},parseUnits(e,t){return this._getClient().parseUnits(e,t)},formatUnits(e,t){return this._getClient().formatUnits(e,t)},async sendTransaction(e){return this._getClient().sendTransaction(e)},async getCapabilities(e){return this._getClient().getCapabilities(e)},async grantPermissions(e){return this._getClient().grantPermissions(e)},async estimateGas(e){return this._getClient().estimateGas(e)},async writeContract(e){return this._getClient().writeContract(e)},async getEnsAddress(e){return this._getClient().getEnsAddress(e)},async getEnsAvatar(e){return this._getClient().getEnsAvatar(e)},checkInstalled(e,t){var o,i;return((i=(o=this._getClient(t)).checkInstalled)==null?void 0:i.call(o,e))||!1},resetWcConnection(){B.wcUri=void 0,B.wcPairingExpiry=void 0,B.wcLinking=void 0,B.recentWallet=void 0,B.status="disconnected",d0.resetTransactions(),_e.deleteWalletConnectDeepLink()},setWcLinking(e){B.wcLinking=e},setWcError(e){B.wcError=e,B.buffering=!1},setRecentWallet(e){B.recentWallet=e},setBuffering(e){B.buffering=e},setStatus(e){B.status=e},async disconnect(){const e=this._getClient();try{await(e==null?void 0:e.disconnect()),this.resetWcConnection()}catch{throw new Error("Failed to disconnect")}}},uo={async getTokenList(){var i;const e=v.state.activeCaipNetwork,t=await ae.fetchSwapTokens({chainId:e==null?void 0:e.caipNetworkId,projectId:R.state.projectId});return((i=t==null?void 0:t.tokens)==null?void 0:i.map(a=>({...a,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0})))||[]},async fetchGasPrice(){const e=R.state.projectId,t=v.state.activeCaipNetwork;if(!t)return null;try{switch(t.chainNamespace){case"solana":const o=(await st.estimateGas({chainNamespace:"solana"})).toString();return{standard:o,fast:o,instant:o};case"eip155":default:return await ae.fetchGasPrice({projectId:e,chainId:t.caipNetworkId})}}catch{return null}},async fetchSwapAllowance({tokenAddress:e,userAddress:t,sourceTokenAmount:o,sourceTokenDecimals:i}){const a=R.state.projectId,r=await ae.fetchSwapAllowance({projectId:a,tokenAddress:e,userAddress:t});if(r!=null&&r.allowance&&o&&i){const s=st.parseUnits(o,i)||0;return BigInt(r.allowance)>=s}return!1},async getMyTokensWithBalance(e){const t=he.state.address,o=v.state.activeCaipNetwork;if(!t||!o)return[];const a=(await ae.getBalance(t,o.caipNetworkId,e)).balances.filter(r=>r.quantity.decimals!=="0");return he.setTokenBalance(a,v.state.activeChain),this.mapBalancesToSwapTokens(a)},mapBalancesToSwapTokens(e){return(e==null?void 0:e.map(t=>({...t,address:t!=null&&t.address?t.address:v.getActiveNetworkTokenAddress(),decimals:parseInt(t.quantity.decimals,10),logoUri:t.iconUrl,eip2612:!1})))||[]}},U=j({view:"Connect",history:["Connect"],transactionStack:[]}),re={state:U,subscribeKey(e,t){return le(U,e,t)},pushTransactionStack(e){U.transactionStack.push(e)},popTransactionStack(e){var o,i;const t=U.transactionStack.pop();if(t)if(e)this.goBack(),(o=t==null?void 0:t.onCancel)==null||o.call(t);else{if(t.goBack)this.goBack();else if(t.replace){const r=U.history.indexOf("ConnectingSiwe");r>0?this.goBackToIndex(r-1):(xo.close(),U.history=[])}else t.view&&this.reset(t.view);(i=t==null?void 0:t.onSuccess)==null||i.call(t)}},push(e,t){e!==U.view&&(U.view=e,U.history.push(e),U.data=t)},reset(e){U.view=e,U.history=[e]},replace(e,t){U.history.at(-1)===e||(U.view=e,U.history[U.history.length-1]=e,U.data=t)},goBack(){if(U.history.length>1){U.history.pop();const[e]=U.history.slice(-1);e&&(U.view=e)}else xo.close()},goBackToIndex(e){if(U.history.length>1){U.history=U.history.slice(0,e+1);const[t]=U.history.slice(-1);t&&(U.view=t)}}},We={getGasPriceInEther(e,t){const o=t*e;return Number(o)/1e18},getGasPriceInUSD(e,t,o){const i=We.getGasPriceInEther(t,o);return D.bigNumber(e).multipliedBy(i).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:o,toTokenAmount:i}){const a=D.bigNumber(e).multipliedBy(t),r=D.bigNumber(i).multipliedBy(o);return a.minus(r).dividedBy(a).multipliedBy(100).toNumber()},getMaxSlippage(e,t){const o=D.bigNumber(e).dividedBy(100);return D.multiply(t,o).toNumber()},getProviderFee(e,t=.0085){return D.bigNumber(e).multipliedBy(t).toString()},isInsufficientNetworkTokenForGas(e,t){const o=t||"0";return D.bigNumber(e).isZero()?!0:D.bigNumber(D.bigNumber(o)).isGreaterThan(e)},isInsufficientSourceTokenForSwap(e,t,o){var r,s;const i=(s=(r=o==null?void 0:o.find(l=>l.address===t))==null?void 0:r.quantity)==null?void 0:s.numeric;return D.bigNumber(i||"0").isLessThan(e)},getToTokenAmount({sourceToken:e,toToken:t,sourceTokenPrice:o,toTokenPrice:i,sourceTokenAmount:a}){if(a==="0"||!e||!t)return"0";const r=e.decimals,s=o,l=t.decimals,f=i;if(f<=0)return"0";const y=D.bigNumber(a).multipliedBy(.0085),H=D.bigNumber(a).minus(y).multipliedBy(D.bigNumber(10).pow(r)),F=D.bigNumber(s).dividedBy(f),q=r-l;return H.multipliedBy(F).dividedBy(D.bigNumber(10).pow(q)).dividedBy(D.bigNumber(10).pow(l)).toFixed(l).toString()}},ai=15e4,p0=6,oe={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:Ee.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},d=j(oe),Wo={state:d,subscribe(e){return Se(d,()=>e(d))},subscribeKey(e,t){return le(d,e,t)},getParams(){var l,f,y,S,H,F,q,ue;const e=v.state.activeCaipAddress,t=P.getPlainAddress(e),o=v.getActiveNetworkTokenAddress(),i=_e.getConnectedConnector();if(!t)throw new Error("No address found to swap the tokens from.");const a=!((l=d.toToken)!=null&&l.address)||!((f=d.toToken)!=null&&f.decimals),r=!((y=d.sourceToken)!=null&&y.address)||!((S=d.sourceToken)!=null&&S.decimals)||!D.bigNumber(d.sourceTokenAmount).isGreaterThan(0),s=!d.sourceTokenAmount;return{networkAddress:o,fromAddress:t,fromCaipAddress:e,sourceTokenAddress:(H=d.sourceToken)==null?void 0:H.address,toTokenAddress:(F=d.toToken)==null?void 0:F.address,toTokenAmount:d.toTokenAmount,toTokenDecimals:(q=d.toToken)==null?void 0:q.decimals,sourceTokenAmount:d.sourceTokenAmount,sourceTokenDecimals:(ue=d.sourceToken)==null?void 0:ue.decimals,invalidToToken:a,invalidSourceToken:r,invalidSourceTokenAmount:s,availableToSwap:e&&!a&&!r&&!s,isAuthConnector:i==="AUTH"}},setSourceToken(e){if(!e){d.sourceToken=e,d.sourceTokenAmount="",d.sourceTokenPriceInUSD=0;return}d.sourceToken=e,this.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){d.sourceTokenAmount=e},setToToken(e){if(!e){d.toToken=e,d.toTokenAmount="",d.toTokenPriceInUSD=0;return}d.toToken=e,this.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){d.toTokenAmount=e?D.formatNumberToLocalString(e,p0):""},async setTokenPrice(e,t){const{availableToSwap:o}=this.getParams();let i=d.tokensPriceMap[e]||0;i||(d.loadingPrices=!0,i=await this.getAddressPrice(e)),t==="sourceToken"?d.sourceTokenPriceInUSD=i:t==="toToken"&&(d.toTokenPriceInUSD=i),d.loadingPrices&&(d.loadingPrices=!1,o&&this.swapTokens())},switchTokens(){if(d.initializing||!d.initialized)return;const e=d.toToken?{...d.toToken}:void 0,t=d.sourceToken?{...d.sourceToken}:void 0,o=e&&d.toTokenAmount===""?"1":d.toTokenAmount;this.setSourceToken(e),this.setToToken(t),this.setSourceTokenAmount(o),this.setToTokenAmount(""),this.swapTokens()},resetState(){d.myTokensWithBalance=oe.myTokensWithBalance,d.tokensPriceMap=oe.tokensPriceMap,d.initialized=oe.initialized,d.sourceToken=oe.sourceToken,d.sourceTokenAmount=oe.sourceTokenAmount,d.sourceTokenPriceInUSD=oe.sourceTokenPriceInUSD,d.toToken=oe.toToken,d.toTokenAmount=oe.toTokenAmount,d.toTokenPriceInUSD=oe.toTokenPriceInUSD,d.networkPrice=oe.networkPrice,d.networkTokenSymbol=oe.networkTokenSymbol,d.networkBalanceInUSD=oe.networkBalanceInUSD,d.inputError=oe.inputError},resetValues(){var o;const{networkAddress:e}=this.getParams(),t=(o=d.tokens)==null?void 0:o.find(i=>i.address===e);this.setSourceToken(t),this.setToToken(void 0)},getApprovalLoadingState(){return d.loadingApprovalTransaction},clearError(){d.transactionError=void 0},async initializeState(){if(!d.initializing){if(d.initializing=!0,!d.initialized)try{await this.fetchTokens(),d.initialized=!0}catch{d.initialized=!1,X.showError("Failed to initialize swap"),re.goBack()}d.initializing=!1}},async fetchTokens(){var o;const{networkAddress:e}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const t=(o=d.tokens)==null?void 0:o.find(i=>i.address===e);t&&(d.networkTokenSymbol=t.symbol,this.setSourceToken(t),this.setSourceTokenAmount("1"))},async getTokenList(){const e=await uo.getTokenList();d.tokens=e,d.popularTokens=e.sort((t,o)=>t.symbol<o.symbol?-1:t.symbol>o.symbol?1:0),d.suggestedTokens=e.filter(t=>!!Ee.SWAP_SUGGESTED_TOKENS.includes(t.symbol),{})},async getAddressPrice(e){var f,y;const t=d.tokensPriceMap[e];if(t)return t;const i=(await ae.fetchTokenPrice({projectId:R.state.projectId,addresses:[e]})).fungibles||[],a=[...d.tokens||[],...d.myTokensWithBalance||[]],r=(f=a==null?void 0:a.find(S=>S.address===e))==null?void 0:f.symbol,s=((y=i.find(S=>S.symbol.toLowerCase()===(r==null?void 0:r.toLowerCase())))==null?void 0:y.price)||0,l=parseFloat(s.toString());return d.tokensPriceMap[e]=l,l},async getNetworkTokenPrice(){var a;const{networkAddress:e}=this.getParams(),o=(a=(await ae.fetchTokenPrice({projectId:R.state.projectId,addresses:[e]}).catch(()=>(X.showError("Failed to fetch network token price"),{fungibles:[]}))).fungibles)==null?void 0:a[0],i=(o==null?void 0:o.price.toString())||"0";d.tokensPriceMap[e]=parseFloat(i),d.networkTokenSymbol=(o==null?void 0:o.symbol)||"",d.networkPrice=i},async getMyTokensWithBalance(e){const t=await uo.getMyTokensWithBalance(e);t&&(await this.getInitialGasPrice(),this.setBalances(t))},setBalances(e){const{networkAddress:t}=this.getParams(),o=v.state.activeCaipNetwork;if(!o)return;const i=e.find(a=>a.address===t);e.forEach(a=>{d.tokensPriceMap[a.address]=a.price||0}),d.myTokensWithBalance=e.filter(a=>a.address.startsWith(o.caipNetworkId)),d.networkBalanceInUSD=i?D.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){var t,o;const e=await uo.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch((o=(t=v.state)==null?void 0:t.activeCaipNetwork)==null?void 0:o.chainNamespace){case"solana":return d.gasFee=e.standard,d.gasPriceInUSD=D.multiply(e.standard,d.networkPrice).dividedBy(1e9).toNumber(),{gasPrice:BigInt(d.gasFee),gasPriceInUSD:Number(d.gasPriceInUSD)};case"eip155":default:const i=e.standard,a=BigInt(i),r=BigInt(ai),s=We.getGasPriceInUSD(d.networkPrice,r,a);return d.gasFee=i,d.gasPriceInUSD=s,{gasPrice:a,gasPriceInUSD:s}}},async swapTokens(){var y,S;const e=he.state.address,t=d.sourceToken,o=d.toToken,i=D.bigNumber(d.sourceTokenAmount).isGreaterThan(0);if(!o||!t||d.loadingPrices||!i)return;d.loadingQuote=!0;const a=D.bigNumber(d.sourceTokenAmount).multipliedBy(10**t.decimals).integerValue(),r=await ae.fetchSwapQuote({userAddress:e,projectId:R.state.projectId,from:t.address,to:o.address,gasPrice:d.gasFee,amount:a.toString()});d.loadingQuote=!1;const s=(S=(y=r==null?void 0:r.quotes)==null?void 0:y[0])==null?void 0:S.toAmount;if(!s)return;const l=D.bigNumber(s).dividedBy(10**o.decimals).toString();this.setToTokenAmount(l),this.hasInsufficientToken(d.sourceTokenAmount,t.address)?d.inputError="Insufficient balance":(d.inputError=void 0,this.setTransactionDetails())},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=this.getParams(),o=d.sourceToken,i=d.toToken;if(!(!e||!t||!o||!i||d.loadingQuote))try{d.loadingBuildTransaction=!0;const a=await uo.fetchSwapAllowance({userAddress:e,tokenAddress:o.address,sourceTokenAmount:d.sourceTokenAmount,sourceTokenDecimals:o.decimals});let r;return a?r=await this.createSwapTransaction():r=await this.createAllowanceTransaction(),d.loadingBuildTransaction=!1,d.fetchError=!1,r}catch{re.goBack(),X.showError("Failed to check allowance"),d.loadingBuildTransaction=!1,d.approvalTransaction=void 0,d.swapTransaction=void 0,d.fetchError=!0;return}},async createAllowanceTransaction(){const{fromCaipAddress:e,fromAddress:t,sourceTokenAddress:o,toTokenAddress:i}=this.getParams();if(!(!e||!i)){if(!o)throw new Error("createAllowanceTransaction - No source token address found.");try{const a=await ae.generateApproveCalldata({projectId:R.state.projectId,from:o,to:i,userAddress:e}),r=await st.estimateGas({address:t,to:P.getPlainAddress(a.tx.to),data:a.tx.data}),s={data:a.tx.data,to:P.getPlainAddress(a.tx.from),gas:r,gasPrice:BigInt(a.tx.eip155.gasPrice),value:BigInt(a.tx.value),toAmount:d.toTokenAmount};return d.swapTransaction=void 0,d.approvalTransaction=s,s}catch{re.goBack(),X.showError("Failed to create approval transaction"),d.approvalTransaction=void 0,d.swapTransaction=void 0,d.fetchError=!0;return}}},async createSwapTransaction(){const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:o}=this.getParams(),i=d.sourceToken,a=d.toToken;if(!t||!o||!i||!a)return;const r=st.parseUnits(o,i.decimals).toString();try{const s=await ae.generateSwapCalldata({projectId:R.state.projectId,userAddress:t,from:i.address,to:a.address,amount:r}),l=i.address===e,f=BigInt(s.tx.eip155.gas),y=BigInt(s.tx.eip155.gasPrice),S={data:s.tx.data,to:P.getPlainAddress(s.tx.to),gas:f,gasPrice:y,value:BigInt(l?r:"0"),toAmount:d.toTokenAmount};return d.gasPriceInUSD=We.getGasPriceInUSD(d.networkPrice,f,y),d.approvalTransaction=void 0,d.swapTransaction=S,S}catch{re.goBack(),X.showError("Failed to create transaction"),d.approvalTransaction=void 0,d.swapTransaction=void 0,d.fetchError=!0;return}},async sendTransactionForApproval(e){const{fromAddress:t,isAuthConnector:o}=this.getParams();d.loadingApprovalTransaction=!0;const i="Approve limit increase in your wallet";o?re.pushTransactionStack({view:null,goBack:!0,onSuccess(){X.showLoading(i)}}):X.showLoading(i);try{await st.sendTransaction({address:t,to:e.to,data:e.data,value:BigInt(e.value),gasPrice:BigInt(e.gasPrice)}),await this.swapTokens(),await this.getTransaction(),d.approvalTransaction=void 0,d.loadingApprovalTransaction=!1}catch(a){const r=a;d.transactionError=r==null?void 0:r.shortMessage,d.loadingApprovalTransaction=!1,X.showError((r==null?void 0:r.shortMessage)||"Transaction error")}},async sendTransactionForSwap(e){var s,l,f,y,S,H,F,q,ue,z,T,V;if(!e)return;const{fromAddress:t,toTokenAmount:o,isAuthConnector:i}=this.getParams();d.loadingTransaction=!0;const a=`Swapping ${(s=d.sourceToken)==null?void 0:s.symbol} to ${D.formatNumberToLocalString(o,3)} ${(l=d.toToken)==null?void 0:l.symbol}`,r=`Swapped ${(f=d.sourceToken)==null?void 0:f.symbol} to ${D.formatNumberToLocalString(o,3)} ${(y=d.toToken)==null?void 0:y.symbol}`;i?re.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){X.showLoading(a),Wo.resetState()}}):X.showLoading("Confirm transaction in your wallet");try{const I=[(S=d.sourceToken)==null?void 0:S.address,(H=d.toToken)==null?void 0:H.address].join(","),L=await st.sendTransaction({address:t,to:e.to,data:e.data,gas:e.gas,gasPrice:BigInt(e.gasPrice),value:e.value});return d.loadingTransaction=!1,X.showSuccess(r),Qe.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:((F=v.state.activeCaipNetwork)==null?void 0:F.caipNetworkId)||"",swapFromToken:((q=this.state.sourceToken)==null?void 0:q.symbol)||"",swapToToken:((ue=this.state.toToken)==null?void 0:ue.symbol)||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:he.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}}),Wo.resetState(),i||re.replace("Account"),Wo.getMyTokensWithBalance(I),L}catch(I){const L=I;d.transactionError=L==null?void 0:L.shortMessage,d.loadingTransaction=!1,X.showError((L==null?void 0:L.shortMessage)||"Transaction error"),Qe.sendEvent({type:"track",event:"SWAP_ERROR",properties:{network:((z=v.state.activeCaipNetwork)==null?void 0:z.caipNetworkId)||"",swapFromToken:((T=this.state.sourceToken)==null?void 0:T.symbol)||"",swapToToken:((V=this.state.toToken)==null?void 0:V.symbol)||"",swapFromAmount:this.state.sourceTokenAmount||"",swapToAmount:this.state.toTokenAmount||"",isSmartAccount:he.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(e,t){const o=We.isInsufficientSourceTokenForSwap(e,t,d.myTokensWithBalance);return he.state.preferredAccountType===ye.ACCOUNT_TYPES.SMART_ACCOUNT?!0:We.isInsufficientNetworkTokenForGas(d.networkBalanceInUSD,d.gasPriceInUSD)||o},setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=this.getParams();!e||!t||(d.gasPriceInUSD=We.getGasPriceInUSD(d.networkPrice,BigInt(d.gasFee),BigInt(ai)),d.priceImpact=We.getPriceImpact({sourceTokenAmount:d.sourceTokenAmount,sourceTokenPriceInUSD:d.sourceTokenPriceInUSD,toTokenPriceInUSD:d.toTokenPriceInUSD,toTokenAmount:d.toTokenAmount}),d.maxSlippage=We.getMaxSlippage(d.slippage,d.toTokenAmount),d.providerFee=We.getProviderFee(d.sourceTokenAmount))}},Dt=j({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),he={state:Dt,replaceState(e){e&&Object.assign(Dt,Ve(e))},subscribe(e){return v.subscribeChainProp("accountState",t=>{if(t)return e(t)})},subscribeKey(e,t,o){let i;return v.subscribeChainProp("accountState",a=>{if(a){const r=a[e];i!==r&&(i=r,t(r))}},o)},setStatus(e,t){v.setAccountProp("status",e,t)},getCaipAddress(e){return v.getAccountProp("caipAddress",e)},setProvider(e,t){e&&v.setAccountProp("provider",e,t)},setCaipAddress(e,t){const o=e?P.getPlainAddress(e):void 0;v.state.activeCaipAddress=e,v.setAccountProp("caipAddress",e,t),v.setAccountProp("address",o,t)},setBalance(e,t,o){v.setAccountProp("balance",e,o),v.setAccountProp("balanceSymbol",t,o)},setProfileName(e,t){v.setAccountProp("profileName",e,t)},setProfileImage(e,t){v.setAccountProp("profileImage",e,t)},setAddressExplorerUrl(e,t){v.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){v.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e){v.setAccountProp("currentTab",e,v.state.activeChain)},setTokenBalance(e,t){e&&v.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e,t){v.setAccountProp("shouldUpdateToAddress",e,t)},setAllAccounts(e,t){v.setAccountProp("allAccounts",e,t)},addAddressLabel(e,t,o){const i=v.getAccountProp("addressLabels",o)||new Map;i.set(e,t),v.setAccountProp("addressLabels",i,o)},removeAddressLabel(e,t){const o=v.getAccountProp("addressLabels",t)||new Map;o.delete(e),v.setAccountProp("addressLabels",o,t)},setConnectedWalletInfo(e,t){v.setAccountProp("connectedWalletInfo",e,t,!1)},setPreferredAccountType(e,t){v.setAccountProp("preferredAccountType",e,t)},setSocialProvider(e,t){e&&v.setAccountProp("socialProvider",e,t)},setSocialWindow(e,t){e&&v.setAccountProp("socialWindow",Ve(e),t)},setFarcasterUrl(e,t){e&&v.setAccountProp("farcasterUrl",e,t)},async fetchTokenBalance(){var a,r;const e=(a=v.state.activeCaipNetwork)==null?void 0:a.caipNetworkId,t=(r=v.state.activeCaipNetwork)==null?void 0:r.chainNamespace,o=v.state.activeCaipAddress,i=o?P.getPlainAddress(o):void 0;if(!(Dt.lastRetry&&!P.isAllowedRetry(Dt.lastRetry,30*Ee.ONE_SEC_MS)))try{if(i&&e&&t){const s=await ae.getBalance(i,e),l=s.balances.filter(f=>f.quantity.decimals!=="0");this.setTokenBalance(l,t),Wo.setBalances(uo.mapBalancesToSwapTokens(s.balances)),Dt.lastRetry=void 0}}catch{Dt.lastRetry=Date.now(),X.showError("Token Balance Unavailable")}},resetAccount(e){v.resetAccount(e)},setSiweStatus(e){v.setAccountProp("siweStatus",e,v.state.activeChain)}},lo=j({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0}),Ft={state:lo,subscribe(e){return Se(lo,()=>e(lo))},set(e){Object.assign(lo,{...lo,...e})}},ni={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]},si={supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},E=j({chains:$i(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0}}),v={state:E,subscribe(e){return Se(E,()=>{e(E)})},subscribeKey(e,t){return le(E,e,t)},subscribeChainProp(e,t,o){let i;return Se(E.chains,()=>{var r;const a=o||E.activeChain;if(a){const s=(r=E.chains.get(a))==null?void 0:r[e];i!==s&&(i=s,t(s))}})},initialize(e){const t=e==null?void 0:e[0];(e==null?void 0:e.length)===0&&(E.noAdapters=!0),E.noAdapters||(E.activeChain=t==null?void 0:t.chainNamespace,Ft.set({activeChain:t==null?void 0:t.chainNamespace}),e.forEach(o=>{E.chains.set(o.chainNamespace,{chainNamespace:o.chainNamespace,connectionControllerClient:o.connectionControllerClient,networkControllerClient:o.networkControllerClient,adapterType:o.adapterType,accountState:ni,networkState:si,caipNetworks:o.caipNetworks})}))},initializeUniversalAdapter(e,t){var i,a;if(E.universalAdapter=e,t.length===0){const r=_e.getStoredActiveCaipNetwork();try{r?E.activeChain=r.chainNamespace:E.activeChain=((i=e==null?void 0:e.defaultNetwork)==null?void 0:i.chainNamespace)??((a=e.caipNetworks[0])==null?void 0:a.chainNamespace)}catch(s){console.warn(">>> Error setting active caip network",s)}}[...new Set(e.caipNetworks.map(r=>r.chainNamespace))].forEach(r=>{E.chains.set(r,{chainNamespace:r,connectionControllerClient:void 0,networkControllerClient:void 0,adapterType:e.adapterType,accountState:ni,networkState:si,caipNetworks:e.caipNetworks})})},setAdapterNetworkState(e,t){const o=E.chains.get(e);o&&(o.networkState=Ve({...o.networkState,...t}),E.chains.set(e,Ve(o)))},setChainAccountData(e,t,o=!0){if(!e)throw new Error("Chain is required to update chain account data");const i=E.chains.get(e);i&&(i.accountState=Ve({...i.accountState,...t}),E.chains.set(e,i),(o||E.chains.size===1||E.activeChain===e)&&(t.caipAddress&&(E.activeCaipAddress=t.caipAddress),he.replaceState(i.accountState)))},setAccountProp(e,t,o,i=!0){this.setChainAccountData(o,{[e]:t},i)},setActiveNamespace(e){var i,a;E.activeChain=e;const t=e?E.chains.get(e):void 0,o=(i=t==null?void 0:t.networkState)==null?void 0:i.caipNetwork;o!=null&&o.id&&(E.activeCaipAddress=(a=t==null?void 0:t.accountState)==null?void 0:a.caipAddress,E.activeCaipNetwork=o,ee.setItem(J.ACTIVE_CAIP_NETWORK_ID,o==null?void 0:o.caipNetworkId),Ft.set({activeChain:e,selectedNetworkId:o==null?void 0:o.caipNetworkId}))},setActiveCaipNetwork(e){var i,a;if(!e)return;const t=E.chains.get(e.chainNamespace);E.activeChain=e.chainNamespace,E.activeCaipNetwork=e,E.activeCaipAddress=(i=t==null?void 0:t.accountState)==null?void 0:i.caipAddress,t&&he.replaceState(t.accountState),Ft.set({activeChain:E.activeChain,selectedNetworkId:(a=E.activeCaipNetwork)==null?void 0:a.caipNetworkId}),ee.setItem(J.ACTIVE_CAIP_NETWORK_ID,e.caipNetworkId),this.checkIfSupportedNetwork(e.chainNamespace)||this.showUnsupportedChainUI()},async switchActiveNetwork(e){const t=this.getNetworkControllerClient(e.chainNamespace);t&&await t.switchCaipNetwork(e),this.setActiveCaipNetwork(e),e&&Qe.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})},setActiveConnector(e){e&&(E.activeConnector=Ve(e))},getNetworkControllerClient(e){const t=ee.getItem(J.WALLET_ID),o=e||E.activeChain,i=t==="walletConnect",a=E.universalAdapter.networkControllerClient;if(i||E.noAdapters){if(!a)throw new Error("Universal Adapter's networkControllerClient is not set");return a}if(!o)throw new Error("Chain is required to get network controller client");const s=E.chains.get(o);if(!s)throw new Error("Chain adapter not found");if(!s.networkControllerClient)throw new Error("NetworkController client not set");return s.networkControllerClient},getConnectionControllerClient(e){var l;const t=e||E.activeChain,o=ee.getItem(J.CONNECTED_CONNECTOR)==="WALLET_CONNECT",i=E.universalAdapter.connectionControllerClient,a=((l=E.chains.get("eip155"))==null?void 0:l.adapterType)==="wagmi";if(o&&!a||E.noAdapters){if(!i)throw new Error("Universal Adapter's ConnectionControllerClient is not set");return i}if(!t)throw new Error("Chain is required to get connection controller client");const s=E.chains.get(t);if(!s)throw new Error("Chain adapter not found");if(!s.connectionControllerClient)throw new Error("ConnectionController client not set");return s.connectionControllerClient},getAccountProp(e,t){var a;let o=E.activeChain;if(t&&(o=t),!o)return;const i=(a=E.chains.get(o))==null?void 0:a.accountState;if(i)return i[e]},getNetworkProp(e,t){var i;const o=(i=E.chains.get(t))==null?void 0:i.networkState;if(o)return o[e]},getRequestedCaipNetworks(e){const t=E.chains.get(e),{approvedCaipNetworkIds:o=[],requestedCaipNetworks:i=[]}=(t==null?void 0:t.networkState)||{};return P.sortRequestedNetworks(o,i)},getAllRequestedCaipNetworks(){const e=[];return E.chains.forEach(t=>{const o=this.getRequestedCaipNetworks(t.chainNamespace);e.push(...o)}),e},setRequestedCaipNetworks(e,t){this.setAdapterNetworkState(t,{requestedCaipNetworks:e})},getAllApprovedCaipNetworkIds(){const e=[];return E.chains.forEach(t=>{const o=this.getApprovedCaipNetworkIds(t.chainNamespace);e.push(...o)}),e},getActiveCaipNetwork(){return E.activeCaipNetwork},getActiveCaipAddress(){return E.activeCaipAddress},getApprovedCaipNetworkIds(e){var i;const t=E.chains.get(e);return((i=t==null?void 0:t.networkState)==null?void 0:i.approvedCaipNetworkIds)||[]},async setApprovedCaipNetworksData(e){const t=this.getNetworkControllerClient(),o=await(t==null?void 0:t.getApprovedCaipNetworksData());this.setAdapterNetworkState(e,{approvedCaipNetworkIds:o==null?void 0:o.approvedCaipNetworkIds,supportsAllNetworks:o==null?void 0:o.supportsAllNetworks})},checkIfSupportedNetwork(e){const t=this.state.activeCaipNetwork,o=this.getRequestedCaipNetworks(e);return o.length?o==null?void 0:o.some(i=>i.id===(t==null?void 0:t.id)):!0},setSmartAccountEnabledNetworks(e,t){this.setAdapterNetworkState(t,{smartAccountEnabledNetworks:e})},checkIfSmartAccountEnabled(){var i;const e=an.caipNetworkIdToNumber((i=E.activeCaipNetwork)==null?void 0:i.caipNetworkId),t=this.state.activeChain;if(!t||!e)return!1;const o=this.getNetworkProp("smartAccountEnabledNetworks",t);return!!(o!=null&&o.includes(Number(e)))},getActiveNetworkTokenAddress(){var i,a;const e=((i=this.state.activeCaipNetwork)==null?void 0:i.chainNamespace)||"eip155",t=((a=this.state.activeCaipNetwork)==null?void 0:a.id)||1,o=Ee.NATIVE_TOKEN_ADDRESS[e];return`${e}:${t}:${o}`},showUnsupportedChainUI(){setTimeout(()=>{xo.open({view:"UnsupportedChain"})},300)},checkIfNamesSupported(){const e=E.activeCaipNetwork;return!!(e!=null&&e.chainNamespace&&Ee.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){this.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(e){const t=e;if(!t)throw new Error("Chain is required to set account prop");this.state.activeCaipAddress=void 0,this.setChainAccountData(t,Ve({smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,provider:void 0}))}},_e={setWalletConnectDeepLink({name:e,href:t}){try{ee.setItem(J.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=ee.getItem(J.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{ee.removeItem(J.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setAppKitRecent(e){try{const t=_e.getRecentWallets();t.find(i=>i.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),ee.setItem(J.RECENT_WALLETS,JSON.stringify(t)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const e=ee.getItem(J.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnector(e){try{ee.setItem(J.CONNECTED_CONNECTOR,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return ee.getItem(J.CONNECTED_CONNECTOR)}catch{console.info("Unable to get Connected Connector")}},setConnectedSocialProvider(e){try{ee.setItem(J.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set Connected Social Provider")}},getConnectedSocialProvider(){try{return ee.getItem(J.CONNECTED_SOCIAL)}catch{console.info("Unable to get Connected Social Provider")}},getConnectedSocialUsername(){try{return ee.getItem(J.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get Connected Social Username")}},getStoredActiveCaipNetwork(){const e=ee.getItem(J.ACTIVE_CAIP_NETWORK_ID),t=v.getAllRequestedCaipNetworks();return t==null?void 0:t.find(i=>i.caipNetworkId===e)}},de=j({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),co={state:de,subscribeNetworkImages(e){return Se(de.networkImages,()=>e(de.networkImages))},subscribeKey(e,t){return le(de,e,t)},subscribe(e){return Se(de,()=>e(de))},setWalletImage(e,t){de.walletImages[e]=t},setNetworkImage(e,t){de.networkImages[e]=t},setChainImage(e,t){de.chainImages[e]=t},setConnectorImage(e,t){de.connectorImages[e]=t},setTokenImage(e,t){de.tokenImages[e]=t},setCurrencyImage(e,t){de.currencyImages[e]=t}},h0=P.getApiUrl(),Q=new lr({baseUrl:h0,clientId:null}),g0="40",li="4",w0=20,K=j({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedRDNS:[]}),k={state:K,subscribeKey(e,t){return le(K,e,t)},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:o}=R.state;return{"x-project-id":e,"x-sdk-type":t||"appkit","x-sdk-version":o||"html-wagmi-4.2.2"}},_filterOutExtensions(e){return R.state.isUniversalProvider?e.filter(t=>!!(t.mobile_link||t.desktop_link||t.webapp_link)):e},async _fetchWalletImage(e){const t=`${Q.baseUrl}/getWalletImage/${e}`,o=await Q.getBlob({path:t,headers:k._getApiHeaders()});co.setWalletImage(e,URL.createObjectURL(o))},async _fetchNetworkImage(e){const t=`${Q.baseUrl}/public/getAssetImage/${e}`,o=await Q.getBlob({path:t,headers:k._getApiHeaders()});co.setNetworkImage(e,URL.createObjectURL(o))},async _fetchConnectorImage(e){const t=`${Q.baseUrl}/public/getAssetImage/${e}`,o=await Q.getBlob({path:t,headers:k._getApiHeaders()});co.setConnectorImage(e,URL.createObjectURL(o))},async _fetchCurrencyImage(e){const t=`${Q.baseUrl}/public/getCurrencyImage/${e}`,o=await Q.getBlob({path:t,headers:k._getApiHeaders()});co.setCurrencyImage(e,URL.createObjectURL(o))},async _fetchTokenImage(e){const t=`${Q.baseUrl}/public/getTokenImage/${e}`,o=await Q.getBlob({path:t,headers:k._getApiHeaders()});co.setTokenImage(e,URL.createObjectURL(o))},async fetchNetworkImages(){const e=v.getAllRequestedCaipNetworks(),t=e==null?void 0:e.map(({assets:o})=>o==null?void 0:o.imageId).filter(Boolean);t&&await Promise.allSettled(t.map(o=>k._fetchNetworkImage(o)))},async fetchConnectorImages(){const{connectors:e}=Qo.state,t=e.map(({imageId:o})=>o).filter(Boolean);await Promise.allSettled(t.map(o=>k._fetchConnectorImage(o)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(t=>k._fetchCurrencyImage(t)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(t=>k._fetchTokenImage(t)))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=R.state;if(e!=null&&e.length){const{data:t}=await Q.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:"1",entries:e!=null&&e.length?String(e.length):li,include:e==null?void 0:e.join(",")}});t.sort((i,a)=>e.indexOf(i.id)-e.indexOf(a.id));const o=t.map(i=>i.image_id).filter(Boolean);await Promise.allSettled(o.map(i=>k._fetchWalletImage(i))),K.featured=t}},async fetchRecommendedWallets(){var e;try{const{includeWalletIds:t,excludeWalletIds:o,featuredWalletIds:i}=R.state,a=[...o??[],...i??[]].filter(Boolean),{data:r,count:s}=await Q.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:"1",chains:(e=v.state.activeCaipNetwork)==null?void 0:e.caipNetworkId,entries:li,include:t==null?void 0:t.join(","),exclude:a==null?void 0:a.join(",")}}),l=_e.getRecentWallets(),f=r.map(S=>S.image_id).filter(Boolean),y=l.map(S=>S.image_id).filter(Boolean);await Promise.allSettled([...f,...y].map(S=>k._fetchWalletImage(S))),K.recommended=r,K.count=s??0}catch{}},async fetchWallets({page:e}){var f;const{includeWalletIds:t,excludeWalletIds:o,featuredWalletIds:i}=R.state,a=[...K.recommended.map(({id:y})=>y),...o??[],...i??[]].filter(Boolean),{data:r,count:s}=await Q.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:String(e),entries:g0,chains:(f=v.state.activeCaipNetwork)==null?void 0:f.caipNetworkId,include:t==null?void 0:t.join(","),exclude:a.join(",")}}),l=r.slice(0,w0).map(y=>y.image_id).filter(Boolean);await Promise.allSettled(l.map(y=>k._fetchWalletImage(y))),K.wallets=P.uniqueBy([...K.wallets,...k._filterOutExtensions(r)],"id"),K.count=s>K.count?s:K.count,K.page=e},async searchWalletByIds({ids:e}){var o;const{data:t}=await Q.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:"1",entries:String(e.length),chains:(o=v.state.activeCaipNetwork)==null?void 0:o.caipNetworkId,include:e==null?void 0:e.join(",")}});t&&t.forEach(i=>{i!=null&&i.rdns&&K.excludedRDNS.push(i.rdns)})},async searchWallet({search:e}){var r;const{includeWalletIds:t,excludeWalletIds:o}=R.state;K.search=[];const{data:i}=await Q.get({path:"/getWallets",headers:k._getApiHeaders(),params:{page:"1",entries:"100",search:e==null?void 0:e.trim(),chains:(r=v.state.activeCaipNetwork)==null?void 0:r.caipNetworkId,include:t==null?void 0:t.join(","),exclude:o==null?void 0:o.join(",")}}),a=i.map(s=>s.image_id).filter(Boolean);await Promise.allSettled([...a.map(s=>k._fetchWalletImage(s)),P.wait(300)]),K.search=k._filterOutExtensions(i)},async reFetchWallets(){K.page=1,K.wallets=[],await k.fetchFeaturedWallets(),await k.fetchRecommendedWallets()},prefetch(){var t;const e=[k.fetchFeaturedWallets(),k.fetchRecommendedWallets(),k.fetchNetworkImages(),k.fetchConnectorImages()];(t=R.state.features)!=null&&t.analytics&&e.push(k.fetchAnalyticsConfig()),K.prefetchPromise=Promise.race([Promise.allSettled(e)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:e}=await Q.get({path:"/getAnalyticsConfig",headers:k._getApiHeaders()});R.setFeatures({analytics:e})}},Pe=j({loading:!1,open:!1,shake:!1}),xo={state:Pe,subscribe(e){return Se(Pe,()=>e(Pe))},subscribeKey(e,t){return le(Pe,e,t)},async open(e){await k.state.prefetchPromise;const t=v.state.activeCaipAddress,o=v.state.noAdapters;e!=null&&e.view?re.reset(e.view):t?re.reset("Account"):o&&!P.isMobile()?re.reset("ConnectingWalletConnect"):re.reset("Connect"),Pe.open=!0,Ft.set({open:!0}),Qe.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!t}})},close(){const e=!!v.state.activeCaipAddress;Pe.open=!1,Ft.set({open:!1}),Qe.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}})},setLoading(e){Pe.loading=e,Ft.set({loading:e})},shake(){Pe.shake||(Pe.shake=!0,setTimeout(()=>{Pe.shake=!1},500))}},ci={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},f0={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},m0={providers:n0,selectedProvider:null,error:null,purchaseCurrency:ci,paymentCurrency:f0,purchaseCurrencies:[ci],paymentCurrencies:[],quotesLoading:!1};j(m0);j({loading:!1});j({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"});j({suggestions:[],loading:!1});const it=j({message:"",variant:"info",open:!1}),v0={state:it,subscribeKey(e,t){return le(it,e,t)},open(e,t){const{debug:o}=R.state,{shortMessage:i,longMessage:a}=e;o&&(it.message=i,it.variant=t,it.open=!0),a&&console.error(typeof a=="function"?a():a)},close(){it.open=!1,it.message="",it.variant="info"}},b0=h`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var $o=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Et=class extends g{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,u`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){v0.close()}};Et.styles=[m,b0];$o([c()],Et.prototype,"message",void 0);$o([c()],Et.prototype,"backgroundColor",void 0);$o([c()],Et.prototype,"iconColor",void 0);$o([c()],Et.prototype,"icon",void 0);Et=$o([w("wui-alertbar")],Et);const C0=h`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var ft=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let $e=class extends g{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,o)=>{var a;const i=o===this.activeTab;return u`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(o)}
          data-active=${i}
          data-testid="tab-${(a=t.label)==null?void 0:a.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?u`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,o){const i=this.buttons[this.activeTab],a=this.buttons[t],r=i==null?void 0:i.querySelector("wui-text"),s=a==null?void 0:a.querySelector("wui-text"),l=a==null?void 0:a.getBoundingClientRect(),f=s==null?void 0:s.getBoundingClientRect();i&&r&&!o&&t!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),a&&l&&f&&s&&(t!==this.activeTab||o)&&(this.localTabWidth=`${Math.round(l.width+f.width)+6}px`,a.animate([{width:`${l.width+f.width}px`}],{duration:o?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:o?0:125,delay:o?0:200,fill:"forwards",easing:"ease"}))}};$e.styles=[m,A,C0];ft([c({type:Array})],$e.prototype,"tabs",void 0);ft([c()],$e.prototype,"onTabChange",void 0);ft([c({type:Array})],$e.prototype,"buttons",void 0);ft([c({type:Boolean})],$e.prototype,"disabled",void 0);ft([c()],$e.prototype,"localTabWidth",void 0);ft([gt()],$e.prototype,"activeTab",void 0);ft([gt()],$e.prototype,"isDense",void 0);$e=ft([w("wui-tabs")],$e);const x0=h`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var Wr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let _o=class extends g{constructor(){super(...arguments),this.text=""}render(){return u`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?u`<wui-image src=${this.imageSrc}></wui-image>`:u`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};_o.styles=[m,A,x0];Wr([c()],_o.prototype,"imageSrc",void 0);Wr([c()],_o.prototype,"text",void 0);_o=Wr([w("wui-token-button")],_o);const _0=h`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var cr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Yt=class extends g{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,u`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Yt.styles=[m,A,_0];cr([c()],Yt.prototype,"placement",void 0);cr([c()],Yt.prototype,"variant",void 0);cr([c()],Yt.prototype,"message",void 0);Yt=cr([w("wui-tooltip")],Yt);const y0=h`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var mt=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Ue=class extends g{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var o;if(!this.visible)return null;const t=this.amount&&this.price?(o=ln.multiply(this.price,this.amount))==null?void 0:o.toFixed(3):null;return u`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${t?u`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${N.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?u`<wui-text variant="small-400" color="fg-200">
                  ${N.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?u`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?u`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};Ue.styles=[m,A,y0];mt([c()],Ue.prototype,"imageSrc",void 0);mt([c()],Ue.prototype,"name",void 0);mt([c()],Ue.prototype,"symbol",void 0);mt([c()],Ue.prototype,"price",void 0);mt([c()],Ue.prototype,"amount",void 0);mt([gt()],Ue.prototype,"visible",void 0);mt([gt()],Ue.prototype,"imageError",void 0);Ue=mt([w("wui-token-list-item")],Ue);const E0=h`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var ur=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Kt=class extends g{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,u`${this.templateVisual()}`}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:u`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Kt.styles=[m,E0];ur([c()],Kt.prototype,"imageSrc",void 0);ur([c()],Kt.prototype,"alt",void 0);ur([c({type:Boolean})],Kt.prototype,"borderRadiusFull",void 0);Kt=ur([w("wui-visual-thumbnail")],Kt);const S0=h`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var dr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let qt=class extends g{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return u`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};qt.styles=[m,A,S0];dr([c()],qt.prototype,"label",void 0);dr([c()],qt.prototype,"description",void 0);dr([c()],qt.prototype,"icon",void 0);qt=dr([w("wui-notice-card")],qt);const A0=h`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var Hr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};const Cr=100;let yo=class extends g{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(t){super.updated(t),(t.has("textTitle")||t.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var i,a;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".heightContent"),o=(a=this.shadowRoot)==null?void 0:a.querySelector(".textContent");if(t&&o){this.scrollElement=t;const r=o==null?void 0:o.scrollHeight;r&&r>Cr&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}})}render(){return u`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var o;const t=(o=this.shadowRoot)==null?void 0:o.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${Cr}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${Cr}px`}],{duration:300,fill:"forwards",easing:"ease"}),t&&t.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?u` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};yo.styles=[m,A,A0];Hr([c()],yo.prototype,"textTitle",void 0);Hr([c()],yo.prototype,"overflowedContent",void 0);yo=Hr([w("wui-list-accordion")],yo);const R0=h`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var pr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Qt=class extends g{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return u`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?u` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:u`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Qt.styles=[m,A,R0];pr([c()],Qt.prototype,"imageSrc",void 0);pr([c()],Qt.prototype,"textTitle",void 0);pr([c()],Qt.prototype,"textValue",void 0);Qt=pr([w("wui-list-content")],Qt);const T0=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var ro=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let dt=class extends g{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return u`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?u`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?u`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:u`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};dt.styles=[m,A,T0];ro([c()],dt.prototype,"imageSrc",void 0);ro([c()],dt.prototype,"name",void 0);ro([c({type:Boolean})],dt.prototype,"disabled",void 0);ro([c({type:Boolean})],dt.prototype,"selected",void 0);ro([c({type:Boolean})],dt.prototype,"transparent",void 0);dt=ro([w("wui-list-network")],dt);const I0=h`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var io=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let pt=class extends g{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return u`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?u`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:u`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};pt.styles=[m,A,I0];io([c()],pt.prototype,"amount",void 0);io([c()],pt.prototype,"networkCurreny",void 0);io([c()],pt.prototype,"networkImageUrl",void 0);io([c()],pt.prototype,"receiverAddress",void 0);io([c()],pt.prototype,"addressExplorerUrl",void 0);pt=io([w("wui-list-wallet-transaction")],pt);const k0=h`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`;var Ni=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Xo=class extends g{constructor(){super(...arguments),this.text=""}render(){return u`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};Xo.styles=[m,A,k0];Ni([c()],Xo.prototype,"text",void 0);Xo=Ni([w("wui-promo")],Xo);const N0=h`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var Vr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Eo=class extends g{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return u`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Eo.styles=[m,N0];Vr([c()],Eo.prototype,"dollars",void 0);Vr([c()],Eo.prototype,"pennies",void 0);Eo=Vr([w("wui-balance")],Eo);const P0=h`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var ao=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let ht=class extends g{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return u`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${N.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?u`<wui-image src=${this.networkSrc}></wui-image>`:u`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ht.styles=[m,A,P0];ao([c()],ht.prototype,"networkSrc",void 0);ao([c()],ht.prototype,"avatarSrc",void 0);ao([c()],ht.prototype,"profileName",void 0);ao([c()],ht.prototype,"address",void 0);ao([c()],ht.prototype,"icon",void 0);ht=ao([w("wui-profile-button")],ht);const O0=h`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Pt=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Xe=class extends g{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=_e.getConnectedConnector(),this.shouldShowIcon=this.connectedConnector==="AUTH"}render(){return u`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${N.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(t){var o,i;if(t.target instanceof HTMLElement&&t.target.id==="copy-address"){(o=this.onCopyClick)==null||o.call(this,t);return}(i=this.onProfileClick)==null||i.call(this,t)}getIconTemplate(t){return u`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${t||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};Xe.styles=[m,A,O0];Pt([c()],Xe.prototype,"avatarSrc",void 0);Pt([c()],Xe.prototype,"profileName",void 0);Pt([c()],Xe.prototype,"address",void 0);Pt([c()],Xe.prototype,"icon",void 0);Pt([c()],Xe.prototype,"onProfileClick",void 0);Pt([c()],Xe.prototype,"onCopyClick",void 0);Xe=Pt([w("wui-profile-button-v2")],Xe);const M0=h`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var Ot=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Je=class extends g{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t=this.size==="sm"?"small-600":"paragraph-600";return u`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?u`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};Je.styles=[m,A,M0];Ot([c()],Je.prototype,"variant",void 0);Ot([c()],Je.prototype,"imageSrc",void 0);Ot([c({type:Boolean})],Je.prototype,"disabled",void 0);Ot([c()],Je.prototype,"icon",void 0);Ot([c()],Je.prototype,"size",void 0);Ot([c()],Je.prototype,"text",void 0);Je=Ot([w("wui-chip-button")],Je);const $0=h`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var Zr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let So=class extends g{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return u`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const t=this.networkImages.slice(0,5);return u` <wui-flex class="networks">
      ${t==null?void 0:t.map(o=>u` <wui-flex class="network-icon"> <wui-image src=${o}></wui-image> </wui-flex>`)}
    </wui-flex>`}};So.styles=[m,A,$0];Zr([c({type:Array})],So.prototype,"networkImages",void 0);Zr([c()],So.prototype,"text",void 0);So=Zr([w("wui-compatible-network")],So);const U0=h`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Gr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Ao=class extends g{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return u`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Ao.styles=[m,A,U0];Gr([c()],Ao.prototype,"icon",void 0);Gr([c()],Ao.prototype,"text",void 0);Ao=Gr([w("wui-banner")],Ao);const D0=h`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var hr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Xt=class extends g{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return u`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Xt.styles=[m,A,D0];hr([c()],Xt.prototype,"imageSrc",void 0);hr([c()],Xt.prototype,"text",void 0);hr([c()],Xt.prototype,"size",void 0);Xt=hr([w("wui-banner-img")],Xt);const L0=h`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Mt=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let et=class extends g{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return u`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${N.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?u`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:u`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};et.styles=[m,A,L0];Mt([c()],et.prototype,"tokenName",void 0);Mt([c()],et.prototype,"tokenImageUrl",void 0);Mt([c({type:Number})],et.prototype,"tokenValue",void 0);Mt([c()],et.prototype,"tokenAmount",void 0);Mt([c()],et.prototype,"tokenCurrency",void 0);Mt([c({type:Boolean})],et.prototype,"clickable",void 0);et=Mt([w("wui-list-token")],et);const B0=h`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var vt=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let De=class extends g{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return u`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?u` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:u`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};De.styles=[m,A,B0];vt([c()],De.prototype,"icon",void 0);vt([c()],De.prototype,"text",void 0);vt([c()],De.prototype,"description",void 0);vt([c()],De.prototype,"tag",void 0);vt([c()],De.prototype,"iconBackgroundColor",void 0);vt([c()],De.prototype,"iconColor",void 0);vt([c({type:Boolean})],De.prototype,"disabled",void 0);De=vt([w("wui-list-description")],De);const j0=h`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,F0=/[.*+?^${}()|[\]\\]/gu,z0=/[0-9,.]/u;var gr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Jt=class extends g{constructor(){super(...arguments),this.inputElementRef=Or(),this.disabled=!1,this.value="",this.placeholder="0"}render(){var t;return(t=this.inputElementRef)!=null&&t.value&&this.value&&(this.inputElementRef.value.value=this.value),u`<input
      ${Mr(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(t){var i,a;const o=t.data;if(o&&((i=this.inputElementRef)!=null&&i.value))if(o===","){const r=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=r,this.value=`${this.value}${r}`}else z0.test(o)||(this.inputElementRef.value.value=this.value.replace(new RegExp(o.replace(F0,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:(a=this.inputElementRef.value)==null?void 0:a.value,bubbles:!0,composed:!0}))}};Jt.styles=[m,A,j0];gr([c({type:Boolean})],Jt.prototype,"disabled",void 0);gr([c({type:String})],Jt.prototype,"value",void 0);gr([c({type:String})],Jt.prototype,"placeholder",void 0);Jt=gr([w("wui-input-amount")],Jt);const W0=h`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var Uo=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let St=class extends g{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return u`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?u`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?u`<wui-image src=${this.imageSrc}></wui-image>`:u`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};St.styles=[m,A,W0];Uo([c()],St.prototype,"text",void 0);Uo([c()],St.prototype,"address",void 0);Uo([c()],St.prototype,"imageSrc",void 0);Uo([c({type:Boolean})],St.prototype,"isAddress",void 0);St=Uo([w("wui-preview-item")],St);const H0=h`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var mi;typeof window<"u"&&(window.Buffer||(window.Buffer=vi.Buffer),window.global||(window.global=window),window.process||(window.process={}),(mi=window.process)!=null&&mi.env||(window.process={env:{}}));const V0={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@appkit-wallet/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",FRAME_READY:"@w3m-frame/READY",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},Ro={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},G=n.object({message:n.string()});function x(e){return n.literal(V0[e])}n.object({accessList:n.array(n.string()),blockHash:n.string().nullable(),blockNumber:n.string().nullable(),chainId:n.string().or(n.number()),from:n.string(),gas:n.string(),hash:n.string(),input:n.string().nullable(),maxFeePerGas:n.string(),maxPriorityFeePerGas:n.string(),nonce:n.string(),r:n.string(),s:n.string(),to:n.string(),transactionIndex:n.string().nullable(),type:n.string(),v:n.string(),value:n.string()});const Z0=n.object({chainId:n.string().or(n.number())}),G0=n.object({email:n.string().email()}),Y0=n.object({otp:n.string()}),K0=n.object({uri:n.string()}),q0=n.object({chainId:n.optional(n.string().or(n.number())),preferredAccountType:n.optional(n.string())}),Q0=n.object({provider:n.enum(["google","github","apple","facebook","x","discord"])}),X0=n.object({email:n.string().email()}),J0=n.object({otp:n.string()}),el=n.object({otp:n.string()}),tl=n.object({themeMode:n.optional(n.enum(["light","dark"])),themeVariables:n.optional(n.record(n.string(),n.string().or(n.number()))),w3mThemeVariables:n.optional(n.record(n.string(),n.string()))}),ol=n.object({metadata:n.object({name:n.string(),description:n.string(),url:n.string(),icons:n.array(n.string())}).optional(),sdkVersion:n.string().optional(),sdkType:n.string().optional(),projectId:n.string()}),rl=n.object({type:n.string()}),il=n.object({action:n.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),al=n.object({url:n.string()}),nl=n.object({userName:n.string()}),sl=n.object({email:n.string(),address:n.string(),chainId:n.string().or(n.number()),accounts:n.array(n.object({address:n.string(),type:n.enum([Ro.ACCOUNT_TYPES.EOA,Ro.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),userName:n.string().optional()}),ll=n.object({action:n.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),cl=n.object({email:n.string().email().optional().nullable(),address:n.string(),chainId:n.string().or(n.number()),smartAccountDeployed:n.optional(n.boolean()),accounts:n.array(n.object({address:n.string(),type:n.enum([Ro.ACCOUNT_TYPES.EOA,Ro.ACCOUNT_TYPES.SMART_ACCOUNT])})).optional(),preferredAccountType:n.optional(n.string())}),ul=n.object({uri:n.string()}),dl=n.object({isConnected:n.boolean()}),pl=n.object({chainId:n.string().or(n.number())}),hl=n.object({chainId:n.string().or(n.number())}),gl=n.object({newEmail:n.string().email()}),wl=n.object({smartAccountEnabledNetworks:n.array(n.number())});n.object({address:n.string(),isDeployed:n.boolean()});const fl=n.object({version:n.string().optional()}),ml=n.object({type:n.string(),address:n.string()}),vl=n.any(),bl=n.object({method:n.literal("eth_accounts")}),Cl=n.object({method:n.literal("eth_blockNumber")}),xl=n.object({method:n.literal("eth_call"),params:n.array(n.any())}),_l=n.object({method:n.literal("eth_chainId")}),yl=n.object({method:n.literal("eth_estimateGas"),params:n.array(n.any())}),El=n.object({method:n.literal("eth_feeHistory"),params:n.array(n.any())}),Sl=n.object({method:n.literal("eth_gasPrice")}),Al=n.object({method:n.literal("eth_getAccount"),params:n.array(n.any())}),Rl=n.object({method:n.literal("eth_getBalance"),params:n.array(n.any())}),Tl=n.object({method:n.literal("eth_getBlockByHash"),params:n.array(n.any())}),Il=n.object({method:n.literal("eth_getBlockByNumber"),params:n.array(n.any())}),kl=n.object({method:n.literal("eth_getBlockReceipts"),params:n.array(n.any())}),Nl=n.object({method:n.literal("eth_getBlockTransactionCountByHash"),params:n.array(n.any())}),Pl=n.object({method:n.literal("eth_getBlockTransactionCountByNumber"),params:n.array(n.any())}),Ol=n.object({method:n.literal("eth_getCode"),params:n.array(n.any())}),Ml=n.object({method:n.literal("eth_getFilterChanges"),params:n.array(n.any())}),$l=n.object({method:n.literal("eth_getFilterLogs"),params:n.array(n.any())}),Ul=n.object({method:n.literal("eth_getLogs"),params:n.array(n.any())}),Dl=n.object({method:n.literal("eth_getProof"),params:n.array(n.any())}),Ll=n.object({method:n.literal("eth_getStorageAt"),params:n.array(n.any())}),Bl=n.object({method:n.literal("eth_getTransactionByBlockHashAndIndex"),params:n.array(n.any())}),jl=n.object({method:n.literal("eth_getTransactionByBlockNumberAndIndex"),params:n.array(n.any())}),Fl=n.object({method:n.literal("eth_getTransactionByHash"),params:n.array(n.any())}),zl=n.object({method:n.literal("eth_getTransactionCount"),params:n.array(n.any())}),Wl=n.object({method:n.literal("eth_getTransactionReceipt"),params:n.array(n.any())}),Hl=n.object({method:n.literal("eth_getUncleCountByBlockHash"),params:n.array(n.any())}),Vl=n.object({method:n.literal("eth_getUncleCountByBlockNumber"),params:n.array(n.any())}),Zl=n.object({method:n.literal("eth_maxPriorityFeePerGas")}),Gl=n.object({method:n.literal("eth_newBlockFilter")}),Yl=n.object({method:n.literal("eth_newFilter"),params:n.array(n.any())}),Kl=n.object({method:n.literal("eth_newPendingTransactionFilter")}),ql=n.object({method:n.literal("eth_sendRawTransaction"),params:n.array(n.any())}),Ql=n.object({method:n.literal("eth_syncing"),params:n.array(n.any())}),Xl=n.object({method:n.literal("eth_uninstallFilter"),params:n.array(n.any())}),ui=n.object({method:n.literal("personal_sign"),params:n.array(n.any())}),Jl=n.object({method:n.literal("eth_signTypedData_v4"),params:n.array(n.any())}),di=n.object({method:n.literal("eth_sendTransaction"),params:n.array(n.any())}),ec=n.object({method:n.literal("solana_signMessage"),params:n.object({message:n.string(),pubkey:n.string()})}),tc=n.object({method:n.literal("solana_signTransaction"),params:n.object({transaction:n.string()})}),oc=n.object({method:n.literal("solana_signAllTransactions"),params:n.object({transactions:n.array(n.string())})}),rc=n.object({method:n.literal("solana_signAndSendTransaction"),params:n.object({transaction:n.string(),options:n.object({skipPreflight:n.boolean().optional(),preflightCommitment:n.enum(["processed","confirmed","finalized","recent","single","singleGossip","root","max"]).optional(),maxRetries:n.number().optional(),minContextSlot:n.number().optional()}).optional()})}),ic=n.object({method:n.literal("wallet_sendCalls"),params:n.array(n.object({chainId:n.string().or(n.number()).optional(),from:n.string().optional(),version:n.string().optional(),capabilities:n.any().optional(),calls:n.array(n.object({to:n.string().startsWith("0x"),data:n.string().startsWith("0x").optional(),value:n.string().optional()}))}))}),ac=n.object({method:n.literal("wallet_getCallsStatus"),params:n.array(n.string())}),nc=n.object({method:n.literal("wallet_getCapabilities")}),sc=n.object({method:n.literal("wallet_grantPermissions"),params:n.array(n.any())}),pi=n.object({token:n.string()}),_=n.object({id:n.string().optional()});_.extend({type:x("APP_SWITCH_NETWORK"),payload:Z0}).or(_.extend({type:x("APP_CONNECT_EMAIL"),payload:G0})).or(_.extend({type:x("APP_CONNECT_DEVICE")})).or(_.extend({type:x("APP_CONNECT_OTP"),payload:Y0})).or(_.extend({type:x("APP_CONNECT_SOCIAL"),payload:K0})).or(_.extend({type:x("APP_GET_FARCASTER_URI")})).or(_.extend({type:x("APP_CONNECT_FARCASTER")})).or(_.extend({type:x("APP_GET_USER"),payload:n.optional(q0)})).or(_.extend({type:x("APP_GET_SOCIAL_REDIRECT_URI"),payload:Q0})).or(_.extend({type:x("APP_SIGN_OUT")})).or(_.extend({type:x("APP_IS_CONNECTED"),payload:n.optional(pi)})).or(_.extend({type:x("APP_GET_CHAIN_ID")})).or(_.extend({type:x("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(_.extend({type:x("APP_INIT_SMART_ACCOUNT")})).or(_.extend({type:x("APP_SET_PREFERRED_ACCOUNT"),payload:rl})).or(_.extend({type:x("APP_RPC_REQUEST"),payload:ui.or(di).or(bl).or(Cl).or(xl).or(_l).or(yl).or(El).or(Sl).or(Al).or(Rl).or(Tl).or(Il).or(kl).or(Nl).or(Pl).or(Ol).or(Ml).or($l).or(Ul).or(Dl).or(Ll).or(Bl).or(jl).or(Fl).or(zl).or(Wl).or(Hl).or(Vl).or(Zl).or(Gl).or(Yl).or(Kl).or(ql).or(Ql).or(Xl).or(ui).or(Jl).or(di).or(ec).or(tc).or(oc).or(rc).or(ac).or(ic).or(nc).or(sc)})).or(_.extend({type:x("APP_UPDATE_EMAIL"),payload:X0})).or(_.extend({type:x("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:J0})).or(_.extend({type:x("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:el})).or(_.extend({type:x("APP_SYNC_THEME"),payload:tl})).or(_.extend({type:x("APP_SYNC_DAPP_DATA"),payload:ol})),_.extend({type:x("FRAME_SWITCH_NETWORK_ERROR"),payload:G}).or(_.extend({type:x("FRAME_SWITCH_NETWORK_SUCCESS"),payload:hl})).or(_.extend({type:x("FRAME_CONNECT_EMAIL_SUCCESS"),payload:il})).or(_.extend({type:x("FRAME_CONNECT_EMAIL_ERROR"),payload:G})).or(_.extend({type:x("FRAME_GET_FARCASTER_URI_SUCCESS"),payload:al})).or(_.extend({type:x("FRAME_GET_FARCASTER_URI_ERROR"),payload:G})).or(_.extend({type:x("FRAME_CONNECT_FARCASTER_SUCCESS"),payload:nl})).or(_.extend({type:x("FRAME_CONNECT_FARCASTER_ERROR"),payload:G})).or(_.extend({type:x("FRAME_CONNECT_OTP_ERROR"),payload:G})).or(_.extend({type:x("FRAME_CONNECT_OTP_SUCCESS")})).or(_.extend({type:x("FRAME_CONNECT_DEVICE_ERROR"),payload:G})).or(_.extend({type:x("FRAME_CONNECT_DEVICE_SUCCESS")})).or(_.extend({type:x("FRAME_CONNECT_SOCIAL_SUCCESS"),payload:sl})).or(_.extend({type:x("FRAME_CONNECT_SOCIAL_ERROR"),payload:G})).or(_.extend({type:x("FRAME_GET_USER_ERROR"),payload:G})).or(_.extend({type:x("FRAME_GET_USER_SUCCESS"),payload:cl})).or(_.extend({type:x("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"),payload:G})).or(_.extend({type:x("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),payload:ul})).or(_.extend({type:x("FRAME_SIGN_OUT_ERROR"),payload:G})).or(_.extend({type:x("FRAME_SIGN_OUT_SUCCESS")})).or(_.extend({type:x("FRAME_IS_CONNECTED_ERROR"),payload:G})).or(_.extend({type:x("FRAME_IS_CONNECTED_SUCCESS"),payload:dl})).or(_.extend({type:x("FRAME_GET_CHAIN_ID_ERROR"),payload:G})).or(_.extend({type:x("FRAME_GET_CHAIN_ID_SUCCESS"),payload:pl})).or(_.extend({type:x("FRAME_RPC_REQUEST_ERROR"),payload:G})).or(_.extend({type:x("FRAME_RPC_REQUEST_SUCCESS"),payload:vl})).or(_.extend({type:x("FRAME_SESSION_UPDATE"),payload:pi})).or(_.extend({type:x("FRAME_UPDATE_EMAIL_ERROR"),payload:G})).or(_.extend({type:x("FRAME_UPDATE_EMAIL_SUCCESS"),payload:ll})).or(_.extend({type:x("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:G})).or(_.extend({type:x("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(_.extend({type:x("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:G})).or(_.extend({type:x("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:gl})).or(_.extend({type:x("FRAME_SYNC_THEME_ERROR"),payload:G})).or(_.extend({type:x("FRAME_SYNC_THEME_SUCCESS")})).or(_.extend({type:x("FRAME_SYNC_DAPP_DATA_ERROR"),payload:G})).or(_.extend({type:x("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(_.extend({type:x("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:wl})).or(_.extend({type:x("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:G})).or(_.extend({type:x("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:G})).or(_.extend({type:x("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:ml})).or(_.extend({type:x("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:G})).or(_.extend({type:x("FRAME_READY"),payload:fl}));var Do=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let At=class extends g{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=_e.getConnectedConnector(),this.labels=he.state.addressLabels,this.caipNetwork=v.state.activeCaipNetwork,this.socialProvider=_e.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){var t;super.connectedCallback(),ae.getBalance(this.accountAddress,(t=this.caipNetwork)==null?void 0:t.caipNetworkId).then(o=>{let i=this.balance;o.balances.length>0&&(i=o.balances.reduce((a,r)=>a+((r==null?void 0:r.value)||0),0)),this.balance=i,this.fetchingBalance=!1,this.requestUpdate()})}render(){const t=this.getLabel();return this.shouldShowIcon=this.connectedConnector==="AUTH",u`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?u`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===Ro.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:u`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${N.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${t}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${this.fetchingBalance?u`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:u` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
          <slot name="action"></slot>
        </wui-flex>
      </wui-flex>
    `}getLabel(){var o;let t=(o=this.labels)==null?void 0:o.get(this.accountAddress);return!t&&this.connectedConnector==="AUTH"?t=`${this.accountType==="eoa"?this.socialProvider??"Email":"Smart"} Account`:!t&&this.connectedConnector==="INJECTED"||this.connectedConnector==="ANNOUNCED"?t="Injected Account":t||(t="EOA"),t}};At.styles=[m,A,H0];Do([c()],At.prototype,"accountAddress",void 0);Do([c()],At.prototype,"accountType",void 0);Do([c({type:Boolean})],At.prototype,"selected",void 0);Do([c({type:Function})],At.prototype,"onSelect",void 0);At=Do([w("wui-list-account")],At);const lc=h`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var Yr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let To=class extends g{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return u`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};To.styles=[m,A,lc];Yr([c()],To.prototype,"text",void 0);Yr([c()],To.prototype,"icon",void 0);To=Yr([w("wui-icon-button")],To);const cc=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Kr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Io=class extends g{constructor(){super(...arguments),this.text="",this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Io.styles=[m,A,cc];Kr([c()],Io.prototype,"text",void 0);Kr([c({type:Boolean})],Io.prototype,"disabled",void 0);Io=Kr([w("wui-list-button")],Io);const uc=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Lo=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Rt=class extends g{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return u`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return this.align==="center"?u` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};Rt.styles=[m,A,uc];Lo([c()],Rt.prototype,"logo",void 0);Lo([c()],Rt.prototype,"name",void 0);Lo([c()],Rt.prototype,"align",void 0);Lo([c({type:Boolean})],Rt.prototype,"disabled",void 0);Rt=Lo([w("wui-list-social")],Rt);const dc=h`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var Pi=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Jo=class extends g{constructor(){super(...arguments),this.imageSrc=""}render(){return u`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:u`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};Jo.styles=[m,A,tr,dc];Pi([c()],Jo.prototype,"imageSrc",void 0);Jo=Pi([w("wui-select")],Jo);const pc=h`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var me=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let ie=class extends g{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&N.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&N.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&N.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&N.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&N.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&N.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&N.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&N.getSpacingStyles(this.margin,3)};
    `,u`<slot></slot>`}};ie.styles=[m,pc];me([c()],ie.prototype,"gridTemplateRows",void 0);me([c()],ie.prototype,"gridTemplateColumns",void 0);me([c()],ie.prototype,"justifyItems",void 0);me([c()],ie.prototype,"alignItems",void 0);me([c()],ie.prototype,"justifyContent",void 0);me([c()],ie.prototype,"alignContent",void 0);me([c()],ie.prototype,"columnGap",void 0);me([c()],ie.prototype,"rowGap",void 0);me([c()],ie.prototype,"gap",void 0);me([c()],ie.prototype,"padding",void 0);me([c()],ie.prototype,"margin",void 0);ie=me([w("wui-grid")],ie);const hc=h`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var Oi=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let er=class extends g{constructor(){super(...arguments),this.text=""}render(){return u`${this.template()}`}template(){return this.text?u`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};er.styles=[m,hc];Oi([c()],er.prototype,"text",void 0);er=Oi([w("wui-separator")],er);var kr;(function(e){e.EQUAL="EQUAL",e.GREATER_THAN="GREATER_THAN",e.LESS_THAN="LESS_THAN"})(kr||(kr={}));var Nr;(function(e){e.Call="Call",e.DelegateCall="DelegateCall"})(Nr||(Nr={}));const O={UNSUPPORTED_NAMESPACE:"Unsupported namespace",NO_RESPONSE_RECEIVED:"No response received from grantPermissions",INVALID_REQUEST:"Invalid request structure",INVALID_CHAIN_ID_FORMAT:'Invalid chainId: must start with "0x"',INVALID_CHAIN_ID_DATA:'Invalid chainId format: Must be a hexadecimal string starting with "0x"',INVALID_ADDRESS:'Invalid address: must be a string starting with "0x"',INVALID_EXPIRY:"Invalid expiry: Expiry must be a future timestamp",INVALID_KEYS_SIGNER:"A set of public keys is required for multiKey signers",UNSUPPORTED_SIGNER_TYPE:"Unsupported signer type",UNSUPPORTED_KEY_TYPE:"Unsupported key type: must be secp256r1 or secp256k1",INVALID_PUBLIC_KEY_FORMAT:'Invalid public key: must start with "0x"',INVALID_PERMISSIONS:"Invalid permissions: must be a non-empty array",INVALID_PERMISSIONS_TYPE:"Invalid permissions: Expected array, received object",INVALID_ALLOWANCE_FORMAT:'Invalid allowance: must be a hexadecimal string starting with "0x"',INVALID_START:"Invalid start time: must be a positive integer and in the future",INVALID_PERIOD:"Invalid period: must be a positive integer",INVALID_POLICIES:"Invalid policies: must be a non-empty array",INVALID_POLICIES_TYPE:"Invalid policies: Expected array, received object",INVALID_GRANT_PERMISSIONS_RESPONSE:"Invalid grantPermissions response"},gc=n.string().refine(e=>e.startsWith("0x"),{message:O.INVALID_CHAIN_ID_FORMAT}).refine(e=>/^0x[0-9a-fA-F]+$/u.test(e),{message:O.INVALID_CHAIN_ID_DATA}),wc=n.string({invalid_type_error:O.INVALID_ADDRESS}).startsWith("0x",{message:O.INVALID_ADDRESS}).optional(),fc=n.number().positive({message:O.INVALID_EXPIRY}).refine(e=>e>Math.floor(Date.now()/1e3),{message:O.INVALID_EXPIRY}),mc=n.object({type:n.enum(["secp256r1","secp256k1"],{errorMap:()=>({message:O.UNSUPPORTED_KEY_TYPE})}),publicKey:n.string().refine(e=>e.startsWith("0x"),{message:O.INVALID_PUBLIC_KEY_FORMAT})}),vc=n.object({type:n.literal("keys"),data:n.object({keys:n.array(mc).min(1,{message:O.INVALID_KEYS_SIGNER})})}),bc=n.object({operator:n.nativeEnum(kr,{errorMap:()=>({message:"Invalid operator type"})}),value:n.string().startsWith("0x",{message:O.INVALID_ADDRESS})}),Cc=n.object({functionName:n.string(),args:n.array(bc).optional(),valueLimit:n.string().startsWith("0x",{message:O.INVALID_ADDRESS}).optional(),operation:n.nativeEnum(Nr).optional()}),xc=n.object({type:n.literal("contract-call"),data:n.object({address:n.string().startsWith("0x",{message:O.INVALID_ADDRESS}),abi:n.array(n.record(n.unknown())),functions:n.array(Cc)})}),_c=n.object({type:n.literal("native-token-recurring-allowance"),data:n.object({allowance:n.string().startsWith("0x",{message:O.INVALID_ALLOWANCE_FORMAT}),start:n.number().positive({message:O.INVALID_START}).refine(e=>e>Math.floor(Date.now()/1e3),{message:O.INVALID_START}),period:n.number().positive({message:O.INVALID_PERIOD})})}),yc=n.object({type:n.literal("erc20-recurring-allowance"),data:n.object({token:n.string().startsWith("0x",{message:O.INVALID_ADDRESS}),allowance:n.string().startsWith("0x",{message:O.INVALID_ALLOWANCE_FORMAT}),start:n.number().positive({message:O.INVALID_START}).refine(e=>e>Math.floor(Date.now()/1e3),{message:O.INVALID_START}),period:n.number().positive({message:O.INVALID_PERIOD})})}),Ec=n.union([xc,_c,yc]),Sc=n.object({type:n.string(),data:n.record(n.unknown())}),Ac=n.object({chainId:gc,address:wc,expiry:fc,signer:vc,permissions:n.array(Ec).nonempty({message:O.INVALID_PERMISSIONS}),policies:n.array(Sc)}).strict(),Rc={COSIGNER_BASE_URL:"https://rpc.walletconnect.org/v1/sessions"},Tc="wallet_grantPermissions";function Ic(e){try{return Ac.parse(e)}catch(t){if(t instanceof Ui){const o=t.errors.map(i=>`Invalid ${i.path.join(".")||"Unknown field"}: ${i.message}`).join("; ");throw new Error(o)}throw t}}function kc(e){return!!e&&typeof e=="string"&&e.startsWith("eip155:")&&e.split(":").length===3}function hi(e){if(!kc(e))throw new Error(O.UNSUPPORTED_NAMESPACE);const[,t,o]=e.split(":");return t&&(o!=null&&o.startsWith("0x"))?{chain:t,address:o}:void 0}function Nc(e){if(!e)throw new Error(O.NO_RESPONSE_RECEIVED);if(typeof e=="object"&&e!==null&&"permissions"in e&&"context"in e&&"expiry"in e&&"signer"in e&&"chainId"in e)return e;throw new Error(O.INVALID_GRANT_PERMISSIONS_RESPONSE)}function Pc(e,t){var o;switch(e.signer.type){case"keys":{Array.isArray((o=e.signer.data)==null?void 0:o.keys)&&e.signer.data.keys.unshift(t);break}default:throw new Error(O.UNSUPPORTED_SIGNER_TYPE)}}function Oc(e){if(typeof e!="object"||e===null)throw new Error("Response is not an object");const{pci:t,key:o}=e;if(typeof t!="string")throw new Error("pci is not a string");if(typeof o!="object"||o===null)throw new Error("key is not an object");const{type:i,publicKey:a}=o;if(i.toLowerCase()!=="secp256k1"&&i!=="secp256r1")throw new Error("Invalid key type");if(typeof a!="string"||!a.startsWith("0x"))throw new Error("Invalid public key format")}class gi extends Error{constructor(t,o){super(o),this.status=t,this.name="CoSignerApiError"}}async function xr({url:e,request:t,queryParams:o={},headers:i,transformRequest:a}){try{const r=a?a(t):t;return(await qr.post(e,r,{params:o,headers:i})).data}catch(r){if(qr.isAxiosError(r)){const s=r;throw s.response?new gi(s.response.status,JSON.stringify(s.response.data)):new gi(500,"Network error")}throw r}}class wi{constructor(t){if(this.baseUrl=Rc.COSIGNER_BASE_URL,!t)throw new Error("Project ID must be provided");this.projectId=t}async addPermission(t,o){const i=`${this.baseUrl}/${encodeURIComponent(t)}`,a=await xr({url:i,request:o,queryParams:{projectId:this.projectId},headers:{"Content-Type":"application/json"}});return Oc(a),a}async activatePermissions(t,o){const i=`${this.baseUrl}/${encodeURIComponent(t)}/activate`;await xr({url:i,request:o,queryParams:{projectId:this.projectId},headers:{"Content-Type":"application/json"}})}async revokePermissions(t,o,i){const a=`${this.baseUrl}/${encodeURIComponent(t)}/revoke`;await xr({url:a,request:{pci:o,signature:i},queryParams:{projectId:this.projectId},headers:{"Content-Type":"application/json"}})}}const pe=j({providers:{eip155:void 0,solana:void 0,polkadot:void 0},providerIds:{eip155:void 0,solana:void 0,polkadot:void 0}}),Mc={state:pe,subscribeKey(e,t){return le(pe,e,t)},subscribeProviders(e){return Se(pe.providers,()=>e(pe.providers))},setProvider(e,t){t&&(pe.providers[e]=Ve(t))},getProvider(e){return pe.providers[e]},setProviderId(e,t){t&&(pe.providerIds[e]=t)},getProviderId(e){return pe.providerIds[e]},reset(){pe.providers={eip155:void 0,solana:void 0,polkadot:void 0},pe.providerIds={eip155:void 0,solana:void 0,polkadot:void 0}},resetChain(e){pe.providers[e]=void 0,pe.providerIds[e]=void 0}},Lt=j({sessions:[]}),zo={state:Lt,subscribeKey(e,t){return le(Lt,e,t)},async getSmartSessions(){try{const e=he.state.caipAddress;if(!e)return[];const t=await ae.getSmartSessions(e);return Lt.sessions=t.pcis.map(o=>({...o,expiry:o.expiry*1e3})),t.pcis}catch{return X.showError("Error fetching smart sessions"),Lt.sessions=[],[]}},async grantPermissions(e){var q;if(Ic(e),!this.isSmartSessionSupported())throw new Error("Wallet does not support `wallet_grantPermissions` method");const{activeCaipAddress:o}=v.state,i=hi(o);if(!o||!i)throw new Error(O.INVALID_ADDRESS);const a=st._getClient(nt.CHAIN.EVM),r=await a.getCapabilities(i.address),s=`0x${parseInt(i.chain,10).toString(16)}`,l=(q=r==null?void 0:r[s])==null?void 0:q.permissions;l&&this.validateRequestForSupportedPermissionsCapability(e,l);const{projectId:f}=R.state,y=new wi(f),S=await y.addPermission(o,e);Pc(e,S.key),re.pushTransactionStack({view:"SmartSessionCreated",goBack:!1});const H=await a.grantPermissions([e]),F=Nc(H);return await y.activatePermissions(o,{pci:S.pci,...F}),{permissions:F.permissions,context:S.pci,expiry:F.expiry,address:F.address||i.address,chainId:F.chainId}},validateRequestForSupportedPermissionsCapability(e,t){if(!t.supported)throw new Error("Wallet does not support permissions capabilities");const o=t.permissionTypes,i=t.signerTypes,a=t.policyTypes;if(e.permissions.forEach(r=>{if(!o.includes(r.type))throw new Error(`Permission type ${r.type} is not supported by the connected wallet`)}),!i.includes(e.signer.type))throw new Error(`Signer type ${e.signer.type} is not supported by the connected wallet`);e.policies.forEach(r=>{if(!a.includes(r.type))throw new Error(`Policy type ${r.type} is not supported by the connected wallet`)})},isSmartSessionSupported(){var i,a;const e=Mc.getProvider(nt.CHAIN.EVM);if(!e)return!1;if(!e.isWalletConnect)return!0;const t=(a=(i=e.session)==null?void 0:i.namespaces)==null?void 0:a[nt.CHAIN.EVM];return((t==null?void 0:t.methods)||[]).includes(Tc)},async revokeSmartSession(e){try{const{activeCaipAddress:t}=v.state,o=hi(t);if(!t||!o)throw new Error(O.INVALID_ADDRESS);const i=st._getClient(nt.CHAIN.EVM),{projectId:a}=R.state,r=new wi(a);re.pushTransactionStack({view:"SmartSessionList",goBack:!1});const s=await i.revokePermissions({pci:e.pci,permissions:[...e.permissions.map(l=>JSON.parse(JSON.stringify(l)))],expiry:Math.floor(e.expiry/1e3),address:t});await r.revokePermissions(t,e.pci,s),Lt.sessions=Lt.sessions.filter(l=>l.pci!==e.pci)}catch{X.showError("Error revoking smart session")}}},$c=h`
  .continue-button-container {
    width: 100%;
  }
`;var Uc=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let Pr=class extends g{render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()}
        <wui-link
          @click=${()=>{P.openHref(nn.URLS.FAQ,"_blank")}}
        >
          What's a Smart Session?
        </wui-link>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onboardingTemplate(){return u` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="fg-100"
          backgroundcolor="inverse-100"
          icon="clock"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Smart Session created successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can manage your session from your account settings.
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return u`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}>
        Got it!
      </wui-button>
    </wui-flex>`}redirectToAccount(){re.replace("Account")}};Pr.styles=$c;Pr=Uc([w("w3m-smart-session-created-view")],Pr);const Dc=h`
  wui-flex {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }

  :host {
    min-height: 100%;
  }

  .group-container {
    max-height: 400px;
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
    overflow: scroll;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .session-container {
    background-color: var(--wui-color-bg-125);
    border-radius: var(--wui-border-radius-xs);
    cursor: pointer;
  }

  .session-project-image {
    border-radius: var(--wui-border-radius-3xs);
    width: 40px;
    height: 40px;
  }
`;var wr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};const Lc=3,Bc=48,jc=430,_r=[{label:"Active"},{label:"Expired"},{label:"Revoked"}];let eo=class extends g{constructor(){super(),this.currentTab=0,this.unsubscribe=[],this.sessions=zo.state.sessions,this.unsubscribe.push(zo.subscribeKey("sessions",t=>{this.sessions=t}))}firstUpdated(){zo.getSmartSessions()}render(){return u`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${P.isMobile()&&window.innerWidth<jc?`${(window.innerWidth-Bc)/Lc}px`:"104px"}
        .tabs=${_r}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}listContentTemplate(){const t=this.sessions.filter(s=>s.revokedAt),o=this.sessions.filter(s=>s.expiry<Date.now()),r=[this.sessions.filter(s=>!s.revokedAt&&s.expiry>Date.now()),o,t][this.currentTab]||[];return r.length?u`${this.groupedSessionsTemplate(r)}`:this.templateNoSessions()}groupedSessionsTemplate(t){function o(s){const l=new Date;return l.setMonth(s),l.toLocaleString("en-US",{month:"long"})}function i(s,l){const f=rn.getYear(),y=o(l);return s===f?y:`${y} ${s}`}const a=t.reduce((s,l)=>{const f=new Date(l.createdAt*1e3),y=f.getFullYear(),S=f.getMonth(),H=s[y]||{},F=H[S]||[];return F.push(l),H[S]=F,s[y]=H,s},{});return Object.keys(a).sort().reverse().map(s=>{const l=parseInt(s,10),f=new Array(12).fill(null).map((y,S)=>{var q;const H=i(l,S),F=(q=a[l])==null?void 0:q[S];return{groupTitle:H,monthSessions:F}}).reverse();return f.map(({groupTitle:y,monthSessions:S},H)=>{const F=H===f.length-1;return S?u`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${F?"true":"false"}"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${y}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="m">
              ${this.templateSessions(S)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateNoSessions(){var o;const t=((o=_r[this.currentTab])==null?void 0:o.label)||"";return u`<wui-flex
      alignItems="center"
      justifyContent="center"
      .padding=${["l","l","l","l"]}
    >
      <wui-text variant="title-400" color="fg-200">No ${t.toLowerCase()} sessions</wui-text>
    </wui-flex>`}templateSessions(t){return t.map(o=>{var a;const{project:i}=o;return u` <wui-flex
        class="session-container"
        gap="s"
        flexDirection="column"
        .padding=${["s","s","s","s"]}
        @click=${this.onSessionClick.bind(this,o)}
      >
        <wui-flex gap="s" alignItems="center" justifyContent="space-between">
          <wui-flex gap="xs">
            ${i.iconUrl?u`<img
                  class="session-project-image"
                  src=${i==null?void 0:i.iconUrl}
                  width="40px"
                  height="40px"
                />`:u`<wui-icon-box
                  size="lg"
                  icon="helpCircle"
                  background="opaque"
                  iconColor="fg-100"
                  backgroundColor="inverse-100"
                ></wui-icon-box>`}
            <wui-flex flexDirection="column">
              <wui-text variant="small-400" color="fg-100"
                >${(i==null?void 0:i.name)||"Unknown Dapp"}</wui-text
              >
              ${i.url?u`<wui-link>${i==null?void 0:i.url}</wui-link>`:null}
            </wui-flex>
          </wui-flex>
          <wui-tag variant=${this.getVariant(o)}
            >${(a=_r[this.currentTab])==null?void 0:a.label}</wui-tag
          >
        </wui-flex>
        ${this.openSession===o.pci?u`<wui-flex>
              ${o.permissions.map(r=>{if(r.type!=="contract-call")return"";const{data:s}=r;return u` <wui-flex flexDirection="column" gap="s">
                  <wui-permission-contract-call
                    .contractAddress=${s.address}
                    .expiry=${o.expiry/1e3}
                    .functions=${s.functions}
                  ></wui-permission-contract-call>
                  ${this.currentTab===0?u`<wui-button
                        @click=${this.revokePermission.bind(this,o)}
                        fullWidth
                        variant="accent"
                      >
                        Revoke
                      </wui-button>`:null}
                </wui-flex>`})}
            </wui-flex>`:null}
      </wui-flex>`})}getVariant(t){return t.revokedAt?"error":t.expiry<Date.now()?"shade":"success"}onSessionClick(t){this.openSession=this.openSession===t.pci?void 0:t.pci}async revokePermission(t){await zo.revokeSmartSession(t),this.requestUpdate()}onTabChange(t){this.currentTab=t}};eo.styles=Dc;wr([gt()],eo.prototype,"currentTab",void 0);wr([gt()],eo.prototype,"sessions",void 0);wr([gt()],eo.prototype,"openSession",void 0);eo=wr([w("w3m-smart-session-list-view")],eo);const Fc=h`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }
`;var fr=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(a<3?s(r):a>3?s(t,o,r):s(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r};let to=class extends g{constructor(){super(...arguments),this.functions=[]}render(){var t;return!this.contractAddress||!this.expiry?null:u`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-details-group>
          <wui-details-group-item name="Type">
            <wui-text variant="small-400" color="fg-100"> Contract Call </wui-text>
          </wui-details-group-item>
          <wui-details-group-item name="Contract">
            <wui-text variant="small-400" color="fg-100">
              ${N.getTruncateString({string:this.contractAddress,truncate:"middle",charsStart:4,charsEnd:4})}
            </wui-text>
          </wui-details-group-item>
          <wui-details-group-item name="Functions">
            <wui-text variant="small-400" color="fg-100">
              ${(t=this.functions)==null?void 0:t.map(o=>o.functionName).join(", ")}
            </wui-text>
          </wui-details-group-item>
          <wui-flex justifyContent="space-between">
            <wui-text color="fg-200">Duration</wui-text>
            <wui-flex flexDirection="column" alignItems="flex-end" gap="s">
              <wui-text variant="small-400" color="fg-100">
                ~ ${Math.round((1e3*this.expiry-Date.now())/1e3/3600)} hours
              </wui-text>
              <wui-text variant="tiny-600" color="fg-300">
                Expiring ${new Date(1e3*this.expiry).toDateString()}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-details-group>
      </wui-flex>
    `}};to.styles=Fc;fr([c({type:Array})],to.prototype,"functions",void 0);fr([c({type:String})],to.prototype,"contractAddress",void 0);fr([c({type:Number})],to.prototype,"expiry",void 0);to=fr([w("wui-permission-contract-call")],to);export{N as U,Wc as W,xe as a,ye as b,Vc as c,Hc as i,un as s};
