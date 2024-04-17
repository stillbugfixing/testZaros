"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9400,3322],{65328:function(e,n,t){t.d(n,{K_:function(){return g},Nl:function(){return f},oC:function(){return m}});var r=t(7297),a=t(68806);function i(){let e=(0,r.Z)(["\n  query GetDepositMargins($accountId: String!) {\n    logDepositMargins(where: { accountId: $accountId }) {\n      amount\n      blockTimestamp\n      id\n    }\n  }\n"]);return i=function(){return e},e}function o(){let e=(0,r.Z)(["\n  query GetUserLogSettleOrders($accountId: String!) @live(interval: 1000) {\n    logSettleOrders(\n      where: { accountId: $accountId }\n      orderBy: blockTimestamp\n      orderDirection: desc\n    ) {\n      newPosition_size\n      newPosition_lastInteractionPrice\n      newPosition_lastInteractionFundingFeePerUnit\n      marketId\n      blockTimestamp\n      sender\n      accountId\n      transactionHash\n    }\n  }\n"]);return o=function(){return e},e}function c(){let e=(0,r.Z)(["\n  query GetUserLogCreateOrders($accountAddress: String!, $accountId: String!)\n  @live(interval: 1000) {\n    logCreateMarketOrders(\n      where: { sender: $accountAddress, accountId: $accountId }\n      orderBy: blockTimestamp\n      orderDirection: desc\n    ) {\n      marketId\n      marketOrder_sizeDelta\n      marketOrder_acceptablePrice\n      marketOrder_timestamp\n    }\n  }\n"]);return c=function(){return e},e}function d(){let e=(0,r.Z)(["\n  query GetAllLogSettleOrders($marketId: Int!) @live(interval: 1000) {\n    logSettleOrders(\n      where: { marketId: $marketId }\n      orderBy: blockTimestamp\n      orderDirection: desc\n      first: 12\n    ) {\n      newPosition_size\n      newPosition_lastInteractionPrice\n      newPosition_lastInteractionFundingFeePerUnit\n      newPosition_initialMargin\n      marketId\n      blockTimestamp\n      sender\n      newPosition_unrealizedPnlStored\n      orderId\n      accountId\n      transactionHash\n    }\n  }\n"]);return d=function(){return e},e}function l(){let e=(0,r.Z)(["\n  query GetAllCreateOrders($marketId: Int!) @live(interval: 1000) {\n    logCreateMarketOrders(\n      where: { marketId: $marketId }\n      first: 12\n      orderBy: blockTimestamp\n      orderDirection: desc\n    ) {\n      marketId\n      marketOrder_sizeDelta\n      marketOrder_acceptablePrice\n      marketOrder_timestamp\n    }\n  }\n"]);return l=function(){return e},e}function u(){let e=(0,r.Z)(["\n  query GetLogCreateMarketOrders($accountAddress: String!, $accountId: String!)\n  @live(interval: 1000) {\n    logCreateMarketOrders(\n      where: { sender: $accountAddress, accountId: $accountId }\n      orderBy: blockTimestamp\n      orderDirection: desc\n    ) {\n      marketId\n      marketOrder_sizeDelta\n      marketOrder_acceptablePrice\n      marketOrder_timestamp\n    }\n  }\n"]);return u=function(){return e},e}function s(){let e=(0,r.Z)(["\n  query GetLogCreateOcoOrder($accountId: String!) {\n    logCreateOcoOrder(where: { accountId: $accountId }) {\n      takeProfit\n      stopLoss\n      marketId\n    }\n  }\n"]);return s=function(){return e},e}(0,a.Ps)(i());let g=(0,a.Ps)(o());(0,a.Ps)(c()),(0,a.Ps)(d());let m=(0,a.Ps)(l()),f=(0,a.Ps)(u());(0,a.Ps)(s())},79162:function(e,n,t){t.d(n,{h:function(){return d}});var r=t(67294),a=t(4480),i=t(91590);let o=e=>{let n=e=>Number(e)/1e18;return{marketId:Number(e[0]),sizeDelta:n(e[1]),acceptablePrice:n(e[2]),orderType:i.m.Market,settlementTimestamp:Number(e[3]).toString(),mode:n(e[1])>=0?"Long":"Short"}};var c=t(90994);let d=()=>{let[e,n]=(0,a.FV)(i.y),[t,d]=(0,r.useState)(!0),{perpsEngineContract:l,accountIdsStates:{accountIdSelected:u}}=(0,c.O)(),s=(0,r.useCallback)(async()=>{d(!0);try{let e=await (null==l?void 0:l.getActiveMarketOrder(u));if(e){let t=o(e);n(e=>[...e,t]),t.sizeDelta&&d(!1)}}catch(e){return}finally{d(!1)}},[u,l,n]);return(0,r.useEffect)(()=>{u&&!e.length?s():u&&e.length&&d(!1)},[u,s,e]),{orders:e,getOrders:s,isLoading:t}}},80533:function(e,n,t){t.d(n,{i:function(){return u}});var r=t(27452),a=t(95417),i=t(58975),o=t(8110),c=t(77935),d=t(59862);let l=e=>(0,a.n9)(Number(e)/1e18),u=e=>{let{orders:n}=e;return n?n.map((e,n)=>({id:n.toString(),market:(0,r.A)(e.marketId),marketId:e.marketId,orderSizeTotal:(0,c.v)({value:parseFloat(e.marketOrder_sizeDelta)}),filledPrice:l(e.marketOrder_acceptablePrice),tradeType:(0,o.x)({field:e.marketOrder_sizeDelta})>=0?"Long":"Short",orderType:d.F[e.orderType||0],status:void 0,time:(0,i.p)(e.marketOrder_timestamp),sizeDelta:(0,c.v)({value:parseFloat(e.marketOrder_sizeDelta)}),initialMarginDelta:0})):[]}},27452:function(e,n,t){t.d(n,{A:function(){return s},D:function(){return l}});var r=t(55850),a=t(90994),i=t(8110),o=t(77935),c=t(59862),d=t(65328);let l=()=>{var e;let{accountIdsStates:n}=(0,a.O)(),{data:t,loading:l}=(0,r.a)(d.K_,{variables:{accountId:null===(e=n.accountIdSelected)||void 0===e?void 0:e.toString()},skip:!n.accountIdSelected});if(l)return{data:[],loading:!0};let g=(null==t?void 0:t.logSettleOrders)||[],m=g.map(e=>({id:String(e.orderId),marketId:e.marketId,marketSymbolName:s(e.marketId),price:(parseInt(e.newPosition_lastInteractionPrice)/1e18).toFixed(2),orderSizeTotal:(0,o.v)({value:parseFloat(e.newPosition_size)}),time:u(e.blockTimestamp),type:(0,i.x)({field:e.newPosition_size})>=0?"Long":"Short",transactionHash:e.transactionHash,orderTypeName:c.F[0]})).filter(e=>null!==e).sort((e,n)=>Number(null==e?void 0:e.id)<Number(null==n?void 0:n.id)?1:-1);return{data:m,loading:!1}},u=e=>{let n=1e3*parseInt(e,10),t=new Date(n),r=t.getUTCFullYear(),a=String(t.getUTCMonth()+1).padStart(2,"0"),i=String(t.getUTCDate()).padStart(2,"0"),o=String(t.getUTCHours()).padStart(2,"0"),c=String(t.getUTCMinutes()).padStart(2,"0"),d=String(t.getUTCSeconds()).padStart(2,"0");return"".concat(r,"-").concat(a,"-").concat(i," ").concat(o,":").concat(c,":").concat(d)},s=e=>{switch(e){case 1:case"1":default:return"BTCUSD";case 2:case"2":return"ETHUSD";case 3:case"3":return"LINKUSD";case 4:case"4":return"ARBUSD"}}},91590:function(e,n,t){t.d(n,{m:function(){return a},y:function(){return o}});var r,a,i=t(4480);(r=a||(a={}))[r.Market=0]="Market",r[r.Limit=1]="Limit",r[r["Take Profit"]=2]="Take Profit",r[r["Stop Loss"]=3]="Stop Loss";let o=(0,i.cn)({key:"ordersAtom",default:[]})},31909:function(e,n,t){t.d(n,{X:function(){return a}});var r=t(4480);let a=(0,r.cn)({key:"ordersHistoryAtom",default:[]})},38987:function(e,n,t){t.d(n,{x:function(){return a}});var r=t(4480);let a=(0,r.cn)({key:"positionsAtom",default:[]})},70139:function(e,n,t){t.d(n,{F8:function(){return i},U8:function(){return a}});var r=t(4480);(0,r.cn)({key:"stats-atom",default:{currentPrice:void 0,openPrice:void 0,high24h:void 0,low24h:void 0,change24hPercentage:void 0}}),(0,r.cn)({key:"stats-ids-atom",default:[]});let a=(0,r.xu)({key:"stats-atom-family",default:{price:void 0,high24h:void 0,low24h:void 0,change24hPercentage:void 0}}),i=()=>{let e=(0,r._8)(e=>{let{snapshot:n}=e;return e=>{let t=n.getLoadable(a(e));return t.valueMaybe()}}),n=(0,r._8)(e=>{let{set:n}=e;return(e,t)=>{n(a(e),t)}});return{getStats:e,setStats:n}}},52390:function(e,n,t){t.d(n,{_:function(){return r}});let r=e=>{["0","1","2","3","4","5","6","7","8","9","Backspace","Delete","ArrowLeft","ArrowRight","."].includes(e.key)||e.preventDefault()}},58975:function(e,n,t){t.d(n,{B:function(){return r},p:function(){return a}});let r=e=>{let{timestampStr:n,onlyTime:t}=e,r=1e3*parseInt(n,10),a=new Date(r),i=String(a.getFullYear()).padStart(2,"0"),o=String(a.getMonth()+1).padStart(2,"0"),c=String(a.getDay()).padStart(2,"0"),d=String(a.getHours()).padStart(2,"0"),l=String(a.getMinutes()).padStart(2,"0"),u=String(a.getSeconds()).padStart(2,"0");return t?"".concat(d,":").concat(l,":").concat(u):"".concat(i,"-").concat(o,"-").concat(c," ").concat(d,":").concat(l,":").concat(u)},a=e=>{let n=new Date(1e3*parseInt(e));return n.toISOString().replace("T"," ").substring(0,19)}},8110:function(e,n,t){t.d(n,{x:function(){return r}});let r=e=>{let{field:n}=e;return Number(n.replace("$","").replaceAll(",",""))}},77935:function(e,n,t){t.d(n,{v:function(){return r}});let r=e=>{let{value:n}=e;return Number((n/1e18).toFixed(2))}},59862:function(e,n,t){t.d(n,{F:function(){return r}});let r={0:"Market",1:"Limit",2:"Oco"}},6280:function(e,n,t){t.d(n,{x:function(){return u}});var r=t(85893),a=t(76459),i=t(7297),o=t(15437);function c(){let e=(0,i.Z)(["\n  position: relative;\n  z-index: ",";\n  display: flex;\n  flex-direction: column;\n  width: ",";\n  min-width: ",";\n  height: ",";\n  min-height: ",";\n  border-radius: ",";\n  padding: ",";\n  padding-bottom: ",";\n  overflow: ",";\n  margin-top: ",";\n  margin-left: ",";\n  margin-bottom: ",";\n  background: ",";\n\n  &::before {\n    content: '';\n    display: none;\n    z-index: -1;\n    position: absolute;\n    display: ",";\n    inset: 0;\n    border-radius: ",";\n    padding: 0.08rem;\n    background: linear-gradient(\n      ",",\n      var(--primary-900) 50%,\n      var(--secondary-200) 100.08%\n    );\n    -webkit-mask: linear-gradient(var(--neutral-white) 0 0) content-box,\n      linear-gradient(var(--neutral-white) 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n  }\n\n  ","\n  transition: all 0.2s;\n"]);return c=function(){return e},e}let d=o.zo.div(c(),e=>{let{$zIndex:n}=e;return n||"1"},e=>{let{width:n}=e;return n||"100%"},e=>{let{width:n}=e;return n||"100%"},e=>{let{height:n}=e;return n||"min-content"},e=>{let{$minHeight:n}=e;return n||""},e=>{let{$borderRadius:n}=e;return n||"1rem"},e=>{let{$padding:n}=e;return n||"1rem"},e=>{let{$paddingBottom:n}=e;return n},e=>e.$isHidden?"hidden":"",e=>{let{$marginTop:n}=e;return n||""},e=>{let{$marginLeft:n}=e;return n||""},e=>{let{$marginBottom:n}=e;return n||""},e=>{let{$hasGradient:n,theme:t,$isLoadingBackground:r}=e;return r?"linear-gradient(133deg, rgba(128, 128, 128, 0.30) 1.71%, rgba(128, 128, 128, 0.05) 98.28%)":n&&"light"===t.currentTheme?"\n    radial-gradient(\n      102.14% 78.98% at 50% 141.52%,\n      var(--modal-5) 0%,\n      rgba(20, 105, 133, 0) 100%\n    ),\n    ".concat(t.components.box.backgroundColor,"\n  "):"".concat(t.components.box.backgroundColor)},e=>{let{$hasNoBorder:n}=e;return n?"none":"block"},e=>{let{$borderRadius:n}=e;return n||"1rem"},e=>{let{$degree:n}=e;return n?"".concat(n,"deg"):"160deg"},e=>e.animationToOpen&&"@keyframes animationToOpen {\n    from {\n      width: 0;\n      height: 0;\n    }\n    to {\n      width: ".concat(e.width||"100%",";\n      height: ").concat(e.height||"min-content",";\n    }\n  }\n\n  animation: animationToOpen 0.3s;\n\n  ")),l={Container:d},u=e=>{let{children:n,width:t,height:i,minHeight:o,paddingBottom:c,animationToOpen:d,className:u,isHidden:s,padding:g,degree:m,borderRadius:f,$zIndex:p,$hasGradient:k,marginTop:h,marginLeft:v,marginBottom:b,$hasNoBorder:S,dataTestId:I,$isLoadingBackground:y,ref:w}=e;return(0,r.jsx)(a._,{children:(0,r.jsx)(l.Container,{width:t,height:i,$paddingBottom:c,animationToOpen:d,className:u,$isHidden:s,$padding:g,$degree:m,$borderRadius:f,$minHeight:o,$zIndex:p,$hasGradient:k,$marginTop:h,$marginLeft:v,$marginBottom:b,$hasNoBorder:S,"data-testid":I,$isLoadingBackground:y,ref:w,children:n})})}},71357:function(e,n,t){t.d(n,{D:function(){return c},U:function(){return o}});var r=t(95417),a=t(6314),i=t(75573);let o=(e,n)=>{let t=e=>!n||Boolean(null==n?void 0:n.find(n=>n.name===e.symbol));return a.U.filter(t).map(n=>{let t=e(n.symbol);return{id:null==n?void 0:n.marketId,image:null==n?void 0:n.image,name:(null==n?void 0:n.symbol)||"-",price:null==t?void 0:t.price,percentChange24h:null==t?void 0:t.change24hPercentage,volume:null==t?void 0:t.volume,type:n.type,color:(0,i.B)({percent:null==t?void 0:t.change24hPercentage})}})},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t?(0,r.Rb)(t*e/n):(0,r.Rb)(e)}},75573:function(e,n,t){t.d(n,{B:function(){return a}});var r=t(96964);let a=e=>{let{percent:n}=e;return 0===n||void 0===n?r.y0.neutral["grey-3"]:n>=0&&n<=10?"linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%),  ".concat(r.y0.neutral.green):n>=10&&n<=20?"linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),  ".concat(r.y0.neutral.green):n>20?"linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%),  ".concat(r.y0.neutral.green):n<0&&n>=-10?"linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), ".concat(r.y0.neutral.red):n<-10&&n>=-20?"linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), ".concat(r.y0.neutral.red):n<-20?"linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), ".concat(r.y0.neutral.red):void 0}}}]);