(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[5],{1478:function(e,t,n){n(49),e.exports=n(1669)},1479:function(e,t,n){"use strict";var i=n(546),s=n(547),a=n(1480),o=n(550),r=n(551),c=n(552);e.exports=function e(){var t=[],n=o(),b={},g=!1,O=-1;return w.data=function(e,t){if(r(e))return 2===arguments.length?(j("data",g),b[e]=t,w):d.call(b,e)&&b[e]||null;if(e)return j("data",g),b=e,w;return b},w.freeze=x,w.attachers=t,w.use=function(e){var n;if(j("use",g),null===e||void 0===e);else if("function"===typeof e)r.apply(null,arguments);else{if("object"!==typeof e)throw new Error("Expected usable value, not `"+e+"`");"length"in e?o(e):s(e)}n&&(b.settings=i(b.settings||{},n));return w;function s(e){o(e.plugins),e.settings&&(n=i(n||{},e.settings))}function a(e){if("function"===typeof e)r(e);else{if("object"!==typeof e)throw new Error("Expected usable value, not `"+e+"`");"length"in e?r.apply(null,e):s(e)}}function o(e){var t,n;if(null===e||void 0===e);else{if("object"!==typeof e||!("length"in e))throw new Error("Expected a list of plugins, not `"+e+"`");for(t=e.length,n=-1;++n<t;)a(e[n])}}function r(e,n){var s=C(e);s?(c(s[1])&&c(n)&&(n=i(s[1],n)),s[1]=n):t.push(l.call(arguments))}},w.parse=function(e){var t,n=a(e);if(x(),f("parse",t=w.Parser),h(t))return new t(String(n),n).parse();return t(String(n),n)},w.stringify=function(e,t){var n,i=a(t);if(x(),u("stringify",n=w.Compiler),p(e),h(n))return new n(e,i).compile();return n(e,i)},w.run=N,w.runSync=function(e,t){var n,i=!1;return N(e,t,a),v("runSync","run",i),n;function a(e,t){i=!0,s(e),n=t}},w.process=y,w.processSync=function(e){var t,n=!1;return x(),f("processSync",w.Parser),u("processSync",w.Compiler),y(t=a(e),i),v("processSync","process",n),t;function i(e){n=!0,s(e)}},w;function w(){for(var n=e(),s=t.length,a=-1;++a<s;)n.use.apply(null,t[a]);return n.data(i(!0,{},b)),n}function x(){var e,i,s,a;if(g)return w;for(;++O<t.length;)i=(e=t[O])[0],null,!1!==(s=e[1])&&(!0===s&&(e[1]=void 0),"function"===typeof(a=i.apply(w,e.slice(1)))&&n.use(a));return g=!0,O=1/0,w}function C(e){for(var n,i=t.length,s=-1;++s<i;)if((n=t[s])[0]===e)return n}function N(e,t,i){if(p(e),x(),i||"function"!==typeof t||(i=t,t=null),!i)return new Promise(s);function s(s,o){n.run(e,a(t),(function(t,n,a){n=n||e,t?o(t):s?s(n):i(null,n,a)}))}s(null,i)}function y(e,t){if(x(),f("process",w.Parser),u("process",w.Compiler),!t)return new Promise(n);function n(n,i){var s=a(e);m.run(w,{file:s},(function(e){e?i(e):n?n(s):t(null,s)}))}n(null,t)}}().freeze();var l=[].slice,d={}.hasOwnProperty,m=o().use((function(e,t){t.tree=e.parse(t.file)})).use((function(e,t,n){e.run(t.tree,t.file,(function(e,i,s){e?n(e):(t.tree=i,t.file=s,n())}))})).use((function(e,t){t.file.contents=e.stringify(t.tree,t.file)}));function h(e){return"function"===typeof e&&function(e){var t;for(t in e)return!0;return!1}(e.prototype)}function f(e,t){if("function"!==typeof t)throw new Error("Cannot `"+e+"` without `Parser`")}function u(e,t){if("function"!==typeof t)throw new Error("Cannot `"+e+"` without `Compiler`")}function j(e,t){if(t)throw new Error("Cannot invoke `"+e+"` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")}function p(e){if(!e||!r(e.type))throw new Error("Expected node, got `"+e+"`")}function v(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}},1480:function(e,t,n){"use strict";var i=n(548),s=n(1481);e.exports=s;var a=s.prototype;function o(e,t,n){var s=this.path,a=new i(e,t,n);return s&&(a.name=s+":"+a.name,a.file=s),a.fatal=!1,this.messages.push(a),a}a.message=o,a.info=function(){var e=this.message.apply(this,arguments);return e.fatal=null,e},a.fail=function(){var e=this.message.apply(this,arguments);throw e.fatal=!0,e},a.warn=o},1481:function(e,t,n){"use strict";(function(t){var i=n(398),s=n(549),a=n(1482);e.exports=l;var o={}.hasOwnProperty,r=l.prototype;r.toString=function(e){var t=this.contents||"";return a(t)?t.toString(e):String(t)};var c=["history","path","basename","stem","extname","dirname"];function l(e){var n,i,s;if(e){if("string"===typeof e||a(e))e={contents:e};else if("message"in e&&"messages"in e)return e}else e={};if(!(this instanceof l))return new l(e);for(this.data={},this.messages=[],this.history=[],this.cwd=t.cwd(),i=-1,s=c.length;++i<s;)n=c[i],o.call(e,n)&&(this[n]=e[n]);for(n in e)-1===c.indexOf(n)&&(this[n]=e[n])}function d(e,t){if(-1!==e.indexOf(i.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+i.sep+"`")}function m(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function h(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}Object.defineProperty(r,"path",{get:function(){return this.history[this.history.length-1]},set:function(e){m(e,"path"),e!==this.path&&this.history.push(e)}}),Object.defineProperty(r,"dirname",{get:function(){return"string"===typeof this.path?i.dirname(this.path):void 0},set:function(e){h(this.path,"dirname"),this.path=i.join(e||"",this.basename)}}),Object.defineProperty(r,"basename",{get:function(){return"string"===typeof this.path?i.basename(this.path):void 0},set:function(e){m(e,"basename"),d(e,"basename"),this.path=i.join(this.dirname||"",e)}}),Object.defineProperty(r,"extname",{get:function(){return"string"===typeof this.path?i.extname(this.path):void 0},set:function(e){var t=e||"";if(d(t,"extname"),h(this.path,"extname"),t){if("."!==t.charAt(0))throw new Error("`extname` must start with `.`");if(-1!==t.indexOf(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=s(this.path,t)}}),Object.defineProperty(r,"stem",{get:function(){return"string"===typeof this.path?i.basename(this.path,this.extname):void 0},set:function(e){m(e,"stem"),d(e,"stem"),this.path=i.join(this.dirname||"",e+(this.extname||""))}})}).call(this,n(127))},1482:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},1483:function(e,t,n){},1484:function(e,t,n){},1485:function(e,t,n){},1669:function(e,t,n){"use strict";n.r(t);var i=n(6),s=n(7),a=n(22),o=n(9),r=n(8),c=n(2),l=n.n(c),d=n(21),m=n.n(d),h=n(4),f=(n(169),n(32)),u=n(1),j=n(10),p=n(55),v=n.n(p),b=n(14),g=n(1479),O=n(403),w=n(582),x=n(583),C=n(584),N=n(590),y=n(594),S=n(93),D=n(606),I=n(614),k=n(418),R=n(615).default;var q=g().use(O,{commonmark:!0}).use(x).use(w).use(C,{allowDangerousHTML:!0}).use(y).use(N).use((function(e){var t=S(e,this.data("settings")),n=R(k,{attributes:{input:["type"],li:["className"],code:["className"]},tagNames:["input","code"]});this.Compiler=function(e){var i=I(e,n);return D(i,t)}})),L=(g().use(O,{commonmark:!0}).use(w),n(5)),T=n(11),E=(n(446),n(0)),_=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleCommentChange=function(e){s.setState({comment:e.target.value})},s.submitComment=function(){var e=s.state.comment.trim();e.length>0&&(j.a.postComment(u.N,u.J,e).then((function(){s.props.listComments()})).catch((function(e){var t=L.a.getErrorMsg(e);T.a.danger(t)})),s.setState({comment:""}))},s.resolveComment=function(e){j.a.updateComment(u.N,e.target.id,"true").then((function(e){s.props.listComments()})).catch((function(e){var t=L.a.getErrorMsg(e);T.a.danger(t)}))},s.editComment=function(e,t){j.a.updateComment(u.N,e,null,null,t).then((function(e){s.props.listComments()})).catch((function(e){var t=L.a.getErrorMsg(e);T.a.danger(t)}))},s.deleteComment=function(e){j.a.deleteComment(u.N,e.target.id).then((function(e){s.props.listComments()})).catch((function(e){var t=L.a.getErrorMsg(e);T.a.danger(t)}))},s.scrollToQuote=function(e,t,n){s.props.scrollToQuote(e,t,n),s.setState({comment:""})},s.state={showResolvedComment:!0,comment:""},s}return Object(s.a)(n,[{key:"componentWillReceiveProps",value:function(e){if(this.props.commentsList.length<e.commentsList.length){var t=this;setTimeout((function(){t.refs.commentsList.scrollTo(0,1e4)}),100)}}},{key:"render",value:function(){var e=this,t=this.props.commentsList;return Object(E.jsxs)("div",{className:"seafile-comment h-100",children:[Object(E.jsx)("div",{className:"flex-fill o-auto",children:t.length>0?Object(E.jsx)("ul",{className:"seafile-comment-list",ref:"commentsList",children:t.map((function(t,n){return Object(E.jsx)(M,{item:t,showResolvedComment:e.state.showResolvedComment,resolveComment:e.resolveComment,editComment:e.editComment,scrollToQuote:e.scrollToQuote,deleteComment:e.deleteComment},n)}))}):Object(E.jsx)("p",{className:"text-center my-4",children:Object(u.qb)("No comment yet.")})}),Object(E.jsxs)("div",{className:"seafile-comment-footer flex-shrink-0",children:[Object(E.jsx)("textarea",{className:"add-comment-input",value:this.state.comment,placeholder:Object(u.qb)("Add a comment..."),onChange:this.handleCommentChange,clos:"100",rows:"3",warp:"virtual"}),Object(E.jsx)("div",{className:"comment-submit-container",children:Object(E.jsx)(h.c,{className:"submit-comment",color:"primary",size:"sm",onClick:this.submitComment,children:Object(u.qb)("Submit")})})]})]})}}]),n}(l.a.Component),M=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).toggleDropDownMenu=function(){s.setState({dropdownOpen:!s.state.dropdownOpen})},s.convertComment=function(e){q.process(e.comment).then((function(e){var t=String(e);s.setState({comment:t})})),q.process(e.quote).then((function(e){var t=String(e);s.setState({quote:t})}))},s.scrollToQuote=function(){var e=s.props.item;s.props.scrollToQuote(e.newIndex,e.oldIndex,e.quote)},s.toggleEditComment=function(){s.setState({editable:!s.state.editable})},s.updateComment=function(e){var t=s.state.newComment;s.props.item.comment!==t&&s.props.editComment(e.target.id,t),s.toggleEditComment()},s.handleCommentChange=function(e){s.setState({newComment:e.target.value})},s.state={dropdownOpen:!1,comment:"",quote:"",newComment:s.props.item.comment,editable:!1},s}return Object(s.a)(n,[{key:"componentWillMount",value:function(){this.convertComment(this.props.item)}},{key:"componentWillReceiveProps",value:function(e){this.convertComment(e.item)}},{key:"render",value:function(){var e=this.props.item;return e.resolved&&!this.props.showResolvedComment?null:this.state.editable?Object(E.jsxs)("li",{className:"seafile-comment-item",id:e.id,children:[Object(E.jsxs)("div",{className:"seafile-comment-info",children:[Object(E.jsx)("img",{className:"avatar",src:e.avatarUrl,alt:""}),Object(E.jsxs)("div",{className:"reviewer-info",children:[Object(E.jsx)("div",{className:"reviewer-name ellipsis",children:e.name}),Object(E.jsx)("div",{className:"review-time",children:e.time})]})]}),Object(E.jsxs)("div",{className:"seafile-edit-comment",children:[Object(E.jsx)("textarea",{className:"edit-comment-input",value:this.state.newComment,onChange:this.handleCommentChange,clos:"100",rows:"3",warp:"virtual"}),Object(E.jsx)(h.c,{className:"comment-btn",color:"primary",size:"sm",onClick:this.updateComment,id:e.id,children:Object(u.qb)("Update")})," ",Object(E.jsx)(h.c,{className:"comment-btn",color:"secondary",size:"sm",onClick:this.toggleEditComment,children:Object(u.qb)("Cancel")})]})]}):Object(E.jsxs)("li",{className:e.resolved?"seafile-comment-item seafile-comment-item-resolved":"seafile-comment-item",id:e.id,children:[Object(E.jsxs)("div",{className:"seafile-comment-info",children:[Object(E.jsx)("img",{className:"avatar",src:e.avatarUrl,alt:""}),Object(E.jsxs)("div",{className:"reviewer-info",children:[Object(E.jsx)("div",{className:"reviewer-name ellipsis",children:e.name}),Object(E.jsx)("div",{className:"review-time",children:e.time})]}),!e.resolved&&Object(E.jsxs)(h.i,{isOpen:this.state.dropdownOpen,size:"sm",className:"seafile-comment-dropdown",toggle:this.toggleDropDownMenu,children:[Object(E.jsx)(h.l,{className:"seafile-comment-dropdown-btn",children:Object(E.jsx)("i",{className:"fas fa-ellipsis-v"})}),Object(E.jsxs)(h.k,{children:[e.userEmail===u.Cc&&Object(E.jsx)(h.j,{onClick:this.props.deleteComment,className:"delete-comment",id:e.id,children:Object(u.qb)("Delete")}),e.userEmail===u.Cc&&Object(E.jsx)(h.j,{onClick:this.toggleEditComment,className:"edit-comment",id:e.id,children:Object(u.qb)("Edit")}),Object(E.jsx)(h.j,{onClick:this.props.resolveComment,className:"seafile-comment-resolved",id:e.id,children:Object(u.qb)("Mark as resolved")})]})]})]}),e.newIndex>=-1&&e.oldIndex>=-1&&Object(E.jsx)("blockquote",{className:"seafile-comment-content",children:Object(E.jsx)("div",{onClick:this.scrollToQuote,dangerouslySetInnerHTML:{__html:this.state.quote}})}),Object(E.jsx)("div",{className:"seafile-comment-content",dangerouslySetInnerHTML:{__html:this.state.comment}})]})}}]),n}(l.a.Component),P=_,F=(n(1483),function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleCommentChange=function(e){var t=e.target.value;s.setState({comment:t})},s.submitComment=function(){var e=s.props,t=e.quote,n=e.newIndex,i=e.oldIndex,a=s.state.comment.trim();if(0!==a.length){if(t.length>0){var o={quote:t,newIndex:n,oldIndex:i};j.a.postComment(u.N,u.J,a,JSON.stringify(o)).then((function(){s.props.onCommentAdded()})).catch((function(e){var t=L.a.getErrorMsg(e);T.a.danger(t)}))}else j.a.postComment(u.N,u.J,a).then((function(){s.props.onCommentAdded()})).catch((function(e){var t=L.a.getErrorMsg(e);T.a.danger(t)}));s.setState({comment:""})}},s.setQuoteText=function(e){q.process(e).then((function(e){var t=String(e);s.setState({quote:t})}))},s.state={comment:"",quote:""},s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setQuoteText(this.props.quote)}},{key:"componentWillReceiveProps",value:function(e){this.props.quote!==e.quote&&this.setQuoteText(e.quote)}},{key:"render",value:function(){return Object(E.jsxs)("div",{className:"review-comment-dialog",children:[Object(E.jsx)("div",{children:u.Rb}),Object(E.jsx)("blockquote",{className:"review-comment-dialog-quote",children:Object(E.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state.quote}})}),Object(E.jsx)("textarea",{value:this.state.comment,onChange:this.handleCommentChange}),Object(E.jsxs)("div",{className:"button-group",children:[Object(E.jsx)(h.c,{size:"sm",color:"primary",onClick:this.submitComment,children:Object(u.qb)("Submit")}),Object(E.jsx)(h.c,{size:"sm",color:"secondary",onClick:this.props.toggleCommentDialog,children:Object(u.qb)("Cancel")})]}),Object(E.jsx)("span",{className:"review-comment-dialog-triangle"})]})}}]),n}(l.a.Component)),H=n(48),A=(n(1484),function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).listReviewers=function(){j.a.listDraftReviewers(s.props.draftID).then((function(e){s.setState({reviewers:e.data.reviewers})}))},s.handleSelectChange=function(e){s.setState({selectedOption:e}),s.Options=[]},s.addReviewers=function(){if(s.state.selectedOption.length>0){s.refs.reviewSelect.clearSelect();for(var e=[],t=0;t<s.state.selectedOption.length;t++)e[t]=s.state.selectedOption[t].email;s.setState({loading:!0,errorMsg:[]}),j.a.addDraftReviewers(s.props.draftID,e).then((function(e){if(e.data.failed.length>0){for(var t=[],n=0;n<e.data.failed.length;n++)t[n]=e.data.failed[n];s.setState({errorMsg:t})}s.setState({selectedOption:null,loading:!1}),e.data.success.length>0&&s.listReviewers()})).catch((function(e){var t=L.a.getErrorMsg(e);T.a.danger(t)}))}},s.deleteReviewer=function(e){var t=e.target.getAttribute("name");j.a.deleteDraftReviewer(s.props.draftID,t).then((function(e){if(200===e.data){for(var n=[],i=0;i<s.state.reviewers.length;i++)s.state.reviewers[i].user_email!==t&&n.push(s.state.reviewers[i]);s.setState({reviewers:n})}})).catch((function(e){var t=L.a.getErrorMsg(e);T.a.danger(t)}))},s.state={reviewers:s.props.reviewers,selectedOption:null,errorMsg:[],loading:!1},s.Options=[],s}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.toggleAddReviewerDialog,n=this.state,i=n.reviewers,s=n.errorMsg;return Object(E.jsxs)(h.u,{isOpen:!0,toggle:t,children:[Object(E.jsx)(h.x,{toggle:t,children:Object(u.qb)("Request a review")}),Object(E.jsxs)(h.v,{children:[Object(E.jsx)("p",{children:Object(u.qb)("Add new reviewer")}),Object(E.jsxs)("div",{className:"add-reviewer",children:[Object(E.jsx)(H.a,{placeholder:Object(u.qb)("Search users..."),onSelectChange:this.handleSelectChange,ref:"reviewSelect",isMulti:!0,className:"reviewer-select"}),this.state.selectedOption&&!this.state.loading?Object(E.jsx)(h.c,{color:"secondary",onClick:this.addReviewers,children:Object(u.qb)("Submit")}):Object(E.jsx)(h.c,{color:"secondary",disabled:!0,children:Object(u.qb)("Submit")})]}),s.length>0&&s.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(E.jsxs)("p",{className:"reviewer-select-error error",children:[s[t].email,": ",s[t].error_msg]},t)})),i.length>0&&i.map((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(E.jsxs)("div",{className:"reviewer-select-info",children:[Object(E.jsxs)("div",{className:"d-flex",children:[Object(E.jsx)("img",{className:"avatar reviewer-select-avatar",src:t.avatar_url,alt:""}),Object(E.jsx)("span",{className:"reviewer-select-name ellipsis",children:t.user_name})]}),Object(E.jsx)("i",{className:"fa fa-times",name:t.user_email,onClick:e.deleteReviewer})]},n)}))]}),Object(E.jsx)(h.w,{children:Object(E.jsx)(h.c,{color:"secondary",onClick:t,children:Object(u.qb)("Close")})})]})}}]),n}(l.a.Component)),J=n(71),Q=n(16),B=n.n(Q),Y=n(63),z=n(13),V=n.n(z);n(444);V.a.locale(window.app.config.lang);var U=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onClick=function(e,t,n,i){if(t===s.state.activeItem)return!1;s.props.onHistoryItemClick(i,n,t)},s.onScroll=function(e){var t=e.target.clientHeight,n=e.target.scrollHeight;if(t+e.target.scrollTop+1>=n&&s.props.totalReversionCount>s.perPage*s.state.currentPage){var i=s.state.currentPage+1;s.setState({currentPage:i,loading:!0}),j.a.listFileHistoryRecords(u.N,u.J,i,s.perPage).then((function(e){var t=Object.assign([],s.props.historyList);s.props.onHistoryListChange([].concat(Object(Y.a)(t),Object(Y.a)(e.data.data))),s.setState({loading:!1})})).catch((function(e){var t=L.a.getErrorMsg(e);T.a.danger(t)}))}},s.perPage=25,s.state={currentPage:1,loading:!1},s}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(E.jsx)("div",{className:"history-body",children:Object(E.jsxs)("ul",{onScroll:this.onScroll,className:"history-list-container",children:[this.props.historyList?this.props.historyList.map((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,s=n+1;return s===i.length&&(s=n),Object(E.jsx)(W,{onClick:e.onClick,ctime:t.ctime,className:e.props.activeItem===n?"item-active":"",name:t.creator_name,index:n,preItem:i[s],currentItem:t},n)})):Object(E.jsx)(b.a,{}),this.state.loading&&Object(E.jsx)("li",{className:"reloading-reversion",children:Object(E.jsx)(b.a,{})})]})})}}]),n}(l.a.Component),W=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=V.a.parseZone(this.props.ctime).format("YYYY-MM-DD HH:mm");return Object(E.jsx)("li",{onClick:function(t){return e.props.onClick(t,e.props.index,e.props.preItem,e.props.currentItem)},className:"history-list-item "+this.props.className,children:Object(E.jsxs)("div",{className:"history-info",children:[Object(E.jsx)("div",{className:"time",children:t}),Object(E.jsxs)("div",{className:"owner",children:[Object(E.jsx)("i",{className:"squire-icon"}),Object(E.jsx)("span",{children:this.props.name})]})]})})}}]),n}(l.a.Component),K=U,X=n(12),Z=n(18),G=function e(t){Object(i.a)(this,e);var n=new Date(t.created_at).getTime();if(this.time=V()(n).format("YYYY-MM-DD HH:mm"),this.id=t.id,this.avatarUrl=t.avatar_url,this.comment=t.comment,this.name=t.user_name,this.userEmail=t.user_email,this.resolved=t.resolved,t.detail){var s=JSON.parse(t.detail);this.newIndex=s.newIndex,this.oldIndex=s.oldIndex,this.quote=s.quote}},$=(n(167),n(113),n(274),n(1485),n(409)),ee=n(13),te=J.b.toSlateRange,ne=J.b.toDOMNode,ie=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).initialContent=function(){switch(u.O){case"open":if(!u.H)return void s.setState({isLoading:!1,isShowDiff:!1});if(!u.Wb)return void j.a.getFileDownloadLink(u.N,u.J).then((function(e){j.a.getFileContent(e.data).then((function(e){s.setState({draftContent:e.data,draftOriginContent:e.data,isLoading:!1,isShowDiff:!1})}))}));var e=window.location.hash;if(0===e.indexOf("#history-")){var t,n,i=e.slice(9,49),o=e.slice(50,90);s.setState({isLoading:!1,activeTab:"history"}),j.a.listFileHistoryRecords(u.N,u.J,1,25).then((function(e){var a=e.data.data;s.setState({historyList:a,totalReversionCount:e.data.total_count});for(var r=0,c=a.length;r<c&&(o===a[r].commit_id&&(s.setState({activeItem:r}),t=a[r].path),i===a[r].commit_id&&(n=a[r].path),!t||!n);r++);v.a.all([j.a.getFileRevision(u.N,i,n),j.a.getFileRevision(u.N,o,t)]).then(v.a.spread((function(e,t){v.a.all([j.a.getFileContent(e.data),j.a.getFileContent(t.data)]).then(v.a.spread((function(e,t){s.setDiffViewerContent(t.data,e.data)})))})))}))}else v.a.all([j.a.getFileDownloadLink(u.N,u.J),j.a.getFileDownloadLink(u.N,u.L)]).then(v.a.spread((function(e,t){v.a.all([j.a.getFileContent(e.data),j.a.getFileContent(t.data)]).then(v.a.spread((function(e,t){s.setState({draftContent:e.data,draftOriginContent:t.data,isLoading:!1});var n=Object(a.a)(s);setTimeout((function(){n.getChangedNodes()}),100)})))})));break;case"published":if(!u.Wb)return void s.setState({isLoading:!1,isShowDiff:!1});var r=u.qc+"repo/"+u.N+"/"+u.M+"/download?p="+u.L,c=u.qc+"repo/"+u.N+"/"+u.Xb+"/download?p="+u.L;v.a.all([j.a.getFileContent(r),j.a.getFileContent(c)]).then(v.a.spread((function(e,t){s.setState({draftContent:e.data,draftOriginContent:t.data,isLoading:!1})})))}},s.onHistoryItemClick=function(e,t,n){var i=t.commit_id,a=e.commit_id,o="history-"+i+"-"+a;s.setURL(o),s.setState({activeItem:n,isLoading:!0}),v.a.all([j.a.getFileRevision(u.N,a,e.path),j.a.getFileRevision(u.N,i,t.path)]).then(v.a.spread((function(e,t){v.a.all([j.a.getFileContent(e.data),j.a.getFileContent(t.data)]).then(v.a.spread((function(e,t){s.setDiffViewerContent(e.data,t.data)})))})))},s.onHistoryListChange=function(e){s.setState({historyList:e})},s.listComments=function(){j.a.listComments(u.N,u.J).then((function(e){var t=[];e.data.comments.forEach((function(e){t.push(new G(e))})),s.setState({commentsList:t})}))},s.addComment=function(e){e.stopPropagation(),s.getQuote(),s.quote&&s.setState({isShowCommentDialog:!0})},s.onCommentAdded=function(){s.listComments(),s.toggleCommentDialog()},s.toggleCommentDialog=function(){s.setState({isShowCommentDialog:!s.state.isShowCommentDialog})},s.getOriginRepoInfo=function(){j.a.getRepoInfo(u.N).then((function(e){s.setState({originRepoName:e.data.repo_name})}))},s.getDraftInfo=function(){"open"===u.O&&j.a.getFileInfo(u.N,u.J).then((function(e){s.setState({draftInfo:e.data})}))},s.getChangedNodes=function(){var e=s.refs.diffViewer.value,t=[],n="";e.map((function(e,i){var s=e.data.diff_state;("diff-added"===s&&"diff-added"!==n||"diff-removed"===s&&"diff-removed"!==n||"diff-replaced"===s&&"diff-replaced"!==n)&&t.push(i),n=e.data.diff_state})),s.setState({changedNodes:t})},s.scrollToChangedNode=function(e){if(0!=s.state.changedNodes.length){"up"===e?s.changeIndex++:s.changeIndex--,s.changeIndex>s.state.changedNodes.length-1&&(s.changeIndex=0),s.changeIndex<0&&(s.changeIndex=s.state.changedNodes.length-1);for(var t=window,n=s.state.changedNodes[s.changeIndex],i=window.viewer.children[n],a=ne(window.viewer,i);-1===a.className.indexOf("diff-")&&"BODY"!==a.tagName;)a=a.parentNode;var o=s.findScrollContainer(a,t);o==t.document.body||o==t.document.documentElement?t.scrollTo(0,a.offsetTop):o.scrollTop=a.offsetTop}},s.findScrollContainer=function(e,t){for(var n,i=e.parentNode,s=["auto","overlay","scroll"];!n&&i.parentNode;){var a=t.getComputedStyle(i).overflowY;if(s.includes(a)){n=i;break}i=i.parentNode}return n||t.document.body},s.scrollToQuote=function(e,t,n){var i=s.refs.diffViewer.value.find((function(n){if(n.data.old_index==t&&n.data.new_index==e)return n}));if(i){var a=ne(window.viewer,i);if(!a)return;var o=window,r=s.findScrollContainer(a,o);r==o.document.body||r==o.document.documentElement?o.scrollTo(0,a.offsetTop):r.scrollTop=a.offsetTop}},s.showDiffViewer=function(){return Object(E.jsxs)("div",{children:[s.state.isShowDiff?Object(E.jsx)(f.a,{scriptSource:u.Ob+"js/mathjax/tex-svg.js",newMarkdownContent:s.state.draftContent,oldMarkdownContent:s.state.draftOriginContent,ref:"diffViewer"}):Object(E.jsx)(f.a,{scriptSource:u.Ob+"js/mathjax/tex-svg.js",newMarkdownContent:s.state.draftContent,oldMarkdownContent:s.state.draftContent,ref:"diffViewer"}),Object(E.jsx)("i",{className:"fa fa-plus-square review-comment-btn",ref:"commentbtn",onMouseDown:s.addComment})]})},s.listReviewers=function(){j.a.listDraftReviewers(u.K).then((function(e){s.setState({reviewers:e.data.reviewers})}))},s.onSwitchShowDiff=function(){if(!s.state.isShowDiff){var e=Object(a.a)(s);setTimeout((function(){e.getChangedNodes()}),100)}s.setState({isShowDiff:!s.state.isShowDiff})},s.toggleDiffTip=function(){s.setState({showDiffTip:!s.state.showDiffTip})},s.toggleAddReviewerDialog=function(){s.state.showReviewerDialog&&s.listReviewers(),s.setState({showReviewerDialog:!s.state.showReviewerDialog})},s.showDiffButton=function(){return Object(E.jsxs)("div",{className:"seafile-toggle-diff",children:[Object(E.jsxs)("label",{className:"custom-switch",id:"toggle-diff",children:[Object(E.jsx)("input",{type:"checkbox",checked:s.state.isShowDiff&&"checked",name:"option",className:"custom-switch-input",onChange:s.onSwitchShowDiff}),Object(E.jsx)("span",{className:"custom-switch-indicator"})]}),Object(E.jsx)(h.H,{placement:"bottom",isOpen:s.state.showDiffTip,target:"toggle-diff",toggle:s.toggleDiffTip,children:Object(u.qb)("View diff")})]})},s.onPublishDraft=function(){j.a.publishDraft(u.K).then((function(e){s.setState({draftStatus:e.data.draft_status})}))},s.initialDiffViewerContent=function(){j.a.listFileHistoryRecords(u.N,u.J,1,25).then((function(e){s.setState({historyList:e.data.data,totalReversionCount:e.data.total_count}),e.data.data.length>1?v.a.all([j.a.getFileRevision(u.N,e.data.data[0].commit_id,u.J),j.a.getFileRevision(u.N,e.data.data[1].commit_id,u.J)]).then(v.a.spread((function(e,t){v.a.all([j.a.getFileContent(e.data),j.a.getFileContent(t.data)]).then(v.a.spread((function(e,t){s.setState({draftContent:e.data,draftOriginContent:t.data})})))}))):j.a.getFileRevision(u.N,e.data.data[0].commit_id,u.J).then((function(e){j.a.getFileContent(e.data).then((function(e){s.setState({draftContent:e.data,draftOriginContent:""})}))}))}))},s.setDiffViewerContent=function(e,t){s.setState({draftContent:e,draftOriginContent:t,isLoading:!1})},s.setURL=function(e){var t=new $(window.location.href);t.set("hash",e),window.location.href=t.toString()},s.tabItemClick=function(e){s.state.activeTab!==e&&("history"!==e&&window.location.hash&&s.setURL("#"),"reviewInfo"==e?s.initialContent():"history"==e&&s.initialDiffViewerContent(),s.setState({activeTab:e}))},s.showNavItem=function(e){var t=s.state.commentsList.length;switch(e){case"info":return Object(E.jsx)(h.z,{className:"nav-item",children:Object(E.jsx)(h.A,{className:B()({active:"reviewInfo"===s.state.activeTab}),onClick:function(){s.tabItemClick("reviewInfo")},children:Object(E.jsx)("i",{className:"fas fa-info-circle"})})});case"comments":return Object(E.jsx)(h.z,{className:"nav-item",children:Object(E.jsxs)(h.A,{className:B()({active:"comments"===s.state.activeTab}),onClick:function(){s.tabItemClick("comments")},children:[Object(E.jsx)("i",{className:"fa fa-comments"}),t>0&&Object(E.jsx)("div",{className:"comments-number",children:t})]})});case"history":return Object(E.jsx)(h.z,{className:"nav-item",children:Object(E.jsx)(h.A,{className:B()({active:"history"===s.state.activeTab}),onClick:function(){s.tabItemClick("history")},children:Object(E.jsx)("i",{className:"fas fa-history"})})})}},s.getDomNodeByPath=function(e){for(var t,n=document.querySelector(".viewer-component");"number"===typeof e[0]&&n;)(t=n.children[e[0]]).getAttribute("data-slate-node")||(t=t.children[0]),e.shift(),n=t;return t},s.setBtnPosition=function(){var e=window.getSelection();if(e.rangeCount){var t=e.getRangeAt(0),n=null,i=s.refs.commentbtn.style;try{n=te(window.viewer,t)}catch(r){return void(i.top="-1000px")}if(n&&!X.h.isCollapsed(n)){s.range=n;var a=n.anchor.path.slice();a.pop();var o=s.getDomNodeByPath(a);i.right="0px",i.top=o?"".concat(o.offsetTop,"px"):"-1000px"}else i.top="-1000px"}},s.getQuote=function(){if(s.range){s.quote=Object(f.l)(X.b.fragment(window.viewer,s.range));var e=window.viewer.children[s.range.anchor.path[0]];s.newIndex=e.data.new_index,s.oldIndex=e.data.old_index}},s.renderDiffButton=function(){switch(u.O){case"open":if(!u.H||!u.Wb)return;return s.showDiffButton();case"published":if(!u.Wb)return;return s.showDiffButton()}},s.renderNavItems=function(){switch(u.O){case"open":return u.H?Object(E.jsxs)(h.y,{tabs:!0,className:"review-side-panel-nav",children:[s.showNavItem("info"),s.showNavItem("comments"),s.showNavItem("history")]}):Object(E.jsx)(h.y,{tabs:!0,className:"review-side-panel-nav",children:s.showNavItem("info")});case"published":return u.Wb?Object(E.jsxs)(h.y,{tabs:!0,className:"review-side-panel-nav",children:[s.showNavItem("info"),s.showNavItem("comments")]}):Object(E.jsx)(h.y,{tabs:!0,className:"review-side-panel-nav",children:s.showNavItem("info")})}},s.renderContent=function(){switch(u.O){case"open":return u.H?s.showDiffViewer():Object(E.jsx)("p",{className:"error",children:Object(u.qb)("Draft has been deleted.")});case"published":return u.Wb?s.showDiffViewer():Object(E.jsx)("p",{className:"error",children:Object(u.qb)("Original file has been deleted.")})}},s.state={draftContent:"",draftOriginContent:"",draftInfo:{},isLoading:!0,isShowDiff:!0,showDiffTip:!1,activeTab:"reviewInfo",commentsList:[],changedNodes:[],originRepoName:"",isShowCommentDialog:!1,activeItem:null,historyList:[],showReviewerDialog:!1,reviewers:[],draftStatus:u.O},s.quote="",s.newIndex=null,s.oldIndex=null,s.changeIndex=-1,s.range=null,s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getOriginRepoInfo(),this.getDraftInfo(),this.listReviewers(),this.listComments(),this.initialContent(),document.addEventListener("selectionchange",this.setBtnPosition)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("selectionchange",this.setBtnPosition)}},{key:"render",value:function(){var e=this.state,t=e.draftInfo,n=e.reviewers,i=e.originRepoName,s=e.draftStatus,a=u.qc+"lib/"+u.N+"/file"+u.J+"?mode=edit",o="published"==this.state.draftStatus,r="open"==this.state.draftStatus&&"rw"==u.nb,c="open"==this.state.draftStatus&&"rw"==u.nb,l=ee(1e3*t.mtime).format("YYYY-MM-DD HH:mm"),d="".concat(u.qc,"profile/").concat(encodeURIComponent(t.last_modifier_email),"/");return Object(E.jsxs)("div",{className:"wrapper",children:[Object(E.jsxs)("div",{id:"header",className:"header review",children:[Object(E.jsxs)("div",{className:"cur-file-info",children:[Object(E.jsx)("div",{className:"info-item file-feature",children:Object(E.jsx)("span",{className:"sf2-icon-review"})}),Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{className:"info-item file-info",children:[Object(E.jsx)("span",{className:"file-name",children:u.I}),Object(E.jsx)("span",{className:"mx-2 file-review",children:Object(u.qb)("Review")})]}),!o&&t.mtime&&Object(E.jsxs)("div",{className:"last-modification",children:[Object(E.jsx)("a",{href:d,children:t.last_modifier_name}),Object(E.jsx)("span",{className:"mx-1",children:l})]})]})]}),Object(E.jsxs)("div",{className:"button-group",children:[this.renderDiffButton(),c&&Object(E.jsx)("a",{href:a,className:"mx-1",children:Object(E.jsx)(h.c,{className:"file-operation-btn",color:"secondary",children:Object(u.qb)("Edit Draft")})}),r&&Object(E.jsx)("button",{className:"btn btn-success file-operation-btn",title:Object(u.qb)("Publish draft"),onClick:this.onPublishDraft,children:Object(u.qb)("Publish")}),o&&Object(E.jsx)("button",{className:"btn btn-success file-operation-btn",title:Object(u.qb)("Published"),disabled:!0,children:Object(u.qb)("Published")})]})]}),Object(E.jsx)("div",{id:"main",className:"main",ref:"main",children:Object(E.jsxs)("div",{className:"cur-view-container",children:[Object(E.jsx)("div",{className:"cur-view-content",ref:"viewContent",children:this.state.isLoading?Object(E.jsx)("div",{className:"markdown-viewer-render-content article",children:Object(E.jsx)(b.a,{})}):Object(E.jsx)("div",{className:"markdown-viewer-render-content article",children:this.renderContent()})}),Object(E.jsx)("div",{className:"cur-view-right-part",children:Object(E.jsxs)("div",{className:"review-side-panel",children:[this.renderNavItems(),Object(E.jsxs)(h.E,{activeTab:this.state.activeTab,children:[Object(E.jsx)(h.F,{tabId:"reviewInfo",children:Object(E.jsxs)("div",{className:"review-side-panel-body",children:[Object(E.jsx)(se,{reviewers:n,toggleAddReviewerDialog:this.toggleAddReviewerDialog}),Object(E.jsx)(ae,{}),u.H&&Object(E.jsx)(re,{commentsList:this.state.commentsList}),!0===this.state.isShowDiff&&this.state.changedNodes.length>0&&Object(E.jsx)(ce,{changedNumber:this.state.changedNodes.length,scrollToChangedNode:this.scrollToChangedNode}),Object(E.jsx)(oe,{originRepoName:i,draftInfo:t,draftStatus:s})]})}),Object(E.jsx)(h.F,{tabId:"comments",className:"comments",children:Object(E.jsx)(P,{scrollToQuote:this.scrollToQuote,listComments:this.listComments,commentsList:this.state.commentsList,inResizing:!1})}),Object(E.jsx)(h.F,{tabId:"history",className:"history",children:Object(E.jsx)(K,{activeItem:this.state.activeItem,historyList:this.state.historyList,totalReversionCount:this.state.totalReversionCount,onHistoryItemClick:this.onHistoryItemClick,onHistoryListChange:this.onHistoryListChange})})]})]})})]})}),this.state.showReviewerDialog&&Object(E.jsx)(Z.a,{children:Object(E.jsx)(A,{showReviewerDialog:this.state.showReviewerDialog,toggleAddReviewerDialog:this.toggleAddReviewerDialog,draftID:u.K,reviewers:n})}),this.state.isShowCommentDialog&&Object(E.jsx)(Z.a,{children:Object(E.jsx)(F,{toggleCommentDialog:this.toggleCommentDialog,onCommentAdded:this.onCommentAdded,quote:this.quote,newIndex:this.newIndex,oldIndex:this.oldIndex})})]})}}]),n}(l.a.Component),se=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.reviewers;return Object(E.jsxs)("div",{className:"review-side-panel-item",children:[Object(E.jsxs)("div",{className:"review-side-panel-header",children:[Object(u.qb)("Reviewers"),Object(E.jsx)("i",{className:"fa fa-cog",onClick:this.props.toggleAddReviewerDialog})]}),e.length>0?e.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(E.jsxs)("div",{className:"reviewer-info",children:[Object(E.jsx)("img",{className:"avatar review-side-panel-avatar",src:e.avatar_url,alt:""}),Object(E.jsx)("span",{className:"reviewer-name ellipsis",children:e.user_name})]},t)})):Object(E.jsx)("span",{children:Object(u.qb)("No reviewer yet.")})]})}}]),n}(l.a.Component),ae=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(E.jsxs)("div",{className:"review-side-panel-item",children:[Object(E.jsx)("div",{className:"review-side-panel-header",children:Object(u.qb)("Author")}),Object(E.jsxs)("div",{className:"author-info",children:[Object(E.jsx)("img",{className:"avatar review-side-panel-avatar",src:u.h,alt:""}),Object(E.jsx)("span",{className:"author-name ellipsis",children:u.g})]})]})}}]),n}(l.a.Component),oe=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.draftStatus,n=e.originRepoName,i=u.fc+"/lib/"+u.N+"/file"+u.L;return Object(E.jsx)("div",{className:"dirent-table-container",children:Object(E.jsxs)("table",{className:"table-thead-hidden",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{width:"25%"}),Object(E.jsx)("th",{width:"75%"})]})}),Object(E.jsx)("tbody",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"align-text-top",children:Object(u.qb)("Location")}),Object(E.jsx)("td",{children:"open"===t?Object(E.jsxs)("span",{children:[n,u.J]}):Object(E.jsx)("a",{href:i,className:"text-dark",children:i})})]})})]})})}}]),n}(l.a.Component),re=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.commentsList,t=0;if(e)for(var n=0,i=e.length;n<i;n++)!1===e[n].resolved&&t++;return Object(E.jsxs)("div",{className:"review-side-panel-item",children:[Object(E.jsx)("div",{className:"review-side-panel-header",children:Object(u.qb)("Comments")}),Object(E.jsx)("div",{className:"changes-info",children:Object(E.jsxs)("span",{children:[Object(u.qb)("Unresolved comments:")," ",t]})})]})}}]),n}(l.a.Component),ce=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(E.jsxs)("div",{className:"review-side-panel-item",children:[Object(E.jsx)("div",{className:"review-side-panel-header",children:Object(u.qb)("Changes")}),Object(E.jsxs)("div",{className:"changes-info",children:[Object(E.jsxs)("span",{children:[Object(u.qb)("Number of changes:")," ",this.props.changedNumber]}),this.props.changedNumber>0&&Object(E.jsxs)("div",{children:[Object(E.jsx)("i",{className:"fa fa-arrow-circle-up",onClick:function(){e.props.scrollToChangedNode("down")}}),Object(E.jsx)("i",{className:"fa fa-arrow-circle-down",onClick:function(){e.props.scrollToChangedNode("up")}})]})]})]})}}]),n}(l.a.Component);m.a.render(Object(E.jsx)(ie,{}),document.getElementById("wrapper"))},444:function(e,t,n){}},[[1478,1,0]]]);
//# sourceMappingURL=draft.chunk.js.map