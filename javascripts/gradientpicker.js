/*! grapick - 0.1.7 */ ! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Grapick = t() : e.Grapick = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 1)
    }([function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            t = t.split(/\s+/);
            for (var i = 0; i < t.length; ++i) e.addEventListener(t[i], n)
        }

        function r(e, t, n) {
            t = t.split(/\s+/);
            for (var i = 0; i < t.length; ++i) e.removeEventListener(t[i], n)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.on = i, t.off = r
    }, function(e, t, n) {
        "use strict";
        var i = n(2),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i);
        e.exports = function(e) {
            return new r.default(e)
        }
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function l(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            c = n(3),
            u = i(c),
            h = n(4),
            d = i(h),
            f = n(0),
            v = function(e, t) {
                return e.position - t.position
            },
            g = function(e) {
                return e + "-gradient("
            },
            p = function(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    o(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    e = Object.assign({}, e);
                    var i = {
                        pfx: "grp",
                        el: ".grp",
                        colorEl: "",
                        min: 0,
                        max: 100,
                        direction: "90deg",
                        type: "linear",
                        height: "30px",
                        width: "100%"
                    };
                    for (var r in i) r in e || (e[r] = i[r]);
                    var l = e.el;
                    if (!((l = "string" == typeof l ? document.querySelector(l) : l) instanceof HTMLElement)) throw "Element not found, given " + l;
                    return n.el = l, n.handlers = [], n.options = e, n.on("handler:color:change", function(e, t) {
                        return n.change(t)
                    }), n.on("handler:position:change", function(e, t) {
                        return n.change(t)
                    }), n.on("handler:remove", function(e) {
                        return n.change(1)
                    }), n.on("handler:add", function(e) {
                        return n.change(1)
                    }), n.render(), n
                }
                return l(t, e), s(t, [{
                    key: "setColorPicker",
                    value: function(e) {
                        this.colorPicker = e
                    }
                }, {
                    key: "getValue",
                    value: function(e, t) {
                        var n = this.getColorValue(),
                            i = e || this.getType(),
                            r = t || this.getDirection();
                        return n ? i + "-gradient(" + r + ", " + n + ")" : ""
                    }
                }, {
                    key: "getSafeValue",
                    value: function(e, t) {
                        var n = this.previewEl,
                            i = this.getValue(e, t);
                        if (!this.sandEl && (this.sandEl = document.createElement("div")), !n || !i) return "";
                        for (var o = this.sandEl.style, a = [i].concat(r(this.getPrefixedValues(e, t))), l = void 0, s = 0; s < a.length && (l = a[s], o.backgroundImage = l, o.backgroundImage != l); s++);
                        return o.backgroundImage
                    }
                }, {
                    key: "setValue",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = this.type,
                            r = this.direction,
                            o = t.indexOf("(") + 1,
                            a = t.lastIndexOf(")"),
                            l = t.substring(o, a),
                            s = l.split(/,(?![^(]*\)) /);
                        if (this.clear(n), !l) return void this.updatePreview();
                        s.length > 2 && (r = s.shift());
                        var c = void 0;
                        ["repeating-linear", "repeating-radial", "linear", "radial"].forEach(function(e) {
                            t.indexOf(g(e)) > -1 && !c && (c = 1, i = e)
                        }), this.setDirection(r, n), this.setType(i, n), s.forEach(function(t) {
                            var i = t.split(" "),
                                r = parseFloat(i.pop()),
                                o = i.join("");
                            e.addHandler(r, o, 0, n)
                        }), this.updatePreview()
                    }
                }, {
                    key: "getColorValue",
                    value: function() {
                        var e = this.handlers;
                        return e.sort(v), e = 1 == e.length ? [e[0], e[0]] : e, e.map(function(e) {
                            return e.getValue()
                        }).join(", ")
                    }
                }, {
                    key: "getPrefixedValues",
                    value: function(e, t) {
                        var n = this.getValue(e, t);
                        return ["-moz-", "-webkit-", "-o-", "-ms-"].map(function(e) {
                            return "" + e + n
                        })
                    }
                }, {
                    key: "change",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.updatePreview(), !t.silent && this.emit("change", e)
                    }
                }, {
                    key: "setDirection",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.options.direction = e, this.change(1, t)
                    }
                }, {
                    key: "getDirection",
                    value: function() {
                        return this.options.direction
                    }
                }, {
                    key: "setType",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.options.type = e, this.change(1, t)
                    }
                }, {
                    key: "getType",
                    value: function() {
                        return this.options.type
                    }
                }, {
                    key: "addHandler",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            r = new d.default(this, e, t, n);
                        return !i.silent && this.emit("handler:add", r), r
                    }
                }, {
                    key: "getHandler",
                    value: function(e) {
                        return this.handlers[e]
                    }
                }, {
                    key: "getHandlers",
                    value: function() {
                        return this.handlers
                    }
                }, {
                    key: "clear",
                    value: function() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this.handlers, n = t.length - 1; n >= 0; n--) t[n].remove(e)
                    }
                }, {
                    key: "getSelected",
                    value: function() {
                        for (var e = this.getHandlers(), t = 0; t < e.length; t++) {
                            var n = e[t];
                            if (n.isSelected()) return n
                        }
                        return null
                    }
                }, {
                    key: "updatePreview",
                    value: function() {
                        var e = this.previewEl;
                        e && (e.style.backgroundImage = this.getSafeValue("linear", "to right"))
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        var e = this,
                            t = this.options,
                            n = t.min,
                            i = t.max,
                            r = this.previewEl,
                            o = 0,
                            a = {};
                        r && (0, f.on)(r, "click", function(t) {
                            a.w = r.clientWidth, a.h = r.clientHeight;
                            var l = t.offsetX - r.clientLeft,
                                s = t.offsetY - r.clientTop;
                            if (!((o = l / a.w * 100) > i || o < n)) {
                                var c = document.createElement("canvas"),
                                    u = c.getContext("2d");
                                c.width = a.w, c.height = a.h;
                                var h = u.createLinearGradient(0, 0, a.w, a.h);
                                e.getHandlers().forEach(function(e) {
                                    return h.addColorStop(e.position / 100, e.color)
                                }), u.fillStyle = h, u.fillRect(0, 0, c.width, c.height), c.style.background = "black";
                                var d = c.getContext("2d").getImageData(l, s, 1, 1).data,
                                    f = "#000";
                                e.addHandler(o, f)
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.options,
                            t = this.el,
                            n = e.pfx,
                            i = e.height,
                            r = e.width;
                        if (t) {
                            var o = n + "-wrapper",
                                a = n + "-preview";
                            t.innerHTML = '\n      <div class="' + o + '">\n        <div class="' + a + '"></div>\n      </div>\n    ';
                            var l = t.querySelector("." + o),
                                s = t.querySelector("." + a),
                                c = l.style;
                            c.position = "relative", this.wrapperEl = l, this.previewEl = s, i && (c.height = i), r && (c.width = r), this.initEvents(), this.updatePreview()
                        }
                    }
                }]), t
            }(u.default);
        t.default = p
    }, function(e, t) {
        function n() {}
        n.prototype = {
            on: function(e, t, n) {
                var i = this.e || (this.e = {});
                return (i[e] || (i[e] = [])).push({
                    fn: t,
                    ctx: n
                }), this
            },
            once: function(e, t, n) {
                function i() {
                    r.off(e, i), t.apply(n, arguments)
                }
                var r = this;
                return i._ = t, this.on(e, i, n)
            },
            emit: function(e) {
                var t = [].slice.call(arguments, 1),
                    n = ((this.e || (this.e = {}))[e] || []).slice(),
                    i = 0,
                    r = n.length;
                for (i; i < r; i++) n[i].fn.apply(n[i].ctx, t);
                return this
            },
            off: function(e, t) {
                var n = this.e || (this.e = {}),
                    i = n[e],
                    r = [];
                if (i && t)
                    for (var o = 0, a = i.length; o < a; o++) i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]);
                return r.length ? n[e] = r : delete n[e], this
            }
        }, e.exports = n
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = n(0),
            a = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "black",
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    i(this, e), t.getHandlers().push(this), this.gp = t, this.position = n, this.color = r, this.selected = 0, this.render(), o && this.select()
                }
                return r(e, [{
                    key: "toJSON",
                    value: function() {
                        return {
                            position: this.position,
                            selected: this.selected,
                            color: this.color
                        }
                    }
                }, {
                    key: "setColor",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        this.color = e, this.emit("handler:color:change", this, t)
                    }
                }, {
                    key: "setPosition",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            n = this.getEl();
                        this.position = e, n && (n.style.left = e + "%"), this.emit("handler:position:change", this, t)
                    }
                }, {
                    key: "getColor",
                    value: function() {
                        return this.color
                    }
                }, {
                    key: "getPosition",
                    value: function() {
                        return this.position
                    }
                }, {
                    key: "isSelected",
                    value: function() {
                        return !!this.selected
                    }
                }, {
                    key: "getValue",
                    value: function() {
                        return this.getColor() + " " + this.getPosition() + "%"
                    }
                }, {
                    key: "select",
                    value: function() {
                        var e = this.getEl();
                        this.gp.getHandlers().forEach(function(e) {
                            return e.deselect()
                        }), this.selected = 1;
                        var t = this.getSelectedCls();
                        e && (e.className += " " + t), this.emit("handler:select", this)
                    }
                }, {
                    key: "deselect",
                    value: function() {
                        var e = this.getEl();
                        this.selected = 0;
                        var t = this.getSelectedCls();
                        e && (e.className = e.className.replace(t, "").trim()), this.emit("handler:deselect", this)
                    }
                }, {
                    key: "getSelectedCls",
                    value: function() {
                        return this.gp.options.pfx + "-handler-selected"
                    }
                }, {
                    key: "remove",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = this.getEl(),
                            n = this.gp.getHandlers(),
                            i = n.splice(n.indexOf(this), 1)[0];
                        return t && t.parentNode.removeChild(t), !e.silent && this.emit("handler:remove", i), i
                    }
                }, {
                    key: "getEl",
                    value: function() {
                        return this.el
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        var e = this,
                            t = this.getEl(),
                            n = this.gp.previewEl,
                            i = this.gp.options,
                            r = i.min,
                            a = i.max,
                            l = t.querySelector("[data-toggle=handler-close]"),
                            s = t.querySelector("[data-toggle=handler-color-c]"),
                            c = t.querySelector("[data-toggle=handler-color-wrap]"),
                            u = t.querySelector("[data-toggle=handler-color]"),
                            h = t.querySelector("[data-toggle=handler-drag]");
                        if (s && (0, o.on)(s, "click", function(e) {
                                return e.stopPropagation()
                            }), l && (0, o.on)(l, "click", function(t) {
                                t.stopPropagation(), e.remove()
                            }), u && (0, o.on)(u, "change", function(t) {
                                var n = t.target,
                                    i = n.value;
                                e.setColor(i), c && (c.style.backgroundColor = i)
                            }), h) {
                            var d = 0,
                                f = 0,
                                v = 0,
                                g = {},
                                p = {},
                                y = {},
                                m = function(t) {
                                    v = 1, y.x = t.clientX - p.x, y.y = t.clientY - p.y, d = 100 * y.x, d /= g.w, d = f + d, d = d < r ? r : d, d = d > a ? a : d, e.setPosition(d, 0), e.emit("handler:drag", e, d), 0 === t.which && k(t)
                                },
                                k = function t(n) {
                                    v && (v = 0, e.setPosition(d), (0, o.off)(document, "touchmove mousemove", m), (0, o.off)(document, "touchend mouseup", t), e.emit("handler:drag:end", e, d))
                                },
                                b = function(t) {
                                    0 === t.button && (e.select(), f = e.position, g.w = n.clientWidth, g.h = n.clientHeight, p.x = t.clientX, p.y = t.clientY, (0, o.on)(document, "touchmove mousemove", m), (0, o.on)(document, "touchend mouseup", k), e.emit("handler:drag:start", e))
                                };
                            (0, o.on)(h, "touchstart mousedown", b), (0, o.on)(h, "click", function(e) {
                                return e.stopPropagation()
                            })
                        }
                    }
                }, {
                    key: "emit",
                    value: function() {
                        var e;
                        (e = this.gp).emit.apply(e, arguments)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.gp,
                            t = e.options,
                            n = e.previewEl,
                            i = e.colorPicker,
                            r = t.pfx,
                            o = t.colorEl,
                            a = this.getColor();
                        if (n) {
                            var l = document.createElement("div"),
                                s = l.style,
                                c = r + "-handler";
                            return l.className = c, l.innerHTML = '\n      <div class="' + c + '-close-c">\n        <div class="' + c + '-close" data-toggle="handler-close">&Cross;</div>\n      </div>\n      <div class="' + c + '-drag" data-toggle="handler-drag"></div>\n      <div class="' + c + '-cp-c" data-toggle="handler-color-c">\n        ' + (o || '\n          <div class="' + c + '-cp-wrap" data-toggle="handler-color-wrap" style="background-color: ' + a + '">\n            <input type="color" data-toggle="handler-color" value="' + a + '">\n          </div>') + "\n      </div>\n    ", s.position = "absolute", s.top = 0, s.left = this.position + "%", n.appendChild(l), this.el = l, this.initEvents(), i && i(this), l
                        }
                    }
                }]), e
            }();
        t.default = a
    }])
});