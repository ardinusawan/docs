(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8],{341:function(t,e,n){},349:function(t,e,n){"use strict";n(341)},374:function(t,e,n){},380:function(t,e,n){"use strict";n.r(e);var u=n(39),o=n(1),a={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},s={name:"SWUpdatePopup",data:function(){return{rawPopupConfig:{message:"New content is available.",buttonText:"Refresh"},updateEvent:null}},computed:{popupConfig:function(){return Object(o.h)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||a["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||a["/"].buttonText}},created:function(){u.a.$on("sw-updated",this.onSWUpdated),!0==={message:"New content is available.",buttonText:"Refresh"}&&(this.rawPopupConfig=a)},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(349),n(30)),p=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",(function(){return[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()]}),{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"fec8b358",null);e.default=p.exports},414:function(t,e,n){"use strict";n(374)},424:function(t,e,n){"use strict";n.r(e);var u={components:{SWUpdatePopup:n(380).default}},o=(n(414),n(30)),a=Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var u=e.enabled,o=e.reload,a=e.message,s=e.buttonText;return u?n("div",{staticClass:"weserv-update-popup"},[t._v("\n    "+t._s(a)),n("br"),n("button",{on:{click:o}},[t._v(t._s(s))])]):t._e()}}],null,!0)})}),[],!1,null,null,null);e.default=a.exports}}]);