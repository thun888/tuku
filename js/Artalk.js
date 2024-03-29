/*!
 * Artalk v1.0.7
 * (c) 2016-2021 qwqaq.com
 * Link: https://github.com/ArtalkJS/Artalk
 */

!function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Artalk", [], t) : "object" == typeof exports ? exports.Artalk = t() : e.Artalk = t()
}(this, function() {
	return d = [function(e, t) {
		e.exports = function(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
	}, function(e, t) {
		e.exports = function(e) {
			return e && e.__esModule ? e : {
			default:
				e
			}
		}
	}, function(e, t) {
		function a(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		e.exports = function(e, t, n) {
			return t && a(e.prototype, t), n && a(e, n), e
		}
	}, function(e, t, n) {
		var a = n(20);
		e.exports = function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && a(e, t)
		}
	}, function(e, t, n) {
		var a = n(9),
			r = n(8);
		e.exports = function(e, t) {
			return !t || "object" !== a(t) && "function" != typeof t ? r(e) : t
		}
	}, function(t, e) {
		function n(e) {
			return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			}, n(e)
		}
		t.exports = n
	}, function(r, i, l) {
		var e, t;
		e = [i, l(0)], void 0 === (t = "function" == typeof(t = function(e, n) {
			"use strict";
			var t = l(1);
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, n = t(n);
			var a = function e(t) {
					(0, n["default"])(this, e);
					this.artalk = t
				};
			(e["default"] = a).displayName = "ArtalkContext", r.exports = i.
		default
		}) ? t.apply(i, e) : t) || (r.exports = t)
	}, function(i, l, s) {
		var e, t;
		e = [l, s(0), s(2)], void 0 === (t = "function" == typeof(t = function(e, t, n) {
			"use strict";
			var a = s(1);
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, t = a(t), n = a(n);
			var r = function() {
					function e() {
						(0, t["default"])(this, e)
					}(0, n["default"])(e, null, [{
						key: "createElement",
						value: function e() {
							var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
							var n = document.createElement("div");
							n.innerHTML = t.trim();
							return n.firstElementChild || n
						}
					}, {
						key: "getHeight",
						value: function e(t) {
							return parseFloat(getComputedStyle(t, null).height.replace("px", ""))
						}
					}, {
						key: "htmlEncode",
						value: function e(t) {
							var n = document.createElement("div");
							n.innerText = t;
							var a = n.innerHTML;
							n = null;
							return a
						}
					}, {
						key: "htmlDecode",
						value: function e(t) {
							var n = document.createElement("div");
							n.innerHTML = t;
							var a = n.innerText;
							n = null;
							return a
						}
					}, {
						key: "getLocationParmByName",
						value: function e(t) {
							var n = RegExp("[?&]".concat(t, "=([^&]*)")).exec(window.location.search);
							return n && decodeURIComponent(n[1].replace(/\+/g, " "))
						}
					}, {
						key: "getOffset",
						value: function e(t) {
							var n = t.getBoundingClientRect();
							return {
								top: n.top + window.scrollY,
								left: n.left + window.scrollX
							}
						}
					}, {
						key: "timeAgo",
						value: function e(t) {
							try {
								var n = t.getTime();
								var a = (new Date).getTime();
								var r = a - n;
								var i = Math.floor(r / (24 * 3600 * 1e3));
								if (i === 0) {
									var l = r % (24 * 3600 * 1e3);
									var s = Math.floor(l / (3600 * 1e3));
									if (s === 0) {
										var o = l % (3600 * 1e3);
										var c = Math.floor(o / (60 * 1e3));
										if (c === 0) {
											var u = o % (60 * 1e3);
											var d = Math.round(u / 1e3);
											return "".concat(d, " 秒前")
										}
										return "".concat(c, " 分钟前")
									}
									return "".concat(s, " 小时前")
								}
								if (i < 0) return "刚刚";
								if (i < 8) return "".concat(i, " 天前");
								return this.dateFormat(t)
							} catch (e) {
								console.error(e);
								return " - "
							}
						}
					}, {
						key: "padWithZeros",
						value: function e(t, n) {
							var a = t.toString();
							while (a.length < n) a = "0".concat(a);
							return a
						}
					}, {
						key: "dateFormat",
						value: function e(t) {
							var n = this.padWithZeros(t.getDate(), 2);
							var a = this.padWithZeros(t.getMonth() + 1, 2);
							var r = this.padWithZeros(t.getFullYear(), 2);
							return "".concat(r, "-").concat(a, "-").concat(n)
						}
					}]);
					return e
				}();
			(e["default"] = r).displayName = "Utils", i.exports = l.
		default
		}) ? t.apply(l, e) : t) || (i.exports = t)
	}, function(e, t) {
		e.exports = function(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}
	}, function(t, e) {
		function n(e) {
			return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(e) {
				return typeof e
			} : t.exports = n = function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			}, n(e)
		}
		t.exports = n
	}, function(h, m, k) {
		var e, t;
		e = [m, k(0), k(2), k(3), k(4), k(5), k(24), k(25), k(6), k(7)], void 0 === (t = "function" == typeof(t = function(e, l, t, n, s, o, a, c, r, u) {
			"use strict";
			var i = k(1);

			function d(r) {
				var i = f();
				return function e() {
					var t = (0, o["default"])(r),
						n;
					if (i) {
						var a = (0, o["default"])(this).constructor;
						n = Reflect.construct(t, arguments, a)
					} else n = t.apply(this, arguments);
					return (0, s["default"])(this, n)
				}
			}
			function f() {
				if (typeof Reflect === "undefined" || !Reflect.construct) return false;
				if (Reflect.construct.sham) return false;
				if (typeof Proxy === "function") return true;
				try {
					Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
					return true
				} catch (e) {
					return false
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, l = i(l), t = i(t), n = i(n), s = i(s), o = i(o), c = i(c), r = i(r), u = i(u);
			var p = function(e) {
					(0, n["default"])(i, e);
					var r = d(i);

					function i(e, t, n) {
						var a;
						(0, l["default"])(this, i);
						a = r.call(this, e);
						a.list = t;
						a.data = n;
						a.maxNestedNo = 3;
						a.children = [];
						a.data = Object.assign({}, a.data);
						a.data.date = a.data.date.replace(/-/g, "/");
						a.parent = null;
						a.nestedNum = 1;
						a.renderElem();
						return a
					}(0, t["default"])(i, [{
						key: "renderElem",
						value: function e() {
							var t = this;
							this.elem = u["default"].createElement(k(26)(this));
							this.mainEl = this.elem.querySelector(".artalk-comment-main");
							this.bodyEl = this.elem.querySelector(".artalk-body");
							this.contentEl = this.bodyEl.querySelector(".artalk-content");
							this.actionsEl = this.elem.querySelector(".artalk-comment-actions");
							this.childrenEl = null;
							var n = this.mainEl.querySelector(".artalk-collapsed .artalk-show-btn");
							if (n) n.addEventListener("click", function() {
								if (t.contentEl.classList.contains("artalk-hide")) {
									t.contentEl.classList.remove("artalk-hide");
									t.artalk.ui.playFadeInAnim(t.contentEl);
									n.innerHTML = "收起内容"
								} else {
									t.contentEl.classList.add("artalk-hide");
									n.innerHTML = "查看内容"
								}
							});
							this.initActionBtn();
							return this.elem
						}
					}, {
						key: "refreshUI",
						value: function e() {
							var t = this.elem;
							var n = this.renderElem();
							t.replaceWith(n);
							this.playFadeInAnim();
							this.artalk.eachComment(this.children, function(e) {
								e.parent.getChildrenEl().appendChild(e.renderElem());
								e.playFadeInAnim()
							})
						}
					}, {
						key: "initActionBtn",
						value: function e() {
							var t = this;
							var n = this.actionsEl.querySelector('[data-comment-action="reply"]');
							if (n) n.addEventListener("click", function() {
								t.artalk.editor.setReply(t)
							});
							var a = this.actionsEl.querySelector('[data-comment-action="collapse"]');
							if (a) a.addEventListener("click", function() {
								t.adminCollapse(a)
							});
							var r = this.actionsEl.querySelector('[data-comment-action="delete"]');
							if (r) r.addEventListener("click", function() {
								t.adminDelete(r)
							})
						}
					}, {
						key: "getIsRoot",
						value: function e() {
							return this.parent === null
						}
					}, {
						key: "getChildren",
						value: function e() {
							return this.children
						}
					}, {
						key: "putChild",
						value: function e(t) {
							t.parent = this;
							t.nestedNum = this.nestedNum + 1;
							this.children.push(t);
							this.getChildrenEl().appendChild(t.getElem());
							t.playFadeInAnim()
						}
					}, {
						key: "getChildrenEl",
						value: function e() {
							if (this.childrenEl === null) if (this.nestedNum < this.maxNestedNo) {
								this.childrenEl = u["default"].createElement('<div class="artalk-comment-children"></div>');
								this.mainEl.appendChild(this.childrenEl)
							} else this.childrenEl = this.parent.getChildrenEl();
							return this.childrenEl
						}
					}, {
						key: "getParent",
						value: function e() {
							return this.parent
						}
					}, {
						key: "getElem",
						value: function e() {
							return this.elem
						}
					}, {
						key: "getData",
						value: function e() {
							return this.data
						}
					}, {
						key: "getGravatarUrl",
						value: function e() {
							return "".concat(this.artalk.conf.gravatar.cdn).concat(this.data.email_encrypted, "?d=").concat(encodeURIComponent(this.artalk.conf.defaultAvatar), "&s=80")
						}
					}, {
						key: "getContentMarked",
						value: function e() {
							return this.artalk.marked(this.data.content)
						}
					}, {
						key: "getDateFormatted",
						value: function e() {
							return u["default"].timeAgo(new Date(this.data.date))
						}
					}, {
						key: "getUserUaBrowser",
						value: function e() {
							var t = (0, c["default"])(this.data.ua);
							return "".concat(t.browser, " ").concat(t.version)
						}
					}, {
						key: "getUserUaOS",
						value: function e() {
							var t = (0, c["default"])(this.data.ua);
							return "".concat(t.os, " ").concat(t.osVersion)
						}
					}, {
						key: "playFadeInAnim",
						value: function e() {
							this.artalk.ui.playFadeInAnim(this.elem)
						}
					}, {
						key: "adminCollapse",
						value: function e(n) {
							var a = this;
							if (n.classList.contains("artalk-in-process")) return;
							var r = n.innerText;
							var i = !this.data.is_collapsed;
							this.artalk.request("CommentCollapse", {
								id: this.data.id,
								nick: this.artalk.user.data.nick,
								email: this.artalk.user.data.email,
								password: this.artalk.user.data.password,
								is_collapsed: Number(i)
							}, function() {
								n.classList.add("artalk-in-process");
								n.innerText = i ? "折叠中..." : "展开中..."
							}, function() {}, function(e, t) {
								n.classList.remove("artalk-in-process");
								a.data.is_collapsed = t.is_collapsed;
								a.artalk.eachComment([a], function(e) {
									e.data.is_allow_reply = !t.is_collapsed
								});
								a.refreshUI();
								a.artalk.ui.playFadeInAnim(a.bodyEl);
								a.list.refreshUI()
							}, function(e, t) {
								n.classList.add("artalk-error");
								n.innerText = i ? "折叠失败" : "展开失败";
								setTimeout(function() {
									n.innerText = r;
									n.classList.remove("artalk-error");
									n.classList.remove("artalk-in-process")
								}, 2e3)
							})
						}
					}, {
						key: "adminDelete",
						value: function e(n) {
							var a = this;
							if (n.classList.contains("artalk-in-process")) return;
							var t = Number(n.getAttribute("data-btn-clicked") || 1);
							if (t < 2) {
								if (t === 1) {
									var r = n.innerText;
									n.innerText = "确认删除";
									setTimeout(function() {
										n.innerText = r;
										n.setAttribute("data-btn-clicked", "")
									}, 2e3);
									n.setAttribute("data-btn-clicked", String(t + 1))
								}
								return
							}
							var i = n.innerText;
							this.artalk.request("CommentDel", {
								id: this.data.id,
								nick: this.artalk.user.data.nick,
								email: this.artalk.user.data.email,
								password: this.artalk.user.data.password
							}, function() {
								n.classList.add("artalk-in-process");
								n.innerText = "删除中..."
							}, function() {}, function(e, t) {
								n.innerText = i;
								a.artalk.deleteComment(a);
								a.list.data.total -= 1;
								a.list.refreshUI();
								n.classList.remove("artalk-in-process")
							}, function(e, t) {
								n.classList.add("artalk-error");
								n.innerText = "删除失败";
								setTimeout(function() {
									n.innerText = i;
									n.classList.remove("artalk-error");
									n.classList.remove("artalk-in-process")
								}, 2e3)
							})
						}
					}]);
					return i
				}(r["default"]);
			(e["default"] = p).displayName = "Comment", h.exports = m.
		default
		}) ? t.apply(m, e) : t) || (h.exports = t)
	}, function(e, t, p) {
		var n, a;
		n = [t, p(0), p(2), p(3), p(4), p(5), p(6), p(7)], void 0 === (a = "function" == typeof(a = function(e, l, t, n, s, o, a, c) {
			"use strict";
			var r = p(1);

			function u(r) {
				var i = d();
				return function e() {
					var t = (0, o["default"])(r),
						n;
					if (i) {
						var a = (0, o["default"])(this).constructor;
						n = Reflect.construct(t, arguments, a)
					} else n = t.apply(this, arguments);
					return (0, s["default"])(this, n)
				}
			}
			function d() {
				if (typeof Reflect === "undefined" || !Reflect.construct) return false;
				if (Reflect.construct.sham) return false;
				if (typeof Proxy === "function") return true;
				try {
					Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
					return true
				} catch (e) {
					return false
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = f, e.Layer = void 0, l = r(l), t = r(t), n = r(n), s = r(s), o = r(o), a = r(a), c = r(c);
			var i = function(e) {
					(0, n["default"])(i, e);
					var r = u(i);

					function i(e, t, n) {
						var a;
						(0, l["default"])(this, i);
						a = r.call(this, e);
						a.name = t;
						a.maskClickHideEnable = true;
						a.initWrap();
						a.el = a.wrapEl.querySelector('[data-layer-name="'.concat(t, '"]'));
						if (a.el === null) if (!n) {
							a.el = c["default"].createElement();
							a.el.classList.add("artalk-layer-item")
						} else a.el = n;
						a.el.setAttribute("data-layer-name", t);
						a.el.style.display = "none";
						a.wrapEl.append(a.el);
						return a
					}(0, t["default"])(i, [{
						key: "initWrap",
						value: function e() {
							this.wrapEl = document.querySelector(".artalk-layer-wrap");
							if (!this.wrapEl) {
								this.wrapEl = c["default"].createElement('<div class="artalk-layer-wrap" style="display: none;"><div class="artalk-layer-mask"></div></div>');
								document.body.appendChild(this.wrapEl)
							}
							this.maskEl = this.wrapEl.querySelector(".artalk-layer-mask");
							this.artalk.ui.initDarkMode()
						}
					}, {
						key: "getName",
						value: function e() {
							return this.name
						}
					}, {
						key: "getWrapEl",
						value: function e() {
							return this.wrapEl
						}
					}, {
						key: "getEl",
						value: function e() {
							return this.el
						}
					}, {
						key: "show",
						value: function e() {
							var t = this;
							i.hideTimeoutList.forEach(function(e) {
								clearTimeout(e)
							});
							i.hideTimeoutList = [];
							this.wrapEl.style.display = "block";
							this.maskEl.style.display = "block";
							this.maskEl.classList.add("artalk-fade-in");
							this.el.style.display = "";
							this.maskEl.onclick = function() {
								if (t.maskClickHideEnable) t.hide()
							};
							document.body.style.overflow = "hidden"
						}
					}, {
						key: "hide",
						value: function e() {
							var t = this;
							i.hideTimeoutList.push(setTimeout(function() {
								t.wrapEl.style.display = "none";
								document.body.style.overflow = ""
							}, 450));
							this.wrapEl.classList.add("artalk-fade-out");
							i.hideTimeoutList.push(setTimeout(function() {
								t.wrapEl.style.display = "none";
								t.wrapEl.classList.remove("artalk-fade-out")
							}, 200));
							this.el.style.display = "none"
						}
					}, {
						key: "setMaskClickHide",
						value: function e(t) {
							this.maskClickHideEnable = t
						}
					}, {
						key: "disposeNow",
						value: function e() {
							this.wrapEl.style.display = "none";
							document.body.style.overflow = "";
							this.el.remove();
							this.el = null
						}
					}, {
						key: "dispose",
						value: function e() {
							this.hide();
							this.el.remove();
							this.el = null
						}
					}]);
					return i
				}(a["default"]);

			function f(e, t, n) {
				return new i(e, t, n)
			}(e.Layer = i).displayName = "Layer", i.hideTimeoutList = []
		}) ? a.apply(t, n) : a) || (e.exports = a)
	}, function(e, t) {
		var n = {
			utf8: {
				stringToBytes: function(e) {
					return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
				},
				bytesToString: function(e) {
					return decodeURIComponent(escape(n.bin.bytesToString(e)))
				}
			},
			bin: {
				stringToBytes: function(e) {
					for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
					return t
				},
				bytesToString: function(e) {
					for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
					return t.join("")
				}
			}
		};
		e.exports = n
	}, function(e, t, n) {
		e.exports = n(14)
	}, function(k, g, v) {
		var e, t;
		e = [g, v(0), v(2), v(15), v(16), v(18), v(19), v(21), v(22), v(39), v(45), v(48), v(7)], void 0 === (t = "function" == typeof(t = function(e, a, t, n, l, s, r, i, o, c, u, d, f) {
			"use strict";
			var p = v(1);
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, a = p(a), t = p(t), l = p(l), s = p(s), r = p(r), i = p(i), o = p(o), c = p(c), u = p(u), d = p(d), f = p(f);
			var h = {
				el: "",
				placeholder: "来啊，快活啊 ( ゜- ゜)",
				noComment: "快来成为第一个评论的人吧~",
				sendBtn: "Fire!",
				defaultAvatar: "mp",
				pageKey: "",
				serverUrl: "",
				emoticons: v(49),
				gravatar: {
					cdn: "https://gravatar.loli.net/avatar/"
				},
				darkMode: false
			},
				m = function() {
					function n(e) {
						var t = this;
						(0, a["default"])(this, n);
						this.runId = (new Date).getTime();
						this.comments = [];
						console.log("\n %c " + "Artalk v".concat("1.0.7", " %c 一款简洁有趣的可拓展评论系统 \n\n%c") + "> https://artalk.js.org\n" + "> https://github.com/ArtalkJS/Artalk\n", "color: #FFF; background: #1DAAFF; padding:5px 0;", "color: #FFF; background: #656565; padding:5px 0;", "");
						this.conf = Object.assign(Object.assign({}, h), e);
						try {
							this.el = document.querySelector(this.conf.el);
							if (this.el === null) throw Error('Sorry, Target element "'.concat(this.conf.el, '" was not found.'))
						} catch (e) {
							console.error(e);
							throw new Error("Artalk config `el` error")
						}
						this.el.classList.add("artalk");
						this.el.setAttribute("artalk-run-id", this.runId.toString());
						if (this.el.innerHTML.trim() !== "") this.el.innerHTML = "";
						this.ui = new d["default"](this);
						this.user = new r["default"](this);
						this.checker = new i["default"](this);
						this.initMarked();
						this.editor = new o["default"](this);
						this.list = new c["default"](this);
						this.sidebar = new u["default"](this);
						this.list.reqComments();
						window.addEventListener("hashchange", function() {
							t.checkGoToCommentByUrlHash()
						})
					}(0, t["default"])(n, [{
						key: "eachComment",
						value: function e(t, n) {
							var a = this;
							if (t.length === 0) return;
							t.every(function(e) {
								if (n(e, t) === false) return false;
								a.eachComment(e.getChildren(), n);
								return true
							})
						}
					}, {
						key: "findComment",
						value: function e(t) {
							var n = null;
							this.eachComment(this.comments, function(e) {
								if (e.data.id === t) {
									n = e;
									return false
								}
								return true
							});
							return n
						}
					}, {
						key: "getCommentCount",
						value: function e() {
							var t = 0;
							this.eachComment(this.comments, function() {
								t++
							});
							return t
						}
					}, {
						key: "deleteComment",
						value: function e(t) {
							var n;
							if (typeof t === "number") {
								n = this.findComment(t);
								if (!n) throw Error("未找到评论 ".concat(t))
							} else n = t;
							n.getElem().remove();
							this.eachComment(this.comments, function(e, t) {
								if (e === n) {
									t.splice(t.indexOf(e), 1);
									return false
								}
								return true
							})
						}
					}, {
						key: "clearComments",
						value: function e() {
							this.list.commentsWrapEl.innerHTML = "";
							this.list.data = undefined;
							this.comments = []
						}
					}, {
						key: "request",
						value: function e(t, n, a, r, i, l) {
							a();
							n = Object.assign({
								action: t
							}, n);
							var s = new FormData;
							Object.keys(n).forEach(function(e) {
								return s.set(e, n[e])
							});
							var o = new XMLHttpRequest;
							o.timeout = 6e4;
							o.open("POST", this.conf.serverUrl, true);
							o.onload = function() {
								r();
								if (o.status >= 200 && o.status < 400) {
									var e = JSON.parse(o.response);
									if (e.success) i(e.msg, e.data);
									else l(e.msg, e.data)
								} else l("服务器响应错误 Code: ".concat(o.status), {})
							};
							o.onerror = function() {
								r();
								l("网络错误", {})
							};
							o.send(s)
						}
					}, {
						key: "checkGoToCommentByUrlHash",
						value: function e() {
							var t = Number(f["default"].getLocationParmByName("artalk_comment"));
							if (!t) {
								var n = window.location.hash.match(/#artalk-comment-([0-9]+)/);
								if (!n || !n[1] || Number.isNaN(Number(n[1]))) return;
								t = Number(n[1])
							}
							var a = this.findComment(t);
							if (!a && this.list.hasMoreComments) {
								this.list.readMore();
								return
							}
							if (!a) return;
							this.ui.scrollIntoView(a.getElem(), false);
							setTimeout(function() {
								a.getElem().classList.add("artalk-flash-once")
							}, 800)
						}
					}, {
						key: "initMarked",
						value: function e() {
							var r = new l["default"].Renderer;
							var i = r.link;
							r.link = function(e, t, n) {
								var a = i.call(r, e, t, n);
								return a.replace(/^<a /, '<a target="_blank" rel="nofollow" ')
							};
							var t = l["default"];
							t.setOptions({
								renderer: r,
								highlight: function e(t) {
									return (0, s["default"])(t)
								},
								pedantic: false,
								gfm: true,
								tables: true,
								breaks: true,
								sanitize: true,
								smartLists: true,
								smartypants: true,
								xhtml: false
							});
							this.marked = t
						}
					}]);
					return n
				}();
			(e["default"] = m).displayName = "Artalk", k.exports = g.
		default
		}) ? t.apply(g, e) : t) || (k.exports = t)
	}, function(e, t, n) {}, function(b, e, t) {
		(function(e) {
			!
			function() {
				"use strict";
				var m = {
					newline: /^\n+/,
					code: /^( {4}[^\n]+\n*)+/,
					fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
					hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
					heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
					blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
					list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
					html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
					def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
					nptable: f,
					table: f,
					lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
					_paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
					text: /^[^\n]+/
				};

				function o(e) {
					this.tokens = [], this.tokens.links = Object.create(null), this.options = e || y.defaults, this.rules = m.normal, this.options.pedantic ? this.rules = m.pedantic : this.options.gfm && (this.rules = m.gfm)
				}
				m._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, m._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, m.def = e(m.def).replace("label", m._label).replace("title", m._title).getRegex(), m.bullet = /(?:[*+-]|\d{1,9}\.)/, m.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/, m.item = e(m.item, "gm").replace(/bull/g, m.bullet).getRegex(), m.list = e(m.list).replace(/bull/g, m.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + m.def.source + ")").getRegex(), m._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", m._comment = /<!--(?!-?>)[\s\S]*?-->/, m.html = e(m.html, "i").replace("comment", m._comment).replace("tag", m._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), m.paragraph = e(m._paragraph).replace("hr", m.hr).replace("heading", " {0,3}#{1,6} +").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", m._tag).getRegex(), m.blockquote = e(m.blockquote).replace("paragraph", m.paragraph).getRegex(), m.normal = p({}, m), m.gfm = p({}, m.normal, {
					nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
					table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
				}), m.pedantic = p({}, m.normal, {
					html: e("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", m._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
					def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
					heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
					fences: f,
					paragraph: e(m.normal._paragraph).replace("hr", m.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", m.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
				}), o.rules = m, o.lex = function(e, t) {
					return new o(t).lex(e)
				}, o.prototype.lex = function(e) {
					return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/ /g, " ").replace(/␤/g, "\n"), this.token(e, !0)
				}, o.prototype.token = function(e, t) {
					var n, a, r, i, l, s, o, c, u, d, f, p;
					for (e = e.replace(/^ +$/gm, ""); e;) if ((a = this.rules.newline.exec(e)) && (e = e.substring(a[0].length), 1 < a[0].length && this.tokens.push({
						type: "space"
					})), a = this.rules.code.exec(e)) {
						var h = this.tokens[this.tokens.length - 1];
						e = e.substring(a[0].length), h && "paragraph" === h.type ? h.text += "\n" + a[0].trimRight() : (a = a[0].replace(/^ {4}/gm, ""), this.tokens.push({
							type: "code",
							codeBlockStyle: "indented",
							text: this.options.pedantic ? a : v(a, "\n")
						}))
					} else if (a = this.rules.fences.exec(e)) e = e.substring(a[0].length), this.tokens.push({
						type: "code",
						lang: a[2] && a[2].trim(),
						text: a[3] || ""
					});
					else if (a = this.rules.heading.exec(e)) e = e.substring(a[0].length), this.tokens.push({
						type: "heading",
						depth: a[1].length,
						text: a[2]
					});
					else if ((a = this.rules.nptable.exec(e)) && (i = {
						type: "table",
						header: g(a[1].replace(/^ *| *\| *$/g, "")),
						align: a[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
						cells: a[3] ? a[3].replace(/\n$/, "").split("\n") : []
					}).header.length === i.align.length) {
						for (e = e.substring(a[0].length), c = 0; c < i.align.length; c++) / ^ * -+: * $ / .test(i.align[c]) ? i.align[c] = "right" : /^ *:-+: *$/.test(i.align[c]) ? i.align[c] = "center" : /^ *:-+ *$/.test(i.align[c]) ? i.align[c] = "left" : i.align[c] = null;
						for (c = 0; c < i.cells.length; c++) i.cells[c] = g(i.cells[c], i.header.length);
						this.tokens.push(i)
					} else if (a = this.rules.hr.exec(e)) e = e.substring(a[0].length), this.tokens.push({
						type: "hr"
					});
					else if (a = this.rules.blockquote.exec(e)) e = e.substring(a[0].length), this.tokens.push({
						type: "blockquote_start"
					}), a = a[0].replace(/^ *> ?/gm, ""), this.token(a, t), this.tokens.push({
						type: "blockquote_end"
					});
					else if (a = this.rules.list.exec(e)) {
						for (e = e.substring(a[0].length), l = {
							type: "list_start",
							ordered: d = 1 < (r = a[2]).length,
							start: d ? +r : "",
							loose: !1
						}, this.tokens.push(l), n = !(s = []), u = (a = a[0].match(this.rules.item)).length, c = 0; c < u; c++) p = (i = a[c]).length, ~ (i = i.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ") && (p -= i.length, i = this.options.pedantic ? i.replace(/^ {1,4}/gm, "") : i.replace(new RegExp("^ {1," + p + "}", "gm"), "")), c !== u - 1 && (f = m.bullet.exec(a[c + 1])[0], (1 < r.length ? 1 === f.length : 1 < f.length || this.options.smartLists && f !== r) && (e = a.slice(c + 1).join("\n") + e, c = u - 1)), o = n || /\n\n(?!\s*$)/.test(i), c !== u - 1 && (n = "\n" === i.charAt(i.length - 1), o = o || n), o && (l.loose = !0), p = void 0, (f = /^\[[ xX]\] /.test(i)) && (p = " " !== i[1], i = i.replace(/^\[[ xX]\] +/, "")), o = {
							type: "list_item_start",
							task: f,
							checked: p,
							loose: o
						}, s.push(o), this.tokens.push(o), this.token(i, !1), this.tokens.push({
							type: "list_item_end"
						});
						if (l.loose) for (u = s.length, c = 0; c < u; c++) s[c].loose = !0;
						this.tokens.push({
							type: "list_end"
						})
					} else if (a = this.rules.html.exec(e)) e = e.substring(a[0].length), this.tokens.push({
						type: this.options.sanitize ? "paragraph" : "html",
						pre: !this.options.sanitizer && ("pre" === a[1] || "script" === a[1] || "style" === a[1]),
						text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : k(a[0]) : a[0]
					});
					else if (t && (a = this.rules.def.exec(e))) e = e.substring(a[0].length), a[3] && (a[3] = a[3].substring(1, a[3].length - 1)), d = a[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[d] || (this.tokens.links[d] = {
						href: a[2],
						title: a[3]
					});
					else if ((a = this.rules.table.exec(e)) && (i = {
						type: "table",
						header: g(a[1].replace(/^ *| *\| *$/g, "")),
						align: a[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
						cells: a[3] ? a[3].replace(/\n$/, "").split("\n") : []
					}).header.length === i.align.length) {
						for (e = e.substring(a[0].length), c = 0; c < i.align.length; c++) / ^ * -+: * $ / .test(i.align[c]) ? i.align[c] = "right" : /^ *:-+: *$/.test(i.align[c]) ? i.align[c] = "center" : /^ *:-+ *$/.test(i.align[c]) ? i.align[c] = "left" : i.align[c] = null;
						for (c = 0; c < i.cells.length; c++) i.cells[c] = g(i.cells[c].replace(/^ *\| *| *\| *$/g, ""), i.header.length);
						this.tokens.push(i)
					} else if (a = this.rules.lheading.exec(e)) e = e.substring(a[0].length), this.tokens.push({
						type: "heading",
						depth: "=" === a[2].charAt(0) ? 1 : 2,
						text: a[1]
					});
					else if (t && (a = this.rules.paragraph.exec(e))) e = e.substring(a[0].length), this.tokens.push({
						type: "paragraph",
						text: "\n" === a[1].charAt(a[1].length - 1) ? a[1].slice(0, -1) : a[1]
					});
					else if (a = this.rules.text.exec(e)) e = e.substring(a[0].length), this.tokens.push({
						type: "text",
						text: a[0]
					});
					else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
					return this.tokens
				};
				var n = {
					escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
					autolink: /^<(scheme:[^\s-<>]*|email)>/,
					url: f,
					tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
					link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
					reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
					nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
					strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
					em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
					code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
					br: /^( {2,}|\\)\n(?!\s*$)/,
					del: f,
					text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
				};

				function c(e, t) {
					if (this.options = t || y.defaults, this.links = e, this.rules = n.normal, this.renderer = this.options.renderer || new a, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
					this.options.pedantic ? this.rules = n.pedantic : this.options.gfm && (this.options.breaks ? this.rules = n.breaks : this.rules = n.gfm)
				}
				function a(e) {
					this.options = e || y.defaults
				}
				function r() {}
				function u(e) {
					this.tokens = [], this.token = null, this.options = e || y.defaults, this.options.renderer = this.options.renderer || new a, this.renderer = this.options.renderer, this.renderer.options = this.options, this.slugger = new t
				}
				function t() {
					this.seen = {}
				}
				function k(e, t) {
					if (t) {
						if (k.escapeTest.test(e)) return e.replace(k.escapeReplace, function(e) {
							return k.replacements[e]
						})
					} else if (k.escapeTestNoEncode.test(e)) return e.replace(k.escapeReplaceNoEncode, function(e) {
						return k.replacements[e]
					});
					return e
				}
				function d(e) {
					return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function(e, t) {
						return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
					})
				}
				function e(n, e) {
					return n = n.source || n, e = e || "", {
						replace: function(e, t) {
							return t = (t = t.source || t).replace(/(^|[^\[])\^/g, "$1"), n = n.replace(e, t), this
						},
						getRegex: function() {
							return new RegExp(n, e)
						}
					}
				}
				function i(e, t, n) {
					if (e) {
						try {
							var a = decodeURIComponent(d(n)).replace(/[^\w:]/g, "").toLowerCase()
						} catch (e) {
							return null
						}
						if (0 === a.indexOf("javascript:") || 0 === a.indexOf("vbscript:") || 0 === a.indexOf("data:")) return null
					}
					t && !s.test(n) && (n = function(e, t) {
						l[" " + e] || (/^[^:]+:\/*[^/]*$/.test(e) ? l[" " + e] = e + "/" : l[" " + e] = v(e, "/", !0));
						return e = l[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + t : e + t
					}(t, n));
					try {
						n = encodeURI(n).replace(/%25/g, "%")
					} catch (e) {
						return null
					}
					return n
				}
				n._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~", n.em = e(n.em).replace(/punctuation/g, n._punctuation).getRegex(), n._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, n._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, n._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, n.autolink = e(n.autolink).replace("scheme", n._scheme).replace("email", n._email).getRegex(), n._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, n.tag = e(n.tag).replace("comment", m._comment).replace("attribute", n._attribute).getRegex(), n._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, n._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s-]*/, n._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, n.link = e(n.link).replace("label", n._label).replace("href", n._href).replace("title", n._title).getRegex(), n.reflink = e(n.reflink).replace("label", n._label).getRegex(), n.normal = p({}, n), n.pedantic = p({}, n.normal, {
					strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
					em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
					link: e(/^!?\[(label)\]\((.*?)\)/).replace("label", n._label).getRegex(),
					reflink: e(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", n._label).getRegex()
				}), n.gfm = p({}, n.normal, {
					escape: e(n.escape).replace("])", "~|])").getRegex(),
					_extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
					url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
					_backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
					del: /^~+(?=\S)([\s\S]*?\S)~+/,
					text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
				}), n.gfm.url = e(n.gfm.url, "i").replace("email", n.gfm._extended_email).getRegex(), n.breaks = p({}, n.gfm, {
					br: e(n.br).replace("{2,}", "*").getRegex(),
					text: e(n.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
				}), c.rules = n, c.output = function(e, t, n) {
					return new c(t, n).output(e)
				}, c.prototype.output = function(e) {
					for (var t, n, a, r, i = ""; e;) if (a = this.rules.escape.exec(e)) e = e.substring(a[0].length), i += k(a[1]);
					else if (a = this.rules.tag.exec(e))!this.inLink && /^<a /i.test(a[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1), !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(a[0]) ? this.inRawBlock = !0 : this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0]) && (this.inRawBlock = !1), e = e.substring(a[0].length), i += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : k(a[0]) : a[0];
					else if (a = this.rules.link.exec(e)) {
						var l, s = function(e, t) {
								if (-1 === e.indexOf(t[1])) return -1;
								for (var n = 0, a = 0; a < e.length; a++) if ("\\" === e[a]) a++;
								else if (e[a] === t[0]) n++;
								else if (e[a] === t[1] && --n < 0) return a;
								return -1
							}(a[2], "()"); - 1 < s && (l = 4 + a[1].length + s, a[2] = a[2].substring(0, s), a[0] = a[0].substring(0, l).trim(), a[3] = ""), e = e.substring(a[0].length), this.inLink = !0, s = a[2], l = this.options.pedantic ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s)) ? (s = t[1], t[3]) : "" : a[3] ? a[3].slice(1, -1) : "", s = s.trim().replace(/^<([\s\S]*)>$/, "$1"), i += this.outputLink(a, {
							href: c.escapes(s),
							title: c.escapes(l)
						}), this.inLink = !1
					} else if ((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) e = e.substring(a[0].length), t = (a[2] || a[1]).replace(/\s+/g, " "), (t = this.links[t.toLowerCase()]) && t.href ? (this.inLink = !0, i += this.outputLink(a, t), this.inLink = !1) : (i += a[0].charAt(0), e = a[0].substring(1) + e);
					else if (a = this.rules.strong.exec(e)) e = e.substring(a[0].length), i += this.renderer.strong(this.output(a[4] || a[3] || a[2] || a[1]));
					else if (a = this.rules.em.exec(e)) e = e.substring(a[0].length), i += this.renderer.em(this.output(a[6] || a[5] || a[4] || a[3] || a[2] || a[1]));
					else if (a = this.rules.code.exec(e)) e = e.substring(a[0].length), i += this.renderer.codespan(k(a[2].trim(), !0));
					else if (a = this.rules.br.exec(e)) e = e.substring(a[0].length), i += this.renderer.br();
					else if (a = this.rules.del.exec(e)) e = e.substring(a[0].length), i += this.renderer.del(this.output(a[1]));
					else if (a = this.rules.autolink.exec(e)) e = e.substring(a[0].length), s = "@" === a[2] ? "mailto:" + (n = k(this.mangle(a[1]))) : n = k(a[1]), i += this.renderer.link(s, null, n);
					else if (this.inLink || !(a = this.rules.url.exec(e))) {
						if (a = this.rules.text.exec(e)) e = e.substring(a[0].length), this.inRawBlock ? i += this.renderer.text(this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : k(a[0]) : a[0]) : i += this.renderer.text(k(this.smartypants(a[0])));
						else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
					} else {
						if ("@" === a[2]) s = "mailto:" + (n = k(a[0]));
						else {
							for (; r = a[0], a[0] = this.rules._backpedal.exec(a[0])[0], r !== a[0];);
							n = k(a[0]), s = "www." === a[1] ? "http://" + n : n
						}
						e = e.substring(a[0].length), i += this.renderer.link(s, null, n)
					}
					return i
				}, c.escapes = function(e) {
					return e && e.replace(c.rules._escapes, "$1")
				}, c.prototype.outputLink = function(e, t) {
					var n = t.href,
						t = t.title ? k(t.title) : null;
					return "!" !== e[0].charAt(0) ? this.renderer.link(n, t, this.output(e[1])) : this.renderer.image(n, t, k(e[1]))
				}, c.prototype.smartypants = function(e) {
					return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-—/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-—/(\[{‘\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
				}, c.prototype.mangle = function(e) {
					if (!this.options.mangle) return e;
					for (var t, n = "", a = e.length, r = 0; r < a; r++) t = e.charCodeAt(r), .5 < Math.random() && (t = "x" + t.toString(16)), n += "&#" + t + ";";
					return n
				}, a.prototype.code = function(e, t, n) {
					var a = (t || "").match(/\S*/)[0];
					return !this.options.highlight || null != (t = this.options.highlight(e, a)) && t !== e && (n = !0, e = t), a ? '<pre><code class="' + this.options.langPrefix + k(a, !0) + '">' + (n ? e : k(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : k(e, !0)) + "</code></pre>"
				}, a.prototype.blockquote = function(e) {
					return "<blockquote>\n" + e + "</blockquote>\n"
				}, a.prototype.html = function(e) {
					return e
				}, a.prototype.heading = function(e, t, n, a) {
					return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + a.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
				}, a.prototype.hr = function() {
					return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
				}, a.prototype.list = function(e, t, n) {
					var a = t ? "ol" : "ul";
					return "<" + a + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + a + ">\n"
				}, a.prototype.listitem = function(e) {
					return "<li>" + e + "</li>\n"
				}, a.prototype.checkbox = function(e) {
					return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
				}, a.prototype.paragraph = function(e) {
					return "<p>" + e + "</p>\n"
				}, a.prototype.table = function(e, t) {
					return "<table>\n<thead>\n" + e + "</thead>\n" + (t = t && "<tbody>" + t + "</tbody>") + "</table>\n"
				}, a.prototype.tablerow = function(e) {
					return "<tr>\n" + e + "</tr>\n"
				}, a.prototype.tablecell = function(e, t) {
					var n = t.header ? "th" : "td";
					return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
				}, a.prototype.strong = function(e) {
					return "<strong>" + e + "</strong>"
				}, a.prototype.em = function(e) {
					return "<em>" + e + "</em>"
				}, a.prototype.codespan = function(e) {
					return "<code>" + e + "</code>"
				}, a.prototype.br = function() {
					return this.options.xhtml ? "<br/>" : "<br>"
				}, a.prototype.del = function(e) {
					return "<del>" + e + "</del>"
				}, a.prototype.link = function(e, t, n) {
					if (null === (e = i(this.options.sanitize, this.options.baseUrl, e))) return n;
					e = '<a href="' + k(e) + '"';
					return t && (e += ' title="' + t + '"'), e += ">" + n + "</a>"
				}, a.prototype.image = function(e, t, n) {
					if (null === (e = i(this.options.sanitize, this.options.baseUrl, e))) return n;
					n = '<img src="' + e + '" alt="' + n + '"';
					return t && (n += ' title="' + t + '"'), n += this.options.xhtml ? "/>" : ">"
				}, a.prototype.text = function(e) {
					return e
				}, r.prototype.strong = r.prototype.em = r.prototype.codespan = r.prototype.del = r.prototype.text = function(e) {
					return e
				}, r.prototype.link = r.prototype.image = function(e, t, n) {
					return "" + n
				}, r.prototype.br = function() {
					return ""
				}, u.parse = function(e, t) {
					return new u(t).parse(e)
				}, u.prototype.parse = function(e) {
					this.inline = new c(e.links, this.options), this.inlineText = new c(e.links, p({}, this.options, {
						renderer: new r
					})), this.tokens = e.reverse();
					for (var t = ""; this.next();) t += this.tok();
					return t
				}, u.prototype.next = function() {
					return this.token = this.tokens.pop(), this.token
				}, u.prototype.peek = function() {
					return this.tokens[this.tokens.length - 1] || 0
				}, u.prototype.parseText = function() {
					for (var e = this.token.text;
					"text" === this.peek().type;) e += "\n" + this.next().text;
					return this.inline.output(e)
				}, u.prototype.tok = function() {
					switch (this.token.type) {
					case "space":
						return "";
					case "hr":
						return this.renderer.hr();
					case "heading":
						return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, d(this.inlineText.output(this.token.text)), this.slugger);
					case "code":
						return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
					case "table":
						for (var e, t, n = "", a = "", r = "", i = 0; i < this.token.header.length; i++) r += this.renderer.tablecell(this.inline.output(this.token.header[i]), {
							header: !0,
							align: this.token.align[i]
						});
						for (n += this.renderer.tablerow(r), i = 0; i < this.token.cells.length; i++) {
							for (e = this.token.cells[i], r = "", t = 0; t < e.length; t++) r += this.renderer.tablecell(this.inline.output(e[t]), {
								header: !1,
								align: this.token.align[t]
							});
							a += this.renderer.tablerow(r)
						}
						return this.renderer.table(n, a);
					case "blockquote_start":
						for (a = "";
						"blockquote_end" !== this.next().type;) a += this.tok();
						return this.renderer.blockquote(a);
					case "list_start":
						a = "";
						for (var n = this.token.ordered, l = this.token.start;
						"list_end" !== this.next().type;) a += this.tok();
						return this.renderer.list(a, n, l);
					case "list_item_start":
						a = "";
						var s = this.token.loose,
							o = this.token.checked,
							l = this.token.task;
						for (this.token.task && (a += this.renderer.checkbox(o));
						"list_item_end" !== this.next().type;) a += s || "text" !== this.token.type ? this.tok() : this.parseText();
						return this.renderer.listitem(a, l, o);
					case "html":
						return this.renderer.html(this.token.text);
					case "paragraph":
						return this.renderer.paragraph(this.inline.output(this.token.text));
					case "text":
						return this.renderer.paragraph(this.parseText());
					default:
						o = 'Token with "' + this.token.type + '" type was not found.';
						if (!this.options.silent) throw new Error(o);
						console.log(o)
					}
				}, t.prototype.slug = function(e) {
					var t = e.toLowerCase().trim().replace(/[ -⁯⸀-⹿\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
					if (this.seen.hasOwnProperty(t)) for (var n = t; this.seen[n]++, t = n + "-" + this.seen[n], this.seen.hasOwnProperty(t););
					return this.seen[t] = 0, t
				}, k.escapeTest = /[&<>"']/, k.escapeReplace = /[&<>"']/g, k.replacements = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#39;"
				}, k.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/, k.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
				var l = {},
					s = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

				function f() {}
				function p(e) {
					for (var t, n, a = 1; a < arguments.length; a++) for (n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					return e
				}
				function g(e, t) {
					var n = e.replace(/\|/g, function(e, t, n) {
						for (var a = !1, r = t; 0 <= --r && "\\" === n[r];) a = !a;
						return a ? "|" : " |"
					}).split(/ \|/),
						a = 0;
					if (n.length > t) n.splice(t);
					else for (; n.length < t;) n.push("");
					for (; a < n.length; a++) n[a] = n[a].trim().replace(/\\\|/g, "|");
					return n
				}
				function v(e, t, n) {
					if (0 === e.length) return "";
					for (var a = 0; a < e.length;) {
						var r = e.charAt(e.length - a - 1);
						if (r !== t || n) {
							if (r === t || !n) break;
							a++
						} else a++
					}
					return e.substr(0, e.length - a)
				}
				function h(e) {
					e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
				}
				function y(e, n, a) {
					if (null == e) throw new Error("marked(): input parameter is undefined or null");
					if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
					if (a || "function" == typeof n) {
						a || (a = n, n = null), h(n = p({}, y.defaults, n || {}));
						var r, i, l = n.highlight,
							t = 0;
						try {
							r = o.lex(e, n)
						} catch (e) {
							return a(e)
						}
						i = r.length;
						var s = function(t) {
								if (t) return n.highlight = l, a(t);
								var e;
								try {
									e = u.parse(r, n)
								} catch (e) {
									t = e
								}
								return n.highlight = l, t ? a(t) : a(null, e)
							};
						if (!l || l.length < 3) return s();
						if (delete n.highlight, !i) return s();
						for (; t < r.length; t++)!
						function(n) {
							"code" !== n.type ? --i || s() : l(n.text, n.lang, function(e, t) {
								return e ? s(e) : null == t || t === n.text ? --i || s() : (n.text = t, n.escaped = !0, void(--i || s()))
							})
						}(r[t])
					} else try {
						return h(n = n && p({}, y.defaults, n)), u.parse(o.lex(e, n), n)
					} catch (e) {
						if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (n || y.defaults).silent) return "<p>An error occurred:</p><pre>" + k(e.message + "", !0) + "</pre>";
						throw e
					}
				}
				f.exec = f, y.options = y.setOptions = function(e) {
					return p(y.defaults, e), y
				}, y.defaults = (y.getDefaults = function() {
					return {
						baseUrl: null,
						breaks: !1,
						gfm: !0,
						headerIds: !0,
						headerPrefix: "",
						highlight: null,
						langPrefix: "language-",
						mangle: !0,
						pedantic: !1,
						renderer: new a,
						sanitize: !1,
						sanitizer: null,
						silent: !1,
						smartLists: !1,
						smartypants: !1,
						xhtml: !1
					}
				})(), y.Parser = u, y.parser = u.parse, y.Renderer = a, y.TextRenderer = r, y.Lexer = o, y.lexer = o.lex, y.InlineLexer = c, y.inlineLexer = c.output, y.Slugger = t, y.parse = y, b.exports = y
			}()
		}).call(this, t(17))
	}, function(e, t) {
		var n = function() {
				return this
			}();
		try {
			n = n || new Function("return this")()
		} catch (e) {
			"object" == typeof window && (n = window)
		}
		e.exports = n
	}, function(e, t, n) {
		e.exports = function() {
			"use strict";

			function e(e, t) {
				return t = {
					exports: {}
				}, e(t, t.exports), t.exports
			}
			var o = e(function(e) {
				"use strict";
				var t = e.exports = function() {
						return new RegExp("(?:" + t.line().source + ")|(?:" + t.block().source + ")", "gm")
					};
				t.line = function() {
					return /(?:^|\s)\/\/(.+?)$/gm
				};
				t.block = function() {
					return /\/\*([\S\s]*?)\*\//gm
				}
			}),
				c = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"],
				t;

			function u(e) {
				return '<span style="color: slategray">' + e + "</span>"
			}
			return function(e, t) {
				if (t === void 0) t = {};
				var i = t.colors;
				if (i === void 0) i = c;
				var l = 0;
				var s = {};
				var n = /[一-鿿㐀-䶿豈-﫿぀-ゟ가-힯Ѐ-ӿ]+|\w+/;
				var a = /</;
				var r = new RegExp("(" + n.source + "|" + a.source + ")|(" + o().source + ")", "gmi");
				return e.replace(r, function(e, t, n) {
					if (n) return u(n);
					if (t === "<") return "&lt;";
					var a;
					if (s[t]) a = s[t];
					else {
						a = i[l];
						s[t] = a
					}
					var r = '<span style="color: #' + a + '">' + t + "</span>";
					l = ++l % i.length;
					return r
				})
			}
		}()
	}, function(d, f, p) {
		var e, t;
		e = [f, p(0), p(2), p(3), p(4), p(5), p(6)], void 0 === (t = "function" == typeof(t = function(e, i, t, n, l, s, a) {
			"use strict";
			var r = p(1);

			function o(r) {
				var i = c();
				return function e() {
					var t = (0, s["default"])(r),
						n;
					if (i) {
						var a = (0, s["default"])(this).constructor;
						n = Reflect.construct(t, arguments, a)
					} else n = t.apply(this, arguments);
					return (0, l["default"])(this, n)
				}
			}
			function c() {
				if (typeof Reflect === "undefined" || !Reflect.construct) return false;
				if (Reflect.construct.sham) return false;
				if (typeof Proxy === "function") return true;
				try {
					Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
					return true
				} catch (e) {
					return false
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, i = r(i), t = r(t), n = r(n), l = r(l), s = r(s);
			var u = function(e) {
					(0, n["default"])(r, e);
					var a = o(r);

					function r(e) {
						var t;
						(0, i["default"])(this, r);
						t = a.call(this, e);
						var n = JSON.parse(window.localStorage.getItem("ArtalkUser") || "{}");
						t.data = {
							nick: n.nick || "",
							email: n.email || "",
							link: n.link || "",
							password: n.password || "",
							isAdmin: n.isAdmin || false
						};
						return t
					}(0, t["default"])(r, [{
						key: "save",
						value: function e() {
							window.localStorage.setItem("ArtalkUser", JSON.stringify(this.data))
						}
					}, {
						key: "checkHasBasicUserInfo",
						value: function e() {
							return !!this.data.nick && !! this.data.email
						}
					}]);
					return r
				}((a = r(a))["default"]);
			(e["default"] = u).displayName = "User", d.exports = f.
		default
		}) ? t.apply(f, e) : t) || (d.exports = t)
	}, function(n, e) {
		function a(e, t) {
			return n.exports = a = Object.setPrototypeOf ||
			function(e, t) {
				return e.__proto__ = t, e
			}, a(e, t)
		}
		n.exports = a
	}, function(d, f, p) {
		var e, t;
		e = [f, p(9), p(0), p(2), p(3), p(4), p(5), p(6), p(7), p(11)], void 0 === (t = "function" == typeof(t = function(e, h, a, r, i, l, s, t, m, k) {
			"use strict";
			var n = p(1);

			function o(r) {
				var i = c();
				return function e() {
					var t = (0, s["default"])(r),
						n;
					if (i) {
						var a = (0, s["default"])(this).constructor;
						n = Reflect.construct(t, arguments, a)
					} else n = t.apply(this, arguments);
					return (0, l["default"])(this, n)
				}
			}
			function c() {
				if (typeof Reflect === "undefined" || !Reflect.construct) return false;
				if (Reflect.construct.sham) return false;
				if (typeof Proxy === "function") return true;
				try {
					Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
					return true
				} catch (e) {
					return false
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, h = n(h), a = n(a), r = n(r), i = n(i), l = n(l), s = n(s), t = n(t), m = n(m), k = n(k);
			var u = function(e) {
					(0, i["default"])(n, e);
					var t = o(n);

					function n() {
						var r;
						(0, a["default"])(this, n);
						r = t.apply(this, arguments);
						r.LIST = {
							"管理员": {
								body: function e() {
									return m["default"].createElement("<span>敲入密码来验证管理员身份：</span>")
								},
								reqAct: "AdminCheck",
								reqObj: function e(t) {
									var n = {
										nick: r.artalk.user.data.nick,
										email: r.artalk.user.data.email,
										password: t
									};
									if (r.submitCaptchaVal) n = Object.assign(Object.assign({}, n), {
										captcha: r.submitCaptchaVal
									});
									return n
								},
								onSuccess: function e(t, n, a) {
									r.artalk.user.data.isAdmin = true;
									r.artalk.user.data.password = a;
									r.artalk.user.save()
								}
							},
							"验证码": {
								body: function e() {
									var t = m["default"].createElement('<span><img class="artalk-captcha-img" src="'.concat(r.submitCaptchaImgData || "", '" alt="验证码">敲入验证码继续：</span>'));
									r.LIST["验证码"].elem = t;
									t.querySelector(".artalk-captcha-img").onclick = function() {
										r.LIST["验证码"].refresh()
									};
									return t
								},
								reqAct: "CaptchaCheck",
								reqObj: function e(t) {
									return {
										captcha: t
									}
								},
								onSuccess: function e(t, n, a) {
									r.submitCaptchaVal = a
								},
								refresh: function e(t) {
									var n = r.LIST["验证码"].elem;
									var a = n.querySelector(".artalk-captcha-img");
									if (!t) r.artalk.request("CaptchaCheck", {
										refresh: true
									}, function() {}, function() {}, function(e, t) {
										a.setAttribute("src", t.img_data)
									}, function() {});
									else a.setAttribute("src", t)
								}
							}
						};
						return r
					}(0, r["default"])(n, [{
						key: "action",
						value: function e(s, o, t) {
							var c = this;
							var u = this.LIST[s];
							var n = m["default"].createElement();
							n.appendChild(u.body());
							var d = m["default"].createElement('<input id="check" type="'.concat(s === "管理员" ? "password" : "text", '" required placeholder="">'));
							n.appendChild(d);
							setTimeout(function() {
								d.focus()
							}, 80);
							var f = (0, k["default"])(this.artalk, "checker-".concat((new Date).getTime()));
							f.setMaskClickHide(false);
							f.show();
							d.onkeyup = function(e) {
								if (e.keyCode === 13) {
									e.preventDefault();
									f.getEl().querySelector('button[data-action="confirm"]').click()
								}
							};
							var p = null;
							this.artalk.ui.showDialog(f.getEl(), n, function(n, a) {
								var r = d.value.trim();
								if (!p) p = a.innerText;
								var i = function e(t) {
										a.innerText = t;
										a.classList.add("error")
									};
								var l = function e() {
										a.innerText = p;
										a.classList.remove("error")
									};
								c.artalk.request(u.reqAct, u.reqObj(r), function() {
									a.innerText = "加载中..."
								}, function() {}, function(e, t) {
									u.onSuccess(e, t, r);
									f.disposeNow();
									o(r, n)
								}, function(e, t) {
									i(e);
									if (s === "管理员") if ((0, h["default"])(t) === "object" && t !== null && typeof t.need_captcha === "boolean" && t.need_captcha === true) {
										c.artalk.checker.submitCaptchaImgData = t.img_data;
										f.disposeNow();
										c.artalk.checker.action("验证码", function() {
											c.artalk.checker.action("管理员", function(e, t) {
												c.submitCaptchaVal = null;
												o(e, t)
											}, function(e) {
												e.querySelector("input").value = r;
												e.querySelector('[data-action="confirm"]').click()
											})
										})
									}
									if (s === "验证码") u.refresh(t.img_data);
									var n = setTimeout(function() {
										l()
									}, 3e3);
									d.onfocus = function() {
										l();
										clearTimeout(n)
									}
								});
								return false
							}, function() {
								f.disposeNow();
								return false
							}, function(e) {
								t(e)
							})
						}
					}]);
					return n
				}(t["default"]);
			(e["default"] = u).displayName = "Checker", d.exports = f.
		default
		}) ? t.apply(f, e) : t) || (d.exports = t)
	}, function(v, y, b) {
		var e, t;
		e = [y, b(9), b(0), b(2), b(8), b(3), b(4), b(5), b(23), b(10), b(27), b(36), b(6), b(7)], void 0 === (t = "function" == typeof(t = function(e, r, i, t, l, s, o, c, n, u, d, f, a, p) {
			"use strict";
			var h = b(1);

			function m(r) {
				var i = k();
				return function e() {
					var t = (0, c["default"])(r),
						n;
					if (i) {
						var a = (0, c["default"])(this).constructor;
						n = Reflect.construct(t, arguments, a)
					} else n = t.apply(this, arguments);
					return (0, o["default"])(this, n)
				}
			}
			function k() {
				if (typeof Reflect === "undefined" || !Reflect.construct) return false;
				if (Reflect.construct.sham) return false;
				if (typeof Proxy === "function") return true;
				try {
					Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
					return true
				} catch (e) {
					return false
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, r = h(r), i = h(i), t = h(t), l = h(l), s = h(s), o = h(o), c = h(c), u = h(u), d = h(d), f = h(f), a = h(a), p = h(p);
			var g = function(e) {
					(0, s["default"])(a, e);
					var n = m(a);

					function a(e) {
						var t;
						(0, i["default"])(this, a);
						t = n.call(this, e);
						t.LOADABLE_PLUG_LIST = [d["default"], f["default"]];
						t.plugList = {};
						t.openedPlugName = null;
						t.el = p["default"].createElement(b(38)((0, l["default"])(t)));
						t.artalk.el.appendChild(t.el);
						t.headerEl = t.el.querySelector(".artalk-editor-header");
						t.textareaWrapEl = t.el.querySelector(".artalk-editor-textarea-wrap");
						t.textareaEl = t.el.querySelector(".artalk-editor-textarea");
						t.closeCommentEl = t.el.querySelector(".artalk-close-comment");
						t.plugWrapEl = t.el.querySelector(".artalk-editor-plug-wrap");
						t.bottomEl = t.el.querySelector(".artalk-editor-bottom");
						t.bottomPartLeftEl = t.el.querySelector(".artalk-editor-bottom-part.artalk-left");
						t.plugSwitcherWrapEl = t.el.querySelector(".artalk-editor-plug-switcher-wrap");
						t.bottomPartRightEl = t.el.querySelector(".artalk-editor-bottom-part.artalk-right");
						t.submitBtn = t.el.querySelector(".artalk-send-btn");
						t.notifyWrapEl = t.el.querySelector(".artalk-editor-notify-wrap");
						t.initLocalStorage();
						t.initHeader();
						t.initTextarea();
						t.initEditorPlug();
						t.initBottomPart();
						return t
					}(0, t["default"])(a, [{
						key: "initLocalStorage",
						value: function e() {
							var t = this;
							var n = window.localStorage.getItem("ArtalkContent") || "";
							if (n.trim() !== "") {
								this.showNotify("已自动恢复", "i");
								this.setContent(n)
							}
							this.textareaEl.addEventListener("input", function() {
								t.saveContent()
							})
						}
					}, {
						key: "initHeader",
						value: function e() {
							var a = this;
							Object.keys(this.user.data).forEach(function(t) {
								var n = a.headerEl.querySelector('[name="'.concat(t, '"]'));
								if (n !== null && n instanceof HTMLInputElement) {
									n.value = a.user.data[t] || "";
									n.addEventListener("input", function(e) {
										a.user.data[t] = n.value.trim();
										if (t !== "link") {
											a.user.data.password = "";
											a.user.data.isAdmin = false;
											if (a.user.checkHasBasicUserInfo() && a.artalk.list.checkNickEmailIsAdmin(a.user.data.nick, a.user.data.email)) a.artalk.checker.action("管理员", function() {
												a.artalk.list.refreshUI()
											})
										}
										a.saveUser();
										a.artalk.list.refreshUI()
									})
								}
							})
						}
					}, {
						key: "saveUser",
						value: function e() {
							this.user.save()
						}
					}, {
						key: "saveContent",
						value: function e() {
							window.localStorage.setItem("ArtalkContent", this.getContentOriginal().trim())
						}
					}, {
						key: "initTextarea",
						value: function e() {
							var n = this;
							this.textareaEl.addEventListener("keydown", function(e) {
								var t = e.keyCode || e.which;
								if (t === 9) {
									e.preventDefault();
									n.insertContent("\t")
								}
							});
							this.textareaEl.addEventListener("input", function(e) {
								n.adjustTextareaHeight()
							})
						}
					}, {
						key: "adjustTextareaHeight",
						value: function e() {
							var t = this.textareaEl.offsetHeight - this.textareaEl.clientHeight;
							this.textareaEl.style.height = "0px";
							this.textareaEl.style.height = "".concat(this.textareaEl.scrollHeight + t, "px")
						}
					}, {
						key: "initEditorPlug",
						value: function e() {
							var a = this;
							this.plugList = {};
							this.plugWrapEl.innerHTML = "";
							this.plugWrapEl.style.display = "none";
							this.openedPlugName = null;
							this.plugSwitcherWrapEl.innerHTML = "";
							this.LOADABLE_PLUG_LIST.forEach(function(e) {
								var n = new e(a);
								a.plugList[n.getName()] = n;
								var t = p["default"].createElement('<span class="artalk-editor-action artalk-editor-plug-switcher">'.concat(n.getBtnHtml(), "</span>"));
								a.plugSwitcherWrapEl.appendChild(t);
								t.addEventListener("click", function() {
									a.plugSwitcherWrapEl.querySelectorAll(".active").forEach(function(e) {
										return e.classList.remove("active")
									});
									if (n.getName() === a.openedPlugName) {
										n.onHide();
										a.plugWrapEl.style.display = "none";
										a.openedPlugName = null;
										return
									}
									if (a.plugWrapEl.querySelector('[data-plug-name="'.concat(n.getName(), '"]')) === null) {
										var e = n.getElem();
										e.setAttribute("data-plug-name", n.getName());
										e.style.display = "none";
										a.plugWrapEl.appendChild(e)
									}
									Array.from(a.plugWrapEl.children).forEach(function(e) {
										var t = e.getAttribute("data-plug-name");
										if (t === n.getName()) {
											e.style.display = "";
											a.plugList[t].onShow()
										} else {
											e.style.display = "none";
											a.plugList[t].onHide()
										}
									});
									a.plugWrapEl.style.display = "";
									a.openedPlugName = n.getName();
									t.classList.add("active")
								})
							})
						}
					}, {
						key: "closePlug",
						value: function e() {
							this.plugWrapEl.innerHTML = "";
							this.plugWrapEl.style.display = "none";
							this.openedPlugName = null
						}
					}, {
						key: "insertContent",
						value: function e(t) {
							if (document.selection) {
								this.textareaEl.focus();
								document.selection.createRange().text = t;
								this.textareaEl.focus()
							} else if (this.textareaEl.selectionStart || this.textareaEl.selectionStart === 0) {
								var n = this.textareaEl.selectionStart;
								var a = this.textareaEl.selectionEnd;
								var r = this.textareaEl.scrollTop;
								this.setContent(this.textareaEl.value.substring(0, n) + t + this.textareaEl.value.substring(a, this.textareaEl.value.length));
								this.textareaEl.focus();
								this.textareaEl.selectionStart = n + t.length;
								this.textareaEl.selectionEnd = n + t.length;
								this.textareaEl.scrollTop = r
							} else {
								this.textareaEl.focus();
								this.textareaEl.value += t
							}
						}
					}, {
						key: "setContent",
						value: function e(t) {
							this.textareaEl.value = t;
							this.saveContent();
							if ( !! this.plugList && !! this.plugList.preview) this.plugList.preview.updateContent();
							this.adjustTextareaHeight()
						}
					}, {
						key: "clearEditor",
						value: function e() {
							this.setContent("");
							this.cancelReply()
						}
					}, {
						key: "getContent",
						value: function e() {
							var t = this.getContentOriginal();
							if (this.plugList && this.plugList.emoticons) {
								var n = this.plugList.emoticons;
								t = n.transEmoticonImageText(t)
							}
							return t
						}
					}, {
						key: "getContentOriginal",
						value: function e() {
							return this.textareaEl.value || ""
						}
					}, {
						key: "getContentMarked",
						value: function e() {
							return this.artalk.marked(this.getContent())
						}
					}, {
						key: "initBottomPart",
						value: function e() {
							this.initReply();
							this.initSubmit()
						}
					}, {
						key: "initReply",
						value: function e() {
							this.replyComment = null;
							this.sendReplyEl = null
						}
					}, {
						key: "setReply",
						value: function e(t) {
							var n = this;
							if (this.replyComment !== null) this.cancelReply();
							if (this.sendReplyEl === null) {
								this.sendReplyEl = p["default"].createElement('<div class="artalk-send-reply"><span class="artalk-text"></span><span class="artalk-cancel" title="取消 AT">×</span></div>');
								this.sendReplyEl.querySelector(".artalk-text").innerText = "@".concat(t.data.nick);
								this.sendReplyEl.querySelector(".artalk-cancel").addEventListener("click", function() {
									n.cancelReply()
								});
								this.textareaWrapEl.appendChild(this.sendReplyEl)
							}
							this.replyComment = t;
							this.artalk.ui.scrollIntoView(this.el);
							this.textareaEl.focus()
						}
					}, {
						key: "cancelReply",
						value: function e() {
							if (this.sendReplyEl !== null) {
								this.sendReplyEl.remove();
								this.sendReplyEl = null
							}
							this.replyComment = null
						}
					}, {
						key: "getReplyComment",
						value: function e() {
							return this.replyComment
						}
					}, {
						key: "initSubmit",
						value: function e() {
							var n = this;
							this.submitBtn.addEventListener("click", function(e) {
								var t = e.currentTarget;
								n.submit()
							})
						}
					}, {
						key: "submit",
						value: function e() {
							var a = this;
							if (this.getContent().trim() === "") {
								this.textareaEl.focus();
								return
							}
							this.artalk.request("CommentAdd", {
								content: this.getContent(),
								nick: this.user.data.nick,
								email: this.user.data.email,
								link: this.user.data.link,
								rid: this.getReplyComment() === null ? 0 : this.getReplyComment().data.id,
								page_key: this.artalk.conf.pageKey,
								password: this.user.data.password,
								captcha: this.artalk.checker.submitCaptchaVal || ""
							}, function() {
								a.artalk.ui.showLoading(a.el)
							}, function() {
								a.artalk.ui.hideLoading(a.el)
							}, function(e, t) {
								var n = new u["default"](a.artalk, a.artalk.list, t.comment);
								if (a.getReplyComment() !== null) a.getReplyComment().putChild(n);
								else a.artalk.list.putRootComment(n);
								a.clearEditor();
								a.artalk.ui.scrollIntoView(n.getElem());
								n.playFadeInAnim();
								a.artalk.list.data.total += 1;
								a.artalk.list.refreshUI()
							}, function(e, t) {
								if ((0, r["default"])(t) === "object" && t !== null && typeof t.need_password === "boolean" && t.need_password === true) a.artalk.checker.action("管理员", function() {
									a.submit()
								});
								else if ((0, r["default"])(t) === "object" && t !== null && typeof t.need_captcha === "boolean" && t.need_captcha === true) {
									a.artalk.checker.submitCaptchaImgData = t.img_data;
									a.artalk.checker.action("验证码", function() {
										a.submit()
									})
								} else a.showNotify("评论失败，".concat(e), "e")
							})
						}
					}, {
						key: "showNotify",
						value: function e(t, n) {
							this.artalk.ui.showNotify(t, n, this.notifyWrapEl)
						}
					}, {
						key: "closeComment",
						value: function e() {
							this.closeCommentEl.style.display = "";
							if (!this.artalk.user.data.isAdmin) {
								this.textareaEl.style.display = "none";
								this.closePlug();
								this.bottomEl.style.display = "none"
							} else {
								this.textareaEl.style.display = "";
								this.bottomEl.style.display = ""
							}
						}
					}, {
						key: "openComment",
						value: function e() {
							this.closeCommentEl.style.display = "none";
							this.textareaEl.style.display = "";
							this.bottomEl.style.display = ""
						}
					}, {
						key: "user",
						get: function e() {
							return this.artalk.user
						}
					}]);
					return a
				}(a["default"]);
			(e["default"] = g).displayName = "Editor", v.exports = y.
		default
		}) ? t.apply(y, e) : t) || (v.exports = t)
	}, function(e, t, n) {}, function(e, t, n) {}, function(r, i, e) {
		var t, n;
		t = [i], void 0 === (n = "function" == typeof(n = function(e) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0;
			var u = window || {},
				d = navigator || {},
				t;

			function n(e) {
				var a = e || d.userAgent;
				var t = this;
				var n = {
					Trident: a.indexOf("Trident") > -1 || a.indexOf("NET CLR") > -1,
					Presto: a.indexOf("Presto") > -1,
					WebKit: a.indexOf("AppleWebKit") > -1,
					Gecko: a.indexOf("Gecko/") > -1,
					Safari: a.indexOf("Safari") > -1,
					Chrome: a.indexOf("Chrome") > -1 || a.indexOf("CriOS") > -1,
					IE: a.indexOf("MSIE") > -1 || a.indexOf("Trident") > -1,
					Edge: a.indexOf("Edge") > -1,
					Firefox: a.indexOf("Firefox") > -1 || a.indexOf("FxiOS") > -1,
					"Firefox Focus": a.indexOf("Focus") > -1,
					Chromium: a.indexOf("Chromium") > -1,
					Opera: a.indexOf("Opera") > -1 || a.indexOf("OPR") > -1,
					Vivaldi: a.indexOf("Vivaldi") > -1,
					Yandex: a.indexOf("YaBrowser") > -1,
					Kindle: a.indexOf("Kindle") > -1 || a.indexOf("Silk/") > -1,
					360: a.indexOf("360EE") > -1 || a.indexOf("360SE") > -1,
					UC: a.indexOf("UC") > -1 || a.indexOf(" UBrowser") > -1,
					QQBrowser: a.indexOf("QQBrowser") > -1,
					QQ: a.indexOf("QQ/") > -1,
					Baidu: a.indexOf("Baidu") > -1 || a.indexOf("BIDUBrowser") > -1,
					Maxthon: a.indexOf("Maxthon") > -1,
					Sogou: a.indexOf("MetaSr") > -1 || a.indexOf("Sogou") > -1,
					LBBROWSER: a.indexOf("LBBROWSER") > -1,
					"2345Explorer": a.indexOf("2345Explorer") > -1,
					TheWorld: a.indexOf("TheWorld") > -1,
					XiaoMi: a.indexOf("MiuiBrowser") > -1,
					Quark: a.indexOf("Quark") > -1,
					Qiyu: a.indexOf("Qiyu") > -1,
					Wechat: a.indexOf("MicroMessenger") > -1,
					Taobao: a.indexOf("AliApp(TB") > -1,
					Alipay: a.indexOf("AliApp(AP") > -1,
					Weibo: a.indexOf("Weibo") > -1,
					Douban: a.indexOf("com.douban.frodo") > -1,
					Suning: a.indexOf("SNEBUY-APP") > -1,
					iQiYi: a.indexOf("IqiyiApp") > -1,
					Windows: a.indexOf("Windows") > -1,
					Linux: a.indexOf("Linux") > -1 || a.indexOf("X11") > -1,
					"Mac OS": a.indexOf("Macintosh") > -1,
					Android: a.indexOf("Android") > -1 || a.indexOf("Adr") > -1,
					Ubuntu: a.indexOf("Ubuntu") > -1,
					FreeBSD: a.indexOf("FreeBSD") > -1,
					Debian: a.indexOf("Debian") > -1,
					"Windows Phone": a.indexOf("IEMobile") > -1 || a.indexOf("Windows Phone") > -1,
					BlackBerry: a.indexOf("BlackBerry") > -1 || a.indexOf("RIM") > -1,
					MeeGo: a.indexOf("MeeGo") > -1,
					Symbian: a.indexOf("Symbian") > -1,
					iOS: a.indexOf("like Mac OS X") > -1,
					"Chrome OS": a.indexOf("CrOS") > -1,
					WebOS: a.indexOf("hpwOS") > -1,
					Mobile: a.indexOf("Mobi") > -1 || a.indexOf("iPh") > -1 || a.indexOf("480") > -1,
					Tablet: a.indexOf("Tablet") > -1 || a.indexOf("Pad") > -1 || a.indexOf("Nexus 7") > -1
				};
				if (n.Mobile) n.Mobile = !(a.indexOf("iPad") > -1);
				else if (u.showModalDialog && u.chrome) n["360"] = true;
				var r = {
					engine: ["WebKit", "Trident", "Gecko", "Presto"],
					browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
					os: ["Windows", "Linux", "Mac OS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
					device: ["Mobile", "Tablet"]
				};
				t.device = "PC";
				t.language = function() {
					var e = d.browserLanguage || d.language;
					var t = e.split("-");
					if (t[1]) t[1] = t[1].toUpperCase();
					return t.join("_")
				}();
				for (var i in r) for (var l = 0; l < r[i].length; l++) {
					var s = r[i][l];
					if (n[s]) t[i] = s
				}
				var o = {
					Windows: function e() {
						var t = a.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
						var n = {
							6.4: "10",
							6.3: "8.1",
							6.2: "8",
							6.1: "7",
							"6.0": "Vista",
							5.2: "XP",
							5.1: "XP",
							"5.0": "2000"
						};
						return n[t] || t
					},
					Android: function e() {
						return a.replace(/^.*Android ([\d.]+);.*$/, "$1")
					},
					iOS: function e() {
						return a.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
					},
					Debian: function e() {
						return a.replace(/^.*Debian\/([\d.]+).*$/, "$1")
					},
					"Windows Phone": function e() {
						return a.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
					},
					"Mac OS": function e() {
						return a.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".")
					},
					WebOS: function e() {
						return a.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
					}
				};
				t.osVersion = "";
				if (o[t.os]) {
					t.osVersion = o[t.os]();
					if (t.osVersion === a) t.osVersion = ""
				}
				var c = {
					Safari: function e() {
						return a.replace(/^.*Version\/([\d.]+).*$/, "$1")
					},
					Chrome: function e() {
						return a.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
					},
					IE: function e() {
						return a.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
					},
					Edge: function e() {
						return a.replace(/^.*Edge\/([\d.]+).*$/, "$1")
					},
					Firefox: function e() {
						return a.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
					},
					"Firefox Focus": function e() {
						return a.replace(/^.*Focus\/([\d.]+).*$/, "$1")
					},
					Chromium: function e() {
						return a.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
					},
					Opera: function e() {
						return a.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
					},
					Vivaldi: function e() {
						return a.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
					},
					Yandex: function e() {
						return a.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
					},
					Kindle: function e() {
						return a.replace(/^.*Version\/([\d.]+).*$/, "$1")
					},
					Maxthon: function e() {
						return a.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
					},
					QQBrowser: function e() {
						return a.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
					},
					QQ: function e() {
						return a.replace(/^.*QQ\/([\d.]+).*$/, "$1")
					},
					Baidu: function e() {
						return a.replace(/^.*BIDUBrowser[\s/]([\d.]+).*$/, "$1")
					},
					UC: function e() {
						return a.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
					},
					Sogou: function e() {
						return a.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
					},
					"2345Explorer": function e() {
						return a.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1")
					},
					TheWorld: function e() {
						return a.replace(/^.*TheWorld ([\d.]+).*$/, "$1")
					},
					XiaoMi: function e() {
						return a.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
					},
					Quark: function e() {
						return a.replace(/^.*Quark\/([\d.]+).*$/, "$1")
					},
					Qiyu: function e() {
						return a.replace(/^.*Qiyu\/([\d.]+).*$/, "$1")
					},
					Wechat: function e() {
						return a.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
					},
					Taobao: function e() {
						return a.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
					},
					Alipay: function e() {
						return a.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
					},
					Weibo: function e() {
						return a.replace(/^.*weibo__([\d.]+).*$/, "$1")
					},
					Douban: function e() {
						return a.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1")
					},
					Suning: function e() {
						return a.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1")
					},
					iQiYi: function e() {
						return a.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
					}
				};
				t.version = "";
				if (c[t.browser]) {
					t.version = c[t.browser]();
					if (t.version === a) t.version = ""
				}
				if (t.version.indexOf(".")) t.version = t.version.substring(0, t.version.indexOf("."));
				if (t.browser === "Edge") t.engine = "EdgeHTML";
				else if (t.browser === "Chrome" && parseInt(t.version) > 27) t.engine = "Blink";
				else if (t.browser === "Opera" && parseInt(t.version) > 12) t.engine = "Blink";
				else if (t.browser === "Yandex") t.engine = "Blink";
				else if (t.browser === undefined) t.browser = "Unknow App"
			}
			function a(e) {
				return new n(e)
			}
			e["default"] = a, r.exports = i.
		default
		}) ? n.apply(i, t) : n) || (r.exports = n)
	}, function(module, exports) {
		module.exports = function anonymous(locals, filters, escape, rethrow) {
			escape = escape ||
			function(e) {
				return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
			};
			var __stack = {
				lineno: 1,
				input: '<div class="artalk-comment-wrap" data-comment-id="<%= data.id %>">\n  <div class="artalk-comment">\n    <div class="artalk-avatar">\n      <a target="_blank" <% if(!!data.link){ %>href="<%= data.link %>"<% } %>>\n        <img src="<%= getGravatarUrl() %>">\n      </a>\n    </div>\n    <div class="artalk-comment-main">\n      <div class="artalk-header">\n        <span class="artalk-nick">\n          <a target="_blank" <% if(!!data.link){ %>href="<%= data.link %>"<% } %>><%= data.nick %></a>\n        </span>\n        <% if (!!data.badge) { %>\n        <span class="artalk-badge" <% if(!!data.badge.color){ %>style="background-color: <%= data.badge.color %>"<% } %>>\n          <%= data.badge.name || \'管理员\' %>\n        </span>\n        <% } %>\n        <span class="artalk-date"><%= getDateFormatted() %></span>\n        <span class="artalk-ua"><%= getUserUaBrowser() %></span>\n        <span class="artalk-ua"><%= getUserUaOS() %></span>\n      </div>\n      <div class="artalk-body">\n        <div class="artalk-content<%= !!data.is_collapsed ? \' artalk-hide artalk-type-collapsed\' : \'\' %>"><%- getContentMarked() %></div>\n        <% if(!!data.is_collapsed) { %>\n        <div class="artalk-collapsed">\n          <span class="artalk-text">该评论已被系统或管理员折叠</span>\n          <span class="artalk-show-btn">查看内容</span>\n        </div>\n        <% } %>\n      </div>\n      <div class="artalk-footer">\n        <div class="artalk-comment-actions">\n          <% if(data.is_allow_reply !== false) { %><span data-comment-action="reply">回复</span><% } %>\n          <span data-comment-action="collapse" class="artalk-hide" data-list-ui-only-admin>\n            <%= !!data.is_collapsed ? \'取消折叠\' : \'折叠\' %>\n          </span>\n          <span data-comment-action="delete" class="artalk-hide" data-list-ui-only-admin>删除</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n',
				filename: "."
			};

			function rethrow(e, t, n, a) {
				var r = t.split("\n"),
					i = Math.max(a - 3, 0),
					t = Math.min(r.length, a + 3),
					t = r.slice(i, t).map(function(e, t) {
						t = t + i + 1;
						return (t == a ? " >> " : "    ") + t + "| " + e
					}).join("\n");
				throw e.path = n, e.message = (n || "ejs") + ":" + a + "\n" + t + "\n\n" + e.message, e
			}
			try {
				var buf = [];
				with(locals || {}) buf.push('<div class="artalk-comment-wrap" data-comment-id="', escape((__stack.lineno = 1, data.id)), '">\n  <div class="artalk-comment">\n    <div class="artalk-avatar">\n      <a target="_blank" '), __stack.lineno = 4, data.link && (buf.push('href="', escape((__stack.lineno = 4, data.link)), '"'), __stack.lineno = 4), buf.push('>\n        <img src="', escape((__stack.lineno = 5, getGravatarUrl())), '">\n      </a>\n    </div>\n    <div class="artalk-comment-main">\n      <div class="artalk-header">\n        <span class="artalk-nick">\n          <a target="_blank" '), __stack.lineno = 11, data.link && (buf.push('href="', escape((__stack.lineno = 11, data.link)), '"'), __stack.lineno = 11), buf.push(">", escape((__stack.lineno = 11, data.nick)), "</a>\n        </span>\n        "), __stack.lineno = 13, data.badge && (buf.push('\n        <span class="artalk-badge" '), __stack.lineno = 14, data.badge.color && (buf.push('style="background-color: ', escape((__stack.lineno = 14, data.badge.color)), '"'), __stack.lineno = 14), buf.push(">\n          ", escape((__stack.lineno = 15, data.badge.name || "管理员")), "\n        </span>\n        "), __stack.lineno = 17), buf.push('\n        <span class="artalk-date">', escape((__stack.lineno = 18, getDateFormatted())), '</span>\n        <span class="artalk-ua">', escape((__stack.lineno = 19, getUserUaBrowser())), '</span>\n        <span class="artalk-ua">', escape((__stack.lineno = 20, getUserUaOS())), '</span>\n      </div>\n      <div class="artalk-body">\n        <div class="artalk-content', escape((__stack.lineno = 23, data.is_collapsed ? " artalk-hide artalk-type-collapsed" : "")), '">', (__stack.lineno = 23, getContentMarked()), "</div>\n        "), __stack.lineno = 24, data.is_collapsed && (buf.push('\n        <div class="artalk-collapsed">\n          <span class="artalk-text">该评论已被系统或管理员折叠</span>\n          <span class="artalk-show-btn">查看内容</span>\n        </div>\n        '), __stack.lineno = 29), buf.push('\n      </div>\n      <div class="artalk-footer">\n        <div class="artalk-comment-actions">\n          '), !(__stack.lineno = 33) !== data.is_allow_reply && (buf.push('<span data-comment-action="reply">回复</span>'), __stack.lineno = 33), buf.push('\n          <span data-comment-action="collapse" class="artalk-hide" data-list-ui-only-admin>\n            ', escape((__stack.lineno = 35, data.is_collapsed ? "取消折叠" : "折叠")), '\n          </span>\n          <span data-comment-action="delete" class="artalk-hide" data-list-ui-only-admin>删除</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n');
				return buf.join("")
			} catch (err) {
				rethrow(err, __stack.input, __stack.filename, __stack.lineno)
			}
		}
	}, function(h, m, k) {
		var e, t;
		e = [m, k(28), k(0), k(2), k(3), k(4), k(5), k(34), k(6), k(7)], void 0 === (t = "function" == typeof(t = function(e, i, r, t, l, s, o, n, a, c) {
			"use strict";
			var u = k(1);

			function d(r) {
				var i = f();
				return function e() {
					var t = (0, o["default"])(r),
						n;
					if (i) {
						var a = (0, o["default"])(this).constructor;
						n = Reflect.construct(t, arguments, a)
					} else n = t.apply(this, arguments);
					return (0, s["default"])(this, n)
				}
			}
			function f() {
				if (typeof Reflect === "undefined" || !Reflect.construct) return false;
				if (Reflect.construct.sham) return false;
				if (typeof Proxy === "function") return true;
				try {
					Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
					return true
				} catch (e) {
					return false
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, i = u(i), r = u(r), t = u(t), l = u(l), s = u(s), o = u(o), a = u(a), c = u(c);
			var p = function(e) {
					(0, l["default"])(a, e);
					var n = d(a);

					function a(e) {
						var t;
						(0, r["default"])(this, a);
						t = n.call(this, e.artalk);
						t.editor = e;
						t.emoticons = t.artalk.conf.emoticons;
						t.initElem();
						return t
					}(0, t["default"])(a, [{
						key: "initElem",
						value: function e() {
							var i = this;
							this.elem = c["default"].createElement(k(35)(this));
							this.listWrapElem = this.elem.querySelector(".artalk-emoticons-list-wrap");
							this.typesElem = this.elem.querySelector(".artalk-emoticons-types");
							this.typesElem.querySelectorAll("span").forEach(function(e) {
								e.addEventListener("click", function(e) {
									var t = e.currentTarget;
									var n = t.getAttribute("data-key");
									if (n) i.openType(n)
								})
							});
							if (Object.keys(this.emoticons).length > 0) this.openType(Object.keys(this.emoticons)[0]);
							this.listWrapElem.querySelectorAll(".artalk-emoticons-item").forEach(function(e) {
								e.onclick = function(e) {
									var t = e.currentTarget;
									var n = t.closest(".artalk-emoticons-list").getAttribute("data-input-type");
									var a = t.getAttribute("title");
									var r = t.getAttribute("data-content");
									if (n === "image") i.editor.insertContent(":[".concat(a, "]"));
									else i.editor.insertContent(r)
								}
							})
						}
					}, {
						key: "openType",
						value: function e(t) {
							Array.from(this.listWrapElem.children).forEach(function(e) {
								if (e.getAttribute("data-key") !== t) e.style.display = "none";
								else e.style.display = ""
							});
							this.typesElem.querySelectorAll("span.active").forEach(function(e) {
								return e.classList.remove("active")
							});
							this.typesElem.querySelector('span[data-key="'.concat(t, '"]')).classList.add("active");
							this.changeListHeight()
						}
					}, {
						key: "getName",
						value: function e() {
							return "emoticons"
						}
					}, {
						key: "getBtnHtml",
						value: function e() {
							return "表情"
						}
					}, {
						key: "getElem",
						value: function e() {
							return this.elem
						}
					}, {
						key: "changeListHeight",
						value: function e() {}
					}, {
						key: "onShow",
						value: function e() {
							var t = this;
							setTimeout(function() {
								t.changeListHeight()
							}, 30)
						}
					}, {
						key: "onHide",
						value: function e() {
							this.elem.parentElement.style.height = ""
						}
					}, {
						key: "transEmoticonImageText",
						value: function e(r) {
							Object.entries(this.emoticons).forEach(function(e) {
								var t = (0, i["default"])(e, 2),
									n = t[0],
									a = t[1];
								if (a.inputType !== "image") return;
								Object.entries(a.container).forEach(function(e) {
									var t = (0, i["default"])(e, 2),
										n = t[0],
										a = t[1];
									r = r.split(":[".concat(n, "]")).join("![".concat(n, "](").concat(a, ") "))
								})
							});
							return r
						}
					}]);
					return a
				}(a["default"]);
			(e["default"] = p).displayName = "EmoticonsPlug", h.exports = m.
		default
		}) ? t.apply(m, e) : t) || (h.exports = t)
	}, function(e, t, n) {
		var a = n(29),
			r = n(30),
			i = n(31),
			l = n(33);
		e.exports = function(e, t) {
			return a(e) || r(e, t) || i(e, t) || l()
		}
	}, function(e, t) {
		e.exports = function(e) {
			if (Array.isArray(e)) return e
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
				var n = [],
					a = !0,
					r = !1,
					i = void 0;
				try {
					for (var l, s = e[Symbol.iterator](); !(a = (l = s.next()).done) && (n.push(l.value), !t || n.length !== t); a = !0);
				} catch (e) {
					r = !0, i = e
				} finally {
					try {
						a || null == s.
						return ||s.
						return ()
					} finally {
						if (r) throw i
					}
				}
				return n
			}
		}
	}, function(e, t, n) {
		var a = n(32);
		e.exports = function(e, t) {
			if (e) {
				if ("string" == typeof e) return a(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
			}
		}
	}, function(e, t) {
		e.exports = function(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
			return a
		}
	}, function(e, t) {
		e.exports = function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}
	}, function(e, t, n) {}, function(module, exports) {
		module.exports = function anonymous(locals, filters, escape, rethrow) {
			escape = escape ||
			function(e) {
				return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
			};
			var __stack = {
				lineno: 1,
				input: '<div class="artalk-editor-plug-emoticons">\n  <div class="artalk-emoticons-list-wrap">\n  <% for (var i in emoticons) { %>\n    <% var item = emoticons[i] %>\n    <div class="artalk-emoticons-list" data-key="<%- i %>" data-input-type="<%- item[\'inputType\'] %>" style="display: none;">\n      <% for (var name in item[\'container\']) { %>\n        <% var content = item[\'container\'][name]; %>\n        <span class="artalk-emoticons-item" title="<%- name %>" data-content="<%= content %>">\n          <% if (item[\'inputType\'] === \'image\') { %>\n            <img src="<%= content %>" alt="<%- name %>" />\n          <% } else { %>\n            <%= content %>\n          <% } %>\n        </span>\n      <% } %>\n    </div>\n  <% } %>\n  </div>\n  <div class="artalk-emoticons-types">\n  <% var types = Object.keys(emoticons); %>\n  <% for (var i in types) { %>\n    <span data-key="<%- types[i] %>"><%= types[i] %></span>\n  <% } %>\n  </div>\n</div>\n',
				filename: "."
			};

			function rethrow(e, t, n, a) {
				var r = t.split("\n"),
					i = Math.max(a - 3, 0),
					t = Math.min(r.length, a + 3),
					t = r.slice(i, t).map(function(e, t) {
						t = t + i + 1;
						return (t == a ? " >> " : "    ") + t + "| " + e
					}).join("\n");
				throw e.path = n, e.message = (n || "ejs") + ":" + a + "\n" + t + "\n\n" + e.message, e
			}
			try {
				var buf = [];
				with(locals || {})!
				function() {
					for (var e in buf.push('<div class="artalk-editor-plug-emoticons">\n  <div class="artalk-emoticons-list-wrap">\n  '), __stack.lineno = 3, emoticons) {
						buf.push("\n    "), __stack.lineno = 4;
						var t, n = emoticons[e];
						for (t in buf.push('\n    <div class="artalk-emoticons-list" data-key="', (__stack.lineno = 5, e), '" data-input-type="', (__stack.lineno = 5, n.inputType), '" style="display: none;">\n      '), __stack.lineno = 6, n.container) {
							buf.push("\n        "), __stack.lineno = 7;
							var a = n.container[t];
							buf.push('\n        <span class="artalk-emoticons-item" title="', (__stack.lineno = 8, t), '" data-content="', escape((__stack.lineno = 8, a)), '">\n          '), __stack.lineno = 9, "image" === n.inputType ? (buf.push('\n            <img src="', escape((__stack.lineno = 10, a)), '" alt="', (__stack.lineno = 10, t), '" />\n          '), __stack.lineno = 11) : (buf.push("\n            ", escape((__stack.lineno = 12, a)), "\n          "), __stack.lineno = 13), buf.push("\n        </span>\n      "), __stack.lineno = 15
						}
						buf.push("\n    </div>\n  "), __stack.lineno = 17
					}
					buf.push('\n  </div>\n  <div class="artalk-emoticons-types">\n  '), __stack.lineno = 20;
					var r = Object.keys(emoticons);
					for (e in buf.push("\n  "), __stack.lineno = 21, r) buf.push('\n    <span data-key="', (__stack.lineno = 22, r[e]), '">', escape((__stack.lineno = 22, r[e])), "</span>\n  "), __stack.lineno = 23;
					buf.push("\n  </div>\n</div>\n")
				}();
				return buf.join("")
			} catch (err) {
				rethrow(err, __stack.input, __stack.filename, __stack.lineno)
			}
		}
	}, function(p, h, m) {
		var e, t;
		e = [h, m(0), m(2), m(3), m(4), m(5), m(37), m(6), m(7)], void 0 === (t = "function" == typeof(t = function(e, r, t, i, l, s, n, a, o) {
			"use strict";
			var c = m(1);

			function u(r) {
				var i = d();
				return function e() {
					var t = (0, s["default"])(r),
						n;
					if (i) {
						var a = (0, s["default"])(this).constructor;
						n = Reflect.construct(t, arguments, a)
					} else n = t.apply(this, arguments);
					return (0, l["default"])(this, n)
				}
			}
			function d() {
				if (typeof Reflect === "undefined" || !Reflect.construct) return false;
				if (Reflect.construct.sham) return false;
				if (typeof Proxy === "function") return true;
				try {
					Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
					return true
				} catch (e) {
					return false
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, r = c(r), t = c(t), i = c(i), l = c(l), s = c(s), a = c(a), o = c(o);
			var f = function(e) {
					(0, i["default"])(a, e);
					var n = u(a);

					function a(e) {
						var t;
						(0, r["default"])(this, a);
						t = n.call(this, e.artalk);
						t.editor = e;
						t.binded = false;
						t.initElem();
						return t
					}(0, t["default"])(a, [{
						key: "initElem",
						value: function e() {
							this.elem = o["default"].createElement('<div class="artalk-editor-plug-preview"></div>');
							this.binded = false
						}
					}, {
						key: "getName",
						value: function e() {
							return "preview"
						}
					}, {
						key: "getBtnHtml",
						value: function e() {
							return '先看看 <i title="Markdown is supported"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></i>'
						}
					}, {
						key: "getElem",
						value: function e() {
							return this.elem
						}
					}, {
						key: "onShow",
						value: function e() {
							var t = this;
							this.updateContent();
							if (!this.binded) {
								var n = function e() {
										t.updateContent()
									};
								this.editor.textareaEl.addEventListener("input", n);
								this.editor.textareaEl.addEventListener("change", n);
								this.binded = true
							}
						}
					}, {
						key: "onHide",
						value: function e() {}
					}, {
						key: "updateContent",
						value: function e() {
							if (this.elem.style.display !== "none") this.elem.innerHTML = this.editor.getContentMarked()
						}
					}]);
					return a
				}(a["default"]);
			(e["default"] = f).displayName = "PreviewPlug", p.exports = h.
		default
		}) ? t.apply(h, e) : t) || (p.exports = t)
	}, function(e, t, n) {}, function(module, exports) {
		module.exports = function anonymous(locals, filters, escape, rethrow) {
			escape = escape ||
			function(e) {
				return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
			};
			var __stack = {
				lineno: 1,
				input: '<div class="artalk-editor">\n  <div class="artalk-editor-header">\n    <input name="nick" placeholder="昵称" class="artalk-nick" type="text" required="required">\n    <input name="email" placeholder="邮箱" class="artalk-email" type="email" required="required">\n    <input name="link" placeholder="网址 (https://)" class="artalk-link" type="url">\n  </div>\n  <div class="artalk-editor-textarea-wrap">\n    <div class="artalk-close-comment" style="display: none;"><span>仅管理员可评论</span></div>\n    <textarea id="artalk-editor-textarea" class="artalk-editor-textarea" placeholder="<%= artalk.conf.placeholder %>"></textarea>\n  </div>\n  <div class="artalk-editor-plug-wrap" style="display: none;"></div>\n  <div class="artalk-editor-bottom">\n    <div class="artalk-editor-bottom-part artalk-left artalk-editor-plug-switcher-wrap"></div>\n    <div class="artalk-editor-bottom-part artalk-right">\n      <button type="button" class="artalk-send-btn"><%= artalk.conf.sendBtn %></button>\n    </div>\n  </div>\n  <div class="artalk-editor-notify-wrap"></div>\n</div>\n',
				filename: "."
			};

			function rethrow(e, t, n, a) {
				var r = t.split("\n"),
					i = Math.max(a - 3, 0),
					t = Math.min(r.length, a + 3),
					t = r.slice(i, t).map(function(e, t) {
						t = t + i + 1;
						return (t == a ? " >> " : "    ") + t + "| " + e
					}).join("\n");
				throw e.path = n, e.message = (n || "ejs") + ":" + a + "\n" + t + "\n\n" + e.message, e
			}
			try {
				var buf = [];
				with(locals || {}) buf.push('<div class="artalk-editor">\n  <div class="artalk-editor-header">\n    <input name="nick" placeholder="昵称" class="artalk-nick" type="text" required="required">\n    <input name="email" placeholder="邮箱" class="artalk-email" type="email" required="required">\n    <input name="link" placeholder="网址 (https://)" class="artalk-link" type="url">\n  </div>\n  <div class="artalk-editor-textarea-wrap">\n    <div class="artalk-close-comment" style="display: none;"><span>仅管理员可评论</span></div>\n    <textarea id="artalk-editor-textarea" class="artalk-editor-textarea" placeholder="', escape((__stack.lineno = 9, artalk.conf.placeholder)), '"></textarea>\n  </div>\n  <div class="artalk-editor-plug-wrap" style="display: none;"></div>\n  <div class="artalk-editor-bottom">\n    <div class="artalk-editor-bottom-part artalk-left artalk-editor-plug-switcher-wrap"></div>\n    <div class="artalk-editor-bottom-part artalk-right">\n      <button type="button" class="artalk-send-btn">', escape((__stack.lineno = 15, artalk.conf.sendBtn)), '</button>\n    </div>\n  </div>\n  <div class="artalk-editor-notify-wrap"></div>\n</div>\n');
				return buf.join("")
			} catch (err) {
				rethrow(err, __stack.input, __stack.filename, __stack.lineno)
			}
		}
	}, function(k, g, v) {
		var e, t;
		e = [g, v(0), v(2), v(8), v(3), v(4), v(5), v(40), v(43), v(10), v(6), v(7)], void 0 === (t = "function" == typeof(t = function(e, r, t, i, l, s, o, c, n, u, a, d) {
			"use strict";
			var f = v(1);

			function p(r) {
				var i = h();
				return function e() {
					var t = (0, o["default"])(r),
						n;
					if (i) {
						var a = (0, o["default"])(this).constructor;
						n = Reflect.construct(t, arguments, a)
					} else n = t.apply(this, arguments);
					return (0, s["default"])(this, n)
				}
			}
			function h() {
				if (typeof Reflect === "undefined" || !Reflect.construct) return false;
				if (Reflect.construct.sham) return false;
				if (typeof Proxy === "function") return true;
				try {
					Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
					return true
				} catch (e) {
					return false
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, r = f(r), t = f(t), i = f(i), l = f(l), s = f(s), o = f(o), c = f(c), u = f(u), a = f(a), d = f(d);
			var m = function(e) {
					(0, l["default"])(a, e);
					var n = p(a);

					function a(e) {
						var t;
						(0, r["default"])(this, a);
						t = n.call(this, e);
						t.reqPageSize = 15;
						t.isLoading = false;
						t.el = d["default"].createElement(v(44)((0, i["default"])(t)));
						t.artalk.el.appendChild(t.el);
						t.commentsWrapEl = t.el.querySelector(".artalk-list-comments-wrap");
						t.initListActionBtn();
						t.reqPageSize = t.artalk.conf.readMore ? t.artalk.conf.readMore.pageSize || t.reqPageSize : t.reqPageSize;
						t.readMoreEl = t.el.querySelector(".artalk-list-read-more");
						t.readMoreLoadingEl = t.readMoreEl.querySelector(".artalk-loading-icon");
						t.readMoreTextEl = t.readMoreEl.querySelector(".artalk-text");
						t.readMoreEl.addEventListener("click", function() {
							t.readMore()
						});
						return t
					}(0, t["default"])(a, [{
						key: "reqComments",
						value: function e() {
							var r = this;
							var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
							if (i === 0) this.artalk.clearComments();
							this.artalk.request("CommentGet", {
								page_key: this.artalk.conf.pageKey,
								limit: this.reqPageSize,
								offset: i
							}, function() {
								r.isLoading = true;
								if (i === 0) r.artalk.ui.showLoading();
								else r.readMoreBtnSetLoading(true)
							}, function() {
								r.isLoading = false;
								if (i === 0) r.artalk.ui.hideLoading();
								else r.readMoreBtnSetLoading(false)
							}, function(e, t) {
								r.data = Object.assign({}, t);
								r.artalk.ui.setGlobalError(null);
								r.reqImportComments(t.comments);
								if (r.hasMoreComments) r.showReadMoreBtn();
								else r.hideReadMoreBtn();
								r.artalk.checkGoToCommentByUrlHash();
								if (i === 0 && r.hasMoreComments) r.initScrollBottomAutoLoad()
							}, function(e, t) {
								if (i === 0) {
									var n = d["default"].createElement("<span>".concat(e, "，无法获取评论列表数据<br/></span>"));
									var a = d["default"].createElement('<span style="cursor:pointer">点击重新获取</span>');
									a.addEventListener("click", function() {
										r.reqComments(0)
									});
									n.appendChild(a);
									r.artalk.ui.setGlobalError(n)
								} else r.readMoreBtnShowErr("".concat(e, " 获取失败"))
							})
						}
					}, {
						key: "reqImportComments",
						value: function e(t) {
							var r = this;
							if (!Array.isArray(t)) throw new Error("请求响应参数非数组");
							var n = function n(a) {
									var e = t.filter(function(e) {
										return e.rid === a.data.id
									});
									if (e.length === 0) return;
									e.forEach(function(e) {
										e.is_allow_reply = a.data.is_allow_reply;
										var t = new u["default"](r.artalk, r, e);
										a.putChild(t);
										n(t)
									})
								};
							t.filter(function(e) {
								return e.rid === 0
							}).forEach(function(e) {
								if (e.is_collapsed) e.is_allow_reply = false;
								var t = new u["default"](r.artalk, r, e);
								r.artalk.comments.push(t);
								r.commentsWrapEl.appendChild(t.getElem());
								t.playFadeInAnim();
								n(t)
							});
							this.refreshUI(true)
						}
					}, {
						key: "putRootComment",
						value: function e(t) {
							this.commentsWrapEl.prepend(t.getElem());
							this.artalk.comments.unshift(t)
						}
					}, {
						key: "initListActionBtn",
						value: function e() {
							var t = this;
							this.openSidebarBtnEl = this.el.querySelector('[data-action="open-sidebar"]');
							this.openSidebarBtnEl.addEventListener("click", function() {
								t.artalk.sidebar.show()
							});
							this.closeCommentBtnEl = this.el.querySelector('[data-action="admin-close-comment"]');
							this.closeCommentBtnEl.addEventListener("click", function() {
								t.adminSetPage({
									is_close_comment: !t.data.page.is_close_comment
								})
							})
						}
					}, {
						key: "refreshUI",
						value: function e() {
							var t = this;
							var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
							this.el.querySelector(".artalk-comment-count-num").innerText = this.getListCommentCount().toString();
							var a = this.commentsWrapEl.querySelector(".artalk-no-comment");
							if (this.artalk.comments.length <= 0 && !a) {
								a = d["default"].createElement('<div class="artalk-no-comment"></div>');
								a.innerText = this.artalk.conf.noComment;
								this.commentsWrapEl.appendChild(a)
							}
							if (this.artalk.comments.length > 0 && a !== null) a.remove();
							if ( !! this.artalk.user.data.nick && !! this.artalk.user.data.email) this.openSidebarBtnEl.classList.remove("artalk-hide");
							else this.openSidebarBtnEl.classList.add("artalk-hide");
							this.el.querySelectorAll("[data-list-ui-only-admin]").forEach(function(e) {
								if (t.artalk.user.data.isAdmin) e.classList.remove("artalk-hide");
								else e.classList.add("artalk-hide")
							});
							if ( !! this.data && !! this.data.page && this.data.page.is_close_comment === true) {
								this.artalk.editor.closeComment();
								this.closeCommentBtnEl.innerHTML = "打开评论"
							} else if (!n) {
								this.artalk.editor.openComment();
								this.closeCommentBtnEl.innerHTML = "关闭评论"
							}
						}
					}, {
						key: "getListCommentCount",
						value: function e() {
							if (!this.data || !this.data.total) return 0;
							return Number(this.data.total || "0")
						}
					}, {
						key: "readMore",
						value: function e() {
							var t = this.data.offset + this.reqPageSize;
							this.reqComments(t)
						}
					}, {
						key: "showReadMoreBtn",
						value: function e() {
							this.readMoreEl.style.display = ""
						}
					}, {
						key: "hideReadMoreBtn",
						value: function e() {
							this.readMoreEl.style.display = "none"
						}
					}, {
						key: "readMoreBtnSetLoading",
						value: function e(t) {
							this.showReadMoreBtn();
							this.readMoreLoadingEl.style.display = t ? "" : "none";
							this.readMoreTextEl.style.display = t ? "none" : ""
						}
					}, {
						key: "readMoreBtnShowErr",
						value: function e(t) {
							var n = this;
							this.readMoreBtnSetLoading(false);
							var a = this.readMoreTextEl.innerText;
							this.readMoreTextEl.innerText = t;
							this.readMoreEl.classList.add("artalk-err");
							setTimeout(function() {
								n.readMoreTextEl.innerText = a;
								n.readMoreEl.classList.remove("artalk-err")
							}, 2e3)
						}
					}, {
						key: "initScrollBottomAutoLoad",
						value: function e() {
							var t = this;
							if (!this.artalk.conf.readMore) return;
							if (!this.artalk.conf.readMore.autoLoad) return;
							document.addEventListener("scroll", function() {
								var e = t.el.querySelector(".artalk-list-comments-wrap > .artalk-comment-wrap:nth-last-child(3)");
								if (!e) return;
								if (!t.hasMoreComments) return;
								if (t.isLoading) return;
								if (t.artalk.ui.isVisible(e)) t.readMore()
							})
						}
					}, {
						key: "checkNickEmailIsAdmin",
						value: function e(t, n) {
							if (!this.data || !this.data.admin_nicks || !this.data.admin_encrypted_emails) return false;
							return this.data.admin_nicks.indexOf(t) !== -1 && this.data.admin_encrypted_emails.find(function(e) {
								return String(e).toLowerCase() === String((0, c["default"])(n)).toLowerCase()
							})
						}
					}, {
						key: "adminSetPage",
						value: function e(t) {
							var n = this;
							this.artalk.request("SetPage", {
								nick: this.artalk.user.data.nick,
								email: this.artalk.user.data.email,
								page_key: this.artalk.conf.pageKey,
								password: this.artalk.user.data.password,
								is_close_comment: Number(t.is_close_comment)
							}, function() {
								n.artalk.ui.showLoading(n.artalk.editor.el)
							}, function() {
								n.artalk.ui.hideLoading(n.artalk.editor.el)
							}, function(e, t) {
								n.data.page = Object.assign({}, t);
								n.refreshUI()
							}, function(e, t) {
								n.artalk.editor.showNotify("修改页面数据失败：".concat(e), "e")
							})
						}
					}, {
						key: "hasMoreComments",
						get: function e() {
							if (!this.data) return false;
							return this.data.total_parents > this.data.offset + this.data.limit
						}
					}]);
					return a
				}(a["default"]);
			(e["default"] = m).displayName = "List", k.exports = g.
		default
		}) ? t.apply(g, e) : t) || (k.exports = t)
	}, function(e, t, n) {
		var k, g, v, y, b;
		k = n(41), g = n(12).utf8, v = n(42), y = n(12).bin, (b = function(e, t) {
			e.constructor == String ? e = (t && "binary" === t.encoding ? y : g).stringToBytes(e) : v(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
			for (var n = k.bytesToWords(e), e = 8 * e.length, a = 1732584193, r = -271733879, i = -1732584194, l = 271733878, s = 0; s < n.length; s++) n[s] = 16711935 & (n[s] << 8 | n[s] >>> 24) | 4278255360 & (n[s] << 24 | n[s] >>> 8);
			n[e >>> 5] |= 128 << e % 32, n[14 + (64 + e >>> 9 << 4)] = e;
			for (var o = b._ff, c = b._gg, u = b._hh, d = b._ii, s = 0; s < n.length; s += 16) {
				var f = a,
					p = r,
					h = i,
					m = l,
					a = o(a, r, i, l, n[s + 0], 7, -680876936),
					l = o(l, a, r, i, n[s + 1], 12, -389564586),
					i = o(i, l, a, r, n[s + 2], 17, 606105819),
					r = o(r, i, l, a, n[s + 3], 22, -1044525330);
				a = o(a, r, i, l, n[s + 4], 7, -176418897), l = o(l, a, r, i, n[s + 5], 12, 1200080426), i = o(i, l, a, r, n[s + 6], 17, -1473231341), r = o(r, i, l, a, n[s + 7], 22, -45705983), a = o(a, r, i, l, n[s + 8], 7, 1770035416), l = o(l, a, r, i, n[s + 9], 12, -1958414417), i = o(i, l, a, r, n[s + 10], 17, -42063), r = o(r, i, l, a, n[s + 11], 22, -1990404162), a = o(a, r, i, l, n[s + 12], 7, 1804603682), l = o(l, a, r, i, n[s + 13], 12, -40341101), i = o(i, l, a, r, n[s + 14], 17, -1502002290), a = c(a, r = o(r, i, l, a, n[s + 15], 22, 1236535329), i, l, n[s + 1], 5, -165796510), l = c(l, a, r, i, n[s + 6], 9, -1069501632), i = c(i, l, a, r, n[s + 11], 14, 643717713), r = c(r, i, l, a, n[s + 0], 20, -373897302), a = c(a, r, i, l, n[s + 5], 5, -701558691), l = c(l, a, r, i, n[s + 10], 9, 38016083), i = c(i, l, a, r, n[s + 15], 14, -660478335), r = c(r, i, l, a, n[s + 4], 20, -405537848), a = c(a, r, i, l, n[s + 9], 5, 568446438), l = c(l, a, r, i, n[s + 14], 9, -1019803690), i = c(i, l, a, r, n[s + 3], 14, -187363961), r = c(r, i, l, a, n[s + 8], 20, 1163531501), a = c(a, r, i, l, n[s + 13], 5, -1444681467), l = c(l, a, r, i, n[s + 2], 9, -51403784), i = c(i, l, a, r, n[s + 7], 14, 1735328473), a = u(a, r = c(r, i, l, a, n[s + 12], 20, -1926607734), i, l, n[s + 5], 4, -378558), l = u(l, a, r, i, n[s + 8], 11, -2022574463), i = u(i, l, a, r, n[s + 11], 16, 1839030562), r = u(r, i, l, a, n[s + 14], 23, -35309556), a = u(a, r, i, l, n[s + 1], 4, -1530992060), l = u(l, a, r, i, n[s + 4], 11, 1272893353), i = u(i, l, a, r, n[s + 7], 16, -155497632), r = u(r, i, l, a, n[s + 10], 23, -1094730640), a = u(a, r, i, l, n[s + 13], 4, 681279174), l = u(l, a, r, i, n[s + 0], 11, -358537222), i = u(i, l, a, r, n[s + 3], 16, -722521979), r = u(r, i, l, a, n[s + 6], 23, 76029189), a = u(a, r, i, l, n[s + 9], 4, -640364487), l = u(l, a, r, i, n[s + 12], 11, -421815835), i = u(i, l, a, r, n[s + 15], 16, 530742520), a = d(a, r = u(r, i, l, a, n[s + 2], 23, -995338651), i, l, n[s + 0], 6, -198630844), l = d(l, a, r, i, n[s + 7], 10, 1126891415), i = d(i, l, a, r, n[s + 14], 15, -1416354905), r = d(r, i, l, a, n[s + 5], 21, -57434055), a = d(a, r, i, l, n[s + 12], 6, 1700485571), l = d(l, a, r, i, n[s + 3], 10, -1894986606), i = d(i, l, a, r, n[s + 10], 15, -1051523), r = d(r, i, l, a, n[s + 1], 21, -2054922799), a = d(a, r, i, l, n[s + 8], 6, 1873313359), l = d(l, a, r, i, n[s + 15], 10, -30611744), i = d(i, l, a, r, n[s + 6], 15, -1560198380), r = d(r, i, l, a, n[s + 13], 21, 1309151649), a = d(a, r, i, l, n[s + 4], 6, -145523070), l = d(l, a, r, i, n[s + 11], 10, -1120210379), i = d(i, l, a, r, n[s + 2], 15, 718787259), r = d(r, i, l, a, n[s + 9], 21, -343485551), a = a + f >>> 0, r = r + p >>> 0, i = i + h >>> 0, l = l + m >>> 0
			}
			return k.endian([a, r, i, l])
		})._ff = function(e, t, n, a, r, i, l) {
			l = e + (t & n | ~t & a) + (r >>> 0) + l;
			return (l << i | l >>> 32 - i) + t
		}, b._gg = function(e, t, n, a, r, i, l) {
			l = e + (t & a | n & ~a) + (r >>> 0) + l;
			return (l << i | l >>> 32 - i) + t
		}, b._hh = function(e, t, n, a, r, i, l) {
			l = e + (t ^ n ^ a) + (r >>> 0) + l;
			return (l << i | l >>> 32 - i) + t
		}, b._ii = function(e, t, n, a, r, i, l) {
			l = e + (n ^ (t | ~a)) + (r >>> 0) + l;
			return (l << i | l >>> 32 - i) + t
		}, b._blocksize = 16, b._digestsize = 16, e.exports = function(e, t) {
			if (null == e) throw new Error("Illegal argument " + e);
			e = k.wordsToBytes(b(e, t));
			return t && t.asBytes ? e : t && t.asString ? y.bytesToString(e) : k.bytesToHex(e)
		}
	}, function(e, t) {
		var i, n;
		i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
			rotl: function(e, t) {
				return e << t | e >>> 32 - t
			},
			rotr: function(e, t) {
				return e << 32 - t | e >>> t
			},
			endian: function(e) {
				if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
				for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
				return e
			},
			randomBytes: function(e) {
				for (var t = []; 0 < e; e--) t.push(Math.floor(256 * Math.random()));
				return t
			},
			bytesToWords: function(e) {
				for (var t = [], n = 0, a = 0; n < e.length; n++, a += 8) t[a >>> 5] |= e[n] << 24 - a % 32;
				return t
			},
			wordsToBytes: function(e) {
				for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
				return t
			},
			bytesToHex: function(e) {
				for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
				return t.join("")
			},
			hexToBytes: function(e) {
				for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
				return t
			},
			bytesToBase64: function(e) {
				for (var t = [], n = 0; n < e.length; n += 3) for (var a = e[n] << 16 | e[n + 1] << 8 | e[n + 2], r = 0; r < 4; r++) 8 * n + 6 * r <= 8 * e.length ? t.push(i.charAt(a >>> 6 * (3 - r) & 63)) : t.push("=");
				return t.join("")
			},
			base64ToBytes: function(e) {
				e = e.replace(/[^A-Z0-9+\/]/gi, "");
				for (var t = [], n = 0, a = 0; n < e.length; a = ++n % 4) 0 != a && t.push((i.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * a + 8) - 1) << 2 * a | i.indexOf(e.charAt(n)) >>> 6 - 2 * a);
				return t
			}
		}, e.exports = n
	}, function(e, t) {
		function n(e) {
			return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
		}
		/*!
		 * Determine if an object is a Buffer
		 *
		 * @author   Feross Aboukhadijeh <https://feross.org>
		 * @license  MIT
		 */
		e.exports = function(e) {
			return null != e && (n(e) || "function" == typeof(t = e).readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0)) || !! e._isBuffer);
			var t
		}
	}, function(e, t, n) {}, function(module, exports) {
		module.exports = function anonymous(locals, filters, escape, rethrow) {
			escape = escape ||
			function(e) {
				return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
			};
			var __stack = {
				lineno: 1,
				input: '<div class="artalk-list">\n  <div class="artalk-list-header">\n    <div class="artalk-comment-count">\n      <span class="artalk-comment-count-num">0</span>\n      条评论\n    </div>\n    <div class="artalk-right-action">\n      <span data-action="admin-close-comment" class="artalk-hide" data-list-ui-only-admin>关闭评论</span>\n      <span data-action="open-sidebar" class="artalk-hide artalk-on">通知中心</span>\n    </div>\n  </div>\n  <div class="artalk-list-body">\n    <div class="artalk-list-comments-wrap">\n    </div>\n    <div class="artalk-list-read-more" style="display: none;">\n      <div class="artalk-loading-icon" style="display: none;"></div>\n      <span class="artalk-text">查看更多</span>\n    </div>\n  </div>\n  <div class="artalk-list-footer">\n    <div class="artalk-copyright">\n      Powered By <a href="https://artalk.js.org" target="_blank" title="Artalk v<%= ARTALK_VERSION %>">Artalk v1.0.7</a>\n    </div>\n  </div>\n</div>\n',
				filename: "."
			};

			function rethrow(e, t, n, a) {
				var r = t.split("\n"),
					i = Math.max(a - 3, 0),
					t = Math.min(r.length, a + 3),
					t = r.slice(i, t).map(function(e, t) {
						t = t + i + 1;
						return (t == a ? " >> " : "    ") + t + "| " + e
					}).join("\n");
				throw e.path = n, e.message = (n || "ejs") + ":" + a + "\n" + t + "\n\n" + e.message, e
			}
			try {
				var buf = [];
				with(locals || {}) buf.push('<div class="artalk-list">\n  <div class="artalk-list-header">\n    <div class="artalk-comment-count">\n      <span class="artalk-comment-count-num">0</span>\n      条评论\n    </div>\n    <div class="artalk-right-action">\n      <span data-action="admin-close-comment" class="artalk-hide" data-list-ui-only-admin>关闭评论</span>\n      <span data-action="open-sidebar" class="artalk-hide artalk-on">通知中心</span>\n    </div>\n  </div>\n  <div class="artalk-list-body">\n    <div class="artalk-list-comments-wrap">\n    </div>\n    <div class="artalk-list-read-more" style="display: none;">\n      <div class="artalk-loading-icon" style="display: none;"></div>\n      <span class="artalk-text">查看更多</span>\n    </div>\n  </div>\n  <div class="artalk-list-footer">\n    <div class="artalk-copyright">\n      Powered By <a href="https://artalk.js.org" target="_blank" title="Artalk v', escape((__stack.lineno = 22, "1.0.7")), '">Artalk</a>\n    </div>\n  </div>\n</div>\n');
				return buf.join("")
			} catch (err) {
				rethrow(err, __stack.input, __stack.filename, __stack.lineno)
			}
		}
	}, function(k, g, v) {
		var e, t;
		e = [g, v(0), v(2), v(8), v(3), v(4), v(5), v(10), v(46), v(6), v(7), v(11)], void 0 === (t = "function" == typeof(t = function(e, r, t, i, l, s, o, c, n, a, u, d) {
			"use strict";
			var f = v(1);

			function p(r) {
				var i = h();
				return function e() {
					var t = (0, o["default"])(r),
						n;
					if (i) {
						var a = (0, o["default"])(this).constructor;
						n = Reflect.construct(t, arguments, a)
					} else n = t.apply(this, arguments);
					return (0, s["default"])(this, n)
				}
			}
			function h() {
				if (typeof Reflect === "undefined" || !Reflect.construct) return false;
				if (Reflect.construct.sham) return false;
				if (typeof Proxy === "function") return true;
				try {
					Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
					return true
				} catch (e) {
					return false
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, r = f(r), t = f(t), i = f(i), l = f(l), s = f(s), o = f(o), c = f(c), a = f(a), u = f(u), d = f(d);
			var m = function(e) {
					(0, l["default"])(a, e);
					var n = p(a);

					function a(e) {
						var t;
						(0, r["default"])(this, a);
						t = n.call(this, e);
						t.el = u["default"].createElement(v(47)((0, i["default"])(t)));
						t.contentEl = t.el.querySelector(".artalk-sidebar-content");
						t.el.querySelector(".artalk-sidebar-close").addEventListener("click", function() {
							t.hide()
						});
						t.initActionBar();
						return t
					}(0, t["default"])(a, [{
						key: "initActionBar",
						value: function e() {
							var a = this;
							var r = this.el.querySelector(".artalk-sidebar-actions");
							r.addEventListener("click", function(e) {
								var t = e.target;
								var n = t.getAttribute("data-artalk-action");
								if (!n) return;
								r.querySelectorAll(".artalk-active").forEach(function(e) {
									e.classList.remove("artalk-active")
								});
								t.classList.add("artalk-active");
								a.reqComment(n)
							})
						}
					}, {
						key: "show",
						value: function e() {
							var t = this;
							this.layer = (0, d["default"])(this.artalk, "sidebar", this.el);
							this.layer.show();
							this.contentEl.scrollTo(0, 0);
							setTimeout(function() {
								t.el.style.transform = "translate(0, 0)"
							}, 20);
							this.reqComment("mentions")
						}
					}, {
						key: "hide",
						value: function e() {
							this.el.style.transform = "";
							this.layer.dispose()
						}
					}, {
						key: "reqComment",
						value: function e(t) {
							var n = this;
							this.contentEl.innerHTML = "";
							var a = {
								nick: this.artalk.user.data.nick,
								email: this.artalk.user.data.email,
								type: t,
								limit: 999
							};
							if (this.artalk.user.data.isAdmin) a = Object.assign({
								password: this.artalk.user.data.password
							}, a);
							this.artalk.request("CommentGetV2", a, function() {
								n.artalk.ui.showLoading(n.contentEl)
							}, function() {
								n.artalk.ui.hideLoading(n.contentEl)
							}, function(e, t) {
								n.contentEl.innerHTML = "";
								if (Array.isArray(t.comments)) t.comments.forEach(function(e) {
									n.putComment(e)
								});
								if (!t.comments || !Array.isArray(t.comments) || t.comments.length <= 0) n.showNoComment()
							}, function(e, t) {})
						}
					}, {
						key: "putComment",
						value: function e(t) {
							var n = new c["default"](this.artalk, null, t);
							n.elem.querySelector('[data-comment-action="reply"]').remove();
							n.elem.style.cursor = "pointer";
							n.elem.addEventListener("mouseover", function() {
								n.elem.style.backgroundColor = "var(--at-color-bg-grey)"
							});
							n.elem.addEventListener("mouseout", function() {
								n.elem.style.backgroundColor = ""
							});
							n.elem.addEventListener("click", function(e) {
								e.preventDefault();
								window.location.href = "".concat(t.page_key, "#artalk-comment-").concat(n.data.id)
							});
							this.contentEl.appendChild(n.getElem())
						}
					}, {
						key: "showNoComment",
						value: function e() {
							this.contentEl.innerHTML = '<div class="artalk-sidebar-no-content">无内容</div>'
						}
					}]);
					return a
				}(a["default"]);
			(e["default"] = m).displayName = "Sidebar", k.exports = g.
		default
		}) ? t.apply(g, e) : t) || (k.exports = t)
	}, function(e, t, n) {}, function(module, exports) {
		module.exports = function anonymous(locals, filters, escape, rethrow) {
			escape = escape ||
			function(e) {
				return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;")
			};
			var __stack = {
				lineno: 1,
				input: '<div class="artalk-sidebar">\n  <div class="artalk-sidebar-inner">\n    <div class="artalk-sidebar-title">通知中心</div>\n    <div class="artalk-sidebar-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg></div>\n    <div class="artalk-sidebar-actions">\n      <span class="artalk-action-item artalk-active" data-artalk-action="mentions">提及</span>\n      <span class="artalk-action-item" data-artalk-action="all">全部</span>\n      <span class="artalk-action-item" data-artalk-action="mine">我的</span>\n      <span class="artalk-action-item" data-artalk-action="pending">待审</span>\n    </div>\n    <div class="artalk-sidebar-content"></div>\n  </div>\n</div>\n',
				filename: "."
			};

			function rethrow(e, t, n, a) {
				var r = t.split("\n"),
					i = Math.max(a - 3, 0),
					t = Math.min(r.length, a + 3),
					t = r.slice(i, t).map(function(e, t) {
						t = t + i + 1;
						return (t == a ? " >> " : "    ") + t + "| " + e
					}).join("\n");
				throw e.path = n, e.message = (n || "ejs") + ":" + a + "\n" + t + "\n\n" + e.message, e
			}
			try {
				var buf = [];
				with(locals || {}) buf.push('<div class="artalk-sidebar">\n  <div class="artalk-sidebar-inner">\n    <div class="artalk-sidebar-title">通知中心</div>\n    <div class="artalk-sidebar-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg></div>\n    <div class="artalk-sidebar-actions">\n      <span class="artalk-action-item artalk-active" data-artalk-action="mentions">提及</span>\n      <span class="artalk-action-item" data-artalk-action="all">全部</span>\n      <span class="artalk-action-item" data-artalk-action="mine">我的</span>\n      <span class="artalk-action-item" data-artalk-action="pending">待审</span>\n    </div>\n    <div class="artalk-sidebar-content"></div>\n  </div>\n</div>\n');
				return buf.join("")
			} catch (err) {
				rethrow(err, __stack.input, __stack.filename, __stack.lineno)
			}
		}
	}, function(f, p, h) {
		var e, t;
		e = [p, h(0), h(2), h(3), h(4), h(5), h(6), h(7)], void 0 === (t = "function" == typeof(t = function(e, r, t, i, l, s, n, d) {
			"use strict";
			var a = h(1);

			function o(r) {
				var i = c();
				return function e() {
					var t = (0, s["default"])(r),
						n;
					if (i) {
						var a = (0, s["default"])(this).constructor;
						n = Reflect.construct(t, arguments, a)
					} else n = t.apply(this, arguments);
					return (0, l["default"])(this, n)
				}
			}
			function c() {
				if (typeof Reflect === "undefined" || !Reflect.construct) return false;
				if (Reflect.construct.sham) return false;
				if (typeof Proxy === "function") return true;
				try {
					Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
					return true
				} catch (e) {
					return false
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: true
			}), e["default"] = void 0, r = a(r), t = a(t), i = a(i), l = a(l), s = a(s), n = a(n), d = a(d);
			var u = function(e) {
					(0, i["default"])(a, e);
					var n = o(a);

					function a(e) {
						var t;
						(0, r["default"])(this, a);
						t = n.call(this, e);
						t.el = t.artalk.el;
						t.initDarkMode();
						return t
					}(0, t["default"])(a, [{
						key: "showLoading",
						value: function e(t) {
							if (!t) t = this.el;
							var n = t.querySelector(".artalk-loading");
							if (!n) {
								n = d["default"].createElement('<div class="artalk-loading" style="display: none;"><div class="artalk-loading-spinner"><svg viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle></svg></div><span>take a while</span></div>');
								t.appendChild(n)
							}
							n.style.display = ""
						}
					}, {
						key: "hideLoading",
						value: function e(t) {
							if (!t) t = this.el;
							var n = t.querySelector(".artalk-loading");
							n.style.display = "none"
						}
					}, {
						key: "setGlobalError",
						value: function e(t) {
							var n = this.el.querySelector(".artalk-error-layer");
							if (t === null) {
								if (n !== null) n.remove();
								return
							}
							if (!n) {
								n = d["default"].createElement('<div class="artalk-error-layer"><span class="artalk-error-title">Artalk Error</span><span class="artalk-error-text"></span></div>');
								this.el.appendChild(n)
							}
							var a = n.querySelector(".artalk-error-text");
							a.innerHTML = "";
							if (t === null) return;
							if (t instanceof HTMLElement) a.appendChild(t);
							else a.innerText = t
						}
					}, {
						key: "showDialog",
						value: function e(t, n, a, r, i) {
							var l = d["default"].createElement('<div class="artalk-layer-dialog-wrap"><div class="artalk-layer-dialog"><div class="artalk-layer-dialog-content"></div><div class="artalk-layer-dialog-action"></div>');
							t.appendChild(l);
							var s = l.querySelector(".artalk-layer-dialog-action");
							var o = function e(n) {
									return function(e) {
										var t = n(l, e.currentTarget);
										if (t === undefined || t === true) l.remove()
									}
								};
							if (typeof a === "function") {
								var c = d["default"].createElement('<button data-action="confirm">确定</button>');
								c.onclick = o(a);
								s.appendChild(c)
							}
							if (typeof r === "function") {
								var u = d["default"].createElement('<button data-action="cancel">取消</button>');
								u.onclick = o(r);
								s.appendChild(u)
							}
							l.querySelector(".artalk-layer-dialog-content").appendChild(n);
							i(l)
						}
					}, {
						key: "showNotify",
						value: function e(t, n, a) {
							var r = {
								s: "#57d59f",
								e: "#ff6f6c",
								w: "#ffc721",
								i: "#2ebcfc"
							};
							var i = 3e3;
							var l = d["default"].createElement('<div class="artalk-notify artalk-fade-in" style="background-color: '.concat(r[n], '"><span class="artalk-notify-content"></span></div>'));
							var s = l.querySelector(".artalk-notify-content");
							s.innerHTML = d["default"].htmlEncode(t).replace("\n", "<br/>");
							a.appendChild(l);
							var o = function e() {
									l.classList.add("artalk-fade-out");
									setTimeout(function() {
										l.remove()
									}, 200)
								};
							var c;
							if (i > 0) c = setTimeout(function() {
								o()
							}, i);
							l.addEventListener("click", function() {
								o();
								clearTimeout(c)
							})
						}
					}, {
						key: "scrollIntoView",
						value: function e(t) {
							var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
							if (this.isVisible(t)) return;
							var a = d["default"].getOffset(t).top + d["default"].getHeight(t) / 2 - document.documentElement.clientHeight / 2;
							if (n) window.scroll({
								top: a > 0 ? a : 0,
								left: 0,
								behavior: "smooth"
							});
							else window.scroll(0, a > 0 ? a : 0)
						}
					}, {
						key: "isVisible",
						value: function e(t) {
							var n = window.scrollY;
							var a = n + document.documentElement.clientHeight;
							var r = d["default"].getOffset(t).top;
							var i = r + t.offsetHeight;
							return i <= a && r >= n
						}
					}, {
						key: "playFadeAnim",
						value: function e(t, n) {
							var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "in";
							t.classList.add("artalk-fade-".concat(a));
							var r = function e() {
									t.classList.remove("artalk-fade-".concat(a));
									t.removeEventListener("animationend", e);
									if (n) n()
								};
							t.addEventListener("animationend", r)
						}
					}, {
						key: "playFadeInAnim",
						value: function e(t, n) {
							this.playFadeAnim(t, n, "in")
						}
					}, {
						key: "playFadeOutAnim",
						value: function e(t, n) {
							this.playFadeAnim(t, n, "out")
						}
					}, {
						key: "initDarkMode",
						value: function e() {
							var t = this.artalk,
								n = t.el,
								a = t.conf;
							var r = "artalk-dark-mode";
							if (a.darkMode) n.classList.add(r);
							else n.classList.remove(r);
							var i = document.querySelector(".artalk-layer-wrap");
							if (i) if (a.darkMode) i.classList.add(r);
							else i.classList.remove(r)
						}
					}, {
						key: "setDarkMode",
						value: function e(t) {
							this.artalk.conf.darkMode = t;
							this.initDarkMode()
						}
					}, {
						key: "openDarkMode",
						value: function e() {
							this.setDarkMode(true)
						}
					}, {
						key: "closeDarkMode",
						value: function e() {
							this.setDarkMode(false)
						}
					}]);
					return a
				}(n["default"]);
			(e["default"] = u).displayName = "Ui", f.exports = p.
		default
		}) ? t.apply(p, e) : t) || (f.exports = t)
	}, function(e) {
		e.exports = JSON.parse('{"颜表情":{"inputType":"emoticon","container":{"Hi":"|´・ω・)ノ","开心":"ヾ(≧∇≦*)ゝ","星星眼":"(☆ω☆)","掀桌":"（╯‵□′）╯︵┴─┴","流口水":"￣﹃￣","捂脸":"(/ω＼)","给跪":"∠( ᐛ 」∠)＿","哈？":"(๑•̀ㅁ•́ฅ)","斜眼":"→_→","加油":"୧(๑•̀⌄•́๑)૭","有木有WiFi":"٩(ˊᗜˋ*)و","前方高能预警":"(ノ°ο°)ノ","纳尼":"(´இ皿இ｀)","吓死惹":"⌇●﹏●⌇","已阅留爪":"(ฅ´ω`ฅ)","去吧大师球":"(╯°A°)╯︵○○○","太萌惹":"φ(￣∇￣o)","咦咦咦":"ヾ(´･ ･｀｡)ノ\\"","气呼呼":"( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃","我受到了惊吓":"(ó﹏ò｡)","什么鬼":"Σ(っ °Д °;)っ","摸摸头":"( ,,´･ω･)ﾉ\\"(´っω･｀｡)","无奈":"╮(╯▽╰)╭ ","脸红":"o(*////▽////*)q ","悲哀":"＞﹏＜","静静地看着你":"( ๑´•ω•) \\"(ㆆᴗㆆ)","不要哇":"(｡•ˇ‸ˇ•｡)"}},"Emoji":{"inputType":"emoji","container":["😀","😃","😄","😁","😆","😅","😂","😊","😉","👀","😌","😍","😘","😋","😜","😝","😎","😏","😒","😟","😕","😖","😫","😩","😠","😲","😵","😳","😱","😨","😢","😭","😷","✋","✌️","👊","👋","👏","👍","👎","❤️","🎉","🚀"]},"滑稽":{"inputType":"image","container":{"原味稽":"https://i.loli.net/2019/02/01/5c53d26b7ae13.png","还是算了":"https://i.loli.net/2020/04/30/riySFlu75fJdG4p.png","蓝纹稽":"https://i.loli.net/2020/04/30/jyh5IVzpqXsHuvU.jpg","随稽应变":"https://i.loli.net/2017/02/05/5896e6ec1d528.jpg","蠕动":"https://i.loli.net/2017/02/05/5896e9712a3c1.gif","束手无稽":"https://i.loli.net/2020/04/30/dF8sTOpgomj7qf5.jpg","微笑默叹以为妙绝":"https://i.loli.net/2019/02/01/5c53daa84f24a.png","喝嘤料":"https://i.loli.net/2019/02/01/5c53d63d8c6af.jpg","暗中观察":"https://i.loli.net/2019/02/01/5c53dd21a2e7b.jpg","高兴":"https://i.loli.net/2019/02/01/5c53d1b9e5f38.jpg","惊稽":"https://i.loli.net/2019/02/01/5c53d1e2ad89f.jpg","可这和我的帅有什么关系":"https://i.loli.net/2017/02/05/5896ece29a8e0.jpg","狱稽":"https://i.loli.net/2020/04/30/cUEQrVYGFiDjqhy.jpg","梆":"https://i.loli.net/2020/04/30/TlAGjm6IvJSMVpq.jpg","吃鱼摆摆":"https://i.loli.net/2017/02/05/5896ec2cb7f39.gif","跃跃欲试 3":"https://i.loli.net/2017/02/05/5896ece2ac5a2.gif","突然滑稽":"https://i.loli.net/2019/02/01/5c53cf2a457f1.jpg","扶墙怂":"https://i.loli.net/2017/02/05/5896ece2ab57a.jpg","阔以":"https://i.loli.net/2020/04/30/7EYyq1TcBKa3eQ2.jpg","不得行":"https://i.loli.net/2020/04/30/KoqBGauX7TEfeyn.jpg","少儿不宜":"https://i.loli.net/2020/04/30/nt2ZWRozUNjBxAK.jpg","稽日可期":"https://i.loli.net/2020/04/30/FmfYcoMJesi2Ddq.jpg","哎":"https://i.loli.net/2020/04/30/ps7PTIANgSErqnU.jpg","别看丢人":"https://i.loli.net/2019/02/01/5c53d4f89ea29.jpg","地稽 2":"https://i.loli.net/2019/02/01/5c53dbae85687.jpg","地稽":"https://i.loli.net/2020/04/30/BnTMX35EPxleVmA.jpg","老阔有点扣":"https://i.loli.net/2020/04/30/fhDXbA9T1zJPlKk.gif","啊哈哈":"https://i.loli.net/2019/02/01/5c53dc2947d84.jpg","无稽可奈":"https://i.loli.net/2020/04/30/UyxTzB2fS3LtH7Q.jpg","老实巴交":"https://i.loli.net/2020/04/30/7DgSoyqwtYBxchE.jpg","紧张":"https://i.loli.net/2017/02/05/5896e8a408253.jpg","摇摆稽":"https://i.loli.net/2019/02/01/5c53d1904dcb2.gif","又不是不能用":"https://i.loli.net/2019/02/01/5c53ce897ab55.jpg","一时滑稽":"https://i.loli.net/2019/02/01/5c53d5d28e22c.jpg","无法接受":"https://i.loli.net/2019/02/01/5c53cee8422fc.jpg","嘤雄豪稽":"https://i.loli.net/2020/04/30/sbtw6o7iKaM4Nmq.jpg","相视双稽":"https://i.loli.net/2019/02/01/5c53d5a093149.jpg","稽皮发麻":"https://i.loli.net/2017/02/05/5896ece2a019f.jpg","地稽 3":"https://i.loli.net/2019/02/01/5c53dbe510bcf.jpg","地稽委屈":"https://i.loli.net/2019/02/01/5c53d76e250da.jpg","地稽抚摸":"https://i.loli.net/2020/04/30/cavZ6nNzMPimLy7.gif","地稽捶打":"https://i.loli.net/2020/04/30/vFVPynXaHR5sitk.gif","绝望":"https://i.loli.net/2019/02/01/5c53dc0ba2303.jpg","气稽败坏":"https://i.loli.net/2019/02/01/5c53d216f3c60.jpg","当场去世":"https://i.loli.net/2020/04/30/sogxHMTFWbE2lrP.jpg","喝酒":"https://i.loli.net/2019/02/01/5c53d78c3f4a5.jpg","老衲摆摊算命":"https://i.loli.net/2017/02/05/5896ece29d8a5.gif","老哥，稳":"https://i.loli.net/2017/02/05/5896ece29ebb0.jpg","自闭稽":"https://i.loli.net/2019/02/01/5c53d6603ee24.jpg","无话可说":"https://i.loli.net/2019/02/01/5c53d6a77b7e4.jpg","跃跃欲试":"https://i.loli.net/2017/02/05/5896e9710dfd5.jpg","跃跃欲试 2":"https://i.loli.net/2019/02/01/5c53dcc057350.jpg","满脑子骚操作":"https://i.loli.net/2020/04/30/xJXcUtO2BryHAsa.gif","稽之舞":"https://i.loli.net/2019/02/01/5c53de1a4d14d.gif","将稽就稽":"https://i.loli.net/2020/04/30/KVwf8qCrZts6WOT.gif"}}}')
	}], e = {}, f.m = d, f.c = e, f.d = function(e, t, n) {
		f.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, f.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, f.t = function(t, e) {
		if (1 & e && (t = f(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (f.r(n), Object.defineProperty(n, "default", {
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t) for (var a in t) f.d(n, a, function(e) {
			return t[e]
		}.bind(null, a));
		return n
	}, f.n = function(e) {
		var t = e && e.__esModule ?
		function() {
			return e.
		default
		} : function() {
			return e
		};
		return f.d(t, "a", t), t
	}, f.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, f.p = "", f(f.s = 13);

	function f(t) {
		if (e[t]) return e[t].exports;
		var n = e[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return d[t].call(n.exports, n, n.exports, f), n.l = !0, n.exports
	}
	var d, e
});
