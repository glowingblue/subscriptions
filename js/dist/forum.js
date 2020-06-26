module.exports=function(t){var o={};function n(r){if(o[r])return o[r].exports;var s=o[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=o,n.d=function(t,o,r){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var s in t)n.d(r,s,function(o){return t[o]}.bind(null,s));return r},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=20)}([function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,o){t.exports=flarum.core.compat["components/IndexPage"]},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,o){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,o){t.exports=flarum.core.compat["components/Dropdown"]},function(t,o){t.exports=flarum.core.compat["utils/extractText"]},function(t,o){t.exports=flarum.core.compat.Component},function(t,o){t.exports=flarum.core.compat["components/LinkButton"]},function(t,o){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,o){t.exports=flarum.core.compat["components/SettingsPage"]},function(t,o){t.exports=flarum.core.compat["components/Switch"]},function(t,o){t.exports=flarum.core.compat["components/Notification"]},function(t,o){t.exports=flarum.core.compat["helpers/username"]},function(t,o,n){"use strict";n.r(o);var r=n(0),s=n(4),e=n.n(s),i=n(8),a=n.n(i),c=n(2),u=n.n(c),p=n(9),l=n.n(p),f=n(5),b=n.n(f);var d=n(3),_=n.n(d),g=n(6),w=n.n(g),y=n(10),h=n.n(y);function x(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}var v=n(11),S=n.n(v),j=n(1),O=n.n(j),P=n(12),M=n.n(P),N=n(13),k=function(t){function o(){return t.apply(this,arguments)||this}return x(o,t),o.prototype.view=function(){return m("button",{className:"SubscriptionMenuItem hasIcon",onclick:this.props.onclick},this.props.active?O()("fas fa-check",{className:"Button-icon"}):"",m("span",{className:"SubscriptionMenuItem-label"},O()(this.props.icon,{className:"Button-icon"}),m("strong",null,this.props.label),m("span",{className:"SubscriptionMenuItem-description"},this.props.description)))},o}(n.n(N).a),B=function(t){function o(){return t.apply(this,arguments)||this}x(o,t);var n=o.prototype;return n.init=function(){this.options=[{subscription:!1,icon:"far fa-star",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.not_following_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.not_following_text")},{subscription:"follow",icon:"fas fa-star",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.following_text")},{subscription:"ignore",icon:"far fa-eye-slash",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_text")}]},n.view=function(){var t=this,o=this.props.discussion,n=o.subscription(),r=app.translator.trans("flarum-subscriptions.forum.sub_controls.follow_button"),s="far fa-star",e="SubscriptionMenu-button--"+n;switch(n){case"follow":r=app.translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),s="fas fa-star";break;case"ignore":r=app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),s="far fa-eye-slash"}var i=app.session.user.preferences(),a=i.notify_newPost_email,c=i.notify_newPost_alert,u=M()(app.translator.trans(a?"flarum-subscriptions.forum.sub_controls.notify_email_tooltip":"flarum-subscriptions.forum.sub_controls.notify_alert_tooltip")),p={className:"Button SubscriptionMenu-button "+e,icon:s,children:r,onclick:this.saveSubscription.bind(this,o,-1===["follow","ignore"].indexOf(n)&&"follow"),title:u};return p.config=(a||c)&&!1===n?function(t){$(t).tooltip({container:".SubscriptionMenu",placement:"bottom",delay:250,title:u})}:function(t){return $(t).tooltip("destroy")},m("div",{className:"Dropdown ButtonGroup SubscriptionMenu"},_.a.component(p),m("button",{className:"Dropdown-toggle Button Button--icon "+e,"data-toggle":"dropdown"},O()("fas fa-caret-down",{className:"Button-icon"})),m("ul",{className:"Dropdown-menu dropdown-menu Dropdown-menu--right"},this.options.map((function(r){return r.onclick=t.saveSubscription.bind(t,o,r.subscription),r.active=n===r.subscription,m("li",null,k.component(r))}))))},n.saveSubscription=function(t,o){t.save({subscription:o}),this.$(".SubscriptionMenu-button").tooltip("hide")},o}(S.a);var D=n(14),I=n.n(D),T=n(7),C=n.n(T),q=n(15),A=n.n(q);var R=n(16),G=n.n(R),L=n(17),z=n.n(L),U=n(18),E=n.n(U),F=(n(19),function(t){function o(){return t.apply(this,arguments)||this}x(o,t);var n=o.prototype;return n.icon=function(){return"fas fa-star"},n.href=function(){var t=this.props.notification,o=t.subject(),n=t.content()||{};return app.route.discussion(o,n.postNumber)},n.content=function(){return app.translator.trans("flarum-subscriptions.forum.notifications.new_post_text",{user:this.props.notification.fromUser()})},o}(E.a));e.a.initializers.add("subscriptions",(function(){e.a.notificationComponents.newPost=F,u.a.prototype.subscription=a.a.attribute("subscription"),Object(r.extend)(u.a.prototype,"badges",(function(t){var o;switch(this.subscription()){case"follow":o=b.a.component({label:app.translator.trans("flarum-subscriptions.forum.badge.following_tooltip"),icon:"fas fa-star",type:"following"});break;case"ignore":o=b.a.component({label:app.translator.trans("flarum-subscriptions.forum.badge.ignoring_tooltip"),icon:"far fa-eye-slash",type:"ignoring"})}o&&t.add("subscription",o)})),Object(r.extend)(h.a,"userControls",(function(t,o,n){if(app.session.user&&!(n instanceof w.a)){var r={none:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.follow_button"),icon:"fas fa-star",save:"follow"},follow:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.unfollow_button"),icon:"far fa-star",save:!1},ignore:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.unignore_button"),icon:"fas fa-eye",save:!1}},s=o.subscription()||"none";t.add("subscription",_.a.component({children:r[s].label,icon:r[s].icon,onclick:o.save.bind(o,{subscription:r[s].save})}))}})),Object(r.extend)(w.a.prototype,"sidebarItems",(function(t){if(app.session.user){var o=this.discussion;t.add("subscription",B.component({discussion:o}))}})),Object(r.extend)(C.a.prototype,"navItems",(function(t){if(app.session.user){var o=this.stickyParams();o.filter="following",t.add("following",I.a.component({href:app.route("index.filter",o),children:app.translator.trans("flarum-subscriptions.forum.index.following_link"),icon:"fas fa-star"}),50)}})),Object(r.extend)(C.a.prototype,"config",(function(){"/following"==m.route()&&app.setTitle(app.translator.trans("flarum-subscriptions.forum.following.meta_title_text"))})),Object(r.extend)(A.a.prototype,"requestParams",(function(t){"following"===this.params.filter&&(t.filter.q=(t.filter.q||"")+" is:following")})),Object(r.extend)(G.a.prototype,"notificationsItems",(function(t){t.add("followAfterReply",z.a.component({children:app.translator.trans("flarum-subscriptions.forum.settings.follow_after_reply_label"),state:this.user.preferences().followAfterReply,onchange:this.preferenceSaver("followAfterReply")}))})),Object(r.extend)(l.a.prototype,"notificationTypes",(function(t){t.add("newPost",{name:"newPost",icon:"fas fa-star",label:e.a.translator.trans("flarum-subscriptions.forum.settings.notify_new_post_label")})}))}))}]);
//# sourceMappingURL=forum.js.map