webpackJsonp([2],{1645:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o,i=a(2),c=n(i),u=a(59),s=n(u),d=a(4),l=n(d),f=a(10),p=n(f),m=a(7),h=n(m),g=a(8),A=n(g),v=a(0),w=(n(v),a(285)),y=a(632),x=n(y),b=(r=(0,w.wrapper)(x.default))(o=function(t){function e(){return(0,l.default)(this,e),(0,h.default)(this,(e.__proto__||(0,s.default)(e)).apply(this,arguments))}return(0,A.default)(e,t),(0,p.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,c.default)({},this.props,{path:"root"}))}}]),e}(v.Component))||o;e.default=b,t.exports=e.default},1646:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new h.action(t),a=new y((0,i.default)({},t,{metaAction:e})),n=(0,i.default)({},e,a);return e.config({metaHandlers:n}),n}Object.defineProperty(e,"__esModule",{value:!0});var o=a(2),i=n(o),c=a(623),u=n(c),s=a(624),d=n(s),l=a(4),f=n(l);e.default=r;var p=a(0),m=n(p),h=a(285),g=(a(186),a(627)),A=n(g),v=a(9),w=(n(v),a(187)),y=function t(e){var a=this;(0,f.default)(this,t),this.onInit=function(t){var e=t.component,n=t.injections;a.component=e,a.injections=n,n.reduce("init");var r=a.metaAction.gf("data.pagination").toJS();a.load(r)},this.load=function(){var t=(0,d.default)(u.default.mark(function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:1};return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.webapi.goods.init({pagination:e,filter:r});case 2:n=t.sent,n.filter=r,a.injections.reduce("load",n);case 5:case"end":return t.stop()}},t,a)}));return function(e){return t.apply(this,arguments)}}(),this.reload=(0,d.default)(u.default.mark(function t(){var e,n;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=a.metaAction.gf("data.pagination").toJS(),n=a.metaAction.gf("data.filter").toJS(),a.load(e,n);case 3:case"end":return t.stop()}},t,a)})),this.getListRowsCount=function(){return a.metaAction.gf("data.list").size},this.isSelectAll=function(){var t=a.metaAction.gf("data.list");return!(!t||0==t.size)&&t.every(function(t){return t.get("selected")})},this.selectAll=function(t){a.injections.reduce("selectAll",t.target.checked)},this.pageChanged=function(t,e){var n=a.metaAction.gf("data.filter").toJS();a.load({current:t,pageSize:e},n)},this.selectType=function(t,e){var n={current:1,total:0,pageSize:20},r={type:t[0]};a.load(n,r)},this.loopTreeChildren=function(t){return t?t.map(function(t){return t.children&&t.children.length?m.default.createElement(w.Tree.TreeNode,{key:t.id,title:t.name},a.loopTreeChildren(t.children)):m.default.createElement(w.Tree.TreeNode,{key:t.id,title:t.name})}):null},this.addType=(0,d.default)(u.default.mark(function t(){var e,n;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.metaAction.gf("data.filter.type")){t.next=4;break}return a.metaAction.toast("error","请选中一个分类"),t.abrupt("return");case 4:return t.next=6,a.metaAction.modal("show",{title:"新增",children:a.metaAction.loadApp("mk-app-tree-table-type",{store:a.component.props.store,parentId:e})});case 6:n=t.sent,n&&a.reload();case 8:case"end":return t.stop()}},t,a)})),this.modifyType=(0,d.default)(u.default.mark(function t(){var e,n;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.metaAction.gf("data.filter.type")){t.next=4;break}return a.metaAction.toast("error","请选中一个分类"),t.abrupt("return");case 4:return t.next=6,a.metaAction.modal("show",{title:"修改",children:a.metaAction.loadApp("mk-app-tree-table-type",{store:a.component.props.store,typeId:e})});case 6:n=t.sent,n&&a.reload();case 8:case"end":return t.stop()}},t,a)})),this.delType=(0,d.default)(u.default.mark(function t(){var e,n,r,o,i;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.metaAction.gf("data.filter.type")){t.next=4;break}return a.metaAction.toast("error","请选中一个分类"),t.abrupt("return");case 4:return t.next=6,a.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 6:if(!(n=t.sent)){t.next=15;break}return r=a.metaAction.gf("data.filter.type"),t.next=11,a.webapi.goodsType.del({id:r});case 11:o=t.sent,a.metaAction.toast("success","删除类型成功"),i=a.metaAction.gf("data.pagination").toJS(),a.load(i,{type:-1});case 15:case"end":return t.stop()}},t,a)})),this.addDetail=(0,d.default)(u.default.mark(function t(){var e,n;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.metaAction.gf("data.filter.type")){t.next=4;break}return a.metaAction.toast("error","请选中一个分类"),t.abrupt("return");case 4:return t.next=6,a.metaAction.modal("show",{title:"新增",children:a.metaAction.loadApp("mk-app-tree-table-detail",{store:a.component.props.store,typeId:e})});case 6:n=t.sent,n&&a.reload();case 8:case"end":return t.stop()}},t,a)})),this.modifyDetail=function(t){return(0,d.default)(u.default.mark(function e(){var n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.metaAction.modal("show",{title:"修改",children:a.metaAction.loadApp("mk-app-tree-table-detail",{store:a.component.props.store,id:t})});case 2:n=e.sent,n&&a.reload();case 4:case"end":return e.stop()}},e,a)}))},this.batchDelDetail=(0,d.default)(u.default.mark(function t(){var e,n,r,o;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.metaAction.gf("data.list"),e&&0!=e.size||a.metaAction.toast("error","请选中要删除的商品"),n=e.filter(function(t){return t.get("selected")}),n&&0!=n.size||a.metaAction.toast("error","请选中要删除的商品"),t.next=6,a.metaAction.modal("confirm",{title:"删除",content:"确认删除?"});case 6:if(r=t.sent){t.next=9;break}return t.abrupt("return");case 9:return o=n.map(function(t){return t.get("id")}).toJS(),t.next=12,a.webapi.goods.del({ids:o});case 12:a.metaAction.toast("success","删除成功"),a.reload();case 14:case"end":return t.stop()}},t,a)})),this.metaAction=e.metaAction,this.config=A.default.current,this.webapi=this.config.webapi};t.exports=e.default},1647:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){var e=new d.reducer(t),a=new p((0,i.default)({},t,{metaReducer:e}));return(0,i.default)({},e,a)}Object.defineProperty(e,"__esModule",{value:!0});var o=a(2),i=n(o),c=a(4),u=n(c);e.default=r;var s=a(186),d=a(285),l=a(627),f=(n(l),a(633)),p=function t(e){var a=this;(0,u.default)(this,t),this.init=function(t,e){return a.metaReducer.init(t,(0,f.getInitState)())},this.load=function(t,e){return t=a.metaReducer.sf(t,"data.list",(0,s.fromJS)(e.list)),t=a.metaReducer.sf(t,"data.pagination",(0,s.fromJS)(e.pagination)),t=a.metaReducer.sf(t,"data.filter",(0,s.fromJS)(e.filter)),e.goodsTypes&&(t=a.metaReducer.sf(t,"data.other.goodsTypes",(0,s.fromJS)(e.goodsTypes))),t},this.selectAll=function(t,e){var n=a.metaReducer.gf(t,"data.list");if(!n||0==n.size)return t;for(var r=0;r<n.size;r++)t=a.metaReducer.sf(t,"data.list."+r+".selected",e);return t},this.metaReducer=e.metaReducer};t.exports=e.default}});